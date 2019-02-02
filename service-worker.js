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

var precacheConfig = [["/2016/04/20/我一直都在/index.html","2e51a51fa6c474c0ac64d16350d37b32"],["/2016/04/21/清除右键无效项/index.html","6038e3efc46f64d7cba65d5c945fb9fd"],["/2016/04/21/第一次参加蓝桥杯感受/index.html","31a7d2a9fe9eb78709cddcf163b3459e"],["/2016/04/23/LinkList特有的方法/index.html","cf20135dc4819cc2c9cecb7b281e5961"],["/2016/04/27/大学？大学？大学？/index.html","cda119c26c3095ae22a66f142cf2bbe2"],["/2016/05/03/GitHub-for-Windows使用教程(一)/index.html","12db8c3bca4f2013ffd08490a7ee322a"],["/2016/05/13/GitHub-for-Windows使用教程(二)/index.html","c8f2d93bd344f9a19a36ce5115c8f5e5"],["/2016/05/15/GitHub-for-windows使用教程（三）/index.html","124787be690791896be7d9faeee56955"],["/2016/05/23/Java集合遍历/index.html","fb24d62f9ee1b8662f12a20e8659ea54"],["/2016/07/04/Activity启动的两种方式/index.html","aecf343b45c89b8078ddcd684de7ed48"],["/2016/07/17/如何提高Android虚拟机的运行速度/index.html","58db6583b1f4d13acfb1cc615d4ff562"],["/2016/08/05/FlaotActionButton详解/index.html","bbc53cc6e50585dab6563430cb8c6acb"],["/2016/08/05/底部导航按钮/index.html","31345be7ae13e296b97d43d79ce1a854"],["/2016/08/09/正则表达式/index.html","c3eb689a3a4af24e8e9b3a1b0df3bfbd"],["/2016/08/13/Git基本操作/index.html","3ce13fae26b0dcb003ddce689bf8673d"],["/2016/08/28/GitHub-for-Windows使用教程（四）/index.html","ccb03da7250c0c078f7070558a7de0e8"],["/2016/09/11/String源码剖析/index.html","6cd773dc60a4502acb9bccf5f4fa7acc"],["/2016/10/25/StringBuilder源码分析/index.html","37ae8cc18eec96b00249152edf0f0a7d"],["/2016/10/27/MD5加密/index.html","b6701daf694f95210b1d2df2955e6bff"],["/2016/11/27/ArrayList源码分析/index.html","2b05a1321a3bc12cfd7f17c2698b6bfa"],["/2016/12/30/2016年终总结/index.html","9009c277f0c303b07ed3c36e625389af"],["/2017/01/10/Maven入门/index.html","2e69ce58ef77c3510ca05ddcf2bf9ef8"],["/2017/01/19/Junit单元测试/index.html","0ecae1d68d9e3a00b196a42a05f53309"],["/2017/02/08/Spring学习-一/index.html","686eae02a211507865b97c3cdd48cb4d"],["/2017/02/19/Log4j使用/index.html","12110b5ecaca168e1016610c41bf9e50"],["/2017/03/02/Spring学习记录-二/index.html","384da725d252dcebf542c06e2b77f327"],["/2017/04/03/python爬取斗鱼图片/index.html","599f04677a470ac9c8da492a97a44e04"],["/2017/04/04/计蒜客蓝桥杯模拟赛-5-试题/index.html","f79319e5bcecd3415a3e917bd0dff69f"],["/2017/04/15/2017蓝桥杯/index.html","16d2957d2459a445bdc5c4c134f5b951"],["/2017/04/20/博客一周年/index.html","80c6fdcbc673b92bf8cbb7eb7d4ab2c0"],["/2017/04/30/Git教程及使用经验/index.html","37393a9bea5ac5b75d6b1e2c5e03b27a"],["/2017/05/08/第一个-Android-项目/index.html","e824e3017c3112ff8258542a2a6b2310"],["/2017/06/22/python-实现微信打飞机/index.html","18eea4ffa580865be5326300e5306b33"],["/2017/07/23/vim-基础学习/index.html","601d1a7e2cd469fda66d731d81f772d7"],["/2017/08/01/Hamming-Distance-问题/index.html","69cbe45b1f50989f898254baf331b423"],["/2017/08/01/LeetCode-Array-Partition-I-561/index.html","7abcb7dae8a950032901533616502df5"],["/2017/08/01/LeetCode-Two-Sum-1/index.html","04cf69ee52558c5ecc81ad372d7c89f6"],["/2017/08/02/LeetCode-Distribute-Candies-575/index.html","c86d75824a13d8d91d99fea698f89172"],["/2017/08/02/LeetCode-Keyboard-Row-500/index.html","8185a2c2457608f1c881eb629176cc6c"],["/2017/08/02/LeetCode-Number-Complement-476/index.html","80a48041a304ff43bc6c1db6dd404896"],["/2017/08/02/LeetCode-Reverse-Words-in-a-String-III-557/index.html","a9f0c5b46ff7519390d2b5a2dcfa7701"],["/2017/08/04/LeetCode-Fizz-Buzz-412/index.html","47ccb17c547373417de56856a2c473b2"],["/2017/08/04/LeetCode-Merge-Two-Binary-Trees-617/index.html","a3eec8be7dd47ec905830430a98ee80f"],["/2017/08/04/LeetCode-Reverse-String-344/index.html","6448639c8e027efa7474863f297dab13"],["/2017/08/08/LeetCode-Island-Perimeter-463/index.html","2e28508441d8505bd966910dfa5a37e9"],["/2017/08/11/kotlin-初步学习/index.html","96d3fee4a221188a17ab85cef41c37be"],["/2017/08/12/Kotlin-扩展函数-属性/index.html","f7bef4b4eed7b43f16334f4160990e75"],["/2017/08/13/LeetCode-Next-Greater-Element-I-496/index.html","01f5e44f626703c6963baf44b1c25ae2"],["/2017/08/13/LeetCode-Nim-Game-292/index.html","b72b3c57f00953303a272e33bb50ce92"],["/2017/08/16/LeetCode-Judge-Route-Circle-657/index.html","76cfe441a0bda50fac9a1589c2009873"],["/2017/08/16/LeetCode-Longest-Uncommon-Subsequence-I-521/index.html","8bd86d26489295d77461f33f06e15c30"],["/2017/08/27/LeetCode-Move-Zeroes-283/index.html","6fe3ea1752ccb7af930e7eb30d82b3ca"],["/2017/08/27/LeetCode-Single-Number-136/index.html","1f99e77fa1a49c6cdbd3cef5ac7af7bd"],["/2017/08/28/LeetCode-Reverse-Integer-7/index.html","1197c3dd63ad052786e13540b7dd7494"],["/2017/09/01/协同过滤算法/index.html","62910b7b0233cf3aeba9d5bb043be940"],["/2017/09/10/LeetCode-Add-Digits-258/index.html","06927d44b58f492293a10998b1923f84"],["/2017/09/10/LeetCode-Find-the-Difference-389/index.html","7c30def9e45744bf584c6349a2ffbcd8"],["/2017/09/14/LeetCode-Length-of-Last-Word-58/index.html","7df4977632c788ad6b8de553618a5c43"],["/2017/12/01/LeetCode-Binary-Number-with-Alternating-Bits-693/index.html","2d9e4f5dfd5b8c7cb061305d3380380a"],["/2017/12/01/LeetCode-Number-of-1-Bits-191/index.html","0bafd5c7c2c72326b20607f7a42f020d"],["/2017/12/01/LeetCode-Self-Dividing-Numbers-728/index.html","9746ad71e25127d5bc44bd4116bdec62"],["/2017/12/02/Kotlin-1-2-平台之间共享代码/index.html","ac782b26e40ecbd520f0f7a19afd43fc"],["/2017/12/23/Kotlin中Collection一些语法总结/index.html","538924aba770b5fc3e31bd7d410d552a"],["/2017/12/28/一次神奇的课设验收/index.html","a3d3a65491f47306eb5f551314241ffd"],["/2018/01/01/2017年终总结/index.html","1ab90dcf0efb09d9088ec88b95a15332"],["/2018/02/23/RabbitMQ-和-Spring-Boot-的集成/index.html","79d97167de5f166e8bbdef781e2b0ae8"],["/2018/04/27/大创项目总结/index.html","89d4614b3a34931431e755b8b072e602"],["/2018/05/07/vscode-配置c-c-环境/index.html","85957037cf527f4b97d6c73a79644665"],["/2018/05/25/Apriori算法/index.html","9cb21ab3466bb199d219f3615121422a"],["/2019/01/26/Angular-管道/index.html","8aec66de4751cdd64b095dc114a52b70"],["/2019/01/26/Spring-Boot-Security-跨域请求配置/index.html","f35d3064114e9d9870bd9ae907311447"],["/2019/02/02/Ktor-入门/index.html","2888ee78b2d009502b5bf5f16843692d"],["/about/index.html","edc7ced54be40fb4707d6510f76cdbad"],["/archives/2016/04/index.html","117a96c6836f5c32dc36dd685bb9c1d9"],["/archives/2016/05/index.html","43de0efaca4acc91cf7cd75a95949a79"],["/archives/2016/07/index.html","91840de25332d3bac31a1ddccb2bb695"],["/archives/2016/08/index.html","978f142292153321a2391046b45c1608"],["/archives/2016/09/index.html","dd9f887c492fc102ad529b7ba49c1361"],["/archives/2016/10/index.html","bc32b659a178d0da40bf62dd54ce932c"],["/archives/2016/11/index.html","2bbf45c8d0ef2d7cbc7cba92d1bd97bb"],["/archives/2016/12/index.html","35a068d6c2b0e406923e156b9694d2c2"],["/archives/2016/index.html","15f4503ea9c63201f64196c8764e9e2d"],["/archives/2016/page/2/index.html","bb0c0baf37b8ede01cd1f87980a8835e"],["/archives/2016/page/3/index.html","93d2d2786f60b70b64bef4f5ecc0648e"],["/archives/2017/01/index.html","670a6ad5e6299a209a8ec2b74df131ac"],["/archives/2017/02/index.html","f0a83a94c12d58bda4e13fe1d6ae0f01"],["/archives/2017/03/index.html","f61eec3f70d0a56a0c821c4bd66fcb91"],["/archives/2017/04/index.html","53badc044accda4b06dd578e01f7bb3c"],["/archives/2017/05/index.html","59715b541f68a33530003edaf366a2e0"],["/archives/2017/06/index.html","85a7a1a6a11b01c9b72a3f67778d9000"],["/archives/2017/07/index.html","f3153c220acb03e45db9e7708d06bbd2"],["/archives/2017/08/index.html","b15f7c8b459539cd0bb182ebc2f16fe4"],["/archives/2017/08/page/2/index.html","38a48b06d6e4ea15ace761c97dbb7e96"],["/archives/2017/09/index.html","6679e9258a9a97332315eb42386c27e3"],["/archives/2017/12/index.html","82141e3764bb958a04ee21e766cfbdf0"],["/archives/2017/index.html","f7efc3edcd10a3cd40456720e766811a"],["/archives/2017/page/2/index.html","b29b11643d833eb7b966bc356a128234"],["/archives/2017/page/3/index.html","021cb7a2da134e187fa3b47141389bd1"],["/archives/2017/page/4/index.html","3cd5e0dcfc8e25aae71b64c741636d47"],["/archives/2017/page/5/index.html","eba3941f9d0e76920da2566b45addfdc"],["/archives/2018/01/index.html","038f0acc85c4cf8523b1fe623f8aa2d8"],["/archives/2018/02/index.html","b6be89d704b8a3a64c9a9934fe725cb2"],["/archives/2018/04/index.html","09b45ad577a59e373c57ea9f3ddfe1ff"],["/archives/2018/05/index.html","6ee64489d3ff13effcda819dc61aff28"],["/archives/2018/index.html","50b57689f44d530a6d566d4ac0abe23c"],["/archives/2019/01/index.html","6c197c7253d2e165d955a2c27ee76992"],["/archives/2019/02/index.html","54eb3a90b5dbfda3594e89df1e7bd9b5"],["/archives/2019/index.html","621cf149d65d620c7f2524e535524d7b"],["/archives/index.html","2999a09d4ec4ffa89736ced0da05579c"],["/archives/page/2/index.html","a99a3cf312a34e4aa5e3d988c774d656"],["/archives/page/3/index.html","da72cf2d8433e335fec061ae52db90dc"],["/archives/page/4/index.html","9adae229e78a66871a90380bed265b82"],["/archives/page/5/index.html","95e86ac17f4128c64e0cc45fe75f6990"],["/archives/page/6/index.html","790c469aae51e078a97ffbd7282eaa93"],["/archives/page/7/index.html","3487ce5cca921b2e778fadaf4e3a9312"],["/archives/page/8/index.html","4b440feb3ecec44ca1c3a01bfa4dec1c"],["/categories/index.html","04327b0cf3bb75369f7e7592459d5706"],["/css/main.css","204eb629875136f899f8d2dd421480a7"],["/images/AliPayQR.png","3f579739acbea428bbfd6caf401633a9"],["/images/WeChanQR.png","3273049e528d5c7c8d6465feeb6f0f37"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/alired.jpg","e5aae0d59e9c1ab261380536793de248"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.png","a5418ef792411cc48b8a04be1412a806"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/icons/icon-128x128.png","c47d5e504c2200f7a8e49c241d117803"],["/images/icons/icon-144x144.png","332e58a8a22f3c61a89714f92f9cd599"],["/images/icons/icon-152x152.png","75f68482ee40ed7d65cbb7eaa948b122"],["/images/icons/icon-192x192.png","ef1632bde4bbfed422aa81d1a0fec31b"],["/images/icons/icon-384x384.png","c4b609968f279a561d729f0eac182296"],["/images/icons/icon-512x512.png","7f33f6399d6441456c90d56b16a81cb2"],["/images/icons/icon-72x72.png","b37c23b70ad209836f23ccf77a43ec6a"],["/images/icons/icon-96x96.png","c79c31a21bf8646cd6e4002df0c2db89"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","f9840852f9705191cb4e5a44441b7572"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","a7af8f923c31f6e47c11afe673aee5fd"],["/js/src/post-details.js","9a53fef7381270bb8c96a611d52ebc04"],["/js/src/schemes/pisces.js","aa788a9a68ff8d352b7b6e3dbb4ace96"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","ecade23d7bb77f013893186d56a92059"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","3da4eef253db4019ff4d8b6bf829b400"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","bb4f88d9fd9264173208a0a51c9483af"],["/lib/font-awesome/css/font-awesome.min.css","b7f16ad3c730d60ba7282b3028bff537"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","439cde2740a3df53c704b1ffafb6c924"],["/page/3/index.html","61c4914f2a238f529062f40d1c17c3e2"],["/page/4/index.html","16e925cfe81af9a3847c07bdb9279f4d"],["/page/5/index.html","dd8e16ce6f8671bdfaa3dd34f53ab27d"],["/page/6/index.html","f09e7b6003a82ec7fb1c2e0e711afe13"],["/page/7/index.html","13ed4609471ea8401fc65ed4c045babc"],["/page/8/index.html","2a4385b1549e6bc7222b97b2f3846938"],["/tags/Angular/index.html","38f6b9398cf47caeb863924c2080a119"],["/tags/Array/index.html","6623aa97a19b13e8050bba1b7e0b504b"],["/tags/Bit-Manipulation/index.html","09e451337f115d42d306449d7649da41"],["/tags/Brainteaser/index.html","172c66ae3ed23989883678eb3f31f793"],["/tags/GitHub/index.html","4b5fab4001b3b11568b5efaf14f12c13"],["/tags/Hash-Table/index.html","a3491d63b79dc090f3e1a0aec21da427"],["/tags/LeetCode/index.html","ffd5a3965cbbafce1fad251d61f80573"],["/tags/Math/index.html","1e82f6d5083c74dc34faa697356de99b"],["/tags/Maven/index.html","87a865d8244413d8bd614c52b126fd55"],["/tags/Python/index.html","d859edc26d36df9ff724b8d9807063cc"],["/tags/RabbitMQ/index.html","8181f511947eae1ec898cc958d25ab66"],["/tags/Spring-Boot/index.html","ffc4e6132469f80e37fc8d3d54753513"],["/tags/Spring-Security/index.html","00fa2b544169a3347c17b306392c82b8"],["/tags/Spring/index.html","db2736901f633b74c71e6beca78bef37"],["/tags/SpringBoot/index.html","b0ab424b2056b97696ae4e5fe5304591"],["/tags/Stack/index.html","971ff02507c4d25d9527ca3c1e686b2a"],["/tags/String/index.html","6835e490c3c25f4f58b0a6bb300d9031"],["/tags/Tree/index.html","9caca66479db19ec8e3a4eae83fdd093"],["/tags/Vim/index.html","417a2f973e09b472e1aed320be6298fc"],["/tags/android/index.html","4ab71ace4fb7fb54f476af90c8a3a5e7"],["/tags/index.html","4b9a76a558c8f2f866e03e9799576814"],["/tags/java/index.html","aee98496cca25a9477bbc41895219bed"],["/tags/java/page/2/index.html","75c4c35d2759b807098b825de9118b63"],["/tags/kotlin/index.html","fe5f4b764ad98c4e21349a5a0476dc19"],["/tags/windows/index.html","9858eabc57d92ceae2d9595a6dc513fd"],["/tags/加密/index.html","4c29b8a38d834e993be8117902d70825"],["/tags/博客/index.html","e1eb2c03392cf5a5529c409629f49419"],["/tags/工具/index.html","e43e937765cbc31990ba767c76a0be60"],["/tags/推荐系统/index.html","06f3bc111aed5073b35f040d2a23961a"],["/tags/数据挖掘/index.html","5655e42ee8cf8c6dcbd0ec4dc30169c9"],["/tags/测试/index.html","51d469b27a30f12f2bc6b8428140ed40"],["/tags/生活/index.html","613f834bac4e3e21fa03587bdf549877"],["/tags/算法/index.html","918037c565c42dda89555afd000e35d4"],["/tags/蓝桥杯/index.html","d8fe0e88ad6025438675653d40254f85"],["/tags/译文/index.html","ac93bccd0e0431fc89b66288a86e9a66"],["/update/index.html","0968ca2ff381f47071e35f140f0bfe65"]];
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







