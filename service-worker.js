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
    "revision": "ac27543a7ff72570113b554caf0b4499"
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
    "url": "assets/js/app.5b4f9f7a.js",
    "revision": "ed3e0ed67fbbaa87ddd2198bf7e58596"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/algorithm/index.html",
    "revision": "1784cc7dca6bc9e60edbf5c2ebe11d1a"
  },
  {
    "url": "categories/database/index.html",
    "revision": "3c62935547f75abfcbb9b9c3a2685893"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "fcac55471857c0b38aa79fb9f9bac77b"
  },
  {
    "url": "categories/front/index.html",
    "revision": "797304cc18afc63b3d7cf51991085394"
  },
  {
    "url": "categories/git/index.html",
    "revision": "c5393aeea2a8ca358a41f920378b50cf"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "859f5b62c848fef7430d5996f043d2d2"
  },
  {
    "url": "categories/http/index.html",
    "revision": "fec59447198570d86a9f7ca2409c358a"
  },
  {
    "url": "categories/index.html",
    "revision": "beef8eab470b080c27669e6acb7e231a"
  },
  {
    "url": "categories/java/index.html",
    "revision": "40a685240eaab8d9adc68bee54169ab9"
  },
  {
    "url": "categories/java/page/2/index.html",
    "revision": "e5d760178ffefc2231b6f3bc0575f46a"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "7fe3045e9908a46e896dbb734dd44472"
  },
  {
    "url": "categories/mq/index.html",
    "revision": "540269d63bcb862dc536f3acc968fed8"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "b84ef82b7facc1afc43ac2ddc4cb6e1b"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "e0565d1171a663cb638f65bf97cfcf67"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "1327b79bc7538241faf23597e05a71a3"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "adf75cae56144fc6c310658517a2771e"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "6814a2ad08f68df00c6c08fc5a8cabc2"
  },
  {
    "url": "categories/python/index.html",
    "revision": "b203b8ecd4597cf52fa0612fba6afb9f"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "6f14be5204387c8655ebf10b3bc6861a"
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
    "revision": "036fccb0a89019f727c7555b13c9abb4"
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
    "revision": "80c482ba4cd2fa24ecdefb6e00e6f4c0"
  },
  {
    "url": "posts/database/SQL-constraints.html",
    "revision": "f5cb37ed20575e2f7affb059958e4f44"
  },
  {
    "url": "posts/database/SQL-keyword-order.html",
    "revision": "9f3c5f1aaa528c03572edccea0e5af5e"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "badf0944af6963a1c7894be0954bf49a"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "6f05be83a148fed545592ed8fe1cb0ce"
  },
  {
    "url": "posts/database/why-redis-fast.html",
    "revision": "03e50fcd32d30101e9df38d5243c37a2"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "7c187352a5f786b1adee9fd890e1f7ee"
  },
  {
    "url": "posts/docker/docker-host.html",
    "revision": "1b68619cb19dd986efb3565750774299"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "aa025a687a4d10df2435b96c230ca259"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "f8245e2abaa5df63c687b906b94fc70e"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "c27600da6b78e8b2b5368ff2865c226d"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "5fd7eec9ec4a124c3eaa4e9e0a2be294"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "0eedcef3c6c5176d41675f926ea30ca5"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "c29947ecd34c44188da84e09ae5907d3"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "5994c9bd3f68c5e9ea247f353d16676d"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "f0d8ce135306fca06c685ebdf6bd0599"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "ef3cfc6f4975b3a7b5f5f358c5a59bc3"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "b8a1d3a4d6613b00fc18e97ce7b19de4"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "2a49fcb84ef99eff6fd308a2cbf73887"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "1f6568e0169fdede8d8a40ad6d429878"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "b5482932722c89e796d46c4674d7392c"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "86926b76e2419671c12486c8dc0b9af0"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "ea4376b7d51b31295041b5b635e409c8"
  },
  {
    "url": "posts/http/https-shakehand.html",
    "revision": "1e65e833b3b50c86293dea6dba70aa1c"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "4cfcf3acb2042b3185c92bd2386cbb77"
  },
  {
    "url": "posts/java/java-http-proxy.html",
    "revision": "fa1fba4b01b8a75b47557dc4093626ff"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "82664059e502ca2d114f49984b4d9d3a"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "ffcb3ba55b9fed6a13b105923886d15f"
  },
  {
    "url": "posts/java/java-spring-MyBatis-Annotation.html",
    "revision": "b3cc84d44ddb89d66d21464b198bbd7d"
  },
  {
    "url": "posts/java/java-Tetris.html",
    "revision": "c87460206349f0bbad6b09ea8e96ada3"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "cef8544f225639dc4b589e38d8c846ad"
  },
  {
    "url": "posts/java/spring-RedisTemplate.html",
    "revision": "02b9e80d2dae0ba94a7b0fb73d4b81a2"
  },
  {
    "url": "posts/java/springboot-disable-autoconfig.html",
    "revision": "992cd6aef979f3d2d85a6517789c3ffd"
  },
  {
    "url": "posts/java/springboot-schedule-task.html",
    "revision": "90228971c165fb82d2399955e9f7d192"
  },
  {
    "url": "posts/java/springboot-swagger-ui-custom-config.html",
    "revision": "0deefa57daee204a19564d4c643a2d03"
  },
  {
    "url": "posts/java/TOTP.html",
    "revision": "2e1bfdf84855c65de79f77f28f50ced9"
  },
  {
    "url": "posts/linux/linux-chm2html.html",
    "revision": "638c559f3df8de22ccba6bc8b3fe6d92"
  },
  {
    "url": "posts/linux/linux-ecs.html",
    "revision": "df0aaf87bef638f62ba9ddd298fbb4d3"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "c3f7cd4835f03347b9557ac52b64304c"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "7befaddc314ff0a92c60155af049ed9c"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "d62ba9e0e64d0d756ba2e349bf972ec9"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "f83f1154a2c3e45ea5e7504c8f96e3a7"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "930ae78b287ca9dc1c1abf9d67b1fa10"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "3addabc3bf7169bdbf3348d6046d42ba"
  },
  {
    "url": "posts/linux/wsl2-install.html",
    "revision": "a23fd62d1acf9e1de52b856fc1383531"
  },
  {
    "url": "posts/linux/wsl2-use-winip.html",
    "revision": "1361eaac989560240e194e0d3829651f"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "1a86814c2d47b87270e6d9ce77a16e08"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "34e3aed9b01876e70ec0a76c576a270e"
  },
  {
    "url": "posts/mq/ensure-not-repeatedly-consumed.html",
    "revision": "0bde5a82926570a8bf6a4cded9f24c5c"
  },
  {
    "url": "posts/mq/ensure-order-of-mq.html",
    "revision": "96178f759e7a6233abb4542461c6f1b9"
  },
  {
    "url": "posts/mq/high-availability-of-mq.html",
    "revision": "e5ee2cf572c2807b7219b87b32f446d9"
  },
  {
    "url": "posts/mq/mq-problems.html",
    "revision": "f059020b78c112110205c7c43b1b1a95"
  },
  {
    "url": "posts/mq/why-mq.html",
    "revision": "16a3713db0a34fb7ebbceb887d3c4ac9"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "0c1bf87a92fa19067c9763f33ffa5777"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "b333a5068b3916245e2252eac44c21d7"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "55734c3bfa45d166a2e79c5055780617"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "0bfe34fbaa621eb79036e8032d7675fb"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "43fd64140aa9c97906599f43215b6b9a"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "437463066f87e70306bf885d39a281a3"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "082b7638eb23861522447c1cf1fdc349"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "346b5ee68b8e447e22ee0569193cb278"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "30b5123bb4e49fa48a97153cc8037862"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "a4caecd3efc7eb0de6c646c83cce80f5"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "20d9caf80b703c368ce66b3b88e867b6"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "27fb0e48aa6d26813942fd0382d7a580"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "a57aeb51863b523a51b256ea314ee6bf"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "3e35a03ae0fad3f139160855fef6b2bc"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "8c260ad08867a93557b45bcfd93708cc"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "e2162c1f4278ddbd151e73dd33d99410"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "e8157cf83ec03ecc96e996803e40b0a6"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "ec54b9d7c4aebddcefbe740c9a2d58e5"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "bf729f99466265eb532923ec9fe501fa"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "93259eeb12f46f87018f46859410eb92"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "5b889e46e91dcb0783ef6403435ce797"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "bea388744a1f35406a0f525ca7a2bef0"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "b940a82b2aae2b361e4d9638ed7c7eb1"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "b9a6b670276f15185a9a4892613789a9"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "f460106ed956876a9cc3c96670ccde55"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "48afeee3c0f4e335ebbd90259e27d871"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "e7f49357d2834842f0d18aaee1b75ca7"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "04d569f71a81d2442e8a3130bb5d788a"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "d8edc2a991522d423e60764d33b24a48"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "1bdb112438dc3e43fdcaa510792a2005"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "b549c4c09ff0c17bc2949b577fa4f243"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "291d67d681b44f0d4e18e548a6adc016"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "26cc2c1e5fc989172b3a02fb5284c34a"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "cfa7d15508a80d78c64616b6a86473a6"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "e638c79e8dd17eec7eec71a77313d020"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "2ca830bd6ba7b55c84d713faa453dde6"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "188281405c187c0754930af58481561d"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "1bd2bb72205850cce2db3b22f12f8fea"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "94c02fc6d2c0cdc0b817a5a640e32786"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "31eda3f0e4ae9df75b91182caa50e9a8"
  },
  {
    "url": "posts/python/deadlock.html",
    "revision": "91edab95be64c8aab374b99d14294309"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "c1dc6faf48a70100c4c93e944e5e506d"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "118efb3bc3baa95fb4b1377b36999bf3"
  },
  {
    "url": "posts/python/python-dynamic-import.html",
    "revision": "5963cb920bd6c3ee8a3488d6f330cf7b"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "d0c4fa730e0ac7d6ff15a7e1bb3cfa1a"
  },
  {
    "url": "posts/python/python-metaclass.html",
    "revision": "f6b1cbe0d3c5ca93423cbee29e6dba09"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "50cb13c03403c7d3b067e8a1886def33"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "348e105d86afd0450fae370d45cbb0f4"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "3e4f2bebc61ecd01890786667ac22b0d"
  },
  {
    "url": "posts/python/whats-new-in-python3-8.html",
    "revision": "b55a0d3b44ce85a48a7c973abf234142"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "08de9cbe857612cc7b2d2496c985d884"
  },
  {
    "url": "tag/algorithm/index.html",
    "revision": "c5bf8399a99189eb4441d03c18c1fa16"
  },
  {
    "url": "tag/api/index.html",
    "revision": "9fc8e1a4f21cca29782bdbf33c2fb584"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "d7de9cda649ac1ba0ad5b7158e701695"
  },
  {
    "url": "tag/context/index.html",
    "revision": "6b1c3d91e5dee73b525a0f71c5497994"
  },
  {
    "url": "tag/database/index.html",
    "revision": "db43eae72893c0998e670347a12e6f3b"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "c20d1b6ca0dab532a6e755d93fbc5a9f"
  },
  {
    "url": "tag/git/index.html",
    "revision": "4a7a154bdce2fdbdf0611d067f7f5a00"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "803274f6db5e29790bd8238b70c6b4e2"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "51c762ed2207ea9f1c90a5ab77733cde"
  },
  {
    "url": "tag/http/index.html",
    "revision": "71a8c3267186a4caad887d6b9dbcbc64"
  },
  {
    "url": "tag/index.html",
    "revision": "371cf1653ff26c653e5e2293ee604c3e"
  },
  {
    "url": "tag/java/index.html",
    "revision": "fb83461bf8f5c21aeea4cdd177a318a0"
  },
  {
    "url": "tag/java/page/2/index.html",
    "revision": "99cdb411720979647bca8cdaa523a7a2"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "ba947f11fd113e743ffbef5ea127d291"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "932a0e90864532365f410b77e0060967"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "955bba8acb7e793e80e674d6cc3b87ba"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "2dcba6aa62619d6519953c8681379d66"
  },
  {
    "url": "tag/mq/index.html",
    "revision": "d8e96676cca07bc1a17a2212269664fd"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "0a3a8907f45933d776b4c3db1eb65ef3"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "43068f2c52717786057561920ab2895c"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "53979898756ea19e36b5d5cdca67fb10"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "6de7efd4fa4d5a4260c176c81e52318d"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "d48e2fe687a5992e75717e4d1a47d95e"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "144a3daa6ffc4f462c2e16ae3ff838b6"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "5975413905fb949b5150795a522d8dad"
  },
  {
    "url": "tag/python/index.html",
    "revision": "17282f19decb147528682068a3170708"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "2813e1b1b3c837fadbfdb4bebee2fa8a"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "e068deee88ce00b759f91a7ea44f5b2a"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "1f31bf95edbc15c525494fa5d8995fcc"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "2eb6ca908ed52f36d60aa08872553760"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "1d24d3a529b8c9221dd1de3557f92829"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "18bcf7eb6efd51ac0465c74d5d2d29ee"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "5806cfd54654310f724b912e57536346"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "efa9f0be6372c6f305cffb5f7987889b"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "7eef8114126d32badc4cc3a024a8027c"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "b0be3dd80b472d1ed4fb560782aa2402"
  },
  {
    "url": "timeline/index.html",
    "revision": "81d4735dd6e00f3f006c6cc2b6b04d9a"
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
