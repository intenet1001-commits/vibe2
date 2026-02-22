import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/components/ui/code-block";
import { AlertCircle, CheckCircle2, Package } from "lucide-react";
import { PageNavigation } from "@/components/page-navigation";

export const metadata: Metadata = {
  title: "Claude Code 플러그인 모음 - AI 오케스트레이팅",
  description: "추천 Claude Code 플러그인 3종. git clone과 마켓플레이스 두 가지 방법으로 설치하세요.",
};

const plugins = [
  {
    id: "cs_plugins",
    icon: "💡",
    name: "cs_plugins",
    org: "intenet1001-commits",
    description: "CS 관련 Claude Code 플러그인 모음. 다양한 개발 워크플로우를 강화하는 플러그인들을 제공합니다.",
    repoUrl: "https://github.com/intenet1001-commits/cs_plugins",
    marketplace: null,
    cloneTarget: "~/.claude/plugins/cs_plugins",
    cloneCmd: "git clone https://github.com/intenet1001-commits/cs_plugins ~/.claude/plugins/cs_plugins",
    tags: ["CS", "워크플로우", "개발"],
  },
  {
    id: "plugins-for-claude-natives",
    icon: "🧩",
    name: "plugins-for-claude-natives",
    org: "team-attention",
    description: "Agent Council, 요구사항 명확화, YouTube 요약, Gmail, KakaoTalk 등 7개 플러그인을 포함한 실전 플러그인 모음입니다.",
    repoUrl: "https://github.com/team-attention/plugins-for-claude-natives",
    marketplace: "/plugin marketplace add team-attention/plugins-for-claude-natives",
    cloneTarget: "~/.claude/plugins/team-attention",
    cloneCmd: "git clone https://github.com/team-attention/plugins-for-claude-natives ~/.claude/plugins/team-attention",
    tags: ["Agent Council", "YouTube", "Gmail", "KakaoTalk"],
  },
  {
    id: "oh-my-claudecode",
    icon: "🚀",
    name: "oh-my-claudecode",
    org: "Yeachan-Heo",
    description: "멀티 에이전트 오케스트레이션 프레임워크. 32+ 전문 에이전트, 40+ 스킬을 제공하는 강력한 플러그인입니다.",
    repoUrl: "https://github.com/Yeachan-Heo/oh-my-claudecode",
    marketplace: "/plugin marketplace add https://github.com/Yeachan-Heo/oh-my-claudecode",
    cloneTarget: null,
    cloneCmd: "gh repo clone Yeachan-Heo/oh-my-claudecode",
    tags: ["멀티 에이전트", "32+ 에이전트", "40+ 스킬", "오케스트레이션"],
  },
];

