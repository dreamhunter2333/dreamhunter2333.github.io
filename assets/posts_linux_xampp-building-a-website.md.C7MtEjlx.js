import{_ as a,c as s,o as i,aj as p,ay as e}from"./chunks/framework.BF2cowCO.js";const u=JSON.parse('{"title":"xampp建站","description":"","frontmatter":{"title":"xampp建站","date":"2019-03-31 00:39:46","tags":["xampp"],"categories":["linux"]},"headers":[],"relativePath":"posts/linux/xampp-building-a-website.md","filePath":"posts/linux/xampp-building-a-website.md","lastUpdated":1719480458000}'),t={name:"posts/linux/xampp-building-a-website.md"},l=p(`<h1 id="xampp建站" tabindex="-1">xampp建站 <a class="header-anchor" href="#xampp建站" aria-label="Permalink to &quot;xampp建站&quot;">​</a></h1><h3 id="一、工具-原料" tabindex="-1">一、工具/原料 <a class="header-anchor" href="#一、工具-原料" aria-label="Permalink to &quot;一、工具/原料&quot;">​</a></h3><ul><li>xampp</li></ul><h3 id="二、php环境配置" tabindex="-1">二、PHP环境配置 <a class="header-anchor" href="#二、php环境配置" aria-label="Permalink to &quot;二、PHP环境配置&quot;">​</a></h3><h4 id="_1、可以在终端使用" tabindex="-1">1、可以在终端使用 <a class="header-anchor" href="#_1、可以在终端使用" aria-label="Permalink to &quot;1、可以在终端使用&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 命令来查看并确定linux 操作系统版本。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出：32表明系统是32位</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出：64表明系统是64位。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getconf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> LONG_BIT</span></span></code></pre></div><h4 id="_2、下载与自己操作系统相适应版本的xampp" tabindex="-1">2、下载与自己操作系统相适应版本的xampp <a class="header-anchor" href="#_2、下载与自己操作系统相适应版本的xampp" aria-label="Permalink to &quot;2、下载与自己操作系统相适应版本的xampp&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#[32bit]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://sourceforge.net/projects/xampp/files/XAMPP%20Linux/5.6.14/xampp-linux-5.6.14-4-installer.run</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#[64bit]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://sourceforge.net/projects/xampp/files/XAMPP%20Linux/5.6.14/xampp-linux-x64-5.6.14-0-installer.run</span></span></code></pre></div><h4 id="_3、安装xampp-为私有云安装构建阿帕奇和php环境" tabindex="-1">3、安装xampp，为私有云安装构建阿帕奇和php环境 <a class="header-anchor" href="#_3、安装xampp-为私有云安装构建阿帕奇和php环境" aria-label="Permalink to &quot;3、安装xampp，为私有云安装构建阿帕奇和php环境&quot;">​</a></h4><p><img src="`+e+`" alt="xampp"></p><h4 id="_4、启动xampp-执行" tabindex="-1">4、启动xampp，执行 <a class="header-anchor" href="#_4、启动xampp-执行" aria-label="Permalink to &quot;4、启动xampp，执行&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 启动服务</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/opt/lampp/lampp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span></span></code></pre></div><h3 id="三、将网站搭载在服务器" tabindex="-1">三、将网站搭载在服务器 <a class="header-anchor" href="#三、将网站搭载在服务器" aria-label="Permalink to &quot;三、将网站搭载在服务器&quot;">​</a></h3><ul><li><p>/opt/lampp/htdocs/ 这个目录就是存放网站的目录</p></li><li><p>假如我把speedtest文件夹放在这个目录下 xxx.xxx.xxx.xxx/speedtest 就是访问地址</p></li><li><p>xxx.xxx.xxx.xxx 为你的ip地址或域名</p></li><li><p>若不能访问请 chmod -R 777 你的网站目录</p></li><li><p>/opt/lampp/htdocs/index.php 这个文件可以修改ip或域名指向的目录 ��可以修改ip或域名指向的目录</p></li></ul>`,14),n=[l];function h(o,r,d,c,x,k){return i(),s("div",null,n)}const b=a(t,[["render",h]]);export{u as __pageData,b as default};
