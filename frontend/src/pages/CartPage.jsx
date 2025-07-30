import React from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTrashAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

export default function CartPage() {
  const { cartItems, dispatch } = useCart();
  const { user } = useAuth(); // ⬅️ Check user
  const navigate = useNavigate();

  const handleRemove = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-gray-600">
        <h2 className="text-2xl font-semibold mb-4">Please login to view your cart</h2>
        <Link
          to="/login"
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Your Cart
        </h1>

        {cartItems.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-gray-500 text-lg"
          >
            Your cart is empty.{' '}
            <Link to="/" className="text-blue-600 underline">
              Go shopping
            </Link>
          </motion.div>
        ) : (
          <div className="space-y-6">
            <AnimatePresence>
              {cartItems.map((item) => (
                <motion.div
                  key={item._id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-2xl overflow-hidden p-4 gap-6"
                >
                  <img
                    src={
                      item.image
                        ? item.image.startsWith('http')
                          ? item.image
                          : `http://localhost:5000${item.image}`
                        : 'https://via.placeholder.com/100x100?text=No+Image'
                    }
                    alt={item.name}
                    className="w-28 h-28 object-cover rounded-xl shadow"
                  />

                  <div className="flex-1 text-left space-y-1">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {item.name}
                    </h2>
                    <p className="text-gray-500">
                      ₹{item.price.toFixed(2)} × {item.quantity}
                    </p>
                    <p className="text-gray-800 font-semibold">
                      Total: ₹{(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleRemove(item._id)}
                    className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow"
                  >
                    <FaTrashAlt />
                    Remove
                  </motion.button>
                </motion.div>
              ))}
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-md flex justify-between items-center"
            >
              <h2 className="text-xl font-bold text-gray-800">Subtotal</h2>
              <p className="text-2xl text-green-600 font-bold">
                ₹{total.toFixed(2)}
              </p>
            </motion.div>

            <div className="flex justify-end">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate('/checkout')}
                className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-xl shadow hover:bg-blue-700"
              >
                Proceed to Checkout
              </motion.button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
