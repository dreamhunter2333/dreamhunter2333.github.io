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
    "revision": "38549f5e181ba9ac09701e1c3153da5a"
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
    "url": "assets/js/115.3a876f09.js",
    "revision": "22d5d3571da275ec2b20530bbe8fb120"
  },
  {
    "url": "assets/js/116.e96e2bbd.js",
    "revision": "dbb7305438071679a8de7a3a408493a7"
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
    "url": "assets/js/119.0dd6d95b.js",
    "revision": "bda5df9938a00dff02c82bc46c396bc1"
  },
  {
    "url": "assets/js/12.c691e6cf.js",
    "revision": "7015afecafe051b4d40b980ecd131193"
  },
  {
    "url": "assets/js/120.e7d98f56.js",
    "revision": "106763b4fb248a645f6fbdcd687847bf"
  },
  {
    "url": "assets/js/121.cb81b3f1.js",
    "revision": "c65bf70bf34d6ea91707d04cc0067465"
  },
  {
    "url": "assets/js/122.d7506949.js",
    "revision": "d01786cb609746007c372a4e7688e0c4"
  },
  {
    "url": "assets/js/123.bca2657d.js",
    "revision": "b05679096fbf9fd7f0987652ad81df70"
  },
  {
    "url": "assets/js/124.f8892119.js",
    "revision": "ddf03d11ad87cb7b8df72f19a8643e55"
  },
  {
    "url": "assets/js/125.5633d30f.js",
    "revision": "54c862e2c6a56dedb781c5475184a599"
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
    "url": "assets/js/128.0b3eb59e.js",
    "revision": "9a5847e75dac1207eb6ce4575c010d80"
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
    "url": "assets/js/18.23bba5d5.js",
    "revision": "edb74af180400a411427e044bd74537d"
  },
  {
    "url": "assets/js/19.0ca2e282.js",
    "revision": "84ef27f8ea32fa096590a16a988d80a4"
  },
  {
    "url": "assets/js/20.6f9187a2.js",
    "revision": "a30d3b157a590c83feb79ed4fccbb7fd"
  },
  {
    "url": "assets/js/21.86059591.js",
    "revision": "0401cdea476c3047943f43ca7064d0d9"
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
    "url": "assets/js/29.1527bcfc.js",
    "revision": "327472a3ec37209f099fcb4ee39e30f7"
  },
  {
    "url": "assets/js/3.f47af0d0.js",
    "revision": "399c435ec589646f19f229fa5b9cf964"
  },
  {
    "url": "assets/js/30.c80f64c2.js",
    "revision": "3cfee487c59da6fbef362f53ca5eea89"
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
    "url": "assets/js/50.02fa2c09.js",
    "revision": "9da7002d372b99a4a976adecdc01737f"
  },
  {
    "url": "assets/js/51.dfb5b7ca.js",
    "revision": "dd7f8885042220cfc5f6744e1c48a413"
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
    "url": "assets/js/9.3667efc6.js",
    "revision": "ec671bd7fe6c0fc6e2e2f1a731b2c165"
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
    "url": "assets/js/app.2486884c.js",
    "revision": "d01ab7f3f3b605a6106e68c4993dc515"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/algorithm/index.html",
    "revision": "b53cd1e62c25cce04a4e4dea3e26c9c2"
  },
  {
    "url": "categories/database/index.html",
    "revision": "aa490ea3a78ed3fd03f853eb9244a0c4"
  },
  {
    "url": "categories/devops/index.html",
    "revision": "ea12dc65a7c358ac5a728dca3244e860"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "4c743b26229c8e058ed6817ac986421d"
  },
  {
    "url": "categories/front/index.html",
    "revision": "ed87c647f83fbbe0232b9224337ccf5b"
  },
  {
    "url": "categories/git/index.html",
    "revision": "8915f3df2b4cab0ba20e94a1b1be5add"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "4902b60c1d011d9e7bacf6c0f988ec03"
  },
  {
    "url": "categories/http/index.html",
    "revision": "4d42f0f154934b82f174c4d3e5fbc107"
  },
  {
    "url": "categories/index.html",
    "revision": "c553e821e9e48d2f6f82d9775cb52e97"
  },
  {
    "url": "categories/java/index.html",
    "revision": "0bb994955684582700241d1d78cf9745"
  },
  {
    "url": "categories/java/page/2/index.html",
    "revision": "3a7a47acdc813a966e5ef0dd43ae67b1"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "274494a3e42ef68c6b2a35f648cd2283"
  },
  {
    "url": "categories/linux/page/2/index.html",
    "revision": "4059eaddfd915030ea4868ce889bc46c"
  },
  {
    "url": "categories/macos/index.html",
    "revision": "5327db93753918fa1d6e5105dc2372e5"
  },
  {
    "url": "categories/mq/index.html",
    "revision": "bdda0a6ce06eb604645409a6b78275cf"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "f700bebdd4f17a4c0c4b48f0dbd3c439"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "14c3aa863931c4cc68bf8b205878f7be"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "ba33c506b4a7fcac0cf118c341aeaa02"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "6cfaf71982247e6e588e026d4d353549"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "721fe861e480e747f6358f285534f6de"
  },
  {
    "url": "categories/other/index.html",
    "revision": "d0acee92916572fb4d88db01e6bae6d7"
  },
  {
    "url": "categories/python/index.html",
    "revision": "a169dcbfa31fd603af95671b9543dfed"
  },
  {
    "url": "categories/python/page/2/index.html",
    "revision": "06281452b449a23567cc082ccc4a46ef"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "91f0b005a9abbdf39c372d58683d747c"
  },
  {
    "url": "categories/router/index.html",
    "revision": "b37d836f1625fe52a135791934c0eda5"
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
    "revision": "b88754e308f418eaf0ad49782da1f65d"
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
    "revision": "a0486a9eb1235ab9cc5d7cf20cd11abe"
  },
  {
    "url": "posts/database/SQL-constraints.html",
    "revision": "1131afc02e6ca607ba2f04e78b2c9df6"
  },
  {
    "url": "posts/database/SQL-keyword-order.html",
    "revision": "7dd445769b85dfdd54e3c19dd7f69c66"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "02d2dd6a1eefe398c087bee3b98d7087"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "0b63c0c574b0086fb7381e9d270d14f7"
  },
  {
    "url": "posts/database/why-redis-fast.html",
    "revision": "991dd6c1b59e9811def38292475af880"
  },
  {
    "url": "posts/devops/ansible-deploy-docker-compose-service.html",
    "revision": "ddaf3b90d7e57e4176c906f5166becee"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "27e6ccfbf5c686470047ee303000e57e"
  },
  {
    "url": "posts/docker/docker-host.html",
    "revision": "901daada03cdd6b76c1dac52e473502b"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "f7ed9e199835ea94dbf3368deef421a0"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "e39f81626af4cf82a7abf84cb01fd631"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "5180a2a0f71a7adbd39a8114f33f011d"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "3144ea9e07471dacce60a8204e0b76e0"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "8406f4e346d69187c3e668b17983dd4f"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "75874849e980810cca46bb299ffb53d6"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "5ca620c9c388c54d778440919b89ed4f"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "67d9e1207ff503a3ec65f1eb2fca3168"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "6a89ae64561f989fd0a119f47097e622"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "7cd505dcc5955650c8835b93fb683d7e"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "58cbc2fa21a32886151f91d5ffd34dec"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "032b9d849cd2e7b4b6c67b4e3704fd9f"
  },
  {
    "url": "posts/git/use-multi-access-token.html",
    "revision": "357e0b2942c07e0babc2cd300a8aa583"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "d241f69d621721225f315cdf11d62c23"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "ff6f51879291db483f034c37f06f0b59"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "69b0b44fef3276faa6e994fcc4687a4e"
  },
  {
    "url": "posts/http/https-shakehand.html",
    "revision": "0e22e5b70a60fcf8e6dc3de83ca39719"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "b19e0ac54b25736f2d25b6b61cbe2dfb"
  },
  {
    "url": "posts/java/java-http-proxy.html",
    "revision": "966fd6552d2bace2e68b03a3bb094c26"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "db5126355498bb95685e36a86d1abbe4"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "08ed8ebe4a97c2d1db89a7f1e1d442c3"
  },
  {
    "url": "posts/java/java-spring-MyBatis-Annotation.html",
    "revision": "068df89a331e1bc9b4ba1c6f84fbf6b3"
  },
  {
    "url": "posts/java/java-Tetris.html",
    "revision": "442f3a39e9645d49aca09e36d1452a85"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "5defe21f1bcaa0d020b4fe979942d1de"
  },
  {
    "url": "posts/java/spring-RedisTemplate.html",
    "revision": "00a93695278ac21250f4652f89560dae"
  },
  {
    "url": "posts/java/springboot-disable-autoconfig.html",
    "revision": "1e1b602ad52eb47dba8466306ad31760"
  },
  {
    "url": "posts/java/springboot-schedule-task.html",
    "revision": "fe086f762a4b436fac06881af6be028c"
  },
  {
    "url": "posts/java/springboot-swagger-ui-custom-config.html",
    "revision": "12bef4bd7e175dec3be049400dddbe5c"
  },
  {
    "url": "posts/java/TOTP.html",
    "revision": "e458562d791bef588d11f6b8dcf55128"
  },
  {
    "url": "posts/linux/docker-nginx-acme-trojan-go.html",
    "revision": "b35c9f88c16b41bf34b3bd54c5b1d61e"
  },
  {
    "url": "posts/linux/install-ubuntu-with-xrdp-in-termux.html",
    "revision": "25a456ff2e9d24a4a1bf3e861dc82e75"
  },
  {
    "url": "posts/linux/linux-chm2html.html",
    "revision": "efbe07abc9a497686d8de64ef1c7ad6d"
  },
  {
    "url": "posts/linux/linux-ecs.html",
    "revision": "63e875c6eb7d4d42b3938314e98f8ae0"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "c7f0b91af91fb9e027d2219a4934a628"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "ec60197b176090515abd3da30562c48f"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "41105e94ec12245676e34921612bd6bc"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "0d4c2d8ef53742e51c3b6c380a9d1d58"
  },
  {
    "url": "posts/linux/ubuntu-switch-sources.html",
    "revision": "422cbd5ccd6d5ef43e2109f85b2d80c3"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "c1dc5807314bca43b814a07db11fc1cf"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "4c6175c94606606a902ba355f163f803"
  },
  {
    "url": "posts/linux/wsl2-and-docker-compact-vdisk.html",
    "revision": "bb497aef258813c6dadf6b045bb39ef4"
  },
  {
    "url": "posts/linux/wsl2-install.html",
    "revision": "e8694ae59ba97a9fd5370caa1e15de03"
  },
  {
    "url": "posts/linux/wsl2-use-winip.html",
    "revision": "de2b4c82e617d7c504532a0e4d721ac0"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "a009f36acfe26a9c4666e62d25523e4e"
  },
  {
    "url": "posts/macos/android-emulator.html",
    "revision": "ef2c47ff455df0bec07c50f82c8bf786"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "060f4aec2ff2b20ab71bc43002458157"
  },
  {
    "url": "posts/mq/ensure-not-repeatedly-consumed.html",
    "revision": "2ae96703d56ceb50aae0762cdc3f3e05"
  },
  {
    "url": "posts/mq/ensure-order-of-mq.html",
    "revision": "d605e97a0758e90f5d30030a62927b93"
  },
  {
    "url": "posts/mq/high-availability-of-mq.html",
    "revision": "00437978fee7eff294dc61e838ff5421"
  },
  {
    "url": "posts/mq/mq-problems.html",
    "revision": "2feb5d8a6ed5f8f8390a470faa8ebf75"
  },
  {
    "url": "posts/mq/why-mq.html",
    "revision": "64037d522432593cd95b7dbaf83998fb"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "b47c99fd2c44068816910f596042668d"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "6b9ec2f9cdfe377862cdc20d59115090"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "63cf285798a4fced296cd2822dfdf195"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "75c872bc26888e813f730e6a623ede25"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "b6450358330d23604da43312b9bea3c2"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "d674fb9eb910ddb10b015fa0dc8d461a"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "1560f4e13560b5dda42951b28303e01c"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "92f7a368376912d686cb0228a8ef863d"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "fe39ebceb198452355a4c8aeb757e01a"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "8a3a6a3a24c93766730b34c9f1dbcbfe"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "fde6ea81a923a85f5c50259e1742c69f"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "2a86feb819559919e97448846ec4dc77"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "cd6f51d69694163001516d8ab7545562"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "d8d5d63cf39c0c6d67d7c31c78f488d9"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "84d88c3acf95f8e00a3f29f07fce47d2"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "423970d1acdc6f6ce357e325cc5c9679"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "518e0c7d19747cd92ab7f32854330750"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "75d79a182d318bd04f0d5b49f4838be1"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "271829d94be3303bd9f108a25889ca3e"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "599bb1eb17c75da354743c9a7010e7ab"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "b7763173374514ca19f74b00cd1c567a"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "07becb4c1d2ba69981bc2ffa04d0607d"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "90bdabd55b55cf1f03aef80878088b48"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "73da57f30e2e9b8129cb97c10549c136"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "58dd819779962a8c531029d531f6b594"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "1934c569ccce695a2a6046915cf436bc"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "5d4f74f0c3605e4dffe4a3db4854d237"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "10613be2a88e4ea3dfa168e2f37eec9f"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "167d43b9e30e377d416e6821f38b63ef"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "15cc88ad3882ece6ced96198d186a3e7"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "58fc8cfa30a7c4bc9aecea2f9717fa88"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "4f3b515ea0e3d3bdaa88f95442dd718d"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "ecd6982cc1d9123762386202020f1212"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "bc6d27b2fb4639ec9e821bf7dbfb9158"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "9a3f5799f3f381a3550da595bb0dad49"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "c47b2268b020de13184b35261592108e"
  },
  {
    "url": "posts/other/aria2-replace-thunder.html",
    "revision": "ce5790697fd0b1ded1a3d7e5a8ff2918"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "d43a190c7619b823e8aeb9564a97c17e"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "1565dfe1bca2e8bc333ee72467b29b64"
  },
  {
    "url": "posts/other/iqiyi-danmu-convert.html",
    "revision": "53a41bbeb45c1009a7a61ad28347efc3"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "83e4f68d0f01996152666c1393598fda"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "30a65e0cd22b8365b18f02fe904208ea"
  },
  {
    "url": "posts/python/deadlock.html",
    "revision": "789d97e3eafed7f3c4204ce6966d92cb"
  },
  {
    "url": "posts/python/locust.html",
    "revision": "bf7f5f7b9d0232407adcf6276f3ef4a1"
  },
  {
    "url": "posts/python/normal-errors.html",
    "revision": "4f1e3e21374604d8f0b35c218a1be4ac"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "f83173ddedc2bc582111632beea70ae2"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "96871d866881d53a61992a56fc314380"
  },
  {
    "url": "posts/python/python-dynamic-import.html",
    "revision": "81a5a212b92f5cf76cfc2628eebdb893"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "4a962db10636bd7de2a6dd10ecdac8de"
  },
  {
    "url": "posts/python/python-metaclass.html",
    "revision": "054bde7942a4fc05d7d621cefdf91992"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "3018e2a8e436e8efb769dd6a6d95c2f1"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "eb9951eac2d07cc9d26d713478f98918"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "72fa1320b55f0a8bad602d094d0182e6"
  },
  {
    "url": "posts/python/whats-new-in-python3-8.html",
    "revision": "993ecf865a034e4740895d1cfda1cb41"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "cb41404f01ba278b35a46a4b29ea2ef1"
  },
  {
    "url": "posts/router/set-dmz-and-UPnP.html",
    "revision": "05dbf50dbf2dd0d36b9ad11a8d2dc93c"
  },
  {
    "url": "tag/algorithm/index.html",
    "revision": "fb14d57a4b486b9763a0c8184d8f99c9"
  },
  {
    "url": "tag/android/index.html",
    "revision": "3d18f545b23b57f622b982436e5dad0b"
  },
  {
    "url": "tag/ansible/index.html",
    "revision": "4ae94335394d73d5e6cb0e96ed0c5735"
  },
  {
    "url": "tag/api/index.html",
    "revision": "754583fb64f6ae17843e563d312e0aed"
  },
  {
    "url": "tag/aria2/index.html",
    "revision": "7fccaf734c23614d4533ed707d41be4a"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "cdbc83cad0a8fb75bcbaaee447f9a520"
  },
  {
    "url": "tag/context/index.html",
    "revision": "4eb60affc93d49c07a3119176526b04d"
  },
  {
    "url": "tag/database/index.html",
    "revision": "c9176c58dc47bf6e9ab9bb01e0071fa9"
  },
  {
    "url": "tag/devops/index.html",
    "revision": "68504e50488bb463c5b597273cb616af"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "0270903f3972f34b732d406022e681a3"
  },
  {
    "url": "tag/emulator/index.html",
    "revision": "cfd1198ae7b0fbb3d374f70b8e125edf"
  },
  {
    "url": "tag/git/index.html",
    "revision": "0ea339bc6afee4a5a823ce37a5eea1a3"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "60d77f02e697370d7b127db49f9da457"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "3903c489b53cc2a8561f8d15bd0d5904"
  },
  {
    "url": "tag/http/index.html",
    "revision": "9fb999b493cb986251c86e469ea573d2"
  },
  {
    "url": "tag/index.html",
    "revision": "4cd94be0292362421621fefedf8cef89"
  },
  {
    "url": "tag/java/index.html",
    "revision": "ccbf535a92c79f54fac67687be2fd64a"
  },
  {
    "url": "tag/java/page/2/index.html",
    "revision": "007c0efa2a715566ba497eabd6bc3655"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "2aa9213f2d92dbe5c5d03d4c38d7ad65"
  },
  {
    "url": "tag/linux/page/2/index.html",
    "revision": "c3b5ddfd20019cd094164f8eec02bf92"
  },
  {
    "url": "tag/macos/index.html",
    "revision": "429e8f79cc3436645f1c2e96c7955a09"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "94f2ebcd5c9ab83e87d542de59377dff"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "89bca047eeddbaaf3177a2059a66f743"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "ce1ce137ac9396389ddf16fb6a5fb40c"
  },
  {
    "url": "tag/mq/index.html",
    "revision": "ef2ff29f5747224dcafef673fbb90266"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "3fae46f06567f94baf9b3e0b7742e00c"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "8e3ad740170d208b6f56887473198d05"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "7e16d544b1e4132cf7cc44cd2995bff6"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "284aee8eb57e16d869f50227a99b36c9"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "e3f43ee7aecf6f33b82d977fae152130"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "365922d733d1f8ac220af9a921fbb8ed"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "ea0f8985fd52d7b6568333c8bfccf529"
  },
  {
    "url": "tag/other/index.html",
    "revision": "30feefefa14863ec5f79195c2931e0e3"
  },
  {
    "url": "tag/python/index.html",
    "revision": "9df3b124e0da22337299232486350e4c"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "8aaa0d790ccc8ca211a5291317a32417"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "efbd538cdf5085548396e7e33c2db867"
  },
  {
    "url": "tag/router/index.html",
    "revision": "88826e747f4836602fd8fbdfdbd6ab31"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "0875b9088db22d93328edf0c38312af3"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "1a3c6ecde4b096c215665d8cc160c698"
  },
  {
    "url": "tag/termux/index.html",
    "revision": "9bc58695b957c489c7a7d33ed3d543c4"
  },
  {
    "url": "tag/trojan/index.html",
    "revision": "e18334cce5e0d60c97abffda2b95c135"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "251ba2184b073850bded0457e2a72ac6"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "7bcdbe74b1a24f8ef8a02b33774fbfb2"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "86f8164c1be4158aee2ae8fbb4f1b089"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "f7f4b4a8a388b7988be48163e918f250"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "913116ba1c93bfe0f95a84eee66c83ec"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "86bd3622d1adb24f559c682f5008ae92"
  },
  {
    "url": "timeline/index.html",
    "revision": "7d1d99d8a65955e4d624fe844e1085f7"
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
