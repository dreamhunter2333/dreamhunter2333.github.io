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
    "revision": "c913f81782cbb5bd6b16ddd897cd69af"
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
    "url": "assets/js/12.437bdc9e.js",
    "revision": "6c23e816d24618341ebdb2c6d48cdaf7"
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
    "url": "assets/js/35.2e86c0fd.js",
    "revision": "aca76a857c287ff555cdd111f09b06d1"
  },
  {
    "url": "assets/js/36.240a430a.js",
    "revision": "53259d8c4716f59f0ae8068e5057e7c0"
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
    "url": "assets/js/app.2e33c539.js",
    "revision": "cbb48acd99a79980723881bfe1a1ec80"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/algorithm/index.html",
    "revision": "52f24c0f73aae182a0619a3e191eb0e1"
  },
  {
    "url": "categories/database/index.html",
    "revision": "11e5130c86c975bf3c0429d0e4219a89"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "928cd41a11379547f78028fb54baf9b8"
  },
  {
    "url": "categories/front/index.html",
    "revision": "0795c468ff24d4e67d09adab647a8515"
  },
  {
    "url": "categories/git/index.html",
    "revision": "8c7b5248d2c4d5aebbb4f3f08454a761"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "7b8cf8570fd2b0536c675a29712c10f3"
  },
  {
    "url": "categories/index.html",
    "revision": "62f1e676f1af637f3d8b22bd37389c72"
  },
  {
    "url": "categories/java/index.html",
    "revision": "0dd25d1cd42257cc4d060ca122e2f8bf"
  },
  {
    "url": "categories/java/page/2/index.html",
    "revision": "572cea04ed8776978929395cd7b415c4"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "35501babee2069af9bc006be8a45d4d6"
  },
  {
    "url": "categories/mq/index.html",
    "revision": "023088550a77e4bd30f10b1986b900dc"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "046196284a86e3321923e0b47d7000e5"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "1acf7f79ab51da104de1b2d6f43ce7f5"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "2a542774dce3b0641f71b8a1646e3892"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "74336515049a33610e04cf391defad2f"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "59cd7363437ce0187aab89888b9201ca"
  },
  {
    "url": "categories/python/index.html",
    "revision": "a4d8e9e77d32a1fa22c7408a3e6216bf"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "1e37938966a33015b9d4c63d2a9cc874"
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
    "revision": "8aa167f2f05cfb0c5e96d0a1c782d90f"
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
    "revision": "dc254651f4f46c6ae60453750ad6e243"
  },
  {
    "url": "posts/database/SQL-constraints.html",
    "revision": "5b0e3db96e304f0f90107935cd830da3"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "c7ed5da80219adeec281e9686b97976b"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "25b3e7e20c272689d3ff3f8c19df8a75"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "aee22b35c045d6115c31eb963578f3e5"
  },
  {
    "url": "posts/docker/docker-host.html",
    "revision": "7f0a7d1105f83ad3ab8c6755501df995"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "77927bf5e396f098ec65a06ece18116f"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "f96fcad37682705bc5eb2245521f9ae7"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "2e5deef5cc5df384cb4bd1335ea490b4"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "6bcedfb43adfcae0c2f86613ed69f2b8"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "ed1adb25c1ccd05016789d7ae64ea2e0"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "e075f829fc34875ad96f33580f5d35e2"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "abfb2d5fff5905321aa042fde8775adf"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "c214c6064a7f44c79ec908f46f83f979"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "92c34d9ae2e0431d3b1f1ef5f8854bb8"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "cb9809e5e616daa2ad316b0fc3a47dec"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "c2cc37c1d7501c2fdfaa555f593d8d23"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "62de074e9fdddd5e74079b9a1df3d62f"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "37f20687f11980f3e0246acdeab0fbb6"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "ab92c282a82474067b574941e3545a0e"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "1066cded596eb0e759b583825db2f3e2"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "c4533d3fc01659e6c5e77bf70a567920"
  },
  {
    "url": "posts/java/java-http-proxy.html",
    "revision": "0922bae4f56ab18eb1d570052d55f18f"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "5ed6e7d00be98f48659ae459b3978004"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "03226c05432c066e99cfee0b556ea5f9"
  },
  {
    "url": "posts/java/java-spring-MyBatis-Annotation.html",
    "revision": "8814b9e688ac42d2a7802b4252f90f00"
  },
  {
    "url": "posts/java/java-Tetris.html",
    "revision": "0af837bd915a2e1fb553fbab478cefdb"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "f4d1878970386ee466aab9c32ff5ebba"
  },
  {
    "url": "posts/java/spring-RedisTemplate.html",
    "revision": "c335395acfd013ee33e659dc5f4734df"
  },
  {
    "url": "posts/java/springboot-disable-autoconfig.html",
    "revision": "77394715a5810769254e6384ff5c107e"
  },
  {
    "url": "posts/java/springboot-schedule-task.html",
    "revision": "a8a0439a5140abc181791cb13c5d654f"
  },
  {
    "url": "posts/java/springboot-swagger-ui-custom-config.html",
    "revision": "21f72249b359576efd9465e3c617cafb"
  },
  {
    "url": "posts/java/TOTP.html",
    "revision": "83fec85c2df44cb2e3fe51ac9948b27e"
  },
  {
    "url": "posts/linux/linux-chm2html.html",
    "revision": "b8fe14f248087a4bfa277254671eb785"
  },
  {
    "url": "posts/linux/linux-ecs.html",
    "revision": "688856f06876401f8bc6466139ea6112"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "bce81b0311b89a35299880eb19658763"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "657c565b2c1bb45842cf24066f676897"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "b5cbb4bbc7b7d6924b365b1e11cf6cc9"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "505c376cd936c73ea28b6df51e291bf7"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "869c971e0d3214246ee6d3931737c1c1"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "eef91cb42cdbf6641100cccfcd31ae9c"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "3085a1922669b4b2759386a557de4d0d"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "5ffbbd6b94b65f552863d14cfa37887d"
  },
  {
    "url": "posts/mq/ensure-not-repeatedly-consumed.html",
    "revision": "9b19bb11d7b213171d9faa8d1d1da8da"
  },
  {
    "url": "posts/mq/ensure-order-of-mq.html",
    "revision": "f657e6dbdded58926f4654f60734c0aa"
  },
  {
    "url": "posts/mq/high-availability-of-mq.html",
    "revision": "87e6f34e91fe04d4ece09bd50c6776eb"
  },
  {
    "url": "posts/mq/mq-problems.html",
    "revision": "27c9b8824709be8ce55f84821694a566"
  },
  {
    "url": "posts/mq/why-mq.html",
    "revision": "e870dc3f9a1f57473392a23aab55c839"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "b7cf46a1b5d52393c125324b82c7c782"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "41be1b708bf878e051693134492b95cb"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "16f7c05811145d141d3677e9a39899e8"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "21fc0ea42bcbc32ca22b5505f6b1fe33"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "6679b2d416301bcaa958cdf5bf11d282"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "c5c5b7e2b6e317b609a227edf9766ab7"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "064f71c258ba047a85d44d3c4af7dcb4"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "496b6271e63f1560e83f034bc2d02244"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "7b09097b871fb31d88bfec6a5236d098"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "0a2cc95931eb1caa5f0fd966c0812a5f"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "806946ea2ab4ca5207c89479bda5c5c0"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "bdaf69ef738f4f22cee5efd3ece972b4"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "4b8c50e121745ec85d97243e81749d02"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "f12b069a5f7559edffec17489f82428e"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "edaadbceb6470840672ea497de70f4f2"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "056b8ff5e84ddcd5d61ee819da7e64e3"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "5c3e23eb68c67b681b4ac6b55c1c9394"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "db761e03de2e7e367e9f268fe59d4c94"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "3545d69a6c2b5f72b78ffd7255c3f645"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "83092b3e677fcbb2c6ac5b470bc90698"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "d8c686c7dc972fb4d8f9cc15295a1fe7"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "e017c7fb155ce7e7409a1d55ffa51e3f"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "a044ef6bde6295ae8acc9092d051ad21"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "b128282f87390bcfacbc18a8c3e4a9fb"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "5d46c0c2d5e9e839bfd37c17969cc0c4"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "17f0081d9852ce3f6ee131149511c2c8"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "e84a66158821cc88f14d6725d3fe1d86"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "31d34b8c9924110abc3739b7b5b06ee3"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "8dfefab1aadfe67cf89a857bbfb7b93f"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "1850cb7fef66219e72d1ab2e6d603bae"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "54ac5f72771abab403c4eb2cff6c8910"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "63ce42c49ced493d1d536c4b5e1f5114"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "37df7f26b17fb3251c37dab72d614276"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "8572b4cd79e75aacaa08addbb03af7f3"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "0f2e944d0a5015028343db8d2927c6e1"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "a4a0ab9e429991004ec1eb672a46c56a"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "9fb93f25b6f52ae139b3a1e155621da4"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "86328482a18816d3fe4a8544d4954bea"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "c9d29cc3f85422cf2864fe3dfdfa78cc"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "dc5f198723bac83fd72be4bb3b77a805"
  },
  {
    "url": "posts/python/deadlock.html",
    "revision": "a2e382810090099f305777f6ae9111d5"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "b938363a34943c918c9153a12ea025f4"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "b1865ebe9957bdc767079386dc35e8e3"
  },
  {
    "url": "posts/python/python-dynamic-import.html",
    "revision": "1a8ab5ae68ae7551c7273e4c3ce3d674"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "a8c33c147b71da3e4366012c30d49f41"
  },
  {
    "url": "posts/python/python-metaclass.html",
    "revision": "5915889080c854c3df40e9904825bf66"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "5f8e0d959fa0b3ed368578f6f2c38f25"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "f92821b507daf9a395c0ce4eff6cc12f"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "d43c255608c76381ac66bfc31bcb1e8a"
  },
  {
    "url": "posts/python/whats-new-in-python3-8.html",
    "revision": "d686a9c1f1f8b64a5ffb25c97e52caf8"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "7da207fd18a6169d66d6f5a1fbe14e55"
  },
  {
    "url": "tag/algorithm/index.html",
    "revision": "cbf7c98e0444edfa71e47715868cdd31"
  },
  {
    "url": "tag/api/index.html",
    "revision": "9d626fab3705a1df8211e652fad9623a"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "fcb883cfac898e07bae1fcf265c8b7f9"
  },
  {
    "url": "tag/context/index.html",
    "revision": "de9dbffb8c51e5c568861046cf06c1d6"
  },
  {
    "url": "tag/database/index.html",
    "revision": "323684c7a05a9ee169d480c0ee1772ed"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "681255ea6e2d378151a249542ebbc863"
  },
  {
    "url": "tag/git/index.html",
    "revision": "ebfee8495641c70218854597f4feae1f"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "90c6737996a997b63b4e67e99d2335a2"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "8c984355b6bb103787337f556f5736cd"
  },
  {
    "url": "tag/index.html",
    "revision": "d2053267ccaa3ef467c1af89065bd6d6"
  },
  {
    "url": "tag/java/index.html",
    "revision": "658e684a07748377064b170b25800610"
  },
  {
    "url": "tag/java/page/2/index.html",
    "revision": "4892e9d43376fc23911c5c5f4e8a5cc5"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "9677ad22c20be9ebae36417eab77857d"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "5398700b6b10c7a2e7cbeb60648be0b5"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "fa379c9d6d17e1c964d827bbb6879da7"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "03d7f9b3bceaafc828b4afc3473aef5a"
  },
  {
    "url": "tag/mq/index.html",
    "revision": "f5dbf2aacd98a01f7f50bfed109d5f5f"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "76a510c032e22d8e6260d83b7edb8d48"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "4ccafc0844cbe7908a4d79b477966fdb"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "5517544fe0b918ba156ed78358decc39"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "91d5c02b86a379bceb7e2e0b29773511"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "faabad8d3594183f8a18e4b1eff81220"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "5d46f188a3261eb5c1f3b106ff7b005a"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "d36cee28bcceea02e8e1a1ddd23ca6d0"
  },
  {
    "url": "tag/python/index.html",
    "revision": "ac332173f01ce2690f5f1d0685cca8f8"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "376830a3a7333348f2b59f3406b24fdf"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "0f852adba90fcd59585663a25c57db6a"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "5eff9bbf51528a5ef004ddf294bb9e97"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "344ed506a2142558e050ae53ec18b75f"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "2373041cc83a3d87f880876442640c2d"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "08d51ad9e9db3e3fb4b90da1e1db3060"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "fbe3837ff04407fc275adcb04fe13f09"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "92c63368ca4f4be034d818ea5f9b0caa"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "bc8745dadf92d79787d1cdbd402c47b3"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "7932cc11385812c36c6dfb5ce871a941"
  },
  {
    "url": "timeline/index.html",
    "revision": "200aacff07b6bff761d9e7dde6c2723a"
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
