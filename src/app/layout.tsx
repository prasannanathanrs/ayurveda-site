import type { Metadata } from "next";
import { Cinzel, Lora } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shri Guha Khataksham Ayurvedasram",
  description: "Authentic Panchakarma treatments in a serene setting. Experience ancient Sanatana healing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cinzel.variable} ${lora.variable} min-h-screen flex flex-col antialiased selection:bg-saffron selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
