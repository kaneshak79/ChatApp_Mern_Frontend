


// // // // // // // // // // // // // // // // // // // import { useParams } from "react-router-dom";
// // // // // // // // // // // // // // // // // // // import { useEffect, useState } from "react";
// // // // // // // // // // // // // // // // // // // import { API } from "../api/axios";
// // // // // // // // // // // // // // // // // // // import ChatBox from "../components/ChatBox";

// // // // // // // // // // // // // // // // // // // export default function ChatPage() {
// // // // // // // // // // // // // // // // // // //   const { id } = useParams(); // this is chat ID
// // // // // // // // // // // // // // // // // // //   const [messages, setMessages] = useState([]);
// // // // // // // // // // // // // // // // // // //   const [chat, setChat] = useState(null);
// // // // // // // // // // // // // // // // // // //   const [loading, setLoading] = useState(true);

// // // // // // // // // // // // // // // // // // //   const fetchChat = async () => {
// // // // // // // // // // // // // // // // // // //     try {
// // // // // // // // // // // // // // // // // // //       const { data } = await API.get(`/api/chat/${id}`);
// // // // // // // // // // // // // // // // // // //       // Only allow 1:1 chats here
// // // // // // // // // // // // // // // // // // //       if (data.isGroupChat) {
// // // // // // // // // // // // // // // // // // //         setChat(null); // redirect to group page if needed
// // // // // // // // // // // // // // // // // // //         return;
// // // // // // // // // // // // // // // // // // //       }
// // // // // // // // // // // // // // // // // // //       setChat(data);
// // // // // // // // // // // // // // // // // // //     } catch (err) {
// // // // // // // // // // // // // // // // // // //       console.error(err);
// // // // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // // // // // //   const fetchMessages = async () => {
// // // // // // // // // // // // // // // // // // //     try {
// // // // // // // // // // // // // // // // // // //       const { data } = await API.get(`/api/message/${id}`);
// // // // // // // // // // // // // // // // // // //       setMessages(data);
// // // // // // // // // // // // // // // // // // //     } catch (err) {
// // // // // // // // // // // // // // // // // // //       console.error(err);
// // // // // // // // // // // // // // // // // // //     } finally {
// // // // // // // // // // // // // // // // // // //       setLoading(false);
// // // // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // // // // // // //     fetchChat();
// // // // // // // // // // // // // // // // // // //     fetchMessages();
// // // // // // // // // // // // // // // // // // //   }, [id]);

// // // // // // // // // // // // // // // // // // //   if (loading) return <div>Loading chat...</div>;
// // // // // // // // // // // // // // // // // // //   if (!chat) return <div>Chat not found</div>;

// // // // // // // // // // // // // // // // // // //   const otherUser = chat.users.find((u) => !u.isSelf);

// // // // // // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // // // // // //     <div>
// // // // // // // // // // // // // // // // // // //       <div style={{ borderBottom: "1px solid gray", padding: "10px" }}>
// // // // // // // // // // // // // // // // // // //         <h3>{otherUser.name}</h3>
// // // // // // // // // // // // // // // // // // //         <button onClick={() => alert("Audio Call")}>📞</button>
// // // // // // // // // // // // // // // // // // //         <button onClick={() => alert("Video Call")}>🎥</button>
// // // // // // // // // // // // // // // // // // //       </div>

// // // // // // // // // // // // // // // // // // //       <ChatBox
// // // // // // // // // // // // // // // // // // //         chatId={id}
// // // // // // // // // // // // // // // // // // //         messages={messages}
// // // // // // // // // // // // // // // // // // //         setMessages={setMessages}
// // // // // // // // // // // // // // // // // // //         refreshMessages={fetchMessages}
// // // // // // // // // // // // // // // // // // //       />
// // // // // // // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // // // // // }


// // // // // // // // // // // // // // // // // // import { useParams, useNavigate } from "react-router-dom";
// // // // // // // // // // // // // // // // // // import { useEffect, useState, useContext } from "react";
// // // // // // // // // // // // // // // // // // import { API } from "../api/axios";
// // // // // // // // // // // // // // // // // // import ChatBox from "../components/ChatBox";
// // // // // // // // // // // // // // // // // // import { AuthContext } from "../context/AuthContext";

// // // // // // // // // // // // // // // // // // export default function ChatPage() {
// // // // // // // // // // // // // // // // // //   const { id } = useParams();
// // // // // // // // // // // // // // // // // //   const nav = useNavigate();
// // // // // // // // // // // // // // // // // //   const { user } = useContext(AuthContext);

// // // // // // // // // // // // // // // // // //   const [chat, setChat] = useState(null);
// // // // // // // // // // // // // // // // // //   const [messages, setMessages] = useState([]);

// // // // // // // // // // // // // // // // // //   // FETCH CHAT DETAILS
// // // // // // // // // // // // // // // // // //   const fetchChat = async () => {
// // // // // // // // // // // // // // // // // //     try {
// // // // // // // // // // // // // // // // // //       const { data } = await API.get(`/api/chat/${id}`);
// // // // // // // // // // // // // // // // // //       setChat(data);

// // // // // // // // // // // // // // // // // //       // fetch messages
// // // // // // // // // // // // // // // // // //       const msgRes = await API.get(`/api/message/${id}`);
// // // // // // // // // // // // // // // // // //       setMessages(msgRes.data);
// // // // // // // // // // // // // // // // // //     } catch (err) {
// // // // // // // // // // // // // // // // // //       console.error(err);
// // // // // // // // // // // // // // // // // //       setChat(null); // show "chat not found" if backend fails
// // // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // // // // // //     fetchChat();
// // // // // // // // // // // // // // // // // //   }, [id]);

// // // // // // // // // // // // // // // // // //   if (!chat) return <div>Chat not found</div>;

