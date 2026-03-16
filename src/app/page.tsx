'use client';

import React from 'react';
import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';
import { Toaster } from '@/components/ui/toaster';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fcfdfe] font-sans flex flex-col" dir="rtl">
      <Navigation />
      
      <main className="flex-1 w-full max-w-7xl mx-auto p-4 md:p-8 pt-24 md:pt-32 flex flex-col items-center">
          {/* Заголовок: text-2xl для мобилок, text-4xl для ПК. mb-6 — умеренный отступ снизу */}
          <h1 className="text-2xl md:text-4xl font-black text-primary text-center mb-6 drop-shadow-sm">
            תיקון מוצרי חשמל ביתיים מהיר ויעיל
          </h1>
          
          <div className="w-full">
            <Contact />
          </div>
      </main>

      <footer className="bg-primary text-white text-center py-6 flex-none text-[12px] font-medium tracking-tight">
        TechFix Express 2026 © | 052-2395151 | נתניה והסביבה
      </footer>
      
      <Toaster />
    </div>
  );
}