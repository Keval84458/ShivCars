"use client";
import React, { useState } from "react";
import axios from "axios";

function CarForm() {
  const [formData, setFormData] = useState({
    carImage: null,
    companyId: "",
    carName: "",
    address: "",
    model: "",
    price: "",
    contactNo: "",
    status: "",
  });

  const handleSubmit = async () => {
    try {
      console.log("🚀 Keval TRY block");
      const payload = { ...formData };

      //   const formDataToSend = new FormData();
      //   formDataToSend.append("carImage", formData.carImage);
      //   formDataToSend.append("companyId", formData.companyId);
      //   formDataToSend.append("carName", formData.carName);
      //   formDataToSend.append("address", formData.address);
      //   formDataToSend.append("model", formData.model);
      //   formDataToSend.append("price", formData.price);
      //   formDataToSend.append("contactNo", formData.contactNo);
      //   formDataToSend.append("status", formData.status);
      const res = await axios.post("http://localhost:8001/api/cars", payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("✅ Car added:", res.data);
      alert("Car uploaded successfully!");
    } catch (err) {
      console.error("❌ Upload failed:", err.response?.data || err.message);
    }
  };

  const onChange = (key, value) => setFormData({ ...formData, [key]: value });

  return (
    <form>
      <input
        type="text"
        placeholder="Car Name"
        value={formData.carName}
        onChange={(e) => onChange("carName", e.target.value)}
      />
      <input
        type="text"
        placeholder="Company ID"
        value={formData.companyId}
        onChange={(e) => onChange("companyId", e.target.value)}
      />
      <input
        type="text"
        placeholder="Address"
        value={formData.address}
        onChange={(e) => onChange("address", e.target.value)}
      />
      <input
        type="text"
        placeholder="Model"
        value={formData.model}
        onChange={(e) => onChange("model", e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={formData.price}
        onChange={(e) => onChange("price", e.target.value)}
      />
      <input
        type="text"
        placeholder="Contact No"
        value={formData.contactNo}
        onChange={(e) => onChange("contactNo", e.target.value)}
      />
      <input
        type="text"
        placeholder="Status"
        value={formData.status}
        onChange={(e) => onChange("status", e.target.value)}
      />

      <input
        type="file"
        accept="image/*"
        onChange={(e) => onChange("carImage", e.target.files[0])}
      />

      <button type="button" onClick={handleSubmit}>
        Upload Car
      </button>
    </form>
  );
}

export default CarForm;
