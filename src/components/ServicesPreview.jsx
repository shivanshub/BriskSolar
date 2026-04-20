import React, { useRef } from 'react';
import { Maximize2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ServicesPreview = () => {
  const containerRef = useRef();

  const services = [
    {
      title: "Net Metering",
      desc: "Pay only for what you use from the grid. Ideal for homes & small offices.",
      img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Captive Power",
      desc: "Own your power plant and save on heavy industrial taxes and surcharges.",
      img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "DGPV Sync",
      desc: "Cut diesel costs by 40-60% with Solar + DG combo synchronization.",
      img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Open Access",
      desc: "Buy cheap solar power from distant solar farms via the grid network.",
      img: "https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&q=80&w=800"
    }
  ];

  useGSAP(() => {
    gsap.from(".service-card", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power4.out"
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 px-6 lg:px-12 bg-surface">
      <div className="max-w-[1800px] mx-auto">
        <div className="flex justify-between items-end mb-24">
          <div className="space-y-4">
            <span className="text-primary font-sans font-black text-xs uppercase tracking-[0.5em]">The Mechanisms</span>
            <h2 className="text-6xl lg:text-9xl font-black italic tracking-tighter uppercase leading-none text-text-primary">The Craft.</h2>
          </div>
          <div className="hidden lg:block text-right max-w-xs font-sans text-xs text-text-muted uppercase tracking-widest leading-loose italic">
            Mastering the art of 13 unique solar mechanisms for the most discerning residential and industrial clients.
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <div key={i} className="service-card group relative aspect-[4/5] bg-surface-muted overflow-hidden p-8 flex flex-col justify-end cursor-pointer rounded-sm border border-black/5">
              <img
                src={service.img}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-80 transition-all duration-1000"
                alt={service.title}
                onError={(e) => { e.target.src = `https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800`; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10" />
              <div className="relative z-20 space-y-4 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <h3 className="text-4xl font-black italic tracking-tighter leading-none text-white">
                  {service.title}
                </h3>
                <p className="font-sans text-[11px] text-white/60 uppercase tracking-widest leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  {service.desc}
                </p>
                <div className="h-px w-0 group-hover:w-full bg-primary transition-all duration-700" />
                <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="font-sans text-[10px] uppercase tracking-widest text-white/60">Explore Mechanism</span>
                  <Maximize2 className="w-5 h-5 text-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link to="/services" className="flex items-center gap-4 group">
            <span className="h-px w-20 bg-black/10 group-hover:w-32 group-hover:bg-primary transition-all duration-700" />
            <span className="font-sans font-black text-xs uppercase tracking-[0.4em] text-text-muted group-hover:text-primary transition-colors">Explore All 13 Services</span>
            <span className="h-px w-20 bg-black/10 group-hover:w-32 group-hover:bg-primary transition-all duration-700" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
