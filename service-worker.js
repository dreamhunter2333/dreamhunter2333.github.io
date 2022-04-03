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
    "revision": "9a76b1b1f63fcc70994abf7f7e9d6788"
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
    "url": "assets/js/12.503e8ef8.js",
    "revision": "c9056c7445755f995df8f6aaa7f57b49"
  },
  {
    "url": "assets/js/120.443222ba.js",
    "revision": "56b0aa57959a1e90bc8e44342b8f01e6"
  },
  {
    "url": "assets/js/121.ddb324fe.js",
    "revision": "08d3d1371338927cb3dd48bb41b3d77f"
  },
  {
    "url": "assets/js/122.4299c432.js",
    "revision": "03ecf24bf715feba766eb59fa83fee5e"
  },
  {
    "url": "assets/js/123.ef7ebac3.js",
    "revision": "e7a7253f58501a165ca3e93ed40233cb"
  },
  {
    "url": "assets/js/124.4fe6f968.js",
    "revision": "7b938899cbba2e6af8048b8100c2b577"
  },
  {
    "url": "assets/js/125.435eeefc.js",
    "revision": "a8a4115a989c1a816f0ebb87247f4941"
  },
  {
    "url": "assets/js/13.164f57c7.js",
    "revision": "54dae3fb5de3728b317f3fa8b2a876f2"
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
    "url": "assets/js/42.1137a60e.js",
    "revision": "fe7e194f2098e15a27ae56ed74b23928"
  },
  {
    "url": "assets/js/43.7aa74c8b.js",
    "revision": "9261e3a56bceadccc8c27a4dd0423c3d"
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
    "url": "assets/js/65.563b03ab.js",
    "revision": "6d6fb24b7b746b08853351ee6a165cb1"
  },
  {
    "url": "assets/js/66.080b2b85.js",
    "revision": "22154feb5e0f85eb3ebb8aae8cee2e30"
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
    "url": "assets/js/84.771c647a.js",
    "revision": "a87f45597424646a884a1950549e3b05"
  },
  {
    "url": "assets/js/85.8203e2bd.js",
    "revision": "2741791dcf389b8e3c704e453e24d234"
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
    "url": "assets/js/88.70e9b570.js",
    "revision": "7b4e41f2f64032f1330ea92175e0b975"
  },
  {
    "url": "assets/js/89.726d24fb.js",
    "revision": "c6cb9c8b5de515cddd69c4e74ead6e11"
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
    "url": "assets/js/94.901302d1.js",
    "revision": "4c199750f5c2792fd84fe0ba6be7c7df"
  },
  {
    "url": "assets/js/95.4bc3d228.js",
    "revision": "6ebb53c7eb44f072eb33171c347bbdac"
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
    "url": "assets/js/app.6ba69483.js",
    "revision": "0cff0e3ad5847306431eccd432bf7786"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/algorithm/index.html",
    "revision": "4de0d6582fa5044af061a4afd4ad0dc9"
  },
  {
    "url": "categories/database/index.html",
    "revision": "b142f9027583b2ac89604897aecdb182"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "5a3e2953a41a9aa96a43ea678334db44"
  },
  {
    "url": "categories/front/index.html",
    "revision": "9c9d4d5c04188626db6da6343f5a47ff"
  },
  {
    "url": "categories/git/index.html",
    "revision": "14e9a37b7e44d59d59e064e85403bc13"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "1d079578a9c1ae4528a524ffcc2636e7"
  },
  {
    "url": "categories/http/index.html",
    "revision": "5c4d0e454f1002ef60edc09b9ea17ad0"
  },
  {
    "url": "categories/index.html",
    "revision": "99754b257d0c6f99fa521a8621531f9b"
  },
  {
    "url": "categories/java/index.html",
    "revision": "5237a239d1307b30cc0446ad9710cd4e"
  },
  {
    "url": "categories/java/page/2/index.html",
    "revision": "d2aa8d725e0b4d1ebe801985dffcf3f4"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "36fe97b33ee1e3b461694ccdc751aa2c"
  },
  {
    "url": "categories/linux/page/2/index.html",
    "revision": "374c2456269d30d9d015787449a1ca37"
  },
  {
    "url": "categories/macos/index.html",
    "revision": "f932d214fc7064966a6036522ac22505"
  },
  {
    "url": "categories/mq/index.html",
    "revision": "6ffff413ea757135f53c9bf22a95fabd"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "5cc95502784d23c78f1c06e1f592ebc1"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "9d5a002b32d8b754fe43c5fd251a5b2c"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "f00e7bd97f250ac2f0ccc394ffc90ee8"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "98ced70f760cbe88558e2168acf1dc49"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "bde34c0b2f1ea09b95711ba4dd310eea"
  },
  {
    "url": "categories/other/index.html",
    "revision": "7ed7c7df527bfebaf993e4cffbb8fa9e"
  },
  {
    "url": "categories/python/index.html",
    "revision": "79e3ae9d7dc7ed4a42c222e87f6fc8da"
  },
  {
    "url": "categories/python/page/2/index.html",
    "revision": "402ba7f9c146b19d4e3ae543f84cf89b"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "2107845a436a1976da7f79fa27b89b7d"
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
    "revision": "dd587bc794475a558f42236e88d6c861"
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
    "revision": "f97659f55350a7d1e2da728ef2ed562d"
  },
  {
    "url": "posts/database/SQL-constraints.html",
    "revision": "91de23972b59e920f83c1fcc4b234234"
  },
  {
    "url": "posts/database/SQL-keyword-order.html",
    "revision": "bcc08d662e4b671056c9e88ef4d788a1"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "a06b992f2e725e6c110865baea6b9806"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "23e2267c7295a97c117749ba9b4aa38a"
  },
  {
    "url": "posts/database/why-redis-fast.html",
    "revision": "aba65c64509a0457ad9adeac14f9c620"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "d50bdf95111e67c11f6951e1062e88d5"
  },
  {
    "url": "posts/docker/docker-host.html",
    "revision": "f6775239f96164707709f88fc25e7815"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "e3c325f2648c2612dc8d49604b8cbe59"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "57028f484d276a6dddc62f1aec46526d"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "571c5905afe04d0ed77f2b4285c754c3"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "b8b734730ee000d541af1dd34bbbb04f"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "a531cae436c603c195aad184dbd39d6e"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "ae2efd602d46707e1a0995f468bcfe51"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "c0391ff39395733a8f7720026913ea58"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "2437385db1d51046a0134101591f7153"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "2ac65578f8db454b55324d84bed2932d"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "a70f365ce4423aff1e1ac2f502397e12"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "0b0bba299f6ce469e366065ddcbd67d2"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "c9a6410f5fe0f8fd38de13d681ae04b8"
  },
  {
    "url": "posts/git/use-multi-access-token.html",
    "revision": "e00726fa0897d78e09ceef55799ae407"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "78581694043c27c8abe1493b46f1dfa9"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "87c8df9a704bb62906f072ea2b009fc2"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "82dd38e40ce980282c40bcb4d3f756ca"
  },
  {
    "url": "posts/http/https-shakehand.html",
    "revision": "738b15c4af4ac00bf3751cbc0911b925"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "0f3b0f1f859277a9d437e9ad1265b4db"
  },
  {
    "url": "posts/java/java-http-proxy.html",
    "revision": "343a720a9e1d9bcd1fdb07e64cc23dc4"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "c6beb9e5d64b3c2ba02f7648209ab25a"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "ed6ec10b6392d3c9319fb45734e8fe7e"
  },
  {
    "url": "posts/java/java-spring-MyBatis-Annotation.html",
    "revision": "69dd93202f8669facfa56c73339c721f"
  },
  {
    "url": "posts/java/java-Tetris.html",
    "revision": "184ed91e910da1e3a64fb5ec54eb3234"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "0c2f80e374549ecce4ec8b513d9e69b9"
  },
  {
    "url": "posts/java/spring-RedisTemplate.html",
    "revision": "9d2043a6b616e592daa6da4de1df3c73"
  },
  {
    "url": "posts/java/springboot-disable-autoconfig.html",
    "revision": "0b041a7d089bc156c80afa921251806d"
  },
  {
    "url": "posts/java/springboot-schedule-task.html",
    "revision": "1184c59d32923bf08f1ec15ff73f3019"
  },
  {
    "url": "posts/java/springboot-swagger-ui-custom-config.html",
    "revision": "1a811f6ff3e4b883805735169775f690"
  },
  {
    "url": "posts/java/TOTP.html",
    "revision": "53b9339a0fcfd033829115badf513392"
  },
  {
    "url": "posts/linux/docker-nginx-acme-trojan-go.html",
    "revision": "bd9b2882bfb49cde9b310285cb93c3b6"
  },
  {
    "url": "posts/linux/install-ubuntu-with-xrdp-in-termux.html",
    "revision": "39c26846a7d8f8164aa6c9f6c7824afd"
  },
  {
    "url": "posts/linux/linux-chm2html.html",
    "revision": "e1a86ecfafba98671e165c1b1a3927b4"
  },
  {
    "url": "posts/linux/linux-ecs.html",
    "revision": "88a4ed149fc83a3fbc9e9790457cb4e0"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "2f84edf1cab9e6f83347cb3f9b7cf223"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "925be2bbe691993624bd0892993bbb8f"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "10eef935131878449f0a283a9dc38e6a"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "c8d413030a58d7d1b6672ca5f0d2e47a"
  },
  {
    "url": "posts/linux/ubuntu-switch-sources.html",
    "revision": "e7b61e52c99fb5d7a019d0b4c5fa5e16"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "d8334a1be443ea0e8ffdd8c1c53e9a80"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "24a734653ed7b68200f83b6952111173"
  },
  {
    "url": "posts/linux/wsl2-and-docker-compact-vdisk.html",
    "revision": "f8294717adc65c0f469fd5148bdce87d"
  },
  {
    "url": "posts/linux/wsl2-install.html",
    "revision": "b7695575c42dcc44455b05532290bb29"
  },
  {
    "url": "posts/linux/wsl2-use-winip.html",
    "revision": "a8d39576b025f32112613df0b20f5124"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "21b8df966908b7cf283372c9dbe19b50"
  },
  {
    "url": "posts/macos/android-emulator.html",
    "revision": "c300eaf569ffa386e04173ebf19a86a9"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "64fd8262a9c2e4730f4735883b96994c"
  },
  {
    "url": "posts/mq/ensure-not-repeatedly-consumed.html",
    "revision": "626b73b65b6d332c0bbe92081414d400"
  },
  {
    "url": "posts/mq/ensure-order-of-mq.html",
    "revision": "1c7a087644169704345170ce91b56437"
  },
  {
    "url": "posts/mq/high-availability-of-mq.html",
    "revision": "710c81a85cc17910e6591c78147dabb4"
  },
  {
    "url": "posts/mq/mq-problems.html",
    "revision": "03e93282705db491e2f8719165d32a24"
  },
  {
    "url": "posts/mq/why-mq.html",
    "revision": "0b5851611a4201e2ac851938e5a98bff"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "25de926c53dafce6f81cc31ad59efa51"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "d67b90f0b7dc3afba7f5a6ba5a02cebe"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "23f32f0215b23d596beed43d357c9d6f"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "6ce7350567e38ec65e6ff46c5cce79cf"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "09491613bc8fe449915ad07612ea7006"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "027c9d86ff2a62b98b33e822906fe0cb"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "ab8457b4c8e1eb654f1dc93b3797814a"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "06f76a9a81c350b766ffcb3244a77115"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "b8fa7779194cc111ed8db45a4e2d8a00"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "f0dafb0a65809200d429de3f12e52541"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "0784c7c5dcd4fc24c8eb7b51c50a0470"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "e2d572ff1bfb3e090283789d8b751187"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "d235bc6bc926bf8d749ea4b522e73efe"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "1fae9c47aead25713217d72a4b0af5ab"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "301135c476f8644e6726a53cc33515e6"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "46285cb2df35b64fdf222ec083d026e4"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "f790aef822839dc854c4e31bea1c6a05"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "b3ab1ec3f81bcc17173e812b13e6193c"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "8347949dc8fc8702e987cbaf69c69493"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "76c7c1ef8e6da75367e10de807a772cc"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "bdaec2b495d7c8b49780bc61577773da"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "a47e12b60712b9825b9bf45dfb7dd5ec"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "a7d3bcff51c852d2f8e0c6b969d25131"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "95ec6cf727527a964b55f34ec315be6c"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "06b6a10cee2d564fb9d801040d8c22e4"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "bc94aeb484c48518ce23cab333ed51dd"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "ef1e69a222d72e6fb732b1257c96fb64"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "6deedb6e5a18f15d945ff27ff8c57ab8"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "a3db4f168d9b1598cc13ced59c3ba680"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "dc2504183ddf4ccac27498f8ab728c6e"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "85f9540d05f8bf4c5244fbf488286cfb"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "903004f3d853cf44f0f85b83593116d0"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "87c0f322b84a7079269a2bac0d157ca6"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "4785f66c767211f41699707ddae2a2b1"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "45d46f06ff846d2b90080d55abe81e5e"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "be5de83174d331603415592dfd471954"
  },
  {
    "url": "posts/other/aria2-replace-thunder.html",
    "revision": "71fa330a0941156e059a75f5116d1789"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "429e4c33d828fe9e92681e9f4754f254"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "8e2e5c4ae6cd5725f1313489c94cdedb"
  },
  {
    "url": "posts/other/iqiyi-danmu-convert.html",
    "revision": "6ead52da9293368fd21ff38ee58d3cb8"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "5f30f5960383ad617f0e7058703083bc"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "c5c56f368b1afda9adc144242e406e31"
  },
  {
    "url": "posts/python/deadlock.html",
    "revision": "d1edd51806efd3cb951569e88983c6bf"
  },
  {
    "url": "posts/python/normal-errors.html",
    "revision": "59effe18b718459c18ca4e30f3eabe00"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "a0170eec6b0310e2166559cc1456fbce"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "04f3fa8c078d6ce51d54b833575460a5"
  },
  {
    "url": "posts/python/python-dynamic-import.html",
    "revision": "2fadb21caea06debabf6e3c5dace5012"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "4dde678422c293d9def3fe2b2e1aed61"
  },
  {
    "url": "posts/python/python-metaclass.html",
    "revision": "934cf3ff356ab8616f0fdce5fbfb0093"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "58f1c31152d2e0068c81a3bd2cac77dc"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "f827c3b9713c20b07dc6fe932118b84c"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "23585312bba569a0d3f25f5b278eeef9"
  },
  {
    "url": "posts/python/whats-new-in-python3-8.html",
    "revision": "dd7b8643c53deaf29f138bd6f84dd8b7"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "0fb783154d953905ce5d8ef6050dad75"
  },
  {
    "url": "tag/algorithm/index.html",
    "revision": "d6e43ef5f5114b8458da6449c2fc5df8"
  },
  {
    "url": "tag/android/index.html",
    "revision": "a306162836f1c7b4e87d275d4b3a3990"
  },
  {
    "url": "tag/api/index.html",
    "revision": "cedd24ecc681a8deee39366f6282aa9d"
  },
  {
    "url": "tag/aria2/index.html",
    "revision": "2edfd1d085ee121fd875040d790982dd"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "60d886a7f58f5cee4a504b205611572f"
  },
  {
    "url": "tag/context/index.html",
    "revision": "62c871e9d8c4cbee604d4c98c2723023"
  },
  {
    "url": "tag/database/index.html",
    "revision": "4a121613e4d709abdd44edd183e2e85e"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "dc7d0c1544eaffc5fc9c3177e7cd295a"
  },
  {
    "url": "tag/emulator/index.html",
    "revision": "3e7c84ff4a4f938c9ef97543abc930e8"
  },
  {
    "url": "tag/git/index.html",
    "revision": "00c59c796b18de7bb4cb53cd9e46d8aa"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "36a106464215e91d445e48fa93ac5e49"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "280102184107178a605985cd15b86b72"
  },
  {
    "url": "tag/http/index.html",
    "revision": "3572def5559435c6d3fbe979d60d32a9"
  },
  {
    "url": "tag/index.html",
    "revision": "e70730767c8b4d92495937f17323b06b"
  },
  {
    "url": "tag/java/index.html",
    "revision": "1341bbe9789339127f3ae35c3e133790"
  },
  {
    "url": "tag/java/page/2/index.html",
    "revision": "dc2109321074540dbd85d047b5965683"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "804b36525b3d0d611df7713a5cd7ae8a"
  },
  {
    "url": "tag/linux/page/2/index.html",
    "revision": "c60a9ca3a16445f2d3e614cccc624c2b"
  },
  {
    "url": "tag/macos/index.html",
    "revision": "8cd28bf4ee53dffc7c45e682bf967272"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "b9612129c0ea4d7bc5248fd37b44aec1"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "f3a80a7b2958ca7a493c1ecb30939500"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "437c68b9db5a765cb89bdb18d15db6a9"
  },
  {
    "url": "tag/mq/index.html",
    "revision": "a7f45603900b8cbd8f505b7ead50afe6"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "afd117b8610eb096621f92fd0a720eb2"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "b3e8321fea14f796669182ebac7704f8"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "0f1ff440536f4ceda8645186e39333d3"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "2c4ee1e59b48c5f84c28a1be19479bab"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "8177c9041bcfab7c025c85066f97dd5c"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "af48b528084be1706c94e76ab7c46515"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "dd455f6ee458a84fea033035ef403ed0"
  },
  {
    "url": "tag/other/index.html",
    "revision": "a49eafb0ecd87beaf2443d9816348779"
  },
  {
    "url": "tag/python/index.html",
    "revision": "68af4107d69c8df2597f6698fbbb33cb"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "5b1b8cb20c6d37236e778ff72a866eaa"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "5e424b920e718b6a9ea3c908d1c327bf"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "c4acd494ad0e0eb77571ec4cd7d3710e"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "427a9822114458b35735155dc40622ce"
  },
  {
    "url": "tag/termux/index.html",
    "revision": "e917026bb3a6d40bcca0f477ce10307e"
  },
  {
    "url": "tag/trojan/index.html",
    "revision": "d6511383c16cf8f23c45d768a01ca60a"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "3c6bed4bde3dfd30d9e9e7c0b27f9fa1"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "345468f278caec1d1c4976065b127a48"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "1eb28045e2c93d023db37ec3417d1280"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "7a3ab2754808e0a49edfc563df604dc7"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "70ec83e210717ec8d39029f5266a616b"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "cf546524be0139304131d987e0854e00"
  },
  {
    "url": "timeline/index.html",
    "revision": "b220171255532df130625deab8569307"
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
