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
    "revision": "4ffbbccf3e891be2d65be08403c0d177"
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
    "url": "assets/js/100.05579d6a.js",
    "revision": "c481fd851c01a8d142cbb671b8639d21"
  },
  {
    "url": "assets/js/101.9543c19b.js",
    "revision": "5be6ae58396a6f8fd92b476d8b046803"
  },
  {
    "url": "assets/js/102.aaa0dc5c.js",
    "revision": "98bc89d9492e097fccb4c38e80c5d2aa"
  },
  {
    "url": "assets/js/103.0c07b162.js",
    "revision": "811a274d5f680cbeca2df3dad08eefde"
  },
  {
    "url": "assets/js/104.edcc41a4.js",
    "revision": "bef3186f79c42133793b6b8d17b550ed"
  },
  {
    "url": "assets/js/105.fe44952b.js",
    "revision": "7cf9387415bc5a79496257cce7a0353f"
  },
  {
    "url": "assets/js/106.00b96137.js",
    "revision": "b1b74585eba590ca0dfe95acc9312361"
  },
  {
    "url": "assets/js/11.69b157b1.js",
    "revision": "4c83239fab190348e9d5dad712041630"
  },
  {
    "url": "assets/js/12.baed0c06.js",
    "revision": "8aaa87114dc5d447a8b34159527cb4be"
  },
  {
    "url": "assets/js/13.ba4546ee.js",
    "revision": "5bf138218653ae71e2c6ad2f5c3cebb5"
  },
  {
    "url": "assets/js/14.84b2d105.js",
    "revision": "b438d09dd18810c92cab3271ac4023d9"
  },
  {
    "url": "assets/js/15.af1a6494.js",
    "revision": "38e4233e46fbba5e1d8b46e1f62833fa"
  },
  {
    "url": "assets/js/16.7d5b489a.js",
    "revision": "61b175f62650200642a2dcf1ebe0b7f2"
  },
  {
    "url": "assets/js/17.aa6d54e9.js",
    "revision": "f65ea40c84ccb931acf65cb0918076f7"
  },
  {
    "url": "assets/js/18.39715288.js",
    "revision": "9171b425f103671ca1574f21d1db0feb"
  },
  {
    "url": "assets/js/19.f480b072.js",
    "revision": "e602b4db1a15c4bf800c343feee8bf04"
  },
  {
    "url": "assets/js/20.8369db7f.js",
    "revision": "fc180d453976381f4afc3f4b467767cb"
  },
  {
    "url": "assets/js/21.e7cfebb3.js",
    "revision": "50ff0c5a8c25f6e7ae35ed7976ec0fb6"
  },
  {
    "url": "assets/js/22.7b5ddffd.js",
    "revision": "97fff469bb5079130f933f96b6554d23"
  },
  {
    "url": "assets/js/23.e6af0879.js",
    "revision": "fcc39d687a653e3c6b1a665d2dfed46e"
  },
  {
    "url": "assets/js/24.ec7a3a9f.js",
    "revision": "2efa7d6ed1caa37a46619fddd928dd51"
  },
  {
    "url": "assets/js/25.beb70f5c.js",
    "revision": "dde1b9da715af268ab1c8d747a685f8b"
  },
  {
    "url": "assets/js/26.33a0c0f4.js",
    "revision": "f114b9cdd13b45a0acfa86c3a9bac976"
  },
  {
    "url": "assets/js/27.64b44006.js",
    "revision": "98396dc796c8f17aa518fcbf81076d1e"
  },
  {
    "url": "assets/js/28.05ffc6d3.js",
    "revision": "3eef927756991d523f43f1725740f408"
  },
  {
    "url": "assets/js/29.4d53b0f7.js",
    "revision": "cbdd63e0dbc269751caf9e241194a3f1"
  },
  {
    "url": "assets/js/3.364fa3fc.js",
    "revision": "e526d0c70dfe47b40232c01450bcf7d0"
  },
  {
    "url": "assets/js/30.e102d489.js",
    "revision": "b49016a5855b68fc8de695ebf43dc7f1"
  },
  {
    "url": "assets/js/31.e4a0b4c5.js",
    "revision": "e7eb13335bd88ce65b8d29b5a2b1600a"
  },
  {
    "url": "assets/js/32.0c503235.js",
    "revision": "746d10a77c4a1d2c08341ff899cc810d"
  },
  {
    "url": "assets/js/33.5216615c.js",
    "revision": "3d8184ea6e6bd0931a0c618707d791a3"
  },
  {
    "url": "assets/js/34.da02ec4c.js",
    "revision": "036633228b05c5fae84605825e7bd832"
  },
  {
    "url": "assets/js/35.52834653.js",
    "revision": "0d438f1821aa06486f8f573595d2b7d7"
  },
  {
    "url": "assets/js/36.975c1660.js",
    "revision": "9fc9cfe786cc95c28931af626e7124a5"
  },
  {
    "url": "assets/js/37.330535a3.js",
    "revision": "70ae38401d1d0977c67aa1bf818e3083"
  },
  {
    "url": "assets/js/38.fb2720ab.js",
    "revision": "bebcee7cf94d58fb06f40520e4a49846"
  },
  {
    "url": "assets/js/39.660a6ec6.js",
    "revision": "7b05701d341acd96cbb0509182c2af82"
  },
  {
    "url": "assets/js/4.82827657.js",
    "revision": "16886d2cd0cbc839eb15b36b6007f24d"
  },
  {
    "url": "assets/js/40.3a7f19eb.js",
    "revision": "84322b6ab3c39347ff000c90f627ef5f"
  },
  {
    "url": "assets/js/41.db1d6aa3.js",
    "revision": "f527d8064a8717cc2bf842e87214dafb"
  },
  {
    "url": "assets/js/42.0553b4b6.js",
    "revision": "1a7ec1654996463277e482c812fc5157"
  },
  {
    "url": "assets/js/43.4310d308.js",
    "revision": "c4d8e7d380d1fde90123408fe8e8f58b"
  },
  {
    "url": "assets/js/44.2322286a.js",
    "revision": "77530e338a37c50ba9859ccb52e79a2a"
  },
  {
    "url": "assets/js/45.3c459953.js",
    "revision": "24fc78db0f12bea381c3b67747bd5314"
  },
  {
    "url": "assets/js/46.08ecf2a0.js",
    "revision": "1a3b13db4e985c05eac3051371d8cb3d"
  },
  {
    "url": "assets/js/47.784a1504.js",
    "revision": "18b600b12bae4727d896a8a79fa70fab"
  },
  {
    "url": "assets/js/48.726bf7f9.js",
    "revision": "39c09c2944f679b7612312567f4bb4ea"
  },
  {
    "url": "assets/js/49.128f0690.js",
    "revision": "2b1fa6e4112de972b7f01ccadeea72d6"
  },
  {
    "url": "assets/js/5.f171fb5b.js",
    "revision": "1c432ec3e561c0caacd0919ac5415365"
  },
  {
    "url": "assets/js/50.d45212ef.js",
    "revision": "b4a33acab5a6762d8bd3cd82688cc90c"
  },
  {
    "url": "assets/js/51.9120354f.js",
    "revision": "e38e177c4bdd2b3e154a323fe0e16023"
  },
  {
    "url": "assets/js/52.99399467.js",
    "revision": "7c57de35032016784a00e3dca021929a"
  },
  {
    "url": "assets/js/53.4e600e91.js",
    "revision": "857ad1c2c81b1a27c94f70028b9df1eb"
  },
  {
    "url": "assets/js/54.46ba1841.js",
    "revision": "24007e0000e5df242934cc13b4ea7d42"
  },
  {
    "url": "assets/js/55.bf8262c1.js",
    "revision": "3342e35f707d4e1606cc18e4d0261ca4"
  },
  {
    "url": "assets/js/56.f2dd474a.js",
    "revision": "bfc0457b31d755267d79f7a7d391ed01"
  },
  {
    "url": "assets/js/57.ad0a454e.js",
    "revision": "1e30c52ae78259218ad0baa7c0965664"
  },
  {
    "url": "assets/js/58.cb0c40e7.js",
    "revision": "729b9bd3d2c1ad1adb8d7ff5ca2b65ac"
  },
  {
    "url": "assets/js/59.5383d2d1.js",
    "revision": "648a92351a3396c0ddfc6e17005fa1bd"
  },
  {
    "url": "assets/js/6.6d7bedbb.js",
    "revision": "91579a973bf33c858aea0e27e16600c8"
  },
  {
    "url": "assets/js/60.03945ddd.js",
    "revision": "1756c823009a44b090766cabbc709970"
  },
  {
    "url": "assets/js/61.4c728975.js",
    "revision": "12b948d4d42208cd57ddee52aa7eae25"
  },
  {
    "url": "assets/js/62.b38505dc.js",
    "revision": "bf78993d7f2259e74ac11144b5119da4"
  },
  {
    "url": "assets/js/63.f19bf4b4.js",
    "revision": "f9d8be5127d7ca7c6b022c32dd05aeeb"
  },
  {
    "url": "assets/js/64.8ef2f5c2.js",
    "revision": "8c3e3f954cf9446a3b87340369fc19d3"
  },
  {
    "url": "assets/js/65.08b6b96f.js",
    "revision": "dbd4b0851d8f719e2ad8287894bda0ba"
  },
  {
    "url": "assets/js/66.c8cc168c.js",
    "revision": "f0c54fb74dcebeaa9a5a1222aed4d71a"
  },
  {
    "url": "assets/js/67.d9d40a6a.js",
    "revision": "ba8b57ae2d07d2ed922808d0f4832ee6"
  },
  {
    "url": "assets/js/68.722de1e7.js",
    "revision": "1aa870604e15e0f65559fe9813911384"
  },
  {
    "url": "assets/js/69.7b4510f0.js",
    "revision": "21b7ef6c6e526c08f6c163a7c4a70c21"
  },
  {
    "url": "assets/js/7.76b7dfa7.js",
    "revision": "715c723dc2232b73f9c1500622b1fc01"
  },
  {
    "url": "assets/js/70.cf57b5df.js",
    "revision": "c033ae56aa76eaa674da5683fe3212bb"
  },
  {
    "url": "assets/js/71.4a58bac6.js",
    "revision": "1747ab06997eb868953ced8e9a800f88"
  },
  {
    "url": "assets/js/72.69ed32cb.js",
    "revision": "fb687b09d8683a73488f93cb9f923e1a"
  },
  {
    "url": "assets/js/73.fcf5dc65.js",
    "revision": "4bdb486115ce6ab3f56e17b9432dac49"
  },
  {
    "url": "assets/js/74.2888f825.js",
    "revision": "a152c0df68096e7653617577668acd9d"
  },
  {
    "url": "assets/js/75.1522a2a8.js",
    "revision": "9ea51b6a270cd652686dcfaea635c659"
  },
  {
    "url": "assets/js/76.63a71fd2.js",
    "revision": "f383d180f0cb4699772fdc3f5acf3719"
  },
  {
    "url": "assets/js/77.67fc05a1.js",
    "revision": "ece8e7a01e42c5cc81f11e5f19858614"
  },
  {
    "url": "assets/js/78.52a26a65.js",
    "revision": "516247e0a30eb2c6f9ece9cec5c6a264"
  },
  {
    "url": "assets/js/79.b4b21079.js",
    "revision": "2b99fe51c3adc15f795f6470f5683f42"
  },
  {
    "url": "assets/js/8.07210b02.js",
    "revision": "f9bec44862f6ba153247245d31c65124"
  },
  {
    "url": "assets/js/80.1ce8289d.js",
    "revision": "9a3cf802e5488275b3b593545d56a864"
  },
  {
    "url": "assets/js/81.44583d31.js",
    "revision": "3d056aa90831c61cd9e7ce869b48c267"
  },
  {
    "url": "assets/js/82.d75ede86.js",
    "revision": "dbd8e6419e729c92fb3a26dca81ade26"
  },
  {
    "url": "assets/js/83.a444c7a5.js",
    "revision": "ee2789a1da1b8d3b14117c73f3e65a09"
  },
  {
    "url": "assets/js/84.740a4d21.js",
    "revision": "2554291c365523f50f13139f8e996374"
  },
  {
    "url": "assets/js/85.6c518eee.js",
    "revision": "0fb47f28bf50a44ae2ab8c6d04b75dba"
  },
  {
    "url": "assets/js/86.a53526d7.js",
    "revision": "03c688ce89022832145c22d2bf5f1bc8"
  },
  {
    "url": "assets/js/87.e3367763.js",
    "revision": "ef2c3099e7e85289fa4f8647be029622"
  },
  {
    "url": "assets/js/88.49d505a9.js",
    "revision": "d98c4dcce3e878c0a50f91a64df3c7e6"
  },
  {
    "url": "assets/js/89.725723fa.js",
    "revision": "17e42311f35be90a19188e65ad6a19f6"
  },
  {
    "url": "assets/js/9.44e383d5.js",
    "revision": "a0e431b050dfe87b21ff83d28d87eace"
  },
  {
    "url": "assets/js/90.acbff44a.js",
    "revision": "47a721c3841e5ec58ab111e508170adb"
  },
  {
    "url": "assets/js/91.bc17f966.js",
    "revision": "117c3233803ae6a5db949e58b0dd3281"
  },
  {
    "url": "assets/js/92.137fa662.js",
    "revision": "d140ab805bada46401a8da840da6bc74"
  },
  {
    "url": "assets/js/93.7e25407f.js",
    "revision": "15085936cbf4d26e32ef97f73792870e"
  },
  {
    "url": "assets/js/94.f649ac2b.js",
    "revision": "67db2130b7b40b0fc1821290c10c77be"
  },
  {
    "url": "assets/js/95.4050b617.js",
    "revision": "0e7a8638d49e310f84b6f797a4e76ee1"
  },
  {
    "url": "assets/js/96.27d205ad.js",
    "revision": "109add0275ccec20c252a39c382f386d"
  },
  {
    "url": "assets/js/97.bf08025f.js",
    "revision": "88bee7a4a988e01fa35fd2def93524c3"
  },
  {
    "url": "assets/js/98.118dc2c9.js",
    "revision": "21762f5cba76c320774defe7d85749d6"
  },
  {
    "url": "assets/js/99.5f622167.js",
    "revision": "21611d781327cb1aec5a51c2b793b4ed"
  },
  {
    "url": "assets/js/app.24d46af3.js",
    "revision": "3016243a9da83e2e8277a6d722d4f416"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/database/index.html",
    "revision": "9f5b411b766ce0792fc8bea18a4b97de"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "276fcf2c57fd997ece4b88ee023063c2"
  },
  {
    "url": "categories/front/index.html",
    "revision": "274e95a76ae80da20d3f11ceb1df8bae"
  },
  {
    "url": "categories/git/index.html",
    "revision": "cded686500316f5ebb9270bde2abe3f4"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "c4fa4e75b771f8f817a820e359c009d0"
  },
  {
    "url": "categories/index.html",
    "revision": "e651893182c49a49c947fc7a9b0b9d8b"
  },
  {
    "url": "categories/java/index.html",
    "revision": "c3e7b3f337e3a409d98748933793e8c5"
  },
  {
    "url": "categories/java/page/2/index.html",
    "revision": "436268154e0a5d33fc0bf56e49e68307"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "8728ab180f25907415a676212ff3a1a7"
  },
  {
    "url": "categories/mq/index.html",
    "revision": "605886439728350d9a306d348c465ae3"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "85fd0c1a477a53b7a89a33d3ac629488"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "903ca6e70876009967b7d3a53a3426bc"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "f2fe6bb259261f57ff7b414617b37cea"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "f536ec3028a11eed2cf2d7d375d5387a"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "48712591498e16de696f4eac7c7780b9"
  },
  {
    "url": "categories/python/index.html",
    "revision": "a7146be938a5a01cd2874ddc39f4d7e7"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "faceeb892e8d8404b029b02084727bee"
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
    "revision": "aaff51c74eced4a3db7c2614abd98a71"
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
    "revision": "86c803191416a8d8cea2537966e25d92"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "186d4b26422a0937269fbd6a3ab68df0"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "27c02cffa23ed78e271c999a6d35b714"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "1f6811a937dc24f8b02a9c7ddb342af7"
  },
  {
    "url": "posts/docker/docker-host.html",
    "revision": "e4ad83c8db09f99037351c4b20876f89"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "bbe21e884c4b62964d10f22e57cb4409"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "90077b5ac1caed9005799209eecc0aa2"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "b60e82955f21a1f1d35bad3caae52f83"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "8ba43990b2cddf9adf054adff8f38433"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "a18c4e9561988bb0f983e3ba5e55d84b"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "c57b99eb30fa91400fdf66bb73e9ab90"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "401aa7999beaac1bb9129e9ebd1f40ec"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "7bbc7ad434582850384ca9f79792a8f3"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "ee42c30cbb95d21db114898ab0b329b7"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "0d7baab91ba057abf6b2a72ada3d1833"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "d5f08a7dd47f5f027da609ecd66d3f56"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "104b82ed7a06dfc2a82904edcb3be585"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "3fc140f8eb6d698239be2addd09f4b82"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "f55fa91551b0b5959f4fa5b0b3a4cfb2"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "cd9afc5c979637d3a427add46e7b69e8"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "be658fc3a42ff39c8017039ed3b1229a"
  },
  {
    "url": "posts/java/java-http-proxy.html",
    "revision": "c9842e31c1af5d9468bfdce0eba1f61b"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "b285ffe8f1ab3b55a093c3371ed7eeea"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "44c96122ad73eb42e76b95cb717f6c9b"
  },
  {
    "url": "posts/java/java-spring-MyBatis-Annotation.html",
    "revision": "2712545f540c643de80a768b816e7ade"
  },
  {
    "url": "posts/java/java-Tetris.html",
    "revision": "7223716bcc2b0056ac5956e5e062e3fb"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "b24f108ace4addf86bfaa207de7e5b18"
  },
  {
    "url": "posts/java/spring-RedisTemplate.html",
    "revision": "0c37543dec1d89caafae180354c799ff"
  },
  {
    "url": "posts/java/springboot-disable-autoconfig.html",
    "revision": "78395074413c2847e3c1301a74181bdb"
  },
  {
    "url": "posts/java/springboot-schedule-task.html",
    "revision": "8390cb4a10c4bc701e862d731d78260c"
  },
  {
    "url": "posts/java/springboot-swagger-ui-custom-config.html",
    "revision": "85fd196f3bde3c1ba2c9dfe3e3862c9d"
  },
  {
    "url": "posts/linux/linux-chm2html.html",
    "revision": "38b0d2629c07628f55fa266ffb66bca9"
  },
  {
    "url": "posts/linux/linux-ecs.html",
    "revision": "e6dee5771eb8e496e49af8f29d4a3df0"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "328f5c1b9fb7b86c2506f72e4f436af4"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "e82fa779c822706864a47326f15a21ed"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "42587ef36d525b8d19e600c90079ec08"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "e9a44736ff1690d092af013ca74d7356"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "162633286e10fb2dd9a450d1b3effc21"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "3ad3dc7e01854bb16efdb5d110e85038"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "4af9c189e78d2b1302ce6b738003124d"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "bd2f7b388a498a2573eaa2eab48bb040"
  },
  {
    "url": "posts/mq/ensure-not-repeatedly-consumed.html",
    "revision": "49b4dd46a49a47abe058e28602af045e"
  },
  {
    "url": "posts/mq/ensure-order-of-mq.html",
    "revision": "60fe5ded0bb80df333922606b2ef6086"
  },
  {
    "url": "posts/mq/high-availability-of-mq.html",
    "revision": "4d4d3693f093b3cfd6329d10086ce06b"
  },
  {
    "url": "posts/mq/mq-problems.html",
    "revision": "a0df5a0a4cd98a10ff312caa0c634613"
  },
  {
    "url": "posts/mq/why-mq.html",
    "revision": "41c59d452c254b9c32ef282053a196c7"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "72e97f221f60b0b36f93fddb30f0bdc3"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "b33daed60830ab98a457d4e0867e65e1"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "d283d67b6ff7ffe53d327d2bedd31d62"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "d492b8a8d0ef15f0e8985df406d15e00"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "aeb4f172aec20cd21ffb1e78a0dac930"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "b982db318026059bad9547361f7aa63a"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "37f85470e7ef00804e7ac62d5a246a54"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "ac199e47e8f62e1d7249fddd4c2b91f4"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "a1c719756c1ceb0720e39fae5e0640b9"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "975ffccb34ef3ac110b99f6e0f972301"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "4b930f866b92fcb100a3937ea5062879"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "bedd7632068aba26c48288bcc2eb31ec"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "a00432c6a1e8e4f35ed80c493f580dd1"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "d1db720a660e2b35e0b94116dfc69b38"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "fd50cdaaaa45f8fa984021a1c9468da5"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "66652a290a1bc93e5103f4866483cb4b"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "4a4bcf9bf21ac73726f75a6346c1f187"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "2a936629901afc30cc787f5bb8ef7b4a"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "be2c5f55f09d8c0be50d694e8bb3624e"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "84761464885a5c7ac358d1167b2ba88d"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "9beab923ef0348f3ffa6d2136d93ebbd"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "67b84446197d9f8f6d511acb20e58868"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "ebec3746f5d4fe667328db9a9a85b305"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "c0e85ea48ed5bf9e1ae13e97a8d69602"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "2a233869868fef96556b5670def932b6"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "75b88de3aa92f68fdf59ecaeeaafddbe"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "a602258993f734c825661ed16fba1aba"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "947692147273168739976c4d984d8836"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "97e0c2b43235244fb8867ff44dda06bb"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "ef7728b19b7fc507c340e836a91753ea"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "2d5d2e391966a4d73b776de235f7d9e4"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "0ce0d5c7993d99d937687718f8efc371"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "5db629e7b152a5312eb6c833412b2ccc"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "b10c071e149f54ae952f7b9909f1faef"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "fddda12bf16df49015f64ef59cb25ba5"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "dc126eb15f8430fd16b744d972134e26"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "f8d26426602a1d069993da5e228e2b2f"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "033066b018374bf8832a1161cbe2a131"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "811e28b4d2a040b6857b56079e47f418"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "ec60a35f04ddb52507556f0cfcc9e1c3"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "603c867703ec5e56fa70bce312cad26e"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "4eb6241020e28f15fd5d2641df1331d2"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "908316581951a09f36f6ec776447a2f0"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "d26a27e21fd86f6ca8012f41a96ef83b"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "afbfe5a1eacde396575be9c98f3840b0"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "c77e0f202a0a6abc8044aca139328776"
  },
  {
    "url": "posts/python/whats-new-in-python3-8.html",
    "revision": "24fc00a2f1c0808a0a2b584e532cbc1d"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "663ed5c9c9d3b445b01eb75f5110db20"
  },
  {
    "url": "tag/api/index.html",
    "revision": "efae83fba32de7fd50fe578a436717a2"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "d35f8ed41df68bcafc2616e67c25f8ed"
  },
  {
    "url": "tag/context/index.html",
    "revision": "e57299121337ead844f5ce4be0dbf04e"
  },
  {
    "url": "tag/database/index.html",
    "revision": "0be3c723b9f158911259bce3df67d482"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "e848dc977ef0fc8d8ee5e4ef80dc5f40"
  },
  {
    "url": "tag/git/index.html",
    "revision": "5ad21c5d349191ef42f6a7ac03efb7a4"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "e4a552b8a6316a76f8b380afffb762d7"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "30abd5b1898563b3b179337dec72fd0b"
  },
  {
    "url": "tag/index.html",
    "revision": "a62448f2033f9a50cac25098844d2745"
  },
  {
    "url": "tag/java/index.html",
    "revision": "0bad4919f172d4e2dab6465e89598460"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "b46c836eb983bc612a260164de593e8d"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "39f30ea8037e8223ed6e004336d37ab6"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "7715cf2f2f231f50fb6e16106fd44f39"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "02e69afe57afd2148b385f6db8bd7e07"
  },
  {
    "url": "tag/mq/index.html",
    "revision": "ef8d3d157256be198793ff7c292d3630"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "90740b98761abcdeae11932df7ff4443"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "8eeef9cf447b329d092ed0a65340b4da"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "f06681500d2458d0bf31d80981a41122"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "32d35a276977d07acc07273123c4a167"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "b14d67fab5b3971c8a3abd10efa694da"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "2b54dd76ade941d4b680c8b8767f7cdf"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "25015593fe49a29fb910f23e4600ec27"
  },
  {
    "url": "tag/python/index.html",
    "revision": "de4553cc1194940f577c67ff64ece90f"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "4cdc7f3cbeb3d630efd33d31633bbba5"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "cad32bd4b1c41d069e7b700e7ee63ea7"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "56046535538a73648f1894fee27c491e"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "3bf580641ad896d5fd938671573a534d"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "207c469bf64ef77e6d70aa9cd5b458b5"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "28da2bcec531676340636d46ec7a0290"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "4e00738a26686269fde40f7c2613bdb4"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "e19f0c92430139161eb2a2a8973b17f5"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "9d1bdd297928b74e38fbb8b35377d8ae"
  },
  {
    "url": "timeline/index.html",
    "revision": "523d378fdd8622eb49883a029f73b32e"
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
