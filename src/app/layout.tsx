import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  adjustFontFallback: false,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Portfolio | Développeur Web & Mobile",
  description: "Portfolio professionnel présentant mes projets et compétences en développement web et mobile.",
  keywords: ["développeur", "web", "frontend", "backend", "fullstack", "portfolio", "react", "nextjs"],
  authors: [{ name: "Développeur Moderne" }],
  creator: "Développeur Moderne",
  publisher: "Développeur Moderne",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://portfolio.exemple.com",
    title: "Portfolio | Développeur Web & Mobile",
    description: "Portfolio professionnel présentant mes projets et compétences en développement web et mobile.",
    siteName: "Portfolio Développeur",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Développeur Web & Mobile",
    description: "Portfolio professionnel présentant mes projets et compétences en développement web et mobile.",
    creator: "@developpeur",
  },
  icons: {
    icon: [
      { url: '/icon-16x16', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32x32', sizes: '32x32', type: 'image/png' },
      { url: '/icon-64x64', sizes: '64x64', type: 'image/png' }
    ],
    apple: [
      { url: '/icon-180x180', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { url: '/icon-192x192', sizes: '192x192', type: 'image/png', rel: 'apple-touch-icon' },
      { url: '/icon-512x512', sizes: '512x512', type: 'image/png', rel: 'apple-touch-startup-image' }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#3B82F6" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
