// components/Navbar.jsx

// import React, { useState } from 'react';
// import {
//   FaSearch,
//   FaShoppingCart,
//   FaHeart,
//   FaTag,
//   FaShoppingBag,
//   FaBoxOpen,
//   FaGift,
//   FaBars,
//   FaTimes,
// } from 'react-icons/fa';
// import { IoIosArrowDown } from 'react-icons/io';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Link } from 'react-router-dom';

// import { useAuth } from '../context/AuthContext';
// import { useCart } from '../context/CartContext';
// import { useModal } from '../context/ModalContext';
// import { useOrders } from '../context/OrderContext';

// const Navbar = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const { user, logout } = useAuth();
//   const { cartItems } = useCart();
//   const { openLogin } = useModal();
//   const { orders } = useOrders();

//   // 🧮 Cart count
//   const cartCount = cartItems?.reduce((acc, item) => acc + item.quantity, 0) || 0;

//   // ✅ Only current user's orders count
//   const ordersCount = user
//     ? orders.filter((order) => order.userId === user.id).length
//     : 0;

//   const dropdownItems = [
//     { label: 'Wishlist', icon: <FaHeart className="text-teal-500" /> },
//     { label: 'Offers', icon: <FaTag className="text-teal-500" /> },
//     { label: 'Cart', icon: <FaShoppingBag className="text-teal-500" />, path: '/cart' },
//     {
//       label: 'Orders',
//       icon: <FaBoxOpen className="text-teal-500" />,
//       path: '/orders',
//       badgeCount: ordersCount,
//     },
//     { label: 'Rewards', icon: <FaGift className="text-teal-500" /> },
//   ];

//   const openMobileLogin = () => {
//     openLogin();
//     setMobileMenuOpen(false);
//   };

//   return (
//     <motion.nav
//       initial={{ y: -50, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.4 }}
//       className="w-full bg-gradient-to-r from-purple-100 via-pink-50 to-blue-100 shadow-md px-5 md:px-40 py-3 z-50"
//     >
//       <div className="max-w-7xl mx-auto flex items-center justify-between">
//         <Link to="/" className="text-2xl font-extrabold text-teal-600">
//           MyShop
//         </Link>

//         {/* Search bar (desktop only) */}
//         <div className="hidden md:flex flex-1 justify-center px-4">
//           <div className="relative w-full max-w-lg">
//             <input
//               type="text"
//               placeholder="Search products..."
//               className="w-full border rounded-full px-4 py-2 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
//             />
//             <FaSearch className="absolute top-3 left-3 text-gray-500" />
//           </div>
//         </div>

//         {/* Desktop menu */}
//         <div className="hidden md:flex items-center gap-6">
//           {!user ? (
//             <button
//               onClick={openLogin}
//               className="text-sm font-medium text-gray-700 hover:text-teal-600"
//             >
//               Login
//             </button>
//           ) : (
//             <>
//               <Link to="/cart" className="relative text-gray-700 hover:text-teal-600">
//                 <FaShoppingCart size={20} />
//                 {cartCount > 0 && (
//                   <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full">
//                     {cartCount}
//                   </span>
//                 )}
//               </Link>
//               {user.isAdmin && (
//                 <Link
//                   to="/admin/dashboard"
//                   className="text-sm font-medium text-gray-700 hover:text-teal-600"
//                 >
//                   Admin
//                 </Link>
//               )}
//               <button
//                 onClick={logout}
//                 className="text-sm font-medium text-gray-700 hover:text-red-500"
//               >
//                 Logout
//               </button>
//             </>
//           )}

//           {/* Dropdown "More" menu */}
//           <div className="relative">
//             <button
//               onClick={() => setDropdownOpen((prev) => !prev)}
//               className="flex items-center gap-1 text-gray-700 hover:text-teal-600 font-medium"
//             >
//               More
//               <IoIosArrowDown
//                 className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
//               />
//             </button>

