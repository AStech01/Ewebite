// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from '../axios/axios';
// import Banner from '../components/Banner';
// import { FaShoppingCart, FaHeart, FaRegHeart, FaStar, FaArrowRight } from 'react-icons/fa';
// import { motion } from 'framer-motion';
// import { useCart } from '../context/CartContext';
// import { FaArrowLeft } from "react-icons/fa";
// export default function HomePage() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [liked, setLiked] = useState(null);
//   const [hoveredProduct, setHoveredProduct] = useState(null);
// const [currentIndex, setCurrentIndex] = useState(0);
//   const navigate = useNavigate();
//   const { dispatch } = useCart();
// const handleNext = () => {
//   setCurrentIndex((prev) => (prev + 1) % products.length);
// };

// const handlePrev = () => {
//   setCurrentIndex((prev) =>
//     prev === 0 ? products.length - 1 : prev - 1
//   );
// };

// // Auto slide every 60 seconds
// useEffect(() => {
//   if (products.length < 2) return;

//   const interval = setInterval(() => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
//   }, 120000); // 120000 ms = 2 minutes

//   return () => clearInterval(interval);
// }, [products.length]);
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const { data } = await axios.get('/products');
//         setProducts(data);
//         setLoading(false);
//       } catch (err) {
//         setError('Failed to load products');
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-100 flex items-center justify-center">
     
   
//         <motion.div
//           className="text-center"
//           animate={{ opacity: [0.5, 1, 0.5] }}
//           transition={{ duration: 2, repeat: Infinity }}
//         >
//           <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
//           <div className="text-xl font-bold text-gray-800">Loading amazing shoes...</div>
//         </motion.div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-100 flex items-center justify-center">
//         <div className="text-center text-red-600 text-xl bg-white rounded-xl p-8 shadow-lg">
//           {error}
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
//       {/*<div className=''>   <Banner/></div> } 
//       {/* Hero Section */}
//       <div className="relative overflow-hidden bg-gradient-to-r from-purple-100 via-pink-50 to-blue-100 min-h-[80vh]">
//         {/* Animated Background Elements */}
//         <div className="absolute inset-0">
//           {/* Large Purple Circle */}
//           <motion.div
//             className="absolute right-[-10%] top-[10%] w-[500px] h-[500px] bg-gradient-to-br from-purple-300/40 to-purple-500/60 rounded-full"
//             animate={{
//               scale: [1, 1.1, 1],
//               rotate: [0, 180, 360],
//             }}
//             transition={{
//               duration: 20,
//               repeat: Infinity,
//               ease: "linear"
//             }}
//           />
          
//           {/* Secondary Circles */}
//           <motion.div
//             className="absolute left-[70%] bottom-[20%] w-[200px] h-[200px] bg-gradient-to-br from-blue-200/30 to-blue-400/50 rounded-full"
//             animate={{
//               y: [-20, 20, -20],
//               x: [-10, 10, -10],
//             }}
//             transition={{
//               duration: 8,
//               repeat: Infinity,
//               ease: "easeInOut"
//             }}
//           />
          
//           <motion.div
//             className="absolute right-[10%] bottom-[40%] w-[100px] h-[100px] bg-gradient-to-br from-pink-200/40 to-pink-400/60 rounded-full"
//             animate={{
//               scale: [0.8, 1.2, 0.8],
//             }}
//             transition={{
//               duration: 6,
//               repeat: Infinity,
//               ease: "easeInOut"
//             }}
//           />

//           {/* Floating Dots */}
//           {Array.from({length: 20}).map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-2 h-2 bg-purple-300/60 rounded-full"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//               }}
//               animate={{
//                 y: [-10, 10, -10],
//                 opacity: [0.3, 0.8, 0.3],
//               }}
//               transition={{
//                 duration: 3 + Math.random() * 4,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//                 delay: Math.random() * 2,
//               }}
//             />
//           ))}
//         </div>

//         <div className="relative z-10 container mx-auto px-6 py-20">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             {/* Left Content */}
//             <motion.div
//               className="space-y-8"
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <div className="space-y-4">
//                 <motion.h1
//                   className="text-6xl lg:text-8xl font-black text-gray-900 leading-none"
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.2, duration: 0.8 }}
//                 >
//                   BORING
//                   <br />
//                   <span className="text-purple-600">SHOES?</span>
//                 </motion.h1>
                
//                 <motion.p
//                   className="text-xl text-gray-600 max-w-md"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.4, duration: 0.8 }}
//                 >
//                   Let us help you find the perfect pair that matches your style and personality.
//                 </motion.p>
//               </div>

//               <motion.button
//                 className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.6, duration: 0.8 }}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 EXPLORE OUR STORY
//                 <FaArrowRight />
//               </motion.button>
//             </motion.div>

//             {/* Right Content - Featured Shoe */}
//             <motion.div
//               className="relative"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.4, duration: 1 }}
//             >
//               {products.length > 0 && (
//                 <div className="relative">
//                   <motion.img
//                     src={products[0].image?.startsWith('http') 
//                       ? products[0].image 
//                       : `http://localhost:5000${products[0].image}` || 'https://via.placeholder.com/400x300?text=Featured+Shoe'
//                     }
//                     alt="Featured Shoe"
//                     className="w-full max-w-lg mx-auto drop-shadow-2xl"
//                     animate={{
//                       y: [-10, 10, -10],
//                       rotate: [-2, 2, -2],
//                     }}
//                     transition={{
//                       duration: 6,
//                       repeat: Infinity,
//                       ease: "easeInOut"
//                     }}
//                   />
                  
//                   <motion.div
//                     className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl px-6 py-4 shadow-xl"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 1, duration: 0.8 }}
//                   >
//                     <div className="text-center">
//                       <div className="text-2xl font-bold text-purple-600">VARSITY</div>
//                       <div className="text-lg font-semibold text-gray-800">PURPLE</div>
//                     </div>
//                   </motion.div>
//                 </div>
//               )}
//             </motion.div>


 



//           </div>
//         </div>
//       </div>

//       {/* Navigation Categories */}
//       {/* <motion.div
//         className="bg-white py-8 shadow-sm"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.8, duration: 0.8 }}
//       >
//         <div className="container mx-auto px-6">
//           <div className="flex justify-center space-x-12">
//             {['MEN', 'WOMEN', 'KIDS', 'COLLECTIONS'].map((category) => (
//               <motion.button
//                 key={category}
//                 className="text-gray-800 font-semibold text-lg hover:text-purple-600 transition-colors duration-300 relative"
//                 whileHover={{ scale: 1.05 }}
//               >
//                 {category}
//                 <motion.div
//                   className="absolute -bottom-2 left-0 right-0 h-0.5 bg-purple-600"
//                   initial={{ scaleX: 0 }}
//                   whileHover={{ scaleX: 1 }}
//                   transition={{ duration: 0.3 }}
//                 />
//               </motion.button>
//             ))}
//           </div>
//         </div>
//       </motion.div> */}

//       {/* Products Section */}
//       <div className="py-16 bg-gradient-to-r from-purple-100 via-pink-50 to-blue-100">
//         <div className="container mx-auto px-6">
//           <motion.h2
//             className="text-4xl font-bold text-center text-gray-900 mb-12"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             Latest Collection
//           </motion.h2>

//           <motion.div
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//           >
//             {products.map((product, index) => (
//               <motion.div
//                 key={product._id}
//                 className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden relative"
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.1 * index, duration: 0.6 }}
//                 onHoverStart={() => setHoveredProduct(product._id)}
//                 onHoverEnd={() => setHoveredProduct(null)}
//                 whileHover={{ y: -10 }}
//               >
//                 {/* Product Image */}
//                 <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 aspect-square">
//                   <motion.img
//                     src={product.image?.startsWith('http') 
//                       ? product.image 
//                       : `http://localhost:5000${product.image}` || 'https://via.placeholder.com/300x300?text=Shoe'
//                     }
//                     alt={product.name}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                   />
                  
//                   {/* Heart Icon */}
//                   <motion.button
//                     className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg"
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       setLiked(liked === product._id ? null : product._id);
//                     }}
//                     whileTap={{ scale: 1.2 }}
//                     whileHover={{ scale: 1.1 }}
//                   >
//                     {liked === product._id ? 
//                       <FaHeart className="text-red-500 text-lg" /> : 
//                       <FaRegHeart className="text-gray-600 text-lg" />
//                     }
//                   </motion.button>

//                   {/* Quick View Overlay */}
//                   <motion.div
//                     className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                     initial={{ opacity: 0 }}
//                     whileHover={{ opacity: 1 }}
//                   >
//                     <motion.button
//                       className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold"
//                       onClick={() => navigate(`/product/${product._id}`)}
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       Quick View
//                     </motion.button>
//                   </motion.div>
//                 </div>

//                 {/* Product Info */}
//                 <div className="p-6 space-y-4">
//                   <div>
//                     <h3 className="font-bold text-xl text-gray-900 mb-1">{product.name}</h3>
//                     <p className="text-gray-600 text-sm line-clamp-2">
//                       {product.description?.slice(0, 60) || "Premium quality footwear"}...
//                     </p>
//                   </div>

//                   {/* Rating */}
//                   <div className="flex items-center space-x-2">
//                     <div className="flex text-yellow-400">
//                       {[...Array(5)].map((_, i) => (
//                         <FaStar key={i} className={i < 4 ? 'text-yellow-400' : 'text-gray-300'} />
//                       ))}
//                     </div>
//                     <span className="text-gray-500 text-sm">(128)</span>
//                   </div>

//                   {/* Price */}
//                   <div className="flex items-center justify-between">
//                     <div className="space-y-1">
//                       <div className="text-2xl font-bold text-gray-900">₹{product.price}</div>
//                       <div className="text-sm text-gray-500 line-through">₹{(product.price * 1.4).toFixed(0)}</div>
//                     </div>
//                     <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
//                       30% OFF
//                     </div>
//                   </div>

//                   {/* Add to Cart Button */}
//                   <motion.button
//                     className="w-full bg-gray-900 hover:bg-purple-600 text-white py-3 rounded-2xl font-semibold flex items-center justify-center space-x-2 transition-all duration-300"
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity: 1 } });
//                     }}
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     <FaShoppingCart />
//                     <span>Add to Cart</span>
//                   </motion.button>
//                 </div>

//                 {/* Hover Effect Border */}
//                 <motion.div
//                   className="absolute inset-0 rounded-3xl border-2 border-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
//                 />
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>

//       {/* Bottom CTA Section */}
//       <motion.div
//         className="bg-gradient-to-r from-purple-600 to-pink-600 py-16 text-white text-center"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <div className="container mx-auto px-6">
//           <h2 className="text-4xl font-bold mb-4">Step Into Something Great</h2>
//           <p className="text-xl mb-8 opacity-90">Join millions who trust us for their footwear needs</p>
//           <motion.button
//             className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Shop Now
//           </motion.button>
//         </div>
//       </motion.div>
//     </div>
//   );
// }


// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from '../axios/axios';
// import { FaShoppingCart, FaHeart, FaRegHeart, FaStar, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
// import { motion } from 'framer-motion';
// import { useCart } from '../context/CartContext';

// export default function HomePage() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [liked, setLiked] = useState(null);
//   const [hoveredProduct, setHoveredProduct] = useState(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const navigate = useNavigate();
//   const { dispatch } = useCart();

//   const getImageUrl = (img) => {
//     if (!img) return 'https://via.placeholder.com/300x300?text=No+Image';
//     return img.startsWith('http') ? img : `http://localhost:5000${img}`;
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev + 1) % products.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
//   };

//   useEffect(() => {
//     if (products.length < 2) return;
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
//     }, 120000);
//     return () => clearInterval(interval);
//   }, [products]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const { data } = await axios.get('/products');
//         setProducts(data);
//         setLoading(false);
//       } catch (err) {
//         setError('Failed to load products');
//         setLoading(false);
//       }
//     };
//     fetchProducts();
//   }, []);

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-amber-50 to-stone-100 flex items-center justify-center">
//         <motion.div
//           className="text-center"
//           animate={{ opacity: [0.5, 1, 0.5] }}
//           transition={{ duration: 2, repeat: Infinity }}
//         >
//           <div className="w-16 h-16 border-4 border-amber-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
//           <div className="text-xl font-bold text-gray-800">Loading amazing shoes...</div>
//         </motion.div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-amber-50 to-stone-100 flex items-center justify-center">
//         <div className="text-center text-red-600 text-xl bg-white rounded-xl p-8 shadow-lg">
//           {error}
//         </div>
//       </div>
//     );
//   }

//   const currentProduct = products[currentIndex];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-amber-50 via-stone-50 to-amber-100">
//       {/* ===== Hero Section ===== */}
//       <div className="relative overflow-hidden bg-gradient-to-r from-amber-100 via-stone-100 to-amber-50 min-h-[85vh] flex items-center">
//         {/* Background Dots */}
//         <div className="absolute inset-0 opacity-10">
//           <div
//             className="absolute inset-0"
//             style={{
//               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//             }}
//           />
//         </div>

//         <div className="relative z-10 container mx-auto px-6 py-20 grid lg:grid-cols-12 gap-8 items-center">
//           {/* Left Info */}
//           <motion.div
//             className="lg:col-span-3"
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-2xl border border-white/20">
//               <h3 className="text-2xl font-black text-gray-900">{currentProduct?.name || 'Product Name'}</h3>
//               <div className="text-3xl font-bold text-amber-700 mt-2">₹{currentProduct?.price || '0.00'}</div>
//               <p className="text-gray-600 text-sm mt-4">
//                 {currentProduct?.description
//                   ? currentProduct.description.slice(0, 80) + '...'
//                   : 'Premium comfort meets iconic style...'}
//               </p>
//               <motion.button
//                 className="w-full bg-amber-800 hover:bg-amber-900 text-white py-3 mt-6 rounded-2xl font-bold shadow-lg"
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 onClick={() =>
//                   dispatch({
//                     type: 'ADD_TO_CART',
//                     payload: { ...currentProduct, quantity: 1 },
//                   })
//                 }
//               >
//                 BUY
//               </motion.button>
//             </div>
//           </motion.div>

//           {/* Center Shoe */}
//           <motion.div
//             className="lg:col-span-6 flex justify-center"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.3, duration: 1 }}
//           >
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//                 <div className="text-[12rem] lg:text-[16rem] font-black text-amber-900/20 tracking-wider select-none">NIKE</div>
//               </div>
//               <motion.img
//                 src={getImageUrl(currentProduct?.image)}
//                 alt="Main Shoe"
//                 className="relative z-10 w-full max-w-2xl h-auto drop-shadow-2xl transform scale-110"
//                 animate={{ y: [-5, 5, -5], rotate: [-1, 1, -1] }}
//                 transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
//               />
//             </div>
//           </motion.div>

//           {/* Right Thumbnails */}
//           <motion.div
//             className="lg:col-span-3 space-y-4"
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.6, duration: 0.8 }}
//           >
//             {products.slice(0, 3).map((product, index) => (
//               <motion.div
//                 key={product._id}
//                 className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/30 cursor-pointer"
//                 whileHover={{ scale: 1.05 }}
//                 onClick={() => setCurrentIndex(index)}
//               >
//                 <img
//                   src={getImageUrl(product.image)}
//                   alt={product.name}
//                   className="w-full h-20 object-cover rounded-lg mb-2"
//                 />
//                 <div className="text-sm font-semibold text-gray-800 truncate">{product.name}</div>
//                 <div className="text-amber-700 font-bold">₹{product.price}</div>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* Navigation Controls */}
//           <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center space-x-6">
//             <motion.button
//               onClick={handlePrev}
//               className="bg-white/80 text-gray-800 p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <FaArrowLeft size={20} />
//             </motion.button>

//             {/* Thumbnail Dots */}
//             <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-md rounded-full px-6 py-3 shadow-lg">
//               {products.slice(0, 5).map((product, index) => (
//                 <motion.button
//                   key={product._id}
//                   onClick={() => setCurrentIndex(index)}
//                   className={`w-12 h-12 rounded-full overflow-hidden border-2 ${
//                     currentIndex === index ? 'border-amber-600 scale-110' : 'border-transparent'
//                   }`}
//                   whileHover={{ scale: 1.1 }}
//                 >
//                   <img src={getImageUrl(product.image)} alt={product.name} className="w-full h-full object-cover" />
//                 </motion.button>
//               ))}
//             </div>

//             <motion.button
//               onClick={handleNext}
//               className="bg-white/80 text-gray-800 p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <FaArrowRight size={20} />
//             </motion.button>
//           </div>
//         </div>
//       </div>

//       {/* ===== Product Grid Section ===== */}
//       <div className="py-20 bg-gradient-to-r from-stone-100 via-amber-50 to-stone-100">
//         <div className="container mx-auto px-6">
//           <motion.div
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h2 className="text-5xl font-black text-gray-900 mb-4">Latest Collection</h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Discover our newest arrivals featuring cutting-edge design and unmatched comfort
//             </p>
//           </motion.div>

//           <motion.div
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//           >
//             {products.map((product, index) => (
//               <motion.div
//                 key={product._id}
//                 className="group bg-white/80 backdrop-blur-md rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 relative border border-white/30"
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.1 * index, duration: 0.6 }}
//                 onHoverStart={() => setHoveredProduct(product._id)}
//                 onHoverEnd={() => setHoveredProduct(null)}
//                 whileHover={{ y: -10 }}
//               >
//                 {/* Image */}
//                 <div className="relative overflow-hidden bg-gradient-to-br from-amber-50 to-stone-50 aspect-square">
//                   <motion.img
//                     src={getImageUrl(product.image)}
//                     alt={product.name}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                   />
//                   {/* Heart Icon */}
//                   <motion.button
//                     className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg"
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       setLiked(liked === product._id ? null : product._id);
//                     }}
//                     whileTap={{ scale: 1.2 }}
//                     whileHover={{ scale: 1.1 }}
//                   >
//                     {liked === product._id ? (
//                       <FaHeart className="text-red-500 text-lg" />
//                     ) : (
//                       <FaRegHeart className="text-gray-600 text-lg" />
//                     )}
//                   </motion.button>
//                   {/* Overlay Quick View */}
//                   <motion.div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     <motion.button
//                       className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold shadow-lg"
//                       onClick={() => navigate(`/product/${product._id}`)}
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       Quick View
//                     </motion.button>
//                   </motion.div>
//                 </div>

//                 {/* Info */}
//                 <div className="p-6 space-y-4">
//                   <div>
//                     <h3 className="font-black text-xl text-gray-900 mb-2">{product.name}</h3>
//                     <p className="text-gray-600 text-sm line-clamp-2">
//                       {product.description?.slice(0, 60) || 'Premium quality footwear'}...
//                     </p>
//                   </div>
//                   {/* Rating */}
//                   <div className="flex items-center space-x-2">
//                     <div className="flex text-amber-400">
//                       {[...Array(5)].map((_, i) => (
//                         <FaStar key={i} className={i < 4 ? 'text-amber-400' : 'text-gray-300'} />
//                       ))}
//                     </div>
//                     <span className="text-gray-500 text-sm">(128)</span>
//                   </div>
//                   {/* Price */}
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <div className="text-2xl font-black text-gray-900">₹{product.price}</div>
//                       <div className="text-sm text-gray-500 line-through">₹{(product.price * 1.4).toFixed(0)}</div>
//                     </div>
//                     <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-bold">30% OFF</div>
//                   </div>
//                   {/* Cart */}
//                   <motion.button
//                     className="w-full bg-amber-800 hover:bg-amber-900 text-white py-3 rounded-2xl font-bold flex items-center justify-center space-x-2 shadow-lg"
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity: 1 } });
//                     }}
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     <FaShoppingCart />
//                     <span>Add to Cart</span>
//                   </motion.button>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>

//       {/* ===== CTA Section ===== */}
//       <motion.div
//         className="bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 py-20 text-white text-center relative overflow-hidden"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <div className="absolute inset-0 opacity-10 bg-center bg-repeat" style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpolygon points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E")`
//         }} />

//         <div className="container mx-auto px-6 relative z-10">
//           <motion.h2 className="text-5xl font-black mb-6">Step Into Something Great</motion.h2>
//           <motion.p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
//             Join millions who trust us for their footwear needs. Experience comfort, style, and quality like never before.
//           </motion.p>
//           <motion.button
//             className="bg-white text-amber-800 px-10 py-4 rounded-full font-black text-lg hover:bg-gray-100 shadow-2xl flex items-center gap-3 mx-auto"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => navigate('/shop')}
//           >
//             Shop Now
//             <FaArrowRight />
//           </motion.button>
//         </div>
//       </motion.div>
//     </div>
//   );
// }


// import React, { useEffect, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ShoppingCart, Heart, Star, ArrowRight, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';

// export default function HomePage() {
//   const [products, setProducts] = useState([
//     {
//       _id: '1',
//       name: 'Nike Air Max 270',
//       price: 12999,
//       image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop',
//       description: 'Experience the ultimate comfort with Nike Air Max technology'
//     },
//     {
//       _id: '2', 
//       name: 'Nike Air Force 1',
//       price: 8999,
//       image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=600&fit=crop',
//       description: 'Classic basketball shoe with timeless style'
//     },
//     {
//       _id: '3',
//       name: 'Nike React Infinity',
//       price: 14999,
//       image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&h=600&fit=crop',
//       description: 'Designed to help reduce injury and keep you running'
//     },
//     {
//       _id: '4',
//       name: 'Nike Pegasus 39',
//       price: 11999,
//       image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=600&fit=crop',
//       description: 'Your go-to road running companion'
//     },
//     {
//       _id: '5',
//       name: 'Nike Dunk Low',
//       price: 9999,
//       image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=600&fit=crop',
//       description: 'Street style meets basketball heritage'
//     }
//   ]);

