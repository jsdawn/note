import DefaultTheme from 'vitepress/theme';
import { defineAsyncComponent } from 'vue';

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from `createApp()`.
    // router is VitePress' custom router. `siteData` is
    // a `ref` of current site-level metadata.

    // 注册全局组件
    const components = import.meta.glob('../../components/*.vue', { eager: true }); /**/
    for (const [key, value] of Object.entries(components)) {
      const name = key.replace(/(.*\/)*([^.]+).*/gi, '$2');
      console.log(name, value);
      // defineAsyncComponent: 定义一个异步组件(可以是装载函数)，它在运行时是懒加载的
      app.component(name, defineAsyncComponent(value));
    }

    // 注册全局指令
  },
};
