import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // 设置 '@' 指向 'src' 目录
      '@': path.resolve(__dirname, './')
    }
  },
  plugins: [react()],
})
