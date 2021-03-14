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
    "revision": "c877cace031b4c6a69b2ae9273623133"
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
    "url": "assets/js/45.7dd2def0.js",
    "revision": "99056ded84bef823a2290af55f87e998"
  },
  {
    "url": "assets/js/46.b0883c64.js",
    "revision": "92f5d652e3741ba9b57a40ca5d8c78fe"
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
    "url": "assets/js/app.2d7b9b89.js",
    "revision": "3a44b1d6195d6b8388016d184675270d"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/database/index.html",
    "revision": "241108614990adde508e037f7e22a7cc"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "b95043ec9efa3e5dc3e68d091d395e60"
  },
  {
    "url": "categories/front/index.html",
    "revision": "ab8999c8a49e4629231ace48c79067c8"
  },
  {
    "url": "categories/git/index.html",
    "revision": "0abab8f035c4b65990fecf51e8476787"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "925e2c23b3e8567ed081b31bdb1502b4"
  },
  {
    "url": "categories/index.html",
    "revision": "6ffdffd7f81caebe52dc901f8f786b10"
  },
  {
    "url": "categories/java/index.html",
    "revision": "1b868441388bb726812b7fd04ca53d0c"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "61711ee9f1f4b5e3b1dbc313e96b9e59"
  },
  {
    "url": "categories/mq/index.html",
    "revision": "c0d9e71d1974ee6fe6218e0c3e03254f"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "b2bab142515c02b685d466870b57cd63"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "cefc9bb8760e7fbfc4e7eb91570e8ee3"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "5b9c832441292f950275402400f23eba"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "41fc62e19b55d94129cd845c8f324fa9"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "916ad33d1d9f56e170477fa88c661651"
  },
  {
    "url": "categories/python/index.html",
    "revision": "1dd84a03edb57bceb0d555dc4817d62c"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "7f8bc944ebb01e6a8b3c669d27835488"
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
    "revision": "e9490b527c59c759a83cb9732375d57f"
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
    "revision": "9697250d55e9b3496cc0d24462592cb7"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "e5cf78a5db8c9438d6b1bc46b88c6464"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "d344bc677dc18eb73ef86cf4fd6ff351"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "2c93b85e65743ce5fa9086e5ff739031"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "1de460fba636b4ab7b865d7f2a06b3d4"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "e3ea6329a391e4d7c5e4af7e2afab8e9"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "550d4e1c9ad696b1adea80009de4a3ce"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "c98cfb6cda76f1dfb79f51151bf3ab4b"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "49e56cf8e5b0428fb698d634ab30d573"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "b8bf4f0da760859e20e5fb57382526c4"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "5de294633774c47db0d5d1da8248fcfb"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "ffb220b7dfb4f336cc55608ca1b55537"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "82eeaae510da50dd6d551522bec63de3"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "4cc9c86ddc0bf1d7eacb623a7b307213"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "8906718d23d64ddd051fb0bbbbd856dd"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "37fd17f63f3e4992bac4e1fd2365d0ec"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "b3515238d9dd0d578f0889cefe2dd729"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "6a46a751a59df1e7bab8d4d9c8440111"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "3ec41711680b54ba12fc91a3164eb072"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "1aacf6a2fc5bcba0c1fa8766b9d249ab"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "96a3025c7b1f6e1cbf1d494550775af7"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "a84609c22850e62ab475bfda13b315f9"
  },
  {
    "url": "posts/java/java-spring-MyBatis-Annotation.html",
    "revision": "508695f4b8f13bed200319f06a387186"
  },
  {
    "url": "posts/java/java-Tetris.html",
    "revision": "4deec107cf579c4181f51311de0fc521"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "4785e2d2c180f0b8f92072f5dffbe88c"
  },
  {
    "url": "posts/java/spring-RedisTemplate.html",
    "revision": "ce1991eede354dc2b8be8143965dc8f6"
  },
  {
    "url": "posts/java/springboot-schedule-task.html",
    "revision": "8dc373d96b8803e21bc22e7ded68742e"
  },
  {
    "url": "posts/linux/linux-ecs.html",
    "revision": "12e76da822d049fecd9a5fb55297a54c"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "1ab48bae28903325b44600ef04319407"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "c9ed01ee3e1f472d2cc53dc2e22dbbed"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "211d092ecff5480a33c2ce1ab1a4ca05"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "6820e0f07045b37496390a7c56918924"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "6fbd97b86f5cb643c83f117553cab2eb"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "41ba886fd5d9524f89e80834e717fdcc"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "bc5f3b73059c16aba56c52b40498182f"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "0bc5a9d1f05dd39096bc063eeacc3ef1"
  },
  {
    "url": "posts/mq/why-mq.html",
    "revision": "4c12b51002d103e415b97a1ed8563f5e"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "dc1560a0ba9c38f3fdbf267101719191"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "1eb11e1fca404c60a065d7070eba12f4"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "943ed162a9b215e5dfbd983916b38bc8"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "4b1521ec6cc366e0ce9d9c986ad9dc88"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "5498da8248bdc46132c1432badcad5a9"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "9bf8d4865a95909934cfca320eb623a5"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "65fd2b1f2aa4768c72d0297ae253cc67"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "f71148512f8e6fae659f48bc0f141ff9"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "41348112f75f451fb4c8d2fbd2cd2532"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "3b048ef9a2f362c072829c26ddd7ac38"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "5f955605dc957ff1747f99e09523a3c9"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "13de3eeae05615c3aefe0fa978444a69"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "1f5809013906f161f243b2fa9a47ec65"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "f1afc1c18a6ef5623fa649d2713e3e33"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "4123e2c4e1070af8d896b1cf87573b48"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "a6ba65dc05eeba87d209a2966876e57f"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "0a0eb781222aa6a3cc41b5386ad80ca7"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "c11e7049ab29977041ac4a3c32e0ff3e"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "15ff46074635a8fdddc5209c95ba49c2"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "80f5aaee2dbf1f227a869f8afd891688"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "20112924322922de6e64f95444e6ed6b"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "969d7834f3d1ba8ce00f40254ccec501"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "961f5bab1b90f0a1ff6da49452d34f1c"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "7f80edcd4f5f80e5e1c921423fbeb3d1"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "c9808ff81ff358d4ec5059ae8f63be82"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "2cfec3c19c1dcaa96660cc040ff7a17e"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "dd70fd0769851a537c09a3404c4060b3"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "180c14edd6ecf8eace1cc07000f354fd"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "eff8a9117682bc57f88451180ab0ff4b"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "8cee329a1a926f3760ce94a1c9c8c9c5"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "7989fd491997cc7b8c6efa90ced5527d"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "614338dd6e0370ed9d0298cca836db79"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "e7fc8abb574671ff27d7558b3513aaf4"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "3172096abfc6d9d65b0602d8ea0c20d1"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "14a5ca339f84edc0f3894f960b3a7a7c"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "33134a1be227dee69bd0245975857e39"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "c52ea0a740c36d43bf103f3899d5aa08"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "3a680dad9ae5880da431931f08cedbed"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "7b099a7e74f6065ebc3d8e087099dd7d"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "10fd987d55e2a0a4e67ce0a5b31e5db4"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "2a185fcf8e7070e3e0c8711ece1bd207"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "45a46770a9c0886c7d59c5173fb4f9ea"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "e903917077edd76192c0ae9f19b87b6b"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "ce89b83a84098c430c5e01843993885d"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "a29223f962d3bce83f55041aa51045e2"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "1379fd4002ca5c18d41e6a2cd71cd80b"
  },
  {
    "url": "posts/python/what’s-new-in-python3-8.html",
    "revision": "553f3ee673bc04d5cc34b94cb2ad289f"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "af5d3561299eb25d48c3e5714cf7c52d"
  },
  {
    "url": "tag/api/index.html",
    "revision": "4d82dd4e03a34c6212ae0de56c65e213"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "e0a7bd587320b14af47212f4b787e449"
  },
  {
    "url": "tag/context/index.html",
    "revision": "3ec1ae751973fda90b143ce6a67bb963"
  },
  {
    "url": "tag/database/index.html",
    "revision": "e393a40307dc8419e6349a055e33be08"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "41702e90673b33510e7546b5cbc7184e"
  },
  {
    "url": "tag/git/index.html",
    "revision": "c6c41f3da23e913f25cff0c28b3ba2a7"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "b95ba21820e30c472fb319a7bb73241e"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "fff60d91dc45e20a5109f3981f4c0193"
  },
  {
    "url": "tag/index.html",
    "revision": "d60d0090825cbf2b68eea5344f03805f"
  },
  {
    "url": "tag/java/index.html",
    "revision": "322d87453001dc8dcc02d7d9e88f3206"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "e5581ae0836d689d4c410b7f43c72b64"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "171a4456e39ef56abcff0ebc3e57bbf5"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "f15e8bf498fb8291e59dd44d07c6d1b1"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "70a264a388c6a813a97f85fffb3d26d8"
  },
  {
    "url": "tag/mq/index.html",
    "revision": "934b4889013808aa81332ecea3ed30f5"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "4219eec34ab1e7805a99673ca6de37ec"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "64107fbd657366dd1b6aaf37532bf0e7"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "4fe83e8358c6dfc491fc72d68a2e228e"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "917ecf36d9a65603203cbfba6b19ad43"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "bd27273d061444c20f03ad60bd2ea9f9"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "baa55f410b670bd122acd4dd7383f6c0"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "5b0ce9a2a33dac016ba562aa35a08cdf"
  },
  {
    "url": "tag/python/index.html",
    "revision": "f3d84e37a2345ef974c5e3f033c13ed1"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "7e4b9af7105b95b52721f26c97837aac"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "7410b1755230740f27bff993279b9424"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "e2e20c95c622763f9305568b13fc98c5"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "bfba9b1a47f0aad0d41556dcc9d452e3"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "c2939a794fbb8abe5f100a3cb0ba9eb9"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "788e7a98bd9cf3c6cca3c1ccd0fa8dcb"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "bb11e5438c4c706d26fc69fc569e21df"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "ca31eb0dabdaec03c9dd58280566e896"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "cec5cf605284e3a485c99167d76ddc72"
  },
  {
    "url": "timeline/index.html",
    "revision": "032ceb97035b49b32d0abe781f47c35e"
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