//             <AnimatePresence>
//               {dropdownOpen && (
//                 <>
//                   <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 0.3 }}
//                     exit={{ opacity: 0 }}
//                     onClick={() => setDropdownOpen(false)}
//                     className="fixed inset-0 bg-black z-40"
//                   />
//                   <motion.div
//                     initial={{ scale: 0.95, y: -10, opacity: 0 }}
//                     animate={{ scale: 1, y: 0, opacity: 1 }}
//                     exit={{ scale: 0.95, y: -10, opacity: 0 }}
//                     className="absolute right-0 mt-2 w-72 bg-white border border-teal-100 rounded-xl z-50 shadow-lg"
//                   >
//                     <ul className="divide-y divide-teal-100">
//                       {dropdownItems.map((item, i) => (
//                         <li
//                           key={i}
//                           className="px-4 py-3 hover:bg-teal-50 text-sm flex justify-between items-center"
//                         >
//                           {item.path ? (
//                             <Link
//                               to={item.path}
//                               onClick={() => setDropdownOpen(false)}
//                               className="flex items-center gap-3 text-gray-700 flex-grow"
//                             >
//                               {item.icon}
//                               <span>{item.label}</span>
//                             </Link>
//                           ) : (
//                             <button
//                               onClick={() => {
//                                 alert(`${item.label} clicked`);
//                                 setDropdownOpen(false);
//                               }}
//                               className="flex items-center gap-3 text-gray-700 w-full text-left"
//                             >
//                               {item.icon}
//                               <span>{item.label}</span>
//                             </button>
//                           )}
//                           {item.badgeCount > 0 && (
//                             <span className="ml-2 text-xs bg-red-500 text-white rounded-full px-2 py-0.5">
//                               {item.badgeCount}
//                             </span>
//                           )}
//                         </li>
//                       ))}
//                     </ul>
//                   </motion.div>
//                 </>
//               )}
//             </AnimatePresence>
//           </div>
//         </div>

//         {/* Mobile menu toggle */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setMobileMenuOpen((prev) => !prev)}
//             className="text-teal-600 text-xl"
//           >
//             {mobileMenuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       <AnimatePresence>
//         {mobileMenuOpen && (
//           <motion.div
//             initial={{ height: 0 }}
//             animate={{ height: 'auto' }}
//             exit={{ height: 0 }}
//             className="md:hidden px-4 pt-4 pb-2 border-t bg-white"
//           >
//             <ul className="space-y-2">
//               {!user ? (
//                 <li>
//                   <button
//                     onClick={openMobileLogin}
//                     className="w-full text-left text-gray-700 hover:text-teal-600"
//                   >
//                     Login
//                   </button>
//                 </li>
//               ) : (
//                 <>
//                   <li>
//                     <Link
//                       to="/cart"
//                       onClick={() => setMobileMenuOpen(false)}
//                       className="flex items-center gap-2 text-gray-700 hover:text-teal-600"
//                     >
//                       <FaShoppingCart /> Cart ({cartCount})
//                     </Link>
//                   </li>
//                   <li className="flex items-center justify-between">
//                     <Link
//                       to="/orders"
//                       onClick={() => setMobileMenuOpen(false)}
//                       className="text-gray-700 hover:text-teal-600"
//                     >
//                       Orders
//                     </Link>
//                     {ordersCount > 0 && (
//                       <span className="ml-2 text-xs bg-red-500 text-white rounded-full px-2 py-0.5">
//                         {ordersCount}
//                       </span>
//                     )}
//                   </li>
//                   {user.isAdmin && (
//                     <li>
//                       <Link
//                         to="/admin/dashboard"
//                         onClick={() => setMobileMenuOpen(false)}
//                         className="text-gray-700 hover:text-teal-600"
//                       >
//                         Admin
//                       </Link>
//                     </li>
//                   )}
//                   <li>
//                     <button
//                       onClick={() => {
//                         logout();
//                         setMobileMenuOpen(false);
//                       }}
//                       className="w-full text-left text-gray-700 hover:text-red-500"
//                     >
//                       Logout
//                     </button>
//                   </li>
//                 </>
//               )}
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// };

// export default Navbar;


// import React, { useState } from 'react';
// import {
//   FaSearch,
//   FaShoppingCart,
//   FaHeart,
//   FaTag,
//   FaGift,
//   FaUserPlus,
//   FaShoppingBag,
//   FaBoxOpen,
//   FaBars,
//   FaTimes,
//   FaSignInAlt,
// } from 'react-icons/fa';
// import { IoIosArrowDown } from 'react-icons/io';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Link } from 'react-router-dom';

// import { useAuth } from '../context/AuthContext';
// import { useCart } from '../context/CartContext';
// import { useModal } from '../context/ModalContext';
// import { useOrders } from '../context/OrderContext';

// const Navbar = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const { user, logout } = useAuth();
//   const { cartItems } = useCart();
//   const { openLogin } = useModal();
//   const { orders } = useOrders();

//   const cartCount = cartItems?.reduce((acc, item) => acc + item.quantity, 0) || 0;

//   const ordersCount = user
//     ? orders.filter((order) => order.userId === user.id).length
//     : 0;

//   const dropdownItems = [
//     {
//       label: 'New user? Register',
//       icon: <FaUserPlus className="text-teal-500" />,
//       path: '/register',
//     },
//     {
//       label: 'Orders',
//       icon: <FaBoxOpen className="text-teal-500" />,
//       path: '/orders',
//       badgeCount: ordersCount,
//     },
//     {
//       label: 'Wishlist',
//       icon: <FaHeart className="text-teal-500" />,
//       path: '/wishlist',
//     },
//     {
//       label: 'Offers',
//       icon: <FaTag className="text-teal-500" />,
//       path: '/offers',
//     },
//     {
//       label: 'Gifts',
//       icon: <FaGift className="text-teal-500" />,
//       path: '/gifts',
//     },
//     {
//       label: 'Rewards',
//       icon: <FaShoppingBag className="text-teal-500" />,
//       path: '/rewards',
//     },
//   ];

