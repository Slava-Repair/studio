import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <main className="h-screen bg-background font-body selection:bg-primary selection:text-white flex flex-col">
      <Navigation />
      <div className="flex-1 flex items-center justify-center p-2">
        <Contact />
      </div>
      <footer className="bg-primary py-2 text-white text-center border-t border-white/10 shrink-0">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-[10px] sm:text-xs">© {new Date().getFullYear()} TechFix Express. כל הזכויות שמורות.</p>
        </div>
      </footer>
      <Toaster />
    </main>
  );
}