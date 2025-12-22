"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

export function CodeBlock({ code, language, className = "" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className={`relative group ${className}`}>
      <Button
        variant="ghost"
        size="sm"
        className="absolute right-2 top-2 h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={handleCopy}
        title={copied ? "복사됨!" : "복사하기"}
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </Button>
      <code className="block bg-muted p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
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
