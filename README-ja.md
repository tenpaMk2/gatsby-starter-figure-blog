# gatsby-starter-figure-blog

![exmaple-1](./images/example-1.png)

[English ReadMe is here.](./README.md)

写真に最適なブログThemeです。
[`@tenpaMk2/gatsby-theme-figure-blog`](https://github.com/tenpaMk2/gatsby-theme-figure-blog)
のGatsby Themeを使っています。

## デモ

🚧WIP🚧

## ✨ 機能

- 写真を可能な限り大きく見せます
- レスポンシブ
- ヒーローイメージ対応
  - もし縦長画像の場合、画像上部にフォーカスします。フィギュアの顔は通常は上部にありますからね❗
- 記事タイトルをファイル名から生成
- Markdownをサポート、MDXは非サポート
- [Special hooks](https://github.com/tenpaMk2/gatsby-theme-figure-blog/tree/main/theme#special-hooks)
- [prism.js](https://prismjs.com/) によるコードのシンタックスハイライト
- ダークモードオンリー
- タグページ、アーカイブページをサポート
- タグページとアーカイブページでカードレイアウトをサポート
- ページネーション
- デバッグ用ページとPlayground用ページをサポート

## 🚀 Getting Started

```sh
npx gatsby new gatsby-starter-figure-blog https://github.com/tenpaMk2/gatsby-starter-figure-blog
cd gatsby-starter-figure-blog
npm run develop
```

`http://localhost:8000` にアクセスしてください。

このStarterは拙作のGatsby Theme(
[`@tenpaMk2/gatsby-theme-figure-blog`](https://github.com/tenpaMk2/gatsby-theme-figure-blog)
)を使っています。
このStarterを変更したい場合、↓のDocを読んでください。

1. [Gatsby doc: Using a Gatsby Theme](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/using-a-gatsby-theme/)
2. [Gatsby doc: Using a Theme](https://www.gatsbyjs.com/tutorial/using-a-theme/)
3. [Gatsby doc: Shadowing in Gatsby Themes](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/shadowing/)
4. [my doc: gatsby-theme-figure-blog](https://github.com/tenpaMk2/gatsby-theme-figure-blog/tree/main/theme)

## 📝 使い方

[my doc: gatsby-theme-figure-blog](https://github.com/tenpaMk2/gatsby-theme-figure-blog/tree/main/theme)
を見てください。

### Tailwind CSSを使う

[Tailwind CSS | Install Tailwind CSS with Gatsby](https://tailwindcss.com/docs/guides/gatsby)
を見てください。

下記は一例です。

`gatsby-config.js` にて、 `gatsby-plugin-postcss` を有効化してください。

```js
plugins: [
  "gatsby-plugin-postcss",
],
```

`src/styles/global.css` を作成してください。

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

`postcss.config.js` を作成してください。

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

`tailwind.config.js` を作成してください。

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/@tenpamk2/gatsby-theme-figure-blog/components/**/*.{js,jsx,ts,tsx}",
    "./src/@tenpamk2/gatsby-theme-figure-blog/pages/**/*.{js,jsx,ts,tsx}",
    "./src/@tenpamk2/gatsby-theme-figure-blog/templates/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

これであなたのカスタムページでTailwind CSSが使えるようになりました❗

例えば、
`src/pages/custom-page.js` を作成して、
その内容を↓のようにしてください。

```jsx
import React from "react";
import { Seo } from "@tenpamk2/gatsby-theme-figure-blog/src/components/seo";
import { Layout } from "@tenpamk2/gatsby-theme-figure-blog/src/components/layout";

const CustomPage = () => (
  <Layout>
    <div className="w-full rounded-xl bg-slate-700 p-6">
      <p className="bg-[#114514]">Can I use Tailwind CSS in example?</p>
    </div>
  </Layout>
);

export const Head = ({ location: { pathname } }) => (
  <Seo {...{ pathname, title: `Custom page` }} />
);

export default CustomPage;
```

## 🤔 質問や問題(バグ)

[GitHub Discussion](https://github.com/tenpaMk2/gatsby-theme-figure-blog/discussions)
でディスカッションを開始してください❗
