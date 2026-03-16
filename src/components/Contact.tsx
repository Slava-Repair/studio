'use client';

import React from 'react';
import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';
import { Toaster } from '@/components/ui/toaster';

export default function App() {
  const brands = [
    "ZANUSSI", "BOSCH", "SAMSUNG", "LG", "WHIRLPOOL", 
    "ELECTROLUX", "SIEMENS", "BEKO", "MIELE", "HAIER", "CONSTRUCTA"
  ];

  return (
    <div className="flex flex-col overflow-x-hidden bg-[#fcfdfe] font-sans" dir="rtl">
      <Navigation />
      
      {/* pt-20 и pb-2 — максимально плотно по вертикали */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-8 pt-20 md:pt-22 pb-2 flex flex-col items-center">
          
          <h1 className="text-xl md:text-3xl font-black text-primary text-center drop-shadow-sm whitespace-nowrap mb-1">
            תיקון מוצרי חשמל ביתיים מהיר ויעיל
          </h1>

          <div className="w-full max-w-4xl flex flex-col items-center mt-1 md:mt-2 mb-1">
            <p className="text-[9px] md:text-[10px] text-blue-400 font-medium tracking-widest mb-1">
              מתמחים בתיקון כל המותגים המובילים
            </p>

            <div className="w-full overflow-hidden relative py-1 border-y border-gray-100" dir="ltr">
              <div className="flex animate-marquee whitespace-nowrap gap-10 text-primary font-bold text-sm md:text-base italic">
                {[...brands, ...brands].map((brand, i) => (
                  <span key={i}>{brand}</span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="w-full max-w-4xl">
            <Contact />
          </div>
      </main>

      {/* Самый тонкий футер: всего 4px отступы */}
      <footer className="bg-primary text-white text-center py-1 flex-none text-[10px] font-medium tracking-tight">
        TechFix Express 2026 © | 052-2395151 | נתניה והסביבה
      </footer>
      
      <Toaster />

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: fit-content;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}