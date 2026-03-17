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
      href: "tel:+972522395151" 
    },
    { 
      icon: Mail, 
      label: "אימייל", 
      value: "demslava@gmail.com", 
      href: "mailto:demslava@gmail.com" 
    },
    { icon: Clock, label: "שעות פעילות", value: "א' - ה': 08:00 - 17:00" },
    { icon: MapPin, label: "מיקום", value: "נתניה והסביבה" },
  ];

  return (
    <section id="contact" className="w-full max-w-7xl mx-auto px-4 py-4 md:py-8 flex flex-col gap-6 md:gap-8">
      
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 w-full items-stretch" dir="rtl">
        
        {/* Блок 1: Форма (Левый) — 40% ширины */}
        <div className="w-full lg:w-[40%] bg-white rounded-[2rem] shadow-xl border-2 border-primary/20 p-6">
          <InquiryForm />
        </div>

        {/* Блок 2: Фото (Центральный) — Радикальный сдвиг -300px */}
        <div className="w-full lg:w-[30%] bg-white rounded-[2rem] shadow-xl border-2 border-primary/20 relative overflow-hidden min-h-[350px] md:min-h-[450px]">
          <div 
            className="absolute inset-0 w-full" 
            style={{ 
              height: '180%', // Увеличили высоту контента внутри, чтобы было куда двигать
              top: '-300px',  // Жестко вытягиваем за «голову» вверх
              position: 'absolute'
            }}
          > 
            <Image
              src="/images/photo1.png"
              alt="Professional technician"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 33vw"
              priority
            />
          </div>
        </div>

        {/* Блок 3: Контакты (Правый) — 30% ширины */}
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
                  
                  {item.href ? (
                    <a 
                      href={item.href} 
                      className="text-sm md:text-base font-extrabold text-foreground leading-tight hover:text-primary transition-colors duration-200 hover:underline underline-offset-4"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-sm md:text-base font-extrabold text-foreground leading-tight">
                      {item.value}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}