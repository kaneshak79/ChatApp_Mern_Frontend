

//     </div>
//   );
// }

import { useState } from "react";
import { API } from "../api/axios";
import { FiLock } from "react-icons/fi"; // lock icon

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    await API.post("/api/auth/forgot-password", { email });
    alert("Reset link sent to email 📩");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-200 via-pink-100 to-yellow-200">

      {/* Glass card */}
      <div className="bg-white/25 backdrop-blur-xl border border-white/30 rounded-3xl p-12 shadow-xl w-11/12 max-w-md text-center flex flex-col items-center">
        {/* Icon above input */}
        <FiLock className="text-purple-700 text-8xl mb-6" />

        <h2 className="text-3xl font-bold text-purple-700 mb-4">Forgot Password</h2>
        <p className="text-purple-800/80 mb-6">
          Enter your email to receive a reset link 📩
        </p>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-6 px-4 py-2 rounded-xl border border-white/40 bg-white/30 placeholder-purple-700 text-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
        />

        <button
          onClick={handleSubmit}
          className="w-full py-2 mb-4 bg-purple-500/60 text-white font-semibold rounded-xl hover:bg-purple-600/80 transition"
        >
          Send Reset Link
        </button>
      </div>
    </div>
  );
}
