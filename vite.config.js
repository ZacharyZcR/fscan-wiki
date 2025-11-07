import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
  ],
  base: '/', // 改为根路径，因为使用了自定义域名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
