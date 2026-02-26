"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeBlock } from "@/components/ui/code-block";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

const SETUP_URL =
  "https://raw.githubusercontent.com/kstost/service-setup-cokacdir/refs/heads/main/basic_setup_ec2.sh";

const FULL_STEPS = [
  {
    label: "EC2 접속",
    desc: "PEM 키로 EC2 서버에 SSH 로그인합니다.",
    code: (pem: string, host: string) => `ssh -t -i "${pem}" ubuntu@${host}`,
  },
  {
    label: "환경 설치",
    desc: "Node.js 등 서버 환경을 자동으로 설치합니다. (처음 한 번만 실행)",
    code: () => `source <(curl -sL …setup script…)`,
  },
  {
    label: "봇 등록",
    desc: "토큰을 서버에 등록합니다. 여러 개면 스페이스로 구분해 한 번에 처리합니다.",
    code: (tokens: string[]) => `npx -y service-setup-cokacdir ${tokens.join(" ")}`,
  },
  {
    label: "Claude 실행",
    desc: "등록 완료 후 Claude Code가 자동으로 시작됩니다.",
    code: () => `claude`,
  },
];

const ADD_ONLY_STEPS = [
  {
    label: "EC2 접속",
    desc: "PEM 키로 EC2 서버에 SSH 로그인합니다.",
    code: (pem: string, host: string) => `ssh -t -i "${pem}" ubuntu@${host}`,
  },
  {
    label: "봇만 추가",
    desc: "이미 Node.js가 설치된 서버이므로 봇 등록 명령어만 실행합니다.",
    code: (tokens: string[]) => `npx -y service-setup-cokacdir ${tokens.join(" ")}`,
  },
];

