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
    "revision": "c41a7adfb1954ac5be23fdf160a1c9f1"
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
    "url": "assets/js/12.b887a6df.js",
    "revision": "d07e56030756266de78a00b0d78eb43e"
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
    "url": "assets/js/app.0bb8be4e.js",
    "revision": "5ed19c7187ca2441722dda2fcac6b02f"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/algorithm/index.html",
    "revision": "ab60edfc0d03e39038644b274f44c9b1"
  },
  {
    "url": "categories/database/index.html",
    "revision": "d35e553e948391319b24ceb3a0d41885"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "e8c7822b704427474380e19846937619"
  },
  {
    "url": "categories/front/index.html",
    "revision": "98008e78ac56c4fb75101713f207b2f1"
  },
  {
    "url": "categories/git/index.html",
    "revision": "41ffe5e939db69a1cccd412d2f78d76d"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "ef8d9ba4b865ca153782a6c4e218469a"
  },
  {
    "url": "categories/http/index.html",
    "revision": "22ae7a05b787ba8634e478974f3e8724"
  },
  {
    "url": "categories/index.html",
    "revision": "23c58024147c0e2f089bcb5007a776bd"
  },
  {
    "url": "categories/java/index.html",
    "revision": "937f0816b7f58e76c45904e0632400a4"
  },
  {
    "url": "categories/java/page/2/index.html",
    "revision": "bae525dc624513e8867e2bfe7e45702d"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "b9602cf628c4fa2fa09bf09dcc429b00"
  },
  {
    "url": "categories/mq/index.html",
    "revision": "eed595fe857a5ed7f7bf3cf84c16e17e"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "285451a7148f0d1391cccb5137f73d81"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "8190137324c38126de08361cae7b5815"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "e5b6a6209cf55f81abb9fa33a06ea833"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "3f1a64991058e87ef7ff475900cf5cf1"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "8f678d07d7d60d05ac7bdde9e1605276"
  },
  {
    "url": "categories/python/index.html",
    "revision": "6bcd23916ee7bd94bb9bfb2dabdbc13c"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "5b6b7c724f4e100c0674a724f4f11758"
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
    "revision": "b68d04d5130b8f2c4d5cc79aaa24f86c"
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
    "revision": "31bd3cc22919daf54abf1811515e2d5b"
  },
  {
    "url": "posts/database/SQL-constraints.html",
    "revision": "a0fe3aaf8b9967ab31e8580ee1d1e1ff"
  },
  {
    "url": "posts/database/SQL-keyword-order.html",
    "revision": "fa3e1c8e6b792c8ad1d16762445da2cf"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "4e1a4edbac9f35d67d61a2a167254e91"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "2cb7d4bed630b0f9c7c892f4917f4aa2"
  },
  {
    "url": "posts/database/why-redis-fast.html",
    "revision": "98e573f945f9e665e0af66c5e1b19a6a"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "6d4fcae869d4e3995ff7bd5775327ce4"
  },
  {
    "url": "posts/docker/docker-host.html",
    "revision": "25712e59977d89ed29d3bae51ae9ef42"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "00bee56e9ab187c5ff1ac245d0c226f2"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "00b2b6719eb87c0231a553bbe8099677"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "dd0fbca627fe0216d8d7fc608cf81479"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "0c1d040ac6a80fde56b50a7e8ba62ae3"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "6fa7a51fe84137c1010b34c9c8305bb1"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "409ce2a27d096c9c694be7b6fa59f28b"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "0c4a374686654157bf82a2de49aca174"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "5005ecbc735d94fb2f6fe30523647190"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "28ff92bd2f4664333392e4a28143dee1"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "97672caf8a012aa69e48c5a27f28ffab"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "cb233481857f5a583238e9d142f0866d"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "412f2c20bef6545c6cff30d7c7282f1a"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "3f64d6fea83eb5cad51b6ca1f7b941e6"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "710a37018067ccf5e1ffd2fdcd0b64be"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "346b6521d81312b05003b56602cdf26c"
  },
  {
    "url": "posts/http/https-shakehand.html",
    "revision": "be9d3d9aabe84650b6f2052e6a2591b2"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "6bef71ca0d89d94b4d869ec8c92e829f"
  },
  {
    "url": "posts/java/java-http-proxy.html",
    "revision": "890b848d5704a41fd5ea6f84c78f7991"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "c80f4b4bacc192008a9da6be89caadab"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "7f8cf078c4c8949386b648b20521aefd"
  },
  {
    "url": "posts/java/java-spring-MyBatis-Annotation.html",
    "revision": "9bd6c82e3700f4e852725193ede0e262"
  },
  {
    "url": "posts/java/java-Tetris.html",
    "revision": "cb92489891d7e87db8c4c128132c520e"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "7e574fa3473f702d3b3e8f32c4ef36a9"
  },
  {
    "url": "posts/java/spring-RedisTemplate.html",
    "revision": "12a75b369d42ba6daa841beb8340c011"
  },
  {
    "url": "posts/java/springboot-disable-autoconfig.html",
    "revision": "65609fd7ed2420bb60d3ee579c6d0aab"
  },
  {
    "url": "posts/java/springboot-schedule-task.html",
    "revision": "3c160c582318091f32e78c01305639cf"
  },
  {
    "url": "posts/java/springboot-swagger-ui-custom-config.html",
    "revision": "e2fa4e9faa4fab11e37dffeef2965a1f"
  },
  {
    "url": "posts/java/TOTP.html",
    "revision": "237befbc688f4da7e0975ba285fde426"
  },
  {
    "url": "posts/linux/linux-chm2html.html",
    "revision": "945267ee4ac112b51a5815aa67080894"
  },
  {
    "url": "posts/linux/linux-ecs.html",
    "revision": "6d5f125556c90513b0eddedb77c33bfc"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "bb59c14869cc2e5aa6016d2c05e35b64"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "12af26e3b5330afd775870603425ef9e"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "c603045fdb42c82ab633c8eaea7f925f"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "1b4cfd1a29e26108e4ef56ac79cfe975"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "832a19d1f6eac64a434c8ff320e36ce8"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "b144f913289646ea5fbc75bff483f168"
  },
  {
    "url": "posts/linux/wsl2-install.html",
    "revision": "d21188b02915a74675b537b990f30cd4"
  },
  {
    "url": "posts/linux/wsl2-use-winip.html",
    "revision": "264896ee5b230ece08762f9f464cdb09"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "0c81f1621778327bf3173ffcac73db8d"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "ce56fa3b783a9bafdafe2e54409f3c1d"
  },
  {
    "url": "posts/mq/ensure-not-repeatedly-consumed.html",
    "revision": "c5f2916f66b9af7b42b3634b6982b028"
  },
  {
    "url": "posts/mq/ensure-order-of-mq.html",
    "revision": "2231186ab75460a3ad5a468b5a8c8d44"
  },
  {
    "url": "posts/mq/high-availability-of-mq.html",
    "revision": "a4a91d601951d056ce1624bb51091a49"
  },
  {
    "url": "posts/mq/mq-problems.html",
    "revision": "5169fdb03e1b47fb7427cc141f45296d"
  },
  {
    "url": "posts/mq/why-mq.html",
    "revision": "af2a2ee3d832a9773246406d691dc6b3"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "40f302728ea1a7a4606f609a0731ea89"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "2e37e2b93dc4da0381e0901868f812a6"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "4965b9f76f2ae64057354710e8f20195"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "18f673fffa93c633f35fc7b72e72c4e9"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "d5847300b9d40add9b63502fa2fb0342"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "6cdbc736bb45c9ee7a9932b6734b8572"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "2c219179382ae2a29ac5bb71919016e3"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "088aaaedd9c6587d143641d116b99eff"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "5a1e13dde50dc0990f0af0379219ba8e"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "1e52fe04746ff6b774292369bb60021d"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "fb4a655012b3b5427843d5e3a921c88c"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "b6d85cebde60a357f4573a97565eab70"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "60a664ac0e6a573bc225d65054269e84"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "864c9250c7f5be5a5d5b4c21ed8544fb"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "6526f01a694f99c2e3a5543e4ba7902f"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "6e7977dc41d98b68724a233b879ab016"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "f5358a0fbc5e9dbaef16573c0a405751"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "ca1e8d2445b1808bca0d5cee0eb2d55f"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "d8ccca096adb020220a73190e339dbc6"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "a6632aab96c823b68c5b9b5fcfecdde4"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "8c6860538a1cb58c596bbadb9f8808c5"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "822dd64459d9fb900c74251d47abf396"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "7e61795d66daa879a702f200974b29ac"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "1a08aa1b27fd9654289a55b5e8587f46"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "e888f3dbdb2125b7713415a4b1db45e1"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "8758b30a591dff3e4647ce3699534223"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "e19f46526f3bc13b91b2fcdec373dbca"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "6724ddaeffd01d753bcb2b9a799b7d8f"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "5fc1aa26a78659cb48b8617b4a70dcd8"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "52ae32cb06331bf541c7af9e04ccd45b"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "e144a88a5397fdba0f0bb9e30b37263f"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "e7f16156004e915a3e3f93646c0f5a02"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "f78c55a408a9af2c14657d795d766228"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "8d087246274a167176ef935783b2288a"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "6c44677c0a8a0b61ffbc46f666f87060"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "9fe987e2070f5736348b6e51fe55b57e"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "31bfab2936e9582526804fc61af96e26"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "9d1fcccadb463cdc12c6279a302b57db"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "985bcc46a9bf3f7bb9c7e527daec4b64"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "fa8213b0aee57c1090da06894cca853e"
  },
  {
    "url": "posts/python/deadlock.html",
    "revision": "7d0dda2bc87801f20c987dbf6a479c3b"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "e131880aa24721472799feb1c66f5188"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "7ad8021f237dd001588506496c2c7dfc"
  },
  {
    "url": "posts/python/python-dynamic-import.html",
    "revision": "64d2acd2f73cdb32be67a22b1b01b65c"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "2c25f6600a4dbe4970d67b98331e555a"
  },
  {
    "url": "posts/python/python-metaclass.html",
    "revision": "c68ae5be5a5c432be8d7696f0bed7a2c"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "8632dceddc08fd66e9d7767c87ad7620"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "b1d3f8a89d1a8cda784dbe1ddb3b419f"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "691090008f3ba6f2104e50f31ee8ce5f"
  },
  {
    "url": "posts/python/whats-new-in-python3-8.html",
    "revision": "8d84dc3d71269983fed7eda0b0b2e30d"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "1f0c47bd874ea27cae8f10e497e1a102"
  },
  {
    "url": "tag/algorithm/index.html",
    "revision": "852585104a7ed4b7231567b24a0a1993"
  },
  {
    "url": "tag/api/index.html",
    "revision": "1904610c9ea3213cf8f0da2378033547"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "4847143ef696d0c401897719fe10d6bb"
  },
  {
    "url": "tag/context/index.html",
    "revision": "3f6bfbf7d8f16efe618982239ca8984b"
  },
  {
    "url": "tag/database/index.html",
    "revision": "d8f0b98260205625017ac6a7ba16d156"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "29c666ad0ce5c7d33553e5b18317fb38"
  },
  {
    "url": "tag/git/index.html",
    "revision": "9dbcb60433cfb8d38e3e9449df468abd"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "770d86a2d40a67dd6fdf339d97c59c48"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "28bb72321486afa12e96f2705cf069ee"
  },
  {
    "url": "tag/http/index.html",
    "revision": "5fe686186ffad6b504031fb5b2639a03"
  },
  {
    "url": "tag/index.html",
    "revision": "0665cfa795d816593bbc27d55956fb12"
  },
  {
    "url": "tag/java/index.html",
    "revision": "d243d0b23f90aa20ad37d4ed47deed2f"
  },
  {
    "url": "tag/java/page/2/index.html",
    "revision": "fea79534130815b3481f384eccc0c3a7"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "51bb5e3ecefb799f0e5b49408e754fea"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "e18a50ff30be1277a83d4a4bb28636ae"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "880eb7387cd417024ed13609bf29923b"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "d4b5eb28d0b4901bb953544d52f888bd"
  },
  {
    "url": "tag/mq/index.html",
    "revision": "bf6dfabf1b4a12cbf33a155f2ca00972"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "5ac30bcc997136d4ce8e2ba5f24313d5"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "69f511c01aa58ddae5952ae35915ff1b"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "8b9ce07f74a8c50261fd605118ec2c42"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "33019a2c688f5fac948678cd15668994"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "f8d65cf838c61d8414d85e317b88593f"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "d114c416363fb8f225cdc47169f6a115"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "a8881e8ef6ef30764348b3466b7ef129"
  },
  {
    "url": "tag/python/index.html",
    "revision": "e98a4714853aff37f308fdd03a0acdd5"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "a8823f3f92e50f5206c9466a905f7213"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "3c53ccd21153acd7dbef68b79b2fe154"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "3e762fdf33bacc43390a2d3ce1f10eac"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "7bc86656142949566df1b3cef1cabb6f"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "add22b7d27066e8b30bc26f9746d9c8c"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "6b720048fd8f8f31401445ec0d90c065"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "dd0c07b8297ea0308ea3777a67ee9c56"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "54d7f39b439ad321f2b23e127126043c"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "35de40582987da99e5db3ae6b1cec4e5"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "2250d8da29514c5a54a92456923912a5"
  },
  {
    "url": "timeline/index.html",
    "revision": "345f5bd13170812759a6e6806beab048"
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
