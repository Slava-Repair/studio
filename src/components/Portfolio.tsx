
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Portfolio() {
  const projects = [
    { id: "portfolio-1", label: "תיקון מכונת כביסה יוקרתית" },
    { id: "portfolio-2", label: "שיקום תנור אפייה מובנה" },
    { id: "refrigerator-repair", label: "טיפול במערכת קירור מתקדמת" },
    { id: "dishwasher-repair", label: "התקנה ותיקון מדיח כלים" },
  ];

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">תיקונים שביצענו</h2>
          <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            מבט חטוף על העבודה היומיומית שלנו והפתרונות שאנו מספקים ללקוחותינו.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((project, idx) => {
            const imgData = PlaceHolderImages.find(img => img.id === project.id);
            return (
              <div key={idx} className="group relative aspect-square overflow-hidden rounded-xl bg-muted shadow-lg">
                <Image
                  src={imgData?.imageUrl || ""}
                  alt={project.label}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  data-ai-hint={imgData?.imageHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-bold text-lg text-right w-full" dir="rtl">{project.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
