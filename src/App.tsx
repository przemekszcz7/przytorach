import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Facebook, 
  Compass, 
  Utensils, 
  Soup, 
  Info, 
  FileText, 
  PhoneCall, 
  X, 
  ChevronRight, 
  ExternalLink,
  Heart,
  Calendar
} from 'lucide-react';
import { EVERYDAY_MENU, GALLERY_IMAGES, TESTIMONIALS } from './data';
import VintageClock from './components/VintageClock';
import DailyMenuBoard from './components/DailyMenuBoard';

// Rivet Row Component
function RivetRow({ count = 4 }: { count?: number }) {
  return (
    <div className="flex justify-center items-center gap-2 my-4 select-none">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, type: 'spring', stiffness: 150 }}
          className="w-3 h-3 rounded-full bg-brand-yellow-deep border-2 border-brand-black shadow-inner"
          title="Nity lokomotywy"
        />
      ))}
    </div>
  );
}

// Vintage Ticket System Button or Display
interface VintageTicketProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}

function VintageTicket({ children, onClick, href, className = "" }: VintageTicketProps) {
  const InnerContent = () => (
    <div className="relative py-3.5 px-6 bg-brand-black text-brand-yellow hover:text-brand-yellow-light uppercase font-mono tracking-wider flex items-center justify-between gap-4 rounded-r-md select-none">
      {/* Perforated Left Edge using overlapping punch dots */}
      <div className="absolute left-[-5px] top-1.5 bottom-1.5 width-[10px] flex flex-col justify-between items-center pointer-events-none z-10">
        {[1, 2, 3, 4, 5].map((dot) => (
          <div key={dot} className="w-2.5 h-2.5 rounded-full bg-brand-bg md:bg-inherit" style={{ backgroundColor: '#F0E8D0' }} />
        ))}
      </div>
      
      {/* Mini track stamp on the left vertical border */}
      <div className="border-l-2 border-dashed border-brand-yellow/50 pl-2 h-full py-1 text-left flex flex-col justify-center">
        <span className="text-[8px] opacity-40 leading-none">FARES</span>
        <span className="text-[10px] font-bold leading-none">ONE</span>
      </div>

      <div className="font-mono text-sm font-bold tracking-widest pl-2">
        {children}
      </div>

      <div className="border-l border-brand-yellow/30 pl-3 py-1 flex items-center">
        <span className="text-[11px] font-bold text-brand-red animate-pulse">●</span>
      </div>
    </div>
  );

  if (href) {
    return (
      <a 
        href={href}
        className={`inline-block group relative shadow-md hover:shadow-xl transition-all hover:scale-[1.03] active:scale-[0.98] ${className}`}
      >
        <InnerContent />
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`group relative shadow-md hover:shadow-xl transition-all hover:scale-[1.03] active:scale-[0.98] text-left ${className}`}
    >
      <InnerContent />
    </button>
  );
}

