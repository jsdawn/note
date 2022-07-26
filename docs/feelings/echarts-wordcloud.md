---
title: echarts 词云图
---

# echarts 词云图，可自定义透明度

echarts 词云图，多个文字以不同权重集成一张可视化图表。

## 展示图

![931654831587_.pic.jpg](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/17673031b4474951b7128177e1a91c89~tplv-k3u1fbpfcp-watermark.image?)

## 解决方案 （vue2）

```js
/** html
<template>
  <div id="main" style="width:100%;height:300px"></div>
</template>
*/

import * as echarts from 'echarts';
import 'echarts-wordcloud';

export default {
  data() {
    return {
      wordList: [
        { name: '蛋饺', value: 200 },
        { name: '可乐', value: 150 },
        { name: '青山', value: 100 },
        { name: '666', value: 80 },
        { name: '阿姣', value: 60 },
      ],
    };
  },

  computed: {
    // 获取最大值
    maxValue() {
      let values = this.wordList.map((v) => v.value);
      return Math.max(...values);
    },
  },

  methods: {
    drawChart() {
      var chart = echarts.init(document.getElementById('main'));
      let option = {
        tooltip: {
          show: true, // 是否显示提示信息
          position: 'top',
          textStyle: {
            fontSize: 18,
          },
        },
        series: [
          {
            type: 'wordCloud',
            // 形状 circle 圆，cardioid  心， diamond 菱形，
            // triangle-forward 、triangle 三角，star五角星
            shape: 'circle',
            // 自定义图形
            // maskImage: maskImage,
            // 文字显示位置
            left: 'center',
            top: 'center',
            width: '85%',
            height: '85%',
            right: null,
            bottom: null,
            // 字体大小范围 px
            sizeRange: [14, 40],
            // 文字旋转角度范围 [-90,90]
            rotationRange: [0, 0],
            // 旋转步值
            rotationStep: 45,
            //网格的大小(以像素为单位)，用于标记画布的可用性
            //网格大小越大，单词之间的间距越大。
            gridSize: 16,
            // 是否渲染超出画布的文字, false-则文字若超出画布该项都不显示
            drawOutOfBound: true,
            // If perform layout animation.
            // NOTE disable it will lead to UI blocking when there is lots of words.
            layoutAnimation: false,
            // 文字样式
            textStyle: {
              fontFamily: 'sans-serif',
              fontWeight: 'bold',
              // 颜色：Color can be a callback function or a color string
              color: (itemData) => {
                // 按比例计算透明度 0-1
                let opacity = itemData.value / this.maxValue;
                // Random color ex: rgba(0,0,0,1)
                return (
                  'rgba(' +
                  [
                    Math.round(Math.random() * 160),
                    Math.round(Math.random() * 160),
                    Math.round(Math.random() * 160),
                    opacity,
                  ].join(',') +
                  ')'
                );
              },
            },
            // 强调样式
            emphasis: {
              focus: 'self',
              textStyle: {
                textShadowBlur: 6,
                textShadowColor: '#666',
              },
            },
            // 数据 格式 [{ name: '蛋饺', value: 200 },]
            data: this.wordList,
          },
        ],
      };
      // 渲染图表
      chart.setOption(option);
    },
  },

  mounted() {
    // 确保已渲染 dom
    this.$nextTick(() => {
      this.drawChart();
    });
  },
};
```

## 结语

博观而约取，厚积而薄发。

> **转载声明**：
> 请注明作者，注明原文链接，有疑问致邮 kingwyh1993@163.com
