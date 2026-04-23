import React from 'react';

const OurTeamSection = () => {
  // Custom Icon Wrapper for the "white splat" background
  const IconWrapper = ({ children }) => (
    <div className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 mr-3 shrink-0">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="white">
        <path d="M91.3,47.3c1.6,12.5-5.1,26.4-15.1,35c-10,8.6-23.7,11.8-36.8,9.4c-13.1-2.4-25.5-10.4-31.4-22.3 C2.1,57.5,1.9,43.4,7.4,31.4c5.5-12,16.8-21.8,29.9-25c13.1-3.2,28.1,0.1,38.6,8.4C86.4,23.1,89.7,34.8,91.3,47.3z" />
      </svg>
      <div className="relative z-10 text-[#264E36]">
        {children}
      </div>
    </div>
  );

  const team = [
    {
      title: "YOOK PRODUCTION",
      role: "WRITE US",
      phone: "+372 385 7006",
      email: "yook@yook.eu"
    },
    {
      title: "KATRE KÕVASK",
      role: "CEO",
      phone: "+372 511 5004",
      email: "katre@yook.eu"
    },
    {
      title: "KEN KOIT",
      role: "SALES",
      phone: "+372 5555 5507",
      email: "ken@yook.eu"
    }
  ];

  return (
    <div className="w-full bg-white pt-4 px-4 md:pt-6 md:px-6 lg:pt-8 lg:px-10 pb-10">
      
      {/* Main Teal Container */}
      <section className="relative w-full min-h-[600px] bg-[#264E36] rounded-[40px] md:rounded-[50px] overflow-hidden p-8 md:p-16 lg:p-20 shadow-sm">
        
        {/* Main Heading - 128px */}
        <h1 className="text-white font-black uppercase text-[50px] md:text-[90px] lg:text-[128px] leading-none mb-16 relative z-10">
          Our Team
        </h1>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 relative z-10">
          {team.map((member, index) => (
            <div key={index} className="text-white">
              <div className="mb-6">
                <h3 className="font-black text-lg md:text-xl uppercase leading-tight">{member.title}</h3>
                <h4 className="font-black text-lg md:text-xl uppercase leading-tight">{member.role}</h4>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <IconWrapper>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </IconWrapper>
                  <span className="font-bold text-sm md:text-base">{member.phone}</span>
                </div>
                <div className="flex items-center">
                  <IconWrapper>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </IconWrapper>
                  <span className="font-bold text-sm md:text-base">{member.email}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decoration: Bottom Left Leaf */}
        <div className="absolute bottom-[-20px] left-[-20px] w-40 md:w-56 lg:w-72 opacity-90 pointer-events-none z-0">
          <img 
            src="https://res.cloudinary.com/ds1dt3qub/image/upload/v1776595937/Screenshot_2026-04-19_161529_qrmyrh-removebg-preview_ciogcv.png" 
            alt="decoration left" 
            className="w-full h-auto object-contain transform -rotate-12"
          />
        </div>

        {/* Decoration: Bottom Right Leaf */}
        <div className="absolute bottom-[-20px] right-[-20px] w-40 md:w-56 lg:w-72 opacity-90 pointer-events-none z-0">
          <img 
            src="https://res.cloudinary.com/ds1dt3qub/image/upload/v1776595937/Screenshot_2026-04-19_161529_qrmyrh-removebg-preview_ciogcv.png" 
            alt="decoration right" 
            className="w-full h-auto object-contain transform scale-x-[-1] rotate-12"
          />
        </div>
        
      </section>
    </div>
  );
};

export default OurTeamSection;