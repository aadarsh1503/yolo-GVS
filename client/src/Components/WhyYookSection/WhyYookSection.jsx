import React from 'react';
import OurStorySection from '../OurStorySection/OurStorySection';

const WhyYookSection = () => {
  return (
 <>
    <div className="w-full bg-white relative pt-4 px-4 md:pt-6 md:px-6 lg:pt-8 lg:px-10 pb-20">
      
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap');
          .font-gloria { font-family: 'Gloria Hallelujah', cursive; }
        `}
      </style>

   
      <section className="relative w-full h-[500px] md:h-[650px] lg:h-[750px] bg-[#7DC5CC] rounded-[40px] md:rounded-[50px] overflow-hidden flex items-center shadow-sm">
        
        <div className="container mx-auto px-8 md:px-16 lg:px-20 h-full w-full relative">
          
          {/* Left Side: Text */}
          <div className="text-white z-20 select-none pt-16 md:pt-24 flex flex-col justify-start h-full">
            <h1 className="font-sans text-[60px] md:text-[100px] lg:text-[130px] font-black leading-[0.85] uppercase">
              WHY <br /> YOOK?
            </h1>
            <p className="font-gloria text-[30px] md:text-[50px] lg:text-[60px] mt-4 md:mt-8 leading-tight opacity-95">
              Let me tell you a <br /> story...
            </p>
          </div>

          {/* Right Side: Cow Image */}
          <div className="absolute right-[-1%] justify-end bottom-0 h-[85%] md:h-[95%] lg:h-[80%] z-10 flex items-end">
            <img 
              src="https://res.cloudinary.com/ds1dt3qub/image/upload/v1776774198/download_5_ptp6fe.png" 
              alt="Yook Cow" 
              className="h-full w-auto object-contain"
            />
          </div>
        </div>
      </section>

      
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2  z-100 w-[100px] md:w-[20px] lg:w-[300px]">
        <img 
          src="https://res.cloudinary.com/ds1dt3qub/image/upload/v1776774319/download_6_v8elko.png" 
          alt="The Story of Yook Book" 
          className="w-full h-auto drop-shadow-2xl" 
        />
      </div>
        
    </div>
    <OurStorySection />
    </>
  );
};

export default WhyYookSection;