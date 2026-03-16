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
    <section id="contact" className="w-full max-w-7xl mx-auto px-4 py-4 flex flex-col gap-8">
      <div className="flex flex-col lg:flex-row gap-8 w-full items-stretch" dir="rtl">
        
        {/* Блок 1: Контакты — вернул p-6 и нормальный шрифт */}
        <div className="w-full lg:w-1/3 bg-white rounded-[2rem] shadow-xl border-2 border-primary/20 p-6 lg:p-8 flex flex-col justify-center">
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl font-black text-primary border-b-4 border-primary/20 pb-2 inline-block px-8">פרטי התקשרות</h3>
          </div>
          <div className="space-y-6">
            {contactDetails.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 text-right">
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border-2 border-primary/10 shadow-sm text-primary">
                  <item.icon className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-primary/40 uppercase tracking-widest mb-1">{item.label}</span>
                  <span className="text-sm md:text-base font-extrabold text-foreground leading-tight">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Блок 2: Фото — вернул высоту 450px */}
        <div className="w-full lg:w-1/3 bg-white rounded-[2rem] shadow-xl border-2 border-primary/20 relative overflow-hidden min-h-[450px]">
          <Image
            src="/images/photo1.png"
            alt="Professional technician"
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 33vw"
            priority
          />
        </div>

        {/* Блок 3: Форма — вернул как было */}
        <div className="w-full lg:w-1/3 bg-white rounded-[2rem] shadow-xl border-2 border-primary/20">
          <InquiryForm />
        </div>

      </div>
    </section>
  );
}