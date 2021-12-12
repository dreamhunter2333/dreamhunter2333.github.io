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
    "revision": "056e7a705476505ae101fa23ade7b09d"
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
    "url": "assets/js/100.4e61637f.js",
    "revision": "b5fae98ecf980c579c5ef69a1d1eff98"
  },
  {
    "url": "assets/js/101.0f8d0b32.js",
    "revision": "24eb1fef4759bcc17b8fe0ab64a99b89"
  },
  {
    "url": "assets/js/102.faa136cb.js",
    "revision": "2724204d048e2d2b9212a027081105d6"
  },
  {
    "url": "assets/js/103.1a344547.js",
    "revision": "cf2a387d73f385751cd85cd31942c747"
  },
  {
    "url": "assets/js/104.ba125853.js",
    "revision": "41ab64bb0353729c418943c428f1883d"
  },
  {
    "url": "assets/js/105.4f75aa63.js",
    "revision": "99b5fc78df54bc6827bc99556a6c22e6"
  },
  {
    "url": "assets/js/106.481d7ba1.js",
    "revision": "4425a468db3396f9c24a6de49e58d56f"
  },
  {
    "url": "assets/js/107.4aeb31f3.js",
    "revision": "9bf8cf4ab95c602543014c1a007b289e"
  },
  {
    "url": "assets/js/108.54a3920f.js",
    "revision": "e4eaac9e2acbcc0af7e277f65710a36a"
  },
  {
    "url": "assets/js/109.e70fa774.js",
    "revision": "14a4ffb658ff6c7a89bc7ae11592f089"
  },
  {
    "url": "assets/js/11.47bc4a45.js",
    "revision": "19db9262a8fc3992fe235d51eaca259b"
  },
  {
    "url": "assets/js/110.3d79a813.js",
    "revision": "7e51768c6c9c9760e094a64a3465d258"
  },
  {
    "url": "assets/js/111.db840d7c.js",
    "revision": "c59ae87ba13aee7a17a6c29c99afc90a"
  },
  {
    "url": "assets/js/112.e1a7f097.js",
    "revision": "539cb9c8bbf8101638339b33b02ca16d"
  },
  {
    "url": "assets/js/113.f7b757d6.js",
    "revision": "61013854c15b939855756137a031aaa8"
  },
  {
    "url": "assets/js/114.c37637ba.js",
    "revision": "9be1c68ade1fcc5ab7a4fb2529f6cb30"
  },
  {
    "url": "assets/js/115.0d281dc1.js",
    "revision": "5da77c88df5e73171fce307e7faa3bec"
  },
  {
    "url": "assets/js/116.d0db6b30.js",
    "revision": "978c696905ebe60ae0fa62dcc0abca4a"
  },
  {
    "url": "assets/js/117.577b59a4.js",
    "revision": "da81bb4064f37e9625a62cb2088f75b8"
  },
  {
    "url": "assets/js/118.e6ffb32a.js",
    "revision": "136f433adc3d693f735c6b26e2a99b15"
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
    "url": "assets/js/56.8eab5bd7.js",
    "revision": "7a954d3179d3ab2fcefbeadf6d8a15d7"
  },
  {
    "url": "assets/js/57.e8d16f59.js",
    "revision": "5ec036bbe8992bded004ecbbdef94213"
  },
  {
    "url": "assets/js/58.624a0037.js",
    "revision": "1c9483476124513377b1437f87f85868"
  },
  {
    "url": "assets/js/59.61f5d3ba.js",
    "revision": "16d25fc349362edf638ed95119ca46eb"
  },
  {
    "url": "assets/js/6.354dc403.js",
    "revision": "02cf03ef48a6dbc4db87069885e9a6e7"
  },
  {
    "url": "assets/js/60.f7e89dad.js",
    "revision": "149db3be77e14f9f41e053ff6e1565b2"
  },
  {
    "url": "assets/js/61.190496c7.js",
    "revision": "315c43b661ad40eba3780bcccb1f63d3"
  },
  {
    "url": "assets/js/62.bc5bfaf8.js",
    "revision": "f34c6ffb4247a2d55c5b47f5577d7629"
  },
  {
    "url": "assets/js/63.4422c85a.js",
    "revision": "822258ae0a5b4d9fdf34a4a7e39972f6"
  },
  {
    "url": "assets/js/64.d251ff3f.js",
    "revision": "a8877c7730754bbc04ba7f191be87836"
  },
  {
    "url": "assets/js/65.b02f2ce9.js",
    "revision": "97ec3b4dce8473bb54da0e4a58f8a55e"
  },
  {
    "url": "assets/js/66.e58f7735.js",
    "revision": "ccf03c368d16ae446a1b3ac152de37e0"
  },
  {
    "url": "assets/js/67.d9c00536.js",
    "revision": "40c022d2f1141b73641fd726c1265dca"
  },
  {
    "url": "assets/js/68.4158eacd.js",
    "revision": "dbd30347b78342c51ae25245204cec2d"
  },
  {
    "url": "assets/js/69.dffdb2c6.js",
    "revision": "94f3759163583967680f683138f813ab"
  },
  {
    "url": "assets/js/7.10f00ff4.js",
    "revision": "86e4d2ed660f70d29ac03714e7596bb2"
  },
  {
    "url": "assets/js/70.e405e556.js",
    "revision": "1a6769015789bb6ebf4a210a150310f9"
  },
  {
    "url": "assets/js/71.fd40e3fe.js",
    "revision": "308a39f101d80bfee087a7a795f0fbfe"
  },
  {
    "url": "assets/js/72.04a55a9b.js",
    "revision": "67fcd618ae11aafb4b374c108372017a"
  },
  {
    "url": "assets/js/73.aa4e3bf7.js",
    "revision": "73b278e2206965211996d8efb9de217b"
  },
  {
    "url": "assets/js/74.4c2ae43a.js",
    "revision": "6d94d9a18c446f3e06c8e846b048f929"
  },
  {
    "url": "assets/js/75.5c198980.js",
    "revision": "7c851a8ee4f0202b1ec423fc5372c358"
  },
  {
    "url": "assets/js/76.4000b0b3.js",
    "revision": "08603884c6a674c181a5786b1a1fe135"
  },
  {
    "url": "assets/js/77.c1bc664b.js",
    "revision": "34c188b71e6e404b18ae61cde31befb6"
  },
  {
    "url": "assets/js/78.00f98072.js",
    "revision": "d8070fea5326032f22c3729030df6c05"
  },
  {
    "url": "assets/js/79.bfa1620b.js",
    "revision": "c8491a4e8cf5be498a365a3e0a0e1fc9"
  },
  {
    "url": "assets/js/8.26ed1ff9.js",
    "revision": "e39b5506af0f74a5591317583433a435"
  },
  {
    "url": "assets/js/80.ba5c597f.js",
    "revision": "9e2caabc5942f9ed69f85f8a414f002c"
  },
  {
    "url": "assets/js/81.ad24624c.js",
    "revision": "dd3d6959714af561e1903294554d1f93"
  },
  {
    "url": "assets/js/82.2d76a52c.js",
    "revision": "5f43317271355009b2ff600ac0ef2f4f"
  },
  {
    "url": "assets/js/83.dd889f22.js",
    "revision": "68cfebc4302f5de17acda2b8db6c1fe4"
  },
  {
    "url": "assets/js/84.7066121f.js",
    "revision": "fbee055ae0df21ad5a7b8b05fb0a3605"
  },
  {
    "url": "assets/js/85.2b87fa8e.js",
    "revision": "f7d7515ef7cac0eda1a485b03f1dcc49"
  },
  {
    "url": "assets/js/86.503b35cd.js",
    "revision": "a65892cb4514bc9b6f3df0f3708435fd"
  },
  {
    "url": "assets/js/87.71c139d5.js",
    "revision": "5626ba9da1380ac0139d0fb373b3d147"
  },
  {
    "url": "assets/js/88.d43fee17.js",
    "revision": "03d0e481bd582b869e9ae1e19da7e102"
  },
  {
    "url": "assets/js/89.de55f868.js",
    "revision": "d277fa947a4534e3369570809b54aae0"
  },
  {
    "url": "assets/js/9.adf5f9ec.js",
    "revision": "2be64e42bf9553b40d6f1d9b03dc5ae9"
  },
  {
    "url": "assets/js/90.73695fee.js",
    "revision": "67725dee7a9d5d7cc09c45a9a4649971"
  },
  {
    "url": "assets/js/91.a2d4f928.js",
    "revision": "28409459cfb2a7da4dfa2ac70b68d312"
  },
  {
    "url": "assets/js/92.2ffccd5f.js",
    "revision": "fa0ee9f15c833738ed9f9b4c15123870"
  },
  {
    "url": "assets/js/93.cd9ec81f.js",
    "revision": "2a4f2435cea973d2fa790b14e95b68b7"
  },
  {
    "url": "assets/js/94.fde1e643.js",
    "revision": "043221cff258455e55f18c177cf3f589"
  },
  {
    "url": "assets/js/95.7e7b2c76.js",
    "revision": "329b6795b1794944ed1eac1f81b6ad5e"
  },
  {
    "url": "assets/js/96.f28122c1.js",
    "revision": "ddfe29524354e55cbd961cb0f7db7d4e"
  },
  {
    "url": "assets/js/97.d3424fc0.js",
    "revision": "171c781c7a33128942249210e7feb3d2"
  },
  {
    "url": "assets/js/98.ab8c7c5d.js",
    "revision": "e2aeb39cb8b268f3dc6099079d9b7dd4"
  },
  {
    "url": "assets/js/99.26b3372e.js",
    "revision": "0d359632c23cbd68ed78a472b938e104"
  },
  {
    "url": "assets/js/app.dfda04e5.js",
    "revision": "9275b4169ffa00ca74e3817291f97899"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/algorithm/index.html",
    "revision": "ebd4bb70041e3b9815fd6c3b349d5710"
  },
  {
    "url": "categories/database/index.html",
    "revision": "1b9b29ccb363aed6cf10b38d48c1f318"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "ba7f8489acbb643a957288208dcb822c"
  },
  {
    "url": "categories/front/index.html",
    "revision": "e34d8c9b75e718785adadb705c8fa21f"
  },
  {
    "url": "categories/git/index.html",
    "revision": "b509be9c9bdf91a243e4d3b6d6057c54"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "b72f8eedc51518aea2f3aaf0ca5609ff"
  },
  {
    "url": "categories/http/index.html",
    "revision": "9db546b732a5f9d4fd8a27e41ff8c746"
  },
  {
    "url": "categories/index.html",
    "revision": "15d1957c7610c4aeb215da532b9724ae"
  },
  {
    "url": "categories/java/index.html",
    "revision": "740aba9118cc32793c6c444b8dcfc7c5"
  },
  {
    "url": "categories/java/page/2/index.html",
    "revision": "109fd89de8e204c5c019ffec43c6673e"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "b0e39635837be46ce7a7b3fe992edb91"
  },
  {
    "url": "categories/linux/page/2/index.html",
    "revision": "20a719ac9a09e5f584d4a43dd4a42db5"
  },
  {
    "url": "categories/mq/index.html",
    "revision": "d32eb32233ac15035394c8972d93802d"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "0a7ae96672daa0a5171bf5e217db43b4"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "ac6f8c912d33360cf55df27e0942214e"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "2c5414e948157e32a3b318c276603d2f"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "56304dd1fdb5647729c97e71eb81bad7"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "5be8be30a90c5278c933c254776813c4"
  },
  {
    "url": "categories/python/index.html",
    "revision": "57304cd745090199f4ae624802b0eda5"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "fa388edac7d9ae3241d6fc7b944843c7"
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
    "revision": "81013432b913cd4fc17162b8e5a97819"
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
    "revision": "25a94cbed87f58efb48bd5c840001ffa"
  },
  {
    "url": "posts/database/SQL-constraints.html",
    "revision": "2f1a92668b9dc074889369f88ac30bf1"
  },
  {
    "url": "posts/database/SQL-keyword-order.html",
    "revision": "83a47f39b5f6ffbfda389da633c90816"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "4f7f0b15822b6793bf1f5e73707c6619"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "e95762a749b1289796ea688622303631"
  },
  {
    "url": "posts/database/why-redis-fast.html",
    "revision": "0d89c003a361bbb60f285cf23c4ed08c"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "0dd9e4fa3281432eb9aa3439f561c731"
  },
  {
    "url": "posts/docker/docker-host.html",
    "revision": "f14bb9ece9f5211bb04e1c6644c16826"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "3558586c9e58b8a7bdf9e33c1ed12ba6"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "4a4464c0ddd6e305258b4f552b43f776"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "f0b15d06e3cdeb3ef0981c1de7b442b5"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "3308ddecd0b784491bfdf1dcfd787e42"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "8dd3d4aa76b07d43285a8f59da7e0da9"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "4652781375bc7f979fd8320edae5e39d"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "b340dca71becb1faf1836fa6cf2e73be"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "6d349534d0f71e62f04bf08e641741d1"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "c4e1110cf94e13b10aed4eafb5cbe33b"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "d5be9165be755f233d79fdbfa3218289"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "7b185a72a948a7f0c397515f0477cc98"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "65f429a48fca9e1d3cbcea7f8af8297c"
  },
  {
    "url": "posts/git/use-multi-access-token.html",
    "revision": "e2d08e35e953bff5f68b81a9df4f3a28"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "2e323efd3cb59167f3dc06079903d0e7"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "d09dab32ed235b485f05f5a1863e0a59"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "7aea604f00c4220ccd4b55290ae7daea"
  },
  {
    "url": "posts/http/https-shakehand.html",
    "revision": "99da67b7c352d078da1bc626f7ada6c2"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "4064d95ebc2a02687d803caf6aa3ac08"
  },
  {
    "url": "posts/java/java-http-proxy.html",
    "revision": "c20e652c45d19b5331fa0992e702ef7f"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "3227a2d4a0307192c240b8d4fe3a4e6d"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "dec92f718d3875e49742be3b14486895"
  },
  {
    "url": "posts/java/java-spring-MyBatis-Annotation.html",
    "revision": "a6b1f6f1ff2696bb8c3ef763958808b2"
  },
  {
    "url": "posts/java/java-Tetris.html",
    "revision": "3a333a828e53b7d8c36e42f4484fc19c"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "6e2447c255f57c5a8caaf91c727fa89e"
  },
  {
    "url": "posts/java/spring-RedisTemplate.html",
    "revision": "64ec934b40557ca284d408be1c8c1873"
  },
  {
    "url": "posts/java/springboot-disable-autoconfig.html",
    "revision": "a33a5f354ec7bf76912d556923fd2981"
  },
  {
    "url": "posts/java/springboot-schedule-task.html",
    "revision": "d03cc3ca0ed0faacd26ff4ab506268f7"
  },
  {
    "url": "posts/java/springboot-swagger-ui-custom-config.html",
    "revision": "79bf6ea1fd1c8d1c925d78de909f5a6e"
  },
  {
    "url": "posts/java/TOTP.html",
    "revision": "d30c0215909157610d71a7df6d7e31cd"
  },
  {
    "url": "posts/linux/linux-chm2html.html",
    "revision": "5662ea298d59c27109467e0fe1ff5e3e"
  },
  {
    "url": "posts/linux/linux-ecs.html",
    "revision": "c86555494d582aa80446b506b3f94a88"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "570e09aa28df6466d6e304691f9a663e"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "b857fff62442dae9e3c032154715df87"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "2fe624bcf41f1d74fc137981e8b690ac"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "6cb327d55f6c742446cd8a52928b8bfc"
  },
  {
    "url": "posts/linux/ubuntu-switch-sources.html",
    "revision": "8f16f6adc9bf680b7c064e1fd9827714"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "18b430fcc2ea47040b68853c9ad4ddf0"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "ffc981f8627fc38d9b7a5841b946c519"
  },
  {
    "url": "posts/linux/wsl2-install.html",
    "revision": "93b613e9b2da5a58e7e88277b9077ea3"
  },
  {
    "url": "posts/linux/wsl2-use-winip.html",
    "revision": "e7e21b9142bcbbf20284847a77075448"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "67a6eca062b231340136e475fadf7ed9"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "d26f10e25cc23ff833df23d43df392fc"
  },
  {
    "url": "posts/mq/ensure-not-repeatedly-consumed.html",
    "revision": "6a5e80293b769d6778792747c9ffa9a6"
  },
  {
    "url": "posts/mq/ensure-order-of-mq.html",
    "revision": "b826bece7b687a7263f9026c9273b39b"
  },
  {
    "url": "posts/mq/high-availability-of-mq.html",
    "revision": "c0cb8de1defc452cdfccd70dcbb73a37"
  },
  {
    "url": "posts/mq/mq-problems.html",
    "revision": "478f2985d771614a643214943ee0a108"
  },
  {
    "url": "posts/mq/why-mq.html",
    "revision": "e8403cf97925496406976c794b9f9874"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "eebe3a4576a3b83d568ab239c51db04e"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "513294117a772bb251a12eb169ad2425"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "06081e0803f3ccb9f3ccf639f20d258a"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "14be44db3e9bf358295432fed5e85578"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "63211d3bafe6145bcf222ba3b924b893"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "5c2a56b51741fd57c08813b0e1a4ac88"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "2d2b7d8ec2b7f57cdc4c5a9da865c671"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "58739504643031ff969788f3c70f96dc"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "6d146826ca9f23501da2d2f1d6de5c27"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "9d3388ae7f3a3f16faaa9439d0cfe4b8"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "c8d57fa88580b0e1e60db1b0b9694533"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "619ab7adebd2cbe027d8fd99bce270bf"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "84fb914a2c16b52b6c2edb3b6b05cfa0"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "5ba1ffc8370f55072f902926a43378ef"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "4f2c6334ec646710143e872f432d1371"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "7fa9ab3885fced9b8bd758942dccc48a"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "ba8f636e9d45da0229de967a569b8f99"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "74c62988b83dbc5dbbe62747c7999675"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "0b916a8e576b7aec735033fe54d2c93e"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "29d2cfa2be9f88b9d81ead8ee2e54796"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "37559093ba205bf2c01ae9ca4fa58127"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "adfb41f75d845cb034e841d679cc7d46"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "7d53ffc6c32dd352c1ac625b09b49f66"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "f3a6066dd3c44083d0cd680f2d4b05ef"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "b6525fe7710b55fc189ac70bd1bb8fc1"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "143ea444cd356ea11ee2fe991c051bff"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "3197395b57dd91cdf66f73b2e9c97c6e"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "f5bef6eb94170f3c4ae14f9b86e05f45"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "48ab7c3b9daa3b3baf5803d9925e69f0"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "6068be3b4c18c247de02ae37b6bddd38"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "7ae82f60508220bc96185c3263f1e308"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "4cbbfc5984cd0e5f4e9b7974957a7e3d"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "9027d061cd4ad05ecf0f438034e77e25"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "9c3616864a69d7eab432ac8620f599fa"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "6f8e59ec31bea9cbf8b9fb2951a5ddfe"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "71bf4eaca6c4ea952a05fbb69006b62d"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "77ea5d75f799e1d5bf29c15b28311bab"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "3de161c5037076fe05d6fa97a9c31940"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "500d2cb0688ad0b1424666a8abacae51"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "f5b31d32a102a3ebef30143962e31123"
  },
  {
    "url": "posts/python/deadlock.html",
    "revision": "aa72c80e8357fdf8378197e05fe74c3e"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "07d04d8acd6d425cfba0f565326a2d48"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "7f7d4013a5a5ef30cf401a5d43cc9b4b"
  },
  {
    "url": "posts/python/python-dynamic-import.html",
    "revision": "b9c3c8334e9bb6acd8ff34450ebc6390"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "9f7a3c18f23e47cafa14a5ad7444a0dd"
  },
  {
    "url": "posts/python/python-metaclass.html",
    "revision": "a54834d9f4ecfd1685dd3420888c69f1"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "bf6bee7dc83c2dc0f2853a2ebbd0b582"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "36cbf56313a5ed81cfad724705c9fbae"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "734a9f19cde1394243c64f1eb285948e"
  },
  {
    "url": "posts/python/whats-new-in-python3-8.html",
    "revision": "2208bfd6b7260cb8217b7bf967c92778"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "69e8c9f2dce28665632b56b507e5315f"
  },
  {
    "url": "tag/algorithm/index.html",
    "revision": "2c82da1d54e3f86cedf0326938ffec38"
  },
  {
    "url": "tag/api/index.html",
    "revision": "959f9c9e504002340405805eb9a1bdcb"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "191b9b44be691131f5c56d012ab22608"
  },
  {
    "url": "tag/context/index.html",
    "revision": "899df6e595fd23e9d5582cd75d11f0e5"
  },
  {
    "url": "tag/database/index.html",
    "revision": "ef8a051301a8b040428d34acde1efdb1"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "2dd345975c3385dcd0c5fc7fcc1cbfd0"
  },
  {
    "url": "tag/git/index.html",
    "revision": "b8b7715eccf09a3aa289fadbf009771e"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "a6d6b193b5d41dc7774c5d924b8c11dd"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "02388d69ce16aba668ad35cc7a09adba"
  },
  {
    "url": "tag/http/index.html",
    "revision": "bf117d5622447cdd6ae0b63e6698fc72"
  },
  {
    "url": "tag/index.html",
    "revision": "5d916cb7df02f0e6aa41a62f5727aa32"
  },
  {
    "url": "tag/java/index.html",
    "revision": "aca2fb701f59d7b165f0da9877e2346b"
  },
  {
    "url": "tag/java/page/2/index.html",
    "revision": "176238b3093a226c38c6faef7329be78"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "6488ac57578cfb18fa7bb8d447288624"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "22a1cd092b661f83ebd0ec00a47487f6"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "ad60cb209765ab734b4d599d05616962"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "cc4899b3bb7c8b638fee8ae190bd76fc"
  },
  {
    "url": "tag/mq/index.html",
    "revision": "3f976f54a11aee7364d014f4cb8d2805"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "1b4e6750e640057623118b95d0d249fd"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "6e267bb662b4150fdbf5d6bf39d07143"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "81b332e6098c748733541356a0b0e6a5"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "8c7adcc0179612294f3eee2a8829fe3c"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "eb45ce805449ba818d384f9704087898"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "741521a6543b30b01cb6eb22c2daa0ec"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "653ee7b9e58c52f8c6a6deaa44cbe01e"
  },
  {
    "url": "tag/python/index.html",
    "revision": "75f272f04148a591290e86134cf9cef2"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "1ea1836198a6fac67c91f62d5fc60470"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "88d43913a3901d4e2e9452548ac3d618"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "0e217d0f3a8f65b51ef33554f4b89ecc"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "1f8f4aa32457a7082830955c5bb61e6e"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "f756d6f4cb8b96c192e8792a2718f745"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "6d3c6c4e145b378adc90e43fbdcf4337"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "1cb56f3206e5a5d139bb8d01bb684113"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "ee73dea1dc2119cc9990d112dcfaad76"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "05b3e7c2e811617417da5050a7b4b594"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "d4de6c9395b3b90caf4969a5638a39a3"
  },
  {
    "url": "timeline/index.html",
    "revision": "5facf44b0d75abe687ca2bd65f616580"
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
