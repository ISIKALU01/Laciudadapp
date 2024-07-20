import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { motion, AnimatePresence, useAnimation} from 'framer-motion';
import { useEffect, useRef } from "react";
import { useInView } from 'react-intersection-observer';
import { FaArrowRight } from 'react-icons/fa';
import { register } from "swiper/element/bundle";
register();




const ExploreSection = () => {  
  const swiperRef = useRef(null);

  const controls = useAnimation();
  const controls2 = useAnimation();

  const [ref, inView] = useInView();
  const refs = useRef([]);

  const pulseAnimation = () => {
    controls.start({
      scale: [1, 1.1, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
      },
    });
  };

  useEffect(() => {
    pulseAnimation();
  }, [controls]);

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      navigation: true,
      pagination: true,
      //add this
      injectStyles: [
        ` .swiper {
          position: relative;
          overflow: hidden; /* Prevent the navigation buttons from being clipped */
        }
        
        .swiper-slide {
          position: relative;
          overflow: hidden; /* Prevent the image from clipping the navigation buttons */
        }
        
        .swiper-slide img {
          width: 100%;
          height: auto;
          transition: transform 0.3s ease; /* Add a transition for smooth zooming */
        }

          .swiper-button-next,
          .swiper-button-prev {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            --swiper-navigation-size: 20px; /* Set the navigation button size */
            width: var(--swiper-navigation-size);
            height: var(--swiper-navigation-size);
            z-index: 10;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: rgba(0, 0, 0, 0);
            background-position: center;
            background-size: 10px;
            background-repeat: no-repeat;
            padding: 5px 8px;
            border-radius: 100%;
            color: white;
          }

          .swiper-button-prev {
            background-image: url("/box-arrow-in-left.svg");
            position: absolute;
            top: 50%;
            left: 80px;
          }

          .swiper-button-next {
            background-image: url("/box-arrow-in-right.svg");
            position: absolute;
            top: 50%;
            right: 80px;
          }
          
          .swiper-button-next::after,
          .swiper-button-prev::after {
            content: "";
            font-family: swiper-icons;
            font-size: var(--swiper-navigation-size);
            text-transform: none !important;
            letter-spacing: 0;
            font-variant: initial;
            line-height: 1;
          }

          .swiper-button-prev:hover,
          .swiper-button-next:hover {
             transform: translateY(-50%) scale(1.2); /* Scale the buttons on hover */
          }

          .swiper-pagination-bullet{
            width: 10px;
            height: 10px;
            background-color: blue;
          }

          @media (max-width: 767px) {
            .swiper-button-prev,
            .swiper-button-next {
              display: none;
            }
          }
      `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  useEffect(() => {
    if (inView) {
      controls2.start('visible');
    } else {
      controls2.start('hidden');
    }
  }, [controls2, inView]);




   const exploreImages = [
      {
        id: 1,
        src: '/homepage (1).jpg',
        alt: 'Explore Image 1',
        title: 'WE ARE LA CIUDAD',
        description: 'We are highly skilled in successful construction project execution.',
        button:'Our Projects'
  
      },
      {
        id: 2,
        src: '/homepage (2).jpg',
        alt: 'Explore Image 2',
        title: 'WE ARE DEDICATED',
        description: 'Proven track record in construction project delivery.',
        button:'Latest news'
      },
      {
        id: 3,
        src: '/homepage (3).jpg',
        alt: 'Explore Image 3',
        title: 'WE ARE EXPERIENCED',
        description: 'Exceptional construction project management expertise.',
        button:'Our history'
      },
    ];

  
    return (
      <section className="py-10 bg-secondary">
        <div className="container mx-auto sm:px-7">
          <div className="border-t-2 mx-10 border-tranceblue-400 bg-black/50 h-1 z-10 px-20"></div>
          <h2 className="text-2xl mt-20 pt-10 sm:text-5xl font-thin font-open-sans mb-7 text-tranceblue text-center">Explore with us</h2>
          <div className="relative w-screen max-w-full">
            <div className="rounded-lg shadow-lg overflow-hidden" ref={ref}>
              <motion.div
                className="relative w-screen max-w-full"
                initial={{ scale: 1 }}
                animate={{ scale: 1.1 }}
                transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
              >
                <swiper-container ref={swiperRef} init="false">
                {exploreImages.map((image, index) => (
                  <swiper-slide key={index}>
                  <motion.div className='image-container relative'>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1200}
                    height={480}
                    className="w-full h-[350px] sm:h-[500px] object-cover"
                   />

                  <motion.div className="absolute top-6 right-10 transform -translate-y-1/2 text-white px-4 py-2 rounded-full md:hidden 
                  flex items-center" animate={controls}>
                    <FaArrowRight />
                  </motion.div>
                   
                     
                  <motion.div className="absolute inset-0 bg-primary/20 font-open-sans bg-opacity-40 sm:flex flex-col align-items 
                   justify-center p-[50px] md:p-[100px] text-white" 
                  >
                  <motion.div className="w-[200px] sm:w-[500px] md:p-2 font-[zilla]" 
                   initial="hidden"
                   animate={controls2}
                   variants={{
                     visible: { opacity: 1, y: 0, transition: { duration: 2 } },
                     hidden: { opacity: 0, y: 50 },
                   }}
                    >
                     <h3 className="text-[10px] sm:text-sm font-light mb-2">
                     {image.title}
                     </h3>
                     <p className="text-white text-xl sm:text-4xl lg:text-5xl font-light">
                      {image.description}
                     </p>
                     <button className="mt-4 bg-primary-500 px-4 hover:bg-primary-600 text-center text-white
                     font-light py-2 transition-colors duration-300">
                     <Link href={image.button}>
                     {image.button}
                     </Link>
                    </button>
                   </motion.div>  
                 
                  
                  </motion.div>
                  </motion.div>
                  </swiper-slide>
                ))}
                 </swiper-container>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default ExploreSection;


