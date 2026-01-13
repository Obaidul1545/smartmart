import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white text-center py-4 mt-10">
        <p>© {new Date().getFullYear()} SmartMart. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
