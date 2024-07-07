// components/BackToTop.js
import { useState, useEffect } from 'react';
import 'animate.css';


const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > window.innerHeight * 2) {
      setIsVisible(true);
      setIsAnimated(true);
    } else {
      setIsVisible(false);
      setIsAnimated(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  useEffect(() => {
    let timeoutId;

    if (isAnimated) {
      timeoutId = setTimeout(() => {
        setIsAnimated(false);
        setTimeout(() => {
          setIsAnimated(true);
        }, 100);
      }, 1000);
    }

    return () => clearTimeout(timeoutId);
  }, [isAnimated]);

  return (
    <>
      {isVisible && (
        <button
          className={`fixed bottom-20 right-20 bg-primary/50 text-secondary px-4 py-4  shadow-md 
          hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
         ${
            isAnimated
              ? 'animate__animated animate__bounce'
              : 'animate__animated animate__bounceOut'
          }`}
          style={{
            borderRadius: '50%',
          }}
          onClick={scrollToTop}
        >
          <svg
            className="h-5 w-5 sm:w-10 sm:h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default BackToTop;