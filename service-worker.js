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
    "revision": "8f491533d934dda63bf0a9322bc49ada"
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
    "url": "assets/js/101.e504caa5.js",
    "revision": "1ab016d456eb3556cd55fb3c731bc7d2"
  },
  {
    "url": "assets/js/102.85e781f3.js",
    "revision": "574f7c1204719d56d6ce700074de06f0"
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
    "url": "assets/js/108.1c551aef.js",
    "revision": "c3ccdf941db97c656c85c226d4e6397b"
  },
  {
    "url": "assets/js/109.8485b9d3.js",
    "revision": "e0fb54fd0166ac8e8544d7b6c8d8c053"
  },
  {
    "url": "assets/js/11.47bc4a45.js",
    "revision": "19db9262a8fc3992fe235d51eaca259b"
  },
  {
    "url": "assets/js/110.fd1721a1.js",
    "revision": "45dfceaa5384b95ae5c5ac5988ad7514"
  },
  {
    "url": "assets/js/111.0aba90b8.js",
    "revision": "b7b38edd228416d6d7161ff897a15494"
  },
  {
    "url": "assets/js/112.6ece22b7.js",
    "revision": "753ee9aef25b3cfc829bac916624a760"
  },
  {
    "url": "assets/js/113.8df57042.js",
    "revision": "b80c41a81e2afef6e11f1db50cecd07d"
  },
  {
    "url": "assets/js/114.849fe16d.js",
    "revision": "a7bbf4a3f40bb3f130f311db5f0d84f9"
  },
  {
    "url": "assets/js/115.169312a9.js",
    "revision": "2fd9d3258d8e6e74bdc0641e0ee416fd"
  },
  {
    "url": "assets/js/116.931d50e2.js",
    "revision": "c5d22d0edde8d1e47cc61129f98bd911"
  },
  {
    "url": "assets/js/117.f04b9426.js",
    "revision": "df5cb9b8c4f314c27a5ece4b276be4c5"
  },
  {
    "url": "assets/js/118.caac70cd.js",
    "revision": "48e5b713f791f734b90f711dd43e52e0"
  },
  {
    "url": "assets/js/119.3260f51e.js",
    "revision": "56024b2c6087874d5d8f5f1b905e080c"
  },
  {
    "url": "assets/js/12.503e8ef8.js",
    "revision": "c9056c7445755f995df8f6aaa7f57b49"
  },
  {
    "url": "assets/js/120.b9a41cb2.js",
    "revision": "0aade9d1047198b4b8987815e2aa1cc7"
  },
  {
    "url": "assets/js/121.b28cf6e5.js",
    "revision": "b3c2b08095d5977ae3aaecba461decf4"
  },
  {
    "url": "assets/js/122.8249b014.js",
    "revision": "c550067098b2cc3b88a779226bfdda33"
  },
  {
    "url": "assets/js/123.31c039ed.js",
    "revision": "b01c9f261dea2b7888eae169a22ac430"
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
    "url": "assets/js/26.c4cf1abb.js",
    "revision": "4309fe8a4e248e0696cb163a71611a2f"
  },
  {
    "url": "assets/js/27.4e455812.js",
    "revision": "96df57b000100f0b0f11321c67d30d14"
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
    "url": "assets/js/85.92b91081.js",
    "revision": "fb7b6a16d4d838640896b19ff724c235"
  },
  {
    "url": "assets/js/86.a4d121c4.js",
    "revision": "e05b1e5745f4aae6403399946fa783f1"
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
    "url": "assets/js/9.2c6cc262.js",
    "revision": "c421e0da5badb7c59279edb89df09e12"
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
    "url": "assets/js/app.eab4923c.js",
    "revision": "566fbcf7358ea6b0737556267e2aece8"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/algorithm/index.html",
    "revision": "91195e0fbb969a067b32e0e34448ef86"
  },
  {
    "url": "categories/database/index.html",
    "revision": "02de606693b96b9075b5147b2b2fe1b5"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "27dc44f40862e58b70ec0dfa29bbf2fe"
  },
  {
    "url": "categories/front/index.html",
    "revision": "9d5ff46849f4f85b7900c340a0afc5bd"
  },
  {
    "url": "categories/git/index.html",
    "revision": "c7c4d821d38fafc44690539498abd004"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "f9413a4d1bd817d6b313708475a5243b"
  },
  {
    "url": "categories/http/index.html",
    "revision": "74c4f47d6f0fb16ad64d7e6cea0d710d"
  },
  {
    "url": "categories/index.html",
    "revision": "a1c76cc0836e20629d6a1a3c7c6a664e"
  },
  {
    "url": "categories/java/index.html",
    "revision": "fe937e00738ffc947ba0318f9eacbf95"
  },
  {
    "url": "categories/java/page/2/index.html",
    "revision": "9d120d03311913b273d68ed59418de87"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "dacc033147c9530eee8a6b3bf60acd45"
  },
  {
    "url": "categories/linux/page/2/index.html",
    "revision": "102033825f65d82f64bdf7eaecb662b7"
  },
  {
    "url": "categories/macos/index.html",
    "revision": "a8391e2d3047e5b996b3abb4bc2d3cb7"
  },
  {
    "url": "categories/mq/index.html",
    "revision": "3173b8dc6648989036d16a685501d3df"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "4b4151cc95f6bedda08b1c6cdb1ff6e8"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "0a68c178f3d25566434df7d51792fd8e"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "6122b229a7f6b0aa0ab1b3abe32019c6"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "321146ee40655c180a5eaa3dbb12be70"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "29257ed927b60a23494cba9412d4f926"
  },
  {
    "url": "categories/python/index.html",
    "revision": "776a2b81f16de99f377279ce16970f1d"
  },
  {
    "url": "categories/python/page/2/index.html",
    "revision": "634012219dff326f415199b26ea9f205"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "9d7896974edd0565d3a4d20bc01d335d"
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
    "revision": "a566bc202b30fad894d902c9b6105cbe"
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
    "revision": "8cd9b6c0c57a5a9db92bba3ad6ee521a"
  },
  {
    "url": "posts/database/SQL-constraints.html",
    "revision": "73cf087993a6dd2603817e285ad0bd39"
  },
  {
    "url": "posts/database/SQL-keyword-order.html",
    "revision": "63049425bb90417e257384c459697761"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "553d926aa2789bc913008dfb198a1fd3"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "c919fd3c089aa677c9434d84c5c6a4e0"
  },
  {
    "url": "posts/database/why-redis-fast.html",
    "revision": "b78433f4d898bbbb9c1157fc80cc9324"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "6a705a804f93100c6b245a2e39f5a8f0"
  },
  {
    "url": "posts/docker/docker-host.html",
    "revision": "7b01b6b267a99213d564d8905ae0a111"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "b598476f6e77c0ba12f1bfa6be03883b"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "d805cc2dd50f5ca49d4b8456c12fccdf"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "499f4e38d809af631dfa75f0fb6b79c4"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "5d7d2783ecb31d79d3917158bd7ef773"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "a200250a985cfbd8bbd78466ea17d4b2"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "838308346efc021633f8323c409af741"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "6e4d2ea5e2e944fd2d040685daa487ff"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "6aaa60504bc3f71db4c78174c7676eae"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "ba35cf414ce737b110e021ce5faa9efa"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "598f1ce5144bbea3d984ae853b850f9a"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "1bbc68170a052dcf09f3ce7d7fd2ae03"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "e75b41a834dd21a3b6331dcad6a661af"
  },
  {
    "url": "posts/git/use-multi-access-token.html",
    "revision": "cf167bfc83a873ba846591abbb96f8cc"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "de94289d897521dc6d1f2eb85fd43339"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "e02a7f1c8ea77cb210632eace899541f"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "a75aff22f2a49a4593297fd0e4df5b4a"
  },
  {
    "url": "posts/http/https-shakehand.html",
    "revision": "5b7bae95fd04405b09cd734a668d4603"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "65ca29750281fbaccc31c01359175439"
  },
  {
    "url": "posts/java/java-http-proxy.html",
    "revision": "82895a09b7d976e92a648dd47b88e40e"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "59d53dea3e2fd95e05c68036aa3b0a23"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "b116d321d9475a3bc5bc644d3530d28d"
  },
  {
    "url": "posts/java/java-spring-MyBatis-Annotation.html",
    "revision": "28ae8c40849ca083f23bad6aa0a3223b"
  },
  {
    "url": "posts/java/java-Tetris.html",
    "revision": "fc9fa163e63de67b3e8715550c9ba3db"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "7dd670a96a6395cf99f66aadcff206c3"
  },
  {
    "url": "posts/java/spring-RedisTemplate.html",
    "revision": "6f8a7ee4e84b76c072ba976c412bb9a5"
  },
  {
    "url": "posts/java/springboot-disable-autoconfig.html",
    "revision": "ebe1bd2cbea48f2f36ab8cb7b0224ec5"
  },
  {
    "url": "posts/java/springboot-schedule-task.html",
    "revision": "1b64f85ecb303840d7ad5c5c3b92b216"
  },
  {
    "url": "posts/java/springboot-swagger-ui-custom-config.html",
    "revision": "182d37eaf86826ea7f0b644a4da8a718"
  },
  {
    "url": "posts/java/TOTP.html",
    "revision": "a2255058920dd06b908eb0fe54014a5c"
  },
  {
    "url": "posts/linux/docker-nginx-acme-trojan-go.html",
    "revision": "60bf65790f9e478be511b7d57c798350"
  },
  {
    "url": "posts/linux/install-ubuntu-with-xrdp-in-termux.html",
    "revision": "9993e4cccd11d08ad443eb4798e65951"
  },
  {
    "url": "posts/linux/linux-chm2html.html",
    "revision": "1fbc3a114a7c5f6755cf987056bc12ef"
  },
  {
    "url": "posts/linux/linux-ecs.html",
    "revision": "bca18580170659e678b81be12510b5c5"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "29c8dde80e5d332ec3224049d03d8609"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "47427822f8bbfd3b5c51b639d1f5d174"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "5d650e785f3a1bf78cba3c393b32db8d"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "e3e494f3b711e21d2b91cde6d8ebb30e"
  },
  {
    "url": "posts/linux/ubuntu-switch-sources.html",
    "revision": "42f974dac7e1dbdb1f569c293d0b52f1"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "5b5a1b461530a4ccc9feead9f7cbc07c"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "9edf4f6d706f15eca3be8bdb5d449129"
  },
  {
    "url": "posts/linux/wsl2-and-docker-compact-vdisk.html",
    "revision": "ef65124173726ff2f6433bb4ac6d599f"
  },
  {
    "url": "posts/linux/wsl2-install.html",
    "revision": "72e6d655bbbeef781bdfc4ded44de371"
  },
  {
    "url": "posts/linux/wsl2-use-winip.html",
    "revision": "6a5b86cad9e216989cca9164e69ffeaa"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "6cf9667ba65777c0dccff8b32428a171"
  },
  {
    "url": "posts/macos/android-emulator.html",
    "revision": "82fc9f008b1f5f72b64727d6cbdd7089"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "1212dbfac7502584274c5c43c9dd8686"
  },
  {
    "url": "posts/mq/ensure-not-repeatedly-consumed.html",
    "revision": "b830d1659d91d790f2e723eed61a2488"
  },
  {
    "url": "posts/mq/ensure-order-of-mq.html",
    "revision": "0dec14ca347e7dc14fd2b1d82478bcda"
  },
  {
    "url": "posts/mq/high-availability-of-mq.html",
    "revision": "580cb4044ec286b7818ad866ca935524"
  },
  {
    "url": "posts/mq/mq-problems.html",
    "revision": "3da38c8eb906beddb699a93f2e90e0b5"
  },
  {
    "url": "posts/mq/why-mq.html",
    "revision": "a3b48a1abf7e2615520d617b64d94546"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "33e654936f3ad27b65b3635b2773ef5a"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "4c951eaa3487751119ab03d08b130eca"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "d6893585be21846aa67e48f6f522a17a"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "2a43e6db500fdf531c4f1da1ec347f70"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "27f933bcfb0a91aad754172c7bca9629"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "d3e45587aed2f1ff851388058c0742a1"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "9a03432db11cf625afc487c2092dcc65"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "382f70605278f0903bd93641cf5beb5d"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "642dac2852782f69ba84250e72a11544"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "a8c8fe8a10f71409f4256b090d09f9c3"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "2dcaa2091721ad2961dc2b7c0be545d2"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "914736a603d05afa18925a0b84a10957"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "56aa0d928ceab27bb928e91f238cfeb1"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "bb4f09e5b46bcae29f52efe45c1fee3b"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "649c37612bbd158c3daa7098bd178750"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "ff00ca2e03c1e20dbd88baefd2d64a4d"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "c5454df90204611fda6fbdf1b935a5b9"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "f6a6049aefd0f3d9f29fc42ba6154387"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "578995c0c6d6ede526247980380eb76e"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "04ea26bf38ce1927123756ce550d3a2f"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "afbd43bc71d578b065e39f2fd1642495"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "6cedf5c1ac042e98f73f9ffc5dccf323"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "24a55c787d3126250869b55e0a9a32ff"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "156ac95ceeb700561e4f5d7e3fb46409"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "e5bb324c4ccb5395f1f90065dba03692"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "9a77c66a50f09168ec5cf86df3f3fc64"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "4f8bc3f30dc9a4e9640cbf633de723ed"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "db8a70f9c0b9ef72d74fd3deadf5dc3e"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "b298c55d74f18c35f8a8cfe55d9bcc28"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "29b142b03c28af392ad79f7f8488f227"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "8b13fe61e0b649dea50fb7160af3f092"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "8291f198f72ec6f44f0191ff0cc885f4"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "3ca39c7cceab63c78bfafff035f30112"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "8b6f1e015fad0b3b8c3f354caff23245"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "f21ee2de14a5d006332b4b1ea0dd783e"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "8c3dc4e3bba97eaac1455db269bcb767"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "e6451bc2fe905c6171547e8293a2cdec"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "81c2c1f38d7dde5d190e7e6e63231669"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "1034513e9578c8bb8081970fead32d98"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "309ea11f11fb06878700f243fe07bb85"
  },
  {
    "url": "posts/python/deadlock.html",
    "revision": "e96d8bebfe8db4794dde199af364a84f"
  },
  {
    "url": "posts/python/normal-errors.html",
    "revision": "d7166f1e559c25afb81be59be783f096"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "431a2dcc7b1ed9d1306df8fea5ce3308"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "24544b785531a1292db07657522c78eb"
  },
  {
    "url": "posts/python/python-dynamic-import.html",
    "revision": "802402e1f2ce8841ab2ab50c39228352"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "cfeaac52f295b5b786b5a5c59b502fb1"
  },
  {
    "url": "posts/python/python-metaclass.html",
    "revision": "58b6074d1f53291094f4a0c5556f49a4"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "f0589ffc894984524f9d7c9365a508e2"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "59d5d2dfde2d1f93f36454ac6bd472af"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "376a40d9f4324a76a9ec7043c0f5d65a"
  },
  {
    "url": "posts/python/whats-new-in-python3-8.html",
    "revision": "c48b25cc49111c8505abfe5b117e5b6b"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "174a564b58b325f2f1c7f2151ef9170e"
  },
  {
    "url": "tag/algorithm/index.html",
    "revision": "4c665ee41879a4c66d138b455963046e"
  },
  {
    "url": "tag/android/index.html",
    "revision": "907be2726dc49bf15cd514a3910ba477"
  },
  {
    "url": "tag/api/index.html",
    "revision": "6e62b47664f5f10828c8ade219b00f75"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "1c9f455a4f821dad930f1f2f1c45274a"
  },
  {
    "url": "tag/context/index.html",
    "revision": "0c469af00ff27a280de86e7e893b0667"
  },
  {
    "url": "tag/database/index.html",
    "revision": "6acae9663b970173e74cfac4d4b2289e"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "b787cb7e54cf457ef9fd3d933539f83d"
  },
  {
    "url": "tag/emulator/index.html",
    "revision": "982f0cb3b9abbc674e4162b6d976cdb0"
  },
  {
    "url": "tag/git/index.html",
    "revision": "1d22696cead09c0282aefa5755424cc1"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "f51816dd3672e8c030b4fe8d35488020"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "ed1a34a98d47439ff9148a34c02dfff8"
  },
  {
    "url": "tag/http/index.html",
    "revision": "0db35d3318057f639b95c8b6a0b39854"
  },
  {
    "url": "tag/index.html",
    "revision": "1160be895aa6f287aec29cd45722f639"
  },
  {
    "url": "tag/java/index.html",
    "revision": "db250a2eac2a040a284ba5fc01e687b5"
  },
  {
    "url": "tag/java/page/2/index.html",
    "revision": "b03346ec6bd11e15a01236c88886276b"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "fe6066759afc44d7557799ea7db27192"
  },
  {
    "url": "tag/linux/page/2/index.html",
    "revision": "7b48023ffd5bcc3aadb9432c8699bab6"
  },
  {
    "url": "tag/macos/index.html",
    "revision": "f5e020e84c1d1c1a0c7669d335d56bea"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "8025a3861da37cdf441b81992c4a8c51"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "ee728b876d5649326c921af47c1f92aa"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "a7edaf678c6c89b3e7ed5bdd12b7119e"
  },
  {
    "url": "tag/mq/index.html",
    "revision": "89e5914a5729b48e83c9441910736a3b"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "252b480e819962e458c45663b2b38ca5"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "118d5dcfc098d9c3e0c91011a2c7eeb3"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "01d3ac820b39c00f8469a24a4320f54a"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "353b36aa888e4b23d80bd5cbe29deec7"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "5e08e10ef4260733b7c69c626f2f4215"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "06d895e8f449a6a51eb1342f6a220d4b"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "66035d3c8c5f704020d16f99491239a4"
  },
  {
    "url": "tag/python/index.html",
    "revision": "f1067345704b8eb0f5cc58cc2267caec"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "9f9267881aa8b943fb626e65db1c22d4"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "55d34d789379cb6912f55471b324f3dd"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "6ffcc4b9988d0540f138e188b89e3968"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "b1d8a5947762fb8eaf9f14a6d0ca58e3"
  },
  {
    "url": "tag/termux/index.html",
    "revision": "3d907c82fe965352cdb0104683d854f1"
  },
  {
    "url": "tag/trojan/index.html",
    "revision": "d1da17f335dd5067272d1caa47b0aaa7"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "f0afa4642932e1349c47a47a81c5650a"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "3a794dd1adb805ae6e655fc56339c0a7"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "658c931d32a5ddae92cd9ac44cba5c2f"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "48d4a1352b5a71731f282ec9d7fc92c4"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "f063c7e564b453caf53201f4b0a568ac"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "a0826e1d5ef41204d0717b7be707e7f0"
  },
  {
    "url": "timeline/index.html",
    "revision": "689247f4cde43a855ec6508b773d6925"
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
