<template>
  <VPDocAsideSponsors class="nt-aside-sponsors" :data="data" />
</template>

<script setup>
import { VPDocAsideSponsors } from 'vitepress/theme';

const data = [
  {
    items: [
      // {
      //   img: 'https://note.qscoding.com/assets/pay-qrcode.3243009c.png',
      // },
    ],
  },
];
</script>

<style lang="scss">
.VPDocAsideSponsors.nt-aside-sponsors {
  .vp-sponsor-grid-box {
    padding: 5px;
  }

  .vp-sponsor-grid-image {
    max-height: 100%;
    max-width: 100%;
    filter: none;
  }
}
</style>