// // // // // // // // // // // // // // // // // //   // GET CHAT NAME
// // // // // // // // // // // // // // // // // //   const chatName = chat.isGroupChat
// // // // // // // // // // // // // // // // // //     ? chat.chatName || "Unnamed Group"
// // // // // // // // // // // // // // // // // //     : chat.users.find((u) => u._id !== user._id)?.name;

// // // // // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // // // // //     <div>
// // // // // // // // // // // // // // // // // //       {/* HEADER */}
// // // // // // // // // // // // // // // // // //       <div
// // // // // // // // // // // // // // // // // //         style={{
// // // // // // // // // // // // // // // // // //           borderBottom: "1px solid gray",
// // // // // // // // // // // // // // // // // //           padding: "10px",
// // // // // // // // // // // // // // // // // //           cursor: chat.isGroupChat ? "pointer" : "default",
// // // // // // // // // // // // // // // // // //         }}
// // // // // // // // // // // // // // // // // //         onClick={() => {
// // // // // // // // // // // // // // // // // //           if (chat.isGroupChat) nav(`/group/${id}`); // go to group members page
// // // // // // // // // // // // // // // // // //         }}
// // // // // // // // // // // // // // // // // //       >
// // // // // // // // // // // // // // // // // //         <h3>{chatName}</h3>
// // // // // // // // // // // // // // // // // //         {!chat.isGroupChat && (
// // // // // // // // // // // // // // // // // //           <>
// // // // // // // // // // // // // // // // // //             <button onClick={() => alert("Audio Call")}>📞</button>
// // // // // // // // // // // // // // // // // //             <button onClick={() => alert("Video Call")}>🎥</button>
// // // // // // // // // // // // // // // // // //           </>
// // // // // // // // // // // // // // // // // //         )}
// // // // // // // // // // // // // // // // // //       </div>

// // // // // // // // // // // // // // // // // //       {/* CHAT BOX */}
// // // // // // // // // // // // // // // // // //       <ChatBox
// // // // // // // // // // // // // // // // // //         chatId={id}
// // // // // // // // // // // // // // // // // //         messages={messages}
// // // // // // // // // // // // // // // // // //         setMessages={setMessages}
// // // // // // // // // // // // // // // // // //         refreshMessages={fetchChat}
// // // // // // // // // // // // // // // // // //       />
// // // // // // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // import { useParams, useNavigate } from "react-router-dom";
// // // // // // // // // // // // // // import { useEffect, useState } from "react";
// // // // // // // // // // // // // // import { API } from "../api/axios";
// // // // // // // // // // // // // // import ChatBox from "../components/ChatBox";

// // // // // // // // // // // // // // export default function ChatPage() {
// // // // // // // // // // // // // //   const { id } = useParams();
// // // // // // // // // // // // // //   const nav = useNavigate(); // 🔥 ADD THIS

// // // // // // // // // // // // // //   const [messages, setMessages] = useState([]);
// // // // // // // // // // // // // //   const [user, setUser] = useState(null);

