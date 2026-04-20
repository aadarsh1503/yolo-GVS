import React from 'react';

const ContactSection = () => {
  // Custom Icon Wrapper to create that "white splat" background from your image
  const IconWrapper = ({ children }) => (
    <div className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 mr-3 shrink-0">
      {/* Hand-drawn looking white blob background */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="white">
        <path d="M91.3,47.3c1.6,12.5-5.1,26.4-15.1,35c-10,8.6-23.7,11.8-36.8,9.4c-13.1-2.4-25.5-10.4-31.4-22.3 C2.1,57.5,1.9,43.4,7.4,31.4c5.5-12,16.8-21.8,29.9-25c13.1-3.2,28.1,0.1,38.6,8.4C86.4,23.1,89.7,34.8,91.3,47.3z" />
      </svg>
      <div className="relative z-10 text-[#00A3B1]">
        {children}
      </div>
    </div>
  );

  return (
    <div className="w-full bg-white pt-4 px-4 md:pt-6 md:px-6 lg:pt-8 lg:px-10 pb-10">
      {/* Import Gloria Hallelujah Font */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap');
          .font-gloria { font-family: 'Gloria Hallelujah', cursive; }
        `}
      </style>

      {/* Main Teal Container */}
      <section className="relative w-full min-h-[600px] bg-[#00A3B4] rounded-[40px] md:rounded-[50px] overflow-hidden p-8 md:p-16 lg:p-20 shadow-sm">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 relative z-10">
          
          {/* LEFT COLUMN: INFO */}
          <div>
            <h2 className="font-gloria text-white text-4xl md:text-5xl lg:text-6xl mb-12">
              Yook Production AS
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4 text-white font-sans font-bold text-[13px] md:text-sm">
              <div className="flex items-center">
                <IconWrapper>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </IconWrapper>
                <span>ken@yook.eu</span>
              </div>
              <div className="flex items-center">
                <IconWrapper>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </IconWrapper>
                <span>YOOKeu</span>
              </div>
              <div className="flex items-center">
                <IconWrapper>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </IconWrapper>
                <span>yook_global</span>
              </div>
              <div className="flex items-center">
                <IconWrapper>
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </IconWrapper>
                <span>yook_eesti</span>
              </div>
              <div className="flex items-center">
                <IconWrapper>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
                </IconWrapper>
                <span>YOOK</span>
              </div>
              <div className="flex items-center">
                <IconWrapper>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </IconWrapper>
                <span>yookproduction</span>
              </div>
              <div className="flex items-start md:col-span-2 mt-4">
                <IconWrapper>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </IconWrapper>
                <span className="pt-2">Türi, Viljandi 11a, Järva County,<br />72212, Estonia</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: FORM */}
          <div className="flex flex-col">
            <h2 className="font-gloria text-white text-4xl md:text-5xl lg:text-6xl mb-10">
              Contact
            </h2>

            <form className="space-y-6 w-full max-w-lg">
              <div>
                <label className="block text-white font-bold mb-2 ml-1">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-[#7DC5CC]/40 border-none rounded-2xl p-4 text-white placeholder-white/70 focus:ring-2 focus:ring-white outline-none h-14"
                />
              </div>
              <div>
                <label className="block text-white font-bold mb-2 ml-1">E-mail</label>
                <input 
                  type="email" 
                  className="w-full bg-[#7DC5CC]/40 border-none rounded-2xl p-4 text-white placeholder-white/70 focus:ring-2 focus:ring-white outline-none h-14"
                />
              </div>
              <div>
                <label className="block text-white font-bold mb-2 ml-1">Message</label>
                <textarea 
                  rows="4"
                  className="w-full bg-[#7DC5CC]/40 border-none rounded-2xl p-4 text-white placeholder-white/70 focus:ring-2 focus:ring-white outline-none resize-none"
                ></textarea>
              </div>
              <div className="flex justify-end pt-2">
                <button 
                  type="button" 
                  className="bg-[#008A96] hover:bg-[#007681] text-white font-black px-12 py-3 rounded-2xl text-xl transition-all shadow-md uppercase"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Left Leaf Decoration */}
        <div className="absolute bottom-[-30px] left-[-20px] w-48 md:w-64 lg:w-80 opacity-90 pointer-events-none z-0">
          <img 
            src="https://res.cloudinary.com/ds1dt3qub/image/upload/v1776595937/Screenshot_2026-04-19_161529_qrmyrh-removebg-preview_ciogcv.png" 
            alt="decoration" 
            className="w-full h-auto object-contain transform -rotate-12"
          />
        </div>
        
      </section>
    </div>
  );
};

export default ContactSection;