//   const [loading, setLoading] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [liked, setLiked] = useState(null);
//   const [hoveredProduct, setHoveredProduct] = useState(null);

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev + 1) % products.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
//   };

//   // Auto slide every 5 seconds
//   useEffect(() => {
//     if (products.length < 2) return;
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [products.length]);

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-100 flex items-center justify-center">
//         <motion.div
//           className="text-center"
//           animate={{ opacity: [0.5, 1, 0.5] }}
//           transition={{ duration: 2, repeat: Infinity }}
//         >
//           <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
//           <div className="text-xl font-bold text-gray-800">Loading amazing shoes...</div>
//         </motion.div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
//       {/* Hero Section */}
//       <div className="relative overflow-hidden bg-gradient-to-r from-purple-100 via-pink-50 to-blue-100 min-h-[90vh]">
//         {/* Animated Background Elements */}
//         <div className="absolute inset-0">
//           <motion.div
//             className="absolute right-[-5%] top-[5%] w-[600px] h-[600px] bg-gradient-to-br from-purple-300/30 to-purple-500/50 rounded-full"
//             animate={{
//               scale: [1, 1.1, 1],
//               rotate: [0, 180, 360],
//             }}
//             transition={{
//               duration: 25,
//               repeat: Infinity,
//               ease: "linear"
//             }}
//           />
          
//           <motion.div
//             className="absolute left-[75%] bottom-[15%] w-[250px] h-[250px] bg-gradient-to-br from-blue-200/25 to-blue-400/45 rounded-full"
//             animate={{
//               y: [-30, 30, -30],
//               x: [-15, 15, -15],
//             }}
//             transition={{
//               duration: 10,
//               repeat: Infinity,
//               ease: "easeInOut"
//             }}
//           />

//           {/* Floating Elements */}
//           {Array.from({length: 25}).map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-2 h-2 bg-purple-300/50 rounded-full"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//               }}
//               animate={{
//                 y: [-15, 15, -15],
//                 opacity: [0.2, 0.8, 0.2],
//               }}
//               transition={{
//                 duration: 4 + Math.random() * 6,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//                 delay: Math.random() * 3,
//               }}
//             />
//           ))}
//         </div>

//         <div className="relative z-10 container mx-auto px-6 py-12">
//           <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[80vh]">
//             {/* Left Content - Nike Style */}
//             <motion.div
//               className="space-y-8"
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               {/* Product Name */}
//               <motion.div
//                 className="space-y-2"
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2, duration: 0.8 }}
//               >
//                 <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-none">
//                   {products[currentIndex]?.name.split(' ')[0]}
//                   <br />
//                   <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//                     {products[currentIndex]?.name.split(' ').slice(1).join(' ')}
//                   </span>
//                 </h1>
//               </motion.div>

//               {/* Price */}
//               <motion.div
//                 className="space-y-1"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3, duration: 0.8 }}
//               >
//                 <div className="text-4xl font-bold text-gray-900">
//                   ₹{products[currentIndex]?.price?.toLocaleString()}
//                 </div>
//                 <div className="text-lg text-gray-500 line-through">
//                   ₹{((products[currentIndex]?.price || 0) * 1.3).toLocaleString()}
//                 </div>
//               </motion.div>

//               {/* Description */}
//               <motion.p
//                 className="text-lg text-gray-600 max-w-md leading-relaxed"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.4, duration: 0.8 }}
//               >
//                 {products[currentIndex]?.description}
//               </motion.p>

//               {/* CTA Button */}
//               <motion.div
//                 className="flex gap-4"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.6, duration: 0.8 }}
//               >
//                 <motion.button
//                   className="bg-gray-900 hover:bg-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <ShoppingCart size={20} />
//                   BUY NOW
//                 </motion.button>

//                 <motion.button
//                   className="border-2 border-gray-900 hover:border-purple-600 text-gray-900 hover:text-purple-600 px-6 py-4 rounded-full font-bold text-lg transition-all duration-300"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <Heart size={20} />
//                 </motion.button>
//               </motion.div>
//             </motion.div>

//             {/* Right Content - Featured Shoe */}
//             <motion.div
//               className="relative flex items-center justify-center"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.4, duration: 1 }}
//             >
//               <div className="relative w-full max-w-2xl">
//                 {/* Main Shoe Image */}
//                 <motion.div
//                   key={currentIndex}
//                   className="relative"
//                   initial={{ opacity: 0, x: 100 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -100 }}
//                   transition={{ duration: 0.8 }}
//                 >
//                   <motion.img
//                     src={products[currentIndex]?.image}
//                     alt={products[currentIndex]?.name}
//                     className="w-full h-auto drop-shadow-2xl transform rotate-[-15deg] hover:rotate-[-10deg] transition-transform duration-500"
//                     animate={{
//                       y: [-10, 10, -10],
//                     }}
//                     transition={{
//                       duration: 6,
//                       repeat: Infinity,
//                       ease: "easeInOut"
//                     }}
//                   />
//                 </motion.div>

//                 {/* Small Product Thumbnails */}
//                 <motion.div
//                   className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-8 space-y-4"
//                   initial={{ opacity: 0, x: 50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: 1, duration: 0.8 }}
//                 >
//                   {products.slice(0, 3).map((product, index) => (
//                     <motion.div
//                       key={product._id}
//                       className={`w-16 h-16 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
//                         index === currentIndex ? 'ring-4 ring-purple-500 scale-110' : 'hover:scale-105'
//                       }`}
//                       onClick={() => setCurrentIndex(index)}
//                       whileHover={{ scale: 1.1 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       <img
//                         src={product.image}
//                         alt={product.name}
//                         className="w-full h-full object-cover"
//                       />
//                     </motion.div>
//                   ))}
//                 </motion.div>

//                 {/* Navigation Controls */}
//                 <div className="absolute top-1/2 -left-16 transform -translate-y-1/2">
//                   <motion.button
//                     onClick={handlePrev}
//                     className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all duration-300"
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.9 }}
//                   >
//                     <ChevronLeft size={20} className="text-gray-700" />
//                   </motion.button>
//                 </div>

//                 <div className="absolute top-1/2 -right-16 transform -translate-y-1/2">
//                   <motion.button
//                     onClick={handleNext}
//                     className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all duration-300"
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.9 }}
//                   >
//                     <ChevronRight size={20} className="text-gray-700" />
//                   </motion.button>
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//           {/* Bottom Carousel Indicators */}
//           <motion.div
//             className="flex justify-center space-x-3 mt-8"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1.2, duration: 0.8 }}
//           >
//             {products.slice(0, 5).map((_, index) => (
//               <motion.button
//                 key={index}
//                 onClick={() => setCurrentIndex(index)}
//                 className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                   index === currentIndex 
//                     ? 'bg-purple-600 scale-125' 
//                     : 'bg-gray-300 hover:bg-gray-400'
//                 }`}
//                 whileHover={{ scale: 1.2 }}
//                 whileTap={{ scale: 0.9 }}
//               />
//             ))}
//           </motion.div>
//         </div>
//       </div>

//       {/* Products Collection Section */}
//       <div className="py-20 bg-gradient-to-r from-purple-100 via-pink-50 to-blue-100">
//         <div className="container mx-auto px-6">
//           <motion.div
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h2 className="text-5xl font-black text-gray-900 mb-4">
//               TRENDING <span className="text-purple-600">COLLECTION</span>
//             </h2>
//             <p className="text-xl text-gray-600">Discover the latest drops and most popular styles</p>
//           </motion.div>

//           <motion.div
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//           >
//             {products.map((product, index) => (
//               <motion.div
//                 key={product._id}
//                 className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden relative border border-white/50"
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.1 * index, duration: 0.6 }}
//                 onHoverStart={() => setHoveredProduct(product._id)}
//                 onHoverEnd={() => setHoveredProduct(null)}
//                 whileHover={{ y: -10, scale: 1.02 }}
//               >
//                 {/* Product Image */}
//                 <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 aspect-square">
//                   <motion.img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                   />
                  
//                   {/* Heart Icon */}
//                   <motion.button
//                     className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg"
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       setLiked(liked === product._id ? null : product._id);
//                     }}
//                     whileTap={{ scale: 1.2 }}
//                     whileHover={{ scale: 1.1 }}
//                   >
//                     {liked === product._id ? 
//                       <Heart className="text-red-500 text-lg fill-current" size={18} /> : 
//                       <Heart className="text-gray-600 text-lg" size={18} />
//                     }
//                   </motion.button>

//                   {/* Quick Add Overlay */}
//                   <motion.div
//                     className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                     initial={{ opacity: 0 }}
//                     whileHover={{ opacity: 1 }}
//                   >
//                     <motion.button
//                       className="bg-white text-gray-900 px-6 py-2 rounded-full font-bold shadow-lg"
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       Quick Add
//                     </motion.button>
//                   </motion.div>
//                 </div>

//                 {/* Product Info */}
//                 <div className="p-6 space-y-4">
//                   <div>
//                     <h3 className="font-black text-xl text-gray-900 mb-1">{product.name}</h3>
//                     <p className="text-gray-600 text-sm">
//                       {product.description?.slice(0, 50)}...
//                     </p>
//                   </div>

//                   {/* Rating */}
//                   <div className="flex items-center space-x-2">
//                     <div className="flex text-yellow-400">
//                       {[...Array(5)].map((_, i) => (
//                         <Star key={i} size={16} className={i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'} />
//                       ))}
//                     </div>
//                     <span className="text-gray-500 text-sm">(4.5)</span>
//                   </div>

//                   {/* Price */}
//                   <div className="flex items-center justify-between">
//                     <div className="space-y-1">
//                       <div className="text-2xl font-black text-gray-900">₹{product.price.toLocaleString()}</div>
//                       <div className="text-sm text-gray-500 line-through">₹{(product.price * 1.3).toLocaleString()}</div>
//                     </div>
//                     <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-bold">
//                       23% OFF
//                     </div>
//                   </div>

//                   {/* Add to Cart Button */}
//                   <motion.button
//                     className="w-full bg-gray-900 hover:bg-purple-600 text-white py-3 rounded-2xl font-bold flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl"
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     <ShoppingCart size={18} />
//                     <span>ADD TO CART</span>
//                   </motion.button>
//                 </div>

//                 {/* Hover Effect Border */}
//                 <motion.div
//                   className="absolute inset-0 rounded-3xl border-2 border-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
//                 />
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>

//       {/* Bottom CTA Section */}
//       <motion.div
//         className="bg-gradient-to-r from-gray-900 via-purple-900 to-pink-900 py-20 text-white text-center relative overflow-hidden"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         {/* Background Pattern */}
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
//         </div>
        
