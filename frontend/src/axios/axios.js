// src/axios/axios.js
// import axios from 'axios';

// const instance = axios.create({
//   baseURL: 'http://localhost:5000/api',
//   withCredentials: false,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// // 🔐 Attach token to every request if available
// instance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// export default instance;


// src/axios/axios.js
// import axios from 'axios';

// const instance = axios.create({
//   baseURL: 'http://localhost:5000/api',
// });

// instance.interceptors.request.use((config) => {
//   const token = localStorage.getItem('token');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export default instance;


import axios from 'axios';

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`, // Change to your actual API base URL
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;