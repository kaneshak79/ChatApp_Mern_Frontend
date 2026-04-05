// // // import { useState, useEffect, useContext } from "react";
// // // import { useParams, useNavigate } from "react-router-dom";
// // // import { API } from "../api/axios";
// // // import { AuthContext } from "../context/AuthContext";

// // // export default function StatusDetail() {
// // //   const { user } = useContext(AuthContext);
// // //   const { id } = useParams();
// // //   const nav = useNavigate();

// // //   const [status, setStatus] = useState(null);
// // //   const [caption, setCaption] = useState("");
// // //   const [file, setFile] = useState(null);
// // //   const [uploading, setUploading] = useState(false);

// // //   useEffect(() => {
// // //     fetchStatus();
// // //   }, []);

// // //   const fetchStatus = async () => {
// // //     try {
// // //       const { data } = await API.get(`/api/status/${id}`, {
// // //         headers: { Authorization: `Bearer ${user.token}` },
// // //       });
// // //       setStatus(data);
// // //       setCaption(data.caption || "");
// // //     } catch (err) {
// // //       console.error(err);
// // //       alert("Failed to load status ❌");
// // //     }
// // //   };

// // //   const handleFileChange = (e) => {
// // //     setFile(e.target.files[0]);
// // //   };

// // //   const handleUpdate = async () => {
// // //     if (!status) return;

// // //     setUploading(true);
// // //     try {
// // //       let mediaUrl = status.mediaUrl;

// // //       // Upload new file if selected
// // //       if (file) {
// // //         const formData = new FormData();
// // //         formData.append("file", file);
// // //         formData.append("upload_preset", "YOUR_CLOUDINARY_PRESET");

// // //         const res = await fetch(
// // //           "https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload",
// // //           { method: "POST", body: formData }
// // //         );

// // //         const data = await res.json();
// // //         mediaUrl = data.secure_url;
// // //       }

// // //       await API.put(
// // //         `/api/status/${id}`,
// // //         { mediaUrl, caption },
// // //         { headers: { Authorization: `Bearer ${user.token}` } }
// // //       );

// // //       alert("Status updated ✅");
// // //       nav("/home"); // go back to home
// // //     } catch (err) {
// // //       console.error(err);
// // //       alert("Failed to update status ❌");
// // //     } finally {
// // //       setUploading(false);
// // //     }
// // //   };

// // //   const handleDelete = async () => {
// // //     if (!window.confirm("Delete this status?")) return;

// // //     try {
// // //       await API.delete(`/api/status/${id}`, {
// // //         headers: { Authorization: `Bearer ${user.token}` },
// // //       });
// // //       alert("Status deleted ✅");
// // //       nav("/home");
// // //     } catch (err) {
// // //       console.error(err);
// // //       alert("Failed to delete status ❌");
// // //     }
// // //   };

// // //   if (!status) return <p>Loading...</p>;

// // //   return (
// // //     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-purple-50 to-pink-50 p-4">
// // //       <h2 className="text-2xl font-bold mb-4">Edit Status</h2>

// // //       <img
// // //         src={file ? URL.createObjectURL(file) : status.mediaUrl}
// // //         alt="status"
// // //         className="w-64 h-64 object-cover rounded-xl mb-4 border-2 border-purple-500"
// // //         onClick={() => nav(`/status/${s._id}`)}
// // //       />

// // //       <input
// // //         type="file"
// // //         accept="image/*"
// // //         onChange={handleFileChange}
// // //         className="mb-4"
// // //       />

// // //       <input
// // //         type="text"
// // //         placeholder="Add caption..."
// // //         value={caption}
// // //         onChange={(e) => setCaption(e.target.value)}
// // //         className="px-4 py-2 mb-4 rounded-xl border border-gray-300 w-64 focus:outline-none focus:ring-2 focus:ring-purple-400"
// // //       />

// // //       <div className="flex gap-4">
// // //         <button
// // //           onClick={handleUpdate}
// // //           className="px-4 py-2 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition"
// // //           disabled={uploading}
// // //         >
// // //           {uploading ? "Updating..." : "Update"}
// // //         </button>

// // //         <button
// // //           onClick={handleDelete}
// // //           className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition"
// // //         >
// // //           Delete
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // import { useState, useEffect, useContext } from "react";
// // import { useParams, useNavigate } from "react-router-dom";
// // import { API } from "../api/axios";
// // import { AuthContext } from "../context/AuthContext";

// // export default function StatusDetail() {
// //   const { user } = useContext(AuthContext);
// //   const { id } = useParams();
// //   const nav = useNavigate();

// //   const [status, setStatus] = useState(null);
// //   const [caption, setCaption] = useState("");
// //   const [file, setFile] = useState(null);
// //   const [uploading, setUploading] = useState(false);

// //   // Fetch status details
// //   useEffect(() => {
// //     fetchStatus();
// //   }, []);

// //   const fetchStatus = async () => {
// //     try {
// //       const { data } = await API.get(`/api/status/${id}`, {
// //         headers: { Authorization: `Bearer ${user.token}` },
// //       });
// //       setStatus(data);
// //       setCaption(data.caption || "");
// //     } catch (err) {
// //       console.error(err);
// //       alert("Failed to load status ❌");
// //     }
// //   };

