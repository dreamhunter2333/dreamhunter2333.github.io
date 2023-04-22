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
    "revision": "2d5af4e7dc5c3d24a95e3c7331aa8fce"
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
    "url": "assets/js/100.29b85380.js",
    "revision": "bab5f1f8ecd505320d68609ca5096fca"
  },
  {
    "url": "assets/js/101.ce81283a.js",
    "revision": "a19081c78290c24d06545ef1021b5ae0"
  },
  {
    "url": "assets/js/102.f65870a2.js",
    "revision": "64b4d316282bd9ef5fb3d4b2e0f3ebcb"
  },
  {
    "url": "assets/js/103.89f553cf.js",
    "revision": "2fa107358950d95d63089c944579cf68"
  },
  {
    "url": "assets/js/104.b6d3d107.js",
    "revision": "7e6b47b330aad4d00fa0d10ac3be50b9"
  },
  {
    "url": "assets/js/105.21ac6eb2.js",
    "revision": "4182f8ecda8e7f0657144281d1858286"
  },
  {
    "url": "assets/js/106.0ad7aba8.js",
    "revision": "697b5b04a0b0d1f9f42ea56ed555ed3b"
  },
  {
    "url": "assets/js/107.79801f57.js",
    "revision": "509f78c09405c9d35b8ea59a4b31a394"
  },
  {
    "url": "assets/js/108.4b094021.js",
    "revision": "cb599aeb4f0ec0eab240718ef2f5ea5b"
  },
  {
    "url": "assets/js/109.85f91f80.js",
    "revision": "71318f737e9a4fa295803a92167d791f"
  },
  {
    "url": "assets/js/11.48f5c8f9.js",
    "revision": "bd8379756c2e27ed704ac66791dab7d2"
  },
  {
    "url": "assets/js/110.9b62b948.js",
    "revision": "d8084abd8b5d6d0fd13acc56f6125643"
  },
  {
    "url": "assets/js/111.0bfb2b71.js",
    "revision": "b341dae60a0a800dea689cb1b748e09e"
  },
  {
    "url": "assets/js/112.71654139.js",
    "revision": "f540bbdb2b4af129e52035107f5f26ed"
  },
  {
    "url": "assets/js/113.fe5ab0f1.js",
    "revision": "913d3bd8ebd3a52d9f8ad2099aeff852"
  },
  {
    "url": "assets/js/114.7ca934ce.js",
    "revision": "4bd317730a7dd12b36d362b41e89374b"
  },
  {
    "url": "assets/js/115.3fce93cd.js",
    "revision": "cf9cb7a768bbe82e533e56d4708dfac6"
  },
  {
    "url": "assets/js/116.5842f6d4.js",
    "revision": "a27094c1c21e0e3a2147bf5b46cdba29"
  },
  {
    "url": "assets/js/117.c3d11418.js",
    "revision": "55524535012da6748345b99f9ad79714"
  },
  {
    "url": "assets/js/118.d900a334.js",
    "revision": "6eaf2271fbd48884445c9abb71a53170"
  },
  {
    "url": "assets/js/119.36c9c177.js",
    "revision": "e1eb829e58f1bc71406e08f2d06dd0a7"
  },
  {
    "url": "assets/js/12.e3b49adc.js",
    "revision": "c80e995bcfc0835c4e454f01ef3a8247"
  },
  {
    "url": "assets/js/120.c44d3817.js",
    "revision": "b3c26bb038adbbfd7e75bd14610674ed"
  },
  {
    "url": "assets/js/121.ac312950.js",
    "revision": "2228343b21765df505115c430e79fb92"
  },
  {
    "url": "assets/js/122.c644b199.js",
    "revision": "b607151e30730bf8e8469bb608df124f"
  },
  {
    "url": "assets/js/123.be0ca2e6.js",
    "revision": "17824e0e3a7fd9dd386737be0d17a398"
  },
  {
    "url": "assets/js/124.a00f9bb1.js",
    "revision": "2216eb371de6530edd99c7a5286163d7"
  },
  {
    "url": "assets/js/125.198ab13c.js",
    "revision": "9d4476025f01abdd6bcb9b8f7e314718"
  },
  {
    "url": "assets/js/126.81407758.js",
    "revision": "a814e1b2a2ffa628dfb32efd1cf9ac78"
  },
  {
    "url": "assets/js/127.438314b9.js",
    "revision": "cbd0b6318ca921216dc494104169f8ac"
  },
  {
    "url": "assets/js/128.68a5ba0d.js",
    "revision": "580be1f7df3055ccaa2b5ee9699231c3"
  },
  {
    "url": "assets/js/129.edb22ff4.js",
    "revision": "4a7882662fae1d97fb76fef9040fab9c"
  },
  {
    "url": "assets/js/13.166a8e1f.js",
    "revision": "eef985731db460a063c6e5667347c692"
  },
  {
    "url": "assets/js/130.b8e24884.js",
    "revision": "c54c3d0fe8a17595db12666e036ead65"
  },
  {
    "url": "assets/js/131.c774b611.js",
    "revision": "d2338cd21a580cdfc495886b96233dd6"
  },
  {
    "url": "assets/js/132.9d1cfb20.js",
    "revision": "ed42fe861de2755824251eefef0bf5ca"
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
    "url": "assets/js/42.6485dda7.js",
    "revision": "0b70d23d6defaa4b794af6a3c78b3fbc"
  },
  {
    "url": "assets/js/43.da40a755.js",
    "revision": "6fcbeae4ec90d4048e95a35876f01364"
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
    "url": "assets/js/53.d7d0e12a.js",
    "revision": "54355f02b421794fdc8a40c95d172924"
  },
  {
    "url": "assets/js/54.47a5ff06.js",
    "revision": "116068d1fae56971e02f722c4c6f67b3"
  },
  {
    "url": "assets/js/55.bead2e64.js",
    "revision": "d97a813b48925c8fa4d1a355085a0883"
  },
  {
    "url": "assets/js/56.1fa26087.js",
    "revision": "edb8af34ee564c3c3643741fe2c03aa7"
  },
  {
    "url": "assets/js/57.6585e339.js",
    "revision": "c665081b3d733d30fb231f399ec52fa6"
  },
  {
    "url": "assets/js/58.2580158f.js",
    "revision": "d925e4e8a20462c80eec386d5bcd893d"
  },
  {
    "url": "assets/js/59.515f8b92.js",
    "revision": "063b49d122141f33357d9ff3f6894dba"
  },
  {
    "url": "assets/js/6.acb314c6.js",
    "revision": "cdebc1a13beb3e62f0cd99edd6adf5df"
  },
  {
    "url": "assets/js/60.201b6899.js",
    "revision": "aa1fc6db64a14a65969ad26971b5af49"
  },
  {
    "url": "assets/js/61.3be997bf.js",
    "revision": "4c6dbddd7d607dc9ed6f59397fdac2e6"
  },
  {
    "url": "assets/js/62.7af63a9a.js",
    "revision": "0b81f0ab875b4b6db94ed09924e884ca"
  },
  {
    "url": "assets/js/63.01310d10.js",
    "revision": "f41bd58d97831e561f3f4d504fcc5e4c"
  },
  {
    "url": "assets/js/64.7f0dd969.js",
    "revision": "b40943762ae27e0311f93f483e220149"
  },
  {
    "url": "assets/js/65.3b5de471.js",
    "revision": "ce74fdd5f52cb8c511ea6dbd39730604"
  },
  {
    "url": "assets/js/66.2719c1b0.js",
    "revision": "f0c85d89e5b4d9e8e701cd169d9415d3"
  },
  {
    "url": "assets/js/67.0131ab04.js",
    "revision": "ae087d509cb60fa623e23a4db5aee24a"
  },
  {
    "url": "assets/js/68.d1e30fb9.js",
    "revision": "272f99a86a23c6ec26cc43c3c0b8bd43"
  },
  {
    "url": "assets/js/69.3e41cb63.js",
    "revision": "d1163caf4d918e65ccf9e6eedc4bfa59"
  },
  {
    "url": "assets/js/7.177ceb88.js",
    "revision": "1e5425fc0e38c0d0daee1c11bca53c9c"
  },
  {
    "url": "assets/js/70.b1b6bd25.js",
    "revision": "d1f5a20db43842f6b92e7e772336b78e"
  },
  {
    "url": "assets/js/71.21c4cac4.js",
    "revision": "6509941bbda0dd8ef98231b0a12ba34c"
  },
  {
    "url": "assets/js/72.5466e721.js",
    "revision": "9ae75b8a31f3ee7e85ccd059da545c92"
  },
  {
    "url": "assets/js/73.9c8d3df1.js",
    "revision": "19cc71284b3ce1915566d9e3b2160fa5"
  },
  {
    "url": "assets/js/74.e7308849.js",
    "revision": "8d5b917e1179338a9943232d2307077e"
  },
  {
    "url": "assets/js/75.1e715059.js",
    "revision": "3ecd0df91bf502d2f5417fc2993db19c"
  },
  {
    "url": "assets/js/76.cfdc719e.js",
    "revision": "8b4dfedc9733b62b44e98df8f539a0f0"
  },
  {
    "url": "assets/js/77.b45de17e.js",
    "revision": "d78a5a8d844f4d1176f2ddb22b8d4464"
  },
  {
    "url": "assets/js/78.a9576010.js",
    "revision": "81549d53c86dcf182c8cc0074d8ac757"
  },
  {
    "url": "assets/js/79.df37b9b6.js",
    "revision": "e8e2e67ac1fec8a165818348172903a9"
  },
  {
    "url": "assets/js/8.90144e1f.js",
    "revision": "51879b170f77f3f1bb5466d3d68bccd2"
  },
  {
    "url": "assets/js/80.49ba7a45.js",
    "revision": "4151fe60ba90c7bfd40d8d31b732ec30"
  },
  {
    "url": "assets/js/81.b65020a5.js",
    "revision": "8bd1e9d92aff4eb6a05b00ac050afd12"
  },
  {
    "url": "assets/js/82.d72221fe.js",
    "revision": "58c5d829fa93d9234a00c1179fca32ed"
  },
  {
    "url": "assets/js/83.9104214c.js",
    "revision": "8cccdbc967563c666394dc43371dd771"
  },
  {
    "url": "assets/js/84.7a590a48.js",
    "revision": "b2bb7f49f98523cebd2410306d377333"
  },
  {
    "url": "assets/js/85.86de6465.js",
    "revision": "bfed6365a52151d7848de9a351c5cc8b"
  },
  {
    "url": "assets/js/86.20902697.js",
    "revision": "f06771cfd18b07fbad69b00413aa7dce"
  },
  {
    "url": "assets/js/87.d54e78fd.js",
    "revision": "4cc5bc2715c4e6878e0eacbea58b7e7d"
  },
  {
    "url": "assets/js/88.be837457.js",
    "revision": "163786dd0bea48fc118cd8c52c9598e6"
  },
  {
    "url": "assets/js/89.f018b813.js",
    "revision": "60bb2bac38ce37d70dc87f613d4b394d"
  },
  {
    "url": "assets/js/9.49ae7a02.js",
    "revision": "59b0850c36506f1ca3a60ca82d1a9f8e"
  },
  {
    "url": "assets/js/90.91d4f7e7.js",
    "revision": "a46513903eaa39d1a8c99bfc3483cccf"
  },
  {
    "url": "assets/js/91.25b1f895.js",
    "revision": "be6d5210512369501d054466682436f6"
  },
  {
    "url": "assets/js/92.c8c9601a.js",
    "revision": "de5e4256c6220f469cfc2c5658910eb3"
  },
  {
    "url": "assets/js/93.2a270834.js",
    "revision": "338e1ed7d3f71f9a4971e1c355ca6d2a"
  },
  {
    "url": "assets/js/94.9d5dcba0.js",
    "revision": "325f256054e49341c4e58e607a4500e5"
  },
  {
    "url": "assets/js/95.58cddd3a.js",
    "revision": "159b894695ef874a4d22392f2e8110f2"
  },
  {
    "url": "assets/js/96.9947d653.js",
    "revision": "3678a1c36395e38464df0916535cd68f"
  },
  {
    "url": "assets/js/97.a5b2e01d.js",
    "revision": "9c4f5185c072e903f976f505678e62d1"
  },
  {
    "url": "assets/js/98.1c45f8d6.js",
    "revision": "9ffdd4981a8651d945d19c59a8181bba"
  },
  {
    "url": "assets/js/99.51e5605d.js",
    "revision": "b57bedf5152933ccd0cbe42c3809595a"
  },
  {
    "url": "assets/js/app.7b614c11.js",
    "revision": "ecd3d37c7b67a158e091afe3ecd1b915"
  },
  {
    "url": "baidu_verify_fRZdpw7Mia.html",
    "revision": "f4435c90711139a759564155c19df653"
  },
  {
    "url": "categories/algorithm/index.html",
    "revision": "6ff7a5994b6c55dd2849cdc28116ea1f"
  },
  {
    "url": "categories/crawler/index.html",
    "revision": "258bf1882c419929dd24fc489d2daf12"
  },
  {
    "url": "categories/database/index.html",
    "revision": "5aa8aa11cffa9f8380174c9eab62d566"
  },
  {
    "url": "categories/devops/index.html",
    "revision": "74b6494d68ba0c4df620130dec5f27ca"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "6e325d56f65bc953b703cd457c51004a"
  },
  {
    "url": "categories/front/index.html",
    "revision": "4778ce4f1f5e64186418242919b8c41f"
  },
  {
    "url": "categories/git/index.html",
    "revision": "c4201f907e383009739bc1dabcff2a15"
  },
  {
    "url": "categories/hackintosh/index.html",
    "revision": "9a355d119b92b21354a9849f8ec20033"
  },
  {
    "url": "categories/http/index.html",
    "revision": "5d75b813a36cc46e90decae13195d716"
  },
  {
    "url": "categories/index.html",
    "revision": "6cf6ff71e0f33113b99f11878597934a"
  },
  {
    "url": "categories/java/index.html",
    "revision": "e5e2a7b8d892ca8b6c931dc9e480fa74"
  },
  {
    "url": "categories/java/page/2/index.html",
    "revision": "ca331d074efd9a7173cdacca49ac5152"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "fe22abec93f23a77252f523b8b9e4759"
  },
  {
    "url": "categories/linux/page/2/index.html",
    "revision": "6a185a639a453750c6b8020782f3ed8e"
  },
  {
    "url": "categories/macos/index.html",
    "revision": "37ed4ef177189a03cb04f681a6d4890c"
  },
  {
    "url": "categories/mq/index.html",
    "revision": "72823a2068ffbe18692db28058ac1e93"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "77926a54b96d729af0dddebce8d8ec36"
  },
  {
    "url": "categories/odoo/index.html",
    "revision": "1dec71113808753f50798b7d3ed91e2a"
  },
  {
    "url": "categories/odoo/page/2/index.html",
    "revision": "d5417300f843ddf6d67a51aeea80b89a"
  },
  {
    "url": "categories/odoo/page/3/index.html",
    "revision": "e984ec827536a3ed8e052f8d6bc2aa43"
  },
  {
    "url": "categories/odoo/page/4/index.html",
    "revision": "91fd8933752913fdf479d99e75f43730"
  },
  {
    "url": "categories/other/index.html",
    "revision": "b664e167c87c1085571d10d5ef024445"
  },
  {
    "url": "categories/python/index.html",
    "revision": "38e6e7bc611e802ad85917f4bb2f6e90"
  },
  {
    "url": "categories/python/page/2/index.html",
    "revision": "4bd69e62cb1f8b45ec442e737a5aad59"
  },
  {
    "url": "categories/redis/index.html",
    "revision": "002e5e0b9aa81b6576dd966e2a92b21c"
  },
  {
    "url": "categories/router/index.html",
    "revision": "8285cfbdfccd718fa4058d8b36c0e9c6"
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
    "revision": "baeea25439d182b7a9ba4a9bba393b54"
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
    "revision": "ead0489b56a086f103bff1b82c1d6c3f"
  },
  {
    "url": "posts/crawler/bypass-website-call-backend-api.html",
    "revision": "750f5e1e769447c97a6317b29b5a930d"
  },
  {
    "url": "posts/database/SQL-constraints.html",
    "revision": "1f399903b78d4947a3f33e3fd48452c1"
  },
  {
    "url": "posts/database/SQL-keyword-order.html",
    "revision": "055fd307d42691dc241d718b1591120c"
  },
  {
    "url": "posts/database/SQL-NULL-Func.html",
    "revision": "d3b0d3544834caa6f3a670ad243bff87"
  },
  {
    "url": "posts/database/SQL-statement.html",
    "revision": "b121b6563b35e58774a05acd7620acfe"
  },
  {
    "url": "posts/database/why-redis-fast.html",
    "revision": "ef59a19100302af218788bbda433a917"
  },
  {
    "url": "posts/devops/ansible-deploy-docker-compose-service.html",
    "revision": "e58ef87320c39c30be73e3173ed498e7"
  },
  {
    "url": "posts/docker/docker-compose-hosts.html",
    "revision": "6bf5c84e35334a3190c6334be2ab1165"
  },
  {
    "url": "posts/docker/docker-host.html",
    "revision": "126f4a390bfc5234f60553f097eb13df"
  },
  {
    "url": "posts/docker/docker-install-use.html",
    "revision": "4edaf5b8958157967d0eaffc354d0d32"
  },
  {
    "url": "posts/docker/Docker-rm.html",
    "revision": "64e22ef0c5aaf94c3f5ec95bccda3b43"
  },
  {
    "url": "posts/docker/run-code-server-in-docker.html",
    "revision": "9405d7496b646c383edab1ebda47cf36"
  },
  {
    "url": "posts/front/intall-and-use-yarn.html",
    "revision": "7835ea1517fb2512550eee8188cde859"
  },
  {
    "url": "posts/front/vue-init-project.html",
    "revision": "b8bed6b9df7c63b1df93e4f426743d4d"
  },
  {
    "url": "posts/front/vuepress-blog.html",
    "revision": "817774008975bbb118806d6f22251dd0"
  },
  {
    "url": "posts/front/web-vscode.html",
    "revision": "3da7b016f1c86ec098bc4e7a9c2c8275"
  },
  {
    "url": "posts/git/Count-Lines-by-git-log.html",
    "revision": "795e03ea54108096046abf30f7ff8e5a"
  },
  {
    "url": "posts/git/Git_ignore_SSL.html",
    "revision": "094802812564ab50e30413486ec491b6"
  },
  {
    "url": "posts/git/git-commit-amend-date.html",
    "revision": "ad5f4ad40e653ee30f0201dabf399793"
  },
  {
    "url": "posts/git/git-default-editor.html",
    "revision": "d7b34972af209eb0e74bb195f656a34f"
  },
  {
    "url": "posts/git/Git-ignore-file-permission-changes.html",
    "revision": "d344ab523755f157abd3705150a8f12a"
  },
  {
    "url": "posts/git/use-multi-access-token.html",
    "revision": "ef83785feca667850530b6ee44b940cc"
  },
  {
    "url": "posts/hackintosh/DSDT-SSDT-battery.html",
    "revision": "b9e55dad8d1e5d3513628348c3864012"
  },
  {
    "url": "posts/hackintosh/hotpatch-fn-brightness.html",
    "revision": "5aba287c7ecff459792b44f47bab6588"
  },
  {
    "url": "posts/hackintosh/ShinalonYAO7000-hackintosh.html",
    "revision": "3ac573449ebd84bdf3acb222b42858bc"
  },
  {
    "url": "posts/http/https-shakehand.html",
    "revision": "0cc76b97a2ea3b3ecd985d01ed5d68a3"
  },
  {
    "url": "posts/java/idea-remote-debug.html",
    "revision": "0f317a1d12f6e15bb0501f12ab545b6a"
  },
  {
    "url": "posts/java/java-http-proxy.html",
    "revision": "9f052b93dd82fbee212a5c77049e90be"
  },
  {
    "url": "posts/java/java-JacksonUtil.html",
    "revision": "38c0b5fee3a29bda6a7650914c755583"
  },
  {
    "url": "posts/java/java-Pinyin4jUtil.html",
    "revision": "0baa233f937c2dc2ba86b5cd21c60ee6"
  },
  {
    "url": "posts/java/java-spring-MyBatis-Annotation.html",
    "revision": "fb6d00a8c1807465a696858ab51edbcd"
  },
  {
    "url": "posts/java/java-Tetris.html",
    "revision": "945de0d311c7bf2e29b50f27a25d0f52"
  },
  {
    "url": "posts/java/spring-boot-webflux-cors.html",
    "revision": "822db945765c6d874c174fd96c2e0833"
  },
  {
    "url": "posts/java/spring-RedisTemplate.html",
    "revision": "2c30eb9538637f0c29732a8ef4848ee6"
  },
  {
    "url": "posts/java/springboot-disable-autoconfig.html",
    "revision": "ad28123a720c818d9d4bad8df1c14dfe"
  },
  {
    "url": "posts/java/springboot-schedule-task.html",
    "revision": "7ba3a11b4a80825fb97b82341d3c799c"
  },
  {
    "url": "posts/java/springboot-swagger-ui-custom-config.html",
    "revision": "d426cf9eba2a6870d93d10a8c740fdc5"
  },
  {
    "url": "posts/java/TOTP.html",
    "revision": "2e74d078a743a5e5b80e65d8d97d9a7f"
  },
  {
    "url": "posts/linux/docker-nginx-acme-trojan-go.html",
    "revision": "3c066bc4258b10d2db537bc018f63d5e"
  },
  {
    "url": "posts/linux/install-ubuntu-with-xrdp-in-termux.html",
    "revision": "506d8bf16dde917addb635a43eef6cb1"
  },
  {
    "url": "posts/linux/linux-chm2html.html",
    "revision": "ae4e3ff57ed9957aa8301fd3a2b22d2d"
  },
  {
    "url": "posts/linux/linux-ecs.html",
    "revision": "53ab955cb21b816a9e7b8715f6775723"
  },
  {
    "url": "posts/linux/Linux-ssr.html",
    "revision": "87ac636c3d10d07493857af66ac21b63"
  },
  {
    "url": "posts/linux/mkcert.html",
    "revision": "68d59497db29e77dea8fe71589869c42"
  },
  {
    "url": "posts/linux/nginx-Access-Control-Allow-Origin.html",
    "revision": "e5a8378f6ae717e0331020ad56d6a5a7"
  },
  {
    "url": "posts/linux/nginx-upstream.html",
    "revision": "b2dd7f8906c856311c223a0d7832331c"
  },
  {
    "url": "posts/linux/offline-install-oh-my-zsh.html",
    "revision": "9b8504d0129ca66e8ab918b2885dc324"
  },
  {
    "url": "posts/linux/ubuntu-switch-sources.html",
    "revision": "6f55d0e606c14c2fccedd41a403f14a2"
  },
  {
    "url": "posts/linux/Windows10-using-vscode-run-odoo12-in-wsl.html",
    "revision": "6d21852af63cbb198960ed29f3db0d87"
  },
  {
    "url": "posts/linux/wsl-linux-custom-install.html",
    "revision": "74091ccbafc1caef1fd54195ef45e501"
  },
  {
    "url": "posts/linux/wsl2-and-docker-compact-vdisk.html",
    "revision": "8e6082ddb5b2e2962f87f85c4f65a50a"
  },
  {
    "url": "posts/linux/wsl2-install.html",
    "revision": "e23619e61296755b8bc9e2a622e9faf6"
  },
  {
    "url": "posts/linux/wsl2-use-winip.html",
    "revision": "bfc69156ac478738c65008a76a5fb944"
  },
  {
    "url": "posts/linux/xampp-building-a-website.html",
    "revision": "3935ecdc04ccb8460cdbf85d8b123559"
  },
  {
    "url": "posts/macos/android-emulator.html",
    "revision": "d9d829187640c3d45f9fb6999c88c5ee"
  },
  {
    "url": "posts/macos/Brew-cask-install-software.html",
    "revision": "1a8440e15f04803200be12a35514ec6e"
  },
  {
    "url": "posts/mq/ensure-not-repeatedly-consumed.html",
    "revision": "8e00b2bd586f8e04dece64913532f9b3"
  },
  {
    "url": "posts/mq/ensure-order-of-mq.html",
    "revision": "954228b6a6f370e28622f6eef49b7791"
  },
  {
    "url": "posts/mq/high-availability-of-mq.html",
    "revision": "b788cee70c4d4fa2f066736285f3c2f1"
  },
  {
    "url": "posts/mq/mq-problems.html",
    "revision": "1e9cd04b57827385bd184cd0383c19db"
  },
  {
    "url": "posts/mq/why-mq.html",
    "revision": "3de95891e52903ee9879333f1bcd379b"
  },
  {
    "url": "posts/odoo/Odoo-api-decorators.html",
    "revision": "cb7c321765b1e0ba54ec96fdec4c5f42"
  },
  {
    "url": "posts/odoo/Odoo-api-onchange.html",
    "revision": "3c106098f2cf80e3f66804acf04da4c0"
  },
  {
    "url": "posts/odoo/Odoo-building-a-new-model.html",
    "revision": "66fe5a45ebe18fb713a818dd3ba62bbe"
  },
  {
    "url": "posts/odoo/Odoo-Challenge.html",
    "revision": "1c74d955eec0a0987f3ca8bd7896abba"
  },
  {
    "url": "posts/odoo/Odoo-class-Many2many.html",
    "revision": "1033a78722651a1c11674e99cc3b5922"
  },
  {
    "url": "posts/odoo/Odoo-class-o-row.html",
    "revision": "8147acdbb60b045e06f9801774441076"
  },
  {
    "url": "posts/odoo/Odoo-context.html",
    "revision": "196abb8af0913aa450469776701eaaf1"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-requests.html",
    "revision": "0f41972b07216fcf43b01b9abd073597"
  },
  {
    "url": "posts/odoo/Odoo-Controllers-Website.html",
    "revision": "b9bf0b2cc1277882e7a767b5bbfe75cb"
  },
  {
    "url": "posts/odoo/Odoo-domain-in.html",
    "revision": "fe08d35a5194da367d35dde66b48e688"
  },
  {
    "url": "posts/odoo/Odoo-Domain.html",
    "revision": "1c1e5562326f9c14f94832b974fb7cfb"
  },
  {
    "url": "posts/odoo/Odoo-external-api.html",
    "revision": "f397e20f8cbe2072f42e4d5957c1f077"
  },
  {
    "url": "posts/odoo/Odoo-fields.html",
    "revision": "936b541ba2c3f8d5707a3882f1fb49c8"
  },
  {
    "url": "posts/odoo/Odoo-Form-add-button-statusbar.html",
    "revision": "6d5f585149cf300a5f1425600b6693ec"
  },
  {
    "url": "posts/odoo/odoo-func-env-context.html",
    "revision": "91e20335b135b8ed8b022a4d81ab98cc"
  },
  {
    "url": "posts/odoo/Odoo-inherit-inherits-delegate.html",
    "revision": "f1e4cbf40a1979097cef8e4c4b69b136"
  },
  {
    "url": "posts/odoo/Odoo-ir-actions-server.html",
    "revision": "7ae43015fb083d90735b7e33badd261f"
  },
  {
    "url": "posts/odoo/Odoo-ir-cron.html",
    "revision": "202ee80b6419cb12f301de6e2426b481"
  },
  {
    "url": "posts/odoo/Odoo-ir-rule.html",
    "revision": "96eca526f6dbf7c647fb72f92c3a4c03"
  },
  {
    "url": "posts/odoo/Odoo-ir-sequence.html",
    "revision": "12326ea4a754eff2de30e3025a16a171"
  },
  {
    "url": "posts/odoo/Odoo-mail-message.html",
    "revision": "9da4682cd3f58e2eec3b0a38f0546014"
  },
  {
    "url": "posts/odoo/Odoo-many2one-hide-create.html",
    "revision": "4b5539b6a8bf33e9303679980301ec10"
  },
  {
    "url": "posts/odoo/Odoo-Many2one-three-level-domain.html",
    "revision": "db411309956eb241bf3c83c2ee076460"
  },
  {
    "url": "posts/odoo/Odoo-model-inherit-xpath.html",
    "revision": "b612805d3e3cabc7652d29dbd2605475"
  },
  {
    "url": "posts/odoo/Odoo-models-AbstractModel.html",
    "revision": "0a0e71a1207d02618052abdd2f881137"
  },
  {
    "url": "posts/odoo/Odoo-odoo13-searchpanel.html",
    "revision": "6558b1f069f4659ffdd9f1bcf41d1192"
  },
  {
    "url": "posts/odoo/Odoo-one2many-many2many-write-rule.html",
    "revision": "0e8473ac987c420493ed4bc3343ac2d6"
  },
  {
    "url": "posts/odoo/Odoo-Order.html",
    "revision": "2a1705d607d1b9a1b3e51358b4221d37"
  },
  {
    "url": "posts/odoo/Odoo-profile.html",
    "revision": "9506f52bbe42b8ace420322e9a0f04e0"
  },
  {
    "url": "posts/odoo/Odoo-search-view.html",
    "revision": "73be9c80747db2d5ed60772804dd116a"
  },
  {
    "url": "posts/odoo/Odoo-Settings.html",
    "revision": "2ac87a57aa205b8f757e0538fb71c557"
  },
  {
    "url": "posts/odoo/Odoo-Translation.html",
    "revision": "9b9a8488fecede13c8d0450d274a2678"
  },
  {
    "url": "posts/odoo/Odoo-xml-group-col-colspan.html",
    "revision": "afc53d82c61fa282ab168d2adef2192b"
  },
  {
    "url": "posts/odoo/Odoo-xml-invisible.html",
    "revision": "8d53e7061e5b04231105de87617b1e73"
  },
  {
    "url": "posts/odoo/Run-odoo-in-docker-code-server.html",
    "revision": "421d8954717f0e60036fa145c6a13b6d"
  },
  {
    "url": "posts/odoo/Run-Odoo-in-Windows-WSL.html",
    "revision": "725b5ac11ca61090083c6fdbb81a80ed"
  },
  {
    "url": "posts/other/aria2-replace-thunder.html",
    "revision": "38887facb81830f4c76a1ed619ec5811"
  },
  {
    "url": "posts/other/hexo-live2d.html",
    "revision": "0a84aab5d2087ba8a17c343495806e0d"
  },
  {
    "url": "posts/other/Install-font-source-code-pro.html",
    "revision": "1cab2ca8fa6c26914dc14ee754cbb6de"
  },
  {
    "url": "posts/other/iqiyi-danmu-convert.html",
    "revision": "7f305c9503200adbe7478418c7fd3f82"
  },
  {
    "url": "posts/other/mipad2-win10-block-keys.html",
    "revision": "c432fc533d23620be596a7a6a3c1e975"
  },
  {
    "url": "posts/python/asyncio-run-in-executor.html",
    "revision": "b78ca9470ee6083b599c2836f6b2caeb"
  },
  {
    "url": "posts/python/deadlock.html",
    "revision": "53b3100352de6049d48fc28a12de9abe"
  },
  {
    "url": "posts/python/locust.html",
    "revision": "635f4c422ada83811cf4beccd159b898"
  },
  {
    "url": "posts/python/normal-errors.html",
    "revision": "1b89f29e2c45e847937adf7f734d1d8f"
  },
  {
    "url": "posts/python/python-bitwise-operation.html",
    "revision": "21afdf56eec4584d9506aa49acd4d948"
  },
  {
    "url": "posts/python/python-class-self-and-cls.html",
    "revision": "6840693a538aefc38438a1263dffced8"
  },
  {
    "url": "posts/python/python-dynamic-import.html",
    "revision": "bedf62a0bb373ede37615c1f373c0583"
  },
  {
    "url": "posts/python/Python-locals.html",
    "revision": "8b3084b9e401335b1bdcf1fee1a76dbc"
  },
  {
    "url": "posts/python/python-metaclass.html",
    "revision": "2562908ac53d881fb15b3e91f7750c48"
  },
  {
    "url": "posts/python/Python-sorted.html",
    "revision": "28c51904101d247f4eaa49b05e5c01a7"
  },
  {
    "url": "posts/python/Python3-mro-class.html",
    "revision": "bdb91e217d89e0695441af4a7ccc99fd"
  },
  {
    "url": "posts/python/timeit-Measure-execution-time.html",
    "revision": "f5c97b96efc10a30667ff18cd330868b"
  },
  {
    "url": "posts/python/whats-new-in-python3-8.html",
    "revision": "a75abe1ac7de1719188b85be64b03877"
  },
  {
    "url": "posts/redis/fast-redis-zset.html",
    "revision": "e52feed406f9a442b7752be54cd2a6f5"
  },
  {
    "url": "posts/router/iwpriv-DisConnectSta.html",
    "revision": "80998b7437b8198bc1c01eeb6fac0492"
  },
  {
    "url": "posts/router/set-dmz-and-UPnP.html",
    "revision": "dfc90912280755bfee8eff69c7bf390a"
  },
  {
    "url": "posts/router/wake-on-lan.html",
    "revision": "1f903077ef1dcb4847ab6cfbdc1fd3c2"
  },
  {
    "url": "tag/algorithm/index.html",
    "revision": "5753f9f4551f47ee5c6a65643dc01b39"
  },
  {
    "url": "tag/android/index.html",
    "revision": "c2a65643560de30843e77631c13cb3d9"
  },
  {
    "url": "tag/ansible/index.html",
    "revision": "64bec49d725913bf1c432d1680d85715"
  },
  {
    "url": "tag/api/index.html",
    "revision": "4251b36063ca3074df197f25b95ca249"
  },
  {
    "url": "tag/aria2/index.html",
    "revision": "1103fa50bd457633c2914399216ca5f5"
  },
  {
    "url": "tag/code-server/index.html",
    "revision": "d93b9b90cfdb7a023fbefdd70d2e1227"
  },
  {
    "url": "tag/context/index.html",
    "revision": "be69ec5d9b5d1e9dccbc18a142f3ee20"
  },
  {
    "url": "tag/crawler/index.html",
    "revision": "a004139b8a56ef12b9fd028f737a433b"
  },
  {
    "url": "tag/database/index.html",
    "revision": "5fe3a5455fbd4f9dc6af69756f5ed4e5"
  },
  {
    "url": "tag/devops/index.html",
    "revision": "ec1155e08ff9fda15823a3af3834f15f"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "2c02068f9ab96a2744a65edb9990912c"
  },
  {
    "url": "tag/emulator/index.html",
    "revision": "9bd4496974d8168728cc5344550678e7"
  },
  {
    "url": "tag/git/index.html",
    "revision": "eb85e5cbce5561b764e2f9a0173b5df7"
  },
  {
    "url": "tag/hackintosh/index.html",
    "revision": "fc43643b79d6ba9798e5f2c82b9021fc"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "a443e48ef0ff52a379c319cd4a3e21f3"
  },
  {
    "url": "tag/http/index.html",
    "revision": "6890aac052e85c4fba17d9bf8fbf2f04"
  },
  {
    "url": "tag/index.html",
    "revision": "e49306c8ff7da79af09479d3d5260872"
  },
  {
    "url": "tag/java/index.html",
    "revision": "8b77b7011a8f2170e701b805af6d32cf"
  },
  {
    "url": "tag/java/page/2/index.html",
    "revision": "c2172445f62ba5d37e108f1976df9572"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "ad0904ad15e604e0d384f7fdb3715609"
  },
  {
    "url": "tag/linux/page/2/index.html",
    "revision": "212a2eed4dfaf917e7660d3c9f880737"
  },
  {
    "url": "tag/macos/index.html",
    "revision": "5f86749eef1c92e78be82ef258b28e9e"
  },
  {
    "url": "tag/mail/index.html",
    "revision": "00848a37c853acf9c9f89444d462d829"
  },
  {
    "url": "tag/many2many/index.html",
    "revision": "f367e74a96e4e85ce627322756296816"
  },
  {
    "url": "tag/many2one/index.html",
    "revision": "8dfd9017745a0868035b6ff92c0d46e1"
  },
  {
    "url": "tag/mq/index.html",
    "revision": "b2fb80bfc9de6245f304baabf31def09"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "b0c5cf0205f42127336b70f14d7f6af8"
  },
  {
    "url": "tag/odoo/index.html",
    "revision": "90bf39a2f8739832172b56fe93b922ee"
  },
  {
    "url": "tag/odoo/page/2/index.html",
    "revision": "3d23e8894ad79ed3202a1872fbff3601"
  },
  {
    "url": "tag/odoo/page/3/index.html",
    "revision": "4a4e54ad497e23cf2eea05d317c9a493"
  },
  {
    "url": "tag/odoo/page/4/index.html",
    "revision": "a542b90aa0823e4e7c0eaca640bd9681"
  },
  {
    "url": "tag/onchange/index.html",
    "revision": "f545e4cb0a534a5ab7b282b2b6ad740d"
  },
  {
    "url": "tag/one2many/index.html",
    "revision": "140d8d1e8de96467fb19a23df41dcb7e"
  },
  {
    "url": "tag/other/index.html",
    "revision": "e80c62693a96e73662bfb6faf8cd3865"
  },
  {
    "url": "tag/python/index.html",
    "revision": "de50db0ad422fcf32bd9d25dc2130dc9"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "e609a488a6be057f2e0142cbd6f6271c"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "d91b6389c73a2c8f58f359101ea09571"
  },
  {
    "url": "tag/router/index.html",
    "revision": "eac2e0bfc55f51ff536b84171bac3a8a"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "68fa0eb413306b337ca773564cc35452"
  },
  {
    "url": "tag/ssr/index.html",
    "revision": "6583a299a77d9425e5bf65f6208ac34b"
  },
  {
    "url": "tag/termux/index.html",
    "revision": "8db3d9eb8fef5a536f35647c14a9fade"
  },
  {
    "url": "tag/trojan/index.html",
    "revision": "3658532b6b74986b94e028d58efd278b"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "67b7acdb890ab0709d4172252c4aff22"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "1b7cc6f12115aff672155979afaafafb"
  },
  {
    "url": "tag/wsl/index.html",
    "revision": "8473ff1aa4922a468809f0ebaebc5230"
  },
  {
    "url": "tag/xampp/index.html",
    "revision": "36fc6e016727fece1ee851e39ee80c08"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "acfd129ee17b5131d702aa7e3402f5e6"
  },
  {
    "url": "tag/酸酸乳/index.html",
    "revision": "782357dac4610be3c0393a1698bf523b"
  },
  {
    "url": "timeline/index.html",
    "revision": "25d03a1c128c8328fdbfec1161ff9eb9"
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
