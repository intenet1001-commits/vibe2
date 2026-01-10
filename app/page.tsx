import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { QuickStart } from "@/components/quick-start";

const blogCards = [
  {
    id: "setup-guide",
    title: "개발 환경 설치 가이드",
    description: "Node.js, Git, Claude Code 설치 및 GitHub/Vercel/Supabase 연동",
    icon: "🛠️",
    tags: ["Homebrew", "Node.js", "Git", "Claude Code"],
    href: "/setup-guide",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "git-guide",
    title: "Git 완벽 가이드",
    description: "버전 관리 기초부터 실전 워크플로우까지",
    icon: "🌿",
    tags: ["Git", "GitHub", "버전 관리"],
    href: "/git-guide",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "iterm-guide",
    title: "iTerm2 단축키 가이드",
    description: "생산성을 높이는 터미널 단축키",
    icon: "⌨️",
    tags: ["macOS", "iTerm2", "터미널"],
    href: "/iterm-guide",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "shadcn-demo",
    title: "shadcn/ui 비교 데모",
    description: "기본 스타일과 shadcn/ui 차이 비교",
    icon: "🎨",
    tags: ["shadcn/ui", "UI", "컴포넌트"],
    href: "/shadcn-demo",
    color: "from-orange-500 to-red-500",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
            내가 필요한건 내가 만들어 쓰는 시대
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-6">
            세련되고 일관성있는 서비스 구축하기
          </p>
          <div className="flex gap-2 justify-center flex-wrap">
            <Badge variant="secondary" className="text-xs">Next.js</Badge>
            <Badge variant="secondary" className="text-xs">TypeScript</Badge>
            <Badge variant="secondary" className="text-xs">Tailwind CSS</Badge>
            <Badge variant="secondary" className="text-xs">shadcn/ui</Badge>
            <Badge variant="secondary" className="text-xs">Supabase</Badge>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <div className="px-4">
        <QuickStart />
      </div>

      {/* Learning Guide Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold mb-8 text-center">학습 가이드</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {blogCards.map((card) => (
              <Link key={card.id} href={card.href} className="group">
                <Card className="h-full transition-all duration-200 hover:shadow-lg hover:border-primary/30">
                  <div className={`h-1 bg-gradient-to-r ${card.color}`} />
                  <CardHeader className="pb-2 pt-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{card.icon}</span>
                      <CardTitle className="text-base group-hover:text-primary transition-colors">
                        {card.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 pb-4">
                    <CardDescription className="text-xs mb-3 line-clamp-2">
                      {card.description}
                    </CardDescription>
                    <div className="flex gap-1.5 flex-wrap">
                      {card.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-[10px] px-1.5 py-0">
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
          className="block max-w-2xl mx-auto"
        >
          <div className="bg-muted/50 hover:bg-muted border rounded-lg py-3 px-4 transition-colors text-center">
            <p className="text-xs text-muted-foreground">
              하루 30분 강의로 누구나 시작할 수 있습니다 →
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
