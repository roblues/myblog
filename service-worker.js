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

var precacheConfig = [["/2016/04/20/我一直都在/index.html","028a584d71caa3457b7e14911f3f09fa"],["/2016/04/21/清除右键无效项/index.html","75ee1e59301263609766fb37459b8e10"],["/2016/04/21/第一次参加蓝桥杯感受/index.html","8f78d1759f31ee314a43599abfb134d1"],["/2016/04/23/LinkList特有的方法/index.html","fb1eb2d0ff6d7621227956a7073ae0f6"],["/2016/04/27/大学？大学？大学？/index.html","2b5303e7ef65efc31747723b8ec32b4c"],["/2016/05/03/GitHub-for-Windows使用教程(一)/index.html","220e13f4fe082aa4937f6f15f2479b30"],["/2016/05/13/GitHub-for-Windows使用教程(二)/index.html","f0956958b6d4b2ac47e34564e0c8d811"],["/2016/05/15/GitHub-for-windows使用教程（三）/index.html","39b696ccf5e7f451b8481f2ed73621ea"],["/2016/05/23/Java集合遍历/index.html","8c47716b52f8d824ca8e0c15324d8944"],["/2016/07/04/Activity启动的两种方式/index.html","d71a8f830227f8f4a499ceb1e90913e2"],["/2016/07/17/如何提高Android虚拟机的运行速度/index.html","fbffd1ecbe41d842a2c7e503fa4eac1b"],["/2016/08/05/FlaotActionButton详解/index.html","8a8ac5e55ab8cae0934a7ba2ad2d98ca"],["/2016/08/05/底部导航按钮/index.html","d2634f970dd43c7026b203f8f2ea30b5"],["/2016/08/09/正则表达式/index.html","31bbe822ddad3d4d32898b48dc84720b"],["/2016/08/13/Git基本操作/index.html","b1cae22fe258319f1356c4a2c96a316a"],["/2016/08/28/GitHub-for-Windows使用教程（四）/index.html","4ccf4f96e672f62e796b28ad21af5b61"],["/2016/09/11/String源码剖析/index.html","6e851e935b0bda2ee800278154a9cbfa"],["/2016/10/25/StringBuilder源码分析/index.html","caf39255b90877569184677ba84d6dde"],["/2016/10/27/MD5加密/index.html","b8334c0c7b6348ecb263ae9fbfd3660d"],["/2016/11/27/ArrayList源码分析/index.html","348607457f290e62dbe74ab25b76c49e"],["/2016/12/30/2016年终总结/index.html","8c57cdaaf0b7c6ee8a35d307857ced6a"],["/2017/01/10/Maven入门/index.html","cd15d069fccaf8631904a9ae7df85846"],["/2017/01/19/Junit单元测试/index.html","40d151094b8c27598635fb2afcbeee03"],["/2017/02/08/Spring学习-一/index.html","bdcc88e9b0ce0e5666821a92deddb414"],["/2017/02/19/Log4j使用/index.html","52be595729d1b7de8d67e9a30b9d73d7"],["/2017/03/02/Spring学习记录-二/index.html","a2afdf62456307e92784bd715f3fd97b"],["/2017/04/03/python爬取斗鱼图片/index.html","b3496cc158937d609b62e7481a06ca4a"],["/2017/04/04/计蒜客蓝桥杯模拟赛-5-试题/index.html","365122f5f6453f67b278faeb459326ce"],["/2017/04/15/2017蓝桥杯/index.html","460dbea2fb1ffddbd05424768a25a6bc"],["/2017/04/20/博客一周年/index.html","7d0790cba7880dd4416ed122a002f8ae"],["/2017/04/30/Git教程及使用经验/index.html","5a41dc6430e0047a776dcce22f68a3c0"],["/2017/05/08/第一个-Android-项目/index.html","5a0a56885092d4a5505321883238f083"],["/2017/06/22/python-实现微信打飞机/index.html","66223b36af3e8c3480646b5acaa22156"],["/2017/07/23/vim-基础学习/index.html","85871a1a7d8c66f2ef6c20ec857d855f"],["/2017/08/01/Hamming-Distance-问题/index.html","70b8e60029d353c0997178452672b32a"],["/2017/08/01/LeetCode-Array-Partition-I-561/index.html","a1886990a86be9f0271932190622dd04"],["/2017/08/01/LeetCode-Two-Sum-1/index.html","58e8241479cac2a65324ef36dac439c6"],["/2017/08/02/LeetCode-Distribute-Candies-575/index.html","22695f9aa785da93faf49aa7b61dce96"],["/2017/08/02/LeetCode-Keyboard-Row-500/index.html","2a37bc5e7622bd35d28d870026418ee2"],["/2017/08/02/LeetCode-Number-Complement-476/index.html","69609a38cbcaa583a2efd9daf4ae3c49"],["/2017/08/02/LeetCode-Reverse-Words-in-a-String-III-557/index.html","affff7d2a2b44753012f87ae79976de6"],["/2017/08/04/LeetCode-Fizz-Buzz-412/index.html","10df605d669b5770fc3e428ac7e0d277"],["/2017/08/04/LeetCode-Merge-Two-Binary-Trees-617/index.html","465a5bd10074751fb2b6e39f625eec3d"],["/2017/08/04/LeetCode-Reverse-String-344/index.html","3bfe66aa19cd55572451f39eedf6a196"],["/2017/08/08/LeetCode-Island-Perimeter-463/index.html","0520d4f4b1b7fc7286f1dcfa690868f3"],["/2017/08/11/kotlin-初步学习/index.html","cf9392b7638d10f4915dcf7091021893"],["/2017/08/12/Kotlin-扩展函数-属性/index.html","b1bcc92082916e61a6e9b4599e313d0d"],["/2017/08/13/LeetCode-Next-Greater-Element-I-496/index.html","034c5deae8ae2acbb5c763fc70b511fa"],["/2017/08/13/LeetCode-Nim-Game-292/index.html","2f4389f0e0a54f9192c68644b9c136ae"],["/2017/08/16/LeetCode-Judge-Route-Circle-657/index.html","7d8bce1f48a775915fc826462efafa04"],["/2017/08/16/LeetCode-Longest-Uncommon-Subsequence-I-521/index.html","91af059d3641ffb139007f97cc423f4b"],["/2017/08/27/LeetCode-Move-Zeroes-283/index.html","fa99bb5a41b7093e755a20e48b011ad9"],["/2017/08/27/LeetCode-Single-Number-136/index.html","64764da4a896663d617a2f645d5f30c9"],["/2017/08/28/LeetCode-Reverse-Integer-7/index.html","e8a649fa7c35add8e6e735b4430112eb"],["/2017/09/01/协同过滤算法/index.html","cf26c2472c604cd7e2b6e57522a5c6fb"],["/2017/09/10/LeetCode-Add-Digits-258/index.html","0f5c0f4ff9a011cf52abf87a3b3ebbba"],["/2017/09/10/LeetCode-Find-the-Difference-389/index.html","744b30b30cc900151b7643fb36888345"],["/2017/09/14/LeetCode-Length-of-Last-Word-58/index.html","a64174f998c1120076c15d5f043096e9"],["/2017/12/01/LeetCode-Binary-Number-with-Alternating-Bits-693/index.html","e44c5da9c2af5d26814064a8ae632555"],["/2017/12/01/LeetCode-Number-of-1-Bits-191/index.html","269110c5c69630a9b4e0803b55e6266b"],["/2017/12/01/LeetCode-Self-Dividing-Numbers-728/index.html","14ae043f14ae698699a2ef7464cf807c"],["/2017/12/02/Kotlin-1-2-平台之间共享代码/index.html","7cd4c907b92ae07dc8e707074f75acb5"],["/2017/12/23/Kotlin中Collection一些语法总结/index.html","420dcd1d7e60c06df32e0eff7edec464"],["/2017/12/28/一次神奇的课设验收/index.html","b2060ca87b561c9219aaa0552836682a"],["/2018/01/01/2017年终总结/index.html","28266b8906a13c4f57b48da1d0cf3b47"],["/2018/02/23/RabbitMQ-和-Spring-Boot-的集成/index.html","5bc22bf58b56c466b71d3729b012c368"],["/2018/04/27/大创项目总结/index.html","9af02b0d3452cf79975945f8a18416da"],["/2018/05/07/vscode-配置c-c-环境/index.html","d5979eb852a30dc01b20c1cf8412b89a"],["/about/index.html","e583be46b05a0a2b0dbed9d5ddcb5a4a"],["/archives/2016/04/index.html","d5c29ef2831ca84a1512f61924dc2671"],["/archives/2016/05/index.html","457c3e5882719f0411baddc8e02add5c"],["/archives/2016/07/index.html","bcb0d5a35f421f0deab376bebc3265f8"],["/archives/2016/08/index.html","11d9fcce78b857a6d7957df95435306a"],["/archives/2016/09/index.html","9a17d783c19cee431c1b993ac24aa2bf"],["/archives/2016/10/index.html","0f685d8f1d35a3fce98f2ad06f56329c"],["/archives/2016/11/index.html","cd9f6a8b800af78e9ca730886c5d89c9"],["/archives/2016/12/index.html","96bcd8e626edc73043843a3bfddc8804"],["/archives/2016/index.html","943ca47797d958c7ff1fe17159ebf0ed"],["/archives/2016/page/2/index.html","6601a4632cb59e21b92698cbe31b4e8a"],["/archives/2016/page/3/index.html","76707132b4507bcd143896bd02529657"],["/archives/2017/01/index.html","c63b7dfe293e479b80a7721020cc125d"],["/archives/2017/02/index.html","c3add513c1fa4a7905b90117d6d3eba9"],["/archives/2017/03/index.html","c713486b311a3e246931514818f7b614"],["/archives/2017/04/index.html","ab9d2871ca7543a27a8d885fd275fbc6"],["/archives/2017/05/index.html","164c0884a81ea9c0199c28039725ed57"],["/archives/2017/06/index.html","e9cb0888af8fc74a9b72bf1d5a8eec3a"],["/archives/2017/07/index.html","69b3afedb5a6f4aad157c369e4001e4f"],["/archives/2017/08/index.html","ffcb12a80af68455a2ea50bd652a9f5d"],["/archives/2017/08/page/2/index.html","d43ba997553c00ddf25ce8c4880b7d72"],["/archives/2017/09/index.html","7f5d631c2a9a041c88b3631b1b9b0e33"],["/archives/2017/12/index.html","70a992860268e06f5780206c2331f57d"],["/archives/2017/index.html","43fca7085532cdd362b047c55fe722e5"],["/archives/2017/page/2/index.html","37fc1cdb79a10f80036e6a0147f51237"],["/archives/2017/page/3/index.html","6f674eccc780d683eca06217982d359f"],["/archives/2017/page/4/index.html","f820ca1c11a54773f1e4344389757ca6"],["/archives/2017/page/5/index.html","83420a8f4bdcbbb586289961f1ff6541"],["/archives/2018/01/index.html","f2a758acf853225edde08bf7cdcc6f1e"],["/archives/2018/02/index.html","43debf024700745ba7759ded4e947bb1"],["/archives/2018/04/index.html","fa9efe42653b28cb06e1e716ab122f6d"],["/archives/2018/05/index.html","46ca3da1c7c28b46c240952556319625"],["/archives/2018/index.html","4b65db88bc419b9449d4e52e980dcc2c"],["/archives/index.html","f2044f4f844747906fcda9a02291f20e"],["/archives/page/2/index.html","1cfdb690fac4e67f3d0ee3b919eb943c"],["/archives/page/3/index.html","6d4bd72ca4e0a645c1b8da2ef88d4a0d"],["/archives/page/4/index.html","cf0392668538c4cef18e5b337baf4d6e"],["/archives/page/5/index.html","0cda12d43d04704ae9aa5561efc5c644"],["/archives/page/6/index.html","e06fc540e14e23d8c9426916e86aa9cb"],["/archives/page/7/index.html","5e1f7895acc849a568d2bc281e9170b7"],["/categories/index.html","6afdb95b2eda68e80413d5fd03ee4957"],["/css/main.css","a6b59cbd4e8793edb651c3e6c6533b32"],["/images/AliPayQR.png","3f579739acbea428bbfd6caf401633a9"],["/images/WeChanQR.png","3273049e528d5c7c8d6465feeb6f0f37"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/alired.jpg","e5aae0d59e9c1ab261380536793de248"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.png","a5418ef792411cc48b8a04be1412a806"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/icons/icon-128x128.png","c47d5e504c2200f7a8e49c241d117803"],["/images/icons/icon-144x144.png","332e58a8a22f3c61a89714f92f9cd599"],["/images/icons/icon-152x152.png","75f68482ee40ed7d65cbb7eaa948b122"],["/images/icons/icon-192x192.png","ef1632bde4bbfed422aa81d1a0fec31b"],["/images/icons/icon-384x384.png","c4b609968f279a561d729f0eac182296"],["/images/icons/icon-512x512.png","7f33f6399d6441456c90d56b16a81cb2"],["/images/icons/icon-72x72.png","b37c23b70ad209836f23ccf77a43ec6a"],["/images/icons/icon-96x96.png","c79c31a21bf8646cd6e4002df0c2db89"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","d94fc47ac6ac12cc2e72e74342dd990c"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","a7af8f923c31f6e47c11afe673aee5fd"],["/js/src/post-details.js","9a53fef7381270bb8c96a611d52ebc04"],["/js/src/schemes/pisces.js","aa788a9a68ff8d352b7b6e3dbb4ace96"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","ecade23d7bb77f013893186d56a92059"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","3da4eef253db4019ff4d8b6bf829b400"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","bb4f88d9fd9264173208a0a51c9483af"],["/lib/font-awesome/css/font-awesome.min.css","b7f16ad3c730d60ba7282b3028bff537"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","09e7ffab7f366ac5b110397fd0372388"],["/page/3/index.html","fd9f1730d82b98d0efb68bcbc198e7ca"],["/page/4/index.html","d3bfb25350e7a7584ba33ebe0d69881c"],["/page/5/index.html","75e9fa63092097181f20db7f9fbed87d"],["/page/6/index.html","d5fce5021dad1db6af68ae8dd745f75f"],["/page/7/index.html","746485d54dd68e37fdc5c02ea06ecfb0"],["/tags/Array/index.html","ae86b4e9bf84f90081994ac68f370724"],["/tags/Bit-Manipulation/index.html","4b7ddaca976bf1d3cac4165bbe6eb96c"],["/tags/Brainteaser/index.html","c4d8c165638e5c8a23b0c11d00bb7f0f"],["/tags/GitHub/index.html","3011a5ebdf8fcdab137a288987bdf1de"],["/tags/Hash-Table/index.html","0fe442c51d4b53c7b5ee5542b27d2459"],["/tags/LeetCode/index.html","79797ed4b362c6a598c90252c39b07d2"],["/tags/Math/index.html","a840d9e2b9d01a7138f71998fd949d62"],["/tags/Maven/index.html","311a04225929524401ba6ff544d10dda"],["/tags/Python/index.html","225f576bd696a77fc88dd25288b8e00e"],["/tags/RabbitMQ/index.html","fd242530662d3c8248f0e30ce20b43d7"],["/tags/Spring/index.html","368467d2bd7f7d797a5d8586a1ac2fe8"],["/tags/SpringBoot/index.html","223b68f7bee04e7c35ea32d7b80bcf7e"],["/tags/Stack/index.html","8e6916e2b798b8ae71abed99f70a743e"],["/tags/String/index.html","b7e64175969581d42eca4057255f0676"],["/tags/Tree/index.html","dfcbbd882aad57e7e1a83b2c90dca3dc"],["/tags/Vim/index.html","cb335d562161ef349bc1293c5f2e8f17"],["/tags/android/index.html","fc079eeb1733ebbeb42a64738353f5e6"],["/tags/index.html","086aeecd1e30950e650fbe801bc50039"],["/tags/java/index.html","43276e5091a48dde36aec71dc805bd32"],["/tags/java/page/2/index.html","0115c7fabdea59e48d9b6caafbd7fd39"],["/tags/kotlin/index.html","7f5aed27aedfce78bd96e31fa7f658e8"],["/tags/windows/index.html","da2d190a05c897dd191d8d0401278909"],["/tags/加密/index.html","f980ff1c4555f2881bf0f8ec97cdb3e7"],["/tags/博客/index.html","120e5058c4a3c774b096f656213528ce"],["/tags/工具/index.html","69556fd7eb1a8570e296c286a73986b7"],["/tags/推荐系统/index.html","87b5e07ace061afeaa4008493fc22d83"],["/tags/测试/index.html","9832e2a73ba53c138b67ee9978ad476c"],["/tags/生活/index.html","802f8e95715044733d037ee58f2b6f20"],["/tags/算法/index.html","2d6d9933b1c4be2fcbaa116e572d457b"],["/tags/蓝桥杯/index.html","c6016ea4ad900a9e232659de5bf6fd67"],["/tags/译文/index.html","87a33c37b252b79f6a03937ed690b794"],["/update/index.html","f7f1a7daeea13016be2023ba59f44d65"]];
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







