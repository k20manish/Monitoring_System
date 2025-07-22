import React, { useState } from "react";
import { motion } from "framer-motion";
import { UserCircle } from "lucide-react";

function Complaint_Monitoring({ onSubmitComplaint }) {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    village: "",
    block: "",
    panchayat: "",
    nagarPanchayat: "",
    nagarParisad: "",
    nagarNigam: "",
    complaintType: "",
    modeOfComplaint: "",
    description: "",
    submittedTo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitComplaint({ ...formData, timestamp: new Date().toISOString() });
    alert("Complaint submitted!");
    setFormData({
      name: "",
      mobile: "",
      village: "",
      block: "",
      panchayat: "",
      nagarPanchayat: "",
      nagarParisad: "",
      nagarNigam: "",
      complaintType: "",
      modeOfComplaint: "",
      description: "",
      submittedTo: "",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-8 bg-white rounded-3xl shadow-2xl"
    >
      <div className="flex items-center mb-6">
        <UserCircle className="text-blue-500" size={32} />
        <h2 className="ml-3 text-3xl font-bold text-gray-800">
          Complaint Portal
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <input
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Mobile Number"
            className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <input
            name="village"
            value={formData.village}
            onChange={handleChange}
            placeholder="Village"
            className="sm:col-span-2 w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <select
            name="block"
            value={formData.block}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="">Select Block</option>
            <option>Block A</option>
            <option>Block B</option>
          </select>
          <select
            name="panchayat"
            value={formData.panchayat}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="">Select Panchayat</option>
            <option>Panchayat 1</option>
            <option>Panchayat 2</option>
          </select>
          <select
            name="nagarPanchayat"
            value={formData.nagarPanchayat}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="">Select Nagar Panchayat</option>
            <option>Nagar Panchayat 1</option>
          </select>
          <select
            name="nagarParisad"
            value={formData.nagarParisad}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="">Select Nagar Parisad</option>
            <option>Nagar Parisad 1</option>
          </select>
          <select
            name="nagarNigam"
            value={formData.nagarNigam}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="">Select Nagar Nigam</option>
            <option>Nagar Nigam 1</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <select
            name="complaintType"
            value={formData.complaintType}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="">Complaint Type</option>
            <option>Nal Ka Jal</option>
            <option>Electricity</option>
          </select>
          <select
            name="modeOfComplaint"
            value={formData.modeOfComplaint}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="">Mode of Complaint</option>
            <option>WhatsApp</option>
            <option>Mobile</option>
            <option>Written Application</option>
          </select>
        </div>

        <select
          name="submittedTo"
          value={formData.submittedTo}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        >
          <option value="">Submit To</option>
          <option>Panchayat</option>
          <option>Block</option>
          <option>Nagar Nigam</option>
          <option>Nagar Parisad</option>
        </select>

        <textarea
          name="description"
          rows="4"
          value={formData.description}
          onChange={handleChange}
          placeholder="Complaint Details"
          className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
        />

        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl hover:from-blue-600 hover:to-purple-600 transition font-semibold shadow-lg"
        >
          Submit Complaint
        </button>
      </form>
    </motion.div>
  );
}

export default Complaint_Monitoring;
