// export default function MessageBubble({ msg }) {
//   return (
//     <div>
//       {msg.content && <p>{msg.content}</p>}
//       {msg.fileUrl && <img src={msg.fileUrl} width="100" />}
//     </div>
//   );
// }

//

export default function MessageBubble({ msg }) {
  return (
    <div>
      {msg.content && <p>{msg.content}</p>}
      {msg.fileUrl && <img src={msg.fileUrl} width="100" />}
    </div>
  );
}