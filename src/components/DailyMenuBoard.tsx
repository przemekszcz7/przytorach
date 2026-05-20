import React, { useState } from 'react';
import { WEEKLY_SCHEDULE, DAILY_SOUP_INFO } from '../data';
import { Clock, Calendar, Check, AlertCircle } from 'lucide-react';

export default function DailyMenuBoard() {
  // Get current day of week (0 = Sunday, 1 = Monday, ... 6 = Saturday)
  const currentDayIndex = new Date().getDay();
  // Adjust to our WEEKLY_SCHEDULE array (INDEX 0 = Monday, ... 5 = Saturday, 6 = Sunday)
  const todayScheduleIndex = currentDayIndex === 0 ? 6 : currentDayIndex - 1;

  const [activeTab, setActiveTab] = useState<number>(todayScheduleIndex);

  return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-8 rounded-2xl bg-brand-black border border-brand-yellow/30 bg-metal-iron shadow-2xl relative overflow-hidden">
      
      {/* Brass rivet decorations around the board */}
      <div className="absolute top-3 left-3 flex gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-brand-yellow-deep border border-brand-black shadow" />
        <div className="w-2.5 h-2.5 rounded-full bg-brand-yellow-deep border border-brand-black shadow" />
      </div>
      <div className="absolute top-3 right-3 flex gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-brand-yellow-deep border border-brand-black shadow" />
        <div className="w-2.5 h-2.5 rounded-full bg-brand-yellow-deep border border-brand-black shadow" />
      </div>
      <div className="absolute bottom-3 left-3 flex gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-brand-yellow-deep border border-brand-black shadow" />
        <div className="w-2.5 h-2.5 rounded-full bg-brand-yellow-deep border border-brand-black shadow" />
      </div>
      <div className="absolute bottom-3 right-3 flex gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-brand-yellow-deep border border-brand-black shadow" />
        <div className="w-2.5 h-2.5 rounded-full bg-brand-yellow-deep border border-brand-black shadow" />
      </div>

      {/* Header Split-Flap board style */}
      <div className="border-b-2 border-brand-yellow/30 pb-6 mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand-yellow-deep block mb-1">
            ▸ ROZKŁAD JAZDY KUCHNI
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-brand-yellow-light font-bold flex items-center gap-2">
            Tablica Odjazdów Smaku
          </h2>
        </div>
        <div className="flex items-center gap-3 bg-[#111111] px-4 py-2 rounded-lg border border-brand-yellow/20">
          <Clock className="w-5 h-5 text-brand-yellow animate-pulse" />
          <div className="text-left font-mono">
            <div className="text-[10px] text-brand-yellow-deep uppercase tracking-wider">STAN STACJI</div>
            <div className="text-xs text-brand-yellow font-bold">
              {currentDayIndex === 0 || currentDayIndex === 6 ? 'ZAMKNIĘTE (STACJA IDLE)' : 'OTWARTE (10:00 - 17:00)'}
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid: Days selector on the left, daily panel on the right */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Days Column */}
        <div className="col-span-1 md:col-span-5 space-y-2">
          <p className="font-mono text-[11px] text-brand-yellow-deep uppercase tracking-widest px-2 mb-2">
            WYBIERZ STACJĘ (DZIEŃ):
          </p>
          <div className="space-y-1">
            {WEEKLY_SCHEDULE.map((item, idx) => {
              const isToday = idx === todayScheduleIndex;
              const isActive = idx === activeTab;
              return (
                <button
                  key={item.day}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left font-mono p-3 rounded-lg border transition-all duration-300 flex items-center justify-between ${
                    isActive
                      ? 'bg-brand-yellow text-brand-black border-brand-yellow-deep font-bold shadow-lg scale-[1.02] z-10'
                      : isToday
                      ? 'bg-brand-yellow-subtle text-brand-yellow-light border-brand-yellow/40 font-semibold'
                      : 'bg-[#151515] text-[#AFA384] border-transparent hover:border-brand-yellow/25 hover:text-brand-yellow-light'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-[11px]">
                      {isActive ? '▸' : ' '}
                    </span>
                    <span>{item.day}</span>
                  </div>
                  <div className="flex items-center gap-2 text-right">
                    {isToday && (
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-brand-red text-[#FDFAF2] uppercase animate-pulse">
                        Dziś
                      </span>
                    )}
                    <span className={`text-[10px] ${isActive ? 'text-brand-black/70' : 'text-[#6A5A3A]'}`}>
                      {item.hours === 'ZAMKNIĘTE' ? 'ZAMKN.' : item.hours}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Info detail display Panel */}
        <div className="col-span-1 md:col-span-7 bg-[#0E0E0E] p-6 rounded-xl border border-brand-yellow/15 flex flex-col justify-between min-h-[280px]">
          <div>
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#222222]">
              <span className="font-mono text-xs text-brand-yellow-deep uppercase tracking-[0.15em]">
                ◆ REZERWACJA DANIA NA {WEEKLY_SCHEDULE[activeTab].day.toUpperCase()}
              </span>
              <span className="font-mono text-[10px] text-brand-yellow-light px-2 py-0.5 bg-brand-yellow/10 rounded">
                PERON 1
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-serif text-2xl text-[#FDFAF2] font-semibold">
                  Obiad Dnia: {WEEKLY_SCHEDULE[activeTab].day}
                </h3>
                <p className="font-mono text-brand-yellow text-sm mt-1">
                  Godziny serwowania: {WEEKLY_SCHEDULE[activeTab].hours}
                </p>
              </div>

              {WEEKLY_SCHEDULE[activeTab].hours === 'ZAMKNIĘTE' ? (
                <div className="p-4 bg-brand-red/10 border border-brand-red/20 rounded-lg flex gap-3 text-brand-cream text-sm">
                  <AlertCircle className="w-5 h-5 text-brand-red shrink-0" />
                  <div>
                    <strong className="block text-brand-red">W sobotę i niedzielę kuchnia odpoczywa.</strong>
                    Zapraszamy serdecznie od poniedziałku do piątku w godzinach 10:00 - 17:00 na pyszne, parujące, gotowane od samego rana tradycyjne potrawy!
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="p-4 bg-brand-yellow-subtle rounded-lg border border-brand-yellow/15">
                    <p className="text-xs font-mono text-brand-yellow-deep uppercase tracking-wider mb-1">
                      W MENU NA TEN DZIEŃ:*
                    </p>
                    <p className="text-[#EADBB7] font-sans text-sm md:text-base leading-relaxed">
                      {WEEKLY_SCHEDULE[activeTab].description}
                    </p>
                    {activeTab === 3 && (
                      <p className="text-brand-yellow-pale font-hand text-sm mt-2">
                        ✍️ Chef poleca: W czwartki nasze kultowe dania główne to absolutny sztos!
                      </p>
                    )}
                  </div>
                  
                  <div className="text-[11px] font-mono text-[#6A5A3A] italic">
                    * Zestawy dnia zmieniają się codziennie – zapytaj o dzisiejsze propozycje dzwoniąc do nas!
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <span className="font-mono text-[9px] text-brand-yellow-deep uppercase tracking-widest block">
                ZAMÓW Z DOSTAWĄ
              </span>
              <a 
                href="tel:227563356" 
                className="font-mono text-lg text-brand-yellow font-bold hover:text-brand-yellow-light transition-colors"
              >
                22 756 33 56
              </a>
            </div>
            {WEEKLY_SCHEDULE[activeTab].hours !== 'ZAMKNIĘTE' && (
              <a
                href="tel:227563356"
                className="inline-flex items-center gap-2 bg-brand-yellow hover:bg-brand-yellow-light text-brand-black px-4 py-2 rounded font-mono text-xs font-bold transition-transform active:scale-95"
              >
                <span>▸ KUP BILET NA OBIAD</span>
              </a>
            )}
          </div>
        </div>

      </div>

      {/* Daily Soup Banner */}
      <div className="mt-8 p-4 bg-brand-yellow/5 border border-brand-yellow/10 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-brand-yellow/15 flex items-center justify-center text-brand-yellow shrink-0">
            <span className="font-mono text-lg font-bold">🥣</span>
          </div>
          <div className="text-left">
            <span className="font-mono text-[9px] text-brand-yellow-deep uppercase tracking-wider block">Codzienny Kocioł</span>
            <p className="text-xs text-brand-yellow-pale font-sans">
              {DAILY_SOUP_INFO}
            </p>
          </div>
        </div>
        <div className="font-hand text-brand-yellow text-sm font-bold rotate-[-2deg] bg-brand-yellow-subtle px-3 py-1 rounded border border-brand-yellow/20">
          Zawsze gorące!
        </div>
      </div>
    </div>
  );
}
