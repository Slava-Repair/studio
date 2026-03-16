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
    <div className="flex flex-col h-screen overflow-hidden bg-[#fcfdfe] font-sans" dir="rtl">
      <Navigation />
      
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 pt-16 md:pt-20 flex flex-col items-center justify-center">
          
          <h1 className="text-lg md:text-2xl font-black text-primary text-center mb-1 drop-shadow-sm">
            תיקון מוצרי חשמל ביתיים מהיר ויעיל
          </h1>

          <div className="w-full max-w-4xl flex flex-col items-center mb-2">
            <p className="text-[8px] md:text-[9px] text-blue-400 font-medium tracking-widest mb-1">
              מתמחים בתיקון כל המותגים המובילים
            </p>

            <div className="w-full overflow-hidden relative py-1 border-y border-gray-100" dir="ltr">
              <div className="flex animate-marquee whitespace-nowrap gap-10 text-primary font-bold text-xs md:text-sm italic">
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

      <footer className="bg-primary text-white text-center py-1 flex-none text-[9px] font-medium tracking-tight">
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