import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PageNavigation } from "@/components/page-navigation";
import { BackToTop } from "@/components/back-to-top";

export const metadata: Metadata = {
  title: "iTerm2 단축키 가이드 - AI 오케스트레이팅",
  description: "생산성을 높이는 터미널 단축키 완벽 가이드. macOS iTerm2 설치부터 활용까지.",
};

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

      <Separator className="my-12" />

      {/* 터미널 명령어 가이드 */}
      <section className="mb-12">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Linux/Unix 터미널 명령어</h2>
          <p className="text-muted-foreground">
            macOS 터미널에서 자주 사용하는 필수 명령어 모음
          </p>
        </div>

        <Tabs defaultValue="files" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-2">
            <TabsTrigger value="files">파일 탐색</TabsTrigger>
            <TabsTrigger value="manipulation">파일 조작</TabsTrigger>
            <TabsTrigger value="content">파일 내용</TabsTrigger>
            <TabsTrigger value="search">검색/필터</TabsTrigger>
            <TabsTrigger value="system">시스템</TabsTrigger>
          </TabsList>
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="network">네트워크</TabsTrigger>
            <TabsTrigger value="permission">권한</TabsTrigger>
            <TabsTrigger value="archive">압축</TabsTrigger>
            <TabsTrigger value="tips">팁/조합</TabsTrigger>
            <TabsTrigger value="macos">macOS 전용</TabsTrigger>
          </TabsList>

          {/* 파일 및 디렉토리 탐색 */}
          <TabsContent value="files" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>파일 및 디렉토리 탐색</CardTitle>
                <CardDescription>경로 확인, 목록 조회, 이동</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <kbd className="px-2 py-1 bg-muted rounded text-sm font-mono">pwd</kbd>
                    <p className="text-sm text-muted-foreground mt-1">현재 디렉토리 경로 출력</p>
                  </div>
                  <code className="text-xs bg-muted px-2 py-1 rounded">pwd</code>
                </div>
                <Separator />
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <kbd className="px-2 py-1 bg-muted rounded text-sm font-mono">ls</kbd>
                    <p className="text-sm text-muted-foreground mt-1">디렉토리 내용 목록</p>
                  </div>
                  <code className="text-xs bg-muted px-2 py-1 rounded">ls -la</code>
                </div>
                <Separator />
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <kbd className="px-2 py-1 bg-muted rounded text-sm font-mono">cd</kbd>
                    <p className="text-sm text-muted-foreground mt-1">디렉토리 이동</p>
                  </div>
                  <code className="text-xs bg-muted px-2 py-1 rounded">cd ~/Documents</code>
                </div>
                <Separator />
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <kbd className="px-2 py-1 bg-muted rounded text-sm font-mono">tree</kbd>
                    <p className="text-sm text-muted-foreground mt-1">디렉토리 구조를 트리로 표시</p>
                  </div>
                  <code className="text-xs bg-muted px-2 py-1 rounded">tree -L 2</code>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 파일 조작 */}
          <TabsContent value="manipulation" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>파일 조작</CardTitle>
                <CardDescription>복사, 이동, 삭제, 생성</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <kbd className="px-2 py-1 bg-muted rounded text-sm font-mono">cp</kbd>
                    <p className="text-sm text-muted-foreground mt-1">파일/폴더 복사</p>
                  </div>
                  <code className="text-xs bg-muted px-2 py-1 rounded">cp -r folder/ newfolder/</code>
                </div>
                <Separator />
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <kbd className="px-2 py-1 bg-muted rounded text-sm font-mono">mv</kbd>
                    <p className="text-sm text-muted-foreground mt-1">파일 이동 또는 이름 변경</p>
                  </div>
                  <code className="text-xs bg-muted px-2 py-1 rounded">mv old.txt new.txt</code>
                </div>
                <Separator />
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <kbd className="px-2 py-1 bg-muted rounded text-sm font-mono">rm</kbd>
                    <p className="text-sm text-muted-foreground mt-1">파일 삭제</p>
                  </div>
                  <code className="text-xs bg-muted px-2 py-1 rounded">rm -rf folder/</code>
                </div>
                <Separator />
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <kbd className="px-2 py-1 bg-muted rounded text-sm font-mono">mkdir</kbd>
                    <p className="text-sm text-muted-foreground mt-1">디렉토리 생성</p>
                  </div>
                  <code className="text-xs bg-muted px-2 py-1 rounded">mkdir -p path/to/folder</code>
                </div>
                <Separator />
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <kbd className="px-2 py-1 bg-muted rounded text-sm font-mono">touch</kbd>
                    <p className="text-sm text-muted-foreground mt-1">빈 파일 생성 또는 타임스탬프 갱신</p>
                  </div>
                  <code className="text-xs bg-muted px-2 py-1 rounded">touch newfile.txt</code>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 파일 내용 확인 */}
          <TabsContent value="content" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>파일 내용 확인</CardTitle>
                <CardDescription>파일 읽기, 모니터링</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <kbd className="px-2 py-1 bg-muted rounded text-sm font-mono">cat</kbd>
                    <p className="text-sm text-muted-foreground mt-1">파일 전체 내용 출력</p>
                  </div>
                  <code className="text-xs bg-muted px-2 py-1 rounded">cat file.txt</code>
                </div>
                <Separator />
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <kbd className="px-2 py-1 bg-muted rounded text-sm font-mono">head</kbd>
                    <p className="text-sm text-muted-foreground mt-1">파일 앞부분 출력</p>
                  </div>
                  <code className="text-xs bg-muted px-2 py-1 rounded">head -n 20 file.txt</code>
                </div>
                <Separator />
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <kbd className="px-2 py-1 bg-muted rounded text-sm font-mono">tail</kbd>
                    <p className="text-sm text-muted-foreground mt-1">파일 뒷부분 출력 (실시간 모니터링)</p>
                  </div>
                  <code className="text-xs bg-muted px-2 py-1 rounded">tail -f log.txt</code>
                </div>
                <Separator />
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <kbd className="px-2 py-1 bg-muted rounded text-sm font-mono">less</kbd>
                    <p className="text-sm text-muted-foreground mt-1">페이지 단위로 파일 보기 (q로 종료)</p>
                  </div>
                  <code className="text-xs bg-muted px-2 py-1 rounded">less file.txt</code>
                </div>
                <Separator />
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <kbd className="px-2 py-1 bg-muted rounded text-sm font-mono">wc</kbd>
                    <p className="text-sm text-muted-foreground mt-1">줄/단어/바이트 수 세기</p>
                  </div>
                  <code className="text-xs bg-muted px-2 py-1 rounded">wc -l file.txt</code>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 검색 및 필터링 */}
          <TabsContent value="search" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>검색 및 필터링</CardTitle>
                <CardDescription>파일 찾기, 텍스트 검색 및 처리</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <kbd className="px-2 py-1 bg-muted rounded text-sm font-mono">find</kbd>
                    <p className="text-sm text-muted-foreground mt-1">파일/폴더 검색</p>
                  </div>
                  <code className="text-xs bg-muted px-2 py-1 rounded">{`find . -name "*.txt"`}</code>
                </div>
                <Separator />
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <kbd className="px-2 py-1 bg-muted rounded text-sm font-mono">grep</kbd>
                    <p className="text-sm text-muted-foreground mt-1">텍스트 패턴 검색</p>
                  </div>
                  <code className="text-xs bg-muted px-2 py-1 rounded">{`grep -r "검색어" ./`}</code>
                </div>
                <Separator />
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <kbd className="px-2 py-1 bg-muted rounded text-sm font-mono">awk</kbd>
                    <p className="text-sm text-muted-foreground mt-1">텍스트 처리 (열 추출)</p>
                  </div>
                  <code className="text-xs bg-muted px-2 py-1 rounded">{`awk '{print $1}' file.txt`}</code>
                </div>
                <Separator />
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <kbd className="px-2 py-1 bg-muted rounded text-sm font-mono">sed</kbd>
                    <p className="text-sm text-muted-foreground mt-1">텍스트 치환</p>
                  </div>
                  <code className="text-xs bg-muted px-2 py-1 rounded">{`sed 's/old/new/g' file.txt`}</code>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 시스템 및 프로세스 */}
          <TabsContent value="system" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>시스템 및 프로세스</CardTitle>
                <CardDescription>프로세스 관리, 디스크 사용량</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <kbd className="px-2 py-1 bg-muted rounded text-sm font-mono">ps</kbd>
                    <p className="text-sm text-muted-foreground mt-1">실행 중인 프로세스 목록</p>
                  </div>
                  <code className="text-xs bg-muted px-2 py-1 rounded">ps aux</code>
                </div>
                <Separator />
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <kbd className="px-2 py-1 bg-muted rounded text-sm font-mono">top / htop</kbd>
                    <p className="text-sm text-muted-foreground mt-1">실시간 프로세스 모니터링</p>
                  </div>
                  <code className="text-xs bg-muted px-2 py-1 rounded">top</code>
                </div>
                <Separator />
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <kbd className="px-2 py-1 bg-muted rounded text-sm font-mono">kill</kbd>
                    <p className="text-sm text-muted-foreground mt-1">프로세스 종료</p>
                  </div>
                  <code className="text-xs bg-muted px-2 py-1 rounded">kill -9 PID</code>
                </div>
                <Separator />
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <kbd className="px-2 py-1 bg-muted rounded text-sm font-mono">df</kbd>
                    <p className="text-sm text-muted-foreground mt-1">디스크 사용량</p>
                  </div>
                  <code className="text-xs bg-muted px-2 py-1 rounded">df -h</code>
                </div>
                <Separator />
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <kbd className="px-2 py-1 bg-muted rounded text-sm font-mono">du</kbd>
                    <p className="text-sm text-muted-foreground mt-1">디렉토리 크기</p>
                  </div>
                  <code className="text-xs bg-muted px-2 py-1 rounded">du -sh *</code>
                </div>
                <Separator />
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <kbd className="px-2 py-1 bg-muted rounded text-sm font-mono">whoami</kbd>
                    <p className="text-sm text-muted-foreground mt-1">현재 사용자 확인</p>
                  </div>
                  <code className="text-xs bg-muted px-2 py-1 rounded">whoami</code>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 네트워크 */}
          <TabsContent value="network" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>네트워크</CardTitle>
                <CardDescription>네트워크 요청, 연결 테스트</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <kbd className="px-2 py-1 bg-muted rounded text-sm font-mono">curl</kbd>
                    <p className="text-sm text-muted-foreground mt-1">URL 요청</p>
                  </div>
                  <code className="text-xs bg-muted px-2 py-1 rounded">curl -O https://example.com/file.zip</code>
                </div>
                <Separator />
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <kbd className="px-2 py-1 bg-muted rounded text-sm font-mono">wget</kbd>
                    <p className="text-sm text-muted-foreground mt-1">파일 다운로드 (설치 필요)</p>
                  </div>
                  <code className="text-xs bg-muted px-2 py-1 rounded">wget https://example.com/file.zip</code>
                </div>
                <Separator />
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <kbd className="px-2 py-1 bg-muted rounded text-sm font-mono">ping</kbd>
                    <p className="text-sm text-muted-foreground mt-1">네트워크 연결 테스트</p>
                  </div>
                  <code className="text-xs bg-muted px-2 py-1 rounded">ping google.com</code>
                </div>
                <Separator />
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <kbd className="px-2 py-1 bg-muted rounded text-sm font-mono">ifconfig</kbd>
                    <p className="text-sm text-muted-foreground mt-1">네트워크 인터페이스 정보</p>
                  </div>
                  <code className="text-xs bg-muted px-2 py-1 rounded">ifconfig</code>
                </div>
                <Separator />
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <kbd className="px-2 py-1 bg-muted rounded text-sm font-mono">lsof</kbd>
                    <p className="text-sm text-muted-foreground mt-1">포트 사용 확인</p>
                  </div>
                  <code className="text-xs bg-muted px-2 py-1 rounded">lsof -i :8080</code>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 권한 및 소유권 */}
          <TabsContent value="permission" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>권한 및 소유권</CardTitle>
                <CardDescription>파일 권한 관리</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <kbd className="px-2 py-1 bg-muted rounded text-sm font-mono">chmod</kbd>
                    <p className="text-sm text-muted-foreground mt-1">파일 권한 변경</p>
                  </div>
                  <code className="text-xs bg-muted px-2 py-1 rounded">chmod 755 script.sh</code>
                </div>
                <Separator />
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <kbd className="px-2 py-1 bg-muted rounded text-sm font-mono">chown</kbd>
                    <p className="text-sm text-muted-foreground mt-1">소유자 변경</p>
                  </div>
                  <code className="text-xs bg-muted px-2 py-1 rounded">chown user:group file.txt</code>
                </div>
                <Separator />
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <kbd className="px-2 py-1 bg-muted rounded text-sm font-mono">sudo</kbd>
                    <p className="text-sm text-muted-foreground mt-1">관리자 권한 실행</p>
                  </div>
                  <code className="text-xs bg-muted px-2 py-1 rounded">sudo command</code>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 압축 및 아카이브 */}
          <TabsContent value="archive" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>압축 및 아카이브</CardTitle>
                <CardDescription>파일 압축 및 해제</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <kbd className="px-2 py-1 bg-muted rounded text-sm font-mono">tar</kbd>
                    <p className="text-sm text-muted-foreground mt-1">아카이브 생성/해제</p>
                  </div>
                  <div className="text-right">
                    <code className="text-xs bg-muted px-2 py-1 rounded block mb-1">tar -czvf archive.tar.gz folder/</code>
                    <code className="text-xs bg-muted px-2 py-1 rounded block">tar -xzvf archive.tar.gz</code>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <kbd className="px-2 py-1 bg-muted rounded text-sm font-mono">zip / unzip</kbd>
                    <p className="text-sm text-muted-foreground mt-1">ZIP 압축</p>
                  </div>
                  <div className="text-right">
                    <code className="text-xs bg-muted px-2 py-1 rounded block mb-1">zip -r archive.zip folder/</code>
                    <code className="text-xs bg-muted px-2 py-1 rounded block">unzip archive.zip</code>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 유용한 조합 및 팁 */}
          <TabsContent value="tips" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>유용한 조합 및 팁</CardTitle>
                <CardDescription>파이프, 리다이렉션, 히스토리</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="font-medium mb-2">파이프(|)로 명령어 연결</p>
                  <div className="bg-muted p-3 rounded text-sm font-mono space-y-1">
                    <p>{`ls -la | grep ".txt"`} <span className="text-muted-foreground ml-2"># txt 파일만 필터링</span></p>
                    <p>cat file.txt | sort | uniq <span className="text-muted-foreground ml-2"># 정렬 후 중복 제거</span></p>
                  </div>
                </div>
                <Separator />
                <div>
                  <p className="font-medium mb-2">리다이렉션</p>
                  <div className="bg-muted p-3 rounded text-sm font-mono space-y-1">
                    <p>{`echo "hello" > file.txt`} <span className="text-muted-foreground ml-2"># 덮어쓰기</span></p>
                    <p>{`echo "world" >> file.txt`} <span className="text-muted-foreground ml-2"># 추가</span></p>
                  </div>
                </div>
                <Separator />
                <div>
                  <p className="font-medium mb-2">명령어 히스토리</p>
                  <div className="bg-muted p-3 rounded text-sm font-mono space-y-1">
                    <p>history <span className="text-muted-foreground ml-2"># 이전 명령어 목록</span></p>
                    <p>!! <span className="text-muted-foreground ml-2"># 마지막 명령어 재실행</span></p>
                    <p>!grep <span className="text-muted-foreground ml-2"># grep으로 시작하는 마지막 명령어</span></p>
                  </div>
                </div>
                <Separator />
                <div>
                  <p className="font-medium mb-2">백그라운드 실행</p>
                  <div className="bg-muted p-3 rounded text-sm font-mono space-y-1">
                    <p>command & <span className="text-muted-foreground ml-2"># 백그라운드 실행</span></p>
                    <p>nohup command & <span className="text-muted-foreground ml-2"># 터미널 종료해도 계속 실행</span></p>
                  </div>
                </div>
                <Separator />
                <div>
                  <p className="font-medium mb-2">필수 단축키</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">실행 중인 명령 중단</span>
                      <kbd className="px-2 py-1 bg-muted rounded text-sm">Ctrl + C</kbd>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">일시정지</span>
                      <kbd className="px-2 py-1 bg-muted rounded text-sm">Ctrl + Z</kbd>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">히스토리 검색</span>
                      <kbd className="px-2 py-1 bg-muted rounded text-sm">Ctrl + R</kbd>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">자동완성</span>
                      <kbd className="px-2 py-1 bg-muted rounded text-sm">Tab</kbd>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* macOS 전용 명령어 */}
          <TabsContent value="macos" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>macOS 전용 명령어</CardTitle>
                <CardDescription>macOS에서만 사용 가능한 유용한 명령어</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <kbd className="px-2 py-1 bg-muted rounded text-sm font-mono">open</kbd>
                    <p className="text-sm text-muted-foreground mt-1">파일/폴더/앱 열기</p>
                  </div>
                  <div className="text-right">
                    <code className="text-xs bg-muted px-2 py-1 rounded block mb-1">open .</code>
                    <code className="text-xs bg-muted px-2 py-1 rounded block">{`open -a "Safari"`}</code>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <kbd className="px-2 py-1 bg-muted rounded text-sm font-mono">pbcopy</kbd>
                    <p className="text-sm text-muted-foreground mt-1">클립보드에 복사</p>
                  </div>
                  <code className="text-xs bg-muted px-2 py-1 rounded">cat file.txt | pbcopy</code>
                </div>
                <Separator />
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <kbd className="px-2 py-1 bg-muted rounded text-sm font-mono">pbpaste</kbd>
                    <p className="text-sm text-muted-foreground mt-1">클립보드 내용 붙여넣기</p>
                  </div>
                  <code className="text-xs bg-muted px-2 py-1 rounded">{`pbpaste > file.txt`}</code>
                </div>
                <Separator />
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <kbd className="px-2 py-1 bg-muted rounded text-sm font-mono">say</kbd>
                    <p className="text-sm text-muted-foreground mt-1">텍스트 음성 출력</p>
                  </div>
                  <code className="text-xs bg-muted px-2 py-1 rounded">{`say "Hello"`}</code>
                </div>
                <Separator />
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <kbd className="px-2 py-1 bg-muted rounded text-sm font-mono">caffeinate</kbd>
                    <p className="text-sm text-muted-foreground mt-1">잠자기 방지</p>
                  </div>
                  <code className="text-xs bg-muted px-2 py-1 rounded">caffeinate -t 3600</code>
                </div>
                <Separator />
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <kbd className="px-2 py-1 bg-muted rounded text-sm font-mono">mdfind</kbd>
                    <p className="text-sm text-muted-foreground mt-1">Spotlight 검색</p>
                  </div>
                  <code className="text-xs bg-muted px-2 py-1 rounded">{`mdfind "keyword"`}</code>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      <PageNavigation currentPath="/iterm-guide" />
      <BackToTop />
    </div>
  );
}
