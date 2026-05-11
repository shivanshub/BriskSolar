import React from 'react';
import { ChevronRight, X, Info, Zap, Shield, Battery, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductsPreview = () => {
  const solutions = [
    {
      title: "On-Grid System",
      type: "Grid-Tied Solutions",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800",
      description: "Maximise ROI with Punjab's most efficient net-metering systems.",
      brands: ["Luminous", "Amaze", "Waaree", "Adani", "FoxESS", "Sofar"]
    },
    {
      title: "Hybrid System",
      type: "Smart Storage",
      image: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&q=80&w=800",
      description: "Intelligent energy management for 24/7 power assurance.",
      brands: ["Deye", "Cellcronic", "Luminous", "Amaze"]
    },
    {
      title: "Off-Grid System",
      type: "Energy Independence",
      image: "https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&q=80&w=800",
      description: "Total power autonomy for remote locations and farmhouses.",
      brands: ["Luminous", "Amaze", "Waaree"]
    },
    {
      title: "Solar Agriculture",
      type: "Pumping Solutions",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800",
      description: "High-efficiency solar motor solutions for sustainable farming.",
      brands: ["Specialised Motors", "Luminous", "Amaze"]
    }
  ];

  return (
    <section className="py-12 lg:py-20 px-6 lg:px-12 bg-white relative">
      <div className="max-w-[1800px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-10 lg:mb-16 gap-8 border-b border-black/5 pb-10">
          <div className="space-y-4">
            <span className="text-primary font-body font-extrabold text-[10px] uppercase tracking-[0.6em] block">Our Expertise</span>
            <h2 className="text-6xl lg:text-8xl font-extrabold tracking-tighter uppercase text-text-primary font-heading">Solar Solutions.</h2>
          </div>
          <p className="font-body text-[11px] text-text-muted max-w-xs text-right hidden lg:block uppercase tracking-widest leading-loose font-bold">
            Helping you choose the right solar system for your home, business, or agricultural needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-black/5 border border-black/5 rounded-sm overflow-hidden">
          {solutions.map((solution, i) => (
            <div 
              key={i} 
              className="group relative aspect-[4/5] bg-surface-muted overflow-hidden flex flex-col justify-end p-6 lg:p-10"
            >
              <div className="absolute inset-0 z-0 transition-transform duration-700">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent transition-all duration-700" />
              </div>

              <div className="relative z-10 space-y-4">
                <div className="space-y-1">
                  <h3 className="text-2xl lg:text-3xl font-extrabold tracking-tighter uppercase text-white font-heading">
                    {solution.title}.
                  </h3>
                </div>
                
                <p className="text-[11px] font-body font-bold text-white/90 uppercase tracking-widest leading-relaxed line-clamp-3">
                  {solution.description}
                </p>

                <div className="pt-4 flex flex-wrap gap-2">
                  {solution.brands.map((brand, idx) => (
                    <span 
                      key={idx} 
                      className="px-2.5 py-1.5 bg-white/10 border border-white/20 text-[9px] font-body font-extrabold uppercase tracking-widest text-white backdrop-blur-sm group-hover:border-primary/50 group-hover:bg-primary/30 transition-all duration-500"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center lg:justify-end">
          <Link to="/products" className="flex items-center gap-4 group text-primary font-body font-extrabold text-[11px] uppercase tracking-[0.3em]">
            <span>Explore Full Product Lineup</span>
            <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary transition-all duration-500">
              <ChevronRight className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;
