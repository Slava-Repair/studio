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
    const message = `שלום, שלחתי בקשה לתיקון מהאתר:
*שם:* ${values.fullName}
*טלפון:* ${values.phone}
*מכשיר:* ${values.applianceType}
*דגם:* ${values.model || 'לא צוין'}
*תיאור התקלה:* ${values.symptoms}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    toast({
      title: "פנייתך נשלחה!",
      description: "הודעת וואטסאפ נשלחה ונחזור אליך בהקדם.",
    });
    form.reset();
  }

  return (
    <div className="bg-white p-5 rounded-2xl shadow-xl border border-primary/20" dir="rtl">
      <div className="mb-4 text-center">
        <h3 className="text-xl font-bold text-primary mb-1">שלחו לנו הודעה</h3>
        <p className="text-xs text-muted-foreground">מלאו את הפרטים ונחזור אליכם</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 text-right">
          
          <div className="grid grid-cols-2 gap-3">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem className="text-right">
                  <FormLabel className="text-primary font-bold text-xs">שם</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="מה שמך" 
                      className="bg-muted/30 border-primary h-9 rounded-lg focus-visible:ring-primary text-right" 
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
                      placeholder="050-0000000" 
                      className="bg-muted/30 border-primary h-9 rounded-lg focus-visible:ring-primary text-right" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage className="text-[10px]" />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <FormField
              control={form.control}
              name="applianceType"
              render={({ field }) => (
                <FormItem className="text-right">
                  <FormLabel className="text-primary font-bold text-xs">בחר מכשיר</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-muted/30 border-primary h-9 rounded-lg focus:ring-primary text-right flex-row-reverse">
                        <SelectValue placeholder="סוג המכשיר" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent dir="rtl">
                      <SelectItem value="מקרר">מקרר</SelectItem>
                      <SelectItem value="מכונת כביסה">מכונת כביסה</SelectItem>
                      <SelectItem value="מכונת ייבוש">מכונת ייבוש</SelectItem>
                      <SelectItem value="תנור">תנור</SelectItem>
                      <SelectItem value="מדיח כלים">מדיח כלים</SelectItem>
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
                      className="bg-muted/30 border-primary h-9 rounded-lg focus-visible:ring-primary text-right" 
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
                    className="bg-muted/30 border-primary min-h-[60px] rounded-lg focus-visible:ring-primary text-right text-sm" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage className="text-[10px]" />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90 font-bold h-10 text-base rounded-lg shadow-md mt-2">
            שלח בקשה
          </Button>
        </form>
      </Form>
    </div>
  );
}