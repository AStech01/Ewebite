// // === ProductPage.jsx ===
// // import React, { useEffect, useState } from 'react';
// // import { useParams, useNavigate } from 'react-router-dom';
// // import axios from '../axios/axios';
// // import { useCart } from '../context/CartContext';

// // export default function ProductPage() {
// //   const { id } = useParams();
// //   const navigate = useNavigate();
// //   const [product, setProduct] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState('');
// //   const { dispatch } = useCart();

// //   useEffect(() => {
// //     const fetchProduct = async () => {
// //       try {
// //         const { data } = await axios.get(`/products/${id}`);
// //         setProduct(data);
// //       } catch (err) {
// //         setError('Product not found.');
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchProduct();
// //   }, [id]);

// //   const handleAddToCart = () => {
// //     dispatch({
// //       type: 'ADD_TO_CART',
// //       payload: { ...product, qty: 1 },
// //     });
// //     alert('Added to cart!');
// //   };

// //   const handleBuyNow = () => {
// //     const token = localStorage.getItem('authToken');
// //     if (!token) {
// //       alert('Please login first');
// //       navigate('/login');
// //       return;
// //     }

// //     localStorage.setItem('buyNowItem', JSON.stringify({
// //       _id: product._id,          // ✅ Use _id for order schema
// //       name: product.name,
// //       price: product.price,
// //       image: product.image,
// //       qty: 1,
      
// //     }));

// //     navigate('/paymentpage');
// //   };

// //   if (loading) return <div className="text-center mt-10">Loading...</div>;
// //   if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;

// //   return (
// //     <div className="max-w-6xl mx-auto mt-10 p-6 bg-white rounded shadow">
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
// //         <img
// //           src={product.image.startsWith('http') ? product.image : `http://localhost:5000${product.image}`}
// //           alt={product.name}
// //           className="w-full h-[400px] object-contain border rounded"
// //         />
// //         <div className="space-y-4">
// //           <h1 className="text-3xl font-bold">{product.name}</h1>
// //           <p>{product.description}</p>
// //           <p className="text-2xl text-blue-600 font-semibold">₹{product.price}</p>

// //           <div className="flex gap-4 mt-4">
// //             <button onClick={handleAddToCart} className="bg-green-600 text-white px-6 py-2 rounded">
// //               🛒 Add to Cart
// //             </button>
// //             <button onClick={handleBuyNow} className="bg-blue-600 text-white px-6 py-2 rounded">
// //               🛍️ Buy Now
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// // === ProductPage.jsx ===
// // import React, { useEffect, useState } from 'react';
// // import { useParams, useNavigate } from 'react-router-dom';
// // import axios from '../axios/axios';
// // import { useCart } from '../context/CartContext';

// // export default function ProductPage() {
// //   const { id } = useParams();
// //   const navigate = useNavigate();
// //   const [product, setProduct] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState('');
// //   const { dispatch } = useCart();

// //   useEffect(() => {
// //     const fetchProduct = async () => {
// //       try {
// //         const { data } = await axios.get(`/products/${id}`);
// //         setProduct(data);
// //       } catch (err) {
// //         setError('Product not found.');
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchProduct();
// //   }, [id]);

// //   const handleAddToCart = () => {
// //     dispatch({
// //       type: 'ADD_TO_CART',
// //       payload: { ...product, qty: 1 },
// //     });
// //     alert('Added to cart!');
// //   };

// //   const handleBuyNow = () => {
// //     const token = localStorage.getItem('authToken');
// //     if (!token) {
// //       alert('Please login first');
// //       navigate('/login');
// //       return;
// //     }

// //     const buyNowItem = {
// //       _id: product._id,       // ✅ Required for backend order handling
// //       name: product.name,
// //       price: product.price,
// //       image: product.image,
// //       qty: 1,
// //     };

// //     localStorage.setItem('buyNowItem', JSON.stringify(buyNowItem));
// //     navigate('/paymentpage');
// //   };

