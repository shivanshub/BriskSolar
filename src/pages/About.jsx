import React, { useRef } from 'react';
import { Award, Target, Users, MapPin, Building2, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/FooterB';
import CTASection from '../components/CTASection';
import PageHero from '../components/PageHero';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const brands = [
  { name: "Luminous", logo: "https://logos-world.net/wp-content/uploads/2023/12/Luminous-Logo.png" },
  { name: "Amaze", logo: "https://amaze-india.com/assets/images/logo.png" },
  { name: "Sofar", logo: "https://www.sofarsolar.com/Uploads/image/20210408/20210408102941_32876.png" },
  { name: "FoxESS", logo: "https://fox-ess.com/wp-content/themes/fox-ess/assets/img/logo.svg" },
  { name: "Waaree", logo: "https://www.waaree.com/images/logo.png" },
  { name: "Adani", logo: "https://www.adanisolar.com/-/media/Project/AdaniSolar/Logo/Adani-Solar-Logo-1.png" },
  { name: "Rayzon", logo: "https://www.rayzonsolar.com/assets/uploads/logos/logo.png" }
];

const About = () => {
  const brandsRef = useRef();

  useGSAP(() => {
    const brandsInner = brandsRef.current.querySelector(".brands-inner");
    
    const loop = gsap.to(brandsInner, {
      x: "-50%",
      duration: 30,
      ease: "none",
      repeat: -1,
    });

    const container = brandsRef.current.querySelector(".marquee-container");
    container.addEventListener("mouseenter", () => loop.pause());
    container.addEventListener("mouseleave", () => loop.play());
  }, { scope: brandsRef });

  return (
    <div className="min-h-screen bg-surface">
      <Navbar />

      <PageHero 
        badge="Our Identity"
        title="About"
        highlight="Brisk."
        description="Powering Punjab with clean, affordable solar energy."
        image="https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&q=80&w=2000"
      />

      <div className="py-24 px-6 lg:px-12 max-w-[1800px] mx-auto">
        <section className="mb-48">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
             <div className="relative aspect-[4/5] bg-surface-muted overflow-hidden group rounded-sm shadow-2xl overflow-hidden border border-black/5">
                <img 
                   src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
                   className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-1000" 
                   alt="Er. Nipun Ahuja" 
                />
                <div className="absolute bottom-0 left-0 w-full p-10 bg-gradient-to-t from-black via-black/40 to-transparent text-white">
                   <h3 className="text-4xl font-black italic tracking-tighter leading-none mb-1">Er. Nipun Ahuja</h3>
                   <p className="font-sans text-[10px] font-black uppercase tracking-[0.4em] text-primary">Founder, Brisk Enterprise</p>
                </div>
             </div>
             <div className="space-y-12">
                <div className="space-y-4">
                   <span className="text-primary font-sans font-black text-xs uppercase tracking-[0.5em]">The Leadership</span>
                   <h2 className="text-5xl lg:text-7xl font-black italic tracking-tighter uppercase text-text-primary leading-none">Engineering Vision.</h2>
                </div>
                <div className="space-y-8 font-sans text-lg text-text-muted leading-relaxed italic border-l-4 border-primary/20 pl-8">
                   <p>With an engineering background and deep passion for renewable energy, Er. Nipun Ahuja established Brisk Enterprise to bridge the gap between complex solar technology and everyday Punjab households.</p>
                   <p className="text-2xl font-black text-text-primary">"Our mission is to make solar simple, affordable, and fast for every Punjab household and factory."</p>
                </div>
                <div className="grid grid-cols-2 gap-8 pt-6 border-t border-black/5">
                   <div className="space-y-2">
                      <span className="text-4xl font-black italic text-primary leading-none">500+</span>
                      <p className="text-[10px] font-sans font-black uppercase tracking-widest text-text-muted">Total Installs</p>
                   </div>
                   <div className="space-y-2">
                      <span className="text-4xl font-black italic text-primary leading-none">12+</span>
                      <p className="text-[10px] font-sans font-black uppercase tracking-widest text-text-muted">MW Deployed</p>
                   </div>
                </div>
             </div>
          </div>
        </section>

        <section className="mb-48 py-32 border-y border-black/5">
           <div className="grid lg:grid-cols-3 gap-16">
              <div className="space-y-6">
                 <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                    <MapPin className="w-8 h-8" />
                 </div>
                 <h4 className="text-3xl font-black italic tracking-tighter uppercase text-text-primary leading-none">Based in Patiala.</h4>
                 <p className="font-sans text-sm text-text-muted leading-relaxed">Headquartered in the heart of Punjab, we serve the entire state and nearby borders with rapid deployment units.</p>
              </div>
              <div className="space-y-6">
                 <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                    <Target className="w-8 h-8" />
                 </div>
                 <h4 className="text-3xl font-black italic tracking-tighter uppercase text-text-primary leading-none">On-Grid Experts.</h4>
                 <p className="font-sans text-sm text-text-muted leading-relaxed">Specializing in On-Grid EPC solutions from 3kW residential to massive MW-scale industrial deployments.</p>
              </div>
              <div className="space-y-6">
                 <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                    <Award className="w-8 h-8" />
                 </div>
                 <h4 className="text-3xl font-black italic tracking-tighter uppercase text-text-primary leading-none">Authorised Partner.</h4>
                 <p className="font-sans text-sm text-text-muted leading-relaxed">Proud authorized distributors for Luminous and Amaze, ensuring 100% genuine parts and lowest prices.</p>
              </div>
           </div>
        </section>

        <section ref={brandsRef} className="mb-48 space-y-24 overflow-hidden py-10">
           <div className="space-y-4 text-center">
              <span className="text-primary font-sans font-black text-xs uppercase tracking-[0.5em]">The Network</span>
              <h2 className="text-5xl lg:text-7xl font-black italic tracking-tighter uppercase text-text-primary leading-none">Brand Partners.</h2>
           </div>
           
           <div className="marquee-container relative pt-10 cursor-pointer">
             <div className="brands-inner flex items-center gap-24 whitespace-nowrap w-fit">
                {[...brands, ...brands].map((brand, i) => (
                   <div key={i} className="flex-shrink-0 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700 hover:scale-110 cursor-pointer px-12">
                      <span className="font-sans font-black tracking-tighter text-4xl lg:text-5xl text-text-primary uppercase italic">{brand.name}</span>
                   </div>
                ))}
             </div>
             
             {/* Gradient Overlays for smooth edges */}
             <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-surface to-transparent z-10" />
             <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-surface to-transparent z-10" />
           </div>
        </section>

        <section className="grid lg:grid-cols-12 gap-20 items-center mb-48">
           <div className="lg:col-span-4 space-y-6">
              <div className="space-y-4">
                 <span className="text-primary font-sans font-black text-xs uppercase tracking-[0.5em]">Legal & Awards</span>
                 <h2 className="text-5xl font-black italic tracking-tighter uppercase text-text-primary leading-none">Accredited Engineering.</h2>
              </div>
              <p className="font-sans text-sm text-text-muted leading-relaxed italic">The documentation behind every installation ensures your 25-year investment stays safe and government approved.</p>
           </div>
           <div className="lg:col-span-8 grid sm:grid-cols-2 gap-8">
              {[
                "Authorised Distributor Certificate - Amaze",
                "Authorised Distributor Certificate - Luminous",
                "MNRE Empanelled Vendor Registration",
                "Punjab MSME / GST Certified Business"
              ].map((cert, i) => (
                 <div key={i} className="flex gap-6 p-10 bg-surface-muted border border-black/5 hover:border-primary/20 transition-all group">
                    <ShieldCheck className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
                    <p className="font-sans font-black text-[13px] uppercase tracking-widest text-text-primary leading-relaxed">{cert}</p>
                 </div>
              ))}
           </div>
        </section>

        <CTASection />
      </div>

      <Footer />
    </div>
  );
};

export default About;
