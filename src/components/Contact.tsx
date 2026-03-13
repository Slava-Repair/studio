"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";
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
    <section id="contact" className="py-6 bg-white flex flex-col items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="text-center mb-6 space-y-1" dir="rtl">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">צור קשר</h2>
          <div className="w-12 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-base text-muted-foreground max-w-xl mx-auto pt-2">
            אנחנו כאן לכל שאלה, ייעוץ או קריאת שירות. השאירו פרטים ונחזור אליכם בהקדם.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start" dir="rtl">
          {/* Form on the right (First in RTL grid order) */}
          <div className="w-full lg:order-1">
            <InquiryForm />
          </div>

          {/* Info on the left (Second in RTL grid order) */}
          <div className="space-y-4 lg:pr-12 lg:order-2 self-center">
            <h3 className="text-xl font-bold text-primary mb-2">פרטי התקשרות</h3>
            <div className="space-y-3">
              {contactDetails.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="p-3 bg-primary/5 rounded-xl border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div className="text-right">
                    <h4 className="font-bold text-primary text-base">{item.title}</h4>
                    {item.link ? (
                      <a href={item.link} className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground text-sm font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
