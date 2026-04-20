import React from 'react';
import { ArrowRight, Zap, Sun, MessageSquare } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/FooterB';
import CTASection from '../components/CTASection';
import PageHero from '../components/PageHero';

const inverters = [
  {
    brand: "Luminous",
    name: "Luminous On-Grid Inverter",
    type: "On-Grid",
    spec: "1kW – 10kW | Single & Three Phase",
    image: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&q=80&w=800",
    tag: "Authorised Distributor"
  },
  {
    brand: "Amaze",
    name: "Amaze On-Grid Inverter",
    type: "On-Grid",
    spec: "1kW – 10kW | Mono MPPT",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=800",
    tag: "Authorised Distributor"
  },
  {
    brand: "Sofar",
    name: "Sofar On-Grid Inverter",
    type: "On-Grid",
    spec: "3kW – 50kW | Hybrid Ready",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800",
    tag: "Smart Grid"
  },
  {
    brand: "FoxESS",
    name: "FoxESS On-Grid Inverter",
    type: "On-Grid",
    spec: "3kW – 100kW | Wi-Fi Monitor",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800",
    tag: "Smart Grid"
  },
  {
    brand: "Waaree",
    name: "Waaree On-Grid Inverter",
    type: "On-Grid",
    spec: "5kW – 1MW | Industrial Grade",
    image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=800",
    tag: "Industrial"
  }
];

const panels590 = [
  {
    brand: "Adani",
    name: "Adani 590W TopCon",
    type: "Panel",
    spec: "590W | N-Type TopCon | 22.5% Efficiency",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800",
    tag: "Tier-1"
  },
  {
    brand: "Amaze",
    name: "Amaze 590W TopCon",
    type: "Panel",
    spec: "590W | N-Type TopCon | High Yield",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800",
    tag: "Authorised Distributor"
  },
  {
    brand: "Luminous",
    name: "Luminous 590W TopCon",
    type: "Panel",
    spec: "590W | Bifacial | 25 Year Warranty",
    image: "https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&q=80&w=800",
    tag: "Authorised Distributor"
  },
  {
    brand: "Waaree",
    name: "Waaree 590W TopCon",
    type: "Panel",
    spec: "590W | Mono-Perc | Tier-1 Grade",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800",
    tag: "Tier-1"
  }
];

const panels550DCR = [
  {
    brand: "Amaze",
    name: "Amaze DCR 550W",
    type: "Panel",
    spec: "550W | DCR Approved | Subsidy Eligible",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
    tag: "Subsidy Ready"
  },
  {
    brand: "Luminous",
    name: "Luminous DCR 550W",
    type: "Panel",
    spec: "550W | DCR | MNRE Approved",
    image: "https://images.unsplash.com/photo-1466611653911-954554ca0a48?auto=format&fit=crop&q=80&w=800",
    tag: "Subsidy Ready"
  },
  {
    brand: "Adani",
    name: "Adani DCR 550W",
    type: "Panel",
    spec: "550W | DCR | Made in India",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800",
    tag: "Subsidy Ready"
  },
  {
    brand: "Rayzon",
    name: "Rayzon DCR 550W",
    type: "Panel",
    spec: "550W | DCR | High Efficiency",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800",
    tag: "Subsidy Ready"
  }
];

const ProductCard = ({ product }) => (
  <div className="group relative bg-surface-muted border border-black/5 overflow-hidden hover:shadow-2xl hover:border-primary/20 transition-all duration-500">
    <div className="relative aspect-[4/3] overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800"; }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <span className="absolute top-4 left-4 text-[9px] font-sans font-black uppercase tracking-widest px-3 py-1.5 bg-primary text-white">
        {product.tag}
      </span>
      <span className="absolute top-4 right-4 text-[9px] font-sans font-black uppercase tracking-widest px-3 py-1.5 bg-black/40 backdrop-blur-md text-white border border-white/20">
        {product.type}
      </span>
    </div>

    <div className="p-8 space-y-4">
      <div>
        <span className="text-primary font-sans font-black text-[10px] uppercase tracking-[0.3em] block mb-1">{product.brand}</span>
        <h3 className="text-2xl font-black italic tracking-tighter text-text-primary">{product.name}</h3>
      </div>
      <p className="text-[11px] font-sans font-bold uppercase tracking-widest text-text-muted border-l-2 border-primary/30 pl-3">
        {product.spec}
      </p>
      <button className="w-full mt-4 flex items-center justify-center gap-3 bg-text-primary text-white py-4 font-sans font-black text-[10px] uppercase tracking-widest group-hover:bg-primary transition-colors duration-300">
        <MessageSquare className="w-4 h-4" />
        Get Quote
      </button>
    </div>
  </div>
);

const SectionHeader = ({ title, count }) => (
  <div className="flex items-end justify-between mb-12">
    <h2 className="text-4xl lg:text-6xl font-black italic tracking-tighter uppercase text-text-primary">{title}</h2>
    <span className="font-sans font-bold text-xs uppercase tracking-widest text-text-muted">{count} Products</span>
  </div>
);

const Products = () => {

  return (
    <div className="min-h-screen bg-surface">
      <Navbar />

      <PageHero 
        badge="Our Inventory"
        title="Our Product"
        highlight="Range."
        description="Top brands, best prices, subsidy-ready — all in one place."
        image="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=2000"
      />


      <div className="py-24 px-6 lg:px-12 space-y-32 max-w-[1800px] mx-auto">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <Zap className="w-5 h-5 text-primary" />
            <span className="text-primary font-sans font-black text-xs uppercase tracking-[0.5em]">Section 01</span>
          </div>
          <SectionHeader title="On-Grid Inverters" count={inverters.length} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {inverters.map((p, i) => <ProductCard key={i} product={p} />)}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-4 mb-4">
            <Sun className="w-5 h-5 text-primary" />
            <span className="text-primary font-sans font-black text-xs uppercase tracking-[0.5em]">Section 02</span>
          </div>
          <SectionHeader title="Solar Panels 590W TopCon" count={panels590.length} />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {panels590.map((p, i) => <ProductCard key={i} product={p} />)}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-4 mb-4">
            <Sun className="w-5 h-5 text-primary" />
            <span className="text-primary font-sans font-black text-xs uppercase tracking-[0.5em]">Section 03</span>
          </div>
          <SectionHeader title="Solar Panels DCR 550W" count={panels550DCR.length} />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {panels550DCR.map((p, i) => <ProductCard key={i} product={p} />)}
          </div>
        </div>
      </div>

      <div className="mt-24 px-6 lg:px-12 max-w-[1800px] mx-auto pb-24">
        <CTASection />
      </div>

      <Footer />
    </div>
  );
};

export default Products;
