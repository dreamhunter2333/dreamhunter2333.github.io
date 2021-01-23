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
    "revision": "cfd3398ffee874639d59f653bacd3aba"
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
    "url": "assets/js/10.56c744e3.js",
    "revision": "6bcffb01703efaca9fadc08c5269705a"
  },
  {
    "url": "assets/js/11.1bf5b318.js",
    "revision": "72cdcb8176825edcb4db2b4c2264f2e4"
  },
  {
    "url": "assets/js/12.91a03c3e.js",
    "revision": "8c53e689647e2f6e5c1eeb01f580e24c"
  },
  {
    "url": "assets/js/13.da1c49dd.js",
    "revision": "5d503f95d5e28859873eacfcc85953e0"
  },
  {
    "url": "assets/js/14.8df50f61.js",
    "revision": "bcc272cf5d7114569f60a082e7db7e16"
  },
  {
    "url": "assets/js/15.8504bf12.js",
    "revision": "56271e995cfda4f0c9f0f5df899c5528"
  },
  {
    "url": "assets/js/16.c6557a57.js",
    "revision": "46a825300ada3c0f43849576c1d4c1ec"
  },
  {
    "url": "assets/js/17.9768f60c.js",
    "revision": "8c3e17801c1209daddae04a814f26cf4"
  },
  {
    "url": "assets/js/18.abc6bd01.js",
    "revision": "2a4c462e9f86aa466dfa54b03d776999"
  },
  {
    "url": "assets/js/19.257984f6.js",
    "revision": "1c0e3feab340b7e1c639dc5c4701e4dc"
  },
  {
    "url": "assets/js/20.26593c73.js",
    "revision": "1e7558b5fa6675454a4c09090832afbf"
  },
  {
    "url": "assets/js/21.2ff6b998.js",
    "revision": "81f8cd2289b3d9c116b952a16ea642bc"
  },
  {
    "url": "assets/js/22.3a0d2350.js",
    "revision": "7e22d9cb7b5c8660c355c084b2336778"
  },
  {
    "url": "assets/js/23.b6290231.js",
    "revision": "5e15e06378a90e0ff5d8b2ea462e3bfc"
  },
  {
    "url": "assets/js/24.22266269.js",
    "revision": "ad12604050b23e577d1430ff22dbc533"
  },
  {
    "url": "assets/js/25.f403d1e3.js",
    "revision": "a66621fa36436b03fd0875190a500ca4"
  },
  {
    "url": "assets/js/26.1864b972.js",
    "revision": "46f25dbaf91d67ed3573a9e090002073"
  },
  {
    "url": "assets/js/27.054a0f5c.js",
    "revision": "f5fdf56437a8449b4207282b299ef54f"
  },
  {
    "url": "assets/js/28.3a591711.js",
    "revision": "0e0cc2b387c241082758a484ff3241eb"
  },
  {
    "url": "assets/js/29.0761f31c.js",
    "revision": "1c6ce0fffe966ac94cb79a2061e7b44b"
  },
  {
    "url": "assets/js/3.325ab0a6.js",
    "revision": "8e2d68ab952c10bc7ef0874e6dbeedfd"
  },
  {
    "url": "assets/js/30.84d5a9f3.js",
    "revision": "5ec05a65662769e0f7ecea95b87e8884"
  },
  {
    "url": "assets/js/31.23e4e71c.js",
    "revision": "96552281b3fbd7df0fb45b92e851070c"
  },
  {
    "url": "assets/js/32.858ab40e.js",
    "revision": "dd9927ebc591a6e3cf00927125611bc0"
  },
  {
    "url": "assets/js/33.6d0a773b.js",
    "revision": "b030eef4f7b9d0ae0b974aaaafff1e7e"
  },
  {
    "url": "assets/js/34.df4055d7.js",
    "revision": "20ede8707a5b2fa65da1613f7e8e4cb6"
  },
  {
    "url": "assets/js/35.97cd677d.js",
    "revision": "41dc4b42bc95c52fb05eb887ec150dcf"
  },
  {
    "url": "assets/js/36.78a9423e.js",
    "revision": "0303aad9ad13661ef51fd5a55e547d2d"
  },
  {
    "url": "assets/js/37.4cab6dbc.js",
    "revision": "d4dc39de1cb712257e8b0cb421d63e29"
  },
  {
    "url": "assets/js/38.33e10c19.js",
    "revision": "28a4e595b50e66c07c8e5bf865c82a58"
  },
  {
    "url": "assets/js/39.9b1479cf.js",
    "revision": "90ff783da11af231a7aa71f5c9f8abb8"
  },
  {
    "url": "assets/js/4.96a4f898.js",
    "revision": "a14bf9ad47183792edbede46a86dafc3"
  },
  {
    "url": "assets/js/40.06e44cbf.js",
    "revision": "44fb2f3000098b9b2aef1e8a43cf72b0"
  },
  {
    "url": "assets/js/41.9a2b58d5.js",
    "revision": "72d7bf14ba8c8df66be8c3cf832aaff1"
  },
  {
    "url": "assets/js/42.a4f99753.js",
    "revision": "0ee36eee25359909b80bce18ec022bbb"
  },
  {
    "url": "assets/js/43.cb218712.js",
    "revision": "50b3b8ae3657fb2fb45ca9024a886efe"
  },
  {
    "url": "assets/js/44.3f5850f8.js",
    "revision": "da23a191e534087482c73b3d581d7e70"
  },
  {
    "url": "assets/js/45.3b976268.js",
    "revision": "587f8e6b5e9a4a4e4c3ca7a790f8486f"
  },
  {
    "url": "assets/js/46.fbf32aa3.js",
    "revision": "fa7be85330d3f9941b4127ca16e2dbc4"
  },
  {
    "url": "assets/js/47.c713034c.js",
    "revision": "c6c938cac70b455e5e190359cd08b753"
  },
  {
    "url": "assets/js/48.447650c2.js",
    "revision": "c73d92a1e3fcd47aa7c941cadec422c2"
  },
  {
    "url": "assets/js/49.5fb43288.js",
    "revision": "553a8ae5a1fef9fea4c9d26da889cc83"
  },
  {
    "url": "assets/js/5.73c3b6dc.js",
    "revision": "0b94b5effa1fea40d59b4d6260a8d069"
  },
  {
    "url": "assets/js/50.cae61050.js",
    "revision": "cb898e3d0e707fdf5d13a9f597fa1423"
  },
  {
    "url": "assets/js/51.c819aafc.js",
    "revision": "b0daf2c272c95d07e8d6121d5320a68f"
  },
  {
    "url": "assets/js/52.d0652c87.js",
    "revision": "a9712e371c17db078ae0a49db74a8bfa"
  },
  {
    "url": "assets/js/53.ac299325.js",
    "revision": "a755d30f3ed44f21214b0a4182e10e99"
  },
  {
    "url": "assets/js/54.41345318.js",
    "revision": "51e227048e37de9d623cbe3b0b559e96"
  },
  {
    "url": "assets/js/55.1004c9ca.js",
    "revision": "3468c38ed7f33867768ee3bc538f8e7c"
  },
  {
    "url": "assets/js/56.db368013.js",
    "revision": "6f5fa806c4d971cb6ba10645b2880b08"
  },
  {
    "url": "assets/js/57.978f6d39.js",
    "revision": "e41f29d4605562d46d306c53540cbff6"
  },
  {
    "url": "assets/js/58.bff86ccc.js",
    "revision": "2c1227a05621ea19b9fc7e0d7e674ea2"
  },
  {
    "url": "assets/js/59.bb8806ab.js",
    "revision": "dafbfe56718979be18c6f2cb465fdd5b"
  },
  {
    "url": "assets/js/6.e89d683a.js",
    "revision": "229e84a6a54550b160155f2786f7b13f"
  },
  {
    "url": "assets/js/60.34252197.js",
    "revision": "30693884072e6b4e7d054b50955654eb"
  },
  {
    "url": "assets/js/61.28950ac8.js",
    "revision": "3119db5a39786e7e18f0ce5b6b47f95c"
  },
  {
    "url": "assets/js/62.ffb65225.js",
    "revision": "b0075e9ee96a520faab039304f1ed39b"
  },
  {
    "url": "assets/js/63.1b6a64a9.js",
    "revision": "d38a90ce943aeffa430b655a18249605"
  },
  {
    "url": "assets/js/64.72a1e0e1.js",
    "revision": "f2ab66aa2e807c579428c80837e15e9f"
  },
  {
    "url": "assets/js/65.bd3feb43.js",
    "revision": "e50b0a15a1f6c1e3493a88d9499e7960"
  },
  {
    "url": "assets/js/66.2d5b4375.js",
    "revision": "a6a7ef9e8ff68a0bbd602fd5fcfc24dc"
  },
  {
    "url": "assets/js/67.300b9d25.js",
    "revision": "82295f35e8091af8e202130e82c80e91"
  },
  {
    "url": "assets/js/68.8272f862.js",
    "revision": "73587fd5a6760163d745a7c4ef6e2975"
  },
  {
    "url": "assets/js/69.7787d120.js",
    "revision": "c0b31edd3269202b0da795aa0b68d126"
  },
  {
    "url": "assets/js/7.8280eee0.js",
    "revision": "efc73350b82bd3d40d82f81a25765d28"
  },
  {
    "url": "assets/js/70.bf0f8f02.js",
    "revision": "1c0c6411ae56050e01b0f16b92159b01"
  },
  {
    "url": "assets/js/71.21623136.js",
    "revision": "5cc459430ae6a5682031128f41a4216f"
  },
  {
    "url": "assets/js/72.569dafc0.js",
    "revision": "48fb8b7cc9a58cbada702f286563a1ee"
  },
  {
    "url": "assets/js/73.e06c8eb1.js",
    "revision": "6ae7f0b9be80d42c86f312e89c5fd782"
  },
  {
    "url": "assets/js/74.46aca31c.js",
    "revision": "477911db19d73a2d287b48fe35326c5a"
  },
  {
    "url": "assets/js/75.7596bf58.js",
    "revision": "71ec858f0741ebd770009d4efcb3df3a"
  },
  {
    "url": "assets/js/76.5fbb42be.js",
    "revision": "56bf774b1be019b35757e43dd924703b"
  },
  {
    "url": "assets/js/77.0a75328e.js",
    "revision": "6ed35b996c4843dbaea1eacda8b4a007"
  },
  {
    "url": "assets/js/78.f787d5ee.js",
    "revision": "043aea65eb72a8e8477082a5a9ab8c0c"
  },
  {
    "url": "assets/js/79.f7a16ef0.js",
    "revision": "128d1bce63dd7e5465663e2a871dfb04"
  },
  {
    "url": "assets/js/8.2da7255f.js",
    "revision": "02011642c45afbccc264292b4fd4aabc"
  },
  {
    "url": "assets/js/80.d1f7dedc.js",
    "revision": "40d2e95e8cc03848fa1e95b73aeddb1c"
  },
  {
    "url": "assets/js/81.5f4a07bf.js",
    "revision": "05310c2425124c0839dfc9f04161d455"
  },
  {
    "url": "assets/js/82.a7e2c86c.js",
    "revision": "4cc7029194661316f1dd1e503c93ccab"
  },
  {
    "url": "assets/js/83.6606d932.js",
    "revision": "c0e01c8e916c3b27990f61ec01863911"
  },
  {
    "url": "assets/js/84.a269db29.js",
    "revision": "aafc212450c236739683cd319fd36f5e"
  },
  {
    "url": "assets/js/85.9d4f2561.js",
    "revision": "444d120b02c36b1711a88013ca67d6e0"
  },
  {
    "url": "assets/js/86.5b807bb8.js",
    "revision": "fba06ea0d570372a4f29f33f8f226049"
  },
  {
    "url": "assets/js/87.b5bb6dcd.js",
    "revision": "d9de5ad7ecb3d3a45b38d4a8a7f78b83"
  },
  {
    "url": "assets/js/88.92f29e4a.js",
    "revision": "d345512bbd2c449f4cf7e965e0e45304"
  },
  {
    "url": "assets/js/89.1bcd467d.js",
    "revision": "f014a7be13e456396bbd76154a92fa79"
  },
  {
    "url": "assets/js/9.9eac863b.js",
    "revision": "fc7469e5da4f47fc22e35184e41547d8"
  },
  {
    "url": "assets/js/90.4cc09d3e.js",
    "revision": "1d457eae7f769a77170b4cb91b4c3e43"
  },
  {
    "url": "assets/js/91.29c4f5ba.js",
    "revision": "2a5ef9cc9ff34eb9af755edae8b65c98"
  },
  {
    "url": "assets/js/app.37a9646c.js",
    "revision": "855461ac6cdd4e8107d31007ecee226a"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "85794932569081d7e453b6d4ef0a8d0a"
  },
  {
    "url": "categories/front/index.html",
    "revision": "f7913e6a1cff32ceb74bfa6661daed09"
  },
  {
    "url": "categories/git/index.html",
    "revision": "1f444b5ed5f8d2f3b9a0c64b52584eb0"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "dcd7365e3bf98074938fb20cc58ae901"
  },
  {
    "url": "categories/index.html",
    "revision": "96e8965cc070af521c52072c72230f62"
  },
  {
    "url": "categories/java/index.html",
    "revision": "0f6d260dade1b1725303ce5e7b36729d"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "e9a1430ad5447d1a13cd741266cc9002"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "48cd783873922cc210c50c6e5ae264fa"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "f9d227bad7d887816559f6c86f81a143"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "ce1ad0457aecfc68038a0a8a518bf234"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "04c617685f2eada3865d409c3550adec"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "023f989b466aa5ff5c2410c83bb99733"
  },
  {
    "url": "categories/python/index.html",
    "revision": "436cc10978e9fa2d7a267d8f9f4dcf04"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "4b3c089b088d8ea1dbf62f6d612815e5"
  },
  {
    "url": "categories/sql/index.html",
    "revision": "fb00e75ca857726a516a402cd82c07cf"
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
    "revision": "52d28a5b017812b7ed1df284cdb74b2d"
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
    "revision": "1795ba70d5584f2b0662cbc77325783f"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "999c13ca77a4df7a1ef3a167e1286e28"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "65ed4e071429bddc04f3a01d5022b8e4"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "ef2fe8411a156f5a490b77c81e624078"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "54c3dd0bfb32f63c15adab2a4787c659"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "a5da40f5d537734993dedc0287713a5e"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "d0890a3d29d96925f5c1b55d9a4868f9"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "949acb5ef048efb8d5c560e66e9d64b7"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "f5251d2be8122c9707c27c0ddf9b44c5"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "e167c8e19e9add66d252e3ce7089ebc1"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "520a2c9783db2a76a944fe0b0f31509e"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "5a10b54f11e64dfe084f89bc2c844882"
  },
  {
    "url": "posts/hackintosh/炫龙耀7000 hackintosh 全过程.html",
    "revision": "d1f7b75c8c2a8e3e9ae3a27da10b1501"
  },
  {
    "url": "posts/hackintosh/炫龙耀7000-hackintosh全过程.html",
    "revision": "d1f7b75c8c2a8e3e9ae3a27da10b1501"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "afe1a5d789067cc4db51d8a1529c0b42"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "5a62a3a46375f39caa095915cc618066"
  },
  {
    "url": "posts/index.html",
    "revision": "a5687781613b0a267f4f62ff20f788f2"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "1a70e6727ceec07c08187d064ab70eae"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "8db9a0f7b9ff2a6905fc7cb0727dc41c"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "b76ec1701345b4ae30f7751df563150e"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "994f8ceec2e4f6addc342c5d43a9b8e2"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "d6f7ca3e8759956a9854f2dbf1d4c0e4"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "8f2525b6f4b668d13e7b19b721330c0d"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "6b59592798abe540c27f9511004269b8"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "31b1bcd9621b59189c5f24854649bad2"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "8391b9c5e68c6b880ea43c817d0134d8"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "23bb4cf2ff79f5ed9e4068320ba58d91"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "40a1034c05316730bf6b79c28f0134ac"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "d867fdbfb85af0deaff97904f0a4c790"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "efd3c91fc2fece9b01594dc94fe0e223"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "5f9bc6f3563d6193a18b8eb03a46e926"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "67c679090fa0bae125c74deafc977458"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "ba7384b7c6cb9e8dce818edfa11d061d"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "562a974004a6a0c5e4955c7c76d218d9"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "0b2ec5fba9b25fd6fa6601f0c85ff396"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "773995eacb5275b6a6eff52a3aa596f4"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "8ebc82ec524634baa189acab990ae9b2"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "a89e989671f1f193041add9f59ffc78b"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "6d80edf04cc84be39dc8883efdc1bae5"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "6887758dffa921bbf77d383c367fb53b"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "c04ca927f6ea1d2d7b1051075cf1a51b"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "7f8bb9aa516c078af3b506a1e3af4106"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "7ca68120237a8f5e1dd139d5de896369"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "6e1f26234e5bb3944715715b06937845"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "34a8b9ce29ae80409f83939ce538651e"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "12012a5c4c656f0e1f255648b668bd70"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "9cf9fbee94aaa7aa5840027b739672c3"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "f0f6bbcdaaa55b7df9206eac44c85289"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "51e92d5044516e42bca9ed7a9b92d479"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "4e61bb17bf0e56b7535a5da7048f6f5e"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "aa5e77344bb2b901a1364254c1e121fc"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "f20af79b23b9df2f6fee78048d930ead"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "2701fcb5017c6669e66fa495987af1b3"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "440f62279ec8d26cea7553f6227207e6"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "ba05525eee559e72c4ef634132505701"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "60f0138e8d5a023dde601612b7bcd067"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "11aa93e97717cfaf263b854f81070a2c"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "aa14b448b9cded9fb496bee4021cfa55"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "4c61be9d63c3d9ad0cad378685e74adc"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "4c7a7697aebf95762887dcf7efe7ae69"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "3d45e0accf7ac983ad5d921118cdd301"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "01a89908a0e1ac83ed7ef9415a31db9a"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "6775287e31e052670406c5ca7218421c"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "453b196e90c14187858e7217d11aef93"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "bf5cd929a92d42860172641ad831771e"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "9e62360d42033320c9205adfad592eae"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "6b4f1c414cc64c7d14f6286493ce6026"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "9704b98a914f57d847c3a15ef7619ef9"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "947b82e1daf4cbc0454fb0e42264c82b"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "1e6971fc9a86b2884f65aea29f2c4022"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "2c718a32e3e8fbf432e4d70c12cf647d"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "0c7eb878c2b2a57ddc501d53e52eeb73"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "a22ba089cb377156300bde6f05ffba8c"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "336b28daf139139b84f8fccd84432bd7"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "334fcb5418784c036d23a77593afab77"
  },
  {
    "url": "posts/python/what’s-new-in-python3-8.html",
    "revision": "7eac3eed0c6eefd53f605637815b93d0"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "e41051d22fa39a3d858d0d7a2234cba2"
  },
  {
    "url": "posts/sql/SQL-constraints.html",
    "revision": "bd770a64ca97e9ee1b7e827b639ef843"
  },
  {
    "url": "posts/sql/SQL-NULL-Func.html",
    "revision": "184701e1481119d8e7e91c86571024f2"
  },
  {
    "url": "posts/sql/SQL-statement.html",
    "revision": "dcc340b9403a955d4d76d9f77a948b7f"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "868acc9a8d8b56808226e5a1406dc086"
  },
  {
    "url": "tag/api/index.html",
    "revision": "31cddb7c3aaa0669561c8bad89b3dd54"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "3f8d28a9f6da6a24cb4fe31e66de490c"
  },
  {
    "url": "tag/context/index.html",
    "revision": "1afae3d0f31ee43712bbb6bcf6e2dc6a"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "e12aadae83267eb4569e11ce403bee42"
  },
  {
    "url": "tag/git/index.html",
    "revision": "3b68f5118437379abca591fd88ce84d3"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "5ba958a5e23a120e6b9c2a18ae19a67e"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "1a9be699096df682f9ced24555909e95"
  },
  {
    "url": "tag/index.html",
    "revision": "72f67bb9fab521c208d33a88882f36b9"
  },
  {
    "url": "tag/java/index.html",
    "revision": "414b6cbbdbb4a0cf8f51f2af1da416a9"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "cc82f8c47d57f646a50049ff6eb78527"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "8f86caf507666abf06ec004ee1d3cf5d"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "615e198b683bef178328d2e8aa17ea55"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "6a5c7a33857bc9ee5a30bef6111e08c0"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "e43c7dd430b558006c18abe26712dd28"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "c269ceb7ae40e3e7696ab7c803bd30ad"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "af2d396610db90e45ad14d33276e4ed8"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "783e07ba680593d089e62837e5b4569e"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "fc44192bc7b91f4d9408108f2c792876"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "5088fc6fee930c3f583970ad008b09bc"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "d03f8e748ee6707136f7b7835cd8d395"
  },
  {
    "url": "tag/python/index.html",
    "revision": "a0cc00687e314b0c759c57f09de82257"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "29cd275f23f7963c01fc79fa8b1a8d14"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "33682355b337730efcba17fcc082e37c"
  },
  {
    "url": "tag/sql/index.html",
    "revision": "193e380531f34eab4e0e2d1e7f0b8ab6"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "c04961513174c4d33eb9691ba565b574"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "2e95863d515f92da9f732ff6c28c8ecb"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "0d71bb581b9f78591ac9f24e45d64a8e"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "1d6f4f63341f129ff3609adec38e0209"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "9dcfb76a14fe22ec2fb0c75adb8fa0bd"
  },
  {
    "url": "timeline/index.html",
    "revision": "55172d6d7e5b5e6e0171db623bac4a21"
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
