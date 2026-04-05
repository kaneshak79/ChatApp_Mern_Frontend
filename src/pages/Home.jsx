// // // // // // // // // // // // // // // import { useEffect, useState } from "react";
// // // // // // // // // // // // // // // import { API } from "../api/axios";
// // // // // // // // // // // // // // // import { useNavigate } from "react-router-dom";
// // // // // // // // // // // // // // // import Navbar from "../components/Navbar";

// // // // // // // // // // // // // // // export default function Home() {
// // // // // // // // // // // // // // //   const [users, setUsers] = useState([]);
// // // // // // // // // // // // // // //   const [search, setSearch] = useState("");
// // // // // // // // // // // // // // //   const nav = useNavigate();

// // // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // // //     fetchUsers();
// // // // // // // // // // // // // // //   }, [search]);

// // // // // // // // // // // // // // //   const fetchUsers = async () => {
// // // // // // // // // // // // // // //     const { data } = await API.get(`/api/user/search?search=${search}`);
// // // // // // // // // // // // // // //     setUsers(data);
// // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // //     <div>

// // // // // // // // // // // // // // //       {/* 🔥 NAVBAR */}
// // // // // // // // // // // // // // //       <Navbar />

// // // // // // // // // // // // // // //       <div style={{ padding: "10px" }}>
// // // // // // // // // // // // // // //         <h2>Users</h2>

// // // // // // // // // // // // // // //         {/* 🔍 SEARCH BAR */}
// // // // // // // // // // // // // // //         <input
// // // // // // // // // // // // // // //           style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
// // // // // // // // // // // // // // //           placeholder="Search user..."
// // // // // // // // // // // // // // //           value={search}
// // // // // // // // // // // // // // //           onChange={(e) => setSearch(e.target.value)}
// // // // // // // // // // // // // // //         />

// // // // // // // // // // // // // // //         {/* 👥 USER LIST */}
// // // // // // // // // // // // // // //         {users.map((u) => (
// // // // // // // // // // // // // // //           <div
// // // // // // // // // // // // // // //             key={u._id}
// // // // // // // // // // // // // // //             onClick={() => nav(`/chat/${u._id}`)}
// // // // // // // // // // // // // // //             style={{
// // // // // // // // // // // // // // //               padding: "10px",
// // // // // // // // // // // // // // //               borderBottom: "1px solid #ccc",
// // // // // // // // // // // // // // //               cursor: "pointer"
// // // // // // // // // // // // // // //             }}
// // // // // // // // // // // // // // //           >
// // // // // // // // // // // // // // //             {u.name} {u.isOnline ? "🟢" : "⚫"}
// // // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // // //         ))}
// // // // // // // // // // // // // // //       </div>

// // // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // import { useEffect, useState, useContext } from "react";
// // // // // // // // // // // // // // import { API } from "../api/axios";
// // // // // // // // // // // // // // import { AuthContext } from "../context/AuthContext";
// // // // // // // // // // // // // // import { useNavigate } from "react-router-dom";
// // // // // // // // // // // // // // import Navbar from "../components/Navbar";

// // // // // // // // // // // // // // export default function Home() {
// // // // // // // // // // // // // //   const { user } = useContext(AuthContext);
// // // // // // // // // // // // // //   const nav = useNavigate();

// // // // // // // // // // // // // //   const [users, setUsers] = useState([]);
// // // // // // // // // // // // // //   const [search, setSearch] = useState("");
// // // // // // // // // // // // // //   const [filteredUsers, setFilteredUsers] = useState([]);
// // // // // // // // // // // // // //   const [groupName, setGroupName] = useState("");
// // // // // // // // // // // // // //   const [groupUsers, setGroupUsers] = useState([]);
// // // // // // // // // // // // // //   const [showGroupModal, setShowGroupModal] = useState(false);
// // // // // // // // // // // // // //   const [pinnedChats, setPinnedChats] = useState([]);

// // // // // // // // // // // // // //   // 🔥 FETCH USERS
// // // // // // // // // // // // // //   const fetchUsers = async () => {
// // // // // // // // // // // // // //     const { data } = await API.get("/api/user/search?search=");
// // // // // // // // // // // // // //     setUsers(data.filter((u) => u._id !== user._id));
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   // 🔥 FILTER USERS BASED ON SEARCH
// // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // //     setFilteredUsers(
// // // // // // // // // // // // // //       users.filter((u) =>
// // // // // // // // // // // // // //         u.name.toLowerCase().includes(search.toLowerCase())
// // // // // // // // // // // // // //       )
// // // // // // // // // // // // // //     );
// // // // // // // // // // // // // //   }, [search, users]);

// // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // //     fetchUsers();
// // // // // // // // // // // // // //   }, []);

// // // // // // // // // // // // // //   // 🔥 CREATE GROUP
// // // // // // // // // // // // // //   const createGroup = async () => {
// // // // // // // // // // // // // //     if (!groupName.trim() || groupUsers.length === 0) {
// // // // // // // // // // // // // //       alert("Please enter group name and select users");
// // // // // // // // // // // // // //       return;
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // //     try {
// // // // // // // // // // // // // //       const { data } = await API.post("/api/chat/group", {
// // // // // // // // // // // // // //         name: groupName,
// // // // // // // // // // // // // //         users: groupUsers,
// // // // // // // // // // // // // //       });
// // // // // // // // // // // // // //       alert(`Group "${data.name}" created ✅`);
// // // // // // // // // // // // // //       setShowGroupModal(false);
// // // // // // // // // // // // // //       setGroupName("");
// // // // // // // // // // // // // //       setGroupUsers([]);
// // // // // // // // // // // // // //     } catch (err) {
// // // // // // // // // // // // // //       console.error(err);
// // // // // // // // // // // // // //       alert("Failed to create group ❌");
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   // 🔥 PIN CHAT
// // // // // // // // // // // // // //   const pinChat = (id) => {
// // // // // // // // // // // // // //     if (!pinnedChats.includes(id)) setPinnedChats([id, ...pinnedChats]);
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // //     <div>
// // // // // // // // // // // // // //       {/* NAVBAR */}
// // // // // // // // // // // // // //       <Navbar />

// // // // // // // // // // // // // //       {/* SEARCH BAR */}
// // // // // // // // // // // // // //       <div style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
// // // // // // // // // // // // // //         <input
// // // // // // // // // // // // // //           placeholder="Search users..."
// // // // // // // // // // // // // //           value={search}
// // // // // // // // // // // // // //           onChange={(e) => setSearch(e.target.value)}
// // // // // // // // // // // // // //           style={{ width: "100%", padding: "8px" }}
// // // // // // // // // // // // // //         />
// // // // // // // // // // // // // //       </div>

// // // // // // // // // // // // // //       {/* CREATE GROUP BUTTON */}
// // // // // // // // // // // // // //       <div style={{ padding: "10px" }}>
// // // // // // // // // // // // // //         <button onClick={() => setShowGroupModal(true)}>+ Create Group</button>
// // // // // // // // // // // // // //       </div>

// // // // // // // // // // // // // //       {/* USERS LIST */}
// // // // // // // // // // // // // //       <div style={{ padding: "10px" }}>
// // // // // // // // // // // // // //         {[...pinnedChats, ...filteredUsers.map(u => u._id)]
// // // // // // // // // // // // // //           .filter((v, i, a) => a.indexOf(v) === i) // unique
// // // // // // // // // // // // // //           .map((id) => {
// // // // // // // // // // // // // //             const u = users.find((u) => u._id === id);
// // // // // // // // // // // // // //             if (!u) return null;
// // // // // // // // // // // // // //             return (
// // // // // // // // // // // // // //               <div
// // // // // // // // // // // // // //                 key={u._id}
// // // // // // // // // // // // // //                 style={{
// // // // // // // // // // // // // //                   display: "flex",
// // // // // // // // // // // // // //                   justifyContent: "space-between",
// // // // // // // // // // // // // //                   padding: "8px",
// // // // // // // // // // // // // //                   borderBottom: "1px solid #eee",
// // // // // // // // // // // // // //                   cursor: "pointer",
// // // // // // // // // // // // // //                 }}
// // // // // // // // // // // // // //                 onClick={() => nav(`/chat/${u._id}`)}
// // // // // // // // // // // // // //               >
// // // // // // // // // // // // // //                 <span>
// // // // // // // // // // // // // //                   {u.name} {u.isOnline ? "🟢" : "⚫"}
// // // // // // // // // // // // // //                 </span>
// // // // // // // // // // // // // //                 <button onClick={(e) => {
// // // // // // // // // // // // // //                   e.stopPropagation();
// // // // // // // // // // // // // //                   pinChat(u._id);
// // // // // // // // // // // // // //                 }}>📌</button>
// // // // // // // // // // // // // //               </div>
// // // // // // // // // // // // // //             );
// // // // // // // // // // // // // //           })}
// // // // // // // // // // // // // //       </div>

// // // // // // // // // // // // // //       {/* GROUP MODAL */}
// // // // // // // // // // // // // //       {showGroupModal && (
// // // // // // // // // // // // // //         <div
// // // // // // // // // // // // // //           style={{
// // // // // // // // // // // // // //             position: "fixed",
// // // // // // // // // // // // // //             top: 0,
// // // // // // // // // // // // // //             left: 0,
// // // // // // // // // // // // // //             width: "100%",
// // // // // // // // // // // // // //             height: "100%",
// // // // // // // // // // // // // //             background: "rgba(0,0,0,0.5)",
// // // // // // // // // // // // // //             display: "flex",
// // // // // // // // // // // // // //             justifyContent: "center",
// // // // // // // // // // // // // //             alignItems: "center",
// // // // // // // // // // // // // //           }}
// // // // // // // // // // // // // //         >
// // // // // // // // // // // // // //           <div style={{ background: "white", padding: "20px", width: "300px" }}>
// // // // // // // // // // // // // //             <h3>Create Group</h3>

// // // // // // // // // // // // // //             <input
// // // // // // // // // // // // // //               placeholder="Group Name"
// // // // // // // // // // // // // //               value={groupName}
// // // // // // // // // // // // // //               onChange={(e) => setGroupName(e.target.value)}
// // // // // // // // // // // // // //               style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
// // // // // // // // // // // // // //             />

// // // // // // // // // // // // // //             <div style={{ maxHeight: "150px", overflowY: "auto", marginBottom: "10px" }}>
// // // // // // // // // // // // // //               {users.map((u) => (
// // // // // // // // // // // // // //                 <div key={u._id}>
// // // // // // // // // // // // // //                   <input
// // // // // // // // // // // // // //                     type="checkbox"
// // // // // // // // // // // // // //                     value={u._id}
// // // // // // // // // // // // // //                     checked={groupUsers.includes(u._id)}
// // // // // // // // // // // // // //                     onChange={(e) => {
// // // // // // // // // // // // // //                       if (e.target.checked) {
// // // // // // // // // // // // // //                         setGroupUsers([...groupUsers, u._id]);
// // // // // // // // // // // // // //                       } else {
// // // // // // // // // // // // // //                         setGroupUsers(groupUsers.filter((id) => id !== u._id));
// // // // // // // // // // // // // //                       }
// // // // // // // // // // // // // //                     }}
// // // // // // // // // // // // // //                   />
// // // // // // // // // // // // // //                   <span> {u.name}</span>
// // // // // // // // // // // // // //                 </div>
// // // // // // // // // // // // // //               ))}
// // // // // // // // // // // // // //             </div>

// // // // // // // // // // // // // //             <button onClick={createGroup} style={{ marginRight: "10px" }}>
// // // // // // // // // // // // // //               Create
// // // // // // // // // // // // // //             </button>
// // // // // // // // // // // // // //             <button onClick={() => setShowGroupModal(false)}>Cancel</button>
// // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // //       )}
// // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // }


// // // // // // // // // // // // // import { useEffect, useState, useContext } from "react";
// // // // // // // // // // // // // import { API } from "../api/axios";
// // // // // // // // // // // // // import { AuthContext } from "../context/AuthContext";
// // // // // // // // // // // // // import { useNavigate } from "react-router-dom";
// // // // // // // // // // // // // import Navbar from "../components/Navbar";

// // // // // // // // // // // // // export default function Home() {
// // // // // // // // // // // // //   const { user } = useContext(AuthContext);
// // // // // // // // // // // // //   const nav = useNavigate();

// // // // // // // // // // // // //   const [users, setUsers] = useState([]);
// // // // // // // // // // // // //   const [search, setSearch] = useState("");
// // // // // // // // // // // // //   const [filteredUsers, setFilteredUsers] = useState([]);
// // // // // // // // // // // // //   const [groupName, setGroupName] = useState("");
// // // // // // // // // // // // //   const [groupUsers, setGroupUsers] = useState([]);
// // // // // // // // // // // // //   const [showGroupModal, setShowGroupModal] = useState(false);
// // // // // // // // // // // // //   const [pinnedChats, setPinnedChats] = useState([]);

// // // // // // // // // // // // //   // 🔥 FETCH USERS
// // // // // // // // // // // // //   const fetchUsers = async () => {
// // // // // // // // // // // // //     const { data } = await API.get("/api/user/search?search=");
// // // // // // // // // // // // //     setUsers(data.filter((u) => u._id !== user._id));
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   // 🔥 FILTER USERS BASED ON SEARCH
// // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // //     setFilteredUsers(
// // // // // // // // // // // // //       users.filter((u) =>
// // // // // // // // // // // // //         u.name.toLowerCase().includes(search.toLowerCase())
// // // // // // // // // // // // //       )
// // // // // // // // // // // // //     );
// // // // // // // // // // // // //   }, [search, users]);

// // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // //     fetchUsers();
// // // // // // // // // // // // //   }, []);

// // // // // // // // // // // // //   // 🔥 CREATE GROUP
// // // // // // // // // // // // //   const createGroup = async () => {
// // // // // // // // // // // // //     if (!groupName.trim() || groupUsers.length === 0) {
// // // // // // // // // // // // //       alert("Please enter group name and select users");
// // // // // // // // // // // // //       return;
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //     try {
// // // // // // // // // // // // //       const { data } = await API.post("/api/chat/group", {
// // // // // // // // // // // // //         name: groupName,
// // // // // // // // // // // // //         users: groupUsers,
// // // // // // // // // // // // //       });
// // // // // // // // // // // // //       alert(`Group "${data.name}" created ✅`);
// // // // // // // // // // // // //       setShowGroupModal(false);
// // // // // // // // // // // // //       setGroupName("");
// // // // // // // // // // // // //       setGroupUsers([]);
// // // // // // // // // // // // //     } catch (err) {
// // // // // // // // // // // // //       console.error(err);
// // // // // // // // // // // // //       alert("Failed to create group ❌");
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   // 🔥 PIN CHAT
// // // // // // // // // // // // //   const pinChat = (id) => {
// // // // // // // // // // // // //     if (!pinnedChats.includes(id)) setPinnedChats([id, ...pinnedChats]);
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <div>
// // // // // // // // // // // // //       {/* NAVBAR */}
// // // // // // // // // // // // //       <Navbar />

// // // // // // // // // // // // //       {/* SEARCH BAR */}
// // // // // // // // // // // // //       <div style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
// // // // // // // // // // // // //         <input
// // // // // // // // // // // // //           placeholder="Search users..."
// // // // // // // // // // // // //           value={search}
// // // // // // // // // // // // //           onChange={(e) => setSearch(e.target.value)}
// // // // // // // // // // // // //           style={{ width: "100%", padding: "8px" }}
// // // // // // // // // // // // //         />
// // // // // // // // // // // // //       </div>

// // // // // // // // // // // // //       {/* CREATE GROUP BUTTON */}
// // // // // // // // // // // // //       <div style={{ padding: "10px" }}>
// // // // // // // // // // // // //         <button onClick={() => setShowGroupModal(true)}>+ Create Group</button>
// // // // // // // // // // // // //       </div>

