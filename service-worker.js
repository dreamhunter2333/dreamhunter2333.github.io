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
    "revision": "23f54c3998dd6d8bfe41a09c618e687f"
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
    "url": "assets/js/12.f6f25595.js",
    "revision": "6221153a0716908872bfc22f57e6d512"
  },
  {
    "url": "assets/js/13.ab88f4f5.js",
    "revision": "57fe24d3b7468eee95ce7a6cfd875b98"
  },
  {
    "url": "assets/js/14.f5bb164d.js",
    "revision": "fc843406eb5dc8d7842954c58c642078"
  },
  {
    "url": "assets/js/15.fb7a22e1.js",
    "revision": "0c722cff0643f5fa639eff37459161a7"
  },
  {
    "url": "assets/js/16.4df755d8.js",
    "revision": "3a1100c4eed256999ecea27e48aced68"
  },
  {
    "url": "assets/js/17.a8c7c35a.js",
    "revision": "1fa6802136de75b73ac04dedc2b5be90"
  },
  {
    "url": "assets/js/18.317beda3.js",
    "revision": "bda684daced64b7e6b3b1a0a1a267473"
  },
  {
    "url": "assets/js/19.c9ff06e1.js",
    "revision": "f923366ac12f77b9e01044e676e7bf4f"
  },
  {
    "url": "assets/js/20.fb669790.js",
    "revision": "72065d3314f1d75b1390310ba0d8d453"
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
    "url": "assets/js/23.02ef175a.js",
    "revision": "e9e8ab9fb3b466c08125ca688739f8d1"
  },
  {
    "url": "assets/js/24.765e5267.js",
    "revision": "5e6f7fff883c2caea582db75215fad85"
  },
  {
    "url": "assets/js/25.fcb03283.js",
    "revision": "32bc5df426c073f78783c153272e2127"
  },
  {
    "url": "assets/js/26.bf4bb38b.js",
    "revision": "a0b48184b10790c601d0657b7ea5e1d5"
  },
  {
    "url": "assets/js/27.7bb15fb8.js",
    "revision": "673488d2074bc6fa5f4dfb63f6d4a23f"
  },
  {
    "url": "assets/js/28.85f017ef.js",
    "revision": "5d754aae2c9cef861cb293455053d233"
  },
  {
    "url": "assets/js/29.83fa9fda.js",
    "revision": "590480fa150b27b3ccef413d91a15d0d"
  },
  {
    "url": "assets/js/3.d40a3524.js",
    "revision": "f5b739f097f42cde2a9eed068df900df"
  },
  {
    "url": "assets/js/30.35bfdc7e.js",
    "revision": "6a5d8adfdf153e993d9393c112f1f6a1"
  },
  {
    "url": "assets/js/31.ed373291.js",
    "revision": "0d4d0c633262116444068f989d85b39d"
  },
  {
    "url": "assets/js/32.bdef9cc6.js",
    "revision": "432390eeb451998b2c99a649710dcb23"
  },
  {
    "url": "assets/js/33.60a6416c.js",
    "revision": "f85e60098c0039584ae399e7ec639d28"
  },
  {
    "url": "assets/js/34.75432a49.js",
    "revision": "8c8f0cb7b55c568305de79528039c8e7"
  },
  {
    "url": "assets/js/35.01d51483.js",
    "revision": "f69103abcaa6e12256f76752827918c4"
  },
  {
    "url": "assets/js/36.c8cc1337.js",
    "revision": "2c08b9579ee65e3f8915c81794b9de32"
  },
  {
    "url": "assets/js/37.a31a400c.js",
    "revision": "9a36fa6973b62136eedc6ea410fdeb6c"
  },
  {
    "url": "assets/js/38.a2507947.js",
    "revision": "59b2ef00628cf8d30ef8e9e230eaa67f"
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
    "url": "assets/js/40.90d51390.js",
    "revision": "84173ac5fb9d8dba7fff9ecaa9b42c05"
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
    "url": "assets/js/43.ca8cf7b3.js",
    "revision": "bd1da9b9bb783670785ac422dfc9c676"
  },
  {
    "url": "assets/js/44.ad178b9b.js",
    "revision": "2becd46ecfb1675851a7d0655b0dfea7"
  },
  {
    "url": "assets/js/45.9b6f0cc0.js",
    "revision": "5185d9b614e36f88b3e5e67182efe13b"
  },
  {
    "url": "assets/js/46.bf95af17.js",
    "revision": "799a112ccbad133bd857a2387c51dbfb"
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
    "url": "assets/js/51.3d84538d.js",
    "revision": "8db4b60bcdaec99677f3534144b5f74f"
  },
  {
    "url": "assets/js/52.ba8320e7.js",
    "revision": "eed4cee99d3fca1f7464a61807dd30f1"
  },
  {
    "url": "assets/js/53.3eb136e2.js",
    "revision": "2f4891f8d5b488a5b00081af7c7de5d4"
  },
  {
    "url": "assets/js/54.16e71d50.js",
    "revision": "e56cb844faf5a2c012309216666582c1"
  },
  {
    "url": "assets/js/55.8eb21b9b.js",
    "revision": "1eaab711b586a6c00d8d86e76e0925bf"
  },
  {
    "url": "assets/js/56.f6181350.js",
    "revision": "b5d01a99b0cbb76b9e8fec46338b3b27"
  },
  {
    "url": "assets/js/57.922faa4b.js",
    "revision": "b3c0801a7d9e1e752324ed6510541d24"
  },
  {
    "url": "assets/js/58.08413643.js",
    "revision": "cf5361afcc9f8243edea26ff4c829f44"
  },
  {
    "url": "assets/js/59.d5344214.js",
    "revision": "4697ad4eee89cdf2126ff4a6b23156a5"
  },
  {
    "url": "assets/js/6.67a111ac.js",
    "revision": "fd95c1aede520608ff01eb25d1ef51aa"
  },
  {
    "url": "assets/js/60.bb8efa9d.js",
    "revision": "809328d2bcc4b999434abc98481aaa67"
  },
  {
    "url": "assets/js/61.f7ca3c09.js",
    "revision": "4a2d423c986feb1b713057c0d0369362"
  },
  {
    "url": "assets/js/62.88d4482b.js",
    "revision": "6c2d9012567ebf0dd4875d3e9a86233d"
  },
  {
    "url": "assets/js/63.aee0362f.js",
    "revision": "bba2c252bdd50a5d7ff009fd9d9d01f2"
  },
  {
    "url": "assets/js/64.dc5608e6.js",
    "revision": "6ab33c26319be16fe3c1d3a7033db6bf"
  },
  {
    "url": "assets/js/65.fe873b61.js",
    "revision": "d565504b7535287ce119828f319ec910"
  },
  {
    "url": "assets/js/66.25aa854c.js",
    "revision": "cedaf7de00335d744b0bf68875ae948e"
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
    "url": "assets/js/69.4b8d6407.js",
    "revision": "0b203572829c4ad1deb045f8162d8cb6"
  },
  {
    "url": "assets/js/7.f4485ce8.js",
    "revision": "9f0211b2243a19b2116fb155b6b31825"
  },
  {
    "url": "assets/js/70.e05410fa.js",
    "revision": "982d01f772c8a54437911fa56c23dd1c"
  },
  {
    "url": "assets/js/71.ac4b0a4f.js",
    "revision": "7e06497cc0215a15e64499ebcc30046c"
  },
  {
    "url": "assets/js/72.da663a6f.js",
    "revision": "b90f703b27139ebf141ce58c64e9f76e"
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
    "url": "assets/js/75.c2daaacb.js",
    "revision": "9019e555e515d381c22cfdbf7f4e48c4"
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
    "url": "assets/js/78.800b54ba.js",
    "revision": "a5bf551338c23a2b54864022408efd46"
  },
  {
    "url": "assets/js/79.a2c87439.js",
    "revision": "ff5276c6c07010f5adba46fa25b3b554"
  },
  {
    "url": "assets/js/8.6dba2d0c.js",
    "revision": "66d01b7fe0af33b2152bc46f49975b76"
  },
  {
    "url": "assets/js/80.1da14c37.js",
    "revision": "66fcb72038492c7d8594e3cecb5d46e8"
  },
  {
    "url": "assets/js/81.99bcbb2c.js",
    "revision": "11a447c3a6bfcb1c69eb1e3046693409"
  },
  {
    "url": "assets/js/82.a565acd8.js",
    "revision": "f20221a23078bdf4a379c8a43a0bfcd7"
  },
  {
    "url": "assets/js/83.611ecf7c.js",
    "revision": "498f3ca3147a15a4022968967015cc81"
  },
  {
    "url": "assets/js/84.69e827d0.js",
    "revision": "afd8b8239df93898e3dcb8eeabc23df0"
  },
  {
    "url": "assets/js/85.7c1acb41.js",
    "revision": "043894422c4b012bea735c3eb7108992"
  },
  {
    "url": "assets/js/86.d3060193.js",
    "revision": "8be20d3ff522d95d745178494e141e71"
  },
  {
    "url": "assets/js/87.cb4382d1.js",
    "revision": "2ab58b3ccd35e568e7c7b90975cad02b"
  },
  {
    "url": "assets/js/88.4a5be838.js",
    "revision": "81f1f11bab345edbeab0d35f16f507b6"
  },
  {
    "url": "assets/js/89.ccbaefde.js",
    "revision": "598fff23b15ad5cfd0137e017c270a79"
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
    "url": "assets/js/91.7cf9d2d4.js",
    "revision": "77fb301f730b493f2b7efae428bf1725"
  },
  {
    "url": "assets/js/92.fb8ee205.js",
    "revision": "3ef4ef3753a3cdfa2e3c6f6e523bd4e6"
  },
  {
    "url": "assets/js/app.59f25b79.js",
    "revision": "a2aed300eafbc8b20cf31c093f1b5c9a"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "eb8c7b7209b5640dde6a4e4a4b016364"
  },
  {
    "url": "categories/front/index.html",
    "revision": "28c4d9508e0a8a132ed9bcee35869cf0"
  },
  {
    "url": "categories/git/index.html",
    "revision": "5ff304b42ef53c0529d3d96863f71a46"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "14351b5749536ff97ba4f7edc01ad003"
  },
  {
    "url": "categories/index.html",
    "revision": "2173bba5fe8babdb42947d16dd0e68f5"
  },
  {
    "url": "categories/java/index.html",
    "revision": "28c911c4d6f52731e51686b8a44f383c"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "9da008f2aef27057074fc2a3cc92cebf"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "27c5e7081f2027494eac047db32b009b"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "e589934af3173b42d40e2bc62ca7f4b5"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "21ad6a3b0ab98795b463f1bd3e83b15c"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "98f476e7bbe6a3f593464b3fec37c389"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "743d3b69da9a990b3fafaf314e5dfe9e"
  },
  {
    "url": "categories/python/index.html",
    "revision": "5673a75746d1efcb845653158a5b00e5"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "42464c57cab76d8de6ffbd2b39212686"
  },
  {
    "url": "categories/sql/index.html",
    "revision": "9f01915bc963686a47d746955e89f088"
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
    "revision": "62bfa042d838df9cb7fac97cdd11cdee"
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
    "revision": "495efedef43610b273119d9423bf16b5"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "cce0907e910c13c0b00f819ff3b5152b"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "e1a74fa121ac61dc9279520fc2fb5a08"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "3d421d69ac940f0d7048b7314bddfff5"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "6db2d625731cacd729fc4de6279afb48"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "f06fb3b947bf5169c2613438b01f5b1e"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "68160f2b286a957c4f666c88c6e4893d"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "4578159510095c3b65ef5cdaf95d847d"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "66d1c02058893f027ba6bf298d94d72f"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "c9b6b617289aa63c40f1a599a7ccee51"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "7684d98f2009ecdf97849f5935b662a4"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "8e80fa6fda891621b6ec435fab012f07"
  },
  {
    "url": "posts/hackintosh/炫龙耀7000 hackintosh 全过程.html",
    "revision": "b2cad01a80d955c109cd2afd18bfb28a"
  },
  {
    "url": "posts/hackintosh/炫龙耀7000-hackintosh全过程.html",
    "revision": "b2cad01a80d955c109cd2afd18bfb28a"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "b22039e08febad5cfdaf3d9542f19607"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "ed62768fbaf94750c1ed52586dbb907e"
  },
  {
    "url": "posts/index.html",
    "revision": "a4d4a60ea5e7e2963c93700db3c79158"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "d4c80c7b3658260f5997f5c35e783c66"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "a7690013aeb1527d7f0122275b2eec56"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "4d982d7b5056c56dec23a5b5f7e80797"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "1cf7ba92a6bdf1384c91489299e6ecb2"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "6c259dfa3c2761385d15461724e8cd77"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "159d827c66ee996bf3451485ed14c7e5"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "fb6672d1e0caba0f187a1600382a86e5"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "93036e089bc18aa396594a56ceae7c4e"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "14551046dbb082e2e99d1efd3a8a9f3b"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "3cd69ffeb4d21611cd3529a3fc2a6bca"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "84d9e191e3c2803ef60edfb6b26042dd"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "d0454086aae0ee2d80cbb6ed5901814b"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "effef4c0bb10ecdee0f4a5acbe70d7ec"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "0a64184684c7915f1d5ecceea448ccfb"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "2cdbf5ae4fabf715ff7c06a2d4a7323b"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "e153997f9219cad7337234633491a50a"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "b85e4fcc26732185098b4b319d3a3d5f"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "e16ad90da4be283c85290c4d01fad99f"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "805e5926471dc8efac496183d0ca0fe9"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "ff17989d664fed9c4a2fc4089af5a591"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "139726a4d4c7f311cccd32f4e19c4353"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "308e385939505e929331eb5a66d040a7"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "aaf3b375911115f4c2c6758de08449a6"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "dac967a5cda6709551d784d9bb9dfe9e"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "c441792ad8530e4778f313cefbf087de"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "d04a04408a379e502dfc828efc5e40d2"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "58ffd5585435dd97b0bd3e313185fc96"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "f7f1dab97a1db18dd2a4f74a35d53f5c"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "b651c9db9291e8309f980381af9597bb"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "7017ed695918717bd4a73cef787780aa"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "9375cf55ec6c5bf2680bc8c07b55aa68"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "b1f0575a4e6e0b1f67897fcc3e9337d8"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "520ea82da5a3eb23560711f9901d5a64"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "81d3d3e66a8b5ac79bf592cb43f05340"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "06b3044c4eecf207293d26d2fe4a7733"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "f4aff12ba6d820ffbe09058a2a83aeb5"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "395d93b628e485847492ede2b960cb71"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "72a40b9bd160c69c53da4d1e4e658672"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "a4bf02e1f653b9169003ac6de9c06a08"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "c7a9a08ea4672fd943f0e1edf4ecd9ab"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "e2c1c3795ce047529542c4ea4697ba01"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "a3daaab7350e2073e37c5a31079e67a0"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "ebf996f470db34b349490cbf2eaa2f23"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "c2a7efa3aeb159e59227eb92d11468a9"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "fb668bd479549e3e8029354ddf9d3c8f"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "8d129b4335616a31d08c142ffff9d017"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "0a9e182994a684d90bec457f0a9ef635"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "dd2f472189acf6ee5faf1812c7048bf2"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "71c89038f7b6db0ad34bb875fd635d77"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "974e81f838032857f00c3cdc24df33e7"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "d704fb03226847f227d431d6f40c8c44"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "b03d6eadc57e2283d8aa75f4b0040913"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "5c96cae26f43fabcfcd2b9193c87e264"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "0c387dab16b22f50352290f9d1497c67"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "89df150478e26fa18b962528fab90897"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "d4e07632b61774c38c5f124b23ad96d4"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "d8ccebf734f15df60d7ba8f8778481c8"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "a0371783d96b130af888b2ba3b62da8c"
  },
  {
    "url": "posts/python/what’s-new-in-python3-8.html",
    "revision": "7d50e55242653424ce03dcae5ae0eafb"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "1de757de7e7602c66b9246e1def68210"
  },
  {
    "url": "posts/sql/SQL-constraints.html",
    "revision": "6a01c07f19e87f79e7b6a4a6f1be2668"
  },
  {
    "url": "posts/sql/SQL-NULL-Func.html",
    "revision": "626dcf05c8f75f0ff920995dfdb15c60"
  },
  {
    "url": "posts/sql/SQL-statement.html",
    "revision": "f477dd41287d1e1c0b0f20055166f5e4"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "03e409e0d48cfa497c919fb015995223"
  },
  {
    "url": "tag/api/index.html",
    "revision": "a3d8979d7bfa38cfa73b14ccbc454140"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "48646780a8f4881759457d4471f25338"
  },
  {
    "url": "tag/context/index.html",
    "revision": "f397e7f37b0b9955d92a48551a8f0023"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "4fd9cc409644b2b9c5b636074421f55d"
  },
  {
    "url": "tag/git/index.html",
    "revision": "55ae57312f42e8e8714b91e47c579f7e"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "575d1cee1fdbd34e671f9310ae4de004"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "13b394696299ad3d257e22ec3a6d3e11"
  },
  {
    "url": "tag/index.html",
    "revision": "9db24cb7fdacbe4a4fb8ee81d61b14a5"
  },
  {
    "url": "tag/java/index.html",
    "revision": "be47e52aa64e0dcc82eb2dc90d476e31"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "79c43dd523c18c0a29f0a7cc9208b69c"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "ebf5c0c07028a6447aa0d2f3994c1cac"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "801ffb368036ef7b394d34172fec2a84"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "2e40d806d349a86363e3dbfd975ff49b"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "cc59d88227800a3087e43a5e3d40c5b9"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "b2aad811d8827778265cf0b882cea34d"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "7269f1fc8b345605bd6add100c36be1a"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "fdb538b9736add067ed7a4abeb783a28"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "dd03965c668bb27ac4f8fbcddcb6dedf"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "e82a438f8241f58f23863a34f0e43d2d"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "339e86e299323d6235a5244b6b11d760"
  },
  {
    "url": "tag/python/index.html",
    "revision": "9ee592a38253b68d2f274b84ac05368e"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "4c4de55881abf7ae858a540b4230aaf8"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "ef971fa3160e27943f8da5780d3f5fa8"
  },
  {
    "url": "tag/sql/index.html",
    "revision": "c8193c677040df255650ddcc3ac76581"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "5dcf57e2ab4fb41c08abd3f6736b87aa"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "e5f85b24139331a3008d93ed6cf5a3fa"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "934194a6c315609050db4dd5dd24d0e6"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "980bbe156f4497ed245f90fc450da833"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "6639a0a03ab79e52918560a97792834f"
  },
  {
    "url": "timeline/index.html",
    "revision": "9e735b5f94bdd292bb2debdcb7dbac0d"
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
