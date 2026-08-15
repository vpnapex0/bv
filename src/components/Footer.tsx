import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const [times, setTimes] = useState({
    nyc: '',
    lon: '',
    tky: '',
  });

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTimes({
        nyc: now.toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit', hour12: false }),
        lon: now.toLocaleTimeString('en-GB', { timeZone: 'Europe/London', hour: '2-digit', minute: '2-digit', hour12: false }),
        tky: now.toLocaleTimeString('ja-JP', { timeZone: 'Asia/Tokyo', hour: '2-digit', minute: '2-digit', hour12: false }),
      });
    };
    update();
    const interval = setInterval(update, 10000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 md:px-16 border-t border-white/5 bg-[#080808] text-[#E5E5E5] font-mono-luxury text-xs">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* World Clocks */}
        <div className="flex flex-wrap items-center justify-between gap-6 pb-6 border-b border-white/5">
          <div className="flex flex-wrap items-center gap-6 text-[10px] tracking-[0.25em] uppercase opacity-50">
            <div className="flex items-center gap-1.5">
              <span className="w-1 h-1 bg-[#D4AF37]" />
              <span>NYC</span>
              <span className="text-[#E5E5E5] font-normal">{times.nyc || '12:00'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1 h-1 bg-[#D4AF37]" />
              <span>LND</span>
              <span className="text-[#E5E5E5] font-normal">{times.lon || '17:00'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1 h-1 bg-[#D4AF37]" />
              <span>TYO</span>
              <span className="text-[#E5E5E5] font-normal">{times.tky || '02:00'}</span>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-[10px] tracking-[0.2em] uppercase opacity-40 hover:opacity-100 transition-opacity"
          >
            <span>Top</span>
            <ArrowUp className="w-3 h-3 text-[#D4AF37]" />
          </button>
        </div>

        {/* Footer info */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#D4AF37]">
              BrewVault
            </span>
            <span className="text-[10px] tracking-[0.2em] uppercase opacity-40">
              Estate Reserve Concentrate
            </span>
          </div>

          <a
            href="mailto:buy@brewvault.bar"
            className="text-xs tracking-[0.2em] uppercase border-b border-white/20 pb-0.5 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all"
          >
            buy@brewvault.bar
          </a>
        </div>

        {/* Copyright */}
        <div className="pt-4 border-t border-white/5 text-[9px] tracking-[0.2em] uppercase opacity-30 text-center sm:text-left">
          © {new Date().getFullYear()} BrewVault Co. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
