import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const PageHero = ({ 
  badge = "Our Identity",
  title = "Our",
  highlight = "Page.",
  description = "Detailed information about our solar solutions.",
  image = "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=2000"
}) => {
  const containerRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power4.out", duration: 0.8 }
    });

    tl.fromTo(".page-hero-badge", 
      { opacity: 0, x: -15 },
      { opacity: 1, x: 0 }, 0.05)
    .fromTo(".page-hero-title", 
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, stagger: 0.05 }, "-=0.6")
    .fromTo(".page-hero-desc", 
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0 }, "-=0.5");

    gsap.to(".page-hero-bg", {
      yPercent: 20,
      scale: 1.3,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    gsap.to(".page-hero-content", {
      opacity: 0,
      y: -50,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 px-6 lg:px-12 bg-black overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={title}
          className="page-hero-bg w-full h-full object-cover opacity-30 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
      </div>
      <div className="page-hero-content relative z-10 max-w-[1800px] mx-auto text-left w-full">
        <span className="page-hero-badge text-primary font-sans font-black text-xs uppercase tracking-[0.5em] block mb-6 outline-none">{badge}</span>
        <div className="overflow-hidden mb-6">
          <h1 className="page-hero-title text-5xl md:text-6xl lg:text-[5rem] xl:text-[7rem] 2xl:text-[9rem] font-black italic tracking-tighter leading-[0.85] uppercase text-white">
            {title}<br />
            <span className="text-primary">{highlight}</span>
          </h1>
        </div>
        <p className="page-hero-desc font-sans text-white/50 italic text-lg max-w-xl leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
};

export default PageHero;
