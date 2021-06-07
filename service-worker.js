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
    "revision": "1f9932541a140235ad7a95ece6b04408"
  },
  {
    "url": "assets/css/0.styles.a1180dfb.css",
    "revision": "3d34d6f2468f63e74db00bea58981ce2"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.aaad044e.js",
    "revision": "1286ce312138a1fadc2eca581308f074"
  },
  {
    "url": "assets/js/10.60a57bcd.js",
    "revision": "021fde86d803cc7c4f28eae6eed5fb39"
  },
  {
    "url": "assets/js/100.634873a4.js",
    "revision": "b5d6e4d79cd74ff22f2bc32858b7b20f"
  },
  {
    "url": "assets/js/101.bac61f38.js",
    "revision": "33e483ea69890de9251b52842f8f2918"
  },
  {
    "url": "assets/js/102.4e794b26.js",
    "revision": "adee328a23625200f428cdda1e3a0981"
  },
  {
    "url": "assets/js/103.64f5d1ec.js",
    "revision": "67625959ac62cbf6ae2d0775b0fbbe85"
  },
  {
    "url": "assets/js/104.15cf3e09.js",
    "revision": "a6b6e6d1bf7fd1b77acadce4000e2a35"
  },
  {
    "url": "assets/js/105.4df9507a.js",
    "revision": "938982c4b5d6d548acce1a8a67555923"
  },
  {
    "url": "assets/js/106.cb4d2e84.js",
    "revision": "e29f5e8103ae3a94777b8fa2709bc50c"
  },
  {
    "url": "assets/js/107.b7b52b67.js",
    "revision": "a67ab7feb0c168db32cb7846db704050"
  },
  {
    "url": "assets/js/108.f3f67455.js",
    "revision": "47cbf5d03ab1671ec69282a9a8abfd0e"
  },
  {
    "url": "assets/js/109.8a3a2dad.js",
    "revision": "7a651fe05723e4aa3519670d85345f13"
  },
  {
    "url": "assets/js/11.69b157b1.js",
    "revision": "4c83239fab190348e9d5dad712041630"
  },
  {
    "url": "assets/js/110.2eb36c0b.js",
    "revision": "39deab8af55bf7fbff3e3b60ad013d68"
  },
  {
    "url": "assets/js/111.95a2801d.js",
    "revision": "ba07b46060d4018be69b57675aefe8bc"
  },
  {
    "url": "assets/js/112.81393947.js",
    "revision": "2502d1c87f5c4f5ebd6eb3a7ef4aa8cf"
  },
  {
    "url": "assets/js/113.da9baf5d.js",
    "revision": "ab7d10a5b81c5db2863292f955ce3101"
  },
  {
    "url": "assets/js/12.e4c9aad0.js",
    "revision": "6aa371c26f8c6eea65301c8820a37a6a"
  },
  {
    "url": "assets/js/13.4d083014.js",
    "revision": "35c101f91adb13a019b84ab47c9c2b20"
  },
  {
    "url": "assets/js/14.7479fa85.js",
    "revision": "e0827dbcd17b2def86e2de343299a716"
  },
  {
    "url": "assets/js/15.ac308fb4.js",
    "revision": "961c4c8f198034803b9914dcfbee7fb1"
  },
  {
    "url": "assets/js/16.d06b9d0f.js",
    "revision": "dcc42627e2ea94f56c9969cd832323d5"
  },
  {
    "url": "assets/js/17.7baca98c.js",
    "revision": "4ba8be7d6408ac49b36a099be392f275"
  },
  {
    "url": "assets/js/18.66dae303.js",
    "revision": "a98ddcab6f622ebad793a0fbe6b1cf90"
  },
  {
    "url": "assets/js/19.ec02ffc5.js",
    "revision": "6e793376ce0a3a7aec091f122c475271"
  },
  {
    "url": "assets/js/20.b42acaeb.js",
    "revision": "c498a2d3f2f8d5d8ece63b84b194a270"
  },
  {
    "url": "assets/js/21.5c1b494b.js",
    "revision": "021b1799e32f7227af9a62ce2f78ce69"
  },
  {
    "url": "assets/js/22.d75702fa.js",
    "revision": "a7d916bb901a6a0d1df3c610b65b8eec"
  },
  {
    "url": "assets/js/23.9fe6b906.js",
    "revision": "ea17a517944caf65a51b252b2c622725"
  },
  {
    "url": "assets/js/24.e4ed2002.js",
    "revision": "492a3b10502688471c65b363eed19630"
  },
  {
    "url": "assets/js/25.2db335af.js",
    "revision": "54309ea65018a9ea7fcb7b2a607f060b"
  },
  {
    "url": "assets/js/26.1cbed15c.js",
    "revision": "3a5cfdfaccab7fd2c408a7dc85d9998b"
  },
  {
    "url": "assets/js/27.9df79cff.js",
    "revision": "bfa689d6569f0167e3308b0815a28cfd"
  },
  {
    "url": "assets/js/28.79b424c9.js",
    "revision": "5ab31ce640d17492e4df34e2a3f0a0d6"
  },
  {
    "url": "assets/js/29.bb2be9c2.js",
    "revision": "2b77fffd2726eaa234340758c748d5d1"
  },
  {
    "url": "assets/js/3.364fa3fc.js",
    "revision": "e526d0c70dfe47b40232c01450bcf7d0"
  },
  {
    "url": "assets/js/30.10a7e541.js",
    "revision": "65e63d56c328ce68296f1f05151b4be7"
  },
  {
    "url": "assets/js/31.737bc9d3.js",
    "revision": "ceceea2315f061ed94e6b75b54211d7f"
  },
  {
    "url": "assets/js/32.b9c02a77.js",
    "revision": "c7893231aea2934edc773e78774133cf"
  },
  {
    "url": "assets/js/33.315af717.js",
    "revision": "7b05296416fca1ea8295c8eb3d49b88f"
  },
  {
    "url": "assets/js/34.f79e7f5a.js",
    "revision": "84ef1292f9739d1e711b4b2a9a09710e"
  },
  {
    "url": "assets/js/35.1c2eb320.js",
    "revision": "3654ac14d8cb8ae130c6e5e0baff87df"
  },
  {
    "url": "assets/js/36.2b881ca6.js",
    "revision": "ceb74510175de3cc03d9d555b0bbbc32"
  },
  {
    "url": "assets/js/37.576c0927.js",
    "revision": "ed22d029487766cdeee2c8d076fd9141"
  },
  {
    "url": "assets/js/38.b52d3aaf.js",
    "revision": "e92954a8f6ef00eea7a2307090b198e4"
  },
  {
    "url": "assets/js/39.8f22dcd5.js",
    "revision": "a0c93a26a6001941f97f00b80ac6451b"
  },
  {
    "url": "assets/js/4.82827657.js",
    "revision": "16886d2cd0cbc839eb15b36b6007f24d"
  },
  {
    "url": "assets/js/40.cf796540.js",
    "revision": "2c1780b1077953888969bb67ebd34bfc"
  },
  {
    "url": "assets/js/41.772cf984.js",
    "revision": "5b3a2df6af0640d3e215c5bb63da5376"
  },
  {
    "url": "assets/js/42.1b18daeb.js",
    "revision": "eb3d3b99d7b7e262c04687522544c6b4"
  },
  {
    "url": "assets/js/43.b9681f91.js",
    "revision": "1afad5055e4c9dc1531202f6d1bf6066"
  },
  {
    "url": "assets/js/44.22590243.js",
    "revision": "51fc62c474c6e2c9b7eb09f1b3d043b2"
  },
  {
    "url": "assets/js/45.f6e3acec.js",
    "revision": "39df18a8d0c9f2414c61aaa06cdc5060"
  },
  {
    "url": "assets/js/46.3ff6778e.js",
    "revision": "e28b4534780345df193031496c5e8b07"
  },
  {
    "url": "assets/js/47.87702364.js",
    "revision": "af5b490a0e69e91280619bead9e35d9a"
  },
  {
    "url": "assets/js/48.b8098d23.js",
    "revision": "208f3cd00b16f95d8dbb097fe53aad01"
  },
  {
    "url": "assets/js/49.917a237b.js",
    "revision": "45221a79ee485a0015bb50369ab5b20c"
  },
  {
    "url": "assets/js/5.f171fb5b.js",
    "revision": "1c432ec3e561c0caacd0919ac5415365"
  },
  {
    "url": "assets/js/50.9c2a6335.js",
    "revision": "03416dd3906d3577eb4887eb3c84138e"
  },
  {
    "url": "assets/js/51.f970fb8e.js",
    "revision": "6e4babecb458b8fcc0ee70cbeff2808a"
  },
  {
    "url": "assets/js/52.675cd0a3.js",
    "revision": "403b71fc3cb46b2679418a3e8549cbe2"
  },
  {
    "url": "assets/js/53.3f2813e8.js",
    "revision": "85ab96858f60527d06bfdb6f52298cac"
  },
  {
    "url": "assets/js/54.842b58be.js",
    "revision": "e5cf0002a037acc630ef499a3272ffc7"
  },
  {
    "url": "assets/js/55.988c5af0.js",
    "revision": "1be01286273ef0082875dc0dcb9be78c"
  },
  {
    "url": "assets/js/56.e6deea6d.js",
    "revision": "58d2c47228a4621b2f973686c6b8976b"
  },
  {
    "url": "assets/js/57.14a037a6.js",
    "revision": "c477c9ab9f1f6468f2d5a9eb300f537e"
  },
  {
    "url": "assets/js/58.7c0d2dbc.js",
    "revision": "7502dce308660a242c75d430b38f5f6b"
  },
  {
    "url": "assets/js/59.32ffba88.js",
    "revision": "4a93f13a3d427f069347c7b9621672e2"
  },
  {
    "url": "assets/js/6.6d7bedbb.js",
    "revision": "91579a973bf33c858aea0e27e16600c8"
  },
  {
    "url": "assets/js/60.91b014c0.js",
    "revision": "93c4618f5bf3e515e2134e59021d2103"
  },
  {
    "url": "assets/js/61.0729a427.js",
    "revision": "38ba2ff18db3f63d2a7d64e4f17d38f4"
  },
  {
    "url": "assets/js/62.4ab37e9b.js",
    "revision": "4a723c9441ced8351e678ff423ceb508"
  },
  {
    "url": "assets/js/63.a1118843.js",
    "revision": "6308634bf9d4df1265b5fbba8d941d8b"
  },
  {
    "url": "assets/js/64.3b7b28c3.js",
    "revision": "7a696f16f8d283a113b2a7da1ef25f60"
  },
  {
    "url": "assets/js/65.94144fdc.js",
    "revision": "a0f939d4de67929a945934b8d7c21fb7"
  },
  {
    "url": "assets/js/66.4b784a7a.js",
    "revision": "0df1edb080ef436880d81c8f66acea13"
  },
  {
    "url": "assets/js/67.c3669c67.js",
    "revision": "2bedc4107dca489030dd7820ff58827a"
  },
  {
    "url": "assets/js/68.27eaea0d.js",
    "revision": "a008cdd1aee4f3f4ce6746bd8f3213a1"
  },
  {
    "url": "assets/js/69.880138b4.js",
    "revision": "cf27093edcd802a9f64e1319f5e1fea5"
  },
  {
    "url": "assets/js/7.76b7dfa7.js",
    "revision": "715c723dc2232b73f9c1500622b1fc01"
  },
  {
    "url": "assets/js/70.27f41b4c.js",
    "revision": "403c236c78ca3dfb1c8ab4a5dd3a6252"
  },
  {
    "url": "assets/js/71.d4580ec3.js",
    "revision": "e39df8c253e6e59421c0e0d2819a9f52"
  },
  {
    "url": "assets/js/72.89ae29d8.js",
    "revision": "2fdce9fd0bc73ec0e3b4ac46ddbdca61"
  },
  {
    "url": "assets/js/73.5d28b417.js",
    "revision": "e8b52781dbc34e018aab2d5ea3df9553"
  },
  {
    "url": "assets/js/74.d1ad240a.js",
    "revision": "c5571448e71f74489cef3f9eb3fec2ab"
  },
  {
    "url": "assets/js/75.d8cc8509.js",
    "revision": "46bcfdede394ebffdf57e8bdc65a27b2"
  },
  {
    "url": "assets/js/76.c42b6e43.js",
    "revision": "9654b6397da9082bafd3bea4bf8e37fe"
  },
  {
    "url": "assets/js/77.f16075dd.js",
    "revision": "ab804dee7cddf96171440e6ea1946083"
  },
  {
    "url": "assets/js/78.b8c0a21d.js",
    "revision": "f3bb0fe62388ffee446cc6ebf749d0a9"
  },
  {
    "url": "assets/js/79.03c14f4c.js",
    "revision": "12f3da237e37a1310f659c6fc989d428"
  },
  {
    "url": "assets/js/8.07210b02.js",
    "revision": "f9bec44862f6ba153247245d31c65124"
  },
  {
    "url": "assets/js/80.0f9e21ba.js",
    "revision": "479d9673744f35b4c8f061d0ef864ec2"
  },
  {
    "url": "assets/js/81.bc86c978.js",
    "revision": "b100bc0d00470e1eb5913739b34cea5f"
  },
  {
    "url": "assets/js/82.06651429.js",
    "revision": "f3a74c55fa0f0e179f3e7db9f81902fa"
  },
  {
    "url": "assets/js/83.5463f6ec.js",
    "revision": "83b3ae2dd8bd5504cef0ca5d3b19c069"
  },
  {
    "url": "assets/js/84.bd283dab.js",
    "revision": "a7b43fe1ff425e417ce905cc295f3045"
  },
  {
    "url": "assets/js/85.c2170ce4.js",
    "revision": "5b4aef2bfd29e1ddb6ddd2e5d802bfcb"
  },
  {
    "url": "assets/js/86.ab28d745.js",
    "revision": "6976dbd5b3fa1b60dab3f794acc3c726"
  },
  {
    "url": "assets/js/87.77c793f8.js",
    "revision": "783293d8dc527a2632e426fafa16f449"
  },
  {
    "url": "assets/js/88.d1e434a6.js",
    "revision": "40798f924f87b0b35a524ba109d94f4d"
  },
  {
    "url": "assets/js/89.f4c00424.js",
    "revision": "af2e6b8d5a7721a69279c93764ae0c7b"
  },
  {
    "url": "assets/js/9.6862fe90.js",
    "revision": "071730f5f83c7f4287a3923c9c6c4184"
  },
  {
    "url": "assets/js/90.62904c2b.js",
    "revision": "8ac82c7f600bd766f756a89c6113beb2"
  },
  {
    "url": "assets/js/91.8d09221d.js",
    "revision": "4d786980727c35d9e4850c45cb9e18b1"
  },
  {
    "url": "assets/js/92.4197291c.js",
    "revision": "97fdaa409098de553abed9ee30215521"
  },
  {
    "url": "assets/js/93.09db4e8a.js",
    "revision": "b2a6f739d1e0483825d0f69136e74594"
  },
  {
    "url": "assets/js/94.420deda3.js",
    "revision": "dfa0464ba6219d03555d452deca7a405"
  },
  {
    "url": "assets/js/95.77fe505a.js",
    "revision": "c9ee88d0770d00f2339bd7ee61603724"
  },
  {
    "url": "assets/js/96.ad8211fd.js",
    "revision": "eb61017d5be9840e76b204b29d8443a4"
  },
  {
    "url": "assets/js/97.320c11a5.js",
    "revision": "28a8a07a4112fab165ffa3cee433fff8"
  },
  {
    "url": "assets/js/98.3c073503.js",
    "revision": "170a87d0916cdb384bed1c098d305110"
  },
  {
    "url": "assets/js/99.4ba3d8ba.js",
    "revision": "4b641f2271e7247eec633145bd813a59"
  },
  {
    "url": "assets/js/app.045a3c45.js",
    "revision": "efa9188cbb7dfa69f98df358cb5e88dc"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/algorithm/index.html",
    "revision": "5630083c75cb16423fcb22d5ed021cbf"
  },
  {
    "url": "categories/database/index.html",
    "revision": "2d835d82c6876825f288eff8cece5794"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "30a1d988cc7d2a750ce6d9ec6ff82416"
  },
  {
    "url": "categories/front/index.html",
    "revision": "b6b41360a4d4eb706c1ca3ef0409d293"
  },
  {
    "url": "categories/git/index.html",
    "revision": "3b3fdf78956478d7156af7f2c0139d6c"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "574f989e87bf7b711b793d3b9893ffe3"
  },
  {
    "url": "categories/http/index.html",
    "revision": "da5bb9dd8d31df1ef545d841e0e90ce3"
  },
  {
    "url": "categories/index.html",
    "revision": "05f370debf4eb56e507e0aebb9b26263"
  },
  {
    "url": "categories/java/index.html",
    "revision": "ff3e343468f23ab3ec7a17406aabb0e8"
  },
  {
    "url": "categories/java/page/2/index.html",
    "revision": "6a41985cdf873f8404c395d2d015196e"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "ee53f96190e434008199148565cb6421"
  },
  {
    "url": "categories/mq/index.html",
    "revision": "fbf78af11445a4618e90aed7fc4c740e"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "62e28b091e5ee6fd1dff4169b9c929a8"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "a1afdeafc2bb857600b39676fb9d6064"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "c28d5c6546e24a1c200236d772e2ed0d"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "8cc600455c6d282b1b902bf9f474ee38"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "7110389a0980452a1a02afdca4ae57df"
  },
  {
    "url": "categories/python/index.html",
    "revision": "2d5b50a10d1d37ea826a1f27bd4df0d6"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "b2b09a8cbeebb3f6dd1d1ac973c69040"
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
    "revision": "6f157a4496ca792d174d74223d3f1375"
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
    "revision": "8b123429ab4182ee8e474dbf23fcc731"
  },
  {
    "url": "posts/database/SQL-constraints.html",
    "revision": "130b1e807d6610589cc91c1787c47436"
  },
  {
    "url": "posts/database/SQL-keyword-order.html",
    "revision": "c2b822f67c8dbe72801e19582c12b91b"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "6611de3ec458b4070d05ddf4a2d552a6"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "bef427596b2dcdc724a515d85b8f15cc"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "fc7ae553d182dc4c963f4c5012c003c9"
  },
  {
    "url": "posts/docker/docker-host.html",
    "revision": "10b058deed89f864e466c575d899905c"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "ff8668e69f4afc0742f91c15f4339bb5"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "dbfbf62b7600db1d4657e09728d697f0"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "c2289ba638bdc9e40c21f31fbf9a563d"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "8f85b8e3d2adc652d0af22c6fb3173c8"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "3b8e29cf5275f164cb70362987c1aff0"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "0a8378bf71ce7bc228f2819a7f987ab8"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "089b14d6d7ec94f659336bd37686a508"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "97f75ec6659162bc2fe99eda1daae5e2"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "097ef168dd05d9365d5893ed8faf38e5"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "453ece1ea30548052ecfcc3f42f99437"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "afcb4e731d3a3291e7940d9a6c48156c"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "fc3eebe37d9ecea389158e69c4a22cac"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "44e2e5544977b75d23487b3f8d0a62fa"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "db12ce43544a5455bd4a004bf3301d06"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "e83405065c19ad89e6d572b44c81aee6"
  },
  {
    "url": "posts/http/https-shakehand.html",
    "revision": "3ee606d1727eb1b81d56cf270ed5f56e"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "c15a48bfa1825b15bd1f8b67434e6da0"
  },
  {
    "url": "posts/java/java-http-proxy.html",
    "revision": "b4addc81a43506975d5a35e62a16e122"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "526bbfe3cd3636b64b24ebc055187f12"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "5690afefaa9f052adc96f6e00addd728"
  },
  {
    "url": "posts/java/java-spring-MyBatis-Annotation.html",
    "revision": "9949504a1e6fede189cf7d5ce1df43f3"
  },
  {
    "url": "posts/java/java-Tetris.html",
    "revision": "2a42bd279996c39b88f3e6c0725d71c6"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "7bfef702611357eeed274a57bba17d97"
  },
  {
    "url": "posts/java/spring-RedisTemplate.html",
    "revision": "f8c5ff07b22d63e410cd598fd7789099"
  },
  {
    "url": "posts/java/springboot-disable-autoconfig.html",
    "revision": "67b4eefb4fba80ca8906ef688dc697ad"
  },
  {
    "url": "posts/java/springboot-schedule-task.html",
    "revision": "9de46cc2bc6daf16ed7f8d22c628ed6e"
  },
  {
    "url": "posts/java/springboot-swagger-ui-custom-config.html",
    "revision": "9107df1b827e2309071231d3f2da718f"
  },
  {
    "url": "posts/java/TOTP.html",
    "revision": "83168ba0350e33bb3a8f35e346e7bb7d"
  },
  {
    "url": "posts/linux/linux-chm2html.html",
    "revision": "fcc2d6d812dfb36aa9aae0bbffde5379"
  },
  {
    "url": "posts/linux/linux-ecs.html",
    "revision": "9e2bc61dcad58363c09b125cc13a16ab"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "6d077479cd5f2c40dd4e811fa29ea837"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "9e5f15ce35518c847b2de0c4164494ad"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "a08c7518ad3a57d7571992f2919cdccd"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "80fd224bdcaeb4bc5ca2e8823d23c080"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "55cf2aace258339a2b818e89d65a30d9"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "c837ad2bfc23ce781bf27e3f3a2e19b3"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "fbb221403d58acceeaacf295484aa36a"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "4ac27bc832c34559d6b056a62d6beb90"
  },
  {
    "url": "posts/mq/ensure-not-repeatedly-consumed.html",
    "revision": "ca0d0a11ce41eea24309c1d2da12830d"
  },
  {
    "url": "posts/mq/ensure-order-of-mq.html",
    "revision": "219ed80676f2107a9d159854307b4220"
  },
  {
    "url": "posts/mq/high-availability-of-mq.html",
    "revision": "8217312f959ba8f7f4aa83ce312c4f27"
  },
  {
    "url": "posts/mq/mq-problems.html",
    "revision": "91e06b7b5c007b7f59fd30bbe2d10503"
  },
  {
    "url": "posts/mq/why-mq.html",
    "revision": "2f66692820426db58c2c41488fb8b33c"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "3504edf348d495d2d80b4fd7b692bc37"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "f297a76059c05160f392cee8d88c4a5d"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "9b9606aaab3dfb8796c61671a83bc419"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "681bea7e47577b609edb8104c227ac84"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "33ed0fe038df84a517ff96a2d4f824cb"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "cb144e4eb376d62cd6b8018a72a12d31"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "0450d6a041a7bd0069e093f9b2220c40"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "744251b9dd41aee501cc88a5e15e5abe"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "3b12b7452762fde3b07a4c5434613545"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "404614ef7d8ec067fc22d3f0e04a514c"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "b67a96d7e59060e60e4b87882e439eac"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "fdd6c309889053ba4519621afc2b7cc1"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "06ff68829e6f77fc443943e4ef5d0701"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "6bf46cf8d9067efb9f70e57e0fdd6f9e"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "203d5ff53633c510738a2ac69c7b72dd"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "b09ae934fa9fe03ffa699d693b776057"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "9e4f29c756d98e438a7dda8edbab01cc"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "ddcb1b196896cfa234804fc4c7bcc7d9"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "a2ee2ccda712f28a1b6919d92514b8e0"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "cc08c0cd93f63b0cad24867485e47369"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "fd903c83c862f196635c3537a572c29c"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "53f394c89ff8e22e714e7359ffc0054a"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "962a48552dc6bad5f45f3edcc5886f04"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "02387a19240bc2eb2c681a418cb51478"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "b0fc88b6c13a5a18a8ac992f023e08e5"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "bcb700e63970054131308502f36775c5"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "7786fced3550b799a359329d48677480"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "e15344cae27ad7af19bb87e150866f96"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "52c9dd62d41693ef83d16819a4654efe"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "93cf43228f05c4af895dfadf034db5cf"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "a68c1d8d251f262f1e8117c258c36535"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "e6a5c720d2d0c068c8f9261abb1b10c7"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "2440202c1f2e2c17cb01cb4ed7142235"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "61223df6221d9feecfef9be4f48082ef"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "e6b4d48faace5068f9e70b0767a4f24f"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "63e4ab8cad549e761a41a224da291c68"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "762fd888867f6c40aed9c16333fb1f14"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "682a7de109c5cf2ad7996d1ed6841ae2"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "b84734fbeee522239b69bf2c047fa9ea"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "78b99543e0352289bac6ca01eb09ce37"
  },
  {
    "url": "posts/python/deadlock.html",
    "revision": "3be9da65ebfbfe7efc5746bebfc43034"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "3fe05b4cb7d2b02a5d8044f69363ecaf"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "85068d218f406e87e34525e9f884e40b"
  },
  {
    "url": "posts/python/python-dynamic-import.html",
    "revision": "536c63f182d5d06ca845a71cec5573ad"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "692021cd01d6d1c983f7559a987f9729"
  },
  {
    "url": "posts/python/python-metaclass.html",
    "revision": "0373bc297bc5d639e0c3e6d7dd98eab7"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "2c006e27ae7f1bdd4e17fddfaa61fa27"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "c3cef153f5d875aad75b07e8f095e237"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "7e1b3295f7746e85e219c2e670881a85"
  },
  {
    "url": "posts/python/whats-new-in-python3-8.html",
    "revision": "afcca284b14c2a0408a08047ddc6771c"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "5228332ffec018deb9560ef8695884e8"
  },
  {
    "url": "tag/algorithm/index.html",
    "revision": "83167b493ccfc5f1123549d3aeee7c2c"
  },
  {
    "url": "tag/api/index.html",
    "revision": "005bf02326b60d3023e7d5fb5d7828a7"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "dc38235b4bd5e6660eb33817af7f9e4c"
  },
  {
    "url": "tag/context/index.html",
    "revision": "22382dc716b58af321c0a0832e048e07"
  },
  {
    "url": "tag/database/index.html",
    "revision": "10ba8d8a63faab5e66b39abcbfb64682"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "9aebd120a1e70da649daef4b54958d6a"
  },
  {
    "url": "tag/git/index.html",
    "revision": "759aa51f3566dab2846a65101b7d996c"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "4d20812e6aeb179a001d61194a1927d2"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "8ddc17799507805db5d9177d48ea7d3c"
  },
  {
    "url": "tag/http/index.html",
    "revision": "d35d8ca45b7cc09eefb2b9236be575a6"
  },
  {
    "url": "tag/index.html",
    "revision": "af8aa4255b6aadd22aa51b576d6d2fe3"
  },
  {
    "url": "tag/java/index.html",
    "revision": "319144dd60a59e694119943f971ca8ad"
  },
  {
    "url": "tag/java/page/2/index.html",
    "revision": "e7f551fbdfdc052ac1c174811d68b5ab"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "f6d33d853673a2c74b6f3454606bb938"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "60a9cf092686e11eb715d942bb5216dc"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "b5b04c0a5ed1a9fc501f63987f71eb96"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "3f71decd7f1b2cc6febf4b359728235f"
  },
  {
    "url": "tag/mq/index.html",
    "revision": "f86616a0b8c0d5e7fc8495fa2eee1b1a"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "59a55e0dd2c1c990a1b63189041a4c80"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "787891f0f18a4ad8c119cc67dfbfafa6"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "bc3a718a5bc891f3145aed5b8cb470b4"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "fda6c45e4793323c6d47d9d8a0c3ab4b"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "ddfeeeada9cc10d2769f2ce0c851dfe9"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "6b100f9d2c8e75dbb57c77b136f2727a"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "1c2b957d1b5d3fbd9f025ac3472c5b87"
  },
  {
    "url": "tag/python/index.html",
    "revision": "fc6189632c9faab6db000f471c136d1c"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "eb77cf85609a5f3d184db0ea4f6b08e7"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "647e7e6d324b8e571f4064c78d1f51ef"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "b75d328756f645410fa5263c0e6e694d"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "70e2b0eaa41afb53323542f4a3e3eeb6"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "525f5de345b317ac04e54b7a395dacfd"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "9f357390530f0462310e9f1e5ea406a2"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "30f1cfac2294c10c258d204f786e63e5"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "d6a90d31b3b50d4fd568875d70600b14"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "f690b31619d474f36d9d30be25ce1354"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "538038b1598afe36e67483cab3d3c170"
  },
  {
    "url": "timeline/index.html",
    "revision": "2e6f3e079fd2eea2539b26480e1757b5"
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
