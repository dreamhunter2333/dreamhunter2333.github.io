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
    "revision": "8b47f3c7738003425594169acc414eb2"
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
    "url": "assets/js/100.2275a395.js",
    "revision": "f1c66f3cafa62b3998b9a16fa9d595d4"
  },
  {
    "url": "assets/js/101.da18e826.js",
    "revision": "22b50be286140fd69950536532a33504"
  },
  {
    "url": "assets/js/102.cb597462.js",
    "revision": "df262d233e4f55c2f48e8d28cd5f77aa"
  },
  {
    "url": "assets/js/103.72843d6f.js",
    "revision": "51216e4d202472ae9c2e94b144786814"
  },
  {
    "url": "assets/js/104.90a43198.js",
    "revision": "3bb298a20baf63bae22e43dfdb96a3f3"
  },
  {
    "url": "assets/js/105.b72bc533.js",
    "revision": "103e44d059fc8a1b7ff1b7570605afbd"
  },
  {
    "url": "assets/js/106.722b3b7a.js",
    "revision": "9a10bed0535a7ecea9f4115bc4c938d2"
  },
  {
    "url": "assets/js/107.5be3f41f.js",
    "revision": "76b28fbf1483594326a55a3aa410a253"
  },
  {
    "url": "assets/js/108.d17b8db5.js",
    "revision": "ea2c8b2383e5297ac3037d5478b909fb"
  },
  {
    "url": "assets/js/109.dee5cece.js",
    "revision": "e768a92698b5c4663b6c411c47568680"
  },
  {
    "url": "assets/js/11.47bc4a45.js",
    "revision": "19db9262a8fc3992fe235d51eaca259b"
  },
  {
    "url": "assets/js/110.5a8e211b.js",
    "revision": "30466513dd2de8648be7510c83d00638"
  },
  {
    "url": "assets/js/111.dad6f0ad.js",
    "revision": "a7dddeb6b85d5f9366ede2365de1f764"
  },
  {
    "url": "assets/js/112.91fdc993.js",
    "revision": "84bd141dae972fa73f4de0afae8d7640"
  },
  {
    "url": "assets/js/113.be47c961.js",
    "revision": "baed9f718f06862a889a3a8d2b4248e7"
  },
  {
    "url": "assets/js/114.2c88ab19.js",
    "revision": "1ba25e6b81bf3208139c1d26b9d86aaa"
  },
  {
    "url": "assets/js/115.02d3a9b8.js",
    "revision": "0abf0c0a7d563cdb4c0488ad9907cca2"
  },
  {
    "url": "assets/js/116.11947db2.js",
    "revision": "0c4ff94e3c399e19cf5db11983b85dcb"
  },
  {
    "url": "assets/js/117.71db650a.js",
    "revision": "179b892f356d34d51cbc2b5dcdfc2daa"
  },
  {
    "url": "assets/js/118.8679fde4.js",
    "revision": "c1404939d8dd932e05ba244553111d73"
  },
  {
    "url": "assets/js/119.4142b66a.js",
    "revision": "ae3c021a2f8a5c9b6ac789517c5fae1a"
  },
  {
    "url": "assets/js/12.503e8ef8.js",
    "revision": "c9056c7445755f995df8f6aaa7f57b49"
  },
  {
    "url": "assets/js/120.3373c26f.js",
    "revision": "62e637b3e19aa3209ea7c81497828494"
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
    "url": "assets/js/63.7e2e5833.js",
    "revision": "5c6f8172a6a0f0c413fb1db71cda36cd"
  },
  {
    "url": "assets/js/64.e0e0f63b.js",
    "revision": "9af345f390bb40989c23543164381f91"
  },
  {
    "url": "assets/js/65.3d0656fb.js",
    "revision": "1b03244824eaa097f38e97f0e97e9943"
  },
  {
    "url": "assets/js/66.6569042b.js",
    "revision": "842fb682f622296f1a40011a95332d21"
  },
  {
    "url": "assets/js/67.53a90fc3.js",
    "revision": "4b8bbb4e4a59586bc3fa540eb6446d19"
  },
  {
    "url": "assets/js/68.ac56ebbf.js",
    "revision": "348b8dad2bfb5fcba42a2538e4657dce"
  },
  {
    "url": "assets/js/69.4ac9f97c.js",
    "revision": "96ecd814fc167e63d39b4000da3e7cd0"
  },
  {
    "url": "assets/js/7.10f00ff4.js",
    "revision": "86e4d2ed660f70d29ac03714e7596bb2"
  },
  {
    "url": "assets/js/70.68464b8c.js",
    "revision": "6c24633eab0f452720f9d4399649f5d1"
  },
  {
    "url": "assets/js/71.f68aa692.js",
    "revision": "b2393e163c6f13cfc3cb9a8e6e2727ff"
  },
  {
    "url": "assets/js/72.6cfd9bbd.js",
    "revision": "17609b4ee842c41235fc3504f3898bba"
  },
  {
    "url": "assets/js/73.c2798dae.js",
    "revision": "bb3e661904fc5adf71c0c8b6a598ae93"
  },
  {
    "url": "assets/js/74.f4cd3102.js",
    "revision": "9230c6c87a4f2098592c28109fd4a085"
  },
  {
    "url": "assets/js/75.8911820f.js",
    "revision": "7b9e1391ad99b4332f4f352578ec8677"
  },
  {
    "url": "assets/js/76.6e877f5d.js",
    "revision": "b0da3cf341b0ef6951272260ddf76a58"
  },
  {
    "url": "assets/js/77.992eee75.js",
    "revision": "106ffd7d9bcdfd55fc3bfbb20e5ecf38"
  },
  {
    "url": "assets/js/78.a473346c.js",
    "revision": "4ff7fa6621827c1b1f85b3ccaed7c288"
  },
  {
    "url": "assets/js/79.e6b507e5.js",
    "revision": "c4ba8e1591892aff2538d4a8153147ee"
  },
  {
    "url": "assets/js/8.26ed1ff9.js",
    "revision": "e39b5506af0f74a5591317583433a435"
  },
  {
    "url": "assets/js/80.528d6b28.js",
    "revision": "73c51da305c2a9ed44604a532e517ef9"
  },
  {
    "url": "assets/js/81.f9fdd2f9.js",
    "revision": "34c0adab56fbcf772b0d33f0a6c36e9d"
  },
  {
    "url": "assets/js/82.d38755c3.js",
    "revision": "183764d1a1efadc039cf7c50430aff50"
  },
  {
    "url": "assets/js/83.06bafd46.js",
    "revision": "502a96f7ef1f351eb06f49e1d1c261ea"
  },
  {
    "url": "assets/js/84.3cf5973a.js",
    "revision": "e23be195a212503dda54558a0caaf65b"
  },
  {
    "url": "assets/js/85.600eda89.js",
    "revision": "7b6075b2ecee60cbc9554f0aab5f9aa9"
  },
  {
    "url": "assets/js/86.791c061e.js",
    "revision": "07f50fda34be05009695746c832a9ce9"
  },
  {
    "url": "assets/js/87.4478cf8a.js",
    "revision": "7e60fa0f2a57cc300b88c310a5214823"
  },
  {
    "url": "assets/js/88.018f0a38.js",
    "revision": "a0f3a564c5ae4e393b86c1b5515436b2"
  },
  {
    "url": "assets/js/89.f2730224.js",
    "revision": "cb8d99652c8b93516a34ddedd8beff25"
  },
  {
    "url": "assets/js/9.5610a7e4.js",
    "revision": "af7c8d79832f6c6703e5c343bcccfead"
  },
  {
    "url": "assets/js/90.4bf1de02.js",
    "revision": "61197e39cd684cf26ff769e88f0c90d5"
  },
  {
    "url": "assets/js/91.808799ba.js",
    "revision": "d80d2fb733fa590a91d87700f12c334a"
  },
  {
    "url": "assets/js/92.e3a2663b.js",
    "revision": "5d740e56c5a6fa28b67ffc0455b1242e"
  },
  {
    "url": "assets/js/93.a575d725.js",
    "revision": "367948a6cf10f369a96fd8568a9e3040"
  },
  {
    "url": "assets/js/94.af2c786e.js",
    "revision": "453971f4abc28f514e08fc3ff7a24ee1"
  },
  {
    "url": "assets/js/95.946a8d47.js",
    "revision": "420941d00055849b0e83f8464921af51"
  },
  {
    "url": "assets/js/96.ebb72cf4.js",
    "revision": "0cff751e08f41cef04a252ebd94f5506"
  },
  {
    "url": "assets/js/97.52e8619b.js",
    "revision": "fe2294489bd509da978e45533fd1b242"
  },
  {
    "url": "assets/js/98.7ec4e034.js",
    "revision": "3eb62ba67329e6275c9906805b1bb601"
  },
  {
    "url": "assets/js/99.1a4da4f8.js",
    "revision": "c666502e5395d9129bf8c1ab069dd24b"
  },
  {
    "url": "assets/js/app.f0a9bcfb.js",
    "revision": "9e2593bb6eb668cabfe3d4e3d37d3b39"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/algorithm/index.html",
    "revision": "e24238697ef7461834b85b5721dc48b4"
  },
  {
    "url": "categories/database/index.html",
    "revision": "fa3855bc950a9b15087ac42706603cd2"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "9bd8827b07e8da98c0450d656e38013c"
  },
  {
    "url": "categories/front/index.html",
    "revision": "e4949c93b90c3aad5ee8da52a3497439"
  },
  {
    "url": "categories/git/index.html",
    "revision": "c0d9c371432f3b4e6d7d9a82a35fb261"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "425bf9f20612fed0299df9c0564c2215"
  },
  {
    "url": "categories/http/index.html",
    "revision": "76d8df34bc010f382c7d3b0702df49e3"
  },
  {
    "url": "categories/index.html",
    "revision": "d4edecb9efad51131316221ddb003133"
  },
  {
    "url": "categories/java/index.html",
    "revision": "805148093050fbb58487cce1e9f4a685"
  },
  {
    "url": "categories/java/page/2/index.html",
    "revision": "2d09a2df13fa12681304e16d71aa81a5"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "c5726ca9826428fd03edec15fa69f6f8"
  },
  {
    "url": "categories/linux/page/2/index.html",
    "revision": "6bf332fdc727620f7f297d2f446472fa"
  },
  {
    "url": "categories/macos/index.html",
    "revision": "69492ee5c5cae468f46da36b2e6e2eca"
  },
  {
    "url": "categories/mq/index.html",
    "revision": "e3ae0caa5d3ea8db8445372f9ff4d788"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "9c2cac2374ec958f42b7511a63ab10dd"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "09aa81cf49ace4f77de885f637db41af"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "6d16fe6c9a57cdeacdbbf419994ceb7b"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "49519cbd9ef7a4bbe9ddc4f3c502f18c"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "3ed4b0c5a5f8a27c6aa3e444e3d07a35"
  },
  {
    "url": "categories/python/index.html",
    "revision": "2859acec2623a3f39004f13533b196f1"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "820e7d6a394f2df5cf182d6ae0d62df0"
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
    "revision": "1fd0d0041bc7e7de9e98b5b80af7bf5d"
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
    "revision": "13dc7ca83766a792294dc4dd3b4c088c"
  },
  {
    "url": "posts/database/SQL-constraints.html",
    "revision": "5120b438bd192ff9b22e3f99ebd2c531"
  },
  {
    "url": "posts/database/SQL-keyword-order.html",
    "revision": "7a199fd51884be4a61ef20d11901adc7"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "0e5807956a8cd64b2750b862faf49c48"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "db7c5758c9bde8f322e7d6a60d6281b0"
  },
  {
    "url": "posts/database/why-redis-fast.html",
    "revision": "022c5cba75a3d1f4b715a7e40a098bc3"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "b6e380b0af480f0ec5d87df02f784185"
  },
  {
    "url": "posts/docker/docker-host.html",
    "revision": "766ec577a351734f1bfa3d9f0d288966"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "64f1dc0149d7d7211f7815ab911cf86e"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "bc263a5c319fff3d7c0fc175dad9a396"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "84b639b50fcd9019950eef28998ee829"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "bb0e112b7ad2232041333b1773eefa1a"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "bb0f9e96c0193596c2f5eaed3226fc97"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "94f0c8807c4e6fc80966adb97a2e4289"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "b72a5dc72ef7b087a7ba274ad07896a2"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "4affb70c21798b3adea0a81b4ff87227"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "4b58462f23364ee5e1b7eb13d4a06e47"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "69347905bd97450e123b43ee29388f08"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "5d2b6016d1da0ea4510072e7bfb3daf0"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "86a09817b9e08ff3944860dc7e8daa9f"
  },
  {
    "url": "posts/git/use-multi-access-token.html",
    "revision": "048e2c5c04238319a945f3cd726fcf44"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "e51f90d8d1744b97316d201881fee71a"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "d6f961ba1506fe4ed40fee9de125a1ad"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "e55d2ad4c4a584e8b7992e6a9fdf954b"
  },
  {
    "url": "posts/http/https-shakehand.html",
    "revision": "97070ff93407b3a8ca74c7b21624cd15"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "9d0875302b189d78be5ca1d3fd17bb3f"
  },
  {
    "url": "posts/java/java-http-proxy.html",
    "revision": "baa5380f0d744f9355edebbc051cf552"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "083badd9a89739bc61284f6ec3e6f022"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "e45831575582045959f962ec9d65c4a0"
  },
  {
    "url": "posts/java/java-spring-MyBatis-Annotation.html",
    "revision": "877f1db2543fb3f283115afcc1b517f3"
  },
  {
    "url": "posts/java/java-Tetris.html",
    "revision": "917eb13b829f9a283fcfb9b673610897"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "a47c17fe367a53d30fc3bfe286cc1a84"
  },
  {
    "url": "posts/java/spring-RedisTemplate.html",
    "revision": "ef05131bdc1962f69fcfd881a788d457"
  },
  {
    "url": "posts/java/springboot-disable-autoconfig.html",
    "revision": "7f56c1499f380cd46a0455896231841c"
  },
  {
    "url": "posts/java/springboot-schedule-task.html",
    "revision": "c132c9565864d35adf4c426b7dc6b369"
  },
  {
    "url": "posts/java/springboot-swagger-ui-custom-config.html",
    "revision": "632a647485bb3fdd7192f933954bce8e"
  },
  {
    "url": "posts/java/TOTP.html",
    "revision": "014c79ecb07eec88730813812b6d3fe7"
  },
  {
    "url": "posts/linux/docker-nginx-acme-trojan-go.html",
    "revision": "aed28972cf6670727a9ea392a263722a"
  },
  {
    "url": "posts/linux/linux-chm2html.html",
    "revision": "4516ef357d565fdd40b653a3ab845af8"
  },
  {
    "url": "posts/linux/linux-ecs.html",
    "revision": "bea2aec607074b156fe5307e051409bb"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "22d0b1792d1dafa037d4775385224544"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "a5652e43fe08ce15262ef0d0f9d9b247"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "7b93a77f73ec6372fddeef1013d3ad1d"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "83a1a814ccb98f22c3d6637338cb0b0b"
  },
  {
    "url": "posts/linux/ubuntu-switch-sources.html",
    "revision": "f1a9ad45e112abebbf87e0f5bdf25b03"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "a228572ee2e56cdeb95ac3acf6cfe9c2"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "1107a448cbcb6959f0675331f8ee217a"
  },
  {
    "url": "posts/linux/wsl2-install.html",
    "revision": "0f509270aebd81f662d28b530e2753e3"
  },
  {
    "url": "posts/linux/wsl2-use-winip.html",
    "revision": "0af739913eaa58e921973dfb2b3280fe"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "fd9a3c60e3374813dcb7872bdefcd4e7"
  },
  {
    "url": "posts/macos/android-emulator.html",
    "revision": "362858fa95cd403b1b08bdf4c5e355ef"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "090e312c677a6d253b39fe8a236b73d2"
  },
  {
    "url": "posts/mq/ensure-not-repeatedly-consumed.html",
    "revision": "4c676d0663668a96b3b2898bd09feae2"
  },
  {
    "url": "posts/mq/ensure-order-of-mq.html",
    "revision": "684a1cbc38124169585b682f6c5e06b4"
  },
  {
    "url": "posts/mq/high-availability-of-mq.html",
    "revision": "ac357cb6068701e6cb2458f7abb4b7d6"
  },
  {
    "url": "posts/mq/mq-problems.html",
    "revision": "ee5500437e1eec7557f7f83140274c01"
  },
  {
    "url": "posts/mq/why-mq.html",
    "revision": "80f86237190828dd21d6a0430369c91d"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "3bb7eca70a7b9b99f89394a329c548e7"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "fb0925aba73b50bc8dc7bdc515f2c6f0"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "7b2e947ab2ae7063e43f1d8bb451b54c"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "08b31f5d26c8aa675f673c2e80a229c3"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "6b21e3395c14e136259938dacc8b23e2"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "ff0cc1400ec212feb0daaba658575f7d"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "faf25d36b0bd99640707ec89df215ac5"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "067a6a9cc521914d94bbfce7f3ffbd2e"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "23a44f393e4da8bb70f9287f734dcc9d"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "507f2304eb0ca8ad10d87744f02a6578"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "9deae16211d020526c07dd52efb72008"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "4f74070e9d07ba8d8391292c75f040a3"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "87885c8acbe619d54f816049b3318bea"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "9a795f7b6c3cb287b84933434a787820"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "e3f47945032804545ea9b0b5464e3a12"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "c3e4f9bd993d4eec32ed18ed3077edb8"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "87e4c789c2731146b26029b4dfb2ac64"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "f764c0fa33edfdea44e48289f9d85beb"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "9a414562c1d84865c150542f0eb57938"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "3c7b8807e26556071b4faa40336b0de6"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "42f1f7ff0f3d6544aa07ea3c0599143d"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "903ecf8b5d1ee69b8c0f9216abe1323d"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "eab4907800fd5eecd752743389278ead"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "327b1d63a300bef0c6230c7396687142"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "ecc335811206c969350e53c63fd09000"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "e67b8fe2bf61cf26e0e03b40a920cb37"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "e7ab1e0f6f53008cc3e58bb9471fdfb9"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "05e786044ad962d4c09031e822a4082a"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "1b0b323bdf969a6aee66e5d9af876611"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "3984062204f41d475824c1d04fde8ed2"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "b533104ef8e8fc7efc44eda7f48589b3"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "60a8f9aaf6687688eea795d2efd2dc86"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "858ac8b93780dedf2f177c61b21bdfa1"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "b5a4933d9c75d4a49529934bab7d7b96"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "9a275556b47e236bf1f4f8e962dbeade"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "59c1d1bca61972189e67e22e5a94f2f3"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "0822783d3a061d936e90772c2ad6a182"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "99b281b0f9e1df6bc6bcee1b8b7fc330"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "1668c9963b37565f1798f6434336c1b7"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "2fc973ed5359fe0f200b8b10e755640f"
  },
  {
    "url": "posts/python/deadlock.html",
    "revision": "e217a44ed0b3b1a6384748829fc38911"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "7f68d741ae26d625993e6d08660c301b"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "1a46553cf1c832af00b9779b4014d1e0"
  },
  {
    "url": "posts/python/python-dynamic-import.html",
    "revision": "afaec89f0c56166fc2fc4e9be2d52511"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "7c3772f5edd99a187e278af7713abb6e"
  },
  {
    "url": "posts/python/python-metaclass.html",
    "revision": "0b6c1e2d8a6c484995da25470d370939"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "36c6346f4a977130888f70e02a8311df"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "ca8eea481e3474b8da58f543b2dfb7ad"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "426ed8be9cb2055f25b2e6efa9d20210"
  },
  {
    "url": "posts/python/whats-new-in-python3-8.html",
    "revision": "8e1f73217f623e8f4459dbf41a43c3a6"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "3df4ae6832b82cd90ac19d1b521969e0"
  },
  {
    "url": "tag/algorithm/index.html",
    "revision": "dd952471f9fa576ec1955597a5ace135"
  },
  {
    "url": "tag/android/index.html",
    "revision": "efbf4a4eccf9ad6c1a901c91f7a88274"
  },
  {
    "url": "tag/api/index.html",
    "revision": "4f83c6311e30807113a0e98b623c19cb"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "f0406693a18f0fd97988f5d563ce5301"
  },
  {
    "url": "tag/context/index.html",
    "revision": "afca625d7ca37000a4de7f8fe83ada32"
  },
  {
    "url": "tag/database/index.html",
    "revision": "464e61ad99950cd3528f318ff167df6c"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "0eb39f60ba71c34b58f382c117a51408"
  },
  {
    "url": "tag/emulator/index.html",
    "revision": "d44b255039eefe7d460251c6c70c18ba"
  },
  {
    "url": "tag/git/index.html",
    "revision": "1b3f69f5c4e2ca3379a0c4fabe3b4970"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "9689071e45fa612c456cf2c4e02f20e0"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "a6103ff181730ece96ec07388796d847"
  },
  {
    "url": "tag/http/index.html",
    "revision": "d6ee0f30dde48165cd1467d71a9a6630"
  },
  {
    "url": "tag/index.html",
    "revision": "8d45da3359ae80501512e1bc212e2229"
  },
  {
    "url": "tag/java/index.html",
    "revision": "f2ab2553a013bc1ff6127f9442faa35c"
  },
  {
    "url": "tag/java/page/2/index.html",
    "revision": "2295f8beeb839392ac251cf834edee8f"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "64dfbc74e49fc8ddd2788e107c5a0246"
  },
  {
    "url": "tag/macos/index.html",
    "revision": "cd1292c2c384a80f235d225e35fd721a"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "829d75798b7a0f4f47c09baed0546b17"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "07b60211c1156a79fc9265b9409b8220"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "a4f91416de2dc49e0fdb9dbe7fec27c7"
  },
  {
    "url": "tag/mq/index.html",
    "revision": "3bd3c5a2fe46c954b6cc7d4a37138841"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "2dccc98526ee1911a5b4699a09dfbc7c"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "aa22586b41276aaafb7cd14f4e908a8c"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "2a7890f9c75aa8c7abe9a82dc2ac747d"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "ce59363f93beb92aab91d2ade7da8a1f"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "3d7ec51fe2234c27daf06e2692da449f"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "d314e0f216b7294a27e6a8641ac32f8f"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "e0a62f4c37891a65c3418c7608b6bec5"
  },
  {
    "url": "tag/python/index.html",
    "revision": "79415992ab7940b5d9aa442bec472be3"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "8f171d1ba41f8b3bbea192719c7a4151"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "9b79a0c9c0ebb5823d0bc5692c86ef01"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "affab1d42b618c6ef47341d0f421b393"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "182e5581849f8629aef920d3ba14b90d"
  },
  {
    "url": "tag/trojan/index.html",
    "revision": "30edf027a697a95b9fc471df8e65b69f"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "2e3eff29a5c30cd2e3b72a8be8600e82"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "9d3bbcf0434a961bcd043109bd28cdcb"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "1f173a96403ae447d7864afb058b052a"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "addfab7c1b3734a50c795cdeb806fbc7"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "3991f759d5a3273de5e298d52173723a"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "299b4231eb52e5ac1af5cf0d6e0fc2a0"
  },
  {
    "url": "timeline/index.html",
    "revision": "87a013f80fc88d17a76a2437ea37d2db"
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
