"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { CodeBlock } from "@/components/ui/code-block";
import { Terminal, MessageSquare } from "lucide-react";

const quickStartSteps = [
  {
    step: 1,
    title: "Next.js v15 설치",
    isNextjs: true,
    desc: "TS, ESLint, Tailwind, App Router",
    plainDesc: "이 명령어는 웹사이트 프로젝트를 자동으로 만들어줍니다",
    commandType: "terminal" as const,
  },
  {
    step: 2,
    title: "shadcn/ui 설정",
    code: "npx shadcn@latest init",
    desc: "lucide-react 자동 포함",
    plainDesc: "UI 디자인 도구를 설치합니다",
    commandType: "terminal" as const,
  },
  {
    step: 3,
    title: "Supabase",
    link: "/setup-guide#supabase",
    desc: "백엔드 필요시 (선택)",
    plainDesc: "데이터 저장이 필요한 경우 (선택사항)",
  },
  {
    step: 4,
    title: "Claude Code",
    code: "/init",
    desc: "프로젝트 설정",
    plainDesc: "AI 코딩 도우미를 프로젝트에 연결합니다",
    tipLabel: "💡 이후 요청",
    tip: "포트 9001, 실행.command 만들어줘",
    commandType: "claude" as const,
  },
  {
    step: 5,
    title: "서버 실행",
    code: "npm run dev",
    desc: "localhost:9009",
    plainDesc: "브라우저에서 결과를 확인합니다",
    commandType: "terminal" as const,
  },
];

