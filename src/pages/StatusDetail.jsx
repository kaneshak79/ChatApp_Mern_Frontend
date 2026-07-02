//         </div>
//         )}
//       </div>
//     </div>
//   );
// }

// //last i had

import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API } from "../api/axios";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-hot-toast";

export default function StatusDetail() {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const nav = useNavigate();

  const [status, setStatus] = useState(null);
  const [caption, setCaption] = useState("");
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [editMode, setEditMode] = useState(false);

  // Fetch status details
  useEffect(() => {
    fetchStatus();
  }, []);

  const fetchStatus = async () => {
    try {
      const { data } = await API.get(`/api/status/${id}`, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      setStatus(data);
      setCaption(data.content || "");
    } catch (err) {
      console.error(err);
      toast.error("Failed to load status ❌");
    }
  };

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpdate = async () => {
    if (!file && !caption) {
      toast.error("Select a file or add a caption to update");
      return;
    }

    setUploading(true);

    try {
      let mediaUrl = status.mediaUrl;

      // Upload new file if selected
      if (file) {
        const formData = new FormData();
        formData.append("file", file);

        const uploadRes = await API.post("/api/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${user.token}`,
          },
        });

        mediaUrl = uploadRes.data.url; // backend should return { url: "..." }
      }

      // Update existing status
      await API.patch(
        `/api/status/${id}`,
        { mediaUrl, content: caption },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      toast.success("Status updated ✅");
      nav("/home");
    } catch (err) {
      console.error(err);
      toast.error("Failed to update status ❌");
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Delete this status?")) return;

    try {
      await API.delete(`/api/status/${id}`, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      toast.success("Status deleted ✅");
      nav("/home");
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete status ❌");
    }
  };

  if (!status) return <p className="text-center mt-20">Loading status...</p>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-purple-50 to-pink-50 p-4">
      <h2 className="text-2xl font-bold mb-4">Status Detail</h2>

      <img
        src={file ? URL.createObjectURL(file) : status.mediaUrl}
        alt="status"
        className="w-64 h-64 object-cover rounded-xl mb-4 border-2 border-purple-500"
      />

      <p className="mb-4 text-center">{status.content}</p>

      <div className="flex gap-4">
        {!editMode && (
          <>
            <button
              onClick={() => setEditMode(true)}
              className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
            >
              Edit
            </button>

            <button
              onClick={handleDelete}
              className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition"
            >
              Delete
            </button>
          </>
        )}

        {editMode && (
          <div className="flex flex-col items-center gap-2">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="mb-2"
            />
            <input
              type="text"
              placeholder="Edit caption..."
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              className="px-4 py-2 mb-2 rounded-xl border border-gray-300 w-64 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <div className="flex gap-2">
              <button
                onClick={handleUpdate}
                className="px-4 py-2 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition"
                disabled={uploading}
              >
                {uploading ? "Updating..." : "Update"}
              </button>
              <button
                onClick={() => setEditMode(false)}
                className="px-4 py-2 bg-gray-300 rounded-xl hover:bg-gray-400 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