//   return (
//     <motion.nav
//       initial={{ y: -50, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.4 }}
//       className="w-full shadow-md z-50 bg-white"
//     >
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:px-10 relative">
//          <Link to="/" className="text-xl md:text-2xl font-bold text-teal-600 mr-4 whitespace-nowrap">
//             MyShop
//           </Link>
//         {/* Center Area: Shop Name & Search Bar with gradient */}
//         <div className="absolute left-1/2 transform -translate-x-1/2 w-full md:w-2/3 flex items-center justify-center bg-gradient-to-r from-purple-100 via-pink-50 to-blue-100 px-4 py-2 rounded-[70px] shadow-sm">
         
//           <div className="relative flex-1 max-w-md hidden md:block">
//             <input
//               type="text"
//               placeholder="Search products..."
//               className="w-full border rounded-full px-4 py-2 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
//             />
//             <FaSearch className="absolute top-3 left-3 text-gray-500" />
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="flex items-center gap-4 ml-auto z-10">
//           {/* Cart */}
//           <Link
//             to="/cart"
//             className="relative flex items-center text-gray-700 hover:text-teal-600"
//           >
//             <FaShoppingCart className="mr-1" />
//             <span>Cart</span>
//             {cartCount > 0 && (
//               <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full">
//                 {cartCount}
//               </span>
//             )}
//           </Link>

//           {/* Login or Logout */}
//           {!user ? (
//             <button
//               onClick={openLogin}
//               className="flex items-center text-gray-700 hover:text-teal-600"
//             >
//               <FaSignInAlt className="mr-1" />
//               Login
//             </button>
//           ) : (
//             <button
//               onClick={logout}
//               className="flex items-center text-gray-700 hover:text-red-500"
//             >
//               Logout
//             </button>
//           )}

//           {/* Dropdown */}
//           <div className="relative">
//             <button
//               onClick={() => setDropdownOpen(!dropdownOpen)}
//               className="flex items-center text-gray-700 hover:text-teal-600"
//             >
//               <IoIosArrowDown />
//             </button>
//             <AnimatePresence>
//               {dropdownOpen && (
//                 <>
//                   <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 0.3 }}
//                     exit={{ opacity: 0 }}
//                     onClick={() => setDropdownOpen(false)}
//                     className="fixed inset-0 bg-black z-40"
//                   />
//                   <motion.div
//                     initial={{ scale: 0.95, y: -10, opacity: 0 }}
//                     animate={{ scale: 1, y: 0, opacity: 1 }}
//                     exit={{ scale: 0.95, y: -10, opacity: 0 }}
//                     className="absolute right-0 mt-2 w-64 bg-white border border-teal-100 rounded-xl z-50 shadow-lg"
//                   >
//                     <ul className="divide-y divide-teal-100 text-sm">
//                       {dropdownItems.map((item, index) => (
//                         <li key={index}>
//                           <Link
//                             to={item.path}
//                             onClick={() => setDropdownOpen(false)}
//                             className="flex items-center justify-between px-4 py-3 hover:bg-teal-50 text-gray-700"
//                           >
//                             <span className="flex items-center gap-2">
//                               {item.icon}
//                               {item.label}
//                             </span>
//                             {item.badgeCount > 0 && (
//                               <span className="ml-2 text-xs bg-red-500 text-white rounded-full px-2 py-0.5">
//                                 {item.badgeCount}
//                               </span>
//                             )}
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </motion.div>
//                 </>
//               )}
//             </AnimatePresence>
//           </div>
//         </div>

