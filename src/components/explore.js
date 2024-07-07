import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {useState} from 'react';
import Link from 'next/link'




const ExploreSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const exploreImages = [
    {
      id: 1,
      src: '/homepage (1).jpg',
      alt: 'Explore Image 1',
      title: 'WE ARE LU CIUDAD',
      description: 'We are highly skilled in successful construction project execution.',
      button:'Our Projects'

    },
    {
      id: 2,
      src: '/homepage (2).jpg',
      alt: 'Explore Image 2',
      title: 'WE ARE DEDICATED',
      description: 'Proven track record in construction project delivery.',
      button:'Latest news'
    },
    {
      id: 3,
      src: '/homepage (3).jpg',
      alt: 'Explore Image 3',
      title: 'WE ARE EXPERIENCED',
      description: 'Exceptional construction project management expertise.',
      button:'Our history'
    },
  ];
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? exploreImages.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === exploreImages.length - 1 ? 0 : prevIndex + 1));
  };

  const imageVariants = {
    initial: { scale: 1 },
    animate: { scale: 1.1 },
  };

  const contentVariants = {
    initial: { x: '-100%', opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 1.5 } },
    exit: { x: '-100%', opacity: 0, transition: { duration: 1.5 } },
  };

  const containerVariants = {
    initial: { x: '-100%', opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 1.5 } },
    exit: { x: '100%', opacity: 0, transition: { duration: 1.5 } },
  };


  return (
    <section className="py-10 bg-secondary">
      <div className="container mx-auto sm:px-7">
        <div className="border-t-2 mx-10 border-tranceblue-400 bg-black/50 h-1 z-10 px-20"></div>
        <h2 className="text-2xl mt-20 pt-10 sm:text-7xl font-thin font-open-sans mb-7 text-tranceblue text-center">Explore with us</h2>
        <div className="relative w-screen max-w-full">
          <div className="rounded-lg shadow-lg overflow-hidden">
            <motion.div
              className="relative w-screen max-w-full"
              variants={imageVariants}
              initial={{ scale: 1 }}
              animate={{ scale: 1.1 }}
              transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
            >
            <Image
              src={exploreImages[currentIndex].src}
              alt={exploreImages[currentIndex].alt}
              width={1200}
              height={480}
              className="w-full h-[350px] sm:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-black font-open-sans bg-opacity-40 sm:flex flex-col align-items 
            justify-center p-20 text-white"
               >
            <div className="w-[200px] sm:w-[500px] md:p-2 font-open-sans">
              <h3 className="text-[10px] sm:text-sm font-semibold mb-2">
                {exploreImages[currentIndex].title}
              </h3>
              <p className="text-white text-xl sm:text-4xl lg:text-5xl font-semibold">
                {exploreImages[currentIndex].description}
              </p>
              <button className="mt-4 bg-primary-500 px-4 hover:bg-primary-600 text-center text-white
              font-normal py-2 transition-colors duration-300">
              <Link href={exploreImages[currentIndex].button}>
                  {exploreImages[currentIndex].button}
              </Link>
              </button>
            </div>  
            </div>
            </motion.div>
          </div>
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/20 rounded-full p-2 shadow-lg 
            hover:bg-gray-200 focus:outline-none"
            onClick={handlePrevClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
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
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/20 rounded-full p-2 shadow-lg hover:bg-gray-200 focus:outline-none"
            onClick={handleNextClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
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
    </section>
  );
}

export default ExploreSection;