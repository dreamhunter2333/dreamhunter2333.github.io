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
    "revision": "f4f56e5f696bcd0f4be9d4d95a16a1f5"
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
    "url": "assets/js/120.edae196a.js",
    "revision": "fc3b50e3d23d449f0251b67505a9f640"
  },
  {
    "url": "assets/js/121.1d73d044.js",
    "revision": "0280b743bac64745bebc4349e4705791"
  },
  {
    "url": "assets/js/122.88d08572.js",
    "revision": "f2be46d646cda295efcb1e84e95829e5"
  },
  {
    "url": "assets/js/123.6e03dd2e.js",
    "revision": "92063317759dde98a7b19bd477090723"
  },
  {
    "url": "assets/js/124.39f9faee.js",
    "revision": "9261304ae9105329ed1b70c15646cceb"
  },
  {
    "url": "assets/js/125.5b60988a.js",
    "revision": "1d7144e987bf6b9f3a2d70a72e452a32"
  },
  {
    "url": "assets/js/126.86144b07.js",
    "revision": "38c172decb804cc3a72d2fd7314e7918"
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
    "url": "assets/js/57.c98cb502.js",
    "revision": "65595725980b2da809220740e14de536"
  },
  {
    "url": "assets/js/58.3a9977ff.js",
    "revision": "3790e2865ca43cc0f84dce5b4397c8fb"
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
    "url": "assets/js/69.813cad00.js",
    "revision": "45119898769cb569500ebec68f9bcab0"
  },
  {
    "url": "assets/js/7.9f0042d2.js",
    "revision": "481e56428cfcf7cca54b3e5ca3f23030"
  },
  {
    "url": "assets/js/70.bfd84e3f.js",
    "revision": "6f3ad1c2bc62ccec76405e5d601635a3"
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
    "url": "assets/js/app.b7829069.js",
    "revision": "81b8e15df10b6a91120751e34da13c40"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/algorithm/index.html",
    "revision": "862955ca53d66ab65bb932534af953af"
  },
  {
    "url": "categories/database/index.html",
    "revision": "002a4e7336ecc11f82b9cb53f8592711"
  },
  {
    "url": "categories/devops/index.html",
    "revision": "e74f286108e683cb4ff6711dd2801f4c"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "b99ee43424e5251cd79fec9acce0161e"
  },
  {
    "url": "categories/front/index.html",
    "revision": "ee7f8bc82a5e2c74b9cb02ed3ba6acf8"
  },
  {
    "url": "categories/git/index.html",
    "revision": "d6f462113d4dba3b7fab6a60f2c997d6"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "a4597ca5a38ca25d10d0f368850ef57e"
  },
  {
    "url": "categories/http/index.html",
    "revision": "93c7d46e901e99d83648ad420ec0cedb"
  },
  {
    "url": "categories/index.html",
    "revision": "6300b1336fee1ce7eea9fed834b78ab6"
  },
  {
    "url": "categories/java/index.html",
    "revision": "af00f8d7d3985916c6cf0c72bbc55423"
  },
  {
    "url": "categories/java/page/2/index.html",
    "revision": "d844d5cb442d58e33e36bf745fb60f9b"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "0f1c8ad117c51d18f1f8677cf0b08151"
  },
  {
    "url": "categories/linux/page/2/index.html",
    "revision": "3b6ead19f5da91228848da02be29bc1f"
  },
  {
    "url": "categories/macos/index.html",
    "revision": "b5c935ad2a06db5cda253c2d0594be47"
  },
  {
    "url": "categories/mq/index.html",
    "revision": "87da7fb3aa8c92f7942b0ac1806adec9"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "5749f89756e5d76743efddf9cbd37d40"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "2a9d1520b2cc138e934437036b427314"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "e7ac22b8e59d77ea6b7d1a869a341d12"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "31a584b2e254b9f5d09ca75b3debe50e"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "220aa18db094f7e535b4f814bcfce908"
  },
  {
    "url": "categories/other/index.html",
    "revision": "b89ed412cfca32f2ca059f7e4638a2f3"
  },
  {
    "url": "categories/python/index.html",
    "revision": "1490a0d4e523deee8bd6df848e851b2c"
  },
  {
    "url": "categories/python/page/2/index.html",
    "revision": "2cc72ba536f9ad766502d5c8f4cce3ca"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "e336909f799e837595481f2251ff088a"
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
    "revision": "86357c75e9255704c9cd8432bf90d25f"
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
    "revision": "d2c5e405362fd6e46748019c6e611b3c"
  },
  {
    "url": "posts/database/SQL-constraints.html",
    "revision": "ec7893a385d5451d625afa0af2195e0e"
  },
  {
    "url": "posts/database/SQL-keyword-order.html",
    "revision": "f4d419bc986c1001a536364a9bc4e9fd"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "1634713378adc56961788dc6f9e0b126"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "86afbd037d3c76b639cbde072cd95f16"
  },
  {
    "url": "posts/database/why-redis-fast.html",
    "revision": "23155787f49ecf09664ac54d664dfab4"
  },
  {
    "url": "posts/devops/ansible-deploy-docker-compose-service.html",
    "revision": "54e5323e3f4eeabaf041c2d8d2cc748b"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "145a268761ed63a76791fe03650e1e2a"
  },
  {
    "url": "posts/docker/docker-host.html",
    "revision": "241b4bc75ec61e617c4b74242d80f740"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "f61a8d21eecf4e95eaf413c58514e6a2"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "d769324482de59b83042645d04297f06"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "7e0bb40a6b288aafa82de044220a4829"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "e2940046b3db1ed17a43fa1182c306a2"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "c2dabe845a905505c9e468f3cce20698"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "cf09522f7b2876b94a0a38f5eb4ab34c"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "60e6208194472047bd4395e2d407d2b5"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "2db48342999113079660468eb05ca8e6"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "078619ed7c75492e32245527161f406b"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "1aed18fdc06f51c3fea5dd9ed0a84c7f"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "28fef317e9ac61dc91607c07b0c4a4cd"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "7825912ff3ab7d2e38298421fe413f95"
  },
  {
    "url": "posts/git/use-multi-access-token.html",
    "revision": "e06cfc36f04540f9d6be33ef2df36c3a"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "2ebe7f8b1ee9ce0d364fcfb0b3c6a0e8"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "0376fd395b5a4ca5745f58a7075977f3"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "b0169efdd082132f3ff8a39d14a93dba"
  },
  {
    "url": "posts/http/https-shakehand.html",
    "revision": "983521b97551be113b98f7013c1af6de"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "2ecf622acf829da752a2cfa9adc3b912"
  },
  {
    "url": "posts/java/java-http-proxy.html",
    "revision": "685ada8db48818afd45defd93a075c29"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "a01f2a3aee66f083f182ffb1408566b3"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "5801917d188dc0e48c8b15c4ffb1d027"
  },
  {
    "url": "posts/java/java-spring-MyBatis-Annotation.html",
    "revision": "460155c014ec6713527418935e2d660d"
  },
  {
    "url": "posts/java/java-Tetris.html",
    "revision": "a5d963cb1886956d164b1be8adb05da7"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "a69a5711fb1b6e37ebe07f1f5fa8901e"
  },
  {
    "url": "posts/java/spring-RedisTemplate.html",
    "revision": "3c2ff99ae64dd3f2ddf8c8dc0424ca15"
  },
  {
    "url": "posts/java/springboot-disable-autoconfig.html",
    "revision": "b427bd3a1d4f120e3dd228d0c960f3a9"
  },
  {
    "url": "posts/java/springboot-schedule-task.html",
    "revision": "b5c4d02a1fd0d9cf5f316ab9623cd94b"
  },
  {
    "url": "posts/java/springboot-swagger-ui-custom-config.html",
    "revision": "797c949ed059edf91c953740566e7f71"
  },
  {
    "url": "posts/java/TOTP.html",
    "revision": "83cd37c51cb516cac9b59b6fa4f70acb"
  },
  {
    "url": "posts/linux/docker-nginx-acme-trojan-go.html",
    "revision": "53d3fe20612151b221c93b11eea07701"
  },
  {
    "url": "posts/linux/install-ubuntu-with-xrdp-in-termux.html",
    "revision": "f2edf564ec4ef3e819b98ee7f8c51e84"
  },
  {
    "url": "posts/linux/linux-chm2html.html",
    "revision": "462334795210a762bee5f009420dfe40"
  },
  {
    "url": "posts/linux/linux-ecs.html",
    "revision": "3588580da42c3f6a028ea0a12b995d9c"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "8fb369086b17e5b34ce0c744584dece5"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "40d20281ece348badff627edf26ad66f"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "2474a9607b7bd65a35c41d01acfc00eb"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "9b012f4cd9727057adca5e2fb2f52578"
  },
  {
    "url": "posts/linux/ubuntu-switch-sources.html",
    "revision": "8fcea2295d82b75e797a0e77a41526d3"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "bc9f74ca701d7abf2c947033cf30fed3"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "c3553b3bcd14b8bce24fee5443f6e7e9"
  },
  {
    "url": "posts/linux/wsl2-and-docker-compact-vdisk.html",
    "revision": "315632bdc282c8a4f80cbd3301d67aa6"
  },
  {
    "url": "posts/linux/wsl2-install.html",
    "revision": "165500a84bdc1c4ff211df3ad661ff11"
  },
  {
    "url": "posts/linux/wsl2-use-winip.html",
    "revision": "f2a0fff5461debc7d7f4337a9159133c"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "829425df3b876297863782086690d454"
  },
  {
    "url": "posts/macos/android-emulator.html",
    "revision": "bff0d1a5ab2f3c07eebbe3058bfd21ee"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "5fa825ef956d7dc1dc68d0ae142c53e7"
  },
  {
    "url": "posts/mq/ensure-not-repeatedly-consumed.html",
    "revision": "fc0a178b419672c94e447298945557a6"
  },
  {
    "url": "posts/mq/ensure-order-of-mq.html",
    "revision": "0fc66456bdd86041d8ae87dee2e6e7f9"
  },
  {
    "url": "posts/mq/high-availability-of-mq.html",
    "revision": "a208364602a8559521cd9dd8d3837b73"
  },
  {
    "url": "posts/mq/mq-problems.html",
    "revision": "49a946a2cac1d05d62e4c80eaab3fac8"
  },
  {
    "url": "posts/mq/why-mq.html",
    "revision": "e515d54298be44884dd7b6c58b2598ea"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "b60781f2a2521a956dcf0f628e33ad7e"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "b72d2b60763dc34243daceee9b022739"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "eb1ee7559e1727aa4fb94420f6352662"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "9a5dda135207f713598162aa248aba95"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "516b3aacfac647076fcabe553282f04f"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "ab9606d3c861f02e350780f4a74a0ec7"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "cc1cb84bc696805e77e42f63e01deaec"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "e9721f01b1fbbe86eaa6e4a5f6471803"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "ff93e99ab5b44544a672875be5510f08"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "0d2f7a29de19e098b46ded3d27e32415"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "7294f13f1376b79e1a64d78ae1ebc320"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "492ee83159bb2081fea152296d44a51c"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "7e5425a6b3b1df2bef3a6dc038accc77"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "01c2b18fcd1f7544114c2b66e91eb7ad"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "8ad253ca8478bae392205a645f507dab"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "a63a917a48dbca5d103a6f5fa62d4543"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "b59128fa2ce212a857bb93ee1d57ed48"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "293ad11c4b028d07bab84df66fc68e65"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "0d53ff08175560a79c002c1972d88e6d"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "4fe50a009a41e932da6f91d042218665"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "6f33c42129d8b37e68cbfa1a67dad22f"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "86b4c7721ced5208120743feadca8849"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "b6b1f8cb94ef6b0c647ead65a717e72c"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "c6abeaecc7d880239e4c61ec91ccf95a"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "f8fa687336d961ce1b9bbda7fa0fa818"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "7bf85a77426c9e5e8440bf1045e8091d"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "345ad6eb736ae113a986b4e44b80ca12"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "6baa9177ba3e77a58a0813ecf635b797"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "763670a3ab9edd22db1119b0134f2f7e"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "5a0e3f5738391d8097d3c88a7a28bda6"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "5ce62d02499f52a7d5cb1f5170ca2441"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "c529820d47cc3f3b3beb907570afc581"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "3667072cce47d1bb5a7688290b46ed5a"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "24473c0a8b58c292c3197139339b969e"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "3eae71f302271b05849b60bcb2e4ea61"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "5cf9e4fc1dbea2158acc571b4729cb97"
  },
  {
    "url": "posts/other/aria2-replace-thunder.html",
    "revision": "773bae10ee6285f7958140da0123d903"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "e4e0ed8098e71c23a089c0338f0a1140"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "d5e2c589c8b8bbf46411e171767d08db"
  },
  {
    "url": "posts/other/iqiyi-danmu-convert.html",
    "revision": "9b6ee11794934bfc5d4fa36fd8b04b3c"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "575bb29abb1f3b54a8b02eea8622c2f3"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "a32781d5ae448157b4b5c33c2378ef15"
  },
  {
    "url": "posts/python/deadlock.html",
    "revision": "1da401848d86b7ca9694880671a7978f"
  },
  {
    "url": "posts/python/locust.html",
    "revision": "6b84635ece2c403178ecd1667b70b95e"
  },
  {
    "url": "posts/python/normal-errors.html",
    "revision": "41aa964c5e4ec853d2bca49c4f9ed110"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "664f505928625b597d9ff02a9eb57a3e"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "733c17c64a78ccc0dfe73257a2244898"
  },
  {
    "url": "posts/python/python-dynamic-import.html",
    "revision": "11a65e16900e2cf7ba30b4d41563ca2c"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "0730fc2661d7119bc26dd02594b9af2f"
  },
  {
    "url": "posts/python/python-metaclass.html",
    "revision": "5befcdb23020557212e07d4d4ba4b95b"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "c85f8f677bbf7b77c73b2d328d9ba93a"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "a0e53e3d9af7f3900bf85402518b66c3"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "d3add568bbadeec7500651e231333d19"
  },
  {
    "url": "posts/python/whats-new-in-python3-8.html",
    "revision": "75ebc3f2a866995a9f2ccc917b91190a"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "06875aebc68c512669f381a8ee71d2be"
  },
  {
    "url": "tag/algorithm/index.html",
    "revision": "4dafa385dfa5345939dd61f7c0ac979e"
  },
  {
    "url": "tag/android/index.html",
    "revision": "da57f8e67bc94c6c89e92a4850a281f5"
  },
  {
    "url": "tag/ansible/index.html",
    "revision": "9f0ed5f34287992e322db126e948ffb7"
  },
  {
    "url": "tag/api/index.html",
    "revision": "b03d32471d3709b4a1b1b57ab0009efc"
  },
  {
    "url": "tag/aria2/index.html",
    "revision": "3865b630c9762078b9258c184e57c2be"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "ee31fcf8007b6266b6811b13582c2e64"
  },
  {
    "url": "tag/context/index.html",
    "revision": "17b7f9d189d269fb3781406a7dbb9a32"
  },
  {
    "url": "tag/database/index.html",
    "revision": "e67de155efa9f690de7d30cab97606e4"
  },
  {
    "url": "tag/devops/index.html",
    "revision": "db59dff7353286781d04e7cced545198"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "4c0de76d364efaa3d1a5bd0732ac5d7c"
  },
  {
    "url": "tag/emulator/index.html",
    "revision": "581355435bcb1bd6633b407c1b5f7cd6"
  },
  {
    "url": "tag/git/index.html",
    "revision": "b7e86f24453b454e88c3a58029176380"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "2b8c6ca49ce3295b3d8c6ff0c7a72e5c"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "e97e965415978c69f6f7ec9331086f18"
  },
  {
    "url": "tag/http/index.html",
    "revision": "b076199cbb7678b7f0dea90c5a3d7bff"
  },
  {
    "url": "tag/index.html",
    "revision": "4714f2b482ee8f03b463e72bb02ad746"
  },
  {
    "url": "tag/java/index.html",
    "revision": "cb42bbcc86734d021bda2c5c4d2cef7e"
  },
  {
    "url": "tag/java/page/2/index.html",
    "revision": "305ac64a8ffe875efcd154278424d3a0"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "c1e3d94f2160aaa3ffa05aa8fe881dd4"
  },
  {
    "url": "tag/linux/page/2/index.html",
    "revision": "5ddb3c24ebff8ec03c48164ba8d8199f"
  },
  {
    "url": "tag/macos/index.html",
    "revision": "8c1f90133c1ea9ccaa8634210af12db7"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "04cc3fe9cbf6b0d238ebb022dc533110"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "273e10225db515df99e9a7c58f735cd3"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "adff063bb2c20dd13930a042006a5ffc"
  },
  {
    "url": "tag/mq/index.html",
    "revision": "e15f1c4173875291237a9d033e379c48"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "d49e12bf49a76249ebff4f2f976cdf62"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "8313c020177ea05a59e804dd576efadd"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "6d37478e37561f0ed71bcead88cf9dca"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "c1d2c77cf512f56ac13f6e7e9c81230d"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "755aabd167d13c44a34c1dabe2cfa35d"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "70e86c1b0794996c16accd6aaa5324b7"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "f0ce10b8418964ec3a70135864fa6c78"
  },
  {
    "url": "tag/other/index.html",
    "revision": "9bdd643aefcddb6cdd91026e66d53959"
  },
  {
    "url": "tag/python/index.html",
    "revision": "fe8af358e2a20b6c9900ef8dca296665"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "bd13b3c46efd85a43c91bb574e11779b"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "fb2f503f371f7048b2dda5bcb2ee44bf"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "7323ad5cf3b847acb973d7c6b0588d20"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "9c2d39864ab803a87933d8495cab5307"
  },
  {
    "url": "tag/termux/index.html",
    "revision": "03e90dd2345bcc77d54e9dac2f4d487d"
  },
  {
    "url": "tag/trojan/index.html",
    "revision": "06b9e92fde007f5988ce338e61004919"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "ee33634d0d7eb679f65b3370959fd3a2"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "9bd6fa580788b85d4409ebad7ad1d759"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "d927b1b796e3db5b61fef1ddf40c3659"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "f03acbc3b9f6b1008c6dc9dc3ea078dc"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "bf97c0c7fda62a69a0c9c5a081cc840f"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "15313b05ce6230d35c5d047a41999cf5"
  },
  {
    "url": "timeline/index.html",
    "revision": "94dfbe2e0a6602d2f9d9bcb4886006d9"
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
