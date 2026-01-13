'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === 'admin@gmail.com' && password === 'admin123') {
      // cookie set
      document.cookie = 'smartmart_auth=true; path=/';
      router.push('/items');
    } else {
      alert('Invalid email or password');
    }
  };
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 shadow-md w-96">
          <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>

          <input
            type="email"
            placeholder="Email"
            className="border p-2 w-full mb-4"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="border p-2 w-full mb-4"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleLogin}
            className="bg-gray-900 text-white w-full py-2"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
