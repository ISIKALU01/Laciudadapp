import React, { useState, useEffect } from 'react';
import Navbar from './navigation'
import Image from 'next/image';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {ReactTyped} from "react-typed";







const ImageCarousel = ({ images, interval=10000}) => {
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, images.length, interval]);

  const handlePrevious = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div>
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer z-10 md:w-10 md:h-10 w-8 h-8">
        <NavigateBeforeIcon onClick={handlePrevious} fontSize="large" />
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer z-10 md:w-10 md:h-10 w-8 h-8">
        <NavigateNextIcon onClick={handleNext} fontSize="large" />
      </div>
      <div className="sm:flex lg:hidden w-full sm:h-[80vh] overflow-hidden h-[500px] relative">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          layout="fill"
          className="object-cover" 
          loading="lazy"
        />
        <div className="absolute w-full inset-0 bg-primary/30 mx-auto flex flex-col align-items items-center justify-center">
          <h1 className="w-full text-center text-secondary text-1xl font-cinzel font-bold px-[20px]">
          {/* <ReactTyped strings={[images[currentIndex].text]} typeSpeed={20} /> */}
          <ReactTyped
            strings={[images[currentIndex].text]}
            typeSpeed={20}
            cursorChar=""
          />
          </h1>        
        </div>
        <Navbar />
      </div>
      <div className="hidden lg:flex w-full h-[100vh] overflow-hidden relative">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          className="block"
        />
        <div className="absolute w-full inset-0 bg-primary/30 font-cinzel mx-auto flex flex-col align-items items-center justify-center">
          <h1 className="w-full text-center text-secondary text-3xl font-cinzel font-bold px-[100px]">
          {/* <ReactTyped strings={[images[currentIndex].text]} typeSpeed={20} /> */}
          <ReactTyped
            strings={[images[currentIndex].text]}
            typeSpeed={20}
            cursorChar=""
          />
          </h1>
        </div>
        <Navbar />
      </div>

    </div>
  );
};

export default ImageCarousel;