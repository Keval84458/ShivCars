const { connectionToMySql } = require("../connection");
const nodemailer = require("nodemailer");

const handleCreateInsurance = async (req, res) => {
  try {
    const db = await connectionToMySql();

    const {
      carName,
      regNo,
      ownerName,
      email,
      mobileNo,
      policyNo,
      insuranceProvider,
      insuranceType,
      premiumAmount,
      startDate,
      renewalStatus,
    } = req.body;

    const sql = `
      INSERT INTO insurance 
      (carName, regNo, ownerName, email, mobileNo, policyNo, insuranceProvider, insuranceType, premiumAmount, startDate, renewalStatus, createdAt) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())
    `;

    const [result] = await db.query(sql, [
      carName,
      regNo,
      ownerName,
      email,
      mobileNo,
      policyNo,
      insuranceProvider,
      insuranceType,
      premiumAmount,
      startDate,
      renewalStatus,
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
        from: `"Shiv Cars" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Car Insurance Confirmation 🛡️🚗",
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color:#0056b3;">Dear ${ownerName}, 🌟</h2>
            <p>We’re happy to inform you that your <b>car insurance</b> has been successfully registered! 🛡️✨</p>

            <h3>📍 Insurance Details:</h3>
            <ul>
              <li><b>Owner Name:</b> ${ownerName}</li>
              <li><b>Registration No:</b> ${regNo}</li>
              <li><b>Policy No:</b> ${policyNo}</li>
              <li><b>Insurance Provider:</b> ${insuranceProvider}</li>
              <li><b>Insurance Type:</b> ${insuranceType}</li>
              <li><b>Premium Amount:</b> ₹${premiumAmount}</li>
              <li><b>Start Date:</b> ${startDate}</li>
              <li><b>Renewal Status:</b> ${renewalStatus}</li>
              <li><b>Insurance Created On:</b> ${currentDateTime}</li>
            </ul>

            <p>📝 Note: This insurance is valid for **1 year** from the start date. Please renew it before expiry to continue enjoying uninterrupted coverage. ✅</p>

            <p>Your policy is now <b style="color:green;">active</b>. Please keep these details safe for future reference. ✅</p>
            
            <p>If you have any questions regarding your insurance or renewal, feel free to contact our support team.</p>

            <p style="margin-top:20px;">Thank you for trusting <b>Shiv Cars Insurance Services</b> – we’ve got you covered! 💙</p>

            <p>Warm regards,<br><b>Shiv Cars Team</b></p>
          </div>
        `,
      });

      console.log("✅ Insurance confirmation email sent successfully!");
    } catch (emailErr) {
      console.error("❌ Email Sending Failed:", emailErr.message);
    }

    return res.status(201).json({
      message: "Insurance created successfully ✅",
      insurance: result,
    });
  } catch (err) {
    console.error("❌ Error in handleCreateInsurance:", err.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { handleCreateInsurance };

// CREATE TABLE Insurance (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     carName VARCHAR(100) NOT NULL,
//     regNo VARCHAR(50) NOT NULL ,
//     ownerName VARCHAR(100) NOT NULL,
//     email VARCHAR(100) NOT NULL,
//     mobileNo VARCHAR(15) NOT NULL,
//     policyNo VARCHAR(50) NOT NULL UNIQUE,
//     insuranceProvider VARCHAR(100) NOT NULL,
//     insuranceType VARCHAR(50) NOT NULL,
//     premiumAmount DECIMAL(10,2) NOT NULL,
//     startDate DATE NOT NULL,
//     renewalStatus ENUM('Active', 'Expired', 'Pending Renewal') NOT NULL,
//     createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//     updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
// );
