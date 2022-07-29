---
title: 青山画廊
titleTemplate: 定格每一个瞬间
description: 记录有趣的事物，定格每一个有故事有意义的瞬间
layout: page
sidebar: false
list:
  - image: /hualang/天空幻境.jpg
    ratio: 0.8
    title: 天空幻境
    brief: 海天一色
  - image: /hualang/千与千寻.webp
    ratio: 1.8
    title: 千与千寻
    brief: 海天一色
  - image: /hualang/听海.jpg
    ratio: 1
    title: 听海
    brief: 海天一色

  - image: /hualang/天空幻境.jpg
    ratio: 0.8
    title: 天空幻境
    brief: 海天一色
  - image: /hualang/千与千寻.webp
    ratio: 1.8
    title: 千与千寻
    brief: 海天一色
  - image: /hualang/天空幻境.jpg
    ratio: 0.8
    title: 天空幻境
    brief: 海天一色

  - image: /hualang/天空幻境.jpg
    ratio: 0.8
    title: 天空幻境
    brief: 海天一色
  - image: /hualang/听海.jpg
    ratio: 1
    title: 听海
    brief: 海天一色
---

<script setup lang="ts">
import { useData, withBase } from 'vitepress'
import HuaLang from '../pages/HuaLang.vue'
const { page } = useData()
const list = (page.value.frontmatter?.list || []).map(v=>({
        ...v,
        image: withBase(v.image)
    }));
</script>

<HuaLang :list="list"/>
