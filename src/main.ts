
import './assets/main.css'
// 1. 按需导入 createApp 函数
//创建单页面程序实例
import { createApp } from 'vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//导入组件，命名为App
// 2. 导入待渲染的 App.vue 组件
// 2. 调用 app.component() 方法全局注册组件
//app.component('MySwiper', Swiper)
//app.component('MyTest', Test)
import App from './App.vue'
//导入路由，命名为router
import router from './router'

// 5. 创建并挂载根实例
const app = createApp(App)
//确保 _use_ 路由实例使
//整个应用支持路由。
app.use(router)

app.use(ElementPlus)


//将App组件通过vuue渲染到id为app的标签中
// 4. 调用 mount() 把 App 组件的模板结构，渲染到指定的 el 区域中
app.mount('#app')

// console.log(' import.meta.env.MODE: ', import.meta.env.MODE);
// console.log(' import.meta.env.BASE_URL: ',import.meta.env.BASE_URL);
// console.log(' import.meta.env.PROD: ',import.meta.env.PROD);
// console.log(' import.meta.env.DEV: ',import.meta.env.DEV);
// console.log(' import.meta.env.SSR: ',import.meta.env.SSR);
