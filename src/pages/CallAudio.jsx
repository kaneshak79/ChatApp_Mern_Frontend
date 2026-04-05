// // // // // import { useEffect, useState } from "react";
// // // // // import { API } from "../api/axios";
// // // // // import { useParams } from "react-router-dom";

// // // // // export default function CallAudio() {
// // // // //   const { id } = useParams();
// // // // //   const [startTime, setStartTime] = useState(null);
// // // // //   const [duration, setDuration] = useState(0);

// // // // //   useEffect(() => {
// // // // //     setStartTime(Date.now());
// // // // //   }, []);

// // // // //   const endCall = async () => {
// // // // //     const end = Date.now();
// // // // //     const time = Math.floor((end - startTime) / 1000);
// // // // //     setDuration(time);

// // // // //     await API.put(`/api/call/end/${id}`);
// // // // //     alert(`Call ended. Duration: ${time}s`);
// // // // //   };

// // // // //   return (
// // // // //     <div>
// // // // //       <h2>Audio Call</h2>
// // // // //       <button onClick={endCall}>End Call</button>
// // // // //       <p>Duration: {duration}s</p>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // import { useParams } from "react-router-dom";

// // // // export default function CallAudio() {
// // // //   const { id } = useParams();

// // // //   return (
// // // //     <div style={{ textAlign: "center", marginTop: "100px" }}>
// // // //       <h2>📞 Audio Call</h2>
// // // //       <p>Calling user: {id}</p>

// // // //       <button onClick={() => window.history.back()}>
// // // //         End Call
// // // //       </button>
// // // //     </div>
// // // //   );
// // // // }


// // // import { useEffect, useState } from "react";
// // // import { API } from "../api/axios";
// // // import { useParams } from "react-router-dom";

// // // export default function CallAudio() {
// // //   const { id } = useParams();
// // //   const [startTime, setStartTime] = useState(null);
// // //   const [duration, setDuration] = useState(0);

// // //   useEffect(() => {
// // //     setStartTime(Date.now());
// // //   }, []);

// // //   const endCall = async () => {
// // //     const end = Date.now();
// // //     const time = Math.floor((end - startTime) / 1000);
// // //     setDuration(time);

// // //     await API.put(`/api/call/end/${id}`);
// // //     alert(`Call ended. Duration: ${time}s`);
// // //   };

// // //   return (
// // //     <div>
// // //       <h2>Audio Call</h2>
// // //       <button onClick={endCall}>End Call</button>
// // //       <p>Duration: {duration}s</p>
// // //     </div>
// // //   );
// // // }


// // import { useParams } from "react-router-dom";

// // export default function CallAudio() {
// //   const { id } = useParams();

// //   return (
// //     <div style={{ textAlign: "center", marginTop: "100px" }}>
// //       <h2>📞 Audio Call</h2>
// //       <p>Calling user: {id}</p>

// //       <button onClick={() => window.history.back()}>
// //         End Call
// //       </button>
// //     </div>
// //   );
// // }

// import { useParams } from "react-router-dom";
// import { FiMic, FiVolume2, FiPhoneOff } from "react-icons/fi";

// export default function CallAudio() {
//   const { id } = useParams();

//   return (
//     <div className="h-screen w-screen flex flex-col items-center justify-between
//                     bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6">

//       {/* TOP SECTION */}
//       <div className="flex flex-col items-center mt-16">
        
//         {/* PROFILE IMAGE */}
//         <img
//           src={`https://i.pravatar.cc/150?u=${id}`}
//           alt="profile"
//           className="w-32 h-32 rounded-full object-cover border-4 border-white/20 shadow-lg"
//         />

//         {/* NAME */}
//         <h2 className="text-2xl font-semibold mt-4">
//           User {id}
//         </h2>

//         {/* STATUS */}
//         <p className="text-gray-400 mt-1 text-sm">
//           Calling...
//         </p>
//       </div>

//       {/* BOTTOM CONTROLS */}
//       <div className="w-full flex justify-center items-center gap-10 mb-10">

//         {/* SPEAKER (UI ONLY) */}
//         <button
//           onClick={() => alert("Speaker")}
//           className="p-4 rounded-full bg-white/10 hover:bg-white/20 
//                      backdrop-blur-md transition shadow-md"
//         >
//           <FiVolume2 size={24} />
//         </button>

//         {/* END CALL (WORKING) */}
//         <button
//           onClick={() => window.history.back()}
//           className="p-5 rounded-full bg-red-500 hover:bg-red-600 
//                      transition shadow-lg"
//         >
//           <FiPhoneOff size={26} />
//         </button>

//         {/* MUTE (UI ONLY) */}
//         <button
//           onClick={() => alert("Mute")}
//           className="p-4 rounded-full bg-white/10 hover:bg-white/20 
//                      backdrop-blur-md transition shadow-md"
//         >
//           <FiMic size={24} />
//         </button>

//       </div>
//     </div>
//   );
// }

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API } from "../api/axios";
import { FiMic, FiVolume2, FiPhoneOff } from "react-icons/fi";

export default function CallAudio() {
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
    <div className="h-screen w-screen flex flex-col items-center justify-between
                    bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6">

      {/* TOP */}
      <div className="flex flex-col items-center mt-16">
        
        <img
          src={user?.profilePic || `https://i.pravatar.cc/150?u=${id}`}
          alt="profile"
          className="w-32 h-32 rounded-full object-cover border-4 border-white/20 shadow-lg"
        />

        {/* ✅ NAME FIXED */}
        <h2 className="text-2xl font-semibold mt-4">
          {user?.name || "Loading..."}
        </h2>

        <p className="text-gray-400 mt-1 text-sm">
          Calling...
        </p>
      </div>

      {/* CONTROLS */}
      <div className="w-full flex justify-center items-center gap-10 mb-10">

        {/* <button
          onClick={() => alert("Speaker")}
          className="p-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md"
        >
          <FiVolume2 size={24} />
        </button> */}

        <button
          onClick={() => window.history.back()}
          className="p-5 rounded-full bg-red-500 hover:bg-red-600"
        >
          <FiPhoneOff size={26} />
        </button>

        {/* <button
          onClick={() => alert("Mute")}
          className="p-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md"
        >
          <FiMic size={24} />
        </button> */}

      </div>
    </div>
  );
}