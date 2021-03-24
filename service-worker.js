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
    "revision": "72d668dbc4ddb36191955d34dc7941d6"
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
    "url": "assets/js/99.a101f745.js",
    "revision": "eb258a1cbdfac5d1543517b47bf2619a"
  },
  {
    "url": "assets/js/app.534f937a.js",
    "revision": "bda3a110ad0a877d692757a44b67937f"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/database/index.html",
    "revision": "f37065f16f82b9fed88e239a04ae8e6e"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "5acfe0f3a8a46e7751806a5c05ab4d6b"
  },
  {
    "url": "categories/front/index.html",
    "revision": "4c7d5eea12c332b17690c910da79f85c"
  },
  {
    "url": "categories/git/index.html",
    "revision": "ac464ee5be615eafc2cbe21d933882c3"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "7988faa9d9c1e7e7aed9b12f37d2a768"
  },
  {
    "url": "categories/index.html",
    "revision": "02ed3835820e1cbe16bd269f3dc452e0"
  },
  {
    "url": "categories/java/index.html",
    "revision": "07a871b0dcd18323cfdf2f21086e2f96"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "7a6e6d573cbc3ea7b31f083884c26898"
  },
  {
    "url": "categories/mq/index.html",
    "revision": "d125711f9fe5c721a540538a0263b703"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "158d7b0a7bd8bdf0e3ccf6326ddc077e"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "e04ce712cc3768acabb5719462ea289e"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "d3bb4c8ae117f7642151224121452500"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "da84d1e0d634972d15a1fc4deeb0a6d1"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "c248012ec10bd43177a3527271f71c00"
  },
  {
    "url": "categories/python/index.html",
    "revision": "97d07880ec16290c3704d7c96920a697"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "f363256ce6b5b9fca40e3945d315a042"
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
    "revision": "a52991988ada48dcc8b9c262825583ee"
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
    "revision": "c3da64b4e2e78dffe0d160321ef6c567"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "01f9bee576e52f97d37120fd73b3cf88"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "d0c7dfc58c433f0dcec99385db97ac21"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "d3c2a6570f3e3375073532146b5cadfd"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "aaa7526f63cfa236afeb5d1c29a2cbac"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "751da07280e57d377b98bfb2422abb3e"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "797b14796201c3ee8d7a842c2326ed91"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "ea2a625fd268d9b2581443a7e817a1a6"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "6d86968feb29b9d68af13e8641554eef"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "aad9a083fe0b0fc2f6e9b941acf03597"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "6d703204863247c4ffeaaa7f8714cffc"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "7e6658aca12537eead29acca3a9e45e6"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "fbdd51e79c7c950cfbc9cf726d87172b"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "1f48238dae7beb0f0bfa709eca59ec48"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "64d1a67069dda3e999acf0922cdcb31c"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "f5d5c5b5c51f3cba60693bdaef9c423b"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "56ad7c0f5572c51589cdd8cbe4ebc17f"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "ce27a877e3aa51c46836eaa69f4b7e55"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "20e61af45b6c67b752a9326106e00ca9"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "fe419e07528c83d26b59b6926ef69fae"
  },
  {
    "url": "posts/java/java-http-proxy.html",
    "revision": "ebb765d1d65f2619d0dd7e38e8181848"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "5c55edcdd614bcbbeab91ecce788c1da"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "e9b1e891bb9721cf68fbc6301b33bf68"
  },
  {
    "url": "posts/java/java-spring-MyBatis-Annotation.html",
    "revision": "ef288ed8d96d6be45ed4bfd2459a5265"
  },
  {
    "url": "posts/java/java-Tetris.html",
    "revision": "155be505bbbad430355d3636153ad3f1"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "bdf0822b34c2385dbd88a491bae94a02"
  },
  {
    "url": "posts/java/spring-RedisTemplate.html",
    "revision": "9743f302ce19b81e04c75db3cf771d9d"
  },
  {
    "url": "posts/java/springboot-schedule-task.html",
    "revision": "c6385b3b7b61da2c3054c2a877f11c26"
  },
  {
    "url": "posts/linux/linux-ecs.html",
    "revision": "4183d4e0e8eeed04984db2726b213a60"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "5bfe5f17d6ee8e3ac8288982c88498ad"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "d7b745749f356af964cfa80c20ecf3fa"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "b776cff199a445eea4422169a8eff27c"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "db5758f9ccb3649435525a163eb0d17b"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "097381e79e557bfb34b92316ad5f5c98"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "fe8c2b99eea97fce8afd770b4f853238"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "d4dde305c67155613692b02ec12860ed"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "e6eaeb3df4b042055ced03080324cdb6"
  },
  {
    "url": "posts/mq/ensure-not-repeatedly-consumed.html",
    "revision": "14e95bb7b165a4270b440f5b2ac901d4"
  },
  {
    "url": "posts/mq/ensure-order-of-mq.html",
    "revision": "1dfeadbf4c4079c4a28a8f00d7ebc656"
  },
  {
    "url": "posts/mq/high-availability-of-mq.html",
    "revision": "d34a186fb9063cb89365e82e635ce862"
  },
  {
    "url": "posts/mq/mq-problems.html",
    "revision": "57823bfa9a8a49ca58caf7454e9ac33c"
  },
  {
    "url": "posts/mq/why-mq.html",
    "revision": "7ccbba910df2bd57da11bebfb41ed8e2"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "01597b82ce10f26b0d043830ba5103b0"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "d0a44b0e9c5b9140596d1533fca472d9"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "629c239231fc5c5019ac2d35d6b7b302"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "dc4ea6421ebe7be8e03c62e8fb2be43e"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "006edb2489991ac8175bcf4534ceb7b3"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "c747b72695ecb8641bd270e6a9a3308e"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "db93e1ab780976078100e6529d661f5f"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "ddef40aa567f22a1f105d216b2195568"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "8a46acc1cd0b7bd0188db191c935214c"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "ccf84834c85d46b1876b70daa462cf12"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "27d725abc9e58c4f55fa40d91a572384"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "02d880c1b13fa1245bccd50edb49e64d"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "a3442106481bb322939e70bce3e5aa5a"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "4aa67ff5964c52f362e52992049cc29c"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "16cf2eb9be91a06c6c99a53aa23808c1"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "579b8ea7965f217bb59099c4759aec6c"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "af475d1cd841ab372aa59f4538f24575"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "091c22a8aa7f93e63f643d4f64cc3d0d"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "c08d5aa2c6da1b38d2cf0ceec785ae85"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "c199644b681eaf37f4d573b0d793bca7"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "c769eb3ceb3ee739dbf4760d15eb06af"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "0eab03086b6c4f373e1c5647968c5f7f"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "161437b70e8b0109a57f8e29ee55d879"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "71381a0ec701010f56ac3271c3412898"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "0f74bbe04bc24d773c045c0079762cab"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "e042631ec67440025c070e63bcca77e3"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "ba6a0d1d315dac4c75614fac5649ba64"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "06beb5eeddafc4ebda4ea0c9fc054061"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "529dc2ca70f01c8efa31b900a28762d6"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "5ccfdeaa4bd78c422917b0c802be720a"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "3eb5a12b4c3990887dec299a66e6a46c"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "094bc4d8015036211dc79e4ce7d69ea2"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "e19aa8d7b82ba5eca98d45665feb7d31"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "7b4b6cfd096d0e3d48f9f4949485f00d"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "e31a2e0e751063e6c1e81f97e74069b9"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "3c2b9a15a7e13894ec31a487265b790e"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "361f6fb66104b5bf891d81dff109d6bd"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "8410cb65ee439335c99a64a2c2440522"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "c180a0326e69a95e31613dd20396ccae"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "8834b454c4d7ec65a14b38218c71c0ad"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "775bf27809a6fe869fee505b240c27d9"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "3885585f50c2d7f4f4330910a81a4e3e"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "2fddcb8338c43dd241af257653775296"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "8a584aad62554a3fa9c0c9a9d8c0c457"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "9b18712cf767c673a98d062677458fcb"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "590c5c9f4c08fc412be481d30d392718"
  },
  {
    "url": "posts/python/whats-new-in-python3-8.html",
    "revision": "8c899c517e9b0af7318ab8e25740421d"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "6b1f2156255902df6685d13cb41cc27f"
  },
  {
    "url": "tag/api/index.html",
    "revision": "c02c623411682c6b5b0439ae65332dfb"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "cc2bdad93159bc9dc16d7de4ec35c1c7"
  },
  {
    "url": "tag/context/index.html",
    "revision": "5938688ce54157e160e099e8c6ae2ea0"
  },
  {
    "url": "tag/database/index.html",
    "revision": "0f339ae9e750250fd2ae586df93b8b20"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "c4bbfc12a85911d83bbe6e8080c22ba8"
  },
  {
    "url": "tag/git/index.html",
    "revision": "d342626710921091a5cde6f0809cb1e7"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "39b8a1abc0b1311b2016f876dec6694a"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "ecc702f26199f8ab2c6e0c69a9752cf5"
  },
  {
    "url": "tag/index.html",
    "revision": "47072d504c2ecd29be9339312db6dc6a"
  },
  {
    "url": "tag/java/index.html",
    "revision": "0c6cdb92dfc41ad7271bae9ef69d478c"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "0911ecdc73b2fe74fac2b97cd1b1dbce"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "8f758aaf7d103ec3e801ef22fcc3779b"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "6bcf8c3582d9d599801400d828ed2196"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "9f27a17ba53f7437a6938b7da2f9ff1e"
  },
  {
    "url": "tag/mq/index.html",
    "revision": "79defd738a41bd19c17621034b52d4f2"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "cb04838f5d52891dbe3ea6841ab591ce"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "150e73cdcd7573dbf104dd611766c119"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "71c3b4d33263a8915e8fc1fea3fc6223"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "c807703d4439062a5a07def33c62b69a"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "4e296481616e7b3f43e17dbf3ee635aa"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "0c6ca912bc5b9371b6eb9951e0d9932c"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "feb3587a2f4d5c64c4d9fae1de1d1c66"
  },
  {
    "url": "tag/python/index.html",
    "revision": "bba1749b0e5904ff3095274db64f1e94"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "b988c47861529270b5dde25bf05c4ebf"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "58201121a600a409858e577fbc04c477"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "c936e58022fe96d8914e41df2e5cf92f"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "de23267044266edd84397259f959a4b6"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "d6ccf67e39385e533c876c5a0dd7c56f"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "4581ff905ff8bfb5de1a460b2384126b"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "bb9aadfc57da6faf9ef63d6461916187"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "d3ce272f5e6c30262daa977d930509ad"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "d83cf5c565d55165a7e1abe281cf27ec"
  },
  {
    "url": "timeline/index.html",
    "revision": "e76e5991ed597826dfc5ec3b47ddb654"
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
