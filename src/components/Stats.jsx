import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
  const containerRef = useRef();

  const stats = [
    { value: "500+", label: "Happy Customers" },
    { value: "10+", label: "Brand Partners" },
    { value: "3kW-1MW", label: "Project Range" },
    { value: "₹1.08L", label: "Max Gov. Subsidy" }
  ];

  useGSAP(() => {
    gsap.from(".stat-item", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 90%",
      },
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power2.out"
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 px-6 lg:px-12 bg-surface-muted">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-b border-black/5 py-16 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="stat-item space-y-4 group">
              <h4 className="text-4xl lg:text-5xl xl:text-7xl font-black italic text-primary">
                {stat.value}
              </h4>
              <p className="font-sans text-[11px] uppercase tracking-[0.4em] font-bold text-text-muted max-w-[200px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
