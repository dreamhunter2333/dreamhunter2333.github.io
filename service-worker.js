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
    "revision": "93bfab8044c3a6b60b2a7e54bca30195"
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
    "url": "assets/js/10.7e361f85.js",
    "revision": "af26ead8e7504af67268556473010180"
  },
  {
    "url": "assets/js/11.4dc8d956.js",
    "revision": "765b5a56229e2578ef8bd0f916d881d7"
  },
  {
    "url": "assets/js/12.11892371.js",
    "revision": "257af3d017c73579e1d3f147b520e4f7"
  },
  {
    "url": "assets/js/13.02452643.js",
    "revision": "9116e72e5e19a6a3007369341efaa647"
  },
  {
    "url": "assets/js/14.b0957f34.js",
    "revision": "a123d38423b32564c58f68dd51acce87"
  },
  {
    "url": "assets/js/15.86090be9.js",
    "revision": "c62600960e45ab7875705c4621420d5f"
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
    "url": "assets/js/19.1a2bd6fe.js",
    "revision": "a014090c365f96d5de9a8d7d8d4e4d1e"
  },
  {
    "url": "assets/js/20.9732a0ce.js",
    "revision": "e7c0fce8ea2579b6c8aceae01bde025d"
  },
  {
    "url": "assets/js/21.2ad96bd3.js",
    "revision": "85416c36d276a15ae6da34fdf3b3db11"
  },
  {
    "url": "assets/js/22.bcc7f28b.js",
    "revision": "b8e00f5b19cc3586f6424b37cee77b6c"
  },
  {
    "url": "assets/js/23.4308c48c.js",
    "revision": "f7cb9959e46b29a21a1225f59f1d2b89"
  },
  {
    "url": "assets/js/24.09eb1543.js",
    "revision": "9fc19125748c0743793d27696a68f45d"
  },
  {
    "url": "assets/js/25.5b4fbc5f.js",
    "revision": "a66621fa36436b03fd0875190a500ca4"
  },
  {
    "url": "assets/js/26.fc2b6f3c.js",
    "revision": "da6f6e6d57753dfbcf204796f73badc6"
  },
  {
    "url": "assets/js/27.b63c3b8b.js",
    "revision": "a4f3305bac703d575d86d8ee076117de"
  },
  {
    "url": "assets/js/28.c3127d0a.js",
    "revision": "b6a542137417eace8b47826efef6e2b8"
  },
  {
    "url": "assets/js/29.f9033801.js",
    "revision": "aa7e2638a484d215bf416ff27f5560f3"
  },
  {
    "url": "assets/js/3.325ab0a6.js",
    "revision": "8e2d68ab952c10bc7ef0874e6dbeedfd"
  },
  {
    "url": "assets/js/30.62b837d2.js",
    "revision": "c6f38a08a3840034406d0c0a48a165f6"
  },
  {
    "url": "assets/js/31.4bd93c0c.js",
    "revision": "5306316044ed85755dca03a1cdf2498c"
  },
  {
    "url": "assets/js/32.27aa09ba.js",
    "revision": "955aadfe3ea890072069e5d4b227c26a"
  },
  {
    "url": "assets/js/33.3cf9d24e.js",
    "revision": "09db34fe15e626c2d640b0847f9a8ade"
  },
  {
    "url": "assets/js/34.4e53fe21.js",
    "revision": "1ed0fd2603d8a8f0f4e5bab9dae4f4c4"
  },
  {
    "url": "assets/js/35.6d19c0ae.js",
    "revision": "e524642ee3486bcea0100972b3e20dad"
  },
  {
    "url": "assets/js/36.7faaf3e4.js",
    "revision": "4710a066afcd08524901f013b1a9b1a9"
  },
  {
    "url": "assets/js/37.63438264.js",
    "revision": "3f820fa850720c3c285aea4f7823d782"
  },
  {
    "url": "assets/js/38.ff275e33.js",
    "revision": "aec343142847438ddad6916c525555cc"
  },
  {
    "url": "assets/js/39.3e08d0c7.js",
    "revision": "3fd47cadd1bb726bbfc9198a93d9dbd3"
  },
  {
    "url": "assets/js/4.96a4f898.js",
    "revision": "a14bf9ad47183792edbede46a86dafc3"
  },
  {
    "url": "assets/js/40.660ce245.js",
    "revision": "a2ad1ce010888363f85d16c8781f38fe"
  },
  {
    "url": "assets/js/41.15662f9d.js",
    "revision": "92595793e255dbebf33014bb751d2560"
  },
  {
    "url": "assets/js/42.a870e3fa.js",
    "revision": "06a039b937415878ab33f05db8a5ec8c"
  },
  {
    "url": "assets/js/43.bf3cba85.js",
    "revision": "7e2625cbd611ee165f158d251c2ab517"
  },
  {
    "url": "assets/js/44.64af234f.js",
    "revision": "721e0ce19e414ca7d978615360c3daca"
  },
  {
    "url": "assets/js/45.dc0a4b6f.js",
    "revision": "f9a5ea91d17b8df3d75fcd36397cf1ac"
  },
  {
    "url": "assets/js/46.7c212aac.js",
    "revision": "087d77c436088a1859eea1efb711a544"
  },
  {
    "url": "assets/js/47.4806c1ab.js",
    "revision": "7b870515bfc48acc7a4c7d2b122633e4"
  },
  {
    "url": "assets/js/48.7d6b69f1.js",
    "revision": "6f117cc0fef509735782e0d08984ddda"
  },
  {
    "url": "assets/js/49.1e291d1b.js",
    "revision": "cb27559421be98df0f1ecf72340a0955"
  },
  {
    "url": "assets/js/5.73c3b6dc.js",
    "revision": "0b94b5effa1fea40d59b4d6260a8d069"
  },
  {
    "url": "assets/js/50.74087e36.js",
    "revision": "deeb45bce9855d5996d6fb2a3164d275"
  },
  {
    "url": "assets/js/51.65be8c1a.js",
    "revision": "c3cd02f4137b1363ec0209f9c3718188"
  },
  {
    "url": "assets/js/52.63aefbc2.js",
    "revision": "fa4191ab68d9bfab6d1177c365a10a81"
  },
  {
    "url": "assets/js/53.b59dd874.js",
    "revision": "8d2fe0e90c5590620f980e26c389ffed"
  },
  {
    "url": "assets/js/54.0668c57a.js",
    "revision": "382567021b091f67f6a0ab899bd98ae7"
  },
  {
    "url": "assets/js/55.029b5a33.js",
    "revision": "fe621024da908224cb3a4abdc10572b9"
  },
  {
    "url": "assets/js/56.dea062de.js",
    "revision": "ed3b5793ef5ef55429373b8171ab0056"
  },
  {
    "url": "assets/js/57.69d7ce6d.js",
    "revision": "e06ba04a1e0f55571dc4de1e4956b439"
  },
  {
    "url": "assets/js/58.a0795d46.js",
    "revision": "718fa79b3672d1a5e3d5765a22281325"
  },
  {
    "url": "assets/js/59.ae12fdca.js",
    "revision": "1a0d427ead2efd614ac0da426cf3c2f0"
  },
  {
    "url": "assets/js/6.e89d683a.js",
    "revision": "229e84a6a54550b160155f2786f7b13f"
  },
  {
    "url": "assets/js/60.fc3a1fe6.js",
    "revision": "bb012917c7b8d1c04a64d214f89f3aa7"
  },
  {
    "url": "assets/js/61.6d9ebc75.js",
    "revision": "d751153073aaa628c3aaffcfdd2d9a8d"
  },
  {
    "url": "assets/js/62.d3e0e257.js",
    "revision": "7303ea8c237d02f00c5c72d8452c1655"
  },
  {
    "url": "assets/js/63.3b010a3d.js",
    "revision": "74d2c20217a26b367d43139b42b1aae7"
  },
  {
    "url": "assets/js/64.db06bb4d.js",
    "revision": "c8e7d9b04c9458941ff1291826cdf241"
  },
  {
    "url": "assets/js/65.d71e5274.js",
    "revision": "82e5dbdeeee10ff34c98a4c01a31fa8e"
  },
  {
    "url": "assets/js/66.2b85f016.js",
    "revision": "f3a68045eef1467aaafaa9992c3b041a"
  },
  {
    "url": "assets/js/67.53a6297c.js",
    "revision": "b07c20c476f5d664c9255f8013dbb1ce"
  },
  {
    "url": "assets/js/68.9386680e.js",
    "revision": "3a736e15163267ce01a9a534edd564fe"
  },
  {
    "url": "assets/js/69.6fc9ac21.js",
    "revision": "19b214194eb2c32c2a18e1f64cff2fe9"
  },
  {
    "url": "assets/js/7.8280eee0.js",
    "revision": "efc73350b82bd3d40d82f81a25765d28"
  },
  {
    "url": "assets/js/70.cde72a66.js",
    "revision": "c537ec1e9550ddf09e9b596e58189237"
  },
  {
    "url": "assets/js/71.dcbe4ec2.js",
    "revision": "9b3c0028d8cc77dab862d0f6ba58babb"
  },
  {
    "url": "assets/js/72.9f4204f1.js",
    "revision": "66cd52225a02ac62dd62337c14095032"
  },
  {
    "url": "assets/js/73.0e226874.js",
    "revision": "284fb6adcfd1999e975870cb3e3d7f2e"
  },
  {
    "url": "assets/js/74.c442c14d.js",
    "revision": "d226aa278e23f9f9cdcbb9648ed3115f"
  },
  {
    "url": "assets/js/75.14b201ad.js",
    "revision": "37adfb6cc63a21a3422ee00a54926ee1"
  },
  {
    "url": "assets/js/76.4a4221ad.js",
    "revision": "ae7be153cb2af4fd09419e2adf373c17"
  },
  {
    "url": "assets/js/77.1c884072.js",
    "revision": "d40722720641af6d81029b0bb250fb39"
  },
  {
    "url": "assets/js/78.eff2accc.js",
    "revision": "039546f75fe4e54832f96fdfee1ab67c"
  },
  {
    "url": "assets/js/79.4a422833.js",
    "revision": "d3182aa147e6765cb2d4e8f165ed2533"
  },
  {
    "url": "assets/js/8.e01a9257.js",
    "revision": "bde1cb7bbae54bb1a1cf6aaf04ade8a4"
  },
  {
    "url": "assets/js/80.986f9f66.js",
    "revision": "21147e674c9d4e6c5675e1925f3a6f35"
  },
  {
    "url": "assets/js/81.aa3f90df.js",
    "revision": "91cb4f970c95762fcc438492415074a3"
  },
  {
    "url": "assets/js/82.5e60d2f2.js",
    "revision": "4e341177ad350ee526e8696d867a3553"
  },
  {
    "url": "assets/js/83.cea6661d.js",
    "revision": "bdeb42bdcf504d5557c3af8ad46ec1fb"
  },
  {
    "url": "assets/js/84.0f1c3d25.js",
    "revision": "61e5d4a14b22e0f99062ba3e7b96cded"
  },
  {
    "url": "assets/js/85.43a69731.js",
    "revision": "8ccedc9d651353f1b21cb29e5d4af719"
  },
  {
    "url": "assets/js/86.a2e1c290.js",
    "revision": "ff6393c1857dc0b3a7b9a668b21c1d84"
  },
  {
    "url": "assets/js/87.00313f57.js",
    "revision": "2668d34070b7b15ae39ac8b40c67f007"
  },
  {
    "url": "assets/js/88.94c78d40.js",
    "revision": "f25776bbb9705ea0186cabbd68b8056a"
  },
  {
    "url": "assets/js/89.aded6eff.js",
    "revision": "b11e0abff56ba0853dffcd0a901eb9cf"
  },
  {
    "url": "assets/js/9.9eac863b.js",
    "revision": "fc7469e5da4f47fc22e35184e41547d8"
  },
  {
    "url": "assets/js/app.abcb3384.js",
    "revision": "c6f91e8fb1321dd82db10aad500500a7"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "74fbcd50eea21520427f101720ebf998"
  },
  {
    "url": "categories/front/index.html",
    "revision": "7520543fd2cbab827e82820f857eecb4"
  },
  {
    "url": "categories/git/index.html",
    "revision": "d0feb771a1026f83fd850affaff47e7c"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "f1adf613ca05e061812043790b4a1832"
  },
  {
    "url": "categories/index.html",
    "revision": "f55e68714eb632e78e6c7712036588f3"
  },
  {
    "url": "categories/java/index.html",
    "revision": "9c2e2ce4276f0c5bcab6c0e3b323fa50"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "e929df8e625f94a4895465241b683b04"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "454dc29a6dfb981f7c78a253c94ccecc"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "f2f5db1df5402e759fd8282ad341a15d"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "14647cfe7bd6e48b033092828fbd3e08"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "eaa945c33c41625f31289f236c7eb871"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "d63941c8b4cc4401850c8ae035d619df"
  },
  {
    "url": "categories/python/index.html",
    "revision": "34fc5f4b7185cc425dd2f01360e8a50d"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "5a45f061f60b5f60320f1aba85f11a99"
  },
  {
    "url": "categories/sql/index.html",
    "revision": "5d042451373e41a8364cfc68e97a179c"
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
    "revision": "0958db362f46c0db7117c357514c32a6"
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
    "revision": "3a0d10dcb4d3ee4c79e75d891cbbf074"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "6184d856e3fa182827dc9d6648b68647"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "3c8e207c7c4e07b3bd9ea9557368b6be"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "4a57bcd8f3355ddc7d61d5430e2f9580"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "5d4a0f71140a85172af7ff921d50636a"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "fe9c610927d1bd2baf4ae7225d2d1f12"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "9d10e4f21933540887b0cca41aa058ca"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "bc71dce6bc9e5d13e929907bc58ad13c"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "9325893123738c2ca772f5bbe0f43050"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "5654c16a522913a14969ed2fe2dda51b"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "056caaf02fefa39894f6f20cc0d36d57"
  },
  {
    "url": "posts/hackintosh/炫龙耀7000 hackintosh 全过程.html",
    "revision": "d905259b641d1ab2b7c4316c72143b5d"
  },
  {
    "url": "posts/hackintosh/炫龙耀7000-hackintosh全过程.html",
    "revision": "d905259b641d1ab2b7c4316c72143b5d"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "6f1e7d69a42b2afd46fa89542919d239"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "0228cf87811b74cd89e11ddd8cfb5e95"
  },
  {
    "url": "posts/index.html",
    "revision": "cb70f0ee9705a285dd6e584d695f3b2b"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "610e59a7064814cb4cca45550bf95a9b"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "f0f7c8d8ccfad1de50388f31df6fe31c"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "7509ae37acb79e6cf12a10dff170603d"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "888739b9be5711ae3aa2f6402b2f66a2"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "e4ad10059e66111329158043a570836d"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "12cca8dbc75d4e86955d49db1f8f9c5e"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "99caedd119f9b7687f251d0ea3080789"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "e6f1c7e20b1d9b4362aa5e1333f9d2e3"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "2dccff303e238426f2f430734597e8b6"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "f456e1f1c94f199ac1bc38a9f5f6c67b"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "8d8de6107fa0844156663e3212ebd94a"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "01748f4ed6c6cae183399bf3ef09e899"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "88bdc63a168723dff4f11de155b044cb"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "7aacd80bc449ea5e269765c552302939"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "25dca229e28c170590ce555b11a88755"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "706e805bc6076f3af2265df20fb37d95"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "179096844dc5e865be1db1e0bac69cb7"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "12940e2d38cb3cb11e1265f7709cd8dc"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "0b00f3b89aa88866abb8718cad6ee024"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "dd366d033c3e0de6cd339e5d760ef3b6"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "2ef89ef0bc5ac9f63e41a8f854dc11c1"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "ea5bbfe1fbf0538f4eabc187f0b698fa"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "b2fe9cf625fd6e6c8f32ae7fbe098857"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "88eeaff8d9a3027d62d7532c9e14cf71"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "141c3b6be9d0a83abc82d0ddc24b3972"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "986028e77fc44eb6195602bdf878aeeb"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "c78e3bf7ac6c1abbefe76b7c1ea07603"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "83f6426101d50cd983f0b0c829194558"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "48d559162c39a6a35aebf9ea69a5c727"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "d49398cf75537ca0521b89aa5582a83b"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "706d4b1ef96e220426587d075fb54272"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "d70ab32486f8ee6dba8a1add949fed99"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "bddda54015e05f5c55d3e63905903493"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "27fb40e7a9024634f0cdd480cefbf0e0"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "61337adf5fd7a88b2ce8d8ed8844d57c"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "33351fdc4f88bf398df8c89d214a5d62"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "6bb5592c8129686685dc48eaf27aca9b"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "d8519afcd4b9d63513fa50f37f66ba6e"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "cc985e59a20aacf6d5a88caba560f332"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "79849bf4e9f74c8f27e0202fa73598ea"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "640ff4782551f9f590d85e7d28af65af"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "b8c700c6b16a8de5a7433f9d34669a2c"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "60ec31e1482890b64e50b626ae1bcb34"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "2e20149b3b178cf2b0d6e235b4fddc72"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "b8955e1423b146a3cdabede8d81bcae5"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "c63f7785db5551b7d4d929d758d17e84"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "94a11db52ad37864d84bb9822cd6e155"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "d6e6a1c3c1a2033abd6489901dad2e11"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "8a80ada24a47ad63e878d3e2410e2779"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "879e539591cbd81ccf8bb768194cd1aa"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "4dbb2b0c7a7ddaadb5a2a6a811f4abf3"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "67f765fe63214b170234f16cf07c1354"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "61fd405170c56405db0a9446e2d4d642"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "7d1b4a90f93f34c4fd56deb2ea041fa4"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "6848caa34efdafe4e4ad229de811313d"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "176cb5577dbbe97255b74fe710643490"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "fe9c15e6da0b95ef7d3b44ef2a0f5405"
  },
  {
    "url": "posts/python/what’s-new-in-python3-8.html",
    "revision": "b6aa0a5604784eefab94f404f2c098d9"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "646769bc742a9f398d442f41bd9bd02f"
  },
  {
    "url": "posts/sql/SQL-constraints.html",
    "revision": "4200b510b7870b6c6f14d863adf6416a"
  },
  {
    "url": "posts/sql/SQL-NULL-Func.html",
    "revision": "a47329ec5fdd2e4dfcc8a1e2bd64e002"
  },
  {
    "url": "posts/sql/SQL-statement.html",
    "revision": "69ae8655b195768d197f8270f146ad43"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "62f8648e4ec7bb7f71cbbb916951f6c1"
  },
  {
    "url": "tag/api/index.html",
    "revision": "e66912f353bd8cbbb691934bcd160bfb"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "8692302339009dfa644736241b184ef8"
  },
  {
    "url": "tag/context/index.html",
    "revision": "264f4b6ac76a0c19bc0eb472742b25de"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "7bd8190aee7e817e084e5b6574036898"
  },
  {
    "url": "tag/git/index.html",
    "revision": "937463ea8ae3907c7f22d95a326043a0"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "a0035b7534733c5ac8dd5e713a4dc2e5"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "0067d40a19675fc7a254efb019dceda9"
  },
  {
    "url": "tag/index.html",
    "revision": "d5eb8905782fa322f25194fe3f9c3bb7"
  },
  {
    "url": "tag/java/index.html",
    "revision": "f9b17c682d666ef14cae5f346d207f61"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "b3eac05a61cc478ce25999179c7abe15"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "67dae1787e233ed4d58db521568ff708"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "747b82d3332b1725721de680d931c099"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "50b60064a4a90d14392fcb3bebaf07de"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "783595333cda3ca639bb0c80005775da"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "0a6d5f6a526db083472c50058d4ce124"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "eaf450a4bff7e19aa5e6fe34e45d2468"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "35548501fdc51689a260cbadce9f640a"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "8f6145943c50b7216f44d4331a2db107"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "a64f403113490763f9823d40bdbca668"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "87c1f61c28ebe7d2fe260afb21c1672a"
  },
  {
    "url": "tag/python/index.html",
    "revision": "140dfb93a049a2bde6544d1e2836f274"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "41af15212b7aa73ea2ed56dae1d74381"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "f15bac7e547ba0d938d878944271419a"
  },
  {
    "url": "tag/SQL/index.html",
    "revision": "db4bb9a2fd5d148e258f33b3c7c266b2"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "13f2acd29d3633c29cf8d67850cd89ff"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "d004572c03713a29ddcae4b7ca8fac34"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "0a77702b825adb8b63db6a59ee20002a"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "b041da86c7817fca1fdc3d2272611a66"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "285681df9283bb9c0cfc0413f61df708"
  },
  {
    "url": "timeline/index.html",
    "revision": "f57cd3f1bc9eeddfcdb97493b85486a4"
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
