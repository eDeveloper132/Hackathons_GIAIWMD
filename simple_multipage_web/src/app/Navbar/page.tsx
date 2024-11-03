'use client';
// components/Navbar.js
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md shadow-violet-400">
      <div className="container mx-auto px-4">
        <div className="flex py-4 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            MyBrand
          </Link>

          {/* Links (aligned to the right) */}
          <div className="hidden md:flex md:gap-20 ml-auto mr-20">
            <Link href="/" className="text-gray-600 hover:text-blue-600 transition duration-300">Home</Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition duration-300">About</Link>
            <Link href="/services" className="text-gray-600 hover:text-blue-600 transition duration-300">Services</Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition duration-300">Contact</Link>
          </div>

          {/* Hamburger Menu for mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <Link href="/" className="block px-4 py-2 text-gray-600 hover:bg-blue-600 hover:text-white">Home</Link>
            <Link href="/about" className="block px-4 py-2 text-gray-600 hover:bg-blue-600 hover:text-white">About</Link>
            <Link href="/services" className="block px-4 py-2 text-gray-600 hover:bg-blue-600 hover:text-white">Services</Link>
            <Link href="/contact" className="block px-4 py-2 text-gray-600 hover:bg-blue-600 hover:text-white">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