//         <div className="container mx-auto px-6 relative z-10">
//           <motion.h2
//             className="text-5xl font-black mb-6"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.8 }}
//           >
//             STEP INTO THE FUTURE
//           </motion.h2>
//           <motion.p
//             className="text-2xl mb-10 opacity-90 max-w-2xl mx-auto"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4, duration: 0.8 }}
//           >
//             Join millions who trust us for premium quality footwear and unmatched style
//           </motion.p>
//           <motion.div
//             className="flex flex-col sm:flex-row gap-4 justify-center"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6, duration: 0.8 }}
//           >
//             <motion.button
//               className="bg-white text-gray-900 px-10 py-4 rounded-full font-black text-lg hover:bg-gray-100 transition-colors duration-300 shadow-xl"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               SHOP COLLECTION
//             </motion.button>
//             <motion.button
//               className="border-2 border-white text-white px-10 py-4 rounded-full font-black text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               LEARN MORE
//             </motion.button>
//           </motion.div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }


// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ShoppingCart, Heart, Star, ArrowRight, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
// import { useCart } from '../context/CartContext';
// export default function HomePage() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [liked, setLiked] = useState([]);
//   const [hoveredProduct, setHoveredProduct] = useState(null);
//   const [cart, setCart] = useState([]);
  
// //   const [products, setProducts] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState('');
// //   const [liked, setLiked] = useState(null);
// //   const [hoveredProduct, setHoveredProduct] = useState(null);
// //  const [currentIndex, setCurrentIndex] = useState(0);
//    const navigate = useNavigate();
//    const { dispatch } = useCart();
// //  const handleNext = () => {
// //    setCurrentIndex((prev) => (prev + 1) % products.length);
// //  };

// //  const handlePrev = () => {
// //    setCurrentIndex((prev) =>
// //      prev === 0 ? products.length - 1 : prev - 1
// //    );
// //  };

// // // Auto slide every 60 seconds
//  useEffect(() => {
//    if (products.length < 2) return;
//    const interval = setInterval(() => {
//      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
//    }, 120000); // 120000 ms = 2 minutes

//    return () => clearInterval(interval);
//  }, [products.length]);
//    useEffect(() => {
//      const fetchProducts = async () => {
//        try {
//          const { data } = await axios.get('/products');
//          setProducts(data);
//          setLoading(false);
//        } catch (err) {
//         setError('Failed to load products');
//          setLoading(false);
//        }
//      };

//     fetchProducts();
//   }, []);

//   // Mock user state
//   const [user, setUser] = useState(null);

//   // Mock API call to fetch products
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setLoading(true);
//         // Simulate API delay
//         await new Promise(resolve => setTimeout(resolve, 1500));
        
//         // Mock products data
//         const mockProducts = [
//           {
//             _id: '1',
//             name: 'Nike Air Max 270',
//             price: 12999,
//             image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop',
//             description: 'Experience the ultimate comfort with Nike Air Max technology. Perfect for daily wear and athletic activities.'
//           },
//           {
//             _id: '2', 
//             name: 'Adidas Ultraboost 22',
//             price: 15999,
//             image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=600&fit=crop',
//             description: 'Revolutionary energy return with every step. The most responsive Boost ever created.'
//           },
//           {
//             _id: '3',
//             name: 'Nike React Infinity',
//             price: 14999,
//             image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&h=600&fit=crop',
//             description: 'Designed to help reduce injury and keep you running. Smooth and stable ride.'
//           },
//           {
//             _id: '4',
//             name: 'Nike Pegasus 39',
//             price: 11999,
//             image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=600&fit=crop',
//             description: 'Your go-to road running companion. Trusted by runners worldwide for decades.'
//           },
//           {
//             _id: '5',
//             name: 'Nike Dunk Low',
//             price: 9999,
//             image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=600&fit=crop',
//             description: 'Street style meets basketball heritage. Classic design with modern comfort.'
//           },
//           {
//             _id: '6',
//             name: 'Converse Chuck Taylor',
//             price: 5999,
//             image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800&h=600&fit=crop',
//             description: 'Timeless classic that never goes out of style. Perfect for casual everyday wear.'
//           },
//           {
//             _id: '7',
//             name: 'Vans Old Skool',
//             price: 6999,
//             image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&h=600&fit=crop',
//             description: 'Skateboarding icon with signature waffle sole. Durable and stylish for any occasion.'
//           },
//           {
//             _id: '8',
//             name: 'New Balance 990v5',
//             price: 17999,
//             image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&h=600&fit=crop',
//             description: 'Premium craftsmanship meets modern performance. Made in USA with superior materials.'
//           }
//         ];
        
//         setProducts(mockProducts);
//         setError('');
//       } catch (err) {
//         console.error('Error fetching products:', err);
//         setError('Failed to load products. Please try again.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // Carousel navigation
//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev + 1) % products.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
//   };

//   // Auto slide every 5 seconds
//   useEffect(() => {
//     if (products.length < 2) return;
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [products.length]);

//   // Add to cart functionality
//   const handleAddToCart = (product) => {
//     try {
//       const existingItem = cart.find(item => item.id === product._id);
      
//       if (existingItem) {
//         setCart(cart.map(item => 
//           item.id === product._id 
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         ));
//       } else {
//         setCart([...cart, { 
//           id: product._id,
//           name: product.name,
//           price: product.price,
//           image: product.image,
//           quantity: 1
//         }]);
//       }
      
//       // Show success notification (you can enhance this)
//       alert(`${product.name} added to cart!`);
//     } catch (error) {
//       console.error('Error adding to cart:', error);
//       alert('Failed to add item to cart. Please try again.');
//     }
//   };

//   // Toggle like functionality
//   const handleToggleLike = (productId) => {
//     setLiked(prev => 
//       prev.includes(productId) 
//         ? prev.filter(id => id !== productId)
//         : [...prev, productId]
//     );
//   };

//   // Navigate to product details (mock function)
//   const handleProductClick = (productId) => {
//     alert(`Navigating to product details for ID: ${productId}`);
//     // In real app: navigate(`/product/${productId}`);
//   };

//   // Mock navigation functions
//   const handleNavigation = (path) => {
//     alert(`Navigating to: ${path}`);
//     // In real app: navigate(path);
//   };

//   // Format image URL
//   const getImageUrl = (image) => {
//     if (!image) return 'https://via.placeholder.com/400x400?text=No+Image';
//     return image.startsWith('http') ? image : `http://localhost:5000${image}`;
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-100 flex items-center justify-center">
//         <motion.div
//           className="text-center"
//           animate={{ opacity: [0.5, 1, 0.5] }}
//           transition={{ duration: 2, repeat: Infinity }}
//         >
//           <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
//           <div className="text-xl font-bold text-gray-800">Loading amazing shoes...</div>
//         </motion.div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-100 flex items-center justify-center">
//         <div className="text-center text-red-600 text-xl bg-white rounded-xl p-8 shadow-lg max-w-md">
//           <h2 className="text-2xl font-bold mb-4">Oops! Something went wrong</h2>
//           <p className="mb-6">{error}</p>
//           <button 
//             onClick={() => window.location.reload()}
//             className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors"
//           >
//             Try Again
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
//       {/* Hero Section */}
//       <div className="relative overflow-hidden bg-gradient-to-r from-purple-100 via-pink-50 to-blue-100 min-h-[90vh]">
//         {/* Animated Background Elements */}
//         <div className="absolute inset-0">
//           <motion.div
//             className="absolute right-[-5%] top-[5%] w-[600px] h-[600px] bg-gradient-to-br from-purple-300/30 to-purple-500/50 rounded-full"
//             animate={{
//               scale: [1, 1.1, 1],
//               rotate: [0, 180, 360],
//             }}
//             transition={{
//               duration: 25,
//               repeat: Infinity,
//               ease: "linear"
//             }}
//           />
          
//           <motion.div
//             className="absolute left-[75%] bottom-[15%] w-[250px] h-[250px] bg-gradient-to-br from-blue-200/25 to-blue-400/45 rounded-full"
//             animate={{
//               y: [-30, 30, -30],
//               x: [-15, 15, -15],
//             }}
//             transition={{
//               duration: 10,
//               repeat: Infinity,
//               ease: "easeInOut"
//             }}
//           />

//           {/* Floating Elements */}
//           {Array.from({length: 25}).map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-2 h-2 bg-purple-300/50 rounded-full"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//               }}
//               animate={{
//                 y: [-15, 15, -15],
//                 opacity: [0.2, 0.8, 0.2],
//               }}
//               transition={{
//                 duration: 4 + Math.random() * 6,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//                 delay: Math.random() * 3,
//               }}
//             />
//           ))}
//         </div>

//         <div className="relative z-10 container mx-auto px-6 py-12">
//           <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[80vh]">
//             {/* Left Content - Nike Style */}
//             <motion.div
//               className="space-y-8"
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               {products.length > 0 && (
//                 <>
//                   {/* Product Name */}
//                   <motion.div
//                     className="space-y-2"
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.2, duration: 0.8 }}
//                   >
//                     <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-none">
//                       {products[currentIndex]?.name?.split(' ')[0] || 'AMAZING'}
//                       <br />
//                       <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//                         {products[currentIndex]?.name?.split(' ').slice(1).join(' ') || 'SHOES'}
//                       </span>
//                     </h1>
//                   </motion.div>

//                   {/* Price */}
//                   <motion.div
//                     className="space-y-1"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.3, duration: 0.8 }}
//                   >
//                     <div className="text-4xl font-bold text-gray-900">
//                       ₹{products[currentIndex]?.price?.toLocaleString() || '0'}
//                     </div>
//                     <div className="text-lg text-gray-500 line-through">
//                       ₹{((products[currentIndex]?.price || 0) * 1.3).toLocaleString()}
//                     </div>
//                   </motion.div>

//                   {/* Description */}
//                   <motion.p
//                     className="text-lg text-gray-600 max-w-md leading-relaxed"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.4, duration: 0.8 }}
//                   >
//                     {products[currentIndex]?.description || 'Premium quality footwear designed for comfort and style.'}
//                   </motion.p>

//                   {/* CTA Buttons */}
//                   <motion.div
//                     className="flex gap-4 flex-wrap"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.6, duration: 0.8 }}
//                   >
//                     <motion.button
//                       onClick={() => handleAddToCart(products[currentIndex])}
//                       className="bg-gray-900 hover:bg-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl"
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       <ShoppingCart size={20} />
//                       ADD TO CART
//                     </motion.button>

//                     <motion.button
//                       onClick={() => handleToggleLike(products[currentIndex]?._id)}
//                       className={`border-2 px-6 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
//                         liked.includes(products[currentIndex]?._id) 
//                           ? 'border-red-500 text-red-500 bg-red-50'
//                           : 'border-gray-900 hover:border-purple-600 text-gray-900 hover:text-purple-600'
//                       }`}
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       <Heart 
//                         size={20} 
//                         className={liked.includes(products[currentIndex]?._id) ? 'fill-current' : ''} 
//                       />
//                     </motion.button>

