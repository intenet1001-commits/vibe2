import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CodeBlock, CodeBlockMultiLine } from "@/components/ui/code-block";

export const metadata: Metadata = {
  title: "Claude Code 사용 가이드 - AI 오케스트레이팅",
  description: "Claude Code로 대화하듯 코딩하기. 효과적인 프롬프트 작성법, 주요 명령어, 에러 대처법까지.",
};

export default function ClaudeCodeGuide() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">Claude Code 사용 가이드</h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          AI와 대화하듯 코딩하는 새로운 방법
        </p>
        <div className="flex gap-2 justify-center flex-wrap mt-6">
          <Badge variant="outline">Claude Code</Badge>
          <Badge variant="outline">AI</Badge>
          <Badge variant="outline">프롬프트</Badge>
          <Badge variant="outline">자동화</Badge>
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
            <a href="#what-is-claude-code" className="text-primary hover:underline">Claude Code란?</a>
            <a href="#prerequisites" className="text-primary hover:underline">시작하기 전에</a>
            <a href="#first-run" className="text-primary hover:underline">첫 번째 실행</a>
            <a href="#prompt-guide" className="text-primary hover:underline">효과적인 프롬프트 작성법</a>
            <a href="#commands" className="text-primary hover:underline">주요 명령어</a>
            <a href="#understanding-code" className="text-primary hover:underline">생성된 코드 이해하기</a>
            <a href="#error-handling" className="text-primary hover:underline">에러 발생 시 대처법</a>
            <a href="#practical-example" className="text-primary hover:underline">실전 예시: 로그인 페이지 만들기</a>
            <a href="#git-workflow" className="text-primary hover:underline">Claude Code + Git 워크플로우</a>
            <a href="#tips" className="text-primary hover:underline">유용한 팁</a>
          </div>
        </CardContent>
      </Card>

      {/* Claude Code란? */}
      <Card className="mb-8" id="what-is-claude-code">
        <CardHeader>
          <CardTitle>Claude Code란?</CardTitle>
          <CardDescription>AI가 직접 코드를 작성하는 새로운 개발 방식</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground">
              Claude Code는 Anthropic에서 만든 AI 코딩 어시스턴트입니다.
              터미널에서 자연어로 대화하듯 요청하면, AI가 직접 코드를 작성하고 파일을 생성하고 수정합니다.
            </p>
          </div>

          <Separator />

          <div>
            <h4 className="font-semibold mb-3">기존 코딩 방법과의 차이점</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-muted p-4 rounded-lg">
                <p className="font-semibold text-sm mb-2">기존 방식</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>프로그래밍 언어를 직접 배워야 함</li>
                  <li>코드를 한 줄씩 직접 작성</li>
                  <li>문법 오류를 직접 찾아 수정</li>
                  <li>라이브러리 문서를 직접 읽고 적용</li>
                </ul>
              </div>
              <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg">
                <p className="font-semibold text-sm mb-2">Claude Code 방식</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>한국어로 원하는 것을 설명</li>
                  <li>AI가 코드를 자동 생성</li>
                  <li>에러 메시지를 보여주면 자동 수정</li>
                  <li>라이브러리 선택과 적용도 AI가 처리</li>
                </ul>
              </div>
            </div>
          </div>

          <Separator />

          <div className="bg-muted p-4 rounded-lg">
            <p className="text-sm font-semibold">
              프로그래밍 경험이 없어도 자연어로 웹 서비스를 만들 수 있습니다.
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              물론 기본적인 개발 개념을 이해하면 더 정확한 요청이 가능하지만,
              &quot;로그인 페이지 만들어줘&quot;와 같은 간단한 요청만으로도 동작하는 코드를 얻을 수 있습니다.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* 시작하기 전에 */}
      <Card className="mb-8" id="prerequisites">
        <CardHeader>
          <CardTitle>시작하기 전에</CardTitle>
          <CardDescription>Claude Code를 사용하기 위한 준비사항</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">1. Claude Pro 또는 Max 구독</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Claude Code를 사용하려면 Claude Pro(월 $20) 또는 Max 구독이 필요합니다.
            </p>
            <a
              href="https://claude.ai/upgrade"
              className="text-primary hover:underline text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://claude.ai/upgrade 에서 구독하기
            </a>
          </div>

          <Separator />

          <div>
            <h4 className="font-semibold mb-2">2. Node.js 설치</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Claude Code는 npm으로 설치하므로 Node.js가 필요합니다.
            </p>
            <a href="/setup-guide" className="text-primary hover:underline text-sm">
              설치 가이드 바로가기 &rarr;
            </a>
          </div>

          <Separator />

          <div>
            <h4 className="font-semibold mb-2">3. 터미널 기본 사용법</h4>
            <p className="text-sm text-muted-foreground mb-2">
              터미널에서 폴더 이동, 명령어 입력 등 기본적인 사용법을 알아두면 좋습니다.
            </p>
            <a href="/iterm-guide" className="text-primary hover:underline text-sm">
              iTerm 가이드 바로가기 &rarr;
            </a>
          </div>

          <Separator />

          <div>
            <h4 className="font-semibold mb-2">4. Claude Code 설치</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Node.js가 설치되어 있다면, 아래 명령어로 Claude Code를 설치합니다.
            </p>
            <CodeBlock code="npm install -g @anthropic-ai/claude-code" />
          </div>
        </CardContent>
      </Card>

      {/* 첫 번째 실행 */}
      <Card className="mb-8" id="first-run">
        <CardHeader>
          <CardTitle>첫 번째 실행</CardTitle>
          <CardDescription>프로젝트 폴더에서 Claude Code를 시작하는 방법</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Claude Code 시작하기</h4>
            <p className="text-sm text-muted-foreground mb-3">
              작업하고 싶은 프로젝트 폴더로 이동한 후 <code className="bg-muted px-1 rounded">claude</code> 명령어를 입력합니다.
            </p>
            <CodeBlockMultiLine lines={[
              "cd my-project",
              "claude"
            ]} />
          </div>

          <Separator />

          <div>
            <h4 className="font-semibold mb-2">초기 설정: /init 명령어</h4>
            <p className="text-sm text-muted-foreground mb-3">
              처음 프로젝트에서 Claude Code를 사용할 때 <code className="bg-muted px-1 rounded">/init</code> 명령어를 실행하면
              프로젝트에 맞는 CLAUDE.md 파일이 생성됩니다.
            </p>
            <CodeBlock code="/init" />
            <div className="bg-muted p-4 rounded-lg mt-3">
              <p className="text-sm font-semibold mb-2">CLAUDE.md 파일이란?</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>프로젝트의 구조와 규칙을 Claude에게 알려주는 설정 파일</li>
                <li>사용하는 기술 스택, 코딩 컨벤션 등을 기록</li>
                <li>이 파일이 잘 작성되어 있을수록 Claude가 더 정확한 코드를 생성</li>
              </ul>
            </div>
          </div>

          <Separator />

          <div>
            <h4 className="font-semibold mb-2">새 프로젝트 시작하기</h4>
            <p className="text-sm text-muted-foreground mb-3">
              빈 폴더에서 시작하는 경우에도 Claude에게 프로젝트 생성을 요청할 수 있습니다.
            </p>
            <CodeBlockMultiLine lines={[
              "mkdir my-new-project",
              "cd my-new-project",
              "claude",
              "",
              "# Claude에게 요청:",
              "# \"Next.js 프로젝트를 생성해줘. TypeScript와 Tailwind CSS를 사용해줘\""
            ]} />
          </div>
        </CardContent>
      </Card>

      {/* 효과적인 프롬프트 작성법 */}
      <section className="mb-8" id="prompt-guide">
        <h2 className="text-2xl font-bold mb-6 text-center">효과적인 프롬프트 작성법</h2>
        <p className="text-center text-muted-foreground mb-8">
          Claude에게 요청하는 방법에 따라 결과물의 품질이 달라집니다
        </p>

        <div className="space-y-6">
          {/* 좋은 예시 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-green-500 text-xl">O</span> 좋은 프롬프트 예시
              </CardTitle>
              <CardDescription>구체적이고 명확한 요청</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <p className="text-sm">
                  &quot;로그인 페이지를 만들어줘. 이메일과 비밀번호 입력 필드가 있고, shadcn/ui Button 컴포넌트를 사용해줘&quot;
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <p className="text-sm">
                  &quot;현재 홈페이지에 다크모드 토글 버튼을 추가해줘. next-themes 라이브러리를 사용해줘&quot;
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <p className="text-sm">
                  &quot;사용자 목록을 보여주는 테이블 컴포넌트를 만들어줘. 정렬과 검색 기능도 포함해줘&quot;
                </p>
              </div>
            </CardContent>
          </Card>

          {/* 나쁜 예시 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-red-500 text-xl">X</span> 나쁜 프롬프트 예시
              </CardTitle>
              <CardDescription>너무 모호하거나 범위가 불분명한 요청</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="border-l-4 border-red-500 pl-4 py-2">
                <p className="text-sm">&quot;사이트 만들어줘&quot;</p>
                <p className="text-xs text-muted-foreground mt-1">문제: 어떤 사이트인지, 어떤 기능이 필요한지 알 수 없음</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4 py-2">
                <p className="text-sm">&quot;전부 고쳐줘&quot;</p>
                <p className="text-xs text-muted-foreground mt-1">문제: 무엇을 어떻게 고쳐야 하는지 범위가 불명확</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4 py-2">
                <p className="text-sm">&quot;예쁘게 해줘&quot;</p>
                <p className="text-xs text-muted-foreground mt-1">문제: &quot;예쁘다&quot;의 기준이 사람마다 다름. 구체적인 디자인 요구사항 필요</p>
              </div>
            </CardContent>
          </Card>

          {/* 프롬프트 작성 팁 */}
          <Card>
            <CardHeader>
              <CardTitle>프롬프트 작성 팁</CardTitle>
              <CardDescription>더 좋은 결과를 얻기 위한 요령</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex gap-3">
                <span className="text-primary font-bold shrink-0">1.</span>
                <div>
                  <p className="text-sm font-semibold">구체적으로 요청하세요</p>
                  <p className="text-sm text-muted-foreground">
                    어떤 컴포넌트를 사용할지, 어떤 스타일을 원하는지 명시하세요.
                  </p>
                </div>
              </div>
              <Separator />
              <div className="flex gap-3">
                <span className="text-primary font-bold shrink-0">2.</span>
                <div>
                  <p className="text-sm font-semibold">사용할 라이브러리를 명시하세요</p>
                  <p className="text-sm text-muted-foreground">
                    &quot;shadcn/ui를 사용해줘&quot;, &quot;Tailwind CSS로 스타일링해줘&quot;처럼 기술 스택을 알려주세요.
                  </p>
                </div>
              </div>
              <Separator />
              <div className="flex gap-3">
                <span className="text-primary font-bold shrink-0">3.</span>
                <div>
                  <p className="text-sm font-semibold">한 번에 하나의 기능을 요청하세요</p>
                  <p className="text-sm text-muted-foreground">
                    &quot;로그인, 회원가입, 프로필, 설정 페이지를 다 만들어줘&quot;보다
                    &quot;먼저 로그인 페이지를 만들어줘&quot;가 더 좋은 결과를 얻습니다.
                  </p>
                </div>
              </div>
              <Separator />
              <div className="flex gap-3">
                <span className="text-primary font-bold shrink-0">4.</span>
                <div>
                  <p className="text-sm font-semibold">기존 코드와의 일관성을 요청하세요</p>
                  <p className="text-sm text-muted-foreground">
                    &quot;기존 페이지 스타일과 동일하게 만들어줘&quot;라고 요청하면 프로젝트 일관성이 유지됩니다.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 주요 명령어 */}
      <Card className="mb-8" id="commands">
        <CardHeader>
          <CardTitle>주요 명령어</CardTitle>
          <CardDescription>Claude Code에서 자주 사용하는 명령어 모음</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            <div className="flex items-start gap-4 p-3 bg-muted rounded-lg">
              <code className="bg-background px-2 py-1 rounded text-sm font-bold shrink-0">/init</code>
              <div>
                <p className="text-sm font-semibold">프로젝트 초기 설정</p>
                <p className="text-sm text-muted-foreground">CLAUDE.md 파일을 생성하여 프로젝트 구조를 분석합니다.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-3 bg-muted rounded-lg">
              <code className="bg-background px-2 py-1 rounded text-sm font-bold shrink-0">/help</code>
              <div>
                <p className="text-sm font-semibold">도움말 보기</p>
                <p className="text-sm text-muted-foreground">사용 가능한 명령어와 기능 목록을 확인합니다.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-3 bg-muted rounded-lg">
              <code className="bg-background px-2 py-1 rounded text-sm font-bold shrink-0">/compact</code>
              <div>
                <p className="text-sm font-semibold">대화 요약</p>
                <p className="text-sm text-muted-foreground">대화가 길어져서 컨텍스트가 부족할 때, 이전 대화를 요약하여 정리합니다.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-3 bg-muted rounded-lg">
              <code className="bg-background px-2 py-1 rounded text-sm font-bold shrink-0">/clear</code>
              <div>
                <p className="text-sm font-semibold">대화 초기화</p>
                <p className="text-sm text-muted-foreground">현재 대화를 완전히 초기화하고 새로 시작합니다.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-3 bg-muted rounded-lg">
              <code className="bg-background px-2 py-1 rounded text-sm font-bold shrink-0">/cost</code>
              <div>
                <p className="text-sm font-semibold">사용량 확인</p>
                <p className="text-sm text-muted-foreground">현재 세션의 토큰 사용량과 비용을 확인합니다.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-3 bg-muted rounded-lg">
              <code className="bg-background px-2 py-1 rounded text-sm font-bold shrink-0">자연어</code>
              <div>
                <p className="text-sm font-semibold">자유롭게 요청하기</p>
                <p className="text-sm text-muted-foreground">
                  &quot;~해줘&quot;, &quot;~만들어줘&quot;, &quot;~수정해줘&quot; 등 한국어로 자유롭게 요청할 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 생성된 코드 이해하기 */}
      <Card className="mb-8" id="understanding-code">
        <CardHeader>
          <CardTitle>생성된 코드 이해하기</CardTitle>
          <CardDescription>Claude가 만든 코드를 확인하고 이해하는 방법</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">코드 변경사항 확인하기</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Claude가 코드를 수정한 후, <code className="bg-muted px-1 rounded">git diff</code> 명령어로 어떤 파일이 변경되었는지 확인할 수 있습니다.
            </p>
            <CodeBlockMultiLine lines={[
              "# 변경된 파일 목록 확인",
              "git diff --stat",
              "",
              "# 변경 내용 상세 확인",
              "git diff"
            ]} />
          </div>

          <Separator />

          <div>
            <h4 className="font-semibold mb-2">모르는 코드가 있으면 Claude에게 물어보기</h4>
            <p className="text-sm text-muted-foreground mb-3">
              생성된 코드 중 이해가 안 되는 부분이 있다면, 그대로 Claude에게 설명을 요청하세요.
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-sm font-semibold mb-2">예시 요청:</p>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li>&quot;방금 만든 코드에서 useEffect가 하는 역할을 설명해줘&quot;</li>
                <li>&quot;이 컴포넌트의 props 타입을 설명해줘&quot;</li>
                <li>&quot;async/await가 여기서 왜 필요한지 알려줘&quot;</li>
                <li>&quot;이 파일의 전체 구조를 설명해줘&quot;</li>
              </ul>
            </div>
          </div>

          <Separator />

          <div>
            <h4 className="font-semibold mb-2">코드를 이해하면 더 좋은 요청이 가능합니다</h4>
            <p className="text-sm text-muted-foreground">
              Claude가 생성한 코드를 하나씩 이해해 나가면, 점점 더 정확하고 구체적인 요청을 할 수 있게 됩니다.
              처음에는 &quot;버튼을 만들어줘&quot;에서 시작해도, 나중에는
              &quot;onClick 핸들러에서 API를 호출하고 로딩 상태를 관리하는 버튼을 만들어줘&quot;처럼
              정교한 요청이 가능해집니다.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* 에러 발생 시 대처법 */}
      <Card className="mb-8" id="error-handling">
        <CardHeader>
          <CardTitle>에러 발생 시 대처법</CardTitle>
          <CardDescription>에러를 두려워하지 마세요. Claude가 해결해 줍니다.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">에러 메시지를 그대로 보여주기</h4>
            <p className="text-sm text-muted-foreground mb-3">
              에러가 발생하면, 에러 메시지를 그대로 복사해서 Claude에게 보여주세요.
              Claude가 에러의 원인을 분석하고 자동으로 수정합니다.
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-sm font-semibold mb-2">요청 예시:</p>
              <p className="text-sm text-muted-foreground italic">
                &quot;npm run dev를 실행했는데 이런 에러가 나왔어:
                Error: Cannot find module &apos;@/components/ui/button&apos;&quot;
              </p>
            </div>
          </div>

          <Separator />

          <div>
            <h4 className="font-semibold mb-2">빌드 에러 해결</h4>
            <p className="text-sm text-muted-foreground mb-3">
              빌드 시 에러가 발생하면 Claude에게 해결을 요청하세요. 대부분의 일반적인 빌드 에러는 자동으로 수정됩니다.
            </p>
            <CodeBlockMultiLine lines={[
              "# 빌드 에러 발생 시",
              "npm run build",
              "",
              "# 에러가 나오면 Claude에게:",
              "# \"빌드 에러가 나왔어. 이 에러를 수정해줘\""
            ]} />
          </div>

          <Separator />

          <div>
            <h4 className="font-semibold mb-2">자주 만나는 에러 유형</h4>
            <div className="space-y-3">
              <div className="p-3 bg-muted rounded-lg">
                <p className="text-sm font-semibold">Module not found (모듈을 찾을 수 없음)</p>
                <p className="text-sm text-muted-foreground mt-1">
                  요청: &quot;이 모듈을 설치해줘&quot; 또는 &quot;이 import를 수정해줘&quot;
                </p>
              </div>
              <div className="p-3 bg-muted rounded-lg">
                <p className="text-sm font-semibold">Type Error (타입 에러)</p>
                <p className="text-sm text-muted-foreground mt-1">
                  요청: &quot;타입 에러를 수정해줘&quot; - Claude가 타입 정의를 자동으로 수정
                </p>
              </div>
              <div className="p-3 bg-muted rounded-lg">
                <p className="text-sm font-semibold">Syntax Error (문법 에러)</p>
                <p className="text-sm text-muted-foreground mt-1">
                  요청: &quot;문법 에러를 고쳐줘&quot; - 빠진 괄호, 세미콜론 등을 자동 수정
                </p>
              </div>
              <div className="p-3 bg-muted rounded-lg">
                <p className="text-sm font-semibold">Port already in use (포트가 이미 사용 중)</p>
                <p className="text-sm text-muted-foreground mt-1">
                  요청: &quot;3000번 포트가 이미 사용 중이래. 해결해줘&quot;
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 실전 예시: 로그인 페이지 만들기 */}
      <section className="mb-8" id="practical-example">
        <h2 className="text-2xl font-bold mb-6 text-center">실전 예시: 로그인 페이지 만들기</h2>
        <p className="text-center text-muted-foreground mb-8">
          실제로 Claude Code를 사용하여 로그인 페이지를 만드는 과정을 따라해 보세요
        </p>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">1</span> 로그인 페이지 요청
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm font-semibold mb-1">Claude에게 요청:</p>
                <p className="text-sm text-muted-foreground italic">
                  &quot;로그인 페이지를 만들어줘. 이메일과 비밀번호 입력 필드가 있고, shadcn/ui 컴포넌트를 사용해줘.
                  app/login/page.tsx 파일로 만들어줘.&quot;
                </p>
              </div>
              <p className="text-sm text-muted-foreground">
                Claude가 <code className="bg-muted px-1 rounded">app/login/page.tsx</code> 파일을 자동으로 생성합니다.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">2</span> 회원가입 페이지 추가
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm font-semibold mb-1">Claude에게 요청:</p>
                <p className="text-sm text-muted-foreground italic">
                  &quot;회원가입 페이지도 추가해줘. 로그인 페이지와 같은 스타일로 만들어줘.
                  이름, 이메일, 비밀번호, 비밀번호 확인 필드가 필요해.&quot;
                </p>
              </div>
              <p className="text-sm text-muted-foreground">
                기존 로그인 페이지의 스타일을 참고하여 일관된 디자인으로 생성합니다.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">3</span> 유효성 검사 추가
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm font-semibold mb-1">Claude에게 요청:</p>
                <p className="text-sm text-muted-foreground italic">
                  &quot;로그인 폼에 유효성 검사를 추가해줘. 이메일 형식 검증과 비밀번호 최소 8자 조건을 넣어줘.&quot;
                </p>
              </div>
              <p className="text-sm text-muted-foreground">
                기존 파일을 수정하여 폼 검증 로직을 추가합니다.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">4</span> 결과 확인
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground mb-2">
                개발 서버를 실행하여 결과를 확인합니다.
              </p>
              <CodeBlock code="npm run dev" />
              <p className="text-sm text-muted-foreground mt-3">
                브라우저에서 <code className="bg-muted px-1 rounded">http://localhost:3000/login</code>에 접속하면
                만들어진 로그인 페이지를 확인할 수 있습니다.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">5</span> 디자인 수정
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm font-semibold mb-1">Claude에게 요청:</p>
                <p className="text-sm text-muted-foreground italic">
                  &quot;로그인 페이지 디자인을 수정해줘. 카드 형태로 중앙 배치하고,
                  상단에 로고 자리를 만들어줘. 배경은 그라데이션으로 해줘.&quot;
                </p>
              </div>
              <p className="text-sm text-muted-foreground">
                이렇게 반복적으로 수정 요청을 하면서 원하는 결과물을 완성해 나갑니다.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Claude Code + Git 워크플로우 */}
      <Card className="mb-8" id="git-workflow">
        <CardHeader>
          <CardTitle>Claude Code + Git 워크플로우</CardTitle>
          <CardDescription>버전 관리도 Claude에게 맡기세요</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground mb-4">
              Claude Code는 Git 명령어도 대신 실행할 수 있습니다.
              자연어로 요청하면 적절한 Git 명령어를 자동으로 실행합니다.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="p-3 bg-muted rounded-lg">
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold shrink-0">요청</span>
                <div>
                  <p className="text-sm">&quot;변경사항을 커밋해줘&quot;</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Claude가 자동으로 <code className="bg-background px-1 rounded">git add</code> + <code className="bg-background px-1 rounded">git commit</code>을 실행하고 적절한 커밋 메시지를 작성합니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-3 bg-muted rounded-lg">
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold shrink-0">요청</span>
                <div>
                  <p className="text-sm">&quot;GitHub에 올려줘&quot;</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    <code className="bg-background px-1 rounded">git push</code>를 실행하여 원격 저장소에 업로드합니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-3 bg-muted rounded-lg">
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold shrink-0">요청</span>
                <div>
                  <p className="text-sm">&quot;새 브랜치를 만들어서 작업해줘&quot;</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    <code className="bg-background px-1 rounded">git checkout -b feature/새기능</code>으로 브랜치를 생성하고 전환합니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-3 bg-muted rounded-lg">
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold shrink-0">요청</span>
                <div>
                  <p className="text-sm">&quot;PR을 만들어줘&quot;</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    GitHub CLI를 사용하여 Pull Request를 자동으로 생성합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <h4 className="font-semibold mb-2">추천 워크플로우</h4>
            <CodeBlockMultiLine lines={[
              "# 1. 새 기능 브랜치 생성",
              "# \"login 기능을 위한 새 브랜치를 만들어줘\"",
              "",
              "# 2. 기능 개발",
              "# \"로그인 페이지를 만들어줘\"",
              "",
              "# 3. 변경사항 커밋",
              "# \"지금까지 작업한 내용을 커밋해줘\"",
              "",
              "# 4. GitHub에 푸시",
              "# \"GitHub에 올려줘\"",
              "",
              "# 5. PR 생성",
              "# \"PR을 만들어줘\""
            ]} />
          </div>
        </CardContent>
      </Card>

      {/* 유용한 팁 */}
      <Card className="mb-8" id="tips">
        <CardHeader>
          <CardTitle>유용한 팁</CardTitle>
          <CardDescription>Claude Code를 더 효과적으로 사용하기 위한 팁</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <strong className="text-foreground text-sm">CLAUDE.md 파일을 잘 작성하세요</strong>
            <p className="text-sm text-muted-foreground">
              프로젝트의 기술 스택, 코딩 컨벤션, 디렉토리 구조 등을 CLAUDE.md에 기록하면
              Claude가 프로젝트 맥락을 더 잘 이해하고 일관된 코드를 생성합니다.
            </p>
          </div>
          <Separator />
          <div>
            <strong className="text-foreground text-sm">큰 작업은 작은 단계로 나누세요</strong>
            <p className="text-sm text-muted-foreground">
              &quot;전체 쇼핑몰을 만들어줘&quot;보다 &quot;상품 목록 페이지를 먼저 만들어줘&quot;,
              &quot;장바구니 기능을 추가해줘&quot;처럼 단계별로 요청하면 더 좋은 결과를 얻을 수 있습니다.
            </p>
          </div>
          <Separator />
          <div>
            <strong className="text-foreground text-sm">코드 리뷰도 요청할 수 있습니다</strong>
            <p className="text-sm text-muted-foreground">
              &quot;이 코드를 리뷰해줘&quot;, &quot;보안 문제가 있는지 확인해줘&quot;,
              &quot;성능을 개선할 수 있는 부분을 알려줘&quot; 등의 요청이 가능합니다.
            </p>
          </div>
          <Separator />
          <div>
            <strong className="text-foreground text-sm">에러가 반복되면 다른 방법을 요청하세요</strong>
            <p className="text-sm text-muted-foreground">
              같은 에러가 계속 발생하면 &quot;다른 방법으로 해결해줘&quot; 또는
              &quot;다른 라이브러리를 사용해서 구현해줘&quot;라고 요청해 보세요.
            </p>
          </div>
          <Separator />
          <div>
            <strong className="text-foreground text-sm">스크린샷을 활용하세요</strong>
            <p className="text-sm text-muted-foreground">
              원하는 디자인의 스크린샷이 있다면 Claude에게 보여주면서
              &quot;이 디자인과 비슷하게 만들어줘&quot;라고 요청할 수 있습니다.
            </p>
          </div>
          <Separator />
          <div>
            <strong className="text-foreground text-sm">/compact로 대화를 정리하세요</strong>
            <p className="text-sm text-muted-foreground">
              대화가 길어지면 Claude의 응답 품질이 떨어질 수 있습니다.
              <code className="bg-muted px-1 rounded">/compact</code> 명령어로 대화를 요약하면
              컨텍스트를 유지하면서 새로운 대화처럼 이어갈 수 있습니다.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
