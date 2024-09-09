import React from 'react';
import Image from 'next/image';

interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  date: string;
}

const BlogSection: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      title: "The Science Behind Effective Workouts",
      excerpt: "Discover the latest research on optimizing your fitness routine for maximum results.",
      image: "/blog/workout-science.jpg",
      date: "May 15, 2023"
    },
    {
      title: "Nutrition Tips for Muscle Growth",
      excerpt: "Learn about the best foods and supplements to support your muscle-building goals.",
      image: "/blog/nutrition-tips.jpg",
      date: "May 10, 2023"
    },
    {
      title: "Mindfulness and Fitness: A Powerful Combination",
      excerpt: "Explore how incorporating mindfulness into your workout can enhance your overall well-being.",
      image: "/blog/mindfulness-fitness.jpg",
      date: "May 5, 2023"
    }
  ];

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Latest from Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
              <Image src={post.image} alt={post.title} width={400} height={250} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">{post.date}</span>
                  <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;