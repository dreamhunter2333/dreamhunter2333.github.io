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
    "revision": "39e80f3bcfb41919f010e5f9a769e37e"
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
    "url": "assets/js/100.5dd551d1.js",
    "revision": "1aad665e97e20c82cf9a2d12208b95e4"
  },
  {
    "url": "assets/js/101.1a840e39.js",
    "revision": "2214d27e3b6a53c7839978925a2c1a06"
  },
  {
    "url": "assets/js/102.db582abe.js",
    "revision": "b16cc7bfc5ec9f5f864e4de5e5ab82c4"
  },
  {
    "url": "assets/js/103.5985200f.js",
    "revision": "87c17959ce0c91c4386c2fdba7a1678b"
  },
  {
    "url": "assets/js/104.7b963330.js",
    "revision": "eaed5f2e2bb4220c10cb8549923e0280"
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
    "url": "assets/js/13.0e44f215.js",
    "revision": "7e4d5eced7480794290092475d256a3b"
  },
  {
    "url": "assets/js/14.3f2d66ca.js",
    "revision": "0082a21c724291e8f7ddf7d22a9af456"
  },
  {
    "url": "assets/js/15.f4dca938.js",
    "revision": "64d27a55199c13fede85f17e298dd5eb"
  },
  {
    "url": "assets/js/16.2e058c04.js",
    "revision": "616da28d530d2c86340ef3c3a630ed87"
  },
  {
    "url": "assets/js/17.54f2a722.js",
    "revision": "34301e738a7e4b528cf61071af9e2d0a"
  },
  {
    "url": "assets/js/18.624c6b16.js",
    "revision": "578084dec3a5b176fcad6b0398c8b3e1"
  },
  {
    "url": "assets/js/19.01563b2a.js",
    "revision": "5d9adcb5125adc750ca898d7516e263a"
  },
  {
    "url": "assets/js/20.798f9eea.js",
    "revision": "84e76c626837147f9f24c2f72493b56e"
  },
  {
    "url": "assets/js/21.de8910d1.js",
    "revision": "c3b41f4e152be9f581d94e806154e243"
  },
  {
    "url": "assets/js/22.de7c941d.js",
    "revision": "554fb572095457ec9633b333e7067dd4"
  },
  {
    "url": "assets/js/23.de0d4b68.js",
    "revision": "10a42cb7b85f546c39fc7f6904601aee"
  },
  {
    "url": "assets/js/24.0970d1f1.js",
    "revision": "b6272f03958c8dba9424a3f3f1e767c7"
  },
  {
    "url": "assets/js/25.618fc99b.js",
    "revision": "531cce75c81b99b2a94c859265450fd2"
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
    "url": "assets/js/35.687e1e5d.js",
    "revision": "06667f9784c8639311cf681c5dabf3bf"
  },
  {
    "url": "assets/js/36.e4a8e121.js",
    "revision": "e56518bda6a45322f019bc27dbb59a0f"
  },
  {
    "url": "assets/js/37.7f7adb3e.js",
    "revision": "f9c1ccb2f96d84513010f0741ef59817"
  },
  {
    "url": "assets/js/38.9a5d9753.js",
    "revision": "8d79c44a3b6bfc5627aec9aef2266065"
  },
  {
    "url": "assets/js/39.83757d78.js",
    "revision": "029582c3dae1804e75c61ebeb2cd164b"
  },
  {
    "url": "assets/js/4.82827657.js",
    "revision": "16886d2cd0cbc839eb15b36b6007f24d"
  },
  {
    "url": "assets/js/40.297e60e8.js",
    "revision": "afdce550db36d6903582aa9a35427291"
  },
  {
    "url": "assets/js/41.5ff7c94f.js",
    "revision": "d5e8dffabccfb9a30e89353adc858e81"
  },
  {
    "url": "assets/js/42.6e5b7208.js",
    "revision": "c3513f7c144b9868715b7427961daf55"
  },
  {
    "url": "assets/js/43.be497b6c.js",
    "revision": "dc74b675255064b48d3ecaa027177d95"
  },
  {
    "url": "assets/js/44.f02c8997.js",
    "revision": "d77774a864382012e34352840b6667a0"
  },
  {
    "url": "assets/js/45.c6a9e818.js",
    "revision": "8ea7c8d1b7d1ab05704535b790978798"
  },
  {
    "url": "assets/js/46.e5b4b16a.js",
    "revision": "4591ae2b66433cf45707bd0893d4a81c"
  },
  {
    "url": "assets/js/47.4a3042b6.js",
    "revision": "37bca017806bb89d72c66dba2a3e1cde"
  },
  {
    "url": "assets/js/48.80574150.js",
    "revision": "02156f0f8dd96f3c4c28e78bb2d4e3da"
  },
  {
    "url": "assets/js/49.4db7fff3.js",
    "revision": "61f006280528cb55ff66fab96f2f5a9a"
  },
  {
    "url": "assets/js/5.f171fb5b.js",
    "revision": "1c432ec3e561c0caacd0919ac5415365"
  },
  {
    "url": "assets/js/50.df701638.js",
    "revision": "85c026a45106af04e157d218af4cd25b"
  },
  {
    "url": "assets/js/51.d4ef58d3.js",
    "revision": "fdf6cd8e7641763b548ed019031ef078"
  },
  {
    "url": "assets/js/52.0feea87e.js",
    "revision": "7bc89d0bc154a9bc06fd0d74cea6b675"
  },
  {
    "url": "assets/js/53.ccb46e3a.js",
    "revision": "4c9539eda9039e71572d84a89225b7f2"
  },
  {
    "url": "assets/js/54.7e54a2b5.js",
    "revision": "1409eaf94919e87096e00fc9897c16d0"
  },
  {
    "url": "assets/js/55.cc2501ee.js",
    "revision": "0f9326a8d660c6e4ebfb08f4c5da8869"
  },
  {
    "url": "assets/js/56.617f6376.js",
    "revision": "55f003f1997f664e8b08128d2ca15556"
  },
  {
    "url": "assets/js/57.8dd54545.js",
    "revision": "c53bbed251d7a5bee8cfadafa6588489"
  },
  {
    "url": "assets/js/58.aa111f41.js",
    "revision": "3781b8285f741fb45ed43bf3bdff430e"
  },
  {
    "url": "assets/js/59.ca2c3f08.js",
    "revision": "5bf9c2eca9d22f0b782cf16f9a17b584"
  },
  {
    "url": "assets/js/6.6d7bedbb.js",
    "revision": "91579a973bf33c858aea0e27e16600c8"
  },
  {
    "url": "assets/js/60.f2932195.js",
    "revision": "a79112eb94a220cca48a22a327824f03"
  },
  {
    "url": "assets/js/61.71234e5e.js",
    "revision": "0ef71231e12065aca446543659adb521"
  },
  {
    "url": "assets/js/62.6fcd2a4f.js",
    "revision": "3695d01da9b91cec058e7622c47bf94a"
  },
  {
    "url": "assets/js/63.2606fa7a.js",
    "revision": "72884655c462d520fa0d76cdea4dff97"
  },
  {
    "url": "assets/js/64.21fb883a.js",
    "revision": "fc813d5349ea2175fb9f0e72f50e4ede"
  },
  {
    "url": "assets/js/65.a5beb8f6.js",
    "revision": "f519f4f92321fb3d30d28fb7e87d00b1"
  },
  {
    "url": "assets/js/66.3f7c9d5c.js",
    "revision": "4c3f01fcdc3e68041e9a881952bf8394"
  },
  {
    "url": "assets/js/67.9dd901bd.js",
    "revision": "919b58b50e23413cb7257ead54c9bfc5"
  },
  {
    "url": "assets/js/68.40d4563f.js",
    "revision": "3cf7cd9bf25af120a6d85cb2917be72c"
  },
  {
    "url": "assets/js/69.de2f8853.js",
    "revision": "648000f9b8f9c3b73189be1b53b7ce38"
  },
  {
    "url": "assets/js/7.76b7dfa7.js",
    "revision": "715c723dc2232b73f9c1500622b1fc01"
  },
  {
    "url": "assets/js/70.2ee7934a.js",
    "revision": "be54ad94f7702c16767572ab7a1ec941"
  },
  {
    "url": "assets/js/71.eff18d6c.js",
    "revision": "3195d61bdf140b91c2e394150fdfc9c0"
  },
  {
    "url": "assets/js/72.90005ce0.js",
    "revision": "fd9cc619de802d29d2fed53e5cf7b978"
  },
  {
    "url": "assets/js/73.4e32e0fc.js",
    "revision": "02fd2f910c11d7fcaac7b7c94abb3e0d"
  },
  {
    "url": "assets/js/74.eceb1dce.js",
    "revision": "418de8d62543729405932b6fadd4a300"
  },
  {
    "url": "assets/js/75.b0cf26b2.js",
    "revision": "8404851811d4baf79d50d52c0d84b730"
  },
  {
    "url": "assets/js/76.035ba0e3.js",
    "revision": "dc6da798c7f4d2f5ee8f6d0649ede982"
  },
  {
    "url": "assets/js/77.7fe7df18.js",
    "revision": "7eb49f64817cb61a002addda55d1f309"
  },
  {
    "url": "assets/js/78.5dbff126.js",
    "revision": "f78b6df7f3f5b0bd78fde3aac5a2786f"
  },
  {
    "url": "assets/js/79.353d44ce.js",
    "revision": "587ebe25a0a4442579c1668ff0a4ef6d"
  },
  {
    "url": "assets/js/8.07210b02.js",
    "revision": "f9bec44862f6ba153247245d31c65124"
  },
  {
    "url": "assets/js/80.7d0e0404.js",
    "revision": "703d40772f9fb9f02c8fb3aac9d2b20a"
  },
  {
    "url": "assets/js/81.69224b78.js",
    "revision": "7ce1b273da2818ae237446f95a3c69f9"
  },
  {
    "url": "assets/js/82.e3c0879b.js",
    "revision": "9eab4523e82fe78c9dc6b3e5ac1a9fae"
  },
  {
    "url": "assets/js/83.52ba19e4.js",
    "revision": "30820cce709ab0041722ac90c4f0fb82"
  },
  {
    "url": "assets/js/84.ecf015a3.js",
    "revision": "10719c4fdd5cb5d966cc7952d4243b32"
  },
  {
    "url": "assets/js/85.f9c1f4ea.js",
    "revision": "5c5f21a545f16707c8940eb2b40020ad"
  },
  {
    "url": "assets/js/86.6355483d.js",
    "revision": "8b63c7edeaa3a0198c4eee6956007192"
  },
  {
    "url": "assets/js/87.9211894e.js",
    "revision": "fb7e0fcf598b02ca37e6f1daa6dd403a"
  },
  {
    "url": "assets/js/88.9750e381.js",
    "revision": "419dec9af5bf8b2ed20de29b4be63d75"
  },
  {
    "url": "assets/js/89.94c372fb.js",
    "revision": "aa1d9c2d92283d4f9345e4dfb9dafab1"
  },
  {
    "url": "assets/js/9.6db1fd55.js",
    "revision": "0a585385d20372fc49c45eeaee5e34cb"
  },
  {
    "url": "assets/js/90.d9f27d4d.js",
    "revision": "1552628795c470f2c3f3dabc0da624e7"
  },
  {
    "url": "assets/js/91.d9713976.js",
    "revision": "7e06376050266c679a323b5e49da878d"
  },
  {
    "url": "assets/js/92.8a02df4d.js",
    "revision": "1d4d0cd005579648537c30417854fedd"
  },
  {
    "url": "assets/js/93.63c6ab2a.js",
    "revision": "93d48458b78c11c443bd83687fa66dd0"
  },
  {
    "url": "assets/js/94.ae9d9a92.js",
    "revision": "7e5c4bd54794bd73f887fb6f70b86a31"
  },
  {
    "url": "assets/js/95.0817afe3.js",
    "revision": "88794d6fe7f353c04ab4b7446fe97a57"
  },
  {
    "url": "assets/js/96.86dcb3ef.js",
    "revision": "da763c875d7783510f32947deeb679a9"
  },
  {
    "url": "assets/js/97.410e1014.js",
    "revision": "527c2614b8d23495414090c55c2efc2e"
  },
  {
    "url": "assets/js/98.105c9e44.js",
    "revision": "c51a47c0a9372edb985814cb16dc8d79"
  },
  {
    "url": "assets/js/99.515265de.js",
    "revision": "35f5edd099d161acd4f3549f3e365fa3"
  },
  {
    "url": "assets/js/app.a01c4311.js",
    "revision": "33f73b794cc47529e5c6968dd4f93a08"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/database/index.html",
    "revision": "565d3507877ceb5c9685fd488efbfc67"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "30fef26dddc0c35562837f2b5f37ae16"
  },
  {
    "url": "categories/front/index.html",
    "revision": "0ff440f8c963349e920b96035f361d12"
  },
  {
    "url": "categories/git/index.html",
    "revision": "b28ddf980eb2613683acccf025464376"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "2f004290371d55e11600b180fedc4c0c"
  },
  {
    "url": "categories/index.html",
    "revision": "3ddec83c61d37f11ae0c805ead4a538f"
  },
  {
    "url": "categories/java/index.html",
    "revision": "0047dcd5c3f8b726d424707e6f688dbb"
  },
  {
    "url": "categories/java/page/2/index.html",
    "revision": "d3715718dea2ee4e57a12e30dbfd5943"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "3923271da57383cb194e1981fea45ca7"
  },
  {
    "url": "categories/mq/index.html",
    "revision": "2b9f654823eb55a9c4e1c660365dba49"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "cc8489903ace4711b9b763ebd4079fc0"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "a7eb3cb03c562ef7114d3561dd3a1032"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "5845e9116624ec7ae4e0bd6cf0bc6eeb"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "ac7efcd77ac448b572bfa1a4d5ad8979"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "cf2790295707142301895b651b9efc9f"
  },
  {
    "url": "categories/python/index.html",
    "revision": "28a8abecfdd3e65439e4fed193388a44"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "e0a5b663eafd813ce4264775ea09897a"
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
    "revision": "f83a01c4a75a89dc4cf8ade715cbcd91"
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
    "revision": "1e5eed9874efc9338178c7f25885fb15"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "c58713a4a23bfee458d3954216925435"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "2b83d32b18af0476aa6c28aa05afd009"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "b6a4d48849c54f7e3aa1bd91c30b8cc8"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "72942dee39f57eadf379b9dde89fb682"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "d4c637aa7363c84acf832c4f280582e9"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "422c8f3ecadae48d61362df4aaaa466c"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "7b6de1db4f961ea111cf3671098325c8"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "344ad87d885feaa66a00b565dce030c5"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "49a919a67ae2328835d56e3e3fe433cc"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "d64ac1ee82e081038fc45c1566d4c69c"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "cbf3cfe8bf4e7cd33a88a3aca2195a50"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "58fbfda5b01166f8d25974dde82a91b5"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "c4ff7d697b26383b68c70a3c81b0d11d"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "456516fc4f3d60505b779244b9470fe9"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "12bc533acbb66210d0dfe16be1847a0e"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "e8ea433be6b8f2ac7f4b47f4b775444c"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "fb421fa02ae628c4ad87bc4fdb4c9a06"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "8893d025a350a9d32b9522be959baf78"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "d4fdd3f9612c825cc53a9c61bcdecd40"
  },
  {
    "url": "posts/java/java-http-proxy.html",
    "revision": "ef8ea8c481409d0ae2a71f6d504d7321"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "bc17da199141ba737274d40edd3da1a1"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "2958e311c31e4674928f8ff5aca236c6"
  },
  {
    "url": "posts/java/java-spring-MyBatis-Annotation.html",
    "revision": "8731bb06cbb712097d6462d2f4146de9"
  },
  {
    "url": "posts/java/java-Tetris.html",
    "revision": "46752e5d5cacddfe03fc10fbe5328068"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "e05cc985d732771d8d6467041bf6841c"
  },
  {
    "url": "posts/java/spring-RedisTemplate.html",
    "revision": "bf1e86936ae2d1c0e822ec7399e0711c"
  },
  {
    "url": "posts/java/springboot-disable-autoconfig.html",
    "revision": "19084a05e81e3dbf374ad93cd5e31a06"
  },
  {
    "url": "posts/java/springboot-schedule-task.html",
    "revision": "3983dfaa52402dc80a891770db1a90d0"
  },
  {
    "url": "posts/java/springboot-swagger-ui-custom-config.html",
    "revision": "3faf157da27e304fb2e6d91e10e6b2b2"
  },
  {
    "url": "posts/linux/linux-ecs.html",
    "revision": "8d188040a87f20a4971ef1fe6061f846"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "963cf533d8d62fdbe4aa90e35f489a97"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "f297ea099e38d89886a1bfdf096f18a6"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "6cb30d85f419d67a6e1ecdf4ee2f45a4"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "7b92e0f2a0914bd3c9d15efa86159404"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "8ded3137f05bdd1f08182a8c6a6bc2db"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "4333d9b948d8bc390fae80d60878cad9"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "a12c4816f6cae44bee7277002ca82975"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "6f1eb559b179622d8c67a0739cd65801"
  },
  {
    "url": "posts/mq/ensure-not-repeatedly-consumed.html",
    "revision": "ce28385f75cb22000f4d2b3b16981a37"
  },
  {
    "url": "posts/mq/ensure-order-of-mq.html",
    "revision": "76edec758c7986b4e83c807cabe52541"
  },
  {
    "url": "posts/mq/high-availability-of-mq.html",
    "revision": "169e380bd2ac6b5c75dc75150e0d27cc"
  },
  {
    "url": "posts/mq/mq-problems.html",
    "revision": "46e499c3bb0a055345af84c6300732d1"
  },
  {
    "url": "posts/mq/why-mq.html",
    "revision": "bee7b7e20cb60d27bb222c2c7f7f2fb0"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "299eefb2f6ec08665e64cea9006cd3ee"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "1da2330c7615dcac511965c84754426d"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "117c0e134a750148ccfc5c3f7a6cc461"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "78855e2d780df7dd0ece26c0703f3923"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "53b37a64e233b9c89128b5ca7bd1ca4f"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "a8b0026c99acd9bf99ecafc9420e8dc7"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "ce3006e1fd2bd5a805cde9959e559e62"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "3e90e4b8e53e96410b540f0954b6263f"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "567acf35c35dbc5d29798a25257865a5"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "5a8a55a25fc9759989eff4182fbe9e91"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "6fc1d1f7d60ad9e2606793e9d6893ef4"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "db93ef87f24bb64b358fcaafa3a5a7db"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "2f16a59e5e896fea97601b24b06880d0"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "37beeff105b29364773e0f472b9d0bdd"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "8e45096e2a6d1b6c8424e3467dd63c9c"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "5863bfa01813c7507d4e213227f28912"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "77de1dfa07913eef02fa6f43919b472b"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "9dff7ba75764929aa1216af759e47569"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "4dd7b9651f274cf9e611c3f5a59fd23f"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "bc0d8e0ea549cbc68aea0ac9fa0034f4"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "5b038ab91f7d737d04bf722176c6bf9f"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "50e41c12123bfa2833e1dddd9817f87e"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "f10b5922add8747eec611f961a99be80"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "3942e23a31e504353a4a6565da606062"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "246956d03d9106d7744a0995464d85d2"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "a10df632b22272190efb83e6dc757e6e"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "e474b8487ee32a7a1c9e86e11be308ca"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "94b339625badf2206c14320ccda2d9ba"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "310070f1d2c3e92c2f16dae72c6e7fc0"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "3d30e72dd576f2a8dd029b9c63f03926"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "5d483443ae01f2ac0cef84acf91138e0"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "394e3364e8761c14ea6ce9d7ee9ca662"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "b880dcb9b9495641dd0814d8b16658f3"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "5ea42ac3793fe5a112ec58b67b349212"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "ed33f0af5e4e0d5e14fe31b735719398"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "5af7400a055e3a6be7c3bb94b42fe350"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "b538c277e6be5f58c5498b665b19e811"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "b52544fccb8e66028535e469cea5e1e8"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "58183be608e326a09a7733898a44c2e5"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "fd9a1d2b5d7a21677269355abd6d6b40"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "bfc358f7c12d7b44e0ef47b8f25b4135"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "a643ff58b681dc1efeb82b13e6ff75d3"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "38b5b940c88e052f8d30c64ee39b51ac"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "4ac2f3849c6deccdfefb570a341f782d"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "b55bf8ebd861e1c588fb64185c166921"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "8c35d98076475201e01fc89bcc2d7a08"
  },
  {
    "url": "posts/python/whats-new-in-python3-8.html",
    "revision": "cc4ddcc9691f9e5fa91333a1f68451c3"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "416666af4eaac64cdf62d4234c464dad"
  },
  {
    "url": "tag/api/index.html",
    "revision": "28f3bc84beb7a22b1bcd61b44abf15b1"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "14b2b2f54d407f8cfae42a0339edd828"
  },
  {
    "url": "tag/context/index.html",
    "revision": "54dab0641a1a27676cd7ef0739083f0e"
  },
  {
    "url": "tag/database/index.html",
    "revision": "bc32a80bc5e69947e3b23d7eb0d84c02"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "10d286e8ae4fa9682815521ba20d1752"
  },
  {
    "url": "tag/git/index.html",
    "revision": "95ece643922631a8f29d6bd0dd5b4d5a"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "a082c0e0b6248f7a36ea6d53cc91e9c0"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "7c066643ac9f4cefa6da60e750c95cb9"
  },
  {
    "url": "tag/index.html",
    "revision": "36cac8c14d4864e1d312463fa3fe2340"
  },
  {
    "url": "tag/java/index.html",
    "revision": "90c5d4dc95d21f20c14458ccd3c4b267"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "d3e3c6664279511090c8c0c74985f2ea"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "dee181c1a8a7ac439d6cfe59613060e9"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "bb831016211cd4de9be526a023214a96"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "a8ca680d8f1ee3e0d6746499901af27c"
  },
  {
    "url": "tag/mq/index.html",
    "revision": "5d01279cacea13edd4c8cf243cbd3e0c"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "4ae823abd395dfc7737664bd09615bd7"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "c1b64e687db9b8332b32fe4866820fe9"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "9a8b558b467a35e161ea76a6dd8f6cdf"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "4533f6de808b0cc1fe665bdc606be391"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "728c864b30ba5dff98694a8455e99dfa"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "c6caddd036689b326d0d2914e46446f0"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "4f7e9afa85150b2c97a0090796a6ea71"
  },
  {
    "url": "tag/python/index.html",
    "revision": "28bdf2a1fef167d4e4baf96afd335592"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "a526ea14ec5bf40014b2d1538ae99b62"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "2eec460bed93d36ff7322839db255e61"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "91f610419a3a130ba05ec96daaa9149b"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "774f3312de7983160300234704a7e18f"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "6ba9bf3bbc295f317bc3ee36ebbd49f9"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "1b8d2f6a11f7aa63b31ff06d10cb0420"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "64f188b466cdaf28ce21f04ef3ca30f4"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "3fa248c3f06b8b7bae254973695eefb3"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "ea86f8fe95ccdef5f7a5095dd82aa1cc"
  },
  {
    "url": "timeline/index.html",
    "revision": "7c8053ca41f0ce7bc0eecf8f5a4aebb3"
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
