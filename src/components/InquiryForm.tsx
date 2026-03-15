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
import { MessageCircle, Send, Loader2 } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "נא להזין שם" }),
  phone: z.string().min(9, { message: "נא להזין מספר טלפון תקין" }),
  applianceType: z.string({ required_error: "נא לבחור סוג מכשיר" }),
  model: z.string().optional(),
  symptoms: z.string().min(5, { message: "נא לתאר את הבעיה" }),
});

export default function InquiryForm() {
  const { toast } = useToast();
  const [isSending, setIsSending] = useState(false);
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
      title: "נשלח ל-WhatsApp!",
      description: "נחזור אליך בהקדם.",
    });
    form.reset();
  }

  async function onTelegramDirectSubmit() {
    const isValid = await form.trigger();
    if (!isValid) return;

    setIsSending(true);
    const values = form.getValues();
    const botToken = "8640195105:AAFYMoIjic3_Z0AZFql6r-Rn7K9m2gGcMpI";
    const chatId = "8138652285";
    const message = formatMessage(values);

    try {
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "תודה!",
          description: "ההודעה נשלחה בהצלחה.",
        });
        form.reset();
      } else {
        console.error("Telegram API Error Response:", result);
        toast({
          variant: "destructive",
          title: "שגיאת שרת",
          description: result.description || "לא הצלחנו לשלוח את ההודעה. נסה WhatsApp.",
        });
      }
    } catch (error) {
      console.error("Telegram Fetch Error:", error);
      toast({
        variant: "destructive",
        title: "שגיאה בשליחה",
        description: "לא הצלחנו להתחבר לשרת. נא לנסות בווטסאפ.",
      });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <div className="p-4 lg:p-6 h-full flex flex-col justify-center" dir="rtl">
      <div className="mb-4 text-center">
        <h3 className="text-xl md:text-2xl font-black text-primary border-b-4 border-primary/20 pb-2 inline-block px-10">פרטי הקריאה</h3>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onWhatsAppSubmit)} className="space-y-3 text-right">
          <div className="grid grid-cols-2 gap-2">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem className="space-y-0.5">
                  <FormControl>
                    <Input 
                      placeholder="שם מלא" 
                      className="bg-primary/[0.02] border-primary/20 h-9 rounded-lg focus-visible:ring-primary text-right text-[11px] placeholder:text-muted-foreground/50 shadow-sm" 
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
                <FormItem className="space-y-0.5">
                  <FormControl>
                    <Input 
                      placeholder="מספר טלפון" 
                      type="tel"
                      className="bg-primary/[0.02] border-primary/20 h-9 rounded-lg focus-visible:ring-primary text-right text-[11px] placeholder:text-muted-foreground/50 shadow-sm" 
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
                <FormItem className="space-y-0.5">
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-primary/[0.02] border-primary/20 h-9 rounded-lg focus:ring-primary text-right flex-row-reverse text-[11px] shadow-sm">
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
                <FormItem className="space-y-0.5">
                  <FormControl>
                    <Input 
                      placeholder="דגם (אם ידוע)" 
                      className="bg-primary/[0.02] border-primary/20 h-9 rounded-lg focus-visible:ring-primary text-right text-[11px] placeholder:text-muted-foreground/50 shadow-sm" 
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
              <FormItem className="space-y-0.5">
                <FormControl>
                  <Textarea 
                    placeholder="תאור קצר של התקלה..." 
                    className="bg-primary/[0.02] border-primary/20 min-h-[60px] rounded-lg focus-visible:ring-primary text-right text-[11px] resize-none placeholder:text-muted-foreground/50 shadow-sm" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage className="text-[9px]" />
              </FormItem>
            )}
          />

          <div className="flex flex-col gap-4 mt-4">
            <Button 
              type="button"
              onClick={onTelegramDirectSubmit}
              disabled={isSending}
              className="w-full bg-[#0088cc] text-white hover:bg-[#0077b5] font-black h-12 text-sm rounded-lg shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 border-none"
            >
              {isSending ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
              <span>שלח ב-Telegram</span>
            </Button>

            <Button 
              type="submit" 
              className="w-full bg-[#25D366] text-white hover:bg-[#128C7E] font-black h-12 text-sm rounded-lg shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 border-none"
            >
              <MessageCircle className="h-4 w-4" />
              <span>שלח ב-WhatsApp</span>
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
