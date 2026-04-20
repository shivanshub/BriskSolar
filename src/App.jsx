import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import ProductsPreview from './components/ProductsPreview';
import ServicesPreview from './components/ServicesPreview';
import SubsidyHighlight from './components/SubsidyHighlight';
import WhyChoose from './components/WhyChoose';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import Footer from './components/FooterB';
import Products from './pages/Products';
import Services from './pages/Services';
import Subsidy from './pages/Subsidy';
import About from './pages/About';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import PageHero from './components/PageHero';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTop';
import SmoothScroll from './components/SmoothScroll';

const Home = () => (
  <div className="relative min-h-screen">
    <div className="grain-overlay" />
    <Navbar />
    <main>
      <Hero />
      <ProductsPreview />
      <Stats />
      <SubsidyHighlight />
      <WhyChoose />
      <ServicesPreview />
      <Testimonials />
      <div className="mt-24 px-6 lg:px-12 max-w-[1800px] mx-auto pb-24">
        <CTASection />
      </div>
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <>
      <ScrollToTop />
      <BackToTop />
      <SmoothScroll />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/subsidy" element={<Subsidy />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
