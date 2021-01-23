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
    "revision": "71aed7b1d6d9d34b4863ba41c323aa95"
  },
  {
    "url": "assets/css/0.styles.57131ae0.css",
    "revision": "90c283463ffb97f208f41713410bb42e"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.4b36269e.js",
    "revision": "99a3a1a5e41d6fa8fb6208a5296131a6"
  },
  {
    "url": "assets/js/10.b91cf75d.js",
    "revision": "cbf8e9e4a1ea2e8cb73c816bf74671ca"
  },
  {
    "url": "assets/js/11.b8f91799.js",
    "revision": "35c848db755e76488f240969b26dd219"
  },
  {
    "url": "assets/js/12.f310df08.js",
    "revision": "1a5edfd7585d0ba50a863dc497db3ef5"
  },
  {
    "url": "assets/js/13.ab77a69f.js",
    "revision": "921952af8ed2ba4c187ab5dda62a82ef"
  },
  {
    "url": "assets/js/14.90dff13a.js",
    "revision": "1a3810dc5a4cb7e6aa6f996c6707460f"
  },
  {
    "url": "assets/js/15.fb7a22e1.js",
    "revision": "0c722cff0643f5fa639eff37459161a7"
  },
  {
    "url": "assets/js/16.b3dadce7.js",
    "revision": "777b2ca8c1d0ebbe5fc497191de77f16"
  },
  {
    "url": "assets/js/17.c9f7bf77.js",
    "revision": "4a6227fe8baa2076679ef16890fe338c"
  },
  {
    "url": "assets/js/18.317beda3.js",
    "revision": "bda684daced64b7e6b3b1a0a1a267473"
  },
  {
    "url": "assets/js/19.2163abdb.js",
    "revision": "c4ab9f4fb2a471a173e6a3a1ebe7cea2"
  },
  {
    "url": "assets/js/20.a07a9dda.js",
    "revision": "638ced5a4b408fa85fc4ddc0cfb55bcc"
  },
  {
    "url": "assets/js/21.b8d2b800.js",
    "revision": "a8e213a6f1212763e242bc0ae9e7ba5f"
  },
  {
    "url": "assets/js/22.cc8b1f98.js",
    "revision": "0cc542f4b8a15e5e578726c6edc5f060"
  },
  {
    "url": "assets/js/23.9f9a4d62.js",
    "revision": "b34a64baa5f6f26c13118e205909c9cb"
  },
  {
    "url": "assets/js/24.833447da.js",
    "revision": "e4bf5ecff4587a0cee65be3bc228a5b8"
  },
  {
    "url": "assets/js/25.3042be03.js",
    "revision": "f970f40db0036c5107d1518b391072f8"
  },
  {
    "url": "assets/js/26.5d8385fb.js",
    "revision": "66b6db663f9c5c1049994d565433794e"
  },
  {
    "url": "assets/js/27.36841b50.js",
    "revision": "ad2c12e247a44cb8decd8d4246508578"
  },
  {
    "url": "assets/js/28.c3a9626c.js",
    "revision": "16be641340ad67531bc336adaf2d5437"
  },
  {
    "url": "assets/js/29.32d5890e.js",
    "revision": "61d2497bcdbb35e24de5c1f6c30d774d"
  },
  {
    "url": "assets/js/3.d40a3524.js",
    "revision": "f5b739f097f42cde2a9eed068df900df"
  },
  {
    "url": "assets/js/30.91ae5fd8.js",
    "revision": "cd9c3b0ce04629e1e8275ef618ed69da"
  },
  {
    "url": "assets/js/31.2873e4ad.js",
    "revision": "cb5921e7971b99e09bd2d4ff03057025"
  },
  {
    "url": "assets/js/32.6352807a.js",
    "revision": "bfe8b2c00b7d20d0e94794e4dbb0798d"
  },
  {
    "url": "assets/js/33.e17ae03b.js",
    "revision": "07d91f8fc138595cd53ae0b3441f4eb1"
  },
  {
    "url": "assets/js/34.49a3b1ad.js",
    "revision": "912a0d4826a658a1e1da558bc36375cc"
  },
  {
    "url": "assets/js/35.9277e5c5.js",
    "revision": "4c7af57f881129f3c3448717ddce6de2"
  },
  {
    "url": "assets/js/36.6bde41cc.js",
    "revision": "0e9da3d989c6d3fdf53dd8cdbf0d493d"
  },
  {
    "url": "assets/js/37.a31a400c.js",
    "revision": "9a36fa6973b62136eedc6ea410fdeb6c"
  },
  {
    "url": "assets/js/38.0c4573b2.js",
    "revision": "42d42f87bc756f64f724a3b109085dfc"
  },
  {
    "url": "assets/js/39.89df4aa8.js",
    "revision": "d48832d2ff14b5421c77441a7ae5862f"
  },
  {
    "url": "assets/js/4.7125555a.js",
    "revision": "9e7c3b44267b6fd8707b6dbea4b876c3"
  },
  {
    "url": "assets/js/40.99386254.js",
    "revision": "efab45aac17cf36de3fa40126685961a"
  },
  {
    "url": "assets/js/41.7129de5d.js",
    "revision": "af498e1bbd46e3a2d4fdd6c4ac942b65"
  },
  {
    "url": "assets/js/42.f5762621.js",
    "revision": "f91e3f15bac97b913ed0f54366f83f5f"
  },
  {
    "url": "assets/js/43.bef69900.js",
    "revision": "d5a68d3c297c807823163c08eb7f2fbe"
  },
  {
    "url": "assets/js/44.f37521d1.js",
    "revision": "ec6a471ef983c57b6b72cc3b3ae6ca9a"
  },
  {
    "url": "assets/js/45.2ead1581.js",
    "revision": "ce9407d86c8f60e41de493747693c24e"
  },
  {
    "url": "assets/js/46.eca71105.js",
    "revision": "4e484723a6b4ca6fbabf5ff0ccb8e399"
  },
  {
    "url": "assets/js/47.d1d5d850.js",
    "revision": "ff876909bdc1adcc9da1fc1d916b5718"
  },
  {
    "url": "assets/js/48.2e3a8a6b.js",
    "revision": "912eed0e8fa7601fde1610ba25f2b7e5"
  },
  {
    "url": "assets/js/49.0ef21995.js",
    "revision": "9bc9e1c44c213fc7beace58022c2d856"
  },
  {
    "url": "assets/js/5.9cf5accc.js",
    "revision": "7922a2da6ed14193896d1e8d34502036"
  },
  {
    "url": "assets/js/50.46ed8dd4.js",
    "revision": "de0a085a36174c9f0d9e9281b5dbc6e7"
  },
  {
    "url": "assets/js/51.263715ff.js",
    "revision": "48a7489072a993940596f0ec4921254d"
  },
  {
    "url": "assets/js/52.5be3b690.js",
    "revision": "beca72b59096eb6aba4489078e31d64f"
  },
  {
    "url": "assets/js/53.3485526f.js",
    "revision": "ee31a04ab7450faaaf63f50490288000"
  },
  {
    "url": "assets/js/54.16e71d50.js",
    "revision": "e56cb844faf5a2c012309216666582c1"
  },
  {
    "url": "assets/js/55.0b1b2a99.js",
    "revision": "2a6896ed6f0cbdfa0a915d5541d21d06"
  },
  {
    "url": "assets/js/56.0bf25cde.js",
    "revision": "332d8a26aed055854f2c49248fbf8845"
  },
  {
    "url": "assets/js/57.ad868a39.js",
    "revision": "442e29e5fcd7383b8de3c682dcf1572c"
  },
  {
    "url": "assets/js/58.06253527.js",
    "revision": "5230000154ed1d27964ed2e64ded53ee"
  },
  {
    "url": "assets/js/59.a8cfe740.js",
    "revision": "130f8cd8deb05a6db2b6ccbfcb6e95f7"
  },
  {
    "url": "assets/js/6.67a111ac.js",
    "revision": "fd95c1aede520608ff01eb25d1ef51aa"
  },
  {
    "url": "assets/js/60.afd8ac17.js",
    "revision": "94b6d0406db99516bfea0bb7ca1bfa62"
  },
  {
    "url": "assets/js/61.41a426a8.js",
    "revision": "8119aaebd09a6ed602c40ceadabd55f8"
  },
  {
    "url": "assets/js/62.d5a51aad.js",
    "revision": "542d004cf9dbe72a1e09f636d6f13cf0"
  },
  {
    "url": "assets/js/63.cdb57321.js",
    "revision": "dbb47ecbeac9fb29c4b38ae4908a69a5"
  },
  {
    "url": "assets/js/64.dc5608e6.js",
    "revision": "6ab33c26319be16fe3c1d3a7033db6bf"
  },
  {
    "url": "assets/js/65.8284801e.js",
    "revision": "91a7ff3b59f1cd8e6c260d9ebb9889ba"
  },
  {
    "url": "assets/js/66.da8d852a.js",
    "revision": "3363416560abb14380d6d77d351e7f15"
  },
  {
    "url": "assets/js/67.5bc9ca52.js",
    "revision": "9a1bc150f7d50e24ffb9b3d2203589be"
  },
  {
    "url": "assets/js/68.b52f29c1.js",
    "revision": "a7e03c0b4020115c5508c675f09011a6"
  },
  {
    "url": "assets/js/69.3be294fa.js",
    "revision": "552beb0e27c9f2a348f92f71413867ee"
  },
  {
    "url": "assets/js/7.f4485ce8.js",
    "revision": "9f0211b2243a19b2116fb155b6b31825"
  },
  {
    "url": "assets/js/70.b7dfa9b5.js",
    "revision": "6e2560d369fe698a874ea89a492e76e8"
  },
  {
    "url": "assets/js/71.909eb735.js",
    "revision": "06c0d9a72ada2056cf18ed879ba0be47"
  },
  {
    "url": "assets/js/72.72785e3b.js",
    "revision": "52368b0639995e4bf411b5634dbfbdc7"
  },
  {
    "url": "assets/js/73.131f71e5.js",
    "revision": "b06a86608263bc11ed9860cd9caa929c"
  },
  {
    "url": "assets/js/74.850687a1.js",
    "revision": "d867f51602295aa1a29d6a1b57a5791d"
  },
  {
    "url": "assets/js/75.aa637c52.js",
    "revision": "8b794129c316621195f56c354462502a"
  },
  {
    "url": "assets/js/76.795bbfa5.js",
    "revision": "b8d4259fcf807e21c0a1aea4175780e4"
  },
  {
    "url": "assets/js/77.da10d456.js",
    "revision": "abb11bd45962e7b40406b63ff6e14e4e"
  },
  {
    "url": "assets/js/78.d0aa8bda.js",
    "revision": "dd85c4c3aa73623814235b3cab0ebe3e"
  },
  {
    "url": "assets/js/79.dfef1315.js",
    "revision": "26f969cfefbcd3e3a261a48295761a14"
  },
  {
    "url": "assets/js/8.6dba2d0c.js",
    "revision": "66d01b7fe0af33b2152bc46f49975b76"
  },
  {
    "url": "assets/js/80.b1d925f5.js",
    "revision": "674306b67c77804b29941ba0f8aed0b2"
  },
  {
    "url": "assets/js/81.0f101700.js",
    "revision": "2246466d39d15e02cae8a2c1bfa7af7d"
  },
  {
    "url": "assets/js/82.51e4fc42.js",
    "revision": "f5f280418298fc7452c8506b090103e4"
  },
  {
    "url": "assets/js/83.6d752533.js",
    "revision": "9b1b7ff48183046e9aef69218e7376ba"
  },
  {
    "url": "assets/js/84.f31d5ea7.js",
    "revision": "b4fd88d0e8d2cbd221809bcb9b66cc37"
  },
  {
    "url": "assets/js/85.7c1acb41.js",
    "revision": "043894422c4b012bea735c3eb7108992"
  },
  {
    "url": "assets/js/86.18975f37.js",
    "revision": "1b4c9e75f163508b95411d5426764bdc"
  },
  {
    "url": "assets/js/87.4838334b.js",
    "revision": "681d52b577fcbf47b761d226661b0537"
  },
  {
    "url": "assets/js/88.4a5be838.js",
    "revision": "81f1f11bab345edbeab0d35f16f507b6"
  },
  {
    "url": "assets/js/89.82eeefdd.js",
    "revision": "146dd98242859a1da4804707067f0660"
  },
  {
    "url": "assets/js/9.4ae83516.js",
    "revision": "5b89697caddd87f7dc6ebf4d347b9ece"
  },
  {
    "url": "assets/js/90.1cb3de7a.js",
    "revision": "92558c760d98654789350cdb2b9a6500"
  },
  {
    "url": "assets/js/91.3e5d4062.js",
    "revision": "3d939e6335c5053e02ca3341f2003370"
  },
  {
    "url": "assets/js/92.fb8ee205.js",
    "revision": "3ef4ef3753a3cdfa2e3c6f6e523bd4e6"
  },
  {
    "url": "assets/js/app.f8b2542e.js",
    "revision": "90aa6908fb55aa79458a7e23e1861f98"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "eb603649da9d1f2ee3c1a87399098899"
  },
  {
    "url": "categories/front/index.html",
    "revision": "c660872d4fe06c8b309d9149cbfa1ec8"
  },
  {
    "url": "categories/git/index.html",
    "revision": "1f25992c77a5861c00fec53c5cc54381"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "7a00c3a4794993919a6c0a8209016966"
  },
  {
    "url": "categories/index.html",
    "revision": "87602bf85cdb9e2c296f7991d939cd18"
  },
  {
    "url": "categories/java/index.html",
    "revision": "ae23ea8586374a67688fee72b97a5c3e"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "f9bbc03f02954c1524afbba1f22ce1b5"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "8cf51e68105795cd51058d650611fcf2"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "512dfd3bfee361c00aca605140f70c42"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "e3fd728a708c35ba02334d554ff491a6"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "aead4c40d20f36eb8cd74420acf16d81"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "cc0ae0bc65b087a22ebf35db514837dc"
  },
  {
    "url": "categories/python/index.html",
    "revision": "e929e2199ae783277d1f7751b252b706"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "e8f32cb8222ca70a8665dcaded6881eb"
  },
  {
    "url": "categories/sql/index.html",
    "revision": "bc75c9a9cc7506e2d096f3a8ad884b37"
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
    "revision": "5a73970789b5b435bdeb4aa31c8fc26c"
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
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "03ee70673fd0adf4f64983711ea532aa"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "ed816cf3a8d7f181042920b630c0ade8"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "71fc9751fa9dffcf61140b3a8e453602"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "8a90434b3ba58a40d25aa0261f704618"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "be799f4d4da66dd0248831f5f3df34b1"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "1ea852c3f2e6c38c253cd9c12fb4d82f"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "118271d73e851793f672ec3f43e864a0"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "42d5fe550c73f6d82a11f772db281c0a"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "6f5c1e862f41b8055b1261fa8b281617"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "705a155657de00345f6c0569435c712d"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "cd027f2ade666efb5813cfe8a7146d95"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "d342c073eeac23cec4f26020e15b0f65"
  },
  {
    "url": "posts/hackintosh/炫龙耀7000 hackintosh 全过程.html",
    "revision": "5ae3747ef4230cbaa1653883de0f5f01"
  },
  {
    "url": "posts/hackintosh/炫龙耀7000-hackintosh全过程.html",
    "revision": "5ae3747ef4230cbaa1653883de0f5f01"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "7deca90ddc5df6bf67089ef6a8576e00"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "b8e18e37f5e85cef0e5fde863559bdd9"
  },
  {
    "url": "posts/index.html",
    "revision": "fcbc04523174e8ac469b4322b7b067c4"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "07bf610ab0e9cae6cad1002696c4cc4e"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "a4717b01d006323b41e247f3e5303dfa"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "44f924612b460ea90fcea70b82f2318f"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "57ab8b95a0cbb21df52360ab391f63c7"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "56f7042f947b544f3a1ea8474fb6569e"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "f017b769aabc0974217c1004972439cc"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "bd1ce0860d781bb5b9fab579fb72ff23"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "beff9661fc1b820854d48a40ffddde49"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "4d18eaa80244fb0d976cac8ac30c1df8"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "14426b91289d781b0e2f0f23363ac9d0"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "caf5d765a38c43c89d818c845f7056af"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "c8bc36ceaa7bd2dd8dede71051cb2b15"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "a2360f66ae789c56a6b65866262f1867"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "29b76d4d5893d76957fb14069d394562"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "03e6935f41c15114b6b1ca6fea94ceda"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "03dedcd2bd849bcaeadce05c01e9a647"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "36d1aa28dc9c83573988c6739d2fb39b"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "a6fd78ced4341d3f7d7dbdaed2ceffc7"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "b543a66df74d33d3e587bd635ac0b047"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "f2a195fd82641ecbfb91830ce6b727e6"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "bc13a95f9276de2329f7b3aed247b39f"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "8a61d67d293446546d571e0055580256"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "2d3a81c6add65cadbe14a071afa12d52"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "4d2b0f960380cb73a477135527cd3987"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "db93efe70f522d49597211dd186d1da3"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "b8f9ae5934e5e64ddb5ed36305045dcd"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "6c230429e4a0a7b1730387ae7e2c92b0"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "fdedca2d959e09387a4a488eecea5c89"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "2e92cd0108bd909cbba627af48da5cb3"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "b875219f2bf4b7a3cd811e1a74714f7e"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "d0b63d2aa3a542d588fccb708b2d0bbb"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "1edbde05e33a0059cfff658bbb15de47"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "736e06931da79ea611ea792f003fe8f7"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "a624ee83b97dca4fef9fa31c3b6d1ccd"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "fd4bb823fec9d4aefd9797af68b88c6a"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "fdd49c173614105f87caa5fdae3165ee"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "df64bc7c6ce021a545b7fe28679f1a21"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "5aed2633e979edf9983f1774262140e8"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "175f95637cd1b2e7037cfad8ab790572"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "51fab3a60c8de5c1a45d492f17b6eb22"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "f43812f8791df0eea0d49a7850d290d4"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "e3aa3e2ab5b566a077f10dd0a02f2b30"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "032b2f50647a91f27d140d6a7d1140ac"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "95e89f24141bdc3302f5692cd718f2c2"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "d45761f0be540e65620b2651760e6d94"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "666176c729942692c1b66cda1c279c28"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "bc83080cb7a1067331cab4484cdd073e"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "3ecb349a34ba33b5f00cfb430d1cac78"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "1b2fbf55ee94baf326c860dd6a80d563"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "ab1069cef940823d33e7da69287ec91e"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "a8668a37107a9b47401a3fd3a084a849"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "413993dff79cc110e56074a6c28d562b"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "a5eef7472c552d27b354b53f39c7d049"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "618e352ecabf3c1fa8694e5c46640342"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "ac6938e906d75b13833ad5bafbb97dad"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "674f50530be7deb44542da9285731075"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "f549d1381751e1852dc57e35440dd5bf"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "74666e5c10ab71630e7ec8d362175660"
  },
  {
    "url": "posts/python/what’s-new-in-python3-8.html",
    "revision": "2edc0661bbc06aac9b24f5359537f7f6"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "74c5794607eefab38eece590514a0c8c"
  },
  {
    "url": "posts/sql/SQL-constraints.html",
    "revision": "ea8ffb3e35abf4bc67d1722c24622ee1"
  },
  {
    "url": "posts/sql/SQL-NULL-Func.html",
    "revision": "525f59d8ce2966ae4b81b8767bce7aa7"
  },
  {
    "url": "posts/sql/SQL-statement.html",
    "revision": "a98ed3fdae742482ff90c9e332695669"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "328747817bc792a7320f4493c6796b4c"
  },
  {
    "url": "tag/api/index.html",
    "revision": "15812053426bc75dd694a3cae6551849"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "e52fb191de0a1820061e6593c6a5a500"
  },
  {
    "url": "tag/context/index.html",
    "revision": "9673dae0bf875836775966f5127905c9"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "ff3f0aa2f65c790d8176c3e1be0cdbf3"
  },
  {
    "url": "tag/git/index.html",
    "revision": "9ebe347b5b0cfb7b261e09598827ef82"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "e8d1ac77f6a3bdf8680d551cd1e39f91"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "8526998ad7a5b82f599f91f427618fd6"
  },
  {
    "url": "tag/index.html",
    "revision": "d59458d292ddeab6f12c539b2fdb43c4"
  },
  {
    "url": "tag/java/index.html",
    "revision": "450d5fffe1aaac8edf42ce4199e85200"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "ac212c3953cd81f2f60fe37bbc9969f4"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "6758743aacfce700e71f81035d4af3e9"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "ad694010d68468c962edb7fd01329621"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "f8c5c3de85ecc11b86ed8391ed7a0a50"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "74b5d003dc7eae7ffae1236ac82c698b"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "4c85a3947d52a11e8760b759129828e4"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "146cdd0dc1731f3a58dcbad3f0f92b1f"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "0355d4aa4badd1b7132fb498be2e432a"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "e725a39afb55ac07934d63dad0ca5018"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "dcd22bbc46ae9baa378554b4cde99fb2"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "a676ec23569c51df3b0d3c2b654b0593"
  },
  {
    "url": "tag/python/index.html",
    "revision": "de4817aa286427d892a1d55b6e9f9113"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "d4bfa38083ca24c5260882bd338045cb"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "ae67dcd7bc2c794fc19e8a13c8358ec6"
  },
  {
    "url": "tag/sql/index.html",
    "revision": "75ef80afc612d6485e2e5e7ff4a3dd5a"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "aabf3aa2ac7d07d72d597b107017635c"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "7ac4aa57fa5fe2101a04bcfe65b39f95"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "99ef702f18d738e69ca0bcbac5302210"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "91b3b2fb968cc530286b4ea3bdc0dd81"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "5c3edcd974fc25eff3b7864d1b77f333"
  },
  {
    "url": "timeline/index.html",
    "revision": "0c210897676276e154dceeb66bd5e4f9"
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
