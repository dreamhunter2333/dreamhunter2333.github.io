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
    "revision": "506e9f6e96fa78e432953225343ff040"
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
    "url": "assets/js/11.078cada7.js",
    "revision": "099b687ac2d2e4b15469820ad8d64002"
  },
  {
    "url": "assets/js/12.e3c91f52.js",
    "revision": "9b15a2470c16ce579bfb942b4fdeb077"
  },
  {
    "url": "assets/js/13.899b7afa.js",
    "revision": "083011bd45a2d66c6562e93d83c0747f"
  },
  {
    "url": "assets/js/14.1bdb136f.js",
    "revision": "243f91d544ef7e62049e29c5b9d05879"
  },
  {
    "url": "assets/js/15.315369c4.js",
    "revision": "1af0e180b75ac09ff87b49aa8ced1aad"
  },
  {
    "url": "assets/js/16.6adec702.js",
    "revision": "f898661dd34faa4a33fe6472f05e1940"
  },
  {
    "url": "assets/js/17.c24d7291.js",
    "revision": "87fe82d69c3c6c3868a89a4e40969886"
  },
  {
    "url": "assets/js/18.e9ff80b5.js",
    "revision": "31c2f70f96f6d43a6457f9313dce953c"
  },
  {
    "url": "assets/js/19.c5ff5d35.js",
    "revision": "db6af14cfa15aa7dcc0ae6a013cc9e31"
  },
  {
    "url": "assets/js/20.4072616f.js",
    "revision": "2d70e4b21544c2c2f93313db25888823"
  },
  {
    "url": "assets/js/21.85b61197.js",
    "revision": "080afe3c6ba80f189499c50ca71bd4f9"
  },
  {
    "url": "assets/js/22.533f6b72.js",
    "revision": "5ef01e82dceb202c2bd2d267914c8388"
  },
  {
    "url": "assets/js/23.e3aebad8.js",
    "revision": "dab0ed94e81c99282534c867697eb2dd"
  },
  {
    "url": "assets/js/24.b00995e6.js",
    "revision": "26cc356bd5a24f3e89792d03049fbee1"
  },
  {
    "url": "assets/js/25.12f66121.js",
    "revision": "9862faf35db915f26e4b94c3e79ce5df"
  },
  {
    "url": "assets/js/26.65616cbd.js",
    "revision": "ac39ab8993dd4e1c2f37c8ccebf1079e"
  },
  {
    "url": "assets/js/27.3020cc70.js",
    "revision": "d511f2d22a62dc6e62360be684059dec"
  },
  {
    "url": "assets/js/28.e5fb6f47.js",
    "revision": "b05de976602b6fbe964429697f4c9f4e"
  },
  {
    "url": "assets/js/29.ce87a399.js",
    "revision": "9e4c405ad4cb7aa84dfb872ef95057f2"
  },
  {
    "url": "assets/js/3.d40a3524.js",
    "revision": "f5b739f097f42cde2a9eed068df900df"
  },
  {
    "url": "assets/js/30.3276ef7f.js",
    "revision": "0724a538f3d3550be54446e8cb22acdc"
  },
  {
    "url": "assets/js/31.727deccf.js",
    "revision": "64e6cf2e807a88333df7260fdc9e6b21"
  },
  {
    "url": "assets/js/32.65894ccf.js",
    "revision": "3e68599fa11e20e93166aa6968c5c93e"
  },
  {
    "url": "assets/js/33.101b5d48.js",
    "revision": "da9f619225bc73ce6b87824cdfcbe53e"
  },
  {
    "url": "assets/js/34.79c85333.js",
    "revision": "7cb2295a1ffd361b8d2cd1adc6e13116"
  },
  {
    "url": "assets/js/35.acad8103.js",
    "revision": "3f2721f02577e9005af8cec71b684834"
  },
  {
    "url": "assets/js/36.6ba0346b.js",
    "revision": "b0bb94fb236bde15a599cd198eb4f5d3"
  },
  {
    "url": "assets/js/37.35d8776c.js",
    "revision": "dbd67a982d1ab9942d03453896a1bbe0"
  },
  {
    "url": "assets/js/38.7747e41a.js",
    "revision": "aaeefa2b120431f558232a02e13e4789"
  },
  {
    "url": "assets/js/39.ed9f1946.js",
    "revision": "87487f1d3d5a56c81bfc035d35f75f9d"
  },
  {
    "url": "assets/js/4.7125555a.js",
    "revision": "9e7c3b44267b6fd8707b6dbea4b876c3"
  },
  {
    "url": "assets/js/40.0c4c7d53.js",
    "revision": "608e2f4ce3845f05d3c66e2beab23f17"
  },
  {
    "url": "assets/js/41.b825a3ce.js",
    "revision": "112f88e5bc4dba22ff67cafcb436bb52"
  },
  {
    "url": "assets/js/42.6abc13f2.js",
    "revision": "af0e0d48ec4cf2ec3021564d38ccfaed"
  },
  {
    "url": "assets/js/43.1352dc08.js",
    "revision": "221cb2eea54c6456a68af201acd36380"
  },
  {
    "url": "assets/js/44.a290ce3b.js",
    "revision": "60b42b7dfec751661ea1dead0eebf027"
  },
  {
    "url": "assets/js/45.1532636b.js",
    "revision": "0c1e7ba356856db214b6ae93edfcb5dc"
  },
  {
    "url": "assets/js/46.78ae4ee5.js",
    "revision": "f6713dd9442f3ce314775068bec3007d"
  },
  {
    "url": "assets/js/47.a08fb1c5.js",
    "revision": "dbb8163b01cfabcb91f21a59442b6dd1"
  },
  {
    "url": "assets/js/48.de7770fa.js",
    "revision": "7d0db6cf0c7bf57b0f570b722e50f085"
  },
  {
    "url": "assets/js/49.ada2d6c4.js",
    "revision": "1e59c23c28807d65aeda9ea05cc09da5"
  },
  {
    "url": "assets/js/5.9cf5accc.js",
    "revision": "7922a2da6ed14193896d1e8d34502036"
  },
  {
    "url": "assets/js/50.0c1af950.js",
    "revision": "93b0c02ea7e4c07bc73635ec26ff89d2"
  },
  {
    "url": "assets/js/51.3a0caf07.js",
    "revision": "4ddfb0d055b29f891db18cbcd6445d57"
  },
  {
    "url": "assets/js/52.078a5f00.js",
    "revision": "743b2187d85872122106bbab99e78e23"
  },
  {
    "url": "assets/js/53.c9cf6483.js",
    "revision": "90993edc56e759135935dd283fb9feda"
  },
  {
    "url": "assets/js/54.f93e877e.js",
    "revision": "6fd254108b777683f2494ba91a379dc9"
  },
  {
    "url": "assets/js/55.58327cfe.js",
    "revision": "ec46e139e456e3f6182aecc5c07742e0"
  },
  {
    "url": "assets/js/56.6dfab8b5.js",
    "revision": "3e17846cea04ef577aa5d8ca7fa7da30"
  },
  {
    "url": "assets/js/57.745d27c2.js",
    "revision": "0137bbee63125e79f06bf22cdd602d1a"
  },
  {
    "url": "assets/js/58.389b4261.js",
    "revision": "f845268af50938e53b027c9a43beafcd"
  },
  {
    "url": "assets/js/59.a184f735.js",
    "revision": "5c23a4b9fc70e95beaf8dc6d4a1222c1"
  },
  {
    "url": "assets/js/6.67a111ac.js",
    "revision": "fd95c1aede520608ff01eb25d1ef51aa"
  },
  {
    "url": "assets/js/60.e83dbb9f.js",
    "revision": "4d8bef595e0a4e67c6147731193564ca"
  },
  {
    "url": "assets/js/61.276a7d8b.js",
    "revision": "d4f4c4388932f1524d45982e5780b039"
  },
  {
    "url": "assets/js/62.f9f31757.js",
    "revision": "136cf9b6b3362b636e0a6a35675a5615"
  },
  {
    "url": "assets/js/63.d9262d8f.js",
    "revision": "44bb51d7654a1dc3f03548f84ad7c255"
  },
  {
    "url": "assets/js/64.6c9b6a67.js",
    "revision": "2a8f13abb0a9d77db2691f2493ca6b0d"
  },
  {
    "url": "assets/js/65.21d9218a.js",
    "revision": "637f8d876f3ee01abaebe3af7fe585ed"
  },
  {
    "url": "assets/js/66.41354bc0.js",
    "revision": "77096ab918e758f6233d56741327485c"
  },
  {
    "url": "assets/js/67.201694fe.js",
    "revision": "56f20dcef11182866c125e811dce4dc7"
  },
  {
    "url": "assets/js/68.01a536b1.js",
    "revision": "1da4cc1006e497a7b222898df19ee88f"
  },
  {
    "url": "assets/js/69.8116b310.js",
    "revision": "d14bee83a270f387c1cbf9aff5f879e9"
  },
  {
    "url": "assets/js/7.f4485ce8.js",
    "revision": "9f0211b2243a19b2116fb155b6b31825"
  },
  {
    "url": "assets/js/70.f3a77be7.js",
    "revision": "2490d78312da227bd626dccd6beeda67"
  },
  {
    "url": "assets/js/71.f02dd244.js",
    "revision": "9a0f4fac1a13bed764f69454d7a0d199"
  },
  {
    "url": "assets/js/72.a1047180.js",
    "revision": "04c4f97f59d9f7a12ce023318ecf5a4a"
  },
  {
    "url": "assets/js/73.48f4456b.js",
    "revision": "5ebce9d8b555060151ede13512442de9"
  },
  {
    "url": "assets/js/74.9f00f32a.js",
    "revision": "740c6d545a268e198783af87aa9ded79"
  },
  {
    "url": "assets/js/75.6d927a8e.js",
    "revision": "81e64dce1fdb2506ceb2e02a0105c5ac"
  },
  {
    "url": "assets/js/76.70e88304.js",
    "revision": "53dad5a6ccfb296d0b148e87d4591cfd"
  },
  {
    "url": "assets/js/77.94835739.js",
    "revision": "8020cccba0426e5954de69e745c2f5bd"
  },
  {
    "url": "assets/js/78.df3ba5a7.js",
    "revision": "3da616c076bd928aa8e38cc8341667d0"
  },
  {
    "url": "assets/js/79.36e08ac2.js",
    "revision": "69b24e9cca85b821e45bf4662eb27293"
  },
  {
    "url": "assets/js/8.6dba2d0c.js",
    "revision": "66d01b7fe0af33b2152bc46f49975b76"
  },
  {
    "url": "assets/js/80.a3e42381.js",
    "revision": "a78c96d99e72cf1c4a6454ed34c2e51f"
  },
  {
    "url": "assets/js/81.2c762fb8.js",
    "revision": "c705efee0e796c69eae15ce980fa2f40"
  },
  {
    "url": "assets/js/82.34b0327f.js",
    "revision": "89c3d68d003d1baaf9af806236ea6794"
  },
  {
    "url": "assets/js/83.b6b79f3a.js",
    "revision": "cb66cf4597453ae9a7526e357d4b792e"
  },
  {
    "url": "assets/js/84.77431d1b.js",
    "revision": "01ba75fe232676f08a449c24f4d16369"
  },
  {
    "url": "assets/js/85.4eeb5bba.js",
    "revision": "176b6bd4dc3cdc21d4d7abe4314201a4"
  },
  {
    "url": "assets/js/86.ac37c502.js",
    "revision": "d4f8534fd868760cc8c069c554ccaacc"
  },
  {
    "url": "assets/js/87.3b743d66.js",
    "revision": "21a2309528f18dd382ec9445303d3f86"
  },
  {
    "url": "assets/js/88.69910470.js",
    "revision": "796b1b34e4a8dca2131ddf25d8f63bca"
  },
  {
    "url": "assets/js/89.5fc7dc38.js",
    "revision": "150326094013b618ee68efb373c655a9"
  },
  {
    "url": "assets/js/9.4ae83516.js",
    "revision": "5b89697caddd87f7dc6ebf4d347b9ece"
  },
  {
    "url": "assets/js/90.3e4db91b.js",
    "revision": "180e09b0103dff259f5bff68234d4be2"
  },
  {
    "url": "assets/js/91.e982b7ae.js",
    "revision": "86e2952f65568306744b77938f849a70"
  },
  {
    "url": "assets/js/92.fb8ee205.js",
    "revision": "3ef4ef3753a3cdfa2e3c6f6e523bd4e6"
  },
  {
    "url": "assets/js/app.09d6bfea.js",
    "revision": "487637d2caa79e089dcd1151ee50f94c"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/database/index.html",
    "revision": "3d512a4738f8fc4b79a7a5966be81404"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "6052eecdb3a2be419324c2813f5e23d7"
  },
  {
    "url": "categories/front/index.html",
    "revision": "1213bf7deca6ecff42fde4a888309976"
  },
  {
    "url": "categories/git/index.html",
    "revision": "041b35c2bc38d093331628d0d8840b0a"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "f742f8af975e24351788d520e22be550"
  },
  {
    "url": "categories/index.html",
    "revision": "e44d4ffcabc10bee59474c2b22ad26e5"
  },
  {
    "url": "categories/java/index.html",
    "revision": "db05bc5c3c8ba89b40e78d62814a8f85"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "bf5a4c369e08f98a1df8bc990cd0b7ab"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "7c8521dc1a07e66ec0364be1d0c889a3"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "575103c229a217aa13776eaff755b44e"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "e4bc7b3a33f37db31c6c623d7e6847cd"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "4e097fec2d7736369ee9750cbbc72dee"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "54ea5d77b841e45b4cb8732e37fc2507"
  },
  {
    "url": "categories/python/index.html",
    "revision": "3f6dcc574bdcbd1cc670f94c813bc0c3"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "06757c180fe37156c9a17f12f7d457dc"
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
    "revision": "a0f7c39f620bb412a76d249898805a7c"
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
    "revision": "6261978c345d87344c5b7d424ba4f820"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "7e8bc09c52edf44e35943c9b56f6fb67"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "4967a1d4e0562d95285cb882a024247d"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "6d5de7a5ba1fa815ba31652ead6ff081"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "fb5ba1e67f4cdf939f45b824f7ad7f41"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "a6a6921705706b4daa25bce08b5addc3"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "d63c0e1579a7bfa1e1777d6a8839dd96"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "8c9a5fb258d602e155a1e967a59ac496"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "21bdc5118b5ef1a878ba9f9227dab863"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "f1d1c3fd9508d35999e9aafa5a08db9e"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "4a6af06d0309c90a9211c8b883bbef99"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "cbf5820b13df2c79d43dfc1df60dbdd0"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "bd30f3df4072422f99a447860948eb11"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "eea452bd06dad437b08410b84560783b"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "e9f4d3cefa89ef3cd1e6756c2066d19a"
  },
  {
    "url": "posts/hackintosh/炫龙耀7000 hackintosh 全过程.html",
    "revision": "508959768386bd3714120d2038fdd66e"
  },
  {
    "url": "posts/hackintosh/炫龙耀7000-hackintosh全过程.html",
    "revision": "508959768386bd3714120d2038fdd66e"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "f2acce8ca8ee4a814294954bdf23adee"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "492200949fc2a92b9739d5784f04821e"
  },
  {
    "url": "posts/index.html",
    "revision": "8252fcfd916370302d3f097ef57f2c7e"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "59532afb3f4981e2810ac0ac44a52ef2"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "e8afdc873908f582caec7f5e566b3ecd"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "32c2a5774de567e1ca7e6c501125f8fd"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "069579989db8c98639660d71c0a1f311"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "caeb2e6c42dd66a4d2835e396c70bc39"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "aee6671cfc2ff4ebfdf81ddf54b54eed"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "abcecc34a9113c529a2bc9ffec09d9bb"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "7b549bd7dc6b535999f95e2313056673"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "28339781e830c46a96bf7f1f4dc547b8"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "a401e25d15bc470887cb63b0d8cf9069"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "8ea099d1e756f900f0b5fad3982d4101"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "1bbf9cb31f0a3de71846e1245c85fd28"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "96924e627ab58590cea3a53836e04ad8"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "114f1a275cd1183b43dd22171368704c"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "9dcd779309b9f3228e1ec2312a91bd0c"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "e8b4bf88af3d6203a45370edfe380004"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "9f19f827994178f3e964ecd32a46c623"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "478b3975ab3bf896f6e42eac91e46e77"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "46a2a5353c463e0ce83416640ea6d657"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "fdf908977fc8628acfd0f6334db7c04c"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "6f7a0f1bc2049644c168e161279e10a0"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "e7eba04769d327803b30c66525674b95"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "3597fb5aa41b1c7c6f87258decc2abd3"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "40e77914d24eb04b5e30f662503d3ab1"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "d4ac05834739cdeac61f435deb2789c9"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "8f5e21215b3963bf74fb6911921318ff"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "6288f77bfeee945156d3ffd4df342170"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "1b3f389b05dd2f242c9f189d3c55e421"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "9e956cd753ea826f21d372795929056e"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "3d6f84f74bc32ca4853c87a3aaad1adc"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "3ed8a38be461f3ec8409b12b13f61565"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "717b3027965eb9ac18d4f96aa6ff4a84"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "d83986312f3b5781151ef99a1fe8ae17"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "ffd5ce33f1924aa6c7beb35ca6059393"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "a28c520c976ce5944bca15f0b5c027ef"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "6d9ba18af5694b3ae79c03009a36ab75"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "3ed4598667d8d8b114f7f054675e3ca9"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "3ec8722d63b0a7083d6dac1dd3596d39"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "9b9d888a2f4614730b833c42fabe4e5b"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "a76e69f47492f781386d1eff9ced0219"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "dd728a7faa1abbbc7ffc035111d36d82"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "3d481368a870f3381a4ea115ff067ded"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "fc1c3613987f287e21496e16b9a8dbd3"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "4171403f8273836fef20136a065fadfb"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "612f9a288611738ced24cf213e003192"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "2d6cfb4e4bbdb7e2bae3786125121d91"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "3dbb20bd9e38266d56c4d4a1268e7dc0"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "d93b43fbd95eb1a32f5f6fcdac198394"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "33461fad53f8228911d8c6fca67796e6"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "6e60e6d752c5174195901ce4658f5c83"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "ba7c573297202a9974d59dcab744a536"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "7c7895e32f4546c2d159c1ddecfe668c"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "2b12a767f0d1166920f7d3b45e09fdd9"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "478b1b23c263d8a2924166b2333d6c77"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "2ac929ee2621d5153a88d924d37fb15c"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "1991dec35c701d2fd7656764be6df3c8"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "6270a056fcc3fadd24e48855cc0018b2"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "9898fe88186333d2beacf7bee528e688"
  },
  {
    "url": "posts/python/what’s-new-in-python3-8.html",
    "revision": "55f8657042fc5871c714d8faa99861fa"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "258812f0e4c0ed3ea2054b4627973d07"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "db98b3466ae70cf04f38348c7f999e2f"
  },
  {
    "url": "tag/api/index.html",
    "revision": "6903da2f1e5fcae7dfcb2691ee14a45f"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "aa588b01307e65b0a59eac0f152a264d"
  },
  {
    "url": "tag/context/index.html",
    "revision": "b50042c8defa6f32ce167156a64bb38f"
  },
  {
    "url": "tag/database/index.html",
    "revision": "19d14e4112ba202f2c950fd8c9f9cbb4"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "f7dd9a5c5276bc888626e854698e846f"
  },
  {
    "url": "tag/git/index.html",
    "revision": "512526c1c3c501135a4d5b5759df4ab5"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "3d436d44fb170aa9ff0b0171b66ce9d3"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "aea45a25eb9f5d12d549a03e36b472bc"
  },
  {
    "url": "tag/index.html",
    "revision": "49ca83fcf11c4c8f72a2f0771a73c32e"
  },
  {
    "url": "tag/java/index.html",
    "revision": "5b8479f582514da6c4a22d0712fb73b9"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "78d97a3433463d2db427828a56ba10f6"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "40730196f5f6eea11301f073658f6957"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "a6383de587d44645e786c0285d2cd4b6"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "e63ac620424b8d278e7ab63b0e7596d8"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "16727d0cc5c78be5dc0f2107bcdda84a"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "34c887ac77b542447dda2c56d6232896"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "7dea727aaebbb6d48a706b43a0b02930"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "8699a38702ca958cbee75ad5d8784803"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "6358bb12b03cd6bce6b8daf5cb45fa77"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "0ac852f4fd7f41f471bbfca529926808"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "609134dee273917a389c83b40df09a18"
  },
  {
    "url": "tag/python/index.html",
    "revision": "daf59f19b480a923f6aa13374f8b79fb"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "6b1177cc89de7211c714f4d75edd3e46"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "541636d1051c0760b04f43f38cd08e4f"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "f4b6117e2718b31da7f84af0b8961baa"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "c55ffe02c4be78fb25ab26b81a0016d3"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "da95c01c7c81866c7db968111eab6948"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "2f7222b5ddc559cf3b49df5133fbf3d9"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "998da871e7259eb1326a49b50a13a149"
  },
  {
    "url": "timeline/index.html",
    "revision": "79d64fd0317aa7304c4a767819a16f83"
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
