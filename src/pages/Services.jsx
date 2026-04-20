import React, { useState } from 'react';
import { LayoutGrid, Factory, Droplets, Shovel, Info, ArrowRight, CheckCircle2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/FooterB';
import CTASection from '../components/CTASection';
import PageHero from '../components/PageHero';


const services = [
  {
    name: "Net Metering",
    summary: "Pay only for what you use from the grid",
    bestFor: "Homes & Offices",
    type: "Home & Office",
    icon: <LayoutGrid className="w-6 h-6" />,
    fullDesc: "Grid-synchronised solar that reduces your monthly electricity bill by adjusting the energy you import against what you export."
  },
  {
    name: "Gross Metering",
    summary: "Export 100% power, earn a fixed Feed-in Tariff",
    bestFor: "Low-consumption sites",
    type: "Home & Office",
    icon: <ArrowRight className="w-6 h-6" />,
    fullDesc: "Sell all generated solar energy back to the grid at a fixed rate, ideal for commercial spaces with empty roofs but low internal energy needs."
  },
  {
    name: "Behind the Meter (BTM)",
    summary: "Zero export - consume all solar internally",
    bestFor: "Where DISCOM denies net metering",
    type: "Industry",
    icon: <CheckCircle2 className="w-6 h-6" />,
    fullDesc: "A smart system that ensures no solar energy flows back to the grid, used when local utilities have restricted export permissions."
  },
  {
    name: "Net Billing",
    summary: "Buy at retail rate, sell at lower rate",
    bestFor: "Large industries",
    type: "Industry",
    icon: <Factory className="w-6 h-6" />,
    fullDesc: "Real-time billing system where your utility company credits you at a dynamic rate for surplus power exported during the day."
  },
  {
    name: "Virtual Net Metering",
    summary: "Solar at one place, savings at another location",
    bestFor: "Housing societies",
    type: "Housing Society",
    icon: <LayoutGrid className="w-6 h-6" />,
    fullDesc: "Generate power at a central location and distribute the credits among multiple apartments or separate electricity meters."
  },
  {
    name: "Gross Net Metering",
    summary: "Track all green energy for compliance & certifications",
    bestFor: "RPO compliance",
    type: "Industry",
    icon: <Info className="w-6 h-6" />,
    fullDesc: "A dual-metering setup measuring both total generation and net export, essential for firms meeting Renewable Purchase Obligations (RPO)."
  },
  {
    name: "Open Access",
    summary: "Buy cheap solar power from a distant solar farm",
    bestFor: "Industries paying high tariff",
    type: "Industry",
    icon: <Factory className="w-6 h-6" />,
    fullDesc: "Purchase solar power directly from a third-party plant located deep in the state while using the existing utility grid cables."
  },
  {
    name: "Captive Power Plant",
    summary: "Own your plant - bypass Cross-Subsidy tax",
    bestFor: "Textile & Steel units",
    type: "Industry",
    icon: <Factory className="w-6 h-6" />,
    fullDesc: "A dedicated solar plant exclusively for your business consumption, saving up to 50% on commercial electricity overheads."
  },
  {
    name: "Group Captive",
    summary: "Share ownership of one large plant with multiple firms",
    bestFor: "Small industries combined",
    type: "Industry",
    icon: <LayoutGrid className="w-6 h-6" />,
    fullDesc: "Multiple companies pool investment to own a large-scale solar farm, gaining huge tax benefits and cheaper electricity."
  },
  {
    name: "DGPV Sync",
    summary: "Run Solar + DG together to cut diesel cost 40-60%",
    bestFor: "Areas with power cuts",
    type: "Industry",
    icon: <Droplets className="w-6 h-6" />,
    fullDesc: "Advanced controllers allow your solar panels to sync with your diesel generator, drastically reducing fuel burn during power failures."
  },
  {
    name: "Solar Parks",
    summary: "Pre-approved land zones for large MW-scale projects",
    bestFor: "Developers & large buyers",
    type: "Industry",
    icon: <LayoutGrid className="w-6 h-6" />,
    fullDesc: "Plug-and-play solar infrastructure in Punjab's industrial belts, reducing legal hurdles and speeding up multi-MW commissioning."
  },
  {
    name: "Floating Solar",
    summary: "Solar panels installed on water bodies",
    bestFor: "Water reservoirs",
    type: "Agriculture",
    icon: <Droplets className="w-6 h-6" />,
    fullDesc: "Maximize unused canal and reservoir surfaces while reducing water evaporation and maintaining higher panel efficiency through cooling."
  },
  {
    name: "Agrivoltaics",
    summary: "Farm and solar on the same land simultaneously",
    bestFor: "Farmers with land",
    type: "Agriculture",
    icon: <Shovel className="w-6 h-6" />,
    fullDesc: "Install solar panels high enough to allow crop cultivation below, providing farmers with both a harvest and a secondary income from power."
  }
];

const ServiceCard = ({ service }) => (
  <div className="group bg-surface-muted border border-black/5 p-10 flex flex-col justify-between hover:border-primary transition-all duration-500 rounded-sm">
    <div className="space-y-6">
      <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
        {service.icon}
      </div>
      <div className="space-y-3">
        <h3 className="text-3xl font-black italic tracking-tighter uppercase text-text-primary leading-none">{service.name}</h3>
        <p className="font-sans text-[11px] font-black uppercase tracking-widest text-primary border-l-2 border-primary/20 pl-3">{service.bestFor}</p>
        <p className="font-sans text-sm text-text-muted leading-relaxed">{service.summary}</p>
      </div>
    </div>
    <div className="mt-10 pt-8 border-t border-black/5">
       <button className="flex items-center gap-3 font-sans font-black text-[10px] uppercase tracking-widest text-text-primary hover:text-primary transition-colors">
          Learn More <ArrowRight className="w-4 h-4" />
       </button>
    </div>
  </div>
);

const Services = () => {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />

      <PageHero 
        badge="Expert Mechanisms"
        title="Solar Solutions"
        highlight="& Mechanisms."
        description="From small homes to large textile factories in Punjab."
        image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=2000"
      />

      <div className="py-24 px-6 lg:px-12 max-w-[1800px] mx-auto">
        <div className="mb-24 space-y-4">
          <span className="text-primary font-sans font-black text-xs uppercase tracking-[0.5em]">The Catalogue</span>
          <h2 className="text-4xl lg:text-7xl font-black italic tracking-tighter uppercase text-text-primary leading-none">Available Mechanisms.</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} />
          ))}
        </div>

        <div className="mt-48 mb-48 space-y-12">
           <div className="space-y-4">
              <span className="text-primary font-sans font-black text-xs uppercase tracking-[0.5em]">The Matrix</span>
              <h2 className="text-4xl lg:text-7xl font-black italic tracking-tighter uppercase text-text-primary leading-none">Recommendation Guide.</h2>
           </div>
           
           <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                 <thead>
                    <tr className="bg-surface-muted text-left">
                       <th className="p-8 font-sans font-black text-xs uppercase tracking-widest text-text-muted border border-black/5">Client Category</th>
                       <th className="p-8 font-sans font-black text-xs uppercase tracking-widest text-text-muted border border-black/5">Best Solar Model</th>
                       <th className="p-8 font-sans font-black text-xs uppercase tracking-widest text-text-muted border border-black/5">Primary Benefit</th>
                    </tr>
                 </thead>
                 <tbody>
                    <tr>
                       <td className="p-8 font-sans font-black text-xl text-text-primary border border-black/5">Home / Small Office</td>
                       <td className="p-8 font-sans font-bold text-primary italic border border-black/5 text-lg">Net Metering</td>
                       <td className="p-8 font-sans text-sm text-text-muted border border-black/5 leading-relaxed">Grid acts as a free battery for your extra energy.</td>
                    </tr>
                    <tr className="bg-surface-muted/30">
                       <td className="p-8 font-sans font-black text-xl text-text-primary border border-black/5">Large Industry (Textile/Steel)</td>
                       <td className="p-8 font-sans font-bold text-primary italic border border-black/5 text-lg">Captive or Group Captive</td>
                       <td className="p-8 font-sans text-sm text-text-muted border border-black/5 leading-relaxed">Direct savings by bypassing high cross-subsidy taxes.</td>
                    </tr>
                    <tr>
                       <td className="p-8 font-sans font-black text-xl text-text-primary border border-black/5">Areas with Power Cuts</td>
                       <td className="p-8 font-sans font-bold text-primary italic border border-black/5 text-lg">DGPV Sync</td>
                       <td className="p-8 font-sans text-sm text-text-muted border border-black/5 leading-relaxed">Drastic reduction in diesel costs during grid failures.</td>
                    </tr>
                    <tr className="bg-surface-muted/30">
                       <td className="p-8 font-sans font-black text-xl text-text-primary border border-black/5">Housing Society</td>
                       <td className="p-8 font-sans font-bold text-primary italic border border-black/5 text-lg">Virtual Net Metering</td>
                       <td className="p-8 font-sans text-sm text-text-muted border border-black/5 leading-relaxed">Solves the problem of shared roof space for apartments.</td>
                    </tr>
                 </tbody>
              </table>
           </div>
        </div>

        <CTASection />
      </div>

      <Footer />
    </div>
  );
};

export default Services;
