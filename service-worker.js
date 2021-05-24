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
    "revision": "a8971c81f41b9658fbb23c172b6c3f74"
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
    "url": "assets/js/100.04ef36dd.js",
    "revision": "d37926728fda311946b84fc3d155d3ab"
  },
  {
    "url": "assets/js/101.8b0baa5f.js",
    "revision": "0599e5c5b98131a9333313ee5716d1bb"
  },
  {
    "url": "assets/js/102.71a22b01.js",
    "revision": "8e4a9d458875f53c6402d11e45474741"
  },
  {
    "url": "assets/js/103.29eee6ef.js",
    "revision": "bab2b84507f7158320bb96b7af83571b"
  },
  {
    "url": "assets/js/104.652f6215.js",
    "revision": "8e440e7048aa3b03716606c806e7bb2c"
  },
  {
    "url": "assets/js/105.3b80337b.js",
    "revision": "d7d1c11a18b0b80efca451ed06439e79"
  },
  {
    "url": "assets/js/106.6e992d51.js",
    "revision": "a8654d03dd97978a697479dafaf1d8ff"
  },
  {
    "url": "assets/js/107.8016dbde.js",
    "revision": "82d50c86a0aee6f428df78cfc0a54fb8"
  },
  {
    "url": "assets/js/108.922db7e5.js",
    "revision": "495bc49f7bb3fc8b273829f30601a3f8"
  },
  {
    "url": "assets/js/109.6ae49a14.js",
    "revision": "afb1eca45a0e17696cb4a73d330ed489"
  },
  {
    "url": "assets/js/11.69b157b1.js",
    "revision": "4c83239fab190348e9d5dad712041630"
  },
  {
    "url": "assets/js/110.defc00be.js",
    "revision": "68a4b91b49c6e8b0137387decd4f9a6b"
  },
  {
    "url": "assets/js/111.73f9240b.js",
    "revision": "b2bd31f68b45dbe1a05bcfb24f41c93d"
  },
  {
    "url": "assets/js/112.bf511b3d.js",
    "revision": "11fdbb872802a3af85f9eaf75a1e132a"
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
    "url": "assets/js/33.91d9ada4.js",
    "revision": "14366999339326941ebd2c937fa69cb2"
  },
  {
    "url": "assets/js/34.9c5f3d67.js",
    "revision": "86b8195b347c011f817e1f343bae8ead"
  },
  {
    "url": "assets/js/35.565f5565.js",
    "revision": "bf3dc7bd555ecab4dd4713024e9dfb9e"
  },
  {
    "url": "assets/js/36.b56ffa44.js",
    "revision": "821d7eddadb1bfdce2cc129016c46673"
  },
  {
    "url": "assets/js/37.676d4e72.js",
    "revision": "736a4b4e88eba92ec1e231574087ccdb"
  },
  {
    "url": "assets/js/38.8b68a3e5.js",
    "revision": "e026d009caf093f4de49d7e990718f48"
  },
  {
    "url": "assets/js/39.7075b74a.js",
    "revision": "d637d8c55219e5eefeb9df99c9bf2f0f"
  },
  {
    "url": "assets/js/4.82827657.js",
    "revision": "16886d2cd0cbc839eb15b36b6007f24d"
  },
  {
    "url": "assets/js/40.ad80d233.js",
    "revision": "7e9023be77fb7b547de74ba805ba565f"
  },
  {
    "url": "assets/js/41.61bf85df.js",
    "revision": "6c42c41fc021b41d09ab9a287310e022"
  },
  {
    "url": "assets/js/42.f574d2b7.js",
    "revision": "85331059baefeb45cdd8b91178a125a4"
  },
  {
    "url": "assets/js/43.765a01d2.js",
    "revision": "a868c19e89dbf867f730afee8dc61b2e"
  },
  {
    "url": "assets/js/44.ccc64dcb.js",
    "revision": "1031d5198bb884c2aaec5c7a6ff7965e"
  },
  {
    "url": "assets/js/45.0d11b542.js",
    "revision": "59359346e40686b377434b009ec93dfd"
  },
  {
    "url": "assets/js/46.90e291f8.js",
    "revision": "686b1a24a4320af0e8a58ec010a4837c"
  },
  {
    "url": "assets/js/47.ec678979.js",
    "revision": "d5af3056bf486ca25dc61007e2b9386e"
  },
  {
    "url": "assets/js/48.b5119559.js",
    "revision": "1dbf2edf4741a50694eecd96e1c4d81f"
  },
  {
    "url": "assets/js/49.e84c0f4f.js",
    "revision": "34b8dc7b4940aa570ba4198b383bbdd4"
  },
  {
    "url": "assets/js/5.f171fb5b.js",
    "revision": "1c432ec3e561c0caacd0919ac5415365"
  },
  {
    "url": "assets/js/50.7e04bad0.js",
    "revision": "6cacfe9b84f26ff9af3e6c1b0782b63d"
  },
  {
    "url": "assets/js/51.b757c292.js",
    "revision": "3806e185f04f6fb38a4df2499121d2cd"
  },
  {
    "url": "assets/js/52.de039b99.js",
    "revision": "98c8b3703787b633ed5f87977c962593"
  },
  {
    "url": "assets/js/53.5a6e1b35.js",
    "revision": "10e2ce578c472a530b287a8956ab4d61"
  },
  {
    "url": "assets/js/54.68c9023c.js",
    "revision": "58aa505e973cf3bdbd97a6d04ad1c09a"
  },
  {
    "url": "assets/js/55.16cc8a59.js",
    "revision": "87f336cc4ecd256100362ba34d21bf26"
  },
  {
    "url": "assets/js/56.8e760845.js",
    "revision": "6c1f73106e70c5f1c82be066232840c2"
  },
  {
    "url": "assets/js/57.b6cd40b2.js",
    "revision": "40d69a4c57780a0e3486d5cc42be98d2"
  },
  {
    "url": "assets/js/58.47080f4e.js",
    "revision": "a40f5dfb9ba71af072e5d1591cdf0795"
  },
  {
    "url": "assets/js/59.2c29a5d5.js",
    "revision": "f1a494962414519201e3c34a4a6e61a5"
  },
  {
    "url": "assets/js/6.6d7bedbb.js",
    "revision": "91579a973bf33c858aea0e27e16600c8"
  },
  {
    "url": "assets/js/60.f604f394.js",
    "revision": "86b394da31f7bea867129645f722de58"
  },
  {
    "url": "assets/js/61.d30aab80.js",
    "revision": "5ac6dc0972a03c9c43841a94d7a381c3"
  },
  {
    "url": "assets/js/62.a4428a2e.js",
    "revision": "e209638da971c78fc5313e9ee580a999"
  },
  {
    "url": "assets/js/63.a230b470.js",
    "revision": "4374b772209bf5c0c23e565ac54aacd2"
  },
  {
    "url": "assets/js/64.119e97c3.js",
    "revision": "bcf52c507b09cc027433998731e3dbfe"
  },
  {
    "url": "assets/js/65.058f7a40.js",
    "revision": "387aef3b2d26863343037e87271d5a97"
  },
  {
    "url": "assets/js/66.e31d57e8.js",
    "revision": "79fd67b13139d31e7ae455063d4148f9"
  },
  {
    "url": "assets/js/67.41418b54.js",
    "revision": "3916cd2bbd386d0e8714083398515981"
  },
  {
    "url": "assets/js/68.4b01dadc.js",
    "revision": "85de20f5f9f82cb131e20cbefc58e3f6"
  },
  {
    "url": "assets/js/69.e1f1dfba.js",
    "revision": "55fe1e4478c30d73c19405b32b65d586"
  },
  {
    "url": "assets/js/7.76b7dfa7.js",
    "revision": "715c723dc2232b73f9c1500622b1fc01"
  },
  {
    "url": "assets/js/70.60d04c46.js",
    "revision": "6eee3ecbe33bc129ae96afa09f74b44c"
  },
  {
    "url": "assets/js/71.31f1057a.js",
    "revision": "90e985d77cbc082ab3bc69ce4e0a9778"
  },
  {
    "url": "assets/js/72.38aa8b9e.js",
    "revision": "267173c2a8d93a9caa7ec5205d74b00d"
  },
  {
    "url": "assets/js/73.4c8bccb6.js",
    "revision": "3cc1859f5f36b6c125a7eefb8f044396"
  },
  {
    "url": "assets/js/74.4f0d8161.js",
    "revision": "0667794eda83b5a4daa1a3979f7a80d6"
  },
  {
    "url": "assets/js/75.33a0cb63.js",
    "revision": "2e2fb3363f4963f3f4eb95c425098983"
  },
  {
    "url": "assets/js/76.4efd5f79.js",
    "revision": "4e2644e920f6b0cfbaa903b687152270"
  },
  {
    "url": "assets/js/77.28efbf9d.js",
    "revision": "76c385a2a11da2d726bdfb3516890b85"
  },
  {
    "url": "assets/js/78.2d0dd743.js",
    "revision": "937bbe6fe71c714958d7b1829a269b74"
  },
  {
    "url": "assets/js/79.f6ee1050.js",
    "revision": "bd07b1562e2dc6463fc97937c81ddcca"
  },
  {
    "url": "assets/js/8.07210b02.js",
    "revision": "f9bec44862f6ba153247245d31c65124"
  },
  {
    "url": "assets/js/80.12a938f0.js",
    "revision": "444e237086a33aaf4a8d209ec3e286e6"
  },
  {
    "url": "assets/js/81.faf08d7d.js",
    "revision": "b85d1aa270d02dc7219fe2912897c448"
  },
  {
    "url": "assets/js/82.2a8cd606.js",
    "revision": "208b592d6cd445231a9c10c703bde1ac"
  },
  {
    "url": "assets/js/83.ff393285.js",
    "revision": "23e71875033318f426abd9d7fbcad4b8"
  },
  {
    "url": "assets/js/84.c61ec17f.js",
    "revision": "685c172c1400b962d476b8106195bc4f"
  },
  {
    "url": "assets/js/85.f19e5d4c.js",
    "revision": "97ffe1034ae80cbf8bb34ba694d69331"
  },
  {
    "url": "assets/js/86.0d0f70be.js",
    "revision": "7292058177f81810c7deceae29407233"
  },
  {
    "url": "assets/js/87.5648ece6.js",
    "revision": "8e1b61527fef53194c2b40dc9737ed2c"
  },
  {
    "url": "assets/js/88.354653fe.js",
    "revision": "76755660e624e801a77092b5acf79b9a"
  },
  {
    "url": "assets/js/89.c1c452fb.js",
    "revision": "367743b79846fd2df4f0437998ade68c"
  },
  {
    "url": "assets/js/9.ab7fee30.js",
    "revision": "80f899186780a76e6e6ed65415dcfbad"
  },
  {
    "url": "assets/js/90.3bc1aafe.js",
    "revision": "b769edb1a7875a9290d5bbd08b60db50"
  },
  {
    "url": "assets/js/91.2c2c14d5.js",
    "revision": "975efc2ef582ffd47b3e756a799bebf1"
  },
  {
    "url": "assets/js/92.e55d5436.js",
    "revision": "b4bb4af7cbab270e6bf6cf5c987ee9a9"
  },
  {
    "url": "assets/js/93.b4bbfcb3.js",
    "revision": "9628b92ae31caba46a064b1c92265dc3"
  },
  {
    "url": "assets/js/94.32d28ea9.js",
    "revision": "72fa50e16aed0534d053782302c65770"
  },
  {
    "url": "assets/js/95.1a3cc44f.js",
    "revision": "24ed8188f7c81ebeec03eca10b5972fd"
  },
  {
    "url": "assets/js/96.6b7e02b5.js",
    "revision": "d7012481ad83ac7c6a17ffab20a5be39"
  },
  {
    "url": "assets/js/97.08853240.js",
    "revision": "97ba77393e12e52761bbf4e3beac038b"
  },
  {
    "url": "assets/js/98.c2ecabd6.js",
    "revision": "260fc4173a16cb18eea4179187ea884a"
  },
  {
    "url": "assets/js/99.9490e7dd.js",
    "revision": "f4f2911db711c9981ce086587bbf4f57"
  },
  {
    "url": "assets/js/app.b2eff6cc.js",
    "revision": "547621e138af5569a0ddbdcd5889b8fa"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/algorithm/index.html",
    "revision": "a2a772b5e22dda233f672b1296a66d0e"
  },
  {
    "url": "categories/database/index.html",
    "revision": "404207bc48be8e796bbaf4d9bf6f8ea6"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "d18c9d4badd8ad4b12f88c82a36221da"
  },
  {
    "url": "categories/front/index.html",
    "revision": "a859ede0e5c809b5f90445b47ab01e0b"
  },
  {
    "url": "categories/git/index.html",
    "revision": "eebed41c51bb0bfcb782e98d3a117b0b"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "49102a503a01c12b5b40a0bcb3e37d3e"
  },
  {
    "url": "categories/http/index.html",
    "revision": "4023d0f463ef54e597a45fd9f8d4758d"
  },
  {
    "url": "categories/index.html",
    "revision": "11d5cf69bbe6dcfe109bc5d3f9d7d000"
  },
  {
    "url": "categories/java/index.html",
    "revision": "142f6177934b6b0c80d13621cc0cd6ea"
  },
  {
    "url": "categories/java/page/2/index.html",
    "revision": "7fa95151a3ee7c84b1096bfa53ecc858"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "cf7685db7b8150f36b1a5e5016a551ca"
  },
  {
    "url": "categories/mq/index.html",
    "revision": "cbcf684f73f623d021d6bc55e4feab0b"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "dbb5158958a30a6d7c7570293eec233e"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "6fb6401383570aabb0bb7859005adfc7"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "f4e8532f7ffc63f08d822ef1cc49d68f"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "88ac82e314104b14976a43e77f59ebd4"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "a45397c6951b73e674eb05ff321bbe32"
  },
  {
    "url": "categories/python/index.html",
    "revision": "b9d2558712508432280a83aeb2409889"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "323bdc971f53b062c57aad186f70f56a"
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
    "revision": "4595285f8cbbbd8bb7865eca7cc8f416"
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
    "revision": "33530bb9e6ccc366ec17e8036877a829"
  },
  {
    "url": "posts/database/SQL-constraints.html",
    "revision": "a41ba1557e2e79dc988b2787feb0739d"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "a2b28ec8d3551c70d659165ed77f20f7"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "d8bc1d4102aceca901aff1931303857f"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "f6f80c09495a25652c4160b8938df37a"
  },
  {
    "url": "posts/docker/docker-host.html",
    "revision": "b002610e08f57c9f51307cd9e6e0af6c"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "de1bc018da4117a35723be163a8d3cc7"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "b7cdc9867bc7f1e39205fd6caf55235e"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "2adf012f2a8e0b236b2de76deb8ff679"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "ec925d861cc0c2b1fa20c2f1448ca313"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "491f04fc827e97cdfbd2625a41a18f88"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "e60adca07d4b9db094accadedc1f1cbb"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "f79e4c039eaa4e6fcc57aaae71eb39d6"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "522d7531647f4b056b30736fd1cb6ed5"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "6499d1cafa674e45cdf317c30fe9c205"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "29cc095810cd3a595da954cdffdaa09a"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "f1e60be2888c9b32a6c9e1ad0409f46e"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "02a8db5c53d87c3d5c38bce222231562"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "3c312d9ac96963b9a2e883213bffdced"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "324e2ed63a902c3c8c676aede52121c1"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "078addedde01f69abe5e5298fddc2e38"
  },
  {
    "url": "posts/http/https-shakehand.html",
    "revision": "16aba480b9e0203e40d07f7cd0f942ed"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "c01f96a97f7c3d53d9d7cdf5336778db"
  },
  {
    "url": "posts/java/java-http-proxy.html",
    "revision": "242e8445f523d8e6966f51ea34609ef8"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "af9665d43cade240ab2314c71a6773fc"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "553e79f85439f704baff5b0ea6d107e6"
  },
  {
    "url": "posts/java/java-spring-MyBatis-Annotation.html",
    "revision": "c3cc12385b27c044867faa6b2eead5ad"
  },
  {
    "url": "posts/java/java-Tetris.html",
    "revision": "e738dc31db4278d269e18cc2d8d3e8dc"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "be990a8bd1c1c4540a71d3573e4eae47"
  },
  {
    "url": "posts/java/spring-RedisTemplate.html",
    "revision": "e02f6b532e64f09359c8d4862227a63d"
  },
  {
    "url": "posts/java/springboot-disable-autoconfig.html",
    "revision": "355b9c27e16502792abb41b988934e78"
  },
  {
    "url": "posts/java/springboot-schedule-task.html",
    "revision": "73ccb08333cdbcf535be196a187f0b07"
  },
  {
    "url": "posts/java/springboot-swagger-ui-custom-config.html",
    "revision": "c17d59448302eacf96118f6728a443cb"
  },
  {
    "url": "posts/java/TOTP.html",
    "revision": "fd49a3b691251081a11db42159f57efd"
  },
  {
    "url": "posts/linux/linux-chm2html.html",
    "revision": "1d440262afbc2df4d9e9441c2ddadca4"
  },
  {
    "url": "posts/linux/linux-ecs.html",
    "revision": "5d95d1222c2e008b9583ea2fd425fa31"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "44fefd6d44f6c5875662fb2f0ec54be0"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "30e310de7f26e07d648b58fcab815c9e"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "83d48ceacd96a1c8341ed11f63e8b685"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "be9b2df202b2e20bbdf4e67af1df5285"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "ee04992314a53eedf95eba65731a9a6f"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "37e787329700da9a2b9a3509d4832794"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "2056689af405b743bc311cf511820e74"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "a5b423e82bb97aeb1585ac226a74ddec"
  },
  {
    "url": "posts/mq/ensure-not-repeatedly-consumed.html",
    "revision": "edef50967d1788d2e0b127dc53b3b130"
  },
  {
    "url": "posts/mq/ensure-order-of-mq.html",
    "revision": "a0fd654f0d44d34e43101ff35266b91b"
  },
  {
    "url": "posts/mq/high-availability-of-mq.html",
    "revision": "37950ae49af9b80793c788464eff93ac"
  },
  {
    "url": "posts/mq/mq-problems.html",
    "revision": "5c45c65c2bd8822e76284b4cfb811c96"
  },
  {
    "url": "posts/mq/why-mq.html",
    "revision": "3b5ade3b27c4bfdddb5289ae972ba73d"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "0b47d6290bebbe3e3cfa6538f49afad6"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "17880a8354996511e5486bd9998b4e8a"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "b85a42078d4c0aba0f9253d1252ef5d0"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "5da5a76153e6b90692746c36b54bbb14"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "8c880191e27362e028a4a806a35eaf30"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "46163b1da273a1b0e6b4959bec310390"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "fbcbdb4b828c880395e8c61aed843cd4"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "bc6d2d8dcb927423ddbfb5a73d9ea654"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "8c6a4789c4716d1b96f5ddca5223de86"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "3fbade89f028192020598bf489400e2d"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "29315d77b8166e69e526ecf6cb556d83"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "7ad4deda37f9e4a3cb1df63bb49995aa"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "d9ecd6d61730adf5c455946097aff601"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "aa318fe74a92a7441aca7622176dae43"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "d4410949ee9ef3493285697ac9b19d67"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "75b282e26d5ab1e87e587c76f336246b"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "2b939ec11987f9ba5178b48bd789580b"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "9e60e34cbee025340387b9c32948bae5"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "819e7584fa1989aa5a8839f0c1744f91"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "74ac4867d60d438197528e40e9651116"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "e1c67102273119044787984bb5ec0846"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "01679986a3aa4b226d4116eb7f9e3730"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "e9d42e08268ec43f46d07e7329ac1f87"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "e712049d71083b492bda3e485a1b20ec"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "90a005d16d4572267ec4adf7741b0c96"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "18e6580261af926f50277d8b27458ed5"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "6abf66e629881e3922820755b8220f37"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "d61fdd0341b76f628abb68162e046c98"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "1e4fdc121d1cc9ed7495ddd2818d36f3"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "48069d32d8e2ec78df711b5255692c5a"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "c9785aa6d855f5c51821859820c6e7c8"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "beb620b8069724b995b48dc227aeb03d"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "d3e367dd37e71e195f2b13c30feb6bb6"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "c505c66f5137b2cf97ee58c742038412"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "6bf41951f3b8217bc3a7ac50f3dfe66a"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "b29f407eca445527354da07cad3c141f"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "655351ade5a8800602fabfb7f39697e5"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "ebe74d88d54427e5b0cfa3239a826cc6"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "f14efdadebfdecfe513e572564c1346c"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "b695e1a8cc91bad698f087cde834a20d"
  },
  {
    "url": "posts/python/deadlock.html",
    "revision": "82e46ddf08a4a15eaad9fa9133eb66d2"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "646741deefdc7361a2725cad5df80524"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "617c44b1dd1195fb6e186b8ceba34199"
  },
  {
    "url": "posts/python/python-dynamic-import.html",
    "revision": "85debdf16eb4c655f01b23507af77e8d"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "37bdccc14174134fadfaaaf5570c1d68"
  },
  {
    "url": "posts/python/python-metaclass.html",
    "revision": "86635eee8e33fafbd514452d449a6242"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "8bbf401b2bedc512d18f603d9ee0eafb"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "28b65890278ea46da1268770f35f38fd"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "1410ad89ba49b3fc203880590162271c"
  },
  {
    "url": "posts/python/whats-new-in-python3-8.html",
    "revision": "79af98c633d11821113c40d6d4033bb4"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "d3d89c9e00b74e8aa5449a874654c27a"
  },
  {
    "url": "tag/algorithm/index.html",
    "revision": "1d2a2dbc1cc7eeb5230c9280ca119717"
  },
  {
    "url": "tag/api/index.html",
    "revision": "671d66cc4f0a2692ccf7561f965f4a69"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "200e5fac1fd0d31eeef9b188603b3d50"
  },
  {
    "url": "tag/context/index.html",
    "revision": "dec2bfe07f776efdc4933a8d98c82069"
  },
  {
    "url": "tag/database/index.html",
    "revision": "4c96b35c6b7a9d7baeba9981e2f6ea54"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "c58dfb384227b8b838598fc0b65ba71f"
  },
  {
    "url": "tag/git/index.html",
    "revision": "a826a1a683f9f2d60b82d87283db1fac"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "5ed59429c31c6def75a98e74d3d24392"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "6c9fbee368fc7862b1b62862ae86680b"
  },
  {
    "url": "tag/http/index.html",
    "revision": "df258c54346f6daf578cd6e993836dea"
  },
  {
    "url": "tag/index.html",
    "revision": "2511999755807d54bada287a31b9b356"
  },
  {
    "url": "tag/java/index.html",
    "revision": "b5cff93aafd5036844cffc9066d75133"
  },
  {
    "url": "tag/java/page/2/index.html",
    "revision": "cf10130efebfebb4b0e2d7ae36b6c913"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "42bfaa2f9b77950566221c4d2302ee31"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "a926cd2abff8e400c8f7c68b277ae325"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "e3a6cb7c83eb3c8eb0a0489a37399c8f"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "530420421f1fd36d581e27530126df76"
  },
  {
    "url": "tag/mq/index.html",
    "revision": "0d7a275e1ef45484541a775f1e2ab325"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "8aa6b0f037f393f4da70b4b5ab879537"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "b54b227d6196b3406b0e8d4cfa60c401"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "687dc19fec73d22bd1f9ed98fa80f7fa"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "c04ee88a4f27bf9e0ceb275bb443af72"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "2a8ab018003c196941391f582aee1bb4"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "f25040c6cfea07355f504abf5e848b3a"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "41e4657aa032a1fd854f282fd665c882"
  },
  {
    "url": "tag/python/index.html",
    "revision": "9edce915a3bc72bee779d5e7d1af8d54"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "02a061e553436b54fa6ba02d66cba523"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "26622e3e469b4c377a9aa110a3d0aa84"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "436c13cac0cdc07af7e6cf17b0039ffc"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "65257230ef6e36eb367feeb9f9f06f45"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "d608c12d8859971e4f4f61474cdfcd79"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "938d90f2005c91c2e1dd8893be3043c7"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "a5fc06e5bde62be2b0e9d3a1e78e42fa"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "76b3f0be0cf4b0c26a52d07169ee7a0b"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "d6d10c59ae8da33ad52734f12abce855"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "be0117fd74c56d4fcf09423013b99f23"
  },
  {
    "url": "timeline/index.html",
    "revision": "7a988d5ed3bae09234a951db994740b3"
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
