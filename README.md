# gatsby-starter-figure-blog

![exmaple-1](./images/example-1.png)

[![Netlify Status](https://api.netlify.com/api/v1/badges/93c732b9-5632-4167-8407-f6debcbea0aa/deploy-status)](https://app.netlify.com/sites/gatsby-starter-figure-blog/deploys)

[日本語ReadMeはこちら。](./README-ja.md)

The blogging theme that is suitable for photographs.
Using the Gatsby theme
[`@tenpaMk2/gatsby-theme-figure-blog`](https://github.com/tenpaMk2/gatsby-theme-figure-blog)
.

## Demo

🚧WIP🚧

## ✨ Features

- Make your photos look as large as possible.
- Responsive
- Hero image support
  - If it's portrait, focus (crop) on the top side because the figure's face is usually there❗
- Generate post title from filename.
- Pure Markdown not MDX
- [Special hooks](https://github.com/tenpaMk2/gatsby-theme-figure-blog/tree/main/theme#special-hooks)
- Code highlighting by [prism.js](https://prismjs.com/)
- Dark Mode only
- Tags, archives page support
- Cards layout support in tags and archives page
- pagination
- Debug and playground page support

## 🚀 Getting Started

```sh
npx gatsby new gatsby-starter-figure-blog https://github.com/tenpaMk2/gatsby-starter-figure-blog
cd gatsby-starter-figure-blog
npm run develop
```

Access `http://localhost:8000` .

This starter uses my Gatsby Theme (
[`@tenpaMk2/gatsby-theme-figure-blog`](https://github.com/tenpaMk2/gatsby-theme-figure-blog)
).
If you want to modify this starter, see the following docs.

1. [Gatsby doc: Using a Gatsby Theme](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/using-a-gatsby-theme/)
2. [Gatsby doc: Using a Theme](https://www.gatsbyjs.com/tutorial/using-a-theme/)
3. [Gatsby doc: Shadowing in Gatsby Themes](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/shadowing/)
4. [my doc: gatsby-theme-figure-blog](https://github.com/tenpaMk2/gatsby-theme-figure-blog/tree/main/theme)

## 📝 Usage

See
[my doc: gatsby-theme-figure-blog](https://github.com/tenpaMk2/gatsby-theme-figure-blog/tree/main/theme)
.

### Use Tailwind CSS

See
[Tailwind CSS | Install Tailwind CSS with Gatsby](https://tailwindcss.com/docs/guides/gatsby)
.

The following steps are my example.

Enable `gatsby-plugin-postcss` in `gatsby-config.js` .

```js
plugins: [
  "gatsby-plugin-postcss",
],
```

Create `src/styles/global.css` .

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Create `postcss.config.js` .

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

Create `tailwind.config.js` .

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

Now, you can use Tailwind CSS in your custom components❗

For example,
create `src/pages/custom-page.js` ,
and make its contents look like the following.

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

## 🤔 Questions or problems?

Start a discussion at
[GitHub Discussion](https://github.com/tenpaMk2/gatsby-theme-figure-blog/discussions)
❗
