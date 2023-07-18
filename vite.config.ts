import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import { resolve } from 'node:path'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    AutoImport({
      imports: ['vue', 'uni-app'],
      dts: true,
      eslintrc: {
        enabled: true
      }
    }),
    uni()
  ],
  resolve: {
    alias: {
      '@': `${resolve(__dirname)}/`
    }
  }
})
