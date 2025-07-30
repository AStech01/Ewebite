// import React, { useState } from 'react';
// import { useAuth } from '../context/AuthContext';
// import { useNavigate } from 'react-router-dom';

// export default function LoginPage() {
//   const [email, setEmail] = useState('');
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const fakeUser = { email, isAdmin: email === 'admin@example.com' };
//     login(fakeUser);
//     navigate('/');
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       <form onSubmit={handleSubmit}>
//         <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
//         <button type="submit">Log In</button>
//       </form>
//     </div>
//   );
// }

// import React, { useState } from 'react';
// import { useAuth } from '../context/AuthContext';
// import { useNavigate } from 'react-router-dom';
// import axios from '../axios/axios'; // Make sure this is your axios instance with baseURL

// export default function LoginPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const { login } = useAuth(); // login(userData) stores in localStorage/context
//   const navigate = useNavigate();
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     try {
//       const { data } = await axios.post('/api/auth/login', { email, password });

//       // data: { _id, name, email, isAdmin, token }
//       login(data); // Store user and token in context/localStorage
//       navigate('/');
//     } catch (err) {
//       console.error(err);
//       setError(err.response?.data?.message || 'Login failed');
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-20 p-6 border rounded-lg shadow-lg">
//       <h1 className="text-2xl font-bold mb-4">Login</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Enter email"
//           required
//           className="w-full border p-2 rounded"
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Enter password"
//           required
//           className="w-full border p-2 rounded"
//         />
//         <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//           Log In
//         </button>
//         {error && <p className="text-red-500">{error}</p>}
//       </form>
//     </div>
//   );
// }


// Inside your LoginPage.jsx
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from '../axios/axios';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/auth/login', { email, password });
      login(data);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-20 space-y-4">
      <h1 className="text-2xl font-bold">Login</h1>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required className="border p-2 w-full" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required className="border p-2 w-full" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2">Login</button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}
