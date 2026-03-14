'use client';

import React from 'react';

export default function App() {
  const handleSubmit = (e: React.FormEvent) => {
    // В Next.js формы обрабатываются программно или через action
  };

  return (
    <div className="min-h-screen bg-[#f0f4f8] text-[#1d1d1f] font-sans" dir="rtl">
      {/* Навигация */}
      <nav className="bg-white px-[5%] py-4 flex justify-between items-center shadow-sm sticky top-0 z-50">
        <div className="font-bold text-2xl text-[#0047ba]">TechFix Express 🔧</div>
        <div className="hidden md:block text-sm">נתניה והסביבה | 052-2395151</div>
      </nav>

      {/* Главный блок */}
      <section className="max-w-7xl mx-auto px-[5%] py-12 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold text-[#0047ba] leading-tight">
            תיקון מוצרי חשמל בנתניה
          </h1>
          <p className="text-lg opacity-90">
            שירות מהיר, אמין ומקצועי עד הבית. מומחה לתיקון כביסה, מדיחים, ותנורים עם אחריות מלאה.
          </p>
          <div className="pt-6">
            <img 
              src="/images/photo1.png" 
              alt="סלבה" 
              className="w-full rounded-3xl shadow-2xl border-4 border-white"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x400?text=Slava+Photo';
              }}
            />
          </div>
        </div>

        {/* Форма */}
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
          <h2 className="text-2xl font-bold text-center mb-6">שלחו לנו הודעה</h2>
          <form action="https://formspree.io/f/demslava@gmail.com" method="POST" className="space-y-4">
            <input 
              type="text" 
              name="name" 
              placeholder="מה שמך?" 
              className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0047ba] outline-none"
              required 
            />
            <input 
              type="tel" 
              name="phone" 
              placeholder="טלפון" 
              className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0047ba] outline-none"
              required 
            />
            <select name="device" className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0047ba] outline-none">
              <option>בחר מכшיר</option>
              <option>מכונת כביסה</option>
              <option>מדיח כלים</option>
              <option>מייבש</option>
              <option>אחר</option>
            </select>
            <textarea 
              name="message" 
              placeholder="תארו את הבעיה בקצרה" 
              className="w-full p-4 border border-gray-200 rounded-xl h-32 focus:ring-2 focus:ring-[#0047ba] outline-none"
            ></textarea>
            <button 
              type="submit" 
              className="w-full bg-[#0047ba] text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all transform hover:scale-[1.02]"
            >
              שלח בקשה
            </button>
          </form>
        </div>
      </section>

      {/* Примеры работ */}
      <section className="bg-white py-20 px-[5%]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">דוגמאות לעבודות</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Работа 1 */}
            <div className="group cursor-pointer">
              <div className="h-64 bg-gray-100 rounded-2xl overflow-hidden mb-4">
                <img 
                  src="/images/work1.jpg" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x250?text=Repair+Card';
                  }}
                  alt="Repair"
                />
              </div>
              <h3 className="text-xl font-bold">תיקון כרטיס אלקטרוני</h3>
              <p className="opacity-70">שיקום מקצועי של לוח אם למכונת כביסה Bosch.</p>
            </div>

            {/* Работа 2 */}
            <div className="group cursor-pointer">
              <div className="h-64 bg-gray-100 rounded-2xl overflow-hidden mb-4">
                <img 
                  src="/images/work2.jpg" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x250?text=Bearing+Replacement';
                  }}
                  alt="Repair"
                />
              </div>
              <h3 className="text-xl font-bold">החלפת מיסבים</h3>
              <p className="opacity-70">תיקון שקט ואיכותי כולל החלפת אטמים מקוריים.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-[#0047ba] text-white py-10 text-center text-sm">
        © TechFix Express 2026. כל הזכויות שמורות. נתניה והסביבה.
      </footer>
    </div>
  );
}