"use client";

import Image from "next/image";
import InquiryForm from "./InquiryForm";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

export default function Contact() {
  const contactDetails = [
    {
      icon: Phone,
      label: "טלפון",
      value: "052-2395151",
    },
    {
      icon: Mail,
      label: "אימייל",
      value: "demslava@gmail.com",
    },
    {
      icon: Clock,
      label: "שעות פעילות",
      value: "א' - ה': 08:00 - 17:00",
    },
    {
      icon: MapPin,
      label: "מיקום",
      value: "נתניה והסביבה",
    },
  ];

  return (
    <section id="contact" className="w-full h-full flex flex-col justify-center gap-2 py-2">
      {/* Header Section - Scaled for space */}
      <div className="text-center space-y-1">
        <div className="inline-block bg-secondary/30 text-primary px-3 py-0.5 rounded-full text-[10px] font-bold border border-primary/20 uppercase">
          שירות תיקונים מקצועי
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-primary uppercase tracking-tighter leading-none">
          צור קשר
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 items-stretch h-full max-h-[70vh] md:max-h-[75vh]" dir="rtl">
        
        {/* 1. Form Column - Rightmost (Order 1) */}
        <div className="order-1 flex flex-col min-h-0">
          <InquiryForm />
        </div>

        {/* 2. Info Column - Center (Order 2) */}
        <div className="order-2 flex flex-col justify-center p-4 lg:p-6 bg-white rounded-2xl border border-primary/10 shadow-[0_8px_30px_rgba(0,71,186,0.05)] min-h-0">
          <div className="space-y-4 lg:space-y-6">
            <h3 className="text-lg font-black text-primary border-b border-primary/10 pb-2 mb-2">פרטי התקשרות</h3>
            {contactDetails.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-right">
                <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center shrink-0 border border-primary/10">
                  <item.icon className="h-4 w-4 text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider leading-none mb-1">{item.label}</span>
                  <span className="text-xs lg:text-sm font-bold text-foreground leading-none">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Photo Column - Leftmost (Order 3) */}
        <div className="order-3 hidden md:flex justify-center items-center min-h-0">
          <div className="relative w-full h-full rounded-2xl overflow-hidden border border-primary/20 shadow-[0_15px_40px_rgba(0,71,186,0.1)]">
            <Image
              src="/images/photo1.png"
              alt="Professional technician"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 50vw, 33vw"
              priority
            />
            {/* Blue border overlay */}
            <div className="absolute inset-0 border-2 border-primary/30 pointer-events-none rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
