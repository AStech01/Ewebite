// // src/pages/admin/AdminOrders.jsx
// import React, { useEffect, useState } from 'react';
// import axios from '../../axios/axios';

// export default function AdminOrders() {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const fetchOrders = async () => {
//     try {
//       const token = localStorage.getItem('authToken');
//       const { data } = await axios.get('/orders', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setOrders(data);
//     } catch (err) {
//       setError(err.response?.data?.error || 'Failed to fetch orders');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const markAsDelivered = async (orderId) => {
//     try {
//       const token = localStorage.getItem('authToken');
//       await axios.put(`/orders/${orderId}/deliver`, {}, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setOrders((prev) =>
//         prev.map((o) =>
//           o._id === orderId ? { ...o, isDelivered: true, deliveredAt: new Date().toISOString() } : o
//         )
//       );
//     } catch (err) {
//       alert('Failed to mark as delivered.');
//     }
//   };

//   // ✅ DELETE ORDER FUNCTION
//   const deleteOrder = async (orderId) => {
//     const confirmDelete = window.confirm('Are you sure you want to delete this order?');
//     if (!confirmDelete) return;

//     try {
//       const token = localStorage.getItem('authToken');
//     await axios.delete(`/orders/${orderId}`, {
//   headers: { Authorization: `Bearer ${token}` },
// });
//       setOrders((prev) => prev.filter((o) => o._id !== orderId));
//     } catch (err) {
//       alert('Failed to delete order.');
//     }
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">All Orders (Admin)</h1>
//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p className="text-red-500">{error}</p>
//       ) : (
//         <div className="space-y-6">
//           {orders.map((order) => (
//             <div key={order._id} className="bg-white border rounded-lg p-4 shadow">
//               <div className="mb-2">
//                 <p><strong>User:</strong> {order.user?.name} ({order.user?.email})</p>
//                 <p><strong>Payment:</strong> {order.paymentMethod}</p>
//                 <p><strong>Paid:</strong> {order.isPaid ? '✅ Yes' : '❌ No'}</p>
//                 <p><strong>Delivered:</strong> {order.isDelivered ? '✅ Yes' : '❌ No'}</p>
//               </div>
//               <div className="space-y-3">
//                 {order.orderItems.map((item, i) => (
//                   <div key={i} className="flex gap-4 border p-3 rounded">
//                     <img
//                       src={
//                         item.image?.startsWith('http')
//                           ? item.image
//                           : `http://localhost:5000${item.image}`
//                       }
//                       alt={item.name}
//                       className="w-20 h-20 object-cover rounded"
//                     />
//                     <div>
//                       <p className="font-semibold">{item.name}</p>
//                       <p>Qty: {item.quantity}</p>
//                       <p>Price: ₹{item.price}</p>
//                       <p>Total: ₹{item.quantity * item.price}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="flex gap-4 mt-4">
//                 {!order.isDelivered && (
//                   <button
//                     onClick={() => markAsDelivered(order._id)}
//                     className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
//                   >
//                     Mark as Delivered
//                   </button>
//                 )}

//                 {/* ✅ DELETE BUTTON */}
//                 <button
//                   onClick={() => deleteOrder(order._id)}
//                   className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
//                 >
//                   Delete Order
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// import React, { useEffect, useState } from 'react';
// import axios from '../../axios/axios';

// export default function AdminOrders() {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const fetchOrders = async () => {
//     try {
//       const token = localStorage.getItem('authToken');
//       const { data } = await axios.get('/orders', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setOrders(data);
//     } catch (err) {
//       setError(err.response?.data?.error || 'Failed to fetch orders');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const markAsDelivered = async (orderId) => {
//     try {
//       const token = localStorage.getItem('authToken');
//       await axios.put(`/orders/${orderId}/deliver`, {}, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setOrders((prev) =>
//         prev.map((o) =>
//           o._id === orderId ? { ...o, isDelivered: true, deliveredAt: new Date().toISOString() } : o
//         )
//       );
//     } catch (err) {
//       alert('Failed to mark as delivered.');
//     }
//   };

//   const deleteOrder = async (orderId) => {
//     const confirmDelete = window.confirm('Are you sure you want to delete this order?');
//     if (!confirmDelete) return;

