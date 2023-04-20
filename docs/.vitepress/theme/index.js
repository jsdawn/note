import { h } from 'vue';
import Theme from 'vitepress/theme';
// 自定义css https://vitepress.vuejs.org/guide/theme-introduction.html#customizing-css
import './var.css';
import './rainbow.css';
import './index.scss';

import Visitor from './components/Visitor.vue';
import AsideSponsors from './components/AsideSponsors.vue';

export default Object.assign({}, Theme, {
  /**
   * 相关插槽
   * https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/Layout.vue
   */
  Layout: () =>
    h(Theme.Layout, null, {
      'nav-bar-title-after': () => h(Visitor),
      'aside-bottom': () => h(AsideSponsors),
    }),
  enhanceApp({ app }) {
    // 注册全局组件
    // app.component('NTFlowList', NTFlowList);
  },
});
