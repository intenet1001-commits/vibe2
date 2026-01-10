"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { CodeBlock } from "@/components/ui/code-block";

const quickStartSteps = [
  {
    step: 1,
    title: "Next.js v15 설치",
    isNextjs: true,
    desc: "TS, ESLint, Tailwind, App Router"
  },
  {
    step: 2,
    title: "shadcn/ui 설정",
    code: "npx shadcn@latest init",
    desc: "lucide-react 자동 포함"
  },
  {
    step: 3,
    title: "Supabase",
    link: "/setup-guide#supabase",
    desc: "백엔드 필요시 (선택)"
  },
  {
    step: 4,
    title: "Claude Code",
    code: "/init",
    desc: "프로젝트 설정",
    tipLabel: "💡 이후 요청",
    tip: "포트 9001, 실행.command 만들어줘"
  },
  {
    step: 5,
    title: "서버 실행",
    code: "npm run dev",
    desc: "localhost:9001"
  },
];

function NextjsCard() {
  const [mode, setMode] = useState<"new" | "existing">("new");
  const [projectName, setProjectName] = useState("");

  const getCode = () => {
    if (mode === "existing") {
      return "npx create-next-app@latest . --ts --eslint --tailwind --src-dir --app --turbopack --no-import-alias";
    }
    const name = projectName.trim() || "프로젝트명";
    return `npx create-next-app@latest ${name} --ts --eslint --tailwind --src-dir --app --turbopack --no-import-alias`;
  };

  return (
    <Card className="p-4 flex flex-col">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-lg font-bold text-primary">1</span>
        <CardTitle className="text-sm">Next.js v15</CardTitle>
      </div>
      <CardDescription className="text-[11px] mb-3">TS, ESLint, Tailwind, App Router</CardDescription>

      <div className="flex gap-1 mb-2">
        <button
          onClick={() => setMode("new")}
          className={`text-[10px] px-2 py-0.5 rounded transition-colors ${
            mode === "new"
              ? "bg-primary text-primary-foreground"
              : "bg-muted hover:bg-muted/80"
          }`}
        >
          새 폴더
        </button>
        <button
          onClick={() => setMode("existing")}
          className={`text-[10px] px-2 py-0.5 rounded transition-colors ${
            mode === "existing"
              ? "bg-primary text-primary-foreground"
              : "bg-muted hover:bg-muted/80"
          }`}
        >
          현재 폴더
        </button>
      </div>

      {mode === "new" && (
        <input
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          placeholder="프로젝트명 입력"
          className="text-[11px] px-2 py-1 mb-2 border rounded bg-background w-full"
        />
      )}

      <div className="mt-auto">
        <CodeBlock code={getCode()} className="text-[10px]" />
      </div>
    </Card>
  );
}

function StepCard({ item }: { item: typeof quickStartSteps[number] }) {
  return (
    <Card className="p-4 flex flex-col">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-lg font-bold text-primary">{item.step}</span>
        <CardTitle className="text-sm">{item.title}</CardTitle>
      </div>
      <CardDescription className="text-[11px] mb-3">{item.desc}</CardDescription>

      <div className="mt-auto space-y-2">
        {"code" in item && item.code ? (
          <>
            <CodeBlock code={item.code} className="text-[10px]" />
            {"tipLabel" in item && item.tipLabel && (
              <p className="text-[10px] text-muted-foreground">{item.tipLabel}</p>
            )}
            {"tip" in item && item.tip && (
              <CodeBlock code={item.tip} className="text-[10px]" />
            )}
          </>
        ) : "link" in item && item.link ? (
          <Link
            href={item.link}
            className="inline-block bg-primary text-primary-foreground text-[10px] px-3 py-1.5 rounded hover:bg-primary/90 transition-colors"
          >
            설치 가이드
          </Link>
        ) : null}
      </div>
    </Card>
  );
}

function CommitDot() {
  return (
    <div className="hidden xl:flex flex-col items-center justify-center gap-0.5 px-1 self-center">
      <div className="w-6 h-px bg-border" />
      <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30" />
      <span className="text-[8px] text-muted-foreground/50">commit</span>
    </div>
  );
}

export function QuickStart() {
  const otherSteps = quickStartSteps.slice(1);

  return (
    <section className="py-8 md:py-12 bg-muted/30 rounded-xl max-w-6xl mx-auto">
      <h2 className="text-xl md:text-2xl font-bold mb-6 text-center px-4">빠른 시작</h2>

      {/* Mobile & Tablet */}
      <div className="xl:hidden px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-3xl mx-auto">
          <NextjsCard />
          {otherSteps.map((item) => (
            <StepCard key={item.step} item={item} />
          ))}
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden xl:block px-4">
        <div className="flex items-stretch justify-center gap-1">
          <div className="w-48 flex-shrink-0">
            <NextjsCard />
          </div>
          <CommitDot />
          {otherSteps.map((item, index) => (
            <div key={item.step} className="contents">
              <div className="w-40 flex-shrink-0">
                <StepCard item={item} />
              </div>
              {index < otherSteps.length - 1 && <CommitDot />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
