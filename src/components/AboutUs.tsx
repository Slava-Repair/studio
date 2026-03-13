
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ShieldCheck, Clock, Award } from "lucide-react";

export default function AboutUs() {
  const teamImg = PlaceHolderImages.find((img) => img.id === "team-member-1");

  const values = [
    {
      title: "אמינות מעל הכל",
      desc: "אנחנו מאמינים בשקיפות מלאה מול הלקוח ובמתן מחיר הוגן לכל עבודה.",
      icon: ShieldCheck,
    },
    {
      title: "זמינות מהירה",
      desc: "מבינים שהמכשיר שהתקלקל קריטי ליומיום שלכם, לכן אנחנו מגיעים מהר.",
      icon: Clock,
    },
    {
      title: "מקצועיות ללא פשרות",
      desc: "ניסיון של למעלה מ-15 שנה בתיקון מכשירי חשמל מכל הסוגים.",
      icon: Award,
    },
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] order-2 lg:order-1">
            <div className="absolute -top-4 -left-4 w-full h-full border-4 border-secondary rounded-2xl z-0"></div>
            <Image
              src={teamImg?.imageUrl || ""}
              alt="Our professional team"
              fill
              className="object-cover rounded-2xl relative z-10 shadow-2xl"
              data-ai-hint="friendly technician"
            />
          </div>

          <div className="space-y-8 order-1 lg:order-2 text-right" dir="rtl">
            <div className="space-y-4">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">הסיפור של TechFix Express</h2>
              <div className="w-20 h-1.5 bg-secondary rounded-full"></div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                התחלנו כעסק משפחתי קטן לפני למעלה מעשור, עם חזון אחד ברור: להביא סטנדרט חדש של שירות ואמינות לענף תיקון מוצרי החשמל. כיום, אנו גאים להיות הבחירה הראשונה של אלפי משפחות ועסקים.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                הצוות שלנו מורכב מטכנאים מוסמכים שעוברים הכשרות תקופתיות על הדגמים החדשים ביותר בשוק, כדי להבטיח שתקבלו את הפתרון המדויק והחסכוני ביותר.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              {values.map((v, i) => (
                <div key={i} className="space-y-2">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
                    <v.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-primary">{v.title}</h4>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
