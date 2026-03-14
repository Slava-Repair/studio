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
    
    // Формируем детальное сообщение со всеми полями формы
    const text = `שלום סלבה, הודעה חדשה מהאתר:
👤 שם: ${formData.name}
📞 טלפון: ${formData.phone}
🛠️ מכשיר: ${formData.device || 'לא נבחר'}
📋 דגם: ${formData.model || 'לא צוין'}
💬 תיאור התקלה: ${formData.message || 'אין פירוט'}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.location.href = url;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="h-screen overflow-hidden bg-white font-sans text-right flex flex-col" dir="rtl">
      {/* Навигация */}
      <nav className="flex justify-between items-center px-8 py-3 border-b border-blue-100 flex-none bg-white z-10">
        <div className="flex items-center gap-2 text-[#0047ba] font-bold text-lg">
          <span>TechFix Express</span>
          <span role="img" aria-label="wrench">🔧</span>
        </div>
        <div className="text-[#0047ba] font-bold text-sm">
          נתניה והסביבה | 052-2395151
        </div>
      </nav>

      <main className="flex-1 max-w-6xl mx-auto w-full px-6 flex flex-col justify-center gap-6">
        <h1 className="text-3xl font-bold text-[#0047ba] text-center underline decoration-blue-200 underline-offset-4 mb-2">
          צור קשר
        </h1>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Правая часть: Форма */}
          <div className="bg-white p-6 rounded-xl shadow-[0_4px_25px_rgba(0,71,186,0.12)] border border-blue-200 order-1 md:order-2">
            <h2 className="text-xl font-bold text-[#0047ba] mb-4 text-center">שלחו לנו הודעה</h2>
            
            <form onSubmit={handleWhatsAppRedirect} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="text" 
                  name="name"
                  placeholder="שם" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[#f8faff] border border-blue-100 p-3 rounded-lg text-sm outline-none focus:border-blue-400 focus:bg-white transition-all" 
                  required 
                />
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="טלפון" 
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-[#f8faff] border border-blue-100 p-3 rounded-lg text-sm outline-none focus:border-blue-400 focus:bg-white transition-all" 
                  required 
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <select 
                    name="device"
                    value={formData.device}
                    onChange={handleChange}
                    className="w-full bg-[#f8faff] border border-blue-100 p-3 rounded-lg text-sm outline-none focus:border-blue-400 focus:bg-white transition-all appearance-none cursor-pointer"
                    required
                  >
                    <option value="" disabled>בחר מכשיר</option>
                    <option value="מכונת כביסה">מכונת כביסה</option>
                    <option value="מדיח כלים">מדיח כלים</option>
                    <option value="מייבש">מייבש כביסה</option>
                    <option value="תנור">תנור אפייה</option>
                    <option value="אחר">אחר</option>
                  </select>
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-[#0047ba]">
                    ▼
                  </div>
                </div>
                <input 
                  type="text" 
                  name="model"
                  placeholder="דגם המכשיר" 
                  value={formData.model}
                  onChange={handleChange}
                  className="w-full bg-[#f8faff] border border-blue-100 p-3 rounded-lg text-sm outline-none focus:border-blue-400 focus:bg-white transition-all" 
                />
              </div>

              <textarea 
                name="message"
                placeholder="תארו את הבעיה..." 
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-[#f8faff] border border-blue-100 p-3 rounded-lg h-24 text-sm resize-none outline-none focus:border-blue-400 focus:bg-white transition-all"
              ></textarea>

              <button type="submit" className="w-full bg-[#0047ba] text-white font-bold py-4 rounded-xl shadow-lg hover:bg-blue-700 transition-all active:scale-95 text-base">
                שלח בקשה ב-WhatsApp 💬
              </button>
            </form>
          </div>

          {/* Левая часть: Фото и широкие Контакты */}
          <div className="flex flex-col gap-6 order-2 md:order-1 items-center">
            {/* Фото в центре блока, без лишних полей */}
            <div className="w-full max-w-[400px] rounded-xl overflow-hidden shadow-[0_4px_25px_rgba(0,71,186,0.12)] border border-blue-200 bg-white">
              <img 
                src="/images/photo1.png" 
                alt="סלבה" 
                className="w-full h-auto block object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x500?text=Slava';
                }}
              />
            </div>

            {/* Широкий блок контактов */}
            <div className="w-full bg-white p-5 rounded-xl shadow-[0_4px_25px_rgba(0,71,186,0.12)] border border-blue-200 flex flex-col space-y-3">
              <div className="flex justify-between items-center border-b border-blue-50 pb-2 gap-4">
                <span className="text-[#0047ba] font-bold whitespace-nowrap">📞 טלפון:</span>
                <span className="font-bold text-gray-800 whitespace-nowrap">052-2395151</span>
              </div>
              <div className="flex justify-between items-center border-b border-blue-50 pb-2 gap-4">
                <span className="text-[#0047ba] font-bold whitespace-nowrap">✉️ אימייל:</span>
                <span className="font-bold text-gray-800 whitespace-nowrap">demslava@gmail.com</span>
              </div>
              <div className="flex justify-between items-center gap-4">
                <span className="text-[#0047ba] font-bold whitespace-nowrap">📍 מיקום:</span>
                <span className="font-bold text-gray-800 whitespace-nowrap">נתניה והסביבה</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-[#0047ba] text-white text-center py-4 flex-none text-sm">
        כל הזכויות שמורות. TechFix Express 2026 ©
      </footer>
    </div>
  );
}