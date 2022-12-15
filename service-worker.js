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
    "revision": "b38842ea4d389d57c934a13e5113c0be"
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
    "url": "assets/js/103.c39864a3.js",
    "revision": "b32fe2b0c1f3632d01570df92a375eee"
  },
  {
    "url": "assets/js/104.69aa1099.js",
    "revision": "4f746fe7245b1c1da3147a0b0f135488"
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
    "url": "assets/js/122.5f26326e.js",
    "revision": "7013d8a9816955a4fae6202e560301f0"
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
    "url": "assets/js/127.c619d701.js",
    "revision": "a479d68ecb85a7a0ffeed321eb7791e0"
  },
  {
    "url": "assets/js/128.d152efd9.js",
    "revision": "fece5641d3138b0806a3f0c4f9f78fba"
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
    "url": "assets/js/app.f4c38a52.js",
    "revision": "9fd41b37e79e9de6d21d5e491614ccbb"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/algorithm/index.html",
    "revision": "0ce6baa16cf4577ea9a071b955dd4b20"
  },
  {
    "url": "categories/database/index.html",
    "revision": "57d9d60fba6a820527407f93c05ef06d"
  },
  {
    "url": "categories/devops/index.html",
    "revision": "645b489e6b1e81d528f21240b51b5b75"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "beb340408e73add12b358ec220739703"
  },
  {
    "url": "categories/front/index.html",
    "revision": "542b2b9c0578416d73cf7f38a8d11f91"
  },
  {
    "url": "categories/git/index.html",
    "revision": "18109827da8f6c0da57c650911cfdded"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "81a396486e8e6459c3de7b278f2631e8"
  },
  {
    "url": "categories/http/index.html",
    "revision": "4b99d6e2b21555cb5aa7a6d2143a59e2"
  },
  {
    "url": "categories/index.html",
    "revision": "828ab4287c0b5f710be5de3f88c097f4"
  },
  {
    "url": "categories/java/index.html",
    "revision": "ead6282a10c6cb6e2eafaf2f952a94f6"
  },
  {
    "url": "categories/java/page/2/index.html",
    "revision": "edf8a37f7b5351caaee8a6143d37babb"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "624f5dbc1358ed6917122a6565db0661"
  },
  {
    "url": "categories/linux/page/2/index.html",
    "revision": "3df3631285db4c771b3fe56a7e87d5dc"
  },
  {
    "url": "categories/macos/index.html",
    "revision": "7f24517db15a53cc5a36152b0589017b"
  },
  {
    "url": "categories/mq/index.html",
    "revision": "ee38cc2e0d597d1122cf4efe933b792c"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "385218dadad6fc729d05e06d96209b36"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "81158e40354da3d9b58850257c9513c8"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "257016158806cd7dc6e0044027d37839"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "ce7fbd6be93e684281a223241556cdd7"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "532210c89698e7d901bd4b63d8a796bf"
  },
  {
    "url": "categories/other/index.html",
    "revision": "b2a88fc7d0253d20bd4c708411b6abbb"
  },
  {
    "url": "categories/python/index.html",
    "revision": "f041409cc8f1c0a902e935e349867bce"
  },
  {
    "url": "categories/python/page/2/index.html",
    "revision": "98d1f4c7204052b0826fb11cccc71d9d"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "2f199daa98c38c845859e968c7b17137"
  },
  {
    "url": "categories/router/index.html",
    "revision": "392600f5d52e5cae9fc478e079b06150"
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
    "revision": "49ce58a942ddc4553d714de067c7e8d8"
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
    "revision": "f6649dd6430fad631d1b6a6d1dde32d6"
  },
  {
    "url": "posts/database/SQL-constraints.html",
    "revision": "9a1402db1aab942e4db6b3222df38b2b"
  },
  {
    "url": "posts/database/SQL-keyword-order.html",
    "revision": "1a74cc5346a3245c287e93f77ff1b24e"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "220fcb5d7f49dd1b68b49e553f6672b8"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "a225168e7f7f1c62a12024fcaa90e81c"
  },
  {
    "url": "posts/database/why-redis-fast.html",
    "revision": "01b1145ce6aa76eda121f6345b186c7b"
  },
  {
    "url": "posts/devops/ansible-deploy-docker-compose-service.html",
    "revision": "3584ce94e57f145ff299143ba3086b67"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "cf40c9522e5cccf24501f3d5d9016239"
  },
  {
    "url": "posts/docker/docker-host.html",
    "revision": "0cd7d8061221fa7ef5acc43b788266e5"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "e5f886ece45cae0218cd1d372b0f70c3"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "0f7bd0ea1a85bd43653fdfcfb5f68147"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "cc462dcb81bc71bad344403ab28e7250"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "69c37b19392d5840fa51c0b56b24bf92"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "1fc015cb12236b41d4fab2cddee28c3d"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "6739f92710a89cd9df5cf893caa8f694"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "5780f365da139b1197b5281d09e79482"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "84766d4e02c09c04087c9f2c56efa72d"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "e541cbadc5ec7f4bd8dd4ccef0021074"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "fbc3851690fa1e04ca3bdf39235d2100"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "7f33982256fbc881e31b1a5c27ec4784"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "542a0647c4f1749e7f349d3724c4981d"
  },
  {
    "url": "posts/git/use-multi-access-token.html",
    "revision": "69935a210a65cbe276d6b450599d90ee"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "ca087570de3f16a44d5dcc03a5289551"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "bd4f94d70b9eb54f98a5534b0ff11ba2"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "b6bb0dfbecc5bf9b11ce1839fff63b04"
  },
  {
    "url": "posts/http/https-shakehand.html",
    "revision": "9ff18c6b58bee80370927a5c5c8c4ebc"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "0d82576b232e47f59cfb9e9f53db8316"
  },
  {
    "url": "posts/java/java-http-proxy.html",
    "revision": "aef7cc63bd0348d85dc7339194f83a11"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "416af0ebaf6bd9d4e08477966fc616a1"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "c7e95ede34851b7f96d057a66a9f73c1"
  },
  {
    "url": "posts/java/java-spring-MyBatis-Annotation.html",
    "revision": "a3383368e7eb3e4f43d6d55b0b2dc257"
  },
  {
    "url": "posts/java/java-Tetris.html",
    "revision": "8e80dff073cacde5e6cfff2880e27b18"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "e9705c36e1eae3b973c1b7dc541b2ac9"
  },
  {
    "url": "posts/java/spring-RedisTemplate.html",
    "revision": "1e3dc3fd0ac78f6812f99287f6e1395f"
  },
  {
    "url": "posts/java/springboot-disable-autoconfig.html",
    "revision": "57e71f8b70d10a129d8995e772d46235"
  },
  {
    "url": "posts/java/springboot-schedule-task.html",
    "revision": "3cbd18fee15da5287dba29b963b64c50"
  },
  {
    "url": "posts/java/springboot-swagger-ui-custom-config.html",
    "revision": "659c8921baeac7e75959329be3618edc"
  },
  {
    "url": "posts/java/TOTP.html",
    "revision": "223517bb8bfe217c35ad443c77b33253"
  },
  {
    "url": "posts/linux/docker-nginx-acme-trojan-go.html",
    "revision": "a3a5a5ea21cdb462c5ed4dc163e20afc"
  },
  {
    "url": "posts/linux/install-ubuntu-with-xrdp-in-termux.html",
    "revision": "b8686920744cd4a00ae2b0398bce3b62"
  },
  {
    "url": "posts/linux/linux-chm2html.html",
    "revision": "4d1bcbc375e913ee5b48a015028ec122"
  },
  {
    "url": "posts/linux/linux-ecs.html",
    "revision": "88f37e460efd00ffb1dade117c2c0997"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "d9132e60db1b08b468eb8ff651db7665"
  },
  {
    "url": "posts/linux/mkcert.html",
    "revision": "5059f8e3563fd750e52d3cd3fc548230"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "6f1a08f2fe2a8c685b22b3ef4d194869"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "90170ad18259a1d4731ee6ee8b8effad"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "71781003fc7169ee5ac4de5d2505951f"
  },
  {
    "url": "posts/linux/ubuntu-switch-sources.html",
    "revision": "854543be4c4db2a58e26aa7648041d0f"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "12008fe6a11979db3ba9b2a8ed8fe835"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "5da1b970f96982b05df40e6fe0f25f6d"
  },
  {
    "url": "posts/linux/wsl2-and-docker-compact-vdisk.html",
    "revision": "2b851f10db42972528483b5cd84b2c21"
  },
  {
    "url": "posts/linux/wsl2-install.html",
    "revision": "22f00c29a7e0460979ca07f433631904"
  },
  {
    "url": "posts/linux/wsl2-use-winip.html",
    "revision": "2d224aec1d00ae28e5ab8d94b41a658a"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "5d4fbcce77ea479e157a19179800286b"
  },
  {
    "url": "posts/macos/android-emulator.html",
    "revision": "25794430fdd39033967e18cb0f833072"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "1a44a3402cec7c5faad526503a52f9a2"
  },
  {
    "url": "posts/mq/ensure-not-repeatedly-consumed.html",
    "revision": "02df898186d4c4009558aa691fca1ace"
  },
  {
    "url": "posts/mq/ensure-order-of-mq.html",
    "revision": "dd27b07c23276d49a3f17ccde67f6a56"
  },
  {
    "url": "posts/mq/high-availability-of-mq.html",
    "revision": "26b8024ce83602eac35a70fbb89b05c4"
  },
  {
    "url": "posts/mq/mq-problems.html",
    "revision": "f1c3a5f3138335f82f0b2c7d26cbb632"
  },
  {
    "url": "posts/mq/why-mq.html",
    "revision": "07f11ce4b13775e466e2bb932d466694"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "23f25f176077757bbdceb37e8dd38d91"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "3650c2a187e969fec1b0464d3199a9c3"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "5ad69c809de562ded4d3279424992f20"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "1cc93f1b9f0bce3ead35d148ad08b523"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "e53e0027a374477777fa2b8ac2085c35"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "cf90b470a4e89cdbeb70a2493f9876ce"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "f4191ef0caeb212f19bff5ee8d29d77a"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "bc0967be13672acb0df7cb1683da3dc7"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "ec3831e5b46a29df476ae581dd7632b8"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "7d40ac6e9c984342e99b6ced97df2b04"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "2f5a4bbae4b504eb79fe9f6302154207"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "d8b1417649e825a35098dbe640ee604e"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "6255174cff8baf372e02803b0fb3e8f9"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "be6d92c3f74f6e5fc548e1d067f525b4"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "b20c2a357114f595e5b58ae0edd1b1b5"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "aaf3deee38cc14e737210106c5dce91a"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "1b9d07c835422b3980952f7104ea43e3"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "69f1fd0b1e5afde28e8c68ab6f3f22df"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "213ded7142d4e2ff71f530f61bb9817f"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "fe48f3cf06807154b5827c582d177f24"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "50bea55ea1a6c558aec5c6e93ec92706"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "8d1e69a1c9ea54a248f3be7640c7bb76"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "ca1678607d2d09e37673fd228c98e620"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "56b6b02da73cbe68106e5b9f972cc9f6"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "055b3e3bf0dd513af5ec54ec1e8a45eb"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "f3ad208a937c6fb7135d0e47bfbed236"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "229946318b7defef939ef29971f7e473"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "56bf4ed5dd19666947149c0d9824e3e4"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "1bb027024c333641b30b110e1eefc168"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "535a8f223d9a7045f3fc2afc7bda607c"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "d6ad1d48e00f501c44d359b5cef98711"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "87ba029062a51d467c7cc278b3c8af09"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "2a2d48c3d781c143454d40a593313ef1"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "78d1f307f25080ee376d0a2d0353c8e8"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "b08cdb603523867e168870200a47a4f4"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "47885a756ae8c196a9f5cc0204b39033"
  },
  {
    "url": "posts/other/aria2-replace-thunder.html",
    "revision": "67732cb9a50f5ddf1db251dcd01fd48c"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "285b6ab9adb11e4084482bf74e117e8a"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "639091a09b9f08ba44417540221864f7"
  },
  {
    "url": "posts/other/iqiyi-danmu-convert.html",
    "revision": "ae9f1bd5e04bea4e5539fe59f1975878"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "2912027fe4928863cf2b6e903ce6a81b"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "c7c8e0cf8229b6438cbd1aa2c286debf"
  },
  {
    "url": "posts/python/deadlock.html",
    "revision": "7a00dd0b100d0a80b3fb147c9020cff3"
  },
  {
    "url": "posts/python/locust.html",
    "revision": "02be52ab1c2bab0a1d40075b8e0afcc6"
  },
  {
    "url": "posts/python/normal-errors.html",
    "revision": "b4e1a1026c8e70aff4cad30d4ecf8cf3"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "91dc9b1f5cb2b0ba8a1fd973c6d6b934"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "e13ee0a378d47a4656d2de167e517d72"
  },
  {
    "url": "posts/python/python-dynamic-import.html",
    "revision": "a558a8c42e22a563b82372a1fd24566e"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "08ac4885095dd0670180f1535f701b34"
  },
  {
    "url": "posts/python/python-metaclass.html",
    "revision": "ef721f1a8f6542da2d2636c354dc8efa"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "c5459e4dd31d4193c5c4c82ad9b5d82f"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "316cb28fe9f2a01842b731587af0ae3c"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "ffec099d0541121e468ea88aa641ec1c"
  },
  {
    "url": "posts/python/whats-new-in-python3-8.html",
    "revision": "7b85725c7cc106ab9a1a70c06ee709ad"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "c4cf86b417a1e271b06d24f3c3797176"
  },
  {
    "url": "posts/router/iwpriv-DisConnectSta.html",
    "revision": "fea85edc0bf9c6d6fc6026b7360989ee"
  },
  {
    "url": "posts/router/set-dmz-and-UPnP.html",
    "revision": "a621b93088a61de584368e63bc7a8198"
  },
  {
    "url": "posts/router/wake-on-lan.html",
    "revision": "59a23f9cee0be53e7bdf6ce1e3138a24"
  },
  {
    "url": "tag/algorithm/index.html",
    "revision": "d3d78d54ebc51149b8c759aa635395d2"
  },
  {
    "url": "tag/android/index.html",
    "revision": "c5a8d656f232c4b2f2c9538c3bd64fd1"
  },
  {
    "url": "tag/ansible/index.html",
    "revision": "0624f53782937d058699a196b3cc5c20"
  },
  {
    "url": "tag/api/index.html",
    "revision": "709deae872fe69e11c236e42fe702916"
  },
  {
    "url": "tag/aria2/index.html",
    "revision": "20a78fd3a4656189e0b06fd10d6faa2c"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "85b7029b8ba1559ba4268b5d5f50f1e6"
  },
  {
    "url": "tag/context/index.html",
    "revision": "2942b3e647e6212061d9e27a1ccd2090"
  },
  {
    "url": "tag/database/index.html",
    "revision": "70eb980ee5a54a1aa6f40d28cb7df47b"
  },
  {
    "url": "tag/devops/index.html",
    "revision": "f32a64e7876a6d93eea3fa76523b8bb2"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "6f3f542048ca673e5970e1f89eaadeed"
  },
  {
    "url": "tag/emulator/index.html",
    "revision": "7af7407392fc1b9cd8b041baa1e0d52a"
  },
  {
    "url": "tag/git/index.html",
    "revision": "d007d216221d55367889cf288883c11d"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "7e127edd2e2a9d4b9b132f5f01f8aeb7"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "f2b7e1f1364e47f2758384a24e6c14ac"
  },
  {
    "url": "tag/http/index.html",
    "revision": "647122740b4a66409de71513dfa106b9"
  },
  {
    "url": "tag/index.html",
    "revision": "eeb46d5894337d86fd389d12ac75318b"
  },
  {
    "url": "tag/java/index.html",
    "revision": "a97b2b4e82073006314b8632067ce566"
  },
  {
    "url": "tag/java/page/2/index.html",
    "revision": "86c150301b53bb756debc2f2aa5619c6"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "4ecd50fdd965a31d5f6777a348507ffc"
  },
  {
    "url": "tag/linux/page/2/index.html",
    "revision": "440ab6c368a2884d08672614061d0ac6"
  },
  {
    "url": "tag/macos/index.html",
    "revision": "7c1849ecc24da037081bde1c7b7a5daf"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "5f7d5931f9688e571f64af195ea75f80"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "07a736dbf257b44c3a004f383c718b9f"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "3d66bbcbc2d4bbe642be05f25474d8fb"
  },
  {
    "url": "tag/mq/index.html",
    "revision": "8f9eab090b974fd422f459090e81791b"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "f22b80e4e29d2e100e41e252c96c9087"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "5dff5b2afcf2d69c763bd019c0c31c6b"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "f73e4e3ec866957de33d5eb8692137df"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "6be7b891a89f39329d7565250c3f2321"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "64964763459ec69efc182fe69373506b"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "a18a36a6d41d23bd71dd6ffa18d75017"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "8065008b9d62fe7d18f010b022edc1bf"
  },
  {
    "url": "tag/other/index.html",
    "revision": "764b8072098edbc6e9d457905a24d10f"
  },
  {
    "url": "tag/python/index.html",
    "revision": "67e206a59532f85cd17a98c806511b0c"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "535be2d5d034627247adaf8fed6d42f3"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "31007f9a9207d47f9818fc17093047e7"
  },
  {
    "url": "tag/router/index.html",
    "revision": "e7a6e0ee4c78694c7904a340b7c29c0b"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "570091fcea5e57580fd2676b6e76257b"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "28ac55f734cf05edbcd921ee3d051e20"
  },
  {
    "url": "tag/termux/index.html",
    "revision": "473f82cce32731272a971e0466c4df48"
  },
  {
    "url": "tag/trojan/index.html",
    "revision": "e67e8afd96f36c551a994a4be71c0570"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "d64da5378f5f9a590c6e78a6600e9b0d"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "5b0147ebde5170ac356e9f5d7b2f7c3f"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "2532f35dcf77bd178720fa9b85aa0b3a"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "90ba54cb04da4668ea65a7992adcedd3"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "7b54c443fa9c8a73bc6dfb4f46e34cf4"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "23f8bb61e9cbb5b150c27a0d6873cae4"
  },
  {
    "url": "timeline/index.html",
    "revision": "ed8c7f4a1fea446b3cb450d6fc6dc864"
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
