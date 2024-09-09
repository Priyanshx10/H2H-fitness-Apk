'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-indigo-900/95 shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="Heaven2Hell Logo" width={40} height={40} />
          <span className="ml-2 text-xl font-bold text-white">Heaven2Hell</span>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link href="/" className="text-white hover:text-purple-300 transition-colors">Home</Link></li>
            <li><Link href="#features" className="text-white hover:text-purple-300 transition-colors">Features</Link></li>
            <li><Link href="#demo" className="text-white hover:text-purple-300 transition-colors">Demo</Link></li>
            <li><Link href="#testimonials" className="text-white hover:text-purple-300 transition-colors">Testimonials</Link></li>
            <li><Link href="#pricing" className="text-white hover:text-purple-300 transition-colors">Pricing</Link></li>
            <li><Link href="#blog" className="text-white hover:text-purple-300 transition-colors">Blog</Link></li>
            <li><Link href="#contact" className="text-white hover:text-purple-300 transition-colors">Contact</Link></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="hidden md:block bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition-colors">
            Get Started
          </button>
          <button className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;