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
          if (name === `Writings`) {
            return `writing`;
          }
          if (name === `parks`) {
            return `park`;
          }
          return name;
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/Writings`,
        name: `writing`,
      },
    },
  ],
  graphqlTypegen: true,
};
