import { defineConfig } from 'vitepress';

export default defineConfig({
  base: '/note/',
  lang: 'zh-CN',
  title: '青山依旧的网络日记',
  description: '记录web前端那些事',
  lastUpdated: true,
  outDir: './.vitepress/lib',

  // HTML head
  head: [
    [
      'meta',
      {
        name: 'keywords',
        content: 'jsdawn,青山依旧,网络日记,笔记,web前端,js,vue,vite',
      },
    ],
    ['link', { rel: 'icon', href: '/logo.svg' }],
  ],

  // markdown 解析器配置
  markdown: {},

  // Theme related configurations.
  themeConfig: {
    // 网页标题，默认 config.title
    // siteTitle: '青山依旧的网络日记',
    logo: '/logo.svg',
    // 右侧文章目录标题
    outlineTitle: '文章目录',
    // 文章最近更新日期
    lastUpdatedText: 'Updated Date',

    // 编辑申请 Link
    editLink: {
      // https://github.com/vuejs/vitepress/edit/main/docs/:path
      pattern: 'https://gitee.com/jsdawn/note/edit/master/docs/:path',
      text: 'Edit this page on Gitee',
    },

    // 社交链接（显示在网站右上角）
    socialLinks: [
      { icon: 'github', link: 'https://gitee.com/jsdawn' },
      { icon: 'slack', link: 'https://juejin.cn/user/2101921962267079/posts' },
    ],

    // 网站底部版权信息等（无侧边栏的时候才显示）
    footer: {
      message: 'Released under the Apache License 2.0 License.',
      copyright: 'Copyright © 2022-present 青山依旧',
    },

    // algolia 搜索配置
    algolia: {
      appId: 'VL3TUT5ZUE',
      apiKey: '3395e258cd95ff782b13284b82c59770',
      indexName: 'note',
    },

    // Carbon 广告接入项 Carbon Ads (https://www.carbonads.net/blogs).
    // carbonAds: {
    //   code: '',
    //   placement: ''
    // }

    // 顶部菜单导航
    nav: nav(),

    // 侧边栏导航
    sidebar: sidebar(),
  },
});

function nav() {
  return [
    { text: '前端指南', link: '/guide/vue3-upgrade', activeMatch: '/guide/' },
    {
      text: '踩坑心得',
      items: [
        { text: 'Element UI 系列', link: '/feelings/el-date-picker.md' },
        { text: 'Ant design vue 系列', link: '/feelings/a-upload.md' },
        { text: 'Echarts 系列', link: '/feelings/echarts-wordcloud.md' },
      ],
    },
  ];
}

function sidebar() {
  return [
    {
      text: '前端指南',
      collapsible: true,
      items: [{ text: '项目从 Vue3.0 升级到 Vue3.2', link: '/guide/vue3-upgrade' }],
    },
    {
      text: '踩坑心得',
      collapsible: true,
      items: [
        { text: 'Element 日期组件范围选择', link: '/feelings/el-date-picker.md' },
        { text: 'Antd vue Upload 自定义上传', link: '/feelings/a-upload.md' },
        { text: 'echarts 词云图', link: '/feelings/echarts-wordcloud.md' },
      ],
    },
  ];
}