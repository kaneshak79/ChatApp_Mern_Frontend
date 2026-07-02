
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
  const { id } = useParams(); // Could be userId or groupId
  const nav = useNavigate();
  const { user: loggedUser } = useContext(AuthContext);

  const [chat, setChat] = useState(null);      // Main chat object
  const [chatId, setChatId] = useState(null);  // Current chat _id
  const [messages, setMessages] = useState([]);// Chat messages
  const [otherUser, setOtherUser] = useState(null); // Only for 1-on-1

  // Fetch chat (group or 1-on-1) and messages
  const fetchChat = async () => {
    try {
      let data = null;

      // 1️⃣ Try group chat first
      try {
        const groupRes = await API.get(`/api/chat/group/${id}`);
        if (groupRes.data) data = groupRes.data;
      } catch {
        // Ignore errors if not group
      }

      // 2️⃣ If not group, fetch 1-on-1
      if (!data) {
        // const oneOnOneRes = await API.get(`/api/chat?userId=${id}`);
        // data = oneOnOneRes.data;

        // // Create chat if it doesn't exist
        // if (!data) {
        //   const createRes = await API.post("/api/chat", { userId: id });
        //   data = createRes.data;
        // }
        // Always use POST for 1-on-1 (same as your working code)
const createRes = await API.post("/api/chat", { userId: id });
data = createRes.data;
      }

      setChat(data);
      setChatId(data._id);

      // Fetch messages
      const msgRes = await API.get(`/api/message/${data._id}`);
      setMessages(
        msgRes.data.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
      );

      // Set otherUser for 1-on-1 only
      if (!data.isGroupChat) {
        const userInChat = data.users.find(u => u._id !== loggedUser._id);
        setOtherUser(userInChat);
      }

    } catch (err) {
      console.error("Error fetching chat:", err);
    }
  };

  useEffect(() => {
    fetchChat();
  }, [id]);

  // Dynamic chat name for header
  const getChatName = () => {
    if (!chat) return "";

    if (chat.isGroupChat) {
      if (chat.chatName?.trim() !== "") return chat.chatName;

      const otherNames = chat.users
        .filter(u => u._id !== loggedUser._id)
        .map(u => u.name)
        .join(", ");
      return otherNames || "Unnamed Group";
    } else {
      return otherUser?.name || "User";
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col bg-gradient-to-br from-blue-200 via-purple-200 to-blue-100">
      
      {/* HEADER */}
      <div className="flex items-center justify-between px-6 py-3 bg-white/70 backdrop-blur-md shadow">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => {
            if (chat?.isGroupChat) nav(`/chat/group/${chat._id}`);
            else nav(`/user/${otherUser?._id}`);
          }}
        >
          <img
            src={
              chat?.isGroupChat
                ? `https://ui-avatars.com/api/?name=${encodeURIComponent(getChatName())}`
                : otherUser?.avatar || `https://i.pravatar.cc/150?u=${id}`
            }
            className="w-10 h-10 rounded-full"
          />
          <h3 className="text-lg font-semibold">{getChatName()}</h3>
        </div>

        {/* 1-on-1 Call Buttons */}
        <div className="flex gap-2">
          {!chat?.isGroupChat && (
            <>
              <button
                onClick={() => nav(`/call/audio/${id}`)}
                className="p-2 rounded-full bg-green-500 text-white"
              >
                <FiPhone />
              </button>
              <button
                onClick={() => nav(`/call/video/${id}`)}
                className="p-2 rounded-full bg-blue-500 text-white"
              >
                <FiVideo />
              </button>
            </>
          )}
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
