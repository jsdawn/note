import DefaultTheme from 'vitepress/theme';
// 自定义css https://vitepress.vuejs.org/guide/theme-introduction.html#customizing-css
import './index.sass';
import NTBadge from '../../components/NTBadge.vue';
import NTImageText from '../../components/NTImageText.vue';
import NTFlowList from '../../components/NTFlowList.vue';

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    //   // app is the Vue 3 app instance from `createApp()`.
    //   // router is VitePress' custom router. `siteData` is
    //   // a `ref` of current site-level metadata.

    // 注册全局组件
    app.component('NTBadge', NTBadge);
    app.component('NTImageText', NTImageText);
    app.component('NTFlowList', NTFlowList);

    // 注册全局指令
  },
};
