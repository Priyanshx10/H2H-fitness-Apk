'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Demo = () => {
  const demoVideos = [
    {
      title: "AI-Powered Workout Planning",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "See how our AI creates personalized workout plans tailored to your goals and fitness level."
    },
    {
      title: "Personalized Meal Planning",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Discover how our system generates custom meal plans based on your dietary preferences and nutritional needs."
    },
    {
      title: "Progress Tracking Demo",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Learn how to easily track your fitness journey and visualize your progress over time."
    }
  ]

  return (
    <section id="demo" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
        >
          Experience Heaven2Hell in Action
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {demoVideos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={video.url}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full object-cover"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-purple-300">{video.title}</h3>
                <p className="text-gray-300">{video.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Demo