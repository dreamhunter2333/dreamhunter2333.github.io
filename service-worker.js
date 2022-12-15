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
    "revision": "d8d1006dbb0243b9eeed9834b06bc0d6"
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
    "url": "assets/js/112.26838a46.js",
    "revision": "a6d18c306f3bf1ccb0bdcc801c0687a1"
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
    "url": "assets/js/120.4e2693e8.js",
    "revision": "5eb0cddd0f73de6de89c14dd4cee90df"
  },
  {
    "url": "assets/js/121.0d9379e4.js",
    "revision": "977d1582f63252052ef602b0cbf28e34"
  },
  {
    "url": "assets/js/122.97ccf4fa.js",
    "revision": "d060326d16ad4cdbac5c3d18b73edee0"
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
    "url": "assets/js/app.826451f5.js",
    "revision": "026c331fdc18f0f327368113dec27764"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/algorithm/index.html",
    "revision": "9fbcba46b4accc5dde47cf1af677e78e"
  },
  {
    "url": "categories/database/index.html",
    "revision": "5064d0e0bb7b2862b7c10f2e1a058aff"
  },
  {
    "url": "categories/devops/index.html",
    "revision": "0c63045aafb951f1685fb0e9ca14e19d"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "ac8d6ea3c4805fdf4e726b8b138f2b0f"
  },
  {
    "url": "categories/front/index.html",
    "revision": "b9521debe9ab77b2edf1a243d078af09"
  },
  {
    "url": "categories/git/index.html",
    "revision": "e18a30c73a69bcc6074502ba8fcd8758"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "e881297ab01d7bf5a0223119a5b5c746"
  },
  {
    "url": "categories/http/index.html",
    "revision": "cb6eb779a2a62cf8a72e898f870ec59f"
  },
  {
    "url": "categories/index.html",
    "revision": "6876434edf5f24f66052f972af7c0a62"
  },
  {
    "url": "categories/java/index.html",
    "revision": "41771cdd2bf6c222183c1adb46b0182d"
  },
  {
    "url": "categories/java/page/2/index.html",
    "revision": "a8426b5093c5316f9dc72fa74834a8b9"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "3d843d96f1d0f6b11f5b523916fe8067"
  },
  {
    "url": "categories/linux/page/2/index.html",
    "revision": "5b0810c90d1c0649c76de0485b49e961"
  },
  {
    "url": "categories/macos/index.html",
    "revision": "c64fbe983c33507b2cb7a82155fadd2b"
  },
  {
    "url": "categories/mq/index.html",
    "revision": "f67815a04e39a685f7b9f4920b231da9"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "1c1f03873ecfe6f5098ce3a5624b70cf"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "2cbd3c6567f32fa4d4624a0c8fa11cb5"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "17dc316f3850e2c64eeb0b43f91617da"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "5ef75117378232ebdc1f03b7b9d4ab31"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "fce16aff3d3086f6cde1ff4589e0f950"
  },
  {
    "url": "categories/other/index.html",
    "revision": "87985b32a33fc16eec53ac18bf4a1aeb"
  },
  {
    "url": "categories/python/index.html",
    "revision": "1e1118aba7238a765bbb877ff8dabed6"
  },
  {
    "url": "categories/python/page/2/index.html",
    "revision": "9f8ae11cb1ddd40829092ff37f8d4235"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "2e52830f2d168aecdae770ce376ed964"
  },
  {
    "url": "categories/router/index.html",
    "revision": "85d36f8dd7a37a3139dd9106f3143e87"
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
    "revision": "07b746f480bf2fbdfdf4f2edc3517477"
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
    "revision": "aee77b234bc295ba9d7b3cfb25d8b10f"
  },
  {
    "url": "posts/database/SQL-constraints.html",
    "revision": "34df14d0ef24c39c68fd45adc0f3bb96"
  },
  {
    "url": "posts/database/SQL-keyword-order.html",
    "revision": "2902f414daabd4306b1a60b4d0fc6724"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "86f2fa7527eab7a447bb497782e52aba"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "f09dd4bad448f222c3bc0a8e360bf8fa"
  },
  {
    "url": "posts/database/why-redis-fast.html",
    "revision": "2a26051307110a7b85f660f4c84b44ee"
  },
  {
    "url": "posts/devops/ansible-deploy-docker-compose-service.html",
    "revision": "2aef860d975853c3a65b08e74c7b7e0e"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "68ad9fe29fb1e8e2e57c98a493230717"
  },
  {
    "url": "posts/docker/docker-host.html",
    "revision": "6ab4cc594bc1e7712b793b0c141ac4ad"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "b46ea0bb938c30fc8e8e42ab6846669a"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "2fa30d08335eec1bfea6e74d9ea3cea0"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "0c229e7b1163c1c72d326aa337d43c31"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "133301ea5dafd05b86beb51e21186f37"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "a95ae4bd8c0f75059b7104dd271851ff"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "f44887fc1700d11735b6ca5ddf82d945"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "f14c091005c7eb438f146be5441afa74"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "219135090a542314fdd92aa501d1077d"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "eca8b1aa3d9096c4db34c08e500c8d55"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "b8450c96405747992ac9705f68adec29"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "60ccaf999f1cc3a98db7bbc388682043"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "0a9a86f1c16cd935767e9713a5af539b"
  },
  {
    "url": "posts/git/use-multi-access-token.html",
    "revision": "dc3d4f385b7799aa6ef61d71c4d82591"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "2e21876c0b0c906bbff9045a610be25f"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "3f2fe1919ebb6a34782d515cd5ff2285"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "ab3c3fd3b9715cbb482a344d76e414a4"
  },
  {
    "url": "posts/http/https-shakehand.html",
    "revision": "8e6fe51429e5bdf8ef1dd9a95aefe74b"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "3392651d988c8adaa223e8d56c01d52c"
  },
  {
    "url": "posts/java/java-http-proxy.html",
    "revision": "36d533b17c679058f053688a892ab677"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "9e6a176fade0c1179005ba203678500f"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "42d109a552c39f6d9cc0ec66bf0fea6c"
  },
  {
    "url": "posts/java/java-spring-MyBatis-Annotation.html",
    "revision": "0350a5ab1d55dad8490e982a90b325e4"
  },
  {
    "url": "posts/java/java-Tetris.html",
    "revision": "9687392b0821d4904507ac5f5f135750"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "30fe6d9002e1b5c6e91cbd97d363e900"
  },
  {
    "url": "posts/java/spring-RedisTemplate.html",
    "revision": "595bd76ddc86d199f71f763237524590"
  },
  {
    "url": "posts/java/springboot-disable-autoconfig.html",
    "revision": "522f0e777d82d74f2dfab810eb4e479e"
  },
  {
    "url": "posts/java/springboot-schedule-task.html",
    "revision": "1d03c80b82677d8cff2b53e61950717c"
  },
  {
    "url": "posts/java/springboot-swagger-ui-custom-config.html",
    "revision": "eeb32e17f6a9f8c6807076609839797b"
  },
  {
    "url": "posts/java/TOTP.html",
    "revision": "3f4209b8c94560b7101e4c361ec83cfa"
  },
  {
    "url": "posts/linux/docker-nginx-acme-trojan-go.html",
    "revision": "02f7040ae09f1642cc504b5b607ed128"
  },
  {
    "url": "posts/linux/install-ubuntu-with-xrdp-in-termux.html",
    "revision": "57632102e419057c5547ce299c3d6c58"
  },
  {
    "url": "posts/linux/linux-chm2html.html",
    "revision": "e761a31a5d8d9b2cd21e28a15ae3a7c3"
  },
  {
    "url": "posts/linux/linux-ecs.html",
    "revision": "2a233b2d275143d19dcebc70e37323d5"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "4115d0d56265d1fac40737700dfd45e3"
  },
  {
    "url": "posts/linux/mkcert.html",
    "revision": "f5fe4f09e7cd8d0e1f3e7422ec9745d7"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "956508a1fc8461ceb868260647c29fd9"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "2ebeff5221ad2e2a1039492b0426b8e0"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "0984db56d3b409b96590a211b6f384ef"
  },
  {
    "url": "posts/linux/ubuntu-switch-sources.html",
    "revision": "0d5c0a8d8041349ab670a102dcd537d1"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "243c6a54ea6e3085e664ebca9c38ff5d"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "b5bb8f4b1214641e31b9c80ef781c06e"
  },
  {
    "url": "posts/linux/wsl2-and-docker-compact-vdisk.html",
    "revision": "df26315aa8bf194b7c08afa7e0deea1f"
  },
  {
    "url": "posts/linux/wsl2-install.html",
    "revision": "c4e6a7af849d2aa0fc1332921d695901"
  },
  {
    "url": "posts/linux/wsl2-use-winip.html",
    "revision": "8a2725546783372aaf9237867f40120a"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "5237bd67f3590c50bd25cc6e89bea49e"
  },
  {
    "url": "posts/macos/android-emulator.html",
    "revision": "27d6faedd8f706421acd78a0396470cc"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "e29ee7e04fc188c42ecf5e4bf2d2bb63"
  },
  {
    "url": "posts/mq/ensure-not-repeatedly-consumed.html",
    "revision": "0cb186ff0554b02318e2573a3d8965b9"
  },
  {
    "url": "posts/mq/ensure-order-of-mq.html",
    "revision": "ad066525c60e5aa2a01d36a506a77d40"
  },
  {
    "url": "posts/mq/high-availability-of-mq.html",
    "revision": "da115bddcf6c36db8488cf4112650a45"
  },
  {
    "url": "posts/mq/mq-problems.html",
    "revision": "14807687327bdbab220734d9e4c18e81"
  },
  {
    "url": "posts/mq/why-mq.html",
    "revision": "227ea13d0dc1dacbd951c68f0df1698b"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "320e3b9e63e7a3625c78cd95839d4672"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "c3ab5f4275ddbc86a50a5c3b5b80dc42"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "5e0ee7d5da3d76859de8c68d897aa23b"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "3c075a64b07a6f7ce6aeb00eeb8cb34d"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "9f4d7a681f2e313f8846fa8a77e60c4a"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "c202e940da1c8cf91a14cfa824f90114"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "225b9e69e582bca780ea14a0da2f8c01"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "adc5f9be67500f31a16c8dc160b0265b"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "8c2d6d10ed73775b570fd1d800284821"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "e241fc3a1c2be18bb0c2af6c15ecab0b"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "8edabfa11b772360e8368be49fc3bc8c"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "0c4c02ee91386738865ff1257b885f74"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "d78b65343d1da726cf4321d472eee295"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "7c453bc4f647f4f626c6bff1c339c5ca"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "79ad00e5388541a373780f7b566561e3"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "7cc26a6f171606a9f3e9fdcddffa5d6a"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "79756b2fa043dd98628f0d0c6432d0e5"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "67ef369d7c3d9cee0ac5f06fe382fa2d"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "c1e4c837718deb02fdefd8a23f33a10b"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "58a57d2979ba7539aaffbb0d45176fcf"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "4cdf7ab680f6e0878dcf76876c12b278"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "ac10b4a8a5df241fa958414ca7b73e5d"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "5303e8cdd6de6c40c8a336d1be3825b2"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "09ee404c70cb16601d4697a9c9929e60"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "5749624642e473a0c439a0b4058e7dd8"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "7de2144db991000226aef8a6dbc4476c"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "9061c9e3010ad104098dc386f4cf7048"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "c4a9f80077e0934b27b99c7df4862369"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "cd73319176058200a59f185e7d05e856"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "75521cecd313117787a7a5ebfef2a2b4"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "18bb6ddf7b7617648ac97008567e4e51"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "0aabb97c4cba683db4165d7c96fb7a46"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "54cb72b0fecd6ec64ec3cf0f23494f32"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "597ce80d21cb1c643cdb0b5dc86bc22a"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "ea31489444f61b7f9572b455ac11723d"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "ef03138fcf4900fe60959f8c1aa45ac5"
  },
  {
    "url": "posts/other/aria2-replace-thunder.html",
    "revision": "5f9211b9368fe144849ae1fb0116abbc"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "60796eeb1c6a2bc68754ad16a75cc1e1"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "0256e6f18905a45041a9cf2a9ae403b1"
  },
  {
    "url": "posts/other/iqiyi-danmu-convert.html",
    "revision": "fd827ed5cd857f4e52ff54620ed1b318"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "a925cf8e56216c026f64d25e60f273ce"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "bc6aefff337018433f63dbf2b8075461"
  },
  {
    "url": "posts/python/deadlock.html",
    "revision": "578f28bd01b426f1521715a351a01d1a"
  },
  {
    "url": "posts/python/locust.html",
    "revision": "c8deadb6c7ead4c2a7134b07af5177bb"
  },
  {
    "url": "posts/python/normal-errors.html",
    "revision": "4adf3ceef89ac6818ab5083e37e271e2"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "590c26e6ef863c681a20ceaef5d2b300"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "75d539add7f203c35df148e2081a7f78"
  },
  {
    "url": "posts/python/python-dynamic-import.html",
    "revision": "1abea8f2b082b81bcdd852de664aa8d4"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "1b4f5efaa47364507bd8126f5f3347fc"
  },
  {
    "url": "posts/python/python-metaclass.html",
    "revision": "dafba784a2d4d436065259aac721ab70"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "7e909fdb64a5c4aead718eefbb50003a"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "bb331fdffe0704731acbd2e428e712cc"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "ad0c3bbc6ac6261a24c7ac300cb54d5c"
  },
  {
    "url": "posts/python/whats-new-in-python3-8.html",
    "revision": "92d8bef2f11269f4cd8979970d25a46d"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "9282a0a1dbe6340d8145e2da7fdeaaa5"
  },
  {
    "url": "posts/router/iwpriv-DisConnectSta.html",
    "revision": "572b1679001d7aa539cc09afe6cdb776"
  },
  {
    "url": "posts/router/set-dmz-and-UPnP.html",
    "revision": "5e891570ed28c31f320110f6e6d1eadc"
  },
  {
    "url": "posts/router/wake-on-lan.html",
    "revision": "9099d3490469d01110750019478ef180"
  },
  {
    "url": "tag/algorithm/index.html",
    "revision": "ff09fc9181e545e64649e78edf46c716"
  },
  {
    "url": "tag/android/index.html",
    "revision": "67822e025145691cab2aff5b59ac0504"
  },
  {
    "url": "tag/ansible/index.html",
    "revision": "6ca10b70925bf8769da713c25a43646f"
  },
  {
    "url": "tag/api/index.html",
    "revision": "7ad8a978795f2bb8df8a957814432844"
  },
  {
    "url": "tag/aria2/index.html",
    "revision": "44681a5287d354c5eb1935a83d5e8c08"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "526e132f9a38cb1917960c1b3189986a"
  },
  {
    "url": "tag/context/index.html",
    "revision": "2e8e4b8bcb15c922b3c6c3f23186aedd"
  },
  {
    "url": "tag/database/index.html",
    "revision": "fc81cf2f7662ef875a19871fbc53bb4c"
  },
  {
    "url": "tag/devops/index.html",
    "revision": "befda37baaf22546c1c84a20777c3d47"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "52d0f14c698f2c237fdf2f4565e783d3"
  },
  {
    "url": "tag/emulator/index.html",
    "revision": "1e0c5bd098a6795464a5855f6fd2cee7"
  },
  {
    "url": "tag/git/index.html",
    "revision": "8a712aee513e13a80f5bfe8722a4396b"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "581340ec745ed39034b4b2e6cfb773ee"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "999c3f41e3344790aa71612756ddbe03"
  },
  {
    "url": "tag/http/index.html",
    "revision": "0aede614bad8f3abd4de7818fc698567"
  },
  {
    "url": "tag/index.html",
    "revision": "b950c55f44517347e8b88f3c520b5d15"
  },
  {
    "url": "tag/java/index.html",
    "revision": "9d48d125f1e9a637f0d523d2d2c02d6b"
  },
  {
    "url": "tag/java/page/2/index.html",
    "revision": "2c94d4ca8b35628da3c17924a698c8cf"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "51dd77a07ece9fa4349d6a828e8f1d70"
  },
  {
    "url": "tag/linux/page/2/index.html",
    "revision": "e1e28271b0db54b740e2a9da59476e37"
  },
  {
    "url": "tag/macos/index.html",
    "revision": "ac770ebdf795f2a08746ce8d895dcef3"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "14332a7110c501fcb1260f5a05134a0f"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "5d6594bea854ad88a118e4ccf6dc0f30"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "f7edd1b5622155f962494456e44a83ce"
  },
  {
    "url": "tag/mq/index.html",
    "revision": "f9ba94b7034c1d1c20c3fcfd379f667c"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "8747b9684bd57c5038ed22d9273f5d8e"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "1bd7e9fe7d903ed5c3dd20cc122b7278"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "6fd2909b402a214351afec8160afbdcf"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "6145862e580f24b4f6f074da2d2eb9ce"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "3da82112ba9e888209d6833adc30c354"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "c1fbe6558ed579b6773fe29d2c944331"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "a99e8e35b8d1a2287779da94776db7a5"
  },
  {
    "url": "tag/other/index.html",
    "revision": "5dd10b17accab89c0b890cb4bc3fa170"
  },
  {
    "url": "tag/python/index.html",
    "revision": "596ea24658f72ca8e0a8a42bc2a6d8ec"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "9705a78636166665ef9f5400236d7e57"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "bc6f0ebabfc77a5b7cf1051c2e0d764f"
  },
  {
    "url": "tag/router/index.html",
    "revision": "0e550e75e0aadfeb2e71367cb475e1c5"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "e62511f03ba13ac5969cd64720e2a74b"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "1186f8be9d583ef8aba2e5f16d751d25"
  },
  {
    "url": "tag/termux/index.html",
    "revision": "640034a5b1d331b8e9f0f6274a325fbb"
  },
  {
    "url": "tag/trojan/index.html",
    "revision": "4dccc56bead7df103c487643b3370d26"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "24cdc777c17d17675d98f900985b1e08"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "12bc6b48d33e910f61c735b40b550c51"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "3bf16ec1b26049ca85b3117e641dbcf8"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "1c1a7ed3562ca302f56e6559d0c1fc2f"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "4e915b7f2e98546f90a2ba944748dee4"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "ca4b4260a0791fc60c91752a7867386c"
  },
  {
    "url": "timeline/index.html",
    "revision": "143b6674c25afe6dade885c09d4edadd"
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
