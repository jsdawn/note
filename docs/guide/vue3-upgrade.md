---
title: Vue3.0 项目升级到 Vue3.2
---

# Vue3.0 项目升级到 Vue3.2 ｜ VUE

> 2021 年 8 月 5 日，**Vue3.2** 正式发布。此版本包括许多重要的新功能和性能改进，并且不包含突破性的更改。

## Vue3.2 的新功能和性能改进

**SFC 的新功能：**

单文件组件的两个新功能（SFCs，又称 vue 文件）已脱离实验状态，现在被认为是稳定的：

- `<script setup>` 是一种编译时语法糖，当在 SFCs 内使用合成 API 时，简洁代码结构和优化编码写法。

- `v-bind` 在 `<style>` 标签中启用组件状态驱动的动态 CSS 值。例如

```js
<script setup>
import { ref } from 'vue'
const color = ref('red')
</script>

<style scoped>
button {
  color: v-bind(color);
}
</style>
```

**一些优秀的性能改进：**

- 更高效的 ref 实现（读取速度加快约 260%/写入速度加快约 50%）
- 依赖项跟踪速度提高约 40%
- 内存使用减少约 17%

## Vue3.0 升级到 Vue3.2

**以 Vue CLI 构建项目为例**：Vue3 刚发布的时候，很多项目都是使用 **Vue CLI 工具构建**。虽然 Vue3.2 已经发布很久，但是目前的 CLI 工具构建出来的 Vue 项目依旧是 Vue3.0.0 版本（当然现在 Vue3 推荐的构建工具是 Vite）

- 升级依赖包 `vue` 和 编译器 `@vue/compiler-sfc`。
  升级到最新的 Vue 版本，进入 VUE 官网查看 vue3 最新稳定版本（当前是`v3.2.36`）

```sh
# 使用yarn更新到vue指定版本
yarn upgrade vue@3.2.36

# 更新到vue指定版本
yarn upgrade @vue/compiler-sfc@3.2.36
```

- 如果使用了`eslint-plugin-vue`，需要更新到新版以正确的检查 vue3 语法。

```sh
# 更新到 eslint-plugin-vue 指定版本
yarn upgrade eslint-plugin-vue@9.2.0
```

- 在 VSCode 开发，更新 VSCode 插件 `Vue Language Features (Volar) `。Volar 插件部分推荐设置如下：

```json
// `<script setup>`语法糖转换，开启后在vue文件中转换为语法糖写法
"volar.codeLens.scriptSetupTools": true,

// 关闭代码行参考，简洁vue文件提示
"volar.codeLens.references": false,

// 标题首选驼峰命名规则
"volar.completion.preferredAttrNameCase": "auto-camel"
```

## 结语

如果没有其他特殊的依赖项和需求，以上几个完成后就能正常运行基于 Vue3.2 项目啦。

博观而约取，厚积而薄发。😄 收藏+点赞+关注

> **转载声明**：
> 请注明作者，注明原文链接，有疑问致邮 kingwyh1993@163.com
