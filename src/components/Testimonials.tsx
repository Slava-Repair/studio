
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "דוד כהן",
    text: "שירות מעולה! הטכנאי הגיע בזמן, אבחן את התקלה במקרר תוך דקות ותיקן אותה במקצועיות רבה. המחיר היה הוגן לחלוטין.",
    rating: 5,
  },
  {
    name: "מיכל לוי",
    text: "הזמנתי תיקון למכונת הכביסה שלי. הצוות היה אדיב מאוד והסביר לי בדיוק מה הייתה הבעיה. ממליצה בחום!",
    rating: 5,
  },
  {
    name: "יוסי אברהם",
    text: "מקצוענים אמיתיים. תיקנו לי את התנור שכבר חשבתי לזרוק. חסכו לי אלפי שקלים על תנור חדש.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">מה הלקוחות אומרים</h2>
          <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" dir="rtl">
          {testimonials.map((t, i) => (
            <Card key={i} className="border-none shadow-md bg-white relative pt-8">
              <div className="absolute top-0 right-8 -translate-y-1/2 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white shadow-lg">
                <Quote className="h-6 w-6 fill-current" />
              </div>
              <CardContent className="space-y-4 text-right">
                <div className="flex justify-start gap-1">
                  {[...Array(t.rating)].map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="italic text-muted-foreground leading-relaxed">&quot;{t.text}&quot;</p>
                <div className="pt-4 border-t">
                  <h4 className="font-bold text-primary">{t.name}</h4>
                  <p className="text-xs text-muted-foreground">לקוח מרוצה</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
