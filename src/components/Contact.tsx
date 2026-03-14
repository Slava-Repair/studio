"use client";

import Image from "next/image";
import InquiryForm from "./InquiryForm";

export default function Contact() {
  const contactDetails = [
    {
      label: "טלפון:",
      value: "052-2395151",
    },
    {
      label: "אימייל:",
      value: "demslava@gmail.com",
    },
    {
      label: "שעות פעילות:",
      value: "א' - ה': 08:00 - 17:00",
    },
    {
      label: "מיקום:",
      value: "נתניה והסביבה",
    },
  ];

  return (
    <section id="contact" className="w-full flex flex-col items-center">
      {/* Upper Badge and Title */}
      <div className="text-center mb-8 space-y-4">
        <div className="inline-block bg-secondary/30 text-primary px-4 py-1 rounded-lg text-xs font-bold border border-primary/20">
          אנחנו תמיד לשירותכם
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-primary uppercase tracking-tighter">
          צור קשר
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch w-full" dir="rtl">
        {/* Info Column - Left */}
        <div className="order-2 lg:order-1 flex flex-col justify-center p-8 bg-white rounded-2xl border border-primary/10 shadow-[0_8px_30px_rgba(0,71,186,0.05)] h-full">
          <div className="space-y-12">
            {contactDetails.map((item, idx) => (
              <div key={idx} className="flex flex-col text-right">
                <h4 className="font-black text-primary text-sm uppercase tracking-widest mb-1">{item.label}</h4>
                <p className="text-foreground text-sm font-bold opacity-80">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Photo Column - Center */}
        <div className="order-3 lg:order-2 flex justify-center items-center h-full">
          <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden border-2 border-primary/10 shadow-[0_15px_40px_rgba(0,71,186,0.1)]">
            <Image
              src="/images/photo1.png"
              alt="Professional technician"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </div>
        </div>

        {/* Form Column - Right */}
        <div className="order-1 lg:order-3 h-full">
          <InquiryForm />
        </div>
      </div>
    </section>
  );
}
