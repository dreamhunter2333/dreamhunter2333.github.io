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
    "revision": "ed520d3064b7028045728643fa565fad"
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
    "url": "assets/js/105.84c94f8c.js",
    "revision": "f7615f222214e02511686f7acc300864"
  },
  {
    "url": "assets/js/106.423d0adf.js",
    "revision": "a7cc376cafd8932b2b046441f3f7c847"
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
    "url": "assets/js/111.7b2a0783.js",
    "revision": "d26d97511978659e521d9f0e45befb2f"
  },
  {
    "url": "assets/js/112.382e2e77.js",
    "revision": "18dfef8b077bda10e7a540d473a6ffee"
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
    "url": "assets/js/12.0daeb00c.js",
    "revision": "4f84ce8e9a99cd1538a39cb0f1c47ee5"
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
    "url": "assets/js/122.358e6bbf.js",
    "revision": "f4c2375824cefe04e773045d01563ddd"
  },
  {
    "url": "assets/js/123.0e2b28ff.js",
    "revision": "13f60388bbb6b88a24e0a340cf921ca1"
  },
  {
    "url": "assets/js/124.22ca30bc.js",
    "revision": "74f399303bd2bc492efb16835d0a2544"
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
    "url": "assets/js/52.a64bbef7.js",
    "revision": "2da6c09ec0300962bf467cedcbd8628f"
  },
  {
    "url": "assets/js/53.8bfbb428.js",
    "revision": "1ebf8ade149c1ab5d6d7f1629e205e71"
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
    "url": "assets/js/82.0c903c5c.js",
    "revision": "a12e7682b598e9270be5fe2ce5a1789d"
  },
  {
    "url": "assets/js/83.21b5e9e6.js",
    "revision": "01b7cbb40c6e7cdbdced8b04bf70bd13"
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
    "url": "assets/js/app.7d3f2f1a.js",
    "revision": "efa26620fef8e6e3402a2fc38d523bfd"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/algorithm/index.html",
    "revision": "2e00dfd1a8998df513aa70994811f9d8"
  },
  {
    "url": "categories/database/index.html",
    "revision": "e4ca608bd8f2cfb5b99caa709049bf19"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "b2c8f1c09f07ae3a71050c426d44a7e9"
  },
  {
    "url": "categories/front/index.html",
    "revision": "8634e6ee0cf1e5617f8784a59f460fa2"
  },
  {
    "url": "categories/git/index.html",
    "revision": "324e3db0a9477e58e701eace2b1d2aa6"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "d447bc16564b285a82c0fccc38d97b86"
  },
  {
    "url": "categories/http/index.html",
    "revision": "4454f466242e067746dff1ccc2400798"
  },
  {
    "url": "categories/index.html",
    "revision": "992c2525e3c7548d7474db623fac93af"
  },
  {
    "url": "categories/java/index.html",
    "revision": "970f678f0c430267df99f42947f1b9c7"
  },
  {
    "url": "categories/java/page/2/index.html",
    "revision": "0185bd859cde488efa913f9ef0626521"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "98d36682acb47c9169d44dbf7953aa4f"
  },
  {
    "url": "categories/linux/page/2/index.html",
    "revision": "a64d391c79bbfd058ef4455326598c75"
  },
  {
    "url": "categories/macos/index.html",
    "revision": "214614d034f1b973cdac69d949b12f14"
  },
  {
    "url": "categories/mq/index.html",
    "revision": "c91fb055ba6e7859d5d1f9e1d76610f3"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "8969ca61003f9d34089a192914a98171"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "1d979cdbb9365b55595bc20b523530ad"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "95c7b30bbe4a4f60465860301d89d6b3"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "6596e1616baf8cd72b94acbfef8f1e30"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "8100b1796735a2b54700edbf77940a3f"
  },
  {
    "url": "categories/other/index.html",
    "revision": "b5a69ea5409043d0ce6733d0f0618d6e"
  },
  {
    "url": "categories/python/index.html",
    "revision": "06e35c889a3a26b4c9cad354083bd870"
  },
  {
    "url": "categories/python/page/2/index.html",
    "revision": "f58dd3f454ceb1b333c29bee8e7c856e"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "4e8d16034d4fae6a43231bd062bc5055"
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
    "revision": "4334f47320d1ce3553a022cc4de85a78"
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
    "revision": "61c6222dae54811a7a13b67ac82ac432"
  },
  {
    "url": "posts/database/SQL-constraints.html",
    "revision": "5c224b9fad365b7e516f253c49fad8ce"
  },
  {
    "url": "posts/database/SQL-keyword-order.html",
    "revision": "1eb3fa1550fb82f2f417181e4cb6b982"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "25f164f5ac29a1f66934fe1493ea1ae9"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "f2ebb8b70665592ab1f4d0b639c78e9b"
  },
  {
    "url": "posts/database/why-redis-fast.html",
    "revision": "d2270fa51e5a475fee3fc8793184afc1"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "1b461ee788c33f7e407c7e47dfd8dce7"
  },
  {
    "url": "posts/docker/docker-host.html",
    "revision": "759847e9979a24fec837867691ebef1f"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "64ea61bb1aaae4330b83d0c316df07f4"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "a2c0b4bc079d4b35f58d32f2ad87c207"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "97cb00113adf9d79d6c878127fc8064c"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "e14c1b74a57c8a82ab946605657507b1"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "6f8145e1b3150237ebbcba3de1e17d9a"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "18766213fd586bcc7d71f57d824d1625"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "8af1fdc1cfb91e9e3ad562fe046f58b4"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "23298451457f68286eff5b65d375f7e8"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "92e9afc10c4295961638fbb942f40a56"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "8890af740a29c5521ec35219aeb1f20d"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "b00601dd2c824b71ef3bb45d8f3c0980"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "fb0b7c221688ee4fd76dbe0010adcba7"
  },
  {
    "url": "posts/git/use-multi-access-token.html",
    "revision": "3719fbe289c8df14e3ba00951d786820"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "063c7470ca68e08ae9e0ccd7dc12582c"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "bc2d01bcfe6b748940c88d7f94d1438c"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "3fde175d5125f8e1fdc77813cab3b0d4"
  },
  {
    "url": "posts/http/https-shakehand.html",
    "revision": "a077f79b635b7a57aceeb2cf21b594b3"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "e74e4e48b54a8012b8453aaee4bba7fb"
  },
  {
    "url": "posts/java/java-http-proxy.html",
    "revision": "23fd37c67352c88344eac7a211d19eee"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "a1f54e43fe0a0b97ea2b6e708a21513d"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "a93164a1870fbaf550a3c12c57e17187"
  },
  {
    "url": "posts/java/java-spring-MyBatis-Annotation.html",
    "revision": "f60ce8cc55cbd64b812a882f4cccab19"
  },
  {
    "url": "posts/java/java-Tetris.html",
    "revision": "81b84eab3364eac7e84dfc6e00d90278"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "328025dedce5aa3db359a48f6b7c2465"
  },
  {
    "url": "posts/java/spring-RedisTemplate.html",
    "revision": "a661760343d71a292e2f7081023ff264"
  },
  {
    "url": "posts/java/springboot-disable-autoconfig.html",
    "revision": "f1aeb727cee95f375436fbf7da6794a2"
  },
  {
    "url": "posts/java/springboot-schedule-task.html",
    "revision": "bbeadedde88f0e883adf768c444f70cb"
  },
  {
    "url": "posts/java/springboot-swagger-ui-custom-config.html",
    "revision": "b1ac8bdcf86cda6d2b50a9a64d3b8e9a"
  },
  {
    "url": "posts/java/TOTP.html",
    "revision": "43ca7ee8530a1374ee2993ca57b34e2f"
  },
  {
    "url": "posts/linux/docker-nginx-acme-trojan-go.html",
    "revision": "55b420a01277ae1a12415a1042a3537f"
  },
  {
    "url": "posts/linux/install-ubuntu-with-xrdp-in-termux.html",
    "revision": "c3cc1816b6ff332b10d8de3f6e073887"
  },
  {
    "url": "posts/linux/linux-chm2html.html",
    "revision": "c90ca06854b9c7b165999bbd783e0e5b"
  },
  {
    "url": "posts/linux/linux-ecs.html",
    "revision": "009603ea044463d78b88c8818e9c2f1d"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "55c2334adaab9a2a6b8ac53a15cc6e9f"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "856f3d3d80920334e48753d44ccb4061"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "cf3aac0e7af405d24f1cd0bb45de21d5"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "04499024869262b2ced3deb9d5b9a638"
  },
  {
    "url": "posts/linux/ubuntu-switch-sources.html",
    "revision": "0141524864504267e46e5b8fd2162d31"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "66c8ae6d39d0a5855ae933c59eb72e5e"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "5012fa12041e60e3140e0e948a1d0385"
  },
  {
    "url": "posts/linux/wsl2-and-docker-compact-vdisk.html",
    "revision": "09597cd77beadc2af49606788c0c8713"
  },
  {
    "url": "posts/linux/wsl2-install.html",
    "revision": "3d94d807550281a7cdf38e0900159f60"
  },
  {
    "url": "posts/linux/wsl2-use-winip.html",
    "revision": "29dd7c21dcec3bd453a094249cb4d472"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "ff9571dc86730b7429e58bab4d0d8bcf"
  },
  {
    "url": "posts/macos/android-emulator.html",
    "revision": "dd0acfd7db54d61840ebf7e8a678f332"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "7f155659cbcb5abcbe619d6d74c1f8ed"
  },
  {
    "url": "posts/mq/ensure-not-repeatedly-consumed.html",
    "revision": "171fefd32f25c5a479e56036aa85261a"
  },
  {
    "url": "posts/mq/ensure-order-of-mq.html",
    "revision": "d6f875cbd885c147497567a0b0ced016"
  },
  {
    "url": "posts/mq/high-availability-of-mq.html",
    "revision": "8d965297da9041cf01e477ca68a8c9aa"
  },
  {
    "url": "posts/mq/mq-problems.html",
    "revision": "094d0ccd651ebf61611b38b12f6f82dc"
  },
  {
    "url": "posts/mq/why-mq.html",
    "revision": "28ec6d23578af2c09e2b02e46961eaae"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "82cc30e749f96032fa6e363a69ef8652"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "75ed0ad9fd30ce50b8624160fea69bc2"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "bfa526b91b293df23815e4cc49c79f5f"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "d6a183177b6873a095c919097bd87342"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "0a12e8d628e8ba87f0bcddb46b4c3476"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "aa50204f3e7e1be08cfceb55fc9d6992"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "ae13a3d7dfe68079e28ffc16b3135ef9"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "aa859b4fb3a1e967662a9b1cbe1be5e2"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "4d73a4fe0fbdd0219adba54ce42e1c39"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "664c3a8bbc37356dac1323cc57a3b9af"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "1fd17e550d10403fa19cba4d80f4b92a"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "3c63909f8f43522ba633cb4f1605bdd2"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "1fc9c092b1adb7c1067bccaccd575cb1"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "8ab079179e72b475591532343a445333"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "79de6662c3820ea2bcbdc771b6fb9e27"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "a62a2cf06ca948dcee2a9c732385fe52"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "6576e91a240ca8f896b66a3381da6e6d"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "896bed183122884720381af143d9cb42"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "135557c684fd795b87a8150b4b4ab1df"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "b28008aaf4d9f55f0e32056d47d53cfe"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "669bf53527432bb14faf624c6f427741"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "63a7671b3d6eccce4d30b07381cdc6ca"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "b605b0e0ad134accb885c015f0386038"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "09c3769f678a2363edb950b772913aef"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "bfbeeca483ea8000dde1bbeee0b52fb5"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "194e6e9a64bb18d4528d5777c10d90d7"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "4dc3b4c4a3dd784cafeb9667c0be64e0"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "beb5105526ea8edcd6aaf4f8eabcd802"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "1af283009a74ec7d2868474f88acc639"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "12dabf8dc2d5c3723298bd6f60ad19de"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "a707035ad811fbf746624ef195157473"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "e3c8667caa8dfb080ddb70fc8a50a7d2"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "d89ad2ff7898037dc58b11519157e610"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "9ff355235446813a0c01d7649e06ec04"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "e864a596ef8fc8ceddc9361e8348d43a"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "b3766b9fe26cb1252237cfcc036353f2"
  },
  {
    "url": "posts/other/aria2-replace-thunder.html",
    "revision": "bd94df062085306d363787cfe0104d94"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "dab69a6341136092cdeda216d4a4010d"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "47f9b55b97ad19aedcc03be0d2441025"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "4ed9cebd0e8c618ccc2dd684f3c6c68c"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "23f2d68ebee42834918dc84e4228db11"
  },
  {
    "url": "posts/python/deadlock.html",
    "revision": "38a3c465c8a9fb9240ef73abf5046a94"
  },
  {
    "url": "posts/python/normal-errors.html",
    "revision": "00b0ecf33a711271d0152733505d6c7b"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "3bb0add6496c0b153e78bbaf98ae8eb6"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "c2cb58edde42232ba3ad56315144cd93"
  },
  {
    "url": "posts/python/python-dynamic-import.html",
    "revision": "654b6cc0109af8b4dd2fba856f82e951"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "7949745cea99a7fbef1c83e3fc9019d4"
  },
  {
    "url": "posts/python/python-metaclass.html",
    "revision": "b51d10f76a3e8b1a89da5daaf297eb79"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "4ae203468ec5edb6b5a48efd0cc5f10b"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "e80f392e1aefc70acef7a0ec0d3893bb"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "590fccc48bc4043c8029e56cf11fa5f1"
  },
  {
    "url": "posts/python/whats-new-in-python3-8.html",
    "revision": "6b3579b9637cd7a161a93a46d6ac7f28"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "c1bfbec6a99cc03c8aba14822144d3e6"
  },
  {
    "url": "tag/algorithm/index.html",
    "revision": "eda6a4400de869bd8c56908c3d59cbb5"
  },
  {
    "url": "tag/android/index.html",
    "revision": "5334131bb0f94f5fbad07537396c842e"
  },
  {
    "url": "tag/api/index.html",
    "revision": "ef1572b85df64eef73b5b44736ea972d"
  },
  {
    "url": "tag/aria2/index.html",
    "revision": "5cf429fc2f674371a7835e3aa478e412"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "79e3c0355dbfc63b1760d02a759f9188"
  },
  {
    "url": "tag/context/index.html",
    "revision": "4aecb02630ef052f76a57445faa7a7ba"
  },
  {
    "url": "tag/database/index.html",
    "revision": "d2e087b3ae787d1ef8f3cfe46626439d"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "a5ab687472f90d02dbe9694ea933b682"
  },
  {
    "url": "tag/emulator/index.html",
    "revision": "212dbeb0cdead1205143e6005b72a430"
  },
  {
    "url": "tag/git/index.html",
    "revision": "8bec1e3a5ea0c445ee46851605ff1581"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "632f4fd64a2da12040499bcb2ea85123"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "9097ff92556e3a386e431d06d56ae5ca"
  },
  {
    "url": "tag/http/index.html",
    "revision": "72d5a4d4ac08ed4240afd558df39154a"
  },
  {
    "url": "tag/index.html",
    "revision": "33aedbc35467fb1bae8f7f7f2932e653"
  },
  {
    "url": "tag/java/index.html",
    "revision": "df116aecd0b52636c6a3a66be16d54af"
  },
  {
    "url": "tag/java/page/2/index.html",
    "revision": "4fedb0880b62da0022f5ff3516c2f8f2"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "d54bd7c4f028b7d3c72e958bfea98f32"
  },
  {
    "url": "tag/linux/page/2/index.html",
    "revision": "42cfba21fa75bf90fb9853d3fe801373"
  },
  {
    "url": "tag/macos/index.html",
    "revision": "29d58e0a50ae8307395816b0146a45d7"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "92daa533fceb30f5c9be465249c61b11"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "b5129ba4747086311742c0537e38ace9"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "2db0c07980550771dd3a03f25f384c90"
  },
  {
    "url": "tag/mq/index.html",
    "revision": "80ba9a7b257ce353eacd6a7ca5c2c511"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "fefb670362c432400b6da62e1181afd3"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "6f9a264468b4cb9073916c37cad9ca5c"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "423ed8107e56931c183be1c19e7cb0b1"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "44d2797a2a10fb36b2f407ad1567f5d9"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "07654af25b2b9ba319d23d08750e41e3"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "90e9a8dacbde864539ebd44a486a1d56"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "0449a7af171d1da1b7a8cac01e40986c"
  },
  {
    "url": "tag/other/index.html",
    "revision": "670f5d821457f7b2f0ce59b9a278e7b2"
  },
  {
    "url": "tag/python/index.html",
    "revision": "c9b4a874ea76f5037aa4c0655aaba74f"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "f157331daa0e86d81ba8d1906f8b6268"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "a04dce7be237a49cb767a7e378653a5b"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "6ca148987e9e50e9931853fc775e09c0"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "3166b915b834163bd321c22d434a29d9"
  },
  {
    "url": "tag/termux/index.html",
    "revision": "5fae17d068ff3d8f70f1a22eed63a547"
  },
  {
    "url": "tag/trojan/index.html",
    "revision": "670f63ad696b7d49413e9ee9fb68bf2c"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "50f29bf1e361f24bf21b3b57a8e11ef1"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "cc1bcdbd7e756ba12d3de86db5d54b3f"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "f45155f94e3d82fe76bfb67d34f67e27"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "515c2f6ede0d8bec9ad355ce7dddd899"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "8bd66731f7de368e5625ec492da4caf1"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "227b6f136c1c912ecbed008be96c9793"
  },
  {
    "url": "timeline/index.html",
    "revision": "8b4ca870f4ae4b4c75189f474dafff4c"
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
