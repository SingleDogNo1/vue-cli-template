const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    // 自定义别名语法
    config.resolve.alias.set('@store', path.resolve(__dirname, 'src/store'));
  },
});
