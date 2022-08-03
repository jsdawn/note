<template>
  <div class="NTImageText">
    <div class="ICover">
      <div
        class="ICoverImg"
        :style="{
          backgroundImage: `url(${item.image})`,
          paddingBottom: (1 / item.ratio) * 100 + '%',
        }"
        alt=""
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
import { withDefaults } from 'vue';
import type { IImageText } from '../types/index';

withDefaults(
  defineProps<{
    item: IImageText;
  }>(),
  {
    item: () => ({ image: '', ratio: 1 }),
  }
);
</script>

<style lang="sass" scoped>
.ICover
  position: relative

.ICoverImg
    height: 0
    padding-bottom: 100%
    background-size: cover
    background-position: center
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
