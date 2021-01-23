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
    "revision": "55711bb1d3027bd134fb36c7b6a41aa4"
  },
  {
    "url": "assets/css/0.styles.ea90bdd9.css",
    "revision": "9785d972252eeb0df8092eccffa8e7dd"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.51fa7f79.js",
    "revision": "923db34af8a65cc45aef51287a0e52d1"
  },
  {
    "url": "assets/js/10.336696b3.js",
    "revision": "133193a45e207f3912ce953c386cb358"
  },
  {
    "url": "assets/js/11.766a8ec9.js",
    "revision": "9a761f4ae702f326adcdb45fae2f7f2e"
  },
  {
    "url": "assets/js/12.11892371.js",
    "revision": "257af3d017c73579e1d3f147b520e4f7"
  },
  {
    "url": "assets/js/13.756c292d.js",
    "revision": "8fa8b40cef946296bc03747a1719dcdd"
  },
  {
    "url": "assets/js/14.41b7e304.js",
    "revision": "ab70822de2e57a5b9b8a9f15aa321a8b"
  },
  {
    "url": "assets/js/15.86090be9.js",
    "revision": "c62600960e45ab7875705c4621420d5f"
  },
  {
    "url": "assets/js/16.d19c7076.js",
    "revision": "7e06226f90d52fe8a44d6f4f84800fc0"
  },
  {
    "url": "assets/js/17.458f994d.js",
    "revision": "8f350f6ab4b7bcb70c0e3bee185a8f8a"
  },
  {
    "url": "assets/js/18.ced5236f.js",
    "revision": "a4382f531a758ff3036dfeffe98151d9"
  },
  {
    "url": "assets/js/19.52daf784.js",
    "revision": "323642695eb3a1bb4a4daed46ee25554"
  },
  {
    "url": "assets/js/20.7dd3bf88.js",
    "revision": "223873188e66433514cae44579d52325"
  },
  {
    "url": "assets/js/21.2ad96bd3.js",
    "revision": "85416c36d276a15ae6da34fdf3b3db11"
  },
  {
    "url": "assets/js/22.1b3cf3a6.js",
    "revision": "ec31af95bc129942a2a95f595abedc01"
  },
  {
    "url": "assets/js/23.4308c48c.js",
    "revision": "f7cb9959e46b29a21a1225f59f1d2b89"
  },
  {
    "url": "assets/js/24.a5ffc390.js",
    "revision": "1ebef030aa84a337dc9504754891c8bf"
  },
  {
    "url": "assets/js/25.093d1c26.js",
    "revision": "4fa5d79742405c70d5d7c70b59033faf"
  },
  {
    "url": "assets/js/26.cb938fcd.js",
    "revision": "684b8df997bd6b3b27b4bb04891f57d4"
  },
  {
    "url": "assets/js/27.493c93de.js",
    "revision": "6060d3d3383109ac3da30436587d68d5"
  },
  {
    "url": "assets/js/28.c3127d0a.js",
    "revision": "b6a542137417eace8b47826efef6e2b8"
  },
  {
    "url": "assets/js/29.f9033801.js",
    "revision": "aa7e2638a484d215bf416ff27f5560f3"
  },
  {
    "url": "assets/js/3.325ab0a6.js",
    "revision": "8e2d68ab952c10bc7ef0874e6dbeedfd"
  },
  {
    "url": "assets/js/30.eaba3aa8.js",
    "revision": "deacacd24f3f2b4be704a61af5e81932"
  },
  {
    "url": "assets/js/31.31258994.js",
    "revision": "3b631faec4c172753a1811beab402ba8"
  },
  {
    "url": "assets/js/32.27aa09ba.js",
    "revision": "955aadfe3ea890072069e5d4b227c26a"
  },
  {
    "url": "assets/js/33.f496ce9d.js",
    "revision": "a619ba69fbe0b86183ce508f39dddd0f"
  },
  {
    "url": "assets/js/34.3895aab5.js",
    "revision": "095440631d8e0dc83f49e9dd25cbbbbe"
  },
  {
    "url": "assets/js/35.e2b7e15e.js",
    "revision": "9b695f63fd99981eeb848ce5cfdd7b17"
  },
  {
    "url": "assets/js/36.7faaf3e4.js",
    "revision": "4710a066afcd08524901f013b1a9b1a9"
  },
  {
    "url": "assets/js/37.bcb7b560.js",
    "revision": "8c065028a26e612a66b9e60f0d864316"
  },
  {
    "url": "assets/js/38.d1b5319e.js",
    "revision": "662b3d2ca59a17ce33363e84e683d0d2"
  },
  {
    "url": "assets/js/39.e86dcb5a.js",
    "revision": "41d8a24c29f146b74cc8a27bdd3b4cd5"
  },
  {
    "url": "assets/js/4.96a4f898.js",
    "revision": "a14bf9ad47183792edbede46a86dafc3"
  },
  {
    "url": "assets/js/40.668f59a4.js",
    "revision": "8f28a6c4cc175a87481c23882d68c63e"
  },
  {
    "url": "assets/js/41.5b1d61db.js",
    "revision": "40ab6844db0b94022317a614dceb3e2c"
  },
  {
    "url": "assets/js/42.2d92bfb3.js",
    "revision": "f96fdff3b1ee03bb521e1837edd1436a"
  },
  {
    "url": "assets/js/43.463614a1.js",
    "revision": "c9ce0d1ac8e3365f2b5366f1ca3a9e1d"
  },
  {
    "url": "assets/js/44.b84a8e3f.js",
    "revision": "87a930559ec58a2fb1dc2ca3a9b8293b"
  },
  {
    "url": "assets/js/45.f29f18eb.js",
    "revision": "95e6563c3f76d24527273c75aeff4bec"
  },
  {
    "url": "assets/js/46.fffe0bb1.js",
    "revision": "01a0207b360517f186c968b8dfb9083b"
  },
  {
    "url": "assets/js/47.6dbec7a8.js",
    "revision": "c104040d9068a0dc5f9b8504881baa70"
  },
  {
    "url": "assets/js/48.4b6202e0.js",
    "revision": "6fb65fcd2b8fc08febb897b39282f690"
  },
  {
    "url": "assets/js/49.d5aef0ad.js",
    "revision": "a602498d9fad095749a21947c02dd51b"
  },
  {
    "url": "assets/js/5.73c3b6dc.js",
    "revision": "0b94b5effa1fea40d59b4d6260a8d069"
  },
  {
    "url": "assets/js/50.7dd08fa4.js",
    "revision": "b2ee1f9d56003b097b49d73be1a42a62"
  },
  {
    "url": "assets/js/51.f4d0c6f4.js",
    "revision": "1d4bc300f5db186f343953be6d44fd75"
  },
  {
    "url": "assets/js/52.668aadbe.js",
    "revision": "ec1d2002808c33dd4800d46b6478601f"
  },
  {
    "url": "assets/js/53.3986ce8e.js",
    "revision": "ac121d13761271f44953f1d2aebf8945"
  },
  {
    "url": "assets/js/54.0b55aadf.js",
    "revision": "4037e4f60262f6bb2d66f6c41da3a16b"
  },
  {
    "url": "assets/js/55.114b2def.js",
    "revision": "67986c9ef30a207a11197637e4cb1f3a"
  },
  {
    "url": "assets/js/56.cffea2c3.js",
    "revision": "9e3e77e605f443c25df970d004746953"
  },
  {
    "url": "assets/js/57.b90f689a.js",
    "revision": "1d6ba439046148d526b0b9eb4f99b428"
  },
  {
    "url": "assets/js/58.47082f09.js",
    "revision": "2e8d4aa678ca4eebec98ed4bfd6d46cf"
  },
  {
    "url": "assets/js/59.39bf80ca.js",
    "revision": "168d23a3e6d709d3f42b398d77b4fbda"
  },
  {
    "url": "assets/js/6.e89d683a.js",
    "revision": "229e84a6a54550b160155f2786f7b13f"
  },
  {
    "url": "assets/js/60.c5cc0ce1.js",
    "revision": "2eb75c19ea290bb9d1d19a960edee1d7"
  },
  {
    "url": "assets/js/61.6d9ebc75.js",
    "revision": "d751153073aaa628c3aaffcfdd2d9a8d"
  },
  {
    "url": "assets/js/62.d3e0e257.js",
    "revision": "7303ea8c237d02f00c5c72d8452c1655"
  },
  {
    "url": "assets/js/63.11a345d6.js",
    "revision": "584e114153c495697b4c5613e7e6a6a8"
  },
  {
    "url": "assets/js/64.50beadfb.js",
    "revision": "cbce85ff75271e6c6d5f3827a9b9bfad"
  },
  {
    "url": "assets/js/65.4d7d84f4.js",
    "revision": "e782996d59b90b6b168eaa45869566a1"
  },
  {
    "url": "assets/js/66.79e6b513.js",
    "revision": "794d899e6eb28ce206f00e53b5958642"
  },
  {
    "url": "assets/js/67.aa8ae52b.js",
    "revision": "53d94e41760c2d74fcd19d3d7a815820"
  },
  {
    "url": "assets/js/68.06ac3f1a.js",
    "revision": "31a1847e02b0eeab036d22663a25a3ce"
  },
  {
    "url": "assets/js/69.6fc9ac21.js",
    "revision": "19b214194eb2c32c2a18e1f64cff2fe9"
  },
  {
    "url": "assets/js/7.8280eee0.js",
    "revision": "efc73350b82bd3d40d82f81a25765d28"
  },
  {
    "url": "assets/js/70.cde72a66.js",
    "revision": "c537ec1e9550ddf09e9b596e58189237"
  },
  {
    "url": "assets/js/71.ea5d42b1.js",
    "revision": "44a00e542ac43c7f0554077a7c285646"
  },
  {
    "url": "assets/js/72.9f4204f1.js",
    "revision": "66cd52225a02ac62dd62337c14095032"
  },
  {
    "url": "assets/js/73.1977806a.js",
    "revision": "2e33da9b259770606563a0a2638d72de"
  },
  {
    "url": "assets/js/74.d8942adb.js",
    "revision": "d8f95dab54130b9253eb088b445dd9e9"
  },
  {
    "url": "assets/js/75.304fdd49.js",
    "revision": "5a49dc72a1b7a2562fb5ea516c5b6edb"
  },
  {
    "url": "assets/js/76.4a4221ad.js",
    "revision": "ae7be153cb2af4fd09419e2adf373c17"
  },
  {
    "url": "assets/js/77.41cf48f0.js",
    "revision": "c4040880a63814acd29d618190283276"
  },
  {
    "url": "assets/js/78.690cfb13.js",
    "revision": "843740181c9104f2cf8a46994e2a54cf"
  },
  {
    "url": "assets/js/79.3105569e.js",
    "revision": "4badfb75514aa89f2281d91ddf62c176"
  },
  {
    "url": "assets/js/8.e01a9257.js",
    "revision": "bde1cb7bbae54bb1a1cf6aaf04ade8a4"
  },
  {
    "url": "assets/js/80.284b7cd0.js",
    "revision": "017a287f7a974a4d5b42fb937cec6ef2"
  },
  {
    "url": "assets/js/81.03c3f771.js",
    "revision": "5fa455f90d342d8808a870004968f2ea"
  },
  {
    "url": "assets/js/82.ceae9961.js",
    "revision": "aece4ede31b3d547286ea5cdce2ef123"
  },
  {
    "url": "assets/js/83.6408720d.js",
    "revision": "867f31ac0febea6cc9f99a43391c16a4"
  },
  {
    "url": "assets/js/84.4d2899e5.js",
    "revision": "deaeaa13823ea2afabb6a55646b36fa2"
  },
  {
    "url": "assets/js/85.43a69731.js",
    "revision": "8ccedc9d651353f1b21cb29e5d4af719"
  },
  {
    "url": "assets/js/86.fb231f45.js",
    "revision": "d216077d66a61c54bc0065175a5e6dd0"
  },
  {
    "url": "assets/js/87.00313f57.js",
    "revision": "2668d34070b7b15ae39ac8b40c67f007"
  },
  {
    "url": "assets/js/88.42693bb1.js",
    "revision": "536fe2b0ef6529125edb84e6671f174b"
  },
  {
    "url": "assets/js/89.aded6eff.js",
    "revision": "b11e0abff56ba0853dffcd0a901eb9cf"
  },
  {
    "url": "assets/js/9.9eac863b.js",
    "revision": "fc7469e5da4f47fc22e35184e41547d8"
  },
  {
    "url": "assets/js/app.71e0f93d.js",
    "revision": "99ed1ec7479303eb0fe6a773c2a6d6cf"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "c374f16893c4ad5d2ca546199d0703d8"
  },
  {
    "url": "categories/front/index.html",
    "revision": "3b000876406fe6955a43cd8ed91d35dd"
  },
  {
    "url": "categories/git/index.html",
    "revision": "057240d3fbb8605ec28da9410eb8ad80"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "a665ad904e5147260003abedbfe1af0c"
  },
  {
    "url": "categories/index.html",
    "revision": "85c61a183dd4fdce6ff59baec7e3b1da"
  },
  {
    "url": "categories/java/index.html",
    "revision": "2e4e9ed683acef01181de4db761a75f9"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "150dcb0878ffcee2ed2ea005e27f75bb"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "8d1d58cf117adc985d7e956a677c2754"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "3818283e025a7f5655f30f6d9b11b7e8"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "e1d65a5843ad2e09450d22e062231ddc"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "3e165310b31991747cb3db3e1274e630"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "5bf652dacad9f8bd8af8662b4180a75f"
  },
  {
    "url": "categories/python/index.html",
    "revision": "4e3797008836d637340b7a059e8d4ba7"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "aa0a3f46bed1e3dfb9f53c8f145200a5"
  },
  {
    "url": "categories/sql/index.html",
    "revision": "e823c6cdb0f992646b2b8ee1831fc03a"
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
    "revision": "04a92fb184ee9c3e28ceead331c2a2a3"
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
    "url": "posts/docker/docker-install-use.html",
    "revision": "3a8e184832874626746430e34b8a8444"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "9e9754196721cd7743ae107dbb0bc480"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "5ce400d6930498d49711b9a0f211679f"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "87b37c25f809e2629fb0bc483e13e6a0"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "16e3ad51b9913ff6bfc858896fbfd4ca"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "507247c2a3dd472830c5eca77f803089"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "dd643c84371185cbe8e591e81404339a"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "e869076dbe5550bf1458f20fe520682e"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "854913f925919a0691aa9330ec041d31"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "b1c41f48db3019010042285534029c39"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "d0dbeab707dd83daa24dd5d146e213f5"
  },
  {
    "url": "posts/hackintosh/炫龙耀7000 hackintosh 全过程.html",
    "revision": "21c2d7631202d8536a3888136865720a"
  },
  {
    "url": "posts/hackintosh/炫龙耀7000-hackintosh全过程.html",
    "revision": "21c2d7631202d8536a3888136865720a"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "181ba716dd0dc6fb7d9f70ddf2555c5f"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "dcb87def4de19b0f304112710b7dc2fb"
  },
  {
    "url": "posts/index.html",
    "revision": "633485277289337fd36772614dd89311"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "b817fe7c9d71690ef93dec837f48345c"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "013fa21b820d2c7dbd034c90386d3dc7"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "f83e7ddf16f6978f158128a8b585002e"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "658db11a39af45fc8c510f79f5518ae8"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "51ed33fa17d51171145a76cdf1dffe04"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "ecf65dc6be2e134dbd4c9d216c614be2"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "619625706d6239b1738e0839a84613c6"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "8cea007cac2f82008175557550e51486"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "e0c5167dbbd09450b0a57985858354c1"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "21250f3031074ccaed8d85f3c1d59ced"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "89676f8faecd85189765770e5163b27d"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "d08d1eaa78d76ccec2f7d87fe7347278"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "c87d0aefc7d8a8de2d9479419b4486c8"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "062d7be8752d39c2dc26a3e7cb608a7d"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "f589dd4a9fb2a124e2db418f7c09122f"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "e86e50db8ff6bdfb659e3f2aefb00ccf"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "9cbdd42ee7497fc6e1199702fec01daf"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "79f2ef5ac2734d1a43f356458bdc4f80"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "ca4a4681511ee8d4e06a7bcc325c4571"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "3f3c739aad6adebd712c1fb881ef4a38"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "4e9db1534a9769bdf3f7864217fbc2bc"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "0ed1b35f8f8f853540b5f756fb521828"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "ef3e4600e9557911f066c9457d7ca780"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "53a6287e6d9c311e0f5bce8a29b97d42"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "c16e9ad5254f16a0f0327ac9636d2132"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "a772126e3cfffd6a3063746fd9d0e016"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "18b6e0fd629ac8ee03ae7aa990351c7b"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "17c27d8d9461390b59fa11d6aa1091ad"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "4bde04e76d9b8bbcb3d03efe172a0c97"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "83f0e20454f198bd9d5cf04d0531b061"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "05ffa605f687681a70801f92074ba0c6"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "1034f676d7179ddb51f82f1ed6495e92"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "666e7b2fb8bfb5e3e5261273cdcea219"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "42a241685ca55f842c58cf8dbb4323db"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "05079e8c2cefc56a751085d3cf4d5950"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "034f8f9c5758bb4d371cc91bedae1b1a"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "3e2d288de6865197fe173afbfb34ab11"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "30d2e886dc29e86c62f1efad21b3fcef"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "8750096ace4cfba0eda52883c65d1749"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "a07958bcfdbdbc9bf4d5956d65c44caf"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "88e046d6292f0bee7ce7b920a3467752"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "1b0952e20e4242bfd529bb96a3fc3fab"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "7f0b3cbec3cebc7b47d23c79ee2a8bc0"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "adcef9ed69cec8c72951ff3795127313"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "378768d2e64cc4b774592ca125a5e36c"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "29a245d1b9ae341ae2df7664bb6d2435"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "ad942c6b85f344b2459c2d27b525b01e"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "028eda43a38a9c1afe0a50982b1b4eb8"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "0769d966b5335c2fab4f723480cc31bb"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "2b099c37cf0f24d775ace4025b342447"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "9ebb65598f7641e05b8e1e123377dd50"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "77bfebccbfde6f087a1b9a82f74529f7"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "e8d8f25b4ea2b3a8eb8ceb1e34ab7bf3"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "f568d3227a4dd3d286e8783daa61481b"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "5f784a63ababbd739c8cc24a4ff1425f"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "3037c5bf54ba92b04d2bc4d000452436"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "f261db5d5fe36d7cfa6bdf6e6de41797"
  },
  {
    "url": "posts/python/what’s-new-in-python3-8.html",
    "revision": "27ebd49ceafdef8e1fb0da00f9c535d4"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "319ff273f80b238c133a5345e2da9f0d"
  },
  {
    "url": "posts/sql/SQL-constraints.html",
    "revision": "4cc0d5909acc027832d4ad2338a963a6"
  },
  {
    "url": "posts/sql/SQL-NULL-Func.html",
    "revision": "c6fbb518cb1bd926205710013cf38c1a"
  },
  {
    "url": "posts/sql/SQL-statement.html",
    "revision": "63cca4f03fb767360a4389ad782a6900"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "e986108522dd5cb9b9d6bd2748b73d8e"
  },
  {
    "url": "tag/api/index.html",
    "revision": "b12da71b8feaf717affcb89944ae8530"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "3b0d3d5e02f77fb29f6d09e5448a125b"
  },
  {
    "url": "tag/context/index.html",
    "revision": "254511f7d0fd01a8d0d036d5e89fa075"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "1af2589f1b2bf6187a03dbf536bb4ca2"
  },
  {
    "url": "tag/git/index.html",
    "revision": "edcf95b8feccb8aa9d694f4514313b11"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "52c1b6ebbcba6403549953188457bd9c"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "c058b62becd46c0f1084fd42c657b21c"
  },
  {
    "url": "tag/index.html",
    "revision": "4fa4700b74d9606875736af3a940705f"
  },
  {
    "url": "tag/java/index.html",
    "revision": "2ec15115a17b5d7598e7b68952f94dd3"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "6f42afdde32c6796869addbcfbf6ddee"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "2e6c478c4aa7516026571375face32bb"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "7d503c53b6690f244826256ffd16a3e1"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "034a119f11ef06cd9aeba14c5b4a4fa2"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "4f05f07dfee3887d20d0b7c72f57d64e"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "c117d140f7cca2e9809a2f20291a130c"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "5245f40e59878c1996c37cdf0c78f7cb"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "ec9ac8e71c4469b967f415aeb6cc543d"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "e87ecacecae476dd9190a43a52d2b5c5"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "e7934b32666c7e16e52264e2efa546ea"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "ccd9c2e3321ece2bf717ed92c03c32b8"
  },
  {
    "url": "tag/python/index.html",
    "revision": "c5997f98aef0d0237018832ec66c6ece"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "28fc17545a0c069b77602e1de4ba7699"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "b86b815cc3a32c267d642348722838ed"
  },
  {
    "url": "tag/sql/index.html",
    "revision": "ac43e316f1815574d3c14260d96bfaf2"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "f8a321a508f8f7d6901485ee6b036048"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "ce66d51606f89e211d5d40f5f1a772d2"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "566cbddabf9c51cfc455af1456b20947"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "0812374f6983cf43a897f2dfb383eb7d"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "091a03dbc55ced8d47b6cde7f87d4d8d"
  },
  {
    "url": "timeline/index.html",
    "revision": "d997ddbdc5c5cc9c0d4ef7d0063ef0b6"
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
