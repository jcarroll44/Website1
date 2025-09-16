"use client";

export default function MapMini() {
  return (
    <div className="w-full h-full rounded-3xl overflow-hidden bg-white/70 backdrop-blur-xl shadow-[0_10px_40px_-20px_rgba(2,132,199,0.25)] border border-sky-100 flex items-center">
      <svg viewBox="0 0 920 690" className="w-full h-full">
        <defs>
          <linearGradient id="sea" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#CDEBFF" />
            <stop offset="100%" stopColor="#A5DAFF" />
          </linearGradient>
          <linearGradient id="sand" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#FAFBFC" />
            <stop offset="100%" stopColor="#F1F5F9" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#0284C7" floodOpacity="0.3" />
          </filter>
        </defs>
        <rect x="0" y="0" width="920" height="520" fill="url(#sand)" />
        <path d="M0,520 C220,500 360,520 520,540 C680,560 820,560 920,540 L920,690 L0,690 Z" fill="url(#sea)" />
        <path d="M0,530 C240,505 360,525 520,545 C690,566 840,566 920,550 L920,540 C820,560 680,560 520,540 C360,520 220,500 0,520 Z" fill="#DFF4FF" opacity="0.65" />
        <g stroke="#E5E7EB" strokeWidth="8" strokeLinecap="round">
          <line x1="60" y1="100" x2="860" y2="100" />
          <line x1="60" y1="150" x2="860" y2="150" />
          <line x1="60" y1="200" x2="860" y2="200" />
          <line x1="60" y1="250" x2="860" y2="250" />
          <line x1="60" y1="300" x2="860" y2="300" />
          <line x1="200" y1="60" x2="200" y2="460" />
          <line x1="420" y1="60" x2="420" y2="480" />
          <line x1="660" y1="60" x2="660" y2="460" />
        </g>
        <polyline
          points="660,210 420,210 420,460 280,460"
          fill="none"
          stroke="#0EA5E9"
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#glow)"
        />
        <g filter="url(#glow)">
          <g transform="translate(280,460)">
            <circle cx="0" cy="0" r="10" fill="#0EA5E9" />
          </g>
          <g transform="translate(660,208)">
            <circle cx="0" cy="0" r="10" fill="#38BDF8" />
          </g>
        </g>
        <g fontFamily="ui-sans-serif,system-ui" fontSize="18" fill="#1F2937">
          <text x="680" y="208">Home</text>
          <text x="300" y="462">Scenic 395 Beach Access</text>
        </g>
      </svg>
    </div>
  );
}
