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
    "revision": "beefbd8ed50ee092ece328050612a22e"
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
    "url": "assets/js/100.af30fd54.js",
    "revision": "b8d18705774f31d4726ab1634494063b"
  },
  {
    "url": "assets/js/101.f2b032e7.js",
    "revision": "f7313f0f5706c70edb74b32a69d42e3b"
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
    "url": "assets/js/119.7c4f176f.js",
    "revision": "4ec441381e62b7c57cd189b6029ba6df"
  },
  {
    "url": "assets/js/12.59f7cf82.js",
    "revision": "44778d8923656e5bde08546a328cb48d"
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
    "url": "assets/js/122.4cf3cf0d.js",
    "revision": "84908f9340f424f2d03aab7d993bd3a5"
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
    "url": "assets/js/13.72f75601.js",
    "revision": "fd7f2d86635ae3e8423ac825338ca0e3"
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
    "url": "assets/js/app.5b4fc48d.js",
    "revision": "80bbd7c9cadfb0d1fbf891e633ebc14f"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/algorithm/index.html",
    "revision": "46298b896c7684d5ff343a45854eda28"
  },
  {
    "url": "categories/database/index.html",
    "revision": "c516f0b8838a96bca9bd38d473b02c58"
  },
  {
    "url": "categories/devops/index.html",
    "revision": "e7eeb27cd9512edad2065dfe7befe468"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "6912f5d670479906389951b506476e04"
  },
  {
    "url": "categories/front/index.html",
    "revision": "069a9a28a4753235973371d09c13ddda"
  },
  {
    "url": "categories/git/index.html",
    "revision": "7511eb412a0156436769e7e3d05141f7"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "419b1bc8b5e116f24cbd88edec4b55e3"
  },
  {
    "url": "categories/http/index.html",
    "revision": "977a1cf88634e32714508af3d5b0be73"
  },
  {
    "url": "categories/index.html",
    "revision": "eaac70fc51941a85781ae3b57b785777"
  },
  {
    "url": "categories/java/index.html",
    "revision": "88ea50ae0445ef9444d0d977d72788cb"
  },
  {
    "url": "categories/java/page/2/index.html",
    "revision": "93f3b4a9c6da47ca7e6e202a51b4c3c5"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "b3fcf1d90ebeb20ea700fdd3c3481c9e"
  },
  {
    "url": "categories/linux/page/2/index.html",
    "revision": "ab08792688fa68e8688d2203a483d765"
  },
  {
    "url": "categories/macos/index.html",
    "revision": "4d78f120933c2004942c2989205c4cfd"
  },
  {
    "url": "categories/mq/index.html",
    "revision": "5ce127762e2d601d3c9f87de11c1e59d"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "e29726a23fcaa73f757c1008163806ad"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "fbe337ee7e174682050010bebc555e05"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "7dc6346ed03d926a295daf925859529e"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "7cafd4897bf02c28961f1626425ffc0f"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "7cd1a55e63a5dc2ad68f2d443af6b5ca"
  },
  {
    "url": "categories/other/index.html",
    "revision": "67b4f76baac4cf56f757b91602955eb3"
  },
  {
    "url": "categories/python/index.html",
    "revision": "785959a4aa8719d32f94a671cf7365be"
  },
  {
    "url": "categories/python/page/2/index.html",
    "revision": "37fa0f9d1bc408224ffe7d50a561000e"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "e176a41f7fa86685039fe0cc1646e84d"
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
    "revision": "bd0e7726e4eae5136d9a42fba66f3a3e"
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
    "revision": "33fa40a031aa84727da747d3ee6d1fc4"
  },
  {
    "url": "posts/database/SQL-constraints.html",
    "revision": "3f53e0e3233ce9d767b0a0c30e8af267"
  },
  {
    "url": "posts/database/SQL-keyword-order.html",
    "revision": "16ce265678313a7a6f8ef9dd2c882300"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "00e3d41bb520ff4a6ae292d1eb0b1401"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "fa4fe2d24a3f59d1fc5fe278e0a3a44f"
  },
  {
    "url": "posts/database/why-redis-fast.html",
    "revision": "255f6113c145fa3af6b9f9e68512f801"
  },
  {
    "url": "posts/devops/ansible-deploy-docker-compose-service.html",
    "revision": "add92e97ee06ef2cea9bc901aedd924e"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "5594640ec6a6b4b97133a84869cbd584"
  },
  {
    "url": "posts/docker/docker-host.html",
    "revision": "2ec538e7dbdb7b0d4c65daa72a747581"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "97a148e876c14ec53f4753d075acff44"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "05f2435f36c34b10bd318d034a5f6ce3"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "b3c627fe39ca8de70077fc5e9675d5a0"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "6e8260f78a46edbbef82877cf649b068"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "d56857234188dd30f0a554899650a5fb"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "1e2b47e8a691a509f92fccf9c0301173"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "264654908f3628c83d83ffd6db0ad8f5"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "d13c2f495b581ddbe8aaff6d08873410"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "5593537d9cb9b98f8db2bae15972e4f9"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "ab7cbafa4a1f29a5f7001b4a8a59bfc5"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "afb72fac19c34fe8440e26b1965d72bf"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "050cbb41c21d3f49800ab07ef58a23ed"
  },
  {
    "url": "posts/git/use-multi-access-token.html",
    "revision": "7e8931da0c7d26ec0e030ae399cd58d7"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "d4378179bb4937f5408bbc4491a3bde4"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "f32dca46724993af8560d839555e1840"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "2422ac1d4a529f86d8ded03bda3ce424"
  },
  {
    "url": "posts/http/https-shakehand.html",
    "revision": "7134f19e89ba2a4ecf47bcf7ff30cc6a"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "ed9f650a9b91277df92930474c20501f"
  },
  {
    "url": "posts/java/java-http-proxy.html",
    "revision": "2e250d7175a746770802138743a735d9"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "fe17b053b43c16cf8cb744de0be6bbe9"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "38fb1a2af4e56871588674d4392b3927"
  },
  {
    "url": "posts/java/java-spring-MyBatis-Annotation.html",
    "revision": "3b66d8434aeed4b16edf5c1f68ecf9d3"
  },
  {
    "url": "posts/java/java-Tetris.html",
    "revision": "a9df4ef17ca385efa2a7a113ff425b26"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "765eaa64340857be449f4d71505ce474"
  },
  {
    "url": "posts/java/spring-RedisTemplate.html",
    "revision": "39c2caf44b9f6e0101192f33c8fe4b01"
  },
  {
    "url": "posts/java/springboot-disable-autoconfig.html",
    "revision": "1f19d51cc346275a49df7acc606b7d0a"
  },
  {
    "url": "posts/java/springboot-schedule-task.html",
    "revision": "ec78f12cdb2b371b23e66c12b65ca30e"
  },
  {
    "url": "posts/java/springboot-swagger-ui-custom-config.html",
    "revision": "ef2738aff015352662bd22b682316c66"
  },
  {
    "url": "posts/java/TOTP.html",
    "revision": "84ed815a6a36e8af3f9d5d932573c0b3"
  },
  {
    "url": "posts/linux/docker-nginx-acme-trojan-go.html",
    "revision": "ff60f95e6ab759f2d9048767a2b0fed0"
  },
  {
    "url": "posts/linux/install-ubuntu-with-xrdp-in-termux.html",
    "revision": "c058f7a9ed6f9709bb527a9bc4cc793c"
  },
  {
    "url": "posts/linux/linux-chm2html.html",
    "revision": "e71e60b079e9f32ca789b1b6a157807d"
  },
  {
    "url": "posts/linux/linux-ecs.html",
    "revision": "b074981453159e6475cc7f7407cca2e7"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "9f15ac0fbfcb1d3d8a9726c2fd8bf5ee"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "c50c115f0cff1afcfd1485829411835b"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "bc3fa82f656880b982587ddef56984ad"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "dd2484f951d949045e46f566012b36cb"
  },
  {
    "url": "posts/linux/ubuntu-switch-sources.html",
    "revision": "27d12ff317b4c9cacad3edbb41216f0c"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "5a820fa82c28a205d60241bfc2fcff75"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "57c0b7a665863aed7b55d9abe8a200a0"
  },
  {
    "url": "posts/linux/wsl2-and-docker-compact-vdisk.html",
    "revision": "65c721442718e762b25071bfdd5865e3"
  },
  {
    "url": "posts/linux/wsl2-install.html",
    "revision": "8c0a13e8b4f6ce77b1437677d21829a0"
  },
  {
    "url": "posts/linux/wsl2-use-winip.html",
    "revision": "3e29369a5e250e3b1866c246a86724ec"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "e0e325849411e248b597b3ba9370b06c"
  },
  {
    "url": "posts/macos/android-emulator.html",
    "revision": "5b26724a0799c91ec4325c6a1aec4b26"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "284074513c755024810782e4edde24e7"
  },
  {
    "url": "posts/mq/ensure-not-repeatedly-consumed.html",
    "revision": "a5c5815c8118730a66e8e5c5b1c92928"
  },
  {
    "url": "posts/mq/ensure-order-of-mq.html",
    "revision": "26a35ce3e4126800abbc12fad92cce94"
  },
  {
    "url": "posts/mq/high-availability-of-mq.html",
    "revision": "799aa90711b7813345d1c190ac772853"
  },
  {
    "url": "posts/mq/mq-problems.html",
    "revision": "3e5d9091a5a629a0979106281b45ae47"
  },
  {
    "url": "posts/mq/why-mq.html",
    "revision": "3f12839458ce5dac0ab631b49979d873"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "bfc07928215111081ae548a7e669cec0"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "6759a218ef33b1f9d9c945c3d2933a7a"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "fe7c2e7ff098167dbc0e3e9e0c8e0dd3"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "55cd8ab0a0d388f01fb3ef20b38f21cd"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "3b56a19c1357c3d0441e282e2422abc8"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "80eb578ac535d2bd6e9b86e8c6634ea3"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "c47f5bade97b6a14f18eac5ca5c51d13"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "5fd9f916e0914fa33f22952709ea6b8e"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "c50479867d2829f79b820eceb702a098"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "1e632d9852ce9462b112141e53e67ba9"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "42b4c1ce7f5ad7ce48d213500dc03eca"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "8ba1b937edc90ec832fdd63356147820"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "722de918290b8c58aaa9495a2e97b8b7"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "7dbafb537a704ecb9501aa1a5d0fce8d"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "dafaf7a9130352d9e47f3987cdad3960"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "dbaed0b19ab4df1154a70b2f0647c325"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "8a519e26b0d76ec95f91856da3e24a62"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "3c82e5a1a19bf9b4a4fe55113401307d"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "9e6ad5708b6eeaab4fc296fcc09a131c"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "7189676d1fc38dd0c8ca83a65c389e9d"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "5fc3a156dbdd78a2b23c2853b513d2b8"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "9daa2ae97da25ec0727ce7b6a3acd96a"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "5b044ea7264ae674cd471d3cede90dda"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "61f7b177412d58431c44ea192cecb939"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "253ddebe27290477d4536026b87930ce"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "0a4b3da511b7f0d137abfc0efbd7b3c2"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "93b5cd5173c3eca1ee7673b364015ec7"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "8b55fd4858e84615b07aa043d480b000"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "db387e1d836e7cf0e218bb933d7b9323"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "41d0d3a9156aaa81ad6c817d5aa2bfd3"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "089619c07449c846b43e99502d1a099f"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "c3b11c1449d32dab4200a930f770ece0"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "ddc93fd04d16413d3ef42ca1cd86fa41"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "12aff681457e24ae344d04ee45c80413"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "f74a437c1f217fe7d97b7acf05e06a51"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "b6a83f43987a88d345ed208ee26e835d"
  },
  {
    "url": "posts/other/aria2-replace-thunder.html",
    "revision": "ad22ab7aabf3af668d66a10cdf4609c1"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "71cb5e97def4bfa1878d0e0e42cf2ca0"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "7f254949eb8405ae62794b00aa0ac4c0"
  },
  {
    "url": "posts/other/iqiyi-danmu-convert.html",
    "revision": "6d0ebbe57ca107bcf6057ae3c7b0957e"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "bad24620fcd93e7dc81f6dc3f6a949f3"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "18b3634d2c877fc4f9ada5e7a9e017a1"
  },
  {
    "url": "posts/python/deadlock.html",
    "revision": "08396b96dfca0bf6b58cf33cfa565423"
  },
  {
    "url": "posts/python/locust.html",
    "revision": "b6890b5ac9594f148ff8ee9f21564cd4"
  },
  {
    "url": "posts/python/normal-errors.html",
    "revision": "8d2d06e0c6a0cf45feef44f006295eaa"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "84bd57907b5aa21cb6181898edeeed53"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "60525e1bad8c0b300bd2dd2734bb6c98"
  },
  {
    "url": "posts/python/python-dynamic-import.html",
    "revision": "1749a669f0c3620d1ad5e8bed0017575"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "b30915a83cc3769d4d82f11dd5697130"
  },
  {
    "url": "posts/python/python-metaclass.html",
    "revision": "7933abc9c6cbb452cba2da34c8f01324"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "2d95f839a62d26ebfb034933ae6ee6a7"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "65382e2ba24a23caa822614f38fffc6c"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "b3b454e38bd0a7365bb9f92736ee94f6"
  },
  {
    "url": "posts/python/whats-new-in-python3-8.html",
    "revision": "e8902d796d0d7f618bcf9c1537faa93b"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "5c0471efcc76a1e307ab3c8530d443c9"
  },
  {
    "url": "tag/algorithm/index.html",
    "revision": "28472780c5b626288593794831011c14"
  },
  {
    "url": "tag/android/index.html",
    "revision": "0dd6c62f2751ea9a0112ba42866f638d"
  },
  {
    "url": "tag/ansible/index.html",
    "revision": "fb5ec1e41ed7884e8319450db4b699f2"
  },
  {
    "url": "tag/api/index.html",
    "revision": "14bef55392bc77c6d5954f65680e095e"
  },
  {
    "url": "tag/aria2/index.html",
    "revision": "d4c8917e863761037ac699d7342679de"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "633e46d20d29aa998398e086f14b533d"
  },
  {
    "url": "tag/context/index.html",
    "revision": "fc74d065ced6265950754005aba8ee1f"
  },
  {
    "url": "tag/database/index.html",
    "revision": "09152bb0062ef0f1b8fe71d00c323b31"
  },
  {
    "url": "tag/devops/index.html",
    "revision": "79a039d421a8ea8c75501af338e4627e"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "2107ecb111755df821b7464d05f879eb"
  },
  {
    "url": "tag/emulator/index.html",
    "revision": "3c28101b708d6e393d720c8f1f4827dc"
  },
  {
    "url": "tag/git/index.html",
    "revision": "20ccfb47ed3f9b4ad603db502a8f9539"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "df0e2da59430aad2b7607ef1724bf350"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "0556dce3d34cd5c6b773c8f2fbec6013"
  },
  {
    "url": "tag/http/index.html",
    "revision": "1fd4699ad47489113d55a3720a547ca0"
  },
  {
    "url": "tag/index.html",
    "revision": "5148e5654e73ef6b498b585ba9e8227a"
  },
  {
    "url": "tag/java/index.html",
    "revision": "f86306897cc3c75eeb3507ac69266b88"
  },
  {
    "url": "tag/java/page/2/index.html",
    "revision": "b4f4932b7b6fb1d4e931243d150d88d3"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "bd839f84c395893b18fa6f5fc3d7cb45"
  },
  {
    "url": "tag/linux/page/2/index.html",
    "revision": "64fee945d417af1821235f17c58df115"
  },
  {
    "url": "tag/macos/index.html",
    "revision": "22944819a47df7fb6c0717709d355878"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "183cca5e27164e8f8c926c9d63b2dbdf"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "565290bca300a180deafbd20af1d542d"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "e4cae6a99725d7daea848b3b60bbd207"
  },
  {
    "url": "tag/mq/index.html",
    "revision": "95e91305d68cdaec076aa4d86863ff81"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "e372ff17d61660d54973cac9f75dc859"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "a2a938276d8a769ff351806c604e9fd5"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "2e9345ed69e0fc7ae44927f524ee5f0a"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "b9eb91c63befa0f6c807e4b4fee60d1e"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "21e16661cc3c7afffda93297b2594540"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "1189aa3a85874bf35d4f54876d5f44d7"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "c92d2eabcfd2c2f360156792b2a60e96"
  },
  {
    "url": "tag/other/index.html",
    "revision": "ba77ecf90f8ca023b86bc0358c8643bb"
  },
  {
    "url": "tag/python/index.html",
    "revision": "1895c6a249ded5522a45d24ce829a8f2"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "908957a60fc96a5a8fe5f57ed0922705"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "23790d2629081db866e50e36dc5ccc48"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "3551806775a0511ed1fa2e52e1093a93"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "931d5283ef244517d162ba05fa1cb862"
  },
  {
    "url": "tag/termux/index.html",
    "revision": "5685e876792d461d98fe239cf2690f3b"
  },
  {
    "url": "tag/trojan/index.html",
    "revision": "b32cfedce1ed743e134f82af6c11df7e"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "d3e53a56e33ce3bdcc85676233bc4bf9"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "cc5a55c0f124a5c15a80d182f2555d57"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "656e6a1a80a516c5b22ca86e2ae94b70"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "2f4e2b9efd009e3f16ab566496665a65"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "2248ea43e2fc39b1f93e2de47865d191"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "401214600fa3f37ab25501cb7843782a"
  },
  {
    "url": "timeline/index.html",
    "revision": "25c62efffb015b865926f5299305a4bd"
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
