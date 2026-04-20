import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import heroVideo from '../assets/bg-video/hero-bg.mp4';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef();
  const contentRef = useRef();
  const videoRef = useRef();

  const trustBadges = [
    "Subsidy Available",
    "10+ Brands",
    "On-Grid Experts",
    "3kW to 1MW"
  ];

  useGSAP(() => {
    gsap.set(".hero-title", { y: 100, opacity: 0 });
    gsap.set(".hero-sub", { y: 30, opacity: 0 });
    gsap.set(".hero-badge", { x: -20, opacity: 0 });
    gsap.set(".hero-cta", { y: 20, opacity: 0 });

    const entryTl = gsap.timeline({
      defaults: { ease: "expo.out", duration: 1.5 }
    });

    entryTl
      .to(".hero-title", { y: 0, opacity: 1, stagger: 0.15 })
      .to(".hero-sub", { y: 0, opacity: 1 }, "-=1.2")
      .to(".hero-badge", { x: 0, opacity: 1, stagger: 0.1 }, "-=1")
      .to(".hero-cta", { y: 0, opacity: 1 }, "-=0.8");

    const scrubTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=100%",
        scrub: 0.5,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      }
    });

    scrubTl
      .fromTo(".hero-video-container",
        { scale: 1, opacity: 0.5, filter: "blur(0px)" },
        { scale: 1.4, opacity: 0, filter: "blur(20px)", ease: "none" }
        , 0)
      .fromTo(contentRef.current,
        { y: 0, opacity: 1, filter: "blur(0px)" },
        { y: -100, opacity: 0, filter: "blur(10px)", ease: "none" }
        , 0);

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative h-screen flex items-center pt-32 lg:pt-40 px-6 lg:px-12 overflow-hidden bg-black">
      <div className="hero-video-container absolute inset-0 z-0 pointer-events-none opacity-60">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />

        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>

      <div ref={contentRef} className="hero-content relative z-20 max-w-[1800px] mx-auto w-full grid lg:grid-cols-12 gap-12 items-end pb-20">
        <div className="lg:col-span-12 space-y-12">
          <div className="overflow-hidden">
            <h1 className="hero-title text-4xl sm:text-5xl lg:text-[5.5rem] xl:text-[7rem] 2xl:text-[8rem] font-black leading-[0.85] tracking-tighter italic uppercase text-white">
              Punjab's Trusted <br />
              <span className="text-primary lg:ml-20">Solar EPC Partner.</span>
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-20">
            <div className="max-w-xl hero-sub">
              <p className="font-sans text-lg text-white/80 leading-relaxed italic border-l-2 border-primary pl-8 mb-8">
                Authorised Distributor of Amaze & Luminous. Redefining energy infrastructure across Punjab through world-class engineering.
              </p>
              <div className="flex flex-wrap gap-6 text-[10px] font-sans font-bold uppercase tracking-widest text-white/40">
                {trustBadges.map((badge, i) => (
                  <span key={i} className="hero-badge flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_10px_rgba(73,33,160,0.5)]" />
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-6 items-center hero-cta">
              <button className="bg-primary text-white px-10 py-5 font-sans font-black text-xs uppercase tracking-widest hover:bg-primary-dark transition-all shadow-2xl flex items-center gap-3 group">
                <span>Get Free Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="flex flex-col">
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-white/40 mb-1">Direct Line</span>
                <span className="text-white font-sans font-bold italic text-lg">+91 88200-00061</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