// // // // // // // // // // // // //       {/* USERS LIST */}
// // // // // // // // // // // // //       <div style={{ padding: "10px" }}>
// // // // // // // // // // // // //         {[...pinnedChats, ...filteredUsers.map((u) => u._id)]
// // // // // // // // // // // // //           .filter((v, i, a) => a.indexOf(v) === i) // unique
// // // // // // // // // // // // //           .map((id) => {
// // // // // // // // // // // // //             const u = users.find((u) => u._id === id);
// // // // // // // // // // // // //             if (!u) return null;
// // // // // // // // // // // // //             return (
// // // // // // // // // // // // //               <div
// // // // // // // // // // // // //                 key={u._id}
// // // // // // // // // // // // //                 style={{
// // // // // // // // // // // // //                   display: "flex",
// // // // // // // // // // // // //                   justifyContent: "space-between",
// // // // // // // // // // // // //                   padding: "8px",
// // // // // // // // // // // // //                   borderBottom: "1px solid #eee",
// // // // // // // // // // // // //                   cursor: "pointer",
// // // // // // // // // // // // //                 }}
// // // // // // // // // // // // //                 onClick={() => nav(`/chat/${u._id}`)}
// // // // // // // // // // // // //               >
// // // // // // // // // // // // //                 <span>
// // // // // // // // // // // // //                   {u.name} {u.isOnline ? "🟢" : "⚫"}
// // // // // // // // // // // // //                 </span>
// // // // // // // // // // // // //                 <button
// // // // // // // // // // // // //                   onClick={(e) => {
// // // // // // // // // // // // //                     e.stopPropagation();
// // // // // // // // // // // // //                     pinChat(u._id);
// // // // // // // // // // // // //                   }}
// // // // // // // // // // // // //                 >
// // // // // // // // // // // // //                   📌
// // // // // // // // // // // // //                 </button>
// // // // // // // // // // // // //               </div>
// // // // // // // // // // // // //             );
// // // // // // // // // // // // //           })}
// // // // // // // // // // // // //       </div>

// // // // // // // // // // // // //       {/* GROUP MODAL */}
// // // // // // // // // // // // //       {showGroupModal && (
// // // // // // // // // // // // //         <div
// // // // // // // // // // // // //           style={{
// // // // // // // // // // // // //             position: "fixed",
// // // // // // // // // // // // //             top: 0,
// // // // // // // // // // // // //             left: 0,
// // // // // // // // // // // // //             width: "100%",
// // // // // // // // // // // // //             height: "100%",
// // // // // // // // // // // // //             background: "rgba(0,0,0,0.5)",
// // // // // // // // // // // // //             display: "flex",
// // // // // // // // // // // // //             justifyContent: "center",
// // // // // // // // // // // // //             alignItems: "center",
// // // // // // // // // // // // //           }}
// // // // // // // // // // // // //         >
// // // // // // // // // // // // //           <div
// // // // // // // // // // // // //             style={{
// // // // // // // // // // // // //               background: "white",
// // // // // // // // // // // // //               padding: "20px",
// // // // // // // // // // // // //               width: "300px",
// // // // // // // // // // // // //               borderRadius: "8px",
// // // // // // // // // // // // //             }}
// // // // // // // // // // // // //           >
// // // // // // // // // // // // //             <h3>Create Group</h3>

// // // // // // // // // // // // //             <input
// // // // // // // // // // // // //               placeholder="Group Name"
// // // // // // // // // // // // //               value={groupName}
// // // // // // // // // // // // //               onChange={(e) => setGroupName(e.target.value)}
// // // // // // // // // // // // //               style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
// // // // // // // // // // // // //             />

// // // // // // // // // // // // //             <div
// // // // // // // // // // // // //               style={{
// // // // // // // // // // // // //                 maxHeight: "150px",
// // // // // // // // // // // // //                 overflowY: "auto",
// // // // // // // // // // // // //                 marginBottom: "10px",
// // // // // // // // // // // // //                 border: "1px solid #ccc",
// // // // // // // // // // // // //                 padding: "5px",
// // // // // // // // // // // // //               }}
// // // // // // // // // // // // //             >
// // // // // // // // // // // // //               {users.map((u) => (
// // // // // // // // // // // // //                 <div key={u._id}>
// // // // // // // // // // // // //                   <input
// // // // // // // // // // // // //                     type="checkbox"
// // // // // // // // // // // // //                     value={u._id}
// // // // // // // // // // // // //                     checked={groupUsers.includes(u._id)}
// // // // // // // // // // // // //                     onChange={(e) => {
// // // // // // // // // // // // //                       if (e.target.checked) {
// // // // // // // // // // // // //                         setGroupUsers([...groupUsers, u._id]);
// // // // // // // // // // // // //                       } else {
// // // // // // // // // // // // //                         setGroupUsers(groupUsers.filter((id) => id !== u._id));
// // // // // // // // // // // // //                       }
// // // // // // // // // // // // //                     }}
// // // // // // // // // // // // //                   />
// // // // // // // // // // // // //                   <span> {u.name}</span>
// // // // // // // // // // // // //                 </div>
// // // // // // // // // // // // //               ))}
// // // // // // // // // // // // //             </div>

// // // // // // // // // // // // //             <div style={{ display: "flex", justifyContent: "space-between" }}>
// // // // // // // // // // // // //               <button onClick={createGroup}>Create</button>
// // // // // // // // // // // // //               <button onClick={() => setShowGroupModal(false)}>Cancel</button>
// // // // // // // // // // // // //             </div>
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //       )}
// // // // // // // // // // // // //     </div>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // }

// // // // // // // // // // // // import { useState, useEffect, useContext } from "react";
// // // // // // // // // // // // import { API } from "../api/axios";
// // // // // // // // // // // // import { AuthContext } from "../context/AuthContext";
// // // // // // // // // // // // import { useNavigate } from "react-router-dom";

// // // // // // // // // // // // export default function Home() {
// // // // // // // // // // // //   const { user } = useContext(AuthContext);
// // // // // // // // // // // //   const nav = useNavigate();

// // // // // // // // // // // //   const [users, setUsers] = useState([]);
// // // // // // // // // // // //   const [filteredUsers, setFilteredUsers] = useState([]);
// // // // // // // // // // // //   const [search, setSearch] = useState("");
// // // // // // // // // // // //   const [showGroupModal, setShowGroupModal] = useState(false);
// // // // // // // // // // // //   const [groupName, setGroupName] = useState("");
// // // // // // // // // // // //   const [groupUsers, setGroupUsers] = useState([]);
// // // // // // // // // // // //   const [pinnedChats, setPinnedChats] = useState([]);

// // // // // // // // // // // //   // Fetch all users
// // // // // // // // // // // //   const fetchUsers = async () => {
// // // // // // // // // // // //     const { data } = await API.get("/api/user/search?search=");
// // // // // // // // // // // //     const normalized = data
// // // // // // // // // // // //       .filter((u) => u._id !== user._id)
// // // // // // // // // // // //       .map((u) => ({
// // // // // // // // // // // //         ...u,
// // // // // // // // // // // //         isGroupChat: u.isGroupChat || false,
// // // // // // // // // // // //         name: u.name || "Unnamed",
// // // // // // // // // // // //         isOnline: u.isOnline || false,
// // // // // // // // // // // //       }));
// // // // // // // // // // // //     setUsers(normalized);
// // // // // // // // // // // //   };

// // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // //     fetchUsers();
// // // // // // // // // // // //   }, []);

// // // // // // // // // // // //   // Filter users on search
// // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // //     setFilteredUsers(
// // // // // // // // // // // //       users.filter((u) =>
// // // // // // // // // // // //         u.name.toLowerCase().includes(search.toLowerCase())
// // // // // // // // // // // //       )
// // // // // // // // // // // //     );
// // // // // // // // // // // //   }, [search, users]);

// // // // // // // // // // // //   // Pin chat
// // // // // // // // // // // //   const pinChat = (id) => {
// // // // // // // // // // // //     if (!pinnedChats.includes(id)) {
// // // // // // // // // // // //       setPinnedChats([id, ...pinnedChats]);
// // // // // // // // // // // //     }
// // // // // // // // // // // //   };

// // // // // // // // // // // //   // CREATE GROUP
// // // // // // // // // // // //   const createGroup = async () => {
// // // // // // // // // // // //     if (!groupName.trim() || groupUsers.length === 0) {
// // // // // // // // // // // //       alert("Please enter group name and select users");
// // // // // // // // // // // //       return;
// // // // // // // // // // // //     }
// // // // // // // // // // // //     try {
// // // // // // // // // // // //       const { data } = await API.post("/api/chat/group", {
// // // // // // // // // // // //         name: groupName,
// // // // // // // // // // // //         users: groupUsers,
// // // // // // // // // // // //       });

// // // // // // // // // // // //       const group = data.chat || data;

// // // // // // // // // // // //       const normalizedGroup = {
// // // // // // // // // // // //         ...group,
// // // // // // // // // // // //         name: group.name || "Unnamed Group",
// // // // // // // // // // // //         isGroupChat: true,
// // // // // // // // // // // //         isOnline: false,
// // // // // // // // // // // //       };

// // // // // // // // // // // //       setUsers((prev) => [normalizedGroup, ...prev]);

// // // // // // // // // // // //       alert(`Group "${normalizedGroup.name}" created ✅`);

// // // // // // // // // // // //       setShowGroupModal(false);
// // // // // // // // // // // //       setGroupName("");
// // // // // // // // // // // //       setGroupUsers([]);
// // // // // // // // // // // //     } catch (err) {
// // // // // // // // // // // //       console.error(err);
// // // // // // // // // // // //       alert("Failed to create group ❌");
// // // // // // // // // // // //     }
// // // // // // // // // // // //   };

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
// // // // // // // // // // // //       <h2>Home</h2>

// // // // // // // // // // // //       {/* SEARCH */}
// // // // // // // // // // // //       <input
// // // // // // // // // // // //         placeholder="Search users or groups..."
// // // // // // // // // // // //         style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
// // // // // // // // // // // //         value={search}
// // // // // // // // // // // //         onChange={(e) => setSearch(e.target.value)}
// // // // // // // // // // // //       />

// // // // // // // // // // // //       {/* CREATE GROUP */}
// // // // // // // // // // // //       <button onClick={() => setShowGroupModal(true)}>Create Group ➕</button>

// // // // // // // // // // // //       {showGroupModal && (
// // // // // // // // // // // //         <div
// // // // // // // // // // // //           style={{
// // // // // // // // // // // //             border: "1px solid #ccc",
// // // // // // // // // // // //             padding: "10px",
// // // // // // // // // // // //             margin: "10px 0",
// // // // // // // // // // // //             borderRadius: "8px",
// // // // // // // // // // // //           }}
// // // // // // // // // // // //         >
// // // // // // // // // // // //           <h3>Create Group</h3>
// // // // // // // // // // // //           <input
// // // // // // // // // // // //             placeholder="Group Name"
// // // // // // // // // // // //             style={{ width: "100%", marginBottom: "5px", padding: "6px" }}
// // // // // // // // // // // //             value={groupName}
// // // // // // // // // // // //             onChange={(e) => setGroupName(e.target.value)}
// // // // // // // // // // // //           />

// // // // // // // // // // // //           <select
// // // // // // // // // // // //             multiple
// // // // // // // // // // // //             style={{ width: "100%", marginBottom: "5px", padding: "6px" }}
// // // // // // // // // // // //             value={groupUsers}
// // // // // // // // // // // //             onChange={(e) =>
// // // // // // // // // // // //               setGroupUsers(
// // // // // // // // // // // //                 Array.from(e.target.selectedOptions, (option) => option.value)
// // // // // // // // // // // //               )
// // // // // // // // // // // //             }
// // // // // // // // // // // //           >
// // // // // // // // // // // //             {users.map((u) => (
// // // // // // // // // // // //               <option key={u._id} value={u._id}>
// // // // // // // // // // // //                 {u.name}
// // // // // // // // // // // //               </option>
// // // // // // // // // // // //             ))}
// // // // // // // // // // // //           </select>

// // // // // // // // // // // //           <button onClick={createGroup}>Create</button>
// // // // // // // // // // // //           <button onClick={() => setShowGroupModal(false)}>Cancel</button>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       )}

// // // // // // // // // // // //       {/* USERS + GROUPS LIST */}
// // // // // // // // // // // //       <div style={{ marginTop: "10px" }}>
// // // // // // // // // // // //         {[...pinnedChats, ...filteredUsers.map((u) => u._id)]
// // // // // // // // // // // //           .filter((v, i, a) => a.indexOf(v) === i) // unique
// // // // // // // // // // // //           .map((id) => {
// // // // // // // // // // // //             const u = users.find((u) => u._id === id);
// // // // // // // // // // // //             if (!u) return null;

// // // // // // // // // // // //             return (
// // // // // // // // // // // //               <div
// // // // // // // // // // // //                 key={u._id}
// // // // // // // // // // // //                 style={{
// // // // // // // // // // // //                   display: "flex",
// // // // // // // // // // // //                   justifyContent: "space-between",
// // // // // // // // // // // //                   padding: "8px",
// // // // // // // // // // // //                   borderBottom: "1px solid #eee",
// // // // // // // // // // // //                   cursor: "pointer",
// // // // // // // // // // // //                 }}
// // // // // // // // // // // //                 onClick={() => nav(`/chat/${u._id}`)}
// // // // // // // // // // // //               >
// // // // // // // // // // // //                 <span>
// // // // // // // // // // // //                   {u.isGroupChat ? "👥 " : ""}
// // // // // // // // // // // //                   {u.name} {!u.isGroupChat && (u.isOnline ? "🟢" : "⚫")}
// // // // // // // // // // // //                 </span>

// // // // // // // // // // // //                 {!u.isGroupChat && (
// // // // // // // // // // // //                   <button
// // // // // // // // // // // //                     onClick={(e) => {
// // // // // // // // // // // //                       e.stopPropagation();
// // // // // // // // // // // //                       pinChat(u._id);
// // // // // // // // // // // //                     }}
// // // // // // // // // // // //                   >
// // // // // // // // // // // //                     📌
// // // // // // // // // // // //                   </button>
// // // // // // // // // // // //                 )}
// // // // // // // // // // // //               </div>
// // // // // // // // // // // //             );
// // // // // // // // // // // //           })}
// // // // // // // // // // // //       </div>
// // // // // // // // // // // //     </div>
// // // // // // // // // // // //   );
// // // // // // // // // // // // }


// // // // // // // // // // // import { useState, useEffect, useContext } from "react";
// // // // // // // // // // // import { API } from "../api/axios";
// // // // // // // // // // // import { AuthContext } from "../context/AuthContext";
// // // // // // // // // // // import { useNavigate } from "react-router-dom";

// // // // // // // // // // // export default function Home() {
// // // // // // // // // // //   const { user } = useContext(AuthContext);
// // // // // // // // // // //   const nav = useNavigate();

// // // // // // // // // // //   const [users, setUsers] = useState([]);
// // // // // // // // // // //   const [filteredUsers, setFilteredUsers] = useState([]);
// // // // // // // // // // //   const [search, setSearch] = useState("");
// // // // // // // // // // //   const [showGroupModal, setShowGroupModal] = useState(false);
// // // // // // // // // // //   const [groupName, setGroupName] = useState("");
// // // // // // // // // // //   const [groupUsers, setGroupUsers] = useState([]);
// // // // // // // // // // //   const [pinnedChats, setPinnedChats] = useState([]);

// // // // // // // // // // //   // FETCH USERS
// // // // // // // // // // //   const fetchUsers = async () => {
// // // // // // // // // // //     try {
// // // // // // // // // // //       const { data } = await API.get("/api/user/search?search=");

// // // // // // // // // // //       const normalizedUsers = data
// // // // // // // // // // //         .filter((u) => u._id !== user._id)
// // // // // // // // // // //         .map((u) => ({
// // // // // // // // // // //           ...u,
// // // // // // // // // // //           isGroupChat: u.isGroupChat || false,
// // // // // // // // // // //           name: u.name || "Unnamed",
// // // // // // // // // // //           isOnline: u.isOnline || false,
// // // // // // // // // // //         }));

// // // // // // // // // // //       // Merge existing groups to avoid overwriting
// // // // // // // // // // //       setUsers((prev) => {
// // // // // // // // // // //         const existingGroups = prev.filter((u) => u.isGroupChat);
// // // // // // // // // // //         return [...existingGroups, ...normalizedUsers];
// // // // // // // // // // //       });
// // // // // // // // // // //     } catch (err) {
// // // // // // // // // // //       console.error(err);
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     fetchUsers();
// // // // // // // // // // //   }, []);

