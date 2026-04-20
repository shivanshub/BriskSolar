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
      className="fixed bottom-12 right-12 z-[200] group animate-fadeInUp"
    >
      <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all active:scale-95 relative">
        <ChevronUp className="w-8 h-8 transition-transform" />
      </div>
    </button>
  );
};

export default BackToTop;
