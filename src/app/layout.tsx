import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import MiniCartDrawer from "@/components/MiniCartDrawer";
import { Toaster } from "sonner";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Priyonconcept Store",
  description: "Native fashion, accessories, and more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <MiniCartDrawer/>
        <Toaster
          position="top-right"
          richColors
          toastOptions={{
            style: {borderLeft: "3px solid var(--color-burgundy)", fontFamily: "var(--font-handwriting)", borderRadius: "0.5rem" },
          }}
        />
      </body>
    </html>
  );
}
