import type { Metadata } from "next";
import { Inter, Gluten } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import { CursorBlob } from "@/components/cursor-blob";

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
         <a
           href="#main-content"
           className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 z-50 bg-background p-2 text-primary"
         >
           Skip to main content
         </a>
         <ThemeProvider>
           <CursorBlob />
           {children}
         </ThemeProvider>
       </body>
    </html>
  );
}
