import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "바이브 서비스 - 나만의 서비스 만들기",
  description: "내가 필요한건 내가 만들어 쓰는 시대! Next.js, Tailwind, shadcn/ui로 세련되고 일관성있는 서비스 구축하기",
  openGraph: {
    title: "바이브 서비스 - 나만의 서비스 만들기",
    description: "내가 필요한건 내가 만들어 쓰는 시대! Next.js, Tailwind, shadcn/ui로 세련되고 일관성있는 서비스 구축하기",
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "바이브 서비스 - 나만의 서비스 만들기",
    description: "내가 필요한건 내가 만들어 쓰는 시대! Next.js, Tailwind, shadcn/ui로 세련되고 일관성있는 서비스 구축하기",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        <main>{children}</main>
        <footer className="border-t mt-20">
          <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
            © 2025 바이브 서비스. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
