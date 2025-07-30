import React, { useEffect, useState } from 'react';
import axios from '../../axios/axios';
import { Link, useNavigate } from 'react-router-dom';

export default function AdminProductList() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem('authToken');

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/products');
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;

    try {
      await axios.delete(`/products/${id}`, {
        headers: {
    Authorization: `Bearer ${localStorage.getItem('authToken')}`
  }
      });
      setProducts(products.filter(p => p._id !== id));
      alert('Product deleted');
    } catch (err) {
      alert(err.response?.data?.message || 'Delete failed');
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Product List</h1>
      <div className="overflow-x-auto">
        <table className="w-full border text-sm rounded shadow">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Image</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-center">Price</th>
              <th className="p-3 text-center">Stock</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product._id} className="border-t hover:bg-gray-50">
                <td className="p-2">
                  <img src={product.image} alt={product.name} className="h-12 w-12 object-cover rounded" />
                </td>
                <td className="p-2">{product.name}</td>
                <td className="p-2 text-center">₹{product.price}</td>
                <td className="p-2 text-center">{product.countInStock}</td>
                <td className="p-2 text-center space-x-2">
                  <Link to={`/admin/product/${product._id}/edit`} className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">Edit</Link>
                  <button onClick={() => handleDelete(product._id)} className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
