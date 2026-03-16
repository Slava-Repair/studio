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
    <div className="min-h-screen bg-[#fcfdfe] font-sans flex flex-col overflow-x-hidden" dir="rtl">
      <Navigation />
      
      {/* Убрал лишние отступы сверху (pt-8) */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-8 pt-8 md:pt-12 flex flex-col items-center">
          
          <h1 className="text-xl md:text-4xl font-black text-primary text-center drop-shadow-sm whitespace-nowrap">
            תיקון מוצרי חשמל ביתיים מהיר ויעיל
          </h1>

          {/* mt-12 md:mt-16 опускает этот блок ниже, ближе к контактам */}
          <div className="w-full max-w-4xl flex flex-col items-center mt-12 md:mt-16 mb-4">
            
            <p className="text-[10px] md:text-xs text-blue-400 font-medium tracking-widest mb-3">
              מתמחים בתיקון כל המותגים המובילים
            </p>

            {/* dir="ltr" обязательно для правильного движения английского текста справа налево */}
            <div className="w-full overflow-hidden relative py-2 border-y border-gray-100" dir="ltr">
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

      <footer className="bg-primary text-white text-center py-4 flex-none text-[12px] font-medium tracking-tight">
        TechFix Express 2026 © | 052-2395151 | נתניה והסביבה
      </footer>
      
      <Toaster />

      {/* Анимация: сдвиг влево (-50%) создает движение справа налево */}
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