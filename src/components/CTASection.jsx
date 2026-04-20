import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <div className="p-16 lg:p-24 bg-black relative overflow-hidden group rounded-sm">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover opacity-20 scale-110 group-hover:scale-100 transition-transform duration-1000" 
          alt="CTA Background"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-black/90" />
      </div>
      
      <div className="relative z-10 space-y-10">
        <h2 className="text-4xl lg:text-5xl xl:text-7xl font-black italic tracking-tighter uppercase text-white leading-none">
          Not sure which<br />
          <span className="text-primary text-5xl lg:text-7xl xl:text-9xl">model fits you?</span>
        </h2>
        <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
          <Link 
            to="/contact" 
            className="flex items-center gap-4 bg-primary text-white px-12 py-6 font-sans font-black text-xs uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all shadow-2xl"
          >
            Talk to an Expert
          </Link>
          <p className="font-sans text-white/50 italic leading-relaxed max-w-xs">
            Get a free consultation and feasibility report from our site engineers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
