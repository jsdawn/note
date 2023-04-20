<template>
  <div class="container pay-qrcode">
    <h2>鼓励作者</h2>
    <p>如果你觉得博客对你有帮助，可以帮忙点个 star 或者打赏一杯咖啡☕️</p>

    <div class="img-box">
      <img src="../assets/image/pay-qrcode.png" alt="" />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  max-width: 1152px;
}

h2 {
  margin: 48px 0 16px;
  border-top: 1px solid var(--vp-c-divider-light);
  padding-top: 24px;
  letter-spacing: -0.02em;
  line-height: 32px;
  font-size: 24px;
  font-weight: 600;
}

.img-box{
  margin-top: 20px;
  max-width: 500px;
}
</style>