//     try {
//       const token = localStorage.getItem('authToken');
//       await axios.delete(`/orders/${orderId}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setOrders((prev) => prev.filter((o) => o._id !== orderId));
//     } catch (err) {
//       alert(err.response?.data?.error || 'Failed to delete order.');
//     }
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">All Orders (Admin)</h1>
//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p className="text-red-500">{error}</p>
//       ) : (
//         <div className="space-y-6">
//           {orders.map((order) => (
//             <div key={order._id} className="bg-white border rounded-lg p-4 shadow">
//               <div className="mb-2">
//                 <p><strong>User:</strong> {order.user?.name} ({order.user?.email})</p>
//                 <p><strong>Payment:</strong> {order.paymentMethod}</p>
//                 <p><strong>Paid:</strong> {order.isPaid ? '✅ Yes' : '❌ No'}</p>
//                 <p><strong>Delivered:</strong> {order.isDelivered ? '✅ Yes' : '❌ No'}</p>
//               </div>
//               <div className="space-y-3">
//                 {order.orderItems.map((item, i) => (
//                   <div key={i} className="flex gap-4 border p-3 rounded">
//                     <img
//                       src={
//                         item.image?.startsWith('http')
//                           ? item.image
//                           : `http://localhost:5000${item.image}`
//                       }
//                       alt={item.name}
//                       className="w-20 h-20 object-cover rounded"
//                     />
//                     <div>
//                       <p className="font-semibold">{item.name}</p>
//                       <p>Qty: {item.quantity}</p>
//                       <p>Price: ₹{item.price}</p>
//                       <p>Total: ₹{item.quantity * item.price}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="flex gap-4 mt-4">
//                 {!order.isDelivered && (
//                   <button
//                     onClick={() => markAsDelivered(order._id)}
//                     className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
//                   >
//                     Mark as Delivered
//                   </button>
//                 )}

//                 <button
//                   onClick={() => deleteOrder(order._id)}
//                   className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
//                 >
//                   Delete Order
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import axios from "../../axios/axios";

