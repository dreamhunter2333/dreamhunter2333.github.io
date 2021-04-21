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
    "revision": "6e8eb947cff1047abe33d5242a25f289"
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
    "url": "assets/js/104.91dced89.js",
    "revision": "d8378f1a5dd6981fc8554c34d32f8545"
  },
  {
    "url": "assets/js/105.3170a92f.js",
    "revision": "2415a6ac077e3c0c52881a0b219eca8c"
  },
  {
    "url": "assets/js/106.af2105eb.js",
    "revision": "bd26dcfa17decaa7dea11beae69dbad7"
  },
  {
    "url": "assets/js/107.5da6d1b0.js",
    "revision": "0b9b2b2e73a304a550ca42c256556f72"
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
    "url": "assets/js/18.419eba8b.js",
    "revision": "a77288d94d8449830ce5935e1559abcf"
  },
  {
    "url": "assets/js/19.c6f3f2ec.js",
    "revision": "e2f5ebed117f4aca5f6e6d3b7d9e3e0a"
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
    "url": "assets/js/32.8c1d1d37.js",
    "revision": "99e39060ba2f3643d1b206c8c65b7ebb"
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
    "url": "assets/js/9.89a3c994.js",
    "revision": "0ab275bcafe9dfbb2c17e743e8ec603d"
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
    "url": "assets/js/app.13cd4af2.js",
    "revision": "d147cc8dc86a4a8ca85419a428b9e6ef"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/database/index.html",
    "revision": "32fb6bf86e268bf301e781e7f5dd3c70"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "672534b53267c74472bc38292b9ea14c"
  },
  {
    "url": "categories/front/index.html",
    "revision": "dffd7269f7a8e90e2adc0710d6ba3e64"
  },
  {
    "url": "categories/git/index.html",
    "revision": "85429b9313be45c73520234676051e2c"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "2856d74be3a317d8bdb53ea2b443c394"
  },
  {
    "url": "categories/index.html",
    "revision": "8d7fa58d15ac97f900155088926ef02d"
  },
  {
    "url": "categories/java/index.html",
    "revision": "548ac578f185ac82a4f374fd3613f515"
  },
  {
    "url": "categories/java/page/2/index.html",
    "revision": "4a669724937018047ea47fbf0323dc6f"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "b74c90a531d6e809d8b90d3fcc942aff"
  },
  {
    "url": "categories/mq/index.html",
    "revision": "265d95be9a4daa23fc57cba4e7314fb6"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "6a383d4eed3d4d49ae11ff47e6a2f5ec"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "89c517a8f2b3de9b6f533aa37126c5dd"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "5908ad8c8bf77b8925ce88f6a257050e"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "ab3fb6b88ac78a8c257f0a2edc543fbe"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "e205788b573bbda1efe273001ecc4a77"
  },
  {
    "url": "categories/python/index.html",
    "revision": "1e99b6be5a8fd3a165911c397ab60704"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "fa9217ecb8985fd16265ad66c4c90ac1"
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
    "revision": "a2234c5d542d91018447ca7f2a641a00"
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
    "revision": "99adbe56aa4ad3fe7c496f1f7b0c299e"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "655ddb1fd0879c24c10d6bcb6e7d8852"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "da1b6bc54b3a7c020e0c937bd92ec635"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "e387813ec1533f13ee973da2105e2392"
  },
  {
    "url": "posts/docker/docker-host.html",
    "revision": "01761cf1cfaab833262d993b177f8054"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "f9c7afb366936c6a8c53ff0562f3adb8"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "ab94bad1c193b57e3e23e6c9b3ecece7"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "15ee72c6b09b8cd088484638c20994e1"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "1ec3796f2d4b722ffdaa35153edaac0d"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "76fa83ea52a51890c3452ad49c0de44f"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "715b4186482e4ae13257bb2e5175426f"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "d571b147dc353c5e06f4f6877b466ad0"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "8d3a5f1b494251ccb2dd5bd466b54934"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "8843f507c2624e01e9f73aed701aee08"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "c72a957cb924ccecbb5b0773dc0956da"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "36e378e58da1a724d802fa7a5a71ac35"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "313517307b0bc9bc6f794c56d1f69a44"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "3a6d8754a598120886d9a9ddd9e5c54e"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "002bb6d4c31db6709c71bc274429f82e"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "86b0323f9d47857f7c5823e415f55770"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "3b7153eebb9af411b79ddcfa0a2ba548"
  },
  {
    "url": "posts/java/java-http-proxy.html",
    "revision": "bbf5c3628d4b786f3a4d304f71363d3f"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "9c7da0dce1290ec4208dcbc68d33695b"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "b6f9dfc64a20bdf0985e432b34898270"
  },
  {
    "url": "posts/java/java-spring-MyBatis-Annotation.html",
    "revision": "f43e5e6b78f9257ab401e85175bd22c3"
  },
  {
    "url": "posts/java/java-Tetris.html",
    "revision": "3a0db6b15072a6790c23e3b389304588"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "e3265fef42c746efed1e3f175b48478c"
  },
  {
    "url": "posts/java/spring-RedisTemplate.html",
    "revision": "78685734e981bea977c4bb8db796a20e"
  },
  {
    "url": "posts/java/springboot-disable-autoconfig.html",
    "revision": "6f1ae32701076425ec086fe1c58a9bb1"
  },
  {
    "url": "posts/java/springboot-schedule-task.html",
    "revision": "ac4acda363e94ef9b82ad7c4f08f9bc7"
  },
  {
    "url": "posts/java/springboot-swagger-ui-custom-config.html",
    "revision": "00ec93f2613dbc1ef7c59060519169ce"
  },
  {
    "url": "posts/java/TOTP.html",
    "revision": "6299c578c8457a8ee02979cb821e0d84"
  },
  {
    "url": "posts/linux/linux-chm2html.html",
    "revision": "ed3f0cf43f5455086457fd5e83371949"
  },
  {
    "url": "posts/linux/linux-ecs.html",
    "revision": "fb7b7e82168467ed3487eedc67ec87f0"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "c2e567fad215888cdaa89eb47a7710d3"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "899944f3a1f2392d36d1aaa50f845b32"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "6c0b1fb3c69cf64d724efc932c43397d"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "432e328f9c95a0e211e4e4db96731eee"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "967541e566adef038262a166adf18338"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "719c2c878eaa2d6b6077123c8c85c9c3"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "daad1522a2e010538417018e01e32273"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "e5fe003a5a625d498c3ceb03a63f9fef"
  },
  {
    "url": "posts/mq/ensure-not-repeatedly-consumed.html",
    "revision": "54ae4508b910e3b9248e446b5f8ea946"
  },
  {
    "url": "posts/mq/ensure-order-of-mq.html",
    "revision": "48922584a26c26401663f31276632034"
  },
  {
    "url": "posts/mq/high-availability-of-mq.html",
    "revision": "85ea763840cd9bc90aa964cd9cd0ff09"
  },
  {
    "url": "posts/mq/mq-problems.html",
    "revision": "1067ad9d948d06a36cb8ee91aa3803e6"
  },
  {
    "url": "posts/mq/why-mq.html",
    "revision": "c75c90a5ed37b7db8736c0505c5039d2"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "5893645950993c9a61807483f84c9ca2"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "fa5e960700df2cd75ea2704cdec16d3e"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "951ad8ace0b94f2455e8a5563eb55e07"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "bf0727ccc0c2d67e0ff9565ad22a3fb1"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "0b6c3377e3d2aa15542e4a172635dc21"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "6c1579583b0aab96f684c5b8fa2d837d"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "ba3ae21721246e2a4308e44242409a5f"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "1e9f4d8835aa258342e949a29afe27cc"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "3218f204803d1049f3bca63ddd9488e8"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "68b70b1e1f5c00bb969335aa552f0d75"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "3c24c622f179b9233b771d4476c23bce"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "71e9cf55ccd4b0f8c6be352636e8fd85"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "c09408e39350a71a598c0be9db4c6338"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "97aae91ddf9c70e8f599c1d79b3a9bbe"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "7c11712f64517247d895832ab188eeed"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "f609977a02a6d6bfb55fb4dcd2291b78"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "170e3044ec17cf75c4ecae3bd3759536"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "d62946e89d7e8a4d4d4d5eda5c282d10"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "983c5d819f9461f7b81b74d3b50af747"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "c7431c822f53524ba68478d0b47ffc64"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "4efbfd0faff3960fee6a992a50cb1f82"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "2c1bf3ceeaa9fef5ef0fe606c43e1ce2"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "83799293ae3caae1ba9c00dd47e93afe"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "b472e373a9f6702cd8b7d93b3784cbc3"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "8e6f4440727fa437dcc58d8455d6ff5e"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "5c4bf7939e1b69057fe4ec3a0fac2ae7"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "3337eafaa065c0a0fbb8fa8ec783d732"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "d116a892bf1da3bdda66b1f8abe7e3d4"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "1e9cb870fa18cd1a8556946e84cb2008"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "ff608182560fd3c39fed0344f41b51f3"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "e8c5355c2242642c93103d45c048285b"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "0e1f692ee31bae730885f44ee292ebef"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "c03bc40a1f45b6e17720e2c0d521cd3f"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "61ae0230b9e2f0677a2a2869760894af"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "a220501373c8a27f8431a1c45a0a1bd3"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "1341dc8b03e16f1ccab8b35dd372b7f1"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "2892e91b470f69c3cc13de01bbbde0d7"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "970f7c5530a51920fbc7dd82f51a208b"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "3202cff31faa037895ebe1c2c8656e3d"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "1453d80276dee921a84ab4a9addd599f"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "606531952794def4e4549dc9baf9b9eb"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "0bdd4a5971ea7415b678d92a24a61d92"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "b1635bed65aaa7cea8065205c9e32a5c"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "05d12d80eee095a9a59d42e8a01d3cf3"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "22dccdeefa780b9084f62d44955342d3"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "920065bde5f7b5c7428e12cfcbbe577d"
  },
  {
    "url": "posts/python/whats-new-in-python3-8.html",
    "revision": "75f50c4ec943edc7eb7f21abe9749a54"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "f9a41add142a486965719b6b76bfb824"
  },
  {
    "url": "tag/api/index.html",
    "revision": "c7c58fe702e962f639bdb7a4206cc0ad"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "9ecf43c4d9e458d80d98a4fae744a372"
  },
  {
    "url": "tag/context/index.html",
    "revision": "b652acb11650f0ae4f855900f9ca4983"
  },
  {
    "url": "tag/database/index.html",
    "revision": "8b3b45ec4a1763cbac85e806470f9d46"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "63c13d64bab99e96e6b0c1f2292dc58d"
  },
  {
    "url": "tag/git/index.html",
    "revision": "d33e0d81018d38c3de1d522e0ce99cd9"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "8b40d64bdea66310b44625e12185f343"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "1a7de8e817beab94f2a34c665f5b9dd3"
  },
  {
    "url": "tag/index.html",
    "revision": "a279aefc41ed629568bbd25cf0ad584a"
  },
  {
    "url": "tag/java/index.html",
    "revision": "6b0e986fa9c3e78714ddf90c9559f12d"
  },
  {
    "url": "tag/java/page/2/index.html",
    "revision": "d6202daf6e650141ac5a143ebb4a295d"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "264e9bff52d95f8e2ee097282a7cf527"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "ddc5373494ebb811d5795b6019d92c5d"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "340d9d6b5849b15b29ce4a8491217cd1"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "a52a8d31df8029b03a366737e34d1d5c"
  },
  {
    "url": "tag/mq/index.html",
    "revision": "282bf4c8d8836b3433f89f55a33af3f2"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "87041ad8b158909a27b24f96a4b80e89"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "f194f9dfa9af7408c3eb044a5d14e12c"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "718b2c43cd277fa8641906201879ad2f"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "ee0247f23c88554f8c846b3370166db6"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "068364a0106ee39fc7f7196ad306dabd"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "96ef92b5e1dd08419ae0d51370f433c8"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "333039b4d51c0b62ce590154b370755f"
  },
  {
    "url": "tag/python/index.html",
    "revision": "007ae5a65e05d29dac5dc3a60b19baf5"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "bfeb9f97a9ec4dbe936a97288261a56f"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "8fc71dc0ca9461f1ec2a11cd9cdba5d4"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "937f81ad4b839a214c80563b37aa319d"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "7e34e3b437de99a18242ac34bd83c8d1"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "958c0f0fcd83a20072b45f45d5cf5115"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "6abd801fdc61cb4a78a3d9ccae18364a"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "81fff028d874ad057d22cd5740f9e9ef"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "dcff2e441835c39595ba36b4b44b4da3"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "146be0a25f02e6d060dbab814b979f7c"
  },
  {
    "url": "timeline/index.html",
    "revision": "acc28cffbe61983748cd51d0e8ab2e8b"
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
