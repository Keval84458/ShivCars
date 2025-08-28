const { connectionToMySql } = require("../connection");
const nodemailer = require("nodemailer");

const handleCreateFinance = async (req, res) => {
  try {
    const db = await connectionToMySql();
    const {
      vehicleName,
      regNo,
      ownerName,
      email,
      mobileNo,
      loanProvider,
      loanAmount,
      months,
      interestRate,
      emiAmount,
      totalPayableAmount,
      startDate,
      status,
    } = req.body;

    const sql = `INSERT INTO finance (
      vehicleName,
      regNo,
      ownerName,
      email,
      mobileNo,
      loanProvider,
      loanAmount,
      months,
      interestRate,
      emiAmount,
      totalPayableAmount,
      startDate,
      status
    ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)`;

    await db.query(sql, [
      vehicleName,
      regNo,
      ownerName,
      email,
      mobileNo,
      loanProvider,
      loanAmount,
      months,
      interestRate,
      emiAmount,
      totalPayableAmount,
      startDate,
      status,
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
        from: `"Shiv Cars Finance" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Car Finance Confirmation 💰🚗",
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color:#0056b3;">Dear ${ownerName}, 🌟</h2>
            <p>Your <b>car finance</b> has been successfully processed! 💰✨</p>

            <h3>📍 Finance Details:</h3>
            <ul>
              <li><b>Owner Name:</b> ${ownerName}</li>
              <li><b>Vehicle Name:</b> ${vehicleName}</li>
              <li><b>Registration No:</b> ${regNo}</li>
              <li><b>Loan Provider:</b> ${loanProvider}</li>
              <li><b>Loan Amount:</b> ₹${loanAmount}</li>
              <li><b>Interest Rate:</b> ${interestRate}%</li>
              <li><b>Months:</b> ${months}</li>
              <li><b>EMI Amount:</b> ₹${emiAmount}</li>
              <li><b>Total Payable Amount:</b> ₹${totalPayableAmount}</li>
              <li><b>Start Date:</b> ${startDate}</li>
              <li><b>Status:</b> ${status}</li>
              <li><b>Finance Created On:</b> ${currentDateTime}</li>
            </ul>

            <p>📝 Note: Please ensure timely EMI payments to maintain an active status. ✅</p>

            <p>If you have any questions, feel free to contact our finance support team.</p>

            <p style="margin-top:20px;">Thank you for choosing <b>Shiv Cars Finance Services</b> – making your dream car affordable! 💙</p>

            <p>Warm regards,<br><b>Shiv Cars Team</b></p>
          </div>
        `,
      });

      console.log("✅ Finance confirmation email sent successfully!");
    } catch (emailErr) {
      console.error("❌ Email Sending Failed:", emailErr.message);
    }

    return res
      .status(201)
      .json({ msg: "Finance created and confirmation email sent ✅" });
  } catch (err) {
    console.log("❌ Finance Creation Error:", err);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

module.exports = { handleCreateFinance };
