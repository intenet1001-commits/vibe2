"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { CodeBlock } from "@/components/ui/code-block";
import { Terminal, MessageSquare, Copy, Check } from "lucide-react";

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

const skillCombinations = [
  {
    id: "A",
    label: "빠른 시작",
    badge: "MVP / 프로토타입",
    color: "green",
    desc: "CLI가 2분 안에 뼈대를 만들어줌. shadcn/ui = Radix UI + CVA + Tailwind 직접 매칭.",
    skills: [
      { cmd: "/nextjs-best-practices", desc: "Server/Client 컴포넌트, 데이터 페칭 패턴", source: "antigravity" },
      { cmd: "/radix-ui-design-system", desc: "shadcn/ui 기반 컴포넌트 설계", source: "antigravity" },
    ],
  },
  {
    id: "B",
    label: "프로덕션급",
    badge: "SaaS / 팀 프로젝트",
    color: "blue",
    desc: "/dynamic으로 src/app, components/ui, stores 구조까지 잡아줌.",
    skills: [
      { cmd: "/dynamic", desc: "폴더 구조 자동 설정", source: "bkit" },
      { cmd: "/frontend-developer", desc: "React 19, TanStack Query, Zustand", source: "antigravity" },
      { cmd: "/radix-ui-design-system", desc: "컴포넌트 설계", source: "antigravity" },
      { cmd: "/tailwind-design-system", desc: "디자인 토큰 아키텍처", source: "antigravity" },
    ],
  },
  {
    id: "C",
    label: "디자인 차별화",
    badge: "비주얼이 중요한 제품",
    color: "purple",
    desc: "AI가 만든 것 같은 일반적 느낌 방지. Tailwind v4 OKLCH 색상, 컨테이너 쿼리 활용.",
    skills: [
      { cmd: "/frontend-design", desc: "의도적 미학, 차별화 디자인", source: "claude-code-plugins" },
      { cmd: "/tailwind-patterns", desc: "Tailwind v4 고급 패턴", source: "antigravity" },
      { cmd: "/radix-ui-design-system", desc: "컴포넌트 설계", source: "antigravity" },
    ],
  },
];