//         {/* Mobile menu toggle */}
//         <div className="md:hidden ml-4 z-20">
//           <button
//             onClick={() => setMobileMenuOpen((prev) => !prev)}
//             className="text-teal-600 text-xl"
//           >
//             {mobileMenuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       <AnimatePresence>
//         {mobileMenuOpen && (
//           <motion.div
//             initial={{ height: 0 }}
//             animate={{ height: 'auto' }}
//             exit={{ height: 0 }}
//             className="md:hidden px-4 pb-4 bg-white border-t"
//           >
//             <ul className="space-y-3 pt-3 text-gray-700">
//               {!user ? (
//                 <li>
//                   <button
//                     onClick={() => {
//                       openLogin();
//                       setMobileMenuOpen(false);
//                     }}
//                     className="w-full text-left hover:text-teal-600"
//                   >
//                     Login
//                   </button>
//                 </li>
//               ) : (
//                 <li>
//                   <button
//                     onClick={() => {
//                       logout();
//                       setMobileMenuOpen(false);
//                     }}
//                     className="w-full text-left hover:text-red-500"
//                   >
//                     Logout
//                   </button>
//                 </li>
//               )}
//               <li>
//                 <Link to="/cart" onClick={() => setMobileMenuOpen(false)}>
//                   Cart ({cartCount})
//                 </Link>
//               </li>
//               {dropdownItems.map((item, idx) => (
//                 <li key={idx}>
//                   <Link
//                     to={item.path}
//                     onClick={() => setMobileMenuOpen(false)}
//                     className="flex justify-between items-center"
//                   >
//                     <span>{item.label}</span>
//                     {item.badgeCount > 0 && (
//                       <span className="ml-2 text-xs bg-red-500 text-white rounded-full px-2 py-0.5">
//                         {item.badgeCount}
//                       </span>
//                     )}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// };

// export default Navbar;

// import React, { useState } from 'react';
// import {
//   FaSearch,
//   FaShoppingCart,
//   FaHeart,
//   FaTag,
//   FaGift,
//   FaUserPlus,
//   FaShoppingBag,
//   FaBoxOpen,
//   FaBars,
//   FaTimes,
//   FaSignInAlt,
// } from 'react-icons/fa';
// import { IoIosArrowDown } from 'react-icons/io';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Link } from 'react-router-dom';

// import { useAuth } from '../context/AuthContext';
// import { useCart } from '../context/CartContext';
// import { useModal } from '../context/ModalContext';
// import { useOrders } from '../context/OrderContext';

// const Navbar = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const { user, logout } = useAuth();
//   const { cartItems } = useCart();
//   const { openLogin, openRegister } = useModal();
//   const { orders } = useOrders();

//   const cartCount = cartItems?.reduce((acc, item) => acc + item.quantity, 0) || 0;

//   const ordersCount = user
//     ? orders.filter((order) => order.userId === user.id).length
//     : 0;

//   // Dropdown items with conditional register modal open
//   const dropdownItems = [
//     {
//       label: 'New user? Register',
//       icon: <FaUserPlus className="text-teal-500" />,
//       onClick: () => {
//         if (!user) openRegister();
//       },
//     },
//     {
//       label: 'Orders',
//       icon: <FaBoxOpen className="text-teal-500" />,
//       path: '/orders',
//       badgeCount: ordersCount,
//     },
//     {
//       label: 'Wishlist',
//       icon: <FaHeart className="text-teal-500" />,
//       path: '/wishlist',
//     },
//     {
//       label: 'Offers',
//       icon: <FaTag className="text-teal-500" />,
//       path: '/offers',
//     },
//     {
//       label: 'Gifts',
//       icon: <FaGift className="text-teal-500" />,
//       path: '/gifts',
//     },
//     {
//       label: 'Rewards',
//       icon: <FaShoppingBag className="text-teal-500" />,
//       path: '/rewards',
//     },
//   ];

//   return (
//     <motion.nav
//       initial={{ y: -50, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.4 }}
//       className="w-full shadow-md z-50 bg-white"
//     >
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:px-10 relative">
//         {/* Left: Shop Name */}
//         <Link
//           to="/"
//           className="text-xl md:text-2xl font-bold text-teal-600 mr-4 whitespace-nowrap z-20"
//         >
//           MyShop
//         </Link>

//         {/* Center: Search bar with bg gradient */}
//         <div className="absolute left-1/2 transform -translate-x-1/2 w-full md:w-2/3 flex items-center justify-center bg-gradient-to-r from-purple-100 via-pink-50 to-blue-100 px-4 py-2 rounded-[15px] shadow-sm">
//           <div className="relative flex-1 max-w-md hidden md:block">
//             <input
//               type="text"
//               placeholder="Search products..."
//               className="w-full border rounded-full px-4 py-2 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
//             />
//             <FaSearch className="absolute top-3 left-3 text-gray-500" />
//           </div>
//         </div>

//         {/* Right: Cart + Login/Logout + Dropdown */}
//         <div className="flex items-center gap-4 ml-auto z-20">
//           {/* Cart */}
//           <Link
//             to="/cart"
//             className="relative flex items-center text-gray-700 hover:text-teal-600"
//           >
//             <FaShoppingCart className="mr-1" />
//             <span>Cart</span>
//             {cartCount > 0 && (
//               <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full">
//                 {cartCount}
//               </span>
//             )}
//           </Link>

