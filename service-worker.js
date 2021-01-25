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
    "revision": "5b6cc0841489d2a89d844b928a986b7c"
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
    "url": "assets/js/34.a9ba0d3d.js",
    "revision": "19bc60e6909c328ec309f8efcc1288df"
  },
  {
    "url": "assets/js/35.94aaf8f8.js",
    "revision": "3d45caeb2843805d173a08c78a0f8b63"
  },
  {
    "url": "assets/js/36.2e5ee859.js",
    "revision": "b239797d654bd024913f79f51555a470"
  },
  {
    "url": "assets/js/37.a8a8acae.js",
    "revision": "6ee18641c21c08fbe7e4a164c66087a6"
  },
  {
    "url": "assets/js/38.e004370b.js",
    "revision": "b4bdd82dd0943f952bb63cfdc31d3bc8"
  },
  {
    "url": "assets/js/39.aecbb8a8.js",
    "revision": "a09cda037570fc28e0640cabf0e63a96"
  },
  {
    "url": "assets/js/4.6f793833.js",
    "revision": "2d695245e1a9a32e9524bfcf39667da0"
  },
  {
    "url": "assets/js/40.d78d4da0.js",
    "revision": "d4a96ccff851cfeebb167b9794d61ca3"
  },
  {
    "url": "assets/js/41.cd283502.js",
    "revision": "9a9b3676bc6a854081eefb374f087bfc"
  },
  {
    "url": "assets/js/42.c10d2cdb.js",
    "revision": "eb7c0e57af2181f3a92218a4e9dd8e49"
  },
  {
    "url": "assets/js/43.75035003.js",
    "revision": "1ed98f003cff313151ea2da27e0c61a8"
  },
  {
    "url": "assets/js/44.0347a5b7.js",
    "revision": "eead2362fc424e4fcc79a9021d951aaf"
  },
  {
    "url": "assets/js/45.4ff8a241.js",
    "revision": "a92908ea93d7e57fda4991160ef5ab32"
  },
  {
    "url": "assets/js/46.a7c764b3.js",
    "revision": "81d757d3fcb89489506776918496f331"
  },
  {
    "url": "assets/js/47.070562f9.js",
    "revision": "444110768c1d1e98580020380c849591"
  },
  {
    "url": "assets/js/48.0abb4bf7.js",
    "revision": "3651c01930e82aeddd93b5d379a2308a"
  },
  {
    "url": "assets/js/49.99fc6dfe.js",
    "revision": "e34bd7a74835d5194ebec0d29d65896a"
  },
  {
    "url": "assets/js/5.e7a3af46.js",
    "revision": "33e69efac045f653ca2cb8e00b05e0d1"
  },
  {
    "url": "assets/js/50.508c03e0.js",
    "revision": "08da64e157e491c02841c871b63cb7f7"
  },
  {
    "url": "assets/js/51.e4afa10a.js",
    "revision": "aedbb265f366dbf39f4969be420dceba"
  },
  {
    "url": "assets/js/52.754ba8dc.js",
    "revision": "de117a909a98a8f74943e99b6b28fe57"
  },
  {
    "url": "assets/js/53.409ef229.js",
    "revision": "b7a9d242a3ca31d255eee4513b259727"
  },
  {
    "url": "assets/js/54.9b565f4e.js",
    "revision": "b9d2b176f7a63588df643ef7d85ff877"
  },
  {
    "url": "assets/js/55.8e91badc.js",
    "revision": "44a6e2d067a14040095a247d86a32937"
  },
  {
    "url": "assets/js/56.3278b1f0.js",
    "revision": "75718433f8d8b5122b657748d862c42a"
  },
  {
    "url": "assets/js/57.b7eacfd7.js",
    "revision": "55622638c0fada8c311e7b5b1bd5d0c6"
  },
  {
    "url": "assets/js/58.a99ad179.js",
    "revision": "8c2024bf905f1cc48c96f7b7323e7282"
  },
  {
    "url": "assets/js/59.68a53d57.js",
    "revision": "6bcc0ab764ab76c294a84e2caf41acc2"
  },
  {
    "url": "assets/js/6.cba5b5f7.js",
    "revision": "d7b453e667f1d422af5891650f2310af"
  },
  {
    "url": "assets/js/60.7eafaf10.js",
    "revision": "e643c7a70d6553efdcf75c0af0029572"
  },
  {
    "url": "assets/js/61.d60748b8.js",
    "revision": "d5d07199d93067235af055e84da2a448"
  },
  {
    "url": "assets/js/62.ae9334c0.js",
    "revision": "d18a108d235dcd4764b2857209dbc768"
  },
  {
    "url": "assets/js/63.1bca9170.js",
    "revision": "08c1797f74fcfae88125b29f4ef39250"
  },
  {
    "url": "assets/js/64.d3ca35b3.js",
    "revision": "8dc73ab4fe6038b72f81efb9731aa1b1"
  },
  {
    "url": "assets/js/65.194743f0.js",
    "revision": "7c800cd839483c9debf5a5982d7aaf5a"
  },
  {
    "url": "assets/js/66.49fc97ce.js",
    "revision": "5c57f3da2ebf5e569c4fadafcfd8cab3"
  },
  {
    "url": "assets/js/67.de436c30.js",
    "revision": "7c7bde8fc43af78180b4aaa99d631578"
  },
  {
    "url": "assets/js/68.34d5c683.js",
    "revision": "f9eef512ced467669b4597343d3eae96"
  },
  {
    "url": "assets/js/69.00122ac4.js",
    "revision": "09af598b10221a7852b62c903926afc3"
  },
  {
    "url": "assets/js/7.48d055cc.js",
    "revision": "5cf16a60dc3e5ad93fe89a7a9334716d"
  },
  {
    "url": "assets/js/70.3e7d3147.js",
    "revision": "2478ec45e0160169943d04231a62e650"
  },
  {
    "url": "assets/js/71.29579951.js",
    "revision": "ca4676a0864c3ed08916e3b3bab71c8a"
  },
  {
    "url": "assets/js/72.c196184c.js",
    "revision": "41d14bb5bd675e5656492dcd8a1c2aa1"
  },
  {
    "url": "assets/js/73.eaaca413.js",
    "revision": "8180b1204f05a4977e73e89c44051b95"
  },
  {
    "url": "assets/js/74.f6e6c757.js",
    "revision": "b1d489a488d2054e8cb77ed41aa5dbbd"
  },
  {
    "url": "assets/js/75.f2c62346.js",
    "revision": "cbea1556d71ed1c3ffd3a42b7946a6ba"
  },
  {
    "url": "assets/js/76.48e3c105.js",
    "revision": "a247a2e5cfecb8434757ffabb7476a58"
  },
  {
    "url": "assets/js/77.eda79738.js",
    "revision": "5d9ed1865c2cbf18d53683b17aa33188"
  },
  {
    "url": "assets/js/78.9c242865.js",
    "revision": "9960735757cc6d2f0506b045d383734d"
  },
  {
    "url": "assets/js/79.21aa445a.js",
    "revision": "8b704987967855c8e31200f8df0a8e11"
  },
  {
    "url": "assets/js/8.c666f59d.js",
    "revision": "44466a50669b41fba177cc8356eb31cd"
  },
  {
    "url": "assets/js/80.b675e283.js",
    "revision": "d0a0d9837501409f4b16a64ca0dd966f"
  },
  {
    "url": "assets/js/81.32754564.js",
    "revision": "7de0ab291f6507cfebd3a6338235d7aa"
  },
  {
    "url": "assets/js/82.88e09c63.js",
    "revision": "76f95e4c1a61bca50fb82e681aa4eb94"
  },
  {
    "url": "assets/js/83.5c6c04ff.js",
    "revision": "2f49e7f8172c458b94d48be8e9266e54"
  },
  {
    "url": "assets/js/84.93618655.js",
    "revision": "3423acffbc678a5cc45737ffaee43329"
  },
  {
    "url": "assets/js/85.f7fefa4e.js",
    "revision": "88c6fc7cb0ef98611d8d12010f05eeb4"
  },
  {
    "url": "assets/js/86.906374cc.js",
    "revision": "6728cc44531d479d12c463dbbb92fcfd"
  },
  {
    "url": "assets/js/87.8589986a.js",
    "revision": "049af18cad3b4f4298d0e47a88a913f9"
  },
  {
    "url": "assets/js/88.cb84e572.js",
    "revision": "194a33688e80ed216507b7d730633d6d"
  },
  {
    "url": "assets/js/89.04930762.js",
    "revision": "3b7f99f2155966923cdaa025959e1254"
  },
  {
    "url": "assets/js/9.fe1c9fe5.js",
    "revision": "319ef027e447d88ab27e9b581449c797"
  },
  {
    "url": "assets/js/90.2c85bf18.js",
    "revision": "3e4668c603d82854cb300c9cd9f05798"
  },
  {
    "url": "assets/js/91.30a4c528.js",
    "revision": "3f04c7d53258162288c72afeca740d6d"
  },
  {
    "url": "assets/js/app.30820a69.js",
    "revision": "50391d11dc83c7aa1fa7c0a54a5723f7"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/database/index.html",
    "revision": "e221cfb381dc1ba0e460f10d9239d9ed"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "e33208f0017261ed9f7d387a1e13882b"
  },
  {
    "url": "categories/front/index.html",
    "revision": "43750f2364bb98b97ef54a88dabaf94f"
  },
  {
    "url": "categories/git/index.html",
    "revision": "eace01a8598ccdd8d149e8b99f836b24"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "83984a63ac7f289465dc938822beb076"
  },
  {
    "url": "categories/index.html",
    "revision": "21976e858cfedd57713b3cccde29d4bf"
  },
  {
    "url": "categories/java/index.html",
    "revision": "58ca39397da1d6873830dca3fb4df766"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "196dcbd87138df0a21354fe7110200c1"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "eca436442c19f07c0402f479afdb0a2c"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "9cd7b6c120c61575ac7bd2bce50c3087"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "5504aad9186c26e20d0c172486bc36af"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "87731c5fc998ca61f71e3ac66f7f32a1"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "599e0f4e49ba1ba16dd92d209ec0b5a7"
  },
  {
    "url": "categories/python/index.html",
    "revision": "3cdbf1638d077cd73f1b9f5b44ff7f7a"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "8f2100d3e898920e77d55d044a5a19d9"
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
    "revision": "580fc6c4bdf2d1160a88a81793466c14"
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
    "revision": "33b209cf94dc2fb36ca7e1dcc831f204"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "5d3abdd46f1e53ba2e60494e378077aa"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "f9ab2474ef7c6df7103a7f96c0486707"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "42140d34f8b66df1ef9dca840efef4cd"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "b3bb1e553bc4cc97eeaf66443695e068"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "b2a497d296a2d2bc6ecc24c1fa1c3f6d"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "5685d8cf7cc823413f8bb2200b955a36"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "823bace3bf4b2dac098e007c9c7f991d"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "3ffe9df15d40d5667b9475c953eda189"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "0c555e13bfdf8f3ee57d471463dc04aa"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "25948877522a94f82e65a0ccb2ec6a71"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "b8074964f7ba1fa4a5bb5cf561c3b26b"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "1d453c554abe3bd47cb7afd861f58771"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "09dbcbda49df109ac6e8a7377dc725b3"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "ed6a01b7191da62551972824518e82bb"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "cf4ce0f1d2b88069536945d189d3fc75"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "25d5568c2fa218a814b1bba7af62fccb"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "bdfe340dda97fab7dec1555214871beb"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "e34d6e547fdd5148010b813aa5c851b5"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "27a38c83add50120aa1b3bed839664cc"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "50de401a53dbf3a9cba2b5db8440155b"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "9ac49d4e2effdf0f62efab321d14f902"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "5616bce15bb0a7182cdf25792b9de752"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "178e44fdcb94ef4ae4dfffecefe92b4d"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "ab0345bd8c994227edbc9e05610cdee6"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "e178306ab2b82ae9731ad01ddd6542b9"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "442c28894d495e67f635c03581eafa46"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "89ec7f93e4e656be8da8d89f26860557"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "cb5525e474ae4469ecf95dfaecfa3b68"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "d0db7df50947feb812ce7414b5758c37"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "67b9c9c9977530cf5091bfbd548c4a76"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "bb536e09743b12925911d300ec16d181"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "6d364cc111e9c1b7a3720a0987e394aa"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "1aac50d6a5ba3acfc50e9aa42ec300cf"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "a48659793cf1ae740269583de7f520d1"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "5d911b9804e039da8067aa8e9f64e865"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "8be39e70869deb850b5c16ed158bf59a"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "95f91607dd48e2bde1dd5c192e3b61ae"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "745fd72d3106bdce1fa9d0c71e94bbf7"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "50a06b02a60adcf0a0eba41d6a3fa4bc"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "901216038a8cb7937de1de4df09b7b68"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "7f5a93e663a957843da2f01c8dc8b4d9"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "d6d7bfc1aeadff887e9faa8639fcc648"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "c2c9c035ae2dcd7d36f6267f95ad7dd3"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "34d66a578f4608d9b6e2a8a0036ab53f"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "42205e46543e885bacf9fd9d6d0bf341"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "81f0f40b33fed95abd9309945c125f64"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "d945b17db891e0152d59f2823428def7"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "5bd73f98fb7dece3bb5f5cb1c6138f67"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "8d5e94dd1adaa10ae262611171213f18"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "00ac8391fbfe66e22bbcae0ecdb81b0a"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "af37aa5c02e9b4d328e2197741f714fe"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "1701072acae22c625f8f05d89a6fac66"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "5734a3f3f20544bd201f00548620e953"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "22195a7778dada8550627ec6693193cf"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "6e86fd2bbc59a7927cc2f10eeb927c9f"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "5d610248deb785100422a417d6955131"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "1c5d8ad68c8c61c7c08f4c3cd2755a89"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "371e97a045b469df25b1f076d45cf453"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "70372afb9845bcf6e95ea03e39515e68"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "0ad84b59df27a1282224e7f48e2a0a2d"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "f11fa14d70d793e2e0d893259e09b6ee"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "46a3e6e68fc65a1ae97e3aa1064575ef"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "5a20cec321d509738ef75de244f45f20"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "cc52fe063f37913c58e2acaeb5ed7a12"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "2643d3b6091129a78104f21ba5f50e0f"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "7c787dfa7a1a619ab63c8c1072f56975"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "11d78b880eb9f6fbceb675e2b6da4a29"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "6c6a998cba51514e03e1ce914f37bde9"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "c0ab375562fe5396203090ce9c819925"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "f4d09f5dd130d060beb290729e3920dd"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "3ad1dbe8c265562030b9fc5b4a2c5bc1"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "5e014e34a654f3c73e95945ab614a488"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "572b931096c460a95423bdc868a3dfff"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "0bccda37a1632e32466a04a45c6f276e"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "0f43a0789dc4de2d9dd9dc2faf365faa"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "db6c6a50ecc5f96bf02b3fab1c8eccdc"
  },
  {
    "url": "posts/python/what’s-new-in-python3-8.html",
    "revision": "fe8c8e3de64cd456d30eadfb41ecb145"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "2e4a534c743a6dd16ab6ca74df10bb97"
  },
  {
    "url": "tag/api/index.html",
    "revision": "7ca45527d2ba8c52f69d948ea9fe1add"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "eb6fddc8f57cee682ef12e9a7a835936"
  },
  {
    "url": "tag/context/index.html",
    "revision": "e1328574874dddf1633191013d97c599"
  },
  {
    "url": "tag/database/index.html",
    "revision": "7bd6a49a1c2aeb91249066202d9d3f3c"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "190e2ff595d421de509f9ee263bee7e9"
  },
  {
    "url": "tag/git/index.html",
    "revision": "646d4f1940a8c4e5147423456b18bc7b"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "26675763735ac7bdac152b2ae25f9ab0"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "6d1a48a083df7cbda4a6b4395a3b20a7"
  },
  {
    "url": "tag/index.html",
    "revision": "523193436863276571dcfd0198ed7425"
  },
  {
    "url": "tag/java/index.html",
    "revision": "618bc9b99e45c240558d3f4d2932f7ce"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "1dc7a8158eb22d001fab8f21010e500f"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "9bf7dd385578e584cbabe7e020e1e190"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "27d473016d37cea8253629f832575490"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "210fcd505f3c782f984524b3fad7e615"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "9e62355c62b7138cb05ecb3111f2d396"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "0e99796bbe0d412a49e6d70bb2dccbb5"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "72e757ceb7dac6a314fc26c06b1ebe4e"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "c831c2c33fff8cee4f55caa6c3681d64"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "cc0b4fd59d89d77bb74081edd76cc92f"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "b0cae11a9d17bc33e542b70bb51a0627"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "9830eb89dcb92f6d6e330c1f9562a54e"
  },
  {
    "url": "tag/python/index.html",
    "revision": "befc43c2da66c44e7baedee772e4d25c"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "bfbcecab897cb1c7ff930a7825b34197"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "7f131726d8faef2d4ed3728606f3f5a6"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "15a086931ed8f7b87bca604ca489ba82"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "3c76441e054ca9f5b25cfe5f07a3da82"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "b4b6a3c47757b61d97bb911080464f17"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "9f3cbff20a82d817fcc49cd36167369f"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "d4a26cd94bd68d477814368bac390cd7"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "ed44ee2e161081f65c8e8650ce7c34d9"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "69a1d1d3b3c76824db76513284a90e08"
  },
  {
    "url": "timeline/index.html",
    "revision": "0a53cf5aa0d7c7f2b2fbf855e5c385e5"
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
