'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const demoAccounts = [
  {
    label: 'Admin',
    email: 'admin@gmail.com',
    password: 'admin123',
  },
];

const LoginPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const redirectTo = searchParams.get('redirect') || '/';

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'admin@gmail.com' && password === 'admin123') {
      // cookie set
      document.cookie = 'smartmart_auth=true; path=/';
      router.push(redirectTo);
      toast.success('Login successful!');
    } else {
      toast.error('Invalid email or password');
    }
  };

  const handleDemoSelect = (e) => {
    const selected = demoAccounts.find((acc) => acc.label === e.target.value);
    if (selected) {
      setEmail(selected.email);
      setPassword(selected.password);
    }
  };
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 shadow-md w-96">
          <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
          <form onSubmit={handleLogin}>
            <input
              required
              type="email"
              value={email}
              placeholder="Email"
              className="border p-2 w-full mb-4"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              required
              type="password"
              value={password}
              placeholder="Password"
              className="border p-2 w-full mb-4"
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className="text-sm text-red-600">{error}</p>}

            <button
              type="submit"
              className="bg-gray-900 text-white w-full py-2"
            >
              Login
            </button>
          </form>

          <select
            onChange={handleDemoSelect}
            className="border p-2 w-full my-4 bg-gray-50"
            defaultValue=""
          >
            <option value="" disabled>
              Login Demo Account
            </option>
            {demoAccounts.map((acc) => (
              <option key={acc.label} value={acc.label}>
                {acc.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
