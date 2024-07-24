import React from 'react';
import { FaUserFriends, FaWrench, FaGlobeAfrica, FaChartLine, FaPlane, FaBoxOpen } from 'react-icons/fa';
import styles from './constructionMain.module.css'

const ConstructionMain = () => {
  return (
    <>
    <section className={styles.container}>
    <h1 className='font-open-sans font-light text-tranceblue text-2xl pt-[130px] text-center lg:px-[250px]'>The most important factors distinguishing La ciudad 
    as the nation&apos;s leading minority-owned construction firm:</h1>
    <div className="flex justify-center items-center w-full h-auto px-[100px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-[30px] sm:gap-[100px] sm:mt-[100px] mb-[50px]">
        <div className='flex flex-col justify-center items-center'>
        <div className="flex justify-center items-center w-[150px] h-[150px] bg-white rounded-full shadow-md hover:scale-110 transition-transform duration-300 cursor-pointer">
          <FaUserFriends className="text-[35px] text-primary" />
        </div>
        <p className='text-md mt-[10px] text-center w-[200px] font-open-sans text-tranceblue'>Over 5-year Reputation for Honesty and Integrity</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
        <div className="flex justify-center items-center w-[150px] h-[150px] bg-white rounded-full shadow-md hover:scale-110 transition-transform duration-300 cursor-pointer">
          <FaWrench className="text-[35px] text-primary" />
        </div>
        <p className='text-md mt-[10px] text-center w-[200px] font-open-sans text-tranceblue'>Diverse Professional
        Construction Staff with Relevant Experience</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
        <div className="flex justify-center items-center w-[150px] h-[150px] bg-white rounded-full shadow-md hover:scale-110 transition-transform duration-300 cursor-pointer">
          <FaGlobeAfrica className="text-[35px] text-primary" />
        </div>
        <p className='text-md mt-[10px] text-center w-[100px] font-open-sans text-tranceblue'>Global presence</p>
        </div>    
        <div className='flex flex-col justify-center items-center'>
        <div className="flex justify-center items-center w-[150px] h-[150px] bg-white rounded-full shadow-md hover:scale-110 transition-transform duration-300 cursor-pointer">
          <FaChartLine  className="text-[35px] text-primary" />
        </div>
        <p className='text-md mt-[10px] text-center w-[200px] font-open-sans text-tranceblue'>Market Segment
         Expertise</p>
        </div>   
        <div className='flex flex-col justify-center items-center'>
        <div className="flex justify-center items-center w-[150px] h-[150px] bg-white rounded-full shadow-md hover:scale-110 transition-transform duration-300 cursor-pointer">
          <FaPlane  className="text-[35px] text-primary" />
        </div>
        <p className='text-md mt-[10px] text-center w-[200px] font-open-sans text-tranceblue'>Urban Site/Environment
         Logistics Experience</p>
        </div>  
        <div className='flex flex-col justify-center items-center'>
        <div className="flex justify-center items-center w-[150px] h-[150px] bg-white rounded-full shadow-md hover:scale-110 transition-transform duration-300 cursor-pointer">
          <FaBoxOpen  className="text-[35px] text-primary" />
        </div>
        <p className='text-md mt-[10px] text-center w-[200px] font-open-sans text-tranceblue'>Supplier
         Diversity</p>
        </div> 
      </div>
    </div>

    <div className="w-full mx-auto px-10 sm:px-20 mt-[10px] sm:mt-[40px] sm:flex sm:flex-col lg:px-30 flex 
           flex-col justify-center pb-[50px]">
              <h1 className="text-1xl mx-auto text-center sm:text-[20px] md:text-[25px] font-light text-tranceblue mb-2 font-open-sans 
               flex justify-center pb-1">LEADERS IN PLANNING, DESIGN AND CONSTRUCTION MANAGEMENT</h1> 
               <p className="mx-auto text-[12px] sm:text-[15px] font-light text-tranceblue mb-5 font-open-sans">
               The Construction Management team at La Ciudad Company is multi-discipline, composed of seasoned professionals 
               with backgrounds in architecture, engineering, construction, facilities planning, operations, and financial 
               management. Leveraging our team&apos;s strength, we strive to contribute effectively and provide impactful service to our 
               clients, each and every day - beyond just delivering projects on-time and on-budget.
               </p>
            </div>
    </section>
    </>
  );
};

export default ConstructionMain;