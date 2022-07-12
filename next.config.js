const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  images: {
    domains: [
      "localhost",
      "images.unsplash.com",
      "static.gotsby.org",
      "static.ghost.org",
      "gatsby.ghost.io",
      "ghost.org",
      "repository-images.githubusercontent.com",
      "www.gravatar.com",
      "github.githubassets.com",
      "bets.ghost.io",
      "ghost.bets.com.br",
      "lh1.googleusercontent.com",
      "lh2.googleusercontent.com",
      "lh3.googleusercontent.com",
      "lh4.googleusercontent.com",
      "lh5.googleusercontent.com",
      "lh6.googleusercontent.com",
      ...(process.env.IMAGE_DOMAINS || "").split(","),
    ],
  },
  
  basePath: '/artigos',
  assetPrefix: '/artigos',
})
