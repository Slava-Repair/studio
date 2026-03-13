import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-body selection:bg-primary selection:text-white">
      <Navigation />
      <div className="pt-14">
        <Contact />
      </div>
      <footer className="bg-primary py-4 text-white text-center border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-sm">© {new Date().getFullYear()} TechFix Express. כל הזכויות שמורות.</p>
        </div>
      </footer>
      <Toaster />
    </main>
  );
}
