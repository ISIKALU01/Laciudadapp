import React from 'react';
import Image from 'next/image'
import Navbar from '@/components/home/navigation';
import styles from './construction.module.css'




const images = [
  {
    src: '/construction (11).jpg',
    alt: 'Image 1',
    width: 400,
    height: 800,
  },
  {
    src: '/construction (6).jpg',
    alt: 'Image 2',
    width: 900,
    height: 600,
  },
  {
    src: '/construction (1).jpg',
    alt: 'Image 3',
    width: 600,
    height: 800,
  },
]


export default function ConstructionTop({}) {
        return (
          <>
          <section className={styles.container}>
          <Navbar />
            <div className="w-full mx-auto px-30 mt-[80px] sm:flex sm:flex-col lg:px-30 flex flex-col justify-center">
              <h1 className="text-1xl mx-auto text-center sm:text-4xl font-light text-tranceblue mb-2 font-cinzel 
               flex justify-center pb-1 mt-[90px]">CONSTRUCTION</h1>
              <div className='border-b-1 border-gray-500 w-[50px] mx-auto mt-0 text-center mb-5'></div>  
            </div>

            <div className="mx-auto relative w-full h-[300px] sm:h-[500px]">
                {images.map((image, index) => (
                  <div key={index} className={`absolute ${
                    index === 0
                    ? 'left-[5%] sm:left-[30%] top-0 w-[60%] h-[70%]'
                    : index === 1
                    ? 'left-[50%] sm:left-[50%] top-[10%] w-[50%] h-[50%]'
                    : index === 2
                    ? 'left-[20%] top-[20%] w-[60%] h-[50%]'
                    : 'left-[50%] top-[45%] w-[40%] h-[50%]'
                    } z-${images.length - index}`}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        className="shadow-md object-cover"
                       />
                </div>
              ))}
           </div>

           <div className="w-full bg-white-200 mx-auto px-10 sm:px-20 mt-[10px] sm:mt-[40px] sm:flex sm:flex-col lg:px-30 flex 
           flex-col justify-center">
              <h1 className="text-1xl mx-auto text-center sm:text-[25px] md:text-[30px] font-light text-tranceblue mb-2 font-cinzel
               flex justify-center pb-1">A TEAM WITH DEEP ROOTS IN CONSTRUCTION</h1> 
               <p className="mx-auto text-sm sm:text-[18px] font-light text-tranceblue mb-5 font-raleway">
               The Construction division offers a full range of services, including construction management, 
               general contracting, design-build/finance, preconstruction, and consulting. As a result of our 
               diverse range of services, La ciudad Company brings a wealth of talented, professional staff members to 
               every project.
               </p>
               <p className="mx-auto text-sm sm:text-[18px] font-light text-tranceblue mb-5 font-raleway">
               La ciudad diversified client base includes several Fortune 500 companies and mid-sized commercial 
               enterprises in the private sector along with public sector federal, state, county/city authorities.
               </p>
            </div>
          </section>
          </>
        );
      };
