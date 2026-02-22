"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { useSeniorMode } from "@/components/senior-mode-provider";
import { Menu, Sun, Moon } from "lucide-react";

const navItems = [
  { href: "/", label: "홈" },
  { href: "/setup-guide", label: "설치 가이드" },
  { href: "/claude-code-guide", label: "Claude Code" },
  { href: "/git-guide", label: "Git 가이드" },
  { href: "/iterm-guide", label: "iTerm2 가이드" },
  { href: "/tmux-guide", label: "Agent Teams" },
  { href: "/plugins-guide", label: "플러그인" },
  { href: "/shadcn-demo", label: "shadcn/ui 데모" },
];

export function Nav() {
  const pathname = usePathname();
  const { seniorMode, toggleSeniorMode } = useSeniorMode();
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <nav aria-label="메인 네비게이션" className="border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-lg md:text-xl font-bold whitespace-nowrap">
            AI 오케스트레이팅
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={pathname === item.href ? "default" : "ghost"}
                  size="sm"
                  className="text-xs"
                >
                  {item.label}
                </Button>
              </Link>
            ))}
            <Button
              variant="ghost"
              size="sm"
              className="text-xs"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="테마 변경"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <Button
              variant={seniorMode ? "default" : "outline"}
              size="sm"
              onClick={toggleSeniorMode}
              className="senior-mode-btn text-xs ml-1"
            >
              {seniorMode ? "👓 크게보기 ON" : "👓 크게보기"}
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="테마 변경"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" aria-label="메뉴 열기">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <SheetTitle>메뉴</SheetTitle>
                <div className="flex flex-col gap-2 mt-4">
                  {navItems.map((item) => (
                    <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                      <Button
                        variant={pathname === item.href ? "default" : "ghost"}
                        className="w-full justify-start text-sm"
                      >
                        {item.label}
                      </Button>
                    </Link>
                  ))}
                  <div className="border-t pt-4 mt-2">
                    <Button
                      variant={seniorMode ? "default" : "outline"}
                      size="sm"
                      onClick={toggleSeniorMode}
                      className="w-full senior-mode-btn text-sm"
                    >
                      {seniorMode ? "👓 크게보기 ON" : "👓 크게보기"}
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
