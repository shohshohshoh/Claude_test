# 📋 タスクボードアプリ

Reactで作成したシンプルで使いやすいタスク管理アプリケーションです。

## 機能

- ✅ **タスク追加**: テキスト入力でタスクを追加できます
- ✅ **完了・未完了切り替え**: チェックボックスでタスクの状態を管理します
- ✅ **タスク削除**: 不要なタスクを削除できます
- ✅ **完了済み表示**: 完了したタスクはグレー表示されます
- 📊 **進捗表示**: 完了済みタスク数を確認できます

## セットアップ

### 必要な環境
- Node.js 14.0以上
- npm または yarn

### インストール

```bash
npm install
```

## 使用方法

### 開発サーバーの起動

```bash
npm start
```

ブラウザが自動的に開き、`http://localhost:3000` でアプリが実行されます。

### ビルド

```bash
npm run build
```

本番環境用の最適化されたビルドを作成します。

## プロジェクト構造

```
src/
├── components/
│   ├── TaskBoard.jsx      # メインのボード管理コンポーネント
│   ├── TaskBoard.css
│   ├── TaskForm.jsx       # タスク入力フォーム
│   ├── TaskForm.css
│   ├── TaskList.jsx       # タスク一覧コンポーネント
│   ├── TaskList.css
│   ├── TaskItem.jsx       # 個別タスク項目
│   └── TaskItem.css
├── App.jsx                # メインアプリケーション
├── App.css
├── index.jsx              # エントリーポイント
└── index.css
```

## 技術スタック

- **React 18.2.0**: UIライブラリ
- **React DOM**: React の DOM レンダリング
- **Create React App**: アプリケーション構築ツール

## ライセンス

MIT License

## 開発者

Shoh_Shoh
