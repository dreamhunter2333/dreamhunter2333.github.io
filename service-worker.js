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
    "revision": "9ab780b01df067dd1b4c523f93447069"
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
    "url": "assets/js/48.6692d4b7.js",
    "revision": "810ea50248fb9a389677e749c435f767"
  },
  {
    "url": "assets/js/49.01df15d2.js",
    "revision": "ae0e5a185814d0e941fc2b052ff689f3"
  },
  {
    "url": "assets/js/5.e7a3af46.js",
    "revision": "33e69efac045f653ca2cb8e00b05e0d1"
  },
  {
    "url": "assets/js/50.978ecc35.js",
    "revision": "e761e2e552353614b01895963ca79f9d"
  },
  {
    "url": "assets/js/51.8bd903b8.js",
    "revision": "daca5a2b9f613413e84cd2e41b1ae36f"
  },
  {
    "url": "assets/js/52.411e579c.js",
    "revision": "da34eb8107af840f858b304d3fc79881"
  },
  {
    "url": "assets/js/53.254c234a.js",
    "revision": "824911e6b6e7d801e8695c535dabafef"
  },
  {
    "url": "assets/js/54.3d0733cb.js",
    "revision": "0d867f40319f48e0b5285883ea5fe5c9"
  },
  {
    "url": "assets/js/55.b946dcc5.js",
    "revision": "219240b787583d01220b17e06a15149b"
  },
  {
    "url": "assets/js/56.2f310f00.js",
    "revision": "ff082d9cb7d3af36e6cb99e5b95428d1"
  },
  {
    "url": "assets/js/57.91d67e64.js",
    "revision": "282601aae064096b9e4d4f87d9909b15"
  },
  {
    "url": "assets/js/58.8bcd07f9.js",
    "revision": "837b7cc35e295fc865e81fa45dee6cd7"
  },
  {
    "url": "assets/js/59.a74506e2.js",
    "revision": "9bb3c0f178af449967d2f1ac5bf97ccc"
  },
  {
    "url": "assets/js/6.cba5b5f7.js",
    "revision": "d7b453e667f1d422af5891650f2310af"
  },
  {
    "url": "assets/js/60.36db85aa.js",
    "revision": "4ac76de86d4292d9ae17b9c8133e5604"
  },
  {
    "url": "assets/js/61.1ed3a32e.js",
    "revision": "886ffeeee3edeb7a731ab6d5569c7576"
  },
  {
    "url": "assets/js/62.4cc914c0.js",
    "revision": "535cca8700420326f79c2b23cb645985"
  },
  {
    "url": "assets/js/63.2ae91f79.js",
    "revision": "3359d7feac22e827c6c01b69594526fc"
  },
  {
    "url": "assets/js/64.408396bf.js",
    "revision": "b3830fe2a4cc7795f9b678e3f6365fe7"
  },
  {
    "url": "assets/js/65.3124767e.js",
    "revision": "da97c707672e64141541ebbeff51f830"
  },
  {
    "url": "assets/js/66.02d476ae.js",
    "revision": "6c4a9ccd2f50d69bbf46e335ca2b1d9e"
  },
  {
    "url": "assets/js/67.9f3136b5.js",
    "revision": "96a5c2ca3b45ca29bf3636898cf2a105"
  },
  {
    "url": "assets/js/68.f8db1925.js",
    "revision": "ec15793de38af08ebae99707db502933"
  },
  {
    "url": "assets/js/69.f17f039f.js",
    "revision": "ff221254be7ef23ac40cbfefc75732d9"
  },
  {
    "url": "assets/js/7.48d055cc.js",
    "revision": "5cf16a60dc3e5ad93fe89a7a9334716d"
  },
  {
    "url": "assets/js/70.6d7c43d4.js",
    "revision": "82413095cfb5afff36b94fd297792e85"
  },
  {
    "url": "assets/js/71.4078ca3c.js",
    "revision": "de76b194336f40d5f27dcb847d94ff4b"
  },
  {
    "url": "assets/js/72.62f1534e.js",
    "revision": "17f48ea5ec2a5b2106d3bf76fa996f9a"
  },
  {
    "url": "assets/js/73.7230cb83.js",
    "revision": "910a9037ee56485842ae61ab6232e72f"
  },
  {
    "url": "assets/js/74.e62f17f7.js",
    "revision": "4ed1355ec562befdedb5e0784fceb473"
  },
  {
    "url": "assets/js/75.22e1f757.js",
    "revision": "d0ea73907007c5fe5f2e07c96d9c940a"
  },
  {
    "url": "assets/js/76.fb3c267e.js",
    "revision": "6779f0ba7db4b43653b2ca99027b707a"
  },
  {
    "url": "assets/js/77.c4043732.js",
    "revision": "64185d2a179fb9c18112d85c89c7790d"
  },
  {
    "url": "assets/js/78.e889bfaf.js",
    "revision": "4eb5d3546bbb7981df8e70b5472dd68a"
  },
  {
    "url": "assets/js/79.a8415ac8.js",
    "revision": "9165f4e3b4f3e6a96bd38a115c5f4eef"
  },
  {
    "url": "assets/js/8.c666f59d.js",
    "revision": "44466a50669b41fba177cc8356eb31cd"
  },
  {
    "url": "assets/js/80.148aba75.js",
    "revision": "b8de908dceaf8944226004b5133f37ec"
  },
  {
    "url": "assets/js/81.ded82d57.js",
    "revision": "56d71753baf25dc942c0cde5bef8f3f1"
  },
  {
    "url": "assets/js/82.dfd62df1.js",
    "revision": "24195f041eee5ca4be1c8c829e213501"
  },
  {
    "url": "assets/js/83.f3b99f25.js",
    "revision": "95361b7579121631f193fd15ff9c604a"
  },
  {
    "url": "assets/js/84.993c0158.js",
    "revision": "6ca991d1fcd090ad8dbd38dd05922842"
  },
  {
    "url": "assets/js/85.de92f9a1.js",
    "revision": "b863e9314ad6512822d14206906613c7"
  },
  {
    "url": "assets/js/86.82750169.js",
    "revision": "11527c7023640f441b6bbd43a413e3ca"
  },
  {
    "url": "assets/js/87.59c3de05.js",
    "revision": "7ba59d02ff341327f39e6a98db9b7fa0"
  },
  {
    "url": "assets/js/88.6be7b7ff.js",
    "revision": "237ec5bcbae62d21976e119d4b072b4f"
  },
  {
    "url": "assets/js/89.cca1d4cd.js",
    "revision": "bda7e8344988674692f5435ab52b752a"
  },
  {
    "url": "assets/js/9.e62b16fc.js",
    "revision": "21f8624106f440cc070271cb2a5cf63f"
  },
  {
    "url": "assets/js/90.37f3c858.js",
    "revision": "76235cd7e1ac24e5ec21edd68de9355f"
  },
  {
    "url": "assets/js/91.ddb7b191.js",
    "revision": "86d3709d85c4ad0edeab1ec2e1b08dbd"
  },
  {
    "url": "assets/js/92.c9fef451.js",
    "revision": "97fefa6710944d6e74f3ef623dbac20f"
  },
  {
    "url": "assets/js/93.8c6c8fc0.js",
    "revision": "3475ea19841635c7b8bc4c1dfac460fc"
  },
  {
    "url": "assets/js/94.e1e678fc.js",
    "revision": "b9abbc8f4f552d6f605a4864dbf43129"
  },
  {
    "url": "assets/js/95.3e3eaf5a.js",
    "revision": "67ea98c1fddf47bbd4fa289e4f6a9879"
  },
  {
    "url": "assets/js/96.7ec7df15.js",
    "revision": "7add340c35c2469fc4d2997f956e423e"
  },
  {
    "url": "assets/js/97.f27f8ff0.js",
    "revision": "4048713948531bb247b36863f8774519"
  },
  {
    "url": "assets/js/98.541bcf9c.js",
    "revision": "9a45fd6c4c270c0dfd840788ce197858"
  },
  {
    "url": "assets/js/app.554173d8.js",
    "revision": "056efe9d112e8cae1cd6f024fa970738"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/database/index.html",
    "revision": "998c8468cf7086e263e264374d96db74"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "d05a7e2df83c8082b9883c054655f809"
  },
  {
    "url": "categories/front/index.html",
    "revision": "28163138c060e72a66cf61dc05acabfc"
  },
  {
    "url": "categories/git/index.html",
    "revision": "2aace1b58607e7fcd6ad99a944c92f03"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "d60db592c27f2df064db5dad030f6f00"
  },
  {
    "url": "categories/index.html",
    "revision": "4d05f402082dcb0c588c28d1c83ac99b"
  },
  {
    "url": "categories/java/index.html",
    "revision": "1dfed98665980ae35a9cc4e202c200e6"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "593a11043d74b2fe8dce9da9276d6e6e"
  },
  {
    "url": "categories/mq/index.html",
    "revision": "16e4cd245e0a041a8f4e2b15fde0e034"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "b6f285b2cfc7eb70ff9a15ef0cdeca4c"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "f5f54cbaa2d2101b0d9c4e4418361b31"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "08d4e1d65592694474607fd08efac895"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "f497f81fc66e8ea58a29c8177da9c55f"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "2f22ef3f5e69c00ec5566b5f58d3dfea"
  },
  {
    "url": "categories/python/index.html",
    "revision": "a32248bd74602eecd70dcff4baa36197"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "111e5157c32d0f8974a9bc0d1d1c9df9"
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
    "revision": "374a6c3871f7661f433d18c797bd4dce"
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
    "revision": "95e73242d8ab4e1166d4ca8e2a832de1"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "3f797edfb7e28369165edf37c6abedcc"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "57a2844a43a3b40758d236255fde6c95"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "c919f250c39fff73cfd0299164dd6a89"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "632559eacf8e17e77cbb050458ae5369"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "e55f93d63d53aa9fc3b5322bc547aaae"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "e81cac675290a848a4fcc7fc88ea02dd"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "118ac5f926620486238943296157223b"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "cac89177b037ae0c9a01f097f9f1e06c"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "d97ceb5b6093e71dcd977e3173ddb086"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "2fc4c7db57b04a546c5873c0ae40b2c2"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "b9dd0d5b2f26b210416dfddaec3ad6f2"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "d3f58de5c87945d0b225986734c072e8"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "3ac3c97122ab9a9b2c0471d25054bbe3"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "4f7ec9f6491013608af7b7438946e544"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "41a7390da593b8b869e5b126fa75b4c9"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "ede9bb06a14413c28431f8f0a6c99b6d"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "0e5b5778d203031056ce0de33cfbacdd"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "fa03972c2faa0456e7ba1d7502635510"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "7d0cd8b11900fc9d90f50543c3557251"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "393a3aecad73e33bbea9b60aaf14d31c"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "9144df4d8b4b93f2356799bc94b2a9ef"
  },
  {
    "url": "posts/java/java-spring-MyBatis-Annotation.html",
    "revision": "bb3028547a0bd27a1429662724fa27e3"
  },
  {
    "url": "posts/java/java-Tetris.html",
    "revision": "88635c8f3a6455322320c416a8f5f9cd"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "5f4f6f529a907e9a9197b6f61d4bcf5c"
  },
  {
    "url": "posts/java/spring-RedisTemplate.html",
    "revision": "2e41bbf240c0e9c1f9be5080f3b0f5db"
  },
  {
    "url": "posts/java/springboot-schedule-task.html",
    "revision": "43f725d97092238b9a4ee923caf61084"
  },
  {
    "url": "posts/linux/linux-ecs.html",
    "revision": "1418af6e113b7ef3085f8cf8a4589266"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "34a6edf13ec7cb62144f3f97c81d6169"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "11b5c4b197dd54c2fbc463c3422cfe88"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "a0a8439ba6af5c28ec440539497b64f9"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "5828d0cac04c26693850835a5bea8a28"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "adffd0006f6d0cd4f4ee841813847b39"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "f3994a4ae93c2527c6a574b7ab885fa5"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "390f3d720f6e2855a2591c262b89546d"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "e2a18d569c381d113bfc3563d2dd6047"
  },
  {
    "url": "posts/mq/high-availability-of-mq.html",
    "revision": "55fe13e0a5647d5d6234027d68a66ae1"
  },
  {
    "url": "posts/mq/why-mq.html",
    "revision": "a89ff5971d73168bac8c3aa57465cfce"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "fd2f66aff21123ef1e02b94a56530e1f"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "84f11255f2cb30b20e397562d7838c4d"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "96e864770270ee1b78a161e91bff46be"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "e4ea0ae7c98ad8a3198b065334124c18"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "646312fe5e4e4e6a6bab3765a0cc51ec"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "38abdf3d94dad774fe4164c2ceb42d0f"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "09903d8ef79b4b394d78a4e72d2284dc"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "613179a0cd49a69afe71511a23bb6026"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "a118c14cfe81aeea75415873f0924d97"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "3bfdbbcaf4f8ec74a0694293a550776a"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "b0ee13eb89859effd1b2d0512cd53286"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "a5d9ea189e04cc8b86bb7f67b1626ece"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "694a8dbfadc2e51fc47db366238ff1c8"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "92b14f621708b958f7964fd05f3d88bb"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "789d460c16609d3822aa7b3e801c610f"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "a31a047587344c9c0b1a3d2b66a34c6c"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "ed88bfe41c6ffcbf6a70589317d11b40"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "b8eb1a1b17bd147c91cb93561206459d"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "40113bcaae139eefd426c441077aee13"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "29eafd85cf18f5f2eaa91ecde9126352"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "046489faff333341b4c1a59eb683af5d"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "9278498134451fb418e04b3bfde2182b"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "700ac6ae636472fe130c945ef053f166"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "8ef11ea2bcd65e4b9d564b9aee8e6deb"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "82cb879a336c955b95dab528a6628570"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "733fd0d470d382fece53141da24dc3ae"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "677c9488f9aa9ecf0bec4dc15a7c2d91"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "16e58c4b7cebf84f444c9ec1d038e50b"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "2f1586366624c71334cd8fedca331cca"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "da4d5d302482803c34fc537250d11035"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "e54efe41c04cc822b5e52965d6000975"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "17f017fa88bd40eabe957c8935f439fe"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "8e779cf51b9ef6ad8c9be1300546b809"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "f7770f9b30e74d17b479ab29580c1a5f"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "b5a79dac24e17b81b2cac20cd6fde20e"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "3dad97e56eb9f5ad68f3c81f5023d646"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "0a5d7c62d1ec182a5a1dff5a9bb18c64"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "f5e6754d22b8dd90dbc0bfb6e9d27d3f"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "d5b6a290ac46040323c58babb21b0213"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "a5d00cb0dd36871ecf289857175feb9a"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "4712a2dc7b7316e608bd7a509b54be70"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "eb4ed6f87048fb31bab0f7e3b5f42e17"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "059b5422d12a70267f54b974dc8e4d00"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "1a9a55531809d841e263884899235d38"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "9df4e90a81d8484ee2beba21d9fffcdb"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "085e3e33ffbab399ae772a4c5c5456b7"
  },
  {
    "url": "posts/python/what’s-new-in-python3-8.html",
    "revision": "96643a99bec74158612739d205bd7c9e"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "4365e5c53c3fe990e983894aeb6280a8"
  },
  {
    "url": "tag/api/index.html",
    "revision": "079992721243763f4de9eb7b6c810079"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "83110af965b9ff13582c413b8de35b97"
  },
  {
    "url": "tag/context/index.html",
    "revision": "50b50da67d703a3b31f8aef387b0d544"
  },
  {
    "url": "tag/database/index.html",
    "revision": "7cbde0b4e83175707082545e1817d2ff"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "47a1ef0aea539afda84b292b8bf97767"
  },
  {
    "url": "tag/git/index.html",
    "revision": "da3a33bac31b8428e49c5b34e56e4be3"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "29297e2d8da410c81bbedc24f6f9a2e9"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "24b081e61676f639a5ed3a69db9c8c75"
  },
  {
    "url": "tag/index.html",
    "revision": "7d802fb3f7292e6c63756f3663d08388"
  },
  {
    "url": "tag/java/index.html",
    "revision": "eb4f83cfaf60b8573a2b5a2516c23871"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "f9c7842357687d7911e99f0f5e6824f5"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "8e1ac465ba450163af207a4508e5a51b"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "6a71610f87c9eb600a0dbfcd55094f25"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "b0b7fbeff19eaa5db65e3c0ccb70011b"
  },
  {
    "url": "tag/mq/index.html",
    "revision": "726c464d396c830ff6a7e7fe37a89499"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "e7c99872eb90b1fd0f01f22d0d3c5a88"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "a03b85686995ace7b7b69ac14aaa0477"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "2c1f40270efb37aff1cc17ab151a60e6"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "256dc9ed6f8e9799371606230a0d837a"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "5bb2b4fabd42e741cd58fe6db5fb7d13"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "09c53ee3aa01b2a4f689b9c1f344e55a"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "8d5f2a160a5b0d36eccb178cff0cbe2c"
  },
  {
    "url": "tag/python/index.html",
    "revision": "c839f14ee55ea56a74be1f8448e6be5f"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "49fe1b144cf1d66564b58e406c228b1d"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "e42cc63b8c9d60a0d022b1553ee674e3"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "7165fb2bd6a731841cd187e64331e7bb"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "159012149c8ba2434f1c6d0fc5ba677b"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "c1a000eb319554bfcab71d4f516cb4ab"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "b00f5897180cef084d4ba695742cf513"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "b488491fd1acd2df4bc2f33a3d531eee"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "bafde43786af49b50c19f248e7f09614"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "bbf401dc092d9c9e645e1197d80a7dd1"
  },
  {
    "url": "timeline/index.html",
    "revision": "f2c11df06d6847ff9c2351bcba56faf2"
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
