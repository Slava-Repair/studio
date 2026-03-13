"use client";

import { Wrench } from "lucide-react";

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center flex-row-reverse">
          <div className="flex items-center gap-2">
            <Wrench className="h-6 w-6 text-primary" />
            <span className="font-headline font-bold text-xl text-primary tracking-tight">
              TechFix Express
            </span>
          </div>
          <div className="text-primary font-bold hidden md:block">
            נתניה והסביבה | 052-2395151
          </div>
        </div>
      </div>
    </nav>
  );
}