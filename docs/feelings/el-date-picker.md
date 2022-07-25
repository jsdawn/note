---
title: Element UI 日期组件范围选择
---

# DatePicker 日期组件 - 范围选择控制

> 当前版本 `element-ui@2.x`，日期组件 `el-date-picker`

## 具体需求

选择范围日期，最多可连续选择 7 天

## 效果图

![971655263896_.pic.jpg](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9e5e733f8b1d4e7aa358c78305e9bc36~tplv-k3u1fbpfcp-watermark.image?)

## 解决方案

```js
/**
<el-date-picker
  v-model="selDate"
  type="daterange"
  unlink-panels
  range-separator="至"
  start-placeholder="开始日期"
  end-placeholder="结束日期"
  :picker-options="{
    disabledDate: this.onDisabledDate,
    onPick: this.onPick
  }"
></el-date-picker>
*/

data(){
  return{
    currPickDate: {}, // 当前选择日期
  }
}

methods:{
    // 选中日期会重新触发日历每个日期的状态
    // 可利用这点，在选择了一个日期之后，控制其他日期的可选状态
    onDisabledDate(date) {
      // 7天转换时间搓长度
      let rangeTime = 7 * 24 * 60 * 60 * 1000;
      // 选中第一个日期（minDate有值），控制前后日期状态
      if (this.currPickDate.minDate && !this.currPickDate.maxDate) {
        let minDateTime = new Date(this.currPickDate.minDate).getTime();
        let dateTime = new Date(date).getTime();
        console.log(minDateTime, dateTime);
        // 禁用前后7天的日期
        return Math.abs(minDateTime - dateTime) >= rangeTime;
      }
    },

    // 选中日期后执行回调，只有当 daterange 或 datetimerange 才生效
    // 返回对象 包含起始值和结束值 { maxDate, minDate }
    // 每次重新选中一个日期都会以 minDate 开始，此时 maxDate 为null
    // 选中两个日期范围后 minDate，maxDate都有值
    onPick(pickDate) {
      this.currPickDate = pickDate || {};
    },
}
```

## 结语

博观而约取，厚积而薄发。

> **转载声明**：
> 请注明作者，注明原文链接，有疑问致邮 kingwyh1993@163.com
