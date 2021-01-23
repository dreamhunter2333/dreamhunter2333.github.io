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
    "revision": "78ea4c1379d2ac75130fa416ea9ad637"
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
    "url": "assets/js/1.ca0731e5.js",
    "revision": "53477c4cf84d75c45a924d8ea22bdb21"
  },
  {
    "url": "assets/js/10.2f35fbaf.js",
    "revision": "c5125c25ac4aa83b58109c5f33048721"
  },
  {
    "url": "assets/js/11.27c65897.js",
    "revision": "573edac51cd8f320c040f04a7c200d95"
  },
  {
    "url": "assets/js/12.42f663d8.js",
    "revision": "2c402cb8d4cc9c4add2e0e6b87706451"
  },
  {
    "url": "assets/js/13.694541f8.js",
    "revision": "51c3394fc9a4801f21245563e0676aa8"
  },
  {
    "url": "assets/js/14.5eae6b6e.js",
    "revision": "421d184230f05f25724e8bc336cd79d9"
  },
  {
    "url": "assets/js/15.27f2862f.js",
    "revision": "cd949817e49e541495802be1741360f8"
  },
  {
    "url": "assets/js/16.3c02302e.js",
    "revision": "c121572d31d4376404b071b80246c170"
  },
  {
    "url": "assets/js/17.b5929117.js",
    "revision": "5ae0fce903073e2e136ebb9818572acd"
  },
  {
    "url": "assets/js/18.69a1092d.js",
    "revision": "05b2d9ab78bd340bce374ef4817592b9"
  },
  {
    "url": "assets/js/19.c6c7c9b7.js",
    "revision": "7124581710e47453dce9965e23aabf2c"
  },
  {
    "url": "assets/js/20.a1ad6371.js",
    "revision": "9e8ef0c2d638ffb5532b1e4c5ddecd2c"
  },
  {
    "url": "assets/js/21.4a0f7194.js",
    "revision": "d462e77f244dd01230469ab648e4309a"
  },
  {
    "url": "assets/js/22.17f1dec3.js",
    "revision": "6b8b0454c2ec121bccfb095dac8b62cf"
  },
  {
    "url": "assets/js/23.f1f91a1a.js",
    "revision": "f6198c82756fdcea776f14390ad042ed"
  },
  {
    "url": "assets/js/24.427aa689.js",
    "revision": "8f9bae0937bc7a8a2697979156811fa9"
  },
  {
    "url": "assets/js/25.34aaa8db.js",
    "revision": "3c3ab13a9f4d294bfe2e8c8c9e2e193c"
  },
  {
    "url": "assets/js/26.6643e190.js",
    "revision": "4a9597711c1ceb969dd49e169db6d0cf"
  },
  {
    "url": "assets/js/27.fc6f7cbc.js",
    "revision": "c2c9cccaa80406387319035fe09ad4cb"
  },
  {
    "url": "assets/js/28.0beb74c7.js",
    "revision": "9426516d994cc8ff3e07a627a3f8302c"
  },
  {
    "url": "assets/js/29.fbeaa14a.js",
    "revision": "664089024866e0afd880f1ad7e0e61a1"
  },
  {
    "url": "assets/js/3.1335991a.js",
    "revision": "7f060e50f4b77fb2f37cf2f11b70072f"
  },
  {
    "url": "assets/js/30.84b7d3d8.js",
    "revision": "3056a85204673358c84e7c6f1df31091"
  },
  {
    "url": "assets/js/31.bbd2892b.js",
    "revision": "18fc902cdebd355d73100d9cab2cebb5"
  },
  {
    "url": "assets/js/32.31952848.js",
    "revision": "aa9466a4dfc0f07b588b734340f8e6b6"
  },
  {
    "url": "assets/js/33.465144f5.js",
    "revision": "74b6d6609716753c74daf7da3acb36c1"
  },
  {
    "url": "assets/js/34.fb70935b.js",
    "revision": "af64cff4446516e9c6488035f3199167"
  },
  {
    "url": "assets/js/35.b2d535e6.js",
    "revision": "971e63bca6f0f6c53e61b92d69ec9fed"
  },
  {
    "url": "assets/js/36.34ef2c2e.js",
    "revision": "a36f7b93bf7f5a21c1c0b98c0b854d19"
  },
  {
    "url": "assets/js/37.90c58deb.js",
    "revision": "974e78e38c6a4c70ae2c284c31d2c492"
  },
  {
    "url": "assets/js/38.c1868704.js",
    "revision": "5e9d35e209ef15c6ab7c1c3a89088c41"
  },
  {
    "url": "assets/js/39.75f6e1d9.js",
    "revision": "7433019ffe50d2887463da30a2380eb1"
  },
  {
    "url": "assets/js/4.a11e6b1e.js",
    "revision": "509daab5315435c58e3ab51116092efd"
  },
  {
    "url": "assets/js/40.c2ec8b9d.js",
    "revision": "9103218b503a0e18da8f9689576728bb"
  },
  {
    "url": "assets/js/41.0350cb32.js",
    "revision": "6615feabe11a8dfb6dbee66dce645b41"
  },
  {
    "url": "assets/js/42.cf73400f.js",
    "revision": "1a4eaca1a756a02ef993fd7741a49e7e"
  },
  {
    "url": "assets/js/43.2f05f956.js",
    "revision": "0a0652cc81c8bd229eb8005a0215ae25"
  },
  {
    "url": "assets/js/44.c6042019.js",
    "revision": "40a6969b44e833aa4e00b4c8c9567e1e"
  },
  {
    "url": "assets/js/45.6529396a.js",
    "revision": "812726dcd6bf68267d43bba741468968"
  },
  {
    "url": "assets/js/46.a2cdc86f.js",
    "revision": "c5f0cc39016b403d9acbdecb3c84cc92"
  },
  {
    "url": "assets/js/47.b2575484.js",
    "revision": "4e16433f3b8b996d2ae01bebfee54b20"
  },
  {
    "url": "assets/js/48.a0ac328b.js",
    "revision": "d5a7533096ae8d3fd6ce0f236bd0a59d"
  },
  {
    "url": "assets/js/49.677c34aa.js",
    "revision": "1667acac32c8c42d1a2b59828aaaf65d"
  },
  {
    "url": "assets/js/5.960c473b.js",
    "revision": "fb841a8f27e3edcc437b71d1b251fab5"
  },
  {
    "url": "assets/js/50.72a90315.js",
    "revision": "9af6b139b37cace98a37ce935d121799"
  },
  {
    "url": "assets/js/51.32bfb2ce.js",
    "revision": "d9ac058dd46f65cbea29c98de8e93225"
  },
  {
    "url": "assets/js/52.92e30624.js",
    "revision": "62fead38543c4ef3338305053fda8105"
  },
  {
    "url": "assets/js/53.687c698b.js",
    "revision": "e8ddf4c6d0bad0b07d64ca3438864f3d"
  },
  {
    "url": "assets/js/54.7659c788.js",
    "revision": "8e115a23c751893aa6d6106da39d1647"
  },
  {
    "url": "assets/js/55.13e7587b.js",
    "revision": "7d05ded8c64cc07ee09283007af14acc"
  },
  {
    "url": "assets/js/56.595f5882.js",
    "revision": "4a3f9480a1920b9e1d1a35f592be2a24"
  },
  {
    "url": "assets/js/57.38f96d95.js",
    "revision": "5db3bf8234b89ab271ba235dd8eaa75e"
  },
  {
    "url": "assets/js/58.98e97d74.js",
    "revision": "c443bed70b060f4a74e03a30b33c78bf"
  },
  {
    "url": "assets/js/59.34f13286.js",
    "revision": "5769144860c9402c3526ea58f8de2434"
  },
  {
    "url": "assets/js/6.8c14c8dc.js",
    "revision": "2e6eac9bd58bebd57105ddd95856c42c"
  },
  {
    "url": "assets/js/60.1626a21a.js",
    "revision": "6b0b0f9a2dd245840e2501a20543a566"
  },
  {
    "url": "assets/js/61.37fd25b8.js",
    "revision": "c7851b530f7697fbf4e43771c35f8890"
  },
  {
    "url": "assets/js/62.103f91c9.js",
    "revision": "0b4f3338c2a4bf85abe33a3690728783"
  },
  {
    "url": "assets/js/63.8b1f27c8.js",
    "revision": "cf28e3e66138eabf6071c29b384f88bf"
  },
  {
    "url": "assets/js/64.35c9c82e.js",
    "revision": "6bb668403eb591a31f415690718fdd0d"
  },
  {
    "url": "assets/js/65.8a3a8b5a.js",
    "revision": "ce2d667bc4797f82dabc815e982179f4"
  },
  {
    "url": "assets/js/66.d49beae0.js",
    "revision": "5e24cec1626b047e590565d9a8b2ff91"
  },
  {
    "url": "assets/js/67.383940ae.js",
    "revision": "08faac3029fa06f11f1687ec78f1e23c"
  },
  {
    "url": "assets/js/68.95aa69cc.js",
    "revision": "6643de16c9bfd65d0ec59feddec8585d"
  },
  {
    "url": "assets/js/69.0fa00c9f.js",
    "revision": "eb36a6e5983a7eb729c0e4303edaac20"
  },
  {
    "url": "assets/js/7.8009c1e1.js",
    "revision": "fd5dd10b911f7c0e864a1b32ded58b8d"
  },
  {
    "url": "assets/js/70.e27af181.js",
    "revision": "7f4b6ecde0066be574fa09394b5c5e43"
  },
  {
    "url": "assets/js/71.dc6c4eb1.js",
    "revision": "4d0fa4deaf63cfc662d9a2aeca2bef25"
  },
  {
    "url": "assets/js/72.3ba28504.js",
    "revision": "77d3949d6df19a2a42e9721733327367"
  },
  {
    "url": "assets/js/73.95318dd7.js",
    "revision": "87e2ecd4bfd728b17679878def9dc008"
  },
  {
    "url": "assets/js/74.9516842a.js",
    "revision": "101e15ee9c1e91df8569c27fc54936a3"
  },
  {
    "url": "assets/js/75.35cac714.js",
    "revision": "6e1fe1ad9cd9cc9ed0cf54e48e78923b"
  },
  {
    "url": "assets/js/76.30a5e524.js",
    "revision": "a7d1f3b5475ed690e7c8607edf26a43f"
  },
  {
    "url": "assets/js/77.eef33ede.js",
    "revision": "1a52c64bbcbf69a8a2fcad2d1c160be6"
  },
  {
    "url": "assets/js/78.35cd03ae.js",
    "revision": "fb57e4014633bed83c66079a57c80d25"
  },
  {
    "url": "assets/js/79.3d4d515e.js",
    "revision": "b74d1a6aab3acbb63c2cca5b74cb2806"
  },
  {
    "url": "assets/js/8.03cfb9ce.js",
    "revision": "fe91d34f99828b47f1b07677df17535c"
  },
  {
    "url": "assets/js/80.32a5fa3a.js",
    "revision": "d94b82469de673419b9dd7c80d378a7a"
  },
  {
    "url": "assets/js/81.b43d869a.js",
    "revision": "a5960e00c3c26625ce1d4cb3558a0a40"
  },
  {
    "url": "assets/js/82.ba7d977e.js",
    "revision": "e74522f1f6bdca5975b8282feed85f03"
  },
  {
    "url": "assets/js/83.a93e023b.js",
    "revision": "52f55f7dbdc66e6161245d8e72f04f8e"
  },
  {
    "url": "assets/js/84.9d642424.js",
    "revision": "3dcf908613192c8c620cab1fa14a1786"
  },
  {
    "url": "assets/js/85.17c7373f.js",
    "revision": "f689093f2f92428913c24908381db589"
  },
  {
    "url": "assets/js/86.d25f6b10.js",
    "revision": "52fefc749ff8d539f8faef6769a438da"
  },
  {
    "url": "assets/js/87.ae25d328.js",
    "revision": "077d88375706ea7e37b4d1c0967c79ed"
  },
  {
    "url": "assets/js/88.afe072b6.js",
    "revision": "863996566d8ef490553f7e86066841c1"
  },
  {
    "url": "assets/js/89.5ce81435.js",
    "revision": "e0f8f1dd1088b480ddb81db401676884"
  },
  {
    "url": "assets/js/9.d18706a6.js",
    "revision": "753bfb35ae3da2c57fdfd302da3244e0"
  },
  {
    "url": "assets/js/90.f4f1b369.js",
    "revision": "8827df2156e4d72eef2e59d69ec78a48"
  },
  {
    "url": "assets/js/91.377f5a2c.js",
    "revision": "fccbbfe612c85c88cf5702edceb91d59"
  },
  {
    "url": "assets/js/92.73f20236.js",
    "revision": "303a78870470f3fabeed4cb503dd1aae"
  },
  {
    "url": "assets/js/app.fab3e4f1.js",
    "revision": "60dc2d4b66e141d43c5c0de29702da2e"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/database/index.html",
    "revision": "7a3670460203337465ac82d8afacd6e6"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "f8dfb15d03a82f98686b2ee87356db1b"
  },
  {
    "url": "categories/front/index.html",
    "revision": "fca79863debf2da1069dbffee571f98b"
  },
  {
    "url": "categories/git/index.html",
    "revision": "ecccc2574284fe359d536a60cdf590ac"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "649e72f1d8ee8b9d5bba688209df44a9"
  },
  {
    "url": "categories/index.html",
    "revision": "1bd935c46943dfa9c9845c0c044a463b"
  },
  {
    "url": "categories/java/index.html",
    "revision": "9cea71141e23d1564694bedd5e6928bf"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "f64d96530f85e0c2257449c00b07f743"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "084a0acf5a081cad5201d522408a3dbe"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "19836ec7b65a022a92a35e6f737028fc"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "5221eae6bd57171d6e8bfdef47165fef"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "1dbf63f3956a21b274e64d6b6f0632f6"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "ac1df5ed65bfaca2a59ab0e1392edcd8"
  },
  {
    "url": "categories/python/index.html",
    "revision": "00aa7bfca34f6f4adf5960dcab3b623c"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "6bc8bd4a0e963ca44d6ef184c333d817"
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
    "revision": "3801155aed78eb6b5b29b6115ffe205d"
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
    "revision": "8b695c1288ceaf60e35a4cc485a32082"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "70caf0239307835aa6bdf79b33c6a55b"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "dabbb6a160fcf2b55b7444bc11c9c7d9"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "eb16c094af055ae3d999c9df06d305e5"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "9b39e17716298292a5ca1463ccd81233"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "b77edf91b01259685f1f742a1da92484"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "17a51d51cfacba127926a3b87e833db6"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "4bde4aaeff1b46f2f2fab2342de4d49f"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "154af195d86be071e3752e7afb46b428"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "441e4b0ac97296e2adf3efca3cf2f23b"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "69b059ea0c9b18ec097008c209f2e709"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "6df490a8e28a274e9d41f29aa174b255"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "4c59066f8fec72b3ae366dd0dca534b8"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "afa66c272adcfce8aec3ea5acb3218bd"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "01121a120e465aa2ac271df905aaea06"
  },
  {
    "url": "posts/hackintosh/炫龙耀7000 hackintosh 全过程.html",
    "revision": "3b92c9176f21f7141a6884360a5a4ba1"
  },
  {
    "url": "posts/hackintosh/炫龙耀7000-hackintosh全过程.html",
    "revision": "3b92c9176f21f7141a6884360a5a4ba1"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "34e9f5c58926cb7c62f0731a57ab17ea"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "3781925425c3a7d2d26a15cc41995f4a"
  },
  {
    "url": "posts/index.html",
    "revision": "62e81de177699b2d46f1b48fbb929259"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "9b3de1b075fbd27525319009af8826dc"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "58ec400b4cd6d5333da44cb69c62d4b2"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "83d370f6f26d6bf459c4b3a9a63fb820"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "d10f93a916671025d692b9a847ebe6f2"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "fdd66e3fc4ec60143b3cc293e12bd058"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "ea1a31318ad39a5ec07013c9ef7c4bbe"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "c82612f17cc665983125e1fcb9ac7213"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "35f06b9c50f91259de1338a00f458081"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "17a949d294dd522b2b495bbd4be6d262"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "2b3a3c9d548ecbb3b0720453d50cb633"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "aa6fe3e1c01a2c9f57f51a693ba279e8"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "26d00bfa2cfba86d2dd6a6b22051f9d8"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "a7315076b5d623ff0a20a2a7574bc55f"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "1dbde3db9ee53fe3ffbcf9d4390a06d4"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "13877cc733d49fa1f4ef209f6066fdd9"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "20374dd68a0e618b615a6d2866a29ac1"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "4a50b4fb4c9c916e57f427c8541a1b49"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "c3a31df1fabed6385a54adca621b19ba"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "b14ed4830b8e59ccd8f40811ae1be144"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "103e3d2f5d682b0317654dbee26ab677"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "ccfd8ed96e517969778c3010a3f354ff"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "21ea4b768b6469cadcf6a1eaca830ffc"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "6d2247f15781178ed3854ce033fd2c6a"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "6fd232662b7ef791a9e38bc194532955"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "1925b00563a6fc944c47e7279b377498"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "575e4870ad192fdc6863737d8d6f767a"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "e3143e19d8fbb8c20bc93753701e9e1a"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "c7331a2d626f6b8e13ce894e2ee5b8bf"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "237ab37c9f65216228c3bf49ffc10cb1"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "bb5f5d019cb3b72293db7ed48963ad78"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "0d56e9c7492aa60edb37806e91a56ae8"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "7ef86c2356fa1f02a99d291ebc893be1"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "b45b3b17f7b9a0e10e2699d6b8f528e1"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "6ee83445b4fba605b2556385140d541e"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "604dab5be4d44dcbbd9f455f4eb63cfc"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "5679c43866343acccefc29fe31a93fd2"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "9ffdc8c669ee10d7a876006ac8783099"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "7466335ac5e482653d52faf3ebc9656e"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "7e195b0e34d6fd06fb53371d7c0ddcc2"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "2117594a1cb142408e2f835de056441d"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "569686f508469585d862bf88fe25e2f8"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "9d0ba71eea06b75505d60669f36e0c7e"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "efc50ec6c58e1977068c3ad1833f0246"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "d7125c6b56998e6ee7780e83736663c7"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "e8880efee756c2ae6159354dacab1a47"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "b8dfe3e7a9aba44ebc792a89b85786bf"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "150069647301bd8746f816ce2c10eb61"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "644c7fe58a174940d7761eb5d7c1e8f3"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "e3f2431e926f043197dea3ff09d4c999"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "0fb741c8db754cee158086a0472dbd9a"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "72fc03ca29214da2f2930f8932bb6928"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "acf200d1e4728abcaf37b574fba8a56e"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "f2e95d24e18938859fefa62b2529bc21"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "e698654543fc5da21832878116ee25b1"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "5166398cc97510ac96a284fc3437b603"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "4fed23efc6b6e8fcdd85e0043ecea588"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "62fe2db742e2b9c02cead009df881c46"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "78b88e75eec9340e0f2c7763da8ab00b"
  },
  {
    "url": "posts/python/what’s-new-in-python3-8.html",
    "revision": "5396b5c09a6445b689695d859a357ee2"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "bec11262930f106561609aad79ba1afa"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "3b7799d3210f089ca41421bc92d8b027"
  },
  {
    "url": "tag/api/index.html",
    "revision": "b56b4c358b1f5982c9862dd1fbfca938"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "098d6060651820aa8ad25c9f184fc438"
  },
  {
    "url": "tag/context/index.html",
    "revision": "a1c898b74a5d7a5279707b214780b7ba"
  },
  {
    "url": "tag/database/index.html",
    "revision": "fb3dcc1eb981a2c23808c5ec00c5b75a"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "5e0de93279995646659ec52e47673488"
  },
  {
    "url": "tag/git/index.html",
    "revision": "a06f3696af3ae46ceecf72c44e9cca5a"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "3d348fef0acfc2b7487926c4696ddf98"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "724f4c71a1e2bef16d7a8024b8a1d14e"
  },
  {
    "url": "tag/index.html",
    "revision": "3956396e1809ab02dc84236c5a9ad8d2"
  },
  {
    "url": "tag/java/index.html",
    "revision": "157a02c03487b84df5d609e931adf7ba"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "a228a497160df4aea74e93b80d1e5501"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "42f484d92d5166e37918ecff2340430a"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "f5337f6cab54f9f9d3e6563860bede21"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "fbdfaa132d10135aec78bc322b139e47"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "b64c273154964b22dfde047d6e847410"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "90900a5535c57473ad6075157fe43521"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "ab546362f5d1cbba706c739141109a67"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "1fb9c5d6883152ae3cde7a43b9b4cd3f"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "aeb0254588fc71585ebba9f59460424a"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "f36d57a8dbf8b6afca0e401e81bfe54f"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "731a43e4a3286ba8a8333a9994c52f3c"
  },
  {
    "url": "tag/python/index.html",
    "revision": "88402edc1089e8bb5bfbbd2b981135e9"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "e6356246db21cebeea5b7f3e1c12c983"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "01f352267af17339c48fd00630f346cb"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "51013906e32bd947d763151e11af2843"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "cf1ed8edfa24de3bf63d20885c64b97f"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "10a094644ece030c56c8809be8e07cc2"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "e38a988c1978be3f89f2f61e88889568"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "7a45782228106b2f5c2de889db9d5ee9"
  },
  {
    "url": "timeline/index.html",
    "revision": "add5b686ab7126095f4086a60f4f3646"
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
