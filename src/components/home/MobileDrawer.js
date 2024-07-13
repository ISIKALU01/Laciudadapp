import Link from 'next/link';

 
export default function MobileDrawer({ isOpen, onClose }) {
  return (
    <div
      className={`fixed flex flex-col justify-center items-center z-20 top-0 right-0 h-full w-full bg-secondary 
      text-primary text-sm sm:text-md font-open-sans font-normal transition-transform duration-300 transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >

      <button className="absolute top-6 right-6 text-primary focus:outline-none" onClick={onClose}>
        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <ul className="flex flex-col justify-center items-center space-y-4">
        <li className="text-3xl hover:text-blue-900 hover:font-semibold border-b-2 border-primary pb-2">
          <Link href="/">Home</Link>
        </li>
        <li className="text-3xl hover:text-blue-900 hover:font-semibold border-b-2 border-primary pb-2">
          <Link href="/">Company</Link>
        </li>
        <li className="text-3xl hover:text-blue-900 hover:font-semibold border-b-2 border-primary pb-2">
          <Link href="/">Services</Link>
        </li>
        <li className="text-3xl hover:text-blue-900 hover:font-semibold border-b-2 border-primary pb-2">
          <Link href="/">Portfolio</Link>
        </li>
        <li className="text-3xl hover:text-blue-900 hover:font-semibold border-b-2 border-primary pb-2">
          <Link href="/">Careers</Link>
        </li>
        <li className="text-3xl hover:text-blue-900 hover:font-semibold border-b-2 border-primary pb-2">
          <Link href="/">Contact Us</Link>
        </li>
      </ul>
      
    </div>
  );
}