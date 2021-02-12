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
    "revision": "52a1d874a43aa5684b40c346ac782b7d"
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
    "url": "assets/js/35.f65a3163.js",
    "revision": "b130a10473177296072ac442145b4d98"
  },
  {
    "url": "assets/js/36.22765964.js",
    "revision": "b27e3669c69a8e15bcb68cd7e6ccb24f"
  },
  {
    "url": "assets/js/37.ffb01df9.js",
    "revision": "4129a43a9a4e0b410fbee3fa07faf757"
  },
  {
    "url": "assets/js/38.f6013dd7.js",
    "revision": "f11f8002ea0bdab1879a3398984d91c3"
  },
  {
    "url": "assets/js/39.d1ed14ab.js",
    "revision": "0c3fa97e457e33d992f7381de98fa125"
  },
  {
    "url": "assets/js/4.6f793833.js",
    "revision": "2d695245e1a9a32e9524bfcf39667da0"
  },
  {
    "url": "assets/js/40.dbe83c4e.js",
    "revision": "3a4f311ec5a30868a821e40aa2b88f2d"
  },
  {
    "url": "assets/js/41.742451da.js",
    "revision": "2b83387579df86a35e1e9ac81f13ce4d"
  },
  {
    "url": "assets/js/42.7502f107.js",
    "revision": "bf5dffcf1238c512cdcd91d904a3ea63"
  },
  {
    "url": "assets/js/43.94c9695c.js",
    "revision": "157fce698c964889b23a4fea87721888"
  },
  {
    "url": "assets/js/44.63f6a71d.js",
    "revision": "27c719cba6ab57c035eaf6da4621d490"
  },
  {
    "url": "assets/js/45.446949ee.js",
    "revision": "aac26fddfef1846baa53e6346529870f"
  },
  {
    "url": "assets/js/46.97aa9171.js",
    "revision": "ac8b8208f9153962eab3defe7a2e562e"
  },
  {
    "url": "assets/js/47.30216d44.js",
    "revision": "d051ccbf2b4f77448c51001e4b2f51a4"
  },
  {
    "url": "assets/js/48.f3254e11.js",
    "revision": "3eea09bf8560729914c4752ea6d9c71c"
  },
  {
    "url": "assets/js/49.87e9fc3d.js",
    "revision": "0415efc4f2df87081e8d722ffba9e8d2"
  },
  {
    "url": "assets/js/5.e7a3af46.js",
    "revision": "33e69efac045f653ca2cb8e00b05e0d1"
  },
  {
    "url": "assets/js/50.b51909ab.js",
    "revision": "65b66dc3ea39bd13c429951ded4308d5"
  },
  {
    "url": "assets/js/51.40ccbf08.js",
    "revision": "dadb98c36c8516523f26b6edea6e4b41"
  },
  {
    "url": "assets/js/52.2958ddc5.js",
    "revision": "ffd013e9f53e1ae8297d212c8ef84c46"
  },
  {
    "url": "assets/js/53.d4969e8a.js",
    "revision": "1943341d9eb99bebfe14962366f18ef2"
  },
  {
    "url": "assets/js/54.e28f101e.js",
    "revision": "06197f29ef2bf990cc2feacdb54ac502"
  },
  {
    "url": "assets/js/55.17576315.js",
    "revision": "90de97aaf75f99a84496d051b7ac80ed"
  },
  {
    "url": "assets/js/56.92d170ab.js",
    "revision": "282eebe6fe8d78f628df58262b2b561e"
  },
  {
    "url": "assets/js/57.d06a3ee7.js",
    "revision": "5ee4cc0ef4d408404e5b33ca2b52f4b3"
  },
  {
    "url": "assets/js/58.ac5a2d43.js",
    "revision": "3f6093d371b4bdb921e85ae8d006f310"
  },
  {
    "url": "assets/js/59.8ba8b6f3.js",
    "revision": "ccc25ca1732aebb627aca9f01df56064"
  },
  {
    "url": "assets/js/6.cba5b5f7.js",
    "revision": "d7b453e667f1d422af5891650f2310af"
  },
  {
    "url": "assets/js/60.18e2bbfa.js",
    "revision": "cd7b21351fce148d8ae541d1acfceadb"
  },
  {
    "url": "assets/js/61.fb413f71.js",
    "revision": "56ffe62747ac590b6f9a46a297760168"
  },
  {
    "url": "assets/js/62.c0db9688.js",
    "revision": "9993ec77847b2065a2278fecec8ae08b"
  },
  {
    "url": "assets/js/63.f0433dbe.js",
    "revision": "f66337d660f46a681bd5d279ac9264b9"
  },
  {
    "url": "assets/js/64.2e0dbbcb.js",
    "revision": "8a426037cd192720d590cc28a9ac2bf7"
  },
  {
    "url": "assets/js/65.5e5a2d7d.js",
    "revision": "8ac783bc3c93bd8a9a4619215cb506a2"
  },
  {
    "url": "assets/js/66.a9ab584b.js",
    "revision": "e163ce14ad18d36e0c78c72c971ebca4"
  },
  {
    "url": "assets/js/67.e5681eb2.js",
    "revision": "01235be5ac2f7789ec2cc3788c46a873"
  },
  {
    "url": "assets/js/68.22291395.js",
    "revision": "6e1d26a482161dc298af5f07d49b5b36"
  },
  {
    "url": "assets/js/69.f8a6df21.js",
    "revision": "43c93405d6cebe0fbeed0c781b5b121c"
  },
  {
    "url": "assets/js/7.48d055cc.js",
    "revision": "5cf16a60dc3e5ad93fe89a7a9334716d"
  },
  {
    "url": "assets/js/70.f0a5d875.js",
    "revision": "0e9c9df3cbef8c1a6d588468e0c9dc5d"
  },
  {
    "url": "assets/js/71.0b89d4ea.js",
    "revision": "c79d6d18174b67ee725fbe3fee49cc41"
  },
  {
    "url": "assets/js/72.508fc3db.js",
    "revision": "a18c761ac9d931e2e78f3d30b71cc207"
  },
  {
    "url": "assets/js/73.7bcbeee0.js",
    "revision": "56c6410fca472224a8ba74cedb400cfd"
  },
  {
    "url": "assets/js/74.7b9b4a50.js",
    "revision": "0e619d76b1afedfe6028f945f6cab9c6"
  },
  {
    "url": "assets/js/75.bad5587c.js",
    "revision": "9d7f151eee6957f99986aedb8eebcdd7"
  },
  {
    "url": "assets/js/76.5969b085.js",
    "revision": "11b7a68bb6463403001d59158dd63c4d"
  },
  {
    "url": "assets/js/77.096882a7.js",
    "revision": "f8fe8f430d6c46e1ed71fd7bb100aeb3"
  },
  {
    "url": "assets/js/78.71b9c3f9.js",
    "revision": "59b2c980b38684de21b11dce7b5bb016"
  },
  {
    "url": "assets/js/79.28258d5e.js",
    "revision": "3d5f298343104e8c5cb50375bc996bc5"
  },
  {
    "url": "assets/js/8.c666f59d.js",
    "revision": "44466a50669b41fba177cc8356eb31cd"
  },
  {
    "url": "assets/js/80.e22f7a07.js",
    "revision": "76da004abeeb33d38821bbe9e45eb12f"
  },
  {
    "url": "assets/js/81.cba39671.js",
    "revision": "808a954da4f50ef97595a44238a9178f"
  },
  {
    "url": "assets/js/82.e611aab7.js",
    "revision": "483a14363176796fde071d594ae4f1f4"
  },
  {
    "url": "assets/js/83.a74401b7.js",
    "revision": "7322d5f5879661cc4fcf060e6b20f76d"
  },
  {
    "url": "assets/js/84.20c9c7e7.js",
    "revision": "4668ff91218d0bba0aa7be921729aa00"
  },
  {
    "url": "assets/js/85.766d9172.js",
    "revision": "d707294360d0427d7871dcf5565b825d"
  },
  {
    "url": "assets/js/86.0d05f410.js",
    "revision": "19ec14647f74b9c1eea874c3bdd341e3"
  },
  {
    "url": "assets/js/87.28eeceff.js",
    "revision": "efd81d1fb495e47b7c2965c7687e2b56"
  },
  {
    "url": "assets/js/88.b2a67e33.js",
    "revision": "bac35cd893c086f8d0ba757708464e9a"
  },
  {
    "url": "assets/js/89.9c2309fc.js",
    "revision": "0c3262606b6599063f76c674a96b52e3"
  },
  {
    "url": "assets/js/9.997cd4dd.js",
    "revision": "ce06359f5da9d24924b02eb6a919a9b1"
  },
  {
    "url": "assets/js/90.fa20dbad.js",
    "revision": "aba53ef54932262f1b01b7e710179f59"
  },
  {
    "url": "assets/js/91.6c0828da.js",
    "revision": "c78715cef55ce82c942532e96bc912fd"
  },
  {
    "url": "assets/js/92.745609bc.js",
    "revision": "c859e6f34410d3fc2514af91b9d98b6d"
  },
  {
    "url": "assets/js/93.43897d4f.js",
    "revision": "83fafd7a8ad5ca73985bfc0f73df72ac"
  },
  {
    "url": "assets/js/app.71eb970c.js",
    "revision": "06b69a97347c913c94bc18a26ee51410"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/database/index.html",
    "revision": "a5be9c35a013a7610015e4244e64d824"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "9b0981f3e593fa0e4193eb3715565393"
  },
  {
    "url": "categories/front/index.html",
    "revision": "ddfc6fbf97ab3c0a5528a43bd0175e2e"
  },
  {
    "url": "categories/git/index.html",
    "revision": "d868c9ad16fa76900ea10b06df08bace"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "721135c5e61d4f91dea59b5a6dc60204"
  },
  {
    "url": "categories/index.html",
    "revision": "c5e2a0b5820c11ece6991ceca2d0a17e"
  },
  {
    "url": "categories/java/index.html",
    "revision": "77ed5b80f41c854e76bc88ebcd561d1a"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "fd1e039c5280f0d7640a96ce635f22c0"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "96f85ac30b70d11293773c6230257cda"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "5fbec6ce19515e048f2198d963c47f11"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "de3f785ff91eecfd7d984cdad5d2d0b5"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "1b49600fa67777601c86d9fd9aea6adb"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "752c730740665dccbb1b87f1f26e2b3a"
  },
  {
    "url": "categories/python/index.html",
    "revision": "91232c4c7e5e79beae5ac0dcd0ee0535"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "bb43f956f6c9fce836f704a333ac380c"
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
    "revision": "35c1ae2d666503e10a3da57a14068465"
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
    "revision": "e9456d37e5d162f427cbda3382dae5c2"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "f93ab0957b898c2fc8fa7f5da40d1256"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "ecfda44ce8d762700353a532d6d0c2b4"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "020e698c2322e57ae51eed1d50da95dd"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "94230316cee387b0d5a57b9a45a19d91"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "a9e4d7a957a6f5214c80f740739970b2"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "91bf98e9da45eae071a2481ec17ae9a8"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "4dac8a97c25350b336f55d077ba804bb"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "f1e81e57b035b4cceb9434be8ffee108"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "68fc2ee21bd0561c012fb6119792b202"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "4a98a3d1961aee5cf8b2ee71c5dafb22"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "038c660be594bf0b38ca0d765ac32489"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "5bfa91b85782dfbc3708938b5b7cc885"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "75514295f71d5fa0058933d65a239fdc"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "53ef004dcd93961436eb791840814fc5"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "758e4d51dc1dc5437a8a4a7fb7d5f818"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "9867e1be567942be9f7817067c2535a1"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "ee4eb07f2d1d88dfb9efec0bb93f3a69"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "27755f08bccf1c76d4e3185b8c112f39"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "1a1251471b1e7401fff7ccdbd25b3aa3"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "07920ebb918a92ba9c493ef5ae3fecf4"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "26314cbd15ec3b0fc238fe22a9b0e422"
  },
  {
    "url": "posts/java/java-Tetris.html",
    "revision": "cc7bb7a72c22b7b437a7f5b4d3ccb065"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "33d5dd762c8bed3dacd492bdab473f03"
  },
  {
    "url": "posts/java/spring-RedisTemplate.html",
    "revision": "91ca6083bc6dbd640575c4c48f984c70"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "96852ec55a75fc8a5628f9e2b7215564"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "76d812f2f081b0a467e90ad357c00e6f"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "cbe37be4a5e61954490b2851f3be213f"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "a4c6377f90ff4e314894d414fe87d572"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "9ef599beddac541f435faab8ad97ea99"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "b87d94a62f3da15a6bf86a17ce4bac86"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "caef443efa1db3773b7868b04bca2092"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "50d351cbc7c0aeb7cf3edc021ff65b1f"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "c2df926515add817cc7e58bae3deebf7"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "f3b9a3c6c09fa02652d78c1a0ac1978d"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "5090dfd9a4fd617b9c76efb302adb081"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "4f10abb9424da69d4a2a972d0b7421b1"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "6cd658cc05c07913d97f6b802377102b"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "1c1155d9b0358434f08ee2be7aae316a"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "7653963f912cf2eede47700b81322ce1"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "31962a37d2fdaa8b73b55f87305f3572"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "0c0b95e5eb2c18320a9a959c68a07c18"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "5d5cfbceb34587aeaa263530178a1739"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "85ada85a5b10a4f2b17a8685fac8e215"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "bc0d9d29d95a9fbc6ba88233686d6b24"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "5b04dc41deb255c092a618f17c2849e9"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "eb2e48288c2d7cb8b3fa10962609542f"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "5af5fda4708c3fd2a60dda3cb49d06e8"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "5291c4204d0373e3526fc13a8e63021a"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "91b66457ca07ef72ef2e12ec8161b54a"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "f6b656ffc28667f6d02e9c4029ee3843"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "272176845ebc54056ee627b9af61f683"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "0ab1964ad9d528ae385da571d53b6931"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "5573ef442624a669939243eed36a7876"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "4d2a2f34bfe53e92165bb6db138835fe"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "ea4f8bfadd91edd78718880add50e28a"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "3d81068f0e85aacb13e23cebac5fda2d"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "9fe5069a676c88bbac4dba8317a2037f"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "97a16aedb9335d864f9a0aae8f0e38f1"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "9f8b03feb5128c81d31d6e7dfd331029"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "a3cfa36d1c2036974cfa97e467ce7053"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "5ec51f54cc68705602c6743313f2267e"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "ccdce70fda8ea255f4f20a521b253a83"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "ad4124c3843ad906545ade720d8a7fea"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "af47d5eed1218e428f4af0a05c566aed"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "b12f48cbabb91deccd1c03fd54c1ff8d"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "e3def27cce996def35781eabd660dbf1"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "b9446329de586759d9b4e0873d8c9069"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "2b51a559bef8c78d2656a6065d05ecf0"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "62ec582ad72cf06b4561448be620222d"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "2c2e803ad4d3a8ccd41d5a9fc6f98119"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "c06381e097cc4ff9707fc706f4bb39b8"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "e7598890f7a61a48c213a129404c3805"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "28fd9d4e117a09318b9901b778b0dfdf"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "adb2f1c866695439841815be3a9330ae"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "d8982a5afb2a3300d6beced7291ecf99"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "9493f96729576541e791e1da453edccd"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "d471c160697d59b4fd5882dd0e93719b"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "62c69f2289f4abb7e1f88d9f8780cc32"
  },
  {
    "url": "posts/python/what’s-new-in-python3-8.html",
    "revision": "3c5e26533d95ddb8593f8780033bff7b"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "7d62ab9973735a6d175c9e125a4c9ada"
  },
  {
    "url": "tag/api/index.html",
    "revision": "80b21541747ca2876ada64f8958e7eac"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "bbf22032566ff827a1d323deca651aa5"
  },
  {
    "url": "tag/context/index.html",
    "revision": "a87aa80c68cfaf208d8ecfa7548be4e0"
  },
  {
    "url": "tag/database/index.html",
    "revision": "d123a7a803d692dd289e0aec40680b81"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "07ac6b496af89271b9b212254d062826"
  },
  {
    "url": "tag/git/index.html",
    "revision": "cead6ce390507dc65e43d77e63005a30"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "f2f6b7edf2866f0148d3c2cb30a232ff"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "87aadf99a73c3c3e496309fb051b49ce"
  },
  {
    "url": "tag/index.html",
    "revision": "aa11cd5c6b00ef08f6f9c2345df61ba0"
  },
  {
    "url": "tag/java/index.html",
    "revision": "a2564970c8a4355526f24a790f7fd9a3"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "aa4b97b3e888bd81d5598720977ac5a7"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "7514f9ff4a4beda255ea341b8369f245"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "f03310c89350ab58f968d2a617fda3da"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "23d988b6db1c8bdf21cea0193d6b8b22"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "3e309be212ee9eeabb3e45828450e446"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "591914928c0c41136214e185270e8870"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "8d6d9661f5749b4c48e1a5719e96d117"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "335726afdef3661056118fd2c2fe3620"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "26bde2e40087068a9a2144e0f4c96ad2"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "eb8e3335a55e1937010e58f61cc61b15"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "9a4ea069fb93c64b2ec47ae9a1ddf21b"
  },
  {
    "url": "tag/python/index.html",
    "revision": "47023b0b99cb700bb69a30d33a3af0c9"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "a4bdc3513693bb054b466a4ab9139d50"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "8b2f06dd62374a3a1599585ebb819c56"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "70f726668706c34fb3494f7d92152132"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "a49a7186cadd9067937d6afee737a353"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "e5f2bd696b23a2414170c59e45a67e45"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "9c86e9666f39012fb1a8dea192200214"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "64a189b74b08be31258f0b1ce53ac9dc"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "01ec853f4c8c2f72f095bc6dd40b2808"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "f5d1c5c67bab73a893de1340a724382f"
  },
  {
    "url": "timeline/index.html",
    "revision": "68cb144282ad30f67790dbecc85801a8"
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
