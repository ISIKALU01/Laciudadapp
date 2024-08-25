import React from 'react';
import { useRef, useState } from "react";
import Image from 'next/image'
import { register } from "swiper/element/bundle";
register();


const images = [
  {
    src: '/slowLagosImages (1).jpg',
    alt: 'Image 1',
  },
  {
    src: '/slowLagosImages (2).jpg',
    alt: 'Image 1',
  },
  {
    src: '/slowLagosImages (3).jpg',
    alt: 'Image 1',
  },
  {
    src: '/slowLagosImages (4).jpg',
    alt: 'Image 1',
  },
  {
    src: '/slowLagosImages (5).jpg',
    alt: 'Image 1',
  },
  {
    src: '/slowLagosImages (6).jpg',
    alt: 'Image 1',
  },
  {
    src: '/slowLagosImages (7).jpg',
    alt: 'Image 1',
  },
  {
    src: '/slowLagosImages (8).jpg',
    alt: 'Image 1',
  },
  {
    src: '/slowLagosImages (9).jpg',
    alt: 'Image 1',
  },
  {
    src: '/slowLagosImages (10).jpg',
    alt: 'Image 1',
  },
  {
    src: '/slowLagosImages (11).jpg',
    alt: 'Image 1',
  },
  {
    src: '/slowLagosImages (12).jpg',
    alt: 'Image 1',
  },
  {
    src: '/slowLagosImages (13).jpg',
    alt: 'Image 1',
  },
  {
    src: '/slowLagosImages (15).jpg',
    alt: 'Image 1',
  },
  {
    src: '/slowLagosImages (16).jpg',
    alt: 'Image 1',
  },
  {
    src: '/slowLagosImages (17).jpg',
    alt: 'Image 1',
  },
 
];

const ImageGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);


  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-5xl">
        <div className="relative h-96 overflow-hidden rounded-lg">
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-100">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-500 border-t-transparent"></div>
          </div>
          <Image
            src={images[selectedIndex].src}
            alt="Gallery"
            width={2000}
            height={1500}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out"
            priority
          />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between px-4">
            <button
              className="bg-white rounded-full p-2 shadow-md hover:bg-gray-200 transition-colors duration-300 ease-in-out"
              onClick={() => handleClick((selectedIndex - 1 + images.length) % images.length)}
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              className="bg-white rounded-full p-2 shadow-md hover:bg-gray-200 transition-colors duration-300 ease-in-out"
              onClick={() => handleClick((selectedIndex + 1) % images.length)}
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-full mx-2 ${
                index === selectedIndex
                  ? 'bg-gray-800'
                  : 'bg-gray-300 hover:bg-gray-500 transition-colors duration-300 ease-in-out'
              }`}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )

  
 }
export default ImageGallery;