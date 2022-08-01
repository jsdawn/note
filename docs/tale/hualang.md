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
  - image: /hualang/天空幻境.jpg
    ratio: 1.25
    title: 天空幻境
    brief: 海天一色
  - image: /hualang/千与千寻.webp
    ratio: 0.55
    title: 千与千寻
    brief: 海天一色
  - image: /hualang/听海.jpg
    ratio: 1
    title: 听海
    brief: 海天一色

  - image: /hualang/天空幻境.jpg
    ratio: 1.25
    title: 天空幻境
    brief: 海天一色
  - image: /hualang/千与千寻.webp
    ratio: 0.55
    title: 千与千寻
    brief: 海天一色
  - image: /hualang/天空幻境.jpg
    ratio: 1.25
    title: 天空幻境
    brief: 海天一色

  - image: /hualang/锅哥夏天.jpeg
    ratio: 1.33
    title: 奔赴盛夏
    brief: 藏在盛夏的爱意
---

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
