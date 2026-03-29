# 网络日记

青山依旧的网络日记 

记录web前端那些事。

## Vercel 部署指南

由于本项目的根目录包含了普通的 Vue 应用，而实际发布的文档文件位于 `docs` 目录，Vercel 默认会尝试构建整个项目而导致失败。

如果你要在 Vercel 上部署此项目，请在项目导入后的 **Build and Output Settings**（或后续在 **Settings -> Build & Development Settings**）中打开对应的 **Override** 开关并填写如下配置：

- **Build Command**: `pnpm run vercel:build`
- **Output Directory**: `docs/.vitepress/libs`
- **Install Command**: `pnpm install` (通常 Vercel 会根据 `pnpm-lock.yaml` 自动识别并安装，如果不识别可手动开启 Override 并填入)