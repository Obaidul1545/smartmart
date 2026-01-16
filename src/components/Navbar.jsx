'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { X, Menu } from 'lucide-react';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const isAuth = document.cookie
      .split('; ')
      .find((row) => row.startsWith('auth='))
      ?.split('=')[1];

    setIsLoggedIn(isAuth === 'true');
  }, [pathname]);

  const handleLogout = () => {
    // cookie remove
    document.cookie = 'auth=; path=/; ';

    setIsLoggedIn(false);
    router.push('/login');
  };

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-wide">
          SmartMart
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="hover:text-blue-500 transition">
            Home
          </Link>
          <Link href="/items" className="hover:text-blue-500 transition">
            Products
          </Link>
          <Link href="/add-item" className="hover:text-blue-500 transition">
            Add Product
          </Link>

          {!isLoggedIn ? (
            <>
              <Link href="/login" className="hover:text-blue-500 transition">
                Login
              </Link>
              <Link href="/register" className="hover:text-blue-500 transition">
                Register
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="text-red-400 hover:text-red-500 transition"
            >
              Logout
            </button>
          )}
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-900 px-6 pb-4 space-y-2">
          <Link href="/" className="block hover:text-blue-500 transition">
            Home
          </Link>
          <Link href="/items" className="block hover:text-blue-500 transition">
            Products
          </Link>
          <Link
            href="/add-item"
            className="block hover:text-blue-500 transition"
          >
            Add Product
          </Link>

          {!isLoggedIn ? (
            <>
              <Link
                href="/login"
                className="block hover:text-blue-500 transition"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="block hover:text-blue-500 transition"
              >
                Register
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="w-full text-left text-red-400 hover:text-red-500 transition"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
