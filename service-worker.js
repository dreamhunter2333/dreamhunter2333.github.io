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
    "revision": "44313ebdc2272d477e7896dc9f1c2088"
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
    "url": "assets/js/1.ca0731e5.js",
    "revision": "53477c4cf84d75c45a924d8ea22bdb21"
  },
  {
    "url": "assets/js/10.2f35fbaf.js",
    "revision": "c5125c25ac4aa83b58109c5f33048721"
  },
  {
    "url": "assets/js/11.deb6b021.js",
    "revision": "b2b1dc1091571677d9fb3be4d03632dd"
  },
  {
    "url": "assets/js/12.a6d57ec9.js",
    "revision": "6a2e99a3867b85adfad67cd4375a0a6e"
  },
  {
    "url": "assets/js/13.14aaa2a3.js",
    "revision": "94902de39c2f3dca90f2340306329397"
  },
  {
    "url": "assets/js/14.eaa873ef.js",
    "revision": "c3660ab4dbfe702f36478c769d364392"
  },
  {
    "url": "assets/js/15.54229b8f.js",
    "revision": "439654d7c356adb31a30725a29ca898e"
  },
  {
    "url": "assets/js/16.d46b7c39.js",
    "revision": "f6f70face9093e7fc7709468ef0d9e5e"
  },
  {
    "url": "assets/js/17.b5929117.js",
    "revision": "5ae0fce903073e2e136ebb9818572acd"
  },
  {
    "url": "assets/js/18.94c0e80a.js",
    "revision": "651e1844eed0064df9082cb7daca8ba7"
  },
  {
    "url": "assets/js/19.c616d3e6.js",
    "revision": "54cb30efee211151f66f090507701705"
  },
  {
    "url": "assets/js/20.df475527.js",
    "revision": "168910d6e062a488d0d9b1903af12965"
  },
  {
    "url": "assets/js/21.19b75774.js",
    "revision": "d0cf50c2f5472e7930aac96c1766f2eb"
  },
  {
    "url": "assets/js/22.4e37c991.js",
    "revision": "d7f864963e85ca233b9540a1bb57c6a2"
  },
  {
    "url": "assets/js/23.a597d545.js",
    "revision": "0a5f32de4d4dc0e25344f5c34c0fe286"
  },
  {
    "url": "assets/js/24.3f41f15d.js",
    "revision": "ad2928c4a2ebbd05cb0857cc2cd68b99"
  },
  {
    "url": "assets/js/25.5696728a.js",
    "revision": "b33707abb820f2f074b8ead25274f218"
  },
  {
    "url": "assets/js/26.b867af72.js",
    "revision": "5dcaab27f2a01f9757460dfbe35d755d"
  },
  {
    "url": "assets/js/27.ae69a9ac.js",
    "revision": "7efc7807c9b36ccc7d789e4836d474d4"
  },
  {
    "url": "assets/js/28.741815d6.js",
    "revision": "b8dfa57f96fca4e38d717f63bfcb2e07"
  },
  {
    "url": "assets/js/29.a4494f25.js",
    "revision": "183c16fa3e9f45bc32a0b83b60650cf5"
  },
  {
    "url": "assets/js/3.1335991a.js",
    "revision": "7f060e50f4b77fb2f37cf2f11b70072f"
  },
  {
    "url": "assets/js/30.113e905f.js",
    "revision": "b2b25dfc21e9149557b9bb68cc48d17a"
  },
  {
    "url": "assets/js/31.0cf0687d.js",
    "revision": "69bc02ba822d037c52f6b5b26e7bfc64"
  },
  {
    "url": "assets/js/32.d02838a9.js",
    "revision": "e065e2fa6ce63ca25302afbffe89774b"
  },
  {
    "url": "assets/js/33.ead253e8.js",
    "revision": "344ce8338937bc3ac41502396ca2cbd7"
  },
  {
    "url": "assets/js/34.5afbe3b7.js",
    "revision": "64012542253a4bf1e44dedffbea2e025"
  },
  {
    "url": "assets/js/35.789cae80.js",
    "revision": "af5619c7a9e5da2dcb9e9044096c0d96"
  },
  {
    "url": "assets/js/36.c9e3a954.js",
    "revision": "d038726e9ab759c207c643a808cf7795"
  },
  {
    "url": "assets/js/37.1e16017d.js",
    "revision": "8e0aa3735b23404874f323db78c27728"
  },
  {
    "url": "assets/js/38.147a7360.js",
    "revision": "9a55d097e3d1da94fee148076737ae01"
  },
  {
    "url": "assets/js/39.61e896e0.js",
    "revision": "1eb130c6deb8b5f0b58f9b645d5cc63e"
  },
  {
    "url": "assets/js/4.a11e6b1e.js",
    "revision": "509daab5315435c58e3ab51116092efd"
  },
  {
    "url": "assets/js/40.6ee239a4.js",
    "revision": "588b332759ca10c7f3e39f9047d34742"
  },
  {
    "url": "assets/js/41.6f88e89b.js",
    "revision": "59536cea965902d38227210d87fed640"
  },
  {
    "url": "assets/js/42.f87bebc9.js",
    "revision": "dfe7bc2c57c0e0ec249283695cff95e9"
  },
  {
    "url": "assets/js/43.fb4b283f.js",
    "revision": "9c74dfcb6ea11052a56b23dc2d6c4d45"
  },
  {
    "url": "assets/js/44.debd6ea2.js",
    "revision": "a064dbc1fa0a3da3fe7e17e7d8356f6f"
  },
  {
    "url": "assets/js/45.eadb7407.js",
    "revision": "7f6d8f0a70cd6c52979b963d3e43036d"
  },
  {
    "url": "assets/js/46.6a841eac.js",
    "revision": "4cf898a6a6ea9a3174e7d53347c15563"
  },
  {
    "url": "assets/js/47.b6d01059.js",
    "revision": "e799c5b3f6aa195562b6507d60048d19"
  },
  {
    "url": "assets/js/48.f3c19716.js",
    "revision": "de1c3e6ed0c52cbb266e5d47605903aa"
  },
  {
    "url": "assets/js/49.45cec691.js",
    "revision": "efbae774aa1f2803f1f42b027271f279"
  },
  {
    "url": "assets/js/5.960c473b.js",
    "revision": "fb841a8f27e3edcc437b71d1b251fab5"
  },
  {
    "url": "assets/js/50.46d710b6.js",
    "revision": "02c0b62bf7b2742acb81e1bf2cab6279"
  },
  {
    "url": "assets/js/51.e87fe0c9.js",
    "revision": "0fb42e150dcb30491c132918a44347b9"
  },
  {
    "url": "assets/js/52.26d544e0.js",
    "revision": "a0d5e2b160e7691f36fd85a61c8bbdc6"
  },
  {
    "url": "assets/js/53.e2e90915.js",
    "revision": "39cf8493dfb7e06f140da459afdd9deb"
  },
  {
    "url": "assets/js/54.5760f464.js",
    "revision": "392b1cf91d1456f54c83df0c18279535"
  },
  {
    "url": "assets/js/55.da8ce026.js",
    "revision": "3c7eaac7726f0a54cfabda2d87fcba14"
  },
  {
    "url": "assets/js/56.8242c938.js",
    "revision": "d81d5e85ecc3498ba9b5c2731a7773d9"
  },
  {
    "url": "assets/js/57.5c1a02b6.js",
    "revision": "d51737e47d2300d50b63cc702e213aee"
  },
  {
    "url": "assets/js/58.e304032e.js",
    "revision": "167eea1e2989ee3cf6832ebae3ab6273"
  },
  {
    "url": "assets/js/59.9ba96207.js",
    "revision": "dc1a85998edcbc28c72a8e43ffc4981a"
  },
  {
    "url": "assets/js/6.8c14c8dc.js",
    "revision": "2e6eac9bd58bebd57105ddd95856c42c"
  },
  {
    "url": "assets/js/60.350e808d.js",
    "revision": "ff37e10a01920518852d12948cf47f30"
  },
  {
    "url": "assets/js/61.c61de0f0.js",
    "revision": "d1db6fe59c8882307224c8185e516cb8"
  },
  {
    "url": "assets/js/62.0bcc135f.js",
    "revision": "d4640bafa4dd698a9c38b5290f1a1462"
  },
  {
    "url": "assets/js/63.12460202.js",
    "revision": "6d4f91a85453a0c9279e8f97069138b8"
  },
  {
    "url": "assets/js/64.e707b647.js",
    "revision": "424bfda2ec54fbe4c9e39f36c99f83b6"
  },
  {
    "url": "assets/js/65.48d75f11.js",
    "revision": "03feafc656f771f0e6bf0f2f839c631d"
  },
  {
    "url": "assets/js/66.d0bf561d.js",
    "revision": "c09f80b74b07c8f262bfe062c356e3f3"
  },
  {
    "url": "assets/js/67.69b9b24f.js",
    "revision": "8de0709c977a1c53b4c3c2cec24a52af"
  },
  {
    "url": "assets/js/68.15c85e03.js",
    "revision": "0bea3d74d1a799eaabfc613d37158404"
  },
  {
    "url": "assets/js/69.aecc7039.js",
    "revision": "ae2241e692d187691df1bc62f5acbbae"
  },
  {
    "url": "assets/js/7.8009c1e1.js",
    "revision": "fd5dd10b911f7c0e864a1b32ded58b8d"
  },
  {
    "url": "assets/js/70.65fbee71.js",
    "revision": "03912702808540b13b7fa3906b2c0e0c"
  },
  {
    "url": "assets/js/71.39a8f4d6.js",
    "revision": "c68816eeaed8c5d88cf4fff3172c8f9f"
  },
  {
    "url": "assets/js/72.47c4c7a2.js",
    "revision": "853c05443a1c10a7afed5c63b496f96c"
  },
  {
    "url": "assets/js/73.67959653.js",
    "revision": "d835d575cf285f833a0fb6d04eed545c"
  },
  {
    "url": "assets/js/74.6372816f.js",
    "revision": "973ddd08dce26560700d3778b7e9dced"
  },
  {
    "url": "assets/js/75.de751a8e.js",
    "revision": "75d4833556364aec08de8f2bbb088e17"
  },
  {
    "url": "assets/js/76.2301017c.js",
    "revision": "8ae6e7132885c16712b0ca8e2e8b4c9c"
  },
  {
    "url": "assets/js/77.0f8b5614.js",
    "revision": "245bfdff0434d05658fe3d5cce628f37"
  },
  {
    "url": "assets/js/78.20578649.js",
    "revision": "2ea7660d3a4c04f0f05e3cda81f900de"
  },
  {
    "url": "assets/js/79.050a2d14.js",
    "revision": "9d4f50d291d0d458c211804c1b7be419"
  },
  {
    "url": "assets/js/8.03cfb9ce.js",
    "revision": "fe91d34f99828b47f1b07677df17535c"
  },
  {
    "url": "assets/js/80.c6a018e6.js",
    "revision": "031c7561a27492c3fb5c2cfa1718c1c3"
  },
  {
    "url": "assets/js/81.6c77ca7c.js",
    "revision": "82c5c1e82fa5a19faf5b7222d88e0149"
  },
  {
    "url": "assets/js/82.480d912e.js",
    "revision": "5179e5fec86fbaae29fb336846fe2559"
  },
  {
    "url": "assets/js/83.cc838033.js",
    "revision": "e2476fc688b7a0b57f9e4ddc209c7bb1"
  },
  {
    "url": "assets/js/84.5f713628.js",
    "revision": "cd5614b2add58c30cc77d57ba8ca0351"
  },
  {
    "url": "assets/js/85.ea287f04.js",
    "revision": "982304d25fabbcbd506c65f42f11fbd8"
  },
  {
    "url": "assets/js/86.c6b02215.js",
    "revision": "890067720d1ed0db442c20640fa2fe04"
  },
  {
    "url": "assets/js/87.6078b875.js",
    "revision": "28c024ba43a7b837e6befb6515a59008"
  },
  {
    "url": "assets/js/88.bcc8426d.js",
    "revision": "6407a6c033f4f0ea0e4218cc3f807abd"
  },
  {
    "url": "assets/js/89.083548c5.js",
    "revision": "04dc19f1725f987ccff187c5f7f93f51"
  },
  {
    "url": "assets/js/9.5201d619.js",
    "revision": "3e9fc9e6ddc0962e50116233177b12e8"
  },
  {
    "url": "assets/js/90.d8047aa3.js",
    "revision": "0139864358fdefb931cca5e1659c2bcb"
  },
  {
    "url": "assets/js/91.4c7be639.js",
    "revision": "c6b5e2c9e3756cc603209a192dcb6463"
  },
  {
    "url": "assets/js/app.942746f6.js",
    "revision": "00ec45193bc066304744f1eb78626a2c"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/database/index.html",
    "revision": "a4c4e5b0decc3ecfca467e1f4e6b8c76"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "a4b7f889c4e2fcd56b78a4da30ff6633"
  },
  {
    "url": "categories/front/index.html",
    "revision": "a57012baae5d79f024ccc3e49c2ffdea"
  },
  {
    "url": "categories/git/index.html",
    "revision": "6646893fa32f079cd430b2d2eeba57f3"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "cc6ffae9a041485872398240a4e9914e"
  },
  {
    "url": "categories/index.html",
    "revision": "347f4424d858b5ff32e699822f287c8a"
  },
  {
    "url": "categories/java/index.html",
    "revision": "de32a4d705c36c3c2be8120904963d92"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "bb3be96c9a124199b8c7aa5d2fc1104f"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "6569c0ce70aea3ba67c5e7b327b637a2"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "439e41af54e59d42cfcd7a2db75a332b"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "020d22e3f5f0fb9805ef12b40a1e6064"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "e03142003e3ee46223d9bf47ce884f6e"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "44e7375d647b25c26a0ed8d4e6303b24"
  },
  {
    "url": "categories/python/index.html",
    "revision": "142e18998c198ef446e660f3e0074d38"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "77ad832edfb3c5ce3b4673f75631c066"
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
    "revision": "72df815559c891f3cc486588819bde03"
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
    "revision": "5c3b1139564048fe2046083ae3ef6572"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "3bda5c6af13000095ba4f4293183b6aa"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "2bd4e2c967a7eb14e6eb3f578e9d5e5c"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "58dcf5f11a1fa872ac93bf77db0941f6"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "6d02e3e7a3152caf0853b1d0695e22db"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "ca4b841f93b5c7258e68bccf3d15316c"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "7d1e6ea2f3f8aea9cd0ffb0a3fe47f83"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "abd70e829bae78c8f9cba2995dadcc64"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "4c4af085b37170011ab82b20dfcc4e75"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "d76d813aed309138ba5a59c5d46594e2"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "41c62610252c332298736bf8cdb97504"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "d1e85c91147a27dde76cd3d5e3034146"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "b6ad412b8f162a81b1637d399afcbb3f"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "2c8468ad4071578a88c2f2b9ae7e0c49"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "5448c252f939178a68e39a2936b532aa"
  },
  {
    "url": "posts/hackintosh/炫龙耀7000 hackintosh 全过程.html",
    "revision": "c59ff0f89664f661064f1faab15ebe74"
  },
  {
    "url": "posts/hackintosh/炫龙耀7000-hackintosh全过程.html",
    "revision": "722feff916dc07c71bd19db480cbe6e0"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "18f46afe8d8ae79f530f4a0f00b9597c"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "fe44aabdf1e78d5bb04f0aa1f1884891"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "65f5d945a5c1f01b6be73115ecf20f81"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "9a42f77a6a133d08be8adac614e84a90"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "3d03116fc2d4d05290dfc110a16cb5ae"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "26f8b10c3e9cd290bdb120b03aad3b20"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "ce89f18391ee2890b5222b804e1353f2"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "02d08250a9cac8ca59479eaf2ad8cf9b"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "e1513c800b394c8c15b208e793a5fce7"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "c0c68dcc810d4163e9bbfc2a2a1d9342"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "80b1148c3909ea2fde9b965a41aaa143"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "0d29655fb1fd54095186bf7158bb6913"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "f1efec1679e7693e4bc56874ac4a1f79"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "ef8226fb1a32f62bd84c02a9fbec44ff"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "5986fb394256b17955006338f8e80359"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "f0c185521bacbd01863f3cbf6c371b3e"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "551f33d19265db539c212e8d13cb70c9"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "4c9a937a5d6948f13b41fef7f7848ecc"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "8b84a53baee20f451f22b94594606ed1"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "066ec5ae369ba01e2e4bd1c2618b4638"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "14c721db733d8cf40611268022fa31c9"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "2b41d8d66e010183b784c08c2cb8982e"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "d96318bb2ab907ff1e7f1612e2d05b7f"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "aa1ad8f1fda4c97945257f11934a226a"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "b76099870082fe0425347748ac074dbc"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "8b53edf2cda95dc163420380fa44df46"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "df6c481ce4247306fe3f8708f8adc767"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "5f0c58b36a21262d12cc8552ee40e64f"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "8b173a22ce4714a5431b452ab3d93f0b"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "97aca8b40023a29cb461352b48b40a76"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "f895431fe28e6bbefbc5b2c70cbe6403"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "b3f28d4c49cbec25395641663666a143"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "8aacdd0d686ca3c208b49b0562f05bf6"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "a55de3cdd758a80cda5d71624d9db5b7"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "093dad6087dab35b40b9abfc989697af"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "7dd0c7acc14dd86fe17be276eb03617d"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "97365e83e14abfe58c0850b67ae5624d"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "f4a4e73bf49e9c1521eddeddd3f1a20c"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "91c61d0b665fda207152ae208312f1fb"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "c5610a44feba6823ad6b65178a6f29d6"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "379d9d1ee655d5446b496ae6d7bce919"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "07687d4e16fa8b515fea07edc1669fa7"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "0a74b2ec37a1c3e41a543132a807e769"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "f30b5bb6a8f985d663b2e390302617a3"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "0ece9b032f37e60eecfe134383db0cf2"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "b81dceec59eb94ea20b746d4decda11b"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "464ac7affcb0d38d9e1f1dae5c33d6d5"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "31bfdbdfd0b5c356e66d1139edac88e4"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "d1bfbff4e8077ff41a71dd21c1c35841"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "8f3a88d9d38bd10544f764b6f54b7b9f"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "e9ce8647754eae6cef30243fd8d1297b"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "8d387c97962261f54a529c7640e03c0b"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "75c99060bcab395010d16147311af0f4"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "8f1f0f240659d9fa15bf159d265322f5"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "a89fb625f23e0fd668374380585fb684"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "70f36a0abe211e1a1d615c5d24458cba"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "6a0c566ae2bb1b481b86eabff408876f"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "b76717aa1882bb8adf11471e10323ed8"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "41d7d48b05694761cff1c88d1b31284e"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "19d155e95ae81b6474921ba56ec6452d"
  },
  {
    "url": "posts/python/what’s-new-in-python3-8.html",
    "revision": "634cd8d0771c0489cd7b6405575b0b05"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "925fc6e87de257af0e9393d72efdfbdd"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "c8202dddf51382f1cfab0a95d1c80c94"
  },
  {
    "url": "tag/api/index.html",
    "revision": "28e25392eb5b0273d3c2158475fde6ac"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "25dcad98a8cfe7ae90b6e94c0e80bcf9"
  },
  {
    "url": "tag/context/index.html",
    "revision": "3805a613db99f2c721301095afa918e3"
  },
  {
    "url": "tag/database/index.html",
    "revision": "59796fe45e9c48678d976f07fd0ee252"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "40321764e1cee683ed8a24b2a3b5fbbd"
  },
  {
    "url": "tag/git/index.html",
    "revision": "8ec68548eeb1e0d8607f837a16e57ef9"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "29fa353c4684392cb1769227702215f9"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "f26426df04e74b1561a65de184ccb4d6"
  },
  {
    "url": "tag/index.html",
    "revision": "b84ba49560d64606c9ec3d09cc36c01a"
  },
  {
    "url": "tag/java/index.html",
    "revision": "e5a5699c9a45eaca23aaf7291ab609fe"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "751421519fb7b2d2f56fce47e6991f7d"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "72d487d8f43995d02dac8c6da9860427"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "cf12f8f8164bbf7790f1e533e75cf338"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "620dcb2b58bc00245c500c6acdbdaacf"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "993a9860165e1591d50e1c458aa63dba"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "fd9027bd53b2f3989dfad631f07a146b"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "cd0e6b7de2d5e38134303d0ca76bc719"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "5cfeab0f644a2e9defc0c1f788d2f232"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "2f836231fb05fb19e7d916f1aa03998e"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "c090924abc8e505363074a47fccee959"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "99beb689b733d07e380d2d28c5cb93f7"
  },
  {
    "url": "tag/python/index.html",
    "revision": "fff95a039b497ff5fe08562812c6c8f4"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "94fdca21ffbe8d6a14b03f8ad40b7668"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "8b6eb8ab159165cda8d309cadad3a258"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "a95ec0704cdd9dc52356a6170e002367"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "78187f59d4a49b21c62903301ab8ab82"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "085ac96a5c6bc141d8fd6e5c8542dd71"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "e5c9fb3bb53808e79f73e53368f995a5"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "d577139e9c2c772b9435a9cdbeeb9f26"
  },
  {
    "url": "timeline/index.html",
    "revision": "1980bb392834a046d2a8d20b0b91df81"
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
