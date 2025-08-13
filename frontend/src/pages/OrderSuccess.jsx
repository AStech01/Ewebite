// src/pages/OrderSuccessPage.jsx
// import React, { useEffect, useState } from 'react';
// import axios from '../axios/axios';
// import { useNavigate } from 'react-router-dom';

// export default function OrderSuccessPage() {
//   const navigate = useNavigate();
//   const [message, setMessage] = useState('Placing your order...');

//   useEffect(() => {
//     const createOrder = async () => {
//       const token = localStorage.getItem('authToken');
//       const item = JSON.parse(localStorage.getItem('buyNowItem'));

//       if (!item || !item.productId) {
//         setMessage('Missing product info. Redirecting...');
//         setTimeout(() => navigate('/'), 2000);
//         return;
//       }

//       try {
//         await axios.post(
//           '/orders',
//           {
//             orderItems: [
//               {
//                 product: item.productId,
//                 name: item.name,
//                 quantity: item.qty,
//                 price: item.price,
//                 image: item.image,
//               },
//             ],
//             shippingAddress: {
//               fullName: 'John Doe',
//               address: '123 Sample Street',
//               city: 'Mumbai',
//               postalCode: '400001',
//               country: 'India',
//             },
//             paymentMethod: 'Stripe',
//             isPaid: true,
//             paidAt: new Date(),
//           },
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         localStorage.removeItem('buyNowItem');
//         setMessage('✅ Order placed successfully!');
//       } catch (err) {
//         console.error(err);
//         setMessage('❌ Failed to create order.');
//       }
//     };

//     createOrder();
//   }, [navigate]);

//   return (
//     <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow rounded">
//       <h1 className="text-2xl font-bold text-green-600">Payment Success</h1>
//       <p className="mt-4 text-gray-800">{message}</p>
//     </div>
//   );
// }


// src/pages/OrderSuccessPage.jsx
// import React, { useEffect, useState } from 'react';
// import axios from '../axios/axios';
// import { useNavigate } from 'react-router-dom';
// import { useOrders } from '../context/OrderContext'; // ✅ Only if using global context

// export default function OrderSuccessPage() {
//   const navigate = useNavigate();
//   const [message, setMessage] = useState('Placing your order...');
//   const { fetchOrders } = useOrders?.() || {}; // Safe access if context is optional

//   useEffect(() => {
//     const createOrder = async () => {
//       const token = localStorage.getItem('authToken');
//       const itemRaw = localStorage.getItem('buyNowItem');

//       // 🔁 Fallback if item is missing or corrupted
//       if (!itemRaw) {
//         setMessage('Missing product info. Redirecting...');
//         setTimeout(() => navigate('/'), 2000);
//         return;
//       }

//       let item;
//       try {
//         item = JSON.parse(itemRaw);
//       } catch (e) {
//         setMessage('Invalid product data. Redirecting...');
//         setTimeout(() => navigate('/'), 2000);
//         return;
//       }

//       if (!item || !item.productId) {
//         setMessage('Incomplete product details. Redirecting...');
//         setTimeout(() => navigate('/'), 2000);
//         return;
//       }

//       try {
//         await axios.post(
//           '/orders',
//           {
//             orderItems: [
//               {
//                 product: item.productId,
//                 name: item.name,
//                 quantity: item.qty,
//                 price: item.price,
//                 image: item.image,
//               },
//             ],
//             shippingAddress: {
//               fullName: 'John Doe',
//               address: '123 Sample Street',
//               city: 'Mumbai',
//               postalCode: '400001',
//               country: 'India',
//             },
//             paymentMethod: 'Stripe',
//             isPaid: true,
//             paidAt: new Date(),
//           },
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         localStorage.removeItem('buyNowItem');

//         if (fetchOrders) {
//           await fetchOrders(); // ✅ Refresh global order state if available
//         }

//         setMessage('✅ Order placed successfully!');
//         setTimeout(() => navigate('/orders'), 3000); // ✅ Redirect to order list
//       } catch (err) {
//         console.error('Order creation failed:', err);
//         setMessage('❌ Failed to create order. Please try again.');
//       }
//     };

//     createOrder();
//   }, [navigate, fetchOrders]);

//   return (
//     <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow rounded">
//       <h1 className="text-2xl font-bold text-green-600">Payment Success</h1>
//       <p className="mt-4 text-gray-800">{message}</p>
//     </div>
//   );
// }

