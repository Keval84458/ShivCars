const { connectionToMySql } = require("../connection");
const nodemailer = require("nodemailer");

const handleContactForm = async (req, res) => {
  try {
    const db = await connectionToMySql();
    const { customerName, email, mobileNo, location, contactDate, about } =
      req.body;

    if (
      !customerName ||
      !email ||
      !mobileNo ||
      !location ||
      !contactDate ||
      !about
    ) {
      return res.status(400).json({ msg: "All fields are required." });
    }

    // ✅ Insert into DB
    const sql = `INSERT INTO contactform (customerName, email, mobileNo, location, contactDate, about) VALUES (?, ?, ?, ?, ?, ?)`;

    const [rows] = await db.query(sql, [
      customerName,
      email,
      mobileNo,
      location,
      contactDate,
      about,
    ]);

    // ✅ Send acknowledgement email
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
        from: `"Shiv Cars" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Thanks for contacting Shiv Cars 🚗",
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color:#0056b3;">Hello ${customerName}, 👋</h2>
            <p>Thank you for reaching out to <b>Shiv Cars</b>. We have received your enquiry.</p>
            
            <h3>📌 Your Details:</h3>
            <ul>
              <li><b>Name:</b> ${customerName}</li>
              <li><b>Email:</b> ${email}</li>
              <li><b>Mobile:</b> ${mobileNo}</li>
              <li><b>Location:</b> ${location}</li>
              <li><b>Contact Date:</b> ${contactDate}</li>
              <li><b>About:</b> ${about}</li>
            </ul>

            <p>📅 Submitted On: ${currentDateTime}</p>

            <p>Our team will contact you shortly. ✅</p>

            <p style="margin-top:20px;">Warm regards,<br><b>Shiv Cars Team</b></p>
          </div>
        `,
      });

      console.log("✅ Contact form acknowledgement email sent successfully!");
    } catch (emailErr) {
      console.error("❌ Email Sending Failed:", emailErr.message);
    }

    return res.status(201).json({
      msg: "Contact form submitted successfully",
      success: true,
      rows,
    });
  } catch (err) {
    console.error("❌ Error:", err.message);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

module.exports = { handleContactForm };
