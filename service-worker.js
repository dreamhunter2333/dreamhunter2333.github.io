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
    "revision": "7fd3334b647e8699ece3fc3692a20e68"
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
    "url": "assets/js/73.05c4481b.js",
    "revision": "554493ce8ac16e8b4b9800e018ac0050"
  },
  {
    "url": "assets/js/74.af4e6ef3.js",
    "revision": "b9755be200e18e82e32bfcc89547d9b2"
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
    "url": "assets/js/app.a6d4f777.js",
    "revision": "116fb465a9e99fefc26ee6e7dfd01df0"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/database/index.html",
    "revision": "fd8b5891b002544e549dd31d7a7cada0"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "350cc8cd0bc3901c0c5ea56063dcf8c5"
  },
  {
    "url": "categories/front/index.html",
    "revision": "2d1a12ac99a5d6e61c1c1f274e8a8c85"
  },
  {
    "url": "categories/git/index.html",
    "revision": "5f0183361cebf0bb16457f525bf1e23c"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "9eac9c1057b2841857c3e9a85d80c511"
  },
  {
    "url": "categories/index.html",
    "revision": "4a12fe92f02e13fbf5ccd5658cb7ab20"
  },
  {
    "url": "categories/java/index.html",
    "revision": "2090452dff857eb40dc9b8145c5224ca"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "31723432ca451774abe8ddb6eb72e128"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "5ba69506372e1442c8c8a95e82370982"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "6a1f75fa5af4c0a690dd7c7595ecec00"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "582fd06c0ace38717ed734ae3145d29c"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "fb1825c29c6d4049c2c7ca368887ad8f"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "b8dddbf52b04d60650bce31cd8126a72"
  },
  {
    "url": "categories/python/index.html",
    "revision": "dbe3dadb73e16c09b34deda79f229eea"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "2d28c11a7b78f048e964e727dbe476ac"
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
    "revision": "2a655f7ca3d406b8dd3d04abf4c5c213"
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
    "revision": "a8c8849b43cee47318aea9558edf0f11"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "3b20d2405a616ff126d905d4b9e45db5"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "91048b4ff7cafbc9acadffa8dba4b54a"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "fcf236e91133cf66dc65c873b7fc42c9"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "42406226d1718d85db4004155467b12b"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "92e44173ab6390ff2a47bf6f50369df8"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "54a74ac2601f706e8e5d02ab7ed20275"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "a3fb02afae172613d97d428c6ed4d034"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "44fdd687b956f2e1451c1fdf61f13679"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "a60b596c35d44ddc58792695774852e9"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "7d29a18354f588280aa55732f2496915"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "6a293f6faaa0242ecdb7cac0f482c053"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "381fd2350d4a6c96a81500490b5c7bb7"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "4f27317a338e0e6fdc656a0ffd19b5d5"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "117f95b6d33cf0fe213f9eb47650ca72"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "9993022b25ae6b3b78f242eefc7843f8"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "b3261a5ce04695e482d4ad24ed52348f"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "6cfc2127a73645db99ebb309ddca189f"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "557a30ff537b3a333bd1537899bf4e11"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "278ad8e0f591cd98b35ba8f47b2ebb01"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "7d3ae78ad8145047093116ac22e0774d"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "9d32cbb0d566859613913af6d27b4d1d"
  },
  {
    "url": "posts/java/java-spring-MyBatis-Annotation.html",
    "revision": "463ae26c61b534fb52ccafcdd9b4def3"
  },
  {
    "url": "posts/java/java-Tetris.html",
    "revision": "0517418e1136a2b56bbafcd442759991"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "0d12429b8b2322cf8c1d79c9470ff7a3"
  },
  {
    "url": "posts/java/spring-RedisTemplate.html",
    "revision": "51b7a3d00a47d4680186cdbf05f4338c"
  },
  {
    "url": "posts/java/springboot-schedule-task.html",
    "revision": "2e9d9a0b9333711c7d9106785ae052eb"
  },
  {
    "url": "posts/linux/linux-ecs.html",
    "revision": "172b8eb934e08eb565c372b43d3fb9fa"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "25eebc75baa5c6411081b00db156cab9"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "9556d5947df77e2fd5877521877fa336"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "6588d55677fb7f044e34c156acc2d3a5"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "823e2761ba0bbef625426491b2fb1fb8"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "6c63b49ee3cdce614a65a3518fd38edc"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "b787db6a18f0afc14906d7c6cf83cc14"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "a47dbc987a3e661392f70560ea2bcfd3"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "0d868aa40474d4ea8b34b3c70982cf3c"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "6495a5afd64100221681f2d054174ed9"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "0f2ae53d3c4a76d1cfc38babd64832a7"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "e546f30b73a1262847ec567ef1449534"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "3b2ed1255b1117b7ca1a3c2b8f0dfe47"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "b2d924e7dca598f0c51e39433706feeb"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "32e975518fd78e61e3c6e548cd4f3d6b"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "f2a900d93fa960f9760cd141a083207c"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "32acf5b1d58cc80fc3a09f45f16170e3"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "0af56c4bdf15c1324d436ae93725334b"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "6b3ad6baf047e5e05f8a53152ce88c84"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "500c1aa01fdbe67b3304088bb5b0f870"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "1da0733519b650c289738f280de3ee6d"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "a123918f885a6098454c012f84628002"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "28736cee1d45f87e49281e9a79147f16"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "5c7422cafeefe0dc79758584eb4028cb"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "22fa0f7f4773269a8bfc3f2ef9157fd8"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "5750e8965dbaea13e2e1d650a84d5877"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "8e899826cb2f9fc5ad07e4bb30cea6b7"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "5f62820d3370be5968f4c062d7c81048"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "2d90123a83801c7e9572425753c8938d"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "2a00e39a63ecb58de119ce119b9c0014"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "6d02a341f68f1d12a960aab94ce1e4eb"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "33ed8d4d63088d9f37964a3a3a9c1f95"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "a86b859a1307898f5128d1fca8ba1381"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "01e5c81205b1cbfb6581b8010ef0435c"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "f5ef5e5baa33f2d6dce268b02fe58332"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "21b372db56a6234230f9a7b6e0f8269e"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "1ebff62b90d4b70f86d839721e0e482f"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "691981bf9da46c352a8f12f605928472"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "1a78a05488287dd44a960cf57d850b63"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "7aef6d5b6b80e480bd03c21649cc88bd"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "7432fda4e07e982ea2fe7fb632355d32"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "a810266298e8eadea0bacc3f8a993007"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "73b97db37a2596b2b39de9024fa0e118"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "04a4b6ed6ed886246f311698716868d6"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "f1e7b840e45c758886173313cafc3268"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "bb7c1934035d0c7dfd78b3b36fbbd1db"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "d770f3fd382475306b5319204eb3fa4b"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "f47200c3edf5910a8dbf6e67c2bb849a"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "737a1c798f9633ccb2727e5ee577577c"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "3136a5b91bbf52c1dcb0bd109de5dfb3"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "454ba3a7c5bb1086852bdd7cb3b5611f"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "5e864eb34200f8e3ba05b4ca49ba3b03"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "25c6b35db9785f1346d4b1cdc74fca84"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "2898d523271682ca0810ccd62802a180"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "7c771155e2bc88689a9b55c41337a685"
  },
  {
    "url": "posts/python/what’s-new-in-python3-8.html",
    "revision": "a62b272acd678684c913241ac1f13422"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "bd9caa64925ca26b6dfbb3d61d489031"
  },
  {
    "url": "tag/api/index.html",
    "revision": "96217011002a81cce50bdff1a60fe7a7"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "c55f62640aa9e5668fd7340dd2afa77c"
  },
  {
    "url": "tag/context/index.html",
    "revision": "c86118c855097594ac44182d6d52105e"
  },
  {
    "url": "tag/database/index.html",
    "revision": "9f5e8ecb51974c1621093ccf338ded5e"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "2ded80433556340ab4e7f703620dfc32"
  },
  {
    "url": "tag/git/index.html",
    "revision": "def1e64bd816f30b1390f346e31dbcbc"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "87c20c5e68ee8496c5a5895284836ac5"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "9dfbf4c96eb00af621972f58e2e37428"
  },
  {
    "url": "tag/index.html",
    "revision": "40ed6e2c979e66bb259b812229e4a5d4"
  },
  {
    "url": "tag/java/index.html",
    "revision": "5c84598ecb102fdc8be4eb988e8e1e50"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "4734b50c8d6d41bcd2f51cff01b14880"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "d166d3630add5e1a097dd340b345b1c3"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "2718cdfc90cc4b71ced05b47923cd4c6"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "f58000fbbadb938364f69c635fcb6679"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "82adc5829bf4ae3a7cadc1c6845980ea"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "c2718c4d082b53be0248b4dcea758fcb"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "429b05b2c21ccbffac2c6a869c71b68e"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "200c93addc2f9ced6e6c5331b05ce27e"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "cbfbb1d24d08a332abb7db230bfcf2f3"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "51f3df67e2ce43b914811f1d107c743b"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "d6e4b72066db79fcf13b669d812f95a7"
  },
  {
    "url": "tag/python/index.html",
    "revision": "fec18fd3400da2cfe4f2c69895c6ef5f"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "403007b2a09c4b2846ff339144819c06"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "676e38ff798bd55ae241162d9ba4d55d"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "a74d9c4910a0dd2c4ee891848e96a1e6"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "ea011cfa263d96eea7864d1af1760d24"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "9f685c3ce5e7a9647a667585eacd999c"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "d866e9405f1b9e794fe99aef267f797c"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "98339809ade4c08f4b12017d669d861b"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "d7d4f02aafe9bb0cb4b2570593b1c02c"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "7f37e6c3c24382d5b2661c7b61729883"
  },
  {
    "url": "timeline/index.html",
    "revision": "5a6528244a78211324da47e0711252ff"
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
