// import React, { useEffect, useState } from 'react';
// import axios from '../axios/axios';
// import { motion } from 'framer-motion';
// import { useAuth } from '../context/AuthContext';
// import { Link } from 'react-router-dom';

// export default function OrdersPage() {
//   const { user } = useAuth();
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     if (!user) return;

//     const fetchOrders = async () => {
//       const token = localStorage.getItem('authToken');
//       try {
//         const { data } = await axios.get('/orders/my', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setOrders(data);
//       } catch (err) {
//         setError('Failed to load orders');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, [user]);

//   // ⛔ If not logged in
//   if (!user) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center text-gray-700">
//         <h2 className="text-2xl font-semibold mb-4">Please login to view your orders</h2>
//         <Link
//           to="/login"
//           className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
//         >
//           Login
//         </Link>
//       </div>
//     );
//   }

//   // 🕓 Loading
//   if (loading) return <div className="text-center mt-10 text-gray-600">Loading orders...</div>;
//   if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;

//   return (
//     <div className="max-w-6xl mx-auto mt-10 px-4">
//       <h1 className="text-3xl font-bold mb-8 text-center text-teal-700">Your Orders</h1>
//       {orders.length === 0 ? (
//         <p className="text-gray-500 text-center">No orders yet.</p>
//       ) : (
//         <div className="space-y-6">
//           {orders.map((order) => (
//             <motion.div
//               key={order._id}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4 }}
//               className="bg-white border border-gray-200 rounded-xl shadow-md p-6"
//             >
//               <div className="flex justify-between items-start flex-wrap">
//                 <div className="space-y-2">
//                   <h2 className="text-lg font-semibold text-gray-800">Order ID: {order._id}</h2>
//                   <p className="text-sm text-gray-600">Placed on: {new Date(order.createdAt).toLocaleString()}</p>
//                   <p className="text-sm text-gray-600">
//                     Total: <span className="text-green-600 font-semibold">₹{order.totalPrice}</span>
//                   </p>
//                   <p className="text-sm text-gray-600">
//                     Status:{' '}
//                     {order.isDelivered ? (
//                       <span className="text-green-700 font-medium">Delivered</span>
//                     ) : (
//                       <span className="text-yellow-600 font-medium">Pending</span>
//                     )}
//                   </p>
//                   {order.shippingAddress && (
//                     <div className="text-sm text-gray-500 mt-2">
//                       <p>
//                         <strong>Address:</strong> {order.shippingAddress.address},{' '}
//                         {order.shippingAddress.city}, {order.shippingAddress.postalCode},{' '}
//                         {order.shippingAddress.country}
//                       </p>
//                     </div>
//                   )}
//                   {order.user && (
//                     <div className="text-sm text-gray-500">
//                       <p>
//                         <strong>User:</strong> {order.user.name} ({order.user.email})
//                       </p>
//                     </div>
//                   )}
//                 </div>

//                 <div className="w-full sm:w-auto mt-4 sm:mt-0">
//                   <h3 className="text-sm font-semibold text-gray-700 mb-2">Items:</h3>
//                   <div className="space-y-2">
//                     {order.orderItems.map((item, index) => (
//                       <div key={index} className="flex items-center gap-4">
//                         <img
//                           src={
//                             item.image?.startsWith('http')
//                               ? item.image
//                               : `http://localhost:5000${item.image}`
//                           }
//                           alt={item.name}
//                           className="w-16 h-16 object-cover rounded-md border"
//                         />
//                         <div>
//                           <p className="text-sm font-medium text-gray-800">{item.name}</p>
//                           <p className="text-xs text-gray-500">
//                             Qty: {item.qty} | ₹{item.price}
//                           </p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }


// import React, { useEffect, useState } from 'react';
// import axios from '../axios/axios';
// import { motion } from 'framer-motion';
// import { useAuth } from '../context/AuthContext';
// import { Link } from 'react-router-dom';

// export default function OrdersPage() {
//   const { user } = useAuth();
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     if (!user) return;

//     const fetchOrders = async () => {
//       const token = localStorage.getItem('authToken');
//       try {
//         const { data } = await axios.get('/orders/my', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setOrders(data);
//       } catch (err) {
//         setError('Failed to load orders');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, [user]);

//   if (!user) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center text-gray-700">
//         <h2 className="text-2xl font-semibold mb-4">Please login to view your orders</h2>
//         <Link
//           to="/login"
//           className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
//         >
//           Login
//         </Link>
//       </div>
//     );
//   }

//   if (loading) return <div className="text-center mt-10 text-gray-600">Loading orders...</div>;
//   if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;

