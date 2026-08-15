import React from 'react';
import { Mail, ArrowDown } from 'lucide-react';

interface HeroProps {
  onExploreProtocol: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProtocol }) => {
  return (
    <section className="relative pt-32 pb-16 px-6 md:px-16 flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Subtle background ambient elements */}
      <div className="absolute top-0 right-0 w-[450px] h-full bg-gradient-to-l from-[#111111] to-transparent opacity-40 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#222222] rounded-full blur-[100px] opacity-20 pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-[360px] bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        {/* Category Label */}
        <div className="mb-6">
          <span className="text-[10px] tracking-[0.5em] uppercase text-[#D4AF37] border-b border-[#D4AF37] pb-1.5 px-3 font-mono-luxury inline-block">
            The Urban Concentrate
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-7xl md:text-[90px] font-extralight tracking-tighter leading-[0.92] mb-6 text-[#E5E5E5] uppercase select-none">
          Pure Energy. <br />
          <span className="font-medium opacity-20">Zero Friction.</span>
        </h1>

        {/* Subtext */}
        <p className="max-w-md text-xs sm:text-sm font-extralight tracking-[0.18em] leading-relaxed opacity-60 uppercase font-mono-luxury mb-10">
          High-pressure extracted 18-hour cold brew concentrate. Crafted for the relentless schedule of the modern professional.
        </p>

        {/* Minimalist 3 Metrics */}
        <div className="grid grid-cols-3 gap-6 sm:gap-12 w-full max-w-md mb-10 py-3.5 border-y border-white/10 text-center font-mono-luxury">
          <div className="flex flex-col items-center">
            <span className="text-[10px] tracking-[0.25em] uppercase opacity-40 mb-0.5">Ratio</span>
            <span className="text-xs sm:text-sm tracking-[0.15em] text-[#E5E5E5] uppercase font-light">1:4 Pure</span>
          </div>
          <div className="flex flex-col items-center border-x border-white/10 px-3">
            <span className="text-[10px] tracking-[0.25em] uppercase opacity-40 mb-0.5">Volume</span>
            <span className="text-xs sm:text-sm tracking-[0.15em] text-[#E5E5E5] uppercase font-light">500ml Net</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[10px] tracking-[0.25em] uppercase opacity-40 mb-0.5">Yield</span>
            <span className="text-xs sm:text-sm tracking-[0.15em] text-[#D4AF37] uppercase font-light">16 Serves</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="mailto:buy@brewvault.bar?subject=Allocation%20Request%20-%20BrewVault&body=Hello%20BrewVault%2C%0A%0AI%20would%20like%20to%20request%20an%20allocation%20of%20BrewVault%20Concentrate.%0A%0AName%3A%20%0ALocation%3A%20"
            className="w-full sm:w-auto px-8 py-3 bg-[#D4AF37] text-black text-xs font-mono-luxury tracking-[0.2em] uppercase hover:bg-white transition-all duration-200 flex items-center justify-center gap-2 font-medium"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email Us</span>
          </a>

          <button
            onClick={onExploreProtocol}
            className="w-full sm:w-auto text-xs font-mono-luxury tracking-[0.2em] uppercase opacity-60 hover:opacity-100 transition-opacity border-b border-white/20 hover:border-white pb-1 flex items-center justify-center gap-1.5"
          >
            <span>The Pour Protocol</span>
            <ArrowDown className="w-3 h-3 text-[#D4AF37]" />
          </button>
        </div>
      </div>
    </section>
  );
};
