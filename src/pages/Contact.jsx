import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, Send, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/FooterB';
import CTASection from '../components/CTASection';
import PageHero from '../components/PageHero';

const Contact = () => {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />

      <PageHero 
        badge="Connect With Us"
        title="Get In"
        highlight="Touch."
        description="Leading Punjab's solar revolution. We respond to all enquiries within 24 hours."
        image="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80&w=2000"
      />

      <div className="py-24 px-6 lg:px-12 max-w-[1800px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-20">
          
          <div className="lg:col-span-5 space-y-16">
             <div className="space-y-4">
                <span className="text-primary font-sans font-black text-xs uppercase tracking-[0.5em]">Direct Channels</span>
                <h2 className="text-5xl lg:text-7xl font-black italic tracking-tighter uppercase text-text-primary leading-none">Reach Out.</h2>
             </div>

             <div className="space-y-8">
                <div className="flex gap-8 group p-8 bg-surface-muted border border-black/5 hover:border-primary/20 transition-all rounded-sm">
                   <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                      <Phone className="w-6 h-6" />
                   </div>
                   <div className="space-y-1">
                      <span className="text-[10px] font-sans font-black uppercase tracking-widest text-text-muted">Direct Mobile</span>
                      <p className="font-sans font-black text-xl text-text-primary italic">+91 88200-00061</p>
                      <p className="font-sans font-black text-xl text-text-primary italic">+91 91432-00061</p>
                   </div>
                </div>

                <div className="flex gap-8 group p-8 bg-surface-muted border border-black/5 hover:border-primary/20 transition-all rounded-sm">
                   <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                      <MapPin className="w-6 h-6" />
                   </div>
                   <div className="space-y-1">
                      <span className="text-[10px] font-sans font-black uppercase tracking-widest text-text-muted">Visit Office</span>
                      <p className="font-sans font-black text-xl text-text-primary italic leading-tight">Near Jaggi Sweet, Sirhind Road,<br /> Patiala - 147001, Punjab</p>
                   </div>
                </div>

                <div className="flex gap-8 group p-8 bg-surface-muted border border-black/5 hover:border-primary/20 transition-all rounded-sm">
                   <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                      <Mail className="w-6 h-6" />
                   </div>
                   <div className="space-y-1">
                      <span className="text-[10px] font-sans font-black uppercase tracking-widest text-text-muted">Official Email</span>
                      <p className="font-sans font-black text-xl text-text-primary italic">Brisksolar61@gmail.com</p>
                   </div>
                </div>
             </div>

             <div className="p-12 bg-black text-white relative overflow-hidden rounded-sm">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px]" />
                <div className="relative z-10 space-y-6">
                   <p className="font-sans text-white/50 italic leading-relaxed">"Join the thousands of families in Punjab who have already protected their future from rising electricity costs."</p>
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                         <img src="https://i.pravatar.cc/150?img=12" alt="Nipun" />
                      </div>
                      <div>
                         <p className="font-sans font-black text-xs uppercase tracking-widest">Er. Nipun Ahuja</p>
                         <p className="text-[10px] text-primary uppercase font-bold">Founder</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          <div className="lg:col-span-7 bg-white p-8 lg:p-20 border border-black/5 rounded-sm shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] relative overflow-hidden">
             <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] -mr-48 -mt-48 rounded-full" />
             
             <div className="relative z-10 space-y-16">
                <div className="space-y-3">
                   <h2 className="text-4xl lg:text-5xl font-black italic tracking-tighter uppercase text-text-primary leading-none">Request A Quote.</h2>
                   <p className="font-sans text-[11px] font-black uppercase tracking-[0.3em] text-text-muted">Professional guidance for your solar transition</p>
                </div>

                <form className="space-y-16">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                      <div className="space-y-4 group">
                         <div className="flex items-center gap-2">
                           <span className="text-[10px] text-primary font-black">01</span>
                           <label className="text-[10px] font-sans font-black uppercase tracking-[0.4em] text-text-muted group-focus-within:text-primary transition-colors">Full Name *</label>
                         </div>
                         <input type="text" className="w-full bg-transparent border-b border-black/10 py-4 focus:outline-none focus:border-primary transition-all font-sans font-bold text-base" placeholder="Harpreet Singh" />
                      </div>
                      
                      <div className="space-y-4 group">
                         <div className="flex items-center gap-2">
                           <span className="text-[10px] text-primary font-black">02</span>
                           <label className="text-[10px] font-sans font-black uppercase tracking-[0.4em] text-text-muted group-focus-within:text-primary transition-colors">Mobile No *</label>
                         </div>
                         <input type="tel" className="w-full bg-transparent border-b border-black/10 py-4 focus:outline-none focus:border-primary transition-all font-sans font-bold text-base" placeholder="+91 00000 00000" />
                      </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 pt-4">
                      <div className="space-y-4 group">
                         <div className="flex items-center gap-2">
                           <span className="text-[10px] text-primary font-black">03</span>
                           <label className="text-[10px] font-sans font-black uppercase tracking-[0.4em] text-text-muted group-focus-within:text-primary transition-colors">Site Location</label>
                         </div>
                         <input type="text" className="w-full bg-transparent border-b border-black/10 py-4 focus:outline-none focus:border-primary transition-all font-sans font-bold text-base" placeholder="City, Punjab" />
                      </div>

                      <div className="space-y-4 group">
                         <div className="flex items-center gap-2">
                           <span className="text-[10px] text-primary font-black">04</span>
                           <label className="text-[10px] font-sans font-black uppercase tracking-[0.4em] text-text-muted group-focus-within:text-primary transition-colors">Installation Type</label>
                         </div>
                         <select className="w-full bg-transparent border-b border-black/10 py-4 focus:outline-none focus:border-primary transition-all font-sans font-bold text-base cursor-pointer appearance-none">
                            <option>Residential (Home)</option>
                            <option>Commercial (Office)</option>
                            <option>Industrial (Factory)</option>
                            <option>Agriculture (Farm)</option>
                         </select>
                      </div>

                      <div className="md:col-span-2 space-y-4 group pt-4">
                         <div className="flex items-center gap-2">
                           <span className="text-[10px] text-primary font-black">05</span>
                           <label className="text-[10px] font-sans font-black uppercase tracking-[0.4em] text-text-muted group-focus-within:text-primary transition-colors">Requirements</label>
                         </div>
                         <textarea rows="3" className="w-full bg-transparent border-b border-black/10 py-4 focus:outline-none focus:border-primary transition-all font-sans font-bold text-base resize-none" placeholder="Briefly describe your energy needs or roof space..."></textarea>
                      </div>
                   </div>

                   <button className="w-full bg-black text-white py-8 font-sans font-black uppercase tracking-[0.5em] text-xs hover:bg-primary transition-all flex items-center justify-center gap-3 shadow-2xl group border border-transparent active:scale-95">
                      Initialize Consultation <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                   </button>
                </form>
             </div>
          </div>
        </div>
        
        <div className="mt-48">
          <CTASection />
        </div>

        {/* 
        <div className="mt-48 w-full h-[500px] bg-surface-muted border border-black/5 relative overflow-hidden flex items-center justify-center grayscale">
           <div className="absolute inset-0 z-0">
             <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover opacity-30" alt="Map" />
           </div>
           <div className="relative z-10 text-center space-y-6">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary border border-primary/20">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-black italic uppercase tracking-tighter text-text-primary">Our Patiala Office.</h3>
              <p className="font-sans text-xs uppercase tracking-[0.4em] text-text-muted">Near Jaggi Sweet, Sirhind Road</p>
              <button className="bg-white px-8 py-3 border border-black/5 font-sans font-black text-[10px] uppercase tracking-widest hover:bg-black hover:text-white transition-all">Open in Google Maps</button>
           </div>
        </div>
        */}
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
