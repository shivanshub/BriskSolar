import React from 'react';
import { MapPin, Zap, Building, CheckCircle2, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';
import PageHero from '../components/PageHero';

const About = () => {
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
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
             <div className="lg:col-span-5 relative aspect-[4/5] bg-surface-muted overflow-hidden group rounded-sm shadow-2xl border border-black/5">
                <img 
                   src="/assets/img/rajkumar-ahuja.png" 
                   className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-1000" 
                   alt="Er. Raj Kumar Ahuja" 
                />
                <div className="absolute bottom-0 left-0 w-full p-10 bg-gradient-to-t from-black via-black/40 to-transparent text-white">
                   <h3 className="text-4xl font-extrabold tracking-tighter leading-none mb-1 font-heading">Er. Raj Kumar Ahuja</h3>
                   <p className="font-body text-[10px] font-extrabold uppercase tracking-[0.4em] text-primary">Founder, Brisk Enterprise</p>
                </div>
             </div>

             <div className="lg:col-span-7 space-y-12">
                <div className="space-y-4">
                   <span className="text-primary font-body font-extrabold text-xs uppercase tracking-[0.5em]">The Leadership</span>
                   <h2 className="text-4xl lg:text-7xl font-extrabold tracking-tighter uppercase text-text-primary leading-none font-heading">Engineering Vision.</h2>
                </div>
                <div className="space-y-8">
                   <p className="text-2xl font-extrabold text-text-primary font-heading leading-tight italic">
                     "Our mission is to make solar simple, affordable, and fast for every Punjab household and factory."
                   </p>
                   
                   <p className="text-text-muted font-body text-lg leading-relaxed max-w-2xl">
                     With over 15 years of expertise in electrical engineering and renewable energy, Er. Raj Kumar Ahuja has spearheaded Brisk Enterprise's journey to becoming Punjab's most trusted solar partner. His commitment to technical excellence and customer-centric solutions has powered thousands of homes and businesses across the region.
                   </p>

                   <div className="grid grid-cols-2 gap-12 pt-8">
                      <div className="space-y-2 border-l-2 border-primary pl-6">
                         <span className="text-5xl font-extrabold text-primary leading-none font-heading">500+</span>
                         <p className="text-[10px] font-body font-extrabold uppercase tracking-widest text-text-muted">Total Installs</p>
                      </div>
                      <div className="space-y-2 border-l-2 border-primary pl-6">
                         <span className="text-5xl font-extrabold text-primary leading-none font-heading">12+</span>
                         <p className="text-[10px] font-body font-extrabold uppercase tracking-widest text-text-muted">MW Deployed</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </section>

        <section className="mb-48">
          <div className="grid md:grid-cols-3 gap-12">
             <div className="p-12 bg-surface-muted border border-black/5 rounded-sm space-y-6">
                 <MapPin className="w-8 h-8 text-primary" />
                 <h4 className="text-3xl font-extrabold tracking-tighter uppercase text-text-primary leading-none font-heading">Based in Patiala.</h4>
                 <p className="font-body text-sm text-text-muted leading-relaxed">Centrally located to serve all of Punjab and neighboring states with rapid response times.</p>
             </div>
             <div className="p-12 bg-surface-muted border border-black/5 rounded-sm space-y-6">
                 <Zap className="w-8 h-8 text-primary" />
                 <h4 className="text-3xl font-extrabold tracking-tighter uppercase text-text-primary leading-none font-heading">On-Grid Experts.</h4>
                 <p className="font-body text-sm text-text-muted leading-relaxed">Specializing in net-metering and government subsidy integration for residential homes.</p>
             </div>
             <div className="p-12 bg-surface-muted border border-black/5 rounded-sm space-y-6">
                 <Building className="w-8 h-8 text-primary" />
                 <h4 className="text-3xl font-extrabold tracking-tighter uppercase text-text-primary leading-none font-heading">Authorised Partner.</h4>
                 <p className="font-body text-sm text-text-muted leading-relaxed">Exclusive distributor rights for Luminous and Amaze solar systems in the region.</p>
             </div>
          </div>
        </section>



        <section className="mb-48">
           <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-12">
                 <div className="space-y-4">
                    <span className="text-primary font-body font-extrabold text-xs uppercase tracking-[0.5em]">Legal & Awards</span>
                    <h2 className="text-4xl font-extrabold tracking-tighter uppercase text-text-primary leading-none font-heading">Accredited Engineering.</h2>
                 </div>
                 <div className="grid grid-cols-1 gap-6">
                   {["MNRE Empanelled Vendor", "ISO 9001:2015 Certified", "MSME Registered Unit", "PSPCL Authorized EPC"].map((cert, i) => (
                      <div key={i} className="flex items-center gap-6 p-6 border border-black/5 hover:border-primary/20 transition-all">
                         <CheckCircle2 className="w-6 h-6 text-primary" />
                         <p className="font-body font-extrabold text-[13px] uppercase tracking-widest text-text-primary leading-relaxed">{cert}</p>
                      </div>
                   ))}
                </div>
              </div>
           </div>
        </section>

        <CTASection />
      </div>

      <Footer />
    </div>
  );
};

export default About;
