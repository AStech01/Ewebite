// === ProductPage.jsx ===
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../axios/axios';
import { useCart } from '../context/CartContext';

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { dispatch } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`/products/${id}`);
        setProduct(data);
      } catch (err) {
        setError('Product not found.');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { ...product, qty: 1 },
    });
    alert('Added to cart!');
  };

  const handleBuyNow = () => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      alert('Please login first');
      navigate('/login');
      return;
    }

    localStorage.setItem('buyNowItem', JSON.stringify({
      _id: product._id,          // ✅ Use _id for order schema
      name: product.name,
      price: product.price,
      image: product.image,
      qty: 1,
      
    }));

    navigate('/paymentpage');
  };

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <img
          src={product.image.startsWith('http') ? product.image : `http://localhost:5000${product.image}`}
          alt={product.name}
          className="w-full h-[400px] object-contain border rounded"
        />
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p>{product.description}</p>
          <p className="text-2xl text-blue-600 font-semibold">₹{product.price}</p>

          <div className="flex gap-4 mt-4">
            <button onClick={handleAddToCart} className="bg-green-600 text-white px-6 py-2 rounded">
              🛒 Add to Cart
            </button>
            <button onClick={handleBuyNow} className="bg-blue-600 text-white px-6 py-2 rounded">
              🛍️ Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
