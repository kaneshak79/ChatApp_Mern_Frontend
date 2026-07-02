

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
  // const handleFileUpload = async e => {
  //   const file = e.target.files[0];
  //   if (!file) return;
  //   setUploading(true);
  //   try {
  //     const formData = new FormData();
  //     formData.append("file", file);
  //     formData.append("upload_preset", "YOUR_CLOUDINARY_PRESET");

  //     const res = await fetch(
  //       "https://api.cloudinary.com/v1_1/dhi8llpui/image/upload",
  //       { method: "POST", body: formData }
  //     );
  //     const data = await res.json();
  //     const uploadedUrl = data.secure_url;

  //     await API.post(
  //       "/api/status",
  //       { type: "image", mediaUrl: uploadedUrl },
  //       { headers: { Authorization: `Bearer ${user.token}` } }
  //     );
  //     fetchStatus();
  //   } catch (err) {
  //     console.error(err);
  //     alert("Failed to upload status ❌");
  //   } finally {
  //     setUploading(false);
  //     e.target.value = null;
  //   }
  // };

  const handleFileUpload = async (e) => {
  const file = e.target.files[0];
  if (!file) return;
  setUploading(true);

  try {
    // 1️⃣ Upload file to backend
    const formData = new FormData();
    formData.append("file", file);

    const uploadRes = await API.post("/api/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${user.token}`,
      },
    });

    const uploadedUrl = uploadRes.data.url; // <-- backend returns { url: "..." }

    // 2️⃣ Create status
    await API.post(
      "/api/status",
      { type: "image", mediaUrl: uploadedUrl },
      { headers: { Authorization: `Bearer ${user.token}` } }
    );

    fetchStatus(); // refresh the statuses
  } catch (err) {
    console.error("Upload error:", err);
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
    <div className="flex gap-2 items-center" 
    // onClick={() => nav(`/group/${g._id}`)}
    // Instead of nav(`/group/${g._id}`)
onClick={() => nav(`/chat/${g._id}`)}
    >
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
