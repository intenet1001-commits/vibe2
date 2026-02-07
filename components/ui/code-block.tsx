"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

export function CodeBlock({ code, language, className = "" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

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
    <div className={`relative group ${className}`}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon-sm"
            className="absolute right-1 top-1 min-h-[44px] min-w-[44px] sm:min-h-0 sm:min-w-0 sm:h-6 sm:w-6 p-0 opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity"
            onClick={handleCopy}
            aria-label={copied ? "복사됨" : "코드 복사"}
          >
            {copied ? (
              <Check className="h-3 w-3 text-green-500" />
            ) : (
              <Copy className="h-3 w-3" />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          {copied ? "복사됨!" : "복사하기"}
        </TooltipContent>
      </Tooltip>
      <code className="block bg-muted p-2.5 rounded text-xs overflow-x-auto whitespace-nowrap">
        {code}
      </code>
    </div>
  );
}

interface CodeBlockMultiLineProps {
  lines: string[];
  language?: string;
  className?: string;
}

export function CodeBlockMultiLine({ lines, language, className = "" }: CodeBlockMultiLineProps) {
  const code = lines.join("\n");
  return <CodeBlock code={code} language={language} className={className} />;
}
