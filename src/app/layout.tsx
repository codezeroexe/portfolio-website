import type { Metadata } from "next";
import { Inter, Gluten } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const gluten = Gluten({
  variable: "--font-gluten",
  subsets: ["latin"],
  weight: "800",
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
    <html lang="en" className={`${inter.variable} ${gluten.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
