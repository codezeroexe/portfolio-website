import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";

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
    <html lang="en" className={`${melodrama.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
