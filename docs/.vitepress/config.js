import { defineConfig } from 'vitepress';

const base = process.env.VITE_BUILD_ENV ? process.env.VITE_BUILD_ENV : '/';

export default defineConfig({
  base: base,
  lang: 'zh-CN',
  title: '青山依旧',
  description: '记录web前端那些事',
  lastUpdated: true,
  outDir: './.vitepress/libs',

  // HTML head
  head: [
    [
      'meta',
      {
        name: 'keywords',
        content: 'jsdawn,青山依旧,网络日记,笔记,web前端,js,vue,vite',
      },
    ],
    ['link', { rel: 'icon', href: base + 'logo.svg' }],
  ],

  // markdown 解析器配置
  markdown: {
    // 'css-variables' | 'dark-plus' | 'dracula-soft' | 'dracula' | 'github-dark-dimmed' | 'github-dark' | 'github-light' 
    // 'hc_light' | 'light-plus' | 'material-theme-darker' | 'material-theme-lighter' | 'material-theme-ocean' | 'material-theme-palenight' | 'material-theme' | 'min-dark' | 'min-light' | 'monokai' | 'nord' | 'one-dark-pro' | 'poimandres' | 'rose-pine-dawn' | 'rose-pine-moon' | 'rose-pine' | 'slack-dark' | 'slack-ochin' | 'solarized-dark' | 'solarized-light' | 'vitesse-dark' | 'vitesse-light';
    // theme: {
    //   light: 'min-light',
    //   dark: 'github-dark',
    // },
  },

  // Theme related configurations.
  themeConfig: {
    // 网页标题，默认 config.title
    // siteTitle: '青山依旧的网络日记',

    logo: '/logo.svg',
    // 右侧文章目录标题
    outlineTitle: '﹌﹋文章目录﹋﹌',
    // 文章最近更新日期
    lastUpdatedText: 'Updated Date',

    // 编辑申请 Link
    editLink: {
      // https://github.com/vuejs/vitepress/edit/main/docs/:path
      pattern: 'https://github.com/jsdawn/note/edit/master/docs/:path',
      text: 'Edit this page on github',
    },

    // 社交链接（显示在网站右上角）
    socialLinks: [
      { icon: 'github', link: 'https://github.com/jsdawn' },
      { icon: 'slack', link: 'https://juejin.cn/user/2101921962267079/posts' },
    ],

    // 网站底部版权信息等（无侧边栏的时候才显示）
    footer: {
      message: 'Released under the Apache License 2.0 License.',
      copyright:
        '<a href="https://beian.miit.gov.cn/" target="_blank">Copyright©2014-present jsdawn 桂ICP备2021007284号-1</a>',
    },

    // algolia 搜索配置
    // 申请地址 https://docsearch.algolia.com/apply
    algolia: {
      appId: 'SNU9E5MK6X', // Application ID
      apiKey: '0a0c1afec3ff5f4278d744b2552c94c5', // 邮箱发的 API Key
      indexName: 'jsdawn', // indexName
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
      activeMatch: '/feelings/',
      items: [
        { text: 'Element UI 系列', link: '/feelings/el-date-picker' },
        { text: 'Ant design vue 系列', link: '/feelings/a-upload' },
        { text: 'Echarts 系列', link: '/feelings/echarts-wordcloud' },
      ],
    },
    { text: 'Git/Node', link: '/node/git-npm', activeMatch: '/node/' },
    { text: '青山音乐', link: 'https://music.qscoding.com/', target: '_blank' },
  ];
}

function sidebar() {
  return [
    {
      text: '前端指南',
      collapsible: true,
      items: [
        { text: 'Vue3.0 项目升级到 Vue3.2', link: '/guide/vue3-upgrade' },
        { text: 'Vue3 富文本编辑器', link: '/guide/vue3-tinymce' },
        { text: 'vue3 国际化(i18n)', link: '/guide/vue3-i18n' },
        { text: 'Flutter 2 商城App实战指南', link: '/guide/flutter-mall' },
        { text: 'Flutter 布局相关', link: '/guide/flutter-weiget' },
        { text: 'Flutter 语法相关', link: '/guide/flutter-const' },
        { text: 'Docker 部署 Node 项目', link: '/guide/docker-compose' },
        { text: 'Docker GitHub 集成工作流', link: '/guide/docker-github' },
      ],
    },
    {
      text: '踩坑心得',
      collapsible: true,
      items: [
        {
          text: 'Vue3 瀑布流列表组件封装',
          link: '/feelings/vue3-waterfall-flow.md',
        },
        { text: 'JS 图片懒加载', link: '/feelings/js-lazy-load.md' },
        { text: 'Element 日期组件范围选择', link: '/feelings/el-date-picker' },
        { text: 'Antd vue Upload 自定义上传', link: '/feelings/a-upload' },
        { text: 'Echarts 词云图', link: '/feelings/echarts-wordcloud' },
      ],
    },
    {
      text: 'Git / Node / Npm',
      collapsible: true,
      items: [{ text: 'Git & Npm 常用指令', link: '/node/git-npm' }],
    },
    {
      text: '青山物语',
      collapsible: true,
      items: [
        { text: '🏞 青山画廊', link: '/tale/hualang' },
        { text: 'Hexo 博客搭建简易教程', link: '/tale/hexo-create' },
        { text: 'P1 攻城狮的江湖总结', link: '/tale/p1-zongjie' },
      ],
    },
  ];
}
