


export default function MobileMenuButton({ onClick }) {
  return (
    <button className="absolute right-2 top-5 text-center p-4 hover:text-blue-900 text-secondary focus:outline-none" onClick={onClick}>
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  );
}