const colorMap = {
  green: {
    badge: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
    id: "bg-green-500",
    border: "border-green-200 dark:border-green-800",
  },
  blue: {
    badge: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
    id: "bg-blue-500",
    border: "border-blue-200 dark:border-blue-800",
  },
  purple: {
    badge: "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300",
    id: "bg-purple-500",
    border: "border-purple-200 dark:border-purple-800",
  },
};

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
  const [mode, setMode] = useState<"new" | "existing" | "combined">("new");
  const [projectName, setProjectName] = useState("");

  const getCode = () => {
    const name = projectName.trim() || "프로젝트명";
    if (mode === "existing") {
      return "npx create-next-app@latest . --ts --eslint --tailwind --src-dir --app --turbopack --no-import-alias";
    }
    if (mode === "combined") {
      return `npx create-next-app@latest ${name} --ts --eslint --tailwind --src-dir --app --turbopack --no-import-alias && cd ${name} && npx shadcn@latest init`;
    }
    return `npx create-next-app@latest ${name} --ts --eslint --tailwind --src-dir --app --turbopack --no-import-alias`;
  };

  const btnCls = (active: boolean) =>
    `text-xs px-2 py-1 rounded transition-colors ${
      active ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
    }`;

  return (
    <Card className="p-4 flex flex-col h-full">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-lg font-bold text-primary">1</span>
        <CardTitle className="text-sm">Next.js v15</CardTitle>
        {mode === "combined" && (
          <span className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded">+2</span>
        )}
      </div>
      <CardDescription className="text-xs mb-1">TS, ESLint, Tailwind, App Router</CardDescription>
      <p className="text-xs text-muted-foreground/70 mb-3">이 명령어는 웹사이트 프로젝트를 자동으로 만들어줍니다</p>

      <div className="flex gap-1.5 mb-2 flex-wrap">
        <button onClick={() => setMode("new")} className={btnCls(mode === "new")}>새 폴더</button>
        <button onClick={() => setMode("existing")} className={btnCls(mode === "existing")}>현재 폴더</button>
        <button onClick={() => setMode("combined")} className={btnCls(mode === "combined")}>1+2 한 번에</button>
      </div>

      {(mode === "new" || mode === "combined") && (
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
        {mode === "combined" && (
          <p className="text-[10px] text-muted-foreground/60 mt-1">
            ↑ create-next-app 완료 후 shadcn/ui 자동 실행 (<code>&&</code> 순차 실행)
          </p>
        )}
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

const sourceLabel: Record<string, { label: string; cls: string }> = {
  antigravity: { label: "antigravity", cls: "bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300" },
  bkit: { label: "bkit", cls: "bg-violet-100 text-violet-700 dark:bg-violet-900 dark:text-violet-300" },
  "claude-code-plugins": { label: "cc-plugins", cls: "bg-sky-100 text-sky-700 dark:bg-sky-900 dark:text-sky-300" },
};

function CombinationCard({ combo }: { combo: typeof skillCombinations[number] }) {
  const [copied, setCopied] = useState(false);
  const colors = colorMap[combo.color as keyof typeof colorMap];

  const handleCopyAll = () => {
    navigator.clipboard.writeText(combo.skills.map((s) => s.cmd).join("\n"));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className={`p-4 flex flex-col border ${colors.border}`}>
      <div className="flex items-center gap-2 mb-2">
        <span className={`text-xs font-bold text-white px-2 py-0.5 rounded ${colors.id}`}>{combo.id}</span>
        <CardTitle className="text-sm">{combo.label}</CardTitle>
        <span className={`text-[10px] px-1.5 py-0.5 rounded ml-auto ${colors.badge}`}>{combo.badge}</span>
      </div>
      <p className="text-xs text-muted-foreground mb-3">{combo.desc}</p>

      <div className="space-y-1.5 mb-4 flex-1">
        {combo.skills.map((skill) => {
          const src = sourceLabel[skill.source];
          return (
            <div key={skill.cmd}>
              <div className="flex items-center gap-1 mb-0.5">
                <MessageSquare className="h-2.5 w-2.5 text-muted-foreground" />
                <span className="text-[10px] text-muted-foreground">Claude Code</span>
                {src && (
                  <span className={`text-[9px] px-1 py-0.5 rounded ml-auto ${src.cls}`}>{src.label}</span>
                )}
              </div>
              <CodeBlock code={skill.cmd} className="text-xs" />
              <p className="text-[10px] text-muted-foreground/60 mt-0.5">{skill.desc}</p>
            </div>
          );
        })}
      </div>

      <button
        onClick={handleCopyAll}
        className="flex items-center justify-center gap-1.5 w-full text-xs py-1.5 rounded border border-dashed hover:bg-muted/50 transition-colors"
      >
        {copied ? (
          <>
            <Check className="h-3 w-3 text-green-500" />
            <span className="text-green-600">복사됨</span>
          </>
        ) : (
          <>
            <Copy className="h-3 w-3 text-muted-foreground" />
            <span className="text-muted-foreground">모두 복사</span>
          </>
        )}
      </button>
    </Card>
  );
}

const pluginSources = [
  {
    key: "antigravity",
    label: "antigravity",
    cls: "bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300",
    installCmd: "npx antigravity-awesome-skills",
    cmdType: "terminal" as const,
  },
  {
    key: "claude-code-plugins",
    label: "cc-plugins",
    cls: "bg-sky-100 text-sky-700 dark:bg-sky-900 dark:text-sky-300",
    installCmd: "/plugin marketplace add anthropics/claude-code",
    cmdType: "claude" as const,
  },
  {
    key: "bkit",
    label: "bkit",
    cls: "bg-violet-100 text-violet-700 dark:bg-violet-900 dark:text-violet-300",
    installCmd: "/plugin marketplace add bkitai/bkit",
    cmdType: "claude" as const,
  },
];

function SkillCombinations() {
  return (
    <div className="px-4 mt-8 pt-6 border-t border-border/50">
      <div className="mb-4">
        <h3 className="text-base font-semibold mb-1">플러그인 설치 후 추천 스킬 조합</h3>
        <p className="text-xs text-muted-foreground mb-3">각 스킬의 출처 플러그인을 먼저 설치하세요</p>

        {/* Plugin install legend */}
        <div className="space-y-1.5 mb-4">
          {pluginSources.map((src) => (
            <div key={src.key} className="flex items-center gap-2 flex-wrap">
              <span className={`text-[10px] px-1.5 py-0.5 rounded shrink-0 ${src.cls}`}>{src.label}</span>
              <div className="flex items-center gap-1 min-w-0">
                {src.cmdType === "terminal" ? (
                  <Terminal className="h-2.5 w-2.5 text-muted-foreground shrink-0" />
                ) : (
                  <MessageSquare className="h-2.5 w-2.5 text-muted-foreground shrink-0" />
                )}
                <code className="text-[10px] bg-muted px-1.5 py-0.5 rounded truncate">{src.installCmd}</code>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {skillCombinations.map((combo) => (
          <CombinationCard key={combo.id} combo={combo} />
        ))}
      </div>
    </div>
  );
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

      {/* Skill Combinations */}
      <SkillCombinations />
    </section>
  );
}
