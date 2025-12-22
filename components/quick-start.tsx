"use client";

import { Card, CardTitle } from "@/components/ui/card";
import { CodeBlock } from "@/components/ui/code-block";

const quickStartSteps = [
  { step: 1, title: "Next.js 설치", code: "npx create-next-app@latest ." },
  { step: 2, title: "Claude Code 초기화", code: "/init" },
  { step: 3, title: "shadcn/ui 설정", code: "npx shadcn@latest init" },
  { step: 4, title: "개발 서버 실행", code: "npm run dev" },
];

export function QuickStart() {
  return (
    <section className="py-8 md:py-12 bg-muted/30 rounded-2xl mt-8 px-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">빠른 시작</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {quickStartSteps.map((item) => (
          <Card key={item.step} className="text-center p-6">
            <div className="text-3xl mb-3">{item.step}</div>
            <CardTitle className="text-lg mb-3">{item.title}</CardTitle>
            <CodeBlock code={item.code} className="text-xs" />
          </Card>
        ))}
      </div>
    </section>
  );
}
