# Vercelへのデプロイ手順

## 前提条件
- Vercelアカウントを持っていること
- Git（GitHub/GitLab/Bitbucket）アカウントを持っていること

## デプロイ方法

### 方法1: Vercel CLIを使用（推奨）

1. **Vercel CLIのインストール**
```bash
npm i -g vercel
```

2. **プロジェクトディレクトリに移動**
```bash
cd homepage-builder
```

3. **Vercelにデプロイ**
```bash
vercel
```

4. **初回デプロイ時の設定**
- プロジェクト名を入力（例: homepage-builder）
- フレームワークはViteが自動検出されます
- ビルド設定はデフォルトのままでOK

### 方法2: GitHubと連携

1. **GitHubリポジトリの作成**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/homepage-builder.git
git push -u origin main
```

2. **Vercelダッシュボードから新規プロジェクト作成**
- https://vercel.com/new にアクセス
- GitHubリポジトリをインポート
- 環境変数を設定（必要に応じて）

### 環境変数の設定

Vercelダッシュボードで以下の環境変数を設定：

```
VITE_FORMRUN_FORM_ID=your_actual_formrun_id
VITE_LINE_URL=https://line.me/R/ti/p/@your_line_id
VITE_COMPANY_PHONE=実際の電話番号
VITE_COMPANY_EMAIL=実際のメールアドレス
```

### カスタムドメインの設定

1. Vercelダッシュボードでプロジェクトを選択
2. 「Settings」→「Domains」
3. カスタムドメインを追加
4. DNSレコードを設定

### デプロイ後の確認事項

- [ ] すべてのページが正しく表示される
- [ ] お問い合わせフォームが動作する
- [ ] レスポンシブデザインが機能している
- [ ] SEOメタタグが適切に設定されている
- [ ] 画像が正しく読み込まれる

## トラブルシューティング

### ビルドエラーが発生する場合

1. Node.jsバージョンを確認
```bash
node --version  # 18.0.0以上であることを確認
```

2. 依存関係を再インストール
```bash
rm -rf node_modules package-lock.json
npm install
```

### 404エラーが発生する場合

`vercel.json`のrewritesルールが正しく設定されているか確認してください。

### 環境変数が反映されない場合

1. 環境変数名が`VITE_`で始まっていることを確認
2. デプロイ後に再ビルドを実行

```bash
vercel --prod --force
```

## 本番環境のメンテナンス

### 更新のデプロイ

```bash
git add .
git commit -m "Update: 変更内容"
git push origin main
```

Vercelは自動的に新しいデプロイを開始します。

### ロールバック

Vercelダッシュボードから以前のデプロイメントに即座にロールバック可能です。

## セキュリティの考慮事項

- APIキーなどの機密情報は必ず環境変数に設定
- `.env`ファイルはGitにコミットしない
- FormrunのAPIキーは本番環境でのみ設定