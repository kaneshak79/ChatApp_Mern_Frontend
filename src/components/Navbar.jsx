// // // // // import { Link } from "react-router-dom";
// // // // // import { useContext } from "react";
// // // // // import { AuthContext } from "../context/AuthContext";

// // // // // export default function Navbar() {
// // // // //   const { logout } = useContext(AuthContext);

// // // // //   return (
// // // // //     <div>
// // // // //       <Link to="/home">Home</Link>
// // // // //       <Link to="/profile">Profile</Link>
// // // // //       <Link to="/status">Status</Link>
// // // // //       <Link to="/notifications">Notifications</Link>
// // // // //       <button onClick={logout}>Logout</button>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // import { useNavigate } from "react-router-dom";

// // // export default function Navbar() {
// // //   const nav = useNavigate();

// // //   return (
// // //     <div style={{
// // //       display: "flex",
// // //       justifyContent: "space-between",
// // //       padding: "10px",
// // //       borderBottom: "1px solid gray",
// // //       background: "#eee"
// // //     }}>
// // //       <h3>💬 Chat App</h3>

// // //       <div>
// // //         <button onClick={() => nav("/home")}>Chats</button>
// // //         <button onClick={() => nav("/status")}>Status</button>
// // //         <button onClick={() => nav("/notifications")}>🔔</button>
// // //         <button onClick={() => nav("/profile")}>Profile</button>
// // //       </div>
// // //     </div>
// // //   );
// // // }


// // import { Link } from "react-router-dom";
// // import { useContext } from "react";
// // import { AuthContext } from "../context/AuthContext";

// // export default function Navbar() {
// //   const { logout } = useContext(AuthContext);

// //   return (
// //     <div>
// //       <Link to="/home">Home</Link>
// //       <Link to="/profile">Profile</Link>
// //       <Link to="/status">Status</Link>
// //       <Link to="/notifications">Notifications</Link>
// //       <button onClick={logout}>Logout</button>
// //     </div>
// //   );
// // }

// import { useNavigate } from "react-router-dom";

// export default function Navbar() {
//   const nav = useNavigate();

//   return (
//     <div style={{
//       display: "flex",
//       justifyContent: "space-between",
//       padding: "10px",
//       borderBottom: "1px solid gray",
//       background: "#eee"
//     }}>
//       <h3>💬 Chat App</h3>

//       <div>
//         <button onClick={() => nav("/home")}>Chats</button>
//         <button onClick={() => nav("/status")}>Status</button>
//         <button onClick={() => nav("/notifications")}>🔔</button>
//         <button onClick={() => nav("/profile")}>Profile</button>
//       </div>
//     </div>
//   );
// }

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