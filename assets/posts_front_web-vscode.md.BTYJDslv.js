import{_ as s,c as a,o as i,aj as e}from"./chunks/framework.B4uOnG9Z.js";const b=JSON.parse('{"title":"web vscode in docker","description":"","frontmatter":{"title":"web vscode in docker","date":"2019-11-10 22:57:42","categories":["front"],"tags":["linux","docker"]},"headers":[],"relativePath":"posts/front/web-vscode.md","filePath":"posts/front/web-vscode.md","lastUpdated":1719555429000}'),n={name:"posts/front/web-vscode.md"},t=e(`<h1 id="web-vscode-in-docker" tabindex="-1">web vscode in docker <a class="header-anchor" href="#web-vscode-in-docker" aria-label="Permalink to &quot;web vscode in docker&quot;">​</a></h1><h2 id="web-vscode-in-docker-1" tabindex="-1">web vscode in docker <a class="header-anchor" href="#web-vscode-in-docker-1" aria-label="Permalink to &quot;web vscode in docker&quot;">​</a></h2><h3 id="dockerfile" tabindex="-1">dockerfile <a class="header-anchor" href="#dockerfile" aria-label="Permalink to &quot;dockerfile&quot;">​</a></h3><div class="language-docker vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">docker</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RUN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> apt install make gcc g++ pkg-config -y</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RUN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> npm install n -g &amp;&amp; n 11</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RUN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> npm install -g jshint</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RUN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> apt-get install libx11-dev libxkbfile-dev -y &amp;&amp; apt-get install libsecret-1-dev -y</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RUN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - &amp;&amp; \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    echo </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;deb https://dl.yarnpkg.com/debian/ stable main&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> | tee /etc/apt/sources.list.d/yarn.list</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RUN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> apt-get update &amp;&amp; apt-get install yarn -y</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RUN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> apt-get update -y &amp;&amp; apt-get upgrade -y</span></span></code></pre></div><h3 id="build-and-run" tabindex="-1">build and run <a class="header-anchor" href="#build-and-run" aria-label="Permalink to &quot;build and run&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/microsoft/vscode.git</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -b</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> master</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vscode</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> watch</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> web</span></span></code></pre></div>`,6),l=[t];function p(h,d,k,r,o,c){return i(),a("div",null,l)}const y=s(n,[["render",p]]);export{b as __pageData,y as default};