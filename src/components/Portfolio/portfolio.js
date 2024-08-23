import React from 'react';
import Image from 'next/image'
import Navbar from '@/components/home/navigation';
import Link from 'next/link';





export default function Portfoli() {
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
          <h1 className="text-1xl mx-auto text-center sm:text-4xl font-light text-secondary mb-5 font-cinzel 
               flex justify-center pb-1 mt-[50px]">PORTFOLIO</h1>
            <p className="text-5xl sm:text-xl font-cormorant-garamond w-[400px] font-semibold px-4">
              Here are some of our construction projects in Nigeria. 
              Some are complete, while others are still under construction. Take a look!</p>
          </div>
          <Navbar />
         </div>
          

          <div className="container px-[200px] py-8 grid grid-cols-1 gap-8 sm:grid-cols-2 mb-[50px]">
            <div className='relative group'>
              <div className="w-full h-50 overflow-hidden flex flex-col">
                <Image
                  src="/carouselsix.jpg"
                  alt="Image 1"
                  width={2000}
                  height={1500}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition 
                  duration-300 ease-in-out"
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black 
              bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 ease-in-out">
                <Link href="#" className="block">
                 <button className="text-black px-4 py-2 hover:bg-primary-200 font-cormorant-garamond text-secondary 
                 transition duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                  VIEW
                 </button>
                </Link>
              </div>
            </div>

            <div className='relative group'>
              <div className="w-full h-[280px] overflow-hidden flex flex-col">
                <Image
                  src="/homepage (1).jpg"
                  alt="Image 1"
                  width={2000}
                  height={1500}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition 
                  duration-300 ease-in-out"
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black 
              bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 ease-in-out">
                <Link href="#" className="block">
                 <button className="text-black px-4 py-2 hover:bg-primary-200 font-cormorant-garamond text-secondary 
                 transition duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                  VIEW
                 </button>
                </Link>
              </div>
            </div>

            <div className='relative group'>
              <div className="w-full h-50 overflow-hidden flex flex-col">
                <Image
                  src="/dev (1).jpg"
                  alt="Image 1"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition 
                  duration-300 ease-in-out"
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black 
              bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 ease-in-out">
                <Link href="#" className="block">
                 <button className="text-black px-4 py-2 hover:bg-primary-200 font-cormorant-garamond text-secondary 
                 transition duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                  VIEW
                 </button>
                </Link>
              </div>
            </div>

            <div className='relative group'>
              <div className="w-full h-50 overflow-hidden flex flex-col">
                <Image
                  src="/dev (1).jpg"
                  alt="Image 1"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition 
                  duration-300 ease-in-out"
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black 
              bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 ease-in-out">
                <Link href="#" className="block">
                 <button className="text-black px-4 py-2 hover:bg-primary-200 font-cormorant-garamond text-secondary 
                 transition duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                  VIEW
                 </button>
                </Link>
              </div>
            </div>

            <div className='relative group'>
              <div className="w-full h-50 overflow-hidden flex flex-col">
                <Image
                  src="/dev (1).jpg"
                  alt="Image 1"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition 
                  duration-300 ease-in-out"
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black 
              bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 ease-in-out">
                <Link href="#" className="block">
                 <button className="text-black px-4 py-2 hover:bg-primary-200 font-cormorant-garamond text-secondary 
                 transition duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                  VIEW
                 </button>
                </Link>
              </div>
            </div>

            <div className='relative group'>
              <div className="w-full h-50 overflow-hidden flex flex-col">
                <Image
                  src="/dev (1).jpg"
                  alt="Image 1"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition 
                  duration-300 ease-in-out"
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black 
              bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 ease-in-out">
                <Link href="#" className="block">
                 <button className="text-black px-4 py-2 hover:bg-primary-200 font-cormorant-garamond text-secondary 
                 transition duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                  VIEW
                 </button>
                </Link>
              </div>
            </div>
           </div>
          </section>
        </>
        );
      };
