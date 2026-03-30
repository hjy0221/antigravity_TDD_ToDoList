# TDD To-Do List 앱

이 프로젝트는 **TDD(테스트 주도 개발)** 원칙을 활용하여 구축된 To-Do List 애플리케이션입니다. 할 일 추가, 상태 토글, 삭제, 수정 및 불러오기를 포함한 핵심 할 일 목록 기능에 대해 견고하게 테스트 된 구현을 제공합니다.

## 🚀 기술 스택

- **프레임워크:** [Next.js](https://nextjs.org/) (React)
- **스타일링:** [Tailwind CSS](https://tailwindcss.com/)
- **UI 컴포넌트:** [Shadcn UI](https://ui.shadcn.com/)
- **테스트:** [Jest](https://jestjs.io/) & [React Testing Library](https://testing-library.com/)
- **언어:** TypeScript

## 📦 시작하기

### 사전 요구 사항
컴퓨터에 Node.js 및 npm이 설치되어 있는지 확인하세요.

### 설치 방법

1. 저장소를 클론합니다:
   ```bash
   git clone https://github.com/hjy0221/antigravity_TDD_ToDoList.git
   ```
   *참고: 기존에 의도되던 디렉토리가 있다면 해당 디렉토리(예: `cd "4_1 TDD"`)로 이동해 주세요.*

2. 패키지 의존성을 설치합니다:
   ```bash
   npm install
   ```

3. 개발 서버를 실행합니다:
   ```bash
   npm run dev
   ```

4. 브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인합니다.

## 🧪 테스트 (TDD)

이 프로젝트는 TDD 원칙을 엄격하게 따릅니다. 모든 커스텀 훅 및 핵심 로직은 구현 전에 Jest를 사용하여 테스트됩니다.

### 테스트 폴더 구조
테스트 파일은 테스트하는 대상 모듈 옆의 `__tests__` 폴더에 위치합니다.
- 예시: `src/hooks/__tests__/useTodos.test.ts`

### 테스트 실행하기

전체 테스트를 한 번에 실행하려면:
```bash
npm test
```

관찰(Watch) 모드로 테스트를 실행하려면 (개발 중 사용 권장):
```bash
npm run test:watch
```

## 📋 핵심 기능
- 새로운 할 일 추가
- 할 일의 완료 여부 상태 토글
- 할 일 삭제
- 기존 할 일의 내용 수정
- 할 일 목록 조회
