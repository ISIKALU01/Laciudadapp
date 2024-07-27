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