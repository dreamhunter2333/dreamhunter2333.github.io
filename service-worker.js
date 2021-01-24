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
    "revision": "8f8d3e15ad1241dca249f1f2a0acdc92"
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
    "url": "assets/js/11.333167a6.js",
    "revision": "4f8b258033b13ebcf80fb4b007b83e97"
  },
  {
    "url": "assets/js/12.a6d57ec9.js",
    "revision": "6a2e99a3867b85adfad67cd4375a0a6e"
  },
  {
    "url": "assets/js/13.53f73029.js",
    "revision": "4e096fa0f21748b7b8ac1f60fc85f7ea"
  },
  {
    "url": "assets/js/14.e2c7b861.js",
    "revision": "08d6f38ed189a17d9c17b571e91dd13a"
  },
  {
    "url": "assets/js/15.54229b8f.js",
    "revision": "439654d7c356adb31a30725a29ca898e"
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
    "url": "assets/js/18.a05c1b77.js",
    "revision": "cf612319510c2e14a36f36939a713606"
  },
  {
    "url": "assets/js/19.c6c7c9b7.js",
    "revision": "7124581710e47453dce9965e23aabf2c"
  },
  {
    "url": "assets/js/20.a40fb07b.js",
    "revision": "a84441052453b52a2ef97a983a5c8dd7"
  },
  {
    "url": "assets/js/21.d748f05a.js",
    "revision": "b12bdd667d5a36379418d0e5d2934c6a"
  },
  {
    "url": "assets/js/22.8cd6088f.js",
    "revision": "565d551e6911087de6a9c54bce52a5ee"
  },
  {
    "url": "assets/js/23.4e9ecae0.js",
    "revision": "5a3d975570dd51fbe8bf608a96173bf0"
  },
  {
    "url": "assets/js/24.0b2e9728.js",
    "revision": "f6a8491a0669ad85268f0ef56c9f6e0f"
  },
  {
    "url": "assets/js/25.9f97e637.js",
    "revision": "a56a5191ec6082bfcbddddacb4107f2a"
  },
  {
    "url": "assets/js/26.f3ba702e.js",
    "revision": "e93fe661e8b8c470223727afcabb7b58"
  },
  {
    "url": "assets/js/27.7fa69f0f.js",
    "revision": "0674959d833ea95b63b0b10d29a481de"
  },
  {
    "url": "assets/js/28.fd960252.js",
    "revision": "d787bb21521572cde7473c1bde863bd0"
  },
  {
    "url": "assets/js/29.9327ad9c.js",
    "revision": "bcf355f608bcf1adf9b4e8f102dcd9ee"
  },
  {
    "url": "assets/js/3.1335991a.js",
    "revision": "7f060e50f4b77fb2f37cf2f11b70072f"
  },
  {
    "url": "assets/js/30.45667f50.js",
    "revision": "00779f533cf37a3f85565dcd6d5128af"
  },
  {
    "url": "assets/js/31.0cf0687d.js",
    "revision": "69bc02ba822d037c52f6b5b26e7bfc64"
  },
  {
    "url": "assets/js/32.80dcc36b.js",
    "revision": "ede57d799f7690102d543b45f921dfd1"
  },
  {
    "url": "assets/js/33.92f30307.js",
    "revision": "61ab08dc3bebe5375447daf0af0e8915"
  },
  {
    "url": "assets/js/34.e1a7c146.js",
    "revision": "ae73b2f8c3a8663ee6ad7be6eb27f9c6"
  },
  {
    "url": "assets/js/35.985459ab.js",
    "revision": "02f9ba167a130a798200b54e18461818"
  },
  {
    "url": "assets/js/36.da0183f4.js",
    "revision": "f79a706cca875bb3fe5853d7d8f35c78"
  },
  {
    "url": "assets/js/37.a0688582.js",
    "revision": "151f9c6d0446b9a9a26b1347e98fc2c5"
  },
  {
    "url": "assets/js/38.624852bd.js",
    "revision": "af68a45c90a524c0f5c83aa9a405799e"
  },
  {
    "url": "assets/js/39.61e896e0.js",
    "revision": "1eb130c6deb8b5f0b58f9b645d5cc63e"
  },
  {
    "url": "assets/js/4.a11e6b1e.js",
    "revision": "509daab5315435c58e3ab51116092efd"
  },
  {
    "url": "assets/js/40.f061816c.js",
    "revision": "9babb512a0e1d6bf5578807dda677865"
  },
  {
    "url": "assets/js/41.821f8c89.js",
    "revision": "4305dfe2ad490e3be69734dd17fe004d"
  },
  {
    "url": "assets/js/42.e9e3c7e8.js",
    "revision": "839989dbe0af7e6a509fe11cc7c2a6ee"
  },
  {
    "url": "assets/js/43.60093a42.js",
    "revision": "1cdbb883fdf9d6a8aec88ad7d0057e8b"
  },
  {
    "url": "assets/js/44.2bfa9c9d.js",
    "revision": "727b830edea4b8481c572985809cd527"
  },
  {
    "url": "assets/js/45.2b3a2c02.js",
    "revision": "68850f9674b6653e201abcdc6a75f7ba"
  },
  {
    "url": "assets/js/46.f3379e4c.js",
    "revision": "e320e2b106a222fc8103869403ffa737"
  },
  {
    "url": "assets/js/47.23fc9584.js",
    "revision": "54a0897b1c97a573091419db9109a8af"
  },
  {
    "url": "assets/js/48.25f8eac3.js",
    "revision": "3a9a05635ffeef6d58788be10a912f05"
  },
  {
    "url": "assets/js/49.4a12329a.js",
    "revision": "2087e62e09570285305bf449a58507f8"
  },
  {
    "url": "assets/js/5.960c473b.js",
    "revision": "fb841a8f27e3edcc437b71d1b251fab5"
  },
  {
    "url": "assets/js/50.944f4486.js",
    "revision": "789b180497087e7f0a118a2562273ffc"
  },
  {
    "url": "assets/js/51.03464c60.js",
    "revision": "960f369382c19d3abbd6c9f46aab4173"
  },
  {
    "url": "assets/js/52.e73e86b9.js",
    "revision": "cd60d81ec2539152c9985f9c84c3b42a"
  },
  {
    "url": "assets/js/53.c87c7efe.js",
    "revision": "cfbd0782334f1d524500b686b80bc175"
  },
  {
    "url": "assets/js/54.d57646ca.js",
    "revision": "d82a905f052f701fcfbdbf83f4a56252"
  },
  {
    "url": "assets/js/55.ef5a85f7.js",
    "revision": "da5a246f451b81a99f3e82448cb210af"
  },
  {
    "url": "assets/js/56.6a78eafe.js",
    "revision": "d99c5b94fae03d9fe2d84cccec11affd"
  },
  {
    "url": "assets/js/57.57c8a9ad.js",
    "revision": "da35bd2bd9f508e95a988a5f0cd4de9a"
  },
  {
    "url": "assets/js/58.d0ad29cd.js",
    "revision": "0cc7f192df1f35c25c54542bb25338b8"
  },
  {
    "url": "assets/js/59.55bcc10f.js",
    "revision": "46742406aaab93fc3e44c937fbf5b0b9"
  },
  {
    "url": "assets/js/6.8c14c8dc.js",
    "revision": "2e6eac9bd58bebd57105ddd95856c42c"
  },
  {
    "url": "assets/js/60.fe6120dc.js",
    "revision": "1bf580f1f7398ae00ac64b7a2cbec76f"
  },
  {
    "url": "assets/js/61.a0a3d159.js",
    "revision": "6c720e649dc9034d1ed9910249fbe0e6"
  },
  {
    "url": "assets/js/62.f9570851.js",
    "revision": "4613754a3370dd1fa66bd5cee63675e5"
  },
  {
    "url": "assets/js/63.305cc041.js",
    "revision": "c69804eba3697be5fa05da72c198ff18"
  },
  {
    "url": "assets/js/64.8e6204ab.js",
    "revision": "749e4dd0a8d7fa906924171dfaeba460"
  },
  {
    "url": "assets/js/65.e739bb73.js",
    "revision": "08ea2a640193ebdca20f159e0f9b0524"
  },
  {
    "url": "assets/js/66.266c0e64.js",
    "revision": "61c15504fda0448778bbdaf2a30a9acb"
  },
  {
    "url": "assets/js/67.ebd778c5.js",
    "revision": "a095390ef275b503d4b108d6a9516150"
  },
  {
    "url": "assets/js/68.793845c2.js",
    "revision": "7529575b24c44323f7392ca88302affc"
  },
  {
    "url": "assets/js/69.9db9fb47.js",
    "revision": "607d12bf19547baf25e4f1f1c57ebe77"
  },
  {
    "url": "assets/js/7.8009c1e1.js",
    "revision": "fd5dd10b911f7c0e864a1b32ded58b8d"
  },
  {
    "url": "assets/js/70.088a1d79.js",
    "revision": "d9c22457708fc2ab3f57e48e856a5ca3"
  },
  {
    "url": "assets/js/71.d8a13a1d.js",
    "revision": "52c14b3e9cd04795aca47f82f76754a2"
  },
  {
    "url": "assets/js/72.3fd5e75a.js",
    "revision": "fb60dbbe5a093f85cbdb5156e7b90e9f"
  },
  {
    "url": "assets/js/73.33fb1a5a.js",
    "revision": "04529319bd5777d697a714482bd3ab89"
  },
  {
    "url": "assets/js/74.173c14d6.js",
    "revision": "44ee1afa6394ba95be7ef3c472e116cb"
  },
  {
    "url": "assets/js/75.96d0cb11.js",
    "revision": "dca5e9979c51665bcf242f89d4807b1a"
  },
  {
    "url": "assets/js/76.3af4bfaf.js",
    "revision": "0b0431a5cca420660917b3fddcfc766b"
  },
  {
    "url": "assets/js/77.c28e62de.js",
    "revision": "78b0a1ee1af6b414cc431558bc8385a2"
  },
  {
    "url": "assets/js/78.a75f0b54.js",
    "revision": "98b4aecedf3fae60a68c28b72a496f41"
  },
  {
    "url": "assets/js/79.f1a42931.js",
    "revision": "3975bfbd57eaff23ed883c325ce25454"
  },
  {
    "url": "assets/js/8.79a3ea61.js",
    "revision": "fc0393e456c545e7b72c8ca0ef38b85f"
  },
  {
    "url": "assets/js/80.33586eb2.js",
    "revision": "db9f5950748831fb1debef6090a19744"
  },
  {
    "url": "assets/js/81.71aec5a2.js",
    "revision": "df0ff2f8409a6148a60f07bad9db3917"
  },
  {
    "url": "assets/js/82.c2287204.js",
    "revision": "7212864df2757f87a554d6a2cdfed924"
  },
  {
    "url": "assets/js/83.10ce6df4.js",
    "revision": "f5957d4c6fb55fff6b1d18b5839fc09e"
  },
  {
    "url": "assets/js/84.2a297f79.js",
    "revision": "f61d600c571638e9fa80818ac7a9b2c9"
  },
  {
    "url": "assets/js/85.1a45e3e2.js",
    "revision": "e9016681241de98c52f55689bbf10f09"
  },
  {
    "url": "assets/js/86.7c0d32b4.js",
    "revision": "692c9b6e0387e6c26a58d2dcbad67968"
  },
  {
    "url": "assets/js/87.0f7b122e.js",
    "revision": "9ccbdbe9f89028dfef04be0bbf646572"
  },
  {
    "url": "assets/js/88.eb70e31a.js",
    "revision": "9798c174720d4beac1b02b34996c8174"
  },
  {
    "url": "assets/js/89.e7d43df6.js",
    "revision": "4de1c88a433fcbd4d777cac150fc68d9"
  },
  {
    "url": "assets/js/9.5201d619.js",
    "revision": "3e9fc9e6ddc0962e50116233177b12e8"
  },
  {
    "url": "assets/js/90.d8047aa3.js",
    "revision": "0139864358fdefb931cca5e1659c2bcb"
  },
  {
    "url": "assets/js/91.4c7be639.js",
    "revision": "c6b5e2c9e3756cc603209a192dcb6463"
  },
  {
    "url": "assets/js/app.f1060747.js",
    "revision": "2ebea97a944ae3a8c7eb4a3fdeecf8a2"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/database/index.html",
    "revision": "7faee47f6a35999084cb617f03ff57c4"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "38af446a2a1df51f2bc4c507dbe17b2e"
  },
  {
    "url": "categories/front/index.html",
    "revision": "3daf77a7ae633bef5672fec56c2c99ce"
  },
  {
    "url": "categories/git/index.html",
    "revision": "4de25f54b3307fafc22b0c89f42f6388"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "576b56a10d9d67a6e594300b534e89c4"
  },
  {
    "url": "categories/index.html",
    "revision": "9981402201975ebc246cbf31200c4e1b"
  },
  {
    "url": "categories/java/index.html",
    "revision": "5bf1648047b4dd2aa5e9907478066189"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "44929109373e3df16d5ada5262b47183"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "4367f49bd95c051d73bad5aab84ac889"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "a22e48d4db6e6cb3ba6bea809669d68c"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "ff1723d3c7ed8f971789d7646f36ea11"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "00511d274d56cffa338c3575770cffe8"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "d70c5d115c6d8d0ddc69b95c672cb464"
  },
  {
    "url": "categories/python/index.html",
    "revision": "a493412a7fcba0fe51e9620c1762c4dd"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "1a07b889677ade9b58edb0e3594e70cc"
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
    "revision": "9ee2030caef92c215047ba7b443cc6f7"
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
    "revision": "ff33657c8c7145c5ff7ab4cdf05011f0"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "89c047e38b4b4eafa7ace2ba0f6b2ce5"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "acc0bdd67bcdcfe4a11fd2fa3427b870"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "f02bcc1607bdedf0330e3b948f2b4439"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "da4ddf2fe0e8c348094c5c1adb4b5feb"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "8d0b1378c00ba1a523d7fee03c39d366"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "cde7e3f4e0a735ae0e730dcf475dcc2b"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "71be22ae7cee8503bd49837029aa7e3a"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "08a0b962fbbe1b5244d254f0c477cda9"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "1a25f3a00b59dc3b5dbb7f06cae95ef9"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "752057e5657ff42b6aff6c551ae72ad5"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "6ba000c71247d2ecad0fd83bb696ddcb"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "b07a84189973b5f19787639b2cd58f75"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "39a798ebf0ed971cc38511cfad1a3507"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "9b1f9c26acb113a4587b23cb2f8c3c4a"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "ebea8da1736cf909c3f3f46e359a9e3d"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "0551ca2667e6c5cf2ba9d67de15f8fe6"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "fe0e0c0533b62b58e5cda630579a8546"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "90a3016c943495a908566f1dc5858e07"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "58a37f08887571d9c58c4ca324ff1b6a"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "dac352541e42d4338f6d4fdae5672b88"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "7c336643119ae28c19b88631320a80e3"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "bb60fb29442b80783b23ca41152ea069"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "dd20236fdfa0d30f6483da7d786ca075"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "6b52f479c6eb8afab3fed5363b3921d6"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "d211e1091ccbc8ea210a4d82ccd0134e"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "63fe489bbcbfc1ae47eecfc524a0d388"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "c78f2c8792dcb4b458cf9ef96051e67d"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "0ece1ff67c7aef483a8fa319294cf26d"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "1a291b88c04f906cb90a54148c82c04d"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "ee9c01f474c10183f52f27e56860004a"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "df0c6cd5690c431bac66ba5d224ad893"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "0db271b6f7b6c0e6a3fa2698631b2d62"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "02188da53afa75ed996503920f27be29"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "6baaaf246646a631796a8d33395d4c7f"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "e8c0236e3ff9f92dfe2db7b7e08eb9dc"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "ed57a6c2e55dd8b48bc98370d1ca1eee"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "1f27d5471a7346e8afe85d726a2d9f1b"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "52b97b2cc0540ffe78d624b8aaa38832"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "f5291a6eda5ca933a2179f0373f72107"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "671522760dc9198f6ccbb5b30bbeb6b5"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "65d8d48c2f9e85e898d36f8194062984"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "40dda0afd71b1d9902fa15531a258a05"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "35f70c451b2d9d41cda18b27fc2d4d04"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "ddc870a9b17c9e7588344705095ca7e5"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "470d7d7595e8e33e28408930b25b2b96"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "4b6ebaaf023e05dff9f0f8e8831b40cf"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "b7961de9d4c19fc8c2eb03888d986cd4"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "f81110208a9927516b5c993e2bd2e344"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "6fd114790f89eb9e54f2aaddb9e667a9"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "109222d99ab5d1bc4adb050ec2ad4994"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "c3435d907f8100da95ded8c27e7a3a5c"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "cd93cac17bbf40839d56fe7c4e4829b1"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "b7733e0c2fa67624bcc7951f1ccdb4bb"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "91d1737c0689574fb1b65bdf3ffbece8"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "7088649423a41e02e0edd82ce496d1bb"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "72a22d2e4546d6351c04872c428272d5"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "610ea12e92f2cceee86b823f9da35287"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "598712d0111648b66bd6b95691b59eaf"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "8456a1af99ec74517bbf451dfe9c1e13"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "ec5d681ef00e62a069bdcebdc3bda104"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "5e5bc04090256d51a00f5e3f13030871"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "bda8196e01c5186e9a076de019533601"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "4829860e2ae033bfc669bc84e59f5315"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "27ac552642adec1959acb3a1673a9a6f"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "f1fd98323e9e986c5e656f55714b803f"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "a9cb9d6cd404e0f198f6c9696301af05"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "6f0cab7d9cb906d6e1d5c1c3ff1087a9"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "edb4c0a8dcdf0ac3c3f52a98707983da"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "1bda44a44d16410d7ca24fe6bfa39867"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "cdc9d2589b5ef2f68c4f8eb8d78c96c4"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "816f5cd2a665c37e6cb82dc89b331e65"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "d0bc3c96d972c50a30dd4f2abbc35275"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "cec2ccad4831177ff7501fdf0866cede"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "fd8215da64f1c2e04482921f315d2c0d"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "88ca7a457ae22aca1b2e4f95c3653f74"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "4b5f0989bdf7bd94bb9d361b4b88a10c"
  },
  {
    "url": "posts/python/what’s-new-in-python3-8.html",
    "revision": "ba9e0a760c6b7dc2b63e7ca3a803bdc4"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "d9448aa07daa2a08d24cecab573333c1"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "837464cd8848de60c71b1feb74b6b409"
  },
  {
    "url": "tag/api/index.html",
    "revision": "40620a9ba55860cf71b4941ef0eb2741"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "e2dd6696efb46f76b086fa99a27bee33"
  },
  {
    "url": "tag/context/index.html",
    "revision": "3eee1b2ca545238b2341ef0a371e35d1"
  },
  {
    "url": "tag/database/index.html",
    "revision": "45d95cebea2d18fa0df7c0316db8ed55"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "e3b57e872587eaeb5aefe0ce022eed94"
  },
  {
    "url": "tag/git/index.html",
    "revision": "18326ae483fa66334ddade710b2d7b08"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "775428dbd4c3f1351bc2385bc360ce28"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "f92e220aafd8dba0615e1d89e1e73aab"
  },
  {
    "url": "tag/index.html",
    "revision": "b811b5e62d65acafa961ab495c2a78a0"
  },
  {
    "url": "tag/java/index.html",
    "revision": "62f7104ad300ac96b2acbcd12bbe0a73"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "fefb05e96c2690185238bb20e5a375f4"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "1a70fa9cfa972a436618603ee9c60792"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "8e096ae64258afe020c618cdda90e0c8"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "430642b7ce0106108cc38cfe35f409ec"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "49ef374bb33ea0743beb21a0a7619aa2"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "376820816bf006ccb28cf2ab0310c99d"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "6ff512b282c125dfa8788ea1935a24e7"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "40a7d3c60689b0c61bbc4a87f161c416"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "83a28d2a5d621848ca8930ba8fea79f5"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "7ae77e381d418c19141d651c6cd480e0"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "ecaaf4e2725bf0f716cf3701ab459511"
  },
  {
    "url": "tag/python/index.html",
    "revision": "1f6ed0db4b11d624cae4f4025a88aca7"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "e4792645f4e1f0404ef8340a06f126c1"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "697e606c0a2093b85a18681f9424b798"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "0cd174430f47b12af8632de58a2ff53e"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "99a652f44e5510b53031f6b04106622b"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "ad9359c15a0042977c73dca54265b7c8"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "dad2dcdf60b009212716def17b005969"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "1e224081d5ae8c0c05aefbfbef637c9a"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "cfc5d27fd9fc3bcb180ff4d53c7bd8fa"
  },
  {
    "url": "timeline/index.html",
    "revision": "a3e9d2f5845b37f4098e6022e782f94a"
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
