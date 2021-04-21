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
    "revision": "ad6e1566b62a686fafd2c8d3a76e5d35"
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
    "url": "assets/js/app.1e3cd7b1.js",
    "revision": "734a3e709fa222013e538a84ba51a654"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/database/index.html",
    "revision": "8853e77860ebf5d04614000abaafc978"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "d72700974fc7bdbb4e46f968f959c997"
  },
  {
    "url": "categories/front/index.html",
    "revision": "799ea8ba7ac2166db648b9fcf6d10d4b"
  },
  {
    "url": "categories/git/index.html",
    "revision": "2928fc69304ab8059853ce743b719206"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "cbef8cbfce026d3a942d6957a6d7f424"
  },
  {
    "url": "categories/index.html",
    "revision": "c676a1dfe0b9a34a7bf2aece04aeb4cd"
  },
  {
    "url": "categories/java/index.html",
    "revision": "5286e5589389ffe775e23c28b72bd383"
  },
  {
    "url": "categories/java/page/2/index.html",
    "revision": "41ac6b10382299a7f169634366ed4db8"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "fa3af49a2de78fdbdbb30b81187a4bc3"
  },
  {
    "url": "categories/mq/index.html",
    "revision": "c63724bc85f2b94c7ce32bd87619d804"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "102c8bcd10aa798810a9e2c6f8b97e04"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "7326a658138b84018c4715ef89f23050"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "e3b11cba6fc8bb7515dd713585240ca8"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "22b3292add2d3e6cf491dad24f93a5f1"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "eadce0f23ae10c85f62a763b80c23d1d"
  },
  {
    "url": "categories/python/index.html",
    "revision": "e4a40d9e0570c9685c4cf7d310069152"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "4fb2f34149aaad1a0612ec6da5b4d2ee"
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
    "revision": "6212a111067ba24d33957a41a36d3c53"
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
    "revision": "fd25bf5f8018e87483916b55ecfe3788"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "12094b57c571c27b26a81ee1ae8c59de"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "3e5d8b03918b569b55610718dcbed9e8"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "4e0e58a12f80105d4b3e197cd1e0a70b"
  },
  {
    "url": "posts/docker/docker-host.html",
    "revision": "beb56d1da0833eb2a8ee1897afe485da"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "f0731fb2af88b47fb98e073630640ac2"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "80d7abdeca3dd7d692fb14c787165add"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "d5dc73bf3c0f2950ad33062c0898e17a"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "28c30c6bbe3e02f36f0fcb099fdfc4a1"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "c82ed7f062e91d4269c7085de9f0118c"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "2fb9432337a50b2e0d6db5a0a21f7d8b"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "dfe88597141b14c4e1e62bbecf8af2fb"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "6d541bf6a51764f1109c82f324ec79da"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "08aa35b631e03de50da5dcbf4ddffd10"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "7238ccdcaa65d5fca3eb352a18055d87"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "25ec4f893ff31a7d2012d0f88c4021b5"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "19538b8f02a03c8c2ddfe30d7850268d"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "6c55e3eff23183c39e8fb8b60b3a88c9"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "a7f205b0b6ce698f4bf9a35a2b9b7e0c"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "f380b7aaa9610890eeb12751ad11840e"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "3693210c4029297971905ad07f139bfd"
  },
  {
    "url": "posts/java/java-http-proxy.html",
    "revision": "d8dbe056fa92225c3b43237fc7ae0af0"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "a34462e8f8d52af02feb3aacbee44601"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "f2748d17126f01639c704209c18dfdd6"
  },
  {
    "url": "posts/java/java-spring-MyBatis-Annotation.html",
    "revision": "d2ce088ab01af74b68682107d88e25bd"
  },
  {
    "url": "posts/java/java-Tetris.html",
    "revision": "a0821d7dbf933194ef1c2b159a73d3d8"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "3317548c6ca22c51ae61e7eb6b8b08d8"
  },
  {
    "url": "posts/java/spring-RedisTemplate.html",
    "revision": "84e050e6eed9fe5f195ed7e6e435360b"
  },
  {
    "url": "posts/java/springboot-disable-autoconfig.html",
    "revision": "8a205289bafcf020c8016591db1bd169"
  },
  {
    "url": "posts/java/springboot-schedule-task.html",
    "revision": "7543c1b8d8757ec46a12475f7c9e85d1"
  },
  {
    "url": "posts/java/springboot-swagger-ui-custom-config.html",
    "revision": "d2a098d4ac562d7d298d632c1470a423"
  },
  {
    "url": "posts/java/TOTP.html",
    "revision": "ebf22fdb21bcc5d79411643e428d3856"
  },
  {
    "url": "posts/linux/linux-chm2html.html",
    "revision": "ba67d2468ef03f20fc83b087e48c11da"
  },
  {
    "url": "posts/linux/linux-ecs.html",
    "revision": "ec0f78859809cb77d8dd0e0b5d2071f3"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "d88a40e96122a68d65b2e23ee34b3aff"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "cbedf36ef9884077858bf69b152e2956"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "134322b85e299607d781cae12fb2c29e"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "762f73b8f81ede7aee2f0325edbba68f"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "4fea460b64d797e70878efc11392826e"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "8d9e19b2bd43f8f7a1c4f65db62d12d6"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "7f12c6d565e522c6e41b6090a1412727"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "f3e6cc233aaba6fcdd66ba83407b6287"
  },
  {
    "url": "posts/mq/ensure-not-repeatedly-consumed.html",
    "revision": "f8830173f3413a78fc9717df08d3b892"
  },
  {
    "url": "posts/mq/ensure-order-of-mq.html",
    "revision": "e15d0cbb789925a3b4575269e3c4af0e"
  },
  {
    "url": "posts/mq/high-availability-of-mq.html",
    "revision": "4c283ea7cbbb79d38b32cb33d9bc6eab"
  },
  {
    "url": "posts/mq/mq-problems.html",
    "revision": "81ca61ba8740e9a685bd4efc7e1ded6d"
  },
  {
    "url": "posts/mq/why-mq.html",
    "revision": "9df95f2882357a79f3093ed06715e505"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "f8403082ff5c57aa1ff29826f9e84279"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "9302b42195c296952ae4985e80c80831"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "0a81eb5448d7a4e9ba102873a8e38302"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "99ef482ed19db77311458839b1028946"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "9cd4270ad03eeaa671a3604a4527eda0"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "7329bde6b168c63ad96276f5acc29b93"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "a77b4c74e8e600a14bdd53c59df4c766"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "515d2b0f1ab961f3817114b9435b6a4e"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "8eb5cca0fbc741b6e4112b0ad98d5183"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "ccaed1ac1a88f7d484d4d8c0686d786c"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "a59083cd8f28c4c1615ba1a79d47117b"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "b6cb586700f95296e47b317d083fb3f4"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "b32bdad1eb294a287c252d54327ead3d"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "511384bd2ef5b6f17587d9b1ac7fbcd4"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "f28ec99b08bd503951c30d6f2b126b9c"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "824f07bccd5a6d3067a0417266736da9"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "6931f14d69c4c41b9e98a915dec6f7e6"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "e6399aae8ffc123c78672de50d02271e"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "30fe54a869646c671719b9d2e8ba71a2"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "11342d83ab8730458e4154702ece3cd0"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "035090975777108d2a076955081229cb"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "b74cac77800fffbf9f7b033ea2d99c52"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "7832677751d4450411b9a69d8d2141be"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "1fb9f9d6760eef46d8ea0b8bab2bcea8"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "a176b5181c0d8f05116667f0945dc211"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "13ed4ef33ecf60a49fee3896c9d029a3"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "f9f82f105110c86f3501b4ad63bb654e"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "8c8d1531c9a794d844430f6fc1d5730b"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "b4fa672d2b0f53ed38d6a99de728d5ee"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "f9666ec99f77a00c0960483e240bc1b7"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "a07c6d9977ba27e7e4b7b7c576b3622c"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "0854aec4d01093297015c21bf7e56e03"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "c94d346e2223134a86139ad16c7809de"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "df6e6ad29f80ead216fb9f880542fe16"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "933eafa4d44366241371314a3030bb71"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "6917b32e71d835039c8b04761bb7c241"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "10f895359d0840f4951a22beefbca73c"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "172d6068157752cc44bc43c31d6ca4e0"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "61306e1dce28276356a165f76a869745"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "f1a9f563417db9f1094957073735106e"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "4694082af38c1d410a97c317cea7b996"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "7387f717d9f431298b6fe9bb0fde374c"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "fe57608ff87167b774fd25fd540080fb"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "5df081254af22326ed088307f18141d3"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "6a3eb607b453bfa5c45093c0b22e5f57"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "f298c10777a99e7fd9d6b6e686bc5386"
  },
  {
    "url": "posts/python/whats-new-in-python3-8.html",
    "revision": "710472ec21ac9ded0762bea57a10125b"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "285ec4c483dc74783d8836ba0bfae014"
  },
  {
    "url": "tag/api/index.html",
    "revision": "62e92942643e870529eb495f587e1e8b"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "b165977236edf9a2d74967937b5ab6a5"
  },
  {
    "url": "tag/context/index.html",
    "revision": "52639cb0e1721f3786237b28a89ba1ef"
  },
  {
    "url": "tag/database/index.html",
    "revision": "b2b77297b8a8ccbdf59cf6cdf8f0dfb8"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "73880e53e586a81f7e20b325684e04c9"
  },
  {
    "url": "tag/git/index.html",
    "revision": "09d2346278cbcbf6d64aecaa75fc7e62"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "ca07ed2f97c547eea232b6cdfd8cd11d"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "a5d1c4cf7bd2194cb66f3671a6c5c7e1"
  },
  {
    "url": "tag/index.html",
    "revision": "ba9b39754433f0158fbcf4ca87ffc877"
  },
  {
    "url": "tag/java/index.html",
    "revision": "3cb39daa4ccb5358b6956f9a7e057661"
  },
  {
    "url": "tag/java/page/2/index.html",
    "revision": "ab400413a84ae728e4d9d000a5e40a16"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "ea4c8dd48ff1725e9148611e67b8f009"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "cd5ad118c1cbf731963942f7726a57d0"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "1582b28ffc5189fc49d93670ba3b24ca"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "6393484f0e702464c68b13f0611c8ae0"
  },
  {
    "url": "tag/mq/index.html",
    "revision": "fceb638aa0e7c9e318fdd96b4924b072"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "e708431cda74b88ea0725eb916b8fed1"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "14779229d8f1603916339ec315f62971"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "9289b4f92434e9b3fef1b509b12e4c05"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "efe303df141d03a790ab004688df3ced"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "2240ed1355f4ad5d90ee784e7b3b8c43"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "1eaf247965d373a10c90e818cab20282"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "6ad525cdeaee9c30af08c9aea63443c8"
  },
  {
    "url": "tag/python/index.html",
    "revision": "1e8d685114693b65fbe6ee0fd152536a"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "2ce3defdcc72c6936ffdf70b31d24ba0"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "5996c6515fa85c1e161de83b0b6eac98"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "910bb949f55a418cdba460ff139ca7a8"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "0ac8dd1d32ffb1b034c2682973bc0173"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "4b5bd4695ff2b12788233eab09fb629d"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "682ff173d8f0b0d2399a4369184d9f43"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "46c98597b705df0b64074a17bba8607d"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "aa9166a8da70a03526924c0946d1bf6c"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "ce414a5a1442afc5cc0b4d1f6096efad"
  },
  {
    "url": "timeline/index.html",
    "revision": "87a05d0598164af60c41c48037552e63"
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
