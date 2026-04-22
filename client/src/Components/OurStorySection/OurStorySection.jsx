import React from 'react';

const OurStorySection = () => {
  return (
    <div className="w-full bg-white pt-10 pb-20 px-6 md:px-16 lg:px-48">
      
      {/* Import Gloria Hallelujah Font */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap');
          .font-gloria { font-family: 'Gloria Hallelujah', cursive; }
        `}
      </style>

      <div className="max-w-6xl">
        {/* Main Heading - 96px */}
        <h1 className="font-gloria text-[#00A3B4] font-bold text-[55px] md:text-[80px] lg:text-[96px] leading-tight mb-12">
          Our Story
        </h1>

        {/* Body Text - 28px */}
        <div className="font-gloria text-[#00A3B4]  text-[20px] md:text-[24px] lg:text-[28px] leading-[1.4] space-y-12">
          
          <p>
            But why smartphones, laptops or electric cars? Why the surge in aeronautics, 
            astronautics and medicine? Progress on human rights, sustainability and innovative 
            technology? Why should the food industry be left out? Or beverages? We are 
            constantly evolving, and it seems absurd to think that we’ve somehow peaked 
            when it comes to milk. No progress, no ambition. Just turn off the lights and 
            make our way back to the cave. No way.
          </p>

          <p>
            YOOK is the next step in the evolution of beverages. We crave something new, 
            something more environmentally friendly and with more flavour. Something that 
            uses drastically fewer resources to produce whilst also tasting infinitely better 
            than dairy milk. We want to move forward, to try something new. We want to 
            connect with new favourites and explore interesting alternatives, not hurl 
            stones at mammoths, you know?
          </p>

          <p>
            YOOK presents a fresh new outlook if you’re looking for great taste and an 
            alternative to traditional milk. Our recipe is as simple as it gets – the best 
            Nordic organic oats combined with modern technology.
          </p>

          <p>
            So don’t mess with the cows and try the new YOOK! It’s simply a hundred times better.
          </p>

        </div>
      </div>
    </div>
  );
};

export default OurStorySection;