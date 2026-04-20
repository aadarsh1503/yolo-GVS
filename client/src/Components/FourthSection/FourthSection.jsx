import React from 'react';

const FourthSection = () => {
  return (
    <div className="w-full bg-white pt-4 px-4 md:pt-6 md:px-6 lg:pt-8 lg:px-10">
      
      {/* Import Font for "Yo´ok?" */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap');
          .font-gloria { font-family: 'Gloria Hallelujah', cursive; }
        `}
      </style>

      {/* Main Teal Container */}
      <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] bg-[#7DC5CC] rounded-[40px] md:rounded-[50px] overflow-hidden flex items-center shadow-sm">
        
        <div className="container mx-auto px-8 md:px-16 lg:px-20 grid grid-cols-1 lg:grid-cols-2 items-center h-full w-full relative">
          
          {/* Left Side: Large Bold Text */}
          <div className="text-white -mt-44 z-20 select-none flex flex-col justify-center">
            <h1 className="font-sans text-[60px] md:text-[100px] lg:text-[140px] font-black leading-[0.85] uppercase">
              <span className='whitespace-nowrap'>VOTE FOR</span> <br /> OAT!
            </h1>
          </div>

          {/* Right Side: Cow Image */}
          <div className="absolute right-20 -bottom-10 h-[80%] md:h-[90%] lg:h-[130%] z-10 flex items-end justify-end">
            <img 
              src="https://res.cloudinary.com/ds1dt3qub/image/upload/v1776598328/cow-large-bg-11-1440x900-removebg-preview_mnrva2.png" 
              alt="Yook Cow" 
              className="h-full w-auto object-contain transform translate-x-10 lg:translate-x-20"
            />
          </div>
        </div>

        {/* Center/Bottom Content: Handwritten Text and Leaf */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center z-20 pb-4 md:pb-8">
          
          {/* Yo´ok? Text */}
          <p className="font-gloria font-bold  text-white text-[40px] md:text-[60px] lg:text-[90px] -rotate-6 mb-[-20px] md:mb-[-80px]">
            YO´Ok?
          </p>

          {/* Leaf Image */}
          <div className="w-24 md:w-40  lg:w-84 opacity-90 pointer-events-none">
            <img 
              src="https://res.cloudinary.com/ds1dt3qub/image/upload/v1776595937/Screenshot_2026-04-19_161529_qrmyrh-removebg-preview_ciogcv.png" 
              alt="leaf decoration" 
              className="w-full h-auto relative top-10 object-contain"
            />
          </div>
        </div>
        
      </section>
    </div>
  );
};

export default FourthSection;