import React, { useState, useEffect } from 'react';
import { Mail, Copy, Check } from 'lucide-react';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleQuickCopy = () => {
    navigator.clipboard.writeText('buy@brewvault.bar');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-6xl mx-auto px-8 md:px-16 flex items-start justify-between">
        {/* Brand identity matching Design HTML */}
        <a href="#" className="flex flex-col group">
          <span className="text-2xl font-bold tracking-[0.2em] uppercase text-[#D4AF37] group-hover:opacity-90 transition-opacity">
            BrewVault
          </span>
          <span className="text-[10px] tracking-[0.4em] uppercase opacity-40 mt-1 font-mono-luxury">
            Estate Reserve
          </span>
        </a>

        {/* Global Hubs */}
        <div className="hidden sm:flex flex-col text-right">
          <span className="text-[10px] tracking-[0.3em] uppercase opacity-50 font-mono-luxury">
            Location
          </span>
          <span className="text-xs tracking-widest uppercase text-[#E5E5E5] font-mono-luxury">
            NYC &mdash; LND &mdash; TYO
          </span>
        </div>

        {/* Navigation & Direct Email */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleQuickCopy}
            title="Copy email address"
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-none text-[10px] font-mono-luxury tracking-[0.2em] uppercase opacity-60 hover:opacity-100 border border-white/10 hover:border-[#D4AF37]/50 transition-all"
          >
            {copied ? <Check className="w-3 h-3 text-[#D4AF37]" /> : <Copy className="w-3 h-3" />}
            <span>{copied ? 'COPIED' : 'buy@brewvault.bar'}</span>
          </button>

          <a
            href="mailto:buy@brewvault.bar?subject=BrewVault%20Allocation%20Request"
            className="text-xs tracking-[0.2em] uppercase text-[#D4AF37] border-b border-[#D4AF37] pb-1 hover:text-white hover:border-white transition-all font-mono-luxury flex items-center gap-1.5"
          >
            <Mail className="w-3 h-3" />
            <span>Contact</span>
          </a>
        </div>
      </div>
    </header>
  );
};
