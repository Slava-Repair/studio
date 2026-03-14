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

  const commonClasses = "bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-primary/20 flex flex-col h-full transition-all hover:shadow-[0_25px_60px_rgba(0,0,0,0.25)]";

  return (
    <section id="contact" className="w-full max-w-7xl mx-auto px-4 py-4 h-full flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch w-full" dir="rtl">
        
        {/* Block 1 (Visual Right): Inquiry Form */}
        <div className={commonClasses}>
          <InquiryForm />
        </div>

        {/* Block 2 (Visual Center): Contact Info */}
        <div className={`${commonClasses} p-6 lg:p-8 flex flex-col justify-center`}>
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-black text-primary border-b-2 border-primary/10 pb-2 inline-block px-8">פרטי התקשרות</h3>
            </div>
            <div className="space-y-6">
              {contactDetails.map((item, idx) => (
                <div key={idx} className="flex items-center justify-start gap-4 text-right flex-row-reverse">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 border border-primary/20 shadow-sm text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] font-bold text-muted-foreground/40 uppercase tracking-widest leading-none mb-1">{item.label}</span>
                    <span className="text-sm lg:text-base font-bold text-foreground leading-tight">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Block 3 (Visual Left): Photo */}
        <div className={`${commonClasses} relative min-h-[400px] overflow-hidden`}>
          <Image
            src="/images/photo1.png"
            alt="Professional technician repairing appliance"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 33vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
        </div>

      </div>
    </section>
  );
}
