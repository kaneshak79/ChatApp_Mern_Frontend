// // import { useEffect, useState } from "react";
// // import { useParams, useNavigate } from "react-router-dom";
// // import { API } from "../api/axios";

// // export default function GroupMembersPage() {
// //   const { id } = useParams(); // group chat ID
// //   const [chat, setChat] = useState(null);
// //   const nav = useNavigate();

// //   useEffect(() => {
// //     const fetchGroup = async () => {
// //       try {
// //         const { data } = await API.get(`/api/chat/${id}`);
// //         if (!data.isGroupChat) nav("/home"); // redirect if not group
// //         setChat(data);
// //       } catch (err) {
// //         console.error(err);
// //       }
// //     };
// //     fetchGroup();
// //   }, [id, nav]);

// //   if (!chat) return <div>Loading group members...</div>;

// //   return (
// //     <div style={{ padding: "20px" }}>
// //       <h2>{chat.name || "Unnamed Group"}</h2>
// //       <h4>Members</h4>
// //       {chat.users.map((u) => (
// //         <div
// //           key={u._id}
// //           style={{ cursor: "pointer", padding: "5px" }}
// //           onClick={() => nav(`/user/${u._id}`)}
// //         >
// //           {u.name} {u.isOnline ? "🟢" : "⚫"}
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }



// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { API } from "../api/axios";

// export default function GroupMembersPage() {
//   const { id } = useParams();
//   const [chat, setChat] = useState(null);
//   const nav = useNavigate();

//   useEffect(() => {
//     const fetchGroup = async () => {
//       try {
//         // const { data } = await API.get(`/api/chat/${id}`);

//         const { data } = await API.get(`/api/chat/group/${id}`);
//         if (!data.isGroupChat) nav("/home");
//         setChat(data);

// //         const { data } = await API.get(`/api/chat/group/${chatId}`);
// // setChat(data);
// //       } catch (err) {
// //         console.error(err);
// //       }
//     };
//     fetchGroup();
//   }, [id, nav]);

//   if (!chat)
//     return (
//       <div className="min-h-screen flex items-center justify-center 
//                       bg-gradient-to-br from-blue-200 via-purple-100 to-pink-200">
//         <p className="text-gray-600">Loading group members...</p>
//       </div>
//     );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-200 via-purple-100 to-pink-200 p-4">

//       <div className="max-w-xl mx-auto">

//         {/* GROUP HEADER */}
//         <div className="flex flex-col items-center bg-white/40 backdrop-blur-xl 
//                         rounded-3xl p-6 shadow-md mb-6">

//           <img
//             // src={`https://ui-avatars.com/api/?name=${chat.name || "Group"}`}
//             src={`https://ui-avatars.com/api/?name=${chat.chatName || "Group"}`}
//             alt="group"
//             className="w-24 h-24 rounded-full object-cover border-4 border-white shadow"
//           />

//           <h2 className="text-xl font-bold mt-3 text-purple-700">
//             {chat.chatName || "Unnamed Group"}
//           </h2>

//           <p className="text-xs text-gray-500 mt-1">
//             {chat.users.length} members
//           </p>
//         </div>

//         {/* MEMBERS LIST */}
//         <div className="bg-white/40 backdrop-blur-xl rounded-3xl shadow-md p-4">

//           <h3 className="text-lg font-semibold text-gray-700 mb-3">
//             Members
//           </h3>

//           <div className="flex flex-col gap-2">

//             {chat.users.map((u) => (
//               <div
//                 key={u._id}
//                 // onClick={() => nav(`/user/${u._id}`)}
//                 onClick={() => nav(`/user/${u._id}`)}
//                 className="flex items-center justify-between p-3 rounded-xl 
//                            hover:bg-white/60 transition cursor-pointer"
//               >
//                 {/* LEFT */}
//                 <div className="flex items-center gap-3">
//                   <img
//                     src={`https://i.pravatar.cc/150?u=${u._id}`}
//                     alt="user"
//                     className="w-10 h-10 rounded-full object-cover"
//                   />

//                   <div>
//                     <p className="text-sm font-medium text-gray-800">
//                       {u.name || "Unnamed User"}
//                     </p>
//                     <p className="text-xs text-gray-500">
//                       {u.isOnline ? "Online" : "Offline"}
//                     </p>
//                   </div>
//                 </div>

//                 {/* STATUS DOT */}
//                 <div
//                   className={`w-3 h-3 rounded-full ${
//                     u.isOnline ? "bg-green-500" : "bg-gray-400"
//                   }`}
//                 ></div>
//               </div>
//             ))}

//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }
import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API } from "../api/axios";
import { AuthContext } from "../context/AuthContext";

export default function GroupMembersPage() {
  const { id } = useParams(); // group ID from URL
  const nav = useNavigate();
  const { user: loggedUser } = useContext(AuthContext);

  const [group, setGroup] = useState(null);
  const [members, setMembers] = useState([]);

  // ✅ Fetch group info safely
  const fetchGroup = async () => {
    try {
      const { data } = await API.get(`/api/chat/group/${id}`);

      if (!data) {
        console.warn("Group not found or API returned undefined");
        setGroup(null);
        setMembers([]);
        return;
      }

      console.log("Group API response:", data); // check backend structure

      // Handle if backend returns the chat object nested
      const groupData = data.chat || data; // fallback if needed

      setGroup(groupData);
      setMembers(groupData.users || []);
    } catch (err) {
      console.error("Error fetching group:", err);
      setGroup(null);
      setMembers([]);
    }
  };

  useEffect(() => {
    fetchGroup();
  }, [id, nav]);

  return (
    <div className="h-screen w-screen flex flex-col bg-gradient-to-br from-blue-200 via-purple-200 to-blue-100 p-4">
      <h2 className="text-2xl font-bold mb-4">
        {group?.chatName || "Unnamed Group"} Members
      </h2>

      {members.length === 0 ? (
        <p className="text-gray-500">No members found.</p>
      ) : (
        <div className="flex flex-col gap-3">
          {members.map((member) => (
            <div
              key={member._id}
              className="flex items-center gap-3 p-2 bg-white rounded shadow cursor-pointer hover:bg-gray-100"
              onClick={() => {
                if (member._id !== loggedUser._id) {
                  nav(`/user/${member._id}`);
                }
              }}
            >
              <img
                src={member.avatar || `https://i.pravatar.cc/150?u=${member._id}`}
                className="w-10 h-10 rounded-full"
              />
              <span className="font-semibold">{member.name || "Unknown"}</span>
              {member._id === loggedUser._id && (
                <span className="text-sm text-gray-500">(You)</span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}