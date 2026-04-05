// // // // // // // // // // // import { useEffect, useState } from "react";
// // // // // // // // // // // import { API } from "../api/axios";

// // // // // // // // // // // export default function Status() {
// // // // // // // // // // //   const [statuses, setStatuses] = useState([]);
// // // // // // // // // // //   const [file, setFile] = useState(null);

// // // // // // // // // // //   const fetchStatus = async () => {
// // // // // // // // // // //     const { data } = await API.get("/api/status");
// // // // // // // // // // //     setStatuses(data);
// // // // // // // // // // //   };

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     fetchStatus();
// // // // // // // // // // //   }, []);

// // // // // // // // // // //   const upload = async () => {
// // // // // // // // // // //     const form = new FormData();
// // // // // // // // // // //     form.append("file", file);

// // // // // // // // // // //     const uploadRes = await API.post("/api/upload", form);

// // // // // // // // // // //     await API.post("/api/status", {
// // // // // // // // // // //       type: "image",
// // // // // // // // // // //       mediaUrl: uploadRes.data.url,
// // // // // // // // // // //     });

// // // // // // // // // // //     fetchStatus();
// // // // // // // // // // //   };

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div>
// // // // // // // // // // //       <h2>Status</h2>

// // // // // // // // // // //       <input type="file" onChange={(e) => setFile(e.target.files[0])} />
// // // // // // // // // // //       <button onClick={upload}>Upload</button>

// // // // // // // // // // //       {statuses.map((s) => (
// // // // // // // // // // //         <div key={s._id}>
// // // // // // // // // // //           <img src={s.mediaUrl} width="100" />
// // // // // // // // // // //         </div>
// // // // // // // // // // //       ))}
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // }

// // // // // // // // // // import { useEffect, useState } from "react";
// // // // // // // // // // import { API } from "../api/axios";
// // // // // // // // // // import Navbar from "../components/Navbar";

// // // // // // // // // // export default function Status() {
// // // // // // // // // //   const [statuses, setStatuses] = useState([]);

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     fetchStatus();
// // // // // // // // // //   }, []);

// // // // // // // // // //   const fetchStatus = async () => {
// // // // // // // // // //     const { data } = await API.get("/api/status");
// // // // // // // // // //     setStatuses(data);
// // // // // // // // // //   };

// // // // // // // // // //   const addStatus = async () => {
// // // // // // // // // //     const url = prompt("Enter image URL");
// // // // // // // // // //     if (!url) return;

// // // // // // // // // //     await API.post("/api/status", {
// // // // // // // // // //       type: "image",
// // // // // // // // // //       mediaUrl: url,
// // // // // // // // // //     });

// // // // // // // // // //     fetchStatus();
// // // // // // // // // //   };

// // // // // // // // // //   const deleteStatus = async (id) => {
// // // // // // // // // //     await API.delete(`/api/status/${id}`);
// // // // // // // // // //     fetchStatus();
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <div>

// // // // // // // // // //       <Navbar />

// // // // // // // // // //       <div style={{ padding: "10px" }}>
// // // // // // // // // //         <h2>Status</h2>

// // // // // // // // // //         <button onClick={addStatus}>Add Status</button>

// // // // // // // // // //         {statuses.map((s) => (
// // // // // // // // // //           <div key={s._id} style={{ margin: "10px 0" }}>
// // // // // // // // // //             <img src={s.mediaUrl} width="150" />
// // // // // // // // // //             <br />
// // // // // // // // // //             <button onClick={() => deleteStatus(s._id)}>Delete</button>
// // // // // // // // // //           </div>
// // // // // // // // // //         ))}
// // // // // // // // // //       </div>

// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // }

// // // // // // // // // import { useEffect, useState } from "react";
// // // // // // // // // import { API } from "../api/axios";

// // // // // // // // // export default function Status() {
// // // // // // // // //   const [statuses, setStatuses] = useState([]);
// // // // // // // // //   const [file, setFile] = useState(null);

