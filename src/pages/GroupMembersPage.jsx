
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
