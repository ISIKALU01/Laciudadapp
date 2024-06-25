import React from 'react';


export default function Intro() {
        return (
          <>
          <section className="bg-secondary py-20 flex">
            <div className="w-full sm:text-center mx-auto px-10 sm:flex sm:flex-col sm:px-6 lg:px-20 flex flex-col justify-center">
              <h1 className="text-4xl mx-auto text-center sm:text-5xl lg:text-6xl xl:text:7xl font-thin text-tranceblue mb-10 font-open-sans tracking-wide flex justify-center">LA CIUDAD COMPANY</h1>
              <p className="text-sm sm:text-lg font-light text-tranceblue mb-8 font-roboto tracking-normal flex justify-center text-center">La ciudad Company, founded 7 years ago, is a vertically 
              integrated service provider specializing in construction, program management, and real estate development. 
              We believe to effectively contribute and provide impactful service to our clients, we must take a 
              holistic approach to any assignment.
              </p>
              <p className="text-sm sm:text-lg font-light text-tranceblue mb-9 font-roboto tracking-normal flex justify-center text-center">What does that mean to your company? It means that Russell will be a 
              collaborative partner, evaluating potential opportunities through a big picture perspective. With our 
              interest aligned with our clients, we engage our four divisions to provide service within a specific 
              scope.              
              </p>
              <div className="border-t-2 border-tranceblue-400 bg-black/50 h-1 z-10 px-10 mt-20"></div>
            </div>
          </section>
          </>
        );
      };