// //   if (loading) return <div className="text-center mt-10">Loading...</div>;
// //   if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;

// //   const imageUrl = product.image?.startsWith('http')
// //     ? product.image
// //     : `http://localhost:5000${product.image}`;

// //   return (
// //     <div className="max-w-6xl mx-auto mt-10 p-6 bg-white rounded shadow">
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
// //         <img
// //           src={imageUrl}
// //           alt={product.name}
// //           className="w-full h-[400px] object-contain border rounded"
// //         />
// //         <div className="space-y-4">
// //           <h1 className="text-3xl font-bold">{product.name}</h1>
// //           <p>{product.description}</p>
// //           <p className="text-2xl text-blue-600 font-semibold">₹{product.price}</p>

// //           <div className="flex gap-4 mt-4">
// //             <button
// //               onClick={handleAddToCart}
// //               className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
// //             >
// //               🛒 Add to Cart
// //             </button>
// //             <button
// //               onClick={handleBuyNow}
// //               className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
// //             >
// //               🛍️ Buy Now
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from '../axios/axios';
// import { useCart } from '../context/CartContext';

// export default function ProductPage() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const { dispatch } = useCart();

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const { data } = await axios.get(`/products/${id}`);
//         setProduct(data);
//       } catch (err) {
//         setError('Product not found.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   const handleAddToCart = () => {
//     dispatch({
//       type: 'ADD_TO_CART',
//       payload: { ...product, qty: 1 },
//     });
//     alert('Added to cart!');
//   };

//   const handleBuyNow = () => {
//     const token = localStorage.getItem('authToken');
//     if (!token) {
//       alert('Please login first');
//       navigate('/login');
//       return;
//     }

//     const buyNowItem = {
//       productId: product._id,  // <-- Changed here from _id to productId
//       name: product.name,
//       price: product.price,
//       image: product.image,
//       qty: 1,
//     };

//     localStorage.setItem('buyNowItem', JSON.stringify(buyNowItem));
//     navigate('/paymentpage');
//   };

//   if (loading) return <div className="text-center mt-10">Loading...</div>;
//   if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;

//   const imageUrl = product.image?.startsWith('http')
//     ? product.image
//     : `http://localhost:5000${product.image}`;

//   return (
//     <div className="max-w-6xl mx-auto mt-10 p-6 bg-white rounded shadow">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//         <img
//           src={imageUrl}
//           alt={product.name}
//           className="w-full h-[400px] object-contain border rounded"
//         />
//         <div className="space-y-4">
//           <h1 className="text-3xl font-bold">{product.name}</h1>
//           <p>{product.description}</p>
//           <p className="text-2xl text-blue-600 font-semibold">₹{product.price}</p>

//           <div className="flex gap-4 mt-4">
//             <button
//               onClick={handleAddToCart}
//               className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
//             >
//               🛒 Add to Cart
//             </button>
//             <button
//               onClick={handleBuyNow}
//               className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
//             >
//               🛍️ Buy Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "../axios/axios"; // your axios instance
// import { useCart } from "../context/CartContext";

// export default function ProductPage() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { dispatch } = useCart();

//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   // Shipping details state
//   const [fullName, setFullName] = useState("");
//   const [address, setAddress] = useState("");
//   const [city, setCity] = useState("");
//   const [postalCode, setPostalCode] = useState("");
//   const [country, setCountry] = useState("");

//   // Payment method state
//   const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");

//   const [submitError, setSubmitError] = useState("");
//   const [submitting, setSubmitting] = useState(false);

//   useEffect(() => {
//     async function fetchProduct() {
//       try {
//         const { data } = await axios.get(`/products/${id}`);
//         setProduct(data);
//       } catch (err) {
//         setError("Product not found.");
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchProduct();
//   }, [id]);

//   const handleAddToCart = () => {
//     dispatch({
//       type: "ADD_TO_CART",
//       payload: { ...product, qty: 1 },
//     });
//     alert("Added to cart!");
//   };

//   const handleOrderSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitError("");

