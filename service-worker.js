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
    "revision": "ec483712af768f4fc1ccfff9793b39d5"
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
    "url": "assets/js/14.bfc2a218.js",
    "revision": "3007b16023a2322a7453a9831ed197cd"
  },
  {
    "url": "assets/js/15.d5ee8398.js",
    "revision": "7c2a3552e052f54bc3d44f2b17e64d0d"
  },
  {
    "url": "assets/js/16.4d811626.js",
    "revision": "d462617a54e5d6745bd3ced6cd19a42c"
  },
  {
    "url": "assets/js/17.bcbd520c.js",
    "revision": "aefe17d7f1072bfa881c8a1fcc507cfb"
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
    "url": "assets/js/29.02a8263d.js",
    "revision": "b171b415db624c41fb7ea337534d9cb1"
  },
  {
    "url": "assets/js/3.18a5c578.js",
    "revision": "67e60864880724d775316ccc64a58870"
  },
  {
    "url": "assets/js/30.a943bfca.js",
    "revision": "edd8948110ad379d87f8a39b9ad49113"
  },
  {
    "url": "assets/js/31.6535c455.js",
    "revision": "62514a6adb35da2b5061e0c78a994d3a"
  },
  {
    "url": "assets/js/32.e44df740.js",
    "revision": "84c7d0fc7cad61647a15a4ffb55e6e81"
  },
  {
    "url": "assets/js/33.ae4f8741.js",
    "revision": "d74473026aaaa2834063153ea03851d6"
  },
  {
    "url": "assets/js/34.b0a7935b.js",
    "revision": "d96c091934a0caef26f09ab065391a7d"
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
    "url": "assets/js/38.64f61fe9.js",
    "revision": "be108d83d05cc501fc915c1b0e1f838d"
  },
  {
    "url": "assets/js/39.f93bd47c.js",
    "revision": "527afe11a7ff84a82069fd1df83722b9"
  },
  {
    "url": "assets/js/4.6f793833.js",
    "revision": "2d695245e1a9a32e9524bfcf39667da0"
  },
  {
    "url": "assets/js/40.f58595c3.js",
    "revision": "66413619e5a101cb00ca192aad6a7700"
  },
  {
    "url": "assets/js/41.30fb380d.js",
    "revision": "fb6a2f6d311fdbdff1b89803a16b4d16"
  },
  {
    "url": "assets/js/42.367522df.js",
    "revision": "e123acfbf5bdd3ab5275daae0b1a6b2c"
  },
  {
    "url": "assets/js/43.d133753c.js",
    "revision": "978a7aaa805e971392a0771522d25600"
  },
  {
    "url": "assets/js/44.e56cba17.js",
    "revision": "42254409019f668250cf1a27ff65bb1a"
  },
  {
    "url": "assets/js/45.bac7d62f.js",
    "revision": "a4d0fc544c97b7a7bb9e9901f9cd4626"
  },
  {
    "url": "assets/js/46.bbb8a3b6.js",
    "revision": "fd6234c216e13f868f66b71142fe7a5c"
  },
  {
    "url": "assets/js/47.f95e16db.js",
    "revision": "610bc7eb7b03165096da0d6c8fe5fb98"
  },
  {
    "url": "assets/js/48.3c7b5786.js",
    "revision": "5f95a397b84ba641fb2e0108878a0f90"
  },
  {
    "url": "assets/js/49.cbb7f66b.js",
    "revision": "ca4831f72f6ec958fc5b7ac011183bf6"
  },
  {
    "url": "assets/js/5.e7a3af46.js",
    "revision": "33e69efac045f653ca2cb8e00b05e0d1"
  },
  {
    "url": "assets/js/50.9a122eb5.js",
    "revision": "6d00351b38df9b55a67607e4c841ee80"
  },
  {
    "url": "assets/js/51.bbf9fbaf.js",
    "revision": "c337486ed76ffc6603219acb671acae6"
  },
  {
    "url": "assets/js/52.91cbb362.js",
    "revision": "7f64203a6312d694eb8feded6de91324"
  },
  {
    "url": "assets/js/53.3f0b7a9f.js",
    "revision": "f01a469d4de1dd2d556256b7877bef3f"
  },
  {
    "url": "assets/js/54.4bd6814e.js",
    "revision": "a1b3e34e68967f084230d0ff8a727598"
  },
  {
    "url": "assets/js/55.a9b28be7.js",
    "revision": "ca61a12b53bc0401acff346d74eb4c76"
  },
  {
    "url": "assets/js/56.ea2d7cab.js",
    "revision": "31d62b8db71c36fe19a2a0057d73b552"
  },
  {
    "url": "assets/js/57.9d645970.js",
    "revision": "cf8b3c46ef7333ed6b9931f02a9546ff"
  },
  {
    "url": "assets/js/58.a3d70080.js",
    "revision": "549f3fba7612c8ca31fe9a954175398e"
  },
  {
    "url": "assets/js/59.eca2c858.js",
    "revision": "9b5e5cc0085daa461795c20a2361cc82"
  },
  {
    "url": "assets/js/6.cba5b5f7.js",
    "revision": "d7b453e667f1d422af5891650f2310af"
  },
  {
    "url": "assets/js/60.3a89f36e.js",
    "revision": "967ce091177c104c41c2519c022752fe"
  },
  {
    "url": "assets/js/61.c2e52148.js",
    "revision": "83c5e3b281efb0a9fdc2e3c9c1c0cb33"
  },
  {
    "url": "assets/js/62.e4ba6970.js",
    "revision": "5422f602372e2b443c0be16d7787bda7"
  },
  {
    "url": "assets/js/63.d234a0f2.js",
    "revision": "093da1bc8f95ee3b8bd3513af791c893"
  },
  {
    "url": "assets/js/64.07251100.js",
    "revision": "531796320eb92238ad5bca02ff23e955"
  },
  {
    "url": "assets/js/65.b0cce24b.js",
    "revision": "a979ed2d5d437515d43ec23727d34a42"
  },
  {
    "url": "assets/js/66.d126fd8f.js",
    "revision": "a612c2c1d542b0ce465fc4c44403c9be"
  },
  {
    "url": "assets/js/67.fcd1d13b.js",
    "revision": "8a54d778937387bf265a81539bd24f57"
  },
  {
    "url": "assets/js/68.9af875fe.js",
    "revision": "615c553cb8378035985116849a54966b"
  },
  {
    "url": "assets/js/69.25522f0e.js",
    "revision": "80cd6f1b20f3c1d22993863bb55ecf53"
  },
  {
    "url": "assets/js/7.48d055cc.js",
    "revision": "5cf16a60dc3e5ad93fe89a7a9334716d"
  },
  {
    "url": "assets/js/70.7cba918e.js",
    "revision": "3dc4e029eafb518ed64996c095b634d9"
  },
  {
    "url": "assets/js/71.b138e436.js",
    "revision": "70bad5d597b40a91c27cb4fab55f00ad"
  },
  {
    "url": "assets/js/72.d8d1bf20.js",
    "revision": "17f9f488663834f25ddcb64ce668daa5"
  },
  {
    "url": "assets/js/73.a9e2faea.js",
    "revision": "9f1c717fb645d49ff0cd2476ab291743"
  },
  {
    "url": "assets/js/74.dca92a2f.js",
    "revision": "e94fd9423d148d69229c9f1dcdda0bb2"
  },
  {
    "url": "assets/js/75.cd501ca6.js",
    "revision": "1ea2c453f490f6012c43a6b19d5fc288"
  },
  {
    "url": "assets/js/76.abd26b63.js",
    "revision": "395705d02894770eb233554f19fa6e8a"
  },
  {
    "url": "assets/js/77.a9eedc7f.js",
    "revision": "02315f32085fb9d91d9b27af79953ed1"
  },
  {
    "url": "assets/js/78.b9eb0005.js",
    "revision": "b5c1578f21a61c842eaa43d9b7de2aee"
  },
  {
    "url": "assets/js/79.abbfe44f.js",
    "revision": "b6c2ceea0049bad33874ca79e3d2d868"
  },
  {
    "url": "assets/js/8.c666f59d.js",
    "revision": "44466a50669b41fba177cc8356eb31cd"
  },
  {
    "url": "assets/js/80.39d02ed4.js",
    "revision": "6c72c26b7c8b37d8361e583a8e436e25"
  },
  {
    "url": "assets/js/81.0c16e67e.js",
    "revision": "544448d007222b7ac6a475e2b26a057c"
  },
  {
    "url": "assets/js/82.2a18635e.js",
    "revision": "1a2d5f5476b9f6588d15174b877cc8eb"
  },
  {
    "url": "assets/js/83.0c2cd70a.js",
    "revision": "1115b2695a31ce974f63d06ab2dbeb3d"
  },
  {
    "url": "assets/js/84.0420b88c.js",
    "revision": "3a01bc9cab78a7f2a391a737dc6a5292"
  },
  {
    "url": "assets/js/85.153e3ff6.js",
    "revision": "b62fd1d7141ac31f14be32f56e686138"
  },
  {
    "url": "assets/js/86.e7cef0d1.js",
    "revision": "7174d7a4c175b956c739b362b04352c5"
  },
  {
    "url": "assets/js/87.2aa43374.js",
    "revision": "eb0200740f4f3ba8dd93e0118c91fbe3"
  },
  {
    "url": "assets/js/88.2acf8ef5.js",
    "revision": "5a8e035000fee5db401caf949443fc7b"
  },
  {
    "url": "assets/js/89.177fce1d.js",
    "revision": "c9dd7951ca6347371e4a92ed9d688f03"
  },
  {
    "url": "assets/js/9.bc76349c.js",
    "revision": "323a74563d04623a916818579d794d56"
  },
  {
    "url": "assets/js/90.2992c0e3.js",
    "revision": "77d11df4d9c6dbeb3cd09e0bbd8d0fbf"
  },
  {
    "url": "assets/js/91.2217d24f.js",
    "revision": "1334f623fe3750d1abe08d1b6e6d30f3"
  },
  {
    "url": "assets/js/92.6e878d97.js",
    "revision": "1f2d47c10fd1971b19e4f0acb10c6a8c"
  },
  {
    "url": "assets/js/93.11248167.js",
    "revision": "befe50c2c175001cd67840ed65553f22"
  },
  {
    "url": "assets/js/94.509992ed.js",
    "revision": "27ca1bbadabe728fd2a74b5be3204f67"
  },
  {
    "url": "assets/js/app.5deb0cb0.js",
    "revision": "6e49628e64fc571d20dae81ed9bc70d8"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/database/index.html",
    "revision": "e19e6e234ca70f88978889203ba9bb82"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "d44be14d5b3df4f50e02eb0123bf3e82"
  },
  {
    "url": "categories/front/index.html",
    "revision": "4a4088235e13705402abc9a70f828a05"
  },
  {
    "url": "categories/git/index.html",
    "revision": "bc181c2f37e62a35e700094145f1ba13"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "dc27937760c09c81d5a5863864a53da7"
  },
  {
    "url": "categories/index.html",
    "revision": "0ffc29af5f08d6cb6519df475f95e534"
  },
  {
    "url": "categories/java/index.html",
    "revision": "91cdac27d1a5b3ae4a6b8570a971b3b9"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "889528437124727fc447ec3c12ca1c8e"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "e8e6161396ff965f3c202ad8e380c298"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "9664479291b360ec06ff5b460f77e314"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "da31c775a748c3abaad14c8de59d0c9a"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "075430dd054138661b8200921dc50e8a"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "0927d69f50f5e7f4c22913b4c9372189"
  },
  {
    "url": "categories/python/index.html",
    "revision": "2019e9350162466f76f8e0df6e164092"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "c8cd188509742f8aa2f7ec9317f091bd"
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
    "revision": "bc3e33a397db0fafe04b7d7f9b1f23b1"
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
    "revision": "ce36f150b9e8044c211eab2f0541d6ff"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "8cb087e70ee81c9a63b3165ff4322860"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "28c7bc576e56578f5ac36d5e7ed8d8d2"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "12a33b3d65116746d9686376d419a1e6"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "0bec1edb10129859fae25d968cacd9ef"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "9168b89e39b53ac50afa388cc3edf37f"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "f64cf5577cb985a32917c2b9f9cd3bdf"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "f91d8a87148c5542305da67413f5dee2"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "e75ef91372b937dd577e0834e707282c"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "a95466116fa0a029133788300b6f9ac0"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "3be435215158512e4522d4378e805bfb"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "11480e5f5e3dbdd047a93afb99b6d986"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "af8e46a31707cd0775e6171b9bc01523"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "809a3e070bf9dac9f303079bf36a3e59"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "ef5a22584a911683194bb25ea818f089"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "f07b62b5d88e85b0b12b0028ed53030f"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "654f937de5190180d16b03e41fc13995"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "1aaf62528a75ae66c388800402bfe8f6"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "ef3878dbbeb3f0cb51f7866309f3bf33"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "e0326bfd9793c1df59efbad7aae7bb70"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "092a3e0ed15c4c2f710693bf1e540d1e"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "0ea0c9d84a66edec86c0e4f1d71b68b0"
  },
  {
    "url": "posts/java/java-spring-MyBatis-Annotation.html",
    "revision": "fc4709374276bfc861bb110476960eba"
  },
  {
    "url": "posts/java/java-Tetris.html",
    "revision": "ed2ae7ddb16f9b4abebeabef89169198"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "0eca45b9421842973ee7301dd8fdb8c0"
  },
  {
    "url": "posts/java/spring-RedisTemplate.html",
    "revision": "414999fad457da868b74986fd47335f1"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "78da4227d3ee7dde8ebbf0e2a3c61231"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "79e2112b7f5432b431373ef795c9be2b"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "91f657d43660d5d889acfb9dfa106d28"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "96305c1cd540154fc957bd39b5d96eae"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "c95491e91db5044d609d3aeaa651971c"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "580ba229c04b8b1d487f9a52e7b686a7"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "549367b660f68fd614722232ddc7c8af"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "c28b0c8cba181ed1e12c48bd4c3a11f7"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "88b8051c8e13287ad31bb19ea5f1724a"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "4fc127c06d17d0e4ab771ab3a7154133"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "b1f20ccf56789a6c9481586e6ed843b8"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "498359c845f9927de5ca92dbcfaa845d"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "0971fe1f9e0300c8458056c2393fce27"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "9ec2f24051304d5fe3a6ca9849b34f70"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "310bdc4025db5fd34652a60cc6b16d28"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "b9a39a4f1524de84b34003fadbf15edb"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "b05c30a257b31a74e6dad7f38c6aeac9"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "91174c643fbcd1d38724a26955e7c109"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "5c5fd70d39aff1a7f5f0e9e91e59b45c"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "dfca3cc330954ea21803517eb2c510b1"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "9cf3d9325220b959e38d0ed7a7c22784"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "aceaa72b95115500f70e3758052924c3"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "991d62aa868f53d53d8d2a8dd797e252"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "9ebfc7e604146c36bac43b9518244d54"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "d7685f9fd4a33b55a96dac10ad3822f2"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "33898c2e637944e47c74c239f50d81c9"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "5b9cb36a16d6a7fdef28aa399dea22e7"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "b2690d1734d2b99b32ae5721eb8ed685"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "4d3c13a87450edde93362d0fb8fb7ba2"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "bf1d244fd878f27b3b244f9c728a3256"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "44fa175d3ef4bb8ac649133e97fbd242"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "718f6834a18fc21f94f444c47a5d07f3"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "293f9c0574fbb3496a562a3b567df00f"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "55eaef30a0d467e464191c501e5e8052"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "4e66548119fffdd04f9489b2f8ec55f1"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "56b9a3711f97786fa2d3180596cfe431"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "b4b522b6670e98c8bd374d94e4ae621f"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "b6b10e42c7e6d7eccc18043f72d493c4"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "f0b5bf969c5b5744460b362170c30eaa"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "23fe2ee12b7c42aab18077354c6b2ea4"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "374159c1851a009b0fb068486acbc1c5"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "0816f65ea50ab616830d50b499205d25"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "094a1ace2fa4fb3a792498a2b62f1d89"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "f5268b2fba0a21d503dd3f2fd841fb76"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "e1306e894258507463c8df69448df8c3"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "a37f66682b056880cb1283e0e4a88a8e"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "d9a4a9c7124325733bb6263727aab547"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "da1474467051836fb4aeef441119aab9"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "5d11e87e1acc4c83bd760cff4521b4dd"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "28895d8e4053d4a41f3578dbc71c0bfa"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "394773b15816d898fe64d2194794cfd8"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "177ed1c94a55159563ae8da4d36345e8"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "e1232dd4bcf5ceb22a88178cf97f667f"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "881664babb4c6a11945a7178fd5525af"
  },
  {
    "url": "posts/python/what’s-new-in-python3-8.html",
    "revision": "226f99ce1e5fdf268df175de0a8450cd"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "2e74ffe02f0cf892d054a61931183a77"
  },
  {
    "url": "tag/api/index.html",
    "revision": "8670a34a0399d9796686e0188022e3ae"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "78d26d5bc82f63b39a8d9de064971771"
  },
  {
    "url": "tag/context/index.html",
    "revision": "4dd6f01e6d75c8f8f286430f982617bb"
  },
  {
    "url": "tag/database/index.html",
    "revision": "aaaf61009ddd0a2a7f34b7a84c053331"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "eb5625283353870b7887a16bceb1ddfe"
  },
  {
    "url": "tag/git/index.html",
    "revision": "bf98f47e814264404ed2301db164d542"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "bcad3363ae090680955c8d0e351b8118"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "29c2bdd250bbb77f6d727944274ff79f"
  },
  {
    "url": "tag/index.html",
    "revision": "8f8df487077726bac3eb67644567dab3"
  },
  {
    "url": "tag/java/index.html",
    "revision": "d68131aa4204c5364e421e13b9e73f13"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "3e54636047f19fba075e4f8b0779044f"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "8e5a3ffa42613b57b05a6e52ebdc0909"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "1b73f6830dec70f3f06ed519bbab4e83"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "6e77c8f707e27a916695af476ddde32f"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "3da20a8892735a6cedbe2180236eb61c"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "0607f0ea3fcf51c9f804228764d44ff9"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "66749a486fb1dbdfb6c9b03a6374a35c"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "5bd6eef3ad1f5930e9fa591ac12707d5"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "ce6f607c8469993c7575f946d3ae483e"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "834c496796832aedcef384a5fabef1ab"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "4b89585f9bac4f3ed98c771e6f60d79d"
  },
  {
    "url": "tag/python/index.html",
    "revision": "bd77d8957b6a8e72640c4c8a8341f45b"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "c4c5cc479492f8de16976df9de62dcf2"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "a3c42ef6cb07fc6172e96eae97801ce1"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "26afda1f92ca01fa4f051fe768badc0e"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "352c3b388bd848a50b0d61fe7965949e"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "ef4a992c05708c08325ebcb8be0c1269"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "a395aeb27af5feb01100c1c85ebc9226"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "a73705cd07fecc9249f5e3e9e9b7123e"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "d63f6dbee86c7eba5070ef3c29dbef67"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "2e5adb2056c25ef822f81a8dc6d3f6ac"
  },
  {
    "url": "timeline/index.html",
    "revision": "5842dd151753d74b44d0b574c087162c"
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
