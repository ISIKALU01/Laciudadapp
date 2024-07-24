import React from 'react';
import Image from 'next/image'
import styles from './constructionBottom.module.css'
import { FaFileAlt } from "react-icons/fa";


const handleOpenGoogleForm = () => {
  // Redirect the user to the Google Form link
  window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSdUjXCbOe_B0xp4OZJz4RZITpeoeWFquq4MFMsgJxx_P24Ppw/viewform?usp=sf_link';
};

const ConstructionImageGrid = () => {
  return (
    <section className={styles.container}>
      <div className="w-full mx-auto px-10 sm:px-20 mt-[10px] sm:mt-[40px] sm:flex sm:flex-col lg:px-30 flex 
           flex-col justify-center">
               <h1 className="text-1xl mx-auto text-center sm:text-[20px] md:text-[25px] font-light text-tranceblue mb-2 font-open-sans 
               flex justify-center pb-1 mt-[100px]">Sustainable Construction Solutions</h1> 
               <p className="mx-auto text-[12px] sm:text-[15px] font-light text-tranceblue mb-5 font-open-sans">
               We are dedicated to promoting sustainable construction practices that minimize environmental impact while 
               maximizing energy efficiency and resource conservation. From green building certifications to innovative 
               eco-friendly technologies, we integrate sustainability into every aspect of our projects, ensuring a 
               greener future for generations to come.
               </p>
            </div>
    <h1 className="text-1xl mx-auto text-center sm:text-[20px] md:text-[25px] font-light text-tranceblue mb-2 font-open-sans 
    flex justify-center pb-[60px] pt-[50px]">CASE STUDIES</h1> 
    <div className="mx-auto px-[50px] md:px-[80px] grid grid-cols-1 md:grid-cols-2 gap-10 pb-[50px]">
      <div className='flex flex-col justify-center items-center'>
        <Image
          src="/homepage (4).jpg"
          alt="Image 1"
          width={300}
          height={200}
          className="w-full h-[200px] sm:h-[300px] md:h-[230px] lg:h-[270px] object-cover cursor-pointer"
        />
        <p className='text-md mt-[10px] text-center w-[200px] font-[zilla] text-tranceblue'>RHAPSODYS ABUJA</p>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <Image
          src="/homepage.jpg"
          alt="Image 2"
          width={300}
          height={200}
          className="w-full h-[200px] sm:h-[300px] md:h-[230px] lg:h-[270px] object-cover cursor-pointer"
        />
        <p className='text-md mt-[10px] text-center w-[200px] font-[zilla] text-tranceblue'>SLOW LAGOS</p>
      </div>
    </div>

    <div className='flex sm:flex-row items-center flex-col sm:justify-center mx-auto bg-appgray/80 p-[20px]'>
      <p className="text-[30px] text-center sm:text-[35px] font-light text-tranceblue mb-2 font-open-sans 
      ">Want to work with us?</p>
      <button className='sm:ml-[10px] flex flex-row text-tranceblue font-open-sans bg-primary text-white p-[5px] w-[250px]
      text-[15px]' onClick={handleOpenGoogleForm}>
      <FaFileAlt className="text-[55px] text-white ml-[10px]"/>
       SUBCONTRACTOR PRE-REGISTRATION FORM
      </button>
    </div>
    </section>
  );
};

export default ConstructionImageGrid;