'use client';

import React from 'react';

export default function App() {
  const whatsappNumber = "972522395151";
  const message = "שלום סלבה, אני מעוניין בתיקון מכשיר חשמלי.";

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.location.href = url;
  };

  return (
    <div className="h-screen overflow-hidden bg-white font-sans text-right flex flex-col" dir="rtl">
      {/* Навигация */}
      <nav className="flex justify-between items-center px-8 py-4 border-b border-blue-100 flex-none">
        <div className="flex items-center gap-2 text-[#0047ba] font-bold text-lg">
          <span>TechFix Express</span>
          <span role="img" aria-label="wrench">🔧</span>
        </div>
        <div className="text-[#0047ba] font-bold text-sm">
          נתניה והסביבה | 052-2395151
        </div>
      </nav>

      <main className="flex-1 max-w-6xl mx-auto w-full px-6 flex flex-col justify-center gap-6">
        <h1 className="text-3xl font-bold text-[#0047ba] text-center underline decoration-blue-200 underline-offset-4">
          צור קשר
        </h1>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Форма в рамке */}
          <div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_rgba(0,71,186,0.1)] border border-blue-200 order-1 md:order-2">
            <h2 className="text-lg font-bold text-[#0047ba] mb-4 text-center">שלחו לנו הודעה</h2>
            
            <form onSubmit={handleWhatsAppRedirect} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <input type="text" placeholder="שם" className="w-full bg-[#f8faff] border border-blue-100 p-2 rounded-lg text-sm outline-none focus:border-blue-400" required />
                <input type="tel" placeholder="טלפון" className="w-full bg-[#f8faff] border border-blue-100 p-2 rounded-lg text-sm outline-none focus:border-blue-400" required />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <select className="w-full bg-[#f8faff] border border-blue-100 p-2 rounded-lg text-sm outline-none focus:border-blue-400">
                  <option>מכונת כביסה</option>
                  <option>מדיח כלים</option>
                  <option>מייבש</option>
                  <option>תנור</option>
                </select>
                <input type="text" placeholder="דגם" className="w-full bg-[#f8faff] border border-blue-100 p-2 rounded-lg text-sm outline-none focus:border-blue-400" />
              </div>

              <textarea placeholder="תיאור התקלה" className="w-full bg-[#f8faff] border border-blue-100 p-2 rounded-lg h-20 text-sm resize-none outline-none focus:border-blue-400"></textarea>

              <button type="submit" className="w-full bg-[#0047ba] text-white font-bold py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all active:scale-95">
                שלח בקשה ב-WhatsApp
              </button>
            </form>
          </div>

          {/* Фото и контакты в рамке */}
          <div className="space-y-6 order-2 md:order-1">
            <div className="rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,71,186,0.1)] border border-blue-200 bg-white p-2">
              <img 
                src="/images/photo1.png" 
                alt="סלבה" 
                className="w-full h-64 object-cover rounded-lg"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x300?text=Slava';
                }}
              />
            </div>

            <div className="bg-white p-4 rounded-xl shadow-[0_4px_15px_rgba(0,71,186,0.05)] border border-blue-100 grid grid-cols-2 gap-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-[#0047ba]">📞</span>
                <span className="font-bold">052-2395151</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#0047ba]">📍</span>
                <span className="font-bold">נתניה</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-[#0047ba] text-white text-center py-3 flex-none text-xs">
        כל הזכויות שמורות. TechFix Express 2026 ©
      </footer>
    </div>
  );
}