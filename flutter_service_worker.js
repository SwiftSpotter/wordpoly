'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "79eb26158d639583289ac761a50944b0",
".git/config": "9c175ae85e940489f3080449e1ce032d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "20360344c95a84e2041cdc8cae56286f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6250639c06d4dccd4979b05846f1b9f6",
".git/logs/refs/heads/main": "a9c0889300a087ae919b162d0cced36d",
".git/logs/refs/remotes/origin/main": "0ffa8d5aa62b255bdcfea7a02a7ce18c",
".git/objects/02/cde03b8e2c46d44331e800add214cf882136c8": "dab7e9381e45433ad0ce88c06ff81d7d",
".git/objects/03/6845191f43c107e44e03578b02ae348793e1fd": "53d3645247b14495a5b16f70793aa629",
".git/objects/04/d8af7c2e103bb5929eaf24c029a2e2a72ef844": "a91856bc09d3c444eb5d53222b515ef2",
".git/objects/0e/9de5eaba97d72bc1a1474558653cadd44d3527": "6e25e6136b91c5be9485194759e35d98",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "86cfac30d97fb45bba2f4417782645d6",
".git/objects/17/75e55eaf4fabb64113b5b7d278841143dd03ce": "40e9be17b365ebbb0e7b4f195b8c81a3",
".git/objects/18/416f98a42bf1a0d4e4748ae8a5bf8f1e26e8b0": "bffdabf823f6baf07a326e698225e76d",
".git/objects/18/61fb9515a254d4eef9a8aca4d12a0c3dda4736": "7fcba4c50ce9014bef7ac357c6d33026",
".git/objects/1b/c24dd899a25395a69fc319d4c0f0d913b8f663": "2ae40b67677feed95d6c7fa99b00de60",
".git/objects/1e/25fb4841dbfcbc6e4fa75d9417a4113ba250bc": "e91280155bc02e320c2a664e7fefc7b5",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/994ade452a05711b2e649c32fe7b1f3cccf694": "b37a5b829037b2e370d67b791474903a",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/22/9c19808255de6c97f3ccaae99c611bd7439b39": "1f27f95959dd695f99cd17ac0ede5230",
".git/objects/22/c28d7cba62a9be72644037529f78297c415cda": "29be6cbe8cdc3fce990f584199855254",
".git/objects/23/58195166d3bc3ecc4b826154081ffe2ed9ce39": "5f9f4482abed800ea749479468fd5dc4",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/25/eeb3b8df47f71eeaf47926f723d6db4cc97dbf": "d846cdaf951a92caba83ca4c8812cfab",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2a/05c1b30273c9c32ab14129f619cd2c1a2eaf9c": "adb1785255c3614957481e56a6f21d6d",
".git/objects/2c/147d88eb4970b25816905e9be2de5917b95a93": "a7140918aa77dafffd9cb14e3a838aa0",
".git/objects/30/f89a255fd8db0b3a1558f95d598b5a25b94f9b": "d96d8702b91e6c2dff76598bf8d595d0",
".git/objects/31/039ec3fa866d559794ce2b4990469bbc3cb655": "27e8168c2e008422618e8fd6932c5515",
".git/objects/31/9d8196a05ee62adf0b2a205bf80e2a4c7e19ca": "6303198e4d4b70edfd9edf36d5aeed38",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/33/feb00e1948c80502a3292b5b0457c4f567af2a": "b1de416cb7e1741de143c6f761f25452",
".git/objects/38/f72c3b661274731c0dca4263c6147292c3313e": "06ec909689545717240ec77454003efe",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3b/f307dfc31599dd5dd4a4bae10759f7d6e7e696": "aec9433023541188fed8a84b0cfe48ab",
".git/objects/3f/7718217bb7cc3d3be68719dba8e49271ca451a": "43b64f022eb54e09e55b5ef7134ef732",
".git/objects/43/ae7794b2e359ab60fc2a6d50758f0206747647": "cd9edde1ce3fa4166d5f0a7ee94dcffa",
".git/objects/4c/5c677f0ddb38647b90c0d539a9baba6b1843e9": "2e9d92998b93cb24318b232bf4635856",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/55/52b7e7c0aa16bf78dd9f4e042d1223477053ee": "f2c4d39702176636d1917335c2e2c20e",
".git/objects/57/683563a29f971813a9d67b86376df7a3e24934": "62c9c445b79c25cf7f31baa0f5a8dfa7",
".git/objects/57/fc7b9b4aa7772d2aacb0d9e122cdd3f544e414": "8db9ab7e752f99fef98f50523cf4643f",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/5e/a65e1441b21d4160d99ad2cfb85708ab6623ff": "e6c2b30774a01b4bfcb44a5c0c7beeb0",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/63/19e67e3569f0aef60cd583cf3a1fda59facdc2": "6943a0b791319af2dde8d17755c57708",
".git/objects/63/7db4117e0d138b02e213f871231b4bd3cb82be": "015cd612b5f64adb5b611e44654d67f9",
".git/objects/63/ab2360975ce0cfa9b93e1252a0c2afe059aea8": "11a285bc1728644a6b899a358085e19d",
".git/objects/64/4c1406920f727352b927ede11dc226687efa76": "e9e0f4b51c6a70919d0a92d6369109be",
".git/objects/6a/24c5cdef0345902245313e11c86c0c52460e17": "d9fe7909be157d05fcaa01bb42fc7193",
".git/objects/6a/63b25c7a5d7cbc7f3a4e15b50456eff8a61207": "94dfc72f7c718cad89630ced7849d815",
".git/objects/6b/6d3fcd4aedc6f764511bc1dca334f055dffff6": "953ce8e5ae35361c91000b3a439b30eb",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6c/22d7eebf2722ac626abc95d3bf6c974f586998": "e2d055f0f086cc06efb309b1d2d1f675",
".git/objects/74/5ff06522c7314ee0d8ff0adc4ba616ca9f4993": "9a86e7563b42ffc3b3912dc8c8ae3920",
".git/objects/77/a282eba99bce25434bbcf05ebf33c43fe0c223": "fd8929c14673efa7b331f01b376fe1ea",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7b/9a1762124e61f59531236cfcd2adea8c400356": "33cb7e8da96fab50d5d5a6378ab8c9ac",
".git/objects/7f/0374f792894e5bc9d83b15a0a7ff8c2d05f430": "4622439b595d1b583147bf279f8f65bc",
".git/objects/80/68d95a5e39daabc170e38d2b501d3d49b2cb1f": "52195d49c89e695d08c2d6bda059eeda",
".git/objects/80/9563d797eca8e1bf61c5326d66b574531d191e": "28a3a661f14ab8421e4164ce0bc97f40",
".git/objects/80/b1fe3bd876c1ea6081a62aba16bddcc2c345ba": "351ad76f86bff0f9f5d069303e5b693d",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/8d/dfbc31a6c6a99612752cd3ddf9f7f07b4b00b0": "59445a6e72e3a30605d531285555f98f",
".git/objects/8f/9729c8853e9c13f3da73e597060f8e15bda312": "8d851b1e4d86e85a8070c9a9cf32b94f",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/93/61a3bbfea53914147cfc12b6056eab221896fd": "9df7ac7f69771a9554b02694723ff4d0",
".git/objects/93/b4a4214a0d19514f34b803b1205ec9266b178a": "2951b91e5281e38df081fabe6b704280",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/98/74ca87bf3bcf92a7290eab69ab51b26ceb893f": "b41137a661e702a23c6cb9693255c13b",
".git/objects/98/af8465cab2e7d20eae05f5b068c42fed6bb9fb": "85ee69dc23b1d83e1851efdd1487d75a",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9b/6a44c04b1385cbdc81df4f3c9986d8206a77ff": "0c8cdb5539d4085e52267118c37f59a2",
".git/objects/9c/98f3892864109ae8dfab0691bfa3fcead5fba2": "30e1c0f6d5219360827e236e15b48ff5",
".git/objects/9d/48a5cd5710ac714378a991339e69ef4ba1bb01": "2a46c8214fcbbc01eb30d3702c49467e",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/a0/7aa01e0ed0a9b3f1ad15598ecd86def4a8559a": "0b895980716ef0a475211db12d6b9db9",
".git/objects/a1/292aa2f8c38932e5c3025f34c8953ffab52d13": "a568255c21bd773f6ec48ca4f80242ab",
".git/objects/a2/c2c501d92cade4609fbff2a20d058036a0f07d": "5799cad65f96fe00122233a5625d5041",
".git/objects/a3/0c54677b4beb6c17c99d1a4ca340b504dc0a06": "3494f63249b1b64ca208e71ec874901f",
".git/objects/a4/36db788764821d65b9fd11d1ac1be01f8250ab": "80485a2b3dd1e373e6eca1a6caef7537",
".git/objects/a5/3efdf92300d180241adcd14d81d15a734c4e08": "cdce04155deb291d95d5b2a8a45a186e",
".git/objects/a7/3e9a203603bac68c01b74adc479516396fe878": "6a46f0f936829987743e249d1770677f",
".git/objects/ae/8241b5a210738aa84e341356d2943233fc2a27": "4725f11d0e19334516584b21d35ea410",
".git/objects/b2/3c8a1ac483d774b837b7f7cff7182a122a9dd0": "2b14f6471f75619043f4170582e6f9f8",
".git/objects/b2/689d7e068fadd1475d65b82f0f8e9f980df767": "cbed8b579e9b5e454808164e0dc92c25",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c3/c6c62f00ad88355267df7fcb795f678798933d": "e5f1e73a717f9a90c70621cd79468d39",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c4/044e9f66cb5c19c61dd115d43862cd1555a946": "7bcb2b613d0cf7da440821bc37b2010c",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/cd/c6c7b6e03bed8f4c61815a939b3a1f4413552a": "7d3c523e8d00d56173a89da3da7e1426",
".git/objects/d1/d8fc188cb7fb2ddbdc5358494d3854ad054b0c": "faf5f01b8da39a888f5f845a0a3fe6f4",
".git/objects/d3/ac062f3f03b9610238ee2c74222950d234773b": "88c1acfda6711c6e66b6deb2884367e8",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/e0/324e10230f52d5f86922387e147177da380b1f": "e16bb89dbb91a919a4a1eb17670eea6f",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e5/6354b872489994264f84590bae0cbdb37f4a59": "105f3c6ccdc1a4208166df05670b25dc",
".git/objects/e6/4150afb46c02f383ca8b073d4a71325e5708fa": "717d91813ffa7dfce5de42c28f385203",
".git/objects/e8/880a3f2cab641f54e686509268cbe16a4a24ed": "d6a7a57cf1418f6be3590c279e29e8f2",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/6263f407966a0c3401b701edc47aa184d35db2": "08095050a0a9c594d73c46f63de820f6",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/f7/6967d577a70ce46d2b6ed98aab860ead7bbd32": "e0e84cb49c48198a2358be2b8c37c42f",
".git/objects/f7/8b3d38ea07ab08feef9c90be1aa0d59e4ccbbf": "e987ead6c23b521fc27e7356eb6882dc",
".git/objects/f9/4ce27362e99bc1baf53d0d4c6c19ce4e6729e1": "5ccfee986234b20f8a205fa09b0b0309",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/refs/heads/main": "1231a40ec377a8dd9e4ee12d071c3a57",
".git/refs/remotes/origin/main": "1231a40ec377a8dd9e4ee12d071c3a57",
"assets/asset/dictionary.json": "93f8034974121068d3c9f1ed6c574209",
"assets/AssetManifest.bin": "4d98cdd09a12e746346e810906bcd043",
"assets/AssetManifest.bin.json": "12808c03ee412398db8675941ac9102c",
"assets/AssetManifest.json": "285194dad077c93ee77511fe62d3ff03",
"assets/FontManifest.json": "67a28da3784fc091c2f816d615fbf08a",
"assets/fonts/MaterialIcons-Regular.otf": "471dfeb2ebf2c5986aaa53b3d7193721",
"assets/NOTICES": "02ec0653fd48304a442d502a5c13c89a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "f3fd2757675ccd0a68aa7f712820f27b",
"assets/packages/quickalert/assets/confirm.gif": "bdc3e511c73e97fbc5cfb0c2b5f78e00",
"assets/packages/quickalert/assets/error.gif": "c307db003cf53e131f1c704bb16fb9bf",
"assets/packages/quickalert/assets/info.gif": "90d7fface6e2d52554f8614a1f5deb6b",
"assets/packages/quickalert/assets/loading.gif": "ac70f280e4a1b90065fe981eafe8ae13",
"assets/packages/quickalert/assets/success.gif": "dcede9f3064fe66b69f7bbe7b6e3849f",
"assets/packages/quickalert/assets/warning.gif": "f45dfa3b5857b812e0c8227211635cc4",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "fc98a845de6dda45f4b2b71561cfd972",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "b7b66ad7f7058b7719a54d691f2c73a2",
"icons/Icon-192.png": "9f608023779347ba4261f7bcfa45c2b0",
"icons/Icon-512.png": "3c3e092571a70183822e396505317b5b",
"icons/icon-maskable-192.png": "9f608023779347ba4261f7bcfa45c2b0",
"icons/Icon-maskable-512.png": "3c3e092571a70183822e396505317b5b",
"index.html": "b6e6cb25adb1858c798e7ce1209217b4",
"/": "b6e6cb25adb1858c798e7ce1209217b4",
"main.dart.js": "521d85a5ba1cfd37e66003fa2e1f1769",
"manifest.json": "b6cfd16487066b5adb5e930323f0261e",
"version.json": "b47b6101a5404fd9047754d4d0b52255"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
