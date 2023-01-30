<template>
  <h1 class="HTitle"><span>青山画册，</span>记录每一个瞬间</h1>

  <div id="perspective">
    <div class="wrap" ref="wrapRef">
      <img v-for="(item, index) in imgs" :key="index" :src="item" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
const props = defineProps({
  imgs: { tyep: Array },
});

const wrapRef = ref();

watch(props.imgs, (val) => {
  draw();
});

function draw() {
  var oImg = wrapRef.value.getElementsByTagName('img');
  var Deg = 360 / oImg.length;
  var r = (oImg.length * 160) / 3.14159 / 2;

  Array.prototype.forEach.call(oImg, function (el, index) {
    el.style.transform =
      'rotateY(' + Deg * index + 'deg)translateZ(' + Math.max(300, r) + 'px)';
    // el.style.zIndex = -index;
    el.style.transition = 'transform 1s ' + index * 0.1 + 's';
  });
}

onMounted(() => {
  draw();
  var nowX,
    nowY, //当前鼠标坐标
    lastX,
    lastY, //上一次鼠标坐标
    minusX,
    minusY, //距离差
    roX = -10,
    roY = 0; //总旋转度数

  window.onmousedown = function (ev) {
    var ev = ev; //获得事件源

    lastX = ev.clientX;
    lastY = ev.clientY;

    this.onmousemove = function (ev) {
      var ev = ev; //获得事件源
      nowX = ev.clientX;
      nowY = ev.clientY; //获得当前坐标
      minusX = nowX - lastX;
      minusY = nowY - lastY; //坐标差
      roY += minusX; //累计差值
      roX -= minusY; //累计差值
      wrapRef.value.style.transform =
        'rotateX(' + roX + 'deg)' + 'rotateY(' + roY + 'deg)';
      lastX = nowX;
      lastY = nowY; //移动末期现坐标变为旧坐标
    };

    this.onmouseup = function () {
      this.onmousemove = null; //取消鼠标移动的影响
      // this.onmousedown = null;
    };
  };
});
</script>

<style lang="scss" scoped>
.HTitle {
  position: relative;
  padding-top: 8vh;
  font-weight: 300;
  font-size: 60px;
  line-height: 1;
  text-align: center;
  @media screen and (max-width: 880px) {
    font-size: 40px;
  }
  @media screen and (max-width: 550px) {
    font-size: 30px;
  }
  @media screen and (max-width: 400px) {
    font-size: 25px;
  }
  span {
    color: var(--vp-c-brand);
  }
}

/* 场景景深 */

#perspective {
  perspective: 900px;
  text-align: initial;
}

.wrap {
  position: relative;
  width: 150px;
  height: 180px;
  margin: 150px auto;
  // border: 1px solid black;
  transform-style: preserve-3d;
  transform: rotateX(-15deg) rotateY(0deg); /*景深可以简写在此属性里*/
}

.wrap img {
  position: absolute;
  width: 150px;
  height: 180px;
  object-fit: cover;
  transform: rotateX(0deg) rotateY(0deg);
  box-shadow: 0px 0px 1px #000000;
  /* 用box-shadow可以忽略层级问题 */
}
</style>
