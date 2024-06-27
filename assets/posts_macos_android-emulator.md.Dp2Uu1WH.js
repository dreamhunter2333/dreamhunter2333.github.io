import{_ as s,c as a,o as i,aj as n}from"./chunks/framework.BF2cowCO.js";const c=JSON.parse('{"title":"android emulator","description":"","frontmatter":{"title":"android emulator","date":"2021-12-15 23:40:35","categories":["macos"],"tags":["macos","android","emulator"]},"headers":[],"relativePath":"posts/macos/android-emulator.md","filePath":"posts/macos/android-emulator.md","lastUpdated":1719480458000}'),t={name:"posts/macos/android-emulator.md"},l=n(`<h1 id="android-emulator" tabindex="-1">android emulator <a class="header-anchor" href="#android-emulator" aria-label="Permalink to &quot;android emulator&quot;">​</a></h1><p><a href="https://developer.android.com/studio#downloads" target="_blank" rel="noreferrer">download Command line tools</a></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> android-sdk</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> android-sdk/cmdline-tools</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> android-sdk/cmdline-tools/latest</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> android-sdk/cmdline-tools/latest</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">unzip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commandlinetools-xxx-xxx_latest.zip</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># download sdk</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ANDROID_SDK_ROOT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">path</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/android-sdk</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./bin/sdkmanager</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;system-images;android-31;google_apis;x86_64&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./bin/sdkmanager</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;platform-tools&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># create avd</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./bin/avdmanager</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> avd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;android-12&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -k</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;system-images;android-31;google_apis;x86_64&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -p</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">pat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">h</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/avd-12</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># run</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./emulator/emulator</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -avd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> android-12</span></span></code></pre></div>`,3),e=[l];function p(h,d,k,r,o,F){return i(),a("div",null,e)}const m=s(t,[["render",p]]);export{c as __pageData,m as default};