// // // // // // // // // // //   // FILTER USERS ON SEARCH
// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     setFilteredUsers(
// // // // // // // // // // //       users.filter((u) =>
// // // // // // // // // // //         (u.name || "").toLowerCase().includes(search.toLowerCase())
// // // // // // // // // // //       )
// // // // // // // // // // //     );
// // // // // // // // // // //   }, [search, users]);

// // // // // // // // // // //   // PIN CHAT
// // // // // // // // // // //   const pinChat = (id) => {
// // // // // // // // // // //     if (!pinnedChats.includes(id)) {
// // // // // // // // // // //       setPinnedChats([id, ...pinnedChats]);
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   // CREATE GROUP
// // // // // // // // // // //   const createGroup = async () => {
// // // // // // // // // // //     if (!groupName.trim() || groupUsers.length === 0) {
// // // // // // // // // // //       alert("Please enter group name and select users");
// // // // // // // // // // //       return;
// // // // // // // // // // //     }

// // // // // // // // // // //     try {
// // // // // // // // // // //       const { data } = await API.post("/api/chat/group", {
// // // // // // // // // // //         name: groupName,
// // // // // // // // // // //         users: groupUsers,
// // // // // // // // // // //       });

// // // // // // // // // // //       const group = data.chat || data;

// // // // // // // // // // //       const normalizedGroup = {
// // // // // // // // // // //         ...group,
// // // // // // // // // // //         name: group.name || group.chatName || "Unnamed Group",
// // // // // // // // // // //         isGroupChat: true,
// // // // // // // // // // //         isOnline: false,
// // // // // // // // // // //       };

// // // // // // // // // // //       setUsers((prev) => [normalizedGroup, ...prev]);
// // // // // // // // // // //       alert(`Group "${normalizedGroup.name}" created ✅`);

// // // // // // // // // // //       setShowGroupModal(false);
// // // // // // // // // // //       setGroupName("");
// // // // // // // // // // //       setGroupUsers([]);
// // // // // // // // // // //     } catch (err) {
// // // // // // // // // // //       console.error(err);
// // // // // // // // // // //       alert("Failed to create group ❌");
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
// // // // // // // // // // //       <h2>Home</h2>

// // // // // // // // // // //       {/* SEARCH */}
// // // // // // // // // // //       <input
// // // // // // // // // // //         placeholder="Search users or groups..."
// // // // // // // // // // //         style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
// // // // // // // // // // //         value={search}
// // // // // // // // // // //         onChange={(e) => setSearch(e.target.value)}
// // // // // // // // // // //       />

// // // // // // // // // // //       {/* CREATE GROUP */}
// // // // // // // // // // //       <button onClick={() => setShowGroupModal(true)}>Create Group ➕</button>

// // // // // // // // // // //       {showGroupModal && (
// // // // // // // // // // //         <div
// // // // // // // // // // //           style={{
// // // // // // // // // // //             border: "1px solid #ccc",
// // // // // // // // // // //             padding: "10px",
// // // // // // // // // // //             margin: "10px 0",
// // // // // // // // // // //             borderRadius: "8px",
// // // // // // // // // // //           }}
// // // // // // // // // // //         >
// // // // // // // // // // //           <h3>Create Group</h3>
// // // // // // // // // // //           <input
// // // // // // // // // // //             placeholder="Group Name"
// // // // // // // // // // //             style={{ width: "100%", marginBottom: "5px", padding: "6px" }}
// // // // // // // // // // //             value={groupName}
// // // // // // // // // // //             onChange={(e) => setGroupName(e.target.value)}
// // // // // // // // // // //           />

// // // // // // // // // // //           <select
// // // // // // // // // // //             multiple
// // // // // // // // // // //             style={{ width: "100%", marginBottom: "5px", padding: "6px" }}
// // // // // // // // // // //             value={groupUsers}
// // // // // // // // // // //             onChange={(e) =>
// // // // // // // // // // //               setGroupUsers(
// // // // // // // // // // //                 Array.from(e.target.selectedOptions, (option) => option.value)
// // // // // // // // // // //               )
// // // // // // // // // // //             }
// // // // // // // // // // //           >
// // // // // // // // // // //             {users
// // // // // // // // // // //               .filter((u) => !u.isGroupChat)
// // // // // // // // // // //               .map((u) => (
// // // // // // // // // // //                 <option key={u._id} value={u._id}>
// // // // // // // // // // //                   {u.name}
// // // // // // // // // // //                 </option>
// // // // // // // // // // //               ))}
// // // // // // // // // // //           </select>

// // // // // // // // // // //           <button onClick={createGroup}>Create</button>
// // // // // // // // // // //           <button onClick={() => setShowGroupModal(false)}>Cancel</button>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       )}

// // // // // // // // // // //       {/* USERS + GROUPS LIST */}
// // // // // // // // // // //       <div style={{ marginTop: "10px" }}>
// // // // // // // // // // //         {[...pinnedChats, ...filteredUsers.map((u) => u._id)]
// // // // // // // // // // //           .filter((v, i, a) => a.indexOf(v) === i)
// // // // // // // // // // //           .map((id) => {
// // // // // // // // // // //             const u = users.find((u) => u._id === id);
// // // // // // // // // // //             if (!u) return null;

// // // // // // // // // // //             return (
// // // // // // // // // // //               <div
// // // // // // // // // // //                 key={u._id}
// // // // // // // // // // //                 style={{
// // // // // // // // // // //                   display: "flex",
// // // // // // // // // // //                   justifyContent: "space-between",
// // // // // // // // // // //                   padding: "8px",
// // // // // // // // // // //                   borderBottom: "1px solid #eee",
// // // // // // // // // // //                   cursor: "pointer",
// // // // // // // // // // //                 }}
// // // // // // // // // // //                 onClick={() => nav(`/chat/${u._id}`)}
// // // // // // // // // // //               >
// // // // // // // // // // //                 <span>
// // // // // // // // // // //                   {u.isGroupChat ? "👥 " : ""}
// // // // // // // // // // //                   {u.name} {!u.isGroupChat && (u.isOnline ? "🟢" : "⚫")}
// // // // // // // // // // //                 </span>

// // // // // // // // // // //                 {!u.isGroupChat && (
// // // // // // // // // // //                   <button
// // // // // // // // // // //                     onClick={(e) => {
// // // // // // // // // // //                       e.stopPropagation();
// // // // // // // // // // //                       pinChat(u._id);
// // // // // // // // // // //                     }}
// // // // // // // // // // //                   >
// // // // // // // // // // //                     📌
// // // // // // // // // // //                   </button>
// // // // // // // // // // //                 )}
// // // // // // // // // // //               </div>
// // // // // // // // // // //             );
// // // // // // // // // // //           })}
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // }

// // // // // // // // // // import { useEffect, useState } from "react";
// // // // // // // // // // import { API } from "../api/axios";
// // // // // // // // // // import { useNavigate } from "react-router-dom";

