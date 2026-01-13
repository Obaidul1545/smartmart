import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white">
      <h1 className="text-xl font-bold">SmartMart</h1>

      <div className="space-x-6">
        <Link href="/">Home</Link>
        <Link href="/items">Products</Link>
        <Link href="/add-item">Add Product</Link>
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