//   return (
//     <div className="max-w-6xl mx-auto mt-10 px-4">
//       <h1 className="text-3xl font-bold mb-8 text-center text-teal-700">Your Orders</h1>
//       {orders.length === 0 ? (
//         <p className="text-gray-500 text-center">No orders yet.</p>
//       ) : (
//         <div className="space-y-6">
//           {orders.map((order) => (
//             <motion.div
//               key={order._id}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4 }}
//               className="bg-white border border-gray-200 rounded-xl shadow-md p-6"
//             >
//               <div className="flex justify-between items-start flex-wrap">
//                 <div className="space-y-2">
//                   <h2 className="text-lg font-semibold text-gray-800">Order ID: {order._id}</h2>
//                   <p className="text-sm text-gray-600">Placed on: {new Date(order.createdAt).toLocaleString()}</p>
//                   <p className="text-sm text-gray-600">
//                     Total: <span className="text-green-600 font-semibold">₹{order.totalPrice}</span>
//                   </p>
//                   <p className="text-sm text-gray-600">
//                     Status:{' '}
//                     {order.isDelivered ? (
//                       <span className="text-green-700 font-medium">Delivered</span>
//                     ) : (
//                       <span className="text-yellow-600 font-medium">Pending</span>
//                     )}
//                   </p>
//                   {order.shippingAddress && (
//                     <div className="text-sm text-gray-500 mt-2">
//                       <p>
//                         <strong>Address:</strong> {order.shippingAddress.address},{' '}
//                         {order.shippingAddress.city}, {order.shippingAddress.postalCode},{' '}
//                         {order.shippingAddress.country}
//                       </p>
//                     </div>
//                   )}
//                   {order.user && (
//                     <div className="text-sm text-gray-500">
//                       <p>
//                         <strong>User:</strong> {order.user.name} ({order.user.email})
//                       </p>
//                     </div>
//                   )}
//                 </div>

//                 <div className="w-full sm:w-auto mt-4 sm:mt-0">
//                   <h3 className="text-sm font-semibold text-gray-700 mb-2">Items:</h3>
//                   <div className="space-y-2">
//                     {order.orderItems.map((item, index) => (
//                       <div key={index} className="flex items-center gap-4">
//                         <img
//                           src={
//                             item.image?.startsWith('http')
//                               ? item.image
//                               : `http://localhost:5000${item.image}`
//                           }
//                           alt={item.name}
//                           className="w-16 h-16 object-cover rounded-md border"
//                         />
//                         <div>
//                           <p className="text-sm font-medium text-gray-800">{item.name}</p>
//                           <p className="text-xs text-gray-500">
//                             Qty: {item.qty} | ₹{item.price}
//                           </p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// import React, { useEffect, useState } from 'react';
// import axios from '../axios/axios';
// import { motion } from 'framer-motion';
// import { useAuth } from '../context/AuthContext';
// import { Link } from 'react-router-dom';

// export default function OrdersPage() {
//   const { user } = useAuth();
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     if (!user) return;

//     const fetchOrders = async () => {
//       const token = localStorage.getItem('authToken');
//       try {
//         const { data } = await axios.get('/orders/my', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setOrders(data);
//       } catch {
//         setError('Failed to load orders');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, [user]);

//   if (!user) return (
//     <div className="min-h-screen flex flex-col items-center justify-center text-gray-700">
//       <h2 className="text-2xl font-semibold mb-4">Please login to view your orders</h2>
//       <Link to="/login"
//         className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
//         Login
//       </Link>
//     </div>
//   );

//   if (loading) return <div className="text-center mt-10 text-gray-600">Loading orders...</div>;
//   if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;

//   return (
//     <div className="max-w-6xl mx-auto mt-10 px-4">
//       <h1 className="text-3xl font-bold mb-8 text-center text-teal-700">Your Orders</h1>
//       {orders.length === 0 ? (
//         <p className="text-gray-500 text-center">No orders yet.</p>
//       ) : (
//         <div className="space-y-6">
//           {orders.map(order => (
//             <motion.div
//               key={order._id}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4 }}
//               className="bg-white border border-gray-200 rounded-xl shadow-md p-6"
//             >
//               <h2 className="text-lg font-semibold text-gray-800">Order ID: {order._id}</h2>
//               <p className="text-sm text-gray-600">
//                 Placed on: {new Date(order.createdAt).toLocaleString()}
//               </p>
//               <p className="text-sm text-gray-600">
//                 Status: {order.isDelivered 
//                   ? <span className="text-green-700 font-medium">Delivered</span>
//                   : <span className="text-yellow-600 font-medium">Pending</span>}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// import React, { useEffect, useState } from 'react';
// import axios from '../axios/axios';
// import { motion } from 'framer-motion';
// import { useAuth } from '../context/AuthContext';
// import { Link } from 'react-router-dom';

// export default function OrdersPage() {
//   const { user } = useAuth();
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     if (!user) return;

//     const fetchOrders = async () => {
//       const token = localStorage.getItem('authToken');
//       try {
//         const { data } = await axios.get('/orders/my', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setOrders(data);
//       } catch (err) {
//         setError('Failed to load orders');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, [user]);

//   if (!user) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center text-gray-700">
//         <h2 className="text-2xl font-semibold mb-4">Please login to view your orders</h2>
//         <Link
//           to="/login"
//           className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
//         >
//           Login
//         </Link>
//       </div>
//     );
//   }

//   if (loading) return <div className="text-center mt-10 text-gray-600">Loading orders...</div>;
//   if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;

