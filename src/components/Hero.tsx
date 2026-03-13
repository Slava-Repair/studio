
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-technician");

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage?.imageUrl || "https://picsum.photos/seed/tech1/1200/800"}
          alt="Technician repairing appliance"
          fill
          className="object-cover brightness-50"
          priority
          data-ai-hint="washing machine repair"
        />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6 animate-fade-in-up">
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
          תיקון מוצרי חשמל ביתיים <br />
          <span className="text-secondary">במהירות ובמקצועיות</span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 font-body max-w-2xl mx-auto">
          אנו מספקים פתרונות תיקון מתקדמים לכל סוגי המכשירים הביתיים. שירות אמין, מהיר ואיכותי עד אליכם הביתה.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 font-bold">
            להצעת מחיר חינם
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 text-lg px-8 font-bold">
            השירותים שלנו
          </Button>
        </div>
      </div>
    </section>
  );
}
