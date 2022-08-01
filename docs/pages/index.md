# 文档相关的业务组件

文章对应的业务相关组件/文章 vue 页面。

需要先引入，后使用

```vue
<script setup>
import { useData, withBase } from 'vitepress';
import HuaLang from '../pages/HuaLang.vue';

const { page } = useData();
const list = (page.value.frontmatter?.list || []).map((v) => ({
  ...v,
  image: withBase(v.image),
}));
</script>

<HuaLang :list="list" />
```
