import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../axios/axios';
import Banner from '../components/Banner';
import { FaShoppingCart, FaHeart, FaRegHeart, FaStar, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { FaArrowLeft } from "react-icons/fa";
export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [liked, setLiked] = useState(null);
  const [hoveredProduct, setHoveredProduct] = useState(null);
const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const { dispatch } = useCart();
const handleNext = () => {
  setCurrentIndex((prev) => (prev + 1) % products.length);
};

const handlePrev = () => {
  setCurrentIndex((prev) =>
    prev === 0 ? products.length - 1 : prev - 1
  );
};

// Auto slide every 60 seconds
useEffect(() => {
  if (products.length < 2) return;

  const interval = setInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  }, 120000); // 120000 ms = 2 minutes

  return () => clearInterval(interval);
}, [products.length]);
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
        <div className="text-center text-red-600 text-xl bg-white rounded-xl p-8 shadow-lg">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
       <div className=''>   <Banner/></div>  
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-100 via-pink-50 to-blue-100 min-h-[80vh]">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Large Purple Circle */}
          <motion.div
            className="absolute right-[-10%] top-[10%] w-[500px] h-[500px] bg-gradient-to-br from-purple-300/40 to-purple-500/60 rounded-full"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Secondary Circles */}
          <motion.div
            className="absolute left-[70%] bottom-[20%] w-[200px] h-[200px] bg-gradient-to-br from-blue-200/30 to-blue-400/50 rounded-full"
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div
            className="absolute right-[10%] bottom-[40%] w-[100px] h-[100px] bg-gradient-to-br from-pink-200/40 to-pink-400/60 rounded-full"
            animate={{
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Floating Dots */}
          {Array.from({length: 20}).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-purple-300/60 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-10, 10, -10],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-4">
                <motion.h1
                  className="text-6xl lg:text-8xl font-black text-gray-900 leading-none"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  BORING
                  <br />
                  <span className="text-purple-600">SHOES?</span>
                </motion.h1>
                
                <motion.p
                  className="text-xl text-gray-600 max-w-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  Let us help you find the perfect pair that matches your style and personality.
                </motion.p>
              </div>

              <motion.button
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                EXPLORE OUR STORY
                <FaArrowRight />
              </motion.button>
            </motion.div>

            {/* Right Content - Featured Shoe */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              {products.length > 0 && (
                <div className="relative">
                  <motion.img
                    src={products[0].image?.startsWith('http') 
                      ? products[0].image 
                      : `http://localhost:5000${products[0].image}` || 'https://via.placeholder.com/400x300?text=Featured+Shoe'
                    }
                    alt="Featured Shoe"
                    className="w-full max-w-lg mx-auto drop-shadow-2xl"
                    animate={{
                      y: [-10, 10, -10],
                      rotate: [-2, 2, -2],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  <motion.div
                    className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl px-6 py-4 shadow-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                  >
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">VARSITY</div>
                      <div className="text-lg font-semibold text-gray-800">PURPLE</div>
                    </div>
                  </motion.div>
                </div>
              )}
            </motion.div>


 



          </div>
        </div>
      </div>

      {/* Navigation Categories */}
      {/* <motion.div
        className="bg-white py-8 shadow-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-center space-x-12">
            {['MEN', 'WOMEN', 'KIDS', 'COLLECTIONS'].map((category) => (
              <motion.button
                key={category}
                className="text-gray-800 font-semibold text-lg hover:text-purple-600 transition-colors duration-300 relative"
                whileHover={{ scale: 1.05 }}
              >
                {category}
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-purple-600"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div> */}

      {/* Products Section */}
      <div className="py-16 bg-gradient-to-r from-purple-100 via-pink-50 to-blue-100">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold text-center text-gray-900 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Latest Collection
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {products.map((product, index) => (
              <motion.div
                key={product._id}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden relative"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                onHoverStart={() => setHoveredProduct(product._id)}
                onHoverEnd={() => setHoveredProduct(null)}
                whileHover={{ y: -10 }}
              >
                {/* Product Image */}
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 aspect-square">
                  <motion.img
                    src={product.image?.startsWith('http') 
                      ? product.image 
                      : `http://localhost:5000${product.image}` || 'https://via.placeholder.com/300x300?text=Shoe'
                    }
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Heart Icon */}
                  <motion.button
                    className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg"
                    onClick={(e) => {
                      e.stopPropagation();
                      setLiked(liked === product._id ? null : product._id);
                    }}
                    whileTap={{ scale: 1.2 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {liked === product._id ? 
                      <FaHeart className="text-red-500 text-lg" /> : 
                      <FaRegHeart className="text-gray-600 text-lg" />
                    }
                  </motion.button>

                  {/* Quick View Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.button
                      className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold"
                      onClick={() => navigate(`/product/${product._id}`)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Quick View
                    </motion.button>
                  </motion.div>
                </div>

                {/* Product Info */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 mb-1">{product.name}</h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {product.description?.slice(0, 60) || "Premium quality footwear"}...
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={i < 4 ? 'text-yellow-400' : 'text-gray-300'} />
                      ))}
                    </div>
                    <span className="text-gray-500 text-sm">(128)</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="text-2xl font-bold text-gray-900">₹{product.price}</div>
                      <div className="text-sm text-gray-500 line-through">₹{(product.price * 1.4).toFixed(0)}</div>
                    </div>
                    <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                      30% OFF
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <motion.button
                    className="w-full bg-gray-900 hover:bg-purple-600 text-white py-3 rounded-2xl font-semibold flex items-center justify-center space-x-2 transition-all duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity: 1 } });
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaShoppingCart />
                    <span>Add to Cart</span>
                  </motion.button>
                </div>

                {/* Hover Effect Border */}
                <motion.div
                  className="absolute inset-0 rounded-3xl border-2 border-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <motion.div
        className="bg-gradient-to-r from-purple-600 to-pink-600 py-16 text-white text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">Step Into Something Great</h2>
          <p className="text-xl mb-8 opacity-90">Join millions who trust us for their footwear needs</p>
          <motion.button
            className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Shop Now
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}