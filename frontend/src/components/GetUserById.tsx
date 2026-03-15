// import React, { useState } from "react";
// import { useRequest } from "../hooks/useRequedt";
// import { getUserByIdApi } from "../api/axios";

// interface User {
//   data: {
//     _id: string;
//     fullName: string;
//     email: string;
//     role: "agent" | "admin";
//   };
// }

// export default function GetUserById() {
//   const [inputId, setInputId] = useState("");
//   const [user, setUser] = useState<User | null>(null);
//   const { request, loading, error } = useRequest();
//   function hndleSubmit(e: React.FormEvent) {
//     e.preventDefault();
//     const data = request(() => getUserByIdApi(inputId));
//     setUser(data);
//   }
//   return (
//     <div>
//       <form onSubmit={hndleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter ID"
//           onChange={(e) => setInputId(e.target.value)}
//         />
//         <button type="submit">
//           {loading ? <p>loading...</p> : <p>תביא</p>}
//         </button>
//         {user ? (
//           <>
//             <table className="table">
//               <thead>
//                 <tr className="col-table">
//                   <th>Id</th>
//                   <th>fullName</th>
//                   <th>email</th>
//                   <th>role</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>{user._id}</td>
//                   <td>{user.fullName}</td>
//                   <td>{user.email}</td>
//                   <td>{user.role}</td>
//                 </tr>
//               </tbody>
//             </table>
//           </>
//         ) : (
//           error
//         )}
//       </form>
//     </div>
//   );
// }
