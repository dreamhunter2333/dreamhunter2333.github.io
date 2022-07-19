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
    "revision": "ad3f511beba46e187b589a820bd7347b"
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
    "url": "assets/js/100.69423422.js",
    "revision": "72b9bf84c94f99d2c8a0ab88ec8a09d4"
  },
  {
    "url": "assets/js/101.36e6bbe8.js",
    "revision": "f162c3c295a2973e56bac90acb215402"
  },
  {
    "url": "assets/js/102.7e6da07b.js",
    "revision": "ef1f66c42485de8b81eb88f105823809"
  },
  {
    "url": "assets/js/103.54ae530a.js",
    "revision": "e4a67a2980287d379d579548c458cd66"
  },
  {
    "url": "assets/js/104.00c0da24.js",
    "revision": "cab8c38a95b7583caa762d3e396bda77"
  },
  {
    "url": "assets/js/105.c7cf890b.js",
    "revision": "d3347815e94c948d0018f5193596b8a1"
  },
  {
    "url": "assets/js/106.1db436ee.js",
    "revision": "878ab8518687319066c320bb04fdb181"
  },
  {
    "url": "assets/js/107.bf288596.js",
    "revision": "4fb42b9b998442e79409002232da5084"
  },
  {
    "url": "assets/js/108.24acc385.js",
    "revision": "ec6c7c17452b5f4a194555f83e8e72b1"
  },
  {
    "url": "assets/js/109.75dcf199.js",
    "revision": "44a88bc38d697b73f23ce647caaa05ac"
  },
  {
    "url": "assets/js/11.b248c1ce.js",
    "revision": "cdfb349f7a1ded5dba33f8b8a09385fe"
  },
  {
    "url": "assets/js/110.ef1cd36f.js",
    "revision": "d81f625a77bbde1fd9ac6330f1a39435"
  },
  {
    "url": "assets/js/111.1e488ea9.js",
    "revision": "4c587d146a9bb44a0995cd2532f0b7ea"
  },
  {
    "url": "assets/js/112.a6fb2b8f.js",
    "revision": "df4628e3b05817b9eb2dc063d1a9493d"
  },
  {
    "url": "assets/js/113.145121e7.js",
    "revision": "07bd2e2f60fa102c38a7e3cca646c3ff"
  },
  {
    "url": "assets/js/114.ce716458.js",
    "revision": "01cb32d7a412083a3c31244e6579e4ec"
  },
  {
    "url": "assets/js/115.44d8c310.js",
    "revision": "7283bab945e081fe03e1de54acaf42c2"
  },
  {
    "url": "assets/js/116.8626feab.js",
    "revision": "1681ffc78459891ac06d140ee1ecc4c5"
  },
  {
    "url": "assets/js/117.9b488977.js",
    "revision": "a0ecb8033cefcc001f12acf009979a2d"
  },
  {
    "url": "assets/js/118.6e8cec7c.js",
    "revision": "df15309487047c5a5b19b5bc03cf8c5b"
  },
  {
    "url": "assets/js/119.6c25bca2.js",
    "revision": "ad1b14bd90dcd60435e29332f3578d58"
  },
  {
    "url": "assets/js/12.5c81ab68.js",
    "revision": "66e0774d1c9cdb4685c5995604ae58b0"
  },
  {
    "url": "assets/js/120.7f185be2.js",
    "revision": "2f8857875acd98bc8cd18ea6a28ddb10"
  },
  {
    "url": "assets/js/121.bcd22cdd.js",
    "revision": "c42b368b68071da9aaad158dddfc9c77"
  },
  {
    "url": "assets/js/122.713c31d6.js",
    "revision": "ae82ca2e7da20efc19710773e4267bd9"
  },
  {
    "url": "assets/js/123.eecfa3db.js",
    "revision": "8cfcf4dba51d9334f3372e30a4441b5f"
  },
  {
    "url": "assets/js/124.fe269d7b.js",
    "revision": "6fdadaa87eb23e9f768ffc7c0a163a32"
  },
  {
    "url": "assets/js/125.75c89e63.js",
    "revision": "31f90ce6cb89fd9778d851410b30caed"
  },
  {
    "url": "assets/js/126.cf6f5999.js",
    "revision": "367b054b0e6b200660a968c7b4c5249e"
  },
  {
    "url": "assets/js/127.f5adc5d4.js",
    "revision": "19f6181d7b4735b3e6935e1a02b358c5"
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
    "url": "assets/js/15.2b0a7f22.js",
    "revision": "c4e2e1569cffe49e674681ea941a1cee"
  },
  {
    "url": "assets/js/16.952f15b9.js",
    "revision": "3f9fa7e8af6b2a4fbb5955acda2ce466"
  },
  {
    "url": "assets/js/17.0de3475b.js",
    "revision": "040c32098416fbc9052635545f1d0b1c"
  },
  {
    "url": "assets/js/18.7f025a8c.js",
    "revision": "2e4793e38d0b2b7792ff5a0a244cbd2d"
  },
  {
    "url": "assets/js/19.b1daf2cc.js",
    "revision": "822e6683b2f9f3c0d604f9c0758be8bc"
  },
  {
    "url": "assets/js/20.06c5641d.js",
    "revision": "4f2fb27b3293940648f018114debfcd4"
  },
  {
    "url": "assets/js/21.85d132d9.js",
    "revision": "b2db62e09c2e423001269b5410939f3a"
  },
  {
    "url": "assets/js/22.9f74ca08.js",
    "revision": "01d581b758202536fde0728c2c1efad2"
  },
  {
    "url": "assets/js/23.874cf5bf.js",
    "revision": "537ee55b54eb3321ec5ff87a67a11528"
  },
  {
    "url": "assets/js/24.1b35c082.js",
    "revision": "944b59b8ee4f4c757698f159cd1fc7b0"
  },
  {
    "url": "assets/js/25.86123bb2.js",
    "revision": "3cce4701ac9527d52ba0f3451ded2984"
  },
  {
    "url": "assets/js/26.d1413e4a.js",
    "revision": "925db2ce119da8add9d2dd6c51b0c826"
  },
  {
    "url": "assets/js/27.e630f688.js",
    "revision": "85fb4aa467103b91c26844c0ddebe27c"
  },
  {
    "url": "assets/js/28.ad63d613.js",
    "revision": "e003b888f57e28175abcb0840c7d2937"
  },
  {
    "url": "assets/js/29.7073490d.js",
    "revision": "f9966bbf776753de46d39bd5f576a6db"
  },
  {
    "url": "assets/js/3.fc85ad50.js",
    "revision": "2b6730250adb6eeb11730ebc5e4fa8ba"
  },
  {
    "url": "assets/js/30.ac10cb4d.js",
    "revision": "9878494e118247684f815d8bd354dc84"
  },
  {
    "url": "assets/js/31.1252a34b.js",
    "revision": "d415d298427cbd94e691b6f601d2edbe"
  },
  {
    "url": "assets/js/32.0e24f56a.js",
    "revision": "9671d4578fc80823373041bc8f67aac2"
  },
  {
    "url": "assets/js/33.3ff588f4.js",
    "revision": "5b4016c498d0fee32de7e3c7da666225"
  },
  {
    "url": "assets/js/34.e30ae0d3.js",
    "revision": "a46ec23479d1a88a670d8ae638bbdcb3"
  },
  {
    "url": "assets/js/35.9302c9e3.js",
    "revision": "03f1072169309daf600cb6cd0575f8f4"
  },
  {
    "url": "assets/js/36.d7dd7e62.js",
    "revision": "3ae6832ed2f708770038eae80334abfc"
  },
  {
    "url": "assets/js/37.d8cd36f4.js",
    "revision": "0f27aeaab2cf39cbfa006d2b47b35c3c"
  },
  {
    "url": "assets/js/38.2733b676.js",
    "revision": "45221b27ac20c00d3d60e90cdc866d47"
  },
  {
    "url": "assets/js/39.5c0dc90a.js",
    "revision": "333c5e043fd962d505c78cb9ae1ff0af"
  },
  {
    "url": "assets/js/4.f0e4a64c.js",
    "revision": "a3a6d548e27324bf11ea3a294f0999d2"
  },
  {
    "url": "assets/js/40.dd8caa47.js",
    "revision": "bc5b73056d894a3c91dfbe4b8beb97b7"
  },
  {
    "url": "assets/js/41.644df7ca.js",
    "revision": "51a7ee6b0b34a479499e5de56229bf5c"
  },
  {
    "url": "assets/js/42.221322ef.js",
    "revision": "7e3ae79d16e24bb93b7fbe5d8d009a68"
  },
  {
    "url": "assets/js/43.57640c68.js",
    "revision": "1f7cfba6da3ff86c224df90a77bb488a"
  },
  {
    "url": "assets/js/44.6ce99e25.js",
    "revision": "6ec5509c2dcc8ffe48df13ab5ea5cb30"
  },
  {
    "url": "assets/js/45.68bd5043.js",
    "revision": "cf48ba9ef2254d31d8ac61282ef9345b"
  },
  {
    "url": "assets/js/46.1c3b39ce.js",
    "revision": "939c5729ac0fd187dae75938e859100d"
  },
  {
    "url": "assets/js/47.98ed71ad.js",
    "revision": "e7cc6248a983e1a1f7b69dc91a21f518"
  },
  {
    "url": "assets/js/48.e7154a88.js",
    "revision": "1b1eb8e6b3dbc69add4b59d83f821778"
  },
  {
    "url": "assets/js/49.d251f7be.js",
    "revision": "189ff33bfa086a6f4d4c6cef281115e8"
  },
  {
    "url": "assets/js/5.450070d9.js",
    "revision": "84d55659908fb49009965390d1eb5e93"
  },
  {
    "url": "assets/js/50.c24a6462.js",
    "revision": "ff9e561bbbf0c5a07803058d183f5b44"
  },
  {
    "url": "assets/js/51.4e500334.js",
    "revision": "e0d725313d1bb358cf551e3e3471039d"
  },
  {
    "url": "assets/js/52.5d1a422b.js",
    "revision": "776e40fb45e907f44f401119d5a9a0b4"
  },
  {
    "url": "assets/js/53.bdd0178f.js",
    "revision": "ab181f5d3327cffcfa0c8e372e08c2ba"
  },
  {
    "url": "assets/js/54.91549fa7.js",
    "revision": "f29818d0fa8f3056ead80dda8a1e11e0"
  },
  {
    "url": "assets/js/55.bf7dadb1.js",
    "revision": "e7c5609e66a56d7f91a3543062ae2c2d"
  },
  {
    "url": "assets/js/56.faba72db.js",
    "revision": "1bd8becfc9ff4a57e3484b4839747cfb"
  },
  {
    "url": "assets/js/57.abb348f9.js",
    "revision": "3e2fb11f78ea503da1d59e928a46d5f7"
  },
  {
    "url": "assets/js/58.c226634e.js",
    "revision": "4472df32534333317f3b177bc792adfe"
  },
  {
    "url": "assets/js/59.fe9ff991.js",
    "revision": "88b08921f17cef635924b9381bf87810"
  },
  {
    "url": "assets/js/6.1094c60a.js",
    "revision": "6ea4ea1785806a00b13e4a4d5b5e1d52"
  },
  {
    "url": "assets/js/60.158f1ec5.js",
    "revision": "d5f2ca536d523b86b8805cb308aefdb2"
  },
  {
    "url": "assets/js/61.5e1402e1.js",
    "revision": "9336b76c2ee0b154bd32262d67e08403"
  },
  {
    "url": "assets/js/62.6b1138a4.js",
    "revision": "c026e5ef4628043fcd89ab120e205c4e"
  },
  {
    "url": "assets/js/63.9d0742b4.js",
    "revision": "7d9492f74e5974800363c1ca037ea9d0"
  },
  {
    "url": "assets/js/64.26d40624.js",
    "revision": "4a6ac4e30ec415807c30d020516039ec"
  },
  {
    "url": "assets/js/65.6e59440f.js",
    "revision": "8b5027208e9d4b984c8647576acf6611"
  },
  {
    "url": "assets/js/66.7e2ef383.js",
    "revision": "420e8eb5b8b39dc52b917a196ed2ad2a"
  },
  {
    "url": "assets/js/67.58c8c5aa.js",
    "revision": "b5b44ef0bc2aba841dad0a34ad2ef2cd"
  },
  {
    "url": "assets/js/68.20dd3fbe.js",
    "revision": "6bf7ece44b79278b7249b16ac49eb082"
  },
  {
    "url": "assets/js/69.a3ff60bf.js",
    "revision": "5e70d1fcb75124ea725b9375b6f00658"
  },
  {
    "url": "assets/js/7.3bb0b6b0.js",
    "revision": "4c86bcbcfea41eccc2ab77f871fa6e83"
  },
  {
    "url": "assets/js/70.a600d4b3.js",
    "revision": "3b84f0d119f284303605bdff3b07cc4a"
  },
  {
    "url": "assets/js/71.e3d6dc80.js",
    "revision": "e321acaa7c4383a92683d9ab597ec89c"
  },
  {
    "url": "assets/js/72.66a8c194.js",
    "revision": "44a39e88942efbc362b9c0dc936a226d"
  },
  {
    "url": "assets/js/73.5ab430ca.js",
    "revision": "dd9646629247e44220e01d805033abbc"
  },
  {
    "url": "assets/js/74.b0c455ac.js",
    "revision": "08034e9a976ff968dd2dc3c702e1e30f"
  },
  {
    "url": "assets/js/75.b1732e1d.js",
    "revision": "093339ebef36356f011dff7f2cbba003"
  },
  {
    "url": "assets/js/76.062e7233.js",
    "revision": "30da58f16e18a5e6ac4f0ef1d5e7ada4"
  },
  {
    "url": "assets/js/77.ff0716ca.js",
    "revision": "428f052764c6e805912d41ad07490d66"
  },
  {
    "url": "assets/js/78.ca94d49e.js",
    "revision": "1c81dc1186c7a4ab3e183955bed29bf6"
  },
  {
    "url": "assets/js/79.9e0f2179.js",
    "revision": "f82cd790065afa39fd64c8757fe21454"
  },
  {
    "url": "assets/js/8.4f49f52f.js",
    "revision": "83e02ff7c4c03d15d8274800a668b7b8"
  },
  {
    "url": "assets/js/80.d2a0651f.js",
    "revision": "2d4dfcec12a1cc687d85489164acec64"
  },
  {
    "url": "assets/js/81.09f77e9d.js",
    "revision": "df3a6f1133d82ca07915b024e59932a6"
  },
  {
    "url": "assets/js/82.520b6153.js",
    "revision": "1a0a9d6789ac7c4d1f3715d0ee9bde36"
  },
  {
    "url": "assets/js/83.4d7da63f.js",
    "revision": "980c6b2f9a0d44a882cc34b6af715acf"
  },
  {
    "url": "assets/js/84.ecad5399.js",
    "revision": "56da26430a5e373a1b4b876fc0355ac6"
  },
  {
    "url": "assets/js/85.dbda3da4.js",
    "revision": "af7f03985e00bd94a52cacbf0a1239ad"
  },
  {
    "url": "assets/js/86.d94a73c5.js",
    "revision": "73a9b4bf00f5b84a7eb04559644034ec"
  },
  {
    "url": "assets/js/87.299912ea.js",
    "revision": "f8220e9123c89c7e2555b1de6fc615fc"
  },
  {
    "url": "assets/js/88.d3419984.js",
    "revision": "bdc2ec6299e2bdec559febff59543d8c"
  },
  {
    "url": "assets/js/89.a6527b72.js",
    "revision": "1ccb4947265a058885865c8e2c8b9189"
  },
  {
    "url": "assets/js/9.f85182a4.js",
    "revision": "318efc972262f21613158b09ac35cb25"
  },
  {
    "url": "assets/js/90.72c0a492.js",
    "revision": "059e147eed2a575fd56e6294768cb86c"
  },
  {
    "url": "assets/js/91.74354c07.js",
    "revision": "63d40ba14455b6743fbfa4e6c143776b"
  },
  {
    "url": "assets/js/92.a4d32511.js",
    "revision": "401baca19b8b02de390fb6445f1c3e08"
  },
  {
    "url": "assets/js/93.8ae902da.js",
    "revision": "7472000e2dfa99907b5508d1aa3f2822"
  },
  {
    "url": "assets/js/94.20f216a3.js",
    "revision": "de2afabb2022cdb064262c48c855a56b"
  },
  {
    "url": "assets/js/95.71f8211f.js",
    "revision": "3b53ee9041e21a2842e774bba85dd2da"
  },
  {
    "url": "assets/js/96.9d4fc42b.js",
    "revision": "826db11990bcfc5959bbacdbb3015586"
  },
  {
    "url": "assets/js/97.1d0d0e76.js",
    "revision": "dd9d8a3272c7ffd98c7fbd4a29485fe0"
  },
  {
    "url": "assets/js/98.f5d29584.js",
    "revision": "5a561c6d3add3504773499c69949121c"
  },
  {
    "url": "assets/js/99.f679eacc.js",
    "revision": "4b859dee07a28c1235700228ce403fb7"
  },
  {
    "url": "assets/js/app.8360795c.js",
    "revision": "3b298258de5b9e229a75c0cd87576352"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/algorithm/index.html",
    "revision": "424475ba2cb2665af5beb2e1ba2571bd"
  },
  {
    "url": "categories/database/index.html",
    "revision": "04270a0d57ac3c7413ef3fc92a653532"
  },
  {
    "url": "categories/devops/index.html",
    "revision": "1bbf2f978ea2779096f7b5f924208e18"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "e33b3705a3720a3d8c779c99174886b3"
  },
  {
    "url": "categories/front/index.html",
    "revision": "0e71c01095c790b2a1bd7cea534070bc"
  },
  {
    "url": "categories/git/index.html",
    "revision": "ee787f7ca86beca9198623e298f85a4c"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "f61917c7d31ba3d8a562e09ded48b486"
  },
  {
    "url": "categories/http/index.html",
    "revision": "8a2c6ce1fcd4a667f18593a567318f3b"
  },
  {
    "url": "categories/index.html",
    "revision": "613ed302315de426d6e5c1519692258d"
  },
  {
    "url": "categories/java/index.html",
    "revision": "518fc6623908c3509863ab7d536809b8"
  },
  {
    "url": "categories/java/page/2/index.html",
    "revision": "bbc6fe831c52e48cb269ffa4e4e8f4af"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "9c8b03ccdc75391b6582e187f63623f9"
  },
  {
    "url": "categories/linux/page/2/index.html",
    "revision": "e3faff826ed4df73bba6dc1400b94583"
  },
  {
    "url": "categories/macos/index.html",
    "revision": "a8f5d8f0901127d142d0cbb1ade3070d"
  },
  {
    "url": "categories/mq/index.html",
    "revision": "ed73ace8ec6fa948f6f7fec0a6be69ce"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "cb6d5231b55e59fb84b206166debbe7c"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "2b58dd8992e57ba41ccbf3180650542e"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "b3eb2fd7f8bedb9bfb65658d46d8706d"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "f9e11c1b8b37db1fc5b65a3fd253ad05"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "3669ed0c49fe380821b2f2eb1710f35e"
  },
  {
    "url": "categories/other/index.html",
    "revision": "1105ded46749d1a125db99913bf7d47d"
  },
  {
    "url": "categories/python/index.html",
    "revision": "9910c4064b4b7c1e0a5154421c15345f"
  },
  {
    "url": "categories/python/page/2/index.html",
    "revision": "cff22cbdb0eaf51143efae987abe3e91"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "d1a2ff03fed4a5661aa826ed82dc306e"
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
    "revision": "9ccc3df3890b8ee69b53c6dc1bfa5133"
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
    "revision": "782cb500f0e19a08673869ceb1f24ad5"
  },
  {
    "url": "posts/database/SQL-constraints.html",
    "revision": "904cae59af469ca9c46d69fddc430970"
  },
  {
    "url": "posts/database/SQL-keyword-order.html",
    "revision": "a5735e77e801f958604d0c12f882d0bc"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "a49e9ab1da8f7f34b3e93ce6f29a1071"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "cee3d6c93bcc7cfda6fce11a8a0e79e0"
  },
  {
    "url": "posts/database/why-redis-fast.html",
    "revision": "dfc8ab1352adb9f16a5776f766a7ca11"
  },
  {
    "url": "posts/devops/ansible-deploy-docker-compose-service.html",
    "revision": "5cd619de77808a52695bc1c6ae06db14"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "6b72239f438277b91cf110934f0d749c"
  },
  {
    "url": "posts/docker/docker-host.html",
    "revision": "958c8a8204f1be602a55bfc9a67175e3"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "4d2570ec29648b02273c154de22ae7e9"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "451b51081b3dbd235ec9489aadc3331c"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "0e79cca76100d48d8254717418494f70"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "b1732af5626f07af5030464eb8d12df4"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "b7afa787eca650cc94e3b0c95570d540"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "3d18bfaf4998b7c61c11a43edea029ef"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "4e261e55511cf13e95d6f2106ad91140"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "4a2576b8e575c922c9f50121a0a8cbf6"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "eaa7b52b4972839ba1630013d8e63e1e"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "a99a653a3d1513c10a4799ef02b934d9"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "fb4adc69d2b1578ece9fdc5082aef7d0"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "fb7c6e5f6a3499456051977deaf652bb"
  },
  {
    "url": "posts/git/use-multi-access-token.html",
    "revision": "7f50a1b617e00fad14518fd986bf602c"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "cbfa36c35457667caeddeb8029c9986a"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "30bba4ebcc536ef881858b7366ed3f17"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "f631df0c0a9d5e6045a2bb0aa0055f5c"
  },
  {
    "url": "posts/http/https-shakehand.html",
    "revision": "982f559af3faa64651181564107d2a6d"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "54d205b5842da8cadb672acdc3339b9a"
  },
  {
    "url": "posts/java/java-http-proxy.html",
    "revision": "221bf755733f21a71e85430d98cb87e0"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "1b0daa6e7c44fffed248447e4ed94b9d"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "63d996f011ce02b62118c8ba5e37c6f9"
  },
  {
    "url": "posts/java/java-spring-MyBatis-Annotation.html",
    "revision": "716529dcbe84ee27a843d077fa2b3a29"
  },
  {
    "url": "posts/java/java-Tetris.html",
    "revision": "274e321f43e4a3f187180302f5a96c3e"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "3aac818ef6da6a96bad96339f948cdc2"
  },
  {
    "url": "posts/java/spring-RedisTemplate.html",
    "revision": "5380fcbdbdb4ac9d2c02bb8bc5264d60"
  },
  {
    "url": "posts/java/springboot-disable-autoconfig.html",
    "revision": "99242b30abc15ca097e381a640553a20"
  },
  {
    "url": "posts/java/springboot-schedule-task.html",
    "revision": "ff87a00f749389fa812bad8fe58c8e3e"
  },
  {
    "url": "posts/java/springboot-swagger-ui-custom-config.html",
    "revision": "fc4571bfcac775cb60f2f4ae3245b4b3"
  },
  {
    "url": "posts/java/TOTP.html",
    "revision": "1d5643628752b9e933deed255a667897"
  },
  {
    "url": "posts/linux/docker-nginx-acme-trojan-go.html",
    "revision": "7e8e6b583c02e8ec7b015f8b33f17f96"
  },
  {
    "url": "posts/linux/install-ubuntu-with-xrdp-in-termux.html",
    "revision": "f3ca03307e9d2218f546e91199bed300"
  },
  {
    "url": "posts/linux/linux-chm2html.html",
    "revision": "410db3d42ac27d10304836763f8bfea2"
  },
  {
    "url": "posts/linux/linux-ecs.html",
    "revision": "fdb914d97ad75f2ad81d6a8ff417a16f"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "a87bae009042cbb71227eb38023586bc"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "426249ead00b7ea081597cafccc80efb"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "a70aabae1be0ed25d801977bf8fb53fb"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "5328146f70e69fbb779e7f1d206d30a7"
  },
  {
    "url": "posts/linux/ubuntu-switch-sources.html",
    "revision": "374ca4d83cfe425fdd00cc7dc13ac567"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "8ffbb8f7b4d704d5322e5e33b1664da1"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "9cd9dfb7e0934eb6f90f7adc5d820f1c"
  },
  {
    "url": "posts/linux/wsl2-and-docker-compact-vdisk.html",
    "revision": "3eede21c6e3da4c3186df9d29b642e86"
  },
  {
    "url": "posts/linux/wsl2-install.html",
    "revision": "827bd886a3a83d8074b9d88428889ea5"
  },
  {
    "url": "posts/linux/wsl2-use-winip.html",
    "revision": "a6bd1e8106c5b7074777242057d26b88"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "512c9471ce8e60f4b999bc80d8cfbc9d"
  },
  {
    "url": "posts/macos/android-emulator.html",
    "revision": "f8d6d3aaa0701daf65294f6a69181d3d"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "2dd293221bda0f76a783a9d2ed20ea8e"
  },
  {
    "url": "posts/mq/ensure-not-repeatedly-consumed.html",
    "revision": "b4bb790541300813a8675b0259be1739"
  },
  {
    "url": "posts/mq/ensure-order-of-mq.html",
    "revision": "fdde38738a207777d1d826ec4c6b83f4"
  },
  {
    "url": "posts/mq/high-availability-of-mq.html",
    "revision": "9319d72105ad6e4a99c7aa8d04383a2a"
  },
  {
    "url": "posts/mq/mq-problems.html",
    "revision": "c1c95d50a9d04753952e2f3b04cd2a55"
  },
  {
    "url": "posts/mq/why-mq.html",
    "revision": "722a1f4f823462fa0ccd26df7270b35f"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "367168715615d6eac57f05052ab96d5d"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "0fe9fcf456120c2a84ee2bc880faa48f"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "6c0f89b1fa178c9acefe8536adcb13b5"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "4665d40b9f03213d7b47e4f2d900eccd"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "27a969af3162f610d83efd5f4b406284"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "6799592f3e17f44dc9923a9c3f0c5af9"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "36efa35d9c7f4908d693e927496cffa3"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "b7a5210e07a11a99977067829f8b1ef9"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "de83e0f5f6ea4f276b934b52f19f7ae3"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "4ca42c7d60295098661e8488439466d8"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "d1ea9017fd63a401301608b090171a97"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "4a278715b45d6536f243cf8aa0f0646f"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "c8ac979085f7fbc1afc6746dbb567241"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "15f56852da38eddca8aaff39d21b0c06"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "d1d483c27b7feb54318ff10707380057"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "cd2e6f99a52af3a1fe3e050380860a8d"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "c7d58ce2d42a06148e5125af713bccb9"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "f7e283f6b5666a64fe698bfe747e3102"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "be4d7562f4b176b75055404432654d9c"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "fbb4242b6840e294151dc988810510a6"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "eeb33d18e73cdc667a5ba111837fbb19"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "b18eaebb9f758e6a12eef3de584d766a"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "18bdee8386809ba0ff85740fcbc4ada8"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "2aa58088749f5c2eef9fbeda33b092ac"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "105e3ac37b56dfdd4d4f70bd30bb31df"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "877ca6b10454ea77108090587a62d733"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "16747cebc129072ad30bfcb50fbbfdcd"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "63ce61e0a5960b9cd70502f16b6ddc01"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "10d0d6075fd40cac0ff0ec0db8a00924"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "d7cd15ed0db15c68055172c46f8c193d"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "1f36376ea6998d461a2dd53951aaa38d"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "e6b99b4cddda1030127bc6d0bb50e1cd"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "26ff5705627efe45a7d6c57b0f1d5c60"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "6b39eeaf3518d8a66fe181a69ba5376f"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "b1b733cec9fb91a524183c8c21412184"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "d2f687fcae28338fe6a79974205aa4ef"
  },
  {
    "url": "posts/other/aria2-replace-thunder.html",
    "revision": "fe00fdd913e55eeadd0d7ef6546413b6"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "fb424826a220428be181a60ca31e0a57"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "5fd8072807bf9e6d5cfed729bb520189"
  },
  {
    "url": "posts/other/iqiyi-danmu-convert.html",
    "revision": "1ecc0666f472dd6cdd95f526bd84a998"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "e7c33174d405ba43009111ed198d108f"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "bdc4111c737705c61f074d3e55e02348"
  },
  {
    "url": "posts/python/deadlock.html",
    "revision": "1bbbaf2935756cbdf1349f63ae21af02"
  },
  {
    "url": "posts/python/locust.html",
    "revision": "2e53ed3a2e22d3a32d4cac8f0254c5ca"
  },
  {
    "url": "posts/python/normal-errors.html",
    "revision": "7556be7d6d698bf8438abd61c40df52c"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "08ee3a8e0d07c34d29e27311080db94d"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "9984e4318ebb8724d125117535ad3148"
  },
  {
    "url": "posts/python/python-dynamic-import.html",
    "revision": "d41e1c8ec6957f730d1f2cbbfe3267c2"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "2b505c0f93425dac0798302851ab3200"
  },
  {
    "url": "posts/python/python-metaclass.html",
    "revision": "b96d079841a03c383de60f2950a61606"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "2add004484804e3b22617c64583aa933"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "09984f4a36d7f93a38971fcd2898f5d2"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "0d03e8c3427ac0b19f1ea4e58c16e887"
  },
  {
    "url": "posts/python/whats-new-in-python3-8.html",
    "revision": "97404d22a2cbf48542f994ca9e94f2c9"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "fd4d03d257902d74d0793c5f27bb0ee0"
  },
  {
    "url": "tag/algorithm/index.html",
    "revision": "f3725ec121852f12ccceec44af3934d2"
  },
  {
    "url": "tag/android/index.html",
    "revision": "02b10b66bd48566cc32ac711b169d5e5"
  },
  {
    "url": "tag/ansible/index.html",
    "revision": "2ee436737b010d279e672a1128a89809"
  },
  {
    "url": "tag/api/index.html",
    "revision": "0e55f7c6e06b11a3246c6f843b29b349"
  },
  {
    "url": "tag/aria2/index.html",
    "revision": "6576b30f1b405c9a29f9719e8299ae37"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "697b33a2b3fca872532c11417799d136"
  },
  {
    "url": "tag/context/index.html",
    "revision": "b422014a370a1b74fdec3f6d0f0b27a0"
  },
  {
    "url": "tag/database/index.html",
    "revision": "fde9eed19df6eec200202083f69a6445"
  },
  {
    "url": "tag/devops/index.html",
    "revision": "cb01ea601b6bda824767909f68db6a7e"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "04e4608a863db7a3735e16dbac2bc304"
  },
  {
    "url": "tag/emulator/index.html",
    "revision": "9efb6e0b1e72ad1c65c35481f886c441"
  },
  {
    "url": "tag/git/index.html",
    "revision": "85e5c8ad495c6562095ebd1964b29dac"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "c172f175d1deb4a7178ae58763417a45"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "1a73fa336d7c01c31916fae24c86a133"
  },
  {
    "url": "tag/http/index.html",
    "revision": "682110d416d37cc5fc7b18faafb87c98"
  },
  {
    "url": "tag/index.html",
    "revision": "04f3a01deccb102d95ac60274b0b6ece"
  },
  {
    "url": "tag/java/index.html",
    "revision": "11315cf0e04c3b242e3405eaa3a90026"
  },
  {
    "url": "tag/java/page/2/index.html",
    "revision": "1fd76ff817ed1e7ed722918ef712432e"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "79558a781980592a8d2e34bc6cfe3fb9"
  },
  {
    "url": "tag/linux/page/2/index.html",
    "revision": "4ef92476114bfbfc8bf77e7257517ac0"
  },
  {
    "url": "tag/macos/index.html",
    "revision": "94f44ec946f588bc6e60eb2c487f1cd4"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "ef441df52ed136ab20039d3fbd0f69e5"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "84d474aba3dfd92cc543f9bf38d8124b"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "d4164e5b47f36611b1cf97dd93e573c5"
  },
  {
    "url": "tag/mq/index.html",
    "revision": "a4db93ab1022d3062954eda18dd48f9b"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "9e58b12220020f866fdd668bb9afdecf"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "9e9d385951a05672696d2ec3d214ea00"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "4f6ac45a5d4b730d626e997341256f12"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "4b7fe39255c7be2661f94b8821a83b4f"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "a5dc5a56e041106077f0bb3a4a134578"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "cb66ed1d5fe41ef3308e745126321293"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "de8081477ea0b61fc12ac27bd99d8240"
  },
  {
    "url": "tag/other/index.html",
    "revision": "d1c00c649e48632961a82b3a0f672f2a"
  },
  {
    "url": "tag/python/index.html",
    "revision": "2986de1ea05aa3bc4ccfe0cbb0317913"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "39eb0b1120a0e89766aa204cfdecb57e"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "cc66f707314f632ad9a1b483ff5331e3"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "64203aa426abe8375db8ed065e1138ba"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "c547e3c5e14a36a530cd3cf50f96f8ae"
  },
  {
    "url": "tag/termux/index.html",
    "revision": "5ffc9bfe4e1754b3b1672a3b0095d57f"
  },
  {
    "url": "tag/trojan/index.html",
    "revision": "cc089ee661ff319c14860d3b6e38280e"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "6b306ecbf7041f66422032ac17eb1d7c"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "fe62a0acd352c03a42427703aa16228c"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "e1c535f93482e13a578809572bd2ce9c"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "36f4a76dfa2663311e492a90ebbce672"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "2a26581873a2267a926431f0bea40f6c"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "9a23317eaee3245a153a6c1a8ebf63ce"
  },
  {
    "url": "timeline/index.html",
    "revision": "cfdd06410480d17074c54069b8373fe2"
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