// // // // // // // // // // export default function Home() {
// // // // // // // // // //   const [users, setUsers] = useState([]);
// // // // // // // // // //   const nav = useNavigate();

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     API.get("/api/user/search?search=").then((res) => {
// // // // // // // // // //       setUsers(res.data);
// // // // // // // // // //     });
// // // // // // // // // //   }, []);

// // // // // // // // // //   return (
// // // // // // // // // //     <div>
// // // // // // // // // //       <h2>Users</h2>
// // // // // // // // // //       {users.map((u) => (
// // // // // // // // // //         <div key={u._id} onClick={() => nav(`/chat/${u._id}`)}>
// // // // // // // // // //           {u.name}
// // // // // // // // // //         </div>
// // // // // // // // // //       ))}
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // }


// // // // // // // // // import { useEffect, useState } from "react";
// // // // // // // // // import { API } from "../api/axios";
// // // // // // // // // import { useNavigate } from "react-router-dom";

// // // // // // // // // export default function Home() {
// // // // // // // // //   const [users, setUsers] = useState([]);
// // // // // // // // //   const nav = useNavigate();

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     API.get("/api/user/search?search=").then((res) => {
// // // // // // // // //       setUsers(res.data);
// // // // // // // // //     });
// // // // // // // // //   }, []);

// // // // // // // // //   return (
// // // // // // // // //     <div>
// // // // // // // // //       <h2>Users</h2>

// // // // // // // // //       {users.map((u) => (
// // // // // // // // //         <div key={u._id} onClick={() => nav(`/chat/${u._id}`)}>
// // // // // // // // //           {u.name} {u.isOnline ? "🟢" : "⚫"}
// // // // // // // // //         </div>
// // // // // // // // //       ))}
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // }


// // // // // // // // import { useEffect, useState } from "react";
// // // // // // // // import { API } from "../api/axios";
// // // // // // // // import { useNavigate } from "react-router-dom";
// // // // // // // // import Navbar from "../components/Navbar";

// // // // // // // // export default function Home() {
// // // // // // // //   const [users, setUsers] = useState([]);
// // // // // // // //   const [search, setSearch] = useState("");
// // // // // // // //   const nav = useNavigate();

// // // // // // // //   useEffect(() => {
// // // // // // // //     fetchUsers();
// // // // // // // //   }, [search]);

// // // // // // // //   const fetchUsers = async () => {
// // // // // // // //     const { data } = await API.get(`/api/user/search?search=${search}`);
// // // // // // // //     setUsers(data);
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div>

// // // // // // // //       {/* 🔥 NAVBAR */}
// // // // // // // //       <Navbar />

// // // // // // // //       <div style={{ padding: "10px" }}>
// // // // // // // //         <h2>Users</h2>

// // // // // // // //         {/* 🔍 SEARCH BAR */}
// // // // // // // //         <input
// // // // // // // //           style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
// // // // // // // //           placeholder="Search user..."
// // // // // // // //           value={search}
// // // // // // // //           onChange={(e) => setSearch(e.target.value)}
// // // // // // // //         />

// // // // // // // //         {/* 👥 USER LIST */}
// // // // // // // //         {users.map((u) => (
// // // // // // // //           <div
// // // // // // // //             key={u._id}
// // // // // // // //             onClick={() => nav(`/chat/${u._id}`)}
// // // // // // // //             style={{
// // // // // // // //               padding: "10px",
// // // // // // // //               borderBottom: "1px solid #ccc",
// // // // // // // //               cursor: "pointer"
// // // // // // // //             }}
// // // // // // // //           >
// // // // // // // //             {u.name} {u.isOnline ? "🟢" : "⚫"}
// // // // // // // //           </div>
// // // // // // // //         ))}
// // // // // // // //       </div>

// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }


// // // // // // // import { useEffect, useState, useContext } from "react";
// // // // // // // import { API } from "../api/axios";
// // // // // // // import { AuthContext } from "../context/AuthContext";
// // // // // // // import { useNavigate } from "react-router-dom";
// // // // // // // import Navbar from "../components/Navbar";

// // // // // // // export default function Home() {
// // // // // // //   const { user } = useContext(AuthContext);
// // // // // // //   const nav = useNavigate();

// // // // // // //   const [users, setUsers] = useState([]);
// // // // // // //   const [search, setSearch] = useState("");
// // // // // // //   const [filteredUsers, setFilteredUsers] = useState([]);
// // // // // // //   const [groupName, setGroupName] = useState("");
// // // // // // //   const [groupUsers, setGroupUsers] = useState([]);
// // // // // // //   const [showGroupModal, setShowGroupModal] = useState(false);
// // // // // // //   const [pinnedChats, setPinnedChats] = useState([]);

// // // // // // //   // 🔥 FETCH USERS
// // // // // // //   const fetchUsers = async () => {
// // // // // // //     const { data } = await API.get("/api/user/search?search=");
// // // // // // //     setUsers(data.filter((u) => u._id !== user._id));
// // // // // // //   };

// // // // // // //   // 🔥 FILTER USERS BASED ON SEARCH
// // // // // // //   useEffect(() => {
// // // // // // //     setFilteredUsers(
// // // // // // //       users.filter((u) =>
// // // // // // //         u.name.toLowerCase().includes(search.toLowerCase())
// // // // // // //       )
// // // // // // //     );
// // // // // // //   }, [search, users]);

// // // // // // //   useEffect(() => {
// // // // // // //     fetchUsers();
// // // // // // //   }, []);

// // // // // // //   // 🔥 CREATE GROUP
// // // // // // //   const createGroup = async () => {
// // // // // // //     if (!groupName.trim() || groupUsers.length === 0) {
// // // // // // //       alert("Please enter group name and select users");
// // // // // // //       return;
// // // // // // //     }
// // // // // // //     try {
// // // // // // //       const { data } = await API.post("/api/chat/group", {
// // // // // // //         name: groupName,
// // // // // // //         users: groupUsers,
// // // // // // //       });
// // // // // // //       alert(`Group "${data.name}" created ✅`);
// // // // // // //       setShowGroupModal(false);
// // // // // // //       setGroupName("");
// // // // // // //       setGroupUsers([]);
// // // // // // //     } catch (err) {
// // // // // // //       console.error(err);
// // // // // // //       alert("Failed to create group ❌");
// // // // // // //     }
// // // // // // //   };

// // // // // // //   // 🔥 PIN CHAT
// // // // // // //   const pinChat = (id) => {
// // // // // // //     if (!pinnedChats.includes(id)) setPinnedChats([id, ...pinnedChats]);
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div>
// // // // // // //       {/* NAVBAR */}
// // // // // // //       <Navbar />

// // // // // // //       {/* SEARCH BAR */}
// // // // // // //       <div style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
// // // // // // //         <input
// // // // // // //           placeholder="Search users..."
// // // // // // //           value={search}
// // // // // // //           onChange={(e) => setSearch(e.target.value)}
// // // // // // //           style={{ width: "100%", padding: "8px" }}
// // // // // // //         />
// // // // // // //       </div>

// // // // // // //       {/* CREATE GROUP BUTTON */}
// // // // // // //       <div style={{ padding: "10px" }}>
// // // // // // //         <button onClick={() => setShowGroupModal(true)}>+ Create Group</button>
// // // // // // //       </div>

// // // // // // //       {/* USERS LIST */}
// // // // // // //       <div style={{ padding: "10px" }}>
// // // // // // //         {[...pinnedChats, ...filteredUsers.map((u) => u._id)]
// // // // // // //           .filter((v, i, a) => a.indexOf(v) === i) // unique
// // // // // // //           .map((id) => {
// // // // // // //             const u = users.find((u) => u._id === id);
// // // // // // //             if (!u) return null;
// // // // // // //             return (
// // // // // // //               <div
// // // // // // //                 key={u._id}
// // // // // // //                 style={{
// // // // // // //                   display: "flex",
// // // // // // //                   justifyContent: "space-between",
// // // // // // //                   padding: "8px",
// // // // // // //                   borderBottom: "1px solid #eee",
// // // // // // //                   cursor: "pointer",
// // // // // // //                 }}
// // // // // // //                 onClick={() => nav(`/chat/${u._id}`)}
// // // // // // //               >
// // // // // // //                 <span>
// // // // // // //                   {u.name} {u.isOnline ? "🟢" : "⚫"}
// // // // // // //                 </span>
// // // // // // //                 <button
// // // // // // //                   onClick={(e) => {
// // // // // // //                     e.stopPropagation();
// // // // // // //                     pinChat(u._id);
// // // // // // //                   }}
// // // // // // //                 >
// // // // // // //                   📌
// // // // // // //                 </button>
// // // // // // //               </div>
// // // // // // //             );
// // // // // // //           })}
// // // // // // //       </div>

// // // // // // //       {/* GROUP MODAL */}
// // // // // // //       {showGroupModal && (
// // // // // // //         <div
// // // // // // //           style={{
// // // // // // //             position: "fixed",
// // // // // // //             top: 0,
// // // // // // //             left: 0,
// // // // // // //             width: "100%",
// // // // // // //             height: "100%",
// // // // // // //             background: "rgba(0,0,0,0.5)",
// // // // // // //             display: "flex",
// // // // // // //             justifyContent: "center",
// // // // // // //             alignItems: "center",
// // // // // // //           }}
// // // // // // //         >
// // // // // // //           <div
// // // // // // //             style={{
// // // // // // //               background: "white",
// // // // // // //               padding: "20px",
// // // // // // //               width: "300px",
// // // // // // //               borderRadius: "8px",
// // // // // // //             }}
// // // // // // //           >
// // // // // // //             <h3>Create Group</h3>

// // // // // // //             <input
// // // // // // //               placeholder="Group Name"
// // // // // // //               value={groupName}
// // // // // // //               onChange={(e) => setGroupName(e.target.value)}
// // // // // // //               style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
// // // // // // //             />

// // // // // // //             <div
// // // // // // //               style={{
// // // // // // //                 maxHeight: "150px",
// // // // // // //                 overflowY: "auto",
// // // // // // //                 marginBottom: "10px",
// // // // // // //                 border: "1px solid #ccc",
// // // // // // //                 padding: "5px",
// // // // // // //               }}
// // // // // // //             >
// // // // // // //               {users.map((u) => (
// // // // // // //                 <div key={u._id}>
// // // // // // //                   <input
// // // // // // //                     type="checkbox"
// // // // // // //                     value={u._id}
// // // // // // //                     checked={groupUsers.includes(u._id)}
// // // // // // //                     onChange={(e) => {
// // // // // // //                       if (e.target.checked) {
// // // // // // //                         setGroupUsers([...groupUsers, u._id]);
// // // // // // //                       } else {
// // // // // // //                         setGroupUsers(groupUsers.filter((id) => id !== u._id));
// // // // // // //                       }
// // // // // // //                     }}
// // // // // // //                   />
// // // // // // //                   <span> {u.name}</span>
// // // // // // //                 </div>
// // // // // // //               ))}
// // // // // // //             </div>

// // // // // // //             <div style={{ display: "flex", justifyContent: "space-between" }}>
// // // // // // //               <button onClick={createGroup}>Create</button>
// // // // // // //               <button onClick={() => setShowGroupModal(false)}>Cancel</button>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       )}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // import { useState, useEffect, useContext } from "react";
// // // // // // import { API } from "../api/axios";
// // // // // // import { AuthContext } from "../context/AuthContext";
// // // // // // import { useNavigate } from "react-router-dom";

// // // // // // export default function Home() {
// // // // // //   const { user } = useContext(AuthContext);
// // // // // //   const nav = useNavigate();

// // // // // //   const [users, setUsers] = useState([]);
// // // // // //   const [filteredUsers, setFilteredUsers] = useState([]);
// // // // // //   const [search, setSearch] = useState("");
// // // // // //   const [showGroupModal, setShowGroupModal] = useState(false);
// // // // // //   const [groupName, setGroupName] = useState("");
// // // // // //   const [groupUsers, setGroupUsers] = useState([]);
// // // // // //   const [pinnedChats, setPinnedChats] = useState([]);

// // // // // //   // Fetch all users
// // // // // //   const fetchUsers = async () => {
// // // // // //     const { data } = await API.get("/api/user/search?search=");
// // // // // //     const normalized = data
// // // // // //       .filter((u) => u._id !== user._id)
// // // // // //       .map((u) => ({
// // // // // //         ...u,
// // // // // //         isGroupChat: u.isGroupChat || false,
// // // // // //         name: u.name || "Unnamed",
// // // // // //         isOnline: u.isOnline || false,
// // // // // //       }));
// // // // // //     setUsers(normalized);
// // // // // //   };

// // // // // //   useEffect(() => {
// // // // // //     fetchUsers();
// // // // // //   }, []);

// // // // // //   // Filter users on search
// // // // // //   useEffect(() => {
// // // // // //     setFilteredUsers(
// // // // // //       users.filter((u) =>
// // // // // //         u.name.toLowerCase().includes(search.toLowerCase())
// // // // // //       )
// // // // // //     );
// // // // // //   }, [search, users]);

// // // // // //   // Pin chat
// // // // // //   const pinChat = (id) => {
// // // // // //     if (!pinnedChats.includes(id)) {
// // // // // //       setPinnedChats([id, ...pinnedChats]);
// // // // // //     }
// // // // // //   };

// // // // // //   // CREATE GROUP
// // // // // //   const createGroup = async () => {
// // // // // //     if (!groupName.trim() || groupUsers.length === 0) {
// // // // // //       alert("Please enter group name and select users");
// // // // // //       return;
// // // // // //     }
// // // // // //     try {
// // // // // //       const { data } = await API.post("/api/chat/group", {
// // // // // //         name: groupName,
// // // // // //         users: groupUsers,
// // // // // //       });

// // // // // //       const group = data.chat || data;

// // // // // //       const normalizedGroup = {
// // // // // //         ...group,
// // // // // //         name: group.name || "Unnamed Group",
// // // // // //         isGroupChat: true,
// // // // // //         isOnline: false,
// // // // // //       };

// // // // // //       setUsers((prev) => [normalizedGroup, ...prev]);

// // // // // //       alert(`Group "${normalizedGroup.name}" created ✅`);

// // // // // //       setShowGroupModal(false);
// // // // // //       setGroupName("");
// // // // // //       setGroupUsers([]);
// // // // // //     } catch (err) {
// // // // // //       console.error(err);
// // // // // //       alert("Failed to create group ❌");
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
// // // // // //       <h2>Home</h2>

// // // // // //       {/* SEARCH */}
// // // // // //       <input
// // // // // //         placeholder="Search users or groups..."
// // // // // //         style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
// // // // // //         value={search}
// // // // // //         onChange={(e) => setSearch(e.target.value)}
// // // // // //       />

// // // // // //       {/* CREATE GROUP */}
// // // // // //       <button onClick={() => setShowGroupModal(true)}>Create Group ➕</button>

// // // // // //       {showGroupModal && (
// // // // // //         <div
// // // // // //           style={{
// // // // // //             border: "1px solid #ccc",
// // // // // //             padding: "10px",
// // // // // //             margin: "10px 0",
// // // // // //             borderRadius: "8px",
// // // // // //           }}
// // // // // //         >
// // // // // //           <h3>Create Group</h3>
// // // // // //           <input
// // // // // //             placeholder="Group Name"
// // // // // //             style={{ width: "100%", marginBottom: "5px", padding: "6px" }}
// // // // // //             value={groupName}
// // // // // //             onChange={(e) => setGroupName(e.target.value)}
// // // // // //           />

// // // // // //           <select
// // // // // //             multiple
// // // // // //             style={{ width: "100%", marginBottom: "5px", padding: "6px" }}
// // // // // //             value={groupUsers}
// // // // // //             onChange={(e) =>
// // // // // //               setGroupUsers(
// // // // // //                 Array.from(e.target.selectedOptions, (option) => option.value)
// // // // // //               )
// // // // // //             }
// // // // // //           >
// // // // // //             {users.map((u) => (
// // // // // //               <option key={u._id} value={u._id}>
// // // // // //                 {u.name}
// // // // // //               </option>
// // // // // //             ))}
// // // // // //           </select>

// // // // // //           <button onClick={createGroup}>Create</button>
// // // // // //           <button onClick={() => setShowGroupModal(false)}>Cancel</button>
// // // // // //         </div>
// // // // // //       )}

// // // // // //       {/* USERS + GROUPS LIST */}
// // // // // //       <div style={{ marginTop: "10px" }}>
// // // // // //         {[...pinnedChats, ...filteredUsers.map((u) => u._id)]
// // // // // //           .filter((v, i, a) => a.indexOf(v) === i) // unique
// // // // // //           .map((id) => {
// // // // // //             const u = users.find((u) => u._id === id);
// // // // // //             if (!u) return null;

// // // // // //             return (
// // // // // //               <div
// // // // // //                 key={u._id}
// // // // // //                 style={{
// // // // // //                   display: "flex",
// // // // // //                   justifyContent: "space-between",
// // // // // //                   padding: "8px",
// // // // // //                   borderBottom: "1px solid #eee",
// // // // // //                   cursor: "pointer",
// // // // // //                 }}
// // // // // //                 onClick={() => nav(`/chat/${u._id}`)}
// // // // // //               >
// // // // // //                 <span>
// // // // // //                   {u.isGroupChat ? "👥 " : ""}
// // // // // //                   {u.name} {!u.isGroupChat && (u.isOnline ? "🟢" : "⚫")}
// // // // // //                 </span>

// // // // // //                 {!u.isGroupChat && (
// // // // // //                   <button
// // // // // //                     onClick={(e) => {
// // // // // //                       e.stopPropagation();
// // // // // //                       pinChat(u._id);
// // // // // //                     }}
// // // // // //                   >
// // // // // //                     📌
// // // // // //                   </button>
// // // // // //                 )}
// // // // // //               </div>
// // // // // //             );
// // // // // //           })}
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // import { useState, useEffect, useContext } from "react";
// // // // // // import { API } from "../api/axios";
// // // // // // import { AuthContext } from "../context/AuthContext";
// // // // // // import { useNavigate } from "react-router-dom";
// // // // // // import Navbar from "../components/Navbar";
// // // // // // export default function Home() {
// // // // // //   const { user } = useContext(AuthContext);
// // // // // //   const nav = useNavigate();

// // // // // //   const [users, setUsers] = useState([]);
// // // // // //   const [filteredUsers, setFilteredUsers] = useState([]);
// // // // // //   const [search, setSearch] = useState("");
// // // // // //   const [showGroupModal, setShowGroupModal] = useState(false);
// // // // // //   const [groupName, setGroupName] = useState("");
// // // // // //   const [groupUsers, setGroupUsers] = useState([]);
// // // // // //   const [pinnedChats, setPinnedChats] = useState([]);

// // // // // //   // FETCH USERS
// // // // // //   const fetchUsers = async () => {
// // // // // //     try {
// // // // // //       const { data } = await API.get("/api/user/search?search=");

// // // // // //       const normalizedUsers = data
// // // // // //         .filter((u) => u._id !== user._id)
// // // // // //         .map((u) => ({
// // // // // //           ...u,
// // // // // //           isGroupChat: u.isGroupChat || false,
// // // // // //           name: u.name || "Unnamed",
// // // // // //           isOnline: u.isOnline || false,
// // // // // //         }));

// // // // // //       // Merge existing groups to avoid overwriting
// // // // // //       setUsers((prev) => {
// // // // // //         const existingGroups = prev.filter((u) => u.isGroupChat);
// // // // // //         return [...existingGroups, ...normalizedUsers];
// // // // // //       });
// // // // // //     } catch (err) {
// // // // // //       console.error(err);
// // // // // //     }
// // // // // //   };

// // // // // //   useEffect(() => {
// // // // // //     fetchUsers();
// // // // // //   }, []);

// // // // // //   // FILTER USERS ON SEARCH
// // // // // //   useEffect(() => {
// // // // // //     setFilteredUsers(
// // // // // //       users.filter((u) =>
// // // // // //         (u.name || "").toLowerCase().includes(search.toLowerCase())
// // // // // //       )
// // // // // //     );
// // // // // //   }, [search, users]);

// // // // // //   // PIN CHAT
// // // // // //   const pinChat = (id) => {
// // // // // //     if (!pinnedChats.includes(id)) {
// // // // // //       setPinnedChats([id, ...pinnedChats]);
// // // // // //     }
// // // // // //   };

// // // // // //   // CREATE GROUP
// // // // // //   const createGroup = async () => {
// // // // // //     if (!groupName.trim() || groupUsers.length === 0) {
// // // // // //       alert("Please enter group name and select users");
// // // // // //       return;
// // // // // //     }

// // // // // //     try {
// // // // // //       const { data } = await API.post("/api/chat/group", {
// // // // // //         name: groupName,
// // // // // //         users: groupUsers,
// // // // // //       });

// // // // // //       const group = data.chat || data;

// // // // // //       const normalizedGroup = {
// // // // // //         ...group,
// // // // // //         name: group.name || group.chatName || "Unnamed Group",
// // // // // //         isGroupChat: true,
// // // // // //         isOnline: false,
// // // // // //       };

// // // // // //       setUsers((prev) => [normalizedGroup, ...prev]);
// // // // // //       alert(`Group "${normalizedGroup.name}" created ✅`);

// // // // // //       setShowGroupModal(false);
// // // // // //       setGroupName("");
// // // // // //       setGroupUsers([]);
// // // // // //     } catch (err) {
// // // // // //       console.error(err);
// // // // // //       alert("Failed to create group ❌");
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
// // // // // //       <h2>Home</h2>
// // // // // // <Navbar />
// // // // // //       {/* SEARCH */}
// // // // // //       <input
// // // // // //         placeholder="Search users or groups..."
// // // // // //         style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
// // // // // //         value={search}
// // // // // //         onChange={(e) => setSearch(e.target.value)}
// // // // // //       />

// // // // // //       {/* CREATE GROUP */}
// // // // // //       <button onClick={() => setShowGroupModal(true)}>Create Group ➕</button>

// // // // // //       {showGroupModal && (
// // // // // //         <div
// // // // // //           style={{
// // // // // //             border: "1px solid #ccc",
// // // // // //             padding: "10px",
// // // // // //             margin: "10px 0",
// // // // // //             borderRadius: "8px",
// // // // // //           }}
// // // // // //         >
// // // // // //           <h3>Create Group</h3>
// // // // // //           <input
// // // // // //             placeholder="Group Name"
// // // // // //             style={{ width: "100%", marginBottom: "5px", padding: "6px" }}
// // // // // //             value={groupName}
// // // // // //             onChange={(e) => setGroupName(e.target.value)}
// // // // // //           />

// // // // // //           <select
// // // // // //             multiple
// // // // // //             style={{ width: "100%", marginBottom: "5px", padding: "6px" }}
// // // // // //             value={groupUsers}
// // // // // //             onChange={(e) =>
// // // // // //               setGroupUsers(
// // // // // //                 Array.from(e.target.selectedOptions, (option) => option.value)
// // // // // //               )
// // // // // //             }
// // // // // //           >
// // // // // //             {users
// // // // // //               .filter((u) => !u.isGroupChat)
// // // // // //               .map((u) => (
// // // // // //                 <option key={u._id} value={u._id}>
// // // // // //                   {u.name}
// // // // // //                 </option>
// // // // // //               ))}
// // // // // //           </select>

// // // // // //           <button onClick={createGroup}>Create</button>
// // // // // //           <button onClick={() => setShowGroupModal(false)}>Cancel</button>
// // // // // //         </div>
// // // // // //       )}

// // // // // //       {/* USERS + GROUPS LIST */}
// // // // // //       <div style={{ marginTop: "10px" }}>
// // // // // //         {[...pinnedChats, ...filteredUsers.map((u) => u._id)]
// // // // // //           .filter((v, i, a) => a.indexOf(v) === i)
// // // // // //           .map((id) => {
// // // // // //             const u = users.find((u) => u._id === id);
// // // // // //             if (!u) return null;

// // // // // //             return (
// // // // // //               <div
// // // // // //                 key={u._id}
// // // // // //                 style={{
// // // // // //                   display: "flex",
// // // // // //                   justifyContent: "space-between",
// // // // // //                   padding: "8px",
// // // // // //                   borderBottom: "1px solid #eee",
// // // // // //                   cursor: "pointer",
// // // // // //                 }}
// // // // // //                 onClick={() => nav(`/chat/${u._id}`)}
// // // // // //               >
// // // // // //                 <span>
// // // // // //                   {u.isGroupChat ? "👥 " : ""}
// // // // // //                   {u.name} {!u.isGroupChat && (u.isOnline ? "🟢" : "⚫")}
// // // // // //                 </span>

// // // // // //                 {!u.isGroupChat && (
// // // // // //                   <button
// // // // // //                     onClick={(e) => {
// // // // // //                       e.stopPropagation();
// // // // // //                       pinChat(u._id);
// // // // // //                     }}
// // // // // //                   >
// // // // // //                     📌
// // // // // //                   </button>
// // // // // //                 )}
// // // // // //               </div>
// // // // // //             );
// // // // // //           })}
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // //final crt above

// // // // // import { useState, useEffect, useContext } from "react";
// // // // // import { API } from "../api/axios";
// // // // // import { AuthContext } from "../context/AuthContext";
// // // // // import { useNavigate } from "react-router-dom";
// // // // // import Navbar from "../components/Navbar";

// // // // // export default function Home() {
// // // // //   const { user } = useContext(AuthContext);
// // // // //   const nav = useNavigate();

// // // // //   const [users, setUsers] = useState([]);
// // // // //   const [filteredUsers, setFilteredUsers] = useState([]);
// // // // //   const [search, setSearch] = useState("");
// // // // //   const [showGroupModal, setShowGroupModal] = useState(false);
// // // // //   const [groupName, setGroupName] = useState("");
// // // // //   const [groupUsers, setGroupUsers] = useState([]);
// // // // //   const [pinnedChats, setPinnedChats] = useState([]);

// // // // //   // FETCH USERS
// // // // //   const fetchUsers = async () => {
// // // // //     try {
// // // // //       const { data } = await API.get("/api/user/search?search=");
// // // // //       const normalizedUsers = data
// // // // //         .filter((u) => u._id !== user._id)
// // // // //         .map((u) => ({
// // // // //           ...u,
// // // // //           isGroupChat: u.isGroupChat || false,
// // // // //           name: u.name || "Unnamed",
// // // // //           isOnline: u.isOnline || false,
// // // // //         }));
// // // // //       setUsers((prev) => {
// // // // //         const existingGroups = prev.filter((u) => u.isGroupChat);
// // // // //         return [...existingGroups, ...normalizedUsers];
// // // // //       });
// // // // //     } catch (err) {
// // // // //       console.error(err);
// // // // //     }
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     fetchUsers();
// // // // //   }, []);

// // // // //   useEffect(() => {
// // // // //     setFilteredUsers(
// // // // //       users.filter((u) =>
// // // // //         (u.name || "").toLowerCase().includes(search.toLowerCase())
// // // // //       )
// // // // //     );
// // // // //   }, [search, users]);

// // // // //   const pinChat = (id) => {
// // // // //     if (!pinnedChats.includes(id)) {
// // // // //       setPinnedChats([id, ...pinnedChats]);
// // // // //     }
// // // // //   };

// // // // //   const createGroup = async () => {
// // // // //     if (!groupName.trim() || groupUsers.length === 0) {
// // // // //       alert("Please enter group name and select users");
// // // // //       return;
// // // // //     }
// // // // //     try {
// // // // //       const { data } = await API.post("/api/chat/group", {
// // // // //         name: groupName,
// // // // //         users: groupUsers,
// // // // //       });
// // // // //       const group = data.chat || data;
// // // // //       const normalizedGroup = {
// // // // //         ...group,
// // // // //         name: group.name || group.chatName || "Unnamed Group",
// // // // //         isGroupChat: true,
// // // // //         isOnline: false,
// // // // //       };
// // // // //       setUsers((prev) => [normalizedGroup, ...prev]);
// // // // //       alert(`Group "${normalizedGroup.name}" created ✅`);
// // // // //       setShowGroupModal(false);
// // // // //       setGroupName("");
// // // // //       setGroupUsers([]);
// // // // //     } catch (err) {
// // // // //       console.error(err);
// // // // //       alert("Failed to create group ❌");
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-50">
// // // // //       <Navbar />

// // // // //       <div className="max-w-3xl mx-auto p-4">
// // // // //         {/* Search */}
// // // // //         <input
// // // // //           placeholder="Search users or groups..."
// // // // //           value={search}
// // // // //           onChange={(e) => setSearch(e.target.value)}
// // // // //           className="w-full mb-4 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
// // // // //         />

// // // // //         {/* Create Group Button */}
// // // // //         <button
// // // // //           onClick={() => setShowGroupModal(true)}
// // // // //           className="mb-4 px-4 py-2 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition"
// // // // //         >
// // // // //           Create Group ➕
// // // // //         </button>

// // // // //         {/* Group Modal */}
// // // // //         {showGroupModal && (
// // // // //           <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-lg mb-4">
// // // // //             <h3 className="text-xl font-semibold mb-2">Create Group</h3>
// // // // //             <input
// // // // //               placeholder="Group Name"
// // // // //               value={groupName}
// // // // //               onChange={(e) => setGroupName(e.target.value)}
// // // // //               className="w-full mb-2 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
// // // // //             />
// // // // //             <select
// // // // //               multiple
// // // // //               value={groupUsers}
// // // // //               onChange={(e) =>
// // // // //                 setGroupUsers(
// // // // //                   Array.from(e.target.selectedOptions, (option) => option.value)
// // // // //                 )
// // // // //               }
// // // // //               className="w-full mb-2 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
// // // // //             >
// // // // //               {users
// // // // //                 .filter((u) => !u.isGroupChat)
// // // // //                 .map((u) => (
// // // // //                   <option key={u._id} value={u._id}>
// // // // //                     {u.name}
// // // // //                   </option>
// // // // //                 ))}
// // // // //             </select>
// // // // //             <div className="flex justify-end gap-2 mt-2">
// // // // //               <button
// // // // //                 onClick={createGroup}
// // // // //                 className="px-4 py-2 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition"
// // // // //               >
// // // // //                 Create
// // // // //               </button>
// // // // //               <button
// // // // //                 onClick={() => setShowGroupModal(false)}
// // // // //                 className="px-4 py-2 bg-gray-300 text-gray-700 rounded-xl hover:bg-gray-400 transition"
// // // // //               >
// // // // //                 Cancel
// // // // //               </button>
// // // // //             </div>
// // // // //           </div>
// // // // //         )}

// // // // //         {/* Users & Groups List */}
// // // // //         <div className="space-y-2">
// // // // //           {[...pinnedChats, ...filteredUsers.map((u) => u._id)]
// // // // //             .filter((v, i, a) => a.indexOf(v) === i)
// // // // //             .map((id) => {
// // // // //               const u = users.find((u) => u._id === id);
// // // // //               if (!u) return null;
// // // // //               return (
// // // // //                 <div
// // // // //                   key={u._id}
// // // // //                   onClick={() => nav(`/chat/${u._id}`)}
// // // // //                   className="flex justify-between items-center bg-white/70 backdrop-blur-md px-4 py-3 rounded-xl shadow hover:bg-white/80 cursor-pointer transition"
// // // // //                 >
// // // // //                   <div className="flex items-center gap-3">
// // // // //                     {/* Online Indicator */}
// // // // //                     {!u.isGroupChat && (
// // // // //                       <span
// // // // //                         className={`w-3 h-3 rounded-full ${
// // // // //                           u.isOnline ? "bg-green-500" : "bg-gray-400"
// // // // //                         }`}
// // // // //                       ></span>
// // // // //                     )}
// // // // //                     <span className="font-medium text-gray-800">
// // // // //                       {u.isGroupChat ? "👥 " : ""}
// // // // //                       {u.name}
// // // // //                     </span>
// // // // //                   </div>

// // // // //                   {/* Pin Chat */}
// // // // //                   {!u.isGroupChat && (
// // // // //                     <button
// // // // //                       onClick={(e) => {
// // // // //                         e.stopPropagation();
// // // // //                         pinChat(u._id);
// // // // //                       }}
// // // // //                       className="text-gray-600 hover:text-purple-500 transition"
// // // // //                     >
// // // // //                       📌
// // // // //                     </button>
// // // // //                   )}
// // // // //                 </div>
// // // // //               );
// // // // //             })}
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // import { useState, useEffect, useContext } from "react";
// // // // import { API } from "../api/axios";
// // // // import { AuthContext } from "../context/AuthContext";
// // // // import { useNavigate } from "react-router-dom";
// // // // import Navbar from "../components/Navbar";

// // // // export default function Home() {
// // // //   const { user } = useContext(AuthContext);
// // // //   const nav = useNavigate();

// // // //   const [users, setUsers] = useState([]);
// // // //   const [filteredUsers, setFilteredUsers] = useState([]);
// // // //   const [search, setSearch] = useState("");
// // // //   const [showGroupModal, setShowGroupModal] = useState(false);
// // // //   const [groupName, setGroupName] = useState("");
// // // //   const [groupUsers, setGroupUsers] = useState([]);
// // // //   const [pinnedChats, setPinnedChats] = useState([]);

// // // //   // Fetch users
// // // //   const fetchUsers = async () => {
// // // //     try {
// // // //       const { data } = await API.get("/api/user/search?search=");
// // // //       const normalizedUsers = data
// // // //         .filter((u) => u._id !== user._id)
// // // //         .map((u) => ({
// // // //           ...u,
// // // //           isGroupChat: u.isGroupChat || false,
// // // //           name: u.name || "Unnamed",
// // // //           isOnline: u.isOnline || false,
// // // //           avatar: u.avatar || `https://i.pravatar.cc/150?u=${u._id}`, // placeholder avatar
// // // //           lastMessage: u.lastMessage || "Say hi! 👋",
// // // //           lastMessageTime: u.lastMessageTime || "Now",
// // // //         }));
// // // //       setUsers((prev) => {
// // // //         const existingGroups = prev.filter((u) => u.isGroupChat);
// // // //         return [...existingGroups, ...normalizedUsers];
// // // //       });
// // // //     } catch (err) {
// // // //       console.error(err);
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     fetchUsers();
// // // //   }, []);

// // // //   useEffect(() => {
// // // //     setFilteredUsers(
// // // //       users.filter((u) =>
// // // //         (u.name || "").toLowerCase().includes(search.toLowerCase())
// // // //       )
// // // //     );
// // // //   }, [search, users]);

// // // //   const pinChat = (id) => {
// // // //     if (!pinnedChats.includes(id)) {
// // // //       setPinnedChats([id, ...pinnedChats]);
// // // //     }
// // // //   };

// // // //   const createGroup = async () => {
// // // //     if (!groupName.trim() || groupUsers.length === 0) {
// // // //       alert("Please enter group name and select users");
// // // //       return;
// // // //     }
// // // //     try {
// // // //       const { data } = await API.post("/api/chat/group", {
// // // //         name: groupName,
// // // //         users: groupUsers,
// // // //       });
// // // //       const group = data.chat || data;
// // // //       const normalizedGroup = {
// // // //         ...group,
// // // //         name: group.name || group.chatName || "Unnamed Group",
// // // //         isGroupChat: true,
// // // //         isOnline: false,
// // // //         avatar: `https://i.pravatar.cc/150?u=${group._id}`,
// // // //         lastMessage: "Group created 🎉",
// // // //         lastMessageTime: "Now",
// // // //       };
// // // //       setUsers((prev) => [normalizedGroup, ...prev]);
// // // //       alert(`Group "${normalizedGroup.name}" created ✅`);
// // // //       setShowGroupModal(false);
// // // //       setGroupName("");
// // // //       setGroupUsers([]);
// // // //     } catch (err) {
// // // //       console.error(err);
// // // //       alert("Failed to create group ❌");
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-50">
// // // //       <Navbar />

// // // //       {/* Full width container */}
// // // //       <div className="w-full max-w-5xl mx-auto px-2 sm:px-4 py-4">

// // // //         {/* Search bar */}
// // // //         <input
// // // //           type="text"
// // // //           placeholder="Search users or groups..."
// // // //           value={search}
// // // //           onChange={(e) => setSearch(e.target.value)}
// // // //           className="w-full mb-4 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
// // // //         />

// // // //         {/* Create Group */}
// // // //         <button
// // // //           onClick={() => setShowGroupModal(true)}
// // // //           className="mb-4 px-4 py-2 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition"
// // // //         >
// // // //           Create Group ➕
// // // //         </button>

// // // //         {/* Group Modal */}
// // // //         {showGroupModal && (
// // // //           <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-lg mb-4">
// // // //             <h3 className="text-xl font-semibold mb-2">Create Group</h3>
// // // //             <input
// // // //               placeholder="Group Name"
// // // //               value={groupName}
// // // //               onChange={(e) => setGroupName(e.target.value)}
// // // //               className="w-full mb-2 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
// // // //             />
// // // //             <select
// // // //               multiple
// // // //               value={groupUsers}
// // // //               onChange={(e) =>
// // // //                 setGroupUsers(
// // // //                   Array.from(e.target.selectedOptions, (option) => option.value)
// // // //                 )
// // // //               }
// // // //               className="w-full mb-2 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
// // // //             >
// // // //               {users
// // // //                 .filter((u) => !u.isGroupChat)
// // // //                 .map((u) => (
// // // //                   <option key={u._id} value={u._id}>
// // // //                     {u.name}
// // // //                   </option>
// // // //                 ))}
// // // //             </select>
// // // //             <div className="flex justify-end gap-2 mt-2">
// // // //               <button
// // // //                 onClick={createGroup}
// // // //                 className="px-4 py-2 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition"
// // // //               >
// // // //                 Create
// // // //               </button>
// // // //               <button
// // // //                 onClick={() => setShowGroupModal(false)}
// // // //                 className="px-4 py-2 bg-gray-300 text-gray-700 rounded-xl hover:bg-gray-400 transition"
// // // //               >
// // // //                 Cancel
// // // //               </button>
// // // //             </div>
// // // //           </div>
// // // //         )}

// // // //         {/* Users & Groups List */}
// // // //         <div className="space-y-2">
// // // //           {[...pinnedChats, ...filteredUsers.map((u) => u._id)]
// // // //             .filter((v, i, a) => a.indexOf(v) === i)
// // // //             .map((id) => {
// // // //               const u = users.find((u) => u._id === id);
// // // //               if (!u) return null;

// // // //               return (
// // // //                 <div
// // // //                   key={u._id}
// // // //                   onClick={() => nav(`/chat/${u._id}`)}
// // // //                   className="flex justify-between items-center bg-white/70 backdrop-blur-md px-4 py-3 rounded-xl shadow hover:bg-white/80 cursor-pointer transition"
// // // //                 >
// // // //                   <div className="flex items-center gap-3">
// // // //                     <img
// // // //                       src={u.avatar}
// // // //                       alt={u.name}
// // // //                       className="w-12 h-12 rounded-full object-cover"
// // // //                     />
// // // //                     <div className="flex flex-col">
// // // //                       <span className="font-medium text-gray-800">
// // // //                         {u.isGroupChat ? "👥 " : ""}
// // // //                         {u.name}
// // // //                       </span>
// // // //                       <span className="text-gray-500 text-sm truncate max-w-xs">
// // // //                         {u.lastMessage}
// // // //                       </span>
// // // //                     </div>
// // // //                   </div>

// // // //                   <div className="flex items-center gap-3">
// // // //                     <span className="text-gray-400 text-sm">{u.lastMessageTime}</span>
// // // //                     {!u.isGroupChat && (
// // // //                       <button
// // // //                         onClick={(e) => {
// // // //                           e.stopPropagation();
// // // //                           pinChat(u._id);
// // // //                         }}
// // // //                         className="text-gray-600 hover:text-purple-500 transition"
// // // //                       >
// // // //                         📌
// // // //                       </button>
// // // //                     )}
// // // //                   </div>
// // // //                 </div>
// // // //               );
// // // //             })}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }


// import { useState, useEffect, useContext } from "react";
// import { API } from "../api/axios";
// import { AuthContext } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";

// export default function Home() {
//   const { user } = useContext(AuthContext);
//   const nav = useNavigate();

//   const [users, setUsers] = useState([]);
//   const [filteredUsers, setFilteredUsers] = useState([]);
//   const [search, setSearch] = useState("");
//   const [showGroupModal, setShowGroupModal] = useState(false);
//   const [groupName, setGroupName] = useState("");
//   const [groupUsers, setGroupUsers] = useState([]);
//   const [pinnedChats, setPinnedChats] = useState([]);
//   const [statuses, setStatuses] = useState([]);

//   // FETCH USERS
//   const fetchUsers = async () => {
//     try {
//       const { data } = await API.get("/api/user/search?search=");
//       const normalizedUsers = data
//         .filter((u) => u._id !== user._id)
//         .map((u) => ({
//           ...u,
//           isGroupChat: u.isGroupChat || false,
//           name: u.name || "Unnamed",
//           isOnline: u.isOnline || false,
//           avatar: u.avatar || `https://i.pravatar.cc/150?u=${u._id}`,
//           lastMessage: u.lastMessage || "Say hi! 👋",
//           lastMessageTime: u.lastMessageTime || "Now",
//         }));
//       setUsers((prev) => {
//         const existingGroups = prev.filter((u) => u.isGroupChat);
//         return [...existingGroups, ...normalizedUsers];
//       });
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // FETCH STATUS/STORIES
//   const fetchStatus = async () => {
//     try {
//       const { data } = await API.get("/api/status");
//       setStatuses(data);
//     } catch (err) {
//       console.error(err);
//     }
//   };



//   useEffect(() => {
//     fetchUsers();
//     fetchStatus();
//   }, []);


//   useEffect(() => {
//     setFilteredUsers(
//       users.filter((u) =>
//         (u.name || "").toLowerCase().includes(search.toLowerCase())
//       )
//     );
//   }, [search, users]);

//   const pinChat = (id) => {
//     if (!pinnedChats.includes(id)) setPinnedChats([id, ...pinnedChats]);
//   };

//   const createGroup = async () => {
//     if (!groupName.trim() || groupUsers.length === 0) {
//       alert("Please enter group name and select users");
//       return;
//     }
//     try {
//       const { data } = await API.post("/api/chat/group", {
//         name: groupName,
//         users: groupUsers,
//       });
//       const group = data.chat || data;
//       const normalizedGroup = {
//         ...group,
//         name: group.name || group.chatName || "Unnamed Group",
//         isGroupChat: true,
//         isOnline: false,
//         avatar: `https://i.pravatar.cc/150?u=${group._id}`,
//         lastMessage: "Group created 🎉",
//         lastMessageTime: "Now",
//       };
//       setUsers((prev) => [normalizedGroup, ...prev]);
//       alert(`Group "${normalizedGroup.name}" created ✅`);
//       setShowGroupModal(false);
//       setGroupName("");
//       setGroupUsers([]);
//     } catch (err) {
//       console.error(err);
//       alert("Failed to create group ❌");
//     }
//   };

//   const addStatus = async () => {
//     const url = prompt("Enter image URL");
//     if (!url) return;
//     await API.post("/api/status", { type: "image", mediaUrl: url });
//     fetchStatus();
//   };

//   const deleteStatus = async (id) => {
//     await API.delete(`/api/status/${id}`);
//     fetchStatus();
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-100 via-purple-50 to-pink-50">
//       <Navbar />

//       {/* Full page layout */}
//       <div className="flex flex-1 w-full max-w-6xl mx-auto px-2 sm:px-4 py-4 gap-4">

//         {/* Left panel (can hold profile, menu, etc.) */}
//         <div className="hidden md:flex flex-col w-1/5 gap-4">
//           <div className="bg-white/30 backdrop-blur-md p-4 rounded-xl shadow text-center font-semibold">
//             {user.name}
//           </div>
//           <div className="bg-white/30 backdrop-blur-md p-4 rounded-xl shadow text-center cursor-pointer">
//             Profile
//           </div>
//           <div className="bg-white/30 backdrop-blur-md p-4 rounded-xl shadow text-center cursor-pointer">
//             Settings
//           </div>
//         </div>

//         {/* Right/Main panel */}
//         <div className="flex-1 flex flex-col gap-4">

//           {/* Status / Story section */}
//           <div className="bg-white/30 backdrop-blur-md p-4 rounded-xl shadow flex items-center gap-3 overflow-x-auto">
//             <button
//               onClick={addStatus}
//               className="flex-shrink-0 bg-purple-500 text-white px-4 py-2 rounded-full"
//             >
//               + Your Status
//             </button>
//             {statuses.map((s) => (
//               <div key={s._id} className="flex flex-col items-center flex-shrink-0">
//                 <img
//                   src={s.mediaUrl}
//                   className="w-16 h-16 rounded-full object-cover border-2 border-purple-500"
//                   alt="status"
//                 />
//                 <button
//                   onClick={() => deleteStatus(s._id)}
//                   className="text-red-500 text-xs mt-1"
//                 >
//                   Delete
//                 </button>
//               </div>
//             ))}
//           </div>

//           {/* Search + Create Group */}
//           <div className="flex gap-2">
//             <input
//               type="text"
//               placeholder="Search users or groups..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="flex-1 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
//             />
//             <button
//               onClick={() => setShowGroupModal(true)}
//               className="px-4 py-2 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition"
//             >
//               Create Group ➕
//             </button>
//           </div>

//           {/* Group Modal */}
//           {showGroupModal && (
//             <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-lg mb-4">
//               <h3 className="text-xl font-semibold mb-2">Create Group</h3>
//               <input
//                 placeholder="Group Name"
//                 value={groupName}
//                 onChange={(e) => setGroupName(e.target.value)}
//                 className="w-full mb-2 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
//               />
//               <select
//                 multiple
//                 value={groupUsers}
//                 onChange={(e) =>
//                   setGroupUsers(
//                     Array.from(e.target.selectedOptions, (option) => option.value)
//                   )
//                 }
//                 className="w-full mb-2 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
//               >
//                 {users
//                   .filter((u) => !u.isGroupChat)
//                   .map((u) => (
//                     <option key={u._id} value={u._id}>
//                       {u.name}
//                     </option>
//                   ))}
//               </select>
//               <div className="flex justify-end gap-2 mt-2">
//                 <button
//                   onClick={createGroup}
//                   className="px-4 py-2 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition"
//                 >
//                   Create
//                 </button>
//                 <button
//                   onClick={() => setShowGroupModal(false)}
//                   className="px-4 py-2 bg-gray-300 text-gray-700 rounded-xl hover:bg-gray-400 transition"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           )}

//           {/* Users & Groups List */}
//           <div className="space-y-2 flex-1 overflow-y-auto">
//             {[...pinnedChats, ...filteredUsers.map((u) => u._id)]
//               .filter((v, i, a) => a.indexOf(v) === i)
//               .map((id) => {
//                 const u = users.find((u) => u._id === id);
//                 if (!u) return null;

//                 return (
//                   <div
//                     key={u._id}
//                     onClick={() => nav(`/chat/${u._id}`)}
//                     className="flex justify-between items-center bg-white/70 backdrop-blur-md px-4 py-3 rounded-xl shadow hover:bg-white/80 cursor-pointer transition"
//                   >
//                     <div className="flex items-center gap-3">
//                       <img
//                         src={u.avatar}
//                         alt={u.name}
//                         className="w-12 h-12 rounded-full object-cover"
//                       />
//                       <div className="flex flex-col">
//                         <span className="font-medium text-gray-800">
//                           {u.isGroupChat ? "👥 " : ""}
//                           {u.name}
//                         </span>
//                         <span className="text-gray-500 text-sm truncate max-w-xs">
//                           {u.lastMessage}
//                         </span>
//                       </div>
//                     </div>

//                     <div className="flex items-center gap-3">
//                       <span className="text-gray-400 text-sm">{u.lastMessageTime}</span>
//                       {!u.isGroupChat && (
//                         <button
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             pinChat(u._id);
//                           }}
//                           className="text-gray-600 hover:text-purple-500 transition"
//                         >
//                           📌
//                         </button>
//                       )}
//                     </div>
//                   </div>
//                 );
//               })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// // import { useState, useEffect, useContext } from "react";
// // import { API } from "../api/axios";
// // import { AuthContext } from "../context/AuthContext";
// // import { useNavigate } from "react-router-dom";
// // import Navbar from "../components/Navbar";

// // export default function Home() {
// //   const { user } = useContext(AuthContext);
// //   const nav = useNavigate();

// //   const [users, setUsers] = useState([]);
// //   const [filteredUsers, setFilteredUsers] = useState([]);
// //   const [search, setSearch] = useState("");
// //   const [showGroupModal, setShowGroupModal] = useState(false);
// //   const [groupName, setGroupName] = useState("");
// //   const [groupUsers, setGroupUsers] = useState([]);
// //   const [pinnedChats, setPinnedChats] = useState([]);
// //   const [statuses, setStatuses] = useState([]);
// //   const [uploading, setUploading] = useState(false);

// //   // FETCH USERS
// //   const fetchUsers = async () => {
// //     try {
// //       const { data } = await API.get("/api/user/search?search=");
// //       const normalizedUsers = data
// //         .filter((u) => u._id !== user._id)
// //         .map((u) => ({
// //           ...u,
// //           isGroupChat: u.isGroupChat || false,
// //           name: u.name || "Unnamed",
// //           isOnline: u.isOnline || false,
// //           avatar: u.avatar || `https://i.pravatar.cc/150?u=${u._id}`,
// //           lastMessage: u.lastMessage || "Say hi! 👋",
// //           lastMessageTime: u.lastMessageTime || "Now",
// //         }));
// //       // setUsers((prev) => {
// //       //   const existingGroups = prev.filter((u) => u.isGroupChat);
// //       //   return [...existingGroups, ...normalizedUsers];
// //       // });
// //       setUsers((prev) => {
// //   // Keep previous individual users who are not in the new fetch
// //   const prevIndividualUsers = prev.filter(
// //     u => !normalizedUsers.some(nu => nu._id === u._id) && !u.isGroupChat
// //   );

// //   // Keep previous groups
// //   const prevGroups = prev.filter(u => u.isGroupChat);

// //   // Merge all: previous individual users + previous groups + newly fetched users
// //   return [...prevIndividualUsers, ...prevGroups, ...normalizedUsers];
// // });
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   };

// //   // FETCH STATUS
// //   const fetchStatus = async () => {
// //     try {
// //       const { data } = await API.get("/api/status");
// //       setStatuses(data);
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchUsers();
// //     fetchStatus();
// //   }, []);

// //   useEffect(() => {
// //     setFilteredUsers(
// //       users.filter((u) =>
// //         (u.name || "").toLowerCase().includes(search.toLowerCase())
// //       )
// //     );
// //   }, [search, users]);

// //   // PIN CHAT
// //   const pinChat = (id) => {
// //     if (!pinnedChats.includes(id)) setPinnedChats([id, ...pinnedChats]);
// //   };

// //   // CREATE GROUP
// //   const createGroup = async () => {
// //     if (!groupName.trim() || groupUsers.length === 0) {
// //       alert("Please enter group name and select users");
// //       return;
// //     }
// //     try {
// //       const { data } = await API.post(
// //         "/api/chat/group",
// //         { name: groupName, users: groupUsers },
// //         { headers: { Authorization: `Bearer ${user.token}` } }
// //       );
// //       const group = data.chat || data;
// //       const normalizedGroup = {
// //         ...group,
// //         name: group.name || group.chatName || "Unnamed Group",
// //         isGroupChat: true,
// //         isOnline: false,
// //         avatar: `https://i.pravatar.cc/150?u=${group._id}`,
// //         lastMessage: "Group created 🎉",
// //         lastMessageTime: "Now",
// //       };
// //       setUsers((prev) => [normalizedGroup, ...prev]);
// //       alert(`Group "${normalizedGroup.name}" created ✅`);
// //       setShowGroupModal(false);
// //       setGroupName("");
// //       setGroupUsers([]);
// //     } catch (err) {
// //       console.error(err);
// //       alert("Failed to create group ❌");
// //     }
// //   };

// //   // STATUS ACTIONS
// //   const handleFileUpload = async (e) => {
// //     const file = e.target.files[0];
// //     if (!file) return;
// //     setUploading(true);
// //     try {
// //       // Upload to Cloudinary
// //       const formData = new FormData();
// //       formData.append("file", file);
// //       formData.append("upload_preset", "YOUR_CLOUDINARY_PRESET"); // replace with your preset

// //       const res = await fetch(
// //         "https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload",
// //         { method: "POST", body: formData }
// //       );

// //       const data = await res.json();
// //       const uploadedUrl = data.secure_url;

// //       // Save status to backend
// //       await API.post(
// //         "/api/status",
// //         { type: "image", mediaUrl: uploadedUrl },
// //         { headers: { Authorization: `Bearer ${user.token}` } }
// //       );
// //       fetchStatus();
// //     } catch (err) {
// //       console.error(err);
// //       alert("Failed to upload status ❌");
// //     } finally {
// //       setUploading(false);
// //       e.target.value = null; // reset input
// //     }
// //   };

// //   // const deleteStatus = async (id) => {
// //   //   try {
// //   //     await API.delete(`/api/status/${id}`, {
// //   //       headers: { Authorization: `Bearer ${user.token}` },
// //   //     });
// //   //     fetchStatus();
// //   //   } catch (err) {
// //   //     console.error(err);
// //   //     alert("Failed to delete status ❌");
// //   //   }
// //   // };

// //  const deleteStatus = async (id) => {
// //   try {
// //     await API.delete(`/api/status/${id}`, {
// //       headers: { Authorization: `Bearer ${user.token}` },
// //     });
// //     fetchStatus(); // refresh list
// //     alert("Status deleted ✅");
// //   } catch (err) {
// //     console.error(err);
// //     alert("Failed to delete status ❌");
// //   }
// // };

// //   const editStatus = async (s) => {
// //     const fileInput = document.createElement("input");
// //     fileInput.type = "file";
// //     fileInput.accept = "image/*";
// //     fileInput.onchange = async (e) => {
// //       const file = e.target.files[0];
// //       if (!file) return;
// //       setUploading(true);
// //       try {
// //         const formData = new FormData();
// //         formData.append("file", file);
// //         formData.append("upload_preset", "YOUR_CLOUDINARY_PRESET");

// //         const res = await fetch(
// //           "https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload",
// //           { method: "POST", body: formData }
// //         );

// //         const data = await res.json();
// //         const uploadedUrl = data.secure_url;

// //         await API.put(
// //           `/api/status/${s._id}`,
// //           { mediaUrl: uploadedUrl },
// //           { headers: { Authorization: `Bearer ${user.token}` } }
// //         );
// //         fetchStatus();
// //       } catch (err) {
// //         console.error(err);
// //         alert("Failed to edit status ❌");
// //       } finally {
// //         setUploading(false);
// //       }
// //     };
// //     fileInput.click();
// //   };

// //   const viewStatus = (url) => {
// //     window.open(url, "_blank");
// //   };

// //   return (
// //     <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-100 via-purple-50 to-pink-50">
// //       <Navbar />

// //       <div className="flex flex-1 w-full max-w-6xl mx-auto px-2 sm:px-4 py-4 gap-4">
// //         {/* Left panel */}
// //         <div className="hidden md:flex flex-col w-1/5 gap-4">
// //           <div className="bg-white/30 backdrop-blur-md p-4 rounded-xl shadow text-center font-semibold">
// //             {user.name}
// //           </div>
// //           <div className="bg-white/30 backdrop-blur-md p-4 rounded-xl shadow text-center cursor-pointer">
// //             Profile
// //           </div>
// //           <div className="bg-white/30 backdrop-blur-md p-4 rounded-xl shadow text-center cursor-pointer">
// //             Settings
// //           </div>
// //         </div>

// //         {/* Main panel */}
// //         <div className="flex-1 flex flex-col gap-4">
// //           {/* Status / Stories */}
// //           <div className="bg-white/30 backdrop-blur-md p-4 rounded-xl shadow flex items-center gap-3 overflow-x-auto">
// //             <label
// //               className={`flex-shrink-0 px-4 py-2 rounded-full cursor-pointer ${
// //                 uploading ? "bg-gray-400" : "bg-purple-500 text-white"
// //               }`}
// //             >
// //               {uploading ? "Uploading..." : "+ Your Status"}
// //               <input
// //                 type="file"
// //                 accept="image/*"
// //                 className="hidden"
// //                 onChange={handleFileUpload}
// //                 disabled={uploading}
// //               />
// //             </label>
// //             {statuses.map((s) => (
// //               <div key={s._id} className="flex flex-col items-center flex-shrink-0 gap-1">
// //                 {/* <img
// //                   src={s.mediaUrl}
// //                   className="w-16 h-16 rounded-full object-cover border-2 border-purple-500 cursor-pointer"
// //                   alt="status"
// //                   onClick={() => viewStatus(s.mediaUrl)}
// //                 /> */}
// //                 <img
// //   src={s.mediaUrl}
// //   className="w-16 h-16 rounded-full border-2 border-purple-500 cursor-pointer"
// //   alt="status"
// //   onClick={() => nav(`/status/${s._id}`)} // navigate to StatusDetail page
// // />
// //                 <div className="flex gap-1">
// //                   <button
// //                     onClick={() => editStatus(s)}
// //                     className="text-blue-500 text-xs"
// //                   >
// //                     Edit
// //                   </button>
// //                   {/* <button
// //                     onClick={() => deleteStatus(s._id)}
// //                     className="text-red-500 text-xs"
// //                   >
// //                     Delete
// //                   </button> */}
// //                   {/* <button
// //   onClick={(e) => {
// //     e.stopPropagation();
// //     deleteStatus(s._id);
// //   }}
// // >
// //   Delete
// // </button> */}
// // <button
// //   onClick={(e) => { e.stopPropagation(); deleteStatus(s._id); }}
// // >
// //   Delete
// // </button>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>

// //           {/* Search + Create Group */}
// //           <div className="flex gap-2">
// //             <input
// //               type="text"
// //               placeholder="Search users or groups..."
// //               value={search}
// //               onChange={(e) => setSearch(e.target.value)}
// //               className="flex-1 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
// //             />
// //             <button
// //               onClick={() => setShowGroupModal(true)}
// //               className="px-4 py-2 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition"
// //             >
// //               Create Group ➕
// //             </button>
// //           </div>

// //           {/* Group modal and user list remain same */}
// //           {/* ... (same as previous Home page code) ... */}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// //sattus wrks crt


// // import { useState, useEffect, useContext } from "react";
// // import { API } from "../api/axios";
// // import { AuthContext } from "../context/AuthContext";
// // import { useNavigate } from "react-router-dom";
// // import Navbar from "../components/Navbar";
// // import { FiEdit2, FiTrash2 } from "react-icons/fi";

// // export default function Home() {
// //   const { user } = useContext(AuthContext);
// //   const nav = useNavigate();

// //   const [users, setUsers] = useState([]);
// //   const [filteredUsers, setFilteredUsers] = useState([]);
// //   const [search, setSearch] = useState("");
// //   const [showGroupModal, setShowGroupModal] = useState(false);
// //   const [groupName, setGroupName] = useState("");
// //   const [groupUsers, setGroupUsers] = useState([]);
// //   const [pinnedChats, setPinnedChats] = useState([]);
// //   const [statuses, setStatuses] = useState([]);
// //   const [uploading, setUploading] = useState(false);

// //   // -----------------------------
// //   // Fetch users and preserve old chats
// //   // -----------------------------
// //   const fetchUsersAndChats = async () => {
// //     try {
// //       const { data } = await API.get("/api/user/search?search=");

// //       const normalizedUsers = data
// //         .filter(u => u._id !== user._id)
// //         .map(u => ({
// //           _id: u._id,
// //           name: u.name || "Unnamed",
// //           isGroupChat: u.isGroupChat || false,
// //           isOnline: u.isOnline || false,
// //           avatar: u.avatar || `https://i.pravatar.cc/150?u=${u._id}`,
// //           lastMessage: u.lastMessage || "Say hi! 👋",
// //           lastMessageTime: u.lastMessageTime || "Now",
// //         }));

// //       setUsers(prev => {
// //         const existingIds = prev.map(u => u._id);
// //         const newUsers = normalizedUsers.filter(u => !existingIds.includes(u._id));
// //         return [...prev, ...newUsers];
// //       });
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   };

// //   // -----------------------------
// //   // Fetch statuses
// //   // -----------------------------
// //   const fetchStatus = async () => {
// //     try {
// //       const { data } = await API.get("/api/status");
// //       setStatuses(data);
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   };

// //   useEffect(() => {
// //     if (user) {
// //       fetchUsersAndChats();
// //       fetchStatus();
// //     }
// //   }, [user]);

// //   // -----------------------------
// //   // Filter users based on search
// //   // -----------------------------
// //   useEffect(() => {
// //     setFilteredUsers(
// //       users.filter(u =>
// //         (u.name || "").toLowerCase().includes(search.toLowerCase())
// //       )
// //     );
// //   }, [search, users]);

// //   // -----------------------------
// //   // Pin chat
// //   // -----------------------------
// //   const pinChat = id => {
// //     if (!pinnedChats.includes(id)) setPinnedChats([id, ...pinnedChats]);
// //   };

// //   // -----------------------------
// //   // Create group
// //   // -----------------------------
// //   const createGroup = async () => {
// //     if (!groupName.trim() || groupUsers.length === 0) {
// //       alert("Please enter group name and select users");
// //       return;
// //     }
// //     try {
// //       const { data } = await API.post(
// //         "/api/chat/group",
// //         { name: groupName, users: groupUsers },
// //         { headers: { Authorization: `Bearer ${user.token}` } }
// //       );

// //       const group = data.chat || data;
// //       const normalizedGroup = {
// //         ...group,
// //         name: group.name || group.chatName || "Unnamed Group",
// //         isGroupChat: true,
// //         isOnline: false,
// //         avatar: `https://i.pravatar.cc/150?u=${group._id}`,
// //         lastMessage: "Group created 🎉",
// //         lastMessageTime: "Now",
// //       };

// //       setUsers(prev => [normalizedGroup, ...prev]);
// //       alert(`Group "${normalizedGroup.name}" created ✅`);
// //       setShowGroupModal(false);
// //       setGroupName("");
// //       setGroupUsers([]);
// //     } catch (err) {
// //       console.error(err);
// //       alert("Failed to create group ❌");
// //     }
// //   };

// //   // -----------------------------
// //   // Status actions
// //   // -----------------------------
// //   const handleFileUpload = async e => {
// //     const file = e.target.files[0];
// //     if (!file) return;
// //     setUploading(true);
// //     try {
// //       const formData = new FormData();
// //       formData.append("file", file);
// //       formData.append("upload_preset", "YOUR_CLOUDINARY_PRESET");

// //       const res = await fetch(
// //         "https://api.cloudinary.com/v1_1/dhi8llpui/image/upload",
// //         { method: "POST", body: formData }
// //       );
// //       const data = await res.json();
// //       const uploadedUrl = data.secure_url;

// //       await API.post(
// //         "/api/status",
// //         { type: "image", mediaUrl: uploadedUrl },
// //         { headers: { Authorization: `Bearer ${user.token}` } }
// //       );
// //       fetchStatus();
// //     } catch (err) {
// //       console.error(err);
// //       alert("Failed to upload status ❌");
// //     } finally {
// //       setUploading(false);
// //       e.target.value = null;
// //     }
// //   };

// //   const deleteStatus = async id => {
// //     try {
// //       await API.delete(`/api/status/${id}`, {
// //         headers: { Authorization: `Bearer ${user.token}` },
// //       });
// //       fetchStatus();
// //       alert("Status deleted ✅");
// //     } catch (err) {
// //       console.error(err);
// //       alert("Failed to delete status ❌");
// //     }
// //   };

// //   const editStatus = async s => {
// //     const fileInput = document.createElement("input");
// //     fileInput.type = "file";
// //     fileInput.accept = "image/*";
// //     fileInput.onchange = async e => {
// //       const file = e.target.files[0];
// //       if (!file) return;
// //       setUploading(true);
// //       try {
// //         const formData = new FormData();
// //         formData.append("file", file);
// //         formData.append("upload_preset", "YOUR_CLOUDINARY_PRESET");

// //         const res = await fetch(
// //           "https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload",
// //           { method: "POST", body: formData }
// //         );
// //         const data = await res.json();
// //         const uploadedUrl = data.secure_url;

// //         await API.put(
// //           `/api/status/${s._id}`,
// //           { mediaUrl: uploadedUrl },
// //           { headers: { Authorization: `Bearer ${user.token}` } }
// //         );
// //         fetchStatus();
// //       } catch (err) {
// //         console.error(err);
// //         alert("Failed to edit status ❌");
// //       } finally {
// //         setUploading(false);
// //       }
// //     };
// //     fileInput.click();
// //   };

// //   // -----------------------------
// //   // View status detail
// //   // -----------------------------
// //   const viewStatus = id => {
// //     nav(`/status/${id}`);
// //   };

// //   return (
// //     <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-100 via-purple-50 to-pink-50">
// //       <Navbar />

// //       <div className="flex flex-1 w-full max-w-6xl mx-auto px-2 sm:px-4 py-4 gap-4">
// //         {/* Left panel */}
// //         <div className="hidden md:flex flex-col w-1/5 gap-4">
// //           <div className="bg-white/30 backdrop-blur-md p-4 rounded-xl shadow text-center font-semibold">
// //             {user.name}
// //           </div>
// //           <div className="bg-white/30 backdrop-blur-md p-4 rounded-xl shadow text-center cursor-pointer">
// //             Profile
// //           </div>
// //           <div className="bg-white/30 backdrop-blur-md p-4 rounded-xl shadow text-center cursor-pointer">
// //             Settings
// //           </div>
// //         </div>

       
// //         <div className="flex-1 flex flex-col gap-4">
// //           {/* Status / Stories */}
// //            <div className="bg-white/30 backdrop-blur-md p-4 rounded-xl shadow flex items-center gap-3 overflow-x-auto">
// //             <label
// //               className={`flex-shrink-0 px-4 py-2 rounded-full cursor-pointer ${
// //                 uploading ? "bg-gray-400" : "bg-purple-500 text-white"
// //               }`}
// //             >
// //               {uploading ? "Uploading..." : "+ Your Status"}
// //               <input
// //                 type="file"
// //                 accept="image/*"
// //                 className="hidden"
// //                 onChange={handleFileUpload}
// //                 disabled={uploading}
// //               />
// //             </label>
// //             {statuses.map(s => (
// //               <div
// //                 key={s._id}
// //                 className="flex flex-col items-center flex-shrink-0 gap-1"
// //               >
// //                 <img
// //                   src={s.mediaUrl}
// //                   className="w-16 h-16 rounded-full border-2 border-purple-500 cursor-pointer"
// //                   alt="status"
// //                   onClick={() => viewStatus(s._id)}
// //                 />
                

// // <div className="flex gap-2 mt-1">
// //   <button
// //     onClick={() => editStatus(s)}
// //     className="p-1.5 rounded-full bg-white/70 backdrop-blur-md shadow hover:bg-blue-100 hover:scale-110 transition"
// //   >
// //     <FiEdit2 size={14} className="text-blue-500" />
// //   </button>

// //   <button
// //     onClick={(e) => {
// //       e.stopPropagation();
// //       deleteStatus(s._id);
// //     }}
// //     className="p-1.5 rounded-full bg-white/70 backdrop-blur-md shadow hover:bg-red-100 hover:scale-110 transition"
// //   >
// //     <FiTrash2 size={14} className="text-red-500" />
// //   </button>
// // </div>

// //               </div>
// //             ))}  

// // </div>

           
// //           {/* </div> */}

// //           {/* Search + Create Group */}
// //           <div className="flex gap-2">
// //             <input
// //               type="text"
// //               placeholder="Search users or groups..."
// //               value={search}
// //               onChange={e => setSearch(e.target.value)}
// //               className="flex-1 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
// //             />
// //             {/* <button
// //               onClick={() => setShowGroupModal(true)}
// //               className="px-4 py-2 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition"
// //             >
// //               Create Group ➕
// //             </button> */}

// //             <button
// //   onClick={() => setShowGroupModal(true)}
// //   className="flex items-center gap-2 px-4 py-2 rounded-full 
// //              bg-gradient-to-r from-purple-500 to-pink-500 text-white 
// //              shadow-md hover:shadow-lg hover:scale-105 
// //              transition-all duration-200"
// // >
// //   <span className="text-lg">➕</span>
// //   <span className="font-medium">Create Group</span>
// // </button>
// //           </div>

// //           {/* User list */}
// //           <div className="flex flex-col gap-2 overflow-y-auto max-h-[60vh]">
// //             {[...pinnedChats, ...filteredUsers.map(u => u._id)]
// //               .filter((v, i, a) => a.indexOf(v) === i)
// //               .map(id => {
// //                 const u = users.find(u => u._id === id);
// //                 if (!u) return null;

// //                 return (
// //                   <div
// //                     key={u._id}
// //                     className="flex justify-between items-center p-2 rounded-xl hover:bg-white/50 cursor-pointer"
// //                     onClick={() => nav(`/chat/${u._id}`)}
// //                   >
// //                     <div className="flex items-center gap-2">
// //                       <img
// //                         src={u.avatar}
// //                         alt="avatar"
// //                         className="w-10 h-10 rounded-full"
// //                       />
// //                       <div>
// //                         <div className="font-semibold">
// //                           {u.isGroupChat ? "👥 " : ""}
// //                           {u.name}
// //                         </div>
// //                         <div className="text-sm text-gray-600">
// //                           {u.lastMessage}
// //                         </div>
// //                       </div>
// //                     </div>
// //                     <div className="flex items-center gap-2">
// //                       {!u.isGroupChat && (
// //                         <button onClick={e => { e.stopPropagation(); pinChat(u._id); }}>
// //                           📌
// //                         </button>
// //                       )}
// //                       {!u.isGroupChat && (
// //                         <span>{u.isOnline ? "🟢" : "⚫"}</span>
// //                       )}
// //                     </div>
// //                   </div>
// //                 );
// //               })}
// //           </div>
// //         </div>

// //         {/* Group Modal */}
// //         {/* {showGroupModal && (
// //           <div className="absolute inset-0 flex items-center justify-center bg-black/30">
// //             <div className="bg-white p-6 rounded-xl shadow-md w-96">
// //               <h3 className="text-lg font-semibold mb-2">Create Group</h3>
// //               <input
// //                 placeholder="Group Name"
// //                 className="w-full px-3 py-2 mb-2 border rounded"
// //                 value={groupName}
// //                 onChange={e => setGroupName(e.target.value)}
// //               />
// //               <select
// //                 multiple
// //                 className="w-full px-3 py-2 mb-2 border rounded"
// //                 value={groupUsers}
// //                 onChange={e =>
// //                   setGroupUsers(
// //                     Array.from(e.target.selectedOptions, option => option.value)
// //                   )
// //                 }
// //               >
// //                 {users.filter(u => !u.isGroupChat).map(u => (
// //                   <option key={u._id} value={u._id}>
// //                     {u.name}
// //                   </option>
// //                 ))}
// //               </select>
// //               <div className="flex justify-end gap-2">
// //                 <button
// //                   onClick={createGroup}
// //                   className="px-3 py-1 bg-purple-500 text-white rounded"
// //                 >
// //                   Create
// //                 </button>
// //                 <button
// //                   onClick={() => setShowGroupModal(false)}
// //                   className="px-3 py-1 bg-gray-300 rounded"
// //                 >
// //                   Cancel
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         )} */}
// //         {showGroupModal && (
// //   <div className="fixed inset-0 flex items-center justify-center 
// //                   bg-black/40 backdrop-blur-sm z-50">
  

