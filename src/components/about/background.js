import Navbar from '../home/navigation';
import Image from 'next/image';

function AboutBackground() {
    const aboutImage = {
      src: '/aboutPic.jpg',
      alt: 'Image 1',
      text: 'About Us'
    }
  
    return (
      <>
      <div className="flex w-full h-[500px] overflow-hidden relative">
          <Image
            src={aboutImage.src}
            alt={aboutImage.alt}
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-primary/30 opacity-50"></div>
          <div className="absolute inset-0 text-secondary p-4 rounded flex items-center justify-center">
            <p className="text-5xl sm:text-7xl font-raleway font-semibold px-4">{aboutImage.text}</p>
          </div>
          <Navbar />
      </div>
      </>
    );
  }
  
  export default AboutBackground;
