import React from 'react';

const Videosection = () => {
  return (
    // Outer Wrapper: Same padding as before
    <div className="w-full bg-white pt-4 px-4 md:pt-6 md:px-6 lg:pt-8 lg:px-10">
      
      {/* Main Blue Container */}
      <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] bg-[#7DC5CC] rounded-[40px] md:rounded-[50px] overflow-hidden shadow-sm">
        
        {/* Background Video */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover"
        >
          <source src="https://yook.eu/static/yook-barista-oat-drink.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

      </section>
    </div>
  );
};

export default Videosection;