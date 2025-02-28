"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className={`flex items-center ${isScrolled ? 'text-blue-600' : 'text-white'}`}>
              <Code2 className="h-8 w-8 mr-2" />
              <span className="text-xl font-bold">CodeMaster</span>
            </div>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Problems', 'Contests', 'Discuss', 'Learn', 'Pricing'].map((item, index) => (
              <motion.a
                key={item}
                href="#"
                className={`font-medium hover:text-blue-500 transition-colors ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:text-primary-600' 
                  : 'text-white hover:text-blue-200'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Log In
            </motion.button>
            <motion.button
                className={`px-4 py-2 rounded-lg font-medium ${
                  isScrolled 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-white text-primary-600 hover:bg-gray-100'
                } transition-colors`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sign Up
            </motion.button>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={isScrolled ? 'text-gray-700' : 'text-white'}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <motion.div 
          className="md:hidden bg-white shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 pt-2 pb-4 space-y-1">
            {['Problems', 'Contests', 'Discuss', 'Learn', 'Pricing'].map((item) => (
              <a
                key={item}
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              >
                {item}
              </a>
            ))}
            <div className="pt-4 flex flex-col space-y-2">
              <a
                href="#"
                className="px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              >
                Log In
              </a>
              <a
                href="#"
                className="px-3 py-2 rounded-md text-base font-medium bg-primary-600 text-white hover:bg-primary-700 text-center"
              >
                Sign Up
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;