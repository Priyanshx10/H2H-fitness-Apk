import React from 'react';
import Image from 'next/image';

const Gallery = () => {
  const images = [
    { src: '/gym-floor.jpg', caption: 'Our spacious gym floor with state-of-the-art equipment' },
    { src: '/yoga-class.jpg', caption: 'Relaxing yoga classes for all levels' },
    { src: '/weight-room.jpg', caption: 'Fully equipped weight room for strength training' },
    { src: '/cardio-area.jpg', caption: 'Cardio area with a view of the city' },
    { src: '/pool.jpg', caption: 'Olympic-sized swimming pool for aquatic workouts' },
    { src: '/group-class.jpg', caption: 'Energetic group fitness classes' },
  ];

  return (
    <section className="py-16 bg-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-purple-300">Our Gym in Action</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="relative">
              <Image
                src={image.src}
                alt={image.caption}
                width={400}
                height={300}
                className="rounded-lg object-cover w-full h-64 border-2 border-purple-500"
              />
              <p className="mt-2 text-sm text-purple-200">{image.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;