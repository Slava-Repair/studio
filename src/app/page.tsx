
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import Portfolio from "@/components/Portfolio";
import AiTextTool from "@/components/AiTextTool";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-body selection:bg-secondary selection:text-secondary-foreground">
      <Navigation />
      <Hero />
      <Services />
      <AboutUs />
      <Portfolio />
      <AiTextTool />
      <Testimonials />
      <Contact />
      <footer className="bg-primary/90 py-12 text-white/60 text-center border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <p className="mb-2">© {new Date().getFullYear()} TechFix Express. כל הזכויות שמורות.</p>
          <p className="text-sm">מעבדת תיקונים מוסמכת למוצרי חשמל ביתיים</p>
        </div>
      </footer>
      <Toaster />
    </main>
  );
}
