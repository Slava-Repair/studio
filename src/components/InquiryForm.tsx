"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle } from "lucide-react";

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
    <div className="bg-white p-4 lg:p-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-primary/5 h-full flex flex-col justify-center min-h-0" dir="rtl">
      <div className="mb-3 text-center">
        <h3 className="text-lg font-black text-primary border-b border-primary/10 pb-2 inline-block px-4">פרטי הקריאה</h3>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 text-right overflow-y-auto pr-1">
          <div className="grid grid-cols-2 gap-2">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormControl>
                    <Input 
                      placeholder="מה שמך" 
                      className="bg-primary/[0.02] border-primary/20 h-10 rounded-lg focus-visible:ring-primary text-right text-xs placeholder:text-muted-foreground/60" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage className="text-[9px]" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormControl>
                    <Input 
                      placeholder="מספר טלפון" 
                      type="tel"
                      className="bg-primary/[0.02] border-primary/20 h-10 rounded-lg focus-visible:ring-primary text-right text-xs placeholder:text-muted-foreground/60" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage className="text-[9px]" />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <FormField
              control={form.control}
              name="applianceType"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-primary/[0.02] border-primary/20 h-10 rounded-lg focus:ring-primary text-right flex-row-reverse text-xs">
                        <SelectValue placeholder="סוג המכשיר" />
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
                  <FormMessage className="text-[9px]" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="model"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormControl>
                    <Input 
                      placeholder="דגם (אם ידוע)" 
                      className="bg-primary/[0.02] border-primary/20 h-10 rounded-lg focus-visible:ring-primary text-right text-xs placeholder:text-muted-foreground/60" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage className="text-[9px]" />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="symptoms"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormControl>
                  <Textarea 
                    placeholder="תאור קצר של התקלה..." 
                    className="bg-primary/[0.02] border-primary/20 min-h-[60px] lg:min-h-[80px] rounded-lg focus-visible:ring-primary text-right text-xs resize-none placeholder:text-muted-foreground/60" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage className="text-[9px]" />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full bg-[#25D366] text-white hover:bg-[#128C7E] font-bold h-12 text-sm rounded-lg shadow-lg mt-2 transition-all active:scale-95 flex items-center justify-center gap-2 border-none">
             <MessageCircle className="h-4 w-4" />
            <span>שלח ב-WhatsApp</span>
          </Button>
        </form>
      </Form>
    </div>
  );
}