// //     {/* MODAL CARD */}
// //     <div className="bg-white/30 backdrop-blur-4xl border border-white/30 
// //                     rounded-3xl shadow-xl w-full max-w-md p-6">

// //       {/* HEADER */}
// //       <h3 className="text-xl font-bold text-purple-700 mb-4 text-center">
// //         Create Group 👥
// //       </h3>

// //       {/* GROUP NAME */}
// //       <input
// //         placeholder="Enter group name..."
// //         className="w-full px-4 py-3 mb-3 rounded-xl 
// //                    bg-white/40 border border-white/30 
// //                    text-gray-800 placeholder-gray-500
// //                    focus:outline-none focus:ring-2 focus:ring-purple-400"
// //         value={groupName}
// //         onChange={(e) => setGroupName(e.target.value)}
// //       />

// //       {/* USERS SELECT */}
// //       <div className="mb-4">
// //         <p className="text-sm text-gray-700 mb-1">Select Members</p>

// //         <select
// //           multiple
// //           className="w-full px-3 py-3 rounded-xl 
// //                      bg-white/40 border border-white/30 
// //                      text-gray-800 focus:outline-none 
// //                      focus:ring-2 focus:ring-purple-400 
// //                      h-32 overflow-y-auto"
// //           value={groupUsers}
// //           onChange={(e) =>
// //             setGroupUsers(
// //               Array.from(e.target.selectedOptions, (option) => option.value)
// //             )
// //           }
// //         >
// //           {users
// //             .filter((u) => !u.isGroupChat)
// //             .map((u) => (
// //               <option key={u._id} value={u._id}>
// //                 {u.name}
// //               </option>
// //             ))}
// //         </select>
// //       </div>

