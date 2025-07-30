import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

import Navbar from './components/Navbar';
import Banner from './components/Banner';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import PaymentPage from './pages/PaymentPage';
import OrderSuccess from './pages/OrderSuccess';
import OrdersPage from './pages/OrdersPage';

import AdminDashboard from './pages/admin/AdminDashboard';
import AddProductPage from './pages/admin/AddProductPage';
import AdminProductList from './pages/admin/AdminProductList';
import ProductFormPage from './pages/admin/ProductFormPage';
import AdminOrders from './pages/admin/AdminOrders';

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
         {/* <div className="min-h-screen bg-white text-white"> */}
        <Router>
          <Navbar />
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/paymentpage" element={<PaymentPage />} />
            <Route path="/ordersuccess" element={<OrderSuccess />} />
            <Route path="/paymentfailed" element={<div>Payment failed. Please try again.</div>} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/banner" element={<Banner />} />

            {/* Admin Routes */}
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/add-product" element={<AddProductPage />} />
            <Route path="/admin/products" element={<AdminProductList />} />
            <Route path="/admin/product/:id/edit" element={<ProductFormPage />} />
            <Route path="/admin/orders" element={<AdminOrders />} />
          </Routes>
        </Router>
        {/* </div> */}
      </CartProvider>
    </AuthProvider>
  );
}
