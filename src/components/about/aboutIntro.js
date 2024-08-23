import React from 'react';


export default function AboutIntro() {
        return (
          <>
          <section className="bg-secondary pt-20 flex">
            <div className="w-full sm:text-center px-10 sm:flex sm:flex-col sm:px-6 lg:px-20 flex flex-col justify-center">
              <h1 className="text-2xl mx-auto text-center sm:text-5xl font-light text-tranceblue 
              mb-10 font-cinzel flex justify-center">LA CIUDAD COMPANY</h1>
              <p className="text-sm sm:text-lg font-light text-tranceblue mb-8 font-cormorant-garamond tracking-normal flex justify-center 
              text-center">
              By relentlessly pursuing innovation and excellence, we aspire to leave a lasting legacy of exceptional 
              craftsmanship and unwavering integrity. We aim to set a standard for others to follow, 
              inspiring the industry with our commitment to pushing boundaries and surpassing expectations.
              </p>
              <p className="text-sm sm:text-lg font-light text-tranceblue mb-8 font-cormorant-garamond tracking-normal flex justify-center 
              text-center">
                We pay meticulous attention to detail, ensuring maximum satisfaction for both corporate and individual 
                clients alike. Our dedication to excellence permeates every aspect of our work, from the initial concept 
                to the final execution. By upholding the highest standards of quality and professionalism, 
                we aim to exceed expectations and build lasting relationships with our valued clients.
              </p>
              <div className="border-t-3 border-tranceblue-400 bg-black/50 h-1 z-10 px-10 mt-20"></div>
            </div>
          </section>
          </>
        );
      };
