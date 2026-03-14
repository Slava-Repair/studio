
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "נא להזין שם" }),
  phone: z.string().min(9, { message: "נא להזין מספר טלפון תקין" }),
  applianceType: z.string({ required_error: "נא לבחור סוג מכשיר" }),
  model: z.string().optional(),
  symptoms: z.string().min(5, { message: "נא לתאר את הבעיה" }),
});

export default function InquiryForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      model: "",
      symptoms: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const whatsappNumber = "972522395151";
    const message = `הודעה חדשה מ-TechFix Express:
---------------------------
👤 שם: ${values.fullName}
📞 טלפון: ${values.phone}
🛠️ מכשיר: ${values.applianceType}
📋 דגם: ${values.model || 'לא צוין'}
💬 תיאור: ${values.symptoms}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    toast({
      title: "פנייתך נשלחה!",
      description: "נחזור אליך בהקדם.",
    });
    form.reset();
  }

  return (
    <div className="bg-white p-5 rounded-2xl shadow-[0_8px_30px_rgba(0,71,186,0.1)] border border-primary/20 h-full flex flex-col justify-center" dir="rtl">
      <div className="mb-4 text-center">
        <h3 className="text-xl font-bold text-primary mb-1">פרטי הקריאה</h3>
        <p className="text-[10px] text-muted-foreground uppercase tracking-widest">מילוי בקשה מהיר</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 text-right">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem className="text-right">
                  <FormLabel className="text-primary font-bold text-xs">מה שמך</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="שם מלא" 
                      className="bg-muted/10 border-primary/40 h-10 rounded-xl focus-visible:ring-primary text-right" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage className="text-[10px]" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="text-right">
                  <FormLabel className="text-primary font-bold text-xs">טלפון</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="052-0000000" 
                      type="tel"
                      className="bg-muted/10 border-primary/40 h-10 rounded-xl focus-visible:ring-primary text-right" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage className="text-[10px]" />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <FormField
              control={form.control}
              name="applianceType"
              render={({ field }) => (
                <FormItem className="text-right">
                  <FormLabel className="text-primary font-bold text-xs">סוג המכשיר</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-muted/10 border-primary/40 h-10 rounded-xl focus:ring-primary text-right flex-row-reverse">
                        <SelectValue placeholder="בחר מכשיר" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent dir="rtl">
                      <SelectItem value="מכונת כביסה">מכונת כביסה</SelectItem>
                      <SelectItem value="מכונת ייבוש">מכונת ייבוש</SelectItem>
                      <SelectItem value="מדיח כלים">מדיח כלים</SelectItem>
                      <SelectItem value="תנור">תנור</SelectItem>
                      <SelectItem value="מקרר">מקרר</SelectItem>
                      <SelectItem value="אחר">אחר</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-[10px]" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="model"
              render={({ field }) => (
                <FormItem className="text-right">
                  <FormLabel className="text-primary font-bold text-xs">דגם (אופציונלי)</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="דגם המכשיר" 
                      className="bg-muted/10 border-primary/40 h-10 rounded-xl focus-visible:ring-primary text-right" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage className="text-[10px]" />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="symptoms"
            render={({ field }) => (
              <FormItem className="text-right">
                <FormLabel className="text-primary font-bold text-xs">תיאור התקלה</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="תאר את הבעיה במילים פשוטות" 
                    className="bg-muted/10 border-primary/40 min-h-[70px] rounded-xl focus-visible:ring-primary text-right text-sm resize-none" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage className="text-[10px]" />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90 font-bold h-12 text-lg rounded-xl shadow-lg mt-2 transition-transform active:scale-95 flex items-center justify-center gap-2">
            <span>שלח בקשה</span>
            <span className="text-xl">💬</span>
          </Button>
        </form>
      </Form>
    </div>
  );
}
