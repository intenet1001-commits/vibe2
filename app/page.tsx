import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// 블로그 카드 데이터
const blogCards = [
  {
    id: "setup-guide",
    title: "개발 환경 설치 가이드",
    description: "Node.js, npm, Git, Claude Code 완벽 설치 및 GitHub/Vercel/Supabase 연동",
    icon: "🛠️",
    tags: ["Node.js", "npm", "Git", "Claude Code", "GitHub", "Vercel", "Supabase"],
    href: "/setup-guide",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "git-guide",
    title: "Git 완벽 가이드",
    description: "버전 관리의 기초부터 실전 워크플로우까지 완벽 가이드",
    icon: "🌿",
    tags: ["Git", "GitHub", "버전 관리", "협업"],
    href: "/git-guide",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "iterm-guide",
    title: "iTerm2 단축키 가이드",
    description: "생산성을 높이는 터미널 단축키 완벽 가이드",
    icon: "⌨️",
    tags: ["macOS", "iTerm2", "터미널", "단축키"],
    href: "/iterm-guide",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "shadcn-demo",
    title: "shadcn/ui 비교 데모",
    description: "기본 스타일과 shadcn/ui의 차이를 직접 확인해보세요",
    icon: "🎨",
    tags: ["shadcn/ui", "UI", "컴포넌트", "디자인 시스템"],
    href: "/shadcn-demo",
    color: "from-orange-500 to-red-500",
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-6 md:py-12">
      {/* Learning Banner */}
      <Link
        href="https://linksv1.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="block mb-12"
      >
        <div className="bg-muted/50 hover:bg-muted border rounded-lg p-4 transition-all hover:scale-[1.01]">
          <p className="text-center text-sm font-medium">
            하루에 30분씩 이런 강의 들으면 누구나 할 수 있습니다
          </p>
        </div>
      </Link>

      {/* Hero Section */}
      <section className="text-center py-10 md:py-20">
        <h1 className="text-xl md:text-3xl font-bold mb-4 md:mb-6 px-2">
          내가 필요한건 내가 만들어 쓰는 시대!<br className="md:hidden" /> 바이브 서비스
        </h1>
        <p className="text-lg md:text-2xl text-muted-foreground mb-4 px-2">
          세련되고 일관성있는 서비스 구축하기
        </p>
        <div className="flex gap-2 justify-center flex-wrap mt-4 md:mt-6 px-2">
          <Badge variant="secondary">Next.js</Badge>
          <Badge variant="secondary">TypeScript</Badge>
          <Badge variant="secondary">Tailwind CSS</Badge>
          <Badge variant="secondary">shadcn/ui</Badge>
          <Badge variant="secondary">Supabase</Badge>
        </div>
      </section>

      {/* Blog Cards Section */}
      <section className="py-8 md:py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">학습 가이드</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {blogCards.map((card) => (
            <Link key={card.id} href={card.href} className="group">
              <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border-2 hover:border-primary/50">
                {/* Gradient Header */}
                <div className={`h-2 bg-gradient-to-r ${card.color}`} />

                <CardHeader className="pb-3">
                  <div className="flex items-start gap-3">
                    <span className="text-4xl">{card.icon}</span>
                    <div className="flex-1">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {card.title}
                      </CardTitle>
                      <CardDescription className="mt-2 text-sm leading-relaxed">
                        {card.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="flex gap-2 flex-wrap">
                    {card.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Read More Indicator */}
                  <div className="mt-4 text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    자세히 보기
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="py-8 md:py-12 bg-muted/30 rounded-2xl mt-8 px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">빠른 시작</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          <Card className="text-center p-6">
            <div className="text-3xl mb-3">1</div>
            <CardTitle className="text-lg mb-2">Next.js 설치</CardTitle>
            <code className="text-xs bg-muted px-2 py-1 rounded">npx create-next-app@latest .</code>
          </Card>

          <Card className="text-center p-6">
            <div className="text-3xl mb-3">2</div>
            <CardTitle className="text-lg mb-2">Claude Code 초기화</CardTitle>
            <code className="text-xs bg-muted px-2 py-1 rounded">/init</code>
          </Card>

          <Card className="text-center p-6">
            <div className="text-3xl mb-3">3</div>
            <CardTitle className="text-lg mb-2">shadcn/ui 설정</CardTitle>
            <code className="text-xs bg-muted px-2 py-1 rounded">npx shadcn@latest init</code>
          </Card>

          <Card className="text-center p-6">
            <div className="text-3xl mb-3">4</div>
            <CardTitle className="text-lg mb-2">개발 서버 실행</CardTitle>
            <code className="text-xs bg-muted px-2 py-1 rounded">npm run dev</code>
          </Card>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-8 md:py-12 mt-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">사용 기술</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
          {[
            { name: "Next.js", desc: "React 프레임워크" },
            { name: "TypeScript", desc: "타입 안전성" },
            { name: "Tailwind CSS", desc: "유틸리티 CSS" },
            { name: "shadcn/ui", desc: "UI 컴포넌트" },
            { name: "Supabase", desc: "백엔드 서비스" },
          ].map((tech) => (
            <Card key={tech.name} className="text-center p-4 hover:shadow-md transition-shadow">
              <CardTitle className="text-sm font-semibold">{tech.name}</CardTitle>
              <CardDescription className="text-xs mt-1">{tech.desc}</CardDescription>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
