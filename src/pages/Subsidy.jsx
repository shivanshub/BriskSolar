import React, { useState } from 'react';
import { ChevronDown, CheckCircle2, Info, ArrowRight, Wallet, UserCircle, Settings, ClipboardCheck } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/FooterB';
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
    <div className="absolute top-8 right-8 text-6xl font-black italic text-black/5 group-hover:text-primary transition-colors">0{num}</div>
    <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white mb-8 transition-all duration-500">
      <Icon className="w-8 h-8" />
    </div>
    <div className="space-y-4 relative z-10">
      <h3 className="text-3xl font-black italic tracking-tighter uppercase text-text-primary leading-tight">{title}</h3>
      <p className="font-sans text-sm text-text-muted leading-relaxed max-w-xs">{desc}</p>
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
        <h4 className="text-2xl font-black italic tracking-tighter uppercase text-text-primary">{q}</h4>
        <ChevronDown className={`w-6 h-6 text-primary transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="p-8 pt-0 font-sans text-sm text-text-muted leading-loose border-t border-black/5">
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
        badge="Financial Grants"
        title="You May"
        highlight="Qualify."
        description="Central and State government subsidies for homes and MSMEs in Punjab & UP."
        image="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2000"
      />

      <div className="py-24 px-6 lg:px-12 max-w-[1800px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 mb-48">
          {[
            { 
              state: "Punjab", 
              amount: "₹78,000", 
              provider: "PSPCL", 
              size: "3kW to 10kW",
              image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1200" 
            },
            { 
              state: "Uttar Pradesh", 
              amount: "₹1,08,000", 
              provider: "UPPCL", 
              size: "3kW to 10kW",
              image: "https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&q=80&w=1200" 
            }
          ].map((item, i) => (
             <div key={i} className="relative aspect-[16/9] bg-black overflow-hidden group rounded-sm shadow-xl">
                <img src={item.image} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-1000" alt={item.state} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-10 left-10 space-y-4">
                   <div className="flex items-center gap-3">
                      <h3 className="text-4xl font-black italic text-white uppercase">{item.state}</h3>
                      <span className="bg-primary text-white text-[9px] font-sans font-black px-3 py-1 uppercase tracking-widest">{item.provider}</span>
                   </div>
                   <div className="space-y-1">
                      <span className="text-6xl font-black text-primary italic leading-none">{item.amount}</span>
                      <p className="text-[10px] font-sans font-black uppercase tracking-widest text-white/40">Max Grant | {item.size}</p>
                   </div>
                </div>
             </div>
          ))}
        </div>

        <div className="mb-48 space-y-24">
           <div className="text-center space-y-4">
              <span className="text-primary font-sans font-black text-xs uppercase tracking-[0.5em]">The Journey</span>
              <h2 className="text-5xl lg:text-8xl font-black italic tracking-tighter uppercase text-text-primary leading-none">How it works.</h2>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              <SubsidyStep num={1} title="Check Eligibility" desc="Confirm residential or MSME status for the current PM-Surya Ghar Scheme." icon={UserCircle} />
              <SubsidyStep num={2} title="Choose Vendor" desc="Brisk Enterprise is an authorised empanelled vendor for direct filing." icon={ClipboardCheck} />
              <SubsidyStep num={3} title="Installation" desc="Certified engineering team installs your high-efficiency DCR panels." icon={Settings} />
              <SubsidyStep num={4} title="Net Metering" desc="Connection is applied to Discom (PSPCL/UPPCL) for approval." icon={CheckCircle2} />
              <SubsidyStep num={5} title="Direct Credit" desc="Grant amount credited directly to your registered bank account." icon={Wallet} />
           </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-20 mb-48">
           <div className="lg:col-span-5 space-y-10">
              <div className="space-y-4">
                 <span className="text-primary font-sans font-black text-xs uppercase tracking-[0.5em]">Common Queries</span>
                 <h2 className="text-5xl lg:text-7xl font-black italic tracking-tighter uppercase text-text-primary leading-none">Frequently Asked.</h2>
              </div>
              <p className="font-sans text-text-muted italic leading-loose border-l-4 border-primary/20 pl-8">
                Your investment is protected by transparent central policy. We handle 100% of the government paperwork for you.
              </p>
              <div className="flex items-center gap-8">
                 <div className="flex -space-x-4">
                    {[1,2,3].map(i => (
                       <div key={i} className="w-14 h-14 rounded-full border-4 border-surface bg-gray-200 overflow-hidden">
                          <img src={`https://i.pravatar.cc/150?img=${i+10}`} alt="avatar" />
                       </div>
                    ))}
                 </div>
                 <p className="font-sans font-black text-[10px] uppercase tracking-widest text-text-muted">Trusted by 12,000+ Households</p>
              </div>
           </div>

           <div className="lg:col-span-7 space-y-4">
              {faq.map((item, i) => <AccordionItem key={i} {...item} />)}
           </div>
        </div>

        <CTASection />
      </div>

      <Footer />
    </div>
  );
};

export default Subsidy;
