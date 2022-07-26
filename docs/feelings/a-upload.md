---
title: Antd vue Upload 自定义上传
---

# Ant Design Vue Upload 自定义上传 customRequest

> 本文章重点描述上传组件 `Upload` 的 `customRequest` 自定义文件上传逻辑的实现

Ant Design Vue 是其社区为 Ant Design 实现的 Vue 版本，用到该组件库的朋友基本也会用到它的上传组件 `Upload`。

![32234234.jpeg](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c5d47024a3da404d80468876a96e0c63~tplv-k3u1fbpfcp-watermark.image?)

## 阅读文章你将收获

- Ant Design Vue 表单快速上手能力
- `Upload` 简单上传使用
- `Upload` 自定义上传逻辑的实现
- `Upload` 自定义进度条的实现

## `Upload` 常用属性和方法

| 标题 | 说明 | 类型 |
| --- | --- | --- |
| action | 上传的地址 | string|(file) => `Promise` |
| name | 发到后台的文件参数名 | string |
| multiple | 是否支持多选文件，`ie10+` 支持。开启后按住 ctrl 可选择多个文件。 | boolean |
| fileList | 已经上传的文件列表（受控） | object[] |
| data | 上传所需参数或返回上传参数的方法 |object|(file) => object |
| headers | 设置上传的请求头部，IE10 以上有效 | object |
| beforeUpload | 上传文件之前的钩子，参数为上传的文件，若返回 `false` 则停止上传。 | (file, fileList) => `boolean | Promise` |
| customRequest | 通过覆盖默认的上传行为，可以自定义自己的上传实现 | Function |
| change | 上传文件改变时的状态 | Function |

## 示例上传接口
```text
# 接口文档
url `https://www.mocky.io/api/main/upload`
头部
x-token: 'xxx'  
参数
file: File   // 上传的文件
flag: 'xxx'  // 上传的标识
```

```js
// 文件上传 api 函数简单封装
export const uploadApi = ({ file }) => {
  const formData = new FormData();
  formData.append('file', file);
  // ... 略，formData 其他实现逻辑
  return axios({
    url: '/api/upload',
    method: 'POST',
    data: formData,
    headers: {
      'Content-type': 'multipart/form-data',
    },
  });
};
```

## 组件基本使用
```xml
<a-upload
    v-model:file-list="fileList"
    name="file"
    :multiple="true"
    action="https://www.mocky.io/api/main/upload"
    :headers="{ x-token: 'xxx' }"
    :data="{ flag: 'xxx' }"
    @change="handleChange"
  >
    <a-button>点击上传</a-button>
</a-upload>
```
基本使用方式可以满足大部分上传需求，但是也存在局限性，仅限于配合该组件的属性使用。如果是已经封装好了上传的请求函数（包括头部信息和请求中间件等），可在多个地方使用，还使用该方式拼接 `data`,`headers` 就有点冗余了。

## `customRequest` 自定义上传
### 简单使用
使用组件的 `customRequest` 属性覆盖默认的上传行为，可以自定义自己的上传实现
```js
<a-upload
    v-model:file-list="fileList"
    list-type="picture-card"
    name="file"
    :multiple="true"
    :customRequest="customUpload"
    @change="handleChange"
>
    <upload-outlined></upload-outlined>
</a-upload>

<script>
...
const fileList = ref([]);

// 自定义文件上传公共函数
// e - 上传组件返回的上传实例，里面包括 file，和一些组件方法
// e.file - 上传的文件实例对象
// e.onSuccess(ret, xhr)
// e.onError(err, ret)
const customUpload = (e) => {
  console.log(e);
  // uploadApi 你的二次封装上传接口  
  uploadApi({
      file: e.file
  })
    .then((res) => {
      console.log('上传成功', res.data);
      // 调用实例的成功方法通知组件该文件上传成功
      e.onSuccess(res.data, e);  
    })
    .catch((err) => {
      // 调用实例的失败方法通知组件该文件上传失败
      e.onError(err);
    });
};

</script>

