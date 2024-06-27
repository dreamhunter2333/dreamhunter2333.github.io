import{_ as s,c as a,o as i,aj as t}from"./chunks/framework.BF2cowCO.js";const _=JSON.parse('{"title":"Python locals()","description":"","frontmatter":{"title":"Python locals()","date":"2019-12-15 00:20:16","categories":"python","tags":["python"]},"headers":[],"relativePath":"posts/python/Python-locals.md","filePath":"posts/python/Python-locals.md","lastUpdated":1719480458000}'),l={name:"posts/python/Python-locals.md"},n=t(`<h1 id="python-locals" tabindex="-1">Python locals() <a class="header-anchor" href="#python-locals" aria-label="Permalink to &quot;Python locals()&quot;">​</a></h1><h2 id="python-locals-1" tabindex="-1">Python locals() <a class="header-anchor" href="#python-locals-1" aria-label="Permalink to &quot;Python locals()&quot;">​</a></h2><h3 id="命名空间" tabindex="-1">命名空间 <a class="header-anchor" href="#命名空间" aria-label="Permalink to &quot;命名空间&quot;">​</a></h3><p>python中有全局变量和局部变量，python在搜索变量时<br> 会从命名空间中搜索，命名空间可以分为下面三类：</p><ul><li>局部命名空间： 函数或类中定义的变量所处的空间</li><li>全局命名空间： 模块所在的空间</li><li>内置命名空间： 内置命名空间，全局可用</li></ul><p>python查找变量的顺序：局部&gt;全局&gt;内置<br> 一旦找到相应的变量，即停止查找。</p><h3 id="locals的定义" tabindex="-1">locals的定义 <a class="header-anchor" href="#locals的定义" aria-label="Permalink to &quot;locals的定义&quot;">​</a></h3><p>locals()函数不需要参数，会以字典类型返回当前位置的全部局部变量</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> locals_test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(demo):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    demo2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;123&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">locals</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> __name__</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;__main__&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    locals_test(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># output</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># {&#39;demo&#39;: 2, &#39;demo2&#39;: &#39;123&#39;}</span></span></code></pre></div>`,9),h=[n];function e(o,p,k,c,r,d){return i(),a("div",null,h)}const E=s(l,[["render",e]]);export{_ as __pageData,E as default};