// export default function AdminOrders() {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const fetchOrders = async () => {
//     try {
//       const token = localStorage.getItem("authToken");
//       const { data } = await axios.get("/orders", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setOrders(data);
//     } catch (err) {
//       setError(err.response?.data?.error || "Failed to fetch orders");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const markAsDelivered = async (orderId) => {
//     try {
//       const token = localStorage.getItem("authToken");
//       await axios.put(
//         `/orders/${orderId}/deliver`,
//         {},
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setOrders((prev) =>
//         prev.map((order) =>
//           order._id === orderId
//             ? { ...order, isDelivered: true, deliveredAt: new Date().toISOString() }
//             : order
//         )
//       );
//     } catch {
//       alert("Failed to mark as delivered.");
//     }
//   };

//   const deleteOrder = async (orderId) => {
//     if (!window.confirm("Are you sure you want to delete this order?")) return;

//     try {
//       const token = localStorage.getItem("authToken");
//       await axios.delete(`/orders/${orderId}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setOrders((prev) => prev.filter((order) => order._id !== orderId));
//     } catch (err) {
//       alert(err.response?.data?.error || "Failed to delete order.");
//     }
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
//         All Orders (Admin)
//       </h1>

//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p className="text-red-500">{error}</p>
//       ) : (
//         <div className="space-y-6">
//           {orders.map((order) => (
//             <div
//               key={order._id}
//               className="bg-white border rounded-lg p-4 shadow"
//             >
//               <div className="mb-2">
//                 <p>
//                   <strong>User:</strong> {order.user?.name} ({order.user?.email})
//                 </p>
//                 <p>
//                   <strong>Payment:</strong> {order.paymentMethod}
//                 </p>
//                 <p>
//                   <strong>Paid:</strong> {order.isPaid ? "✅ Yes" : "❌ No"}
//                 </p>
//                 <p>
//                   <strong>Delivered:</strong> {order.isDelivered ? "✅ Yes" : "❌ No"}
//                 </p>
//               </div>

//               <div className="space-y-3">
//                 {order.orderItems.map((item, idx) => (
//                   <div
//                     key={idx}
//                     className="flex gap-4 border p-3 rounded"
//                   >
//                     <img
//                       src={
//                         item.image?.startsWith("http")
//                           ? item.image
//                           : `http://localhost:5000${item.image}`
//                       }
//                       alt={item.name}
//                       className="w-20 h-20 object-cover rounded"
//                     />
//                     <div>
//                       <p className="font-semibold">{item.name}</p>
//                       <p>Qty: {item.quantity}</p>
//                       <p>Price: ₹{item.price}</p>
//                       <p>Total: ₹{item.quantity * item.price}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="flex gap-4 mt-4">
//                 {!order.isDelivered && (
//                   <button
//                     onClick={() => markAsDelivered(order._id)}
//                     className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
//                   >
//                     Mark as Delivered
//                   </button>
//                 )}

//                 <button
//                   onClick={() => deleteOrder(order._id)}
//                   className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
//                 >
//                   Delete Order
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import axios from "../../axios/axios";

// export default function AdminOrders() {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const fetchOrders = async () => {
//     try {
//       const token = localStorage.getItem("authToken");
//       const { data } = await axios.get("/orders", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setOrders(data);
//     } catch (err) {
//       setError(err.response?.data?.error || "Failed to fetch orders");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const markAsDelivered = async (orderId) => {
//     try {
//       const token = localStorage.getItem("authToken");
//       await axios.put(`/orders/${orderId}/deliver`, {}, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setOrders((prev) =>
//         prev.map((o) =>
//           o._id === orderId
//             ? { ...o, isDelivered: true, deliveredAt: new Date().toISOString() }
//             : o
//         )
//       );
//     } catch {
//       alert("Failed to mark as delivered.");
//     }
//   };

//   const deleteOrder = async (orderId) => {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete this order?"
//     );
//     if (!confirmDelete) return;

//     try {
//       const token = localStorage.getItem("authToken");
//       await axios.delete(`/orders/${orderId}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setOrders((prev) => prev.filter((o) => o._id !== orderId));
//     } catch (err) {
//       alert(err.response?.data?.error || "Failed to delete order.");
//     }
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
//         All Orders (Admin)
//       </h1>
//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p className="text-red-500">{error}</p>
//       ) : (
//         <div className="space-y-6">
//           {orders.map((order) => (
//             <div
//               key={order._id}
//               className="bg-white border rounded-lg p-4 shadow"
//             >
//               <div className="mb-2">
//                 <p>
//                   <strong>User:</strong> {order.user?.name} (
//                   {order.user?.email})
//                 </p>
//                 <p>
//                   <strong>Payment:</strong> {order.paymentMethod}
//                 </p>
//                 <p>
//                   <strong>Paid:</strong> {order.isPaid ? "✅ Yes" : "❌ No"}
//                 </p>
//                 <p>
//                   <strong>Delivered:</strong>{" "}
//                   {order.isDelivered ? "✅ Yes" : "❌ No"}
//                 </p>
//               </div>
//               <div className="space-y-3">
//                 {order.orderItems.map((item, i) => (
//                   <div
//                     key={i}
//                     className="flex gap-4 border p-3 rounded"
//                   >
//                     <img
//                       src={
//                         item.image?.startsWith("http")
//                           ? item.image
//                           : `http://localhost:5000${item.image}`
//                       }
//                       alt={item.name}
//                       className="w-20 h-20 object-cover rounded"
//                     />
//                     <div>
//                       <p className="font-semibold">{item.name}</p>
//                       <p>Qty: {item.quantity}</p>
//                       <p>Price: ₹{item.price}</p>
//                       <p>Total: ₹{item.quantity * item.price}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="flex gap-4 mt-4">
//                 {!order.isDelivered && (
//                   <button
//                     onClick={() => markAsDelivered(order._id)}
//                     className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
//                   >
//                     Mark as Delivered
//                   </button>
//                 )}

//                 <button
//                   onClick={() => deleteOrder(order._id)}
//                   className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
//                 >
//                   Delete Order
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import axios from "../../axios/axios";

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem("authToken");
      const { data } = await axios.get("/orders", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setOrders(data);
    } catch (err) {
      setError(err.response?.data?.error || "Failed to fetch orders");
    } finally {
      setLoading(false);
    }
  };

  const deleteOrder = async (orderId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this order?");
    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("authToken");
      await axios.delete(`/orders/${orderId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // Remove order from state so UI updates immediately
      setOrders((prev) => prev.filter((order) => order._id !== orderId));
    } catch (err) {
      alert(err.response?.data?.error || "Failed to delete order.");
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">All Orders (Admin)</h1>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order._id} className="bg-white border rounded-lg p-4 shadow">
              <div>
                <p>
                  <strong>User:</strong> {order.user?.name} ({order.user?.email})
                </p>
                <p>
                  <strong>Payment:</strong> {order.paymentMethod}
                </p>
                <p>
                  <strong>Paid:</strong> {order.isPaid ? "✅ Yes" : "❌ No"}
                </p>
                <p>
                  <strong>Delivered:</strong> {order.isDelivered ? "✅ Yes" : "❌ No"}
                </p>
              </div>

              <div className="space-y-3 mt-2">
                {order.orderItems.map((item, i) => (
                  <div key={i} className="flex gap-4 border p-3 rounded">
                    <img
                      src={
                        item.image?.startsWith("http")
                          ? item.image
                          : `http://localhost:5000${item.image}`
                      }
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p>Qty: {item.quantity}</p>
                      <p>Price: ₹{item.price}</p>
                      <p>Total: ₹{item.quantity * item.price}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 mt-4">
                {!order.isDelivered && (
                  <button
                    onClick={() => alert("Use your existing markAsDelivered function")}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                  >
                    Mark as Delivered
                  </button>
                )}

                <button
                  onClick={() => deleteOrder(order._id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                >
                  Delete Order
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
