/// <reference types="vite/client" />



declare module "*.vue" {
    import { DefineComponent } from "vue";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    const component: DefineComponent<{}, {}, any>;
    export default component;
}


//Vite 在一个特殊的 import.meta.env 对象上暴露环境变量。这里有一些在所有情况下都可以使用的内建变量：
interface ImportMetaEnv {
    readonly VITE_BASE_URL: string
}

// interface ImportMeta {
//   readonly env: ImportMetaEnv
// }

declare global {
    interface ImportMeta {
        readonly env: ImportMetaEnv
    }
}


