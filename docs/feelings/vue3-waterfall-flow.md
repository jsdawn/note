---
title: Vue3 瀑布流列表组件封装
---

# Vue3 瀑布流列表组件封装

> 页面展示列表，列表项的高度不统一的情况下（如图片高度不同，文字行数不同等），瀑布流布局就显得非常优雅。
> 文章手撕瀑布流布局列表，不使用插件，纯 js 封装

## 瀑布流封装思路

1. 计算该列表垂直列的数量（固定列表项的宽度）
1. 初始化每列的高度，初始值都是 0，存放在数组中。如 4 列则数组为 `[0,0,0,0]`
1. 各项使用 css 绝对定位，初始位置为 `left:0; top:0`
1. 找出列高最小的列，将下一项放入该列，累加该列列高。如 `[200,0,0,0]`
1. 遍历各项重复上一步
1. 最终以列高最大值设置列表容器高度
1. 浏览器窗口变化，重绘瀑布流布局

## 组件完整代码

```vue
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, withDefaults } from 'vue';

const props = withDefaults(
  defineProps<{
    list: any[];
    columnWidth?: number; // 列宽
    columnGap?: number; // 列间距
  }>(),
  {
    columnWidth: 240,
    columnGap: 24,
  }
);

const wrapper = ref<HTMLElement | null>(null);
const content = ref<HTMLElement | null>(null);
// waterfall flow 瀑布流列高 [0,0,0,...]
const flowHeight: number[] = [];

/// 绘制瀑布流
const flowDraw = () => {
  if (!content.value) return;
  // 初始化列高
  const columnCount = getColumnCount();
  flowHeight.length = columnCount;
  for (let i = 0; i < columnCount; i++) {
    flowHeight[i] = 0;
  }
  // 设置容器宽（居中布局）
  const itemW = props.columnWidth + props.columnGap;
  content.value.style.width = itemW * columnCount - props.columnGap + 'px';

  // 绘制 item 位置
  const doms = content.value.querySelectorAll('.NTFlowItem');
  doms.forEach((dom: any) => {
    const minIdx = getMinIndex(flowHeight);
    dom.style.left = `${minIdx * itemW}px`;
    dom.style.top = `${flowHeight[minIdx]}px`;
    flowHeight[minIdx] += dom.offsetHeight;
  });
  // 设置容器高
  content.value.style.height = Math.max(...flowHeight) + 'px';
};

/// 获取列的数量
const getColumnCount = (): number => {
  if (!wrapper.value) return 0;
  const itemW = props.columnWidth + props.columnGap;
  const num = (wrapper.value.offsetWidth + props.columnGap) / itemW;
  return Math.min(Math.floor(num), props.list.length);
};

/// 获取最小值的索引 index
const getMinIndex = (list: number[]) => {
  const min = Math.min(...list);
  return list.indexOf(min);
};

/// 监听窗口变化重绘瀑布流布局
let timer: number | null = null;
const onResize = () => {
  if (timer) {
    clearTimeout(timer);
    timer = null;
  }
  timer = setTimeout(() => {
    flowDraw();
  }, 300);
};

onMounted(() => {
  flowDraw();
  window.addEventListener('resize', onResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize);
});
</script>

<template>
  <div class="NTFlowList" ref="wrapper">
    <div class="NTFlowContent" ref="content">
      <div class="NTFlowItem" v-for="(item, index) in list" :key="index">
        <slot name="item" :index="index" :item="item"></slot>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.NTFlowContent
  margin-left: auto
  margin-right: auto
  position: relative

.NTFlowItem
  padding-bottom: 24px
  width: v-bind("columnWidth + 'px'")
  position: absolute
  top: 0
  left: 0
</style>
```

## 在 vue 中使用

```vue
<template>
  <NTFlowList :list="list">
    <template #item="{ item }">
      <div class="item">
        <img :src="item.url" :style="{ height: item.height + 'px' }" />
        <p>{{ item.title }}</p>
      </div>
    </template>
  </NTFlowList>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// 由于瀑布流需要计算元素的高度进行绘制
// 图片的加载是异步的，无法第一时间计算，需要为其设置高度
const list = ref([
  { url: 'http://img1.jpg', height: 200, title: '图片1' },
  { url: 'http://img1.jpg', height: 400, title: '图片2' },
  { url: 'http://img1.jpg', height: 320, title: '图片3' },
  { url: 'http://img1.jpg', height: 660, title: '图片4' },
]);
</script>
```

## 结语

博观而约取，厚积而薄发。

> **转载声明**：
> 请注明作者，注明原文链接，有疑问致邮 kingwyh1993@163.com
