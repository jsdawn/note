import{_ as s,o as n,c as a,d as e}from"./app.d68c8bd7.js";const h=JSON.parse('{"title":"Docker compose 快速部署 Node 项目","description":"","frontmatter":{"title":"Docker compose 快速部署 Node 项目"},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"Docker 安装","slug":"docker-安装","link":"#docker-安装","children":[]},{"level":2,"title":"Dockerfile","slug":"dockerfile","link":"#dockerfile","children":[]},{"level":2,"title":"docker-compose","slug":"docker-compose","link":"#docker-compose","children":[]},{"level":2,"title":"本地调试","slug":"本地调试","link":"#本地调试","children":[]},{"level":2,"title":"服务器部署运行","slug":"服务器部署运行","link":"#服务器部署运行","children":[]},{"level":2,"title":"致谢","slug":"致谢","link":"#致谢","children":[]}],"relativePath":"guide/docker-compose.md","lastUpdated":1658894796000}'),o={name:"guide/docker-compose.md"},l=e(`<h1 id="docker-compose-快速部署-node-项目" tabindex="-1">Docker compose 快速部署 Node 项目 <a class="header-anchor" href="#docker-compose-快速部署-node-项目" aria-hidden="true">#</a></h1><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-hidden="true">#</a></h2><p>本文章讲解如何简单快速部署 node API 项目。可作为docker入门学习。</p><p>Node 项目基于 express+sequelize 框架。</p><p>数据库使用 mysql。</p><h2 id="docker-安装" tabindex="-1">Docker 安装 <a class="header-anchor" href="#docker-安装" aria-hidden="true">#</a></h2><p>Docker 官方下载地址：<a href="https://docs.docker.com/get-docker" target="_blank" rel="noreferrer">https://docs.docker.com/get-docker</a></p><p>检查 Docker 安装版本：<code>$ docker --version</code></p><h2 id="dockerfile" tabindex="-1">Dockerfile <a class="header-anchor" href="#dockerfile" aria-hidden="true">#</a></h2><blockquote><p>Dockerfile 是一个用来构建镜像的文本文件，文本内容包含了一条条构建镜像所需的指令和说明。<br> Dockerfile 学习地址：<a href="https://www.runoob.com/docker/docker-dockerfile.html" target="_blank" rel="noreferrer">https://www.runoob.com/docker/docker-dockerfile.html</a></p></blockquote><p>在项目根目录下编写 Dockerfile 文件：</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/11d6cb36780840d48f754dcd339f8f32~tplv-k3u1fbpfcp-watermark.image" alt="7231624506430_.pic.jpg"></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 基于 node:12.1 的定制镜像</span></span>
<span class="line"><span style="color:#FFCB6B;">FROM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">node:</span><span style="color:#F78C6C;">12.1</span><span style="color:#A6ACCD;">    </span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 镜像作者</span></span>
<span class="line"><span style="color:#FFCB6B;">LABEL</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">maintainer=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">kingwyh1993@163.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 制文件到容器里指定路径</span></span>
<span class="line"><span style="color:#FFCB6B;">COPY</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/home/funnyService</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 指定工作目录为，RUN/CMD 在工作目录运行</span></span>
<span class="line"><span style="color:#FFCB6B;">WORKDIR</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/home/funnyService</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 指定环境变量 NODE_ENV 为 production</span></span>
<span class="line"><span style="color:#FFCB6B;">ENV</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">NODE_ENV=production</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 安装 yarn</span></span>
<span class="line"><span style="color:#FFCB6B;">RUN</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 初始化项目</span></span>
<span class="line"><span style="color:#FFCB6B;">RUN</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;">    </span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 声明端口</span></span>
<span class="line"><span style="color:#FFCB6B;">EXPOSE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3000</span><span style="color:#A6ACCD;">    </span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 运行 node 项目 \`$ node src/app.js\`</span></span>
<span class="line"><span style="color:#FFCB6B;">CMD</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">node</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">src/app.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 注：CMD 在docker run 时运行。RUN 是在 docker build。</span></span>
<span class="line"></span></code></pre></div><h2 id="docker-compose" tabindex="-1">docker-compose <a class="header-anchor" href="#docker-compose" aria-hidden="true">#</a></h2><blockquote><p>Compose 是用于定义和运行多容器 Docker 应用程序的工具。通过 Compose，您可以使用 YML 文件来配置应用程序需要的所有服务。然后，使用一个命令，就可以从 YML 文件配置中创建并启动所有服务。<br> docker-compose 学习地址：<a href="https://www.runoob.com/docker/docker-compose.html" target="_blank" rel="noreferrer">https://www.runoob.com/docker/docker-compose.html</a></p></blockquote><p>在根目录下编写 docker-compose.yml 文件：</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4f445466218f48caa2a7050440a7ec4f~tplv-k3u1fbpfcp-watermark.image" alt="7241624516284_.pic.jpg"></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 指定容器名称 funny-app</span></span>
<span class="line"><span style="color:#FFCB6B;">container_name:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">funny-app</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 指定构建镜像上下文路径，依据 ./Dockerfile 构建镜像</span></span>
<span class="line"><span style="color:#FFCB6B;">build:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.</span><span style="color:#A6ACCD;">   </span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 指定容器运行的镜像，名称设置为 funny-node:2.0</span></span>
<span class="line"><span style="color:#FFCB6B;">image:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">funny-node:2.0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 映射端口的标签，格式为 &#39;宿主机端口:容器端口&#39;</span></span>
<span class="line"><span style="color:#FFCB6B;">ports:</span><span style="color:#A6ACCD;">           </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">3000:3000</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><h2 id="本地调试" tabindex="-1">本地调试 <a class="header-anchor" href="#本地调试" aria-hidden="true">#</a></h2><p>项目根目录下执行 <code>$ docker-compose up -d</code></p><p>查看构建的镜像 <code>$ docker images</code> 检查有上述 node、funny-node 镜像则构建成功</p><p>查看运行的容器 <code>$ docker ps</code> 检查有 funny-app 容器则启动成功</p><p>调试接口 <code>http://127.0.0.1:3000/test/demo</code> 成功：</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/553a1b836b8b4df1944a9eb1a9354b08~tplv-k3u1fbpfcp-watermark.image" alt="image.png"></p><h2 id="服务器部署运行" tabindex="-1">服务器部署运行 <a class="header-anchor" href="#服务器部署运行" aria-hidden="true">#</a></h2><p>在服务器 <code>git pull</code> 该项目</p><p>执行 <code>$ docker-compose up -d</code></p><p>使用 <code>$ docker images</code> <code>$ docker ps</code> 检查是否构建和启动成功</p><p>调试接口 <code>http://服务器ip:3000/test/demo</code></p><h2 id="致谢" tabindex="-1">致谢 <a class="header-anchor" href="#致谢" aria-hidden="true">#</a></h2><p>感谢技术大佬 Benny 的帮助，让我更加理解docker的使用。</p><p>Benny技术博客干货满满：<a href="http://www.benny.wiki/db/mysql/sql-optimization-laravel-tips.html" target="_blank" rel="noreferrer">http://www.benny.wiki</a></p><blockquote><p><strong>转载声明</strong>：请注明作者，注明原文链接，有疑问致邮 <a href="mailto:kingwyh1993@163.com" target="_blank" rel="noreferrer">kingwyh1993@163.com</a></p></blockquote>`,33),p=[l];function c(t,r,i,d,y,C){return n(),a("div",null,p)}const k=s(o,[["render",c]]);export{h as __pageData,k as default};
