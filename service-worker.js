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
    "revision": "c95ae48ebb84478072de9b59139bbc5f"
  },
  {
    "url": "assets/css/0.styles.ea90bdd9.css",
    "revision": "9785d972252eeb0df8092eccffa8e7dd"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.51fa7f79.js",
    "revision": "923db34af8a65cc45aef51287a0e52d1"
  },
  {
    "url": "assets/js/10.336696b3.js",
    "revision": "133193a45e207f3912ce953c386cb358"
  },
  {
    "url": "assets/js/11.766a8ec9.js",
    "revision": "9a761f4ae702f326adcdb45fae2f7f2e"
  },
  {
    "url": "assets/js/12.11892371.js",
    "revision": "257af3d017c73579e1d3f147b520e4f7"
  },
  {
    "url": "assets/js/13.756c292d.js",
    "revision": "8fa8b40cef946296bc03747a1719dcdd"
  },
  {
    "url": "assets/js/14.a288ed85.js",
    "revision": "d8ee7b661984a445899822701177ade7"
  },
  {
    "url": "assets/js/15.11d43a26.js",
    "revision": "b2744e18cedaf02f629e439fca0ac980"
  },
  {
    "url": "assets/js/16.b2fcadf5.js",
    "revision": "f215489155994c8430fc18293a4714eb"
  },
  {
    "url": "assets/js/17.3313d8cd.js",
    "revision": "6b4b6fae2f61c72e9860fe5802ee0309"
  },
  {
    "url": "assets/js/18.a08a2191.js",
    "revision": "0db3d3176ebcf9df0ba9d98f2efcc7cc"
  },
  {
    "url": "assets/js/19.26db6e72.js",
    "revision": "4019df714556e0641cf3c72822a7ac7b"
  },
  {
    "url": "assets/js/20.ffb0f4c8.js",
    "revision": "a43ddf09a003d433469b397baf694c16"
  },
  {
    "url": "assets/js/21.2204685b.js",
    "revision": "275759aa315d4426b5a082b60582aaf9"
  },
  {
    "url": "assets/js/22.1f849a0d.js",
    "revision": "26c5b010cf3a28505c7f3e68297c64f0"
  },
  {
    "url": "assets/js/23.a688510d.js",
    "revision": "e5b06c9ace9478e5af7b2a19d0fbbd7d"
  },
  {
    "url": "assets/js/24.88be372a.js",
    "revision": "41e2de13edb126f4a166e9e6828f01a7"
  },
  {
    "url": "assets/js/25.5b4fbc5f.js",
    "revision": "a66621fa36436b03fd0875190a500ca4"
  },
  {
    "url": "assets/js/26.508a96a7.js",
    "revision": "efa330e9290585270e2594bd77fe9989"
  },
  {
    "url": "assets/js/27.95d01e7f.js",
    "revision": "c5017a2f0d9ad7e310b399edd988c974"
  },
  {
    "url": "assets/js/28.f83ed35e.js",
    "revision": "fbf54976257edb7deb10dbca7836689b"
  },
  {
    "url": "assets/js/29.106d6a2a.js",
    "revision": "fbe42986437c7fd8ab3115e820427416"
  },
  {
    "url": "assets/js/3.325ab0a6.js",
    "revision": "8e2d68ab952c10bc7ef0874e6dbeedfd"
  },
  {
    "url": "assets/js/30.c5017529.js",
    "revision": "2e00c99cf9974e44111b02ffbd77d1da"
  },
  {
    "url": "assets/js/31.68a8a535.js",
    "revision": "65fabd92c89bb3733e05fe9cc9fd832c"
  },
  {
    "url": "assets/js/32.cdef2a4b.js",
    "revision": "02a0f1fbeeb527acc888313adcb45690"
  },
  {
    "url": "assets/js/33.50edfd3d.js",
    "revision": "ea03ebd34eeb00a41d9168199ed8880d"
  },
  {
    "url": "assets/js/34.6c3ea559.js",
    "revision": "7cc64ddbfa4eaf5cb6fe720065d0401d"
  },
  {
    "url": "assets/js/35.72058025.js",
    "revision": "550ca6795f3798e1ec655534f8b15112"
  },
  {
    "url": "assets/js/36.a0ad1cee.js",
    "revision": "3a97ff630b8cc7e9a19016ef21ad63be"
  },
  {
    "url": "assets/js/37.cb5e081b.js",
    "revision": "3c2b7049b026d503f07733ed4f459087"
  },
  {
    "url": "assets/js/38.cd9300ea.js",
    "revision": "7147bc22a21f3a87c8a6fc51fef44f9b"
  },
  {
    "url": "assets/js/39.2e1dec5f.js",
    "revision": "f7059e105b364b7985b03232e034981f"
  },
  {
    "url": "assets/js/4.96a4f898.js",
    "revision": "a14bf9ad47183792edbede46a86dafc3"
  },
  {
    "url": "assets/js/40.e9663090.js",
    "revision": "1ba4272878f322910764b938d263ac28"
  },
  {
    "url": "assets/js/41.97d36e74.js",
    "revision": "9fa5db4aa8ffe8b8f7cc0b85b917c606"
  },
  {
    "url": "assets/js/42.158824a2.js",
    "revision": "fc5e52a6f3b29ddc2733af6f52a607d4"
  },
  {
    "url": "assets/js/43.9a32751e.js",
    "revision": "9c7d02d37265a866ad4452a371ad1615"
  },
  {
    "url": "assets/js/44.e581d72f.js",
    "revision": "e02ed12b53a875f7cfdc9586b9ea2d69"
  },
  {
    "url": "assets/js/45.3af29a3f.js",
    "revision": "320fecbbf58d3126f801a3e55c2c8ad4"
  },
  {
    "url": "assets/js/46.0e258885.js",
    "revision": "18988d2bb225e9bd403366def1e84bcc"
  },
  {
    "url": "assets/js/47.db588d33.js",
    "revision": "73a5224a73f5feaaba4fdfbb414bf6ad"
  },
  {
    "url": "assets/js/48.99da9577.js",
    "revision": "b66ead6c55557fa4dfb17fcaf35bc9c1"
  },
  {
    "url": "assets/js/49.74577116.js",
    "revision": "4cb6b0256d7a40089f2b58c5b93d8ffa"
  },
  {
    "url": "assets/js/5.73c3b6dc.js",
    "revision": "0b94b5effa1fea40d59b4d6260a8d069"
  },
  {
    "url": "assets/js/50.0eadbb62.js",
    "revision": "c043aaee8255020c7a0bacca800d0689"
  },
  {
    "url": "assets/js/51.520fe1dd.js",
    "revision": "4cfe64e6a0445ea0744e049d2979adde"
  },
  {
    "url": "assets/js/52.463ac55c.js",
    "revision": "512fc97bc532c98692fe3ccf4d68aff1"
  },
  {
    "url": "assets/js/53.cf403dfd.js",
    "revision": "c864365caca3355e8fb6e5e1b45e775b"
  },
  {
    "url": "assets/js/54.4283442e.js",
    "revision": "bb9f1509793d950d6713a3af1a3bb971"
  },
  {
    "url": "assets/js/55.62f267d7.js",
    "revision": "54e7f3b1afb2b4d03d277d29fcb6d809"
  },
  {
    "url": "assets/js/56.342353f4.js",
    "revision": "9b052e3e6f41bf0df79d44e64749659a"
  },
  {
    "url": "assets/js/57.41e8be73.js",
    "revision": "399dd49ab4559ff2dc1aea3057efb38a"
  },
  {
    "url": "assets/js/58.4f367066.js",
    "revision": "6c387e10d83ae60a37e307517480561b"
  },
  {
    "url": "assets/js/59.0c2eaf25.js",
    "revision": "f28f73bc7fdb332af15316e3f4a53882"
  },
  {
    "url": "assets/js/6.e89d683a.js",
    "revision": "229e84a6a54550b160155f2786f7b13f"
  },
  {
    "url": "assets/js/60.5ad031f7.js",
    "revision": "54a468eedf81983bf1159ed3eb65b910"
  },
  {
    "url": "assets/js/61.5e54aec8.js",
    "revision": "7020130dc492ce6f08f7fbf1a0cd1962"
  },
  {
    "url": "assets/js/62.8e0bb8d3.js",
    "revision": "6278d486d4a04295f02d16aa6697e578"
  },
  {
    "url": "assets/js/63.1d942d8f.js",
    "revision": "7b7c18a0b61aeb18d59b17303b0ab26b"
  },
  {
    "url": "assets/js/64.dc853d29.js",
    "revision": "0f12f9d04ba06db57b8fbedc594d2fe8"
  },
  {
    "url": "assets/js/65.05c64203.js",
    "revision": "d7c602494fbc767528ef8ecc3c4ecf2c"
  },
  {
    "url": "assets/js/66.47339b6a.js",
    "revision": "08d319e8a4d746af56eba11f239f2568"
  },
  {
    "url": "assets/js/67.a664d2e6.js",
    "revision": "9ebe53d25c6840a1466a9c57a285f5db"
  },
  {
    "url": "assets/js/68.8eecc52c.js",
    "revision": "ca9d03732d24d30c5705bc41d1ea6f1c"
  },
  {
    "url": "assets/js/69.cda4e38d.js",
    "revision": "71446e2cf446689e4beafbba144c343a"
  },
  {
    "url": "assets/js/7.8280eee0.js",
    "revision": "efc73350b82bd3d40d82f81a25765d28"
  },
  {
    "url": "assets/js/70.d11cf88b.js",
    "revision": "049c7a828926ff3a2ab2c34fc776d289"
  },
  {
    "url": "assets/js/71.1b500116.js",
    "revision": "e9bb1ca2c8c434c5b33c6c9a3a7811bf"
  },
  {
    "url": "assets/js/72.72302f47.js",
    "revision": "7b501f08ac890f5515920249af82f59d"
  },
  {
    "url": "assets/js/73.985e0328.js",
    "revision": "9e1fa82ef40ab6e18a864d14af5f8d43"
  },
  {
    "url": "assets/js/74.99208fe1.js",
    "revision": "b9b05164a3c5b2a7c5998257e74fb6e6"
  },
  {
    "url": "assets/js/75.07c56bf9.js",
    "revision": "aefde81b1e40edf74209c085ba578602"
  },
  {
    "url": "assets/js/76.b701d2a0.js",
    "revision": "a5e6900d30b79bbbaf04d68484b04070"
  },
  {
    "url": "assets/js/77.789c96d9.js",
    "revision": "1a646de3c383661a7d267fc7b07c4984"
  },
  {
    "url": "assets/js/78.71bd2b6e.js",
    "revision": "da10e305b4f5238148a197c082fdba64"
  },
  {
    "url": "assets/js/79.630d7416.js",
    "revision": "9ad0b938a2ed357d26e35acfaa4d1da3"
  },
  {
    "url": "assets/js/8.42d70cda.js",
    "revision": "ab83dbbccf4e543ce939b30adfaae275"
  },
  {
    "url": "assets/js/80.d299b343.js",
    "revision": "07c5a71362f1e4a8b8df0411f842757e"
  },
  {
    "url": "assets/js/81.6f299066.js",
    "revision": "85bc564704ff5acba3d378f688983b05"
  },
  {
    "url": "assets/js/82.2088755a.js",
    "revision": "48d165dc2ea9bcef62f3ec74666ed6ba"
  },
  {
    "url": "assets/js/83.79ec673f.js",
    "revision": "16d4848cfdd02ccd26c97f90f0804c85"
  },
  {
    "url": "assets/js/84.e14b4be2.js",
    "revision": "61c199fed6e3b5dbf3b355cad7a09aae"
  },
  {
    "url": "assets/js/85.0709a8c3.js",
    "revision": "c5dc63b1a104107a7e5cb6499f059d60"
  },
  {
    "url": "assets/js/86.2a159c85.js",
    "revision": "f5b1d977409d3c9352b39dcd019a8d47"
  },
  {
    "url": "assets/js/87.599fa44e.js",
    "revision": "587c15569e79be4961b3212c114307fe"
  },
  {
    "url": "assets/js/88.7a5d8ebc.js",
    "revision": "e5b7d8a36f612e636357ba72adbeaa1a"
  },
  {
    "url": "assets/js/89.5b3cbc28.js",
    "revision": "9fab2e5b0000c7d79ac21df49a8951c6"
  },
  {
    "url": "assets/js/9.9eac863b.js",
    "revision": "fc7469e5da4f47fc22e35184e41547d8"
  },
  {
    "url": "assets/js/90.f8621701.js",
    "revision": "5056aa96588efd6a4fe336a04b27c59e"
  },
  {
    "url": "assets/js/app.a87b3bd4.js",
    "revision": "33e0ebcf5b1bf17acdac0d067daa3f8e"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "78e2a6d2a44cd8d356cbfebde29e5e47"
  },
  {
    "url": "categories/front/index.html",
    "revision": "33efb7793570953109fecee382f17963"
  },
  {
    "url": "categories/git/index.html",
    "revision": "d755ee4b219a58f3700dd963c5f29fc9"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "c7961bdabef4b2ccaccaf4cd26b06517"
  },
  {
    "url": "categories/index.html",
    "revision": "05ee5daaf958b4b34d56be2f4f3c659b"
  },
  {
    "url": "categories/java/index.html",
    "revision": "2b87f38e191b98b9514146a0f09a3fa2"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "abf057ce2d55daa51ee95747499c5056"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "0130e343593290a520226b085c899ba0"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "764b3071e42402be9c51a2855d9b74be"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "805f06d15cae6294afa995b61d6d99db"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "523ca34d233003e8c1a3bfc236868916"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "5b74df55e437d120fa7bfd2c34ea8cc2"
  },
  {
    "url": "categories/python/index.html",
    "revision": "81893d30a76288b02c5374f305659fb6"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "3abe0e6d4bb6f4ca89d3fd818dd6008f"
  },
  {
    "url": "categories/sql/index.html",
    "revision": "1eef39002edba4fb818c77a4b58cdbd8"
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
    "revision": "29cd05d1acb53d9fbea0a7c2c2ca5188"
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
    "url": "posts/docker/docker-install-use.html",
    "revision": "3ac5463906d162f265de2c7f5acf2f14"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "c59e8fd2dbce511f60bbaf758732fc09"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "647b3e43fa9a6414b38ec49018a72eb5"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "3adcaf994d1763a4578145130e4521c2"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "4f749da42cac88759157a112f6584569"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "978caa6b3e24ccabeda5a2e16e80814f"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "abbfe77718e41d6fd1b37499cede7c5e"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "c51f2118ec7a315cf2f7954ac2ea53d1"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "f171726c31a0b6d417a3d11f49585b22"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "2006145f41b0b47d1b31f2fe544f01b6"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "8c6811aa782c8367e208f2494835b24c"
  },
  {
    "url": "posts/hackintosh/触摸设备-DSDT修改.html",
    "revision": "77219a18b63e669e632956c729c7b2ca"
  },
  {
    "url": "posts/hackintosh/炫龙耀7000 hackintosh 全过程.html",
    "revision": "c24e262d09445069d6fe2e0d1438eac8"
  },
  {
    "url": "posts/hackintosh/炫龙耀7000-hackintosh全过程.html",
    "revision": "c24e262d09445069d6fe2e0d1438eac8"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "a8a12b395f282d66ac9c237914700a53"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "75b98fb25a4b364b91878d82e05a18df"
  },
  {
    "url": "posts/index.html",
    "revision": "03c1b893614c28295678a386d21306ce"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "cbbc9871df0e4704ec0a1d590d19c639"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "62342cf3a595e90a52f533b3467d3943"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "6b3342f3f53416ff54b8cd27bd249a5c"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "47b261ef47019a0e8892bc8633d0b41a"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "10674db5de28dc4701baf1c3d390adae"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "eebe7f4e188fe2bca824b17e72124e4a"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "e706db11f81acf366e4bc54093305460"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "79bc33c1b8cb83aa2da80a8df2d402e4"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "b4133d1536443e52ea42b0f3360a012f"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "146fe6fab7c7d8f69ab51ef56d37637a"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "fcf7cb88b1f11ca1ea22c3339841e726"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "09541e9eb07c30fdac40a8bdd4c6598a"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "5b0f1cec5fab8adb83bb25117a7b2dc2"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "fcfb7d91c7ac9d4586441dacd6b7d585"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "2794757b7ff45263c4fa260fe922a370"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "892cf44c450a94615c81d973e8477663"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "932a11be156b4dde19e34ef3f5a930fb"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "68a087eaabb29fa0b10ada4bfcb67939"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "755a58888c659d438b5f7cc56af8c64d"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "31eff6be2c8ddad6a954ef39647aff6d"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "1df91cc379155e277d2c8f9683043e10"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "89323121aef3a0430742a060f5b21e7e"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "ea084db882f212c7c853a6f5196ad085"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "928c3840924440e96ebc4fb6ff936d20"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "02a435471619a6ab6db5310400c9b6ad"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "f5086332f5beb2533c01e14f1c288e5d"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "b494dde356b988093fd52ebe86dfcde9"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "f86bc82b8e021c8a4ad450ce8d6e693a"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "642556b81562f779434107c1253f6a5d"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "832d34cd73d123f8d51ccdde356ec76a"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "b09003f5c76eb34de4cff8a4eb8ada05"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "2d1525aeb9370236f8e1532f6eeaac98"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "e358bfc0afba14a241f8b3406e8ffb2e"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "e30f5dacf75fb09f452346bc39821452"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "fb57a21208d38ee8f83207f4351c6c8a"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "ac4ceac2f39937fb01c821dcba66c8ee"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "2fec2a12885134a6723e5fcff6ea5abd"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "462e8d39765e3a069628a536a37d2642"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "6474ff4e28de2ac00ed92aa1d01c902e"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "53cbc959dc9c3f38395f8d8a566e75f9"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "5f0142cf35f848afc4c23e593932e811"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "b49198bf5ea11ea71639c1b405627766"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "7d5f15d6d92ba239ebf6f8b22c43a967"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "5ee1cdb12f6669cc936da56ac14d4acd"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "41162710880cb3f53c32086c7215102c"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "7c1bf76e70673652212d89bd8ee2996a"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "14808663c52047769b08aa73b01331ee"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "6e86aa4f449e5fabcbee7f7ce4964074"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "bf436be1cac36f0a73f378f5aea2db81"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "b3c714ae8529492f4798f167acd7b02e"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "35c1777c4c0ca0b9790bf41ef2184a5d"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "054ce492b0ba4dce265db932d9e9373c"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "0632c0f14b7afd243a11d5fb50c2d1c8"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "ae220924f95acda48435dee4aeb8c8ab"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "1df5e3a932a68607c570df0fd38a54ab"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "e5decaa31114a400d5c09e3b18ef0b7a"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "a006ac7946eaa27116fc13c99354bfca"
  },
  {
    "url": "posts/python/what’s-new-in-python3-8.html",
    "revision": "d80d575db1b9b9db38e7bad037b06c00"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "fd118f5023ffdf9b00e3c0bc41efc428"
  },
  {
    "url": "posts/sql/SQL-constraints.html",
    "revision": "54b772a11185853d57f063511ee6d260"
  },
  {
    "url": "posts/sql/SQL-NULL-Func.html",
    "revision": "3610dfac83628c434f2644de0d6abc5d"
  },
  {
    "url": "posts/sql/SQL-statement.html",
    "revision": "72a63f218796fe093db03fae5201216f"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "2f7a76f7ee65847bf09a57969db19d0a"
  },
  {
    "url": "tag/api/index.html",
    "revision": "616ba36d631bf8de41dc8eb452fd5c07"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "0ae98fc7536795a0fc3176f17926e5a1"
  },
  {
    "url": "tag/context/index.html",
    "revision": "f22a410385297b92fde333e4390884cc"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "561f818c04d2ff92b8a3ebf3945c7a8a"
  },
  {
    "url": "tag/git/index.html",
    "revision": "93fa2f6d6752ede921a4eb17383127cd"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "ee1548f14faf3b2f6d4069918d9711df"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "4ce7af796649804e3b98f0862316438e"
  },
  {
    "url": "tag/index.html",
    "revision": "a35c68933ba7298b99002547c2493bbe"
  },
  {
    "url": "tag/java/index.html",
    "revision": "c19829bd1600d136b9bba0eb93c843df"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "6c97ffbb708db82a0c81085bf45fbbf1"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "0dd5709a3084887902bfecb9fde17027"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "1719dea722349d60eceff8ad2e8e62fb"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "46a1e1e8d9c4f0a103729402f429bcbc"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "7a48d0a58200ef6d9a8f660d2226a90b"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "228c5e5d50348612898a3d041f76e859"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "5c608cebfb420d9e41d530b394013910"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "c08e11af38d2632be4159414092e3271"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "a8ec0935cdba09543f92b9f096fcb4b4"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "125b886dbd10b9e38e3121301596d935"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "c4b5a6a6854570630f68665ae213e86d"
  },
  {
    "url": "tag/python/index.html",
    "revision": "1a176dc917b24ba7e594bdf5abfd77fc"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "1b5aec6b62142ffc836dce3b3df1ba9a"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "7865ba1a4831c04da0872fb14b6af7a7"
  },
  {
    "url": "tag/sql/index.html",
    "revision": "4b95acaf718490330d8365ccd6f7c164"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "d36d71e16344b634e0389cc57f38981a"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "424ece75ed85d7a3c1a6419c590f7e95"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "0a0776d1a2704e43547e790833b20637"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "2dc6e1f55d0c5e05052e0974794c83fb"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "38322d157924726cf492d705affdf18f"
  },
  {
    "url": "timeline/index.html",
    "revision": "37654d055ea1dde960d1b789139c45b0"
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
