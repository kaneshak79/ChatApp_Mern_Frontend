
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API } from "../api/axios";
import { FiMic, FiVideo, FiPhoneOff } from "react-icons/fi";

export default function CallVideo() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser();
  }, [id]);

  const fetchUser = async () => {
    try {
      const { data } = await API.get(`/api/user/search?search=`);
      const found = data.find((u) => u._id === id);
      setUser(found);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-between
                    bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">

      {/* TOP USER INFO */}
      <div className="flex flex-col items-center mt-16">

        <img
          src={user?.profilePic || `https://i.pravatar.cc/150?u=${id}`}
          alt="profile"
          className="w-32 h-32 rounded-full object-cover border-4 border-white/20 shadow-lg"
        />

        <h2 className="text-2xl font-semibold mt-4">
          {user?.name || "Loading..."}
        </h2>

        <p className="text-gray-400 text-sm mt-1">
          Video calling...
        </p>
      </div>

      {/* FAKE VIDEO AREA (background feel) */}
      <div className="flex-1 flex items-center justify-center text-gray-500 text-sm">
        Camera Off
      </div>

      {/* CONTROLS */}
      <div className="flex justify-center items-center gap-10 mb-10">

        {/* CAMERA TOGGLE (UI ONLY) */}
        <button
          onClick={() => alert("Camera toggle")}
          className="p-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition"
        >
          <FiVideo size={24} />
        </button>

        {/* END CALL */}
        <button
          onClick={() => window.history.back()}
          className="p-5 rounded-full bg-red-500 hover:bg-red-600 transition shadow-lg"
        >
          <FiPhoneOff size={26} />
        </button>

        {/* MUTE */}
        <button
          onClick={() => alert("Mute")}
          className="p-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition"
        >
          <FiMic size={24} />
        </button>

      </div>
    </div>
  );
}
