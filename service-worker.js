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
    "revision": "872cf40122f52e4e93f90c1a0a0cefbd"
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
    "url": "assets/js/13.82441776.js",
    "revision": "eb9227d351b5b1297f428fe2c61802a0"
  },
  {
    "url": "assets/js/14.3bf0f901.js",
    "revision": "f277b5d970d263654da88e5887289f1e"
  },
  {
    "url": "assets/js/15.d5ee8398.js",
    "revision": "7c2a3552e052f54bc3d44f2b17e64d0d"
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
    "url": "assets/js/41.78f22db1.js",
    "revision": "d4c43672f174ea961b218471e2fac2d5"
  },
  {
    "url": "assets/js/42.7181610c.js",
    "revision": "ed024818b73b53c4644e332fdc440b84"
  },
  {
    "url": "assets/js/43.2dbda969.js",
    "revision": "80a1eae95705f70247c807b69562fef0"
  },
  {
    "url": "assets/js/44.c2954baa.js",
    "revision": "f2cef1d4707823655336eabfff0ab361"
  },
  {
    "url": "assets/js/45.d3afbfb3.js",
    "revision": "55b42dd7aff4bc056e533a27f31ccff3"
  },
  {
    "url": "assets/js/46.c4a3b09e.js",
    "revision": "7dee34142397b1251321e3246ba423fc"
  },
  {
    "url": "assets/js/47.62dde588.js",
    "revision": "9ffa8364c2645a182bd6492646ebe104"
  },
  {
    "url": "assets/js/48.026bf96c.js",
    "revision": "ff19bb92d2405e5bc417c9ee87298d33"
  },
  {
    "url": "assets/js/49.fef64585.js",
    "revision": "f951dfb478bbb5d140d723c6560af3f4"
  },
  {
    "url": "assets/js/5.e7a3af46.js",
    "revision": "33e69efac045f653ca2cb8e00b05e0d1"
  },
  {
    "url": "assets/js/50.f5bdeb0a.js",
    "revision": "848da2073bbaa07d3f0087de469b7491"
  },
  {
    "url": "assets/js/51.3af25387.js",
    "revision": "cc64e3feb7d901ec0f8bb65b3988a70a"
  },
  {
    "url": "assets/js/52.44a8b4da.js",
    "revision": "c8c0cc263422b24cee747567dc9be1a4"
  },
  {
    "url": "assets/js/53.11571bd9.js",
    "revision": "4db07ef81e30b9114b0e79697544c221"
  },
  {
    "url": "assets/js/54.2464c481.js",
    "revision": "8a4b170b8d94b8149f5b9b0d08c0cf90"
  },
  {
    "url": "assets/js/55.bbaf6cdd.js",
    "revision": "e7fae9cfaa1bc72b662171bc06beadb8"
  },
  {
    "url": "assets/js/56.9611592e.js",
    "revision": "5160208b363c07e456eb7a84ef419dda"
  },
  {
    "url": "assets/js/57.a63bd3e5.js",
    "revision": "525007cc58e7fe5675db349b204b24eb"
  },
  {
    "url": "assets/js/58.254caf0b.js",
    "revision": "1351443914738a4d2e29cbfcee188ed7"
  },
  {
    "url": "assets/js/59.88d7281b.js",
    "revision": "f7d22a533e1bc9e7cace04cbaf6be2f3"
  },
  {
    "url": "assets/js/6.cba5b5f7.js",
    "revision": "d7b453e667f1d422af5891650f2310af"
  },
  {
    "url": "assets/js/60.c9c2115f.js",
    "revision": "fba8456cc072d5d69e9563bdcfb1c07e"
  },
  {
    "url": "assets/js/61.da7e94bb.js",
    "revision": "6174f65f91bb4660df0038cab074ad99"
  },
  {
    "url": "assets/js/62.3e4c6d3b.js",
    "revision": "f5eeae936b2b0f6c6619d6c452ee5078"
  },
  {
    "url": "assets/js/63.f52ad3c2.js",
    "revision": "f775288d23757316913f7ce64a358a58"
  },
  {
    "url": "assets/js/64.7086e59d.js",
    "revision": "ded1a0a16eb17099b6153e116adb50c4"
  },
  {
    "url": "assets/js/65.a76c281d.js",
    "revision": "6f6699e79de3545e5e19512fd4ff6363"
  },
  {
    "url": "assets/js/66.a9cc8014.js",
    "revision": "5300ebf095575b9c8133c8436ea4775c"
  },
  {
    "url": "assets/js/67.edfa269c.js",
    "revision": "f772dcbaf02b0d17053cf97984285ba6"
  },
  {
    "url": "assets/js/68.ce31c798.js",
    "revision": "61c562b6e827ab6f59753a9f687a935a"
  },
  {
    "url": "assets/js/69.5b6576ef.js",
    "revision": "0aad3c2cf4b7185bf65f10a7ba299ca8"
  },
  {
    "url": "assets/js/7.48d055cc.js",
    "revision": "5cf16a60dc3e5ad93fe89a7a9334716d"
  },
  {
    "url": "assets/js/70.5d3335c3.js",
    "revision": "8944ae0ca4f4a7cd9500739be865ba2a"
  },
  {
    "url": "assets/js/71.d953b2f2.js",
    "revision": "2f3023e7aab650519c9463300703213d"
  },
  {
    "url": "assets/js/72.7e85a28d.js",
    "revision": "f658ec1ae2c05485e2fbe2a82f920d19"
  },
  {
    "url": "assets/js/73.be939f99.js",
    "revision": "928427f3282a974dcfd44c77d5225e49"
  },
  {
    "url": "assets/js/74.0bee0324.js",
    "revision": "a2b27c6910827d7a77155cdf5ff2fe48"
  },
  {
    "url": "assets/js/75.099e290b.js",
    "revision": "0db43aae4d3606e6255585de44ebba7b"
  },
  {
    "url": "assets/js/76.7912e9b3.js",
    "revision": "8d6e629df00aef07b85c6a6c41bffa4a"
  },
  {
    "url": "assets/js/77.44c4a433.js",
    "revision": "e1ddd2208860f80792631610f16e94fc"
  },
  {
    "url": "assets/js/78.1d824804.js",
    "revision": "1ed4f04c1e704d05732c6c2cbf7f1be1"
  },
  {
    "url": "assets/js/79.36bfa890.js",
    "revision": "7c46d1fd1fc8b9f014e344f96d1721f7"
  },
  {
    "url": "assets/js/8.c666f59d.js",
    "revision": "44466a50669b41fba177cc8356eb31cd"
  },
  {
    "url": "assets/js/80.2da8e92e.js",
    "revision": "d6130bc0682121aec0a14e2fa7f67a5d"
  },
  {
    "url": "assets/js/81.908c7d03.js",
    "revision": "57f3fc38ca552a4c1dc6da6efe66f3a3"
  },
  {
    "url": "assets/js/82.83f14b46.js",
    "revision": "e6dcdb5a469723f7b8d388e2a87998a9"
  },
  {
    "url": "assets/js/83.73c02c06.js",
    "revision": "3d5afbff189c7802ad4717754c3c46e7"
  },
  {
    "url": "assets/js/84.0a5faf61.js",
    "revision": "87948ad5f2f6ef29d8945d2203000d88"
  },
  {
    "url": "assets/js/85.71207736.js",
    "revision": "b9c22e1b13212c37e7a8eec58ce0f7ea"
  },
  {
    "url": "assets/js/86.2d4ab8ad.js",
    "revision": "a2a05a73547ae32b8015119140d0bfc4"
  },
  {
    "url": "assets/js/87.72b3aa62.js",
    "revision": "f122f6611683afe01f90ac862d10143d"
  },
  {
    "url": "assets/js/88.f5212c86.js",
    "revision": "53be0d103971edd942f3fa8a506593d3"
  },
  {
    "url": "assets/js/89.5f2230b4.js",
    "revision": "3887e6904db2a47ea8b033b093a284c3"
  },
  {
    "url": "assets/js/9.50a942e5.js",
    "revision": "e202383468503a8d2f8d4122a70db987"
  },
  {
    "url": "assets/js/90.84f0de9c.js",
    "revision": "a1dd6d6281be58ce845f34a6b4027a0b"
  },
  {
    "url": "assets/js/91.03fcceb9.js",
    "revision": "b4312728c4efc52e492b16c443061ea4"
  },
  {
    "url": "assets/js/92.7b8cc498.js",
    "revision": "e358d0decccf4ba78399c04958c1458e"
  },
  {
    "url": "assets/js/93.7464430a.js",
    "revision": "0f1a1a66af49ebd08396f5534e033b82"
  },
  {
    "url": "assets/js/94.b32bed3b.js",
    "revision": "82171bd51690163f000590bee10acfa2"
  },
  {
    "url": "assets/js/95.d033bb68.js",
    "revision": "ff09eb159a02e193f766e3be7d8728e7"
  },
  {
    "url": "assets/js/app.fb35a446.js",
    "revision": "0666ba7b5f9d1756813a4bb911db11d9"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/database/index.html",
    "revision": "471ef0362706bc2de2ba7526cde25622"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "48d61d8adfc091620d5b0a55ebe6a871"
  },
  {
    "url": "categories/front/index.html",
    "revision": "d1b95bf441ce7f9ee892d3c12251076f"
  },
  {
    "url": "categories/git/index.html",
    "revision": "e7c3e9a2aaeefef102ec7bed073aad6c"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "feb6b47d704d38f24641a6f2387afd80"
  },
  {
    "url": "categories/index.html",
    "revision": "b1dd8d13b08b2dffe3e95b69183d4402"
  },
  {
    "url": "categories/java/index.html",
    "revision": "c71cba4a6e981d27a7a1179cbb2a0b29"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "2d81d93f06a45f769e1ae26c95851e3b"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "5e778a7a3572214658909af4da692749"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "b10df88546991204dc5b33ca7e21c132"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "2348d00c86f7669961d6de18837c1c07"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "3c64a2cf87de27867f206824854ea410"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "ce13ff617aea4048f241cc3de245a558"
  },
  {
    "url": "categories/python/index.html",
    "revision": "759bcbd5e1dbd297aab99e591b65fe79"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "cb7d1986cb78cd3a285d6a6fb06cc21f"
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
    "revision": "d45fae3624d43dba2495935d4d287450"
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
    "revision": "6382e2f341e768d7317754c3eb3e9fd5"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "14ba54eb01fd22b157b50206f98ff050"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "7326752709a63cd64312fa149ba58806"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "ef0784ec5233a15a2a087893cc7d51bd"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "b5efe962398225ba858f0e9bde5e0ee2"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "3b807b0a315793df3beaaf6f2011938e"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "c063c123e982762178aece7cd29a0e4e"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "1bbc0681e734af8a8608a627eb60a1d1"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "047d8393f72b1f07057d1cf0bb50a8d9"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "ede8689d6db03fad3935883d382e7812"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "52e68f7ff6ab17848ea620ef45305cff"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "2bb3dbf3ebb2f0a916e6197b8c7fe32a"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "142e0020991ce3128c69a26a780d7ade"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "72209b92c364e918337f3ad2f2414db2"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "ee5057f61a0d0b7827e9f232904311b9"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "14549aa39620cb4c31ca470f8dbb4c8b"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "cb6bb77cba8932f201104508ebbd67eb"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "df94f3ac54fa21d9e3b5720e23ad4015"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "9e438c0017fc9c1effe73f20e99b0565"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "5966ed908490f89f24f289393308ef58"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "55cb075b01ab6ffeb2208025785b5ddc"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "f986a17ad9858fb0054a145cb43df095"
  },
  {
    "url": "posts/java/java-spring-MyBatis-Annotation.html",
    "revision": "34545b1ba5ea11a1302e93bd4c0b2e2b"
  },
  {
    "url": "posts/java/java-Tetris.html",
    "revision": "0eabf215557345129b44c1e8381aed3b"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "6ce382894de4cf5de9f2014fe475e116"
  },
  {
    "url": "posts/java/spring-RedisTemplate.html",
    "revision": "4a76ead5f87da4ae4e4c64d9a1db2222"
  },
  {
    "url": "posts/java/springboot-schedule-task.html",
    "revision": "c9bbd8822be33bf1cf372b14462014af"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "77e681e1678bb54f6f117a8823e20c18"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "bbddaeeb61ec5b9486f06aecc097bedc"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "eea64c8583ffa419c82452201502644b"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "6abe568a53de6f7d5ee4c44a059cac7f"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "da91e2fdb94db64aef9f983b003b9979"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "901af2c7897a029b5ea147e8012238fe"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "0a0d9afde38179190098b77258cc0820"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "5f1c6d7b569c10ed73fd6cec00845908"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "258475a712b29f7d7fbb0d14214b1974"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "2a8f58e095eef9cd6a2156beeb87ec1d"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "c2934d446571b6df5b7b5a3bad211b5d"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "c24d73a4eed7e96820d6bdf29e09d0d8"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "25608e9191ac1b435b766c6c543ea3de"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "8c3c5f27c851a86b467bdeed1f4c3fc9"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "f113c16ee8215d2e27614691665ddb7f"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "aad97e6659186d6b2b925d1dc4b01485"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "a68a08ec1a709e905d6023d4ea94c0d2"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "82df286202860a3bf68ca43901047b57"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "051b58dc0e45f532f84af01bc86282cc"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "ea791d39770283f742d3d4fa6a3caf88"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "fc9d57a7bca1c8553a25c5c02eebb780"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "ab2d8d0b075b29e1e6778e78a040e97b"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "65a7ccd8f1dd260dc7615d7240d6f2ba"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "8415adedcee216698891dd98f30da5b2"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "bcc673a8e372b48f4a12345cde2bf2dd"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "6e64dc59fe0340bd08ac33aa14db4fc1"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "d952ee60d263ad49c7a8cd7e79253ce0"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "44301c5b5cc28de944744b056dc8146c"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "641a59c6e44fc46a6d8e48c4cd4e4111"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "f967091da6f5dbd02c3b4f0c106eb747"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "e41a5ad06714d2897e4677af1a124f0f"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "1afa9d8bdc44e23f8c843b5f2904a963"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "7e84b7a84f7de063aece13802dceaa86"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "3fd8f0209930f6024c2ff69fb6281784"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "5c74c68d4a5f74396ae40966f52b3693"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "0a6608aa11fa9f98e5bd43f4e0b76caa"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "67010bf6d4701d79561efa84af0f3c0d"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "09084db3e586b71145dcee1195d31383"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "6fce0cbd40a00412fda05b69fb58c6b0"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "59f07731d27a65983ae6162dbc917273"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "639edf0b83b2c87b06dc2dc810df0141"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "870374ac71fcdc8210048aec98307672"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "1f1c7ff26488576a530a95d0269fa4b5"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "47126e1fe23b7a0f5249ff231f0f1c97"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "837d9181f4b16329436ea62862ba8bb5"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "3ac49954b45f2328b5c96bd61dd21805"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "6a48f7dc938df6fbcd1af515bdd021b4"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "6870af591cdeb75b55d21d4b1e769248"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "f219117b3248e6ec76eb6c879c5f40e5"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "c145d94f3f5143b882978e04309058ea"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "9a487b3e163ed5eb341152c775956041"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "30992e10704dad32a6b844aee5ddfbdd"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "f8a61c0391e1816a4608a4eb51a1e351"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "f9758a0ab6596529ac2c72a29259f16d"
  },
  {
    "url": "posts/python/what’s-new-in-python3-8.html",
    "revision": "f6c64963e19601741987f34debc04023"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "150fd09713f3dc2a4309faec481e8de6"
  },
  {
    "url": "tag/api/index.html",
    "revision": "0432c32db9caadc42ff7b266f02eab64"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "03a52ddb3c467a645a630359d98e1e64"
  },
  {
    "url": "tag/context/index.html",
    "revision": "f1972edb337b29cf7c9ce27438894579"
  },
  {
    "url": "tag/database/index.html",
    "revision": "8f48b937e2fa833093f4b33e2cf21238"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "5dfa850f12f85fff4e9c9a2583fe286e"
  },
  {
    "url": "tag/git/index.html",
    "revision": "36c48a63ba86c89f3343f0db28bec41a"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "8739cc43cc2ae6732266029caacb23fc"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "f650ebbfdfc2bc45f99ff0dce0d3caae"
  },
  {
    "url": "tag/index.html",
    "revision": "49e6c0e5169c7c6546879233ddb5d3e8"
  },
  {
    "url": "tag/java/index.html",
    "revision": "7978044dd673fe1312be760adca3bbd6"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "584607d4b544efc6950bb65c625817db"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "a5c320afc84b4057e7437661a5af5f0e"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "284e3aad5724f1058a7d8a73697e7bf8"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "2c680709b628ea3125eae5073710b490"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "14f60d55059c385ee9db3d54385ee768"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "83fe5e4a3b3f8f01b62c511143728b16"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "c1a383394bf9dc8a4ac3c3b1c1fa0e52"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "77ed0a93854bee73cc788687d3f85e4b"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "3bfb1e31b4b10c26ce37049851ec5737"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "6e43dea9ed05ac8d46888f7a6badd3dc"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "f32e93045a0362791347ef54fa80e641"
  },
  {
    "url": "tag/python/index.html",
    "revision": "21b07f2f436d2596110a1405b90a5264"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "75fc9ff12f2a82376a98b58a00a2e976"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "b46a1240d3d14c54ccf1ee215c429a4a"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "652e7e0438053b1d7a9d88fcfc9a75f2"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "20f624bf83e5364f7322f0f6ec34b83d"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "551dea49b59f9cc6e9dd9de95433679d"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "aab9e654aaec31d8ca746417a3fbe229"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "61050d334d639193ec3e10fc3d964a75"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "90306fcc60fc7142a615ef52a77bc464"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "cbf5320f12152866115361d661c210b6"
  },
  {
    "url": "timeline/index.html",
    "revision": "fc2f8b8c1f893834cc6b71e9d040eded"
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
