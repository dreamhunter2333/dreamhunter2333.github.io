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
    "revision": "ffb7cc59bd56667baf0a7acc2d188727"
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
    "url": "assets/js/11.5c498feb.js",
    "revision": "e0420daf342c7cdde9c196a6a07ec5af"
  },
  {
    "url": "assets/js/12.18e16ddb.js",
    "revision": "6ab8871950634ff3874972699c33f12d"
  },
  {
    "url": "assets/js/13.603f6c6d.js",
    "revision": "515969ca66e3701692b488adbe90dd83"
  },
  {
    "url": "assets/js/14.5eae6b6e.js",
    "revision": "421d184230f05f25724e8bc336cd79d9"
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
    "url": "assets/js/18.8bfd03e3.js",
    "revision": "60360866ac9a1815ba5d92ffed06d575"
  },
  {
    "url": "assets/js/19.c616d3e6.js",
    "revision": "54cb30efee211151f66f090507701705"
  },
  {
    "url": "assets/js/20.a40fb07b.js",
    "revision": "a84441052453b52a2ef97a983a5c8dd7"
  },
  {
    "url": "assets/js/21.8780ca56.js",
    "revision": "3cc57d54d10b477aa58ed50cd2ed8d4f"
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
    "url": "assets/js/24.f726b151.js",
    "revision": "169960ae7e39c1c498bc487ec44614cc"
  },
  {
    "url": "assets/js/25.e39cf9ae.js",
    "revision": "2eb5e278250724ab9df275735ae8479d"
  },
  {
    "url": "assets/js/26.b3cc1100.js",
    "revision": "1faee3938e0247db29e9e4d16a1d85bd"
  },
  {
    "url": "assets/js/27.ee363cfd.js",
    "revision": "5b3a980c9b02d2a57db90eeb3598c7d0"
  },
  {
    "url": "assets/js/28.2581a73b.js",
    "revision": "9292ef6f1dee414f7be835c4a71c2653"
  },
  {
    "url": "assets/js/29.59ab165d.js",
    "revision": "250f714c1e98a42b02eebdfcc2536952"
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
    "url": "assets/js/31.341f51d5.js",
    "revision": "ab05e2124c209bcc632abe81fd36eec5"
  },
  {
    "url": "assets/js/32.31952848.js",
    "revision": "aa9466a4dfc0f07b588b734340f8e6b6"
  },
  {
    "url": "assets/js/33.c22ea519.js",
    "revision": "258735de389014939f8e18f891b28075"
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
    "url": "assets/js/36.9a971ab3.js",
    "revision": "7b29c8ce43eeb95a8e4fb0b67ea26ad8"
  },
  {
    "url": "assets/js/37.bfd88c12.js",
    "revision": "7a8ea18a6d0cf91108b57875a3e5243f"
  },
  {
    "url": "assets/js/38.602128a4.js",
    "revision": "9b897308ed5337b5f8621fe74467009c"
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
    "url": "assets/js/40.ad7b3507.js",
    "revision": "0ead34de14f79aa96d9949c45518090c"
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
    "url": "assets/js/43.61d23fad.js",
    "revision": "cd4024d248f931ec263fd7598094388a"
  },
  {
    "url": "assets/js/44.c6042019.js",
    "revision": "40a6969b44e833aa4e00b4c8c9567e1e"
  },
  {
    "url": "assets/js/45.c03c8c46.js",
    "revision": "89386ac20c7e8737364ac54600c070d9"
  },
  {
    "url": "assets/js/46.767742e0.js",
    "revision": "607dd1d67f49c5a89b3f8124a0efc019"
  },
  {
    "url": "assets/js/47.fc64c75c.js",
    "revision": "5281597df9bb61a21d69fe0f2739c251"
  },
  {
    "url": "assets/js/48.0ba0f424.js",
    "revision": "acff3dee682718c2fe5e0993a4a6082b"
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
    "url": "assets/js/50.73f21960.js",
    "revision": "03ec4edd8264de4f6f66cfad346f5f0d"
  },
  {
    "url": "assets/js/51.32bfb2ce.js",
    "revision": "d9ac058dd46f65cbea29c98de8e93225"
  },
  {
    "url": "assets/js/52.6224b3aa.js",
    "revision": "f1c1ee39a3ad9792ed677347ee8e0b10"
  },
  {
    "url": "assets/js/53.7ad19e9b.js",
    "revision": "3e8d443e5d37dba706f74c6e5ac27e7a"
  },
  {
    "url": "assets/js/54.127a5113.js",
    "revision": "eb8737888d19a50a323f51a09c6cc486"
  },
  {
    "url": "assets/js/55.8039e262.js",
    "revision": "cf167c34b0945e0b2774de7f273bbe8f"
  },
  {
    "url": "assets/js/56.c78e61ad.js",
    "revision": "613759bea876a7a680e7562271ace067"
  },
  {
    "url": "assets/js/57.38f96d95.js",
    "revision": "5db3bf8234b89ab271ba235dd8eaa75e"
  },
  {
    "url": "assets/js/58.e8abf1d0.js",
    "revision": "c2d97b2723ddb6b7332adc0886adac9b"
  },
  {
    "url": "assets/js/59.7540df95.js",
    "revision": "806b4e7dc8c73923c04e7a278ff1af9b"
  },
  {
    "url": "assets/js/6.8c14c8dc.js",
    "revision": "2e6eac9bd58bebd57105ddd95856c42c"
  },
  {
    "url": "assets/js/60.f8801d55.js",
    "revision": "8044b6585d76584abfbb6b0f25e85157"
  },
  {
    "url": "assets/js/61.18e3cfde.js",
    "revision": "e24832d11563861792fce56d5568e2cc"
  },
  {
    "url": "assets/js/62.4558ca67.js",
    "revision": "2fa23516e06e14d552b1809e464bd668"
  },
  {
    "url": "assets/js/63.119c0f61.js",
    "revision": "f419f1d895659bc7b4e003c2553c8b12"
  },
  {
    "url": "assets/js/64.70575941.js",
    "revision": "73ba81c642571fc0fe9c440b1740d9b1"
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
    "url": "assets/js/67.60e480ea.js",
    "revision": "7cfa1b8ba534a4b7ad3a3e4e28ae7c91"
  },
  {
    "url": "assets/js/68.37689d44.js",
    "revision": "d6ee7c6add7d0c31be577a1135a9b7c6"
  },
  {
    "url": "assets/js/69.c93b55f0.js",
    "revision": "43eddc154de61753e16aa7c4ec86b946"
  },
  {
    "url": "assets/js/7.8009c1e1.js",
    "revision": "fd5dd10b911f7c0e864a1b32ded58b8d"
  },
  {
    "url": "assets/js/70.c43cbd60.js",
    "revision": "2d3459596912b5c1b1eb7e067a3b2e91"
  },
  {
    "url": "assets/js/71.c15e61cc.js",
    "revision": "045a5d5b95938b34e998fd7bb1670d6c"
  },
  {
    "url": "assets/js/72.51d3e824.js",
    "revision": "26e5802d64f7ca71b13c102da0664493"
  },
  {
    "url": "assets/js/73.95318dd7.js",
    "revision": "87e2ecd4bfd728b17679878def9dc008"
  },
  {
    "url": "assets/js/74.0eaa2776.js",
    "revision": "1ac734a21a0d359f494b44af83aa3c92"
  },
  {
    "url": "assets/js/75.35cac714.js",
    "revision": "6e1fe1ad9cd9cc9ed0cf54e48e78923b"
  },
  {
    "url": "assets/js/76.81fdafe8.js",
    "revision": "851f6e8a2476d09c46bce86b99e2ecb1"
  },
  {
    "url": "assets/js/77.a77655a7.js",
    "revision": "ed747b28de71c65ad563b64a70313eb2"
  },
  {
    "url": "assets/js/78.b3e2d729.js",
    "revision": "2f35f22f38bf2588b4f75a6c752712e7"
  },
  {
    "url": "assets/js/79.135ad9ed.js",
    "revision": "7e7cb80316b456d51b685162e7fc74c1"
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
    "url": "assets/js/81.f929fbe1.js",
    "revision": "da0a2ec4f32f2a053b07dc7c042e386c"
  },
  {
    "url": "assets/js/82.09d4f8f4.js",
    "revision": "87677edd9ff91339a159399ba88e5ad9"
  },
  {
    "url": "assets/js/83.7943fb22.js",
    "revision": "4bcd3567ce422bcba6c1816bf2c5d2e1"
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
    "url": "assets/js/87.844b8b0a.js",
    "revision": "4458035e1fbb487957cf58cfe4257b22"
  },
  {
    "url": "assets/js/88.afe072b6.js",
    "revision": "863996566d8ef490553f7e86066841c1"
  },
  {
    "url": "assets/js/89.f11ea372.js",
    "revision": "f5c11d5d741ecdfaec35d8db64234849"
  },
  {
    "url": "assets/js/9.d18706a6.js",
    "revision": "753bfb35ae3da2c57fdfd302da3244e0"
  },
  {
    "url": "assets/js/90.5a9ea7c9.js",
    "revision": "2d8f9451285a1ae96398a3bea6cb4d60"
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
    "url": "assets/js/app.527b0582.js",
    "revision": "e42fbbcf436cfa594e61bc897508d023"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/database/index.html",
    "revision": "d23d5451ce3123427565032888e08916"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "1b425cf8308b339c0f1e3de5e0b59e0b"
  },
  {
    "url": "categories/front/index.html",
    "revision": "e04e9ec8b29b2e86c59aa39d36116e78"
  },
  {
    "url": "categories/git/index.html",
    "revision": "b4674e1aa06431fc543eebbb2502c007"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "53e86aed0ceb5c1e19f64c6da192fc98"
  },
  {
    "url": "categories/index.html",
    "revision": "6bd0392f1782acaa97e803c0b00bfdc6"
  },
  {
    "url": "categories/java/index.html",
    "revision": "644613a93302c0ac19618ebd6ca5f479"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "09a92c6ace0af0c7b863a44248ff17ab"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "9c78d07868630252b58fab1905f369c0"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "57dad42954e15a230713a9edcd3f9dc9"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "279bb517aa62fff5a7ec0483eda2d27b"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "1d8e50cc446a7dce737f7d29f1261473"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "a7ab16214fb77b13571ddc018cdd93fe"
  },
  {
    "url": "categories/python/index.html",
    "revision": "7028a29396c3d9d66abc1b886549c241"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "b42936aa7f1c6682950c533d0c0be739"
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
    "revision": "efd36e12c69f1ee54ee3fc160df992c8"
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
    "revision": "3b6db8f4367ec06e4b9388cc3f1d8df2"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "3033ded94afb73de23aaef911f83d635"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "1e9a34360f67b90ecb43051739bba5f9"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "5a75e12107794e34f6c0ddbdf8f43ca3"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "22dd06552edf9156f14ee772d6375fb3"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "e46b1dc518e94ef0df46282f9cb17689"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "ab76876e20d156b316087201a1a9f416"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "8caba1a06ec13c8174b9ad5a5d3204b9"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "5d8f8f327e0c93a4d7ce37e61ba1d386"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "30c2944978c43d6060d93b0c20a6afc9"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "b7cdac2b3df2e9bbda96b973a6210c8c"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "6d1de8f2b693c9b46fbb6fceb38cc479"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "ea3577097eb24c11abf0e30d39238149"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "a4f9bf2521521c6cca83ada0d5d63a31"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "c45f7ae7d2c12e93e77daaa49e2eaca4"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "a4996bfc37ba7d0c8f94832c20b620ef"
  },
  {
    "url": "posts/hackintosh/炫龙耀7000 hackintosh 全过程.html",
    "revision": "f4b3089c353f8eef5e8dab993b42c2cb"
  },
  {
    "url": "posts/hackintosh/炫龙耀7000-hackintosh全过程.html",
    "revision": "9ac42703cb1b3ae0708b6b6561a15cd3"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "da0d74356bdaf4fcfc2bce1d10213634"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "3017d24f5c66c78b22c8a17d8a2c6fba"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "5e2a3022b07166de9971b0d4534cb4bc"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "f966ce8bd5f79a29a812184e57fb83d2"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "aff01ebce13d5288606d2fb465b8683b"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "b239d1241f3c532d042ba6957fe4361d"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "7e7dfbdaa57525e97a4dcb9e1e0faca0"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "88a2b0bd2378392e745cbd7179d94c6c"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "2e90b685940390efdc2395645b100d11"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "3057596ea984e7f46e9ba61dd4547926"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "d1cf8e1cef2868890675dfee85490a87"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "94d1ac22d14fd0fc9ae374f934b671dd"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "703547caacc3ad5c38a95dd43cd13b33"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "6a9035e02deb8a709bab9347bf2c79e8"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "408f3045d79dc90e33eee674e3be9b75"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "29ccc8f445a7de3ba845cfba7f993e0d"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "c496a78ca308033ff260d9e033199ec1"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "c50c7947c914c6140c5dde9a189c6af9"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "dcb985a6cdb2c7fe55fecca09f67c4ca"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "1be473cdeb57dcf5734d25bacb0d7741"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "697b78c3c29985878466f5ca1fa6c794"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "673f528b119180e1b1d027cce934917f"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "43d346ce12dc00bb292032716502d33f"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "45f18b5ba553210ee02274e4d8ce5ef3"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "44744315163b9044b2e4022719e17728"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "d53451ff0a6630fe929e883e77dfe061"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "df62154e50d8a1a25811e3b254923a73"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "518f64f81ff9575d447a7286edf11a3f"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "add1f7bb01d7ef12dc91de18c361524f"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "41402f5ecd02b7fdc90edac6458461b6"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "d23bb29feb42c0bd924ed659ed690ddf"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "095b6cabe97db9e0da5421518b7ccb40"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "c93ca983bd74a8aa7d30e49d4a880bc2"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "36ff7190c2893e28d1e0b6e9e6c31540"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "d40393b69921ce050ba0b4435e35b8a1"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "194a89ef30b7624d01206e7e5f5393cf"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "abd13b640207be7f20ce23512b81d7d6"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "ec4ecce2295fa4525c3d6fd704eb6760"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "ec0280ef9960d6dd2d886e840f9fbeef"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "51be817e8e38c1b7d453cb0bf229a491"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "35ef3b54e8d882515cd5216d037aa2ee"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "1fe003f9c6dc944624ccd4c5d0fac800"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "e40a7be7c18c54576c01e2db1dfe9619"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "e47f4fbc98e7fd7a39c01f5c19c64a32"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "8ff934b6a2803e1fe70924b71755dab9"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "818229e18fa6ce03842cf65cd1495784"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "e36356334e2a4574795d694367679a04"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "4d77585b504d55f073a8aef23fe5c274"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "081125a127688d6e5f255dd4c9c9af39"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "1ac11d8ac2047edb3f7bf871f7467bad"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "157e0d18c04f0bf8eaafd86afe035acc"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "ff7b51b772ab298fbbe4b59d53a89a95"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "1624e1d74b8ab47d520d4155e5553b93"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "c0266e9997170fab2945d3e024348fdc"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "8f21194f6e82eae3df35e31a627ebc62"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "0aed1d06d6fd968399c437e95a81f9e8"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "c0c1456567d1f8d8aeec09f607d4b100"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "3f05028bd675be96f1f84328e88f5258"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "50f9281683f19b37a1e65acc3455b6e7"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "572cb2fe2beaf744174f7e3c5c0d4dd7"
  },
  {
    "url": "posts/python/what’s-new-in-python3-8.html",
    "revision": "95edf39b201aca6df539fddb4019607b"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "ae35549815097b2f5102ac3776ba90fc"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "798ddd2fa74226977f4d92585d89bb05"
  },
  {
    "url": "tag/api/index.html",
    "revision": "ba26ca740ca9f187fd87bd6b12f2486d"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "71caa8556b6ec250f311919939cda61d"
  },
  {
    "url": "tag/context/index.html",
    "revision": "6a461229440f337b570765bb00eb6ab0"
  },
  {
    "url": "tag/database/index.html",
    "revision": "80cfbc4114d7bdb053245c0fb49f0d6a"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "16a82c5df857354d8551f15da2931634"
  },
  {
    "url": "tag/git/index.html",
    "revision": "709e0bbe30dc1352b55a879403ac6ebb"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "2f278e8dd01e09d98296b70d19aa21f5"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "08c2e3ce98e1e973b72edc3c16d0f7b1"
  },
  {
    "url": "tag/index.html",
    "revision": "f074429a161ed123f41aa5a0f5d482d3"
  },
  {
    "url": "tag/java/index.html",
    "revision": "712837e5355ea5d4449f5e1e5783b430"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "71c2c89d8f3c0493f403c599fa8d470d"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "4d9cc5f57920dd4ce4ec09dd0a4d0d76"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "7229e7676c59c5cad669d7d87d4988f0"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "c85d69386d10cfb6bab76450e674e273"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "da1c786e29344276c2d236625d9eea93"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "b93f0b91605c38db56a0032b948136ce"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "e9dc2f5ea40c2b3ba162dd3c26e24666"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "7a9f64a62f47a3c7ddb04c83a82b4548"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "a795eab0ce5e8af8ac1091abf79c662d"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "4ebe3f6a2c2d922e371d76ff253aad3c"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "671edaffea2541ea1dba8d780e2b1c03"
  },
  {
    "url": "tag/python/index.html",
    "revision": "bf20b09a19368eccca6fcaf885d42f07"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "095a40f415c7aeec55dc0d6aacf9cdf1"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "b048be1d7e30a408b30720a26728aad5"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "ac23b1486fe15958a7654fc8a3cd7f7d"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "547806a491a2abeda01b2f37779551be"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "0eaa7e2bf405271f46dada4896607cbe"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "cc65742b080748bbd35d92e46d9a7b8b"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "a79c9e0aa08d952162a4cec4944c2f96"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "50f6471265383993946054aaeb249dc3"
  },
  {
    "url": "timeline/index.html",
    "revision": "bf3c4358e08423d0d8d7948e76545d0c"
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
