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
              La Ciudad Construction Limited epitomizes excellence, innovation, and 
              integrity in the construction and electrical services sector. With a rich history of delivering exceptional 
              results, we have solidified our position as a trusted partner for clients seeking top-tier craftsmanship, 
              unmatched service, and forward-thinking solutions.
              </p>
              <div className="border-t-3 border-tranceblue-400 bg-black/50 h-1 z-10 px-10 mt-20"></div>
            </div>
          </section>
          </>
        );
      };
