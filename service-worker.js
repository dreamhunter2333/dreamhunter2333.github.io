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
    "revision": "cbd30ad76a82e1c36522f8686b489cfb"
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
    "url": "assets/js/122.6e675565.js",
    "revision": "d122839d0f08e4677db89f91d10a221d"
  },
  {
    "url": "assets/js/123.6e03dd2e.js",
    "revision": "92063317759dde98a7b19bd477090723"
  },
  {
    "url": "assets/js/124.f8892119.js",
    "revision": "ddf03d11ad87cb7b8df72f19a8643e55"
  },
  {
    "url": "assets/js/125.fd8ac14d.js",
    "revision": "73d244aecc9b2c07221b94ba08777bec"
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
    "url": "assets/js/20.09bfcd09.js",
    "revision": "c31cf9f5ef63f446807536a6aa7dc4c2"
  },
  {
    "url": "assets/js/21.54bb6b89.js",
    "revision": "8341a1fd95e37e6a3e3d188054a1fa79"
  },
  {
    "url": "assets/js/22.a9968cd7.js",
    "revision": "d3618249066d675b784fb8b0b30b8df1"
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
    "url": "assets/js/app.d4901565.js",
    "revision": "e6711bcdb6a1b233f22996c409307d22"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/algorithm/index.html",
    "revision": "0de60e64f371d0d89fa32990d310394d"
  },
  {
    "url": "categories/database/index.html",
    "revision": "e28e654e9323c230cb606b9501305e54"
  },
  {
    "url": "categories/devops/index.html",
    "revision": "d581256b4a127a77ddac12d5313c540b"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "37384317ba6528fd1581942627c46cd8"
  },
  {
    "url": "categories/front/index.html",
    "revision": "d59e8e9f70ae5b411904b2f2e74cd1a2"
  },
  {
    "url": "categories/git/index.html",
    "revision": "eb8e776fd4c38c2de25082a067b4df79"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "a676088071c0e846f39425986ba05438"
  },
  {
    "url": "categories/http/index.html",
    "revision": "e7a781d54d563bda64584e8dbb964c9f"
  },
  {
    "url": "categories/index.html",
    "revision": "779b155a8b30a866ecdcbcad9e833a2e"
  },
  {
    "url": "categories/java/index.html",
    "revision": "0aaaabb6dcf289aa6ba5e76c7a14d704"
  },
  {
    "url": "categories/java/page/2/index.html",
    "revision": "cadb1858ed4f528aa799c65c0cfffa98"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "c6e839214ea1b3eae53a552d2900f814"
  },
  {
    "url": "categories/linux/page/2/index.html",
    "revision": "3d61b900e6940b355eeca0dbdb8ca5e5"
  },
  {
    "url": "categories/macos/index.html",
    "revision": "4baa6519d72da11d4dda324cfd5fb73d"
  },
  {
    "url": "categories/mq/index.html",
    "revision": "b404d39762c14051f0a70a3c91bd5e13"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "070018891e5a7ee611a1ae7852d89b54"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "85a06b005863be23df3cd55351e5b2b4"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "a39526a081b4687ad65c408904b7c83c"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "a48216a973faf1bac72e4849aa811bf4"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "3474b5c4dc7ca894bbd183a49bdd3f5f"
  },
  {
    "url": "categories/other/index.html",
    "revision": "16f82b11df420817f5bbb761fff2af7e"
  },
  {
    "url": "categories/python/index.html",
    "revision": "9a066f8db5ddcb00d55fab7c1a7ce981"
  },
  {
    "url": "categories/python/page/2/index.html",
    "revision": "a675aca5b00814d77e0a24fea1e97d7e"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "2f6395e0718e826ef6a12684df81de09"
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
    "revision": "5b404c9f0cc7bc22f31ba3be67ddf093"
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
    "revision": "43b3ee0779e47730b687b60cdeb4ba4b"
  },
  {
    "url": "posts/database/SQL-constraints.html",
    "revision": "70761383260626d3881fa912968b6116"
  },
  {
    "url": "posts/database/SQL-keyword-order.html",
    "revision": "5e36acd55e799f0bc85ee97e15cfa91c"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "8a980a53c354ee9fa378c668fcd7686d"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "84877f5a1ee34adedcf68df051f90db2"
  },
  {
    "url": "posts/database/why-redis-fast.html",
    "revision": "c61a7960151c6770ae36bf4dcfa450a3"
  },
  {
    "url": "posts/devops/ansible-deploy-docker-compose-service.html",
    "revision": "dfddadaf6b5fdedb0d8977ae003bcdf3"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "4e0c49eba686ecc70b770c5b13038e4b"
  },
  {
    "url": "posts/docker/docker-host.html",
    "revision": "d6722ddb70c14074aa6b794d4062ef69"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "290fe9b51d2cc2abb801f84ff4ba1c69"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "9992be09792339250f8cca240d9524d3"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "23d5494980d231695355ece4a6426b6a"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "10307a90709f6f91f3d39d710f6c554a"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "a6f9939ad74313ed1b424346d1e9e9ec"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "1af332d1ce652d62b0333a2d46986344"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "1c3a9f78e6ccc6b72e9cabb24dd2c98b"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "2e3b9486b28d9fbf25a61b51896eeb91"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "4e2ee7a4797769595c486be69fafa75e"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "2271aaae16e5c02ccbc70414ec6c4f10"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "22f1375e6611303c51dfe827bcc4e98a"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "4fbd57b457c876e22b258e046b2394e0"
  },
  {
    "url": "posts/git/use-multi-access-token.html",
    "revision": "c81bb91c45a0f43c81924aa125a93368"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "c581cbff28b0069c625efb890a90c2ef"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "a40d6aeab4fe704a3e3d2951146efd07"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "3d3fe71f81bfd673bb6420e366a29744"
  },
  {
    "url": "posts/http/https-shakehand.html",
    "revision": "8ec62bf2da9ca00cb569b759878c3f18"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "2f69267188f19a069f614723aca86fb2"
  },
  {
    "url": "posts/java/java-http-proxy.html",
    "revision": "8aabb5a46c948a5f025ea974c73d63d3"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "29ec290dbb9a3907f83445e74fb2dace"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "9582961ffe7c4f17a2b052a7ac3a82a0"
  },
  {
    "url": "posts/java/java-spring-MyBatis-Annotation.html",
    "revision": "28b6a416e2a0723a4c4a99e14e2d0f67"
  },
  {
    "url": "posts/java/java-Tetris.html",
    "revision": "b1108a28fa14a27111626c0dff4f9c75"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "2214afa34bbf1cb0ad692384b554631e"
  },
  {
    "url": "posts/java/spring-RedisTemplate.html",
    "revision": "da55ef9b38c118260492f98c23892469"
  },
  {
    "url": "posts/java/springboot-disable-autoconfig.html",
    "revision": "f17444b8a7ced3c3e27c2f7cacd8ad84"
  },
  {
    "url": "posts/java/springboot-schedule-task.html",
    "revision": "e36e6bd9c5b947dda4287a599af7884e"
  },
  {
    "url": "posts/java/springboot-swagger-ui-custom-config.html",
    "revision": "d44918abff405d548d81edeccba71c2b"
  },
  {
    "url": "posts/java/TOTP.html",
    "revision": "122c81e36ada7633ad032473faeab5b9"
  },
  {
    "url": "posts/linux/docker-nginx-acme-trojan-go.html",
    "revision": "f4ae6468110d61cb2a72cde24c07f636"
  },
  {
    "url": "posts/linux/install-ubuntu-with-xrdp-in-termux.html",
    "revision": "f891a686363cae743b5384ec2549c0d6"
  },
  {
    "url": "posts/linux/linux-chm2html.html",
    "revision": "71b47dda9ca02d0e42b5720a19e77bae"
  },
  {
    "url": "posts/linux/linux-ecs.html",
    "revision": "f4c256f137339d4b040e654c92d825ac"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "04d4d14dd9520b167f764e7be1fa75f7"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "38187b529b28c4c78efa16e43e56f940"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "395eeefd66e9771bc467677652be0f5b"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "294b617df4a134ffea53d88cfa2d2552"
  },
  {
    "url": "posts/linux/ubuntu-switch-sources.html",
    "revision": "12e5b8bd7d8080df16b1ce906d8247a8"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "70c4f25e90e65c7bd4fb1f8337e5f821"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "c5bc266d58c40a7b4e17c075c6bdc592"
  },
  {
    "url": "posts/linux/wsl2-and-docker-compact-vdisk.html",
    "revision": "8217af55ad45e44477cf4ecaef888772"
  },
  {
    "url": "posts/linux/wsl2-install.html",
    "revision": "677839a4ecd3c3ed80850ad2281b2562"
  },
  {
    "url": "posts/linux/wsl2-use-winip.html",
    "revision": "7b75219732d4f503c6bf01d559c95b95"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "6ebbc37cc3383f37e856321928496e2b"
  },
  {
    "url": "posts/macos/android-emulator.html",
    "revision": "1278138c733973e8d13d19ff0f6156c4"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "7a4b9fccec3aee4ad6a46e0244be4bfd"
  },
  {
    "url": "posts/mq/ensure-not-repeatedly-consumed.html",
    "revision": "54934339fad2086a1cae0dc4dd242cc0"
  },
  {
    "url": "posts/mq/ensure-order-of-mq.html",
    "revision": "efe1fa0c6607e97e2285c75f95a07e2f"
  },
  {
    "url": "posts/mq/high-availability-of-mq.html",
    "revision": "5cecce0dfa27231574904970acb5a4d5"
  },
  {
    "url": "posts/mq/mq-problems.html",
    "revision": "d71ccc0e85baa5c3dfc85697b8c2251f"
  },
  {
    "url": "posts/mq/why-mq.html",
    "revision": "396c3f53ed2b04064a60e8996d3b490b"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "dc03501e1e4079c75d735b1f0f8c6249"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "01b6f351f4d19a7146ad1c5d37d683c3"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "8c818022bcab5039f21c36a15101816b"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "76b55a113a66b87559d0111ca0e869db"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "2c383610cd9bacbbbd1151a2b80e629c"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "275eca8c29c82406b4604b76143a35de"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "6bc5bc58337e47f17adb3914716919f2"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "3c6f81e20e67f10e46f20b197cf6890b"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "b9f48132ce11026435299ad815e0d1de"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "15c117387b1ff644322e36456974250e"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "fd97a5fb5af87a977f302f2305bea552"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "0235d45e45a14899e7a94ea59ed12a67"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "034c88cb636692f3732f16b3ff4d8f63"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "b1f2ca2da034f8b55232ff47abcfea34"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "5b2dc98c88906bbb6e16c035fa3e0c81"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "4a726bfc0a10c292805747afc155f86c"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "1c7699318bca78efaea7e117e9e1f34d"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "d76dc30107ddaa1b552d3ddd4b772ed2"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "d53cc091c1d954c6adcc012e7f494896"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "1c746c6fe4842a13e57929229a089e4c"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "3ee614db5b8fcc45790c1787642f08b4"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "e3fe9327addd9cdc02246d17a63a4932"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "18b645c3f5b2e1d1033b6ecf480b04f8"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "08896651a13df383319e936e69ce658c"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "0522deda5e39f5698a80df57e9b4d369"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "864b9b72b98ecf56b031eac6d1b35853"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "2ce637320ae30bf7850829db36ffea15"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "6fe8b2b229db3a66765ba1b5a9e165d0"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "ea8319a2d38feedba2aab88ee6e81c8f"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "4e7ef56da4578617ed6f864ab7c5481b"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "a8597f775a5cd2cd435ca49f5c25ad11"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "b48848e20862b4eff568c1bf1f62500b"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "0101bcdfe35244af645104e887cee066"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "7cb5c57e3fc33846400e7a42c1d4fbf3"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "bd918b833643d4f6a4499e8b17c09d23"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "74b78900af16911dca976b7c966cf878"
  },
  {
    "url": "posts/other/aria2-replace-thunder.html",
    "revision": "6e421c63f3b4c921f7c9097fca7853c4"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "1525d00783388a7ea58c88c9d1ff137a"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "5c45f05474019146dbe1fc2172e28ce6"
  },
  {
    "url": "posts/other/iqiyi-danmu-convert.html",
    "revision": "114123e35bd71d7187e21aca7fe1202d"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "f02d7039dea078e1a45259159dfb1ea2"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "fec0e17e4e801eb6fb729302ad0c918b"
  },
  {
    "url": "posts/python/deadlock.html",
    "revision": "afcf3b2924c05a7e25d5b45632c916d2"
  },
  {
    "url": "posts/python/locust.html",
    "revision": "0392d2406caa0a4422d13b33c38ecfd8"
  },
  {
    "url": "posts/python/normal-errors.html",
    "revision": "da159a04425111e8449775f8eeab234b"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "2a34931fc714c21dd80f30bd3105415e"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "4424f1b326f8af7ea6551a8479f7955f"
  },
  {
    "url": "posts/python/python-dynamic-import.html",
    "revision": "0956180623e4ac88d0400e84e3aae717"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "b95e9782b195f34559bcf3dc34cb88ac"
  },
  {
    "url": "posts/python/python-metaclass.html",
    "revision": "3439454e84f3e311d1fccdf7a5f90747"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "6bf7e7e5b7d9a759121d48ae5960c9b2"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "64c3122bef6695cf1a5db7d3c4aa00b5"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "0c39e385e80c9e20494b46db538c65e2"
  },
  {
    "url": "posts/python/whats-new-in-python3-8.html",
    "revision": "5d5c02a0a5b304d30568a2336782bab8"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "de192e8761c602b5f1bca2121a3ed336"
  },
  {
    "url": "tag/algorithm/index.html",
    "revision": "2ebc2e6b822a3613a9680d4a72341e15"
  },
  {
    "url": "tag/android/index.html",
    "revision": "84c9f5ab55fef08a5fbc8ae1dd0699bb"
  },
  {
    "url": "tag/ansible/index.html",
    "revision": "1bf8a3e49d93341ab951e64b9102b571"
  },
  {
    "url": "tag/api/index.html",
    "revision": "da8d62eecae3e1f2d7f514ef1c13a80a"
  },
  {
    "url": "tag/aria2/index.html",
    "revision": "a2f9c90bb4f93c38b200e5812b408ae4"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "c65bd98fa791af885a56d6a027d423dc"
  },
  {
    "url": "tag/context/index.html",
    "revision": "8c2c28101d722e6d84d98e872041e433"
  },
  {
    "url": "tag/database/index.html",
    "revision": "03ff33cb84c8ff7a7aeaa8aa83c21014"
  },
  {
    "url": "tag/devops/index.html",
    "revision": "a8b50b5008196a6726c04613d28e61e3"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "bc4f920c0f52f42230896e48aa81db46"
  },
  {
    "url": "tag/emulator/index.html",
    "revision": "c4fc0395a1af9696fdb6d88c03ae2653"
  },
  {
    "url": "tag/git/index.html",
    "revision": "ee8695eae2f18084dd7a6cceebee8e55"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "bc9764670f9cf2605388bfd60b013619"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "d3d47faf7546eb66a47a04b339dbee4f"
  },
  {
    "url": "tag/http/index.html",
    "revision": "f306e752f9c1686e7d781b418bb8b9e9"
  },
  {
    "url": "tag/index.html",
    "revision": "94498f0420e4c0399af5b1d4bdcc19e2"
  },
  {
    "url": "tag/java/index.html",
    "revision": "b77aa22223797ba66d8736dd102c7fbf"
  },
  {
    "url": "tag/java/page/2/index.html",
    "revision": "92751d769e7e740122bfad9edeb79c7a"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "9496f7321047c9dbd53108f0127a305b"
  },
  {
    "url": "tag/linux/page/2/index.html",
    "revision": "d0079764879ce393fdaa07e84c10c211"
  },
  {
    "url": "tag/macos/index.html",
    "revision": "887953dba59266497703ee90c9b9ec67"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "91a446bf45d1c6d2fb45af1137149fa3"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "d161d1693b470a898167959e74df65fb"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "de87635fe2c51b38dd3fe0a4ed4db63c"
  },
  {
    "url": "tag/mq/index.html",
    "revision": "ef036873898c79433503c44bb72282b3"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "52f3df3702a1e9c11c02510663e668e3"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "bcaa94c8c32a1c32e506092c33902de2"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "05fb1d0c613f2827ac2868727fc0806b"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "00d3cca181920cc2408c5621782a3f52"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "e0df650e345c043f147fe0c9290f6e9d"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "9cff4a8b701b8956047283f799054369"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "591096f3acf8bedba9f53c608b24bd82"
  },
  {
    "url": "tag/other/index.html",
    "revision": "17a300ff32fd5a07e9d29e4edb8b6c4e"
  },
  {
    "url": "tag/python/index.html",
    "revision": "dc48bbda50a794731414e96dca70d17d"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "3273c3f16dc2e89d9f14f8bcd9e7f5bd"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "7acadd1aff9f726f30603abdd42f6ec6"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "54d1994063716d1dbe11d51f660a9d51"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "0986204346542631e914f0067e574861"
  },
  {
    "url": "tag/termux/index.html",
    "revision": "85f5f1d8c9864fe436924ab970c6bd7e"
  },
  {
    "url": "tag/trojan/index.html",
    "revision": "43ce4b481efa6b93ed6dfe3815e692d6"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "e1ae4f67812644c34c903abff4c0667d"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "225e70d2f4bbe46721088e8265b90557"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "f3c860e7f4a4771fe063d28b3552ec62"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "6c9d187ad1aa9bb7e15882a1dd20a6d9"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "8636f35fa0cb5bb3d495937521847727"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "55e082b8fdd5bd39b26e09f0f9777707"
  },
  {
    "url": "timeline/index.html",
    "revision": "906bfed4e16cdf8cdbcff864892591ac"
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
