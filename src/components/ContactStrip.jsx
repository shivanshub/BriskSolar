import React from 'react';
import { Phone, Mail, MessageSquare, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactStrip = () => {
  return (
    <section className="relative py-32 px-6 lg:px-12 overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&q=80&w=2000"
          alt="Solar background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-black/80 to-black" />
      </div>

      <div className="max-w-[1800px] mx-auto relative z-10">
        <div className="mb-20 space-y-4">
          <span className="text-primary font-sans font-black text-xs uppercase tracking-[0.5em]">Get In Touch</span>
          <h2 className="text-7xl lg:text-[10rem] font-black italic tracking-tighter leading-[0.85] uppercase text-white">
            Ready to<br />
            <span className="text-primary">go solar?</span>
          </h2>
          <p className="font-sans text-white/50 italic max-w-md leading-relaxed mt-6">
            Get a free site assessment and customised quote within 24 hours from Punjab's most trusted Solar EPC partner.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12 border-t border-white/10 pt-16">
          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="tel:+918820000061"
              className="flex items-center gap-5 group"
            >
              <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-[9px] font-sans font-black uppercase tracking-widest text-white/30 block">Call Us</span>
                <span className="font-sans font-bold text-white text-lg">+91 88200-00061</span>
              </div>
            </a>

            <div className="w-px bg-white/10 hidden sm:block" />

            <a
              href="mailto:Brisksolar61@gmail.com"
              className="flex items-center gap-5 group"
            >
              <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-[9px] font-sans font-black uppercase tracking-widest text-white/30 block">Email Us</span>
                <span className="font-sans font-bold text-white text-base">Brisksolar61@gmail.com</span>
              </div>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/918820000061"
              className="flex items-center gap-3 bg-[#25D366] text-white px-8 py-5 font-sans font-black text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-xl"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Chat</span>
            </a>
            <Link to="/contact" className="flex items-center gap-3 bg-white text-black px-8 py-5 font-sans font-black text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all group shadow-xl">
              <span>Get Free Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactStrip;
