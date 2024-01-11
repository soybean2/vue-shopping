const path = require("path");

const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [
        path.join(__dirname, "./src/assets/styles/variables.less"),
        path.join(__dirname, "./src/assets/styles/mixins.less"),
      ],
    },
  },
  //跨域请求
  devServer: {
    proxy: {
      '/xhr': {
        target: 'https://you.163.com',
        changeOrigin: true,
        pathRewrite: {
          '^/xhr': '/xhr'
        }
      },
      '/api': {
        target: 'https://you.163.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
      },
    }

});
