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
    "revision": "ceb4b22a63a8c128a69a8028aa990992"
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
    "url": "assets/js/100.0bd381d1.js",
    "revision": "9c431a7da9ccffa6f05864e93f73b34e"
  },
  {
    "url": "assets/js/101.18274507.js",
    "revision": "e9d5f571df7f7cd6146260578b24e125"
  },
  {
    "url": "assets/js/102.d8d56b06.js",
    "revision": "b77dd8e5f3b0e6fb943bfc0fc1406622"
  },
  {
    "url": "assets/js/103.d2dcfa5f.js",
    "revision": "19a15531591f99838f7c32746dc1e4a9"
  },
  {
    "url": "assets/js/104.a90c7397.js",
    "revision": "3934439363564b0832a4bda09fb910d3"
  },
  {
    "url": "assets/js/105.771f49c7.js",
    "revision": "7024b2e4b8bc0ea98f7af700c0ef087b"
  },
  {
    "url": "assets/js/106.91cacd7b.js",
    "revision": "0f7ed6a96e873798a52142d6dd89a217"
  },
  {
    "url": "assets/js/107.202c191d.js",
    "revision": "01f27c8ac845f9cad8d457b6c122e154"
  },
  {
    "url": "assets/js/108.2a40d75c.js",
    "revision": "3c04f19eedd4b4b02a5e043f8aad5573"
  },
  {
    "url": "assets/js/109.126715d0.js",
    "revision": "028c874cfbf41491cdbc204550ec106a"
  },
  {
    "url": "assets/js/11.69b157b1.js",
    "revision": "4c83239fab190348e9d5dad712041630"
  },
  {
    "url": "assets/js/110.93e40eb5.js",
    "revision": "6d80a6f7bb40554df57ff859bf75d141"
  },
  {
    "url": "assets/js/111.9d79e271.js",
    "revision": "7972dfa102ea321876a9689cabe9ff1e"
  },
  {
    "url": "assets/js/112.3df59c5c.js",
    "revision": "eddfc08ab32b565c3b9d8493a2e8af5c"
  },
  {
    "url": "assets/js/113.97b096b3.js",
    "revision": "67eb5fddf966bff609a9eb4c093165a6"
  },
  {
    "url": "assets/js/114.12cc9e1d.js",
    "revision": "133c3857a68d1d1dad2a0833003a9108"
  },
  {
    "url": "assets/js/115.9796d318.js",
    "revision": "ff39ce61586ad5c3281c1bb079edfd92"
  },
  {
    "url": "assets/js/116.22caf9e2.js",
    "revision": "4966aadf929bf9f61d9ed073970022fe"
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
    "url": "assets/js/19.c25d5120.js",
    "revision": "c9525fcfa78e57dfd4607ad89af9d079"
  },
  {
    "url": "assets/js/20.70febb10.js",
    "revision": "6505bc818c1a36ee144f1c81e8348adb"
  },
  {
    "url": "assets/js/21.770a01cf.js",
    "revision": "fba9346eb96c02cc105be56b52a1d0d6"
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
    "url": "assets/js/56.d19aea41.js",
    "revision": "25802024c83a0a85681d50d43a9819b4"
  },
  {
    "url": "assets/js/57.ac5f3c90.js",
    "revision": "91c63cdfb0f0beed0758d71dc4e5b2e7"
  },
  {
    "url": "assets/js/58.7d6aee18.js",
    "revision": "9b9bbb711772ce7dff2500cd651dd72d"
  },
  {
    "url": "assets/js/59.df19e59e.js",
    "revision": "54290f161838c40bb6e11fe84d083bfe"
  },
  {
    "url": "assets/js/6.6d7bedbb.js",
    "revision": "91579a973bf33c858aea0e27e16600c8"
  },
  {
    "url": "assets/js/60.9a0dc4fa.js",
    "revision": "b116b80549569fb167d4b398b084eadd"
  },
  {
    "url": "assets/js/61.0040f176.js",
    "revision": "a938081d8e9ab71daa6aedaa46ed7911"
  },
  {
    "url": "assets/js/62.8cce3138.js",
    "revision": "71cb2500acea591390398750702c24a4"
  },
  {
    "url": "assets/js/63.ae6796dd.js",
    "revision": "e0782ba71e6ad3bbee8a5cad742dd91b"
  },
  {
    "url": "assets/js/64.11d17517.js",
    "revision": "e979bc6b8d3033ca85100c873f4747db"
  },
  {
    "url": "assets/js/65.456ead14.js",
    "revision": "1c5e55a24ba060c06d94d30e14d2bf89"
  },
  {
    "url": "assets/js/66.1f243b3c.js",
    "revision": "c45a8c98b526e8231da67ff0eef8e968"
  },
  {
    "url": "assets/js/67.3a39358b.js",
    "revision": "bbcb94bd76c1fcd8bab3445f37ae29c3"
  },
  {
    "url": "assets/js/68.0a8a5390.js",
    "revision": "fc0abb7a7a1c5fdb6255f4b67f5c2ebb"
  },
  {
    "url": "assets/js/69.1a15dd54.js",
    "revision": "85798f3b0e315c2cf93fc07ddc73b1c4"
  },
  {
    "url": "assets/js/7.76b7dfa7.js",
    "revision": "715c723dc2232b73f9c1500622b1fc01"
  },
  {
    "url": "assets/js/70.75cac43f.js",
    "revision": "c84cafdd33cf074a79f009793a208098"
  },
  {
    "url": "assets/js/71.fc0fcdaf.js",
    "revision": "9150d73dcc76c81e7816551b1a84b04e"
  },
  {
    "url": "assets/js/72.7bc778b7.js",
    "revision": "9ec57940b3e9323ff4da513dc341500d"
  },
  {
    "url": "assets/js/73.ca807abd.js",
    "revision": "adb6620f4a2d59c5d3ade4ba871dac90"
  },
  {
    "url": "assets/js/74.4aba85fb.js",
    "revision": "60cc972d3643a9f974bffdaf19e5cab6"
  },
  {
    "url": "assets/js/75.3caa2b37.js",
    "revision": "fe6e4c26aac5f84543ff027f0baa7dca"
  },
  {
    "url": "assets/js/76.0a8a8494.js",
    "revision": "6596ad539928510fd833676bdc0df4d6"
  },
  {
    "url": "assets/js/77.0b048e63.js",
    "revision": "eb338aa178dfa51943282cca2a967046"
  },
  {
    "url": "assets/js/78.deeeaae9.js",
    "revision": "fb5ec6d550e8fc98881e14247d76ced7"
  },
  {
    "url": "assets/js/79.e1ab86ce.js",
    "revision": "5322dcad80a483f8b24fa818237c3b80"
  },
  {
    "url": "assets/js/8.07210b02.js",
    "revision": "f9bec44862f6ba153247245d31c65124"
  },
  {
    "url": "assets/js/80.ed831e6f.js",
    "revision": "7bcf33dbb08dc7829fe48beb782ef02e"
  },
  {
    "url": "assets/js/81.e5cf7bd7.js",
    "revision": "058fce9a61500216e75a7e8fc6ea1c6b"
  },
  {
    "url": "assets/js/82.5e5a8dcd.js",
    "revision": "ba2fc840461232da16deb804eb84e36b"
  },
  {
    "url": "assets/js/83.425c9969.js",
    "revision": "bbfd0f48e347cc1d129c5082f93fe08c"
  },
  {
    "url": "assets/js/84.80802791.js",
    "revision": "35d2a9239a1e0d56dea24a4a09be8a15"
  },
  {
    "url": "assets/js/85.c266598d.js",
    "revision": "f10701a781498019029d0d5fff1cd916"
  },
  {
    "url": "assets/js/86.956d33b9.js",
    "revision": "6af9f283908a198dad16167eb4110326"
  },
  {
    "url": "assets/js/87.014a8da9.js",
    "revision": "40c109dda90e6836a700979cf474f49f"
  },
  {
    "url": "assets/js/88.0900bc31.js",
    "revision": "9429392c9ca280a364d901eacf7350c7"
  },
  {
    "url": "assets/js/89.7ca033ea.js",
    "revision": "dcf5f43e99b276da3a0852fdb3575b88"
  },
  {
    "url": "assets/js/9.58fee089.js",
    "revision": "32fd138e2c3cac5382512c802ef2ee05"
  },
  {
    "url": "assets/js/90.29188ed9.js",
    "revision": "96501d94b601aacf9a4ec0fc1cdb2b12"
  },
  {
    "url": "assets/js/91.4700b73b.js",
    "revision": "13ed5fd202fd0b3f2b3211b9ea97c7fc"
  },
  {
    "url": "assets/js/92.e1882bad.js",
    "revision": "3f8177248c055e8966674ae5b821f26e"
  },
  {
    "url": "assets/js/93.fec85b0a.js",
    "revision": "fb6718f96066f654b1b97baa9e826592"
  },
  {
    "url": "assets/js/94.71e31bd5.js",
    "revision": "e93c9104089bfc083d938ff8dbb9bf4d"
  },
  {
    "url": "assets/js/95.a435a0fb.js",
    "revision": "c06ec9351d44572c59d381d34e9dd160"
  },
  {
    "url": "assets/js/96.a63c36c6.js",
    "revision": "7bdd892665cb3a989b25b6f46e67996f"
  },
  {
    "url": "assets/js/97.20438118.js",
    "revision": "27574bf2bebc2ba683d65045badf9b65"
  },
  {
    "url": "assets/js/98.e68b05c5.js",
    "revision": "4ae455fd676003c8d89b633fc3bc47ee"
  },
  {
    "url": "assets/js/99.04995c95.js",
    "revision": "744a9a4a64fd6c81033c85b21a3cdfc1"
  },
  {
    "url": "assets/js/app.1e324b70.js",
    "revision": "c443ffd0c5d6d21d0143f87352de4a29"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/algorithm/index.html",
    "revision": "703822ba76d89874e0ed9003ae6e766b"
  },
  {
    "url": "categories/database/index.html",
    "revision": "4625d16f522c0ba4559eadc8a845ebd9"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "e58c4fa9e698427356d552749ecdf818"
  },
  {
    "url": "categories/front/index.html",
    "revision": "1ff2109f8cfcbc884ed0aa9ce6075364"
  },
  {
    "url": "categories/git/index.html",
    "revision": "1c0f29e3334c191f9d555b3694e0360a"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "df291a95ed3b94ff57b39978da07452b"
  },
  {
    "url": "categories/http/index.html",
    "revision": "e61a1473b0c5163204773f105d3506f3"
  },
  {
    "url": "categories/index.html",
    "revision": "1b44ced1938d50c9535c03ad42bc24e6"
  },
  {
    "url": "categories/java/index.html",
    "revision": "0b7d9924709d95e5eb251d62a239193f"
  },
  {
    "url": "categories/java/page/2/index.html",
    "revision": "7fe9a322f92c49efa46980c5e34de420"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "7f401c7e5ff2a2ec8356b28aa9894e8d"
  },
  {
    "url": "categories/mq/index.html",
    "revision": "fcdfa60edb31a5d612972ea4dd0682a8"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "c7d8afb99658747a327348b0a39d7500"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "af8300045358ea089c5d26ab7cfcd4ee"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "4b3831d6549f122a42d10c2a30c79d2a"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "a82914467811c5eabcf942cd8cfd248b"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "45b57b6d6aeec7ec87499781ed508e98"
  },
  {
    "url": "categories/python/index.html",
    "revision": "d1ce0f08d4bd673c9b6213d8955becea"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "459b3fc9fa26ddec55fcc3bbff0bbe7d"
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
    "revision": "f419cc3e4ea9a19d8a10ab1a38691c34"
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
    "revision": "d95bf9798fae23f182270eccbe12cddf"
  },
  {
    "url": "posts/database/SQL-constraints.html",
    "revision": "4b48f60aab75eb77d6566c6e040f96a8"
  },
  {
    "url": "posts/database/SQL-keyword-order.html",
    "revision": "3fdd2076d2feb9a1384d12094529f6b3"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "5f5ccaaa6c7d4ece4fae31ed1ecfcb21"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "28ab5e3c19140b0619769bef5fb5a8c5"
  },
  {
    "url": "posts/database/why-redis-fast.html",
    "revision": "537cdfdfba71470c1b591aac9b73df7a"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "935c0dd3a57bd14d345a03acdf728e9c"
  },
  {
    "url": "posts/docker/docker-host.html",
    "revision": "cfddc3586c562ab97aff0bbf721820d1"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "95ec3c8a398eb4465e1fc3dd846e9e72"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "d526bb5861d83869094e1b8b8c753c6f"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "b68a4f5d8a60aa4c4e0fa4726f199263"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "60893f155608352fabebb7428946472d"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "5fc71efcf21152118dac1cdea6b902dd"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "5b82666784a9394ccbe05dd329d0f79d"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "869a3d67d17cfb1aff5f1f518c6cf455"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "56ac3224e260da5eefead04c3059f2cc"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "bfd61729859a0c0577b8a3a10b1985cf"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "c469c609ef245343e162273bd92250d9"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "fa60556a469bd1e3f0d3b13ce3a83deb"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "cde97996481b2c31303fd9b18891c943"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "c3dbac0f5137efa185f64b10bc82f807"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "1baea6ea9cc5335b7c3fa90ed49333b6"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "49af710fbcc09534c1baba749c1ec40b"
  },
  {
    "url": "posts/http/https-shakehand.html",
    "revision": "4a002e925de088d33f01f63b47d671e8"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "1329b0b860c5983412a6be8f96461122"
  },
  {
    "url": "posts/java/java-http-proxy.html",
    "revision": "e39b937e567d6ce2055c28bae5dfc051"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "b7c4ffe2c3c462ef128fba2b8b95dbe6"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "8f0ff009dd8719c955f86c75dde56fda"
  },
  {
    "url": "posts/java/java-spring-MyBatis-Annotation.html",
    "revision": "7bc5488e3d6ed086e66b273b374a682f"
  },
  {
    "url": "posts/java/java-Tetris.html",
    "revision": "3849c82fe1356d942b9a57d0a1c8a25f"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "c5cf81f4d12a8eef2364311618063c44"
  },
  {
    "url": "posts/java/spring-RedisTemplate.html",
    "revision": "70ad438396d0d4b94706a2a7b6b38c61"
  },
  {
    "url": "posts/java/springboot-disable-autoconfig.html",
    "revision": "0fc8f0f10ad7696ab6a7ce67c5c37ae5"
  },
  {
    "url": "posts/java/springboot-schedule-task.html",
    "revision": "d1aaa1e06de046f431b85e4132120e59"
  },
  {
    "url": "posts/java/springboot-swagger-ui-custom-config.html",
    "revision": "24acf7cf7711e0e6e91c6f7acf631b2b"
  },
  {
    "url": "posts/java/TOTP.html",
    "revision": "5338ef3984e4e190a3322c71ae100cac"
  },
  {
    "url": "posts/linux/linux-chm2html.html",
    "revision": "a511e7f1e7ebcd1c40d0f1c63024ca04"
  },
  {
    "url": "posts/linux/linux-ecs.html",
    "revision": "faaaf67cfb9e7ba7c8edb47fc258719d"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "b5a041b29368dd191cba1859772b84c2"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "36780721a44baeeea8a9c9d7ce0552c8"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "6f23ca56dbecf02b74d4e525a8de1b83"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "4f74ff5e9ffe041fc1615137ab4ca2e6"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "8838624b99ba8419ae3468d0a18c3380"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "8eb03627b830358da2142ab83f45c658"
  },
  {
    "url": "posts/linux/wsl2-install.html",
    "revision": "9927233abf182f866ea40a56a8d3a2b2"
  },
  {
    "url": "posts/linux/wsl2-use-winip.html",
    "revision": "b3f5579dd8c8ac2cf8084197b80f5c70"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "d1684817500af745907f044703b03fe2"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "c008273c33097fb513048f61d85a3249"
  },
  {
    "url": "posts/mq/ensure-not-repeatedly-consumed.html",
    "revision": "ccb72ce721668b1f62109cda1d764956"
  },
  {
    "url": "posts/mq/ensure-order-of-mq.html",
    "revision": "7dc52e2d7703ead9f7e892881ccb7af8"
  },
  {
    "url": "posts/mq/high-availability-of-mq.html",
    "revision": "f8cc933572213fbd23a3a79a341d72d0"
  },
  {
    "url": "posts/mq/mq-problems.html",
    "revision": "255f145dd0d8bc5ecae7aceffbfcb707"
  },
  {
    "url": "posts/mq/why-mq.html",
    "revision": "51810fc5e8e17305a8bc2f95d41b6074"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "1a3d539cfe1739e38ed515e552a0017b"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "48ca9eaf515f7a8665239b37bcde72e2"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "695dd4acb2bc46a07912824e81bd5f45"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "f32af2b63f80c922047dc7da5e0cd4d7"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "d58c31889b8b08f729f054e34c86346f"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "906a6625ee5f20df920ec559da365cda"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "9e39ca9ed7d7cbf086225888438466b7"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "f20184af74fc80c771d60bfac8ca9687"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "19eaff64e92093ef8cac647bb0096754"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "2ff5c812e5eca6a1cb596a9dd9e800de"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "30efde4eb27d8d196247dd85667d255e"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "1a6cdb1739cac532ad6dfe7af6e5c803"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "67a5199a428599cad89a9cf3eef33191"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "29b7478c82e196438f9dc21f7bc20369"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "5d06e81fad0623b82f8f39c3df464539"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "88125059cc9788003c1bfc0c02593b22"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "d565ada9980f74a8f7adbf086a2b4694"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "34a8ad15e85e48a63970a0d44c4458c8"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "6d317e0036c7389f08d449749ded4b38"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "aaf41e90887efb4eccdc390e17118d90"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "41139563f56a69ca590a74f072fd4b68"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "e30bd94850121f8a00d5fda2d7e193f1"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "1d8b8cf32ba5d53292a250b8bf3a005d"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "d47d12ef56b090e8dcc8eb0cb45adba9"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "83befb93ef759e1598c2b01fc0294b25"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "721e30104cf2faca8d0ee7afc7e31f2a"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "7b29b3e43e725f7f1840318123525015"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "89cb1ee785cc76379d6eb5f55110e192"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "b839e37ad3624d6b43c494215d1e78c1"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "6843b6011c633a14deb4a07fb314c4ac"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "6cf0f391ad16af50718cbf18f2e7a40c"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "a70bbf5ef599ead0e9738b4692cc7d54"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "dbbd0b42d746afe8aea98525662d44cf"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "a2bc1ea7f87fb1574e56b2419cf2b60b"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "923ba30aab8d9cebf5cc9f1126b8b465"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "111683f69a7389c4e95fd640bf39ad5c"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "02c6ae9e1eab95dd9989c55faa767789"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "fd7eec8a9f3f666d72a277bde124ed1c"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "7db15685e358803ee6de6e66a37fc5d0"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "e4afd72f705e39af6bb927d77c4c64a8"
  },
  {
    "url": "posts/python/deadlock.html",
    "revision": "1b5833a25504c007099c9bc8243f64ce"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "0819b2a97ff9f9fbd3f7343f0d5712b2"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "84b3ff47d543547ae86e74104f6afe31"
  },
  {
    "url": "posts/python/python-dynamic-import.html",
    "revision": "d34a3035cb9de524d69b55f7fc35eb2b"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "61586d850416ef801f6afb7e2de0a500"
  },
  {
    "url": "posts/python/python-metaclass.html",
    "revision": "a4b3377b662ee0fbbf1d69bab71da750"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "4c385222d64a71531eceb664cf5951e7"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "8c32b8e69e234186a61ded4574692491"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "2fb46f856f1b7aeefed54dd5a9df9c34"
  },
  {
    "url": "posts/python/whats-new-in-python3-8.html",
    "revision": "cf51fe304109323ceb60d2d0c1ec5d2d"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "3ea079cfe7b6216d6932ff76acaeb139"
  },
  {
    "url": "tag/algorithm/index.html",
    "revision": "f946a79509bb923aba28b4e67c792e8e"
  },
  {
    "url": "tag/api/index.html",
    "revision": "8e78f826387824e4fcefd502a0304bc1"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "2a57d15c3d2e07beae58a098b8209e05"
  },
  {
    "url": "tag/context/index.html",
    "revision": "9fa315f28ae5373d2d70f33ed854bcb1"
  },
  {
    "url": "tag/database/index.html",
    "revision": "7414c289700252dbec9a549f8a1f45cc"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "dda65c14bdd89b647b5518d6dc44656b"
  },
  {
    "url": "tag/git/index.html",
    "revision": "88850d494ef3a1cbea4798901f3bfb88"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "8a4e2bbd349d5bfa5ef2259f94b44e30"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "dcea05b7122b1b731893dc5dd9195eb6"
  },
  {
    "url": "tag/http/index.html",
    "revision": "9b8d937d1d79cd57746873da3417efe6"
  },
  {
    "url": "tag/index.html",
    "revision": "348808eccb58364a8c3d034c07bc72c4"
  },
  {
    "url": "tag/java/index.html",
    "revision": "1f77ee264f8876093cfd03c810448f4b"
  },
  {
    "url": "tag/java/page/2/index.html",
    "revision": "c58f47601da7ac8b08f5e78449333b7f"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "f8207eba8a4d721477b0c0a98c98db3c"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "f5ab114969983f484086616b5ac962a2"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "12ff496326372be08804952b8dd79108"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "10a85001bc88e9ad2264b636803c7992"
  },
  {
    "url": "tag/mq/index.html",
    "revision": "2c395d0aea2ea5bee96545e62f8cbe13"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "7a8d2c52331f3815bfb792c02ccfd5dd"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "da0af607fb5539dca6245467ca983ee4"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "2b4bf20e8b9d8532c47c85c5d25ba0b5"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "7b4c160494782c486c5432ee4a142322"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "8879f5800984b7c601e3d4aa4168aa75"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "621d1ab7316cbf4b19cfa289bb69e58e"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "c95cb684962fb608abf2ccbada604c27"
  },
  {
    "url": "tag/python/index.html",
    "revision": "4a1c41b90ca485e97271ea3a62221b81"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "1da7b1cdabab02656a62cb1406fa6db4"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "afa10d86ee25d944ffec1375e05acbc1"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "f9b1cab237b25becb3d397bb15391f17"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "0b9b96914faa29b3aa098ad43c47b46a"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "94ececf1b362a4ea8c84cb1fb956539d"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "d37cd109cf43b92fabb17dbe734ec65b"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "b81777297fc71b266155b326e330d265"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "32dd15785f4c5643f57cdfb245ca1dae"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "e2ef4dfb90336966ee7a9e6ef05d0481"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "e134ac2955c90921b273f21bb63b3c68"
  },
  {
    "url": "timeline/index.html",
    "revision": "254d563bcd3d047e4d0aaf20525456e1"
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
