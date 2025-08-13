import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from '../axios/axios';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { useModal } from '../context/ModalContext';

export default function RegisterModal() {
  const { registerOpen: isOpen, closeModals: onClose, openLogin: onSwitchToLogin } = useModal();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const { data } = await axios.post('/auth/register', formData);
      login(data);
      onClose();
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.error || 'Registration failed');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: -50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: -50 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed z-50 top-1/2 left-1/2 w-full max-w-md transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl shadow-2xl px-8 py-10 border border-gray-200"
            role="dialog"
            aria-modal="true"
            aria-labelledby="register-modal-title"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500"
              aria-label="Close registration modal"
              type="button"
            >
              <FaTimes size={18} />
            </button>

            {/* Title */}
            <h2 id="register-modal-title" className="text-3xl font-extrabold text-center text-gray-800 mb-6">
              Create Account
            </h2>

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                autoComplete="name"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                autoComplete="email"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                minLength={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                autoComplete="new-password"
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}

              <button
                type="submit"
                className="w-full py-3 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-700 transition duration-300 shadow-lg"
              >
                Register
              </button>
            </form>

            {/* Switch to Login */}
            <p className="text-sm text-center text-gray-500 mt-6">
              Already have an account?{' '}
              <button
                onClick={onSwitchToLogin}
                className="text-teal-600 font-medium hover:underline"
                type="button"
              >
                Sign In
              </button>
            </p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
