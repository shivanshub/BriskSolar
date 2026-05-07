import React from 'react';

const CompanySlider = () => {
  const logos = [
    '/companies/adani.png',
    '/companies/amaze.png',
    '/companies/foxess.png',
    '/companies/luminous.png',
    '/companies/sofar.webp',
    '/companies/waaree.webp'
  ];

  // Duplicate logos for infinite scroll
  const allLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="w-full py-20 bg-white overflow-hidden border-y border-black/5">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12 mb-12">
        <span className="text-primary font-body font-extrabold text-[10px] uppercase tracking-[0.5em] block mb-4">Our Ecosystem</span>
        <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tighter uppercase text-text-primary font-heading">Global Brand Partners.</h2>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="animate-scroll flex items-center gap-16 whitespace-nowrap px-8 py-10">
          {allLogos.map((logo, i) => (
            <div key={i} className="flex-shrink-0 w-32 lg:w-48 h-12 lg:h-16 flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <img
                src={logo}
                alt={`Partner ${i}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Duplicate for seamless loop */}
        <div className="animate-scroll flex items-center gap-16 whitespace-nowrap px-8 py-10" aria-hidden="true">
          {allLogos.map((logo, i) => (
            <div key={`dup-${i}`} className="flex-shrink-0 w-32 lg:w-48 h-12 lg:h-16 flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <img
                src={logo}
                alt={`Partner ${i}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .group:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}} />
    </div>
  );
};

export default CompanySlider;
