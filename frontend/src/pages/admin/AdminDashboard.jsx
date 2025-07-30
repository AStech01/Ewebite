// src/pages/admin/AdminDashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line,
} from 'recharts';

const salesData = [
  { month: 'Jan', sales: 4000 },
  { month: 'Feb', sales: 3000 },
  { month: 'Mar', sales: 5000 },
  { month: 'Apr', sales: 7000 },
  { month: 'May', sales: 6000 },
  { month: 'Jun', sales: 8000 },
];

export default function AdminDashboard() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">📊 Admin Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-2xl shadow p-6 text-center">
          <p className="text-lg text-gray-600">Total Products</p>
          <h2 className="text-2xl font-bold text-indigo-600">120</h2>
        </div>
        <div className="bg-white rounded-2xl shadow p-6 text-center">
          <p className="text-lg text-gray-600">Total Orders</p>
          <h2 className="text-2xl font-bold text-green-600">350</h2>
        </div>
        <div className="bg-white rounded-2xl shadow p-6 text-center">
          <p className="text-lg text-gray-600">Total Users</p>
          <h2 className="text-2xl font-bold text-yellow-600">80</h2>
        </div>
        <div className="bg-white rounded-2xl shadow p-6 text-center">
          <p className="text-lg text-gray-600">Total Revenue</p>
          <h2 className="text-2xl font-bold text-pink-600">₹1,20,000</h2>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        {/* Bar Chart */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">Monthly Sales</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#4F46E5" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">Order Trends</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="sales" stroke="#10B981" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link
          to="/admin/add-product"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-2xl shadow text-center"
        >
          ➕ Add Product
        </Link>

        <Link
          to="/admin/products"
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-4 px-6 rounded-2xl shadow text-center"
        >
          📦 View Products
        </Link>

        <Link
          to="/admin/orders"
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-4 px-6 rounded-2xl shadow text-center"
        >
          📋 Manage Orders
        </Link>
      </div>
    </div>
  );
}
