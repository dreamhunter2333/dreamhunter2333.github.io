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
    "revision": "4bee5b0903c53fe82edb96b5d3dd2fff"
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
    "url": "assets/js/100.4a3227e1.js",
    "revision": "13c60c3541c76a7431c6d2864d10dccb"
  },
  {
    "url": "assets/js/101.66a85b7b.js",
    "revision": "6f6dfd7ef3d069624d50be7ffb575482"
  },
  {
    "url": "assets/js/102.b916aaef.js",
    "revision": "2de168e94b475823eb3ad18c06343be2"
  },
  {
    "url": "assets/js/103.1e4aba6c.js",
    "revision": "671cb98c5b930ac2d6a2a096ab5667e4"
  },
  {
    "url": "assets/js/104.b57a60f4.js",
    "revision": "c3369e06d3cc7a8a6f7faaf453f92162"
  },
  {
    "url": "assets/js/105.d1ff0a9c.js",
    "revision": "53abd8740d8e71a10b3d1b0b71d82cb2"
  },
  {
    "url": "assets/js/106.4978c526.js",
    "revision": "795750e329ce60fb465c52aa2b33b3d3"
  },
  {
    "url": "assets/js/107.974e6c19.js",
    "revision": "b957313117c13023820220c1e49a0974"
  },
  {
    "url": "assets/js/108.8f38d0bc.js",
    "revision": "69473faf25acbb514486f807ea49c602"
  },
  {
    "url": "assets/js/109.cb40c1ad.js",
    "revision": "f8f1d7d770144dbbfb15b5f30c6e94be"
  },
  {
    "url": "assets/js/11.69b157b1.js",
    "revision": "4c83239fab190348e9d5dad712041630"
  },
  {
    "url": "assets/js/110.9cd0a40e.js",
    "revision": "3722f143196cbc598a85d34c55cdb04c"
  },
  {
    "url": "assets/js/111.f25dec33.js",
    "revision": "96143ab336f8d3cca4d8ba12f15c9bf6"
  },
  {
    "url": "assets/js/12.e4c9aad0.js",
    "revision": "6aa371c26f8c6eea65301c8820a37a6a"
  },
  {
    "url": "assets/js/13.4d083014.js",
    "revision": "35c101f91adb13a019b84ab47c9c2b20"
  },
  {
    "url": "assets/js/14.7479fa85.js",
    "revision": "e0827dbcd17b2def86e2de343299a716"
  },
  {
    "url": "assets/js/15.1a209b6b.js",
    "revision": "ca9f6100275f8729197ffb8f36935573"
  },
  {
    "url": "assets/js/16.414596c3.js",
    "revision": "9f841d98ce374c14a2144f806c481c14"
  },
  {
    "url": "assets/js/17.5d1f232b.js",
    "revision": "0f45c5ab85e6415891550bc26783c96a"
  },
  {
    "url": "assets/js/18.bfbe973f.js",
    "revision": "8762f3d0397989b6b044d8f6869fbf90"
  },
  {
    "url": "assets/js/19.4b4e031f.js",
    "revision": "722c04e26b8341bc19e58bac094c4db8"
  },
  {
    "url": "assets/js/20.b3015845.js",
    "revision": "7252f54aa37a4dba08f6d34400ceca97"
  },
  {
    "url": "assets/js/21.b29fbb91.js",
    "revision": "7167b90d0f977984db1fbe719c74822e"
  },
  {
    "url": "assets/js/22.9f4a8b2c.js",
    "revision": "b70abfd66608513a70796e17c81ea33a"
  },
  {
    "url": "assets/js/23.db82dc53.js",
    "revision": "a612dfe953ff97c15c6163f20f4c4beb"
  },
  {
    "url": "assets/js/24.fa9741d6.js",
    "revision": "a61f2d88d5bf3b13c0750bc92e69f19f"
  },
  {
    "url": "assets/js/25.240e200a.js",
    "revision": "2b5e4eb31442c468d09a86c917223c56"
  },
  {
    "url": "assets/js/26.309e9619.js",
    "revision": "0bf4048f3a77a4a112c86ed53ea4a20c"
  },
  {
    "url": "assets/js/27.6b49f96d.js",
    "revision": "33cfbb2e939028bd6485bb96c28762a4"
  },
  {
    "url": "assets/js/28.2a4e5229.js",
    "revision": "df057511b3631863002175aa3c21d5b5"
  },
  {
    "url": "assets/js/29.0aa65d94.js",
    "revision": "87fa4447c4bb73bef37daf7ea37d7521"
  },
  {
    "url": "assets/js/3.364fa3fc.js",
    "revision": "e526d0c70dfe47b40232c01450bcf7d0"
  },
  {
    "url": "assets/js/30.26f021c1.js",
    "revision": "2fae002751fc9187696ff5ebb557b0c8"
  },
  {
    "url": "assets/js/31.9a1f9976.js",
    "revision": "ed6219094d3527462834910ff8538d75"
  },
  {
    "url": "assets/js/32.ec29073f.js",
    "revision": "6f889e8de3e9bd6aaf4a438ae3f76632"
  },
  {
    "url": "assets/js/33.022d6c0f.js",
    "revision": "8175b821411bed7744fa8269455ec748"
  },
  {
    "url": "assets/js/34.6163e5a4.js",
    "revision": "595ad4bf9e99903a163d3e36690aad06"
  },
  {
    "url": "assets/js/35.49bb3bc9.js",
    "revision": "da06c189f48464ca6de02ec12c660b2c"
  },
  {
    "url": "assets/js/36.8db3a466.js",
    "revision": "863dd0ab054d049669d4eb14c18531b3"
  },
  {
    "url": "assets/js/37.66567e98.js",
    "revision": "e86eb116e1a32a69b154b41af3b0217b"
  },
  {
    "url": "assets/js/38.f8bbc67c.js",
    "revision": "755cc877ae88814bf9e8ea1cdc5633ab"
  },
  {
    "url": "assets/js/39.93ee8a84.js",
    "revision": "f81990aa71391eb1f157f667ab7ed59e"
  },
  {
    "url": "assets/js/4.82827657.js",
    "revision": "16886d2cd0cbc839eb15b36b6007f24d"
  },
  {
    "url": "assets/js/40.1a37b769.js",
    "revision": "9bb3b554b39450fdf5d9501484789227"
  },
  {
    "url": "assets/js/41.811398e6.js",
    "revision": "02bc8591431d33479666fbecc51ad6e6"
  },
  {
    "url": "assets/js/42.24500618.js",
    "revision": "9583ab998b7ac26a922b652b53451921"
  },
  {
    "url": "assets/js/43.f2b972f6.js",
    "revision": "08065a51d93772554a5c3e55acbbba3f"
  },
  {
    "url": "assets/js/44.764ba3a6.js",
    "revision": "5a5a103c7ccbf95dfdbb29691f13c6bc"
  },
  {
    "url": "assets/js/45.9cf514f7.js",
    "revision": "35ced9118733abf9f7bf001b1e8f62f3"
  },
  {
    "url": "assets/js/46.8b5dbd09.js",
    "revision": "06233c2ed4b6ed25236f54cc182c36c0"
  },
  {
    "url": "assets/js/47.6131bf7a.js",
    "revision": "2d81f4bface739cdb17bd78da65e2549"
  },
  {
    "url": "assets/js/48.560d1607.js",
    "revision": "6f69eb8dac2e70dcbb2faa12a7d95d8f"
  },
  {
    "url": "assets/js/49.8a33220c.js",
    "revision": "d7b3c17fd228ca0c59a681664cd21596"
  },
  {
    "url": "assets/js/5.f171fb5b.js",
    "revision": "1c432ec3e561c0caacd0919ac5415365"
  },
  {
    "url": "assets/js/50.dc0ac792.js",
    "revision": "ce4de1560ceac83740451bea74f62929"
  },
  {
    "url": "assets/js/51.c63dec9b.js",
    "revision": "2efc4217fa66ddedb180ca8eccaea1a6"
  },
  {
    "url": "assets/js/52.404929bc.js",
    "revision": "3b5b8e54086ac90eab546b18cb91f6d8"
  },
  {
    "url": "assets/js/53.f62d08a6.js",
    "revision": "918df6511ce0f476ef75845ff3f61bb1"
  },
  {
    "url": "assets/js/54.acd203db.js",
    "revision": "be02c66107cc82c2398239be058e2ac0"
  },
  {
    "url": "assets/js/55.4195db73.js",
    "revision": "169d58dd9be94ffc768bc884c2b99983"
  },
  {
    "url": "assets/js/56.55be97bd.js",
    "revision": "05712d7a89a9928cfb6bd320a32018b4"
  },
  {
    "url": "assets/js/57.babdfdba.js",
    "revision": "b7f111e1f9b3e8f4ff5cffea0136dc6b"
  },
  {
    "url": "assets/js/58.e9edeafe.js",
    "revision": "74e396370f59c88434be6bca9d8debfc"
  },
  {
    "url": "assets/js/59.916e746e.js",
    "revision": "0b26d8b6dbf855d4f4aa7bc46e35e9b5"
  },
  {
    "url": "assets/js/6.6d7bedbb.js",
    "revision": "91579a973bf33c858aea0e27e16600c8"
  },
  {
    "url": "assets/js/60.86fe026c.js",
    "revision": "4d637ee28e31f4fb785f67e9b64622d6"
  },
  {
    "url": "assets/js/61.407746f6.js",
    "revision": "30d83de12d683c38c71f31fef3ca7de7"
  },
  {
    "url": "assets/js/62.cc3d6631.js",
    "revision": "000eceedfa37fffc6f6bde9a54d05161"
  },
  {
    "url": "assets/js/63.f299dbf6.js",
    "revision": "e9cd9a1150b2781eaa64b2f8393b3dca"
  },
  {
    "url": "assets/js/64.aab64f3b.js",
    "revision": "b16749899fddd2211a2b346dca22bb10"
  },
  {
    "url": "assets/js/65.df38f028.js",
    "revision": "231ca8c3aebb4dd233bfa01a68254771"
  },
  {
    "url": "assets/js/66.8d63adca.js",
    "revision": "ccc999669f385db2072282ebe704fb41"
  },
  {
    "url": "assets/js/67.d14fbf6e.js",
    "revision": "e9f235800fc231a523be9b0aa7b81cc2"
  },
  {
    "url": "assets/js/68.96a42bf6.js",
    "revision": "f6faae59d19c56f97bf0dfc8864b3207"
  },
  {
    "url": "assets/js/69.750ae61b.js",
    "revision": "eaa09a995e0fa9662ab7872abb5517b1"
  },
  {
    "url": "assets/js/7.76b7dfa7.js",
    "revision": "715c723dc2232b73f9c1500622b1fc01"
  },
  {
    "url": "assets/js/70.b8192732.js",
    "revision": "eaf8f17de719112b6321f8ece30f54d3"
  },
  {
    "url": "assets/js/71.c371ff46.js",
    "revision": "42ca008c2a1b9dad002b318b404c89b7"
  },
  {
    "url": "assets/js/72.49eebe52.js",
    "revision": "b503ee6ca7f1cf04d7549870342dd487"
  },
  {
    "url": "assets/js/73.3c4daf1d.js",
    "revision": "8a11bc490140c0f2366eaecb1cccc071"
  },
  {
    "url": "assets/js/74.e24c07ce.js",
    "revision": "57615781ef9d52cc953dee647101fb3c"
  },
  {
    "url": "assets/js/75.143156dd.js",
    "revision": "bb57f83019cfb37fa2bf663296fdbbc0"
  },
  {
    "url": "assets/js/76.6ed14846.js",
    "revision": "7fe4e476f60f296e6b2e407d94213ec3"
  },
  {
    "url": "assets/js/77.8fe0f6e6.js",
    "revision": "252765ab15ca052f5aa55744cda53edb"
  },
  {
    "url": "assets/js/78.a9cc3a82.js",
    "revision": "f57e5147176124b499273cce44bd4ee7"
  },
  {
    "url": "assets/js/79.45d2e8e0.js",
    "revision": "db54b3006155f11c9c04ca6639b7f59e"
  },
  {
    "url": "assets/js/8.07210b02.js",
    "revision": "f9bec44862f6ba153247245d31c65124"
  },
  {
    "url": "assets/js/80.6560d69b.js",
    "revision": "008080745113e0e5f5e4a87bf9ebbcd2"
  },
  {
    "url": "assets/js/81.5e11ef79.js",
    "revision": "86e0a943ec7d134e44dd633f19646a35"
  },
  {
    "url": "assets/js/82.c6b967e5.js",
    "revision": "594a538af699164faae2c3a1505f3277"
  },
  {
    "url": "assets/js/83.a386c94c.js",
    "revision": "2c46d34444026a5d8418abd39c71af64"
  },
  {
    "url": "assets/js/84.33c47d2d.js",
    "revision": "7709de35c453c2bb72df04c80b23f55f"
  },
  {
    "url": "assets/js/85.e71c878e.js",
    "revision": "d109955367b0e02839c039bcf54c5cd9"
  },
  {
    "url": "assets/js/86.fbf5bd57.js",
    "revision": "62ce9b90882bfd84cc01a6acbf25fa8f"
  },
  {
    "url": "assets/js/87.6b791cc9.js",
    "revision": "639417c90bfc86bc9086dfb8642b24f4"
  },
  {
    "url": "assets/js/88.31699506.js",
    "revision": "457e43b2d3cf907762ab4ec90b0e27c4"
  },
  {
    "url": "assets/js/89.60c2bd0c.js",
    "revision": "1faf02699feb17dd684731effe0aa7d5"
  },
  {
    "url": "assets/js/9.dcee3ed2.js",
    "revision": "101d2b040209c4669f3112a0b221a028"
  },
  {
    "url": "assets/js/90.ee925e02.js",
    "revision": "432b6d31aa300390320b1ef911159f0b"
  },
  {
    "url": "assets/js/91.609fcbc7.js",
    "revision": "ac01c550a47554abcf263d8da97ac173"
  },
  {
    "url": "assets/js/92.c973c531.js",
    "revision": "bec30bcf2544c3da31f4efa7f72c9681"
  },
  {
    "url": "assets/js/93.ab469190.js",
    "revision": "38684c6c03fc404c69b350a791bbd3d4"
  },
  {
    "url": "assets/js/94.049f9004.js",
    "revision": "5894c3259567f1a394e34b1e72013834"
  },
  {
    "url": "assets/js/95.0784bd37.js",
    "revision": "a43aa66c4978d092633c2f6c68dbb88d"
  },
  {
    "url": "assets/js/96.f1e5a982.js",
    "revision": "bca861d4b5de268b6f377149059c77f8"
  },
  {
    "url": "assets/js/97.785f26c7.js",
    "revision": "e2dd62270b934dfcd9be22d8a0081b51"
  },
  {
    "url": "assets/js/98.c84e03f8.js",
    "revision": "ffa2bcac33d1778390c5df5f52ee889d"
  },
  {
    "url": "assets/js/99.9787d216.js",
    "revision": "5eee6ccc1a8f269522104933570f545a"
  },
  {
    "url": "assets/js/app.e5e49efd.js",
    "revision": "1ecd85912d6bd796bdbd5d03120ecfb5"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/algorithm/index.html",
    "revision": "7a1c75603051fee666b41baad2cc20bb"
  },
  {
    "url": "categories/database/index.html",
    "revision": "9be2215f1cd59ea4d78e178e593a30dd"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "572d0874536453b8caf50df7e5aa075c"
  },
  {
    "url": "categories/front/index.html",
    "revision": "1dce7f05e5085aa9b5b3c1c70ee8582c"
  },
  {
    "url": "categories/git/index.html",
    "revision": "5f2e6fcc9ec138297a8e7fefc3a081bf"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "d805da39d6c15a94ff9e2275f598e68e"
  },
  {
    "url": "categories/index.html",
    "revision": "734a38941662b4d2bca6d4af72bd7ea8"
  },
  {
    "url": "categories/java/index.html",
    "revision": "bea5b21393c1e705d4b5b18f4c99c2a3"
  },
  {
    "url": "categories/java/page/2/index.html",
    "revision": "959122772d69888501587ffc66e39a57"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "c3adac1c105f8c231e04d2ee94ae28e7"
  },
  {
    "url": "categories/mq/index.html",
    "revision": "ff8d00aa57091c3efe591c82842df5fe"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "1278af5fcea0f16704a4e4aae9838921"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "0781a453145e3a5b7c2a4a40c95e1d0a"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "b47efa969da6cb970051aa0b39709e35"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "a48340eb7a80e4424d133c3eae921465"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "bb26d21c2b25ec3b7a724bf4597b8dd1"
  },
  {
    "url": "categories/python/index.html",
    "revision": "c7cc2d072f36316efad3b670c1a89870"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "02c146f36f2e25b093050382deac282e"
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
    "revision": "3b3715a1f34770fd96caf710a5a743c6"
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
    "url": "posts/algorithm/traversing-binary-tree.html",
    "revision": "afb27f8058821b6a9cbb5c44b46e1527"
  },
  {
    "url": "posts/database/SQL-constraints.html",
    "revision": "f2ba0bb18f4521750b882824fde7bdc2"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "e2d88644cebf67fe2b222e27420f6d00"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "7a1d20df7d5b1dacd55ca6a9017afa0c"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "a567606bd3b4ce4ba1975fbbb759811b"
  },
  {
    "url": "posts/docker/docker-host.html",
    "revision": "68a51cc6d85f5f1df8387a41f33487f8"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "109ed38885f123a7d5d2cb90d475d849"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "31170ee15f57399555bcee83e3bb6683"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "97a280d620c0d04ffebea3ca093601d4"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "ae0be48734aed8e1d1512585462d4116"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "eb8784a078b79a15a4733ec25e5c9cb1"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "7d9ecaab0395e5cd573cdfc0f64979b9"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "973fbac8d93b34ab005684999ac28470"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "8beca790bc956d810b847794e90885c0"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "2961a41f5b7ca3b32dff07efe1545fa3"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "1b7456ccb7a8ab8017188bc086a1044e"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "12ba896f86caf67b514b8ba4acc7b000"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "11b668e858150ad41416731ca8a4eafa"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "89ede9b2f0400c7aabaa9495fc1662b6"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "515b5e0692e0d78cce7537cf4da445ac"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "94681cfd3c15ba7dbf3b3c9b1b7f5195"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "e9757b71f3cf78b74f0dfbf9d3e81c33"
  },
  {
    "url": "posts/java/java-http-proxy.html",
    "revision": "0d3ea3f409e55e69e695c247aad437fe"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "7df93a5a10ac7a741c4b316b469776ad"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "f9c8b2143253c5fd8848f743472b53d2"
  },
  {
    "url": "posts/java/java-spring-MyBatis-Annotation.html",
    "revision": "dba0432a12191acd86329e7c8de4b98e"
  },
  {
    "url": "posts/java/java-Tetris.html",
    "revision": "75c7386fcd06606e05a566899b5444ee"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "3f3db23d9f04191d282a5e11c59098db"
  },
  {
    "url": "posts/java/spring-RedisTemplate.html",
    "revision": "a83c94114e8dedb8d5b197e98776ec3d"
  },
  {
    "url": "posts/java/springboot-disable-autoconfig.html",
    "revision": "f446f9733adc58f64a1452965aa35fab"
  },
  {
    "url": "posts/java/springboot-schedule-task.html",
    "revision": "474b7489e523a64b921360607ca51bd7"
  },
  {
    "url": "posts/java/springboot-swagger-ui-custom-config.html",
    "revision": "c86d78d3fdb5de611fa4dc6db4feaa0d"
  },
  {
    "url": "posts/java/TOTP.html",
    "revision": "7b503e8642ec7146932aedfd23fbf49a"
  },
  {
    "url": "posts/linux/linux-chm2html.html",
    "revision": "ef7a2e6b9935700c00e2e6debc55780b"
  },
  {
    "url": "posts/linux/linux-ecs.html",
    "revision": "0b56d41205a9410b92ca4a54b5588574"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "120d0abf651ac6978b3beac21914fd46"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "60cfb4b4e146e8778e94e844c22bc2d0"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "10f348994a2516851d06cdab02ca64aa"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "81764f319c208df1d6469dc87df43d42"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "054489ed7a59557810dca121a768b3e0"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "d5d25a5942bafbbe1a097b238b3db292"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "443bcc71320343edab242e1a6ba636ec"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "68b18e80a950670befdd2b7405260f5d"
  },
  {
    "url": "posts/mq/ensure-not-repeatedly-consumed.html",
    "revision": "43d5515309ad1509524ae8d75097453a"
  },
  {
    "url": "posts/mq/ensure-order-of-mq.html",
    "revision": "8e4e1b0f908f5e9241d2e082f57b2752"
  },
  {
    "url": "posts/mq/high-availability-of-mq.html",
    "revision": "ab2a1a67d59c0a495e2461cbc4f7f9d1"
  },
  {
    "url": "posts/mq/mq-problems.html",
    "revision": "43395e29468d598e25f08244d6548b67"
  },
  {
    "url": "posts/mq/why-mq.html",
    "revision": "d0847fad168cea91d7acd8c86e96ecf8"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "38811387fefd8c8d9a87a828d55fbbc2"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "ed46dd86a2f5a3dfa1d22e490ca17277"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "d5f4aee686c938093a9ad74aeb82fff7"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "704fb7ef08e624049eeb06f04cf6db59"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "7ec5e976c0f4eedfcde7594c97f9f25b"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "db23c20a1a097b5cd152bbb825ad0fd2"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "b1beb0caae090037ceafc8dad1b6f86b"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "889516cd586e6cc3796962ec146098ad"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "b2046ceaadcada5e199022a287ea7d1c"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "0ee3e9bc0430bd30444fb023dd1466dc"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "3f7ed243eb54dc0b89fc18e0bc56cb16"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "90ee3bb8e1a5d636ebc971e2fab028bb"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "77ff857f959d6deeeb0f94dec209090c"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "3c0779468780e34e125b52919cc7d40b"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "1b593b5ddce3469145b8be144ef1d0e3"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "e2ec7b08d86bdfdccef4c3bf5584fa4f"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "45721839848feb2b11c1e4e8331032b2"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "7b6bcdb4885a0050cd2bebf2f7e27558"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "8c1719275576b4406c8a26243d227d24"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "0d529751aab49e1107881ee4629a88c6"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "1c0bc3fdf8717c10f7b45316c2d539d4"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "49ca1daa950a03d3eb93a2f204a1de90"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "c5d7b0aa4e9731c2f428107e91a40cef"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "146fe29fe85b5818422283b5d6411e8f"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "f833b55dfc5cc32f932863adbeca41a1"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "e7e5c427d8d7ab8261f017fe24dac71f"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "d88cb6232eaabb95d3db02f4bd80c89e"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "7430e07b3031a0b508417172fde1f21f"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "54c79b151903e0ce8b7dfce1913b30b7"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "bd7956e84970e5d9f9d9eb1ef691795e"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "335c8c0c7ad02d7db79d436e6027db47"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "c6ddffcce9a2ca1806edc57eef889577"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "c2792d65c7962f0c923affc8f9228ef5"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "a01c2b68249c90c95a416abc70a74e5a"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "e0fac97f71d933c0ff1142dcc5b57d14"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "a2cb449ca8ff6cab3457c2c8ccdaa126"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "e8165c846b3081382b989a3f83803619"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "f606b17be506e6fee520554c02708c09"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "3e85b1977aeb3baddd47c0135a2437bf"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "98133b032d839e641f6203830e10cd97"
  },
  {
    "url": "posts/python/deadlock.html",
    "revision": "a075e13f6849f92b8ba4e1f92d501ad5"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "be404c1ef49141cec601052066f8643a"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "2c86d10ded9c2a47366fc92f4ff3edc0"
  },
  {
    "url": "posts/python/python-dynamic-import.html",
    "revision": "9ef9913bdbcf6264064835a2ced3e825"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "9c4ee238f48f03e6e73fc266aca140e0"
  },
  {
    "url": "posts/python/python-metaclass.html",
    "revision": "072c1f4eb0a502a97b7bf6f012573f19"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "f30578998e968f34736f003777ad02f3"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "8fe34f1f725b4bea2cc2806a6a645a1f"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "46c6584ef12b60d3cab9f16fee100c03"
  },
  {
    "url": "posts/python/whats-new-in-python3-8.html",
    "revision": "acb6fa7ce5cc1e44f00db63a17d834c5"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "fdbdce5467ed4f9c91e788ba7b73228f"
  },
  {
    "url": "tag/algorithm/index.html",
    "revision": "91ff39edf86635ea6a1cc1cce79e5df4"
  },
  {
    "url": "tag/api/index.html",
    "revision": "4b91a75dbc1f5f5944ff49c7b4e12209"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "3ba3faa0cc45cbf9b563bd26d25bded8"
  },
  {
    "url": "tag/context/index.html",
    "revision": "a13aa3fb3c1e9eee81071fa7b3743300"
  },
  {
    "url": "tag/database/index.html",
    "revision": "843b477ac8779295dbe04c0b72ceeb8a"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "0cfeb5731da03b241af1178ad2f9f835"
  },
  {
    "url": "tag/git/index.html",
    "revision": "e84ff67fcc6d020da6456db31415d240"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "20b416fb8e74486a58d43fedec15ffa1"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "6e2bc77c92f66004ebaa6d3643a355f8"
  },
  {
    "url": "tag/index.html",
    "revision": "081cc83824c6d870355cb209afdd9fd1"
  },
  {
    "url": "tag/java/index.html",
    "revision": "2a0e654b60d16f1067648c8980c040b7"
  },
  {
    "url": "tag/java/page/2/index.html",
    "revision": "36ed3d3de57b55f8fee42a8465f4636b"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "d3e8c3577c37978731858969c9fa714c"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "e8d65801405571d296904e24e827853c"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "f250d19520f9accca6aa7fb22d6b6c56"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "a3b74f6b3a816d6079ca4b18e3bbba63"
  },
  {
    "url": "tag/mq/index.html",
    "revision": "8332ee726761da628fc355096d855660"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "2c5e3f7f5597e695e3b6cde95fbbf18f"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "8fd3afad0ca903e429e7da4e5e74f583"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "bd19c158302b2af4007386ab6a63fec5"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "86fd66f5736602e2da840029ee71657b"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "19543f6518962c041f46b3b7d8157bc7"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "5474e3b25e821e6aa9aedd2b684b928f"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "af36dc05a2786a77c2fd5018af56c50a"
  },
  {
    "url": "tag/python/index.html",
    "revision": "a2b1a43793b75fcf722e3fad79360195"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "5ef6e131053977571cfb07ec0d0873df"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "2e87c37a069f7774abc22aca400e4f41"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "be0d4c04299cbafed47e58981da5a835"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "e7e9f5cd2087d67c002be977f1d6ee64"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "532efe20d823f58074ec4418693e2511"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "9d2847cf20fc64e2f58208ddbad51c5f"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "0af786a3a903c974bf843579533e4eac"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "414d4b4d4b76455b89882061eb9bf493"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "c6056c90835d4ede7a1c029e7825fbc4"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "150fa6446b872a3859ec3a550735846f"
  },
  {
    "url": "timeline/index.html",
    "revision": "c14ad5378ac16247ccb75be118af3b1d"
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
