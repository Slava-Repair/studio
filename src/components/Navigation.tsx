
"use client";

import { Wrench, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center flex-row-reverse">
          {/* Logo on the right */}
          <div className="flex items-center gap-2">
            <Wrench className="h-6 w-6 text-primary" />
            <span className="font-headline font-bold text-xl text-primary tracking-tight">
              TechFix Express
            </span>
          </div>

          {/* Button on the left (links removed) */}
          <div className="hidden md:flex items-center">
            <Button className="bg-primary text-primary-foreground font-semibold px-6">
              הזמן שירות עכשיו
            </Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-b animate-in fade-in slide-in-from-top-2">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-right" dir="rtl">
            <div className="pt-2 px-3">
              <Button className="w-full bg-primary text-primary-foreground font-semibold">
                הזמן שירות עכשיו
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
