import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-body selection:bg-primary selection:text-white">
      <Navigation />
      <div className="pt-20">
        <Contact />
      </div>
      <footer className="bg-primary py-8 text-white text-center border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <p className="mb-2">© {new Date().getFullYear()} TechFix Express. כל הזכויות שמורות.</p>
          <p className="text-sm">שירות תיקונים מקצועי ואמין בנתניה והסביבה</p>
        </div>
      </footer>
      <Toaster />
    </main>
  );
}