function CommandLabel({ type }: { type: "terminal" | "claude" }) {
  if (type === "terminal") {
    return (
      <div className="flex items-center gap-1 mb-1">
        <Terminal className="h-3 w-3 text-muted-foreground" />
        <span className="text-[10px] text-muted-foreground font-medium">터미널</span>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-1 mb-1">
      <MessageSquare className="h-3 w-3 text-muted-foreground" />
      <span className="text-[10px] text-muted-foreground font-medium">Claude Code</span>
    </div>
  );
}

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
    <Card className="p-4 flex flex-col h-full">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-lg font-bold text-primary">1</span>
        <CardTitle className="text-sm">Next.js v15</CardTitle>
      </div>
      <CardDescription className="text-xs mb-1">TS, ESLint, Tailwind, App Router</CardDescription>
      <p className="text-xs text-muted-foreground/70 mb-3">이 명령어는 웹사이트 프로젝트를 자동으로 만들어줍니다</p>

      <div className="flex gap-1.5 mb-2">
        <button
          onClick={() => setMode("new")}
          className={`text-xs px-2 py-1 rounded transition-colors ${
            mode === "new"
              ? "bg-primary text-primary-foreground"
              : "bg-muted hover:bg-muted/80"
          }`}
        >
          새 폴더
        </button>
        <button
          onClick={() => setMode("existing")}
          className={`text-xs px-2 py-1 rounded transition-colors ${
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
          aria-label="프로젝트명"
          className="text-xs px-2.5 py-1.5 mb-2 border rounded bg-background w-full"
        />
      )}

      <div className="mt-auto">
        <CommandLabel type="terminal" />
        <CodeBlock code={getCode()} className="text-xs" />
      </div>
    </Card>
  );
}

function ClaudeCodeCard() {
  const [os, setOs] = useState<"mac" | "win">("mac");
  const [port, setPort] = useState("9001");

  const getTip = () => {
    const portNum = port.trim() || "9001";
    const file = os === "mac" ? "실행.command" : "실행.bat";
    return `포트 ${portNum}, ${file} 만들어줘`;
  };

  const btnCls = (active: boolean) =>
    `text-xs px-2 py-1 rounded transition-colors ${
      active ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
    }`;

  return (
    <Card className="p-4 flex flex-col h-full">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-lg font-bold text-primary">4</span>
        <CardTitle className="text-sm">Claude Code</CardTitle>
      </div>
      <CardDescription className="text-xs mb-1">프로젝트 설정</CardDescription>
      <p className="text-xs text-muted-foreground/70 mb-3">AI 코딩 도우미를 프로젝트에 연결합니다</p>

      <div className="flex gap-1.5 mb-2">
        <button onClick={() => setOs("mac")} className={btnCls(os === "mac")}>Mac</button>
        <button onClick={() => setOs("win")} className={btnCls(os === "win")}>Windows</button>
      </div>

      <div className="flex items-center gap-1.5 mb-2">
        <span className="text-xs text-muted-foreground">포트:</span>
        <input
          type="text"
          value={port}
          onChange={(e) => setPort(e.target.value)}
          placeholder="9001"
          aria-label="포트 번호"
          className="text-xs px-2 py-1 border rounded bg-background w-16 text-center"
        />
      </div>

      <div className="mt-auto space-y-2">
        <CommandLabel type="claude" />
        <CodeBlock code="/init" className="text-xs" />
        <p className="text-xs text-muted-foreground/60">↑ CLAUDE.md 생성 (선택)</p>
        <p className="text-xs text-muted-foreground">💡 이후 요청</p>
        <CommandLabel type="claude" />
        <CodeBlock code={getTip()} className="text-xs" />
      </div>
    </Card>
  );
}

function StepCard({ item }: { item: typeof quickStartSteps[number] }) {
  return (
    <Card className="p-4 flex flex-col h-full">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-lg font-bold text-primary">{item.step}</span>
        <CardTitle className="text-sm">{item.title}</CardTitle>
      </div>
      <CardDescription className="text-xs mb-1">{item.desc}</CardDescription>
      <p className="text-xs text-muted-foreground/70 mb-3">{item.plainDesc}</p>

      <div className="mt-auto space-y-2">
        {"code" in item && item.code ? (
          <>
            {item.commandType && <CommandLabel type={item.commandType} />}
            <CodeBlock code={item.code} className="text-xs" />
            {"tipLabel" in item && item.tipLabel && (
              <p className="text-xs text-muted-foreground">{item.tipLabel}</p>
            )}
            {"tip" in item && item.tip && (
              <>
                {item.commandType && <CommandLabel type={item.commandType} />}
                <CodeBlock code={item.tip} className="text-xs" />
              </>
            )}
          </>
        ) : "link" in item && item.link ? (
          <Link
            href={item.link}
            className="inline-block bg-primary text-primary-foreground text-xs px-3 py-1.5 rounded hover:bg-primary/90 transition-colors"
          >
            설치 가이드
          </Link>
        ) : null}
      </div>
    </Card>
  );
}

function ArrowConnector() {
  return (
    <div className="hidden xl:flex items-center justify-center px-1 self-center">
      <div className="w-6 h-px bg-border relative">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-4 border-l-muted-foreground/30 border-y-[3px] border-y-transparent" />
      </div>
    </div>
  );
}

function renderStepCard(item: typeof quickStartSteps[number]) {
  if (item.step === 4) {
    return <ClaudeCodeCard key={item.step} />;
  }
  return <StepCard key={item.step} item={item} />;
}

export function QuickStart() {
  const otherSteps = quickStartSteps.slice(1);

  return (
    <section className="py-8 md:py-10 bg-muted/30 rounded-xl max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center px-4">빠른 시작</h2>

      {/* Prerequisites Banner */}
      <div className="px-4 mb-6">
        <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
          <p className="text-sm">
            시작하기 전에 Node.js가 필요합니다{" "}
            <Link
              href="/setup-guide"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              설치 가이드 보기 →
            </Link>
          </p>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden px-4">
        <div className="grid grid-cols-2 gap-3">
          <NextjsCard />
          {otherSteps.map((item) => renderStepCard(item))}
        </div>
      </div>

      {/* Tablet */}
      <div className="hidden md:block xl:hidden px-4">
        <div className="grid grid-cols-3 gap-3 max-w-2xl mx-auto">
          <NextjsCard />
          {otherSteps.slice(0, 2).map((item) => renderStepCard(item))}
        </div>
        <div className="grid grid-cols-2 gap-3 max-w-md mx-auto mt-3">
          {otherSteps.slice(2).map((item) => renderStepCard(item))}
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden xl:block px-4">
        <div className="flex items-stretch justify-center gap-2">
          <div className="w-48 flex-shrink-0">
            <NextjsCard />
          </div>
          <ArrowConnector />
          {otherSteps.map((item, index) => (
            <div key={item.step} className="contents">
              <div className="w-40 flex-shrink-0">
                {item.step === 4 ? <ClaudeCodeCard /> : <StepCard item={item} />}
              </div>
              {index < otherSteps.length - 1 && <ArrowConnector />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
