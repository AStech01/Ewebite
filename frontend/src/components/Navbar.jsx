import React, { useState } from 'react';
import {
  FaSearch,
  FaShoppingCart,
  FaUserPlus,
  FaUser,
  FaHeart,
  FaTag,
  FaShoppingBag,
  FaBoxOpen,
  FaGift,
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { user, logout } = useAuth();
  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const dropdownItems = [
    { label: 'Wishlist', icon: <FaHeart className="text-teal-500" /> },
    { label: 'Offers', icon: <FaTag className="text-teal-500" /> },
    { label: 'Cart', icon: <FaShoppingBag className="text-teal-500" />, path: '/cart' },
    { label: 'Orders', icon: <FaBoxOpen className="text-teal-500" />, path: '/orders' },
    { label: 'Rewards', icon: <FaGift className="text-teal-500" /> },
    { label: 'Gifts', icon: <FaGift className="text-teal-500" /> },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-full bg-white shadow-md px-4 py-3 z-50 relative"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-xl md:text-2xl font-extrabold text-teal-600 cursor-pointer"
        >
          <Link to="/">MyShop</Link>
        </motion.div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 justify-center px-4">
          <div className="relative w-full max-w-lg">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full border rounded-full px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-300 text-sm"
            />
            <FaSearch className="absolute top-3 left-3 text-gray-500" />
          </div>
        </div>

        {/* Right Icons */}
        <div className="hidden md:flex items-center gap-6">
          {!user ? (
            <>
              <Link
                to="/login"
                className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              {/* <Link
                to="/orders"
                className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
              >
                Orders
              </Link> */}

              {/* Cart Icon with Badge */}
              <Link to="/cart" className="relative text-gray-700 hover:text-teal-600 transition">
                <FaShoppingCart size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full">
                    {cartCount}
                  </span>
                )}
              </Link>

              {user.isAdmin && (
                <Link
                  to="/admin/dashboard"
                  className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
                >
                  Admin
                </Link>
              )}
              <button
                onClick={logout}
                className="text-sm font-medium text-gray-700 hover:text-red-500 transition-colors"
              >
                Logout
              </button>
            </>
          )}

          {/* More Dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center gap-1 text-gray-700 hover:text-teal-600 font-medium"
            >
              More
              <IoIosArrowDown
                className={`transform transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setDropdownOpen(false)}
                    className="fixed inset-0 bg-black backdrop-blur-sm z-40"
                  />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -10 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="absolute right-0 mt-3 w-72 bg-white bg-opacity-90 backdrop-blur-xl border border-teal-100 shadow-2xl rounded-2xl z-50 overflow-hidden"
                  >
                    <div className="px-6 py-4 border-b border-teal-100 flex items-center gap-2">
                      <IoIosArrowDown className="text-teal-500 rotate-180" />
                      <h3 className="text-lg font-semibold text-teal-600">More Options</h3>
                    </div>
                    <ul className="divide-y divide-teal-100 max-h-64 overflow-y-auto">
                      {dropdownItems.map((item, index) => (
                        <li
                          key={index}
                          onClick={() => {
                            if (item.path) {
                              window.location.href = item.path;
                            } else {
                              alert(`${item.label} clicked`);
                            }
                            setDropdownOpen(false);
                          }}
                          className="px-6 py-3 flex items-center gap-3 cursor-pointer text-gray-700 hover:text-teal-700 hover:bg-teal-50 transition-all duration-300 font-medium relative group"
                        >
                          <span className="absolute left-0 w-1 h-full bg-teal-400 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300" />
                          {item.icon}
                          <span>{item.label}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-teal-600 text-xl focus:outline-none"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="md:hidden overflow-hidden px-4 pt-4 pb-2 bg-white border-t"
          >
            <input
              type="text"
              placeholder="Search..."
              className="w-full border rounded-full px-4 py-2 pl-10 mb-4 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all text-sm"
            />
            <ul className="space-y-2">
              {!user ? (
                <>
                  <li>
                    <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link to="/register" onClick={() => setMobileMenuOpen(false)}>
                      Register
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/cart" onClick={() => setMobileMenuOpen(false)}>
                      <FaShoppingCart className="inline mr-2" />
                      Cart ({cartCount})
                    </Link>
                  </li>
                  <li>
                    <Link to="/orders" onClick={() => setMobileMenuOpen(false)}>
                      Orders
                    </Link>
                  </li>
                  {user.isAdmin && (
                    <li>
                      <Link to="/admin/dashboard" onClick={() => setMobileMenuOpen(false)}>
                        Admin
                      </Link>
                    </li>
                  )}
                  <li>
                    <button onClick={() => { logout(); setMobileMenuOpen(false); }}>
                      Logout
                    </button>
                  </li>
                </>
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