//   return (
//     <div className="max-w-6xl mx-auto mt-10 px-4">
//       <h1 className="text-3xl font-bold mb-8 text-center text-teal-700">Your Orders</h1>
//       {orders.length === 0 ? (
//         <p className="text-gray-500 text-center">No orders yet.</p>
//       ) : (
//         <div className="space-y-6">
//           {orders.map((order) => (
//             <motion.div
//               key={order._id}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4 }}
//               className="bg-white border border-gray-200 rounded-xl shadow-md p-6"
//             >
//               <div className="flex justify-between items-start flex-wrap">
//                 <div className="space-y-2">
//                   <h2 className="text-lg font-semibold text-gray-800">Order ID: {order._id}</h2>
//                   <p className="text-sm text-gray-600">Placed on: {new Date(order.createdAt).toLocaleString()}</p>
//                   <p className="text-sm text-gray-600">
//                     Total: <span className="text-green-600 font-semibold">₹{order.totalPrice}</span>
//                   </p>
//                   <p className="text-sm text-gray-600">
//                     Status:{' '}
//                     {order.isDelivered ? (
//                       <span className="text-green-700 font-medium">Delivered</span>
//                     ) : (
//                       <span className="text-yellow-600 font-medium">Pending</span>
//                     )}
//                   </p>
//                   {order.shippingAddress && (
//                     <div className="text-sm text-gray-500 mt-2">
//                       <p>
//                         <strong>Address:</strong> {order.shippingAddress.address},{' '}
//                         {order.shippingAddress.city}, {order.shippingAddress.postalCode},{' '}
//                         {order.shippingAddress.country}
//                       </p>
//                     </div>
//                   )}
//                 </div>

//                 <div className="w-full sm:w-auto mt-4 sm:mt-0">
//                   <h3 className="text-sm font-semibold text-gray-700 mb-2">Items:</h3>
//                   <div className="space-y-2">
//                     {order.orderItems.map((item, index) => (
//                       <div key={index} className="flex items-center gap-4">
//                         <img
//                           src={
//                             item.image?.startsWith('http')
//                               ? item.image
//                               : `http://localhost:5000${item.image}`
//                           }
//                           alt={item.name}
//                           className="w-16 h-16 object-cover rounded-md border"
//                         />
//                         <div>
//                           <p className="text-sm font-medium text-gray-800">{item.name}</p>
//                           <p className="text-xs text-gray-500">
//                             Qty: {item.qty} | ₹{item.price}
//                           </p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useEffect, useState } from 'react';
import axios from '../axios/axios';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

export default function OrdersPage() {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!user) return;

    const fetchOrders = async () => {
      setLoading(true);
      setError('');
      try {
        const token = localStorage.getItem('authToken');
        const { data } = await axios.get('/orders/my', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setOrders(data);
      } catch (err) {
        setError('Failed to load orders');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user]);

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-gray-700">
        <h2 className="text-2xl font-semibold mb-4">Please log in to view your orders</h2>
        <Link
          to="/login"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </Link>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="text-center mt-10 text-gray-600">Loading orders...</div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-10 text-red-500">{error}</div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center text-teal-700">
        Your Orders
      </h1>

      {orders.length === 0 ? (
        <p className="text-gray-500 text-center">No orders yet.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <motion.div
              key={order._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white border border-gray-200 rounded-xl shadow-md p-6"
            >
              <div className="flex justify-between items-start flex-wrap">
                {/* Order Summary */}
                <div className="space-y-2">
                  <h2 className="text-lg font-semibold text-gray-800">
                    Order ID: {order._id}
                  </h2>
                  <p className="text-sm text-gray-600">
                    Placed on: {new Date(order.createdAt).toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-600">
                    Total:{' '}
                    <span className="text-green-600 font-semibold">
                      ₹{order.totalPrice}
                    </span>
                  </p>
                  <p className="text-sm text-gray-600">
                    Status:{' '}
                    {order.isDelivered ? (
                      <span className="text-green-700 font-medium">
                        Delivered
                      </span>
                    ) : (
                      <span className="text-yellow-600 font-medium">
                        Pending
                      </span>
                    )}
                  </p>

                  {order.shippingAddress && (
                    <div className="text-sm text-gray-500 mt-2">
                      <p>
                        <strong>Address:</strong>{' '}
                        {order.shippingAddress.address}, {order.shippingAddress.city},{' '}
                        {order.shippingAddress.postalCode}, {order.shippingAddress.country}
                      </p>
                    </div>
                  )}
                </div>

                {/* Items Section */}
                <div className="w-full sm:w-auto mt-4 sm:mt-0">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">Items:</h3>
                  <div className="space-y-2">
                    {order.orderItems.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-4">
                        <img
                          src={
                            item.image?.startsWith('http')
                              ? item.image
                              : `http://localhost:5000${item.image}`
                          }
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-md border"
                        />
                        <div>
                          <p className="text-sm font-medium text-gray-800">{item.name}</p>
                          <p className="text-xs text-gray-500">
                            Qty: {item.qty} | ₹{item.price}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
