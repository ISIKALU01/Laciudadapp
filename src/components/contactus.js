import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';


const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_1liigqb', 'template_pk1sqjs', formData, 'sAH4wWIWjavoQF91o')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmitted(true);
      })
      .catch((err) => {
        console.error('FAILED...', err);
      });
  };

  return (
    <div className="p-6 bg-secondary shadow-md pt-[100px]">
        <h2 className="text-3xl text-center font-cormorant-garamond text-tranceblue font-bold mb-4">Contact Us</h2>
        <h2 className="text-1xl text-center font-cormorant-garamond font-b mb-4">We&apos;d like to hear from you</h2>
    <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 sm:px-[50px]'>
    <div className="flex flex-col space-y-4 sm:w-[400px]">
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-gray-400" />
                <div className="flex flex-col text-tranceblue">
                  <span className="font-medium text-lg">LOCATION:</span>
                  <span>40a, Oyibo Adjarho off Ayinde Akinmade, Admiralty Way, 
                    Lekki Phase 1,Lagos.</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaPhoneAlt className="text-gray-400" />
                <div className="flex flex-col text-tranceblue">
                  <span className="font-medium text-lg">PHONE:</span>
                  <span>+234 916 222 7000</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-gray-400" />
                <div className="flex flex-col text-tranceblue">
                  <span className="font-medium text-lg">EMAIL:</span>
                  <span>info@laciudadglobal.com</span>
                </div>
              </div>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-tranceblue">
                  <FaFacebookF />
                </a>
                <a href="#" className="text-gray-400 hover:text-tranceblue">
                  <FaTwitter />
                </a>
                <a href="https://www.instagram.com/laciudadbuild?igsh=NDJ4bXd0Mzl0MWhw" className="text-gray-400 hover:text-tranceblue">
                  <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/company/la-ciudad-construction-limited/" className="text-gray-400 hover:text-tranceblue">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
      {submitted ? (
        <p className="text-green-600">Thank you for your message!</p>
      ) : (
        <form onSubmit={handleSubmit} className='w-[300px]'>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded bg-gray-300"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded bg-gray-300"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded bg-gray-300"
              rows="4"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      )}
      </div>
    </div>
  );
};

export default ContactUs;