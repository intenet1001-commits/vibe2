import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const learningPath = [
  { href: "/setup-guide", label: "설치 가이드" },
  { href: "/claude-code-guide", label: "Claude Code 가이드" },
  { href: "/git-guide", label: "Git 가이드" },
  { href: "/iterm-guide", label: "iTerm2 가이드" },
  { href: "/tmux-guide", label: "tmux 가이드" },
  { href: "/shadcn-demo", label: "shadcn/ui 데모" },
];

const encouragements = [
  "잘 따라오고 있어요! 다음 단계로 넘어가볼까요?",
  "훌륭해요! 계속 진행해보세요.",
  "거의 다 왔어요! 조금만 더 힘내세요.",
  "좋은 진행이에요! 다음도 화이팅!",
  "멋져요! AI 팀 협업의 세계로 들어가볼까요?",
  "완벽해요! 마지막 데모로 마무리해요!",
];

interface PageNavigationProps {
  currentPath: string;
}

export function PageNavigation({ currentPath }: PageNavigationProps) {
  const currentIndex = learningPath.findIndex((p) => p.href === currentPath);
  if (currentIndex === -1) return null;

  const prev = currentIndex > 0 ? learningPath[currentIndex - 1] : null;
  const next = currentIndex < learningPath.length - 1 ? learningPath[currentIndex + 1] : null;
  const encouragement = encouragements[currentIndex % encouragements.length];

  return (
    <div className="mt-16 border-t pt-8">
      <p className="text-center text-sm text-muted-foreground mb-6">{encouragement}</p>
      <div className="flex justify-between items-center">
        {prev ? (
          <Link href={prev.href} className="flex items-center gap-2 text-sm text-primary hover:underline">
            <ChevronLeft className="h-4 w-4" />
            <span>{prev.label}</span>
          </Link>
        ) : <div />}
        {next ? (
          <Link href={next.href} className="flex items-center gap-2 text-sm text-primary hover:underline">
            <span>{next.label}</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        ) : <div />}
      </div>
    </div>
  );
}
