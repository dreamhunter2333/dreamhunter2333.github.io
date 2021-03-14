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
    "revision": "a256ab5d4d3dad93d32a03030701ee47"
  },
  {
    "url": "assets/css/0.styles.1deefa9d.css",
    "revision": "90c283463ffb97f208f41713410bb42e"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.f257e342.js",
    "revision": "9c864825c29a7253febd150eb070bda6"
  },
  {
    "url": "assets/js/10.fe58f311.js",
    "revision": "2a5e081c65a18f6171d353d5a5da102f"
  },
  {
    "url": "assets/js/11.118e79d1.js",
    "revision": "ee5b4ea38ad82feabba65ab6d83a3ae0"
  },
  {
    "url": "assets/js/12.ed3e039c.js",
    "revision": "e28f93a9cecf2943abb0792ecbfedc98"
  },
  {
    "url": "assets/js/13.0c3020b7.js",
    "revision": "114d157275d34c3cbf0dd2f4bf25224e"
  },
  {
    "url": "assets/js/14.cf41259f.js",
    "revision": "ee3d4dca7f7e117863fc401d09f93642"
  },
  {
    "url": "assets/js/15.8b0c1e10.js",
    "revision": "fc3ff6616d4ee3d876e887a3deb92611"
  },
  {
    "url": "assets/js/16.f32488ed.js",
    "revision": "69966cf80a3a4a58ab4c3abde83f855f"
  },
  {
    "url": "assets/js/17.51c45290.js",
    "revision": "9743e1ef7fedd1364fa6dc851f2444a8"
  },
  {
    "url": "assets/js/18.2314999a.js",
    "revision": "d36aaf18e91df9406e72629ceb1fc1c5"
  },
  {
    "url": "assets/js/19.5f998078.js",
    "revision": "8de5fb1f90c8e1d831cd1f030f06c042"
  },
  {
    "url": "assets/js/20.a1e01fa1.js",
    "revision": "2dcb953ecfe1de867d8d82eac577c04c"
  },
  {
    "url": "assets/js/21.d4b6da39.js",
    "revision": "ea6f596abc4cb978512acd7109ff4f94"
  },
  {
    "url": "assets/js/22.1f64e9d9.js",
    "revision": "2954508a917f3f36a9112a9db32814ca"
  },
  {
    "url": "assets/js/23.671e3917.js",
    "revision": "6bfa7fcebeef9b90f3d1a0d150fd7e58"
  },
  {
    "url": "assets/js/24.3c8874f9.js",
    "revision": "e4326eadce1f6e3fff337dd600c17c07"
  },
  {
    "url": "assets/js/25.8c710765.js",
    "revision": "82b36c45c96e407bcfb298ade8ddf431"
  },
  {
    "url": "assets/js/26.125f7797.js",
    "revision": "c3052879538bf29e5530d3d94d1f69f5"
  },
  {
    "url": "assets/js/27.eae28c09.js",
    "revision": "5677fcf56115581c9985c85228886f11"
  },
  {
    "url": "assets/js/28.5340dda5.js",
    "revision": "5d0b61984833bf8b8cd529dff015ab59"
  },
  {
    "url": "assets/js/29.8f7395a5.js",
    "revision": "e01bce9af28b8e507e19f1553ec2b69b"
  },
  {
    "url": "assets/js/3.18a5c578.js",
    "revision": "67e60864880724d775316ccc64a58870"
  },
  {
    "url": "assets/js/30.6bcb60d2.js",
    "revision": "94618562f20742d88ea88b653d60a743"
  },
  {
    "url": "assets/js/31.fa0918b7.js",
    "revision": "faf3b86f3b5877d3377bf4cc027ffad1"
  },
  {
    "url": "assets/js/32.dd694b9f.js",
    "revision": "7f416b12207ed72a236120d0705aedb7"
  },
  {
    "url": "assets/js/33.2d942397.js",
    "revision": "6271c1e675fec85693579ddaf2b2bfba"
  },
  {
    "url": "assets/js/34.3686e247.js",
    "revision": "39b0104aecc11c2bbe3219a415ce7752"
  },
  {
    "url": "assets/js/35.dd91de6c.js",
    "revision": "c0ae39e266285d5c242aea23a9fa00ba"
  },
  {
    "url": "assets/js/36.3d2ee51f.js",
    "revision": "aaebe9ec7868144a2d8b60ab3abc7544"
  },
  {
    "url": "assets/js/37.c18fedf4.js",
    "revision": "994441d7a30cdc5cb11254aa431b87e0"
  },
  {
    "url": "assets/js/38.533387ae.js",
    "revision": "0dc3d786acb8d2643026a67b283d82ad"
  },
  {
    "url": "assets/js/39.413845cc.js",
    "revision": "866642585dbff1eba6540022143d1b72"
  },
  {
    "url": "assets/js/4.6f793833.js",
    "revision": "2d695245e1a9a32e9524bfcf39667da0"
  },
  {
    "url": "assets/js/40.9dd45d4c.js",
    "revision": "f98e4c100f0a21376f6769d8976d361d"
  },
  {
    "url": "assets/js/41.d5ae5fd1.js",
    "revision": "c03a9bee753833b35ffa2b8aa0d32518"
  },
  {
    "url": "assets/js/42.d8ace8b7.js",
    "revision": "fda009b310779d869d9033f74f191a54"
  },
  {
    "url": "assets/js/43.bbc77d44.js",
    "revision": "6ffd797d992dcd4451967672773334ca"
  },
  {
    "url": "assets/js/44.23943ea4.js",
    "revision": "de7949a2b459917cf109288b0975ebb1"
  },
  {
    "url": "assets/js/45.91d33d4f.js",
    "revision": "98b6e0e49434cd0aa97cd6579aa20a24"
  },
  {
    "url": "assets/js/46.b51f7916.js",
    "revision": "368d9a434272e0516c1aa4c17ed1b615"
  },
  {
    "url": "assets/js/47.2fd9493c.js",
    "revision": "ca6624fa966afa1597ea415e9769eb64"
  },
  {
    "url": "assets/js/48.08a25afa.js",
    "revision": "bf56f8e4760d90a9abb3d6e4ae04ee4e"
  },
  {
    "url": "assets/js/49.c8f8f8c8.js",
    "revision": "390d447e0c4ceacb2751a3654b4b315a"
  },
  {
    "url": "assets/js/5.e7a3af46.js",
    "revision": "33e69efac045f653ca2cb8e00b05e0d1"
  },
  {
    "url": "assets/js/50.7613566c.js",
    "revision": "916f540ed832d259599e492d81b8276c"
  },
  {
    "url": "assets/js/51.0d05bf9e.js",
    "revision": "f222653a088f791b270973cbe403fab1"
  },
  {
    "url": "assets/js/52.7080a7a5.js",
    "revision": "2e68b9a5d81de9080f14c70ae94254fd"
  },
  {
    "url": "assets/js/53.763eea02.js",
    "revision": "8e4c3cc5a75c905e9c23f65e905cf309"
  },
  {
    "url": "assets/js/54.cdf454ac.js",
    "revision": "a467f788941e42163fcc773b50b9b53c"
  },
  {
    "url": "assets/js/55.c5ca1031.js",
    "revision": "8d34ad79ccff3d6cbabc13354c878a8c"
  },
  {
    "url": "assets/js/56.371767b0.js",
    "revision": "dc4a2bbdb3ba0fc35b61e992f1b3c76c"
  },
  {
    "url": "assets/js/57.758d2091.js",
    "revision": "e477f91de53e61f3e5ba578378b2190c"
  },
  {
    "url": "assets/js/58.bc4c006c.js",
    "revision": "37fd1b76e568ee63ee04e810bc0591ee"
  },
  {
    "url": "assets/js/59.43861550.js",
    "revision": "6993f249e72f7305079d0384bcfe98f1"
  },
  {
    "url": "assets/js/6.cba5b5f7.js",
    "revision": "d7b453e667f1d422af5891650f2310af"
  },
  {
    "url": "assets/js/60.5c3d492a.js",
    "revision": "7e4861dccd9c98bce0c30c6a01369f5c"
  },
  {
    "url": "assets/js/61.152bd200.js",
    "revision": "07b7fe195c1a390f20953cecd162c7c1"
  },
  {
    "url": "assets/js/62.3f3beff2.js",
    "revision": "af70e6486218bcdb9b2188a3ce0aec1b"
  },
  {
    "url": "assets/js/63.d9df315d.js",
    "revision": "dab583e36e1a9872b70587112d7f3363"
  },
  {
    "url": "assets/js/64.c3368de3.js",
    "revision": "b2d21eb2ee3daacb759747f0fce11d0f"
  },
  {
    "url": "assets/js/65.18d085b5.js",
    "revision": "cbd3ec57a065a1e7d9924d3ea1e89e30"
  },
  {
    "url": "assets/js/66.22f41b03.js",
    "revision": "3d0c5a9e128dd5c4a9bf0fe7b36828e5"
  },
  {
    "url": "assets/js/67.ccd4f79a.js",
    "revision": "dcd7dd26106f09922bdccfbfd18de0bb"
  },
  {
    "url": "assets/js/68.ed3e21f9.js",
    "revision": "4afcd2561fb8d6d9394767494fe8ff7b"
  },
  {
    "url": "assets/js/69.6f4b0d11.js",
    "revision": "045bb8ba2a08b18775b33748902dcb78"
  },
  {
    "url": "assets/js/7.48d055cc.js",
    "revision": "5cf16a60dc3e5ad93fe89a7a9334716d"
  },
  {
    "url": "assets/js/70.063f487a.js",
    "revision": "eb26aba4c4fa37feb754691b8bbf6790"
  },
  {
    "url": "assets/js/71.a68caad0.js",
    "revision": "d370def56518acf77bafe5f06e875fbb"
  },
  {
    "url": "assets/js/72.78f9d1f5.js",
    "revision": "9d2c74dd95f43303e20e1a6cae36e717"
  },
  {
    "url": "assets/js/73.c75fc31e.js",
    "revision": "210e932b3035e21dc1380e666e4078e2"
  },
  {
    "url": "assets/js/74.1edf86f7.js",
    "revision": "1e821b23ffbe8892bcf797775d95dcb9"
  },
  {
    "url": "assets/js/75.98a446a9.js",
    "revision": "835e7d6d1372d0b0d41f73f0a512cc6b"
  },
  {
    "url": "assets/js/76.7e66af82.js",
    "revision": "7827963f32b5d48b4cddfa81a314520a"
  },
  {
    "url": "assets/js/77.5bbd39e1.js",
    "revision": "63acec079643e111687e55b4c29b45e7"
  },
  {
    "url": "assets/js/78.c33db114.js",
    "revision": "f8ccbc5952b15dd90ee29f9a1b0cb267"
  },
  {
    "url": "assets/js/79.f34f4610.js",
    "revision": "6918327e3fea9a1b7323c502e2f74d68"
  },
  {
    "url": "assets/js/8.c666f59d.js",
    "revision": "44466a50669b41fba177cc8356eb31cd"
  },
  {
    "url": "assets/js/80.d6c640dd.js",
    "revision": "278e2c215927e4e01e0466419ebe4f6b"
  },
  {
    "url": "assets/js/81.78269340.js",
    "revision": "19d647962eac89fba685d67633b8f165"
  },
  {
    "url": "assets/js/82.75d4ed73.js",
    "revision": "e2d782b029b760b5c91f32201158a443"
  },
  {
    "url": "assets/js/83.0c62cf16.js",
    "revision": "d29f37d6f048bae1ab6a7172b98f483a"
  },
  {
    "url": "assets/js/84.88697b92.js",
    "revision": "34d3dcdb27e8fb309eeadaebaf180c39"
  },
  {
    "url": "assets/js/85.4d182810.js",
    "revision": "117037eaf0629ef82ded67048bd670bb"
  },
  {
    "url": "assets/js/86.9d665724.js",
    "revision": "333bef7bcb349eb65ce30c9a759254e9"
  },
  {
    "url": "assets/js/87.449877f3.js",
    "revision": "578185d2f5d1e82ff35b6405456ed58d"
  },
  {
    "url": "assets/js/88.393b9ad1.js",
    "revision": "11323f2a6bef8708a9a5b564d49c8c3a"
  },
  {
    "url": "assets/js/89.32df998e.js",
    "revision": "99307d3db922560ae21fdeecf39e598e"
  },
  {
    "url": "assets/js/9.5ef2c3d8.js",
    "revision": "4093e4c300d3e901fca55f4ef020d5a1"
  },
  {
    "url": "assets/js/90.82aff58f.js",
    "revision": "64ac2857c091f50b284f416ab3792644"
  },
  {
    "url": "assets/js/91.973a20fb.js",
    "revision": "4710772ead7555f6b19587e5b09c8284"
  },
  {
    "url": "assets/js/92.da4e742f.js",
    "revision": "83e51cfdce845d41e9399ee00bfba313"
  },
  {
    "url": "assets/js/93.6037d68a.js",
    "revision": "b35542369ad168fcc48baf6761f55d87"
  },
  {
    "url": "assets/js/94.98ac7d41.js",
    "revision": "2a8eccba327951ffd796383e71c5d30a"
  },
  {
    "url": "assets/js/95.fc5471c9.js",
    "revision": "02c85cd61835790933bfb19193b76624"
  },
  {
    "url": "assets/js/96.5a7f798e.js",
    "revision": "65aac3896da5a221063042d768baf947"
  },
  {
    "url": "assets/js/97.fa317267.js",
    "revision": "40a03c34d9883b15b5959e5a49f57848"
  },
  {
    "url": "assets/js/app.a56489c3.js",
    "revision": "018c1b70a3b8c1b4fd76b7b4b4fd8e05"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/database/index.html",
    "revision": "6a8ecbc8de343dd611b008bedbd5ee52"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "6ce8e8ba088e5a0dad235cc945b08a99"
  },
  {
    "url": "categories/front/index.html",
    "revision": "867f538c89c975f58f74c2dca1739bc3"
  },
  {
    "url": "categories/git/index.html",
    "revision": "bfc3129e076d0a2bc4f1d97d7abcf393"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "a939c97decd3b53d232d9f54ed94f5aa"
  },
  {
    "url": "categories/index.html",
    "revision": "43e9cd62d86251ff3df778a79563a6c6"
  },
  {
    "url": "categories/java/index.html",
    "revision": "53cdcfb4e6931eb3d2623740d306f95c"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "3fd5d0f45d99f482616970b09ca3e85e"
  },
  {
    "url": "categories/mq/index.html",
    "revision": "b73871e305cf63e25e2dbe7dcc4aa9cb"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "4f50ca55bb7883fd8f2d0d722e94373a"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "c53d558f2adc8f6c675aad550eab7f39"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "e4a36989b91d3f817a73739c61949099"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "80c3a54bc4b04d2fa3d6001263ced885"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "adba8de821d07409543d81c154d8c4d2"
  },
  {
    "url": "categories/python/index.html",
    "revision": "6423f1bff9ea7d7abb1de78d95646929"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "224be65486ce92acad2075c762e092f5"
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
    "revision": "c09d032a8e53461c38e97b368430e17c"
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
    "url": "posts/database/SQL-constraints.html",
    "revision": "07b0cd98fcf9ee62b59e89cf8e8cf605"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "7f46b4c0d4257811b9f74a7b33845c07"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "fe2b7c415987d813bcea4b3c743d2365"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "8ea9aa621d0f2bc518542c17a5bfcc40"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "6ce2c72d9bb82d5069c708983ff5ecca"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "36aebb394819500d360889e247644392"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "a27e6797642fbc609aa79410db344fcc"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "5bd16e2bf84dbb305f67d87fc8d80fb4"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "e3e2c51041bdd660a91d9ec2ab1550c2"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "fa162d4af019295affec7389732804e3"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "53f4be36c5a6733a5fe415be9d7cade0"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "208b6dff2147834dc138604884cbcc1f"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "b575fae5628eeb0d5b03d70aca4a9354"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "d576e823785279f32b98c6b04b5c65bf"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "905f7fe605b79d36ec68d1973e9cffe9"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "c88460cf30a4bd59fab84e4a1113a462"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "9405ad9d2e103f8127ad63ebca10ad59"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "e41d34a2f6ec915463cf1219c5ee7986"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "83907e7a68105be4ad9dab026836cc6e"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "fb70f3fc7f321c3517828b30060413ac"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "5ff933ab59fc146f56f3883a359fec97"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "d4c3cd34443fa7e2982961eb977e6344"
  },
  {
    "url": "posts/java/java-spring-MyBatis-Annotation.html",
    "revision": "f400772e6ab3c872f338ba55585d5a86"
  },
  {
    "url": "posts/java/java-Tetris.html",
    "revision": "e52dc2c60d1a34f1eb4d2555207de6a8"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "8509333b018de502de082afd39963e58"
  },
  {
    "url": "posts/java/spring-RedisTemplate.html",
    "revision": "96d4e46d8525dc0854206c20b67639f4"
  },
  {
    "url": "posts/java/springboot-schedule-task.html",
    "revision": "e23b2c62bad68b104109fd2aad9b8eb4"
  },
  {
    "url": "posts/linux/linux-ecs.html",
    "revision": "3d5670f70c22e817d57df2dd3e7f8282"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "f8975cb3b5f405cd2287cdb7b5e2a4d7"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "50e801f43be5aaa9643b64b2b3a24b6a"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "92c1b5cd2fa46785f8443b8987c58831"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "25d21e1a947c1f9b385b81ce61683e29"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "ea8756710b4601f561b818e582a89ab2"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "ec3d0041a079f1b45a64a9fd73d21047"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "eb2bc88a8c87995684430570a73b2215"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "3ae62386b68d673fc44ec70fddaf7a7a"
  },
  {
    "url": "posts/mq/why-mq.html",
    "revision": "8a834e237da99287592909ebb8b0ec56"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "b49c29781a0ab3e0a13ec92d6fa157cb"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "51ae39af8d02dd0ff6ef5b2c4498f231"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "b31efd8094d12eafa1101d855efd137e"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "3b2930b1ca65fd900c44bd8647e126a2"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "e12955fefaba02d32eb5b9b33c72c6e9"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "8575bc54aa1c975da3a7148e71e5279f"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "7c5877653d7598687818141b2748d4fd"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "f0aa80faf408a19830cd24a782e7c86d"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "6fe9eb72b436c3c71d5b95981951d863"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "431eca3bb371c4e3cce2109e8f448376"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "dc417289e322b5859cf4f4e72a224252"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "92aa5326530dacdb46fdfb64b92d56df"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "aa45d23dab10405572a447743bd8641e"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "103ad9cc76f347952e9528eeebceacb3"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "6e640e30c2c5aee8ece9408939f136f4"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "fc5d84ebd27f004f8086c66038cd6b60"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "2deb75346ba2a3125214d4b8bc5ceda0"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "34d84ccbc83bcd36ad2b131402278537"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "983db048d10a2e22fa773d01b6b90ac5"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "5e12533ba9dd24916d447d465c15296c"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "5061d7f7d806ba303d111e18b1d09140"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "dae9f983da0c5001c64b3790937a24a3"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "3924c2166ba1363dbf97feff9a1e4d92"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "7373c6e08a883350df2f4e8af8126319"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "60a3e3298ed1a6bc38bc3b7662847d78"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "486ea1e713c8b5de7e447037954c299b"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "72164402bb5136a0418fe46ae8fd50fe"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "798e4435b6ab9fa76e9b97d767b2f930"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "9de9de7f8d7a4c4ab69f15207213880d"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "c8cb6eed790666d4fb404392b336df97"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "f29d09f4498ae6297d6a1e77d4be5887"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "e5ce9c5f2cf9bcd26bfbc4beaecc1ab0"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "8baef248b6a595d80c37d12ae61195f1"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "68939ececae3c369aa39198863f6dee9"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "eaa03a263b1a13f3688919ac343cbfc4"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "a98ce1b5f87b80bd02c5b4215c0fb619"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "eb55c9c37e72535f511aaef389a29a09"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "d1ccb956dbb8bf01214da146feb73e9a"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "0b82e23d2b720d63c0d2f5be10347fcc"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "d0e5d25bf77321e4ebe8445579310b1e"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "3c7af489a787f79d39b8b519e6bf3a89"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "d97d7df5fe8f5dbaa035bd67b1ff5027"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "d10d87fb2c9fdcb07801c8c0319ef04d"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "4351eda007ab4476d988b67cbc052e6b"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "cf1bd5e7485a21f751974326bc12c3bf"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "9132cbdc630ff889ffaefcc0a9d7b932"
  },
  {
    "url": "posts/python/what’s-new-in-python3-8.html",
    "revision": "ce986172cb877342ae4e80da52abcad8"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "70c5e1e88c44c39ae3838dcb1ee4b188"
  },
  {
    "url": "tag/api/index.html",
    "revision": "64c14965b37bb6eddc257f3602bff8ba"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "2cd943569034d067885c3171b4838540"
  },
  {
    "url": "tag/context/index.html",
    "revision": "cb6b8dc50bb9e4436fcf10ec55be6f80"
  },
  {
    "url": "tag/database/index.html",
    "revision": "8e6cd22ba77e2466fa048afa4113d246"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "29fdd54c2bcab9ded32b4a6ab262f43d"
  },
  {
    "url": "tag/git/index.html",
    "revision": "cc08fc0b89c8147de8d3b8301b0ba1a4"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "29157d06838739e0e81fc1a42e74aeb8"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "2a8adbeb1bbac4402e41639b88b93aa5"
  },
  {
    "url": "tag/index.html",
    "revision": "f358ef4dffc54f88373778fc0b4d8d42"
  },
  {
    "url": "tag/java/index.html",
    "revision": "52415c8b2c02b708d4dd70e1bec9b2aa"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "8b6df8ec46ee6a5d1861eb245cbe97df"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "bad32f7ce2fa8dd75c27d157b451457e"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "30059e809ffd97fb4ab93e10683cc834"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "795deb1a146c4961c0f640dce5245c02"
  },
  {
    "url": "tag/mq/index.html",
    "revision": "fdebe88583f2095aee227f5d306fa5cc"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "0ba32c5e0ea5b156adfaf3d738253b7b"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "15b7086b96966c5bf8fbd3c8f09ecffd"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "8ab15ea8a792133f7a19bde1957d3f7c"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "d376c85a522ac4293f89e08baa19b369"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "044353095ebc379c0fa2f7c7061d32b3"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "522a9663dbef21b40ee62e36de21e20d"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "9f4e0a634364c5014124128af8ab3aa5"
  },
  {
    "url": "tag/python/index.html",
    "revision": "2bb42c02de0b0ce6f48810581f66736d"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "ee61f4770f1904a836c9062a98ef9e51"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "c28500f5e13ec844b89e7be35a9fd5e6"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "ebed5ed46bcbcbe81fa321206e18db09"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "c98f3b94183f3715e69e4947910eb683"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "92248e306c111871beda902747a6b165"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "fd5d1a541aa522af195bd09f6b628b20"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "fea80903147c5c981b63469283e36db6"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "93127f2706a7ebbd859864dc76109ff9"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "0a6570ecec6428865b069b7826e32a76"
  },
  {
    "url": "timeline/index.html",
    "revision": "14e96c96549149748a69fce3813c738c"
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
