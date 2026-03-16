'use client';

import React from 'react';
import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';
import { Toaster } from '@/components/ui/toaster';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fcfdfe] font-sans flex flex-col" dir="rtl">
      <Navigation />
      
      <main className="flex-1 w-full max-w-7xl mx-auto p-4 md:p-8 pt-24 md:pt-32">
          {/* ВОТ ЗДЕСЬ ДОЛЖЕН БЫТЬ ЗАГОЛОВОК */}
          <h1 className="text-3xl md:text-5xl font-black text-primary text-center mb-10 drop-shadow-md">
            תיקון מוצרי חשמל ביתיים מהיר ויעיל
          </h1>
          
          <Contact />
      </main>

      <footer className="bg-primary text-white text-center py-6 flex-none text-[12px] font-medium tracking-tight">
        TechFix Express 2026 © | 052-2395151 | נתניה והסביבה
      </footer>
      
      <Toaster />
    </div>
  );
}