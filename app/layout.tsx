import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'react-notion-x/src/styles.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aimee Oke — AI for Academia",
  description: "Open-access GPTs, wikis, and apps that reduce admin burden in higher ed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{fontFamily:"system-ui, sans-serif", lineHeight:1.5}}>
  <header style={{borderBottom:"1px solid #eee"}}>
    <nav style={{maxWidth:960, margin:"0 auto", padding:"12px 16px", display:"flex", gap:16}}>
      <a href="/" style={{fontWeight:600}}>Aimee Oke AI</a>
      <a href="/about">About</a>
      <a href="/resources">Resources</a>
      <a href="/contact">Contact</a>
    </nav>
  </header>
  <main style={{maxWidth:960, margin:"0 auto", padding:"24px 16px"}}>
    {children}
  </main>
  <footer style={{borderTop:"1px solid #eee", marginTop:32}}>
    <div style={{maxWidth:960, margin:"0 auto", padding:"16px", color:"#666", fontSize:14}}>
      © {new Date().getFullYear()} Aimee Oke • Open access resources for academia
    </div>
  </footer>
</body>
    </html>
  );
}
