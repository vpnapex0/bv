import React, { useState } from 'react';

export const ProtocolSection: React.FC = () => {
  const [ratioMode, setRatioMode] = useState<'oat' | 'water' | 'neat'>('oat');

  const modes = {
    oat: {
      name: 'Oat Flat White',
      conc: '40ml',
      mixer: '120ml Oat Milk',
      ratio: '1 : 3',
      time: '5s',
    },
    water: {
      name: 'Iced Americano',
      conc: '30ml',
      mixer: '120ml Cold Water',
      ratio: '1 : 4',
      time: '4s',
    },
    neat: {
      name: 'Neat On Ice',
      conc: '45ml',
      mixer: 'Hand-Carved Rock',
      ratio: '1 : 0',
      time: '3s',
    },
  };

  const active = modes[ratioMode];

  return (
    <section id="protocol" className="py-16 px-6 md:px-16 max-w-5xl mx-auto border-t border-white/5 font-mono-luxury">
      {/* 3 Core Highlights in a Compact Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        <div className="minimal-card p-6">
          <div className="text-[10px] text-[#D4AF37] uppercase tracking-[0.25em] mb-2">01 / Extraction</div>
          <h3 className="text-base text-[#E5E5E5] font-light uppercase mb-2">18-Hour Cryo-Steep</h3>
          <p className="text-xs text-[#E5E5E5] opacity-50 leading-relaxed font-light">
            Slow cold extraction at 3°C eliminates bitter tannic acid, leaving notes of dark cacao and hazelnut.
          </p>
        </div>

        <div className="minimal-card p-6">
          <div className="text-[10px] text-[#D4AF37] uppercase tracking-[0.25em] mb-2">02 / Efficiency</div>
          <h3 className="text-base text-[#E5E5E5] font-light uppercase mb-2">5-Second Pour</h3>
          <p className="text-xs text-[#E5E5E5] opacity-50 leading-relaxed font-light">
            Pour 1 part concentrate over ice, add cold water or oat microfoam. Zero cleanup, grinding, or machines.
          </p>
        </div>

        <div className="minimal-card p-6">
          <div className="text-[10px] text-[#D4AF37] uppercase tracking-[0.25em] mb-2">03 / Reserve</div>
          <h3 className="text-base text-[#E5E5E5] font-light uppercase mb-2">500ml Flacon</h3>
          <p className="text-xs text-[#E5E5E5] opacity-50 leading-relaxed font-light">
            Each amber glass flacon yields 16 barista-grade pours. Stays fresh chilled for 12 weeks.
          </p>
        </div>
      </div>

      {/* Compact Pour Protocol Calculator */}
      <div className="minimal-card p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/5">
          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] block mb-1">
              Pour Ratio
            </span>
            <div className="text-lg text-[#E5E5E5] font-light uppercase">
              {active.name} &mdash; {active.ratio}
            </div>
          </div>

          <div className="flex gap-1.5 bg-black/60 p-1 border border-white/10">
            {(['oat', 'water', 'neat'] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setRatioMode(mode)}
                className={`px-3 py-1 text-[10px] uppercase tracking-wider transition-colors ${
                  ratioMode === mode
                    ? 'bg-[#D4AF37] text-black font-medium'
                    : 'text-[#E5E5E5] opacity-50 hover:opacity-100'
                }`}
              >
                {mode === 'oat' ? 'Oat' : mode === 'water' ? 'Americano' : 'Neat'}
              </button>
            ))}
          </div>
        </div>

        {/* 3 Step Sequence */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left">
          <div className="p-4 bg-black/40 border border-white/5">
            <span className="text-[10px] text-[#D4AF37] block mb-1">STEP 01</span>
            <div className="text-xs text-[#E5E5E5] uppercase">Ice in Glass</div>
          </div>
          <div className="p-4 bg-black/40 border border-white/5">
            <span className="text-[10px] text-[#D4AF37] block mb-1">STEP 02</span>
            <div className="text-xs text-[#E5E5E5] uppercase">{active.conc} Concentrate</div>
          </div>
          <div className="p-4 bg-black/40 border border-white/5">
            <span className="text-[10px] text-[#D4AF37] block mb-1">STEP 03</span>
            <div className="text-xs text-[#E5E5E5] uppercase">{active.mixer}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
