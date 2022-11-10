---
title: vue3 i18n 多语言配置
---

# vue3 多语言配置(i18n)

## 下载

```sh
yarn add vue-i18n@9
```

## 多语言文件结构

```yaml
  locales         # i18n, langs, locale are also acceptable
  ├── en.json
  ├── zh-CN.json   # YAML
  ├── ...
  └── <country-code>.json
  ├── index.js
  ├── i18n.js

```

### 语言文件

`en.js`, `zh-CN.js` 等

```json
{
  "message": {
    "Home": "Home",
    "My": "My"
  }
}
```

`index.js`

```js
import zhCN from './zh-CN.json';
import en from './en.json';

// 导出 i18n 语言合集
export default {
  zhCN,
  en,
};
```

## i18n 实例注入

文件 `i18n.js`：

```js
import { createI18n } from 'vue-i18n/index';
import messages from './index';

const i18n = createI18n({
  messages,
  locale: localStorage.getItem('lang') || 'zhCN', // set locale
  fallbackLocale: 'zhCN', // set fallback locale
  globalInjection: true, // set global, $t
  legacy: false, // you must set `false`, to use Composition API
});

// 设置当前语言， lang - 语言code，如index.js中定义的 en/zhCN
export function setGlobalLocale(lang) {
  lang = lang || 'zhCN';
  localStorage.setItem('lang', lang);
  i18n.global.locale.value = lang;
}

export default i18n;
```

项目入口 `mian.js` 注入:

```js
import i18n from '@/locales/i18n';

const app = createApp(App);
app.use(i18n);
```

## 简单使用

```js
<div id="app">
  <p>{{ $t("message.Home") }}</p>
</div>

<script>
  const { proxy } = getCurrentInstance();
  console.log(proxy.$t("message.Home"));
  ...
</script>
```

---

> **转载声明**：
>
> 请注明作者，注明原文链接，有疑问致邮 kingwyh1993@163.com