//                     <motion.button
//                       onClick={() => handleProductClick(products[currentIndex]?._id)}
//                       className="border-2 border-gray-900 hover:border-purple-600 text-gray-900 hover:text-purple-600 px-6 py-4 rounded-full font-bold text-lg transition-all duration-300"
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       <Eye size={20} />
//                     </motion.button>
//                   </motion.div>
//                 </>
//               )}
//             </motion.div>

//             {/* Right Content - Featured Shoe */}
//             <motion.div
//               className="relative flex items-center justify-center"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.4, duration: 1 }}
//             >
//               {products.length > 0 && (
//                 <div className="relative w-full max-w-2xl">
//                   {/* Main Shoe Image */}
//                   <AnimatePresence mode="wait">
//                     <motion.div
//                       key={currentIndex}
//                       className="relative"
//                       initial={{ opacity: 0, x: 100 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       exit={{ opacity: 0, x: -100 }}
//                       transition={{ duration: 0.8 }}
//                     >
//                       <motion.img
//                         src={getImageUrl(products[currentIndex]?.image)}
//                         alt={products[currentIndex]?.name || 'Product'}
//                         className="w-full h-auto drop-shadow-2xl transform rotate-[-15deg] hover:rotate-[-10deg] transition-transform duration-500 cursor-pointer"
//                         onClick={() => handleProductClick(products[currentIndex]?._id)}
//                         animate={{
//                           y: [-10, 10, -10],
//                         }}
//                         transition={{
//                           duration: 6,
//                           repeat: Infinity,
//                           ease: "easeInOut"
//                         }}
//                         onError={(e) => {
//                           e.target.src = 'https://via.placeholder.com/400x400?text=No+Image';
//                         }}
//                       />
//                     </motion.div>
//                   </AnimatePresence>

//                   {/* Small Product Thumbnails */}
//                   <motion.div
//                     className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-8 space-y-4 hidden lg:block"
//                     initial={{ opacity: 0, x: 50 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 1, duration: 0.8 }}
//                   >
//                     {products.slice(0, Math.min(3, products.length)).map((product, index) => (
//                       <motion.div
//                         key={product._id}
//                         className={`w-16 h-16 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
//                           index === currentIndex ? 'ring-4 ring-purple-500 scale-110' : 'hover:scale-105'
//                         }`}
//                         onClick={() => setCurrentIndex(index)}
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.95 }}
//                       >
//                         <img
//                           src={getImageUrl(product.image)}
//                           alt={product.name}
//                           className="w-full h-full object-cover"
//                           onError={(e) => {
//                             e.target.src = 'https://via.placeholder.com/64x64?text=No+Image';
//                           }}
//                         />
//                       </motion.div>
//                     ))}
//                   </motion.div>

//                   {/* Navigation Controls */}
//                   {products.length > 1 && (
//                     <>
//                       <div className="absolute top-1/2 left-4 lg:-left-16 transform -translate-y-1/2">
//                         <motion.button
//                           onClick={handlePrev}
//                           className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all duration-300"
//                           whileHover={{ scale: 1.1 }}
//                           whileTap={{ scale: 0.9 }}
//                         >
//                           <ChevronLeft size={20} className="text-gray-700" />
//                         </motion.button>
//                       </div>

//                       <div className="absolute top-1/2 right-4 lg:-right-16 transform -translate-y-1/2">
//                         <motion.button
//                           onClick={handleNext}
//                           className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all duration-300"
//                           whileHover={{ scale: 1.1 }}
//                           whileTap={{ scale: 0.9 }}
//                         >
//                           <ChevronRight size={20} className="text-gray-700" />
//                         </motion.button>
//                       </div>
//                     </>
//                   )}
//                 </div>
//               )}
//             </motion.div>
//           </div>

//           {/* Bottom Carousel Indicators */}
//           {products.length > 1 && (
//             <motion.div
//               className="flex justify-center space-x-3 mt-8"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1.2, duration: 0.8 }}
//             >
//               {products.slice(0, Math.min(5, products.length)).map((_, index) => (
//                 <motion.button
//                   key={index}
//                   onClick={() => setCurrentIndex(index)}
//                   className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                     index === currentIndex 
//                       ? 'bg-purple-600 scale-125' 
//                       : 'bg-gray-300 hover:bg-gray-400'
//                   }`}
//                   whileHover={{ scale: 1.2 }}
//                   whileTap={{ scale: 0.9 }}
//                 />
//               ))}
//             </motion.div>
//           )}
//         </div>
//       </div>

//       {/* Products Collection Section */}
//       {products.length > 0 && (
//         <div className="py-20 bg-gradient-to-r from-purple-100 via-pink-50 to-blue-100">
//           <div className="container mx-auto px-6">
//             <motion.div
//               className="text-center mb-16"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <h2 className="text-5xl font-black text-gray-900 mb-4">
//                 TRENDING <span className="text-purple-600">COLLECTION</span>
//               </h2>
//               <p className="text-xl text-gray-600">Discover the latest drops and most popular styles</p>
//             </motion.div>

//             <motion.div
//               className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.3, duration: 0.8 }}
//             >
//               {products.map((product, index) => (
//                 <motion.div
//                   key={product._id}
//                   className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden relative border border-white/50"
//                   initial={{ opacity: 0, y: 50 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.1 * index, duration: 0.6 }}
//                   onHoverStart={() => setHoveredProduct(product._id)}
//                   onHoverEnd={() => setHoveredProduct(null)}
//                   whileHover={{ y: -10, scale: 1.02 }}
//                 >
//                   {/* Product Image */}
//                   <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 aspect-square">
//                     <motion.img
//                       src={getImageUrl(product.image)}
//                       alt={product.name}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 cursor-pointer"
//                       onClick={() => handleProductClick(product._id)}
//                       onError={(e) => {
//                         e.target.src = 'https://via.placeholder.com/300x300?text=No+Image';
//                       }}
//                     />
                    
//                     {/* Heart Icon */}
//                     <motion.button
//                       className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg"
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         handleToggleLike(product._id);
//                       }}
//                       whileTap={{ scale: 1.2 }}
//                       whileHover={{ scale: 1.1 }}
//                     >
//                       <Heart 
//                         className={`text-lg ${liked.includes(product._id) ? 'text-red-500 fill-current' : 'text-gray-600'}`}
//                         size={18} 
//                       />
//                     </motion.button>

//                     {/* Quick Add Overlay */}
//                     <motion.div
//                       className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                       initial={{ opacity: 0 }}
//                       whileHover={{ opacity: 1 }}
//                     >
//                       <motion.button
//                         className="bg-white text-gray-900 px-6 py-2 rounded-full font-bold shadow-lg"
//                         onClick={() => handleProductClick(product._id)}
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                       >
//                         View Details
//                       </motion.button>
//                     </motion.div>
//                   </div>

//                   {/* Product Info */}
//                   <div className="p-6 space-y-4">
//                     <div>
//                       <h3 className="font-black text-xl text-gray-900 mb-1 cursor-pointer hover:text-purple-600 transition-colors" 
//                           onClick={() => handleProductClick(product._id)}>
//                         {product.name}
//                       </h3>
//                       <p className="text-gray-600 text-sm">
//                         {product.description ? 
//                           (product.description.length > 50 ? 
//                             `${product.description.slice(0, 50)}...` : 
//                             product.description
//                           ) : 
//                           'Premium quality footwear'
//                         }
//                       </p>
//                     </div>

//                     {/* Rating */}
//                     <div className="flex items-center space-x-2">
//                       <div className="flex text-yellow-400">
//                         {[...Array(5)].map((_, i) => (
//                           <Star key={i} size={16} className={i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'} />
//                         ))}
//                       </div>
//                       <span className="text-gray-500 text-sm">(4.5)</span>
//                     </div>

//                     {/* Price */}
//                     <div className="flex items-center justify-between">
//                       <div className="space-y-1">
//                         <div className="text-2xl font-black text-gray-900">₹{product.price?.toLocaleString() || '0'}</div>
//                         <div className="text-sm text-gray-500 line-through">₹{((product.price || 0) * 1.3).toLocaleString()}</div>
//                       </div>
//                       <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-bold">
//                         23% OFF
//                       </div>
//                     </div>

//                     {/* Add to Cart Button */}
//                     <motion.button
//                       className="w-full bg-gray-900 hover:bg-purple-600 text-white py-3 rounded-2xl font-bold flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl"
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         handleAddToCart(product);
//                       }}
//                       whileHover={{ scale: 1.02 }}
//                       whileTap={{ scale: 0.98 }}
//                     >
//                       <ShoppingCart size={18} />
//                       <span>ADD TO CART</span>
//                     </motion.button>
//                   </div>

//                   {/* Hover Effect Border */}
//                   <motion.div
//                     className="absolute inset-0 rounded-3xl border-2 border-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
//                   />
//                 </motion.div>
//               ))}
//             </motion.div>

//             {/* Cart Summary */}
//             {cart.length > 0 && (
//               <motion.div
//                 className="fixed bottom-6 right-6 bg-white rounded-2xl shadow-2xl p-6 max-w-sm z-50"
//                 initial={{ opacity: 0, y: 100 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <h3 className="font-bold text-lg mb-3">Cart ({cart.length} items)</h3>
//                 <div className="space-y-2 max-h-40 overflow-y-auto">
//                   {cart.slice(0, 3).map((item) => (
//                     <div key={item.id} className="flex items-center gap-3 text-sm">
//                       <img src={item.image} alt={item.name} className="w-8 h-8 rounded object-cover" />
//                       <span className="flex-1">{item.name}</span>
//                       <span className="font-semibold">×{item.quantity}</span>
//                     </div>
//                   ))}
//                   {cart.length > 3 && (
//                     <p className="text-sm text-gray-500">...and {cart.length - 3} more items</p>
//                   )}
//                 </div>
//                 <div className="mt-4 pt-3 border-t">
//                   <div className="flex justify-between items-center mb-3">
//                     <span className="font-bold">Total:</span>
//                     <span className="font-bold text-lg">
//                       ₹{cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toLocaleString()}
//                     </span>
//                   </div>
//                   <button
//                     onClick={() => handleNavigation('/cart')}
//                     className="w-full bg-purple-600 text-white py-2 rounded-full hover:bg-purple-700 transition-colors"
//                   >
//                     View Cart
//                   </button>
//                 </div>
//               </motion.div>
//             )}

