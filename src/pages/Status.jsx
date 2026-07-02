

// // // // // final status crt



import { useState, useEffect, useContext } from "react";
import { API } from "../api/axios";
import Navbar from "../components/Navbar";
import { AuthContext } from "../context/AuthContext";

export default function Status() {
  const { user } = useContext(AuthContext);
  const [statuses, setStatuses] = useState([]);
  const [uploading, setUploading] = useState(false);

  // -----------------------------
  // Fetch all statuses
  // -----------------------------
  const fetchStatus = async () => {
    try {
      const { data } = await API.get("/api/status", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      setStatuses(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Failed to fetch statuses:", err);
    }
  };

  useEffect(() => {
    fetchStatus();
  }, []);

  // -----------------------------
  // Upload file to backend → Cloudinary
  // -----------------------------
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);

    try {
      // 1️⃣ Upload to backend Cloudinary route
      const formData = new FormData();
      formData.append("file", file);

      const uploadRes = await API.post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${user.token}`,
        },
      });

      const mediaUrl = uploadRes.data.url; // backend returns { url: "..." }
      if (!mediaUrl) throw new Error("Upload failed: no URL returned");

      // 2️⃣ Create status using backend
      const statusRes = await API.post(
        "/api/status",
        { type: "image", mediaUrl },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      // Add new status to state
      setStatuses((prev) => [statusRes.data, ...prev]);
    } catch (err) {
      console.error("Failed to upload status:", err.response || err);
      alert("Failed to upload status ❌");
    } finally {
      setUploading(false);
      e.target.value = null;
    }
  };

  // -----------------------------
  // Separate your status from others
  // -----------------------------
  const myStatus = statuses.find((s) => s.user?._id === user._id);
  const otherStatuses = statuses.filter((s) => s.user?._id !== user._id);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-purple-100 to-pink-200">
      <Navbar />
      <div className="p-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-purple-700 mb-4">Status</h2>

        {/* -----------------------------
            Your status upload
        ----------------------------- */}
        <div className="flex items-center gap-4 mb-6">
          <label className="relative cursor-pointer">
            <div className="w-20 h-20 rounded-full bg-white/30 flex items-center justify-center overflow-hidden border-2 border-green-500">
              {myStatus ? (
                <img
                  src={myStatus.mediaUrl}
                  className="w-full h-full object-cover"
                  alt="Your Status"
                />
              ) : (
                <span className="text-3xl">{uploading ? "..." : "+"}</span>
              )}
            </div>
            <input
              type="file"
              className="hidden"
              onChange={handleFileUpload}
              disabled={uploading}
            />
          </label>
          <span className="text-sm">Your Status</span>
        </div>

        {/* -----------------------------
            Other users' statuses
        ----------------------------- */}
        <div className="flex flex-wrap gap-4">
          {otherStatuses.map((s) => (
            <div key={s._id} className="flex flex-col items-center">
              <img
                src={s.mediaUrl}
                className="w-16 h-16 rounded-full border-2 border-green-500 cursor-pointer"
                onClick={() => alert(`View status: ${s._id}`)}
                alt={s.user?.name || "User"}
              />
              <span className="text-xs">{s.user?.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
