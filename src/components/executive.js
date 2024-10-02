import Image from 'next/image';
import React from 'react';
import Navbar from '../components/home/navigation';

const ExecutiveTeam = () => {

  return (
    <div className="relative px-5 md:px-20 bg-secondary pt-[120px] pb-[60px]">
      <h2 className="text-center text-tranceblue font-cinzel mb-4 text-xl md:text-4xl">Executive Team</h2>
      <div className='border-b-1 border-gray-500 w-[50px] mx-auto mt-0 text-center mb-[60px]'></div> 
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-raleway">
        <div className="flex flex-col items-center bg-white p-10">
          <Image 
           src="/executive  (4).jpg" 
           alt="Executive 1" 
           width={1000} 
           height={1000} 
           className="object-cover w-[300px] h-[300px]" 
          />
          <p className="text-center mt-2 text-tranceblue font-bold">JOHN DADA </p>
          <p className="text-center mt-2 text-tranceblue font-light">Chief Executive Officer (CEO)</p>
          <div className='border-b-2 border-primary w-[40px] mx-auto mt-5 text-center mb-[60px]'></div> 

        </div>

        <div className="flex flex-col items-center bg-white p-10">
          <Image 
            src="/executive  (3).jpg" 
            alt="Executive 3" 
            width={1000} 
            height={1000} 
            className="object-cover w-[300px] h-[300px]" 
          />
          <p className="text-center mt-2 text-tranceblue font-bold">JAMES OLAWALE</p>
          <p className="text-center mt-2 text-tranceblue font-light">Electrical Engineer</p>
          <div className='border-b-2 border-primary w-[40px] mx-auto mt-5 text-center mb-[60px]'></div> 
        </div>


        <div className="flex flex-col items-center bg-white p-10">
          <Image 
            src="/executive  (1).jpg" 
            alt="Executive 2" 
            width={1000} 
            height={1000} 
            className="object-cover w-[300px] h-[300px]" 
          />
          <p className="text-center mt-2 text-tranceblue font-bold">YASSER MUSTAPHA</p>
          <p className="text-center mt-2 text-tranceblue font-light">Civil Engineer</p>
          <div className='border-b-2 border-primary w-[40px] mx-auto mt-5 text-center mb-[60px]'></div> 
        </div>


        <div className="flex flex-col items-center bg-white p-10">
          <Image 
            src="/executive  (2).jpg" 
            alt="Executive 4" 
            width={1000} 
            height={1000} 
            className="object-cover w-[300px] h-[300px]" 
           />
          <p className="text-center mt-2 text-tranceblue font-bold">KEHINDE TOYO</p>
          <p className="text-center mt-2 text-tranceblue font-light">Legal Advisor/Company Secretary</p>
          <div className='border-b-2 border-primary w-[40px] mx-auto mt-5 text-center mb-[60px]'></div> 
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default ExecutiveTeam;