//             {/* Show More Products Button */}
//             {products.length > 8 && (
//               <motion.div
//                 className="text-center mt-12"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.8, duration: 0.8 }}
//               >
//                 <motion.button
//                   onClick={() => handleNavigation('/products')}
//                   className="bg-gray-900 hover:bg-purple-600 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   VIEW ALL PRODUCTS
//                 </motion.button>
//               </motion.div>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Bottom CTA Section */}
//       <motion.div
//         className="bg-gradient-to-r from-gray-900 via-purple-900 to-pink-900 py-20 text-white text-center relative overflow-hidden"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         {/* Background Pattern */}
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
//         </div>
        
//         <div className="container mx-auto px-6 relative z-10">
//           <motion.h2
//             className="text-5xl font-black mb-6"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.8 }}
//           >
//             STEP INTO THE FUTURE
//           </motion.h2>
//           <motion.p
//             className="text-2xl mb-10 opacity-90 max-w-2xl mx-auto"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4, duration: 0.8 }}
//           >
//             Join millions who trust us for premium quality footwear and unmatched style
//           </motion.p>
//           <motion.div
//             className="flex flex-col sm:flex-row gap-4 justify-center"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6, duration: 0.8 }}
//           >
//             <motion.button
//               onClick={() => handleNavigation('/products')}
//               className="bg-white text-gray-900 px-10 py-4 rounded-full font-black text-lg hover:bg-gray-100 transition-colors duration-300 shadow-xl"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               SHOP COLLECTION
//             </motion.button>
//             <motion.button
//               onClick={() => handleNavigation('/about')}
//               className="border-2 border-white text-white px-10 py-4 rounded-full font-black text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               LEARN MORE
//             </motion.button>
//           </motion.div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }



// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ShoppingCart, Heart, Star, ArrowRight, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

// // API base URL - adjust this to your backend URL
// const API_BASE_URL = 'http://localhost:5000/api';

// export default function HomePage() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [likedProducts, setLikedProducts] = useState([]);
//   const [hoveredProduct, setHoveredProduct] = useState(null);
//   const [cart, setCart] = useState([]);
//   const [user, setUser] = useState(null); // For future authentication
//   const navigate = useNavigate();

//   // Fetch products from API
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(`${API_BASE_URL}/products`);
//         setProducts(response.data);
//         setError('');
//       } catch (err) {
//         console.error('Error fetching products:', err);
//         setError('Failed to load products. Please try again later.');
//         // Fallback to mock data if API fails (for demo purposes)
//         setProducts(getMockProducts());
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // Mock data fallback
//   const getMockProducts = () => {
//     return [
//       {
//         _id: '1',
//         name: 'Nike Air Max 270',
//         price: 12999,
//         image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop',
//         description: 'Experience the ultimate comfort with Nike Air Max technology.'
//       },
//       {
//         _id: '2', 
//         name: 'Adidas Ultraboost 22',
//         price: 15999,
//         image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=600&fit=crop',
//         description: 'Revolutionary energy return with every step.'
//       },
//       {
//         _id: '3',
//         name: 'Nike React Infinity',
//         price: 14999,
//         image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&h=600&fit=crop',
//         description: 'Designed to help reduce injury and keep you running.'
//       },
//       {
//         _id: '4',
//         name: 'Nike Pegasus 39',
//         price: 11999,
//         image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=600&fit=crop',
//         description: 'Your go-to road running companion.'
//       },
//       {
//         _id: '5',
//         name: 'Nike Dunk Low',
//         price: 9999,
//         image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=600&fit=crop',
//         description: 'Street style meets basketball heritage.'
//       },
//       {
//         _id: '6',
//         name: 'Converse Chuck Taylor',
//         price: 5999,
//         image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800&h=600&fit=crop',
//         description: 'Timeless classic that never goes out of style.'
//       },
//       {
//         _id: '7',
//         name: 'Vans Old Skool',
//         price: 6999,
//         image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&h=600&fit=crop',
//         description: 'Skateboarding icon with signature waffle sole.'
//       },
//       {
//         _id: '8',
//         name: 'New Balance 990v5',
//         price: 17999,
//         image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&h=600&fit=crop',
//         description: 'Premium craftsmanship meets modern performance.'
//       }
//     ];
//   };

//   // Carousel navigation
//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev + 1) % products.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
//   };

//   // Auto slide every 5 seconds
//   useEffect(() => {
//     if (products.length < 2) return;
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [products.length]);

//   // Add to cart functionality
//   const handleAddToCart = async (product) => {
//     try {
//       // In a real app, you would make an API call here
//       // await axios.post(`${API_BASE_URL}/cart`, { productId: product._id });
      
//       const existingItem = cart.find(item => item.id === product._id);
      
//       if (existingItem) {
//         setCart(cart.map(item => 
//           item.id === product._id 
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         ));
//       } else {
//         setCart([...cart, { 
//           id: product._id,
//           name: product.name,
//           price: product.price,
//           image: product.image,
//           quantity: 1
//         }]);
//       }
      
//       // Show success notification
//       alert(`${product.name} added to cart!`);
//     } catch (error) {
//       console.error('Error adding to cart:', error);
//       alert('Failed to add item to cart. Please try again.');
//     }
//   };

//   // Toggle like functionality
//   const handleToggleLike = async (productId) => {
//     try {
//       // In a real app, you would make an API call here
//       // await axios.post(`${API_BASE_URL}/wishlist`, { productId });
      
//       setLikedProducts(prev => 
//         prev.includes(productId) 
//           ? prev.filter(id => id !== productId)
//           : [...prev, productId]
//       );
//     } catch (error) {
//       console.error('Error toggling like:', error);
//     }
//   };

//   // Navigate to product details
//   const handleProductClick = (productId) => {
//     navigate(`/product/${productId}`);
//   };

//   // Format image URL
//   const getImageUrl = (image) => {
//     if (!image) return 'https://via.placeholder.com/400x400?text=No+Image';
//     return image.startsWith('http') ? image : `${API_BASE_URL}/${image}`;
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-100 flex items-center justify-center">
//         <motion.div
//           className="text-center"
//           animate={{ opacity: [0.5, 1, 0.5] }}
//           transition={{ duration: 2, repeat: Infinity }}
//         >
//           <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
//           <div className="text-xl font-bold text-gray-800">Loading amazing shoes...</div>
//         </motion.div>
//       </div>
//     );
//   }

//   if (error && products.length === 0) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-100 flex items-center justify-center">
//         <div className="text-center text-red-600 text-xl bg-white rounded-xl p-8 shadow-lg max-w-md">
//           <h2 className="text-2xl font-bold mb-4">Oops! Something went wrong</h2>
//           <p className="mb-6">{error}</p>
//           <button 
//             onClick={() => window.location.reload()}
//             className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors"
//           >
//             Try Again
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
//       {/* Hero Section */}
//       <div className="relative overflow-hidden bg-gradient-to-r from-purple-100 via-pink-50 to-blue-100 min-h-[90vh]">
//         {/* Animated Background Elements */}
//         <div className="absolute inset-0">
//           <motion.div
//             className="absolute right-[-5%] top-[5%] w-[600px] h-[600px] bg-gradient-to-br from-purple-300/30 to-purple-500/50 rounded-full"
//             animate={{
//               scale: [1, 1.1, 1],
//               rotate: [0, 180, 360],
//             }}
//             transition={{
//               duration: 25,
//               repeat: Infinity,
//               ease: "linear"
//             }}
//           />
          
//           <motion.div
//             className="absolute left-[75%] bottom-[15%] w-[250px] h-[250px] bg-gradient-to-br from-blue-200/25 to-blue-400/45 rounded-full"
//             animate={{
//               y: [-30, 30, -30],
//               x: [-15, 15, -15],
//             }}
//             transition={{
//               duration: 10,
//               repeat: Infinity,
//               ease: "easeInOut"
//             }}
//           />

//           {/* Floating Elements */}
//           {Array.from({length: 25}).map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-2 h-2 bg-purple-300/50 rounded-full"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//               }}
//               animate={{
//                 y: [-15, 15, -15],
//                 opacity: [0.2, 0.8, 0.2],
//               }}
//               transition={{
//                 duration: 4 + Math.random() * 6,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//                 delay: Math.random() * 3,
//               }}
//             />
//           ))}
//         </div>

//         <div className="relative z-10 container mx-auto px-6 py-12">
//           <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[80vh]">
//             {/* Left Content */}
//             <motion.div
//               className="space-y-8"
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               {products.length > 0 && (
//                 <>
//                   {/* Product Name */}
//                   <motion.div
//                     className="space-y-2"
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.2, duration: 0.8 }}
//                   >
//                     <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-none">
//                       {products[currentIndex]?.name?.split(' ')[0] || 'AMAZING'}
//                       <br />
//                       <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//                         {products[currentIndex]?.name?.split(' ').slice(1).join(' ') || 'SHOES'}
//                       </span>
//                     </h1>
//                   </motion.div>

//                   {/* Price */}
//                   <motion.div
//                     className="space-y-1"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.3, duration: 0.8 }}
//                   >
//                     <div className="text-4xl font-bold text-gray-900">
//                       ₹{products[currentIndex]?.price?.toLocaleString() || '0'}
//                     </div>
//                     <div className="text-lg text-gray-500 line-through">
//                       ₹{((products[currentIndex]?.price || 0) * 1.3).toLocaleString()}
//                     </div>
//                   </motion.div>

//                   {/* Description */}
//                   <motion.p
//                     className="text-lg text-gray-600 max-w-md leading-relaxed"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.4, duration: 0.8 }}
//                   >
//                     {products[currentIndex]?.description || 'Premium quality footwear designed for comfort and style.'}
//                   </motion.p>

//                   {/* CTA Buttons */}
//                   <motion.div
//                     className="flex gap-4 flex-wrap"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.6, duration: 0.8 }}
//                   >
//                     <motion.button
//                       onClick={() => handleAddToCart(products[currentIndex])}
//                       className="bg-gray-900 hover:bg-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl"
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       <ShoppingCart size={20} />
//                       ADD TO CART
//                     </motion.button>

//                     <motion.button
//                       onClick={() => handleToggleLike(products[currentIndex]?._id)}
//                       className={`border-2 px-6 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
//                         likedProducts.includes(products[currentIndex]?._id) 
//                           ? 'border-red-500 text-red-500 bg-red-50'
//                           : 'border-gray-900 hover:border-purple-600 text-gray-900 hover:text-purple-600'
//                       }`}
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       <Heart 
//                         size={20} 
//                         className={likedProducts.includes(products[currentIndex]?._id) ? 'fill-current' : ''} 
//                       />
//                     </motion.button>

//                     <motion.button
//                       onClick={() => handleProductClick(products[currentIndex]?._id)}
//                       className="border-2 border-gray-900 hover:border-purple-600 text-gray-900 hover:text-purple-600 px-6 py-4 rounded-full font-bold text-lg transition-all duration-300"
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       <Eye size={20} />
//                     </motion.button>
//                   </motion.div>
//                 </>
//               )}
//             </motion.div>

