'use client';

import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-right" dir="rtl">
      {/* Навигация */}
      <nav className="flex justify-between items-center px-12 py-6 border-b border-gray-100">
        <div className="flex items-center gap-2 text-[#0047ba] font-bold text-xl">
          <span>TechFix Express</span>
          <span role="img" aria-label="wrench">🔧</span>
        </div>
        <div className="text-[#0047ba] font-medium">
          נתניה והסביבה | 052-2395151
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-[#0047ba] text-center mb-12 underline decoration-blue-200 underline-offset-8">
          צור קשר
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Правая колонка: Форма (как в оригинале) */}
          <div className="bg-white p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-50 order-1 md:order-2">
            <h2 className="text-xl font-bold text-[#0047ba] mb-2 text-center">שלחו לנו הודעה</h2>
            <p className="text-gray-500 text-center mb-6 text-sm">מלאו את הפרטים ונחזור אליכם</p>
            
            <form action="https://formspree.io/f/demslava@gmail.com" method="POST" className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold mb-1 text-gray-400">שם</label>
                  <input type="text" name="name" placeholder="מה שמך?" className="w-full bg-[#f8faff] border border-blue-100 p-3 rounded-lg text-sm" required />
                </div>
                <div>
                  <label className="block text-xs font-bold mb-1 text-gray-400">טלפון</label>
                  <input type="tel" name="phone" placeholder="050-0000000" className="w-full bg-[#f8faff] border border-blue-100 p-3 rounded-lg text-sm" required />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold mb-1 text-gray-400">בחר מכשיר</label>
                  <select name="device" className="w-full bg-[#f8faff] border border-blue-100 p-3 rounded-lg text-sm appearance-none">
                    <option>סוג המכשיר</option>
                    <option>מכונת כביסה</option>
                    <option>מדיח כלים</option>
                    <option>מייבש</option>
                    <option>תנור</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold mb-1 text-gray-400">דגם (אופציונלי)</label>
                  <input type="text" name="model" placeholder="Samsung RT45" className="w-full bg-[#f8faff] border border-blue-100 p-3 rounded-lg text-sm" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold mb-1 text-gray-400">תיאור התקלה</label>
                <textarea name="message" placeholder="תארו את הבעיה במילים פשוטות" className="w-full bg-[#f8faff] border border-blue-100 p-3 rounded-lg h-24 text-sm resize-none"></textarea>
              </div>

              <button type="submit" className="w-full bg-[#0047ba] text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 transition-colors">
                שלח בקשה
              </button>
            </form>
          </div>

          {/* Левая колонка: Твоё фото и контакты */}
          <div className="space-y-8 order-2 md:order-1">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white inline-block w-full">
              <img 
                src="/images/photo1.png" 
                alt="סלבה" 
                className="w-full h-auto object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/500x600?text=Photo+Not+Found';
                }}
              />
            </div>

            <div className="space-y-4 pr-4">
              <h3 className="text-xl font-bold text-[#0047ba] mb-4">פרטי התקשרות</h3>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-[#0047ba]">📞</div>
                <div>
                  <div className="text-xs text-gray-400 font-bold">טלפון</div>
                  <div className="font-bold">052-2395151</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-[#0047ba]">✉️</div>
                <div>
                  <div className="text-xs text-gray-400 font-bold">דוא"ל</div>
                  <div className="font-bold">demslava@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-[#0047ba]">📍</div>
                <div>
                  <div className="text-xs text-gray-400 font-bold">כתובת</div>
                  <div className="font-bold">נתניה</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-[#0047ba] text-white text-center py-6 mt-12 text-sm">
        כל הזכויות שמורות. TechFix Express 2026 ©
      </footer>
    </div>
  );
}