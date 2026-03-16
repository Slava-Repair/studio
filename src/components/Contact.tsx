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
    // Уменьшил py-8 на py-2, чтобы секция не занимала место
    <section id="contact" className="w-full max-w-7xl mx-auto px-4 py-2 flex flex-col gap-4">
      
      <div className="flex flex-col lg:flex-row gap-6 w-full items-stretch" dir="rtl">
        
        {/* Блок 1: Контакты — уменьшил p-6 на p-4 */}
        <div className="w-full lg:w-1/3 bg-white rounded-[1.5rem] shadow-xl border-2 border-primary/20 p-4 lg:p-6 flex flex-col justify-center">
          <div className="text-center mb-4">
            <h3 className="text-lg md:text-xl font-black text-primary border-b-4 border-primary/20 pb-1 inline-block px-6">פרטי התקשרות</h3>
          </div>
          <div className="space-y-4">
            {contactDetails.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-right">
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border-2 border-primary/10 shadow-sm text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-black text-primary/40 uppercase tracking-widest leading-none mb-1">{item.label}</span>
                  {item.href ? (
                    <a href={item.href} className="text-xs md:text-sm font-extrabold text-foreground hover:text-primary transition-colors">{item.value}</a>
                  ) : (
                    <span className="text-xs md:text-sm font-extrabold text-foreground">{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Блок 2: Фото — уменьшил min-h */}
        <div className="w-full lg:w-1/3 bg-white rounded-[1.5rem] shadow-xl border-2 border-primary/20 relative overflow-hidden min-h-[350px]">
          <Image
            src="/images/photo1.png"
            alt="Professional technician"
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 33vw"
            priority
          />
        </div>

        {/* Блок 3: Форма */}
        <div className="w-full lg:w-1/3 bg-white rounded-[1.5rem] shadow-xl border-2 border-primary/20 overflow-hidden">
          <InquiryForm />
        </div>

      </div>
    </section>
  );
}