//             {/* Right Content - Featured Shoe */}
//             <motion.div
//               className="relative flex items-center justify-center"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.4, duration: 1 }}
//             >
//               {products.length > 0 && (
//                 <div className="relative w-full max-w-2xl">
//                   {/* Main Shoe Image */}
//                   <AnimatePresence mode="wait">
//                     <motion.div
//                       key={currentIndex}
//                       className="relative"
//                       initial={{ opacity: 0, x: 100 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       exit={{ opacity: 0, x: -100 }}
//                       transition={{ duration: 0.8 }}
//                     >
//                       <motion.img
//                         src={getImageUrl(products[currentIndex]?.image)}
//                         alt={products[currentIndex]?.name || 'Product'}
//                         className="w-full h-auto drop-shadow-2xl transform rotate-[-15deg] hover:rotate-[-10deg] transition-transform duration-500 cursor-pointer"
//                         onClick={() => handleProductClick(products[currentIndex]?._id)}
//                         animate={{
//                           y: [-10, 10, -10],
//                         }}
//                         transition={{
//                           duration: 6,
//                           repeat: Infinity,
//                           ease: "easeInOut"
//                         }}
//                         onError={(e) => {
//                           e.target.src = 'https://via.placeholder.com/400x400?text=No+Image';
//                         }}
//                       />
//                     </motion.div>
//                   </AnimatePresence>

//                   {/* Small Product Thumbnails */}
//                   <motion.div
//                     className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-8 space-y-4 hidden lg:block"
//                     initial={{ opacity: 0, x: 50 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 1, duration: 0.8 }}
//                   >
//                     {products.slice(0, Math.min(3, products.length)).map((product, index) => (
//                       <motion.div
//                         key={product._id}
//                         className={`w-16 h-16 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
//                           index === currentIndex ? 'ring-4 ring-purple-500 scale-110' : 'hover:scale-105'
//                         }`}
//                         onClick={() => setCurrentIndex(index)}
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.95 }}
//                       >
//                         <img
//                           src={getImageUrl(product.image)}
//                           alt={product.name}
//                           className="w-full h-full object-cover"
//                           onError={(e) => {
//                             e.target.src = 'https://via.placeholder.com/64x64?text=No+Image';
//                           }}
//                         />
//                       </motion.div>
//                     ))}
//                   </motion.div>

//                   {/* Navigation Controls */}
//                   {products.length > 1 && (
//                     <>
//                       <div className="absolute top-1/2 left-4 lg:-left-16 transform -translate-y-1/2">
//                         <motion.button
//                           onClick={handlePrev}
//                           className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all duration-300"
//                           whileHover={{ scale: 1.1 }}
//                           whileTap={{ scale: 0.9 }}
//                         >
//                           <ChevronLeft size={20} className="text-gray-700" />
//                         </motion.button>
//                       </div>

//                       <div className="absolute top-1/2 right-4 lg:-right-16 transform -translate-y-1/2">
//                         <motion.button
//                           onClick={handleNext}
//                           className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all duration-300"
//                           whileHover={{ scale: 1.1 }}
//                           whileTap={{ scale: 0.9 }}
//                         >
//                           <ChevronRight size={20} className="text-gray-700" />
//                         </motion.button>
//                       </div>
//                     </>
//                   )}
//                 </div>
//               )}
//             </motion.div>
//           </div>

//           {/* Bottom Carousel Indicators */}
//           {products.length > 1 && (
//             <motion.div
//               className="flex justify-center space-x-3 mt-8"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1.2, duration: 0.8 }}
//             >
//               {products.slice(0, Math.min(5, products.length)).map((_, index) => (
//                 <motion.button
//                   key={index}
//                   onClick={() => setCurrentIndex(index)}
//                   className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                     index === currentIndex 
//                       ? 'bg-purple-600 scale-125' 
//                       : 'bg-gray-300 hover:bg-gray-400'
//                   }`}
//                   whileHover={{ scale: 1.2 }}
//                   whileTap={{ scale: 0.9 }}
//                 />
//               ))}
//             </motion.div>
//           )}
//         </div>
//       </div>

//       {/* Products Collection Section */}
//       {products.length > 0 && (
//         <div className="py-20 bg-gradient-to-r from-purple-100 via-pink-50 to-blue-100">
//           <div className="container mx-auto px-6">
//             <motion.div
//               className="text-center mb-16"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <h2 className="text-5xl font-black text-gray-900 mb-4">
//                 TRENDING <span className="text-purple-600">COLLECTION</span>
//               </h2>
//               <p className="text-xl text-gray-600">Discover the latest drops and most popular styles</p>
//             </motion.div>

//             <motion.div
//               className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.3, duration: 0.8 }}
//             >
//               {products.map((product, index) => (
//                 <motion.div
//                   key={product._id}
//                   className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden relative border border-white/50"
//                   initial={{ opacity: 0, y: 50 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.1 * index, duration: 0.6 }}
//                   onHoverStart={() => setHoveredProduct(product._id)}
//                   onHoverEnd={() => setHoveredProduct(null)}
//                   whileHover={{ y: -10, scale: 1.02 }}
//                 >
//                   {/* Product Image */}
//                   <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 aspect-square">
//                     <motion.img
//                       src={getImageUrl(product.image)}
//                       alt={product.name}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 cursor-pointer"
//                       onClick={() => handleProductClick(product._id)}
//                       onError={(e) => {
//                         e.target.src = 'https://via.placeholder.com/300x300?text=No+Image';
//                       }}
//                     />
                    
//                     {/* Heart Icon */}
//                     <motion.button
//                       className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg"
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         handleToggleLike(product._id);
//                       }}
//                       whileTap={{ scale: 1.2 }}
//                       whileHover={{ scale: 1.1 }}
//                     >
//                       <Heart 
//                         className={`text-lg ${likedProducts.includes(product._id) ? 'text-red-500 fill-current' : 'text-gray-600'}`}
//                         size={18} 
//                       />
//                     </motion.button>

//                     {/* Quick Add Overlay */}
//                     <motion.div
//                       className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                       initial={{ opacity: 0 }}
//                       whileHover={{ opacity: 1 }}
//                     >
//                       <motion.button
//                         className="bg-white text-gray-900 px-6 py-2 rounded-full font-bold shadow-lg"
//                         onClick={() => handleProductClick(product._id)}
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                       >
//                         View Details
//                       </motion.button>
//                     </motion.div>
//                   </div>

//                   {/* Product Info */}
//                   <div className="p-6 space-y-4">
//                     <div>
//                       <h3 className="font-black text-xl text-gray-900 mb-1 cursor-pointer hover:text-purple-600 transition-colors" 
//                           onClick={() => handleProductClick(product._id)}>
//                         {product.name}
//                       </h3>
//                       <p className="text-gray-600 text-sm">
//                         {product.description ? 
//                           (product.description.length > 50 ? 
//                             `${product.description.slice(0, 50)}...` : 
//                             product.description
//                           ) : 
//                           'Premium quality footwear'
//                         }
//                       </p>
//                     </div>

//                     {/* Rating */}
//                     <div className="flex items-center space-x-2">
//                       <div className="flex text-yellow-400">
//                         {[...Array(5)].map((_, i) => (
//                           <Star key={i} size={16} className={i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'} />
//                         ))}
//                       </div>
//                       <span className="text-gray-500 text-sm">(4.5)</span>
//                     </div>

//                     {/* Price */}
//                     <div className="flex items-center justify-between">
//                       <div className="space-y-1">
//                         <div className="text-2xl font-black text-gray-900">₹{product.price?.toLocaleString() || '0'}</div>
//                         <div className="text-sm text-gray-500 line-through">₹{((product.price || 0) * 1.3).toLocaleString()}</div>
//                       </div>
//                       <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-bold">
//                         23% OFF
//                       </div>
//                     </div>

//                     {/* Add to Cart Button */}
//                     <motion.button
//                       className="w-full bg-gray-900 hover:bg-purple-600 text-white py-3 rounded-2xl font-bold flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl"
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         handleAddToCart(product);
//                       }}
//                       whileHover={{ scale: 1.02 }}
//                       whileTap={{ scale: 0.98 }}
//                     >
//                       <ShoppingCart size={18} />
//                       <span>ADD TO CART</span>
//                     </motion.button>
//                   </div>

//                   {/* Hover Effect Border */}
//                   <motion.div
//                     className="absolute inset-0 rounded-3xl border-2 border-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
//                   />
//                 </motion.div>
//               ))}
//             </motion.div>

//             {/* Cart Summary */}
//             {cart.length > 0 && (
//               <motion.div
//                 className="fixed bottom-6 right-6 bg-white rounded-2xl shadow-2xl p-6 max-w-sm z-50"
//                 initial={{ opacity: 0, y: 100 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <h3 className="font-bold text-lg mb-3">Cart ({cart.length} items)</h3>
//                 <div className="space-y-2 max-h-40 overflow-y-auto">
//                   {cart.slice(0, 3).map((item) => (
//                     <div key={item.id} className="flex items-center gap-3 text-sm">
//                       <img src={item.image} alt={item.name} className="w-8 h-8 rounded object-cover" />
//                       <span className="flex-1">{item.name}</span>
//                       <span className="font-semibold">×{item.quantity}</span>
//                     </div>
//                   ))}
//                   {cart.length > 3 && (
//                     <p className="text-sm text-gray-500">...and {cart.length - 3} more items</p>
//                   )}
//                 </div>
//                 <div className="mt-4 pt-3 border-t">
//                   <div className="flex justify-between items-center mb-3">
//                     <span className="font-bold">Total:</span>
//                     <span className="font-bold text-lg">
//                       ₹{cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toLocaleString()}
//                     </span>
//                   </div>
//                   <button
//                     onClick={() => navigate('/cart')}
//                     className="w-full bg-purple-600 text-white py-2 rounded-full hover:bg-purple-700 transition-colors"
//                   >
//                     View Cart
//                   </button>
//                 </div>
//               </motion.div>
//             )}

//             {/* Show More Products Button */}
//             {products.length > 8 && (
//               <motion.div
//                 className="text-center mt-12"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.8, duration: 0.8 }}
//               >
//                 <motion.button
//                   onClick={() => navigate('/products')}
//                   className="bg-gray-900 hover:bg-purple-600 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   VIEW ALL PRODUCTS
//                 </motion.button>
//               </motion.div>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Bottom CTA Section */}
//       <motion.div
//         className="bg-gradient-to-r from-gray-900 via-purple-900 to-pink-900 py-20 text-white text-center relative overflow-hidden"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         {/* Background Pattern */}
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
//         </div>
        
