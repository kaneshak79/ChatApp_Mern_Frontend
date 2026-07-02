
//         {/* LOGOUT */}
//         <button
//           style={{ width: "100%", padding: "10px", background: "red", color: "white" }}
//           onClick={() => {
//             logout();
//             nav("/"); // redirect to login/intro
//           }}
//         >
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect, useContext } from "react";
import { API } from "../api/axios";
import { AuthContext } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { user, login, logout } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const nav = useNavigate();

  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setBio(user.bio || "");
      setProfilePic(user.profilePic || "");
    }
  }, [user]);

  const updateProfile = async () => {
    try {
      const { data } = await API.put("/api/user/profile", {
        name,
        bio,
        profilePic,
      });

      login({ ...user, ...data });
      alert("Profile Updated ✅");
    } catch (err) {
      console.error(err);
      alert("Failed ❌");
    }
  };

  const uploadImage = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await API.post("/api/upload", formData);
      setProfilePic(res.data.url);
    } catch (err) {
      console.error(err);
    }
  };

  const removeImage = async () => {
    setProfilePic("");
    try {
      await API.put("/api/user/profile", {
        name,
        bio,
        profilePic: "",
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-purple-100 to-pink-200">

      <Navbar />

      <div className="flex justify-center items-center px-4 py-10">
        {/* GLASS CARD */}
        <div className="w-full max-w-md bg-white/25 backdrop-blur-xl border border-white/30 rounded-3xl shadow-xl p-8">

          {/* TITLE */}
          <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
            My Profile
          </h2>

          {/* PROFILE IMAGE */}
          <div className="flex flex-col items-center mb-6">
            <img
              src={
                profilePic ||
                "https://cdn-icons-png.flaticon.com/512/149/149071.png"
              }
              alt="profile"
              className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
            />

            {/* UPLOAD */}
            <label className="mt-3 cursor-pointer text-sm text-purple-700 hover:underline">
              Change Photo
              <input
                type="file"
                onChange={(e) => uploadImage(e.target.files[0])}
                className="hidden"
              />
            </label>

            {/* REMOVE */}
            {profilePic && (
              <button
                onClick={removeImage}
                className="mt-2 text-xs text-red-500 hover:underline"
              >
                Remove Photo
              </button>
            )}
          </div>

          {/* INPUTS */}
          <div className="space-y-4">

            {/* NAME */}
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="w-full px-4 py-2 rounded-xl bg-white/40 border border-white/40 
                         placeholder-purple-700 text-purple-800 
                         focus:outline-none focus:ring-2 focus:ring-purple-400"
            />

            {/* BIO */}
            <input
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Bio"
              className="w-full px-4 py-2 rounded-xl bg-white/40 border border-white/40 
                         placeholder-purple-700 text-purple-800 
                         focus:outline-none focus:ring-2 focus:ring-purple-400"
            />

            {/* EMAIL */}
            <input
              value={user?.email || ""}
              disabled
              className="w-full px-4 py-2 rounded-xl bg-gray-200 text-gray-600"
            />
          </div>

          {/* BUTTONS */}
          <div className="mt-6 space-y-3">

            {/* UPDATE */}
            <button
              onClick={updateProfile}
              className="w-full py-2 bg-white/60 text-purple-700 font-semibold 
                         rounded-xl hover:bg-white/80 transition"
            >
              Update Profile
            </button>

            {/* LOGOUT */}
            <button
              onClick={() => {
                logout();
                nav("/");
              }}
              className="w-full py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
