import React, { useState } from 'react';
import Complaint_Monitoring from './Complaint_Monitorign'; // ✅ Adjust the path if needed

function UserMain() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => setShowForm(!showForm);

  return (
    <div className="p-6 text-gray-800">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold">Welcome to the User Dashboard</h1>
          <p className="text-lg">
            This portal allows you to file complaints related to <span className="font-semibold">Nal Ka Jal</span> and <span className="font-semibold">Electricity</span>.
            Submit your issues quickly to ensure fast resolution.
          </p>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/8371/8371087.png"
            alt="Complaint Illustration"
            className="w-80 h-auto"
          />
        </div>
      </div>

      {/* Button to toggle form */}
      <div className="mt-10 text-center">
        <button
          onClick={toggleForm}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition duration-300"
        >
          {showForm ? 'Hide Complaint Form' : 'File a Complaint'}
        </button>
      </div>

      {/* Conditional rendering of Complaint Form */}
      {showForm && (
        <div className="mt-8">
          <Complaint_Monitoring />
        </div>
      )}
    </div>
  );
}

export default UserMain;
