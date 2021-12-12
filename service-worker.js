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
    "revision": "9f42cad542fd6f561c6cf0046de49458"
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
    "url": "assets/js/100.fe6c18d7.js",
    "revision": "9cdde526ee245bb19716236df1e74d53"
  },
  {
    "url": "assets/js/101.978d221d.js",
    "revision": "68afbcecc56fc774073e821ae65b1496"
  },
  {
    "url": "assets/js/102.848efcd7.js",
    "revision": "85dcc6dc76acf58dd4347102bc576315"
  },
  {
    "url": "assets/js/103.9b65e1a3.js",
    "revision": "bf31614483e7d672e7350d9d18023d63"
  },
  {
    "url": "assets/js/104.5b6d5ec1.js",
    "revision": "61255c9f9b66b1cb4c72db9d13b76d9c"
  },
  {
    "url": "assets/js/105.a3c29ada.js",
    "revision": "ba160b53a1511d7c61f2163406f95abe"
  },
  {
    "url": "assets/js/106.6d668529.js",
    "revision": "48e2b017cb115094d888a269d38756e5"
  },
  {
    "url": "assets/js/107.5427a4b4.js",
    "revision": "332ce8d6f08c89c06a6e6700a9abb421"
  },
  {
    "url": "assets/js/108.d3318ee5.js",
    "revision": "a42a772bfeedafd005815eab9ede0805"
  },
  {
    "url": "assets/js/109.b781ce1a.js",
    "revision": "9e6732b5339fbbc815587ddc9616cc9d"
  },
  {
    "url": "assets/js/11.47bc4a45.js",
    "revision": "19db9262a8fc3992fe235d51eaca259b"
  },
  {
    "url": "assets/js/110.8f11f1cb.js",
    "revision": "7298473163a47f5bd69fd701291ea202"
  },
  {
    "url": "assets/js/111.90ad52d2.js",
    "revision": "608b32455e0b7787d8d3c2fb2d06cb4c"
  },
  {
    "url": "assets/js/112.b662503f.js",
    "revision": "47f527bf977ad4fd4ca8d4598692f9de"
  },
  {
    "url": "assets/js/113.e5814b6e.js",
    "revision": "410a416f5032d9b32486bd08d9a48ab8"
  },
  {
    "url": "assets/js/114.7158407e.js",
    "revision": "254ea839270feda6fe7c024dff53da64"
  },
  {
    "url": "assets/js/115.7b6604ea.js",
    "revision": "d41b94dfe22a6daec21f6b5345a11f2c"
  },
  {
    "url": "assets/js/116.234b3f73.js",
    "revision": "6b832a4a8b103b882597b9a83ca595ff"
  },
  {
    "url": "assets/js/117.a8308287.js",
    "revision": "040f57f0a05e034691fa8f456a91be3d"
  },
  {
    "url": "assets/js/118.361ae5bc.js",
    "revision": "123fbbf3b7813202e48bf167dbb5cb8c"
  },
  {
    "url": "assets/js/119.a1055109.js",
    "revision": "712d10d6020ecc0c3d821f9f6c40a1c4"
  },
  {
    "url": "assets/js/12.503e8ef8.js",
    "revision": "c9056c7445755f995df8f6aaa7f57b49"
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
    "url": "assets/js/52.ff90642d.js",
    "revision": "d93794440064501ff3c3f2f34c19cafe"
  },
  {
    "url": "assets/js/53.29936826.js",
    "revision": "b8fc29e3b8b289ca3c4080243428b86a"
  },
  {
    "url": "assets/js/54.fe54fe5b.js",
    "revision": "ab3c6762fa4b0ec495b3ece9752c230a"
  },
  {
    "url": "assets/js/55.58499ecd.js",
    "revision": "dada0a6547836d753e32588ceba15221"
  },
  {
    "url": "assets/js/56.3a217054.js",
    "revision": "705ee570015e8fcc83ff35df6a90af42"
  },
  {
    "url": "assets/js/57.9c00ef30.js",
    "revision": "954e81be3950c22ad0d6f1d2b41bdea3"
  },
  {
    "url": "assets/js/58.d4b1de8f.js",
    "revision": "9fb1607e1ddf5ac18c224df15aef768d"
  },
  {
    "url": "assets/js/59.bdc76155.js",
    "revision": "3ba51d37d8db152a793d19ea22a23ef6"
  },
  {
    "url": "assets/js/6.354dc403.js",
    "revision": "02cf03ef48a6dbc4db87069885e9a6e7"
  },
  {
    "url": "assets/js/60.fc0d0e9c.js",
    "revision": "3650e500d03e46a0b5fd5df60fd4602b"
  },
  {
    "url": "assets/js/61.ea9f232b.js",
    "revision": "b409761aeaf79ba996c3079b199bee3d"
  },
  {
    "url": "assets/js/62.c433e64e.js",
    "revision": "c5b9c905dc70229c3844ff55f4f35bc1"
  },
  {
    "url": "assets/js/63.aa1f4aec.js",
    "revision": "878528e7e624eff9caa9cfd4980261de"
  },
  {
    "url": "assets/js/64.02c9c83b.js",
    "revision": "36613a4e2978c384bdc9178355b30f9b"
  },
  {
    "url": "assets/js/65.9689192c.js",
    "revision": "bd44d31f74b56c153893c7a964d7b698"
  },
  {
    "url": "assets/js/66.efeb07fb.js",
    "revision": "3b1c5e417a247294a0af9f8bafef476d"
  },
  {
    "url": "assets/js/67.13331214.js",
    "revision": "f778673f11ef4b4eb3657fb42aa1ffcc"
  },
  {
    "url": "assets/js/68.c88e1c66.js",
    "revision": "d6ccf2158844ba59bced4e089c1afa08"
  },
  {
    "url": "assets/js/69.a3d5c760.js",
    "revision": "c724909903046863c8ba04d738ff9d76"
  },
  {
    "url": "assets/js/7.10f00ff4.js",
    "revision": "86e4d2ed660f70d29ac03714e7596bb2"
  },
  {
    "url": "assets/js/70.09f5a193.js",
    "revision": "06f76f9bd3674c2f2b18521719bffd3b"
  },
  {
    "url": "assets/js/71.0bcf6bb9.js",
    "revision": "db66048e50e542a5534a4998ac29c423"
  },
  {
    "url": "assets/js/72.03a1fd0d.js",
    "revision": "9660218752832b1da85a4faf47e211c1"
  },
  {
    "url": "assets/js/73.af77b99e.js",
    "revision": "4845dc2287f14be6739889f0b112f9ee"
  },
  {
    "url": "assets/js/74.80a8eff3.js",
    "revision": "7c69543c460a2fe2b20eb01b6c036369"
  },
  {
    "url": "assets/js/75.5255d13c.js",
    "revision": "763047dd9d4a51a20ab7d56fe1630723"
  },
  {
    "url": "assets/js/76.d446d463.js",
    "revision": "9628317f4b3ba94d8845e508b0dad06f"
  },
  {
    "url": "assets/js/77.236d275e.js",
    "revision": "ef868ce76d4a5a8d2904b4c1d867c100"
  },
  {
    "url": "assets/js/78.055ef3ee.js",
    "revision": "df80fb0eaa7dcd48ccd051f3f4498962"
  },
  {
    "url": "assets/js/79.e74025ce.js",
    "revision": "6439b5fa08839d47a803f450c1ce2a26"
  },
  {
    "url": "assets/js/8.26ed1ff9.js",
    "revision": "e39b5506af0f74a5591317583433a435"
  },
  {
    "url": "assets/js/80.fcec3c81.js",
    "revision": "e15793fe17639409af176d915787b5be"
  },
  {
    "url": "assets/js/81.6c51ccc5.js",
    "revision": "526659019583fc6f91065dee03fc01bb"
  },
  {
    "url": "assets/js/82.84073ca4.js",
    "revision": "e1f201336c762233faaf7b2d0b0b3d43"
  },
  {
    "url": "assets/js/83.a4e7db06.js",
    "revision": "77fde1961a63643d12abb64287c66a2d"
  },
  {
    "url": "assets/js/84.1eaf1488.js",
    "revision": "06672803b1b925aa18acead36a3d5cde"
  },
  {
    "url": "assets/js/85.fe529b88.js",
    "revision": "4277d6e1f2d7efdd4de881afe37ab10a"
  },
  {
    "url": "assets/js/86.e5591b8d.js",
    "revision": "21d5185225d920eacbecef3dc2f72a82"
  },
  {
    "url": "assets/js/87.95d40854.js",
    "revision": "212951c6f5d9623f6e61c4c7a75dc633"
  },
  {
    "url": "assets/js/88.9bba2a6a.js",
    "revision": "0ecde771c40f0c1816be0e5d1e47200d"
  },
  {
    "url": "assets/js/89.6434700c.js",
    "revision": "012307a0c9d1e5a2bb437d959aa4444f"
  },
  {
    "url": "assets/js/9.c023b8fe.js",
    "revision": "78ca43ae6ef31e5e7846a44a73bf47fa"
  },
  {
    "url": "assets/js/90.2ff91622.js",
    "revision": "b691b64527145bd351f0c30d112ac87e"
  },
  {
    "url": "assets/js/91.88f4bbe9.js",
    "revision": "4827f20154728dbee3e2e8eb53b1cd71"
  },
  {
    "url": "assets/js/92.4f0b080f.js",
    "revision": "5458c2cb07507ed30e4ef625052fb022"
  },
  {
    "url": "assets/js/93.3bcb428e.js",
    "revision": "71db5e9f28a9ebde4a081478e117b6c8"
  },
  {
    "url": "assets/js/94.a59348f5.js",
    "revision": "ccc9fee207546fdb447f65c229b82dab"
  },
  {
    "url": "assets/js/95.6f0cf75e.js",
    "revision": "7ec0b59f79c28e54de0d6d7d5b58c501"
  },
  {
    "url": "assets/js/96.a5cf8a41.js",
    "revision": "16ecb0329e64db431df8e81613f323b7"
  },
  {
    "url": "assets/js/97.3a0ef238.js",
    "revision": "733833dc72429f915ff33f218af0cef0"
  },
  {
    "url": "assets/js/98.f02d24ab.js",
    "revision": "1dc5fb09d0fa463f52a188fabb56c345"
  },
  {
    "url": "assets/js/99.fb5cdeba.js",
    "revision": "220fd863f873524f7d4359d9533cb5a6"
  },
  {
    "url": "assets/js/app.efd6dc20.js",
    "revision": "46ffc6ff9b72a6c1e49e7a3068c5bd1c"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/algorithm/index.html",
    "revision": "d18c17a691a5d0de61199d046ac8e1be"
  },
  {
    "url": "categories/database/index.html",
    "revision": "3cc56d6d0bf6fa343c8cf19c1a7aacd8"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "101ea315bea1190f1cff4f847ec432c8"
  },
  {
    "url": "categories/front/index.html",
    "revision": "5829368a8f206637d9631ab8d80248d7"
  },
  {
    "url": "categories/git/index.html",
    "revision": "64803f24e405f6ed2b27f52df2ce6726"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "15aafa66b46ed11909271f49b65e009d"
  },
  {
    "url": "categories/http/index.html",
    "revision": "3b22d6cf2531557520bad406edeb984d"
  },
  {
    "url": "categories/index.html",
    "revision": "032e3941b97a3fcf6884bec37bdaba9f"
  },
  {
    "url": "categories/java/index.html",
    "revision": "0ed8d8cfa4bf2c1d813c57b476f76f5b"
  },
  {
    "url": "categories/java/page/2/index.html",
    "revision": "c490a4e02764e8c8105ceac022c3cc80"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "76a3d808f449afd1b16411bc66d16ad5"
  },
  {
    "url": "categories/linux/page/2/index.html",
    "revision": "090fc07666c202e187066244599073cb"
  },
  {
    "url": "categories/mq/index.html",
    "revision": "b5f61919d2b0f7e9d7b2ef7b16a4b96b"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "b953eb7ff15662cdbf1b895bad98ec4e"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "6ac7936e39fdcb37250f5d2ef88fbe26"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "f2062a702f4ca55260d49c4eeda59ff0"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "94cc72d26be5b141ef08af3b2808be96"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "d0c284be9378969da0cfb3fa53fb587f"
  },
  {
    "url": "categories/python/index.html",
    "revision": "019691046a1dea0579cbaf904e0697d4"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "f2fef2ec225b502451397bcd222509c4"
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
    "revision": "278f0811399a8cb5f8efedc9406fca50"
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
    "url": "posts/algorithm/traversing-binary-tree.html",
    "revision": "3d419d0f32a5604b0eecaf8fb6503034"
  },
  {
    "url": "posts/database/SQL-constraints.html",
    "revision": "216440628d1a95d2ac92210e683224e2"
  },
  {
    "url": "posts/database/SQL-keyword-order.html",
    "revision": "9e25d826192f50ff0638bc777b837546"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "adbd39efda6db2554de63ef370eb64bf"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "d550086520651b1f66e86840cb0b5ec2"
  },
  {
    "url": "posts/database/why-redis-fast.html",
    "revision": "52eab1d57d7679bea19ed788ffd6bd50"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "676f5f2c91252c9871220ca2696598c8"
  },
  {
    "url": "posts/docker/docker-host.html",
    "revision": "69c13b69617459695fa107164bc24916"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "6de1aa70b1de79e31c5df8bc2ced14bf"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "7f1e0d7eb7cf12551d6b7e4247d847a4"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "1f916c2d750dfdd9947969d9f1c1d0fe"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "ea846e7bcf509213ea2d6215df642d71"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "011b56d0ebf2739a100b71f609285484"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "60b9f3eaadd688f7921bb674967c12ab"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "96942ee8b5fbc8b1c1d51bc3952648bf"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "dd49eee0ce2e22610e1c9e1c7fba3079"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "3e86bf372461b7bf0b313f326a2be853"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "09147b39102270f8e48fb70c58cb0a31"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "b06da9b80be1476b4c21dd9e365eb0f6"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "d0bb0ebd65c06fd9dc95c6067724a755"
  },
  {
    "url": "posts/git/use-multi-access-token.html",
    "revision": "3c042e0d62a2763469dd2abb24a10ce0"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "9d768b6f530256bf759c302e53420eee"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "49040977dbeec4021fdd8dea7da88f3b"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "2694620ccb3d66e2ca05a922e43bda30"
  },
  {
    "url": "posts/http/https-shakehand.html",
    "revision": "80911e4fa8a3a99ec0612a0a9cc91a5f"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "c09b712fa3cbfbc37770bea98ffcc90f"
  },
  {
    "url": "posts/java/java-http-proxy.html",
    "revision": "753c0b398191b9b9e644297ab203bb8c"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "e0611382599b851fd2d174a2425f9f8f"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "d35edcf3daf443016affbb240ff9e5dd"
  },
  {
    "url": "posts/java/java-spring-MyBatis-Annotation.html",
    "revision": "a09befd54c9c793677c4ccba8f0a8336"
  },
  {
    "url": "posts/java/java-Tetris.html",
    "revision": "ad5cb760086d9c91f73b13cffb5554eb"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "511a129420ea5167f47304003d493053"
  },
  {
    "url": "posts/java/spring-RedisTemplate.html",
    "revision": "41af059ab142627995a73a012b0ab1b9"
  },
  {
    "url": "posts/java/springboot-disable-autoconfig.html",
    "revision": "e4c71ff9e776dde117c2aae2c7260e92"
  },
  {
    "url": "posts/java/springboot-schedule-task.html",
    "revision": "6d544d6f1123a7a1bf7d1ae8297e2929"
  },
  {
    "url": "posts/java/springboot-swagger-ui-custom-config.html",
    "revision": "38fbe17c51e5daf771e9618cb746f84c"
  },
  {
    "url": "posts/java/TOTP.html",
    "revision": "aafe47d2e7579561512412f50087ff7e"
  },
  {
    "url": "posts/linux/docker-nginx-acme-trojan-go.html",
    "revision": "ee0a0f1fc71176d79888d308c6e480a6"
  },
  {
    "url": "posts/linux/linux-chm2html.html",
    "revision": "4bab4a0bd4debe3249513a86e379a3fb"
  },
  {
    "url": "posts/linux/linux-ecs.html",
    "revision": "c7ad9186697a71db744e89ca6d3f3720"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "7a6ccd6c8fde7cec48906b8bb21ef370"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "4627dd6a298e9127fc5696db4cbbf566"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "a3ea52e24d2cecaa623ff3eb1c0e9965"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "776b2c411956c9a43809434dff67e932"
  },
  {
    "url": "posts/linux/ubuntu-switch-sources.html",
    "revision": "e622d21f295dfc13786da6dc9f60b09a"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "4b855f4cd5c837ddb838736d94a44d85"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "464f8fe84d06bf29eae4238a76cdf126"
  },
  {
    "url": "posts/linux/wsl2-install.html",
    "revision": "120bbe845dc527f17daa0926ec849b7f"
  },
  {
    "url": "posts/linux/wsl2-use-winip.html",
    "revision": "d536b3bb9215d283861c557b85b385b5"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "5341bca146148c587a4ef8f0e9f5e4b8"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "85478b314077e530d77cd74a7628d0db"
  },
  {
    "url": "posts/mq/ensure-not-repeatedly-consumed.html",
    "revision": "72d6180b3892c5b6c835d02b5377f757"
  },
  {
    "url": "posts/mq/ensure-order-of-mq.html",
    "revision": "1b6d8349daac9c6303bc5bcde05e45a8"
  },
  {
    "url": "posts/mq/high-availability-of-mq.html",
    "revision": "61f81180fa44f0f0e7792c97caab923e"
  },
  {
    "url": "posts/mq/mq-problems.html",
    "revision": "74a0c80d9e211bdcdf57c16dd4903036"
  },
  {
    "url": "posts/mq/why-mq.html",
    "revision": "ac658c02d0f2c508496cbdbff4eee123"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "ac31fdde1c67b261e9434bfe86d21771"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "fb112115ae50876af981edb60f3cb77d"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "ffdbd4db71420aca43c2200724fa3f25"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "9ef26b2b0853d0510f015d7e5a918a64"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "e0edead479fc63552983b5984aa9aae4"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "1c7bc939212ce862416f28caa517ed90"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "ff4819c0a937a24d87cf33f73faae90e"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "72299bed1652c51320581631d3f70988"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "7fdb15ffe01c1311b1955bad81dace03"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "a33ebd4a014a2fe393e60509f257edd3"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "85d89809648a3742b9a7bbf44d6bad09"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "611ab390aea66433a64de08d2061aaf5"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "adf35d3a7849f178b83f90d3327fdc2b"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "48df207f36661a392b6950e630714527"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "b11d6b6e7f4f6ab5b98c6f7ccbbfda4b"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "0f9753c894254f25be752b02ab3b6790"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "5a1c30a9f8abd06b3c185bc1b1fa858b"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "9132fd3000d40c65d0d6c2d7b12d0b13"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "a3936c5f4ec0a771dcc89810c6d72ed1"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "5ebbd6db9c9fd1f0fa582e4bbfe35533"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "cd76eff85dce3008cd484141335a9e46"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "5039f3c5328d5d1e129ddb3b100df6ae"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "eda8d98128e397d99274343323804338"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "599eb903595b5d54364fb650b872fe71"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "2cfa18e46c44f0344473c9d1d066ac91"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "dbf264e5160114c08bc11cfc4d6991c0"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "c8e144adcf61e443d5c57472a64d5039"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "a9b005b7c5d31e498a61f5008b42f36d"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "457ade3766e5b5e12dabc31899ef95e1"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "515b5321dd9fd6e7e2da2e3757eecc9d"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "01e3c0c38f244298db5dd999edfee7fd"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "abcdd35906d1c7bf1cf32fac5df5b877"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "17b27e40b3b2a5e62511fa2e996c2498"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "c08d56e167c985caacb999b3408a344f"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "e72da40d8fa090c26747387f8bc668f6"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "4bc4169942d4e645038266b59e373fef"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "106a001e2562ec7fc17ad5b5ed982b80"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "6a55fd3ae67a0a449216f502d67de31a"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "e784c9928383b37f19998467f1fb6c3d"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "2432963bd9081811732dfc0964229e69"
  },
  {
    "url": "posts/python/deadlock.html",
    "revision": "c21bb270d868aed447883dd44954a96b"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "e054477b7c22c3661d6c31031fa62900"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "c0062197195e391f3e38f061865f6e68"
  },
  {
    "url": "posts/python/python-dynamic-import.html",
    "revision": "884cefac71c6728ac5cba5d607016ea7"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "f43b54119e86cbae723a419f6205e6f0"
  },
  {
    "url": "posts/python/python-metaclass.html",
    "revision": "decdfb5c1ab41009214b92eceb0ec65d"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "cc7888cb92e7c162ebeae0ba7f50eb46"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "c842e0e9084c3f278768e4b620ca35bd"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "56de14bd2ce67b32f5d6c4f2d58afe04"
  },
  {
    "url": "posts/python/whats-new-in-python3-8.html",
    "revision": "c0590ce82c36c5767440af1ff580c7c4"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "7283307521b64b838059a648e223a432"
  },
  {
    "url": "tag/algorithm/index.html",
    "revision": "3c993432934925281d0f442bd7d7354a"
  },
  {
    "url": "tag/api/index.html",
    "revision": "b5a97480ee14d27b05eae0b1f3f93b30"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "64f0b5f8d43b53ce28c369ff2d66a4b0"
  },
  {
    "url": "tag/context/index.html",
    "revision": "759ed534b6574f79a2ec9cb23c72c80c"
  },
  {
    "url": "tag/database/index.html",
    "revision": "f69a233165a1fdb4aa74d9abe0d94c9d"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "b441c841bb2fd0c7d9d193e51d807f4a"
  },
  {
    "url": "tag/git/index.html",
    "revision": "2172133a3a8c810e4fe3cc49e4e41ef1"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "1c000b03b4e95b0b95b59a2417eff74d"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "f9dd65652092e9703f1c751b9d7675a4"
  },
  {
    "url": "tag/http/index.html",
    "revision": "fceb575c62da5ca3b29607c67056767f"
  },
  {
    "url": "tag/index.html",
    "revision": "f69aa0b0fd344f451808dedd31475bce"
  },
  {
    "url": "tag/java/index.html",
    "revision": "7103852d06c7539b3436ca13eb960908"
  },
  {
    "url": "tag/java/page/2/index.html",
    "revision": "e4ea329e7e6bdfb67e72a51cc8c3dded"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "3ad2de375195fcc33f6ee0e6f20b45fc"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "c0abad71db91761b6eb992cfa6064350"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "8023d1438d83b6a738a2441b80902ff8"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "c0c3cc43983c54aa20ab7ad9243b2bf6"
  },
  {
    "url": "tag/mq/index.html",
    "revision": "3cb4e041571046930f68ca9800f8ec61"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "ffd5a580e87788907a66f73576d1bc2a"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "1795bc865d3814a86fe650a3b6674ff4"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "0c853a3dcc5e370c708f98c9b54b16ec"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "3958dbc77722ea66adb92370b46b4b63"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "c0cf2b41dd12ec6910737d84dad0cb0a"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "c1c44b2349c8d4e6af6c9d7edf1dbe9e"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "b3fb475b08e39c285a95bdc6e749cfda"
  },
  {
    "url": "tag/python/index.html",
    "revision": "39fe9bc3d72f14cef75c309e3464380e"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "a17d4dfea1eaef712c93fc4194fed36d"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "550fb857f589d377180f8b51fbfb2ff5"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "15652072ebf47ad69bda03e668e77dde"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "229551bdb74a6f74b92fa4d471eda301"
  },
  {
    "url": "tag/trojan/index.html",
    "revision": "32e2626288963f09012a2d44904e097d"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "02a7a2a416abf0ec2e7cfcc21effcfca"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "6ccd0b4b0c037577601cc94640f9128b"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "97f85bd38092bfb503d2c32780af6f01"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "932271566e1b2e44f62fc45920a8bb2b"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "f1675c216a37abf7e1cdbe96816b4145"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "7e5294f27b0ad60bf116f4d17b7112ed"
  },
  {
    "url": "timeline/index.html",
    "revision": "6e82c41bb3b6c986c61d2dfb0420084b"
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
