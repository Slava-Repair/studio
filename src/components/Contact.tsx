
"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Image from "next/image";
import InquiryForm from "./InquiryForm";

export default function Contact() {
  const contactDetails = [
    {
      title: "טלפון",
      value: "052-2395151",
      link: "tel:0522395151",
      icon: Phone,
    },
    {
      title: "דוא\"ל",
      value: "demslava@gmail.com",
      link: "mailto:demslava@gmail.com",
      icon: Mail,
    },
    {
      title: "כתובת",
      value: "נתניה",
      icon: MapPin,
    },
    {
      title: "שעות פעילות",
      value: "08:00 - 17:00",
      icon: Clock,
    },
  ];

  return (
    <section id="contact" className="w-full">
      <div className="text-center mb-4 space-y-1">
        <div className="bg-white px-6 py-1 rounded-full shadow-sm border border-primary/20 inline-block mb-2">
          <span className="text-primary font-bold text-sm">אנחנו תמיד לשירותכם</span>
        </div>
        <h2 className="font-headline text-2xl md:text-3xl font-black text-primary">צור קשר</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 items-stretch" dir="rtl">
        {/* Column 1: Form (Right on Desktop) */}
        <div className="order-1 lg:order-1 h-full">
          <InquiryForm />
        </div>

        {/* Column 2: Info (Middle) */}
        <div className="order-2 lg:order-2 space-y-4 px-6 bg-white py-6 rounded-2xl border border-primary/20 shadow-[0_8px_30px_rgba(0,71,186,0.08)] flex flex-col justify-center h-full">
          <h3 className="text-xl font-bold text-primary mb-2 text-right border-b border-primary/10 pb-2">פרטי התקשרות</h3>
          <div className="space-y-4">
            {contactDetails.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 group justify-start flex-row-reverse">
                <div className="text-right flex-1">
                  <h4 className="font-bold text-primary text-xs">{item.title}</h4>
                  {item.link ? (
                    <a href={item.link} className="text-foreground hover:text-primary transition-colors text-base font-bold">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-foreground text-base font-bold">{item.value}</p>
                  )}
                </div>
                <div className="p-2 bg-primary text-white rounded-xl shadow-md transition-all shrink-0">
                  <item.icon className="h-5 w-5" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column 3: Photo (Left on Desktop) */}
        <div className="order-3 lg:order-3 flex justify-center items-center h-full">
          <div className="relative w-full aspect-[4/5] max-h-[350px] lg:max-h-full rounded-2xl overflow-hidden border border-primary shadow-[0_8px_30px_rgba(0,71,186,0.15)] transition-transform hover:scale-[1.01] bg-white">
            <Image
              src="/images/photo1.png"
              alt="Professional technician"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
