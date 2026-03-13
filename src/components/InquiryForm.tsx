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
    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-muted" dir="rtl">
      <div className="mb-8 text-right">
        <h3 className="text-2xl font-bold text-primary mb-2">שלחו לנו הודעה</h3>
        <p className="text-muted-foreground">מלאו את הפרטים ונחזור אליכם</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 text-right">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary font-bold">שם</FormLabel>
                <FormControl>
                  <Input placeholder="ישראל ישראלי" className="bg-muted/30 border-none h-12 rounded-xl" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary font-bold">טלפון</FormLabel>
                  <FormControl>
                    <Input placeholder="050-0000000" className="bg-muted/30 border-none h-12 rounded-xl" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="applianceType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary font-bold">בחר מכשיר</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-muted/30 border-none h-12 rounded-xl">
                        <SelectValue placeholder="סוג המכשיר" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="מקרר">מקרר</SelectItem>
                      <SelectItem value="מכונת כביסה">מכונת כביסה</SelectItem>
                      <SelectItem value="מכונת ייבוש">מכונת ייבוש</SelectItem>
                      <SelectItem value="תנור">תנור</SelectItem>
                      <SelectItem value="מדיח כלים">מדיח כלים</SelectItem>
                      <SelectItem value="אחר">אחר</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="model"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary font-bold">דגם (אופציונלי)</FormLabel>
                <FormControl>
                  <Input placeholder="למשל: Samsung RT45" className="bg-muted/30 border-none h-12 rounded-xl" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="symptoms"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary font-bold">תיאור התקלה</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="תאר את הבעיה במילים פשוטות" 
                    className="bg-muted/30 border-none min-h-[100px] rounded-xl" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90 font-bold h-14 text-xl rounded-xl transition-all shadow-md mt-4">
            שלח בקשה
          </Button>
        </form>
      </Form>
    </div>
  );
}