
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
  fullName: z.string().min(2, { message: "נא להזין שם מלא" }),
  phone: z.string().min(9, { message: "נא להזין מספר טלפון תקין" }),
  applianceType: z.string({ required_error: "נא לבחור סוג מכשיר" }),
  model: z.string().optional(),
  symptoms: z.string().min(5, { message: "נא לתאר את הבעיה בקצרה" }),
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
    console.log(values);
    toast({
      title: "פנייתך התקבלה!",
      description: "נציג יחזור אלייך בהקדם האפשרי.",
    });
    form.reset();
  }

  return (
    <div className="bg-white p-10 rounded-3xl shadow-2xl border border-muted/50" dir="rtl">
      <div className="mb-10 text-center">
        <h3 className="text-2xl font-bold text-primary mb-2">פרטי הקריאה</h3>
        <p className="text-muted-foreground">מלאו את הפרטים ונחזור אליכם עם הצעת מחיר</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 text-right">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary font-bold">שם מלא</FormLabel>
                <FormControl>
                  <Input placeholder="ישראל ישראלי" className="bg-muted/30 border-none h-12 rounded-xl" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary font-bold">טלפון ליצירת קשר</FormLabel>
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
                  <FormLabel className="text-primary font-bold">סוג המכשיר</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-muted/30 border-none h-12 rounded-xl">
                        <SelectValue placeholder="בחר מכשיר" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="refrigerator">מקרר</SelectItem>
                      <SelectItem value="washing-machine">מכונת כביסה</SelectItem>
                      <SelectItem value="oven">תנור</SelectItem>
                      <SelectItem value="dishwasher">מדיח כלים</SelectItem>
                      <SelectItem value="other">אחר</SelectItem>
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
                <FormLabel className="text-primary font-bold">דגם (אם ידוע)</FormLabel>
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
                    placeholder="תאר את הבעיה (למשל: לא מקרר, עושה רעש, לא נדלק...)" 
                    className="bg-muted/30 border-none min-h-[120px] rounded-xl" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold h-14 text-xl rounded-xl transition-all shadow-lg hover:shadow-xl mt-4">
            שלח בקשה לתיקון
          </Button>
        </form>
      </Form>
    </div>
  );
}
