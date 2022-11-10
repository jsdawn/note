import{_ as s,o as n,c as a,d as l}from"./app.b469cc23.js";const d=JSON.parse('{"title":"Git & Npm \u5E38\u7528\u6307\u4EE4","description":"","frontmatter":{"title":"Git & Npm \u5E38\u7528\u6307\u4EE4"},"headers":[{"level":2,"title":"Shell \u8FD0\u7B97\u7B26","slug":"shell-\u8FD0\u7B97\u7B26"},{"level":2,"title":"Git \u5E38\u7528\u547D\u4EE4\u884C","slug":"git-\u5E38\u7528\u547D\u4EE4\u884C"},{"level":3,"title":"\u521D\u59CB\u5316 git \u9879\u76EE\u5230\u8FDC\u7A0B\u4ED3\u5E93","slug":"\u521D\u59CB\u5316-git-\u9879\u76EE\u5230\u8FDC\u7A0B\u4ED3\u5E93"},{"level":3,"title":"git \u65B0\u5EFA\u5206\u652F","slug":"git-\u65B0\u5EFA\u5206\u652F"},{"level":3,"title":"git \u5220\u9664\u8FDC\u7A0B\u4ED3\u5E93\u6587\u4EF6","slug":"git-\u5220\u9664\u8FDC\u7A0B\u4ED3\u5E93\u6587\u4EF6"},{"level":3,"title":"git rebase \u5DE5\u4F5C\u6D41","slug":"git-rebase-\u5DE5\u4F5C\u6D41"},{"level":3,"title":"git \u751F\u6210/\u6DFB\u52A0 SSH \u516C\u94A5","slug":"git-\u751F\u6210-\u6DFB\u52A0-ssh-\u516C\u94A5"},{"level":3,"title":"git \u5B50\u6A21\u5757","slug":"git-\u5B50\u6A21\u5757"},{"level":3,"title":"github \u94FE\u63A5\u5931\u8D25\uFF0C\u4FEE\u6539 DNS","slug":"github-\u94FE\u63A5\u5931\u8D25\uFF0C\u4FEE\u6539-dns"},{"level":3,"title":"git missing xcrun","slug":"git-missing-xcrun"},{"level":2,"title":"npm \u5E38\u7528\u547D\u4EE4\u884C","slug":"npm-\u5E38\u7528\u547D\u4EE4\u884C"},{"level":3,"title":"nrm \u955C\u50CF\u6E90","slug":"nrm-\u955C\u50CF\u6E90"},{"level":3,"title":"nvm node \u7248\u672C\u7BA1\u7406\u5DE5\u5177","slug":"nvm-node-\u7248\u672C\u7BA1\u7406\u5DE5\u5177"},{"level":3,"title":"yarn@1.x \u66F4\u5FEB\u7684\u4F9D\u8D56\u7BA1\u7406\u5DE5\u5177","slug":"yarn-1-x-\u66F4\u5FEB\u7684\u4F9D\u8D56\u7BA1\u7406\u5DE5\u5177"},{"level":3,"title":"ssh \u8FDC\u7A0B\u8FDE\u63A5\u670D\u52A1\u5668","slug":"ssh-\u8FDC\u7A0B\u8FDE\u63A5\u670D\u52A1\u5668"}],"relativePath":"node/git-npm.md","lastUpdated":1661337340000}'),p={name:"node/git-npm.md"},e=l(`<h1 id="git-npm-\u5E38\u7528\u6307\u4EE4" tabindex="-1">Git &amp; Npm \u5E38\u7528\u6307\u4EE4 <a class="header-anchor" href="#git-npm-\u5E38\u7528\u6307\u4EE4" aria-hidden="true">#</a></h1><h2 id="shell-\u8FD0\u7B97\u7B26" tabindex="-1">Shell \u8FD0\u7B97\u7B26 <a class="header-anchor" href="#shell-\u8FD0\u7B97\u7B26" aria-hidden="true">#</a></h2><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">  \u8868\u793A\u4EFB\u52A1\u5728\u540E\u53F0\u6267\u884C\u3002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> \u8868\u793A\u524D\u4E00\u6761\u547D\u4EE4\u6267\u884C\u6210\u529F\u65F6\uFF0C\u624D\u6267\u884C\u540E\u4E00\u6761\u547D\u4EE4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">  \u8868\u793A\u7BA1\u9053\uFF0C\u4E0A\u4E00\u6761\u547D\u4EE4\u7684\u8F93\u51FA\uFF0C\u4F5C\u4E3A\u4E0B\u4E00\u6761\u547D\u4EE4\u53C2\u6570</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> \u8868\u793A\u4E0A\u4E00\u6761\u547D\u4EE4\u6267\u884C\u5931\u8D25\u540E\uFF0C\u624D\u6267\u884C\u4E0B\u4E00\u6761\u547D\u4EE4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  \u8868\u793A\u4E0D\u7BA1\u524D\u9762\u7684\u547D\u4EE4\u5982\u4F55\uFF0C\u540E\u9762\u7684\u90FD\u4F1A\u6267\u884C</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">sudo chmod +x filePath \u7ED9\u6587\u4EF6\u6DFB\u52A0\u6267\u884C\u6743\u9650</span></span>
<span class="line"></span></code></pre></div><h2 id="git-\u5E38\u7528\u547D\u4EE4\u884C" tabindex="-1">Git \u5E38\u7528\u547D\u4EE4\u884C <a class="header-anchor" href="#git-\u5E38\u7528\u547D\u4EE4\u884C" aria-hidden="true">#</a></h2><h3 id="\u521D\u59CB\u5316-git-\u9879\u76EE\u5230\u8FDC\u7A0B\u4ED3\u5E93" tabindex="-1">\u521D\u59CB\u5316 git \u9879\u76EE\u5230\u8FDC\u7A0B\u4ED3\u5E93 <a class="header-anchor" href="#\u521D\u59CB\u5316-git-\u9879\u76EE\u5230\u8FDC\u7A0B\u4ED3\u5E93" aria-hidden="true">#</a></h3><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">mkdir drawingboard</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> drawingboard</span></span>
<span class="line"><span style="color:#A6ACCD;">git init</span></span>
<span class="line"><span style="color:#A6ACCD;">touch README.md</span></span>
<span class="line"><span style="color:#A6ACCD;">git add README.md</span></span>
<span class="line"><span style="color:#A6ACCD;">git commit -m </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">first commit</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">git remote add origin https://gitee.com/jsdawn/xxx.git</span></span>
<span class="line"><span style="color:#A6ACCD;">git push -u origin master</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#\u67E5\u770B\u8FDC\u7A0B\u5730\u5740</span></span>
<span class="line"><span style="color:#A6ACCD;">git remote -v</span></span>
<span class="line"></span></code></pre></div><h3 id="git-\u65B0\u5EFA\u5206\u652F" tabindex="-1">git \u65B0\u5EFA\u5206\u652F <a class="header-anchor" href="#git-\u65B0\u5EFA\u5206\u652F" aria-hidden="true">#</a></h3><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># \u65B0\u5EFA\u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch dev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u68C0\u51FA\u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout dev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u65B0\u5EFA\u5E76\u68C0\u51FA\u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout -b dev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u63A8\u9001\u65B0\u5206\u652F\u5230\u8FDC\u7A0B</span></span>
<span class="line"><span style="color:#A6ACCD;">git push origin dev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u672C\u5730dev\u5173\u8054\u8FDC\u7A0B\u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch --set-upstream-to origin/dev</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h3 id="git-\u5220\u9664\u8FDC\u7A0B\u4ED3\u5E93\u6587\u4EF6" tabindex="-1">git \u5220\u9664\u8FDC\u7A0B\u4ED3\u5E93\u6587\u4EF6 <a class="header-anchor" href="#git-\u5220\u9664\u8FDC\u7A0B\u4ED3\u5E93\u6587\u4EF6" aria-hidden="true">#</a></h3><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># \u9002\u7528\u4E8E\u672A\u8DDF\u8E2A\u6587\u4EF6\u7684\u8FDC\u7A0B\u5220\u9664</span></span>
<span class="line"><span style="color:#A6ACCD;">git rm -r --cached path/subpath</span></span>
<span class="line"></span></code></pre></div><h3 id="git-rebase-\u5DE5\u4F5C\u6D41" tabindex="-1">git rebase \u5DE5\u4F5C\u6D41 <a class="header-anchor" href="#git-rebase-\u5DE5\u4F5C\u6D41" aria-hidden="true">#</a></h3><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># \u5207\u6362\u5230\u4E3B\u5206\u652F,\u62C9\u53D6\u6700\u65B0\u4EE3\u7801</span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout master</span></span>
<span class="line"><span style="color:#A6ACCD;">git pull</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u5207\u6362\u5230\u672C\u5730\u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout </span><span style="color:#C792EA;">local</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u5408\u5E76\u672C\u5730\u591A\u4E2A\u63D0\u4EA4 HEAD~2 -\u524D\u4E24\u4E2A</span></span>
<span class="line"><span style="color:#A6ACCD;">git rebase -i HEAD~2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># or \u5408\u5E76\u6307\u5B9A commit 36224db\uFF08\u4E0D\u5305\u542B\uFF09~ HEAD</span></span>
<span class="line"><span style="color:#A6ACCD;">git rebase -i 36224db</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u5C06master \u5185\u5BB9\u540C\u6B65\u5230\u5F53\u524D\u5206\u652F \uFF08\u5F53\u524Dlocal\u5206\u652F\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">git rebase master ---</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> \u89E3\u51B3\u51B2\u7A81 ---</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> git rebase --continue</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u5207\u6362\u56DE\u4E3B\u5206\u652F\u8FDB\u884C\u5408\u5E76</span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout master</span></span>
<span class="line"><span style="color:#A6ACCD;">git merge </span><span style="color:#C792EA;">local</span></span>
<span class="line"><span style="color:#A6ACCD;">git push</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h3 id="git-\u751F\u6210-\u6DFB\u52A0-ssh-\u516C\u94A5" tabindex="-1">git \u751F\u6210/\u6DFB\u52A0 SSH \u516C\u94A5 <a class="header-anchor" href="#git-\u751F\u6210-\u6DFB\u52A0-ssh-\u516C\u94A5" aria-hidden="true">#</a></h3><p>1.\u751F\u6210\u4E00\u4E2A gitee \u7528\u7684 SSH-Key</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">ssh-keygen -t rsa -C </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xxx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> -f </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">/.ssh/gitee_id_rsa</span></span>
<span class="line"></span></code></pre></div><p>2.\u751F\u6210\u4E00\u4E2A github \u7528\u7684 SSH-Key</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">ssh-keygen -t rsa -C </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xxx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> -f </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">/.ssh/github_id_rsa</span></span>
<span class="line"></span></code></pre></div><p>3.\u5728 ~/.ssh \u76EE\u5F55\u4E0B\u65B0\u5EFA\u4E00\u4E2A config \u6587\u4EF6\uFF0C\u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9\uFF08\u5176\u4E2D Host \u548C HostName \u586B\u5199 git \u670D\u52A1\u5668\u7684\u57DF\u540D\uFF0CIdentityFile \u6307\u5B9A\u79C1\u94A5\u7684\u8DEF\u5F84\uFF09</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># gitee</span></span>
<span class="line"><span style="color:#A6ACCD;">Host gitee.com</span></span>
<span class="line"><span style="color:#A6ACCD;">HostName gitee.com</span></span>
<span class="line"><span style="color:#A6ACCD;">PreferredAuthentications publickey</span></span>
<span class="line"><span style="color:#A6ACCD;">IdentityFile </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">/.ssh/gitee_id_rsa</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># github</span></span>
<span class="line"><span style="color:#A6ACCD;">Host github.com</span></span>
<span class="line"><span style="color:#A6ACCD;">HostName github.com</span></span>
<span class="line"><span style="color:#A6ACCD;">PreferredAuthentications publickey</span></span>
<span class="line"><span style="color:#A6ACCD;">IdentityFile </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">/.ssh/github_id_rsa</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># my service \u79C1\u6709\u670D\u52A1\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">Host 127.xx.x.x</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Port xxxx</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># HostName xxxx.com</span></span>
<span class="line"><span style="color:#A6ACCD;">PreferredAuthentications publickey</span></span>
<span class="line"><span style="color:#A6ACCD;">IdentityFile </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">/.ssh/my_id_rsa</span></span>
<span class="line"></span></code></pre></div><p>4.\u7528 ssh \u547D\u4EE4\u5206\u522B\u6D4B\u8BD5</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">ssh -T git@gitee.com</span></span>
<span class="line"><span style="color:#A6ACCD;">ssh -T git@github.com</span></span>
<span class="line"><span style="color:#A6ACCD;">ssh -T root@127.xx.x.x</span></span>
<span class="line"></span></code></pre></div><h3 id="git-\u5B50\u6A21\u5757" tabindex="-1">git \u5B50\u6A21\u5757 <a class="header-anchor" href="#git-\u5B50\u6A21\u5757" aria-hidden="true">#</a></h3><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># \u521D\u59CB\u5316\u5B50\u6A21\u5757\u672C\u5730\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">git submodule init</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u6293\u53D6\u5E76\u68C0\u51FA</span></span>
<span class="line"><span style="color:#A6ACCD;">git submodule update</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># clone \u7684\u540C\u65F6\u521D\u59CB\u5316\u548C\u4F18\u5316\u6BCF\u4E2A\u5B50\u6A21\u5757</span></span>
<span class="line"><span style="color:#A6ACCD;">git clone --recurse-submodules xxx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u62C9\u53D6\u66F4\u65B0\u7684\u540C\u65F6\u62C9\u53D6\u5B50\u6A21\u5757\u66F4\u65B0</span></span>
<span class="line"><span style="color:#A6ACCD;">git pull --recurse-submodules</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u5C06\u65B0\u7684 URL \u590D\u5236\u5230\u672C\u5730\u914D\u7F6E\u4E2D</span></span>
<span class="line"><span style="color:#A6ACCD;">git submodule sync --recursive</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u4ECE\u65B0 URL \u66F4\u65B0\u5B50\u6A21\u5757</span></span>
<span class="line"><span style="color:#A6ACCD;">git submodule update --init --recursive</span></span>
<span class="line"></span></code></pre></div><h3 id="github-\u94FE\u63A5\u5931\u8D25\uFF0C\u4FEE\u6539-dns" tabindex="-1">github \u94FE\u63A5\u5931\u8D25\uFF0C\u4FEE\u6539 DNS <a class="header-anchor" href="#github-\u94FE\u63A5\u5931\u8D25\uFF0C\u4FEE\u6539-dns" aria-hidden="true">#</a></h3><ul><li><a href="https://ipaddress.com/" target="_blank" rel="noopener noreferrer">https://ipaddress.com/</a> \u67E5\u8BE2 ip \u5730\u5740</li><li>\u6DFB\u52A0\u672C\u5730 hosts</li></ul><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># ip..    domain</span></span>
<span class="line"><span style="color:#A6ACCD;">xxx       github.com</span></span>
<span class="line"><span style="color:#A6ACCD;">xxx       raw.githubusercontent.com</span></span>
<span class="line"></span></code></pre></div><h3 id="git-missing-xcrun" tabindex="-1">git missing xcrun <a class="header-anchor" href="#git-missing-xcrun" aria-hidden="true">#</a></h3><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ git -v</span></span>
<span class="line"><span style="color:#A6ACCD;">xcrun: error: invalid active developer path </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">/Applications/Xcode.app/Contents/Developer</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">, missing xcrun at: /Applications/Xcode.app/Contents/Developer/usr/bin/xcrun</span></span>
<span class="line"></span></code></pre></div><p>mac \u4E0B\u672A\u5B89\u88C5 xcode\uFF0Cgit \u4E5F\u4F7F\u7528\u4E0D\u4E86\u3002\u901A\u8FC7\u5207\u6362\u8DEF\u5F84\u4FEE\u590D</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># \u91CD xcodeslect \u8DEF\u5F84</span></span>
<span class="line"><span style="color:#A6ACCD;">$ sudo xcode-select -r</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u5207\u6362\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#A6ACCD;">$ sudo xcode-select --switch /Library/Developer/CommandLineTools</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u67E5\u770B\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#A6ACCD;">$ sudo xcode-select -p</span></span>
<span class="line"></span></code></pre></div><h2 id="npm-\u5E38\u7528\u547D\u4EE4\u884C" tabindex="-1">npm \u5E38\u7528\u547D\u4EE4\u884C <a class="header-anchor" href="#npm-\u5E38\u7528\u547D\u4EE4\u884C" aria-hidden="true">#</a></h2><h3 id="nrm-\u955C\u50CF\u6E90" tabindex="-1">nrm \u955C\u50CF\u6E90 <a class="header-anchor" href="#nrm-\u955C\u50CF\u6E90" aria-hidden="true">#</a></h3><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># npm \u955C\u50CF\u6E90\u7BA1\u7406\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">npm i -g nrm</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># npm \u67E5\u770B\u6E90</span></span>
<span class="line"><span style="color:#A6ACCD;">nrm ls</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># npm \u4F7F\u7528\u6307\u5B9A\u6E90</span></span>
<span class="line"><span style="color:#A6ACCD;">nrm use npm</span></span>
<span class="line"></span></code></pre></div><h3 id="nvm-node-\u7248\u672C\u7BA1\u7406\u5DE5\u5177" tabindex="-1">nvm node \u7248\u672C\u7BA1\u7406\u5DE5\u5177 <a class="header-anchor" href="#nvm-node-\u7248\u672C\u7BA1\u7406\u5DE5\u5177" aria-hidden="true">#</a></h3><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># \u5B89\u88C5\u6700\u65B0\u7A33\u5B9A\u7248</span></span>
<span class="line"><span style="color:#A6ACCD;">nvm install stable</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u5B89\u88C5\u6307\u5B9A\u7248\u672C</span></span>
<span class="line"><span style="color:#A6ACCD;">nvm install </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">version</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u5378\u8F7D\u6307\u5B9A\u7248\u672C</span></span>
<span class="line"><span style="color:#A6ACCD;">nvm uninstall </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">version</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u5207\u6362\u4F7F\u7528\u6307\u5B9A\u7248\u672C</span></span>
<span class="line"><span style="color:#A6ACCD;">nvm use </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">version</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u5217\u51FA\u5DF2\u5B89\u88C5\u7248\u672C</span></span>
<span class="line"><span style="color:#A6ACCD;">nvm ls</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u8BBE\u7F6Enode\u9ED8\u8BA4\u7248\u672C</span></span>
<span class="line"><span style="color:#A6ACCD;">nvm </span><span style="color:#82AAFF;">alias</span><span style="color:#A6ACCD;"> default </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">version</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>\u5B89\u88C5\u4E86 nvm\uFF0C\u627E\u4E0D\u5230 node \u548C npm\uFF1F</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># \u5728~/.bashrc \u6216 ~/.zshrc\u6DFB\u52A0</span></span>
<span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> NVM_DIR=</span><span style="color:#89DDFF;">&quot;$</span><span style="color:#A6ACCD;">HOME</span><span style="color:#C3E88D;">/.nvm</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-s</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;$</span><span style="color:#A6ACCD;">NVM_DIR</span><span style="color:#C3E88D;">/nvm.sh</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> \\. </span><span style="color:#89DDFF;">&quot;$</span><span style="color:#A6ACCD;">NVM_DIR</span><span style="color:#C3E88D;">/nvm.sh</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><h3 id="yarn-1-x-\u66F4\u5FEB\u7684\u4F9D\u8D56\u7BA1\u7406\u5DE5\u5177" tabindex="-1">yarn@1.x \u66F4\u5FEB\u7684\u4F9D\u8D56\u7BA1\u7406\u5DE5\u5177 <a class="header-anchor" href="#yarn-1-x-\u66F4\u5FEB\u7684\u4F9D\u8D56\u7BA1\u7406\u5DE5\u5177" aria-hidden="true">#</a></h3><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># \u6DFB\u52A0\u4F9D\u8D56\u5305</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn add </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">package</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn add </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">package</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">@</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">version</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn add </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">package</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">@</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">tag</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u5C06\u4F9D\u8D56\u9879\u6DFB\u52A0\u5230\u4E0D\u540C\u4F9D\u8D56\u9879\u7C7B\u522B\u4E2D</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn add </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">package</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> --dev</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn add </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">package</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> --peer</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn add </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">package</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> --optional</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u5347\u7EA7\u4F9D\u8D56\u5305</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn upgrade </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">package</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn upgrade </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">package</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">@</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">version</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn upgrade </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">package</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">@</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">tag</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u91CD\u65B0\u5B89\u88C5\u6240\u6709\u5305</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn install --force</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u79FB\u9664\u4F9D\u8D56\u5305</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn remove </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">package</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div><h3 id="ssh-\u8FDC\u7A0B\u8FDE\u63A5\u670D\u52A1\u5668" tabindex="-1">ssh \u8FDC\u7A0B\u8FDE\u63A5\u670D\u52A1\u5668 <a class="header-anchor" href="#ssh-\u8FDC\u7A0B\u8FDE\u63A5\u670D\u52A1\u5668" aria-hidden="true">#</a></h3><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># \u5BC6\u7801\u8BA4\u8BC1</span></span>
<span class="line"><span style="color:#A6ACCD;">ssh root@xxx.xxx.xx.xx</span></span>
<span class="line"></span></code></pre></div><blockquote><p><strong>\u8F6C\u8F7D\u58F0\u660E</strong>\uFF1A \u8BF7\u6CE8\u660E\u4F5C\u8005\uFF0C\u6CE8\u660E\u539F\u6587\u94FE\u63A5\uFF0C\u6709\u7591\u95EE\u81F4\u90AE <a href="mailto:kingwyh1993@163.com">kingwyh1993@163.com</a></p></blockquote>`,42),o=[e];function c(t,i,r,y,D,A){return n(),a("div",null,o)}var g=s(p,[["render",c]]);export{d as __pageData,g as default};
