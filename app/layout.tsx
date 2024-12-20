
import '@/css/tailwind.css';

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { ThemeProviders } from './theme-providers'
import SectionContainer from '@/components/SectionContainer';
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > */}
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
      {/* <link rel="alternate" type="application/rss+xml" href={`${basePath}/feed.xml`} /> */}
      <body className="bg-white pl-[calc(100vw-100%)] text-black antialiased dark:bg-gray-950 dark:text-white">
        <ThemeProviders>
          <SectionContainer>
            <Header />
              <main >{children}</main>
            <Footer />
          </SectionContainer>
        </ThemeProviders>
      </body>
    </html>
  );
}
