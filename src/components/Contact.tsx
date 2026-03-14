
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
    <section id="contact" className="w-full h-full flex flex-col justify-center gap-4 py-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch max-w-7xl mx-auto w-full" dir="rtl">
        
        {/* Column 1: Inquiry Form */}
        <div className="bg-white rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.15)] border border-primary/5 flex flex-col overflow-hidden order-1">
          <InquiryForm />
        </div>

        {/* Column 2: Contact Info */}
        <div className="bg-white p-6 lg:p-8 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.15)] border border-primary/5 flex flex-col justify-center order-2">
          <div className="space-y-6">
            <div className="text-center mb-4">
              <h3 className="text-xl font-black text-primary border-b-2 border-primary/10 pb-2 inline-block px-6">פרטי התקשרות</h3>
            </div>
            {contactDetails.map((item, idx) => (
              <div key={idx} className="flex items-center justify-start gap-4 text-right">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 border border-primary/10 shadow-sm text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest leading-none mb-1">{item.label}</span>
                  <span className="text-sm lg:text-base font-bold text-foreground leading-tight">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column 3: Photo */}
        <div className="relative w-full min-h-[300px] md:h-auto rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)] border border-primary/10 order-3">
          <Image
            src="/images/photo1.png"
            alt="Professional technician repairing appliance"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 33vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
        </div>

      </div>
    </section>
  );
}
