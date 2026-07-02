
//       <button onClick={handleReset}>Reset Password</button>
//     </div>
//   );
// }

// // last crt code

import { useState } from "react";
import { API } from "../api/axios";
import { FiKey } from "react-icons/fi"; // key icon for reset password

export default function ResetPassword() {
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");

  const handleReset = async () => {
    await API.post("/api/auth/reset-password", { token, password });
    alert("Password Reset Successful ✅");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-200 via-pink-100 to-yellow-200">

      {/* Glass card */}
      <div className="bg-white/25 backdrop-blur-xl border border-white/30 rounded-3xl p-12 shadow-xl w-11/12 max-w-md text-center flex flex-col items-center">
        {/* Icon on top */}
        <FiKey className="text-purple-700 text-8xl mb-6" />

        <h2 className="text-3xl font-bold text-purple-700 mb-4">Reset Password</h2>
        <p className="text-purple-800/80 mb-6">
          Enter your token and new password to reset your account 🔑
        </p>

        <input
          type="text"
          placeholder="Enter token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          className="w-full mb-4 px-4 py-2 rounded-xl border border-white/40 bg-white/30 placeholder-purple-700 text-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
        />

        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 px-4 py-2 rounded-xl border border-white/40 bg-white/30 placeholder-purple-700 text-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
        />

        <button
          onClick={handleReset}
          className="w-full py-2 mb-4 bg-purple-500/60 text-white font-semibold rounded-xl hover:bg-purple-600/80 transition"
        >
          Reset Password
        </button>
      </div>
    </div>
  );
}
