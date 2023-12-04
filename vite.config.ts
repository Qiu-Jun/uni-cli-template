import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import { resolve } from 'node:path'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'

export default defineConfig({
  plugins: [
    AutoImport({
      imports: ['vue', 'uni-app'],
      dts: true,
      eslintrc: {
        enabled: true
      }
    }),
    uni(),
    Unocss()
  ],
  resolve: {
    alias: {
      '@': `${resolve(__dirname)}/`
    }
  },
  build: {
    // uno报错处理
    watch: {
      exclude: ['node_modules/**', '/__uno.css']
    }
  }
})