// import React, { useEffect, useState } from 'react';
// import axios from '../axios/axios';
// import { useNavigate } from 'react-router-dom';
// import { useOrders } from '../context/OrderContext'; // ✅ Only if using global context

// export default function OrderSuccessPage() {
//   const navigate = useNavigate();
//   const [message, setMessage] = useState('Placing your order...');
//   const { fetchOrders } = useOrders?.() || {}; // Safe access if context is optional

//   useEffect(() => {
//     const createOrder = async () => {
//       const token = localStorage.getItem('authToken');
//       const itemRaw = localStorage.getItem('buyNowItem');

//       // 🔁 Fallback if item is missing or corrupted
//       if (!itemRaw) {
//         setMessage('Missing product info. Redirecting...');
//         setTimeout(() => navigate('/'), 2000);
//         return;
//       }

//       let item;
//       try {
//         item = JSON.parse(itemRaw);
//       } catch (e) {
//         setMessage('Invalid product data. Redirecting...');
//         setTimeout(() => navigate('/'), 2000);
//         return;
//       }

//       if (!item || !item.productId) {
//         // Check productId key (matches the fix in ProductPage)
//         setMessage('Incomplete product details. Redirecting...');
//         setTimeout(() => navigate('/'), 2000);
//         return;
//       }

//       try {
//         await axios.post(
//           '/orders',
//           {
//             orderItems: [
//               {
//                 product: item.productId,
//                 name: item.name,
//                 quantity: item.qty,
//                 price: item.price,
//                 image: item.image,
//               },
//             ],
//             shippingAddress: {
//               fullName: 'John Doe',
//               address: '123 Sample Street',
//               city: 'Mumbai',
//               postalCode: '400001',
//               country: 'India',
//             },
//             paymentMethod: 'Stripe',
//             isPaid: true,
//             paidAt: new Date(),
//           },
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         localStorage.removeItem('buyNowItem');

//         if (fetchOrders) {
//           await fetchOrders(); // ✅ Refresh global order state if available
//         }

//         setMessage('✅ Order placed successfully!');
//         setTimeout(() => navigate('/orders'), 3000); // ✅ Redirect to order list
//       } catch (err) {
//         console.error('Order creation failed:', err);
//         setMessage('❌ Failed to create order. Please try again.');
//       }
//     };

//     createOrder();
//   }, [navigate, fetchOrders]);

//   return (
//     <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow rounded">
//       <h1 className="text-2xl font-bold text-green-600">Payment Success</h1>
//       <p className="mt-4 text-gray-800">{message}</p>
//     </div>
//   );
// }

// import React, { useEffect, useState } from 'react';
// import axios from '../axios/axios';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { useOrders } from '../context/OrderContext';

// function useQuery() {
//   return new URLSearchParams(useLocation().search);
// }

// export default function OrderSuccessPage() {
//   const navigate = useNavigate();
//   const query = useQuery();
//   const { fetchOrders } = useOrders?.() || {};

//   const [message, setMessage] = useState('Placing your order...');

//   useEffect(() => {
//     const createOrder = async () => {
//       const token = localStorage.getItem('authToken');
//       const productId = query.get('productId');
//       const qtyStr = query.get('qty');
//       const qty = qtyStr ? parseInt(qtyStr, 10) : 1;

//       if (!productId) {
//         setMessage('Missing product info. Redirecting...');
//         setTimeout(() => navigate('/'), 3000);
//         return;
//       }

//       // Option 1: Fetch product details from backend to get name, price, image
//       let product;
//       try {
//         const res = await axios.get(`/products/${productId}`);
//         product = res.data;
//       } catch (err) {
//         console.error('Failed to fetch product:', err);
//         setMessage('Failed to fetch product info. Redirecting...');
//         setTimeout(() => navigate('/'), 3000);
//         return;
//       }

//       const item = {
//         productId,
//         name: product.name,
//         qty,
//         price: product.price,
//         image: product.image,
//       };

//       try {
//         await axios.post(
//           '/orders',
//           {
//             orderItems: [
//               {
//                 product: item.productId,
//                 name: item.name,
//                 quantity: item.qty,
//                 price: item.price,
//                 image: item.image,
//               },
//             ],
//             shippingAddress: {
//               fullName: 'John Doe',
//               address: '123 Sample Street',
//               city: 'Mumbai',
//               postalCode: '400001',
//               country: 'India',
//             },
//             paymentMethod: 'Stripe',
//             isPaid: true,
//             paidAt: new Date(),
//           },
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         );

