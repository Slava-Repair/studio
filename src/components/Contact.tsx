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

  const brands = [
    "ZANUSSI", "BOSCH", "SAMSUNG", "LG", "WHIRLPOOL", "ELECTROLUX", "SIEMENS", "BEKO", "MIELE", "HAIER", "CONSTRUCTA"
  ];

  const commonClasses = "bg-white rounded-[2rem] shadow-[0_40px_80px_rgba(0,0,0,0.3)] border-2 border-primary/20 flex flex-col h-full transition-all hover:shadow-[0_50px_100px_rgba(0,0,0,0.35)]";

  return (
    <section id="contact" className="w-full max-w-7xl mx-auto px-4 py-2 md:py-4 h-full flex flex-col justify-center gap-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch w-full" dir="rtl">
        
        {/* Block 1: Photo (Right side in RTL) */}
        <div className={`${commonClasses} relative min-h-[300px] md:min-h-0 overflow-hidden order-1`}>
          <Image
            src="/images/photo1.png"
            alt="Professional technician repairing washing machine"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 33vw"
            priority
            data-ai-hint="washing machine repair"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
        </div>

        {/* Block 2: Contact Info (Center) */}
        <div className={`${commonClasses} p-6 lg:p-8 flex flex-col justify-center order-2`}>
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-xl md:text-2xl font-black text-primary border-b-4 border-primary/20 pb-2 inline-block px-10">פרטי התקשרות</h3>
            </div>
            <div className="space-y-6">
              {contactDetails.map((item, idx) => (
                <div key={idx} className="flex items-center justify-start gap-5 text-right">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 border-2 border-primary/10 shadow-md text-primary">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-[10px] font-black text-primary/40 uppercase tracking-[0.2em] leading-none mb-1">{item.label}</span>
                    <span className="text-sm lg:text-base font-extrabold text-foreground leading-tight">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Block 3: Inquiry Form (Left side in RTL) */}
        <div className={`${commonClasses} order-3`}>
          <InquiryForm />
        </div>

      </div>

      {/* Brands Section */}
      <div className="w-full mt-2 pt-4 border-t border-primary/5">
        <p className="text-center text-[9px] font-black text-primary/40 uppercase tracking-[0.3em] mb-4">מתמחים בתיקון כל המותגים המובילים</p>
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 transition-all">
          {brands.map((brand) => (
            <span key={brand} className="text-xs md:text-sm font-black tracking-tighter text-primary italic">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}