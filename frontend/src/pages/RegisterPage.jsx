import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../axios/axios'; // your custom axios instance

export default function RegisterPage() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const { data } = await axios.post('/auth/register', {
        name,
        email,
        password,
      });

      setMessage(`🎉 Registered successfully! Welcome, ${data.name}`);
      localStorage.setItem('userInfo', JSON.stringify(data));

      setTimeout(() => {
        navigate('/login');
      }, 1500); // Optional delay to show success message
    } catch (err) {
      setError(err.response?.data?.error || 'Something went wrong');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Create an Account</h2>

        {message && <p className="text-green-600 text-sm text-center mb-4">{message}</p>}
        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm mb-1">Full Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition duration-300 shadow-lg"
          >
            Register
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-6">
          Already have an account?{' '}
          <a href="/login" className="text-purple-600 hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
}
