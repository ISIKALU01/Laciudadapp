import Link from 'next/link';

export default function DesktopNavLinks() {
    
  return (
    <ul className="absolute right-0 flex flex-row space-x-6 text-secondary font-open-sans px-12">
      <li className="text-lg hover:text-blue-900 font-cursive font-semibold transition-colors duration-300">
        <Link href="/">Home</Link>
      </li>
      <li className="text-lg hover:text-blue-900 font-cursive font-semibold transition-colors duration-300">
        <Link href="/">Company</Link>
      </li>
      <li className="text-lg hover:text-blue-900 font-cursive font-semibold transition-colors duration-300">
        <Link href="/">Services</Link>
      </li>
      <li className="text-lg hover:text-blue-900 font-cursive font-semibold transition-colors duration-300">
        <Link href="/">Portfolio</Link>
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