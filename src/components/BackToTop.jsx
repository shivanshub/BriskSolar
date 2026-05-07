import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button 
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 lg:bottom-12 lg:right-12 z-[200] group"
    >
      <div className="bg-primary text-white w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center shadow-2xl transition-all active:scale-95 group-hover:-translate-y-2 duration-500 border border-primary/20">
        <ChevronUp className="w-6 h-6 lg:w-8 h-8" />
      </div>
    </button>
  );
};

export default BackToTop;
