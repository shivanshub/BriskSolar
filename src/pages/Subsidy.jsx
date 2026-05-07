import React, { useState } from 'react';
import { ChevronDown, CheckCircle2, Info, ArrowRight, Wallet, UserCircle, Settings, ClipboardCheck, FileCheck, ShieldCheck, CreditCard } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';
import PageHero from '../components/PageHero';

const faq = [
  {
    q: "Who is eligible for subsidy?",
    a: "Residential homeowners and housing societies are eligible for the central MNRE subsidy. Currently, pure industrial or commercial units are not covered under the residential subsidy scheme, but they enjoy other tax benefits like Accelerated Depreciation."
  },
  {
    q: "Can industries get subsidy?",
    a: "Under the current PM-Surya Ghar scheme, industrial and commercial units primarily benefit from the 40% Accelerated Depreciation tax benefit rather than a direct cash subsidy like residential consumers."
  },
  {
    q: "Is subsidy available only on DCR panels?",
    a: "Yes. To be eligible for the Government of India subsidy, it is mandatory to use 'Made in India' DCR (Domestic Content Requirement) solar modules."
  },
  {
    q: "How long does the process take?",
    a: "The complete journey from installation to subsidy credit typically takes 4–8 weeks, depending on the speed of Net Metering approval from PSPCL or UPPCL."
  },
  {
    q: "Can I get subsidy and a bank loan together?",
    a: "Yes, you can! Many nationalised banks offer low-interest solar loans, and the subsidy is credited to your linked account separately after the project is commissioned."
  }
];

const SubsidyStep = ({ num, title, desc, icon: Icon }) => (
  <div className="relative group p-10 border border-black/5 hover:border-primary transition-all duration-500 bg-surface-muted rounded-sm">
    <div className="absolute top-8 right-8 text-6xl font-extrabold text-black/5 group-hover:text-primary transition-colors font-heading">0{num}</div>
    <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white mb-8 transition-all duration-500">
      <Icon className="w-8 h-8" />
    </div>
    <div className="space-y-4 relative z-10">
      <h3 className="text-3xl font-extrabold tracking-tighter uppercase text-text-primary leading-tight font-heading">{title}</h3>
      <p className="font-body text-sm text-text-muted leading-relaxed max-w-xs">{desc}</p>
    </div>
  </div>
);

const AccordionItem = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-black/5 bg-surface-muted rounded-sm overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-8 flex items-center justify-between text-left group transition-colors hover:bg-black/5"
      >
        <h4 className="text-2xl font-extrabold tracking-tighter uppercase text-text-primary font-heading">{q}</h4>
        <ChevronDown className={`w-6 h-6 text-primary transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="p-8 pt-0 font-body text-sm text-text-muted leading-loose border-t border-black/5">
          {a}
        </div>
      </div>
    </div>
  );
};

const Subsidy = () => {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />

      <PageHero 
        badge="Financial Support"
        title="PM Surya Ghar"
        highlight="Subsidy."
        description="Direct government financial assistance for residential solar installations in Punjab, Haryana, and Uttar Pradesh."
        image="https://images.unsplash.com/photo-1559302995-f0907797746e?auto=format&fit=crop&q=80&w=2000"
      />

      <div className="py-24 px-6 lg:px-12 max-w-[1800px] mx-auto">
        {/* Subsidy Tiers */}
        <section className="mb-48">
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-12">
               <div className="space-y-4">
                  <span className="text-primary font-body font-extrabold text-xs uppercase tracking-[0.5em]">The Payouts</span>
                  <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tighter uppercase text-text-primary leading-none font-heading">Subsidy Tiers.</h2>
               </div>
               <div className="space-y-8 font-body text-base text-text-muted leading-relaxed border-l-4 border-primary/20 pl-8">
                  <p>The Government of India provides a flat subsidy based on system capacity, directly credited to the consumer's bank account after successful commissioning.</p>
                  <p className="font-extrabold text-text-primary font-heading">Brisk Enterprise is a registered empanelled vendor, making us authorized to process these claims for you.</p>
               </div>
            </div>

            <div className="grid gap-6">
              {[
                { state: "Punjab", amount: "₹78,000", cap: "3kW to 10kW", provider: "PSPCL" },
                { state: "Haryana", amount: "₹78,000", cap: "3kW to 10kW", provider: "DHBVN/UHBVN" },
                { state: "Uttar Pradesh", amount: "₹1,08,000", cap: "3kW to 10kW", provider: "UPPCL" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col md:flex-row justify-between items-center p-12 bg-surface-muted border border-black/5 group hover:border-primary/20 transition-all">
                   <div className="space-y-2 text-center md:text-left mb-8 md:mb-0">
                      <h3 className="text-3xl font-extrabold text-text-primary uppercase font-heading">{item.state}</h3>
                      <p className="font-body text-[10px] font-extrabold uppercase tracking-widest text-text-muted">Maximum Government Payout</p>
                   </div>
                   <div className="text-center md:text-right">
                      <span className="text-5xl font-extrabold text-primary leading-none font-heading">{item.amount}</span>
                      <p className="text-[10px] font-body font-bold text-text-muted mt-2 tracking-widest uppercase">Direct Bank Credit</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="mb-48">
          <div className="flex justify-between items-end mb-24">
            <div className="space-y-4">
              <span className="text-primary font-body font-extrabold text-xs uppercase tracking-[0.5em]">The Protocol</span>
              <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tighter uppercase text-text-primary leading-none font-heading">How it works.</h2>
            </div>
            <div className="hidden lg:block text-right max-w-xs font-body text-xs text-text-muted uppercase tracking-widest leading-loose">
              We handle the entire digital portal and physical inspection paperwork for you.
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SubsidyStep num="1" icon={FileCheck} title="Feasibility" desc="We check your site and existing meter connection for solar compatibility on the government portal." />
            <SubsidyStep num="2" icon={Settings} title="Installation" desc="Our certified engineers install the MNRE-approved system components at your premises." />
            <SubsidyStep num="3" icon={ShieldCheck} title="Inspection" desc="Govt. officials inspect the system and replace your regular meter with a bidirectional Net Meter." />
            <SubsidyStep num="4" icon={CreditCard} title="Credit" desc="The subsidy amount is automatically released to your bank account within 30 days of inspection." />
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-48">
           <div className="grid lg:grid-cols-12 gap-20">
              <div className="lg:col-span-5 space-y-10">
                 <div className="space-y-4">
                    <span className="text-primary font-body font-extrabold text-xs uppercase tracking-[0.5em]">Common Queries</span>
                    <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tighter uppercase text-text-primary leading-none font-heading">Frequently Asked.</h2>
                 </div>
                 <p className="font-body text-text-muted leading-loose border-l-4 border-primary/20 pl-8">
                    Your investment is protected by transparent central policy. We handle 100% of the government paperwork for you.
                 </p>
              </div>

              <div className="lg:col-span-7 space-y-4">
                 {faq.map((item, i) => <AccordionItem key={i} {...item} />)}
              </div>
           </div>
        </section>

        <CTASection />
      </div>

      <Footer />
    </div>
  );
};

export default Subsidy;
