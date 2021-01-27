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
    "revision": "c105919ec2c9e208590c1affa31d4370"
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
    "url": "assets/js/29.8911bdfa.js",
    "revision": "3630a715a770126ba03baaf9f638c1ac"
  },
  {
    "url": "assets/js/3.18a5c578.js",
    "revision": "67e60864880724d775316ccc64a58870"
  },
  {
    "url": "assets/js/30.a943bfca.js",
    "revision": "edd8948110ad379d87f8a39b9ad49113"
  },
  {
    "url": "assets/js/31.6535c455.js",
    "revision": "62514a6adb35da2b5061e0c78a994d3a"
  },
  {
    "url": "assets/js/32.e44df740.js",
    "revision": "84c7d0fc7cad61647a15a4ffb55e6e81"
  },
  {
    "url": "assets/js/33.ae4f8741.js",
    "revision": "d74473026aaaa2834063153ea03851d6"
  },
  {
    "url": "assets/js/34.e8eb595d.js",
    "revision": "3e15a2b0f44275949f0a1bb884934107"
  },
  {
    "url": "assets/js/35.9cf570ec.js",
    "revision": "a92e57c75a60579c963ba7a1f1f56f79"
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
    "url": "assets/js/app.1b77912b.js",
    "revision": "914e69e726b72f155b8a552b4bd45bb0"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/database/index.html",
    "revision": "64f9c860f8abb9f03aaa5459a2fe87ad"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "f74fc7843003a18ac5d338943e8ddc89"
  },
  {
    "url": "categories/front/index.html",
    "revision": "86c4e4be6560ba63a898d23c79eeb73b"
  },
  {
    "url": "categories/git/index.html",
    "revision": "a02eecdd8ad13b0adca143f1f4d451d4"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "590d05b6a83bb838d9507d0f8db8b886"
  },
  {
    "url": "categories/index.html",
    "revision": "32572be52c19cfe472f467bea55b527d"
  },
  {
    "url": "categories/java/index.html",
    "revision": "43e65d1ed32947d2db2b4705aa328ec9"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "2f79642db05046d6efe917592fb31d57"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "d5324425f0498274efea41bfce84be07"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "3981d42ee3c010df222515e12eb7a7ab"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "ea098077d54d5c0cdaa1c9c880335313"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "efdd874640db6d0041c46742846f6ccf"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "0e6e666771a42a16f3426ba0310f3dcb"
  },
  {
    "url": "categories/python/index.html",
    "revision": "b203a8eec8eaddc93a7367e4c6ab8f38"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "7130bd09d4de754b85f27d49b8df522d"
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
    "revision": "c321f9ceea68f125e705cf79387c40ef"
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
    "revision": "4e7bec2285d2a7fb632739d78245e84c"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "7fed90b5d8c9764b9688feda0c451fab"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "b61a9cc32f9c432d67bcfbb3f3ece6bf"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "f819ca5826cf5d34118cc78e501f1ff6"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "066b699640765084da65decc40fd79ec"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "857c5b62ab8a2bd088657463f27ffb16"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "a6127d7b9b5ecef544bbcd9771425341"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "29a28cff3ceb09e0aab2625e8863786d"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "4f9e7ca1f43b38105f0bb2a0b76ae793"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "19c7e62bddcffa4a482fb4adeeac82f9"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "d2cc03bd1ea0ea25545e34a55e83d314"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "2cc988484a9e0cccff5a656e45d2f35d"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "17a81473734728e1c90b0a87a8cba9da"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "3733598717518b4fb98dcab9d3494355"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "317d5c465ab84ddedc335e23d600585d"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "b2a0e7ead413c8e801bcc9b85a8ad10f"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "daa0ddb0175c5490ed399fa6ed6bb4d0"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "272156904906fcfab422ace47c8238e8"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "8ce22c2d604cdbf23ee8578b96949fbc"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "beb100ab9f2f95d96e9ffd164e6ac4c2"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "98f289545e7dae90cfb92af7ac4b7180"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "3a0f88f172cbdac11a3c12e8fd716b62"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "3150560ce9b0472939b52647004542aa"
  },
  {
    "url": "posts/java/spring-RedisTemplate.html",
    "revision": "023842c58b216e7dfe7abcd44c04dfb8"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "01d83d22f3b34dbdcebf9df85466b925"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "4f1f7edbba5451336c7aec28d4b6443e"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "08181a9db450d5642d5dba373130967f"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "9fda0b0e29317828de5bd4b9ca10533a"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "b48b1a8c3561e1106dea2896c7960c42"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "c10cfdd90ec18a9428a5ec120c8e3a08"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "c77b44f11548d3ab88d628a721754c7a"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "870a5d58b66e2293d3718bee762794d9"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "ca5ee3daab47cdcd608a1704b7ef6e5c"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "192a3af538a29b6e7c84c6d419073f25"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "5ffb0f5b931b1cefd8f9d38a8aae9402"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "c69be94609174b526357020278bb1fc0"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "300c37dbb0bea857bff904b4c23f8027"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "a759d706cda6fe0df6509544572c5e02"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "2efc8c2f82b5c7d158233bde4092f808"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "1ab058a7f0ad1f14931d96481c3cc6d1"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "528fd099fa96ee966c0550bf0a0f8cf8"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "bdf2204e459a69f4c7e84f012985b35e"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "3dc61fb6285045b6e34e39fb3e69d4b4"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "7f73932eff7b6e3e7f334ee5babf9244"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "fdf6da356345b536ac56156efe0f9433"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "b5d22fb069b91b51cff217733742d259"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "9b39ed68b36ce76b1ed2270044f6c442"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "48dff3352b5bd87eadc8f54f3c80953c"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "5d1c0c9415915312031afea45ffa786d"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "68eba249ed735456ca8b6683dcc8f436"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "4c4244bc4d5f6022d7310298df3610ea"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "00d6dd3711f6e1c02022601e10ea6c30"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "d5d8d97f724d208a67b51ba454cac5af"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "74450a2876b017e9cac54ad5b674b01a"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "fc2f433073a1f7022041baca9db4a609"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "f26a5c4cdd623e87e87c3e691fab7f7b"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "c102f1740c66945963ad869755f37778"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "d058bb45ce518be9dbc069f27ef3b9b4"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "9736def06f955db4e26fa00ef0697ff9"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "5cac07306f0660370df61c217b2cf74c"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "78cc7279494a922cd3963f000321e408"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "9cdde9e17c459ad2cf01804be7a56353"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "575b51a8b245249e085c32ba4f5263ec"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "b28f1ca36747422177a64b149e2a9e2b"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "f8da4dabfebe540fba096cbdc1625c61"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "79c9443c892b1373f1ec30f78b936f55"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "ec22d9b5505d54dc5c8d5e053cdf0066"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "3723fac616a0333bc26641790f62401a"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "4f5210d8331657f5559a9ecd88c0f745"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "ef44b157fe8d6e27c72e3873eead2b89"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "0a5150f97a8e546fd4a06832954ca00e"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "549764525367872eee63aa4a0952d51c"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "18ee5810ba74509497afe0d4b39ff8c4"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "db1bd187bff1c50fe470098a44383bab"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "b18632df7cb142ead7612405d240553e"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "7566fabd641e2223a51b99946bc85e4d"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "cc8f318902efeee4474cc8d2242de14f"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "da930e27d2a33cbf14419dd890b39d98"
  },
  {
    "url": "posts/python/what’s-new-in-python3-8.html",
    "revision": "1eb794616573bb23c9e8d7ce2dadc1d2"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "dc20baa17d4514b68ce9214e54acbe20"
  },
  {
    "url": "tag/api/index.html",
    "revision": "a83638c5fcf4e66b1a56e73fb55c4ecb"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "bf0d3a5417c19e7423b68f6f5558b07d"
  },
  {
    "url": "tag/context/index.html",
    "revision": "fdbffd1b37a0335bfe66a4cff6221075"
  },
  {
    "url": "tag/database/index.html",
    "revision": "6a0df939d83f7973cf345cff7c3659d3"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "11353f1b395e4aa378ff0eacecb30849"
  },
  {
    "url": "tag/git/index.html",
    "revision": "4920a03bae7a1b1853d96458cf7f4f3e"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "56be2b1bc33529614bad8b53b13526a2"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "b56705086e63961104fc12442551c1e1"
  },
  {
    "url": "tag/index.html",
    "revision": "2cb2533415f293fbbb541a2ee1ecf6ef"
  },
  {
    "url": "tag/java/index.html",
    "revision": "3ceaf659d0e614c324a0fd757e3e0533"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "6f76354fe8a89d1c8cd1e5f708a2709f"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "17f00eaab4662cd14287578e33602997"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "416ff9badf94cb0c3a1cc985672f9402"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "287beece5ba07cd75d3c92efbe29eaa5"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "f46a3e86e4b4cef2d89e0ead1602f940"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "dc9d0676f4cbc00a60a6d847037f0ded"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "3af9b0af961cc5bd524c97aceab56c38"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "aaec497fb944537136e44de89aee93af"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "d730ed77f39c3df8c3ae91e1a47a63c6"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "4b305e11058215d36ad38ea4c26ab21f"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "2c4afcdec7395fa09484156fcd3611e8"
  },
  {
    "url": "tag/python/index.html",
    "revision": "2c216addce3722a62e59e3bebf622def"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "6ee751aafcdba86f4ca97e8a43d4fddf"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "59c15120779cda75b1a01a566e091167"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "153635b8c528b992470f8bb8f492eb24"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "30fd256a69792db8eb44eaf93fac7993"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "d8de82b41b1ebe47e4194d282619c4f9"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "159dc38ee0be59529a4c90871bab3ed2"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "9c8cc34359a5e5597eaa44c8389778a4"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "062f7a0f95f34165f3c651b4d38d43e7"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "83cf757327b75219adf5743c6a3a7f6f"
  },
  {
    "url": "timeline/index.html",
    "revision": "5cb8f7923ca39e14017c9b9bddcdd620"
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