// //       {/* ACTION BUTTONS */}
// //       <div className="flex justify-end gap-3 mt-4">

// //         {/* CANCEL */}
// //         <button
// //           onClick={() => setShowGroupModal(false)}
// //           className="px-4 py-2 rounded-full 
// //                      bg-white/50 hover:bg-white/70 
// //                      text-gray-700 transition"
// //         >
// //           Cancel
// //         </button>

// //         {/* CREATE */}
// //         <button
// //           onClick={createGroup}
// //           className="px-5 py-2 rounded-full 
// //                      bg-gradient-to-r from-purple-500 to-blue-500 
// //                      text-white shadow-md 
// //                      hover:scale-105 transition"
// //         >
// //           Create 🚀
// //         </button>

// //       </div>
// //     </div>
// //   </div>
// // )}
// //       </div>
// //     </div>
 
// //   );
// // }


import { useState, useEffect, useContext } from "react";
import { API } from "../api/axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
export default function Home() {
  const [editingGroup, setEditingGroup] = useState(null);
const [newGroupName, setNewGroupName] = useState("");
  const [groups, setGroups] = useState([]);
  const [showGroupModal, setShowGroupModal] = useState(false);
const [groupName, setGroupName] = useState("");
const [groupUsers, setGroupUsers] = useState([]);
  const { user } = useContext(AuthContext);
  const nav = useNavigate();

  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [pinnedChats, setPinnedChats] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [uploading, setUploading] = useState(false);

  // ================= USERS =================
  const fetchUsers = async () => {
    try {
      const { data } = await API.get("/api/user/search?search=");

      const normalizedUsers = data
        .filter((u) => u._id !== user._id)
        .map((u) => ({
          _id: u._id,
          name: u.name || "Unnamed",
          avatar: u.avatar || `https://i.pravatar.cc/150?u=${u._id}`,
          lastMessage: u.lastMessage || "Say hi! 👋",
        }));

      setUsers(normalizedUsers);
    } catch (err) {
      console.error(err);
    }
  };

  //=====fetch group ========

// // ----------------- FETCH GROUPS -----------------
// const fetchGroups = async () => {
//   try {
//     const { data } = await API.get("/api/group", {
//       headers: { Authorization: `Bearer ${user.token}` },
//     });
//     setGroups(data);
//   } catch (err) {
//     console.error(err);
//   }
// };
 const fetchGroups = async () => {
    try {
      const { data } = await API.get("/api/chat/group", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      setGroups(data);
    } catch (err) {
      console.error(err);
    }
  };

// useEffect(() => {
//   if (user) {
//     fetchGroups();
//   }
// }, [user]);
  // useEffect(() => {
  //   if (user) {
  //     fetchUsers();
  //     fetchGroups();
  //   }
  // }, [user]);

//=======craete group=======
// const createGroup = async () => {
//   if (!groupName.trim() || groupUsers.length === 0) {
//     alert("Enter group name & select users");
//     return;
//   }

//   try {
//     const { data } = await API.post(
//       "/api/chat/group",
//       {
//         name: groupName,
//         users: groupUsers,
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${user.token}`,
//         },
//       }
//     );

//     alert("Group created ✅");

//     // reset
//     setShowGroupModal(false);
//     setGroupName("");
//     setGroupUsers([]);

//   } catch (err) {
//     console.error(err);
//     alert("Group creation failed ❌");
//   }
// };

const createGroup = async () => {
  if (!groupName.trim() || groupUsers.length === 0) {
    alert("Enter group name & select users");
    return;
  }

  try {
    const { data } = await API.post(
      "/api/chat/group",
      {
        name: groupName,
        users: groupUsers,
      },
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );

    alert("Group created ✅");

    // ✅ Add new group to state immediately
    setGroups([data, ...groups]); // new group at top

    // reset modal
    setShowGroupModal(false);
    setGroupName("");
    setGroupUsers([]);

  } catch (err) {
    console.error(err);
    alert("Group creation failed ❌");
  }
};
const handleDeleteGroup = async (groupId) => {
  if (!window.confirm("Are you sure you want to delete this group?")) return;

  try {
    await API.delete(`/api/chat/group/${groupId}`, {
      headers: { Authorization: `Bearer ${user.token}` },
    });

    setGroups(prev => prev.filter(g => g._id !== groupId));

    alert("Group deleted successfully!");
  } catch (err) {
    console.error(err);
    alert("Failed to delete group. Try again.");
  }
};

const handleEditGroup = async (groupId, newName) => {
  if (!newName.trim()) {
    alert("Group name cannot be empty");
    return;
  }

  try {
    const { data } = await API.put(
      `/api/chat/group/${groupId}`,
      { name: newName },
      { headers: { Authorization: `Bearer ${user.token}` } }
    );

    // Update the group in state
    setGroups(prev =>
      prev.map(g => (g._id === groupId ? { ...g, chatName: data.chatName } : g))
    );

    alert("Group name updated successfully!");
  } catch (err) {
    console.error(err);
    alert("Failed to edit group. Try again.");
  }
};

  // ================= STATUS =================
  const fetchStatus = async () => {
    try {
      const { data } = await API.get("/api/status");
      console.log("STATUS:", data);

      setStatuses(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (user) {
      fetchUsers();
      fetchStatus();
      fetchGroups();
    }
  }, [user]);

  useEffect(() => {
    setFilteredUsers(
      users.filter((u) =>
        (u.name || "").toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, users]);

  // ================= STATUS LOGIC =================

  // latest status per user
  const uniqueStatuses = Object.values(
    statuses.reduce((acc, curr) => {
      const userId = curr.user?._id;

      if (
        userId &&
        (!acc[userId] ||
          new Date(curr.createdAt) >
            new Date(acc[userId].createdAt))
      ) {
        acc[userId] = curr;
      }

      return acc;
    }, {})
  );

  // ✅ FIXED FILTER (ONLY VALID URLs)
  const validStatuses = uniqueStatuses.filter(
    (s) => s.mediaUrl && s.mediaUrl.startsWith("http")
  );

  // ✅ SAFE MATCH
  const myStatus = validStatuses.find(
    (s) => s.user?._id === user?._id
  );

  const otherStatuses = validStatuses.filter(
    (s) => s.user?._id !== user?._id
  );

  // ================= STATUS UPLOAD =================
  // const handleFileUpload = async (e) => {
  //   const file = e.target.files[0];
  //   if (!file) return;

  //   setUploading(true);

  //   try {
  //     const formData = new FormData();
  //     formData.append("file", file);
  //     formData.append("upload_preset", "chat_app");

  //     const res = await fetch(
  //       "https://api.cloudinary.com/v1_1/dhi8llpui/image/upload",
  //       {
  //         method: "POST",
  //         body: formData,
  //       }
  //     );

  //     const data = await res.json();

  //     if (!data.secure_url) {
  //       throw new Error("Upload failed");
  //     }

  //     await API.post(
  //       "/api/status",
  //       {
  //         type: "image",
  //         mediaUrl: data.secure_url,
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${user.token}`,
  //         },
  //       }
  //     );

  //     alert("Status uploaded ✅");
  //     fetchStatus();
  //   } catch (err) {
  //     console.error(err);
  //     alert("Upload failed ❌");
  //   } finally {
  //     setUploading(false);
  //     e.target.value = null;
  //   }
  // };

  // //   // -----------------------------
  const handleFileUpload = async e => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "YOUR_CLOUDINARY_PRESET");

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dhi8llpui/image/upload",
        { method: "POST", body: formData }
      );
      const data = await res.json();
      const uploadedUrl = data.secure_url;

      await API.post(
        "/api/status",
        { type: "image", mediaUrl: uploadedUrl },
        { headers: { Authorization: `Bearer ${user.token}` } }
      );
      fetchStatus();
    } catch (err) {
      console.error(err);
      alert("Failed to upload status ❌");
    } finally {
      setUploading(false);
      e.target.value = null;
    }
  };

  const viewStatus = (id) => {
    nav(`/status/${id}`);
  };

  // ================= PIN =================
  const pinChat = (id) => {
    if (!pinnedChats.includes(id)) {
      setPinnedChats([id, ...pinnedChats]);
    }
  };

  // ================= UI =================
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-100 via-purple-50 to-pink-50">
      <Navbar />

      <div className="flex flex-1 w-full max-w-6xl mx-auto px-4 py-4 gap-4">

        {/* LEFT */}
        <div className="hidden md:flex flex-col w-1/5 gap-4">
          <div className="bg-white/30 p-4 rounded-xl shadow text-center font-semibold">
            {user.name}
          </div>
        </div>

        {/* MAIN */}
        <div className="flex-1 flex flex-col gap-4">

          {/* STATUS */}
          <div className="bg-white/30 p-4 rounded-xl shadow flex gap-4 overflow-x-auto">

            {/* YOUR STATUS */}
            <div className="flex flex-col items-center">
              <label className="cursor-pointer">
                <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-purple-500 to-pink-500">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">

                    {myStatus ? (
                      <div
                        onClick={() => viewStatus(myStatus._id)}
                        className="w-full h-full cursor-pointer"
                      >
                        <img
                          src={myStatus.mediaUrl}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <span className="text-xl">
                        {uploading ? "..." : "+"}
                      </span>
                    )}

                  </div>
                </div>

                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileUpload}
                  disabled={uploading}
                />
              </label>

              <span className="text-xs mt-1">Your Status</span>
            </div>

            {/* OTHER USERS */}
            {otherStatuses.map((s) => (
              <div key={s._id} className="flex flex-col items-center">
                <img
                  src={s.mediaUrl}
                  className="w-16 h-16 rounded-full border-2 border-green-500 cursor-pointer"
                  onClick={() => viewStatus(s._id)}
                />
                <span className="text-xs">{s.user?.name}</span>
              </div>
            ))}

          </div>

          {/* SEARCH */}
          {/* <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 rounded-xl border"
          /> */}
          <div className="flex gap-2">
  <input
    type="text"
    placeholder="Search..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="flex-1 px-4 py-2 rounded-xl border"
  />

  <button
    onClick={() => setShowGroupModal(true)}
    className="px-4 py-2 bg-purple-500 text-white rounded-xl"
  >
    Create Group
  </button>