//         <div className="container mx-auto px-6 relative z-10">
//           <motion.h2
//             className="text-5xl font-black mb-6"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.8 }}
//           >
//             STEP INTO THE FUTURE
//           </motion.h2>
//           <motion.p
//             className="text-2xl mb-10 opacity-90 max-w-2xl mx-auto"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4, duration: 0.8 }}
//           >
//             Join millions who trust us for premium quality footwear and unmatched style
//           </motion.p>
//           <motion.div
//             className="flex flex-col sm:flex-row gap-4 justify-center"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6, duration: 0.8 }}
//           >
//             <motion.button
//               onClick={() => navigate('/products')}
//               className="bg-white text-gray-900 px-10 py-4 rounded-full font-black text-lg hover:bg-gray-100 transition-colors duration-300 shadow-xl"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               SHOP COLLECTION
//             </motion.button>
//             <motion.button
//               onClick={() => navigate('/about')}
//               className="border-2 border-white text-white px-10 py-4 rounded-full font-black text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               LEARN MORE
//             </motion.button>
//           </motion.div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }









import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../axios/axios';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Heart, Star, ArrowRight, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [liked, setLiked] = useState([]);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [cart, setCart] = useState([]);
  
  const navigate = useNavigate();
  const { dispatch } = useCart();

  // Auto slide every 2 minutes
  useEffect(() => {
    if (products.length < 2) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 120000); // 120000 ms = 2 minutes

    return () => clearInterval(interval);
  }, [products.length]);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('/products');
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Carousel navigation
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  // Add to cart functionality
  const handleAddToCart = (product) => {
    try {
      dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity: 1 } });
      
      // Show success notification
      alert(`${product.name} added to cart!`);
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Failed to add item to cart. Please try again.');
    }
  };

  // Toggle like functionality
  const handleToggleLike = (productId) => {
    setLiked(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  // Navigate to product details
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  // Format image URL
  const getImageUrl = (image) => {
    if (!image) return 'https://via.placeholder.com/400x400?text=No+Image';
    return image.startsWith('http') ? image : `http://localhost:5000${image}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-100 flex items-center justify-center">
        <motion.div
          className="text-center"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <div className="text-xl font-bold text-gray-800">Loading amazing shoes...</div>
        </motion.div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-100 flex items-center justify-center">
        <div className="text-center text-red-600 text-xl bg-white rounded-xl p-8 shadow-lg max-w-md">
          <h2 className="text-2xl font-bold mb-4">Oops! Something went wrong</h2>
          <p className="mb-6">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-100 via-pink-50 to-blue-100 min-h-[90vh]">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute right-[-5%] top-[5%] w-[600px] h-[600px] bg-gradient-to-br from-purple-300/30 to-purple-500/50 rounded-full"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          <motion.div
            className="absolute left-[75%] bottom-[15%] w-[250px] h-[250px] bg-gradient-to-br from-blue-200/25 to-blue-400/45 rounded-full"
            animate={{
              y: [-30, 30, -30],
              x: [-15, 15, -15],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Floating Elements */}
          {Array.from({length: 25}).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-purple-300/50 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-15, 15, -15],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 4 + Math.random() * 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[80vh]">
            {/* Left Content - Nike Style */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {products.length > 0 && (
                <>
                  {/* Product Name */}
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                  >
                    <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-none">
                      {products[currentIndex]?.name?.split(' ')[0] || 'AMAZING'}
                      <br />
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        {products[currentIndex]?.name?.split(' ').slice(1).join(' ') || 'SHOES'}
                      </span>
                    </h1>
                  </motion.div>

                  {/* Price */}
                  <motion.div
                    className="space-y-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  >
                    <div className="text-4xl font-bold text-gray-900">
                      ₹{products[currentIndex]?.price?.toLocaleString() || '0'}
                    </div>
                    <div className="text-lg text-gray-500 line-through">
                      ₹{((products[currentIndex]?.price || 0) * 1.3).toLocaleString()}
                    </div>
                  </motion.div>

                  {/* Description */}
                  <motion.p
                    className="text-lg text-gray-600 max-w-md leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                  >
                    {products[currentIndex]?.description || 'Premium quality footwear designed for comfort and style.'}
                  </motion.p>

                  {/* CTA Buttons */}
                  <motion.div
                    className="flex gap-4 flex-wrap"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  >
                    <motion.button
                      onClick={() => handleAddToCart(products[currentIndex])}
                      className="bg-gray-900 hover:bg-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ShoppingCart size={20} />
                      ADD TO CART
                    </motion.button>

                    <motion.button
                      onClick={() => handleToggleLike(products[currentIndex]?._id)}
                      className={`border-2 px-6 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                        liked.includes(products[currentIndex]?._id) 
                          ? 'border-red-500 text-red-500 bg-red-50'
                          : 'border-gray-900 hover:border-purple-600 text-gray-900 hover:text-purple-600'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Heart 
                        size={20} 
                        className={liked.includes(products[currentIndex]?._id) ? 'fill-current' : ''} 
                      />
                    </motion.button>

                    <motion.button
                      onClick={() => handleProductClick(products[currentIndex]?._id)}
                      className="border-2 border-gray-900 hover:border-purple-600 text-gray-900 hover:text-purple-600 px-6 py-4 rounded-full font-bold text-lg transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Eye size={20} />
                    </motion.button>
                  </motion.div>
                </>
              )}
            </motion.div>

            {/* Right Content - Featured Shoe */}
            <motion.div
              className="relative flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              {products.length > 0 && (
                <div className="relative w-full max-w-2xl">
                  {/* Main Shoe Image */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      className="relative"
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.8 }}
                    >
                      <motion.img
                        src={getImageUrl(products[currentIndex]?.image)}
                        alt={products[currentIndex]?.name || 'Product'}
                        className="w-full h-auto drop-shadow-2xl transform rotate-[-15deg] hover:rotate-[-10deg] transition-transform duration-500 cursor-pointer"
                        onClick={() => handleProductClick(products[currentIndex]?._id)}
                        animate={{
                          y: [-10, 10, -10],
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/400x400?text=No+Image';
                        }}
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Small Product Thumbnails */}
                  <motion.div
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-8 space-y-4 hidden lg:block"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                  >
                    {products.slice(0, Math.min(3, products.length)).map((product, index) => (
                      <motion.div
                        key={product._id}
                        className={`w-16 h-16 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
                          index === currentIndex ? 'ring-4 ring-purple-500 scale-110' : 'hover:scale-105'
                        }`}
                        onClick={() => setCurrentIndex(index)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <img
                          src={getImageUrl(product.image)}
                          alt={product.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/64x64?text=No+Image';
                          }}
                        />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Navigation Controls */}
                  {products.length > 1 && (
                    <>
                      <div className="absolute top-1/2 left-4 lg:-left-16 transform -translate-y-1/2">
                        <motion.button
                          onClick={handlePrev}
                          className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ChevronLeft size={20} className="text-gray-700" />
                        </motion.button>
                      </div>

                      <div className="absolute top-1/2 right-4 lg:-right-16 transform -translate-y-1/2">
                        <motion.button
                          onClick={handleNext}
                          className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ChevronRight size={20} className="text-gray-700" />
                        </motion.button>
                      </div>
                    </>
                  )}
                </div>
              )}
            </motion.div>
          </div>

          {/* Bottom Carousel Indicators */}
          {products.length > 1 && (
            <motion.div
              className="flex justify-center space-x-3 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              {products.slice(0, Math.min(5, products.length)).map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-purple-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </motion.div>
          )}
        </div>
      </div>

      {/* Products Collection Section */}
      {products.length > 0 && (
        <div className="py-20 bg-gradient-to-r from-purple-100 via-pink-50 to-blue-100">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-black text-gray-900 mb-4">
                TRENDING <span className="text-purple-600">COLLECTION</span>
              </h2>
              <p className="text-xl text-gray-600">Discover the latest drops and most popular styles</p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {products.map((product, index) => (
                <motion.div
                  key={product._id}
                  className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden relative border border-white/50"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                  onHoverStart={() => setHoveredProduct(product._id)}
                  onHoverEnd={() => setHoveredProduct(null)}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  {/* Product Image */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 aspect-square">
                    <motion.img
                      src={getImageUrl(product.image)}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 cursor-pointer"
                      onClick={() => handleProductClick(product._id)}
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/300x300?text=No+Image';
                      }}
                    />
                    
                    {/* Heart Icon */}
                    <motion.button
                      className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleToggleLike(product._id);
                      }}
                      whileTap={{ scale: 1.2 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <Heart 
                        className={`text-lg ${liked.includes(product._id) ? 'text-red-500 fill-current' : 'text-gray-600'}`}
                        size={18} 
                      />
                    </motion.button>

                    {/* Quick Add Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <motion.button
                        className="bg-white text-gray-900 px-6 py-2 rounded-full font-bold shadow-lg"
                        onClick={() => handleProductClick(product._id)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Details
                      </motion.button>
                    </motion.div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="font-black text-xl text-gray-900 mb-1 cursor-pointer hover:text-purple-600 transition-colors" 
                          onClick={() => handleProductClick(product._id)}>
                        {product.name}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {product.description ? 
                          (product.description.length > 50 ? 
                            `${product.description.slice(0, 50)}...` : 
                            product.description
                          ) : 
                          'Premium quality footwear'
                        }
                      </p>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center space-x-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} className={i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'} />
                        ))}
                      </div>
                      <span className="text-gray-500 text-sm">(4.5)</span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="text-2xl font-black text-gray-900">₹{product.price?.toLocaleString() || '0'}</div>
                        <div className="text-sm text-gray-500 line-through">₹{((product.price || 0) * 1.3).toLocaleString()}</div>
                      </div>
                      <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-bold">
                        23% OFF
                      </div>
                    </div>

                    {/* Add to Cart Button */}
                    <motion.button
                      className="w-full bg-gray-900 hover:bg-purple-600 text-white py-3 rounded-2xl font-bold flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(product);
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ShoppingCart size={18} />
                      <span>ADD TO CART</span>
                    </motion.button>
                  </div>

                  {/* Hover Effect Border */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl border-2 border-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Show More Products Button */}
            {products.length > 8 && (
              <motion.div
                className="text-center mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <motion.button
                  onClick={() => navigate('/products')}
                  className="bg-gray-900 hover:bg-purple-600 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  VIEW ALL PRODUCTS
                </motion.button>
              </motion.div>
            )}
          </div>
        </div>
      )}

      {/* Bottom CTA Section */}
      <motion.div
        className="bg-gradient-to-r from-gray-900 via-purple-900 to-pink-900 py-20 text-white text-center relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.h2
            className="text-5xl font-black mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            STEP INTO THE FUTURE
          </motion.h2>
          <motion.p
            className="text-2xl mb-10 opacity-90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Join millions who trust us for premium quality footwear and unmatched style
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.button
              onClick={() => navigate('/products')}
              className="bg-white text-gray-900 px-10 py-4 rounded-full font-black text-lg hover:bg-gray-100 transition-colors duration-300 shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              SHOP COLLECTION
            </motion.button>
            <motion.button
              onClick={() => navigate('/about')}
              className="border-2 border-white text-white px-10 py-4 rounded-full font-black text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              LEARN MORE
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}