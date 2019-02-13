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

var precacheConfig = [["/2016/04/20/我一直都在/index.html","43a677f3ee33a4ac2d6bd19037b3cfb5"],["/2016/04/21/清除右键无效项/index.html","a32040486a616c8ff9f11955cbeb8ed5"],["/2016/04/21/第一次参加蓝桥杯感受/index.html","62e14279d96a5fe0ac9a93e238182d2d"],["/2016/04/23/LinkList特有的方法/index.html","59330b5e21dcd71a13793bbf800e8997"],["/2016/04/27/大学？大学？大学？/index.html","96b47828ae162cc52c55ae372ba0af2a"],["/2016/05/03/GitHub-for-Windows使用教程(一)/index.html","3919143e2b6effa63ba346d1b2aed91e"],["/2016/05/13/GitHub-for-Windows使用教程(二)/index.html","92ce2affa8c841a640bcc67a561f7416"],["/2016/05/15/GitHub-for-windows使用教程（三）/index.html","36accfde7b4a5011feb7f802999a76c8"],["/2016/05/23/Java集合遍历/index.html","a2b62ee0a588f99ec787e4fec697e124"],["/2016/07/04/Activity启动的两种方式/index.html","4bc346f448ea27a4ffe37c3f57b4a052"],["/2016/07/17/如何提高Android虚拟机的运行速度/index.html","eaf8aabd12e56b339b22ad9bd9cdb8ce"],["/2016/08/05/FlaotActionButton详解/index.html","9ef5aabcc6904ac66f8e61c4e016dcd8"],["/2016/08/05/底部导航按钮/index.html","2118a3339b8ce7c4e4a409685e951de5"],["/2016/08/09/正则表达式/index.html","1af89a0c44c766415a423e6a12108e3b"],["/2016/08/13/Git基本操作/index.html","3275b17081018b1ed1834b34d20ecac1"],["/2016/08/28/GitHub-for-Windows使用教程（四）/index.html","33d78765c4f741aef85f15086bd4d89c"],["/2016/09/11/String源码剖析/index.html","e22f9154d53310329734cf98023d99e9"],["/2016/10/25/StringBuilder源码分析/index.html","b2fbdfb852b4c1b78e2525559774aa39"],["/2016/10/27/MD5加密/index.html","b090fed264a0023bcba7083a0633683f"],["/2016/11/27/ArrayList源码分析/index.html","d5cad34acd680e6590793b7ccdcf5f0e"],["/2016/12/30/2016年终总结/index.html","a216c5e2888523527b07b32781f228b8"],["/2017/01/10/Maven入门/index.html","4b2b7489aea7791e1cbdd9f22412574b"],["/2017/01/19/Junit单元测试/index.html","a2c8c26dfd508a51d1dd0ec5453a154b"],["/2017/02/08/Spring学习-一/index.html","f0518b7a11bb8e8fe2e26fb5a1cbd9d8"],["/2017/02/19/Log4j使用/index.html","a9d094ffdd21f8059efff4d2a50e887b"],["/2017/03/02/Spring学习记录-二/index.html","5ef9904180e9470029d524da6a6cf212"],["/2017/04/03/python爬取斗鱼图片/index.html","e2868e06cc3a160c341c66e6da4276ba"],["/2017/04/04/计蒜客蓝桥杯模拟赛-5-试题/index.html","326ae0afa0dfd169a08cf4dd3dc718de"],["/2017/04/15/2017蓝桥杯/index.html","64fc55c902e17c215aa66fe98b4036e9"],["/2017/04/20/博客一周年/index.html","938f64581c66f4828cfe81b3abf5c54e"],["/2017/04/30/Git教程及使用经验/index.html","8234cc3f210421279e14eb5c2e3348c7"],["/2017/05/08/第一个-Android-项目/index.html","16df1eb8ba856b4f2c8c8a8ad16cd7d8"],["/2017/06/22/python-实现微信打飞机/index.html","28ade1b495fdd697ad7ac5492f544598"],["/2017/07/23/vim-基础学习/index.html","f8683322986bb3385e6b18d53a1b7f89"],["/2017/08/01/Hamming-Distance-问题/index.html","b67a6a973dd5bbec316d1b7f23e89e26"],["/2017/08/01/LeetCode-Array-Partition-I-561/index.html","1480afb5dbd1730cb62e3ecb693dc360"],["/2017/08/01/LeetCode-Two-Sum-1/index.html","c334f0091f355aa87fbdd6412f8bbc3b"],["/2017/08/02/LeetCode-Distribute-Candies-575/index.html","878165d55c9d03dd318cafdf3eb81e1c"],["/2017/08/02/LeetCode-Keyboard-Row-500/index.html","49d15331cee49eed3e71d85e228aa312"],["/2017/08/02/LeetCode-Number-Complement-476/index.html","ba12b86b394c4c33b6840ec084faccda"],["/2017/08/02/LeetCode-Reverse-Words-in-a-String-III-557/index.html","596994bbb8cfb9f8979bcf8855c1c455"],["/2017/08/04/LeetCode-Fizz-Buzz-412/index.html","5f1972f52c9e57ed8e927bd139b1bd81"],["/2017/08/04/LeetCode-Merge-Two-Binary-Trees-617/index.html","7462667dcec13db27a531e4a06074168"],["/2017/08/04/LeetCode-Reverse-String-344/index.html","906459a4f1f5e9fefcdf11c790c6f8a6"],["/2017/08/08/LeetCode-Island-Perimeter-463/index.html","e3daf78a788b711c5015a499fbbfc7ba"],["/2017/08/11/kotlin-初步学习/index.html","d0bd29f5c318729fce5d90828895ae5c"],["/2017/08/12/Kotlin-扩展函数-属性/index.html","948f12033b58f830d1aac5abe9849c99"],["/2017/08/13/LeetCode-Next-Greater-Element-I-496/index.html","2eb7d2156c39eb5523b61668b9278c9e"],["/2017/08/13/LeetCode-Nim-Game-292/index.html","dfae869f61e781f91e47778b73c05c7f"],["/2017/08/16/LeetCode-Judge-Route-Circle-657/index.html","3320af93a250dc930f6c81075f70d361"],["/2017/08/16/LeetCode-Longest-Uncommon-Subsequence-I-521/index.html","0a63130d0047410c5ca5f36c0420367f"],["/2017/08/27/LeetCode-Move-Zeroes-283/index.html","7fc2faf4b83c1eeb4ccfa5bc492b008d"],["/2017/08/27/LeetCode-Single-Number-136/index.html","e6c44a83d164ebd916007bcc17504a72"],["/2017/08/28/LeetCode-Reverse-Integer-7/index.html","c05d842c0e3b2ac6a397bed4c11f2b78"],["/2017/09/01/协同过滤算法/index.html","3dd2b8fc814a2194b88a763bff3db62f"],["/2017/09/10/LeetCode-Add-Digits-258/index.html","ad70c1be2f762eb056a9439bfb52eb50"],["/2017/09/10/LeetCode-Find-the-Difference-389/index.html","a6bc7183c9742b2314f12c6696a71db0"],["/2017/09/14/LeetCode-Length-of-Last-Word-58/index.html","4c3b3d582c673651352ece7fe4cad8d4"],["/2017/12/01/LeetCode-Binary-Number-with-Alternating-Bits-693/index.html","4f0f41da39e469b0c1918708ddd2c19a"],["/2017/12/01/LeetCode-Number-of-1-Bits-191/index.html","61258cc93d7531da014a0470fa04ed2f"],["/2017/12/01/LeetCode-Self-Dividing-Numbers-728/index.html","6ed29c8d4b53ae529e3ddfa017730ff6"],["/2017/12/02/Kotlin-1-2-平台之间共享代码/index.html","d812d657d3e7059e9b1cd3472d2f8d45"],["/2017/12/23/Kotlin中Collection一些语法总结/index.html","19de17ff89ecf25e382f28e2ae05e172"],["/2017/12/28/一次神奇的课设验收/index.html","fb0604ac93408e4c9ff13d5f2eb22397"],["/2018/01/01/2017年终总结/index.html","0ed944e9c252b3b56a2b98a0f7d3b040"],["/2018/02/23/RabbitMQ-和-Spring-Boot-的集成/index.html","25d29d802b8feb695460e4346d98a323"],["/2018/04/27/大创项目总结/index.html","464c3f1639e1de6cc145d8919fcce031"],["/2018/05/07/vscode-配置c-c-环境/index.html","48cd786cc1633f246e8499e2b68ce1f0"],["/2018/05/25/Apriori算法/index.html","ac5853f5dfe720fa62c835f704e8547c"],["/2019/01/26/Angular-管道/index.html","46d6c47c54233c01e802b199c3c3cfc3"],["/2019/01/26/Spring-Boot-Security-跨域请求配置/index.html","fa3bf1df8b89a14bab77173255fbc0e5"],["/2019/02/02/Ktor-入门/index.html","5cfc91b9d3115f952ee8f6cfabe8245e"],["/2019/02/12/黄道十二宫/index.html","25c46e15095f68048bb0fbc136f048d0"],["/about/index.html","ef0b9cd5550ffd3157e8e2f0fa7a327a"],["/archives/2016/04/index.html","c333a686e9314dfef08d70f056da142f"],["/archives/2016/05/index.html","183cdabeb744f99266654fefc751c64c"],["/archives/2016/07/index.html","d1eab982a2bac8eb016e022440b3ff89"],["/archives/2016/08/index.html","e2d91ed1105f567e6571cab6caebb529"],["/archives/2016/09/index.html","cd5f955357ef97239b7b52182b334d52"],["/archives/2016/10/index.html","6bcb3c83c5b7d40c1eef6915ec45907f"],["/archives/2016/11/index.html","945ff7ea8fe19469b8fb352b7149e93d"],["/archives/2016/12/index.html","b822476638fe02082819070590f5ac4d"],["/archives/2016/index.html","fc2c4e61b3f2351e8121a3e66d043407"],["/archives/2016/page/2/index.html","04ae0e984a829c33850b8b62b701b2cb"],["/archives/2016/page/3/index.html","da3797a6d07def5fe400d6394a6c7fcc"],["/archives/2017/01/index.html","59b93b8f77e957a17fd4538371a9b307"],["/archives/2017/02/index.html","f2fbee868426b454259585d33106d477"],["/archives/2017/03/index.html","ea947860e8147d3e1845e5393d4e0aaa"],["/archives/2017/04/index.html","4e598c476735711e4f8abb792c1acefb"],["/archives/2017/05/index.html","1fe62b21a688d037e6e2fcbc33398eac"],["/archives/2017/06/index.html","5c9d2b4f269b2e37bfbd2e6338e51408"],["/archives/2017/07/index.html","bd57535affea63026b60928e82336279"],["/archives/2017/08/index.html","776ffe038514fcc0b1c0c3422e690402"],["/archives/2017/08/page/2/index.html","ed747c0930100fa5bea6262457ef997b"],["/archives/2017/09/index.html","9fc7180f57f35e8ba25e8dbaed93c956"],["/archives/2017/12/index.html","ba6025d6a6adac3ad74a28df37dd6598"],["/archives/2017/index.html","42bcfd48eda097c1aa068d7e2eeae07f"],["/archives/2017/page/2/index.html","b2a2e83685ad9bbaef7b13cf2ef69535"],["/archives/2017/page/3/index.html","a5a47799858b0ab881aad219a85091cc"],["/archives/2017/page/4/index.html","4d5c505bf21debcaffd230fe2b324a16"],["/archives/2017/page/5/index.html","f0234baa4e4c6c9ab996f727427a42a3"],["/archives/2018/01/index.html","1a928e3b91270763876b8de3a8d12931"],["/archives/2018/02/index.html","b5c7cef90758679641e1295625800540"],["/archives/2018/04/index.html","4b9c1188a76a6176c99763c6cf4436a1"],["/archives/2018/05/index.html","74d30026ba8b6faf99c9dcc75e15dd7d"],["/archives/2018/index.html","171af2d6b4a3952e143e03de8a2eb0cc"],["/archives/2019/01/index.html","482bbb951e26ebb517f7004e60416254"],["/archives/2019/02/index.html","a46a1e81eadc8e60423b2f8dee00ae85"],["/archives/2019/index.html","3e0f533f69c845e871923fa012eae264"],["/archives/index.html","6eecc9812d999bc4dfe7b7c05a5df925"],["/archives/page/2/index.html","35f2be683f2dcc7081e2ddc26639473a"],["/archives/page/3/index.html","487f33543325102622a077d216cd710e"],["/archives/page/4/index.html","5bdeb637a837601f701c32a572f23836"],["/archives/page/5/index.html","7ecd3896689895bf9e0b5a9b9fe778ba"],["/archives/page/6/index.html","445257eab3d45d4daef973e1955181c6"],["/archives/page/7/index.html","c597d6d8d6482f4df1d7e9659a3491a6"],["/archives/page/8/index.html","8006cf49d8e74e74bf608b6163c3f116"],["/categories/index.html","165577dda5a3c431f34e77145da8c6cc"],["/css/main.css","83d68daacf67d6b51c9fb0b6b434b1df"],["/images/AliPayQR.png","3f579739acbea428bbfd6caf401633a9"],["/images/WeChanQR.png","3273049e528d5c7c8d6465feeb6f0f37"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/alired.jpg","e5aae0d59e9c1ab261380536793de248"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.png","a5418ef792411cc48b8a04be1412a806"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/icons/icon-128x128.png","c47d5e504c2200f7a8e49c241d117803"],["/images/icons/icon-144x144.png","332e58a8a22f3c61a89714f92f9cd599"],["/images/icons/icon-152x152.png","75f68482ee40ed7d65cbb7eaa948b122"],["/images/icons/icon-192x192.png","ef1632bde4bbfed422aa81d1a0fec31b"],["/images/icons/icon-384x384.png","c4b609968f279a561d729f0eac182296"],["/images/icons/icon-512x512.png","7f33f6399d6441456c90d56b16a81cb2"],["/images/icons/icon-72x72.png","b37c23b70ad209836f23ccf77a43ec6a"],["/images/icons/icon-96x96.png","c79c31a21bf8646cd6e4002df0c2db89"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","ca50a37f90d29fa66daa9f8b7be06a2e"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","a7af8f923c31f6e47c11afe673aee5fd"],["/js/src/post-details.js","9a53fef7381270bb8c96a611d52ebc04"],["/js/src/schemes/pisces.js","aa788a9a68ff8d352b7b6e3dbb4ace96"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","ecade23d7bb77f013893186d56a92059"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","3da4eef253db4019ff4d8b6bf829b400"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","bb4f88d9fd9264173208a0a51c9483af"],["/lib/font-awesome/css/font-awesome.min.css","b7f16ad3c730d60ba7282b3028bff537"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","5a79f4953cba05e6d7d6e39c0cfa874e"],["/page/3/index.html","12cca4b273e826c8ff5f5883ea73ec7f"],["/page/4/index.html","3883f5c33f010460a144d83379f3c97b"],["/page/5/index.html","1849b19af79818aaa37934ff3da95636"],["/page/6/index.html","2210bb2daa47b0e36eb5a44d367fb423"],["/page/7/index.html","e24f09bf688a8666ebea7b31bfe4d535"],["/page/8/index.html","4e57d5fd2bb0cd0e67f20011444119b3"],["/tags/Angualr/index.html","57d6bb8b453ef0e04495fe6bfc786dc8"],["/tags/Angular/index.html","46b585ec5ea36cec97d52ed1120a358e"],["/tags/Array/index.html","9c2828de34504847169c038e3c5494e4"],["/tags/Bit-Manipulation/index.html","d6fdf3bc00b5ea7f3ff10459b9411c62"],["/tags/Brainteaser/index.html","991247413a0ffae1630c14dc810250b4"],["/tags/GitHub/index.html","4970350db8ad5513cedaed7b97a75aa8"],["/tags/Go/index.html","597030a556c9a6ba1250482537ac71c2"],["/tags/Hash-Table/index.html","9222895c329c3c27d0ea45bbec94c021"],["/tags/LeetCode/index.html","ab7a9ccdab74e55346b972cdd5fb21ad"],["/tags/Math/index.html","49f1f7e94a4c4c48ad2a4a0198e5bae4"],["/tags/Maven/index.html","775e8f1e4f65ac5d3fa84de06a9a2d1b"],["/tags/Python/index.html","9642e37a42b640ea3123ce23c8d269a9"],["/tags/RabbitMQ/index.html","4094cf07712cb1efc8f25b4dd7b6be04"],["/tags/SpirngBoot/index.html","8b2cf523d8b0b89a3634f8397744b2f1"],["/tags/Spring-Boot/index.html","117f01736a08a7dda343c24394abfdce"],["/tags/Spring-Security/index.html","a866e445b0654f54552cf0f405b56f62"],["/tags/Spring/index.html","da888484b770eb47f59718895073a88e"],["/tags/SpringBoot/index.html","7ae6ff756912516780f3e730b31fc781"],["/tags/Stack/index.html","0da64890ad4a2d3ff77a406104f9f4c5"],["/tags/String/index.html","42c1f6a5aa98589703d50cb5c84c8a73"],["/tags/Tree/index.html","07cf3e949dd2c9f75613c8942e46aa17"],["/tags/Vim/index.html","1ce872b7f4c604b61b4e0c3aa6a34996"],["/tags/android/index.html","0c45e0877eb5c2cd70403659db429211"],["/tags/index.html","e2813cc1862893bbeed01c26bf95b065"],["/tags/java/index.html","e73031a75acf01fb5198867017bd6bc9"],["/tags/java/page/2/index.html","65bc1eb044495f55035fc8b4609739fb"],["/tags/kotlin/index.html","bdcb3afee523bc61aac79a1d45ba4e95"],["/tags/windows/index.html","4fd74f2282a37fc4cb1f5864bb82d4f7"],["/tags/加密/index.html","bfc125218aabf56ac6cafc603d3e7f33"],["/tags/博客/index.html","0980b7ba611e3fa74b4beae526121446"],["/tags/工具/index.html","08e35159d808434910f2ff5cf9a965b9"],["/tags/推荐系统/index.html","f445a281de0c7796e4ef23bd94bb9c0c"],["/tags/数据挖掘/index.html","4472d625fc789cce81cfdab5c7371530"],["/tags/测评机/index.html","3453efcfaad5a4f3dea7e07242c19219"],["/tags/测试/index.html","69f9ab177bc01c1de5e35cac864cf837"],["/tags/生活/index.html","c0378514a697b0b639be6a22bd28093b"],["/tags/算法/index.html","ceece58b34acc5600da965a98d31acd2"],["/tags/蓝桥杯/index.html","42532c7c58bad9d62897023099e0846d"],["/tags/译文/index.html","2717a7643722841fcf579c4dba4b7dbd"],["/update/index.html","905f4af5e827db20f6e8360c1aa52bb6"]];
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







