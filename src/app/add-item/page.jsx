'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const AddProductpage = () => {
  const router = useRouter();

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProduct = {
      name,
      price,
      description,
      image,
    };
    const res = await fetch(`/api/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    });

    if (res.ok) {
      toast.success('Product added successfully!');
      router.push('/items');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Add New Product</h2>

        <input
          type="text"
          placeholder="Product Name"
          className="border p-2 w-full mb-3"
          required
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          className="border p-2 w-full mb-3"
          required
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          type="text"
          placeholder="Image URL"
          className="border p-2 w-full mb-3"
          required
          onChange={(e) => setImage(e.target.value)}
        />

        <textarea
          placeholder="Description"
          className="border p-2 w-full mb-4"
          required
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          type="submit"
          className="bg-gray-900 text-white w-full py-2 cursor-pointer"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProductpage;
