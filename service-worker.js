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
    "revision": "e549ecd5e5065d5b89aa7a267e0145a0"
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
    "url": "assets/js/119.b3cf354f.js",
    "revision": "79d2e778912e573712ad580bd6fc9bc6"
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
    "url": "assets/js/121.836d7f5e.js",
    "revision": "583944ab61471e509aa5f9d032540a5b"
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
    "url": "assets/js/app.70bb2e3a.js",
    "revision": "dbce2d690a938409a01046b99dc83412"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/algorithm/index.html",
    "revision": "21085b38fd6ec97b6fe091eac5d1d667"
  },
  {
    "url": "categories/database/index.html",
    "revision": "e7e2f50eb208bfeac8f749308bc1bf59"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "0ad43294fa924eff7c89a1cc48c7471a"
  },
  {
    "url": "categories/front/index.html",
    "revision": "57043718ebaf9a5eedc2949129e9738a"
  },
  {
    "url": "categories/git/index.html",
    "revision": "816695ce3fb9d41ff8299e6b1b7c6e3b"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "3912e4b67c318c1291c9dc99dcebd642"
  },
  {
    "url": "categories/http/index.html",
    "revision": "075e9b3651aaf352c73c747170407c4d"
  },
  {
    "url": "categories/index.html",
    "revision": "42cd41f89595690042051145bc7434ec"
  },
  {
    "url": "categories/java/index.html",
    "revision": "a3dc85dc06aa5987a179569a2206d854"
  },
  {
    "url": "categories/java/page/2/index.html",
    "revision": "f4c20eda8363fe6a2d860a83566da014"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "1d78077ebc4c41727c13e1aa0faf7f63"
  },
  {
    "url": "categories/linux/page/2/index.html",
    "revision": "7e1e8b68a5c20ae71fac820fec40aa8a"
  },
  {
    "url": "categories/macos/index.html",
    "revision": "0e545c8b620fd4721c787298d228f705"
  },
  {
    "url": "categories/mq/index.html",
    "revision": "6176500e1473ff83fb5a160bd3bf82dd"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "af70b504f3b61c4c513f4fc5533dc829"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "ed6e83c296c8025acc98c0131da5831c"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "e72b3ff0053c4108879a16d4196896f5"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "fce7ea81cb85c2c5b86967fe21b12710"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "721f4d83633daa513da8261a70750b49"
  },
  {
    "url": "categories/python/index.html",
    "revision": "c478bad4228181c4e8ba0add15f7da78"
  },
  {
    "url": "categories/python/page/2/index.html",
    "revision": "6f0fea6d043cd85e8c7a09329108dd8d"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "8f76acb5639ce1370bb75568d189dd78"
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
    "revision": "d5528883045750390df1626e365714e9"
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
    "revision": "bbe30433d82969f1a5adf9e4d02d96d8"
  },
  {
    "url": "posts/database/SQL-constraints.html",
    "revision": "a269d6e29dd7c76c458fd4c82462c3c4"
  },
  {
    "url": "posts/database/SQL-keyword-order.html",
    "revision": "43a49abfac0e739ee3b60fac2f227d25"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "346c5957a0c2c7a85666762eb89aee93"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "66974cec5c3f92893b8b41e151ddd28d"
  },
  {
    "url": "posts/database/why-redis-fast.html",
    "revision": "eab7f07d08bb32f5be5d8240bfab0441"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "9a76b6774214173c9e522293895308fc"
  },
  {
    "url": "posts/docker/docker-host.html",
    "revision": "196638faa8fd4e08da189ea0e7923908"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "921179fdef97092b7c35c99c25182b3f"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "6d02042f53d8009b3378bfd97e3a1554"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "6f3c3ebeabc443fa75dcf4392595ecf2"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "91eabd596824fdacdf2592f4ef747471"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "6f248cc27ebe050af371bb6a5bc17776"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "bdefb6b19af135c69790060137653c31"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "02640941a4e1284ac76e23ec6855a67d"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "c4dff7fa6d53d276099a70e975fa524b"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "fc3a2731aa9e6b3dd3e93eb256258eea"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "bdf6ed11f752b93d25e122e1d3c346e7"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "eadcb275f583396b46dd5a66ec5b8656"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "3cfd42296c927fd2ebc107f46e058a16"
  },
  {
    "url": "posts/git/use-multi-access-token.html",
    "revision": "1051d0de616f9ad0789acdb998adf8a5"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "4ca299769d9ff7264c7108fbad1deb18"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "aaf68cc7b3e50daa1a00c65d52e8677a"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "2a5ed72a84e995047484334c215ed58a"
  },
  {
    "url": "posts/http/https-shakehand.html",
    "revision": "4c00b5b47f5067ffe5a585164fa9db49"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "7ea628c2c000d0f0ae7a832471e7c88b"
  },
  {
    "url": "posts/java/java-http-proxy.html",
    "revision": "23c94dcec1ceed21a030a5fa77644f83"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "97ec8b31d0c3b6db32096ace9ab80096"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "9099b05fb9b71f4858fc95515ba47a5e"
  },
  {
    "url": "posts/java/java-spring-MyBatis-Annotation.html",
    "revision": "57251fc191ad1632bf0e4b44fa8fc64d"
  },
  {
    "url": "posts/java/java-Tetris.html",
    "revision": "00a25ad951cb4df7eb6317e261252cf2"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "ae98115dc1f36e65bd1591e3253f2fa5"
  },
  {
    "url": "posts/java/spring-RedisTemplate.html",
    "revision": "859ee61c3ddc0e6697058311f4f5a516"
  },
  {
    "url": "posts/java/springboot-disable-autoconfig.html",
    "revision": "9e643ea199d87bf504646dfe5497e158"
  },
  {
    "url": "posts/java/springboot-schedule-task.html",
    "revision": "320f3ff2ddfe5417ae26922ce7800d9e"
  },
  {
    "url": "posts/java/springboot-swagger-ui-custom-config.html",
    "revision": "405f60a292cf6b84eb5a7a8d31f56853"
  },
  {
    "url": "posts/java/TOTP.html",
    "revision": "3fc266e57dd117c5a436d8ac55f7bb9b"
  },
  {
    "url": "posts/linux/docker-nginx-acme-trojan-go.html",
    "revision": "62f3d3da06c6e312ba1e110c3c8c6835"
  },
  {
    "url": "posts/linux/install-ubuntu-with-xrdp-in-termux.html",
    "revision": "bd64233503f12cf365d3187657b59f2e"
  },
  {
    "url": "posts/linux/linux-chm2html.html",
    "revision": "15423cf9fd9e5df16675228173b662c3"
  },
  {
    "url": "posts/linux/linux-ecs.html",
    "revision": "89c52902d530ab8040007305248e69d7"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "e423e3925a847d8cf33e45bf72ed3bdc"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "9a034ba833f0b3fe027f042749705032"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "67424236f73e42442278e42af900dd03"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "8f4a70c9cb94947de3898080d302f19d"
  },
  {
    "url": "posts/linux/ubuntu-switch-sources.html",
    "revision": "b50d4b36bca338a4c9b89a51ebb03cbb"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "670da06bb4da220be1dac52ec74115e3"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "fbded2c270ebec8d1e7856ad81b7293f"
  },
  {
    "url": "posts/linux/wsl2-install.html",
    "revision": "356cef7226ed1356ddcf9abd8a23eeb4"
  },
  {
    "url": "posts/linux/wsl2-use-winip.html",
    "revision": "95508d7e0bcedc7aa6f097401f7720c3"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "0b6035aa1624fdfbc93d5e125ef78c4d"
  },
  {
    "url": "posts/macos/android-emulator.html",
    "revision": "979acd300ac9589573562aa17e1f3c03"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "95f0553eada0c312d85af7310d2bf554"
  },
  {
    "url": "posts/mq/ensure-not-repeatedly-consumed.html",
    "revision": "76053bdae9a80d700a1ae4529b51ad76"
  },
  {
    "url": "posts/mq/ensure-order-of-mq.html",
    "revision": "7630c5b0ca4df83835cd96c5135354db"
  },
  {
    "url": "posts/mq/high-availability-of-mq.html",
    "revision": "f8c67c4635efbe76fc964ffdb5088d10"
  },
  {
    "url": "posts/mq/mq-problems.html",
    "revision": "63a66efa5c294b2dd6b4f74123aec974"
  },
  {
    "url": "posts/mq/why-mq.html",
    "revision": "3751ff84fac07a79414e3e21d0e4f95d"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "44b3ff90eedc01dc966506dbd74e72b2"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "aa89dfc8934c66e9a74087567f867800"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "09928143eb5321385ae26de811d75b02"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "2072468757e0d4efa720222f6aed59aa"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "291720261c7fb2f8f87ec17e191ae46a"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "6b93bf635bf73331be4f5082e9a78276"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "14d62cc39523ac2e96d244196d5623cc"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "b14cf2ee6985f73ed36cfc3a72caf902"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "c76c14b3e1ca4c57348c6bba073d8d79"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "cf35c87a8027f724ee9420cbcd2a6d9b"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "8bf14655d4cb46b76e50ba2a2849ec78"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "3e10210df9fe34faf460769b62adee45"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "20593edac078b09e590863500fd45f06"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "f4c3d311db7977c656afb01ec943dde3"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "56cbe9acb0d3746699e094bba453b874"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "27957b2251ac4f87193d35b71268f1b1"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "3fab752c539141e22d2dc63befd46554"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "c93b5131715a61a4a2d8af683a693db4"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "3c42454a674711be08c0545c439586ef"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "c11948d458f6eebc135dcab85dc469a6"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "da87b2f386ea24c9b06a3ff209030d52"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "e9e4c2b9ed913c283e282749e6cc39fe"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "2480957e24ce90591b701cce8be33428"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "f1489a0e72e77878cfcbd68ec95646da"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "d6464ff18dd6a5f2f22115a6065ef520"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "1caaf80f51cc1dec35f3eccfd3187af8"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "48ed4cec6ddeefbe651d3a5e3803b5d9"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "0140a088c4282660afeecf74da1687c9"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "a7f5028cafe5bbe2c47f1f068821fd36"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "dde5437233f78bfb8258ea98e46d3d1c"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "04479c632f8886791c94fbce5a187b6b"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "d9ebc3f95c9075b213dafaf28cdf86f3"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "38c99b820f008694ccd7136b3433f16a"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "ca60817c39b26903adfd4f758dcfa8fd"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "0d788c9efa8279f913f405028ba74e01"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "04c3304971e3e875d2c6c3e9df664609"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "0f18568120cf8e0c336b813b9e07c516"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "f8b27a62c57841acf27772b0e1cb4115"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "869b52926d79b57097998c3043224ee5"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "7efd175ac59769b4b75231f7659c50d7"
  },
  {
    "url": "posts/python/deadlock.html",
    "revision": "4f9dc2d90e250965918f3538b6c417ee"
  },
  {
    "url": "posts/python/normal-errors.html",
    "revision": "44621d5d6bf794fb61e416114c8f08ef"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "01b841fdf7a922a24874d10776ff3bc3"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "eaa0134d77a49699b3b30f12cf600fc0"
  },
  {
    "url": "posts/python/python-dynamic-import.html",
    "revision": "d2f7a045b14514d076405a4d38ed6c16"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "ea28dc835c6791b2c2cd5b957495b817"
  },
  {
    "url": "posts/python/python-metaclass.html",
    "revision": "b565830ab1c0e00daec6093935aadd80"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "323d0019acadb5776b9549f4ed43f3a8"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "1e8c936a5ff12fa3b77aa8701703f74c"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "9f2b7a24fb8e24a403ac22663665afca"
  },
  {
    "url": "posts/python/whats-new-in-python3-8.html",
    "revision": "8493ba06c6c8cbbd7e88e544586a9497"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "1a78686121fe904639e458a26063adad"
  },
  {
    "url": "tag/algorithm/index.html",
    "revision": "a0b99f8749814e94dc82dd1630f9691b"
  },
  {
    "url": "tag/android/index.html",
    "revision": "730a685f7f88e7ed399457f3de6a4d98"
  },
  {
    "url": "tag/api/index.html",
    "revision": "e260b3cbab07e98d18a332e78ab5f32e"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "6d4cd8d009cd96273038e0cf0586647d"
  },
  {
    "url": "tag/context/index.html",
    "revision": "76a1bc7b19404cd1d9e382ad29b038ab"
  },
  {
    "url": "tag/database/index.html",
    "revision": "cd48ece02ff308be59540c6a01bcee3e"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "3f0899eb29993ff2c64dcb807bcefbc1"
  },
  {
    "url": "tag/emulator/index.html",
    "revision": "696b1e7b55bdc5eccad840a5ccee218b"
  },
  {
    "url": "tag/git/index.html",
    "revision": "16eb30d241c9a7ec6bca903c7c8ae470"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "ac2ab9e1b1f22c903094fc8ac4e9d74f"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "99635bae91e431c5f333f39d2b37be56"
  },
  {
    "url": "tag/http/index.html",
    "revision": "7aefad5436ae2dc50a75b4682e887b85"
  },
  {
    "url": "tag/index.html",
    "revision": "66fd22e76ce7305ab926672cbf5b0787"
  },
  {
    "url": "tag/java/index.html",
    "revision": "87e7aa7db4975b9ad1e61d2cdac826c1"
  },
  {
    "url": "tag/java/page/2/index.html",
    "revision": "9da45067fb92085145c7bf6ebab715ac"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "891dabc59ccbb54cec638c379b0ba336"
  },
  {
    "url": "tag/linux/page/2/index.html",
    "revision": "1ec687dcca4f5913d7008e481fe23171"
  },
  {
    "url": "tag/macos/index.html",
    "revision": "501e7948a57cb486538d1ad986d7372c"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "45dee7bcb945df7d241896d6d9dfcd63"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "865bc0a2494814660ff591fa607479a0"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "a43b44fd7b58e034e2024cb1a427b1dd"
  },
  {
    "url": "tag/mq/index.html",
    "revision": "bf52352abf0913503a6c14efe591cb5c"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "1f3451344bd73f1feb6e6c4a2d3ee76a"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "06b8e909f33340060a11dd07f324456b"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "7456ed8366a4c2dcceaedcc5a509c936"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "c6f59f5767692a3cab974a24c6fde7f4"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "8aa560411e89a6274f8a179cceeb542e"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "e1e8149fa24d6a6a3773e3a40ef38c17"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "6cb4da31ad41094cb16964eae0c1b016"
  },
  {
    "url": "tag/python/index.html",
    "revision": "36ead5f9e837c2f792a2655587d817f2"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "d7f157fc4947f426fbcdf1a6986fca20"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "b6de1d065760c6b9dcff0a89a38f4df4"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "fdc3a754869e253c0fa9a61346e46e7e"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "cc37806aa71fe0d8ef89c1d85add6eaa"
  },
  {
    "url": "tag/termux/index.html",
    "revision": "686d8ef755d882d6135977724d69fbd6"
  },
  {
    "url": "tag/trojan/index.html",
    "revision": "76d72c8bde440a39742a33d8623b23c7"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "3f245a51bce150c36e1439d9dce0e62f"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "af01d3f4c2e94032e87f41e6e0ab64ff"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "04f11dcfb245b22c62615a1b82b4cacc"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "f3e201a96992bb633824edda4e68357f"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "b280112ba7baccd9f10ad2fdb60120c7"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "80cd967980b6104ff09437bbb2d8ba8b"
  },
  {
    "url": "timeline/index.html",
    "revision": "b11b6c166e5695a1d89c1334fc5e7514"
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
