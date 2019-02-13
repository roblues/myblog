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

var precacheConfig = [["/2016/04/20/我一直都在/index.html","d927c2ab6665aac26d9ba8d3ec6e2bb6"],["/2016/04/21/清除右键无效项/index.html","09f4f3b63a818ae5adaadca9cef348b2"],["/2016/04/21/第一次参加蓝桥杯感受/index.html","5f94cfa92ca6270a014196b12cd8bc22"],["/2016/04/23/LinkList特有的方法/index.html","bf37bf2a7765cdba21cb2b65637c6317"],["/2016/04/27/大学？大学？大学？/index.html","422b71bdc64566f0ca1c2c617d8a929e"],["/2016/05/03/GitHub-for-Windows使用教程(一)/index.html","631351b9cb16ae97a7fa82be166ea993"],["/2016/05/13/GitHub-for-Windows使用教程(二)/index.html","0e97687e6148d3f21033d9f47700f326"],["/2016/05/15/GitHub-for-windows使用教程（三）/index.html","3a01d6f4d959ee3347ec42a5324c1735"],["/2016/05/23/Java集合遍历/index.html","37e025040c232465931e62ac8025a4d3"],["/2016/07/04/Activity启动的两种方式/index.html","b647e797798d832de4a45527ca430930"],["/2016/07/17/如何提高Android虚拟机的运行速度/index.html","8f4c5f5e0b3315e13d0cf5ef6fc60873"],["/2016/08/05/FlaotActionButton详解/index.html","21a51977b5b7e494de8aece7e4e14b62"],["/2016/08/05/底部导航按钮/index.html","96f52aa652d3ffab1c4305cdd599ad66"],["/2016/08/09/正则表达式/index.html","18212630d07f517d8af68db90ec4902d"],["/2016/08/13/Git基本操作/index.html","a028aebe30cb21da8cc5faf43e499ce5"],["/2016/08/28/GitHub-for-Windows使用教程（四）/index.html","11387e9d4d00aaabf45a1e0a7f644ca0"],["/2016/09/11/String源码剖析/index.html","15139aedc71dfc63ce1ad26b54038f0c"],["/2016/10/25/StringBuilder源码分析/index.html","3dd10d0cc6a9d1620c18ae4b9fda77cb"],["/2016/10/27/MD5加密/index.html","34e644296c7280b6cbe87cd3b1958194"],["/2016/11/27/ArrayList源码分析/index.html","5668ecd0ccbe970d3ca5f0f39c92aafd"],["/2016/12/30/2016年终总结/index.html","84a1a5eec2d337e23c421f9ce49156e1"],["/2017/01/10/Maven入门/index.html","706e24fb13cc4ec59f39925e3680472c"],["/2017/01/19/Junit单元测试/index.html","98462b21c1094a6f5751d803cb524062"],["/2017/02/08/Spring学习-一/index.html","71f8fd5531b16135bc832da5a89b9ede"],["/2017/02/19/Log4j使用/index.html","44f3c5ae0cf4abf110f10dbb616312e9"],["/2017/03/02/Spring学习记录-二/index.html","cb7917a50d3088bcd9069fae3866a12b"],["/2017/04/03/python爬取斗鱼图片/index.html","816217038744524d55a2e94cd6a5e672"],["/2017/04/04/计蒜客蓝桥杯模拟赛-5-试题/index.html","e0ad2678bf3baafa57671a5d6509800f"],["/2017/04/15/2017蓝桥杯/index.html","2d7da03c3c8cbda198f7a88f8fa3b96f"],["/2017/04/20/博客一周年/index.html","288b25a18a4482446d523bb09a03891c"],["/2017/04/30/Git教程及使用经验/index.html","6dee9c064aee65a33bf3b0d9bdd6258c"],["/2017/05/08/第一个-Android-项目/index.html","1634186ab855d27721f7456a16db57e8"],["/2017/06/22/python-实现微信打飞机/index.html","2f4e68a2bbdaf9cdf2e2c76996819fc7"],["/2017/07/23/vim-基础学习/index.html","e48e3b787eec742304609f61d8cbb085"],["/2017/08/01/Hamming-Distance-问题/index.html","e6b1263150c735cf733e600014f389ee"],["/2017/08/01/LeetCode-Array-Partition-I-561/index.html","ffe68cf097ef01e484d4469ff1eef681"],["/2017/08/01/LeetCode-Two-Sum-1/index.html","9010bb67300d9456f08c00320031ab80"],["/2017/08/02/LeetCode-Distribute-Candies-575/index.html","fd32acd3e6d915e8a2f98f9ffc664104"],["/2017/08/02/LeetCode-Keyboard-Row-500/index.html","892c94a6768a9e4f77932e0c4af22edc"],["/2017/08/02/LeetCode-Number-Complement-476/index.html","8048329450cdcc15ed94830141cde405"],["/2017/08/02/LeetCode-Reverse-Words-in-a-String-III-557/index.html","baccaff4ae23c8713dd49fb8d9fe60e9"],["/2017/08/04/LeetCode-Fizz-Buzz-412/index.html","83fd8b4e32a0ece89ff8a775044d1f4d"],["/2017/08/04/LeetCode-Merge-Two-Binary-Trees-617/index.html","1b9f2938364b43d6b4e2ad98d080a475"],["/2017/08/04/LeetCode-Reverse-String-344/index.html","9636f64958f03a6c1ab67f0f82445cc5"],["/2017/08/08/LeetCode-Island-Perimeter-463/index.html","e08ed95879450dcf60cfe8128afad4ab"],["/2017/08/11/kotlin-初步学习/index.html","6e13091d190e4c837894836530f959d5"],["/2017/08/12/Kotlin-扩展函数-属性/index.html","0f8e76eb92e722bb2bd6a80a256a6f98"],["/2017/08/13/LeetCode-Next-Greater-Element-I-496/index.html","07081748257eaf20ec66b7a6f89b3707"],["/2017/08/13/LeetCode-Nim-Game-292/index.html","bc579e047d15b777c6ca229542cf24d0"],["/2017/08/16/LeetCode-Judge-Route-Circle-657/index.html","86e733c25387dc4096eaf8dbc3eec067"],["/2017/08/16/LeetCode-Longest-Uncommon-Subsequence-I-521/index.html","6312876d2c79729953bf75dcf9dcf7a3"],["/2017/08/27/LeetCode-Move-Zeroes-283/index.html","4a2667f37b51d71d1f6e21a6215c887d"],["/2017/08/27/LeetCode-Single-Number-136/index.html","b99f31342c77ec8e25c607f0b903389f"],["/2017/08/28/LeetCode-Reverse-Integer-7/index.html","fd109b3962052f5a3591284b0d47139d"],["/2017/09/01/协同过滤算法/index.html","a4fc12333410c42e2f304fff137ace14"],["/2017/09/10/LeetCode-Add-Digits-258/index.html","61916f0029029c5f3378f9a5c3db1b58"],["/2017/09/10/LeetCode-Find-the-Difference-389/index.html","1681aa3f9390ed43ab24a62e0c917fb0"],["/2017/09/14/LeetCode-Length-of-Last-Word-58/index.html","20968a1c8f6b3900b758aa6a62c41c8d"],["/2017/12/01/LeetCode-Binary-Number-with-Alternating-Bits-693/index.html","23da5163c68f2212d09deb239babe0b1"],["/2017/12/01/LeetCode-Number-of-1-Bits-191/index.html","2a2f38cad64413c115ad5f8ca3fef9c1"],["/2017/12/01/LeetCode-Self-Dividing-Numbers-728/index.html","45ae931a3ea660f826fabcc3516e7a2f"],["/2017/12/02/Kotlin-1-2-平台之间共享代码/index.html","89e3881e4c55f09b8d04bb2bf53a418a"],["/2017/12/23/Kotlin中Collection一些语法总结/index.html","19ab5cbefb2afb029d3cdbe4fccef172"],["/2017/12/28/一次神奇的课设验收/index.html","448a1902298f6d3334636e97f4a7aad6"],["/2018/01/01/2017年终总结/index.html","0d0dface081e0ffab43c7a6372412a81"],["/2018/02/23/RabbitMQ-和-Spring-Boot-的集成/index.html","280679faaccacf87a8289fb2d972943a"],["/2018/04/27/大创项目总结/index.html","f3f5e781d43608acc635d59cc4f80dd8"],["/2018/05/07/vscode-配置c-c-环境/index.html","1e975f66bd1996e820f73a29611b0de7"],["/2018/05/25/Apriori算法/index.html","e0d9e359c1288443bf061d9517a75e61"],["/2019/01/26/Angular-管道/index.html","f2492ccdf564ff65d18a18671c0a25e4"],["/2019/01/26/Spring-Boot-Security-跨域请求配置/index.html","05e86268d96133226da7101c6fa45332"],["/2019/02/02/Ktor-入门/index.html","b5f5cc2007d0c60f49b3b4db985bc669"],["/2019/02/12/黄道十二宫/index.html","2297c797f714f90f5a923447b9be9994"],["/about/index.html","a064ec5a439bd8af3607fef393e76bb4"],["/archives/2016/04/index.html","87cbd5363866accc822bc47c8a12dbd8"],["/archives/2016/05/index.html","0fd18dc5c8a86587bd125c9919e4f9ec"],["/archives/2016/07/index.html","3fcae554c1a8b9d9189cbe0289b1dcc5"],["/archives/2016/08/index.html","162c8e0387f2a2ce5ee9d635116104d7"],["/archives/2016/09/index.html","17f8b776957e335d50198504507fa074"],["/archives/2016/10/index.html","e395608da870ce834b988ca37331c81f"],["/archives/2016/11/index.html","7c688f7a22c479337626b07ac1d95171"],["/archives/2016/12/index.html","664555c8460a5784621c5aca8c8feb6d"],["/archives/2016/index.html","b984df830e82f69c5ec11a0680054eea"],["/archives/2016/page/2/index.html","15a105b5af1220504e9de870ce8e06ab"],["/archives/2016/page/3/index.html","52451c55f313c2824276ce7d5c085b8b"],["/archives/2017/01/index.html","3942b869668e25edadf281f0ad06ff98"],["/archives/2017/02/index.html","b9cd869fdbb5c6df554150aee79a0476"],["/archives/2017/03/index.html","9913384f939dc4aa4ea58e632999c010"],["/archives/2017/04/index.html","4170b12737dad613eccd5c637fdacb02"],["/archives/2017/05/index.html","8337c538611d4b2f5a7033941925e7e5"],["/archives/2017/06/index.html","c1deab36d382a69f53b9e7a5e66b339b"],["/archives/2017/07/index.html","8df740852ad4741ad52faa9fed3b897f"],["/archives/2017/08/index.html","03cf76608d565a975be639ec42b9e78b"],["/archives/2017/08/page/2/index.html","f515ec9fd72ac52de088ca256b31e793"],["/archives/2017/09/index.html","32250d6c20353e27848c03f07f553a8f"],["/archives/2017/12/index.html","d31c7821d2b7a7e2f7f35928dc0822c6"],["/archives/2017/index.html","953914b9cb866c92711302ca4ea2f5eb"],["/archives/2017/page/2/index.html","7088df7a019d6e9e7144665ba6f43814"],["/archives/2017/page/3/index.html","46de16341b8b4693b29585d1b6ecd417"],["/archives/2017/page/4/index.html","2472a16c94d662188f5b79f1e9f41ceb"],["/archives/2017/page/5/index.html","37b5bfec1c828cc9e5f2661ebb3419e3"],["/archives/2018/01/index.html","c274f03d54bf4b19567d49909c564985"],["/archives/2018/02/index.html","f89763c0122b6354bfb14dae2df08e21"],["/archives/2018/04/index.html","6e09011e7c31ef3fef5c178fb9a3d1a4"],["/archives/2018/05/index.html","fcc2c514c1684f44e23a76a073ad6487"],["/archives/2018/index.html","126fb2861c6ca82220bcdf13734b70e9"],["/archives/2019/01/index.html","8d92b34d8ddbe36b169f639e69963cf0"],["/archives/2019/02/index.html","a3aff8749e505218c7db2159c13b3e8a"],["/archives/2019/index.html","7bbd184aea15775ad8f4235d73c9ca94"],["/archives/index.html","b82a91e85fea1b7da340cd73d3c24982"],["/archives/page/2/index.html","54560ed180fc3689d22b3205bcc5e2b2"],["/archives/page/3/index.html","88942275eadda825e85c3a0ffac5a500"],["/archives/page/4/index.html","769874d743fa84b9bb0c6814b6339a19"],["/archives/page/5/index.html","ec8a19149fcc970d639682eed3eac55f"],["/archives/page/6/index.html","43f11fda7326269bfcf2e4ed45bd9d99"],["/archives/page/7/index.html","09a163a5108520138147d1cc408354ea"],["/archives/page/8/index.html","d7a0587ea8113a01eb3a2af6666f1305"],["/categories/index.html","7d37a56d502e36add3d17c08e23926c5"],["/css/main.css","1043fa7df052c5b0fa45435095e5058f"],["/images/AliPayQR.png","3f579739acbea428bbfd6caf401633a9"],["/images/WeChanQR.png","3273049e528d5c7c8d6465feeb6f0f37"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/alired.jpg","e5aae0d59e9c1ab261380536793de248"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.png","a5418ef792411cc48b8a04be1412a806"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/icons/icon-128x128.png","c47d5e504c2200f7a8e49c241d117803"],["/images/icons/icon-144x144.png","332e58a8a22f3c61a89714f92f9cd599"],["/images/icons/icon-152x152.png","75f68482ee40ed7d65cbb7eaa948b122"],["/images/icons/icon-192x192.png","ef1632bde4bbfed422aa81d1a0fec31b"],["/images/icons/icon-384x384.png","c4b609968f279a561d729f0eac182296"],["/images/icons/icon-512x512.png","7f33f6399d6441456c90d56b16a81cb2"],["/images/icons/icon-72x72.png","b37c23b70ad209836f23ccf77a43ec6a"],["/images/icons/icon-96x96.png","c79c31a21bf8646cd6e4002df0c2db89"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","10ed52fde274f351da0d77d20b83c0f3"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","a7af8f923c31f6e47c11afe673aee5fd"],["/js/src/post-details.js","9a53fef7381270bb8c96a611d52ebc04"],["/js/src/schemes/pisces.js","aa788a9a68ff8d352b7b6e3dbb4ace96"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","ecade23d7bb77f013893186d56a92059"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","3da4eef253db4019ff4d8b6bf829b400"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","bb4f88d9fd9264173208a0a51c9483af"],["/lib/font-awesome/css/font-awesome.min.css","b7f16ad3c730d60ba7282b3028bff537"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","0ecfa7b8c9f449f720813c039e76e3ea"],["/page/3/index.html","8d92f5c75ce19bd4749b60a99375fbf8"],["/page/4/index.html","15a74b21d89c728e9cdc053e809bedc9"],["/page/5/index.html","aba78472c4b378cf5d416f5af9d1a61d"],["/page/6/index.html","b772cc3037f29bffbb9363e992ecbcfd"],["/page/7/index.html","31856a122c895cb0d24fa0b49eccbea1"],["/page/8/index.html","4928a7a603cba6b36cc74ad3999d51e4"],["/tags/Angualr/index.html","9a116268adcd73fedb31e34e4eb543e9"],["/tags/Angular/index.html","2fe6214eeae5b803a2fbe6cf0173954e"],["/tags/Array/index.html","5ce11b5790dd055862378780352b9f4b"],["/tags/Bit-Manipulation/index.html","c44df730ec390610945fd5947c822cff"],["/tags/Brainteaser/index.html","070a9cd397f88abb6f8bf576669d2870"],["/tags/GitHub/index.html","7dd85967d2e951ee89ca035f06f34d86"],["/tags/Go/index.html","8c28ec1a3d3596101d0f3ca7b9fe7cfb"],["/tags/Hash-Table/index.html","ff2114f1b3e49c3c40b97ef60d0500e0"],["/tags/LeetCode/index.html","efed1350190da3e6ad360ddbd0259eff"],["/tags/Math/index.html","d0a8f630644bbeba119309e1233f79ad"],["/tags/Maven/index.html","71c9cfcfef6d558cf2c4e15eed16101d"],["/tags/Python/index.html","5b9f37a74ea5561ef28ac98694cb3663"],["/tags/RabbitMQ/index.html","bb14fabdfdce6e503f560e96eec6cabe"],["/tags/SpirngBoot/index.html","4a83292270c37c5bd0f9f5ad643edb1c"],["/tags/Spring-Boot/index.html","60558587449d0c75d7bdaa58a883982d"],["/tags/Spring-Security/index.html","302626df269480e783884f2856d3f03a"],["/tags/Spring/index.html","9b202c98618f21b33f0503ef86b7a726"],["/tags/SpringBoot/index.html","236e11042f1c705681958289223ad459"],["/tags/Stack/index.html","fc15e8cb6b041a415fe9d8ad19801c98"],["/tags/String/index.html","7b572ab684e9bd74b5564a2df9019379"],["/tags/Tree/index.html","907896a13e3405dec895810536a1e811"],["/tags/Vim/index.html","e3090b937e4784e501e4acb7f5bf333a"],["/tags/android/index.html","aa333eef85ce9801b690554220a0a470"],["/tags/index.html","565edba6dfdf3445eb3838de9432ffbb"],["/tags/java/index.html","4fff69d71897a7e89447f4a58b92bad9"],["/tags/java/page/2/index.html","2dc42007ae68518beb990298091b4691"],["/tags/kotlin/index.html","412eddc9cff430b4bdb568b44ea4c238"],["/tags/windows/index.html","4f7c7cdd4db8fce28cd7841c6b6d37ea"],["/tags/加密/index.html","8feeba682e800a1b93c2bc02f6b5641c"],["/tags/博客/index.html","855393095c4fa9d20a00e1b12cc8259e"],["/tags/工具/index.html","468283c1bc07c2c2c69a3be0b34afb42"],["/tags/推荐系统/index.html","5d4f52222dffdbd9adbc70004c177144"],["/tags/数据挖掘/index.html","529500df79e6f664f40da3abb5495243"],["/tags/测评机/index.html","48e615b650050036a54a00dad74143dd"],["/tags/测试/index.html","1f16b7f4c0678293b037ef2d6db6e4d2"],["/tags/生活/index.html","c305e20ebeaea2150ea899459e787dc9"],["/tags/算法/index.html","31cff48719869ba22394c6869cc40cc9"],["/tags/蓝桥杯/index.html","be71e4be7889dca3e1ea86d2191a05eb"],["/tags/译文/index.html","c83edfe07d15d55760c6454c4f0911ad"],["/update/index.html","0c93eb604129b6ee86948273e9025415"]];
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







