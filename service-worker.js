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
    "revision": "b0488ea26f2430df0d0b36e92b05de4f"
  },
  {
    "url": "assets/css/0.styles.9ff5c07f.css",
    "revision": "dcae49147f9d976adf64de19d98ea1ac"
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
    "url": "assets/js/11.5c498feb.js",
    "revision": "e0420daf342c7cdde9c196a6a07ec5af"
  },
  {
    "url": "assets/js/12.42f663d8.js",
    "revision": "2c402cb8d4cc9c4add2e0e6b87706451"
  },
  {
    "url": "assets/js/13.746ffc4c.js",
    "revision": "d1a9d076800d9c91c65af572684d7ad8"
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
    "url": "assets/js/19.c616d3e6.js",
    "revision": "54cb30efee211151f66f090507701705"
  },
  {
    "url": "assets/js/20.eca3129c.js",
    "revision": "3e2d8fa24077520721ad6bb7ce06c8cc"
  },
  {
    "url": "assets/js/21.f4763f2c.js",
    "revision": "51105d1efc851ad41bc3b6cf5ffd2570"
  },
  {
    "url": "assets/js/22.5795d573.js",
    "revision": "658bedc5fa654c5c9e313e5a1096fd10"
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
    "url": "assets/js/25.a86ffe41.js",
    "revision": "47b3e956eeb99a6ea0fd76d4225672c3"
  },
  {
    "url": "assets/js/26.f3ba702e.js",
    "revision": "e93fe661e8b8c470223727afcabb7b58"
  },
  {
    "url": "assets/js/27.ca6b4efb.js",
    "revision": "2a85e513a6bd94b7898c9080199b94ce"
  },
  {
    "url": "assets/js/28.f1f3b42c.js",
    "revision": "4073900566fdc5563ba1b1709a4a83be"
  },
  {
    "url": "assets/js/29.9327ad9c.js",
    "revision": "bcf355f608bcf1adf9b4e8f102dcd9ee"
  },
  {
    "url": "assets/js/3.4894d732.js",
    "revision": "5fb83509b86da92e0662d58df42d7988"
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
    "url": "assets/js/32.d02838a9.js",
    "revision": "e065e2fa6ce63ca25302afbffe89774b"
  },
  {
    "url": "assets/js/33.94d0ae3a.js",
    "revision": "87267c3909512a94e940c960c65c321f"
  },
  {
    "url": "assets/js/34.a3328b32.js",
    "revision": "127c1d56e8e2b1a5da8ec6fa827ce6c7"
  },
  {
    "url": "assets/js/35.2de0f750.js",
    "revision": "27313cab08f420de3e0f379efe881a15"
  },
  {
    "url": "assets/js/36.8533f943.js",
    "revision": "3710a742d8893c0222a0c68fa6486b83"
  },
  {
    "url": "assets/js/37.3d3caad5.js",
    "revision": "a0a4168ec017f2bde120d658193e3a10"
  },
  {
    "url": "assets/js/38.147a7360.js",
    "revision": "9a55d097e3d1da94fee148076737ae01"
  },
  {
    "url": "assets/js/39.61e896e0.js",
    "revision": "1eb130c6deb8b5f0b58f9b645d5cc63e"
  },
  {
    "url": "assets/js/4.4f60aa7f.js",
    "revision": "0cb6f97057a35c17ae9eed9aab06b96a"
  },
  {
    "url": "assets/js/40.f061816c.js",
    "revision": "9babb512a0e1d6bf5578807dda677865"
  },
  {
    "url": "assets/js/41.be4c045e.js",
    "revision": "b16fba95f5667303811936b551538255"
  },
  {
    "url": "assets/js/42.e9e3c7e8.js",
    "revision": "839989dbe0af7e6a509fe11cc7c2a6ee"
  },
  {
    "url": "assets/js/43.250c5d68.js",
    "revision": "d9c1ecc7640e83aad5e49a72b41957fe"
  },
  {
    "url": "assets/js/44.731c9ea0.js",
    "revision": "7d1494ecd04002849ffb715c826a019b"
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
    "url": "assets/js/49.16aa9531.js",
    "revision": "a5fa51c0d8c983d25841ccff29da923f"
  },
  {
    "url": "assets/js/5.e70b01d0.js",
    "revision": "e67430d48d84ee8460a0c689352f91c7"
  },
  {
    "url": "assets/js/50.0d8c33c6.js",
    "revision": "aeafe066f00611732e6b1736cae91ce5"
  },
  {
    "url": "assets/js/51.ad8fb7a9.js",
    "revision": "d6259e19e9d005f2a326a77d261ab401"
  },
  {
    "url": "assets/js/52.23722765.js",
    "revision": "50ef3024cd6265fd7e43c63c29b74f44"
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
    "url": "assets/js/57.260e90d8.js",
    "revision": "6c6c58d1f666234e04e757e4a8287ad9"
  },
  {
    "url": "assets/js/58.ce5032d8.js",
    "revision": "a07aa8d7e42035b478459931d6ea214c"
  },
  {
    "url": "assets/js/59.1c749bc6.js",
    "revision": "9d4e7e14c2f881b023bf591493c627b9"
  },
  {
    "url": "assets/js/6.b519daf9.js",
    "revision": "4d28cc56aa07fe85cbbfa379f5f27cd5"
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
    "url": "assets/js/63.445689a7.js",
    "revision": "7e3afc4f3696f74118f472a09b41901e"
  },
  {
    "url": "assets/js/64.2790f8ac.js",
    "revision": "eb4f427f5ae95e4d6ff7202e44fa3052"
  },
  {
    "url": "assets/js/65.5d29f7cf.js",
    "revision": "5f614c976cd5accd7bdde14eea1787af"
  },
  {
    "url": "assets/js/66.18947187.js",
    "revision": "bdde0403ce7a9bda034b80c90e731e7f"
  },
  {
    "url": "assets/js/67.988efccc.js",
    "revision": "3d9421859c42d7a5e7f57bfe9c2cf109"
  },
  {
    "url": "assets/js/68.d98db9b2.js",
    "revision": "5c76830350433fccc9e4bae9a701c118"
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
    "url": "assets/js/70.52a8086d.js",
    "revision": "cb6b3fa07f2458634927428312c67d5b"
  },
  {
    "url": "assets/js/71.085eaa9d.js",
    "revision": "b5e0ad7f196d3a1f2341cf533931b3d7"
  },
  {
    "url": "assets/js/72.2ad63dfe.js",
    "revision": "ffa686953797898c12890205bf1fde64"
  },
  {
    "url": "assets/js/73.33fb1a5a.js",
    "revision": "04529319bd5777d697a714482bd3ab89"
  },
  {
    "url": "assets/js/74.6372816f.js",
    "revision": "973ddd08dce26560700d3778b7e9dced"
  },
  {
    "url": "assets/js/75.9eaab470.js",
    "revision": "f2e7c55108610694b27888bb97635197"
  },
  {
    "url": "assets/js/76.ad4c9dd1.js",
    "revision": "f202f9b5c4317a93aef4d1750ee9839d"
  },
  {
    "url": "assets/js/77.92f06b86.js",
    "revision": "f3bc1492e0a72898e26569c2c40d7efe"
  },
  {
    "url": "assets/js/78.f2ab0ed4.js",
    "revision": "e9d1bd6f0746b3c2b2793a7048c8081a"
  },
  {
    "url": "assets/js/79.f36db6ed.js",
    "revision": "2f43e7435160e81ff7839b121b45ab7d"
  },
  {
    "url": "assets/js/8.79a3ea61.js",
    "revision": "fc0393e456c545e7b72c8ca0ef38b85f"
  },
  {
    "url": "assets/js/80.f403102b.js",
    "revision": "c730f5da646022cf2b1e65dc175f88ff"
  },
  {
    "url": "assets/js/81.71aec5a2.js",
    "revision": "df0ff2f8409a6148a60f07bad9db3917"
  },
  {
    "url": "assets/js/82.87b15efc.js",
    "revision": "ff9b7bfb1bc7253014449d07321ae75f"
  },
  {
    "url": "assets/js/83.237700a8.js",
    "revision": "f6928d83fff4c54d72f85ecbbaedfd6c"
  },
  {
    "url": "assets/js/84.fde3143e.js",
    "revision": "a46c363152b5a674c48ef943803ef45a"
  },
  {
    "url": "assets/js/85.91130988.js",
    "revision": "abb88e4c8515d9d4d28f2d92c9ea9b4e"
  },
  {
    "url": "assets/js/86.c6b02215.js",
    "revision": "890067720d1ed0db442c20640fa2fe04"
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
    "url": "assets/js/app.dea7fc0e.js",
    "revision": "767b58645179fe6a3cb9ca598122d1c7"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/database/index.html",
    "revision": "20441126ecc37dbdd697c27af86a95fc"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "db0f4490a10fe9e8ef02875ada1c789c"
  },
  {
    "url": "categories/front/index.html",
    "revision": "3afc4074682f3f3f51b33563f47e4b34"
  },
  {
    "url": "categories/git/index.html",
    "revision": "692f7fa6a6317d4b67af96dba6929cc9"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "e9d69e08acecfdc34885b7fb6ec0d693"
  },
  {
    "url": "categories/index.html",
    "revision": "4a7b8aff998a22132bffcfdd1ff4201d"
  },
  {
    "url": "categories/java/index.html",
    "revision": "7e9337fbe70ee20585b05d899acff410"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "c70f6a557f6d296431fcd9a67d23aaf5"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "c5c6f1121993d6688e7d6edd6e30ab2d"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "beb5ba7fb57795966f36c2c1a6c7bac6"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "294035667813ca93f4f23e5347e5ed80"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "02aa0a06790dd96ab1cdd2b6ba83701d"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "8151ec2f929599c0de4262e744a6ade2"
  },
  {
    "url": "categories/python/index.html",
    "revision": "7d23d870239a189b15c26e264069ee63"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "60a37f0b5538a45cf57e26ddb67f8b76"
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
    "revision": "0700321fef7553c802da660f0a0cb3dc"
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
    "revision": "00b9116cb0394cbf7e65da65c637a5cc"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "2a50d3488f87f3fc491da0974822f287"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "4daf00f990ec16d39ada5c0d1ded9be3"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "93034856f86cc431bfaf9723188d6481"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "73da9f04b3853e16b7a05608286a1c39"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "3b8fde386a997aaf8753d8b43d23580a"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "ac87347c117c68d5a287c8051c69d10b"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "9313131a5f7e31659dbb139a56fd4e49"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "7ff4b5a31817eec687d12c6559607d78"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "22bd15d72d7a509aa83c2d84a7660919"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "20e7f10570d5e8c6ee4bf0a7ab2aff69"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "4d02603af4e89e4e6f6ea084337ec840"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "79e56c8fde48e6a66a3304657c64f045"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "d12a9fb95f111e7074ad731df98f9f67"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "b2c529df50f4fe2a9d2bcc05d114ae64"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "07726232472065cdcdaca0ca388275a7"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "5d7695954a0ce0b98ee9540f35241db5"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "a2b853833f3f83766c5f2bea2dfffcfd"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "f117bf9eeecbedefe14d4a0c9f3d3a48"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "835f69e50074a05954392b98721f8b21"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "1637c4b9bb040b91cfa0cb7b80d3a1ee"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "ec7087661f3b22e53a34f408ffb44e24"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "75d4ee83d8ad1229041244a08f092d03"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "9972b28cbfe33ab54526b88f48277e79"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "aa1a1c33a7840072d5db8fbd393152a8"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "bebe892e899f785cdee1ac12f5e9c690"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "4d3ad9d42615a301a1e727547dd6b3b9"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "fcc4b79e1b75e77bc4642ee9122f61e2"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "50cea80a603e2dbbd4c027f4ddab5095"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "68d636cd946fc29397fa93a4e8de326a"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "b9ca3f27deccb8a05242ab3d5749ec01"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "cc2a38671964db6c15224e51411a5622"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "e408c4c25c1b5c27fa50d8de75856c16"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "8138e8ac1c577f7750f8481b149c22c8"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "03e747f02e8f015caa9102b3b18923db"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "22fa0aa89272c58e6cbba6fd835d1401"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "e068329b266a4a90f108c2e84c903d3b"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "4549db42f77eb75f109dae4cfd15a289"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "182e015960c4a4b3beb93accfe798766"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "fc5cf9be85f0a2e707170ae602214bed"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "52468f68613681799196838a2596b798"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "630f549b2172fb59f53702eff981ce96"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "6cc84460243c2fc037350fdf6b9c4fe4"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "5a6c74a2c05b42ef18b0e03844b10dbf"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "1452f2405c4c8086c053f9f4c99df4ed"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "c378ef3dc9c88292c074e019dfe579ed"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "8ddbcced1c4ac90dc52a1f39aad35a6a"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "cb1d365114aced91bb55b62296ac0482"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "c2ef9501645dfaa4ac53c4edbd582e6c"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "2d300278f83c61e1130e7b9bdbe89ef0"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "fdae05af19d6fff3f8c4196c3363bb9b"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "59eedbf49cb879d3e07ef4230dc85015"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "cfd1f423884805126fbf1c6e8d1d0efa"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "20f2ceb62a04fbee25a0355c21271761"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "83fb5e1ea237aad3f723554597deb376"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "cc11b9fbbc41bbd23ff8ca840410e47d"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "4a830b7ab246a366d987074f38050e39"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "c94bce44bd06937d1372cad5990aaad7"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "156506100531ccc731f1e2aa39e42aec"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "85ff11c82ce2ad1f06bb0c04e9323d54"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "bb0600ba95bfc5d97563b7164ab7839e"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "0ab95c4bd73b924fcaa89ac43bbdee80"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "b35f920b2b7c827d65058620d8477601"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "a62467720c38e03b565833df80d99b34"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "15096a2d92702850d9467f86b70d3317"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "e6026b182d03c48784e24207737dc873"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "165d678b1161a977fd0fe363587cb4a2"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "8817d826e9991297ab8e94d0054520c9"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "3e9926ee7c6a5bb0967f52b96f5e4752"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "833884f2ba427389ffa14066f5e05092"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "ae60896eab91a2229d135f45f2e98066"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "849e700c7de02815c00df4c19749a6a5"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "4353953fad9d9fd224c2b140f72e389f"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "5bb77107eb49ba7504c477c3efe4cccb"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "269ba183a7fd12cad1ecc2ffc22ff12a"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "656e511d2f224a225845c83ee405664a"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "eea4f58355c13224670509f2415f84d9"
  },
  {
    "url": "posts/python/what’s-new-in-python3-8.html",
    "revision": "e313c33366bb4811e7eabe32c57c412e"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "5372c247a5a282dae0a1d9d62fac54db"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "dc7b1694b50957c4c819f86129edeb8d"
  },
  {
    "url": "tag/api/index.html",
    "revision": "d592515986aafab9905ed641d6510616"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "19defb280688917c8ec7f8553d3284ed"
  },
  {
    "url": "tag/context/index.html",
    "revision": "809a9c81acfa089b9333f79babf14d26"
  },
  {
    "url": "tag/database/index.html",
    "revision": "3f9a5ded1471992d250147a7143fc1a2"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "88f7bed071996bc87e6c9870ab34773a"
  },
  {
    "url": "tag/git/index.html",
    "revision": "870993044f74665e7fcce587c5f45985"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "46e69ad63f0112b8ec8ad370e723b4ff"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "c1ed35122c058e5d8c1e10c5b06f7733"
  },
  {
    "url": "tag/index.html",
    "revision": "bfa47b01bf50b4d5ceb25cedacc10fbe"
  },
  {
    "url": "tag/java/index.html",
    "revision": "8223fd28b119665e2feeeda919050697"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "b05b906ec4b70a14a9e29c77042835c6"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "0eccf1532deb35c37791f5f346b4acdc"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "f057a375d045dc9bfeddf80aca6c4afd"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "8d3b7ffbdba50d3515a774ee26e7e861"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "7eec940b688efaa0d6413e82074f79d0"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "a7975021baa4f454dff010957cd697e6"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "8cb696629d3ac45e2ace34f88231dd72"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "c020e4ce17b71ce425db87622a54756c"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "6c4a5f7f2bf0a76846ab120fe195ca83"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "553db1c3dec09e209abb41e167796c78"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "c054400130688a5f0835d064eda1e05a"
  },
  {
    "url": "tag/python/index.html",
    "revision": "d9f9e4cc1051cd50505e50b10a4ccfe1"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "b456f294d4ec85d4b10c40ca229b453d"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "349441da901b92fde2d29baf63276a88"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "f9fd851152fb17da0f23ae04d7b2d244"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "e972e1229c511183b5b94cef35894c7b"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "79bf118c63be13fee08ccebc3cb9dfb1"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "423668092204ffb4ecc70c78ad40e489"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "8e3487e94255c6e544d02d326fd845aa"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "ac00ed85e45b5676351f1623fffb1d28"
  },
  {
    "url": "timeline/index.html",
    "revision": "1879b981a88189c29ad15dd4b39e8d2f"
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
