// import { useNavigate } from "react-router-dom";

// export default function CallButtons({ userId }) {
//   const nav = useNavigate();

//   return (
//     <div>
//       <button onClick={() => nav(`/call/audio/${userId}`)}>Audio</button>
//       <button onClick={() => nav(`/call/video/${userId}`)}>Video</button>
//     </div>
//   );
// }

//

import { useNavigate } from "react-router-dom";

export default function CallButtons({ userId }) {
  const nav = useNavigate();

  return (
    <div>
      <button onClick={() => nav(`/call/audio/${userId}`)}>Audio</button>
      <button onClick={() => nav(`/call/video/${userId}`)}>Video</button>
    </div>
  );
}