//     // Validate required fields
//     if (!fullName || !address || !city || !postalCode || !country) {
//       setSubmitError("Please fill in all shipping details.");
//       return;
//     }
//     if (!paymentMethod) {
//       setSubmitError("Please select a payment method.");
//       return;
//     }

//     const token = localStorage.getItem("authToken");
//     if (!token) {
//       alert("Please login first");
//       navigate("/login");
//       return;
//     }

//     setSubmitting(true);

//     try {
//       // Build order data according to your backend schema
//       const orderData = {
//         orderItems: [
//           {
//             product: product._id,
//             name: product.name,
//             quantity: 1,
//             price: product.price,
//             image: product.image,
//           },
//         ],
//         shippingAddress: {
//           fullName,
//           address,
//           city,
//           postalCode,
//           country,
//         },
//         paymentMethod,
//       };

//       // POST to backend order API (adjust endpoint if different)
//       await axios.post("/orders", orderData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       alert("Order placed successfully!");
//       navigate("/orderconfirmation"); // or wherever you want

//     } catch (err) {
//       setSubmitError(
//         err.response?.data?.message || "Failed to place order. Try again."
//       );
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   if (loading) return <div className="text-center mt-10">Loading...</div>;
//   if (error)
//     return (
//       <div className="text-center mt-10 text-red-500 font-bold">{error}</div>
//     );

//   const imageUrl = product.image?.startsWith("http")
//     ? product.image
//     : `http://localhost:5000${product.image}`;

//   return (
//     <div className="max-w-6xl mx-auto mt-10 p-6 bg-white rounded shadow">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//         {/* Product Image */}
//         <img
//           src={imageUrl}
//           alt={product.name}
//           className="w-full h-[400px] object-contain border rounded"
//         />

//         {/* Product & Order Form */}
//         <div className="space-y-6">
//           <div>
//             <h1 className="text-3xl font-bold">{product.name}</h1>
//             <p className="mt-2">{product.description}</p>
//             <p className="text-2xl text-blue-600 font-semibold mt-4">
//               ₹{product.price}
//             </p>

//             <div className="flex gap-4 mt-4">
//               <button
//                 onClick={handleAddToCart}
//                 className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
//               >
//                 🛒 Add to Cart
//               </button>
//             </div>
//           </div>

//           {/* Order Form */}
//           <form onSubmit={handleOrderSubmit} className="space-y-4">
//             <h2 className="text-xl font-semibold">Shipping Details</h2>
//             <input
//               type="text"
//               placeholder="Full Name"
//               value={fullName}
//               onChange={(e) => setFullName(e.target.value)}
//               className="border p-2 w-full rounded"
//               required
//             />
//             <input
//               type="text"
//               placeholder="Address"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               className="border p-2 w-full rounded"
//               required
//             />
//             <input
//               type="text"
//               placeholder="City"
//               value={city}
//               onChange={(e) => setCity(e.target.value)}
//               className="border p-2 w-full rounded"
//               required
//             />
//             <input
//               type="text"
//               placeholder="Postal Code"
//               value={postalCode}
//               onChange={(e) => setPostalCode(e.target.value)}
//               className="border p-2 w-full rounded"
//               required
//             />
//             <input
//               type="text"
//               placeholder="Country"
//               value={country}
//               onChange={(e) => setCountry(e.target.value)}
//               className="border p-2 w-full rounded"
//               required
//             />

//             <h2 className="text-xl font-semibold mt-6">Payment Method</h2>
//             <select
//               value={paymentMethod}
//               onChange={(e) => setPaymentMethod(e.target.value)}
//               className="border p-2 w-full rounded"
//               required
//             >
//               <option value="Cash on Delivery">Cash on Delivery</option>
//               <option value="Online Payment">Online Payment</option>
//             </select>

//             {submitError && (
//               <div className="text-red-600 font-semibold">{submitError}</div>
//             )}

//             <button
//               type="submit"
//               disabled={submitting}
//               className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 w-full"
//             >
//               {submitting ? "Placing Order..." : "Place Order"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }


// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "../axios/axios"; // your axios instance
// import { useCart } from "../context/CartContext";

// export default function ProductPage() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { dispatch } = useCart();

//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   // Shipping details state
//   const [fullName, setFullName] = useState("");
//   const [address, setAddress] = useState("");
//   const [city, setCity] = useState("");
//   const [postalCode, setPostalCode] = useState("");
//   const [country, setCountry] = useState("");

//   // Payment method state
//   const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");

//   const [submitError, setSubmitError] = useState("");
//   const [submitting, setSubmitting] = useState(false);

//   // For simplicity, quantity fixed as 1 here; can be enhanced
//   const quantity = 1;
//   const shippingCharge = 50; // flat shipping fee example

//   useEffect(() => {
//     async function fetchProduct() {
//       try {
//         const { data } = await axios.get(`/products/${id}`);
//         setProduct(data);
//       } catch (err) {
//         setError("Product not found.");
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchProduct();
//   }, [id]);

//   const handleAddToCart = () => {
//     dispatch({
//       type: "ADD_TO_CART",
//       payload: { ...product, qty: quantity },
//     });
//     alert("Added to cart!");
//   };

//   const handleOrderSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitError("");

//     // Validate required fields
//     if (!fullName || !address || !city || !postalCode || !country) {
//       setSubmitError("Please fill in all shipping details.");
//       return;
//     }
//     if (!paymentMethod) {
//       setSubmitError("Please select a payment method.");
//       return;
//     }

//     const token = localStorage.getItem("authToken");
//     if (!token) {
//       alert("Please login first");
//       navigate("/login");
//       return;
//     }

//     // If online payment selected, redirect to payment page
//     if (paymentMethod === "Online Payment") {
//       // Save order details temporarily in localStorage or context to complete after payment
//       const orderData = {
//         orderItems: [
//           {
//             product: product._id,
//             name: product.name,
//             quantity,
//             price: product.price,
//             image: product.image,
//           },
//         ],
//         shippingAddress: {
//           fullName,
//           address,
//           city,
//           postalCode,
//           country,
//         },
//         paymentMethod,
//         totalPrice: product.price * quantity + shippingCharge,
//       };

//       localStorage.setItem("pendingOrder", JSON.stringify(orderData));
//       navigate("/paymentpage"); // redirect to your payment page
//       return;
//     }

//     // For Cash on Delivery, place order directly
//     setSubmitting(true);
//     try {
//       const orderData = {
//         orderItems: [
//           {
//             product: product._id,
//             name: product.name,
//             quantity,
//             price: product.price,
//             image: product.image,
//           },
//         ],
//         shippingAddress: {
//           fullName,
//           address,
//           city,
//           postalCode,
//           country,
//         },
//         paymentMethod,
//         totalPrice: product.price * quantity + shippingCharge,
//       };

//       await axios.post("/orders", orderData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       alert("Order placed successfully!");
//       navigate("/orderconfirmation"); // or wherever you want
//     } catch (err) {
//       setSubmitError(
//         err.response?.data?.message || "Failed to place order. Try again."
//       );
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   if (loading) return <div className="text-center mt-10">Loading...</div>;
//   if (error)
//     return (
//       <div className="text-center mt-10 text-red-500 font-bold">{error}</div>
//     );

//   const imageUrl = product.image?.startsWith("http")
//     ? product.image
//     : `http://localhost:5000${product.image}`;

//   const subtotal = product.price * quantity;
//   const total = subtotal + shippingCharge;

//   return (
//     <div className="max-w-6xl mx-auto mt-10 p-6 bg-white rounded shadow">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//         {/* Product Image */}
//         <img
//           src={imageUrl}
//           alt={product.name}
//           className="w-full h-[400px] object-contain border rounded"
//         />

//         {/* Product & Order Form */}
//         <div className="space-y-6">
//           <div>
//             <h1 className="text-3xl font-bold">{product.name}</h1>
//             <p className="mt-2">{product.description}</p>
//             <p className="text-2xl text-blue-600 font-semibold mt-4">
//               ₹{product.price}
//             </p>

