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
    "revision": "9734611eb8c5545f6054a8fdec4a5fcb"
  },
  {
    "url": "assets/css/0.styles.1deefa9d.css",
    "revision": "90c283463ffb97f208f41713410bb42e"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.f257e342.js",
    "revision": "9c864825c29a7253febd150eb070bda6"
  },
  {
    "url": "assets/js/10.fe58f311.js",
    "revision": "2a5e081c65a18f6171d353d5a5da102f"
  },
  {
    "url": "assets/js/11.118e79d1.js",
    "revision": "ee5b4ea38ad82feabba65ab6d83a3ae0"
  },
  {
    "url": "assets/js/12.ed3e039c.js",
    "revision": "e28f93a9cecf2943abb0792ecbfedc98"
  },
  {
    "url": "assets/js/13.0c3020b7.js",
    "revision": "114d157275d34c3cbf0dd2f4bf25224e"
  },
  {
    "url": "assets/js/14.cf41259f.js",
    "revision": "ee3d4dca7f7e117863fc401d09f93642"
  },
  {
    "url": "assets/js/15.8b0c1e10.js",
    "revision": "fc3ff6616d4ee3d876e887a3deb92611"
  },
  {
    "url": "assets/js/16.f32488ed.js",
    "revision": "69966cf80a3a4a58ab4c3abde83f855f"
  },
  {
    "url": "assets/js/17.51c45290.js",
    "revision": "9743e1ef7fedd1364fa6dc851f2444a8"
  },
  {
    "url": "assets/js/18.2314999a.js",
    "revision": "d36aaf18e91df9406e72629ceb1fc1c5"
  },
  {
    "url": "assets/js/19.5f998078.js",
    "revision": "8de5fb1f90c8e1d831cd1f030f06c042"
  },
  {
    "url": "assets/js/20.a1e01fa1.js",
    "revision": "2dcb953ecfe1de867d8d82eac577c04c"
  },
  {
    "url": "assets/js/21.d4b6da39.js",
    "revision": "ea6f596abc4cb978512acd7109ff4f94"
  },
  {
    "url": "assets/js/22.1f64e9d9.js",
    "revision": "2954508a917f3f36a9112a9db32814ca"
  },
  {
    "url": "assets/js/23.671e3917.js",
    "revision": "6bfa7fcebeef9b90f3d1a0d150fd7e58"
  },
  {
    "url": "assets/js/24.3c8874f9.js",
    "revision": "e4326eadce1f6e3fff337dd600c17c07"
  },
  {
    "url": "assets/js/25.8c710765.js",
    "revision": "82b36c45c96e407bcfb298ade8ddf431"
  },
  {
    "url": "assets/js/26.125f7797.js",
    "revision": "c3052879538bf29e5530d3d94d1f69f5"
  },
  {
    "url": "assets/js/27.eae28c09.js",
    "revision": "5677fcf56115581c9985c85228886f11"
  },
  {
    "url": "assets/js/28.5340dda5.js",
    "revision": "5d0b61984833bf8b8cd529dff015ab59"
  },
  {
    "url": "assets/js/29.8f7395a5.js",
    "revision": "e01bce9af28b8e507e19f1553ec2b69b"
  },
  {
    "url": "assets/js/3.18a5c578.js",
    "revision": "67e60864880724d775316ccc64a58870"
  },
  {
    "url": "assets/js/30.6bcb60d2.js",
    "revision": "94618562f20742d88ea88b653d60a743"
  },
  {
    "url": "assets/js/31.fa0918b7.js",
    "revision": "faf3b86f3b5877d3377bf4cc027ffad1"
  },
  {
    "url": "assets/js/32.dd694b9f.js",
    "revision": "7f416b12207ed72a236120d0705aedb7"
  },
  {
    "url": "assets/js/33.2d942397.js",
    "revision": "6271c1e675fec85693579ddaf2b2bfba"
  },
  {
    "url": "assets/js/34.3686e247.js",
    "revision": "39b0104aecc11c2bbe3219a415ce7752"
  },
  {
    "url": "assets/js/35.dd91de6c.js",
    "revision": "c0ae39e266285d5c242aea23a9fa00ba"
  },
  {
    "url": "assets/js/36.3d2ee51f.js",
    "revision": "aaebe9ec7868144a2d8b60ab3abc7544"
  },
  {
    "url": "assets/js/37.c18fedf4.js",
    "revision": "994441d7a30cdc5cb11254aa431b87e0"
  },
  {
    "url": "assets/js/38.533387ae.js",
    "revision": "0dc3d786acb8d2643026a67b283d82ad"
  },
  {
    "url": "assets/js/39.413845cc.js",
    "revision": "866642585dbff1eba6540022143d1b72"
  },
  {
    "url": "assets/js/4.6f793833.js",
    "revision": "2d695245e1a9a32e9524bfcf39667da0"
  },
  {
    "url": "assets/js/40.9dd45d4c.js",
    "revision": "f98e4c100f0a21376f6769d8976d361d"
  },
  {
    "url": "assets/js/41.d5ae5fd1.js",
    "revision": "c03a9bee753833b35ffa2b8aa0d32518"
  },
  {
    "url": "assets/js/42.d8ace8b7.js",
    "revision": "fda009b310779d869d9033f74f191a54"
  },
  {
    "url": "assets/js/43.bbc77d44.js",
    "revision": "6ffd797d992dcd4451967672773334ca"
  },
  {
    "url": "assets/js/44.23943ea4.js",
    "revision": "de7949a2b459917cf109288b0975ebb1"
  },
  {
    "url": "assets/js/45.91d33d4f.js",
    "revision": "98b6e0e49434cd0aa97cd6579aa20a24"
  },
  {
    "url": "assets/js/46.b51f7916.js",
    "revision": "368d9a434272e0516c1aa4c17ed1b615"
  },
  {
    "url": "assets/js/47.2fd9493c.js",
    "revision": "ca6624fa966afa1597ea415e9769eb64"
  },
  {
    "url": "assets/js/48.85679e0f.js",
    "revision": "783e1a750d7ef3bc2164a9aaf0c76d7f"
  },
  {
    "url": "assets/js/49.db28c30e.js",
    "revision": "08584eb5d41edc882176c93ab0938f71"
  },
  {
    "url": "assets/js/5.e7a3af46.js",
    "revision": "33e69efac045f653ca2cb8e00b05e0d1"
  },
  {
    "url": "assets/js/50.38720bfb.js",
    "revision": "2e66dfaaaae26fc40033e95a67af5713"
  },
  {
    "url": "assets/js/51.7b7516df.js",
    "revision": "a79810dc1eda46c077220dbd088dc626"
  },
  {
    "url": "assets/js/52.2252dbcc.js",
    "revision": "c767b4ed1b97d644008fcf0c36c5eef6"
  },
  {
    "url": "assets/js/53.47a672e4.js",
    "revision": "7532bb4d6d21441346c3b786d8e6bb24"
  },
  {
    "url": "assets/js/54.ef3ec024.js",
    "revision": "f24bf52aba68953f0de64e1d7fc603b3"
  },
  {
    "url": "assets/js/55.417884cb.js",
    "revision": "19c89830958be76ad6536a51976ff1ee"
  },
  {
    "url": "assets/js/56.83cec078.js",
    "revision": "5531f16bb423751939e8828434b21490"
  },
  {
    "url": "assets/js/57.f08fb03f.js",
    "revision": "71efd6cc94a00a8ec613d3849138b4d3"
  },
  {
    "url": "assets/js/58.e80140dd.js",
    "revision": "e327f0b8e6f3767e1df3e7fc731b1add"
  },
  {
    "url": "assets/js/59.87dca9a5.js",
    "revision": "654632336c74887369e4e3f65a04a198"
  },
  {
    "url": "assets/js/6.cba5b5f7.js",
    "revision": "d7b453e667f1d422af5891650f2310af"
  },
  {
    "url": "assets/js/60.99c3df9a.js",
    "revision": "4f6191b9cfd437a91a9183717530c6bb"
  },
  {
    "url": "assets/js/61.8c83cbe8.js",
    "revision": "e9d69398f409abf335c556500c885a2e"
  },
  {
    "url": "assets/js/62.9c24c025.js",
    "revision": "3f66b5fa53f03f06a6e8ed3cc6389d43"
  },
  {
    "url": "assets/js/63.1643dff2.js",
    "revision": "52de0da6bfe3b55ce6a0d2cf5e1ad9cb"
  },
  {
    "url": "assets/js/64.d97fad70.js",
    "revision": "a311d4015d6a7bf48c29ba698007d195"
  },
  {
    "url": "assets/js/65.93f12d49.js",
    "revision": "3b2391071138d5213902b9349cf15537"
  },
  {
    "url": "assets/js/66.fce655de.js",
    "revision": "eee0407c8b6a31171ead2683bd2a79f0"
  },
  {
    "url": "assets/js/67.6bac4be4.js",
    "revision": "17a963173c063ab5b9e3f5c25e0535c9"
  },
  {
    "url": "assets/js/68.1afdf336.js",
    "revision": "5710f9ef29fae2ef57700f2fcd1c4f30"
  },
  {
    "url": "assets/js/69.690beb20.js",
    "revision": "f852da62b10e025ea60527b11c78da77"
  },
  {
    "url": "assets/js/7.48d055cc.js",
    "revision": "5cf16a60dc3e5ad93fe89a7a9334716d"
  },
  {
    "url": "assets/js/70.a603a36b.js",
    "revision": "21a871ffb74b94aeae4ed11b64a35e91"
  },
  {
    "url": "assets/js/71.dd464f4a.js",
    "revision": "784af77df755fbe291518eb7fbc17bef"
  },
  {
    "url": "assets/js/72.97c3952d.js",
    "revision": "8c165b6f38e63728af9d06fdb4ecd72b"
  },
  {
    "url": "assets/js/73.07200471.js",
    "revision": "cfa47abf9493a88e8369cf9e7d40245f"
  },
  {
    "url": "assets/js/74.80f87a4d.js",
    "revision": "1cee86db0eae185a0a7c9de5edaceece"
  },
  {
    "url": "assets/js/75.61513913.js",
    "revision": "0ecec8c8ba7e90173ab06362d138855a"
  },
  {
    "url": "assets/js/76.c291b597.js",
    "revision": "81886bed764be3ac3e21d0f753b10204"
  },
  {
    "url": "assets/js/77.e9f011c0.js",
    "revision": "31e514ae19c80babe75c28c29503f85b"
  },
  {
    "url": "assets/js/78.8429dc1f.js",
    "revision": "72233a10d8c01205812e2cab7e681892"
  },
  {
    "url": "assets/js/79.0a289a38.js",
    "revision": "82c3d956fc0ff3ad37d98ea8b0fb3452"
  },
  {
    "url": "assets/js/8.c666f59d.js",
    "revision": "44466a50669b41fba177cc8356eb31cd"
  },
  {
    "url": "assets/js/80.0114d79a.js",
    "revision": "9645881d2b5bdef415e3f4728b306fca"
  },
  {
    "url": "assets/js/81.923966cf.js",
    "revision": "889b407c017ed80001abe08dad14fb8a"
  },
  {
    "url": "assets/js/82.7ba4a3fe.js",
    "revision": "7d9d7c0e64c84091fa06dfbf05d53bfd"
  },
  {
    "url": "assets/js/83.530a90b9.js",
    "revision": "5cd45821d1a4efaa9ebafdc44d3ba7e0"
  },
  {
    "url": "assets/js/84.b58e0653.js",
    "revision": "5b22b594315b9a8904cf8f181439b563"
  },
  {
    "url": "assets/js/85.a06dc810.js",
    "revision": "0cc24c469edd79f955aff481f3b8a2be"
  },
  {
    "url": "assets/js/86.e15b58b5.js",
    "revision": "17aa57b36364b7f88f02ba144b466be3"
  },
  {
    "url": "assets/js/87.3c03866f.js",
    "revision": "375014c9480bb0207f2d1f9cbaa92e6c"
  },
  {
    "url": "assets/js/88.16620d92.js",
    "revision": "02147685c4cf708c40e684923290800a"
  },
  {
    "url": "assets/js/89.e0d6dc13.js",
    "revision": "066352b12b954f7ef6c39ec100dbb5bd"
  },
  {
    "url": "assets/js/9.00443fcd.js",
    "revision": "498b14b0350585b421ebcd68aeb20f22"
  },
  {
    "url": "assets/js/90.d15ffe7d.js",
    "revision": "17fc2159e7665a8bc9a0c5108eee0c4a"
  },
  {
    "url": "assets/js/91.40d08604.js",
    "revision": "268d73940307be8c678ffddc117e0569"
  },
  {
    "url": "assets/js/92.f1bb37af.js",
    "revision": "7a449aca14c370006f32f1016301a9ac"
  },
  {
    "url": "assets/js/93.474f2ba2.js",
    "revision": "2880d8165ece14be602168a606eff18e"
  },
  {
    "url": "assets/js/94.726d0fc7.js",
    "revision": "41e170ed97064804b6478f49cdd71e3c"
  },
  {
    "url": "assets/js/95.bd668b5e.js",
    "revision": "10a3c18f5207015ad7e066c882c27344"
  },
  {
    "url": "assets/js/96.164a39b8.js",
    "revision": "9336d841f33543dceaa369f5b050d2c2"
  },
  {
    "url": "assets/js/app.c1f9d293.js",
    "revision": "2ddbd7630f3870a7b68da94e4d35ccf6"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/database/index.html",
    "revision": "322bf8f9e0ea7d94de6cbdcde3849ab1"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "c7fc7593be2ad64a619ee2a9691e7ea6"
  },
  {
    "url": "categories/front/index.html",
    "revision": "361cb68ac6b7cd327ab66352fa2bc8f1"
  },
  {
    "url": "categories/git/index.html",
    "revision": "d02cd530f71510f5e9762dfa0d5c0a05"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "5ba856da85021549fc9fcd8f3f72d5c3"
  },
  {
    "url": "categories/index.html",
    "revision": "627c0f2c29ee67189827503158123ccc"
  },
  {
    "url": "categories/java/index.html",
    "revision": "0c252a8e842c0b895a40b79246579013"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "b4451faa43b0fa6b28bb0f8aa836fd6d"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "f7559385bb888497e51f0fc6487ce454"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "2e40c270659e7f0aff280a1a37b89f95"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "e4984e836d0428a1026f132a0d7d093f"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "fceb99af829ee334b02164a2f4d4f441"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "6a9e1c5e554df995836b85d7bee4c5d8"
  },
  {
    "url": "categories/python/index.html",
    "revision": "1bd51a080698e6f2e1257af8091a2457"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "43d63880d8251897e345b9b7bae8625f"
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
    "revision": "4125dc80c462ba872b64dbcd227b4563"
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
    "revision": "42c3216fe4ad4d9b4b34f04acfab7714"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "21c9b7bd7f47621f7b753686f16ec756"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "9514a5ae1c5b85f64c4b1028d2783cdd"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "7d9070d4f6d8dedf5ca8efb6e5e1a031"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "f0356b9aa9baab1f9df702d6d4599ea5"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "977034e5b0bf490a96940b52d4d4efac"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "00522ffe4143b83ff820b394dd301c41"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "e5f04c4ee687d70130e066e0bcec58b3"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "6c038a83169f5e5ac5b2772b21854149"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "a933bfd7ed7ba00be5acd623fed214b6"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "6289935c98fb9e9caf4d75c51873e355"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "5192038d68bf76a00671ca6088c75adc"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "279d48a01549170353ca7c8e60e83252"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "3e09a900e6570cde73254a6f92beae15"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "b2c0c882ff647988ee118f269c4f4032"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "c0f29cef7ad1474e27d100e79e5168bc"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "e688c9889b8e95322abe2b5819cb68ec"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "48047e05ec1134b984188b7eb0a27d2a"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "8188e48cd872b58b30463d04403e6c17"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "f97425de1ba70d9e281f5bdb7db28fc6"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "8accfd14c3db6cee9427b134baad71e5"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "c0d5a29ff7c20bea06e68e6e4910815a"
  },
  {
    "url": "posts/java/java-spring-MyBatis-Annotation.html",
    "revision": "0baf2502deca725ef533b5a95ffc5045"
  },
  {
    "url": "posts/java/java-Tetris.html",
    "revision": "0f9682fc8140f41c509d52e7bd942502"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "6bae6d34a0fa295f7895ca060b926ad0"
  },
  {
    "url": "posts/java/spring-RedisTemplate.html",
    "revision": "e042b43f82b926ebd9551964a49c3580"
  },
  {
    "url": "posts/java/springboot-schedule-task.html",
    "revision": "52b7f3d570d64d63afad89999e863ebf"
  },
  {
    "url": "posts/linux/linux-ecs.html",
    "revision": "3c520a8253bfebaad13998fa8c95ba5a"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "0780cf620920bcaf6df2c399f1466892"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "6d5fb04f13da8a88feca95320037930c"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "81e70c884e9925960a5fdedde0af7071"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "617df79f728b3b7b37c2f736a44fec77"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "01f68988d58c5363c235df6626ef47e7"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "9dbe29aa42383383b624eec6c8464103"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "f90969242c12cb2b36ee8c046c75ba23"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "11421d5974247c18f22a320c0fd10fb8"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "d5323bfce4e7feeea4b0a69cde47f3ff"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "fa60b363f9f682b254d7a39e787ed375"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "d45e122adc2878107207be6299acf3bb"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "6332bd3d422c9e6b00254004088de887"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "ac5f52a683178357da723ff67d89c8aa"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "b0cabaf553e0cf3d61ae935b038e7844"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "e1dac1a97747d0cd8685e095b54abebd"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "80b63d435a70d247b76e623acac12675"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "cb65abcc60e6b15be460377fc60545e4"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "460f14ca9024759ae51de419e4ef293e"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "33b2016e0aa7357da398df3631d70f4c"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "729fb185aafbdc227ed08b85cc8ef122"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "5b2329b7236c0916ae84bc95ab4f16b5"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "9027027c29f13e11452b1c4633ce4818"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "d24714a8777010bd65f6c2cbd559fe38"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "75cee19a6670054a047f307112a8cae4"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "118ee436eef39c28a49fd9447856f384"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "d9e597875e936eb3200f2cde892e62f4"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "2afa40b8d3ca5cc4b7b62300ba59235d"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "6bcd689ad5966f12f2fc215f2bf83d99"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "b7f632b7002ed794e25a4a15279d9800"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "d361cfb0dbab7ceec8861b5a6c3d7eed"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "4906b49b52a8fe373b223d2288262239"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "a331a21099ed39d988c3af11e7750739"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "e4348c5b18f38f2d62eb4cdbba71d256"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "e07682a1b2505de30a488953882e2eda"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "c15ba2612e85bbb3445ab316e28ef2c6"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "fd482f96eb02697daa7d2968feafa4de"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "e0feaa3cbcb34d75afea17ace62cd57e"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "25c5376543b9e0d26b7a3130fd0500f7"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "8fcfb01837940c6bbb4c771fd23553d1"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "1edd8a3650fc48542c1e11c68fc11094"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "003efc6823bb969b8721a8493a4a7914"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "8d1098e9526d0ea31cfc6075d48f7ad2"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "dbc04002e57c9428ef2aeca94ea28915"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "93b9b301fcc21cdd7e3072216b2233e4"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "c85ef4150149b96c8a4865d83a04416f"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "e266d7729c854dddd2f43793a273c9f7"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "b9ef07fe6b7a6508884dbfb3f01cf995"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "d0b95751a330242d35188fb7a11ed8b5"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "8cbb0f0f10971e42b7362a2bf4f92011"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "c53d5388bec8cc6f6e1268cef15a37c4"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "ebf89e9456378bddc6b50de11b09296e"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "8cb10d1c6a5c2d908c9eb6c707976d3a"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "ec9e6636afeea34d3387f3f48203f70a"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "cd0591826258144b20c7546248b76d67"
  },
  {
    "url": "posts/python/what’s-new-in-python3-8.html",
    "revision": "f30e72c561c5abc9d8f75f27695f882c"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "a8c18c893a296ca20f25804b83e79bd8"
  },
  {
    "url": "tag/api/index.html",
    "revision": "d8e17afdb26d37fdfb45cd4949362b2d"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "891c4b733357c7de043f01385b6d01eb"
  },
  {
    "url": "tag/context/index.html",
    "revision": "ba2e973279fd2e7f889d183f20e45024"
  },
  {
    "url": "tag/database/index.html",
    "revision": "74da32b39332f52b2ebd3c1c31e03aad"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "d268251ae0b828a687ad03263a58f8d4"
  },
  {
    "url": "tag/git/index.html",
    "revision": "7b2418f4ab603a0686de4e348e2ee3d7"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "1fed9aabd49b4ac8afbb849a5e01aae6"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "9dcdc8d770cb7219d94e052c8dbcec8d"
  },
  {
    "url": "tag/index.html",
    "revision": "9a17696c4e056586ed2cf106c681200a"
  },
  {
    "url": "tag/java/index.html",
    "revision": "d05f09a4583f532ad73256c85ecaf702"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "d64fa9a3ad9fe61aef4c6bf2c8bfa740"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "f27e8979e7b1c33b43d7eb1f1571d0fd"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "4661bfae5ed032cea47de9187e55300b"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "d922b50015af1c8b904a2400bb3f1701"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "2bb399844c8af8dbca27c694d7979962"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "ab12c316b03db3fa3beb242650dfb57b"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "ab78940ea2ae00329cbef482211f65ee"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "19fe2a488cf1bc5bc994c37840421363"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "17590ce65963030fbae5f2f78d96ccb3"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "15d27bf06403b99cb93a6c490a41ebc9"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "0d28409a6ddd134de86be9d365ac2d9a"
  },
  {
    "url": "tag/python/index.html",
    "revision": "bc8407f79bc6ba17a40b4e2196891631"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "529586b6b82b07d4f6b92b0f23d9f02b"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "e216333a80bc785966fb7671ab73cbcf"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "731fd47784e3e9d2424beff46f95224a"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "ce29b0b3d57a1dcb5eb99aff81c7d6b1"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "c123178fedd34f8d1486e03cf68e7891"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "2a899158268e849bbe69f92a16af1f57"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "3e87b5363fcdbe1d00d48daf6ed06b24"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "0581e71a65d3650cdb7fea534dc01f5a"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "c9ed16a0b3b38ca98c6e1b2f750ce424"
  },
  {
    "url": "timeline/index.html",
    "revision": "39dce5cca0acee9ae44ec096f2596d5b"
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
