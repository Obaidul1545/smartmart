'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const isAuth = document.cookie
      .split('; ')
      .find((row) => row.startsWith('smartmart_auth='))
      ?.split('=')[1];

    setIsLoggedIn(isAuth === 'true');
  }, [pathname]);

  const handleLogout = () => {
    // cookie remove
    document.cookie = 'smartmart_auth=; path=/; ';

    setIsLoggedIn(false);
    router.push('/login');
  };

  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-gray-900 text-white ">
      <h1 className="text-xl font-bold">SmartMart</h1>

      <div className="space-x-6">
        <Link href="/">Home</Link>
        <Link href="/items">Products</Link>
        <Link href="/add-item">Add Product</Link>
        {!isLoggedIn ? (
          <>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="text-red-400 hover:text-red-500 cursor-pointer"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