//         if (fetchOrders) await fetchOrders();

//         setMessage('✅ Order placed successfully! Redirecting to your orders...');
//         setTimeout(() => navigate('/orders'), 3000);
//       } catch (err) {
//         console.error('Order creation failed:', err);
//         setMessage('❌ Failed to create order. Please try again later.');
//       }
//     };

//     createOrder();
//   }, [navigate, query, fetchOrders]);

//   return (
//     <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow rounded">
//       <h1 className="text-2xl font-bold text-green-600">Payment Success</h1>
//       <p className="mt-4 text-gray-800">{message}</p>
//     </div>
//   );
// }

// import React, { useEffect, useState } from 'react';
// import axios from '../axios/axios';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { useOrders } from '../context/OrderContext';

// function useQuery() {
//   return new URLSearchParams(useLocation().search);
// }

// export default function OrderSuccessPage() {
//   const navigate = useNavigate();
//   const query = useQuery();
//   const { fetchOrders } = useOrders?.() || {};
//   const [message, setMessage] = useState('Placing your order...');

//   useEffect(() => {
//     const createOrder = async () => {
//       const token = localStorage.getItem('authToken');
//       const productId = query.get('productId');
//       const qtyStr = query.get('qty');
//       const qty = qtyStr ? parseInt(qtyStr, 10) : 1;

//       if (!productId) {
//         setMessage('Missing product info. Redirecting...');
//         setTimeout(() => navigate('/'), 3000);
//         return;
//       }

//       // ✅ Get real product details
//       let product;
//       try {
//         const res = await axios.get(`/products/${productId}`);
//         product = res.data;
//       } catch (err) {
//         console.error('Failed to fetch product:', err);
//         setMessage('Failed to fetch product info. Redirecting...');
//         setTimeout(() => navigate('/'), 3000);
//         return;
//       }

//       // ✅ Get real shipping info from localStorage
//       let shippingAddress;
//       try {
//         const addressRaw = localStorage.getItem('shippingAddress');
//         shippingAddress = addressRaw ? JSON.parse(addressRaw) : null;
//       } catch {
//         shippingAddress = null;
//       }

//       if (!shippingAddress || !shippingAddress.address) {
//         setMessage('Missing shipping info. Redirecting...');
//         setTimeout(() => navigate('/'), 3000);
//         return;
//       }

//       const item = {
//         productId,
//         name: product.name,
//         qty,
//         price: product.price,
//         image: product.image,
//       };

//       try {
//         await axios.post(
//           '/orders',
//           {
//             orderItems: [
//               {
//                 product: item.productId,
//                 name: item.name,
//                 quantity: item.qty,
//                 price: item.price,
//                 image: item.image,
//               },
//             ],
//             shippingAddress,
//             paymentMethod: 'Stripe',
//             isPaid: true,
//             paidAt: new Date(),
//           },
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         );

//         // ✅ Clear data
//         localStorage.removeItem('shippingAddress');

//         if (fetchOrders) await fetchOrders();

//         setMessage('✅ Order placed successfully! Redirecting to your orders...');
//         setTimeout(() => navigate('/orders'), 3000);
//       } catch (err) {
//         console.error('Order creation failed:', err);
//         setMessage('❌ Failed to create order. Please try again later.');
//       }
//     };

//     createOrder();
//   }, [navigate, query, fetchOrders]);

//   return (
//     <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow rounded">
//       <h1 className="text-2xl font-bold text-green-600">Payment Success</h1>
//       <p className="mt-4 text-gray-800">{message}</p>
//     </div>
//   );
// }

// src/pages/OrderSuccessPage.jsx
// import React, { useEffect, useState } from 'react';
// import axios from '../axios/axios';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { useOrders } from '../context/OrderContext';

// function useQuery() {
//   return new URLSearchParams(useLocation().search);
// }

// export default function OrderSuccessPage() {
//   const navigate = useNavigate();
//   const query = useQuery();
//   const { fetchOrders } = useOrders?.() || {};
//   const [message, setMessage] = useState('Placing your order...');

//   useEffect(() => {
//     const createOrder = async () => {
//       const token = localStorage.getItem('authToken');
//       const productId = query.get('productId');
//       const qtyStr = query.get('qty');
//       const qty = qtyStr ? parseInt(qtyStr, 10) : 1;

