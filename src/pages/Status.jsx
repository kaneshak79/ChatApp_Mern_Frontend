// // // // // // // // // // // // import { useEffect, useState } from "react";
// // // // // // // // // // // // import { API } from "../api/axios";

// // // // // // // // // // // // export default function Status() {
// // // // // // // // // // // //   const [statuses, setStatuses] = useState([]);
// // // // // // // // // // // //   const [file, setFile] = useState(null);

// // // // // // // // // // // //   const fetchStatus = async () => {
// // // // // // // // // // // //     const { data } = await API.get("/api/status");
// // // // // // // // // // // //     setStatuses(data);
// // // // // // // // // // // //   };

// // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // //     fetchStatus();
// // // // // // // // // // // //   }, []);

// // // // // // // // // // // //   const upload = async () => {
// // // // // // // // // // // //     const form = new FormData();
// // // // // // // // // // // //     form.append("file", file);

// // // // // // // // // // // //     const uploadRes = await API.post("/api/upload", form);

// // // // // // // // // // // //     await API.post("/api/status", {
// // // // // // // // // // // //       type: "image",
// // // // // // // // // // // //       mediaUrl: uploadRes.data.url,
// // // // // // // // // // // //     });

// // // // // // // // // // // //     fetchStatus();
// // // // // // // // // // // //   };

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <div>
// // // // // // // // // // // //       <h2>Status</h2>

// // // // // // // // // // // //       <input type="file" onChange={(e) => setFile(e.target.files[0])} />
// // // // // // // // // // // //       <button onClick={upload}>Upload</button>

// // // // // // // // // // // //       {statuses.map((s) => (
// // // // // // // // // // // //         <div key={s._id}>
// // // // // // // // // // // //           <img src={s.mediaUrl} width="100" />
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       ))}
// // // // // // // // // // // //     </div>
// // // // // // // // // // // //   );
// // // // // // // // // // // // }

// // // // // // // // // // // import { useEffect, useState } from "react";
// // // // // // // // // // // import { API } from "../api/axios";
// // // // // // // // // // // import Navbar from "../components/Navbar";

// // // // // // // // // // // export default function Status() {
// // // // // // // // // // //   const [statuses, setStatuses] = useState([]);

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     fetchStatus();
// // // // // // // // // // //   }, []);

// // // // // // // // // // //   const fetchStatus = async () => {
// // // // // // // // // // //     const { data } = await API.get("/api/status");
// // // // // // // // // // //     setStatuses(data);
// // // // // // // // // // //   };

// // // // // // // // // // //   const addStatus = async () => {
// // // // // // // // // // //     const url = prompt("Enter image URL");
// // // // // // // // // // //     if (!url) return;

// // // // // // // // // // //     await API.post("/api/status", {
// // // // // // // // // // //       type: "image",
// // // // // // // // // // //       mediaUrl: url,
// // // // // // // // // // //     });

// // // // // // // // // // //     fetchStatus();
// // // // // // // // // // //   };

// // // // // // // // // // //   const deleteStatus = async (id) => {
// // // // // // // // // // //     await API.delete(`/api/status/${id}`);
// // // // // // // // // // //     fetchStatus();
// // // // // // // // // // //   };

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div>

// // // // // // // // // // //       <Navbar />

// // // // // // // // // // //       <div style={{ padding: "10px" }}>
// // // // // // // // // // //         <h2>Status</h2>

// // // // // // // // // // //         <button onClick={addStatus}>Add Status</button>

// // // // // // // // // // //         {statuses.map((s) => (
// // // // // // // // // // //           <div key={s._id} style={{ margin: "10px 0" }}>
// // // // // // // // // // //             <img src={s.mediaUrl} width="150" />
// // // // // // // // // // //             <br />
// // // // // // // // // // //             <button onClick={() => deleteStatus(s._id)}>Delete</button>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         ))}
// // // // // // // // // // //       </div>

// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // }

// // // // // // // // // // import { useEffect, useState } from "react";
// // // // // // // // // // import { API } from "../api/axios";

// // // // // // // // // // export default function Status() {
// // // // // // // // // //   const [statuses, setStatuses] = useState([]);
// // // // // // // // // //   const [file, setFile] = useState(null);

// // // // // // // // // //   const fetchStatus = async () => {
// // // // // // // // // //     const { data } = await API.get("/api/status");
// // // // // // // // // //     setStatuses(data);
// // // // // // // // // //   };

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     fetchStatus();
// // // // // // // // // //   }, []);

// // // // // // // // // //   const upload = async () => {
// // // // // // // // // //     const form = new FormData();
// // // // // // // // // //     form.append("file", file);

// // // // // // // // // //     const uploadRes = await API.post("/api/upload", form);

