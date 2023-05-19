import { fileURLToPath, URL } from 'node:url'

// import { defineConfig,loadEnv  } from 'vite'
// import vue from '@vitejs/plugin-vue'
//https://zhuanlan.zhihu.com/p/627115300


// //最基础的配置
// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url))
//     }
//   }
// })



//https://vitejs.cn/vite3-cn/config/
//当以命令行方式运行 vite 时，Vite 会自动解析 项目根目录 下名为 vite.config.js 的文件。

import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

//参考知乎：https://zhuanlan.zhihu.com/p/627115300
//https://zhuanlan.zhihu.com/p/627115300
// https://vitejs.dev/config/
export default defineConfig(({ mode, command, ssrBuild }) => {


  // // 根据当前工作目录中的 `mode` 加载 .env 文件
  // // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  // const env = loadEnv(mode, process.cwd(), '')

//在关键的配置文件vite.config.ts中import.meta.env是使用不了的，返回undefined。因为vite.config.ts 文件是在 Vite 服务运行之前被 TypeScript 编译器编译的，而 import.meta.env 变量是在 Vite 服务运行时由 Vite 自动注入到代码中的
//process.cwd()获得当前项目路径
  const root = process.cwd();
  //读取当前环境中env文件的内容
  const env = loadEnv(mode, root);
  console.log(root);
  console.log(env);
  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
});