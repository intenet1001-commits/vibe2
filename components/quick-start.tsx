"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { CodeBlock } from "@/components/ui/code-block";

const nextjsOptions = {
  new: {
    label: "새 폴더",
    code: "npx create-next-app@latest 프로젝트명 --ts --eslint --tailwind --src-dir --app --turbopack --no-import-alias"
  },
  existing: {
    label: "현재 폴더",
    code: "npx create-next-app@latest . --ts --eslint --tailwind --src-dir --app --turbopack --no-import-alias"
  }
};

const quickStartSteps = [
  {
    step: 1,
    title: "Next.js v15 설치",
    isNextjs: true,
    desc: "TS, ESLint, Tailwind, src/, App Router, Turbopack"
  },
  {
    step: 2,
    title: "shadcn/ui 설정",
    code: "npx shadcn@latest init",
    desc: "lucide-react 아이콘 자동 포함"
  },
  {
    step: 3,
    title: "Supabase 설치",
    link: "/setup-guide#supabase",
    desc: "백엔드 필요시 (선택)"
  },
  {
    step: 4,
    title: "Claude Code 초기화",
    code: "/init",
    desc: "프로젝트 설정 생성",
    tipLabel: "💡 /init 후 아래 요청",
    tip: "포트 9001, 실행.command 만들어줘"
  },
  {
    step: 5,
    title: "개발 서버 실행",
    code: "npm run dev",
    desc: "http://localhost:9001"
  },
];

function NextjsCard() {
  const [mode, setMode] = useState<"new" | "existing">("new");

  return (
    <Card className="text-center p-4 md:p-6">
      <div className="text-2xl md:text-3xl mb-2 md:mb-3">1</div>
      <CardTitle className="text-base md:text-lg mb-2">Next.js v15 설치</CardTitle>
      <CardDescription className="text-xs mb-3">TS, ESLint, Tailwind, src/, App Router, Turbopack</CardDescription>

      <div className="flex gap-1 mb-3 justify-center">
        <button
          onClick={() => setMode("new")}
          className={`text-xs px-2 py-1 rounded transition-colors ${
            mode === "new"
              ? "bg-primary text-primary-foreground"
              : "bg-muted hover:bg-muted/80"
          }`}
        >
          {nextjsOptions.new.label}
        </button>
        <button
          onClick={() => setMode("existing")}
          className={`text-xs px-2 py-1 rounded transition-colors ${
            mode === "existing"
              ? "bg-primary text-primary-foreground"
              : "bg-muted hover:bg-muted/80"
          }`}
        >
          {nextjsOptions.existing.label}
        </button>
      </div>

      <CodeBlock code={nextjsOptions[mode].code} className="text-xs" />
    </Card>
  );
}

function GitCommitHint() {
  return (
    <div className="hidden lg:flex items-center justify-center text-muted-foreground">
      <div className="flex flex-col items-center gap-1">
        <span className="text-lg">→</span>
        <span className="text-[10px] bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-1.5 py-0.5 rounded font-mono">git commit</span>
      </div>
    </div>
  );
}

function StepCard({ item }: { item: typeof quickStartSteps[number] }) {
  return (
    <Card className="text-center p-4 md:p-6">
      <div className="text-2xl md:text-3xl mb-2 md:mb-3">{item.step}</div>
      <CardTitle className="text-base md:text-lg mb-2">{item.title}</CardTitle>
      <CardDescription className="text-xs mb-3 min-h-[2.5rem]">{item.desc}</CardDescription>
      {"code" in item && item.code ? (
        <div className="space-y-2">
          <CodeBlock code={item.code} className="text-xs" />
          {"tipLabel" in item && item.tipLabel && (
            <p className="text-xs text-muted-foreground pt-1">{item.tipLabel}</p>
          )}
          {"tip" in item && item.tip && (
            <CodeBlock code={item.tip} className="text-xs" />
          )}
        </div>
      ) : "link" in item && item.link ? (
        <Link href={item.link} className="inline-block bg-primary text-primary-foreground text-xs px-3 py-1.5 rounded hover:bg-primary/90 transition-colors">
          설치 가이드
        </Link>
      ) : null}
    </Card>
  );
}

export function QuickStart() {
  const otherSteps = quickStartSteps.slice(1);

  return (
    <section className="py-8 md:py-12 bg-muted/30 rounded-2xl mt-8 px-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">빠른 시작</h2>

      {/* Mobile: 그리드 */}
      <div className="lg:hidden grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        <NextjsCard />
        {otherSteps.map((item) => (
          <StepCard key={item.step} item={item} />
        ))}
      </div>

      {/* Desktop: git commit 힌트 포함 */}
      <div className="hidden lg:flex items-start justify-center gap-2 max-w-7xl mx-auto">
        <NextjsCard />
        <GitCommitHint />
        {otherSteps.map((item, index) => (
          <div key={item.step} className="contents">
            <StepCard item={item} />
            {index < otherSteps.length - 1 && <GitCommitHint />}
          </div>
        ))}
      </div>
    </section>
  );
}
