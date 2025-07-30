import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../axios/axios';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
const BASE_URL = import.meta.env.VITE_BACKEND_URL || '';

export default function PaymentPage() {
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const item = JSON.parse(localStorage.getItem('buyNowItem'));
    if (!item) {
      alert('No item found for payment');
      navigate('/');
    } else {
      setProduct(item);
    }
  }, [navigate]);

  const handleStripePayment = async () => {
    const token = localStorage.getItem('authToken');
    const total = product.price * product.qty;

    if (total < 50) {
      setError("Minimum payment is ₹50");
      return;
    }

    setLoading(true);
    setError('');

    try {
      const { data } = await axios.post(
        '/payments/create',
        {
          productName: product.name,
          amount: total,
          quantity: product.qty,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const stripe = await stripePromise;
      const result = await stripe.redirectToCheckout({
        sessionId: data.sessionId,
      });

      if (result.error) {
        setError(result.error.message);
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Payment initiation failed');
    } finally {
      setLoading(false);
    }
  };

  if (!product) return null;

  const totalPrice = product.price * product.qty;

  const getImageUrl = (imagePath) => {
    if (!imagePath) {
      return 'https://via.placeholder.com/300x200?text=No+Image';
    }
    return imagePath.startsWith('http') ? imagePath : `${BASE_URL}${imagePath}`;
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Review Your Order</h2>

      <img
        src={getImageUrl(product.image)}
        alt={product.name}
        className="w-full h-48 object-cover rounded mb-4 border"
      />

      <div className="mb-4 space-y-2 text-gray-700">
        <p><strong>Product:</strong> {product.name}</p>
        <p><strong>Price:</strong> ₹{product.price}</p>
        <p><strong>Quantity:</strong> {product.qty}</p>
        <p><strong>Total:</strong> ₹{totalPrice}</p>
      </div>

      <button
        onClick={handleStripePayment}
        disabled={loading}
        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded"
      >
        {loading ? 'Redirecting...' : `Pay ₹${totalPrice}`}
      </button>

      {error && <p className="mt-4 text-red-500">{error}</p>}
    </div>
  );
}
