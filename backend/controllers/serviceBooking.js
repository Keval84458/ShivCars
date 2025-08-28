const { connectionToMySql } = require("../connection");
const nodemailer = require("nodemailer");

const handleServiceBooking = async (req, res) => {
  try {
    const db = await connectionToMySql();
    const {
      vehicleName,
      regNo,
      yourName,
      email,
      location,
      bookingDate,
      details,
    } = req.body;

    const sql = `INSERT INTO servicebookings(
      vehicleName,
      regNo,
      yourName,
      email,
      location,
      bookingDate,
      details
    ) VALUES(?,?,?,?,?,?,?)`;

    await db.query(sql, [
      vehicleName,
      regNo,
      yourName,
      email,
      location,
      bookingDate,
      details,
    ]);

    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const currentDateTime = new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        dateStyle: "medium",
        timeStyle: "short",
      });

      await transporter.sendMail({
        from: `"Shiv Cars Service" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Car Service Booking Confirmation 🛠️🚗",
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color:#0056b3;">Dear ${yourName}, 🌟</h2>
            <p>Your <b>car service booking</b> has been successfully received! 🛠️✨</p>

            <h3>📍 Booking Details:</h3>
            <ul>
              <li><b>Vehicle Name:</b> ${vehicleName}</li>
              <li><b>Registration No:</b> ${regNo}</li>
              <li><b>Location:</b> ${location}</li>
              <li><b>Booking Date:</b> ${bookingDate}</li>
              <li><b>Details:</b> ${details || "N/A"}</li>
              <li><b>Created At:</b> ${currentDateTime}</li>
            </ul>

            <p>📝 Note: Please ensure your vehicle reaches our service center on time. ✅</p>

            <p>If you have any questions, feel free to contact our support team.</p>

            <p style="margin-top:20px;">Thank you for choosing <b>Shiv Cars Service</b> – we keep your car running smoothly! 💙</p>

            <p>Warm regards,<br><b>Shiv Cars Team</b></p>
          </div>
        `,
      });

      console.log("✅ Service booking confirmation email sent successfully!");
    } catch (emailErr) {
      console.error("❌ Email Sending Failed:", emailErr.message);
    }

    return res
      .status(201)
      .json({ msg: "Service booking created successfully ✅" });
  } catch (err) {
    console.error("❌ DB Error:", err.message);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

module.exports = { handleServiceBooking };
