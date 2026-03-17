"use client";

import Image from "next/image";
import InquiryForm from "./InquiryForm";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

export default function Contact() {
  const contactDetails = [
    { icon: Phone, label: "טלפון", value: "052-2395151", href: "tel:+972522395151" },
    { icon: Mail, label: "אימייל", value: "demslava@gmail.com", href: "mailto:demslava@gmail.com" },
    { icon: Clock, label: "שעות פעילות", value: "א' - ה': 08:00 - 17:00" },
    { icon: MapPin, label: "מיקום", value: "נתניה והסביבה" },
  ];

  return (
    <section id="contact" className="w-full max-w-7xl mx-auto px-4 py-4 md:py-8 flex flex-col gap-6 md:gap-8">
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 w-full items-stretch" dir="rtl">
        
        {/* Форма */}
        <div className="w-full lg:w-[42%] bg-white rounded-[2rem] shadow-xl border-2 border-primary/20 p-6">
          <InquiryForm />
        </div>

        {/* Твое НОВОЕ фото (без лишнего потолка) */}
        <div className="w-full lg:w-[28%] bg-white rounded-[2rem] shadow-xl border-2 border-primary/20 relative overflow-hidden min-h-[350px] md:min-h-[450px]">
          <Image
            src="/images/photo_final.png" 
            alt="Slava Dementyev"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Контакты */}
        <div className="w-full lg:w-[30%] bg-white rounded-[2rem] shadow-xl border-2 border-primary/20 p-6 lg:p-8 flex flex-col justify-center">
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-xl md:text-2xl font-black text-primary border-b-4 border-primary/20 pb-2 inline-block px-8">פרטי התקשרות</h3>
          </div>
          <div className="space-y-4 md:space-y-6">
            {contactDetails.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 text-right">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border-2 border-primary/10 shadow-sm text-primary">
                  <item.icon className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-primary/40 uppercase tracking-widest mb-1">{item.label}</span>
                  <a href={item.href} className="text-sm md:text-base font-extrabold text-foreground hover:text-primary transition-all duration-200 hover:underline underline-offset-4">
                    {item.value}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}