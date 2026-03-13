
"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Refrigerator, WashingMachine, Flame, UtensilsCrossed } from "lucide-react";

const services = [
  {
    title: "מקררים",
    description: "תיקון כל סוגי המקררים, פתרון בעיות קירור, החלפת חלקים מקוריים ומילוי גז.",
    icon: Refrigerator,
    img: "refrigerator-repair",
  },
  {
    title: "מכונות כביסה",
    description: "תיקון תקלות מכניות וחשמליות במכונות כביסה ומייבשים מכל המותגים.",
    icon: WashingMachine,
    img: "dryer-repair",
  },
  {
    title: "תנורים",
    description: "טיפול בתנורי אפייה וכיריים, החלפת גופי חימום, תרמוסטטים וזכוכיות.",
    icon: Flame,
    img: "oven-repair",
  },
  {
    title: "מדיחי כלים",
    description: "פתרון בעיות ניקוז, חימום וניקוי במדיחי כלים ביתיים ותעשייתיים.",
    icon: UtensilsCrossed,
    img: "dishwasher-repair",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">השירותים שלנו</h2>
          <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            אנחנו מומחים בתיקון מגוון רחב של מוצרי חשמל ביתיים עם דגש על איכות ועמידות.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" dir="rtl">
          {services.map((service, index) => {
            const serviceImg = PlaceHolderImages.find((img) => img.id === service.img);
            return (
              <Card key={index} className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={serviceImg?.imageUrl || ""}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    data-ai-hint={serviceImg?.imageHint}
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors"></div>
                  <div className="absolute top-4 left-4 p-2 bg-white rounded-lg shadow-md">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-bold text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