//             <div className="flex gap-4 mt-4">
//               <button
//                 onClick={handleAddToCart}
//                 className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
//               >
//                 🛒 Add to Cart
//               </button>
//             </div>
//           </div>

//           {/* Order Form */}
//           <form onSubmit={handleOrderSubmit} className="space-y-4">
//             <h2 className="text-xl font-semibold">Shipping Details</h2>
//             <input
//               type="text"
//               placeholder="Full Name"
//               value={fullName}
//               onChange={(e) => setFullName(e.target.value)}
//               className="border p-2 w-full rounded"
//               required
//             />
//             <input
//               type="text"
//               placeholder="Address"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               className="border p-2 w-full rounded"
//               required
//             />
//             <input
//               type="text"
//               placeholder="City"
//               value={city}
//               onChange={(e) => setCity(e.target.value)}
//               className="border p-2 w-full rounded"
//               required
//             />
//             <input
//               type="text"
//               placeholder="Postal Code"
//               value={postalCode}
//               onChange={(e) => setPostalCode(e.target.value)}
//               className="border p-2 w-full rounded"
//               required
//             />
//             <input
//               type="text"
//               placeholder="Country"
//               value={country}
//               onChange={(e) => setCountry(e.target.value)}
//               className="border p-2 w-full rounded"
//               required
//             />

//             <h2 className="text-xl font-semibold mt-6">Payment Method</h2>
//             <select
//               value={paymentMethod}
//               onChange={(e) => setPaymentMethod(e.target.value)}
//               className="border p-2 w-full rounded"
//               required
//             >
//               <option value="Cash on Delivery">Cash on Delivery</option>
//               <option value="Online Payment">Online Payment</option>
//             </select>

//             {/* Order Summary */}
//             <div className="border-t pt-4 mt-4">
//               <p>Subtotal: ₹{subtotal}</p>
//               <p>Shipping: ₹{shippingCharge}</p>
//               <p className="font-semibold text-lg">Total: ₹{total}</p>
//             </div>

//             {submitError && (
//               <div className="text-red-600 font-semibold">{submitError}</div>
//             )}

//             <button
//               type="submit"
//               disabled={submitting}
//               className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 w-full"
//             >
//               {submitting ? "Placing Order..." : "Place Order"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "../axios/axios"; // your axios instance

// export default function ProductPage() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   // Shipping details
//   const [fullName, setFullName] = useState("");
//   const [address, setAddress] = useState("");
//   const [city, setCity] = useState("");
//   const [postalCode, setPostalCode] = useState("");
//   const [country, setCountry] = useState("");

//   const [submitError, setSubmitError] = useState("");
//   const [submitting, setSubmitting] = useState(false);

//   useEffect(() => {
//     async function fetchProduct() {
//       try {
//         const { data } = await axios.get(`/products/${id}`);
//         setProduct(data);
//       } catch (err) {
//         setError("Product not found.");
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchProduct();
//   }, [id]);

//   const handleBuyNow = async (e) => {
//     e.preventDefault();
//     setSubmitError("");

//     // Validation
//     if (!fullName || !address || !city || !postalCode || !country) {
//       setSubmitError("Please fill in all shipping details.");
//       return;
//     }

//     const token = localStorage.getItem("authToken");
//     if (!token) {
//       alert("Please login first");
//       navigate("/login");
//       return;
//     }

//     setSubmitting(true);

//     try {
//       // Call your backend to create Stripe checkout session
//       const response = await axios.post(
//         "/create-checkout-session",
//         {
//           productId: product._id,
//           quantity: 1,
//           shippingAddress: { fullName, address, city, postalCode, country },
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       // Redirect to Stripe Checkout
//       window.location.href = response.data.url; // URL from backend Stripe session

//     } catch (err) {
//       setSubmitError(
//         err.response?.data?.message || "Failed to initiate payment. Try again."
//       );
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div className="text-red-500">{error}</div>;

