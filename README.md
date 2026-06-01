# うろ覚えオレンジ Web Site

Astro + Markdown で管理する音楽サークル用サイトです。

## 初回セットアップ

```bash
npm install
npm run dev
```

## ビルド

```bash
npm run build
```

`dist/` に静的HTML/CSS/JSが生成されます。

## 作品を追加する

`src/content/releases/` に `.md` ファイルを追加します。

```md
---
title: "New Release"
released: 2025-10-26
market: "秋M3"
type: "Album"
xfade: "https://example.com"
featured: false
tracks:
  - title: "Track 1"
  - title: "Track 2"
notes: []
---

作品説明をここに書きます。
```

## 公開先

GitHub Pagesで `Homepage` リポジトリに公開する想定で、`astro.config.mjs` は以下です。

```js
site: "https://itsutsuba.github.io",
base: "/Homepage",
```

普通のWebサーバーのドメイン直下に置く場合は、`base` を削除してください。
