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
      <div className="text-center mb-12 space-y-4">
        <div className="bg-white px-6 py-2 rounded-full shadow-sm border border-primary/20 inline-block mb-2">
          <span className="text-primary font-bold">אנחנו תמיד לשירותכם</span>
        </div>
        <h2 className="font-headline text-3xl md:text-5xl font-black text-primary uppercase tracking-tighter">צור קשר</h2>
        <div className="w-24 h-2 bg-secondary mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch" dir="rtl">
        <div className="order-1 lg:order-1 h-full">
          <InquiryForm />
        </div>

        <div className="order-2 lg:order-2 space-y-6 p-8 bg-white rounded-2xl border border-primary/20 shadow-[0_8px_30px_rgba(0,71,186,0.08)] flex flex-col justify-center h-full">
          <h3 className="text-2xl font-bold text-primary mb-4 text-right border-b border-primary/10 pb-4">פרטי התקשרות</h3>
          <div className="space-y-6">
            {contactDetails.map((item, idx) => (
              <div key={idx} className="flex items-center gap-6 group justify-start flex-row-reverse">
                <div className="text-right flex-1">
                  <h4 className="font-bold text-primary text-sm uppercase tracking-widest opacity-70 mb-1">{item.title}</h4>
                  {item.link ? (
                    <a href={item.link} className="text-foreground hover:text-primary transition-colors text-lg font-bold">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-foreground text-lg font-bold">{item.value}</p>
                  )}
                </div>
                <div className="p-4 bg-primary text-white rounded-2xl shadow-lg transition-all group-hover:scale-110 group-hover:rotate-3 shrink-0">
                  <item.icon className="h-6 w-6" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="order-3 lg:order-3 flex justify-center items-center h-full">
          <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden border-4 border-white shadow-[0_8px_30px_rgba(0,71,186,0.15)] transition-transform hover:scale-[1.02] bg-white">
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