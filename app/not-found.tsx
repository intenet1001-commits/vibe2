import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, BookOpen } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <div className="text-6xl font-bold text-primary mb-4">404</div>
          <CardTitle className="text-2xl">페이지를 찾을 수 없습니다</CardTitle>
          <CardDescription className="text-base mt-2">
            요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <Button asChild size="lg" className="w-full">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              홈으로 돌아가기
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full">
            <Link href="/setup-guide">
              <BookOpen className="mr-2 h-4 w-4" />
              학습 가이드 보기
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