// // // // // // // // //   const fetchStatus = async () => {
// // // // // // // // //     const { data } = await API.get("/api/status");
// // // // // // // // //     setStatuses(data);
// // // // // // // // //   };

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     fetchStatus();
// // // // // // // // //   }, []);

// // // // // // // // //   const upload = async () => {
// // // // // // // // //     const form = new FormData();
// // // // // // // // //     form.append("file", file);

// // // // // // // // //     const uploadRes = await API.post("/api/upload", form);

// // // // // // // // //     await API.post("/api/status", {
// // // // // // // // //       type: "image",
// // // // // // // // //       mediaUrl: uploadRes.data.url,
// // // // // // // // //     });

// // // // // // // // //     fetchStatus();
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div>
// // // // // // // // //       <h2>Status</h2>

// // // // // // // // //       <input type="file" onChange={(e) => setFile(e.target.files[0])} />
// // // // // // // // //       <button onClick={upload}>Upload</button>

// // // // // // // // //       {statuses.map((s) => (
// // // // // // // // //         <div key={s._id}>
// // // // // // // // //           <img src={s.mediaUrl} width="100" />
// // // // // // // // //         </div>
// // // // // // // // //       ))}
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // }

// // // // // // import { useEffect, useState } from "react";
// // // // // // import { API } from "../api/axios";
// // // // // // import Navbar from "../components/Navbar";

// // // // // // export default function Status() {
// // // // // //   const [statuses, setStatuses] = useState([]);

// // // // // //   useEffect(() => {
// // // // // //     fetchStatus();
// // // // // //   }, []);

// // // // // //   const fetchStatus = async () => {
// // // // // //     const { data } = await API.get("/api/status");
// // // // // //     setStatuses(data);
// // // // // //   };

// // // // // //   const addStatus = async () => {
// // // // // //     const url = prompt("Enter image URL");
// // // // // //     if (!url) return;

// // // // // //     await API.post("/api/status", {
// // // // // //       type: "image",
// // // // // //       mediaUrl: url,
// // // // // //     });

// // // // // //     fetchStatus();
// // // // // //   };

// // // // // //   const deleteStatus = async (id) => {
// // // // // //     await API.delete(`/api/status/${id}`);
// // // // // //     fetchStatus();
// // // // // //   };

// // // // // //   return (
// // // // // //     <div>

// // // // // //       <Navbar />

// // // // // //       <div style={{ padding: "10px" }}>
// // // // // //         <h2>Status</h2>

// // // // // //         <button onClick={addStatus}>Add Status</button>

// // // // // //         {statuses.map((s) => (
// // // // // //           <div key={s._id} style={{ margin: "10px 0" }}>
// // // // // //             <img src={s.mediaUrl} width="150" />
// // // // // //             <br />
// // // // // //             <button onClick={() => deleteStatus(s._id)}>Delete</button>
// // // // // //           </div>
// // // // // //         ))}
// // // // // //       </div>

// // // // // //     </div>
// // // // // //   );
// // // // // // }

import { useEffect, useState } from "react";
import { API } from "../api/axios";
import Navbar from "../components/Navbar";
import { FiPlus, FiTrash2 } from "react-icons/fi";

