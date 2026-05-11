import { Link } from 'react-router-dom';
const logo = "/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-surface-muted py-32 px-6 lg:px-12 relative overflow-hidden border-t border-black/5">
      <div className="absolute bottom-0 lg:-bottom-12 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none opacity-[0.04]">
        <span className="text-[25vw] lg:text-[28rem] font-extrabold tracking-tighter leading-none text-black whitespace-nowrap font-heading">BRISK.</span>
      </div>

      <div className="max-w-[1800px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-32">
          
          <div className="space-y-12">
            <Link to="/" className="flex group cursor-pointer w-fit">
              <img src={logo} alt="Brisk Logo" className="h-10 lg:h-12 w-auto object-contain" />
            </Link>
            <p className="font-body text-base text-text-muted leading-relaxed max-w-[320px]">
              Engineered solar solutions for North India's future. Authorized distributor of Luminous & Amaze power systems.
            </p>
          </div>

          <div className="space-y-10">
            <span className="text-xs font-body font-extrabold uppercase tracking-[0.4em] text-text-muted/30 block">Navigation</span>
            <ul className="space-y-5 font-extrabold text-2xl uppercase tracking-tighter text-text-primary font-heading">
              <li className="hover:text-primary transition-colors cursor-pointer"><a href="/">Home</a></li>
              <li className="hover:text-primary transition-colors cursor-pointer"><a href="/products">Products</a></li>
              <li className="hover:text-primary transition-colors cursor-pointer"><a href="/services">Services</a></li>
              <li className="hover:text-primary transition-colors cursor-pointer"><a href="/about">About</a></li>
            </ul>
          </div>

          <div className="space-y-10">
            <span className="text-xs font-body font-extrabold uppercase tracking-[0.4em] text-text-muted/30 block">Location</span>
            <div className="space-y-8 font-body">
                <div className="space-y-2">
                   <p className="text-xs text-text-muted/40 uppercase tracking-widest font-extrabold">Official HQ (Punjab)</p>
                   <p className="text-text-primary text-base font-bold">Near Jaggi Sweet, Sirhind Road,<br />Patiala - 147001</p>
                </div>
                <div className="space-y-2">
                   <p className="text-xs text-text-muted/40 uppercase tracking-widest font-extrabold">Regional Office (UP)</p>
                   <p className="text-text-primary text-base font-bold">Near Indian Marriage Home,<br />Jhadkhedi Road, Kairana (Shamli)</p>
                </div>
            </div>
          </div>

          <div className="space-y-10 lg:text-right">
             <span className="text-xs font-body font-extrabold uppercase tracking-[0.4em] text-text-muted/30 block">Contact</span>
             <div className="space-y-8 font-body">
                <div className="space-y-2">
                   <p className="text-xs text-text-muted/40 uppercase tracking-widest font-extrabold">Direct Line</p>
                   <p className="text-primary text-2xl font-extrabold tracking-tight font-heading">+91 88200-00061</p>
                </div>
                <div className="space-y-2">
                   <p className="text-xs text-text-muted/40 uppercase tracking-widest font-extrabold">Electronic Mail</p>
                   <p className="text-text-primary text-base font-bold">Brisksolar61@gmail.com</p>
                </div>

             </div>
          </div>

        </div>

        <div className="mt-32 pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-body font-extrabold uppercase tracking-[0.4em] text-text-muted/40">
            © 2026 Brisk Enterprise. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] font-body font-extrabold uppercase tracking-widest text-text-muted/60">
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
