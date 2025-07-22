import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, LogOut, UserCircle, AlertCircle } from "lucide-react";

// Hard‑coded admin credentials and roles
const USERS = [
  { role: "Panchayat",    username: "panchayatAdmin", password: "panchayat123" },
  { role: "Block",        username: "blockAdmin",     password: "block123"     },
  { role: "Nagar Nigam",  username: "nagarAdmin",     password: "nagar123"     },
  { role: "Nagar Parisad",username: "parisadAdmin",   password: "parisad123"   },
];

export default function AdminMain({ complaints = [] }) {
  const [step, setStep] = useState("select");
  const [selectedRole, setSelectedRole] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  // complaints relevant to the selected admin
  const pending = (complaints || []).filter(
    (c) => c.submittedTo === selectedRole
  );

  // Step 1: Role selection
  if (step === "select") {
    return (
      <motion.div className="flex items-center justify-center h-screen bg-gray-50">
        <motion.div
          className="bg-white p-8 rounded-3xl shadow-2xl w-96"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
            Select Admin Type
          </h2>
          <div className="space-y-4">
            {USERS.map((u) => (
              <button
                key={u.role}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-2xl hover:from-blue-600 hover:to-teal-500 transition"
                onClick={() => {
                  setSelectedRole(u.role);
                  setStep("login");
                }}
              >
                {u.role}
              </button>
            ))}
          </div>
        </motion.div>
      </motion.div>
    );
  }

  // Step 2: Login for selectedRole
  if (step === "login") {
    return (
      <motion.div className="flex items-center justify-center h-screen bg-gray-50">
        <motion.div
          className="bg-white p-6 rounded-3xl shadow-2xl w-96"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <UserCircle className="text-blue-600" size={28} />
              <h2 className="ml-2 text-2xl font-semibold">{selectedRole} Login</h2>
            </div>
            <button
              onClick={() => setStep("select")}
              className="text-gray-500 hover:text-gray-700"
            >
              ← Change
            </button>
          </div>

          {/* Pending count banner */}
          <div className="flex items-center bg-blue-50 border-l-4 border-blue-400 p-3 rounded-lg mb-5">
            <AlertCircle className="text-blue-600" size={22} />
            <p className="ml-3 text-blue-700">
              {pending.length} pending complaint{pending.length !== 1 ? 's' : ''} for {selectedRole}.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const match = USERS.find(
                (u) =>
                  u.role === selectedRole &&
                  u.username === loginUsername &&
                  u.password === loginPassword
              );
              if (match) {
                setLoginError("");
                setStep("dashboard");
              } else {
                setLoginError("Invalid username or password.");
              }
            }}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm mb-1">Username</label>
              <input
                type="text"
                value={loginUsername}
                onChange={(e) => setLoginUsername(e.target.value)}
                className="w-full border p-2 rounded-xl focus:ring-2 focus:ring-blue-300"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Password</label>
              <input
                type="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                className="w-full border p-2 rounded-xl focus:ring-2 focus:ring-blue-300"
                required
              />
            </div>
            {loginError && <p className="text-red-500 text-sm">{loginError}</p>}
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl hover:from-green-600 hover:to-blue-600 transition"
            >
              Login
            </button>
          </form>
        </motion.div>
      </motion.div>
    );
  }

  // Step 3: Dashboard view
  return (
    <motion.div
      className="p-8 bg-gray-50 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold">{selectedRole} Complaints</h2>
        <button
          onClick={() => {
            setStep("select");
            setLoginUsername("");
            setLoginPassword("");
          }}
          className="flex items-center text-blue-600 hover:text-blue-800"
        >
          <LogOut className="mr-2" /> Logout
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pending.length === 0 ? (
          <p className="text-gray-500 col-span-full">
            No complaints submitted to {selectedRole} yet.
          </p>
        ) : (
          pending.map((c, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <p className="text-lg font-semibold mb-2">{c.name} ({c.village})</p>
              <p className="text-sm text-gray-600">Type: {c.complaintType}</p>
              <p className="text-sm text-gray-600">Mode: {c.modeOfComplaint}</p>
              <p className="mt-2 text-gray-700">{c.description}</p>
              <p className="mt-4 text-xs text-gray-400">{new Date(c.timestamp).toLocaleString()}</p>
            </motion.div>
          ))
        )}
      </div>
    </motion.div>
  );
}