export default function PluginsGuide() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Claude Code 플러그인 모음
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          git clone & 마켓플레이스로 설치하는 추천 플러그인 3종
        </p>
        <div className="flex gap-2 justify-center flex-wrap mt-6">
          <Badge variant="outline">Claude Code</Badge>
          <Badge variant="outline">플러그인</Badge>
          <Badge variant="outline">마켓플레이스</Badge>
          <Badge variant="outline">git clone</Badge>
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
            <a href="#install-methods" className="text-primary hover:underline">1. 설치 방법 비교</a>
            <a href="#cs-plugins" className="text-primary hover:underline">2. cs_plugins</a>
            <a href="#claude-natives" className="text-primary hover:underline">3. plugins-for-claude-natives</a>
            <a href="#oh-my-claudecode" className="text-primary hover:underline">4. oh-my-claudecode</a>
            <a href="#notes" className="text-primary hover:underline">5. 주의사항</a>
          </div>
        </CardContent>
      </Card>

      {/* 1. 설치 방법 비교 */}
      <section id="install-methods" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Package className="h-6 w-6 text-primary" />
          1. 설치 방법 비교
        </h2>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                Method A: 마켓플레이스
              </CardTitle>
              <CardDescription>Claude Code 내에서 바로 설치</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p className="text-muted-foreground">Claude Code 세션에서 다음 명령어를 입력합니다.</p>
              <div className="bg-muted rounded-md px-3 py-2 font-mono text-xs">
                /plugin marketplace add [저장소]
              </div>
              <ul className="text-muted-foreground space-y-1 mt-2">
                <li>✅ 가장 간단한 방법</li>
                <li>✅ 자동 업데이트 지원</li>
                <li>⚠️ 마켓플레이스 등록 저장소만 가능</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-500" />
                Method B: git clone
              </CardTitle>
              <CardDescription>터미널에서 직접 클론</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p className="text-muted-foreground">터미널에서 플러그인 디렉토리로 클론합니다.</p>
              <div className="bg-muted rounded-md px-3 py-2 font-mono text-xs">
                git clone [URL] ~/.claude/plugins/[name]
              </div>
              <ul className="text-muted-foreground space-y-1 mt-2">
                <li>✅ 모든 공개 저장소 설치 가능</li>
                <li>✅ 오프라인 환경에서도 사용</li>
                <li>⚠️ 수동 업데이트 필요</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="mb-10" />

      {/* 플러그인 카드들 */}
      {plugins.map((plugin, index) => (
        <section key={plugin.id} id={plugin.id} className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-2xl">{plugin.icon}</span>
            {index + 2}. {plugin.name}
          </h2>

          <Card className="mb-4">
            <CardHeader>
              <div className="flex items-start justify-between flex-wrap gap-2">
                <div>
                  <CardTitle className="text-base">
                    {plugin.org}/{plugin.name}
                  </CardTitle>
                  <CardDescription className="mt-1">
                    {plugin.description}
                  </CardDescription>
                </div>
                <a
                  href={plugin.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary hover:underline shrink-0"
                >
                  GitHub →
                </a>
              </div>
              <div className="flex gap-1.5 flex-wrap mt-2">
                {plugin.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {plugin.marketplace && (
                <div>
                  <p className="text-sm font-medium mb-2 flex items-center gap-1">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    Method A: 마켓플레이스 설치
                  </p>
                  <p className="text-xs text-muted-foreground mb-2">
                    Claude Code 세션에서 입력하세요.
                  </p>
                  <CodeBlock code={plugin.marketplace} />
                </div>
              )}

              <div>
                <p className="text-sm font-medium mb-2 flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4 text-blue-500" />
                  Method {plugin.marketplace ? "B" : "A"}: git clone 설치
                </p>
                <p className="text-xs text-muted-foreground mb-2">
                  터미널에서 실행하세요.
                </p>
                <CodeBlock code={plugin.cloneCmd} />
              </div>
            </CardContent>
          </Card>

          {index < plugins.length - 1 && <Separator className="mt-10 mb-10" />}
        </section>
      ))}

      {/* 주의사항 */}
      <section id="notes" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <AlertCircle className="h-6 w-6 text-primary" />
          5. 주의사항
        </h2>

        <Card>
          <CardContent className="pt-6 space-y-3">
            <div className="flex gap-3 text-sm">
              <AlertCircle className="h-4 w-4 text-yellow-500 shrink-0 mt-0.5" />
              <p className="text-muted-foreground">
                플러그인 설치 후 <strong>Claude Code를 재시작</strong>해야 적용됩니다.
              </p>
            </div>
            <div className="flex gap-3 text-sm">
              <AlertCircle className="h-4 w-4 text-yellow-500 shrink-0 mt-0.5" />
              <p className="text-muted-foreground">
                마켓플레이스 기능은 <strong>최신 버전의 Claude Code</strong>에서 지원됩니다. <code className="bg-muted px-1 rounded text-xs">claude --version</code>으로 확인하세요.
              </p>
            </div>
            <div className="flex gap-3 text-sm">
              <AlertCircle className="h-4 w-4 text-yellow-500 shrink-0 mt-0.5" />
              <p className="text-muted-foreground">
                git clone 방식은 <code className="bg-muted px-1 rounded text-xs">~/.claude/plugins/</code> 디렉토리에 설치합니다. 해당 디렉토리가 없으면 자동으로 생성됩니다.
              </p>
            </div>
            <div className="flex gap-3 text-sm">
              <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
              <p className="text-muted-foreground">
                플러그인 목록 확인: <code className="bg-muted px-1 rounded text-xs">/plugin list</code>
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <PageNavigation currentPath="/plugins-guide" />
    </div>
  );
}
