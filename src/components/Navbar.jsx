

// //   );
// // }

import { useNavigate, useLocation } from "react-router-dom";
import { FiMessageSquare, FiBell, FiUser, FiZap } from "react-icons/fi";

export default function Navbar() {
  const nav = useNavigate();
  const location = useLocation();

  const active = (path) =>
    location.pathname === path
      ? "text-blue-600 bg-white/60"
      : "text-gray-600 hover:text-black hover:bg-white/40";

  return (
    <div className="flex items-center justify-between px-6 py-3
                    bg-white/40 backdrop-blur-xl border-b border-white/30 shadow-sm">

      {/* LOGO */}
      <h3
        onClick={() => nav("/home")}
        className="text-xl font-bold text-purple-700 cursor-pointer"
      >
        Pingly 💬
      </h3>

      {/* NAV ITEMS */}
      <div className="flex items-center gap-2">

        {/* CHATS */}
        <button
          onClick={() => nav("/home")}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl transition ${active("/home")}`}
        >
          <FiMessageSquare />
          <span className="hidden md:inline">Chats</span>
        </button>

        {/* STATUS */}
        <button
          onClick={() => nav("/status")}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl transition ${active("/status")}`}
        >
          <FiZap />
          <span className="hidden md:inline">Status</span>
        </button>

        {/* NOTIFICATIONS */}
        <button
          onClick={() => nav("/notifications")}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl transition ${active("/notifications")}`}
        >
          <FiBell />
        </button>

        {/* PROFILE */}
        <button
          onClick={() => nav("/profile")}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl transition ${active("/profile")}`}
        >
          <FiUser />
          <span className="hidden md:inline">Profile</span>
        </button>

      </div>
    </div>
  );
}


