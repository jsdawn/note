<template>
  <div class="NTImageText">
    <div class="ICover">
      <div
        class="ICoverImg"
        :style="{
          paddingBottom: (1 / item.ratio) * 100 + '%',
        }"
        alt=""
        :data-src="item.image"
        v-lazy
      ></div>
      <div class="IAuthor">@{{ item.author || '网络图片' }}</div>
    </div>
    <div class="IText">
      <h3 v-text="item.title" v-if="item.title"></h3>
      <p v-text="item.brief" v-if="item.brief"></p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IImageText } from '../types/index';
import { useLazyLoad } from '../hooks';

defineProps<{ item: IImageText }>();

const vLazy = useLazyLoad();
</script>

<style lang="sass" scoped>
.NTImageText
  transition: transform .22s ease-in
  &:hover
    transform: scale(1.08)

.ICover
  position: relative

.ICoverImg
    height: 0
    padding-bottom: 100%
    background-size: cover
    background-position: center
    background-color: var(--vp-c-bg-soft)
    border-radius: 10px

.IAuthor
  position: absolute
  right: 5px
  bottom: 2px
  font-size: 12px
  color: #fff

.IText
    color: var(--vp-c-text-3)
    font-size: 14px
    font-weight: 300
    h3
        padding-top: 10px
        color: var(--vp-c-text-2)
        font-size: 16px
    p
        margin-top: 5px
        font-weight: 400
        letter-spacing: 0.2px
</style>
