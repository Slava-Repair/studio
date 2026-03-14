"use client";

import { Wrench } from "lucide-react";

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b shrink-0 h-14 md:h-16 flex items-center">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="flex justify-between items-center h-full">
          {/* Top Left: Pill Badge */}
          <div className="flex items-center">
            <div className="bg-white text-primary px-4 py-1.5 rounded-full text-[10px] md:text-xs font-black border border-primary/20 shadow-sm hidden sm:block">
              נתניה והסביבה | 052-2395151
            </div>
            <div className="sm:hidden font-bold text-primary text-xs bg-white px-3 py-1 rounded-full border border-primary/10 shadow-sm">
              052-2395151
            </div>
          </div>

          {/* Top Right: Logo */}
          <div className="flex items-center gap-2">
            <span className="font-headline font-black text-lg md:text-2xl text-primary tracking-tighter leading-none">
              TechFix Express
            </span>
            <div className="bg-primary p-1.5 rounded-md shadow-sm">
              <Wrench className="h-4 w-4 md:h-5 md:w-5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
