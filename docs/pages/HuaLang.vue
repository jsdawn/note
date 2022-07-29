<template>
  <div class="HuaLang">
    <h1 class="HTitle"><span>青山画廊，</span>定格每一个瞬间</h1>

    <div class="HCardWrapper">
      <div class="HCardItem" v-for="(item, index) in list" :key="index">
        <NTImageText :item="item" v-if="!!item.image" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NTImageText from '../components/NTImageText.vue';
import type { IImageText } from '../types/index';

defineProps<{ list: IImageText[] }>();
</script>

<style lang="sass" scoped>
.HTitle
  position: relative
  padding-top: 8vh
  font-weight: 300
  font-size: 60px
  line-height: 1
  text-align: center
  z-index: 1
  @media screen and (max-width: 880px)
    font-size: 40px
  @media screen and (max-width: 550px)
    font-size: 30px
  @media screen and (max-width: 400px)
    font-size: 25px
  span
    color: var(--vp-c-brand)

.HCardWrapper
  padding: 6vh 8vw
  max-width: 2000px
  margin: 0 auto
  column-count: 5
  column-gap: 24px

  @media screen and (max-width: 1630px)
    column-count: 4

  @media screen and (max-width: 1000px)
    column-count: 3

  @media screen and (max-width: 754px)
    column-count: 2

  @media screen and (max-width: 510px)
    column-count: 1


.HCardItem
  margin-bottom: 24px
  box-sizing: content-box
  width: 100%
  -webkit-column-break-inside: avoid
  break-inside: avoid
</style>
