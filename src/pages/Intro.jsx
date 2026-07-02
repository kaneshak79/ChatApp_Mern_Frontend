
//     </div>
//   );
// }

import { useNavigate } from "react-router-dom";
import ChatVideo from "../assets/chat-intro.mp4"; // your video file

export default function Intro() {
  const nav = useNavigate();

  return (
    <div className="relative min-h-screen w-full">
      {/* Full-page video */}
      <video
        src={ChatVideo}
        autoPlay
        loop
        muted
        className="w-full h-screen object-cover"
      />

      {/* Compact overlay glass card */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-10/12 max-w-sm bg-white/25 backdrop-blur-xl border border-white/30 rounded-3xl p-6 text-center shadow-lg">
        <h1 className="text-3xl font-extrabold text-purple-700 mb-2">
          Welcome to <span className="text-pink-500">Pingly</span> 💬
        </h1>
        <p className="text-purple-800/70 mb-5 text-base">Connect. Chat. Share.</p>

        {/* Animated chat bubbles */}
        <div className="relative h-12 mb-5 flex justify-center items-end space-x-3">
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce-slow"></div>
          <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce-slower"></div>
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce"></div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => nav("/login")}
            className="px-5 py-2 bg-white/60 text-purple-700 font-semibold rounded-lg hover:bg-white/80 transition"
          >
            Login
          </button>
          <button
            onClick={() => nav("/register")}
            className="px-5 py-2 bg-white/60 text-pink-500 font-semibold rounded-lg hover:bg-white/80 transition"
          >
            Register
          </button>
        </div>
      </div>

      {/* Chat bubble animations */}
      <style>
        {`
          @keyframes bounce-slow {0%,100%{transform:translateY(0);}50%{transform:translateY(-10px);}}
          @keyframes bounce-slower {0%,100%{transform:translateY(0);}50%{transform:translateY(-6px);}}
          @keyframes bounce {0%,100%{transform:translateY(0);}50%{transform:translateY(-12px);}}

          .animate-bounce-slow { animation: bounce-slow 1.2s infinite ease-in-out; }
          .animate-bounce-slower { animation: bounce-slower 1.5s infinite ease-in-out; }
          .animate-bounce { animation: bounce 1s infinite ease-in-out; }
        `}
      </style>
    </div>
  );
}
