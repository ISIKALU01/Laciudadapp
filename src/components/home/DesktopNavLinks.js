import Link from 'next/link';
import React, {useEffect, useState} from 'react';

export default function DesktopNavLinks() {
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const [closeTimeoutId, setCloseTimeoutId] = useState(null);

  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [closeTimeoutIds, setCloseTimeoutIds] = useState({});

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(index);
  };

  const closeDropdown = (index) => {
    const timeoutId = setTimeout(() => {
      setOpenDropdownIndex(null);
      setCloseTimeoutIds((prevIds) => ({
        ...prevIds,
        [index]: null,
      }));
    }, 500);
    setCloseTimeoutIds((prevIds) => ({
      ...prevIds,
      [index]: timeoutId,
    }));
  };

  const cancelCloseDropdown = (index) => {
    if (closeTimeoutIds[index]) {
      clearTimeout(closeTimeoutIds[index]);
      setCloseTimeoutIds((prevIds) => ({
        ...prevIds,
        [index]: null,
      }));
    }
  };
 
    
  return (
    <ul className="absolute right-20 flex flex-row space-x-6 font-semibold font-open-sans text-primary px-12">
      <li className="text-lg hover:text-blue-900 transition-colors duration-300">
        <Link href="/">Home</Link>
      </li>
      <li className={`text-lg group hover:text-blue-900 transition-colors duration-300 
      ${openDropdownIndex === 0 ? 'open' : ''}`}
      onMouseEnter={() => toggleDropdown(0)}
      onMouseLeave={() => closeDropdown(0)}
      onFocus={() => toggleDropdown(0)}
      onBlur={() => closeDropdown(0)}
      onClick={() => toggleDropdown(0)}>
        <span className="px-3 py-2 rounded-md text-lg cursor-pointer">
          Company
        </span>
        {openDropdownIndex === 0 &&(
          <div className='mt-5 absolute z-10 w-60 text-secondary font-normal shadow-lg bg-gray-800/50' 
          onMouseEnter={() => cancelCloseDropdown(0)} onMouseLeave={() => closeDropdown(0)}>
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
                        PERSPECTIVES(BLOG)
                      </Link>
                    </li>
                  </ul>
                </div>)}
        
      </li>
      <li className="text-lg hover:text-blue-900 transition-colors duration-300">
        <Link href="/">Portfolio</Link>
      </li>
      <li className={`text-lg group hover:text-blue-900 transition-colors duration-300 
      ${openDropdownIndex === 1 ? 'open' : ''}`}
      onMouseEnter={() => toggleDropdown(1)}
      onMouseLeave={() => closeDropdown(1)}
      onFocus={() => toggleDropdown(1)}
      onBlur={() => closeDropdown(1)}
      onClick={() => toggleDropdown(1)}>
        <span className="px-3 py-2 cursor-pointer rounded-md text-lg">
          Services
        </span>
        {openDropdownIndex === 1 &&(
          <div className='mt-5 absolute z-10 w-60 text-secondary font-normal shadow-lg bg-gray-800/50' 
          onMouseEnter={() => cancelCloseDropdown(1)} onMouseLeave={() => closeDropdown(1)}>
                  <ul className="py-1">
                    <li>
                      <Link href="/products/category1" className="block px-4 py-1 font-open-sans text-sm hover:font-semibold hover:text-primary border-b-2 border-primary">
                        DEVELOPMENT
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/construction" className="block px-4 py-1 font-open-sans text-sm hover:font-semibold hover:text-primary border-b-2 border-primary">
                        CONSTRUCTION
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
      <li className="text-lg hover:text-blue-900 transition-colors duration-300">
        <Link href="/">Careers</Link>
      </li>
      <li className="text-lg hover:text-blue-900 transition-colors duration-300">
        <Link href="/">Contact us</Link>
      </li>
    </ul>
  );
}