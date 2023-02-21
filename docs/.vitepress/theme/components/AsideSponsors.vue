<script setup lang="ts">
import { VPDocAsideSponsors } from 'vitepress/theme';
const data = [
  {
    items: [
      {
        img: 'https://note.qscoding.com/assets/pay-qrcode.3243009c.png',
      },
    ],
  },
];
</script>

<template>
  <VPDocAsideSponsors :data="data" />
</template>

<style>
.vp-sponsor-grid.medium .vp-sponsor-grid-image {
  max-height: 100%;
  max-width: 100%;
}
</style>
