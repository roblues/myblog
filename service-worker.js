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

var precacheConfig = [["/2016/04/20/我一直都在/index.html","850a8b25273935bdd73782dabeeff827"],["/2016/04/21/清除右键无效项/index.html","b5dc79f11735ff08632aa209a2e4e9a0"],["/2016/04/21/第一次参加蓝桥杯感受/index.html","3ffe0d144c61d3c583478750025afde2"],["/2016/04/23/LinkList特有的方法/index.html","48963e5123e7235b5e8df6630f4c5b5e"],["/2016/04/27/大学？大学？大学？/index.html","275d4a56258e9bdfe30b615755b08cf6"],["/2016/05/03/GitHub-for-Windows使用教程(一)/index.html","3a04fb002e9233192266f8be9aaabe6a"],["/2016/05/13/GitHub-for-Windows使用教程(二)/index.html","ccaefd6b48254c4a2d196d3f6404247e"],["/2016/05/15/GitHub-for-windows使用教程（三）/index.html","f4ac1b9e4fc971380b9436f3f7c94a1f"],["/2016/05/23/Java集合遍历/index.html","24a951886f03b9038e0c760d2791e134"],["/2016/07/04/Activity启动的两种方式/index.html","db7925f3693873fab2e233359f283e27"],["/2016/07/17/如何提高Android虚拟机的运行速度/index.html","09f1e02c76f855dda28115258ed27e54"],["/2016/08/05/FlaotActionButton详解/index.html","82be760d7dabf97d3146ab9c81a96a7c"],["/2016/08/05/底部导航按钮/index.html","e654bfed87641853e3e06033bac16f71"],["/2016/08/09/正则表达式/index.html","c3f56a456792e05a497c572c0bacd901"],["/2016/08/13/Git基本操作/index.html","2bb3080c5b86960f987056257e413f98"],["/2016/08/28/GitHub-for-Windows使用教程（四）/index.html","d23825ddd2ae3c8a904edc82dc3f173e"],["/2016/09/11/String源码剖析/index.html","7cf088c066ca18c4aec65cb228fa3cdb"],["/2016/10/25/StringBuilder源码分析/index.html","8a11ce3994d8dbfaf01ea39273b4e5a1"],["/2016/10/27/MD5加密/index.html","25231b643f2df765e6dd0171f8f50e57"],["/2016/11/27/ArrayList源码分析/index.html","d81f15c6f2cd1d926319307ca146ae73"],["/2016/12/30/2016年终总结/index.html","e3b95a65475e8de7ae95748583eda305"],["/2017/01/10/Maven入门/index.html","cc4a329238b28e70d60b5ff40a9de6e5"],["/2017/01/19/Junit单元测试/index.html","62db11eac930f89757d6650aa08fb5e7"],["/2017/02/08/Spring学习-一/index.html","e547cf16787c63b56d2a78f097aded6d"],["/2017/02/19/Log4j使用/index.html","9210b52995fc629feb4d90787b1c48fa"],["/2017/03/02/Spring学习记录-二/index.html","e389f84523b4ca67dec9c2885cc7ee67"],["/2017/04/03/python爬取斗鱼图片/index.html","8f5183efeab1aa4b0bc0ea1465fd5c98"],["/2017/04/04/计蒜客蓝桥杯模拟赛-5-试题/index.html","2885d16b5b201fdb69f7a0e6b56737e0"],["/2017/04/15/2017蓝桥杯/index.html","aa27c5024505685d1759a3ff3d7b5735"],["/2017/04/20/博客一周年/index.html","525751fe32f71bff6a173c5e96e5b3a4"],["/2017/04/30/Git教程及使用经验/index.html","23f7722e5762edc48a1e17ee0baac116"],["/2017/05/08/第一个-Android-项目/index.html","d73ae3c612c142ab9a10804f85948ce8"],["/2017/06/22/python-实现微信打飞机/index.html","f973fede5f2119a8fbb3e046e3a899d0"],["/2017/07/23/vim-基础学习/index.html","905eb4d4fab8bbb4599bc990be9edd2b"],["/2017/08/01/Hamming-Distance-问题/index.html","aa3de004ca1b42bb4a6537d7f8d8e560"],["/2017/08/01/LeetCode-Array-Partition-I-561/index.html","19073e51e27590eb64e39dadc4802203"],["/2017/08/01/LeetCode-Two-Sum-1/index.html","35c51b6088cb7f2f0b7a64edc1ea90c1"],["/2017/08/02/LeetCode-Distribute-Candies-575/index.html","49a91f6898e2957229713e5412c1be5c"],["/2017/08/02/LeetCode-Keyboard-Row-500/index.html","f34e9942b0f1dddc4ca82dfcffeebe3e"],["/2017/08/02/LeetCode-Number-Complement-476/index.html","b9c4c8f7303dbb6b2078ba87644030bd"],["/2017/08/02/LeetCode-Reverse-Words-in-a-String-III-557/index.html","0b7dc6d171bcfd3e7d47eda3eb3a909c"],["/2017/08/04/LeetCode-Fizz-Buzz-412/index.html","86619643e6bc40d8788b49238a64a2e0"],["/2017/08/04/LeetCode-Merge-Two-Binary-Trees-617/index.html","0304eb7a4a7355b3b51966d46a5b9339"],["/2017/08/04/LeetCode-Reverse-String-344/index.html","a0f4d073a3b3459f614858ffddb1a646"],["/2017/08/08/LeetCode-Island-Perimeter-463/index.html","35f590570d4cbe4ac5f23d431f1d5b9c"],["/2017/08/11/kotlin-初步学习/index.html","26719553bb4adbb62fc009eea0012fad"],["/2017/08/12/Kotlin-扩展函数-属性/index.html","469eb977ff4a350720955e432e899111"],["/2017/08/13/LeetCode-Next-Greater-Element-I-496/index.html","4cf6bb04decd64e018a1ad256b43796b"],["/2017/08/13/LeetCode-Nim-Game-292/index.html","a1025299254917b8b2dbba731aa86f27"],["/2017/08/16/LeetCode-Judge-Route-Circle-657/index.html","2aa70e9aaf38f4b857bf4278c2fc255d"],["/2017/08/16/LeetCode-Longest-Uncommon-Subsequence-I-521/index.html","cc74e7ec52f03ec168643b98b58f5622"],["/2017/08/27/LeetCode-Move-Zeroes-283/index.html","ef7284f2ddcf194d420b745011d478b0"],["/2017/08/27/LeetCode-Single-Number-136/index.html","2ab2ac760761f6786b7db4f14c8017f1"],["/2017/08/28/LeetCode-Reverse-Integer-7/index.html","c1f858d2804da63ed6eae6e866d89e5b"],["/2017/09/01/协同过滤算法/index.html","0dd389207a9ae1d9b151d66f23c949f5"],["/2017/09/10/LeetCode-Add-Digits-258/index.html","cd3105707070e7f40e4bf15760deb0ae"],["/2017/09/10/LeetCode-Find-the-Difference-389/index.html","9d35e6e7025f7d5bb8cd927e75e68436"],["/2017/09/14/LeetCode-Length-of-Last-Word-58/index.html","d95f658f1fcbfcd9299cfce3c1639894"],["/2017/12/01/LeetCode-Binary-Number-with-Alternating-Bits-693/index.html","18169e6c893c1ef7130a292578b2a28b"],["/2017/12/01/LeetCode-Number-of-1-Bits-191/index.html","40f5be2e6f57091326c8ffb87e89596f"],["/2017/12/01/LeetCode-Self-Dividing-Numbers-728/index.html","4c27fa1ef29f116499e86ecfac6b35a3"],["/2017/12/02/Kotlin-1-2-平台之间共享代码/index.html","50b4a602de9f424e1ad13b07a8c7c73c"],["/2017/12/23/Kotlin中Collection一些语法总结/index.html","77ff88f9d80a73eff9845cfe87a19367"],["/2017/12/28/一次神奇的课设验收/index.html","ece5a7ea5966563d831d29c9f8b95a2d"],["/2018/01/01/2017年终总结/index.html","cbf52835be99dbc7771901dd1aca963e"],["/2018/02/23/RabbitMQ-和-Spring-Boot-的集成/index.html","cf63be14c83919c1a617728c8ccbafb5"],["/2018/04/27/大创项目总结/index.html","1069718d272f2e5c3008999d42744437"],["/2018/05/07/vscode-配置c-c-环境/index.html","1eea7885e9ac48bfdd13b0aae7b2acaf"],["/2018/05/25/Apriori算法/index.html","bf8063a73cee284f19376668e82bbc52"],["/2019/01/26/Angular-管道/index.html","b67fa75553b61e41f57e43dbb8298973"],["/2019/01/26/Spring-Boot-Security-跨域请求配置/index.html","317fa8270d5f0348d19cbd20acb81038"],["/2019/02/02/Ktor-入门/index.html","f17d3d69fe209912f18ee328ecae59f9"],["/about/index.html","e98c01913096668b0e58a13bfc52be54"],["/archives/2016/04/index.html","9866dee0342371f5df9e23eb0a7e3b26"],["/archives/2016/05/index.html","bc07d0bce6fbbf3f4160e6d4773c8aa1"],["/archives/2016/07/index.html","b0dfe2b217c5382d50b8052700280384"],["/archives/2016/08/index.html","7c9b1dda93647a6a27c73644dcae4995"],["/archives/2016/09/index.html","8de790861ac42b809fae6850f1c2b72e"],["/archives/2016/10/index.html","c911275f89f5dfb614fc04e4b99e3ecd"],["/archives/2016/11/index.html","ce3568151c7d775d88b8e0e45101eab7"],["/archives/2016/12/index.html","2aa7aecca142791a4cdc9097e222d315"],["/archives/2016/index.html","da93da0a5d663a214b25310ffcedb265"],["/archives/2016/page/2/index.html","7c0e414bf8d17a5ce9358e32153d483a"],["/archives/2016/page/3/index.html","5817ff32400762549be87added1e94e8"],["/archives/2017/01/index.html","669ea4c53940ed9b4112d04e3c9c3993"],["/archives/2017/02/index.html","33bd8916b25714235b29691a9f07ceaf"],["/archives/2017/03/index.html","61cafb821dcc1ec727a7ed34f2ae38fb"],["/archives/2017/04/index.html","0de635184210db9d8fcccd33f68b6f58"],["/archives/2017/05/index.html","0aa4bb944b6c578951c1f554af2ebc34"],["/archives/2017/06/index.html","506d581a734855463fc84c441329fa15"],["/archives/2017/07/index.html","d58df4a4c347e3fcef2cf3d96731a7f0"],["/archives/2017/08/index.html","9b8984ab0c609a209545fcdd6cd5103f"],["/archives/2017/08/page/2/index.html","7b64d7d5fd60e7ab03c53ce0d9bb17bc"],["/archives/2017/09/index.html","9bc87e95d4fb07abec3479e7bb4e9539"],["/archives/2017/12/index.html","fec477bcd680b98acd8391c9fbe28306"],["/archives/2017/index.html","cda1b2271dbba39102584af8e9743f59"],["/archives/2017/page/2/index.html","bb783c21ee6af2ad3e784c02b32a7b7f"],["/archives/2017/page/3/index.html","64bd0980fad2a6b112b6e008395c225b"],["/archives/2017/page/4/index.html","f473899316434831a8a25dd1adb3c861"],["/archives/2017/page/5/index.html","98155cc264dd97ee15125a93a491df2f"],["/archives/2018/01/index.html","76c13aa66a00b722c54200bacfb84878"],["/archives/2018/02/index.html","7ef21b49ba264412066ca22fddb20f74"],["/archives/2018/04/index.html","8c894baca48e1d99832804ffb0e147c4"],["/archives/2018/05/index.html","a6fa2dc3cd7179f24f97e4d2a41cf306"],["/archives/2018/index.html","2279ea25c8ab41418e35fee6f60d2e1f"],["/archives/2019/01/index.html","4ec82db8b16551feec2467e147d4b5c6"],["/archives/2019/02/index.html","7277c8f9b0369c99af846117d6c92099"],["/archives/2019/index.html","ee76626699846516863f8260bfb04241"],["/archives/index.html","2eaac608c623b6e7f4bd4bc466db7832"],["/archives/page/2/index.html","5dc170efd1a9f68c8e280fc98f7dc45a"],["/archives/page/3/index.html","1dc388b042b297d2c76011885a2b32f9"],["/archives/page/4/index.html","8528cb4b1111a9b39cdc05b89175c3d6"],["/archives/page/5/index.html","8acc829c8597899dfdb97382266888f7"],["/archives/page/6/index.html","1f2aab1414c23282583e7eb34de34c6c"],["/archives/page/7/index.html","d56cb594dc8744a8eb393b46808e3a5f"],["/archives/page/8/index.html","6772923abb613ae6ab44ccecf3782473"],["/categories/index.html","a0fdee23e9c4cc8868e4944f1d3ce4f9"],["/css/main.css","d0abcb1b1eb3bd06c94936f7673d6b47"],["/images/AliPayQR.png","3f579739acbea428bbfd6caf401633a9"],["/images/WeChanQR.png","3273049e528d5c7c8d6465feeb6f0f37"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/alired.jpg","e5aae0d59e9c1ab261380536793de248"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.png","a5418ef792411cc48b8a04be1412a806"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/icons/icon-128x128.png","c47d5e504c2200f7a8e49c241d117803"],["/images/icons/icon-144x144.png","332e58a8a22f3c61a89714f92f9cd599"],["/images/icons/icon-152x152.png","75f68482ee40ed7d65cbb7eaa948b122"],["/images/icons/icon-192x192.png","ef1632bde4bbfed422aa81d1a0fec31b"],["/images/icons/icon-384x384.png","c4b609968f279a561d729f0eac182296"],["/images/icons/icon-512x512.png","7f33f6399d6441456c90d56b16a81cb2"],["/images/icons/icon-72x72.png","b37c23b70ad209836f23ccf77a43ec6a"],["/images/icons/icon-96x96.png","c79c31a21bf8646cd6e4002df0c2db89"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","d6dfe5de6192278558cd59986c2cfbbb"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","a7af8f923c31f6e47c11afe673aee5fd"],["/js/src/post-details.js","9a53fef7381270bb8c96a611d52ebc04"],["/js/src/schemes/pisces.js","aa788a9a68ff8d352b7b6e3dbb4ace96"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","ecade23d7bb77f013893186d56a92059"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","3da4eef253db4019ff4d8b6bf829b400"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","bb4f88d9fd9264173208a0a51c9483af"],["/lib/font-awesome/css/font-awesome.min.css","b7f16ad3c730d60ba7282b3028bff537"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","d9ad56532663e32f7244dfd6b8e5d232"],["/page/3/index.html","3cd88066717c67288276199624de0f30"],["/page/4/index.html","f57c0a104372f9cc1b219da83e1c3c18"],["/page/5/index.html","d2fa794f943ea0d5ca814f37a72784b0"],["/page/6/index.html","78e4bd2ea3a1a495122d39d2c0a274cf"],["/page/7/index.html","cfc82e33bc7eb7a5d9bfe0c666a9bd88"],["/page/8/index.html","a6aa9f70ab93525835e807ca044657ab"],["/tags/Angular/index.html","5ef0da68f526df1f916cf9299c06551e"],["/tags/Array/index.html","5d15493d329c68824dbcea532dd5322f"],["/tags/Bit-Manipulation/index.html","0901f3c554d26d222e4d56f6415ba2d1"],["/tags/Brainteaser/index.html","23b51b145bf6141cfe57ae0d875ecd70"],["/tags/GitHub/index.html","946edb2874536b08296bc7c41bf8e809"],["/tags/Hash-Table/index.html","f2da750099bc75871b8a03414f58ec57"],["/tags/LeetCode/index.html","e0023a11b87d5f75f1b7797fbddd8a8a"],["/tags/Math/index.html","16db7d3c6214eb624dc5430984fe74e8"],["/tags/Maven/index.html","794fe521bd937db6e1df13d1ba1ada05"],["/tags/Python/index.html","ac9835020c78d1975c2544b6604a3601"],["/tags/RabbitMQ/index.html","7f7301343f64ed95531e6002908fa5d7"],["/tags/Spring-Boot/index.html","fdc94be3c52a524b7cf3a1fb5d11adab"],["/tags/Spring-Security/index.html","efe0918fa3aa0e04654dd1b1ae56e9be"],["/tags/Spring/index.html","a2397a11b57963a0a7db45d7cb28f639"],["/tags/SpringBoot/index.html","6949c6295096f04b935f5bcaba35c381"],["/tags/Stack/index.html","4ab2edc49905387bbf14b432ccd89810"],["/tags/String/index.html","f04d6d1eb2058c09ad14dabcd45ea5ce"],["/tags/Tree/index.html","b164773e60dab557d77a21e9fdec5fdc"],["/tags/Vim/index.html","e0ae1162f366fd0313f4b6f87e28341c"],["/tags/android/index.html","9d2ffc6bfc0d3f68b285ab45fc0af86a"],["/tags/index.html","ccca8024246c5c6477832da8b3dd47a6"],["/tags/java/index.html","0d199a0f851f47f7f427ced1f3103a61"],["/tags/java/page/2/index.html","1a0d8313754920435613b3587a7e4f40"],["/tags/kotlin/index.html","babfb5b58cbac3be30f54dc8b327458a"],["/tags/windows/index.html","29b378120b2a0523287f176b92785866"],["/tags/加密/index.html","548f336e1b43bee637a3939d97df6f7e"],["/tags/博客/index.html","58cb54133495cd7cf5b00ff5bbcf10e9"],["/tags/工具/index.html","fc4706029ad4c11fc99f3531cdd6fb0a"],["/tags/推荐系统/index.html","17426ef0d5926084754cefa0af8186ec"],["/tags/数据挖掘/index.html","8da107a79268e98c57dc4eb2a008876a"],["/tags/测试/index.html","c6cd748c0e7519447ea4071153b117a7"],["/tags/生活/index.html","285c58bf46a05745d8902a86db5c09e6"],["/tags/算法/index.html","fa8d1cb921e4dcac24a7ee45d58ce830"],["/tags/蓝桥杯/index.html","c2fbabf107adc2b6330c504f03edc1cc"],["/tags/译文/index.html","9260b4ca2b5825cd93da9711c803f6e0"],["/update/index.html","85f41b9f8a5fd3e4dd8a0c426f476177"]];
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







