import React from 'react';
import Image from 'next/image';
import Link from 'next/link';



const ImageGrid = () => {

  return (
    <section className='bg-secondary py-10'>
      <h1 className='text-2xl mx-auto px-20 mb-10 text-center sm:text-5xl font-thin 
      text-tranceblue font-cinzel flex justify-center'>Our Services</h1>
      <div className='flex align-items justify-center pb-20'>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 relative">
          <div className="w-screen max-w-full h-80 sm:w-80 sm:h-80 m-0 p-0 relative group overflow-hidden cursor-pointer">
             <Image
                 src="/serv1.jpg"
                 alt="Image 1"
                 width={300}
                 height={200}
                 className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <Link href='/services/construction'>
              <div className="absolute top-0 left-0 w-full bg-black/50 h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-4 group-hover:translate-y-0">
                  <p className="text-white py-6 mt-4 font-cormorant-garamond font-thin px-5 text-sm -translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                  With our experienced project management team at the helm, we ensure seamless execution from initial 
                  concept to final completion. From meticulous planning and scheduling to diligent oversight of all 
                  project phases, we are dedicated to delivering results that surpass client objectives.
                  </p>
              </div>
              <span className='absolute w-full bottom-0 bg-primary text-center text-lg font-cormorant-garamond text-white 
              py-6 px-10'>CONSTRUCTION</span>
              </Link>
          </div>
          <div className="w-screen max-w-full h-80 sm:w-80 sm:h-80 m-0 p-0 relative group overflow-hidden cursor-pointer">
             <Image
                 src="/serv2.jpg"
                 alt="Image 2"
                 width={300}
                 height={200}
                 className="object-cover w-full h-full grayscale brightness-700 transition-transform duration-500 ease-in-out group-hover:scale-110"            
              />
              <div className="absolute top-0 left-0 w-full bg-black/50 h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-4 group-hover:translate-y-0">
                  <p className="text-white py-6 mt-4 font-cormorant-garamond font-thin px-5 text-sm -translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                    The development arm of Luciudad, is a pioneering urban developer whose purpose is to be a catalyst for urban transformation
                    creating sustainable single and multi-family properties and mixed-used communities that promote community and economic empowerment.
                  </p>
              </div>
              <span className='absolute w-full bottom-0 bg-primary-200 text-center text-lg font-cormorant-garamond text-white py-6 px-10'>DEVELOPMENT</span>
          </div>
          <div className="w-screen max-w-full h-80 sm:w-80 sm:h-80 m-0 p-0 relative group overflow-hidden cursor-pointer">
              <Image
                 src="/serv3.jpg"
                 alt="Image 3"
                 width={300}
                 height={200}
                 className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-50"
              />
              <div className="absolute top-0 left-0 w-full bg-black/50 h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-4 group-hover:translate-y-0">
                  <p className="text-white py-6 mt-4 font-cormorant-garamond font-thin px-5 text-sm -translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">Our construction division offers a full range of construction
                  services, including general contracting, construction management agency, construction management at 
                  risk, and design-builds.</p>
              </div>
              <span className='absolute w-full bottom-0 bg-primary text-center text-lg font-cormorant-garamond text-white py-6 px-10'>PROJECT MANAGEMENT</span>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default ImageGrid;