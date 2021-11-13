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
    "revision": "76a06a1d7afd6baf7683d187ab2db7d7"
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
    "url": "assets/js/100.b5cd3667.js",
    "revision": "51c1caf34c779eb0ef61148bb2636776"
  },
  {
    "url": "assets/js/101.a04dbc99.js",
    "revision": "436c20ff3b55c6acbf69883b5efd0808"
  },
  {
    "url": "assets/js/102.23751dcc.js",
    "revision": "1cd40586b6267c16eb2092a00423b385"
  },
  {
    "url": "assets/js/103.7c74e00e.js",
    "revision": "01b92990e30347d1ed95c30fb36cd138"
  },
  {
    "url": "assets/js/104.3bb46391.js",
    "revision": "3cb1d8706a935327fa7f5fb809bd5e9d"
  },
  {
    "url": "assets/js/105.3afbb3d8.js",
    "revision": "9a87fbf85c938cbbb97e1699e1e920ea"
  },
  {
    "url": "assets/js/106.3eb294ab.js",
    "revision": "b33922aa690147928a823c1b0dc9a81e"
  },
  {
    "url": "assets/js/107.2d2e0a18.js",
    "revision": "05bf8d0b46c338a1594d469c2ada40cb"
  },
  {
    "url": "assets/js/108.1f7a6559.js",
    "revision": "c9117339607f421194fca1af3eb1fdc1"
  },
  {
    "url": "assets/js/109.1cc0f178.js",
    "revision": "83704e48af3bfb3a59326a4bdaeda724"
  },
  {
    "url": "assets/js/11.47bc4a45.js",
    "revision": "19db9262a8fc3992fe235d51eaca259b"
  },
  {
    "url": "assets/js/110.a0269396.js",
    "revision": "a79b23e80681552d87aff4839c444626"
  },
  {
    "url": "assets/js/111.f88f69fd.js",
    "revision": "2801ffd120efd7cad82cffacea5c3548"
  },
  {
    "url": "assets/js/112.0e8248b7.js",
    "revision": "f48f595cf11e7558ff8472fc04477e95"
  },
  {
    "url": "assets/js/113.8a93b1be.js",
    "revision": "2fd73205c4e498b932df25d2a1b3bc83"
  },
  {
    "url": "assets/js/114.de91dc29.js",
    "revision": "76a8524295e9548dbfa6b7793cea6408"
  },
  {
    "url": "assets/js/115.9451dfcb.js",
    "revision": "c89f91cac8f26dc4c6e604441ebd9247"
  },
  {
    "url": "assets/js/116.4d992e5b.js",
    "revision": "ed4a4c098ba1079c52408da5330d5a4a"
  },
  {
    "url": "assets/js/117.7fdfec9a.js",
    "revision": "71304ca0b88bbe7590fe27f02164c6c2"
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
    "url": "assets/js/51.e3b82e95.js",
    "revision": "fa41fcef9b0c56adebbf43e956b04045"
  },
  {
    "url": "assets/js/52.00c7e163.js",
    "revision": "6db46024f55e8466726df2a07bfee36c"
  },
  {
    "url": "assets/js/53.e68b5cf5.js",
    "revision": "494c2d10dc0d25ebb7019317726e95ea"
  },
  {
    "url": "assets/js/54.e4185d48.js",
    "revision": "a918d39d66572c24829e678b7cfe5f63"
  },
  {
    "url": "assets/js/55.4b190bf5.js",
    "revision": "336834aa3cd063d22d9cc66a242c9f75"
  },
  {
    "url": "assets/js/56.b821a8c3.js",
    "revision": "81ad92dbfd5e75a7d64ce61835fd192b"
  },
  {
    "url": "assets/js/57.919edd3e.js",
    "revision": "6325f9a0fa3ded5336ddf4834d9de6a2"
  },
  {
    "url": "assets/js/58.de69fa2d.js",
    "revision": "1c26616acc6d3c08aa123ac2b3c610c4"
  },
  {
    "url": "assets/js/59.1174b8b8.js",
    "revision": "5ed6ae1b72e4a4c3de348809e08842ed"
  },
  {
    "url": "assets/js/6.354dc403.js",
    "revision": "02cf03ef48a6dbc4db87069885e9a6e7"
  },
  {
    "url": "assets/js/60.a49e2a07.js",
    "revision": "1f6cc33bf46231671abe01d5b0553b41"
  },
  {
    "url": "assets/js/61.cc422a9e.js",
    "revision": "645890b8d1d87c3392019b46066f4bb6"
  },
  {
    "url": "assets/js/62.bf1f3ee8.js",
    "revision": "127994c3687b8a3ce1ad051dd74b17f1"
  },
  {
    "url": "assets/js/63.91a8d72a.js",
    "revision": "9facd76fc7d526ee08fc049f7abb781f"
  },
  {
    "url": "assets/js/64.518c0e3f.js",
    "revision": "8edb9fee45d5fd4ec05cf83cf7f1272d"
  },
  {
    "url": "assets/js/65.646a7ad0.js",
    "revision": "d35fc70b18cb6ab4dda1378b7f7a4000"
  },
  {
    "url": "assets/js/66.118cd881.js",
    "revision": "2b4046c81c43f571c67e336d00ea5724"
  },
  {
    "url": "assets/js/67.1547bd82.js",
    "revision": "33f6ca7ad18de9f45f89c20aa798c3c6"
  },
  {
    "url": "assets/js/68.012502e6.js",
    "revision": "0927b04e67a2616d359030a4f642424b"
  },
  {
    "url": "assets/js/69.7bfd536b.js",
    "revision": "5acde41ad07c2d58f7ca685c697d52c8"
  },
  {
    "url": "assets/js/7.10f00ff4.js",
    "revision": "86e4d2ed660f70d29ac03714e7596bb2"
  },
  {
    "url": "assets/js/70.2a65e2d3.js",
    "revision": "3e1ef52f0a8bfcbf0c43562688685efe"
  },
  {
    "url": "assets/js/71.5073c6f8.js",
    "revision": "3892ad7b95144d00a62ff2ab703c60fc"
  },
  {
    "url": "assets/js/72.1895ae04.js",
    "revision": "d18c2d565582fa9f3d9a0419bd41afe8"
  },
  {
    "url": "assets/js/73.dffa5eaf.js",
    "revision": "e4f129d76b4100478ffb6c712a289188"
  },
  {
    "url": "assets/js/74.f767992e.js",
    "revision": "d000ba8760783c499c3fbd9ea7ca2dc4"
  },
  {
    "url": "assets/js/75.8146bfc0.js",
    "revision": "82024ab251885385b52c21b16d83d541"
  },
  {
    "url": "assets/js/76.108d5d77.js",
    "revision": "2b86ed4e962032fd842629c59da37135"
  },
  {
    "url": "assets/js/77.8b2cf9c7.js",
    "revision": "611981432c1d38b425991eaa7d57de4a"
  },
  {
    "url": "assets/js/78.0fed6b77.js",
    "revision": "fbe49d5ef2511d9bddb76d77fa09e314"
  },
  {
    "url": "assets/js/79.721861d9.js",
    "revision": "eccb3f45c74ead5fff304eea77c822ac"
  },
  {
    "url": "assets/js/8.26ed1ff9.js",
    "revision": "e39b5506af0f74a5591317583433a435"
  },
  {
    "url": "assets/js/80.f2e5cab0.js",
    "revision": "b34d3881d518ab34f74262b29f4fd3e0"
  },
  {
    "url": "assets/js/81.530a6db9.js",
    "revision": "3c7ce55a2f4f98ca6ff82dd3edcac768"
  },
  {
    "url": "assets/js/82.61e120d7.js",
    "revision": "6b7c9ac1a42ec6e141427cdeab3d7682"
  },
  {
    "url": "assets/js/83.30f3e90a.js",
    "revision": "efed365dc48613f127ef1cf4a7cf93c3"
  },
  {
    "url": "assets/js/84.073204eb.js",
    "revision": "694edeb653e431bd4e7411e4a45f3c78"
  },
  {
    "url": "assets/js/85.9f34045d.js",
    "revision": "0a80f9ba5f755ef1c0f7049f65a0bd9c"
  },
  {
    "url": "assets/js/86.6aae681d.js",
    "revision": "d0d46919a9ac0190b37d631800ead0ee"
  },
  {
    "url": "assets/js/87.d752e6f5.js",
    "revision": "a14a2c726a66fbd48ca7f0d723676a59"
  },
  {
    "url": "assets/js/88.bee7edbc.js",
    "revision": "7b8f1f06505b8f0ef48dd064b16e2f48"
  },
  {
    "url": "assets/js/89.8f9079a2.js",
    "revision": "22d73616a1f01a005469a82f76a0409c"
  },
  {
    "url": "assets/js/9.de9251a6.js",
    "revision": "5e92ea13e38e722336a6a4ea51c17654"
  },
  {
    "url": "assets/js/90.f4719f86.js",
    "revision": "c20557af96274396319c99da0623a6f9"
  },
  {
    "url": "assets/js/91.646501f1.js",
    "revision": "5c1e5226289e698a6aff71e7b64746c7"
  },
  {
    "url": "assets/js/92.aeb05bc5.js",
    "revision": "4bcdc6fb1e1d8dc397cf252fcf8ca07b"
  },
  {
    "url": "assets/js/93.3c30df85.js",
    "revision": "1caa24ceaccd7f959fd2ebe8ea0e4322"
  },
  {
    "url": "assets/js/94.8087cdfa.js",
    "revision": "8ea98da9b679ddec6f7687ed401cf6ae"
  },
  {
    "url": "assets/js/95.eb2b9af0.js",
    "revision": "2878368c218ea9cde6afc811c0657355"
  },
  {
    "url": "assets/js/96.daec03af.js",
    "revision": "55eb63316533055e2907e352d61dec8e"
  },
  {
    "url": "assets/js/97.ac76941c.js",
    "revision": "4e6f189b9181c9b171a08463cbc177e5"
  },
  {
    "url": "assets/js/98.2bc1a9fd.js",
    "revision": "aef0cfadddb592bb9a25cc106e4602f7"
  },
  {
    "url": "assets/js/99.c29c2887.js",
    "revision": "bd43492fb341f8a08b081d5316676af5"
  },
  {
    "url": "assets/js/app.023d3556.js",
    "revision": "034070d194230696f5d12a49a81b11b6"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/algorithm/index.html",
    "revision": "6dcc2e1d21c0deec308f27359b54bd42"
  },
  {
    "url": "categories/database/index.html",
    "revision": "80059f95f2df072ecc5eb9b21b1450ab"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "0a0736eec68790d6115d4070c44acc50"
  },
  {
    "url": "categories/front/index.html",
    "revision": "6b027937e332f310c140971ddc80d403"
  },
  {
    "url": "categories/git/index.html",
    "revision": "bc543c6cfa0b04b145971f6f2a8b6f34"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "443ced388270328bb73c2e3966f11d4a"
  },
  {
    "url": "categories/http/index.html",
    "revision": "84e11fd9dbe3b53c9b918a9160aaacae"
  },
  {
    "url": "categories/index.html",
    "revision": "9fdd787168896e8014b8fa65bd492cdc"
  },
  {
    "url": "categories/java/index.html",
    "revision": "6268d3cc0dc0091b6549814e493a14fa"
  },
  {
    "url": "categories/java/page/2/index.html",
    "revision": "b78becf20bfac97d9c0e8b1aecb72d9c"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "4a412829945b344b34944526b9a96bbf"
  },
  {
    "url": "categories/mq/index.html",
    "revision": "32cd86dc4721b52c2571f4795c2d85fd"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "e93bf300996be01389fa3c7067d35fa8"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "6bbb098e1926edd3711eca3d524a334e"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "8bf3dd584ac8e82b6b6223109017069a"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "f2d65c03bc28ac1f97880920748eabf8"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "c5656f3891f0c0b62c766109ba834e7e"
  },
  {
    "url": "categories/python/index.html",
    "revision": "da4b7809f1f0f352f7191b8955f1c4cb"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "026ae8b9f8d7256abb83a4f0cd7cd261"
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
    "revision": "05f7595727a51fdb57ad95a99eba46bc"
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
    "revision": "927397c9e6772ff10fb5f1af5c5ce17f"
  },
  {
    "url": "posts/database/SQL-constraints.html",
    "revision": "0f48b886ef4065c8eeaef43665a71e7e"
  },
  {
    "url": "posts/database/SQL-keyword-order.html",
    "revision": "ab7d231ed9908f7e480bbb17b3f4f995"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "9b6b96a8ae226ade197c429e187f241c"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "7055613f6297930e81f56fd22ed61bfa"
  },
  {
    "url": "posts/database/why-redis-fast.html",
    "revision": "a4b0a504a0e48f4fc746a5f271258634"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "50ab7245ac2ba7d783fdb3a8383cddf3"
  },
  {
    "url": "posts/docker/docker-host.html",
    "revision": "f2ed76d98323c75ed1b6b065884ff940"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "728266294bba186164dbe2b0b24630b4"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "5b879dc9e5e00421e589447295ddc9ff"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "a250dc73f25e511514d6a8dc95a1d065"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "1cd644c437410b7240f8936e8cff189a"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "3d981cc36c0b2f20c1bc89a5241db825"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "5b5ef08cbb9f771d4672c96b94ba34e1"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "615a8cd1d27f52f2975d31deaf842e59"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "406d8a49da5887aeb20bdb5576af9985"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "f265ebe88e5ca3b32107015df6b58a90"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "2aedf62ea20566d46ad234bf13f034cb"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "99c6c1300060f39494652c6adf2a6fa1"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "17d8564277a03d350fb59983180212dc"
  },
  {
    "url": "posts/git/use-multi-access-token.html",
    "revision": "46637aacb2742898ef24f5944c1b2ab3"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "82601e2e334c1c5a4b8d3c0fab04e8ca"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "d9f7c7ff349bc1b7460f81abdc4700af"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "4345183902aaf724ee243613fce7f730"
  },
  {
    "url": "posts/http/https-shakehand.html",
    "revision": "5bab2ff01f1c6e0447d1141a50206d22"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "e0977a0c50884e9640eb929a541955f8"
  },
  {
    "url": "posts/java/java-http-proxy.html",
    "revision": "02a5d8c43eec6ffbb3f15338ba8ee183"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "621811113b3e32654008c6ec5ca531a8"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "7090713ee4813e4e02b5f520842b260c"
  },
  {
    "url": "posts/java/java-spring-MyBatis-Annotation.html",
    "revision": "c2beeb6c9b9053ab7692a2723ff1616a"
  },
  {
    "url": "posts/java/java-Tetris.html",
    "revision": "b9e316609694174d296e4d1c18aee3b4"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "15d858836e27fd094b2932cd025bcdbb"
  },
  {
    "url": "posts/java/spring-RedisTemplate.html",
    "revision": "ef9449f44597b5d2abc77610f6956a8a"
  },
  {
    "url": "posts/java/springboot-disable-autoconfig.html",
    "revision": "10ddf65453f043526eddab18958b5f71"
  },
  {
    "url": "posts/java/springboot-schedule-task.html",
    "revision": "4bc3ad0325e16cae18b7b72fe443cedc"
  },
  {
    "url": "posts/java/springboot-swagger-ui-custom-config.html",
    "revision": "86ae5304aac8d6cd9856b98887953a44"
  },
  {
    "url": "posts/java/TOTP.html",
    "revision": "51798e7744608c89aae47def0e4bc689"
  },
  {
    "url": "posts/linux/linux-chm2html.html",
    "revision": "1f2968ad6d6765b1c4f309d580dd8768"
  },
  {
    "url": "posts/linux/linux-ecs.html",
    "revision": "0accfe2e01f23a632dc273790061bf6c"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "617974ca3a029cf870bfbd4e848d69f8"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "52ca594b6967619069c5863b0bfdffb5"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "6d7d8b634bbfb8ce87d2f06d8471f892"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "e6c3323a0018c8a68381712d4e14d694"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "36272a55baef72ce9fa7ecf11786a07a"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "0f00ce247bf780efa9ed483b8def7443"
  },
  {
    "url": "posts/linux/wsl2-install.html",
    "revision": "bc845e5025a74707d6389857ffc82c0e"
  },
  {
    "url": "posts/linux/wsl2-use-winip.html",
    "revision": "caa7519a66bd150621bc858e224a31c5"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "1c38d6010a731f46c326a91dc7af01b8"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "b92b6874b8c82345f14c39e5d9fa6d78"
  },
  {
    "url": "posts/mq/ensure-not-repeatedly-consumed.html",
    "revision": "56f5340d8610cae10447ea1962f40c49"
  },
  {
    "url": "posts/mq/ensure-order-of-mq.html",
    "revision": "f941e7b86ce8296c0f4c02528a21b0af"
  },
  {
    "url": "posts/mq/high-availability-of-mq.html",
    "revision": "6fbac1883049a0edf87553d63a49a3ad"
  },
  {
    "url": "posts/mq/mq-problems.html",
    "revision": "257fcd56921367fd053412da432f5b2a"
  },
  {
    "url": "posts/mq/why-mq.html",
    "revision": "fa2b8392a6305d10c398cee7dc9d2994"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "f4014988b31ae931a4c04ff542d4c350"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "967821feb1545ba45147fcafaf9d90b0"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "f602044fa35a815f6ccfd463b881df0c"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "a7c64a53ab51f54e441d62b4e07030c8"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "a25516f5c7eabca8862b51a20e7504fb"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "922c75305e6ed9218ed9f2fdcaee2d5e"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "0e129f2e8f33269eacf6fb837573043e"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "44e76a8c22b36ff8188342fdfd79a921"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "7c0135388354fe7e49881a9d4979319a"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "4e79fac6e02d0d9d9b7c173ab24ce4cd"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "b621239f5335362e1ea297bddc266b06"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "3dd223006ef19b7bf401289cad214e60"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "d212b16bf4872ac68563cb20c59fd955"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "d9f75f3c65b84c8e1c8f34bcb581e417"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "5e02b8dc6fe6815ecb14ad3425588add"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "3a357575e8d6c6f0a7034c79892de6be"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "b1436ee81360098009d24d7c5483a790"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "c80862722e5f239c754d2d33efb7301f"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "565b19fc3a6be056a3b47d4bd8426a56"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "c48c39ea1ae7da222f39ce7878e2fe65"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "7abb24063eaf3f34879ae02646c164d4"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "1bf9c5373905ac46a7415fd6b25a133b"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "6ad2ed192ed437ccddfed0550bcab13c"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "3a7bec41fa66806f1a4308e72f9bd350"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "177a48f4ad5f1f0a6ba37b1801b019c3"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "4bde9b7e78dd4b7d47bc454c4fd75d8b"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "6db980f20d0b09d5a1e329e828c03df3"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "5462f6d7ed9ef40208411c4f97addb27"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "1ee30d3742a68f21b5c11bf2b4bf6d99"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "ee9bc937d5de119dd43c6bf202e2263c"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "0bd6179848218bb9ee0c893e3e424c6c"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "5fbc840aa6d764030937cb0290a4b3e4"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "f2530ac660e162d2bec1a8ea36ff30cb"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "c8094c72c6bccf35b384c7d3f3881153"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "79de63f0449330868e5bbabe0326ed11"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "c63dd049bbea6b61390a1b053e45e573"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "375c31bbab07b8def44ddd2a556071cc"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "178efb29a631ecc57e781767ddb23af9"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "eb72559e44718e2f26f5bd14730babf1"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "e8c07190dcbad9ca4e2c41ff6d02b0a2"
  },
  {
    "url": "posts/python/deadlock.html",
    "revision": "82032e12d79c85f3271805a5d11de63b"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "079a9dde39053a3a1214f1a0e9584f3d"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "ff73b12df38a0e7bccd9f8b272135fa6"
  },
  {
    "url": "posts/python/python-dynamic-import.html",
    "revision": "c59578931df9fa6b4d1085e406bfeb89"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "81b166d08de845c557f39598567f5b22"
  },
  {
    "url": "posts/python/python-metaclass.html",
    "revision": "ae6b31b055bcf22cc47fd8ae1bdc1fc6"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "7cd54ad9e95344e62dff3c0fa59bd2fa"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "4ceed415dbe1b90078be9c552b1a5247"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "034ab7e73f9ab92febd128911b1b52d0"
  },
  {
    "url": "posts/python/whats-new-in-python3-8.html",
    "revision": "4c83e58cb950a1583061e8eb551c0e99"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "ddb1d8bab846fedd58a5da0021cdd31a"
  },
  {
    "url": "tag/algorithm/index.html",
    "revision": "615680442fbbb50b712b5b983be4462b"
  },
  {
    "url": "tag/api/index.html",
    "revision": "ef86eb3b0e1fca841c14c931a8054810"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "97e474e001357821d2042ad420313f43"
  },
  {
    "url": "tag/context/index.html",
    "revision": "d11e3151b7856dd09501ad03f832ef14"
  },
  {
    "url": "tag/database/index.html",
    "revision": "2a142047bd512b01c1a5c7f919aaf3ae"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "d5cc475a821d3349a7df12012688ea27"
  },
  {
    "url": "tag/git/index.html",
    "revision": "4c986bb23c5a17c1b0746b84a7a54936"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "9d22ddecdf995245b6994e1dea83128f"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "6e3c831ab0abc52b96b01196250cb09d"
  },
  {
    "url": "tag/http/index.html",
    "revision": "37b6bc195fd14d99064603783b0fb25f"
  },
  {
    "url": "tag/index.html",
    "revision": "4570c0542c937e5c6a566ca055e1ad7b"
  },
  {
    "url": "tag/java/index.html",
    "revision": "64b44c11bd3fefcd6881a76f65daa983"
  },
  {
    "url": "tag/java/page/2/index.html",
    "revision": "0e6309640f5f185b79493a31fdcda764"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "32ef476c00f17f830ab4943b766802e6"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "16d22adc08cfe3e44138622962bd74f2"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "e5c232f737f0c065cd43366368f83600"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "4b83b77103491f8e08de0f95297254f9"
  },
  {
    "url": "tag/mq/index.html",
    "revision": "d02c9b2a0e0d1145850108322fb5bea6"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "bd6c2b1ef6d76e4bc18b2a2a4d72e686"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "d332c6d6b70e4d3a479aaa1d5dd54c11"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "b5fc5476cdce0c321932c24e88e3df38"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "27e661c30fb5549b0e1434b70dc2b118"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "059620e40bc268622e7a984f6f3fd3e8"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "69e5315e4e26fb0a38892eb75ce96ef2"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "ccc2d205e3cced54bf7bc97648765158"
  },
  {
    "url": "tag/python/index.html",
    "revision": "ff392e7ac8ebc577a9de276e3778ee07"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "a30438afe1f901eaaf0585b4a90d91d4"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "6df8d46f9de361ef2bf5ef168dc52938"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "2161843d90f5eca8052cb2ec678b42b7"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "25de1d8fb37b53152c00fa3b859fa7a1"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "0d4820592498b2f893027661e4ed0661"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "a8972ab989861826e250b5f1813a97f3"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "a8b7361c4191e67fc2c40cae518bf645"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "42dcfbbc03919ec118fd5967cde61644"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "19438cf1918de6754041ce5f8b7fa183"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "b89732ff58c0d5a03e08c1fe594079b3"
  },
  {
    "url": "timeline/index.html",
    "revision": "89d7ad7d87a556b1a29662ed9b45dabf"
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
