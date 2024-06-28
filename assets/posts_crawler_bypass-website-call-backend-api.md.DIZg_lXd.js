import{_ as s,c as a,o as i,aj as t,ak as n}from"./chunks/framework.B4uOnG9Z.js";const g=JSON.parse('{"title":"一种基于浏览器，绕过各种限制的调用网站后台 api 的方法","description":"","frontmatter":{"title":"一种基于浏览器，绕过各种限制的调用网站后台 api 的方法","date":"2023-04-22 22:08:27","categories":["crawler"],"tags":["crawler"]},"headers":[],"relativePath":"posts/crawler/bypass-website-call-backend-api.md","filePath":"posts/crawler/bypass-website-call-backend-api.md","lastUpdated":1719555429000}'),e={name:"posts/crawler/bypass-website-call-backend-api.md"},p=t('<h1 id="一种基于浏览器-绕过各种限制的调用网站后台-api-的方法" tabindex="-1">一种基于浏览器，绕过各种限制的调用网站后台 api 的方法 <a class="header-anchor" href="#一种基于浏览器-绕过各种限制的调用网站后台-api-的方法" aria-label="Permalink to &quot;一种基于浏览器，绕过各种限制的调用网站后台 api 的方法&quot;">​</a></h1><h2 id="通过-chrome-devtools-protocol-在控制台执行-js" tabindex="-1">通过 Chrome DevTools Protocol 在控制台执行 js <a class="header-anchor" href="#通过-chrome-devtools-protocol-在控制台执行-js" aria-label="Permalink to &quot;通过 Chrome DevTools Protocol 在控制台执行 js&quot;">​</a></h2><p>利用其实现 openai 的网页 api 反向代理</p><p><a href="https://github.com/dreamhunter2333/chatgpt_reverse_proxy" target="_blank" rel="noreferrer">chatgpt_reverse_proxy</a></p><p><img src="'+n+`" alt="overview"></p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> page.evaluate(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    async () =&gt; {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        response = await fetch(&quot;https://chat.openai.com</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;, {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;headers&quot;: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;accept&quot;: &quot;*/*&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;authorization&quot;: &quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;content-type&quot;: &quot;application/json&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            },</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;referrer&quot;: &quot;https://chat.openai.com/&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;referrerPolicy&quot;: &quot;same-origin&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;body&quot;: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;method&quot;: &quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;mode&quot;: &quot;cors&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;credentials&quot;: &quot;include&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        });</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        return {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            status: response.status,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            statusText: response.statusText,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            headers: response.headers,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            content: await response.text()</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;&#39;&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> %</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (target_path, access_token, body, request.method.upper())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div>`,6),l=[p];function h(o,r,k,c,F,d){return i(),a("div",null,l)}const y=s(e,[["render",h]]);export{g as __pageData,y as default};