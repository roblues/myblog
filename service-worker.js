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

var precacheConfig = [["/2016/04/20/我一直都在/index.html","328bc7add9c4b73009216f2258bd315c"],["/2016/04/21/清除右键无效项/index.html","f4ad8f513375ac40cfade06fcca0a882"],["/2016/04/21/第一次参加蓝桥杯感受/index.html","3a7637de1cc6804c4284dd9f2bfe16e6"],["/2016/04/23/LinkList特有的方法/index.html","059df55aa6e02993ae372a295419fcb3"],["/2016/04/27/大学？大学？大学？/index.html","94c85b820a8209afdcbef82670e9d87f"],["/2016/05/03/GitHub-for-Windows使用教程(一)/index.html","fd95f78734505f2e5069ddb12c5c6ab7"],["/2016/05/13/GitHub-for-Windows使用教程(二)/index.html","7266c564ea6752126b875b1822c64d4f"],["/2016/05/15/GitHub-for-windows使用教程（三）/index.html","445551078e966bac38cb93ee02e68cf0"],["/2016/05/23/Java集合遍历/index.html","36d5e4c05e6e1c31b8f4e546d1349814"],["/2016/07/04/Activity启动的两种方式/index.html","994210afe1a27667a1bb1df6a163aecb"],["/2016/07/17/如何提高Android虚拟机的运行速度/index.html","967613d288a0ba0b7092e61703bd6c11"],["/2016/08/05/FlaotActionButton详解/index.html","30b1dd851e619e1c96f128bbc93fdf66"],["/2016/08/05/底部导航按钮/index.html","cd3332ec5953920a7bcbd05890beebd5"],["/2016/08/09/正则表达式/index.html","1d799bc8f7bbb6883a1b7b2a80f9d4b7"],["/2016/08/13/Git基本操作/index.html","3f3aad8b2566e5ccfa57cf3c94d313cd"],["/2016/08/28/GitHub-for-Windows使用教程（四）/index.html","be6a2b6f10d733dd4f322cdd39d0d764"],["/2016/09/11/String源码剖析/index.html","29dbef774702498297726d1a0489cfc7"],["/2016/10/25/StringBuilder源码分析/index.html","0c2cca2363a01d869a5130371a647ecf"],["/2016/10/27/MD5加密/index.html","56532796385a6dc929ecaffe5b1fefab"],["/2016/11/27/ArrayList源码分析/index.html","f029a6a660caf57c44d8a57f37b33e44"],["/2016/12/30/2016年终总结/index.html","8b1fa9825cffd3ac3ffeb7add21abfdd"],["/2017/01/10/Maven入门/index.html","caa7f30525a322ccd5551cc6eda41539"],["/2017/01/19/Junit单元测试/index.html","dc0166b15063ec3e5c0baae46def1efb"],["/2017/02/08/Spring学习-一/index.html","7b69227e786b8607f6c6022eab6a6302"],["/2017/02/19/Log4j使用/index.html","3e567a7b0b4a0f1071c00ed885302617"],["/2017/03/02/Spring学习记录-二/index.html","5427ee9ebd05422030b7c8318017416b"],["/2017/04/03/python爬取斗鱼图片/index.html","a880702a39535c5311533fb729a77ca3"],["/2017/04/04/计蒜客蓝桥杯模拟赛-5-试题/index.html","20735c9286f5d7396b67b49ce53488e8"],["/2017/04/15/2017蓝桥杯/index.html","61d1e1298c429465b8d3bae51e1918d2"],["/2017/04/20/博客一周年/index.html","89fbf248fa2aea0eeabf316092d0a0f1"],["/2017/04/30/Git教程及使用经验/index.html","c7c47f90bce80c93058ab21272bde663"],["/2017/05/08/第一个-Android-项目/index.html","94173aa46b35b19c2f45180f71504fdd"],["/2017/06/22/python-实现微信打飞机/index.html","e2c8913c05718ae409463daef3468407"],["/2017/07/23/vim-基础学习/index.html","3d20b6f4066314037e1188a58d13df82"],["/2017/08/01/Hamming-Distance-问题/index.html","d23f812237a6069fb3b3b669e3ffd5d6"],["/2017/08/01/LeetCode-Array-Partition-I-561/index.html","4f605fba841f073ce696b31d18f11fb1"],["/2017/08/01/LeetCode-Two-Sum-1/index.html","2087c35fd74604df2668f51d40644b67"],["/2017/08/02/LeetCode-Distribute-Candies-575/index.html","b8222b9bfecd2a77b35a54cf07cb432e"],["/2017/08/02/LeetCode-Keyboard-Row-500/index.html","4287b701c05fd184594b909c2b1f4e38"],["/2017/08/02/LeetCode-Number-Complement-476/index.html","d21b9b7bbada1c1590fda3ef3508d528"],["/2017/08/02/LeetCode-Reverse-Words-in-a-String-III-557/index.html","e9f3a5e9e1d16ca63c5f42402b8beceb"],["/2017/08/04/LeetCode-Fizz-Buzz-412/index.html","a72c0c984a26aade1674039450e7fa2b"],["/2017/08/04/LeetCode-Merge-Two-Binary-Trees-617/index.html","4106aa98486a4a2b4ff546b16be90569"],["/2017/08/04/LeetCode-Reverse-String-344/index.html","965b6c522afbcb87a4798cd90403a06f"],["/2017/08/08/LeetCode-Island-Perimeter-463/index.html","c770786c77bcc7818c21ea213a137155"],["/2017/08/11/kotlin-初步学习/index.html","6bf75ff3d62594540a5e5ca1e0eb333c"],["/2017/08/12/Kotlin-扩展函数-属性/index.html","7b3d3b203765b7d4fd1d9009795db094"],["/2017/08/13/LeetCode-Next-Greater-Element-I-496/index.html","e130d5bda3a50372498e744a7ff09e56"],["/2017/08/13/LeetCode-Nim-Game-292/index.html","cab98ed7c1552f01b988c96278e5d22d"],["/2017/08/16/LeetCode-Judge-Route-Circle-657/index.html","8fe2e9aede360c1d2b7ee6f6def6771b"],["/2017/08/16/LeetCode-Longest-Uncommon-Subsequence-I-521/index.html","c05ec015e2e5482768d40b2f8bb156be"],["/2017/08/27/LeetCode-Move-Zeroes-283/index.html","87f50703fe5cf5f7f332410ed03f2f6e"],["/2017/08/27/LeetCode-Single-Number-136/index.html","55c9288cc8f45efb376020c360d524cb"],["/2017/08/28/LeetCode-Reverse-Integer-7/index.html","f8a91620ac53d4df06e4ddcc45fd3181"],["/2017/09/01/协同过滤算法/index.html","4994d35fe180d3914806661ebc63fbb3"],["/2017/09/10/LeetCode-Add-Digits-258/index.html","87ccef3baf1c43884381f5e130442c46"],["/2017/09/10/LeetCode-Find-the-Difference-389/index.html","c7594458b7baa6632bf978bba1187d69"],["/2017/09/14/LeetCode-Length-of-Last-Word-58/index.html","7ab965acec17242a9acc04e8817133cf"],["/2017/12/01/LeetCode-Binary-Number-with-Alternating-Bits-693/index.html","729bc64f3b417b5f2eb32b51d2629a46"],["/2017/12/01/LeetCode-Number-of-1-Bits-191/index.html","40b7c8f37bbd7b931a268a791dee744a"],["/2017/12/01/LeetCode-Self-Dividing-Numbers-728/index.html","e717e067b0524b8692074d0c5f538c95"],["/2017/12/02/Kotlin-1-2-平台之间共享代码/index.html","5349f41387dd46b9c1cc86fe5764f569"],["/2017/12/23/Kotlin中Collection一些语法总结/index.html","fc7fc0a52b82543bf0a2ca3c543a0642"],["/2017/12/28/一次神奇的课设验收/index.html","8b480fe35cd73d2852da1cf94005ac1c"],["/2018/01/01/2017年终总结/index.html","b8b3c8f969ca72b9bf34935154763461"],["/2018/02/23/RabbitMQ-和-Spring-Boot-的集成/index.html","76867d991eb8cf930e5ab975087f47fe"],["/2018/04/27/大创项目总结/index.html","a51d5786355b1faf927c9caa0891531b"],["/2018/05/07/vscode-配置c-c-环境/index.html","7685927138b390aaeb734447f17df107"],["/2018/05/25/Apriori算法/index.html","711fc3a6b92b1dcb213758a8cb65e3ba"],["/about/index.html","e656529757d6b8396476e90b090bf415"],["/archives/2016/04/index.html","a501bed666d9f42ed0c7287217ef7173"],["/archives/2016/05/index.html","aa48537e1efa96b5ca29c5f95626e160"],["/archives/2016/07/index.html","e33de89aa1ac43e97759c75774cc753b"],["/archives/2016/08/index.html","781776841501f8e70dfcd71168e521eb"],["/archives/2016/09/index.html","fd042621a649022de2c6152b783e2033"],["/archives/2016/10/index.html","1fa0d1cb76de6432d515e4c171126831"],["/archives/2016/11/index.html","e224686d4d4252bec8dfa95666f7008d"],["/archives/2016/12/index.html","6f08559b38f60988547443a57dd500cb"],["/archives/2016/index.html","d468fa5a89c784221232340989107f24"],["/archives/2016/page/2/index.html","60351ae2edba94f3d2d6c36a70e94b93"],["/archives/2016/page/3/index.html","a91d8568d6b4d199dda239d457d074fd"],["/archives/2017/01/index.html","a367f2fe0ea488e3225b4e7997ab7d87"],["/archives/2017/02/index.html","0a04808615f0c77713fe72f0560f1103"],["/archives/2017/03/index.html","cd33be73527b920fcff1fc9feb73ba60"],["/archives/2017/04/index.html","c205ab8301a25d9141d01d5934b50509"],["/archives/2017/05/index.html","fa0d4b241d428adee4044b8e938a00dc"],["/archives/2017/06/index.html","fa31ce0ed8363108b1ea018757658e45"],["/archives/2017/07/index.html","bc9eda6aa830a0284e91796610fb94b1"],["/archives/2017/08/index.html","f30d2b3015b9fd67c76cfeee590ce66b"],["/archives/2017/08/page/2/index.html","69bb24af6248cc522cc83538de3073b5"],["/archives/2017/09/index.html","5ff3f0f690e20855f57c2240415fe5ff"],["/archives/2017/12/index.html","7b6a8cb8588c2ac596424cbcbd6c5f5b"],["/archives/2017/index.html","95ee83dc00f823efb6456078774952fd"],["/archives/2017/page/2/index.html","70c0ca1fb2b070c0bb0ed958ef0fb27f"],["/archives/2017/page/3/index.html","eac7a25878d8f88e748e1a38c19745d8"],["/archives/2017/page/4/index.html","cdab1778fac5e7bfc73b2b11d246bdae"],["/archives/2017/page/5/index.html","72da35ac339e0ea66cbfbef90339a719"],["/archives/2018/01/index.html","6579e3397e750d37a5f1f6d246ace493"],["/archives/2018/02/index.html","04119e1ba3691309377fe59e74b7ed18"],["/archives/2018/04/index.html","458eb160143d9b653a07fe27d3eaf20a"],["/archives/2018/05/index.html","d7a98b2b90f65113dc622f6eee6c13ab"],["/archives/2018/index.html","840226cbe18153dc593c15ad8689163b"],["/archives/index.html","c34a728265770e331f9e76ef2e48e992"],["/archives/page/2/index.html","7b61c37d95bea9d35ebf7299b8a274bf"],["/archives/page/3/index.html","574d5468599d32353dec0d9face214f0"],["/archives/page/4/index.html","b02cb158c210bb2920d6a5b39b7f5fd1"],["/archives/page/5/index.html","831f0ac110de78a3a3e16e4b9b7b405c"],["/archives/page/6/index.html","03c91014b6a9078ed77adc842d6bf1f9"],["/archives/page/7/index.html","af30b7574525e9cab33dd30d1b788a17"],["/categories/index.html","e01ca3f994b0caacc995f1ad2604a847"],["/css/main.css","d0abcb1b1eb3bd06c94936f7673d6b47"],["/images/AliPayQR.png","3f579739acbea428bbfd6caf401633a9"],["/images/WeChanQR.png","3273049e528d5c7c8d6465feeb6f0f37"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/alired.jpg","e5aae0d59e9c1ab261380536793de248"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.png","a5418ef792411cc48b8a04be1412a806"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/icons/icon-128x128.png","c47d5e504c2200f7a8e49c241d117803"],["/images/icons/icon-144x144.png","332e58a8a22f3c61a89714f92f9cd599"],["/images/icons/icon-152x152.png","75f68482ee40ed7d65cbb7eaa948b122"],["/images/icons/icon-192x192.png","ef1632bde4bbfed422aa81d1a0fec31b"],["/images/icons/icon-384x384.png","c4b609968f279a561d729f0eac182296"],["/images/icons/icon-512x512.png","7f33f6399d6441456c90d56b16a81cb2"],["/images/icons/icon-72x72.png","b37c23b70ad209836f23ccf77a43ec6a"],["/images/icons/icon-96x96.png","c79c31a21bf8646cd6e4002df0c2db89"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","7fc759371e59f17e3a8640cd4191f9ab"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","a7af8f923c31f6e47c11afe673aee5fd"],["/js/src/post-details.js","9a53fef7381270bb8c96a611d52ebc04"],["/js/src/schemes/pisces.js","aa788a9a68ff8d352b7b6e3dbb4ace96"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","ecade23d7bb77f013893186d56a92059"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","3da4eef253db4019ff4d8b6bf829b400"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","bb4f88d9fd9264173208a0a51c9483af"],["/lib/font-awesome/css/font-awesome.min.css","b7f16ad3c730d60ba7282b3028bff537"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","e576d40ba44b5ca6b2bd38aa6eb11403"],["/page/3/index.html","7ac220249d9804df7468c36f0790b680"],["/page/4/index.html","4c7298f5f330588ffd447a65988e8c40"],["/page/5/index.html","94268ae44ba044211e848ecc847a6a3a"],["/page/6/index.html","62463a9af96f94c533509416aa7b6ced"],["/page/7/index.html","749db15100068c9d8c822ef784ff51b6"],["/tags/Array/index.html","668e74512a26c40ba6ca396695ec65cc"],["/tags/Bit-Manipulation/index.html","06fdb47a6415c5865f07994a2da64881"],["/tags/Brainteaser/index.html","2d7a0a0a32b10aa2a47c05b81832ccdf"],["/tags/GitHub/index.html","03343fd287b06347f76a4cacb5f7ef3e"],["/tags/Hash-Table/index.html","baa1bae46b74e8cdf5a7d7a5210a137d"],["/tags/LeetCode/index.html","11a7bd8e5061c0ac0d4cf926b9c9d932"],["/tags/Math/index.html","c58d0e7ab78a501ec35d6cb137c9d05c"],["/tags/Maven/index.html","25b6c7f61e0e602ecb4fbdedec45da1c"],["/tags/Python/index.html","87739c7f84e92b5ca37489815ae39ca4"],["/tags/RabbitMQ/index.html","2d202d06df60d700c4f33176ccb2a05f"],["/tags/Spring/index.html","d85fbc7f6bcb0617734f8da6695c44f9"],["/tags/SpringBoot/index.html","54ed0abfa1b3c4e79e6cf380b2f7f491"],["/tags/Stack/index.html","1543b2ced818db6e070425bc44186b42"],["/tags/String/index.html","fc0ceb5e62a6b6744fee31ab11c85a09"],["/tags/Tree/index.html","842c60b652666ca3df6177db970450f2"],["/tags/Vim/index.html","c668871a2515acb479324d3ff15f6773"],["/tags/android/index.html","6a2515e07b693e93fc62e2fc12602923"],["/tags/index.html","1d8e16504920866996fe73cec676fb1f"],["/tags/java/index.html","93b0f59b36cb6b8f6e5490e5d12352ca"],["/tags/java/page/2/index.html","44d5ff79911c66ec17416fef9608becf"],["/tags/kotlin/index.html","4db12d7b33e6ce169bef8275a8dc01ee"],["/tags/windows/index.html","69f19a7edce9b5f09da14c2db80cd18f"],["/tags/加密/index.html","0c838cf1a042fb65c4a28ad0866b597a"],["/tags/博客/index.html","4c8380499662eec96aea2280f944104e"],["/tags/工具/index.html","9c029e24b8b080216a8ab93610e33f10"],["/tags/推荐系统/index.html","12ab9be5b8a05e7095bb6912420f6735"],["/tags/数据挖掘/index.html","74ce4d2accf5e50cdb979332fd6028d7"],["/tags/测试/index.html","aacbfc57b4dd62f6d60e10b152868857"],["/tags/生活/index.html","6c9b3996cf8fcaf3ca68a152863fe4eb"],["/tags/算法/index.html","ed0a8f9e0f2695071ef1048d97f6689f"],["/tags/蓝桥杯/index.html","1f1246f5b61f5d559294a2545cf10caf"],["/tags/译文/index.html","c966105c152d756d60018053629b8fc1"],["/update/index.html","4aaac8b86b8fd47c0c6992d256b4f969"]];
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