//           {/* Login or Logout */}
//           {!user ? (
//             <button
//               onClick={openLogin}
//               className="flex items-center text-gray-700 hover:text-teal-600"
//             >
//               <FaSignInAlt className="mr-1" />
//               Login
//             </button>
//           ) : (
//             <button
//               onClick={logout}
//               className="flex items-center text-gray-700 hover:text-red-500"
//             >
//               Logout
//             </button>
//           )}

//           {/* Dropdown */}
//           <div className="relative">
//             <button
//               onClick={() => setDropdownOpen(!dropdownOpen)}
//               className="flex items-center text-gray-700 hover:text-teal-600"
//             >
//               <IoIosArrowDown />
//             </button>
//             <AnimatePresence>
//               {dropdownOpen && (
//                 <>
//                   <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 0.3 }}
//                     exit={{ opacity: 0 }}
//                     onClick={() => setDropdownOpen(false)}
//                     className="fixed inset-0 bg-black z-40"
//                   />
//                   <motion.div
//                     initial={{ scale: 0.95, y: -10, opacity: 0 }}
//                     animate={{ scale: 1, y: 0, opacity: 1 }}
//                     exit={{ scale: 0.95, y: -10, opacity: 0 }}
//                     className="absolute right-0 mt-2 w-64 bg-white border border-teal-100 rounded-xl z-50 shadow-lg"
//                   >
//                     <ul className="divide-y divide-teal-100 text-sm">
//                       {dropdownItems.map((item, index) => (
//                         <li key={index}>
//                           {item.path ? (
//                             <Link
//                               to={item.path}
//                               onClick={() => setDropdownOpen(false)}
//                               className="flex items-center justify-between px-4 py-3 hover:bg-teal-50 text-gray-700"
//                             >
//                               <span className="flex items-center gap-2">
//                                 {item.icon}
//                                 {item.label}
//                               </span>
//                               {item.badgeCount > 0 && (
//                                 <span className="ml-2 text-xs bg-red-500 text-white rounded-full px-2 py-0.5">
//                                   {item.badgeCount}
//                                 </span>
//                               )}
//                             </Link>
//                           ) : (
//                             <button
//                               onClick={() => {
//                                 item.onClick?.();
//                                 setDropdownOpen(false);
//                               }}
//                               className="w-full text-left flex items-center gap-2 px-4 py-3 hover:bg-teal-50 text-gray-700"
//                             >
//                               {item.icon}
//                               {item.label}
//                             </button>
//                           )}
//                         </li>
//                       ))}
//                     </ul>
//                   </motion.div>
//                 </>
//               )}
//             </AnimatePresence>
//           </div>
//         </div>

//         {/* Mobile menu toggle */}
//         <div className="md:hidden ml-4 z-20">
//           <button
//             onClick={() => setMobileMenuOpen((prev) => !prev)}
//             className="text-teal-600 text-xl"
//           >
//             {mobileMenuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       <AnimatePresence>
//         {mobileMenuOpen && (
//           <motion.div
//             initial={{ height: 0 }}
//             animate={{ height: 'auto' }}
//             exit={{ height: 0 }}
//             className="md:hidden px-4 pb-4 bg-white border-t"
//           >
//             <ul className="space-y-3 pt-3 text-gray-700">
//               {!user ? (
//                 <li>
//                   <button
//                     onClick={() => {
//                       openLogin();
//                       setMobileMenuOpen(false);
//                     }}
//                     className="w-full text-left hover:text-teal-600"
//                   >
//                     Login
//                   </button>
//                 </li>
//               ) : (
//                 <li>
//                   <button
//                     onClick={() => {
//                       logout();
//                       setMobileMenuOpen(false);
//                     }}
//                     className="w-full text-left hover:text-red-500"
//                   >
//                     Logout
//                   </button>
//                 </li>
//               )}
//               <li>
//                 <Link to="/cart" onClick={() => setMobileMenuOpen(false)}>
//                   Cart ({cartCount})
//                 </Link>
//               </li>
//               {dropdownItems.map((item, idx) => (
//                 <li key={idx}>
//                   {/* For mobile, use onClick for register modal as well */}
//                   {item.path ? (
//                     <Link
//                       to={item.path}
//                       onClick={() => setMobileMenuOpen(false)}
//                       className="flex justify-between items-center"
//                     >
//                       <span>{item.label}</span>
//                       {item.badgeCount > 0 && (
//                         <span className="ml-2 text-xs bg-red-500 text-white rounded-full px-2 py-0.5">
//                           {item.badgeCount}
//                         </span>
//                       )}
//                     </Link>
//                   ) : (
//                     <button
//                       onClick={() => {
//                         item.onClick?.();
//                         setMobileMenuOpen(false);
//                       }}
//                       className="w-full text-left"
//                     >
//                       {item.label}
//                     </button>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// };

// export default Navbar;


