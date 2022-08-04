---
title: JS 图片懒加载 IntersectionObserver
---

# JS 图片懒加载 IntersectionObserver

> 长列表页面中，当图片滑动到窗口可见时才加载

## IntersectionObserver

`IntersectionObserver` 原生 js 接口提供一种异步观察目标元素与其祖先元素或顶级文档视窗交叉状态的方法。即元素在视窗中出现或离开的状态。
参考 [MDN IntersectionObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver)

```js
// html 把图片链接写到 data-src 中
<img class="img" data-src="http://jsdawn/note/img1.jpg" />;

// var observer = new IntersectionObserver(callback[, options]);
// 创建一个元素观察器
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // 当监听到某元素出现或者离开可见视窗时回调
    // entry.isIntersecting = true 出现在视窗
    // 将 data-src 的图片链接复制到 图片 src
    if (entry.isIntersecting) {
      el.src = el.dataset.src;
      observer.unobserve(el); // 显示图片后取消观察该元素
    }
  });
});

// 监听元素，el 是 html dom 元素，可监听多个
const imgList = document.querySelectorAll('.img');
imgList.forEach((el) => {
  observer.observe(el);
});
```

## 拓展到 vue3 hooks 指令

### hooks/useLazyLoad.ts

```ts
export const useLazyLoad = () => {
  // v-lazy 指令
  const vLazy = {
    // 元素加载完成时 mounted
    mounted: (el: HTMLElement) => {
      // 创建元素观察器
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          // 判断是否是当前元素，并且出现在窗口
          if (entry.target == el && entry.isIntersecting) {
            const src = el.dataset.src;
            el.style.backgroundImage = `url(${src})`;
            observer.unobserve(el);
          }
        });
      });
      // 观察元素
      observer.observe(el);
    },
  };
  return vLazy;
};
```

### vue 文件中使用指令

```vue
<template>
  <div>
    <img data-src="http://jsdawn/note/img1.jgp" v-lazy />
    <img data-src="http://jsdawn/note/img2.jgp" v-lazy />
    <img data-src="http://jsdawn/note/img3.jgp" v-lazy />
    <img data-src="http://jsdawn/note/img4.jgp" v-lazy />
    <img data-src="http://jsdawn/note/img5.jgp" v-lazy />
  </div>
</template>

<script setup lang="ts">
import { useLazyLoad } from './hooks/useLazyLoad';
// 使用 useLazyLoad 注册为 v-lazy 指令
const vLazy = useLazyLoad();
</script>
```

## 结语

博观而约取，厚积而薄发。

> **转载声明**：
> 请注明作者，注明原文链接，有疑问致邮 kingwyh1993@163.com
