'use client';

import React, { useState } from 'react';

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    device: '',
    model: '',
    message: ''
  });

  const whatsappNumber = "972522395151";

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Формируем четкое сообщение для WhatsApp
    const text = `הודעה חדשה מ-TechFix Express:
---------------------------
👤 שם: ${formData.name}
📞 טלפון: ${formData.phone}
🛠️ מכשיר: ${formData.device || 'לא נבחר'}
📋 דגם: ${formData.model || 'לא צוין'}
💬 תיאור: ${formData.message || 'אין פירוט'}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.location.href = url;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    // Изменено: md:overflow-hidden для компьютеров, overflow-y-auto для мобилок
    <div className="min-h-screen md:h-screen md:overflow-hidden bg-[#fcfdfe] font-sans text-right flex flex-col" dir="rtl">
      {/* Навигация */}
      <nav className="flex justify-between items-center px-6 md:px-10 py-3 border-b border-blue-100 flex-none bg-white shadow-sm z-10">
        <div className="flex items-center gap-2 text-[#0047ba] font-extrabold text-lg md:text-xl">
          <span>TechFix Express</span>
          <span role="img" aria-label="wrench">🔧</span>
        </div>
        <div className="text-[#0047ba] font-bold text-[10px] md:text-sm bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
          נתניה והסביבה | 052-2395151
        </div>
      </nav>

      {/* Изменено: py-8 на мобильных, чтобы не прилипало к краям */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-8 md:py-0 flex flex-col justify-center gap-4">
        {/* Блок приветствия */}
        <div className="flex flex-col items-center gap-3 mb-2">
           <div className="bg-white px-8 py-2 rounded-xl shadow-[0_2px_15px_rgba(0,71,186,0.08)] border border-blue-100 animate-fade-in">
              <span className="text-[#0047ba] font-bold text-lg">אנחנו תמיד לשירותכם</span>
           </div>
           <h1 className="text-3xl font-black text-[#0047ba] tracking-tight">צור קשר</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          {/* Форма обращения */}
          <div className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgba(0,71,186,0.1)] border border-blue-200 flex flex-col justify-center">
            <h2 className="text-xl font-bold text-[#0047ba] mb-5 text-center">פרטי הקריאה</h2>
            
            <form onSubmit={handleWhatsAppRedirect} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  name="name"
                  placeholder="שם מלא" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[#f8faff] border border-blue-100 p-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all" 
                  required 
                />
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="מספר טלפון" 
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-[#f8faff] border border-blue-100 p-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all" 
                  required 
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <select 
                    name="device"
                    value={formData.device}
                    onChange={handleChange}
                    className="w-full bg-[#f8faff] border border-blue-100 p-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all appearance-none cursor-pointer"
                    required
                  >
                    <option value="" disabled>בחר מכשיר</option>
                    <option value="מכונת כביסה">מכונת כביסה</option>
                    <option value="מדיח כלים">מדיח כלים</option>
                    <option value="מייבש">מייבש כביסה</option>
                    <option value="תנור">תנור אפייה</option>
                    <option value="אחר">אחר</option>
                  </select>
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-[#0047ba] text-[10px]">
                    ▼
                  </div>
                </div>
                <input 
                  type="text" 
                  name="model"
                  placeholder="דגם (אם ידוע)" 
                  value={formData.model}
                  onChange={handleChange}
                  className="w-full bg-[#f8faff] border border-blue-100 p-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all" 
                />
              </div>

              <textarea 
                name="message"
                placeholder="תאור קצר של התקלה..." 
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-[#f8faff] border border-blue-100 p-3 rounded-xl h-24 text-sm resize-none outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all"
              ></textarea>

              <button type="submit" className="w-full bg-[#0047ba] text-white font-bold py-4 rounded-xl shadow-lg hover:bg-blue-700 transition-all active:scale-95 text-base flex items-center justify-center gap-2">
                <span>שלח בקשה ב-WhatsApp</span>
                <span className="text-xl">💬</span>
              </button>
            </form>
          </div>

          {/* Левая колонка: Фото и Данные */}
          <div className="flex flex-col sm:flex-row gap-4 items-stretch md:h-full">
            {/* Фото */}
            <div className="flex-1 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,71,186,0.1)] border border-blue-200 bg-white min-h-[300px]">
              <img 
                src="/images/photo1.png" 
                alt="סלבה" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x500?text=TechFix';
                }}
              />
            </div>

            {/* Блок данных */}
            <div className="w-full sm:w-[220px] bg-white p-5 rounded-2xl shadow-[0_8px_30px_rgba(0,71,186,0.1)] border border-blue-200 flex flex-col justify-around gap-2 text-[13px]">
              <div className="flex flex-col border-b border-blue-50 pb-2">
                <span className="text-[#0047ba] font-black mb-0.5 underline decoration-blue-100 underline-offset-2">טלפון:</span>
                <span className="font-bold text-gray-800 tracking-wide">052-2395151</span>
              </div>
              
              <div className="flex flex-col border-b border-blue-50 pb-2">
                <span className="text-[#0047ba] font-black mb-0.5 underline decoration-blue-100 underline-offset-2">אימייל:</span>
                <span className="font-bold text-gray-800 text-[11px] leading-tight">demslava@gmail.com</span>
              </div>
              
              <div className="flex flex-col border-b border-blue-50 pb-2">
                <span className="text-[#0047ba] font-black mb-0.5 underline decoration-blue-100 underline-offset-2">שעות פעילות:</span>
                <span className="font-bold text-gray-800">א' - ה': 08:00 - 17:00</span>
              </div>

              <div className="flex flex-col">
                <span className="text-[#0047ba] font-black mb-0.5 underline decoration-blue-100 underline-offset-2">מיקום:</span>
                <span className="font-bold text-gray-800">נתניה והסביבה</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-[#0047ba] text-white text-center py-3 flex-none text-[10px] md:text-xs font-medium tracking-wide">
        כל הזכויות שמורות. TechFix Express 2026 © | שירות מקצועי לבית
      </footer>
    </div>
  );
}