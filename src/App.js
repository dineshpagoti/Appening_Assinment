import React from 'react';
import HeroSection from './components/HeroSection';
import FounderSection from './components/FounderSection';
import TreatmentFocus from './components/TreatmentFocus';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import StepsSection from './components/StepsSection';
import StatesSection from './components/StatesSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import './App.css'; // You can add global styles here

const App = () => {
  return (
    <div>
      <HeroSection />
      <FounderSection />
      <TreatmentFocus />
      <ServicesSection />
      <TestimonialsSection />
      <StepsSection />
      <StatesSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default App;
