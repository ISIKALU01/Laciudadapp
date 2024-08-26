import React from 'react';
import Image from 'next/image'
import Navbar from '@/components/home/navigation';


export default function Development () {
   

    return (
        <>
        <section className='mt-[-13px] bg-secondary'>
        <Navbar />
            <div className="w-full mx-auto px-30 mt-[80px] sm:flex sm:flex-col lg:px-30 flex flex-col justify-center">
              <h1 className="text-1xl mx-auto text-center sm:text-4xl font-light text-tranceblue mb-5 font-cinzel 
               flex justify-center pb-1 mt-[90px]">RESIDENTIAL AND INDUSTRIAL BUILDING</h1>
              <div className='border-b-1 border-gray-500 w-[50px] mx-auto mt-0 text-center mb-[60px]'></div>  
            </div>

            <div className="w-full bg-white-200 mx-auto px-[300px] sm:px-20 mt-[10px] sm:flex sm:flex-col lg:px-30 flex 
           flex-col justify-center">
               <p className="text-sm sm:text-[18px] font-light text-tranceblue mb-5 font-cormorant-garamond text-black
               text-center">
               La Ciudad Company creates sustainable projects that promote environmental sensitivity design, 
               entrepreneurship, education and connectivity. From single and multifamily properties to mixed-use 
               communities, La Ciudad identifies and defines locations, primarily throughout western Nigeria, that offers 
               homebuyers, renters and retailers appreciable advantages and a great place to live, work and play. 
               </p>

               <p className="text-sm sm:text-[18px] font-light text-tranceblue mb-5 font-cormorant-garamond text-black
               text-center">
               From towering high-rises to cozy homes, we specialize in constructing spaces that withstand the test of 
               time. Our commitment to quality craftsmanship and attention to detail ensures that every industrial or 
               residential project we undertake exceeds expectations.
               </p>


        <div className="container mx-auto px-4 py-8 grid grid-cols-1 gap-8 md:grid-cols-3 mb-[50px]">
           <div className="w-full h-50 overflow-hidden flex flex-col">
            <Image
             src="/dev (1).jpg"
             alt="Image 1"
             width={300}
             height={200}
             className="w-full h-full object-cover"
            />
            <p className='font-cinzel text-center text-black pt-[20px]'></p>
           </div>
      
           <div className="w-full h-50 overflow-hidden flex flex-col">
            <Image
              src="/dev (2).jpg"
              alt="Image 2"
              width={300}
              height={200}
              className="w-full h-full object-cover"
            />
            <p className='font-cinzel text-center text-black pt-[20px]'>Residential Development</p>
           </div>

           <div className="w-full h-50 overflow-hidden flex flex-col">
            <Image
              src="/dev (3).jpg"
              alt="Image 3"
              width={300}
              height={200}
              className="w-full h-full object-cover"
             />
            <p className='font-cinzel text-center text-black pt-[20px]'>Commercial Development</p>
           </div>

           <div className="w-full h-50 overflow-hidden flex flex-col">
            <Image
              src="/dev (4).jpg"
              alt="Image 4"
              width={300}
              height={200}
              className="w-full h-full object-cover"
             />
            <p className='font-cinzel text-center text-black pt-[20px]'>Health Care Facility</p>
           </div>

           <div className="w-full h-50 overflow-hidden flex flex-col">
            <Image
              src="/dev (5).jpg"
              alt="Image 5"
              width={300}
              height={200}
              className="w-full h-full object-cover"
             />
            <p className='font-cinzel text-center text-black pt-[20px]'>Storage and Warehousing</p>
           </div>

           <div className="w-full h-50 overflow-hidden flex flex-col">
            <Image
              src="/dev (6).jpg"
              alt="Image 6"
              width={300}
              height={200}
              className="w-full h-full object-cover"
             />
            <p className='font-cinzel text-center text-black pt-[20px]'>Environmental and sustainability Projects</p>
           </div>

           <div className="w-full h-50 overflow-hidden flex flex-col">
            <Image
              src="/dev (7).jpg"
              alt="Image 7"
              width={300}
              height={200}
              className="w-full h-full object-cover"
             />
            <p className='font-cinzel text-center text-black pt-[20px]'>Food services</p>
           </div>

           <div className="w-full h-50 overflow-hidden flex flex-col">
            <Image
              src="/dev (8).jpg"
              alt="Image 8"
              width={300}
              height={200}
              className="w-full h-full object-cover"
             />
            <p className='font-cinzel text-center text-black pt-[20px]'>Food services</p>
           </div>

           <div className="w-full h-50 overflow-hidden flex flex-col">
            <Image
              src="/dev (9).jpg"
              alt="Image 9"
              width={300}
              height={200}
              className="w-full h-full object-cover"
             />
            <p className='font-cinzel text-center text-black pt-[20px]'>Food services</p>
           </div>

           <div className="w-full h-50 overflow-hidden flex flex-col">
            <Image
              src="/dev (10).jpg"
              alt="Image 10"
              width={300}
              height={200}
              className="w-full h-full object-cover"
             />
            <p className='font-cinzel text-center text-black pt-[20px]'>Food services</p>
           </div>

           <div className="w-full h-50 overflow-hidden flex flex-col">
            <Image
              src="/dev (11).jpg"
              alt="Image 11"
              width={300}
              height={200}
              className="w-full h-full object-cover"
             />
            <p className='font-cinzel text-center text-black pt-[20px]'>Interior Design</p>
           </div>

           <div className="w-full h-50 overflow-hidden flex flex-col">
            <Image
              src="/dev (12).jpg"
              alt="Image 12"
              width={300}
              height={200}
              className="w-full h-full object-cover"
             />
            <p className='font-cinzel text-center text-black pt-[20px]'>Food services</p>
           </div>
        </div>


         </div>
        </section>
        </>
    )
}