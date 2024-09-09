'use client'

import React from 'react';
import Image from 'next/image';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface TestimonialProps {
  name: string;
  photo: string;
  story: string;
  rating?: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, photo, story, rating }) => {
  return (
    <motion.div
      className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg p-6 shadow-xl transition-all duration-300 hover:shadow-2xl"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center mb-4">
        <Image src={photo} alt={name} width={80} height={80} className="rounded-full mr-4 border-2 border-blue-500" />
        <h3 className="text-xl font-semibold text-white">{name}</h3>
      </div>
      <p className="text-gray-300 mb-4 italic">&ldquo;{story}&rdquo;</p>
      {rating && (
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, index) => {
            const ratingValue = index + 1;
            return (
              <span key={index} className="mr-1">
                {ratingValue <= rating ? (
                  <FaStar />
                ) : ratingValue - 0.5 <= rating ? (
                  <FaStarHalfAlt />
                ) : (
                  <FaRegStar />
                )}
              </span>
            );
          })}
        </div>
      )}
    </motion.div>
  );
};

const TestimonialSection: React.FC = () => {
  const testimonials = [
    { name: 'John Doe', photo: '/john-doe.jpg', story: 'Heaven2Hell transformed my fitness journey. The personalized plans and cutting-edge AI guidance helped me achieve results I never thought possible!', rating: 5 },
    { name: 'Jane Smith', photo: '/jane-smith.jpg', story: 'The expert coaching and diverse workout options keep me motivated and excited about fitness. It\'s more than an app, it\'s a lifestyle change!', rating: 4.5 },
    { name: 'Mike Johnson', photo: '/mike-johnson.jpg', story: 'I\'ve tried many fitness apps, but Heaven2Hell stands out with its flexible programs and top-notch meal planning. It\'s become an essential part of my daily routine.', rating: 5 },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600"
        >
          Success Stories
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;