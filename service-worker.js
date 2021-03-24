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
    "revision": "bf7f145b080ee581cf4c1667ec1ab181"
  },
  {
    "url": "assets/css/0.styles.a1180dfb.css",
    "revision": "3d34d6f2468f63e74db00bea58981ce2"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.aaad044e.js",
    "revision": "1286ce312138a1fadc2eca581308f074"
  },
  {
    "url": "assets/js/10.60a57bcd.js",
    "revision": "021fde86d803cc7c4f28eae6eed5fb39"
  },
  {
    "url": "assets/js/100.5678afa4.js",
    "revision": "b125f85e2094d88991caef618b907b39"
  },
  {
    "url": "assets/js/101.062309e0.js",
    "revision": "8f0d2c8fdddd3f32a1214f4ef991f7ab"
  },
  {
    "url": "assets/js/102.869908c7.js",
    "revision": "d1c1022b6ac29662bf0dcc44b39b2342"
  },
  {
    "url": "assets/js/11.69b157b1.js",
    "revision": "4c83239fab190348e9d5dad712041630"
  },
  {
    "url": "assets/js/12.baed0c06.js",
    "revision": "8aaa87114dc5d447a8b34159527cb4be"
  },
  {
    "url": "assets/js/13.ba4546ee.js",
    "revision": "5bf138218653ae71e2c6ad2f5c3cebb5"
  },
  {
    "url": "assets/js/14.84b2d105.js",
    "revision": "b438d09dd18810c92cab3271ac4023d9"
  },
  {
    "url": "assets/js/15.af1a6494.js",
    "revision": "38e4233e46fbba5e1d8b46e1f62833fa"
  },
  {
    "url": "assets/js/16.7d5b489a.js",
    "revision": "61b175f62650200642a2dcf1ebe0b7f2"
  },
  {
    "url": "assets/js/17.175278c2.js",
    "revision": "53451dc69a75012575c6533aee85cae8"
  },
  {
    "url": "assets/js/18.7683754e.js",
    "revision": "8ee5192ed87555993ebef121424bed3f"
  },
  {
    "url": "assets/js/19.4dd588c7.js",
    "revision": "b58b0efccb179ceae01461d5e999fd47"
  },
  {
    "url": "assets/js/20.37267d38.js",
    "revision": "f1768044c6fdcfbb235f4906c5034e9a"
  },
  {
    "url": "assets/js/21.64d57c89.js",
    "revision": "50750b01311ee519cfbd0f52be0f8a9f"
  },
  {
    "url": "assets/js/22.7304d32b.js",
    "revision": "4a2186ce36156e7ac7f7c19fa99c927a"
  },
  {
    "url": "assets/js/23.d56a52d8.js",
    "revision": "5b3c629bcc728b27d8facd318f5a0bb1"
  },
  {
    "url": "assets/js/24.d6bf357f.js",
    "revision": "a62dedf03f9d5959ec91716e329310c2"
  },
  {
    "url": "assets/js/25.d6ad1010.js",
    "revision": "df7e63574208a2140e648fb920b0101e"
  },
  {
    "url": "assets/js/26.99ba025f.js",
    "revision": "5afd013e9b38a23abf527296b10b6b49"
  },
  {
    "url": "assets/js/27.25d000d8.js",
    "revision": "e1b96f935c23a344afe0c74a8aa9f4f8"
  },
  {
    "url": "assets/js/28.0682bac0.js",
    "revision": "ae1825087266874e77a362cb2dfcda35"
  },
  {
    "url": "assets/js/29.e3074cd4.js",
    "revision": "0ba07b83a465617ea1bef8bcac294bb5"
  },
  {
    "url": "assets/js/3.364fa3fc.js",
    "revision": "e526d0c70dfe47b40232c01450bcf7d0"
  },
  {
    "url": "assets/js/30.7eb98f44.js",
    "revision": "9909850528e2bf6b736021d9634cb4fd"
  },
  {
    "url": "assets/js/31.e15ac332.js",
    "revision": "adfda380c86f3d04264dc4138bd47833"
  },
  {
    "url": "assets/js/32.046df637.js",
    "revision": "43163c95883e989e38fee30093f2622c"
  },
  {
    "url": "assets/js/33.cd5431a2.js",
    "revision": "78019da1ee754e2e378fd02164e6ba96"
  },
  {
    "url": "assets/js/34.63b1ca4f.js",
    "revision": "dd12ee8f7b8513871851f2f767e8ecc0"
  },
  {
    "url": "assets/js/35.8c524836.js",
    "revision": "d7965f5e61c582229b6b3005dd0f6f84"
  },
  {
    "url": "assets/js/36.e4a8e121.js",
    "revision": "e56518bda6a45322f019bc27dbb59a0f"
  },
  {
    "url": "assets/js/37.7f7adb3e.js",
    "revision": "f9c1ccb2f96d84513010f0741ef59817"
  },
  {
    "url": "assets/js/38.9a5d9753.js",
    "revision": "8d79c44a3b6bfc5627aec9aef2266065"
  },
  {
    "url": "assets/js/39.8ee38253.js",
    "revision": "7de9cd498ba20515b2298a1d13707d4e"
  },
  {
    "url": "assets/js/4.82827657.js",
    "revision": "16886d2cd0cbc839eb15b36b6007f24d"
  },
  {
    "url": "assets/js/40.4d330f31.js",
    "revision": "f9b9a3966c875a3b42ce725833e5d607"
  },
  {
    "url": "assets/js/41.cd2ee81f.js",
    "revision": "e2ac4c2a67c90f1178d0baee2912afb2"
  },
  {
    "url": "assets/js/42.ff99ebb5.js",
    "revision": "b44e58170bc14f9effc2ed8fcde1d616"
  },
  {
    "url": "assets/js/43.48843f4f.js",
    "revision": "6640d59827370bf6991a2b99922f701a"
  },
  {
    "url": "assets/js/44.37226404.js",
    "revision": "f43d56715acaa29984d64562af8a7079"
  },
  {
    "url": "assets/js/45.ff5c73fd.js",
    "revision": "5491263130a1b20a3d406033c60ac12b"
  },
  {
    "url": "assets/js/46.60980d76.js",
    "revision": "9e4aafbc82c6efa73680c1c99c188428"
  },
  {
    "url": "assets/js/47.dda4c239.js",
    "revision": "5665da7ee64ff57ee37db8eca4966498"
  },
  {
    "url": "assets/js/48.5e71dd8b.js",
    "revision": "6ea44caf5e02de0f81deef7a241bbe8e"
  },
  {
    "url": "assets/js/49.aa277748.js",
    "revision": "d428681f3a401f8f44584696320bbb63"
  },
  {
    "url": "assets/js/5.f171fb5b.js",
    "revision": "1c432ec3e561c0caacd0919ac5415365"
  },
  {
    "url": "assets/js/50.8f45a2c4.js",
    "revision": "20f8d7fb06b7301121a3c75e192a46a0"
  },
  {
    "url": "assets/js/51.448d1887.js",
    "revision": "d438af1374cf83181be89290e6dc72e1"
  },
  {
    "url": "assets/js/52.60ec7b40.js",
    "revision": "66c623e74f96dde3a05fd808dcf99c84"
  },
  {
    "url": "assets/js/53.b6411c4c.js",
    "revision": "45991fd586cd5cb87e8fd0ec4a10392e"
  },
  {
    "url": "assets/js/54.38cc5f87.js",
    "revision": "0307a3c4249e3e103610e794e3768ebb"
  },
  {
    "url": "assets/js/55.4a538d95.js",
    "revision": "4cb13978cf1bf0e6433f6ad7e93f78c1"
  },
  {
    "url": "assets/js/56.513d577d.js",
    "revision": "dacdb3c60b7239f21f752ef6538d486e"
  },
  {
    "url": "assets/js/57.73bf2cb9.js",
    "revision": "b2254f2562ad3892f4cc34f7b15144e7"
  },
  {
    "url": "assets/js/58.facd62ea.js",
    "revision": "d07616542c81a15a82576f8d42e43ac4"
  },
  {
    "url": "assets/js/59.c83f2b69.js",
    "revision": "60b360febef08b66aea821c65acde89d"
  },
  {
    "url": "assets/js/6.6d7bedbb.js",
    "revision": "91579a973bf33c858aea0e27e16600c8"
  },
  {
    "url": "assets/js/60.c5d061bc.js",
    "revision": "c736c10b43dcd670f1416125c7633eae"
  },
  {
    "url": "assets/js/61.fda58098.js",
    "revision": "99c993a9e063e6dfbe16ecb5d79e1b0f"
  },
  {
    "url": "assets/js/62.56fe9904.js",
    "revision": "5e370258a99e8cdeb3af349a5f671c20"
  },
  {
    "url": "assets/js/63.8ac1abe5.js",
    "revision": "e4b66dc549f5e657c1be5711a2398f6c"
  },
  {
    "url": "assets/js/64.f4769b01.js",
    "revision": "9d70eb6c4ee5484bcb377a7a90d920a0"
  },
  {
    "url": "assets/js/65.eea6927d.js",
    "revision": "2600c4422bf47b706c9094a0ce8e142f"
  },
  {
    "url": "assets/js/66.fe6a44cf.js",
    "revision": "09a3a2d296eae969d8bd7915e126471f"
  },
  {
    "url": "assets/js/67.902f948e.js",
    "revision": "f438b0c2b42e0bad6b3fa16ceda6dada"
  },
  {
    "url": "assets/js/68.df986152.js",
    "revision": "f584f0329f802bdeb82355e14481da13"
  },
  {
    "url": "assets/js/69.41b46923.js",
    "revision": "85a674923c2287e85df82692357ab33c"
  },
  {
    "url": "assets/js/7.76b7dfa7.js",
    "revision": "715c723dc2232b73f9c1500622b1fc01"
  },
  {
    "url": "assets/js/70.26e9e036.js",
    "revision": "be1c3a4d3e20b8f22241aeafb0a8dccb"
  },
  {
    "url": "assets/js/71.6ce4b85e.js",
    "revision": "8efe9789aa7c0923bf3d60f5bfd56eb0"
  },
  {
    "url": "assets/js/72.1bbddcef.js",
    "revision": "bf41495142f8074666fc5d328bd85ecf"
  },
  {
    "url": "assets/js/73.2af4726a.js",
    "revision": "ec8ac42ed756e24cde924f529e2b1293"
  },
  {
    "url": "assets/js/74.10dda985.js",
    "revision": "4b1e5fa39ba7a28fa81b35cc7a5f0946"
  },
  {
    "url": "assets/js/75.ac970f84.js",
    "revision": "23b3ef5c23a5bb52b3ec9c54c6b9a0f0"
  },
  {
    "url": "assets/js/76.a9a1cb10.js",
    "revision": "5ac70b1cb295610d37e1a83cf24a122e"
  },
  {
    "url": "assets/js/77.04962e67.js",
    "revision": "917dca60a3ef67fa39c40bedc026c1a8"
  },
  {
    "url": "assets/js/78.0a593e86.js",
    "revision": "4aebe1b88acfec639ed57a0fce712810"
  },
  {
    "url": "assets/js/79.9ed5fcaf.js",
    "revision": "855aeda88a78b18b3f3e952930df9f1d"
  },
  {
    "url": "assets/js/8.07210b02.js",
    "revision": "f9bec44862f6ba153247245d31c65124"
  },
  {
    "url": "assets/js/80.c8179bc3.js",
    "revision": "c83a3617020954afbfbfdccadf3aff88"
  },
  {
    "url": "assets/js/81.07b5b71e.js",
    "revision": "5afbe8167b7924027e3dcb4f0a6aee4a"
  },
  {
    "url": "assets/js/82.f2d89361.js",
    "revision": "9cec8018137b9446dd9121f62de1b884"
  },
  {
    "url": "assets/js/83.9d6e067c.js",
    "revision": "d438c18bb56be8bf2a36ec90568add4f"
  },
  {
    "url": "assets/js/84.c0ea2bd7.js",
    "revision": "a1cd7b3c9d37196d958b52c80e22deac"
  },
  {
    "url": "assets/js/85.21be3227.js",
    "revision": "016c2a0f3fa1f43eb5e8bfa3330bce01"
  },
  {
    "url": "assets/js/86.0eae6536.js",
    "revision": "83d2df849ef88b5de930c62de9d606fe"
  },
  {
    "url": "assets/js/87.6e4f4220.js",
    "revision": "b1c02f47c612fbce273a782802004ede"
  },
  {
    "url": "assets/js/88.87e20545.js",
    "revision": "baa4fc33fa05aae775fdd622df989379"
  },
  {
    "url": "assets/js/89.7a803a2f.js",
    "revision": "00e2cf57ff707aa689672c950570616f"
  },
  {
    "url": "assets/js/9.3022d93f.js",
    "revision": "2059c6a7f8acd52e7ce82a2e9e44704b"
  },
  {
    "url": "assets/js/90.991e1038.js",
    "revision": "c0ee4e1f77919f98820ed9e30d1d3ad2"
  },
  {
    "url": "assets/js/91.9d4f751f.js",
    "revision": "c0ad0ca81e901118c6ad313ab7a16acb"
  },
  {
    "url": "assets/js/92.e103fffa.js",
    "revision": "14777bfd542692548898c8f77f465041"
  },
  {
    "url": "assets/js/93.022f5512.js",
    "revision": "ed9605a23aca5ede7421603fc5a231e5"
  },
  {
    "url": "assets/js/94.80b64d31.js",
    "revision": "fdd35c82ded6ca96ae6443a6c9aa5bf6"
  },
  {
    "url": "assets/js/95.a7585333.js",
    "revision": "46d244a224856d1c7e550fa28d4cf7a2"
  },
  {
    "url": "assets/js/96.88a049c5.js",
    "revision": "9a48cd63bc4d1e82208f5f8256a5970d"
  },
  {
    "url": "assets/js/97.002b0271.js",
    "revision": "0b1a9a6ee7268b213a97861094121966"
  },
  {
    "url": "assets/js/98.78a9d90a.js",
    "revision": "1f4ac8957b11f157278bc10504413db4"
  },
  {
    "url": "assets/js/99.a101f745.js",
    "revision": "eb258a1cbdfac5d1543517b47bf2619a"
  },
  {
    "url": "assets/js/app.6891bafd.js",
    "revision": "81ac5f2e3076fb90e996dada623adac1"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/database/index.html",
    "revision": "c14272387f8dccf5d513db567a785b10"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "eaa1cf3c14e82b67ea761f9a2a048a2d"
  },
  {
    "url": "categories/front/index.html",
    "revision": "2f0bc765062adae85fc85a8c2bbdb817"
  },
  {
    "url": "categories/git/index.html",
    "revision": "42f93520ad58b4288e4001c6fcf25fe9"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "1a1d57a19e8628f618d7cebfffd64188"
  },
  {
    "url": "categories/index.html",
    "revision": "e51de88a05af7e15159e9add0f17ac1b"
  },
  {
    "url": "categories/java/index.html",
    "revision": "4cf2ca406056af519642a2aabee06805"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "6214d83c44d0441d04f6be29a1fc72b0"
  },
  {
    "url": "categories/mq/index.html",
    "revision": "3a0bd8f667f90a61b02ff9e63de5c615"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "c9fea3af469a7d7eeb613d5b5adf2f57"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "741c70062a12eabf654b1165dd74c68d"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "c4ca63da86bd891641e4153c5abf4471"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "8afb0ffd6ad8376ddc1704ebe9df9f5b"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "f7b113157b49dfebef8f3815e1790f3e"
  },
  {
    "url": "categories/python/index.html",
    "revision": "4dc6f8134b41c2ad44085c3c6ead7582"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "3706e4069d28e14483fb486ea0c59b16"
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
    "revision": "7501502d4f5ffe12704c2509dea2c257"
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
    "revision": "7cfc9ddb3a537ddea649870da0541890"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "db57e168188a2bf541238046b2277411"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "484052a2e12fb691a96e3644e39d912b"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "43192fe639d742732aba1e0995c8e71b"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "65068e7011d27c262129adbaf90d550d"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "139c06e55cd5746e76aaeb8787725c39"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "65134b9bc6f04735847143b430db1b0d"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "fee3cb37899d6ffd826824a41cc24363"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "b5f32bd8c3688f1136cc25fa44fda96b"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "06e376fdb5d4370113db99a878acb451"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "f9b83090dbebb79dd1b2321938b6a976"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "71a9418b56df1c7003b18ae2e12a27d8"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "9954e0964f58031b914ff30e4f201d7c"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "e5c7d024bf4be043a5d4577ad1594018"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "db5ed54d27a752148673b8c78c6e9efd"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "236f63b839aaf7cbaf445f53fd456677"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "6cdaea7f33fed7d6169d6d7e3a5d17e4"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "1beb7ea9d32969932c99ea899d02f86f"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "0cdad97515a22bd2bb9ce824c21c715f"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "2fc19da4f907f033d45604ba21a2ebe2"
  },
  {
    "url": "posts/java/java-http-proxy.html",
    "revision": "41179696e3db66a560319c329014d3d8"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "db861dee1d57b9d0c54d06f9f902376c"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "dc346f1cb864c0128a5a3ab994234992"
  },
  {
    "url": "posts/java/java-spring-MyBatis-Annotation.html",
    "revision": "58156e6c2b0132692918a3003d808d11"
  },
  {
    "url": "posts/java/java-Tetris.html",
    "revision": "d9d31ac13f5f1749d7a6f6c5f6f56a9e"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "92bba0730e1217a93d29d4d48d485c42"
  },
  {
    "url": "posts/java/spring-RedisTemplate.html",
    "revision": "08835f1e2e031f78a27aae03cae4fe8a"
  },
  {
    "url": "posts/java/springboot-schedule-task.html",
    "revision": "e52441b1789331ab9453a0c47d0016ce"
  },
  {
    "url": "posts/linux/linux-ecs.html",
    "revision": "4e08b8e54337f9c87ddc087da11ec1d5"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "671772dee5358f0e45f8d807a70ae3a9"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "07dde8a2ca82af88acf2149c283d0bbe"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "5330b2c9ee148d234cc9f435a75087ed"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "debee4928b6c17f6ff4bf8a0a056baf5"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "53fdc96cfbc36a25fcbc052147c5dbc6"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "d1e4c1adbc8806c1cb508ecb66180882"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "ed30b6c1e77bb4f91d8c766ad2541c74"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "af339a86d55aa33b7058cbe2b526271b"
  },
  {
    "url": "posts/mq/ensure-not-repeatedly-consumed.html",
    "revision": "037dead0ffd7623f9491669500619442"
  },
  {
    "url": "posts/mq/ensure-order-of-mq.html",
    "revision": "843ac6a48d6181f0428e2b031df8dd82"
  },
  {
    "url": "posts/mq/high-availability-of-mq.html",
    "revision": "b621416396f6fe97648b4ce99a1faaa9"
  },
  {
    "url": "posts/mq/mq-problems.html",
    "revision": "a25a75e56f707d16b0301eeea1ce7883"
  },
  {
    "url": "posts/mq/why-mq.html",
    "revision": "b2c1567fa270433340c77d42dfc5761a"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "53f55d1cc066447d314c978cb5861510"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "518a0fb0ce627039c3071dc498a31224"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "cdd5e821282358a54bf2cebd2a6078db"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "946c130299978ac8ee56ca40dbba3f05"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "6a02c0989ece16975613cadbb920d360"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "8bf346e35c9518a7ba1476322f18ecc2"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "3f82db02b899577d8b7ed56b65791beb"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "d94635ef542073010901d6e3234679e7"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "980c9e379e7638968336dbe0543c962d"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "661d6d89e55a17b64ee0c85cbdfd2577"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "648e500c2cef23b818f241b31de8e8ed"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "7297232d9ba5612ada38e7d4ac3da597"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "4962987ffd29e9a0b61ad0ef137fcbf7"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "18dd4096315f3c7812b727e7087f3f48"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "0c6903ee65c1e2468218275d9a7b75a5"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "971e3ed0fcddb91858a9037c978fa64e"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "99fcd1b70657a9cdb1534f2c7dc77950"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "aeb2d8953637423625d61439cf778f58"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "2e6fcaf885f9d88774fc3fb2f83b1b3f"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "12af3e9afd9d2221d9759482588de6f1"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "d94e61302201cf8b244b60314ea3727f"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "d8ebf41d1812633c2537927e5e9baba1"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "3a073934e57258f510b5a3c7f35c5a00"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "f8933aa1d23ec0d2b47bd01fc47ce3ea"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "2c14e5502fed2a4962e47f32f1e505b7"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "b66ce793e27eb7ea9e60fb8f3d8e6feb"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "d991a645852d7490d358bdb7f5da3258"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "c850be779907c5ba9884b2a9c2c00ca7"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "458c8e36b2300d581a30dc7d21d666de"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "06ff7fab4e7bda0f5e33345de6507ffd"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "349ae0fa241b313fb82c8cffc21c270e"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "b4d51d3fdf1dac1ee2244e18c763151d"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "1e3d2a03e7eead02f827bcdc694b99a9"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "425fcc6321abac14f49ac0b422e95e18"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "f9f69f8f39c9b9f1cc2affdbd3c2d4ba"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "8a4737ae588aa610d04ce807a427d1cd"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "af6d8385ddbe05829521d7cea7013799"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "1ac77c0b8f6187e2b77fe2de5952084e"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "98ac0aadbe343f850144df272aad4bb5"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "31ba9625c5b066770e3e0586b620d9d4"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "0ffa084c8f6770d27ae0a83b35dcd5b2"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "fa98ba861df8518714db1acf6aa94558"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "76a4449ebe60557e8af465852243fb09"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "6e6f1e7eb7653f6a025ca69d82392a82"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "c1d03384bf78fe944a03aa40d7928820"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "a0928d9c11cc7040925571de338f709e"
  },
  {
    "url": "posts/python/whats-new-in-python3-8.html",
    "revision": "8dcd1008944d4d9c2a6174c688691788"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "c533e425f4dade281b927f4339c7476d"
  },
  {
    "url": "tag/api/index.html",
    "revision": "567f47bd1e9d6c3c6d917b4a949799c0"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "0196996fb3b9e1d9b4388ab79bf6adc9"
  },
  {
    "url": "tag/context/index.html",
    "revision": "4dd50f126e9faceb5c8a3ffac2dcd74d"
  },
  {
    "url": "tag/database/index.html",
    "revision": "e98df411272974e13c4d80b9397a781c"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "6ea765b0690a98067a5d15c2fa0ee452"
  },
  {
    "url": "tag/git/index.html",
    "revision": "c40403cb47e877bec53546016b5120bd"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "c98bfa948fdaa40baec52b501282f4a8"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "5e9a9b388bb7bd03633f442bf8cb4fe2"
  },
  {
    "url": "tag/index.html",
    "revision": "bfd34c3b47a9fc0c6474422dd87475b7"
  },
  {
    "url": "tag/java/index.html",
    "revision": "ca06ac5562fec2e5d9f19860f30ca5dc"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "a89e789f70092285f46cc8bc7db85764"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "29e0571ff1ce3a1cf6b00d91a6726857"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "e955fb41cc7f0f7c2730f8a1a9c7c751"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "da60f81d614a40f46bc56fc384e93263"
  },
  {
    "url": "tag/mq/index.html",
    "revision": "ad21e0b86aaebf1042a1c8e2ab2cd6c5"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "bcb7cf1543b07f87d9e7a6dd0e61a0e4"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "9eb233529421454ac780c5518807f62e"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "78f64ab024d776bb7b8b702c82d46277"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "76b3041794a0a4f5e079047abcae4376"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "24ee990286c1cb18db3370cf4b498bf7"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "d422e82bbac05b601e4f23e25c56f57b"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "2ee97eaa41a6cd60f91810cefec9d618"
  },
  {
    "url": "tag/python/index.html",
    "revision": "b3c3ae8ef53035b3b96866f448ff3792"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "385abf6827b2c326de9aceabf4720ec7"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "176adec32c2357dd566ce3c9f7b7e8ae"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "291c610ebe89dd3cac84eb54c39bf6c6"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "d83268181a3bf14c2a5bd18780b507e6"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "cdce64afb7894f0e341871519186da33"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "7d5bd4fc2d61f4f651bbb6ef93201256"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "d831e0857067bbc6fde4f6d86a99971d"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "3f376015281eea79ce015db3f49ce60a"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "6c8a99259b7939184c4b22f3f5ead734"
  },
  {
    "url": "timeline/index.html",
    "revision": "ffa3f34f8e73af3a74b346ec3c771724"
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
