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
    "revision": "09f5969689a9fa6d850066350a042816"
  },
  {
    "url": "assets/css/0.styles.265e6e8f.css",
    "revision": "1d2358e6604b30e07d66f70b0431d164"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.bb4664bd.js",
    "revision": "e708ee96ffef90a3d1690eedc50f2c55"
  },
  {
    "url": "assets/js/10.2eac6f99.js",
    "revision": "07efbb75918164819d453472eed2ca2f"
  },
  {
    "url": "assets/js/100.5150274c.js",
    "revision": "a6dc9ee751fc860fb3c54be4e5385ed3"
  },
  {
    "url": "assets/js/101.e7b88e0b.js",
    "revision": "9f2d5f6a9834be3c13796ebea7648e62"
  },
  {
    "url": "assets/js/102.809d28a3.js",
    "revision": "bd0bb62ab304f9033e825f7b8d66e9fe"
  },
  {
    "url": "assets/js/103.34413f7a.js",
    "revision": "7efef1060d57a1159e31b8f6ea2185a8"
  },
  {
    "url": "assets/js/104.c28862fb.js",
    "revision": "50846276bba4521710b9c153653b2a5c"
  },
  {
    "url": "assets/js/105.a623c0d9.js",
    "revision": "17223cfdaf442dc276f4618ea4fb9acb"
  },
  {
    "url": "assets/js/106.7c5dd201.js",
    "revision": "c94608620b152a171a3c51bff2bd9c16"
  },
  {
    "url": "assets/js/107.2dc24146.js",
    "revision": "f5165f478096a72dbcb2627a0ee016b3"
  },
  {
    "url": "assets/js/108.9a3871bf.js",
    "revision": "54d056214d3f1aff9fa6a2e5f88acfc8"
  },
  {
    "url": "assets/js/109.73f3661d.js",
    "revision": "4b7bf8f817f4c7f999c2d0e622fe5a0d"
  },
  {
    "url": "assets/js/11.47bc4a45.js",
    "revision": "19db9262a8fc3992fe235d51eaca259b"
  },
  {
    "url": "assets/js/110.4b7e2803.js",
    "revision": "73cf16acb89b6eccc242d62a491d3f1c"
  },
  {
    "url": "assets/js/111.49218b41.js",
    "revision": "7b64088365f915c4edce26e8e813cc10"
  },
  {
    "url": "assets/js/112.ad722a23.js",
    "revision": "e646a5cf73999f87f3449aa76f72ba90"
  },
  {
    "url": "assets/js/113.2a957108.js",
    "revision": "673d8a22b06d70cf64e6c94799500eae"
  },
  {
    "url": "assets/js/114.4442cb64.js",
    "revision": "06a19877877cd55d9640589e358f59f0"
  },
  {
    "url": "assets/js/115.bac4be11.js",
    "revision": "49e7197a5918539e6f5572e2d3225cdb"
  },
  {
    "url": "assets/js/116.3c90659a.js",
    "revision": "f9e913eff883bbfa8b09fd683be44667"
  },
  {
    "url": "assets/js/117.d2533f35.js",
    "revision": "0f247e217a9a683f0beabe2b3fbd8cc6"
  },
  {
    "url": "assets/js/118.333edd37.js",
    "revision": "f26b552de6467b0fadfda8ab3153ec37"
  },
  {
    "url": "assets/js/119.6ada9ba8.js",
    "revision": "400c5250b130bde1e5a4c56ed858083a"
  },
  {
    "url": "assets/js/12.0daeb00c.js",
    "revision": "4f84ce8e9a99cd1538a39cb0f1c47ee5"
  },
  {
    "url": "assets/js/120.4c2cdea8.js",
    "revision": "b2ece7f72532029638162b75ed243f28"
  },
  {
    "url": "assets/js/121.6feabe24.js",
    "revision": "f35c7e50810f9cabcb5b24f82ab31f84"
  },
  {
    "url": "assets/js/122.8372409a.js",
    "revision": "ffc00c757947359f731c66c56205e151"
  },
  {
    "url": "assets/js/123.f7f7c4ac.js",
    "revision": "2208bac982c6feef21653870762650cc"
  },
  {
    "url": "assets/js/124.2333ef2b.js",
    "revision": "a6b98e6a369010d8cac6ea085d103d35"
  },
  {
    "url": "assets/js/125.435eeefc.js",
    "revision": "a8a4115a989c1a816f0ebb87247f4941"
  },
  {
    "url": "assets/js/13.8f41eb7f.js",
    "revision": "6509584dfa9120c052c2327a1b021556"
  },
  {
    "url": "assets/js/14.4ce96ccb.js",
    "revision": "01bd793d0020ff0bb17b5224b6089e1e"
  },
  {
    "url": "assets/js/15.bc79dac7.js",
    "revision": "a72ae50e2a513625f709c7e34c2be040"
  },
  {
    "url": "assets/js/16.c82eb0ca.js",
    "revision": "09f6fba0fb2118b05f27fb1eeada991f"
  },
  {
    "url": "assets/js/17.9f4d4a1b.js",
    "revision": "f978e6d5086f7f98a389fb987cd20632"
  },
  {
    "url": "assets/js/18.e849d647.js",
    "revision": "7ca20733c0797141dee3f421cbc8b42f"
  },
  {
    "url": "assets/js/19.5b02aa45.js",
    "revision": "37730126a45cf206e3c199b81196cc0b"
  },
  {
    "url": "assets/js/20.131476ea.js",
    "revision": "8d9364cc7d1b47bb686ecd0d3dd8a37b"
  },
  {
    "url": "assets/js/21.4716925c.js",
    "revision": "892dc5a4a92c107ce91a6156f18b6aed"
  },
  {
    "url": "assets/js/22.97386cb3.js",
    "revision": "a2d922895b5d668ef9a2eb6102db379b"
  },
  {
    "url": "assets/js/23.9bc9c467.js",
    "revision": "42618307b9515d15a40e728fc39dedf3"
  },
  {
    "url": "assets/js/24.48134e73.js",
    "revision": "f72b35b768abd593659276e692f9c1c6"
  },
  {
    "url": "assets/js/25.b9c58e4f.js",
    "revision": "3a06171dabebc884da94dee3f6c822f4"
  },
  {
    "url": "assets/js/26.33355696.js",
    "revision": "6e2d37099d0bf9b77633902c76fdd093"
  },
  {
    "url": "assets/js/27.5778fe0d.js",
    "revision": "f139dcd4529ce69770a7a461f477e5fa"
  },
  {
    "url": "assets/js/28.e2b1cefa.js",
    "revision": "5261c59f25e535b40d6d55d408fef8c7"
  },
  {
    "url": "assets/js/29.6f553c54.js",
    "revision": "4a96c81dd527459348e66798ce20d110"
  },
  {
    "url": "assets/js/3.e695c8c7.js",
    "revision": "4d459231e81e8615422ae8d684d914de"
  },
  {
    "url": "assets/js/30.f56c1915.js",
    "revision": "861940c1a3d936d820d4ca5d7ae6a54f"
  },
  {
    "url": "assets/js/31.75e58f6c.js",
    "revision": "9eb853a17a9ca3d7e8482ea35bde6cc9"
  },
  {
    "url": "assets/js/32.f68a5ce6.js",
    "revision": "7926827a024dbae54958f069199271a0"
  },
  {
    "url": "assets/js/33.b87a7f5d.js",
    "revision": "f27cf34ec601629f65a77bc78268a06d"
  },
  {
    "url": "assets/js/34.17e768ab.js",
    "revision": "b471bd1e4bcbf22e5e6f860b7a2ea597"
  },
  {
    "url": "assets/js/35.33f130ea.js",
    "revision": "8851bf0631de000e40ff38de717e8ef4"
  },
  {
    "url": "assets/js/36.56c3e4ba.js",
    "revision": "02b11196642310786d6eb70ade238731"
  },
  {
    "url": "assets/js/37.1d2ac28e.js",
    "revision": "6c92fa7c838776b6a723a6e4fe9580f0"
  },
  {
    "url": "assets/js/38.5a3791c1.js",
    "revision": "accce95b2fc2fc397131cc5e8fc204c9"
  },
  {
    "url": "assets/js/39.4b09289b.js",
    "revision": "08b6537f8aae5f3841cc5a0116627819"
  },
  {
    "url": "assets/js/4.86f60908.js",
    "revision": "3d06712d892240a28aacad8852f306b9"
  },
  {
    "url": "assets/js/40.da91c5a1.js",
    "revision": "ff0c381629640200bf9015d9addf061f"
  },
  {
    "url": "assets/js/41.eaa69144.js",
    "revision": "dd69a8d1730dea8637243a4d2e7ba121"
  },
  {
    "url": "assets/js/42.f5514706.js",
    "revision": "3ac82db0927ba371db046c52a853352d"
  },
  {
    "url": "assets/js/43.ffa4dc58.js",
    "revision": "4c41114147fc85f0d45f178a40eea234"
  },
  {
    "url": "assets/js/44.c278a5a9.js",
    "revision": "6d19f1415bd621b4a3dedfacf7c3e491"
  },
  {
    "url": "assets/js/45.f37e76e0.js",
    "revision": "7636f3527f94789edee71d4f29ee660d"
  },
  {
    "url": "assets/js/46.8df26c8f.js",
    "revision": "86f212727ad0031d27679cba38a8f8ef"
  },
  {
    "url": "assets/js/47.91971c6a.js",
    "revision": "4d8bf3ed1d572172dae93bcb7fc56d61"
  },
  {
    "url": "assets/js/48.7d187200.js",
    "revision": "5a0ea8c13e80250790256295841e9936"
  },
  {
    "url": "assets/js/49.bb8fc5c3.js",
    "revision": "e64ac98a6ab149ab3b37a29ed9cd63ad"
  },
  {
    "url": "assets/js/5.27f06f69.js",
    "revision": "c792f4fa73d87062ee85435ba0618451"
  },
  {
    "url": "assets/js/50.16665421.js",
    "revision": "750c63e02028cc2a980ba9164db8e21f"
  },
  {
    "url": "assets/js/51.01a12454.js",
    "revision": "1397de3649946c87804ca93d1a6dc8d6"
  },
  {
    "url": "assets/js/52.8c4505fe.js",
    "revision": "4818bef249e77cb9eaccfc51471ed543"
  },
  {
    "url": "assets/js/53.e1ab4a91.js",
    "revision": "a93f299c5ae23aa091905107ec8f68ed"
  },
  {
    "url": "assets/js/54.b37e4a94.js",
    "revision": "d1e3fb78185fa585e3e5b6df11eb8061"
  },
  {
    "url": "assets/js/55.5bf8961b.js",
    "revision": "a2abdc2baa6f4f636c1e0fedd2294f8a"
  },
  {
    "url": "assets/js/56.f4eb7ed9.js",
    "revision": "eb2ccd9c498825c9b9ae84f5edbfb192"
  },
  {
    "url": "assets/js/57.4f1a4297.js",
    "revision": "a476593971c38f2ed4a7d637b22bdb96"
  },
  {
    "url": "assets/js/58.3ebbf808.js",
    "revision": "b3816254406a64b47ee703fd6611df1a"
  },
  {
    "url": "assets/js/59.2286a334.js",
    "revision": "e0270bcfd93580af53a4a853cf5c76ed"
  },
  {
    "url": "assets/js/6.354dc403.js",
    "revision": "02cf03ef48a6dbc4db87069885e9a6e7"
  },
  {
    "url": "assets/js/60.19dfe1ed.js",
    "revision": "d9122e18ffbcf8c6252ecf20f5b7a2b6"
  },
  {
    "url": "assets/js/61.8394da4d.js",
    "revision": "0897bcdad8b8a85db68ee09874d4f9be"
  },
  {
    "url": "assets/js/62.3358cb29.js",
    "revision": "2020ea3fd03f4ec77503b359cca2dfb8"
  },
  {
    "url": "assets/js/63.a617d29e.js",
    "revision": "997511aae0e9a744fe4dc5c8d4b99a38"
  },
  {
    "url": "assets/js/64.364e41fb.js",
    "revision": "7d58c8a58e0e7d8ba801282b22858e5a"
  },
  {
    "url": "assets/js/65.d36c2092.js",
    "revision": "a2a78aaf3137cd354db5b56c3c25b6a1"
  },
  {
    "url": "assets/js/66.64b08a32.js",
    "revision": "bb02008e055d0c75b3dbaf1283b3c15f"
  },
  {
    "url": "assets/js/67.347b8a38.js",
    "revision": "d0e36b219284fb8276ce65d6f109236f"
  },
  {
    "url": "assets/js/68.78e66ba0.js",
    "revision": "60769027c4bd58faa33320476a5f3160"
  },
  {
    "url": "assets/js/69.a7b10c80.js",
    "revision": "9266d4a037103b9c026f2a977810af8b"
  },
  {
    "url": "assets/js/7.10f00ff4.js",
    "revision": "86e4d2ed660f70d29ac03714e7596bb2"
  },
  {
    "url": "assets/js/70.ff83a9fc.js",
    "revision": "1152c24557a1884ae083f7339638ed6f"
  },
  {
    "url": "assets/js/71.4e41e182.js",
    "revision": "7f6e82add5c1bca890d1d56253c65de7"
  },
  {
    "url": "assets/js/72.d9fd4dbf.js",
    "revision": "8ff4a8a3aaaaa10bec46b95d2af7a6b3"
  },
  {
    "url": "assets/js/73.8cabaeae.js",
    "revision": "aef7fe2802f2f0fbe3bac37afc16f12a"
  },
  {
    "url": "assets/js/74.219b222a.js",
    "revision": "b9a4fb6b05f0bd32c73714fac854add4"
  },
  {
    "url": "assets/js/75.af751338.js",
    "revision": "7c1114cbfba30ee1f050386215a3e84e"
  },
  {
    "url": "assets/js/76.d9377263.js",
    "revision": "3f50351aa9c076deedc2bffc80f1f7f9"
  },
  {
    "url": "assets/js/77.32c4a012.js",
    "revision": "dc2c673b1afcaf1ec62ce9c7d7056403"
  },
  {
    "url": "assets/js/78.2a6e8bae.js",
    "revision": "d24e93418fef664004f6c364202347cd"
  },
  {
    "url": "assets/js/79.7b507d5d.js",
    "revision": "ac038bc1e82095c10bbcd91080a157cb"
  },
  {
    "url": "assets/js/8.26ed1ff9.js",
    "revision": "e39b5506af0f74a5591317583433a435"
  },
  {
    "url": "assets/js/80.789a4951.js",
    "revision": "c4c3de62316c7c2b29320658750137fc"
  },
  {
    "url": "assets/js/81.c3207f98.js",
    "revision": "1b7294f4977c194c92324fe823b6afd4"
  },
  {
    "url": "assets/js/82.39189924.js",
    "revision": "857babd9efb4f7153999b71e056cf345"
  },
  {
    "url": "assets/js/83.fd28b57a.js",
    "revision": "7a1f90e286235ce4583cb72bb4bab47a"
  },
  {
    "url": "assets/js/84.ecb85c30.js",
    "revision": "454eee323a536219bd05fdbe429b333c"
  },
  {
    "url": "assets/js/85.dae57382.js",
    "revision": "ac8a0e6a46ddf7ed386f6dc94d4b4b5d"
  },
  {
    "url": "assets/js/86.15b55ad1.js",
    "revision": "73e95e3a7803b617d229490c7a1a1aea"
  },
  {
    "url": "assets/js/87.817980ae.js",
    "revision": "5bdba176479e818667faaa6eb9c2f0a0"
  },
  {
    "url": "assets/js/88.7635c299.js",
    "revision": "b50a4c7757cac11f89a35a147de45226"
  },
  {
    "url": "assets/js/89.0e3cacb8.js",
    "revision": "012219e17df9354333fb86c6e94a595a"
  },
  {
    "url": "assets/js/9.c84d8e48.js",
    "revision": "dbdc7cc93080f9f41a3688c086a6d8b2"
  },
  {
    "url": "assets/js/90.15e8bc7e.js",
    "revision": "9c460e58850d063c6ac6d302b61d0ec5"
  },
  {
    "url": "assets/js/91.fd6a0620.js",
    "revision": "28298b60408783b5e7e8bdf397f4e82e"
  },
  {
    "url": "assets/js/92.c478bd43.js",
    "revision": "047fc88603f746f4826d777aa821ebeb"
  },
  {
    "url": "assets/js/93.6e1fed1a.js",
    "revision": "c3494b387ba9ceebcd1d06cc5fce7a39"
  },
  {
    "url": "assets/js/94.05bbe346.js",
    "revision": "800c1ed956926c1e484f1ee4a52226cc"
  },
  {
    "url": "assets/js/95.77aa0930.js",
    "revision": "461e5b91906cae97e42b5b6dba9f896d"
  },
  {
    "url": "assets/js/96.7008e6c2.js",
    "revision": "ddfe552fb9870d1c17afd1d10e9806b2"
  },
  {
    "url": "assets/js/97.f8babcfc.js",
    "revision": "332d616a52dd9ab6bc32051eb99b1b77"
  },
  {
    "url": "assets/js/98.8ba77566.js",
    "revision": "9b8102ea95acec496804c8dd0049bcce"
  },
  {
    "url": "assets/js/99.bcb63c98.js",
    "revision": "9f79b80138b4b0eec3a9d2fa0f53a1e6"
  },
  {
    "url": "assets/js/app.8661429d.js",
    "revision": "6da772f5322ad3218ff3e4762686e87d"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/algorithm/index.html",
    "revision": "5d1b531fb74d36a90e4445d2c5cd7ad1"
  },
  {
    "url": "categories/database/index.html",
    "revision": "2db4b7d52c9c5cd33e8892cfb13e2947"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "3d9f8a9fa67b4e2c2d5052dfca4f130a"
  },
  {
    "url": "categories/front/index.html",
    "revision": "98cb477ed7691c6aaaeda28e2c0df6f7"
  },
  {
    "url": "categories/git/index.html",
    "revision": "da90728cf7ee6f5da13bcbff4d8bf7c0"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "bb9c294763938187438555bd312ecc91"
  },
  {
    "url": "categories/http/index.html",
    "revision": "ada22385d79cb5bffe36d248a1819ba3"
  },
  {
    "url": "categories/index.html",
    "revision": "561c97b5b6b0d79dac08c148f2cf2f40"
  },
  {
    "url": "categories/java/index.html",
    "revision": "2d32fa96988b53f2cf79c2e759de4e12"
  },
  {
    "url": "categories/java/page/2/index.html",
    "revision": "c98050c0df2eda9517bf23e98c61afac"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "2d3e7007ecbe65df88a1256a68bb47ab"
  },
  {
    "url": "categories/linux/page/2/index.html",
    "revision": "3b5a078800ef053ceac49ad284e253af"
  },
  {
    "url": "categories/macos/index.html",
    "revision": "18b880754ec181976722265b84afb6db"
  },
  {
    "url": "categories/mq/index.html",
    "revision": "459eaa216eda73d4a5f09407f83aa847"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "05478c78d2fba9b0d1b714d59ae4eb6c"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "a28dcdf8b509a778ee7e45e701e62002"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "6a5a5804377086993e55265c618fca15"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "9cd8a0c92dc710edf377c910fe71d16b"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "4a7a2f7baf3c340882641642d2db383f"
  },
  {
    "url": "categories/other/index.html",
    "revision": "4a8c31ff3893c1937721d780c8c2a795"
  },
  {
    "url": "categories/python/index.html",
    "revision": "4b2712d515629fdc0f776345b36a66c9"
  },
  {
    "url": "categories/python/page/2/index.html",
    "revision": "35fca9b1e9d0a9f3a9de734d308ee271"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "e3201a8d820be85015874cebf4dfa6e9"
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
    "revision": "3b8a178e10e100c2ca1b3e13b0a1ab9b"
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
    "revision": "2ceee10bd58f7a3485b2d0f87ea4249a"
  },
  {
    "url": "posts/database/SQL-constraints.html",
    "revision": "a67be71a1cb1d6da0b4fc7dc335bdd17"
  },
  {
    "url": "posts/database/SQL-keyword-order.html",
    "revision": "1490ed16dff19ece35ca479c32de5dfc"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "b985ff052f2fa381974dda541a3b3eaa"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "f8b542097e86f0acb02b0d359f51929b"
  },
  {
    "url": "posts/database/why-redis-fast.html",
    "revision": "9b06735fa19c85e06142b363b1c22028"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "93b001500cf9d52eebfbdcec9fcd4499"
  },
  {
    "url": "posts/docker/docker-host.html",
    "revision": "9ba643a2fd6e71ef094c7e69f7a2f357"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "b64eb35fbb2ecb6e7409e9678635aeaa"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "f0e1b04184d339e646b0a8211d07e6ca"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "78e42ab2a33769fa0052ada226ab8315"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "8cc48f40a0f46adefbb90904e0ca36d3"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "63e41e2cc0086d2c9e22037dca01f14b"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "7054fc04dafac0e33daaae296a654a0f"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "122cb88450ddfc68fd2b1634f1875dd7"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "4a3402a3144f6367b11dae1c5a128d52"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "b0010b3bc339fa558370e97a9595bf5d"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "24ab7a4799d09e75365c4a2e2143317e"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "a5b71b7cbd942479e615c8ceaa886315"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "88e0f82b96a706ab1f3d97bcd07b5b36"
  },
  {
    "url": "posts/git/use-multi-access-token.html",
    "revision": "4863ef2eb1b4b48f2436642d88c037eb"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "3c74e46d973b2fec527489169b381e4a"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "dcefff2a9abfa12926e5f16f320e8147"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "92a23b1879dffd3e7fa7101f16dced3c"
  },
  {
    "url": "posts/http/https-shakehand.html",
    "revision": "e898a0d7f976e18b5c34313a44d8c466"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "bd9df11f929c4ff39bbe7e674fdb9e41"
  },
  {
    "url": "posts/java/java-http-proxy.html",
    "revision": "ebbdb80b133410fa9d0ac7f5626e08d4"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "96e3210a7975db19c54f0388629a65c8"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "60b4f2078609db7c6356cc6bcb1dc7ba"
  },
  {
    "url": "posts/java/java-spring-MyBatis-Annotation.html",
    "revision": "38fa50f424028fa7c57d77a31ffe29f0"
  },
  {
    "url": "posts/java/java-Tetris.html",
    "revision": "98cb83dd90a5e43d68c764f07987cd7f"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "6328fc51f75b548ce7fe097c204d8362"
  },
  {
    "url": "posts/java/spring-RedisTemplate.html",
    "revision": "48b14fc9abea937a3755c19c5d14ff55"
  },
  {
    "url": "posts/java/springboot-disable-autoconfig.html",
    "revision": "c2c8455d378d5a1a471cb777a5eb7d1a"
  },
  {
    "url": "posts/java/springboot-schedule-task.html",
    "revision": "f7e511be0ab615bc39aa2bcbba05c714"
  },
  {
    "url": "posts/java/springboot-swagger-ui-custom-config.html",
    "revision": "a1bf55300a4081a49a7b1ee8e669b7fb"
  },
  {
    "url": "posts/java/TOTP.html",
    "revision": "ac2ae48b51005a817ceaf31dc04ce750"
  },
  {
    "url": "posts/linux/docker-nginx-acme-trojan-go.html",
    "revision": "dd825f16f36276719e08e07f70807a7f"
  },
  {
    "url": "posts/linux/install-ubuntu-with-xrdp-in-termux.html",
    "revision": "67acd801f40bcfc974958fc4dd80cac9"
  },
  {
    "url": "posts/linux/linux-chm2html.html",
    "revision": "2370b2df1c44dd7f3c439c7a5e93f5ba"
  },
  {
    "url": "posts/linux/linux-ecs.html",
    "revision": "daad07eab3d1a788d73605f2e37de301"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "81f9763a64479f710558487ba7ac32a4"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "3ea33935bccf7e3c22eee310980612ab"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "e1d15a29a1632f6c06f87ad591a46eee"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "39f115a9a15375782a0c3762b6a17532"
  },
  {
    "url": "posts/linux/ubuntu-switch-sources.html",
    "revision": "2baa532c58a4584572f8951804288500"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "285b0cf47d48f00a75b62537b12eb9cb"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "b0e0089673c721e3c53822fd711811ca"
  },
  {
    "url": "posts/linux/wsl2-and-docker-compact-vdisk.html",
    "revision": "027cb2bcef34dddcb0fee08ce4759785"
  },
  {
    "url": "posts/linux/wsl2-install.html",
    "revision": "ecf068b58e36e5f883dd84091df6f18f"
  },
  {
    "url": "posts/linux/wsl2-use-winip.html",
    "revision": "d39e9d72ca1378e4f581c510bf810ac1"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "a1ace5825dc726d95dbd8e09e38884e0"
  },
  {
    "url": "posts/macos/android-emulator.html",
    "revision": "e29899b1c536cb91e5687df01d442dc5"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "84e99efe5571786005d9f381c5a98f18"
  },
  {
    "url": "posts/mq/ensure-not-repeatedly-consumed.html",
    "revision": "605404201a88a67059cb51f98c179204"
  },
  {
    "url": "posts/mq/ensure-order-of-mq.html",
    "revision": "4d8673108ff4f71f111a62688e949071"
  },
  {
    "url": "posts/mq/high-availability-of-mq.html",
    "revision": "d6990a4b3aae3f75891c0ac2156ef87b"
  },
  {
    "url": "posts/mq/mq-problems.html",
    "revision": "653f996b264555e27738aa9e327bcfe5"
  },
  {
    "url": "posts/mq/why-mq.html",
    "revision": "7df0eeca46a0071f40e55a6d4e51fcb4"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "d319e1c5c7fef6f1d02d2b18cdc67c62"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "e6657efdbc28ee8806d59feb5f5897ea"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "98426b6d80b46d3c2ec3021cbfeabc38"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "0250ee6bc0412d4465db63f7b87aa06b"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "743b33f196983e5a5d5f6e64e75684ef"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "6ed5032abe183e26c1d126e8055095d9"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "9fedf3ba006d2696179ab26a052a0c5a"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "bae39bf9edc871cfd07601e08d0c9dff"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "dbd5497dd18be1fc35f4a56370a99cf6"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "084a4ac1daed28a371a733d1832dee3b"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "adbbcc7e3a75536695822ff6d0f7ce3c"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "d650bed08ed6f30675e9251af89f5ee9"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "0526a8b490b741b29ba71cc126bf5d27"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "03334eac46d97ad6980411b2c1624dff"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "2ee7df80c6e885de79a0b980fadee712"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "56aedf8400974bfa5cedc5cc56adad70"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "abffef84b1c4d3da6ad28279f8ebef04"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "873b9da7e96e972e0d3848e7e7d78ad6"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "3325430a1194aa70396f472faecad201"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "1556d90e4ba4e84ab3177cc26843d853"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "09798661401f4c364954d921cb99658a"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "2b05d29f7383274bad5170a5c7c4da6e"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "9b8cb3f2034660c13932da1bdf9f10d3"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "d0e9d886a964e45a43a8ec6ea74a7d90"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "95b2b7b86d510470ceebb3085b968146"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "9b87539b160a9d4042f500287ec51365"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "e5eaa8013bbab509ca527ed8052d6027"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "f9a2f408d673f644e8bcef23266a9df8"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "556cfeb98bf15ae34edb2118be18efae"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "792786fc03421ee14fec09fa97ea67ad"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "e29cfa680291e99acabc414cb883ddb2"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "a77bd22bb59861b93c66e263d738f27c"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "e2b8445b638fc2b8081e854c90bc4c2d"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "6064acf71adb75df528ed5dc17eaff85"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "79e04167c5d1c42c32982e6a919f2c4e"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "d327e2abe11e945e1bef5ed4a7c7c95e"
  },
  {
    "url": "posts/other/aria2-replace-thunder.html",
    "revision": "fa293cddbf8f5f6a3eadf00ea06c27f4"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "4660978f2feef3739fccd0a50f7e9119"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "210a275f3876151c1312d55dc3b976b1"
  },
  {
    "url": "posts/other/iqiyi-danmu-convert.html",
    "revision": "ac0d6679e689e8ed8760a016a0c9fdd3"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "b8ff04191c00cea0d556188b9a44462d"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "d2d2f2b73e8870d85372a57eb3d05c9e"
  },
  {
    "url": "posts/python/deadlock.html",
    "revision": "71701182088d0312a33f183f8d53ca2d"
  },
  {
    "url": "posts/python/normal-errors.html",
    "revision": "1e31542b3a8485fa738d6615efee1560"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "d0548234ae4a606dd7e2a5bbfc2cccdb"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "b869903cc2e4869070fd6cbfbb607c99"
  },
  {
    "url": "posts/python/python-dynamic-import.html",
    "revision": "7c161b2cfdfcd703e45736b6bf78b9d6"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "90a1c3a2c49bd09c5d5ff1e8ca1e2ba8"
  },
  {
    "url": "posts/python/python-metaclass.html",
    "revision": "d0ec88a8d5202be4881feb7fb68e4d44"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "76e9d5f9f23a56efbb0320904dd4bde8"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "59e476076c1d963489f70e617a77e513"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "011c0f5be510adce352c08b68dde7be9"
  },
  {
    "url": "posts/python/whats-new-in-python3-8.html",
    "revision": "161471e0b1af0f11962e2694b0b9bd2a"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "2815a0c8a212068407ad1f9b7c6d9ca0"
  },
  {
    "url": "tag/algorithm/index.html",
    "revision": "1bf2ed8fe609f9662634ea25fd9fdeb0"
  },
  {
    "url": "tag/android/index.html",
    "revision": "e8c29477405c3addc6ee154e1639e315"
  },
  {
    "url": "tag/api/index.html",
    "revision": "7bbaae25c03c0c823d206d7742e3a5ec"
  },
  {
    "url": "tag/aria2/index.html",
    "revision": "00d9117b0ed048e202cb76f731ae1eb6"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "d896e378ffc7492c9ad9b47e9d601f7a"
  },
  {
    "url": "tag/context/index.html",
    "revision": "d7a865ffead116b3fdce472143815be8"
  },
  {
    "url": "tag/database/index.html",
    "revision": "adad449769ed9944b4cf3dfe3ad7d43c"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "a21674ef78809995688aa275af4311c0"
  },
  {
    "url": "tag/emulator/index.html",
    "revision": "83f2faee21604c2cf3133b325d417465"
  },
  {
    "url": "tag/git/index.html",
    "revision": "60c54499588d1cd04123c06ee6a1ad5b"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "758cfcc74d1c3f7cd34b97e0c22ade7f"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "fc95af98e311249452c60884e3593d8f"
  },
  {
    "url": "tag/http/index.html",
    "revision": "51d407c9fc6ac8da65843b50dfa7f5ee"
  },
  {
    "url": "tag/index.html",
    "revision": "b5ff3f4e070fe0f012b238b00ae6df58"
  },
  {
    "url": "tag/java/index.html",
    "revision": "3b10603a13f0d9015b0bc71fae085dcf"
  },
  {
    "url": "tag/java/page/2/index.html",
    "revision": "c553a39c123ef5054c76b63e4ae5e946"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "410a7ea35e6bea660af5009a6ed37268"
  },
  {
    "url": "tag/linux/page/2/index.html",
    "revision": "6d7aa1958fc15a308de1a723385315c2"
  },
  {
    "url": "tag/macos/index.html",
    "revision": "7752f2fd85e5e4b41f72703c4d44003f"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "dabc4f60efb010ea29e20e33da07651d"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "bd9a5786b40b517c4ced0313b8eaaf53"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "40e199ae11e060a7b899cb9413109ecd"
  },
  {
    "url": "tag/mq/index.html",
    "revision": "74cbf2faf1f7c3cd98b683d1cba4046a"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "2d3c330fe220d90aa4b1225d8478654b"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "907065f532796d33b220dd1253624281"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "b6a6d073358d07785e6a42dddec729f6"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "314c214817dd46345f090b2119829ca6"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "7385616c110b5bd488bdce59179b350e"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "3f92e68f75e64f89a1b44e5868ca19b7"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "2e96ea992244122401f6a137db335dc1"
  },
  {
    "url": "tag/other/index.html",
    "revision": "ac384697a41139cb19f8be07c845d7af"
  },
  {
    "url": "tag/python/index.html",
    "revision": "7b94da4497a5fd5fae7dae5bae25e567"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "96c3fcbdf13351c042d22ce182be5980"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "6a8fd8d0b49e757ee5d8480466902a5e"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "4dcac9eda30afdf375d93e1702f84050"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "a6f9a689e7d80aef45fac3b2862cc4df"
  },
  {
    "url": "tag/termux/index.html",
    "revision": "1beeee4467bec75f76e09ddbab8f4c82"
  },
  {
    "url": "tag/trojan/index.html",
    "revision": "207b566956f2baa15f608613305baa94"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "1c2a23df9c92107f53e8b089694134ad"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "fb459615adad8878c58978cdbc6c0cda"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "1fa6e5993f248368d7dc2fc06cf038b8"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "bab1f689b271b62cdfc16a62c50cd1c1"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "3c300a55c8d80bf2e240ffa7520ff397"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "6367791bfbbf9e9a9f0e726ba1fc42dc"
  },
  {
    "url": "timeline/index.html",
    "revision": "febea8afed5568fb7119f816e70c7ed6"
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
