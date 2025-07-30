import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../axios/axios';
import Banner from '../components/Banner';
import { FaShoppingCart, FaHeart, FaRegHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [liked, setLiked] = useState(null);

  const navigate = useNavigate();
  const { dispatch } = useCart();

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

  if (loading) return <div className="text-center mt-10 text-lg">Loading products...</div>;
  if (error) return <div className="text-center text-red-500 mt-10">{error}</div>;

  return (
    <>
      <div className="mt-4">
        <Banner />
      </div>

      <div className="px-4 py-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Latest Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div
              key={p._id}
              className="bg-white shadow-lg rounded-2xl flex flex-col justify-between p-4 relative overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
            >
              {/* Like Icon */}
              <motion.div
                className="absolute top-4 right-4 text-xl cursor-pointer z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  setLiked(liked === p._id ? null : p._id);
                }}
                whileTap={{ scale: 1.4 }}
                animate={{
                  scale: liked === p._id ? 1.2 : 1,
                  color: liked === p._id ? "#e63946" : "#bbb",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 8 }}
              >
                {liked === p._id ? <FaHeart /> : <FaRegHeart />}
              </motion.div>

              {/* Clickable Area */}
              <div
                onClick={() => navigate(`/product/${p._id}`)}
                className="cursor-pointer flex flex-col flex-1"
              >
                {/* Image */}
                <img
                  src={
                    p.image
                      ? p.image.startsWith('http')
                        ? p.image
                        : `http://localhost:5000${p.image}`
                      : 'https://via.placeholder.com/300x200?text=No+Image'
                  }
                  alt={p.name}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />

                {/* Product Info */}
                <h2 className="font-semibold text-lg text-gray-900 mb-1 line-clamp-1">{p.name}</h2>
                <p className="text-sm text-gray-500 mb-2 line-clamp-2">
                  {p.description?.slice(0, 70) || "No description"}...
                </p>

                {/* Ratings */}
                <div className="flex items-center text-yellow-400 text-sm mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < 4 ? '' : 'text-gray-300'}>★</span>
                  ))}
                  <span className="ml-2 text-gray-500">(234 reviews)</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl font-bold text-blue-700">₹{p.price.toFixed(2)}</span>
                  <span className="line-through text-gray-400 text-sm">₹{(p.price * 1.5).toFixed(2)}</span>
                  <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded">
                    33% OFF
                  </span>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                className="mt-auto w-full py-2 bg-blue-600 text-white font-medium rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition"
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch({ type: 'ADD_TO_CART', payload: { ...p, quantity: 1 } });
                }}
              >
                <FaShoppingCart />
                <span>Add to Cart</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