// import React, { useState, useEffect } from 'react';
// import {
//   FaSearch,
//   FaShoppingCart,
//   FaHeart,
//   FaTag,
//   FaGift,
//   FaUserPlus,
//   FaShoppingBag,
//   FaBoxOpen,
//   FaBars,
//   FaTimes,
//   FaSignInAlt,
// } from 'react-icons/fa';
// import { IoIosArrowDown } from 'react-icons/io';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Link } from 'react-router-dom';

// import { useAuth } from '../context/AuthContext';
// import { useCart } from '../context/CartContext';
// import { useModal } from '../context/ModalContext';
// import { useOrders } from '../context/OrderContext';

// const Navbar = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const { user, logout } = useAuth();
//   const { cartItems } = useCart();
//   const { openLogin, openRegister } = useModal();
//   const { orders, fetchOrders } = useOrders();

//   const cartCount = cartItems?.reduce((acc, item) => acc + item.quantity, 0) || 0;

//   // ✅ Ensure we always have the latest orders for the logged-in user
//   useEffect(() => {
//     if (user) {
//       fetchOrders();
//     }
//   }, [user, fetchOrders]);

//   const ordersCount = orders.length; // already user-specific from OrderProvider

//   const dropdownItems = [
//     {
//       label: 'New user? Register',
//       icon: <FaUserPlus className="text-teal-500" />,
//       onClick: () => {
//         if (!user) openRegister();
//       },
//     },
//     {
//       label: 'Orders',
//       icon: <FaBoxOpen className="text-teal-500" />,
//       path: '/orders',
//       badgeCount: ordersCount,
//     },
//     {
//       label: 'Wishlist',
//       icon: <FaHeart className="text-teal-500" />,
//       path: '/wishlist',
//     },
//     {
//       label: 'Offers',
//       icon: <FaTag className="text-teal-500" />,
//       path: '/offers',
//     },
//     {
//       label: 'Gifts',
//       icon: <FaGift className="text-teal-500" />,
//       path: '/gifts',
//     },
//     {
//       label: 'Rewards',
//       icon: <FaShoppingBag className="text-teal-500" />,
//       path: '/rewards',
//     },
//   ];

//   return (
//     <motion.nav
//       initial={{ y: -50, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.4 }}
//       className="w-full shadow-md z-50 bg-white"
//     >
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:px-10 relative">
//         {/* Logo */}
//         <Link
//           to="/"
//           className="text-xl md:text-2xl font-bold text-teal-600 mr-4 whitespace-nowrap z-20"
//         >
//           MyShop
//         </Link>

//         {/* Search Bar */}
//         <div className="absolute left-1/2 transform -translate-x-1/2 w-full md:w-2/3 flex items-center justify-center bg-gradient-to-r from-purple-100 via-pink-50 to-blue-100 px-4 py-2 rounded-[15px] shadow-sm">
//           <div className="relative flex-1 max-w-md hidden md:block">
//             <input
//               type="text"
//               placeholder="Search products..."
//               className="w-full border rounded-full px-4 py-2 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
//             />
//             <FaSearch className="absolute top-3 left-3 text-gray-500" />
//           </div>
//         </div>

//         {/* Right Side */}
//         <div className="flex items-center gap-4 ml-auto z-20">
//           {/* Cart */}
//           <Link
//             to="/cart"
//             className="relative flex items-center text-gray-700 hover:text-teal-600"
//           >
//             <FaShoppingCart className="mr-1" />
//             <span>Cart</span>
//             {cartCount > 0 && (
//               <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full">
//                 {cartCount}
//               </span>
//             )}
//           </Link>

//           {/* Login / Logout */}
//           {!user ? (
//             <button
//               onClick={openLogin}
//               className="flex items-center text-gray-700 hover:text-teal-600"
//             >
//               <FaSignInAlt className="mr-1" />
//               Login
//             </button>
//           ) : (
//             <button
//               onClick={logout}
//               className="flex items-center text-gray-700 hover:text-red-500"
//             >
//               Logout
//             </button>
//           )}

