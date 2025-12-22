import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeBlock, CodeBlockMultiLine } from "@/components/ui/code-block";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function GitGuide() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Git 완벽 가이드</h1>
        <p className="text-xl text-muted-foreground mb-6">
          버전 관리의 기초부터 실전 워크플로우까지
        </p>
        <div className="flex gap-2 justify-center flex-wrap">
          <Badge variant="secondary">Git</Badge>
          <Badge variant="secondary">GitHub</Badge>
          <Badge variant="secondary">버전 관리</Badge>
          <Badge variant="secondary">협업</Badge>
        </div>
      </div>

      {/* What is Git */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Git이란?</h2>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>버전 관리 시스템 (VCS)</CardTitle>
            <CardDescription>
              파일의 변경 사항을 추적하고 여러 사람이 협업할 수 있게 해주는 도구
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Git의 장점</h4>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>모든 변경 사항의 기록을 보존하여 언제든 이전 버전으로 되돌릴 수 있음</li>
                <li>여러 개발자가 동시에 작업할 수 있는 브랜치 시스템</li>
                <li>분산 시스템으로 인터넷 없이도 로컬에서 작업 가능</li>
                <li>충돌을 감지하고 안전하게 병합할 수 있는 시스템</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Basic Concepts */}
      <section className="mb-12" id="concepts">
        <h2 className="text-3xl font-bold mb-6">핵심 개념</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Repository (저장소)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-3">
                프로젝트의 모든 파일과 변경 이력을 저장하는 공간
              </p>
              <div className="space-y-2">
                <div>
                  <Badge variant="outline" className="mb-2">Local Repository</Badge>
                  <p className="text-sm text-muted-foreground">내 컴퓨터에 있는 저장소</p>
                </div>
                <div>
                  <Badge variant="outline" className="mb-2">Remote Repository</Badge>
                  <p className="text-sm text-muted-foreground">GitHub 등 온라인 저장소</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Commit (커밋)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-3">
                특정 시점의 파일 상태를 저장하는 스냅샷
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>각 커밋은 고유한 ID를 가짐</li>
                <li>누가, 언제, 무엇을 변경했는지 기록</li>
                <li>의미있는 단위로 커밋하는 것이 중요</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Branch (브랜치)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-3">
                독립적인 작업 공간을 만들어 병렬로 개발
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li><code className="text-xs bg-muted px-1 py-0.5 rounded">main</code>: 기본 브랜치 (배포 가능한 안정 버전)</li>
                <li>기능 개발은 별도 브랜치에서 진행</li>
                <li>완성 후 main에 병합(merge)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Merge (병합)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-3">
                다른 브랜치의 변경사항을 현재 브랜치에 통합
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>자동 병합: 충돌 없이 자동으로 합쳐짐</li>
                <li>수동 병합: 충돌 발생 시 직접 해결</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Git 작업 흐름 이해하기</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-muted p-6 rounded-lg font-mono text-sm">
              <div className="space-y-2">
                <div className="flex items-center gap-4">
                  <Badge>Working Directory</Badge>
                  <span className="text-muted-foreground">→</span>
                  <span className="text-muted-foreground">작업 중인 파일들</span>
                </div>
                <div className="flex items-center gap-4 ml-8">
                  <code className="text-xs">git add</code>
                  <span className="text-muted-foreground">↓</span>
                </div>
                <div className="flex items-center gap-4">
                  <Badge variant="secondary">Staging Area</Badge>
                  <span className="text-muted-foreground">→</span>
                  <span className="text-muted-foreground">커밋 준비 중인 파일들</span>
                </div>
                <div className="flex items-center gap-4 ml-8">
                  <code className="text-xs">git commit</code>
                  <span className="text-muted-foreground">↓</span>
                </div>
                <div className="flex items-center gap-4">
                  <Badge variant="outline">Local Repository</Badge>
                  <span className="text-muted-foreground">→</span>
                  <span className="text-muted-foreground">로컬 저장소에 저장</span>
                </div>
                <div className="flex items-center gap-4 ml-8">
                  <code className="text-xs">git push</code>
                  <span className="text-muted-foreground">↓</span>
                </div>
                <div className="flex items-center gap-4">
                  <Badge variant="default">Remote Repository</Badge>
                  <span className="text-muted-foreground">→</span>
                  <span className="text-muted-foreground">원격 저장소에 업로드</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Essential Commands */}
      <section className="mb-12" id="commands">
        <h2 className="text-3xl font-bold mb-6">필수 명령어</h2>

        <div className="space-y-6">
          {/* Initialize & Clone */}
          <Card>
            <CardHeader>
              <CardTitle>시작하기</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">새 저장소 만들기</h4>
                <CodeBlock code="git init" />
                <p className="text-sm text-muted-foreground mt-2">현재 디렉토리를 Git 저장소로 초기화</p>
              </div>
              <Separator />
              <div>
                <h4 className="font-semibold mb-2">기존 저장소 복제하기</h4>
                <CodeBlock code="git clone https://github.com/username/repository.git" />
                <p className="text-sm text-muted-foreground mt-2">원격 저장소를 로컬로 복사</p>
              </div>
            </CardContent>
          </Card>

          {/* Status & Add */}
          <Card>
            <CardHeader>
              <CardTitle>변경사항 추적하기</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">상태 확인</h4>
                <CodeBlock code="git status" />
                <p className="text-sm text-muted-foreground mt-2">변경된 파일, 추가된 파일 등 현재 상태 표시</p>
              </div>
              <Separator />
              <div>
                <h4 className="font-semibold mb-2">파일 추가 (Staging)</h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">특정 파일만 추가</p>
                    <CodeBlock code="git add filename.txt" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">모든 변경 파일 추가</p>
                    <CodeBlock code="git add ." />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Commit */}
          <Card>
            <CardHeader>
              <CardTitle>커밋하기</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">변경사항 저장</h4>
                <CodeBlock code='git commit -m "커밋 메시지"' />
                <p className="text-sm text-muted-foreground mt-2">스테이징된 파일들을 커밋</p>
              </div>
              <Separator />
              <div>
                <h4 className="font-semibold mb-3">좋은 커밋 메시지 작성법</h4>
                <div className="bg-muted p-4 rounded-lg space-y-2 text-sm font-mono">
                  <div className="flex items-start gap-2">
                    <span className="text-green-500">O</span>
                    <code>&quot;회원가입 기능 추가&quot;</code>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-500">O</span>
                    <code>&quot;로그인 버그 수정: 비밀번호 검증 오류&quot;</code>
                  </div>
                  <div className="h-2"></div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-500">X</span>
                    <code>&quot;수정&quot;</code>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-500">X</span>
                    <code>&quot;update&quot;</code>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Push & Pull */}
          <Card>
            <CardHeader>
              <CardTitle>원격 저장소와 동기화</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">로컬 변경사항 업로드</h4>
                <CodeBlock code="git push" />
                <p className="text-sm text-muted-foreground mt-2">로컬 커밋을 원격 저장소에 업로드</p>
              </div>
              <Separator />
              <div>
                <h4 className="font-semibold mb-2">원격 변경사항 다운로드</h4>
                <CodeBlock code="git pull" />
                <p className="text-sm text-muted-foreground mt-2">원격 저장소의 최신 변경사항을 가져와서 병합</p>
              </div>
            </CardContent>
          </Card>

          {/* Branch */}
          <Card>
            <CardHeader>
              <CardTitle>브랜치 관리</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">브랜치 조회 및 생성</h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">현재 브랜치 목록 보기</p>
                    <CodeBlock code="git branch" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">새 브랜치 만들기</p>
                    <CodeBlock code="git branch feature/login" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">브랜치 만들고 바로 이동</p>
                    <CodeBlock code="git checkout -b feature/login" />
                  </div>
                </div>
              </div>
              <Separator />
              <div>
                <h4 className="font-semibold mb-2">브랜치 이동</h4>
                <CodeBlock code="git checkout main" />
              </div>
              <Separator />
              <div>
                <h4 className="font-semibold mb-2">브랜치 삭제</h4>
                <CodeBlock code="git branch -d feature/login" />
              </div>
            </CardContent>
          </Card>

          {/* Merge */}
          <Card>
            <CardHeader>
              <CardTitle>브랜치 병합</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">기본 병합</h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">main 브랜치로 이동</p>
                    <CodeBlock code="git checkout main" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">feature 브랜치를 main에 병합</p>
                    <CodeBlock code="git merge feature/login" />
                  </div>
                </div>
              </div>
              <Separator />
              <div>
                <h4 className="font-semibold mb-2">충돌 해결</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  같은 파일의 같은 부분을 서로 다르게 수정했을 때 충돌 발생
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">1. 충돌 발생 시 파일 확인</p>
                    <CodeBlock code="git status" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">2. 충돌 해결 후 스테이징</p>
                    <CodeBlock code="git add ." />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">3. 병합 완료</p>
                    <CodeBlock code="git commit" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Log & Diff */}
          <Card>
            <CardHeader>
              <CardTitle>히스토리 확인</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">커밋 로그 보기</h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">전체 커밋 히스토리</p>
                    <CodeBlock code="git log" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">간단하게 한 줄씩</p>
                    <CodeBlock code="git log --oneline" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">그래프로 보기</p>
                    <CodeBlock code="git log --oneline --graph --all" />
                  </div>
                </div>
              </div>
              <Separator />
              <div>
                <h4 className="font-semibold mb-2">변경사항 비교</h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">작업 중인 파일과 마지막 커밋 비교</p>
                    <CodeBlock code="git diff" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">스테이징된 파일 비교</p>
                    <CodeBlock code="git diff --staged" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Undo */}
          <Card>
            <CardHeader>
              <CardTitle>되돌리기</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">스테이징 취소</h4>
                <CodeBlock code="git restore --staged filename.txt" />
                <p className="text-sm text-muted-foreground mt-2">add를 취소하고 Unstaged 상태로</p>
              </div>
              <Separator />
              <div>
                <h4 className="font-semibold mb-2">파일 변경사항 취소</h4>
                <CodeBlock code="git restore filename.txt" />
                <p className="text-sm text-muted-foreground mt-2">
                  주의: 작업 중인 변경사항이 완전히 사라집니다
                </p>
              </div>
              <Separator />
              <div>
                <h4 className="font-semibold mb-2">커밋 되돌리기</h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">직전 커밋 취소 (변경사항은 유지)</p>
                    <CodeBlock code="git reset --soft HEAD~1" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">직전 커밋 취소 (변경사항도 삭제) - 주의!</p>
                    <CodeBlock code="git reset --hard HEAD~1" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Workflows */}
      <section className="mb-12" id="workflows">
        <h2 className="text-3xl font-bold mb-6">실전 워크플로우</h2>

        <div className="space-y-6">
          {/* Solo Development */}
          <Card>
            <CardHeader>
              <CardTitle>혼자 개발할 때</CardTitle>
              <CardDescription>기본적인 Git 사용 흐름</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-3">Step 1: 저장소 준비</h4>
                <CodeBlock code="git clone https://github.com/username/my-project.git" />
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-3">Step 2: 작업하기</h4>
                <div className="space-y-3">
                  <CodeBlock code="git status" />
                  <CodeBlock code="git add ." />
                  <CodeBlock code='git commit -m "첫 번째 기능 추가"' />
                </div>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-3">Step 3: 업로드</h4>
                <CodeBlock code="git push" />
              </div>
            </CardContent>
          </Card>

          {/* Feature Branch Workflow */}
          <Card>
            <CardHeader>
              <CardTitle>기능 브랜치 워크플로우</CardTitle>
              <CardDescription>새 기능을 개발할 때 권장하는 방식</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-3">Step 1: 새 기능 브랜치 생성</h4>
                <CodeBlockMultiLine lines={[
                  "git checkout main",
                  "git pull",
                  "git checkout -b feature/user-profile"
                ]} />
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-3">Step 2: 기능 개발 및 커밋</h4>
                <CodeBlockMultiLine lines={[
                  "git add .",
                  "git commit -m \"사용자 프로필 UI 추가\""
                ]} />
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-3">Step 3: 원격에 푸시</h4>
                <CodeBlock code="git push -u origin feature/user-profile" />
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-3">Step 4: main에 병합</h4>
                <CodeBlockMultiLine lines={[
                  "git checkout main",
                  "git pull",
                  "git merge feature/user-profile",
                  "git push"
                ]} />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Best Practices */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Git 사용 팁</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>좋은 습관</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">O</span>
                  <span>자주 커밋하기 (의미있는 단위로)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">O</span>
                  <span>명확한 커밋 메시지 작성</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">O</span>
                  <span>작업 시작 전 항상 pull하기</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">O</span>
                  <span>브랜치 전략 사용하기</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">O</span>
                  <span>.gitignore로 불필요한 파일 제외</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>피해야 할 것</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">X</span>
                  <span>main 브랜치에 직접 작업</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">X</span>
                  <span>너무 큰 커밋 (여러 기능을 한 번에)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">X</span>
                  <span>의미 없는 커밋 메시지</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">X</span>
                  <span>비밀번호, API 키 커밋</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">X</span>
                  <span>node_modules 같은 큰 폴더 커밋</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* .gitignore */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">.gitignore 설정</h2>

        <Card>
          <CardHeader>
            <CardTitle>.gitignore 파일</CardTitle>
            <CardDescription>Git이 무시할 파일/폴더를 지정</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Node.js 프로젝트 예시</h4>
              <CodeBlockMultiLine lines={[
                "# 의존성",
                "node_modules/",
                "",
                "# 환경 변수",
                ".env",
                ".env.local",
                "",
                "# 빌드 결과물",
                "dist/",
                ".next/",
                "",
                "# OS 파일",
                ".DS_Store"
              ]} />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Quick Reference */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">빠른 참조</h2>

        <Card>
          <CardHeader>
            <CardTitle>자주 쓰는 명령어 모음</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-semibold mb-3">기본</h4>
                <div className="space-y-2">
                  <CodeBlock code="git init" />
                  <CodeBlock code="git clone <url>" />
                  <CodeBlock code="git status" />
                  <CodeBlock code="git add ." />
                  <CodeBlock code='git commit -m "message"' />
                  <CodeBlock code="git push" />
                  <CodeBlock code="git pull" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">브랜치</h4>
                <div className="space-y-2">
                  <CodeBlock code="git branch" />
                  <CodeBlock code="git branch <name>" />
                  <CodeBlock code="git checkout <branch>" />
                  <CodeBlock code="git checkout -b <branch>" />
                  <CodeBlock code="git merge <branch>" />
                  <CodeBlock code="git branch -d <branch>" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Resources */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">더 배우기</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>공식 문서</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <a href="https://git-scm.com/doc" target="_blank" rel="noopener" className="block text-primary hover:underline">
                Git 공식 문서
              </a>
              <a href="https://docs.github.com" target="_blank" rel="noopener" className="block text-primary hover:underline">
                GitHub Docs
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>연습하기</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <a href="https://learngitbranching.js.org/?locale=ko" target="_blank" rel="noopener" className="block text-primary hover:underline">
                Learn Git Branching (한국어)
              </a>
              <a href="https://github.com/skills" target="_blank" rel="noopener" className="block text-primary hover:underline">
                GitHub Skills
              </a>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
