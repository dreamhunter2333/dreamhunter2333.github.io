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
    "revision": "ae6d5e733377563fb8e35d639c503ebb"
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
    "url": "assets/js/100.1ff18453.js",
    "revision": "7363af1cc20d0cfcec521a38b3921bf0"
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
    "url": "assets/js/119.65ec2964.js",
    "revision": "0c23d1d4b5485309d14eeef3c02779e0"
  },
  {
    "url": "assets/js/12.c691e6cf.js",
    "revision": "7015afecafe051b4d40b980ecd131193"
  },
  {
    "url": "assets/js/120.a112a36b.js",
    "revision": "7fc1ab4f7791d8568a97d18d4e7edadf"
  },
  {
    "url": "assets/js/121.04a24eac.js",
    "revision": "ebb02f369a8e4c43f86c33b471567823"
  },
  {
    "url": "assets/js/122.478179ba.js",
    "revision": "431cf60800035f9a5c44871184f58097"
  },
  {
    "url": "assets/js/123.e6e3df4b.js",
    "revision": "7a5bc3ed71a5ea4653c0f2eae99af4a0"
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
    "url": "assets/js/127.8fd29863.js",
    "revision": "6aa9c477bf3adc74b585f517aa3f8ebc"
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
    "url": "assets/js/34.0c26d369.js",
    "revision": "0568607cd2101351203e82f9b1fcedcd"
  },
  {
    "url": "assets/js/35.0821b391.js",
    "revision": "217dc8f70214525cc856d6068a4c3646"
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
    "url": "assets/js/68.1415c393.js",
    "revision": "b1ff6143653fdec586e921eea6a0e229"
  },
  {
    "url": "assets/js/69.b5d16c01.js",
    "revision": "ebd92e38fe8e0f79efd128579f84f034"
  },
  {
    "url": "assets/js/7.0fcc2e4a.js",
    "revision": "4994834e705498b4852db4397e494f5b"
  },
  {
    "url": "assets/js/70.7bb8b8cb.js",
    "revision": "8090c0bc92fe84e761f9192a680acca6"
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
    "url": "assets/js/9.d5e6b4ed.js",
    "revision": "dc9bac12f067bb2742ab48672405a9de"
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
    "url": "assets/js/99.08f177fe.js",
    "revision": "b1f20f94681e0144c41762a1b759ea57"
  },
  {
    "url": "assets/js/app.ecce748f.js",
    "revision": "941b0f400317f672892c0ad6878f5a9b"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/algorithm/index.html",
    "revision": "bec999dde56697cbb5d0d1851398c462"
  },
  {
    "url": "categories/database/index.html",
    "revision": "e12990d27be73218bad29afb0c67e2e2"
  },
  {
    "url": "categories/devops/index.html",
    "revision": "1a2517258f441faba88c445aaf3f501c"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "7b415261560e9f54f90f14762435b449"
  },
  {
    "url": "categories/front/index.html",
    "revision": "f899502a3b8238e1bca1784afe17c61e"
  },
  {
    "url": "categories/git/index.html",
    "revision": "49917b69700b38858c6433aa9dc07f94"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "87091ff98de8aadefe126131aad067de"
  },
  {
    "url": "categories/http/index.html",
    "revision": "722191b21b20abc5431981c1c4a97d0a"
  },
  {
    "url": "categories/index.html",
    "revision": "1b9f566e7fca8d6264075be4aac50caf"
  },
  {
    "url": "categories/java/index.html",
    "revision": "faed081341733e9b49ad4dd9c9f75491"
  },
  {
    "url": "categories/java/page/2/index.html",
    "revision": "fa94dbc1d3221160b287576f42908845"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "244ea9e0dd64b38fc573f79b8d0a911a"
  },
  {
    "url": "categories/linux/page/2/index.html",
    "revision": "70d08a04034734e2e942bc423d332c3f"
  },
  {
    "url": "categories/macos/index.html",
    "revision": "79562f39d21aa7fc02a0757df4ee5f16"
  },
  {
    "url": "categories/mq/index.html",
    "revision": "a031fe8355740b0214b5ea3e6acd4dd8"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "ce8f25bfa11cf645eccfdac22ffed35c"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "808191ad0959d84d3fd20705b8379e91"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "4caf41f0a84de87c51f6576622266a29"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "f45605a45dbe34f38918197d774e7b69"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "d56ca1d64c5b8fe24330762b5c5f0fd6"
  },
  {
    "url": "categories/other/index.html",
    "revision": "fbf33833e09235d7e3f56d19e69c34de"
  },
  {
    "url": "categories/python/index.html",
    "revision": "3c60b45803be3f80a987161e2e2bc832"
  },
  {
    "url": "categories/python/page/2/index.html",
    "revision": "5b0c9347c2f2ed86d49097581a15e4c9"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "11f7bf658b6b15b4bb8072799cb5a7fc"
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
    "revision": "90d4304b7da77f8e06954b7c37d42960"
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
    "revision": "b52f150cd9954f9ed21ea0af42b6ee46"
  },
  {
    "url": "posts/database/SQL-constraints.html",
    "revision": "e3ed3207c84304a316a80eab85e1e138"
  },
  {
    "url": "posts/database/SQL-keyword-order.html",
    "revision": "d7fa8139faea2f945fffb05daf955a41"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "afcae6c85fe9feb54de2d7825bb68459"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "97b9f14f3d1e9f814a7fc84373c8a6eb"
  },
  {
    "url": "posts/database/why-redis-fast.html",
    "revision": "8d2f0a886f215f9d8b57220eaa988497"
  },
  {
    "url": "posts/devops/ansible-deploy-docker-compose-service.html",
    "revision": "69d6b8f5dbe3be7b80836faa696ee6cc"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "2f98125e546f1b5131e1767196ef2450"
  },
  {
    "url": "posts/docker/docker-host.html",
    "revision": "59fefa4ef2734df97dc7fd58ae382c10"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "591c7af061ad64fa9690a3601ae5fb29"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "7b01fb49e4b5cbeecd995aff3fcad1bc"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "2ee40944b4d775332c6e4dc6e9ed1021"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "98795c27134d9fff81df7c6b4a50bbef"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "092ec7a93f22db178fda2ee4bc832956"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "0628eda15d66b1778460770656680386"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "4839a04bc3e0ef8d5e1ee90997202cc0"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "f93f69ac7f9aa4a1baf03d4eca0eba15"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "092be17b704e67c47bfa7293dd974742"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "a84b7e1c9c1ee8b37b6aaf16a1a44344"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "fad5bcab955b0624318a69a4fe4473e6"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "09d4cdcf95d78dda7fc1d257a8f575d6"
  },
  {
    "url": "posts/git/use-multi-access-token.html",
    "revision": "1ad872ef8a618e6d35f634c2811a673f"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "c7f149a7fcec5c4869a6fc2405796378"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "b2f8bf3609ee26232b61b66542219989"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "d6484ea5812065892e5370bfd32173e7"
  },
  {
    "url": "posts/http/https-shakehand.html",
    "revision": "82c1853d309f302d56200747245e7b53"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "0954943a2421ba9a9524ba4bd710f167"
  },
  {
    "url": "posts/java/java-http-proxy.html",
    "revision": "a33df81db4e33229572fd452881083fc"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "d531c416d8f5876b76da1aa430e2068e"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "3120c6ca3b53ae02e98f82852a632e2d"
  },
  {
    "url": "posts/java/java-spring-MyBatis-Annotation.html",
    "revision": "9a41e956dbfd67f9766c11c3bb50a37d"
  },
  {
    "url": "posts/java/java-Tetris.html",
    "revision": "682072f6f792101b8c6143bf161e4677"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "25f9d1e499a44bba87d815932aa9898b"
  },
  {
    "url": "posts/java/spring-RedisTemplate.html",
    "revision": "d21da6d31b315fde898fd8d102b0e6d7"
  },
  {
    "url": "posts/java/springboot-disable-autoconfig.html",
    "revision": "29bc2175d0b398cabebf75fdb116ae5f"
  },
  {
    "url": "posts/java/springboot-schedule-task.html",
    "revision": "57b497507c4d81c7e72e054ad5657970"
  },
  {
    "url": "posts/java/springboot-swagger-ui-custom-config.html",
    "revision": "bf122aec4f98ccb04e3578a9eb6f594c"
  },
  {
    "url": "posts/java/TOTP.html",
    "revision": "0e5ebe8b64a85da601b6d105c1fc86e3"
  },
  {
    "url": "posts/linux/docker-nginx-acme-trojan-go.html",
    "revision": "a36395941a5977ceee91534b8b46b843"
  },
  {
    "url": "posts/linux/install-ubuntu-with-xrdp-in-termux.html",
    "revision": "d02e769429b1dff45a9ee4960dcec12d"
  },
  {
    "url": "posts/linux/linux-chm2html.html",
    "revision": "2b8f739b5608a24e7de786f5f710803d"
  },
  {
    "url": "posts/linux/linux-ecs.html",
    "revision": "d58e484d2287ccaffdbf3ef39536f483"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "fe46253308b6b43ea62bd0f6c9f59a4c"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "cf4ba894258257415268d78baa6cd1f6"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "27addad7f6d7f7636bfd607fb3d7bd42"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "91f742fd6d51a8e756b777ee0345d1aa"
  },
  {
    "url": "posts/linux/ubuntu-switch-sources.html",
    "revision": "28b3a242b47470f72f86ea3623d274b9"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "d3b0935b7177a04261dd43600fe897b3"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "a3120067046e6403fde46c174be1b7b8"
  },
  {
    "url": "posts/linux/wsl2-and-docker-compact-vdisk.html",
    "revision": "b81f883af444e85c8804a6f44d4462c7"
  },
  {
    "url": "posts/linux/wsl2-install.html",
    "revision": "2bba6ebf6b9c5b82df4e37d60de99676"
  },
  {
    "url": "posts/linux/wsl2-use-winip.html",
    "revision": "5c44beae04fc6f515e82db61a844db0b"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "d8001aa1c478216226c0b6813e278a22"
  },
  {
    "url": "posts/macos/android-emulator.html",
    "revision": "fc941cccabb8f70a726078c54be20f62"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "21cd8993868c7aee1a5601237f2b5d27"
  },
  {
    "url": "posts/mq/ensure-not-repeatedly-consumed.html",
    "revision": "245cfe045def448dfc0db2fc94032b44"
  },
  {
    "url": "posts/mq/ensure-order-of-mq.html",
    "revision": "ecf78bbcb9fae8124787240bc7afa574"
  },
  {
    "url": "posts/mq/high-availability-of-mq.html",
    "revision": "bd75e60d0381c3971af2d9d7d6b941b2"
  },
  {
    "url": "posts/mq/mq-problems.html",
    "revision": "d6b3f1693855d0070e6a4114a9a4804d"
  },
  {
    "url": "posts/mq/why-mq.html",
    "revision": "9f819f4ff32fe9d03b293ac73823a9a6"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "c3e9e421f0f6939e16fc6cb6a2fda7c1"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "aa10791e6465a01b5a1dbbfdc471d6e5"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "3ec88da97feec398d9e1bed438fb4a97"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "2bf90c872833d21cb2532fbe676c7b64"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "a0a422903cd8eec177874ae5658c1991"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "29562867be9089b1e8c25fbda2c32372"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "2d1558846250f2fbe91878860f88fe8f"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "3953b8d7db5eb6f047981a59d64376b1"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "9f3c4901311a0829bd8f7e45ced27508"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "a8a5799eef1acff42dfb453a198ee9ff"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "ef1cd9c30a2f0ac8b2e27855df7796b1"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "c090b7da827ad4606eb6f53726dc7069"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "06382208edee12d97c04cfe17895e02a"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "9df3992baca2cc09c46de6b37648ccd9"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "b5da4ec8f7fe6bb023e104c6869826ad"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "456dbb3a675baa740b9ad3739009d450"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "4b704af7ac3b393894189dc291310e73"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "876e3a4ce0984da92aab111fa7252cf5"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "4f209f6bc723ddcf8ae0c474ada5633f"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "a500eb1c8c273434dbb742dd3994997b"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "5950d4e9310bb42ce80f6cfbe087d7a5"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "b8cde8f028a768dbe769bb63d19fb5cd"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "7dcf93ead3112f329d5d412fa5285374"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "f50fdff424063074f86acc9577d879dc"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "b3d589c01941bedf941380da21d43de7"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "1eb59bf2d333e92f16da7a82948a8d6a"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "df8927e601cd06efa67115d251f235cb"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "3258b02cc84fa967cd36cbaef36540e1"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "48e3dd43ce129a65fa1793489a6b9c1c"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "72872870e053cd9d8d3f59bdeb5e153d"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "4ba711c0ce144334806363e260cafb04"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "6f569256d8acc92471910239478d633d"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "a7badc5454e3958b56bd790c65b687ae"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "a8a938d35efe39708d1cd7f6bdfac8a1"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "046d073cd2613df7d922071218bc0054"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "d1c631aa6a06cb07e131d77be5553e52"
  },
  {
    "url": "posts/other/aria2-replace-thunder.html",
    "revision": "635907954308916403ddcb9b9afe6f79"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "bcd6860d3af00c75f3eb7fb153ceb3a1"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "a63e63defabd620b16d9a9e8ef02bdcc"
  },
  {
    "url": "posts/other/iqiyi-danmu-convert.html",
    "revision": "e09eee2558769d70f2ae81737af1b81f"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "4966a7d9f3223959291296f52c9d868d"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "4d1108ade2cbbc0d80314c1fa2f925c7"
  },
  {
    "url": "posts/python/deadlock.html",
    "revision": "597c802ae36ddd94ecfd41eeb6bcc2d0"
  },
  {
    "url": "posts/python/locust.html",
    "revision": "8bcd40fbcf521397a5547c1c4509aede"
  },
  {
    "url": "posts/python/normal-errors.html",
    "revision": "3a017c05644d1d10dbee3a1301d8cd90"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "5feadf19b2ac8e9a98536e82e70de7e2"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "89302305d9fb4fd752336ec051db67d5"
  },
  {
    "url": "posts/python/python-dynamic-import.html",
    "revision": "37c0790486d454fc3bb0313e479d4de7"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "1b11fee9019b78e4415e96cfa661802a"
  },
  {
    "url": "posts/python/python-metaclass.html",
    "revision": "5cc5575c2a794ed6b49c1b135dad2717"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "65f5cc759885486af4ca9cafc323fd97"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "35a3f2eed7f6b97cfe59fef1e4a39c4a"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "44ec8280ff7792a4ea0c03729953c9ce"
  },
  {
    "url": "posts/python/whats-new-in-python3-8.html",
    "revision": "6f5db458e44acc13dc191be9177d0f6a"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "d73c21eb6a746c9372611e425e181fd0"
  },
  {
    "url": "tag/algorithm/index.html",
    "revision": "32f461b71bb8fd15e39689e0ef0bd3be"
  },
  {
    "url": "tag/android/index.html",
    "revision": "ac5dd362d20f285dab6d356c0ea849e6"
  },
  {
    "url": "tag/ansible/index.html",
    "revision": "a6fe0316118676438e617a82e1a00db6"
  },
  {
    "url": "tag/api/index.html",
    "revision": "9c5765a12e4d21176cd282aa9d052edb"
  },
  {
    "url": "tag/aria2/index.html",
    "revision": "a4549ed247e68dbd11519a92b1c571ae"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "4e91fb0a9ee1024e0c5bbef3bd76491a"
  },
  {
    "url": "tag/context/index.html",
    "revision": "1197b4e25d80c82e75abf255dd8a65bd"
  },
  {
    "url": "tag/database/index.html",
    "revision": "7cb01ff2b7a5011f7dd1721b899031dd"
  },
  {
    "url": "tag/devops/index.html",
    "revision": "293cc8f6901186ae598d1c1b2b1b79ab"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "d55930de380cc0af4c09a1ae707835b5"
  },
  {
    "url": "tag/emulator/index.html",
    "revision": "222b1d67441fb7590f574ec1fb7708c7"
  },
  {
    "url": "tag/git/index.html",
    "revision": "7ccd47dd453b5dbbc5a814b7a6f56b15"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "e71e7b86bfc8a9b76a587da27a8aac13"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "4a55ad355901245ea20d7d6630d92695"
  },
  {
    "url": "tag/http/index.html",
    "revision": "e606b3866bc8b476001fd6a3b09ab88b"
  },
  {
    "url": "tag/index.html",
    "revision": "f6833036028641f83f1c737ea94bd36d"
  },
  {
    "url": "tag/java/index.html",
    "revision": "e9a6f493e574f3cf20f76c5fc0d6d75f"
  },
  {
    "url": "tag/java/page/2/index.html",
    "revision": "bda40900ab5d04d8b483038894fb489a"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "38a7597a467e5652935835c6c98793eb"
  },
  {
    "url": "tag/linux/page/2/index.html",
    "revision": "38353f28902916dd0955189a6efa1a81"
  },
  {
    "url": "tag/macos/index.html",
    "revision": "e94dc703bdecc368b63eeb3f53dfeab3"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "70be3b3b1369cee72158cc9f8f858f05"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "557e187cf969551517d7fbab25237f98"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "3f17bccb4408687e2819e8bbd93b6bd2"
  },
  {
    "url": "tag/mq/index.html",
    "revision": "5c499e8dbec2604e8e68ed6ed741589b"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "95036f61fa91f22d2e2bc77db2508698"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "c9c5af3918e31a505ed9ed817695b90a"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "0d7cf8256a3dc63def77bd4ad253f56e"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "90b6d71b759c376ec3ae634b0a45d48a"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "dd55abb388a271c2edca67c3163e350e"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "7b9128612f4249a6b8a768f94edf4721"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "96e3521c657ae2c9be58d65121b42995"
  },
  {
    "url": "tag/other/index.html",
    "revision": "4535ffe30ce5bcd05cb8cc21f4ea278c"
  },
  {
    "url": "tag/python/index.html",
    "revision": "601ca0d781854d0e2a24a689b6d49c56"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "59a7e63798d4d015e3d32f81ebda4344"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "34cab8eac2319d45889cee1aef5a9f1c"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "96fd61868617106e80ae6549789c2938"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "8156177920f5d5cc9e1002dcbc144129"
  },
  {
    "url": "tag/termux/index.html",
    "revision": "923f41aca492c9a1edf5580231252951"
  },
  {
    "url": "tag/trojan/index.html",
    "revision": "396a5334c9551af234fa702cafc35ec5"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "293aff0c0480e6322a44cc09f7fbc6d1"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "19e21c7aa5720c47ef47329743c1f4c9"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "d55e6653522db657f979136e56e7f9d9"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "35c444e63bda457c2a69d038f02704b6"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "7d49e14a33e5e6afab389e61584f1f57"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "7bf5faff5d379eb607a6b52648d78a49"
  },
  {
    "url": "timeline/index.html",
    "revision": "3596b98c7facf8a0327615a8327f9764"
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
