
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
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-muted" dir="rtl">
      <div className="mb-6 text-right">
        <h3 className="text-2xl font-bold text-primary mb-2">פרטי הקריאה</h3>
        <p className="text-muted-foreground">מלאו את הפרטים ונחזור אליכם עם הצעת מחיר</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 text-right">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>שם מלא</FormLabel>
                <FormControl>
                  <Input placeholder="ישראל ישראלי" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>טלפון ליצירת קשר</FormLabel>
                  <FormControl>
                    <Input placeholder="050-0000000" {...field} />
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
                  <FormLabel>סוג המכשיר</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
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
                <FormLabel>דגם (אם ידוע)</FormLabel>
                <FormControl>
                  <Input placeholder="למשל: Samsung RT45" {...field} />
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
                <FormLabel>תיאור התקלה</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="תאר את הבעיה (למשל: לא מקרר, עושה רעש, לא נדלק...)" 
                    className="min-h-[100px]" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold h-12 text-lg">
            שלח בקשה לתיקון
          </Button>
        </form>
      </Form>
    </div>
  );
}
