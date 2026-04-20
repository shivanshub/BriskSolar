import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import logo from '../assets/brisk-logo.png';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Services', href: '/services' },
    { name: 'Subsidy', href: '/subsidy' },
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' }
  ];

  const isAtTop = scrollY < 50;

  return (
    <nav className={`fixed top-0 w-full z-[100] px-6 lg:px-12 py-6 transition-all duration-700 ${!isAtTop ? 'bg-surface/90 backdrop-blur-xl py-4 shadow-2xl border-b border-black/5' : ''} ${isAtTop ? 'text-white' : 'text-text-primary'}`}>
      <div className="max-w-[1800px] mx-auto flex justify-between items-end">
        <Link to="/" className="flex group cursor-pointer">
          <img src={logo} alt="Brisk Logo" className={`h-8 lg:h-10 w-auto object-contain ${isAtTop ? 'brightness-0 invert' : ''}`} />
        </Link>

        <div className="hidden lg:flex items-center gap-6 font-sans text-[11px] uppercase tracking-[0.4em] font-black">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.href} 
              className={({ isActive }) => 
                `transition-all duration-500 ${isActive 
                  ? 'text-primary' 
                  : `${isAtTop ? 'text-white/60 hover:text-white' : 'text-text-muted hover:text-text-primary'}`}`
              }
            >
              {({ isActive }) => (
                <div className="relative group py-1">
                  <span>{link.name}</span>
                  <span className={`absolute -bottom-1 left-0 h-[2px] bg-primary transition-all duration-500 ${isActive ? 'w-[calc(100%-0.4em)]' : 'w-0 group-hover:w-[calc(100%-0.4em)]'}`} />
                </div>
              )}
            </NavLink>
          ))}
          <div className={`h-4 w-px mx-2 transition-colors ${isAtTop ? 'bg-white/10' : 'bg-black/10'}`} />
          <button className={`flex items-center gap-3 px-6 py-2.5 rounded-none font-black transition-all duration-300 group ml-2 border ${
            isAtTop 
              ? 'border-white/20 text-white hover:bg-primary hover:border-primary' 
              : 'border-black/10 text-text-primary hover:bg-primary hover:text-white hover:border-primary'
          }`}>
            <span>Get Free Quote</span>
            <ArrowRight className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ${isAtTop ? 'text-primary group-hover:text-white' : 'text-primary group-hover:text-white'}`} />
          </button>
        </div>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 lg:hidden">
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-surface/98 backdrop-blur-3xl border-t border-black/5 p-8 flex flex-col gap-4 animate-fadeInUp text-text-primary shadow-2xl">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.href} 
              className={({ isActive }) => 
                `flex items-center justify-between p-6 rounded-sm transition-all duration-300 ${isActive ? 'text-primary bg-primary/5' : 'hover:bg-black/5'}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {({ isActive }) => (
                <>
                  <div className="relative group">
                    <span className="text-2xl font-black italic tracking-tighter uppercase">{link.name}</span>
                    <span className={`absolute -bottom-1 left-0 h-[3px] bg-primary transition-all duration-500 ${isActive ? 'w-full' : 'w-0'}`} />
                  </div>
                  <ArrowRight className={`w-6 h-6 transition-all duration-500 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} />
                </>
              )}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