export default function Status() {
  const [statuses, setStatuses] = useState([]);

  useEffect(() => {
    fetchStatus();
  }, []);

  const fetchStatus = async () => {
    const { data } = await API.get("/api/status");
    setStatuses(data);
  };

  const addStatus = async () => {
    const url = prompt("Enter image URL");
    if (!url) return;

    await API.post("/api/status", {
      type: "image",
      mediaUrl: url,
    });

    fetchStatus();
  };

  const deleteStatus = async (id) => {
    await API.delete(`/api/status/${id}`);
    fetchStatus();
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-purple-100 to-pink-200">

      <Navbar />

      <div className="p-4 max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-purple-700">Status</h2>

          <button
            onClick={addStatus}
            className="flex items-center gap-2 px-4 py-2 rounded-full 
                       bg-white/60 backdrop-blur-md shadow hover:bg-white/80 transition"
          >
            <FiPlus />
            Add Status
          </button>
        </div>

        {/* STATUS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          {statuses.map((s) => (
            <div
              key={s._id}
              className="relative group rounded-2xl overflow-hidden 
                         bg-white/40 backdrop-blur-md shadow-md"
            >
              {/* IMAGE */}
              <img
                src={s.mediaUrl}
                className="w-full h-40 object-cover"
              />

              {/* OVERLAY DELETE */}
              <button
                onClick={() => deleteStatus(s._id)}
                className="absolute top-2 right-2 p-2 rounded-full 
                           bg-black/40 text-white opacity-0 
                           group-hover:opacity-100 transition"
              >
                <FiTrash2 size={16} />
              </button>
             

              {/*FOOTER */}
              <div className="p-2 text-xs text-gray-700 text-center">
                Your Status
              </div>
            
             
             
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}


// // // // final status crt

// import { useEffect, useState, useContext } from "react";
// import { API } from "../api/axios";
// import Navbar from "../components/Navbar";
// import { FiPlus, FiTrash2 } from "react-icons/fi";
// import { AuthContext } from "../context/AuthContext";

// export default function Status() {
//   const [statuses, setStatuses] = useState([]);
//   const [myStatus, setMyStatus] = useState([]);
//   const [otherStatus, setOtherStatus] = useState([]);

//   const { user } = useContext(AuthContext);

//   useEffect(() => {
//     fetchStatus();
//   }, []);

//   const fetchStatus = async () => {
//     const { data } = await API.get("/api/status");

//     setStatuses(data);

//     // ✅ Split statuses
   
//     setMyStatus(data.filter((s) => String(s.user) === String(user?._id)));
// setOtherStatus(data.filter((s) => String(s.user) !== String(user?._id)));
//     // setMyStatus(data.filter((s) => s.user === user?._id));
//     // setOtherStatus(data.filter((s) => s.user !== user?._id));
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
//     try {
//       await API.delete(`/api/status/${id}`);
   
//       fetchStatus();
//     } catch (err) {
//       console.error("Delete failed:", err.response?.data || err.message);
//     }
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

//         {/* 🔵 YOUR STATUS */}
//         {/* <h3 className="text-lg font-semibold mb-3 text-purple-700">
//           Your Status
//         </h3> */}
//         <h3 className="text-lg font-semibold mb-3 text-transparent bg-clip-text 
//                bg-gradient-to-r from-purple-600 to-pink-500">
//   Your Status
// </h3>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
//           {myStatus.length === 0 && (
//             <p className="text-sm text-gray-500">No status yet</p>
//           )}

//           {myStatus.map((s) => (
//             <div
//               key={s._id}
//               className="relative group rounded-2xl overflow-hidden 
//                          bg-white/40 backdrop-blur-md shadow-md"
//             >
//               <img
//                 src={s.mediaUrl}
//                 className="w-full h-40 object-cover"
//               />

//               {/* DELETE (ONLY YOUR STATUS) */}
//               <button
//                 onClick={() => deleteStatus(s._id)}
//                 className="absolute top-2 right-2 p-2 rounded-full 
//                            bg-black/40 text-white opacity-0 
//                            group-hover:opacity-100 transition"
//               >
//                 <FiTrash2 size={16} />
//               </button>

//               <div className="p-2 text-xs text-center text-gray-700">
//                 Your Status
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* 🟢 OTHERS STATUS */}
//         <h3 className="text-lg font-semibold mb-3 text-purple-700">
//           Others
//         </h3>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//           {otherStatus.length === 0 && (
//             <p className="text-sm text-gray-500">No statuses</p>
//           )}

//           {otherStatus.map((s) => (
//             <div
//               key={s._id}
//               className="relative rounded-2xl overflow-hidden 
//                          bg-white/40 backdrop-blur-md shadow-md"
//             >
//               <img
//                 src={s.mediaUrl}
//                 className="w-full h-40 object-cover"
//               />

//               <div className="p-2 text-xs text-center text-gray-700">
//                 User Status
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// }

