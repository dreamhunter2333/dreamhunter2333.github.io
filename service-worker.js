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
    "revision": "0e1281b0d2fe378340096cc0d1200283"
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
    "url": "assets/js/app.d5004159.js",
    "revision": "e97068cced98521985e2e277d50a1020"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/algorithm/index.html",
    "revision": "2015acf3a91940bd22f4936abd1454f9"
  },
  {
    "url": "categories/database/index.html",
    "revision": "f31fd334096cca59e8b57883b5fc22d0"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "553e74bc0ffa8a379f1dfa7518be9fe2"
  },
  {
    "url": "categories/front/index.html",
    "revision": "069783b3a6a263bb4b318e390484ea15"
  },
  {
    "url": "categories/git/index.html",
    "revision": "26d25977b10348839294fd397d1e129a"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "050f70712258757418ea37d9954cbe03"
  },
  {
    "url": "categories/http/index.html",
    "revision": "76b07662e41b07054ac983dc8d42db93"
  },
  {
    "url": "categories/index.html",
    "revision": "518da38099a0d0a7e6214b30616280c1"
  },
  {
    "url": "categories/java/index.html",
    "revision": "b6f84fdfb436d73e56df709d2485be0c"
  },
  {
    "url": "categories/java/page/2/index.html",
    "revision": "51ec80bfefd29188bcd49ff4507aed03"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "2d7c54c76a49e403796a39543523a240"
  },
  {
    "url": "categories/mq/index.html",
    "revision": "8049fa52400cd629c27222d288d65632"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "2ee4e51992c6c68d48983a479b237133"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "9567098dcd9cdd8a171e7d152160eecf"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "53b489f84a257e747757e10d48e33d7d"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "c52dd671fbd615a458c0d6709de9d51d"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "5f4da042f3519c752ae18dd397611ec2"
  },
  {
    "url": "categories/python/index.html",
    "revision": "3fb1e782617257fab76150bcc79e4bc1"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "1ea6fef9dd21e14bc356cd835712ee87"
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
    "revision": "6aa95a6b7892fdff50d4bc512abb7e5f"
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
    "revision": "51e1233b0ffd8604970b2b950ba7a74d"
  },
  {
    "url": "posts/database/SQL-constraints.html",
    "revision": "5ad3c371452e5e07b0d50838488d7225"
  },
  {
    "url": "posts/database/SQL-keyword-order.html",
    "revision": "9dacd211ee1b41780a882f531e55ac00"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "f0d95cd2077d46db7b00bfcfaebc2324"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "977efd7a2d76b6b656b344d566bd7e6c"
  },
  {
    "url": "posts/database/why-redis-fast.html",
    "revision": "1c54dc0794d2391957b7fc3ada999947"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "15674b0b0f82fd56a519cfd785c10301"
  },
  {
    "url": "posts/docker/docker-host.html",
    "revision": "aa271e8fef1b2d3e1807cc24bc0c776d"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "39003f08ffc887ea91eaae28066ac0e6"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "ccd9f384cb8e4d3065447687842c085f"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "8a67f1084015ec8566da87c5d90bdb08"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "a9a69536d2ccfd0b7e91160d7de72356"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "e7f6be1c7b3baf79fc3bd350975a0650"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "d1f77f7ce8baf797d431c9d9f06ffb9b"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "512f2fd238021dc1d872fd2128090f51"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "745621dfd5d4b37a6f7dd4026816aba3"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "cac86a3ef17956f29fd5ba37eb940608"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "b5903988a82177536625998ff27f1c8b"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "2c60b6156904d955d2f92b1128c6c561"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "44d2003e2b101778480600cd47d8a6d0"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "68c85bf0d59b215cb212f882037c586b"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "93c6b1a46fb3ee1f5b29e6b5f2616353"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "ff66aaab94e995f776a803167d928382"
  },
  {
    "url": "posts/http/https-shakehand.html",
    "revision": "90d6adc5534ba216c8c1f2365e9dfae9"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "9bc080d1448d8d95f24dbc94dbd36123"
  },
  {
    "url": "posts/java/java-http-proxy.html",
    "revision": "6e06a7064c08da29238970cc27990a2f"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "1ba0c15d352627572b690be3d531ee1a"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "8041fa9bb1e3a35d0d164858d7720e17"
  },
  {
    "url": "posts/java/java-spring-MyBatis-Annotation.html",
    "revision": "8c31576ca7c5342cc0a6986c12be0748"
  },
  {
    "url": "posts/java/java-Tetris.html",
    "revision": "f3e69085c0ce9cfbb4e3553be1f2e18b"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "c8aad68990b20590b93759b9ae8a47a2"
  },
  {
    "url": "posts/java/spring-RedisTemplate.html",
    "revision": "b3318d915285aff8ed19e6e43859dfad"
  },
  {
    "url": "posts/java/springboot-disable-autoconfig.html",
    "revision": "aa728e3a5646c02738a74fdc7eb948d5"
  },
  {
    "url": "posts/java/springboot-schedule-task.html",
    "revision": "66bbf41b92896c32c56c7af918749d74"
  },
  {
    "url": "posts/java/springboot-swagger-ui-custom-config.html",
    "revision": "73298157bbaef59c699c495f23f4be3a"
  },
  {
    "url": "posts/java/TOTP.html",
    "revision": "d3f24b8d06aef2a96410c03d6957f070"
  },
  {
    "url": "posts/linux/linux-chm2html.html",
    "revision": "c92b65806dd58dac51eb31cea1127e6e"
  },
  {
    "url": "posts/linux/linux-ecs.html",
    "revision": "a67b733b230f9107b99d961f011346f2"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "9390b7d53ad38736c41d36e778ca1dc3"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "4ec6e64d15c552f872bd143d63859cfe"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "487b7b46e7f254bb1b4dd724ffa8abf8"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "fafc3dee5b8d940294c0d2ec283de150"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "84fe95428bf3f483f106924f834c3092"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "0a8a3d5bf485b167b9f9a5804849cdd1"
  },
  {
    "url": "posts/linux/wsl2-install.html",
    "revision": "8cd22b92628fbc8659b5fd94222ca001"
  },
  {
    "url": "posts/linux/wsl2-use-winip.html",
    "revision": "a358c627a65ab025f5012e856cf0420f"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "61194c9fa3dfa8e66bc69ad85f892437"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "0fe19023a600407d30782e95744162ee"
  },
  {
    "url": "posts/mq/ensure-not-repeatedly-consumed.html",
    "revision": "70855a9158a09f8e6523ccdf46e67229"
  },
  {
    "url": "posts/mq/ensure-order-of-mq.html",
    "revision": "95ca277bfc53bbc9fab992e18533078b"
  },
  {
    "url": "posts/mq/high-availability-of-mq.html",
    "revision": "1429b13443078e160f6d035d6647563e"
  },
  {
    "url": "posts/mq/mq-problems.html",
    "revision": "ff6c8a20ab0b6fcb72da3c6758cbec80"
  },
  {
    "url": "posts/mq/why-mq.html",
    "revision": "51f93f0b48a3d4be1a72cae8dd8bc425"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "74daf59e571c7c1d6108191d948062a3"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "0687848b0094a2e57424fd48595bb36f"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "18a176e9667ad11309a4111e257dbf85"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "a0d5992138d575e643832526cbb2cd4c"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "bb2d8dfe51d7b051221765567f55d7ea"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "7e86a5356ab4cf43f76de311138a9fff"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "75d4c108b85afebe589f4c6284c4a9d5"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "0580dc19d8718936c5a69958c9e6631c"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "cd50ba2845a79cab49d00a73ebedfc76"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "faf07c4ef206c42657f53318d3c4e9d4"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "a71bd59a8fe7318ffc82970d8734c3c6"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "162ee454c98554ea76bc0a7cb5ce89f6"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "6c408a3418430a50d9b1a8b673300f38"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "57833924a3b26fd16de96023a9134ce6"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "7db5b7b06f7512a013a7d2c468b1f9a5"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "f4924d1e10a470d9d5eda1958308f3c1"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "a65bb2e1219e9e994560b3aa432dc820"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "614a01c808efd52a0de8aefa53f417d8"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "00928b1d367d454b4eae8058a8506577"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "e2d1e88107f22d31d38826f3e9756f6b"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "d481fa0e729fa5e5ae1e1d28915dec25"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "7b8700e6b4a831c0286d3486a974c8d5"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "3eaa46dcd440a7542c8af064ae1aeda4"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "f1850961cc18b98a656c20abc67ec832"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "8369b1bedecee258eb95f02d7d8f8c6e"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "59a58600824aa3a1655953859bfa96a7"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "8477a4c5965132185219381fbcfe26a8"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "b4af40c6ca8a336737200c1e508e32a0"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "aa40c6091159b369d043017e8cc3eb1e"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "0fa0c68332e73ea0c0f915448d7d7278"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "4c90868f55b6c745f7caa55c4265baa8"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "2e82702b26a99c66a512e0821370a955"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "95c0310904bc55f5742ace42a4c6989b"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "81395ccfeb2bd42c4ba2a345a731f419"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "2da023cb8fc07115c77b7bc4c702653b"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "b4df913fb3b6a87ebfffdff2b11ed293"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "6555862d9d1e14a3d6f9e22dbb3cdc6e"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "7084fdc938df8ef9e4b9896654f359b8"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "fe8593b62ce5c058b4a6716c41c3faef"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "e0592924544bd22e6ef20bf4276f8f84"
  },
  {
    "url": "posts/python/deadlock.html",
    "revision": "0d8c205220aa97551015d0ead8b034a5"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "0beb8e97a59513a9c23621bfa64aa56f"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "d0a3220dd8b4a4ff9509339acbf8bc9c"
  },
  {
    "url": "posts/python/python-dynamic-import.html",
    "revision": "51f2b5f2a856b235e617aaa4d541f0bc"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "7bcfa703d1f2da5ae59545848f699cdf"
  },
  {
    "url": "posts/python/python-metaclass.html",
    "revision": "96adcfaaca64c1245f6ad4b4629e2f9e"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "482fd831bab91b005287f25160d2aa2b"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "6ea75fb98637649b6642544b768e090d"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "90684f89372cb83b29796ae89d56340d"
  },
  {
    "url": "posts/python/whats-new-in-python3-8.html",
    "revision": "a6154677db785b5c3e71584d182df753"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "e1782e6f07b4618f58d3be95382adbbf"
  },
  {
    "url": "tag/algorithm/index.html",
    "revision": "04280b2ee2fb3062b7a998d2c8ccf860"
  },
  {
    "url": "tag/api/index.html",
    "revision": "008ccb2f9541920d3a71fbe9aa9094f7"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "f023e3ace91da1cb0a0330fa620e1179"
  },
  {
    "url": "tag/context/index.html",
    "revision": "cec953c64124a789855edad2a778696c"
  },
  {
    "url": "tag/database/index.html",
    "revision": "7e6900e8aafb1641aa9ffbf4937701f2"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "68501ba4a247d296ea4a85a52464403a"
  },
  {
    "url": "tag/git/index.html",
    "revision": "45f6a73963dd63f64ea573eb44d18e92"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "8e85757b47c19f8da659bce577ff4f1b"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "9fc982232152bf0a40e4f63b872c5ad2"
  },
  {
    "url": "tag/http/index.html",
    "revision": "920ba59fd981600bf86014482a078238"
  },
  {
    "url": "tag/index.html",
    "revision": "36ac46e3bc2898f3ae0ab36a9c3cae5b"
  },
  {
    "url": "tag/java/index.html",
    "revision": "7c91c9c15160f19b9225748d46bb959a"
  },
  {
    "url": "tag/java/page/2/index.html",
    "revision": "9f067adddf74bf9bc0044a4f11bd04d9"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "133e56975237c7fd36b62d0fac37b41c"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "18520b1a9c0fc541561746ffa5345324"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "9803cb9d07cbd4a0f672871cb6fc2912"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "d2e8455a7df9f7875ef95d17f93eee58"
  },
  {
    "url": "tag/mq/index.html",
    "revision": "f298587f0ae5fd6bdbd5abfc939e6d0e"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "1925a2249f8960edd40084e99222be7a"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "17e94221b0bcf3f9b781ad77c94cc3c1"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "75332a6f8a42aeec718f6d5e67c8e7be"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "1a20656654e019ecd46132f2ac99af92"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "1806d69d1c931a0d09b11fbf253a55bd"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "2a1b0c6408eab811211255291329c34e"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "64739be6e3f5ff72d0c6bfb5cb31720c"
  },
  {
    "url": "tag/python/index.html",
    "revision": "e11bf8fffd93fae497d1df090a04e714"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "eecbac851bab218e8f2ff513fc5b6bf8"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "2874b454d882f99f5323b651f8c457f2"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "5d07b53241a81839348380c6aa7a9921"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "3fdef4fbcf0e218eb014b485daef26c2"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "6f94e5fc16d0650bf703df1fbf250cbd"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "70b4d64fd96da14be385e145835aaa02"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "b5969246c96e0a89c65e62e17439125e"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "d957f8bb3225fc094cc487d0922260ed"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "99271483fa84009e691d43485af1a5ab"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "d7d68bb9f646c35a738bad475d0b01a4"
  },
  {
    "url": "timeline/index.html",
    "revision": "956e5883f9124ef8923d0f2982a3a98f"
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
