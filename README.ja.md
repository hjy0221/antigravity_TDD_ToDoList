# TDD To-Do List 앱

[日本語](README.ja.md) · [English](README.md) · [한국어](README.ko.md)

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
