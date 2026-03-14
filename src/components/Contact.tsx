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
    <section id="contact" className="w-full h-full flex flex-col justify-center gap-4 py-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-5xl mx-auto w-full" dir="rtl">
        
        {/* Right Column: Contact Info Card */}
        <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.12)] border border-primary/5 h-full flex flex-col justify-center order-1">
          <div className="space-y-6 lg:space-y-8">
            <div className="text-center mb-4">
              <h3 className="text-xl font-black text-primary border-b border-primary/10 pb-3 inline-block px-8">פרטי התקשרות</h3>
            </div>
            {contactDetails.map((item, idx) => (
              <div key={idx} className="flex items-center justify-end gap-5 text-right">
                <div className="flex flex-col flex-1 items-end">
                  <span className="text-[11px] font-bold text-muted-foreground/60 uppercase tracking-widest leading-none mb-1.5">{item.label}</span>
                  <span className="text-base lg:text-lg font-bold text-foreground leading-none">{item.value}</span>
                </div>
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 border border-primary/10 shadow-sm text-primary">
                  <item.icon className="h-6 w-6" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Left Column: Form + Photo Block */}
        <div className="flex flex-col gap-6 h-full order-2 md:order-1">
          {/* Form Card */}
          <div className="bg-white rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.12)] border border-primary/5 flex flex-col overflow-hidden">
             <InquiryForm />
          </div>

          {/* Photo Block */}
          <div className="relative w-full aspect-[3/1] rounded-2xl overflow-hidden border border-primary/20 shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
            <Image
              src="/images/photo1.png"
              alt="Professional technician"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 border-2 border-primary/20 pointer-events-none rounded-2xl"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
