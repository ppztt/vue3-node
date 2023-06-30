const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy:{
      "/admin":{
        target: 'http://localhost:3000',
        changeOrigin: true
      },
      "/index":{
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
  }
})
