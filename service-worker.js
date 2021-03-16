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
    "revision": "2cea4c085cdb3e0727b5b06da494bc53"
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
    "url": "assets/js/17.175278c2.js",
    "revision": "53451dc69a75012575c6533aee85cae8"
  },
  {
    "url": "assets/js/18.7683754e.js",
    "revision": "8ee5192ed87555993ebef121424bed3f"
  },
  {
    "url": "assets/js/19.4dd588c7.js",
    "revision": "b58b0efccb179ceae01461d5e999fd47"
  },
  {
    "url": "assets/js/20.37267d38.js",
    "revision": "f1768044c6fdcfbb235f4906c5034e9a"
  },
  {
    "url": "assets/js/21.64d57c89.js",
    "revision": "50750b01311ee519cfbd0f52be0f8a9f"
  },
  {
    "url": "assets/js/22.7304d32b.js",
    "revision": "4a2186ce36156e7ac7f7c19fa99c927a"
  },
  {
    "url": "assets/js/23.d56a52d8.js",
    "revision": "5b3c629bcc728b27d8facd318f5a0bb1"
  },
  {
    "url": "assets/js/24.d6bf357f.js",
    "revision": "a62dedf03f9d5959ec91716e329310c2"
  },
  {
    "url": "assets/js/25.d6ad1010.js",
    "revision": "df7e63574208a2140e648fb920b0101e"
  },
  {
    "url": "assets/js/26.99ba025f.js",
    "revision": "5afd013e9b38a23abf527296b10b6b49"
  },
  {
    "url": "assets/js/27.25d000d8.js",
    "revision": "e1b96f935c23a344afe0c74a8aa9f4f8"
  },
  {
    "url": "assets/js/28.0682bac0.js",
    "revision": "ae1825087266874e77a362cb2dfcda35"
  },
  {
    "url": "assets/js/29.e3074cd4.js",
    "revision": "0ba07b83a465617ea1bef8bcac294bb5"
  },
  {
    "url": "assets/js/3.364fa3fc.js",
    "revision": "e526d0c70dfe47b40232c01450bcf7d0"
  },
  {
    "url": "assets/js/30.7eb98f44.js",
    "revision": "9909850528e2bf6b736021d9634cb4fd"
  },
  {
    "url": "assets/js/31.e15ac332.js",
    "revision": "adfda380c86f3d04264dc4138bd47833"
  },
  {
    "url": "assets/js/32.046df637.js",
    "revision": "43163c95883e989e38fee30093f2622c"
  },
  {
    "url": "assets/js/33.cd5431a2.js",
    "revision": "78019da1ee754e2e378fd02164e6ba96"
  },
  {
    "url": "assets/js/34.63b1ca4f.js",
    "revision": "dd12ee8f7b8513871851f2f767e8ecc0"
  },
  {
    "url": "assets/js/35.02eda425.js",
    "revision": "85b256944a246fdfc9e75e6c0b266ec2"
  },
  {
    "url": "assets/js/36.1db87d0d.js",
    "revision": "f1acdaecde2ff301a46b5c8b1e225537"
  },
  {
    "url": "assets/js/37.7f4f530c.js",
    "revision": "e86764f7bac36d06cec23d4efe4bbdcc"
  },
  {
    "url": "assets/js/38.d1c24ee5.js",
    "revision": "4bb568dc6c80a20628e3d11f792b5a12"
  },
  {
    "url": "assets/js/39.54f143e0.js",
    "revision": "301611c90b207e32ead698e7785db3c2"
  },
  {
    "url": "assets/js/4.82827657.js",
    "revision": "16886d2cd0cbc839eb15b36b6007f24d"
  },
  {
    "url": "assets/js/40.cff0ff56.js",
    "revision": "abcfcc99fd8e0a7bd27c0fe65788b78a"
  },
  {
    "url": "assets/js/41.1a833ccc.js",
    "revision": "82c34caa188d05cacf0c433fa59080b6"
  },
  {
    "url": "assets/js/42.1c7b695e.js",
    "revision": "2e0c782b7658d4fbc4e06b6617cc56c3"
  },
  {
    "url": "assets/js/43.f25313d3.js",
    "revision": "a0d2b5d72f77efb214e946a8c3b9e3b6"
  },
  {
    "url": "assets/js/44.b254ba5b.js",
    "revision": "9fec1abe542f459cabccb330770e406b"
  },
  {
    "url": "assets/js/45.410a03e3.js",
    "revision": "f106bf1bf903c42359485c647e5a88a3"
  },
  {
    "url": "assets/js/46.08e3cb20.js",
    "revision": "c6dcdf4a6d26492ab443338730f9de3d"
  },
  {
    "url": "assets/js/47.b86194af.js",
    "revision": "7ce99437c2ad8ac07d08e855def14f68"
  },
  {
    "url": "assets/js/48.9001b805.js",
    "revision": "1afa689bc747d4e463d2ec97b045b4c4"
  },
  {
    "url": "assets/js/49.04ef4ce8.js",
    "revision": "96fd6d29a7684ab34f0e36b04861b478"
  },
  {
    "url": "assets/js/5.f171fb5b.js",
    "revision": "1c432ec3e561c0caacd0919ac5415365"
  },
  {
    "url": "assets/js/50.8c9de6b4.js",
    "revision": "73d5a393198da2066e1ac85f89b4532b"
  },
  {
    "url": "assets/js/51.ce39eae9.js",
    "revision": "c22dc10f51b1e990d54fdcf058985d13"
  },
  {
    "url": "assets/js/52.77e73f29.js",
    "revision": "403a99fd83a1c8699bb38569b2c8e5ed"
  },
  {
    "url": "assets/js/53.57d3624c.js",
    "revision": "de9a1939f0f810a3f3d40856c0fa8dc3"
  },
  {
    "url": "assets/js/54.1df39948.js",
    "revision": "07194bce366b77db098c9b87a8e91510"
  },
  {
    "url": "assets/js/55.fdcd2d09.js",
    "revision": "bdd464a1b8ac5b4552febbc4b88a2fe4"
  },
  {
    "url": "assets/js/56.6cbb75e7.js",
    "revision": "e94394d2cd552b2d9238debc29df7347"
  },
  {
    "url": "assets/js/57.0beb777b.js",
    "revision": "77f1b5efa11f8b9846f8d61f3a167e15"
  },
  {
    "url": "assets/js/58.c333f16d.js",
    "revision": "5f9b91725d2a77e5ff97ac66186535c2"
  },
  {
    "url": "assets/js/59.ea81a760.js",
    "revision": "a7256831b545d1e194f48f4844e57701"
  },
  {
    "url": "assets/js/6.6d7bedbb.js",
    "revision": "91579a973bf33c858aea0e27e16600c8"
  },
  {
    "url": "assets/js/60.afac0501.js",
    "revision": "2d4d56095b1e4a5fc8e3293d2f619165"
  },
  {
    "url": "assets/js/61.e9d4753a.js",
    "revision": "3e12bd91871804220dcbf76b880d2661"
  },
  {
    "url": "assets/js/62.cc604880.js",
    "revision": "f745517fc8b34908558164bd66caf842"
  },
  {
    "url": "assets/js/63.857a3052.js",
    "revision": "164e77818c384c6c98d32729fb5b0893"
  },
  {
    "url": "assets/js/64.35889801.js",
    "revision": "b2461c9ea5a004b8f67dd6f429ced093"
  },
  {
    "url": "assets/js/65.4b63134b.js",
    "revision": "cb9a5a60908eb4e2026a8c4ce14870e2"
  },
  {
    "url": "assets/js/66.c6a8ddf6.js",
    "revision": "a3d589b433685544c091577613db2fb2"
  },
  {
    "url": "assets/js/67.277bedb1.js",
    "revision": "37735cdf4ceece42d6a15e9f60e400e6"
  },
  {
    "url": "assets/js/68.84d45fe2.js",
    "revision": "dfc3703ca2cf9dd948dfe68ec7c2dd35"
  },
  {
    "url": "assets/js/69.b6613fc4.js",
    "revision": "be401465aa83cf1efe049538efb330bd"
  },
  {
    "url": "assets/js/7.76b7dfa7.js",
    "revision": "715c723dc2232b73f9c1500622b1fc01"
  },
  {
    "url": "assets/js/70.ce0cff0f.js",
    "revision": "4210fde902740cd1b4e6c928d1e32479"
  },
  {
    "url": "assets/js/71.1525dc46.js",
    "revision": "b0f17df5b84f7d151e13b0e161c72942"
  },
  {
    "url": "assets/js/72.dc8df536.js",
    "revision": "4fcad0b4b0675f222b20bc08816794c4"
  },
  {
    "url": "assets/js/73.e0e438d8.js",
    "revision": "06a64b3ac8ecfce64e57515af4bfacbc"
  },
  {
    "url": "assets/js/74.d092eccf.js",
    "revision": "5fbb94e77b832b448bfe7d7b8f769934"
  },
  {
    "url": "assets/js/75.581a23fe.js",
    "revision": "1e401ecd6afe277714b986131a147c96"
  },
  {
    "url": "assets/js/76.e30a2952.js",
    "revision": "b2c940403e4063488380dec68f212418"
  },
  {
    "url": "assets/js/77.8513a313.js",
    "revision": "c935a3561defcc775569885eefe9bd9d"
  },
  {
    "url": "assets/js/78.7b75e1c5.js",
    "revision": "f2b7d6d88a4a76ffd872e642bea074e5"
  },
  {
    "url": "assets/js/79.c4027cba.js",
    "revision": "e34f36d30b5ae48c81d7a62f1988949c"
  },
  {
    "url": "assets/js/8.07210b02.js",
    "revision": "f9bec44862f6ba153247245d31c65124"
  },
  {
    "url": "assets/js/80.fad56147.js",
    "revision": "42bd1f6412e06914338958569eed458a"
  },
  {
    "url": "assets/js/81.d8a3d46c.js",
    "revision": "28da7e4829ce65c19206d702ad01cfdb"
  },
  {
    "url": "assets/js/82.cf41556b.js",
    "revision": "49f8be36bc43d8bd5974908920cb3296"
  },
  {
    "url": "assets/js/83.04e608be.js",
    "revision": "9c5417d8ea86cef85eadea6026df5565"
  },
  {
    "url": "assets/js/84.753ee7c9.js",
    "revision": "6968e0c7f2218fc7ce7922b98f5b6850"
  },
  {
    "url": "assets/js/85.f9c49c42.js",
    "revision": "bd052a4dd4de4af230bdc90dd9c23ebe"
  },
  {
    "url": "assets/js/86.95d2fab2.js",
    "revision": "afb6f54c44152aa5e22eb7a2fc0f2d58"
  },
  {
    "url": "assets/js/87.39706639.js",
    "revision": "7bfd8920e395a06719a7ee4d9ba662dc"
  },
  {
    "url": "assets/js/88.c6c1cef2.js",
    "revision": "bb8452fbbe18577764e6cd4e7ce432f8"
  },
  {
    "url": "assets/js/89.acd67783.js",
    "revision": "ddb877b560cbf3c70e61e6d332df0f0a"
  },
  {
    "url": "assets/js/9.7e0587fd.js",
    "revision": "509b2e52d83363cac78be5c816694120"
  },
  {
    "url": "assets/js/90.d100127c.js",
    "revision": "8f83dc568b24b206359b21ddda2f54a1"
  },
  {
    "url": "assets/js/91.c2e7c054.js",
    "revision": "01107aa6780cc249a7df3a94dc4c5a54"
  },
  {
    "url": "assets/js/92.c35be565.js",
    "revision": "bb6603ba345b0e27f12b69b63ee5d614"
  },
  {
    "url": "assets/js/93.bf10f5ec.js",
    "revision": "f6b5ed5d954f111abca0a4b11a45c107"
  },
  {
    "url": "assets/js/94.fbfe9e81.js",
    "revision": "c7cf5a826d39c765dd412b926169b10a"
  },
  {
    "url": "assets/js/95.2b6aef33.js",
    "revision": "22bfc442945c809b80b1efe1854319ba"
  },
  {
    "url": "assets/js/96.55caeb65.js",
    "revision": "daf2ae078ee102cf6c49ba6c8895254d"
  },
  {
    "url": "assets/js/97.52ee4f1f.js",
    "revision": "0ba6617cb9ff56c71ee7ed55336cf320"
  },
  {
    "url": "assets/js/98.cc55e420.js",
    "revision": "f33c2e6c0873d872a440bec2b4630fa9"
  },
  {
    "url": "assets/js/app.f2ee5420.js",
    "revision": "ce6adc9bfa461399ffeb363a44586eb9"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/database/index.html",
    "revision": "33298a1ec02bf9ef5b252caa02a26e98"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "5939bd9541880d1c56e913a69be09df5"
  },
  {
    "url": "categories/front/index.html",
    "revision": "2edf463d2c9a14bf90ef5f5adc260f17"
  },
  {
    "url": "categories/git/index.html",
    "revision": "f1243c907dd957d36cab4d35c990d419"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "2fcd34f0497a012855835c2daf03c7ed"
  },
  {
    "url": "categories/index.html",
    "revision": "96745b21a5ebbf0896f0fe584fcebe3f"
  },
  {
    "url": "categories/java/index.html",
    "revision": "0470b3c2ead59c8fb58c1fb447e33e21"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "6557cea0e4c7db69ff25a690f0ccd0b8"
  },
  {
    "url": "categories/mq/index.html",
    "revision": "a519bc9a52d02b150b25fc451b093f76"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "7e1b661e281df27b06f3b42564e94d00"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "9c8f08e3f338dd43a7f5c8e9f8aa7982"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "2d493af4e3716cb7ccee6f0683a1b685"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "a33f7f9b60830992e9a7b7b02e3e228d"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "50de047f6c6e9138a4d227fa4137801c"
  },
  {
    "url": "categories/python/index.html",
    "revision": "286dac66ed46f7423a6cbe211ce7bd31"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "7e2bbd9b0e6ebfa6287151fe529d96b2"
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
    "revision": "3ed0592d4de3294eb51994eb536e028c"
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
    "revision": "5019c8c83b20991eb375658d281b9ae3"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "154743e396d35347862cff1cba8976e1"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "526b37d8087433170c1982c73bba354e"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "b1e7687264135b8fa8dd7a08af72750b"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "fc77ff558fd14f2ed1229bc91d72f353"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "8f80295f0c9ad529b3f77188d104aa42"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "02b855d0cd53ce158a386a0f41776be8"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "6a23c61a1951aa87619b014e96c4ce0c"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "87c9f6962b605883fa8fbf2786e741a9"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "d251d81c05ba43d188ba20acfa89971b"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "64ae867ed73e70fb91fad772432a9ad8"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "62eba606199b9b6932e48e1f7cb3d33d"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "911ad29bbf9eb9c61ddb47e85bc0c580"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "2113b5d01f9fcf501b4538588d93f8e4"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "d0982b44c7dd73a2d1e0a7d832acf94d"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "d26a291b65edfe6516adf7c89a5e6474"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "8b3d55061e1c087350e33431a1f10290"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "270697e37c6f8aebec8ed97465f1b7cd"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "fd6e8cba3484fb10e11186f46e8e6a4f"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "16b59b28e7e1c9d85b51debd6cde1f99"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "18ce20a944bb1b6bb41e1e4e6b73cc65"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "908c11affab2edfba379df7943542706"
  },
  {
    "url": "posts/java/java-spring-MyBatis-Annotation.html",
    "revision": "c627c99b298c3f9a2764b937736d4ad3"
  },
  {
    "url": "posts/java/java-Tetris.html",
    "revision": "1bdad75ad0943bc3d4df46e011049c6e"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "e4e3151d29fe5a73a6b7ee83157bd988"
  },
  {
    "url": "posts/java/spring-RedisTemplate.html",
    "revision": "ef27d87e2aa140329e6157f791654d7e"
  },
  {
    "url": "posts/java/springboot-schedule-task.html",
    "revision": "fb8792c0c652b9524b0773bffe11a8e5"
  },
  {
    "url": "posts/linux/linux-ecs.html",
    "revision": "f6dae7ff282a260c8e50a55465f4c183"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "e26ac7eb19cb7b1f12a26ab9c7699318"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "930c1c77d671a8a3104447106f863627"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "11b6dc86023837de9377a1c998c54fc5"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "88a2447a9ce7464bdf5a5e1e17edaf87"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "fe3ad9f26e873f38e87527b0fbdf4246"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "f82e809c87014f0dd730a9476186006f"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "86f5c3a8bc4ffd60d06b32fb26470520"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "e62895da2b3d01889d97299fa6e5408c"
  },
  {
    "url": "posts/mq/high-availability-of-mq.html",
    "revision": "a504c8e6622999379cdd0759e8e8b5d7"
  },
  {
    "url": "posts/mq/why-mq.html",
    "revision": "99e4593b7b281d184960e6de3ca9d26d"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "0c02e741d652fc24fb38d8655e265eaa"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "aaf9fd36065d09670450d5ce4fc7a8bb"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "b49f23253c8e7c6ca7d8bce8711f2c7f"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "8f1f27359105da1138520bd334689cc6"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "7927f799b28d3d30805ed13461b63ccb"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "22c683be1ef4eb18657c2718c1dc26fa"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "6fed309aca9b2fb398b72425c5ff7ddc"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "d26563af77c610884ff0a4c4a250350e"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "335481380e4752780545c0fa42dd35a1"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "715bdd1951d09f5beb111b85dc803ac6"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "563c07c8620f743112482d6e7c32919a"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "00da4f308c3de58b266f484de8e3b631"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "67070a9927856cc558c5ae110e25db3c"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "15ef0d62d4935f5e17761903bb5f934a"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "6aff24117dc00dcd2f4a5cab63203b24"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "a4876e1689623a5dc588bd62c092a5e8"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "09e7417792e1e922a5fcfdc58cac3fcb"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "bd6d5780889036616ce6ae95dbd5b17e"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "169cb312c36c82734597b2d6fcd37319"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "62054480b2db4b6d70af8245db6d6eb2"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "9ce392f6368d743fd9974da093d84232"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "1a18f0e7acae1b6a021aae156058cd5d"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "2d41f608ba6cab6cb1c5ca377f478537"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "d612cfa0abfac2313d01c38eede905eb"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "01a9cf86b885650878c6823681964d4e"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "715bc66bfd9e8f7e6dd6712501ab4db8"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "cf7a71de84f8b7279fb807e05593a9ce"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "39fb37b2b57248eb5d3689f915a3f02b"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "0d75f7d044e5f00e656896c21996661a"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "5b07c5655abc75d1172c5f5ea45580fd"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "bb07c709de1c80f771f0bba20de06251"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "9e5c5af4e7f22303335a25954b26bec4"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "9723861bd9be5eaac0159188cf2a13d6"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "a52f07f48ecb1ab01609fe032197346d"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "e24fe2d2bc6e266e68531eae08592e00"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "5136ff3f5d75fd4d039b8836c7143279"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "75fe5702892710d1fc0e489d8e2fe717"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "6240b3281c40995d3e97aa7d45717567"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "f07c8fdad81cf56b11c86a2d641a910d"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "a2db858f158e021be59bb1b786656871"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "8a56ee1110a79ac1f7aeb5992e957c21"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "8ef1d28d1dd4d199d830f462bf6b085c"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "7bd0f6529db0c94d1d77d5d9c7a65cd9"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "55995b18f67ce9fa3b7b5f99f996351c"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "95beb35e6fda0cfd0228538ca7cb485f"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "54ff17579072d26b4fd0947f20cbc8ea"
  },
  {
    "url": "posts/python/whats-new-in-python3-8.html",
    "revision": "105c96c1704c1e02209992e68888f271"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "1c34267322efde388de743e12ef6c5f0"
  },
  {
    "url": "tag/api/index.html",
    "revision": "d11af35c1ffb77ba0bef7d1d874c35b3"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "06d68d07a46a4285e70d04a4fee4f0ec"
  },
  {
    "url": "tag/context/index.html",
    "revision": "8d29781bfedbffbdb07d37eddeaa8a39"
  },
  {
    "url": "tag/database/index.html",
    "revision": "154ca5f5c7c5f2c97da5bc11ad3538f5"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "d3fb93cc9edc0c2d69bc5f6908a04d16"
  },
  {
    "url": "tag/git/index.html",
    "revision": "f5786fff5e8f7303a39ba57bdad2480e"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "cc7c336f445c87af6b1cdbba9df492cc"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "e27e2da7c11fcda6f802747a21c3fba6"
  },
  {
    "url": "tag/index.html",
    "revision": "1dc87db521f68cb909e6e22bcf611281"
  },
  {
    "url": "tag/java/index.html",
    "revision": "9fe8db7a02b4dc68a421cb34a00a10dd"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "1856ff10edbc5373e5d46e2bbead88ce"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "76a523ca79633c49b5b1facc49a7c99b"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "fac17efe796c11e394447184b111dd6e"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "52a06f3761b91c21f3e0a285335f6f04"
  },
  {
    "url": "tag/mq/index.html",
    "revision": "a3a86fc105cd09f906df5f0980237172"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "7d977a3164e5a5ed5431e94c65f83200"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "990f08c3e53a286e87f2d5891af07705"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "320c1654a1aa77492caf6ecc48e5e10e"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "d3290141a78a5fa1faaecb2f42c9cd01"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "9d77f6743f91ddb19d6338fa20b02f4e"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "7f1d4f82189a73edcb1f54fe0b860c74"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "e9d6ffd2fbf9920a8913772cea589027"
  },
  {
    "url": "tag/python/index.html",
    "revision": "42edd73d1c826521e362e139d0080241"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "eb98c86add7ca800c1a8850cb209d431"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "65d2be693436073749bbb0c91e325b2d"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "5112bbb6dfe53159344e0af9e6620f5d"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "529122d4dca894ee28fd70b5637d1f29"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "8acd82cc86f836fd27052751816cbc0e"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "355b9b39c32c36f0cdd0d5f5adea916e"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "0c2759f91188aa6d26080106a8a55274"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "10652afc5c994545bcc7e59dc8a8ad72"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "eeaa9a3388d203226193194472b28c20"
  },
  {
    "url": "timeline/index.html",
    "revision": "4e8c9fc4f915c6f2835d56f6caa317cb"
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
