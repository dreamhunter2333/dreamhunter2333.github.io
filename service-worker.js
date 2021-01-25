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
    "revision": "93276ee8856fe49a59090958cb8f91fc"
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
    "url": "assets/js/13.bd4c445b.js",
    "revision": "851cf66cd95d72685cd04677371b2736"
  },
  {
    "url": "assets/js/14.3bf0f901.js",
    "revision": "f277b5d970d263654da88e5887289f1e"
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
    "url": "assets/js/33.10601869.js",
    "revision": "7748666a3aa5cc92990ea6c4a55d71e4"
  },
  {
    "url": "assets/js/34.a9ba0d3d.js",
    "revision": "19bc60e6909c328ec309f8efcc1288df"
  },
  {
    "url": "assets/js/35.faa16ccc.js",
    "revision": "7d7b2ec1ed26320fea8b52d44620f19b"
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
    "url": "assets/js/84.b89073a3.js",
    "revision": "6c6cb061a070c037b30e53f144b709cf"
  },
  {
    "url": "assets/js/85.0f5570ab.js",
    "revision": "3c57d3c51b42196c02d11645aefa2e6f"
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
    "url": "assets/js/app.0962e15c.js",
    "revision": "4bf9d31631f35966bf6a9990a83c91f6"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/database/index.html",
    "revision": "4de1a377717a367302ecffe9569a1410"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "4a3aae3cf98df860ce861987ecc07719"
  },
  {
    "url": "categories/front/index.html",
    "revision": "96a5df407684770adf389e1a38dd50e5"
  },
  {
    "url": "categories/git/index.html",
    "revision": "7afdb5a77d44ddb1d0896ee3c110e10e"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "d996d5d5fcacb7acbba87abc94e937b6"
  },
  {
    "url": "categories/index.html",
    "revision": "1c77c65953308d411a7260b38434d9c1"
  },
  {
    "url": "categories/java/index.html",
    "revision": "5ac8b35bad96e19ace0512fb658285db"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "42631d46cf66817c4367a5c3ea483d82"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "7e72f4a9cbadf8c39c62cc191fb21b55"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "9e479b95abb1c76857ac435b147f58a5"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "314a9bd1f67b3c0093700b372ce01230"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "c13005826018ed00c750464de4841a22"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "46fbae020a1ab9045a61fd74a46ae340"
  },
  {
    "url": "categories/python/index.html",
    "revision": "fbfe406469e6a9543ae165caaa827304"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "929233f6686a53a741cd45a3c2ec59bf"
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
    "revision": "b3841516ca328b6ffc1eac8243fecb15"
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
    "revision": "8bd9cfc82a1a010a0ed8ec1aaa1f1fe5"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "9ad3952af825868f294bd3c28bbc2709"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "0f66be2e55264c55dffa730bc23415bd"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "2300050fd7ee386d97eee04fadb527c8"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "09aecf637b3386fa1e6300b1387adfc7"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "982b24ff06bef0ea794b18bd45f88f92"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "db971e66614ac396de936023f0b11b93"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "a1edc0658f6a2f0f95edf3737b62ef43"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "fb8e14706d83d09586166af635df6e14"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "d498659aa4855ef42a603702854c5102"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "baa06224ae0246fe30088e7f70b553af"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "62645a378c64da0abba39c61b44b13d2"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "2150e4cd4ee0d220df8229fe99a260e6"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "53759c96d736f2da997ea7a02d61e77c"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "12e402020668b3ec63001797ff4b28c7"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "134feb4c37f3b4c5191499d84b886cc5"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "b58ea2e40bba414e62ee0b1c2e719a24"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "401a9cddb4192a6a9660c8801becdc03"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "3b889368ebed09778278385c3bdd1b8d"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "0f741c0b76c61f037445b2dcb5b74406"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "4e37bc40c7f19468dcc7e501c52bb5ce"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "caf532df598130e4d356b94ce5fa070f"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "cd142c363023c6a87cf225c2efbaf01f"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "7be7df476b7dc5b41be07cda8fb89c7d"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "df711f8a3819ec3c8b8d4d7aab82e840"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "c5076a0e0df184fae9added3e49b13b4"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "eb35ba0d9124c87ba6d4c4a0154790d6"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "0018a5fb38e7c684b528934101a6e0b5"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "06dd9cc997cac1f395785d9ccc1b28e2"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "452382db7be8bb8b3248a0c1a0181d12"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "3aa6bb7195262d59270d32b5a528327c"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "248eafca99a70fd5b5cc6a90c44d108e"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "b4c10a16e0ceb27986baa60803c0f337"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "99d91deaa55bbf602c65c93307f2619c"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "7453f37defa3db6232af0308ec891104"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "1bdcd49ba08cb28e3d7196588deee356"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "bad53cbceed3940b4efcc48961d50778"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "417231da6cc12fd45167e47968603b02"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "58a437c59be8c49f9215b39fd4aeb2ef"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "d82360bfbb06e5ecbb090f888804270a"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "f617546974c3d19db5553e3428eb5c6e"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "89ca0a81f41b071f80fd6addfb06394c"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "c7ae346cf77f10d79d06c67f3054107e"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "e3621e379040fb8eb80a490259248852"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "d5e900951c1dc532c201a169b4a7bdda"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "bf2488fc10e7c73cee4d117cb8c4e021"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "03408df88e5183338bd93d6b33a890d6"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "0a8937cb6e7725edc7857d72cde3c356"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "1dd2eb6f253e0b9b5d5a759239d03f78"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "d4fc448dbb66221affc2c721178401ad"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "08bb7e6ed15451606cf5476648906a4f"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "cddecdce11b7c3b03c6a0e4d043cf5b0"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "9ce8e5f5571ee32b19196167a3df1a83"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "9ab616be244d44f683a38cd8e0defcf3"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "e9446cb93c5f6b716a4b45b5009478f8"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "5d4ee2822e39a95f3702d4bde7c6b8aa"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "1d897cf83862392bedc04d2561cf2a58"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "c8fbb80688357dae652b94235c077354"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "53c6b376dac607a6ad8725a27b2588e6"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "5af4fc886afd7e146f85a184af3dc420"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "90be99bd88a6d14dcb2b5e3b383c1efc"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "17127755fe319997ea00092386160d4f"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "58af8282402246345b087fe4c186ce08"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "0602c87ad6f1b355471b1d63d41ccf45"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "bbe99885154a968272ed8cf725fdd40e"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "53b1aefca0ba53903785e0d8e02d692b"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "41e408ffae7eee983e1c59944256fd84"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "df3456616e4484c4b95cc24e80099163"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "8cd6c1881ce39de2c231c19cdf4a7321"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "f811084d6c9b4b1de20b359789f371b8"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "ac02ee2994a1517dd9b761779a8e2c18"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "0c346517c88bb0b09c1e8fad34433b9f"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "213cd5368a91b1b052b0c87535eca459"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "773e2fb7bc9cfdd1431b6b28e15f0087"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "51426f070e3ce19e7a6249a69c9c7540"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "c31b1a5f1b956b3e124ef17010fdb009"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "d30c2ed07de74b0fa08ea0200da507a5"
  },
  {
    "url": "posts/python/what’s-new-in-python3-8.html",
    "revision": "983845ef94a45d81b44a2b6bc2dd80e7"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "63f67b903d44a3181a5474e839ad8a44"
  },
  {
    "url": "tag/api/index.html",
    "revision": "bf7254314554abeb305e7939f0467c63"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "532a361cbbeac96f9f2a4238377b33d5"
  },
  {
    "url": "tag/context/index.html",
    "revision": "b5dbe53b78d790e764c467b7d0135e26"
  },
  {
    "url": "tag/database/index.html",
    "revision": "2e3bd4ed37e16bdbd2a22c86bc9a8a79"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "e30e8c3e62f137053dbbf858b7789ad9"
  },
  {
    "url": "tag/git/index.html",
    "revision": "5da293a8870f999ff8bcdbe1a86772c5"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "cc2a0deef1c00570831ecf838a74720c"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "ae6a557d8e7c9e1108998a06e16662b7"
  },
  {
    "url": "tag/index.html",
    "revision": "c58df7e583917621b921bf458a4a9ba4"
  },
  {
    "url": "tag/java/index.html",
    "revision": "771f18661d478e2cc684561f0f0073ab"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "728bddd5d273f65e24d5370682b70692"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "f90fc96c884b0e95d17a5fc21bc2df0b"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "0af227ec0f5243960551cf2c925f6690"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "c190978edd5486bea6532cf4f3a5a778"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "782b27324a6d59fa336d845dd47e3db7"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "f25f0da29bbfe2b52ac114d813f5a073"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "f6444dc9eb60fb23cebd99990ca2cd27"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "306bcd0c65135c7f9631ce247688cd0f"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "325347fae303fcafffea6f81bc531ed9"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "42ba81bd99a2916128cc7ecd6d38a9f1"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "19c58584e9e6d6551372ba8fed9fae03"
  },
  {
    "url": "tag/python/index.html",
    "revision": "f4af67a40e4fba851ad92cbd6b75e6db"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "9f9910c687531df0bd483fafa835e839"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "80c963d6556ceb5a5cf5c502f1595207"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "0c86201f9889c1baf2c28382666d9f4b"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "7a767f8b9912399f25e60b6429d98220"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "e07cfa1c75931b7718a1b6e231f4d8f1"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "5169b2592f0dad3ca2856d75fdfcdd27"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "4051197b096f9767e7ce2f82f2c886ac"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "02ef484f6067bc149b75632ee27d33d8"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "45d16cf84a091e0c25445ffc5f64babb"
  },
  {
    "url": "timeline/index.html",
    "revision": "c48b82488a6ecc5ec9e72331bcb01683"
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
