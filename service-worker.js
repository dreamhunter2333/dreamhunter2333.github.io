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
    "revision": "4188e32cc0356564df759a948376b630"
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
    "url": "assets/js/100.a7a9535d.js",
    "revision": "5d4fbb4d0fe1f13b91ac21c167d9e770"
  },
  {
    "url": "assets/js/101.ae1db25a.js",
    "revision": "68a30e5c194aebfe9534c2c9b5c80aa8"
  },
  {
    "url": "assets/js/102.db34741d.js",
    "revision": "96216b844f63e8933db7c9e414a51d7e"
  },
  {
    "url": "assets/js/103.0369ade7.js",
    "revision": "0a4d011e5194f3f2e7a4a73f9dd6bbd9"
  },
  {
    "url": "assets/js/104.0117614f.js",
    "revision": "13a3ca112b71d59e8ec3f2a06a41a6ff"
  },
  {
    "url": "assets/js/105.aee4676b.js",
    "revision": "451fc6bf3e2e39bc39217e3a6891a1a0"
  },
  {
    "url": "assets/js/106.bf2c8d0c.js",
    "revision": "bad1c3be821017a5bb9d67399dbd773a"
  },
  {
    "url": "assets/js/107.b49e9dc6.js",
    "revision": "7e20609123880bbcc833e4e41f2bd48a"
  },
  {
    "url": "assets/js/108.8971978b.js",
    "revision": "aede9b529971f1ce6a971b6f74b68b3b"
  },
  {
    "url": "assets/js/109.a1a18573.js",
    "revision": "007209fade0d67225021502fab73624e"
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
    "url": "assets/js/17.aa6d54e9.js",
    "revision": "f65ea40c84ccb931acf65cb0918076f7"
  },
  {
    "url": "assets/js/18.39715288.js",
    "revision": "9171b425f103671ca1574f21d1db0feb"
  },
  {
    "url": "assets/js/19.f480b072.js",
    "revision": "e602b4db1a15c4bf800c343feee8bf04"
  },
  {
    "url": "assets/js/20.8369db7f.js",
    "revision": "fc180d453976381f4afc3f4b467767cb"
  },
  {
    "url": "assets/js/21.e7cfebb3.js",
    "revision": "50ff0c5a8c25f6e7ae35ed7976ec0fb6"
  },
  {
    "url": "assets/js/22.7b5ddffd.js",
    "revision": "97fff469bb5079130f933f96b6554d23"
  },
  {
    "url": "assets/js/23.e6af0879.js",
    "revision": "fcc39d687a653e3c6b1a665d2dfed46e"
  },
  {
    "url": "assets/js/24.ec7a3a9f.js",
    "revision": "2efa7d6ed1caa37a46619fddd928dd51"
  },
  {
    "url": "assets/js/25.beb70f5c.js",
    "revision": "dde1b9da715af268ab1c8d747a685f8b"
  },
  {
    "url": "assets/js/26.33a0c0f4.js",
    "revision": "f114b9cdd13b45a0acfa86c3a9bac976"
  },
  {
    "url": "assets/js/27.64b44006.js",
    "revision": "98396dc796c8f17aa518fcbf81076d1e"
  },
  {
    "url": "assets/js/28.05ffc6d3.js",
    "revision": "3eef927756991d523f43f1725740f408"
  },
  {
    "url": "assets/js/29.4d53b0f7.js",
    "revision": "cbdd63e0dbc269751caf9e241194a3f1"
  },
  {
    "url": "assets/js/3.364fa3fc.js",
    "revision": "e526d0c70dfe47b40232c01450bcf7d0"
  },
  {
    "url": "assets/js/30.e102d489.js",
    "revision": "b49016a5855b68fc8de695ebf43dc7f1"
  },
  {
    "url": "assets/js/31.e4a0b4c5.js",
    "revision": "e7eb13335bd88ce65b8d29b5a2b1600a"
  },
  {
    "url": "assets/js/32.73957cb5.js",
    "revision": "857cc9afe8534ae06303ad66233297ed"
  },
  {
    "url": "assets/js/33.d8a31a2b.js",
    "revision": "96df10ef391484c02544cc2038b09eb0"
  },
  {
    "url": "assets/js/34.96b16ad4.js",
    "revision": "a181ce408104bcadca8ea25ee4124aa4"
  },
  {
    "url": "assets/js/35.1afefc36.js",
    "revision": "260a448835d9d4fd409cb797883706ec"
  },
  {
    "url": "assets/js/36.9439e8c8.js",
    "revision": "4a31eb981de6294a69a9f4f6f93ec12c"
  },
  {
    "url": "assets/js/37.77f0541b.js",
    "revision": "f886b6316da800035255571338fb622c"
  },
  {
    "url": "assets/js/38.712b3a9e.js",
    "revision": "5e9fd926e1cb1b8644406ce71d035a87"
  },
  {
    "url": "assets/js/39.d2ac213b.js",
    "revision": "f48b52c898b3c37ceb951de245458698"
  },
  {
    "url": "assets/js/4.82827657.js",
    "revision": "16886d2cd0cbc839eb15b36b6007f24d"
  },
  {
    "url": "assets/js/40.457bab58.js",
    "revision": "edcc894d611c4c0057569c8809952266"
  },
  {
    "url": "assets/js/41.35bf8900.js",
    "revision": "1b194482f4d79886a5e1af6b054af945"
  },
  {
    "url": "assets/js/42.c3834fc8.js",
    "revision": "94739c09a7430fd2a6bb2305ad933223"
  },
  {
    "url": "assets/js/43.f96ee49c.js",
    "revision": "6eeedc303f657697febfc2534210a771"
  },
  {
    "url": "assets/js/44.cedca698.js",
    "revision": "c8c8bb4cbc4524718911b28881014b5c"
  },
  {
    "url": "assets/js/45.af5d7e83.js",
    "revision": "2a70cb113998e9cdeb496e1949e2d470"
  },
  {
    "url": "assets/js/46.fa829ddf.js",
    "revision": "7e8b8542290cd61c7576edc70dbae58e"
  },
  {
    "url": "assets/js/47.c6023def.js",
    "revision": "06d430e552ab83a520362d8f9210bd76"
  },
  {
    "url": "assets/js/48.4b7bf296.js",
    "revision": "b46db8849520e09ba287c7b51749b34a"
  },
  {
    "url": "assets/js/49.6a2f1686.js",
    "revision": "c7509bf4212d3b96e03fbf6ec5517102"
  },
  {
    "url": "assets/js/5.f171fb5b.js",
    "revision": "1c432ec3e561c0caacd0919ac5415365"
  },
  {
    "url": "assets/js/50.e305cd28.js",
    "revision": "6c19807051d952f0ef49ebaf7a75af7e"
  },
  {
    "url": "assets/js/51.ccb2ba3a.js",
    "revision": "8e1f24f6f0bcdd18efb169fd48ed2346"
  },
  {
    "url": "assets/js/52.fcaafc38.js",
    "revision": "dfd54a301ba2771c19a811607b9e084a"
  },
  {
    "url": "assets/js/53.8eff035e.js",
    "revision": "72b45a013e97ab49d348b3e074ee793b"
  },
  {
    "url": "assets/js/54.65bdd2b1.js",
    "revision": "60143abb5b063b52cfb4bff2de313bfd"
  },
  {
    "url": "assets/js/55.282b318e.js",
    "revision": "c8492cc9fd9d282bfadf0d256632aa03"
  },
  {
    "url": "assets/js/56.9ceb56c4.js",
    "revision": "29c0e0c436d269a263235021c6d0b205"
  },
  {
    "url": "assets/js/57.c581ffdf.js",
    "revision": "2ecf4f84e252748eb9bef709ec7d8443"
  },
  {
    "url": "assets/js/58.7806b501.js",
    "revision": "a11e5297637f9c01c391aaa9be90ea71"
  },
  {
    "url": "assets/js/59.b44a57ee.js",
    "revision": "9af024421d9c0f90a73a0800b446b0c7"
  },
  {
    "url": "assets/js/6.6d7bedbb.js",
    "revision": "91579a973bf33c858aea0e27e16600c8"
  },
  {
    "url": "assets/js/60.d93286d0.js",
    "revision": "c905bbe500c4af43ae2590bc994914d9"
  },
  {
    "url": "assets/js/61.e4e07168.js",
    "revision": "a522c3fac807d6f0a206fe50dc2d4a95"
  },
  {
    "url": "assets/js/62.1d3d8033.js",
    "revision": "b6b5f8e92f2ccfb932a45e649b549632"
  },
  {
    "url": "assets/js/63.11df4604.js",
    "revision": "3335d08d356670aa7e4f7c5c5fa41919"
  },
  {
    "url": "assets/js/64.4631c2a7.js",
    "revision": "89eedb85cfd613084ccc8d151a16ac90"
  },
  {
    "url": "assets/js/65.90f207ee.js",
    "revision": "a2c8ad37a47c4d04339c7f303eecb438"
  },
  {
    "url": "assets/js/66.a10e6bf1.js",
    "revision": "ef08b72f9c21ed4fb85df1eded03d2a5"
  },
  {
    "url": "assets/js/67.78441f6c.js",
    "revision": "0cd837e54b4b611658164197cf46fdc0"
  },
  {
    "url": "assets/js/68.caacafca.js",
    "revision": "b391ca2f2a40e12e9fb67ed13fd49af9"
  },
  {
    "url": "assets/js/69.2127b3fc.js",
    "revision": "8e6334d81472661ec2c176b5ab5a0cce"
  },
  {
    "url": "assets/js/7.76b7dfa7.js",
    "revision": "715c723dc2232b73f9c1500622b1fc01"
  },
  {
    "url": "assets/js/70.bdc78b24.js",
    "revision": "f5ef6afea53f2ad0e00f5fb0946b55ff"
  },
  {
    "url": "assets/js/71.a58b9bee.js",
    "revision": "fff34ddcb0f2a46d4b38094b89510d64"
  },
  {
    "url": "assets/js/72.3230022f.js",
    "revision": "c8bd28cd6f87e0ca8614b563679c20a5"
  },
  {
    "url": "assets/js/73.567a34e4.js",
    "revision": "9f4854601eba2f8ce59b35c0267f2475"
  },
  {
    "url": "assets/js/74.e396fe4c.js",
    "revision": "02c69359067db2c8fa7448eb5d78ed3c"
  },
  {
    "url": "assets/js/75.3f5c2512.js",
    "revision": "6aa0329759a27937c24d80f8b4437747"
  },
  {
    "url": "assets/js/76.47661f3c.js",
    "revision": "0cef4d58268d230f6f87908ff4c5497f"
  },
  {
    "url": "assets/js/77.4c8c892c.js",
    "revision": "d3540d55a6542e71d212508799981898"
  },
  {
    "url": "assets/js/78.153199c1.js",
    "revision": "68b7fd80538a095862cfc8ffca4dee2e"
  },
  {
    "url": "assets/js/79.52a86a0d.js",
    "revision": "1e679cdb25c7af0713736e716dbe3879"
  },
  {
    "url": "assets/js/8.07210b02.js",
    "revision": "f9bec44862f6ba153247245d31c65124"
  },
  {
    "url": "assets/js/80.1d3a45b2.js",
    "revision": "5a0517449371aa0bc27b775f417db5b3"
  },
  {
    "url": "assets/js/81.c21876be.js",
    "revision": "5e288285592f74bbf3e4b6ce9a576a81"
  },
  {
    "url": "assets/js/82.798707a7.js",
    "revision": "48fb354065064a21c7073049c4b5bc2c"
  },
  {
    "url": "assets/js/83.1c47d1db.js",
    "revision": "684873ad0364f88190c4385eec4c407f"
  },
  {
    "url": "assets/js/84.38ea46e0.js",
    "revision": "e17cc7a466b4b0b6b2db6bd262d8f9cc"
  },
  {
    "url": "assets/js/85.a91f6c81.js",
    "revision": "30097d00434cb3c639aabf91b97bdfed"
  },
  {
    "url": "assets/js/86.c78d9baf.js",
    "revision": "0eb32a7807a16a1773b66531476674aa"
  },
  {
    "url": "assets/js/87.26633b6e.js",
    "revision": "fabd84072d3ba1316d2aa5dac356a9a8"
  },
  {
    "url": "assets/js/88.0fbf23f4.js",
    "revision": "010abd9c95653b3d28ad66d095787878"
  },
  {
    "url": "assets/js/89.c292b46c.js",
    "revision": "bdbcb63e5e47b542021d5fab93e05c7f"
  },
  {
    "url": "assets/js/9.bfc38798.js",
    "revision": "ff5b81e045ab06abffaf6dc779d8fbdb"
  },
  {
    "url": "assets/js/90.c7dc9256.js",
    "revision": "acfb6578a53bee59216109c2f3395a35"
  },
  {
    "url": "assets/js/91.b1d2eab8.js",
    "revision": "1a28dfcb5b3572c57dcfa0e2114fae64"
  },
  {
    "url": "assets/js/92.f4443131.js",
    "revision": "1c06b4e12cf8f040e95a995a95aac99b"
  },
  {
    "url": "assets/js/93.fa3d6245.js",
    "revision": "1e625e2e0453d2531d888a2b0ff012cb"
  },
  {
    "url": "assets/js/94.b6bf546c.js",
    "revision": "ac1e2425ca956fd00ae8c6758be792b2"
  },
  {
    "url": "assets/js/95.0c47c1b1.js",
    "revision": "a3889d90f0e948876a3669fd015a0baa"
  },
  {
    "url": "assets/js/96.cb86d845.js",
    "revision": "8787c667fd82cc219d7b91c7e4e0a706"
  },
  {
    "url": "assets/js/97.d4580c00.js",
    "revision": "99663f8c09c2956713a5f35c3886c1ee"
  },
  {
    "url": "assets/js/98.a961ceab.js",
    "revision": "8409564009308733a89c3cdfc32b3d62"
  },
  {
    "url": "assets/js/99.776edcaf.js",
    "revision": "9c2936e8a82b86d8c06ef670e467c6ef"
  },
  {
    "url": "assets/js/app.ea116161.js",
    "revision": "6632ed30274bc3d080b8e76d7ccccf82"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/database/index.html",
    "revision": "da642ba25eb8b404cfd3c68229878b07"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "179afc67bc6883fb9410fe18751fde07"
  },
  {
    "url": "categories/front/index.html",
    "revision": "0f4a55b6acaef75898348ac93f15f81e"
  },
  {
    "url": "categories/git/index.html",
    "revision": "975ed6a2a366a7349cd29bf3274ba54f"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "ca16b658ab2d35d3091fc3adbc4760e0"
  },
  {
    "url": "categories/index.html",
    "revision": "ce7c53342bef103b338c2a5ab802f4ca"
  },
  {
    "url": "categories/java/index.html",
    "revision": "dfdbf5fc28057e764e101011c9f08e6c"
  },
  {
    "url": "categories/java/page/2/index.html",
    "revision": "59c9bdd06bd90de17c163f0564afcbd8"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "68272186ea7a20d53c47ea39ac458856"
  },
  {
    "url": "categories/mq/index.html",
    "revision": "b278cdb40528e027a72b456b317c836a"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "6d567275cbc8eebce23df94c0325d035"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "fee4bd5b2c2f5b4eedd51bf27e1ac6ee"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "ced1e2a28d9e9f3f748d74ddc6f7f252"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "369856b1d22d4a29a783807711992274"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "7a23d50b23ebff8eeb08653db9dc95fa"
  },
  {
    "url": "categories/python/index.html",
    "revision": "081b3cc2a940269403bab2ffd24b6adb"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "15d09e8b3b716fb1680f3690a90b41fe"
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
    "revision": "9c27583fe7618bdabbae01ed70b0029c"
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
    "revision": "bab3c22da08b76fc7e7fe83177cdef91"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "d17ccc1be448b594ae798f367e19353a"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "06eefb3be8a8b1c8673f05cf59600c5a"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "686fe7caa6ea7b2c016d749f5de16bdd"
  },
  {
    "url": "posts/docker/docker-host.html",
    "revision": "46cad79635e3f7251d12d12c1d789253"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "4d219a830a88196f46d5dd83ca7ec1cd"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "5ec0644522b1647384ee2b4dce14a58a"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "8a5b9e1871b9b7dd43c5ddf79fa3eac6"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "a51ab5a4fd24005ce42ec3a4938843b6"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "eb593f3128b70cbe741aa9ec99423941"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "1795e4bb77f06721d390a81a816cf323"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "2eda6fc04cab38c5f40c99ab7a766280"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "ce9083da5ee7ba706fbe7a2d70fed466"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "3c6c4f4d01ee2099a946bf77e4a6806e"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "f56463ba18a7ba33162a58bb4b6d231e"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "74c44f61a1aa5452559a707ef8aa64b8"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "0977d1925d050ba4e63ea7f216ee6885"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "c37250ebf2dc5c4b4a25937b53ef5253"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "9168838b90addcc3f7dafb9ec297bcd2"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "4e28a1702278bdd63c487a91b0778244"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "6df3b82bc9f37ef2cffb5def15c14239"
  },
  {
    "url": "posts/java/java-http-proxy.html",
    "revision": "e89f4edd7c3fd36b8bf3d3e6ad48a70b"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "3cc8f9b2bb65d7bfc50751e82650f918"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "bbdb64f141ec262315a57bbc4b03a21a"
  },
  {
    "url": "posts/java/java-spring-MyBatis-Annotation.html",
    "revision": "9fa23af7b353a1caa82e624d613fd509"
  },
  {
    "url": "posts/java/java-Tetris.html",
    "revision": "4d6d5aee855afe5bf51e1610e14cad43"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "5a8386a634d47804e47faa52f821b7cf"
  },
  {
    "url": "posts/java/spring-RedisTemplate.html",
    "revision": "757f285fe00df435a0c232d4af61f41a"
  },
  {
    "url": "posts/java/springboot-disable-autoconfig.html",
    "revision": "c5dbc0bba0ef8df187670bf5f9bb8ab2"
  },
  {
    "url": "posts/java/springboot-schedule-task.html",
    "revision": "073729e47e529d3d3f02f1b61807a15d"
  },
  {
    "url": "posts/java/springboot-swagger-ui-custom-config.html",
    "revision": "889a20ecd62d4611e281276595d39d59"
  },
  {
    "url": "posts/java/TOTP.html",
    "revision": "be64d4702f9aab449a6c4bea7b11ca48"
  },
  {
    "url": "posts/linux/linux-chm2html.html",
    "revision": "2ea04bd67898c15c6912bcbe6af00cfc"
  },
  {
    "url": "posts/linux/linux-ecs.html",
    "revision": "7eae20e15ddf4043725eb3564f5736a7"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "e96e66d4e3cdca4b9826b707c3e755bf"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "8633dcf8433959bccd1e8002968e9df1"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "750179909e6d70ca952da9c18404e442"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "0dbae828967c1783780a59b0532acb82"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "846308415e0ec4dbfa7167e337327e87"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "3549acbdb4a0770fa363b278d4ac8336"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "67ae39a66e586198bfd86124d8642ec6"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "cc0516bbb398bb2b4ea059f138cbfcd9"
  },
  {
    "url": "posts/mq/ensure-not-repeatedly-consumed.html",
    "revision": "6b178f31f1af1106ec84298287401cad"
  },
  {
    "url": "posts/mq/ensure-order-of-mq.html",
    "revision": "74f339a366a6a345399411c54b34427f"
  },
  {
    "url": "posts/mq/high-availability-of-mq.html",
    "revision": "e09250c1b5bbebcddfd90c357649ef5a"
  },
  {
    "url": "posts/mq/mq-problems.html",
    "revision": "88021b9393567f6d22a8712296381374"
  },
  {
    "url": "posts/mq/why-mq.html",
    "revision": "46923500564ea35c6c52cd3d0319277a"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "352c8194fb551a3015ceda383ffed31e"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "e2cff5690a7ccaf8a49d3e85989819a4"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "24c339ac2c3fce9b9fe3a29b8a29d746"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "332d41a3a165b3dc6e7cf74f16b09540"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "3dea971f2839ff3ec6850dbedc6da641"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "9265844613cdd02bf0aeb20b88162487"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "4549f6e97c98066d6d3c1bf99a115ce1"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "3148bc850bbe9b9d5c99e515baaef493"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "2a202f7a29d7b1680b4b884d7b50ca27"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "0dd5ea1960d611e42d0eca37fe63b524"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "f10227edee4939e3b452eda27d7bc466"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "144faae78f1b68ace89f5e95fd80dfa6"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "973eadf923ee88b33d8dcdcd4f0a10df"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "0bee1e83e997dc10240d72f317389629"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "0240262244c6f2551fa6a1a5023deb65"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "506a9db65469424c560371185287b158"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "466783d9d8de3703f554bb3840f91841"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "c4c89541ecd8357c67fc4598c50e9180"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "755858f1ae223489426133c8cfbc754b"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "9d35169a81dbc93779b041eeda4b5b04"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "5a1307ff3d4f27a2d48c0e5656858c4b"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "7c164adae95638d4dff5260c16b7f832"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "4882149c86254b431dc59921de69d1d6"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "7357c3b348bf58419ab6d0dd78bf9e84"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "f144aa3cf6cae302279588b0adfbdc32"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "63804107687866bee1c38d0c5c3dc01c"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "86047ac6595f0ce5c4b8ba9f756374ca"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "1cd83311edfeb5355435fb6181e6e91c"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "a09ae2b1cb97a6a2d7cf8910939835c9"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "dd5ce530f84ddc3246504088786be9e4"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "17d129f1b3c9c903e6268ab644fb2ca1"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "2588578cd2bf9645935de030e1599202"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "9b174f6d146f9420cf28060265746361"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "e20bac6b88fa063b47f3204c28ddeeae"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "885ead551afd83efd30335e023462561"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "90f10a81548559705e97dea0997d73ee"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "654f167cb3b34afc8a49d942ee70dd9b"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "fc42986a07c9c9ecd24fadae6962325a"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "5ddc0781999d99a7b7171f932b391e67"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "8ec1902c0efbf479a04d01247060c7ae"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "f8c3927d147347b4d756e2bda2050f00"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "7a1d4a427a69820b3e2f1374caff2e48"
  },
  {
    "url": "posts/python/python-dynamic-import.html",
    "revision": "6df68dad13240fe18d7d98b4f53cf02c"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "d9205030eb3cba5525ae5ef22fb62874"
  },
  {
    "url": "posts/python/python-metaclass.html",
    "revision": "952440e094fac8888f0d39a151d3109f"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "120dd888d79cea32288d86c883320785"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "e0a8367825db5baa8a2fc10ce0bb23b5"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "afdcb609fe091ea240cf11db74b6fc56"
  },
  {
    "url": "posts/python/whats-new-in-python3-8.html",
    "revision": "c2a0a7de1a9f5dafd3dfb3b28da081a9"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "a469f9f07ad2c10f456552a2be69e63b"
  },
  {
    "url": "tag/api/index.html",
    "revision": "c9229f6c96373d329d5af28c9735a3f9"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "1ba6d028d86807a0f13b7e90e37f7938"
  },
  {
    "url": "tag/context/index.html",
    "revision": "2e549af05c9b085e764b63d12b4ea962"
  },
  {
    "url": "tag/database/index.html",
    "revision": "4ca5b12a42f19db3f01d4bcf1affd925"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "1c6457d0599e34912a1eef313a0e66a5"
  },
  {
    "url": "tag/git/index.html",
    "revision": "4fefab9d2bf635175668956ebfd178ed"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "93eef67b838e4c8f0c9b964afb7b7b12"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "9662fb4db5774ec3e9a488e54231762d"
  },
  {
    "url": "tag/index.html",
    "revision": "0d521ddffbd9838aaa1f1d7afd77df87"
  },
  {
    "url": "tag/java/index.html",
    "revision": "03708a3c7a809069c997443aab125e47"
  },
  {
    "url": "tag/java/page/2/index.html",
    "revision": "6e1e1869f3a5f8425512fc4ba90cdb41"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "1181ac4ca82537c91bc31e29d62ede31"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "ef5487abfaaa063626fb6fb4742bc37e"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "ae190a27fe006ebc59d24f3960cc5bf1"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "00056572d492bcf093fc3776ff87deba"
  },
  {
    "url": "tag/mq/index.html",
    "revision": "c6baede8a179a0b1d6b0d9bb01d51bc0"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "cd8c06c09152ade886cfb9150bb1f0db"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "163e6a7b478eef22ff528919c5a06d8a"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "6598544b0e64391a46269c936130e5e3"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "ab670acae2c99ade0ee361f7fcfa462b"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "a742a3d6d38dca2a496c3d85e709f3c8"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "844f210709f4ec2c1d025c77d0bf07fe"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "ecc2060e73a3361158ea95e51630ca41"
  },
  {
    "url": "tag/python/index.html",
    "revision": "6a3a610b7f1aa4fe998f51f5587c2533"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "62ba126d1a467f1d2a37eab6a9d0f7d0"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "ed3eeaf23d372366d6de8c8c3b28433d"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "4d2d49ea6dd8b3973dd2ac5ffdb40bd6"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "36538a1c0bc4951617dd0a312ec84708"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "cfd87f735fbfb5515702eb08812345f8"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "031f5d21257051657a315841e85b2ea3"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "146f940ae0ea7480f521cfd4dccf8303"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "d7562de1326a6a9251d8359a07236b19"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "d717a042a45b3e9747e2f3747439447f"
  },
  {
    "url": "timeline/index.html",
    "revision": "3ede0e07ec0eb3d36bb30f16219a34e8"
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
