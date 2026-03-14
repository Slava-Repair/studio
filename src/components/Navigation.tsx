"use client";

import { Wrench } from "lucide-react";

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b shrink-0 h-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Top Left: Pill Badge */}
          <div className="flex items-center">
            <div className="bg-secondary/30 text-primary px-4 py-1.5 rounded-full text-xs font-bold border border-primary/20 shadow-sm">
              נתניה והסביבה | 052-2395151
            </div>
          </div>

          {/* Top Right: Logo */}
          <div className="flex items-center gap-2">
            <span className="font-headline font-black text-2xl text-primary tracking-tighter">
              TechFix Express
            </span>
            <Wrench className="h-6 w-6 text-primary" />
          </div>
        </div>
      </div>
    </nav>
  );
}
