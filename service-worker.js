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

var precacheConfig = [["/2016/04/20/我一直都在/index.html","c4064441c014216380fb90a0d85caa77"],["/2016/04/21/清除右键无效项/index.html","65a5b7ae86f8c9edc523b50a0efc164f"],["/2016/04/21/第一次参加蓝桥杯感受/index.html","b47bbc1997ce5546aa31bb06c3788077"],["/2016/04/23/LinkList特有的方法/index.html","1b9ad65f1897800e89ce34b218fc9994"],["/2016/04/27/大学？大学？大学？/index.html","2bf1dbd484dfe3386b5010aa8ace2a15"],["/2016/05/03/GitHub-for-Windows使用教程(一)/index.html","1c972bdd12bd00d82ee0baa7672ddf99"],["/2016/05/13/GitHub-for-Windows使用教程(二)/index.html","ed919cab4ff6a38404108474dd987d2d"],["/2016/05/15/GitHub-for-windows使用教程（三）/index.html","efe79891175b8f8445c4eaca6c9b909c"],["/2016/05/23/Java集合遍历/index.html","e4c59dac2cba271cda2909b25077ef32"],["/2016/07/04/Activity启动的两种方式/index.html","ccb66e9528018f304b4e6ac15259d5ff"],["/2016/07/17/如何提高Android虚拟机的运行速度/index.html","c6c53de8f12ad5a86c9576961e878a7c"],["/2016/08/05/FlaotActionButton详解/index.html","dd3737304100dd8710f08b6d6107e31a"],["/2016/08/05/底部导航按钮/index.html","a93b3b4d3b323be8d317cbeb8fc1f404"],["/2016/08/09/正则表达式/index.html","f9f0af3601f142b30de1634aa01e5766"],["/2016/08/13/Git基本操作/index.html","ac9cb1c04e0b14920ad67c8b20f91f9b"],["/2016/08/28/GitHub-for-Windows使用教程（四）/index.html","cf7f87b7d1e1882a2f10a216dd7c4c82"],["/2016/09/11/String源码剖析/index.html","fbb865a83ef3d39b48b382e80355d5b8"],["/2016/10/25/StringBuilder源码分析/index.html","40224fa3c99afdcb5b5f64c97db6fb2c"],["/2016/10/27/MD5加密/index.html","3a58d3cac7782210c55d4108ed91cb7d"],["/2016/11/27/ArrayList源码分析/index.html","5d6e459c88314d74f43b317788b97986"],["/2016/12/30/2016年终总结/index.html","e0c47d01b8d4c51cd84288d008b8d03b"],["/2017/01/10/Maven入门/index.html","e4034be4de86788844d8f0f02fb5d297"],["/2017/01/19/Junit单元测试/index.html","e5946b7099d055ca6c22f975a765d9e3"],["/2017/02/08/Spring学习-一/index.html","35179df96835a96b2360acc301528b16"],["/2017/02/19/Log4j使用/index.html","b2bcc80d0c1b10f29aaeb560e70f492d"],["/2017/03/02/Spring学习记录-二/index.html","2775ea31eb32d4644a83ddd598ec880d"],["/2017/04/03/python爬取斗鱼图片/index.html","4ac69cb774dc0782f1f78480521cd054"],["/2017/04/04/计蒜客蓝桥杯模拟赛-5-试题/index.html","a419825b2d08348e5ac253d5ae927f63"],["/2017/04/15/2017蓝桥杯/index.html","74c841d182eb767179ebd82b90dab228"],["/2017/04/20/博客一周年/index.html","82e2b95111d440ba37c146b4c4268838"],["/2017/04/30/Git教程及使用经验/index.html","48366469a40835fca0062298fdcfa7ba"],["/2017/05/08/第一个-Android-项目/index.html","94988cecf87d88ea2c1965cb76711d37"],["/2017/06/22/python-实现微信打飞机/index.html","d0e5c4a203ed717e2fc377ca802b9e5a"],["/2017/07/23/vim-基础学习/index.html","7aa068f86b085639e8c4d3ce6e83958b"],["/2017/08/01/Hamming-Distance-问题/index.html","1868a837d5d0dfa7b2dd6d8395d57c26"],["/2017/08/01/LeetCode-Array-Partition-I-561/index.html","cf9aa7eb3e4d78fb928bd8b0fcaba5de"],["/2017/08/01/LeetCode-Two-Sum-1/index.html","7076e883ef17c74c0618f608ecdcd3fc"],["/2017/08/02/LeetCode-Distribute-Candies-575/index.html","b27cce80bf53ac1644f548099d5dd419"],["/2017/08/02/LeetCode-Keyboard-Row-500/index.html","0759c2dbbc55730a6f8ab16bb371632c"],["/2017/08/02/LeetCode-Number-Complement-476/index.html","3506ef1a67692583ff246933d5cbf1d6"],["/2017/08/02/LeetCode-Reverse-Words-in-a-String-III-557/index.html","cf6e2f07288010d1dc3b95289dff082e"],["/2017/08/04/LeetCode-Fizz-Buzz-412/index.html","4644457092a99246106c4419e773a92e"],["/2017/08/04/LeetCode-Merge-Two-Binary-Trees-617/index.html","97a5e5a35e9d1cf3bd11a6e6e2564c3d"],["/2017/08/04/LeetCode-Reverse-String-344/index.html","0edfb049a46c573ae6c79f7abaee6b88"],["/2017/08/08/LeetCode-Island-Perimeter-463/index.html","ff02de49a1a6c15d85d758b70f7b4974"],["/2017/08/11/kotlin-初步学习/index.html","920b819af852b88b3dd015fc2a824ec0"],["/2017/08/12/Kotlin-扩展函数-属性/index.html","571bfd7af3b119f0592bc8a595662af3"],["/2017/08/13/LeetCode-Next-Greater-Element-I-496/index.html","6a2a230c95a114afa542b843d4169fbe"],["/2017/08/13/LeetCode-Nim-Game-292/index.html","223244c58ee234a30e213f604ccf4c33"],["/2017/08/16/LeetCode-Judge-Route-Circle-657/index.html","8efc874b545713c684bd05e0cedc2860"],["/2017/08/16/LeetCode-Longest-Uncommon-Subsequence-I-521/index.html","4086e5ca3bd1a002b2d06e8cb5008967"],["/2017/08/27/LeetCode-Move-Zeroes-283/index.html","40f554a47970489dfd240b51365eb193"],["/2017/08/27/LeetCode-Single-Number-136/index.html","47a4f82449a1701efafbdbd565424cfa"],["/2017/08/28/LeetCode-Reverse-Integer-7/index.html","87d91b08a378f1c04c77eca4db48e39c"],["/2017/09/01/协同过滤算法/index.html","827af485dcdf4057f795f34827c1eb8b"],["/2017/09/10/LeetCode-Add-Digits-258/index.html","72a39542f03637e68a65dddb4eb391bc"],["/2017/09/10/LeetCode-Find-the-Difference-389/index.html","a242ac2419713846a123171402767f10"],["/2017/09/14/LeetCode-Length-of-Last-Word-58/index.html","d2ddb7720d7a40081cb30b4bcf4994f6"],["/2017/12/01/LeetCode-Binary-Number-with-Alternating-Bits-693/index.html","17f311ab7de66e673194649dab377cbd"],["/2017/12/01/LeetCode-Number-of-1-Bits-191/index.html","ab09289e5f3fe43877070bd8586f3f5f"],["/2017/12/01/LeetCode-Self-Dividing-Numbers-728/index.html","be97deb28385ee1816f556e41f4e2194"],["/2017/12/02/Kotlin-1-2-平台之间共享代码/index.html","add06005ba9a88c3198a5595cedb605f"],["/2017/12/23/Kotlin中Collection一些语法总结/index.html","1585ee96125f6d35e476faa192fa765c"],["/2017/12/28/一次神奇的课设验收/index.html","399222bafff0c028e39af03fb3c0e982"],["/2018/01/01/2017年终总结/index.html","30cd60a4799fe49a63f3f4eb281fafed"],["/2018/02/23/RabbitMQ-和-Spring-Boot-的集成/index.html","d38400454b596930c61f8f0c8f6c0092"],["/2018/04/27/大创项目总结/index.html","aaaee30a40a6ae18178dc9774a6e232f"],["/about/index.html","943ff20216c6a90fd0732b3a026d7536"],["/archives/2016/04/index.html","73ea6aea184f69bb398197db4d1010c6"],["/archives/2016/05/index.html","830d5d14590c46a8f73beb79e98e82b3"],["/archives/2016/07/index.html","c7b086830bedc528768cb209f26148b3"],["/archives/2016/08/index.html","829131f3e027d596ebe4d13931249349"],["/archives/2016/09/index.html","5d282fd773932e251ff9778c06d771f2"],["/archives/2016/10/index.html","38b06df4a2e24867aaad16340dfc66a9"],["/archives/2016/11/index.html","ec249e4c1c5216821018679fa0e68792"],["/archives/2016/12/index.html","203ce638a1b438b15021ff8554671669"],["/archives/2016/index.html","b3a44a7bcb8769238eb3ede9d17b2ca3"],["/archives/2016/page/2/index.html","99283844eca1b93961abf6bd618a93d6"],["/archives/2016/page/3/index.html","9043332030c9d61935c2684a8e5d37ae"],["/archives/2017/01/index.html","5dc16bb1060abcec563619d57233271f"],["/archives/2017/02/index.html","0d518ddf4e1d3bc27a46881d0a6c1eec"],["/archives/2017/03/index.html","1cef34308b064a7986048527f1eb32c7"],["/archives/2017/04/index.html","ba6b2a77086dc364c509a88883c03a83"],["/archives/2017/05/index.html","1254c8ecd3a78e4822216c7868ab4f4c"],["/archives/2017/06/index.html","17895e10c46e51b38632ba85937da05f"],["/archives/2017/07/index.html","adea731c626ee83a3ff4d5efc84b7a06"],["/archives/2017/08/index.html","1656c6241d18a2d2601985d2055afe3e"],["/archives/2017/08/page/2/index.html","1878cd3af48456b924f689a6b515d5db"],["/archives/2017/09/index.html","7c4118ad39c0594471d460a22917a63d"],["/archives/2017/12/index.html","6021a71efb71e2a145bfba839516859c"],["/archives/2017/index.html","cf623df31006c5de8b0171ff57ea7320"],["/archives/2017/page/2/index.html","4d5e1273ea5b178d09ba0b65748a43a7"],["/archives/2017/page/3/index.html","fb4cf8de9f9b0971c0bdae724cd02fe3"],["/archives/2017/page/4/index.html","dd1469fe5a3fcfd89169bcfed7bcc559"],["/archives/2017/page/5/index.html","305b5bebcfe430fde3351145b6fee515"],["/archives/2018/01/index.html","71f789472d2faee4cbbd9d4298613dd2"],["/archives/2018/02/index.html","206c332f019c8b0e3a93ca843d96b172"],["/archives/2018/04/index.html","61905dfc0685cc973d0d3d2036ef3ba2"],["/archives/2018/index.html","3f216fea28198cf8928fd917eda1318f"],["/archives/index.html","411e4ad622e09838649fce23fcc7b53a"],["/archives/page/2/index.html","c2dc7c7d1d2f9c2b134310d4bc03484f"],["/archives/page/3/index.html","b5a61bbc694a6da3ceada8438e6fe7ee"],["/archives/page/4/index.html","23a1ba64d58493976ebc954f455190af"],["/archives/page/5/index.html","a68b22903318c01b1861a1f86a03b2d9"],["/archives/page/6/index.html","e8a3e694cd22b86eaf334e5a4ff7a611"],["/archives/page/7/index.html","0e2e24e128582b575d795d00f99ab332"],["/categories/index.html","9ec5c6c1955359de67882e3e49ad352b"],["/css/main.css","b980f92069bce5b8ce025f3b499a35ea"],["/images/AliPayQR.png","3f579739acbea428bbfd6caf401633a9"],["/images/WeChanQR.png","3273049e528d5c7c8d6465feeb6f0f37"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/alired.jpg","e5aae0d59e9c1ab261380536793de248"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.png","a5418ef792411cc48b8a04be1412a806"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/icons/icon-128x128.png","c47d5e504c2200f7a8e49c241d117803"],["/images/icons/icon-144x144.png","332e58a8a22f3c61a89714f92f9cd599"],["/images/icons/icon-152x152.png","75f68482ee40ed7d65cbb7eaa948b122"],["/images/icons/icon-192x192.png","ef1632bde4bbfed422aa81d1a0fec31b"],["/images/icons/icon-384x384.png","c4b609968f279a561d729f0eac182296"],["/images/icons/icon-512x512.png","7f33f6399d6441456c90d56b16a81cb2"],["/images/icons/icon-72x72.png","b37c23b70ad209836f23ccf77a43ec6a"],["/images/icons/icon-96x96.png","c79c31a21bf8646cd6e4002df0c2db89"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","ef316e58dec2126b20de5d3acb9abbfb"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","a7af8f923c31f6e47c11afe673aee5fd"],["/js/src/post-details.js","9a53fef7381270bb8c96a611d52ebc04"],["/js/src/schemes/pisces.js","aa788a9a68ff8d352b7b6e3dbb4ace96"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","ecade23d7bb77f013893186d56a92059"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","3da4eef253db4019ff4d8b6bf829b400"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","bb4f88d9fd9264173208a0a51c9483af"],["/lib/font-awesome/css/font-awesome.min.css","b7f16ad3c730d60ba7282b3028bff537"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","11999e0d2f8360e8baad5e0c7618c12a"],["/page/3/index.html","23186d3eba529a504ba0e11516b60312"],["/page/4/index.html","2818bf7c61b69eb06b548227a7cab110"],["/page/5/index.html","c8025d0b9ba085a189f79378f624bdbc"],["/page/6/index.html","0e9b50d2777a721784b4d91d78e92e9c"],["/page/7/index.html","57d4eb94b0dd9bfe90e4ee7f21f4667a"],["/tags/Array/index.html","2221de79a1b85fc1e7cb4c3b2d181e71"],["/tags/Bit-Manipulation/index.html","2a8f835f42457950cf840a8853b8db5e"],["/tags/Brainteaser/index.html","f181c00e9f1c4365f6cd9fa96813066f"],["/tags/GitHub/index.html","6004841e4210ce4b416d603723322b79"],["/tags/Hash-Table/index.html","319dc47b6e4071ca558a3a134cf5c2d1"],["/tags/LeetCode/index.html","597d5dd730919f9bd59dbe5157c58eca"],["/tags/Math/index.html","60e906b3cc582c387113ef95db53118a"],["/tags/Maven/index.html","45ca3063d05c75f250311b18e484d209"],["/tags/Python/index.html","38490a6bc05c1b921524b8915d992125"],["/tags/RabbitMQ/index.html","aed708b4645e731d1273c068ded502ac"],["/tags/Spring/index.html","6aa6e2c46344c81436597d1b27f441d7"],["/tags/SpringBoot/index.html","5c3515bb3ffcc98b1f3610d66e9a13a7"],["/tags/Stack/index.html","a3dcbba0a06c8b95c95fe3b9ab0b389a"],["/tags/String/index.html","b93b11c3dd4cef3c9bdfc3b1251d19e7"],["/tags/Tree/index.html","1ae6f984f963b94476ae967e17d1856a"],["/tags/Vim/index.html","4ca3145f83fdfd0b812bd478b717aded"],["/tags/android/index.html","b4e346cac1dbe3c196eccd4a9ca84c67"],["/tags/index.html","76c3d45d0aa7a4783ce97e80c7bd2a57"],["/tags/java/index.html","f0f33333dd8bd1ed6944fa972675eee3"],["/tags/java/page/2/index.html","e53fb6f01e915f322b1026ebbc2400fd"],["/tags/kotlin/index.html","58ae2e367d2afa3684a6e3cb9f005c14"],["/tags/windows/index.html","c8275947eca5f119dd7f816b68327f99"],["/tags/加密/index.html","3418abefcb0c7d060db642e2e3ea1795"],["/tags/博客/index.html","6d56643a8f6027710e537392ee2e5450"],["/tags/工具/index.html","35679b2861302f2cfbe62b63df3e0d34"],["/tags/推荐系统/index.html","eed28728125eff08e19e6df6a70bacb3"],["/tags/测试/index.html","e63131bea97a0796287345083f575058"],["/tags/生活/index.html","f34595f09dbd69b99b45200e98e1df65"],["/tags/算法/index.html","5d23d00a83bab8b3b9d8bdfed3a5899c"],["/tags/蓝桥杯/index.html","82b2ec0011ce2c522892e093ddb74a39"],["/tags/译文/index.html","c7652101d6fe82fdadc34eea9169d1c4"],["/update/index.html","89390b733dc9713118fdc2f4974183c0"]];
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







