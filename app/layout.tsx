import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { SeniorModeProvider } from "@/components/senior-mode-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI 오케스트레이팅 - 나만의 서비스 만들기",
  description: "내가 필요한건 내가 만들어 쓰는 시대! Next.js, Tailwind, shadcn/ui로 세련되고 일관성있는 서비스 구축하기",
  openGraph: {
    title: "AI 오케스트레이팅 - 나만의 서비스 만들기",
    description: "내가 필요한건 내가 만들어 쓰는 시대! Next.js, Tailwind, shadcn/ui로 세련되고 일관성있는 서비스 구축하기",
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI 오케스트레이팅 - 나만의 서비스 만들기",
    description: "내가 필요한건 내가 만들어 쓰는 시대! Next.js, Tailwind, shadcn/ui로 세련되고 일관성있는 서비스 구축하기",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md">
          본문으로 건너뛰기
        </a>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <SeniorModeProvider>
            <TooltipProvider>
              <Nav />
              <main id="main-content">{children}</main>
              <footer className="border-t mt-20">
                <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
                  © 2025 AI 오케스트레이팅. All rights reserved.
                </div>
              </footer>
              <Toaster />
            </TooltipProvider>
          </SeniorModeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
