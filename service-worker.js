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

var precacheConfig = [["/2016/04/20/我一直都在/index.html","63167ecccc15155520247eed56a5ab21"],["/2016/04/21/清除右键无效项/index.html","c9d2ff2e5769945ea93fe2d5484ee6bf"],["/2016/04/21/第一次参加蓝桥杯感受/index.html","418cc4222cc1642cf8dc2f1e15b90cb7"],["/2016/04/23/LinkList特有的方法/index.html","2e78e9493511994324b8885637b20502"],["/2016/04/27/大学？大学？大学？/index.html","eaef313b4ce4f15141837d6a1254f09a"],["/2016/05/03/GitHub-for-Windows使用教程(一)/index.html","76af7a158d0617257acec99f3cdcd6fb"],["/2016/05/13/GitHub-for-Windows使用教程(二)/index.html","dda3fb4a7398b95e694d7633b3ed7d02"],["/2016/05/15/GitHub-for-windows使用教程（三）/index.html","29f1ad184d72563f24de26d5db6da5f4"],["/2016/05/23/Java集合遍历/index.html","c58ae11fe5483c05e7e4e97cc4a3f213"],["/2016/07/04/Activity启动的两种方式/index.html","ffda3e573fb86a9c3cdf737680dd1836"],["/2016/07/17/如何提高Android虚拟机的运行速度/index.html","ab6895797564c15c45105c13a0c38c25"],["/2016/08/05/FlaotActionButton详解/index.html","d0265fb50bceef05148e516e76523fa0"],["/2016/08/05/底部导航按钮/index.html","b9b9d06223135f39d242d3bf015c641b"],["/2016/08/09/正则表达式/index.html","8719953757b23f270e913f56aec253c8"],["/2016/08/13/Git基本操作/index.html","4dd176f20ad2920753987e7062235d77"],["/2016/08/28/GitHub-for-Windows使用教程（四）/index.html","c9983901d7dcbeb1223f661666f825e3"],["/2016/09/11/String源码剖析/index.html","b82fbce10df63849dac3c3f2956c941c"],["/2016/10/25/StringBuilder源码分析/index.html","541006ed544f65abaa6f8981d7eb5b3f"],["/2016/10/27/MD5加密/index.html","ecfe08dd5ad6a596e89c2ca60602f67a"],["/2016/11/27/ArrayList源码分析/index.html","62ea7477c4ec234534e6c10e2919b0d6"],["/2016/12/30/2016年终总结/index.html","2b12c49bec490f90ca9e7d8f6a56edad"],["/2017/01/10/Maven入门/index.html","8ac338ae421d026673c47174ed4d853a"],["/2017/01/19/Junit单元测试/index.html","919add89f7a87f8f40c59be08ce004ae"],["/2017/02/08/Spring学习-一/index.html","d4c6fb564b27ebe5453b1389b1a2e19b"],["/2017/02/19/Log4j使用/index.html","ca70630e7c44ed881360b5ab694486ba"],["/2017/03/02/Spring学习记录-二/index.html","5f7081552161eb0c619a256300878a2c"],["/2017/04/03/python爬取斗鱼图片/index.html","c075fa8a75fc49efdf81c6642047f317"],["/2017/04/04/计蒜客蓝桥杯模拟赛-5-试题/index.html","f5c399bfdb92c50705d73cf30b1af114"],["/2017/04/15/2017蓝桥杯/index.html","67975697daf15e91a9ea6534c2b14763"],["/2017/04/20/博客一周年/index.html","fe48cc28c4b7e67f3f064bd69f86509b"],["/2017/04/30/Git教程及使用经验/index.html","53b144b0205e35f486ba5168969087b3"],["/2017/05/08/第一个-Android-项目/index.html","0d78ca5c762a44e93eca8db5dc4a8010"],["/2017/06/22/python-实现微信打飞机/index.html","e81a2fec8e04976c454974f894b429ca"],["/2017/07/23/vim-基础学习/index.html","8fd86f78425f798b417577f4a2472db7"],["/2017/08/01/Hamming-Distance-问题/index.html","de2594cbfb97f3bfa76d8414d412f041"],["/2017/08/01/LeetCode-Array-Partition-I-561/index.html","c999e1671599aeec364cf6e8caa5fe62"],["/2017/08/01/LeetCode-Two-Sum-1/index.html","820109f7de63dfdc63ce5c6a45058488"],["/2017/08/02/LeetCode-Distribute-Candies-575/index.html","76842166298971f69692871b4baf59d6"],["/2017/08/02/LeetCode-Keyboard-Row-500/index.html","c76bd8b7c7911ed74e5c0153974211fc"],["/2017/08/02/LeetCode-Number-Complement-476/index.html","2d83efb1d7030095a169b7b57debe7d9"],["/2017/08/02/LeetCode-Reverse-Words-in-a-String-III-557/index.html","ca0f1fae2c19bcdfd4c6afd76cab91c6"],["/2017/08/04/LeetCode-Fizz-Buzz-412/index.html","3890729f0ca589ee1cce4df861acd360"],["/2017/08/04/LeetCode-Merge-Two-Binary-Trees-617/index.html","ed0c461af42accb054cf08e483e79c0b"],["/2017/08/04/LeetCode-Reverse-String-344/index.html","0f6fc7aba1628f8f5839c0c970cf9291"],["/2017/08/08/LeetCode-Island-Perimeter-463/index.html","8564e04e20bcb86b357d882624449cd1"],["/2017/08/11/kotlin-初步学习/index.html","672e8d19a125b064f7aab8735269dcb7"],["/2017/08/12/Kotlin-扩展函数-属性/index.html","6a2163a82f50caae847b46f4fa4f906a"],["/2017/08/13/LeetCode-Next-Greater-Element-I-496/index.html","bf3476e809545d61980cb3da284a1118"],["/2017/08/13/LeetCode-Nim-Game-292/index.html","b43cbadf3c53e7b90704dd618d0b25e1"],["/2017/08/16/LeetCode-Judge-Route-Circle-657/index.html","19bc5be05f9faa8e2280484c324e8808"],["/2017/08/16/LeetCode-Longest-Uncommon-Subsequence-I-521/index.html","5546024a5dcb9994c08d73f52d5e3007"],["/2017/08/27/LeetCode-Move-Zeroes-283/index.html","29d80d52f7c03469e26d2643fca20c7d"],["/2017/08/27/LeetCode-Single-Number-136/index.html","93d6fafc3ea743add00654670a696074"],["/2017/08/28/LeetCode-Reverse-Integer-7/index.html","54a4eebfab66fb7244ef802283ccd82b"],["/2017/09/01/协同过滤算法/index.html","9386657cd91873a99267220183e16866"],["/2017/09/10/LeetCode-Add-Digits-258/index.html","51d29ec0b6aa21dd6e8049551d52e751"],["/2017/09/10/LeetCode-Find-the-Difference-389/index.html","7d2db587e6bdb1f40f021686eee61674"],["/2017/09/14/LeetCode-Length-of-Last-Word-58/index.html","1da956b9e7c03fe18386fb79efbe29ca"],["/2017/12/01/LeetCode-Binary-Number-with-Alternating-Bits-693/index.html","99f4953f33082496b1a47f6762b4aa0c"],["/2017/12/01/LeetCode-Number-of-1-Bits-191/index.html","c22cfadd099007269a95b46e59152988"],["/2017/12/01/LeetCode-Self-Dividing-Numbers-728/index.html","661cad09703d7f003c4f92213ca52798"],["/2017/12/02/Kotlin-1-2-平台之间共享代码/index.html","6872a4c4738108cd8375754fedae9caa"],["/2017/12/23/Kotlin中Collection一些语法总结/index.html","2f3629c122dee3d033deeb3a232ea7c9"],["/2017/12/28/一次神奇的课设验收/index.html","e3a551960fdb6a340bd21fe24b306924"],["/2018/01/01/2017年终总结/index.html","3f7921b353be05d3b56cefc0a5b511bc"],["/2018/02/23/RabbitMQ-和-Spring-Boot-的集成/index.html","772a23119413e7b87e644ddc947939f2"],["/2018/04/27/大创项目总结/index.html","a6aad07cb66c95e55432b2c01c08f3c6"],["/2018/05/07/vscode-配置c-c-环境/index.html","9c8d372592572f39c08f3823b0ed3477"],["/2018/05/25/Apriori算法/index.html","9c1c9434661445d5dc6d3fe91a93326e"],["/2019/01/26/Angular-管道/index.html","a38c3d3205f338aa41cf5eadfaf226c9"],["/2019/01/26/Spring-Boot-Security-跨域请求配置/index.html","8db5e77064f2b8a3a54b652cc5738fba"],["/2019/02/02/Ktor-入门/index.html","f37bdb1cbe546a55f314578428977042"],["/2019/02/12/黄道十二宫/index.html","15b6abec41557a22c24dffa93741f3a8"],["/about/index.html","2129345aa53179cf4d2ecc39e7048dcf"],["/archives/2016/04/index.html","9542738f6c5dd05ed34ce6eefd6f36ce"],["/archives/2016/05/index.html","eea172d0c86fbee43e0a4b9cb0e65da8"],["/archives/2016/07/index.html","fdc0c20b25c2e1fd16698e3259999767"],["/archives/2016/08/index.html","bd4c5c2d31a6d7c095e38052840db6e1"],["/archives/2016/09/index.html","c23ceb8afdd8e586f23e473921f051f4"],["/archives/2016/10/index.html","339c4f61784bb65383faef80d8a42b0c"],["/archives/2016/11/index.html","ddb94b32018724b344871ab1b3366471"],["/archives/2016/12/index.html","b537bb4fc59ba72948b3c91de51a22fd"],["/archives/2016/index.html","3d9f1048dbc24757c3f02b8bd38e8086"],["/archives/2016/page/2/index.html","5013271cdfae050a0e352b3636b6f03f"],["/archives/2016/page/3/index.html","7b705a8bb51f5b769e02c9cf749a1295"],["/archives/2017/01/index.html","a971c620f3ed9deb9b7c498635ad6945"],["/archives/2017/02/index.html","184c113f28f14f9cf7bf56a46aaa3036"],["/archives/2017/03/index.html","dd4a73a99e3469b87143726e6b491cad"],["/archives/2017/04/index.html","b8cf4a63f9472d55fcb980c47439be6d"],["/archives/2017/05/index.html","de2107f1df94b710ed93d7b4ba77e97e"],["/archives/2017/06/index.html","aae2082510bbfdac14867224dabd637b"],["/archives/2017/07/index.html","fcbe06257caf01d19333d0426100a4a8"],["/archives/2017/08/index.html","8277cc9a1b828558738467ba100be848"],["/archives/2017/08/page/2/index.html","d6acc13f414e8c9865571cf8fb298b96"],["/archives/2017/09/index.html","0112fa44014f92157fbf0ad772463eac"],["/archives/2017/12/index.html","c8f3fc6551f92c30fafdf50b32e564d5"],["/archives/2017/index.html","44c43559cf8043b0b04b6ea3994199fb"],["/archives/2017/page/2/index.html","6e9987a84c9a797250d28d9447103120"],["/archives/2017/page/3/index.html","6cb3d5e9e4e60034cc0234b76aacd8df"],["/archives/2017/page/4/index.html","43a17df054b12cd3adfc5a1f5982197d"],["/archives/2017/page/5/index.html","5771bc0b3f63910fe7acb7e7823dfcde"],["/archives/2018/01/index.html","6c9aeae2588619efb24736b1b6633ea5"],["/archives/2018/02/index.html","82803421c58d89e2a3ddfd0fc7c598aa"],["/archives/2018/04/index.html","6843d44ffcd78af231624b69b41d2ca7"],["/archives/2018/05/index.html","96fe59807d3456bf782402124fddaf11"],["/archives/2018/index.html","f4b71fb63bfe51c1a6fa93a6d514b289"],["/archives/2019/01/index.html","66cec87fb3e23c7910b18b8b9ead2067"],["/archives/2019/02/index.html","3b3599493e0a98e35859409c8acea2a9"],["/archives/2019/index.html","0d64f15ae18f0879465f35e90cd6fe51"],["/archives/index.html","29671454276c6cac48b0396c401a61f7"],["/archives/page/2/index.html","6c34961cbe8c2ba1b16da4d06fd57d94"],["/archives/page/3/index.html","7d9818de57c370c5d95c94a8f54e17a8"],["/archives/page/4/index.html","b502c7a4862e15cdb4d586c35dc12926"],["/archives/page/5/index.html","fbc38d4e2e50b8ca5149392dec979273"],["/archives/page/6/index.html","f31a0bccdee9263078e329c1ecfd147f"],["/archives/page/7/index.html","2c1a638e077a6eaf1ee3cf4707aec246"],["/archives/page/8/index.html","4829915eafc13e9cc85e951ba999fd85"],["/categories/index.html","3bf36a1421e2cb5c25a36e67e9eca4b6"],["/css/main.css","00891dcd566e2dc5ed192025f0310b4d"],["/images/AliPayQR.png","3f579739acbea428bbfd6caf401633a9"],["/images/WeChanQR.png","3273049e528d5c7c8d6465feeb6f0f37"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/alired.jpg","e5aae0d59e9c1ab261380536793de248"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.png","a5418ef792411cc48b8a04be1412a806"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/icons/icon-128x128.png","c47d5e504c2200f7a8e49c241d117803"],["/images/icons/icon-144x144.png","332e58a8a22f3c61a89714f92f9cd599"],["/images/icons/icon-152x152.png","75f68482ee40ed7d65cbb7eaa948b122"],["/images/icons/icon-192x192.png","ef1632bde4bbfed422aa81d1a0fec31b"],["/images/icons/icon-384x384.png","c4b609968f279a561d729f0eac182296"],["/images/icons/icon-512x512.png","7f33f6399d6441456c90d56b16a81cb2"],["/images/icons/icon-72x72.png","b37c23b70ad209836f23ccf77a43ec6a"],["/images/icons/icon-96x96.png","c79c31a21bf8646cd6e4002df0c2db89"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","05cec7fc5fdc65f00f1013053d53f351"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","a7af8f923c31f6e47c11afe673aee5fd"],["/js/src/post-details.js","9a53fef7381270bb8c96a611d52ebc04"],["/js/src/schemes/pisces.js","aa788a9a68ff8d352b7b6e3dbb4ace96"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","ecade23d7bb77f013893186d56a92059"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","3da4eef253db4019ff4d8b6bf829b400"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","bb4f88d9fd9264173208a0a51c9483af"],["/lib/font-awesome/css/font-awesome.min.css","b7f16ad3c730d60ba7282b3028bff537"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","55118f840cd53b3cfeeebfd9e511ea9d"],["/page/3/index.html","8ee1bc8ffca5ca2ecb5adbaa209e9489"],["/page/4/index.html","2981c90a5e78b95c26e8fd27289ca02a"],["/page/5/index.html","f59624ad3d70c50b417da7cc21f4bec8"],["/page/6/index.html","373cdca7a41cb83a21a02ba7b62b317c"],["/page/7/index.html","1fadfc821904f7e966816988fde39e08"],["/page/8/index.html","69481946395e6b28cc836758edb4312a"],["/tags/Angualr/index.html","7c89b1814cfbd49fa36d18d02ebcb5d5"],["/tags/Angular/index.html","cf2fd842690e595d1f9ea1771480b517"],["/tags/Array/index.html","54f3452df4f49fba54d3098ca0ef6490"],["/tags/Bit-Manipulation/index.html","9536c4f6bae5ef788572b3018fd5f091"],["/tags/Brainteaser/index.html","67ab1da626657391bb8b002e74a1b8db"],["/tags/GitHub/index.html","6d8f2e6d3fc88f58facede9b064afaa2"],["/tags/Go/index.html","dca75f178652cb69babccf3d90febf34"],["/tags/Hash-Table/index.html","b26ecf92f0b361c27e48ddda2f55e1e1"],["/tags/LeetCode/index.html","71c4729f34e31c7b404acdc97daa66e4"],["/tags/Math/index.html","1722ac3de91b444c6562d55fa2f37519"],["/tags/Maven/index.html","e4460882f5e5ca32efb4be5e1761fc7d"],["/tags/Python/index.html","d0bf3683fcae2ea9ca9451efa3a094a4"],["/tags/RabbitMQ/index.html","879cd41f77e711d35bce4be706d7e092"],["/tags/SpirngBoot/index.html","dfeac20880575209945629b394981cf3"],["/tags/Spring-Boot/index.html","839b3c5013336382fa4eaff063cc8df6"],["/tags/Spring-Security/index.html","1d91db8549f9129148c938bed4ca73fe"],["/tags/Spring/index.html","aac2ea80ec2bb22bdb634e2ac97e32b6"],["/tags/SpringBoot/index.html","e5a9095383c06e05fd3f67d10eaf3ca4"],["/tags/Stack/index.html","b887f0a5add67c402aad078822668df9"],["/tags/String/index.html","486592967e0252157b59929de0d8ede1"],["/tags/Tree/index.html","49d4499c9c49bd16749382dde1ae7aa4"],["/tags/Vim/index.html","f3e51729c0e85eb90677e223a87c9052"],["/tags/android/index.html","019a065177314549ad66b264c10fca7b"],["/tags/index.html","d1f73a8c64cfc9273d77b542b755eeca"],["/tags/java/index.html","46905bc328610bb4b755551ab1d68f64"],["/tags/java/page/2/index.html","592ec926a83910135b6c6e0fb9729f0b"],["/tags/kotlin/index.html","99504e260ebec11e601c793328493484"],["/tags/windows/index.html","369b9654f68ecabd0f006aa2491e17c7"],["/tags/加密/index.html","631b73fd8a86cbcabf954045baad6661"],["/tags/博客/index.html","a59361402f25620ef4bda72c13bc1d30"],["/tags/工具/index.html","edd46d3c36f5d5815c703bda03e811f7"],["/tags/推荐系统/index.html","d911ded8e04ff91c07ceb46e4a454faa"],["/tags/数据挖掘/index.html","e2b3f2e35cfe63567808c6575e7f997f"],["/tags/测评机/index.html","78b832ccb5e0327f76869f3df67247ae"],["/tags/测试/index.html","802179133797fd1d8c7102c5b62a3670"],["/tags/生活/index.html","6336d3539de09f65bf777237e8e3e84a"],["/tags/算法/index.html","30b9fe2859119be2ad88311f7c0c05f6"],["/tags/蓝桥杯/index.html","1681d496771fd39a24c0641f6eda1978"],["/tags/译文/index.html","32fc0f61eb59eb80d0388d33db7b7792"],["/update/index.html","ac01f2c46c23267c07a6a53ef0cd35eb"]];
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







