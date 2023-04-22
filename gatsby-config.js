/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `gatsby-starter-figure-blog demo`,
    description: `gatsby-starter-figure-blog用のデモ`,
    siteUrl: `https://gatsby-starter-figure-blog.netlify.app`,
    author: {
      name: `tenpaMk2`,
      summary: `🇯🇵インドアクソオタク。`,
    },
    social: {
      twitter: `@tenpaMk2`,
      instagram: `tenpamk2_figure`,
      github: `tenpaMk2`,
    },
    menuLinks: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "About",
        link: "/about/",
      },
      {
        name: "Archives",
        link: "/archives/",
      },
      {
        name: "Apps",
        link: "/apps/",
      },
      {
        name: "RSS",
        link: "/rss/",
      },
      {
        name: "My blog",
        link: "https://tenpamk2-blog.netlify.app",
      },
    ],
  },
  plugins: [
    {
      // See [gatsby-plugin-feed doc](https://www.gatsbyjs.com/plugins/gatsby-plugin-feed/) .
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                # All fields are pass through as \`feedOptions\` .
                title # This is overwritten by \`title\` of \`feeds\` .
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownPost } }) =>
              allMarkdownPost.nodes.map(
                ({ date, rssContentEncoded, rssDescription, slug, title }) => ({
                  date,
                  title,
                  description: rssDescription,
                  url: new URL(slug, site.siteMetadata.siteUrl).href, // Unlike Gatsby, URL must be percent-encoded in RSS.
                  custom_elements: [{ "content:encoded": rssContentEncoded }],
                })
              ),
            query: `
              {
                allMarkdownPost(limit: 20, sort: {date: DESC}) {
                  nodes {
                    date
                    rssContentEncoded
                    rssDescription
                    slug
                    title
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "gatsby-starter-figure-blog demo RSS feed | All",
          },
          {
            serialize: ({ query: { site, allMarkdownPost } }) =>
              allMarkdownPost.nodes.map(
                ({ date, rssContentEncoded, rssDescription, slug, title }) => ({
                  date,
                  title,
                  description: rssDescription,
                  url: new URL(slug, site.siteMetadata.siteUrl).href, // Unlike Gatsby, URL must be percent-encoded in RSS.
                  custom_elements: [{ "content:encoded": rssContentEncoded }],
                })
              ),
            query: `
              {
                allMarkdownPost(filter: {tags: {elemMatch: {slug: {eq: "フィギュア"}}}}, limit: 20, sort: {date: DESC}) {
                  nodes {
                    date
                    rssContentEncoded
                    rssDescription
                    slug
                    title
                  }
                }
              }
            `,
            output: "/tags/フィギュア/rss.xml",
            title: "gatsby-starter-figure-blog demo RSS feed | tag: フィギュア",
          },
          {
            serialize: ({ query: { site, allMarkdownPost } }) =>
              allMarkdownPost.nodes.map(
                ({ date, rssContentEncoded, rssDescription, slug, title }) => ({
                  date,
                  title,
                  description: rssDescription,
                  url: new URL(slug, site.siteMetadata.siteUrl).href, // Unlike Gatsby, URL must be percent-encoded in RSS.
                  custom_elements: [{ "content:encoded": rssContentEncoded }],
                })
              ),
            query: `
              {
                allMarkdownPost(filter: {tags: {elemMatch: {slug: {eq: "ドール"}}}}, limit: 20, sort: {date: DESC}) {
                  nodes {
                    date
                    rssContentEncoded
                    rssDescription
                    slug
                    title
                  }
                }
              }
            `,
            output: "/tags/ドール/rss.xml",
            title: "gatsby-starter-figure-blog demo RSS feed | tag: ドール",
          },
        ],
      },
    },
    {
      // See [gatsby-plugin-google-gtag doc](https://www.gatsbyjs.com/plugins/gatsby-plugin-google-gtag/) .
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-XKCD4G8TQ1"],
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-figure-blog demo`,
        short_name: `gatsby-starter-figure-blog demo`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#F47414`,
        display: `standalone`,
        icon: `src/@tenpamk2/gatsby-theme-figure-blog/images/bio.svg`,
      },
    },
    "gatsby-plugin-postcss",
    {
      resolve: `@tenpamk2/gatsby-theme-figure-blog`,
      options: {
        basePath: ``,
        descriptionTruncate: true,
        externalLinks: [
          {
            name: `tenpaMk2's blog`,
            url: `https://tenpamk2-blog.netlify.app`,
          },
          {
            name: `Asahiwa.jp(よつばとフィギュア)`,
            url: `https://asahiwa.jp`,
          },
          { name: `ふぃぎゅる！`, url: `http://blog.livedoor.jp/nobuno88/` },
          { name: `fig-memo`, url: `https://fig-memo.com` },
          {
            name: `Analographicsworks`,
            url: `https://analographics.net/archives/category/figure-review`,
          },
          {
            name: `雪の降る空に`,
            url: `https://yukinofurusorani.livedoor.blog`,
          },
          {
            name: `mattintosh note`,
            url: `https://mattintosh.hatenablog.com/archive/category/フィギュア`,
          },
          {
            name: `affilabo.com`,
            url: `https://affilabo.com/category/figure/`,
          },
          {
            name: `QP's blog`,
            url: `https://qp-works.com/category/figure/`,
          },
          {
            name: `F9のフィギュア棚`,
            url: `https://fantia.jp/fanclubs/164836/`,
          },
          {
            name: `葵的 美少女フィギュアの世界`,
            url: `https://note.com/ao_figure/`,
          },
          {
            name: `よよのデジタルショーケース`,
            url: `https://yoyotandigitalshowcase.hatenablog.com`,
          },
          {
            name: `an-gallery`,
            url: `https://an-gallery.com`,
          },
          {
            name: `フィギュアレン`,
            url: `http://figuren-toy.com`,
          },
        ],
        locale: `ja-JP`, // See [`Intl.Locale` in MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale).
        optionsGatsbyPluginSharp: {
          defaults: {
            formats: [`webp`],
            breakpoints: [480, 1024, 2048],
          },
        },
        optionsGatsbyRemarkImages: {
          quality: 90,
          srcSetBreakpoints: [480, 1024, 2048],
          withAvif: false,
        },
        optionsGatsbyTransformerRemark: {
          excerpt_separator: `<!-- more -->`, // If `undefined` is specified, default pruning method is used.
        },
        postPath: ``,
        rssNeedFullContent: false, // Set `true` if you want to privide full content via RSS.
        rssPruneLength: 256,
        rssTruncate: true,
      },
    },
  ],
};
