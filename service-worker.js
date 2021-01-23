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
    "revision": "d756f6dfa444d7ecb74aff28dc08c94a"
  },
  {
    "url": "assets/css/0.styles.ea90bdd9.css",
    "revision": "9785d972252eeb0df8092eccffa8e7dd"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.51fa7f79.js",
    "revision": "923db34af8a65cc45aef51287a0e52d1"
  },
  {
    "url": "assets/js/10.7e361f85.js",
    "revision": "af26ead8e7504af67268556473010180"
  },
  {
    "url": "assets/js/11.4dc8d956.js",
    "revision": "765b5a56229e2578ef8bd0f916d881d7"
  },
  {
    "url": "assets/js/12.18403279.js",
    "revision": "d5564b7d7f973f0a6da9bcf9821f337d"
  },
  {
    "url": "assets/js/13.3c3f0f54.js",
    "revision": "4e1905ce2ad3c116eb3a7df46b972c78"
  },
  {
    "url": "assets/js/14.cde5de05.js",
    "revision": "6a6d4db82cba799ef646888aa1be1f5c"
  },
  {
    "url": "assets/js/15.57838150.js",
    "revision": "05da27ce3423831cc13cbb0fa7533e24"
  },
  {
    "url": "assets/js/16.460cde8f.js",
    "revision": "11afd7e9325b0d74b6a197cf727a2f10"
  },
  {
    "url": "assets/js/17.016d04d4.js",
    "revision": "45c88551703c41e2892f64ba5d17dc66"
  },
  {
    "url": "assets/js/18.cff195f2.js",
    "revision": "e797f41da395ad57996e8601cb72cc6f"
  },
  {
    "url": "assets/js/19.257984f6.js",
    "revision": "1c0e3feab340b7e1c639dc5c4701e4dc"
  },
  {
    "url": "assets/js/20.26593c73.js",
    "revision": "1e7558b5fa6675454a4c09090832afbf"
  },
  {
    "url": "assets/js/21.2ff6b998.js",
    "revision": "81f8cd2289b3d9c116b952a16ea642bc"
  },
  {
    "url": "assets/js/22.e7d3008e.js",
    "revision": "1e9027e84c2d3e0c53a58341f1f285e1"
  },
  {
    "url": "assets/js/23.b6290231.js",
    "revision": "5e15e06378a90e0ff5d8b2ea462e3bfc"
  },
  {
    "url": "assets/js/24.c880caa1.js",
    "revision": "140b3581f52c90a49e671b9936904e3b"
  },
  {
    "url": "assets/js/25.4f6448be.js",
    "revision": "57eb3dcf322e346c88af2cb59cc637c4"
  },
  {
    "url": "assets/js/26.2014a7cd.js",
    "revision": "cd17906107b700685b6ec6f545db28b6"
  },
  {
    "url": "assets/js/27.a42457ec.js",
    "revision": "2b436c4ea6a323bc32f48a873e823f22"
  },
  {
    "url": "assets/js/28.be46147c.js",
    "revision": "8feeec594134ba426c295aaa15561635"
  },
  {
    "url": "assets/js/29.59e3c0b5.js",
    "revision": "97ee3e63adb70ee7d936345538ba0006"
  },
  {
    "url": "assets/js/3.325ab0a6.js",
    "revision": "8e2d68ab952c10bc7ef0874e6dbeedfd"
  },
  {
    "url": "assets/js/30.ec5b8da3.js",
    "revision": "73632f34ea820b5fdc545d7e0023b562"
  },
  {
    "url": "assets/js/31.d38d4e19.js",
    "revision": "3f0a32e27038bf6081d7f36b505634a8"
  },
  {
    "url": "assets/js/32.858ab40e.js",
    "revision": "dd9927ebc591a6e3cf00927125611bc0"
  },
  {
    "url": "assets/js/33.3e5e0379.js",
    "revision": "090a19a1a5691b9631f117179702f16a"
  },
  {
    "url": "assets/js/34.2c775db6.js",
    "revision": "11f9351e704497e857d4fc1033d60911"
  },
  {
    "url": "assets/js/35.48e4dfe3.js",
    "revision": "0f0bb01789c440633aee621a4b60b3fc"
  },
  {
    "url": "assets/js/36.de57ced7.js",
    "revision": "3ab058946cede646389080129b19fe9f"
  },
  {
    "url": "assets/js/37.219ed6ab.js",
    "revision": "3ea651af3889bf6a5d1a95cf5f8e4898"
  },
  {
    "url": "assets/js/38.71efd5ee.js",
    "revision": "d137a83a10e1ca77e7db3d34f3281e76"
  },
  {
    "url": "assets/js/39.52afcb38.js",
    "revision": "deb0d0bae3df107f1023fffc876e9501"
  },
  {
    "url": "assets/js/4.96a4f898.js",
    "revision": "a14bf9ad47183792edbede46a86dafc3"
  },
  {
    "url": "assets/js/40.87cca01a.js",
    "revision": "6218e1c78c9cd49f243be08d5315768c"
  },
  {
    "url": "assets/js/41.ba0ffc5c.js",
    "revision": "f7e400e9770cb046b79af1f6d56e5669"
  },
  {
    "url": "assets/js/42.3abdcd3e.js",
    "revision": "347db8b980d9cfab616d3d8009899cc9"
  },
  {
    "url": "assets/js/43.d82d5620.js",
    "revision": "b796959e0fcbf3784b46eb60ec6e84e9"
  },
  {
    "url": "assets/js/44.362843ac.js",
    "revision": "59971870760bd246ade21a168c9a815e"
  },
  {
    "url": "assets/js/45.1858ea18.js",
    "revision": "c6e054d7e05c8dfded3a82717e807e7b"
  },
  {
    "url": "assets/js/46.2dd73fb3.js",
    "revision": "cdfe958fab2b20aa943bdf72f6e72913"
  },
  {
    "url": "assets/js/47.76a7a02c.js",
    "revision": "447ba32be61a28f8d7dcc5a236b14728"
  },
  {
    "url": "assets/js/48.1bc588be.js",
    "revision": "05d6a421fc93a30873c393b8313b8c18"
  },
  {
    "url": "assets/js/49.5fb43288.js",
    "revision": "553a8ae5a1fef9fea4c9d26da889cc83"
  },
  {
    "url": "assets/js/5.73c3b6dc.js",
    "revision": "0b94b5effa1fea40d59b4d6260a8d069"
  },
  {
    "url": "assets/js/50.776a7244.js",
    "revision": "62a826f5febe9b110908e63de1d3d654"
  },
  {
    "url": "assets/js/51.510db346.js",
    "revision": "2579b5f927e9339b4562a7271d3d741b"
  },
  {
    "url": "assets/js/52.874f8618.js",
    "revision": "664707f7c78b3d02de1c9e7b1df5c962"
  },
  {
    "url": "assets/js/53.042d2bde.js",
    "revision": "8ae1422fc60c9693a55989a20e4532ca"
  },
  {
    "url": "assets/js/54.9020bd85.js",
    "revision": "7eba5c956e28221d721eedce4046434b"
  },
  {
    "url": "assets/js/55.cca0e32b.js",
    "revision": "3c953917c3888fb52e5c9809e3c6db19"
  },
  {
    "url": "assets/js/56.db368013.js",
    "revision": "6f5fa806c4d971cb6ba10645b2880b08"
  },
  {
    "url": "assets/js/57.c06caa9a.js",
    "revision": "61e8bbd0c9f6d7b9892eba51d243420b"
  },
  {
    "url": "assets/js/58.7e9587ae.js",
    "revision": "a7c48fc2368a98c520756e62b3e08cfe"
  },
  {
    "url": "assets/js/59.dd707c77.js",
    "revision": "80d426ad303dc2944f4acf372f8aaede"
  },
  {
    "url": "assets/js/6.e89d683a.js",
    "revision": "229e84a6a54550b160155f2786f7b13f"
  },
  {
    "url": "assets/js/60.d3ffe293.js",
    "revision": "d73301ff0f5909b56e63ec4061cebcf7"
  },
  {
    "url": "assets/js/61.1e99ae0d.js",
    "revision": "6edef4ea8cc61b546b472db0a7ad4ba8"
  },
  {
    "url": "assets/js/62.42b13562.js",
    "revision": "3007fe9a269337fcf6f2ab4c98086c67"
  },
  {
    "url": "assets/js/63.1b6a64a9.js",
    "revision": "d38a90ce943aeffa430b655a18249605"
  },
  {
    "url": "assets/js/64.72a1e0e1.js",
    "revision": "f2ab66aa2e807c579428c80837e15e9f"
  },
  {
    "url": "assets/js/65.5f2103e3.js",
    "revision": "1b733d036fba15deffd57d714aa430a7"
  },
  {
    "url": "assets/js/66.2bcb1e99.js",
    "revision": "7c976a44513c15e0034f781ae69e3342"
  },
  {
    "url": "assets/js/67.1e1c8fe0.js",
    "revision": "eec5cbc4ffc3d587468049bd642e27d6"
  },
  {
    "url": "assets/js/68.2559f303.js",
    "revision": "833d275b3825c48a5509546f2a793b78"
  },
  {
    "url": "assets/js/69.94fca70b.js",
    "revision": "a5bd064a4e3b9c9f796f440914f587b8"
  },
  {
    "url": "assets/js/7.8280eee0.js",
    "revision": "efc73350b82bd3d40d82f81a25765d28"
  },
  {
    "url": "assets/js/70.56d613ee.js",
    "revision": "d84f6e69a1d5155b26be6ae9b5cf5e4d"
  },
  {
    "url": "assets/js/71.8eb7b85e.js",
    "revision": "1af1c6ccf1aacefd6562a43531ca8055"
  },
  {
    "url": "assets/js/72.018befd0.js",
    "revision": "d244fe519a6d2f45674ffb50931fcf85"
  },
  {
    "url": "assets/js/73.2fed8320.js",
    "revision": "7151f29915c2cf4c756674e5991e15ed"
  },
  {
    "url": "assets/js/74.46aca31c.js",
    "revision": "477911db19d73a2d287b48fe35326c5a"
  },
  {
    "url": "assets/js/75.9c1eaf76.js",
    "revision": "a43459f7c4830e9d3284389683b20775"
  },
  {
    "url": "assets/js/76.89e218a8.js",
    "revision": "2d1d26b4e31e1ba6195f0898a9506117"
  },
  {
    "url": "assets/js/77.0a75328e.js",
    "revision": "6ed35b996c4843dbaea1eacda8b4a007"
  },
  {
    "url": "assets/js/78.889098f2.js",
    "revision": "60632f8f4b8a96b84b9e00240cff7b58"
  },
  {
    "url": "assets/js/79.a5882fd1.js",
    "revision": "daa2ce1da15715bca23880f6ac2f603e"
  },
  {
    "url": "assets/js/8.2da7255f.js",
    "revision": "02011642c45afbccc264292b4fd4aabc"
  },
  {
    "url": "assets/js/80.1cdefa4c.js",
    "revision": "dc560a91bf8f2690a7ce66af9e95a943"
  },
  {
    "url": "assets/js/81.5f4a07bf.js",
    "revision": "05310c2425124c0839dfc9f04161d455"
  },
  {
    "url": "assets/js/82.5972fd91.js",
    "revision": "897ef1a7cca1e308fe60eebb713c3fd5"
  },
  {
    "url": "assets/js/83.9b8b5969.js",
    "revision": "49db7b288c9094269bc77b34eb584de4"
  },
  {
    "url": "assets/js/84.94d70be9.js",
    "revision": "041d275d16ce2e6ed568ca9a28918607"
  },
  {
    "url": "assets/js/85.89023354.js",
    "revision": "78ad5dcd4eab427c1994a53b2b6102bc"
  },
  {
    "url": "assets/js/86.ae7993c7.js",
    "revision": "2b42b1ca9af2c3f519033b34b5882970"
  },
  {
    "url": "assets/js/87.677e182d.js",
    "revision": "9c02ca8ecded62bdf26f9c4012ff773f"
  },
  {
    "url": "assets/js/88.610d65d1.js",
    "revision": "9988dfef0e50307400670a9fc8318167"
  },
  {
    "url": "assets/js/89.d459c67f.js",
    "revision": "e530770dc00ed7b2ec397bda0401cf6a"
  },
  {
    "url": "assets/js/9.9eac863b.js",
    "revision": "fc7469e5da4f47fc22e35184e41547d8"
  },
  {
    "url": "assets/js/90.e8c7c04b.js",
    "revision": "474fbef89e8b02331d2d117dca6345ee"
  },
  {
    "url": "assets/js/91.29c4f5ba.js",
    "revision": "2a5ef9cc9ff34eb9af755edae8b65c98"
  },
  {
    "url": "assets/js/app.44751620.js",
    "revision": "d562e9a1765bd73511a299cca60dc729"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "da11cae75d59f9268a88f19404e83145"
  },
  {
    "url": "categories/front/index.html",
    "revision": "cc40debedd4d5de5f71cb94d3bf79a43"
  },
  {
    "url": "categories/git/index.html",
    "revision": "8a2eef1be49afd71e2f94f4870cd099f"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "ea5116ab2c511f53393490e740b4a69f"
  },
  {
    "url": "categories/index.html",
    "revision": "0867e789ba0f721bc28b700aee9852a4"
  },
  {
    "url": "categories/java/index.html",
    "revision": "680c5baf0cef0bd95a93f8d9827be90a"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "4bdd42e153f2d41d57873d54a17b1f9f"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "2dde79f39ae1f48c7d65f90b93547d79"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "c4e2ac5088237f925c1e66aac3a2d7c9"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "bcba4baa09dd38b975a0a16b88af6ba6"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "f191e035f5d513434a4eabd46834c5cc"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "4ce76ee2413761cb91fe08871c547fb6"
  },
  {
    "url": "categories/python/index.html",
    "revision": "42fd64f2e057d3a2396c4dbd68f0209c"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "ca2593e75909d7c3f5fc51b218b30c99"
  },
  {
    "url": "categories/sql/index.html",
    "revision": "8191609615646e3a232f603e99c3f94b"
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
    "revision": "095b4955b04501a8ba3a9b39ad6e6947"
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
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "7b1b7af0324cd08f5be416105634ef5c"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "85e88264de39c910a7c1215ff5abf4a3"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "da027363d7615f1ffe6ff015ce9be8a7"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "e593f113371c10c27f067128e32e019e"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "9ef47308f3c4b123315ce824862e0f13"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "6cae18de31d9916f71397f2cef2ca3f7"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "91ee7f95d3a028efe3b5ac5799d766fb"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "fe359809ece8558caf1a5ba5d74af138"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "3d944c51a4c353bdefc2ea32e9e3a34f"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "5f71de8f44423cf2371498813d6abe3b"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "f596d5d769d517601d64db81e1792dc6"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "5386c93160c8ff30c1438d31a408c419"
  },
  {
    "url": "posts/hackintosh/炫龙耀7000 hackintosh 全过程.html",
    "revision": "e36fd13221299de5bada99d4edac8f32"
  },
  {
    "url": "posts/hackintosh/炫龙耀7000-hackintosh全过程.html",
    "revision": "e36fd13221299de5bada99d4edac8f32"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "2969ef44121357906c30811fd45343cb"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "3ae15c32a9d02603e3928eb76f95f841"
  },
  {
    "url": "posts/index.html",
    "revision": "d8e516782b62c2710e63a711b756682a"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "b4421a399da0497cb3c0b8e9f81a8878"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "4e0812e250065f16adf26f76755fbfb0"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "fb67e235ad2b6e84a61f059ce8355f69"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "433110aa23e8c6a2fbf40ab900bbf700"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "3ed4e922d1ba8f58584559ce2b023f5d"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "b9d6e4e543d278ca5896c1ec6fc5cd0e"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "4e7da28d0d7737cc9f0cb57ef416f316"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "41b21aa081065b648b06b6840a547730"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "73ba101807ec6fdbcaee6ebd4abb9a58"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "d1f5ea00e8caa3dfcf5317fe1b67856f"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "c3271b8b04001b27fd9cc0de67850bd1"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "cdee2190f58c8e9ae99840d8f0a724f8"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "faafe76880f138caa07aabf1a8134195"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "6f16b2116c17ab89d373c541f5b7209d"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "b369dfe9cbedc96766a6b08abf871be5"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "ed13746833c2a264938cb5a9af7f4a8c"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "6e168cfd04b8c1123d07fbd453092fd1"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "f94d8edfdf20fdd0e898737e01f02d19"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "21c599c2898499098154459f3c992044"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "6f7dd594356c21a0cb86c08865f37f54"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "93da23ce0bf297ffe25527f611f53e89"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "fd0885afd3d9b4025c9d10918d842b9f"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "9862b008fec2304a3a5e388bbe77bd96"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "3d2202e0bf1153e1d2cb7369045f9b3f"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "829111822fbfe3d679dfe6c3a74ae412"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "5c778b90df62f78ee9fe3dfa899f4fb9"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "299f9a355628e5b970ec3f1a9fede3cb"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "a13467c609ecf8c3de027fc34a02bb1f"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "56c638572a5a10f642e342580962ad88"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "15dac0332cb87e16a7ffe8be8fe9be61"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "a127a4a87f79f5bc2aa5e7a13f492fd5"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "8bfb0650852d52c482fa09661a8b96ec"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "c0aa5734a90df3377ef0324445ebbc50"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "de68b0cd3571eb4e7779fb73258074ad"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "6093e81eb83d81169688ed6b4d6aa3db"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "0a12339bab844a661ce772636aec86c9"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "8576665cca339ce12d6f1df249986991"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "aad1dc3e3921db502bcb4adfdd3c7bdd"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "899ba6c209dc7d48e39ca45ede41285d"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "de345cf13b509449c7d0fd17ee8ade60"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "b4509cfba78a77dafbf7d984dd1edabe"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "de6c5840a8c7d61ea3b208da70a0f968"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "2972348ed81d584eaba5e0f0923da659"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "2ecf16c1cf056328bc6a2764c6eedb88"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "e11cd894c9aeda40fadcde0a7253af88"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "6187dfcde18a9093a0fe02f182cf2f53"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "a070b3b99c9fc17256056dd5f7a3f05a"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "49134709d8ea89e06630400f4c9f7f0c"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "001b74f4a5e17ccb318ff65c13c47f96"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "62593db7e40cdbd32bdf7f653fc00830"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "b9dced599745e6c6fc364592cb8da49c"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "16cb355b30d81b071281fe4df5d1ed14"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "b3f5596717f2156efa631c19cfee8800"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "a5dc047ed637a98d5ddd62f8f779a230"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "c08373d7239054367fadba0642e30a76"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "659a947039dbeedbb14b01655bfbf5f6"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "e85d4809289d5abe180ddb615d00750c"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "5e80581af8cbdbad74835ead9cd055b0"
  },
  {
    "url": "posts/python/what’s-new-in-python3-8.html",
    "revision": "cefff18dd6388f4b0bcc6219b8c41679"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "c87adee07b2f8b8c76f42d12a04ef460"
  },
  {
    "url": "posts/sql/SQL-constraints.html",
    "revision": "e933f64bde37bbd538906630bc20b1d4"
  },
  {
    "url": "posts/sql/SQL-NULL-Func.html",
    "revision": "16817f6bb9ae7c13482433fb0069c507"
  },
  {
    "url": "posts/sql/SQL-statement.html",
    "revision": "70e3e8a4e41a6353cf6c2283857735f3"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "0e1307b7ad4590830e5d86ebb2ad1ac3"
  },
  {
    "url": "tag/api/index.html",
    "revision": "7c181cb3188eaa74c0e54aaa32999b39"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "a61d1cb409a0793efa967cc8bbd6b439"
  },
  {
    "url": "tag/context/index.html",
    "revision": "85af175e2b561cfcba13047f1e60aded"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "56ca2834b607650078bfdee8a7b90971"
  },
  {
    "url": "tag/git/index.html",
    "revision": "17cb90dbbfe8f867fb22dc93d194e8b4"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "b8b773ee655057c69fcf76420ea443b4"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "ae8671078366c0388be0b70ca65dc629"
  },
  {
    "url": "tag/index.html",
    "revision": "0a7070e54a99c950c31b52be5b46f412"
  },
  {
    "url": "tag/java/index.html",
    "revision": "79c9b939c8ceeaa42cad885e0e12b364"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "93a1b8c8df48413d4170b5eb326f4ded"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "232414bd1671b9ea878f57b0806c7db0"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "68907b729022fa70e691d2cd1450cab7"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "ff04bb232d1c5861b0cb3b9fffb5f2d6"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "2313c1623d0f8649dcb3d1835310074e"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "823ac41689328358f6f2cf2d9e5f0142"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "087ca6ce9ce70bf1ecf7ee345d3731b4"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "e1b1ba531b5daf81c5dee136ca9c1119"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "0f081a5a67ca1ef528c785623aeb6dcb"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "e79697e5d0a4e6f842eb0841bbcdd10a"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "b0c858f28474e3644a2dc85c4dff6fd3"
  },
  {
    "url": "tag/python/index.html",
    "revision": "3848bb99645a3446762a56d4fc4d66e7"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "287e3979984de09c6d6e7952acd36cff"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "abb04c55d596a03b4f02122fac6096fc"
  },
  {
    "url": "tag/sql/index.html",
    "revision": "31cc5c4edb4cd87f6459a8585672832e"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "bc605ff6f1183edacf9d622c599f9752"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "e2b870ebe5247480bf668b85d0082259"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "31cae09abf2e724124cedbd9f2177868"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "e18ab81316ba219b642ce723135f4a2d"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "52084f0b7c5b7f65bbaaec79df9ecc17"
  },
  {
    "url": "timeline/index.html",
    "revision": "cbd21a5e6592e0a65ea729fe7fe2bc25"
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
