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
      .find((row) => row.startsWith('auth='))
      ?.split('=')[1];

    setIsLoggedIn(isAuth === 'true');
  }, [pathname]);

  const handleLogout = () => {
    // cookie remove
    document.cookie = 'sauth=; path=/; ';

    setIsLoggedIn(false);
    router.push('/login');
  };

  return (
    <nav className=" bg-gray-900">
      <div className="container mx-auto flex justify-between items-center px-6 py-3  text-white ">
        <Link href={'/'} className="text-xl font-bold">
          SmartMart
        </Link>

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
      </div>
    </nav>
  );
};

export default Navbar;
