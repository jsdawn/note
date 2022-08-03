<template>
  <div class="HuaLang">
    <h1 class="HTitle"><span>青山画廊，</span>定格每一个瞬间</h1>

    <div class="HWrapper">
      <NTFlowList :list="list">
        <template #item="{ item }">
          <NTImageText :item="item" v-if="!!item.image" />
        </template>
      </NTFlowList>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IImageText } from '../types/index';
// import ImageText from '../components/NTImageText.vue';

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
  @media screen and (max-width: 880px)
    font-size: 40px
  @media screen and (max-width: 550px)
    font-size: 30px
  @media screen and (max-width: 400px)
    font-size: 25px
  span
    color: var(--vp-c-brand)

.HWrapper
  padding: 6vh 24px
</style>
