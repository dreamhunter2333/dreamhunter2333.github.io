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
    "revision": "6bddac18182288d2db4fa20a0801d55a"
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
    "url": "assets/js/11.deb6b021.js",
    "revision": "b2b1dc1091571677d9fb3be4d03632dd"
  },
  {
    "url": "assets/js/12.458e731f.js",
    "revision": "4cd44ddf37ac468edd885255c85c9440"
  },
  {
    "url": "assets/js/13.694541f8.js",
    "revision": "51c3394fc9a4801f21245563e0676aa8"
  },
  {
    "url": "assets/js/14.e4f7a165.js",
    "revision": "dc395382862e571df75bdc256c4af44e"
  },
  {
    "url": "assets/js/15.7cdb5286.js",
    "revision": "7549eb987872079ab0235a5e68b9b2cf"
  },
  {
    "url": "assets/js/16.a1ead278.js",
    "revision": "4dc6c15aa2982e489873956662773495"
  },
  {
    "url": "assets/js/17.745b821c.js",
    "revision": "76aceeee8c8b801c0ad9d92bc44fd3a8"
  },
  {
    "url": "assets/js/18.af4bd35a.js",
    "revision": "1830646775fb1b227db547fd729fd594"
  },
  {
    "url": "assets/js/19.575eb661.js",
    "revision": "88621d665e6c8a5e71da99f81fd8f73f"
  },
  {
    "url": "assets/js/20.a1ad6371.js",
    "revision": "9e8ef0c2d638ffb5532b1e4c5ddecd2c"
  },
  {
    "url": "assets/js/21.674ab591.js",
    "revision": "2ebe94d9828f282bdee5199f0de05c97"
  },
  {
    "url": "assets/js/22.6a7fc8bd.js",
    "revision": "fd4de894935b7dbda3c70ba4faf24af8"
  },
  {
    "url": "assets/js/23.ff68f275.js",
    "revision": "49e2d6ebe5e374bf20cdeb16ee40cd3f"
  },
  {
    "url": "assets/js/24.0b2e9728.js",
    "revision": "f6a8491a0669ad85268f0ef56c9f6e0f"
  },
  {
    "url": "assets/js/25.b2edc146.js",
    "revision": "376a1a9fa8a08e8991ecb1f60b8b6887"
  },
  {
    "url": "assets/js/26.c4dede30.js",
    "revision": "c05f1377a91529ae49ddedacea182e0a"
  },
  {
    "url": "assets/js/27.579a5cb9.js",
    "revision": "a888391eaa831bd827ae1f4412ffeb3d"
  },
  {
    "url": "assets/js/28.71c94b94.js",
    "revision": "07bf4a0a1d3db1f97a28b165062e15ac"
  },
  {
    "url": "assets/js/29.acf82046.js",
    "revision": "ba7078c95e0d24becc221fcfca0bed48"
  },
  {
    "url": "assets/js/3.1335991a.js",
    "revision": "7f060e50f4b77fb2f37cf2f11b70072f"
  },
  {
    "url": "assets/js/30.8ebc2f18.js",
    "revision": "8ee363364cb54176095390ef90bb3fd9"
  },
  {
    "url": "assets/js/31.43e05928.js",
    "revision": "00c3b398e28e51fc3e4a46b66815ddb3"
  },
  {
    "url": "assets/js/32.5e2940d1.js",
    "revision": "48943c39aa35c6712b71e882b0222704"
  },
  {
    "url": "assets/js/33.c22ea519.js",
    "revision": "258735de389014939f8e18f891b28075"
  },
  {
    "url": "assets/js/34.475d8a26.js",
    "revision": "61aeefc71e38508fe84193b13f9cbc1b"
  },
  {
    "url": "assets/js/35.7134711e.js",
    "revision": "88f5548dd02b053be936c821481f2056"
  },
  {
    "url": "assets/js/36.9a971ab3.js",
    "revision": "7b29c8ce43eeb95a8e4fb0b67ea26ad8"
  },
  {
    "url": "assets/js/37.d87e2cee.js",
    "revision": "b0c609cf247ae313eb6dea7b8fa2897c"
  },
  {
    "url": "assets/js/38.602128a4.js",
    "revision": "9b897308ed5337b5f8621fe74467009c"
  },
  {
    "url": "assets/js/39.f81565cc.js",
    "revision": "43d56192d2310fb799d372928fc0bd15"
  },
  {
    "url": "assets/js/4.a11e6b1e.js",
    "revision": "509daab5315435c58e3ab51116092efd"
  },
  {
    "url": "assets/js/40.8d406586.js",
    "revision": "a778d9877de56178248a090338ccb2fa"
  },
  {
    "url": "assets/js/41.0350cb32.js",
    "revision": "6615feabe11a8dfb6dbee66dce645b41"
  },
  {
    "url": "assets/js/42.225a3d4f.js",
    "revision": "5e30b2b15a652bafce130ea9125cc66d"
  },
  {
    "url": "assets/js/43.b7de6db8.js",
    "revision": "531cbc6600e6b0bca5de4e247b5ceea0"
  },
  {
    "url": "assets/js/44.c4a15300.js",
    "revision": "27635234e20e6de1c658e6b35fcc4477"
  },
  {
    "url": "assets/js/45.783998e0.js",
    "revision": "d25ecef8ccd7fb348aeb1f2ac9428412"
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
    "url": "assets/js/49.88acb1a7.js",
    "revision": "f35a67ed2a8bbf525ad8279b374a63be"
  },
  {
    "url": "assets/js/5.960c473b.js",
    "revision": "fb841a8f27e3edcc437b71d1b251fab5"
  },
  {
    "url": "assets/js/50.5b8b0730.js",
    "revision": "7d5d2d204c5451b173410e55099414ff"
  },
  {
    "url": "assets/js/51.31244df5.js",
    "revision": "8c5c7faa90a39ceb22d7beacc90b40a3"
  },
  {
    "url": "assets/js/52.92e30624.js",
    "revision": "62fead38543c4ef3338305053fda8105"
  },
  {
    "url": "assets/js/53.87a4f48e.js",
    "revision": "131e3074e91ca3a54914b09e83ee6f5f"
  },
  {
    "url": "assets/js/54.2a52491d.js",
    "revision": "ba480f7979e0333b7e55daf19fed7b44"
  },
  {
    "url": "assets/js/55.d509fc11.js",
    "revision": "e7f57caa47584c540420caeb614c4baf"
  },
  {
    "url": "assets/js/56.72e2d4b3.js",
    "revision": "01af3a1a4f098e9bff0363bf5acbb6a0"
  },
  {
    "url": "assets/js/57.a6b49b1e.js",
    "revision": "3ad45ac42e6e4a390df036fead08e803"
  },
  {
    "url": "assets/js/58.98e97d74.js",
    "revision": "c443bed70b060f4a74e03a30b33c78bf"
  },
  {
    "url": "assets/js/59.5b9efbdd.js",
    "revision": "8922b0ea7c4199cd5438614620dbe694"
  },
  {
    "url": "assets/js/6.8c14c8dc.js",
    "revision": "2e6eac9bd58bebd57105ddd95856c42c"
  },
  {
    "url": "assets/js/60.0e206a30.js",
    "revision": "1c25723031bd09e48b81737073343e42"
  },
  {
    "url": "assets/js/61.7df7d2ff.js",
    "revision": "b3dcd061f6c91230e4d3ad99ac5380ee"
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
    "url": "assets/js/65.848b43cb.js",
    "revision": "383014d248062ec8736941664c691ec4"
  },
  {
    "url": "assets/js/66.1157ebdc.js",
    "revision": "6892c79c646aa423db85dbf0e3227fa1"
  },
  {
    "url": "assets/js/67.60e480ea.js",
    "revision": "7cfa1b8ba534a4b7ad3a3e4e28ae7c91"
  },
  {
    "url": "assets/js/68.fab704c2.js",
    "revision": "83b7a01be511c28df3fa118a17a20e6d"
  },
  {
    "url": "assets/js/69.d193e973.js",
    "revision": "afca7a8715bd10b3fabe10fdcbd00bed"
  },
  {
    "url": "assets/js/7.8009c1e1.js",
    "revision": "fd5dd10b911f7c0e864a1b32ded58b8d"
  },
  {
    "url": "assets/js/70.cb6b0d94.js",
    "revision": "1d3124efb4a16681df0314b240270e07"
  },
  {
    "url": "assets/js/71.87a0b603.js",
    "revision": "788ef3ff9402cbe8a1e513f865ea9f49"
  },
  {
    "url": "assets/js/72.a2925b15.js",
    "revision": "79ca94ad72b0a5bfb0ccc6c9f64796af"
  },
  {
    "url": "assets/js/73.95318dd7.js",
    "revision": "87e2ecd4bfd728b17679878def9dc008"
  },
  {
    "url": "assets/js/74.90a1c237.js",
    "revision": "559da86b5a3319d9e7a36bcb3eb59597"
  },
  {
    "url": "assets/js/75.defbcb7a.js",
    "revision": "364433de6579932e9230c42c1d0542ac"
  },
  {
    "url": "assets/js/76.5a0f871a.js",
    "revision": "f8838d12da3a7b1b5914d7f0301d5848"
  },
  {
    "url": "assets/js/77.8e398f9b.js",
    "revision": "945872a51853db430ee9c206ffd85a76"
  },
  {
    "url": "assets/js/78.35cd03ae.js",
    "revision": "fb57e4014633bed83c66079a57c80d25"
  },
  {
    "url": "assets/js/79.811aee2d.js",
    "revision": "ea2180fae096892ef258b66a1ce28143"
  },
  {
    "url": "assets/js/8.79a3ea61.js",
    "revision": "fc0393e456c545e7b72c8ca0ef38b85f"
  },
  {
    "url": "assets/js/80.075bcb34.js",
    "revision": "0eb4abfe9914b319d8e3bad87c3376e7"
  },
  {
    "url": "assets/js/81.b43d869a.js",
    "revision": "a5960e00c3c26625ce1d4cb3558a0a40"
  },
  {
    "url": "assets/js/82.277372c1.js",
    "revision": "59aaedb152b7ffcafe47c7be01e6c8ba"
  },
  {
    "url": "assets/js/83.5a53e45b.js",
    "revision": "ecc91e7d2b3dcf3520639de67f047662"
  },
  {
    "url": "assets/js/84.7b473501.js",
    "revision": "c6a53ddb29e3776e7189550975f53373"
  },
  {
    "url": "assets/js/85.e77aa22e.js",
    "revision": "3324fcf8d3ec0e79394c09cc88c7940d"
  },
  {
    "url": "assets/js/86.261449a3.js",
    "revision": "b597f2c15cd45dba9ff5d7f36ffda92c"
  },
  {
    "url": "assets/js/87.160a3280.js",
    "revision": "f62ebd2607a44e4ef86b57589dfb001d"
  },
  {
    "url": "assets/js/88.0b4d8e9e.js",
    "revision": "c974b1795272b6663006b3683e49b855"
  },
  {
    "url": "assets/js/89.c8bf2751.js",
    "revision": "b7678323194a232f7f088100dfe375a5"
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
    "url": "assets/js/91.fe3dbff6.js",
    "revision": "1ac5dd244f29faada92707d35d9ce0cc"
  },
  {
    "url": "assets/js/92.73f20236.js",
    "revision": "303a78870470f3fabeed4cb503dd1aae"
  },
  {
    "url": "assets/js/app.53101d6e.js",
    "revision": "300bdcb406a934ec9686885f73b84ebb"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/database/index.html",
    "revision": "ed28d5c6fde47f9cdf084d8504b6dac7"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "0f20d6d5a64f05eeaf533a6ae15d7e3f"
  },
  {
    "url": "categories/front/index.html",
    "revision": "819677158e84fdd14f0a969f55a532f7"
  },
  {
    "url": "categories/git/index.html",
    "revision": "ea4f20e783156b48daa5405d4deaad46"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "7ff59d821ab96aa98b4befc20e1aecc4"
  },
  {
    "url": "categories/index.html",
    "revision": "035c5b4d228fbce28df1052d1931b9f7"
  },
  {
    "url": "categories/java/index.html",
    "revision": "e2f7877dfc108a552f669f73ef15644f"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "49c731358b3f51f1118d2184641c22d4"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "fafbb2ee501f6c67ec6ea757208769bb"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "466ba1051237e860674865a403e1f1c6"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "dd86bc632c58304fe49929d946c24822"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "c493144061735de83b068b43ac124a5d"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "105f26dbf8343bd81711cce56ece9735"
  },
  {
    "url": "categories/python/index.html",
    "revision": "9794a9eee6ca0388ea18fb60ec466742"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "8c41de8cafd5c2b5f3f9efba7d9e5de5"
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
    "revision": "78607aa23440d64a48fc8e8c59ad4ea6"
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
    "revision": "f4326b922bfa0d327d2e85b37aee679c"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "0204e7cbd494db85042f827914d035af"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "276c1fc2c23621215dd410f860375597"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "a62449c5d18dde264c2e9feeaf9e113e"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "fd919842cb9fa047ff0bdeffe71db04b"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "128590e753a71974f34eb2c5f676c3b2"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "3cd6f083bf7714a938e853f925b4122d"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "f8df11495aa4e0f8c1f5092ff1d00886"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "1067c5d35c4be8f4cc339f3e9adf1bf1"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "ba94d87ca6d22676f6d901c760404f09"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "68c87d0540a84d305c06dc3d4c64c1d2"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "81214aa075b57e7eff35f8f12cdac68c"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "2c0280e2126f9a7bef925b91d432568e"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "c001a82c4a88f65850f4f3c06c93d4e9"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "2ba8db33583f36c97286e2e9a6f4bee1"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "7bbc3c76fe6f85970b0454e5e15028a8"
  },
  {
    "url": "posts/hackintosh/炫龙耀7000 hackintosh 全过程.html",
    "revision": "1c915a6a9a089d542404bee856401c90"
  },
  {
    "url": "posts/hackintosh/炫龙耀7000-hackintosh全过程.html",
    "revision": "6a8195e5cb60b4a0feb24fdf56516747"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "864bede1621a152c873060f55c2569b0"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "163032d43f256645dff2322fd08dd2be"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "097b42d1fb68ef4bf0a83177ca38660e"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "5ccbdd255f458ffffc9adcee5b3ce6f5"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "c0c6824c2d0fe70eb116f4550fb76d0b"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "b09c60b0c2836155b57d0c3b2ef1d9b2"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "d0908ee0abb4197c2d274e461f67c356"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "eccd369024fbcf2b489730c82f950fa9"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "91edd131d158025f742d22915be045e1"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "2a2c1ca01d1c65612d7f527ac88c40f3"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "d59aa441ee283a144d0556171487c498"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "59a175f4acc8a16424908330321428fb"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "bc92d722eef8f8e70f9e5a91b71870b1"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "6f5f27be0150b85d8fae71b5d161e36d"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "41a472d4425be076180f706530a3ee63"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "46ea0fcd5f4951afde769217e7916a1c"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "3cdff7a4aac895918393f0d0c7d4371b"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "36ce59d5c5961d2458a2826b32fc000e"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "bdd57ab1fd2939fd3ef3375c125907e2"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "975bc78af74ebfa41d768eafae1f5f58"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "ae4783c093c9301ec35622c36ddcd07b"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "ba26087149c9bdf8a783b2f1a76ab2d1"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "b97c7cf4c3384f29df1969ca20f847ae"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "78d2a2eb79194a5b395c87085173581f"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "136b751d14faaa7e0f6f79b0917399cd"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "3ba9021afe1027fb04001b0a261bab8c"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "04532a6a48482b26f7ca59718937c61a"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "3d8ad09dce704f1e67df4ddd561010d8"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "531becfd5b414450fc24af3b7b7b5e04"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "40645e88952dadad4916cb32fbcdfeaf"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "6ad4eab1a044046aebbcaa25ffec72a8"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "1f946630b88399e3601816b61ac5b34f"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "4f4a9723703ba9de912dcfabc7932b7a"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "e33c38975b8ee373c9c196ed21ff7582"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "3d4c3da400f6ccf0ea5bb4712c543de7"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "ab5ad7eba78b5c24fc1007f47928abdb"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "f80e90aba1edf68aefd190aed019e499"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "ffafdfe8cfa9fe231683b7870761d939"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "8d9026a551ef6e4a8b59fc902c5d1096"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "33a76f70b1ed367a7ddb4ef96062e069"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "583307835a61298d204af614e91f4a3a"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "233d93e32217ced924b9b0c1f47a8c8f"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "a57340410119ba2c9c91f55e6e2525c6"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "024da9df2cd3f3af5a83fbaf24ef5407"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "8e28713b0b5b6d6cd8ef1c56265f8ffd"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "2dd7eab98ab414fe0e5ae09db2925f61"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "ffe56caac64768d22138ac0a81f9318e"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "06bb16e344c215a5311e15c578c1e9a0"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "e5d0b7223b1d927a7c2a38e0f6d2831d"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "4b25fb8f6db6a834d3221c1c07ab1e79"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "0524e159b8f154669407c15186d2c672"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "9a85a3cfcdcee0318d3af6d15d6316cb"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "ae4bb0c0cbe9ccac290fd878f5899f43"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "6f7b40cc5fdb8506d336b6216cfb1e9f"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "780467036c3ca28d60d656d4e1402ad7"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "faa547a735e356efc2380ef0cdb08c5f"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "9f4a7b3c7e8385b210ad8cd7457e6318"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "55ca7a3282d9bf4c0f176bc253dba3c8"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "f11056f7a41408bfd4f6de178e4b7eb0"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "4944d47036dfa6caaac4e5cb74056dd7"
  },
  {
    "url": "posts/python/what’s-new-in-python3-8.html",
    "revision": "d031841bda9cb1e343690d577d92617c"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "c40499ae8cd6fab95da64e419edeadcd"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "f87c0d9d8e2d3a0596fb5327a73385bb"
  },
  {
    "url": "tag/api/index.html",
    "revision": "4dc9b606851ca66e07aaacb60963fbce"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "d27d6d9f7a88549d2283663cdff1488b"
  },
  {
    "url": "tag/context/index.html",
    "revision": "a7455ecaa68db9ec653735804a0c9be4"
  },
  {
    "url": "tag/database/index.html",
    "revision": "8f7e91e2e3dd9384d8c1839b805b63db"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "7c69e8f7cb78efd70b58fa464eed6e56"
  },
  {
    "url": "tag/git/index.html",
    "revision": "46e77af9ee19925c950a0b287bde130a"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "43275b1051303e3a624123e3c7e9a94a"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "60530c75ed1f96cd75c9314fdcf8ff2b"
  },
  {
    "url": "tag/index.html",
    "revision": "a02789a81779a16f759c657d5f3c5dcf"
  },
  {
    "url": "tag/java/index.html",
    "revision": "e4096bce36ce974f130c65c49d33ce15"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "c48754c9728d929fa52328188ba60d01"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "03ae64551cce4fdf0f0baa47c9233854"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "721a64585378b314e8bb5a245210b0e1"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "a70c895b77574dd531c8d939e0bdb951"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "24704f4cc0b8e77e5b8585f9aca09673"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "5eb1240aa2efd13386c82f2779797cc7"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "5d742edb6028cb24b7cd2054c8f07fd0"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "dd26218cdb2e7bbcc0902277befff6d9"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "144170f54c52bccb055558f43d5509c8"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "f6aa798589f4f1cf1c30c3dabcb43383"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "503219ee26d39bf82296a69455c73c71"
  },
  {
    "url": "tag/python/index.html",
    "revision": "1938d91d3f7760f8a6591e7cc7609022"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "0e443f17ca9d27ec268eee45c1efae4f"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "dadaf93dc2531c34670ce7a29aa52bfb"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "7d228cd4919c72627d5e28c8fb6ba6da"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "6697f3dd6c8868168d4c0dd5ec757329"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "bf897a816d8e4b2988aed4852cde1af9"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "8f0c3db7b91c5f7bce4d14cd8a695c4a"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "cd92f0c781531e70dce422c9f72be377"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "47011a11f01b71193656a210797e12a4"
  },
  {
    "url": "timeline/index.html",
    "revision": "e1c87986e271ca82f112102c9a4791c9"
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
