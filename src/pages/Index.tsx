
import React from 'react';
import Hero from '@/components/portfolio/Hero';
import Portfolio from '@/components/portfolio/Portfolio';
import About from '@/components/portfolio/About';
import Contact from '@/components/portfolio/Contact';
import Navigation from '@/components/portfolio/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Portfolio />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
