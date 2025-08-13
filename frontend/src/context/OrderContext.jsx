// // src/context/OrderContext.jsx
// import React, { createContext, useContext, useState, useEffect } from 'react';
// import axios from '../axios/axios';

// const OrderContext = createContext();
// export const useOrders = () => useContext(OrderContext);

// export const OrderProvider = ({ children }) => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchOrders = async () => {
//     const token = localStorage.getItem('authToken');
//     if (!token) return;

//     try {
//       const { data } = await axios.get('/orders/my', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setOrders(data);
//     } catch (err) {
//       console.error('Failed to fetch orders:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   return (
//     <OrderContext.Provider value={{ orders, setOrders, fetchOrders, loading }}>
//       {children}
//     </OrderContext.Provider>
//   );
// };

// src/context/OrderContext.jsx
// import React, { createContext, useContext, useState, useEffect } from 'react';
// import axios from '../axios/axios';

// // Create context
// const OrderContext = createContext();

// // Hook to use context
// export const useOrders = () => useContext(OrderContext);

// // Provider component
// export const OrderProvider = ({ children }) => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch all orders for the current user
//   const fetchOrders = async () => {
//     const token = localStorage.getItem('authToken');
//     if (!token) {
//       setOrders([]);
//       setLoading(false);
//       return;
//     }

//     try {
//       const { data } = await axios.get('/orders/my', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setOrders(data);
//     } catch (err) {
//       console.error('❌ Failed to fetch orders:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Call this to update orders after new one is placed
//   const addOrder = async () => {
//     await fetchOrders();
//   };

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   return (
//     <OrderContext.Provider
//       value={{
//         orders,
//         setOrders,
//         fetchOrders,
//         addOrder,
//         loading,
//       }}
//     >
//       {children}
//     </OrderContext.Provider>
//   );
// };


// import React, { createContext, useContext, useState, useEffect } from 'react';
// import axios from '../axios/axios';
// import { useAuth } from './AuthContext'; // <-- import your auth context

// const OrderContext = createContext();

// export const useOrders = () => useContext(OrderContext);

// export const OrderProvider = ({ children }) => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const { user } = useAuth(); // <-- get current logged-in user

//   const fetchOrders = async () => {
//     const token = localStorage.getItem('authToken');
//     if (!token) {
//       setOrders([]);
//       setLoading(false);
//       return;
//     }

//     try {
//       const { data } = await axios.get('/orders/my', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setOrders(data);
//     } catch (err) {
//       console.error('❌ Failed to fetch orders:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const addOrder = async () => {
//     await fetchOrders();
//   };

//   // ✅ Refetch whenever user logs in/out
//   useEffect(() => {
//     if (user) {
//       fetchOrders();
//     } else {
//       setOrders([]);
//     }
//   }, [user]);

//   return (
//     <OrderContext.Provider
//       value={{
//         orders,
//         setOrders,
//         fetchOrders,
//         addOrder,
//         loading,
//       }}
//     >
//       {children}
//     </OrderContext.Provider>
//   );
// };


// src/context/OrderContext.jsx
// import React, { createContext, useContext, useState, useEffect } from 'react';
// import axios from '../axios/axios';
// import { useAuth } from './AuthContext'; // Import your Auth context

// // Create the Order context
// const OrderContext = createContext();

// // Hook to use orders easily
// export const useOrders = () => useContext(OrderContext);

// export const OrderProvider = ({ children }) => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const { user } = useAuth(); // Logged-in user from AuthContext

//   // Fetch orders for the current user
//   const fetchOrders = async () => {
//     const token = localStorage.getItem('authToken');
//     if (!token) {
//       setOrders([]);
//       setLoading(false);
//       return;
//     }

//     try {
//       setLoading(true);
//       const { data } = await axios.get('/orders/my', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setOrders(data);
//     } catch (err) {
//       console.error('❌ Failed to fetch orders:', err);
//       setOrders([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Add order and refresh list
//   const addOrder = async () => {
//     await fetchOrders();
//   };

//   // Refetch orders whenever user logs in/out
//   useEffect(() => {
//     if (user) {
//       fetchOrders();
//     } else {
//       setOrders([]);
//       setLoading(false);
//     }
//   }, [user]);

//   return (
//     <OrderContext.Provider
//       value={{
//         orders,
//         setOrders,
//         fetchOrders,
//         addOrder,
//         loading,
//       }}
//     >
//       {children}
//     </OrderContext.Provider>
//   );
// };

import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from '../axios/axios';
import { useAuth } from './AuthContext'; // ✅ Auth context for current user

// Create the Order context
const OrderContext = createContext();

// Custom hook to use orders anywhere
export const useOrders = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth(); // ✅ Get logged-in user from AuthContext

  // Fetch current user's orders
  const fetchOrders = async () => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      setOrders([]);
      setLoading(false);
      return;
    }

    try {
      setLoading(true); // ✅ Show loading while fetching
      const { data } = await axios.get('/orders/my', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setOrders(data);
    } catch (err) {
      console.error('❌ Failed to fetch orders:', err);
      setOrders([]); // Ensure empty if error
    } finally {
      setLoading(false);
    }
  };

  // Call this after placing a new order
  const addOrder = async () => {
    await fetchOrders();
  };

  // ✅ Auto-fetch when user changes
  useEffect(() => {
    if (user) {
      fetchOrders();
    } else {
      setOrders([]);
      setLoading(false);
    }
  }, [user]);

  return (
    <OrderContext.Provider
      value={{
        orders,
        setOrders,
        fetchOrders,
        addOrder,
        loading,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
