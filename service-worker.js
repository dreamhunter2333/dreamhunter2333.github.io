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
    "revision": "030f01e753751657b9945cf9d66c74b6"
  },
  {
    "url": "assets/css/0.styles.265e6e8f.css",
    "revision": "1d2358e6604b30e07d66f70b0431d164"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.bb4664bd.js",
    "revision": "e708ee96ffef90a3d1690eedc50f2c55"
  },
  {
    "url": "assets/js/10.2eac6f99.js",
    "revision": "07efbb75918164819d453472eed2ca2f"
  },
  {
    "url": "assets/js/100.fc67e2e1.js",
    "revision": "98a6abdcdc336f1595d349785d4ba946"
  },
  {
    "url": "assets/js/101.0422ef08.js",
    "revision": "291316c881d51a5d43184ccf789abb0d"
  },
  {
    "url": "assets/js/102.2cb83731.js",
    "revision": "a75cb01322b562c94a76d913d05923a7"
  },
  {
    "url": "assets/js/103.d51ba43a.js",
    "revision": "be8a2dfa7819f3ee827468828f859003"
  },
  {
    "url": "assets/js/104.ce17ed6f.js",
    "revision": "65f9226e417696a6abafc9cb966322dc"
  },
  {
    "url": "assets/js/105.a292ca31.js",
    "revision": "ec471db3c99072a74f1f9375c4e698e7"
  },
  {
    "url": "assets/js/106.18039626.js",
    "revision": "5d522b5f8ee6b341cec3be4fa95460d8"
  },
  {
    "url": "assets/js/107.10f695c1.js",
    "revision": "35ec02154b5b01df66a5a7f777e7c20f"
  },
  {
    "url": "assets/js/108.2f62af4d.js",
    "revision": "c5b2609d846724bd846b8315e7f486ea"
  },
  {
    "url": "assets/js/109.ef873ddc.js",
    "revision": "fc81b74ba7cb9d35313e0705dddf2c8e"
  },
  {
    "url": "assets/js/11.47bc4a45.js",
    "revision": "19db9262a8fc3992fe235d51eaca259b"
  },
  {
    "url": "assets/js/110.e3cf3282.js",
    "revision": "d6d3f26621b5a101bbb3c1950b1d4254"
  },
  {
    "url": "assets/js/111.3d412741.js",
    "revision": "ace3c9100368053cb6f75325752c15e9"
  },
  {
    "url": "assets/js/112.a0b1e240.js",
    "revision": "2dc266572923bd6a329e4980595ff014"
  },
  {
    "url": "assets/js/113.834087ba.js",
    "revision": "7e07b7a30f62b693ac0ef4d52ad148e2"
  },
  {
    "url": "assets/js/114.cdffa639.js",
    "revision": "6d428aaa1f3067284778ac292ba86a00"
  },
  {
    "url": "assets/js/115.f3b0c2fd.js",
    "revision": "f66661618a1ab43f4a6b3ca4269c7ddc"
  },
  {
    "url": "assets/js/116.ec78342b.js",
    "revision": "b1000ac265088db2aae83d61ea9b4e78"
  },
  {
    "url": "assets/js/117.951c33b2.js",
    "revision": "3555a4dc23e3df6dbfca48ac4e6eeb61"
  },
  {
    "url": "assets/js/118.41054ff8.js",
    "revision": "ff4c5b38abf17df9c9b75e238a4f024a"
  },
  {
    "url": "assets/js/119.047a18cd.js",
    "revision": "f5a78ee54ead721d633caf6f64b1c126"
  },
  {
    "url": "assets/js/12.503e8ef8.js",
    "revision": "c9056c7445755f995df8f6aaa7f57b49"
  },
  {
    "url": "assets/js/120.131e8a29.js",
    "revision": "4e8ee130cb2767f893b1316a7dc76237"
  },
  {
    "url": "assets/js/121.eb66e4f3.js",
    "revision": "d9397ac2ff8cca5ec654f2ae3da029a8"
  },
  {
    "url": "assets/js/122.c155a94f.js",
    "revision": "6d97480e528b60ad019767b5eddbfd84"
  },
  {
    "url": "assets/js/13.164f57c7.js",
    "revision": "54dae3fb5de3728b317f3fa8b2a876f2"
  },
  {
    "url": "assets/js/14.4ce96ccb.js",
    "revision": "01bd793d0020ff0bb17b5224b6089e1e"
  },
  {
    "url": "assets/js/15.bc79dac7.js",
    "revision": "a72ae50e2a513625f709c7e34c2be040"
  },
  {
    "url": "assets/js/16.c82eb0ca.js",
    "revision": "09f6fba0fb2118b05f27fb1eeada991f"
  },
  {
    "url": "assets/js/17.9f4d4a1b.js",
    "revision": "f978e6d5086f7f98a389fb987cd20632"
  },
  {
    "url": "assets/js/18.e849d647.js",
    "revision": "7ca20733c0797141dee3f421cbc8b42f"
  },
  {
    "url": "assets/js/19.5b02aa45.js",
    "revision": "37730126a45cf206e3c199b81196cc0b"
  },
  {
    "url": "assets/js/20.131476ea.js",
    "revision": "8d9364cc7d1b47bb686ecd0d3dd8a37b"
  },
  {
    "url": "assets/js/21.4716925c.js",
    "revision": "892dc5a4a92c107ce91a6156f18b6aed"
  },
  {
    "url": "assets/js/22.97386cb3.js",
    "revision": "a2d922895b5d668ef9a2eb6102db379b"
  },
  {
    "url": "assets/js/23.9bc9c467.js",
    "revision": "42618307b9515d15a40e728fc39dedf3"
  },
  {
    "url": "assets/js/24.48134e73.js",
    "revision": "f72b35b768abd593659276e692f9c1c6"
  },
  {
    "url": "assets/js/25.b9c58e4f.js",
    "revision": "3a06171dabebc884da94dee3f6c822f4"
  },
  {
    "url": "assets/js/26.33355696.js",
    "revision": "6e2d37099d0bf9b77633902c76fdd093"
  },
  {
    "url": "assets/js/27.5778fe0d.js",
    "revision": "f139dcd4529ce69770a7a461f477e5fa"
  },
  {
    "url": "assets/js/28.e2b1cefa.js",
    "revision": "5261c59f25e535b40d6d55d408fef8c7"
  },
  {
    "url": "assets/js/29.6f553c54.js",
    "revision": "4a96c81dd527459348e66798ce20d110"
  },
  {
    "url": "assets/js/3.e695c8c7.js",
    "revision": "4d459231e81e8615422ae8d684d914de"
  },
  {
    "url": "assets/js/30.f56c1915.js",
    "revision": "861940c1a3d936d820d4ca5d7ae6a54f"
  },
  {
    "url": "assets/js/31.75e58f6c.js",
    "revision": "9eb853a17a9ca3d7e8482ea35bde6cc9"
  },
  {
    "url": "assets/js/32.f68a5ce6.js",
    "revision": "7926827a024dbae54958f069199271a0"
  },
  {
    "url": "assets/js/33.b87a7f5d.js",
    "revision": "f27cf34ec601629f65a77bc78268a06d"
  },
  {
    "url": "assets/js/34.17e768ab.js",
    "revision": "b471bd1e4bcbf22e5e6f860b7a2ea597"
  },
  {
    "url": "assets/js/35.33f130ea.js",
    "revision": "8851bf0631de000e40ff38de717e8ef4"
  },
  {
    "url": "assets/js/36.56c3e4ba.js",
    "revision": "02b11196642310786d6eb70ade238731"
  },
  {
    "url": "assets/js/37.1d2ac28e.js",
    "revision": "6c92fa7c838776b6a723a6e4fe9580f0"
  },
  {
    "url": "assets/js/38.5a3791c1.js",
    "revision": "accce95b2fc2fc397131cc5e8fc204c9"
  },
  {
    "url": "assets/js/39.4b09289b.js",
    "revision": "08b6537f8aae5f3841cc5a0116627819"
  },
  {
    "url": "assets/js/4.86f60908.js",
    "revision": "3d06712d892240a28aacad8852f306b9"
  },
  {
    "url": "assets/js/40.da91c5a1.js",
    "revision": "ff0c381629640200bf9015d9addf061f"
  },
  {
    "url": "assets/js/41.eaa69144.js",
    "revision": "dd69a8d1730dea8637243a4d2e7ba121"
  },
  {
    "url": "assets/js/42.1137a60e.js",
    "revision": "fe7e194f2098e15a27ae56ed74b23928"
  },
  {
    "url": "assets/js/43.7aa74c8b.js",
    "revision": "9261e3a56bceadccc8c27a4dd0423c3d"
  },
  {
    "url": "assets/js/44.c278a5a9.js",
    "revision": "6d19f1415bd621b4a3dedfacf7c3e491"
  },
  {
    "url": "assets/js/45.f37e76e0.js",
    "revision": "7636f3527f94789edee71d4f29ee660d"
  },
  {
    "url": "assets/js/46.8df26c8f.js",
    "revision": "86f212727ad0031d27679cba38a8f8ef"
  },
  {
    "url": "assets/js/47.91971c6a.js",
    "revision": "4d8bf3ed1d572172dae93bcb7fc56d61"
  },
  {
    "url": "assets/js/48.7d187200.js",
    "revision": "5a0ea8c13e80250790256295841e9936"
  },
  {
    "url": "assets/js/49.bb8fc5c3.js",
    "revision": "e64ac98a6ab149ab3b37a29ed9cd63ad"
  },
  {
    "url": "assets/js/5.27f06f69.js",
    "revision": "c792f4fa73d87062ee85435ba0618451"
  },
  {
    "url": "assets/js/50.16665421.js",
    "revision": "750c63e02028cc2a980ba9164db8e21f"
  },
  {
    "url": "assets/js/51.01a12454.js",
    "revision": "1397de3649946c87804ca93d1a6dc8d6"
  },
  {
    "url": "assets/js/52.8c4505fe.js",
    "revision": "4818bef249e77cb9eaccfc51471ed543"
  },
  {
    "url": "assets/js/53.e1ab4a91.js",
    "revision": "a93f299c5ae23aa091905107ec8f68ed"
  },
  {
    "url": "assets/js/54.b37e4a94.js",
    "revision": "d1e3fb78185fa585e3e5b6df11eb8061"
  },
  {
    "url": "assets/js/55.5bf8961b.js",
    "revision": "a2abdc2baa6f4f636c1e0fedd2294f8a"
  },
  {
    "url": "assets/js/56.f4eb7ed9.js",
    "revision": "eb2ccd9c498825c9b9ae84f5edbfb192"
  },
  {
    "url": "assets/js/57.4f1a4297.js",
    "revision": "a476593971c38f2ed4a7d637b22bdb96"
  },
  {
    "url": "assets/js/58.3ebbf808.js",
    "revision": "b3816254406a64b47ee703fd6611df1a"
  },
  {
    "url": "assets/js/59.2286a334.js",
    "revision": "e0270bcfd93580af53a4a853cf5c76ed"
  },
  {
    "url": "assets/js/6.354dc403.js",
    "revision": "02cf03ef48a6dbc4db87069885e9a6e7"
  },
  {
    "url": "assets/js/60.bda43041.js",
    "revision": "7edae08ff6e7821ce2083af3f112f3b5"
  },
  {
    "url": "assets/js/61.33fbd060.js",
    "revision": "919d85829183a87bff955c630f7d4c7f"
  },
  {
    "url": "assets/js/62.8162bed0.js",
    "revision": "e096ff9ccdb2fd6abb9c26aa5ee5ea46"
  },
  {
    "url": "assets/js/63.1707a0d1.js",
    "revision": "3dc38939da9f7a91b16800d4b799c91f"
  },
  {
    "url": "assets/js/64.185034e5.js",
    "revision": "788c6ccdc464d4863f7062cbbe3c80fd"
  },
  {
    "url": "assets/js/65.8a2bdccd.js",
    "revision": "8dd5f5794c47cd4d038f39ea8730bb34"
  },
  {
    "url": "assets/js/66.5206e3bc.js",
    "revision": "95339547c031a1c54bd52d3975df5178"
  },
  {
    "url": "assets/js/67.5f1eb23e.js",
    "revision": "c0953222d751bb0888fc57c083387eb8"
  },
  {
    "url": "assets/js/68.8a7d5c5b.js",
    "revision": "e6bf75b58d1c060ec122caa84b73c755"
  },
  {
    "url": "assets/js/69.c394dff2.js",
    "revision": "a200c732e1ffbfd7c501d6891f9ca977"
  },
  {
    "url": "assets/js/7.10f00ff4.js",
    "revision": "86e4d2ed660f70d29ac03714e7596bb2"
  },
  {
    "url": "assets/js/70.27e9c095.js",
    "revision": "aefc31df5e23897a1c90c2431ca4ed17"
  },
  {
    "url": "assets/js/71.2d75fbcc.js",
    "revision": "0e0b6fbd6147da8ed5656f1d11b9cd6a"
  },
  {
    "url": "assets/js/72.596bdfbe.js",
    "revision": "a70b2f48dd89ad2c3cfa5b87eb2a277f"
  },
  {
    "url": "assets/js/73.3308e2cc.js",
    "revision": "823a02644721e32a1c18673d84f21f56"
  },
  {
    "url": "assets/js/74.4c1ebe66.js",
    "revision": "a563e8f323d9aa0e1f96cb6c1c1f2366"
  },
  {
    "url": "assets/js/75.4aa0d3f2.js",
    "revision": "6f87b984604eccfdb1f189b1ca98c077"
  },
  {
    "url": "assets/js/76.a11f83d3.js",
    "revision": "887d5428f3900be3fdea935933486a9a"
  },
  {
    "url": "assets/js/77.42e46b4c.js",
    "revision": "8edecf88fe5a1901cea9284c51118780"
  },
  {
    "url": "assets/js/78.4164dc16.js",
    "revision": "d8e51cf1be474815464e16bc31b1a9b0"
  },
  {
    "url": "assets/js/79.996a0e9a.js",
    "revision": "60ad33ca00ecffd4ce44737665c7cb1b"
  },
  {
    "url": "assets/js/8.26ed1ff9.js",
    "revision": "e39b5506af0f74a5591317583433a435"
  },
  {
    "url": "assets/js/80.99488629.js",
    "revision": "1dad8c4d77faf7499d62577ca9266686"
  },
  {
    "url": "assets/js/81.10542da9.js",
    "revision": "f56b0de4f2da38b4ee8f73b93d6f2af4"
  },
  {
    "url": "assets/js/82.5d6e46c4.js",
    "revision": "b07424235c4deac69972a59ae956df24"
  },
  {
    "url": "assets/js/83.6ae14d2f.js",
    "revision": "2efc723b8fc89230aaaafaa38a802e0c"
  },
  {
    "url": "assets/js/84.69d50892.js",
    "revision": "7c938c28c6bcfdfd7e5391364dde5e47"
  },
  {
    "url": "assets/js/85.439a63f4.js",
    "revision": "46c7e19ad36f624868a3e3990b6376fe"
  },
  {
    "url": "assets/js/86.e32e0d37.js",
    "revision": "e1fce5c0e43f0ea3543fb6a16ba68f40"
  },
  {
    "url": "assets/js/87.f452c241.js",
    "revision": "753bdc516ae30d5b8168f4411dc88642"
  },
  {
    "url": "assets/js/88.a0723d03.js",
    "revision": "eddebacfdfc3318e6e8b85b702f0fe4f"
  },
  {
    "url": "assets/js/89.d177713b.js",
    "revision": "0b1437d40825e7fcc39210b6aaa77f03"
  },
  {
    "url": "assets/js/9.b4c541d1.js",
    "revision": "598b0978cb14f74fdffba45054a941c7"
  },
  {
    "url": "assets/js/90.0dcbfbe6.js",
    "revision": "c806cc3ba9e49aac9ad3c2ef1e96bc5d"
  },
  {
    "url": "assets/js/91.d67c133c.js",
    "revision": "c775c764dc78d6bf20fa876f52281346"
  },
  {
    "url": "assets/js/92.bc158d42.js",
    "revision": "ea5233f8143fd65d94099a1805a1be5e"
  },
  {
    "url": "assets/js/93.592d169c.js",
    "revision": "030b884872e0d85508bad35f1e566cb5"
  },
  {
    "url": "assets/js/94.785c6c71.js",
    "revision": "de0264835889c3fc7013010c5ed8c599"
  },
  {
    "url": "assets/js/95.0ce2f1ff.js",
    "revision": "3140bfe0729529576d4aaf00ee6f45f4"
  },
  {
    "url": "assets/js/96.48175a7d.js",
    "revision": "99717bed0cfb8d547bebe5ab6efaed01"
  },
  {
    "url": "assets/js/97.9efd8d9a.js",
    "revision": "294b610ca110e4d99b48a065434a41a5"
  },
  {
    "url": "assets/js/98.6753d7b2.js",
    "revision": "7337f30537713799ed9be63fcb7b109f"
  },
  {
    "url": "assets/js/99.5827324c.js",
    "revision": "53568c96ce838d09114a32dbf98295bd"
  },
  {
    "url": "assets/js/app.de25cbb0.js",
    "revision": "8dade7c8044748025f070b440613a7d8"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/algorithm/index.html",
    "revision": "bbaf6d3b81f5a552afe09d41f75036a1"
  },
  {
    "url": "categories/database/index.html",
    "revision": "db359df7cfd575313871ca619db55175"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "c08d6e692c56f622bb83b61c1dbd2440"
  },
  {
    "url": "categories/front/index.html",
    "revision": "969447c66fee1dacb10fd3078d41be38"
  },
  {
    "url": "categories/git/index.html",
    "revision": "11444d2b9f8813ef9627fb51b6d3c514"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "654773a00cc119652fc8417f7cce06a5"
  },
  {
    "url": "categories/http/index.html",
    "revision": "7fa78e0a256b0f7e4c77fb31e9a51444"
  },
  {
    "url": "categories/index.html",
    "revision": "78ff413dfe63d6c35e4b97fc841f3702"
  },
  {
    "url": "categories/java/index.html",
    "revision": "afc98480edcaa45316ae2920a03ea5fb"
  },
  {
    "url": "categories/java/page/2/index.html",
    "revision": "5d170e02bc1b2a7ab8f2e009376f12b1"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "55e7bc6757a0baebe67b988dcf339ee2"
  },
  {
    "url": "categories/linux/page/2/index.html",
    "revision": "3dd9786f99a74902109e028c07675f16"
  },
  {
    "url": "categories/macos/index.html",
    "revision": "7300c21e1a642ee33661c6b5cb1b9960"
  },
  {
    "url": "categories/mq/index.html",
    "revision": "5c1560eb27ab9b4d922a1bdb26ac4305"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "bea4cccfe6d462db11a0dd6dd7789457"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "519d1bd08ae8e85ae6717d8be164330a"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "0521c58b382bc20de63d7d3447d58be5"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "00e3c08e30b3867f514a20249ef889a7"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "3c794c4da8ffd664b4cd32eba3490914"
  },
  {
    "url": "categories/python/index.html",
    "revision": "d6b69781b9b522dd1f6b96c20e6df794"
  },
  {
    "url": "categories/python/page/2/index.html",
    "revision": "7616aa5b7cd1fc0cf425fb0a365ff7e2"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "3d250007492bd1ad5a79217cb486d2d2"
  },
  {
    "url": "google8beda02b5c39281f.html",
    "revision": "796a76c93ca61203b46a48dca1923bc3"
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
    "revision": "263ed47da0f754b433fb07b64eb3405e"
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
    "url": "pic/install-ubuntu-with-xrdp-in-termux/mstsc.png",
    "revision": "18eb346721e46fc1ac67d448bcbfc8da"
  },
  {
    "url": "posts/algorithm/traversing-binary-tree.html",
    "revision": "a819a87aeb27fff0644a424eb609b877"
  },
  {
    "url": "posts/database/SQL-constraints.html",
    "revision": "9fb5fde4c0b534f0c39d4ead478556cf"
  },
  {
    "url": "posts/database/SQL-keyword-order.html",
    "revision": "6549823b601a2b87b8dca30fce2fe37d"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "3b4e1b1615f1ae980351c1d7a3ae31c7"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "6584ee5faa29276759910bdc8462b47e"
  },
  {
    "url": "posts/database/why-redis-fast.html",
    "revision": "447f78a67e6b4fe086fe52a3723afd40"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "f4daa6516d8722ea53405ae2f2c2948d"
  },
  {
    "url": "posts/docker/docker-host.html",
    "revision": "f29a887bd0ca1ec3bb4e9c0ea1f49e40"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "38b0b018d2b4dc8deecf2a8f98bf8461"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "b1ec5eeb47887bd1e74650d8143d329b"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "efc1de8ff718e92c1dc8c70bdbf3d556"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "a2a93c3abdf96c8441305f6ef388e85f"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "7048adea190a9abf5c81bb4bc1d9a305"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "65f96abbc68050a4c5ac26fae2f77976"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "8dab3c5a2ce5bb876d7fd734864af762"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "c156b4e813a74165f36f56659603cc65"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "9d939e4178aa339a2c11efdf199686ea"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "c7913379b66fd9ef5fe7dda63abebe3f"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "a5673e72608f5d40d283a6b4dbeda674"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "c2946fd6246644b185d977cdfd8b0d6e"
  },
  {
    "url": "posts/git/use-multi-access-token.html",
    "revision": "bc1a1f053d28dfed53c4c579e26e6544"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "115cec34a605e07210bd36333e0f4ea7"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "4952ed618f23967c4f363333e9f3ad68"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "90dfe993ce052cc42b5ef767110232bb"
  },
  {
    "url": "posts/http/https-shakehand.html",
    "revision": "2beef09248f31a698418a4de6ce55bfb"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "638a67c4635d7a6738f4154063093b5c"
  },
  {
    "url": "posts/java/java-http-proxy.html",
    "revision": "bcad96cb5e4dfe687a335eecf66eff30"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "bde4f89c5cdbb320d630590c5dca2241"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "01498df9faa05d74defde14736bde377"
  },
  {
    "url": "posts/java/java-spring-MyBatis-Annotation.html",
    "revision": "6796ccec4a3d5f96b461c2227b89ba40"
  },
  {
    "url": "posts/java/java-Tetris.html",
    "revision": "c82c44d29e9248ea4a44aeb484120db5"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "f538b189f649d4444651aa20e16f6251"
  },
  {
    "url": "posts/java/spring-RedisTemplate.html",
    "revision": "b728095b3f01e7109efd2c78908bf998"
  },
  {
    "url": "posts/java/springboot-disable-autoconfig.html",
    "revision": "06488cc9cc5d1b0f28509fdf69188f2d"
  },
  {
    "url": "posts/java/springboot-schedule-task.html",
    "revision": "2c4cc5907ffff86cdc3115fd3c0a94ef"
  },
  {
    "url": "posts/java/springboot-swagger-ui-custom-config.html",
    "revision": "cd22e849b9fd098364f84d14c1d06837"
  },
  {
    "url": "posts/java/TOTP.html",
    "revision": "af0c7f03d879ca9169f7df879d95cb1c"
  },
  {
    "url": "posts/linux/docker-nginx-acme-trojan-go.html",
    "revision": "46b69572cfa6d2da96fe34dfe1234099"
  },
  {
    "url": "posts/linux/install-ubuntu-with-xrdp-in-termux.html",
    "revision": "bc5184a3b446cdd94a7b197f649ec718"
  },
  {
    "url": "posts/linux/linux-chm2html.html",
    "revision": "d97da377ceeab496f2a2df9f05cc3b08"
  },
  {
    "url": "posts/linux/linux-ecs.html",
    "revision": "78d9542bce936f0c78e18166f4c10729"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "b4a2a5ecddc7e9364747cc7080b091ad"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "9fad7b77b45756b311d95ffa9e51c479"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "8bf4c83d764689798bb633ecb8e18baa"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "c6c58ba51c63aea96bd56478490b5982"
  },
  {
    "url": "posts/linux/ubuntu-switch-sources.html",
    "revision": "0d7e5d23af03b0336803ac55dd483d77"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "a4799eb866e03a59fb3c92ba4989d72d"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "a79558545b44c4d9fa942bab5f4dace6"
  },
  {
    "url": "posts/linux/wsl2-install.html",
    "revision": "a18f12df989a2c5451e8d0e78308b9b1"
  },
  {
    "url": "posts/linux/wsl2-use-winip.html",
    "revision": "31f18a06c903f1936b827e09e1004393"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "bec5b01b420da375bd468efeb3404021"
  },
  {
    "url": "posts/macos/android-emulator.html",
    "revision": "cfb57c407b83955c6dbd24e01e2970a4"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "5ec1639c0e508e51e6bf185c18a0d9c6"
  },
  {
    "url": "posts/mq/ensure-not-repeatedly-consumed.html",
    "revision": "86026a68e24ce81a0af7870457c3a9fd"
  },
  {
    "url": "posts/mq/ensure-order-of-mq.html",
    "revision": "d1ce5a22fb1e38adf7d9045821531a3c"
  },
  {
    "url": "posts/mq/high-availability-of-mq.html",
    "revision": "24a30c8f55e5cd4e690b3b4c32c81228"
  },
  {
    "url": "posts/mq/mq-problems.html",
    "revision": "ffedad314eb60d376cda20202bd1bc7a"
  },
  {
    "url": "posts/mq/why-mq.html",
    "revision": "5633edfe4e1ca21db14d8d2fb76b4845"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "6b382356bf4728e4c2a87b1ebe73373b"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "f742d08daaada9e0402a8028cef6092a"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "661dd8810fe5a461ac31808d0714a2d5"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "518d448f6a7d2e6c76759efab7e332d7"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "caf29a21c3358d64f4e5ef543f0088c5"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "4771f254e82c894f24e1ee7f3dfdd7ab"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "831259fa521ebc565570e40c56464860"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "7d32f2edadc472bb59ece0269ddb7b9b"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "4db08452bf3223ec029448b1adc2ad47"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "ee1908209468e88d66a37fc1bb112e5c"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "399d75b18436a9428844f8bf9ce75e79"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "b24d471fb681c52355fed5f9cd976b6b"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "d544bb80583b55b444cf9d743f544e17"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "06e82ee69f4e5ea12522e16dfa839e79"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "79577b31b7794d8d6f528d0a16644c3e"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "646ef053d94dc63ad60dccc2992edca2"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "c8d62348545b16b2d3b72236ac0ab1fc"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "8185edb89bcd2e2ea0895edf822eac20"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "02feccf8a061887ac11bf33e99694b90"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "357c411b6539bf08b4dc1e2d99f501f9"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "301cb9bdd35f972eb597748f1a7237d8"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "7b782eda7cbd2f5c837013fa3c01b564"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "03188eb91196559b7526f4e20d5e77ac"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "1b8f5151d93834eddad283d77ad521f7"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "773d0275756205c2d3a9540725697ab7"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "1234d0524c6cff80e605c27c854f32a1"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "5ee7800c9db11965ad9a2fd319ecefa8"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "aff0fc4b0ff8931e7dd0d45e57fadd45"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "6f835b3a8d4e60fb56b181e3387e8446"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "2ffb15c241397c356158eb74365b6b9b"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "e9d0204e252375aa9fc1ff5972aaf736"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "7e3304ec44e741f124c6fb267bb473b9"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "a90ae7a795c8297e7c4b9c6609bcc217"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "8a013d80ef3204faf1cb06517662ef71"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "b80a73a2c522fe615fe8fd908e1431eb"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "eabe3f5007abd7b3b12c6b37cf547774"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "cfa468d3bd1ac97d23dceb6d4e0737b7"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "26e897c390609d93ce201411aed12980"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "32cdc5e7baf4bd31cc667f62349d10df"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "a1d8f6ca94f3a3c7944099eb48909a04"
  },
  {
    "url": "posts/python/deadlock.html",
    "revision": "d14af9f0adcee7736b8732f72a5ab57a"
  },
  {
    "url": "posts/python/normal-errors.html",
    "revision": "db8c79461947d7ed8ba7da2b32120305"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "3f6928a84560b5ae87301a0b99f740d1"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "7df27452f663d59580c2560a23208128"
  },
  {
    "url": "posts/python/python-dynamic-import.html",
    "revision": "57e3e5c450baeebd8a74304fe39f7d77"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "c38040fcd47f84d87498c446a3419158"
  },
  {
    "url": "posts/python/python-metaclass.html",
    "revision": "33bf6db3017e1c23655703e5a34682b3"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "14da2a6c5fc70625e734c03aa9b13b66"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "d76e1a39eafa538d57240346ed51772a"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "3ac94fcc64510af7993f19804081bca7"
  },
  {
    "url": "posts/python/whats-new-in-python3-8.html",
    "revision": "b064fab10f1efd5342d54b29e358756d"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "cbf9e6c21846a0441766c0f9929f0b30"
  },
  {
    "url": "tag/algorithm/index.html",
    "revision": "ef6a8ff64635c9a1e114466878cb6286"
  },
  {
    "url": "tag/android/index.html",
    "revision": "ffaa1f47788521c5c9e75e1c3293d600"
  },
  {
    "url": "tag/api/index.html",
    "revision": "21f37e15b642324061c0a0c488cbe50c"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "96396433823e871f65abe20fef009b44"
  },
  {
    "url": "tag/context/index.html",
    "revision": "a06d68e69c29cbfa388cd7e7c2f8197d"
  },
  {
    "url": "tag/database/index.html",
    "revision": "41927c255508abfa84b1d88ad5507c72"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "6fc78f84796cc47356ae0c9d77f0e10a"
  },
  {
    "url": "tag/emulator/index.html",
    "revision": "857e08c26b4eb3d359cbf8521dc6bdb7"
  },
  {
    "url": "tag/git/index.html",
    "revision": "71711777501c88e3173c919f6a11e3b2"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "6d3c1cca34f3ce27d1adced872ddf6bd"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "a035eda488ef4e41ca5ddc1f37e5ef18"
  },
  {
    "url": "tag/http/index.html",
    "revision": "541e8799bc289c05935622e9f24cd4c3"
  },
  {
    "url": "tag/index.html",
    "revision": "b65e0fd45690a35b0d4e420de30b7a63"
  },
  {
    "url": "tag/java/index.html",
    "revision": "370e90c168986eea6e3ebfaf8e92e5cc"
  },
  {
    "url": "tag/java/page/2/index.html",
    "revision": "13549ea0dd1bb17afb8d4214caf4c471"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "66d12fa806cdb7e39277fd402dcd0409"
  },
  {
    "url": "tag/linux/page/2/index.html",
    "revision": "cf3508e17587278db4580466b17b2734"
  },
  {
    "url": "tag/macos/index.html",
    "revision": "772143400d4be223ba0857d1919f3d1c"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "12c02c9577670144724196da33f11654"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "5be2632b1b314e9e2482cb9e792434b0"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "e5816b9ac6dd2bcdc529a5e207f94b87"
  },
  {
    "url": "tag/mq/index.html",
    "revision": "be34dc74fced3f21d112beba9111a9d3"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "9fc479fc8fafc969fcb0b3bf10c3f977"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "d23573dfe641e54596d3d723f5336f9e"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "29f7b48d58a0061dc5ddc6a264a638e0"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "3ed64cc532504bbbd366d724f461b517"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "eb51e433401b1f837b00b5d379b91f37"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "23869e83d5cbba41db026ead6f086f56"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "319ef73f2128e11ce54e7df9217a2817"
  },
  {
    "url": "tag/python/index.html",
    "revision": "b1b8cb85a8c8d7df62d5ecf1c3525c2f"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "c005a9ad0567f93d3043066483bba0bb"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "d5003bdf7086591bb385b891ddaf0c7f"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "04a5060eea2bc0590bea473272915fc3"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "1b564b3016dd93b357a40727befbe299"
  },
  {
    "url": "tag/termux/index.html",
    "revision": "818f3916391b955ed39c92cff74e0bb2"
  },
  {
    "url": "tag/trojan/index.html",
    "revision": "a62aa54fa87746f5f42aee6eee9cd059"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "9ae05bb5091d289466bf4c837b6b1ab9"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "32c44a68ef2bc0016e38dd9901cbf174"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "b948d0c88c88a6758e8741335317ceb1"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "15d91fe5fc8bb1be86969cbeeafac6ee"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "d60f1bcdf90d481fe890159060b03f74"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "b705af439a242644f96a7fc09f658fbe"
  },
  {
    "url": "timeline/index.html",
    "revision": "af96e00ec77be84ff985c9aaaf53e590"
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
