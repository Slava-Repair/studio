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
      value: "א' - ה': 08:00 - 17:00",
      icon: Clock,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-background min-h-[calc(100vh-120px)] flex flex-col items-center justify-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="text-center mb-16 space-y-4" dir="rtl">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">צור קשר</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            אנחנו כאן לכל שאלה, ייעוץ או קריאת שירות. השאירו פרטים ונחזור אליכם בהקדם.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start" dir="rtl">
          {/* Form on the right (first child in RTL) */}
          <div className="w-full">
            <InquiryForm />
          </div>

          {/* Info on the left (second child in RTL) */}
          <div className="space-y-8 lg:pl-12">
            <h3 className="text-2xl font-bold text-primary mb-6">פרטי התקשרות</h3>
            <div className="space-y-6">
              {contactDetails.map((item, idx) => (
                <div key={idx} className="flex items-center gap-6 group">
                  <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-lg">{item.title}</h4>
                    {item.link ? (
                      <a href={item.link} className="text-muted-foreground hover:text-primary transition-colors text-lg">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground text-lg">{item.value}</p>
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
