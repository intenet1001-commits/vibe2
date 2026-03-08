"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Terminal, Monitor } from "lucide-react";
import { cn } from "@/lib/utils";

const ORDINALS = ["첫 번째", "두 번째", "세 번째", "네 번째", "다섯 번째", "여섯 번째"];

function AgentSlot({ index, sessionName }: { index: number; sessionName: string }) {
  const [copied, setCopied] = useState<number | null>(null);
  const name = sessionName.trim() || "claude";
  const sessionId = index === 0 ? name : `${name}${index + 1}`;
  const isFirst = index === 0;

  const commands = isFirst
    ? [
        { label: "터미널에서 tmux 세션 생성 (쉘 프롬프트로 바로 진입)", code: `tmux new-session -s ${sessionId}` },
        { label: "Claude Code 실행", code: "claude" },
      ]
    : [
        { label: "새 iTerm2 탭 열기", code: "Cmd+T", note: "키보드 단축키" },
        { label: "새 tmux 세션 생성", code: `tmux new-session -s ${sessionId}` },
        { label: "Claude Code 실행", code: "claude" },
      ];

  const handleCopy = (code: string, i: number) => {
    if (commands[i] && "note" in commands[i]) return;
    navigator.clipboard.writeText(code);
    setCopied(i);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div className="border rounded-lg overflow-hidden">
      <div className={cn("px-4 py-2.5 flex items-center gap-2", isFirst ? "bg-primary text-primary-foreground" : "bg-muted text-foreground")}>
        <Monitor className="h-4 w-4 shrink-0" />
        <span className="text-sm font-semibold">{ORDINALS[index]} 에이전트</span>
        <code className={cn("ml-1 text-[10px] px-1.5 py-0.5 rounded font-mono", isFirst ? "bg-primary-foreground/20 text-primary-foreground" : "bg-background text-muted-foreground")}>
          세션: {sessionId}
        </code>
        {!isFirst && (
          <span className="ml-auto text-[10px] bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded px-1.5 py-0.5">
            Cmd+T 새 탭
          </span>
        )}
      </div>
      <div className="divide-y">
        {commands.map((cmd, i) => (
          <div key={i} className="px-4 py-3 space-y-1.5">
            <p className="text-[11px] text-muted-foreground font-medium">{i + 1}단계 — {cmd.label}</p>
            <div className="flex items-center gap-2">
              <code className={cn("flex-1 text-xs px-3 py-2 rounded font-mono break-all", "note" in cmd ? "bg-blue-50 dark:bg-blue-950 text-blue-800 dark:text-blue-200" : "bg-muted")}>
                {cmd.code}
              </code>
              {"note" in cmd ? (
                <span className="shrink-0 text-[10px] text-muted-foreground px-2.5">단축키</span>
              ) : (
                <button
                  onClick={() => handleCopy(cmd.code, i)}
                  className={cn("shrink-0 text-[10px] px-2.5 py-1.5 rounded border transition-colors", copied === i ? "bg-green-100 dark:bg-green-900 border-green-400 text-green-700 dark:text-green-300" : "bg-background hover:bg-muted border-border")}
                >
                  {copied === i ? "복사됨" : "복사"}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TmuxSessionBuilder() {
  const [sessionName, setSessionName] = useState("claude");
  const [agentCount, setAgentCount] = useState(2);

  const inputClass = "text-xs px-2.5 py-1.5 border rounded bg-background w-full focus:outline-none focus:ring-1 focus:ring-ring font-mono";

  return (
    <Card className="mb-8 border-primary/30">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-base">
          <Terminal className="h-5 w-5 text-primary" />
          tmux 환경 빌더
        </CardTitle>
        <p className="text-xs text-muted-foreground">
          에이전트 수를 설정하면 각 탭에서 실행할 명령어가 자동으로 생성됩니다.
        </p>
      </CardHeader>

      <CardContent className="space-y-5">

        {/* ① 세션 이름 */}
        <div>
          <p className="text-xs font-semibold mb-1">① 세션 이름</p>
          <input
            type="text"
            value={sessionName}
            onChange={(e) => setSessionName(e.target.value)}
            placeholder="claude"
            aria-label="tmux 세션 이름"
            className={inputClass}
            style={{ maxWidth: 240 }}
          />
          <p className="text-[11px] text-muted-foreground mt-1">
            에이전트마다 별도 세션 —{" "}
            <code className="bg-muted px-1 rounded text-[10px]">{sessionName || "claude"}</code>,{" "}
            <code className="bg-muted px-1 rounded text-[10px]">{sessionName || "claude"}2</code>,{" "}
            <code className="bg-muted px-1 rounded text-[10px]">{sessionName || "claude"}3</code>…
          </p>
        </div>

        <Separator />

        {/* ② 에이전트 수 */}
        <div>
          <p className="text-xs font-semibold mb-2">② 에이전트 수</p>
          <div className="flex gap-1.5">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <button
                key={n}
                onClick={() => setAgentCount(n)}
                className={cn("w-9 h-9 text-xs rounded transition-colors font-semibold", agentCount === n ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80")}
              >
                {n}
              </button>
            ))}
          </div>
        </div>

        <Separator />

        {/* ③ 명령어 목록 */}
        <div>
          <p className="text-xs font-semibold mb-3">③ 각 에이전트별 실행 명령어</p>
          <div className="space-y-3">
            {Array.from({ length: agentCount }, (_, i) => (
              <AgentSlot key={i} index={i} sessionName={sessionName} />
            ))}
          </div>
        </div>

        {/* 팁 */}
        <div className="bg-blue-50 dark:bg-blue-950 border-l-4 border-blue-500 p-3 text-xs text-blue-900 dark:text-blue-100 rounded-r">
          💡 <strong>핵심:</strong>{" "}
          <kbd className="bg-blue-100 dark:bg-blue-900 px-1 rounded">Cmd+T</kbd>로 새 iTerm2 탭을 열고,
          각 탭에서 <strong>다른 이름의 tmux 세션</strong>을 생성한 뒤{" "}
          <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">claude</code>를 실행하세요.
          <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">-CC</code> 옵션은 Command Menu가 떠서 불편하므로 사용하지 마세요.
        </div>
      </CardContent>
    </Card>
  );
}
