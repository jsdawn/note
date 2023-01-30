import{_ as s,o as n,c as a,d as l}from"./app.14ddee23.js";const C=JSON.parse('{"title":"JS \u56FE\u7247\u61D2\u52A0\u8F7D IntersectionObserver","description":"","frontmatter":{"title":"JS \u56FE\u7247\u61D2\u52A0\u8F7D IntersectionObserver"},"headers":[{"level":2,"title":"IntersectionObserver","slug":"intersectionobserver"},{"level":2,"title":"\u62D3\u5C55\u5230 vue3 hooks \u6307\u4EE4","slug":"\u62D3\u5C55\u5230-vue3-hooks-\u6307\u4EE4"},{"level":3,"title":"hooks/useLazyLoad.ts","slug":"hooks-uselazyload-ts"},{"level":3,"title":"vue \u6587\u4EF6\u4E2D\u4F7F\u7528\u6307\u4EE4","slug":"vue-\u6587\u4EF6\u4E2D\u4F7F\u7528\u6307\u4EE4"},{"level":2,"title":"\u7ED3\u8BED","slug":"\u7ED3\u8BED"}],"relativePath":"feelings/js-lazy-load.md","lastUpdated":1659602237000}'),o={name:"feelings/js-lazy-load.md"},p=l(`<h1 id="js-\u56FE\u7247\u61D2\u52A0\u8F7D-intersectionobserver" tabindex="-1">JS \u56FE\u7247\u61D2\u52A0\u8F7D IntersectionObserver <a class="header-anchor" href="#js-\u56FE\u7247\u61D2\u52A0\u8F7D-intersectionobserver" aria-hidden="true">#</a></h1><blockquote><p>\u957F\u5217\u8868\u9875\u9762\u4E2D\uFF0C\u5F53\u56FE\u7247\u6ED1\u52A8\u5230\u7A97\u53E3\u53EF\u89C1\u65F6\u624D\u52A0\u8F7D</p></blockquote><h2 id="intersectionobserver" tabindex="-1">IntersectionObserver <a class="header-anchor" href="#intersectionobserver" aria-hidden="true">#</a></h2><p><code>IntersectionObserver</code> \u539F\u751F js \u63A5\u53E3\u63D0\u4F9B\u4E00\u79CD\u5F02\u6B65\u89C2\u5BDF\u76EE\u6807\u5143\u7D20\u4E0E\u5176\u7956\u5148\u5143\u7D20\u6216\u9876\u7EA7\u6587\u6863\u89C6\u7A97\u4EA4\u53C9\u72B6\u6001\u7684\u65B9\u6CD5\u3002\u5373\u5143\u7D20\u5728\u89C6\u7A97\u4E2D\u51FA\u73B0\u6216\u79BB\u5F00\u7684\u72B6\u6001\u3002 \u53C2\u8003 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver" target="_blank" rel="noopener noreferrer">MDN IntersectionObserver</a></p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// html \u628A\u56FE\u7247\u94FE\u63A5\u5199\u5230 data-src \u4E2D</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">img</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">img</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">data-src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://jsdawn/note/img1.jpg</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// var observer = new IntersectionObserver(callback[, options]);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u521B\u5EFA\u4E00\u4E2A\u5143\u7D20\u89C2\u5BDF\u5668</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> observer </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">IntersectionObserver</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">entries</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">entries</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forEach</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">entry</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// \u5F53\u76D1\u542C\u5230\u67D0\u5143\u7D20\u51FA\u73B0\u6216\u8005\u79BB\u5F00\u53EF\u89C1\u89C6\u7A97\u65F6\u56DE\u8C03</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// entry.isIntersecting = true \u51FA\u73B0\u5728\u89C6\u7A97</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// \u5C06 data-src \u7684\u56FE\u7247\u94FE\u63A5\u590D\u5236\u5230 \u56FE\u7247 src</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">entry</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">isIntersecting</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">el</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">src</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">el</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">dataset</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">src</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">observer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">unobserve</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">el</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// \u663E\u793A\u56FE\u7247\u540E\u53D6\u6D88\u89C2\u5BDF\u8BE5\u5143\u7D20</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u76D1\u542C\u5143\u7D20\uFF0Cel \u662F html dom \u5143\u7D20\uFF0C\u53EF\u76D1\u542C\u591A\u4E2A</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> imgList </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">querySelectorAll</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.img</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">imgList</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forEach</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">el</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">observer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">observe</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">el</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u62D3\u5C55\u5230-vue3-hooks-\u6307\u4EE4" tabindex="-1">\u62D3\u5C55\u5230 vue3 hooks \u6307\u4EE4 <a class="header-anchor" href="#\u62D3\u5C55\u5230-vue3-hooks-\u6307\u4EE4" aria-hidden="true">#</a></h2><h3 id="hooks-uselazyload-ts" tabindex="-1">hooks/useLazyLoad.ts <a class="header-anchor" href="#hooks-uselazyload-ts" aria-hidden="true">#</a></h3><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> useLazyLoad </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// v-lazy \u6307\u4EE4</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">vLazy</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// \u5143\u7D20\u52A0\u8F7D\u5B8C\u6210\u65F6 mounted</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">mounted</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">el</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">HTMLElement</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// \u521B\u5EFA\u5143\u7D20\u89C2\u5BDF\u5668</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">observer</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">IntersectionObserver</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">entries</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">entries</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forEach</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">entry</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#676E95;font-style:italic;">// \u5224\u65AD\u662F\u5426\u662F\u5F53\u524D\u5143\u7D20\uFF0C\u5E76\u4E14\u51FA\u73B0\u5728\u7A97\u53E3</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">entry</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">target</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">==</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">el</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">entry</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">isIntersecting</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">src</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">el</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">dataset</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">src</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">el</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">style</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">backgroundImage</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">url(</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">src</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">)</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">observer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">unobserve</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">el</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// \u89C2\u5BDF\u5143\u7D20</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">observer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">observe</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">el</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">vLazy</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><h3 id="vue-\u6587\u4EF6\u4E2D\u4F7F\u7528\u6307\u4EE4" tabindex="-1">vue \u6587\u4EF6\u4E2D\u4F7F\u7528\u6307\u4EE4 <a class="header-anchor" href="#vue-\u6587\u4EF6\u4E2D\u4F7F\u7528\u6307\u4EE4" aria-hidden="true">#</a></h3><div class="language-vue"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">img</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">data-src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://jsdawn/note/img1.jgp</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-lazy</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">img</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">data-src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://jsdawn/note/img2.jgp</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-lazy</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">img</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">data-src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://jsdawn/note/img3.jgp</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-lazy</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">img</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">data-src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://jsdawn/note/img4.jgp</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-lazy</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">img</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">data-src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://jsdawn/note/img5.jgp</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-lazy</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#A6ACCD;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useLazyLoad</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./hooks/useLazyLoad</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u4F7F\u7528 useLazyLoad \u6CE8\u518C\u4E3A v-lazy \u6307\u4EE4</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> vLazy </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useLazyLoad</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u7ED3\u8BED" tabindex="-1">\u7ED3\u8BED <a class="header-anchor" href="#\u7ED3\u8BED" aria-hidden="true">#</a></h2><p>\u535A\u89C2\u800C\u7EA6\u53D6\uFF0C\u539A\u79EF\u800C\u8584\u53D1\u3002</p><blockquote><p><strong>\u8F6C\u8F7D\u58F0\u660E</strong>\uFF1A \u8BF7\u6CE8\u660E\u4F5C\u8005\uFF0C\u6CE8\u660E\u539F\u6587\u94FE\u63A5\uFF0C\u6709\u7591\u95EE\u81F4\u90AE <a href="mailto:kingwyh1993@163.com">kingwyh1993@163.com</a></p></blockquote>`,13),e=[p];function t(c,r,y,F,D,i){return n(),a("div",null,e)}var d=s(o,[["render",t]]);export{C as __pageData,d as default};