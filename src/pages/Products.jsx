import React from 'react';
import { ArrowRight, Zap, Sun, MessageSquare } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';
import PageHero from '../components/PageHero';

const inverters = [
  {
    brand: "Luminous",
    name: "Luminous On-Grid Inverter",
    type: "On-Grid",
    spec: "1kW – 10kW | 30 Year Warranty",
    image: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&q=80&w=800",
    tag: "Authorised Distributor"
  },
  {
    brand: "Amaze",
    name: "Amaze On-Grid Inverter",
    type: "On-Grid",
    spec: "1kW – 10kW | 30 Year Warranty",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=800",
    tag: "Authorised Distributor"
  },
  {
    brand: "Sofar",
    name: "Sofar On-Grid Inverter",
    type: "On-Grid",
    spec: "3kW – 50kW | 30 Year Warranty",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800",
    tag: "Smart Grid"
  },
  {
    brand: "FoxESS",
    name: "FoxESS On-Grid Inverter",
    type: "On-Grid",
    spec: "3kW – 100kW | 30 Year Warranty",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800",
    tag: "Smart Grid"
  },
  {
    brand: "Waaree",
    name: "Waaree On-Grid Inverter",
    type: "On-Grid",
    spec: "5kW – 10MW | 30 Year Warranty",
    image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=800",
    tag: "Industrial"
  }
];

const panels590 = [
  {
    brand: "Adani",
    name: "Adani TopCon Series",
    type: "Panel",
    spec: "N-Type TopCon | 30 Year Warranty",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800",
    tag: "Tier-1"
  },
  {
    brand: "Amaze",
    name: "Amaze TopCon Series",
    type: "Panel",
    spec: "High Yield | 30 Year Warranty",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800",
    tag: "Authorised Distributor"
  },
  {
    brand: "Luminous",
    name: "Luminous TopCon Series",
    type: "Panel",
    spec: "Bifacial | 30 Year Warranty",
    image: "https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&q=80&w=800",
    tag: "Authorised Distributor"
  },
  {
    brand: "Waaree",
    name: "Waaree TopCon Series",
    type: "Panel",
    spec: "Mono-Perc | 30 Year Warranty",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800",
    tag: "Tier-1"
  }
];

const panels550DCR = [
  {
    brand: "Amaze",
    name: "Amaze DCR Series",
    type: "Panel",
    spec: "DCR Approved | 30 Year Warranty",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
    tag: "Subsidy Ready"
  },
  {
    brand: "Luminous",
    name: "Luminous DCR Series",
    type: "Panel",
    spec: "DCR Approved | 30 Year Warranty",
    image: "https://images.unsplash.com/photo-1466611653911-954554ca0a48?auto=format&fit=crop&q=80&w=800",
    tag: "Subsidy Ready"
  },
  {
    brand: "Adani",
    name: "Adani DCR Series",
    type: "Panel",
    spec: "Made in India | 30 Year Warranty",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800",
    tag: "Subsidy Ready"
  },
  {
    brand: "Rayzon",
    name: "Rayzon DCR Series",
    type: "Panel",
    spec: "High Efficiency | 30 Year Warranty",
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
    </div>

    <div className="p-8 space-y-4">
      <div>
        <span className="text-primary font-body font-extrabold text-[10px] uppercase tracking-[0.3em] block mb-1">{product.brand}</span>
        <h3 className="text-xl font-extrabold tracking-tighter text-text-primary font-heading">{product.name}</h3>
      </div>
      <p className="text-[11px] font-body font-bold uppercase tracking-widest text-text-muted border-l-2 border-primary/30 pl-3">
        {product.spec}
      </p>
      <button className="w-full mt-4 flex items-center justify-center gap-3 bg-text-primary text-white py-4 font-body font-extrabold text-[10px] uppercase tracking-widest group-hover:bg-primary transition-colors duration-300">
        <MessageSquare className="w-4 h-4" />
        Get Quote
      </button>
    </div>
  </div>
);

const SectionHeader = ({ title }) => (
  <div className="flex items-end justify-between mb-12">
    <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tighter uppercase text-text-primary font-heading">{title}</h2>
  </div>
);

const Products = () => {
  const [activeTab, setActiveTab] = React.useState('inverters');

  const categories = [
    { id: 'inverters', name: 'Inverters', icon: <Zap className="w-4 h-4" />, data: inverters },
    { id: 'topcon', name: 'TopCon Panels', icon: <Sun className="w-4 h-4" />, data: panels590 },
    { id: 'dcr', name: 'DCR Panels', icon: <Sun className="w-4 h-4" />, data: panels550DCR }
  ];

  const activeCategory = categories.find(cat => cat.id === activeTab);

  return (
    <div className="min-h-screen bg-surface">
      <Navbar />

      <PageHero 
        badge="Inventory"
        title="Premium Solar"
        highlight="Catalog."
        description="Explore our curated range of high-efficiency inverters and panels from global industry leaders."
        image="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=2000"
      />

      <div className="py-24 px-6 lg:px-12 max-w-[1800px] mx-auto">
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-3 px-8 py-4 font-body font-extrabold text-[10px] uppercase tracking-[0.3em] transition-all duration-500 border ${
                activeTab === cat.id 
                  ? 'bg-primary border-primary text-white shadow-xl shadow-primary/20 scale-105' 
                  : 'bg-white border-black/5 text-text-muted hover:border-primary/30 hover:text-primary'
              }`}
            >
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="animate-fadeInUp">
          <SectionHeader title={activeCategory.name} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
            {activeCategory.data.map((p, i) => (
              <ProductCard key={`${activeTab}-${i}`} product={p} />
            ))}
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
