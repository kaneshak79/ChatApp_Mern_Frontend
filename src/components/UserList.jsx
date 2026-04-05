// export default function UserList({ users, onClick }) {
//   return (
//     <div>
//       {users.map((u) => (
//         <div key={u._id} onClick={() => onClick(u)}>
//           {u.name} {u.isOnline ? "🟢" : "⚫"}
//         </div>
//       ))}
//     </div>
//   );
// }

//
export default function UserList({ users, onClick }) {
  return (
    <div>
      {users.map((u) => (
        <div key={u._id} onClick={() => onClick(u)}>
          {u.name} {u.isOnline ? "🟢" : "⚫"}
        </div>
      ))}
    </div>
  );
}