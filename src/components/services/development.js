import React from 'react';
import Image from 'next/image'
import Navbar from '@/components/home/navigation';


export default function Development () {
   

    return (
        <>
        <section className='bg-secondary'>
        <Navbar />
            <div className="w-full mx-auto px-30 mt-[80px] sm:flex sm:flex-col lg:px-30 flex flex-col justify-center">
              <h1 className="text-1xl mx-auto text-center sm:text-4xl font-light text-tranceblue mb-5 font-cinzel 
               flex justify-center pb-1 mt-[90px]">RESIDENTIAL AND INDUSTRIAL BUILDING</h1>
              <div className='border-b-1 border-gray-500 w-[50px] mx-auto mt-0 text-center mb-[60px]'></div>  
            </div>

            <div className="w-full bg-white-200 mx-auto px-[50px] sm:px-20 mt-[10px] sm:flex sm:flex-col lg:px-30 flex 
           flex-col justify-center items-center">
               <p className="text-sm sm:text-[18px] font-light text-tranceblue mb-5 font-raleway text-black
               text-center">
               La Ciudad Company creates sustainable projects that promote environmental sensitivity design, 
               entrepreneurship, education and connectivity. From single and multifamily properties to mixed-use 
               communities, La Ciudad identifies and defines locations, primarily throughout western Nigeria, that offers 
               homebuyers, renters and retailers appreciable advantages and a great place to live, work and play. 
               </p>

               <p className="text-sm sm:text-[18px] font-light text-tranceblue mb-5 font-raleway text-black
               text-center">
               From towering high-rises to cozy homes, we specialize in constructing spaces that withstand the test of 
               time. Our commitment to quality craftsmanship and attention to detail ensures that every industrial or 
               residential project we undertake exceeds expectations.
               </p>


        <div className="container mx-auto px-4 py-8 grid grid-cols-1 gap-8 md:grid-cols-3 mb-[50px]">
         <div className='flex flex-col'>
           <div className="w-full h-48 overflow-hidden">
            <Image
              src="/dev (2).jpg"
              alt="Image 2"
              width={300}
              height={200}
              className="w-full h-full object-cover"
            />
           </div>
           <p className='font-cinzel text-center text-black pt-[20px]'>Residential Development</p>
         </div>
         

         <div className='flex flex-col'>
           <div className="w-full h-48 overflow-hidden">
            <Image
              src="/warehouse.jpg"
              alt="Image 2"
              width={300}
              height={200}
              className="w-full h-full object-cover"
            />
           </div>
           <p className='font-cinzel text-center text-black pt-[20px]'>Storage and Warehousing</p>
         </div>

         <div className='flex flex-col'>
           <div className="w-full h-48 overflow-hidden">
            <Image
              src="/dev (3).jpg"
              alt="Image 2"
              width={300}
              height={200}
              className="w-full h-full object-cover"
            />
           </div>
           <p className='font-cinzel text-center text-black pt-[20px]'>Modern Office Spaces Development</p>
         </div>

         <div className='flex flex-col'>
           <div className="w-full h-48 overflow-hidden">
            <Image
              src="/dev (9).jpg"
              alt="Image 2"
              width={300}
              height={200}
              className="w-full h-full object-cover"
            />
           </div>
           <p className='font-cinzel text-center text-black pt-[20px]'>Environmental and Sustainability projects</p>
         </div>

         <div className='flex flex-col'>
           <div className="w-full h-48 overflow-hidden">
            <Image
              src="/healthcare.jpg"
              alt="Image 2"
              width={300}
              height={200}
              className="w-full h-full object-cover"
            />
           </div>
           <p className='font-cinzel text-center text-black pt-[20px]'>Health Care Facilities</p>
         </div>

         <div className='flex flex-col'>
           <div className="w-full h-48 overflow-hidden">
            <Image
              src="/dev (11).jpg"
              alt="Image 2"
              width={300}
              height={200}
              className="w-full h-full object-cover"
            />
           </div>
           <p className='font-cinzel text-center text-black pt-[20px]'>Interior Design</p>
         </div>

        </div>
        </div>
      </section>
      </>
    )
}