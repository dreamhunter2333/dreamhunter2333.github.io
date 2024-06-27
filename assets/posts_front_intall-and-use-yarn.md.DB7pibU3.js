import{_ as a,c as s,o as i,aj as t}from"./chunks/framework.BF2cowCO.js";const y=JSON.parse('{"title":"intall and use yarn","description":"","frontmatter":{"title":"intall and use yarn","date":"2020-06-21 16:22:25","categories":"front","tags":["yarn"]},"headers":[],"relativePath":"posts/front/intall-and-use-yarn.md","filePath":"posts/front/intall-and-use-yarn.md","lastUpdated":1719480458000}'),n={name:"posts/front/intall-and-use-yarn.md"},e=t(`<h1 id="intall-and-use-yarn" tabindex="-1">intall and use yarn <a class="header-anchor" href="#intall-and-use-yarn" aria-label="Permalink to &quot;intall and use yarn&quot;">​</a></h1><h2 id="安装-使用-yarn" tabindex="-1">安装 使用 yarn <a class="header-anchor" href="#安装-使用-yarn" aria-label="Permalink to &quot;安装 使用 yarn&quot;">​</a></h2><h3 id="macos" tabindex="-1">macos <a class="header-anchor" href="#macos" aria-label="Permalink to &quot;macos&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yarn</span></span></code></pre></div><h3 id="linux" tabindex="-1">linux <a class="header-anchor" href="#linux" aria-label="Permalink to &quot;linux&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gnupg</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -sS</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://dl.yarnpkg.com/debian/pubkey.gpg</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> apt-key</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> -</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;deb https://dl.yarnpkg.com/debian/ stable main&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> tee</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/apt/sources.list.d/yarn.list</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> upgrade</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yarn</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span></span></code></pre></div>`,6),l=[e];function h(p,k,r,d,o,F){return i(),s("div",null,l)}const g=a(n,[["render",h]]);export{y as __pageData,g as default};
