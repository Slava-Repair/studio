'use client';

import React from 'react';
import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';
import { Toaster } from '@/components/ui/toaster';

export default function App() {
  return (
    <div className="h-screen bg-[#fcfdfe] font-sans flex flex-col overflow-hidden" dir="rtl">
      <Navigation />
      
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-7xl mx-auto">
          <Contact />
        </div>
      </main>

      <footer className="bg-primary text-white text-center py-3 flex-none text-xs font-medium">
        כל הזכויות שמורות. TechFix Express 2026 © | שירות מקצועי לבית
      </footer>
      
      <Toaster />
    </div>
  );
}
