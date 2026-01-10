"use client";

import Link from "next/link";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { CodeBlock } from "@/components/ui/code-block";

const quickStartSteps = [
  {
    step: 1,
    title: "Next.js 설치",
    code: "npx create-next-app@latest .",
    desc: "TypeScript? No, Tailwind CSS? Yes 선택"
  },
  {
    step: 2,
    title: "shadcn/ui 설정",
    code: "npx shadcn@latest init",
    desc: "UI 컴포넌트 라이브러리"
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

export function QuickStart() {
  return (
    <section className="py-8 md:py-12 bg-muted/30 rounded-2xl mt-8 px-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">빠른 시작</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
        {quickStartSteps.map((item) => (
          <Card key={item.step} className="text-center p-4 md:p-6">
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
            ) : (
              <Link href={item.link!} className="inline-block bg-primary text-primary-foreground text-xs px-3 py-1.5 rounded hover:bg-primary/90 transition-colors">
                설치 가이드
              </Link>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
}
