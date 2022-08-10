import{_ as s,o as n,c as a,d as l}from"./app.4ad601c1.js";const F=JSON.parse('{"title":"Flutter \u8BED\u6CD5\u76F8\u5173","description":"","frontmatter":{"title":"Flutter \u8BED\u6CD5\u76F8\u5173"},"headers":[{"level":3,"title":"const \u5173\u952E\u5B57\u4F7F\u7528\u7EC6\u8282","slug":"const-\u5173\u952E\u5B57\u4F7F\u7528\u7EC6\u8282"},{"level":3,"title":"Map \u7684\u7D22\u5F15\u64CD\u4F5C\u7B26\u662F\u53EF\u7A7A\u7684","slug":"map-\u7684\u7D22\u5F15\u64CD\u4F5C\u7B26\u662F\u53EF\u7A7A\u7684"},{"level":3,"title":"List \u4F7F\u7528","slug":"list-\u4F7F\u7528"},{"level":3,"title":"Map \u4F7F\u7528","slug":"map-\u4F7F\u7528"},{"level":3,"title":"Function","slug":"function"},{"level":3,"title":"Class \u7C7B","slug":"class-\u7C7B"}],"relativePath":"guide/flutter-const.md","lastUpdated":1658894796000}'),p={name:"guide/flutter-const.md"},o=l(`<h1 id="flutter-\u8BED\u6CD5\u76F8\u5173" tabindex="-1">Flutter \u8BED\u6CD5\u76F8\u5173 <a class="header-anchor" href="#flutter-\u8BED\u6CD5\u76F8\u5173" aria-hidden="true">#</a></h1><blockquote><p>\u6587\u7AE0\u7B80\u5355\u63CF\u8FF0 flutter \u8BED\u6CD5\u4F7F\u7528 \u548C \u76F8\u5173\u77E5\u8BC6\u70B9\uFF0C\u4FBF\u4E8E\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u67E5\u9605</p></blockquote><h3 id="const-\u5173\u952E\u5B57\u4F7F\u7528\u7EC6\u8282" tabindex="-1">const \u5173\u952E\u5B57\u4F7F\u7528\u7EC6\u8282 <a class="header-anchor" href="#const-\u5173\u952E\u5B57\u4F7F\u7528\u7EC6\u8282" aria-hidden="true">#</a></h3><ol><li>\u4F7F\u7528 const \u6784\u9020\u65B9\u6CD5\u7684\u7C7B\u4E2D\uFF0C\u5176\u6240\u6709\u6210\u5458\u5C5E\u6027\u5FC5\u987B\u4EE5 final \u4FEE\u9970</li><li>\u4F7F\u7528 const \u4FEE\u9970\u7684\u5BF9\u8C61\uFF0C\u5176\u5404\u5C5E\u6027\u4E5F\u662F\u65E0\u6CD5\u4FEE\u6539\u7684</li><li>const \u6784\u9020\u65B9\u6CD5\u4E2D\u4F20\u5165\u7684\u503C\u5FC5\u987B\u662F const \u5BF9\u8C61</li></ol><h3 id="map-\u7684\u7D22\u5F15\u64CD\u4F5C\u7B26\u662F\u53EF\u7A7A\u7684" tabindex="-1">Map \u7684\u7D22\u5F15\u64CD\u4F5C\u7B26\u662F\u53EF\u7A7A\u7684 <a class="header-anchor" href="#map-\u7684\u7D22\u5F15\u64CD\u4F5C\u7B26\u662F\u53EF\u7A7A\u7684" aria-hidden="true">#</a></h3><p>\u6765\u81EA\u5B98\u65B9\u7684\u7A7A\u5B89\u5168\uFF1AMap \u7C7B\u7684 [] \u64CD\u4F5C\u7B26\u4F1A\u5728\u952E\u503C\u4E0D\u5B58\u5728\u65F6\u8FD4\u56DE null\u3002\u8FD9\u5C31\u6697\u793A\u4E86\u64CD\u4F5C\u7B26\u7684\u8FD4\u56DE\u7C7B\u578B\u5FC5\u987B\u662F\u53EF\u7A7A\u7684 V? \u800C\u4E0D\u662F V\u3002</p><p>\u8FD0\u884C\u65F6\u7684\u884C\u4E3A\u8FD8\u662F\u4E00\u6837\u7684\uFF0C\u8FD4\u56DE\u7C7B\u578B\u5FC5\u987B\u662F\u53EF\u7A7A\u7684\u3002\u8FD9\u610F\u5473\u7740\u4F60\u65E0\u6CD5\u5728 Map \u67E5\u8BE2\u65F6\u7ACB\u9A6C\u4F7F\u7528\u67E5\u8BE2\u7684\u7ED3\u679C\uFF1A</p><div class="language-dart"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// Using null safety, incorrectly:</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> map </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> {</span><span style="color:#C3E88D;">&#39;key&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&#39;value&#39;</span><span style="color:#A6ACCD;">}</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(map[</span><span style="color:#C3E88D;">&#39;key&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// Error.</span></span>
<span class="line"></span></code></pre></div><p>\u8FD9\u6BB5\u4EE3\u7801\u4F1A\u5728 .length \u7684\u8C03\u7528\u5904\u629B\u51FA\u4E00\u4E2A\u7F16\u8BD1\u5F02\u5E38\uFF0C\u56E0\u4E3A\u4F60\u5C1D\u8BD5\u8C03\u7528\u53EF\u7A7A\u7684\u5B57\u7B26\u4E32\u3002\u5728\u4F60\u5DF2\u7ECF \u786E\u5B9A \u952E\u503C\u5B58\u5728\u7684\u60C5\u51B5\u4E0B\uFF0C\u4F60\u53EF\u4EE5\u7ED9\u7C7B\u578B\u68C0\u67E5\u5668\u4E0A\u4E00\u4E2A !\uFF1A</p><div class="language-dart"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// Using null safety:</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> map </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> {</span><span style="color:#C3E88D;">&#39;key&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&#39;value&#39;</span><span style="color:#A6ACCD;">}</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(map[</span><span style="color:#C3E88D;">&#39;key&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">!.</span><span style="color:#A6ACCD;">length)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// OK.</span></span>
<span class="line"></span></code></pre></div><h3 id="list-\u4F7F\u7528" tabindex="-1">List \u4F7F\u7528 <a class="header-anchor" href="#list-\u4F7F\u7528" aria-hidden="true">#</a></h3><div class="language-dart"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// -----------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// var list = [1, 2, 3, 4, 5];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u53D6\u503C index</span></span>
<span class="line"><span style="color:#A6ACCD;">list[</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">] </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">11</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> item </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> list[list</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u65B0\u589E js\uFF1Apush</span></span>
<span class="line"><span style="color:#A6ACCD;">list</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&quot;item&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u5B9A\u70B9\u63D2\u5165 js\uFF1A</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Array.prototype.insert = (index,item)=&gt;{</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     this.splice(index, 0, item);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"><span style="color:#A6ACCD;">list</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">insert</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1.5</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// [1, 1.5, 2, 3, 4, 5];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u5220\u9664\u6307\u5B9A\u5143\u7D20</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// js: list = list.filter(v =&gt; v!==item);</span></span>
<span class="line"><span style="color:#A6ACCD;">list</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">remove</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1.5</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// [1, 2, 3, 4, 5];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u79FB\u9664\u6700\u540E\u4E00\u4E2A\u5143\u7D20</span></span>
<span class="line"><span style="color:#A6ACCD;">list</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">removeLast</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// -----------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// var list = [&#39;one&#39;, &#39;two&#39;, &#39;three&#39;, &#39;four&#39;, &#39;two&#39;, &#39;five&#39;];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u7D22\u5F15 \u4ECE\u5934\u5F00\u59CB\u641C\u7D22</span></span>
<span class="line"><span style="color:#A6ACCD;">list</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">indexOf</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&#39;two&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u7D22\u5F15 \u4ECE\u5C3E\u5F00\u59CB\u641C\u7D22</span></span>
<span class="line"><span style="color:#A6ACCD;">list</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">lastIndexOf</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&#39;two&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u622A\u53D6\uFF0C\u4E0D\u6539\u53D8\u5143\u7D20\u7EC4</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> newlist </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> list</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sublist</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// [three, four, two, five]</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> newlist </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> list</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sublist</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// [three, four]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u62FC\u63A5</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> newlist </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> list</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">join</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&#39;\u3001&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// one\u3001two\u3001three\u3001four\u3001two\u3001five</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// -----------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u904D\u5386\u6570\u7EC4 for in\u3001forEach\u3001any\u3001every\u3001map</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// var list = [1, 2, 3, 4, 5];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> item </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> list){</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(item)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 1 2 3 4 5</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">list</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forEach</span><span style="color:#A6ACCD;">((item) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(item)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 1 2 3 4 5</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">list</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">any</span><span style="color:#A6ACCD;">((item) </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> item </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u4EFB\u610F\u5143\u7D20\u6EE1\u8DB3\u6761\u4EF6\uFF0C\u8FD4\u56DEture</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">list</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">every</span><span style="color:#A6ACCD;">((item) </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> item </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u6240\u6709\u5143\u7D20\u6EE1\u8DB3\u6761\u4EF6\uFF0C\u8FD4\u56DEtrue</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> newlist </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> list</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">map</span><span style="color:#A6ACCD;">((item) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> item </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h3 id="map-\u4F7F\u7528" tabindex="-1">Map \u4F7F\u7528 <a class="header-anchor" href="#map-\u4F7F\u7528" aria-hidden="true">#</a></h3><div class="language-dart"><span class="copy"></span><pre><code><span class="line"></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> dict</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">&quot;a&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&quot;aa&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">&quot;b&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&quot;bb&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">&quot;c&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&quot;cc&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">dict[b]</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// bb</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">dict[b] </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&#39;bbbb&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">dict</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">containsKey</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&#39;b&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u5B58\u5728\u6307\u5B9Akey\u3002\u8FD4\u56DEtrue</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">dict</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">containsValue</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&#39;aa&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u5B58\u5728\u6307\u5B9Avalue\uFF0C\u8FD4\u56DEtrue</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">dict</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">isEmpty</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u662F\u5426\u4E3A\u7A7A</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">dict</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">isNotEmpty</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u662F\u5426\u4E0D\u4E3A\u7A7A</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">dict</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">remove</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&#39;c&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u79FB\u9664key\u4E3Ac\u7684\u952E\u503C\u5BF9</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">dict</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">keys</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forEach</span><span style="color:#A6ACCD;">((k) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(k)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// a b c</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h3 id="function" tabindex="-1">Function <a class="header-anchor" href="#function" aria-hidden="true">#</a></h3><div class="language-dart"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// \u5165\u53C2 {...} \u5F62\u5F0F</span></span>
<span class="line"><span style="color:#82AAFF;">fun</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">String</span><span style="color:#A6ACCD;"> name</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> {</span><span style="color:#FFCB6B;">int</span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> age</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">String</span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> nickname}) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&#39;$</span><span style="color:#A6ACCD;">name</span><span style="color:#C3E88D;">\uFF0C$</span><span style="color:#A6ACCD;">age</span><span style="color:#C3E88D;">\uFF0C$</span><span style="color:#A6ACCD;">nickname</span><span style="color:#C3E88D;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">fun</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&#39;jsdawn&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">nickname</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&#39;jsdawn2&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u5165\u53C2 [...] \u5F62\u5F0F</span></span>
<span class="line"><span style="color:#82AAFF;">fun2</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">String</span><span style="color:#A6ACCD;"> name</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> [</span><span style="color:#FFCB6B;">int</span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> age</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">String</span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> nickname]) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&#39;$</span><span style="color:#A6ACCD;">name</span><span style="color:#C3E88D;">\uFF0C$</span><span style="color:#A6ACCD;">age</span><span style="color:#C3E88D;">\uFF0C$</span><span style="color:#A6ACCD;">nickname</span><span style="color:#C3E88D;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">fun2</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&#39;jsdawn&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&#39;jsdawn2&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u533F\u540D\u51FD\u6570</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> fun </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> (){</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&#39;aaa&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h3 id="class-\u7C7B" tabindex="-1">Class \u7C7B <a class="header-anchor" href="#class-\u7C7B" aria-hidden="true">#</a></h3><div class="language-dart"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Person</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">String</span><span style="color:#A6ACCD;"> name</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">int</span><span style="color:#A6ACCD;"> age</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">Person</span><span style="color:#A6ACCD;">(this</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> this</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">age)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">say</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">String</span><span style="color:#A6ACCD;"> str) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&#39;$</span><span style="color:#A6ACCD;">name</span><span style="color:#C3E88D;"> say $</span><span style="color:#A6ACCD;">str</span><span style="color:#C3E88D;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> jsdawn </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Person</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&#39;jsdawn&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">jsdawn</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">say</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&#39;hello&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><blockquote><p><strong>\u8F6C\u8F7D\u58F0\u660E</strong>\uFF1A \u8BF7\u6CE8\u660E\u4F5C\u8005\uFF0C\u6CE8\u660E\u539F\u6587\u94FE\u63A5\uFF0C\u6709\u7591\u95EE\u81F4\u90AE <a href="mailto:kingwyh1993@163.com">kingwyh1993@163.com</a></p></blockquote>`,19),e=[o];function t(c,r,y,C,A,D){return n(),a("div",null,e)}var d=s(p,[["render",t]]);export{F as __pageData,d as default};
