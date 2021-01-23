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
    "revision": "19706070df5900fb10d86d268078e787"
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
    "url": "assets/js/11.59f57899.js",
    "revision": "72edb365bc8ab6e7fd8f3185b6e7876b"
  },
  {
    "url": "assets/js/12.8e17c742.js",
    "revision": "a8c18cac31b0b216328b87d0771af71c"
  },
  {
    "url": "assets/js/13.aec9c4e4.js",
    "revision": "45eb40124e625a5f3b9d1b8e65bafcc4"
  },
  {
    "url": "assets/js/14.1bdb136f.js",
    "revision": "243f91d544ef7e62049e29c5b9d05879"
  },
  {
    "url": "assets/js/15.41b692f7.js",
    "revision": "401b558e129ee5ba4ad49d94f02a8a42"
  },
  {
    "url": "assets/js/16.ca84e3d4.js",
    "revision": "029eccc7d95a31e9e051a8e1d4225cc7"
  },
  {
    "url": "assets/js/17.c5a89693.js",
    "revision": "587d5ea7a32e8c719e9d49788fe4691f"
  },
  {
    "url": "assets/js/18.0f77c3fb.js",
    "revision": "8459e0e1430469e6979edccab7715812"
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
    "url": "assets/js/21.01948904.js",
    "revision": "1aa7626f2e9987fe930e19b01e8da4e1"
  },
  {
    "url": "assets/js/22.757ec006.js",
    "revision": "e82f036912f6c334228c2482dc8a3c4c"
  },
  {
    "url": "assets/js/23.7c088cb3.js",
    "revision": "0eb514d13d9e7fb9ae5d273d5de0a04c"
  },
  {
    "url": "assets/js/24.3f14a090.js",
    "revision": "12ee6969597f27860ae48bc634994277"
  },
  {
    "url": "assets/js/25.12f66121.js",
    "revision": "9862faf35db915f26e4b94c3e79ce5df"
  },
  {
    "url": "assets/js/26.941554be.js",
    "revision": "73f1b282a5a27573701e0807142e444a"
  },
  {
    "url": "assets/js/27.c410db84.js",
    "revision": "3b9409e7d3c3d79929c3a0d4a99f3922"
  },
  {
    "url": "assets/js/28.e5fb6f47.js",
    "revision": "b05de976602b6fbe964429697f4c9f4e"
  },
  {
    "url": "assets/js/29.999b72b0.js",
    "revision": "eb0fe5e8c29f340d92c1d89c8c38822c"
  },
  {
    "url": "assets/js/3.d40a3524.js",
    "revision": "f5b739f097f42cde2a9eed068df900df"
  },
  {
    "url": "assets/js/30.0af71bbd.js",
    "revision": "5c48e908e9875031d8ba425f492625a9"
  },
  {
    "url": "assets/js/31.7b02c929.js",
    "revision": "4ff206634ed858143e78f1d01eec41e6"
  },
  {
    "url": "assets/js/32.2871c70a.js",
    "revision": "b0b156199c38beb2af8875173a9fba38"
  },
  {
    "url": "assets/js/33.474a720f.js",
    "revision": "df2ed0c298613de8b5ac0d79cce52093"
  },
  {
    "url": "assets/js/34.4519a9a2.js",
    "revision": "91fde1a453c139aa168da6c1f91fcc8a"
  },
  {
    "url": "assets/js/35.c21cfe03.js",
    "revision": "246348c331ac9bc3754824c49cd3f387"
  },
  {
    "url": "assets/js/36.6ba0346b.js",
    "revision": "b0bb94fb236bde15a599cd198eb4f5d3"
  },
  {
    "url": "assets/js/37.38638bd7.js",
    "revision": "204a7149025fb22a2794cbc5d3bfcae6"
  },
  {
    "url": "assets/js/38.c788f847.js",
    "revision": "b0cc90b59a3c1dfcdea2734a8691fa1c"
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
    "url": "assets/js/43.6530caf5.js",
    "revision": "c10bec7c7dc555f95910457b287ac70a"
  },
  {
    "url": "assets/js/44.0c47fc2d.js",
    "revision": "653d29ea5161d8f6572da0650dd63518"
  },
  {
    "url": "assets/js/45.1532636b.js",
    "revision": "0c1e7ba356856db214b6ae93edfcb5dc"
  },
  {
    "url": "assets/js/46.7f7dce3e.js",
    "revision": "c6934ebf411aa420bffea9b2a641d8b0"
  },
  {
    "url": "assets/js/47.742796d1.js",
    "revision": "2262f72d57776a0cc2537637458c9e3d"
  },
  {
    "url": "assets/js/48.debaf141.js",
    "revision": "c47064c820d9744201c887dabf334e24"
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
    "url": "assets/js/50.36879667.js",
    "revision": "90ff6f67812b1a9f1c0322254f26a624"
  },
  {
    "url": "assets/js/51.3a0caf07.js",
    "revision": "4ddfb0d055b29f891db18cbcd6445d57"
  },
  {
    "url": "assets/js/52.b733b16d.js",
    "revision": "af057651528b9729a1e90de263618d64"
  },
  {
    "url": "assets/js/53.7aa0532a.js",
    "revision": "ad4fa5368dc5ba9bc38598fc0c16db3b"
  },
  {
    "url": "assets/js/54.93cddf57.js",
    "revision": "e5996ee95ff1841299d78599a61e495b"
  },
  {
    "url": "assets/js/55.e3187f5c.js",
    "revision": "3146f5e8adf517d056b2751cc2fe6805"
  },
  {
    "url": "assets/js/56.c40413a2.js",
    "revision": "4fa5e9ffd8def001c622c3ff27150e29"
  },
  {
    "url": "assets/js/57.9ac39c51.js",
    "revision": "50a40b64d646357ce94a8a69250d4e9b"
  },
  {
    "url": "assets/js/58.7339bfee.js",
    "revision": "e67c8d8565c73b53982130aaca0fbee6"
  },
  {
    "url": "assets/js/59.2a021000.js",
    "revision": "32b4f2fa5839f97d4061fc60295c09a5"
  },
  {
    "url": "assets/js/6.67a111ac.js",
    "revision": "fd95c1aede520608ff01eb25d1ef51aa"
  },
  {
    "url": "assets/js/60.ad538f6d.js",
    "revision": "9c2b15e6958d65d555d5a82056e9c8a9"
  },
  {
    "url": "assets/js/61.276a7d8b.js",
    "revision": "d4f4c4388932f1524d45982e5780b039"
  },
  {
    "url": "assets/js/62.35a68f2a.js",
    "revision": "69e40891b97c2b1b45372a33151d7693"
  },
  {
    "url": "assets/js/63.c96fef44.js",
    "revision": "0b7656ec51e330a5c8f5b7cfd9d3fdf6"
  },
  {
    "url": "assets/js/64.bae6b4eb.js",
    "revision": "ac9355d89fb46d36a286588a8d3e92bc"
  },
  {
    "url": "assets/js/65.21d9218a.js",
    "revision": "637f8d876f3ee01abaebe3af7fe585ed"
  },
  {
    "url": "assets/js/66.acd7fdef.js",
    "revision": "254fee50ef4f1a9f3cdd8cb94e1a3a9b"
  },
  {
    "url": "assets/js/67.823a7f92.js",
    "revision": "24236a3573a15a6fa462be85a02bedef"
  },
  {
    "url": "assets/js/68.d2c568bc.js",
    "revision": "125b0865a9ec4e77b65a540a4de94bac"
  },
  {
    "url": "assets/js/69.e464b049.js",
    "revision": "56f604764872d05208fb90fb370f7a6e"
  },
  {
    "url": "assets/js/7.f4485ce8.js",
    "revision": "9f0211b2243a19b2116fb155b6b31825"
  },
  {
    "url": "assets/js/70.e13bb0e3.js",
    "revision": "a56812ee46ef03cddff20b6ae53b5d83"
  },
  {
    "url": "assets/js/71.f02dd244.js",
    "revision": "9a0f4fac1a13bed764f69454d7a0d199"
  },
  {
    "url": "assets/js/72.1c12e502.js",
    "revision": "aeb96682a98fbf6b8da8ef0e7882dc3a"
  },
  {
    "url": "assets/js/73.2278d979.js",
    "revision": "603751bfa23da53df9b3069e1944832e"
  },
  {
    "url": "assets/js/74.f3acde4f.js",
    "revision": "8ef8fc7d8607bd8859ce11fcab491eb8"
  },
  {
    "url": "assets/js/75.89882906.js",
    "revision": "2de2a0f72cd8f91a5eae8556bb79c014"
  },
  {
    "url": "assets/js/76.ae42ce41.js",
    "revision": "971c6bfa064bb9684ae3acdd25722dbd"
  },
  {
    "url": "assets/js/77.e081b13b.js",
    "revision": "c8df9af29aa18f6ca09be2cf28273890"
  },
  {
    "url": "assets/js/78.6618df78.js",
    "revision": "c027829922921c8b785f3e5722879ee1"
  },
  {
    "url": "assets/js/79.2b3b03ac.js",
    "revision": "64720a84cef248d145b1cab4e6f71e19"
  },
  {
    "url": "assets/js/8.6dba2d0c.js",
    "revision": "66d01b7fe0af33b2152bc46f49975b76"
  },
  {
    "url": "assets/js/80.e2be1f15.js",
    "revision": "095f2bd6e98d4b7e077ceef18b63561c"
  },
  {
    "url": "assets/js/81.ed26d02a.js",
    "revision": "308367e24d18620993afee2242152538"
  },
  {
    "url": "assets/js/82.58244690.js",
    "revision": "886c720de76024d9ae498f3cd728b708"
  },
  {
    "url": "assets/js/83.9a1a02c3.js",
    "revision": "a08551b6df035a06e545322b5111a3a1"
  },
  {
    "url": "assets/js/84.eefbd8e2.js",
    "revision": "777fc411fd195a1ec26978d3880b8c70"
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
    "url": "assets/js/88.a76127c2.js",
    "revision": "1c894c8b4e2f20d2ff6cb65b0f9412a2"
  },
  {
    "url": "assets/js/89.8f2f41b6.js",
    "revision": "b21773b7a89210afa7528e40b946045a"
  },
  {
    "url": "assets/js/9.4ae83516.js",
    "revision": "5b89697caddd87f7dc6ebf4d347b9ece"
  },
  {
    "url": "assets/js/90.431844cc.js",
    "revision": "a8ddc10740411300b2fc1e7387fd0085"
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
    "url": "assets/js/app.06dc0beb.js",
    "revision": "61e691d88273569398815813e84b9ef7"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/database/index.html",
    "revision": "4c4aa8fcdb2ad6ceaae669c9b57d4013"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "b3400f1d287cab63a12494bef1908524"
  },
  {
    "url": "categories/front/index.html",
    "revision": "000daa364f2d89f93c2a6ae828a762c2"
  },
  {
    "url": "categories/git/index.html",
    "revision": "3cdd17728a320be374d70b6cade6e8ae"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "fda14595480af739f745ca4bd3436898"
  },
  {
    "url": "categories/index.html",
    "revision": "d62d90077a17046f1e65eb7ed1e6a9a2"
  },
  {
    "url": "categories/java/index.html",
    "revision": "c6a6bb03e18a7ec4ddd811b5ee5fd53e"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "08bb0ba60814706eefb6c82a5944cd78"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "50f10ee82b1d3de0f6f8c4faf3d22f08"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "6c800ac7333486b0f36c2b4796caf6e0"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "31ac630c977d92c05fa08a50a6ee8a13"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "1c6f52524c8500b305afa149e85fd97e"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "e83586c0e5b377c25110f31ffa15e0d5"
  },
  {
    "url": "categories/python/index.html",
    "revision": "224b7e02a52c521307502b85f909a97f"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "6a37d3828e53af3cc12c7f0b7bcc921e"
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
    "revision": "7d0cac2d317cce2e49fabdb4c9f52aac"
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
    "revision": "d36935f7ce1ab6f13b4c4bf64f8cebbc"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "9906fc417b55ffa3bbbcf2213de21b4e"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "af36e25138ca85c8c9761ca2ea47fb8f"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "1fe5cbc1fe6402df35cf1885d80e0adb"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "ee0d6b06158a12143967667041e878f2"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "df76a021e313d85687ff488cb5b9b8dc"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "ee84b0f18dd631fb507f1625f0327d3c"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "87de85eff73494c19b5c034505e97a6c"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "9a7edef1593efff0ab783cca9066985b"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "2f2aad81ace2560e63a5321f65ff2322"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "68cd7205b7972260ba7ec302ed05587c"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "1f328a0bd4ea7c1aac0c524521e8e8e8"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "59de9c725305f8c941b1e6cb7d84c90e"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "f205eb19291fd355e1ba55aff10dc30a"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "6dd7437dbf3fc8c934f95b4538b7deae"
  },
  {
    "url": "posts/hackintosh/炫龙耀7000 hackintosh 全过程.html",
    "revision": "e4be682fc465316ad7f6efdfa9243859"
  },
  {
    "url": "posts/hackintosh/炫龙耀7000-hackintosh全过程.html",
    "revision": "e4be682fc465316ad7f6efdfa9243859"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "5a565c83a0eec8be64d67fc84d1d4e7e"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "6c4727c6ac2e1db8248d0de428f99e95"
  },
  {
    "url": "posts/index.html",
    "revision": "a4e768d471c09881762d96630bbee13d"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "4a139dded8030f260c567a1191f1f03a"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "b8147a8a032107f54c6ed7108f66bd4f"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "3d861f8a2c4ee114e20a785ae1d95339"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "595e2542712b96b778a1fe290d70e61f"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "3f775834447809ddad1470727d8127ed"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "5f26b408a9fdcb2dd913ac0b6cad318a"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "321bfd56cebb1526fed70cf8d9d576f6"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "de544a53e8d96a49610970137624bdcf"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "34e91bdda8f9c03ebaae545b4eca3cef"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "83cd779d99e0e5f8c9bc4395cc49fc66"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "6c4bd20fee0fdb5f016367407c98be81"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "8ceefa1bdef999b96a15efe76fcf8024"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "9ecf8a92a4e248421d8166eea31a3b4f"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "3590339d1996f330855689bb7c3cf68d"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "f0adc49e18b65e741ab6dd803387ff25"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "5903a764929f90b557c4acbbaa3f19c7"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "82872d9636c4fab5f42676bf24618d48"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "8c98456b89249157c5e1e5dc4c9bf314"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "4d4099da55a60373cafa0d316218bb5a"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "ce694d8fb8670ec028ac0add1782eb11"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "ef4142fb8b48c1bf8825a32bfb14925b"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "45636b516f684d8104418a0a47c81e5f"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "8662c6e4262902a3b9e9090a20891e80"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "dd699bbac9e6764d73bfc955a8700c44"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "18e23b4c9cb00cb2eefe5cacc761d743"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "c56969f7a00fc4a332e0e096a93f0c32"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "4ff183263885a1517be13590cee151f2"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "3dc40e8784cbafb8649ccc4a0ca69313"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "d289fd53915556a3d775f12848885d14"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "464adadda20f15fe6ab290020124e1d2"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "58ac5e11c35b39efb543366aa99cd52e"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "08c4a7e3cf15b4826aa71082c0cb49f7"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "b0db08741ed966274988045e1a483692"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "fd6fa870e99a966125f28771adba462a"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "158f9b8efaf7f5b0633929dab2bb6815"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "dd8991d4104e026326ff4f766a6471b4"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "cd182fd998ad2a3ba374601cde5d67f6"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "1d9d036bd301581d44af6e335f6915e4"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "1b3533bc251af6495a1c2a3e5c1f03e3"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "feaa03236daf2f5e0854bf437aff265c"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "267ef2add115ac67d9113251b0536459"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "4335f7aea7554d8bdb60fef0d0042267"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "794666dea87d6101c9b90b20324300f0"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "ad1a0e448ed1f0e48dcb687c9dda3485"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "b50af12f4d121a3f88e062019fc32176"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "f1c5a0798c316110f6f0aef9d3a26b94"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "6baffe23e687fe33e2fd0e3aa39f231e"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "227f82286fb3137f1c645ba7f73341f5"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "96da2eb584ca7e7e3f26778fb8393ab7"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "e406b5a5c82ceaf9c26a7de7e7942b69"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "5398dca53c57687f753e197cc23af978"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "6e0ca8fefd9c7abbc79d636e610dd150"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "cd51f7cfa498057dbdb22555097bd808"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "be669800d4d8c37ea85aaba874ae9f3e"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "8fa05d2d58eec7bba238fd150952ac55"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "699b2c44a00202d111dcf4dac93e6466"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "561163d7548de68079b9f8d96cf805eb"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "ca0269fdd643ba01dc5aa59f8ac52c40"
  },
  {
    "url": "posts/python/what’s-new-in-python3-8.html",
    "revision": "a2034e49b6238898956b6fc0f142a220"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "54b101382d7569cf2912bd3315516f29"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "364cde27859b2be4976a56c24c8637f6"
  },
  {
    "url": "tag/api/index.html",
    "revision": "457e582329ed43574598ff578ef7fc4c"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "11cc0e4d7603f63cb6f7d33b9a0de580"
  },
  {
    "url": "tag/context/index.html",
    "revision": "4cd5d50c8df1d5ea23ff6e9535daad1c"
  },
  {
    "url": "tag/database/index.html",
    "revision": "b61315a272821989792ad1a1a8f28344"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "20fa4a1a3248fa31eb9e83f8906e97d1"
  },
  {
    "url": "tag/git/index.html",
    "revision": "048e561f412296e279913bce25e2c390"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "2e6476d2a1a2e0bba08483e0b308a78c"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "a92bef33989d9480249e134236c60bdf"
  },
  {
    "url": "tag/index.html",
    "revision": "e40698749ee33d99f7d5eadc9222091d"
  },
  {
    "url": "tag/java/index.html",
    "revision": "abf33dc6c45daa28c5a3b05db133e7cb"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "4360c3deeea38f519ce0a8c33ca5a764"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "bee8a05250cba2951b77a2ddec3e17dd"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "f63b2d9c4d1499683ae36e74d90eaf77"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "231f8d52dbfff1eb5ec4aa14894e5ffa"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "8faf8c9795499cecb46b59ab348bb0fc"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "30b64e653379e7ef839aeb0fee99f68a"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "5c9e1605a460e2666e6e0e447e9ceb7d"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "a9fc753b655b64189377d651e4268cdc"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "29ef59aaea6256870b4f21c846582a6a"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "177b30a51e3c2ad613e77d7d00c7103f"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "4521eb73a0b53e2d0a2c3d42342ec2e6"
  },
  {
    "url": "tag/python/index.html",
    "revision": "692f1e005d3bde961ee5e33414e4555e"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "9fc61b23d58e5b1d6b4277a37fd0f112"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "b6ab1a6c177f3536f3733c3df5c3c7ce"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "882d0a95f93f948b89aa3febae363148"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "77486ad59714ad8ae8df6a3084bd4845"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "add9be651b0ee28a64ca6f4ed7581e7b"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "c64792bc135de51fc1faea0f510d1b3b"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "04b523ef7cde923977e54692f9ce217a"
  },
  {
    "url": "timeline/index.html",
    "revision": "3d11f35ebc75373062dde60fd9018432"
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