</div>

{/* //group */}

{/* const [groups, setGroups] = useState([]); */}

{/* // In your Home page render (above users list maybe): */}


{groups.map(g => (
  <div key={g._id} className="flex justify-between items-center p-2 rounded-xl hover:bg-white cursor-pointer">
    <div className="flex gap-2 items-center" onClick={() => nav(`/group/${g._id}`)}>
      <div className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center text-white font-bold">
        {g.chatName[0]}
      </div>
      <div>
        <div>{g.chatName}</div>
        <div className="text-xs text-gray-500">
          {g.lastMessage || "No messages yet"}
        </div>
      </div>
    </div>

    <div className="flex gap-2">
      
       <button
        onClick={(e) => {
          e.stopPropagation(); // prevent nav click
          const newName = prompt("Enter new group name:", g.chatName);
          if (newName) handleEditGroup(g._id, newName);
        }}
        className="p-1 hover:bg-blue-100 rounded"
      >
        <FiEdit2 className="w-5 h-5 text-blue-500" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation(); // prevent nav click
          handleDeleteGroup(g._id);
        }}
        className="p-1 hover:bg-red-100 rounded"
      >
        <FiTrash2 className="w-5 h-5 text-red-500" />
      </button>
    </div>
  </div>
))} 



{/* // Inside your JSX */}
{/* 
{groups.map((g) => (
  <div
    key={g._id}
    className="flex justify-between items-center p-2 rounded-xl hover:bg-gray-100 cursor-pointer"
    onClick={() => nav(`/group/${g._id}`)}
  >
    <div className="flex gap-2 items-center">
      <div className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center text-white font-bold">
        {g.name[0]}
      </div>
      <div>
        <div>{g.name}</div>
        <div className="text-xs text-gray-500">
          {g.lastMessage || "No messages yet"}
        </div>
      </div>
    </div>

    <div className="flex gap-2">
    
      <button
        onClick={(e) => {
          e.stopPropagation();
          setEditingGroup(g._id);
          setNewGroupName(g.chatName);
        }}
        className="p-1 hover:bg-blue-100 rounded"
      >
        <FiEdit className="w-5 h-5 text-blue-500" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          handleDeleteGroup(g._id);
        }}
        className="p-1 hover:bg-red-100 rounded"
      >
        <FiTrash2 className="w-5 h-5 text-red-500" />
      </button>
    </div>
  </div>
))} */}

