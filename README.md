# TDD To-Do List 앱

[日本語](https://github.com/hjy0221/antigravity_TDD_ToDoList#%E6%97%A5%E6%9C%AC%E8%AA%9E) · [English](https://github.com/hjy0221/antigravity_TDD_ToDoList#english) · [한국어](https://github.com/hjy0221/antigravity_TDD_ToDoList#%ED%95%9C%EA%B5%AD%EC%96%B4)

## 日本語

[日本語](https://github.com/hjy0221/antigravity_TDD_ToDoList#%E6%97%A5%E6%9C%AC%E8%AA%9E) · [English](https://github.com/hjy0221/antigravity_TDD_ToDoList#english) · [한국어](https://github.com/hjy0221/antigravity_TDD_ToDoList#%ED%95%9C%EA%B5%AD%EC%96%B4)

このプロジェクトは、**TDD（テスト主導開発）**の原則を活用して構築されたTo-Do Listアプリケーションです。タスクの追加、ステータスの切り替え、削除、変更、読み込みなど、コアのタスクリスト機能を確実にテストした実装を提供します。

## 🚀技術スタック

- **フレームワーク:** [Next.js](https://nextjs.org/) (React)
- **スタイリング:** [Tailwind CSS](https://tailwindcss.com/)
- **UIコンポーネント:** [Shadcn UI](https://ui.shadcn.com/)
- **テスト:** [Jest](https://jestjs.io/) & [React Testing Library](https://testing-library.com/)
- **言語：** TypeScript

## 📦 はじめに

### 前提条件
コンピュータにNode.jsとnpmがインストールされていることを確認してください。

### インストール方法

1. リポジトリをクローンします。
   ```bash
   git clone https://github.com/hjy0221/antigravity_TDD_ToDoList.git
   ```
   *注：既存のディレクトリがある場合は、そのディレクトリ（`cd "4_1 TDD"`など）に移動してください。*

2. パッケージ依存関係をインストールします。
   ```bash
   npm install
   ```

3. 開発サーバーを実行します。
   ```bash
   npm run dev
   ```

4.ブラウザで[http://localhost:3000](http://localhost:3000）を開き、結果を確認します。

## 🧪テスト(TDD)

このプロジェクトはTDDの原則に厳密に従います。すべてのカスタムフックとコアロジックは、実装前にJestを使用してテストされます。

### テストフォルダ構造
テストファイルは、テストするターゲットモジュールの横にある`__tests__`フォルダにあります。
- 例: `src/hooks/__tests__/useTodos.test.ts`

### テストを実行する

フルテストを一度に実行するには：
```bash
npm test
```

観察モードでテストを実行するには（開発中に使用することをお勧めします）：
```bash
npm run test:watch
```

## 📋 コア機能
- 新しいToDoを追加
- やるべきことが完了したかどうかステータストグル
- ToDoを削除
- 既存のタスクの内容を編集
- ToDoリストを見る

## English

[日本語](https://github.com/hjy0221/antigravity_TDD_ToDoList#%E6%97%A5%E6%9C%AC%E8%AA%9E) · [English](https://github.com/hjy0221/antigravity_TDD_ToDoList#english) · [한국어](https://github.com/hjy0221/antigravity_TDD_ToDoList#%ED%95%9C%EA%B5%AD%EC%96%B4)

This project is a To-Do List application built utilizing **Test Driven Development (TDD)** principles. It provides a solid, tested implementation of core to-do list functionality, including adding, toggling status, deleting, modifying, and loading tasks.

## 🚀 Technology Stack

- **Framework:** [Next.js](https://nextjs.org/) (React)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Component:** [Shadcn UI](https://ui.shadcn.com/)
- **Test:** [Jest](https://jestjs.io/) & [React Testing Library](https://testing-library.com/)
- **Language:** TypeScript

## 📦 Getting started

### Prerequisites
Make sure you have Node.js and npm installed on your computer.

### How to install

1. Clone the repository:
   ```bash
   git clone https://github.com/hjy0221/antigravity_TDD_ToDoList.git
   ```
   *Note: If there is an existing intended directory, please move to that directory (e.g. `cd "4_1 TDD"`).*

2. Install package dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to check the results.

## 🧪 Testing (TDD)

This project strictly follows TDD principles. All custom hooks and core logic are tested using Jest before implementation.

### Test folder structure
Test files are located in the `__tests__` folder next to the module being tested.
- Example: `src/hooks/__tests__/useTodos.test.ts`

### Running the tests

To run the entire test at once:
```bash
npm test
```

To run tests in Watch mode (recommended for use during development):
```bash
npm run test:watch
```

## 📋 Core features
- Add new tasks
- Toggle the completion status of a task
- Delete tasks
- Modify the contents of existing to-dos
- View to-do list

## 한국어

[日本語](https://github.com/hjy0221/antigravity_TDD_ToDoList#%E6%97%A5%E6%9C%AC%E8%AA%9E) · [English](https://github.com/hjy0221/antigravity_TDD_ToDoList#english) · [한국어](https://github.com/hjy0221/antigravity_TDD_ToDoList#%ED%95%9C%EA%B5%AD%EC%96%B4)

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
