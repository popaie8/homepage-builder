# ホームページビルダー

「初期一括69,800円・最短10日で丸投げ完了」をコンセプトとしたホームページ制作会社の営業サイトです。

## 技術スタック

- **フレームワーク**: React 19 + TypeScript
- **ビルドツール**: Vite
- **スタイリング**: Tailwind CSS
- **フォーム**: React Hook Form
- **アニメーション**: Framer Motion
- **SEO**: React Helmet Async
- **アイコン**: React Icons

## プロジェクト構造

```
src/
├── components/          # UIコンポーネント
│   ├── common/         # 共通コンポーネント（Header、Footer、Layout）
│   ├── sections/       # 各セクションコンポーネント
│   └── ui/             # 基本UIコンポーネント（Button、Card、Modal）
├── data/               # 静的データファイル
├── types/              # TypeScript型定義
└── App.tsx             # メインアプリケーション
```

## 機能

- **レスポンシブデザイン**: モバイル、タブレット、デスクトップ対応
- **SEO最適化**: メタタグ、構造化データ対応
- **パフォーマンス最適化**: 画像遅延読み込み、コード分割
- **お問い合わせフォーム**: バリデーション付き
- **LINE連携**: LINE相談への導線
- **FAQセクション**: アコーディオン形式で表示

## セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview
```

## 環境要件

- Node.js 20.19.0以降（推奨）
- npm 10.x以上

## プレビュー

`preview.html`ファイルを開くことで、静的なHTMLプレビューを確認できます。

## デプロイ

本番環境へのデプロイは以下の手順で行います：

1. `npm run build`でビルド
2. `dist`フォルダの内容を静的ホスティングサービスにアップロード
3. 適切なドメインを設定

推奨ホスティングサービス：
- Netlify
- Vercel
- GitHub Pages

## ライセンス

このプロジェクトは商用利用を前提としています。
