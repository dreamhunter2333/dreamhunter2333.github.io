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
    "revision": "580811305c66bda705f3d52923d0f1a1"
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
    "url": "assets/js/102.08ddb0a0.js",
    "revision": "8f0bd5dfcaafc2c27ed649fc5548d593"
  },
  {
    "url": "assets/js/103.015e4c3e.js",
    "revision": "dd1ba6f1da6d0bacd5b277be0ae41d2c"
  },
  {
    "url": "assets/js/104.964ff787.js",
    "revision": "369627134f404e737b0a702ec0f5bc9b"
  },
  {
    "url": "assets/js/105.9e962e38.js",
    "revision": "0b54fa4dfd7e7ab4020c850d1f4be919"
  },
  {
    "url": "assets/js/106.3c5fd544.js",
    "revision": "49a17a2de81dcc5d7639541d413615bf"
  },
  {
    "url": "assets/js/107.0d8e0020.js",
    "revision": "e96f2d32b8b57183cec7e101848f7c50"
  },
  {
    "url": "assets/js/108.56ceedfc.js",
    "revision": "44dae28516b2030ae0521e2ca0a37aba"
  },
  {
    "url": "assets/js/109.cd6d02b7.js",
    "revision": "22da79a36df689aa29000e0c85caf01c"
  },
  {
    "url": "assets/js/11.69b157b1.js",
    "revision": "4c83239fab190348e9d5dad712041630"
  },
  {
    "url": "assets/js/110.af0695eb.js",
    "revision": "2fea7a79bf41d035c8ac7df180f2db88"
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
    "url": "assets/js/14.60666d81.js",
    "revision": "4d85c313ff0fb26e38c24cee3e27396e"
  },
  {
    "url": "assets/js/15.4acafa1b.js",
    "revision": "360cec26d94ca4ed52fbd8be91370e47"
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
    "url": "assets/js/59.04912304.js",
    "revision": "ad2f97e3447334a2fae5f39e9aa203f0"
  },
  {
    "url": "assets/js/6.6d7bedbb.js",
    "revision": "91579a973bf33c858aea0e27e16600c8"
  },
  {
    "url": "assets/js/60.109731a0.js",
    "revision": "2fbb3dfce0073daa9e0687928338bf99"
  },
  {
    "url": "assets/js/61.dede9cfa.js",
    "revision": "2ef8df3fc9810b15c0d610e93d2ea895"
  },
  {
    "url": "assets/js/62.9e27da2b.js",
    "revision": "1fef7b3ce5d666446b4e1070bf806498"
  },
  {
    "url": "assets/js/63.ffe7b31c.js",
    "revision": "0e0c0901440fa659e881194c640c12d3"
  },
  {
    "url": "assets/js/64.f62a1379.js",
    "revision": "62e7638516288df0e09fb1e9a56e2f72"
  },
  {
    "url": "assets/js/65.427c58f3.js",
    "revision": "a122ad71310d860612ba91adc32daae5"
  },
  {
    "url": "assets/js/66.7982fdf1.js",
    "revision": "7d6d3e0ee30c0a02febd4967ba6fdaad"
  },
  {
    "url": "assets/js/67.d0f562d0.js",
    "revision": "5c91edb3accf50f9ea3b12d6f42295c5"
  },
  {
    "url": "assets/js/68.b1cec336.js",
    "revision": "9007378658b16da8b3317abd0fdd9d22"
  },
  {
    "url": "assets/js/69.c74e43a9.js",
    "revision": "c5244df85b4ef9eac43387a340203bf5"
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
    "url": "assets/js/9.b4420e5a.js",
    "revision": "fd2f13f339339dba6b5726d756fec3cd"
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
    "url": "assets/js/app.03e400bd.js",
    "revision": "568442be5735309fcea497088cb005d0"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/database/index.html",
    "revision": "8354156b20098db5faef9ca638143120"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "fe82da959d7b3e8f3c07cca9c217a758"
  },
  {
    "url": "categories/front/index.html",
    "revision": "11829fcc5c0d3ecc8d6022b3ec4098bb"
  },
  {
    "url": "categories/git/index.html",
    "revision": "99c7b118ae5644c3f44b958bbdb71f7c"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "a19b796f99dfdaf9ab036667186fc2ed"
  },
  {
    "url": "categories/index.html",
    "revision": "b4222e1d774a53338c29551cf7123aae"
  },
  {
    "url": "categories/java/index.html",
    "revision": "015f2470805b7b8f428b78d351258523"
  },
  {
    "url": "categories/java/page/2/index.html",
    "revision": "b55317a7b9e8d78dad6d6adb040e10af"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "e2072c0e788484eede2688ead5f3a585"
  },
  {
    "url": "categories/mq/index.html",
    "revision": "dc43bc9e4b031bbcf0525a97b44c15e6"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "18ca8cbeaffddd60a33e29b20127d51a"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "5e4e92a0c7ad1cd4b66775fe87fe94d5"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "4c119a953f5349ae6d98949f11bcec84"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "4454614148697bb17388c2d1953c98a4"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "ae61fbb51e7994290b1cbf60b4faf87c"
  },
  {
    "url": "categories/python/index.html",
    "revision": "d8e2f2ff799c8ac2572581d1bd1f0036"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "2acdd362dc8b30fe7c70c3c33b485bc4"
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
    "revision": "0a12f7d643db97cb3c4d1a9ab84d69c1"
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
    "revision": "522aef3e8ecdaba5d1c5e540b7a1454d"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "b716ecb23d2845fe3d3a2038ebe658a9"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "8c1d9c348ecc08df5ca5367f59b2f273"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "f2d43e7f2fb0bcf8935139f468fe8c50"
  },
  {
    "url": "posts/docker/docker-host.html",
    "revision": "babade4161d1994b72f7787538ecf1ac"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "c3dbd2eb47cfc6d5a3e528f60f843aac"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "4f56941c20c1728bd9e8d94fcd541ded"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "7db33238466b017c440369e333611ecc"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "9664201068b73a25193f09e959a29c66"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "3e5ce97b1feec7667d4a8bb9e4c70989"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "fed04da8993a60094f5605d899c810b6"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "c1f4d05c89de012bd845bd3d20df95c8"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "a6e1e9597107d03075c3258c0f40e286"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "cf67f2d5d107e9b5196f2688fb0a06ac"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "936921527b1ba84a83e0cd560004c0bd"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "ddd64062248ce0751d37da181eb0a4f3"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "fa3ef037b8478336a5f5784d0f73bf4a"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "43c05d76423c5aec0acd52a7416d58a5"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "239e3fad14b0f15c59c40aae7788c4ce"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "ef0155fcd7ee01a1db391eb383ef1b87"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "5609ab53c246c7426316e9689fb1f693"
  },
  {
    "url": "posts/java/java-http-proxy.html",
    "revision": "1ad293ded4796a8fcf65c9a3088af016"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "156f5ca89f4c68f151e1412b57bd9cc8"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "65b617e2a2b1d27fb7d2c27c0030262c"
  },
  {
    "url": "posts/java/java-spring-MyBatis-Annotation.html",
    "revision": "cd97421ce580448783f2fa5645b251c6"
  },
  {
    "url": "posts/java/java-Tetris.html",
    "revision": "477979b29e428ee1585124bc3e573dda"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "a73a34779927d8583c63b33b11b087bf"
  },
  {
    "url": "posts/java/spring-RedisTemplate.html",
    "revision": "6081dea9b06ab39ab309e4e17ec12358"
  },
  {
    "url": "posts/java/springboot-disable-autoconfig.html",
    "revision": "e303bef25bdba9a0bd99ea5d9599e1f1"
  },
  {
    "url": "posts/java/springboot-schedule-task.html",
    "revision": "a25823c8ede529d2ceea10684423855f"
  },
  {
    "url": "posts/java/springboot-swagger-ui-custom-config.html",
    "revision": "3e3e229b3e176fc2d69261cc00df13c1"
  },
  {
    "url": "posts/java/TOTP.html",
    "revision": "25c54dcf605d8d7119761d8d3d2ad111"
  },
  {
    "url": "posts/linux/linux-chm2html.html",
    "revision": "a02ed9f056a7fced7623aac91747d4b7"
  },
  {
    "url": "posts/linux/linux-ecs.html",
    "revision": "307361fe22f85b3107ccdea09befdc68"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "549ad43192a6aaada5e40b96e2878ddb"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "533116269a70c9a3aee1edd8f1ca1130"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "6ba0f609d780478a8d267b8a499e5c72"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "f5fe401a5527382f97e334ff801467d3"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "2b507957d3f4517915208c3829cbb4a3"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "9b1c782789791e6690194ac62df12af1"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "008b6ceccbfee5f537d7a662df428489"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "aac193ab8d3f93f70d8a72d20d4d9a6f"
  },
  {
    "url": "posts/mq/ensure-not-repeatedly-consumed.html",
    "revision": "49ec4966a38cb02b7a67a2296d1ab5ae"
  },
  {
    "url": "posts/mq/ensure-order-of-mq.html",
    "revision": "2167bfd06fee30ea104fad34a3555d3a"
  },
  {
    "url": "posts/mq/high-availability-of-mq.html",
    "revision": "8e8dd39b663ba0d9c7b9dcf226102533"
  },
  {
    "url": "posts/mq/mq-problems.html",
    "revision": "d608931e46715cf0aca003e769514603"
  },
  {
    "url": "posts/mq/why-mq.html",
    "revision": "d83d020b6641e580d2505de07cea497f"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "03178972d88d917217e2a37a8dda5da2"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "41dcdfbf62b26ba089a5672d2659f8de"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "5abdb002f78fdc6b89b868d2526f0fed"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "850fcb149528ed89cdd822670df868dd"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "8a74a02dc59d3b0bfb53bf62f191959a"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "e0fe5004c3ffdb8797a943fecf1b59d3"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "4ab14b5559a52d76a508a9757c7fa932"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "937027d5b41aad20d0ab18fda4f88e4b"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "175978ced7df70bf2c85954358ef35fd"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "044ba235a2b05e8562c5525712c9a335"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "152e12852af389bbf22afad9fce0e4a0"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "218744189171fffb22c87945123c2ff1"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "03e0e96f8a9c10c0fc1e0a190e893a79"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "94b239ebeda08d4c6eea49dbe33041a0"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "376b9786aa39768debb5f2f0161d255b"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "f7c439c30cd699154c74a8e13b02c72f"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "093a5fe570fce99a6bc07277d01752a3"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "cae58241494d128c99128a268cd4a299"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "60282503fc851e41c4302fc6220bf777"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "023a4aacf367929f5be90fb591e85ef9"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "78d51b9cc46ea6c8604e44080f7e32e1"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "c7b85f57d5c152d767be5506c9ee6ba1"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "fba6f988d368b65528de120dfbd25a0d"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "cc57424ae1193ddfa1359015d9fef4ce"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "8ccd5df737cbf07df73e6f3ea73aeacc"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "60c8dde2b57159616171b2c8201ccb74"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "5345ea9dc62231cf5af9016fb7e8f262"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "6920efcdb208ab9d0ac33e9adce0665b"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "87334145eef39d8d081ff78195ab607a"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "9065f1d348c6a4ef47b352c1d08bc3c5"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "8c5e988a2f6fa46d8eef9ff307a4b56a"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "b2a596fcc4a67caa61f30031d279ac24"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "3d622fce1108c6314b93c9836a995209"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "aece20aec27598f00b38d1f753e3dacd"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "d032bff8ffdea7eff383dcadf60ab7d0"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "b1c6f54ca2f99d8986ff79661abdaa35"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "fb81883212183387f0c41722bf4e04fe"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "8ee9fcafa73ba7e7c541b5c2234702b9"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "8144c24916c0306ac3d75c4c0120e8bc"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "0a4264416c8f63b4fc6830c3edb337e0"
  },
  {
    "url": "posts/python/deadlock.html",
    "revision": "f7a2594468ff98664a779b512b712d4d"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "ca6c968fcefab7d7c92a724e50b7dabf"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "dcbaf02c87bd3fd3aed2d6dd437eb81c"
  },
  {
    "url": "posts/python/python-dynamic-import.html",
    "revision": "87f424cae105dbfd87e46368462afe49"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "0ea5f77cb701436492f0b1d3d343add3"
  },
  {
    "url": "posts/python/python-metaclass.html",
    "revision": "6aafac5e42be97ed9264fbea85b89d1a"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "3bf389245b7fc963719b608a47fdf867"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "671cfd1b3bb05fc9340e9d4cc1be7bd9"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "b28d0338bf82134995a5c7f3e7a49352"
  },
  {
    "url": "posts/python/whats-new-in-python3-8.html",
    "revision": "26e3f7d34c7366d85005edf53e3ef7dc"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "a7743c38a2c6f2ca9ca63683af5cbdfb"
  },
  {
    "url": "tag/api/index.html",
    "revision": "93a6be91afb10514956a227a4f6aac52"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "1a100daa7d5403d0ab40c5959e9d0f35"
  },
  {
    "url": "tag/context/index.html",
    "revision": "e2845e1e79057350100e11ed7379606b"
  },
  {
    "url": "tag/database/index.html",
    "revision": "951412983c74e9843529da73c90691e0"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "b6d25f52f38131e9fd79ac5c73bc0bfb"
  },
  {
    "url": "tag/git/index.html",
    "revision": "f379a66947cbc2d55c12b1174bfedbcc"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "83307da703070ed555790a9d1ffe9f08"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "bda5b8f4f1734aeaa5302fc7c375b86c"
  },
  {
    "url": "tag/index.html",
    "revision": "a20b39a261af957586615f9f29b676ff"
  },
  {
    "url": "tag/java/index.html",
    "revision": "4d96be91693254028adbe302fc8a45d0"
  },
  {
    "url": "tag/java/page/2/index.html",
    "revision": "6385f2acb989a2b4bc75920c4f94f8a9"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "3ea35783abb17911c41b9061e5ba2db7"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "ccf12a1067a126f35f9f3e63c617e3d3"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "f77928adadfa5abc5e7f2abd9150e448"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "f1c4b2dcd34385173530224cc01bf510"
  },
  {
    "url": "tag/mq/index.html",
    "revision": "6717303c83fcded770f9facaf98a288f"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "db219dc5657b091614b50aead4f78625"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "151689fb46b44d985345a982b6ec9322"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "a1aac6d88f9fc056e602a68c30ca3160"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "e6448485b6810a11ebf3a625abbe0e8e"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "a9046857c06eefde52831f5cd6e3898f"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "ba02adfbb83f841b23291632342add56"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "dc03b0bab7d870c28dd19a8c087e499e"
  },
  {
    "url": "tag/python/index.html",
    "revision": "8cfe7d7cace568c19d249540f0de5504"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "5c40dcd30de77b55c8ef93791a9c23f4"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "d5ed9fb790aefe70ac34951bd1b612a4"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "e08ff7860831ea2f51a8c1c7c7f1386b"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "12c72e09b18f3bbd6afdad70977a7b7b"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "a96b03327f4ce8bfe6bfc17dde492618"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "49e5bac25d0e7fd24df2677b5aa6d22f"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "8609142927ed2beed5a3893f2b152574"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "0af141e43275373ae4f4f06a9b7a1a12"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "117c75042eba0fc4df11fc870d1f21da"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "f1f97a26b4864c01e094f0410df74c26"
  },
  {
    "url": "timeline/index.html",
    "revision": "c3f96c5caa2ac3b2f23e81bb9ed8b2fc"
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
