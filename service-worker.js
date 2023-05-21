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
    "revision": "bcb12b182df469878c2f8af6786aec68"
  },
  {
    "url": "assets/css/0.styles.14dceeb3.css",
    "revision": "120f51e851b73b1f563706c12fb390dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.d53290c4.js",
    "revision": "9f16fbde07e3ad6ffd1d9bc6c9347682"
  },
  {
    "url": "assets/js/10.2863026a.js",
    "revision": "0a5e6ac42b84e3afa2d0e4106223a9f1"
  },
  {
    "url": "assets/js/100.383da149.js",
    "revision": "a6c47b7d0ef3056296035e69ee09a9ce"
  },
  {
    "url": "assets/js/101.1e43ec7a.js",
    "revision": "b3c57dea3ccf4a57120a117bf4b0a58d"
  },
  {
    "url": "assets/js/102.86bf33e6.js",
    "revision": "bb315c1adbf66705835e7263644bc648"
  },
  {
    "url": "assets/js/103.e05ca2cb.js",
    "revision": "fd7e0e6484f9f58cac4c5299d94a8931"
  },
  {
    "url": "assets/js/104.c76535fe.js",
    "revision": "9c06664c3177aa6990973187f747390c"
  },
  {
    "url": "assets/js/105.7ccc3bac.js",
    "revision": "85813473db80ac1536ae53892a90613b"
  },
  {
    "url": "assets/js/106.46b36bd1.js",
    "revision": "5e3009d16006e31b42e7110399d976df"
  },
  {
    "url": "assets/js/107.8f79c06c.js",
    "revision": "8ad05402dd223a74589672632baed43a"
  },
  {
    "url": "assets/js/108.ddd6040c.js",
    "revision": "9dc4f79a062ece89da9b67713044a388"
  },
  {
    "url": "assets/js/109.6f6f907d.js",
    "revision": "d016cfcf6dcf7365020ed707bbb948b9"
  },
  {
    "url": "assets/js/11.48f5c8f9.js",
    "revision": "bd8379756c2e27ed704ac66791dab7d2"
  },
  {
    "url": "assets/js/110.74d02dff.js",
    "revision": "f6940b4b85e8a4a1b8ca56b026aa593f"
  },
  {
    "url": "assets/js/111.55d15671.js",
    "revision": "dc765385146da9f29c1b62ab8a9e7ef6"
  },
  {
    "url": "assets/js/112.d730bfce.js",
    "revision": "ebaab0796aa53e241b97eed2bc67a763"
  },
  {
    "url": "assets/js/113.5c9f0dd6.js",
    "revision": "faa816a739e2a786163a6c8896ca47a4"
  },
  {
    "url": "assets/js/114.4a838cb1.js",
    "revision": "0ad198aa4ff5c81f582dbabeb250be52"
  },
  {
    "url": "assets/js/115.3bf4418c.js",
    "revision": "5b98decc68e5b0ed383cc0bae4eb6323"
  },
  {
    "url": "assets/js/116.7684dbe7.js",
    "revision": "0d4a746162f93f81acabd900754d4be2"
  },
  {
    "url": "assets/js/117.a814ccb3.js",
    "revision": "9bebed790caa4cd264a72de7e53af363"
  },
  {
    "url": "assets/js/118.2bad5908.js",
    "revision": "ed76ed1f7688576840b231840ef9e479"
  },
  {
    "url": "assets/js/119.10398af8.js",
    "revision": "2da13496a189477a91ed4c641f8d2363"
  },
  {
    "url": "assets/js/12.e3b49adc.js",
    "revision": "c80e995bcfc0835c4e454f01ef3a8247"
  },
  {
    "url": "assets/js/120.9c108b47.js",
    "revision": "4aab6e70db834867755b19f4fe4e5439"
  },
  {
    "url": "assets/js/121.1b7dcaf2.js",
    "revision": "bc1519ec613b544282a13510d55d2e69"
  },
  {
    "url": "assets/js/122.b6af893b.js",
    "revision": "a98c4fb787961cb0c29197ba1aaa09ee"
  },
  {
    "url": "assets/js/123.aef88a1e.js",
    "revision": "d01733151942171f634722ee87dd7406"
  },
  {
    "url": "assets/js/124.b7aa5042.js",
    "revision": "fa9ac31ebcabf46ddc22af1eb587e545"
  },
  {
    "url": "assets/js/125.d0ecad67.js",
    "revision": "b168b1abdaadc68c94f4c9b9da7253a6"
  },
  {
    "url": "assets/js/126.92f4d12d.js",
    "revision": "a5b9139a6229db9416f089d301d19174"
  },
  {
    "url": "assets/js/127.04d9adfa.js",
    "revision": "c94abdddffe453f4e594ffda1d5d5091"
  },
  {
    "url": "assets/js/128.842125f7.js",
    "revision": "13cc44bef74c3aea45981e27d29d4775"
  },
  {
    "url": "assets/js/129.6e98f756.js",
    "revision": "f4d47ec1f85df722366f57b9602848a7"
  },
  {
    "url": "assets/js/13.166a8e1f.js",
    "revision": "eef985731db460a063c6e5667347c692"
  },
  {
    "url": "assets/js/130.c9f040e6.js",
    "revision": "1e443d88abc1c8038b21b6a60cbbac8b"
  },
  {
    "url": "assets/js/131.b83f576e.js",
    "revision": "51c8499fe1e292a5cc3fd4619c0f121a"
  },
  {
    "url": "assets/js/132.22f6d8ac.js",
    "revision": "e8b130272ca0376ab33be9d787f4a4e4"
  },
  {
    "url": "assets/js/133.ab58750e.js",
    "revision": "eb4ff8ebb387058ffa9b6fe52897901e"
  },
  {
    "url": "assets/js/14.099bc8f1.js",
    "revision": "27fc4bdcd78f46f4b91217557cdaf0e9"
  },
  {
    "url": "assets/js/15.df2dddb3.js",
    "revision": "db7297e76419321f3b7d1bc64f7fd983"
  },
  {
    "url": "assets/js/16.6509d45e.js",
    "revision": "b5aaeedcda8c9d1ecf621c0097e4119e"
  },
  {
    "url": "assets/js/17.da25f6bd.js",
    "revision": "677d9d89662856e3b74c3c2ab7c6b03b"
  },
  {
    "url": "assets/js/18.ab773443.js",
    "revision": "ba87acaee0076d06fed01f51f3847684"
  },
  {
    "url": "assets/js/19.bf63917a.js",
    "revision": "f32ed25e4d0e5571c64853d7d01d82eb"
  },
  {
    "url": "assets/js/20.e74d580a.js",
    "revision": "46cb714e95d65e521c1aff4762bb913f"
  },
  {
    "url": "assets/js/21.94f0061a.js",
    "revision": "c3b69b06f4aa5613195e60e24729c96c"
  },
  {
    "url": "assets/js/22.c8cbf80b.js",
    "revision": "ce95e7f8a6aab974fea1cf1028c89a0e"
  },
  {
    "url": "assets/js/23.80d1e73f.js",
    "revision": "a92295efa1ed11ae7b4516d4c565df8a"
  },
  {
    "url": "assets/js/24.5e14b6b8.js",
    "revision": "7c87823704ea405dba954968824baf4a"
  },
  {
    "url": "assets/js/25.da6e020c.js",
    "revision": "1e739d8f5fc2e7473c457b511b3b57d0"
  },
  {
    "url": "assets/js/26.642d838c.js",
    "revision": "4b4c58ede55c9b02d2a37a8caccf89ba"
  },
  {
    "url": "assets/js/27.3f7d3ce3.js",
    "revision": "a9cef5f15e21aab873f00983f8c607e0"
  },
  {
    "url": "assets/js/28.e08afb8c.js",
    "revision": "ec6454f9d16f92d9a5f2eacd9eebb5f8"
  },
  {
    "url": "assets/js/29.2bf4241e.js",
    "revision": "d7f2d2e7f9f697f442a538fcae883a7e"
  },
  {
    "url": "assets/js/3.5c008ce8.js",
    "revision": "eedcbb19eef3611b1f8129849ec8736d"
  },
  {
    "url": "assets/js/30.1309aa20.js",
    "revision": "4b9cd9aec922ffd1dffce04693c7da4f"
  },
  {
    "url": "assets/js/31.80f3d324.js",
    "revision": "ce1185a9ac68a0e23727ec52fbc5dff9"
  },
  {
    "url": "assets/js/32.4ae9bab2.js",
    "revision": "51d5cb84df6799f95eaf57811a6f9871"
  },
  {
    "url": "assets/js/33.1f85757f.js",
    "revision": "99e3d59efd7ccdee2faca721a1b75579"
  },
  {
    "url": "assets/js/34.1e8ae998.js",
    "revision": "81a3dbd4a86dcff730320cf2f19464e9"
  },
  {
    "url": "assets/js/35.b45545f7.js",
    "revision": "92fcf68cae09dab38b3693a320f9b233"
  },
  {
    "url": "assets/js/36.ef7300c9.js",
    "revision": "baee2eff53fc5c018e9dad0c7ad070d4"
  },
  {
    "url": "assets/js/37.9ebe218e.js",
    "revision": "c082e5dd5be67ca6bba2896b3285205e"
  },
  {
    "url": "assets/js/38.171557b4.js",
    "revision": "dac11b5f808d3c96f2fee6b2db57a71b"
  },
  {
    "url": "assets/js/39.54d63cb2.js",
    "revision": "0582faf03db459f13dc24d8b7c7e1ed8"
  },
  {
    "url": "assets/js/4.8d0bef7d.js",
    "revision": "6c5d84179edd4f99ade59458e7c6b7ea"
  },
  {
    "url": "assets/js/40.cd8b879f.js",
    "revision": "47daa2bdbf916c28f065b0bbe87ce0f2"
  },
  {
    "url": "assets/js/41.79ad3a27.js",
    "revision": "bee062079646a8d071cb0d7ac5efbae5"
  },
  {
    "url": "assets/js/42.fbb6ca94.js",
    "revision": "0ad293a6a18be9c5815ca18c077d7fa1"
  },
  {
    "url": "assets/js/43.926aad0d.js",
    "revision": "9a0ffb692dd3d34887a898bf3d26e3e5"
  },
  {
    "url": "assets/js/44.34cf1d8b.js",
    "revision": "afc6e970e64b28869836114bd00cfbeb"
  },
  {
    "url": "assets/js/45.8ce38874.js",
    "revision": "0fbb061e9ba9a5e45e795cb3b02fc595"
  },
  {
    "url": "assets/js/46.4b83ef5c.js",
    "revision": "f3b6aa35966395d6ab496e8749b86d78"
  },
  {
    "url": "assets/js/47.8d2ed99d.js",
    "revision": "ba9437255c7ad7d4c186c4bbded7e715"
  },
  {
    "url": "assets/js/48.2eaf04ce.js",
    "revision": "64d5e23e6e738edaa3f1255e71eae49a"
  },
  {
    "url": "assets/js/49.aa87827b.js",
    "revision": "b2bfa32496a602c8775f98daf584a279"
  },
  {
    "url": "assets/js/5.6b4ac50a.js",
    "revision": "c6f3140650e74da40eaa7857162b3087"
  },
  {
    "url": "assets/js/50.af26688b.js",
    "revision": "77a51dfc707133e58d520034dd0b543b"
  },
  {
    "url": "assets/js/51.35c8227f.js",
    "revision": "28adbfec05df0cccb9208f98ef612bc2"
  },
  {
    "url": "assets/js/52.e30e185b.js",
    "revision": "a01ad827ec709614f41a5911ebc2351c"
  },
  {
    "url": "assets/js/53.508cfc17.js",
    "revision": "922f0036852c76772f33c3c53cd74915"
  },
  {
    "url": "assets/js/54.7a82e925.js",
    "revision": "cb7cf74b9e88a809fa0eb075afc3da8b"
  },
  {
    "url": "assets/js/55.3053f0b9.js",
    "revision": "5217e108afe071afbfb42a893ef6e3e5"
  },
  {
    "url": "assets/js/56.43b0db4c.js",
    "revision": "bbbc52491b81eed763e38a0c7ec49b2d"
  },
  {
    "url": "assets/js/57.549d81f8.js",
    "revision": "3c56026dcfbd0859365f132ea3adf688"
  },
  {
    "url": "assets/js/58.f956880f.js",
    "revision": "75f6ccfd268edacba97d96ed5bb264c8"
  },
  {
    "url": "assets/js/59.1d68c8c7.js",
    "revision": "a0482938c26b2eac6ed9397ef35e3530"
  },
  {
    "url": "assets/js/6.acb314c6.js",
    "revision": "cdebc1a13beb3e62f0cd99edd6adf5df"
  },
  {
    "url": "assets/js/60.b98884b0.js",
    "revision": "6276b6b18951149bf68942e3fc2b7d96"
  },
  {
    "url": "assets/js/61.1e1afb16.js",
    "revision": "1f7911769178c2a854f36312ee74f0c8"
  },
  {
    "url": "assets/js/62.42341edc.js",
    "revision": "95dcf9c955b14003856d63cd9e2f00dc"
  },
  {
    "url": "assets/js/63.f4ec12f2.js",
    "revision": "a093e8280bd792d027fb633627ccc14e"
  },
  {
    "url": "assets/js/64.1b0b5b9b.js",
    "revision": "98280f022d6332cf770d8e9033371c14"
  },
  {
    "url": "assets/js/65.03c85303.js",
    "revision": "fb13bcf2e102386ebec51f4903f9715f"
  },
  {
    "url": "assets/js/66.ba14cff1.js",
    "revision": "40a358800c1357b4a8ae94d2b6e0c781"
  },
  {
    "url": "assets/js/67.8f80c33a.js",
    "revision": "64ab303a3a929b9f27c4f56a5f557a82"
  },
  {
    "url": "assets/js/68.a702dc32.js",
    "revision": "2763be9bb2378a370a465d5f190ec813"
  },
  {
    "url": "assets/js/69.73024a13.js",
    "revision": "384562ef0890e3b52772010a7d7c25f6"
  },
  {
    "url": "assets/js/7.177ceb88.js",
    "revision": "1e5425fc0e38c0d0daee1c11bca53c9c"
  },
  {
    "url": "assets/js/70.8626c384.js",
    "revision": "53b5f382d6fd9bcb13c1829050a1f777"
  },
  {
    "url": "assets/js/71.eef2552a.js",
    "revision": "674bbf8f49da030a6397f406b06e62cc"
  },
  {
    "url": "assets/js/72.7767804e.js",
    "revision": "fc361c7354591d5289be8601e97353ec"
  },
  {
    "url": "assets/js/73.a501d451.js",
    "revision": "a72256931118682537cafe880c2dc1c4"
  },
  {
    "url": "assets/js/74.da961042.js",
    "revision": "07b07b7300f6ae67c6058b0a6d1c30b6"
  },
  {
    "url": "assets/js/75.64167f99.js",
    "revision": "bcc3e379071e4c494380a57f7e2fd3cd"
  },
  {
    "url": "assets/js/76.1996cb36.js",
    "revision": "b02f2cb48d3d37dff8e39dca7f985252"
  },
  {
    "url": "assets/js/77.101dff64.js",
    "revision": "7ae4e4b752e6bbaeee3838963f54610a"
  },
  {
    "url": "assets/js/78.c229dd23.js",
    "revision": "2daee47ca8bff859f797d95ed9fad3cb"
  },
  {
    "url": "assets/js/79.74f60603.js",
    "revision": "eb1887366b4a506862a83bbe91a08557"
  },
  {
    "url": "assets/js/8.90144e1f.js",
    "revision": "51879b170f77f3f1bb5466d3d68bccd2"
  },
  {
    "url": "assets/js/80.82d8fc31.js",
    "revision": "e4eb4481bef46fb7f4aa8bb6e0d17233"
  },
  {
    "url": "assets/js/81.ec57ba66.js",
    "revision": "82cab0be7450b361338aefec4008e586"
  },
  {
    "url": "assets/js/82.5f96cca6.js",
    "revision": "c2085868f0f9f31c4b6629808634620e"
  },
  {
    "url": "assets/js/83.eb76420b.js",
    "revision": "b66500d8b49d3ca3dd553894ede1ed2c"
  },
  {
    "url": "assets/js/84.a12e71a0.js",
    "revision": "b2f799b6b3bd80a9063976ac90bd2bcf"
  },
  {
    "url": "assets/js/85.42ed4209.js",
    "revision": "68b4298f6b78743778108c6793594f2a"
  },
  {
    "url": "assets/js/86.838cc616.js",
    "revision": "8dadc85f42572d64cf2ffedf18ff3d52"
  },
  {
    "url": "assets/js/87.8688ecb2.js",
    "revision": "bca2ec78a48328a464f89ecf406226c2"
  },
  {
    "url": "assets/js/88.3ff0a910.js",
    "revision": "8b2cab620a1442fb6aa3dd205e8c1fbf"
  },
  {
    "url": "assets/js/89.507b3554.js",
    "revision": "eb56be5574b4d91a27056d11be4910f3"
  },
  {
    "url": "assets/js/9.5ad21349.js",
    "revision": "c0f242ce7985a080a68105b0f404e88b"
  },
  {
    "url": "assets/js/90.5472c591.js",
    "revision": "97a2e21e83fd332d0dd5ba8b0249ecd8"
  },
  {
    "url": "assets/js/91.1c17bbde.js",
    "revision": "971cf9d5528e779b05f6c009ad9cd3d9"
  },
  {
    "url": "assets/js/92.47e1eaec.js",
    "revision": "c835a4aeb98c20350f5d46593e7a295c"
  },
  {
    "url": "assets/js/93.0c0911bc.js",
    "revision": "612dc7559196790f9309c6f4fcaa814c"
  },
  {
    "url": "assets/js/94.63467b96.js",
    "revision": "8a9a4f609e55de2d2ccd5d0cd438644f"
  },
  {
    "url": "assets/js/95.36d646fe.js",
    "revision": "be88df6575b7e531fa03d0c30bdab87d"
  },
  {
    "url": "assets/js/96.6a323a3c.js",
    "revision": "80fd5fee7d40b7493bf0ee4e342b7d25"
  },
  {
    "url": "assets/js/97.08bddc38.js",
    "revision": "9e0858fb6ab3fa59a47a641df4507a2d"
  },
  {
    "url": "assets/js/98.7fefd7e6.js",
    "revision": "1ce14ceaeb87b1781bafb0bad004e864"
  },
  {
    "url": "assets/js/99.769fdb79.js",
    "revision": "32957e830410452f89b0c7664c0cec67"
  },
  {
    "url": "assets/js/app.f0f1933b.js",
    "revision": "8da6c4576f41a4bd1b9a8d22fda1390e"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/algorithm/index.html",
    "revision": "c10d1cddb76f9d44abbaca8b1d1dc172"
  },
  {
    "url": "categories/crawler/index.html",
    "revision": "a321b87910308a598231071148109e95"
  },
  {
    "url": "categories/database/index.html",
    "revision": "4fb0cb0f0036d193c093ce7aad710699"
  },
  {
    "url": "categories/devops/index.html",
    "revision": "4c3c4e11f5653d5a05dca1fb372ca398"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "ac8f7e13177a54528204942528d0e608"
  },
  {
    "url": "categories/front/index.html",
    "revision": "7b5442e2f7210210f9de0a929fe21625"
  },
  {
    "url": "categories/git/index.html",
    "revision": "6d5a153eb8bbbf1d45f9acf6f90dd03f"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "9b1fd1baf3bcc6e433b47194ab9deb1e"
  },
  {
    "url": "categories/http/index.html",
    "revision": "0664a4544239e3e61dcb9a47869108c7"
  },
  {
    "url": "categories/index.html",
    "revision": "8f6626dbbb0c7aea8c7cf46bddabd8c0"
  },
  {
    "url": "categories/java/index.html",
    "revision": "0bca7d9de075699e395fc1b0e4adec68"
  },
  {
    "url": "categories/java/page/2/index.html",
    "revision": "82a696be63295fbb6bcf72b12283c455"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "ddc4b0d1c223ec5e4b19239958de345f"
  },
  {
    "url": "categories/linux/page/2/index.html",
    "revision": "f095f75448541790c65245904eb129bf"
  },
  {
    "url": "categories/macos/index.html",
    "revision": "63814348f92744f3a1ca9c7e60c7633a"
  },
  {
    "url": "categories/mq/index.html",
    "revision": "743768e99506c4161aff9d710b616029"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "0d39047027d73d51c1f615c302559e26"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "26c2fd5b5c6211f085b008523b574d40"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "7930540613d7366f667396b9892ea35f"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "129a49c2f632ed08c4aaf9445a309eb4"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "405bd05a7126efcbb4d578187345d16f"
  },
  {
    "url": "categories/other/index.html",
    "revision": "4283b1393ed83e7fa8561965255951a9"
  },
  {
    "url": "categories/python/index.html",
    "revision": "49ba96da8058f7528e542a40178e2a42"
  },
  {
    "url": "categories/python/page/2/index.html",
    "revision": "6738bdebeaf97087105918443eba6f03"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "47d462d8dcb47c29db1c4d1d905c7451"
  },
  {
    "url": "categories/router/index.html",
    "revision": "02746262d429598f2391626e6be427c0"
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
    "url": "imgs/avatar.png",
    "revision": "6ee414c773d5b8573f4e06796192e955"
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
    "url": "imgs/router/dmz.png",
    "revision": "60b49bc7c1b34eb78e3661adce302bdf"
  },
  {
    "url": "imgs/router/ssh.png",
    "revision": "520cc2e7a3659bd8ed2f96a869ec5039"
  },
  {
    "url": "imgs/router/UPnP.png",
    "revision": "ae38ea5555a1dd4b84a0bca203ad4498"
  },
  {
    "url": "imgs/router/wake-on-lan.png",
    "revision": "a5961fefe1cb3a635dd2c0375ed15ca6"
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
    "revision": "991bf53f0c42fe61fc85aef372331551"
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
    "revision": "0f04717b7e42d642d7095a94eae97343"
  },
  {
    "url": "posts/crawler/bypass-website-call-backend-api.html",
    "revision": "7932c49c21d39062536d1f6bb8e77c63"
  },
  {
    "url": "posts/database/SQL-constraints.html",
    "revision": "efa99b37dd0bc3a7bb0c8c7ab883a2f2"
  },
  {
    "url": "posts/database/SQL-keyword-order.html",
    "revision": "8bc0ce7ca2a0c99fd3ac38e8de06a321"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "d992e5ec10c7b71424e506737db56d7b"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "82061e91927b12ca15d2d4a989eba7c7"
  },
  {
    "url": "posts/database/why-redis-fast.html",
    "revision": "5ea71cd1ee9fc39bbaba95b777552f61"
  },
  {
    "url": "posts/devops/ansible-deploy-docker-compose-service.html",
    "revision": "706f99f6df2d04e1c5ebdde21017a9e8"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "7ba866ead5ace09512a30d1e869de322"
  },
  {
    "url": "posts/docker/docker-host.html",
    "revision": "08079e520bc8c0756015b84a33ab264b"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "b759b2e2dfe1c3fb787526f9c656f250"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "9f1e580e4cf80fabeb049ac432576763"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "77b28686a16530d2eb11588dea989f28"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "7251460c92e846e9f0d24bc44ca689b8"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "85c8b271893eba6d9f333f3dae6e7f54"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "78bf6c259b79f3c18a862f668b927bba"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "c3773f756a57ffc24d8e2386e5a59188"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "ace3f6a911e6e500d3e26b2db37163b6"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "347a00d1efcb6a0c70b70076715f837d"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "ee7a8e99fa5436ae109c2849e6eab6a1"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "bc8fb7437487130ccc00bcddb575a4b3"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "1e0c4ee92451957ee3003db54390e497"
  },
  {
    "url": "posts/git/use-multi-access-token.html",
    "revision": "d33aa395ef0833406aab62a068c89d6b"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "229ffe8b70826abdf3c14ae3e05c5389"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "68957b41f80e1a7028fc8b1c61785f04"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "001cd4378ca24c2448152a8cca53ec17"
  },
  {
    "url": "posts/http/https-shakehand.html",
    "revision": "d4b91ce4984cbe3592e61300bafe6300"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "2275e47c9b5ee728679a3fc2311bd87b"
  },
  {
    "url": "posts/java/java-http-proxy.html",
    "revision": "e28b5098ee3340c0f33a73507ad1dfd5"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "e1aee986021dfe29be2dde021126301f"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "63f91ceb2a3af1d2aad305b7396b64e0"
  },
  {
    "url": "posts/java/java-spring-MyBatis-Annotation.html",
    "revision": "7bf0557dec7f88929bf7cdc4ee23731e"
  },
  {
    "url": "posts/java/java-Tetris.html",
    "revision": "2717dc5a7a5e94c6c58838f0618b6d9b"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "425a318e4e8e85d67f26a35a0337bb5f"
  },
  {
    "url": "posts/java/spring-RedisTemplate.html",
    "revision": "bae18053f2e87d605b6493b7a54daa6a"
  },
  {
    "url": "posts/java/springboot-disable-autoconfig.html",
    "revision": "ee59445bec25f931ef12ad542a3a0eef"
  },
  {
    "url": "posts/java/springboot-schedule-task.html",
    "revision": "63c9465f7a388095284cd29c86da41ef"
  },
  {
    "url": "posts/java/springboot-swagger-ui-custom-config.html",
    "revision": "e6033ca5ba8c67746b62d6797988d2a2"
  },
  {
    "url": "posts/java/TOTP.html",
    "revision": "28b33c9b59824f9d6e5e308398f3072c"
  },
  {
    "url": "posts/linux/dnsmasq.html",
    "revision": "2b07c091474f3c7e36f56cc2eabc33de"
  },
  {
    "url": "posts/linux/docker-nginx-acme-trojan-go.html",
    "revision": "2bb87cebb9122a14b075b3460d2b367d"
  },
  {
    "url": "posts/linux/install-ubuntu-with-xrdp-in-termux.html",
    "revision": "b409e7f3a8c97cc4d556a2c0c41f095d"
  },
  {
    "url": "posts/linux/linux-chm2html.html",
    "revision": "3db3e4e08118ed7668cb4a7934494ec5"
  },
  {
    "url": "posts/linux/linux-ecs.html",
    "revision": "b5002006db28ecbf001fff72c8c1c64a"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "ff8f0dd183aebfc65975aa639df2edb8"
  },
  {
    "url": "posts/linux/mkcert.html",
    "revision": "daa6740f17180d4b0a5f956966f73de3"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "4c04af190d8dc03d31dabd61b2c04d2d"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "dc273f65e3bfb7525c807459f202e7cb"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "ae38197a766658cdfb2b91b57dcd0e09"
  },
  {
    "url": "posts/linux/ubuntu-switch-sources.html",
    "revision": "ddae7012135f15682bd9dec8b612e67d"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "c611b71e0b46cf1e076581e84dccb4be"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "00a932e506a82f09081c7721365d1f25"
  },
  {
    "url": "posts/linux/wsl2-and-docker-compact-vdisk.html",
    "revision": "0f250e778a89919280e69d20cbc661c5"
  },
  {
    "url": "posts/linux/wsl2-install.html",
    "revision": "125d39761548db3023dd355b2857e327"
  },
  {
    "url": "posts/linux/wsl2-use-winip.html",
    "revision": "b479401d918bc5c2539843f6bd9281be"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "e1b08a685b7f1663bb2ce5955e2493b4"
  },
  {
    "url": "posts/macos/android-emulator.html",
    "revision": "5e2320fa848e9a48fe817aee1a87ff7a"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "3a8b771449615b4940f3f84f3c31b239"
  },
  {
    "url": "posts/mq/ensure-not-repeatedly-consumed.html",
    "revision": "1a50d123fc45811522ab075bbd3999a5"
  },
  {
    "url": "posts/mq/ensure-order-of-mq.html",
    "revision": "8d6cd5e277678ae039f2327ded79498a"
  },
  {
    "url": "posts/mq/high-availability-of-mq.html",
    "revision": "90e41893dc181cf285f44bf3e2a46089"
  },
  {
    "url": "posts/mq/mq-problems.html",
    "revision": "a86381a515e6114ac3aeb9f7df77adea"
  },
  {
    "url": "posts/mq/why-mq.html",
    "revision": "c376b898220a45703a96ff56d1b32bd5"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "82253af39dd20b136fec6fc4bc5e7ce9"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "89aa5f82bf0e62b0ce0342edc175519f"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "e455f3c5962478e903041f850203606b"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "8b6ac8c8972a420e6fb106c5526d1424"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "40790e2cee9707718952a54a0dc6ff9f"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "32a3b5500fa09d0c18912bbcc40eaedd"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "96a3c085bb233ded3d1d9d96be4a6fec"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "fbe1584ba380cfd0a290b489049ea4a6"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "b7921a9bdb3a4d83c695f9c4562f1ec2"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "6b5454401b0738c0f244bfd24df226fe"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "574d076f3a6e2d015f4c3fbb0d6b0c7b"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "4aa7e414a03ef3dfe1070932f20a445c"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "7c66be602c0b5bf4aecd614184c3d14d"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "06b89f4161df48b70ebc4fbc4ca7956e"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "cdf14b21ab536ad36584a67252a5f900"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "6123267af720cfe91acd482444e5823e"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "f0cd4edae65628ca5aa8cc743446f6be"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "a7992696ffd5bed41b0ab105c43a013a"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "0a06bb0a327d2a231c2e5e79241466e7"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "6f0f1657a49080c00d99b553e5dd34f9"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "7917add53ab6652072449f5c6efe03ce"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "1837c3eda743fb59e7ccaf6fb6067747"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "c349119d279c0c958e078b3ddfa64695"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "945fa7d4bbc53756088eec152f3820b8"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "f35ff2a6495aec765c554e352d25c5a9"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "8371db3c2b38b5c3c6a4671860474137"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "cd72cc1f59fd07c21f8c740a184ee97e"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "b3f9b11e639c79803497fb8fc1d54071"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "44eebd4ad6ac0c2f55cfed00eb3c06d8"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "b07e84448ff46d22a408141405175d1d"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "7f4242f01dcf2ba0d472e778ed79e838"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "02647ea488b13b0a2424fa5330031f5c"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "9875dbce88cac0ed7b54fd13a58c6fda"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "cce9dd9c77a0aa9d2d49b8d6203f17c1"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "a19106ab25e5076b73251fcdc5f78c86"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "bd3c18332bdcdcd84b40087c7b28b352"
  },
  {
    "url": "posts/other/aria2-replace-thunder.html",
    "revision": "de42dad546f90b65dd5ff7d0a4e72dfb"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "a1175578dbe04a5f347fc9dbab7cc9b8"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "6f2b29612f8e3c7985fb843e1a4fbb75"
  },
  {
    "url": "posts/other/iqiyi-danmu-convert.html",
    "revision": "2f939221d048623ae6842afe1d01c906"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "b4a70ae2e7d76ba5472a0462db4e08ee"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "1cf24cf6c5f5165876a90ae20358b2b6"
  },
  {
    "url": "posts/python/deadlock.html",
    "revision": "8ebcc4d66c0654509bedaa4f80a0185c"
  },
  {
    "url": "posts/python/locust.html",
    "revision": "4bf201f1f4f11b8a8cca65f39c1b8241"
  },
  {
    "url": "posts/python/normal-errors.html",
    "revision": "150d0c614700e67b56073181f1cacd60"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "e3923a6bdc11bade0316fbed53d25821"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "b96b6caef8e80b5e50f614d2100c73e7"
  },
  {
    "url": "posts/python/python-dynamic-import.html",
    "revision": "c09a9cdeb18f9587548083d5579db0db"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "be0a7ad5e553b7246f79553bdb7c0c6e"
  },
  {
    "url": "posts/python/python-metaclass.html",
    "revision": "23c109d8c682a6c13e4b50c520d77868"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "b103911c217aa0689f75505f19ef64a4"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "93644eb1f10b6a678eac308fb1454894"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "f91bfaf834738319fc8e53ceeb34663e"
  },
  {
    "url": "posts/python/whats-new-in-python3-8.html",
    "revision": "5fbda5e67d01944abaed7de4c9cc51ad"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "cb33b9521e99bad4841f23aafc431985"
  },
  {
    "url": "posts/router/iwpriv-DisConnectSta.html",
    "revision": "a40aa27d5ac8c493fdb74aac65d1f672"
  },
  {
    "url": "posts/router/set-dmz-and-UPnP.html",
    "revision": "1eeaa4fd04dd78e922e5dda0a3bce9fc"
  },
  {
    "url": "posts/router/wake-on-lan.html",
    "revision": "c4d40e044bebe066fbc08b760ff9dcc5"
  },
  {
    "url": "tag/algorithm/index.html",
    "revision": "26dbc5af064abda457f88ba2ea4555d4"
  },
  {
    "url": "tag/android/index.html",
    "revision": "655cf8ceb603f232be74453db826c143"
  },
  {
    "url": "tag/ansible/index.html",
    "revision": "4a33f2c8f49fce735ea6331212de0e6b"
  },
  {
    "url": "tag/api/index.html",
    "revision": "ca72a760e921a8fbf2d732d84e14885f"
  },
  {
    "url": "tag/aria2/index.html",
    "revision": "1ac2aad5d4a4741745fcc97e8d9fcc57"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "fc435bcaa8cf5dbbb4154a1097335992"
  },
  {
    "url": "tag/context/index.html",
    "revision": "fbd6f096bc7810376c044c6976408225"
  },
  {
    "url": "tag/crawler/index.html",
    "revision": "00d4bcde942d053a002c2a285ffde8ca"
  },
  {
    "url": "tag/database/index.html",
    "revision": "dbe2706de0719b2b14f63e1ef0a7d544"
  },
  {
    "url": "tag/devops/index.html",
    "revision": "33eb5739eaacf7686b7a75c133f93f08"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "e2845e5f68bf14738928dec6baecd6ab"
  },
  {
    "url": "tag/emulator/index.html",
    "revision": "e200bc610c0b3b7a5f14606c20d871f3"
  },
  {
    "url": "tag/git/index.html",
    "revision": "82a7069ebd0029c5c4882dfe16ad21a5"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "65692c18c2ffa349d3f3d8b433af48c0"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "a8fe6b24ff9085e8c1224bfe7028cf0f"
  },
  {
    "url": "tag/http/index.html",
    "revision": "25dc612480d550376c620fabdba4e655"
  },
  {
    "url": "tag/index.html",
    "revision": "c6faf609f149de5a87bd9934ebfe1ee6"
  },
  {
    "url": "tag/java/index.html",
    "revision": "f80e6a85328ff5e354d4073edd48d9f4"
  },
  {
    "url": "tag/java/page/2/index.html",
    "revision": "4ca8fd0600d27081d69ee2cc4f76d10a"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "e324e8f26cace753ebee26a8bc264b3b"
  },
  {
    "url": "tag/linux/page/2/index.html",
    "revision": "09727c077a9bd09e7050585c5dc1347e"
  },
  {
    "url": "tag/macos/index.html",
    "revision": "b1df3cc27f02058a5246a551df7a628f"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "da13785d974f1773c50bc30d0529949e"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "40b812c7b34b8c83eca4e7c2ae670d9b"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "e4e7917046902cdd15085bbda85c1174"
  },
  {
    "url": "tag/mq/index.html",
    "revision": "cd0b01986c00b03a3abfb1b56892d909"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "509c08cff513486d27f03aa21a625b1b"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "070267248debef41e8aa05426a0fbc6b"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "9065bd4e54acc70550816bbfe2f6b953"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "18408409a5f28fc40c162411dd6127cb"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "759609da6c95fed1abbfad6734f4a0fb"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "fcef836662665c8dd923074a9d6676d1"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "ea6881187ed0a9f7bbc72d9544c61f4d"
  },
  {
    "url": "tag/other/index.html",
    "revision": "e5543211cb870c428ba9819d40494365"
  },
  {
    "url": "tag/python/index.html",
    "revision": "20b65fa4d63428e96a4749f6515a87b4"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "c79076c4391376c2f43ba47db2548a9e"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "7a33d830b1caa7c3ed7a1e330d73e323"
  },
  {
    "url": "tag/router/index.html",
    "revision": "d3a45317347a4011459db979d313b323"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "53b5015ea1742666b1955df5ff8977c3"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "3de1065ee9b0e43aab16394c280fb8e5"
  },
  {
    "url": "tag/termux/index.html",
    "revision": "36a7f1939375dc5f89b2f52f6f224e95"
  },
  {
    "url": "tag/trojan/index.html",
    "revision": "703e26660599d64989c208b5ace40683"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "0ea17176036c59f37dd04f9ea6bcd553"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "091c09e1994f5f9bd7c92445a9f9c0f3"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "4d973751113722d5e645d8cd29fe76f8"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "5d6403485003e7fc6270047a1d043030"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "a52329cfc5cf4f09f479d054ed3fd36c"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "56e5d44541facaac031f24e3dacc107e"
  },
  {
    "url": "timeline/index.html",
    "revision": "4aec2f7801d512a3da7eebcf415c9d45"
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
