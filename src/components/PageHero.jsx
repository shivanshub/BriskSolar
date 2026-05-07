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
    <section ref={containerRef} className="relative pt-40 pb-16 lg:pt-52 lg:pb-24 px-6 lg:px-12 bg-surface-muted overflow-hidden border-b border-black/5">
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={title}
          className="page-hero-bg w-full h-full object-cover opacity-20 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-muted via-surface-muted/80 to-transparent" />
      </div>
      <div className="page-hero-content max-w-[1800px] mx-auto px-6 lg:px-12 relative z-10">
        <span className="page-hero-badge text-primary font-body font-extrabold text-xs uppercase tracking-[0.5em] block mb-6 outline-none">{badge}</span>
        <div className="max-w-6xl">
          <h1 className="page-hero-title text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tighter leading-[0.85] uppercase text-text-primary font-heading">
            {title}<br />
            <span className="text-primary block transition-colors duration-700">{highlight}</span>
          </h1>
          <p className="page-hero-desc font-body text-text-primary/70 text-base lg:text-lg max-w-2xl mt-12 leading-relaxed border-l-4 border-primary/20 pl-8">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
