import React from 'react';
import { Link } from 'react-router-dom';
import CompanySlider from './CompanySlider';

const CTASection = () => {
  return (
    <>
      <div className="mb-24">
        <CompanySlider />
      </div>
      <div className="p-16 lg:p-24 bg-primary relative overflow-hidden group rounded-sm shadow-[0_30px_60px_-15px_rgba(73,33,160,0.3)]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-10 scale-110 group-hover:scale-100 transition-transform duration-1000" 
            alt="CTA Background"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary" />
        </div>
        
        <div className="relative z-10 space-y-10">
          <h2 className="text-4xl lg:text-5xl xl:text-7xl font-extrabold tracking-tighter uppercase text-white leading-none font-heading">
            Not sure which<br />
            <span className="text-white/40 text-5xl lg:text-7xl xl:text-9xl">model fits you?</span>
          </h2>
          <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
            <Link 
              to="/contact" 
              className="flex items-center gap-4 bg-white text-primary px-12 py-6 font-body font-extrabold text-xs uppercase tracking-[0.4em] hover:bg-primary-dark hover:text-white transition-all shadow-2xl"
            >
              Contact Us
            </Link>
            <p className="font-body text-white/70 leading-relaxed max-w-xs">
              Get a free consultation and feasibility report from our site engineers.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CTASection;
