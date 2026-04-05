// // // // // import { useNavigate } from "react-router-dom";

// // // // // export default function Intro() {
// // // // //   const nav = useNavigate();

// // // // //   return (
// // // // //     <div style={{ textAlign: "center", marginTop: "100px" }}>
// // // // //       <h1>Welcome to Chat App 💬</h1>
// // // // //       <p>Connect. Chat. Share.</p>

// // // // //       <button onClick={() => nav("/login")}>Login</button>
// // // // //       <button onClick={() => nav("/register")}>Register</button>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // import { useNavigate } from "react-router-dom";

// // // // export default function Intro() {
// // // //   const nav = useNavigate();

// // // //   return (
// // // //     <div style={{ textAlign: "center", marginTop: "100px" }}>
// // // //       <h1>Welcome to Chat App 💬</h1>
// // // //       <p>Connect. Chat. Share.</p>

// // // //       <button onClick={() => nav("/login")}>Login</button>
// // // //       <button onClick={() => nav("/register")}>Register</button>
// // // //     </div>
// // // //   );
// // // // }

// // // // //last crt code


// // // import { useNavigate } from "react-router-dom";

// // // export default function Intro() {
// // //   const nav = useNavigate();

// // //   return (
// // //     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 via-purple-100 to-pink-200">
// // //       <div className="bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl p-10 text-center shadow-xl max-w-md w-full">
// // //         <h1 className="text-4xl font-extrabold text-purple-700 mb-4">
// // //           Welcome to <span className="text-pink-500">Pingly</span> 💬
// // //         </h1>
// // //         <p className="text-purple-800/80 mb-8 text-lg">Connect. Chat. Share.</p>

// // //         {/* Animated chat bubbles */}
// // //         <div className="relative h-24 mb-8 flex justify-center items-end space-x-3">
// // //           <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce-slow"></div>
// // //           <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce-slower"></div>
// // //           <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce"></div>
// // //         </div>

// // //         <div className="flex gap-4 justify-center">
// // //           <button
// // //             onClick={() => nav("/login")}
// // //             className="px-6 py-2 bg-white/70 text-purple-700 font-semibold rounded-lg hover:bg-white/90 transition"
// // //           >
// // //             Login
// // //           </button>
// // //           <button
// // //             onClick={() => nav("/register")}
// // //             className="px-6 py-2 bg-white/70 text-pink-500 font-semibold rounded-lg hover:bg-white/90 transition"
// // //           >
// // //             Register
// // //           </button>
// // //         </div>
// // //       </div>

// // //       {/* Custom Tailwind animation classes */}
// // //       <style>
// // //         {`
// // //           @keyframes bounce-slow {
// // //             0%, 100% { transform: translateY(0); }
// // //             50% { transform: translateY(-10px); }
// // //           }
// // //           @keyframes bounce-slower {
// // //             0%, 100% { transform: translateY(0); }
// // //             50% { transform: translateY(-6px); }
// // //           }
// // //           @keyframes bounce {
// // //             0%, 100% { transform: translateY(0); }
// // //             50% { transform: translateY(-12px); }
// // //           }

// // //           .animate-bounce-slow { animation: bounce-slow 1.2s infinite ease-in-out; }
// // //           .animate-bounce-slower { animation: bounce-slower 1.5s infinite ease-in-out; }
// // //           .animate-bounce { animation: bounce 1s infinite ease-in-out; }
// // //         `}
// // //       </style>
// // //     </div>
// // //   );
// // // }

// // import { useNavigate } from "react-router-dom";
// // import ChatVideo from "../assets/chat-intro.mp4"; // your chat-related video

// // export default function Intro() {
// //   const nav = useNavigate();

// //   return (
// //     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 via-purple-100 to-pink-200">
      
// //       {/* Top video */}
// //       <div className="w-full max-w-3xl rounded-xl overflow-hidden shadow-lg mb-8">
// //         <video
// //           src={ChatVideo}
// //           autoPlay
// //           loop
// //           muted
// //           className="w-full h-64 object-cover"
// //         />
// //       </div>

// //       {/* Glass card */}
// //       <div className="bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl p-10 text-center shadow-xl max-w-md w-full">
// //         <h1 className="text-4xl font-extrabold text-purple-700 mb-4">
// //           Welcome to <span className="text-pink-500">Pingly</span> 💬
// //         </h1>
// //         <p className="text-purple-800/80 mb-8 text-lg">Connect. Chat. Share.</p>

// //         {/* Animated chat bubbles */}
// //         <div className="relative h-24 mb-8 flex justify-center items-end space-x-3">
// //           <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce-slow"></div>
// //           <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce-slower"></div>
// //           <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce"></div>
// //         </div>

// //         {/* Buttons */}
// //         <div className="flex gap-4 justify-center">
// //           <button
// //             onClick={() => nav("/login")}
// //             className="px-6 py-2 bg-white/70 text-purple-700 font-semibold rounded-lg hover:bg-white/90 transition"
// //           >
// //             Login
// //           </button>
// //           <button
// //             onClick={() => nav("/register")}
// //             className="px-6 py-2 bg-white/70 text-pink-500 font-semibold rounded-lg hover:bg-white/90 transition"
// //           >
// //             Register
// //           </button>
// //         </div>
// //       </div>

// //       {/* Custom animations */}
// //       <style>
// //         {`
// //           @keyframes bounce-slow {0%,100%{transform:translateY(0);}50%{transform:translateY(-10px);}}
// //           @keyframes bounce-slower {0%,100%{transform:translateY(0);}50%{transform:translateY(-6px);}}
// //           @keyframes bounce {0%,100%{transform:translateY(0);}50%{transform:translateY(-12px);}}

// //           .animate-bounce-slow { animation: bounce-slow 1.2s infinite ease-in-out; }
// //           .animate-bounce-slower { animation: bounce-slower 1.5s infinite ease-in-out; }
// //           .animate-bounce { animation: bounce 1s infinite ease-in-out; }
// //         `}
// //       </style>
// //     </div>
// //   );
// // }

// import { useNavigate } from "react-router-dom";
// import ChatVideo from "../assets/chat-intro.mp4"; // your video file

// export default function Intro() {
//   const nav = useNavigate();

//   return (
//     <div className="relative min-h-screen w-full">
//       {/* Full-page video */}
//       <video
//         src={ChatVideo}
//         autoPlay
//         loop
//         muted
//         className="w-full h-screen object-cover"
//       />

//       {/* Overlay card at bottom of video */}
//       <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-11/12 max-w-md bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl p-8 text-center shadow-xl">
//         <h1 className="text-4xl font-extrabold text-purple-700 mb-2">
//           Welcome to <span className="text-pink-500">Pingly</span> 💬
//         </h1>
//         <p className="text-purple-800/80 mb-6 text-lg">Connect. Chat. Share.</p>

//         {/* Animated chat bubbles */}
//         <div className="relative h-16 mb-6 flex justify-center items-end space-x-3">
//           <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce-slow"></div>
//           <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce-slower"></div>
//           <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce"></div>
//         </div>

//         {/* Buttons */}
//         <div className="flex gap-4 justify-center">
//           <button
//             onClick={() => nav("/login")}
//             className="px-6 py-2 bg-white/70 text-purple-700 font-semibold rounded-lg hover:bg-white/90 transition"
//           >
//             Login
//           </button>
//           <button
//             onClick={() => nav("/register")}
//             className="px-6 py-2 bg-white/70 text-pink-500 font-semibold rounded-lg hover:bg-white/90 transition"
//           >
//             Register
//           </button>
//         </div>
//       </div>

//       {/* Chat bubble animations */}
//       <style>
//         {`
//           @keyframes bounce-slow {0%,100%{transform:translateY(0);}50%{transform:translateY(-10px);}}
//           @keyframes bounce-slower {0%,100%{transform:translateY(0);}50%{transform:translateY(-6px);}}
//           @keyframes bounce {0%,100%{transform:translateY(0);}50%{transform:translateY(-12px);}}

//           .animate-bounce-slow { animation: bounce-slow 1.2s infinite ease-in-out; }
//           .animate-bounce-slower { animation: bounce-slower 1.5s infinite ease-in-out; }
//           .animate-bounce { animation: bounce 1s infinite ease-in-out; }
//         `}
//       </style>
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