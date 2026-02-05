import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ProFixUA | Сантехнік та електрик у Львові",
  description: "Терміновий виїзд сантехніка та електрика у Львові. Гарантія на роботи. Працюємо щодня 08:00-22:00. Телефонуйте +380664838936",
  keywords: [
    "сантехнік",
    "електрик",
    "Львів",
    "терміновий виклик",
    "ремонт труб",
    "електрика",
    "ProFixUA",
  ],
  openGraph: {
    title: "ProFixUA | Сантехнік та електрик у Львові",
    description: "Терміновий виїзд • Гарантія • Працюємо щодня",
    type: "website",
    locale: "uk_UA",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#1e40af",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('profix-theme');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
