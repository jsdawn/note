---
title: Hexo 博客搭建简易教程
---

# 如何拥有自己的博客 - Hexo 博客搭建简易教程

> Hexo 博客搭建简易教程，作为自己的探索笔记，也将帮助你创建自己的技术博客。

## Hexo 简介

[Hexo(中文官方网站)](https://hexo.io/zh-cn/)  是一个快速, 简洁且高效的博客框架，让上百个页面在几秒内瞬间完成渲染；

Hexo 采用  [Markdown 语言](https://www.runoob.com/markdown/md-tutorial.html)  编写文档，支持 Github Flavored Markdown 的所有功能，甚至可以整合 Octopress 的大多数插件，并自己也拥有强大的插件系统。

了解到 hexo 创建博客也容易上手，并且集成了 hexo 部署到 github 上，非常的方便。其中可能会遇到一些问题，可通过查询资料和百度百科解决，这里就先搭建自己的技术博客吧。

## 开发环境

#### 安装 Node 环境

[node.js 官网直通车](http://nodejs.cn/)  下载对应版本安装即可。

#### 安装 git 控制版本工具

- windows：下载并安装  [Git](https://gitforwindows.org/)；
- Mac: 下载  [Git 安装程序](https://sourceforge.net/projects/git-osx-installer/)  安装；
- Linux (Ubuntu, Debian)：`sudo apt-get install git-core`
- 详细安装教程：[Git 安装配置绿色通道](https://www.runoob.com/git/git-install-setup.html)

#### 安装 Hexo 环境

在 node 环境下运行：`npm install -g hexo-cli`<br />

## 初始化项目

```bash
$ hexo init name    #name为你的项目名称
$ cd name
$ npm install

# 启动项目
$ hexo s

# res 根据执行结果 进入对应得本地页面 http://localhost:4000/
[info] Hexo is running at http://localhost:4000/. Press Ctrl+C to stop
```

## 博客配置

参考最靠谱的  [Hexo 官方配置](https://hexo.io/docs/configuration.html)<br />配置你的网站信息、网站配置、目录配置、文章标题、分类等<br />

## 新建文章

简单的配置自己的博客之后，咱们就开始编写自己的第一篇博文吧。<br />进入项目根目录执行：`$ hexo new "我的第一篇文章"`；<br />可以看到 source/*post 目录下 我们刚刚创建的文件 "我的第一篇文章.md"，用记事本或者编辑器打开之后，采用  [Markdown 语言](https://www.runoob.com/markdown/md-tutorial.html) 编写文档。<br />编写后保存，执行 hexo 启动指令 `$ hexo s`  启动本地服务器；<br />打开  _http://localhost:4000*  刷新就可以看到自己的第一篇文章。<br />

## 安利

附上我自己创建的 Hexo 博客：[晨 的技术博客](https://jsdawn.github.io/blog/)

博客主题琳琅满目：https://hexo.io/themes

> **转载声明**：请注明作者，注明原文链接，有疑问致邮 kingwyh1993@163.com
