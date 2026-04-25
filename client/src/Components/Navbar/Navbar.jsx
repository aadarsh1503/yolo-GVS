import React, { useState } from 'react';

const Navbar = () => {
  const [activeLang, setActiveLang] = useState('EN');

  const navLinks = [
    { name: 'PRODUCTS', href: '/products' },
    { name: '100 X BETTER', href: '/100x-better' },
    { name: 'WHY YOOK', href: '/why-Yook' },
    { name: 'CONTACTS', href: '/team-contact' },
  ];

  return (
    <nav className="w-full bg-white py-6 px-4 md:px-10 lg:px-20 flex items-center justify-between  top-0 z-[1000]">
      
      {/* LEFT: Logo */}
      <div className="flex-shrink-0">
        <a href='/'>
        <h1 className="text-[#264E36] text-4xl md:text-5xl font-black tracking-tighter select-none cursor-pointer">
          YOOK
        </h1>
        </a>
      </div>

      {/* RIGHT: Desktop Menu */}
      <div className="hidden lg:flex items-center space-x-8 xl:space-x-12">
        {/* Navigation Links */}
        <div className="flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#264E36] font-black text-sm lg:text-[20px] hover:opacity-70 transition-opacity uppercase tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Language Switcher */}
        <div className="flex items-center space-x-4 border-l border-[#264E36]/20 pl-8 ml-4">
          <button
            onClick={() => setActiveLang('EN')}
            className={`font-black text-sm xl:text-base transition-colors ${
              activeLang === 'EN' ? 'text-[#264E36]' : 'text-[#264E36]/40'
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setActiveLang('UR')}
            className={`font-black text-sm xl:text-base transition-colors ${
              activeLang === 'UR' ? 'text-[#264E36]' : 'text-[#264E36]/40'
            }`}
          >
          العربية
          </button>
        </div>
      </div>

      {/* Mobile Menu Icon (Visible on small screens) */}
      <div className="lg:hidden">
        <button className="text-[#264E36]">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;