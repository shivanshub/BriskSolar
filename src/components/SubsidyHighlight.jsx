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
    <section ref={containerRef} className="py-12 lg:py-16 px-6 lg:px-12 relative overflow-hidden bg-surface">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=2000"
          alt="Solar subsidy background"
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/90 to-surface/40" />
      </div>

      <div className="max-w-[1800px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
          <div className="space-y-8 subsidy-content">
            <span className="text-primary font-body font-extrabold text-xs uppercase tracking-[0.5em]">Financial Incentives</span>
            <h2 className="text-5xl lg:text-7xl font-extrabold tracking-tighter leading-none uppercase text-text-primary font-heading">
              Government <br />
              <span className="text-primary">Subsidy available.</span>
            </h2>
            <p className="font-body text-text-muted max-w-md leading-relaxed">
              Brisk Enterprise is a registered empanelled vendor. We handle your subsidy paperwork from start to finish, ensuring direct credit to your bank account.
            </p>
            <Link to="/subsidy" className="flex items-center gap-4 group bg-primary text-white px-10 py-5 font-body font-extrabold text-sm uppercase tracking-widest hover:bg-primary-dark transition-all w-fit shadow-xl shadow-primary/20">
              <span>Check Eligibility</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { state: "Punjab", amount: "₹78,000", cap: "3kW to 10kW", provider: "PSPCL" },
              { state: "Haryana", amount: "₹78,000", cap: "3kW to 10kW", provider: "DHBVN" },
              { state: "Uttar Pradesh", amount: "₹1,08,000", cap: "3kW to 10kW", provider: "UPPCL" }
            ].map((item, i) => (
              <div key={i} className="subsidy-card bg-surface-muted border border-black/5 p-10 rounded-sm space-y-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-center text-text-primary">
                   <h4 className="text-xl font-bold text-text-primary font-heading">{item.state}</h4>
                  <span className="text-[10px] font-body font-extrabold text-primary border border-primary/30 px-3 py-1">{item.provider}</span>
                </div>
                <div className="space-y-1">
                  <span className="text-3xl lg:text-4xl font-extrabold text-primary font-heading">{item.amount}</span>
                  <p className="text-[10px] font-body font-bold uppercase tracking-widest text-text-muted mt-2">Maximum Subsidy</p>
                </div>
                <p className="text-xs font-body text-text-muted/60">System Capacity: {item.cap}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubsidyHighlight;
