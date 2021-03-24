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
    "revision": "0fc50e5c4abfbf12b6649405fe502f27"
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
    "url": "assets/js/100.34c1a950.js",
    "revision": "8656ca42269b67723ce2c654c9d88d20"
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
    "url": "assets/js/14.73d943a0.js",
    "revision": "1b42952b7113acd80a3c329b3344e0cb"
  },
  {
    "url": "assets/js/15.4acafa1b.js",
    "revision": "360cec26d94ca4ed52fbd8be91370e47"
  },
  {
    "url": "assets/js/16.e79ee64b.js",
    "revision": "cf9f3c8cf74800e41c973b7b30c49767"
  },
  {
    "url": "assets/js/17.888749c1.js",
    "revision": "aee34383128cdd3cf5c082bee3010857"
  },
  {
    "url": "assets/js/18.493f9ca1.js",
    "revision": "6e6649827a2b3604fe59f4f7487566b1"
  },
  {
    "url": "assets/js/19.383e19d5.js",
    "revision": "28f700769f943b7f2fa9314ddcf49082"
  },
  {
    "url": "assets/js/20.2b13c347.js",
    "revision": "3255f56b2bfad630d897429999ceec16"
  },
  {
    "url": "assets/js/21.800b9d37.js",
    "revision": "61952335014f3ead6265cf34fdce58d2"
  },
  {
    "url": "assets/js/22.6de6fb09.js",
    "revision": "88a354b0fc80d143d76f11b08623f530"
  },
  {
    "url": "assets/js/23.5de77d1d.js",
    "revision": "de9c67620123b579a160ef002ab69363"
  },
  {
    "url": "assets/js/24.0f1c636a.js",
    "revision": "1b5120d38b004083f7ecbf9c1798c4e4"
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
    "url": "assets/js/35.687e1e5d.js",
    "revision": "06667f9784c8639311cf681c5dabf3bf"
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
    "url": "assets/js/99.b90323b4.js",
    "revision": "66d2cac990faf779e575f2ab86ac1433"
  },
  {
    "url": "assets/js/app.483d3956.js",
    "revision": "007779f7a119d8730cecff898d547da7"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/database/index.html",
    "revision": "49e07231f06095967ec8a89f5adcc260"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "33f3efd94d9bcf83f29e39585853ada1"
  },
  {
    "url": "categories/front/index.html",
    "revision": "9433503c0912d88959635817a8b978eb"
  },
  {
    "url": "categories/git/index.html",
    "revision": "99b8ffdeea4f3aa278d804ca922724bd"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "24d06e3b49ca470c40030894c299515e"
  },
  {
    "url": "categories/index.html",
    "revision": "a411a5a25ade7812fffde5e3248b6a89"
  },
  {
    "url": "categories/java/index.html",
    "revision": "a398aa4c142d08db0de0669b8058fd66"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "f4f286adb9044d69825771767d13d4df"
  },
  {
    "url": "categories/mq/index.html",
    "revision": "e60dd64ec26cf99994467428b145fd6f"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "1c6b3d290e7ae9f7c2b8c3ba1eb29edb"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "579d8ef1c1f2d79f99182c3f0e18371d"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "5be021b3fa95119ab1d43c5227da046f"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "6b5e704f13b9619f1aa99f81824922d9"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "79efae69c8e199b359535410ea08b7d1"
  },
  {
    "url": "categories/python/index.html",
    "revision": "4410d27996d97a215c1eeb61fce848f2"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "d941a356f8057728a5973b096f7bc88e"
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
    "revision": "a4456df0d41cc1f3cc878b755f6fa968"
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
    "revision": "4450c3fdcd318117ae02348bc9e5ac24"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "65b4f19551c33c533a47512d0635c8d5"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "9d732ddf31777dc62baceb442263baeb"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "c7571a20793cf2adaaf4b9eb52bbbe89"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "44aca260b71d93b4cf92c2f0cfb1847d"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "f57ed41afec06acbeb6018b1e12706e8"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "072231dbd033a5efd30506575dbdc9e7"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "fb118f531f363811b69e066e6091a277"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "c44ff4b946589909f71244fa73334dc3"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "75cb33947e3fba3e885dfd6fe542ba76"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "b086fd9206067465ed9b6015c569b4e2"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "9ab03a45584298843d56906a35314968"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "25b3e947c51aca1e53bea30f60d9d128"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "19f93ce40c14b4481a09c47fc854a72d"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "d366b1ce4417763410d3f52b649f0900"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "abf410ccaab9139f7f40124cf9587e6f"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "afe148b9ead9564357e3e22408354c05"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "d2f03e5ed63c6a52b1962273921c14ab"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "611e88070af36fa6f3c4ebb07df40253"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "9165c6f52c33d5ac02b8f023a0f6dfdf"
  },
  {
    "url": "posts/java/java-http-proxy.html",
    "revision": "ac362ad06b36dbf785d34c5502bd9c31"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "bd1a9c6b638b4e728b49de48e2262e2e"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "e1065045d3730a0882e6b7b9129b529c"
  },
  {
    "url": "posts/java/java-spring-MyBatis-Annotation.html",
    "revision": "4f666e0eac730492e566ce03449897a9"
  },
  {
    "url": "posts/java/java-Tetris.html",
    "revision": "a58652e918319fca5cc31fa33ad6040c"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "8a516b56b6d8df9c74710dd27bbba564"
  },
  {
    "url": "posts/java/spring-RedisTemplate.html",
    "revision": "52db32e0a74d78d1e140af2de7a5ea0b"
  },
  {
    "url": "posts/java/springboot-schedule-task.html",
    "revision": "0349b3f3a1c07a82fdc019c9c4e45468"
  },
  {
    "url": "posts/linux/linux-ecs.html",
    "revision": "45823aafe7c9102fdb2795a58f380d28"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "692dce521d7286203819382fec84b98e"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "262ef00af767405ae0e655f17f4e206b"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "14e86b7e093c0b3f101a2f55de6566e1"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "ac5c64fcafafad047805871c22584668"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "5b2ec76119f4035895756aa99ed3dcef"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "a3a88a9486c75034ae221bce18ca780a"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "d299e5e38963d80f4ddce3551db0cba3"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "8b75ab7416f834de3c0d760fcc0bd47e"
  },
  {
    "url": "posts/mq/ensure-not-repeatedly-consumed.html",
    "revision": "c1828597538df4b76531833d7b031a2e"
  },
  {
    "url": "posts/mq/ensure-order-of-mq.html",
    "revision": "5106b4bcc50d59d8b0b0ffcdcb7af2e7"
  },
  {
    "url": "posts/mq/high-availability-of-mq.html",
    "revision": "b6e587ba73fee547fda14f841281ee4e"
  },
  {
    "url": "posts/mq/mq-problems.html",
    "revision": "7db0d6b4f573aaf212deba90e05f41dc"
  },
  {
    "url": "posts/mq/why-mq.html",
    "revision": "bf5c01e0251a5131c3f32ff0383a5e49"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "585435ef1ab1a73dcc6c47e089b96ea1"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "1d88bec7a87cf838e8598ef19d5aa7f7"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "f9e62e9758746168bdb97e2c8facdc75"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "a0f626b2d1c1a33566ad028c486aec1c"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "6618aaef7ecdf7af35b5e4de066d4a22"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "79c4553406f757c7753949cbf4ab7985"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "352d9133d3bdf68b26df56a18f56a71e"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "d731ea90da2571b88199b2d6fd3e8e4a"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "6eae3fa23e7ddbfa7e14af094de640c2"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "f3cde0e714da7efc9c52762afe113e53"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "5f2c9c652d7c6d62c8bdfc89e0c2ed7d"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "6132797b1b61af807d0a22b6195d4e54"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "7b262afce425f42f12e0ed7437df48d5"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "b6d1b52c52f6ada267e2fb6bc7bc5cbe"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "ea2cf2199fb0ca5a6303eabbcde0ce4f"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "fb69201ea5a6aafc3d1bf81d9aaa1ce9"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "36bec50bc1bf1e61af9b4e1a158e13a3"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "60ba56ae42219ee776870aeec392b8ca"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "eb5f4b86dc203c616831adb2aa31c7b9"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "37d2e258e4534cef34e23f287fa1d6bf"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "0a9d159e3f56314df310a4fdbd03225a"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "5b43e6dd30ac68dd9ef7d207ddcf12dc"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "75400ac3bde0806e8c1b39f07d032eff"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "211f261f17b3d4d6e5848a22ff8c43ea"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "a7420acfe3a043de0a5f75cc97097b35"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "ee78273413e2f9dc10bf0b7e84d049c6"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "624a74c2b5de3b791736348ce3c26db2"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "c35822909a79b64c420f3479093f6bc2"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "1e6ff762e5c574240b219f11608dfab9"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "d378142ac5ca17ab86f1ba26e9a3b081"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "a19d06bc2baf898b0aef05ff8a200bc3"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "cca25576c7e7932ad3382a270575e4bb"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "6c219b09792ca7799865acadefb682c2"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "3f70441e307f3b77de1da6ebc9db08c8"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "00a46c9421ebf1966e2483336fea756d"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "1f49fe3243dc4e3d5f6f1a044615d8b6"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "d8b235cb218979f04db1b1b804464447"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "0037aedbca71dd0e9169c961d707e08a"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "e018fc188bb761e7128719771c1757a4"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "009a53d3315016965141d9ef4369ed41"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "8c24628903dfa98fbe773834a47f94b9"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "57a40fc8fc96233450be0d3732d0bbdd"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "1f18b5fc04df72515ce3da60ac7fdb5b"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "5a68eeaa0410acd090c57ed6e11bca86"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "6126edcca6be902a5e39372a318c53a8"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "8d53a29c309829eaeb905ba22d9e305b"
  },
  {
    "url": "posts/python/whats-new-in-python3-8.html",
    "revision": "535c91dcb97da0503a79c7216ac85e12"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "fbed35e54e9bccec2a498a1d0d004424"
  },
  {
    "url": "tag/api/index.html",
    "revision": "19730a3760aa9e52c3a24bbcefcbbe11"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "6ed3de65fb5604ec02dd4f25b7e6b432"
  },
  {
    "url": "tag/context/index.html",
    "revision": "034e36ddc35ed0d253c41c6529e0ae2a"
  },
  {
    "url": "tag/database/index.html",
    "revision": "2f191e3f024b96bf09ec8e2929f1562a"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "4642baa41cb8426435ed6c6929d3f6bc"
  },
  {
    "url": "tag/git/index.html",
    "revision": "aaf5c936c1c44d615b35833a1155f42d"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "17d105f2406dcb8a243dcb2be824744b"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "c23bbfe6ebf97a958600c522b375c189"
  },
  {
    "url": "tag/index.html",
    "revision": "8eae1539fcf100a355dde796c062b4e3"
  },
  {
    "url": "tag/java/index.html",
    "revision": "a9c1a4d0ac9b45c2c04877b2ac9ec6ac"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "3cfdd56ade91369aedddda9bb3d708ed"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "c3c25ec486aae1efac0472df4cde1faa"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "33f72903b5a968b840040a41d20a2e6e"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "4d8eb6e69ad7a3c9810de1b4fabfab92"
  },
  {
    "url": "tag/mq/index.html",
    "revision": "8aa0287e0d270a37514fed4bbc0326d1"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "a2b2e4589508fbfc72b22a27007547d7"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "b4ca599369a7c553244896020b25f3a5"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "72474f6a91621222f529642543711c96"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "595fb99619eac405830954b8c724ab67"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "77f89ec829080418fdb3f9f57839b779"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "95748ffea3445e7e39af852851c46f53"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "b4a04b3b4b0bee0a81d6101699f70180"
  },
  {
    "url": "tag/python/index.html",
    "revision": "eb5e33c8ea959ffe0d8ab42a850506c9"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "02cec2c97172d76693c3cea64d5c3aef"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "24c22af6eb14e9474d7ec3925e3b0c4e"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "92f24009a2b964346c54351d6478eb46"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "3da0436e0c63e6aac2b642c9a8114a99"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "052ee5c4581df430bcfbce2135204257"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "ada3175a13d05bbd5ca45886b3081081"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "d26e46843c13ac5b3de9c48a51c777c0"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "4ce5ef942697bd59b6b2380e1fd05b41"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "fa061b95710502e6e8d7097246161ee1"
  },
  {
    "url": "timeline/index.html",
    "revision": "d14b47484533d2082c7276757cf0f97b"
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
