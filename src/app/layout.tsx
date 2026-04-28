import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const melodrama = localFont({
  src: [
    {
      path: "../fonts/Melodrama-Variable.ttf",
      weight: "200 700",
      style: "normal",
    },
  ],
  variable: "--font-melodrama",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sreehari | Portfolio",
  description: "Full-Stack Developer & Designer building modern web experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${melodrama.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
