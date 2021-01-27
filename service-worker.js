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
    "revision": "b74a04af0724a1c2356f0cec9f042bc6"
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
    "url": "assets/js/34.cf6c9c35.js",
    "revision": "12a4a2d9cff4ded00feb4062829d64d5"
  },
  {
    "url": "assets/js/35.060b9751.js",
    "revision": "99e7602e68eedbe36cac046b6130ce38"
  },
  {
    "url": "assets/js/36.5276dc57.js",
    "revision": "6a0f7c8ad7c3ced3a23ac2eb3bd0f6ce"
  },
  {
    "url": "assets/js/37.719744a9.js",
    "revision": "5d91e37177b065aae4f343d6c489205e"
  },
  {
    "url": "assets/js/38.1f6fc5c6.js",
    "revision": "994531b00fb6a88738cd80699bdf7c94"
  },
  {
    "url": "assets/js/39.b4a4b305.js",
    "revision": "396ca9ab11fe60f258cc570d209bdf3c"
  },
  {
    "url": "assets/js/4.6f793833.js",
    "revision": "2d695245e1a9a32e9524bfcf39667da0"
  },
  {
    "url": "assets/js/40.3ef6dd20.js",
    "revision": "2f61daef0795d8a07240118dae735108"
  },
  {
    "url": "assets/js/41.430d21ce.js",
    "revision": "05278f3507ec19e10234ad9b8d0f9d6a"
  },
  {
    "url": "assets/js/42.e32889c9.js",
    "revision": "72a67b9c7daeb3c7b5919b19999e3c56"
  },
  {
    "url": "assets/js/43.54c0f04e.js",
    "revision": "b6b0d8d99595164606113d6c04f600c5"
  },
  {
    "url": "assets/js/44.2adbedc3.js",
    "revision": "9e0fd2a154a44c0507cf203cf6c85164"
  },
  {
    "url": "assets/js/45.cbcf1aeb.js",
    "revision": "895dc7fa08b41e0389f54f6facb1b88a"
  },
  {
    "url": "assets/js/46.2e127f62.js",
    "revision": "1cb6e0f8a1312be5d7f0266222ef5f6c"
  },
  {
    "url": "assets/js/47.3f6f2830.js",
    "revision": "8aeeb9c0b2c909d2b48f182d081cb8fb"
  },
  {
    "url": "assets/js/48.57a48cf2.js",
    "revision": "3d6e3f06a8f45418a4829874e0a6cfa2"
  },
  {
    "url": "assets/js/49.bf634e53.js",
    "revision": "f8d5af355fc5cca71f0e033a28c0a940"
  },
  {
    "url": "assets/js/5.e7a3af46.js",
    "revision": "33e69efac045f653ca2cb8e00b05e0d1"
  },
  {
    "url": "assets/js/50.bbe92988.js",
    "revision": "cd31fb3be931dc1eed465798ed11d81d"
  },
  {
    "url": "assets/js/51.b0533ea9.js",
    "revision": "75f6ce9e1ca01c8ae409874abea0bcdd"
  },
  {
    "url": "assets/js/52.1aa3e40a.js",
    "revision": "e0debad357c521a115f2867cf4514aeb"
  },
  {
    "url": "assets/js/53.e669e811.js",
    "revision": "1e0c8226dbaabad81f8d2de0b119608d"
  },
  {
    "url": "assets/js/54.a0bf4b7a.js",
    "revision": "d1c751977fe2e4b30c28b1f3811ead3c"
  },
  {
    "url": "assets/js/55.23a44291.js",
    "revision": "459012e033c663ab82c5498cdae4c5db"
  },
  {
    "url": "assets/js/56.7f386ed0.js",
    "revision": "83db91613f43039e7b7c167c03a3c733"
  },
  {
    "url": "assets/js/57.e592408d.js",
    "revision": "b9679fc72ca84844b96961b8b5824ae9"
  },
  {
    "url": "assets/js/58.14ff688d.js",
    "revision": "72a4993e35b05448916665e4ee22f9cf"
  },
  {
    "url": "assets/js/59.7bb50456.js",
    "revision": "c83cf696c4a21373cd856e236a0b7440"
  },
  {
    "url": "assets/js/6.cba5b5f7.js",
    "revision": "d7b453e667f1d422af5891650f2310af"
  },
  {
    "url": "assets/js/60.c19ed12f.js",
    "revision": "77281c22a1992f6222cb4eff99ef7aa5"
  },
  {
    "url": "assets/js/61.76eeef9b.js",
    "revision": "80803de73444b69cc677b5df2a89aa56"
  },
  {
    "url": "assets/js/62.c56881f1.js",
    "revision": "bdda6e58cab8c6dded204074cd241f39"
  },
  {
    "url": "assets/js/63.7b048fc1.js",
    "revision": "b07312d292ee2e4260c5c4c1b55055a4"
  },
  {
    "url": "assets/js/64.71dc0881.js",
    "revision": "8a14d4373bc1d6a3cc9e17597aafae2a"
  },
  {
    "url": "assets/js/65.413c82da.js",
    "revision": "84a6f218678d9e47af3c97e1e4df86f8"
  },
  {
    "url": "assets/js/66.0485a67e.js",
    "revision": "dcb1395aab7e40bb950c9faa2097d77b"
  },
  {
    "url": "assets/js/67.06d2c443.js",
    "revision": "6135c5c69d35ba916189b75d77869868"
  },
  {
    "url": "assets/js/68.60145e4e.js",
    "revision": "94d69601f9f06d8dc26ddf2ac0c5e02e"
  },
  {
    "url": "assets/js/69.b087750c.js",
    "revision": "e774dec08a7d74c2814492c410429fba"
  },
  {
    "url": "assets/js/7.48d055cc.js",
    "revision": "5cf16a60dc3e5ad93fe89a7a9334716d"
  },
  {
    "url": "assets/js/70.ff182d65.js",
    "revision": "4f30eacf7ca649604d043a1b0db52788"
  },
  {
    "url": "assets/js/71.09896d08.js",
    "revision": "9c45943c6bd69e6ffc51f634ef9624eb"
  },
  {
    "url": "assets/js/72.75458071.js",
    "revision": "d6712685711683344ed799b1515e39a6"
  },
  {
    "url": "assets/js/73.0a633e38.js",
    "revision": "bad6478191b01ab33bcd06916e5b748d"
  },
  {
    "url": "assets/js/74.acedc826.js",
    "revision": "9d04760ec4d2c436eba9d96e5d7a656f"
  },
  {
    "url": "assets/js/75.eb7c2de9.js",
    "revision": "bf59fdacb6308a275dab3400b2d1ede0"
  },
  {
    "url": "assets/js/76.8077d47e.js",
    "revision": "81fa7578132fa55436da27babddc8fde"
  },
  {
    "url": "assets/js/77.aeb8d952.js",
    "revision": "92fd4736b293aecec14b4e17ca888f22"
  },
  {
    "url": "assets/js/78.aa85e52e.js",
    "revision": "c071509dfbc9f8df756eb15cb7e21612"
  },
  {
    "url": "assets/js/79.ed0bb4ee.js",
    "revision": "8d0b768b79600c7563e8d87daadd7314"
  },
  {
    "url": "assets/js/8.c666f59d.js",
    "revision": "44466a50669b41fba177cc8356eb31cd"
  },
  {
    "url": "assets/js/80.10f17b38.js",
    "revision": "b1e2aa897f9a09e4be8c1cf14d7bdf87"
  },
  {
    "url": "assets/js/81.8bf8c50b.js",
    "revision": "8d82f0a7df0664d876d89c698963666a"
  },
  {
    "url": "assets/js/82.b66c19a4.js",
    "revision": "0e89eadcc3f00c8244e30e89f08cbd43"
  },
  {
    "url": "assets/js/83.9b988ce0.js",
    "revision": "d441be3711c8d514339a122a8790e7e6"
  },
  {
    "url": "assets/js/84.6d6503bb.js",
    "revision": "914868c10e015dea6f94e7158e8542d7"
  },
  {
    "url": "assets/js/85.31a2c8a5.js",
    "revision": "9ee4b809acd06be90f1695ac5224ffe1"
  },
  {
    "url": "assets/js/86.dea87381.js",
    "revision": "394879232c83cfae9a512339ed049b8e"
  },
  {
    "url": "assets/js/87.567b851e.js",
    "revision": "1509507c9fd135112a1b87014f6c662d"
  },
  {
    "url": "assets/js/88.fd754daf.js",
    "revision": "be18671df6f7933f7c923df56399baa4"
  },
  {
    "url": "assets/js/89.e309ede6.js",
    "revision": "15da265be7d5f4f2dd22f893b7a22895"
  },
  {
    "url": "assets/js/9.58f9f7f8.js",
    "revision": "f3b41911dbaca85158f01534b54a536c"
  },
  {
    "url": "assets/js/90.a7dc5909.js",
    "revision": "6f7b80d242badbd44ae0198ad0743b2a"
  },
  {
    "url": "assets/js/91.aa9826d7.js",
    "revision": "0c4ad08ba91accf309cfabe024650e55"
  },
  {
    "url": "assets/js/92.ff74ffc1.js",
    "revision": "29963f4459545b07eba34d8456d68da7"
  },
  {
    "url": "assets/js/app.715e3984.js",
    "revision": "47361912c12da5002323039e917ed8dc"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/database/index.html",
    "revision": "3a548d46b997dc7b3b67331bd617c21b"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "97245efa5fbcef57f842a55e10451dd5"
  },
  {
    "url": "categories/front/index.html",
    "revision": "b4ee1a4d14be3015b27d25e254015e44"
  },
  {
    "url": "categories/git/index.html",
    "revision": "b9695e9c757e13eeceb6a4bd401b0ec1"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "83bb2badfbc3cbd58c46eb9acac007a9"
  },
  {
    "url": "categories/index.html",
    "revision": "a3b27d50c411e95d19d0571eccaafdf6"
  },
  {
    "url": "categories/java/index.html",
    "revision": "bcf99362ecd55f119c74c952fc248842"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "7afba37313b5cd08c076b5e43c15a04d"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "ea76e3df1a5f058dcc93fc51c816a49f"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "c40e8ccb544ea8678503dfe1d87e6785"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "06dfeec36f2c0cfd704c240677e0d6ef"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "4a443431d33cf1c9413bb6742fe2b2ed"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "85e3ea78a279627417777692a1ffaca7"
  },
  {
    "url": "categories/python/index.html",
    "revision": "db4f61c4478a09939e6a4b92d7297b02"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "4108ab3a171e272e39315e5c9cae0f95"
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
    "revision": "4aca9845ffff4f80165ff318e26ec9e4"
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
    "revision": "ab64058a58eed4728c12253770a0a42f"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "46b445e6e388a1fbcf2fff8875aa3709"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "50c3bcfb01382d928e26289722053966"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "cc92fbded60955ba38c71cc74333f7b9"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "c773658a6830466c852bc2cd93be8af4"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "6b99a91076a861daef5fe581911cd613"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "8c6f02bd030cc2dc0b0a19ab5582e063"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "c0c2c41dd82af23df4e78c4cf7c6d280"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "ad6a088f88a093805e3d6d528b1b0a42"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "5608d72bea2330181ab8b431a6743862"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "5b139497503d5481f191856d9d8a2a3f"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "0c270c7e6036f9bcf1270686627979ed"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "58fd133146515d7aa798eed0eb228148"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "1ecfcacec659d11d19cc80bf45e41445"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "93f2d980ece4fe6468e678b64e2dfb49"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "85a222b88e884711ccd37a05d449b033"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "49d726bc8d99a4d207fe63c7352db49c"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "c41f012eb14e71e5350b0c8b8369727f"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "9b0727f676811c67f6f2a4361393aacf"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "7a9d1bb81f964a55a89c367afa45baaa"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "0f3b9749e2db6adb305bd8a3421c48eb"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "380aa850ccd2ba69cbe1f1817b9dd046"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "ef815efc5bc2f073c42aa4f3cbe79083"
  },
  {
    "url": "posts/java/spring-RedisTemplate.html",
    "revision": "d8c4a1f6d86343c599147235abf656a1"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "f269d7d8f159b7cfce970816b9efc7fb"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "8542408215119f9b022bdefee7982389"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "533ab787a82c18b3f0d7d3d5599773fd"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "ee54ba149b8a5f07ab7529fbb2993852"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "3fae457e75783e6a8c19d8a16f472152"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "75685d966b65785f3fcad0fce46379c0"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "8b3fde680e47ee72f82651aa4c38c396"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "03d483bd6711fb39ca0bf25ba35dd5a3"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "72b3ee1ff4b650d364b33cc80a565bc8"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "ff9cd58f6ed261e59291cabbf248554c"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "80c4232a2e4d38d53d91bb6bc60478a9"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "5bb42ab6f3ea171f351ea3fe9a10d3e6"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "1ed0d0b80defb3f1ce4ed71c22ad5444"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "918d5c7f95df4985d38dc5c948b86127"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "63c94ade6067a63e64881d633e45bf4f"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "730ec95e1c798468ebff3b975d6821fc"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "d1bc8c6cf59b1de428b807ba9a575289"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "007334a6ad40deb2ceca894c6484ab6b"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "baac0a5b30f761c2fb18e1e83b515ce0"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "93bd4780dabac49ad4b13cc5511d5d3d"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "46707875430dfecddb48c891d17b5881"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "a97ca8937efb661ec4a9d4b701b03d05"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "d776979cdcaeb84d5322cf4b3c91a162"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "14b4083d804a54d1c777e88bd8ae1db7"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "b65170b0340d11a331291e5bff328c38"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "8b38bc22cd1b7c6dddab9547978a221d"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "433e74489a69d5795f1e33e1963e589f"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "6eae3a9991c958c78f24bdfae36c5591"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "2da6be4e621a9af138258d325eff80c7"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "5a4a89ee34d2e10fb66736314eb71ead"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "4fc621949e6aa3039f51341beddd03e6"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "ac501ac2783094c1a99e30e2c8a6b27c"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "45455fb20680bec003daab7218c5d1d7"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "c567f15942896164f433560188b8ba34"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "9336b1b7a8e7a18b3501a11c42177a89"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "5bdd2c4e3cf6a0dd744869e6d5436af6"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "d3b4aaa8eeab23e97b680604aa22fca8"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "2a2fbb2a686d99266d8a260987b69e06"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "519f9d41d1ca50f98be51091b78a15f4"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "7de235e0185a16783d238a581805c80f"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "a5bfb683e4607e2f38066a1325f24793"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "40da9d7f9d9c0ed54b636799878b9896"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "34316138772e0feeca364b15648c9329"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "cf973ed73f563d90ecbeaeda4fb3659a"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "47dea0b84ed799bc3d373262a9bfcd37"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "78518c9c12bfdb8b7869b1245cef699a"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "523f56af73384ddb7a27a7ca4d86d0a7"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "105ca9a3abdc64973d7605ccef5af958"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "6077e5015a77a5c2c6979a351e0d5222"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "a036c97425e3e19273486915302b165a"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "a1df637199eaf81311ea6f6124145f84"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "ba0217dc44c61c47dbcd4da0ed15291d"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "c30b1d335e689fee51d8ff0682fe6e26"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "66650a71a2344b188d31c416af25a0e5"
  },
  {
    "url": "posts/python/what’s-new-in-python3-8.html",
    "revision": "0781502194fc98b45442728d59c6faa0"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "3338e5ac9d6265d4db55cba0051dd796"
  },
  {
    "url": "tag/api/index.html",
    "revision": "c6ad7a4daf6f67ab2d40635d390826b1"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "f8c94805445636713a428b8a23b17ea0"
  },
  {
    "url": "tag/context/index.html",
    "revision": "b8587d07ad4610d6a625ca14071ef0e2"
  },
  {
    "url": "tag/database/index.html",
    "revision": "9b592f2fcd4bd20b0647da0b4ccd5103"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "f222ede9ea4b51ada56fa36d7c2c0ef3"
  },
  {
    "url": "tag/git/index.html",
    "revision": "cad77322d4ba3305ecc78d41ab04d587"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "baba79eacaaeae12c094bd4147f83b4d"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "6bbcff2403c3116f2e3ae1c17ad4af99"
  },
  {
    "url": "tag/index.html",
    "revision": "43728800c24fc10aca9f508e096b7815"
  },
  {
    "url": "tag/java/index.html",
    "revision": "dd2ffe6860df1c1751dcc1a91bce50b7"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "ae69b12e561c9293310b325f712e5734"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "bb9cb69578e66afdc59e21c332e6dadd"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "dc2d4a9de6f0a773e129967068a46f70"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "86e763f287ff99fbbb8138f8fa4835e4"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "15fe4cad6d30fff8f2791b5186f90668"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "51be6fa72e88a798a7595658d429cd25"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "2e5ac81e099a76667389f9659b0372bb"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "3cb100c0599bab2cd5f40f3e3852bf73"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "05c17d41380480fa5113d4052be9b893"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "171fb713ecc1dbea8517c041ea20f464"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "784a502994d75c166d8411d910aecbb1"
  },
  {
    "url": "tag/python/index.html",
    "revision": "0710e2b91df9602f28dd790c22262957"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "1b87546dad45cfc3046c116256bd603f"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "dee13b2bd5c5c11def0ccdc471612a16"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "69f220f61fb8d5e9481ae6ca812358d5"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "11cdd4a5bc14f50c3ab22cf330b1645c"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "644aa0c07e309d55293b1dbad87b7eda"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "f639256f0bae280ce555e02efd4bb4b8"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "b996117bc6c5e85669c39f36174589c0"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "d69de96ba6a38d55ef8d1711713fde2e"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "10c17c102f1d4063cf4c2279bc7ef98b"
  },
  {
    "url": "timeline/index.html",
    "revision": "3f4ec0ac670d995c6566dbda6cf6d96c"
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
