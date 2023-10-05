import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// const path = require('path')

// module.exports = {
//   alias: {
//     '/@/': path.resolve(__dirname, './src'),
//     '/@components/': path.resolve(__dirname, './src/components'),
//     '/@app_modules': path.resolve(__dirname, './src/modules'),
//     '/@store': path.resolve(__dirname, './src/store')
//   }
// }


export default defineConfig({
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
      '/@': path.resolve(__dirname, './src'),
      '/@components': path.resolve(__dirname, './src/components'),
      '/@app_modules': path.resolve(__dirname, './src/modules'),
      '/@store': path.resolve(__dirname, './src/store')
    },
    extensions: [".js"]
  },
  plugins: [vue()],
  
  //백엔드 CORS 설정
  server:{
    proxy:{
      '/api': {
        target:'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace('^/', ''),
        secure: false,
        ws: true
      }
    },
  },
})