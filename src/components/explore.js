import React from 'react';
import Image from 'next/image';
import {useState} from 'react';
import Link from 'next/link'
import { Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef } from 'react';



const ExploreSection = () => {  
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

  
    return (
      <section className="py-10 bg-secondary">
        <div className="container mx-auto sm:px-7">
          <div className="border-t-2 mx-10 border-tranceblue-400 bg-black/50 h-1 z-10 px-20"></div>
          <h2 className="text-2xl mt-20 pt-10 sm:text-7xl font-thin font-open-sans mb-7 text-tranceblue text-center">Explore with us</h2>
          <div className="relative w-screen max-w-full">
            <div className="rounded-lg shadow-lg overflow-hidden">
              <motion.div
                className="relative w-screen max-w-full"
                initial={{ scale: 1 }}
                animate={{ scale: 1.1 }}
                transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
              >
                <Swiper
                 modules={[Navigation, Pagination, Scrollbar, A11y]}
                 spaceBetween={50}
                 slidesPerView={1}
                 navigation
                 pagination={{ clickable: true }}
                 scrollbar={{ draggable: true }}
               >
                {exploreImages.map((image, index) => (
                  <SwiperSlide key={index}>
              
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1200}
                    height={480}
                    className="w-full h-[350px] sm:h-[500px] object-cover"
                   />
                   
                     
                  <div className="absolute inset-0 bg-black font-open-sans bg-opacity-40 sm:flex flex-col align-items 
                   justify-center p-20 text-white"
                  >
                   <div className="w-[200px] sm:w-[500px] md:p-2 font-open-sans">
                     <h3 className="text-[10px] sm:text-sm font-semibold mb-2">
                     {image.title}
                     </h3>
                     <p className="text-white text-xl sm:text-4xl lg:text-5xl font-semibold">
                      {image.description}
                     </p>
                     <button className="mt-4 bg-primary-500 px-4 hover:bg-primary-600 text-center text-white
                     font-normal py-2 transition-colors duration-300">
                     <Link href={image.button}>
                     {image.button}
                     </Link>
                    </button>
                   </div>  
                  </div>
                  </SwiperSlide>
                ))}     
                 </Swiper>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default ExploreSection;


