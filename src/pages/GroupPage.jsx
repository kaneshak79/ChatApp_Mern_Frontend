// // // import { useParams, useNavigate } from "react-router-dom";
// // // import { useEffect, useState } from "react";
// // // import { API } from "../api/axios";
// // // import ChatBox from "../components/ChatBox";

// // // export default function GroupChatPage() {
// // //   const { id } = useParams(); // chat ID
// // //   const [chat, setChat] = useState(null);
// // //   const [messages, setMessages] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const nav = useNavigate();

// // //   const fetchChat = async () => {
// // //     try {
// // //       const { data } = await API.get(`/api/chat/${id}`);
// // //       if (!data.isGroupChat) {
// // //         nav(`/chat/${id}`); // redirect to 1:1 chat if not a group
// // //         return;
// // //       }
// // //       setChat(data);
// // //     } catch (err) {
// // //       console.error(err);
// // //     }
// // //   };

// // //   const fetchMessages = async () => {
// // //     try {
// // //       const { data } = await API.get(`/api/message/${id}`);
// // //       setMessages(data);
// // //     } catch (err) {
// // //       console.error(err);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchChat();
// // //     fetchMessages();
// // //   }, [id]);

// // //   if (loading) return <div>Loading group chat...</div>;
// // //   if (!chat) return <div>Group chat not found</div>;

// // //   return (
// // //     <div>
// // //       {/* Header */}
// // //       <div style={{ borderBottom: "1px solid gray", padding: "10px" }}>
// // //         <h3
// // //           style={{ cursor: "pointer", color: "blue" }}
// // //           onClick={() => nav(`/group/${id}`)}
// // //         >
// // //           {chat.name || "Unnamed Group"}
// // //         </h3>

// // //         <button onClick={() => alert("Audio Call")}>📞</button>
// // //         <button onClick={() => alert("Video Call")}>🎥</button>
// // //       </div>

// // //       {/* Chat messages */}
// // //       <ChatBox
// // //         chatId={id}
// // //         messages={messages}
// // //         setMessages={setMessages}
// // //         refreshMessages={fetchMessages}
// // //         chat={chat}
// // //       />
// // //     </div>
// // //   );
// // // }

// // import { useParams, useNavigate } from "react-router-dom";
// // import { useEffect, useState } from "react";
// // import { API } from "../api/axios";

// // export default function GroupPage() {
// //   const { id } = useParams();
// //   const nav = useNavigate();
// //   const [group, setGroup] = useState(null);

// //   useEffect(() => {
// //     API.get(`/api/chat/${id}`).then(res => setGroup(res.data));
// //   }, [id]);

// //   if (!group) return <div>Loading...</div>;

// //   return (
// //     <div style={{ padding: "20px" }}>
// //       <h2>{group.chatName || "Unnamed Group"}</h2>
// //       <h3>Members:</h3>
// //       <ul>
// //         {group.users.map(u => (
// //           <li
// //             key={u._id}
// //             style={{ cursor: "pointer", color: "blue" }}
// //             onClick={() => nav(`/user/${u._id}`)}
// //           >
// //             {u.name}
// //           </li>
// //         ))}
// //       </ul>
// //       <button onClick={() => nav(-1)}>Back</button>
// //     </div>
// //   );
// // }

// // /above crt

// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { API } from "../api/axios";

// export default function GroupPage() {
//   const { id } = useParams(); // group chat ID
//   const nav = useNavigate();

//   const [group, setGroup] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Fetch group info
//   const fetchGroup = async () => {
//     try {
//       const { data } = await API.get(`/api/chat/${id}`);
//       setGroup(data);
//       setLoading(false);
//     } catch (err) {
//       console.error(err);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchGroup();
//   }, [id]);

//   if (loading) return <p style={{ padding: "20px" }}>Loading group members...</p>;
//   if (!group) return <p style={{ padding: "20px" }}>Group not found</p>;

//   return (
//     <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
//       <h2>👥 {group.chatName || "Unnamed Group"}</h2>
//       <p>Group ID: {group._id}</p>

//       <h3>Members:</h3>
//       <ul style={{ listStyle: "none", padding: 0 }}>
//         {group.users.map((u) => (
//           <li
//             key={u._id}
//             style={{
//               borderBottom: "1px solid #eee",
//               padding: "10px 5px",
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//               cursor: "pointer",
//             }}
//             onClick={() => nav(`/user/${u._id}`)}
//           >
//             <span>{u.name || "Unnamed User"}</span>
//             {u.isOnline ? <span style={{ color: "green" }}>🟢 Online</span> : <span>⚫ Offline</span>}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { API } from "../api/axios";

export default function GroupPage() {
  const { id } = useParams();
  const nav = useNavigate();

  const [group, setGroup] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchGroup = async () => {
    try {
      const { data } = await API.get(`/api/chat/${id}`);
      setGroup(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGroup();
  }, [id]);

  if (loading)
    return (
      <p className="p-6 text-center text-gray-600">
        Loading group members...
      </p>
    );

  if (!group)
    return (
      <p className="p-6 text-center text-gray-600">
        Group not found
      </p>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-purple-100 to-pink-200 p-4">

      <div className="max-w-xl mx-auto">

        {/* GROUP HEADER */}
        <div className="flex flex-col items-center bg-white/40 backdrop-blur-xl 
                        rounded-3xl p-6 shadow-md mb-6">

          <img
            src={`https://ui-avatars.com/api/?name=${group.chatName || "Group"}`}
            alt="group"
            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow"
          />

          <h2 className="text-xl font-bold mt-3 text-purple-700">
            {group.chatName || "Unnamed Group"}
          </h2>

          <p className="text-xs text-gray-500 mt-1">
            {group.users.length} members
          </p>
        </div>

        {/* MEMBERS LIST */}
        <div className="bg-white/40 backdrop-blur-xl rounded-3xl shadow-md p-4">

          <h3 className="text-lg font-semibold text-gray-700 mb-3">
            Members
          </h3>

          <div className="flex flex-col gap-2">

            {group.users.map((u) => (
              <div
                key={u._id}
                onClick={() => nav(`/user/${u._id}`)}
                className="flex items-center justify-between p-3 rounded-xl 
                           hover:bg-white/60 transition cursor-pointer"
              >
                {/* LEFT */}
                <div className="flex items-center gap-3">
                  <img
                    src={`https://i.pravatar.cc/150?u=${u._id}`}
                    alt="user"
                    className="w-10 h-10 rounded-full object-cover"
                  />

                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      {u.name || "Unnamed User"}
                    </p>
                    <p className="text-xs text-gray-500">
                      {u.isOnline ? "Online" : "Offline"}
                    </p>
                  </div>
                </div>

                {/* STATUS DOT */}
                <div
                  className={`w-3 h-3 rounded-full ${
                    u.isOnline ? "bg-green-500" : "bg-gray-400"
                  }`}
                ></div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
}