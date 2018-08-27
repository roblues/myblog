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

var precacheConfig = [["/2016/04/20/我一直都在/index.html","8432db88877b58b1ce58e3f35bdaab12"],["/2016/04/21/清除右键无效项/index.html","4cca602a6c341dbc5aecaac733ad5f7f"],["/2016/04/21/第一次参加蓝桥杯感受/index.html","6279239cf514671b07080140ea767095"],["/2016/04/23/LinkList特有的方法/index.html","1722ed1bd0c5671e2d9ca713550d27e6"],["/2016/04/27/大学？大学？大学？/index.html","69a2a89d85bc0bb64d2febc78a129764"],["/2016/05/03/GitHub-for-Windows使用教程(一)/index.html","c77add310fdfc88027b2b00e2da23ee9"],["/2016/05/13/GitHub-for-Windows使用教程(二)/index.html","3c7e226a54ed2875ddd72653e001b3e4"],["/2016/05/15/GitHub-for-windows使用教程（三）/index.html","216d83c004e58c86ec25a79ce8e17708"],["/2016/05/23/Java集合遍历/index.html","e544c69ce254b4d47c3e89df6ccb8a99"],["/2016/07/04/Activity启动的两种方式/index.html","c566a82ab6fe7d32631d9d53f581fe29"],["/2016/07/17/如何提高Android虚拟机的运行速度/index.html","497b904cc0dae9d0dd266e6f11db4bf9"],["/2016/08/05/FlaotActionButton详解/index.html","10754178c3b890cd6f3f2f0ffe6ca467"],["/2016/08/05/底部导航按钮/index.html","067d8ee4f5dfeaa02c1c6d9a79841784"],["/2016/08/09/正则表达式/index.html","fb9d15bde6b74b4ba8a5f0ba6db3bba8"],["/2016/08/13/Git基本操作/index.html","4dc793a48548fbc4651386cdd22c2346"],["/2016/08/28/GitHub-for-Windows使用教程（四）/index.html","e0481f9166c674920b365636984361f9"],["/2016/09/11/String源码剖析/index.html","13b92163e42aac23aa4bf8a4409eeeb2"],["/2016/10/25/StringBuilder源码分析/index.html","6238a200dd6eed7561c18a631ac3f518"],["/2016/10/27/MD5加密/index.html","33556149099ca26bfe1d4acac3d94f3a"],["/2016/11/27/ArrayList源码分析/index.html","48c5ebfb870b6c227b66f1f799207334"],["/2016/12/30/2016年终总结/index.html","e85f5669d82e4ad0773aff8a190b4d76"],["/2017/01/10/Maven入门/index.html","3288d319d06e8c70207988711b3d9869"],["/2017/01/19/Junit单元测试/index.html","aa99d80bd005693c57859f5a19f1d729"],["/2017/02/08/Spring学习-一/index.html","d1345aaa497e2b0ac43cad4298825aa8"],["/2017/02/19/Log4j使用/index.html","be0e74a72243aa4018a62251635f67bf"],["/2017/03/02/Spring学习记录-二/index.html","33ed36a3ff512ee9d0b77dc48396f2fc"],["/2017/04/03/python爬取斗鱼图片/index.html","d458ebd0fa76a20229dae2794344b216"],["/2017/04/04/计蒜客蓝桥杯模拟赛-5-试题/index.html","e27da6483c68258b572913ac9fed697b"],["/2017/04/15/2017蓝桥杯/index.html","318044fc773c55e81d3548d666d1ddf3"],["/2017/04/20/博客一周年/index.html","877d7ad4d11edba6ac5d9c18153b4ed7"],["/2017/04/30/Git教程及使用经验/index.html","9128f8144585152a1227dee550ba4b24"],["/2017/05/08/第一个-Android-项目/index.html","8e8c46ae6163d7954fca27af6e5ecef7"],["/2017/06/22/python-实现微信打飞机/index.html","0eb3d5f115eee284c80b01358ff60223"],["/2017/07/23/vim-基础学习/index.html","cffcd168dd92a5bfca6215529bd57ea5"],["/2017/08/01/Hamming-Distance-问题/index.html","1088950031b9b58f5fbd533d573e2559"],["/2017/08/01/LeetCode-Array-Partition-I-561/index.html","91c0b346bad84daf28c306c5658c6a0f"],["/2017/08/01/LeetCode-Two-Sum-1/index.html","7c40c1c21fc0ab1b19ee8387ce12e9d9"],["/2017/08/02/LeetCode-Distribute-Candies-575/index.html","42827c4a9568505559fc5e3fb9e96fe6"],["/2017/08/02/LeetCode-Keyboard-Row-500/index.html","7f9fa8f73d62eef7aafed98e16197d5c"],["/2017/08/02/LeetCode-Number-Complement-476/index.html","632cf3a71a9c70ff1e243801bbc3062b"],["/2017/08/02/LeetCode-Reverse-Words-in-a-String-III-557/index.html","27557d5e4402e0379b9af98052f7f18f"],["/2017/08/04/LeetCode-Fizz-Buzz-412/index.html","b31a2ceba86a48dd4bf2a9c29020e565"],["/2017/08/04/LeetCode-Merge-Two-Binary-Trees-617/index.html","a78a7fbb8339f5ef5a38f77d8e8a33e0"],["/2017/08/04/LeetCode-Reverse-String-344/index.html","9eba64458b8e15baeb2a20762a690d7c"],["/2017/08/08/LeetCode-Island-Perimeter-463/index.html","cb11a8df1d2114e8817a1aff81449589"],["/2017/08/11/kotlin-初步学习/index.html","35b1eaa3f74da321fe40ef1275503ddf"],["/2017/08/12/Kotlin-扩展函数-属性/index.html","2e43d23bc25b2d2a05aca7304521b70b"],["/2017/08/13/LeetCode-Next-Greater-Element-I-496/index.html","867d7e8ae86bcbedf1a8dd4300e75a9b"],["/2017/08/13/LeetCode-Nim-Game-292/index.html","d84f1f91ec3a0d5a785e1355521fb808"],["/2017/08/16/LeetCode-Judge-Route-Circle-657/index.html","c8b262d7eb194339213d7a2794fb68c8"],["/2017/08/16/LeetCode-Longest-Uncommon-Subsequence-I-521/index.html","f2797f4efb973e0efe13348068dd2b69"],["/2017/08/27/LeetCode-Move-Zeroes-283/index.html","6a1d1f44e4a2590227fd604500c090eb"],["/2017/08/27/LeetCode-Single-Number-136/index.html","e5e19be69146f9f8eb9c6ac1b46885ac"],["/2017/08/28/LeetCode-Reverse-Integer-7/index.html","0ae13f625dc240808caeac5e242eea65"],["/2017/09/01/协同过滤算法/index.html","f892f8f31fce31316eacb7d5908ea8a4"],["/2017/09/10/LeetCode-Add-Digits-258/index.html","22d881b1b45b7ae8732caac57899e478"],["/2017/09/10/LeetCode-Find-the-Difference-389/index.html","9f8125bef03c482c2eb8db03f184f34f"],["/2017/09/14/LeetCode-Length-of-Last-Word-58/index.html","a4eee13a33a9198652b922333b5e3171"],["/2017/12/01/LeetCode-Binary-Number-with-Alternating-Bits-693/index.html","a6bcbea3241f80420d3dfb655d95f092"],["/2017/12/01/LeetCode-Number-of-1-Bits-191/index.html","35d3a78fd5304d31d9c9796e8d912a09"],["/2017/12/01/LeetCode-Self-Dividing-Numbers-728/index.html","9afe49dd45e4994ccef096beeee53cc2"],["/2017/12/02/Kotlin-1-2-平台之间共享代码/index.html","eb11c0f93bdf119087f69385da82c27e"],["/2017/12/23/Kotlin中Collection一些语法总结/index.html","cf870d939d357c52c8de7af66432d6e0"],["/2017/12/28/一次神奇的课设验收/index.html","196d0c275419c2a1becd3f2e348384b3"],["/2018/01/01/2017年终总结/index.html","195c9fd78afda96c33321730d2d7d284"],["/2018/02/23/RabbitMQ-和-Spring-Boot-的集成/index.html","d1b338c4be3d6a8595e5d3b35f7780e4"],["/2018/04/27/大创项目总结/index.html","8b9d6442c4920fa551e14d57d30ba2c4"],["/2018/05/07/vscode-配置c-c-环境/index.html","8a3c5b03110a71a20fb4612e44abd39b"],["/2018/05/25/Apriori算法/index.html","ede4da6805593a0c8a5d6cfdcddd93e0"],["/about/index.html","ad60f617de66b167d581562ef44b7abb"],["/archives/2016/04/index.html","bb9f9c667e9c3b8a36a0498b023a31b7"],["/archives/2016/05/index.html","c15dc0864315a7ca18bd1733314fd97a"],["/archives/2016/07/index.html","952caa029667ed8186decd62aaa139a3"],["/archives/2016/08/index.html","603dfb0048e9a14dcca013ca8082a0f6"],["/archives/2016/09/index.html","73c1018fc652497d297330ba2455ae51"],["/archives/2016/10/index.html","466f022eaf52bf7fb6565e2de52d59c8"],["/archives/2016/11/index.html","8e19e89a5685c7ba0a2e9dc754f65531"],["/archives/2016/12/index.html","cb8c2e06ef8d2bbc946bc35c6b7f421b"],["/archives/2016/index.html","fb0bed6abca755ffaf2c95bd66aafc6d"],["/archives/2016/page/2/index.html","3c2133136245c022fe37c22652c50164"],["/archives/2016/page/3/index.html","1523ddee7e24ff2988e3daf562f7657e"],["/archives/2017/01/index.html","218455b637008371312017d83f3f0281"],["/archives/2017/02/index.html","f2ce63d3e0cb955277b0ab0fb1f3ee70"],["/archives/2017/03/index.html","5593706b6ac21a062385597f9562afa1"],["/archives/2017/04/index.html","61e64ab1427217e0d8993384da10b66d"],["/archives/2017/05/index.html","714eac91bf3982216e4f23cb85436e0f"],["/archives/2017/06/index.html","78792ceaada1f1e47c24c1f7cc0eac7c"],["/archives/2017/07/index.html","37b398fd767680d33dd2baec90f2a030"],["/archives/2017/08/index.html","8ee4f0fda7bd402231500fe0bdfeccc2"],["/archives/2017/08/page/2/index.html","501412a8e1f30e4de98ae817d3a80228"],["/archives/2017/09/index.html","ead28c5ebaffee94b9a0e74172f65454"],["/archives/2017/12/index.html","0f02c16b36e9a2d3d5e7f60b65cafcfe"],["/archives/2017/index.html","3cd6a5969fe17117ed142a56b5721436"],["/archives/2017/page/2/index.html","b82eaf30c065594aa8dc9b2ad8155d67"],["/archives/2017/page/3/index.html","4a823f0ddf0dcc0a2be88a04b580da98"],["/archives/2017/page/4/index.html","2e09066fc69467ef76b1d6e4dda304c6"],["/archives/2017/page/5/index.html","e9bc839be3512a0178b358a86b37ed6d"],["/archives/2018/01/index.html","dccb62b5250453f89547876c69564f14"],["/archives/2018/02/index.html","70b7b662dded7002879827780e679e0e"],["/archives/2018/04/index.html","ff9d805587526b5d2d774a29aa7bb68d"],["/archives/2018/05/index.html","c3419d7b4878f74eb8a849ff36d0295d"],["/archives/2018/index.html","143d912ebd7e8dc67d0e088d62e10049"],["/archives/index.html","5285a4b28084c66f82735ca8a71fe636"],["/archives/page/2/index.html","4cbbbf07dc17b9bf192b6db31b3b731f"],["/archives/page/3/index.html","3e47651b3366b428c8369bc43825ba6c"],["/archives/page/4/index.html","be15df015169f78e911cf99b413b8dc4"],["/archives/page/5/index.html","523337858280d2e059c7712659590564"],["/archives/page/6/index.html","8c8b0b054a20238da0d739716b9d67bc"],["/archives/page/7/index.html","c2391c748e4465e6916cf2b177705690"],["/categories/index.html","f94d9465333e5dcd657cea65e997d178"],["/css/main.css","55ec720caa93687f3c6276343b524076"],["/images/AliPayQR.png","3f579739acbea428bbfd6caf401633a9"],["/images/WeChanQR.png","3273049e528d5c7c8d6465feeb6f0f37"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/alired.jpg","e5aae0d59e9c1ab261380536793de248"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.png","a5418ef792411cc48b8a04be1412a806"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/icons/icon-128x128.png","c47d5e504c2200f7a8e49c241d117803"],["/images/icons/icon-144x144.png","332e58a8a22f3c61a89714f92f9cd599"],["/images/icons/icon-152x152.png","75f68482ee40ed7d65cbb7eaa948b122"],["/images/icons/icon-192x192.png","ef1632bde4bbfed422aa81d1a0fec31b"],["/images/icons/icon-384x384.png","c4b609968f279a561d729f0eac182296"],["/images/icons/icon-512x512.png","7f33f6399d6441456c90d56b16a81cb2"],["/images/icons/icon-72x72.png","b37c23b70ad209836f23ccf77a43ec6a"],["/images/icons/icon-96x96.png","c79c31a21bf8646cd6e4002df0c2db89"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","c87461bec6f5915cf8d8324e17ab37cf"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","a7af8f923c31f6e47c11afe673aee5fd"],["/js/src/post-details.js","9a53fef7381270bb8c96a611d52ebc04"],["/js/src/schemes/pisces.js","aa788a9a68ff8d352b7b6e3dbb4ace96"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","ecade23d7bb77f013893186d56a92059"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","3da4eef253db4019ff4d8b6bf829b400"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","bb4f88d9fd9264173208a0a51c9483af"],["/lib/font-awesome/css/font-awesome.min.css","b7f16ad3c730d60ba7282b3028bff537"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","0a056bf21f53a7ee4afc1f955c4bae4d"],["/page/3/index.html","9e65313ec2e9b114648b3f44268c113b"],["/page/4/index.html","c742de4fa954053d88b0e3e6a9e29510"],["/page/5/index.html","6b5b573edf29a4ab2a9f96118b6d5c01"],["/page/6/index.html","3d031e0ea85f068f7b1a91898d623bc6"],["/page/7/index.html","249c766e719767644a4dec2058e89851"],["/tags/Array/index.html","bddbce32aff4f6b537ea136b8f3c887e"],["/tags/Bit-Manipulation/index.html","a070dd10735ff913c85063707414357e"],["/tags/Brainteaser/index.html","8eaf225a4470d5b9f9a2670d7f5f6610"],["/tags/GitHub/index.html","be97b4df2c3304818e9fe3c5f7cb82a0"],["/tags/Hash-Table/index.html","15baf9067629036cce1e0a94d4db5663"],["/tags/LeetCode/index.html","6fc894fc023077cc0c0dea580f776d31"],["/tags/Math/index.html","4e92c9d53080dcbc622fc1c3657eff30"],["/tags/Maven/index.html","dcd8ef75c6f136e3c8e73fbcb4154cbb"],["/tags/Python/index.html","85a065aa7793be587461e2143d1d5dbc"],["/tags/RabbitMQ/index.html","4038fa622be2cb5bc1eb3e79ab0e84c2"],["/tags/Spring/index.html","b1ce42ab9a056a5546af9c3184d30758"],["/tags/SpringBoot/index.html","e587ea961dd3ef240b7db7a6801f5b6e"],["/tags/Stack/index.html","381cfd9613feb6e90f66d7cd7c014246"],["/tags/String/index.html","48eb3d2f1568b690b5560424ef682fc0"],["/tags/Tree/index.html","5861a2c7d9b06332672097c3c3c6f060"],["/tags/Vim/index.html","ea4698546f0ee2a7edf0d38eae068b9d"],["/tags/android/index.html","914f5ac793323f4fcbd2768e7731f517"],["/tags/index.html","d2b195b7a9b3ffc8414c6f62400a6e00"],["/tags/java/index.html","95fd16972b5bfff1df5594327155338d"],["/tags/java/page/2/index.html","94e2f9bc05c1261e14ebd3aed64c9741"],["/tags/kotlin/index.html","435f4e8fecdedc4218276d0378f7d42a"],["/tags/windows/index.html","1d54c47d41284c3a9161dbd4e3f47105"],["/tags/加密/index.html","e9696faeb740b43e4f51edcc423079f9"],["/tags/博客/index.html","25ab7ee28839c118e93c9b58bf392e76"],["/tags/工具/index.html","fa67f71c931789a3cd8d435a593c96d2"],["/tags/推荐系统/index.html","c3b862571bbce8f63d05a5755650644f"],["/tags/数据挖掘/index.html","2cd03da445135699dc55d7f199927088"],["/tags/测试/index.html","5d1a48c2f2a122ff5dc863b505b50f8d"],["/tags/生活/index.html","9e3925f6da2dc7bec139643eee1dfaff"],["/tags/算法/index.html","8543649407790c6d3892c20863d70701"],["/tags/蓝桥杯/index.html","ff00af4d999eace81019a12665457f7e"],["/tags/译文/index.html","dd7b9dc7f5ca754ad7bfcabe24946b29"],["/update/index.html","d5a6515814d70289327be62b2e1ddeb7"]];
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







