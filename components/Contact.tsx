'use client'

import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: { target: { name: unknown; value: unknown; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name as string]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600"
        >
          Get In Touch
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 rounded-md focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 rounded-md focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 rounded-md focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  rows={4}
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-md transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full md:w-1/2 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-500">Contact Information</h3>
              <p className="mb-2">123 Fitness Street, Gym City, GC 12345</p>
              <p className="mb-2">Phone: (123) 456-7890</p>
              <p className="mb-4">Email: info@heaven2hellgym.com</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-500">Follow Us</h3>
              <div className="flex space-x-6">
                <motion.a
                  href="#"
                  className="text-3xl hover:text-blue-500 transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  <FaFacebook />
                </motion.a>
                <motion.a
                  href="#"
                  className="text-3xl hover:text-blue-500 transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  <FaTwitter />
                </motion.a>
                <motion.a
                  href="#"
                  className="text-3xl hover:text-blue-500 transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  <FaInstagram />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;