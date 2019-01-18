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

var precacheConfig = [["/2016/04/20/我一直都在/index.html","3c813fbe57d8b1de89db4df92b550f2b"],["/2016/04/21/清除右键无效项/index.html","da3ffd8492e235d766c19035ced189fd"],["/2016/04/21/第一次参加蓝桥杯感受/index.html","7dfbfb8f8367e17f5a4d8e6b5058791e"],["/2016/04/23/LinkList特有的方法/index.html","3a86cb9f7f827951422e59348b927e3d"],["/2016/04/27/大学？大学？大学？/index.html","1594b2be32481eff7292ef93197f0a53"],["/2016/05/03/GitHub-for-Windows使用教程(一)/index.html","7ba000fb81b81deaa9b87679256cabc8"],["/2016/05/13/GitHub-for-Windows使用教程(二)/index.html","98879882a14f40adbf55d737005ce3bd"],["/2016/05/15/GitHub-for-windows使用教程（三）/index.html","6050ace5fa413b4c2385dd7ac87432d0"],["/2016/05/23/Java集合遍历/index.html","0cf4223aa0c85f7945cd491e1cebf129"],["/2016/07/04/Activity启动的两种方式/index.html","fd2fe56d195fa6c175fd2582c32ca34c"],["/2016/07/17/如何提高Android虚拟机的运行速度/index.html","6c7df49a5eb21475abed6bc9372df8bb"],["/2016/08/05/FlaotActionButton详解/index.html","b63e219b0d44497f5722923fd32a4400"],["/2016/08/05/底部导航按钮/index.html","840c63fb49ab5d3c085e79449c1968aa"],["/2016/08/09/正则表达式/index.html","8be659b3914c435aeca8dc764edbab15"],["/2016/08/13/Git基本操作/index.html","15af762a280d059ff4777d14ad6ae101"],["/2016/08/28/GitHub-for-Windows使用教程（四）/index.html","a7a8a0b82d7bf11685e4b2d3af8ad75e"],["/2016/09/11/String源码剖析/index.html","96d7eda37afbe5a13fe804d0f36b2379"],["/2016/10/25/StringBuilder源码分析/index.html","26dcecff74b23a66db405b5acfda622f"],["/2016/10/27/MD5加密/index.html","f3394d140f86eb266d9650cf13f4c7ac"],["/2016/11/27/ArrayList源码分析/index.html","2e52974e21631532ffa731406f4a08a9"],["/2016/12/30/2016年终总结/index.html","7cb9220c12932ca559bc638f777154fb"],["/2017/01/10/Maven入门/index.html","2eb6e7f29bbab838a9d8b9b1eb3da918"],["/2017/01/19/Junit单元测试/index.html","f5a50033adbbdb215aa5b9d612de00dc"],["/2017/02/08/Spring学习-一/index.html","bf2a25452f38fcee14a0e52eb2d8caaf"],["/2017/02/19/Log4j使用/index.html","b46e64a5ae6b46c337a4c24739a9a63d"],["/2017/03/02/Spring学习记录-二/index.html","b74ce488cef7730de123fdc8ce42f04d"],["/2017/04/03/python爬取斗鱼图片/index.html","aa33199584588ae09396e9a6f4cc6545"],["/2017/04/04/计蒜客蓝桥杯模拟赛-5-试题/index.html","a20ceaff95d02717f4f4515df5898469"],["/2017/04/15/2017蓝桥杯/index.html","0d193af33e13785c7bb668a602227d35"],["/2017/04/20/博客一周年/index.html","08e341fb71447c87229e17131f33e553"],["/2017/04/30/Git教程及使用经验/index.html","a1573684c62030e98b675fe983803d70"],["/2017/05/08/第一个-Android-项目/index.html","4c2d0d3f51aa98d2dccff1c9fea39b77"],["/2017/06/22/python-实现微信打飞机/index.html","86b45f4e4aa752714ba76302e45fc6cb"],["/2017/07/23/vim-基础学习/index.html","4291fc7c5d967e3867ce185fec2b6689"],["/2017/08/01/Hamming-Distance-问题/index.html","411b4156aa7fe644ffa7417c5199e12e"],["/2017/08/01/LeetCode-Array-Partition-I-561/index.html","47fac42db5e38c0476f87eaa48b791bc"],["/2017/08/01/LeetCode-Two-Sum-1/index.html","7836fc8ae53dd82f423117d701df2598"],["/2017/08/02/LeetCode-Distribute-Candies-575/index.html","3524bf068c10239f129c50499c8c9162"],["/2017/08/02/LeetCode-Keyboard-Row-500/index.html","5d98ed70932453a1f0fcdee61a548933"],["/2017/08/02/LeetCode-Number-Complement-476/index.html","081699681ef97ec56e7ea6ccf945584d"],["/2017/08/02/LeetCode-Reverse-Words-in-a-String-III-557/index.html","d4e625346d907091b6481bbfd2c8a9bb"],["/2017/08/04/LeetCode-Fizz-Buzz-412/index.html","6d431e470e6aaaa0899ebc081937d64f"],["/2017/08/04/LeetCode-Merge-Two-Binary-Trees-617/index.html","e2449e72f3bee4eb867ff6416977f28c"],["/2017/08/04/LeetCode-Reverse-String-344/index.html","76df80dc3afaefe7118b6c118afb332c"],["/2017/08/08/LeetCode-Island-Perimeter-463/index.html","d0ec02b9fc9d694fa8e7de5a6d081866"],["/2017/08/11/kotlin-初步学习/index.html","082ab1245e2e3a38ff220c2a13ce186c"],["/2017/08/12/Kotlin-扩展函数-属性/index.html","bb89f3b2ac01ddea1b06a1679d2ad4a2"],["/2017/08/13/LeetCode-Next-Greater-Element-I-496/index.html","1ded1d689b8c43bea6bc6f1584c169a4"],["/2017/08/13/LeetCode-Nim-Game-292/index.html","427f5076593fd0a4bbed0410d4b08b82"],["/2017/08/16/LeetCode-Judge-Route-Circle-657/index.html","0f4c77c6e069f40d6d2fb52a64bcaaf5"],["/2017/08/16/LeetCode-Longest-Uncommon-Subsequence-I-521/index.html","87277d46a04241917c4f115f1009b729"],["/2017/08/27/LeetCode-Move-Zeroes-283/index.html","6410e90d2374cd6c9aca8ca20f5337a8"],["/2017/08/27/LeetCode-Single-Number-136/index.html","dce94b00097d1d06d1d723a6d5845e06"],["/2017/08/28/LeetCode-Reverse-Integer-7/index.html","3a324cfb688052bb443cb6515661ceb9"],["/2017/09/01/协同过滤算法/index.html","8350ed4f65b7d1df8f9107d488ab1919"],["/2017/09/10/LeetCode-Add-Digits-258/index.html","9399ffd6ccc96ccdfdbd16e2767085ac"],["/2017/09/10/LeetCode-Find-the-Difference-389/index.html","36cc2dbef14dce6ed53f84f4b04915b8"],["/2017/09/14/LeetCode-Length-of-Last-Word-58/index.html","2e6d72a18aa4151d6cb4e2ee4f54f0b2"],["/2017/12/01/LeetCode-Binary-Number-with-Alternating-Bits-693/index.html","862dd94fb66be358759a4104dbced7b8"],["/2017/12/01/LeetCode-Number-of-1-Bits-191/index.html","29077394bf121054cb04861379bd54f5"],["/2017/12/01/LeetCode-Self-Dividing-Numbers-728/index.html","27df5b99ddc6c8e87b4fa1807d0399ea"],["/2017/12/02/Kotlin-1-2-平台之间共享代码/index.html","a1d7947da450baf3c04a2bd6c47c650e"],["/2017/12/23/Kotlin中Collection一些语法总结/index.html","33bb53605075725a47549eececf9f022"],["/2017/12/28/一次神奇的课设验收/index.html","b1a4ecf0978cee7372fcc0fd3aba87eb"],["/2018/01/01/2017年终总结/index.html","14dc7b1048cfcbc0e42449e7b392929e"],["/2018/02/23/RabbitMQ-和-Spring-Boot-的集成/index.html","843b29cda6be8049f3e9310c37a2ca0b"],["/2018/04/27/大创项目总结/index.html","2b2f26dbfeb32d732578a6739ca3ee83"],["/2018/05/07/vscode-配置c-c-环境/index.html","a578fd4f15cce4a4f699d8afa8c41ae0"],["/2018/05/25/Apriori算法/index.html","fe48bcafd4a9deeb94cb03e765eb4f84"],["/about/index.html","a3dc57e84d5c74549fdeb55bf64fc194"],["/archives/2016/04/index.html","a7eae8b300f20dd6f0eb87dc6d979ecf"],["/archives/2016/05/index.html","a512e1115bda0e29b1edb6f2839e1d98"],["/archives/2016/07/index.html","f99c0dcbbad5b0200ddac766862fd2ec"],["/archives/2016/08/index.html","40f5ccb8972e798b0e36258e0f4be3cf"],["/archives/2016/09/index.html","4cd8b2587a8f4b45c6333cd97b08c5c8"],["/archives/2016/10/index.html","2234d3fd0232c2edab16d4d8a64d1599"],["/archives/2016/11/index.html","14adf5f1437f2080aaa8e209d9cda08b"],["/archives/2016/12/index.html","73e1589e556e489415c0630ea74e8b2d"],["/archives/2016/index.html","556240668f6e0356a5989ac5240b7ad3"],["/archives/2016/page/2/index.html","fba4e6f023e8bdfb09b230e1475dc6cf"],["/archives/2016/page/3/index.html","496801a4114a3b224e55404aa3d70e6d"],["/archives/2017/01/index.html","363d9bf3a1e145113103348d2cf07eab"],["/archives/2017/02/index.html","26d35bb975115742634194bc92482f95"],["/archives/2017/03/index.html","9ba1e5861e52c8d96b1e56b60d216449"],["/archives/2017/04/index.html","1681a8156bd3547ffda2feb0e84f2b4d"],["/archives/2017/05/index.html","93089461873fc0fcd8ffdd87f66c068c"],["/archives/2017/06/index.html","ba6f5c3d927c403553cbbecd9f13dbcf"],["/archives/2017/07/index.html","8d8155af87090c96cc3ae87834f56782"],["/archives/2017/08/index.html","ff4c7695b31378122f335453414ddb5d"],["/archives/2017/08/page/2/index.html","5c4c0b66a7d8a86aec7e9c55d6865f2e"],["/archives/2017/09/index.html","860a32de75a6aeac1efce65046d78cdd"],["/archives/2017/12/index.html","a125bdbb0c5b6b9e9abca01f5090b6be"],["/archives/2017/index.html","8e30bcd81917efd1000bebd66cacad9b"],["/archives/2017/page/2/index.html","acc8d510a4dbb3eca393979b2f35a3d7"],["/archives/2017/page/3/index.html","9a17b4c351fe8a64a814a5dc7a98e2c8"],["/archives/2017/page/4/index.html","76896aa929756eb259894f6724fe5ed9"],["/archives/2017/page/5/index.html","d018168c354238e448c7fe14766fd3ec"],["/archives/2018/01/index.html","15ce7ff5e2b3bd0386a100085517f4d9"],["/archives/2018/02/index.html","d7c7caecb3c5ad72d386836c17ca5e73"],["/archives/2018/04/index.html","5f86584a15344df17ce102d20d517dd7"],["/archives/2018/05/index.html","4555625711f185d145e5d9c720779e65"],["/archives/2018/index.html","60725b1261bfd799f7127b4d229b0e75"],["/archives/index.html","fff70086e68a13c4edfce7331ae83582"],["/archives/page/2/index.html","678c36ae9c6d6db16526fd21daeb77d0"],["/archives/page/3/index.html","6844d30b5496d02efbb9db9fb81d11c8"],["/archives/page/4/index.html","aa8cb6cec74dd105c9e7905a45861991"],["/archives/page/5/index.html","7f66e08f59ff3977ad36c7823a1ba1ef"],["/archives/page/6/index.html","99cdc087a3a5dbf7249f4620789c14c0"],["/archives/page/7/index.html","6802ef00182167c82c7cfa88f3774870"],["/categories/index.html","7276885a29fc4c14667108457110315c"],["/css/main.css","d0abcb1b1eb3bd06c94936f7673d6b47"],["/images/AliPayQR.png","3f579739acbea428bbfd6caf401633a9"],["/images/WeChanQR.png","3273049e528d5c7c8d6465feeb6f0f37"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/alired.jpg","e5aae0d59e9c1ab261380536793de248"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.png","a5418ef792411cc48b8a04be1412a806"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/icons/icon-128x128.png","c47d5e504c2200f7a8e49c241d117803"],["/images/icons/icon-144x144.png","332e58a8a22f3c61a89714f92f9cd599"],["/images/icons/icon-152x152.png","75f68482ee40ed7d65cbb7eaa948b122"],["/images/icons/icon-192x192.png","ef1632bde4bbfed422aa81d1a0fec31b"],["/images/icons/icon-384x384.png","c4b609968f279a561d729f0eac182296"],["/images/icons/icon-512x512.png","7f33f6399d6441456c90d56b16a81cb2"],["/images/icons/icon-72x72.png","b37c23b70ad209836f23ccf77a43ec6a"],["/images/icons/icon-96x96.png","c79c31a21bf8646cd6e4002df0c2db89"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","d1b5600f88c503c9c282b8fe26f9df04"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","a7af8f923c31f6e47c11afe673aee5fd"],["/js/src/post-details.js","9a53fef7381270bb8c96a611d52ebc04"],["/js/src/schemes/pisces.js","aa788a9a68ff8d352b7b6e3dbb4ace96"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","ecade23d7bb77f013893186d56a92059"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","3da4eef253db4019ff4d8b6bf829b400"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","bb4f88d9fd9264173208a0a51c9483af"],["/lib/font-awesome/css/font-awesome.min.css","b7f16ad3c730d60ba7282b3028bff537"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","8789130fdabd3f6e2da480f6f453ebc7"],["/page/3/index.html","60b9e9eb0b369cb36b9b5385c0aeadd3"],["/page/4/index.html","b0228390a862d86bff994bffa8ebf1a2"],["/page/5/index.html","f0c01fb2e2b53ab57b44e6a71d9a645c"],["/page/6/index.html","3fff0897dc24ea82538fff0f77c51ecc"],["/page/7/index.html","79f0dd343a5c60627851db8ab1339aec"],["/tags/Array/index.html","c8ecada68eef1aea68fd272bf40eeb9b"],["/tags/Bit-Manipulation/index.html","d640943344cff89177fa03afd6fdd206"],["/tags/Brainteaser/index.html","40640144cfd0e659c10219d5b813ee73"],["/tags/GitHub/index.html","5a666b91fa9e6c7cefc35bce76f8e01e"],["/tags/Hash-Table/index.html","967d900a42457dc53e5527f87f9f31ef"],["/tags/LeetCode/index.html","a37169a56adc89a44dfb362f4e44c6c5"],["/tags/Math/index.html","1ec219a9efcffa10fca00a7c470de577"],["/tags/Maven/index.html","7be2a2f561fdf2759e0d314b8c804ce7"],["/tags/Python/index.html","1e07e6e1f1adeb1dec16d8d3d4d5fa8e"],["/tags/RabbitMQ/index.html","6cd36e14daf721af9769b20930db843b"],["/tags/Spring/index.html","4875f540b5e9ae4393a954221870f1db"],["/tags/SpringBoot/index.html","16fa98e746e503f11cb83337c3ef4159"],["/tags/Stack/index.html","485511633518650e89957de712aed3dc"],["/tags/String/index.html","9d998c99755171885b8cb29844724081"],["/tags/Tree/index.html","dc3b6f5e00624cf23fd8881830d7456c"],["/tags/Vim/index.html","be193d6aa5d4dec2eda24d8b5879fe47"],["/tags/android/index.html","0f5ada4d11b947c8ac39ff65f73eafd3"],["/tags/index.html","604cda6978afda93e5428a2139116094"],["/tags/java/index.html","320b45f2f2e52bc4af94231d8b55526c"],["/tags/java/page/2/index.html","8281db2b9099fa31aa5b036c88dc4798"],["/tags/kotlin/index.html","b39757297167ac5f56a434fe104389d7"],["/tags/windows/index.html","c7648115e5c0e755169081ac436a7876"],["/tags/加密/index.html","702d49e9e684f44bac649c24a3618308"],["/tags/博客/index.html","8f87c53c33587c2df7c33985d685e9bb"],["/tags/工具/index.html","aaf489a61f837b2492b197a411a95500"],["/tags/推荐系统/index.html","18fd8d87606a0504e7a0c6d2c253258c"],["/tags/数据挖掘/index.html","bf6af66bf4367a8577cfd98e8c45d631"],["/tags/测试/index.html","715bf7e2c2439ef579c47e5f04d33990"],["/tags/生活/index.html","3f5ccf4494f9aa08822f39f881bb4688"],["/tags/算法/index.html","7ac555770ef67ddd85429c7839d747c3"],["/tags/蓝桥杯/index.html","fd7c02f1af45cc7a1ea1db83117539f4"],["/tags/译文/index.html","ee835276990fba598e671b55cd14ae9a"],["/update/index.html","7ff0d2a9c444a0f8f15cb5a23d277e29"]];
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







