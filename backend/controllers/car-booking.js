const { Router } = require("express");
const { connectionToMySql } = require("../connection");
const nodemailer = require("nodemailer");

const hadleCarBooking = async (req, res) => {
  try {
    const db = await connectionToMySql();
    const {
      car_id,
      customer_name,
      email,
      mobile_no,
      location,
      id_proof,
      id_number,
      feedback,
    } = req.body;

    if (
      !car_id ||
      !customer_name ||
      !email ||
      !mobile_no ||
      !location ||
      !id_proof ||
      !id_number ||
      !feedback
    ) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    const sql = `
      INSERT INTO carbookings 
      (car_id, customer_name, email, mobile_no, location, id_proof, id_number, feedback) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    await db.query(sql, [
      car_id,
      customer_name,
      email,
      mobile_no,
      location,
      id_proof,
      id_number,
      feedback,
    ]);

    await db.query(`UPDATE allcars SET status="Sold" WHERE id=?`, [car_id]);
    const [rows] = await db.query("SELECT * FROM allcars WHERE id=?", [car_id]);
    const user = rows[0];
    console.log("users", user);
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

      let info = await transporter.sendMail({
        from: `"Shiv Cars" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Car Booking Confirmation 🚗",
        text: `Dear ${customer_name}, 🌟

We’re excited to let you know that your car booking has been **successfully confirmed!** 🚗✨

📍 Booking Details:
- Car Name: ${user.carName}
- Reg No: ${user.regNo}
- Customer Name: ${customer_name}
- Location: ${location}
- Contact: ${mobile_no}
- Date: ${currentDateTime}

Our team will reach out to you shortly with the next steps.  
Meanwhile, feel free to get in touch if you have any questions.

Thank you for choosing **Shiv Cars** – where your journey begins! 💙

Warm regards,  
Shiv Cars Team`,
      });

      console.log("✅ Email sent:", info.response);
    } catch (emailErr) {
      console.error("❌ Email Sending Failed:", emailErr.message);
    }

    return res.status(201).json({
      msg: "Car booking successfully created. Email sent!",
    });
  } catch (err) {
    console.error("Booking Error:", err);
    return res.status(500).json({ msg: "Something went wrong" });
  }
};

const getAllCarBookings = async (req, res) => {
  try {
    const db = await connectionToMySql();

    const [rows] = await db.query("SELECT * FROM carbookings");

    return res.status(200).json({
      msg: "All car bookings list",
      rows,
    });
  } catch (err) {
    console.error("❌ Error fetching car bookings:", err);
    return res.status(500).json({ msg: "Something went wrong" });
  }
};

const bookedCarDeleteById = async (req, res) => {
  try {
    const db = await connectionToMySql();
    const bookingId = req.params.id;
    console.log("bookingId", bookingId);

    const [booking] = await db.query(
      "SELECT car_id FROM carbookings WHERE booking_id=?",
      [bookingId]
    );

    const carId = booking[0].car_id;

    const [rows] = await db.query(
      "DELETE from carbookings WHERE booking_id=?",
      [bookingId]
    );

    await db.query(`UPDATE allcars SET status="Available" WHERE id=?`, [carId]);
    return res
      .status(200)
      .json({ msg: "Booking successfully cancel...", success: true, rows });
  } catch (err) {
    console.log("err", err);
  }
};

module.exports = { hadleCarBooking, getAllCarBookings, bookedCarDeleteById };

// CREATE TABLE bookings (
//  booking_id INT AUTO_INCREMENT PRIMARY KEY,
//  car_id INT,
//  customer_name VARCHAR(100),
//  email VARCHAR(100),
//  mobile_no VARCHAR(15),
//  location VARCHAR(100),
//  id_proof VARCHAR(50),
//  id_number VARCHAR(50),
//  feedback VARCHAR(50),
//  booking_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//  FOREIGN KEY (car_id) REFERENCES cars(car_id)
//  );
