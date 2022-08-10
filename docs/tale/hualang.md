---
title: 青山画廊
titleTemplate: 定格每一个瞬间
description: 记录有趣的事物，定格每一个有故事有意义的瞬间
layout: page
sidebar: false

# 画廊列表
# image：图片绝对路径，放在 public/hualang 目录
# ratio：图片绝宽高比 title：标题  brief：简介
list:
  - image: /hualang/听海.jpg
    ratio: 1
    title: 听海
    brief: 写信告诉我今天 海是什么颜色
  - image: /hualang/千与千寻.webp
    ratio: 0.55
    title: 千与千寻
  - image: /hualang/下班啦.jpg
    ratio: 0.75
    title: 下班啦
    brief: 天黑前下班，心情是愉快的
    author: 青山依旧
  - image: /hualang/锅哥夏天.jpg
    ratio: 1
    title: 奔赴盛夏
    brief: 藏在盛夏的爱意
    author: 郭梳子
  - image: /hualang/灯都湿地公园1.jpg
    ratio: 1.35
    title: 灯都湿地公园-景1
    brief: 水面如镜
    author: 青山依旧
  - image: /hualang/灯都湿地公园2.jpg
    ratio: 1.35
    title: 灯都湿地公园-景2
    brief: 建筑特色
    author: 青山依旧
  - image: /hualang/广州塔.jpg
    ratio: 0.75
    title: 广州塔
    author: 青山依旧
  - image: /hualang/尤克里里.jpg
    ratio: 1.35
    title: 尤克里里
    author: 青山依旧
  - image: /hualang/落日.jpg
    ratio: 1.35
    title: 落日余晖
    brief: 西风残照，汉家陵阙
    author: 青山依旧
---

<script setup>
import { useData, withBase } from 'vitepress';
import HuaLang from '../widgets/HuaLang.vue';

const { page } = useData();
const list = (page.value.frontmatter?.list || []).map((v) => ({
  ...v,
  image: withBase(v.image),
}));
</script>

<HuaLang :list="list" />
