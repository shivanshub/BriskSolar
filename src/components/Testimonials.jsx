import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: "Sarabjit Singh",
      city: "Patiala",
      quote: "Excellent installation and professional behavior. Brisk handled all my subsidy paperwork smoothly. Highly recommended!",
      rating: 5
    },
    {
      name: "Raman Kumar",
      city: "Ludhiana",
      quote: "Best pricing for Luminous inverters in Punjab. The engineering team is very knowledgeable about industrial mechanisms.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-12 bg-surface-muted">
      <div className="max-w-[1800px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
          <div className="space-y-4">
            <span className="text-primary font-sans font-black text-xs uppercase tracking-[0.5em]">Real Results</span>
            <h2 className="text-6xl lg:text-9xl font-black italic tracking-tighter uppercase leading-none text-text-primary">Trust.</h2>
          </div>
          <p className="font-sans text-xs text-text-muted uppercase tracking-widest max-w-xs italic leading-loose">
            Delivering excellence to 500+ satisfied residential and industrial clients across Punjab.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {reviews.map((rev, i) => (
            <div key={i} className="bg-surface border border-black/5 p-12 rounded-sm space-y-8 hover:bg-primary/5 transition-colors duration-700 relative overflow-hidden group">
               <Quote className="absolute top-8 right-8 w-24 h-24 text-black/5 group-hover:text-primary/10 transition-colors" />
               <div className="flex gap-1 text-primary">
                  {[...Array(rev.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
               </div>
               <p className="text-2xl font-bold italic leading-relaxed text-text-primary relative z-10">
                  "{rev.quote}"
               </p>
               <div className="space-y-1">
                  <h4 className="text-text-primary font-sans font-black text-sm uppercase tracking-widest">{rev.name}</h4>
                  <p className="text-text-muted font-sans text-[10px] uppercase tracking-[0.2em]">{rev.city}, Punjab</p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
