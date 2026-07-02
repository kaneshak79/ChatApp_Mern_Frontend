
//           Register
//         </span>
//       </p>
//     </div>
//   );
// }

// // last crt code

import { useState, useContext } from "react";
import { API } from "../api/axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
// import TextingImg from "../assets/texting.png"; // your texting illustration
import { FiPhone, FiMessageSquare, FiVideo } from "react-icons/fi"; // professional icons

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const nav = useNavigate();

  const handleLogin = async () => {
    const { data } = await API.post("/api/auth/login", { email, password });
    login(data);
    nav("/home");
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-200 via-purple-100 to-pink-200">

      {/* Left side */}
      <div className="flex-1 hidden md:flex flex-col items-center justify-center relative p-8 space-y-6">
        <h1 className="text-5xl font-extrabold text-purple-700">Pingly 💬</h1>
        {/* <img
          src={TextingImg}
          alt="Texting illustration"
          className="w-4/5 max-w-lg object-contain mb-8"
        /> */}
        <div className="flex space-x-10 mt-4 text-purple-700 text-6xl">
          <FiPhone className="animate-bounce" />
          <FiMessageSquare className="animate-bounce-slower" />
          <FiVideo className="animate-bounce" />
        </div>
      </div>

      {/* Right side - glass login card */}
      <div className="flex-[2] flex items-center justify-center">
        <div className="bg-white/25 backdrop-blur-xl border border-white/30 rounded-3xl p-12 shadow-lg w-11/12 max-w-md text-center">
          <h2 className="text-3xl font-extrabold text-purple-700 mb-6">Login</h2>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 px-4 py-2 rounded-xl border border-white/40 bg-white/30 placeholder-purple-700 text-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-6 px-4 py-2 rounded-xl border border-white/40 bg-white/30 placeholder-purple-700 text-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          />

          <button
            onClick={handleLogin}
            className="w-full py-2 mb-4 bg-white/60 text-purple-700 font-semibold rounded-xl hover:bg-white/80 transition"
          >
            Login
          </button>

          <p
            className="text-blue-500 cursor-pointer mb-4 hover:underline"
            onClick={() => nav("/forgot-password")}
          >
            Forgot Password?
          </p>

          <p className="text-purple-800/80">
            Don't have an account?{" "}
            <span
              className="text-pink-500 cursor-pointer hover:underline"
              onClick={() => nav("/register")}
            >
              Register
            </span>
          </p>
        </div>
      </div>

      {/* Emoji animations */}
      <style>
        {`
          @keyframes bounce-slow {0%,100%{transform:translateY(0);}50%{transform:translateY(-10px);}}
          @keyframes bounce-slower {0%,100%{transform:translateY(0);}50%{transform:translateY(-6px);}}
          @keyframes bounce {0%,100%{transform:translateY(0);}50%{transform:translateY(-12px);}}

          .animate-bounce { animation: bounce 1s infinite ease-in-out; }
          .animate-bounce-slower { animation: bounce-slower 1.5s infinite ease-in-out; }
        `}
      </style>
    </div>
  );
}


