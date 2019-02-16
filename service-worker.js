/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/2016/04/20/我一直都在/index.html","cc1b3e310c06abc25c4fe938fab98e18"],["/2016/04/21/清除右键无效项/index.html","ec9a7218789fa97c7af8b1be20e99aae"],["/2016/04/21/第一次参加蓝桥杯感受/index.html","4026da0aaad36727c51c76681786f0ab"],["/2016/04/23/LinkList特有的方法/index.html","91e613fd79ef5de2c298105804a557bc"],["/2016/04/27/大学？大学？大学？/index.html","114ff71a6aefe77fbfc185427d7188f1"],["/2016/05/03/GitHub-for-Windows使用教程(一)/index.html","34ab0698e9bbc1c29ca417ba48f0f8b7"],["/2016/05/13/GitHub-for-Windows使用教程(二)/index.html","6723e39f7242ca448c83fa8344fe955e"],["/2016/05/15/GitHub-for-windows使用教程（三）/index.html","22a799685ef4caece614fb96258ac1c4"],["/2016/05/23/Java集合遍历/index.html","8a4ba7514bee8f32bb49190f336cb011"],["/2016/07/04/Activity启动的两种方式/index.html","1d5b54312e1fb5e9a25c29acba4dd0a6"],["/2016/07/17/如何提高Android虚拟机的运行速度/index.html","6ab1508c9e8a8250e78ff18d57eede2f"],["/2016/08/05/FlaotActionButton详解/index.html","e1f14c556589114dc640988f55b05b86"],["/2016/08/05/底部导航按钮/index.html","0e58bbfe3d3f21fdf28e2c7373e58e37"],["/2016/08/09/正则表达式/index.html","3ece9bd2514bbb42558b9b130962b400"],["/2016/08/13/Git基本操作/index.html","3b6a442449cdc00b628e035c54fd7ebb"],["/2016/08/28/GitHub-for-Windows使用教程（四）/index.html","80349832c41e696ce755f008113fc1c1"],["/2016/09/11/String源码剖析/index.html","adfcce4c326186bb2679b6203ffc89d8"],["/2016/10/25/StringBuilder源码分析/index.html","6cf47476b8f3e7d128de22343549d836"],["/2016/10/27/MD5加密/index.html","d29920d7d62fbdf130ada5b26336d8bc"],["/2016/11/27/ArrayList源码分析/index.html","1d60e1bc73ebe77f2c3c740810a71596"],["/2016/12/30/2016年终总结/index.html","9fb7a6fc38eeb3f5b9f497fc911e75c3"],["/2017/01/10/Maven入门/index.html","d82f135220d50afd5fe2766c5f9bcc3f"],["/2017/01/19/Junit单元测试/index.html","34aa20ae9432f153d2d49913b022892a"],["/2017/02/08/Spring学习-一/index.html","a4f7ebd5678f1f8de849d925937e4db2"],["/2017/02/19/Log4j使用/index.html","3f03bb13d7d8a79c4b71932bd382da0e"],["/2017/03/02/Spring学习记录-二/index.html","44eae68491bf7b8f5a9cc04f0c767d73"],["/2017/04/03/python爬取斗鱼图片/index.html","f9326aa4af42164aa76a59e19a3bc957"],["/2017/04/04/计蒜客蓝桥杯模拟赛-5-试题/index.html","2125be09ca25eb07f15965cb39d1367c"],["/2017/04/15/2017蓝桥杯/index.html","dd2346500f2ce5b9907fd17a25af966e"],["/2017/04/20/博客一周年/index.html","077a68d6480c4c9261f36e12dadb6216"],["/2017/04/30/Git教程及使用经验/index.html","57d28b50667b9705bedcaac527a64050"],["/2017/05/08/第一个-Android-项目/index.html","4f416fd9f7a900065d6efc7e63edb6b6"],["/2017/06/22/python-实现微信打飞机/index.html","4282100e4dcc004d5979f7fefc1126ef"],["/2017/07/23/vim-基础学习/index.html","30dd770bb65d9c59830c8e9e672bf912"],["/2017/08/01/Hamming-Distance-问题/index.html","4e2682a9dafecee745bc7af99f49c03d"],["/2017/08/01/LeetCode-Array-Partition-I-561/index.html","58e58a4578e02be495c0822931f130bd"],["/2017/08/01/LeetCode-Two-Sum-1/index.html","cc67c157d8ab8a8ba61af1ec7473800e"],["/2017/08/02/LeetCode-Distribute-Candies-575/index.html","9c01fdffd3fe059b3265a191f80a9b8d"],["/2017/08/02/LeetCode-Keyboard-Row-500/index.html","fbf938fd16bb27f700c008e6136eb30f"],["/2017/08/02/LeetCode-Number-Complement-476/index.html","5a929e31bc6e1c69d550af26271ba362"],["/2017/08/02/LeetCode-Reverse-Words-in-a-String-III-557/index.html","cc533af8a8427236970f94d77dada71b"],["/2017/08/04/LeetCode-Fizz-Buzz-412/index.html","17c8c850c24daefd96b96a898aead22c"],["/2017/08/04/LeetCode-Merge-Two-Binary-Trees-617/index.html","864c1cb0f0d6c081c425bf786fae542c"],["/2017/08/04/LeetCode-Reverse-String-344/index.html","b4f3a3444c2b4f7f6cf1b41ba0b458c0"],["/2017/08/08/LeetCode-Island-Perimeter-463/index.html","31f26c39e4268ce24fd4a556113b1f92"],["/2017/08/11/kotlin-初步学习/index.html","d95d89bb68ffbf80b8ac98d4eb765d27"],["/2017/08/12/Kotlin-扩展函数-属性/index.html","a3123ab811aa4fff844f0c2b45f06c8a"],["/2017/08/13/LeetCode-Next-Greater-Element-I-496/index.html","558a39fefbbab4f0feb4742124de73f6"],["/2017/08/13/LeetCode-Nim-Game-292/index.html","eed1fe70bb035a44738091f2d409f338"],["/2017/08/16/LeetCode-Judge-Route-Circle-657/index.html","d58bd10f96d4a8a9fdf54568e588dcec"],["/2017/08/16/LeetCode-Longest-Uncommon-Subsequence-I-521/index.html","03e42e494d7e6ee275d6e409c06d42fb"],["/2017/08/27/LeetCode-Move-Zeroes-283/index.html","2b266fd13c5944de50879a0b7496b833"],["/2017/08/27/LeetCode-Single-Number-136/index.html","f7f3eced857a30dea609c158ad8aa163"],["/2017/08/28/LeetCode-Reverse-Integer-7/index.html","a2cf22bfab2431e68336825b41479fba"],["/2017/09/01/协同过滤算法/index.html","7ed8e6063221e00667ab8dc9f7050ffe"],["/2017/09/10/LeetCode-Add-Digits-258/index.html","0d63000c88a7a9faf27d1f44565498ac"],["/2017/09/10/LeetCode-Find-the-Difference-389/index.html","d863d35f40ad85658d80d404c33da193"],["/2017/09/14/LeetCode-Length-of-Last-Word-58/index.html","26634dd9d7178d20252f9a82cb43e565"],["/2017/12/01/LeetCode-Binary-Number-with-Alternating-Bits-693/index.html","d65591874a01a28cf8a9ee2af7fa3a1c"],["/2017/12/01/LeetCode-Number-of-1-Bits-191/index.html","6388c67e6aa50c455196ee59882e7aa8"],["/2017/12/01/LeetCode-Self-Dividing-Numbers-728/index.html","d2cbf71b9517132c6154c3d38edcd7d5"],["/2017/12/02/Kotlin-1-2-平台之间共享代码/index.html","e094453929a13f4095191816a857865e"],["/2017/12/23/Kotlin中Collection一些语法总结/index.html","6ef5f5d3857c05f8f41e37d1ca6ee413"],["/2017/12/28/一次神奇的课设验收/index.html","00210fcfc17abca5bc2cb3d2ed15c2de"],["/2018/01/01/2017年终总结/index.html","68b94cdeee6b4ac448bd5916e4dd6e9f"],["/2018/02/23/RabbitMQ-和-Spring-Boot-的集成/index.html","4817a010d9904f2067037ee8d58acf98"],["/2018/04/27/大创项目总结/index.html","8d93eb922f1e1d60056072714b347c93"],["/2018/05/07/vscode-配置c-c-环境/index.html","f038b3617e7b12d9a16f8b803fc4f8b6"],["/2018/05/25/Apriori算法/index.html","0aa927edd14642a6e5d8d059df75b541"],["/2019/01/26/Angular-管道/index.html","750cae89f44d778a5eba34f863bc68f9"],["/2019/01/26/Spring-Boot-Security-跨域请求配置/index.html","8a0f6dde7debfc706fbeb6ea8de8c187"],["/2019/02/02/Ktor-入门/index.html","55e317506c9db4fcf6085535d6e7a468"],["/2019/02/12/黄道十二宫/index.html","a1e2ea5e366aaca9d70caf430a2c5681"],["/about/index.html","4ff0a0fae61593a3a7d20093f3d9df8c"],["/archives/2016/04/index.html","1d61ab869c1deae007fc675b8dade5a0"],["/archives/2016/05/index.html","983a26458e4d00c8a0fef4aa097bc7fd"],["/archives/2016/07/index.html","46fecac3008d43f7da1c562438c74776"],["/archives/2016/08/index.html","b0239e0d3726e37f1b2fb9969cc6f587"],["/archives/2016/09/index.html","fd40f0dec4c0da43678af9728de6f1b9"],["/archives/2016/10/index.html","b72ecad52a732a19e9bebdc78b249745"],["/archives/2016/11/index.html","84a6fe862c267c0c4af8d31b3e463c7a"],["/archives/2016/12/index.html","f182a98dadbd3ea3e5d52aaab674a3e9"],["/archives/2016/index.html","dacacaed215a249e9764d7b482e0e4b7"],["/archives/2016/page/2/index.html","0333682ef7d427feab64e90f20c9b0d6"],["/archives/2016/page/3/index.html","207705a12a719bc7e795d2f60b48633d"],["/archives/2017/01/index.html","e2f5374f355eacfe3cbf378c62f0b38a"],["/archives/2017/02/index.html","a7199bb775d24fc60767afd227b7ffc9"],["/archives/2017/03/index.html","f860f8930a2bba8d3d9a7640edbdf6c0"],["/archives/2017/04/index.html","192e1bfd4c6b24a071cdc36f6511f2ee"],["/archives/2017/05/index.html","aacb3d51dcbe0f248b179cc89bee578e"],["/archives/2017/06/index.html","91dc9aca20d6db72ac125d2200de09a2"],["/archives/2017/07/index.html","4e6e10902aaae3e49768c1037c6410f2"],["/archives/2017/08/index.html","45e2e66750ebf6bb1b92140ae2fd71ce"],["/archives/2017/08/page/2/index.html","58d79414b6b6b6e60ae90542a6516c4c"],["/archives/2017/09/index.html","65d253354ed406eb33f12d6b85117461"],["/archives/2017/12/index.html","7e91790ce7430a47f60ee6a9165f7c4f"],["/archives/2017/index.html","2d1ec1883a4d8be31b183025bdacc7d9"],["/archives/2017/page/2/index.html","0191f2a394e2a9e0b26983c6167a2b4b"],["/archives/2017/page/3/index.html","d7f3adce5b3add1a2861b6b10fe2341e"],["/archives/2017/page/4/index.html","50ec5a2d696d1e1e1597118928aa64c6"],["/archives/2017/page/5/index.html","21c4da02d4cd0bac9853b50bf6371cae"],["/archives/2018/01/index.html","c0b059dbc8d3d4059dd572d8c834c19e"],["/archives/2018/02/index.html","c9f878d175e78e0ed1792e796296069f"],["/archives/2018/04/index.html","39e42dfdecf974723ce1404645a5dd82"],["/archives/2018/05/index.html","64b6befb1dd2559d83705f2e8eba6e3a"],["/archives/2018/index.html","fb1a96b7363f1dfd6b5d52b5a677e9fc"],["/archives/2019/01/index.html","94cb19a3e02d24e6acc13cdbdc4cbda6"],["/archives/2019/02/index.html","86594576cfd939f73101a564765edad4"],["/archives/2019/index.html","cb64507700b438633d14d04d56e3d748"],["/archives/index.html","4a95112accab70e61bf0da79953f6ea7"],["/archives/page/2/index.html","0a6e5415a62c1625d7750bd917a3f696"],["/archives/page/3/index.html","a761ead48d62aedf2ad2bc8e2346bbf2"],["/archives/page/4/index.html","aa6a152d1fd35be247d3a656fec6d2b4"],["/archives/page/5/index.html","60786865b51c8b05240b7a664269c117"],["/archives/page/6/index.html","2c445abdba5ecf0128e322155833bd8c"],["/archives/page/7/index.html","247ebc2820532b0cd9a28490a64663d8"],["/archives/page/8/index.html","f833f0469c915432a91ef9360471c691"],["/categories/index.html","8d696c0a7ce7fe57d81d68559875e78d"],["/css/main.css","761cbe7b3f8f8a1eb761a9478e93cf9f"],["/images/AliPayQR.png","3f579739acbea428bbfd6caf401633a9"],["/images/WeChanQR.png","3273049e528d5c7c8d6465feeb6f0f37"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/alired.jpg","e5aae0d59e9c1ab261380536793de248"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.png","a5418ef792411cc48b8a04be1412a806"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/icons/icon-128x128.png","c47d5e504c2200f7a8e49c241d117803"],["/images/icons/icon-144x144.png","332e58a8a22f3c61a89714f92f9cd599"],["/images/icons/icon-152x152.png","75f68482ee40ed7d65cbb7eaa948b122"],["/images/icons/icon-192x192.png","ef1632bde4bbfed422aa81d1a0fec31b"],["/images/icons/icon-384x384.png","c4b609968f279a561d729f0eac182296"],["/images/icons/icon-512x512.png","7f33f6399d6441456c90d56b16a81cb2"],["/images/icons/icon-72x72.png","b37c23b70ad209836f23ccf77a43ec6a"],["/images/icons/icon-96x96.png","c79c31a21bf8646cd6e4002df0c2db89"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","2b72ba11a6abd3caf4a6a319be2a9e21"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","a7af8f923c31f6e47c11afe673aee5fd"],["/js/src/post-details.js","9a53fef7381270bb8c96a611d52ebc04"],["/js/src/schemes/pisces.js","aa788a9a68ff8d352b7b6e3dbb4ace96"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","ecade23d7bb77f013893186d56a92059"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","3da4eef253db4019ff4d8b6bf829b400"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","bb4f88d9fd9264173208a0a51c9483af"],["/lib/font-awesome/css/font-awesome.min.css","b7f16ad3c730d60ba7282b3028bff537"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","7be460aea7660e52a60f7e75098f1269"],["/page/3/index.html","2301941379fd5585d9d38ae247937ffd"],["/page/4/index.html","f84811dc0b125fd0464527c316b59653"],["/page/5/index.html","e46d5a39934d2d9e3b337e51a36b21ae"],["/page/6/index.html","def24e656e35867221181fecf1780a68"],["/page/7/index.html","cebb18f77f45489058327dccc2f2c2d4"],["/page/8/index.html","6ae2006f0c0058171e2faf6274e514d1"],["/tags/Angualr/index.html","9a116268adcd73fedb31e34e4eb543e9"],["/tags/Angular/index.html","729ebcd39d8bdf0c1d10b054e195e469"],["/tags/Array/index.html","8689447fcbd00dff7cacb806674cd3e6"],["/tags/Bit-Manipulation/index.html","c0a5a195e66352c4db2fbaf0171ff0b2"],["/tags/Brainteaser/index.html","bfa271e5920336eaac320192db02de6a"],["/tags/GitHub/index.html","309fc9795348a5ffe255856b4ee4e3a1"],["/tags/Go/index.html","c485ba0f8b39b34509bc638781cbac78"],["/tags/Hash-Table/index.html","e755babd793493d0a47d295547e7540e"],["/tags/LeetCode/index.html","d8b02f88fe77136ae9d7271e3ede6478"],["/tags/Math/index.html","2c347812c9adbbb2b0130862dce79c1b"],["/tags/Maven/index.html","2f9e7ed5da3df4e25fde7905cb35926e"],["/tags/Python/index.html","6419f7bbcbf84f89afba14710aabdbaf"],["/tags/RabbitMQ/index.html","a6f961b0711020d548161d2740607cb9"],["/tags/SpirngBoot/index.html","e07ac0d56cff33ed819863ef20569cca"],["/tags/Spring-Boot/index.html","79e17f1d878d2e125087e166da7848fd"],["/tags/Spring-Security/index.html","e04e540d7bbb7c6167b0efae97fd7641"],["/tags/Spring/index.html","e0dc68524e37e89852904d43887c604e"],["/tags/SpringBoot/index.html","80166e4a12b82581466216375983b0c0"],["/tags/Stack/index.html","6f3d48144d9ba54483eede806bb0a922"],["/tags/String/index.html","f14bf7478ea9a01d5eec062303b74e1c"],["/tags/Tree/index.html","52aa1a2a17c76dd4568f1347aca340ae"],["/tags/Vim/index.html","6bbd99710b810bf0eba0314276b18c05"],["/tags/android/index.html","f398bfeb84a7e12c814dc0a8bc122dd9"],["/tags/index.html","62ffc6e74674ca3627054f7cbefcd6dc"],["/tags/java/index.html","a6eab81da923b9149fa114cda131a5d9"],["/tags/java/page/2/index.html","abc4ee1d3ae28f723d7f3206240fa918"],["/tags/kotlin/index.html","29c922b570b5689a839692831ba8a054"],["/tags/windows/index.html","54e84106592a23e7edec3e1b68296793"],["/tags/加密/index.html","ae6a53089f220529048db484e66d6902"],["/tags/博客/index.html","049dc0669e03c83f2def269dcf12961f"],["/tags/工具/index.html","19cf50cab5093b36437ce3b3ddebd281"],["/tags/推荐系统/index.html","2a052c9d42951409869265be12394248"],["/tags/数据挖掘/index.html","25b5e057d6b533fdcdd83f64ec3eb210"],["/tags/测评机/index.html","50381afd8f66106f56ea6c09e01a64ed"],["/tags/测试/index.html","2cbe7629e8df683de739cbbc49840ef7"],["/tags/生活/index.html","c5d584593d08c66ab40e128609887ec4"],["/tags/算法/index.html","4b2d7dfbc6bb938edceb13dcc009509f"],["/tags/蓝桥杯/index.html","43925ccfaf3f461e2b6f0faaaf304a3c"],["/tags/译文/index.html","17c908c21c65e9681607e6c109fae20e"],["/update/index.html","1a8ee3be7c2bd2afb3b4583a8d591ab7"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







