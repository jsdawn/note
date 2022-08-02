<template>
  <div class="NTFlowList" ref="wrapper">
    <div class="NTFlowItem" v-for="(item, index) in list" :key="index">
      <slot name="item" :index="index" :item="item"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, withDefaults, nextTick } from 'vue';

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
// waterfall flow 瀑布流列高 [0,0,0,...]
const flowHeight: number[] = [];

// 绘制瀑布流
const flowDraw = () => {
  if (!wrapper.value) return;
  // 初始化列高
  const columnCount = getColumnCount();
  for (let i = 0; i < columnCount; i++) {
    flowHeight[i] = 0;
  }
  // 设置容器宽（居中布局）
  wrapper.value.style.width =
    (props.columnWidth + props.columnGap) * columnCount - props.columnGap + 'px';
  // 绘制 item
  const doms = wrapper.value.querySelectorAll('.NTFlowItem');
  doms.forEach((dom: any) => {
    const minIdx = getMinIndex(flowHeight);
    const transform = `translate(${minIdx * (props.columnWidth + props.columnGap)}px, ${
      flowHeight[minIdx]
    }px)`;
    dom.style.transform = transform;
    console.log(dom.offsetHeight);
    flowHeight[minIdx] += dom.offsetHeight;
  });
  // 设置容器高
  wrapper.value.style.height = Math.max(...flowHeight) + 'px';
};

// 获取适配列数量
const getColumnCount = (): number => {
  if (!wrapper.value) return 0;
  const num = (wrapper.value.offsetWidth + props.columnGap) / (props.columnWidth + props.columnGap);
  return Math.floor(num);
};

// 获取最小值的索引 index
const getMinIndex = (list: number[]) => {
  const min = Math.min(...list);
  return list.indexOf(min);
};

onMounted(() => {
  flowDraw();
});
</script>

<style lang="sass" scoped>
.NTFlowList
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