// // // // // // // // // //     await API.post("/api/status", {
// // // // // // // // // //       type: "image",
// // // // // // // // // //       mediaUrl: uploadRes.data.url,
// // // // // // // // // //     });

// // // // // // // // // //     fetchStatus();
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <div>
// // // // // // // // // //       <h2>Status</h2>

// // // // // // // // // //       <input type="file" onChange={(e) => setFile(e.target.files[0])} />
// // // // // // // // // //       <button onClick={upload}>Upload</button>

// // // // // // // // // //       {statuses.map((s) => (
// // // // // // // // // //         <div key={s._id}>
// // // // // // // // // //           <img src={s.mediaUrl} width="100" />
// // // // // // // // // //         </div>
// // // // // // // // // //       ))}
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // }

// // // // // // // import { useEffect, useState } from "react";
// // // // // // // import { API } from "../api/axios";
// // // // // // // import Navbar from "../components/Navbar";

// // // // // // // export default function Status() {
// // // // // // //   const [statuses, setStatuses] = useState([]);

// // // // // // //   useEffect(() => {
// // // // // // //     fetchStatus();
// // // // // // //   }, []);

// // // // // // //   const fetchStatus = async () => {
// // // // // // //     const { data } = await API.get("/api/status");
// // // // // // //     setStatuses(data);
// // // // // // //   };

// // // // // // //   const addStatus = async () => {
// // // // // // //     const url = prompt("Enter image URL");
// // // // // // //     if (!url) return;

// // // // // // //     await API.post("/api/status", {
// // // // // // //       type: "image",
// // // // // // //       mediaUrl: url,
// // // // // // //     });

// // // // // // //     fetchStatus();
// // // // // // //   };

// // // // // // //   const deleteStatus = async (id) => {
// // // // // // //     await API.delete(`/api/status/${id}`);
// // // // // // //     fetchStatus();
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div>

// // // // // // //       <Navbar />

// // // // // // //       <div style={{ padding: "10px" }}>
// // // // // // //         <h2>Status</h2>

// // // // // // //         <button onClick={addStatus}>Add Status</button>

// // // // // // //         {statuses.map((s) => (
// // // // // // //           <div key={s._id} style={{ margin: "10px 0" }}>
// // // // // // //             <img src={s.mediaUrl} width="150" />
// // // // // // //             <br />
// // // // // // //             <button onClick={() => deleteStatus(s._id)}>Delete</button>
// // // // // // //           </div>
// // // // // // //         ))}
// // // // // // //       </div>

// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// import { useEffect, useState } from "react";
// import { API } from "../api/axios";
// import Navbar from "../components/Navbar";
// import { FiPlus, FiTrash2 } from "react-icons/fi";

// export default function Status() {
//   const [statuses, setStatuses] = useState([]);

//   useEffect(() => {
//     fetchStatus();
//   }, []);

//   const fetchStatus = async () => {
//     const { data } = await API.get("/api/status");
//     setStatuses(data);
//   };

//   const addStatus = async () => {
//     const url = prompt("Enter image URL");
//     if (!url) return;

//     await API.post("/api/status", {
//       type: "image",
//       mediaUrl: url,
//     });

//     fetchStatus();
//   };

//   const deleteStatus = async (id) => {
//     await API.delete(`/api/status/${id}`);
//     fetchStatus();
//   };


//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-200 via-purple-100 to-pink-200">

//       <Navbar />

//       <div className="p-4 max-w-5xl mx-auto">

//         {/* HEADER */}
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-2xl font-bold text-purple-700">Status</h2>

//           <button
//             onClick={addStatus}
//             className="flex items-center gap-2 px-4 py-2 rounded-full 
//                        bg-white/60 backdrop-blur-md shadow hover:bg-white/80 transition"
//           >
//             <FiPlus />
//             Add Status
//           </button>
//         </div>

//         {/* STATUS GRID */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

//           {statuses.map((s) => (
//             <div
//               key={s._id}
//               className="relative group rounded-2xl overflow-hidden 
//                          bg-white/40 backdrop-blur-md shadow-md"
//             >
//               {/* IMAGE */}
//               <img
//                 src={s.mediaUrl}
//                 className="w-full h-40 object-cover"
//               />

//               {/* OVERLAY DELETE */}
//               <button
//                 onClick={() => deleteStatus(s._id)}
//                 className="absolute top-2 right-2 p-2 rounded-full 
//                            bg-black/40 text-white opacity-0 
//                            group-hover:opacity-100 transition"
//               >
//                 <FiTrash2 size={16} />
//               </button>
             

//               {/*FOOTER */}
//               <div className="p-2 text-xs text-gray-700 text-center">
//                 Your Status
//               </div>
            
             
             
//             </div>
//           ))}

//         </div>

//       </div>
//     </div>
//   );
// }


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