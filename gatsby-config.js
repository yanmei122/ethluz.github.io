module.exports = {
  siteMetadata: {
    title: `luz-blog`,
    siteUrl: `https://ethluz.github.io`,
    description: `ETH gatsbyjs nodejs 程序员`,
  },
  mapping: {
    "MarkdownRemark.frontmatter.author": `AuthorYaml`,
  },
  plugins: [
    // {
    //   resolve: `gatsby-source-npm-package-search`,
    //   options: {
    //     keywords: [`gatsby-plugin`, `gatsby-component`],
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/docs/`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `packages`,
    //     path: `${__dirname}/packages/`,
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `StarterShowcaseImages`,
    //     path: `${__dirname}/src/data/StarterShowcase/generatedScreenshots`,
    //   },
    // },

    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `StarterShowcaseData`,
    //     path: `${__dirname}/src/data/StarterShowcase/startersData`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // `gatsby-transformer-documentationjs`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 786,
              backgroundColor: `#ffffff`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.05rem`,
            },
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#9D7CBF`,
        showSpinner: false,
      },
    },
    `gatsby-plugin-glamor`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-lodash`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `luz-just a coder for web3.0`,
        short_name: `luz`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#008B8B`,
        display: `minimal-ui`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-transformer-csv`,
    `gatsby-plugin-twitter`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-93349937-1`,
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: `GTM-KLZLVML`,
      },
    },

    {
      resolve: `gatsby-plugin-fullstory`,
      options: {
        fs_org: `B2TRP`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: [
          {
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] }
                  filter: {
                    fileAbsolutePath: { regex: "/docs.blog/" }
                  }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      frontmatter {
                        title
                        date
                        excerpt
                      }
                      fields {
                        slug
                      }
                    }
                  }
                }
              }
            `,
            output: `/blog/rss.xml`,
            setup: ({
              query: {
                site: { siteMetadata },
              },
            }) => {
              return {
                title: siteMetadata.title,
                description: siteMetadata.description,
                feed_url: siteMetadata.siteUrl + `/blog/rss.xml`,
                site_url: siteMetadata.siteUrl,
                generator: `GatsbyJS`,
              }
            },
            serialize: ({ query: { site, allMarkdownRemark } }) =>
              allMarkdownRemark.edges.map(({ node }) => {
                return {
                  title: node.frontmatter.title,
                  description: node.frontmatter.excerpt || node.excerpt,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                //   author: node.frontmatter.author.id,
                }
              }),
          },
        ],
      },
    },
    `gatsby-plugin-netlify`,
    // `gatsby-plugin-netlify-cache`,
    // {
    //   resolve: `gatsby-plugin-mailchimp`,
    //   options: {
    //     endpoint: `https://gatsbyjs.us17.list-manage.com/subscribe/post?u=1dc33f19eb115f7ebe4afe5ee&amp;id=f366064ba7`,
    //   },
    // },
    `gatsby-transformer-screenshot`,
  ],
}