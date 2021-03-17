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
    "revision": "0b3724cf97df9b4acde0bf5697cd951a"
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
    "url": "assets/js/100.5feda598.js",
    "revision": "0f64cadc9e38059883da5fe3f6c1c936"
  },
  {
    "url": "assets/js/101.535cb29b.js",
    "revision": "bd42db23dfecbaf85b5f029fb5757bf5"
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
    "url": "assets/js/35.02eda425.js",
    "revision": "85b256944a246fdfc9e75e6c0b266ec2"
  },
  {
    "url": "assets/js/36.1db87d0d.js",
    "revision": "f1acdaecde2ff301a46b5c8b1e225537"
  },
  {
    "url": "assets/js/37.7f4f530c.js",
    "revision": "e86764f7bac36d06cec23d4efe4bbdcc"
  },
  {
    "url": "assets/js/38.d1c24ee5.js",
    "revision": "4bb568dc6c80a20628e3d11f792b5a12"
  },
  {
    "url": "assets/js/39.54f143e0.js",
    "revision": "301611c90b207e32ead698e7785db3c2"
  },
  {
    "url": "assets/js/4.82827657.js",
    "revision": "16886d2cd0cbc839eb15b36b6007f24d"
  },
  {
    "url": "assets/js/40.cff0ff56.js",
    "revision": "abcfcc99fd8e0a7bd27c0fe65788b78a"
  },
  {
    "url": "assets/js/41.1a833ccc.js",
    "revision": "82c34caa188d05cacf0c433fa59080b6"
  },
  {
    "url": "assets/js/42.1c7b695e.js",
    "revision": "2e0c782b7658d4fbc4e06b6617cc56c3"
  },
  {
    "url": "assets/js/43.f25313d3.js",
    "revision": "a0d2b5d72f77efb214e946a8c3b9e3b6"
  },
  {
    "url": "assets/js/44.b254ba5b.js",
    "revision": "9fec1abe542f459cabccb330770e406b"
  },
  {
    "url": "assets/js/45.410a03e3.js",
    "revision": "f106bf1bf903c42359485c647e5a88a3"
  },
  {
    "url": "assets/js/46.08e3cb20.js",
    "revision": "c6dcdf4a6d26492ab443338730f9de3d"
  },
  {
    "url": "assets/js/47.b86194af.js",
    "revision": "7ce99437c2ad8ac07d08e855def14f68"
  },
  {
    "url": "assets/js/48.4d1b0496.js",
    "revision": "3e1defb00983dafe31676c3600016c09"
  },
  {
    "url": "assets/js/49.ffbed81c.js",
    "revision": "2a23334fb0e0e6ccfcefc2cb02717e2b"
  },
  {
    "url": "assets/js/5.f171fb5b.js",
    "revision": "1c432ec3e561c0caacd0919ac5415365"
  },
  {
    "url": "assets/js/50.e8da151d.js",
    "revision": "87adf2453b0e5fdcc5b4414c78b4aa98"
  },
  {
    "url": "assets/js/51.8374468a.js",
    "revision": "ff3a51a770f23c0463990ce49760dabd"
  },
  {
    "url": "assets/js/52.ac5631c4.js",
    "revision": "553f842879f656e589a0a7589bff4541"
  },
  {
    "url": "assets/js/53.b495cf63.js",
    "revision": "4aa82c49091521eb49de0b51258e0435"
  },
  {
    "url": "assets/js/54.d051897a.js",
    "revision": "ef8354f944fd717f673b0115da27a7d0"
  },
  {
    "url": "assets/js/55.e4350e65.js",
    "revision": "f22c13b88bb2a997a7052e6a59310dc1"
  },
  {
    "url": "assets/js/56.fb510662.js",
    "revision": "bf201bcca21e5f9eaf287d0912ffb990"
  },
  {
    "url": "assets/js/57.503e387b.js",
    "revision": "8262581670886e3ae73e6e2554d4d393"
  },
  {
    "url": "assets/js/58.63421cb4.js",
    "revision": "f62acda1e7bc63822fc8bf0516aba9c1"
  },
  {
    "url": "assets/js/59.db1e6817.js",
    "revision": "492a6d8f18f37f0f9529317ec757a693"
  },
  {
    "url": "assets/js/6.6d7bedbb.js",
    "revision": "91579a973bf33c858aea0e27e16600c8"
  },
  {
    "url": "assets/js/60.9a50df0a.js",
    "revision": "6754ba07d2c7cfb5989cf07d9c83e0a1"
  },
  {
    "url": "assets/js/61.5a94b84a.js",
    "revision": "293b53b8cc8cb6c726ea49b584477a90"
  },
  {
    "url": "assets/js/62.bac1a344.js",
    "revision": "efadb2a7d8b0805a900712acacb7ee4c"
  },
  {
    "url": "assets/js/63.e2719cbd.js",
    "revision": "9a6ccc340006f135326e5e50443b2b6a"
  },
  {
    "url": "assets/js/64.989394a1.js",
    "revision": "52c1adf285e63df24394e3410f4c49d1"
  },
  {
    "url": "assets/js/65.433cc940.js",
    "revision": "4c4ad8980608dd32881c9eb933286087"
  },
  {
    "url": "assets/js/66.28c4e0cf.js",
    "revision": "ac4480a1dde4c1aea54b8b9433c2e002"
  },
  {
    "url": "assets/js/67.e3d65866.js",
    "revision": "33a508e772a4adeb68a96f3be8257afd"
  },
  {
    "url": "assets/js/68.06f1f00b.js",
    "revision": "ae0ee27ebc3a66b283356fbb26e6f539"
  },
  {
    "url": "assets/js/69.2267595a.js",
    "revision": "2aff2b7a64443e280ab5d77379acafa3"
  },
  {
    "url": "assets/js/7.76b7dfa7.js",
    "revision": "715c723dc2232b73f9c1500622b1fc01"
  },
  {
    "url": "assets/js/70.0f005875.js",
    "revision": "5092085f4aec807e9caf00af9a988cda"
  },
  {
    "url": "assets/js/71.9e85fd88.js",
    "revision": "8087d07813b8a21dc8e12f6dd4cbbb4f"
  },
  {
    "url": "assets/js/72.a750cda4.js",
    "revision": "d8d934d2242bb8a59079def235d61bc5"
  },
  {
    "url": "assets/js/73.3f3ff9e9.js",
    "revision": "bfb232a9ea5e76fcc5d9c1634cfe234d"
  },
  {
    "url": "assets/js/74.aa1401fc.js",
    "revision": "0703788bdd7546f9a87b743b088c98d0"
  },
  {
    "url": "assets/js/75.f9aee9e1.js",
    "revision": "f5b0057ba95d0b0c9a500e49d9e91369"
  },
  {
    "url": "assets/js/76.991b64a4.js",
    "revision": "cb8089ab341d747794a0ffdcff549fed"
  },
  {
    "url": "assets/js/77.deb1be17.js",
    "revision": "c0246c0ea219f2aaae13fe85e0d90cfe"
  },
  {
    "url": "assets/js/78.8f458584.js",
    "revision": "ed6fca186a48b3ae59f58ca5420a1b75"
  },
  {
    "url": "assets/js/79.4d5170cd.js",
    "revision": "0976ea8293f5c091aefa2dc0c8856438"
  },
  {
    "url": "assets/js/8.07210b02.js",
    "revision": "f9bec44862f6ba153247245d31c65124"
  },
  {
    "url": "assets/js/80.703b509d.js",
    "revision": "d7ce4fee20f7d88e1c46080b95713038"
  },
  {
    "url": "assets/js/81.215c2d5c.js",
    "revision": "e56249d66085960b254e728d8100462a"
  },
  {
    "url": "assets/js/82.6a807f3e.js",
    "revision": "ee7cf8d802afebd923ceeee5c46fe632"
  },
  {
    "url": "assets/js/83.61b4a1aa.js",
    "revision": "73fcce790212978e712bc8b1a9a9fedd"
  },
  {
    "url": "assets/js/84.6abe36b5.js",
    "revision": "dfa5f5bad73de4b05ba80d0c63138a25"
  },
  {
    "url": "assets/js/85.8011fba7.js",
    "revision": "9ec9547e0a3e0303e362aa3e2636016e"
  },
  {
    "url": "assets/js/86.0c3025ff.js",
    "revision": "80b3d647ed00af84f3c37268a7102fb6"
  },
  {
    "url": "assets/js/87.a0cadacd.js",
    "revision": "38ada6b8546a84c1e627f79546258b9c"
  },
  {
    "url": "assets/js/88.ded6e372.js",
    "revision": "e52a2aeb52f79569b29929b6462d42bb"
  },
  {
    "url": "assets/js/89.6ae1492d.js",
    "revision": "9935cbffc3f6f55569b215cfde83dfc4"
  },
  {
    "url": "assets/js/9.4e211dab.js",
    "revision": "8ea2f16ddd2e478b387cc9b692c4c63b"
  },
  {
    "url": "assets/js/90.57625fee.js",
    "revision": "a4d9f28fe3c28ac9862e41ec2f6d6a85"
  },
  {
    "url": "assets/js/91.3bd64bff.js",
    "revision": "e92d33997f2af89d729693e6b24bc82a"
  },
  {
    "url": "assets/js/92.25422fc2.js",
    "revision": "a717b70260875b4aa163586ae52d6692"
  },
  {
    "url": "assets/js/93.3d10ce67.js",
    "revision": "644d7bc6b04068996ab312792698e8cc"
  },
  {
    "url": "assets/js/94.16a65db3.js",
    "revision": "5ee1bba1d89e11a8ce0971c5c743c924"
  },
  {
    "url": "assets/js/95.009c572c.js",
    "revision": "a9572a79ea0241f6d9a25bd039fbaf48"
  },
  {
    "url": "assets/js/96.dc087f4a.js",
    "revision": "63567d6f42a1053a5042cb98c5e42bb8"
  },
  {
    "url": "assets/js/97.bcf70b30.js",
    "revision": "5477fd9c086f22711c5d39a234a92e46"
  },
  {
    "url": "assets/js/98.de832be5.js",
    "revision": "f36028af4efc8a0d9dbef49c805ad7b9"
  },
  {
    "url": "assets/js/99.ccfb663a.js",
    "revision": "a822295592129fc5464df4f890801df0"
  },
  {
    "url": "assets/js/app.7149289a.js",
    "revision": "f7a07fffc3500ad6e0fc54a330d54fec"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/database/index.html",
    "revision": "c59856193abdfff0f9d1593663644161"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "406f000a901285014e8e14544dccaf78"
  },
  {
    "url": "categories/front/index.html",
    "revision": "0e2dff86330a8d09b3dd25e23cf22196"
  },
  {
    "url": "categories/git/index.html",
    "revision": "a6c2ea311db3b30b08ebe5a587590477"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "520840e38dad565570eb73e947539233"
  },
  {
    "url": "categories/index.html",
    "revision": "091d7b7f1919da31d7a2fd058ddec24f"
  },
  {
    "url": "categories/java/index.html",
    "revision": "85f1397a5395d7e58ca46892b5067b75"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "d27b777624b4f5b43ad495c364d95974"
  },
  {
    "url": "categories/mq/index.html",
    "revision": "2c36e41d58342d20207233dc8aca457e"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "61ffa194fc5ae94a8b43093b39b1e13c"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "591fd7efd4e62eb1975c10d5eca44327"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "a958f35ed2f4e5b949c4e297ecf6f567"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "be19492021197a4baeb8e3c990a0ae8f"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "94cf16ef52142e3ed65fe1a59c9bbbc0"
  },
  {
    "url": "categories/python/index.html",
    "revision": "3ca59cb89abbbf33b215ab2c109dad3a"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "20432590cb3cdf919036da7e5cbe86aa"
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
    "revision": "edb5bdd58e6d3de77051cdb11c983898"
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
    "revision": "273e3e51df3028fc67a2ac6fe0b0cb79"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "3e75d64f2d4bc170a95c177751afa3b6"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "53d1e7e1e0eea716b33fa5a0c70f6c54"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "0dd0b0859ff3acf7f745b862d24120d4"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "92c93aa364ed6371e54945ed7e9eb143"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "c46361f45730cd97d31a9f1e91137e1c"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "9986ab05d41ab34c8470ef71e79742f6"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "0620a7cf39a6fad7e02cb78db879ac85"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "3c103420f8a493612da527a74f13dce8"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "08b408403625ba6f54934a06610d5ef2"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "f86de33e3a61f46fbb3617b08d73f4a6"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "92b52174da12a23443d8bc711f6df7ac"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "7aa30cc9eb241fa47da4566b6563798b"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "c5a7dfc4ec85b332af958c7ecf4bcd3a"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "e7ac5b3869495f883f480c2403166e3c"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "635dd50e476922ca46a3f7c7caf4c701"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "5ee73e91b8416e24416926432b5e01e9"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "b6dddd87165b00bc9d8de0d11b2d0825"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "53d754714495178b49db03d659ee2a5c"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "e2a23316ddf50b083421f44493d7b7ab"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "1f37b18784905d251dac7935486f21f3"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "d09043b5cdc12342d9f02ca474ad0024"
  },
  {
    "url": "posts/java/java-spring-MyBatis-Annotation.html",
    "revision": "e9fe6b387d5aaa5d1aaaf230f7d3b6af"
  },
  {
    "url": "posts/java/java-Tetris.html",
    "revision": "55087b1dcb31439df90da35ea6e95d4b"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "8f82c4ac18be5a49a87bd3647cbae62d"
  },
  {
    "url": "posts/java/spring-RedisTemplate.html",
    "revision": "09baa28d502a2b9119447b6b83deb551"
  },
  {
    "url": "posts/java/springboot-schedule-task.html",
    "revision": "21965b804990c439f1b601dcc5abd583"
  },
  {
    "url": "posts/linux/linux-ecs.html",
    "revision": "feddb3fe05f99f324552bb282ff1bbf8"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "e97ef42f1a4fc20c072e9f57d617ad6b"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "607501ea0747c33e3ab8fd4c74ae4916"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "93c23b6d33dadca8963c6a91fe35d488"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "8520bf940e00c97fa94b7d94dff9926a"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "a5ed90bd0f0b8a455beac514c0340151"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "9fb2e3f06ff89265a456f15eb06f37bd"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "5fd9fd9ef24334932df9fde5ce463e3a"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "9728c518ea2393ace374dd734fb6e629"
  },
  {
    "url": "posts/mq/ensure-not-repeatedly-consumed.html",
    "revision": "7a8a5e7cc42fb493c8f17e76b045e1e0"
  },
  {
    "url": "posts/mq/ensure-order-of-mq.html",
    "revision": "574e13973cef542c56c01b726d706e8c"
  },
  {
    "url": "posts/mq/high-availability-of-mq.html",
    "revision": "722308f9bbaf248fb117a8fc8ae498eb"
  },
  {
    "url": "posts/mq/mq-problems.html",
    "revision": "b5e53ee94be821553a374e324c2ba475"
  },
  {
    "url": "posts/mq/why-mq.html",
    "revision": "5db9c6e0644aee4e8e48da06203339b2"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "09d0695937222867031f83c79178c282"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "8dfbb516622a5e2f07902f2002858447"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "031808e30b41d3528ffd84b26f93d577"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "e57ca49702c0119402b421803226fc41"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "cd354aec64bbaaeb96c5567835ab5f39"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "3dfac45d8f1bbb117dbbfd652bd5a0a2"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "d2e8ec06ce5c1cb50c3b101e2e08430d"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "b485406f762fc1c7d21dfe71a342fc61"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "1aecd960d94bf9ad9a492eb33794b23a"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "48f56b2e13d52ebc252c41d7150abf56"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "b8762081eec94a65660ea7b5099f5524"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "01cf5720583e1f7b76c6bd29bc4f92d3"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "c6fd99b53f9e41637f0aa75b37cebf42"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "9aed0dc1283805a597946dce82508666"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "019400e869ca118ed23d2b2b4e8eddf8"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "2bc8b25691cc6c7625cd49b521578d73"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "43e7431ba014ca73ae1e115e4379933b"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "0a3764753adc9491f0c7399c267cbb9a"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "14bcee633f3ac1582a692b699812c69c"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "623bffbd64707d6e1009e7224dbc1ed3"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "a9d06b5e82dbb05d01f7e8ae0d4787c2"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "d58b633a1c3d018c0e2e76a7f7b60821"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "7868b7352889bdf83d39e4027e1a281f"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "815e7e8fbe39c92f58cb8e5a5211ba59"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "c9434249545b795182ba6e658406e4dc"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "486758d595472cf0fa2707e02e8c837d"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "88368fede251df458100bbe94d16d72e"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "ade6871811fa02a27616927ad5ba48ce"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "fc364d63557b63324edbb79091ba8ad9"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "1bf5fa7d9c73c8b4e655d6fb4e8d1afa"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "4029de4ce006c0c57bdd06240aee9fac"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "86f2c62505052cd10d2137d5df13275f"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "e7f9a56aa2766ed377299e6006f66c3f"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "674f1d2985c5d42a4f06fc94ebf3b8b0"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "048cf9cc4b0161dd419247e61e2b6de1"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "1597dea3b37a29feb4123b8ec7c86bc7"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "543d8c00f4727ae3e63ce03bda9f2067"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "d2136c419e14d36ecf6d701120869446"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "98c62a91df48ee4d7377a6126f204e6b"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "722573b97d73c91d871e06366821eaad"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "a7b98f6d3fb98933f22c99f856ac9d17"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "d063d04ee7d0e051366cdc393f12b4b1"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "e7f981540463159f51c2700c9c8924b1"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "5cabd292b3d2a5cb82d12d6adda37604"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "a5ea5b5a230b779b0239ebe347969425"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "7e233635fe434b0ee4e5c1c29d8df20e"
  },
  {
    "url": "posts/python/whats-new-in-python3-8.html",
    "revision": "f8b39547aa1f720b649be69002d07b10"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "77a093dacb32df92d8963125a63429f1"
  },
  {
    "url": "tag/api/index.html",
    "revision": "cb05749f0363c4d82d828c95c8091224"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "f449bf6fcbed22893e4ea5fc7770e985"
  },
  {
    "url": "tag/context/index.html",
    "revision": "1bc707205948670a98c844cf61e0b5ab"
  },
  {
    "url": "tag/database/index.html",
    "revision": "d76c4e419bbdb40bc38257d6098aac42"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "e82263371727ee06eb2ab2987a19fec8"
  },
  {
    "url": "tag/git/index.html",
    "revision": "5f988575531967b2658c0eecdc970383"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "189af2ecd8fda26f8b10d49ed9e0a4ac"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "33f04ba5ce50209075eedc5a69851d2f"
  },
  {
    "url": "tag/index.html",
    "revision": "301dbe41a815aa93a28de636f28c4749"
  },
  {
    "url": "tag/java/index.html",
    "revision": "18ccdf3b69d30699166ad8644fef7d95"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "e7c70a1932d3f8eee7e14af62d340129"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "9f4b12e2f648f922f5ade2f1d238ccca"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "42fb0f73279f744dc9882b3a86981593"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "c2a397aee5676e32c2334e41cdc02dfd"
  },
  {
    "url": "tag/mq/index.html",
    "revision": "099be4def76cc6c0e0b601832b85bd99"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "ac09f6023de48d40ea56fcaec5b621ba"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "1d0a0d8998146e5a9611b165253d9412"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "91c01bfad4838f9667bf01a0df0161a8"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "a34c683059c88ebde2c806e6c5ee6b54"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "157b226e25f6f7d30c73f54a4c7f1123"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "6d7da626c9ae3db7141e19712ea5b98b"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "bdd588e920f5fe6ef5be2a5dee8802af"
  },
  {
    "url": "tag/python/index.html",
    "revision": "66ac5603c456dd0b0439a9189dc50709"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "1fdc8f72cf749a629b2467239f481e9b"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "93493f4473eb4fa396e8a11bc8d76816"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "4b2b53ce921bae65ae1fc51721b32e9d"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "7cc5dc000dd67c3e945b0714a882d5cc"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "308d8c79ddd0dc36d6020ecfc5b217ad"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "7c7702caef38a4c25eb20f098241dc2b"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "8535e767d3562235b2274305bd8d59a2"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "0a85c5637463678d1b1d326f2da7cb08"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "bc452531d8345fd24ed9ffcda7f5d819"
  },
  {
    "url": "timeline/index.html",
    "revision": "35fb4aa50b388362a2b67c2c68f4d5ed"
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
