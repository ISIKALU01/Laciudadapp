import React, {useState} from 'react';
import Image from 'next/image'
import Navbar from '@/components/home/navigation';
import { FaBriefcase, FaPlus, FaFileAlt, FaTools, FaHandHolding, FaDesktop, FaLaptop, FaMoneyBill, FaHotel, FaRibbon, FaShieldAlt, FaWheelchair, FaVest, FaRegCalendarAlt, FaRegClock, FaSuperpowers} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';





const handleOpenGoogleForm = () => {
  // Redirect the user to the Google Form link
  window.location.href = 'https://forms.gle/4jSyYZQZQLJp1TjGA';
};

export default function Careers() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.1, // Trigger animation when 50% of the element is in view
  });
  
        return (
          <>
          <section className='bg-secondary'>
          <div className="flex w-full h-[350px] overflow-hidden relative mb-[100px]">
          <Image
            src='/careers (3).jpg'
            alt='Image 1'
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-primary/100 opacity-50"></div>
          <div className="absolute inset-0 text-secondary p-4 rounded flex flex-col items-center justify-center">
          <h1 className="text-4xl mx-auto text-center sm:text-5xl font-light text-secondary font-raleway 
          flex justify-center pb-1">WORK FOR US</h1>
          </div>
          <Navbar />
          </div>

          <div className='flex items-center flex-col justify-center'>
            <h1 className="text-xl text-center sm:text-3xl font-raleway
            px-4 mb-[50px] font-semibold text-tranceblue">JOIN OUR TEAM</h1>
            <p className='px-[30px] lg:px-[100px] font-raleway text-md text-tranceblue mb-[70px]'>
              While we have an inclusive culture and an open management approach system, we pride ourselves 
              on hiring talented individuals while building a high-performance management organization. We are 
              committed to the development of our employees, which is why we offer a range of training programs 
              and career events. We operate a positive work environment that enables a productive atmosphere, 
              effective communication, growth opportunities, and positive thinking.</p>
          </div>


          <div className="bg-gray-300 px-[10px] lg:px-[150px] py-8 grid grid-cols-1 gap-8 sm:grid-cols-2 pb-[50px] justify-center items-center pt-[100px]">
            <motion.div 
              ref={ref} 
              initial={{ opacity: 0, x: -100 }} 
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }} 
              transition={{ duration: 0.5, ease: "easeOut" }} 
              className="w-full h-72 sm:h-144 sm:h-72 overflow-hidden flex flex-col"
              >
             <Image
              src="/careers (2).jpg"
              alt="Image 1"
              width={2000}
              height={1500}
              className="w-full h-full object-cover"
            />
            </motion.div>

            <motion.div 
             ref={ref} 
             initial={{ opacity: 0, x: 100 }} 
             animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }} 
             transition={{ duration: 0.5, ease: "easeOut" }} 
             className='flex items-center flex-col justify-center'
             >
              <h1 className="text-xl sm:text-3xl font-raleway px-4 mb-[10px] font-semibold text-tranceblue">EXPLORE THE POSSIBILITIES</h1>
              <p className='px-[10px] font-raleway text-md text-tranceblue'>
                Our workplace culture entails excellence, motivation, collaboration, and a high-level commitment to innovation. 
                Because we value our people, we foster an environment that rewards talent, integrity, and hard work. 
                As a result, we strive to hire candidates who demonstrate our values in their day-to-day work activities.
              </p>
            </motion.div>
          </div>

           <section className="bg-gray-100 p-10">
            <h1 className='font-raleway font-normal text-tranceblue text-xl pt-[40px] text-center 
            lg:px-[250px] mb-[40px]'>Explore the opportunities below:</h1>
            <div className="flex justify-center w-full h-auto">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                
               <div className='flex flex-col justify-center items-center'>
                <div className="flex flex-col justify-center items-center w-[300px] sm:w-[400px]
                lg:w-48 h-48 bg-primary shadow-md">
                  <p className='text-lg mb-[30px] px-[15px] text-center font-raleway font-semibold text-white'>Construction Jobs</p>
                  <FaTools className="text-[55px] text-white" />
                </div>
               </div>
               
               <div className='flex flex-col justify-center items-center'>
                <div className="flex flex-col justify-center items-center w-[300px] sm:w-[400px]
                lg:w-48 h-48 bg-primary shadow-md">
                  <p className='text-lg mb-[30px] px-[15px] text-center font-raleway font-semibold text-white'>Corporate Jobs</p>
                  <FaLaptop className="text-[55px] text-white" />
                </div>
               </div>

               <div className='flex flex-col justify-center items-center'>
                <div className="flex flex-col justify-center items-center w-[300px] sm:w-[400px]
                lg:w-48 h-48 bg-primary shadow-md">
                  <p className='text-lg px-[15px] text-center font-raleway font-semibold 
                  text-white'>Program Management Jobs</p>
                  <FaHandHolding className="text-[55px] text-white"/>
                </div>
               </div>

               <div className='flex flex-col justify-center items-center'>
                <div className="flex flex-col justify-center items-center w-[300px] sm:w-[400px]
                lg:w-48 h-48 bg-primary shadow-md">
                  <p className='text-lg mb-[30px] px-[15px] text-center font-raleway font-semibold text-white'>Office Jobs</p>
                  <FaDesktop  className="text-[55px] text-white" />
                </div>
               </div>

               <div className='flex flex-col justify-center items-center'>
                <div className="flex flex-col justify-center items-center w-[300px] sm:w-[400px]
                lg:w-48 h-48 bg-primary shadow-md">
                  <p className='text-lg mb-[30px] px-[15px] text-center font-raleway font-semibold text-white'>Hotel Jobs</p>
                  <FaHotel className="text-[55px] text-white" />
                </div>
               </div>

              </div>
            </div>
           </section>

           <div className='bg-secondary flex flex-col justify-center items-center'>
                <h1 className='font-raleway text-2xl text-center pt-[50px]'>BENEFITS</h1>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 pb-[100px] px-[30px]">
                  
                  <li className="p-4 font-raleway text-md">
                    <div className="flex items-start">
                     <span className="inline-block w-5 h-5  mr-2 mt-2">
                      <FaPlus className="text-[15px] text-primary" /></span>
                     <span>Medical, Dental, and Vision Insurance</span>
                    </div>
                  </li>

                  <li className="p-4 font-raleway text-md">
                    <div className="flex items-start">
                     <span className="inline-block w-5 h-5  mr-2 mt-2">
                      <FaBriefcase className="text-[15px] text-primary" /></span>
                     <span>Flexible Spending Account</span>
                    </div>
                  </li>

                  <li className="p-4 font-raleway text-md">
                    <div className="flex items-start">
                     <span className="inline-block w-5 h-5  mr-2 mt-2">
                      <FaMoneyBill className="text-[15px] text-primary" /></span>
                     <span>Retirement and Savings Plan</span>
                    </div>
                  </li>

                  <li className="p-4 font-raleway text-md">
                    <div className="flex items-start">
                     <span className="inline-block w-5 h-5  mr-2 mt-2">
                      <FaShieldAlt className="text-[15px] text-primary" /></span>
                     <span>Group Life Insurance</span>
                    </div>
                  </li>

                  <li className="p-4 font-raleway text-md">
                    <div className="flex items-start">
                     <span className="inline-block w-5 h-5  mr-2 mt-2">
                      <FaRibbon className="text-[15px] text-primary" /></span>
                     <span>Wellness Program</span>
                    </div>
                  </li>

                  <li className="p-4 font-raleway text-md">
                    <div className="flex items-start">
                     <span className="inline-block w-5 h-5  mr-2 mt-2">
                      <FaWheelchair className="text-[15px] text-primary" /></span>
                     <span>Short and Long Term Disability</span>
                    </div>
                  </li>

                  <li className="p-4 font-raleway text-md">
                    <div className="flex items-start">
                     <span className="inline-block w-5 h-5  mr-2 mt-2">
                      <FaVest  className="text-[15px] text-primary" /></span>
                     <span>Life Insurance</span>
                    </div>
                  </li>

                  <li className="p-4 font-raleway text-md">
                    <div className="flex items-start">
                     <span className="inline-block w-5 h-5  mr-2 mt-2">
                      <FaRegCalendarAlt  className="text-[15px] text-primary" /></span>
                     <span>Paid Holidays</span>
                    </div>
                  </li>

                  <li className="p-4 font-raleway text-md">
                    <div className="flex items-start">
                     <span className="inline-block w-5 h-5  mr-2 mt-2">
                      <FaRegClock className="text-[15px] text-primary" /></span>
                     <span>Paid Time Off (PTO)</span>
                    </div>
                  </li>

                  <li className="p-4 font-raleway text-md">
                    <div className="flex items-start">
                     <span className="inline-block w-5 h-5  mr-2 mt-2">
                      <FaSuperpowers  className="text-[15px] text-primary" /></span>
                     <span>Flexible Time</span>
                    </div>
                  </li>

                </ul>
               </div>

            
               <section className='bg-gray-400'>
                 <div className='flex sm:flex-row items-center flex-col sm:justify-center mx-auto bg-appgray/80 p-[20px]'>
                   <p className="text-[30px] text-center sm:text-[35px] font-light text-tranceblue mb-2 font-raleway
                  ">Interested in working with us?</p>
                   <button className='sm:ml-[10px] flex flex-row text-tranceblue font-cinzel bg-primary text-white p-[5px] w-[250px]
                    text-[15px]' onClick={handleOpenGoogleForm}>
                    <FaFileAlt className="text-[55px] text-white ml-[10px]"/>
                    Career Opportunities Form
                   </button>
                  </div>
              </section>

          </section>
        </>
        );
      };
      