// import React, { useState } from 'react';
// import axios from '../../axios/axios';
// import { useNavigate } from 'react-router-dom';

// export default function AddProductPage() {
//   const [name, setName] = useState('');
//   const [price, setPrice] = useState('');
//   const [category, setCategory] = useState('');
//   const [brand, setBrand] = useState('');
//   const [countInStock, setCountInStock] = useState('');
//   const [description, setDescription] = useState('');
//   const [image, setImage] = useState('');
//   const [uploading, setUploading] = useState(false);
//   const navigate = useNavigate();

//   const handleImageUpload = async (e) => {
//     const file = e.target.files[0];
//     const formData = new FormData();
//     formData.append('image', file);
//     setUploading(true);

//     try {
//       const token = localStorage.getItem('authToken');
//       const { data } = await axios.post('/uploads', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setImage(data.imageUrl);
//     } catch (error) {
//       alert('Image upload failed');
//     } finally {
//       setUploading(false);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem('authToken');

//     if (!token) {
//       alert('No token found. Please login as admin.');
//       return;
//     }

//     try {
//       await axios.post(
//         '/products',
//         {
//           name,
//           price,
//           category,
//           brand,
//           countInStock,
//           description,
//           image,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       alert('Product added!');
//       navigate('/admin/dashboard');
//     } catch (error) {
//       alert(error.response?.data?.message || 'Error adding product');
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-8 bg-white shadow-md rounded-2xl mt-10">
//       <h2 className="text-3xl font-semibold text-gray-800 mb-8">Add New Product</h2>
//       <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
//         <input className="input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Product Name" required />
//         <input className="input" type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" required />
//         <input className="input" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" required />
//         <input className="input" value={brand} onChange={(e) => setBrand(e.target.value)} placeholder="Brand" required />
//         <input className="input" type="number" value={countInStock} onChange={(e) => setCountInStock(e.target.value)} placeholder="Stock" required />
        
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">Upload Image</label>
//           <input type="file" onChange={handleImageUpload} className="w-full border p-2 rounded" />
//           {uploading && <p className="text-sm text-blue-500 mt-1">Uploading...</p>}
//           {image && (
//             <img src={image} alt="preview" className="mt-3 h-32 object-contain border rounded" />
//           )}
//         </div>

//         <textarea
//           className="input"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           placeholder="Product Description"
//           rows={4}
//         />

//         <button
//           type="submit"
//           className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200"
//         >
//           Add Product
//         </button>
//       </form>
//     </div>
//   );
// }

// === ProductFormPage.jsx (Admin - Add/Edit Product with Image Upload) ===

import React, { useEffect, useState } from 'react';
import axios from '../../axios/axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function ProductFormPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem('authToken');

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [countInStock, setCountInStock] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      if (id) {
        const { data } = await axios.get(`/products/${id}`);
        setName(data.name);
        setPrice(data.price);
        setCategory(data.category);
        setBrand(data.brand);
        setCountInStock(data.countInStock);
        setDescription(data.description);
        setImage(data.image);
      }
    };
    fetchProduct();
  }, [id]);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);
    setUploading(true);

    try {
      const { data } = await axios.post('/uploads', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });
      setImage(data.imageUrl);
    } catch {
      alert('Image upload failed');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productData = { name, price, category, brand, countInStock, description, image };

    try {
      if (id) {
        await axios.put(`/products/${id}`, productData, {
          headers: { Authorization: `Bearer ${token}` },
        });
        alert('Product updated!');
      } else {
        await axios.post('/products', productData, {
          headers: { Authorization: `Bearer ${token}` },
        });
        alert('Product added!');
      }
      navigate('/admin/dashboard');
    } catch (err) {
      alert(err.response?.data?.message || 'Error saving product');
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-md rounded-2xl mt-10">
      <h2 className="text-3xl font-semibold mb-8 text-gray-800">{id ? 'Edit Product' : 'Add New Product'}</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
        <input className="input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Product Name" required />
        <input className="input" type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" required />
        <input className="input" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" required />
        <input className="input" value={brand} onChange={(e) => setBrand(e.target.value)} placeholder="Brand" required />
        <input className="input" type="number" value={countInStock} onChange={(e) => setCountInStock(e.target.value)} placeholder="Stock" required />

        <div>
          <label className="block text-sm text-gray-700 mb-1">Upload Image</label>
          <input type="file" onChange={handleImageUpload} className="w-full border p-2 rounded" />
          {uploading && <p className="text-sm text-blue-500 mt-1">Uploading...</p>}
          {image && (
            <img
              src={image.startsWith('http') ? image : `http://localhost:5000${image}`}
              alt="preview"
              className="mt-3 h-32 object-contain border rounded"
            />
          )}
        </div>

        <textarea className="input" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Product Description" rows={4} />
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
          {id ? 'Update' : 'Add'} Product
        </button>
      </form>
    </div>
  );
}