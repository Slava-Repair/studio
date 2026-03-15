"use client";

import Image from "next/image";
import InquiryForm from "./InquiryForm";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

export default function Contact() {
  const contactDetails = [
    { icon: Phone, label: "טלפון", value: "052-2395151" },
    { icon: Mail, label: "אימייל", value: "demslava@gmail.com" },
    { icon: Clock, label: "שעות פעילות", value: "א' - ה': 08:00 - 17:00" },
    { icon: MapPin, label: "מיקום", value: "נתניה והסביבה" },
  ];

  const brands = [
    "ZANUSSI", "BOSCH", "SAMSUNG", "LG", "WHIRLPOOL", "ELECTROLUX", "SIEMENS", "BEKO", "MIELE", "HAIER", "CONSTRUCTA"
  ];

  // Основной стиль блоков: на мобиле высота свободная (h-auto), на компе — на всю высоту ряда (md:h-full)
  const commonClasses = "bg-white rounded-[2rem] shadow-lg border-2 border-primary/20 flex flex-col w-full h-auto md:h-full transition-all hover:shadow-2xl overflow-hidden";

  return (
    // Секция теперь h-auto, чтобы страница могла расти вниз на телефоне
    <section id="contact" className="w-full max-w-7xl mx-auto px-4 py-12 h-auto flex flex-col gap-10">
      
      {/* Сетка: на мобиле 1 колонка, на компе 3 колонки */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch w-full" dir="rtl">
        
        {/* Блок 1: Контакты */}
        <div className={`${commonClasses} p-6 lg:p-10 order-1`}>
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl font-black text-primary border-b-4 border-primary/20 pb-2 inline-block px-8">פרטי התקשרות</h3>
          </div>
          <div className="space-y-8">
            {contactDetails.map((item, idx) => (
              <div key={idx} className="flex items-center gap-5 text-right">
                <div className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border-2 border-primary/10 shadow-sm text-primary">
                  <item.icon className="h-7 w-7" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-primary/40 uppercase tracking-widest mb-1">{item.label}</span>
                  <span className="text-base md:text-lg font-extrabold text-foreground leading-tight">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Блок 2: Фото (Сделали высоту 500px на мобиле, чтобы всё влезло) */}
        <div className="bg-white rounded-[2rem] shadow-lg border-2 border-primary/20 relative overflow-hidden h-[500px] md:h-full w-full order-2">
          <Image
            src="/images/photo1.png"
            alt="Professional technician repairing washing machine"
            fill
            className="object-cover object-top" // Прижимаем фото к верху, чтобы голова была видна
            sizes="(max-width: 1024px) 100vw, 33vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
        </div>

        {/* Блок 3: Форма (Просто блок, который идет следом) */}
        <div className={`${commonClasses} order-3`}>
          <InquiryForm />
        </div>

      </div>

      {/* Бренды — теперь они точно будут в самом низу */}
      <div className="w-full mt-10 pt-10 border-t border-primary/10">
        <p className="text-center text-[11px] font-bold text-primary/50 uppercase tracking-[0.4em] mb-10">מתמחים בתיקון כל המותגים המובילים</p>
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-8 pb-10">
          {brands.map((brand) => (
            <span key={brand} className="text-xs md:text-sm font-black tracking-tighter text-primary italic opacity-60 hover:opacity-100 transition-opacity">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}