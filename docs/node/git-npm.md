---
title: Git & Npm 常用指令
---

# Git & Npm 常用指令

## Shell 运算符

```sh
&  表示任务在后台执行。

&& 表示前一条命令执行成功时，才执行后一条命令

|  表示管道，上一条命令的输出，作为下一条命令参数

|| 表示上一条命令执行失败后，才执行下一条命令

;  表示不管前面的命令如何，后面的都会执行

sudo chmod +x filePath 给文件添加执行权限
```

## Git 常用命令行

### 初始化 git 项目到远程仓库

```sh
mkdir drawingboard
cd drawingboard
git init
touch README.md
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/jsdawn/xxx.git
git push -u origin master

#查看远程地址
git remote -v
```

### git 新建分支

```sh
# 新建分支
git branch dev

# 检出分支
git checkout dev

# 新建并检出分支
git checkout -b dev

# 推送新分支到远程
git push origin dev

# 本地dev关联远程分支
git branch --set-upstream-to origin/dev

```

### git 删除远程仓库文件

```sh
# 适用于未跟踪文件的远程删除
git rm -r --cached path/subpath
```

### git rebase 工作流

```sh
# 切换到主分支,拉取最新代码
git checkout master
git pull

# 切换到本地分支
git checkout local

# 合并本地多个提交 HEAD~2 -前两个
git rebase -i HEAD~2

# or 合并指定 commit 36224db（不包含）~ HEAD
git rebase -i 36224db

# 将master 内容同步到当前分支 （当前local分支）
git rebase master ---> 解决冲突 ---> git rebase --continue

# 切换回主分支进行合并
git checkout master
git merge local
git push

```

### git 生成/添加 SSH 公钥

1.生成一个 gitee 用的 SSH-Key

```sh
ssh-keygen -t rsa -C 'xxx' -f ~/.ssh/gitee_id_rsa
```

2.生成一个 github 用的 SSH-Key

```sh
ssh-keygen -t rsa -C 'xxx' -f ~/.ssh/github_id_rsa
```

3.在 ~/.ssh 目录下新建一个 config 文件，添加如下内容（其中 Host 和 HostName 填写 git 服务器的域名，IdentityFile 指定私钥的路径）

```sh
# gitee
Host gitee.com
HostName gitee.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/gitee_id_rsa
# github
Host github.com
HostName github.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/github_id_rsa
# my service 私有服务器
Host 127.xx.x.x
# Port xxxx
# HostName xxxx.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/my_id_rsa
```

4.用 ssh 命令分别测试

```sh
ssh -T git@gitee.com
ssh -T git@github.com
ssh -T root@127.xx.x.x
```

### git 子模块

```sh
# 初始化子模块本地配置
git submodule init

# 抓取并检出
git submodule update

# clone 的同时初始化和优化每个子模块
git clone --recurse-submodules xxx

# 拉取更新的同时拉取子模块更新
git pull --recurse-submodules


# 将新的 URL 复制到本地配置中
git submodule sync --recursive

# 从新 URL 更新子模块
git submodule update --init --recursive
```

### github 链接失败，修改 DNS

- https://ipaddress.com/ 查询 ip 地址
- 添加本地 hosts (指令：sudo vim /etc/hosts)

```sh
# ip..    domain
xxx       github.com
xxx       raw.githubusercontent.com
```

### git missing xcrun

```sh
$ git -v
xcrun: error: invalid active developer path (/Applications/Xcode.app/Contents/Developer), missing xcrun at: /Applications/Xcode.app/Contents/Developer/usr/bin/xcrun
```

mac 下未安装 xcode，git 也使用不了。通过切换路径修复

```sh
# 重 xcodeslect 路径
$ sudo xcode-select -r
# 切换路径
$ sudo xcode-select --switch /Library/Developer/CommandLineTools
# 查看路径
$ sudo xcode-select -p
```

## npm 常用命令行

### nrm 镜像源

```sh
# npm 镜像源管理器
npm i -g nrm

# npm 查看源
nrm ls

# npm 使用指定源
nrm use npm
```

### nvm node 版本管理工具

```sh
# 安装最新稳定版
nvm install stable

# 安装指定版本
nvm install <version>

# 卸载指定版本
nvm uninstall <version>

# 切换使用指定版本
nvm use <version>

# 列出已安装版本
nvm ls

# 设置node默认版本
nvm alias default <version>
```

安装了 nvm，找不到 node 和 npm？

```sh
# 在~/.bashrc 或 ~/.zshrc添加
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```

### yarn@1.x 更快的依赖管理工具

```sh
# 添加依赖包
yarn add [package]
yarn add [package]@[version]
yarn add [package]@[tag]

# 将依赖项添加到不同依赖项类别中
yarn add [package] --dev
yarn add [package] --peer
yarn add [package] --optional

# 升级依赖包
yarn upgrade [package]
yarn upgrade [package]@[version]
yarn upgrade [package]@[tag]

# 重新安装所有包
yarn install --force

# 移除依赖包
yarn remove [package]
```

### ssh 远程连接服务器

```sh
# 密码认证
ssh root@xxx.xxx.xx.xx
```

> **转载声明**：
> 请注明作者，注明原文链接，有疑问致邮 kingwyh1993@163.com
