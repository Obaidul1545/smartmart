import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xl font-bold text-white mb-4">SmartMart</h4>
            <p className="text-sm">
              Your one-stop destination for modern, reliable, and affordable
              tech products. Browse, compare, and shop smarter.
            </p>
          </div>

          <div>
            <h5 className="font-semibold text-white mb-4">Quick Links</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/items" className="hover:text-white">
                  Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Copyright */}
          <div className="flex items-end">
            <p className="text-sm">
              © {new Date().getFullYear()} SmartMart. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
