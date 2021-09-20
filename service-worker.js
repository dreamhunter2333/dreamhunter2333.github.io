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
    "revision": "439bd1018bc56c36287342f15743d63e"
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
    "url": "assets/js/12.503e8ef8.js",
    "revision": "c9056c7445755f995df8f6aaa7f57b49"
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
    "url": "assets/js/68.8d898153.js",
    "revision": "7a0ef8f322c58fb3bd34103c53d12293"
  },
  {
    "url": "assets/js/69.b9f66bb9.js",
    "revision": "9eb15dde8977d1614f0976c3ba1ce3ef"
  },
  {
    "url": "assets/js/7.10f00ff4.js",
    "revision": "86e4d2ed660f70d29ac03714e7596bb2"
  },
  {
    "url": "assets/js/70.3f99cf8a.js",
    "revision": "7e6cdf337438e3d0b51ab81bd18f0c2f"
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
    "url": "assets/js/app.b7d605b8.js",
    "revision": "882bbc8e952ae416ea6cd8d3bdc08e31"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/algorithm/index.html",
    "revision": "fba933452459e44e31897d0e860e533f"
  },
  {
    "url": "categories/database/index.html",
    "revision": "da2da986d4f20cbcab89a86a697caf93"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "ea8ae8e9173e0e18bba2b89b282ace2c"
  },
  {
    "url": "categories/front/index.html",
    "revision": "daada1218a19cd963e4026a73118da17"
  },
  {
    "url": "categories/git/index.html",
    "revision": "e4024260d9819d703b23d7e9355ad424"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "5b177322c402ca4a53701ef50687f549"
  },
  {
    "url": "categories/http/index.html",
    "revision": "807248fa26ee4f5e9ae229214f0f5017"
  },
  {
    "url": "categories/index.html",
    "revision": "ca4b533a0a827bc360dd79a74a02a159"
  },
  {
    "url": "categories/java/index.html",
    "revision": "ef727be778a8660ddfb9dbba3a7ae122"
  },
  {
    "url": "categories/java/page/2/index.html",
    "revision": "a53954ae5e9c254b1c761f468db3b886"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "b4337aac0f6edbe55bcd82af5f98f88e"
  },
  {
    "url": "categories/mq/index.html",
    "revision": "cf1fb883246ca2b145fa62afb57ea0eb"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "73ac99a69551fc3702eb708b04c3868f"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "64eb26082e90703ee6098e64050fe8ee"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "f9b81465db2134fada1c6123a48ed1ac"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "8400d2b831d8b2872b45032ca8e13265"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "d71c91dd64facb69247be528d7e3bb49"
  },
  {
    "url": "categories/python/index.html",
    "revision": "c69552736dada8d4d3d8dd123c51d919"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "febd4420e393db162c885a25defa6183"
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
    "revision": "216c16036aa04fede441f137dbf79349"
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
    "revision": "9dae64d19f5deb20f3083c37024d3ecf"
  },
  {
    "url": "posts/database/SQL-constraints.html",
    "revision": "9708c621a51c19d0cee4bd4cad542c8f"
  },
  {
    "url": "posts/database/SQL-keyword-order.html",
    "revision": "9f0acad8d93e7c4f939e0929fab8d582"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "0166bc2bd4f8be8fc94b3b39b024a4f1"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "888cdae9cc159b0c19504b2d196827bf"
  },
  {
    "url": "posts/database/why-redis-fast.html",
    "revision": "9f9c8a408a82eb476dc4f70627d59fe4"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "ecddd5f05ce7ff7c6aa909f04929d671"
  },
  {
    "url": "posts/docker/docker-host.html",
    "revision": "2a2ffbe107e9d90e43f4be942d81a2a5"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "3728dcf33348dc979c73de371bba079c"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "63a13ac0b9225273b05f5e607a8c4675"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "1fb22c9cd4d666378583c3b349878c95"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "c55c72a241e90d3f51e2527833ac4b40"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "50146751c8b66863a005a1b4c77fb61d"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "d2ff5cf0c8dae4917576e716dba3b0c4"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "53cfa66bbe12e23b17b038603acaa0b9"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "b917b2fd3ed0bb0a86257202c8fe7861"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "5e6717855832ef85e820ac6986712a36"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "095ba8c8609d1320e8921da31bb63a08"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "b3222b7764006e65829209e2f9a7c65f"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "e33d5f11301374651eb88fed3d55db50"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "026ddaa17051f16cffefde04b806719a"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "747b0121d332899e64d57a2c87a95719"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "0f6578650076019b4471642bc12c0b2c"
  },
  {
    "url": "posts/http/https-shakehand.html",
    "revision": "a69603dcbb0c96e9ef63e7d8d892995d"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "fd78c25a764406c3a5252adbe6e1ec11"
  },
  {
    "url": "posts/java/java-http-proxy.html",
    "revision": "4ef09f9f9aa9fa87eac0cae6aacf53f9"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "a2b986e604705c95812623a786749064"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "25a2dc7b29df53d9a99ea26c2ca78541"
  },
  {
    "url": "posts/java/java-spring-MyBatis-Annotation.html",
    "revision": "97a1ac5fca421c4a4876426e63dcc0c6"
  },
  {
    "url": "posts/java/java-Tetris.html",
    "revision": "c1bc91ecfe000e40770d0d01d36b4ad8"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "073fe14529e3b9bdadf031625b69be87"
  },
  {
    "url": "posts/java/spring-RedisTemplate.html",
    "revision": "ca89e5a335a46a9fe3fc268b3d09a2cc"
  },
  {
    "url": "posts/java/springboot-disable-autoconfig.html",
    "revision": "363ba9ef3ed75f917e1eff4d09e4b7aa"
  },
  {
    "url": "posts/java/springboot-schedule-task.html",
    "revision": "ca51af800a42a72be4883ab65da5a632"
  },
  {
    "url": "posts/java/springboot-swagger-ui-custom-config.html",
    "revision": "d8d5c2c6da0baac28797d488705d6446"
  },
  {
    "url": "posts/java/TOTP.html",
    "revision": "d5b14bdda47d90565c84a5e3889eee7a"
  },
  {
    "url": "posts/linux/linux-chm2html.html",
    "revision": "6cb4cdd51ecc05a00eca7fad80f23298"
  },
  {
    "url": "posts/linux/linux-ecs.html",
    "revision": "e3feb2c9191eb5ffe5e7253857666932"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "16dbd7610f3609fc402b210d92e6fad8"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "b2fe20eee061d0ff03a808809398785b"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "f79e8296cb432821804fecd2ad7bf699"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "2df520d302a2dd403f69d4c480d36964"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "9c39fdab8a05f1659c10f7f4ddbccd91"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "7f552bc9b6f5ea6ffe75833a05360544"
  },
  {
    "url": "posts/linux/wsl2-install.html",
    "revision": "512e2af2800f20de9b94cd0b86beb5e7"
  },
  {
    "url": "posts/linux/wsl2-use-winip.html",
    "revision": "3b6768a2b040e1e032407ab536a69f5f"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "4eb7fe14ba6dbca8a45f683590555e7c"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "e0a351cf6363d933e8a3ecaf3d976bbd"
  },
  {
    "url": "posts/mq/ensure-not-repeatedly-consumed.html",
    "revision": "f395499c6998571cabfb2288751fce63"
  },
  {
    "url": "posts/mq/ensure-order-of-mq.html",
    "revision": "c8323b56777694c4a1092f2c0210a0ed"
  },
  {
    "url": "posts/mq/high-availability-of-mq.html",
    "revision": "e0782747adf204053d180743cd91e48d"
  },
  {
    "url": "posts/mq/mq-problems.html",
    "revision": "e039918dbd9976417c97c6bc84f2d3ac"
  },
  {
    "url": "posts/mq/why-mq.html",
    "revision": "95fc1ddd7ad5b69b1d2b3d8e4957ac27"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "b9b0f11b529443ec2fc76066e84337bf"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "d8fe8b05f0ce592def7d812a1076480b"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "56c25256235992a73b92adc5b86c6b0b"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "ca045dba8fd6186bbcd16f07a7c81fd2"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "453f34669bad407fd1230a60c32c78db"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "a13cd6ca9e248eb10291ccff4cb909be"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "725723ba1b4a261c25c53bc677c826c0"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "43a8be934a23680c58b40088bc0be755"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "b22a0336e96a5124f1eec9b9f43271d2"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "599217d689a4a7713bab28b2d07586c2"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "13de351198ecfd42b1d89488e6d05a82"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "761e99d79e80d52e24055a3fe63cb78c"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "22399a9f4a939e72781e78c9d111532c"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "60e6097daa0a88825cab1d75359edb7f"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "652c963cfd450e442d50569ccecd3506"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "8da6a82861cd7c53c0caaa3dc168cf8d"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "edb6c3bcdf84077475045b29c2a143f0"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "64a2c25aaf5d20f37002f2f56c974dc1"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "2309b86f11b98574e65178e04b061a90"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "33cf81fbad5a988df24ad8c53f94e4d4"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "a03c164c0d3c249e7aa02a986738c92a"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "2c1869010ba9b62154f2bd262b12497a"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "cf81c064dceb5b68734a51775fbea3c3"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "1230618a6826e861f3149b7ca7bd4e44"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "480cc25e7f74a2b93224b1b95f1723cd"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "a0e0935d1d7453c1686e25e4dbb322ec"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "e7e0402b1913df416a5b20a52dc04d64"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "6414a0c0e2a2600fbf2e2b22f2bf9d94"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "6e506c56704416f29ac2662bcd20ee4c"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "e2e84c272dccb3e747d7e49a103fc892"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "a076dd35114dfe501c6e3661b2b0af57"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "e7e26cb669d7207fe0c4d16bc950538b"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "3042c712747f1dcbacd74151803de6c4"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "9ee255007c25f917649f7ad80ebd76c8"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "421efb3f03f7e666e5c7c0511aa83994"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "afbbfc990cb82a8352cb888e6a975d88"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "c0ad601afc5ca720a65b354bb52754fa"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "41ae64c201b9b86b7d71443742cd4aad"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "3681f163dc0ec9a4bb2f55d54933f460"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "8f440a314e02b50eb032dab1f29ed056"
  },
  {
    "url": "posts/python/deadlock.html",
    "revision": "5b58bb4c5f2f3071b7310d0ab08d1410"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "4becc0d11068b5f3409a7109a3ffa04a"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "48b3a46d2254f4e0cef288c4834aac71"
  },
  {
    "url": "posts/python/python-dynamic-import.html",
    "revision": "bf091227076de5f6ad967ed8108381d2"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "ca2124e686e9c27f8e105c805805e853"
  },
  {
    "url": "posts/python/python-metaclass.html",
    "revision": "9a8f9b29a72b097f104035815cb02c0b"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "2f150b7563cfbf9d2d1077ab8f896c9e"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "b17d7f05bf9fce43eda9048c9d77a25c"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "fa3802ca5c324d1842df94ded912207d"
  },
  {
    "url": "posts/python/whats-new-in-python3-8.html",
    "revision": "674fc02a62d044eed99afa7b9125ce40"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "ca762c0b4fac51624470d441cf407475"
  },
  {
    "url": "tag/algorithm/index.html",
    "revision": "d3c9eb585beb47f8ab12b63171465530"
  },
  {
    "url": "tag/api/index.html",
    "revision": "7400d6b67e1538cea4a7dd54cd301c12"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "2fcf5d7329de77f342ac6254cf2c70cb"
  },
  {
    "url": "tag/context/index.html",
    "revision": "c5c06f388d44194485aabb8835a8867b"
  },
  {
    "url": "tag/database/index.html",
    "revision": "175aeec9c74ec235d7566b97ee55bdd3"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "7c87ecb48d343d312450ec9905685aa1"
  },
  {
    "url": "tag/git/index.html",
    "revision": "dac532e7e27dfbbd9053259bbee45a1d"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "a58726dcd658fc2250a5e1f6c6c3f9cf"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "c48734ecaf48808613b6b5794c96dd4d"
  },
  {
    "url": "tag/http/index.html",
    "revision": "9e09f61e8dd873e1d5260a78990d6c9c"
  },
  {
    "url": "tag/index.html",
    "revision": "a30746891774febba1b9f5fb75b16882"
  },
  {
    "url": "tag/java/index.html",
    "revision": "c8f36ad4925bda27fb03c765662b58b4"
  },
  {
    "url": "tag/java/page/2/index.html",
    "revision": "717efa8f601a534ef0dae8d035cd8952"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "bd7555d2f6f8a376514cc2a8b27d683c"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "b89d57eaea4e4f5cd0bce09b5a50ba51"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "0fd7015f669fc47682bb2f9e013918c7"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "2aa76f08d9cfd02d0125bca074360ccc"
  },
  {
    "url": "tag/mq/index.html",
    "revision": "7e4906b0ba2b753c50590aca0e46121d"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "55ac5236ec62215c22dfb1c51fa1c107"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "548ebea96afd9b0d40c060ccf20f8ad5"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "db4b37967d7954f2e481555b7e839b4f"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "2e25216c5a0a8d416f0fe385d4a190d3"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "3098eaf2c2f01f6c46a0db6b0d2b7a0c"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "5afd5a6c7e7519e0145bbb5cfd3eb6bb"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "c6910c8f2705af0c68146f7f1b403245"
  },
  {
    "url": "tag/python/index.html",
    "revision": "47ed0dd4494125e8305d04b157e6bf5d"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "da021bb050f4e78d7299691f158210e4"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "b351444e3e64eb899fcec0c37a2f808b"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "1de6167dff07ef4208f88d2e37b31a24"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "c032ba3e73392a14aba2e5c01221104f"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "e2059a80a37405385aa2c4309a118355"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "cd7ceb242a0808b07097afdeb65a4702"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "3bc277e673d510dde70aecb186fe95d5"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "7a5bed9520e6d01fea868a94db1a51ff"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "5a505febb14b1b381735cb1e3ddce300"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "0f93c6c081c470449b58ed5fa3a691d4"
  },
  {
    "url": "timeline/index.html",
    "revision": "46c6d0acb21f5a248de16c0a23a1cd95"
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
