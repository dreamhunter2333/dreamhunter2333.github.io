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
    "revision": "1356c6fcfd0b1d28599a7cc4f99797c3"
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
    "url": "assets/js/111.83c1ef51.js",
    "revision": "4617029925478d1a9489d96cc7df6bb7"
  },
  {
    "url": "assets/js/112.092969f2.js",
    "revision": "1ac41524fe308261f2a6d8ec65b3ea8d"
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
    "url": "assets/js/118.d7b50d3f.js",
    "revision": "2af5a24936db67cc7322b84650563b49"
  },
  {
    "url": "assets/js/119.daf2c767.js",
    "revision": "bbf7565c4f6eb54d29f6dc1bff0d1791"
  },
  {
    "url": "assets/js/12.0daeb00c.js",
    "revision": "4f84ce8e9a99cd1538a39cb0f1c47ee5"
  },
  {
    "url": "assets/js/120.e3b411f0.js",
    "revision": "fa7e55e50722084845c941f5f4d2bea6"
  },
  {
    "url": "assets/js/121.c4e2dd5c.js",
    "revision": "721156fea1b2f4512c0c13056d53fe76"
  },
  {
    "url": "assets/js/13.8f41eb7f.js",
    "revision": "6509584dfa9120c052c2327a1b021556"
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
    "url": "assets/js/30.febb2ab1.js",
    "revision": "927f4e69415ca230ef0a65de9eab51f0"
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
    "url": "assets/js/55.c4d94d39.js",
    "revision": "7708a2e6572de75b9eb3a0b19cff314e"
  },
  {
    "url": "assets/js/56.0942bbce.js",
    "revision": "1586c2bdb6c0de473ad14cc15127550d"
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
    "url": "assets/js/9.6d71b7cb.js",
    "revision": "050f6092e6f5cab2916f66b037292592"
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
    "url": "assets/js/96.a23fc643.js",
    "revision": "9ce430b4939081a4af4d82763943a030"
  },
  {
    "url": "assets/js/97.62f9931e.js",
    "revision": "4f7646934a1f92b964a5a95918d49471"
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
    "url": "assets/js/app.3826a9d1.js",
    "revision": "32d3ea744322151717398f9d28fed57e"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/algorithm/index.html",
    "revision": "30ab5673a23769f54f88fd0ea579d30b"
  },
  {
    "url": "categories/database/index.html",
    "revision": "28d685463a1a99aa9b2f34137c26fc8a"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "5e41f257a2874d25ae0d33b1972da7bc"
  },
  {
    "url": "categories/front/index.html",
    "revision": "62a91a34b95e275886dd2d249e0cad29"
  },
  {
    "url": "categories/git/index.html",
    "revision": "8dd2721509cdc962582e9116b41403ad"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "775c04277a380604abc32cc7bdd1815a"
  },
  {
    "url": "categories/http/index.html",
    "revision": "16a4b65a4119730d06c5f614f3f24a44"
  },
  {
    "url": "categories/index.html",
    "revision": "be635a2aa3c3b93dc455b0d3036052a8"
  },
  {
    "url": "categories/java/index.html",
    "revision": "1c277a8cbf57c9b6e5cb7d32b191c4d6"
  },
  {
    "url": "categories/java/page/2/index.html",
    "revision": "0ddb2101b77aee8dd8e73228f6ebac71"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "a3decdeb0434b846dea9703feebf2ffa"
  },
  {
    "url": "categories/linux/page/2/index.html",
    "revision": "079f22d0f41c9d663ec265b633308d67"
  },
  {
    "url": "categories/macos/index.html",
    "revision": "e905e92fbf9c5f5fcfbb91c48a4060b4"
  },
  {
    "url": "categories/mq/index.html",
    "revision": "a2132a5ab46ed7d428efb15f844a42d2"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "66de95031edef02b3d7818c0a8ccdde0"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "89dd0308b41aa7f0fc01b4270354ad3e"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "9fb7bd5d0005a24862eec45fb032b981"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "d72215a34a8c541ca943a651f6e39f2f"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "a6ed6bb3380f05c437b383245cc482b6"
  },
  {
    "url": "categories/python/index.html",
    "revision": "3385016add7636535074798d1c2c773b"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "97b8c14e35103c4cd41d7b5065ed2718"
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
    "revision": "8495eb7c24cfff397a7885e4542cfc2d"
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
    "revision": "61a63ac5cb8f3d83db8e272e9dc062a5"
  },
  {
    "url": "posts/database/SQL-constraints.html",
    "revision": "777224892858582b68f9718a4d147030"
  },
  {
    "url": "posts/database/SQL-keyword-order.html",
    "revision": "d113b6c3e262662534ed9d5ec46dfa3a"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "15f857907e770f21af1e455b1e12474d"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "6e5e17151a4e42c1c255ce278ecb2ae7"
  },
  {
    "url": "posts/database/why-redis-fast.html",
    "revision": "4ca7170aa42137892d930e1b3c08cc07"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "c1052d8dd02d3f5152dbfcd80ee30d31"
  },
  {
    "url": "posts/docker/docker-host.html",
    "revision": "2cb782700ad2ce96c4f89cae258d853b"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "ff7238cab77ab4de2f3aad9f199d5250"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "66499ec0d4789feb6c0c74c10df9d9a4"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "2dfea440538087636849335e038da5f4"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "d1c6d25b0d6e232fd7df2c76eadc3aa3"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "84f4b5f4bcb6e3825b8711a8ff8de23a"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "685c4f51d2fe8a0455e2a42459e808d7"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "066f1f3b60a9d96c2cda238afa4f8728"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "c622b0c713ec6d420d7d83151004b829"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "8794f99324946f78417fa51e2d3ff259"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "79776439819eed2a847defe5aee1635a"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "71a68f7abde4796fb83ca9f05ecfa81d"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "fb951f89113dbadf5c0be8c9a04994a6"
  },
  {
    "url": "posts/git/use-multi-access-token.html",
    "revision": "5b71eda1d2612e243c3e19944befbd7c"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "864e6acf9fd8074e40d38d2281649c67"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "6cbf1cbb85c075abaecd1ca7a836aac5"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "fc19f653be043d39e8ed13cad28e5e2a"
  },
  {
    "url": "posts/http/https-shakehand.html",
    "revision": "cba57ec6219b4c22bc962477f6c8c9b5"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "1a192082fcc2889ad0e8cf143494671e"
  },
  {
    "url": "posts/java/java-http-proxy.html",
    "revision": "fb4436d475dc4b4887512f44ff76bb71"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "3e6d1e50494efa04a77f4d8350338f0b"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "be93d00ccb09c53b0dafb082028dc26c"
  },
  {
    "url": "posts/java/java-spring-MyBatis-Annotation.html",
    "revision": "686c8d3327e17c193176bb1ed7acf1ff"
  },
  {
    "url": "posts/java/java-Tetris.html",
    "revision": "29bd81514d974bf75ccfdf4bbf52777d"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "97806e9051883a69783b249ce36979d9"
  },
  {
    "url": "posts/java/spring-RedisTemplate.html",
    "revision": "d21ec06c22a82cf378ae2569f5abc2e6"
  },
  {
    "url": "posts/java/springboot-disable-autoconfig.html",
    "revision": "24ae983772d5a9af225983f2b9444473"
  },
  {
    "url": "posts/java/springboot-schedule-task.html",
    "revision": "4ff69f52e64b7d6a50360b6423d1d230"
  },
  {
    "url": "posts/java/springboot-swagger-ui-custom-config.html",
    "revision": "d2bf665f5faaca584ff341b8ae4263fb"
  },
  {
    "url": "posts/java/TOTP.html",
    "revision": "36f53af81932c02e3d9c2e2c9c7681ef"
  },
  {
    "url": "posts/linux/docker-nginx-acme-trojan-go.html",
    "revision": "0618ce5bb9c3c4faad28df4c4ccb2362"
  },
  {
    "url": "posts/linux/install-ubuntu-with-xrdp-in-termux.html",
    "revision": "3724445b747905c6557befaf5142cced"
  },
  {
    "url": "posts/linux/linux-chm2html.html",
    "revision": "b2185bad2da60584fcb2931a894f41c0"
  },
  {
    "url": "posts/linux/linux-ecs.html",
    "revision": "659c27e67c546691b7e359dcf28e4d31"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "b1a6f752a4cae4c936262745ce3480b6"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "c7c0ab11299d533059bdc4f5e5bf12c9"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "a608c292017f2b6647a28720144bb4c2"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "ff90f0e19e34b633870895864c832f66"
  },
  {
    "url": "posts/linux/ubuntu-switch-sources.html",
    "revision": "f03e14d50376924c901eb30c63926b94"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "b2d5d4718c6de3b0be77161605e26ce3"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "7f78a12e6d8149460e77c080d50899bf"
  },
  {
    "url": "posts/linux/wsl2-install.html",
    "revision": "aa01739c32c25a51a934c765ad135ac3"
  },
  {
    "url": "posts/linux/wsl2-use-winip.html",
    "revision": "484dea19433b00806a295403a9c66496"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "6390bcaabcea36b2d3eacbab1d860ada"
  },
  {
    "url": "posts/macos/android-emulator.html",
    "revision": "494c80866d2f41a0bda851f85216fcc9"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "9f3d0387eb92cc392dcb705316de445d"
  },
  {
    "url": "posts/mq/ensure-not-repeatedly-consumed.html",
    "revision": "db27cb2739f59eb8d065673857f1c3ba"
  },
  {
    "url": "posts/mq/ensure-order-of-mq.html",
    "revision": "933838153d5a335a5a363262017da01d"
  },
  {
    "url": "posts/mq/high-availability-of-mq.html",
    "revision": "50a750ecdb08899aecf867dbf8b4f669"
  },
  {
    "url": "posts/mq/mq-problems.html",
    "revision": "c5f5e2a9b178ed038bcda2b22e3afcb9"
  },
  {
    "url": "posts/mq/why-mq.html",
    "revision": "02e60fa531fa03c2533b3f455512632c"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "5e2818bcc8d2290c2186eeaec11b026b"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "25c08af46b42dc6a2ef72eef4a32baef"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "2248abe77474516f0ed19971915e9363"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "8414c3eecb29d480a45cdd15031c5c6d"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "a0cf109f6f6aac7fd7d14cb24da7fe24"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "8f346f23c54eb0e5573a5d28d97fd67c"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "941c1fdbd1c69f1c3265a22f4457cba8"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "cf26b5e6508c815d5f61b55e26464afb"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "604311c1687bd56be923278e918eb39d"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "618d507264d3ec04fce58a2f9b622187"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "f70f933936c818a46135a1db61260549"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "a9cae3547613df625f9d70a3b600da28"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "56ab2aa59fb567de081be221cf6167ac"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "92360776c5d93a4184e13f24ad9d42e3"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "be93dfdd1a57e0597a56ba04950655b7"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "e69ad43d4a2afaf938e6556d24aff4b3"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "2dfeaa651e3096f210f7b1d38b01f23f"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "bfde118cb8662dcd516ca2951ac41b70"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "efd303ac4c4f90ff15df54b136e2252c"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "b375e2002a10233482aba8db2c10126d"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "dc17e8b6c2a71f3fc5c7827db05d86f2"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "b3bc9ac54f671d2c56356ee4df6a5287"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "ae0fb58de4bc13ad435e89d655e1157d"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "1583d859b616b3e7d22a5ab2095d2f1a"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "d2c8400eaf5c4d9475cd8286bcc2db16"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "19d96b97e12ec5367bb2738afb5615b4"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "dffadcd44605e3d16526854ec1989c41"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "403e4d8ba13efa5ccc2f906c96cdd54e"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "cc614589cd022edbb6d1ba46a99652f7"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "d3a79fd2f85728cf276d5385bfc7706e"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "54b4076dc3ed99a2937dda9eeb224b54"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "43444a0d1548f10032c815be16dfdfde"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "946ae37ea55a6622795ec866b33b614c"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "b30022077e52085a3d20c32fb4aa796a"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "d3d209e77cb1eb5048ad0501e4956361"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "4a9899a62f50fe22877af516a90136c9"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "1f39ce4374d2f9c107b398d746b962ad"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "90ab760c92e7f784c393db29060a89d1"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "63a6b501f0164e4d9113bbb57912856e"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "e4e5a837c9472db55d5dae91f39fefb5"
  },
  {
    "url": "posts/python/deadlock.html",
    "revision": "ce04e8a92f97d172517bbf6c8e79ace4"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "39feefefdcb58fa3df5576f5895b7069"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "db6599bae2dac141c90ddd8314d3802b"
  },
  {
    "url": "posts/python/python-dynamic-import.html",
    "revision": "e6b2406be50b2ef113cfb311687a3d1b"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "b38a74131fce14ad23ba2b3077d61bf3"
  },
  {
    "url": "posts/python/python-metaclass.html",
    "revision": "989386c91a67c50822a5e89ae353e5d2"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "c4830065d1bf0e507d4b870d1a497233"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "1ff0915bac514fa203b1b09b1a9dfa24"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "20d09f453be76c75a7cce73596a08d18"
  },
  {
    "url": "posts/python/whats-new-in-python3-8.html",
    "revision": "cae4045ba784e97195ebe58964911289"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "b229452fd7e95e13c641a7cfc971e367"
  },
  {
    "url": "tag/algorithm/index.html",
    "revision": "c9d195168c510fb3eb3c87dfe2cc936f"
  },
  {
    "url": "tag/android/index.html",
    "revision": "7a9541655e53e288f183bfa74c7c4a0e"
  },
  {
    "url": "tag/api/index.html",
    "revision": "6aea6a00d1849661a5c2291b62236bb0"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "978730de5c4365cd8c9e145028ec5a12"
  },
  {
    "url": "tag/context/index.html",
    "revision": "6b4907af2dbf384691c189228da78525"
  },
  {
    "url": "tag/database/index.html",
    "revision": "864c78c8934e1871e2018209b3a9092b"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "3f1b324ada5d19ada91cd492f39eb293"
  },
  {
    "url": "tag/emulator/index.html",
    "revision": "97d21632feb82b81f0ef0dfff8f7ce13"
  },
  {
    "url": "tag/git/index.html",
    "revision": "3a7a6caa551311ca9b54950aea347b6e"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "8ace3ffec657e4a9beec719ef11c81bb"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "a91bebadc23331a7c123660bcd070968"
  },
  {
    "url": "tag/http/index.html",
    "revision": "f928308a019964d6092dce16d00035f9"
  },
  {
    "url": "tag/index.html",
    "revision": "021a5fb0ea79d96b84f560d10121d9cb"
  },
  {
    "url": "tag/java/index.html",
    "revision": "1820ae3155d721add5a73292dcbca33b"
  },
  {
    "url": "tag/java/page/2/index.html",
    "revision": "c7628aefbd8b64d2893c35caa32a18a3"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "aada401f23fed0c5d9ed12e46c733e4b"
  },
  {
    "url": "tag/linux/page/2/index.html",
    "revision": "961f6f1c4a75ebf30db642cfe4cf1a8f"
  },
  {
    "url": "tag/macos/index.html",
    "revision": "ef801d554f64068596c18f4fd80e1998"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "8f6a87ad4af40ec51ad2083ccf77d11c"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "f73d69524e0a3df294e46fddabe7fdef"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "ee39df7b056f80d9d58fb9879087f39b"
  },
  {
    "url": "tag/mq/index.html",
    "revision": "119ad089c98abf38444ca94739cdc102"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "21e2c5426b9017c8b95b49fc24ba9273"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "53bf7377d17d1a5c98e8e1f82e62018a"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "ff0f2e3ae478d9c35fb747a764bd3190"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "543a5bec8e54872fc8740f9e4a5a307d"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "91ea77b854b407e3bb31077bce75c032"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "21cacd75325a195cbc44544d1ce97860"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "52bbfee568cb78b9717a62d325262941"
  },
  {
    "url": "tag/python/index.html",
    "revision": "d9c18983139fae27b0efb933e3037280"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "2a0f09d7fb2b35419d4404bb43989e3a"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "d337e266ea77a98ea7997662c0e384e7"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "57520420b0e5dbd1d30819887980e59a"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "8b9cc0d4cd9749ff8556b3dabaaa087e"
  },
  {
    "url": "tag/termux/index.html",
    "revision": "1c225424af67976128c413ae9afa705c"
  },
  {
    "url": "tag/trojan/index.html",
    "revision": "128a915cef658bbfcd8980bd927851db"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "f67f2ec7153dd22b03023b7ee9c6346f"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "30a19c73b207d028f4111d331829cac7"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "88355711e0250a4a312b4b541d2f64a3"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "3166c35711135f2a279e83f0dabfda30"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "2a628f8f34d2592f2c75740bebf1790c"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "e877a746f4ad1f7f38aa849f791ea319"
  },
  {
    "url": "timeline/index.html",
    "revision": "c3396d26a6df9b1479108751b4529000"
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
