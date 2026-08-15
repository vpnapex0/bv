import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight } from 'lucide-react';

interface ContactSectionProps {
  onOpenModal?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenModal }) => {
  const [copied, setCopied] = useState(false);
  const email = 'buy@brewvault.bar';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const templates = [
    { label: 'Bottle Allocation', subject: 'Allocation Request - Estate Reserve' },
    { label: 'Office Casks', subject: 'Office Cask Program Inquiry' },
    { label: 'General Inquiry', subject: 'Inquiry for BrewVault' },
  ];

  return (
    <section id="contact" className="py-16 px-6 md:px-16 max-w-4xl mx-auto border-t border-white/5 font-mono-luxury">
      <div className="minimal-card p-8 sm:p-12 text-center relative">
        <span className="text-[10px] tracking-[0.4em] uppercase text-[#D4AF37] block mb-3 opacity-90">
          Contact
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-[#E5E5E5] uppercase mb-4">
          Direct Concierge
        </h2>
        <p className="text-xs font-mono-luxury tracking-[0.15em] uppercase text-[#E5E5E5] opacity-50 max-w-md mx-auto mb-8 leading-relaxed">
          For allocations, subscriptions, and inquiries, reach us directly via email.
        </p>

        {/* Email Address */}
        <div className="mb-8">
          <a
            href={`mailto:${email}?subject=BrewVault%20Inquiry`}
            className="text-xl sm:text-2xl md:text-3xl font-light tracking-widest text-[#E5E5E5] border-b border-white/20 pb-1 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all inline-block break-all"
          >
            {email}
          </a>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-8">
          <a
            href={`mailto:${email}?subject=BrewVault%20Allocation%20Request`}
            className="w-full sm:w-auto px-8 py-3 bg-[#D4AF37] text-black text-xs tracking-[0.2em] uppercase font-medium hover:bg-white transition-all flex items-center justify-center gap-2"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Open Mail</span>
          </a>

          <button
            onClick={handleCopy}
            className="w-full sm:w-auto px-6 py-3 border border-white/10 text-xs tracking-[0.2em] uppercase text-[#E5E5E5] hover:border-white transition-all flex items-center justify-center gap-2"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="text-[#D4AF37]">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 opacity-50" />
                <span>Copy Address</span>
              </>
            )}
          </button>
        </div>

        {/* Templates */}
        <div className="pt-6 border-t border-white/5">
          <span className="text-[9px] tracking-[0.3em] uppercase opacity-30 block mb-3">
            Quick Subject Presets
          </span>
          <div className="flex flex-wrap justify-center gap-2">
            {templates.map((item, idx) => (
              <a
                key={idx}
                href={`mailto:${email}?subject=${encodeURIComponent(item.subject)}&body=Hello%20BrewVault%2C%0A%0AI%20would%20like%20to%20inquire%20about%20${encodeURIComponent(item.subject)}.%0A%0AName%3A%20%0ALocation%3A%20`}
                className="px-3 py-1.5 text-[10px] uppercase tracking-wider text-[#E5E5E5] opacity-60 hover:opacity-100 border border-white/10 hover:border-[#D4AF37]/50 transition-all flex items-center gap-1"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-3 h-3 text-[#D4AF37]" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
