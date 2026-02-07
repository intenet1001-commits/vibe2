"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!show) return null;

  return (
    <Button
      variant="outline"
      size="sm"
      className="fixed bottom-6 right-6 z-50 rounded-full min-w-[44px] min-h-[44px] p-0 shadow-lg"
      onClick={scrollToTop}
      aria-label="맨 위로 이동"
    >
      <ArrowUp className="h-4 w-4" />
    </Button>
  );
}
