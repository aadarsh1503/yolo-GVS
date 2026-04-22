import React from 'react';

const MaryIntroSection = () => {
  return (
    <div className="w-full bg-white pt-4 px-4 md:pt-6 md:px-6 lg:pt-8 lg:px-10 pb-10">
      
      {/* Import Font for handwritten text */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap');
          .font-gloria { font-family: 'Gloria Hallelujah', cursive; }
        `}
      </style>

      {/* Main Teal Container */}
      <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] bg-[#7DC5CC] rounded-[40px] md:rounded-[50px] overflow-hidden flex items-center justify-center shadow-sm">
        
        {/* CENTER: Mary the Cow */}
        <div className="absolute inset-0 flex items-center top-14 justify-center z-10 pt-20">
          <img 
            src="https://res.cloudinary.com/ds1dt3qub/image/upload/v1776776265/Screenshot_2026-04-21_182657-removebg-preview_tgsib5.png" 
            alt="Mary the Cow" 
            className="h-[200px] md:h-[350px] lg:h-[450px] w-auto object-contain transform scale-110 md:scale-125"
          />
        </div>

        {/* LEFT TEXT: "Hi I'm Mary!" */}
        <div className="absolute top-10 left-10 md:top-20 md:left-20 z-20">
          <p className="font-gloria text-white text-[32px] md:text-[50px] lg:text-[64px] -rotate-6">
            Hi I'm Mary!
          </p>
        </div>

        {/* RIGHT TEXT: "Lets see who else..." */}
        <div className="absolute top-[40%] right-6 md:right-16 lg:right-24 z-20 max-w-[200px] md:max-w-[400px]">
          <p className="font-gloria text-white text-[24px] md:text-[40px] lg:text-[52px] leading-tight rotate-3">
            Lets see who else <br /> is in our team!
          </p>
        </div>

        {/* DECORATION: Bottom Left Leaf */}
        <div className="absolute bottom-[-20px] left-[-20px] w-32 md:w-52 lg:w-72 opacity-90 pointer-events-none z-20">
          <img 
            src="https://res.cloudinary.com/ds1dt3qub/image/upload/v1776595937/Screenshot_2026-04-19_161529_qrmyrh-removebg-preview_ciogcv.png" 
            alt="leaf decoration" 
            className="w-full h-auto object-contain"
          />
        </div>

      </section>
    </div>
  );
};

export default MaryIntroSection;