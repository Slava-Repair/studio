import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TechFix Express | תיקון מוצרי חשמל ביתיים',
  description: 'שירות תיקונים מקצועי, מהיר ואמין לכל מוצרי החשמל הביתיים: מקררים, מכונות כביסה, תנורים ומדיחים.',
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
