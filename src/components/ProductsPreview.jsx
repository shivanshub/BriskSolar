import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductsPreview = () => {
  const products = [
    {
      brand: "Luminous",
      type: "Solar Inverters",
      image: "https://www.luminousindia.com/media/catalog/product/cache/1/thumbnail/600x450/17f82f742ffe127f42dca9de82fb58b1/n/x/nxg_pro_1100_1.jpg",
      description: "India's most trusted inverter brand."
    },
    {
      brand: "Amaze",
      type: "Solar Batteries",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=800",
      description: "Premium energy storage solutions."
    },
    {
      brand: "Waaree",
      type: "Solar Panels",
      image: "https://www.waaree.com/storage/app/public/products/1619517491.jpg",
      description: "Tier-1 Monocrystalline modules."
    },
    {
      brand: "Adani Solar",
      type: "Solar Modules",
      image: "https://www.adanigreenenergy.com/media/images/solar-panels-product.jpg",
      description: "Efficient solar PV technology."
    },
    {
      brand: "FoxESS",
      type: "String Inverters",
      image: "https://www.fox-ess.com/uploads/image/20220816/1660626600.png",
      description: "Smart grid-tie inverters."
    },
    {
      brand: "Sofar Solar",
      type: "Hybrid Systems",
      image: "https://www.sofarsolar.com/data/upload/image/20220728/1658986800951.jpg",
      description: "Advanced hybrid energy systems."
    }
  ];

  const fallbacks = [
    "https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1620714223084-8dfca62edf16?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800"
  ];

  return (
    <section className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-[1800px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div className="space-y-4">
            <span className="text-primary font-sans font-black text-xs uppercase tracking-[0.5em]">Inventory</span>
            <h2 className="text-6xl lg:text-9xl font-black italic tracking-tighter uppercase text-text-primary">What We Supply.</h2>
          </div>
          <p className="font-sans text-sm text-text-muted italic max-w-xs text-right hidden lg:block">
            Authorized distributor for Punjab's most trusted solar brands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/5 border border-black/5 rounded-sm overflow-hidden">
          {products.map((product, i) => (
            <div key={i} className="group relative aspect-square bg-surface-muted overflow-hidden flex flex-col justify-end p-10">
              <div className="absolute inset-0 z-0 opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000">
                <img
                  src={product.image}
                  alt={product.brand}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = fallbacks[i]; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10 group-hover:from-black/80 group-hover:via-black/30 group-hover:to-transparent transition-all duration-700" />
              </div>

              <div className="relative z-10 space-y-2">
                <span className="text-primary font-sans font-black text-[10px] uppercase tracking-[0.3em] block drop-shadow">{product.type}</span>
                <h3 className="text-4xl font-black italic tracking-tighter uppercase text-white transition-colors duration-500 drop-shadow-lg">
                  {product.brand}.
                </h3>
                <p className="text-[10px] font-sans font-bold uppercase tracking-widest text-white/60 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {product.description}
                </p>
              </div>


            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-end">
          <Link to="/products" className="flex items-center gap-2 group text-primary font-sans font-bold text-[10px] uppercase tracking-widest">
            <span>View All Brand Partnerships</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;