export default function App() {
  const [lightboxImageIndex, setLightboxImageIndex] = useState<number | null>(null);

  const filteredImages = GALLERY_IMAGES;

  // Quick anchor scroll helper
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-aged-paper min-h-screen text-brand-text font-sans antialiased selection:bg-brand-yellow selection:text-brand-black w-full overflow-x-hidden">
      
      {/* TOP ANNOUNCEMENT TICKER (Departures list) */}
      <div className="bg-brand-black text-brand-yellow py-2 px-4 shadow-md border-b border-brand-yellow-deep/20 text-[11px] sm:text-xs font-mono overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 md:gap-8">
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3 text-center sm:text-left">
            <span className="text-brand-red font-bold shrink-0">● KOMUNIKAT STACJI:</span>
            <span className="whitespace-normal text-brand-yellow-light">Tradycyjne zupy domowe codziennie świeżo warzone u stóp peronu w Konstancinie!</span>
          </div>
          <div className="flex items-center gap-2 justify-center shrink-0">
            <span className="text-brand-yellow-deep">NASTĘPNY ODJAZD:</span>
            <span className="text-white hover-flap">10:00 - 17:00 Pn-Pt</span>
          </div>
        </div>
      </div>

      {/* NAVIGATION HEADER BAR */}
      <header className="py-4 px-4 bg-brand-bg-section border-b border-brand-border-wood shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Logo Badge Layout */}
          <div className="flex items-center gap-3 select-none cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            {/* Round Spoked Railway Wheel Logo Accent */}
            <div className="w-12 h-12 bg-brand-black text-brand-yellow border-2 border-brand-yellow-deep rounded-full flex items-center justify-center relative overflow-hidden shrink-0 shadow-md">
              <svg viewBox="0 0 100 100" className="w-10 h-10 animate-wheel-spin" fill="none" stroke="currentColor">
                <circle cx="50" cy="50" r="44" strokeWidth="4" />
                <circle cx="50" cy="50" r="30" strokeWidth="2" strokeDasharray="4 4" />
                <circle cx="50" cy="50" r="10" strokeWidth="2" fill="currentColor" />
                {Array.from({ length: 12 }).map((_, i) => {
                  const angle = (i * 30 * Math.PI) / 180;
                  return (
                    <line
                      key={i}
                      x1="50"
                      y1="50"
                      x2={50 + 44 * Math.cos(angle)}
                      y2={50 + 44 * Math.sin(angle)}
                      strokeWidth="3.5"
                    />
                  );
                })}
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-brand-black text-brand-yellow border border-brand-yellow-deep text-[10px] tracking-wider">
                  DOMOWA KUCHNIA · PRZY TORACH
                </span>
              </div>
              <h1 className="font-serif text-xl font-black text-brand-black tracking-tight mt-0.5">
                Obiady przy torach
              </h1>
            </div>
          </div>

          {/* Nav Items */}
          <nav className="flex items-center flex-wrap gap-2 md:gap-4 font-mono text-xs font-bold">
            <button 
              onClick={() => scrollTo('menu')} 
              className="px-3 py-2 text-brand-text hover:text-brand-yellow-deep hover:bg-brand-warm/30 rounded transition-all"
            >
              ▸ KARTA OBIADOWA
            </button>
            <button 
              onClick={() => scrollTo('rozkład-jazdy')} 
              className="px-3 py-2 text-brand-text hover:text-brand-yellow-deep hover:bg-brand-warm/30 rounded transition-all"
            >
              ▸ ROZKŁAD DNIA
            </button>
            <button 
              onClick={() => scrollTo('galeria-stacja')} 
              className="px-3 py-2 text-brand-text hover:text-brand-yellow-deep hover:bg-brand-warm/30 rounded transition-all"
            >
              ▸ GALERIA
            </button>
            <button 
              onClick={() => scrollTo('peron-kontakt')} 
              className="px-3 py-2 text-brand-red bg-brand-yellow/10 hover:bg-brand-yellow/20 rounded border border-brand-yellow/30 transition-all font-bold"
            >
              ▸ TELEFON
            </button>
          </nav>
        </div>
      </header>

      {/* HERO SECTION - The Station Entrance Platform */}
      <section className="relative py-12 md:py-20 px-4 overflow-visible bg-gradient-to-b from-[#FAF4E5] to-[#EFE8D3] border-b border-brand-border-wood bg-aged-paper">

        <div className="max-w-5xl mx-auto text-center mt-8 relative z-30">
          
          <div className="flex justify-center mb-4">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow-deep bg-brand-black/9 bg-brand-yellow-subtle text-brand-yellow-deep font-bold px-3 py-1 border border-brand-yellow/30 rounded-md">
              ▸ TRADYCJA NA STALOWYM SZLAKU ▸
            </span>
          </div>

          {/* Hero Slogan */}
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#1A1A1A] tracking-tight leading-none mb-6"
          >
            Obiady przy torach
          </motion.h2>

          <p className="font-sans text-base sm:text-lg md:text-xl text-brand-text-muted max-w-2xl mx-auto leading-relaxed mb-8">
            Prawdziwa domowa kuchnia polska serwowana na miejscu u nas na stacji jak i z dostawą pod Twoje drzwi. Gotowane z pasją każdego ranka, pachnące świeżymi polskimi ziołami.
          </p>

          {/* CTA Group with ticket and call buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <VintageTicket href="tel:227563356">
              Zadzwoń i zamów: 22 756 33 56
            </VintageTicket>
            <button 
              onClick={() => scrollTo('menu')} 
              className="font-mono text-xs font-bold border-2 border-brand-black hover:bg-brand-black hover:text-[#FDFAF2] px-6 py-3.5 transition-all text-[#1A1A1A] rounded active:scale-95"
            >
              ZOBACZ KARTĘ DANIA
            </button>
          </div>

          <RivetRow count={4} />

          {/* Platform side dashboard: Vintage Clock meets Quick details */}
          <div className="bg-brand-bg-section/80 border border-brand-border-wood rounded-2xl p-6 md:p-8 mt-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-center shadow-lg">
            
            {/* Time / Station Clock Platform */}
            <div className="md:col-span-4 border-b md:border-b-0 md:border-r border-[#6A5A3A]/10 pb-6 md:pb-0 md:pr-6">
              <span className="font-mono text-[10px] uppercase tracking-wider text-brand-text-muted block mb-2">
                Zegar Stacyjny
              </span>
              <VintageClock />
            </div>

            {/* Timetable / address summary */}
            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div className="p-4 bg-brand-bg rounded-lg border border-brand-border/40">
                <div className="flex items-center gap-2 text-brand-yellow-deep mb-2">
                  <MapPin className="w-5 h-5 shrink-0" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider">Peron Adresowy</span>
                </div>
                <h4 className="font-serif text-base font-semibold text-brand-black"> Warszawska 35 </h4>
                <p className="font-sans text-xs text-brand-text-muted mt-1">Konstancin-Jeziorna 05-520</p>
                <button 
                  onClick={() => scrollTo('peron-kontakt')} 
                  className="font-mono text-[10px] text-brand-red font-bold hover:underline block mt-2"
                >
                  ▸ Zobacz mapę dojazdu
                </button>
              </div>

              <div className="p-4 bg-brand-bg rounded-lg border border-brand-border/40">
                <div className="flex items-center gap-2 text-brand-yellow-deep mb-2">
                  <Clock className="w-5 h-5 shrink-0" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider">Godziny Odjazdów</span>
                </div>
                <p className="font-sans text-xs font-semibold text-brand-black">Poniedziałek - Piątek:</p>
                <p className="font-sans text-base font-black text-brand-yellow-deep font-mono">10:00 - 17:00</p>
                <p className="font-sans text-[10px] text-brand-red font-semibold uppercase mt-1">Sobota i Niedziela: ZAMKNIĘTE</p>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* RAILWAY TRACK DIVIDER 1 */}
      <div className="railway-track-divider" />

      {/* SECTION: DAILY MENU BOARD (STACJA INTEGRACJA) */}
      <section id="rozkład-jazdy" className="py-16 md:py-24 px-4 bg-brand-bg-section bg-aged-paper-section">
        <div className="max-w-7xl mx-auto">
          <CenterHeading 
            tag="Rozkład Kalendarzowy"
            title="Rozkład Wyśmienitych Dań" 
            sub="Codziennie coś wyjątkowego na parującej stacji kulinarnych rozkoszy" 
          />
          <DailyMenuBoard />
        </div>
      </section>

      {/* RAILWAY TRACK DIVIDER 2 */}
      <div className="railway-track-divider" />

      {/* SECTION: EVERYDAY MENU */}
      <section id="menu" className="py-16 md:py-24 px-4 bg-aged-paper">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col items-center text-center mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow-deep block mb-2">
              ▸ NASZA OFERTA CODZIENNA ▸
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-black tracking-tight">
              Nasza Żelazna Karta Dań
            </h2>
            <p className="font-sans text-sm md:text-base text-brand-text-muted mt-2 max-w-xl">
              Specjały, które czekają na Was każdego dnia. Świeże panierki, kunsztownie dobrane przyprawy i legendarny smak tradycji.
            </p>
            <div className="w-24 h-0.5 bg-brand-yellow-deep mt-4" />
          </div>

          {/* Everyday Menu Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EVERYDAY_MENU.map((menuItem, index) => {
              return (
                <motion.div
                  key={menuItem.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-brand-bg-section/70 rounded-xl border border-brand-border/40 hover:border-brand-yellow/50 shadow-md hover:shadow-xl hover:translate-y-[-4px] overflow-hidden transition-all duration-300 flex flex-col justify-between group"
                  style={{ borderLeftWidth: '3px', borderLeftColor: '#F5C842' }}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-serif text-lg font-bold text-brand-black group-hover:text-brand-yellow-deep transition-colors">
                        {menuItem.name}
                      </h3>
                      <span className="font-mono text-sm text-brand-yellow-deep font-bold bg-[#1A1A1A] text-brand-yellow px-2 py-0.5 rounded shrink-0">
                        {menuItem.price || "Zadzwoń"}
                      </span>
                    </div>

                    <p className="font-sans text-xs text-brand-text-muted leading-relaxed line-clamp-3 mb-4">
                      {menuItem.description}
                    </p>

                    {menuItem.tag && (
                      <span className={`font-mono text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                        menuItem.tag === 'Ostre' 
                          ? 'bg-brand-red/15 text-brand-red border border-brand-red/25'
                          : menuItem.tag === 'Łagodne'
                          ? 'bg-green-100 text-green-800 border border-green-200'
                          : 'bg-brand-yellow-subtle text-brand-yellow-deep border border-brand-yellow/20'
                      }`}>
                        ◆ {menuItem.tag}
                      </span>
                    )}
                  </div>

                  {/* Tiny internal railway ticket strip */}
                  <div className="px-6 py-2 bg-brand-bg-warm/30 border-t border-brand-border/10 flex items-center justify-between text-[10px] font-mono text-brand-text-muted">
                    <span>SEKTOR OBIADOWY</span>
                    <a href="tel:227563356" className="text-brand-red font-bold hover:underline flex items-center gap-1">
                      KUP <ChevronRight className="w-3 h-3" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block p-4 bg-brand-bg-section/80 rounded-xl border border-brand-border-wood max-w-2xl font-hand text-brand-text-muted text-base">
              ✍️ "Wszystkie nasze kotlety rozbijamy tradycyjnym polskim tłuczkiem tuż przed wrzuceniem na patelnię. Smażymy na złotej, chrupiącej strużce tłuszczu. Gwarantujemy prawdziwie domowy obiad!"
            </div>
          </div>

        </div>
      </section>

      {/* RAILWAY TRACK DIVIDER 3 */}
      <div className="railway-track-divider" />

      {/* SECTION: GALLERY (WIZUALNA STACJA) */}
      <section id="galeria-stacja" className="py-16 md:py-24 px-4 bg-brand-black bg-metal-iron text-brand-text-light">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col items-center text-center mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow block mb-2">
              ▸ WIZUALNY PRZYSTANEK KLIMATU ▸
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#FDFAF2] tracking-tight">
              Galeria Naszych Smaków
            </h2>
            <p className="font-sans text-sm md:text-base text-brand-text-pale mt-2 max-w-xl">
              Autentyczne fotografie naszych dań, ręcznie pisanych stacyjnych tablic oraz niepowtarzalnej atmosfery, która otacza naszą stację.
            </p>
            <div className="w-24 h-0.5 bg-brand-yellow mt-4" />
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, idx) => {
              return (
                <motion.div
                  key={image.url}
                  layoutId={image.url}
                  onClick={() => setLightboxImageIndex(idx)}
                  className="bg-brand-bg-mid border border-brand-yellow/15 p-1 rounded-lg hover:border-brand-yellow/60 transition-all cursor-pointer group shadow-lg overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="aspect-video relative rounded overflow-hidden bg-black/40">
                    <img 
                      src={image.url} 
                      alt="Zdjęcie z restauracji Obiady przy torach"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#000000]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="font-mono text-xs text-brand-yellow font-bold uppercase tracking-widest bg-brand-black px-3 py-1.5 rounded border border-brand-yellow/30">
                        POWIĘKSZ ZDJĘCIE
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <RivetRow count={4} />



        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightboxImageIndex(null)}
          >
            <button 
              className="absolute top-4 right-4 text-[#FDFAF2] hover:text-brand-yellow p-2"
              onClick={() => setLightboxImageIndex(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="max-w-4xl w-full flex flex-col gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video rounded-lg overflow-hidden border-2 border-brand-yellow bg-black/80 max-h-[80vh]">
                <img 
                  src={filteredImages[lightboxImageIndex].url}
                  alt="Zdjęcie z restauracji Obiady przy torach"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex justify-between items-center px-4 font-mono text-xs text-brand-yellow">
                <button 
                  onClick={() => setLightboxImageIndex((lightboxImageIndex - 1 + filteredImages.length) % filteredImages.length)}
                  className="hover:text-brand-yellow-light flex items-center gap-1 transition-colors px-3 py-1.5 bg-brand-black border border-brand-yellow/20 rounded hover:scale-105"
                >
                  ◀ Poprzednie
                </button>
                <span className="text-brand-text-pale/60 tracking-wider">
                  {lightboxImageIndex + 1} / {filteredImages.length}
                </span>
                <button 
                  onClick={() => setLightboxImageIndex((lightboxImageIndex + 1) % filteredImages.length)}
                  className="hover:text-brand-yellow-light flex items-center gap-1 transition-colors px-3 py-1.5 bg-brand-black border border-brand-yellow/20 rounded hover:scale-105"
                >
                  Następne ▶
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* RAILWAY TRACK DIVIDER 4 */}
      <div className="railway-track-divider" />

      {/* SECTION: LOKALIZACJA I KONTAKT (THE PLATFORM MAP) */}
      <section id="peron-kontakt" className="py-16 md:py-24 px-4 bg-brand-bg-section bg-aged-paper-section">
        <div className="max-w-7xl mx-auto">
          
          <CenterHeading 
            tag="Stacja Docelowa"
            title="Szlaki Dojazdowe i Kontakt" 
            sub="Dojedź do nas koleją kulinarną lub zatrzymaj pociąg z dostawą pod drzwi" 
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-8">
            
            {/* Contact Details & Slogans Cards */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-6">
              
              <div className="bg-brand-bg p-6 rounded-2xl border border-brand-border shadow-md select-none relative overflow-hidden">
                <div className="absolute right-[-24px] top-[-24px] w-24 h-24 bg-brand-yellow/10 rounded-full blur-xl pointer-events-none" />
                
                <span className="font-mono text-[9px] text-brand-yellow-deep uppercase tracking-widest block mb-2">
                  ▸ INFOLINIA KULINARNA
                </span>
                <span className="font-mono text-xs text-brand-text-muted block">NUMER TELEFONU DO ZAMÓWIEŃ:</span>
                <a 
                  href="tel:227563356" 
                  className="font-serif text-3xl font-black text-brand-black hover:text-brand-red tracking-tight flex items-center gap-2 mt-2 transition-colors duration-300"
                >
                  <Phone className="w-8 h-8 text-brand-yellow" />
                  22 756 33 56
                </a>
                <p className="font-sans text-xs text-brand-text-muted leading-relaxed mt-4">
                  Dzwoń bez obaw o sygnał! Zapewniamy błyskawiczne zamówienia na wynos jak i z wygodną, bezpieczną dostawą pod same drzwi na terenie Konstancina i okolic.
                </p>
                <div className="mt-4 pt-4 border-t border-brand-border/10">
                  <span className="font-mono text-[10px] text-brand-red font-bold animate-pulse">● TELEFON CZYNNY W GODZINACH PRACY STACJI</span>
                </div>
              </div>

              <div className="bg-brand-bg p-6 rounded-2xl border border-brand-border shadow-md">
                <span className="font-mono text-[9px] text-brand-yellow-deep uppercase tracking-widest block mb-2">
                  ▸ ADRES PLATFORMY
                </span>
                <span className="font-mono text-xs text-brand-text-muted block">GDZIE NAS DOKŁADNIE CZYTAĆ?</span>
                <h4 className="font-serif text-xl font-bold text-brand-black mt-1 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-brand-yellow" />
                  Warszawska 35,
                </h4>
                <p className="font-sans text-sm text-brand-text-muted pl-7">
                  05-520 Konstancin-Jeziorna
                </p>
                <p className="font-sans text-xs text-brand-text-muted mt-3 italic pl-7 border-l-2 border-brand-yellow">
                  Restauracja u stóp starych szlaków kolejowych w samym sercu Konstancina. Doskonały dojazd i bezproblemowy parking na placu przed stacją.
                </p>
              </div>

              {/* Explicit Facebook Button requested by user */}
              <div className="bg-brand-black text-[#FDFAF2] p-6 rounded-2xl border border-brand-yellow/30 shadow-md">
                <span className="font-mono text-[9px] text-brand-yellow-deep uppercase tracking-widest block mb-2">
                  ▸ SPOŁECZNOŚĆ KOLEJOWA
                </span>
                <h4 className="font-serif text-lg font-bold text-brand-yellow-light mb-2">
                  Śledź Nasze Bieżące Dania!
                </h4>
                <p className="font-sans text-xs text-brand-text-pale leading-relaxed mb-4">
                  Codziennie rano publikujemy na naszym profilu świeże niespodzianki zupy dnia, zdjęcia aktualnych dań i oferty specjalne robione tylko dla Was.
                </p>
                
                {/* Facebook Button element Styled like a vintage ticket */}
                <a 
                  href="https://www.facebook.com/goodfoodkonstancin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-brand-yellow hover:bg-brand-yellow-light text-brand-black px-4 py-3 rounded font-mono text-xs font-bold transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <div className="flex items-center gap-2">
                    <Facebook className="w-5 h-5 fill-current" />
                    <span>ODWIEDŹ NASZ FACEBOOK</span>
                  </div>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>

            </div>

            {/* Embed Map Google Iframe Container */}
            <div className="lg:col-span-8 bg-brand-bg border border-brand-border p-3 rounded-2xl shadow-md min-h-[440px] flex flex-col justify-between">
              <div className="flex-1 w-full rounded-xl overflow-hidden border border-brand-border/60 bg-brand-bg-warm relative min-h-[350px]">
                {/* Interactive Google Map embed stretched perfectly to fill the container */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2451.0285506001055!2d21.113231277100578!3d52.09741196743007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47192c17a069ffaf%3A0x32a5f1b1b065fea1!2sWarszawska%2035%2C%2005-510%20Konstancin-Jeziorna!5e0!3m2!1spl!2spl!4v1779269653797!5m2!1spl!2spl" 
                  width="100%" 
                  height="100%" 
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Wizualizacja Mapy Obiady Przy Torach"
                />
              </div>
              <div className="p-2 font-mono text-[10px] text-brand-text-muted flex items-center justify-between mt-2 flex-wrap gap-2">
                <span>▸ MAPS RADIAL STATION COORDINATES: W35-KONSTANCIN</span>
                <span className="text-brand-yellow-deep font-bold">ZATRZYMAJ SIĘ PO OBIAD</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FOOTER Platform Station */}
      <footer className="bg-brand-black text-brand-text-light py-16 px-4 border-t-4 border-brand-yellow relative overflow-hidden bg-metal-iron">
        
        {/* Subtle decorative smoke puff layers */}
        <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-[#111] to-transparent" />

        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-[#222222] pb-10 mb-10 items-start">
            
            {/* Left corner: Logo and Conductors notes */}
            <div className="md:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-serif text-2xl font-black text-brand-yellow tracking-tight">
                  Obiady przy torach
                </span>
              </div>
              <p className="font-sans text-xs text-brand-text-pale leading-relaxed max-w-xs">
                Uznana marka tradycyjnej i sielankowej kuchni polskiej w Konstancinie-Jeziornej. Rozgość się u stóp zabytkowych torów dawnych dróg żelaznych i posmakuj pyszności.
              </p>
              
              {/* Train whistle SVG icon lineart */}
              <div className="flex items-center gap-2 text-brand-yellow-deep pt-2">
                <span className="font-mono text-[11px] tracking-[0.15em] flex items-center gap-1.5 ">
                  <span>●</span> CHRONIMY POLSKIE RECEPTURY
                </span>
              </div>
            </div>

            {/* Middle links */}
            <div className="md:col-span-4 space-y-4 font-mono text-xs">
              <h4 className="text-brand-yellow uppercase tracking-wider font-bold">
                Użytkowe Odjazdy
              </h4>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => scrollTo('menu')} className="text-brand-text-pale hover:text-white flex items-center gap-1.5 transition-colors">
                    ▸ Interaktywna karta Obiadowa
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollTo('rozkład-jazdy')} className="text-brand-text-pale hover:text-white flex items-center gap-1.5 transition-colors">
                    ▸ Godzinowy Rozkład Kalendarzowy
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollTo('galeria-stacja')} className="text-brand-text-pale hover:text-white flex items-center gap-1.5 transition-colors">
                    ▸ Galeria / Stacyjne Fotografie
                  </button>
                </li>
                <li>
                  <a href="https://www.facebook.com/goodfoodkonstancin" target="_blank" rel="noopener noreferrer" className="text-brand-text-pale hover:text-white flex items-center gap-1.5 transition-colors">
                    ▸ Zobacz nasz Facebook <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Right details box */}
            <div className="md:col-span-4 space-y-4 font-mono text-xs">
              <h4 className="text-brand-yellow uppercase tracking-wider font-bold">
                Notatka Dyżurnego Ruchu Kulinatnego
              </h4>
              <div className="p-4 bg-[#111] rounded border border-brand-yellow/15 text-[11px] text-[#AFA384] space-y-2 font-hand leading-relaxed">
                <span>✍️ "Dziękujemy za każdą wizytę! Dbamy o to, by każda porcja pozwalała Wam poczuć się jak na prawdziwym domowym, rodzinnym obiedzie. Do zobaczenia przy torach!"</span>
                <span className="block text-right text-brand-yellow font-bold">— Załoga Kuchni</span>
              </div>
            </div>

          </div>

          {/* SubFooter copyrights */}
          <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-brand-text-pale/40 gap-4">
            <div>
              © {new Date().getFullYear()} Obiady przy torach Warszawska 35, Konstancin-Jeziorna. Wszystkie prawa zastrzeżone.
            </div>
            <div className="flex items-center gap-3">
              <span className="text-brand-yellow-deep">▸ SZLAKIEM RETRO SMAKU</span>
              <span>•</span>
              <span className="flex items-center gap-1 text-brand-red">
                Z miłości do tradycji <Heart className="w-3 h-3 fill-current" />
              </span>
            </div>
          </div>

        </div>

      </footer>

    </div>
  );
}

// Center Heading Utility Component
function CenterHeading({ tag, title, sub }: { tag: string; title: string; sub: string }) {
  return (
    <div className="flex flex-col items-center text-center mb-12 select-none">
      <span className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow-deep block mb-1">
        ▸ {tag} ▸
      </span>
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] tracking-tight">
        {title}
      </h2>
      <p className="font-sans text-sm md:text-base text-brand-text-muted mt-2 max-w-xl">
        {sub}
      </p>
      <div className="w-24 h-0.5 bg-brand-yellow-deep mt-4" />
    </div>
  );
}
