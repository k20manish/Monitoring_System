import React, { useState } from "react";

function Complaint_Monitoring() {
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
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Complaint Submitted!");
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-4xl h-full overflow-hidden">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">
        Complaint Monitoring & Redressal Portal
      </h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 overflow-y-auto">
        <div>
          <label className="block mb-1 text-sm text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="w-full border p-2 rounded-md"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block mb-1 text-sm text-gray-700">Mobile</label>
          <input
            type="text"
            name="mobile"
            placeholder="Enter mobile number"
            className="w-full border p-2 rounded-md"
            value={formData.mobile}
            onChange={handleChange}
          />
        </div>

        <div className="sm:col-span-2">
          <label className="block mb-1 text-sm text-gray-700">Village</label>
          <input
            type="text"
            name="village"
            placeholder="Enter village name"
            className="w-full border p-2 rounded-md"
            value={formData.village}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block mb-1 text-sm text-gray-700">Block</label>
          <select
            name="block"
            className="w-full border p-2 rounded-md"
            value={formData.block}
            onChange={handleChange}
          >
            <option value="">Select Block</option>
            <option value="Block A">Block A</option>
            <option value="Block B">Block B</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 text-sm text-gray-700">Panchayat</label>
          <select
            name="panchayat"
            className="w-full border p-2 rounded-md"
            value={formData.panchayat}
            onChange={handleChange}
          >
            <option value="">Select Panchayat</option>
            <option value="Panchayat 1">Panchayat 1</option>
            <option value="Panchayat 2">Panchayat 2</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 text-sm text-gray-700">Nagar Panchayat</label>
          <select
            name="nagarPanchayat"
            className="w-full border p-2 rounded-md"
            value={formData.nagarPanchayat}
            onChange={handleChange}
          >
            <option value="">Select Nagar Panchayat</option>
            <option value="Nagar Panchayat 1">Nagar Panchayat 1</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 text-sm text-gray-700">Nagar Parisad</label>
          <select
            name="nagarParisad"
            className="w-full border p-2 rounded-md"
            value={formData.nagarParisad}
            onChange={handleChange}
          >
            <option value="">Select Nagar Parisad</option>
            <option value="Nagar Parisad 1">Nagar Parisad 1</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 text-sm text-gray-700">Nagar Nigam</label>
          <select
            name="nagarNigam"
            className="w-full border p-2 rounded-md"
            value={formData.nagarNigam}
            onChange={handleChange}
          >
            <option value="">Select Nagar Nigam</option>
            <option value="Nagar Nigam 1">Nagar Nigam 1</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 text-sm text-gray-700">Complaint Type</label>
          <select
            name="complaintType"
            className="w-full border p-2 rounded-md"
            value={formData.complaintType}
            onChange={handleChange}
          >
            <option value="">Select Complaint Type</option>
            <option value="Nal Ka Jal">Nal Ka Jal</option>
            <option value="Electricity">Electricity</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 text-sm text-gray-700">Mode of Complaint</label>
          <select
            name="modeOfComplaint"
            className="w-full border p-2 rounded-md"
            value={formData.modeOfComplaint}
            onChange={handleChange}
          >
            <option value="">Select Mode</option>
            <option value="WhatsApp">WhatsApp</option>
            <option value="Mobile">Mobile</option>
            <option value="Written">Written Application</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label className="block mb-1 text-sm text-gray-700">Complaint Description</label>
          <textarea
            name="description"
            rows="3"
            placeholder="Enter complaint details"
            className="w-full border p-2 rounded-md resize-none"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="sm:col-span-2">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
          >
            Submit Complaint
          </button>
        </div>
      </form>
    </div>
  );
}

export default Complaint_Monitoring;
