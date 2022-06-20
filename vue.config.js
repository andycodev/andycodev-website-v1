module.exports = {
    publicPath: process.env.NODE_ENV === 'production'? '/andycodev-website-v1/': '/',
      configureWebpack:{
        performance: {
          hints: false
        },
        optimization: {
          splitChunks: {
            minSize: 10000,
            maxSize: 250000,
          }
        }
    }
  }
  
