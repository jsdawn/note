<script setup lang="ts"></script>

<template>
  <p>的撒附近的拉分大发快了的撒舒服</p>
  <div class="pay-box">
    <div class="pay-item">
      <div class="cover">
        <img src="./wxqr.jpeg" alt="" />
      </div>
      <p>微信支付</p>
    </div>

    <div class="pay-item ali">
      <div class="cover">
        <img src="./aliqr.jpeg" alt="" />
      </div>
      <p>支付宝支付</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

.pay-box {
  padding: 10px 20px;
  background-color: #fff;
  display: flex;

  .pay-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    width: 280px;
    border-radius: 10px;
    background-color: rgb(53 185 77);

    & + .pay-item {
      margin-left: 40px;
    }

    .cover {
      width: 100%;
      background-color: #fff;
      padding: 10px 20px;
      img {
        width: 100%;
        height: auto;
      }
    }

    p {
      margin: 0;
      padding-top: 15px;
      font-size: 25px;
      color: #fff;
    }
  }

  .pay-item.ali {
    background-color: rgb(35 93 254);
  }
}
</style>
