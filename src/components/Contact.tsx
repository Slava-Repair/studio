"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Image from "next/image";
import InquiryForm from "./InquiryForm";

export default function Contact() {
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
    <section id="contact" className="w-full max-w-6xl mx-auto">
      <div className="text-center mb-4 space-y-1" dir="rtl">
        <h2 className="font-headline text-2xl font-bold text-primary">צור קשר</h2>
        <div className="w-12 h-1 bg-primary mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center" dir="rtl">
        {/* Column 1: Form (Right) */}
        <div className="w-full">
          <InquiryForm />
        </div>

        {/* Column 2: Info (Middle) */}
        <div className="space-y-4 px-6 bg-secondary/30 py-6 rounded-2xl border border-primary/10 shadow-sm h-full flex flex-col justify-center">
          <h3 className="text-xl font-bold text-primary mb-2 text-right border-b border-primary/20 pb-2">פרטי התקשרות</h3>
          <div className="space-y-4">
            {contactDetails.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 group justify-start flex-row">
                <div className="text-right flex-1">
                  <h4 className="font-bold text-primary text-sm">{item.title}</h4>
                  {item.link ? (
                    <a href={item.link} className="text-foreground hover:text-primary transition-colors text-base font-semibold">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-foreground text-base font-semibold">{item.value}</p>
                  )}
                </div>
                <div className="p-2.5 bg-primary text-white rounded-xl shadow-md transition-all shrink-0">
                  <item.icon className="h-5 w-5" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column 3: Photo (Left) */}
        <div className="flex justify-center items-center h-full">
          <div className="relative w-full max-w-[280px] aspect-[4/5] rounded-2xl overflow-hidden border-2 border-primary shadow-2xl transition-transform hover:scale-[1.01]">
            <Image
              src="/images/photo1.png"
              alt="Professional technician"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}