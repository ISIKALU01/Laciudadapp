import React, {useState} from 'react';
import Image from 'next/image'
import 'animate.css'



const images = [
  {
    src: '/Rhapsody (1).jpg',
    alt: 'Image 1',
  },
  {
    src: '/Rhapsody (2).jpg',
    alt: 'Image 1',
  },
  {
    src: '/Rhapsody (3).jpg',
    alt: 'Image 1',
  },
  {
    src: '/Rhapsody (4).jpg',
    alt: 'Image 1',
  },
  {
    src: '/Rhapsody (5).jpg',
    alt: 'Image 1',
  },
  {
    src: '/Rhapsody (6).jpg',
    alt: 'Image 1',
  },
  {
    src: '/Rhapsody (7).jpg',
    alt: 'Image 1',
  },
  {
    src: '/Rhapsody (8).jpg',
    alt: 'Image 1',
  },
  {
    src: '/Rhapsody (9).jpg',
    alt: 'Image 1',
  },
  {
    src: '/Rhapsody (10).jpg',
    alt: 'Image 1',
  },
  {
    src: '/carouselone (1).jpg',
    alt: 'Image 1',
  },
  {
    src: '/carouselthree.jpg',
    alt: 'Image 1',
  },
  {
    src: '/carouseltwo (1).jpg',
    alt: 'Image 1',
  },
  {
    src: '/carouselfour (1).jpg',
    alt: 'Image 1',
  },
  {
    src: '/Carouselthree (1).jpg',
    alt: 'Image 1',
  },
  {
    src: '/Rhap (1).jpg',
    alt: 'Image 1',
  },
  {
    src: '/Rhap (2).jpg',
    alt: 'Image 1',
  },{
    src: '/Rhap (3).jpg',
    alt: 'Image 1',
  },
  {
    src: '/Rhap (4).jpg',
    alt: 'Image 1',
  },
  {
    src: '/Rhap (5).jpg',
    alt: 'Image 1',
  },
  {
    src: '/Rhap (6).jpg',
    alt: 'Image 1',
  },
];




export default function Rhapsody() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false)


  const handleClick = (index) => {
    setIsLoading(true);
    setSelectedIndex(index);
    setShowModal(true);
  
  };



    const handleClose = (e) => {
     if (e.target === e.currentTarget || e.target.classList.contains('close-button')) {
      setShowModal(false);
     }
    };

    const handleClose2 = () => {
      setShowModal(false);
    };
  
        return (
          <>
          <section className='bg-secondary'>


            <div className='relative group'>

              <div className="w-full h-72 sm:h-144 sm:h-72 overflow-hidden flex flex-col">
                <Image
                  src="/Rhapsody (2).jpg"
                  alt="Image 1"
                  width={2000}
                  height={1500}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition 
                  duration-300 ease-in-out"
                />
              </div>

              <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black 
              bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 ease-in-out">
                <div className="flex flex-col items-center">
                  <button className="text-black px-4 py-2 hover:bg-primary-200 font-raleway text-secondary 
                  transition duration-300 ease-in-out opacity-0 group-hover:opacity-100"
                  onClick={() => setShowModal(true)}
                 >
                  VIEW
                  </button>
                  <p className='text-secondary font-raleway text-xl font-bold 
                  transition duration-300 ease-in-out opacity-0 group-hover:opacity-100'>Rhapsody </p>
                  <p className='text-secondary font-raleway text-sm 
                  transition duration-300 ease-in-out opacity-0 group-hover:opacity-100'>Project year- 2021 </p>
                  <p className='text-secondary font-raleway text-sm 
                  transition duration-300 ease-in-out opacity-0 group-hover:opacity-100'>Location- Wuse 2, Abuja</p>
                  <p className='text-secondary font-raleway text-sm 
                  transition duration-300 ease-in-out opacity-0 group-hover:opacity-100'>Type: Entertainment and lifestyle</p>
                </div>


                {showModal && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center 
                justify-center z-50 animate__animated animate__fadeIn" onClick={handleClose}>
                  <button className="absolute top-10 right-6 text-white rounded-full p-2 hover:bg-primary
                     transition-colors duration-300 ease-in-out cursor-pointer animate__animated animate__zoomIn"
                     onClick={handleClose2}
                     >
                     <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                     </svg>
                  </button>

                   {/* outer image gallery div */}
                  <div className="bg-white rounded-lg overflow-hidden w-full max-w-5xl relative">

                    {/* image in gallery div */}
                    <div className="relative h-120 overflow-hidden">
                      {isLoading && (
                       <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-100">
                         <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-500 border-t-transparent">
                         </div>
                       </div>
                     )}
                     
                     <Image
                        src={images[selectedIndex].src}
                        alt="Gallery"
                        width={2000}
                        height={1500}
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out"
                        onLoadingComplete={() => setIsLoading(false)}
                      />

                      {/* btns on image div */}
                      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between px-4">
                          <button className="bg-white rounded-full p-2 shadow-md hover:bg-gray-200 transition-colors 
                           duration-300 ease-in-out" onClick={(e) => {
                            e.stopPropagation();
                            handleClick((selectedIndex - 1 + images.length) % images.length)
                          }}
                          >
                            <svg
                              className="w-6 h-6 text-gray-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                              />
                            </svg>
                          </button>
                          <button className="bg-white rounded-full p-2 shadow-md hover:bg-gray-200 transition-colors 
                           duration-300 ease-in-out"
                           onClick={(e) => {
                            e.stopPropagation();
                            handleClick((selectedIndex - 1 + images.length) % images.length)
                          }}
                          >

                          <svg
                            className="w-6 h-6 text-gray-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                          </button>
                      </div>

                      {/* image gallery div */}
                    </div>
                      
                   </div>

                </div>

              )}
              
              {/* top level divs */}
            </div>
            
           </div>


          </section>
        </>
        );
      };
