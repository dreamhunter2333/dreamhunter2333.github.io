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
    "revision": "2f0a1845ea23b1b102545e1424acf0fb"
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
    "url": "assets/js/100.851bd2b3.js",
    "revision": "7af4eb8b1806bef4cbca30c79b46c147"
  },
  {
    "url": "assets/js/101.7e92e814.js",
    "revision": "99ade8573e0190fd6163d76a51fcce13"
  },
  {
    "url": "assets/js/102.9390e572.js",
    "revision": "e2dd7210a82f668dc212efabb7a5b4fa"
  },
  {
    "url": "assets/js/103.7252d7e8.js",
    "revision": "83150903c322fa17708271cf754e504b"
  },
  {
    "url": "assets/js/104.88cdf165.js",
    "revision": "991ac80ec07c1c8bdcc69c63678ffbc2"
  },
  {
    "url": "assets/js/105.0e641b25.js",
    "revision": "47ee3d8c473ade42debfa9302c8c4b03"
  },
  {
    "url": "assets/js/106.2289de4c.js",
    "revision": "a9b2c5f28c95e3fdf72e43cc5a175820"
  },
  {
    "url": "assets/js/107.64e3d8a3.js",
    "revision": "ccc39b07de063ce4e879f552efb91cb0"
  },
  {
    "url": "assets/js/108.1ccf8caa.js",
    "revision": "4ba2467ee863e2488c7eb8b3a95e4497"
  },
  {
    "url": "assets/js/109.7c34ffd8.js",
    "revision": "bb5af86cf5e512015c236fea46e7ffbf"
  },
  {
    "url": "assets/js/11.c0b2bc5f.js",
    "revision": "f32247fc9fbbed5dd5930c74ed80fd91"
  },
  {
    "url": "assets/js/110.9ca66b20.js",
    "revision": "8886a115c327862fe031b47b3794e30f"
  },
  {
    "url": "assets/js/111.e0a17cf3.js",
    "revision": "5415e4979b0183f3816c2e48299bc9c9"
  },
  {
    "url": "assets/js/112.4168baf2.js",
    "revision": "850f36a340a09457fa8a9c10fc31b1c1"
  },
  {
    "url": "assets/js/113.de267a41.js",
    "revision": "307660e679a67d0b45dc7bf0baa40bda"
  },
  {
    "url": "assets/js/114.ef080061.js",
    "revision": "78fb74f243c720facd26a73e14c93dd2"
  },
  {
    "url": "assets/js/115.2660ab02.js",
    "revision": "8971b0e7b015386ca790d006ef239423"
  },
  {
    "url": "assets/js/116.4f5d32c7.js",
    "revision": "f657d1d0afcd8db72802aa8678574ce1"
  },
  {
    "url": "assets/js/117.c5bb9231.js",
    "revision": "351c5a33635ee50357037ae9f1f1f387"
  },
  {
    "url": "assets/js/118.5c0275f2.js",
    "revision": "ebd5f384dc72e79742c9c0ac81eb33a1"
  },
  {
    "url": "assets/js/119.ed341b71.js",
    "revision": "71837d892483c75b2bcfdc1b3abcc49a"
  },
  {
    "url": "assets/js/12.c691e6cf.js",
    "revision": "7015afecafe051b4d40b980ecd131193"
  },
  {
    "url": "assets/js/120.10e743c7.js",
    "revision": "a6a897ce7d395cea1a4104abbdd25b95"
  },
  {
    "url": "assets/js/121.6d4ffa1b.js",
    "revision": "71f26b37906ccd3e51c4da79d21c00ba"
  },
  {
    "url": "assets/js/122.8e3a3022.js",
    "revision": "b3b9ea905c335b984f285a998fe46b78"
  },
  {
    "url": "assets/js/123.5531cc9b.js",
    "revision": "06550f7d640ec3d7a8c03dce32849083"
  },
  {
    "url": "assets/js/124.dedff19f.js",
    "revision": "fd5afa886ecec7580f6494d206f20347"
  },
  {
    "url": "assets/js/125.3eff6443.js",
    "revision": "22fa9ebed98eb6d333b120904fe0b39f"
  },
  {
    "url": "assets/js/126.08036392.js",
    "revision": "f7a05dff76aa0dbd9ab9fa45ef7cceab"
  },
  {
    "url": "assets/js/127.05a709da.js",
    "revision": "502fb52981c5f3af13cfd5694bbaeccf"
  },
  {
    "url": "assets/js/128.9aa18eea.js",
    "revision": "1bf4ff076d29113461f6542e556134ac"
  },
  {
    "url": "assets/js/129.5c3db1c2.js",
    "revision": "741050fe001c105f50f43e622bf8801b"
  },
  {
    "url": "assets/js/13.4d4f4941.js",
    "revision": "e9586d3de5257b29a087062aa9f7fb45"
  },
  {
    "url": "assets/js/130.2421be23.js",
    "revision": "638177ad4b3e074a61125c0a4ecee48a"
  },
  {
    "url": "assets/js/131.e27a63f5.js",
    "revision": "1e1fea430bb9901975542a108e5f95ef"
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
    "url": "assets/js/23.8ffb17d4.js",
    "revision": "f0b7dec5223ef0eae66ae9f014035bf8"
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
    "url": "assets/js/34.37aa8acd.js",
    "revision": "a79a3618de56f0476af7fe9fe9d4976c"
  },
  {
    "url": "assets/js/35.e89ba305.js",
    "revision": "c0bbb5a8f85d122de5f20173e7210f20"
  },
  {
    "url": "assets/js/36.f7c7e7e5.js",
    "revision": "54bb8b89f43337b411409c23587daf83"
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
    "url": "assets/js/42.03c1ad9a.js",
    "revision": "7f90fd813cccfd57350162d021ae8b8d"
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
    "url": "assets/js/50.500a3c9f.js",
    "revision": "52a1f339011f07c8bef41fcf81825023"
  },
  {
    "url": "assets/js/51.dfb5b7ca.js",
    "revision": "dd7f8885042220cfc5f6744e1c48a413"
  },
  {
    "url": "assets/js/52.85de18ca.js",
    "revision": "ffdf625f7b7c93db690170a4555a18b9"
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
    "url": "assets/js/56.92cb96c8.js",
    "revision": "820d286afdca4ec3a9c8912091051e5a"
  },
  {
    "url": "assets/js/57.d861768f.js",
    "revision": "a5a5e7396775a5a3b0e61d635735a5f3"
  },
  {
    "url": "assets/js/58.67945fb1.js",
    "revision": "2e4054e29515796a220492245078c61e"
  },
  {
    "url": "assets/js/59.f5a7fcca.js",
    "revision": "fb8f514c7829a604fa64136954c91317"
  },
  {
    "url": "assets/js/6.3fa44e2d.js",
    "revision": "5114c382c576f1d774222983c971352d"
  },
  {
    "url": "assets/js/60.cf2430ef.js",
    "revision": "595e87143b17f6697941a4f607082fa9"
  },
  {
    "url": "assets/js/61.6b7e0b49.js",
    "revision": "d82a3a31bedacad49eb241b8897312a5"
  },
  {
    "url": "assets/js/62.2b6dfc4f.js",
    "revision": "1bd09fdecb82ecf583943c742643770e"
  },
  {
    "url": "assets/js/63.3abe8a92.js",
    "revision": "cf53dbcc2734368ddb2a99fd0a4ae114"
  },
  {
    "url": "assets/js/64.11888feb.js",
    "revision": "8a10532b803bb83894cf103d5a604ae9"
  },
  {
    "url": "assets/js/65.6083c299.js",
    "revision": "68d4e88c12acd358d524bfcfb50362a6"
  },
  {
    "url": "assets/js/66.6a1e67af.js",
    "revision": "b322003f4d44ab5e23345d72d96c2dbf"
  },
  {
    "url": "assets/js/67.494e1836.js",
    "revision": "50d1573564a4ce15dc66101b5b4483c3"
  },
  {
    "url": "assets/js/68.b91e00a2.js",
    "revision": "29d98955886a71c9f4f551d8c559a9db"
  },
  {
    "url": "assets/js/69.08b2a621.js",
    "revision": "b8e340e4cdb5184684fbd357de7861c7"
  },
  {
    "url": "assets/js/7.0fcc2e4a.js",
    "revision": "4994834e705498b4852db4397e494f5b"
  },
  {
    "url": "assets/js/70.12887959.js",
    "revision": "dbdfee2b31cece8205c76cf08acdab5a"
  },
  {
    "url": "assets/js/71.183dbf6c.js",
    "revision": "962c044983ee39bd42f5bd5e8b129cc6"
  },
  {
    "url": "assets/js/72.3c6844f5.js",
    "revision": "11b0060595edd8f81aa790d974fa7067"
  },
  {
    "url": "assets/js/73.01457690.js",
    "revision": "4d20e12e6f271521e08d0d30bff5d981"
  },
  {
    "url": "assets/js/74.4a6f687e.js",
    "revision": "4ea8363cbd5cc164e55583546d6f079d"
  },
  {
    "url": "assets/js/75.c5041a9e.js",
    "revision": "8db043ae226ef788faa6dee8c7d81463"
  },
  {
    "url": "assets/js/76.79253c71.js",
    "revision": "be5a258a1adc72412d2aecaf99b37372"
  },
  {
    "url": "assets/js/77.dffa5a80.js",
    "revision": "f70cfcd94589d050f890687ae60578be"
  },
  {
    "url": "assets/js/78.3c593cdf.js",
    "revision": "bb9ddc128761144369668ed70d1081c6"
  },
  {
    "url": "assets/js/79.ce8da5fc.js",
    "revision": "e66ed3ab703de95f888fc5595d2553d7"
  },
  {
    "url": "assets/js/8.874f0770.js",
    "revision": "008bc156e12e0641cead84f45c87abd1"
  },
  {
    "url": "assets/js/80.e1994473.js",
    "revision": "2ee4e317caf2851e5e0efd1f5e556a30"
  },
  {
    "url": "assets/js/81.a6307a58.js",
    "revision": "0ae98b0ed8b5f03e676139a96666c51c"
  },
  {
    "url": "assets/js/82.189914fe.js",
    "revision": "1376f9a20a9af30a82683b8255fe80e8"
  },
  {
    "url": "assets/js/83.bcf85210.js",
    "revision": "eaf562854a33656d91a2b526a41e38d5"
  },
  {
    "url": "assets/js/84.0aba5820.js",
    "revision": "209b4a4d946d69a9a2e815e8d60019ae"
  },
  {
    "url": "assets/js/85.cac2e34a.js",
    "revision": "f58b303c8c1a67fb5f3ac9d17659f4e6"
  },
  {
    "url": "assets/js/86.a21eaf78.js",
    "revision": "00930b91546a3ac36bd5906f74178c32"
  },
  {
    "url": "assets/js/87.a367c773.js",
    "revision": "209f05fb746e11e57a15ae00e3b4734e"
  },
  {
    "url": "assets/js/88.8dbba3c8.js",
    "revision": "5babaa0670f0712721638fd3bcd26bd6"
  },
  {
    "url": "assets/js/89.ede923ee.js",
    "revision": "00276d86491aa56cfd1bcc69f78e5ccc"
  },
  {
    "url": "assets/js/9.a098d279.js",
    "revision": "f943052b70a79e6d52d9cb228b30e9b4"
  },
  {
    "url": "assets/js/90.91a14345.js",
    "revision": "c3a6800c9af5c9520d165e1d38d91bce"
  },
  {
    "url": "assets/js/91.2fcd6fea.js",
    "revision": "e95fd4a38b95103db4667bfea627c0c0"
  },
  {
    "url": "assets/js/92.9587f68c.js",
    "revision": "a3d552411d4a50219be12d5a31e6b2d3"
  },
  {
    "url": "assets/js/93.1f2b92c3.js",
    "revision": "56a008119d456e2e33b65c0732a7bcfa"
  },
  {
    "url": "assets/js/94.75e2022b.js",
    "revision": "9710c17345e1d5f9164a135b4f0945a5"
  },
  {
    "url": "assets/js/95.e7931af1.js",
    "revision": "4657260b3e18e7f3f30c833d93a46176"
  },
  {
    "url": "assets/js/96.099cb878.js",
    "revision": "8d78612fe0971337890b6f77d2344cf0"
  },
  {
    "url": "assets/js/97.6a4fb30c.js",
    "revision": "2878a4046821147c577dcac671f1e798"
  },
  {
    "url": "assets/js/98.87915470.js",
    "revision": "500dfa2b69c491027356212d47af65f9"
  },
  {
    "url": "assets/js/99.3a60ecb6.js",
    "revision": "5fdc8b9b25cd52233907a87862072455"
  },
  {
    "url": "assets/js/app.c8453ddc.js",
    "revision": "e81569759a9165e0e44a9152beadd2e9"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/algorithm/index.html",
    "revision": "ebb5c2d95fdb90d8d97d961a3f2b251d"
  },
  {
    "url": "categories/database/index.html",
    "revision": "25bbd98b965330fcb47fc486943a6f19"
  },
  {
    "url": "categories/devops/index.html",
    "revision": "aec810f150cce216d181d7d8fca7f4b4"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "42625ac0edb4c976d61f7c4219eda1a8"
  },
  {
    "url": "categories/front/index.html",
    "revision": "85c0e1f12fbc931d9eaf829d7875ea1c"
  },
  {
    "url": "categories/git/index.html",
    "revision": "c42882ec02219f51cfe7bcc43d7121aa"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "eef07ad0fe51baa9fa91c024b425b4df"
  },
  {
    "url": "categories/http/index.html",
    "revision": "612de3273447894b42bbd69ed6edab8c"
  },
  {
    "url": "categories/index.html",
    "revision": "d5ede797cc47f6a6c34c5514194de175"
  },
  {
    "url": "categories/java/index.html",
    "revision": "219050c09bf27fd74ed45ed32b39499a"
  },
  {
    "url": "categories/java/page/2/index.html",
    "revision": "9760fcac29ae3f1d81f9a24ea809dfc6"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "5ab428511e21bfdf6752cfaebf46f5ed"
  },
  {
    "url": "categories/linux/page/2/index.html",
    "revision": "25cc219b4ae77c4b238a05f045a4ee45"
  },
  {
    "url": "categories/macos/index.html",
    "revision": "d199d7c8a5da64f24b835d9266a2f712"
  },
  {
    "url": "categories/mq/index.html",
    "revision": "ae0595c1c5758cf950338af7208fbb4e"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "370ce760a3028b6fca167446c43e4b75"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "944e41ceb691ed4890898b7f4d2e353c"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "e158e5cf728eef7b027e26584b6ca1d6"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "ea5f4fb876088999c2d5173a6c97e12a"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "354d43799cdc22f255e1f83fa195de4e"
  },
  {
    "url": "categories/other/index.html",
    "revision": "8ad882f633898fba159313b01b91af4c"
  },
  {
    "url": "categories/python/index.html",
    "revision": "493a3999b6bfc0b374caf5e468a0bda5"
  },
  {
    "url": "categories/python/page/2/index.html",
    "revision": "b915eca65b1709fb6da23b7d31ddee31"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "f8a264917d81ca3197a8efd5d208c2d3"
  },
  {
    "url": "categories/router/index.html",
    "revision": "80a27cebc1193d3b0ee3583f12dd0c8f"
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
    "url": "imgs/avatar.png",
    "revision": "6ee414c773d5b8573f4e06796192e955"
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
    "revision": "c9490f260917d4c2650ffd73532c64b5"
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
    "revision": "6b26592daa5110a119fdb87620e49e2a"
  },
  {
    "url": "posts/database/SQL-constraints.html",
    "revision": "319f36269ed09109940d3286458d2b09"
  },
  {
    "url": "posts/database/SQL-keyword-order.html",
    "revision": "e892699e4027c0ccdee2e133449ae4a6"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "dbb758134e583d616ccb21e455022616"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "9899529608b6b63afb914f15eda7797b"
  },
  {
    "url": "posts/database/why-redis-fast.html",
    "revision": "a4beefb0f6b4d266e636a170a8888b00"
  },
  {
    "url": "posts/devops/ansible-deploy-docker-compose-service.html",
    "revision": "29071212601decc4c9c8f25e07182e07"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "03607377ccfd1fac27ab81a9917d7ae1"
  },
  {
    "url": "posts/docker/docker-host.html",
    "revision": "51e642c0c0f0ef35263ad91c89c3cb90"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "a04002a348b3c736448e47169240e2cd"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "c1aa60b23eb6defa13c9d0f9a6077192"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "455e6f6f0b2510e6c4ff57f62a1d6ba8"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "358c59a7d9cb5077ca90625b5bdf0d56"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "3ed646403438233b0487763fb7c262a3"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "eb69ba8fff047b3f4d79256374160efa"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "0a695548981d4761ef760c9425d159f4"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "162543850d05d5132d8fa3a989e4d950"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "83c0154c20f11193c3d20fd40c6ddc12"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "b6b4d9b6836e775b3648f16541ba6e96"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "ef9710cecea17e564ea6b36312616f55"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "13ef0e4326007868f7d13ef6d5692252"
  },
  {
    "url": "posts/git/use-multi-access-token.html",
    "revision": "c25834bdae854fcdc37dc67fa3e9c9ed"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "1f7efea5636819defcda0b0868c87cc7"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "24841bcc831e7dcf0bfe2baf6c3ca57a"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "3c8fd43be11a198fcdb7bfd4798b4a35"
  },
  {
    "url": "posts/http/https-shakehand.html",
    "revision": "a6d731d16ff2c369a8a58f46839ea751"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "72f49aad6d5a6ecb15f2ad173096933c"
  },
  {
    "url": "posts/java/java-http-proxy.html",
    "revision": "c5b5e74ee65de64781b511f96f71021e"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "d04f4aca5b5b474839979dedeb207302"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "637b0fe9f21ca7fec3c13e096235facb"
  },
  {
    "url": "posts/java/java-spring-MyBatis-Annotation.html",
    "revision": "d9afcdddaf6a112a56251aee1037302c"
  },
  {
    "url": "posts/java/java-Tetris.html",
    "revision": "bc7f537c4f0260974f9bd74bcac76aa1"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "7bfcc813a29818048e920761d34f88d6"
  },
  {
    "url": "posts/java/spring-RedisTemplate.html",
    "revision": "de8b2174333eaf3c74e8730d87115cbc"
  },
  {
    "url": "posts/java/springboot-disable-autoconfig.html",
    "revision": "e9faf84b27c512b5fed0eeeef22470fa"
  },
  {
    "url": "posts/java/springboot-schedule-task.html",
    "revision": "96e886bfef8b7a64972797261794ceb7"
  },
  {
    "url": "posts/java/springboot-swagger-ui-custom-config.html",
    "revision": "8512262233bdc0bac8b3c677d0aacdc3"
  },
  {
    "url": "posts/java/TOTP.html",
    "revision": "65013baaebb6b541349e1c7a397fbf55"
  },
  {
    "url": "posts/linux/docker-nginx-acme-trojan-go.html",
    "revision": "2fc6607ceb8f325c766e3d5fe6f618ac"
  },
  {
    "url": "posts/linux/install-ubuntu-with-xrdp-in-termux.html",
    "revision": "0a019623021b2bc5b81f4f46bd13cdb3"
  },
  {
    "url": "posts/linux/linux-chm2html.html",
    "revision": "d890a3691ac3eca01ca65af11f571725"
  },
  {
    "url": "posts/linux/linux-ecs.html",
    "revision": "9b8e0ca0bd2b866ee7d050b89ed7c1ea"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "2eec29498aca236b0a042e88011f9449"
  },
  {
    "url": "posts/linux/mkcert.html",
    "revision": "66b4cd95733471cb0d827a43ae96757f"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "41e862c40e6150df67c1d63d576e19de"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "112f90c7a7b27879e98ecbe243ef83db"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "795fee96ba973d6ee1410cf1ee74f8d7"
  },
  {
    "url": "posts/linux/ubuntu-switch-sources.html",
    "revision": "7602bb2f107a8822e268c61344001827"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "714f4c99d2d189e7a627efc9b02891e3"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "2bcd31184cd365fe97a734dff8e18d37"
  },
  {
    "url": "posts/linux/wsl2-and-docker-compact-vdisk.html",
    "revision": "ab16aa742815ce84dbdd70b6600db180"
  },
  {
    "url": "posts/linux/wsl2-install.html",
    "revision": "9df5df526335a850f28cc5b399823f5f"
  },
  {
    "url": "posts/linux/wsl2-use-winip.html",
    "revision": "1e996bc419d940eb94f181a8d1575a04"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "c6a8a56ea1f2c51608bce57680feb6be"
  },
  {
    "url": "posts/macos/android-emulator.html",
    "revision": "4d70a4e61231f5c16fadf959e9a314e4"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "7e5a6e51fe904e22197f08804eddf27c"
  },
  {
    "url": "posts/mq/ensure-not-repeatedly-consumed.html",
    "revision": "77ccfd6c1791bc6e024ab8afdbc8591e"
  },
  {
    "url": "posts/mq/ensure-order-of-mq.html",
    "revision": "5b191cab8b646dd5f6217ccf4ccb4af4"
  },
  {
    "url": "posts/mq/high-availability-of-mq.html",
    "revision": "8d43cb464f0f06e3c8e0f77d47492967"
  },
  {
    "url": "posts/mq/mq-problems.html",
    "revision": "c253e5b9d0cd7c1c95df90e62f94017e"
  },
  {
    "url": "posts/mq/why-mq.html",
    "revision": "a7572b85708b694ffa19791739084900"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "5f2e22309c7eb6892ed4bcc5b630ce18"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "59325d53f38d167c2a314327835f5339"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "71235b02a94665b310336a9639389600"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "f5de4e34c7e256b8a0bed44abd190075"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "c82f89748f314a9c5562dac58f0d1acb"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "206c516f812814713e4dccba09ba67a7"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "b38cce3e4c4831af9e9294b2817eb23a"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "f921c277b1f5dd7843303ec0814948f7"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "4cf0b79353eb709595ece134f6f12b0a"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "391fb2da9588299a4257a0eff38c3f69"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "1f3a12fb7af78fc1454b6baff4b60296"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "ba78334e4fdd2081d145605235bb0d88"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "c47ba0d8314b8202dad0edeacc94e97c"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "d6366f7ba84cb2fc1750db38a286155f"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "2156005c9462173e51916daf9f91c138"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "d27f82c8da3e9d5cb2cd666cc0a2466e"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "eb11c2aaf7cfa5b8140dabcc9de6a2d4"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "e0f9229596e177161e181bd0d898d6af"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "2b00aa1b80de2f87285c88730ad895b2"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "f333fd386ae4f27690c2e79217329221"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "784cf4f1e950353c02c087e48ba41191"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "8e4be1f4be25562714a71fa6f4c27cfc"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "d207aab3058fe129b9dd26527ab7a04d"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "61d4280aed2d21ae5c588d1fc551f70c"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "7b2449cef73fd73e01d6c37761731573"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "5bb9b7b41507e5f472d0b70e63784308"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "e60a8c8914086ac4e4978721e226074b"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "36e683100cff2ae1ae905b21c349d564"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "c7a3cf2460e7c86f7cdec86e0d0d17f9"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "6b132e4799b0a00324a02f51350f983d"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "f6efc4cec0a33ddaa63b63404225be6b"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "393d4a3458a5db2939b894326184f392"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "99202191c376949db773d32eb09b33a3"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "2117ed0444789073c981e54298ffe363"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "d483dc8cfee4caaa884217b94dd55c42"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "3d8cc92f76b2dfad76a00ce4f3145b2c"
  },
  {
    "url": "posts/other/aria2-replace-thunder.html",
    "revision": "6642d718d71160dceacf62514ae99b12"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "769b9a7ab98f5527f12e375bda192ccd"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "ff1d6b4c9bcc536a1249d946f1c04ff5"
  },
  {
    "url": "posts/other/iqiyi-danmu-convert.html",
    "revision": "e20be2a11f5ffd3e504c29b12ff89f39"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "47a3dfc52b528701706f1b284d77150f"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "31ab5ff7fd4e91e49d35fd98e6c310e3"
  },
  {
    "url": "posts/python/deadlock.html",
    "revision": "fc3db30091455e04ab5c2fea3085e5ac"
  },
  {
    "url": "posts/python/locust.html",
    "revision": "41aab293af3368109921d42cfa75e915"
  },
  {
    "url": "posts/python/normal-errors.html",
    "revision": "e4e5c66b5a25b59666f02d88d9749f87"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "7d33fb91d0dbef81ac57e0c91779038c"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "0d4c66ac3a5b31f63559084fe472e615"
  },
  {
    "url": "posts/python/python-dynamic-import.html",
    "revision": "d09276ba55081861cecd1d9ffd60ce09"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "1087d782a995398d922416ada5034eb5"
  },
  {
    "url": "posts/python/python-metaclass.html",
    "revision": "488d24ce633f180ddabc9a50812f5687"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "ef51434b875f493c377d1e16d3112d49"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "5e4cb25bbd5874677bd930a24b19f314"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "37986efe073126ea8b299064b77d6950"
  },
  {
    "url": "posts/python/whats-new-in-python3-8.html",
    "revision": "238aee10df8466f1fb99e6b39d256b40"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "0e8193f70f53cce73d3cb4ff736a0d89"
  },
  {
    "url": "posts/router/iwpriv-DisConnectSta.html",
    "revision": "5f2398ca06d58809c3978832734dbee6"
  },
  {
    "url": "posts/router/set-dmz-and-UPnP.html",
    "revision": "9d098c07b3b9722a729b9d846e205d4e"
  },
  {
    "url": "posts/router/wake-on-lan.html",
    "revision": "784827a733bf8453ba79d56610ae9638"
  },
  {
    "url": "tag/algorithm/index.html",
    "revision": "eb86b7aa0eb5acc0bcbf4b999d69999e"
  },
  {
    "url": "tag/android/index.html",
    "revision": "ddf911b7d8142b50934faceb4613a7cf"
  },
  {
    "url": "tag/ansible/index.html",
    "revision": "b8a8a33b0b4bb7eca767b76cccc7e592"
  },
  {
    "url": "tag/api/index.html",
    "revision": "2d1f8dc51f1751f11511754c8bee7332"
  },
  {
    "url": "tag/aria2/index.html",
    "revision": "bb5894df1a3f4bae259e712cf7c1c651"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "ba866fa0e231582b8769f421d3ca36f3"
  },
  {
    "url": "tag/context/index.html",
    "revision": "f0d7828ee142a19b546c24646953a35c"
  },
  {
    "url": "tag/database/index.html",
    "revision": "4436d1a23a7281b767f007cd3a735110"
  },
  {
    "url": "tag/devops/index.html",
    "revision": "0c967edeec434b1fe206bf7164187a01"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "d7d06b170d278e8310d32c638b906769"
  },
  {
    "url": "tag/emulator/index.html",
    "revision": "f21ce15a67edeaf2c0c4b2192fc9dd78"
  },
  {
    "url": "tag/git/index.html",
    "revision": "a658f0729a07a8e02fd9e48c53edcf42"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "ce20d224fbee61065cdad3ffe8a5feb4"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "c30ee758dcc5d87b1ef07ec95e0465dd"
  },
  {
    "url": "tag/http/index.html",
    "revision": "35866d137890cd30b8a1fd8effb3e4e4"
  },
  {
    "url": "tag/index.html",
    "revision": "2058dd97b348eaa70c5ea2c7fd2c06cc"
  },
  {
    "url": "tag/java/index.html",
    "revision": "3eb69457a205cf9fed65b3a078091197"
  },
  {
    "url": "tag/java/page/2/index.html",
    "revision": "9a0aacbf1c8015b1fc07506515bf494a"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "71ec62d6f14aac7943fdce7e53571ca3"
  },
  {
    "url": "tag/linux/page/2/index.html",
    "revision": "2a70e2eb73ed2fa9ef29767a674f1c6b"
  },
  {
    "url": "tag/macos/index.html",
    "revision": "abfe9194eba08ea1b2b927de31e49461"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "d7afa29273c5cfc5cc2d4acf5ac04211"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "19a404a6ac78d1d686b6552e1a2560f0"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "98f9aba28d8d41bdd272591f4566b9da"
  },
  {
    "url": "tag/mq/index.html",
    "revision": "ad212b444fa6cb1b023b12977378c997"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "b192c0934f44768804b33b48ca59de11"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "fd2aa2155a92794bfac5f49e9fad25af"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "cdc13a09010019f5fa640d685258aa37"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "d07252e03fb9843b4dec8885fe5febdc"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "be0ad78c1ddf975d0ec9df5c0505dcd1"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "e7b03e5432f1f73f3dc7972096178140"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "2232b360d74ad7b0e8197dc20026ed1b"
  },
  {
    "url": "tag/other/index.html",
    "revision": "aaeb0376fdc09a53c0ba44ff214baad9"
  },
  {
    "url": "tag/python/index.html",
    "revision": "343361387238fa4edbe041c42da6e89d"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "1c5eddd5e0a4c6c6819eb5363751f57d"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "a69402bec5d5d4231fefc368f0ca440d"
  },
  {
    "url": "tag/router/index.html",
    "revision": "5b04477338d2f4b79dc0c026b2574fef"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "9775f9c6efed49aeb25aa9c4f2b8619c"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "7a0451cf0702065c40102ac02bf938ee"
  },
  {
    "url": "tag/termux/index.html",
    "revision": "0c6c0f9b807af75653b0d6df9352aadc"
  },
  {
    "url": "tag/trojan/index.html",
    "revision": "1fd0305401e129ed9255ec114dbab907"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "13169a153f70e0f021e1b881b66c571d"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "a406f3209058d4670f4958e55445e99b"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "ed14eab0164c32edfa0a9de5adfdfac7"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "e57b3e8efbd1bafaf9cf64c9d68c9af4"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "186990af1cb663efb51dc285076e88aa"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "da35251373182fe92feaa94dff422b4f"
  },
  {
    "url": "timeline/index.html",
    "revision": "dfc96e3c6cd12f80c46f8435f0d73a42"
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
