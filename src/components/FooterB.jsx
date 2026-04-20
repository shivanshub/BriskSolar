import { Link } from 'react-router-dom';
import logo from '../assets/brisk-logo.png';

const FooterB = () => {
  return (
    <footer className="bg-black py-32 px-6 lg:px-12 relative overflow-hidden">
      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none opacity-5">
        <span className="text-[15rem] lg:text-[28rem] font-black italic tracking-tighter leading-none text-white whitespace-nowrap">BRISK.</span>
      </div>

      <div className="max-w-[1800px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-32">
          
          <div className="space-y-12">
            <Link to="/" className="flex group cursor-pointer w-fit">
              <img src={logo} alt="Brisk Logo" className="h-10 lg:h-12 w-auto object-contain brightness-0 invert" />
            </Link>
            <p className="font-sans text-base text-white/40 italic leading-relaxed max-w-[320px]">
              Engineered solar solutions for Punjab's future. Authorized distributor of Luminous & Amaze power systems.
            </p>
          </div>

          <div className="space-y-10">
            <span className="text-xs font-sans font-black uppercase tracking-[0.4em] text-white/30 block">Navigation</span>
            <ul className="space-y-5 font-black italic text-2xl uppercase tracking-tighter text-white">
              <li className="hover:text-primary transition-colors cursor-pointer"><a href="/">Home</a></li>
              <li className="hover:text-primary transition-colors cursor-pointer"><a href="/products">Products</a></li>
              <li className="hover:text-primary transition-colors cursor-pointer"><a href="/services">Services</a></li>
              <li className="hover:text-primary transition-colors cursor-pointer"><a href="/about">About</a></li>
            </ul>
          </div>

          <div className="space-y-10">
             <span className="text-xs font-sans font-black uppercase tracking-[0.4em] text-white/30 block">Location & Contact</span>
             <div className="space-y-8 font-sans">
                <div className="space-y-2">
                  <p className="text-xs text-white/20 uppercase tracking-widest font-black">Official HQ</p>
                  <p className="text-white text-base font-bold">Near Jaggi Sweet, Sirhind Road,<br />Patiala - 147001</p>
                </div>
                <div className="space-y-2">
                  <p className="text-xs text-white/20 uppercase tracking-widest font-black">Electronic Mail</p>
                  <p className="text-white text-base font-bold">Brisksolar61@gmail.com</p>
                </div>
                <div className="space-y-2">
                  <p className="text-xs text-white/20 uppercase tracking-widest font-black">Direct Line</p>
                  <p className="text-primary text-2xl font-black italic tracking-tight">+91 88200-00061</p>
                </div>
             </div>
          </div>

          <div className="space-y-10 lg:text-right">
             <span className="text-xs font-sans font-black uppercase tracking-[0.4em] text-white/30 block">Certified Partners</span>
             <div className="flex lg:flex-col lg:items-end gap-6 opacity-30">
               <span className="text-3xl font-black italic tracking-tighter text-white">LUMINOUS.</span>
               <span className="text-3xl font-black italic tracking-tighter text-white">AMAZE.</span>
             </div>
             <div className="pt-20">
               <button className="bg-white text-black px-8 py-4 font-sans font-black text-[9px] uppercase tracking-widest hover:bg-primary hover:text-white transition-all">Get Free Consultation</button>
             </div>
          </div>

        </div>

        <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-sans font-black uppercase tracking-[0.4em] text-white/20">
            © 2026 Brisk Enterprise. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] font-sans font-black uppercase tracking-widest text-white/40">
            <span className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-primary transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterB;