export function TelegramBotBuilder() {
  const [mode, setMode] = useState<"full" | "add-only">("full");
  const [pemPath, setPemPath] = useState("secret.pem");
  const [ip, setIp] = useState("");
  const [botCount, setBotCount] = useState(1);
  const [tokens, setTokens] = useState<string[]>(["", "", "", "", ""]);

  const handleTokenChange = (index: number, value: string) => {
    const next = [...tokens];
    next[index] = value;
    setTokens(next);
  };

  const getFilledTokens = () =>
    Array.from({ length: botCount }, (_, i) => {
      const t = tokens[i]?.trim();
      return t || `YOUR_BOT${i + 1}_TOKEN`;
    });

  const pem = pemPath.trim() || "secret.pem";
  const host = ip.trim() || "YOUR_EC2_IP";
  const filledTokens = getFilledTokens();
  const tokenStr = filledTokens.join(" ");

  const getCommand = () => {
    if (mode === "full") {
      return `ssh -t -i "${pem}" ubuntu@${host} "bash -ic \\"source <(curl -sL ${SETUP_URL}) > /dev/null 2>&1 && npx -y service-setup-cokacdir ${tokenStr} && claude\\""`;
    }
    return `ssh -t -i "${pem}" ubuntu@${host} "bash -ic \\"npx -y service-setup-cokacdir ${tokenStr}\\""`;
  };

  const steps = mode === "full" ? FULL_STEPS : ADD_ONLY_STEPS;

  const inputClass =
    "text-xs px-2.5 py-1.5 border rounded bg-background w-full focus:outline-none focus:ring-1 focus:ring-ring";

  return (
    <Card className="mb-8 border-primary/30">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-base">
          <Terminal className="h-5 w-5 text-primary" />
          명령어 빌더
        </CardTitle>
        <p className="text-xs text-muted-foreground">
          아래 값을 채우면 복붙 가능한 SSH 명령어가 자동으로 생성됩니다.
        </p>
      </CardHeader>
      <CardContent className="space-y-5">

        {/* ① 모드 토글 */}
        <div>
          <p className="text-xs font-semibold mb-1">① 상황 선택</p>
          <p className="text-xs text-muted-foreground mb-2">
            지금 상황에 맞는 모드를 고르세요. 명령어 형태가 달라집니다.
          </p>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setMode("full")}
              className={cn(
                "text-xs px-3 py-1.5 rounded transition-colors border",
                mode === "full"
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-muted hover:bg-muted/80 border-transparent"
              )}
            >
              처음 설정 (full)
            </button>
            <button
              onClick={() => setMode("add-only")}
              className={cn(
                "text-xs px-3 py-1.5 rounded transition-colors border",
                mode === "add-only"
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-muted hover:bg-muted/80 border-transparent"
              )}
            >
              봇만 추가 (add-only)
            </button>
          </div>
          <div className="mt-2 bg-muted/50 rounded-md p-2.5 text-xs text-muted-foreground">
            {mode === "full" ? (
              <span>
                <strong className="text-foreground">처음 설정</strong> — EC2를 방금 만들었거나 Node.js가 없는 서버.
                setup 스크립트가 Node.js 등을 자동 설치한 뒤 봇을 등록합니다.
              </span>
            ) : (
              <span>
                <strong className="text-foreground">봇만 추가</strong> — 이미 처음 설정을 한 번 실행한 서버.
                setup 스크립트 없이 봇 등록만 빠르게 진행합니다.
              </span>
            )}
          </div>
        </div>

        <Separator />

        {/* ② PEM + IP */}
        <div>
          <p className="text-xs font-semibold mb-1">② 접속 정보 입력</p>
          <p className="text-xs text-muted-foreground mb-3">
            EC2 인스턴스에 접속할 때 필요한 두 가지 값입니다.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold mb-1 block">
                PEM 파일 경로
              </label>
              <input
                type="text"
                value={pemPath}
                onChange={(e) => setPemPath(e.target.value)}
                placeholder="secret.pem"
                aria-label="PEM 파일 경로"
                className={inputClass}
              />
              <p className="text-[10px] text-muted-foreground mt-1">
                AWS에서 EC2 생성 시 발급받은 <code className="bg-muted px-0.5 rounded">.pem</code> 키 파일 경로.
                터미널 현재 위치 기준 상대경로 또는 절대경로 모두 가능합니다.
              </p>
            </div>
            <div>
              <label className="text-xs font-semibold mb-1 block">
                EC2 퍼블릭 IP
              </label>
              <input
                type="text"
                value={ip}
                onChange={(e) => setIp(e.target.value)}
                placeholder="1.2.3.4"
                aria-label="EC2 퍼블릭 IP"
                className={inputClass}
              />
              <p className="text-[10px] text-muted-foreground mt-1">
                AWS 콘솔 → EC2 → 인스턴스 → <strong>퍼블릭 IPv4 주소</strong>.
                인스턴스를 재시작하면 IP가 바뀔 수 있습니다.
              </p>
            </div>
          </div>
        </div>

        <Separator />

        {/* ③ 봇 개수 + 토큰 */}
        <div>
          <p className="text-xs font-semibold mb-1">③ 봇 토큰 입력</p>
          <p className="text-xs text-muted-foreground mb-3">
            등록할 봇 수를 선택한 뒤, @BotFather에서 발급받은 토큰을 입력하세요.
            토큰은 <code className="bg-muted px-0.5 rounded text-[10px]">7123456789:AAH…</code> 형태입니다.
          </p>
          <p className="text-xs font-semibold mb-2">봇 개수</p>
          <div className="flex gap-1.5 mb-4">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                onClick={() => setBotCount(n)}
                className={cn(
                  "w-8 h-8 text-xs rounded transition-colors font-medium",
                  botCount === n
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted/80"
                )}
              >
                {n}
              </button>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {Array.from({ length: botCount }, (_, i) => (
              <div key={i}>
                <label className="text-xs font-medium mb-1 block text-muted-foreground">
                  Token {i + 1}
                </label>
                <input
                  type="text"
                  value={tokens[i]}
                  onChange={(e) => handleTokenChange(i, e.target.value)}
                  placeholder={`YOUR_BOT${i + 1}_TOKEN`}
                  aria-label={`Bot ${i + 1} Token`}
                  className={inputClass}
                />
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* 생성된 명령어 */}
        <div>
          <div className="flex items-center gap-1 mb-2">
            <Terminal className="h-3 w-3 text-muted-foreground" />
            <span className="text-xs text-muted-foreground font-medium">터미널에서 실행</span>
          </div>
          <CodeBlock code={getCommand()} />
        </div>

        {/* 명령어 단계별 설명 */}
        <div className="bg-muted/40 rounded-lg p-4">
          <p className="text-xs font-semibold mb-3">이 명령어가 하는 일 (순서대로)</p>
          <div className="flex flex-col gap-2">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-3 items-start">
                <div className="flex items-center gap-1 shrink-0">
                  <span className="text-[10px] font-bold bg-primary/10 text-primary rounded px-1.5 py-0.5">
                    {i + 1}
                  </span>
                  {i < steps.length - 1 && (
                    <ArrowRight className="h-3 w-3 text-muted-foreground/40" />
                  )}
                </div>
                <div>
                  <span className="text-xs font-semibold">{step.label}</span>
                  <p className="text-[11px] text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </CardContent>
    </Card>
  );
}
