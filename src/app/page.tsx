'use client';

import React from 'react';
import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';
import { Toaster } from '@/components/ui/toaster';

export default function App() {
  return (
    // Убрали h-screen (теперь сайт может расти вниз)
    // Убрали overflow-hidden (теперь пальцем можно листать!)
    <div className="min-h-screen bg-[#fcfdfe] font-sans flex flex-col" dir="rtl">
      <Navigation />
      
      {/* Добавили отступ сверху pt-24, чтобы Navigation не закрывал заголовок */}
      <main className="flex-1 w-full max-w-7xl mx-auto p-4 md:p-8 pt-24 md:pt-32">
          <Contact />
      </main>

      <footer className="bg-primary text-white text-center py-6 flex-none text-[12px] font-medium tracking-tight">
        TechFix Express 2026 © | 052-2395151 | נתניה והסביבה
      </footer>
      
      <Toaster />
    </div>
  );
}