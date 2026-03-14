
'use client';

import React from 'react';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';
import { Toaster } from '@/components/ui/toaster';

export default function App() {
  return (
    <div className="min-h-screen md:h-screen md:overflow-hidden bg-[#fcfdfe] font-sans flex flex-col" dir="rtl">
      <Navigation />
      
      <main className="flex-1 flex flex-col justify-center items-center p-4 md:p-8">
        <div className="w-full max-w-7xl mx-auto">
          <Contact />
        </div>
      </main>

      <footer className="bg-primary text-white text-center py-2 flex-none text-[10px] md:text-xs font-medium">
        כל הזכויות שמורות. TechFix Express 2026 © | שירות מקצועי לבית
      </footer>
      
      <Toaster />
    </div>
  );
}
