---
title: Docker compose 快速部署 Node 项目
---

# Docker compose 快速部署 Node 项目

## 前言
本文章讲解如何简单快速部署 node API 项目。可作为docker入门学习。

Node 项目基于 express+sequelize 框架。

数据库使用 mysql。

## Docker 安装
Docker 官方下载地址：[https://docs.docker.com/get-docker](https://docs.docker.com/get-docker)

检查 Docker 安装版本：`$ docker --version`

## Dockerfile
> Dockerfile 是一个用来构建镜像的文本文件，文本内容包含了一条条构建镜像所需的指令和说明。<br/>
> Dockerfile 学习地址：[https://www.runoob.com/docker/docker-dockerfile.html](https://www.runoob.com/docker/docker-dockerfile.html)

在项目根目录下编写 Dockerfile 文件：

![7231624506430_.pic.jpg](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/11d6cb36780840d48f754dcd339f8f32~tplv-k3u1fbpfcp-watermark.image)

```bash
# 基于 node:12.1 的定制镜像
FROM node:12.1    

# 镜像作者
LABEL maintainer="kingwyh1993@163.com"  

# 制文件到容器里指定路径
COPY . /home/funnyService  

# 指定工作目录为，RUN/CMD 在工作目录运行
WORKDIR /home/funnyService  

# 指定环境变量 NODE_ENV 为 production
ENV NODE_ENV=production  

# 安装 yarn
RUN npm install yarn -g  

# 初始化项目
RUN yarn install    

# 声明端口
EXPOSE 3000    

# 运行 node 项目 `$ node src/app.js`
CMD [ "node", "src/app.js" ] 

# 注：CMD 在docker run 时运行。RUN 是在 docker build。
```

## docker-compose
> Compose 是用于定义和运行多容器 Docker 应用程序的工具。通过 Compose，您可以使用 YML 文件来配置应用程序需要的所有服务。然后，使用一个命令，就可以从 YML 文件配置中创建并启动所有服务。<br/>
> docker-compose 学习地址：[https://www.runoob.com/docker/docker-compose.html](https://www.runoob.com/docker/docker-compose.html)

在根目录下编写 docker-compose.yml 文件：


![7241624516284_.pic.jpg](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4f445466218f48caa2a7050440a7ec4f~tplv-k3u1fbpfcp-watermark.image)

```bash
# 指定容器名称 funny-app
container_name: 'funny-app'  

# 指定构建镜像上下文路径，依据 ./Dockerfile 构建镜像
build: .   

# 指定容器运行的镜像，名称设置为 funny-node:2.0
image: 'funny-node:2.0'  

# 映射端口的标签，格式为 '宿主机端口:容器端口'
ports:           
  - '3000:3000'
```
     
## 本地调试

项目根目录下执行 `$ docker-compose up -d`

查看构建的镜像  `$ docker images` 检查有上述 node、funny-node 镜像则构建成功

查看运行的容器  `$ docker ps` 检查有 funny-app 容器则启动成功

调试接口 `http://127.0.0.1:3000/test/demo` 成功：

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/553a1b836b8b4df1944a9eb1a9354b08~tplv-k3u1fbpfcp-watermark.image)

## 服务器部署运行

在服务器 `git pull` 该项目

执行 `$ docker-compose up -d`

使用 `$ docker images` `$ docker ps` 检查是否构建和启动成功

调试接口 `http://服务器ip:3000/test/demo`

## 致谢

感谢技术大佬 Benny 的帮助，让我更加理解docker的使用。

Benny技术博客干货满满：[http://www.benny.wiki](http://www.benny.wiki/db/mysql/sql-optimization-laravel-tips.html)

> **转载声明**：请注明作者，注明原文链接，有疑问致邮 kingwyh1993@163.com
