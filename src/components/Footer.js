import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const handleOpenGoogleForm = () => {
  // Redirect the user to the Google Form link
  window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSdUjXCbOe_B0xp4OZJz4RZITpeoeWFquq4MFMsgJxx_P24Ppw/viewform?usp=sf_link';
};

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-primary font-open-sans py-12 md:py-16 border-t-8 border-primary">
      <div className="container mx-auto px-10 m-5">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-medium mb-4">GET IN TOUCH WITH US</h3>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-gray-400" />
                <div className="flex flex-col text-secondary">
                  <span className="font-medium text-lg">LOCATION:</span>
                  <span>40a, Oyibo Adjarho off Ayinde Akinmade, Admiralty Way, 
                    Lekki Phase 1,Lagos.</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaPhoneAlt className="text-gray-400" />
                <div className="flex flex-col text-secondary">
                  <span className="font-medium text-lg">PHONE:</span>
                  <span>(555) 555-5555</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-gray-400" />
                <div className="flex flex-col text-secondary">
                  <span className="font-medium text-lg">EMAIL:</span>
                  <span>info@laciudadglobal.com</span>
                </div>
              </div>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaFacebookF />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaTwitter />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaInstagram />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
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
                className="bg-gray-800 text-white px-4 py-3"
              />
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-white px-4 py-3"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;