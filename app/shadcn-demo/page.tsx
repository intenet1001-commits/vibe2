import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function ShadcnDemo() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">shadcn/ui 비교 데모</h1>
        <p className="text-xl text-muted-foreground">
          기본 스타일과 shadcn/ui의 차이를 직접 확인해보세요
        </p>
      </div>

      {/* Comparison Section */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

        {/* Without shadcn/ui */}
        <div>
          <div className="bg-red-50 dark:bg-red-950 border-2 border-red-500 rounded-lg p-4 mb-6">
            <h2 className="text-2xl font-bold mb-2 text-red-700 dark:text-red-300">shadcn/ui 없이</h2>
            <p className="text-sm text-red-600 dark:text-red-400">기본 HTML/CSS만 사용한 스타일</p>
          </div>

          <div className="space-y-8">
            {/* Basic Buttons */}
            <div>
              <h3 className="font-semibold mb-4">버튼</h3>
              <div className="space-y-3">
                <button className="px-4 py-2 bg-blue-500 text-white rounded">
                  기본 버튼
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded ml-2">
                  테두리 버튼
                </button>
              </div>
            </div>

            {/* Basic Card */}
            <div>
              <h3 className="font-semibold mb-4">카드</h3>
              <div className="border border-gray-200 rounded-lg p-4 bg-white dark:bg-gray-800 dark:border-gray-700">
                <h4 className="font-bold mb-2">카드 제목</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">카드 설명입니다</p>
                <div className="text-sm">
                  이것은 기본 HTML과 Tailwind CSS만 사용한 카드입니다.
                </div>
              </div>
            </div>

            {/* Basic Input */}
            <div>
              <h3 className="font-semibold mb-4">입력 필드</h3>
              <input
                type="text"
                placeholder="텍스트 입력..."
                className="w-full px-3 py-2 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600"
              />
            </div>

            {/* Basic Badge */}
            <div>
              <h3 className="font-semibold mb-4">배지</h3>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded dark:bg-gray-700 dark:text-gray-300">
                  배지 1
                </span>
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded dark:bg-blue-900 dark:text-blue-300">
                  배지 2
                </span>
              </div>
            </div>

            {/* Basic Form */}
            <div>
              <h3 className="font-semibold mb-4">폼</h3>
              <div className="border border-gray-200 rounded-lg p-4 bg-white dark:bg-gray-800 dark:border-gray-700 space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">이름</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">이메일</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
                <button className="w-full px-4 py-2 bg-blue-500 text-white rounded">
                  제출
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* With shadcn/ui */}
        <div>
          <div className="bg-green-50 dark:bg-green-950 border-2 border-green-500 rounded-lg p-4 mb-6">
            <h2 className="text-2xl font-bold mb-2 text-green-700 dark:text-green-300">shadcn/ui 사용</h2>
            <p className="text-sm text-green-600 dark:text-green-400">세련되고 일관성 있는 디자인 시스템</p>
          </div>

          <div className="space-y-8">
            {/* shadcn/ui Buttons */}
            <div>
              <h3 className="font-semibold mb-4">버튼</h3>
              <div className="space-y-3">
                <Button>기본 버튼</Button>
                <Button variant="outline" className="ml-2">테두리 버튼</Button>
              </div>
            </div>

            {/* shadcn/ui Card */}
            <div>
              <h3 className="font-semibold mb-4">카드</h3>
              <Card>
                <CardHeader>
                  <CardTitle>카드 제목</CardTitle>
                  <CardDescription>카드 설명입니다</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    shadcn/ui를 사용한 세련된 카드 컴포넌트입니다.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* shadcn/ui Input */}
            <div>
              <h3 className="font-semibold mb-4">입력 필드</h3>
              <input
                type="text"
                placeholder="텍스트 입력..."
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>

            {/* shadcn/ui Badge */}
            <div>
              <h3 className="font-semibold mb-4">배지</h3>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="secondary">배지 1</Badge>
                <Badge variant="outline">배지 2</Badge>
              </div>
            </div>

            {/* shadcn/ui Form */}
            <div>
              <h3 className="font-semibold mb-4">폼</h3>
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">이름</label>
                    <input
                      type="text"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">이메일</label>
                    <input
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  <Button className="w-full">제출</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Separator className="my-12" />

      {/* Key Differences */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">주요 차이점</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>디자인 일관성</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                모든 컴포넌트가 통일된 디자인 시스템을 따라 전문적이고 세련된 느낌을 줍니다.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>접근성</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                WAI-ARIA 표준을 준수하여 스크린 리더 및 키보드 탐색을 완벽하게 지원합니다.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>다크모드</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                내장된 다크모드 지원으로 사용자 경험을 향상시킵니다.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>개발 속도</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                미리 만들어진 컴포넌트로 스타일링에 드는 시간을 대폭 절약합니다.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>커스터마이징</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                소스 코드가 프로젝트에 복사되어 자유롭게 수정 가능합니다.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>반응형</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                모바일부터 데스크탑까지 모든 화면 크기에서 완벽하게 작동합니다.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
