import React from 'react';

const ProductsSection = () => {
  const products = [
    { name: "Natural YOOKGURT", img: "https://yook.eu/static/yook-gurt_natural_350g.png.webp" },
    { name: "Passion-flavored YOOKGURT", img: "https://yook.eu/static/yook-gurt_passionfruit_150g.png.webp" },
    { name: "Cherry-flavored YOOKGURT", img: "https://yook.eu/static/yook-gurt_cherry_150g.png.webp" },
    { name: "Extra Creamy Barista Oat Drink", img: "https://yook.eu/static/img_1595.png.webp" },
    { name: "Orange & Cardamom Barista Oat Drink", img: "https://yook.eu/static/img_1593.png.webp" },
    { name: "Chocolate Oat Drink", img: "https://yook.eu/static/img_1596.png.webp" },
    { name: "Mango Oat Drink", img: "https://yook.eu/static/img_1597.png.webp" },
    { name: "Organic Barista Oat Drink", img: "https://yook.eu/static/img_1600.png.webp" },
    { name: "Vitamins & Calcium Oat Drink", img: "https://yook.eu/static/img_1599.png.webp" },
    { name: "Gluten-Free Barista Oat Drink", img: "https://yook.eu/static/img_1598.png.webp" },
    { name: "Organic Oat Drink", img: "https://yook.eu/static/img_1586.png.webp" },
  ];

  return (
    <div className="w-full bg-white pt-4 px-4 md:pt-6 md:px-6 lg:pt-8 lg:px-10 pb-10">
      
      {/* Main Teal Container */}
      <section className="relative w-full bg-[#264E36] rounded-[40px] md:rounded-[50px] overflow-hidden px-8 md:px-16 lg:px-20 py-16 shadow-sm">
        
        {/* Heading */}
        <h1 className="text-white font-black uppercase text-[50px] md:text-[70px] lg:text-[88px] leading-none mb-16 select-none">
          Products
        </h1>

        {/* Products Container (Flex used for centering last items) */}
        <div className="flex flex-wrap justify-center gap-y-16 gap-x-4 md:gap-x-10 relative z-10">
          {products.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center group w-full md:w-[calc(45%)] lg:w-[calc(30%)]"
            >
              {/* Product Image Wrapper */}
              <div className="h-64 md:h-80 w-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              
              {/* Product Name */}
              <h3 className="text-white font-black uppercase text-center mt-6 text-lg md:text-xl lg:text-2xl leading-tight max-w-[280px]">
                {item.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Decoration: Bottom Left Leaf */}
        <div className="absolute bottom-[-20px] left-[-20px] w-40 md:w-60 lg:w-72 opacity-90 pointer-events-none z-20">
          <img 
            src="https://res.cloudinary.com/ds1dt3qub/image/upload/v1776595937/Screenshot_2026-04-19_161529_qrmyrh-removebg-preview_ciogcv.png" 
            alt="leaf decoration left" 
            className="w-full h-auto object-contain transform -rotate-12"
          />
        </div>

        {/* Decoration: Bottom Right Leaf */}
        <div className="absolute bottom-[-20px] right-[-20px] w-40 md:w-60 lg:w-72 opacity-90 pointer-events-none z-20">
          <img 
            src="https://res.cloudinary.com/ds1dt3qub/image/upload/v1776595937/Screenshot_2026-04-19_161529_qrmyrh-removebg-preview_ciogcv.png" 
            alt="leaf decoration right" 
            className="w-full h-auto object-contain transform scale-x-[-1] rotate-12"
          />
        </div>

      </section>
    </div>
  );
};

export default ProductsSection;