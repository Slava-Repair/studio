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
      
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-8 pt-20 md:pt-24 flex flex-col items-center">
          
          {/* Главный заголовок */}
          <h1 className="text-xl md:text-4xl font-black text-primary text-center mb-16 md:mb-24 drop-shadow-sm whitespace-nowrap">
            תיקון מוצרי חשמל ביתיים מהיר ויעיל
          </h1>

          {/* Бегущая строка: теперь ниже и бежит справа налево */}
          <div className="w-full max-w-4xl overflow-hidden mb-8 relative py-2 border-y border-gray-50">
            <div className="flex animate-marquee whitespace-nowrap gap-10 text-primary font-bold text-sm md:text-base italic">
              {/* Список брендов дважды для бесконечного цикла */}
              {[...brands, ...brands].map((brand, i) => (
                <span key={i}>{brand}</span>
              ))}
            </div>
          </div>
          
          {/* Блок контактов */}
          <div className="w-full max-w-4xl">
            <Contact />
          </div>
      </main>

      <footer className="bg-primary text-white text-center py-4 flex-none text-[12px] font-medium tracking-tight">
        TechFix Express 2026 © | 052-2395151 | נתניה והסביבה
      </footer>
      
      <Toaster />

      {/* Анимация: Справа налево (from 0 to -50%) */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(50%); }
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