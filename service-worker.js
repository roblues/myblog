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

var precacheConfig = [["/2016/04/20/我一直都在/index.html","f583851ea63280bdf93ac8db354724ea"],["/2016/04/21/清除右键无效项/index.html","8d01398c7ad5ca6bdacfca360b354de9"],["/2016/04/21/第一次参加蓝桥杯感受/index.html","5b1ead5380da73044000bb9a0c693d8e"],["/2016/04/23/LinkList特有的方法/index.html","7f848a6083979c8443886464b2566d30"],["/2016/04/27/大学？大学？大学？/index.html","fca59413bd9806ae6a780e891530841a"],["/2016/05/03/GitHub-for-Windows使用教程(一)/index.html","18d76ca839a85f925d16c5a281adef2e"],["/2016/05/13/GitHub-for-Windows使用教程(二)/index.html","3d2aba6d50bd0b02e51621b2da671789"],["/2016/05/15/GitHub-for-windows使用教程（三）/index.html","45f36b3af217d86633e8f7d6c34e60e2"],["/2016/05/23/Java集合遍历/index.html","1db1db6014b8cdd5ab09b2bfe8885e6e"],["/2016/07/04/Activity启动的两种方式/index.html","4bf0a3c3f36554666d38a4232e9c11bd"],["/2016/07/17/如何提高Android虚拟机的运行速度/index.html","eaf73b29bfe3ec6d246bab8a5c2e941b"],["/2016/08/05/FlaotActionButton详解/index.html","253b2d73eb2ae8d16e3da330d395e6af"],["/2016/08/05/底部导航按钮/index.html","a491f2345529fb17f41c3379d980c214"],["/2016/08/09/正则表达式/index.html","34846bd74068eef5d9ef9ddd908c086d"],["/2016/08/13/Git基本操作/index.html","cc6f6373731c955140e4406529879177"],["/2016/08/28/GitHub-for-Windows使用教程（四）/index.html","e1dceecf9c3abbc6db15436865a8fc13"],["/2016/09/11/String源码剖析/index.html","feb582a16c21ef4b97055d69fb0d8013"],["/2016/10/25/StringBuilder源码分析/index.html","87cc89d0556a08910053a69d1006168e"],["/2016/10/27/MD5加密/index.html","957315401e32b595ec5aa7b388c7d4db"],["/2016/11/27/ArrayList源码分析/index.html","03d354d5f3dfaf43b7f463b15c7905ad"],["/2016/12/30/2016年终总结/index.html","ebb43df5cb0965e5959e7318e897c203"],["/2017/01/10/Maven入门/index.html","d3e89d440d2906f9df5857ec0f6b53a8"],["/2017/01/19/Junit单元测试/index.html","304aa91555fadcc1bc688ca27f43f8f8"],["/2017/02/08/Spring学习-一/index.html","a6b6053eec2d79bf7d5b6c1171833b4b"],["/2017/02/19/Log4j使用/index.html","d87202496ae26be2810b47892426b650"],["/2017/03/02/Spring学习记录-二/index.html","17bbf1f997d813081ab35419cf6348b2"],["/2017/04/03/python爬取斗鱼图片/index.html","e6c58300313f7c6c352c9a6473127361"],["/2017/04/04/计蒜客蓝桥杯模拟赛-5-试题/index.html","84caf55987dd242bee6361ef54c8e677"],["/2017/04/15/2017蓝桥杯/index.html","f5b6540740c89f2bccde132a99c507ca"],["/2017/04/20/博客一周年/index.html","6a90e42e2a714adf13d53676070e955f"],["/2017/04/30/Git教程及使用经验/index.html","ab6c5bf937150b53994acd673f763c3e"],["/2017/05/08/第一个-Android-项目/index.html","cf25a868d9725f5338d82a5f8e3e12bc"],["/2017/06/22/python-实现微信打飞机/index.html","e29c6e4e6a331f2a35f153e0f3401f57"],["/2017/07/23/vim-基础学习/index.html","9492b8b1bf78a5020fefaeef3de44527"],["/2017/08/01/Hamming-Distance-问题/index.html","c9eb29dc92efd84e61fa1bf95d9a8da9"],["/2017/08/01/LeetCode-Array-Partition-I-561/index.html","d47d4cff939c23b469753f78b30996ae"],["/2017/08/01/LeetCode-Two-Sum-1/index.html","6f164b0dedc543ecbb8b63cdd6d899fe"],["/2017/08/02/LeetCode-Distribute-Candies-575/index.html","b170a4bfcf4499af91ec51f61766599c"],["/2017/08/02/LeetCode-Keyboard-Row-500/index.html","ce1abdc05c3c4931deac6a8e5af8fb34"],["/2017/08/02/LeetCode-Number-Complement-476/index.html","ccb767f2f89ffd65143e10a21fef886f"],["/2017/08/02/LeetCode-Reverse-Words-in-a-String-III-557/index.html","0d4e3ec535048abb0d4c5c55f3d6dd56"],["/2017/08/04/LeetCode-Fizz-Buzz-412/index.html","aa5a012203222a84c01b9c39bc179953"],["/2017/08/04/LeetCode-Merge-Two-Binary-Trees-617/index.html","14d02541be3d7d2678d216d21472402a"],["/2017/08/04/LeetCode-Reverse-String-344/index.html","5c613184b0662ed845117f239837d596"],["/2017/08/08/LeetCode-Island-Perimeter-463/index.html","4ecee4dec636ad1ff9e74cef66872d42"],["/2017/08/11/kotlin-初步学习/index.html","754cb79d4d861927ffc5a40e19f1bb84"],["/2017/08/12/Kotlin-扩展函数-属性/index.html","74771e3201eeaeaf0c101777919c1504"],["/2017/08/13/LeetCode-Next-Greater-Element-I-496/index.html","3cf117ce469540f874638b3a92ffbd64"],["/2017/08/13/LeetCode-Nim-Game-292/index.html","05ddd469c0e9d31ba320872fb07078c6"],["/2017/08/16/LeetCode-Judge-Route-Circle-657/index.html","65aa444ba5044511aedcec87a7a8863e"],["/2017/08/16/LeetCode-Longest-Uncommon-Subsequence-I-521/index.html","ce4f8d5526c9a3ce71a493d825956b4d"],["/2017/08/27/LeetCode-Move-Zeroes-283/index.html","6b490fad7da26aa82f58b8671140e18a"],["/2017/08/27/LeetCode-Single-Number-136/index.html","e8cfaae174ce350c3451d66d45c26048"],["/2017/08/28/LeetCode-Reverse-Integer-7/index.html","e46bd0779d8e9c71cd3aa01ca5f8dc8e"],["/2017/09/01/协同过滤算法/index.html","a9ece7cd2897e8ca3808ed646c7b7f5f"],["/2017/09/10/LeetCode-Add-Digits-258/index.html","560ba0831bb5e79faac4326e0afd389f"],["/2017/09/10/LeetCode-Find-the-Difference-389/index.html","b6bc91b8949d24681fa8350ccddef5cf"],["/2017/09/14/LeetCode-Length-of-Last-Word-58/index.html","cde72201d0c898b8f1915c62dea36909"],["/2017/12/01/LeetCode-Binary-Number-with-Alternating-Bits-693/index.html","cb079c717b66b896e3af76257f39ca49"],["/2017/12/01/LeetCode-Number-of-1-Bits-191/index.html","5db942993adac0f3875d3c02fb2113fb"],["/2017/12/01/LeetCode-Self-Dividing-Numbers-728/index.html","0020f3419998f0f44e503baa4914085b"],["/2017/12/02/Kotlin-1-2-平台之间共享代码/index.html","29223599c90e6c29c8b87673cbd2592e"],["/2017/12/23/Kotlin中Collection一些语法总结/index.html","b3f527e713851543e235d772fbd2a174"],["/2017/12/28/一次神奇的课设验收/index.html","9804e4f0b1dd22ea4bcdffc90a5b9ef3"],["/2018/01/01/2017年终总结/index.html","9335fb082f895654d182b79190e289be"],["/2018/02/23/RabbitMQ-和-Spring-Boot-的集成/index.html","745536d44e72274d5edf3691bedd7a38"],["/2018/04/27/大创项目总结/index.html","3a66634e5e6ef6e73dc4c25297347233"],["/2018/05/07/vscode-配置c-c-环境/index.html","2d79ef4f9f7b1dae498605662d5bd627"],["/about/index.html","25b27d96e45340c600803f793596ce59"],["/archives/2016/04/index.html","d29ba8dbe6687a5ed0fb7f80473c3cb3"],["/archives/2016/05/index.html","814ef8fec4a645daee1ff9e0ced1609c"],["/archives/2016/07/index.html","a742ea00cc02c7b1ae892099b8ddf5c0"],["/archives/2016/08/index.html","ed4bbd0b212cb4ae65637a4d64012642"],["/archives/2016/09/index.html","fb4896125822adf899ba20582f980afa"],["/archives/2016/10/index.html","7598be0b2d59174d14393166172f967d"],["/archives/2016/11/index.html","c43c635c3cd25c1ccb5b6e1f1faa81b5"],["/archives/2016/12/index.html","5c8c8f99cf3b530add88306f49d943cc"],["/archives/2016/index.html","9dbf13304aadca380b3c0851b670a045"],["/archives/2016/page/2/index.html","2e4993e3d5b241ab14329f29f12a69db"],["/archives/2016/page/3/index.html","1ce21a0ce8ea091f050c3c1242fbd669"],["/archives/2017/01/index.html","879db5abcb97f36e3f168385cc0be5fa"],["/archives/2017/02/index.html","f4a0d823831d2a5d6cc836f90b150e23"],["/archives/2017/03/index.html","0ab8f7e7f3bc1b8d0a89905fded9685a"],["/archives/2017/04/index.html","6727933f06190f10446d559b7c0844bb"],["/archives/2017/05/index.html","187e6b5e614b08f78de36f98f9bfd7dc"],["/archives/2017/06/index.html","84c3bfb4a313f96d0e02a6053e3261b9"],["/archives/2017/07/index.html","19a377b021ed7eb2c3d0c5a534709caf"],["/archives/2017/08/index.html","b0196ed44b133e66d63e27f272a05e27"],["/archives/2017/08/page/2/index.html","cbb21e1b28f406082ece857d2b08aa12"],["/archives/2017/09/index.html","989cb058524048f3488a09283a313cc3"],["/archives/2017/12/index.html","31311c9b2138906369c8fb22a4840472"],["/archives/2017/index.html","4b2cdaabdb5246f338fc38edceb90216"],["/archives/2017/page/2/index.html","96621d7dec1c188f0c2bd5fefe15eb27"],["/archives/2017/page/3/index.html","babe62d6d029fffa88c157bfaac897f8"],["/archives/2017/page/4/index.html","b567410d3c6d1dc05ade4774fbd9a801"],["/archives/2017/page/5/index.html","4b1d64568d5d653de749a2f98a1b1ad4"],["/archives/2018/01/index.html","956e2cc088cebca65a5fe8ec29afaeab"],["/archives/2018/02/index.html","fd52dd661c81486b8556041b200cdf62"],["/archives/2018/04/index.html","c0aea520db78328f6a849e04753952de"],["/archives/2018/05/index.html","25fb4bbc93108c92206c0a1d4b5fd8ee"],["/archives/2018/index.html","e9e16bfaeb2abd83a71cc6c7090a03b8"],["/archives/index.html","17a61ce3c6271c037bfda61d257c4c1d"],["/archives/page/2/index.html","95630069feedc4e83b20821ffa8450be"],["/archives/page/3/index.html","5e0eec4da23a61370fb3152c98b4119d"],["/archives/page/4/index.html","6d791e6c05b316510c1b0e42e0b79883"],["/archives/page/5/index.html","c5ba9e34fc7ca07e03c27c900a16892c"],["/archives/page/6/index.html","4b2ae0017a76b38d9b239de0ae0f6709"],["/archives/page/7/index.html","4204b093b923e55d83c7a21bae8061b9"],["/categories/index.html","7d9a2329065fcc5da8b2bdce607d7c7c"],["/css/main.css","bd6d3af4a03871e8021b83367cc194dd"],["/images/AliPayQR.png","3f579739acbea428bbfd6caf401633a9"],["/images/WeChanQR.png","3273049e528d5c7c8d6465feeb6f0f37"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/alired.jpg","e5aae0d59e9c1ab261380536793de248"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.png","a5418ef792411cc48b8a04be1412a806"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/icons/icon-128x128.png","c47d5e504c2200f7a8e49c241d117803"],["/images/icons/icon-144x144.png","332e58a8a22f3c61a89714f92f9cd599"],["/images/icons/icon-152x152.png","75f68482ee40ed7d65cbb7eaa948b122"],["/images/icons/icon-192x192.png","ef1632bde4bbfed422aa81d1a0fec31b"],["/images/icons/icon-384x384.png","c4b609968f279a561d729f0eac182296"],["/images/icons/icon-512x512.png","7f33f6399d6441456c90d56b16a81cb2"],["/images/icons/icon-72x72.png","b37c23b70ad209836f23ccf77a43ec6a"],["/images/icons/icon-96x96.png","c79c31a21bf8646cd6e4002df0c2db89"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","d0121f7acdecf7135100fe34319979de"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","a7af8f923c31f6e47c11afe673aee5fd"],["/js/src/post-details.js","9a53fef7381270bb8c96a611d52ebc04"],["/js/src/schemes/pisces.js","aa788a9a68ff8d352b7b6e3dbb4ace96"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","ecade23d7bb77f013893186d56a92059"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","3da4eef253db4019ff4d8b6bf829b400"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","bb4f88d9fd9264173208a0a51c9483af"],["/lib/font-awesome/css/font-awesome.min.css","b7f16ad3c730d60ba7282b3028bff537"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","ed216610e1a9bf5a0c56be6b72ad5058"],["/page/3/index.html","fef54a080469c4d089bfd50f5a6d78f6"],["/page/4/index.html","a7b324b251d0c21dd0a765e9be349bd0"],["/page/5/index.html","4393df9718b6b5c275f6dd37da24f4c6"],["/page/6/index.html","e23553e83b0f7f40700a906e597b8794"],["/page/7/index.html","e0fc436ad3b9d8af41fd81f423bc6f4f"],["/tags/Array/index.html","12aea9b4a7f78b27a96b52a38ac4cfad"],["/tags/Bit-Manipulation/index.html","5140c83f7d254f733a66c8948995b4fd"],["/tags/Brainteaser/index.html","7488ba9c5466207bba950574fe01b430"],["/tags/GitHub/index.html","37ba20cbc26f021b4c4eab7369fefa11"],["/tags/Hash-Table/index.html","f5dffdbaef3141f2e9718543f109d71a"],["/tags/LeetCode/index.html","edfe88935669ea2c9dc413fe309008df"],["/tags/Math/index.html","8c9f8b9fd93061904209c90c4d39823f"],["/tags/Maven/index.html","784878ee944fdd97b164a40a118e10b3"],["/tags/Python/index.html","f424d151c010ebce326d367b23047fe3"],["/tags/RabbitMQ/index.html","16cd356d7e6e1cf8d446ff23bdbfdbc1"],["/tags/Spring/index.html","b584ef1fbe4b1851002aea1b148177df"],["/tags/SpringBoot/index.html","f2d83ba2ea833883d7de4f99683762e1"],["/tags/Stack/index.html","2e488aa071a85ce57e2e015a20696c73"],["/tags/String/index.html","9253d642e0d3c0cadcf7ebe4299f9e20"],["/tags/Tree/index.html","90f428345a57136b4bed1e38d5e62c6a"],["/tags/Vim/index.html","3aa9dd822b181b59c309df020d725d12"],["/tags/android/index.html","6f717716f216c063a811d37590ccd0fd"],["/tags/index.html","e225bf3fbcfc2dac9f32a1432bb2ed0b"],["/tags/java/index.html","8ae25472a33b4d77f9d40a99bc5192e0"],["/tags/java/page/2/index.html","42de58b18070d68a31ebecc1ba16d78d"],["/tags/kotlin/index.html","94e1fad1c3b8169750272a596c72d282"],["/tags/windows/index.html","f1afdb6b95df4d292c78b6dd3dcefa04"],["/tags/加密/index.html","e5ab23e3b600e5488caecaed43e09446"],["/tags/博客/index.html","6ec859c484fc39e9071aeef945605dd6"],["/tags/工具/index.html","b8614646927b292bc222cd2acbf46b12"],["/tags/推荐系统/index.html","cc38628be6d99bc8bd83bf898524f145"],["/tags/测试/index.html","09533016b12dbfa04008bc9fa1e2d39f"],["/tags/生活/index.html","06b5f6e41c4f63ca69f6fe811d017d65"],["/tags/算法/index.html","559a285d6efc7ef91da8b6d612eb7d69"],["/tags/蓝桥杯/index.html","a7f8b53b441a9b2c2c7025ac2b999ad8"],["/tags/译文/index.html","5f2eb374991d174e0504ca695c54afe1"],["/update/index.html","334961d9eb4dc3123e5de55ca35c3f11"]];
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