//       const name = query.get('name');
//       const address = query.get('address');
//       const city = query.get('city');
//       const postal = query.get('postal');
//       const country = query.get('country');

//       if (!productId || !name || !address || !city || !postal || !country) {
//         setMessage('Missing order info. Redirecting...');
//         setTimeout(() => navigate('/'), 3000);
//         return;
//       }

//       // Fetch product details
//       let product;
//       try {
//         const res = await axios.get(`/products/${productId}`);
//         product = res.data;
//       } catch (err) {
//         console.error('Failed to fetch product:', err);
//         setMessage('Failed to fetch product. Redirecting...');
//         setTimeout(() => navigate('/'), 3000);
//         return;
//       }

//       const item = {
//         productId,
//         name: product.name,
//         qty,
//         price: product.price,
//         image: product.image,
//       };

//       try {
//         await axios.post(
//           '/orders',
//           {
//             orderItems: [
//               {
//                 product: item.productId,
//                 name: item.name,
//                 quantity: item.qty,
//                 price: item.price,
//                 image: item.image,
//               },
//             ],
//             shippingAddress: {
//               fullName: name,
//               address,
//               city,
//               postalCode: postal,
//               country,
//             },
//             paymentMethod: 'Stripe',
//             isPaid: true,
//             paidAt: new Date(),
//           },
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         if (fetchOrders) await fetchOrders();

//         setMessage('✅ Order placed successfully! Redirecting to your orders...');
//         setTimeout(() => navigate('/orders'), 3000);
//       } catch (err) {
//         console.error('Order creation failed:', err);
//         setMessage('❌ Failed to create order. Please try again.');
//       }
//     };

//     createOrder();
//   }, [navigate, query, fetchOrders]);

//   return (
//     <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow rounded">
//       <h1 className="text-2xl font-bold text-green-600">Payment Success</h1>
//       <p className="mt-4 text-gray-800">{message}</p>
//     </div>
//   );
// }

// import React, { useEffect, useState } from 'react';
// import axios from '../axios/axios';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { useOrders } from '../context/OrderContext';

// const useQuery = () => new URLSearchParams(useLocation().search);

// export default function OrderSuccessPage() {
//   const navigate = useNavigate();
//   const query = useQuery();
//   const { fetchOrders } = useOrders() || {};
//   const [message, setMessage] = useState('Placing your order...');

//   useEffect(() => {
//     const createOrder = async () => {
//       const token = localStorage.getItem('authToken');
//       const productId = query.get('productId');
//       const qty = parseInt(query.get('qty') || '1', 10);
//       const name = query.get('name');
//       const address = query.get('address');
//       const city = query.get('city');
//       const postal = query.get('postal');
//       const country = query.get('country');

//       if (!productId || !name || !address || !city || !postal || !country) {
//         setMessage('Missing info. Redirecting...');
//         return setTimeout(() => navigate('/'), 3000);
//       }

//       let product;
//       try {
//         const res = await axios.get(`/products/${productId}`);
//         product = res.data;
//       } catch (err) {
//         console.error(err);
//         setMessage('Failed to fetch product. Redirecting...');
//         return setTimeout(() => navigate('/'), 3000);
//       }

//       try {
//         await axios.post(
//           '/orders',
//           {
//             orderItems: [{
//               product: productId,
//               name: product.name,
//               qty, // <-- Key is qty (not quantity)
//               price: product.price,
//               image: product.image,
//             }],
//             shippingAddress: { fullName: name, address, city, postalCode: postal, country },
//             paymentMethod: 'Stripe'
//           },
//           { headers: { Authorization: `Bearer ${token}` } }
//         );

//         if (fetchOrders) await fetchOrders();
//         setMessage('✅ Order placed! Redirecting...');
//         setTimeout(() => navigate('/orders'), 3000);
//       } catch (err) {
//         console.error(err);
//         setMessage('❌ Order failed. Please try again.');
//       }
//     };

//     createOrder();
//   }, [navigate, query, fetchOrders]);

//   return (
//     <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow rounded">
//       <h1 className="text-2xl font-bold text-green-600">Payment Success</h1>
//       <p className="mt-4 text-gray-800">{message}</p>
//     </div>
//   );
// }

// import React, { useEffect, useState } from 'react';
// import axios from '../axios/axios';
// import { useNavigate, useLocation } from 'react-router-dom';

