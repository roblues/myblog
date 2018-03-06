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

var precacheConfig = [["/2016/04/20/我一直都在/index.html","7fcce95ab2f710e2da7f420ad6a6b846"],["/2016/04/21/清除右键无效项/index.html","e91c4044bff67f080601d2b58a77805c"],["/2016/04/21/第一次参加蓝桥杯感受/index.html","6c6b3dbef19d639d9a4df923becf21d7"],["/2016/04/23/LinkList特有的方法/index.html","020fbd7cb34d72e68b1325d451a8126f"],["/2016/04/27/大学？大学？大学？/index.html","ffc6c7054bb22d3c94015a3edaf069e2"],["/2016/05/03/GitHub-for-Windows使用教程(一)/index.html","09706a2be314b3cf3118cbf83cc1d158"],["/2016/05/13/GitHub-for-Windows使用教程(二)/index.html","57b431309b9720410d92a71b2ed693b3"],["/2016/05/15/GitHub-for-windows使用教程（三）/index.html","0155d8c61fd9849f914a27e1d2180a54"],["/2016/05/23/Java集合遍历/index.html","f99faebec35f669e4dbf4082814933a4"],["/2016/07/04/Activity启动的两种方式/index.html","9183f31cda9d422d9d53410b49928aef"],["/2016/07/17/如何提高Android虚拟机的运行速度/index.html","085b3db4bee148d8788501b45624dd3d"],["/2016/08/05/FlaotActionButton详解/index.html","5928e5d10ce8b7ad25a53aba3a37f445"],["/2016/08/05/底部导航按钮/index.html","14a08c7bb0bb16a6d5eca7f84a277532"],["/2016/08/09/正则表达式/index.html","b7cb8e9d4da573f5724aedb617fa3187"],["/2016/08/13/Git基本操作/index.html","006d5da122c185b0c288ec0e44a961c8"],["/2016/08/28/GitHub-for-Windows使用教程（四）/index.html","dbade9e7c4b3fb6cf436a4b5c227ac21"],["/2016/09/11/String源码剖析/index.html","66c055736bac1e4c55a0d4991aa74bf6"],["/2016/10/25/StringBuilder源码分析/index.html","d0f50c9188ad0cffa54575247e1594ad"],["/2016/10/27/MD5加密/index.html","42131f23a61b012bdf8ba842d37b3002"],["/2016/11/27/ArrayList源码分析/index.html","bd83837fae4ce3c8f93d05761c361882"],["/2016/12/30/2016年终总结/index.html","eb3e18911ea0cdc068e28a383eea37f5"],["/2017/01/10/Maven入门/index.html","d73ca7038edef38fd6d397a70fa13612"],["/2017/01/19/Junit单元测试/index.html","2422c5d4a9aa9372253b52ecbcad8be7"],["/2017/02/08/Spring学习-一/index.html","942b23b8c1a9ecca3015de0183befe1e"],["/2017/02/19/Log4j使用/index.html","89e3afda4b7905f5815a5fc2624323ba"],["/2017/03/02/Spring学习记录-二/index.html","f796034ba406a658560eee0c3b6b8100"],["/2017/04/03/python爬取斗鱼图片/index.html","5f13526012c3b070cf1845929b756545"],["/2017/04/04/计蒜客蓝桥杯模拟赛-5-试题/index.html","55baa9159bbf5fce62b981b2e8a95895"],["/2017/04/15/2017蓝桥杯/index.html","0ad97402c88653fff5abd54c67fa4e65"],["/2017/04/20/博客一周年/index.html","0d993837f456440a520bd4f70cabfb9b"],["/2017/04/30/Git教程及使用经验/index.html","1687a655922c2f815eeeff88312d1cef"],["/2017/05/08/第一个-Android-项目/index.html","c294696446220180637926c807ed4629"],["/2017/06/22/python-实现微信打飞机/index.html","9f2c8395b1cd62d0686aa84ba34ec4da"],["/2017/07/23/vim-基础学习/index.html","eace4292fba950efd0278737f14fcf0e"],["/2017/08/01/Hamming-Distance-问题/index.html","f593702de1aad3f88f34b6c45b4e0024"],["/2017/08/01/LeetCode-Array-Partition-I-561/index.html","c4092aa09483659e8f495696fdc1742d"],["/2017/08/01/LeetCode-Two-Sum-1/index.html","4c7ed34d871392935ee1056c10ccad49"],["/2017/08/02/LeetCode-Distribute-Candies-575/index.html","2a3825e443d24170d28bdfff8fd1dabf"],["/2017/08/02/LeetCode-Keyboard-Row-500/index.html","74402ce40664bed24bade177d9fa493b"],["/2017/08/02/LeetCode-Number-Complement-476/index.html","5ea2f97c98bc57fa989148e54bd08d9e"],["/2017/08/02/LeetCode-Reverse-Words-in-a-String-III-557/index.html","4f081709ea18d09b641d22546aa6adc7"],["/2017/08/04/LeetCode-Fizz-Buzz-412/index.html","ec9b6b3786408bddb2a315198bcb0959"],["/2017/08/04/LeetCode-Merge-Two-Binary-Trees-617/index.html","7009308f895feaa14e2ba8dd2ad6ae19"],["/2017/08/04/LeetCode-Reverse-String-344/index.html","56dfa3fa259807f7bc607c76f8618a8f"],["/2017/08/08/LeetCode-Island-Perimeter-463/index.html","81d14c5ca11f80b8a3ee2df6ba4e22f5"],["/2017/08/11/kotlin-初步学习/index.html","253ef80e559104a9d0e0fcb43183d240"],["/2017/08/12/Kotlin-扩展函数-属性/index.html","d92eaa9a00aea6c7eb96582b3a6b8b83"],["/2017/08/13/LeetCode-Next-Greater-Element-I-496/index.html","9d27484430ce0352af6bf62233e42b8d"],["/2017/08/13/LeetCode-Nim-Game-292/index.html","5efe93f8f49da94701a2eacf8d5d839b"],["/2017/08/16/LeetCode-Judge-Route-Circle-657/index.html","2fd3a7e8633f8d9dfb1fece776ccad45"],["/2017/08/16/LeetCode-Longest-Uncommon-Subsequence-I-521/index.html","930e90ce3441e8669342dded4ecd1842"],["/2017/08/27/LeetCode-Move-Zeroes-283/index.html","d8090433dac8293b715eaba43d5eb9eb"],["/2017/08/27/LeetCode-Single-Number-136/index.html","ec63a633bd10ef9d7a1efa84cddf0917"],["/2017/08/28/LeetCode-Reverse-Integer-7/index.html","bd26062f3df0a012d1a4d69cb7c2eaf7"],["/2017/09/01/协同过滤算法/index.html","07b58380c34518c000bdd6b5d315a18d"],["/2017/09/10/LeetCode-Add-Digits-258/index.html","19bbf24965c79a569c0f6208b1af9c24"],["/2017/09/10/LeetCode-Find-the-Difference-389/index.html","53c22dd33c31d239a3854eb481fc71c6"],["/2017/09/14/LeetCode-Length-of-Last-Word-58/index.html","aa1cfd0b6b15b9718753b1d4d0e9144d"],["/2017/10/15/大创项目总结/index.html","2667dbfeddba866d688ca369e9dae7f6"],["/2017/12/01/LeetCode-Binary-Number-with-Alternating-Bits-693/index.html","fb6d64aa6d391a2ef36a7104c1a7c61e"],["/2017/12/01/LeetCode-Number-of-1-Bits-191/index.html","8eac8a4a0409c0029ed7bbe693d5682b"],["/2017/12/01/LeetCode-Self-Dividing-Numbers-728/index.html","bc709244771be471c15cbc99c007fe48"],["/2017/12/02/Kotlin-1-2-平台之间共享代码/index.html","14efee7fcb75e228dfe57f519a1f705b"],["/2017/12/23/Kotlin中Collection一些语法总结/index.html","82f0cfb7cfe12cca075041a03185dba5"],["/2017/12/28/一次神奇的课设验收/index.html","bf48fcfa87b358503ebc3cbc5e0e4a77"],["/2018/01/01/2017年终总结/index.html","95137f8962c016d101171e41c49e33de"],["/2018/02/23/RabbitMQ-和-Spring-Boot-的集成/index.html","0902ac4fca46265c6b052b6497e4ad86"],["/about/index.html","98a46bea1f4663e644658a083362a59c"],["/archives/2016/04/index.html","21d487a575b8a8c38c0b360bcc62b75d"],["/archives/2016/05/index.html","5191d60c20d527f5c93826f4122edce7"],["/archives/2016/07/index.html","f6b2299c2f9bb3f5678782cfdab461f7"],["/archives/2016/08/index.html","e7ece2b9fb9d770c4b4dc1771b8c7d86"],["/archives/2016/09/index.html","f2781c9d6b94c1ef0bf1dc1e356b0633"],["/archives/2016/10/index.html","083e6c19b91141fdc9df2fc89680345f"],["/archives/2016/11/index.html","08635e70a448e9b5ede8c5889fd5ddad"],["/archives/2016/12/index.html","e544b1280bbc87cf101154970190c4aa"],["/archives/2016/index.html","435d339e41e57bb6399a09039a818c36"],["/archives/2016/page/2/index.html","19bf22b6e5aa4cfb0d2273160c9ad93c"],["/archives/2016/page/3/index.html","69bc900d305d599ff61300ca337b34f9"],["/archives/2017/01/index.html","a84b0edfb31861c4e8fdd4011a089f2c"],["/archives/2017/02/index.html","8238b5cdce5fba0a9f7f2ee75c63cfe9"],["/archives/2017/03/index.html","1753d612134b4c9aeca4ffa3e8db990a"],["/archives/2017/04/index.html","bc0cd9647d3515f21f4a2b54424753da"],["/archives/2017/05/index.html","04886e5b886b45c5495a6f1e40612f6a"],["/archives/2017/06/index.html","c9310db5415d05b9ab798819833578e1"],["/archives/2017/07/index.html","3810dcc02a64949f61091beb7eb6d1f6"],["/archives/2017/08/index.html","b02026b188d8865b3d835f0e4d8c4e1a"],["/archives/2017/08/page/2/index.html","1ab7b5d901b2c39d8e6c887ce1922a13"],["/archives/2017/09/index.html","561f2f78f16ac45a68ebab15cf465cee"],["/archives/2017/10/index.html","3c3ce443360e2c8554804625dc5e0251"],["/archives/2017/12/index.html","7a52d0987b950a127ed034b1e9b854ce"],["/archives/2017/index.html","6016ee217cbdc360c6bb8a36819f65a7"],["/archives/2017/page/2/index.html","fe115f65b44d28896af511309205d01f"],["/archives/2017/page/3/index.html","6398ee1ef7c4f6d06465572edcef604e"],["/archives/2017/page/4/index.html","7a62669e44bcd6251589aa55a7127964"],["/archives/2017/page/5/index.html","2658892755559661806feabf6552c2fc"],["/archives/2018/01/index.html","7c98aefd89a84212cc078b0c6f515aba"],["/archives/2018/02/index.html","501adeafa234188427e279da27526342"],["/archives/2018/index.html","0a43d2614028ee40d5f39490ab1a6638"],["/archives/index.html","818a4f0cfed9a3ee30e51d4245e84613"],["/archives/page/2/index.html","82f77367d3c4b64e345282a303ade96c"],["/archives/page/3/index.html","68fed05c6991ed3e8a9de850c3dfd849"],["/archives/page/4/index.html","6538bc95499f3c22e37eb5473eb38e04"],["/archives/page/5/index.html","ab0e9b6aabbfd6473c8fccc68d608358"],["/archives/page/6/index.html","394dbf709030bd771e358449eb58b9e8"],["/archives/page/7/index.html","f04e27c11afcd687bfce70ca903dd401"],["/categories/index.html","c0cda13dce3238f22da6d51647a71da8"],["/css/main.css","7e723cdcb3d9815bdb3bc74331510c3f"],["/images/AliPayQR.png","3f579739acbea428bbfd6caf401633a9"],["/images/WeChanQR.png","3273049e528d5c7c8d6465feeb6f0f37"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/alired.jpg","e5aae0d59e9c1ab261380536793de248"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.png","a5418ef792411cc48b8a04be1412a806"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/icons/icon-128x128.png","c47d5e504c2200f7a8e49c241d117803"],["/images/icons/icon-144x144.png","332e58a8a22f3c61a89714f92f9cd599"],["/images/icons/icon-152x152.png","75f68482ee40ed7d65cbb7eaa948b122"],["/images/icons/icon-192x192.png","ef1632bde4bbfed422aa81d1a0fec31b"],["/images/icons/icon-384x384.png","c4b609968f279a561d729f0eac182296"],["/images/icons/icon-512x512.png","7f33f6399d6441456c90d56b16a81cb2"],["/images/icons/icon-72x72.png","b37c23b70ad209836f23ccf77a43ec6a"],["/images/icons/icon-96x96.png","c79c31a21bf8646cd6e4002df0c2db89"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","ac94922a8a949f63f4ea9df6d021ffec"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","a7af8f923c31f6e47c11afe673aee5fd"],["/js/src/post-details.js","9a53fef7381270bb8c96a611d52ebc04"],["/js/src/schemes/pisces.js","aa788a9a68ff8d352b7b6e3dbb4ace96"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","ecade23d7bb77f013893186d56a92059"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","3da4eef253db4019ff4d8b6bf829b400"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","bb4f88d9fd9264173208a0a51c9483af"],["/lib/font-awesome/css/font-awesome.min.css","b7f16ad3c730d60ba7282b3028bff537"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","0e918101ac4196b6b6347e5dfb85fce7"],["/page/3/index.html","8b75dd808cbcb431c01562b1d27c71b6"],["/page/4/index.html","08cb5b81ee2846722a2938ddd371d997"],["/page/5/index.html","9564aced3a6a752b88b78f4d120efcbf"],["/page/6/index.html","60e6059e3afdfd860d560dcc85f526b1"],["/page/7/index.html","1e40fe1167e1a6e83f9f6a264fddb437"],["/tags/Array/index.html","e8e8c208e5567a3d313fddee104551b6"],["/tags/Bit-Manipulation/index.html","4acfd9336a565c162cd82f461fb71e17"],["/tags/Brainteaser/index.html","5895bbc43de267c4019344d8da515a2e"],["/tags/GitHub/index.html","1c606ef5f853f9940d52a544c347f80f"],["/tags/Hash-Table/index.html","73c65c7850b226924b0d068213827b52"],["/tags/LeetCode/index.html","1d2e3c2cfcf27b9264e9e8d060f1ad2d"],["/tags/Math/index.html","3a05ac8f4f02336f0c9d5279826571d4"],["/tags/Maven/index.html","73c46d55bf8f7f553b159ae7e6d5b7a0"],["/tags/Python/index.html","73675c5523f45088625944c9280148dc"],["/tags/RabbitMQ/index.html","0e0b8b557593c352279d9d5604cc67a8"],["/tags/Spring/index.html","3ae262c36a7e58df78847fa815f3e865"],["/tags/SpringBoot/index.html","ce3826027864e97cab83fe2a4225e17f"],["/tags/Stack/index.html","3bc3e3179cc413635a360e43e19cd4fb"],["/tags/String/index.html","10700910f21724944a96af067357d0bf"],["/tags/Tree/index.html","078945dc71a0ef3ed5dced489d68dac5"],["/tags/Vim/index.html","93374110dd6401ae71635bb4c26a83bc"],["/tags/android/index.html","f2fd74db75fc577420efd9e33e62ccdf"],["/tags/index.html","0dd770a799ddc8f30564c575724d9fa7"],["/tags/java/index.html","7258ca841067e28c5c198df69728f029"],["/tags/java/page/2/index.html","b84223e0d0bc36a4f8881c81638f7e46"],["/tags/kotlin/index.html","5bef093440abdc342cc269c1a1fdaaca"],["/tags/windows/index.html","de7acc866e33e2e9a802c435a1245975"],["/tags/加密/index.html","93ea38a15f7248d55b8bd2b44b00f647"],["/tags/博客/index.html","5388875924d0f400e2ea540c5dbc48e6"],["/tags/工具/index.html","99f9efdb55ac770d46514d256e15a35b"],["/tags/推荐系统/index.html","364264c11ebbae48200cf56e7b14b498"],["/tags/数据库/index.html","d37e168dfd81ed2538d0dee9896536eb"],["/tags/测试/index.html","10398a70a89a8badea3b7734aca2d8da"],["/tags/生活/index.html","5c04084b17d64f7d1a299284bc97fb07"],["/tags/算法/index.html","c62bafc02aa5f6511961f30e00dc7cdc"],["/tags/蓝桥杯/index.html","95de416d1e7c623fe599728f4a85a0cb"],["/tags/译文/index.html","36125cd38925a9a7e7ad8992186395ae"],["/update/index.html","632cbbe13b87937f45913f7a0b2985db"]];
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







