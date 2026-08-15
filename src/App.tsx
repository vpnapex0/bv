import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProtocolSection } from './components/ProtocolSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const handleExploreProtocol = () => {
    const el = document.getElementById('protocol');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E5E5E5] flex flex-col justify-between selection:bg-[#D4AF37] selection:text-black font-sans relative">
      {/* Top Navigation */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        <Hero onExploreProtocol={handleExploreProtocol} />
        <ProtocolSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