```

这样的话，实现自定义的上传函数，二次封装上传接口，例如在`uploadApi`使用 axios 对基本路径、头部信息和请求参数的封装。

在请求成功后调用组件实例成功回调`onSuccess(ret,xhr)`，回传的ret 将会存放在`fileList` 中的 `file.response` 中，可运用这点存放所需的数据。

### 进度条的实现
由于前面 **简单使用** 的时候我们自定义了上传逻辑，组件未能监听到上传的进度 `fileList` 中的 `file.percent` 会一直处于 `0` 的状态。所以下面我们实现一下请求进度逻辑，补全该进度条。

```js
// 自定义文件上传公共函数
// e.onProgress(event)  event的格式为 {percent:xxx}
const customUpload = (e) => {
  console.log(e);
  // 上传接口  e.file 就是接口所用的 file
  uploadApi({
    file: e.file,
    onUploadProgress: (ev) => {
      // ev - axios 上传进度实例，上传过程触发多次
      // ev.loaded 当前已上传内容的大小，ev.total - 本次上传请求内容总大小
      console.log(ev);
      const percent = (ev.loaded / ev.total) * 100;
      // 计算出上传进度，调用组件进度条方法
      e.onProgress({ percent });
    },
  })
    .then((res) => {
      console.log('上传成功', res.data);
      e.onSuccess(res.data, e);
    })
    .catch((err) => {
      e.onError(err);
    });
};
```

看上去也就多了个`onUploadProgress`参数。不过这个参数并非只是 `uploadApi` 方法的。还需要在请求实例（axios）中配置该上传进度回调参数。

```js
// 文件上传 api
export const uploadApi = ({ file, onUploadProgress }) => {
  const formData = new FormData();

  formData.append('file', file);
  // ... 略，formData 其他实现逻辑

  return axios({
    url: '/api/upload',
    method: 'POST',
    data: formData,
    headers: {
      'Content-type': 'multipart/form-data',
    },
    onUploadProgress, // 上传进度回调函数 onUploadProgress(ev)
  });
};
```


实现了上传进度逻辑，自定义上传的文件列表 `fileList` 中的 `file.percent` 才会正确反应进度情况

## 配合表单组件使用
以 `Vue3` 的概念逻辑代码为例
```js
<a-form :model="formInfo">
  <a-form-item label="your name">
    <a-input v-model:value="formInfo.name" />
  </a-form-item>

  <a-form-item label="身份证上传">
    <a-upload
      v-model:file-list="fileList"
      list-type="picture-card"
      name="file"
      :multiple="true"
      :customRequest="customUpload"
      @change="handleChange"
    >
      <upload-outlined></upload-outlined>
    </a-upload>
  </a-form-item>

  <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
    <a-button type="primary" @click="onSubmit">Submit</a-button>
    <a-button style="margin-left: 10px">Cancel</a-button>
  </a-form-item>
</a-form>

<script>
...

const fileList = ref([]);
const formInfo = reactive({
  name: '阿姣🐷',
});

// 获取上传成功的文件 url 数组
const getSuccessFileUrls = (list) => {
  let urls = [];
  list.forEach((item) => {
    // 获取上传成功的文件数据
    if (item.status === 'done' && item.response) {
      urls.push(item.response.url); //改为你想获取的数据格式
    }
  });
  return urls;
};

// 表单提交
const onSubmit = () => {
  const urls = getSuccessFileIds(fileList.value);
  console.log(urls);
  console.log(toRaw(formInfo));
  ...
  submitInfoApi(data)
      .then(res=>{})
      .cathc(err=>{})
};
</script>
```

### 获取详情后回显表单

请求信息详情接口成功后，将图片文件等url重新按照 fileList 的格式赋值文件列表。
```js
<script>
const fileList = ref([]);

const fetchDetail = ()=>{
    getInfoDetail(data).then(res=>{
       let imageUrls = res.data.images; // 详情数据 
       imageUrls.forEach(item=>{
           let newItem = {
              uid: 'xxxx1',
              response: {
                id: 'xxxx1',
                origin_name: 'image1.png',
                url: 'http://xxx/image1.png',
              },
              name: 'image1.png',
              status: 'done',
              url: 'http://xxx/image1.png',
           };
           fileList.value.push(newItem); // 赋值文件列表
       });
       ...
    });
}
</script>
```

## 结语
很荣幸你能看到这里。其实各大组件库的上传组件大同小异，相互对比学习，可以更了解它们的使用...

>**转载声明**：
>请注明作者，注明原文链接，有疑问致邮 kingwyh1993@163.com


