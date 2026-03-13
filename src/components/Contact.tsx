
"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Image from "next/image";
import InquiryForm from "./InquiryForm";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Contact() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-technician");

  const contactDetails = [
    {
      title: "טלפון",
      value: "052-2395151",
      link: "tel:0522395151",
      icon: Phone,
    },
    {
      title: "דוא\"ל",
      value: "demslava@gmail.com",
      link: "mailto:demslava@gmail.com",
      icon: Mail,
    },
    {
      title: "כתובת",
      value: "נתניה",
      icon: MapPin,
    },
    {
      title: "שעות פעילות",
      value: "08:00 - 17:00",
      icon: Clock,
    },
  ];

  return (
    <section id="contact" className="py-2 bg-white flex flex-col items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="text-center mb-4 space-y-1" dir="rtl">
          <h2 className="font-headline text-3xl font-bold text-primary">צור קשר</h2>
          <div className="w-12 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center" dir="rtl">
          {/* Form on the right (Order 1 in RTL) */}
          <div className="w-full lg:order-1">
            <InquiryForm />
          </div>

          {/* Info in the middle (Order 2 in RTL) */}
          <div className="space-y-4 lg:order-2 self-center px-4">
            <h3 className="text-xl font-bold text-primary mb-2 text-right">פרטי התקשרות</h3>
            <div className="space-y-4">
              {contactDetails.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 group justify-start">
                  <div className="p-2.5 bg-primary/5 rounded-xl border border-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div className="text-right">
                    <h4 className="font-bold text-primary text-base">{item.title}</h4>
                    {item.link ? (
                      <a href={item.link} className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground text-sm font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image on the left (Order 3 in RTL) - Updated to technician photo with blue border and shadow */}
          <div className="lg:order-3 flex justify-center">
            <div className="relative w-full max-w-[300px] aspect-[2/3] rounded-2xl overflow-hidden border border-primary shadow-lg transition-transform hover:scale-[1.02]">
              <Image
                src={heroImage?.imageUrl || "https://picsum.photos/seed/tech1/600/900"}
                alt="Professional technician repairing a washing machine"
                fill
                className="object-cover"
                data-ai-hint="technician repair"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
