import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import Link from 'next/link'
const handleOpenGoogleForm = () => {
  // Redirect the user to the Google Form link
  window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSdUjXCbOe_B0xp4OZJz4RZITpeoeWFquq4MFMsgJxx_P24Ppw/viewform?usp=sf_link';
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-700 text-primary font-raleway pt-12 md:pt-16 border-t-8 border-primary mb-[-25px]">
      <div className="container mx-auto px-10 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-medium pb-10">LET&apos;S BUILD THE FUTURE. TOGETHER.</h3>
            <button className='bg-primary text-white px-[30px] py-[10px] hover:bg-blue-600'>
              <Link href='/contactus'>Contact Us</Link>
            </button>
          </div>
          <div className="flex flex-col items-start">
          <h3 className="text-2xl font-medium mb-4">RESOURCES</h3>
            <button className='text-secondary p-[5px]
             text-md' onClick={handleOpenGoogleForm}>
             Subcontractor Pre-Registration Form
            </button>
          </div>      
          <div className="flex flex-col items-start">
            <h3 className="text-2xl font-medium mb-5">NEWSLETTER SIGN UP</h3>
            <form className="flex flex-col space-y-4 w-full">
            <input
                type="name"
                placeholder="Enter your name"
                className="bg-gray-500 text-white px-4 py-3"
              />
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-500 text-white px-4 py-3"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-[20px] py-3 w-50"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className='border-b-1 border-secondary/20 w-full mx-auto mt-0 text-center mb-[60px]'></div>  

      <div className="flex flex-col md:flex-row items-center space-x-20 px-10 text-white text-sm pb-[30px]">
        <p>&copy; {currentYear} Laciudad Construction Limited. All Rights Reserved.</p>

        <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaFacebookF />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaTwitter />
                </a>
                <a href="https://www.instagram.com/laciudadbuild?igsh=NDJ4bXd0Mzl0MWhw" className="text-gray-400 hover:text-white">
                  <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/company/la-ciudad-construction-limited/" className="text-gray-400 hover:text-white">
                  <FaLinkedinIn />
                </a>
              </div>
      </div>
    </footer>
  );
};

export default Footer;