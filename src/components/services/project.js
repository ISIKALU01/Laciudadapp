import React from 'react';
import Image from 'next/image'
import Navbar from '@/components/home/navigation';
import styles from './construction.module.css'




export default function ProjectManagement() {
  const projectImage = {
    src: '/projectman.jpg',
    alt: 'Image 1'
  }

  const listItems = [
    'Project Management',
    'Procurement Management',
    'Cost Management',
    'CPM Schedule Development & Management',
    'Funds Management Services',
    'Value Engineering',
    'Real Estate Acquisition Services',
    'Quality Assurance & Quality Control',
    'Safety Program Management and Development',
    'Program Controls Systems Implementation and Development',
    'Claims Avoidance, Mitigation and Resolution',
    'Sustainable LEED and Green Building Strategy',
    'Commissioning & Move-in Coordination',
    'Real Estate Appraisals',
  ];

  const listItems2 = [
    'Cities and County Government Agencies',
    'Public School Systems',
    'Public and Private Higher Education Institutions',
    'Private Companies, Including Fortune 500 Organizations',
    'Real Estate Developers',
    'Minor and Professional Sports Teams and Leagues',
    'AEC Firms - We Are Happy to Share Our Knowledge and Partner'
  ]
  
        return (
          <>
          <section className="bg-secondary">
          <Navbar />
            <div className="w-full mx-auto px-30 mt-[80px] sm:flex sm:flex-col lg:px-30 flex flex-col justify-center">
              <h1 className="text-1xl mx-auto text-center sm:text-4xl font-light text-tranceblue mb-5 font-cinzel 
               flex justify-center pb-1 mt-[90px]">PROJECT MANAGEMENT</h1>
              <div className='border-b-1 border-gray-500 w-[50px] mx-auto mt-0 text-center mb-[60px]'></div>  
            </div>

            <div className="mx-[20px] h-[300px] sm:mx-[100px] sm:h-[400px] lg:mx-[150px] lg:h-[500px] flex 
            justify-center align-center w-[full] mb-[100px]">
                <Image
                   src={projectImage.src}
                   alt={projectImage.alt}
                   width={2000}
                   height={1300}
                   className="shadow-md object-cover"
                />     
                      
            </div>
        

           <div className="w-full bg-white-200 mx-auto px-10 sm:px-20 mt-[10px] sm:mt-[40px] sm:flex sm:flex-col lg:px-30 flex 
           flex-col justify-center">
              <h1 className="text-1xl mx-auto text-center sm:text-[25px] md:text-[30px] font-light text-tranceblue font-cinzel
               flex justify-center">COMPREHENSIVE PROJECT MANAGEMENT SOLUTIONS</h1> 
               <h3 className="text-[10px] sm:text-[16px] mt-[0] sm:mt-[-10px] mx-auto text-center font-normal text-tranceblue mb-2
               flex justify-center pb-1 tracking-wider">for clients seeking guidance for their building programs</h3>
               <p className="mx-auto text-sm sm:text-[18px] font-light text-tranceblue mb-5 font-raleway">
                At Laciudad, we are client-centered which is why we offer our program management services together, serving as your 
                owners representative, or a la cart tailored to meet your specific organization and project needs. Whatever the way 
                we just want to be of service and help you plan and execute your project and your vision. Our program management 
                services encompass all phases of project delivery - from feasibility and preplanning, permitting, zoning, design, 
                procurement, construction, commissioning, and move-in up through the warranty phase. We help manage and lead single 
                projects, comprehensive building programs, even multi-location/multi-project programs. Large or small we, we can help with them all.
               </p>

               <div className='text-tranceblue'>
                <h1 className='font-raleway text-xl'>Our Project Management Services include:</h1>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 mt-10 mb-[100px]">
                  {listItems.map((item, index) => (
                  <li key={index} className="p-4 font-raleway text-md md:text-lg">
                    <div className="flex items-start">
                     <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mr-2 mt-3"></span>
                     <span>{item}</span>
                    </div>
                  </li>
                  ))}
                </ul>
               </div>

            </div>
          </section>

          <section className='bg-gray-200 p-[35px] sm:p-[20px] lg:p-[20px] xl:p-[100px]'>
          <h1 className='text-center text-2xl font-cinzel text-gray-700 mb-[100px]'>La Ciudad project management at a glance</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:px-[50px] text-white font-cinzel font-bold">
                 <div className="flex flex-row items-center bg-gray-400">
                   <div className="w-full h-[200px] sm:w-1/2 sm:mb-0 mr-0 sm:mr-4">
                    <Image 
                       src="/pm (1).jpg" 
                       alt="Image 1" 
                       width={500}
                       height={700}
                       className="w-full h-full object-cover" 
                    />
                   </div>
                   <div className="w-full sm:w-1/2 px-[5px]">
                    <p>Currently managing over N5 billion in Projects</p>
                   </div>
                 </div>

                 <div className="flex flex-row items-center bg-gray-400">
                  <div className="w-full h-[200px] sm:w-1/2 sm:mb-0 mr-0 sm:mr-4">
                  <Image 
                    src="/pm (4).jpg" 
                    alt="Image 1" 
                    width={500}
                    height={700}
                    className="w-full h-full object-cover" 
                  />
                  </div>
                  <div className="w-full sm:w-1/2 px-[2px]">
                   <p>Serving Africa and international markets.</p>
                  </div>
                 </div>

                 <div className="flex flex-row items-center bg-gray-400">
                  <div className="w-full h-[200px] sm:w-1/2 sm:mb-0 mr-0 sm:mr-4">
                  <Image 
                    src="/pm (5).jpg" 
                    alt="Image 1" 
                    width={500}
                    height={700}
                    className="w-full h-full object-cover" 
                  />
                  </div>
                  <div className="w-full sm:w-1/2 px-[2px]">
                   <p>Providing PM/CM services for over a decade.</p>
                  </div>
                 </div>
               </div>
             </section>


          <section className='bg-primary lg:p-[100px]'>
          <h1 className='text-center pt-[100px] text-[22px] text-white font-cinzel px-[50px]'>INDUSTRY EXPERTISE WHEN YOU NEED IT MOST</h1>
          <div className="container mx-auto px-4 py-8 grid grid-cols-1 gap-8 md:grid-cols-3">
           <div className="w-full h-50 overflow-hidden flex flex-col">
            <Image
             src="/homepage (1).jpg"
             alt="Image 1"
             width={300}
             height={200}
             className="w-full h-full object-cover"
            />
            <p className='font-cinzel text-center text-white pt-[20px]'>Entertainment</p>
           </div>
      
           <div className="w-full h-50 overflow-hidden flex flex-col">
            <Image
              src="/homepage (3).jpg"
              alt="Image 2"
              width={300}
              height={200}
              className="w-full h-full object-cover"
            />
            <p className='font-cinzel text-center text-white pt-[20px]'>Retail Market</p>
           </div>

           <div className="w-full h-50 overflow-hidden flex flex-col">
            <Image
              src="/homepage (6).jpg"
              alt="Image 3"
              width={300}
              height={200}
              className="w-full h-full object-cover"
             />
            <p className='font-cinzel text-center text-white pt-[20px]'>Food services</p>

           </div>
          </div>
          </section>


          <section className='bg-secondary px-[20px] lg:px-[100px]'>
              <div>
                <h1 className='font-raleway text-xl md:text-2xl text-center pt-[50px]'>WHO WE HELP</h1>
                <p className='font-raleway text-md md:text-xl pt-[50px]'>For over a decade we have worked with some of the nation&apos;s leading organizations and institutions 
                  and partnered with some of the best of our fellow AEC firms. We routinely work for clients such as:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 pb-[100px]">
                  {listItems2.map((item, index) => (
                  <li key={index} className="p-4 font-raleway text-md md:text-xl">
                    <div className="flex items-start">
                     <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mr-2 mt-3"></span>
                     <span>{item}</span>
                    </div>
                  </li>
                  ))}
                </ul>
               </div>
          </section>
          </>
        );
      };
