import React from 'react';

const ThirdSection = () => {
  return (
    // Outer Wrapper: Keeps the same padding from top, left, and right
    <div className="w-full bg-white pt-4 px-4 md:pt-6 md:px-6 lg:pt-8 lg:px-10">
      
      {/* Main Container */}
      <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] bg-[#264E36] rounded-[40px] md:rounded-[50px] overflow-hidden shadow-sm flex items-center">
        
        {/* Left Side: Background Image (z-0) */}
        <img 
          src="https://res.cloudinary.com/ds1dt3qub/image/upload/v1776929267/image-Picsart-AiImageEnhancer_pupaia.png" 
          alt="Yook Lifestyle" 
          className="absolute inset-0 w-full h-full object-cover object-left z-0"
        />

        {/* Content Layer (Grid for layout) */}
        <div className="container mx-auto px-8 md:px-16 lg:px-20 grid grid-cols-1 lg:grid-cols-2 h-full w-full relative">
          
          {/* Left Spacer (Hidden on mobile if text needs to stack) */}
          <div className="hidden lg:block"></div>

          {/* Right Side: Text Content (z-100) */}
          <div className="flex flex-col justify-center items-start z-[100] text-white">
            <h2 className="font-sans text-[24px] -mt-20 md:text-[40px] lg:text-[45px] font-black leading-[1.1] uppercase max-w-2xl">
              YOOK – „ARE YOU OK?“ IS NOT A QUESTION. IT IS AN ANSWER. 
              STEP OUT OF YOUR DAILY ROUTINE AND YOU WILL SEE YOURSELF 
              AND THE WORLD 100 X BETTER!
            </h2>
          </div>
        </div>

        {/* Decoration: Bottom Right Flower Image (z-100) */}
        <div className="absolute bottom-4 right-4 md:-bottom-4 md:right-10 w-32 md:w-48 lg:w-64 z-[100] pointer-events-none">
          <img 
            src="https://res.cloudinary.com/ds1dt3qub/image/upload/v1776595937/Screenshot_2026-04-19_161529_qrmyrh-removebg-preview_ciogcv.png" 
            alt="flower decoration" 
            className="w-full h-auto object-contain"
          />
        </div>
        
      </section>
    </div>
  );
};

export default ThirdSection;