module.exports = {
  siteMetadata: {
    title: `Luke Dohner portfolio site`,
    description: `Luke Dohner developer, built in Gatsby React`,
    author: `Luke Dohner`,
    siteUrl: `https://www.lukedohner.com`,
    menuLinks:[
        {
           name:`home`,
           link:`/`
        },
        {
           name:`banners`,
           link:`banners`
        },
        {
           name:`contact`,
           link:`/#homefooter`
        },
        
      ]
  },
  pathPrefix: `/react-ld/public`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
