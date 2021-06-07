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
    "revision": "aee0be360d1109b6ca3267bfc0f0e5eb"
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
    "url": "assets/js/100.83ab5cec.js",
    "revision": "caf52dfd35f703139f9048f8e8f34c50"
  },
  {
    "url": "assets/js/101.d070dcc8.js",
    "revision": "0bb6a279e2c90c8683a7d638a708ebc6"
  },
  {
    "url": "assets/js/102.64585889.js",
    "revision": "e60a4f6ec3a3db0beb2afb79f1f7885f"
  },
  {
    "url": "assets/js/103.aa8110f5.js",
    "revision": "068394aba089c63ca6bfeacbc9a1bfc2"
  },
  {
    "url": "assets/js/104.431166e3.js",
    "revision": "c7327e229c4d2f4ae3fc7609e3212cfb"
  },
  {
    "url": "assets/js/105.18e6d57d.js",
    "revision": "d5631e532b24a2da532beecaca0fb09c"
  },
  {
    "url": "assets/js/106.a6a07c84.js",
    "revision": "3b9d5343488b1435d661ed13ac903e57"
  },
  {
    "url": "assets/js/107.86381f4c.js",
    "revision": "1e7ec3675cd9c3c928db04113112668f"
  },
  {
    "url": "assets/js/108.78452ee5.js",
    "revision": "effffe56b7c1543d146973e906e679e7"
  },
  {
    "url": "assets/js/109.0aec56e6.js",
    "revision": "b92342fdb2780840cbdf51643f64d35f"
  },
  {
    "url": "assets/js/11.69b157b1.js",
    "revision": "4c83239fab190348e9d5dad712041630"
  },
  {
    "url": "assets/js/110.884bec2d.js",
    "revision": "5e5b5d75ad30d8eb7cab624e23c96f82"
  },
  {
    "url": "assets/js/111.7093a5b5.js",
    "revision": "dbc439628bc432f159c5117bf0c3c02e"
  },
  {
    "url": "assets/js/112.5d421f1f.js",
    "revision": "7129759a44641b00c868ef982f9d7d6e"
  },
  {
    "url": "assets/js/113.48d08358.js",
    "revision": "8140e023b9edbfa45c929149c7ff0111"
  },
  {
    "url": "assets/js/114.58830919.js",
    "revision": "4856e32059ff0760c209673ac6b9334c"
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
    "url": "assets/js/17.6483a30f.js",
    "revision": "16d1939f6b7a6c6fc5f7d33c2ecaceef"
  },
  {
    "url": "assets/js/18.b298c3b1.js",
    "revision": "4052412052d408f431bceb8b0d44faf3"
  },
  {
    "url": "assets/js/19.5bbf937b.js",
    "revision": "e925c57de6d79c84f45a7758ceba9bd8"
  },
  {
    "url": "assets/js/20.4c7a3d47.js",
    "revision": "b8d618065c6e0f56278882aec632cf61"
  },
  {
    "url": "assets/js/21.e6de8a0f.js",
    "revision": "b603455b9d2cb8f3ec659a1cd29c772e"
  },
  {
    "url": "assets/js/22.d53f03b4.js",
    "revision": "5c90cef8b7c75ebc389389eb89e32deb"
  },
  {
    "url": "assets/js/23.0e5193cf.js",
    "revision": "85cf779dc09c2d0c1a530418885b64cf"
  },
  {
    "url": "assets/js/24.e0d9bbcb.js",
    "revision": "b34725f2cc156e9c6583d21c748bb689"
  },
  {
    "url": "assets/js/25.079406b6.js",
    "revision": "e944e9dc4ef472ff87566ec0cf14963e"
  },
  {
    "url": "assets/js/26.788e6c77.js",
    "revision": "2ae54562800151817abde01e2005f9c3"
  },
  {
    "url": "assets/js/27.785800d1.js",
    "revision": "18b938d18555ddfcaabdd992695a31c6"
  },
  {
    "url": "assets/js/28.1e38cd1b.js",
    "revision": "355b9d0b1f94d1f683ea0b171babe429"
  },
  {
    "url": "assets/js/29.cb70bc33.js",
    "revision": "7f9e731e3b2e6aff062e778bd59c1710"
  },
  {
    "url": "assets/js/3.364fa3fc.js",
    "revision": "e526d0c70dfe47b40232c01450bcf7d0"
  },
  {
    "url": "assets/js/30.39ab4116.js",
    "revision": "6c0ec4a8d22302d37d77a3f2a6789c47"
  },
  {
    "url": "assets/js/31.17aa44e6.js",
    "revision": "894d6faa5a336a4426edbae9d14205b0"
  },
  {
    "url": "assets/js/32.5f60aa96.js",
    "revision": "b29ce76a58f99bc8c46c4fbc7b6dc109"
  },
  {
    "url": "assets/js/33.216f53bf.js",
    "revision": "6bc0f4adb719be9a96a2dc502222fc44"
  },
  {
    "url": "assets/js/34.5c99ed7b.js",
    "revision": "f9de9d05dbfa2a98c49b741fe6cb93cc"
  },
  {
    "url": "assets/js/35.cd85a674.js",
    "revision": "a6410892426dc2b258a9f49e4bf79991"
  },
  {
    "url": "assets/js/36.28bd868d.js",
    "revision": "86f67e239c663897dac5c8a4633abb13"
  },
  {
    "url": "assets/js/37.7c7dad24.js",
    "revision": "e79f8bd8608685b1d3755d014602e38c"
  },
  {
    "url": "assets/js/38.7cdcff9e.js",
    "revision": "1556fb667dd232001a7002e068f19c43"
  },
  {
    "url": "assets/js/39.816ba5db.js",
    "revision": "a2c38a1d886e063d12e626e2bdbf9930"
  },
  {
    "url": "assets/js/4.82827657.js",
    "revision": "16886d2cd0cbc839eb15b36b6007f24d"
  },
  {
    "url": "assets/js/40.f3d3fd2d.js",
    "revision": "bcc1b7fe0393bd3b9c6dbf296bf27d45"
  },
  {
    "url": "assets/js/41.2af84175.js",
    "revision": "cd7e5cd6d97c66aa6953f0687043333a"
  },
  {
    "url": "assets/js/42.4745ddf2.js",
    "revision": "20b65a21b86552cc6f797a6f81e51543"
  },
  {
    "url": "assets/js/43.810f80ee.js",
    "revision": "d64db8b5e071078db99e4b4e52204f32"
  },
  {
    "url": "assets/js/44.ad53c3bc.js",
    "revision": "e1ac6380cfe8e13569f72abc39418c55"
  },
  {
    "url": "assets/js/45.bc13915d.js",
    "revision": "3be603b8bbe57ed3329bf63872e70d8a"
  },
  {
    "url": "assets/js/46.9791a2e7.js",
    "revision": "b8f98569315251a8af675b2018106267"
  },
  {
    "url": "assets/js/47.8c2e77c1.js",
    "revision": "25d415d2455096ac9f69657533ac4d03"
  },
  {
    "url": "assets/js/48.6cce5375.js",
    "revision": "9704b5440bc7a20a194538b45f88d565"
  },
  {
    "url": "assets/js/49.bfed64b6.js",
    "revision": "da855d8aecaba53dcffa068a2d619dea"
  },
  {
    "url": "assets/js/5.f171fb5b.js",
    "revision": "1c432ec3e561c0caacd0919ac5415365"
  },
  {
    "url": "assets/js/50.2515a97f.js",
    "revision": "32e279e9b59faa786e9d04cbb4259147"
  },
  {
    "url": "assets/js/51.1b2e10c0.js",
    "revision": "cfb71205b7cb9174392c080ef199df20"
  },
  {
    "url": "assets/js/52.b1971edd.js",
    "revision": "6f245eb8aee0c3f8c8d7f0851aeb3a00"
  },
  {
    "url": "assets/js/53.f3114abe.js",
    "revision": "b35974175463eb87b460cedff405df2d"
  },
  {
    "url": "assets/js/54.d0d6b29f.js",
    "revision": "1164951dd0ad32682a0d7ea73a39d49e"
  },
  {
    "url": "assets/js/55.de8f040e.js",
    "revision": "598b5d40800721c1cb4634e0e4904065"
  },
  {
    "url": "assets/js/56.2cf77a0a.js",
    "revision": "83944836bbabde556f3746fb10985cf7"
  },
  {
    "url": "assets/js/57.0b47f67d.js",
    "revision": "b95ee1c7cfa99d24f97fa50887bda270"
  },
  {
    "url": "assets/js/58.9801695b.js",
    "revision": "a2cfbdd0be9330f7aca3fe697f9a2190"
  },
  {
    "url": "assets/js/59.ef9263c6.js",
    "revision": "5bccbb79b58a227cf03f9a74f27ab3e9"
  },
  {
    "url": "assets/js/6.6d7bedbb.js",
    "revision": "91579a973bf33c858aea0e27e16600c8"
  },
  {
    "url": "assets/js/60.cb20bfd2.js",
    "revision": "51b5ef85a097587ecf193345c7ac5451"
  },
  {
    "url": "assets/js/61.dcbfdf19.js",
    "revision": "3d459d6a89f3234ddc547452febb7e67"
  },
  {
    "url": "assets/js/62.c26ff11e.js",
    "revision": "adc7adc897bcbca6c45aa6dce4cfc58d"
  },
  {
    "url": "assets/js/63.039c548a.js",
    "revision": "e85e429c84637e820917cd40f9bbfe06"
  },
  {
    "url": "assets/js/64.f50d65f7.js",
    "revision": "f783d5429f5abfb35833d55997896764"
  },
  {
    "url": "assets/js/65.95ab6a12.js",
    "revision": "80edd0e4287d7ed06c3f69b17331aa55"
  },
  {
    "url": "assets/js/66.59d836d4.js",
    "revision": "dfaa150534f84ce7c6270d8c96c17a94"
  },
  {
    "url": "assets/js/67.5aa79e67.js",
    "revision": "141ce168e83f3ca307dee416e8cf6d27"
  },
  {
    "url": "assets/js/68.b97c0780.js",
    "revision": "358aba544ce46000736176ea0cd2010e"
  },
  {
    "url": "assets/js/69.5f17ec78.js",
    "revision": "882cb0a9e51680859714815de80d1d87"
  },
  {
    "url": "assets/js/7.76b7dfa7.js",
    "revision": "715c723dc2232b73f9c1500622b1fc01"
  },
  {
    "url": "assets/js/70.7ef9d4fc.js",
    "revision": "ac6a567264412c78a6a415de2e2b6ef4"
  },
  {
    "url": "assets/js/71.9c738d3f.js",
    "revision": "01483b8302450e2746c965ac48362f5c"
  },
  {
    "url": "assets/js/72.5dc9e4e4.js",
    "revision": "b3aaf0032108d6d418e04e3b91f3f0aa"
  },
  {
    "url": "assets/js/73.c6758371.js",
    "revision": "0989a7fbbe123eb455de225a260d464e"
  },
  {
    "url": "assets/js/74.3d617952.js",
    "revision": "6c0d6e1fcb062330f679f0ddf6d8e095"
  },
  {
    "url": "assets/js/75.524bca1f.js",
    "revision": "b8f802f588aee6449773c241e1d612fc"
  },
  {
    "url": "assets/js/76.fcd91fef.js",
    "revision": "6a837d32da9643b89f5b286a249ddf14"
  },
  {
    "url": "assets/js/77.4407b368.js",
    "revision": "ecf0fe1e0dde55ed16c8b031070c173a"
  },
  {
    "url": "assets/js/78.68d7236e.js",
    "revision": "0b52f14edfe7222b8f6faac26b2ae67d"
  },
  {
    "url": "assets/js/79.a08d6eb3.js",
    "revision": "fa0ad829cb11bbd572331cac99aaf52f"
  },
  {
    "url": "assets/js/8.07210b02.js",
    "revision": "f9bec44862f6ba153247245d31c65124"
  },
  {
    "url": "assets/js/80.cdf07bc0.js",
    "revision": "7bb49dd2be5e77eb8527b9e40eec1ebe"
  },
  {
    "url": "assets/js/81.93eb1f8c.js",
    "revision": "f48839dec776907ed8613df9b8116eb6"
  },
  {
    "url": "assets/js/82.700155b6.js",
    "revision": "4f853f0812f0394cfe209930ef80ef60"
  },
  {
    "url": "assets/js/83.3e1ea89a.js",
    "revision": "f74167915edc4608d17f5745878a6fcb"
  },
  {
    "url": "assets/js/84.f4d83433.js",
    "revision": "b5deca9364baa829840844abe6321da2"
  },
  {
    "url": "assets/js/85.43a4a3a7.js",
    "revision": "f4c6fa8faebad47eba487c8cfdca7c45"
  },
  {
    "url": "assets/js/86.f8d28e90.js",
    "revision": "59631e0237dbb57afdbe98f992a467f6"
  },
  {
    "url": "assets/js/87.b0b50fd2.js",
    "revision": "7588d32ddf3b1dcad9cf145b5d12ad79"
  },
  {
    "url": "assets/js/88.e3f3dc65.js",
    "revision": "aab43bfb12637aef21918fcb4a39fadd"
  },
  {
    "url": "assets/js/89.61a856fe.js",
    "revision": "fa1d1404e45f69e5c92e4f5810ff1893"
  },
  {
    "url": "assets/js/9.340a965f.js",
    "revision": "02aeb3a34954a0d32a4ce67e0df26e09"
  },
  {
    "url": "assets/js/90.6501e9c6.js",
    "revision": "cc29dccf4c5aca61391e4a7b68693a74"
  },
  {
    "url": "assets/js/91.752d2d8b.js",
    "revision": "c0d59b64c695f21ca87f9253e07fc400"
  },
  {
    "url": "assets/js/92.5139b99a.js",
    "revision": "df9683867ef621488ac76d88b1823237"
  },
  {
    "url": "assets/js/93.57db9a8f.js",
    "revision": "d93ff9c0397e7914983e8ce91c796951"
  },
  {
    "url": "assets/js/94.48be3192.js",
    "revision": "6a5d830af57977ed26fb2c9b5c62d5ad"
  },
  {
    "url": "assets/js/95.323c6fac.js",
    "revision": "34d303e1873e252b3bfa2e8621bf5ece"
  },
  {
    "url": "assets/js/96.48541e1f.js",
    "revision": "5e034e071c2d4ac7205e75c52331e361"
  },
  {
    "url": "assets/js/97.9fb2a1d3.js",
    "revision": "02c92869451b7cd234bf38359157387b"
  },
  {
    "url": "assets/js/98.9c5cf1de.js",
    "revision": "683ce8cfd9743d8a9dc105e898d2c580"
  },
  {
    "url": "assets/js/99.4acae10b.js",
    "revision": "8897034338d0287a49272ac326df481d"
  },
  {
    "url": "assets/js/app.6d5b1c4c.js",
    "revision": "877c40da04cbaeb82fdaf6d6870b25fd"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/algorithm/index.html",
    "revision": "f5f526fa7afcde74d5f4f9712a18a37a"
  },
  {
    "url": "categories/database/index.html",
    "revision": "9b6fb6986474b77d96ea0410e1554ba4"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "80c31884e452a9ebb907c9134d44a6fa"
  },
  {
    "url": "categories/front/index.html",
    "revision": "40f7329dc7b3ca15803d5ec8f01fab43"
  },
  {
    "url": "categories/git/index.html",
    "revision": "193d85a948048096c72120217b34d34c"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "1d4709af1e60501ee0a095d5bb5653e9"
  },
  {
    "url": "categories/http/index.html",
    "revision": "e727205145016bfbf1f7bf8f15b97d80"
  },
  {
    "url": "categories/index.html",
    "revision": "85013e1bc4d49af96254d837e00ea33b"
  },
  {
    "url": "categories/java/index.html",
    "revision": "db4bab7420b429b2d511c837cf684d48"
  },
  {
    "url": "categories/java/page/2/index.html",
    "revision": "731ae409931892f89575a686baf517f1"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "e884793482a676657ef06c84fccde038"
  },
  {
    "url": "categories/mq/index.html",
    "revision": "9ecc01a31b2f81c0d5ec96b73636e0d7"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "dfe573c6621c5e03ceaec20aacfc04df"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "31a490d4a926f7af8f71912925c2cf99"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "39831d6b942d7618be0c7a0d20449b83"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "ed2b1067e5e493e1f247f5a37a4f919a"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "e5abbf8cf7c0bba26c9cf2d446670544"
  },
  {
    "url": "categories/python/index.html",
    "revision": "38b9b3d2874f9953bdb955f61215c1fd"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "620f3afe462520d27f62925f8ac78120"
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
    "revision": "3371ca8aa629316c3e256d1e28679ab3"
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
    "revision": "52d5dcb4b1c42564112403ba78391c5f"
  },
  {
    "url": "posts/database/SQL-constraints.html",
    "revision": "2f2d17729a2eede23fd40194d781d1a4"
  },
  {
    "url": "posts/database/SQL-keyword-order.html",
    "revision": "1c350c8bfbdba437ab0071a24194a94c"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "8990c45b0966dd7b17c64947775f95ae"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "798e00d4fde164e2af02462668f26cd2"
  },
  {
    "url": "posts/database/why-redis-fast.html",
    "revision": "5a985efc9559b63fe688c929e35ffdf9"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "919acf913c72b302a2d18cdd1ceda9ee"
  },
  {
    "url": "posts/docker/docker-host.html",
    "revision": "3d6ed732432d33d6cafb9ed365a135b2"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "4ff7158bd92cd25cad1484a6eb10a9ab"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "cc59539a7e56c95c079ffaf5f0aaeedc"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "4ac64dd6505500184096b3b912bf85f8"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "850b82e29dfe5a63fba22503042fc6c4"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "f87a3309c63dc058fc87a8d56c6c8faf"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "0bfaa4bec3c730f37963ecc5ff963ac0"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "72cf77b7ab036de7b77553b857318348"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "fe081577d9d43375284d2f57953e94cb"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "4aa2dc576eea60b7ff516795fcad12a3"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "f87008325f974ed82cf91c6bf26f1e9b"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "195758f21677c0311174c8ee0a0fd18b"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "786cf6fb25be2405d0f2091f16119296"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "6f3d7797b8aa07431a1a413de2f64c57"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "81d89de069aa7ce7c028a08a16700bf5"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "75c68de423cf81921abeb279edea4db2"
  },
  {
    "url": "posts/http/https-shakehand.html",
    "revision": "10a52f550a926d7b53eaa1c2ce8b02ca"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "dfb374d96738b5a7fcb94c612f6fb823"
  },
  {
    "url": "posts/java/java-http-proxy.html",
    "revision": "7f146a68c31b5635d83d896a4266059c"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "1048a0f301492831c0987f5e1896cbd6"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "4196ecc6e3c9b5c63da429bdbecbbee2"
  },
  {
    "url": "posts/java/java-spring-MyBatis-Annotation.html",
    "revision": "533b1b21c313a053cf6d476ea8ef2dc1"
  },
  {
    "url": "posts/java/java-Tetris.html",
    "revision": "75ac9f934ebcce8f07a80202b64df5d7"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "c040243ea9323b942271d2e9e8d6cf24"
  },
  {
    "url": "posts/java/spring-RedisTemplate.html",
    "revision": "bc2edaec5acaec360bef36542aaadb6b"
  },
  {
    "url": "posts/java/springboot-disable-autoconfig.html",
    "revision": "a499b1bcd8139687a3fd352eb7ae8aa8"
  },
  {
    "url": "posts/java/springboot-schedule-task.html",
    "revision": "172176188cd8eafb591b3d573717730e"
  },
  {
    "url": "posts/java/springboot-swagger-ui-custom-config.html",
    "revision": "2d982c961f2fb51232b4abe1b3f8d27f"
  },
  {
    "url": "posts/java/TOTP.html",
    "revision": "b6919bd560b55921255d48c4af6811ea"
  },
  {
    "url": "posts/linux/linux-chm2html.html",
    "revision": "65e639cb62695bfae9c0b9384b806446"
  },
  {
    "url": "posts/linux/linux-ecs.html",
    "revision": "9d35a9810028ca83a1ed188077bb6591"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "aea20a6a26e54fe2eb35792296d50de6"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "8dd7720b9ced040d9d9c03d6a769f155"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "df219d269245923c16b30ce9b0c4f605"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "3a31b2552ae290f3b8bf74268d4275a0"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "aaed74e62e3b949aec16ea33d79ef95b"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "79398c7fa7becec0b801ce619dfe2ac8"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "8bf042a3fe5db2eaafdfa14aceb07632"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "171fd68396f363a4c023f6d134cc7e82"
  },
  {
    "url": "posts/mq/ensure-not-repeatedly-consumed.html",
    "revision": "54527a7ea3603ca14a7ec5b2f2b6832b"
  },
  {
    "url": "posts/mq/ensure-order-of-mq.html",
    "revision": "769c7354617bc95f68ac4c18af97cb95"
  },
  {
    "url": "posts/mq/high-availability-of-mq.html",
    "revision": "1b567548eff4dd7943bb468b834b8717"
  },
  {
    "url": "posts/mq/mq-problems.html",
    "revision": "91f49c4c992383f259133dd495e338f9"
  },
  {
    "url": "posts/mq/why-mq.html",
    "revision": "136b84055ee8da5b44ead2d8ee854a4e"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "51bd88de13335db24961db7e11ce5228"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "26bf37f69f87cadddca3b5ab024e4420"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "888955dbd0f7de2e7ca45b95f49b6470"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "30020aeda3797cc1dda6d0c5b6bd412b"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "b9ef0da2879b898cccded34d2a9e0710"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "d5f5d4d189236ae6e5837df454fa1c2e"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "3c85ce937e6b324be71dd60bf8ffc8fa"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "ec42c34fc50f1d1a5dce1793be1bfcd6"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "a400eda6e16c69a46a2dc357f783d505"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "f3353e8a9ddc0fb596651cd7e2691e20"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "2f99f38f347ff168cdee3bd9c0aef3c6"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "a5b6926a5fc10bd9cc7a87f36c16f89a"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "6812dcfd77c209426b603e56d56f5ca6"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "2e2c32bf753208da13836452a12d9f49"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "b36c7be6cbc95d1a7f7adc19871600e7"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "f18d8b0180f8c338928ed5e64ee934c8"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "6f968ca389ddd6714ea72e3e92096e49"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "8091a09998492490535e6b7a80eb0278"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "04cc85cc65d184fd094130aa0b8b39e9"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "4b9dfc53901a3ae55c014369e9f0ba56"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "c5eca77de28c48d0e830a0bc73b2ac67"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "cd1d09d1fa4b2a9d5886596e850865e4"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "b82d38a71b59a3c68178719c744066ed"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "478f3ecdffef8e6ae875f4debed1c635"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "8365c4118e408c88e328ff6435d6bc8a"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "cc22b4bcaf07412da468812ea6f47a27"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "bc2bc7190aeb71d37eb3261bf1201138"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "9312872bd407f618c53eaaf46714f86f"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "197482c1f651c1fb18f64657ac84d7cd"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "4652c2c49d76d7568222d6c7a81ab70f"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "0fad115ee152cc679ff77570b62c5631"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "96417a4bd230953613627021c407946d"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "106cea89678be0eaab018824cbfacc3e"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "5250dfc5891920be2f8609c41074f733"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "e21515ba34509f8139eb948bacff84e2"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "44ad6515f2efc25e5a25ef41bbea7186"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "d91ccee2a5091691ace832e1f212e9a9"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "ac69e6b40df0ee2565857ff2b1b890c0"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "67b0b81d3f7e0c060f545ba6480a6ff9"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "686db30dddb00f1a41857dce765342f4"
  },
  {
    "url": "posts/python/deadlock.html",
    "revision": "53d1a290cfdba8e4e66ebd15a567a6ed"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "11a0ae7a46ddefd9640a60da96f9249d"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "d71c80b5f6da9ee66f43b0114d29bd5c"
  },
  {
    "url": "posts/python/python-dynamic-import.html",
    "revision": "6fa341381bc8121f5b63647dce5186d5"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "1d1b5a3350ee30fb60e050c96a977b42"
  },
  {
    "url": "posts/python/python-metaclass.html",
    "revision": "05022daf51a435643327c8c3dab020f8"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "3b8b3623a06ac310e0e4fafbc62e52a2"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "22ddcbdb4f75ee375304f1eee445a0bc"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "325a3acbc5457e2e67e2bfae512ab81a"
  },
  {
    "url": "posts/python/whats-new-in-python3-8.html",
    "revision": "dd95217fe8f3381a85771a4982b824f3"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "46603bf7995e37d30167b959c915c272"
  },
  {
    "url": "tag/algorithm/index.html",
    "revision": "f7762f2dd0de3e37e52cb612d3171d32"
  },
  {
    "url": "tag/api/index.html",
    "revision": "5906fb2fcbbab08846c9602f8b0bf34c"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "e659fb771cfb6bdb771c726be3946d31"
  },
  {
    "url": "tag/context/index.html",
    "revision": "c1d6d2b015525f8233c356c8d4f856d7"
  },
  {
    "url": "tag/database/index.html",
    "revision": "ea4bf4df279c63c0a581fd269d91e7fc"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "7f960101d1e430051be11a91f08f1412"
  },
  {
    "url": "tag/git/index.html",
    "revision": "67eaeefbbd49d5d136c5458accdca0ca"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "24e042d318a7ca3360e756075fe57158"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "6b889466410e06fae6e0b0615320662b"
  },
  {
    "url": "tag/http/index.html",
    "revision": "5b8c2eb9fc220a12d22052e61beed1a5"
  },
  {
    "url": "tag/index.html",
    "revision": "7c04e174c3ac171d27c8f70440e1cae2"
  },
  {
    "url": "tag/java/index.html",
    "revision": "89417141be8f67822e131e079d5ac542"
  },
  {
    "url": "tag/java/page/2/index.html",
    "revision": "148b3ff93173c8a6fe779481246a2611"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "099e5a066c550c8d1f19305704afe20f"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "3313d8f79272044cf5abedb4ad90bbd7"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "a44aa476058435ca576d52c139206da1"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "25388ce03fe14c9ed28fbe8e2cc205ca"
  },
  {
    "url": "tag/mq/index.html",
    "revision": "7b0b0ce903e4659841a2e1c29ea6bdd1"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "bbb84dd67325854a39ae1e7740f9ee65"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "6428640d94a990dcdc9b2d13337ce1e3"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "7ef856c1fbf0b537a3d76925488af894"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "7e20e19265ae318d62c04196fae1b918"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "8867605159151d2298cc11e2e63a2464"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "cedd76c49411c96a8e81963474685c78"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "bf5829b15f9d676ce2bd372bb41cfc2e"
  },
  {
    "url": "tag/python/index.html",
    "revision": "cee63f8775e7e3ee157d8e08680d62ca"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "b356508c70ecbaff58336885d7a87d9f"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "2991cadfff9166456b207e7dfc07f637"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "61f1a49b8122c80cb677a3667f46a4d2"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "d902e7e4f71d2238207feb04de6cf161"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "7302cc22b86d02c2c75dd0a48feca2e6"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "ec26b5c6034a156ee6a24f449409de7e"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "00a93c62d8009d09a7528796d708833c"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "25e040028d76669fc64f394cb2d5705d"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "32ea582939b96ddb22e9ac70edbc2626"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "a2197b34f8f160347b7ceb680407c478"
  },
  {
    "url": "timeline/index.html",
    "revision": "23fe9fc3bcb12048340fe14bda3570bc"
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