// //   // Handle file selection
// //   const handleFileChange = (e) => setFile(e.target.files[0]);

// //   // Handle "Update" → create new status (overwrite old if delete works)
// //   const handleUpdate = async () => {
// //     if (!file && !caption) {
// //       alert("Select a file or add a caption to update");
// //       return;
// //     }

// //     setUploading(true);

// //     try {
// //       let mediaUrl = status.mediaUrl; // default to existing if no new file

// //       // Upload new file if selected
// //       if (file) {
// //         const formData = new FormData();
// //         formData.append("file", file);
// //         formData.append("upload_preset", "YOUR_CLOUDINARY_PRESET");

// //         const res = await fetch(
// //           "https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload",
// //           { method: "POST", body: formData }
// //         );
// //         const data = await res.json();
// //         mediaUrl = data.secure_url;
// //       }

// //       // Create new status
// //       await API.post(
// //         "/api/status",
// //         { type: "image", mediaUrl, caption },
// //         { headers: { Authorization: `Bearer ${user.token}` } }
// //       );

// //       // Optional: delete old status (if you want to overwrite)
// //       try {
// //         await API.delete(`/api/status/${id}`, {
// //           headers: { Authorization: `Bearer ${user.token}` },
// //         });
// //       } catch (err) {
// //         console.warn("Old status delete failed, new one created ✅");
// //       }

// //       alert("Status updated ✅");
// //       nav("/home");
// //     } catch (err) {
// //       console.error(err);
// //       alert("Failed to update status ❌");
// //     } finally {
// //       setUploading(false);
// //     }
// //   };

// //   // Handle delete
// //   const handleDelete = async () => {
// //     if (!window.confirm("Delete this status?")) return;

// //     try {
// //       await API.delete(`/api/status/${id}`, {
// //         headers: { Authorization: `Bearer ${user.token}` },
// //       });
// //       alert("Status deleted ✅");
// //       nav("/home");
// //     } catch (err) {
// //       console.error(err);
// //       alert("Failed to delete status ❌");
// //     }
// //   };

// //   if (!status) return <p className="text-center mt-20">Loading status...</p>;

// //   return (
// //     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-purple-50 to-pink-50 p-4">
// //       <h2 className="text-2xl font-bold mb-4">Status Detail</h2>

// //       <img
// //         src={file ? URL.createObjectURL(file) : status.mediaUrl}
// //         alt="status"
// //         className="w-64 h-64 object-cover rounded-xl mb-4 border-2 border-purple-500"
// //       />

// //       <input
// //         type="file"
// //         accept="image/*"
// //         onChange={handleFileChange}
// //         className="mb-4"
// //       />

// //       <input
// //         type="text"
// //         placeholder="Add caption..."
// //         value={caption}
// //         onChange={(e) => setCaption(e.target.value)}
// //         className="px-4 py-2 mb-4 rounded-xl border border-gray-300 w-64 focus:outline-none focus:ring-2 focus:ring-purple-400"
// //       />

// //       <div className="flex gap-4">
// //         <button
// //           onClick={handleUpdate}
// //           className="px-4 py-2 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition"
// //           disabled={uploading}
// //         >
// //           {uploading ? "Updating..." : "Update"}
// //         </button>

// //         <button
// //           onClick={handleDelete}
// //           className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition"
// //         >
// //           Delete
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }

import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API } from "../api/axios";
import { AuthContext } from "../context/AuthContext";
 import { toast } from 'react-hot-toast';
export default function StatusDetail() {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const nav = useNavigate();

  const [status, setStatus] = useState(null);
  const [caption, setCaption] = useState("");
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [editMode, setEditMode] = useState(false); // <-- toggle edit mode

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
      setCaption(data.caption || "");
    } catch (err) {
      console.error(err);
    //   alert("Failed to load status ❌");
    toast.error("Failed to load status ❌");
    }
  };

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpdate = async () => {
    if (!file && !caption) {
    //   alert("Select a file or add a caption to update");
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
        formData.append("upload_preset", "YOUR_CLOUDINARY_PRESET");

        const res = await fetch(
          "https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload",
          { method: "POST", body: formData }
        );
        const data = await res.json();
        mediaUrl = data.secure_url;
      }

      // Create new status
      await API.post(
        "/api/status",
        { type: "image", mediaUrl, caption },
        { headers: { Authorization: `Bearer ${user.token}` } }
      );

      // Optional: delete old status
      try {
        await API.delete(`/api/status/${id}`, {
          headers: { Authorization: `Bearer ${user.token}` },
        });
      } catch (err) {
        console.warn("Old status delete failed, new one created ✅");
      }

    //   alert("Status updated ✅");
    toast.success("Status updated ✅");
      nav("/home");
    } catch (err) {
      console.error(err);
    //   alert("Failed to update status ❌");
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
    //   alert("Status deleted ✅");
    toast.success("Status deleted ✅");
      nav("/home");
    } catch (err) {
      console.error(err);
    //   alert("Failed to delete status ❌");
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

      <p className="mb-4 text-center">{status.caption}</p>

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

