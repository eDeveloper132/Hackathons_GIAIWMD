'use client';
import { useState, useEffect } from 'react';

const Carousel = () => {
  const slides = [
    {
      id: 1,
      image: 'https://plus.unsplash.com/premium_photo-1663090479956-99a5dc47334f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGVkdWNhdGlvbnxlbnwwfDB8MHx8fDE%3D',
    },
    {
      id: 2,
      image: 'https://plus.unsplash.com/premium_photo-1681842163457-26303db2ef5c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fGVkdWNhdGlvbnxlbnwwfDB8MHx8fDE%3D',
    },
    {
      id: 3,
      image: 'https://plus.unsplash.com/premium_photo-1676998931123-75789162f170?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWR1Y2F0aW9ufGVufDB8MHwwfHx8MQ%3D%3D',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clean up on component unmount
  }, [slides.length]);

  return (
    <div className="relative w-full mt-8 overflow-hidden rounded-lg shadow-md shadow-green-600 px-12">
      {/* Slide Image */}
      <div className="w-full flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide) => (
          <div key={slide.id} className="mx-auto w-full flex-shrink-0 shadow-lg shadow-violet-400">
            <img src={slide.image} alt={`Slide ${slide.id}`} className="w-full h-fit object-cover" />
          </div>
        ))}
      </div>

      {/* Prev and Next Buttons */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-gray-600"
      >
        &#9664;
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-gray-600"
      >
        &#9654;
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 w-full flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
