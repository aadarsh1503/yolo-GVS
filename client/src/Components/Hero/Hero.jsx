import React from 'react';

const HeroSection = () => {
  return (
    // Outer Wrapper: Adds that small "little bit" of padding from top, left, and right
    <div className="w-full bg-white pt-4 px-4 md:pt-6 md:px-6 lg:pt-8 lg:px-10">
      
      {/* Import Google Fonts */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&family=Caveat:wght@700&display=swap');
          .font-nordic { font-family: 'Montserrat', sans-serif; }
          .font-handwritten { font-family: 'Caveat', cursive; }
        `}
      </style>

      {/* Main Blue Container */}
      <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] bg-[#264E36] rounded-[40px] md:rounded-[50px] overflow-hidden flex items-center shadow-sm">
        
        <div className="container mx-auto px-8 md:px-16 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full w-full">
          
          {/* Left Side: Text Content */}
          <div className="text-white z-20 select-none mt-20 flex flex-col justify-center">
            <h1 className="font-sans text-[55px] -mt-56 md:text-[90px] font-black lg:text-[128px] leading-[0.9] uppercase">
                <span></span>
              THE NEW <br />
              <span className="block">NORDIC</span>
            </h1>
            <p className="font-gloria -rotate-4 text-[40px] md:text-[70px] lg:text-[90px] -mt-2 md:-mt-6 ml-4 lowercase opacity-95">
              oat drink
            </p>
          </div>

          {/* Right Side: Product Image (Centered Vertically) */}
          <div className="relative h-full flex right-20 mt-18 items-center justify-center lg:justify-end z-10">
            <img 
              src="https://yook.eu/static/hero-yook-1440x562.png.webp" 
              alt="Yook Oat Drink range" 
              className="w-full max-w-[90%] lg:max-w-none h-56 object-contain transform scale-110 md:scale-125 lg:scale-140 translate-x-0 lg:translate-x-12"
            />
          </div>
        </div>

        {/* Decoration: Bottom Center Oat Sprout */}
       {/* Decoration: Bottom Center Image */}
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 md:w-52 lg:w-64 opacity-90 pointer-events-none z-10">
  <img 
    src="https://res.cloudinary.com/ds1dt3qub/image/upload/v1776595937/Screenshot_2026-04-19_161529_qrmyrh-removebg-preview_ciogcv.png" 
    alt="decoration" 
    className="w-full h-auto object-contain"
  />
</div>


        
      </section>
    </div>
  );
};

export default HeroSection;