import { Link } from 'react-router-dom';
import logo from '../assets/brisk-logo.png';

const Footer = () => {
  return (
    <footer className="bg-surface-muted py-32 px-6 lg:px-12 border-t border-black/5">
      <div className="max-w-[1800px] mx-auto grid lg:grid-cols-2 gap-20 items-start">
        <div className="space-y-12">
          <Link to="/" className="flex flex-col group cursor-pointer w-fit">
            <span className="text-8xl lg:text-[14rem] font-black text-black/5 italic tracking-tighter leading-none select-none group-hover:text-primary/10 transition-colors">BRISK.</span>
            <div className="flex group mt-[-2rem] lg:mt-[-4rem] ml-2 lg:ml-4">
              <img src={logo} alt="Brisk Logo" className="h-12 w-auto object-contain" />
            </div>
          </Link>

          <div className="flex flex-wrap gap-12 font-sans text-[10px] uppercase tracking-[0.5em] font-bold text-text-muted">
            <div className="space-y-2">
              <p className="text-text-muted/40">Location</p>
              <p className="text-text-primary hover:text-primary transition-colors">Sirhind Road, Patiala — PB</p>
            </div>
            <div className="space-y-2">
              <p className="text-text-muted/40">Digital</p>
              <p className="text-text-primary hover:text-primary transition-colors">Brisksolar61@gmail.com</p>
            </div>
            <div className="space-y-2">
              <p className="text-text-muted/40">Direct</p>
              <p className="text-text-primary hover:text-primary transition-colors">+91 88200-00061</p>
            </div>
          </div>
        </div>

        <div className="space-y-12 lg:text-right">
          <p className="font-sans text-sm text-text-muted max-w-sm lg:ml-auto italic leading-relaxed">
            Authorized Distributor of Amaze & Luminous. Providing end-to-end solar EPC solutions across Punjab with verified government subsidy integration.
          </p>
          <div className="space-y-6">
            <div className="flex lg:justify-end items-center gap-10">
              <div className="text-black/5 font-black text-4xl italic tracking-tighter">LUMINOUS.</div>
              <div className="text-primary/20 font-black text-4xl italic tracking-tighter">AMAZE.</div>
            </div>
            <div className="font-sans text-[9px] uppercase tracking-[0.4em] font-bold text-text-muted/60">
              © 2026 Brisk Enterprise. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
