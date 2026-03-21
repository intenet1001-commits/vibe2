import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock, CodeBlockMultiLine } from "@/components/ui/code-block";
import { AlertCircle, CheckCircle2, Terminal } from "lucide-react";
import { PageNavigation } from "@/components/page-navigation";
import { TmuxSessionBuilder } from "@/components/tmux-session-builder";

export const metadata: Metadata = {
  title: "Agent Teams 가이드 - AI 오케스트레이터",
  description: "여러 AI 에이전트를 팀으로 운영하는 방법. Claude Code Agent Teams 설정부터 실전까지.",
};

export default function TmuxGuide() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Agent Teams 가이드
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          여러 AI 에이전트를 팀으로 운영하여 작업 효율 극대화
        </p>
        <div className="flex gap-2 justify-center flex-wrap mt-6">
          <Badge variant="outline">Claude Code</Badge>
          <Badge variant="outline">tmux (Mac/Linux)</Badge>
          <Badge variant="outline">WSL2 (Windows)</Badge>
          <Badge variant="outline">Agent Teams</Badge>
          <Badge variant="outline">병렬 처리</Badge>
        </div>
      </div>

      {/* 목차 */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>목차</CardTitle>
          <CardDescription>원하는 섹션으로 빠르게 이동하세요</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            <a href="#prerequisites" className="text-primary hover:underline">1. 사전 준비</a>
            <a href="#claude-settings" className="text-primary hover:underline">2. Claude Code 설정</a>
            <a href="#multi-agent" className="text-primary hover:underline">3. 멀티 에이전트 실행</a>
            <a href="#session-builder" className="text-primary hover:underline">↳ 인터랙티브 환경 빌더</a>
            <a href="#troubleshooting" className="text-primary hover:underline">4. 문제 해결</a>
            <a href="#commands" className="text-primary hover:underline">5. 유용한 명령어</a>
            <a href="#checklist" className="text-primary hover:underline">6. 요약 체크리스트</a>
          </div>
        </CardContent>
      </Card>

      {/* 1. 사전 준비 */}
      <section id="prerequisites" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Terminal className="h-6 w-6 text-primary" />
          1. 사전 준비
        </h2>

        <Tabs defaultValue="mac">
          <TabsList className="mb-4">
            <TabsTrigger value="mac">macOS / Linux</TabsTrigger>
            <TabsTrigger value="windows">Windows (WSL2)</TabsTrigger>
          </TabsList>

          <TabsContent value="mac">
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>tmux 설치 확인</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <CodeBlock code="tmux -V" />
                  <p className="text-sm text-muted-foreground">
                    설치되어 있지 않다면:
                  </p>
                  <CodeBlock code="brew install tmux" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>iTerm2 사용 권장</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    <kbd className="bg-muted px-1.5 py-0.5 rounded text-xs">Cmd+T</kbd>로
                    탭을 추가하며 에이전트별 터미널을 관리할 수 있습니다.
                  </p>
                  <div className="mt-3 bg-yellow-50 dark:bg-yellow-950 border-l-4 border-yellow-500 p-3 text-xs text-yellow-800 dark:text-yellow-200 rounded-r">
                    ⚠️ <code className="bg-yellow-100 dark:bg-yellow-900 px-1 rounded">tmux -CC</code> 옵션은
                    Command Menu를 띄워 입력이 막히므로 사용하지 마세요.
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="windows">
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>1단계: WSL2 활성화</CardTitle>
                  <CardDescription>PowerShell을 관리자 권한으로 실행 후 입력</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <CodeBlock code="wsl --install" />
                  <p className="text-sm text-muted-foreground">
                    재부팅 후 Ubuntu가 자동 설치됩니다. Windows 11은 기본 내장되어 있습니다.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>2단계: Ubuntu에서 tmux 설치</CardTitle>
                  <CardDescription>WSL2 Ubuntu 터미널에서 실행</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <CodeBlock code="sudo apt update && sudo apt install tmux -y" />
                  <CodeBlock code="tmux -V" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>3단계: Claude Code 설치 (WSL 내부)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <CodeBlock code="npm install -g @anthropic-ai/claude-code" />
                  <p className="text-sm text-muted-foreground">
                    이후 tmux 사용법은 Mac/Linux와 동일합니다. Windows Terminal에서 WSL2 탭을 열어 사용하세요.
                  </p>
                </CardContent>
              </Card>

              <div className="bg-blue-50 dark:bg-blue-950 border-l-4 border-blue-500 p-4 text-sm rounded-r">
                <p className="text-blue-900 dark:text-blue-100">
                  💡 Windows Terminal(<kbd className="bg-blue-100 dark:bg-blue-900 px-1 rounded text-xs">Ctrl+Shift+T</kbd>)에서
                  Ubuntu 프로필로 새 탭을 열어 에이전트별 터미널을 관리하세요.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <Separator className="my-12" />

      {/* 2. Claude Code 설정 */}
      <section id="claude-settings" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">2. Claude Code 설정</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>설정 파일</CardTitle>
            <CardDescription><code className="text-xs bg-muted px-1.5 py-0.5 rounded">~/.claude/settings.json</code>에 아래 두 항목을 추가합니다</CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlockMultiLine
              lines={[
                '{',
                '  "teammateMode": "tmux",',
                '  "env": {',
                '    "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1"',
                '  }',
                '}'
              ]}
              language="jsonc"
            />
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">teammateMode: &quot;tmux&quot;</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                여러 에이전트가 tmux 세션에서 병렬 작업합니다.
                <code className="text-xs bg-muted px-1 py-0.5 rounded ml-1">&quot;inprogress&quot;</code>는
                단일 흐름 순차 처리 (기본값).
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">EXPERIMENTAL_AGENT_TEAMS</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                에이전트 팀 기능을 활성화합니다. 현재 실험적 기능이므로 env 변수로 활성화가 필요합니다.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-12" />

      {/* 3. 멀티 에이전트 실행 */}
      <section id="multi-agent" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">3. 멀티 에이전트 실행하기</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>기본 실행 흐름</CardTitle>
            <CardDescription>에이전트마다 별도 tmux 세션 + 별도 iTerm2 탭을 사용합니다</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm font-medium mb-2">1️⃣ 첫 번째 탭 — tmux 세션 생성 후 Claude 실행:</p>
              <CodeBlockMultiLine lines={["tmux new-session -s claude", "claude"]} />
            </div>
            <div>
              <p className="text-sm font-medium mb-2">
                2️⃣ <kbd className="bg-muted px-1.5 py-0.5 rounded text-xs">Cmd+T</kbd>로 새 탭 열기 — 다른 이름의 세션 생성 후 Claude 실행:
              </p>
              <CodeBlockMultiLine lines={["tmux new-session -s claude2", "claude"]} />
            </div>
            <div>
              <p className="text-sm font-medium mb-2">3️⃣ 추가 에이전트마다 반복 (<kbd className="bg-muted px-1.5 py-0.5 rounded text-xs">Cmd+T</kbd> → 새 세션 → claude):</p>
              <CodeBlockMultiLine lines={["tmux new-session -s claude3", "claude"]} />
            </div>

            <div className="bg-blue-50 dark:bg-blue-950 border-l-4 border-blue-500 p-4 text-sm rounded-r">
              <p className="text-blue-900 dark:text-blue-100">
                💡 각 탭은 독립된 tmux 세션이므로 에이전트가 서로 간섭하지 않습니다.
                세션 이름은 자유롭게 지정해도 됩니다.
              </p>
            </div>
          </CardContent>
        </Card>

        <div id="session-builder" className="mt-8">
          <h3 className="text-lg font-semibold mb-3">인터랙티브 환경 빌더</h3>
          <p className="text-sm text-muted-foreground mb-4">
            에이전트 수와 세션 이름을 설정하면 각 탭에서 실행할 명령어를 자동으로 생성합니다.
          </p>
          <TmuxSessionBuilder />
        </div>
      </section>

      <Separator className="my-12" />

      {/* 4. 문제 해결 */}
      <section id="troubleshooting" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <AlertCircle className="h-6 w-6 text-yellow-500" />
          4. 자주 발생하는 문제와 해결
        </h2>

        <Card>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-semibold">문제</th>
                    <th className="text-left py-3 px-4 font-semibold">원인</th>
                    <th className="text-left py-3 px-4 font-semibold">해결</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="py-3 px-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">tmux -CC</code> 실행 시 Command Menu만 뜨고 입력 안 됨</td>
                    <td className="py-3 px-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">-CC</code> 옵션이 iTerm2 Control Mode 진입</td>
                    <td className="py-3 px-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">-CC</code> 빼고 <code className="text-xs bg-muted px-1.5 py-0.5 rounded">tmux new-session -s claude</code> 사용</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">duplicate session: claude</code></td>
                    <td className="py-3 px-4">같은 이름의 세션이 이미 존재</td>
                    <td className="py-3 px-4">다른 이름 사용 (<code className="text-xs bg-muted px-1.5 py-0.5 rounded">claude2</code>) 또는 <code className="text-xs bg-muted px-1.5 py-0.5 rounded">tmux kill-session -t claude</code> 후 재생성</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">tmux 안에서 실행 중인지 모르겠음</td>
                    <td className="py-3 px-4">—</td>
                    <td className="py-3 px-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">echo $TMUX</code> — 값이 출력되면 tmux 세션 안</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">새 창에서 Claude Code 안 열림</td>
                    <td className="py-3 px-4">수동 실행 필요</td>
                    <td className="py-3 px-4">tmux 세션 진입 후 <code className="text-xs bg-muted px-1.5 py-0.5 rounded">claude</code> 명령어 직접 입력</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">tmux 명령어가 안 됨</td>
                    <td className="py-3 px-4">tmux 미설치</td>
                    <td className="py-3 px-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">brew install tmux</code></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      {/* 5. 유용한 명령어 */}
      <section id="commands" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">5. 유용한 tmux 명령어</h2>

        <Card>
          <CardContent className="pt-6">
            <CodeBlockMultiLine
              lines={[
                '# 세션 생성 (쉘 프롬프트로 바로 진입)',
                'tmux new-session -s <이름>',
                '',
                '# 세션 목록 확인',
                'tmux list-sessions',
                '',
                '# 세션 종료',
                'tmux kill-session -t <이름>',
                '',
                '# 모든 세션 종료',
                'tmux kill-server',
                '',
                '# tmux 안에 있는지 확인 (값이 출력되면 tmux 내부)',
                'echo $TMUX',
              ]}
            />
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      {/* 6. 체크리스트 */}
      <section id="checklist" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <CheckCircle2 className="h-6 w-6 text-green-500" />
          6. 요약 체크리스트
        </h2>

        <Card>
          <CardContent className="pt-6">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" />
                <span className="text-sm">tmux 설치 확인 (<code className="text-xs bg-muted px-1.5 py-0.5 rounded">tmux -V</code>)</span>
              </li>
              <li className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" />
                <span className="text-sm"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">~/.claude/settings.json</code>에 <code className="text-xs bg-muted px-1.5 py-0.5 rounded">teammateMode: &quot;tmux&quot;</code> 추가</span>
              </li>
              <li className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" />
                <span className="text-sm"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS: &quot;1&quot;</code> 추가</span>
              </li>
              <li className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" />
                <span className="text-sm"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">tmux new-session -s claude</code>로 세션 생성 후 <code className="text-xs bg-muted px-1.5 py-0.5 rounded">claude</code> 실행</span>
              </li>
              <li className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" />
                <span className="text-sm">추가 에이전트: <kbd className="bg-muted px-1.5 py-0.5 rounded text-xs">Cmd+T</kbd> → <code className="text-xs bg-muted px-1.5 py-0.5 rounded">tmux new-session -s claude2</code> → <code className="text-xs bg-muted px-1.5 py-0.5 rounded">claude</code></span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <PageNavigation currentPath="/tmux-guide" />
    </div>
  );
}
