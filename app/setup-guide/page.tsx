import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CodeBlock, CodeBlockMultiLine } from "@/components/ui/code-block";
import { PageNavigation } from "@/components/page-navigation";
import { BackToTop } from "@/components/back-to-top";

export const metadata: Metadata = {
  title: "개발 환경 설치 가이드 - AI 오케스트레이팅",
  description: "Node.js, Git, Claude Code 설치 및 GitHub/Vercel/Supabase 연동 가이드",
};

export default function SetupGuide() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">개발 환경 설치 가이드</h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          Node.js, npm, Git, Claude Code 완벽 설치 및 GitHub/Vercel/Supabase 연동
        </p>
        <div className="flex gap-2 justify-center flex-wrap mt-6">
          <Badge variant="outline">Node.js</Badge>
          <Badge variant="outline">npm</Badge>
          <Badge variant="outline">Git</Badge>
          <Badge variant="outline">Claude Code</Badge>
          <Badge variant="outline">GitHub</Badge>
          <Badge variant="outline">Vercel</Badge>
          <Badge variant="outline">Supabase</Badge>
        </div>
      </div>

      {/* Navigation Menu */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>목차</CardTitle>
          <CardDescription>원하는 섹션으로 빠르게 이동하세요</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            <a href="#version-check" className="text-primary hover:underline">버전 확인 명령어</a>
            <a href="#homebrew" className="text-primary hover:underline">Homebrew 설치 (macOS)</a>
            <a href="#basic-setup" className="text-primary hover:underline">기본 개발 도구 설치</a>
            <a href="#github" className="text-primary hover:underline">GitHub 연동</a>
            <a href="#vercel" className="text-primary hover:underline">Vercel 연동</a>
            <a href="#supabase" className="text-primary hover:underline">Supabase 연동</a>
            <a href="#cli-tools" className="text-primary hover:underline">Claude Code 말고 다른 시리즈도 많아요</a>
          </div>
        </CardContent>
      </Card>

      {/* OS Tabs */}
      <Tabs defaultValue="mac" className="w-full" id="basic-setup">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="mac">macOS</TabsTrigger>
          <TabsTrigger value="windows">Windows</TabsTrigger>
        </TabsList>

        {/* macOS Content */}
        <TabsContent value="mac" className="space-y-6">
          {/* Homebrew - macOS */}
          <Card id="homebrew">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">1</span> Homebrew 설치
              </CardTitle>
              <CardDescription>macOS 필수 패키지 관리자</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Homebrew란?</h4>
                <p className="text-sm text-muted-foreground">
                  Homebrew는 macOS에서 가장 널리 사용되는 패키지 관리자입니다.
                  Node.js, Git, 그리고 다양한 개발 도구를 간편하게 설치하고 관리할 수 있습니다.
                </p>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold mb-2">설치 방법</h4>
                <CodeBlockMultiLine lines={[
                  "/bin/bash -c \"$(curl -fsSL \\",
                  "  https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)\""
                ]} />
                <p className="text-sm text-muted-foreground mt-2">
                  터미널에서 위 명령어를 실행하고 안내에 따라 설치를 진행하세요.
                </p>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold mb-2">설치 후 PATH 설정 (Apple Silicon Mac)</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  M1/M2/M3 Mac을 사용 중이라면 다음 명령어를 실행해야 합니다:
                </p>
                <CodeBlockMultiLine lines={[
                  "echo 'eval \"$(/opt/homebrew/bin/brew shellenv)\"' >> ~/.zprofile",
                  "eval \"$(/opt/homebrew/bin/brew shellenv)\""
                ]} />
                <p className="text-sm text-muted-foreground mt-2">
                  이 명령어는 터미널이 Homebrew를 찾을 수 있도록 경로를 설정합니다.
                  M1/M2/M3 Mac은 Homebrew가 /opt/homebrew에 설치되기 때문에 이 설정이 필요합니다.
                </p>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold mb-2">설치 확인</h4>
                <CodeBlock code="brew --version" />
                <p className="text-sm text-muted-foreground mt-2">
                  버전이 표시되면 설치 완료! 이제 brew 명령어로 다양한 도구를 설치할 수 있습니다.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Node.js - macOS */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">2</span> Node.js 설치
              </CardTitle>
              <CardDescription>JavaScript 런타임 환경 (npm 포함)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">방법 1: 공식 설치 파일 (권장)</h4>
                <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                  <li><a href="https://nodejs.org" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://nodejs.org</a> 접속</li>
                  <li>LTS 버전 다운로드 (안정 버전)</li>
                  <li>.pkg 파일 실행하여 설치</li>
                  <li>설치 완료 후 터미널에서 확인:</li>
                </ol>
                <div className="mt-2">
                  <CodeBlockMultiLine lines={["node --version", "npm --version"]} />
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold mb-2">방법 2: Homebrew</h4>
                <CodeBlockMultiLine lines={[
                  "# Node.js LTS 버전 설치 (권장)",
                  "brew install node@20",
                  "",
                  "# 또는 최신 버전 설치",
                  "brew install node"
                ]} />
              </div>
            </CardContent>
          </Card>

          {/* Git - macOS */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">3</span> Git 설치
              </CardTitle>
              <CardDescription>버전 관리 시스템</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">방법 1: Xcode Command Line Tools (권장)</h4>
                <CodeBlock code="xcode-select --install" />
                <p className="text-sm text-muted-foreground mt-2">
                  팝업 창이 나타나면 &quot;설치&quot; 클릭
                </p>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold mb-2">방법 2: Homebrew</h4>
                <CodeBlock code="brew install git" />
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold mb-2">설치 확인 및 초기 설정</h4>
                <CodeBlockMultiLine lines={[
                  "git --version",
                  "",
                  "# 사용자 정보 설정",
                  'git config --global user.name "Your Name"',
                  'git config --global user.email "your.email@example.com"'
                ]} />
                <p className="text-sm text-amber-600 dark:text-amber-400 mt-2">
                  ⚠️ &quot;Your Name&quot;과 &quot;your.email@example.com&quot;을 실제 본인 정보로 바꾸세요!
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Claude Code - macOS */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">4</span> Claude Code 설치
              </CardTitle>
              <CardDescription>AI 기반 코딩 어시스턴트 CLI</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">시스템 요구사항</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>macOS 10.15 이상</li>
                  <li>RAM 4GB 이상</li>
                  <li>인터넷 연결 필수</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold mb-2">방법 1: npm (권장)</h4>
                <CodeBlock code="npm install -g @anthropic-ai/claude-code" />
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold mb-2">설치 확인 및 사용</h4>
                <CodeBlockMultiLine lines={[
                  "claude --version",
                  "",
                  "# 프로젝트 폴더에서 실행",
                  "cd your-project",
                  "claude"
                ]} />
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold mb-2">💡 터미널 상태 표시줄 설정 (선택)</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Claude Code 실행 중 터미널에 현재 모델, 브랜치 등 유용한 정보를 표시합니다.
                </p>
                <CodeBlock code="/statusline" />
                <div className="bg-muted p-4 rounded-lg mt-3">
                  <p className="text-xs text-muted-foreground mb-2">설정 후 터미널 표시 예시:</p>
                  <div className="bg-background rounded p-3 font-mono text-sm">
                    <span className="text-blue-500">🤖 Opus 4.5</span>
                    <span className="text-muted-foreground mx-2">|</span>
                    <span className="text-green-500">🌿 main</span>
                    <span className="text-muted-foreground mx-2">|</span>
                    <span className="text-orange-500">📁 ~/my-project</span>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mt-4">
                <p className="text-sm font-semibold text-amber-700 dark:text-amber-300 mb-1">구독 필요</p>
                <p className="text-sm text-amber-600 dark:text-amber-400">
                  Claude Code를 사용하려면 Claude Pro 또는 Max 구독이 필요합니다 (월 $20~).{" "}
                  <a href="https://claude.ai/upgrade" target="_blank" rel="noopener noreferrer" className="underline">
                    구독 페이지 →
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Windows Content */}
        <TabsContent value="windows" className="space-y-6">
          {/* Node.js - Windows */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">1</span> Node.js 설치
              </CardTitle>
              <CardDescription>JavaScript 런타임 환경 (npm 포함)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">방법 1: 공식 설치 파일 (권장)</h4>
                <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                  <li><a href="https://nodejs.org" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://nodejs.org</a> 접속</li>
                  <li>LTS 버전 다운로드 (Windows Installer .msi)</li>
                  <li>.msi 파일 실행하여 설치</li>
                  <li>&quot;Automatically install the necessary tools&quot; 체크</li>
                  <li>설치 완료 후 PowerShell 또는 CMD에서 확인:</li>
                </ol>
                <div className="mt-2">
                  <CodeBlockMultiLine lines={["node --version", "npm --version"]} />
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold mb-2">방법 2: Chocolatey</h4>
                <CodeBlockMultiLine lines={[
                  "# PowerShell 관리자 권한으로 실행",
                  "choco install nodejs"
                ]} />
              </div>
            </CardContent>
          </Card>

          {/* Git - Windows */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">2</span> Git 설치
              </CardTitle>
              <CardDescription>버전 관리 시스템</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">방법 1: Git for Windows (권장)</h4>
                <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                  <li><a href="https://git-scm.com/download/win" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://git-scm.com/download/win</a> 접속</li>
                  <li>64-bit Git for Windows Setup 다운로드</li>
                  <li>기본 옵션으로 설치 진행</li>
                </ol>
                <div className="mt-2">
                  <CodeBlock code="git --version" />
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold mb-2">초기 설정</h4>
                <CodeBlockMultiLine lines={[
                  "# Git Bash 또는 PowerShell에서 실행",
                  'git config --global user.name "Your Name"',
                  'git config --global user.email "your.email@example.com"'
                ]} />
                <p className="text-sm text-amber-600 dark:text-amber-400 mt-2">
                  ⚠️ &quot;Your Name&quot;과 &quot;your.email@example.com&quot;을 실제 본인 정보로 바꾸세요!
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Claude Code - Windows */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">3</span> Claude Code 설치
              </CardTitle>
              <CardDescription>AI 기반 코딩 어시스턴트 CLI</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">시스템 요구사항</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Windows 10 이상</li>
                  <li>RAM 4GB 이상</li>
                  <li>인터넷 연결 필수</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold mb-2">npm으로 설치</h4>
                <CodeBlock code="npm install -g @anthropic-ai/claude-code" />
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold mb-2">설치 확인 및 사용</h4>
                <CodeBlockMultiLine lines={[
                  "claude --version",
                  "",
                  "# 프로젝트 폴더에서 실행",
                  "cd your-project",
                  "claude"
                ]} />
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold mb-2">💡 터미널 상태 표시줄 설정 (선택)</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Claude Code 실행 중 터미널에 현재 모델, 브랜치 등 유용한 정보를 표시합니다.
                </p>
                <CodeBlock code="/statusline" />
                <div className="bg-muted p-4 rounded-lg mt-3">
                  <p className="text-xs text-muted-foreground mb-2">설정 후 터미널 표시 예시:</p>
                  <div className="bg-background rounded p-3 font-mono text-sm">
                    <span className="text-blue-500">🤖 Opus 4.5</span>
                    <span className="text-muted-foreground mx-2">|</span>
                    <span className="text-green-500">🌿 main</span>
                    <span className="text-muted-foreground mx-2">|</span>
                    <span className="text-orange-500">📁 ~/my-project</span>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mt-4">
                <p className="text-sm font-semibold text-amber-700 dark:text-amber-300 mb-1">구독 필요</p>
                <p className="text-sm text-amber-600 dark:text-amber-400">
                  Claude Code를 사용하려면 Claude Pro 또는 Max 구독이 필요합니다 (월 $20~).{" "}
                  <a href="https://claude.ai/upgrade" target="_blank" rel="noopener noreferrer" className="underline">
                    구독 페이지 →
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* GitHub Integration Section */}
      <section className="mt-12" id="github">
        <h2 className="text-2xl font-bold mb-6 text-center">GitHub 연동</h2>
        <p className="text-center text-muted-foreground mb-8">
          Claude Code로 GitHub 리파지토리를 생성하고 관리하기 위한 연동 가이드
        </p>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">1</span> GitHub 계정 생성
              </CardTitle>
              <CardDescription>GitHub 계정이 없다면 먼저 생성하세요</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li><a href="https://github.com" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://github.com</a> 접속</li>
                <li>&quot;Sign up&quot; 클릭하여 계정 생성</li>
                <li>이메일 인증 완료</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">2</span> GitHub CLI 설치 및 인증
              </CardTitle>
              <CardDescription>Claude Code가 GitHub API를 사용할 수 있도록 설정</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">macOS - GitHub CLI 설치</h4>
                <CodeBlock code="brew install gh" />
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold mb-2">Windows - GitHub CLI 설치</h4>
                <CodeBlock code="winget install --id GitHub.cli" />
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold mb-2">GitHub CLI 인증</h4>
                <CodeBlock code="gh auth login" />
                <div className="bg-muted p-4 rounded-lg space-y-2 text-sm mt-3">
                  <p className="font-semibold">대화형 설정 순서:</p>
                  <ol className="list-decimal list-inside space-y-1 text-muted-foreground ml-2">
                    <li>GitHub.com 선택</li>
                    <li>HTTPS 선택 (권장)</li>
                    <li>Authenticate Git operations: Yes</li>
                    <li>Login with a web browser 선택</li>
                    <li>표시되는 코드를 복사하고 브라우저에서 인증</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Vercel Integration Section */}
      <section className="mt-12" id="vercel">
        <h2 className="text-2xl font-bold mb-6 text-center">Vercel 연동</h2>
        <p className="text-center text-muted-foreground mb-8">
          프로젝트를 자동으로 배포하기 위한 Vercel 연동 가이드
        </p>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">1</span> Vercel 계정 생성
              </CardTitle>
              <CardDescription>GitHub 계정으로 간편하게 가입</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li><a href="https://vercel.com" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://vercel.com</a> 접속</li>
                <li>&quot;Sign Up&quot; 클릭</li>
                <li>&quot;Continue with GitHub&quot; 선택 (권장)</li>
                <li>GitHub 계정으로 인증</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">2</span> Vercel CLI 설치 및 인증
              </CardTitle>
              <CardDescription>명령줄에서 배포하기 위한 도구</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Vercel CLI 설치</h4>
                <CodeBlock code="npm install -g vercel" />
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold mb-2">Vercel CLI 인증</h4>
                <CodeBlock code="vercel login" />
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold mb-2">첫 배포</h4>
                <CodeBlockMultiLine lines={[
                  "# 프로젝트 폴더에서 실행",
                  "vercel",
                  "",
                  "# 프로덕션 배포",
                  "vercel --prod"
                ]} />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Supabase Integration */}
      <section className="mt-12" id="supabase">
        <h2 className="text-2xl font-bold mb-6 text-center">Supabase 연동</h2>
        <p className="text-center text-muted-foreground mb-8">
          백엔드 데이터베이스 및 인증을 위한 Supabase CLI 연동 가이드
        </p>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">1</span> Supabase 계정 생성
              </CardTitle>
              <CardDescription>무료로 시작할 수 있는 Supabase 계정을 만드세요</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>https://supabase.com 접속</li>
                <li>&quot;Start your project&quot; 클릭</li>
                <li>GitHub 계정으로 가입 (권장)</li>
                <li>&quot;New project&quot; 클릭하여 프로젝트 생성</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">2</span> Supabase CLI 설치 및 인증
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">macOS - Supabase CLI 설치</h4>
                <CodeBlock code="brew install supabase/tap/supabase" />
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold mb-2">npm으로 설치 (크로스 플랫폼)</h4>
                <CodeBlock code="npm install -g supabase" />
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold mb-2">Supabase CLI 인증</h4>
                <CodeBlock code="supabase login" />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CLI Tools Section */}
      <section className="mt-12" id="cli-tools">
        <h2 className="text-2xl font-bold mb-6 text-center">Claude Code 말고 다른 시리즈도 많아요</h2>
        <p className="text-center text-muted-foreground mb-8">
          개발 생산성을 높이는 필수 CLI 도구들
        </p>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">1</span> Cursor CLI
              </CardTitle>
              <CardDescription>AI 기반 코드 에디터 CLI</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Cursor 앱을 먼저 설치한 후, 앱 내에서 CLI를 설치합니다.
              </p>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li><a href="https://cursor.sh" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://cursor.sh</a> 에서 Cursor 앱 다운로드</li>
                <li>Cursor 앱 실행</li>
                <li>Cmd/Ctrl + Shift + P → &quot;Shell Command: Install cursor&quot;</li>
              </ol>
              <div className="mt-2">
                <CodeBlockMultiLine lines={[
                  "# 현재 폴더를 Cursor로 열기",
                  "cursor ."
                ]} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">2</span> Codex CLI (GitHub Copilot CLI)
              </CardTitle>
              <CardDescription>GitHub Copilot 터미널 도구</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground mb-3">
                GitHub Copilot 구독이 필요합니다.
              </p>
              <CodeBlock code="gh extension install github/gh-copilot" />
              <div className="mt-3">
                <CodeBlockMultiLine lines={[
                  "# 명령어 제안 받기",
                  "gh copilot suggest \"find all javascript files\"",
                  "",
                  "# 명령어 설명 받기",
                  "gh copilot explain \"git rebase -i HEAD~3\""
                ]} />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tips Section */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>추가 팁</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-muted-foreground">
          <div>
            <strong className="text-foreground">npm은 Node.js와 함께 자동 설치됩니다</strong>
            <p>별도로 npm을 설치할 필요가 없습니다.</p>
          </div>
          <Separator />
          <div>
            <strong className="text-foreground">설치 후 터미널 재시작</strong>
            <p>환경 변수 적용을 위해 터미널을 재시작하세요.</p>
          </div>
          <Separator />
          <div>
            <strong className="text-foreground">업데이트 방법</strong>
            <ul className="list-disc list-inside ml-4 mt-1">
              <li>Node.js: 공식 사이트에서 최신 버전 재설치</li>
              <li>Git: 설치 방법에 따라 재설치</li>
              <li>Claude Code: <code className="bg-muted px-1 rounded">npm update -g @anthropic-ai/claude-code</code></li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Version Check Section - moved to bottom */}
      <Card className="mt-8" id="version-check">
        <CardHeader>
          <CardTitle>버전 확인 명령어</CardTitle>
          <CardDescription>설치 후 아래 명령어로 버전을 확인하세요</CardDescription>
        </CardHeader>
        <CardContent>
          <CodeBlock code="node --version && npm --version && git --version && claude --version" />
        </CardContent>
      </Card>

      <PageNavigation currentPath="/setup-guide" />
      <BackToTop />
    </div>
  );
}
