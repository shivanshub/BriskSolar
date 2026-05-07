import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';

const SmoothScroll = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // Smoothly scroll to top on every route change
    lenis.scrollTo(0, { duration: 1.5, ease: (t) => 1 - Math.pow(1 - t, 4) });

    return () => {
      lenis.destroy();
    };
  }, [pathname]);

  return null;
};

export default SmoothScroll;
