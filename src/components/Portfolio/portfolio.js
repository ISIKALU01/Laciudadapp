import React, {useState} from 'react';
import Image from 'next/image'
import Navbar from '@/components/home/navigation';
import Laciudadmall from './Laciudadmall'
import Slowlagos from './slowLagos'
import 'animate.css'

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





export default function Portfolio() {
  
        return (
          <>
          <section className='bg-secondary'>
          <div className="flex w-full h-[350px] overflow-hidden relative mb-[100px]">
          <Image
            src='/dev (1).jpg'
            alt='Image 1'
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-primary/100 opacity-50"></div>
          <div className="absolute inset-0 text-secondary p-4 rounded flex flex-col items-center justify-center">
          <h1 className="text-2xl mx-auto text-center sm:text-5xl font-light text-secondary font-cinzel 
               flex justify-center pb-1 mt-[50px]">PORTFOLIO</h1>
          </div>
          <Navbar />
          </div>

          <div className='flex items-center justify-center'>
            <h1 className="text-xl text-center sm:text-2xl font-cormorant-garamond w-[600px] font-semibold px-4">
              Here are some of our construction projects in Nigeria. 
              Some are complete, while others are still under construction. Take a look!
            </h1>
          </div>

          <div className="px-[10px] lg:px-[100px] py-8 grid grid-cols-1 gap-8 sm:grid-cols-2 mb-[50px] 
          justify-center items-center">
            <Laciudadmall />
            <Slowlagos />

           </div>

          </section>
        </>
        );
      };
