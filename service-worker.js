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
    "revision": "b5c5597348f8b73bc3e7d28625226188"
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
    "url": "assets/js/114.fadb3e4e.js",
    "revision": "986d756ce2a28a8c8b99cd85ac3392a3"
  },
  {
    "url": "assets/js/115.40e1b484.js",
    "revision": "199b121d13ce229afed44362f04175a3"
  },
  {
    "url": "assets/js/116.4dd2d382.js",
    "revision": "15beb6433566b026a2347624fe6bd46a"
  },
  {
    "url": "assets/js/117.26f41f0a.js",
    "revision": "fb14962d1f47043d99145a9bec633c8c"
  },
  {
    "url": "assets/js/118.7cfd75db.js",
    "revision": "51062c2aaa508152ecfe2d39e477cd53"
  },
  {
    "url": "assets/js/119.daf2c767.js",
    "revision": "bbf7565c4f6eb54d29f6dc1bff0d1791"
  },
  {
    "url": "assets/js/12.503e8ef8.js",
    "revision": "c9056c7445755f995df8f6aaa7f57b49"
  },
  {
    "url": "assets/js/120.2a042ca0.js",
    "revision": "0da4279ee36fe40ac0780d23e2b3916e"
  },
  {
    "url": "assets/js/121.c4e2dd5c.js",
    "revision": "721156fea1b2f4512c0c13056d53fe76"
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
    "url": "assets/js/89.8b565701.js",
    "revision": "42e1b134e9b037d15223d07b85523ade"
  },
  {
    "url": "assets/js/9.6d71b7cb.js",
    "revision": "050f6092e6f5cab2916f66b037292592"
  },
  {
    "url": "assets/js/90.434640c6.js",
    "revision": "cf6e7e7f53950d83b5bac83d5f39d766"
  },
  {
    "url": "assets/js/91.cee2e882.js",
    "revision": "93722a0da62036d17504dbc6d9a36206"
  },
  {
    "url": "assets/js/92.db0be973.js",
    "revision": "145fb890751bf3ae01edae2befba3639"
  },
  {
    "url": "assets/js/93.b3a9049d.js",
    "revision": "393bf0508115acaf5fa720d945d69a98"
  },
  {
    "url": "assets/js/94.d6c59f73.js",
    "revision": "70d74ac99606902ee28e43ff72934bd8"
  },
  {
    "url": "assets/js/95.9a028fc2.js",
    "revision": "41bf3f853c4ccf1c2222db08304d8ca8"
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
    "url": "assets/js/app.19df8040.js",
    "revision": "970cb09a89dd5c2d9582dad2cbef4f46"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/algorithm/index.html",
    "revision": "b6410d00b83b36f1ba63fdbbf80d8793"
  },
  {
    "url": "categories/database/index.html",
    "revision": "a1e3d3d3bf548703838b9caed4a2eca0"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "f71e8ca973b6354589a442d6ddfc4321"
  },
  {
    "url": "categories/front/index.html",
    "revision": "ad27a3abb8ac8e27c4f0b90bea0e592f"
  },
  {
    "url": "categories/git/index.html",
    "revision": "6e73bb439d4b4e69a7e644a484cdb524"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "e2439e6727a1b1369c9e21e8643a7bd0"
  },
  {
    "url": "categories/http/index.html",
    "revision": "c9b7c356274f939db320ca20b807fa91"
  },
  {
    "url": "categories/index.html",
    "revision": "9c4eb1b5d6ba6ec4f8c3364ce24e7e9f"
  },
  {
    "url": "categories/java/index.html",
    "revision": "6e13873eedb71902ea94c491a3c3d27e"
  },
  {
    "url": "categories/java/page/2/index.html",
    "revision": "4481586936631c5b5038b6716fd499f5"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "248260b66c801d3ba7aaab0e87a03756"
  },
  {
    "url": "categories/linux/page/2/index.html",
    "revision": "ac2f62e7b595f6de76d58e5f31132e13"
  },
  {
    "url": "categories/macos/index.html",
    "revision": "cea173ee116bf1596711dae71117dbc5"
  },
  {
    "url": "categories/mq/index.html",
    "revision": "4713d8347b30041c75bee911dc49e213"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "281bf3bed84d2ae58494cf2c2c30d509"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "c1448a4e4d88dc94f97bf44aaa4ab1c6"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "ddb897e00ab0389a5407a36bc743b764"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "9674a1c2217c89fee036081e576fba93"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "e5b24ada0ccd2c2a7ee0aae1af531384"
  },
  {
    "url": "categories/python/index.html",
    "revision": "6935440a70d06a2f46a2bf2807a431d6"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "af1e6a0adeb6eacd832b1dc322132c82"
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
    "revision": "e8d3dfc29ec22f5404852b1543df9128"
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
    "revision": "56af80d2e5fd5e1f113cfe777b48a579"
  },
  {
    "url": "posts/database/SQL-constraints.html",
    "revision": "4890bd3c0b94802ad8a556b467b9eed0"
  },
  {
    "url": "posts/database/SQL-keyword-order.html",
    "revision": "9f1cadda8e3cefd075882050996e5e89"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "36dca26cbf391fbba6745af251afa69e"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "8df914128ecf48e7acb66ab625d6d1ad"
  },
  {
    "url": "posts/database/why-redis-fast.html",
    "revision": "e757ca435b52eaec3e98eec04f467f39"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "f36c83d780f5168ea47e3be8ac085dc1"
  },
  {
    "url": "posts/docker/docker-host.html",
    "revision": "086dea00586e30c7fdc793ad96845f73"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "c244b6b68e3602a9931af25b3f3e6644"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "3839e46d3d2542c5b3cd63b0799ee316"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "afdac1f82c0e9fea7d74b47d47e8980b"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "631fcaa39de324678626b598daed564c"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "f4426aaad71dc38e62f86105d24883c3"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "018b92f461f882c35d71b78930b5a194"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "e3723391ad0755da4bdb96e439e89586"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "936a9c11fa002e0d1e2021ca920f16e6"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "ec2b0aeac13d9d3661c6ed73bba421b0"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "e854b85415259f4d0656b3026764bb07"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "072c102a18898c1d9c61288687ac5462"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "c1ed6e2fc3b4e078b3cdd64c857559af"
  },
  {
    "url": "posts/git/use-multi-access-token.html",
    "revision": "68b4c8e15fd4bb3ba67d34404e4bd5f3"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "92bf84298eb75a368af1d87510eb2050"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "0438d35f10b5d7033961ba12f0ab748a"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "0ff195aa626601cc678013f298d82ee9"
  },
  {
    "url": "posts/http/https-shakehand.html",
    "revision": "f42c9b256ac5ce09b90b876a9ab1b599"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "2be84efa4416abd1fd3f0b0ded7e9b61"
  },
  {
    "url": "posts/java/java-http-proxy.html",
    "revision": "22459004ab8c486677412c006d36dc92"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "b0035e1b24f5677bb62e991e57662645"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "5b2dfd602ce0c176ec11a83ac5b859e6"
  },
  {
    "url": "posts/java/java-spring-MyBatis-Annotation.html",
    "revision": "b300d519c0d23dd2e733d420c65867d2"
  },
  {
    "url": "posts/java/java-Tetris.html",
    "revision": "d2187074b0949c7f52170b82662f9ae8"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "e43d9c179224fe0003315b87127c63c7"
  },
  {
    "url": "posts/java/spring-RedisTemplate.html",
    "revision": "5fa26d870d05aadf55b4f0f010804fbd"
  },
  {
    "url": "posts/java/springboot-disable-autoconfig.html",
    "revision": "afece947389e8c7ababe5b5c76609d31"
  },
  {
    "url": "posts/java/springboot-schedule-task.html",
    "revision": "8848a0e86fb3ad9873975de9cb99e42f"
  },
  {
    "url": "posts/java/springboot-swagger-ui-custom-config.html",
    "revision": "304578d37cedbbd1314b5d4063ab095d"
  },
  {
    "url": "posts/java/TOTP.html",
    "revision": "2608769a2b674c77f5be858554d364c0"
  },
  {
    "url": "posts/linux/docker-nginx-acme-trojan-go.html",
    "revision": "433ac793fd8aa78e844b15395c134210"
  },
  {
    "url": "posts/linux/install-ubuntu-with-xrdp-in-termux.html",
    "revision": "3689a01555b9be1194db17acea154df7"
  },
  {
    "url": "posts/linux/linux-chm2html.html",
    "revision": "9573e09cc0f29ca03cb6b3e7ed03fe16"
  },
  {
    "url": "posts/linux/linux-ecs.html",
    "revision": "c6ce8efd17433e114b8b4d33e4325ca1"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "bcea5169c1da220524ca5fc03f4cae3d"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "e617f575cd388681fcd036fa35f55967"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "fe15d2baababa16623f43b5a6bbad582"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "bad200caf50f3796cfb0772c396df445"
  },
  {
    "url": "posts/linux/ubuntu-switch-sources.html",
    "revision": "5dd4658a6234e5437541a2f5fb30753c"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "0b38310b3485c15d81c2951490f64723"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "485d753469cacd663975247f29dd706b"
  },
  {
    "url": "posts/linux/wsl2-install.html",
    "revision": "322f35813954fe5f6a5a4ad0df03d38b"
  },
  {
    "url": "posts/linux/wsl2-use-winip.html",
    "revision": "62646837ef2fc04b776ecaa199279670"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "9bef95ad4da63448243c48fbd02b4fe5"
  },
  {
    "url": "posts/macos/android-emulator.html",
    "revision": "6bca97b73170a6d005dec9f93f43edb7"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "3b5a07818faf2a993a1cf45adacbca3b"
  },
  {
    "url": "posts/mq/ensure-not-repeatedly-consumed.html",
    "revision": "75e21f7ab9deca2ba3a5c8463202f7f8"
  },
  {
    "url": "posts/mq/ensure-order-of-mq.html",
    "revision": "8f1c678ad107e37c13c0994e65a67f8d"
  },
  {
    "url": "posts/mq/high-availability-of-mq.html",
    "revision": "b4b9449fdf126f3b702a87f933b0775d"
  },
  {
    "url": "posts/mq/mq-problems.html",
    "revision": "4989433927b73995e32035ba8840b01b"
  },
  {
    "url": "posts/mq/why-mq.html",
    "revision": "c4696bbe387597fdc538d6305cfda352"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "7b98bc9878729c6fc578780ae7f5fc09"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "84c836de5f100edf12b775846e1dce84"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "59d23dd15e31e6b3db639d4599dc2097"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "1a1044a13864156a4f71c8f9241a72a4"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "08504ce519cfe61ffbe29eed54b39a59"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "de2f0cc09d6d3dc9bffc4688d6892ccb"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "e64771a0cbe0d56dc5efad4bd5b3fe63"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "d59e4b1c0b020f314880308783a3ade4"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "acfd8c784fc2a7036f49296af4d4eaa2"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "a1df491cf8992fa4c07f92ce6585fde4"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "a458133a2e125a78046e6100907999ee"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "8ea31772ed43e5203eb0e136cbefcd89"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "5b05acc7c7a45aad8920a71d115b88b3"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "6f4f858d5f9fffddb0a8e475d312add0"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "2d6223830b819cf7961dc36ed4dba35d"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "848a03767d618538478d2c4eeacb4238"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "c5eef6ae887111dd53d3c430a6588b91"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "4f608fba5e01b804a2641d3ef50dc001"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "e3e9da25f9f69101851a3588b631b7e7"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "9acc1f9b6b507691d280bee792746270"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "a42cbcd7f6cbba2b3fcdca42171a7a81"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "94f093be4b48baf857f138805619ea14"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "81149afb700f15ad8047fe53e8d63822"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "e8492f1b171e0a89362d0a84e9fdb935"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "718b7da02d30de2c8628b1ea913d7d66"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "a0ec378952368ad1c63dc37b8db44f61"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "73fd5887096562f20e8c5cbdd7141447"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "d366390673873b7933eb056eb11a5346"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "5ca7755292eabca2158453dc2bd5da61"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "d22d2b9d1a2ec1349d30828260d2fb50"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "dbac54a8800e195a7c6251978026a0c0"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "20ae0a4d36d514b5215d77d0cf5f7c59"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "e358fec2f4a2f5de2bdd25184e4f59dc"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "3d2036f548d994a31a75af7b8fd98171"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "805bddeadee005b51ffed08aa7b003ab"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "0e340be2c0161db0ee1f8aa77e6bf088"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "cd81fcd462fe0de9e5b9ba21806f88fe"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "c8032ee76501ef68cd3c59afb489de6a"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "9af535e3312e098aadbe173872cefc57"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "02796a83b050fff410f5209cd780e47d"
  },
  {
    "url": "posts/python/deadlock.html",
    "revision": "30288aa3b3b4c306c2c19ae1b695aca7"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "f2b847bb9782ada7d12c5e1b1918f477"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "27188a1bce67a179557c7147f24f993a"
  },
  {
    "url": "posts/python/python-dynamic-import.html",
    "revision": "2fcf09349a1d32c63e52c4e57a714b0f"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "d2f3a70f5033ff3777d9162eae6538a5"
  },
  {
    "url": "posts/python/python-metaclass.html",
    "revision": "4630957ce286cc0b444ec46ccd3b6d23"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "65c988e1f312e3719df6bddcfc4cb38a"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "ab41a5bd9a1aa1dffcc726181acf8bfa"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "abccf8991695598076390155af033fa0"
  },
  {
    "url": "posts/python/whats-new-in-python3-8.html",
    "revision": "493a9df00c8bc997b2eacf0030ba6d46"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "34b0d0d770e483b911f930ff38ba45bd"
  },
  {
    "url": "tag/algorithm/index.html",
    "revision": "d504bd4b253ae07c907bd767379f7439"
  },
  {
    "url": "tag/android/index.html",
    "revision": "2e24fa83077e451deea0b28c6f0519d9"
  },
  {
    "url": "tag/api/index.html",
    "revision": "b2fa5fd0fe760e12b5b1a1da52d0dd91"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "606b0598e91a1de4a5f03d387cbd94ee"
  },
  {
    "url": "tag/context/index.html",
    "revision": "f9d9ef1816a7e0f1360feee69d538e7e"
  },
  {
    "url": "tag/database/index.html",
    "revision": "d159dabf437c9411af7cfc2e02662321"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "924d0bc9a53a54d34a9d18f8d4ccd784"
  },
  {
    "url": "tag/emulator/index.html",
    "revision": "7e8dfe33e5d13fede190977af7e2c0e3"
  },
  {
    "url": "tag/git/index.html",
    "revision": "e02b9b9e02d1d230c69a616ffae5cabc"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "19969f34a2a19c311e0c6a9fc28e98c2"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "a9c70e81b973f84e377c893982855b7b"
  },
  {
    "url": "tag/http/index.html",
    "revision": "16550d0c3e62f4da5504015290bc3b7a"
  },
  {
    "url": "tag/index.html",
    "revision": "0917e520711913355eb69249bd596f9a"
  },
  {
    "url": "tag/java/index.html",
    "revision": "c4fb81a5867a7be76b337215ef1ad8c1"
  },
  {
    "url": "tag/java/page/2/index.html",
    "revision": "f1c5e0019c9056d2603cac9560e25928"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "2748d65115733c392aed27ff66e04e9c"
  },
  {
    "url": "tag/linux/page/2/index.html",
    "revision": "6c0bc366878b290f0e31e1c2f18ced6d"
  },
  {
    "url": "tag/macos/index.html",
    "revision": "7d3b407eafa67e9fc980f4757b2ec919"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "c4f085ecc76234ccf4bf4b63f6cfebd4"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "134d0b13a6c2c2427c6cdf5c6dd5f94d"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "8706439093e56b9e21071c95ea8b02bf"
  },
  {
    "url": "tag/mq/index.html",
    "revision": "716ac76b944b9fb766a05719ae6ba980"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "30484eb268a3574808079de7b131d4f3"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "c8f82e6118d4663ffa64d43d6c5ee511"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "0f008f6e254b2ab5d1aa4c1b1dbd86e2"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "df8f3cb6730d87f3e7d0a91c30cd516d"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "e783e9cde52203ee5b41c92875d4076c"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "9631bedc7fee7334f165c8fbcb38273c"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "60ab626a15aeea157f7a9540e01aa1a4"
  },
  {
    "url": "tag/python/index.html",
    "revision": "5c79ddac5175ed1637017f92afc1c46c"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "648b4f98ffb882bc5b5e67b7ce6fa36d"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "8c471a357be8710d407ffb1116e05de3"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "d0469a02e0feafa91a6890419ab29fbe"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "1af973cf431deff69e1ce7ba345b94cd"
  },
  {
    "url": "tag/termux/index.html",
    "revision": "a21d731d0583aadaf6b4b5cde28b160b"
  },
  {
    "url": "tag/trojan/index.html",
    "revision": "2426b22f136547f729386f8230e94c9b"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "bb0ac63e9962fe38f4181eb50c484424"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "1a43473f85b31f32ede51b2c33de009a"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "93c0ae91c47f3ba2aa00f5660e657870"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "5ddc5b7627da708c2f132c84ec960ed4"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "e26418ee077b2d73719513fade7e483a"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "30f863bb5f0f55830fd20016587a3a2f"
  },
  {
    "url": "timeline/index.html",
    "revision": "7d8af933f579204f2a763982ff1f275d"
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