{/* Modal for editing group */}
{/* 
{editingGroup && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-5 rounded-xl w-80">
      <h2 className="text-lg font-bold mb-3">Edit Group Name</h2>
      <input
        type="text"
        value={newGroupName}
        onChange={(e) => setNewGroupName(e.target.value)}
        className="w-full border p-2 rounded mb-3"
      />
      <div className="flex justify-end gap-2">
        <button
          onClick={() => setEditingGroup(null)}
          className="px-3 py-1 rounded bg-gray-200"
        >
          Cancel
        </button>
        <button
          onClick={() => {
            handleEditGroup(editingGroup, newGroupName);
            setEditingGroup(null);
          }}
          className="px-3 py-1 rounded bg-blue-500 text-white"
        >
          Save
        </button>
      </div>
    </div>
  </div>
)} */}

{editingGroup && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-5 rounded-xl w-80">
      <h2 className="text-lg font-bold mb-3">Edit Group Name</h2>
      <input
        type="text"
        value={newGroupName}
        onChange={(e) => setNewGroupName(e.target.value)}
        className="w-full border p-2 rounded mb-3"
      />
      <div className="flex justify-end gap-2">
        <button
          onClick={() => setEditingGroup(null)}
          className="px-3 py-1 rounded bg-gray-200"
        >
          Cancel
        </button>
        <button
          onClick={() => {
            handleEditGroup(editingGroup, newGroupName);
            setEditingGroup(null);
          }}
          className="px-3 py-1 rounded bg-blue-500 text-white"
        >
          Save
        </button>
      </div>
    </div>
  </div>
)}


{/* USERS */}
          <div className="flex flex-col gap-2">
            {[...pinnedChats, ...filteredUsers.map((u) => u._id)]
              .filter((v, i, a) => a.indexOf(v) === i)
              .map((id) => {
                const u = users.find((u) => u._id === id);
                if (!u) return null;

                return (
                  <div
                    key={u._id}
                    className="flex justify-between items-center p-2 rounded-xl hover:bg-white cursor-pointer"
                    onClick={() => nav(`/chat/${u._id}`)}
                  >
                    <div className="flex gap-2 items-center">
                      <img
                        src={u.avatar}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <div>{u.name}</div>
                        <div className="text-xs text-gray-500">
                          {u.lastMessage}
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        pinChat(u._id);
                      }}
                    >
                      📌
                    </button>
                  </div>
                );
              })}
          </div>

        </div>
      </div>

{showGroupModal && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 backdrop-blur-sm">
    <div className="bg-white rounded-2xl w-96 p-6 shadow-lg transform transition-all scale-95 animate-scale-in">

      {/* Header */}
      <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
        Create Group
      </h3>
    
    

      {/* Group Name Input */}
      <input
        placeholder="Group Name"
        value={groupName}
        onChange={(e) => setGroupName(e.target.value)}
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
      />

      {/* User Selection */}
      <select
        multiple
        value={groupUsers}
        onChange={(e) =>
          setGroupUsers(Array.from(e.target.selectedOptions, (o) => o.value))
        }
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-xl h-36 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
      >
        {users.map((u) => (
          <option key={u._id} value={u._id}>
            {u.name}
          </option>
        ))}
      </select>

      {/* Action Buttons */}
      <div className="flex justify-end gap-3">
        <button
          onClick={() => setShowGroupModal(false)}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-xl transition"
        >
          Cancel
        </button>

        <button
          onClick={createGroup}
          className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl transition"
        >
          Create
        </button>
      </div>

    </div>
  </div>
)}

    </div>
  );
}