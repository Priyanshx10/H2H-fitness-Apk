'use client'

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <motion.div
      className="bg-indigo-900 p-6 rounded-lg text-center h-full flex flex-col justify-between"
      whileHover={{ scale: 1.05, backgroundColor: '#4338ca' }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Image src={icon} alt={title} width={64} height={64} className="mx-auto mb-4" />
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-indigo-200">{description}</p>
    </motion.div>
  );
};

const Features: React.FC = () => {
  const featureList: FeatureProps[] = [
    {
      icon: '/icons/home-workout.svg',
      title: 'Home Workouts',
      description: 'Tailored workout plans for every fitness level, right in your living room.',
    },
    {
      icon: '/icons/meal-planning.svg',
      title: 'Meal Planning',
      description: 'Custom meal plans and recipes to fit your unique dietary needs and preferences.',
    },
    {
      icon: '/icons/ai-guidance.svg',
      title: 'AI Guidance',
      description: 'Intelligent workout and nutrition recommendations powered by cutting-edge AI.',
    },
    {
      icon: '/icons/online-coaching.svg',
      title: 'Online Coaching',
      description: 'Access to certified trainers for personalized guidance and motivation.',
    },
  ];

  return (
    <section id="features" className="py-16 bg-indigo-950">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center text-white"
        >
          All-In-One Fitness Solution
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureList.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Feature {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;