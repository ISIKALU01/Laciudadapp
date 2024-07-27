import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {FiChevronDown } from 'react-icons/fi';
import 'animate.css';
import { FaWindows } from 'react-icons/fa';

function MobileDrawer({isOpen, onClose}) {
  const drawerRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

  

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleDropdown2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
  }



  useEffect(() => {
    if (drawerRef.current) {
      if (isOpen) {
        drawerRef.current.style.transform = 'translateX(0)';
        drawerRef.current.style.opacity = '1';
      } else {
        drawerRef.current.style.transform = 'translateX(100%)';
        drawerRef.current.style.opacity = '0';
      }
    }
  }, [isOpen]);



  

  return (
    <div onClick={() => {
        if(isDropdownOpen) toggleDropdown();
        if(isDropdownOpen2) toggleDropdown2();
      }}>
      <div ref={drawerRef} className="fixed top-0 right-0 h-full w-4/5 max-w-[400px] bg-primary/90 shadow-2xl p-6 z-[1000]
          transform transition-all duration-500 ease-in-out">
        <button className={`absolute top-6 right-6 text-secondary focus:outline-none ${isDropdownOpen ? 'rotate-180' : ''}`} 
          onClick={() => {
            onClose();
            if(isDropdownOpen) toggleDropdown()
             if(isDropdownOpen2) toggleDropdown2()}
            }>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        <ul className="mt-[70px] text-secondary font-[zilla] space-y-4">
          <li className="text-xl hover:text-blue-900 hover:font-semibold border-b-2 border-secondary pb-2">
          <Link href="/">Home</Link>
          </li>
          <li className="relative text-xl flex flex-row align-items hover:text-blue-900 hover:font-semibold border-b-2 
          border-secondary pb-2" onClick={() => {
          toggleDropdown()
          if(isDropdownOpen2 == true)toggleDropdown2()}}>
          <span className='cursor-pointer'>Company</span>
          <button className="absolute right-2 mt-2">
            <FiChevronDown className={`${isDropdownOpen ? 'rotate-180' : ''}`}/>
          </button>

          {isDropdownOpen &&(
          <div className="absolute bg-secondary shadow-lg mt-9 text-primary font-light font-open-sans 
          w-full z-10 animate__animated animate__slideInUp">
                  <ul className="py-1">
                    <li>
                      <Link href="/company/executive" className="block px-4 py-1 font-open-sans text-sm hover:font-semibold hover:text-primary border-b-2 border-primary">
                        EXECUTIVE TEAM
                      </Link>
                    </li>
                    <li>
                      <Link href="/company/about" className="block px-4 py-1 font-open-sans text-sm hover:font-semibold hover:text-primary border-b-2 border-primary">
                        ABOUT US
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/category3" className="block px-4 py-1 font-open-sans text-sm hover:font-semibold hover:text-primary border-b-2 border-primary">
                        HISTORY
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/category3" className="block px-4 py-1 font-open-sans text-sm hover:font-semibold hover:text-primary border-b-2 border-primary">
                        NEWS
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/category3" className="block px-4 py-1 font-open-sans text-sm hover:font-semibold hover:text-primary">
                        PERSPECTIVE(BLOG)
                      </Link>
                    </li>
                  </ul>
                </div>)}
          </li>
          <li className="text-xl hover:text-blue-900 hover:font-semibold border-b-2 border-secondary pb-2">
          <Link href="/">Portfolio</Link>
          </li>
          <li className="relative text-xl flex flex-row align-items hover:text-blue-900 hover:font-semibold border-b-2 border-secondary pb-2" onClick={toggleDropdown2}>
          <span className='cursor-pointer'>Services</span>
          <button className="absolute right-2 mt-2">
            <FiChevronDown className={`${isDropdownOpen2 ? 'rotate-180' : ''}`}/>
          </button>

          {isDropdownOpen2 &&(
          <div className="absolute bg-secondary shadow-lg mt-9 text-primary font-light font-open-sans 
          w-full animate__animated animate__slideInUp">
                  <ul className="py-1">
                    <li>
                      <Link href="/services/construction" className="block px-4 py-1 font-open-sans text-sm hover:font-semibold hover:text-primary border-b-2 border-primary">
                        CONSTRUCTION
                      </Link>
                    </li>
                    <li>
                      <Link href="/company/about" className="block px-4 py-1 font-open-sans text-sm hover:font-semibold hover:text-primary border-b-2 border-primary">
                        DEVELOPMENT
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/category3" className="block px-4 py-1 font-open-sans text-sm hover:font-semibold hover:text-primary">
                        PROJECT MANAGEMENT
                      </Link>
                    </li>
                  </ul>
                </div>)}
          </li>
          <li className="text-xl hover:text-blue-900 hover:font-semibold border-b-2 border-secondary pb-2">
          <Link href="/">Careers</Link>
          </li>
          <li className="text-xl hover:text-blue-900 hover:font-semibold border-b-2 border-secondary pb-2">
          <Link href="/">Contact Us</Link>
          </li>
        </ul> 
      </div>
    </div>
  );
}

export default MobileDrawer;