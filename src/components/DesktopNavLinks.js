import Link from 'next/link';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

export default function DesktopNavLinks({isDropdownOpen, onClick}) {
    
  return (
    <ul className="absolute right-0 flex flex-row space-x-6 text-primary font-open-sans px-12">
      <li className="text-lg hover:text-blue-900 font-cursive font-semibold transition-colors duration-300">
        <Link href="/">Home</Link>
      </li>
      <li className="text-lg hover:text-blue-900 font-cursive font-semibold transition-colors duration-300">
        <Link href="/Company">Company</Link>
      </li>
      <li className="text-lg hover:text-blue-900 font-cursive font-semibold transition-colors duration-300">
        <div className='relative'>
        <button
              className="flex items-center space-x-2 hover:text-gray-400 focus:outline-none"
              onClick={onClick}
            >
              <span>Pages</span>
              <FaChevronDown
                className={`text-gray-400 transition-transform duration-300 ${
                  isDropdownOpen ? 'transform rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`absolute left-0 mt-2 bg-gray-800 rounded-md shadow-lg w-48 z-10 ${
                isDropdownOpen ? 'block' : 'hidden'
              }`}
            >
              <ul className="py-2">
                <li>
                  <Link href="/" className="block px-4 py-2 hover:bg-gray-700 hover:text-white">Services</Link>
                </li>
                <li>
                  <Link href="/" className="block px-4 py-2 hover:bg-gray-700 hover:text-white">Portfolio</Link>
                </li>
                <li>
                  <Link href="/" className="block px-4 py-2 hover:bg-gray-700 hover:text-white">Blog</Link>
                </li>
              </ul>
            </div>
          </div>
      </li>
      <li className="text-lg group hover:text-blue-900 font-cursive font-semibold transition-colors duration-300">
        <Link href="/" className="px-3 py-2 rounded-md text-lg">
          Products
        </Link>
        <div className="hidden group-hover:block mt-5 absolute z-10 w-60 text-secondary font-normal shadow-lg bg-gray-800/50">
                  <ul className="py-1">
                    <li>
                      <Link href="/products/category1" className="block px-4 py-1 font-open-sans text-sm hover:text-blue-900 border-b-2 border-primary">
                        CONSTRUCTION
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/category2" className="block px-4 py-1 font-open-sans text-sm hover:text-blue-900 border-b-2 border-primary">
                        PROJECT MANAGEMENT
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/category3" className="block px-4 py-1 font-open-sans text-sm hover:text-blue-900">
                        DEVELOPMENT
                      </Link>
                    </li>
                  </ul>
                </div>
      </li>
      <li className="text-lg hover:text-blue-900 font-cursive font-semibold transition-colors duration-300">
        <Link href="/">Careers</Link>
      </li>
      <li className="text-lg hover:text-blue-900 font-cursive font-semibold transition-colors duration-300">
        <Link href="/">Contact us</Link>
      </li>
    </ul>
  );
}