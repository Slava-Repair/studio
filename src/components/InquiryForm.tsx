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
import { MessageCircle, Send } from "lucide-react";

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

  const formatMessage = (values: z.infer<typeof formSchema>) => {
    return `הודעה חדשה מ-TechFix Express:
👤 שם: ${values.fullName}
📞 טלפון: ${values.phone}
🛠️ מכשיר: ${values.applianceType}
📋 דגם: ${values.model || 'לא צוין'}
💬 תיאור: ${values.symptoms}`;
  };

  function onWhatsAppSubmit(values: z.infer<typeof formSchema>) {
    const whatsappNumber = "972522395151";
    const message = formatMessage(values);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    toast({
      title: "פנייתך נשלחה ל-WhatsApp!",
      description: "נחזור אליך בהקדם.",
    });
    form.reset();
  }

  function onTelegramSubmit() {
    form.handleSubmit((values) => {
      const message = formatMessage(values);
      // Telegram share URL is the best way to pre-fill content
      const telegramUrl = `https://t.me/share/url?url=https://t.me/TechFix_Express&text=${encodeURIComponent(message)}`;
      window.open(telegramUrl, "_blank");
      toast({
        title: "פנייתך נשלחה ל-Telegram!",
        description: "נחזור אליך בהקדם.",
      });
      form.reset();
    })();
  }

  return (
    <div className="p-6 lg:p-8 h-full flex flex-col justify-center" dir="rtl">
      <div className="mb-6 text-center">
        <h3 className="text-xl md:text-2xl font-black text-primary border-b-4 border-primary/20 pb-2 inline-block px-10">פרטי הקריאה</h3>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onWhatsAppSubmit)} className="space-y-3 text-right">
          <div className="grid grid-cols-2 gap-3">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormControl>
                    <Input 
                      placeholder="שם מלא" 
                      className="bg-primary/[0.02] border-primary/20 h-11 rounded-xl focus-visible:ring-primary text-right text-xs placeholder:text-muted-foreground/50 shadow-sm" 
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
                      className="bg-primary/[0.02] border-primary/20 h-11 rounded-xl focus-visible:ring-primary text-right text-xs placeholder:text-muted-foreground/50 shadow-sm" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage className="text-[9px]" />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <FormField
              control={form.control}
              name="applianceType"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-primary/[0.02] border-primary/20 h-11 rounded-xl focus:ring-primary text-right flex-row-reverse text-xs shadow-sm">
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
                      className="bg-primary/[0.02] border-primary/20 h-11 rounded-xl focus-visible:ring-primary text-right text-xs placeholder:text-muted-foreground/50 shadow-sm" 
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
                    className="bg-primary/[0.02] border-primary/20 min-h-[70px] rounded-xl focus-visible:ring-primary text-right text-xs resize-none placeholder:text-muted-foreground/50 shadow-sm" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage className="text-[9px]" />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 gap-2 mt-2">
            <Button 
              type="submit" 
              className="w-full bg-[#25D366] text-white hover:bg-[#128C7E] font-black h-11 text-xs rounded-xl shadow-[0_10px_20px_rgba(37,211,102,0.2)] transition-all active:scale-95 flex items-center justify-center gap-2 border-none"
            >
              <MessageCircle className="h-4 w-4" />
              <span>שלח ב-WhatsApp</span>
            </Button>

            <Button 
              type="button"
              onClick={onTelegramSubmit}
              className="w-full bg-[#0088cc] text-white hover:bg-[#0077b5] font-black h-11 text-xs rounded-xl shadow-[0_10px_20px_rgba(0,136,204,0.2)] transition-all active:scale-95 flex items-center justify-center gap-2 border-none"
            >
              <Send className="h-4 w-4" />
              <span>שלח ב-Telegram</span>
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
