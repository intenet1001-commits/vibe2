"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useSeniorMode } from "@/components/senior-mode-provider";

const navItems = [
  { href: "/", label: "홈" },
  { href: "/setup-guide", label: "설치 가이드" },
  { href: "/git-guide", label: "Git 가이드" },
  { href: "/iterm-guide", label: "iTerm2 가이드" },
];

export function Nav() {
  const pathname = usePathname();
  const { seniorMode, toggleSeniorMode } = useSeniorMode();

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <Link href="/" className="text-xl md:text-2xl font-bold whitespace-nowrap">
            바이브 서비스
          </Link>
          <div className="flex flex-wrap items-center gap-2 md:gap-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={pathname === item.href ? "default" : "ghost"}
                  size="sm"
                  className="text-xs md:text-sm"
                >
                  {item.label}
                </Button>
              </Link>
            ))}
            <Button
              variant={seniorMode ? "default" : "outline"}
              size="sm"
              onClick={toggleSeniorMode}
              className="senior-mode-btn text-xs md:text-sm ml-2"
            >
              {seniorMode ? "👓 크게보기 ON" : "👓 크게보기"}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
