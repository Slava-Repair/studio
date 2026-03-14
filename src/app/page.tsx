'use client';

import React, { useState } from 'react';

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    device: 'מכונת כביסה',
    model: '',
    message: ''
  });

  const whatsappNumber = "972522395151";

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Формируем текст сообщения из данных формы
    const text = `שלום סלבה, הודעה חדשה מהאתר:
שם: ${formData.name}
טלפון: ${formData.phone}
מכשיר: ${formData.device}
דגם: ${formData.model}
תיאור: ${formData.message}`;

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
      <nav className="flex justify-between items-center px-8 py-3 border-b border-blue-100 flex-none">
        <div className="flex items-center gap-2 text-[#0047ba] font-bold text-lg">
          <span>TechFix Express</span>
          <span role="img" aria-label="wrench">🔧</span>
        </div>
        <div className="text-[#0047ba] font-bold text-sm">
          נתניה והסביבה | 052-2395151
        </div>
      </nav>

      <main className="flex-1 max-w-6xl mx-auto w-full px-6 flex flex-col justify-center gap-4">
        <h1 className="text-2xl font-bold text-[#0047ba] text-center underline decoration-blue-200 underline-offset-4 mb-2">
          צור קשר
        </h1>

        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* Форма в рамке */}
          <div className="bg-white p-5 rounded-xl shadow-[0_4px_20px_rgba(0,71,186,0.1)] border border-blue-200 order-1 md:order-2">
            <h2 className="text-lg font-bold text-[#0047ba] mb-3 text-center">שלחו לנו הודעה</h2>
            
            <form onSubmit={handleWhatsAppRedirect} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <input 
                  type="text" 
                  name="name"
                  placeholder="שם" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[#f8faff] border border-blue-100 p-2 rounded-lg text-sm outline-none focus:border-blue-400" 
                  required 
                />
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="טלפון" 
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-[#f8faff] border border-blue-100 p-2 rounded-lg text-sm outline-none focus:border-blue-400" 
                  required 
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <select 
                  name="device"
                  value={formData.device}
                  onChange={handleChange}
                  className="w-full bg-[#f8faff] border border-blue-100 p-2 rounded-lg text-sm outline-none focus:border-blue-400"
                >
                  <option>מכונת כביסה</option>
                  <option>מדיח כלים</option>
                  <option>מייבש</option>
                  <option>תנור</option>
                </select>
                <input 
                  type="text" 
                  name="model"
                  placeholder="דגם" 
                  value={formData.model}
                  onChange={handleChange}
                  className="w-full bg-[#f8faff] border border-blue-100 p-2 rounded-lg text-sm outline-none focus:border-blue-400" 
                />
              </div>

              <textarea 
                name="message"
                placeholder="תיאור התקלה" 
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-[#f8faff] border border-blue-100 p-2 rounded-lg h-20 text-sm resize-none outline-none focus:border-blue-400"
              ></textarea>

              <button type="submit" className="w-full bg-[#0047ba] text-white font-bold py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all active:scale-95 text-sm">
                שלח בקשה ב-WhatsApp
              </button>
            </form>
          </div>

          {/* Фото и контакты */}
          <div className="flex flex-row gap-4 order-2 md:order-1 items-stretch">
            {/* Фото - полное, без обрезки */}
            <div className="flex-1 rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,71,186,0.1)] border border-blue-200 bg-white p-1">
              <img 
                src="/images/photo1.png" 
                alt="סלבה" 
                className="w-full h-auto max-h-[300px] object-contain rounded-lg"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x500?text=Slava';
                }}
              />
            </div>

            {/* Блок контактов справа от фото */}
            <div className="w-48 bg-white p-4 rounded-xl shadow-[0_4px_20px_rgba(0,71,186,0.1)] border border-blue-200 flex flex-col justify-center space-y-4 text-xs">
              <div className="flex flex-col gap-1 border-b border-blue-50 pb-2">
                <span className="text-[#0047ba] font-bold">📞 טלפון:</span>
                <span className="font-medium">052-2395151</span>
              </div>
              <div className="flex flex-col gap-1 border-b border-blue-50 pb-2">
                <span className="text-[#0047ba] font-bold">✉️ אימייל:</span>
                <span className="font-medium break-all">demslava@gmail.com</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[#0047ba] font-bold">📍 מיקום:</span>
                <span className="font-medium">נתניה</span>
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