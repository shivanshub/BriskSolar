import React, { useRef } from 'react';
import { ShieldCheck, Truck, Cpu, Factory, Zap } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const WhyChoose = () => {
  const containerRef = useRef();

  const points = [
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Authorised Distributor",
      desc: "Direct partnership with Amaze and Luminous ensures genuine products and best-in-market pricing."
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "End-to-End EPC",
      desc: "Complete Supply, Installation, and Commissioning handled by our certified engineering team."
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "13 Solar Mechanisms",
      desc: "Expertise ranging from Net Metering to complex Open Access and DGPV Sync solutions."
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: "Punjab-Wide Service",
      desc: "Extensive experience serving homes, textile factories, and steel units across the state."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast Installation",
      desc: "Optimized workflows for rapid deployment and dedicated lifetime after-sales support."
    }
  ];

  useGSAP(() => {
    gsap.fromTo(".why-title",
      { x: -50, opacity: 0 },
      {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out"
      }
    );

    gsap.fromTo(".why-point",
      { y: 50, opacity: 0 },
      {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out"
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 px-6 lg:px-12 bg-surface-muted">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-4 space-y-8 sticky top-32 h-fit why-title">
            <span className="text-primary font-sans font-black text-xs uppercase tracking-[0.5em]">The Advantage</span>
            <h2 className="text-6xl lg:text-7xl font-black italic tracking-tighter uppercase leading-tight text-text-primary">
              Why <br />
              <span className="text-primary-dark">Brisk Solar?</span>
            </h2>
            <p className="font-sans text-text-muted italic leading-relaxed">
              We don't just sell panels; we engineer sustainable financial assets for your property.
            </p>
          </div>

          <div className="lg:col-span-8 grid gap-8">
            {points.map((point, i) => (
              <div key={i} className="why-point flex flex-col lg:flex-row gap-8 p-10 border border-black/5 bg-surface/50 transition-all duration-700 rounded-sm">
                <div className="text-primary transition-transform duration-500">
                  {point.icon}
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-black italic tracking-tighter text-text-primary">{point.title}</h3>
                  <p className="font-sans text-sm text-text-muted leading-relaxed max-w-2xl">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
