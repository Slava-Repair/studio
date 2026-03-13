
"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import InquiryForm from "./InquiryForm";

export default function Contact() {
  const contactDetails = [
    {
      title: "טלפון",
      value: "054-123-4567",
      icon: Phone,
    },
    {
      title: "דוא\"ל",
      value: "service@techfix.co.il",
      icon: Mail,
    },
    {
      title: "כתובת",
      value: "רחוב המלאכה 12, תל אביב",
      icon: MapPin,
    },
    {
      title: "שעות פעילות",
      value: "א' - ה': 08:00 - 20:00\nו' וערבי חג: 08:00 - 14:00",
      icon: Clock,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-background min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        <div className="text-center mb-12 space-y-4 w-full" dir="rtl">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">צור קשר</h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            אנחנו כאן לכל שאלה, ייעוץ או קריאת שירות. השאירו פרטים ונחזור אליכם בהקדם.
          </p>
        </div>

        <div className="w-full space-y-8 mb-16" dir="rtl">
          <div className="flex flex-col items-center gap-6">
            {contactDetails.map((item, idx) => (
              <div key={idx} className="flex items-center justify-end gap-6 w-full max-w-sm">
                <div className="text-right">
                  <h4 className="font-bold text-primary text-lg">{item.title}</h4>
                  <p className="text-muted-foreground whitespace-pre-wrap">{item.value}</p>
                </div>
                <div className="p-3 bg-muted/50 rounded-full border border-border shrink-0">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full max-w-2xl">
          <InquiryForm />
        </div>
      </div>
    </section>
  );
}
