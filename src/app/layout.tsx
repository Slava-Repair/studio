import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'סלבה — תיקון מוצרי חשמל ביתיים בנתניה והסביבה',
  description: 'תיקון מקצועי ומהיר של מכונות כביסה, מדיחי כלים ומייבשים בנתניה והסביבה. שירות אמין עם אחריות על כל תיקון.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased scroll-smooth">{children}</body>
    </html>
  );
}
