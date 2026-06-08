# Claude Test プロジェクト

## プロジェクト概要

このプロジェクトはClaudeで開発・テストするためのワークスペースです。

## 開発ガイドライン

### Git運用ルール

**重要**: コードに変更を加えるたびに、以下の手順でGitHubにプッシュしてください。

1. コード変更を完了したら、以下のコマンドで変更をステージングします：
   ```bash
   git add .
   ```

2. 適切なコミットメッセージとともにコミットします：
   ```bash
   git commit -m "変更内容の説明"
   ```

3. GitHubにプッシュします：
   ```bash
   git push origin main
   ```

### コミットメッセージのガイドライン

- 簡潔かつ明確に変更内容を説明してください
- 日本語または英語で記述してください
- 例：
  - "機能: ユーザー認証機能を追加"
  - "修正: バグ修正（ログイン画面）"
  - "リファクタリング: コードの整理"

## 開発時の注意事項

- 定期的にコミット・プッシュを実施してください
- 大きな変更は複数のコミットに分割してください
- プッシュ前にテストが成功していることを確認してください

## デプロイ先

**GitHub Pages**: https://shohshohshoh.github.io/Claude_test/

### デプロイ方法

```bash
npm run deploy
```

このコマンドは以下を自動的に実行します：
- `npm run build` - 本番用ビルドを作成
- `gh-pages -d build` - GitHub Pagesにアップロード

## 技術スタック

### フロントエンド
- **React 18.2.0** - UIライブラリ
- **React DOM 18.2.0** - React の DOM レンダリング
- **Create React App 5.0.1** - アプリケーション構築ツール
- **CSS3** - スタイリング（グラデーション、アニメーション）

### デプロイ・ビルド
- **gh-pages 6.1.1** - GitHub Pages デプロイメント
- **Webpack** - モジュールバンドラー（Create React App 内）

### 開発環境
- **Node.js 14.0 以上**
- **npm** - パッケージマネージャー
- **Git** - バージョン管理

## コンポーネント命名規約

### 構造
- **ファイル名**: PascalCase（例: `TaskBoard.jsx`）
- **コンポーネント関数名**: ファイル名と同じ PascalCase
- **CSS ファイル**: コンポーネント名と同じ（例: `TaskBoard.css`）

### ディレクトリ構造
```
src/
├── components/         # React コンポーネント
│   ├── TaskBoard/     # 各コンポーネントごとのディレクトリ（将来拡張時）
│   ├── TaskBoard.jsx  # ボード管理コンポーネント
│   ├── TaskBoard.css
│   ├── TaskForm.jsx   # タスク入力フォーム
│   ├── TaskForm.css
│   ├── TaskList.jsx   # タスク一覧表示
│   ├── TaskList.css
│   ├── TaskItem.jsx   # 個別タスク項目
│   └── TaskItem.css
├── App.jsx            # ルートコンポーネント
├── App.css
├── index.jsx          # エントリーポイント
└── index.css
```

### Props命名規約
- **イベントハンドラー**: `on` で始まる（例: `onAddTask`, `onToggleTask`, `onDeleteTask`）
- **状態管理**: 説明的な名前（例: `tasks`, `completedCount`）
- **コンポーネント**: 機能を表す名前（例: `TaskForm`, `TaskBoard`）

### 状態管理
- **ローカルストレージキー**: `tasks`
- 保存データ形式: JSON 配列
  ```json
  [
    {
      "id": 1234567890,
      "text": "タスク名",
      "completed": false
    }
  ]
  ```

---

*このドキュメントは随時更新してください*
