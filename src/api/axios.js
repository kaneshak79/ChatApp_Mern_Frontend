// // import axios from "axios";

// // // create instance
// // export const API = axios.create({
// //   baseURL: "http://localhost:5000",
// // });

// // // attach token automatically
// // API.interceptors.request.use(
// //   (req) => {
// //     const user = JSON.parse(localStorage.getItem("user"));

// //     if (user && user.token) {
// //       req.headers.Authorization = `Bearer ${user.token}`;
// //     }

// //     return req;
// //   },
// //   (error) => {
// //     return Promise.reject(error);
// //   }
// // );

// import axios from "axios";

// export const API = axios.create({
//   baseURL: "http://localhost:5000",
// });

// API.interceptors.request.use((req) => {
//   const user = JSON.parse(localStorage.getItem("user"));
//   if (user?.token) {
//     req.headers.Authorization = `Bearer ${user.token}`;
//   }
//   return req;
// });

import axios from "axios";

// create instance
export const API = axios.create({
  baseURL: "https://chatapp-mern-backend-9mi9.onrender.com",
});

// attach token automatically
API.interceptors.request.use(
  (req) => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.token) {
      req.headers.Authorization = `Bearer ${user.token}`;
    }

    return req;
  },
  (error) => {
    return Promise.reject(error);
  }
);