// function useQuery() {
//   return new URLSearchParams(useLocation().search);
// }

// export default function OrderSuccessPage() {
//   const navigate = useNavigate();
//   const query = useQuery();
//   const [message, setMessage] = useState('Placing your order...');

//   useEffect(() => {
//     const createOrder = async () => {
//       const token = localStorage.getItem('authToken');
//       const productId = query.get('productId');
//       const qtyStr = query.get('qty');
//       const qty = qtyStr ? parseInt(qtyStr, 10) : 1;

//       const name = query.get('name');
//       const address = query.get('address');
//       const city = query.get('city');
//       const postal = query.get('postal');
//       const country = query.get('country');

//       if (!productId || !name || !address || !city || !postal || !country) {
//         setMessage('Missing order info. Redirecting...');
//         setTimeout(() => navigate('/'), 3000);
//         return;
//       }

//       // Fetch product details
//       let product;
//       try {
//         const res = await axios.get(`/products/${productId}`);
//         product = res.data;
//       } catch (err) {
//         console.error('Failed to fetch product:', err);
//         setMessage('Failed to fetch product. Redirecting...');
//         setTimeout(() => navigate('/'), 3000);
//         return;
//       }

//       try {
//         await axios.post(
//           '/orders',
//           {
//             orderItems: [
//               {
//                 product: product._id,
//                 name: product.name,
//                 qty,
//                 price: product.price,
//                 image: product.image,
//               },
//             ],
//             shippingAddress: {
//               fullName: name,
//               address,
//               city,
//               postalCode: postal,
//               country,
//             },
//             paymentMethod: 'Stripe',
//             isPaid: true,
//             paidAt: new Date(),
//           },
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         setMessage('✅ Order placed successfully! Redirecting to your orders...');
//         setTimeout(() => navigate('/orders'), 3000);
//       } catch (err) {
//         console.error('Order creation failed:', err);
//         setMessage('❌ Failed to create order. Please try again.');
//       }
//     };

//     createOrder();
//   }, [navigate, query]);

//   return (
//     <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow rounded">
//       <h1 className="text-2xl font-bold text-green-600">Payment Success</h1>
//       <p className="mt-4 text-gray-800">{message}</p>
//     </div>
//   );
// }


import React, { useEffect, useState, useRef } from 'react';
import axios from '../axios/axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { useOrders } from '../context/OrderContext';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function OrderSuccessPage() {
  const navigate = useNavigate();
  const query = useQuery();
  const [message, setMessage] = useState('Placing your order...');
  const { addOrder } = useOrders();

  const hasOrdered = useRef(false); // ✅ Prevents duplicate requests

  useEffect(() => {
    const createOrder = async () => {
      if (hasOrdered.current) return; // Prevent multiple calls
      hasOrdered.current = true;

      const token = localStorage.getItem('authToken');
      const productId = query.get('productId');
      const qtyStr = query.get('qty');
      const qty = qtyStr ? parseInt(qtyStr, 10) : 1;

      const name = query.get('name');
      const address = query.get('address');
      const city = query.get('city');
      const postal = query.get('postal');
      const country = query.get('country');

      // ✅ Validate query params
      if (!productId || !name || !address || !city || !postal || !country) {
        setMessage('Missing order info. Redirecting...');
        setTimeout(() => navigate('/'), 3000);
        return;
      }

      try {
        // 🛍️ Get product info
        const { data: product } = await axios.get(`/products/${productId}`);

        // 🧾 Create order
        await axios.post(
          '/orders',
          {
            orderItems: [
              {
                product: product._id,
                name: product.name,
                qty,
                price: product.price,
                image: product.image,
              },
            ],
            shippingAddress: {
              fullName: name,
              address,
              city,
              postalCode: postal,
              country,
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

        // ✅ Update orders in context (Navbar count)
        await addOrder();

        // ✅ Show success + redirect
        setMessage('✅ Order placed successfully! Redirecting to your orders...');
        setTimeout(() => {
          navigate('/orders', { replace: true }); // prevents re-order on back/refresh
        }, 3000);
      } catch (err) {
        console.error('❌ Order creation failed:', err);
        setMessage('❌ Failed to create order. Please try again.');
      }
    };

    createOrder();
  }, [navigate, query, addOrder]);

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold text-green-600">Payment Success</h1>
      <p className="mt-4 text-gray-800">{message}</p>
    </div>
  );
}
