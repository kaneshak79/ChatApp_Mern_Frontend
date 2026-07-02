

// //         <button onClick={sendMessage} className="p-2 bg-blue-500 text-white rounded-full">
// //           <FiSend />
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }


import { useState } from "react";
import { API } from "../api/axios";
import { FiSend, FiPaperclip } from "react-icons/fi";
import toast from "react-hot-toast";
import { Edit2, Trash2, Clipboard, Globe } from "lucide-react";
export default function ChatBox({ chatId, messages, setMessages, userId, refreshMessages }) {
  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState(null);
const [editText, setEditText] = useState("");

  // ✅ SEND MESSAGE
  const sendMessage = async () => {
    if (!text.trim() || !chatId) return;
    try {
      const messageText = text;
      setText("");

      const { data } = await API.post("/api/message", {
        chatId,
        content: messageText,
        type: "text",
      });

      setMessages((prev) => [...prev, data]);
    } catch (err) {
      console.error(err);
    }
  };

  // ✅ SEND FILE
  const sendFile = async (file) => {
    if (!file || !chatId) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const upload = await API.post("/api/upload", formData);
      const { data } = await API.post("/api/message", {
        chatId,
        type: "image",
        fileUrl: upload.data.url,
      });

      setMessages((prev) => [...prev, data]);
    } catch (err) {
      console.error(err);
    }
  };

  // ✅ DELETE
  const deleteForMe = async (id) => {
    await API.put(`/api/message/delete-me/${id}`);
    setMessages((prev) => prev.filter((m) => m._id !== id));
  };

  const deleteForAll = async (id) => {
    await API.put(`/api/message/delete-all/${id}`);
    setMessages((prev) =>
      prev.map((m) => (m._id === id ? { ...m, content: "Message deleted" } : m))
    );
  };

  // ✅ EDIT
  // const editMessage = async (id) => {
  //   const newText = prompt("Edit message:");
  //   if (!newText) return;

  //   await API.put(`/api/message/edit/${id}`, { content: newText });
  //   setMessages((prev) =>
  //     prev.map((m) => (m._id === id ? { ...m, content: newText } : m))
    
  //   );
  //  toast.success("Message updated");
  // };
const saveEdit = async (id) => {
  if (!editText.trim()) return;

  await API.put(`/api/message/edit/${id}`, { content: editText });

  setMessages((prev) =>
    prev.map((m) => (m._id === id ? { ...m, content: editText } : m))
  );

  setEditingId(null);
  setEditText("");

  toast.success("Message updated");
};
  // ✅ COPY
  const copyMessage = (content) => {
    navigator.clipboard.writeText(content);
    // alert("Copied!");
    toast.success("Copied!");
  };

  // ✅ TRANSLATE
  const translateMessage = async (content) => {
    if (!content) return;
    try {
      const { data } = await API.post(
        "/api/message/translate",
        { text: content, to: "ta" },
        { headers: { "Content-Type": "application/json" } }
      );

      const translated = data.translated;
      if (!translated) {
        // alert("Translation failed");
        toast.error("Translation failed");
        return;
      }
      // alert("Translated: " + translated);
      toast.success(`Translated: ${translated}`);
    } catch (err) {
      console.error("Translation failed:", err);
      // alert("Translation failed. Check console.");
      toast.error("Translation failed");
    }
  };

  return (
    <div className="flex flex-col h-full w-full p-4 bg-gradient-to-br from-blue-200 via-purple-200 to-blue-100 rounded-3xl">
      {/* MESSAGES */}
      <div className="flex-1 overflow-y-auto flex flex-col gap-3">
        {messages.map((m) => {
          const senderId = m.sender?._id || m.sender;
          const isMine = String(senderId) === String(userId);

          return (
            <div key={m._id} className={`flex ${isMine ? "justify-end" : "justify-start"}`}>
              <div
                className={`relative max-w-[70%] px-4 py-2 rounded-2xl text-sm break-words
                  ${isMine ? "bg-blue-500 text-white rounded-tr-none" : "bg-gray-200 text-black rounded-tl-none"}
                  group`}
              >
                {/* {m.content && <p>{m.content}</p>} */}
                {editingId === m._id ? (
  <div className="flex flex-col gap-2 mt-1">
    <input
      value={editText}
      onChange={(e) => setEditText(e.target.value)}
      className="px-2 py-1 rounded-md text-black text-sm outline-none"
    />
    <div className="flex gap-2 justify-end text-xs">
      <button
        onClick={() => saveEdit(m._id)}
        className="text-green-500"
      >
        Save
      </button>
      <button
        onClick={() => setEditingId(null)}
        className="text-red-500"
      >
        Cancel
      </button>
    </div>
  </div>
) : (
  m.content && <p>{m.content}</p>
)}
                {m.fileUrl && (
                  <img
                    src={m.fileUrl}
                    className="w-52 mt-2 rounded-lg cursor-pointer hover:scale-105 transition-transform"
                  />
                )}

                {/* ACTIONS: only visible on hover */}
                <div className="flex gap-2 mt-2 justify-end text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  {/* <button 
                  // onClick={() => editMessage(m._id)} 
                  onClick={() => {
  setEditingId(m._id);
  setEditText(m.content);
}}
                  className="hover:text-blue-500 transition">✏️</button>
                 
                  <button onClick={() => deleteForMe(m._id)} className="hover:text-red-500 transition">🗑️</button>
                  {/* <button onClick={() => deleteForAll(m._id)} className="hover:text-red-700 transition">🗑️All</button> */}
                  {/* <button onClick={() => copyMessage(m.content)} className="hover:text-green-500 transition">📋</button>
                  <button onClick={() => translateMessage(m.content)} className="hover:text-purple-500 transition">🌐</button> */}
                   

<button
  onClick={() => {
    setEditingId(m._id);
    setEditText(m.content);
  }}
  className="hover:text-blue-500 transition"
>
  <Edit2 size={18} />
</button>

<button onClick={() => deleteForMe(m._id)} className="hover:text-red-500 transition">
  <Trash2 size={18} />
</button>

<button onClick={() => copyMessage(m.content)} className="hover:text-green-500 transition">
  <Clipboard size={18} />
</button>

<button onClick={() => translateMessage(m.content)} className="hover:text-purple-500 transition">
  <Globe size={18} />
</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* INPUT */}
      <div className="flex items-center gap-2 mt-3 bg-white/70 rounded-full px-3 py-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type message..."
          className="flex-1 bg-transparent outline-none"
        />
        <label>
          <FiPaperclip />
          <input type="file" hidden onChange={(e) => sendFile(e.target.files[0])} />
        </label>
        <button onClick={sendMessage} className="p-2 bg-blue-500 text-white rounded-full">
          <FiSend />
        </button>
      </div>
    </div>
  );
}

// full crt with translate

