import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CodeBlock, CodeBlockMultiLine } from "@/components/ui/code-block";
import { AlertCircle, CheckCircle2, Plus, Server, Settings } from "lucide-react";
import { TelegramBotBuilder } from "@/components/telegram-bot-builder";

export const metadata: Metadata = {
  title: "Telegram Bot EC2 설정 가이드 - AI 오케스트레이팅",
  description: "EC2 서버에 Telegram 봇을 처음부터 복수로 등록하거나, 기존 서버에 봇을 추가하는 방법을 단계별로 안내합니다.",
};

export default function TelegramBotGuide() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Telegram Bot EC2 설정 가이드
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          처음 설정 vs 봇 추가 — 두 가지 상황별 명령어 매뉴얼
        </p>
        <div className="flex gap-2 justify-center flex-wrap mt-6">
          <Badge variant="outline">EC2</Badge>
          <Badge variant="outline">Telegram Bot</Badge>
          <Badge variant="outline">SSH</Badge>
          <Badge variant="outline">service-setup-cokacdir</Badge>
        </div>
      </div>

      {/* 출처 안내 */}
      <div className="bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-4 flex gap-3">
        <AlertCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
        <p className="text-sm text-amber-700 dark:text-amber-300">
          이 가이드는 유튜브 채널 <strong>코드깎는노인</strong>의 강의를 참고하여 따라하기 쉽게 재정리한 내용입니다. 원본 콘텐츠 제작자의 노고에 감사드립니다.{" "}
          <a
            href="https://youtu.be/rGdyCUhmkqc?si=waYjCEozifmXkIFe"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-medium"
          >
            원본 영상 보기 →
          </a>
        </p>
      </div>

      {/* EC2 전제조건 알림 */}
      <div className="bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-8 flex gap-3">
        <Server className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
        <p className="text-sm text-blue-700 dark:text-blue-300">
          이 가이드는 <strong>AWS EC2 인스턴스가 이미 생성되어 있고</strong>, PEM 키 파일과 퍼블릭 IP가 준비된 상태를 전제합니다.
        </p>
      </div>

      {/* 목차 */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>목차</CardTitle>
          <CardDescription>상황에 맞는 섹션으로 이동하세요</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2 text-sm">
            <a href="#prerequisites" className="text-primary hover:underline">1. 사전 준비 (공통)</a>
            <a href="#method-a" className="text-primary hover:underline">2. 처음부터 복수 봇 설정</a>
            <a href="#method-b" className="text-primary hover:underline">3. 이미 설정된 서버에 봇 추가</a>
            <a href="#notes" className="text-primary hover:underline">4. 주의사항</a>
          </div>
        </CardContent>
      </Card>

      {/* 1. 사전 준비 */}
      <section id="prerequisites" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Settings className="h-6 w-6 text-primary" />
          1. 사전 준비 (공통)
        </h2>

        <Card className="mb-4">
          <CardContent className="pt-6 space-y-5">
            {/* PEM 권한 */}
            <div>
              <p className="text-sm font-semibold mb-1">① PEM 파일 권한 설정</p>
              <p className="text-xs text-muted-foreground mb-2">
                처음 한 번만 실행합니다. 권한이 너무 열려 있으면 SSH 접속이 거부됩니다.
              </p>
              <CodeBlock code="chmod 0600 secret.pem" />
            </div>

            <Separator />

            {/* 환경변수 설정 */}
            <div>
              <p className="text-sm font-semibold mb-1">② 환경변수 설정</p>
              <p className="text-xs text-muted-foreground mb-2">
                터미널 세션마다 입력합니다. <code className="bg-muted px-1 rounded">YOUR_*</code> 부분을 실제 값으로 교체하세요.
              </p>
              <CodeBlockMultiLine
                lines={[
                  "export PEM=secret.pem",
                  "export IP=YOUR_EC2_IP",
                  "export TOKEN=YOUR_BOT1_TOKEN",
                  "export TOKEN2=YOUR_BOT2_TOKEN",
                ]}
              />
            </div>

            <Separator />

            {/* 봇 토큰 발급 */}
            <div>
              <p className="text-sm font-semibold mb-1">③ Telegram 봇 토큰 발급 방법</p>
              <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                <li>Telegram에서 <strong>@BotFather</strong> 검색 후 시작</li>
                <li><code className="bg-muted px-1 rounded">/newbot</code> 입력</li>
                <li>봇 이름과 username 설정 (username은 bot으로 끝나야 함)</li>
                <li>발급된 토큰을 복사하여 TOKEN 변수에 사용</li>
              </ol>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 실제로 할 일: 명령어 빌더 */}
      <div className="bg-green-50 dark:bg-green-950/40 border-2 border-green-400 dark:border-green-700 rounded-lg px-4 pt-4 pb-2 mb-4 flex gap-3 items-start">
        <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-bold text-green-700 dark:text-green-300">실제로 이것만 하면 됩니다</p>
          <p className="text-xs text-green-700/80 dark:text-green-400 mt-0.5">
            아래 빌더에 PEM 경로·IP·토큰을 입력하면 명령어가 자동 생성됩니다. 복사해서 터미널에 붙여넣기만 하면 끝입니다.
          </p>
        </div>
      </div>
      <TelegramBotBuilder />

      {/* 참고용 섹션 구분 */}
      <div className="flex items-center gap-3 mb-8 mt-2">
        <Separator className="flex-1" />
        <span className="text-xs text-muted-foreground whitespace-nowrap px-2 bg-background border rounded-full py-0.5">
          아래는 참고 설명입니다
        </span>
        <Separator className="flex-1" />
      </div>

      {/* 2. 처음부터 복수 봇 설정 */}
      <section id="method-a" className="mb-12">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <CheckCircle2 className="h-6 w-6 text-green-500" />
          2. 처음부터 복수 봇 설정
        </h2>
        <p className="text-sm text-muted-foreground mb-6">
          EC2 서버를 처음 설정할 때 사용합니다. 환경 구성(Node.js 등) + 봇 등록을 한 번에 진행합니다.
        </p>

        <Card className="border-green-500 border-2 mb-6">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              단일 봇 등록 (처음 설정)
            </CardTitle>
            <CardDescription>봇이 1개일 때</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-xs text-muted-foreground">
              setup 스크립트로 서버 환경을 구성하고 봇 1개를 등록합니다.
            </p>
            <CodeBlockMultiLine
              lines={[
                'export URL=https://raw.githubusercontent.com/kstost/service-setup-cokacdir/refs/heads/main/basic_setup_ec2.sh',
                '',
                'ssh -t -i "$PEM" ubuntu@$IP "bash -ic \\"source <(curl -sL $URL) > /dev/null 2>&1 && npx -y service-setup-cokacdir $TOKEN && claude\\""',
              ]}
            />
            <div className="bg-muted/50 rounded-md p-3 text-xs text-muted-foreground">
              <p className="font-semibold text-foreground mb-1">동작 순서</p>
              <ol className="list-decimal list-inside space-y-0.5">
                <li>setup 스크립트 다운로드 및 실행 (Node.js 등 설치)</li>
                <li><code className="bg-muted px-1 rounded">npx service-setup-cokacdir TOKEN</code>으로 봇 등록</li>
                <li><code className="bg-muted px-1 rounded">claude</code> 실행</li>
              </ol>
            </div>
          </CardContent>
        </Card>

        <Card className="border-green-500 border-2 mb-6">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              복수 봇 등록 (처음 설정)
            </CardTitle>
            <CardDescription>봇이 2개 이상일 때 — 처음부터 같이 등록</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-xs text-muted-foreground">
              토큰을 공백으로 구분하여 나열하면 여러 봇을 한 번에 등록할 수 있습니다.
            </p>
            <CodeBlockMultiLine
              lines={[
                'export URL=https://raw.githubusercontent.com/kstost/service-setup-cokacdir/refs/heads/main/basic_setup_ec2.sh',
                '',
                'ssh -t -i "$PEM" ubuntu@$IP "bash -ic \\"source <(curl -sL $URL) > /dev/null 2>&1 && npx -y service-setup-cokacdir $TOKEN $TOKEN2 && claude\\""',
              ]}
            />
            <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-md p-3 text-xs">
              <p className="font-semibold text-green-700 dark:text-green-400 mb-1">핵심 포인트</p>
              <p className="text-green-700 dark:text-green-400">
                <code className="bg-green-100 dark:bg-green-900 px-1 rounded">$TOKEN $TOKEN2</code>처럼 토큰을 스페이스로 구분해서 나열하면 됩니다.
                3개라면 <code className="bg-green-100 dark:bg-green-900 px-1 rounded">$TOKEN $TOKEN2 $TOKEN3</code>
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator className="mb-10" />

      {/* 3. 이미 설정된 서버에 봇 추가 */}
      <section id="method-b" className="mb-12">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <Plus className="h-6 w-6 text-blue-500" />
          3. 이미 설정된 서버에 봇 추가
        </h2>
        <p className="text-sm text-muted-foreground mb-6">
          서버 환경은 이미 구성된 상태에서 봇만 추가로 등록할 때 사용합니다.
          setup 스크립트를 다시 실행할 필요 없이 <code className="bg-muted px-1 rounded text-xs">npx service-setup-cokacdir</code>만 실행합니다.
        </p>

        <Card className="border-blue-500 border-2 mb-6">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Plus className="h-4 w-4 text-blue-500" />
              봇 추가 등록 (기존 서버)
            </CardTitle>
            <CardDescription>setup 스크립트 없이 봇만 추가</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-xs text-muted-foreground">
              이미 설정된 서버라면 아래처럼 setup 스크립트(<code className="bg-muted px-1 rounded">source &lt;(curl ...)</code>) 없이 봇만 등록합니다.
            </p>
            <CodeBlock
              code={'ssh -t -i "$PEM" ubuntu@$IP "bash -ic \\"npx -y service-setup-cokacdir $TOKEN $TOKEN2\\""'}
            />
            <div className="grid sm:grid-cols-2 gap-3 mt-2">
              <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-md p-3 text-xs">
                <p className="font-semibold text-green-700 dark:text-green-400 mb-1">✅ 처음 설정과 차이점</p>
                <ul className="text-green-700 dark:text-green-400 space-y-0.5">
                  <li>• <code className="bg-green-100 dark:bg-green-900 px-1 rounded">source &lt;(curl ...)</code> 제거</li>
                  <li>• <code className="bg-green-100 dark:bg-green-900 px-1 rounded">export URL=...</code> 불필요</li>
                  <li>• 속도 훨씬 빠름</li>
                </ul>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-md p-3 text-xs">
                <p className="font-semibold text-yellow-700 dark:text-yellow-400 mb-1">⚠️ 주의</p>
                <ul className="text-yellow-700 dark:text-yellow-400 space-y-0.5">
                  <li>• 서버에 Node.js가 설치된 상태여야 함</li>
                  <li>• 이전에 처음 설정을 한 번은 실행했어야 함</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 비교 표 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">두 방법 한눈에 비교</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 pr-4 font-semibold text-muted-foreground text-xs">항목</th>
                    <th className="text-left py-2 pr-4 font-semibold text-green-600 text-xs">처음 설정</th>
                    <th className="text-left py-2 font-semibold text-blue-600 text-xs">봇만 추가</th>
                  </tr>
                </thead>
                <tbody className="text-xs text-muted-foreground">
                  <tr className="border-b">
                    <td className="py-2 pr-4 font-medium">setup 스크립트</td>
                    <td className="py-2 pr-4 text-green-600">✅ 포함</td>
                    <td className="py-2 text-blue-600">❌ 생략</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4 font-medium">export URL 필요</td>
                    <td className="py-2 pr-4 text-green-600">✅ 필요</td>
                    <td className="py-2 text-blue-600">❌ 불필요</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4 font-medium">복수 봇 지원</td>
                    <td className="py-2 pr-4">✅ 토큰 나열</td>
                    <td className="py-2">✅ 토큰 나열</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium">사용 시점</td>
                    <td className="py-2 pr-4">새 EC2 서버</td>
                    <td className="py-2">기존 서버</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator className="mb-10" />

      {/* 4. 주의사항 */}
      <section id="notes" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <AlertCircle className="h-6 w-6 text-primary" />
          4. 주의사항
        </h2>

        <Card>
          <CardContent className="pt-6 space-y-3">
            <div className="flex gap-3 text-sm">
              <AlertCircle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
              <p className="text-muted-foreground">
                <strong>봇 토큰은 절대 공개하지 마세요.</strong> 코드, 채팅, 스크린샷에 토큰이 포함되지 않도록 주의하세요.
                노출됐다면 BotFather에서 <code className="bg-muted px-1 rounded text-xs">/revoke</code>로 즉시 재발급하세요.
              </p>
            </div>
            <div className="flex gap-3 text-sm">
              <AlertCircle className="h-4 w-4 text-yellow-500 shrink-0 mt-0.5" />
              <p className="text-muted-foreground">
                <strong>따옴표 오류 주의:</strong> SSH 명령에서 <code className="bg-muted px-1 rounded text-xs">\"npx</code>처럼
                백슬래시와 따옴표 사이에 공백이 없어야 합니다. 공백이 있으면 <code className="bg-muted px-1 rounded text-xs">unexpected EOF</code> 오류가 발생합니다.
              </p>
            </div>
            <div className="flex gap-3 text-sm">
              <AlertCircle className="h-4 w-4 text-yellow-500 shrink-0 mt-0.5" />
              <p className="text-muted-foreground">
                <strong>locale 경고는 무시해도 됩니다.</strong> <code className="bg-muted px-1 rounded text-xs">setlocale: LC_ALL: cannot change locale (ko_KR.UTF-8)</code>
                는 서버에 한국어 로캘이 없어서 나타나는 경고로, 동작에는 영향이 없습니다.
              </p>
            </div>
            <div className="flex gap-3 text-sm">
              <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
              <p className="text-muted-foreground">
                PEM 파일 권한은 <code className="bg-muted px-1 rounded text-xs">chmod 0600 secret.pem</code>으로 설정해야 SSH 접속이 가능합니다.
              </p>
            </div>
            <div className="flex gap-3 text-sm">
              <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
              <p className="text-muted-foreground">
                환경변수(<code className="bg-muted px-1 rounded text-xs">export PEM=...</code>)는 터미널 세션이 닫히면 초기화됩니다.
                새 터미널을 열 때마다 다시 입력하거나 <code className="bg-muted px-1 rounded text-xs">~/.zshrc</code>에 등록하세요.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 관련 페이지 */}
      <div className="border border-muted rounded-lg p-4 flex items-center justify-between gap-4 text-sm">
        <p className="text-muted-foreground">
          Claude Code 생태계를 더 풍부하게 활용하고 싶다면 함께 쓰면 좋은 외부 도구들을 확인해보세요.
        </p>
        <a
          href="/plugins-guide#featured-creators"
          className="text-primary hover:underline shrink-0 font-medium"
        >
          외부 도구 모음 →
        </a>
      </div>
    </div>
  );
}
