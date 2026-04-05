// export default function UploadButton({ onUpload }) {
//   return (
//     <input
//       type="file"
//       onChange={(e) => onUpload(e.target.files[0])}
//     />
//   );
// }


export default function UploadButton({ onUpload }) {
  return (
    <input
      type="file"
      onChange={(e) => onUpload(e.target.files[0])}
    />
  );
}