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

var precacheConfig = [["/2016/04/20/我一直都在/index.html","e03497d67f3cb50c8590c75d59abf915"],["/2016/04/21/清除右键无效项/index.html","81a92b6ff0a9753c85be3da3a631014d"],["/2016/04/21/第一次参加蓝桥杯感受/index.html","0755f4023f8c1328e8676028d1de21ec"],["/2016/04/23/LinkList特有的方法/index.html","96336844daa034cd9cf78b7ff6f2e53d"],["/2016/04/27/大学？大学？大学？/index.html","0f52234f554890cf1026d89efa6b0082"],["/2016/05/03/GitHub-for-Windows使用教程(一)/index.html","58710ab97fb1c498d89ac8d31488a1fe"],["/2016/05/13/GitHub-for-Windows使用教程(二)/index.html","0ef6e2d197bf3c74095c6246f82467c9"],["/2016/05/15/GitHub-for-windows使用教程（三）/index.html","056224e9e1f80d776e8261f1478665c0"],["/2016/05/23/Java集合遍历/index.html","5768a1c193e99065f46d27cdf693ffad"],["/2016/07/04/Activity启动的两种方式/index.html","d8c94011f18e1568eda68cbf62c72cf6"],["/2016/07/17/如何提高Android虚拟机的运行速度/index.html","87129be932d0127c6dd45a0d23b99742"],["/2016/08/05/FlaotActionButton详解/index.html","982bccaf8650739633e669da06b260f0"],["/2016/08/05/底部导航按钮/index.html","13577e5f9f71bf82851b5ef8d0fe8664"],["/2016/08/09/正则表达式/index.html","3d3648108844afdf8da7308c1d18ee16"],["/2016/08/13/Git基本操作/index.html","45f51b109972f00894b308e205935eca"],["/2016/08/28/GitHub-for-Windows使用教程（四）/index.html","5fbb17142f690834de60592986e7e73c"],["/2016/09/11/String源码剖析/index.html","8e035e79ad3b19f0b83f384807a2a344"],["/2016/10/25/StringBuilder源码分析/index.html","9cc016f0bd31760119e02d1255883622"],["/2016/10/27/MD5加密/index.html","5a3182934b0af6335415ade9e8f7f209"],["/2016/11/27/ArrayList源码分析/index.html","f11c8456e5bfeb2a84fb5af6bc04c061"],["/2016/12/30/2016年终总结/index.html","7f3ad0e9e471fceec211805bb4e0b66c"],["/2017/01/10/Maven入门/index.html","56df40c264ae4a5429a0651e9e67c210"],["/2017/01/19/Junit单元测试/index.html","252269b8c5d261bbf5a5b1362f62eaa7"],["/2017/02/08/Spring学习-一/index.html","f42f9a6bc98b74c368bba5f3dc99074e"],["/2017/02/19/Log4j使用/index.html","a0e75d9bcfe4d3a3381b2dc7ab63a32f"],["/2017/03/02/Spring学习记录-二/index.html","1fc1da8358a078c78850d5b4833e1274"],["/2017/04/03/python爬取斗鱼图片/index.html","d670155dbc45715d2284177e6a55ccd9"],["/2017/04/04/计蒜客蓝桥杯模拟赛-5-试题/index.html","b71892efbfa149748882659f47eb289e"],["/2017/04/15/2017蓝桥杯/index.html","7579cf9314f94407c343c38620cc27b8"],["/2017/04/20/博客一周年/index.html","4944e98af5de86b57dfc58f472f4b456"],["/2017/04/30/Git教程及使用经验/index.html","0fa61a5e6fc908445abd2d202a8ac26a"],["/2017/05/08/第一个-Android-项目/index.html","8c4155aa9cc82d7bfe3916dc0e0a1b13"],["/2017/06/22/python-实现微信打飞机/index.html","e1609b55ad61e3771482f32dcca0e367"],["/2017/07/23/vim-基础学习/index.html","247f5859f44abf6234c3fdc5a2d8aaeb"],["/2017/08/01/Hamming-Distance-问题/index.html","ede75de3d670235dd021606e2f2a71a7"],["/2017/08/01/LeetCode-Array-Partition-I-561/index.html","bdc5b411e575922af56b1b27e1877f2e"],["/2017/08/01/LeetCode-Two-Sum-1/index.html","4f6c91f1ecf549f7c829ce05c7d6257f"],["/2017/08/02/LeetCode-Distribute-Candies-575/index.html","ac06eb3ca993c9991a1d07db764e39a4"],["/2017/08/02/LeetCode-Keyboard-Row-500/index.html","7aa6b3d793067372f65ea8ab58eda92a"],["/2017/08/02/LeetCode-Number-Complement-476/index.html","227829238697bec2b1a533bce48b143b"],["/2017/08/02/LeetCode-Reverse-Words-in-a-String-III-557/index.html","095a376fd8ff80a4eb0a3c71bf60d66a"],["/2017/08/04/LeetCode-Fizz-Buzz-412/index.html","fe6f82ac899f45ab62b4a843e96eca84"],["/2017/08/04/LeetCode-Merge-Two-Binary-Trees-617/index.html","4c881e16466118c9317cf2e6d88fab3b"],["/2017/08/04/LeetCode-Reverse-String-344/index.html","ceef0ce7590fc842db9f2aff277a06ad"],["/2017/08/08/LeetCode-Island-Perimeter-463/index.html","298596aab9fd6537244b35da3ca1e0a4"],["/2017/08/11/kotlin-初步学习/index.html","477062336d5051c10816667c39d99233"],["/2017/08/12/Kotlin-扩展函数-属性/index.html","26be843db7b622809e896e089a7f9cbc"],["/2017/08/13/LeetCode-Next-Greater-Element-I-496/index.html","a1a48417e61ef70410bb580ba871b9c5"],["/2017/08/13/LeetCode-Nim-Game-292/index.html","06ce90e1166263a658fb9f01e7099a0f"],["/2017/08/16/LeetCode-Judge-Route-Circle-657/index.html","2213f24dc9aedd738fa7648e2d4db64b"],["/2017/08/16/LeetCode-Longest-Uncommon-Subsequence-I-521/index.html","3294ea39747714e38147b1e1925f1232"],["/2017/08/27/LeetCode-Move-Zeroes-283/index.html","17897285fcf958e11d90fad746c4d97f"],["/2017/08/27/LeetCode-Single-Number-136/index.html","c7abd2656e9d3fd0bdd54bda85247f1f"],["/2017/08/28/LeetCode-Reverse-Integer-7/index.html","bf1345c0fdadc401c4883502ce3f537d"],["/2017/09/01/协同过滤算法/index.html","ff22dfd2f9303a7dedda26ab3d87e43e"],["/2017/09/10/LeetCode-Add-Digits-258/index.html","83c40ed0b7323ab3a3e83af48a43c781"],["/2017/09/10/LeetCode-Find-the-Difference-389/index.html","b9040143c54640c8107cb3ee881a07da"],["/2017/09/14/LeetCode-Length-of-Last-Word-58/index.html","f6e05353a06ce19cdc790480d327ae08"],["/2017/12/01/LeetCode-Binary-Number-with-Alternating-Bits-693/index.html","16d8ad64ecee7b4db02d6cb799fcaaf9"],["/2017/12/01/LeetCode-Number-of-1-Bits-191/index.html","63343bf74d07441b5e5ec162a60a451c"],["/2017/12/01/LeetCode-Self-Dividing-Numbers-728/index.html","285dd79f48fe4e92e207cd6b55e93a3c"],["/2017/12/02/Kotlin-1-2-平台之间共享代码/index.html","4a5cc5f8c25b75c92a7957f9aea47bd6"],["/2017/12/23/Kotlin中Collection一些语法总结/index.html","e4e3a68a2cea970c96630f5c1e292b67"],["/2017/12/28/一次神奇的课设验收/index.html","db66fb081a4ff221cd38b4d1597d81f6"],["/2018/01/01/2017年终总结/index.html","5d4f7f122b02ddc24a4c98c8fcd8f26e"],["/2018/02/23/RabbitMQ-和-Spring-Boot-的集成/index.html","fe3cef6240a43627b5024f848ef0a7fd"],["/2018/04/27/大创项目总结/index.html","e6dab08a35545947bc29c5d6ea127cb3"],["/2018/05/07/vscode-配置c-c-环境/index.html","d11d1ffeda100e13c64a481406b97b95"],["/2018/05/25/Apriori算法/index.html","bcfa0f526ba9e6ac4daf974c74b3546e"],["/about/index.html","a76bfba1a9819128b23903f3daa4742e"],["/archives/2016/04/index.html","91dedfd737b7f518c064401039331761"],["/archives/2016/05/index.html","0279c10c8b123dda2abab442f313bf59"],["/archives/2016/07/index.html","812d6f89f65179428d997b510656d32b"],["/archives/2016/08/index.html","b79dd8b10642012b90b2e4f6f26da2b9"],["/archives/2016/09/index.html","810e54ade1edf1994fd03b710253d80c"],["/archives/2016/10/index.html","322dd810aa35702e9f8d7f4d11d476e8"],["/archives/2016/11/index.html","a5e8314e2436fd39d944dbdc744c0e38"],["/archives/2016/12/index.html","086ac2cdc686d74590e99db899010834"],["/archives/2016/index.html","719e04a473c6d8914ea4e178a294eaba"],["/archives/2016/page/2/index.html","41964900da0befdacb656b11b7de39ea"],["/archives/2016/page/3/index.html","86ac969e78e5792fbad7063f554ed5d3"],["/archives/2017/01/index.html","d71567a33cf21b04321b5dfdb5e54319"],["/archives/2017/02/index.html","46f1b6199151b2daf21320ee060139ce"],["/archives/2017/03/index.html","0dc5238393ad354cfa1589430715f690"],["/archives/2017/04/index.html","5cd1420ac8e8313d3124fe4ba4e5af72"],["/archives/2017/05/index.html","eabfdb31028ae3856ed10a0e8ad238fa"],["/archives/2017/06/index.html","7033b3c94866fc356d25c21a76c66728"],["/archives/2017/07/index.html","a94a7f5c1448693e758a65540c5a099c"],["/archives/2017/08/index.html","aff874b36fd0a5e30a5b14c1ca1787f9"],["/archives/2017/08/page/2/index.html","7f721821cdc193d2f811ab6ef64a10aa"],["/archives/2017/09/index.html","d9e5c91cf59180337f4959207e33f6c1"],["/archives/2017/12/index.html","cc6daa18f5789211ea4f083e2dc89225"],["/archives/2017/index.html","20dbddf67ab737d4581dbb963f9d3466"],["/archives/2017/page/2/index.html","e75ecaa0ece5c792ba92a986d13495bb"],["/archives/2017/page/3/index.html","43f161aaf6c3d5fa86c8d3f867c2f49c"],["/archives/2017/page/4/index.html","0c1c27d225c68c76e40dc3a7efd0a1b2"],["/archives/2017/page/5/index.html","39ce45e75b7c8a62b297fa91312b39db"],["/archives/2018/01/index.html","652e805282d6c0f4df4f7a29a0f757c2"],["/archives/2018/02/index.html","d4c6411331e3495004ba6074a27ca77f"],["/archives/2018/04/index.html","810f7f32cf363049577cdf11ed07bf61"],["/archives/2018/05/index.html","28a5c3ebeb2b53d6ca451379ff45d5a5"],["/archives/2018/index.html","0637202f093cbe4581888dd746a2b8f0"],["/archives/index.html","ab8a73921a07ea5462cc95c8cadf2cc7"],["/archives/page/2/index.html","fa745d320ef6addfc044ec93fb7eb223"],["/archives/page/3/index.html","7aa62a902c898c3c21fa6638f27e9116"],["/archives/page/4/index.html","81e27b3412fbb3a5226c3b8744e8ec4e"],["/archives/page/5/index.html","453bb13cd3ce6a4fcc23a31345b90c4d"],["/archives/page/6/index.html","9b33f6c43a67658361d99f57291273d7"],["/archives/page/7/index.html","1fc4578b66c150fb3db3c5c485c3ca40"],["/categories/index.html","95ef9bc97ef7c5fe853f2011741bca49"],["/css/main.css","55ec720caa93687f3c6276343b524076"],["/images/AliPayQR.png","3f579739acbea428bbfd6caf401633a9"],["/images/WeChanQR.png","3273049e528d5c7c8d6465feeb6f0f37"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/alired.jpg","e5aae0d59e9c1ab261380536793de248"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.png","a5418ef792411cc48b8a04be1412a806"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/icons/icon-128x128.png","c47d5e504c2200f7a8e49c241d117803"],["/images/icons/icon-144x144.png","332e58a8a22f3c61a89714f92f9cd599"],["/images/icons/icon-152x152.png","75f68482ee40ed7d65cbb7eaa948b122"],["/images/icons/icon-192x192.png","ef1632bde4bbfed422aa81d1a0fec31b"],["/images/icons/icon-384x384.png","c4b609968f279a561d729f0eac182296"],["/images/icons/icon-512x512.png","7f33f6399d6441456c90d56b16a81cb2"],["/images/icons/icon-72x72.png","b37c23b70ad209836f23ccf77a43ec6a"],["/images/icons/icon-96x96.png","c79c31a21bf8646cd6e4002df0c2db89"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","500e1b4a473a4bab2ab036d45d0b3dc9"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","a7af8f923c31f6e47c11afe673aee5fd"],["/js/src/post-details.js","9a53fef7381270bb8c96a611d52ebc04"],["/js/src/schemes/pisces.js","aa788a9a68ff8d352b7b6e3dbb4ace96"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","ecade23d7bb77f013893186d56a92059"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","3da4eef253db4019ff4d8b6bf829b400"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","bb4f88d9fd9264173208a0a51c9483af"],["/lib/font-awesome/css/font-awesome.min.css","b7f16ad3c730d60ba7282b3028bff537"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","fffa60787d7ccf2eb95e58161d688c2d"],["/page/3/index.html","edd7440cb777b5931d5d3888e548ae7d"],["/page/4/index.html","f869ffbb248c2a3095ecddcbac6a9d28"],["/page/5/index.html","9aec1d168e7b7f653ff89422de62bedf"],["/page/6/index.html","6d952d4df14202d75a1f4745141f2f11"],["/page/7/index.html","5f113e717b4f4283182ec9a6b7806e05"],["/tags/Array/index.html","2c17f68f7ee69ebc80dd0ef1880269d0"],["/tags/Bit-Manipulation/index.html","f148016d1bbc3ddfa91f6ce9efd50e74"],["/tags/Brainteaser/index.html","15582806ce8044e4dcc2a6da5a85ce8e"],["/tags/GitHub/index.html","4989e6ea51934893a6662e80ffb33945"],["/tags/Hash-Table/index.html","d41fa86d90b2baa4bde5db2cdbab867e"],["/tags/LeetCode/index.html","14bd42210ad27070d15ab38c2cbaa51e"],["/tags/Math/index.html","d6bc3e95d5c10d0c4fd078f86b65a0d5"],["/tags/Maven/index.html","ad482e8870a317c8cf49b2f7b169981f"],["/tags/Python/index.html","39c00eebb37717b6d2b98d37a2d670d3"],["/tags/RabbitMQ/index.html","f92cd086d6125397aa3b7908b8dc9a13"],["/tags/Spring/index.html","0ba20aad2148ec96270276f9932b66d5"],["/tags/SpringBoot/index.html","4ff9280a7028aff711d63808817314a0"],["/tags/Stack/index.html","c3612a2f499b9b7570271b503f966e7b"],["/tags/String/index.html","e4e23434d16389ecaf552b19af0d955b"],["/tags/Tree/index.html","628e61f74ba601695bc5870edefb2412"],["/tags/Vim/index.html","d813e8583fc88880dc7982eb1af71815"],["/tags/android/index.html","9e4e1b9b82bdda23cd740ad4983bed20"],["/tags/index.html","a050f0862747dd4954d2ea16566f8f65"],["/tags/java/index.html","81f192e00e976f9f51d9537222d22f73"],["/tags/java/page/2/index.html","ccbd2104a6a3c94176fe744a9290d6a6"],["/tags/kotlin/index.html","151d1588e43d33a8436d62b0336dc599"],["/tags/windows/index.html","aafcfd3cbf699aefc75b9ed9b4d46687"],["/tags/加密/index.html","f013b1596ee38585cb8d4179ea92a1ab"],["/tags/博客/index.html","78f021f0c3484986f003328d9ca487d8"],["/tags/工具/index.html","00b6825fef97508a2d3f5177588976d8"],["/tags/推荐系统/index.html","0e73a276bc483920170c3def9d8c7ffc"],["/tags/数据挖掘/index.html","b1a0b4bd5ef1aaee1b3fab3e2f86a4a0"],["/tags/测试/index.html","8e8d418dafc726149dba9b535e4aae77"],["/tags/生活/index.html","ebaf4d706b8875e57d6d1fe0eb561053"],["/tags/算法/index.html","762f19fd2ee7cdb9c709890b362384e1"],["/tags/蓝桥杯/index.html","2f2b6adc15953d2d96f9441471aa829b"],["/tags/译文/index.html","1f806b06933da0d84300e62072aa0263"],["/update/index.html","c348bf1f5eeade6949f73e6b385050d1"]];
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







