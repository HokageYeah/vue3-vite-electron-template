import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'node:path';

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// vite+electron打包和运行插件
import { ElectronDevPlugin } from './plugins/vite.electron.dev'
import { ElectronBuildPlugin } from './plugins/vite.electron.build'
import electronRenderer from "vite-plugin-electron-renderer"

// 按需导入、自动导入插件
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import AutoImportTypes from 'auto-import-types';

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    ElectronDevPlugin(),
    ElectronBuildPlugin(),
    electronRenderer(),
    AutoImportTypes(),
    AutoImport({
      dts: 'auto-imports.d.ts',
      imports: [
        'vue',
        'uni-app',
      ],
      exclude: ['createApp'],
      eslintrc: {
        enabled: true,
        globalsPropValue: true
      },
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      // 没有配置制定的路径，会自动找src/components（这个地方会存放全局公共组件）文件下的拓展名vue的文件进行自动导入
      // 拓展名为vue
      extensions: ['vue'],
      dts: 'components.d.ts',
      resolvers: [ElementPlusResolver()]
    })
  ],
  base: './', // 默认是绝对路径， 要改成相对路径，不然会白屏
  resolve: {
    alias: [
      {
        find: /\/#\//,
        replacement: `${pathResolve('types')}/`
      },
      {
        find: '@',
        replacement: `${pathResolve('src')}/`
      }
    ]
  }
})
