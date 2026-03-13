
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkles, Loader2, Copy, Check } from "lucide-react";
import { aiContentGenerator, type AiContentGeneratorInput } from "@/ai/flows/ai-content-generator";
import { useToast } from "@/hooks/use-toast";

export default function AiTextTool() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const [form, setForm] = useState<AiContentGeneratorInput>({
    contentType: "slogan",
    context: "",
    keywords: [],
  });

  const generateContent = async () => {
    if (!form.context) {
      toast({ title: "Please provide a context for the AI", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      const output = await aiContentGenerator(form);
      setResult(output.generatedContent);
    } catch (error) {
      toast({ title: "Failed to generate content", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="ai-tool" className="py-24 bg-primary text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-secondary border border-secondary/30 mb-2">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-bold uppercase tracking-wider">AI Powered</span>
          </div>
          <h2 className="font-headline text-3xl md:text-4xl font-bold">מחולל תוכן שיווקי חכם</h2>
          <p className="text-primary-foreground/70 text-lg">
            השתמשו בבינה מלאכותית כדי ליצור סלוגנים, תיאורי מוצרים או טקסטים לאתר שלכם בשניות.
          </p>
        </div>

        <Card className="bg-white text-foreground shadow-2xl overflow-hidden" dir="rtl">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              הגדרות התוכן
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2 text-right">
              <Label>סוג התוכן</Label>
              <Select 
                value={form.contentType} 
                onValueChange={(val: any) => setForm({...form, contentType: val})}
              >
                <SelectTrigger>
                  <SelectValue placeholder="בחר סוג תוכן" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="slogan">סלוגן</SelectItem>
                  <SelectItem value="product description">תיאור שירות/מוצר</SelectItem>
                  <SelectItem value="about us paragraph">פסקה עלינו</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 text-right">
              <Label>הקשר (תאר את העסק או השירות שלך)</Label>
              <Textarea 
                placeholder="למשל: אנחנו עסק לתיקון מקררים עם דגש על מהירות ומקצועיות במרכז הארץ..."
                value={form.context}
                onChange={(e) => setForm({...form, context: e.target.value})}
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-2 text-right">
              <Label>מילות מפתח (אופציונלי, מופרדות בפסיקים)</Label>
              <Input 
                placeholder="אמין, זמין, מחיר הוגן, חלפים מקוריים"
                onChange={(e) => setForm({...form, keywords: e.target.value.split(",").map(k => k.trim())})}
              />
            </div>

            {result && (
              <div className="mt-8 p-6 bg-muted rounded-xl border-2 border-dashed border-primary/20 relative group">
                <p className="text-lg leading-relaxed whitespace-pre-wrap">{result}</p>
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={copyToClipboard}
                >
                  {copied ? <Check className="text-green-600" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            )}
          </CardContent>
          <CardFooter>
            <Button 
              className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 h-12 text-lg font-bold"
              onClick={generateContent}
              disabled={loading}
            >
              {loading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : "צור תוכן עכשיו"}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
