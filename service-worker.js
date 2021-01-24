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
    "revision": "ab8d326936e00b8cce6002555fd920a3"
  },
  {
    "url": "assets/css/0.styles.1deefa9d.css",
    "revision": "90c283463ffb97f208f41713410bb42e"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.ca0731e5.js",
    "revision": "53477c4cf84d75c45a924d8ea22bdb21"
  },
  {
    "url": "assets/js/10.2f35fbaf.js",
    "revision": "c5125c25ac4aa83b58109c5f33048721"
  },
  {
    "url": "assets/js/11.5c498feb.js",
    "revision": "e0420daf342c7cdde9c196a6a07ec5af"
  },
  {
    "url": "assets/js/12.18e16ddb.js",
    "revision": "6ab8871950634ff3874972699c33f12d"
  },
  {
    "url": "assets/js/13.14aaa2a3.js",
    "revision": "94902de39c2f3dca90f2340306329397"
  },
  {
    "url": "assets/js/14.650b29e8.js",
    "revision": "dae1507eb47c64230b8d67c00452a474"
  },
  {
    "url": "assets/js/15.7739d57e.js",
    "revision": "4e3e1879a1c29b64b473f4550fc97cde"
  },
  {
    "url": "assets/js/16.05f9e52b.js",
    "revision": "57d51d46d715b8d1177ea2f23ef5ac28"
  },
  {
    "url": "assets/js/17.d45e5a8a.js",
    "revision": "16bd91103fd094f9b7bd9e50fc5ce1c7"
  },
  {
    "url": "assets/js/18.ef872065.js",
    "revision": "aa94086686dadb16ee8d3882929cf9a8"
  },
  {
    "url": "assets/js/19.a485feff.js",
    "revision": "4bd85f53c804162e1ba176571676548d"
  },
  {
    "url": "assets/js/20.eca3129c.js",
    "revision": "3e2d8fa24077520721ad6bb7ce06c8cc"
  },
  {
    "url": "assets/js/21.674ab591.js",
    "revision": "2ebe94d9828f282bdee5199f0de05c97"
  },
  {
    "url": "assets/js/22.8cd6088f.js",
    "revision": "565d551e6911087de6a9c54bce52a5ee"
  },
  {
    "url": "assets/js/23.ff68f275.js",
    "revision": "49e2d6ebe5e374bf20cdeb16ee40cd3f"
  },
  {
    "url": "assets/js/24.0b2e9728.js",
    "revision": "f6a8491a0669ad85268f0ef56c9f6e0f"
  },
  {
    "url": "assets/js/25.a5c83785.js",
    "revision": "d12cd80d046f1794d215ffa34d8e5da1"
  },
  {
    "url": "assets/js/26.17d2a476.js",
    "revision": "cc55e2e96c3a756643eec1237745d0a9"
  },
  {
    "url": "assets/js/27.579a5cb9.js",
    "revision": "a888391eaa831bd827ae1f4412ffeb3d"
  },
  {
    "url": "assets/js/28.71c94b94.js",
    "revision": "07bf4a0a1d3db1f97a28b165062e15ac"
  },
  {
    "url": "assets/js/29.59ab165d.js",
    "revision": "250f714c1e98a42b02eebdfcc2536952"
  },
  {
    "url": "assets/js/3.1335991a.js",
    "revision": "7f060e50f4b77fb2f37cf2f11b70072f"
  },
  {
    "url": "assets/js/30.8ebc2f18.js",
    "revision": "8ee363364cb54176095390ef90bb3fd9"
  },
  {
    "url": "assets/js/31.341f51d5.js",
    "revision": "ab05e2124c209bcc632abe81fd36eec5"
  },
  {
    "url": "assets/js/32.8c466590.js",
    "revision": "9efc2eedcf1e26c5d26070e2b1641dbb"
  },
  {
    "url": "assets/js/33.ce922ed9.js",
    "revision": "aa53ed7d9fa3c7f78746a00266aad38b"
  },
  {
    "url": "assets/js/34.b251a43e.js",
    "revision": "76f4bb4093f978fdccf0e7326597c197"
  },
  {
    "url": "assets/js/35.50fe0a44.js",
    "revision": "5cb37b2ac14e2d70e3ff3d3a751c86b7"
  },
  {
    "url": "assets/js/36.feb808d9.js",
    "revision": "6098099d06b9e80ed045095ecd033b8a"
  },
  {
    "url": "assets/js/37.c8bcb943.js",
    "revision": "00477b51872f6c15e62de55a52773162"
  },
  {
    "url": "assets/js/38.03557060.js",
    "revision": "0ab1fc65d74ba09e7b6918d6e1b23743"
  },
  {
    "url": "assets/js/39.df78d125.js",
    "revision": "89c73fb8b56cbc0c53fb135ad989ecf6"
  },
  {
    "url": "assets/js/4.a11e6b1e.js",
    "revision": "509daab5315435c58e3ab51116092efd"
  },
  {
    "url": "assets/js/40.31c21960.js",
    "revision": "0c44a947cae96508fcdeb28bfce9da81"
  },
  {
    "url": "assets/js/41.c6d5b81e.js",
    "revision": "91ad5063759a6776b2c5499176760943"
  },
  {
    "url": "assets/js/42.19f72f6b.js",
    "revision": "1107d0eb59b213727bc877c99b3e815e"
  },
  {
    "url": "assets/js/43.e227fee5.js",
    "revision": "b536834d80d50fde701a86d1518f4fe0"
  },
  {
    "url": "assets/js/44.e249b38e.js",
    "revision": "0dfadfcb1d341c6ecea8d71067a87d0a"
  },
  {
    "url": "assets/js/45.6acb1579.js",
    "revision": "528d3f98914e67d609ce3ca5dec2470c"
  },
  {
    "url": "assets/js/46.767742e0.js",
    "revision": "607dd1d67f49c5a89b3f8124a0efc019"
  },
  {
    "url": "assets/js/47.d9cae158.js",
    "revision": "a45452d62dbfc71bd60ac591afc3e508"
  },
  {
    "url": "assets/js/48.cbabeac2.js",
    "revision": "21edfc6b5af5efadb86615633da2530d"
  },
  {
    "url": "assets/js/49.89414aa5.js",
    "revision": "4374fd36aa20a051b82cf0f6153242bf"
  },
  {
    "url": "assets/js/5.960c473b.js",
    "revision": "fb841a8f27e3edcc437b71d1b251fab5"
  },
  {
    "url": "assets/js/50.5b8b0730.js",
    "revision": "7d5d2d204c5451b173410e55099414ff"
  },
  {
    "url": "assets/js/51.fb48a9a4.js",
    "revision": "c028e0a8fbeffaf5828705afed4ad1a6"
  },
  {
    "url": "assets/js/52.dc8e8657.js",
    "revision": "a5a56e8d36994f46e6acacbf32ab196a"
  },
  {
    "url": "assets/js/53.0ec9c2f8.js",
    "revision": "d01fd6126e24d54529d89726c0b86e94"
  },
  {
    "url": "assets/js/54.c20b4c63.js",
    "revision": "f5498d1aad53ee566bdad491fb051fba"
  },
  {
    "url": "assets/js/55.56a8ffc2.js",
    "revision": "a87bb3f16c7a58dd64101e0a51785794"
  },
  {
    "url": "assets/js/56.3d7e5fe0.js",
    "revision": "bbab26fb7933de8d44da56b19f90497c"
  },
  {
    "url": "assets/js/57.a015285c.js",
    "revision": "0d0302d8e414a5e1ee995a9947755767"
  },
  {
    "url": "assets/js/58.f2bad655.js",
    "revision": "abb7960ac1098226dc0c4d800093b4a1"
  },
  {
    "url": "assets/js/59.26b3314b.js",
    "revision": "1509993eea88a13cc8484c157179d514"
  },
  {
    "url": "assets/js/6.8c14c8dc.js",
    "revision": "2e6eac9bd58bebd57105ddd95856c42c"
  },
  {
    "url": "assets/js/60.5a3271ba.js",
    "revision": "3a140353834cb7312435bf680ab0d052"
  },
  {
    "url": "assets/js/61.36fa1bfd.js",
    "revision": "4ec7a00b7730cadb8a13403d9448243f"
  },
  {
    "url": "assets/js/62.a8092a24.js",
    "revision": "d195985b728d6cabfd12cdd2f0e0c2fe"
  },
  {
    "url": "assets/js/63.d699373c.js",
    "revision": "2c7cdb3ba1656b9aea9e30189c321ee8"
  },
  {
    "url": "assets/js/64.f9157608.js",
    "revision": "c711b3fc069d1f94855d28fa801c2603"
  },
  {
    "url": "assets/js/65.83a5b017.js",
    "revision": "eef904d4a573db7bd8c04adf9e337729"
  },
  {
    "url": "assets/js/66.7ef556ed.js",
    "revision": "a18e5beadba4dbf574260ddd46886bf0"
  },
  {
    "url": "assets/js/67.8e3a58c6.js",
    "revision": "ce3261ed51b0f12c9a00a975eb0f30b0"
  },
  {
    "url": "assets/js/68.a487de86.js",
    "revision": "880755e1f393cd30abc0aeb634cea44d"
  },
  {
    "url": "assets/js/69.f5c7a07b.js",
    "revision": "9bb60f9087e20631843e4970f4006723"
  },
  {
    "url": "assets/js/7.8009c1e1.js",
    "revision": "fd5dd10b911f7c0e864a1b32ded58b8d"
  },
  {
    "url": "assets/js/70.45644ec0.js",
    "revision": "07f8101c31ff7335e86e77a59df34f9a"
  },
  {
    "url": "assets/js/71.87a0b603.js",
    "revision": "788ef3ff9402cbe8a1e513f865ea9f49"
  },
  {
    "url": "assets/js/72.f07a939f.js",
    "revision": "fee5bfab02e10c267241480c00cd5900"
  },
  {
    "url": "assets/js/73.acb47d12.js",
    "revision": "f873d417edbf99b25b6ce08360029b4c"
  },
  {
    "url": "assets/js/74.90a1c237.js",
    "revision": "559da86b5a3319d9e7a36bcb3eb59597"
  },
  {
    "url": "assets/js/75.defbcb7a.js",
    "revision": "364433de6579932e9230c42c1d0542ac"
  },
  {
    "url": "assets/js/76.d69d3766.js",
    "revision": "f91c8e3081d555cb0fd6c7359b410e2a"
  },
  {
    "url": "assets/js/77.a77655a7.js",
    "revision": "ed747b28de71c65ad563b64a70313eb2"
  },
  {
    "url": "assets/js/78.f5e2d37d.js",
    "revision": "bb1db92d5f9086e1f2ac027444533d66"
  },
  {
    "url": "assets/js/79.cc655e4d.js",
    "revision": "5c4675b466eec2ae9bfc21bf0a257d6e"
  },
  {
    "url": "assets/js/8.03cfb9ce.js",
    "revision": "fe91d34f99828b47f1b07677df17535c"
  },
  {
    "url": "assets/js/80.e742dccb.js",
    "revision": "f6ab884a3d14c2f8552092fea7a55b50"
  },
  {
    "url": "assets/js/81.10fa9b0b.js",
    "revision": "f1e6bebf82c5a7406a5cb7df87caa740"
  },
  {
    "url": "assets/js/82.47a2d640.js",
    "revision": "884f99e9549a71f8aec49f1fc53e7bca"
  },
  {
    "url": "assets/js/83.a93e023b.js",
    "revision": "52f55f7dbdc66e6161245d8e72f04f8e"
  },
  {
    "url": "assets/js/84.b6c49733.js",
    "revision": "fe57e010c36b76b43a8e3bf46e5a85e8"
  },
  {
    "url": "assets/js/85.e71f0b46.js",
    "revision": "1d06b9778bf320621b441c2751ba0a00"
  },
  {
    "url": "assets/js/86.0599971a.js",
    "revision": "14edfa28decbce74c3482c130839822a"
  },
  {
    "url": "assets/js/87.df564911.js",
    "revision": "083a55f6532a81f20567bcd33e2593ee"
  },
  {
    "url": "assets/js/88.833fb2b2.js",
    "revision": "6917008f96cdd118006c4f5c544b3587"
  },
  {
    "url": "assets/js/89.c8bf2751.js",
    "revision": "b7678323194a232f7f088100dfe375a5"
  },
  {
    "url": "assets/js/9.d18706a6.js",
    "revision": "753bfb35ae3da2c57fdfd302da3244e0"
  },
  {
    "url": "assets/js/90.5a9ea7c9.js",
    "revision": "2d8f9451285a1ae96398a3bea6cb4d60"
  },
  {
    "url": "assets/js/91.2b57f5e0.js",
    "revision": "08b62b89b47210e72ed2d129427cbb84"
  },
  {
    "url": "assets/js/92.73f20236.js",
    "revision": "303a78870470f3fabeed4cb503dd1aae"
  },
  {
    "url": "assets/js/app.55213071.js",
    "revision": "29d1b0cb1a3e7943e6dfd7a51668b85b"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/database/index.html",
    "revision": "88e1756b8b88dc664b34c331b74e2a96"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "596c22e5221c65ee163b68d19d6c4cf6"
  },
  {
    "url": "categories/front/index.html",
    "revision": "42b1d6bfb1c0b25ebeb5877265faf0fb"
  },
  {
    "url": "categories/git/index.html",
    "revision": "1002845fe8d44ae4677c4f5ee2b590d7"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "7f9af659fd115364fb53f6a978dd0791"
  },
  {
    "url": "categories/index.html",
    "revision": "1da91275e6d8a1e274659ad047f96a29"
  },
  {
    "url": "categories/java/index.html",
    "revision": "34bc86a4a0d8ad615451907c1255bde8"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "9c9f0965a0fdb428b9f8b9462737d5b3"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "42c9445bbae38b8f3c4a8e3c0ad11d17"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "ae39ff2415387ce70fab7d13c4cf48cc"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "e4ceba3c430a1a6664d64a24194ca587"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "00c6b2f23ddf2c08c8aa759a6df13fc0"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "2c55f15856da053ca77e9f50ab4b2810"
  },
  {
    "url": "categories/python/index.html",
    "revision": "3e0f37ca707f6505c4de8c5bd066d871"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "6b06ac50e29b3f569ff27e349eb0673f"
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
    "revision": "10dc29b4a58abd4387bd2b1afa109693"
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
    "url": "posts/database/SQL-constraints.html",
    "revision": "d31d6e94ee1418f4382f6c8b3574305b"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "1574fde4ba31fe4b189e0320a6913a88"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "8da8e229ab5118c4646f3a6378bc9c86"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "7f7edd0cc12eb8fb1ef4f9f93efadb2a"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "860b882c01b85d390df61a9cce21118a"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "649b9698e280ae4c87fa65285b5abec1"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "2f81e942aebee75a8376558eee5e3f4c"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "28aef05cbf76558e1a8378106dfcd4f0"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "4eec256dd94b33f7101f366dfa630043"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "5ad4e0efb438121a795cc9313b863e8a"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "beb528cdd9d6667b1a8e468eafd7dea8"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "c8e8a16cd8121fa56507956cd605014d"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "a90f03b2d6cced2c2ba013f0716ed606"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "50deb9ada4c0ace89f83cafd7a7f2186"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "b9517ce5a739f573df10222fa2ad22f8"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "e7041cf26471ecae0b683083f560bd1c"
  },
  {
    "url": "posts/hackintosh/炫龙耀7000 hackintosh 全过程.html",
    "revision": "d618ab83bc912bb6b600c343a881e2bc"
  },
  {
    "url": "posts/hackintosh/炫龙耀7000-hackintosh全过程.html",
    "revision": "4aba26353328117369e8d8133923121b"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "7342e04bc16bd1dee9417dd73e5e7d4c"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "0320e6a7dc2b00783cdb3a4e001fd20d"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "ed689f564cafee4878c7fb0491f8869e"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "2e112f53b321409926ea4e31a300509c"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "5e44bb32db74e30bfefd6bb9d3ee94cc"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "1e6820e2f7456fa16b7eb2fea8e9f420"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "f315985dd199773b1cbc3a294a3b7689"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "9406aed6cae036d9d75742bc81d662f2"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "8ca53332a02dc4b12049be080851ee73"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "70e653f99373e1672b9bf96551eba241"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "a79fcec2c5fbdac332edb3572e54479c"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "7448c62fb52743c50025ced8c77dbf82"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "296d07e9542f6c3433053430d264fef9"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "5c7d7c92df4f0a8a0255b65a331419e0"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "3b7deb5154512512cd6b9dd2836966f1"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "2b648bef3615851bc40a3450053d465b"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "5bca7ba0131793d9aa717542aa173dfd"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "853942284fb2c1fc1b03eba8bed593a6"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "e6c758f60daf2475195a09254f9e6903"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "5893112a27a309f653a13d55a2541ebd"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "06db5f130770cb0a8e5c2318fd2714e7"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "f6ac28053c9785f2f1129f9666540d5f"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "af38029d64aa8ea191a0b3639df419ac"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "711385b2f3637368a93d401ad9e4217b"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "498dc5ba7c660d0ce884c29667abde94"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "d4cadca64188deaa152bf560b0381e34"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "d99229095aa6bb01e16ad32aa8fc4323"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "e5a7b574c3f336d4df92d1382bc7fc94"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "2beb27c0644a4ab835e0fe0102c4fcab"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "26d57b151f3cf8d19555789c67732893"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "e1cf5f69a864f47383dc146ed05453b7"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "5c1982bb2dfd83e60d2eb5fbe34e416c"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "131e5868733da302d19e34cd70039623"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "4c8bd3ffa624568c6e521c330ded2b73"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "c82ea510eed286af43bae09f7bf46c3d"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "7d34a3956611cc64d1b3b1411f848e3e"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "74e794b8fbc9870231a06ff3d9e680e2"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "402a5988428f0d87760235db740a6d99"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "00d373ca1d21b5e5166bc7e95921603b"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "aa3f52045522b876b8b974129e92cce4"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "3d4a8f41c6d0d70447841e31379fa596"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "5afd3f69683b8909b4d25881efef1a39"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "6cd2215abe92c66a584b394a372c9e4c"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "4330b98da0eaf3c931fc00270a2e0003"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "f7a3abaa8f38a191dcd948c5af0b43d8"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "7125f9f90273f4a881f4c607998fcbe0"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "52843a5a6b6928a02773de91bdd805a8"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "55a0d708a196c36d6b4c2aeca8892d28"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "57b00971b6ecd58dc343bd0009bde61c"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "ec42a04432307a6f939d6744844dcddd"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "0e6de2148cd48af67a1cd3eb297cfccd"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "8a7f32fa32d0601845a583924f962f65"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "f75cb471f2683b6e591ddc0007c529bc"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "7272ea1ef489846741d03f50cf03ffc5"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "300eb33321a1ff836572935225cdffe2"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "92593daf671a44ea25e5d57c514a2f48"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "181dbcd35a33790ccc813bf4d5c0d397"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "df6ce18d03dc7a85313c44c5fcc002d4"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "c99ef389757914bcf3da02782a483f8d"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "61d1bc7e38d7b1838286389480d71aba"
  },
  {
    "url": "posts/python/what’s-new-in-python3-8.html",
    "revision": "f7a6192aed099f3434f01885bee5b261"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "e1bd0e350b9763ea29a52317fe559373"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "cbfe606001a762595b8391a7d9acba29"
  },
  {
    "url": "tag/api/index.html",
    "revision": "4c55de89191f1d4c60cd39cc8736ad66"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "36f9cc5b6a74ff621c6de00f307b1eb0"
  },
  {
    "url": "tag/context/index.html",
    "revision": "85bc0e5e0598d47e301215de4281527c"
  },
  {
    "url": "tag/database/index.html",
    "revision": "a66d4e997a050a480a01cc67e3bc8168"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "0392988faf22758ecae2151ba900653a"
  },
  {
    "url": "tag/git/index.html",
    "revision": "fc764629f59d4c418a91c95bd2994081"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "5e51a80fc5836282d695e5f00381cc97"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "f40baa9753e13a7ee442d7a571a21f83"
  },
  {
    "url": "tag/index.html",
    "revision": "72840240bd4043cff4fd385419d6b36f"
  },
  {
    "url": "tag/java/index.html",
    "revision": "6d0279e2a803aa2ea00c33a0923e4dc2"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "d4bbf96590a6f6486e8c74e8877e0db0"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "c1b70217ceb0e6fcb706386485449494"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "0347b0dd582da81a03306c556a2bf679"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "cfd734e566739442ce78b88abfda6cf6"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "c8ee999e9d2336812c039f5c2bb15754"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "6f086b1270fcb1c90110acc5e458b2f3"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "c9f69cc4269adfcd8fac4c58a7a4d6a5"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "5f0abc172a16135af64d0439fd9b38ed"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "3f57d638f467af897e9c2e4911cceda3"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "3340e7a880506bd2fb395b1c953cb5f5"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "80dd23aa145f89df8b3ce89d6739d0ee"
  },
  {
    "url": "tag/python/index.html",
    "revision": "5f561fc195b9a3e7da197daf27cf7e92"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "ea3a676a452616fd55c0e1b707d0ae90"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "6692e607fe10c94b3efad6e1fcbe1025"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "3d43a02e76bc2dfade28c8165ca0b6be"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "2acd657093b1f6f20a4217ce2e1cf4d2"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "c7385b678274cf7c5d0453c3901e85c3"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "5935d6e7a71f69972ca36be0865cd880"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "fbd4417c702ee3ae36624d480d89c13f"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "08234d2af4fe02bbf602e53440e48695"
  },
  {
    "url": "timeline/index.html",
    "revision": "de15fad82772c212db78bd24de1052d0"
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
