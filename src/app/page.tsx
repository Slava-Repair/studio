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
      
      {/* Уменьшил pt (верхний отступ), чтобы всё влезло без прокрутки на ПК */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-8 pt-20 md:pt-28 flex flex-col items-center">
          
          {/* Главный заголовок (компактный для мобильных) */}
          <h1 className="text-xl md:text-4xl font-black text-primary text-center mb-1 drop-shadow-sm whitespace-nowrap">
            תיקון מוצרי חשמל ביתיים מהיר ויעיל
          </h1>

          {/* Неподвижный подзаголовок */}
          <p className="text-[10px] md:text-xs text-blue-400 font-medium tracking-widest mb-4">
            מתמחים בתיקון כל המותגים המובילים
          </p>

          {/* Контейнер бегущей строки — ограничен шириной основных блоков */}
          <div className="w-full max-w-4xl overflow-hidden mb-6 relative py-2">
            <div className="flex animate-marquee whitespace-nowrap gap-10 text-primary font-bold text-sm md:text-base italic italic-font">
              {/* Дублируем список для бесконечности */}
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

      {/* Футер остается компактным */}
      <footer className="bg-primary text-white text-center py-4 flex-none text-[12px] font-medium tracking-tight">
        TechFix Express 2026 © | 052-2395151 | נתניה והסביבה
      </footer>
      
      <Toaster />

      {/* Магия анимации */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(100%); }
        }
        .animate-marquee {
          display: flex;
          width: fit-content;
          animation: marquee 25s linear infinite;
        }
        /* Добавим легкий курсив для брендов, как на твоем скрине */
        .italic-font {
          font-style: italic;
        }
      `}</style>
    </div>
  );
}