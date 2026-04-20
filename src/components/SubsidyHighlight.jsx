import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const SubsidyHighlight = () => {
  const containerRef = useRef();

  useGSAP(() => {
    gsap.from(".subsidy-content", {
      scrollTrigger: {
        trigger: ".subsidy-content",
        start: "top 85%",
      },
      x: -50,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out"
    });

    gsap.from(".subsidy-card", {
      scrollTrigger: {
        trigger: ".subsidy-card",
        start: "top 85%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power4.out"
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 px-6 lg:px-12 relative overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=2000"
          alt="Solar subsidy background"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/40" />
        <div className="absolute inset-0 bg-primary/10" />
      </div>

      <div className="max-w-[1800px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <div className="space-y-8 subsidy-content">
            <span className="text-primary font-sans font-black text-xs uppercase tracking-[0.5em]">Financial Incentives</span>
            <h2 className="text-6xl lg:text-8xl font-black italic tracking-tighter leading-none uppercase text-white">
              Government <br />
              <span className="text-primary">Subsidy available.</span>
            </h2>
            <p className="font-sans text-white/70 max-w-md italic leading-relaxed">
              Brisk Enterprise is a registered empanelled vendor. We handle your subsidy paperwork from start to finish, ensuring direct credit to your bank account.
            </p>
            <Link to="/subsidy" className="flex items-center gap-4 group bg-primary text-white px-10 py-5 font-sans font-black text-sm uppercase tracking-widest hover:bg-primary-dark transition-all w-fit">
              <span>Check Eligibility</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              { state: "Punjab", amount: "₹78,000", cap: "3kW to 10kW", provider: "PSPCL" },
              { state: "Uttar Pradesh", amount: "₹1,08,000", cap: "3kW to 10kW", provider: "UPPCL" }
            ].map((item, i) => (
              <div key={i} className="subsidy-card bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-sm space-y-6">
                <div className="flex justify-between items-center text-text-primary">
                  <h4 className="text-xl font-bold italic text-white">{item.state}</h4>
                  <span className="text-[10px] font-sans font-black text-primary border border-primary/30 px-3 py-1">{item.provider}</span>
                </div>
                <div className="space-y-1">
                  <span className="text-4xl lg:text-5xl font-black text-primary italic">{item.amount}</span>
                  <p className="text-[10px] font-sans font-bold uppercase tracking-widest text-white/50 mt-2">Maximum Subsidy</p>
                </div>
                <p className="text-xs font-sans text-white/40">System Capacity: {item.cap}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubsidyHighlight;
