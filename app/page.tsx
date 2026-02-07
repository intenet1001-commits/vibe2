import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import { QuickStart } from "@/components/quick-start";

const blogCards = [
  {
    id: "setup-guide",
    title: "개발 환경 설치 가이드",
    description: "Node.js, Git, Claude Code 설치 및 GitHub/Vercel/Supabase 연동",
    icon: "🛠️",
    tags: ["Homebrew", "Node.js", "Git", "Claude Code"],
    href: "/setup-guide",
    color: "from-[oklch(0.6_0.12_240)] to-[oklch(0.65_0.15_200)]",
    order: "①",
  },
  {
    id: "claude-code-guide",
    title: "Claude Code 사용 가이드",
    description: "AI 코딩 도우미로 대화하듯 개발하기",
    icon: "🤖",
    tags: ["Claude Code", "AI", "프롬프트"],
    href: "/claude-code-guide",
    color: "from-[oklch(0.55_0.15_280)] to-[oklch(0.6_0.18_290)]",
    order: "②",
  },
  {
    id: "git-guide",
    title: "Git 완벽 가이드",
    description: "버전 관리 기초부터 실전 워크플로우까지",
    icon: "🌿",
    tags: ["Git", "GitHub", "버전 관리"],
    href: "/git-guide",
    color: "from-[oklch(0.65_0.15_145)] to-[oklch(0.7_0.18_160)]",
    order: "③",
  },
  {
    id: "iterm-guide",
    title: "iTerm2 단축키 가이드",
    description: "생산성을 높이는 터미널 단축키",
    icon: "⌨️",
    tags: ["macOS", "iTerm2", "터미널"],
    href: "/iterm-guide",
    color: "from-[oklch(0.6_0.2_310)] to-[oklch(0.65_0.22_330)]",
    order: "④",
  },
  {
    id: "shadcn-demo",
    title: "shadcn/ui 비교 데모",
    description: "기본 스타일과 shadcn/ui 차이 비교",
    icon: "🎨",
    tags: ["shadcn/ui", "UI", "컴포넌트"],
    href: "/shadcn-demo",
    color: "from-[oklch(0.7_0.18_50)] to-[oklch(0.65_0.22_30)]",
    order: "⑤",
  },
  {
    id: "tmux-guide",
    title: "Agent Teams 가이드",
    description: "여러 AI 에이전트를 팀으로 운영하여 작업 효율 극대화",
    icon: "🤖",
    tags: ["Agent Teams", "멀티 에이전트", "팀 협업", "tmux"],
    href: "/tmux-guide",
    color: "from-[oklch(0.55_0.15_280)] to-[oklch(0.6_0.18_300)]",
    order: "⑥",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Gradient Background */}
      <section className="relative py-8 md:py-12 px-4 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            내가 필요한건 내가 만들어 쓰는 시대
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-6">
            AI 오케스트레이팅으로 나만의 서비스 만들기
          </p>
          <div className="flex gap-2 justify-center flex-wrap">
            <Badge variant="secondary">Next.js</Badge>
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="secondary">Tailwind CSS</Badge>
            <Badge variant="secondary">shadcn/ui</Badge>
            <Badge variant="secondary">Supabase</Badge>
          </div>
          <p className="text-sm text-muted-foreground mt-3">
            이 도구들이 합쳐져서 멋진 웹사이트를 만들어줍니다
          </p>
          <div className="mt-6">
            <Button asChild size="lg">
              <Link href="/setup-guide">
                시작하기
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Start Section with Background Emphasis */}
      <div className="section-highlight px-3 md:px-4">
        <QuickStart />
      </div>

      {/* Learning Guide Section */}
      <section className="py-10 md:py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">학습 가이드</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {blogCards.map((card) => (
              <Link key={card.id} href={card.href} className="group">
                <Card className="h-full transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:border-primary/30">
                  <div className={`h-1 bg-gradient-to-r ${card.color}`} />
                  <CardHeader className="pb-2 pt-4 px-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-primary">{card.order}</span>
                      <span className="text-xl">{card.icon}</span>
                      <CardTitle className="text-base group-hover:text-primary transition-colors">
                        {card.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 pb-4 px-4">
                    <CardDescription className="text-sm mb-3">
                      {card.description}
                    </CardDescription>
                    <div className="flex gap-1.5 flex-wrap">
                      {card.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Banner */}
      <div className="px-4 pb-8">
        <Link
          href="https://linksv1.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="block max-w-xl mx-auto"
        >
          <div className="bg-muted/50 hover:bg-muted border rounded-lg py-3 px-4 transition-colors text-center">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              하루 30분 강의로 누구나 시작할 수 있습니다
              <ExternalLink className="h-3 w-3" />
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
