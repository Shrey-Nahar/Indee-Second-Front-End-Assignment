const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Indee-Second-Front-End-Assignment/' 
    : '/',
  transpileDependencies: true
})