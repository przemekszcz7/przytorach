import React, { useEffect, useState } from 'react';

export default function VintageClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Calculate rotations
  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secDegrees = seconds * 6; // 360 / 60
  const minDegrees = minutes * 6 + seconds * 0.1; // 360 / 60 + second fine adjustment
  const hourDegrees = (hours % 12) * 30 + minutes * 0.5; // 360 / 12 + minute fine adjustment

  // Roman numerals array for a beautiful, classic dial
  const numerals = ["XII", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI"];

  return (
    <div className="flex flex-col items-center justify-center p-4">
      {/* Outer Golden/Aged Brass Ring */}
      <div className="relative w-44 h-44 rounded-full border-4 border-brand-yellow bg-brand-black shadow-2xl flex items-center justify-center select-none" style={{ boxShadow: '0 10px 25px rgba(26,26,26,0.3), inset 0 2px 10px rgba(255,255,255,0.2)' }}>
        
        {/* Metal Rivet Pins around the frame */}
        <div className="absolute inset-1 rounded-full border border-brand-yellow-deep/20 pointer-events-none" />
        
        {/* White Clock Face - Aged Yellowed Parchment */}
        <div className="w-[146px] h-[146px] rounded-full bg-[#EFE8D3] relative flex items-center justify-center overflow-hidden border border-[#D4A820]">
          
          {/* Subtle age lines */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/10 mix-blend-multiply" />
          
          {/* Railway Station Markings */}
          <div className="absolute inset-3 rounded-full border border-[#1A1A1A]/10 pointer-events-none" />
          <div className="absolute inset-0 p-1 flex flex-col justify-between items-center text-[10px] font-mono font-bold text-[#1A1A1A]/80">
            {/* Hour markers */}
            {numerals.map((num, idx) => {
              const angle = idx * 30; // 360 / 12
              return (
                <div
                  key={num}
                  className="absolute origin-bottom text-[11px] font-bold tracking-tighter"
                  style={{
                    height: '64px',
                    transform: `rotate(${angle}deg)`,
                    top: '8px',
                    width: '20px',
                    textAlign: 'center',
                  }}
                >
                  <span 
                    className="inline-block" 
                    style={{ transform: `rotate(${-angle}deg)` }}
                  >
                    {num}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Slogan in the middle: O.P.T. (Obiady Przy Torach) */}
          <div className="absolute top-[90px] w-full text-center pointer-events-none">
            <p className="text-[7px] font-mono uppercase tracking-[0.2em] text-brand-text-muted font-bold">
              Konstancin
            </p>
            <p className="text-[6px] font-mono text-brand-red font-semibold -mt-0.5">
              EST. 2020
            </p>
          </div>

          {/* Hour Hand */}
          <div 
            className="absolute h-9 w-1.5 bg-[#1A1A1A] rounded-full origin-bottom"
            style={{ 
              transform: `rotate(${hourDegrees}deg)`, 
              bottom: '50%',
              left: 'calc(50% - 3px)',
              boxShadow: '0 2px 4px rgba(0,0,0,0.15)' 
            }}
          />

          {/* Minute Hand */}
          <div 
            className="absolute h-13 w-1 bg-[#1A1A1A] rounded-full origin-bottom"
            style={{ 
              transform: `rotate(${minDegrees}deg)`, 
              bottom: '50%',
              left: 'calc(50% - 2px)',
              boxShadow: '0 2px 4px rgba(0,0,0,0.15)' 
            }}
          />

          {/* Second Hand (Classic Railway Red) */}
          <div 
            className="absolute h-14 w-0.5 bg-brand-red origin-bottom"
            style={{ 
              transform: `rotate(${secDegrees}deg)`, 
              bottom: '50%',
              left: 'calc(50% - 1px)' 
            }}
          >
            {/* Small red circle at the end of railway second hand */}
            <div className="absolute top-0 -left-1 w-2.5 h-2.5 bg-brand-red rounded-full" />
          </div>

          {/* Center Pin */}
          <div className="absolute w-[8px] h-[8px] rounded-full bg-brand-yellow border border-brand-black z-30 shadow-md" />
        </div>
      </div>
      
      {/* Small Stand / Mount */}
      <div className="w-10 h-2 bg-brand-yellow-deep border-x border-b border-brand-black rounded-b-md shadow-sm -mt-0.5" />
      <div className="font-mono text-[10px] text-brand-yellow mt-2 px-2 py-0.5 bg-brand-black border border-brand-yellow/30 rounded">
        NA STACJI: {time.toLocaleTimeString()}
      </div>
    </div>
  );
}
