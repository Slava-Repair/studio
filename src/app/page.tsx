'use client';

import React from 'react';
import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';
import { Toaster } from '@/components/ui/toaster';

export default function App() {
  return (
    <div className="h-screen bg-[#fcfdfe] font-sans flex flex-col overflow-hidden" dir="rtl">
      <Navigation />
      
      <main className="flex-1 flex flex-col items-center justify-center p-2 md:p-4 min-h-0">
        <div className="w-full max-w-6xl mx-auto h-full flex flex-col justify-center">
          <Contact />
        </div>
      </main>

      <footer className="bg-primary text-white text-center py-2 flex-none text-[10px] font-medium tracking-tight">
        TechFix Express 2026 © | 052-2395151 | נתניה והסביבה
      </footer>
      
      <Toaster />
    </div>
  );
}
