
"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import InquiryForm from "./InquiryForm";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="order-2 lg:order-1">
            <InquiryForm />
          </div>

          <div className="space-y-8 order-1 lg:order-2 text-right" dir="rtl">
            <div className="space-y-4">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">צור קשר</h2>
              <div className="w-20 h-1.5 bg-secondary rounded-full"></div>
              <p className="text-lg text-muted-foreground">
                אנחנו כאן לכל שאלה, ייעוץ או קריאת שירות. השאירו פרטים ונחזור אליכם בהקדם.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-muted rounded-xl">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">טלפון</h4>
                  <p className="text-muted-foreground">054-123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-muted rounded-xl">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">דוא&quot;ל</h4>
                  <p className="text-muted-foreground">service@techfix.co.il</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-muted rounded-xl">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">כתובת</h4>
                  <p className="text-muted-foreground">רחוב המלאכה 12, תל אביב</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-muted rounded-xl">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">שעות פעילות</h4>
                  <p className="text-muted-foreground">א&apos; - ה&apos;: 08:00 - 20:00</p>
                  <p className="text-muted-foreground">ו&apos; וערבי חג: 08:00 - 14:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
