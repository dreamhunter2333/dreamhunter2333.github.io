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
    "revision": "1494ebe7afc369ea0eecaeb084a46745"
  },
  {
    "url": "assets/css/0.styles.6ff1a292.css",
    "revision": "12f282aeb218a63597e929600995a288"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.1cff9be4.js",
    "revision": "466d777553c84720fee5e9dae69736c7"
  },
  {
    "url": "assets/js/10.ec8b3cde.js",
    "revision": "016c91430950fcb1a5ddda89fc158556"
  },
  {
    "url": "assets/js/100.d9efa8af.js",
    "revision": "b820190b3f96e8eb4ac92f9b98942896"
  },
  {
    "url": "assets/js/101.7645abaf.js",
    "revision": "fc11df6ac92245645323d2fe223241c1"
  },
  {
    "url": "assets/js/102.f4ce5646.js",
    "revision": "ed365ca612cd8e54f135aca164a63f97"
  },
  {
    "url": "assets/js/103.cb3e6043.js",
    "revision": "fec367084385d086949908c12f8e8ee1"
  },
  {
    "url": "assets/js/104.ee35177a.js",
    "revision": "f0f4d5bd776e2459cfaef62aa62f3025"
  },
  {
    "url": "assets/js/105.8fc41aba.js",
    "revision": "481d0eee5334d3f7727f5c337db8480a"
  },
  {
    "url": "assets/js/106.3fb31124.js",
    "revision": "9273789554b682942cd3de367ade5121"
  },
  {
    "url": "assets/js/107.42a0befc.js",
    "revision": "919fdddc9f8757611565ddf1c39f6718"
  },
  {
    "url": "assets/js/108.4757dccd.js",
    "revision": "f8edee02803ef17302f37f308171aa56"
  },
  {
    "url": "assets/js/109.db4f558b.js",
    "revision": "2ca4239bd3b6ba95e11bdf75275540cc"
  },
  {
    "url": "assets/js/11.c0b2bc5f.js",
    "revision": "f32247fc9fbbed5dd5930c74ed80fd91"
  },
  {
    "url": "assets/js/110.57161cc2.js",
    "revision": "2ec2029a17accb1fc7334c2877a76b32"
  },
  {
    "url": "assets/js/111.4dbde8bf.js",
    "revision": "26ad65bc18a3b36c113842449e74e7ac"
  },
  {
    "url": "assets/js/112.43840106.js",
    "revision": "93c14a2e0602bdc87123d0af1b9c9d32"
  },
  {
    "url": "assets/js/113.b5d4dff9.js",
    "revision": "22b145f3925860121c474e6c2d878e19"
  },
  {
    "url": "assets/js/114.af6de885.js",
    "revision": "b1650fa813336d481320a135a3c8e583"
  },
  {
    "url": "assets/js/115.07ba1f47.js",
    "revision": "16f686ddb4f05768124765c7f7df09ef"
  },
  {
    "url": "assets/js/116.b2993dd2.js",
    "revision": "6385cb81751bd4dfa7e499c1a1d0500b"
  },
  {
    "url": "assets/js/117.b8fb149e.js",
    "revision": "7f7b1f88a95228818e5a165c51a4d201"
  },
  {
    "url": "assets/js/118.a20b98f5.js",
    "revision": "506ca466b55dca03477ff1206c611e97"
  },
  {
    "url": "assets/js/119.056c8325.js",
    "revision": "41c5bc62e707de8603dfb7f60ecb3d9f"
  },
  {
    "url": "assets/js/12.c691e6cf.js",
    "revision": "7015afecafe051b4d40b980ecd131193"
  },
  {
    "url": "assets/js/120.45c34dda.js",
    "revision": "77a71cb695039ebdbe3c7f36ec6a5b0d"
  },
  {
    "url": "assets/js/121.cb81b3f1.js",
    "revision": "c65bf70bf34d6ea91707d04cc0067465"
  },
  {
    "url": "assets/js/122.d1b41d0a.js",
    "revision": "c08dcde8408df9cbae0a8633bc0db387"
  },
  {
    "url": "assets/js/123.bca2657d.js",
    "revision": "b05679096fbf9fd7f0987652ad81df70"
  },
  {
    "url": "assets/js/124.64a34154.js",
    "revision": "609f5e1a81c4a7a24ca22ceb4cc8020b"
  },
  {
    "url": "assets/js/125.b139a684.js",
    "revision": "8b64c958c17a448827075ede6c02a141"
  },
  {
    "url": "assets/js/126.a0651467.js",
    "revision": "0af0ffb7021c7d8235f1e42550d30a6a"
  },
  {
    "url": "assets/js/127.cab2c831.js",
    "revision": "417e9e8e24cc40f34ced3d57313df616"
  },
  {
    "url": "assets/js/128.97293218.js",
    "revision": "9e9e52dac19808d415ec5c100b814ee6"
  },
  {
    "url": "assets/js/129.3508fb8c.js",
    "revision": "002b7b1b376ddc7e5b57356db27c2170"
  },
  {
    "url": "assets/js/13.4d4f4941.js",
    "revision": "e9586d3de5257b29a087062aa9f7fb45"
  },
  {
    "url": "assets/js/14.f53c11c4.js",
    "revision": "58622e8914898f16b27a20636c01b8c8"
  },
  {
    "url": "assets/js/15.d6472818.js",
    "revision": "c5a3b4651b29e7ff1bba22eedc128131"
  },
  {
    "url": "assets/js/16.ac97f1a0.js",
    "revision": "7e93b490bd70cfb3f529fe8aee5f6ac5"
  },
  {
    "url": "assets/js/17.32d81bbb.js",
    "revision": "f37eeda6a24db06692c003a2256036bc"
  },
  {
    "url": "assets/js/18.4ea932d9.js",
    "revision": "4feeec796d8a02da55f6ef102442ff8c"
  },
  {
    "url": "assets/js/19.b8cbf0d7.js",
    "revision": "f8b728b61bc630f6289af3888bbf414d"
  },
  {
    "url": "assets/js/20.5c779532.js",
    "revision": "edda975f1bffe86c102dfa4d5f884638"
  },
  {
    "url": "assets/js/21.e0fbb29d.js",
    "revision": "2ae9cdbf4f60522f105101c0f6f5d614"
  },
  {
    "url": "assets/js/22.2aedbc1b.js",
    "revision": "d91b8f4a5b324d72bbbe775f63edb296"
  },
  {
    "url": "assets/js/23.7ab49904.js",
    "revision": "6d5aefb46a7576d6a86d639ebeb12a78"
  },
  {
    "url": "assets/js/24.a5d38810.js",
    "revision": "99df45fcabf6ba051ac2929a0d89e997"
  },
  {
    "url": "assets/js/25.f0153725.js",
    "revision": "8f0fa118b1e399441ff8d6b4e9f0cfe1"
  },
  {
    "url": "assets/js/26.3059a078.js",
    "revision": "dcebded71df9afff5b87ce9c2f0b1cda"
  },
  {
    "url": "assets/js/27.fc0b63d7.js",
    "revision": "24153dadd3c725a250224ef6711d1e49"
  },
  {
    "url": "assets/js/28.948696a6.js",
    "revision": "a589a7b12e63914950718f90a5f6fd36"
  },
  {
    "url": "assets/js/29.6588b588.js",
    "revision": "13c0fe69205c5374f658555d744f22e8"
  },
  {
    "url": "assets/js/3.f47af0d0.js",
    "revision": "399c435ec589646f19f229fa5b9cf964"
  },
  {
    "url": "assets/js/30.dc586fbb.js",
    "revision": "14f70377b52a1b04d27311f24755957e"
  },
  {
    "url": "assets/js/31.41f26af2.js",
    "revision": "80b52d3a82e49e5537556d086c78da8c"
  },
  {
    "url": "assets/js/32.3749a089.js",
    "revision": "2f2e3e7179291876ac75ba44c4353ab0"
  },
  {
    "url": "assets/js/33.35f41d30.js",
    "revision": "8fa7ac1c3587f3c30800b269c4ed724d"
  },
  {
    "url": "assets/js/34.4fd9ae0c.js",
    "revision": "97961f10ff8cc61bcfa7d3c0ab75d782"
  },
  {
    "url": "assets/js/35.95863809.js",
    "revision": "744784d912c145cc471e9f2491185bad"
  },
  {
    "url": "assets/js/36.5e345d39.js",
    "revision": "f3dd5bdbc9ca72d587ba8f0c529a6255"
  },
  {
    "url": "assets/js/37.27494111.js",
    "revision": "a00db8d5efaaf753378026c6c286b2b9"
  },
  {
    "url": "assets/js/38.cb8d1e8e.js",
    "revision": "6c4fa27e6260647da21bacf2e8811706"
  },
  {
    "url": "assets/js/39.43dc569b.js",
    "revision": "f7d5789b23dcfe4691f995bfe8fa135f"
  },
  {
    "url": "assets/js/4.b3164189.js",
    "revision": "ac29770ce4f9259ccbcde6a95dcd9daf"
  },
  {
    "url": "assets/js/40.8152e971.js",
    "revision": "8e5e184c465a8774d8cf303fcffa90eb"
  },
  {
    "url": "assets/js/41.f43f6eae.js",
    "revision": "0a4bd59419920ea989d06cf659de3224"
  },
  {
    "url": "assets/js/42.a63ef32c.js",
    "revision": "49bb41acf4161898ddd5c55343ef767f"
  },
  {
    "url": "assets/js/43.19a6a04d.js",
    "revision": "421d3cc62ef9ea391414abf459ce7f42"
  },
  {
    "url": "assets/js/44.89a0ddaf.js",
    "revision": "66cf95c0201deb7152f9f1c1fee083d0"
  },
  {
    "url": "assets/js/45.fce3388e.js",
    "revision": "0c4987a3bb296d58cc6caad25238be02"
  },
  {
    "url": "assets/js/46.cc499604.js",
    "revision": "27ddf49e61a48f4e5f4a7fb3220f5348"
  },
  {
    "url": "assets/js/47.9adc31c7.js",
    "revision": "c625cdd3cfaa7e984c971c82c1fb1adf"
  },
  {
    "url": "assets/js/48.f92a6686.js",
    "revision": "b956aa9788047a98ca36c17f8f56202f"
  },
  {
    "url": "assets/js/49.462997f7.js",
    "revision": "2f14798cd600d90e3644df53f43b2751"
  },
  {
    "url": "assets/js/5.ed63d8d4.js",
    "revision": "90a7d368d3028309d0c9da49f7836da0"
  },
  {
    "url": "assets/js/50.c6582b80.js",
    "revision": "e907e0988d9cce490c214b39a4c9afd0"
  },
  {
    "url": "assets/js/51.eaedfff3.js",
    "revision": "bd1afe0a8a11fa03d84b39b9bc969c56"
  },
  {
    "url": "assets/js/52.ac223a0a.js",
    "revision": "3864439de524800e12d6970f841d2b24"
  },
  {
    "url": "assets/js/53.e84e7b5f.js",
    "revision": "cfc27eab2df38431c922916c00f8cc8b"
  },
  {
    "url": "assets/js/54.1095d55b.js",
    "revision": "a6c2e3ed278afbad8c5bbfe6e3ce10f9"
  },
  {
    "url": "assets/js/55.ff8fc9ff.js",
    "revision": "bfc180844994d58b341158b399a199ea"
  },
  {
    "url": "assets/js/56.d1159ece.js",
    "revision": "57e6f301a8a58fa6b6f4895b66fdb5e1"
  },
  {
    "url": "assets/js/57.b0ad8ed4.js",
    "revision": "cd03e62e131bc8fcfcea7f401cddc2b6"
  },
  {
    "url": "assets/js/58.202f544f.js",
    "revision": "354cd54d0c93ee2770269e359d575468"
  },
  {
    "url": "assets/js/59.02ff3b7a.js",
    "revision": "b2273a5c4840c27b22ec046229eee5f0"
  },
  {
    "url": "assets/js/6.3fa44e2d.js",
    "revision": "5114c382c576f1d774222983c971352d"
  },
  {
    "url": "assets/js/60.7b98d90b.js",
    "revision": "42f75e2aabca8e4a45e67ea13eec685e"
  },
  {
    "url": "assets/js/61.5167b604.js",
    "revision": "bd1c398eb59797527f3f9517c683bf47"
  },
  {
    "url": "assets/js/62.3bc741b6.js",
    "revision": "87c335c7a295afac0a825246657af819"
  },
  {
    "url": "assets/js/63.2e0b43c2.js",
    "revision": "f18a5347f3ff7891c22005aca2d2e416"
  },
  {
    "url": "assets/js/64.2d34fccb.js",
    "revision": "a9076f2c3e9cfce9cb0bf9c1ea33517c"
  },
  {
    "url": "assets/js/65.6507d0ad.js",
    "revision": "35aa8550964871aea9937080c98c4c7e"
  },
  {
    "url": "assets/js/66.1ef12698.js",
    "revision": "b4ac8e4ae86bdd49e999d77015eabf05"
  },
  {
    "url": "assets/js/67.5eaadbca.js",
    "revision": "2dbfd40dd88944bc45a60c366af543a2"
  },
  {
    "url": "assets/js/68.cf2e67e2.js",
    "revision": "9ea3db701caec8e00250b26a10f29fed"
  },
  {
    "url": "assets/js/69.75ed78c4.js",
    "revision": "aaff2bf6c9c624f68ca9ab9cd5b99e52"
  },
  {
    "url": "assets/js/7.0fcc2e4a.js",
    "revision": "4994834e705498b4852db4397e494f5b"
  },
  {
    "url": "assets/js/70.34956761.js",
    "revision": "57610dd29c2ef333cdd26a745a19e3be"
  },
  {
    "url": "assets/js/71.4c776ec2.js",
    "revision": "0b4e470df675623634b7faf7c25034fb"
  },
  {
    "url": "assets/js/72.f1e9ca86.js",
    "revision": "b3f54b206c8606b1ee19d631c0c8f282"
  },
  {
    "url": "assets/js/73.15c2f37e.js",
    "revision": "11c05f86374378290b05479cae8a1c5a"
  },
  {
    "url": "assets/js/74.109bb57a.js",
    "revision": "badf7b0497b65e4c6dd3084e355022de"
  },
  {
    "url": "assets/js/75.f85b10f9.js",
    "revision": "30575a935c279434392c468da7b69451"
  },
  {
    "url": "assets/js/76.87b056f7.js",
    "revision": "73b2453c75f5147971283315f0e117d2"
  },
  {
    "url": "assets/js/77.295f4c83.js",
    "revision": "326044c9609b974db90a94dd6b17ae6c"
  },
  {
    "url": "assets/js/78.a154fade.js",
    "revision": "68629bc4c64827f730c4fc5aba613226"
  },
  {
    "url": "assets/js/79.b95c5558.js",
    "revision": "4ccb40e2dedb0aabd86e4a3198637912"
  },
  {
    "url": "assets/js/8.874f0770.js",
    "revision": "008bc156e12e0641cead84f45c87abd1"
  },
  {
    "url": "assets/js/80.3c15d74b.js",
    "revision": "bcb4903d020aca24b0b910b03c02c23e"
  },
  {
    "url": "assets/js/81.968117ce.js",
    "revision": "a594ce0e63479511a1556d1f25190362"
  },
  {
    "url": "assets/js/82.c68c6264.js",
    "revision": "939618470beb1f7203e971e329981f63"
  },
  {
    "url": "assets/js/83.376644bc.js",
    "revision": "91f49d2214d102f2115bbeb0ca2b1508"
  },
  {
    "url": "assets/js/84.8a09b71e.js",
    "revision": "81d2b5e52bd9fe5e5a967f8c9119c70a"
  },
  {
    "url": "assets/js/85.8dcdeb15.js",
    "revision": "8a80267f812a97b5afba45b8e045816c"
  },
  {
    "url": "assets/js/86.aa28dc96.js",
    "revision": "812112204e9b9346e6b6c6cee685a072"
  },
  {
    "url": "assets/js/87.974bd025.js",
    "revision": "4f068fdb6baef8ad919ea09bc5b473d8"
  },
  {
    "url": "assets/js/88.ed613bba.js",
    "revision": "e95465138c061757fe0cecdbf477e232"
  },
  {
    "url": "assets/js/89.f4d71829.js",
    "revision": "5437dafdc643f9e05fee1ca3b6b67e56"
  },
  {
    "url": "assets/js/9.95549698.js",
    "revision": "b1f6197bdd5d42173d95a01d18cfaaab"
  },
  {
    "url": "assets/js/90.f0ba11c6.js",
    "revision": "be15d998f76b37929f9ee1af01012be8"
  },
  {
    "url": "assets/js/91.800a6947.js",
    "revision": "ae27dd4daa9e6b8d1cc02c47e8d80c8b"
  },
  {
    "url": "assets/js/92.d2ed5220.js",
    "revision": "ccbb6fdbd4aa1304ec58a835f3ae3f9f"
  },
  {
    "url": "assets/js/93.c077c7e8.js",
    "revision": "444cd78fb86f809087fcd76fd4c9cc68"
  },
  {
    "url": "assets/js/94.7ecfe70a.js",
    "revision": "002f13df35fe7f58c06f952aa37b30ec"
  },
  {
    "url": "assets/js/95.74ceb873.js",
    "revision": "588249165b547195fdcd4c49846e0c1c"
  },
  {
    "url": "assets/js/96.88787fd3.js",
    "revision": "852f9678b13586a7f8963819fca77664"
  },
  {
    "url": "assets/js/97.2f6cbfc5.js",
    "revision": "bfba3bae8aa154e57053c6d25b334742"
  },
  {
    "url": "assets/js/98.33f98ff8.js",
    "revision": "dffc311c148b8a81d8a2d0fc524ecd94"
  },
  {
    "url": "assets/js/99.fa04cda8.js",
    "revision": "fc7643ae55b5ca1693862588f08f85df"
  },
  {
    "url": "assets/js/app.d877e9b5.js",
    "revision": "051c99809529fe3f3ed36f43b13bb900"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/algorithm/index.html",
    "revision": "f4cbabf7f0f83eb6b8896e189fcd03d4"
  },
  {
    "url": "categories/database/index.html",
    "revision": "49cf87682dfbc07b9447cfe9774aabba"
  },
  {
    "url": "categories/devops/index.html",
    "revision": "235305c15e6dabb8138cda5dea4b4040"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "afc43fbf386d608d2932bb233942cb19"
  },
  {
    "url": "categories/front/index.html",
    "revision": "d582a38a8f614fbcbf9a39d0c9474f42"
  },
  {
    "url": "categories/git/index.html",
    "revision": "809e295c3c65856f44e58acd444e6263"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "075d8ec01aff8daf61df2611b1895c9c"
  },
  {
    "url": "categories/http/index.html",
    "revision": "4ebcab5a9bf9c490a50f0c08de21e795"
  },
  {
    "url": "categories/index.html",
    "revision": "4fbe778992a9afbcd01b46cdc9417c80"
  },
  {
    "url": "categories/java/index.html",
    "revision": "61fde472597870c54e7b39fb93df4360"
  },
  {
    "url": "categories/java/page/2/index.html",
    "revision": "0788e85097e0c44d8f76ac283f2f2139"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "4faff00b2121fb919ef0abb8ba76fb52"
  },
  {
    "url": "categories/linux/page/2/index.html",
    "revision": "899ee78eb2d05f29cf40c7ac212bcf91"
  },
  {
    "url": "categories/macos/index.html",
    "revision": "a255cf9736e1e890af0c7b8980dc21e3"
  },
  {
    "url": "categories/mq/index.html",
    "revision": "9d5e4617a3390d14d1dc40cc68b06e90"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "323886a5fcf957e19e3fe1d511be1925"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "ca6239251492518444410e46a51796d6"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "1525faa93223400323c6ba339963ef4d"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "9f07bd7653af987d6ff8192385e29e18"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "36f63c77eaac67f40809d98e48562f64"
  },
  {
    "url": "categories/other/index.html",
    "revision": "06c1ee5a77318cdaa524d83cc35f6c45"
  },
  {
    "url": "categories/python/index.html",
    "revision": "3a50dd127d979dbaf241e9b742529959"
  },
  {
    "url": "categories/python/page/2/index.html",
    "revision": "a44d912e9a3a87a5d136d37abd40d5a6"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "a88c38cc7a7b2f0ec89a5d16c807dc36"
  },
  {
    "url": "categories/router/index.html",
    "revision": "b7766e63091e5cb514907089c1e6d6f0"
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
    "url": "imgs/router/dmz.png",
    "revision": "60b49bc7c1b34eb78e3661adce302bdf"
  },
  {
    "url": "imgs/router/ssh.png",
    "revision": "520cc2e7a3659bd8ed2f96a869ec5039"
  },
  {
    "url": "imgs/router/UPnP.png",
    "revision": "ae38ea5555a1dd4b84a0bca203ad4498"
  },
  {
    "url": "imgs/router/wake-on-lan.png",
    "revision": "a5961fefe1cb3a635dd2c0375ed15ca6"
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
    "revision": "b465ebec4b7937dadaab6c912b685e9e"
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
    "revision": "526d8e210f6386307c5fc509d8e87455"
  },
  {
    "url": "posts/database/SQL-constraints.html",
    "revision": "cdc47ce9869b721cb55516c7c12f7a00"
  },
  {
    "url": "posts/database/SQL-keyword-order.html",
    "revision": "bdc0e856ec54af01e3ff50f586bb492a"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "81ad477ac9106481e745b41db6757964"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "4682fb9af5af2cf8fa6733e0fc5d7fe2"
  },
  {
    "url": "posts/database/why-redis-fast.html",
    "revision": "7d580ba1f860a793192811d6400297b3"
  },
  {
    "url": "posts/devops/ansible-deploy-docker-compose-service.html",
    "revision": "62c549971037e890190812bc9824f10f"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "c66df62bae632685e26fd51b3f3fb7fe"
  },
  {
    "url": "posts/docker/docker-host.html",
    "revision": "f9c40b27a87a0e53445e33e1fc5153cb"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "b1a9cc73dfa0d609b39bcfa5d35c9553"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "33a6d36a9d7df66c60aeedb99d12d441"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "9f9c079dcf84fb348631a512596409f7"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "3f1729a852ab8108037c2cab4c678733"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "42b136376f86ff14e9eac72025d8cb08"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "e93d824ab03bef22cd1368e887723665"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "223085e8a42c8394cd237028350f3ed9"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "63d360ecf7ecbdec1fabfec6a4403102"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "32f3b386f51a163c747d130d00811cfc"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "7499e9650caea88c92cd4b771425f3c3"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "ec9670c14e384ce51aef6816866ed279"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "1a08753021c2d2b036f97ddcbe090c21"
  },
  {
    "url": "posts/git/use-multi-access-token.html",
    "revision": "59020de52464099f393c3ed8ea94904c"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "fcc89dc8efe845cac458634d018477fd"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "841b8a8941d2af157d6fccfa39c8f4cd"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "64c120a092be4b72299f930466c5427d"
  },
  {
    "url": "posts/http/https-shakehand.html",
    "revision": "85a96e2a5dae58d7f509accf35cd6f0c"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "5a71d6cc5eae9b670aeb52a34f00ea5b"
  },
  {
    "url": "posts/java/java-http-proxy.html",
    "revision": "31d133bc2a8bcdb34523bc75d00b24b8"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "ae96b50953ec6c7156d53577f7f7ac34"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "4ddadad28abd69f0da2c735a34fde1e9"
  },
  {
    "url": "posts/java/java-spring-MyBatis-Annotation.html",
    "revision": "03d83a5238b863477cb938b5a908e385"
  },
  {
    "url": "posts/java/java-Tetris.html",
    "revision": "2ed1b2ba184c90b13b3fd81c988027bc"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "8c53c1703d819fc69d86a16d19626f16"
  },
  {
    "url": "posts/java/spring-RedisTemplate.html",
    "revision": "850d698a027df3be347f9778afdf8e15"
  },
  {
    "url": "posts/java/springboot-disable-autoconfig.html",
    "revision": "91724144615858d7f3b61e42d3a326b1"
  },
  {
    "url": "posts/java/springboot-schedule-task.html",
    "revision": "4108e9c12765d43aa50a821d61cd1647"
  },
  {
    "url": "posts/java/springboot-swagger-ui-custom-config.html",
    "revision": "adf34171670caa3f18c47a367e6875a4"
  },
  {
    "url": "posts/java/TOTP.html",
    "revision": "5a0e3db67c51413f32044044b16845c1"
  },
  {
    "url": "posts/linux/docker-nginx-acme-trojan-go.html",
    "revision": "f51c343cbf33d42153311d2f7abf781a"
  },
  {
    "url": "posts/linux/install-ubuntu-with-xrdp-in-termux.html",
    "revision": "66ec681646bca8e88534d0bb29f970f2"
  },
  {
    "url": "posts/linux/linux-chm2html.html",
    "revision": "7c3b091cffa103a6c15b61a370d830eb"
  },
  {
    "url": "posts/linux/linux-ecs.html",
    "revision": "5cdfffc4e03be67252a9cc017f89f570"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "7fbc5123535f2ef23ff8f626c66ab1f7"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "dac9c25edf1f77ba49f6bbf40d2ef409"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "2b51a5b2390e6ace2258dfab4c525533"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "0c1f791fcda6469a1739d4bfcb83d3cf"
  },
  {
    "url": "posts/linux/ubuntu-switch-sources.html",
    "revision": "4a52412983e8c1d7e374db87f298b7ad"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "299ef3fc521b15db8ba0e085bc3c03cf"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "e3d57223e9f3b28e326472f4e475175a"
  },
  {
    "url": "posts/linux/wsl2-and-docker-compact-vdisk.html",
    "revision": "b6351035597289bbb64881e40df44223"
  },
  {
    "url": "posts/linux/wsl2-install.html",
    "revision": "0ba0964f50aef0db3e85af6990a290e0"
  },
  {
    "url": "posts/linux/wsl2-use-winip.html",
    "revision": "8dc6dd1f363f418e56ff5feb7788c769"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "d7fda30620dfeabc00abb159629b2c88"
  },
  {
    "url": "posts/macos/android-emulator.html",
    "revision": "c081d6cfeb14b20a02dfbf13208bd0ce"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "946c27cf91763a660b28f7abc84aa889"
  },
  {
    "url": "posts/mq/ensure-not-repeatedly-consumed.html",
    "revision": "1a5c353ab7357914a9734ecc54ff93f8"
  },
  {
    "url": "posts/mq/ensure-order-of-mq.html",
    "revision": "9035036fa3276b2bcd0b62a73ad1b40d"
  },
  {
    "url": "posts/mq/high-availability-of-mq.html",
    "revision": "55600029cfa9d84410fab3fb65acca5b"
  },
  {
    "url": "posts/mq/mq-problems.html",
    "revision": "b4355fa3fa5417d77ce4d194d557a97c"
  },
  {
    "url": "posts/mq/why-mq.html",
    "revision": "72a60c4c8bdaf22c85bf63ffa6c1eaa7"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "5203697af6e1c5bc6e3adc06804195ca"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "a4b3b3f71f7d25268183525073386abb"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "a870e99414fcc5e9514f17dccf8801c8"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "a3d0decf925ae36db6f15caaa8a1ba76"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "231343bfd4acb81bba2458b48d895db6"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "fb927c7a907cb9fd8c0711ed0967118f"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "a1dda158f20bd4b9d8a80c1c741be271"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "6c3d693ad256020e1b7811dc3a33af2c"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "7b3be087bdb69cccac604550d7503226"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "5cf988c97019e2d448af55cf8d12f423"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "9f68516bfad61f3ac163f38d3349c20b"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "f342b34ba279536a6cdeb77a6c0ffc0f"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "3a5fa6950eba28440a1d50eae82b01ed"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "d5770f8baf48f1941b171fc10dda4252"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "24d7ca2b632a937216b0d49c57588bca"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "8247b2897df93caf942b93d124c325c5"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "9e1c2fd59b53494b7bd495568e7d739c"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "6a741e15bdc71ee7aae04c5ff5eea77e"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "d7e77a596360fe9cb031fbbed3c78861"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "4e9646e3fe67b5029cfc901e869fad2b"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "865ef6bb7f6222386d310d65c9237c01"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "3bd52b8e0b2581821d97eaebc7464b25"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "12dc318f7d72bcd1295f44d711684ace"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "0e9e3b5bf51aace437685bc1d5a755cc"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "2f32fc808346617e28bb6c30afe629d6"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "c56d62efd84d8003e7eab927c473134d"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "d1103e974c6e4f8c51af891f9d556621"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "4e8e2adce325b8049d411afa3c26cee3"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "db698158c327a436fdd9c1ed26d6c604"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "b1ed7935c66a5eacb1bbdb60468fc95b"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "1a2d3f270fec6288aaf7e6f811b8f1da"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "68bbb01fcb9c9b50aa87c94c057bf41e"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "eea5874032447ffc8ae3aba6c1822557"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "6f8829b9295d75a4f61bc447c09d9c36"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "b0ab935495d4e194c8fe0c9255c78eb4"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "52381c4cc12f25fdad3b38d4cf0388db"
  },
  {
    "url": "posts/other/aria2-replace-thunder.html",
    "revision": "18fcda377134907c07833709829cd3e2"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "824560adf91bef3f4241eaf689850de8"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "9f6593449a017b88a6ef078662ad200e"
  },
  {
    "url": "posts/other/iqiyi-danmu-convert.html",
    "revision": "1bb35386497addbdcc432c6e26fa6239"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "8d727b86357d80af02499e74152116e5"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "fb8200ee4c4c7ca8f423ed23e298dbef"
  },
  {
    "url": "posts/python/deadlock.html",
    "revision": "a4e9cdc850d1c7b40c344e99b7fcbad6"
  },
  {
    "url": "posts/python/locust.html",
    "revision": "6861dec8c1dea8f5c16910d0bb61a5ad"
  },
  {
    "url": "posts/python/normal-errors.html",
    "revision": "b717c184976c065e89db4fd324400511"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "c360f5608b6151df5947c9e529a17332"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "637fb64e7fe29b58c3f40ef89751f974"
  },
  {
    "url": "posts/python/python-dynamic-import.html",
    "revision": "96e09efe0b72f2e6fcde487bc25179bb"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "7b616ec2ba27880ab2b9144ba8ed1cb6"
  },
  {
    "url": "posts/python/python-metaclass.html",
    "revision": "d125e1fb359da71791e5ff3d59880a38"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "3f304d93eb09ab6aa6b4f97222fedb7f"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "c02a873830750ae0887922a2f9eafc63"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "83fe034ac19f95296fb927c87c1f52e7"
  },
  {
    "url": "posts/python/whats-new-in-python3-8.html",
    "revision": "6cd7439260cc7bcd7abef7d8c88d1332"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "327913ef521af146ed2ed34246f485dc"
  },
  {
    "url": "posts/router/set-dmz-and-UPnP.html",
    "revision": "a538de1742745c8db2dca26a20d09161"
  },
  {
    "url": "posts/router/wake-on-lan.html",
    "revision": "d7fd62c76213ecad8513b986988233bc"
  },
  {
    "url": "tag/algorithm/index.html",
    "revision": "c1510ad1b63cfeeee5eff92caab96b83"
  },
  {
    "url": "tag/android/index.html",
    "revision": "7b5959014b1c5d151d80ef38eeb183e8"
  },
  {
    "url": "tag/ansible/index.html",
    "revision": "6e62d4c2e7c8e6e6e281e7461ad0a456"
  },
  {
    "url": "tag/api/index.html",
    "revision": "625925b97cbf01636263ad2d5274413e"
  },
  {
    "url": "tag/aria2/index.html",
    "revision": "29e451de3ea2e96903792b55eb33117a"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "04284b5efed930c20d7fc79d23b1a939"
  },
  {
    "url": "tag/context/index.html",
    "revision": "aea7550e18770e52942c910471de48bb"
  },
  {
    "url": "tag/database/index.html",
    "revision": "17ef13c94556da866782cd0bd492af27"
  },
  {
    "url": "tag/devops/index.html",
    "revision": "083d35ee9052896e0d957b557063d0cf"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "e0354078830bb13271b07ac8fd18608d"
  },
  {
    "url": "tag/emulator/index.html",
    "revision": "2df813e0690a6753ec58ddfebf3b88d7"
  },
  {
    "url": "tag/git/index.html",
    "revision": "552cbb7f9f24b0d0e5d0974176694b35"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "8dda0e485537269cde9212c8caa01750"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "f6d8dbcc3f448966abe8d161a00212b0"
  },
  {
    "url": "tag/http/index.html",
    "revision": "3a3626c835d780c2e7f2ea5937d6a693"
  },
  {
    "url": "tag/index.html",
    "revision": "72a60b1325914c34c2ed63a1af59702a"
  },
  {
    "url": "tag/java/index.html",
    "revision": "795b2a01d7581ee6fe26800e1bca3bd7"
  },
  {
    "url": "tag/java/page/2/index.html",
    "revision": "206d80bc0f9cf9f778c43f42793686e2"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "81e7800d7312cb87f00f86556b3a04b4"
  },
  {
    "url": "tag/linux/page/2/index.html",
    "revision": "e79c858fec0399136451e34d98408fda"
  },
  {
    "url": "tag/macos/index.html",
    "revision": "1cdb260630b3f97b5ee069f8c20e2d79"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "e9688081c4e9a5b9407085df60d78280"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "8db32d7de88f0823ac7da51bf779024e"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "8ac1984c4a625b16b899c77c8b78e304"
  },
  {
    "url": "tag/mq/index.html",
    "revision": "a37ee36644fbc1bc43a52bc4d951277e"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "478926009595fb3ccb5007950867054b"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "c3f9c9c2c97aa7fd477f4952d4801d04"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "d4d463af3d57be8b9f6408bad6f577bd"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "f69393c977eac1c7dbd1057776670c97"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "9fcb30792b19b68efd242f678695231b"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "60f140765200ebb96eae47e7c40d2ff7"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "231783a826eba13c6bf886fada5791c6"
  },
  {
    "url": "tag/other/index.html",
    "revision": "b60319a86a192785fc19e5c14f89117a"
  },
  {
    "url": "tag/python/index.html",
    "revision": "2e02909a4adfd0dd8e924b3314da1fbd"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "89c2a44e24f47b3ae44f27bbb18a700e"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "1e7a2921fb0ba2b56f52d3fa540ec27c"
  },
  {
    "url": "tag/router/index.html",
    "revision": "89dec642c041514d136d92890c033bda"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "a659e0304c095962e506fd978df6bfce"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "25e85434ca5de48d0d69c7f5cf743207"
  },
  {
    "url": "tag/termux/index.html",
    "revision": "98b377a18d7838fa6031cf2dbe540d4e"
  },
  {
    "url": "tag/trojan/index.html",
    "revision": "f18d525394de7ddd5cfcbb00fbbcfac2"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "6e2d8d0211c760ce47c17f5dd5ee5525"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "ae430e004e49dd862756a83cb23eb9dd"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "3dfd880c8d3a573edc865d7f83cabae4"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "63ffb54782a07bf99a209f96f34e75b7"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "3743129aa479882a340c8adb64b6d680"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "eec0b36cfab32ea36c213d8ca4f2e20a"
  },
  {
    "url": "timeline/index.html",
    "revision": "6d312953682bed628a93f38b48826db7"
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
