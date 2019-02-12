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

var precacheConfig = [["/2016/04/20/我一直都在/index.html","1c75c9c57b2e76fc2d2b712c6d7c45d1"],["/2016/04/21/清除右键无效项/index.html","da63e4cb43c7a30baabff59908f1a757"],["/2016/04/21/第一次参加蓝桥杯感受/index.html","8203b7ff728218daaf0f7c73cca0abeb"],["/2016/04/23/LinkList特有的方法/index.html","592b8f832f0c5e9a5e202b3887c48622"],["/2016/04/27/大学？大学？大学？/index.html","300ac87db82a1b8be0558e693cae2a27"],["/2016/05/03/GitHub-for-Windows使用教程(一)/index.html","b27d2c0dc75ce5d1a6a7f2ca48218a66"],["/2016/05/13/GitHub-for-Windows使用教程(二)/index.html","55661f9ef8897e5b9ed18671abc78700"],["/2016/05/15/GitHub-for-windows使用教程（三）/index.html","fbf2950d40a89c1f814aa3589ef5e987"],["/2016/05/23/Java集合遍历/index.html","95382838b5525dc9e7f769d05df0bced"],["/2016/07/04/Activity启动的两种方式/index.html","f52106605174c88f0f11c0b37fc0e4b8"],["/2016/07/17/如何提高Android虚拟机的运行速度/index.html","d1febca4c509d8bca485ca681530f351"],["/2016/08/05/FlaotActionButton详解/index.html","eddd150c8094e399b03050c13c110300"],["/2016/08/05/底部导航按钮/index.html","53d7dc389e7f0692bdc20e19cb5ef9a8"],["/2016/08/09/正则表达式/index.html","3ff2c7ca3f4ab96d4e754c954e881022"],["/2016/08/13/Git基本操作/index.html","7e933859da70097a25d07fd37a193d79"],["/2016/08/28/GitHub-for-Windows使用教程（四）/index.html","c5154cfecb1190cdf1aaf61660b7e978"],["/2016/09/11/String源码剖析/index.html","057fa1458b7e839470261e77a2f49ead"],["/2016/10/25/StringBuilder源码分析/index.html","4f96fb1546f08b85602078f8aee76be3"],["/2016/10/27/MD5加密/index.html","e3501df563cf3588e1236b8a27b0a869"],["/2016/11/27/ArrayList源码分析/index.html","5c8d034025d6347b305d6130dd559882"],["/2016/12/30/2016年终总结/index.html","2395b104c346691c4d6a2295ee30b01a"],["/2017/01/10/Maven入门/index.html","83feaf610bddc8ee52fbbf7fd0686262"],["/2017/01/19/Junit单元测试/index.html","30fad05048a246d5dff0f7e9dbe1f613"],["/2017/02/08/Spring学习-一/index.html","f15151ac6eba0e68d57d91e9395bc7bb"],["/2017/02/19/Log4j使用/index.html","993881a7c662aaeedcf51783478c6544"],["/2017/03/02/Spring学习记录-二/index.html","61ea752acd04a24e0f942dd53e8bb855"],["/2017/04/03/python爬取斗鱼图片/index.html","aff87c72f510d0cf07030fa160b1438f"],["/2017/04/04/计蒜客蓝桥杯模拟赛-5-试题/index.html","ea19828b1ba1279af9b1a60e59fd8dce"],["/2017/04/15/2017蓝桥杯/index.html","c57aac54c8fb59f4df4366d353106340"],["/2017/04/20/博客一周年/index.html","82f2b22b440cc7ae9f1de69e6885d095"],["/2017/04/30/Git教程及使用经验/index.html","588b0f49da851742e23793a8654b6069"],["/2017/05/08/第一个-Android-项目/index.html","ce87dee961e738d2d5a60e012937c3fd"],["/2017/06/22/python-实现微信打飞机/index.html","f27a6105b3d24228c8c8d9c372e31980"],["/2017/07/23/vim-基础学习/index.html","eb09eb95c876f11fc1a55f27c7fa12a5"],["/2017/08/01/Hamming-Distance-问题/index.html","86b00ffb26d43658a8f9e235d1db2db3"],["/2017/08/01/LeetCode-Array-Partition-I-561/index.html","5529e43308a4d9ca8d19aded828bd218"],["/2017/08/01/LeetCode-Two-Sum-1/index.html","c2bb8b40c4fd715e35fbe285a6aba269"],["/2017/08/02/LeetCode-Distribute-Candies-575/index.html","dd2979c64122f7b796222b7ed741e0d7"],["/2017/08/02/LeetCode-Keyboard-Row-500/index.html","5ef4b0aa4d9630d7ef99bca7c82555f8"],["/2017/08/02/LeetCode-Number-Complement-476/index.html","714ce1c2cb8213c571e8099d49d43ab9"],["/2017/08/02/LeetCode-Reverse-Words-in-a-String-III-557/index.html","f3485a3de7ea04617c8952444571571e"],["/2017/08/04/LeetCode-Fizz-Buzz-412/index.html","bbf41aa824dbce831a9ddd8c1fb8e563"],["/2017/08/04/LeetCode-Merge-Two-Binary-Trees-617/index.html","2475b6b9edcae3222bdc87f29819f01d"],["/2017/08/04/LeetCode-Reverse-String-344/index.html","92b4e59b4eb10e8316c9d91c8f1efdce"],["/2017/08/08/LeetCode-Island-Perimeter-463/index.html","ef25150457d0d9933f93348975530786"],["/2017/08/11/kotlin-初步学习/index.html","593d56db1dc48092fda541379d32bf7c"],["/2017/08/12/Kotlin-扩展函数-属性/index.html","44f67a99ea3e2c60a3d634b7cf92620e"],["/2017/08/13/LeetCode-Next-Greater-Element-I-496/index.html","f5da171c562776ba21d0b155ae13c194"],["/2017/08/13/LeetCode-Nim-Game-292/index.html","496983549981dd7d5f855628fcd210f6"],["/2017/08/16/LeetCode-Judge-Route-Circle-657/index.html","72e0ed3a4758a320109330a89266c62c"],["/2017/08/16/LeetCode-Longest-Uncommon-Subsequence-I-521/index.html","b5ccbef968b4358255c000c775f7a4aa"],["/2017/08/27/LeetCode-Move-Zeroes-283/index.html","7c2652130eece148571452d26cc2d963"],["/2017/08/27/LeetCode-Single-Number-136/index.html","2d69d978512338cb3b9d3ee9386c8d09"],["/2017/08/28/LeetCode-Reverse-Integer-7/index.html","9b911ecf89822a996db5b017d41aa49a"],["/2017/09/01/协同过滤算法/index.html","8d90ded5c1c6ad4596da8b1aa531d218"],["/2017/09/10/LeetCode-Add-Digits-258/index.html","91648682e990d0c6da65a3f46d943f10"],["/2017/09/10/LeetCode-Find-the-Difference-389/index.html","b4257b2a752d4b1337f940cf7de0a37c"],["/2017/09/14/LeetCode-Length-of-Last-Word-58/index.html","d4ac5bb7bb88fd833734c5993810a664"],["/2017/12/01/LeetCode-Binary-Number-with-Alternating-Bits-693/index.html","60a2d288994605bafa6b0f08722a094b"],["/2017/12/01/LeetCode-Number-of-1-Bits-191/index.html","d8f8613210a3ae1fd2a2a8b0aea9fcd2"],["/2017/12/01/LeetCode-Self-Dividing-Numbers-728/index.html","db8638cae0522d35ab7cb9e2a3250506"],["/2017/12/02/Kotlin-1-2-平台之间共享代码/index.html","6fd643c50a47986c5f11b581f22ddbd5"],["/2017/12/23/Kotlin中Collection一些语法总结/index.html","446955f9965dd5b5ba222bb1d452f906"],["/2017/12/28/一次神奇的课设验收/index.html","165e3ec6c9f6fa8f13bd1908446b4bb0"],["/2018/01/01/2017年终总结/index.html","d962db60337b2dd2c68bbfc9c6238a43"],["/2018/02/23/RabbitMQ-和-Spring-Boot-的集成/index.html","ab705c6123f6ea789f947890dc33cbd5"],["/2018/04/27/大创项目总结/index.html","3a44f4022ed7533575ea87bf48765e7a"],["/2018/05/07/vscode-配置c-c-环境/index.html","ec4ee40837c6c188f78f1dd46b37b7ee"],["/2018/05/25/Apriori算法/index.html","5b0616e92945f728fa3e0cd73a04fceb"],["/2019/01/26/Angular-管道/index.html","90778a38cb18f0314cf61465a7ddfb7c"],["/2019/01/26/Spring-Boot-Security-跨域请求配置/index.html","ede46f377ae021a70e9d369c2bb52e10"],["/2019/02/02/Ktor-入门/index.html","a616747474d33c87624282b855d93fbb"],["/about/index.html","9e7f1e5f7aa6b89b3cee95046705afff"],["/archives/2016/04/index.html","4d20861ffee4583bc219b03cbaafafcb"],["/archives/2016/05/index.html","969b75c3a2df903effe04a6a5c10bab8"],["/archives/2016/07/index.html","fa9c1fc3b2b3983cdb8b16ad908a22d9"],["/archives/2016/08/index.html","e9875991aaa16d98eca9defca658d564"],["/archives/2016/09/index.html","3d21ffa45dbd5818f99c3bea0787872d"],["/archives/2016/10/index.html","d73baef1c76a2c07b040381e8a2b7447"],["/archives/2016/11/index.html","e531840448720779286ac8ab9e0e39ef"],["/archives/2016/12/index.html","13e7f4dc4484c9c68ef663b8c9bf1c3d"],["/archives/2016/index.html","4cee316e58dc6ee6f3754ee65a046aff"],["/archives/2016/page/2/index.html","9c4cecbc6c98a08d1e0da1bf045c63f6"],["/archives/2016/page/3/index.html","e29643582a26018e8f25e7595c5bf499"],["/archives/2017/01/index.html","6d6e7b7d381c1d1a83927cbb5ba06c14"],["/archives/2017/02/index.html","824992833179648a38ba96f7abb60c48"],["/archives/2017/03/index.html","a5dd4214a244129f6f1040d15a9cae09"],["/archives/2017/04/index.html","cba76dae42ab787f873837146412e40a"],["/archives/2017/05/index.html","9accd45c20879b14df87a509e3bf69ee"],["/archives/2017/06/index.html","1aadb1fa68bed79e72baeadfd0f509f6"],["/archives/2017/07/index.html","b0578508ced8337b3b728958fa8589d4"],["/archives/2017/08/index.html","c9912c8ecedd464adb00db8edb35098d"],["/archives/2017/08/page/2/index.html","84e548bed35097223ae8d7fad4fbec2f"],["/archives/2017/09/index.html","1430a23d67a6af19ca6c1d6a82783ab0"],["/archives/2017/12/index.html","8011d8410163be275e459269008defb5"],["/archives/2017/index.html","d6b52f7a93060eaa943ba2afd195d7fc"],["/archives/2017/page/2/index.html","855c2af355ba0e461ad31fa85931dc04"],["/archives/2017/page/3/index.html","3c2e74fb6b2755a131b8d17bdfbd1c6d"],["/archives/2017/page/4/index.html","6f4081752de86e52d060a8f01cbf5d8f"],["/archives/2017/page/5/index.html","f4f11552b3bdb991cb2bdc77f699c695"],["/archives/2018/01/index.html","3f716cad6f0bf4b124090f48766d77a8"],["/archives/2018/02/index.html","dede09e2f858df62ac260f987e1c4a8b"],["/archives/2018/04/index.html","c4e122488ee684f8f24275019f457d11"],["/archives/2018/05/index.html","d68c0ddcec3b137c061103c0a4b7a102"],["/archives/2018/index.html","4bac2656574a17462ec07c24633b4f61"],["/archives/2019/01/index.html","1bd60e1a4e4a4f5ac49fe2c9791dbb81"],["/archives/2019/02/index.html","e69f2180c073bbc00e29b9fbf8b4f5b4"],["/archives/2019/index.html","8eacf96e02bdd791d177a8a99465c0af"],["/archives/index.html","b02ec0c9ee64594d771820b013e12100"],["/archives/page/2/index.html","4da7a743a30504f5ac6789aa1eb79d81"],["/archives/page/3/index.html","cbce033aba82bfb525104c2030aac83e"],["/archives/page/4/index.html","4a41e314e7db38c08aec13e78c1f8766"],["/archives/page/5/index.html","907d316d613bffbe0994ec7fb37853a3"],["/archives/page/6/index.html","23a4c2a15b586147544aa936de84c11e"],["/archives/page/7/index.html","e304395ff8af3efc26dc02146e25e6c2"],["/archives/page/8/index.html","bf5ec9cbb2d46f00bb3ffd0b7cd952c0"],["/categories/index.html","b27757e6037aa727d6ade294aa2fbe4d"],["/css/main.css","94252b44d5c8af54cb86efe69d5bb4a3"],["/images/AliPayQR.png","3f579739acbea428bbfd6caf401633a9"],["/images/WeChanQR.png","3273049e528d5c7c8d6465feeb6f0f37"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/alired.jpg","e5aae0d59e9c1ab261380536793de248"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.png","a5418ef792411cc48b8a04be1412a806"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/icons/icon-128x128.png","c47d5e504c2200f7a8e49c241d117803"],["/images/icons/icon-144x144.png","332e58a8a22f3c61a89714f92f9cd599"],["/images/icons/icon-152x152.png","75f68482ee40ed7d65cbb7eaa948b122"],["/images/icons/icon-192x192.png","ef1632bde4bbfed422aa81d1a0fec31b"],["/images/icons/icon-384x384.png","c4b609968f279a561d729f0eac182296"],["/images/icons/icon-512x512.png","7f33f6399d6441456c90d56b16a81cb2"],["/images/icons/icon-72x72.png","b37c23b70ad209836f23ccf77a43ec6a"],["/images/icons/icon-96x96.png","c79c31a21bf8646cd6e4002df0c2db89"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","94e86e8d1882d732ebe314f6ba0244e5"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","a7af8f923c31f6e47c11afe673aee5fd"],["/js/src/post-details.js","9a53fef7381270bb8c96a611d52ebc04"],["/js/src/schemes/pisces.js","aa788a9a68ff8d352b7b6e3dbb4ace96"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","ecade23d7bb77f013893186d56a92059"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","3da4eef253db4019ff4d8b6bf829b400"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","bb4f88d9fd9264173208a0a51c9483af"],["/lib/font-awesome/css/font-awesome.min.css","b7f16ad3c730d60ba7282b3028bff537"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","82305a203bde2e611f5d796730ae104b"],["/page/3/index.html","a1c8739aeb5662e19cc3c7113e91db5d"],["/page/4/index.html","c914050cf095c59be9589a19c9b10306"],["/page/5/index.html","16478c25e6eb77204aea79923570abcc"],["/page/6/index.html","68d0038d2ed72a8d955b30f0b2d61404"],["/page/7/index.html","c1f4e78efa43d75769bb20320ddaee95"],["/page/8/index.html","d5fedc47fb93a4e46eb0638b9efca7b2"],["/tags/Angular/index.html","1ba4e3c2fa89efcb8c68a6345cb074c2"],["/tags/Array/index.html","99a702f9d348ef6a8f9d28fada85b462"],["/tags/Bit-Manipulation/index.html","ca3fd071101631c984a0c92110873955"],["/tags/Brainteaser/index.html","205ff333430b10540f7b5b38fdaeb240"],["/tags/GitHub/index.html","bcd917c29cbad2651315116c17983b38"],["/tags/Hash-Table/index.html","01ec0e1a77fe6e9adabe1c8ad547785b"],["/tags/LeetCode/index.html","0f91c45ed7710e28fd612d3aff50889d"],["/tags/Math/index.html","737dc7a815e25cf80e9e31ed46e451a6"],["/tags/Maven/index.html","f868d75ef8a0937d19c95afe24aab74a"],["/tags/Python/index.html","6db4776deac1850ec0402b09f7f1cb19"],["/tags/RabbitMQ/index.html","df31423717c7a87528ed368b40f1db4f"],["/tags/Spring-Boot/index.html","64b72fdf389b1d0a79332b6725b51382"],["/tags/Spring-Security/index.html","d5101b85cf6b10063e97cbd8a921eada"],["/tags/Spring/index.html","e99c3d4ea9a2851785569e40d7750ab4"],["/tags/SpringBoot/index.html","f131c6d194c66de2e535d8215d5f81a6"],["/tags/Stack/index.html","33ce100aef67d38c5b5464d304e2ab61"],["/tags/String/index.html","5af3c59f6e824ab337d62ae977ac29e1"],["/tags/Tree/index.html","241e4270eb384bc32bac8a0c0ba0b086"],["/tags/Vim/index.html","211696ab6ec9415174f70e27903b728b"],["/tags/android/index.html","3721f424f2c802a0b805b97a8ebe1d52"],["/tags/index.html","1581f2522fe6fd6e481896a08d5059af"],["/tags/java/index.html","31fb5b3f4fc59dbd64e51f0b32daa3f6"],["/tags/java/page/2/index.html","d5e0650d44557634c5c18ff2e9754bae"],["/tags/kotlin/index.html","0d0ac1061a6f2dc4b4ed079046c22cba"],["/tags/windows/index.html","bda64341799e78eab0060e8ec976c8f9"],["/tags/加密/index.html","27eeadadc6e9f293e216cebf091412dc"],["/tags/博客/index.html","e2f7cbd403d40671a0230fb2b9fbd83f"],["/tags/工具/index.html","fe19e0c5c9ac0d48e0edd18aba4e7103"],["/tags/推荐系统/index.html","4bc6ccd06dc22520d8d1b83bea8c381d"],["/tags/数据挖掘/index.html","639e926ef9ba41f47e4f6af99a7e8b9b"],["/tags/测试/index.html","3178fd9aa89f04e4d1712a3b345e0766"],["/tags/生活/index.html","3229dbc3520c0644b63ee315a94f18d8"],["/tags/算法/index.html","b03871fbbe9652ebdd1c72fbbd6ae645"],["/tags/蓝桥杯/index.html","16782272df52153feb17b6889d28abf8"],["/tags/译文/index.html","6b9b159b665038ead7a24c5e94c2471f"],["/update/index.html","530663495dba7030209bc9a8ce44f2e4"]];
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







