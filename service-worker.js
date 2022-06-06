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
    "revision": "7535f6a1655f0c01829ce9cfc28d65d7"
  },
  {
    "url": "assets/css/0.styles.642376f0.css",
    "revision": "e757ce259ec27fcc3d51f2564abae3d0"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.767f2ecd.js",
    "revision": "a8e6a86c0928780779bb0b4b4c583016"
  },
  {
    "url": "assets/js/10.cd14cc5a.js",
    "revision": "d400da0915a1be5b54e0733172867b11"
  },
  {
    "url": "assets/js/100.b716f165.js",
    "revision": "2248eb2f5d40dc6b972ab361ae3f0f4e"
  },
  {
    "url": "assets/js/101.c90997eb.js",
    "revision": "8902084192e883b4add5aea320e76312"
  },
  {
    "url": "assets/js/102.adc9ea37.js",
    "revision": "9f108efdb89b3c2dc3ac6fb9a8a053d2"
  },
  {
    "url": "assets/js/103.f19d22dd.js",
    "revision": "532c9545d2c9012b7132c749881e8464"
  },
  {
    "url": "assets/js/104.24966064.js",
    "revision": "7fe576aa0e19f0aba90de444a0d19b80"
  },
  {
    "url": "assets/js/105.dbd9180d.js",
    "revision": "d43ce0edb282300d2b5c5972b6914951"
  },
  {
    "url": "assets/js/106.29477416.js",
    "revision": "aec006186e5548ee70074b8993b79f66"
  },
  {
    "url": "assets/js/107.a389dee1.js",
    "revision": "8b05677a2f5c5aa229dbac6b02150d49"
  },
  {
    "url": "assets/js/108.56737d4c.js",
    "revision": "d57ff0f715a891c24ebde4f6ebac9eab"
  },
  {
    "url": "assets/js/109.94af9946.js",
    "revision": "f50b5f955e69cc74f248a668da29395a"
  },
  {
    "url": "assets/js/11.ddd2eeee.js",
    "revision": "a219eb214a6a41ead14a3074fde53a5e"
  },
  {
    "url": "assets/js/110.813e43a0.js",
    "revision": "a4a3f4b02611c2ca8fc8197a31ca0663"
  },
  {
    "url": "assets/js/111.fa17338d.js",
    "revision": "9eb514e599255f260cdf66865fb1270f"
  },
  {
    "url": "assets/js/112.498b01aa.js",
    "revision": "3ceb585d7d03642f9a25b46bb7f89cbe"
  },
  {
    "url": "assets/js/113.aa677c5e.js",
    "revision": "22f0864a57db57ed74d4f5e0b9841993"
  },
  {
    "url": "assets/js/114.f0206ca0.js",
    "revision": "f850ac72d5ad8cc9009648b81b033444"
  },
  {
    "url": "assets/js/115.366c25f6.js",
    "revision": "ef4ba2733f989218f910bc502c7cb716"
  },
  {
    "url": "assets/js/116.630b61dc.js",
    "revision": "6a3cee8fa4438cab18e3d0a308c525f7"
  },
  {
    "url": "assets/js/117.72101539.js",
    "revision": "1ab967449223b1f435ea1a4e7f20f6db"
  },
  {
    "url": "assets/js/118.caf006d3.js",
    "revision": "6d252eb1e64a85baec09a1e3716339c3"
  },
  {
    "url": "assets/js/119.b2015921.js",
    "revision": "c9f69ee51629a75197d4393e04bebf16"
  },
  {
    "url": "assets/js/12.4c31a6af.js",
    "revision": "54c0295b7872bafae7eaaff2a9f8507a"
  },
  {
    "url": "assets/js/120.aa91565b.js",
    "revision": "e1c750c350339b56f1a2f43e2d87946f"
  },
  {
    "url": "assets/js/121.87c939cc.js",
    "revision": "cb90a52762062e07c5952218c6b15984"
  },
  {
    "url": "assets/js/122.c01d6309.js",
    "revision": "be7d28772d85fa819511deb4dcef73a8"
  },
  {
    "url": "assets/js/123.7b4233e3.js",
    "revision": "5288a9f448d6dcb5fb710759417212f8"
  },
  {
    "url": "assets/js/124.3260f7ce.js",
    "revision": "37fb75a10d54219e4d2063a8362b4ca4"
  },
  {
    "url": "assets/js/125.43ee80db.js",
    "revision": "9385507dcf859f65a5a9ab1a718b3c6a"
  },
  {
    "url": "assets/js/13.e8a8700d.js",
    "revision": "71b14434334a1f94bf91c9f7a5e1d7ea"
  },
  {
    "url": "assets/js/14.4353cb16.js",
    "revision": "e7b9a651a62ceb2548cea2280d3200f5"
  },
  {
    "url": "assets/js/15.03dee16c.js",
    "revision": "f0877c8f349820d08dc78d45c194d8e7"
  },
  {
    "url": "assets/js/16.987f35fc.js",
    "revision": "73579058a45f99eb7f40e9a0b09ef9fa"
  },
  {
    "url": "assets/js/17.d71cca55.js",
    "revision": "da7c9a41c80c90696cf0ed2305b10aed"
  },
  {
    "url": "assets/js/18.74ad7c5b.js",
    "revision": "f4abb3d925ba919a1e8eeff1c57cd878"
  },
  {
    "url": "assets/js/19.9987cc7c.js",
    "revision": "6f7a393e6de6042eef2316c1ee8ecf5a"
  },
  {
    "url": "assets/js/20.73330cf7.js",
    "revision": "7774d69234161145b73d0df77502e951"
  },
  {
    "url": "assets/js/21.07b807b3.js",
    "revision": "57ab0f423b9e94aff9e76a475753f892"
  },
  {
    "url": "assets/js/22.6754180e.js",
    "revision": "66aff9b49d3851ef9f4177c5d50a75f8"
  },
  {
    "url": "assets/js/23.cfe213c1.js",
    "revision": "4a674d88a876d738cffffe4c606fe73c"
  },
  {
    "url": "assets/js/24.1e9bd615.js",
    "revision": "63c099e4f2945df4ffe6c8cb00c64bc0"
  },
  {
    "url": "assets/js/25.c6c6bb9f.js",
    "revision": "0240615979af809ccc59aa0608ea96ef"
  },
  {
    "url": "assets/js/26.1ea09dbe.js",
    "revision": "53eb1c28cfb346447db484f129648ef2"
  },
  {
    "url": "assets/js/27.05d9127d.js",
    "revision": "d8fb96c69963d4ed4abfdccdb36d23b3"
  },
  {
    "url": "assets/js/28.ff456f02.js",
    "revision": "c251ba8b6ef4977980461c206726a359"
  },
  {
    "url": "assets/js/29.637f32b9.js",
    "revision": "6fa6d2507bbf2308c4291ea22e36d4f4"
  },
  {
    "url": "assets/js/3.f285d652.js",
    "revision": "75781fa351399974b3ff77e1823c0e1d"
  },
  {
    "url": "assets/js/30.1b1b0e81.js",
    "revision": "9230504b08a4ace1f2020b35aef658ef"
  },
  {
    "url": "assets/js/31.3b76ae2a.js",
    "revision": "e357d2a64b6f0ea52b8ecdbcc00b2d0f"
  },
  {
    "url": "assets/js/32.8c3b01da.js",
    "revision": "e259a50a9558d8cbc9e61d5730f0a4c1"
  },
  {
    "url": "assets/js/33.0238db37.js",
    "revision": "0971e5f7f7571974ef6f36d4454fbcd1"
  },
  {
    "url": "assets/js/34.b70dbdb7.js",
    "revision": "c82df97adc9a732988395457dedc6375"
  },
  {
    "url": "assets/js/35.cc7e855a.js",
    "revision": "8483fb8de47c94faee0e5be2ab28453b"
  },
  {
    "url": "assets/js/36.f01f6e4e.js",
    "revision": "b8a54f217ef373a3b78b0dba53729923"
  },
  {
    "url": "assets/js/37.3b92094c.js",
    "revision": "7aff504b21ea685cdabb8752db5bc722"
  },
  {
    "url": "assets/js/38.a9ba14dc.js",
    "revision": "dd7bd443c886f798cb6955f2006dcb74"
  },
  {
    "url": "assets/js/39.c903e15c.js",
    "revision": "ad8ce774ba0ee3c8b91406f701df377c"
  },
  {
    "url": "assets/js/4.fab31afc.js",
    "revision": "69163d8603cb4a87e7659b01ede36f72"
  },
  {
    "url": "assets/js/40.09c2bf72.js",
    "revision": "e7c5b681d10ee6318708fd4dac479522"
  },
  {
    "url": "assets/js/41.a153d2c4.js",
    "revision": "859c40a8bb133b6f842651185e80eb9a"
  },
  {
    "url": "assets/js/42.e97ab93d.js",
    "revision": "27cc87b282e3c4b73a0937c1a5d8e1ce"
  },
  {
    "url": "assets/js/43.ecd0e037.js",
    "revision": "882fdb20a9daa8df66869ef900b77c1e"
  },
  {
    "url": "assets/js/44.bd61472d.js",
    "revision": "2fab87f8492e7d0619d53a35afcb9717"
  },
  {
    "url": "assets/js/45.27dba9a0.js",
    "revision": "59c6222f51cf13d94de40cdd19ae8523"
  },
  {
    "url": "assets/js/46.fe3a2da0.js",
    "revision": "a7edf47d46a57c887b57b5a378d78c10"
  },
  {
    "url": "assets/js/47.5a456d10.js",
    "revision": "0ef59e1d0f446af75ba69bb96ea1cde8"
  },
  {
    "url": "assets/js/48.4b6615dc.js",
    "revision": "99bfde8d62d8a041840fc7255ed9ddd1"
  },
  {
    "url": "assets/js/49.ae18c6e4.js",
    "revision": "4bac776e526878c6a45f3d06f4674cf3"
  },
  {
    "url": "assets/js/5.4f593928.js",
    "revision": "ba2e66c2f2a3460d5dff0eaf76fa0797"
  },
  {
    "url": "assets/js/50.525a4c7e.js",
    "revision": "54c743899dbe594863e513a5d110b9d1"
  },
  {
    "url": "assets/js/51.fc5e49e3.js",
    "revision": "d090fa47bede7d3bf506f5acf7bae37c"
  },
  {
    "url": "assets/js/52.635d6909.js",
    "revision": "af6ed5cf063018d4ca4beff89f72fbc5"
  },
  {
    "url": "assets/js/53.8ad3ae45.js",
    "revision": "dc8e5006d23800f2b57367f84eaa05eb"
  },
  {
    "url": "assets/js/54.8789db14.js",
    "revision": "b2f56261dcdc20ad285c711cc52307be"
  },
  {
    "url": "assets/js/55.fd9db66b.js",
    "revision": "6ed84f7d004fbc3957a160409c2f59fe"
  },
  {
    "url": "assets/js/56.2bd2e90c.js",
    "revision": "54f6cadd596c25975c02637ae0a43648"
  },
  {
    "url": "assets/js/57.5e742f0c.js",
    "revision": "9d884a840c3d832ffebdaf64e727cd38"
  },
  {
    "url": "assets/js/58.c4142ebe.js",
    "revision": "b794e39ee6b061fc7049d2675ad417ce"
  },
  {
    "url": "assets/js/59.4391cf54.js",
    "revision": "3d0354f68af3bac051e9dd5fb4791dc7"
  },
  {
    "url": "assets/js/6.05914f4b.js",
    "revision": "6c44a2c94bdd9c7d2462761064a1b93c"
  },
  {
    "url": "assets/js/60.f7dbb04b.js",
    "revision": "3b5c2759d22857f19ac10cf6bee223d2"
  },
  {
    "url": "assets/js/61.fb1d7785.js",
    "revision": "f5be8863f5a68dde93c6db3b2a36f4b8"
  },
  {
    "url": "assets/js/62.320c9a6f.js",
    "revision": "cd96f2270a5ca459b300edc1f6c07939"
  },
  {
    "url": "assets/js/63.ce7da078.js",
    "revision": "9593aaf051eddcf96d897c70d6c0c7c2"
  },
  {
    "url": "assets/js/64.73bf43bc.js",
    "revision": "cc01a4030ffcb6996a4bdfa51b119a63"
  },
  {
    "url": "assets/js/65.9d322825.js",
    "revision": "7c425989480758b020babf161d1d5206"
  },
  {
    "url": "assets/js/66.70062496.js",
    "revision": "eb5efd98d550c866135c7bd5ca2c313f"
  },
  {
    "url": "assets/js/67.8075c9b4.js",
    "revision": "fa3654d91136ab18308961d7e8c9caf9"
  },
  {
    "url": "assets/js/68.ebe2adc1.js",
    "revision": "da27d1e871e628a36b40c9ec86ba3a45"
  },
  {
    "url": "assets/js/69.5d3ea029.js",
    "revision": "334d8099f1d6bccd9fde20e4dbe89cf6"
  },
  {
    "url": "assets/js/7.5f95acc6.js",
    "revision": "bbf28e52e04fb8ea9c07efd57a124741"
  },
  {
    "url": "assets/js/70.0db704c1.js",
    "revision": "34cb02368326e08df1e083b3af3bbb0e"
  },
  {
    "url": "assets/js/71.5996320f.js",
    "revision": "38ffd6abd60934ae3721ebe39ee87c8a"
  },
  {
    "url": "assets/js/72.fe09cee9.js",
    "revision": "a54a43cd872e3c6df1cfa3e501f67522"
  },
  {
    "url": "assets/js/73.9656dda4.js",
    "revision": "aea90453e91d6eb013c8eeaad352254f"
  },
  {
    "url": "assets/js/74.34a10784.js",
    "revision": "f4f2a51fbd6500b3985cd48ebbe6ecf6"
  },
  {
    "url": "assets/js/75.8734e934.js",
    "revision": "7bb0e4465e59e7afbac1ed6ed878ad26"
  },
  {
    "url": "assets/js/76.8c6eb451.js",
    "revision": "44edaff746c7309f9be0ec818138295c"
  },
  {
    "url": "assets/js/77.2ffb0769.js",
    "revision": "266dea56571c085f7d1d94a307deda3a"
  },
  {
    "url": "assets/js/78.7e73891f.js",
    "revision": "00daafd959ded2d32ce5194eafef24bd"
  },
  {
    "url": "assets/js/79.3dc502de.js",
    "revision": "db6b63090ebf505a91904592260ee5a3"
  },
  {
    "url": "assets/js/8.05bf437f.js",
    "revision": "3c82d0fdc14b3f829ed0411886f0838e"
  },
  {
    "url": "assets/js/80.57d4c925.js",
    "revision": "bdf0703f94dfdb4795d34dc039349b18"
  },
  {
    "url": "assets/js/81.ed4a3384.js",
    "revision": "6e33316749bb6be14f3f47f8c6822457"
  },
  {
    "url": "assets/js/82.a9f6896c.js",
    "revision": "805fce7efc80132b9b6c827dc6ac1163"
  },
  {
    "url": "assets/js/83.3a3d7b0a.js",
    "revision": "9cecc45a134606dfb448a9343344bfef"
  },
  {
    "url": "assets/js/84.77aeb2c2.js",
    "revision": "66f301879973e330675fd9ca596e28d6"
  },
  {
    "url": "assets/js/85.22e40d3b.js",
    "revision": "bb46eada5ba6868340d2ef4ac8890c23"
  },
  {
    "url": "assets/js/86.fb6b0b24.js",
    "revision": "fa392eef11758fbd630c9f27c56d4ef9"
  },
  {
    "url": "assets/js/87.c79e688c.js",
    "revision": "fa4c26b9390eabe953f54d3aa4d6778c"
  },
  {
    "url": "assets/js/88.4600e62f.js",
    "revision": "1b8c091fc3318bc29533e8c6b0ba9fea"
  },
  {
    "url": "assets/js/89.5d30ff03.js",
    "revision": "07ce4e3c67dece618399b33e7615a590"
  },
  {
    "url": "assets/js/9.456d5e49.js",
    "revision": "828649afdf08cbfe2c0e78e34ed39764"
  },
  {
    "url": "assets/js/90.a1ba2ed0.js",
    "revision": "d492d9a7d1e144a726439dbabb35454e"
  },
  {
    "url": "assets/js/91.b2cbe0c9.js",
    "revision": "647492ff72180705a04304aadd9ca242"
  },
  {
    "url": "assets/js/92.9aaa5e10.js",
    "revision": "f3f9c49b793ab65f34d317a18cdff4a4"
  },
  {
    "url": "assets/js/93.09b5d20f.js",
    "revision": "e8e5df1e7ec7054387d62b59a1a1101b"
  },
  {
    "url": "assets/js/94.3987b639.js",
    "revision": "8b13a092f695d22805d502001f0090bf"
  },
  {
    "url": "assets/js/95.ca4c6017.js",
    "revision": "f68f0a5c976970b67defdafc1eb4c0ee"
  },
  {
    "url": "assets/js/96.3413a9ee.js",
    "revision": "ab13cba3957db1b85d49c67b79fc24c8"
  },
  {
    "url": "assets/js/97.712556bb.js",
    "revision": "9100b593ef897a7e0d73036a48a34526"
  },
  {
    "url": "assets/js/98.961393fc.js",
    "revision": "34cbe1b713f4d708c4a9b06d5cb47264"
  },
  {
    "url": "assets/js/99.dcb50999.js",
    "revision": "12982c15b6dcc50cfa61ea592ef1471b"
  },
  {
    "url": "assets/js/app.bc33d032.js",
    "revision": "0db1e0192cf60ae39483551c95248acf"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/algorithm/index.html",
    "revision": "62a946c530c0c6ee044d361aaa933b41"
  },
  {
    "url": "categories/database/index.html",
    "revision": "d29251199be5cbc49a5b3310e752ea2d"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "79531bc59481802f949e4ba1592d2edb"
  },
  {
    "url": "categories/front/index.html",
    "revision": "00e06df30db8dbeef37a99deae7e41a2"
  },
  {
    "url": "categories/git/index.html",
    "revision": "5ac7e932a8f7cda8449e15be5f0b9e26"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "ae077ad98d7d54c51fdbb26cc9ffe0ac"
  },
  {
    "url": "categories/http/index.html",
    "revision": "607fb3ed65d4eca1cbe1d34f51d438de"
  },
  {
    "url": "categories/index.html",
    "revision": "e09dade828ecf6598eec8d75c68acbea"
  },
  {
    "url": "categories/java/index.html",
    "revision": "6a6ec2f9f5f4f08dbbd0f7a2726a90b9"
  },
  {
    "url": "categories/java/page/2/index.html",
    "revision": "9a424e61846256a0778c7f1b6637d54f"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "b6359fb35a07a0319185bd7d500a8976"
  },
  {
    "url": "categories/linux/page/2/index.html",
    "revision": "2c635724a55aa06edf5eaa4c41b4dd0c"
  },
  {
    "url": "categories/macos/index.html",
    "revision": "37facb95e531b98fe004d21d902b84b9"
  },
  {
    "url": "categories/mq/index.html",
    "revision": "127afcc7c42f587e3eb86599940630b6"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "f3c7d6b845a69980d31cea9f78202c7d"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "47d688db10c31d203c022bdfb902d2cf"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "2aa82ac2ce467a73e24dc1ad23d6a87f"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "a5e5fafcdf17cb249dfc9bf371f0c144"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "177ec781608ff7cab43316bcca43176f"
  },
  {
    "url": "categories/other/index.html",
    "revision": "a63e8039624a72503e3f3fce00834f33"
  },
  {
    "url": "categories/python/index.html",
    "revision": "5fd4822734de9e65dafe7d41c47b259c"
  },
  {
    "url": "categories/python/page/2/index.html",
    "revision": "d8a3ee401b4564a3784c677d5e4e27f8"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "17290cf8e4ad279be2dbafc0a91e1f7d"
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
    "url": "imgs/iqiyi-danmu/br2Object.png",
    "revision": "22958c19f639159b01415a79c1bbcfc2"
  },
  {
    "url": "imgs/iqiyi-danmu/F12.png",
    "revision": "b0719d0f9e1a7f26b9ca7cad62be5f10"
  },
  {
    "url": "imgs/iqiyi-danmu/initiator.png",
    "revision": "e09a0b3ec85a039052ce5b87ac73510a"
  },
  {
    "url": "imgs/iqiyi-danmu/proto-danmu.png",
    "revision": "7eb3638b85028ba7ceaddebc351cdac4"
  },
  {
    "url": "imgs/iqiyi-danmu/wordcloud.jpg",
    "revision": "5b22dca8d06f3f1be6ca3dda82b89bc7"
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
    "revision": "8a3dd12974cf16d39429f0a3271a74ca"
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
    "url": "pic/install-ubuntu-with-xrdp-in-termux/mstsc.png",
    "revision": "18eb346721e46fc1ac67d448bcbfc8da"
  },
  {
    "url": "posts/algorithm/traversing-binary-tree.html",
    "revision": "da3560b8968de3b25437f6642242e569"
  },
  {
    "url": "posts/database/SQL-constraints.html",
    "revision": "76650cca8ebf1745f777431e08c6fdb6"
  },
  {
    "url": "posts/database/SQL-keyword-order.html",
    "revision": "05371c1b743cbfd2cfd78c5e86aeab35"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "20be37dff4af4d0407f114cb41783c7e"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "7bf4336ae577dcc3372320b3c8223a3b"
  },
  {
    "url": "posts/database/why-redis-fast.html",
    "revision": "083c1d2a108cd2491caa844101736fcb"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "588e48bf40e35ee5163c3d022d5a1dca"
  },
  {
    "url": "posts/docker/docker-host.html",
    "revision": "ceed2978d9dc07bf16f809d8c86b34a3"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "72ab12c4ba72bdd01fa18be50fa36f1e"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "a6f9755f4df939a4709666d5bb7d9672"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "b28aa6e65254f7b4c52fc84ca8d754aa"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "87cde5278a135f9d0d9e83e8e47ae6c5"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "ab333637aa12e4d4ec2ec9494c71e491"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "7ceac8f6abe4af2d3b947c766e6f8094"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "94e01545ac07faedd4a47c9a44e592da"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "87b049c1fabfb7f910e01e90ecad0db2"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "0e8c76d8541fd80ac8ed09c3c91e7c64"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "937e81caa45d440ac6c54a37258ba7a9"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "7bafef4d5edd0c73be9ea5f44fd52463"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "e4a2ed13810e90137ee2ce97dc88c24e"
  },
  {
    "url": "posts/git/use-multi-access-token.html",
    "revision": "082062a70183f371bb2444aa239f32a2"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "125bea0b5093cb31a6522bd52ab9f5eb"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "3fc946bf8554cb4f8fa9c80267071cb0"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "00023fe38dee6efce4625cd661bef268"
  },
  {
    "url": "posts/http/https-shakehand.html",
    "revision": "4a25ce220f7236f64749625396e98008"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "f834d67dca44630b52032f442a899c58"
  },
  {
    "url": "posts/java/java-http-proxy.html",
    "revision": "777d42d87309bde9b0b53f31a5066344"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "8e795c1ab13731558b5b185cde36d730"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "8758cde3a508daf3af8e3faa7756314d"
  },
  {
    "url": "posts/java/java-spring-MyBatis-Annotation.html",
    "revision": "f6cfe5d46f9450d7f0114f860db4f3cc"
  },
  {
    "url": "posts/java/java-Tetris.html",
    "revision": "ca80bc83c374669303fb124e0886172d"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "23c50bdaf591889845c2eb2d7a610627"
  },
  {
    "url": "posts/java/spring-RedisTemplate.html",
    "revision": "c0ca6530a0bab2fdfb6a949750125079"
  },
  {
    "url": "posts/java/springboot-disable-autoconfig.html",
    "revision": "ebc776bec785c6d8ad18a26f70b1b737"
  },
  {
    "url": "posts/java/springboot-schedule-task.html",
    "revision": "0ee4bee8e0d6195c1651d39250ff273c"
  },
  {
    "url": "posts/java/springboot-swagger-ui-custom-config.html",
    "revision": "8a2fe118ef21f0d131b9462e3435326b"
  },
  {
    "url": "posts/java/TOTP.html",
    "revision": "aeb98669236bdee2880597b5bce84fbc"
  },
  {
    "url": "posts/linux/docker-nginx-acme-trojan-go.html",
    "revision": "e0e8befdc4221e26df26bc5cc0cb2a30"
  },
  {
    "url": "posts/linux/install-ubuntu-with-xrdp-in-termux.html",
    "revision": "7482daf5b1c52931bd7ec292214845ff"
  },
  {
    "url": "posts/linux/linux-chm2html.html",
    "revision": "613feaa186fc0e3609ce84498a920326"
  },
  {
    "url": "posts/linux/linux-ecs.html",
    "revision": "be7829f6cea780064657c80ecad5da35"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "8214d0a6d00e94b774cc79c8429050d6"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "5fb1f5cd07e610ec63f42b2f1098bf41"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "52081f89f6ceec7be01de3ab9e6f22ce"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "4d8515c62a66ce457ce44b1e8300217f"
  },
  {
    "url": "posts/linux/ubuntu-switch-sources.html",
    "revision": "20ff55ae540c4f0e79f7e7f9c0094ebe"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "640299055fca4645c1a558672f87f0be"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "8f6f511efce36d855ede79f29f763078"
  },
  {
    "url": "posts/linux/wsl2-and-docker-compact-vdisk.html",
    "revision": "baf53c82d024863f2b25d65b33a73749"
  },
  {
    "url": "posts/linux/wsl2-install.html",
    "revision": "884bcb119f7ea31fe6100d9e055702d4"
  },
  {
    "url": "posts/linux/wsl2-use-winip.html",
    "revision": "e570caf96ce535f61e7524a03c6fa7c3"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "cec8b18db78871bc7c9b0c8909336530"
  },
  {
    "url": "posts/macos/android-emulator.html",
    "revision": "90ae12187b0646a221780988a9d2c733"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "0609baf0dc60402124e22ce0f5ae395a"
  },
  {
    "url": "posts/mq/ensure-not-repeatedly-consumed.html",
    "revision": "318da90da6f8064729118b7febe6c20c"
  },
  {
    "url": "posts/mq/ensure-order-of-mq.html",
    "revision": "44957b710e57d7c65807130c672c3bc7"
  },
  {
    "url": "posts/mq/high-availability-of-mq.html",
    "revision": "660c03fec79040d6d4bf423d9b225238"
  },
  {
    "url": "posts/mq/mq-problems.html",
    "revision": "f38aa2dfd1041faa158d651e746413e9"
  },
  {
    "url": "posts/mq/why-mq.html",
    "revision": "1125efb9b2f37369c37bb261072f587c"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "e1b3eb3c18982f9164d3ef6056770abb"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "676e65c1e7abafa3c880f91a89114a5a"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "19ad427a002ec3750e8838cc61588642"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "30d3b313fb3084fe04eb7dc374b46879"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "f05745df7c48f02f3bdd17df7679fd07"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "89276e4e7c2d3fb859a513969784af04"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "036b64fb35a483cd08461baa9373b59a"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "105b31981ee9ce3f6f42f5209d3f606c"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "3ace5dc3401c7c7a7c4bf5deb5f6213e"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "1c3b852088785cbed88578aff7a1efa6"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "d3fa85d37d5055460ca0a2458fec588b"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "67f8f95a75e97abb31f2d5de55eb67a8"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "bc9c9e7a2f36da733041aa614677c93c"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "90c5ea228583e5376bbd44b38e6bfdd3"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "30d264421d66b1cbb9e8f7febfbb1842"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "2d294b0bbae48ad7e6c2b3041724629e"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "f6c76f56f6a5887e61345e0e329bc3e4"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "f3ee797ef684663ab1a1ff7664849ce3"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "d3121af81a6a7f6821caa56dc037038c"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "40a37964cfc44e1d7695237923e14d58"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "13b04a3bc768a7d50ded11719645bd7a"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "2f6247f914881d2761b20664cffaa417"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "488d1071e0b8b5bc708c5d4d471c793e"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "a1b4399e9c152c911854aeeb33e75f2e"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "a809f677e924933c9cbf28ff4e83334e"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "a36abe942fef358187b3df884a97a8f3"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "f06477032fdb652e5534b492ec399730"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "3d495f38fb0b59c5afcf836d1177057d"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "ece9bfd9c764b3852abda76287b66038"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "019c0ab9912a1abd5ed1da0816984ca1"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "1d2b3e1d4e2ba90b60280091173e44bd"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "23fc0853248495d11d0731ddf749539c"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "a2c4bebe60e5c35d4407cf1a05bd963c"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "253f3c0f36b29089ba4ddcb7da85e59c"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "5c4eac20effe98893d97cb472bacb32a"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "b77f9c613e84bf73e1839556f80e5ccf"
  },
  {
    "url": "posts/other/aria2-replace-thunder.html",
    "revision": "4c46eba29fadff9f45f32be3db928a2c"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "c570759cb3f3763590e165feb26db1d9"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "5b2818b795032e185cd81e8cba5d8eb0"
  },
  {
    "url": "posts/other/iqiyi-danmu-convert.html",
    "revision": "1a2c2c5c4ed95c1832ae2da3a9e7efb7"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "baca9c1904ede5c7754615ea73e1dba5"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "dc0a4194f5f178f838c1397b83f42507"
  },
  {
    "url": "posts/python/deadlock.html",
    "revision": "7ed6bfeef9f5fdde4ef0e2263c29479e"
  },
  {
    "url": "posts/python/normal-errors.html",
    "revision": "805d0dbb85218afee626a703480e7d60"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "aa4f9215d79ba167c2171b77f9f2c5e7"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "82906973969c41bcf58337a1b056d4dd"
  },
  {
    "url": "posts/python/python-dynamic-import.html",
    "revision": "c616b4229657df8112791c1c1d8a60b8"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "cb353314cae3de198e8557393a7c2efc"
  },
  {
    "url": "posts/python/python-metaclass.html",
    "revision": "ffeedb17febb8cf1d8107f9e1b9a0157"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "854b401911919eb4feefdb121a81b148"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "e7488e54bd66dc6736244da292e418f5"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "f86496dd6376d6838b16432a3af56d3e"
  },
  {
    "url": "posts/python/whats-new-in-python3-8.html",
    "revision": "74f56f61ec9c08852e2cbc15b26513b4"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "b3fd88b8cb57ec28153f7d8585b7bf90"
  },
  {
    "url": "tag/algorithm/index.html",
    "revision": "a4f6b840d9a7cf2f60e465b043633fd4"
  },
  {
    "url": "tag/android/index.html",
    "revision": "1a6193009f7a6398946c41caeceef1b2"
  },
  {
    "url": "tag/api/index.html",
    "revision": "461b71560fb8b3555daf38f84e3dcaa1"
  },
  {
    "url": "tag/aria2/index.html",
    "revision": "005c40ff7738484bbcc10b1048345001"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "28f2a4df1d92431fc977d0510fc049e3"
  },
  {
    "url": "tag/context/index.html",
    "revision": "487f77c88bf813b8e6ea580878b1dfa1"
  },
  {
    "url": "tag/database/index.html",
    "revision": "69b5ad4ccb385462ca8aecc565f4e4d6"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "8b732893a06ecc322f0a39a06cfdb781"
  },
  {
    "url": "tag/emulator/index.html",
    "revision": "96ef8efb9302964250ad41c8d6878763"
  },
  {
    "url": "tag/git/index.html",
    "revision": "4a9c229dbfdf9ef419e9cfbd79967905"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "b96a1ba51a3c805f39f01b1739acfd96"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "5a83c006440dba257e1e7202392fd758"
  },
  {
    "url": "tag/http/index.html",
    "revision": "834db0acf414b4915ff569ee1a1e6926"
  },
  {
    "url": "tag/index.html",
    "revision": "386978e4ae9c670b2a18a7b08673d3d6"
  },
  {
    "url": "tag/java/index.html",
    "revision": "a8c9c2d4b687064d64bf85a39ee81ead"
  },
  {
    "url": "tag/java/page/2/index.html",
    "revision": "55cc285b94f243b0b7087f04798a214c"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "88c05455d70510f9f7098acbcf124620"
  },
  {
    "url": "tag/linux/page/2/index.html",
    "revision": "4df79153bafd89ad1a52bc494818e695"
  },
  {
    "url": "tag/macos/index.html",
    "revision": "78752657fe7f52a6477dddfbd6c827c0"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "8aefeb60b2dcb28b609d722d40580e88"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "4dfd00f5870aa276f71173df8c92334c"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "8453f94e2bd9b4f7e00975c55dd21f5e"
  },
  {
    "url": "tag/mq/index.html",
    "revision": "8e79fe36b29eb46e0b1a8f87f61b2078"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "5e8b64afb08d14233c74c533ffb76736"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "4d2d150227f970226835f6689b563249"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "59a80ab01601fdc2ee10eb41c714e8f9"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "b54b477f2f99a3557dad1954d7e7df9d"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "60b3df29c76159f0b70be797e22a4779"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "0cad0f876b68843d4e8867ecb23e5e2a"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "92e392239715899556fcda6d00e285a2"
  },
  {
    "url": "tag/other/index.html",
    "revision": "15b2f9c28691300c276f2fb11667f99b"
  },
  {
    "url": "tag/python/index.html",
    "revision": "71f208962d92012aa2ab465857d1be03"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "8dde8216acedab8be4f1bf02649199f3"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "038ade81285d4cf52193b4d718870a6b"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "0bc99f04fc30b5956fb8b32fdb7f76d8"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "4503d75ae0e88a9f8e593f1ca378433d"
  },
  {
    "url": "tag/termux/index.html",
    "revision": "de6db99c72ff2012902ee90157737c5e"
  },
  {
    "url": "tag/trojan/index.html",
    "revision": "eeb7c0144675b43f6667df493acd1ef5"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "ab9adab49ab9030cacf0532c8b5d4ec3"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "fdde5b08f79b8b32cf42948e4117669e"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "c88f9a0179a84b8761272d83c6bc5303"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "72301070e359d57901470d97d2bcaef5"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "e42f1278c54151d693ca6976f631f691"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "a2f96bd8dfaf5e2f5121f2dd6c29c1d2"
  },
  {
    "url": "timeline/index.html",
    "revision": "023b0423b3152c6dada96ad366f9eb5d"
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
