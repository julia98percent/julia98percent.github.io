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

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/writings`,
        name: `writing`,
      },
    },
  ],
  graphqlTypegen: true,
};
