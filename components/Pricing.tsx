'use client'

import React, { useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Pricing = () => {
  const [billingInterval, setBillingInterval] = useState('monthly');

  const plans = [
    {
      name: 'Basic',
      monthlyPrice: '$9.99',
      yearlyPrice: '$99.99',
      benefits: ['AI-powered workout plans', 'Basic meal suggestions', 'Progress tracking'],
      features: [true, true, true, false, false],
    },
    {
      name: 'Pro',
      monthlyPrice: '$19.99',
      yearlyPrice: '$199.99',
      benefits: ['All Basic features', 'Advanced meal planning', 'Live chat support', 'Workout video library'],
      features: [true, true, true, true, false],
    },
    {
      name: 'Elite',
      monthlyPrice: '$49.99',
      yearlyPrice: '$499.99',
      benefits: ['All Pro features', 'Personal coach consultations', 'Custom workout videos', 'Nutrition counseling'],
      features: [true, true, true, true, true],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600"
        >
          Flexible Pricing Plans
        </motion.h2>

        <div className="flex justify-center mb-12">
          <div className="bg-gray-800 p-1 rounded-full">
            <button
              className={`px-4 py-2 rounded-full ${
                billingInterval === 'monthly' ? 'bg-indigo-600' : 'text-gray-400'
              }`}
              onClick={() => setBillingInterval('monthly')}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-2 rounded-full ${
                billingInterval === 'yearly' ? 'bg-indigo-600' : 'text-gray-400'
              }`}
              onClick={() => setBillingInterval('yearly')}
            >
              Yearly
            </button>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-800 rounded-lg p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-2">
                {billingInterval === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
              </p>
              <p className="text-gray-400 mb-6">
                {billingInterval === 'monthly' ? 'per month' : 'per year'}
              </p>
              <ul className="mb-8 space-y-2">
                {plan.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-bold py-3 px-4 rounded-md transition-all duration-300 mb-4"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-transparent border border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-4 rounded-md transition-all duration-300"
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-semibold mb-8 text-center">Plan Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-800">
                  <th className="p-3 text-left">Features</th>
                  {plans.map((plan, index) => (
                    <th key={index} className="p-3 text-center">{plan.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {['AI Workouts', 'Meal Planning', 'Progress Tracking', 'Live Support', 'Personal Coaching'].map((feature, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-700'}>
                    <td className="p-3">{feature}</td>
                    {plans.map((plan, planIndex) => (
                      <td key={planIndex} className="p-3 text-center">
                        {plan.features[index] ? (
                          <FaCheck className="text-green-500 mx-auto" />
                        ) : (
                          <FaTimes className="text-red-500 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;