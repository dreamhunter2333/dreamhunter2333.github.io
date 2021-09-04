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
    "revision": "782c132eb4527ffa221cf09c904e7b96"
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
    "url": "assets/js/100.3740e519.js",
    "revision": "291dc4b07a61c1b34eeb8d2834c70eaa"
  },
  {
    "url": "assets/js/101.d61a7fec.js",
    "revision": "5de7f09a6e140e6b1d5d866a5135961d"
  },
  {
    "url": "assets/js/102.973cc615.js",
    "revision": "d58047942d4cd2d9ff9237a9382c6652"
  },
  {
    "url": "assets/js/103.f4778463.js",
    "revision": "bc3d90bcb1fa9f7ace07db701fadabed"
  },
  {
    "url": "assets/js/104.332df172.js",
    "revision": "47ed817105b5189a7f041239a0a88dfe"
  },
  {
    "url": "assets/js/105.54626aa9.js",
    "revision": "f8daee5c834fdf21d684ee1f0c9652c3"
  },
  {
    "url": "assets/js/106.2749f1c7.js",
    "revision": "a8df2c817a64a2046f1aec0394a952d9"
  },
  {
    "url": "assets/js/107.04cfe14a.js",
    "revision": "0cd6ed9eadf2e9a100ec313361713e96"
  },
  {
    "url": "assets/js/108.1a20bc45.js",
    "revision": "711a5d3911cba6df4c6809192163bc43"
  },
  {
    "url": "assets/js/109.a74fb3f5.js",
    "revision": "01bbe2ff1f7730582f2fb7e91fe55def"
  },
  {
    "url": "assets/js/11.47bc4a45.js",
    "revision": "19db9262a8fc3992fe235d51eaca259b"
  },
  {
    "url": "assets/js/110.37c62ac4.js",
    "revision": "39c34ad5c65b5723ac03ebfed03c36e0"
  },
  {
    "url": "assets/js/111.e7683f47.js",
    "revision": "be35f6a82aeebb15a1fa8c1224838571"
  },
  {
    "url": "assets/js/112.d002f283.js",
    "revision": "fadf7a86804fd479edc3b0c7419bbbe5"
  },
  {
    "url": "assets/js/113.f43a86fa.js",
    "revision": "3689c59957148aeb3dd72afd37ca5b7f"
  },
  {
    "url": "assets/js/114.24f8c18d.js",
    "revision": "9bbbf25a99f7e1289aac156e62ffefa1"
  },
  {
    "url": "assets/js/115.44115573.js",
    "revision": "6e3eca16c5c86bf2679c701e77209740"
  },
  {
    "url": "assets/js/116.a3c2a0c5.js",
    "revision": "74193be1affb42138bebe7d78ee11b2e"
  },
  {
    "url": "assets/js/12.fe9dda1e.js",
    "revision": "e0ecc7eb6f5e7ebf529bcede22bb1e6c"
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
    "url": "assets/js/30.febb2ab1.js",
    "revision": "927f4e69415ca230ef0a65de9eab51f0"
  },
  {
    "url": "assets/js/31.75e58f6c.js",
    "revision": "9eb853a17a9ca3d7e8482ea35bde6cc9"
  },
  {
    "url": "assets/js/32.4de43589.js",
    "revision": "ec104413f5aae0511284c6069f1a98e0"
  },
  {
    "url": "assets/js/33.15cde187.js",
    "revision": "964ade45c19c7b1635a4c037900d2281"
  },
  {
    "url": "assets/js/34.bdb535d5.js",
    "revision": "180f697e79be9a80579be5017bf2731d"
  },
  {
    "url": "assets/js/35.ae2ffb98.js",
    "revision": "4d4947925db7ce8888acca5a7926f97a"
  },
  {
    "url": "assets/js/36.2dddbd36.js",
    "revision": "6ec3f2f8b64b18043032e7f7e18445a2"
  },
  {
    "url": "assets/js/37.21052d9c.js",
    "revision": "1871a46c1e641d46e1d1b4dc5dfadc42"
  },
  {
    "url": "assets/js/38.75429488.js",
    "revision": "601a2d908fa9594195f43e3212bfff18"
  },
  {
    "url": "assets/js/39.8676a336.js",
    "revision": "2651f22751e3b43c4a5909608b61ac32"
  },
  {
    "url": "assets/js/4.86f60908.js",
    "revision": "3d06712d892240a28aacad8852f306b9"
  },
  {
    "url": "assets/js/40.3d61e188.js",
    "revision": "68aefc11aa495297808aabfe8062526e"
  },
  {
    "url": "assets/js/41.e6472727.js",
    "revision": "1a66b34d787c94cac15afcb31a18f18c"
  },
  {
    "url": "assets/js/42.33c6ea9f.js",
    "revision": "d4d33cd73315deceec3ed4bc8d4fa416"
  },
  {
    "url": "assets/js/43.9a1cfb4f.js",
    "revision": "9fc494ea17f6f393d8bb85bfa9ee04c4"
  },
  {
    "url": "assets/js/44.1c4cf83f.js",
    "revision": "5f9977c0aaf3c1eeadefbe2e4df4c890"
  },
  {
    "url": "assets/js/45.e7acdaec.js",
    "revision": "cf59f1eba57a1af4e4b1b57ee7eb6619"
  },
  {
    "url": "assets/js/46.a990fff8.js",
    "revision": "457c6908d9aa098e7f1b8bb37516d0d5"
  },
  {
    "url": "assets/js/47.1109349b.js",
    "revision": "f0013f7fee0d0536a4e1aaaa34e00318"
  },
  {
    "url": "assets/js/48.445235b3.js",
    "revision": "dc20591bf3268a95a9e95bcd3da4a5e2"
  },
  {
    "url": "assets/js/49.047faab7.js",
    "revision": "f0f5d8da950971b7f0bb0008a8abdee2"
  },
  {
    "url": "assets/js/5.27f06f69.js",
    "revision": "c792f4fa73d87062ee85435ba0618451"
  },
  {
    "url": "assets/js/50.bdfa0f0c.js",
    "revision": "d437309b72c361651af23c17520bedb0"
  },
  {
    "url": "assets/js/51.6c5a5fa6.js",
    "revision": "b99810be44c864ebdee0d89945e6a3ec"
  },
  {
    "url": "assets/js/52.12ed5b21.js",
    "revision": "58192061993433c3e6d1188291bb7652"
  },
  {
    "url": "assets/js/53.4c27da8f.js",
    "revision": "789515e220eed7bdc1a2980dd1274a4f"
  },
  {
    "url": "assets/js/54.bb74239f.js",
    "revision": "a5fa4c80e3ce357cae03fe0054a604ce"
  },
  {
    "url": "assets/js/55.53d75522.js",
    "revision": "a2320770179142c477acd9e8a90868d9"
  },
  {
    "url": "assets/js/56.c8515af1.js",
    "revision": "4821721eeef2daaa98997caf07ce2a26"
  },
  {
    "url": "assets/js/57.3b076a03.js",
    "revision": "0cb11f42ff89074fbee3fb071de50f6f"
  },
  {
    "url": "assets/js/58.7d4d11b9.js",
    "revision": "fec4d7ff8bd52bd816f4af2cf8848ca0"
  },
  {
    "url": "assets/js/59.4f11166d.js",
    "revision": "1a5680fb612dd9a84590cef7f524aae2"
  },
  {
    "url": "assets/js/6.354dc403.js",
    "revision": "02cf03ef48a6dbc4db87069885e9a6e7"
  },
  {
    "url": "assets/js/60.9ec99f21.js",
    "revision": "553c4b07e02ecf4f7bef241fc1728d94"
  },
  {
    "url": "assets/js/61.bdd30b0a.js",
    "revision": "dac298a85b26119c23cceda2267b0cd9"
  },
  {
    "url": "assets/js/62.c77c4e28.js",
    "revision": "8fbc86f1b9eb1b5ccfa37c8d79af7f17"
  },
  {
    "url": "assets/js/63.13725022.js",
    "revision": "fc65f909ad39a680399f760629de7ea5"
  },
  {
    "url": "assets/js/64.64c8bc59.js",
    "revision": "b7da4b3d2ea953504d2f406e15e1875a"
  },
  {
    "url": "assets/js/65.66cb4fb8.js",
    "revision": "0057cf023f7d62d8f96d510d97df5b37"
  },
  {
    "url": "assets/js/66.0be67f9b.js",
    "revision": "69b634fc0169fa24115280c2b7f251d9"
  },
  {
    "url": "assets/js/67.8c6b8313.js",
    "revision": "648b0d18a241633b7df69c5a83d172c3"
  },
  {
    "url": "assets/js/68.3982acb0.js",
    "revision": "4710a44bfdefa88072e654a52f23ba16"
  },
  {
    "url": "assets/js/69.ecb07ab9.js",
    "revision": "e9d0bb2e2b1edd2bb232be281d67ff7f"
  },
  {
    "url": "assets/js/7.10f00ff4.js",
    "revision": "86e4d2ed660f70d29ac03714e7596bb2"
  },
  {
    "url": "assets/js/70.c6d34f80.js",
    "revision": "db1cb12811cbff0b226b8fe3d577b55a"
  },
  {
    "url": "assets/js/71.e750c1e3.js",
    "revision": "2f812fb8fc0eb9c78b8a4a49eae83f8a"
  },
  {
    "url": "assets/js/72.ca980082.js",
    "revision": "fb1925e863cd634b6a286e639505c80a"
  },
  {
    "url": "assets/js/73.125e90cd.js",
    "revision": "8d9f161fc77fc4140cf39d5dd532e5cb"
  },
  {
    "url": "assets/js/74.b4e1d2dc.js",
    "revision": "c1c9d9973731dff44eac8ddb20e6097a"
  },
  {
    "url": "assets/js/75.dc1d4898.js",
    "revision": "ad00b307cdeadbe2162c0e3582343dbc"
  },
  {
    "url": "assets/js/76.88499cbf.js",
    "revision": "daa19381d1fbd2c0192607c8c9f5d2dc"
  },
  {
    "url": "assets/js/77.1465ba9f.js",
    "revision": "ee713ca06984fa80fde79b6fe1c2ec41"
  },
  {
    "url": "assets/js/78.72ffba48.js",
    "revision": "c7ebfda3ea040415f5dfb2a3fb053760"
  },
  {
    "url": "assets/js/79.b652c549.js",
    "revision": "bab6a2539ca289879879976063c07fe8"
  },
  {
    "url": "assets/js/8.26ed1ff9.js",
    "revision": "e39b5506af0f74a5591317583433a435"
  },
  {
    "url": "assets/js/80.2c05e384.js",
    "revision": "12314764ee6cc5833ad6f83337186e9b"
  },
  {
    "url": "assets/js/81.8ca1ce3d.js",
    "revision": "97c08334585c33c64d322a2663641cb4"
  },
  {
    "url": "assets/js/82.b0392c18.js",
    "revision": "76902ac51a63a0d4f8da122ef192878e"
  },
  {
    "url": "assets/js/83.848a5f23.js",
    "revision": "444c5844d7a023678c7b5ac1362bcbe0"
  },
  {
    "url": "assets/js/84.0aa4a713.js",
    "revision": "9963c930930a8b6f000f004264a4c329"
  },
  {
    "url": "assets/js/85.5a8ad5bd.js",
    "revision": "6ce9e5a4b60bff40038f9998da59b891"
  },
  {
    "url": "assets/js/86.cae43a4d.js",
    "revision": "272841fa8ba3d2e9c6335c565bf75ae1"
  },
  {
    "url": "assets/js/87.221e68cf.js",
    "revision": "c0ae59c754974739d963bc9a4f165436"
  },
  {
    "url": "assets/js/88.e26ba22e.js",
    "revision": "fa6ed36b0e2253150aab56c3175e4d54"
  },
  {
    "url": "assets/js/89.0107a28d.js",
    "revision": "497a0c3bbf5477380a6a1d66fe3cbcff"
  },
  {
    "url": "assets/js/9.a8404c27.js",
    "revision": "1c6d36b3b28c4ef94936183ce78842fd"
  },
  {
    "url": "assets/js/90.efb4220c.js",
    "revision": "e2a9a7d7a3340a1d59bb4e6d3ee7800c"
  },
  {
    "url": "assets/js/91.a31fdcbc.js",
    "revision": "8ae26a14ff67f93c3e715e41106fd785"
  },
  {
    "url": "assets/js/92.4277ae27.js",
    "revision": "e1d1ac2502504f64d958fc49465343c2"
  },
  {
    "url": "assets/js/93.b6a46b05.js",
    "revision": "228bf4382136b999a17a41dee1ff3599"
  },
  {
    "url": "assets/js/94.e6155be8.js",
    "revision": "bf1c641153e6952ca22f494dc22f8cc8"
  },
  {
    "url": "assets/js/95.328439fa.js",
    "revision": "aaf31aa426a1e8f375e12816d42e867f"
  },
  {
    "url": "assets/js/96.6bb82044.js",
    "revision": "64bde048914f368bc80e7311f3d2f4d8"
  },
  {
    "url": "assets/js/97.c7889426.js",
    "revision": "f76d28f20773c7da8a898eac81146cd8"
  },
  {
    "url": "assets/js/98.91a44773.js",
    "revision": "127b99eddc6e91a7dab6e60ff697cb48"
  },
  {
    "url": "assets/js/99.b1beb4df.js",
    "revision": "d3294f232d1c9be615badc97d36e56b8"
  },
  {
    "url": "assets/js/app.db7fd792.js",
    "revision": "0dcd64948ac0098efebcc224ed89787a"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/algorithm/index.html",
    "revision": "36941896598408ffe3ed0795eb450c91"
  },
  {
    "url": "categories/database/index.html",
    "revision": "b8ac19ae71fdefa04e830ae01f017521"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "d99f3404ca3a82d2806384d7259c5e70"
  },
  {
    "url": "categories/front/index.html",
    "revision": "f88280476271515fe70638ceb49cce13"
  },
  {
    "url": "categories/git/index.html",
    "revision": "5b45465febf373036116c2bdc0c35f9c"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "8b536846f72340b74944d820c5a8928f"
  },
  {
    "url": "categories/http/index.html",
    "revision": "8935b6d05d12b3117ff5984ba15de4cb"
  },
  {
    "url": "categories/index.html",
    "revision": "49a8448b3c6b3c68314c530d76b3fe59"
  },
  {
    "url": "categories/java/index.html",
    "revision": "69ebc943679e05216a950f0440bb6166"
  },
  {
    "url": "categories/java/page/2/index.html",
    "revision": "6d8b8b394651b5cf96e992fe133d8360"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "e95c4cabe3be47355ff1e7020fd5df29"
  },
  {
    "url": "categories/mq/index.html",
    "revision": "c1ce9a7773aa8a432c181b90a9075903"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "c63632be4f800373dc81f1d8bb6732a4"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "fa8edce2e5d8cc0b9cd7b73d11d68977"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "cbe569afce2bcb5046b7a726d3c801ba"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "b4f41f9d7afeaf7de02e5406a4e341d9"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "e0473dd8fe2aad894169121eb9d0aa3c"
  },
  {
    "url": "categories/python/index.html",
    "revision": "9cbcd6ff0c477114053dd925db96ae40"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "47a12328a3f00be14aed74e1b9675201"
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
    "revision": "414f45dbc9ad54b5e80de82a1833d4c2"
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
    "url": "posts/algorithm/traversing-binary-tree.html",
    "revision": "564fe1a04c4f81889cd6d3505ddcbc3f"
  },
  {
    "url": "posts/database/SQL-constraints.html",
    "revision": "262a86c8e304ef6fd2d38197745e3982"
  },
  {
    "url": "posts/database/SQL-keyword-order.html",
    "revision": "a7536b2afa9a9d1823383e09017f0b1c"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "ba2906fe0ee045be872ebda4792f80a1"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "1cf87071872816daf6418b8496f0e482"
  },
  {
    "url": "posts/database/why-redis-fast.html",
    "revision": "ce30961fc3f6bbea41f6189fa36b7a24"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "75e441b545a11a054a7a377c701d651a"
  },
  {
    "url": "posts/docker/docker-host.html",
    "revision": "bc832b5cac8eafdaf9b51727419c2eaf"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "af419e3bbff4daf891a6b88a20c777ec"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "45ce593ce7f85d72304d60cf5eadfee3"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "bfb16d8f9670c286fbb0f6070127fb77"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "88a2ee71211181e65d346b10b56432ca"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "48a7045db5d5f5fb8cd618e8da1ae505"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "81897e834921e7620dc9117f053d5ee2"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "85664f79676c97e9e20a4d8624d9282c"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "973020a92984a10829f8b18b6a77a0ca"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "1d5a814dc83238e6bcd4df2e20c44f69"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "6e7b7e83b7d546e41e21cf2e0657f2a6"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "1cbe6301e0bdf90028ac06af67b26d84"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "deb74c2c8e034beebaab3de5b3e20cb3"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "eaae24709fcd39a0d6b79a5f6e9f5616"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "d8e8dcbbda5f1f87cc9bf3bde5dce347"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "1527e13a1ee89f1c12c5ab1c5f418171"
  },
  {
    "url": "posts/http/https-shakehand.html",
    "revision": "28bf042fe568059c24a4a2adc494bdbc"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "19f71e6b8843c889f76e67effd669d2d"
  },
  {
    "url": "posts/java/java-http-proxy.html",
    "revision": "24a87f82efb8d1144b9e9ed45dac22dc"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "98c3969e92c930811e91151526153201"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "e29223f49bcb8ecd5eaa603d14ee9a13"
  },
  {
    "url": "posts/java/java-spring-MyBatis-Annotation.html",
    "revision": "b6264a151b47e66325389fcbd72bb11d"
  },
  {
    "url": "posts/java/java-Tetris.html",
    "revision": "f1b16436defd7dd04040579c83efb550"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "3cc3087727667ed7da4e7f36703b059e"
  },
  {
    "url": "posts/java/spring-RedisTemplate.html",
    "revision": "52f7e5b4925569d82ba4bd8d404a99db"
  },
  {
    "url": "posts/java/springboot-disable-autoconfig.html",
    "revision": "f33f111ff6fc72135b6de2d960627c11"
  },
  {
    "url": "posts/java/springboot-schedule-task.html",
    "revision": "19fda11fb8a735eec7e1026c07456bf6"
  },
  {
    "url": "posts/java/springboot-swagger-ui-custom-config.html",
    "revision": "273d1e8edac5b1b72f26bc609c29ba43"
  },
  {
    "url": "posts/java/TOTP.html",
    "revision": "63f93d96fade3b148a3f616e933ec0bd"
  },
  {
    "url": "posts/linux/linux-chm2html.html",
    "revision": "ab4d70c719c49359892a7253db0ef3d0"
  },
  {
    "url": "posts/linux/linux-ecs.html",
    "revision": "07cb21f91e6ba7fb4547443d85ae478a"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "a6e09d841001ce348837b16c3f37054c"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "5fc40489c72a57b5303e346c55300eb1"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "047dcdc89c88c364bbffa7ffd3f5c766"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "47a7728bd7d230045a5564489028f150"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "008e3f7c592c754ce6fa817c8104cb14"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "72688ef6a4d1d0c811239c45fc52c4f9"
  },
  {
    "url": "posts/linux/wsl2-install.html",
    "revision": "d91ccc281022ecdbcace571b8e058395"
  },
  {
    "url": "posts/linux/wsl2-use-winip.html",
    "revision": "8fda5b07f6015bbb9d419f111f00f562"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "010bad5ea8b710130bc685a6950c3345"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "7595467402c7c0c53d8e569f989e37f0"
  },
  {
    "url": "posts/mq/ensure-not-repeatedly-consumed.html",
    "revision": "27fb0c546842c2f085590830d63ae618"
  },
  {
    "url": "posts/mq/ensure-order-of-mq.html",
    "revision": "3f5110eacb439c543ec71f706f666fcd"
  },
  {
    "url": "posts/mq/high-availability-of-mq.html",
    "revision": "4fd287daaea72d86a20a1dc2b8a156d3"
  },
  {
    "url": "posts/mq/mq-problems.html",
    "revision": "400e32df87cf8741bce4373a70226a7e"
  },
  {
    "url": "posts/mq/why-mq.html",
    "revision": "9fa3afc8e1fefd2efc2eea8177f0fdcd"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "378cb1ea2337b2229d0e0725555c01c6"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "c0e5c177a13940d5af321eab933c341d"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "2843c01b2d23a24b1e575a818c802b34"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "e116fe4722392a31426889d5b8334d10"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "871efdb82daa219b91eb94a252f47d2b"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "5547339c3164d36fc704392a5ddba4c1"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "59ab9d7fe433b3a9d73ac2817773dbd8"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "f686610509b1ce1569ee1b72e1b90da2"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "92df2f9b82ef9a7d06254580388618e5"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "42d907a15f5b6f8c62ea263412239776"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "785b5f4ef4baa86f73fbbf9024c83fd5"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "816ccc3f555fe92247417440f95610c9"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "cc876b7a7d2759fff3a77a3538f0dc8b"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "477b05c118853573fe732b9b644481d3"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "03b809e8b94d108607f8fd82f44b3466"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "586b2dc467c64b8ff37cde44bfa6ab5a"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "ac836c129ec2e428d75030f5a19237e0"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "4fe703285b77d6a2c6b987c24c714dda"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "9e9407e2e184570ca6d2c84902f394c9"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "b094d71d1646370d253431c7a9d41e35"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "a88013f418b99a9ae42c284910862007"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "437f0f106ab1d0d676295692074724df"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "fba875ef0894ff1057bd17b7b8ebad76"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "a0b223a27562a5c46711d4f06125349e"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "825471f47c8bcd0b8632aba26ea13501"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "aa11a7743f4f76d35a101cebfd773d64"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "bdce9f0f637a5702e7cc54e53a1f8a6b"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "19d86be01a770c23dde90bbab5b5c9c8"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "5d7ac390081a13079340434521c42d79"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "deaf355061071ab20fb715b3faeb3614"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "09f540e700808e728d7e5eb6a2c38767"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "b7747d93da5d35b68e9fe609381c906f"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "c5dfcc3f17c917bdaaccbf2ae7040c0b"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "f940d91622f759fb4770851b5fde4594"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "b4980d97ce00d21395907a0e74bf4ece"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "3869149805f6f23e682ded861da25c83"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "813b2d0868a785828bfdcb461f036225"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "dd98980960335311e3d80cd5215e03df"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "c054ea2999ed1f403bb36bfddb4d76ae"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "4ad3df3a9deb609214e1cdb666767f12"
  },
  {
    "url": "posts/python/deadlock.html",
    "revision": "87d07a7be5a5389e9c9c00e23b633580"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "4c6d3e0d02799a55762fa3e26f2e1b73"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "e38b096a1d1efcddd867794f0ba70461"
  },
  {
    "url": "posts/python/python-dynamic-import.html",
    "revision": "10f35151a3b3952e74e3465688669c3a"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "a87c783911f0a5dc9479a85a6c8db620"
  },
  {
    "url": "posts/python/python-metaclass.html",
    "revision": "99e15d7b1649b2caebd3ffa40954a0ce"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "7cebd54e29cb0ab7bf5a00cbf6969a39"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "8c38c2d3ff66e68b0139c101bbe2ed04"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "7c56adee182ef30e15777fad576f77ae"
  },
  {
    "url": "posts/python/whats-new-in-python3-8.html",
    "revision": "4faa02a7a80339758d6f8b0404b9f7c7"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "6351a1fd2d143e895dfb5f3889961f46"
  },
  {
    "url": "tag/algorithm/index.html",
    "revision": "89c40ac003cc6eee69621f4df607511b"
  },
  {
    "url": "tag/api/index.html",
    "revision": "95f07d90269dc5fe5f0389bed652b4ca"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "d1a14e9b168d1bc1685dc179a1adfe2b"
  },
  {
    "url": "tag/context/index.html",
    "revision": "39b435abcac2d354d683bb89f9d89cf3"
  },
  {
    "url": "tag/database/index.html",
    "revision": "89969409da1a854adcb422914fd04ddc"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "637611fdad553e09edb9f006154362dd"
  },
  {
    "url": "tag/git/index.html",
    "revision": "41ea8a31d81f3edffa5d832c0b6e2e3d"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "de73faa2add9c0181d3ce0f793c3daaf"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "d9d883b9f1f75ece88e893fac3f605d4"
  },
  {
    "url": "tag/http/index.html",
    "revision": "85f5ca8b648a205c61c06173e06b5d91"
  },
  {
    "url": "tag/index.html",
    "revision": "483f2fee13bb14fa40b5ed9fb2536943"
  },
  {
    "url": "tag/java/index.html",
    "revision": "bb477371fce259035da9f69113887eae"
  },
  {
    "url": "tag/java/page/2/index.html",
    "revision": "4c4d1abfd62d0ee68b7b0fcc0afb806b"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "e2f9cd435494d53c418bb1c4d5d18989"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "6c78b6c41f3ba7c61804b974fb4f3d48"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "0dc58c0b728eaca310c8070f375022de"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "130f6ca7fbc208686b6bc4ed4dca0be5"
  },
  {
    "url": "tag/mq/index.html",
    "revision": "e26ca6d402987d5b5d36bed15c20a060"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "1724fb8f5e44ceb4df25657bcb277c42"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "26dd618632ba65cd39df831c2aced48f"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "432396265bb58fdc26483354a14e17f9"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "30182bd5f83bc73659ea7830f8cde898"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "fdfc2a6e76146db4759df1a691703dad"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "823af56cdfd71bd24cfd3238f8a446a3"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "56de367ad56f510b0b46a2f780abd052"
  },
  {
    "url": "tag/python/index.html",
    "revision": "ee08d6a02d8b920f41235d264216cbd1"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "c58122f65d12237ea1d4a6f6424bb148"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "371247c20fd2a983c7375755c3bf9b0d"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "c32c509834cb6c797a5530e0380a35f7"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "39b859b352c56ce59cb7578e11b17400"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "cf0e7dcaebc79e1f0375e1b482003321"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "dfb5d9b243eb19fdfdd0fe16a17d5c83"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "3209b66047b2f2418570d0ab2f223ef3"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "5553b110d99517538005e81e5d971830"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "328bf1d592e6d932da9ff5eb61923dea"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "0ca14bed7bd0d597436a8eb32cff5d7a"
  },
  {
    "url": "timeline/index.html",
    "revision": "e050659366a6742b77db616993f20f7c"
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