//           {/* Dropdown */}
//           <div className="relative">
//             <button
//               onClick={() => setDropdownOpen(!dropdownOpen)}
//               className="flex items-center text-gray-700 hover:text-teal-600"
//             >
//               <IoIosArrowDown />
//             </button>
//             <AnimatePresence>
//               {dropdownOpen && (
//                 <>
//                   <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 0.3 }}
//                     exit={{ opacity: 0 }}
//                     onClick={() => setDropdownOpen(false)}
//                     className="fixed inset-0 bg-black z-40"
//                   />
//                   <motion.div
//                     initial={{ scale: 0.95, y: -10, opacity: 0 }}
//                     animate={{ scale: 1, y: 0, opacity: 1 }}
//                     exit={{ scale: 0.95, y: -10, opacity: 0 }}
//                     className="absolute right-0 mt-2 w-64 bg-white border border-teal-100 rounded-xl z-50 shadow-lg"
//                   >
//                     <ul className="divide-y divide-teal-100 text-sm">
//                       {dropdownItems.map((item, index) => (
//                         <li key={index}>
//                           {item.path ? (
//                             <Link
//                               to={item.path}
//                               onClick={() => setDropdownOpen(false)}
//                               className="flex items-center justify-between px-4 py-3 hover:bg-teal-50 text-gray-700"
//                             >
//                               <span className="flex items-center gap-2">
//                                 {item.icon}
//                                 {item.label}
//                               </span>
//                               {item.badgeCount > 0 && (
//                                 <span className="ml-2 text-xs bg-red-500 text-white rounded-full px-2 py-0.5">
//                                   {item.badgeCount}
//                                 </span>
//                               )}
//                             </Link>
//                           ) : (
//                             <button
//                               onClick={() => {
//                                 item.onClick?.();
//                                 setDropdownOpen(false);
//                               }}
//                               className="w-full text-left flex items-center gap-2 px-4 py-3 hover:bg-teal-50 text-gray-700"
//                             >
//                               {item.icon}
//                               {item.label}
//                             </button>
//                           )}
//                         </li>
//                       ))}
//                     </ul>
//                   </motion.div>
//                 </>
//               )}
//             </AnimatePresence>
//           </div>
//         </div>

