
//       ))}
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { API } from "../api/axios";
import Navbar from "../components/Navbar";
import { FiBell } from "react-icons/fi";

export default function Notifications() {
  const [notes, setNotes] = useState([]);

  const fetch = async () => {
    const { data } = await API.get("/api/notifications");
    setNotes(data);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-purple-100 to-pink-200">

      <Navbar />

      <div className="max-w-3xl mx-auto p-4">

        {/* HEADER */}
        <div className="flex items-center gap-2 mb-6">
          <FiBell className="text-purple-700" size={24} />
          <h2 className="text-2xl font-bold text-purple-700">
            Notifications
          </h2>
        </div>

        {/* EMPTY STATE */}
        {notes.length === 0 ? (
          <div className="flex flex-col items-center justify-center mt-20 text-gray-500">
            <FiBell size={40} className="mb-3 opacity-50" />
            <p>No notifications yet</p>
          </div>
        ) : (
          <div className="flex flex-col gap-3">

            {notes.map((n) => (
              <div
                key={n._id}
                className="flex items-center gap-3 p-4 rounded-2xl
                           bg-white/40 backdrop-blur-md shadow-sm
                           hover:bg-white/60 transition"
              >
                {/* ICON */}
                <div className="p-2 bg-purple-100 rounded-full text-purple-600">
                  <FiBell size={18} />
                </div>

                {/* CONTENT */}
                <div className="flex-1">
                  <p className="text-sm text-gray-800">
                    {n.type}
                  </p>

                  <p className="text-xs text-gray-500">
                    {new Date(n.createdAt).toLocaleString()}
                  </p>
                </div>
              </div>
            ))}

          </div>
        )}

      </div>
    </div>
  );
}
