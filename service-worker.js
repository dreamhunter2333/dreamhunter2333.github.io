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
    "revision": "de2a245091b2be6636d77bdcf38407e8"
  },
  {
    "url": "assets/css/0.styles.60a8639d.css",
    "revision": "12f282aeb218a63597e929600995a288"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.35d8bc8a.js",
    "revision": "292694ee406899feba93a8f100cff202"
  },
  {
    "url": "assets/js/10.cf8ceca6.js",
    "revision": "ef58e34573baeafc1814c7735e2780c1"
  },
  {
    "url": "assets/js/100.9ea1752e.js",
    "revision": "76c13afa24ba81d30fdfcaeed55cf492"
  },
  {
    "url": "assets/js/101.067ddaa7.js",
    "revision": "ac2f23ada5bd1f33b3b540705f6227db"
  },
  {
    "url": "assets/js/102.27fa6611.js",
    "revision": "fc2893793cd56b7fbe14c50a1e7602f4"
  },
  {
    "url": "assets/js/103.ac932852.js",
    "revision": "f19539fd01a0f5a31b69f9d5f8dd92a9"
  },
  {
    "url": "assets/js/104.b0e6d4d9.js",
    "revision": "32fc46452baa6b798e9a0da4ca74d136"
  },
  {
    "url": "assets/js/105.dbf6ad8f.js",
    "revision": "e3a6c14db89021d435eea7f21a88f3ab"
  },
  {
    "url": "assets/js/106.2daddf69.js",
    "revision": "37403547ff54a18d8ac259f10cc68543"
  },
  {
    "url": "assets/js/107.dc7b8d19.js",
    "revision": "e008a20b4a4f8a790611fc8d983be2cd"
  },
  {
    "url": "assets/js/108.879c9e0b.js",
    "revision": "1235ec179baedae46372625f2766e433"
  },
  {
    "url": "assets/js/109.4e35b9b9.js",
    "revision": "fb2eb3f3135e88c251477eed431b830e"
  },
  {
    "url": "assets/js/11.56fa1220.js",
    "revision": "2d99dbf21654c891c3e54a39200aa9d6"
  },
  {
    "url": "assets/js/110.d85e933c.js",
    "revision": "007232fd9957b52d097748d04a121c1f"
  },
  {
    "url": "assets/js/111.3ca1c266.js",
    "revision": "c37c3625a1003736e8468ab6914d516d"
  },
  {
    "url": "assets/js/112.416775d7.js",
    "revision": "2d744608790ee630e6c89cef1bef562d"
  },
  {
    "url": "assets/js/113.a40c6b34.js",
    "revision": "b289ed3385f6bcd7b36e0f2d6417fdb2"
  },
  {
    "url": "assets/js/114.84219227.js",
    "revision": "7b1b46958d18f4c609a2c4c1f57f7854"
  },
  {
    "url": "assets/js/115.df5eb0f0.js",
    "revision": "2800dcd5a443757221697532d39d9bd6"
  },
  {
    "url": "assets/js/116.2c2b964a.js",
    "revision": "ba72b6d2c71739852a9261c3fc697975"
  },
  {
    "url": "assets/js/117.5204bac4.js",
    "revision": "a2e4c90c37fd7cc3c965281b324ab5ef"
  },
  {
    "url": "assets/js/118.089f221e.js",
    "revision": "fa11c4e4c37779928f8409118b13ae55"
  },
  {
    "url": "assets/js/119.86e1a8ba.js",
    "revision": "260090694f9e972beb70938be93b2416"
  },
  {
    "url": "assets/js/12.c1117d51.js",
    "revision": "35e93f8b59747b1b4b9e47beefb9c50b"
  },
  {
    "url": "assets/js/120.bc97a442.js",
    "revision": "d85c9b55e88ddd9abae7ce838721e531"
  },
  {
    "url": "assets/js/121.916cee27.js",
    "revision": "746be2623f1870cc58c610276369a0f5"
  },
  {
    "url": "assets/js/122.3228db63.js",
    "revision": "a4b188a337687bad8a2a68fb41dd90bb"
  },
  {
    "url": "assets/js/123.cd3d5bc0.js",
    "revision": "437acb3aa27e063bfbf563a8aa6d3130"
  },
  {
    "url": "assets/js/124.5fef71e3.js",
    "revision": "6a4eb5c7d5f7c8f796b6a8544e58d3ac"
  },
  {
    "url": "assets/js/125.9b86e8d3.js",
    "revision": "fa65261c1bb7ed164479093162d9f9c7"
  },
  {
    "url": "assets/js/126.d24ffa01.js",
    "revision": "7f2403131815b919b99c0bbf81049edc"
  },
  {
    "url": "assets/js/13.f90997fe.js",
    "revision": "6e1d29ee5c2d81d3bd37bd8f639cd87c"
  },
  {
    "url": "assets/js/14.0c191c80.js",
    "revision": "80a61210bd82708d7f83cd387b6614a6"
  },
  {
    "url": "assets/js/15.22b829cc.js",
    "revision": "cd116bd62d13a7350491b88b1b16521f"
  },
  {
    "url": "assets/js/16.26dfc42a.js",
    "revision": "d418881106796c4fa05c2b38457ca8b7"
  },
  {
    "url": "assets/js/17.39927ac0.js",
    "revision": "336bd64cbaecbf0503740205b1b23b7a"
  },
  {
    "url": "assets/js/18.a48ab4e0.js",
    "revision": "e959fc3442f7c28652e53525b7ea10fb"
  },
  {
    "url": "assets/js/19.2fa60d64.js",
    "revision": "0d5e1f4b989a758ef787b5739741f3e1"
  },
  {
    "url": "assets/js/20.23a369b1.js",
    "revision": "f5b65ffa06969c5261bac25d4d1ce7a0"
  },
  {
    "url": "assets/js/21.5ce8e7af.js",
    "revision": "d0ac8a78d0944b9065bcad7c9bc48f25"
  },
  {
    "url": "assets/js/22.ed3de298.js",
    "revision": "f4a8d20542429be38a35349cf1ffff51"
  },
  {
    "url": "assets/js/23.c81aafea.js",
    "revision": "6dafe79a86ebc151ccc196609402feac"
  },
  {
    "url": "assets/js/24.f8e7cbc5.js",
    "revision": "098a3021716be0b0f4d4f5cbbd763c1d"
  },
  {
    "url": "assets/js/25.073e04c0.js",
    "revision": "4aa2d297cb7c62a90efd7e45736a01a4"
  },
  {
    "url": "assets/js/26.9ea1876b.js",
    "revision": "81f4d0d2c4603960c64933ca279bfc04"
  },
  {
    "url": "assets/js/27.bbd284f5.js",
    "revision": "4afecead7915f10575661352e2e864a4"
  },
  {
    "url": "assets/js/28.2ee89293.js",
    "revision": "3c28bf94f51133551a6b73838d230505"
  },
  {
    "url": "assets/js/29.43c57817.js",
    "revision": "f46414adf1f00621eca29bfb69dbe802"
  },
  {
    "url": "assets/js/3.fc85ad50.js",
    "revision": "2b6730250adb6eeb11730ebc5e4fa8ba"
  },
  {
    "url": "assets/js/30.7e30dc2d.js",
    "revision": "cf2d403938cc6633be1a50da4434ba3e"
  },
  {
    "url": "assets/js/31.dd6f81f8.js",
    "revision": "6f04ab9b6029a1df4141a269bb681879"
  },
  {
    "url": "assets/js/32.944bb00b.js",
    "revision": "e59df4c6c4780613665bb26486f5ba29"
  },
  {
    "url": "assets/js/33.a0c8cd79.js",
    "revision": "894a1ce6c9f49ace83ba37b923afd0d9"
  },
  {
    "url": "assets/js/34.cae1af5d.js",
    "revision": "1b846cffcad2b7322758a8967a8e0d0b"
  },
  {
    "url": "assets/js/35.6058420b.js",
    "revision": "78f35823fa7f0d9dd12c9ebfaea88fcd"
  },
  {
    "url": "assets/js/36.90cbe208.js",
    "revision": "f32d69363fe5da2a78d1d642654dd3c1"
  },
  {
    "url": "assets/js/37.4e4b19c5.js",
    "revision": "f08869e43e6996f4d1437de61f6ab3f3"
  },
  {
    "url": "assets/js/38.d9a36676.js",
    "revision": "ff83bec79addc9f19cacc97255431436"
  },
  {
    "url": "assets/js/39.b112df53.js",
    "revision": "2f75459256091d32c677b35a9f9d0058"
  },
  {
    "url": "assets/js/4.f0e4a64c.js",
    "revision": "a3a6d548e27324bf11ea3a294f0999d2"
  },
  {
    "url": "assets/js/40.71450179.js",
    "revision": "b9395c4b99bd5294dcf1cba82080a765"
  },
  {
    "url": "assets/js/41.3b996e91.js",
    "revision": "699bc5dcdf1fa66ca84f85cdc4828232"
  },
  {
    "url": "assets/js/42.60e937d4.js",
    "revision": "4d8dadf285b498e8b2d70159462f43b1"
  },
  {
    "url": "assets/js/43.7f908201.js",
    "revision": "a999c7addd6e5b234b543c45a674914e"
  },
  {
    "url": "assets/js/44.4eb7b0a5.js",
    "revision": "9d8bad3f9fe50ed469ea5523b239d79b"
  },
  {
    "url": "assets/js/45.717b06b0.js",
    "revision": "ba1351685eb784676a391e77a8d771e6"
  },
  {
    "url": "assets/js/46.ff5a3010.js",
    "revision": "80e08f3037726b285f96e9a540f45183"
  },
  {
    "url": "assets/js/47.941d56a6.js",
    "revision": "1882350eb4751ee709302a894b842367"
  },
  {
    "url": "assets/js/48.085a1d16.js",
    "revision": "7c3ecdeb723b71f6ffe629de059e35ae"
  },
  {
    "url": "assets/js/49.6b527e54.js",
    "revision": "6a6eb378ad7ea3eca4a2d8fc26b8d412"
  },
  {
    "url": "assets/js/5.450070d9.js",
    "revision": "84d55659908fb49009965390d1eb5e93"
  },
  {
    "url": "assets/js/50.546b4adf.js",
    "revision": "fbe5edfcc014f486fef88de17b59cdc9"
  },
  {
    "url": "assets/js/51.19a3f9dc.js",
    "revision": "31635c82dd317177bc69a8b7ec6eb0f0"
  },
  {
    "url": "assets/js/52.78e34803.js",
    "revision": "73a050c0b3ea523f6d2c84390a167434"
  },
  {
    "url": "assets/js/53.5ee6d1be.js",
    "revision": "34402e4cc0210939e27e495f978b2b56"
  },
  {
    "url": "assets/js/54.4a365f85.js",
    "revision": "4dd8f7f8528bb9c471c1f7aba22b0be7"
  },
  {
    "url": "assets/js/55.774144cf.js",
    "revision": "7bc6a2abcf0569342cc764ab610b0063"
  },
  {
    "url": "assets/js/56.e0590a18.js",
    "revision": "212597f636e0e413b6d0e7d765414f1b"
  },
  {
    "url": "assets/js/57.b44ff905.js",
    "revision": "24042815a5ec36a77a1b85136f4b4c12"
  },
  {
    "url": "assets/js/58.9196588a.js",
    "revision": "ff88e0dca8be1a7e7a479ea6bcd9bff3"
  },
  {
    "url": "assets/js/59.4c074663.js",
    "revision": "f71593228471985ff0298f7788371bce"
  },
  {
    "url": "assets/js/6.1094c60a.js",
    "revision": "6ea4ea1785806a00b13e4a4d5b5e1d52"
  },
  {
    "url": "assets/js/60.a3844a1b.js",
    "revision": "ce52e73e4ca7234d8b814f5263fa90b0"
  },
  {
    "url": "assets/js/61.55646fb9.js",
    "revision": "439c9ed1f5cd95625510439f09bc6557"
  },
  {
    "url": "assets/js/62.01beaa7e.js",
    "revision": "38b4ae92b9bcc7616b41912be97d806c"
  },
  {
    "url": "assets/js/63.b8a2648d.js",
    "revision": "41f77675fbed4c16cd4b0dfd4e7d2394"
  },
  {
    "url": "assets/js/64.d22facea.js",
    "revision": "ea7508a3d24f9150608c799a79b228fe"
  },
  {
    "url": "assets/js/65.1167cf93.js",
    "revision": "b359cfd69d275fd4b731b0d2eadf3110"
  },
  {
    "url": "assets/js/66.619204fe.js",
    "revision": "ad89ef4b8eaf417f3ab9c39baa31965d"
  },
  {
    "url": "assets/js/67.37da34ce.js",
    "revision": "1c3391dd39869df529f711a33700c2e8"
  },
  {
    "url": "assets/js/68.63375dae.js",
    "revision": "147335639733eec1e11608dd4ed1426b"
  },
  {
    "url": "assets/js/69.85b37ea7.js",
    "revision": "ace16ccc2c446d42a398598f3d2b5837"
  },
  {
    "url": "assets/js/7.3bb0b6b0.js",
    "revision": "4c86bcbcfea41eccc2ab77f871fa6e83"
  },
  {
    "url": "assets/js/70.58b60ace.js",
    "revision": "feb5d9598be01a75dd1bbc90ec2c401a"
  },
  {
    "url": "assets/js/71.d431faca.js",
    "revision": "b49d471abc2bbf8b7fd4957848a00260"
  },
  {
    "url": "assets/js/72.cedd2f60.js",
    "revision": "13c135d445b813db92d39599baea34b5"
  },
  {
    "url": "assets/js/73.652855ca.js",
    "revision": "3b7a42c27a25ee8965baae2f5d11e5d8"
  },
  {
    "url": "assets/js/74.5e4e6d36.js",
    "revision": "d69154f2603f00417432f9fd6d9b35c9"
  },
  {
    "url": "assets/js/75.afd68121.js",
    "revision": "1189f396d85171c5ebe1a3642602efae"
  },
  {
    "url": "assets/js/76.ac4f709d.js",
    "revision": "c35f517566f7eac7918c61541acf757f"
  },
  {
    "url": "assets/js/77.ce35e7ea.js",
    "revision": "15a7d139216d3e49599385288250b5f0"
  },
  {
    "url": "assets/js/78.1fa3cac5.js",
    "revision": "430ba2f166037342e483630dd07f7721"
  },
  {
    "url": "assets/js/79.ef05beef.js",
    "revision": "ee2b1fdd6b47564cedf8503888584a3a"
  },
  {
    "url": "assets/js/8.4f49f52f.js",
    "revision": "83e02ff7c4c03d15d8274800a668b7b8"
  },
  {
    "url": "assets/js/80.9023a5a4.js",
    "revision": "bd8c06f3b8d9f00a1a4690bda6d20ca2"
  },
  {
    "url": "assets/js/81.f67cea89.js",
    "revision": "8d06f9935de086f0189bfa0ab1cd3f02"
  },
  {
    "url": "assets/js/82.fec006a4.js",
    "revision": "c47e492ff1c7164dfbd658756c18c77b"
  },
  {
    "url": "assets/js/83.88c024ce.js",
    "revision": "605db2615b316363bcbec434725c8aae"
  },
  {
    "url": "assets/js/84.d817c721.js",
    "revision": "3178f882469d6050815ddb26bf9d8e05"
  },
  {
    "url": "assets/js/85.0a705519.js",
    "revision": "22954b1909ed129e4567868686f29b11"
  },
  {
    "url": "assets/js/86.9e489435.js",
    "revision": "a4445db46c38b3527d2f4dd2cdf1d0e4"
  },
  {
    "url": "assets/js/87.49848d9e.js",
    "revision": "f8b231607581e6a1721abeead81656ce"
  },
  {
    "url": "assets/js/88.3d69266b.js",
    "revision": "9e61fd13d23243f64e2ad2df5475f56f"
  },
  {
    "url": "assets/js/89.c184e0d4.js",
    "revision": "ff043d669db1297e2ec3b8d53964f313"
  },
  {
    "url": "assets/js/9.79f2c86b.js",
    "revision": "71baca27e628bfe1523316df49b61eee"
  },
  {
    "url": "assets/js/90.282edaa2.js",
    "revision": "36bebba860da0e202e616b412305b019"
  },
  {
    "url": "assets/js/91.67123e9f.js",
    "revision": "a7ecb3ea97a5fce273d0ac93f8bc8824"
  },
  {
    "url": "assets/js/92.48c96b8f.js",
    "revision": "93a3b783bb8fe2162d09dfa0c7ae2b3f"
  },
  {
    "url": "assets/js/93.87a26970.js",
    "revision": "a9ef6f0cb6abf56a03c4f3a49e42ce9a"
  },
  {
    "url": "assets/js/94.1cb66394.js",
    "revision": "6f433d52fce92b37c72f346367299c0e"
  },
  {
    "url": "assets/js/95.b52c4d7b.js",
    "revision": "41e47f1224061c763bbc66a8ddf80c14"
  },
  {
    "url": "assets/js/96.8b7f4018.js",
    "revision": "f1134949bbd05cb0478a647490f23501"
  },
  {
    "url": "assets/js/97.d5966386.js",
    "revision": "e0f6b1dc7bb2a389d438f86e5f7a4eb4"
  },
  {
    "url": "assets/js/98.aabb316f.js",
    "revision": "d371e294381ae1e195d669c921c24c26"
  },
  {
    "url": "assets/js/99.ccbf3f78.js",
    "revision": "453556cbeee7efa3227bb51cb32ab6fd"
  },
  {
    "url": "assets/js/app.242edbb6.js",
    "revision": "40f4d4da4fe5422c3101b84b5e03d92a"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/algorithm/index.html",
    "revision": "b2e82be1d5b55abdfcbbafba24997aed"
  },
  {
    "url": "categories/database/index.html",
    "revision": "3adc9c02bf19d5b0c1cda0db8a153d0d"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "711660cae17813359e439c76663669b1"
  },
  {
    "url": "categories/front/index.html",
    "revision": "146a0e1b945001f851d710d99430ae0c"
  },
  {
    "url": "categories/git/index.html",
    "revision": "fc0892971022e2fc045814ed22aac52d"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "db323457904525d6abf1e9a622fe5908"
  },
  {
    "url": "categories/http/index.html",
    "revision": "3ec0af01f0fb1b80616ddf8ea05ab0fc"
  },
  {
    "url": "categories/index.html",
    "revision": "34363db0ff086f03999c5790d0350557"
  },
  {
    "url": "categories/java/index.html",
    "revision": "e8b71ef51695710ddb6c608dfaa35005"
  },
  {
    "url": "categories/java/page/2/index.html",
    "revision": "98fe248c42e5f3cbe7ec60af04bff93f"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "644465ce3db2fd0a5f6a882d7d592a12"
  },
  {
    "url": "categories/linux/page/2/index.html",
    "revision": "87a89ca9df9a5c902bc8bbc143009129"
  },
  {
    "url": "categories/macos/index.html",
    "revision": "21fa19de79e5c03e491bc3868b078e5e"
  },
  {
    "url": "categories/mq/index.html",
    "revision": "e64e3550e9fcf0939a6a28882914c1a0"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "49bd87bf9aff9d1bb2a139855d8548c3"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "f69c997ee424ba90e5611be7ef29192b"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "c628cc7ce56ed13d2784d281a383e5c8"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "bbbc6ed7422b3be7bbd907195d45eb64"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "2b7612f681a6bffe5ca46e258c1f0621"
  },
  {
    "url": "categories/other/index.html",
    "revision": "5a4f97c13838bdfc4775ff11b056d13c"
  },
  {
    "url": "categories/python/index.html",
    "revision": "9bf3530a3e0196e43985ab5667472465"
  },
  {
    "url": "categories/python/page/2/index.html",
    "revision": "1b9520cfd908063c157b12d1180f547f"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "3e4b189d2c7d99b30767aa6df4fbf4b5"
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
    "url": "imgs/iqiyi-danmu/br2Object.png",
    "revision": "22958c19f639159b01415a79c1bbcfc2"
  },
  {
    "url": "imgs/iqiyi-danmu/F12.png",
    "revision": "b0719d0f9e1a7f26b9ca7cad62be5f10"
  },
  {
    "url": "imgs/iqiyi-danmu/initiator.png",
    "revision": "e09a0b3ec85a039052ce5b87ac73510a"
  },
  {
    "url": "imgs/iqiyi-danmu/proto-danmu.png",
    "revision": "7eb3638b85028ba7ceaddebc351cdac4"
  },
  {
    "url": "imgs/iqiyi-danmu/wordcloud.jpg",
    "revision": "5b22dca8d06f3f1be6ca3dda82b89bc7"
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
    "revision": "6a317cd430b4586d85c73f73899cac54"
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
    "revision": "5589b0113f4021aa93fa6f2f5a99f1f7"
  },
  {
    "url": "posts/database/SQL-constraints.html",
    "revision": "d9f7bc6dd0d8ed90e4cbfa17bcdd3d5d"
  },
  {
    "url": "posts/database/SQL-keyword-order.html",
    "revision": "a9a4716130266dd81c35577168ae771d"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "d179845758fe6ebb24a1b16a50ea0c23"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "a41562364c2b36222c61c6cc59664812"
  },
  {
    "url": "posts/database/why-redis-fast.html",
    "revision": "0e12b30a543fc085aacfd859ca704fbf"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "78662d264d1539b7f05e2d2bc37bc08c"
  },
  {
    "url": "posts/docker/docker-host.html",
    "revision": "0f076db13765c20ff690bfa386df57dd"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "410f330ad0864c92c0767216822defd6"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "40af99961ccfe29df0b0fc8d38d90c38"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "42f2b4408ffb8c753614c36da2062761"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "fa3b8715f2fd30c7f915268965d36e55"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "cb56e9d501eba49e027157dd2bfa7049"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "3861f4ab9f8df1450671784676970573"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "6ab9044e77bd28fa0840bc0326b6a39e"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "f4ff4eb27c83ff161de8567cd6b4c652"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "9dd1ef71feb90206103a2887052ad8be"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "5db7cbbbb7fed41649320b34d5b5e78b"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "e30d2598a7d33bf8d67fc147f4cc4c01"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "fc07c70281dd4c8d987139e7ae7d6a82"
  },
  {
    "url": "posts/git/use-multi-access-token.html",
    "revision": "3c08b8bcb1a3f145bf1b6525c5ded904"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "4a61d59bfcdf9fb60c6cf598551b4a3a"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "2947afc4d64750924f0f323c8e67ca62"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "d61e5acbc607075c29e6255b54c02d72"
  },
  {
    "url": "posts/http/https-shakehand.html",
    "revision": "658a2da8139e18b7c95263f8ebaca5a5"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "c05f3c724f760a452db8b26d9aca845e"
  },
  {
    "url": "posts/java/java-http-proxy.html",
    "revision": "34f2c281c9634fc7b3d49be572a77516"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "8688df7f505dd55f51b4d6b8fe7fad9c"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "e8aeae6dd069c3b522dce2cd5f409a02"
  },
  {
    "url": "posts/java/java-spring-MyBatis-Annotation.html",
    "revision": "cda3fa2bc182a191599581addf12e0f3"
  },
  {
    "url": "posts/java/java-Tetris.html",
    "revision": "2bbc9c3e1c402314a443fea828bc0fbe"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "e0294dbb47f76021f8c06721ea1b4c1f"
  },
  {
    "url": "posts/java/spring-RedisTemplate.html",
    "revision": "d6e20fca04b23b10f7f1a52c64ea7052"
  },
  {
    "url": "posts/java/springboot-disable-autoconfig.html",
    "revision": "fc3ada45eaf35c5117e2e6ac577b5d96"
  },
  {
    "url": "posts/java/springboot-schedule-task.html",
    "revision": "55cbe00f050347dd974d8ef378295da8"
  },
  {
    "url": "posts/java/springboot-swagger-ui-custom-config.html",
    "revision": "bdd883ead0d42e5fc05653133a93ac51"
  },
  {
    "url": "posts/java/TOTP.html",
    "revision": "adcec69368497281393b0580f86a6da4"
  },
  {
    "url": "posts/linux/docker-nginx-acme-trojan-go.html",
    "revision": "256c78927f505884cf83012a03d402e3"
  },
  {
    "url": "posts/linux/install-ubuntu-with-xrdp-in-termux.html",
    "revision": "93ed63cf3cd1e1be152740b528782420"
  },
  {
    "url": "posts/linux/linux-chm2html.html",
    "revision": "34dd4c22b0651460b97f50ead36700a6"
  },
  {
    "url": "posts/linux/linux-ecs.html",
    "revision": "67dfc73e96429ff18da4810ca4bc15de"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "9dc6941953b3b7b2ad68467aa4b89258"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "a1dde0440864bd7e31e069a8e02a97b1"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "f60de45848676147e2eff3f364ccd061"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "e5709349a0c3845203354f10132e2a1e"
  },
  {
    "url": "posts/linux/ubuntu-switch-sources.html",
    "revision": "eaa90227b4bb04519ff981ac6c98da0c"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "507432f269de5ecb9d7e5edcc5e34ebe"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "a6309475620ac3cb660125c92417d676"
  },
  {
    "url": "posts/linux/wsl2-and-docker-compact-vdisk.html",
    "revision": "441c0aa4cc6679613def894cb794a37a"
  },
  {
    "url": "posts/linux/wsl2-install.html",
    "revision": "d0031763c0069a79ed9feb170fe9e255"
  },
  {
    "url": "posts/linux/wsl2-use-winip.html",
    "revision": "14bdd1e0f3c0b6c20b4c8caaa23da0e5"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "03c6faaf13faabbfcdf310ec068bfa61"
  },
  {
    "url": "posts/macos/android-emulator.html",
    "revision": "f0c5970611c8cfe72a3b9d732efb5068"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "4690be6f53c30991c621ca8a3f5611e1"
  },
  {
    "url": "posts/mq/ensure-not-repeatedly-consumed.html",
    "revision": "9d7ffa2b2f335d9c940e864b167666af"
  },
  {
    "url": "posts/mq/ensure-order-of-mq.html",
    "revision": "454b016b092480d89f8a263c1741db53"
  },
  {
    "url": "posts/mq/high-availability-of-mq.html",
    "revision": "8c0e9b770d64f639bd54753fe242e499"
  },
  {
    "url": "posts/mq/mq-problems.html",
    "revision": "8ed8735b38d3806f87a82b98fe66bba2"
  },
  {
    "url": "posts/mq/why-mq.html",
    "revision": "b5bc76f9afe91f1b8887c842de941f78"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "e02b0823387d57ed5d16ffe5df9f5265"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "ec3cc3025f5cee60c0527596883056e8"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "68b268c5b90cddb9d90acc465954337f"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "e8052413d40eb916229878411e741edd"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "e03928e65524156f26904962769ed597"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "d4e20e9ffdfdb9465cadfeb87b9973d7"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "fccec79d944d70310e3f5e120c2c68de"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "0e8f9875cf532ae237ec9db734618ea9"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "69faa541a4ff32c33927f3d0d7b75d58"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "4e4a2c97fcca072da1b157d8dfc43b73"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "9de071f09bf2c48abd220598d269322d"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "8fc7b290b7a8e5251fd695951ea22477"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "6e543a0dfcf66d4e9fbc78a15243535e"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "e3f16e3436cdc37f16a9fd4e3dc2f43f"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "a298fbf8fe99da4df01e28d094cd3e24"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "2159267911da82bd896e47579ba385ee"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "eee12ca666b3d530b80b48efff325628"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "c4a291d9ad86af6c645dc095105efae1"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "28b964e069d27e2434fd88c2a36f15b5"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "ac1124d427425ff1679d797cd34875e0"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "6a0a62042741b62dbd77357db65e3e9c"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "6660da3f7f38b56395cd0a2b433f2172"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "4421aae9877d240414dc66fc42199479"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "6b4022ee5d82fefdac962e4d8a65d46c"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "a54b835d2c2ee0ee43f606f7d3fce977"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "f07281afce4f04bd39a13821ed46303d"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "f639a4b3b7b4aaee2ea99a7914289584"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "594e90b11c0504dd2beead345f273030"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "20f24f2af849d0bd273f2553012cd568"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "35031c8d3c48fe4dd34aa891867361a4"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "9087e108c7f7b718eb9c1bf66c3c6454"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "e95e2f1b0aa28d9e67a1c89daa2d49f1"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "fec897f3ec5a1409d533e9140c1569b7"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "fc236f0066dd2a6edd24f585676e4a4c"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "621e18d19b5cde3a5bb67bd71edcd495"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "b4ce2d274665a7cd650c87774e57f6c3"
  },
  {
    "url": "posts/other/aria2-replace-thunder.html",
    "revision": "021c1f56a15d2c945142efdf8118629a"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "e17f86975bc38c6e24b06a87e8940ac7"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "afc3dd40500c339b871f141838fea56e"
  },
  {
    "url": "posts/other/iqiyi-danmu-convert.html",
    "revision": "7ce0a7b2bb7d2aff43975149e3ee7a11"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "22ab82cfbe5eac1b760544f13857e840"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "9776350953778c9347a24b69734c4e06"
  },
  {
    "url": "posts/python/deadlock.html",
    "revision": "a84a0f495955c485c3d872bbdea0f943"
  },
  {
    "url": "posts/python/locust.html",
    "revision": "28f9413b1faf893d8d98bef536fe9a84"
  },
  {
    "url": "posts/python/normal-errors.html",
    "revision": "0b828e8f6244b0b2fc92b7ad3136cc7c"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "ca35504ae65ce46e6e529a3af1390eef"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "dd4166e3faadce01fae2026de2282e17"
  },
  {
    "url": "posts/python/python-dynamic-import.html",
    "revision": "09141398830693d51a7a6749f4b0e77a"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "86ec7577bd5626fb708c82fc117cfa2e"
  },
  {
    "url": "posts/python/python-metaclass.html",
    "revision": "fcb70bb4771cd54329e3dfbb54ef7482"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "488d6498ef5a6f4aa6ce4c54b1254d68"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "2221e219de82fc7761c802ed8e97ad4b"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "eadccc2a852182c4642f11b2b94d98de"
  },
  {
    "url": "posts/python/whats-new-in-python3-8.html",
    "revision": "a45f91eb5afc02d08b571a79f7abc1ec"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "4eb081aecb7fe16960a50433bf499816"
  },
  {
    "url": "tag/algorithm/index.html",
    "revision": "bba139ecf30c146b813f6f10f4d42fda"
  },
  {
    "url": "tag/android/index.html",
    "revision": "ccb7c9bc27a51da89e2a1d8ac8ca1778"
  },
  {
    "url": "tag/api/index.html",
    "revision": "08288b5e5fd84f4af31555193f26f6c7"
  },
  {
    "url": "tag/aria2/index.html",
    "revision": "ed29243962ed8d22eec4fb58f246c0c2"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "d42930b1c2bc0ad83e038ad7aeaba4f1"
  },
  {
    "url": "tag/context/index.html",
    "revision": "133e16939e58f7478d8913d2a7316a1f"
  },
  {
    "url": "tag/database/index.html",
    "revision": "df418c7007a42bf201af54466e38a7bd"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "0f652f312003d097e59a75ff89f109c6"
  },
  {
    "url": "tag/emulator/index.html",
    "revision": "743211d174349d1a9eb376c1b8143043"
  },
  {
    "url": "tag/git/index.html",
    "revision": "88227f6b7f34a25bbf9b0b9c8e560201"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "55c73d4c36fa6da14bec7174d84a0837"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "614960f6f6243eeff7dee13e7988815f"
  },
  {
    "url": "tag/http/index.html",
    "revision": "42214ad92ec37ebacdbb0dadb8589ca6"
  },
  {
    "url": "tag/index.html",
    "revision": "73edbc9d6794afb24adbfea6da16fb51"
  },
  {
    "url": "tag/java/index.html",
    "revision": "a1955d98f2df86b915dae28bb011384a"
  },
  {
    "url": "tag/java/page/2/index.html",
    "revision": "e057a9d883fddb0658ac246f21d44030"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "30d16951c29ca1c488adec9d2b4b18f7"
  },
  {
    "url": "tag/linux/page/2/index.html",
    "revision": "828e6d3c853055ac50395e8404a5b856"
  },
  {
    "url": "tag/macos/index.html",
    "revision": "50d83f27c3e85bffd1ff1522ced32e7d"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "8bcff43869337fafc6d5e23bfaa16f86"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "882bcad471303049b3006a6c35cc27f7"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "819b6158514f5e785965bf995e77e750"
  },
  {
    "url": "tag/mq/index.html",
    "revision": "514b5de7c384e997a3cfbbe2c6d97392"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "aef4bf8b36540c0b2cb48c15a9ac602b"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "e52a9107e00b6423bfbd695b3d38807d"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "74bf64f52afbcc02a0c7407351c33986"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "31e24de3cca1a696c440adb8f4173a97"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "48d43886efde99cf5888f511964444fa"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "88d57f1c2cd42a1b1c5faf9f8901b95a"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "7d8fee5ac29e6f25983dc97d01196d36"
  },
  {
    "url": "tag/other/index.html",
    "revision": "3d8e98ed489f4552aa9453effccfd1f4"
  },
  {
    "url": "tag/python/index.html",
    "revision": "f7d3f95b52b8c5825d1e0bb292487e9c"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "4ddf9758243536ba097335b045bc10b8"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "aac536aec8b1271b03fd563fb1cf6d5e"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "fe99aa8e4cb1f489ad1fc04ea759df2f"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "c1ea130dd00d35a0bf7d24a1cfa21055"
  },
  {
    "url": "tag/termux/index.html",
    "revision": "5f6957149e49284f16f79566e60b80f4"
  },
  {
    "url": "tag/trojan/index.html",
    "revision": "58dde0c505afc72f32980cd469907a2e"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "cb94e0952a7aa970839de44585273fee"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "e8f6fe28bfb925c812449e29acca8922"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "1f8780dc1b17deea1ca4468687af9eac"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "f6215bedecc46a5eca958f3981f59847"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "93ba28754516d09e69c6ca8e880ac475"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "e29d13f9c4b15c6559f18f1abb39c433"
  },
  {
    "url": "timeline/index.html",
    "revision": "37fba22eec606689170e4fb4838b0e27"
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
