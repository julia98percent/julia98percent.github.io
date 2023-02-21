module.exports = {
  siteMetadata: {
    title: `Peach Jam`,
    siteUrl: `https://www.julia98percent.github.io`,
  },
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-transformer-yaml`,
      options: {
        typeName: ({ node }: any) => {
          const name = node.sourceInstanceName;

          return name;
        },
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/writing`,
        name: `writing`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/writing-thumbnail-image`,
      },
    },
  ],
  graphqlTypegen: true,
};
