"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";
import { useTheme } from "next-themes";
import { codeToHtml } from "shiki";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";
import { DARK_THEME, LIGHT_THEME, SUPPORTED_LANGUAGES } from "@/lib/shiki-config";
import type { BundledLanguage } from "shiki";

interface EnhancedCodeBlockProps {
  code: string;
  language?: BundledLanguage;
  showLineNumbers?: boolean;
  className?: string;
}

export function EnhancedCodeBlock({
  code,
  language = "bash",
  showLineNumbers = false,
  className = "",
}: EnhancedCodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [html, setHtml] = useState<string>("");
  const { toast } = useToast();
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    async function highlight() {
      try {
        const theme = resolvedTheme === "dark" ? DARK_THEME : LIGHT_THEME;
        const highlighted = await codeToHtml(code, {
          lang: SUPPORTED_LANGUAGES.includes(language) ? language : "bash",
          theme,
        });
        setHtml(highlighted);
      } catch (error) {
        console.error("Failed to highlight code:", error);
        // Fallback to plain code
        setHtml(`<pre><code>${code}</code></pre>`);
      }
    }
    highlight();
  }, [code, language, resolvedTheme]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      toast({
        title: "복사 완료!",
        description: "코드가 클립보드에 복사되었습니다.",
        variant: "success",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
      toast({
        title: "복사 실패",
        description: "코드 복사 중 오류가 발생했습니다.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className={`relative group rounded-lg overflow-hidden ${className}`}>
        {/* Language Label */}
        {language && (
          <div className="absolute top-2 right-14 px-2 py-1 text-xs font-mono text-muted-foreground bg-background/80 rounded">
            {language}
          </div>
        )}

        {/* Copy Button */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon-sm"
              className="absolute right-2 top-2 min-h-[44px] min-w-[44px] sm:min-h-0 sm:min-w-0 sm:h-8 sm:w-8 p-0 opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity bg-background/80 hover:bg-background"
              onClick={handleCopy}
              aria-label={copied ? "복사됨" : "코드 복사"}
            >
              {copied ? (
                <Check className="h-4 w-4 text-success" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            {copied ? "복사됨!" : "복사하기"}
          </TooltipContent>
        </Tooltip>

        {/* Code Content with Shiki Highlighting */}
        <div
          className="shiki-wrapper overflow-x-auto"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
  );
}

interface EnhancedCodeBlockMultiLineProps {
  lines: string[];
  language?: BundledLanguage;
  showLineNumbers?: boolean;
  className?: string;
}

export function EnhancedCodeBlockMultiLine({
  lines,
  language = "bash",
  showLineNumbers = false,
  className = "",
}: EnhancedCodeBlockMultiLineProps) {
  const code = lines.join("\n");
  return (
    <EnhancedCodeBlock
      code={code}
      language={language}
      showLineNumbers={showLineNumbers}
      className={className}
    />
  );
}
