"use client";

import { Wrench } from "lucide-react";

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b shrink-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 items-center flex-row-reverse">
          <div className="flex items-center gap-2">
            <Wrench className="h-5 w-5 text-primary" />
            <span className="font-headline font-bold text-lg text-primary tracking-tight">
              TechFix Express
            </span>
          </div>
          <div className="text-primary font-bold hidden md:block text-sm">
            נתניה והסביבה | 052-2395151
          </div>
        </div>
      </div>
    </nav>
  );
}