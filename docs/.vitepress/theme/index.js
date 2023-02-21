import { h } from 'vue';
import Theme from 'vitepress/theme';
// 自定义css https://vitepress.vuejs.org/guide/theme-introduction.html#customizing-css
import './index.sass';
import NTBadge from '../../components/NTBadge.vue';
import NTImageText from '../../components/NTImageText.vue';
import NTFlowList from '../../components/NTFlowList.vue';

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
    app.component('NTBadge', NTBadge);
    app.component('NTImageText', NTImageText);
    app.component('NTFlowList', NTFlowList);
  },
});