//         {/* Mobile Toggle */}
//         <div className="md:hidden ml-4 z-20">
//           <button
//             onClick={() => setMobileMenuOpen((prev) => !prev)}
//             className="text-teal-600 text-xl"
//           >
//             {mobileMenuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {mobileMenuOpen && (
//           <motion.div
//             initial={{ height: 0 }}
//             animate={{ height: 'auto' }}
//             exit={{ height: 0 }}
//             className="md:hidden px-4 pb-4 bg-white border-t"
//           >
//             <ul className="space-y-3 pt-3 text-gray-700">
//               {!user ? (
//                 <li>
//                   <button
//                     onClick={() => {
//                       openLogin();
//                       setMobileMenuOpen(false);
//                     }}
//                     className="w-full text-left hover:text-teal-600"
//                   >
//                     Login
//                   </button>
//                 </li>
//               ) : (
//                 <li>
//                   <button
//                     onClick={() => {
//                       logout();
//                       setMobileMenuOpen(false);
//                     }}
//                     className="w-full text-left hover:text-red-500"
//                   >
//                     Logout
//                   </button>
//                 </li>
//               )}
//               <li>
//                 <Link to="/cart" onClick={() => setMobileMenuOpen(false)}>
//                   Cart ({cartCount})
//                 </Link>
//               </li>
//               {dropdownItems.map((item, idx) => (
//                 <li key={idx}>
//                   {item.path ? (
//                     <Link
//                       to={item.path}
//                       onClick={() => setMobileMenuOpen(false)}
//                       className="flex justify-between items-center"
//                     >
//                       <span>{item.label}</span>
//                       {item.badgeCount > 0 && (
//                         <span className="ml-2 text-xs bg-red-500 text-white rounded-full px-2 py-0.5">
//                           {item.badgeCount}
//                         </span>
//                       )}
//                     </Link>
//                   ) : (
//                     <button
//                       onClick={() => {
//                         item.onClick?.();
//                         setMobileMenuOpen(false);
//                       }}
//                       className="w-full text-left"
//                     >
//                       {item.label}
//                     </button>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from 'react';
import {
  FaSearch,
  FaShoppingCart,
  FaHeart,
  FaTag,
  FaGift,
  FaUserPlus,
  FaShoppingBag,
  FaBoxOpen,
  FaBars,
  FaTimes,
  FaSignInAlt,
  FaUserShield
} from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { useModal } from '../context/ModalContext';
import { useOrders } from '../context/OrderContext';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { user, logout } = useAuth();
  const { cartItems } = useCart();
  const { openLogin, openRegister } = useModal();
  const { orders, fetchOrders } = useOrders();

  const cartCount = Array.isArray(cartItems)
    ? cartItems.reduce((acc, item) => acc + (item.quantity || 0), 0)
    : 0;

  const ordersCount = Array.isArray(orders) ? orders.length : 0;

  useEffect(() => {
    if (user) {
      fetchOrders();
    }
  }, [user, fetchOrders]);

  const dropdownItems = [
    {
      label: 'New user? Register',
      icon: <FaUserPlus className="text-teal-500" />,
      onClick: () => {
        if (!user) openRegister();
      },
    },
    {
      label: 'Orders',
      icon: <FaBoxOpen className="text-teal-500" />,
      path: '/orders',
      badgeCount: ordersCount,
    },
    {
      label: 'Wishlist',
      icon: <FaHeart className="text-teal-500" />,
      path: '/wishlist',
    },
    {
      label: 'Offers',
      icon: <FaTag className="text-teal-500" />,
      path: '/offers',
    },
    {
      label: 'Gifts',
      icon: <FaGift className="text-teal-500" />,
      path: '/gifts',
    },
    {
      label: 'Rewards',
      icon: <FaShoppingBag className="text-teal-500" />,
      path: '/rewards',
    },
    // ✅ Admin Button — Only for admins
    ...(user?.isAdmin
      ? [{
          label: 'Admin Dashboard',
          icon: <FaUserShield className="text-red-500" />,
          path: '/admin/dashboard'
        }]
      : []),
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="w-full shadow-md z-50 bg-white"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:px-10 relative">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl md:text-2xl font-bold text-teal-600 mr-4 whitespace-nowrap z-20"
        >
          MyShop
        </Link>

        {/* Search Bar */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-full md:w-2/3 flex items-center justify-center bg-gradient-to-r from-purple-100 via-pink-50 to-blue-100 px-4 py-2 rounded-[15px] shadow-sm">
          <div className="relative flex-1 max-w-md hidden md:block">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full border rounded-full px-4 py-2 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <FaSearch className="absolute top-3 left-3 text-gray-500" />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4 ml-auto z-20">
          {/* Cart */}
          <Link
            to="/cart"
            className="relative flex items-center text-gray-700 hover:text-teal-600"
          >
            <FaShoppingCart className="mr-1" />
            <span>Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Login / Logout */}
          {!user ? (
            <button
              onClick={openLogin}
              className="flex items-center text-gray-700 hover:text-teal-600"
            >
              <FaSignInAlt className="mr-1" />
              Login
            </button>
          ) : (
            <button
              onClick={logout}
              className="flex items-center text-gray-700 hover:text-red-500"
            >
              Logout
            </button>
          )}

          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center text-gray-700 hover:text-teal-600"
            >
              <IoIosArrowDown />
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setDropdownOpen(false)}
                    className="fixed inset-0 bg-black z-40"
                  />
                  <motion.div
                    initial={{ scale: 0.95, y: -10, opacity: 0 }}
                    animate={{ scale: 1, y: 0, opacity: 1 }}
                    exit={{ scale: 0.95, y: -10, opacity: 0 }}
                    className="absolute right-0 mt-2 w-64 bg-white border border-teal-100 rounded-xl z-50 shadow-lg"
                  >
                    <ul className="divide-y divide-teal-100 text-sm">
                      {dropdownItems.map((item, index) => (
                        <li key={index}>
                          {item.path ? (
                            <Link
                              to={item.path}
                              onClick={() => setDropdownOpen(false)}
                              className="flex items-center justify-between px-4 py-3 hover:bg-teal-50 text-gray-700"
                            >
                              <span className="flex items-center gap-2">
                                {item.icon}
                                {item.label}
                              </span>
                              {item.badgeCount > 0 && (
                                <span className="ml-2 text-xs bg-red-500 text-white rounded-full px-2 py-0.5">
                                  {item.badgeCount}
                                </span>
                              )}
                            </Link>
                          ) : (
                            <button
                              onClick={() => {
                                item.onClick?.();
                                setDropdownOpen(false);
                              }}
                              className="w-full text-left flex items-center gap-2 px-4 py-3 hover:bg-teal-50 text-gray-700"
                            >
                              {item.icon}
                              {item.label}
                            </button>
                          )}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden ml-4 z-20">
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="text-teal-600 text-xl"
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
            className="md:hidden px-4 pb-4 bg-white border-t"
          >
            <ul className="space-y-3 pt-3 text-gray-700">
              {!user ? (
                <li>
                  <button
                    onClick={() => {
                      openLogin();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-left hover:text-teal-600"
                  >
                    Login
                  </button>
                </li>
              ) : (
                <li>
                  <button
                    onClick={() => {
                      logout();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-left hover:text-red-500"
                  >
                    Logout
                  </button>
                </li>
              )}
              <li>
                <Link to="/cart" onClick={() => setMobileMenuOpen(false)}>
                  Cart ({cartCount})
                </Link>
              </li>
              {dropdownItems.map((item, idx) => (
                <li key={idx}>
                  {item.path ? (
                    <Link
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex justify-between items-center"
                    >
                      <span>{item.label}</span>
                      {item.badgeCount > 0 && (
                        <span className="ml-2 text-xs bg-red-500 text-white rounded-full px-2 py-0.5">
                          {item.badgeCount}
                        </span>
                      )}
                    </Link>
                  ) : (
                    <button
                      onClick={() => {
                        item.onClick?.();
                        setMobileMenuOpen(false);
                      }}
                      className="w-full text-left"
                    >
                      {item.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
