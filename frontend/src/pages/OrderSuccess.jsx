// src/pages/OrderSuccessPage.jsx
import React, { useEffect, useState } from 'react';
import axios from '../axios/axios';
import { useNavigate } from 'react-router-dom';

export default function OrderSuccessPage() {
  const navigate = useNavigate();
  const [message, setMessage] = useState('Placing your order...');

  useEffect(() => {
    const createOrder = async () => {
      const token = localStorage.getItem('authToken');
      const item = JSON.parse(localStorage.getItem('buyNowItem'));

      if (!item || !item.productId) {
        setMessage('Missing product info. Redirecting...');
        setTimeout(() => navigate('/'), 2000);
        return;
      }

      try {
        await axios.post(
          '/orders',
          {
            orderItems: [
              {
                product: item.productId,
                name: item.name,
                quantity: item.qty,
                price: item.price,
                image: item.image,
              },
            ],
            shippingAddress: {
              fullName: 'John Doe',
              address: '123 Sample Street',
              city: 'Mumbai',
              postalCode: '400001',
              country: 'India',
            },
            paymentMethod: 'Stripe',
            isPaid: true,
            paidAt: new Date(),
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        localStorage.removeItem('buyNowItem');
        setMessage('✅ Order placed successfully!');
      } catch (err) {
        console.error(err);
        setMessage('❌ Failed to create order.');
      }
    };

    createOrder();
  }, [navigate]);

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold text-green-600">Payment Success</h1>
      <p className="mt-4 text-gray-800">{message}</p>
    </div>
  );
}
