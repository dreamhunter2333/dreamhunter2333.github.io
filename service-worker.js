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
    "revision": "00839a7988b11d3e298442a5358d04a9"
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
    "url": "assets/js/12.18e16ddb.js",
    "revision": "6ab8871950634ff3874972699c33f12d"
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
    "url": "assets/js/15.48d078bc.js",
    "revision": "eea1aecfbba2ceba32b4edcbadfb3ece"
  },
  {
    "url": "assets/js/16.d46b7c39.js",
    "revision": "f6f70face9093e7fc7709468ef0d9e5e"
  },
  {
    "url": "assets/js/17.bdb1ec53.js",
    "revision": "dec23604876eb789f19431a0cc93cc82"
  },
  {
    "url": "assets/js/18.6c8f6620.js",
    "revision": "bccaa750865e29e718dd0d930addbf58"
  },
  {
    "url": "assets/js/19.81035279.js",
    "revision": "24f564ba43c980aa2e16746fb65e7d90"
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
    "url": "assets/js/25.b2edc146.js",
    "revision": "376a1a9fa8a08e8991ecb1f60b8b6887"
  },
  {
    "url": "assets/js/26.b960a106.js",
    "revision": "0b02aafa4ddc51c0202f575be88c2ff8"
  },
  {
    "url": "assets/js/27.8c583fa1.js",
    "revision": "b7f3cbfc0a1f2910d30d2fcaacde7e75"
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
    "url": "assets/js/31.d3d6f648.js",
    "revision": "1ec7f96764cd21c46fefdecd8eb67d94"
  },
  {
    "url": "assets/js/32.8c466590.js",
    "revision": "9efc2eedcf1e26c5d26070e2b1641dbb"
  },
  {
    "url": "assets/js/33.c22ea519.js",
    "revision": "258735de389014939f8e18f891b28075"
  },
  {
    "url": "assets/js/34.57d6e2d6.js",
    "revision": "25c27ac51fcce1b0584b5901b2b517e3"
  },
  {
    "url": "assets/js/35.50fe0a44.js",
    "revision": "5cb37b2ac14e2d70e3ff3d3a751c86b7"
  },
  {
    "url": "assets/js/36.34ef2c2e.js",
    "revision": "a36f7b93bf7f5a21c1c0b98c0b854d19"
  },
  {
    "url": "assets/js/37.f0d0bc24.js",
    "revision": "30789e7c5e351200e157278d1f6ea6cd"
  },
  {
    "url": "assets/js/38.2ff76d17.js",
    "revision": "28b8a087bdc3ffe88f84f25e85889b2f"
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
    "url": "assets/js/43.3f510a48.js",
    "revision": "5ec06f51114047ba26d533e907801c7f"
  },
  {
    "url": "assets/js/44.07279fd4.js",
    "revision": "b9f8f16c0344ff98f191753bfce56402"
  },
  {
    "url": "assets/js/45.6529396a.js",
    "revision": "812726dcd6bf68267d43bba741468968"
  },
  {
    "url": "assets/js/46.3c336f3a.js",
    "revision": "4fdfafd91d53e0e6458816ca587d0cfc"
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
    "url": "assets/js/49.aa416d05.js",
    "revision": "35c751b0ee48f17d42f42c025233e714"
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
    "url": "assets/js/51.8fc1f538.js",
    "revision": "fc2e797c891f612331c241a841d00b30"
  },
  {
    "url": "assets/js/52.630a7907.js",
    "revision": "bc7df90f36e8175cbb8098476a1a714d"
  },
  {
    "url": "assets/js/53.687c698b.js",
    "revision": "e8ddf4c6d0bad0b07d64ca3438864f3d"
  },
  {
    "url": "assets/js/54.127a5113.js",
    "revision": "eb8737888d19a50a323f51a09c6cc486"
  },
  {
    "url": "assets/js/55.8d958e35.js",
    "revision": "3bf9af6ca9159e7c583938ef478be8fd"
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
    "url": "assets/js/58.3f75ca87.js",
    "revision": "08b74d37356510eaebcf558b54f191aa"
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
    "url": "assets/js/60.f8801d55.js",
    "revision": "8044b6585d76584abfbb6b0f25e85157"
  },
  {
    "url": "assets/js/61.18e3cfde.js",
    "revision": "e24832d11563861792fce56d5568e2cc"
  },
  {
    "url": "assets/js/62.f10d7849.js",
    "revision": "642cd2aa8cfd2b47fef5ed7fe076ac2a"
  },
  {
    "url": "assets/js/63.8b1f27c8.js",
    "revision": "cf28e3e66138eabf6071c29b384f88bf"
  },
  {
    "url": "assets/js/64.70575941.js",
    "revision": "73ba81c642571fc0fe9c440b1740d9b1"
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
    "url": "assets/js/67.383940ae.js",
    "revision": "08faac3029fa06f11f1687ec78f1e23c"
  },
  {
    "url": "assets/js/68.95aa69cc.js",
    "revision": "6643de16c9bfd65d0ec59feddec8585d"
  },
  {
    "url": "assets/js/69.4916b2fd.js",
    "revision": "2237fdf201b0fba3278fdb09321a2497"
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
    "url": "assets/js/71.87a0b603.js",
    "revision": "788ef3ff9402cbe8a1e513f865ea9f49"
  },
  {
    "url": "assets/js/72.51d3e824.js",
    "revision": "26e5802d64f7ca71b13c102da0664493"
  },
  {
    "url": "assets/js/73.8111afed.js",
    "revision": "479bc5af23ddb719f0c44f79a8693385"
  },
  {
    "url": "assets/js/74.9516842a.js",
    "revision": "101e15ee9c1e91df8569c27fc54936a3"
  },
  {
    "url": "assets/js/75.b77f9fda.js",
    "revision": "b4b98e320b9a03966a31c93cb2baab2b"
  },
  {
    "url": "assets/js/76.b5fbe494.js",
    "revision": "aefbb3fbd79495c101da33a13e803a7d"
  },
  {
    "url": "assets/js/77.eae31aa7.js",
    "revision": "76acf36fbf005c50320daedbbd2096fd"
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
    "url": "assets/js/81.632ee087.js",
    "revision": "f2b930a7f513abdf540e1540fb2120c0"
  },
  {
    "url": "assets/js/82.ba7d977e.js",
    "revision": "e74522f1f6bdca5975b8282feed85f03"
  },
  {
    "url": "assets/js/83.7943fb22.js",
    "revision": "4bcd3567ce422bcba6c1816bf2c5d2e1"
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
    "url": "assets/js/86.261449a3.js",
    "revision": "b597f2c15cd45dba9ff5d7f36ffda92c"
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
    "url": "assets/js/app.06476c3e.js",
    "revision": "1ffab91dee9f4be8d88fea4e197298db"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/database/index.html",
    "revision": "5d82708926e5f6a3c0ab6c17b453efb0"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "31f7cbd8732a4bb834a543c33f525b83"
  },
  {
    "url": "categories/front/index.html",
    "revision": "9778632be2750e407e7cfe76c9aa26b9"
  },
  {
    "url": "categories/git/index.html",
    "revision": "546405c568bdd1c03f554eb7836e11e2"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "78667028e38cd85ada69a7c09c977255"
  },
  {
    "url": "categories/index.html",
    "revision": "9747e3ae9cbd71394cb7c2fa90866336"
  },
  {
    "url": "categories/java/index.html",
    "revision": "a3b78f1a136eba7ef7aff242db73890f"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "003972e4575633ba1bb28ddb6d0227f8"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "2671c8a4b765bf241f67662775ee24b7"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "a4109433b368c9958bec817fd0663189"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "c6afc80b16b5756e7fc04730a4cde072"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "566687108fd2eba6d317ed12ae334068"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "3774cc6d7f09d6bfe0351270f5961546"
  },
  {
    "url": "categories/python/index.html",
    "revision": "5e8d5f5cdee15995c58faeda0cfdc612"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "d9e6ddb998f2975d6b0d17094f8980ae"
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
    "revision": "c5c635b33058ac3025139ccc5c873c90"
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
    "revision": "11193faa75c82535a1578039b129453b"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "f2809a4af5b5e3562e6fa0a7378c427f"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "94cc7c4b837ad4a000d939db03b726d6"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "b7cd71438645a65324d0a70c60bbb81c"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "d00c1e038e0cb0435142cd79a3d6cdee"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "365c7f39936549c5e60104af06202970"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "c06a37351e42403ee84cabd8d7ca46e7"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "feb6cb76b8a12babb5caae9a81c3e248"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "f8d62c3b432ee9a0129fe7945482107a"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "6105fe6bc57de122460a2982cd097344"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "e2fc4825de8a815c999f4dab845f58b5"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "56e14893d4b6afd70fa0f4658cb9d228"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "b6bcd748e3271516e893202587573092"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "1888df854a5086a871cff59f8d3b1bdf"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "88b6b10dde8c362cda5b72967ad60d68"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "7e4d3b0fda5adef769f6cdc345b4a0e2"
  },
  {
    "url": "posts/hackintosh/炫龙耀7000 hackintosh 全过程.html",
    "revision": "62cdf10663f520daf92d9f92b8e4ea6a"
  },
  {
    "url": "posts/hackintosh/炫龙耀7000-hackintosh全过程.html",
    "revision": "fc0e1462e549abbb8792e378d424f355"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "02a18937bab417738be7bbbcd21b4b51"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "181124f443f53ed0f36eaf3d8a5356df"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "b66516e74742d29a9a891d72027524d4"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "ed8657d6efe1d419fcc6e81c8488eaac"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "e2acc7da88294a775fb3df7b426d08b8"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "f797422de2fdae500da0abc003cdbb70"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "33448791571c101fd1d87762adf923f6"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "1752eaa4711d08b638ce854ca579925f"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "edda5c83e0a58541882bf6abf6ac2a22"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "ec1c803b0fbf42c51b9caaaf819514e1"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "7f7667ba187d0edf03fc3b18eace590c"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "a1a15dbff257631045b95348fd4c6e94"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "41a574817b8986f44df7a6897e1071cc"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "31288524bc1c6cf6845bcad1c0763771"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "15aacf721f773367c9006acced8b74be"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "93b0b020cc360dd2a48b49dded935450"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "99be1a48967c509523d95a570253ac63"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "77e4a9126c21f8311c894e70e4db4db6"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "3d7268e025ec2295a51df83905d7885e"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "01664b09be2502b463640f5554c4f562"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "c4915cd7612a362c98b94ff39fe5ef4c"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "0faa5be35119ee1b1891a6b864ba9169"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "f0307242f97769926b1ed7b5bd82225c"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "3280abed41ca3f70ec5f0341ab3fbe4c"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "6d062229d156afad7b7e184e5715412d"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "5b631f5ec76978cedaaaa2a1f1865159"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "f0eee35ee4e395b0f27f46a242368669"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "42f75d80e633be121f8250e016c8fe0a"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "881b2fa9199d598b9dc82f84cc969d2c"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "69a9bf57dd64bd7513cce848b66f69b4"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "515f6cd275305997ef2cd0850c7321da"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "0c3f7d1af6d26ea57b4e9b364ef9bb8e"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "02e1af9440e8c7cc773573a409f8c492"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "953dec6a9cf385b631f68ca87a57b7f7"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "3311a1521ac78e56d2b96e3e8c147490"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "b6a17d723bd0a43ee92790a27bbfb068"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "97a7afa47eac85834d82774cebb93c21"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "d38eecbd994f32693e3052577aaa7fc2"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "1addc125c6d2aa49c318f4501058c68a"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "a458f34d5bbc842e0cc075ea15291ee3"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "14b01117124b3caed4f1ac9af5c1ad7f"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "cb37fbb7eab99ef56e7a37236d8c0e27"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "3a5061404ee055b0c4aa8bb2caaf9e81"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "21dabeb76520bc2665dd434a5c42bffc"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "2654a6150f0c18dfd68d9df7046548a1"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "4cdd99484ab483e438b71c8fde253c31"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "f7a3941cb2a26b64349eb7b63284143d"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "b3de6b9063aa19f81502b6777db0fa38"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "afd680263242538bd369b6f23bde20a2"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "e070a515844958b4400fb09de45dfe29"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "5f01030d87ab34309e0e97a31d13be61"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "05a09d76d01e19d57fc7ea7aa5d8ff99"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "27f47196cdc36152d7a718effae3cac9"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "8df038820f2e117104eaca6e87bfbb09"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "c7e187c0db5c0b01330e51b2b95a66c7"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "c40d813383ee9298bb38ac8fcb3e65fc"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "6d1e38588806c155cd15df151b0ea9fa"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "1a05c233b7bab48e1f7d90c52d92003f"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "389076dc5503a0db93a9c2c45687af83"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "9f5ed065d1c5bc1845ebd73fc191e96c"
  },
  {
    "url": "posts/python/what’s-new-in-python3-8.html",
    "revision": "cdeab61e4e92e85a05cfc86d00240a98"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "8da61766892681a05baa682d0d02fd20"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "2e9d8eacac27fa04f5f4b847af6b6a64"
  },
  {
    "url": "tag/api/index.html",
    "revision": "73e6a0fcca02618f8c0839cd78d8ad8b"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "a2019a315ca9ae6e305ab0af747903cd"
  },
  {
    "url": "tag/context/index.html",
    "revision": "7bbec772e3c41771e24d1a45228d5636"
  },
  {
    "url": "tag/database/index.html",
    "revision": "e277edd2237866c11fa391b6e8f57f0d"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "a99c0b28bfe8733c091b25d9689b70da"
  },
  {
    "url": "tag/git/index.html",
    "revision": "369b25337e3a1c0ece848e2c0e74875a"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "4270e642d46318ea1cecdae9ae7fb6b7"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "243f31aa5fb8439a0ad1d8d62dfe098a"
  },
  {
    "url": "tag/index.html",
    "revision": "ab1837d8fe7108aa77862d2d5d73ca34"
  },
  {
    "url": "tag/java/index.html",
    "revision": "0bc8d50d308f047b29eb3f612879be6a"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "453f80d070c5d63e09690d5d0de6b934"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "0b255c2dc716ae0390f3792ea82c7006"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "e70ef74edbb46dd2fbc7804231de4906"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "4845bfa60a15ca1430ad46864d92233b"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "60bf8a03d07b620858ecff2bb884728e"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "12fe4fcde431bfb7e84e64d0b46bdcbc"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "0648bff8ae5b89701f3965d7920f90b4"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "5faf1dea6bb1b48a2761c70d1b505f9f"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "38abc21b59270f6ef3e14fb3cb23be55"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "9cec870408c2607238e84c7891da95d9"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "45cad151b20d87ff59e1c7d8b4d47200"
  },
  {
    "url": "tag/python/index.html",
    "revision": "25d6bbb25f7e8fbf01752d4f68452f88"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "8fec77eefacb93a2ca56a305f2144d46"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "5bdea0e4fddb62c9f4f467da41632239"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "d8ed7ce7050d81c68c94d0c91652c6a9"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "eb5f70bff46c5474cbc9b1767402b893"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "e455cc9fd93ad06ea87b42bf896fc22f"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "4019fbcc623f827cfa673b0d9a0e2990"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "ad94bf15894c092b113d1d3c029156c2"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "0415d8bd7ada9213d749a57691b8ad95"
  },
  {
    "url": "timeline/index.html",
    "revision": "a82d0b669065819fd8097bdfc0564d45"
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
