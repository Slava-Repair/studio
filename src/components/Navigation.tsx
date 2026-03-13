
"use client";

import Link from "next/link";
import { Wrench, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "בית", href: "#home" },
    { name: "שירותים", href: "#services" },
    { name: "אודות", href: "#about" },
    { name: "פרויקטים", href: "#portfolio" },
    { name: "צור קשר", href: "#contact" },
  ];

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

          {/* Nav links in the middle and Button on the left */}
          <div className="hidden md:flex items-center gap-8 flex-row-reverse">
            <div className="flex items-center space-x-8 space-x-reverse" dir="rtl">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
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
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-foreground hover:bg-muted"
              >
                {link.name}
              </Link>
            ))}
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
