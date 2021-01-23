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
    "revision": "57d40b4c02baf953fa340a95ee5163ad"
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
    "url": "assets/js/10.336696b3.js",
    "revision": "133193a45e207f3912ce953c386cb358"
  },
  {
    "url": "assets/js/11.4ca5ca3c.js",
    "revision": "84883fc74a979ae9f1cf34f845dc45dc"
  },
  {
    "url": "assets/js/12.4db70ae1.js",
    "revision": "ca60d4b07abe8420f690c6e2c908aaf8"
  },
  {
    "url": "assets/js/13.aac271b2.js",
    "revision": "ace5b841773d8f2869a51cc64177bd62"
  },
  {
    "url": "assets/js/14.585d337a.js",
    "revision": "ee33ad8f975f7636525aa465b74c4e0f"
  },
  {
    "url": "assets/js/15.1f4082ac.js",
    "revision": "5a3c42e9511aae7d55af3ff268d3644f"
  },
  {
    "url": "assets/js/16.4faa8e98.js",
    "revision": "aa2ebd92cc8c860f0fbe156fb7bb6e99"
  },
  {
    "url": "assets/js/17.f332a6dc.js",
    "revision": "c2708208ed8f82afc7dc1082dec3084c"
  },
  {
    "url": "assets/js/18.abc6bd01.js",
    "revision": "2a4c462e9f86aa466dfa54b03d776999"
  },
  {
    "url": "assets/js/19.03de04c5.js",
    "revision": "74b72b74382835aaa9651634990d0888"
  },
  {
    "url": "assets/js/20.f90e47c7.js",
    "revision": "5ddac4db92532808e74982402349c30f"
  },
  {
    "url": "assets/js/21.28f53fd4.js",
    "revision": "56233dc4a2a24d4311458ba2461574b4"
  },
  {
    "url": "assets/js/22.b624757e.js",
    "revision": "f8f4b0d336f38114a6ef9b58d473cb92"
  },
  {
    "url": "assets/js/23.34c62865.js",
    "revision": "0516c1e402df0da755a151d8f721c1b6"
  },
  {
    "url": "assets/js/24.6e5a6773.js",
    "revision": "6e41b4a7120290073b68af51009f3bff"
  },
  {
    "url": "assets/js/25.f403d1e3.js",
    "revision": "a66621fa36436b03fd0875190a500ca4"
  },
  {
    "url": "assets/js/26.1864b972.js",
    "revision": "46f25dbaf91d67ed3573a9e090002073"
  },
  {
    "url": "assets/js/27.95d01e7f.js",
    "revision": "c5017a2f0d9ad7e310b399edd988c974"
  },
  {
    "url": "assets/js/28.075b3848.js",
    "revision": "47912f8c606c720152e06c99d643fd6c"
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
    "url": "assets/js/30.15996281.js",
    "revision": "e397742e19767b8e9aa429b8cbb7b648"
  },
  {
    "url": "assets/js/31.23e4e71c.js",
    "revision": "96552281b3fbd7df0fb45b92e851070c"
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
    "url": "assets/js/34.df4055d7.js",
    "revision": "20ede8707a5b2fa65da1613f7e8e4cb6"
  },
  {
    "url": "assets/js/35.e6302a4b.js",
    "revision": "fa02b987365800f5203debc19b256d41"
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
    "url": "assets/js/39.4596c2e1.js",
    "revision": "38c154250ddfca2075381a1e9cb64306"
  },
  {
    "url": "assets/js/4.96a4f898.js",
    "revision": "a14bf9ad47183792edbede46a86dafc3"
  },
  {
    "url": "assets/js/40.a7ddab94.js",
    "revision": "ea9527e83f4d223ed363f24315f6b431"
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
    "url": "assets/js/43.b9f73734.js",
    "revision": "dc698b2d5ca84d9e8978e5dd8f498ebf"
  },
  {
    "url": "assets/js/44.8857d7da.js",
    "revision": "b66160dc7948f17c5876ec0de7fd921b"
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
    "url": "assets/js/48.42232817.js",
    "revision": "2dd049a5e08584069b8968fbae371a7b"
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
    "url": "assets/js/50.cae61050.js",
    "revision": "cb898e3d0e707fdf5d13a9f597fa1423"
  },
  {
    "url": "assets/js/51.b3904f2e.js",
    "revision": "c2bcbda62474859e554e44d8e507ee29"
  },
  {
    "url": "assets/js/52.5eb5c3e1.js",
    "revision": "a1b9c48cf6028b0c500f3591b4805172"
  },
  {
    "url": "assets/js/53.76de2978.js",
    "revision": "45fe9c7475861f2320cb4cccbc57626d"
  },
  {
    "url": "assets/js/54.1d668376.js",
    "revision": "92f2220c776fa31d3a79f50d99beceba"
  },
  {
    "url": "assets/js/55.cca0e32b.js",
    "revision": "3c953917c3888fb52e5c9809e3c6db19"
  },
  {
    "url": "assets/js/56.bf8f79d3.js",
    "revision": "f3d7e6db31e2c23019de9fc054e5b3ad"
  },
  {
    "url": "assets/js/57.f94ec165.js",
    "revision": "a5a360bfdc3b0b7cf08a944e2784f5b2"
  },
  {
    "url": "assets/js/58.315a8fea.js",
    "revision": "c9dca47f4b337d12c857c91aeb5a3358"
  },
  {
    "url": "assets/js/59.9fc076fc.js",
    "revision": "b49cd0311afb2feb125762c5183466e8"
  },
  {
    "url": "assets/js/6.e89d683a.js",
    "revision": "229e84a6a54550b160155f2786f7b13f"
  },
  {
    "url": "assets/js/60.34252197.js",
    "revision": "30693884072e6b4e7d054b50955654eb"
  },
  {
    "url": "assets/js/61.69d5da89.js",
    "revision": "3d2c073150623f670d07a25d06ce8c9d"
  },
  {
    "url": "assets/js/62.3ad9cc5b.js",
    "revision": "16450034f014b88cb91f5cdc5f5ccc86"
  },
  {
    "url": "assets/js/63.9b0cfa53.js",
    "revision": "8716b9af26a5d83e43893aa71971898a"
  },
  {
    "url": "assets/js/64.72a1e0e1.js",
    "revision": "f2ab66aa2e807c579428c80837e15e9f"
  },
  {
    "url": "assets/js/65.bd3feb43.js",
    "revision": "e50b0a15a1f6c1e3493a88d9499e7960"
  },
  {
    "url": "assets/js/66.5ca40c55.js",
    "revision": "449e9f061414344b6042c6f17a1d7a28"
  },
  {
    "url": "assets/js/67.1e1c8fe0.js",
    "revision": "eec5cbc4ffc3d587468049bd642e27d6"
  },
  {
    "url": "assets/js/68.9ea592f1.js",
    "revision": "24d3738d0cf3c7d11701a9fae20e375d"
  },
  {
    "url": "assets/js/69.e706110c.js",
    "revision": "f1dd63b6d7a622a368b66f7c041f244c"
  },
  {
    "url": "assets/js/7.8280eee0.js",
    "revision": "efc73350b82bd3d40d82f81a25765d28"
  },
  {
    "url": "assets/js/70.55d53e6c.js",
    "revision": "44f6742d51a581656226004eab92e466"
  },
  {
    "url": "assets/js/71.bce44de3.js",
    "revision": "1be51d494de411bc9a447e7fc2f67963"
  },
  {
    "url": "assets/js/72.0f1c1ce5.js",
    "revision": "dad56cf83ec4b58254fcd80a3f45f876"
  },
  {
    "url": "assets/js/73.89ad3845.js",
    "revision": "86842acb36f576c1d67588668a707ec4"
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
    "url": "assets/js/76.80959c3f.js",
    "revision": "d19b683cee5888c58e65e4fa8fbbb39e"
  },
  {
    "url": "assets/js/77.613a999f.js",
    "revision": "7b2bb2929f6f3f72f9abd6bc5f45ca67"
  },
  {
    "url": "assets/js/78.14694c8d.js",
    "revision": "dfb71d7ad05ca076cc55537e43395833"
  },
  {
    "url": "assets/js/79.2ea75873.js",
    "revision": "119b39bb2e98321a3f24f43cc109a6e9"
  },
  {
    "url": "assets/js/8.2da7255f.js",
    "revision": "02011642c45afbccc264292b4fd4aabc"
  },
  {
    "url": "assets/js/80.51b5c024.js",
    "revision": "229ebbb523cb9f750f777784571ebebc"
  },
  {
    "url": "assets/js/81.beaa7727.js",
    "revision": "24a7ed1a4b375bb82fecd52919ae67c2"
  },
  {
    "url": "assets/js/82.9ba3ba72.js",
    "revision": "46b704f0b258607f235999404c827cf8"
  },
  {
    "url": "assets/js/83.9b8b5969.js",
    "revision": "49db7b288c9094269bc77b34eb584de4"
  },
  {
    "url": "assets/js/84.7efdb56e.js",
    "revision": "04f0cfe5e3d4b0fe6e284682e2f7565d"
  },
  {
    "url": "assets/js/85.e5a3efc8.js",
    "revision": "e5c236d0f19f1b426065d9f7ec78784f"
  },
  {
    "url": "assets/js/86.2ea8645d.js",
    "revision": "e6be6eb016a0de800dbceffbc24e65b8"
  },
  {
    "url": "assets/js/87.6daa7450.js",
    "revision": "803701b01959c4ec35131e5aba463f63"
  },
  {
    "url": "assets/js/88.92f29e4a.js",
    "revision": "d345512bbd2c449f4cf7e965e0e45304"
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
    "url": "assets/js/app.77b2b6ac.js",
    "revision": "3eb776045a2bcf95149148f69ef7a40a"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "3c6e8d6636d56bd59654fe34bef6a8fb"
  },
  {
    "url": "categories/front/index.html",
    "revision": "e2647d4b719ceda303bb5fc5ffb7ed2d"
  },
  {
    "url": "categories/git/index.html",
    "revision": "2c99ef99423670dc9ba83a73bd12227b"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "1b0d5ee8c6a48e0b5ca516b7a7cf56ff"
  },
  {
    "url": "categories/index.html",
    "revision": "05efe509d1a710503a79ac2ae7755441"
  },
  {
    "url": "categories/java/index.html",
    "revision": "7b811f760e09fdb38478bc0f79e27128"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "5b55acd8675d4084bedee1a37e90ed09"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "15a39852688a6d95e5ad820cc75dbc8e"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "3db3fd7f01486b81bcfc01e86c1f09b6"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "214689bcac2f044c989dee596184623d"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "55241c4c360d9bee0b19b726326b8170"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "860d5764c3b7e70a2a79e5eceabedd23"
  },
  {
    "url": "categories/python/index.html",
    "revision": "f0b3c6676c352939078f9eb2baf01e2c"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "922c4b8d512180ce04f8aac49ed12c57"
  },
  {
    "url": "categories/sql/index.html",
    "revision": "6715ac92d25d1389bb0009f2fa2a056e"
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
    "revision": "dcdf5bfdffde477c5da504546b8c6798"
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
    "revision": "9d2d888f5bc930816aa02fd6cb0345c0"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "23fa1169f93e579d05cd88fec1f0536f"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "6ae6d38a2127e453fc1d22d74dddbf00"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "aeef895a83b910e10f3d1a1367b5844e"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "b00c382a1c1152c8732d9e88b0346b71"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "2eb4f88f2c1e0733dced20647a34d3a5"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "44c1af2a350500b629b3ee66908da055"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "d21c8555e2ee4f0032efa5cbe94267ec"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "0a6d80953ac53cae5a8938e56355f501"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "df02d5758102ea064050b65bc6d289d6"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "5842a1c8fbbd1ad7aa11d55f53106b0d"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "073cb82c7f6553a77fbd29e3f60392ba"
  },
  {
    "url": "posts/hackintosh/炫龙耀7000 hackintosh 全过程.html",
    "revision": "58909cb5c46abf7fd114d691a8c6adf2"
  },
  {
    "url": "posts/hackintosh/炫龙耀7000-hackintosh全过程.html",
    "revision": "58909cb5c46abf7fd114d691a8c6adf2"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "194aa5a7709b4b668703bfd570bd6a61"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "4fca2cd53b712c13d1e665b1d2ee66ff"
  },
  {
    "url": "posts/index.html",
    "revision": "3f1855512bd817e9bb6ed526a2e739bf"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "cfe1f2af3d389e24514daf64bbf7bb62"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "76ca51e1a40898a880c1c10955758de9"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "36635f55ffac1eeeb203ca683d13fa8b"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "1b8046d05d0586c451330a7fc2b283ef"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "68432884843cddffd1f3cc30456498e5"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "7d48577b933834070a0ff9c65689022f"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "b0e41cc24fcf4142313af5150985e98b"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "40f216a47937c1f89e0c8c4d53cff171"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "4bdf5bddd1fba6492e580514220e61b6"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "4ba92e9e24ef36d039e9963c1e314cbe"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "71b5c0cf1523522e9224b9a74adb8c76"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "caf9c97b1755a33cc619c2245be0d035"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "f4b464cb3efd02c4d49ef5ccd38e2bea"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "ca38715f3711d1106f248561201c2c6c"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "e86e0adfb57d2ec629c4b53873c32567"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "95562fb388c32ecbcf674a46bdff7c8e"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "a2e39ca51c9647c10e56339d539f7d64"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "1991c517097a9f7e946a1bb34f122954"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "6626457d8f9c09944c015a6a59f978ae"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "3e5785b95a42e17a3e5acdbeae89e16a"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "f8d6640ac371489b5e412258b9231686"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "35a8fa1eec4f0a582549b3ffc43a1bdf"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "60e2f143324e610ebc11304ac6f25c0f"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "3ae48102192f5a46d06520dce14f9192"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "e4ce60a1e413c02794db91bdbecc42d5"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "77aeb1944821e5cc49699e3b679a7189"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "1ffd1b65730fa152baae4d37e3f897d1"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "85ece5168b0332fd5997a9d03ef9abd5"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "646dc7c39b002886aea49205f6f5a0f1"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "0070e950265cec4cb50c9de240436102"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "50f735d478cf286578d1822a80e6f734"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "db554bd760c9e699c406e95e4379c371"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "08600d1ae9043f2752d0651cfbad3b19"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "afab1e740488434bd1d6f7b71db25b80"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "2012cd3a427dc9f9565b1171eb231295"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "2ea9d4d861a360bfb7e8bfa956364125"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "efeba00c5a1cbd05b8ce0f58b3519269"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "dc4708eb6b9d4015643f16aaf17daca7"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "b667057e6ae062c87c5bcf4fa5eff1d1"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "3aa56edb37d0d11a15dbf59eb74486e1"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "24a97845a97db8f065c579f5410ca580"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "d87d1d9cb25761419dc3bd4d1d322ea4"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "bcc34f830e1c87db85ec4f719c96dd32"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "d6d562498d5413908c44bf5313f50e69"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "bb5ab928482b4366ba066b6be15bc171"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "d8ed149641116287914e46f845344cd2"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "052e106958cd1feb272e3f917467d4f0"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "037d27c20794f1ffa162828567503e0d"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "a1480bdc793e60703b9abaf23656fcf8"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "4c92268c43b0a17aea9b47fa8a6e0c31"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "bb6991b1d8d7d122b6e8be187ed68763"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "417b7604ef3a33f0ae93467b5a1583f2"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "044f22e8784faff184da89d01b7c35ad"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "59250b8b6d198097b4a7bd86039245e8"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "f47c2dee2e34ac073b5419b069179494"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "3538714b430faef03c27d0ab3e5cc26d"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "d86948c953862897c1489b7f8f3c01d6"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "be19d9f4f19d50c88445f6c3498ee440"
  },
  {
    "url": "posts/python/what’s-new-in-python3-8.html",
    "revision": "8b9dc6123094c98f550820740ec4b25c"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "5965ddcf23aabbe1f1196872708c8806"
  },
  {
    "url": "posts/sql/SQL-constraints.html",
    "revision": "48131396ed00f75478c854dfc81fb8d4"
  },
  {
    "url": "posts/sql/SQL-NULL-Func.html",
    "revision": "083fa3cb791a70872cd2ecbd27c6cc34"
  },
  {
    "url": "posts/sql/SQL-statement.html",
    "revision": "cf0ec3ca7f7c90e6ee94a63b6b30b284"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "79b013c9785267f68232437c0a455cac"
  },
  {
    "url": "tag/api/index.html",
    "revision": "396a59c468d0eff50b68261f5824d34a"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "b8a828c2f731f48ea82d41170441d4a1"
  },
  {
    "url": "tag/context/index.html",
    "revision": "025cef7eb67e18625681a1738a89b89d"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "484b4a72a078cb24d74096ec1a0ead19"
  },
  {
    "url": "tag/git/index.html",
    "revision": "84db2c37e50060f1e3bdc2b3f85a8005"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "29963b50d406d16023436deffd19a27e"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "e5a3a004950d14c6789d00c583acecf3"
  },
  {
    "url": "tag/index.html",
    "revision": "bf6c2fb5bd5a4eb8578eb775f4c94ddd"
  },
  {
    "url": "tag/java/index.html",
    "revision": "892dd1ea4fbd21b333288dfd9622d14f"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "a9768ceebe7825b2d6d5972d1d3e4eef"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "49d9f1dccfcee7cefcd6abaac4a18c9e"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "bb13aa5bf47d39df644c41ee6c317fd5"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "24f70ab90bb32f12844f2c0d6206a4f7"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "127b293ccf733de58ba73094ede65222"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "4b99586bc99eee5fa6475f199887f38f"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "1b22601456b1235c26550866a96bfb92"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "18bf4db7ffc0f74b2ad383b4b831263a"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "33fcaf32031ffc7a9213094537c9bc55"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "1cd4f5380e07f1097d455605058d78b6"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "df2ed64514573998d8330a6c5fb40b18"
  },
  {
    "url": "tag/python/index.html",
    "revision": "806f1a93d9c915cd1b4d378a53a0ab90"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "8d59079f8dcb5627b98897de0c3cbe94"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "1a570149757fb75c907b015dfafc1d35"
  },
  {
    "url": "tag/sql/index.html",
    "revision": "99571ff5d50617c2fec66a4db5e7c84c"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "d4d90a3a8ca758e3934dbf3f65f602cd"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "680c92a97866eab2b87a9a98e464e2f5"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "04253729574698c14215b1a670a7e024"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "b0122acca55c4c8e8d61eaeb6f163471"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "5c7f88c4391ec3cde278c2bf70289bdf"
  },
  {
    "url": "timeline/index.html",
    "revision": "241e4138476083bc93b23248a5037c7c"
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
