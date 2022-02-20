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
    "revision": "85ad6a5ff76344d16e6df3ae3c22eb09"
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
    "url": "assets/js/110.70e71b78.js",
    "revision": "c57ae06f00fb698946cc4c8304775ca4"
  },
  {
    "url": "assets/js/111.0aa54a96.js",
    "revision": "a32c7e5e1a18595e0b75a267d2c52fdd"
  },
  {
    "url": "assets/js/112.41595b11.js",
    "revision": "ca114a4613746d4f17fdcb323520fd9d"
  },
  {
    "url": "assets/js/113.7a322691.js",
    "revision": "53a0bd70cb9368c4705ef836f7e73b99"
  },
  {
    "url": "assets/js/114.c1a32fef.js",
    "revision": "53fb43449417220984ace651125c5b73"
  },
  {
    "url": "assets/js/115.6553050d.js",
    "revision": "f5f2f47cfb1224b4769167b3cb0c9ac5"
  },
  {
    "url": "assets/js/116.99d9d824.js",
    "revision": "522ef0dea8ed63da5af1aeb73f5ad8a6"
  },
  {
    "url": "assets/js/117.59c3c463.js",
    "revision": "d919b843c0c201b4e26d0211f8b2d4e4"
  },
  {
    "url": "assets/js/118.90abb223.js",
    "revision": "46c78f3957fed551bce19530e70226df"
  },
  {
    "url": "assets/js/119.8d3217a8.js",
    "revision": "541cec618e3d4da64684a2f50eb0e029"
  },
  {
    "url": "assets/js/12.503e8ef8.js",
    "revision": "c9056c7445755f995df8f6aaa7f57b49"
  },
  {
    "url": "assets/js/120.e4e30fad.js",
    "revision": "3aa2c9654326e0cb7d17fb48b7aa0f7c"
  },
  {
    "url": "assets/js/121.3b27a03c.js",
    "revision": "d4c8baea3e736cd10d79b46463bb22e8"
  },
  {
    "url": "assets/js/122.1e28d2cb.js",
    "revision": "11e9fb34c619ec2a72f63d16695f3771"
  },
  {
    "url": "assets/js/123.435a75d9.js",
    "revision": "6e1dbb3f191f4157dd245a91369aa748"
  },
  {
    "url": "assets/js/124.22ca30bc.js",
    "revision": "74f399303bd2bc492efb16835d0a2544"
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
    "url": "assets/js/37.61c6b646.js",
    "revision": "6cf0d463ea2eafb9a23861842e3edea5"
  },
  {
    "url": "assets/js/38.f65cab03.js",
    "revision": "bde0a0b88ba3a89a366769361231fb5e"
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
    "url": "assets/js/88.70e9b570.js",
    "revision": "7b4e41f2f64032f1330ea92175e0b975"
  },
  {
    "url": "assets/js/89.726d24fb.js",
    "revision": "c6cb9c8b5de515cddd69c4e74ead6e11"
  },
  {
    "url": "assets/js/9.c7a7978f.js",
    "revision": "f56f166ac4c80ccfdff0fac95ed03493"
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
    "url": "assets/js/95.a93ddb84.js",
    "revision": "94717c795c4ff9c022960583c69ad037"
  },
  {
    "url": "assets/js/96.6ba22353.js",
    "revision": "c09995427d02f5e337f876372c30dd8c"
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
    "url": "assets/js/app.bfd184ac.js",
    "revision": "a0aaf7f26fd9eedb390a3cd68edfbf96"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/algorithm/index.html",
    "revision": "130fc87a74f483fa515a9f179a0a3467"
  },
  {
    "url": "categories/database/index.html",
    "revision": "361237013dcc8c49584d555277023998"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "3cca5e68a257f48349b1c87dab523cdc"
  },
  {
    "url": "categories/front/index.html",
    "revision": "2d74a402e47e00b2e5b2550be551c1dd"
  },
  {
    "url": "categories/git/index.html",
    "revision": "ee76a63ca1bd0fdd6af9fe1c5a577682"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "f400a1bc517bf3d198992782d3488791"
  },
  {
    "url": "categories/http/index.html",
    "revision": "2aff9882383c189988ffb2b4abf87125"
  },
  {
    "url": "categories/index.html",
    "revision": "06c4bf331573de2a21f39fdb9aea7b57"
  },
  {
    "url": "categories/java/index.html",
    "revision": "52a3e91c7869e0dfaaa15ca3c3f36245"
  },
  {
    "url": "categories/java/page/2/index.html",
    "revision": "8d58f8d0abc88bf51eba66b6d13a9224"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "f6143ad6afa5d21dddd1c3dca6b38ff7"
  },
  {
    "url": "categories/linux/page/2/index.html",
    "revision": "445ec91f7ba34b3eab22bd087b29f9c5"
  },
  {
    "url": "categories/macos/index.html",
    "revision": "36599f758565b7f10e496ee99f775df9"
  },
  {
    "url": "categories/mq/index.html",
    "revision": "36ba141a86a63650b5237ad9d415d37f"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "af5cc63ecea30cd2adb71ea801e94d59"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "e878970d97f438ef06bc03a89877a1a2"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "cc25c9b7d8afb32f478dfaa44cd9fb72"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "2ef6a0134a7a0d4d989bafd3e467cc27"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "874b321c0c425e8f0dca6c38365ed4b0"
  },
  {
    "url": "categories/other/index.html",
    "revision": "eef8bcfca0fe5e4acdc69ccacdff6786"
  },
  {
    "url": "categories/python/index.html",
    "revision": "038ee14e17cbda5ed9d85d09a8355f83"
  },
  {
    "url": "categories/python/page/2/index.html",
    "revision": "749dbc82ea2026fbd296339cf9ebce4f"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "ba7eea4553de4a3ba2156f27008c87c2"
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
    "revision": "9ef9fa3768620bf3ddc5c148a159ebe8"
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
    "revision": "1192491aab34a0b527fdc5e59dd10b62"
  },
  {
    "url": "posts/database/SQL-constraints.html",
    "revision": "01d336163b7e5536157c323f6823646a"
  },
  {
    "url": "posts/database/SQL-keyword-order.html",
    "revision": "0e8dc3f8ef36e1c20de0ad780929efb6"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "06f633cb15176c78b2a4c53b56481ae6"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "d5a0ce762137496e11406458ab9541b7"
  },
  {
    "url": "posts/database/why-redis-fast.html",
    "revision": "779ae8802236baf4bd0ea430651398eb"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "c17fdbd24f29d325b02b6e70aef5d660"
  },
  {
    "url": "posts/docker/docker-host.html",
    "revision": "1716d4c5019a10bb5a384eaa29d08ccf"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "939663a59700f9dfef69fb4b4bddad72"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "015bdf8e27d9c0d4230701e66eb06b0a"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "5aeebf1680952f56be9f916ccf6dc958"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "db4112de9f959b4fa11ae5de4ea270de"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "1d0bc79d945fb56b0b5815fd02effcec"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "625410f5f290bf65231c97012919ea5d"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "b432af1518d2238ff899dbd76cb2c6ad"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "1df439cc56f51f718a36501fa2dc802d"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "dcc491891b1534bbcb2433c93a7eb542"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "07b90078114a78307133b160da8489d0"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "ab64b44395f1b9d66f5751696d4437a2"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "4a31d91629e8877b3e31b16385b3c8a5"
  },
  {
    "url": "posts/git/use-multi-access-token.html",
    "revision": "780c03c7e9e083b8687d648a5e010416"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "57f73bc92830587c51750db1e65048a5"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "972d81889218ad3a57bd9eadbd70a77c"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "2fc51ba8b3f2934f8e8c78cae8960099"
  },
  {
    "url": "posts/http/https-shakehand.html",
    "revision": "2b8f55dfeaf1b0b0a124c3622d751253"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "462fc771c40b427cf88fbf926049d1f7"
  },
  {
    "url": "posts/java/java-http-proxy.html",
    "revision": "278aa4ff2898964754dc8d8b0b5a78df"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "e45416074d82f3197442e64affd1b301"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "e56b051638931e20b93fa7f8a57b45c8"
  },
  {
    "url": "posts/java/java-spring-MyBatis-Annotation.html",
    "revision": "81de3c3bf381e29f029968ace6f935a6"
  },
  {
    "url": "posts/java/java-Tetris.html",
    "revision": "743a6cec176baa75c08a64f8ab65ef5b"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "7b2481b5d1b0bda7050e87a8ce59841d"
  },
  {
    "url": "posts/java/spring-RedisTemplate.html",
    "revision": "4797d8e26d79b1a2a8ceb16716a5ca77"
  },
  {
    "url": "posts/java/springboot-disable-autoconfig.html",
    "revision": "236806906a5582c39ba7cda8c85761d7"
  },
  {
    "url": "posts/java/springboot-schedule-task.html",
    "revision": "9d090739f6c9dcc524e9ae14dd3529fd"
  },
  {
    "url": "posts/java/springboot-swagger-ui-custom-config.html",
    "revision": "a4c3c84e14d53851574c8303511d55de"
  },
  {
    "url": "posts/java/TOTP.html",
    "revision": "49b7c399218ca3f182e914d94fc9e4ac"
  },
  {
    "url": "posts/linux/docker-nginx-acme-trojan-go.html",
    "revision": "e59f30b09795c7d1452af6c420b0cf48"
  },
  {
    "url": "posts/linux/install-ubuntu-with-xrdp-in-termux.html",
    "revision": "b88916e5d3410e4f2a527ec8246d88a2"
  },
  {
    "url": "posts/linux/linux-chm2html.html",
    "revision": "935903ee30228aa973509a87ae1f9f98"
  },
  {
    "url": "posts/linux/linux-ecs.html",
    "revision": "f02a9018d47b681e76e522c29ba3c9d5"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "b4c58401893c5f99be7dd2d3c5c7146b"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "fd459f58a884645af6630ded7b6f5acc"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "d7662bf70e0f8905a205cab9b6124e8b"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "2a55904e03e27c694f45c0399e4e0fbf"
  },
  {
    "url": "posts/linux/ubuntu-switch-sources.html",
    "revision": "a5cfcd00b740e8c85ea16ed98c8ab60c"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "571aa48e028942262ff4b7b5e5f0a078"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "b75f0ce0b6ca52edae2cab0d6c9b6e46"
  },
  {
    "url": "posts/linux/wsl2-and-docker-compact-vdisk.html",
    "revision": "4d44b6498431c7bcffc115c4e068da07"
  },
  {
    "url": "posts/linux/wsl2-install.html",
    "revision": "65da54cb67d17913c42dc023bf2312dc"
  },
  {
    "url": "posts/linux/wsl2-use-winip.html",
    "revision": "dc6cc5e3af2d680d050a44e56ad508b6"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "607809ca9a2d4cbfeba680952ca478f9"
  },
  {
    "url": "posts/macos/android-emulator.html",
    "revision": "fe601eadb91b3554a7d5c0851eda1d42"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "db83f12363690e54d6d5dd1b281139a0"
  },
  {
    "url": "posts/mq/ensure-not-repeatedly-consumed.html",
    "revision": "6a30dc81bf61568d5abc644fe08ab22d"
  },
  {
    "url": "posts/mq/ensure-order-of-mq.html",
    "revision": "05323997c634ddd98e55852644fc6218"
  },
  {
    "url": "posts/mq/high-availability-of-mq.html",
    "revision": "c605fc7217181ca7738fea9484614728"
  },
  {
    "url": "posts/mq/mq-problems.html",
    "revision": "977c602b90b12a00c719a4ab31e42e78"
  },
  {
    "url": "posts/mq/why-mq.html",
    "revision": "17942e653ee0116a1ffa51db6ebd3798"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "c786a1a6f9e970d9d21f432d2bd44952"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "1423d6fc15325e653f96531367f431fc"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "6e09911440c8784ee038ca0f89e1edcb"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "d84578a962a598cc37156508bbb3bb07"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "d236705d200aafef8c46f7e607ae6815"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "026c45dfd45a7a492ec5be857e9e9720"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "3c4a09038da4157a23d466e17d38a3ca"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "3a3487b607d00a6caaab1497e5d55161"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "408350b2662b961e2504b3397b759e04"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "806f6b1e893ea16df9ee1cf5d17c85ab"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "a30037da82171264c8ea3aa92a5541c9"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "1740b0d5e204eea4fbd9a2c6ebb1406a"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "5e320ef2cc42a8d7cffdf6f167505ec1"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "4726b13d6fa353b23de3f5d51ab25b82"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "296e0f01c9b23c30b1607fc02a920a94"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "50a53b2f56b018389a61d7b220630926"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "572e65061a3d0b3a84cea9606658e6d3"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "fac82adfb70a38af54778e46f439e306"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "f91aa9acbea3be429a2d006873421a5d"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "9b548b1069ba0136fc940952cc0a13e2"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "db1c73cfaf2db2ffff240789fd2fd622"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "ec38f2d00ba4a51f8c0347d4b37217d0"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "7b3aa67fee8de3d41fb292bcb718f33a"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "4e5c164117497c0526e3d8f4c1dbdd9d"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "d35eb7fdac31ce4f94ee73a0eab5bc04"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "f2d286ff696b51bc222e214b3c953274"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "cd5ac1bd8f0e4ff1ff4f2dad5c9d55a0"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "0c0bc49bf0b345f170633d7686d68658"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "a6006599383abd054c75a7386b4d8643"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "90e588409ef1421d26d8e777bc143e45"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "a78976bb1eaa9e1ac75eb9c32ea9135f"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "fb44b424b2b9039030c8d5ab0df5be1c"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "df0184a42ce0dd61cac3822727f2eaa4"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "97716fd9a4b4e40801d9aa776b71561f"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "327ae0a50261bf5c27021efae9db5828"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "867e64e4b7584e8a7aeaf4a20762a8a6"
  },
  {
    "url": "posts/other/aria2-replace-thunder.html",
    "revision": "7babfa23ae86c69e3d86df8738ebdd96"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "81ed0a7ec20d2dae365dcf6999d9d009"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "c8403f4bbced062b57156d9792071825"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "d29f2e18dac6bc4bbbef9dc1efabfa9f"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "3cd153d65aa9a3d1ff16947b86210753"
  },
  {
    "url": "posts/python/deadlock.html",
    "revision": "70edfc449294a2598510be39598517d9"
  },
  {
    "url": "posts/python/normal-errors.html",
    "revision": "394aca938b9d57001ef4b7851b71f677"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "a86e0afa9766fd4d56ad25713bc7e529"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "c15b96f0717eff3cd534ed20467a571f"
  },
  {
    "url": "posts/python/python-dynamic-import.html",
    "revision": "da2aba5dfa32d820e061a7cc21b2e9f2"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "38c5e8005eec65dfdefde4bfee557fee"
  },
  {
    "url": "posts/python/python-metaclass.html",
    "revision": "20948f97438b9be9453dd4c5a7262635"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "795ae7f011a0b40a449fdf8a62df8168"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "b76d170afe288533ad9615e3375b6781"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "31dae45f83f9b4bab80c920ea482bcda"
  },
  {
    "url": "posts/python/whats-new-in-python3-8.html",
    "revision": "8704288c3c57749183e49ccfbfa643e6"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "256ae467e888b4da245cfc74d5e0435a"
  },
  {
    "url": "tag/algorithm/index.html",
    "revision": "5d15fd8e3d60a40ddcaed15a45667e8b"
  },
  {
    "url": "tag/android/index.html",
    "revision": "a4ca802f6d4308640106e06b34a834f1"
  },
  {
    "url": "tag/api/index.html",
    "revision": "e4a1ab0a3d65ced8bc09a290e64df27d"
  },
  {
    "url": "tag/aria2/index.html",
    "revision": "c14c060984ca540bbd03a54ffaeb7658"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "d179775f779491c6b177e206524583f5"
  },
  {
    "url": "tag/context/index.html",
    "revision": "9521b4813ada96f7c5cb44d59fed7998"
  },
  {
    "url": "tag/database/index.html",
    "revision": "969c679ac4abdafaaa891156ecf2012b"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "677e7bf457e5eb9b12301d5028ee791c"
  },
  {
    "url": "tag/emulator/index.html",
    "revision": "e14d76f5c7cb2e6176d1fb7a3a8937dc"
  },
  {
    "url": "tag/git/index.html",
    "revision": "122763c1f636955c74d01c79809a02bb"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "d2527aadb3d0463112992bff1979db78"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "6776ee8acc15a96c9b7bf26e758f1561"
  },
  {
    "url": "tag/http/index.html",
    "revision": "89430f149bf9ed19809dfeaa60e0ca30"
  },
  {
    "url": "tag/index.html",
    "revision": "28480d8b3ea956f38473ddd258cda8f7"
  },
  {
    "url": "tag/java/index.html",
    "revision": "67d948c1161616c8f17950c88b4c64cf"
  },
  {
    "url": "tag/java/page/2/index.html",
    "revision": "1e85ac0db6fcf4686d2c338d38862094"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "99e1ec5ce2b3b48b024ce4444ae25ae8"
  },
  {
    "url": "tag/linux/page/2/index.html",
    "revision": "8ed4dfebb8fd423188fbc852bb844f94"
  },
  {
    "url": "tag/macos/index.html",
    "revision": "415377a3da42e1c49e48d58b6e17099c"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "7c1689e74ab41e4632223d4019b10d04"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "0113379a44267ef0af8417f5493831e6"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "bdcfc5cd3fd4d39cbf204a0e4f6aca51"
  },
  {
    "url": "tag/mq/index.html",
    "revision": "ecb0345ddcf84ac6c272855f6177c9aa"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "a78d47763f9c42a385e38db3bb37674b"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "f15e2ad1d7216f9f4c0cd98ff2d32949"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "88c2c8444697bdd328b137d7619dd2dc"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "a698799543fa6a8090e106b4478296a1"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "1df3f06871f2e244a45ee8d2ebe9ad31"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "1ef5e39d7764ce0762f2e4b41f76708a"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "0a681dff28a91e7a67ab98324e0b51c0"
  },
  {
    "url": "tag/other/index.html",
    "revision": "2b71e1d544f577cab5d835af5423035c"
  },
  {
    "url": "tag/python/index.html",
    "revision": "c948c38b2054414ef8176df0bf67c417"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "e94e537a98ad8ad721f46707810aece9"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "ed63fbdacab75392f63262178fa517f8"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "66f92987b7b29ea1a567fbdc80cb2309"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "ad3f35fea984cd442d472ee725eaf42c"
  },
  {
    "url": "tag/termux/index.html",
    "revision": "a5369866fb186f2979fc917ff86fe422"
  },
  {
    "url": "tag/trojan/index.html",
    "revision": "10e053212a294e18202e13920fc17f94"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "002409ae0056eaa3de8da9e6e20b2bb9"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "f28eaf7ccccd70ec2a4526079fe4e4da"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "5359a3191e87cbf49b29a077408a242b"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "baa90cde30f38443d0d4aa4e4ad614e6"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "463f283beac2dc71f27cd89f41644f9d"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "835e1df4551e0497fe41cbdea1055ed4"
  },
  {
    "url": "timeline/index.html",
    "revision": "30a4facca4563fe69b04011e9778e5c9"
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
