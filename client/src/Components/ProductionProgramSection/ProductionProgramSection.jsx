import React from 'react';

const ProductionProgramSection = () => {
  return (
    <div className="w-full bg-white py-6 md:py-10 px-4 md:px-10 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-x-12 items-center">
        
        {/* LEFT SIDE: LOGOS (Compact and narrow) */}
        <div className="lg:col-span-2 flex flex-col space-y-8">
          <img 
            src="https://yook.eu/static/kaasrahastanud-el-en.png" 
            alt="EU" 
            className="h-14 w-auto object-contain object-left"
          />
          <img 
            src="https://yook.eu/static/eas-next-gen.webp" 
            alt="NextGen" 
            className="h-14 w-auto object-contain object-left"
          />
          <img 
            src="https://yook.eu/static/mak-pria-logo.jpeg" 
            alt="PRIA" 
            className="h-16 w-auto object-contain object-left"
          />
          <img 
            src="https://yook.eu/static/leader-eesti-logo.png" 
            alt="Leader" 
            className="h-14 w-auto object-contain object-left"
          />
        </div>

        {/* MIDDLE: TEXT CONTENT (Compact font sizes) */}
        <div className="lg:col-span-5 text-[#264E36] flex flex-col space-y-6">
          <div>
            <h3 className="font-black text-[13px] uppercase mb-1">Yook Production’s Development Program 2025-2026.</h3>
            <p className="text-[11px] leading-tight opacity-90">
              The project is financed from the funds of the European Union Cohesion Fund. The project focuses on the development of new herbal products, development of business processes and quality certificates. Grant: 84 830,70 EUR.
            </p>
          </div>

          <div>
            <h3 className="font-black text-[13px] uppercase mb-1">Digitalisation of Yook Production AS.</h3>
            <p className="text-[11px] leading-tight opacity-90">
              Funded via NextGenerationEU recovery plan. Aims to enhance digitalisation and efficiency through centralised software adoption. Total funding provided: €44,951.70.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-[11px] leading-tight">
              <span className="font-black uppercase">PRIA allocated EUR 999,606.80</span> for a production line, solar farm construction, building extension and steam generators.
            </p>
            <p className="text-[11px] leading-tight">
              <span className="font-black uppercase">PRIA allocated EUR 250 000</span> for a capper to ensure and increase production volume.
            </p>
          </div>

          <div>
            <p className="text-[11px] leading-tight font-black uppercase">
              PRIA allocated EUR 9995.40 for shelving units for the oat drink processing plant.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: YO GRAPHIC & BRAND TEXT */}
        <div className="lg:col-span-5 relative flex items-center justify-end h-[350px]">
          
          {/* THE YO IMAGE (Visible background layer) */}
          <div className="absolute right-[-10%] lg:right-[-20%] w-[120%] lg:w-[140%] h-full z-0 flex items-center justify-center">
            <img 
              src="https://yook.eu/wp-content/themes/yook/assets/images/YOOK-logo-short.png" 
              alt="YO" 
              className="w-full h-full object-contain  "
            />
          </div>
          
          {/* OVERLAY TEXT (Top layer) */}
          <div className="relative z-[100] text-right pr-4">
            <h2 className="text-[#264E36] font-black text-3xl md:text-4xl lg:text-[28px] leading-[0.95] uppercase tracking-tighter">
              Yook
              Production AS <br />
              <span className="text-2xl md:text-3xl lg:text-[28px]">Estonia</span>
            </h2>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProductionProgramSection;