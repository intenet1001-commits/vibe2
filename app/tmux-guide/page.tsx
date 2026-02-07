import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CodeBlock, CodeBlockMultiLine } from "@/components/ui/code-block";
import { AlertCircle, CheckCircle2, Terminal } from "lucide-react";
import { PageNavigation } from "@/components/page-navigation";

export const metadata: Metadata = {
  title: "Claude Code + tmux 멀티 에이전트 가이드 - AI 오케스트레이팅",
  description: "Claude Code에서 tmux로 여러 AI 에이전트를 병렬로 실행하는 방법. Agent Teams 설정부터 실전까지.",
};

export default function TmuxGuide() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Claude Code + tmux Agent Teams 가이드
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          여러 AI 에이전트를 동시에 실행하여 작업 효율 극대화
        </p>
        <div className="flex gap-2 justify-center flex-wrap mt-6">
          <Badge variant="outline">Claude Code</Badge>
          <Badge variant="outline">tmux</Badge>
          <Badge variant="outline">Agent Teams</Badge>
          <Badge variant="outline">병렬 처리</Badge>
          <Badge variant="outline">iTerm2</Badge>
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
            <a href="#iterm-session" className="text-primary hover:underline">3. iTerm2 세션 관리</a>
            <a href="#multi-agent" className="text-primary hover:underline">4. 멀티 에이전트 실행</a>
            <a href="#troubleshooting" className="text-primary hover:underline">5. 문제 해결</a>
            <a href="#commands" className="text-primary hover:underline">6. 유용한 명령어</a>
            <a href="#checklist" className="text-primary hover:underline">7. 요약 체크리스트</a>
          </div>
        </CardContent>
      </Card>

      {/* 1. 사전 준비 */}
      <section id="prerequisites" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Terminal className="h-6 w-6 text-primary" />
          1. 사전 준비
        </h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>tmux 설치 확인</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              먼저 tmux가 설치되어 있는지 확인합니다.
            </p>
            <CodeBlock code="tmux -V" />
            <p className="text-sm text-muted-foreground">
              macOS에서 설치되어 있지 않다면:
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
              iTerm2는 tmux <code className="text-xs bg-muted px-1.5 py-0.5 rounded">-CC</code> (Control Mode)를 지원하여
              tmux 세션을 네이티브 창/탭으로 통합 관리할 수 있습니다.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      {/* 2. Claude Code 설정 */}
      <section id="claude-settings" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">2. Claude Code 설정</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>설정 파일 위치</CardTitle>
          </CardHeader>
          <CardContent>
            <CodeBlock code="~/.claude/settings.json" />
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>추가할 설정</CardTitle>
            <CardDescription>다음 두 항목을 settings.json에 추가합니다</CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlockMultiLine
              lines={[
                '{',
                '  // tmux 멀티패널 모드 활성화',
                '  "teammateMode": "tmux",',
                '',
                '  // 실험적 에이전트 팀 기능 활성화',
                '  "env": {',
                '    "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1"',
                '  }',
                '}'
              ]}
              language="jsonc"
            />
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>설정값 설명</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 px-4">설정</th>
                    <th className="text-left py-2 px-4">값</th>
                    <th className="text-left py-2 px-4">설명</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 px-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">teammateMode</code></td>
                    <td className="py-2 px-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">"tmux"</code></td>
                    <td className="py-2 px-4">여러 에이전트가 tmux 패널에서 병렬 작업</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">teammateMode</code></td>
                    <td className="py-2 px-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">"inprogress"</code></td>
                    <td className="py-2 px-4">단일 패널에서 순차 작업 (기본값)</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">EXPERIMENTAL_AGENT_TEAMS</code></td>
                    <td className="py-2 px-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">"1"</code></td>
                    <td className="py-2 px-4">에이전트 팀 기능 활성화 (실험적)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>tmux vs inprogress 차이</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <p className="font-medium mb-1">✅ tmux</p>
              <p className="text-sm text-muted-foreground">
                여러 작업을 동시에 병렬 처리. 예: 한 패널에서 코드 작성, 다른 패널에서 테스트 실행
              </p>
            </div>
            <div>
              <p className="font-medium mb-1">⏳ inprogress</p>
              <p className="text-sm text-muted-foreground">
                하나의 흐름에서 순차 처리. 단순 작업에 적합하지만 병렬성 없음
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      {/* 3. iTerm2 세션 관리 */}
      <section id="iterm-session" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">3. iTerm2에서 tmux 세션 관리</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>새 세션 생성</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <CodeBlock code="tmux -CC new-session -s claude" />
            <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
              <li><code className="text-xs bg-muted px-1.5 py-0.5 rounded">-CC</code>: iTerm2 Control Mode (네이티브 창/탭 통합)</li>
              <li><code className="text-xs bg-muted px-1.5 py-0.5 rounded">-s claude</code>: 세션 이름을 "claude"로 지정</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>기존 세션에 연결 (attach)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <CodeBlock code="tmux -CC attach -t claude" />
            <div className="bg-blue-50 dark:bg-blue-950 border-l-4 border-blue-500 p-4 text-sm">
              <p className="text-blue-900 dark:text-blue-100">
                💡 attach 하면 <strong>새로운 iTerm2 창</strong>이 열립니다.
                탭 제목이 <code className="text-xs bg-muted px-1.5 py-0.5 rounded">zsh</code>로 표시되는 건 정상입니다
                (tmux 안에서 zsh가 실행 중이라는 의미).
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>tmux 안에 있는지 확인</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <CodeBlock code="echo $TMUX" />
            <p className="text-sm text-muted-foreground">
              값이 출력되면 tmux 세션 안에 있는 것입니다.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>세션 중복 에러 해결</CardTitle>
            <CardDescription>
              <code className="text-xs bg-muted px-1.5 py-0.5 rounded">duplicate session</code> 에러가 뜨면
              이미 해당 이름의 세션이 존재하는 것입니다.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm font-medium mb-2">방법 1: 기존 세션에 연결</p>
              <CodeBlock code="tmux -CC attach -t claude" />
            </div>
            <div>
              <p className="text-sm font-medium mb-2">방법 2: 기존 세션 삭제 후 새로 생성</p>
              <CodeBlock code="tmux kill-session -t claude && tmux -CC new-session -s claude" />
            </div>
            <div>
              <p className="text-sm font-medium mb-2">방법 3: 다른 이름으로 새 세션 생성</p>
              <CodeBlock code="tmux -CC new-session -s claude2" />
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>세션 목록 확인</CardTitle>
            </CardHeader>
            <CardContent>
              <CodeBlock code="tmux list-sessions" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>세션 종료</CardTitle>
            </CardHeader>
            <CardContent>
              <CodeBlock code="tmux kill-session -t claude" />
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-12" />

      {/* 4. 멀티 에이전트 실행 */}
      <section id="multi-agent" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">4. 멀티 에이전트 실행하기</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>기본 실행 흐름</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm font-medium mb-2">1️⃣ tmux 세션 생성 또는 연결:</p>
              <CodeBlock code="tmux -CC new-session -s claude" />
            </div>
            <div>
              <p className="text-sm font-medium mb-2">2️⃣ 열린 창에서 Claude Code 실행:</p>
              <CodeBlock code="claude" />
            </div>
            <div>
              <p className="text-sm font-medium mb-2">3️⃣ 추가 에이전트를 띄우려면 <strong>새 iTerm2 탭/창</strong>을 열고 같은 세션에 연결:</p>
              <CodeBlock code="tmux -CC attach -t claude" />
            </div>
            <div>
              <p className="text-sm font-medium mb-2">4️⃣ 새로 열린 창에서도 Claude Code 실행:</p>
              <CodeBlock code="claude" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>별도 세션으로 에이전트 분리</CardTitle>
            <CardDescription>각 에이전트를 독립 세션으로 운영할 수도 있습니다</CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlockMultiLine
              lines={[
                'tmux -CC new-session -s agent1',
                'tmux -CC new-session -s agent2'
              ]}
            />
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      {/* 5. 문제 해결 */}
      <section id="troubleshooting" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <AlertCircle className="h-6 w-6 text-yellow-500" />
          5. 자주 발생하는 문제와 해결
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
                    <td className="py-3 px-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">duplicate session: claude</code></td>
                    <td className="py-3 px-4">이미 같은 이름의 세션 존재</td>
                    <td className="py-3 px-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">tmux -CC attach -t claude</code> 로 연결</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">%exit</code> 후 아무 일도 안 일어남</td>
                    <td className="py-3 px-4">iTerm2가 새 창을 열었음</td>
                    <td className="py-3 px-4">다른 iTerm2 창/탭 확인</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">탭 제목이 <code className="text-xs bg-muted px-1.5 py-0.5 rounded">zsh</code>로 표시</td>
                    <td className="py-3 px-4">정상 동작</td>
                    <td className="py-3 px-4">tmux <code className="text-xs bg-muted px-1.5 py-0.5 rounded">-CC</code> 모드에서는 네이티브 탭으로 표시됨</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">새 창에서 Claude Code 안 열림</td>
                    <td className="py-3 px-4">수동 실행 필요</td>
                    <td className="py-3 px-4">새 창에서 <code className="text-xs bg-muted px-1.5 py-0.5 rounded">claude</code> 명령어 입력</td>
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

      {/* 6. 유용한 명령어 */}
      <section id="commands" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">6. 유용한 tmux 명령어 모음</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>세션 관리</CardTitle>
          </CardHeader>
          <CardContent>
            <CodeBlockMultiLine
              lines={[
                '# 세션 관리',
                'tmux list-sessions                    # 세션 목록',
                'tmux -CC new-session -s <이름>         # 새 세션 (iTerm2 통합)',
                'tmux -CC attach -t <이름>             # 세션 연결 (iTerm2 통합)',
                'tmux kill-session -t <이름>           # 세션 종료',
                'tmux kill-server                      # 모든 세션 종료'
              ]}
            />
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>일반 tmux (iTerm2 통합 없이)</CardTitle>
          </CardHeader>
          <CardContent>
            <CodeBlockMultiLine
              lines={[
                'tmux new-session -s <이름>            # 새 세션',
                'tmux attach -t <이름>                 # 세션 연결'
              ]}
            />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="bg-blue-50 dark:bg-blue-950 border-l-4 border-blue-500 p-4 text-sm">
              <p className="text-blue-900 dark:text-blue-100">
                💡 iTerm2에서는 항상 <code className="text-xs bg-muted px-1.5 py-0.5 rounded">-CC</code> 옵션을 사용하세요.
                일반 tmux 명령어도 작동하지만, <code className="text-xs bg-muted px-1.5 py-0.5 rounded">-CC</code>를 쓰면
                네이티브 창/탭으로 관리할 수 있어 훨씬 편리합니다.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      {/* 7. 체크리스트 */}
      <section id="checklist" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <CheckCircle2 className="h-6 w-6 text-green-500" />
          7. 요약 체크리스트
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
                <span className="text-sm"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">~/.claude/settings.json</code>에 <code className="text-xs bg-muted px-1.5 py-0.5 rounded">teammateMode: "tmux"</code> 추가</span>
              </li>
              <li className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" />
                <span className="text-sm"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">~/.claude/settings.json</code>에 <code className="text-xs bg-muted px-1.5 py-0.5 rounded">CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS: "1"</code> 추가</span>
              </li>
              <li className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" />
                <span className="text-sm"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">tmux -CC new-session -s claude</code>로 세션 생성</span>
              </li>
              <li className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" />
                <span className="text-sm">열린 창에서 <code className="text-xs bg-muted px-1.5 py-0.5 rounded">claude</code> 실행</span>
              </li>
              <li className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" />
                <span className="text-sm">추가 에이전트 필요시 새 탭에서 <code className="text-xs bg-muted px-1.5 py-0.5 rounded">tmux -CC attach -t claude</code> → <code className="text-xs bg-muted px-1.5 py-0.5 rounded">claude</code></span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <PageNavigation currentPath="/tmux-guide" />
    </div>
  );
}
