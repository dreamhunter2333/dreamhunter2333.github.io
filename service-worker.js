/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ad97050f0d71f260013d1b1bab014d39"
  },
  {
    "url": "assets/css/0.styles.f16da101.css",
    "revision": "5f5d8553143ddd7b5783181396709df5"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.fd0f0040.js",
    "revision": "1d79f0db47cd77d84f9a0788a36e41ed"
  },
  {
    "url": "assets/js/10.665a5177.js",
    "revision": "e91207ab7984dd32fc9524bb9c90fc83"
  },
  {
    "url": "assets/js/100.e91e5b16.js",
    "revision": "42d23ac7d528e1972f4e3e44680aab53"
  },
  {
    "url": "assets/js/101.234f1975.js",
    "revision": "321cd6f20d5b36302e39f74125b506d6"
  },
  {
    "url": "assets/js/102.522efa87.js",
    "revision": "6ad25822a61fe3bd074e6c0b83264e79"
  },
  {
    "url": "assets/js/103.1a914da7.js",
    "revision": "ad23022854506f385aca069fdfe4cf62"
  },
  {
    "url": "assets/js/104.6481e18f.js",
    "revision": "bb53b0df8c4b0cc86c68680478bd66d9"
  },
  {
    "url": "assets/js/105.fc6ee46d.js",
    "revision": "fd4ab85d57770198c769a05a04151fcd"
  },
  {
    "url": "assets/js/106.a73a6062.js",
    "revision": "91860eed58201857878aa135ff9e94d7"
  },
  {
    "url": "assets/js/107.3ffd777f.js",
    "revision": "7b4ec258696a6aeb087f6f944b60d099"
  },
  {
    "url": "assets/js/108.3fe6e2ad.js",
    "revision": "cd40c0765a5fbfc8b8e9b1358e5c9743"
  },
  {
    "url": "assets/js/109.8779314f.js",
    "revision": "e54878fc0ac4392a5636924e5e91b397"
  },
  {
    "url": "assets/js/11.88555c24.js",
    "revision": "caade9c37f70a734cc42c37607697c79"
  },
  {
    "url": "assets/js/110.04b1464b.js",
    "revision": "6fc3916224b22ac52822c459b1649278"
  },
  {
    "url": "assets/js/111.37657d0c.js",
    "revision": "6443ffd96c56f6b9125e85b3dd54ba88"
  },
  {
    "url": "assets/js/112.4b3d2c4e.js",
    "revision": "78e0d2930310c530c4093660fe094da8"
  },
  {
    "url": "assets/js/113.12adfc96.js",
    "revision": "7327cf1f52a461afdfe505049c8c82fd"
  },
  {
    "url": "assets/js/114.2e3fb064.js",
    "revision": "9458e08e14a69a0bc5ad7f4c605f7bfe"
  },
  {
    "url": "assets/js/115.4538ef01.js",
    "revision": "0b67b8d16ddcf0ebd27b65f17d10df23"
  },
  {
    "url": "assets/js/116.e28d34be.js",
    "revision": "eb666fc271d3fa71e183c2f33730cc75"
  },
  {
    "url": "assets/js/117.8f66c4e7.js",
    "revision": "771133408a1ae95d2ab3f68ad3521ff6"
  },
  {
    "url": "assets/js/118.02e1f2d3.js",
    "revision": "411be23dd626d8e980ff93b18d0b2d1a"
  },
  {
    "url": "assets/js/119.65ec2964.js",
    "revision": "0c23d1d4b5485309d14eeef3c02779e0"
  },
  {
    "url": "assets/js/12.a22099fb.js",
    "revision": "ef9f7e2ba06af9405747bc7693df702d"
  },
  {
    "url": "assets/js/120.45c34dda.js",
    "revision": "77a71cb695039ebdbe3c7f36ec6a5b0d"
  },
  {
    "url": "assets/js/121.763262e1.js",
    "revision": "350c4e97c356fb47fd2b91ca450dc240"
  },
  {
    "url": "assets/js/122.d1b41d0a.js",
    "revision": "c08dcde8408df9cbae0a8633bc0db387"
  },
  {
    "url": "assets/js/123.ee7fcff5.js",
    "revision": "ac8cfa9e85b08063da460abb566b95a5"
  },
  {
    "url": "assets/js/124.39f9faee.js",
    "revision": "9261304ae9105329ed1b70c15646cceb"
  },
  {
    "url": "assets/js/125.24a56861.js",
    "revision": "3bf003e6be81308097cf512c7431a40a"
  },
  {
    "url": "assets/js/126.b38fc8f7.js",
    "revision": "a445e520fd7c53419001ec6fa84b5dd7"
  },
  {
    "url": "assets/js/127.88dd0db0.js",
    "revision": "b17bb81e4c69ea20da7de1abe08f3a97"
  },
  {
    "url": "assets/js/13.f17e8f67.js",
    "revision": "c0b61015a801943cad6451467a49ca6a"
  },
  {
    "url": "assets/js/14.54bc7910.js",
    "revision": "80c383fa6e59f8c634374af351f5e1c5"
  },
  {
    "url": "assets/js/15.3ec377ad.js",
    "revision": "3c96b666ec0fb605d3888d169e934240"
  },
  {
    "url": "assets/js/16.c8b9b293.js",
    "revision": "51cc8f03e115c6207b96893d08f71623"
  },
  {
    "url": "assets/js/17.d84108f6.js",
    "revision": "8048649273ee034c1663e779ec12d7ab"
  },
  {
    "url": "assets/js/18.1174f1c0.js",
    "revision": "bb1262c5be7a1189b6cb69e2f2188f73"
  },
  {
    "url": "assets/js/19.e2ab53bb.js",
    "revision": "c371f4fad9cab2c40a8334749952a56f"
  },
  {
    "url": "assets/js/20.bc2b36eb.js",
    "revision": "615fb89ba6a14948d8d93405aa4e1b48"
  },
  {
    "url": "assets/js/21.e3b1b53c.js",
    "revision": "6e9d478e5c0f68b1a1d86423d42a0fe8"
  },
  {
    "url": "assets/js/22.c443cb99.js",
    "revision": "499d1132c4b792cd1dbe34425a1b7cda"
  },
  {
    "url": "assets/js/23.6a5555c2.js",
    "revision": "b2924aec6d0a01783d555a6810c682ae"
  },
  {
    "url": "assets/js/24.afa3e7d2.js",
    "revision": "40fc0a5c2f27d6e0af1de92c034adcb4"
  },
  {
    "url": "assets/js/25.15cb9387.js",
    "revision": "5e486c6e112736ea58a67c2c8b739d39"
  },
  {
    "url": "assets/js/26.3208aba9.js",
    "revision": "01d5203d00e796b55e4d705956d8ac59"
  },
  {
    "url": "assets/js/27.341a1f12.js",
    "revision": "dca48cdff219e685fe8d0f1672075c7b"
  },
  {
    "url": "assets/js/28.d71aad24.js",
    "revision": "e4f7780e4c494be811f5a59060c32df4"
  },
  {
    "url": "assets/js/29.58e27ea5.js",
    "revision": "27b3283f34758b737162e47a38e24958"
  },
  {
    "url": "assets/js/3.4efb8cdf.js",
    "revision": "fbd0eeae0d436c253d0a48558fde1ca7"
  },
  {
    "url": "assets/js/30.c11d32a0.js",
    "revision": "0865a3b2c0c9e0dd77eb7c6c55e1097f"
  },
  {
    "url": "assets/js/31.e45ed1ea.js",
    "revision": "77c2bed99681a98dca2a71f7283bfa27"
  },
  {
    "url": "assets/js/32.35d4c5c0.js",
    "revision": "dd1ae9f1372d6c894a3d380fdfce661a"
  },
  {
    "url": "assets/js/33.db540d2e.js",
    "revision": "b39dca2904211e2924fbfd7929b7a408"
  },
  {
    "url": "assets/js/34.7180aa6f.js",
    "revision": "342ea6677ce2a7b6c40420b27b2f3e09"
  },
  {
    "url": "assets/js/35.aca6b6cb.js",
    "revision": "b9488690b4ceddc6dea05f2fb3843a1a"
  },
  {
    "url": "assets/js/36.c1a6993c.js",
    "revision": "0eb27883b3cfc2e61223e0f97339e31d"
  },
  {
    "url": "assets/js/37.1e633a8c.js",
    "revision": "b0e450fda70af724a1f99e96a621d635"
  },
  {
    "url": "assets/js/38.40ee507b.js",
    "revision": "852cbe39b413f3863aecde3ce2b62d3c"
  },
  {
    "url": "assets/js/39.573d9381.js",
    "revision": "a5da5d85573a8c1c88b59cf4c959ed6a"
  },
  {
    "url": "assets/js/4.a34141b4.js",
    "revision": "3208d8adedcda4c7faf09b245ee8da73"
  },
  {
    "url": "assets/js/40.398b4640.js",
    "revision": "32506b02aa01b65e341ca108adad303a"
  },
  {
    "url": "assets/js/41.9375afcc.js",
    "revision": "5c196a9358c2ca2d482c370d8cff0a98"
  },
  {
    "url": "assets/js/42.049630c9.js",
    "revision": "9ab56067be263bc8556ed54ab37feea7"
  },
  {
    "url": "assets/js/43.1adcaf0e.js",
    "revision": "4dc91384e4d9316c1efb8ed530b1cec8"
  },
  {
    "url": "assets/js/44.d181c444.js",
    "revision": "b821cdcbbbbcc25d8dc3aeb290d88698"
  },
  {
    "url": "assets/js/45.1e6fca98.js",
    "revision": "346641dda821a917a83f391437718942"
  },
  {
    "url": "assets/js/46.c9ce9e6a.js",
    "revision": "6af4156ef0c7ed009955566fb5c79455"
  },
  {
    "url": "assets/js/47.596fa352.js",
    "revision": "96f7e087736aa8932ccafec9849b41f9"
  },
  {
    "url": "assets/js/48.34486700.js",
    "revision": "9378b3ca7596647ebccb91bb87413afa"
  },
  {
    "url": "assets/js/49.694175f2.js",
    "revision": "6590414250a076f8422083d460558711"
  },
  {
    "url": "assets/js/5.009288da.js",
    "revision": "fb6ff6cc592cd04628116db682cebf17"
  },
  {
    "url": "assets/js/50.206eda71.js",
    "revision": "8b183ba04821642d5400575c62820622"
  },
  {
    "url": "assets/js/51.8ce19970.js",
    "revision": "3c3eed14a824f89c5aa97bad99a6f61a"
  },
  {
    "url": "assets/js/52.1ade1377.js",
    "revision": "c3ef470343f41deff78d0314ee2464a3"
  },
  {
    "url": "assets/js/53.d1b0513a.js",
    "revision": "fbd6493d9d09e39166834220a99770d8"
  },
  {
    "url": "assets/js/54.57ce4aaf.js",
    "revision": "587b35d102cb68f7ebb351ea6586c8bf"
  },
  {
    "url": "assets/js/55.e61cad7d.js",
    "revision": "9d3590f58d781c330f004bc299c8a8e9"
  },
  {
    "url": "assets/js/56.34f3890c.js",
    "revision": "cfe7ae58db3524f92d05c51a79312d84"
  },
  {
    "url": "assets/js/57.66115f24.js",
    "revision": "c1b3105eae25ea6a5c36cecabfb62845"
  },
  {
    "url": "assets/js/58.442419e0.js",
    "revision": "c4b1af9977ad7b926a6eb76055735fc0"
  },
  {
    "url": "assets/js/59.7780d50c.js",
    "revision": "b36d93295f5aa384d651482c4ff140f7"
  },
  {
    "url": "assets/js/6.2070680a.js",
    "revision": "0a1d238b006b5d8b94f1bd1f5f5272df"
  },
  {
    "url": "assets/js/60.a011e430.js",
    "revision": "86603d309807a13956e0cc3ee2a04e0b"
  },
  {
    "url": "assets/js/61.9cdfcdde.js",
    "revision": "4dcd09d2784fa1313e8a0933837c92a5"
  },
  {
    "url": "assets/js/62.2c905c9c.js",
    "revision": "c9646b12a058b9e89f7996f05e621763"
  },
  {
    "url": "assets/js/63.e7447128.js",
    "revision": "99897f195ab5ef2548f18ae13096f0b2"
  },
  {
    "url": "assets/js/64.50c52675.js",
    "revision": "d0a9e1125084875587ca3cbf789b7d75"
  },
  {
    "url": "assets/js/65.02be45f1.js",
    "revision": "500a2405dc65422899e2276372ad7668"
  },
  {
    "url": "assets/js/66.ea987e18.js",
    "revision": "6f8661bfd2f168881ef03d40e276ff1a"
  },
  {
    "url": "assets/js/67.4c375885.js",
    "revision": "2ba8404648e82bef2f849ab33c464a37"
  },
  {
    "url": "assets/js/68.1415c393.js",
    "revision": "b1ff6143653fdec586e921eea6a0e229"
  },
  {
    "url": "assets/js/69.33a8df10.js",
    "revision": "258b9937b5faa28ba0999bfac5a71825"
  },
  {
    "url": "assets/js/7.9f0042d2.js",
    "revision": "481e56428cfcf7cca54b3e5ca3f23030"
  },
  {
    "url": "assets/js/70.c1c74e53.js",
    "revision": "7298b09b35d184c2ea9451318415e1c5"
  },
  {
    "url": "assets/js/71.ed5ae578.js",
    "revision": "f589dc43d1caed4fb73a7abe3e79bfe8"
  },
  {
    "url": "assets/js/72.d765eefe.js",
    "revision": "f2d5dcbe32471dd95576409df265a563"
  },
  {
    "url": "assets/js/73.9d9613f5.js",
    "revision": "203408e7c19266fd1be8559da46bcdbd"
  },
  {
    "url": "assets/js/74.27f346fd.js",
    "revision": "4e08749fcb1504ab9a4c8046c8fb1d20"
  },
  {
    "url": "assets/js/75.37844263.js",
    "revision": "693142a761f898a42fd90793c3343b3d"
  },
  {
    "url": "assets/js/76.218c4f75.js",
    "revision": "dbb410db0794523576a94d46cf6c970b"
  },
  {
    "url": "assets/js/77.cd0b9671.js",
    "revision": "dd90f35aa3e4eaf39c6d0295244f6e19"
  },
  {
    "url": "assets/js/78.938d7a24.js",
    "revision": "8f8719714241241c55ccb0f112f39adc"
  },
  {
    "url": "assets/js/79.c36b97d6.js",
    "revision": "99457bd49fd73b9928f631793d12f1ef"
  },
  {
    "url": "assets/js/8.7ddca45d.js",
    "revision": "b2c1f8ab0b96efe9d710f4e4309b5d0d"
  },
  {
    "url": "assets/js/80.8ac138e5.js",
    "revision": "cf08be36df0119fd62238d0bfea67577"
  },
  {
    "url": "assets/js/81.c8909364.js",
    "revision": "bbc3cf5f1c959affcb8d2923f33f256c"
  },
  {
    "url": "assets/js/82.0c964927.js",
    "revision": "ee38e5ecf5760b42b2144a5c8ec3cf62"
  },
  {
    "url": "assets/js/83.06ce94c3.js",
    "revision": "df8a9ea29eccc618a7d1944b5d7935c9"
  },
  {
    "url": "assets/js/84.3da866ef.js",
    "revision": "d493d909c799f9fa4a20b9650b99270a"
  },
  {
    "url": "assets/js/85.fb6384eb.js",
    "revision": "866254ecb7877fcd348fc9ecf9441892"
  },
  {
    "url": "assets/js/86.a881690a.js",
    "revision": "1d260f804a9de3e6a823aea4a65260e7"
  },
  {
    "url": "assets/js/87.3d0605af.js",
    "revision": "48cc820ee19057027dddd870c7ec278a"
  },
  {
    "url": "assets/js/88.c150aa9a.js",
    "revision": "890c8e032367a0d47d7d23ab256c251f"
  },
  {
    "url": "assets/js/89.2be60de0.js",
    "revision": "debb27db5cdca5c29baeb0267c045bc1"
  },
  {
    "url": "assets/js/9.7051f050.js",
    "revision": "d062ea2bf1df0caa6d371bd43eea149a"
  },
  {
    "url": "assets/js/90.2f632826.js",
    "revision": "b7bad9f5c3ee1533a8776ff058338152"
  },
  {
    "url": "assets/js/91.2c2e5417.js",
    "revision": "b3f2dc6705efa9fe998773abd5c94a8e"
  },
  {
    "url": "assets/js/92.7e66b380.js",
    "revision": "fb04921dd691e46f3a6856e15a82c67e"
  },
  {
    "url": "assets/js/93.7f17d21e.js",
    "revision": "63a138362f5730cba4c4713d31c1d7d6"
  },
  {
    "url": "assets/js/94.4b713dc0.js",
    "revision": "6c9a912949938ef8a7966e1876051d40"
  },
  {
    "url": "assets/js/95.3238815f.js",
    "revision": "f636a37f29790ab1b68e3e0ba9babdab"
  },
  {
    "url": "assets/js/96.6b2e5c39.js",
    "revision": "1cfe1cc8c71dcf651c9a9a94fb75e653"
  },
  {
    "url": "assets/js/97.91070451.js",
    "revision": "134d1062669448b2be73e3699b443cfd"
  },
  {
    "url": "assets/js/98.2006f3f0.js",
    "revision": "56ce420b98c5bcdd8bf8b4aba52524b2"
  },
  {
    "url": "assets/js/99.392679b3.js",
    "revision": "ad6304a839a79ef599b674ff0bb82251"
  },
  {
    "url": "assets/js/app.3cff697f.js",
    "revision": "8d146f3b0b0126567951435930b4bdd4"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/algorithm/index.html",
    "revision": "d031bd0519aea39ccbaa21e5747b17fc"
  },
  {
    "url": "categories/database/index.html",
    "revision": "8a432804b0841c9bc45a44d9ac74b839"
  },
  {
    "url": "categories/devops/index.html",
    "revision": "3e0f2e30719ad53bf44892a0569b43af"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "e641925f0930e9363ae3bc551c4b7626"
  },
  {
    "url": "categories/front/index.html",
    "revision": "acd1ae26b213ae13b9246045d53658fd"
  },
  {
    "url": "categories/git/index.html",
    "revision": "e64f6d6746fca0bac2cbde6fac545513"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "90b14e8f4444c16e06b9687c8fd1d200"
  },
  {
    "url": "categories/http/index.html",
    "revision": "f2ef0b734998e21298d0c3f6d788663d"
  },
  {
    "url": "categories/index.html",
    "revision": "3268dbdbdf48ce58d2fe56b94fc7e048"
  },
  {
    "url": "categories/java/index.html",
    "revision": "8cd7229f83b0e2732752895adb85f964"
  },
  {
    "url": "categories/java/page/2/index.html",
    "revision": "ccf3e6553aed630d47942b28436e8e63"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "1d487ab82101b6a8418ea36bcce0f664"
  },
  {
    "url": "categories/linux/page/2/index.html",
    "revision": "bd3e158f087c4b73dd7b98ab24dc4f6a"
  },
  {
    "url": "categories/macos/index.html",
    "revision": "f9379a9096fcb05e9f586507d98b314c"
  },
  {
    "url": "categories/mq/index.html",
    "revision": "e74fa5e69ba113436d24f1cbd2f29ebe"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "1d13431b547cf8d8f98450ec2b30c7f7"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "2b9b6022b6075e9c8e8dc46b245afece"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "3fbf9f57d82a7e09ddcc3b8ff107ec3d"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "b153a29c16a792b4e060cfe581548671"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "cc1a6337c9a02ca6172d84a7ae446f75"
  },
  {
    "url": "categories/other/index.html",
    "revision": "d85b56faa0498327e8fe5bf436b544e2"
  },
  {
    "url": "categories/python/index.html",
    "revision": "e12d61b2b307d1b60f8286cfbcce8429"
  },
  {
    "url": "categories/python/page/2/index.html",
    "revision": "1ce17f72f960c2193c77f64cf142b9d0"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "907a143b47b04f98b23c9015e25f5c70"
  },
  {
    "url": "google8beda02b5c39281f.html",
    "revision": "796a76c93ca61203b46a48dca1923bc3"
  },
  {
    "url": "googleb01def48009a5ef6.html",
    "revision": "96834484da21f2a4897751f1eafea7a4"
  },
  {
    "url": "imgs/app.png",
    "revision": "3dd0113e3d000ddce3180e3717736a31"
  },
  {
    "url": "imgs/avatar.jpg",
    "revision": "88a55c29d4137679833347e9dff46115"
  },
  {
    "url": "imgs/code-server/code_server.jpg",
    "revision": "e9daff156c2e37782689e8b6d6e8a860"
  },
  {
    "url": "imgs/code-server/odoo-code_server-1.jpg",
    "revision": "07090697fd392963008ba4e322ba4bed"
  },
  {
    "url": "imgs/dsdt1.png",
    "revision": "0183d60bc9a3a9ceb62f3135406bfb95"
  },
  {
    "url": "imgs/header_image.jpg",
    "revision": "9c5bfbcf3ff8605575e7b96040b5b7eb"
  },
  {
    "url": "imgs/hexo_live.gif",
    "revision": "dec47512528bd781ab2a2627e83b6101"
  },
  {
    "url": "imgs/iqiyi-danmu/br2Object.png",
    "revision": "22958c19f639159b01415a79c1bbcfc2"
  },
  {
    "url": "imgs/iqiyi-danmu/F12.png",
    "revision": "b0719d0f9e1a7f26b9ca7cad62be5f10"
  },
  {
    "url": "imgs/iqiyi-danmu/initiator.png",
    "revision": "e09a0b3ec85a039052ce5b87ac73510a"
  },
  {
    "url": "imgs/iqiyi-danmu/proto-danmu.png",
    "revision": "7eb3638b85028ba7ceaddebc351cdac4"
  },
  {
    "url": "imgs/iqiyi-danmu/wordcloud.jpg",
    "revision": "5b22dca8d06f3f1be6ca3dda82b89bc7"
  },
  {
    "url": "imgs/java/idea-remote-debug.png",
    "revision": "6964673b7ffad0a47eaff7212e83a5ce"
  },
  {
    "url": "imgs/mipad2/mipad2-1.jpg",
    "revision": "4ff6b3eb9e0f7b82cb371aa74499f57c"
  },
  {
    "url": "imgs/mipad2/mipad2-2.jpg",
    "revision": "6c8a5478871fb6cbfd32d7dc4b35301a"
  },
  {
    "url": "imgs/mipad2/mipad2-3.jpg",
    "revision": "69e8b2ad21e52f8ff9246ee5e2284fab"
  },
  {
    "url": "imgs/mipad2/mipad2-4.jpg",
    "revision": "67579a70107266d28a6ebb3fc5e2106b"
  },
  {
    "url": "imgs/mipad2/mipad2-5.jpg",
    "revision": "0e0253487eaba93ce8470e4be47cbc4c"
  },
  {
    "url": "imgs/mipad2/mipad2-6.jpg",
    "revision": "389273957df13dfbc8459e27108d35f4"
  },
  {
    "url": "imgs/mipad2/mipad2-7.jpg",
    "revision": "52548107a690669f31c5ac57287d44a6"
  },
  {
    "url": "imgs/odoo-challenge/odoo-challenge-1.png",
    "revision": "f6a482c738adf73d2b223be2fcfb1a64"
  },
  {
    "url": "imgs/odoo-challenge/odoo-challenge-10.png",
    "revision": "48440c3270efe9532678d3bd93170464"
  },
  {
    "url": "imgs/odoo-challenge/odoo-challenge-11.png",
    "revision": "286ccd884eb84230d2d62c7bd35965ac"
  },
  {
    "url": "imgs/odoo-challenge/odoo-challenge-2.png",
    "revision": "72968b41667460b97c3f88add76dfcf6"
  },
  {
    "url": "imgs/odoo-challenge/odoo-challenge-3.png",
    "revision": "421f7b3e262810edab16ba5cd3085e6b"
  },
  {
    "url": "imgs/odoo-challenge/odoo-challenge-4.png",
    "revision": "21a4ae788c82ff2fcf09cf7bccc2dc83"
  },
  {
    "url": "imgs/odoo-challenge/odoo-challenge-5.png",
    "revision": "611213339284819498299463822790ee"
  },
  {
    "url": "imgs/odoo-challenge/odoo-challenge-6.png",
    "revision": "82333b755c944d544088f8f52b40fe68"
  },
  {
    "url": "imgs/odoo-challenge/odoo-challenge-7-1.png",
    "revision": "23b96621af3afaea1ee89d891f6a4010"
  },
  {
    "url": "imgs/odoo-challenge/odoo-challenge-7-2.png",
    "revision": "ece14408813dd41dba54d5496b11fd67"
  },
  {
    "url": "imgs/odoo-challenge/odoo-challenge-8.png",
    "revision": "55a6c597c69a128f44229e4d23180926"
  },
  {
    "url": "imgs/odoo-challenge/odoo-challenge-9.png",
    "revision": "4e02575310ee2e62ec6328dbe0366484"
  },
  {
    "url": "imgs/odoo-challenge/odoo-challenge-end.png",
    "revision": "9244308d50dfa6b1fa4db9624312c448"
  },
  {
    "url": "imgs/odoo-model/class_o_row.png",
    "revision": "4b8f07570c58cd6917057ef1480dbb7a"
  },
  {
    "url": "imgs/odoo-model/manifest.png",
    "revision": "32dbe8692e30ea78a968b03aae16c799"
  },
  {
    "url": "imgs/odoo-model/models.png",
    "revision": "51ffa05c1c369af0386161d82e364b69"
  },
  {
    "url": "imgs/odoo-model/newmodel.png",
    "revision": "310810ca16ccde4dd41043a3684d307c"
  },
  {
    "url": "imgs/odoo-model/viewmenu.png",
    "revision": "b837667ca1854992e6f137262958ddb1"
  },
  {
    "url": "imgs/odoo/odoo_action_server.png",
    "revision": "1b68b82532dbb089e44955a571d4c4ae"
  },
  {
    "url": "imgs/odoo/odoo_class_many2many_2.png",
    "revision": "1d92a4c660fe58071bf3b1d642328d35"
  },
  {
    "url": "imgs/odoo/odoo_class_many2many.png",
    "revision": "d2ee06f0f0e4ae4173885d4f43fbc195"
  },
  {
    "url": "imgs/odoo/odoo-searchpanel.jpg",
    "revision": "2c2494857a259aa3712d66740c0c2c2f"
  },
  {
    "url": "imgs/odoo/Odoo-Translation.jpg",
    "revision": "0bd6d849232e9c175acf868b32c2a00d"
  },
  {
    "url": "imgs/source-code-pro/source-code-pro.png",
    "revision": "b23cc021b102a0825df4bb2e70ccab1b"
  },
  {
    "url": "imgs/wsl/wsl1.png",
    "revision": "ca19c8b15916c55d335214912b9f9d1c"
  },
  {
    "url": "imgs/wsl/wsl2.png",
    "revision": "5f86f5b25f26a5c3335295ba1b837af4"
  },
  {
    "url": "imgs/wsl/wsl3.png",
    "revision": "1861d943af38ecd2f739fb67699c04cd"
  },
  {
    "url": "imgs/wsl/wsl4.png",
    "revision": "102a17ac4b81f2f7306ca02b0e4be7a7"
  },
  {
    "url": "imgs/xampp.png",
    "revision": "c7be978cfb7e05a8f4e8f070ba5a1c10"
  },
  {
    "url": "index.html",
    "revision": "abe809a4891b6c78eac54774d2d6a709"
  },
  {
    "url": "live2d/koharu/assets/moc/koharu.2048/texture_00.png",
    "revision": "495eea8d906c2b03abfe3fa9de2f2a8b"
  },
  {
    "url": "pic/1.png",
    "revision": "550d2216b8f2fd6a2c74f3a5231cd118"
  },
  {
    "url": "pic/2.png",
    "revision": "9e99677ac840ff92a083251219f9790d"
  },
  {
    "url": "pic/3.png",
    "revision": "eab3a96dc2850e97265b7d532204c1b4"
  },
  {
    "url": "pic/4.png",
    "revision": "0dd01d2ab9fdf8025b51b6b2b06dbd49"
  },
  {
    "url": "pic/5.png",
    "revision": "97c3275f2af6e2745b0cfdd87810ffda"
  },
  {
    "url": "pic/6.png",
    "revision": "77bac5b6e892db1383c9b66fee2302b9"
  },
  {
    "url": "pic/7.png",
    "revision": "5e7ae8ad322f8d4c063f312752c9aea4"
  },
  {
    "url": "pic/8.png",
    "revision": "b29910d2c7afff3513cde8e161d4b13e"
  },
  {
    "url": "pic/9.png",
    "revision": "4241c0709db969ec626733541cea914d"
  },
  {
    "url": "pic/install-ubuntu-with-xrdp-in-termux/mstsc.png",
    "revision": "18eb346721e46fc1ac67d448bcbfc8da"
  },
  {
    "url": "posts/algorithm/traversing-binary-tree.html",
    "revision": "ded54d973b4ddf637ca94487d13e906f"
  },
  {
    "url": "posts/database/SQL-constraints.html",
    "revision": "7f2e5846f2025d4710e3e982bc2eb1e0"
  },
  {
    "url": "posts/database/SQL-keyword-order.html",
    "revision": "6bb3c2bdbbfd02008c40323235bf7b44"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "31a4ca12256c1bf4c179e5df1db5315f"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "fedb75be8b45c6044a46177ed40411a3"
  },
  {
    "url": "posts/database/why-redis-fast.html",
    "revision": "490d343ab86fcf79cd3d259e98673324"
  },
  {
    "url": "posts/devops/ansible-deploy-docker-compose-service.html",
    "revision": "b22d2d37ae73dfcf61746eb5d3498e8f"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "ab99d50b5cbd12affc0ee11c04d4740b"
  },
  {
    "url": "posts/docker/docker-host.html",
    "revision": "5bf4c0d8d500dbe4fa6875cfe98c5687"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "fe83fa7f4250351092fb825028c336df"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "86d5711401e938a1604be418404715a9"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "e54445f0bcd5afab427a3995077f51f2"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "640a252960f822cd85cc4052d4d31e57"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "a59a9a4d46f726fdd322a1706497602b"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "ffdb1fea82d142c2c0e97e31035538ed"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "14b4e81a929c7aee43366c106ca19e32"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "acc492f40a474485a9150f4c7bfd4c08"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "86c81059b0bc93c0c5e83c44724a8dae"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "caa09e55bb8eb11b4d45659dfcc50c03"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "e0d231a50c93e11a3eec058df613ba9c"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "e9d7efb0fb917f7e4ab073e15bb5e17e"
  },
  {
    "url": "posts/git/use-multi-access-token.html",
    "revision": "cbd376e724b39a6a412c93241dca7e89"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "77691a4111f7f1e8d062217e0639b97c"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "242f98e6685a5dc1cbfdf212975d78a1"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "3895f43fd8433de98f0056a76284d3cf"
  },
  {
    "url": "posts/http/https-shakehand.html",
    "revision": "c6f8b4edd8fb2f0f9abbd9ea848604b5"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "53f167bc00b0fd5e2ab8f1a333fc1bc2"
  },
  {
    "url": "posts/java/java-http-proxy.html",
    "revision": "c00ae581c3d770a29fb29b48cb6a3c2a"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "9a51715ddc4bcdd3231e4734539509e6"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "ebc2e47f545b8c295c83aac52e8192e0"
  },
  {
    "url": "posts/java/java-spring-MyBatis-Annotation.html",
    "revision": "e4e1d9415b4fbd0bff42599513f1812b"
  },
  {
    "url": "posts/java/java-Tetris.html",
    "revision": "08f3152962508ffed2c8527e80384b75"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "9490d6dcb4ee4b49c3bd9542e8472a62"
  },
  {
    "url": "posts/java/spring-RedisTemplate.html",
    "revision": "a44a1413bf77daf13e29f4efdbad650b"
  },
  {
    "url": "posts/java/springboot-disable-autoconfig.html",
    "revision": "39665b1df55c33d4676ad99eb6146663"
  },
  {
    "url": "posts/java/springboot-schedule-task.html",
    "revision": "b8fa829301dfcf53d1d429852b75016d"
  },
  {
    "url": "posts/java/springboot-swagger-ui-custom-config.html",
    "revision": "42291f44f90d42f0581a58efccd87461"
  },
  {
    "url": "posts/java/TOTP.html",
    "revision": "b533319a9ad8782bcdb29bbbb6384b18"
  },
  {
    "url": "posts/linux/docker-nginx-acme-trojan-go.html",
    "revision": "c3490f83d6ac28b8ee988a8678d5c961"
  },
  {
    "url": "posts/linux/install-ubuntu-with-xrdp-in-termux.html",
    "revision": "9524fd240a20934cc24460299302afea"
  },
  {
    "url": "posts/linux/linux-chm2html.html",
    "revision": "d2af00cf350441d488fc184e050b0586"
  },
  {
    "url": "posts/linux/linux-ecs.html",
    "revision": "30de7ea91e09d3c0a5e6da9d5fcbb38f"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "1fba841803e668d4d3d3209128da0157"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "d7966363f252b01f12ff50db36d88b65"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "91c81da3701e14cd1f112dbba379587c"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "575428633224323eaf79c98a2b1ad54a"
  },
  {
    "url": "posts/linux/ubuntu-switch-sources.html",
    "revision": "db806eff5b8020f0a3406e741ae97e3b"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "ce51f2bd700c234991cd10993698e72d"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "7a070617abb4c34d145eaa3cb1370e3e"
  },
  {
    "url": "posts/linux/wsl2-and-docker-compact-vdisk.html",
    "revision": "0c44648ccf19e2b6b4c8e30b77e0f917"
  },
  {
    "url": "posts/linux/wsl2-install.html",
    "revision": "cedf8d09d83e8dde839653e9ed4a0806"
  },
  {
    "url": "posts/linux/wsl2-use-winip.html",
    "revision": "83008e4b215257cab200d7946bfef9e0"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "72af80d8e87402070b18db53e6bcdc32"
  },
  {
    "url": "posts/macos/android-emulator.html",
    "revision": "bff1c1ef947605b70a826f5e56cf7a84"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "e7666078aa7a1f5d83ec40751f8bbad1"
  },
  {
    "url": "posts/mq/ensure-not-repeatedly-consumed.html",
    "revision": "46bb3893f7d6d1d692c688baff5e3187"
  },
  {
    "url": "posts/mq/ensure-order-of-mq.html",
    "revision": "67a77f7d0eff700829994d28ebe290bf"
  },
  {
    "url": "posts/mq/high-availability-of-mq.html",
    "revision": "fb61a829a096dbae6fb95703196844b9"
  },
  {
    "url": "posts/mq/mq-problems.html",
    "revision": "11788a4296a83e17573a53a13bc4efcf"
  },
  {
    "url": "posts/mq/why-mq.html",
    "revision": "b39914fb0af62c7ebe3f533474b0acb5"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "f6721e4d1653dbe8cec5e65961b078f7"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "aba5dc1107465b15aa55a8851d22a189"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "b4c1d7233096171097e8c7e675002e3a"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "f07a6a19c6833075ebaf98eacb82e7cd"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "42c686f1782f314bd8589d915b1aa7ca"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "57c631000d982c3a483a6a9dee35612c"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "7cc5e4dffccd77b409fd84526aece3a3"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "e23a55b3edabb1887e9db18467f67dc3"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "e838450fefc9b7fc61101d89628a1d29"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "01d3b52bad738a6c27cba6f0c77ee0fe"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "602397afe72cd92ecc2203026380215a"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "6c3f86d1fdbb2f270d5c925147bf794d"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "5fb72596feda499207b36f670683dc3c"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "3e526de47c7e356761b873e2ebc7c02d"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "f089d6076a80ba343542ee40508986a8"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "ac1f51ff9b50e0f8dc8517f4d15920b2"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "fe59f05e662f31f8fc3173d208b9cfa6"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "49f2d73e6ffe502fdfd968ba124222f4"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "91b93bb93aa62c9dbce6a3dce25bbfc3"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "9a19ddbf1b434aac9d461d1531bae1c1"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "24ed51b8496e3900149e854c06963077"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "a3bada0a34670a556e2cbd5af75a2106"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "5c5f5f23039af844ec712fb2095172b4"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "b7dec8ef7f34c6a5776025636bccacad"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "c773febc54eac98970265be909999d49"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "b467374a3dbe82e6b8bac90ac96a58ff"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "312a82af5973e995a59cb30ae4c2b7e4"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "1afce5ba0d4652680fe3ecf3fc7bf2e6"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "02b8ebb518c7b725818e69fa0975aab8"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "ec71332644ce750069ae5933cfdb7626"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "7534a43c6e2f03c3e2edf00aa746805a"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "0b8368e1441a991fe05556e7439db19c"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "5da04c458427897c3586069f189feb52"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "12facd55c72f151e6d9d0dc7a3bc4561"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "4f5778f6250e3e309e164db09f422f9e"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "a838be0501cc18877134294edb807ce2"
  },
  {
    "url": "posts/other/aria2-replace-thunder.html",
    "revision": "e5cf2810023eaec3fbe2d6550027f34e"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "e1a4c829a4dec8f0a85b8c0859f63e0d"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "a4c203b33cac78dd260d2a810a025d6d"
  },
  {
    "url": "posts/other/iqiyi-danmu-convert.html",
    "revision": "bea6e059a753f85c68cc3ea85d8128ef"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "38e253d47ff3a9a061d1b99acbfc1af2"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "8d7ceaa44d0c97786ac36bac338b7df2"
  },
  {
    "url": "posts/python/deadlock.html",
    "revision": "ad47c657f920e1b2068765276e629a7d"
  },
  {
    "url": "posts/python/locust.html",
    "revision": "bccfca8ed426a31397b34e2c35ebc1e0"
  },
  {
    "url": "posts/python/normal-errors.html",
    "revision": "23ab80bc7b2073dde3ab38068b1b608a"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "c6a09fd87d0206ac5e46f58f8b4b6ce4"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "3d40c2c26e76841249f6fb06d82b6123"
  },
  {
    "url": "posts/python/python-dynamic-import.html",
    "revision": "51730bf461f81bb19c465e182b5df342"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "a1b7b66c3513a7808c7dbbd1e988a15c"
  },
  {
    "url": "posts/python/python-metaclass.html",
    "revision": "6dcb4f69d3cbfe2a630bace2c6228c54"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "92372b1cf3be899fbbfd3287e15ebd12"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "87d67864e4a96a8ab607964ebda71e4e"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "3429c01cb4cd6fb98bef767d51f7f8f0"
  },
  {
    "url": "posts/python/whats-new-in-python3-8.html",
    "revision": "afc2778645d89d35c0ad4be0593ed680"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "94a2d183d6ecefbab60d4b21f2914222"
  },
  {
    "url": "tag/algorithm/index.html",
    "revision": "bc99492a28066fcd0716fc738474cfe9"
  },
  {
    "url": "tag/android/index.html",
    "revision": "0212b31fa8d26ac6293e8981c925c51c"
  },
  {
    "url": "tag/ansible/index.html",
    "revision": "17f08ca1f1f65a29534b38d7ec97f0b0"
  },
  {
    "url": "tag/api/index.html",
    "revision": "45f084541f0422b86be3ba9c656e4ba7"
  },
  {
    "url": "tag/aria2/index.html",
    "revision": "1c91fa575fc3e9807a18c8934ec97b1e"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "fc0c0e33c5e6205bc5ff02ceda5e51af"
  },
  {
    "url": "tag/context/index.html",
    "revision": "6a1c681461b9a2db49e9ed4fdf76febc"
  },
  {
    "url": "tag/database/index.html",
    "revision": "ede1e4fe3c9971ad7c85c4fea806f258"
  },
  {
    "url": "tag/devops/index.html",
    "revision": "a9611f342c1eb4a134f14c7a35f98f8f"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "b249984d123e17797ffca0ed6f6d646b"
  },
  {
    "url": "tag/emulator/index.html",
    "revision": "2b6b7f0ceb8ab633971f6bb5e4d7a1cb"
  },
  {
    "url": "tag/git/index.html",
    "revision": "c2a2b8523c0ae00cd391af23b7d12515"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "a5a9ba8221fd9ffca7b1c80787b42f9b"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "2d4d8a24219b8f5cb1f0579aa242bdda"
  },
  {
    "url": "tag/http/index.html",
    "revision": "738d4d540eaa6cba0c23477a7b58aff8"
  },
  {
    "url": "tag/index.html",
    "revision": "79b5c015fab967020ff63a2a357a69a8"
  },
  {
    "url": "tag/java/index.html",
    "revision": "b52af7225640496b34c17fb082dc519a"
  },
  {
    "url": "tag/java/page/2/index.html",
    "revision": "55167bcfc41def2cea6759019d547167"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "79d4c97691c93229a78857a9eb6a8519"
  },
  {
    "url": "tag/linux/page/2/index.html",
    "revision": "0a1f121502a8dc47cf3e27a0ab94f12f"
  },
  {
    "url": "tag/macos/index.html",
    "revision": "17918778e11313872a683962f8c61ff2"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "d8da7214cb1dbd31e068d269231f5d4f"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "e6cba42afd7dbc295fbc38702aaf2328"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "7b2a460d3e6f2e0b6297bcfc218ff1a5"
  },
  {
    "url": "tag/mq/index.html",
    "revision": "973b952567a01b01c582ecbc69dece44"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "1ed827696be0d45e0295bc51bc6b6b94"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "878868bfef98b7990db3c59a5dba055a"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "9de08225ec266f96a7811a4827985a6f"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "975c15c06efbbdb720ef2262504b61b9"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "208dc7cd56ede39708e0ecc2e555b05a"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "76ac6bb0901acc24581541fd443d6597"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "00db79b5df79e3eda6cb1c227e90d5d5"
  },
  {
    "url": "tag/other/index.html",
    "revision": "ba2f2c1cf69af5eeabc368a441741671"
  },
  {
    "url": "tag/python/index.html",
    "revision": "7a1424708ff719189a306fc5ff6a4aed"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "310e1294036aeb5cef8279bee6c2e5c9"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "6864a582aae83c5df39067155a141d73"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "49a689e49cbccd8368bf026f51bfd841"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "d97161899af324da3f401f66f15336f4"
  },
  {
    "url": "tag/termux/index.html",
    "revision": "5e4eaaf9ec4fd1e9f8433ba2781bb4cd"
  },
  {
    "url": "tag/trojan/index.html",
    "revision": "c555178345412469413d0abfe09c66a2"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "2699d5a11894ee3770b6c25e36a460e4"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "0ccae940bf45383e732edaf8b5183a98"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "54612818b56764c87c40aba701401c81"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "94ea44b4c270b158e9a9523e6ab14535"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "51fb1af408d5d7276c375fe65e32573d"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "bc780947fc3f3faef5bebad675f9d5fa"
  },
  {
    "url": "timeline/index.html",
    "revision": "9e81f1d6d06460d3aecb70ffae6fa3b6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
