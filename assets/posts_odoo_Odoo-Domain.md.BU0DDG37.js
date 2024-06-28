import{_ as a,c as t,o as i,aj as o}from"./chunks/framework.BF2cowCO.js";const E=JSON.parse('{"title":"Odoo Domain 波兰表示法","description":"","frontmatter":{"title":"Odoo Domain 波兰表示法","date":"2019-08-16 14:34:19","tags":["odoo"],"categories":"odoo"},"headers":[],"relativePath":"posts/odoo/Odoo-Domain.md","filePath":"posts/odoo/Odoo-Domain.md","lastUpdated":1719550632000}'),e={name:"posts/odoo/Odoo-Domain.md"},s=o('<h1 id="odoo-domain-波兰表示法" tabindex="-1">Odoo Domain 波兰表示法 <a class="header-anchor" href="#odoo-domain-波兰表示法" aria-label="Permalink to &quot;Odoo Domain 波兰表示法&quot;">​</a></h1><h2 id="domain表达式" tabindex="-1">domain表达式 <a class="header-anchor" href="#domain表达式" aria-label="Permalink to &quot;domain表达式&quot;">​</a></h2><h3 id="常见表达式" tabindex="-1">常见表达式 <a class="header-anchor" href="#常见表达式" aria-label="Permalink to &quot;常见表达式&quot;">​</a></h3><blockquote><p>Domain是个多条件的列表，每个条件是一个三元表达式：[(字段名，操作符，值), (字段名，操作符，值)]</p></blockquote><p><code>[(&#39;create_id&#39;,&#39;=&#39;,user.id)]</code></p><h3 id="domain使用场合" tabindex="-1">Domain使用场合 <a class="header-anchor" href="#domain使用场合" aria-label="Permalink to &quot;Domain使用场合&quot;">​</a></h3><ul><li><code>python</code> 函数中的过滤器</li><li><code>tree</code> <code>form</code> 视图的过滤器</li></ul><h3 id="字段名" tabindex="-1">字段名 <a class="header-anchor" href="#字段名" aria-label="Permalink to &quot;字段名&quot;">​</a></h3><blockquote><p>当前模型的字段或者是通过点操作符访问当前模型的Many2one / Many2Many的对象的字段。<br> 如果左边是Many2Many对象的时候，则表示左边只要任意一个值符合条件则符合条件。</p></blockquote><h3 id="domain操作符" tabindex="-1">Domain操作符 <a class="header-anchor" href="#domain操作符" aria-label="Permalink to &quot;Domain操作符&quot;">​</a></h3><table tabindex="0"><thead><tr><th>操作符</th><th style="text-align:center;">功能</th></tr></thead><tbody><tr><td>=</td><td style="text-align:center;">比较运算 等于</td></tr><tr><td>!=</td><td style="text-align:center;">比较运算 不等于</td></tr></tbody></table><blockquote><p>|比较运算 大于 =|比较运算 大于等于 &lt;|比较运算 小于 &lt;=|比较运算 小于等于 in|包含，判断值是否在元素的列表里面 not in| 不包含，判断值是否不在元素的列表里面</p></blockquote><h3 id="值" tabindex="-1">值 <a class="header-anchor" href="#值" aria-label="Permalink to &quot;值&quot;">​</a></h3><blockquote><p>值进行筛选的变量，必须能通过操作符来和字段进行比较。<br> 可以使用当前对象的字段</p></blockquote><h2 id="多条件的逻辑运算" tabindex="-1">多条件的逻辑运算 <a class="header-anchor" href="#多条件的逻辑运算" aria-label="Permalink to &quot;多条件的逻辑运算&quot;">​</a></h2><blockquote><p>波兰表示法的运算顺序<br> 以二元运算为例，从左至右读入表达式，遇到一个操作符后跟随两个操作数时，则计算之，然后将结果作为操作数替换这个操作符和两个操作数；重复此步骤，直至所有操作符处理完毕。</p></blockquote><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&amp;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;p.code&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;=&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;CN&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;p.code&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;=&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;US&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)]</span></span></code></pre></div>',17),n=[s];function d(l,h,r,p,c,k){return i(),t("div",null,n)}const b=a(e,[["render",d]]);export{E as __pageData,b as default};