// // // // // // // // // // // // // //   const fetchMessages = async () => {
// // // // // // // // // // // // // //     const { data } = await API.get(`/api/message/${id}`);
// // // // // // // // // // // // // //     setMessages(data);
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   const fetchUser = async () => {
// // // // // // // // // // // // // //     const { data } = await API.get(`/api/user/search?search=`);
// // // // // // // // // // // // // //     const found = data.find((u) => u._id === id);
// // // // // // // // // // // // // //     setUser(found);
// // // // // // // // // // // // // //   };
  

// // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // //     fetchMessages();
// // // // // // // // // // // // // //     fetchUser();
// // // // // // // // // // // // // //   }, [id]);

// // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // //     <div>

// // // // // // // // // // // // // //       {/* 🔥 HEADER */}
// // // // // // // // // // // // // //       <div style={{ borderBottom: "1px solid gray", padding: "10px" }}>
        
// // // // // // // // // // // // // //         {/* ✅ CLICKABLE NAME */}
// // // // // // // // // // // // // //         <h3
// // // // // // // // // // // // // //           style={{ cursor: "pointer", color: "blue" }}
// // // // // // // // // // // // // //           onClick={() => nav(`/user/${id}`)}
// // // // // // // // // // // // // //         >
// // // // // // // // // // // // // //           {user?.name || "User"}
// // // // // // // // // // // // // //         </h3>
       
    

// // // // // // // // // // // // // //         {/* CALL BUTTONS */}
// // // // // // // // // // // // // //         {/* <button onClick={() => alert("Audio Call")}>📞</button>
// // // // // // // // // // // // // //         <button onClick={() => alert("Video Call")}>🎥</button> */}
// // // // // // // // // // // // // //         <button onClick={() => nav(`/call/audio/${id}`)}>📞</button>
// // // // // // // // // // // // // // <button onClick={() => nav(`/call/video/${id}`)}>🎥</button>
// // // // // // // // // // // // // //       </div>

// // // // // // // // // // // // // //       {/* CHAT BOX */}
// // // // // // // // // // // // // //       <ChatBox
// // // // // // // // // // // // // //         chatId={id}
// // // // // // // // // // // // // //         messages={messages}
// // // // // // // // // // // // // //         setMessages={setMessages}
// // // // // // // // // // // // // //         refreshMessages={fetchMessages}
// // // // // // // // // // // // // //       />
// // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // // //crt code above


// // // // // // // // // // // // // import { useParams, useNavigate } from "react-router-dom";
// // // // // // // // // // // // // import { useEffect, useState } from "react";
// // // // // // // // // // // // // import { API } from "../api/axios";
// // // // // // // // // // // // // import ChatBox from "../components/ChatBox";

// // // // // // // // // // // // // export default function ChatPage() {
// // // // // // // // // // // // //   const { id } = useParams();
// // // // // // // // // // // // //   const nav = useNavigate(); // 🔥 ADD THIS

// // // // // // // // // // // // //   const [messages, setMessages] = useState([]);
// // // // // // // // // // // // //   const [user, setUser] = useState(null);

// // // // // // // // // // // // //   const fetchMessages = async () => {
// // // // // // // // // // // // //     const { data } = await API.get(`/api/message/${id}`);
// // // // // // // // // // // // //     setMessages(data);
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   const fetchUser = async () => {
// // // // // // // // // // // // //     const { data } = await API.get(`/api/user/search?search=`);
// // // // // // // // // // // // //     const found = data.find((u) => u._id === id);
// // // // // // // // // // // // //     setUser(found);
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // //     fetchMessages();
// // // // // // // // // // // // //     fetchUser();
// // // // // // // // // // // // //   }, [id]);

// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <div>

// // // // // // // // // // // // //       {/* 🔥 HEADER */}
// // // // // // // // // // // // //       <div style={{ borderBottom: "1px solid gray", padding: "10px" }}>
        
// // // // // // // // // // // // //         {/* ✅ CLICKABLE NAME */}
// // // // // // // // // // // // //         <h3
// // // // // // // // // // // // //           style={{ cursor: "pointer", color: "blue" }}
// // // // // // // // // // // // //           onClick={() => nav(`/user/${id}`)}
// // // // // // // // // // // // //         >
// // // // // // // // // // // // //           {user?.name || "User"}
// // // // // // // // // // // // //         </h3>

// // // // // // // // // // // // //         {/* CALL BUTTONS */}
// // // // // // // // // // // // //         {/* <button onClick={() => alert("Audio Call")}>📞</button>
// // // // // // // // // // // // //         <button onClick={() => alert("Video Call")}>🎥</button> */}
// // // // // // // // // // // // //         <button onClick={() => nav(`/call/audio/${id}`)}>📞</button>
// // // // // // // // // // // // // <button onClick={() => nav(`/call/video/${id}`)}>🎥</button>
// // // // // // // // // // // // //       </div>

// // // // // // // // // // // // //       {/* CHAT BOX */}
// // // // // // // // // // // // //       <ChatBox
// // // // // // // // // // // // //         chatId={id}
// // // // // // // // // // // // //         messages={messages}
// // // // // // // // // // // // //         setMessages={setMessages}
// // // // // // // // // // // // //         refreshMessages={fetchMessages}
// // // // // // // // // // // // //       />
// // // // // // // // // // // // //     </div>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // }

// // // // // // // // // // // // import { useParams } from "react-router-dom";
// // // // // // // // // // // // import { useEffect, useState } from "react";
// // // // // // // // // // // // import { API } from "../api/axios";
// // // // // // // // // // // // import ChatBox from "../components/ChatBox";

// // // // // // // // // // // // export default function ChatPage() {
// // // // // // // // // // // //   const { id } = useParams();

// // // // // // // // // // // //   const [messages, setMessages] = useState([]);
// // // // // // // // // // // //   const [user, setUser] = useState(null);

// // // // // // // // // // // //   const fetchMessages = async () => {
// // // // // // // // // // // //     const { data } = await API.get(`/api/message/${id}`);
// // // // // // // // // // // //     setMessages(data);
// // // // // // // // // // // //   };

// // // // // // // // // // // //   const fetchUser = async () => {
// // // // // // // // // // // //     const { data } = await API.get(`/api/user/search?search=`); // simple reuse
// // // // // // // // // // // //     const found = data.find((u) => u._id === id);
// // // // // // // // // // // //     setUser(found);
// // // // // // // // // // // //   };

// // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // //     fetchMessages();
// // // // // // // // // // // //     fetchUser();
// // // // // // // // // // // //   }, [id]);

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <div>
      
// // // // // // // // // // // //       {/* 🔥 HEADER */}
// // // // // // // // // // // //       <div style={{ borderBottom: "1px solid gray", padding: "10px" }}>
// // // // // // // // // // // //         <h3>{user?.name || "User"}</h3>

// // // // // // // // // // // //         <button onClick={() => alert("Audio Call")}>📞</button>
// // // // // // // // // // // //         <button onClick={() => alert("Video Call")}>🎥</button>
// // // // // // // // // // // //       </div>

// // // // // // // // // // // //       <ChatBox
// // // // // // // // // // // //         chatId={id}
// // // // // // // // // // // //         messages={messages}
// // // // // // // // // // // //         setMessages={setMessages}
// // // // // // // // // // // //         refreshMessages={fetchMessages}
// // // // // // // // // // // //       />
// // // // // // // // // // // //     </div>
// // // // // // // // // // // //   );
// // // // // // // // // // // // }

// // // // // // // // // // // import { useParams, useNavigate } from "react-router-dom";
// // // // // // // // // // // import { useEffect, useState } from "react";
// // // // // // // // // // // import { API } from "../api/axios";
// // // // // // // // // // // import ChatBox from "../components/ChatBox";

// // // // // // // // // // // export default function ChatPage() {
// // // // // // // // // // //   const { id } = useParams();
// // // // // // // // // // //   const nav = useNavigate(); // 🔥 ADD THIS

// // // // // // // // // // //   const [messages, setMessages] = useState([]);
// // // // // // // // // // //   const [user, setUser] = useState(null);

// // // // // // // // // // //   const fetchMessages = async () => {
// // // // // // // // // // //     const { data } = await API.get(`/api/message/${id}`);
// // // // // // // // // // //     setMessages(data);
// // // // // // // // // // //   };

// // // // // // // // // // //   const fetchUser = async () => {
// // // // // // // // // // //     const { data } = await API.get(`/api/user/search?search=`);
// // // // // // // // // // //     const found = data.find((u) => u._id === id);
// // // // // // // // // // //     setUser(found);
// // // // // // // // // // //   };

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     fetchMessages();
// // // // // // // // // // //     fetchUser();
// // // // // // // // // // //   }, [id]);

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div>

// // // // // // // // // // //       {/* 🔥 HEADER */}
// // // // // // // // // // //       <div style={{ borderBottom: "1px solid gray", padding: "10px" }}>
        
// // // // // // // // // // //         {/* ✅ CLICKABLE NAME */}
// // // // // // // // // // //         <h3
// // // // // // // // // // //           style={{ cursor: "pointer", color: "blue" }}
// // // // // // // // // // //           onClick={() => nav(`/user/${id}`)}
// // // // // // // // // // //         >
// // // // // // // // // // //           {user?.name || "User"}
// // // // // // // // // // //         </h3>

// // // // // // // // // // //         {/* CALL BUTTONS */}
// // // // // // // // // // //         {/* <button onClick={() => alert("Audio Call")}>📞</button>
// // // // // // // // // // //         <button onClick={() => alert("Video Call")}>🎥</button> */}
// // // // // // // // // // //         <button onClick={() => nav(`/call/audio/${id}`)}>📞</button>
// // // // // // // // // // // <button onClick={() => nav(`/call/video/${id}`)}>🎥</button>
// // // // // // // // // // //       </div>

// // // // // // // // // // //       {/* CHAT BOX */}
// // // // // // // // // // //       <ChatBox
// // // // // // // // // // //         chatId={id}
// // // // // // // // // // //         messages={messages}
// // // // // // // // // // //         setMessages={setMessages}
// // // // // // // // // // //         refreshMessages={fetchMessages}
// // // // // // // // // // //       />
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // }

// // // // // // // // // // import { useParams, useNavigate } from "react-router-dom";
// // // // // // // // // // import { useEffect, useState, useContext } from "react";
// // // // // // // // // // import { API } from "../api/axios";
// // // // // // // // // // import ChatBox from "../components/ChatBox";
// // // // // // // // // // import { AuthContext } from "../context/AuthContext";

// // // // // // // // // // export default function ChatPage() {
// // // // // // // // // //   const { id } = useParams();
// // // // // // // // // //   const { user: currentUser } = useContext(AuthContext);
// // // // // // // // // //   const nav = useNavigate();

// // // // // // // // // //   const [chat, setChat] = useState(null);
// // // // // // // // // //   const [messages, setMessages] = useState([]);
// // // // // // // // // //   const [showMembers, setShowMembers] = useState(false);

// // // // // // // // // //   // FETCH CHAT DETAILS
// // // // // // // // // //   const fetchChat = async () => {
// // // // // // // // // //     try {
// // // // // // // // // //       const { data } = await API.get(`/api/chat/${id}`); // backend: GET chat by ID
// // // // // // // // // //       setChat(data);
// // // // // // // // // //     } catch (err) {
// // // // // // // // // //       console.error(err);
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   // FETCH MESSAGES
// // // // // // // // // //   const fetchMessages = async () => {
// // // // // // // // // //     try {
// // // // // // // // // //       const { data } = await API.get(`/api/message/${id}`);
// // // // // // // // // //       setMessages(data);
// // // // // // // // // //     } catch (err) {
// // // // // // // // // //       console.error(err);
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     fetchChat();
// // // // // // // // // //     fetchMessages();
// // // // // // // // // //   }, [id]);

// // // // // // // // // //   if (!chat) return <div>Loading chat...</div>;

// // // // // // // // // //   // Determine other participant for 1:1 chat
// // // // // // // // // //   const otherUser =
// // // // // // // // // //     !chat.isGroupChat &&
// // // // // // // // // //     chat.users.find((u) => u._id !== currentUser._id);

// // // // // // // // // //   return (
// // // // // // // // // //     <div>
// // // // // // // // // //       {/* HEADER */}
// // // // // // // // // //       <div style={{ borderBottom: "1px solid gray", padding: "10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
// // // // // // // // // //         {chat.isGroupChat ? (
// // // // // // // // // //           <>
// // // // // // // // // //             <h3
// // // // // // // // // //               style={{ cursor: "pointer", color: "blue" }}
// // // // // // // // // //               onClick={() => setShowMembers(!showMembers)}
// // // // // // // // // //             >
// // // // // // // // // //               {chat.name || "Unnamed Group"} 👥
// // // // // // // // // //             </h3>
// // // // // // // // // //           </>
// // // // // // // // // //         ) : (
// // // // // // // // // //           <h3
// // // // // // // // // //             style={{ cursor: "pointer", color: "blue" }}
// // // // // // // // // //             onClick={() => nav(`/user/${otherUser._id}`)}
// // // // // // // // // //           >
// // // // // // // // // //             {otherUser?.name || "User"} {!chat.isGroupChat && (otherUser?.isOnline ? "🟢" : "⚫")}
// // // // // // // // // //           </h3>
// // // // // // // // // //         )}

// // // // // // // // // //         {/* Audio/Video Buttons */}
// // // // // // // // // //         <div>
// // // // // // // // // //           <button onClick={() => nav(`/call/audio/${chat._id}`)}>📞</button>
// // // // // // // // // //           <button onClick={() => nav(`/call/video/${chat._id}`)}>🎥</button>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* GROUP MEMBERS PANEL */}
// // // // // // // // // //       {showMembers && chat.isGroupChat && (
// // // // // // // // // //         <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
// // // // // // // // // //           <h4>Group Members</h4>
// // // // // // // // // //           {chat.users.map((member) => (
// // // // // // // // // //             <div
// // // // // // // // // //               key={member._id}
// // // // // // // // // //               style={{ cursor: "pointer", padding: "5px", borderBottom: "1px solid #eee" }}
// // // // // // // // // //               onClick={() => nav(`/user/${member._id}`)}
// // // // // // // // // //             >
// // // // // // // // // //               {member.name} {member._id === currentUser._id && "(You)"}
// // // // // // // // // //             </div>
// // // // // // // // // //           ))}
// // // // // // // // // //         </div>
// // // // // // // // // //       )}

// // // // // // // // // //       {/* CHAT BOX */}
// // // // // // // // // //       <ChatBox
// // // // // // // // // //         chatId={chat._id}
// // // // // // // // // //         messages={messages}
// // // // // // // // // //         setMessages={setMessages}
// // // // // // // // // //         refreshMessages={fetchMessages}
// // // // // // // // // //       />
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // }


// // // // // // // // // import { useParams } from "react-router-dom";
// // // // // // // // // import { useEffect, useState } from "react";
// // // // // // // // // import { API } from "../api/axios";

// // // // // // // // // export default function ChatPage() {
// // // // // // // // //   const { id } = useParams();
// // // // // // // // //   const [messages, setMessages] = useState([]);
// // // // // // // // //   const [text, setText] = useState("");

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     API.get(`/api/message/${id}`).then((res) => {
// // // // // // // // //       setMessages(res.data);
// // // // // // // // //     });
// // // // // // // // //   }, [id]);

// // // // // // // // //   const sendMessage = async () => {
// // // // // // // // //     const { data } = await API.post("/api/message", {
// // // // // // // // //       chatId: id,
// // // // // // // // //       content: text,
// // // // // // // // //       type: "text",
// // // // // // // // //     });
// // // // // // // // //     setMessages([...messages, data]);
// // // // // // // // //     setText("");
// // // // // // // // //   };

// // // // // // // // //   const sendFile = async (file) => {
// // // // // // // // //     const formData = new FormData();
// // // // // // // // //     formData.append("file", file);

// // // // // // // // //     const upload = await API.post("/api/upload", formData);
    
// // // // // // // // //     const { data } = await API.post("/api/message", {
// // // // // // // // //       chatId: id,
// // // // // // // // //       type: "image",
// // // // // // // // //       fileUrl: upload.data.url,
// // // // // // // // //     });

// // // // // // // // //     setMessages([...messages, data]);
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div>
// // // // // // // // //       <h2>Chat</h2>

// // // // // // // // //       {messages.map((m) => (
// // // // // // // // //         <div key={m._id}>
// // // // // // // // //           {m.content || <img src={m.fileUrl} width="100" />}
// // // // // // // // //         </div>
// // // // // // // // //       ))}

// // // // // // // // //       <input value={text} onChange={(e) => setText(e.target.value)} />
// // // // // // // // //       <button onClick={sendMessage}>Send</button>

// // // // // // // // //       <input type="file" onChange={(e) => sendFile(e.target.files[0])} />
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // }

// // // // // // // // import { useParams } from "react-router-dom";
// // // // // // // // import { useEffect, useState } from "react";
// // // // // // // // import { API } from "../api/axios";
// // // // // // // // import ChatBox from "../components/ChatBox";

// // // // // // // // export default function ChatPage() {
// // // // // // // //   const { id } = useParams();
// // // // // // // //   const [messages, setMessages] = useState([]);

// // // // // // // //   useEffect(() => {
// // // // // // // //     API.get(`/api/message/${id}`).then((res) => {
// // // // // // // //       setMessages(res.data);
// // // // // // // //     });
// // // // // // // //   }, [id]);

// // // // // // // //   return (
// // // // // // // //     <div>
// // // // // // // //       <h2>Chat</h2>
// // // // // // // //       <ChatBox chatId={id} messages={messages} setMessages={setMessages} />
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }


// // // // // // // import { useParams } from "react-router-dom";
// // // // // // // import { useEffect, useState } from "react";
// // // // // // // import { API } from "../api/axios";
// // // // // // // import ChatBox from "../components/ChatBox";

// // // // // // // export default function ChatPage() {
// // // // // // //   const { id } = useParams();
// // // // // // //   const [messages, setMessages] = useState([]);

// // // // // // //   const fetchMessages = async () => {
// // // // // // //     const { data } = await API.get(`/api/message/${id}`);
// // // // // // //     setMessages(data);
// // // // // // //   };

// // // // // // //   useEffect(() => {
// // // // // // //     fetchMessages();
// // // // // // //   }, [id]);

// // // // // // //   return (
// // // // // // //     <div>
// // // // // // //       <h2>Chat</h2>
// // // // // // //       <ChatBox
// // // // // // //         chatId={id}
// // // // // // //         messages={messages}
// // // // // // //         setMessages={setMessages}
// // // // // // //         refreshMessages={fetchMessages}  // 🔥 IMPORTANT
// // // // // // //       />
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // import { useParams } from "react-router-dom";
// // // // // // import { useEffect, useState } from "react";
// // // // // // import { API } from "../api/axios";
// // // // // // import ChatBox from "../components/ChatBox";

// // // // // // export default function ChatPage() {
// // // // // //   const { id } = useParams();

// // // // // //   const [messages, setMessages] = useState([]);
// // // // // //   const [user, setUser] = useState(null);

// // // // // //   const fetchMessages = async () => {
// // // // // //     const { data } = await API.get(`/api/message/${id}`);
// // // // // //     setMessages(data);
// // // // // //   };

// // // // // //   const fetchUser = async () => {
// // // // // //     const { data } = await API.get(`/api/user/search?search=`); // simple reuse
// // // // // //     const found = data.find((u) => u._id === id);
// // // // // //     setUser(found);
// // // // // //   };

// // // // // //   useEffect(() => {
// // // // // //     fetchMessages();
// // // // // //     fetchUser();
// // // // // //   }, [id]);

// // // // // //   return (
// // // // // //     <div>
      
// // // // // //       {/* 🔥 HEADER */}
// // // // // //       <div style={{ borderBottom: "1px solid gray", padding: "10px" }}>
// // // // // //         <h3>{user?.name || "User"}</h3>

// // // // // //         <button onClick={() => alert("Audio Call")}>📞</button>
// // // // // //         <button onClick={() => alert("Video Call")}>🎥</button>
// // // // // //       </div>

// // // // // //       <ChatBox
// // // // // //         chatId={id}
// // // // // //         messages={messages}
// // // // // //         setMessages={setMessages}
// // // // // //         refreshMessages={fetchMessages}
// // // // // //       />
// // // // // //     </div>
// // // // // //   );
// // // // // // }


// // // // // import { useParams, useNavigate } from "react-router-dom";
// // // // // import { useEffect, useState } from "react";
// // // // // import { API } from "../api/axios";
// // // // // import ChatBox from "../components/ChatBox";

// // // // // export default function ChatPage() {
// // // // //   const { id } = useParams();
// // // // //   const nav = useNavigate(); // 🔥 ADD THIS

// // // // //   const [messages, setMessages] = useState([]);
// // // // //   const [user, setUser] = useState(null);

// // // // //   const fetchMessages = async () => {
// // // // //     const { data } = await API.get(`/api/message/${id}`);
// // // // //     setMessages(data);
// // // // //   };

// // // // //   const fetchUser = async () => {
// // // // //     const { data } = await API.get(`/api/user/search?search=`);
// // // // //     const found = data.find((u) => u._id === id);
// // // // //     setUser(found);
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     fetchMessages();
// // // // //     fetchUser();
// // // // //   }, [id]);

// // // // //   return (
// // // // //     <div>

// // // // //       {/* 🔥 HEADER */}
// // // // //       <div style={{ borderBottom: "1px solid gray", padding: "10px" }}>
        
// // // // //         {/* ✅ CLICKABLE NAME */}
// // // // //         <h3
// // // // //           style={{ cursor: "pointer", color: "blue" }}
// // // // //           onClick={() => nav(`/user/${id}`)}
// // // // //         >
// // // // //           {user?.name || "User"}
// // // // //         </h3>

// // // // //         {/* CALL BUTTONS */}
// // // // //         {/* <button onClick={() => alert("Audio Call")}>📞</button>
// // // // //         <button onClick={() => alert("Video Call")}>🎥</button> */}
// // // // // <button onClick={() => nav(`/call/audio/${id}`)}>📞</button>
// // // // //   <button onClick={() => nav(`/call/video/${id}`)}>🎥</button>

// // // // //       </div>

// // // // //       {/* CHAT BOX */}
// // // // //       <ChatBox
// // // // //         chatId={id}
// // // // //         messages={messages}
// // // // //         setMessages={setMessages}
// // // // //         refreshMessages={fetchMessages}
// // // // //       />
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // //final crt code


// // // // import { useParams, useNavigate } from "react-router-dom";
// // // // import { useEffect, useState } from "react";
// // // // import { API } from "../api/axios";
// // // // import ChatBox from "../components/ChatBox";

// // // // export default function ChatPage() {
// // // //   const { id } = useParams();
// // // //   const nav = useNavigate();

// // // //   const [messages, setMessages] = useState([]);
// // // //   const [user, setUser] = useState(null);

// // // //   const fetchMessages = async () => {
// // // //     const { data } = await API.get(`/api/message/${id}`);
// // // //     setMessages(data);
// // // //   };

// // // //   const fetchUser = async () => {
// // // //     const { data } = await API.get(`/api/user/search?search=`);
// // // //     const found = data.find((u) => u._id === id);
// // // //     setUser(found);
// // // //   };

// // // //   useEffect(() => {
// // // //     fetchMessages();
// // // //     fetchUser();
// // // //   }, [id]);

// // // //   return (
// // // //     <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-100 to-blue-50">
      
// // // //       {/* HEADER */}
// // // //       <div className="flex items-center justify-between p-4 bg-white/80 backdrop-blur-md shadow sticky top-0 z-10 rounded-b-xl">
// // // //         <div className="flex items-center gap-3">
// // // //           <img
// // // //             src={user?.avatar || `https://i.pravatar.cc/150?u=${id}`}
// // // //             alt="avatar"
// // // //             className="w-12 h-12 rounded-full object-cover"
// // // //           />
// // // //           <h3
// // // //             className="text-lg font-semibold cursor-pointer hover:underline"
// // // //             onClick={() => nav(`/user/${id}`)}
// // // //           >
// // // //             {user?.name || "User"}
// // // //           </h3>
// // // //         </div>

// // // //         {/* ACTION BUTTONS */}
// // // //         <div className="flex gap-2">
// // // //           <button
// // // //             onClick={() => nav(`/call/audio/${id}`)}
// // // //             className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition"
// // // //           >
// // // //             📞
// // // //           </button>
// // // //           <button
// // // //             onClick={() => nav(`/call/video/${id}`)}
// // // //             className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
// // // //           >
// // // //             🎥
// // // //           </button>
// // // //           <button
// // // //             onClick={() => alert("Edit chat options")}
// // // //             className="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition"
// // // //           >
// // // //             ✏️
// // // //           </button>
// // // //           <button
// // // //             onClick={() => alert("Delete chat")}
// // // //             className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
// // // //           >
// // // //             🗑️
// // // //           </button>
// // // //         </div>
// // // //       </div>

// // // //       {/* CHAT BOX CENTER */}
// // // //       <div className="flex-1 flex justify-center items-start p-4 overflow-y-auto">
// // // //         <div className="w-full max-w-2xl bg-white/80 backdrop-blur-md rounded-2xl shadow p-4 flex flex-col gap-4">
// // // //           {/* Pass everything as is */}
// // // //           <ChatBox
// // // //             chatId={id}
// // // //             messages={messages}
// // // //             setMessages={setMessages}
// // // //             refreshMessages={fetchMessages}
// // // //           />
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // import { useEffect, useState } from "react";
// // // // import { useParams } from "react-router-dom";
// // // // import { API } from "../api/axios";
// // // // import ChatBox from "../components/ChatBox";

// // // // export default function ChatPage() {
// // // //   const { id } = useParams();

// // // //   const [messages, setMessages] = useState([]);
// // // //   const [user, setUser] = useState(null);

// // // //   useEffect(() => {
// // // //     fetchMessages();
// // // //     fetchUser();
// // // //   }, [id]);

// // // //   const fetchMessages = async () => {
// // // //     const { data } = await API.get(`/api/message/${id}`);
// // // //     setMessages(data);
// // // //   };

// // // //   const fetchUser = async () => {
// // // //     const { data } = await API.get("/api/user/me");
// // // //     setUser(data);
// // // //   };

// // // //   return (
// // // //     <div className="flex h-screen w-screen p-4 gap-4 
// // // //                     bg-gradient-to-br from-blue-200 via-purple-200 to-blue-100">

// // // //       {/* LEFT: CHAT */}
// // // //       <div className="flex-[3] h-full">
// // // //         <ChatBox
// // // //           chatId={id}
// // // //           messages={messages}
// // // //           setMessages={setMessages}
// // // //           userId={user?._id}
// // // //         />
// // // //       </div>

// // // //       {/* RIGHT: USER PANEL */}
// // // //       <div className="flex-[1] h-full 
// // // //                       bg-white/40 backdrop-blur-xl rounded-3xl shadow-xl p-5">

// // // //         <h2 className="text-xl font-semibold mb-4">User Info</h2>

// // // //         <div className="flex flex-col gap-4">

// // // //           <div className="p-4 bg-white/60 rounded-xl shadow">
// // // //             👤 Name: {user?.name || "User"}
// // // //           </div>

// // // //           <div className="p-4 bg-white/60 rounded-xl shadow">
// // // //             📧 Email: {user?.email || "example@mail.com"}
// // // //           </div>

// // // //           <div className="p-4 bg-white/60 rounded-xl shadow">
// // // //             🟢 Status: Online
// // // //           </div>

// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // import { useParams, useNavigate } from "react-router-dom";
// // import { useEffect, useState } from "react";
// // import { API } from "../api/axios";
// // import ChatBox from "../components/ChatBox";
// // import { FiPhone, FiVideo } from "react-icons/fi";
// // import { useContext } from "react";
// // import { AuthContext } from "../context/AuthContext";
// // export default function ChatPage() {
// //   const { user: loggedUser } = useContext(AuthContext);
// //   // const { user } = useContext(AuthContext);
// //   const [chatId, setChatId] = useState(null);
// //   const { id } = useParams();
// //   const nav = useNavigate();

// //   const [messages, setMessages] = useState([]);
// //   const [user, setUser] = useState(null);

// //   // const fetchMessages = async () => {
// //   //   const { data } = await API.get(`/api/message/${id}`);
// //   //   // setMessages(data);
// //   //   setMessages(data.reverse());

// //   // };
// //   const fetchChat = async () => {
// //   try {
// //     const { data } = await API.post("/api/chat", {
// //       userId: id, // other user
// //     });

// //     setChatId(data._id);

// //     const res = await API.get(`/api/message/${data._id}`);
// //     setMessages(res.data.reverse());
// //   } catch (err) {
// //     console.error(err);
// //   }
// // };
// // // const fetchMessages = async () => {
// // //   const { data } = await API.get(`/api/message/${id}`);
// // //   setMessages(data.reverse()); // ✅ important
// // // };

// //   const fetchUser = async () => {
// //     const { data } = await API.get(`/api/user/search?search=`);
// //     const found = data.find((u) => u._id === id);
// //     setUser(found);
// //   };

// //   useEffect(() => {
// //     // fetchMessages();
// //     fetchChat(); 
// //     fetchUser();
// //   }, [id]);

// //   return (
// //     <div className="h-screen w-screen flex flex-col 
// //                     bg-gradient-to-br from-blue-200 via-purple-200 to-blue-100">

// //       {/* HEADER */}
// //       <div className="flex items-center justify-between px-6 py-3 
// //                       bg-white/70 backdrop-blur-md shadow sticky top-0 z-10">

// //         <div className="flex items-center gap-3">
// //           <img
// //             src={user?.avatar || `https://i.pravatar.cc/150?u=${id}`}
// //             alt="avatar"
// //             className="w-10 h-10 rounded-full object-cover"
// //           />
// //           <h3
// //             className="text-lg font-semibold cursor-pointer hover:underline"
// //             onClick={() => nav(`/user/${id}`)}
// //           >
// //             {user?.name || "User"}
// //           </h3>
// //         </div>

// //         {/* ACTION BUTTONS */}
// //         <div className="flex gap-2">
// //           <div className="flex items-center gap-2">

// //   {/* AUDIO CALL */}
// //   <button
// //     onClick={() => nav(`/call/audio/${id}`)}
// //     className="p-2.5 rounded-full bg-green-500/90 text-white 
// //                hover:bg-green-600 transition 
// //                shadow-md hover:shadow-lg active:scale-95"
// //   >
// //     <FiPhone size={18} />
// //   </button>

// //   {/* VIDEO CALL */}
// //   <button
// //     onClick={() => nav(`/call/video/${id}`)}
// //     className="p-2.5 rounded-full bg-blue-500/90 text-white 
// //                hover:bg-blue-600 transition 
// //                shadow-md hover:shadow-lg active:scale-95"
// //   >
// //     <FiVideo size={18} />
// //   </button>

// // </div>
// //           {/* <button
// //             onClick={() => nav(`/call/audio/${id}`)}
// //             className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
// //           >
// //             📞
// //           </button>
// //           <button
// //             onClick={() => nav(`/call/video/${id}`)}
// //             className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
// //           >
// //             🎥
// //           </button> */}
// //           {/* <button
// //             onClick={() => alert("Edit chat options")}
// //             className="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500"
// //           >
// //             ✏️
// //           </button>
// //           <button
// //             onClick={() => alert("Delete chat")}
// //             className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
// //           >
// //             🗑️
// //           </button> */}
// //         </div>
// //       </div>

// //       {/* FULL WIDTH CHAT */}
// //       <div className="flex-1 overflow-hidden p-4">
// //         {/* <ChatBox
// //           chatId={id}
// //           messages={messages}
// //           setMessages={setMessages}
// //           refreshMessages={fetchMessages}
// //           userId={loggedUser?._id}
// //           // userId={user?._id}
// //         /> */}
// //         <ChatBox
// //   chatId={chatId}   // ✅ FIX
// //   messages={messages}
// //   setMessages={setMessages}
// //   refreshMessages={fetchChat}
// //   userId={loggedUser?._id}
// // />
// //       </div>
// //     </div>
// //   );
// // }


// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState, useContext } from "react";
// import { API } from "../api/axios";
// import ChatBox from "../components/ChatBox";
// import { FiPhone, FiVideo } from "react-icons/fi";
// import { AuthContext } from "../context/AuthContext";

// export default function ChatPage() {
//   const { id } = useParams(); // other user id
//   const nav = useNavigate();
//   const { user: loggedUser } = useContext(AuthContext);

//   const [messages, setMessages] = useState([]);
//   const [chatId, setChatId] = useState(null);
//   const [otherUser, setOtherUser] = useState(null);

//   // ✅ CREATE / GET CHAT + FETCH MESSAGES
//   const fetchChat = async () => {
//     try {
//       const { data } = await API.post("/api/chat", {
//         userId: id,
//       });

//       setChatId(data._id);

//       const res = await API.get(`/api/message/${data._id}`);

//       // ✅ IMPORTANT: SORT OLDEST → NEWEST
//       const sorted = res.data.sort(
//         (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
//       );

//       setMessages(sorted);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // ✅ GET USER DETAILS
//   const fetchUser = async () => {
//     const { data } = await API.get(`/api/user/search?search=`);
//     const found = data.find((u) => u._id === id);
//     setOtherUser(found);
//   };

//   useEffect(() => {
//     fetchChat();
//     fetchUser();
//   }, [id]);

//   return (
//     <div className="h-screen w-screen flex flex-col bg-gradient-to-br from-blue-200 via-purple-200 to-blue-100">

//       {/* HEADER */}
//       <div className="flex items-center justify-between px-6 py-3 bg-white/70 backdrop-blur-md shadow">

//         <div className="flex items-center gap-3">
//           <img
//             src={otherUser?.avatar || `https://i.pravatar.cc/150?u=${id}`}
//             className="w-10 h-10 rounded-full"
//           />
//           <h3 className="text-lg font-semibold">
//             {otherUser?.name || "User"}
//           </h3>
//         </div>

//         <div className="flex gap-2">
//           <button
//             onClick={() => nav(`/call/audio/${id}`)}
//             className="p-2 rounded-full bg-green-500 text-white"
//           >
//             <FiPhone />
//           </button>

//           <button
//             onClick={() => nav(`/call/video/${id}`)}
//             className="p-2 rounded-full bg-blue-500 text-white"
//           >
//             <FiVideo />
//           </button>
//         </div>
//       </div>

//       {/* CHAT */}
//       <div className="flex-1 p-4 overflow-hidden">
//         <ChatBox
//           chatId={chatId}
//           messages={messages}
//           setMessages={setMessages}
//           refreshMessages={fetchChat}
//           userId={loggedUser?._id}
//         />
//       </div>
//     </div>
//   );
// }


import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { API } from "../api/axios";
import ChatBox from "../components/ChatBox";
import { FiPhone, FiVideo } from "react-icons/fi";
import { AuthContext } from "../context/AuthContext";

export default function ChatPage() {
  const { id } = useParams(); // other user's _id
  const nav = useNavigate();
  const { user: loggedUser } = useContext(AuthContext);

  const [messages, setMessages] = useState([]);
  const [chatId, setChatId] = useState(null);
  const [otherUser, setOtherUser] = useState(null);

  // ✅ CREATE OR GET CHAT
  const fetchChat = async () => {
    try {
      const { data } = await API.post("/api/chat", { userId: id });
      setChatId(data._id);

      const res = await API.get(`/api/message/${data._id}`);
      // sort oldest → newest
      const sorted = res.data.sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );
      setMessages(sorted);
    } catch (err) {
      console.error(err);
    }
  };

  // ✅ GET OTHER USER DETAILS
  const fetchUser = async () => {
    try {
      const { data } = await API.get(`/api/user/search?search=`);
      const found = data.find((u) => u._id === id);
      setOtherUser(found);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchChat();
    fetchUser();
  }, [id]);

  return (
    <div className="h-screen w-screen flex flex-col bg-gradient-to-br from-blue-200 via-purple-200 to-blue-100">
      
      {/* HEADER */}
      <div className="flex items-center justify-between px-6 py-3 bg-white/70 backdrop-blur-md shadow">
        <div className="flex items-center gap-3">
          <img
            src={otherUser?.avatar || `https://i.pravatar.cc/150?u=${id}`}
            className="w-10 h-10 rounded-full"
          />
          <h3 className="text-lg font-semibold">{otherUser?.name || "User"}</h3>
        </div>

        <div className="flex gap-2">
          <button onClick={() => nav(`/call/audio/${id}`)} className="p-2 rounded-full bg-green-500 text-white">
            <FiPhone />
          </button>
          <button onClick={() => nav(`/call/video/${id}`)} className="p-2 rounded-full bg-blue-500 text-white">
            <FiVideo />
          </button>
        </div>
      </div>

      {/* CHAT BOX */}
      <div className="flex-1 p-4 overflow-hidden">
        <ChatBox
          chatId={chatId}
          messages={messages}
          setMessages={setMessages}
          refreshMessages={fetchChat}
          userId={loggedUser?._id}
        />
      </div>
    </div>
  );
}