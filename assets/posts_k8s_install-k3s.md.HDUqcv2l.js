import{_ as s,c as i,o as a,aj as n}from"./chunks/framework.B0iheTnZ.js";const o=JSON.parse('{"title":"安装 k3s + ingress nginx + cert-manager, 从 AKS 迁移到 k3s","description":"","frontmatter":{"title":"安装 k3s + ingress nginx + cert-manager, 从 AKS 迁移到 k3s","date":"2024-07-20 10:49:14","categories":["k8s"],"tags":["k8s","k3s"]},"headers":[],"relativePath":"posts/k8s/install-k3s.md","filePath":"posts/k8s/install-k3s.md","lastUpdated":1721447105000}'),l={name:"posts/k8s/install-k3s.md"},h=n(`<h1 id="安装-k3s-ingress-nginx-cert-manager" tabindex="-1">安装 k3s + ingress nginx + cert-manager <a class="header-anchor" href="#安装-k3s-ingress-nginx-cert-manager" aria-label="Permalink to &quot;安装 k3s + ingress nginx + cert-manager&quot;">​</a></h1><h2 id="为什么要迁移到-k3s" tabindex="-1">为什么要迁移到 K3s <a class="header-anchor" href="#为什么要迁移到-k3s" aria-label="Permalink to &quot;为什么要迁移到 K3s&quot;">​</a></h2><p>之前一直在 Azure 上使用 AKS，随着 k8s 的更新，资源占用越来越大。</p><p>而且我是 <code>单节点</code> 部署自己的一些个人服务，不需要高可用，所以决定自建 k3s。</p><h2 id="安装-k3s" tabindex="-1">安装 k3s <a class="header-anchor" href="#安装-k3s" aria-label="Permalink to &quot;安装 k3s&quot;">​</a></h2><p>首先准备一台服务器，我使用的是 Azure 的 VM，系统 <code>Ubuntu noble 24.04 x86_64</code>。</p><p>这里我选择了禁用 <code>traefik</code> 和 <code>servicelb</code>，</p><p>使用 <code>ingress-nginx</code> 的 <code>hostNetwork</code> + <code>DaemonSet</code> 模式作为集群的负载均衡。</p><details class="details custom-block"><summary>为什么不使用 <code>traefik</code> 和 <code>servicelb</code></summary><p><code>traefik</code> 和 <code>servicelb</code> 是 k3s 默认的负载均衡方案</p><p>但是在使用 <code>azureVM</code> 的时候, 默认的 <code>servicelb</code> 无法传递真实的 <code>clientIP</code></p><p>而 <code>traefik</code> 运行在 <code>hostNetwork</code> 模式下时无法自动获取 <code>cert</code> 证书</p><p>所以我选择了 <code>ingress-nginx</code> 和 <code>cert-manager</code>, <code>ingress-nginx</code> 可以通过 <code>hostNetwork</code> 模式获取真实的 <code>clientIP</code>, <code>cert-manager</code> 可以自动获取 <code>cert</code> 证书</p></details><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -sfL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://get.k3s.io</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --node-external-ip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vm外网ip</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --disable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> traefik</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --disable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> servicelb</span></span></code></pre></div><h2 id="安装-ingress-nginx" tabindex="-1">安装 ingress-nginx <a class="header-anchor" href="#安装-ingress-nginx" aria-label="Permalink to &quot;安装 ingress-nginx&quot;">​</a></h2><p>使用 terraform helm 安装 <code>ingress-nginx</code>, <code>DaemonSet</code> 模式</p><p>参考 <a href="https://registry.terraform.io/providers/hashicorp/helm/latest/docs" target="_blank" rel="noreferrer">terraform helm</a></p><details class="details custom-block"><summary>点我查看代码</summary><div class="language-hcl vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">hcl</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">data</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> &quot;azurerm_public_ip&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> &quot;azure_vm_k3s_publicip&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;azure_vm_k3s_publicip&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  resource_group_name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;azure_vm_k3s_rg&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resource</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> &quot;helm_release&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> &quot;nginx_ingress&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">             =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;ingress-nginx&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  namespace</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;ingress&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  create_namespace</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  wait</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">             =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  repository</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">       =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;https://kubernetes.github.io/ingress-nginx&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  chart</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;ingress-nginx&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name  </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;controller.replicaCount&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;1&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name  </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;controller.hostNetwork&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;true&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name  </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;controller.kind&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;DaemonSet&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name  </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;controller.service&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;false&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name  </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;controller.config.compute-full-forwarded-for&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;true&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name  </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;controller.config.enable-underscores-in-headers&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;true&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name  </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;controller.config.use-forwarded-headers&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;true&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name  </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;controller.config.enable-real-ip&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;true&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></details><h2 id="安装-cert-manager" tabindex="-1">安装 cert-manager <a class="header-anchor" href="#安装-cert-manager" aria-label="Permalink to &quot;安装 cert-manager&quot;">​</a></h2><p>使用 terraform helm 安装 <code>cert-manager</code></p><div class="note custom-block github-alert"><p class="custom-block-title">参考</p><p></p><ul><li><a href="https://registry.terraform.io/providers/hashicorp/helm/latest/docs" target="_blank" rel="noreferrer">terraform helm</a></li></ul></div><details class="details custom-block"><summary>点我查看代码</summary><div class="language-hcl vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">hcl</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resource</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> &quot;helm_release&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> &quot;cert&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">       =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;cert-manager&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  namespace</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;ingress&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  repository</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;https://charts.jetstack.io&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  chart</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;cert-manager&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  wait</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">       =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  depends_on</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [helm_release</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nginx_ingress]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name  </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;prometheus.enabled&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;false&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name  </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;installCRDs&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;true&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></details><h2 id="配置-letsencrypt-dns01" tabindex="-1">配置 letsencrypt dns01 <a class="header-anchor" href="#配置-letsencrypt-dns01" aria-label="Permalink to &quot;配置 letsencrypt dns01&quot;">​</a></h2><p>使用 <code>cert-manager</code> 配置 <code>letsencrypt</code> 的 <code>dns01</code> 验证方式</p><div class="note custom-block github-alert"><p class="custom-block-title">参考</p><p></p><ul><li><a href="https://cert-manager.io/docs/configuration/acme/dns01/" target="_blank" rel="noreferrer">cert-manager dns01</a></li><li><a href="https://registry.terraform.io/providers/hashicorp/kubernetes/latest/docs" target="_blank" rel="noreferrer">terraform kubernetes</a></li></ul></div><details class="details custom-block"><summary>点我查看代码</summary><div class="language-hcl vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">hcl</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resource</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> &quot;kubernetes_secret&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> &quot;cloudflare_api_token&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  metadata</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;cloudflare-api-token-secret&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    namespace</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;ingress&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  data</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;api-token&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> var.cloudflare_api_token</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resource</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> &quot;kubernetes_manifest&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> &quot;clusterissuer_letsencrypt_prod&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  manifest</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> yamldecode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">file</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">path</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">module</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/letsencrypt-issuer.tpl.yaml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><code>letsencrypt-issuer.tpl.yaml</code></p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">apiVersion</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">cert-manager.io/v1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">kind</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ClusterIssuer</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">metadata</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;letsencrypt-dns01&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">spec</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  acme</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    email</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xxx@xxx.com&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://acme-v02.api.letsencrypt.org/directory&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    privateKeySecretRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;letsencrypt-dns01&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    solvers</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">http01</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          ingress</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">            class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">nginx</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dns01</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          cloudflare</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">            email</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xxx@xxx.com&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">            apiTokenSecretRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">              name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;cloudflare-api-token-secret&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">              key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;api-token&quot;</span></span></code></pre></div></details><h2 id="部署应用" tabindex="-1">部署应用 <a class="header-anchor" href="#部署应用" aria-label="Permalink to &quot;部署应用&quot;">​</a></h2><p>在 <code>helm</code> 添加 <code>ingress</code> 模板配置，并在 <code>values.yaml</code> 中配置 <code>ingress</code></p><details class="details custom-block"><summary>点我查看代码</summary><p><code>templates/ingress.yaml</code></p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">if .Values.ingress.enabled -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}}</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">apiVersion</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">networking.k8s.io/v1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">kind</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Ingress</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">metadata</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{{ .Values.name }}-ingress&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  annotations</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {{- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">toYaml .Values.ingress.annotations | nindent 4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }}</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">spec</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {{- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">if .Values.ingress.tls</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }}</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  tls</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {{- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">range .Values.ingress.tls</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">hosts</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {{- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">range .hosts</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        - {{ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">. | quote</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {{- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }}</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      secretName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {{ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.secretName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {{- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {{- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }}</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  rules</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {{- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">range .Values.ingress.hosts</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">host</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {{ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.host | quote</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }}</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      http</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        paths</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">pathType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Prefix</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">            path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">            backend</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">              service</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">                name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {{ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.serviceName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }}</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">                port</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">                  number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {{ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.portNumber</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {{- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }}</span></span></code></pre></div><p><code>values.yaml</code>, 这里配置了泛域名证书</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ingress</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  enabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  annotations</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    kubernetes.io/ingress.class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">nginx</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    cert-manager.io/cluster-issuer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">letsencrypt-dns01</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  hosts</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">host</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">whoami.xxx.xxx</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      serviceName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">whoami</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      portNumber</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  tls</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">hosts</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;*..xxx.xxx&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      secretName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">tls-secret-wild-xxx</span></span></code></pre></div></details><p>然后就可以部署应用到 <code>k3s</code> 集群</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">helm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> upgrade</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> whoami</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span></span></code></pre></div><p>然后就可以愉快访问你的应用了。</p>`,28),t=[h];function k(p,e,E,r,d,g){return a(),i("div",null,t)}const y=s(l,[["render",k]]);export{o as __pageData,y as default};