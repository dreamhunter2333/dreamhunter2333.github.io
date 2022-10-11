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
    "revision": "e9c7ea92529f36cef10cbdacdea43db3"
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
    "url": "assets/js/120.c3832a98.js",
    "revision": "14167a17d54e8c79071767951b500e38"
  },
  {
    "url": "assets/js/121.1d73d044.js",
    "revision": "0280b743bac64745bebc4349e4705791"
  },
  {
    "url": "assets/js/122.fe6b508f.js",
    "revision": "9beabe000e712a7d9d1e902df008b396"
  },
  {
    "url": "assets/js/123.ced2c30d.js",
    "revision": "8c5429a7f16ad9ef3b96112de7a4c6f3"
  },
  {
    "url": "assets/js/124.b462598e.js",
    "revision": "457d6ffc094343c0d20e87a4f4d763e8"
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
    "url": "assets/js/127.fe6b1153.js",
    "revision": "6f07289204dc29d180139a604a247ce0"
  },
  {
    "url": "assets/js/128.0697253c.js",
    "revision": "a6b0db6fe0a47bac80d0b69265525d02"
  },
  {
    "url": "assets/js/129.06f312d2.js",
    "revision": "9408caf94de9447ed49ee3525d8eb72c"
  },
  {
    "url": "assets/js/13.4d4f4941.js",
    "revision": "e9586d3de5257b29a087062aa9f7fb45"
  },
  {
    "url": "assets/js/130.60de4493.js",
    "revision": "bd6c0497c07fcb8e4fd3c3b92add79cd"
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
    "url": "assets/js/85.361e11dd.js",
    "revision": "59a20855c266f7c4b5306c94d5ccf318"
  },
  {
    "url": "assets/js/86.3a9abcfc.js",
    "revision": "d2489b7f86d8768004a2f079df261d57"
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
    "url": "assets/js/9.3d5e982d.js",
    "revision": "2b7b53af36acf6d78babe2401138675e"
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
    "url": "assets/js/app.c29a5465.js",
    "revision": "b1af547d0651a317ea0a93072cb0c3ed"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/algorithm/index.html",
    "revision": "222422b0a062dfcb10f5a83dd805bdc2"
  },
  {
    "url": "categories/database/index.html",
    "revision": "1ce2e79f1eb917925c0b25ccf19ae645"
  },
  {
    "url": "categories/devops/index.html",
    "revision": "699f8cfd6c1e2f9cdbd56488c92839e5"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "0779aa6be83d161d4d74782f8c42a2df"
  },
  {
    "url": "categories/front/index.html",
    "revision": "77d108b7afb0855faca39484a0e3d183"
  },
  {
    "url": "categories/git/index.html",
    "revision": "ed0f133ec0cd1253c7c29599a14b8e28"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "bc825867ed8123ece534d87fa9a4312f"
  },
  {
    "url": "categories/http/index.html",
    "revision": "fd61033710df88f7aeabe327f756539c"
  },
  {
    "url": "categories/index.html",
    "revision": "717a87daffdf0ccb52697d2e3f56549d"
  },
  {
    "url": "categories/java/index.html",
    "revision": "d8f576fe082ccf2e8c4a070560570c30"
  },
  {
    "url": "categories/java/page/2/index.html",
    "revision": "1effdedf86fa3104485bff8b5a0b1af1"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "483e880e714094230b33e469b61e1473"
  },
  {
    "url": "categories/linux/page/2/index.html",
    "revision": "c9075061c1d3d5caefb7765f66708f86"
  },
  {
    "url": "categories/macos/index.html",
    "revision": "5491b42b872d97cfb6dbb0df462234d9"
  },
  {
    "url": "categories/mq/index.html",
    "revision": "d511ca9c835c65419590ba1b70c3d6f4"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "12a23826b48f851087394bfffb415b45"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "1d3fb05ce49de2865b67036b87031d13"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "c8829a415d644d2ad55c4ffe28ae1004"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "d162ffaf4eeab416b40a0f78aebeac51"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "b505ded7ae6157bbb10b6f22d13a2f70"
  },
  {
    "url": "categories/other/index.html",
    "revision": "05445cf28d6a058a0b333983a283d295"
  },
  {
    "url": "categories/python/index.html",
    "revision": "10ccce57b4b5e431f50c11961bc90ee6"
  },
  {
    "url": "categories/python/page/2/index.html",
    "revision": "1f04340a9b4476a6bb868bff1f623ca9"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "7e2da6416e72c7c6918b36ad6d37c959"
  },
  {
    "url": "categories/router/index.html",
    "revision": "1eafa1cef0fc18f383a906cb4c404baa"
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
    "revision": "fccde65703c971d104cc330aa96e7aae"
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
    "revision": "46bac9f6de3206cb6e43c41c3b329919"
  },
  {
    "url": "posts/database/SQL-constraints.html",
    "revision": "f80325e45030f7401b6d6a095d0a5033"
  },
  {
    "url": "posts/database/SQL-keyword-order.html",
    "revision": "061221e027231cd2e14c2f8fe6b341fc"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "176b681568edbaf7bb5368bdbb02df45"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "ea8194dc36aeacb49876706244584381"
  },
  {
    "url": "posts/database/why-redis-fast.html",
    "revision": "62822c997bd811e7cca32fa282a54c88"
  },
  {
    "url": "posts/devops/ansible-deploy-docker-compose-service.html",
    "revision": "eb569978fbf95d490a74a5899ca7c22b"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "2ec38a9756acd45df573f56357160d44"
  },
  {
    "url": "posts/docker/docker-host.html",
    "revision": "289494a3d0018043553965eb6b17ba89"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "1c19d1a4d9cb837df8ae0c695c200ff5"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "3bda00b5d4c172a3d6517ba7ae0cbaac"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "70c8c23005fbfc87b8cb5e2657c41425"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "e9e1c70d8acd410af9842f8374e87e04"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "66dc80cf5be1da6f0061dc86b7cd90af"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "73f63c85c1e397b9cbb826a1a842382c"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "54074856dd48f3271bf2b550b9678ef3"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "e2fec5e768413e2d54f32b9ba50044c4"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "98f6425d4dcd16732f6e4afb6e6836b3"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "31c467cf5011c2883f40acd6e7b1cc19"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "ca32bdd5b44b7227037c868ada54058f"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "045d37381b1af9c91a9858ccc72daf36"
  },
  {
    "url": "posts/git/use-multi-access-token.html",
    "revision": "4d06bfa45e831d035e555b13dde775c1"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "8d651aa1ad0eac48235a666c5f393ef5"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "9e5e27c00e307e93c8bd4aceb7353257"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "5be355998ca6fc0a360f6d5e945002d8"
  },
  {
    "url": "posts/http/https-shakehand.html",
    "revision": "36ad019588943767182265e956b7b499"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "3221f5df7c50c6df32b2234d674ec6dc"
  },
  {
    "url": "posts/java/java-http-proxy.html",
    "revision": "ea2e8a343cbcd3b6b6ecffaffe8627bc"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "4dd862df6a9438f78fbae83e5ef856a7"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "38ef7dad43c8fa49880d3a7292a09e3a"
  },
  {
    "url": "posts/java/java-spring-MyBatis-Annotation.html",
    "revision": "b785afeb91a3eabd47d9609aef4cbd4a"
  },
  {
    "url": "posts/java/java-Tetris.html",
    "revision": "a27450baaa6129773fe2ab9623be1ca0"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "21079d23b277dbebea7558347bde5f8a"
  },
  {
    "url": "posts/java/spring-RedisTemplate.html",
    "revision": "9def12817e57604fb742037b58ea1e7d"
  },
  {
    "url": "posts/java/springboot-disable-autoconfig.html",
    "revision": "47f3ddee30ee1dc7830c362f96a15f54"
  },
  {
    "url": "posts/java/springboot-schedule-task.html",
    "revision": "dea97822cdb5dfae6b6f5c860fb328b8"
  },
  {
    "url": "posts/java/springboot-swagger-ui-custom-config.html",
    "revision": "4c71e5dd366319f6282d8656a91a1632"
  },
  {
    "url": "posts/java/TOTP.html",
    "revision": "2991476d5448a5c9041efa159311c9f1"
  },
  {
    "url": "posts/linux/docker-nginx-acme-trojan-go.html",
    "revision": "4d421f81df7560f00dd62e65608f3dd9"
  },
  {
    "url": "posts/linux/install-ubuntu-with-xrdp-in-termux.html",
    "revision": "aefedc72fb853383162d118c1c3edd5a"
  },
  {
    "url": "posts/linux/linux-chm2html.html",
    "revision": "69dbdc11fd3977743fce4a7f3621dc18"
  },
  {
    "url": "posts/linux/linux-ecs.html",
    "revision": "642f92d43339a563ff982b8907dae121"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "9f897f9142af1a72f93524c93fd61466"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "46f1083cdd867170c292dcbaadeddf85"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "40dd2321bd213e25a41897a281c607b1"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "5c0f60c0e50c41c6f8988da967e4b278"
  },
  {
    "url": "posts/linux/ubuntu-switch-sources.html",
    "revision": "71d0f29d0f35a0bdad1c61831bb57c6c"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "49946e20593ef656306f148460f39dc0"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "fb1441b0b43e7b497142a37fb691d44a"
  },
  {
    "url": "posts/linux/wsl2-and-docker-compact-vdisk.html",
    "revision": "0478fa9b6857d63e31ade09f64efff96"
  },
  {
    "url": "posts/linux/wsl2-install.html",
    "revision": "25e78ab238f7b39dd7645bf520388317"
  },
  {
    "url": "posts/linux/wsl2-use-winip.html",
    "revision": "dbe9aa80ebb69d4d2dacd7662b3fdc2c"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "10412ae8813c43218986e97c6139ea81"
  },
  {
    "url": "posts/macos/android-emulator.html",
    "revision": "e01f73bc903b8dfa0806b85a348e9616"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "5da838002972f4164fa6ec2de4efd78e"
  },
  {
    "url": "posts/mq/ensure-not-repeatedly-consumed.html",
    "revision": "c649c30b98f15d7b15d02e46facf9038"
  },
  {
    "url": "posts/mq/ensure-order-of-mq.html",
    "revision": "f639cf3273a5ee646382cb8b6885b896"
  },
  {
    "url": "posts/mq/high-availability-of-mq.html",
    "revision": "a0f6a3bb1bf50ded2c4f459fb83aa070"
  },
  {
    "url": "posts/mq/mq-problems.html",
    "revision": "19603dd515b8668902bc7b9e21e0ddbe"
  },
  {
    "url": "posts/mq/why-mq.html",
    "revision": "4309c1c002f043fdd4e665df2dd767b6"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "21649c9f83590123c3b665e8a66ddfb4"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "ce4424afebe53bc1925918b6ad37e685"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "2e5423a4c9439e1ac9e9f305ed758d44"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "7275c73458511fcecfa378149c5e77e4"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "659da1c08eb2e19b37d5a89c3442eb96"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "edf93af13137f5598a74c7ef6bb40e9b"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "dec828be3ff3b8b5b696c0c70bc21a7d"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "3bf70afdc39e30b618ba5b92ef6ba39f"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "307a45126803b5eb6c0890b3b054e442"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "5772624faebfddb13fcf061de8e5b2a1"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "ec1fc12f03438c5d243ba73efe4a09e6"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "a6f32664fa53a08d8acd6ac5c2404f53"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "f120239b501648f1866134e54c456ef4"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "cb9395f824af988b8554622d7ff83e1c"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "3a3e96f1513f1475095d76ea9a6b399f"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "8a0b5c8a9ef3bd28efb19a0f7d031634"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "37c9da0391cb6f14970e7c72f581442a"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "b93eb2c73fb743cfc6c45c66142a9acc"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "5254f7dea34e1a8265951c3eaf651c98"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "406ac8102fb0ede2b8dd2584d1964e19"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "beec787673ab70f62157fc8edb5f550c"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "05c922d15ba1721394e41f2a1ade8366"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "0ec0fa39203344f6e9c0d2bc771bbd57"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "356e27c2c70d8e9e2330e7fa283e28e3"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "c27852856cf41ddfb3bb1597d3593a47"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "c1878e2d1fe99a1cd39590ab07b079e4"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "9191bded64fd1486c1d81fe0e91af3c4"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "564197e7052d60388f4c9fa5f8fda2c9"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "46942897efd41b5cb225ed725a6abca0"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "24d8d77ab0fa5f70033afce3f91f537c"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "156e21440723b991564086a68b0daa65"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "fc2045469a4c4241a0108dc098767001"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "cd654c3294016b45a79965d335664a4d"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "6f341ea78ed7f5fe23487aa930070a23"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "7cff685bedd938fdd51d282955bc573e"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "8dc587977270aa300cf5499e50a44658"
  },
  {
    "url": "posts/other/aria2-replace-thunder.html",
    "revision": "333bd9eefd01081ebba67a3cf71c8dbd"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "fe5893ec85a98445e4b6d0831fd8e8b3"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "09fb4d73b495b8714781296a887b8bae"
  },
  {
    "url": "posts/other/iqiyi-danmu-convert.html",
    "revision": "1464826ed4569bc0eac6a3c4ce3ac776"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "e83e43a7ec241aa71401e208f04a8876"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "b9dcf6a5098e8279dfe3b4edbc29cf40"
  },
  {
    "url": "posts/python/deadlock.html",
    "revision": "78d1ad515aaf9c5be95b9465dea78c3c"
  },
  {
    "url": "posts/python/locust.html",
    "revision": "af94dd97d227fb3f74c1df4f7ce272a2"
  },
  {
    "url": "posts/python/normal-errors.html",
    "revision": "6c5af66013f9641971fbded4d4e3c4a5"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "5afd0c7ba5fd99d0d3c6b46ab2489a18"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "27c3e9457ee56963e0a9ccb15cec7972"
  },
  {
    "url": "posts/python/python-dynamic-import.html",
    "revision": "acbdaa2e11dbc13ca16bd49716bfc35f"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "4cb4cb15e16adcbd19ee0197444e8d82"
  },
  {
    "url": "posts/python/python-metaclass.html",
    "revision": "16dcc7bf4383d3de64b1a1844390018a"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "84c342a87ebf8f5325ea94b7e1cd6f6f"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "96e8ade5ff77744a4e0c42926afa83b1"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "f23efd92a53bb3bdb4485ec5645fe40f"
  },
  {
    "url": "posts/python/whats-new-in-python3-8.html",
    "revision": "515316cc43838c5a71a35a50d6da7f04"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "a4bde90bbf6e9d2d81732460ad3fdfa1"
  },
  {
    "url": "posts/router/iwpriv-DisConnectSta.html",
    "revision": "5f0ab4181a5c1a4d43072d5a7788dac3"
  },
  {
    "url": "posts/router/set-dmz-and-UPnP.html",
    "revision": "f654051bd2484aa8f6a39048cd17536b"
  },
  {
    "url": "posts/router/wake-on-lan.html",
    "revision": "989fb0c65872233b07f9e28d219be13a"
  },
  {
    "url": "tag/algorithm/index.html",
    "revision": "c2960e47bc9df4fc59da642b28ec7024"
  },
  {
    "url": "tag/android/index.html",
    "revision": "8df5c8dc8d4c71c83c5fc7cc2514f059"
  },
  {
    "url": "tag/ansible/index.html",
    "revision": "71a5c47a69c3a6122f42185c68250d83"
  },
  {
    "url": "tag/api/index.html",
    "revision": "25e2d3cc95abdd455920b207c5c3d14c"
  },
  {
    "url": "tag/aria2/index.html",
    "revision": "08662cd0e8f560a2c2e601270fb4aeb6"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "7adfda19572d9b8372860dfed576de05"
  },
  {
    "url": "tag/context/index.html",
    "revision": "c73116e84f94e6e360ba8c8dc3d0fdb7"
  },
  {
    "url": "tag/database/index.html",
    "revision": "d295d145b9585aa1688efd075888e5a7"
  },
  {
    "url": "tag/devops/index.html",
    "revision": "8638f3b01e92653404fda79b8ed285aa"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "05de1cf3d0a8457e43dba2c7ab802a63"
  },
  {
    "url": "tag/emulator/index.html",
    "revision": "bdc3200a72fd8149c6876ea36badc74a"
  },
  {
    "url": "tag/git/index.html",
    "revision": "48c81cc1b4cd30f9ab670b030f288daf"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "d0cf6bd85c4dc6ce523512d685e3c45f"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "f4a6f1325c15bd1a05724844c857dd1c"
  },
  {
    "url": "tag/http/index.html",
    "revision": "344468ff922f3d5b8ddb7a6b1b60aa61"
  },
  {
    "url": "tag/index.html",
    "revision": "c665c6c33e0faac31a244e1efaba80c1"
  },
  {
    "url": "tag/java/index.html",
    "revision": "4e85e83da13006feea6ea7186b9ff873"
  },
  {
    "url": "tag/java/page/2/index.html",
    "revision": "8bf57155d79b5f81a246308524a76433"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "ee2881fb580e3aad2996339ec6195a54"
  },
  {
    "url": "tag/linux/page/2/index.html",
    "revision": "93010f55820fa74b7f3459a1f4c8114a"
  },
  {
    "url": "tag/macos/index.html",
    "revision": "ec5172b2b04d86a982afd2b077988213"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "88111cb9c282cff9881e8dbdff5e6f07"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "dd9cc5d4eb4b19e77ac8ef6f40ed1c2c"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "3603d9adf69a3124cb68843bd69237df"
  },
  {
    "url": "tag/mq/index.html",
    "revision": "cceae07e1879f82e7856d4cfcd9c4fbf"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "bbc512f00acb5188619bc63a8d26eda1"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "a95026d036bab10e24f71ad097251fb5"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "e4b6a094d05984194ff9a41804464436"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "334cece478c7a363c5602dabe40e3113"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "b77b03c77ad26fe240db25b4df40b13e"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "0015b1e4f4bde6440f5fc0d81423bbda"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "f1e4579484a1eaf4713a7cb20acf3f44"
  },
  {
    "url": "tag/other/index.html",
    "revision": "e2fe7a5e372efb2b7778180a31d11511"
  },
  {
    "url": "tag/python/index.html",
    "revision": "9ad016c26df03cc7911ea04dc3401d71"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "5e69f72fe68ca86f9774dc5a746b96c8"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "b494d9887d71063c83ab78cb19db8ada"
  },
  {
    "url": "tag/router/index.html",
    "revision": "6c251f1df3fe9384b1353ad57bb1e0b3"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "f6af11558e31db35835a6b70a92b4eb5"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "691dd6fd9545f6e7ade904c55f811bc1"
  },
  {
    "url": "tag/termux/index.html",
    "revision": "2c78c580567f89cc8772b1f785ad4924"
  },
  {
    "url": "tag/trojan/index.html",
    "revision": "6e9b2da9e51b04ac987ff2cd108eb73a"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "0fc84d578de01544e271d38fe95460f1"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "9ed1ba2125052f949a616a6967212606"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "380b5566f19ae2b13d97e8863ad10940"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "76c50ce93c605fe10d2f245a339bfb4b"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "4d98c957b75f863d11314f5f2f65fd9f"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "a8725bd99b2a7c4e3774ad3d7c8f3200"
  },
  {
    "url": "timeline/index.html",
    "revision": "46b909dd25ea22c34ebd5c8b847cb53f"
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
