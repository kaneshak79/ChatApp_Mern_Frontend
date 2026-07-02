
//       <p>Bio: {user.bio || "No bio"}</p>

//       <button onClick={blockUser}>Block</button>
//       <button onClick={reportUser}>Report</button>
//     </div>
//   );
// }

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API } from "../api/axios";

export default function UserProfile() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser();
  }, [id]);

  const fetchUser = async () => {
    const { data } = await API.get(`/api/user/search?search=`);
    const found = data.find((u) => u._id === id);
    setUser(found);
  };

  const blockUser = async () => {
    await API.put(`/api/user/block/${id}`);
    alert("User Blocked");
  };

  const reportUser = () => {
    alert("User Reported 🚫");
  };

  if (!user) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen flex justify-center items-start p-6
                    bg-gradient-to-br from-blue-200 via-purple-100 to-pink-200">

      {/* GLASS CARD */}
      <div className="w-full max-w-md bg-white/30 backdrop-blur-xl 
                      border border-white/30 rounded-3xl shadow-xl p-6">

        {/* PROFILE IMAGE */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={user.profilePic || `https://i.pravatar.cc/150?u=${id}`}
            alt="profile"
            className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md"
          />

          <h2 className="text-xl font-bold mt-3 text-purple-700">
            {user.name}
          </h2>

          <p className="text-sm text-gray-600">{user.email}</p>

          <p className="text-xs text-gray-500 mt-1 text-center px-4">
            {user.bio || "No bio available"}
          </p>
        </div>

        {/* MENU OPTIONS */}
        <div className="flex flex-col gap-3">

          {[
            "⭐ Starred Messages",
            "⏳ Disappearing Messages",
            "🔒 Chat Lock",
            "🔐 Privacy",
            "❤️ Add to Favorites",
            "🧹 Clear Chat",
          ].map((item, i) => (
            <button
              key={i}
              onClick={() => alert(item)}
              className="w-full text-left px-4 py-3 rounded-xl 
                         bg-white/60 hover:bg-white/80 transition shadow-sm"
            >
              {item}
            </button>
          ))}

        </div>

        {/* ACTION BUTTONS */}
        <div className="mt-6 flex gap-3">

          <button
            onClick={blockUser}
            className="flex-1 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition"
          >
            Block
          </button>

          <button
            onClick={reportUser}
            className="flex-1 py-2 bg-yellow-400 text-white rounded-xl hover:bg-yellow-500 transition"
          >
            Report
          </button>

        </div>
      </div>
    </div>
  );
}
