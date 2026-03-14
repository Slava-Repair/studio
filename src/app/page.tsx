'use client';

import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import AboutUs from '@/components/AboutUs';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import AiTextTool from '@/components/AiTextTool';
import { Toaster } from '@/components/ui/toaster';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fcfdfe] font-sans flex flex-col" dir="rtl">
      <Navigation />
      
      <main className="flex-1">
        <Hero />
        <Services />
        <AboutUs />
        <Portfolio />
        <AiTextTool />
        <Testimonials />
        <div className="max-w-7xl mx-auto px-4 py-24">
          <Contact />
        </div>
      </main>

      <footer className="bg-primary text-white text-center py-6 flex-none text-sm font-medium">
        כל הזכויות שמורות. TechFix Express 2026 © | שירות מקצועי לבית
      </footer>
      
      <Toaster />
    </div>
  );
}