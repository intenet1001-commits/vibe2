import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ITermGuidePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">iTerm2 단축키 가이드</h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          생산성을 높이는 터미널 단축키 완벽 가이드
        </p>
        <div className="mt-4">
          <Badge variant="secondary">macOS</Badge>
          <Badge variant="secondary" className="ml-2">iTerm2</Badge>
        </div>
      </div>

      {/* iTerm2 설치 가이드 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">iTerm2 설치하기</h2>
        <div className="space-y-6">
          {/* Method 1: Homebrew */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">1</span> Homebrew로 설치 (권장)
              </CardTitle>
              <CardDescription>가장 간단하고 빠른 방법</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm font-medium mb-2">Homebrew가 이미 설치되어 있다면:</p>
                <code className="block bg-muted p-3 rounded text-sm font-mono">
                  brew install --cask iterm2
                </code>
              </div>

              <Separator />

              <div>
                <p className="text-sm font-medium mb-2">Homebrew가 없다면 먼저 설치:</p>
                <code className="block bg-muted p-3 rounded text-sm font-mono break-all">
                  /bin/bash -c &quot;$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)&quot;
                </code>
              </div>

              <Separator />

              <div>
                <p className="text-sm font-medium mb-2">설치 확인:</p>
                <code className="block bg-muted p-3 rounded text-sm font-mono">
                  brew list --cask | grep iterm2
                </code>
              </div>
            </CardContent>
          </Card>

          {/* Method 2: Official Download */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">2</span> 공식 웹사이트에서 다운로드
              </CardTitle>
              <CardDescription>수동 설치 방법</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ol className="list-decimal list-inside space-y-3 text-sm">
                <li>
                  <a
                    href="https://iterm2.com/downloads.html"
                    className="text-primary hover:underline font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://iterm2.com/downloads.html
                  </a> 접속
                </li>
                <li>
                  &quot;Stable Releases&quot; 섹션에서 최신 버전 다운로드
                  <ul className="list-disc list-inside ml-6 mt-2 text-muted-foreground">
                    <li>파일 형식: iTerm2-x_x_x.zip</li>
                    <li>macOS 10.14 이상 지원</li>
                  </ul>
                </li>
                <li>다운로드한 .zip 파일 압축 해제</li>
                <li>iTerm.app을 Applications 폴더로 이동</li>
                <li>Applications 폴더에서 iTerm2 실행</li>
              </ol>

              <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mt-4">
                <p className="text-sm text-blue-600 dark:text-blue-400">
                  <strong>보안 알림:</strong> 첫 실행 시 &quot;개발자를 확인할 수 없습니다&quot; 경고가 나타나면,
                  시스템 환경설정 → 보안 및 개인 정보 보호에서 &quot;확인 없이 열기&quot;를 클릭하세요.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* First Launch Setup */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">3</span> 첫 실행 및 기본 설정
              </CardTitle>
              <CardDescription>설치 후 추천 설정</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm font-semibold mb-3">추천 초기 설정:</p>
                <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                  <li>
                    <strong className="text-foreground">기본 터미널로 설정:</strong>
                    <br />
                    iTerm2 → Preferences → General → &quot;Make iTerm2 Default Terminal&quot; 체크
                  </li>
                  <li>
                    <strong className="text-foreground">컬러 스킴 변경:</strong>
                    <br />
                    Preferences → Profiles → Colors → Color Presets (Solarized Dark 권장)
                  </li>
                  <li>
                    <strong className="text-foreground">폰트 설정:</strong>
                    <br />
                    Preferences → Profiles → Text → Font (Monaco 14pt 또는 원하는 폰트)
                  </li>
                </ol>
              </div>

              <Separator />

              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm font-semibold mb-2">테마 추천</p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Solarized Dark (눈이 편한 어두운 테마)</li>
                  <li>• Dracula (인기있는 보라색 계열 테마)</li>
                  <li>• One Dark (VS Code와 유사한 테마)</li>
                  <li>• Snazzy (선명한 대비의 현대적인 테마)</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-12" />

      {/* macOS vs iTerm2 */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>macOS Terminal vs iTerm2</CardTitle>
            <CardDescription>
              iTerm2는 macOS 기본 터미널보다 더 많은 기능과 커스터마이징 옵션을 제공합니다
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="font-semibold text-lg">권장: iTerm2 사용</p>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      {/* 기본 단축키 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">기본 CLI 단축키</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <kbd className="px-2 py-1 bg-muted rounded text-sm">Ctrl + A</kbd>
                <span className="text-muted-foreground text-sm">Ahead</span>
              </CardTitle>
              <CardDescription>커서를 줄의 맨 앞으로 이동</CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <kbd className="px-2 py-1 bg-muted rounded text-sm">Ctrl + E</kbd>
                <span className="text-muted-foreground text-sm">End</span>
              </CardTitle>
              <CardDescription>커서를 줄의 맨 뒤로 이동</CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <kbd className="px-2 py-1 bg-muted rounded text-sm">Ctrl + K</kbd>
                <span className="text-muted-foreground text-sm">Kill</span>
              </CardTitle>
              <CardDescription>커서 위치부터 줄 끝까지 삭제</CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <kbd className="px-2 py-1 bg-muted rounded text-sm">Ctrl + U</kbd>
                <span className="text-muted-foreground text-sm">Unix line kill</span>
              </CardTitle>
              <CardDescription>커서 위치부터 줄 시작까지 삭제</CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <kbd className="px-2 py-1 bg-muted rounded text-sm">Ctrl + W</kbd>
                <span className="text-muted-foreground text-sm">Word</span>
              </CardTitle>
              <CardDescription>이전 단어 삭제</CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <kbd className="px-2 py-1 bg-muted rounded text-sm">Cmd + A</kbd>
              </CardTitle>
              <CardDescription>현재 입력 중인 줄의 전체 텍스트 선택</CardDescription>
            </CardHeader>
          </Card>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>단축키 어원</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p>이 단축키들은 1970년대 유닉스 터미널과 Emacs 에디터에서 시작되어,</p>
            <p>현재 bash, zsh 등 대부분의 셸과 많은 텍스트 편집기에서 표준처럼 사용되고 있습니다.</p>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      {/* iTerm2 전용 단축키 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">iTerm2 전용 단축키</h2>

        <Tabs defaultValue="tab" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="tab">탭 관리</TabsTrigger>
            <TabsTrigger value="window">창 관리</TabsTrigger>
            <TabsTrigger value="text">텍스트</TabsTrigger>
            <TabsTrigger value="screen">화면</TabsTrigger>
          </TabsList>

          <TabsContent value="tab" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>탭(Tab) 관리</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>새 탭 열기</span>
                  <kbd className="px-2 py-1 bg-muted rounded text-sm">Cmd + T</kbd>
                </div>
                <div className="flex items-center justify-between">
                  <span>현재 탭 닫기</span>
                  <kbd className="px-2 py-1 bg-muted rounded text-sm">Cmd + W</kbd>
                </div>
                <div className="flex items-center justify-between">
                  <span>탭 간 이동</span>
                  <kbd className="px-2 py-1 bg-muted rounded text-sm">Cmd + ←/→</kbd>
                </div>
                <div className="flex items-center justify-between">
                  <span>특정 탭으로 이동</span>
                  <kbd className="px-2 py-1 bg-muted rounded text-sm">Cmd + 숫자(1-9)</kbd>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="window" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>창(Window) 관리</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>새 창 열기</span>
                  <kbd className="px-2 py-1 bg-muted rounded text-sm">Cmd + N</kbd>
                </div>
                <div className="flex items-center justify-between">
                  <span>창을 수직으로 분할</span>
                  <kbd className="px-2 py-1 bg-muted rounded text-sm">Cmd + D</kbd>
                </div>
                <div className="flex items-center justify-between">
                  <span>창을 수평으로 분할</span>
                  <kbd className="px-2 py-1 bg-muted rounded text-sm">Cmd + Shift + D</kbd>
                </div>
                <div className="flex items-center justify-between">
                  <span>분할된 창 간 이동</span>
                  <kbd className="px-2 py-1 bg-muted rounded text-sm">Cmd + [/]</kbd>
                </div>
                <div className="flex items-center justify-between">
                  <span>분할된 창 크기 조정</span>
                  <kbd className="px-2 py-1 bg-muted rounded text-sm">Cmd + Option + ←/→/↑/↓</kbd>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="text" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>텍스트 편집</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>검색</span>
                  <kbd className="px-2 py-1 bg-muted rounded text-sm">Cmd + F</kbd>
                </div>
                <div className="flex items-center justify-between">
                  <span>화면 지우기</span>
                  <kbd className="px-2 py-1 bg-muted rounded text-sm">Cmd + K</kbd>
                </div>
                <div className="flex items-center justify-between">
                  <span>라인 시작으로 이동</span>
                  <kbd className="px-2 py-1 bg-muted rounded text-sm">Ctrl + A</kbd>
                </div>
                <div className="flex items-center justify-between">
                  <span>라인 끝으로 이동</span>
                  <kbd className="px-2 py-1 bg-muted rounded text-sm">Ctrl + E</kbd>
                </div>
                <div className="flex items-center justify-between">
                  <span>커서 앞의 텍스트 삭제</span>
                  <kbd className="px-2 py-1 bg-muted rounded text-sm">Ctrl + U</kbd>
                </div>
                <div className="flex items-center justify-between">
                  <span>커서 뒤의 텍스트 삭제</span>
                  <kbd className="px-2 py-1 bg-muted rounded text-sm">Ctrl + K</kbd>
                </div>
                <div className="flex items-center justify-between">
                  <span>이전 단어 삭제</span>
                  <kbd className="px-2 py-1 bg-muted rounded text-sm">Ctrl + W</kbd>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="screen" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>화면 및 스크롤</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>폰트 크기 조정</span>
                  <kbd className="px-2 py-1 bg-muted rounded text-sm">Cmd + +/-</kbd>
                </div>
                <div className="flex items-center justify-between">
                  <span>폰트 크기 초기화</span>
                  <kbd className="px-2 py-1 bg-muted rounded text-sm">Cmd + 0</kbd>
                </div>
                <div className="flex items-center justify-between">
                  <span>전체화면 토글</span>
                  <kbd className="px-2 py-1 bg-muted rounded text-sm">Cmd + Enter</kbd>
                </div>
                <div className="flex items-center justify-between">
                  <span>커서 위치 표시</span>
                  <kbd className="px-2 py-1 bg-muted rounded text-sm">Cmd + /</kbd>
                </div>
                <div className="flex items-center justify-between">
                  <span>페이지 단위 스크롤</span>
                  <kbd className="px-2 py-1 bg-muted rounded text-sm">Fn + ↑/↓</kbd>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      <Separator className="my-12" />

      {/* 추가 기능 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">추가 유용한 기능</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>선택 및 복사</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span>복사</span>
                <kbd className="px-2 py-1 bg-muted rounded text-sm">Cmd + C</kbd>
              </div>
              <div className="flex items-center justify-between">
                <span>붙여넣기</span>
                <kbd className="px-2 py-1 bg-muted rounded text-sm">Cmd + V</kbd>
              </div>
              <div className="flex items-center justify-between">
                <span>단어 선택</span>
                <kbd className="px-2 py-1 bg-muted rounded text-sm">더블클릭</kbd>
              </div>
              <div className="flex items-center justify-between">
                <span>라인 선택</span>
                <kbd className="px-2 py-1 bg-muted rounded text-sm">트리플클릭</kbd>
              </div>
              <div className="flex items-center justify-between">
                <span>사각형 선택</span>
                <kbd className="px-2 py-1 bg-muted rounded text-sm">Option + 드래그</kbd>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>기타 기능</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span>붙여넣기 히스토리</span>
                <kbd className="px-2 py-1 bg-muted rounded text-sm">Cmd + Shift + H</kbd>
              </div>
              <div className="flex items-center justify-between">
                <span>자동완성</span>
                <kbd className="px-2 py-1 bg-muted rounded text-sm">Cmd + ;</kbd>
              </div>
              <div className="flex items-center justify-between">
                <span>즉시 재생</span>
                <kbd className="px-2 py-1 bg-muted rounded text-sm">Cmd + Option + B</kbd>
              </div>
              <div className="flex items-center justify-between">
                <span>모든 탭에서 검색</span>
                <kbd className="px-2 py-1 bg-muted rounded text-sm">Cmd + Option + E</kbd>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
