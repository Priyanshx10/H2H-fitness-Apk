'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVideoLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
        onLoadedData={() => setIsVideoLoaded(true)}
      >
        <source src="/home-workout.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVideoLoaded ? 1 : 0, y: isVideoLoaded ? 0 : 20 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 sm:px-6 lg:px-8"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-center leading-tight">
          Transform Your Fitness Journey with AI-Powered Home Workouts and Meal Planning
        </h1>
        <p className="text-xl sm:text-2xl mb-8 text-center max-w-3xl">
          Your all-in-one solution for personalized workouts, nutrition guidance, and progress tracking
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/free-trial" className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 inline-block">
              Start Your Free Trial
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/demo" className="bg-transparent border-2 border-purple-300 hover:bg-purple-300 hover:text-purple-900 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 inline-block">
              See How It Works
            </Link>
          </motion.div>
        </div>
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVideoLoaded ? 1 : 0, y: isVideoLoaded ? 0 : 20 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="mt-12 text-lg italic max-w-2xl text-center"
        >
          &ldquo;Heaven2Hell&apos;s AI-powered workouts have completely transformed my fitness routine. I&apos;ve never felt stronger or more motivated!&rdquo;
          <footer className="mt-2 text-sm">- Sarah J., Fitness Enthusiast</footer>
        </motion.blockquote>
      </motion.div>
    </div>
  );
};

export default Hero;