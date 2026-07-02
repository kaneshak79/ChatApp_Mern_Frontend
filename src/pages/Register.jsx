
//       </style>
//     </div>
//   );
// }

import { useState } from "react";
import { API } from "../api/axios";
import { useNavigate } from "react-router-dom";
import TextingImg from "../assets/chat-image.jpg";
import { FiPhone, FiMessageSquare, FiVideo } from "react-icons/fi"; // professional icons

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handleRegister = async () => {
    await API.post("/api/auth/register", { name, email, password });
    nav("/");
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-200 via-purple-100 to-pink-200">

      {/* Left side - slightly smaller than right */}
      <div className="flex-1 hidden md:flex flex-col items-center justify-center relative p-8 space-y-6">
        {/* App Name */}
        <h1 className="text-5xl font-extrabold text-purple-700">Pingly 💬</h1>

        {/* Texting Image */}
        {/* <img
          src={TextingImg}
          alt="Texting illustration"
          className="w-4/5 max-w-lg object-contain"
        /> */}

        {/* Icons representing chat app */}
        <div className="flex space-x-10 mt-4 text-purple-700 text-6xl">
          <FiPhone className="animate-bounce" />
          <FiMessageSquare className="animate-bounce-slower" />
          <FiVideo className="animate-bounce" />
        </div>
      </div>

      {/* Right side - bigger glass card */}
      <div className="flex-[2] flex items-center justify-center">
        <div className="bg-white/25 backdrop-blur-xl border border-white/30 rounded-3xl p-12 shadow-lg w-11/12 max-w-md text-center">
          <h2 className="text-3xl font-extrabold text-purple-700 mb-6">Register</h2>

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mb-4 px-4 py-2 rounded-xl border border-white/40 bg-white/30 placeholder-purple-700 text-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          />

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
            onClick={handleRegister}
            className="w-full py-2 mb-4 bg-white/60 text-purple-700 font-semibold rounded-xl hover:bg-white/80 transition"
          >
            Register
          </button>

          <p className="text-purple-800/80">
            Already have an account?{" "}
            <span
              className="text-pink-500 cursor-pointer hover:underline"
              onClick={() => nav("/login")}
            >
              Login
            </span>
          </p>
        </div>
      </div>

      {/* Emoji animations for react-icons */}
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