//   const imageUrl = product.image?.startsWith("http")
//     ? product.image
//     : `http://localhost:5000${product.image}`;

//   return (
//     <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded shadow">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <img
//           src={imageUrl}
//           alt={product.name}
//           className="w-full h-[400px] object-contain rounded border"
//         />

//         <div>
//           <h1 className="text-3xl font-bold">{product.name}</h1>
//           <p className="mt-3">{product.description}</p>
//           <p className="mt-4 text-2xl font-semibold text-blue-600">₹{product.price}</p>

//           <form onSubmit={handleBuyNow} className="mt-6 space-y-4">
//             <h2 className="text-xl font-semibold">Shipping Details</h2>
//             <input
//               type="text"
//               placeholder="Full Name"
//               value={fullName}
//               onChange={(e) => setFullName(e.target.value)}
//               className="border p-2 rounded w-full"
//               required
//             />
//             <input
//               type="text"
//               placeholder="Address"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               className="border p-2 rounded w-full"
//               required
//             />
//             <input
//               type="text"
//               placeholder="City"
//               value={city}
//               onChange={(e) => setCity(e.target.value)}
//               className="border p-2 rounded w-full"
//               required
//             />
//             <input
//               type="text"
//               placeholder="Postal Code"
//               value={postalCode}
//               onChange={(e) => setPostalCode(e.target.value)}
//               className="border p-2 rounded w-full"
//               required
//             />
//             <input
//               type="text"
//               placeholder="Country"
//               value={country}
//               onChange={(e) => setCountry(e.target.value)}
//               className="border p-2 rounded w-full"
//               required
//             />

//             {submitError && (
//               <div className="text-red-600 font-semibold">{submitError}</div>
//             )}

//             <button
//               type="submit"
//               disabled={submitting}
//               className="bg-blue-600 hover:bg-blue-700 text-white rounded px-6 py-3 w-full"
//             >
//               {submitting ? "Processing..." : "Buy Now"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../axios/axios";

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Shipping details
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");

  const [submitError, setSubmitError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const { data } = await axios.get(`/products/${id}`);
        setProduct(data);
      } catch {
        setError("Product not found.");
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  const handleBuyNow = async (e) => {
    e.preventDefault();
    setSubmitError("");

    if (!fullName || !address || !city || !postalCode || !country) {
      setSubmitError("Please fill in all shipping details.");
      return;
    }

    const token = localStorage.getItem("authToken");
    if (!token) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    setSubmitting(true);
    try {
      const response = await axios.post(
        "/create-checkout-session",
        {
          productId: product._id,
          quantity: 1,
          shippingAddress: { fullName, address, city, postalCode, country },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Redirect to Stripe Checkout session
      window.location.href = response.data.url;
    } catch (err) {
      setSubmitError(
        err.response?.data?.error || "Failed to initiate payment. Try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  const imageUrl = product.image?.startsWith("http")
    ? product.image
    : `http://localhost:5000${product.image}`;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img
          src={imageUrl}
          alt={product.name}
          className="w-full h-[400px] object-contain rounded border"
        />

        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="mt-3">{product.description}</p>
          <p className="mt-4 text-2xl font-semibold text-blue-600">₹{product.price}</p>

          <form onSubmit={handleBuyNow} className="mt-6 space-y-4">
            <h2 className="text-xl font-semibold">Shipping Details</h2>
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="border p-2 rounded w-full"
              required
            />
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="border p-2 rounded w-full"
              required
            />
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="border p-2 rounded w-full"
              required
            />
            <input
              type="text"
              placeholder="Postal Code"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              className="border p-2 rounded w-full"
              required
            />
            <input
              type="text"
              placeholder="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="border p-2 rounded w-full"
              required
            />

            {submitError && (
              <div className="text-red-600 font-semibold">{submitError}</div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded px-6 py-3 w-full"
            >
              {submitting ? "Processing..." : "Buy Now"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
