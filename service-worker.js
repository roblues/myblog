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

var precacheConfig = [["/2016/04/20/我一直都在/index.html","4b71cfb5b7aa3763e452cf92caeea48c"],["/2016/04/21/清除右键无效项/index.html","369dfb33f2e5f520836f8050f626a3bc"],["/2016/04/21/第一次参加蓝桥杯感受/index.html","03290a730ee87e1ec9fda9591de3544e"],["/2016/04/23/LinkList特有的方法/index.html","501aec32f6f01b51a0ac09614c2cbd78"],["/2016/04/27/大学？大学？大学？/index.html","2a5eda456e7dde37d1591234d6032131"],["/2016/05/03/GitHub-for-Windows使用教程(一)/index.html","647116be4f6f859a21d5ed41b23644b6"],["/2016/05/13/GitHub-for-Windows使用教程(二)/index.html","efe198d0c272f520423d10e42f0af913"],["/2016/05/15/GitHub-for-windows使用教程（三）/index.html","60e8fbdc5a5bf5fc8ea48404828837f0"],["/2016/05/23/Java集合遍历/index.html","c2855c00a8ade0b5c6b68c5aa5216bdf"],["/2016/07/04/Activity启动的两种方式/index.html","9158faffda30d2cb284d6941cf7ff441"],["/2016/07/17/如何提高Android虚拟机的运行速度/index.html","fba1d3538b0121fb0a9ac6796d0a343a"],["/2016/08/05/FlaotActionButton详解/index.html","3bc3412d633a83bf0295c8fd02d2e1b8"],["/2016/08/05/底部导航按钮/index.html","3f27cc8ad73acc25d9511bc8be5718a2"],["/2016/08/09/正则表达式/index.html","29278aea744d71aca41b468c1c34dd78"],["/2016/08/13/Git基本操作/index.html","5cc0adba7e267566900a6c6d6bef6179"],["/2016/08/28/GitHub-for-Windows使用教程（四）/index.html","f2f6990c59484f3abfa06d92a9fc0dbc"],["/2016/09/11/String源码剖析/index.html","f3d8515cc519079e0d0c03f6beb98d4c"],["/2016/10/25/StringBuilder源码分析/index.html","a9fc747b8a9ea942eeb2338d3c66b416"],["/2016/10/27/MD5加密/index.html","6a5e828bce8b448f5eeac42f85e59a0d"],["/2016/11/27/ArrayList源码分析/index.html","3bd150ff20e3fa9acdaafee7a76dcbb9"],["/2016/12/30/2016年终总结/index.html","39615b6589e943c8ba4c36f1cdfc79da"],["/2017/01/10/Maven入门/index.html","2551b2e6155a32373224671f4f78629c"],["/2017/01/19/Junit单元测试/index.html","1640bd65ea8c0e99243c1a4341c57bee"],["/2017/02/08/Spring学习-一/index.html","2ad2ab80423c95c69b24df816ae77052"],["/2017/02/19/Log4j使用/index.html","97368ea5890513e0c304f734ad12358d"],["/2017/03/02/Spring学习记录-二/index.html","b30df01b996661bf7dc991d9db6b5744"],["/2017/04/03/python爬取斗鱼图片/index.html","177c1b1751a159bfe5c89f75f24788fe"],["/2017/04/04/计蒜客蓝桥杯模拟赛-5-试题/index.html","c94e3c2a3d2d5f63fbf42013923e3675"],["/2017/04/15/2017蓝桥杯/index.html","961ca8d5c7feefa39766cb93ea1d3f56"],["/2017/04/20/博客一周年/index.html","0d2c6bf8b01f99bf5520cfce10999dd0"],["/2017/04/30/Git教程及使用经验/index.html","b7ddccf90a442ca31fc884e46cb98dd7"],["/2017/05/08/第一个-Android-项目/index.html","4b4a97277f110af5a42460a013cc3130"],["/2017/06/22/python-实现微信打飞机/index.html","88b4e7a46dc9b4c71a7fb5b3f37a5d98"],["/2017/07/23/vim-基础学习/index.html","3f4a2bb48329b48bac4cf0936d04c529"],["/2017/08/01/Hamming-Distance-问题/index.html","8763ebbb136acbce8ced9cac2c9646b7"],["/2017/08/01/LeetCode-Array-Partition-I-561/index.html","0c0ca7a275c82b4468d353fc60f7a12e"],["/2017/08/01/LeetCode-Two-Sum-1/index.html","c3b002e3a99762213013968d87f3a8cf"],["/2017/08/02/LeetCode-Distribute-Candies-575/index.html","fd3de15a9aad7d8b5d599b5fc83cae1b"],["/2017/08/02/LeetCode-Keyboard-Row-500/index.html","02e4ac2120e2f0f21452a521a642dfd9"],["/2017/08/02/LeetCode-Number-Complement-476/index.html","b5522620decafd87e65687b6b49d4781"],["/2017/08/02/LeetCode-Reverse-Words-in-a-String-III-557/index.html","e27de76a122292a1ac6b5277bcd72dde"],["/2017/08/04/LeetCode-Fizz-Buzz-412/index.html","9e37889c228289b5fcfdb384bed171eb"],["/2017/08/04/LeetCode-Merge-Two-Binary-Trees-617/index.html","cd205bbaf5c63fe69293d536a8abcd6d"],["/2017/08/04/LeetCode-Reverse-String-344/index.html","1f85fd28763fc20df21a9eb0a1acb3a1"],["/2017/08/08/LeetCode-Island-Perimeter-463/index.html","68969f524b1bbc1a92755aa072ad6128"],["/2017/08/11/kotlin-初步学习/index.html","37f6f588322d8ec0bb393ecae18fda0e"],["/2017/08/12/Kotlin-扩展函数-属性/index.html","8045b3ef0793d1642bdf0a4d4aac38d1"],["/2017/08/13/LeetCode-Next-Greater-Element-I-496/index.html","cd56ea52138ac01b1b85a34aa1dfcbfe"],["/2017/08/13/LeetCode-Nim-Game-292/index.html","790307b4ae7390ed3cccd3ea0335dfb3"],["/2017/08/16/LeetCode-Judge-Route-Circle-657/index.html","66833c8de78eceef2cc417c5201b1b2d"],["/2017/08/16/LeetCode-Longest-Uncommon-Subsequence-I-521/index.html","eebd6ae8e35373672c69ac4cb43129e3"],["/2017/08/27/LeetCode-Move-Zeroes-283/index.html","11f4621d492265ff34652111373e0dd4"],["/2017/08/27/LeetCode-Single-Number-136/index.html","a5d57f89a855efab1f5be59c1ec13460"],["/2017/08/28/LeetCode-Reverse-Integer-7/index.html","070e6700758b6ff01a1d06905810b41d"],["/2017/09/01/协同过滤算法/index.html","2ea172c8ee40ad00a439eef34df0875c"],["/2017/09/10/LeetCode-Add-Digits-258/index.html","ca15eba31045575ad000a5d48c23eec7"],["/2017/09/10/LeetCode-Find-the-Difference-389/index.html","ec463ad94d68febbdd1fa03bcb6bedd2"],["/2017/09/14/LeetCode-Length-of-Last-Word-58/index.html","485fa9d3ad98123b37fe4857ab700acf"],["/2017/12/01/LeetCode-Binary-Number-with-Alternating-Bits-693/index.html","a004c36e597ef3307735db3bc1f2bde7"],["/2017/12/01/LeetCode-Number-of-1-Bits-191/index.html","c8c3dccfe68adde14f20a85a71d0b6b5"],["/2017/12/01/LeetCode-Self-Dividing-Numbers-728/index.html","47f8977fe3fa08338dc8e6dcf580ea1d"],["/2017/12/02/Kotlin-1-2-平台之间共享代码/index.html","f4feaed454896cd096cb126cbfdb779c"],["/2017/12/23/Kotlin中Collection一些语法总结/index.html","09d53ffda32a97e0325f5a9fa69f93fa"],["/2017/12/28/一次神奇的课设验收/index.html","00210fcfc17abca5bc2cb3d2ed15c2de"],["/2018/01/01/2017年终总结/index.html","0d9ec08d287036218d1f26dbeb4f4272"],["/2018/02/23/RabbitMQ-和-Spring-Boot-的集成/index.html","6bb77fd437a53d4a5436097085b3a0bd"],["/2018/04/27/大创项目总结/index.html","cf783f5d42eb623fcbec4c8975f84250"],["/2018/05/07/vscode-配置c-c-环境/index.html","d80b38602bcda9e93eba9b646d2d47a3"],["/2018/05/25/Apriori算法/index.html","f4232d5afe1d92a85587dd82ce43f8c7"],["/2019/01/26/Angular-管道/index.html","750cae89f44d778a5eba34f863bc68f9"],["/2019/01/26/Spring-Boot-Security-跨域请求配置/index.html","16b069bebd81cdef4d9d7a004d6e525f"],["/2019/02/02/Ktor-入门/index.html","3e623d6639df9745c4e57c5679ea1983"],["/2019/02/12/黄道十二宫/index.html","b53734574f7a1c56c99ca96054f93fda"],["/about/index.html","da4d064452f21eccdfb7071491980040"],["/archives/2016/04/index.html","9f9a55a1927af606d653fc27a3728e01"],["/archives/2016/05/index.html","8186ab9799390ffc4bb76b22f75df51d"],["/archives/2016/07/index.html","7832193be9135f367d775d70227bd69d"],["/archives/2016/08/index.html","09ab24b7b5417bfa0e80a745e9b99be4"],["/archives/2016/09/index.html","f3e7e24f41d8498856cdbd65edec031d"],["/archives/2016/10/index.html","925fcc6e8508ebded4ccda1af295743f"],["/archives/2016/11/index.html","0dd38add44b64b0354e9e292818d8e92"],["/archives/2016/12/index.html","6c1d5a6c19c01fd932dab8212c7d2427"],["/archives/2016/index.html","29feb48d8422292d2634582f438f0f57"],["/archives/2016/page/2/index.html","74c4decc5093b8455098c197bdcfacbe"],["/archives/2016/page/3/index.html","3a04888ed1e200805c10d1bbbea2a7c9"],["/archives/2017/01/index.html","27ccb0a453543cbd94961d488efee6d1"],["/archives/2017/02/index.html","a3a822b1a30edd677b407e86d1193657"],["/archives/2017/03/index.html","053126f70d489df54d0c6473adcb1245"],["/archives/2017/04/index.html","b3530cb3440b2e8cdd0390b79f51b5bf"],["/archives/2017/05/index.html","2f634d9c77ca5e0cc1cefe427a950b2f"],["/archives/2017/06/index.html","dc7e379f68f3879f302bdda5ed85ada9"],["/archives/2017/07/index.html","d721782822038a08cd827a4a634b74c2"],["/archives/2017/08/index.html","22fe41d29b9c5fa4a5c42758df49126f"],["/archives/2017/08/page/2/index.html","92e0985236c374d067a8396ea6ff2e1f"],["/archives/2017/09/index.html","98ed38e186761690b1963373959b61ca"],["/archives/2017/12/index.html","caaabcc659c5713c565bd085c9dc9969"],["/archives/2017/index.html","bc2691cf13db528f5753a3f6f46f792b"],["/archives/2017/page/2/index.html","2d95239ad41cdcbdf449d70003fe13e8"],["/archives/2017/page/3/index.html","6f3c962961c375b3d67c291c6c1a50a4"],["/archives/2017/page/4/index.html","1251a77f33f20586c0ce3a35cec00393"],["/archives/2017/page/5/index.html","c0ac2db9b4e024404a9d3411b70fa0dd"],["/archives/2018/01/index.html","45f969451f77ba6d0bf6ec088641d782"],["/archives/2018/02/index.html","71afee3ec1e53f3e2811f2fa4bd7929b"],["/archives/2018/04/index.html","baa46bd6dc181301b694e70ffba57888"],["/archives/2018/05/index.html","d73e927dc4c723a05dcd994e1d7b3675"],["/archives/2018/index.html","604d2890bd33ee4c7137dc06a594e965"],["/archives/2019/01/index.html","eeb996017217639c3e03953dfd55600f"],["/archives/2019/02/index.html","e6f4ceb0c03ad0cb894846f0e2ae8ea4"],["/archives/2019/index.html","ee690353df2a6a5d15db53a50f7d0a9d"],["/archives/index.html","f694254ba3d8553d6703399bc9c63a4b"],["/archives/page/2/index.html","1c4d251d235983b906117491ec4cb346"],["/archives/page/3/index.html","c4ee511b176cea1d04851e6f5e38c588"],["/archives/page/4/index.html","f8b3f583f1e79ca19a95258e44ff52bf"],["/archives/page/5/index.html","15ede62636daf63c6bb5cc921cb68ef3"],["/archives/page/6/index.html","5ee005c8f77efdc1ce54ba18ec9019a7"],["/archives/page/7/index.html","15fad4671047e851287fc5d943921bfb"],["/archives/page/8/index.html","8bff486b84b658dc3e5f9e98973c9f12"],["/categories/index.html","70dd8462937b59ba9d6e639a91bd1a67"],["/css/main.css","87c05ce6ae88945c898b1089b5d3dd6a"],["/images/AliPayQR.png","3f579739acbea428bbfd6caf401633a9"],["/images/WeChanQR.png","3273049e528d5c7c8d6465feeb6f0f37"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/alired.jpg","e5aae0d59e9c1ab261380536793de248"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.png","a5418ef792411cc48b8a04be1412a806"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/icons/icon-128x128.png","c47d5e504c2200f7a8e49c241d117803"],["/images/icons/icon-144x144.png","332e58a8a22f3c61a89714f92f9cd599"],["/images/icons/icon-152x152.png","75f68482ee40ed7d65cbb7eaa948b122"],["/images/icons/icon-192x192.png","ef1632bde4bbfed422aa81d1a0fec31b"],["/images/icons/icon-384x384.png","c4b609968f279a561d729f0eac182296"],["/images/icons/icon-512x512.png","7f33f6399d6441456c90d56b16a81cb2"],["/images/icons/icon-72x72.png","b37c23b70ad209836f23ccf77a43ec6a"],["/images/icons/icon-96x96.png","c79c31a21bf8646cd6e4002df0c2db89"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","2390e3b4bc805f8ddc15b78e819d8edd"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","a7af8f923c31f6e47c11afe673aee5fd"],["/js/src/post-details.js","9a53fef7381270bb8c96a611d52ebc04"],["/js/src/schemes/pisces.js","aa788a9a68ff8d352b7b6e3dbb4ace96"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","ecade23d7bb77f013893186d56a92059"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","3da4eef253db4019ff4d8b6bf829b400"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","bb4f88d9fd9264173208a0a51c9483af"],["/lib/font-awesome/css/font-awesome.min.css","b7f16ad3c730d60ba7282b3028bff537"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","c2c3eb2ed99d7f325a6d48b3b63b4485"],["/page/3/index.html","7abc21d384a8698d4d3632189e4f60d8"],["/page/4/index.html","67ffd868eee4d399e36bf342bd1eb418"],["/page/5/index.html","12385416a7dd98916fb61926e1c81dd8"],["/page/6/index.html","6231d81c0fb2d23193698c22f6880a51"],["/page/7/index.html","73888d35e882b440b45e87b3fff02b2b"],["/page/8/index.html","88f8b0d9dfba552843fc489806d5d8a3"],["/tags/Angualr/index.html","9a116268adcd73fedb31e34e4eb543e9"],["/tags/Angular/index.html","6e87cd17507079c09637c424512523b8"],["/tags/Array/index.html","20a6749dd1dfbcd35a343f3b238795ca"],["/tags/Bit-Manipulation/index.html","4d1780664f3df5c4527bd6947d49bd8e"],["/tags/Brainteaser/index.html","abc631c64cda1fcbe28cb4509532a6fa"],["/tags/GitHub/index.html","6ffd8750d115cec594d3f70659833a22"],["/tags/Go/index.html","be9eb2438ff7b753d3bcd8a49ae53b25"],["/tags/Hash-Table/index.html","95a168e38eadfa18dc0f35bba1f55785"],["/tags/LeetCode/index.html","661a9e94328a9f96ca8ffc2defef4ab8"],["/tags/Math/index.html","4fe8bdd57a2efa626c2bacc000904bc2"],["/tags/Maven/index.html","65ad54f3ab89eda956d81a103af230d8"],["/tags/Python/index.html","cf9a352b9ef7400d9a4d685207a23e29"],["/tags/RabbitMQ/index.html","7bf00763ddd0f2d01558417badb4836c"],["/tags/SpirngBoot/index.html","2337aa3022b1b0847916c2abfdf78902"],["/tags/Spring-Boot/index.html","df6ee79ffe9be8091f5db07842ccb074"],["/tags/Spring-Security/index.html","810a1319cccc5451be9031a661a9f66d"],["/tags/Spring/index.html","c1482b84b6522e008ff37377efe844e0"],["/tags/SpringBoot/index.html","4fe5cf4dc4c5426c500568adc7308241"],["/tags/Stack/index.html","de03101ebed084d490f74731b360f187"],["/tags/String/index.html","fc0d2e116de0e794a42deb9a71b9a814"],["/tags/Tree/index.html","fda90a5a41e73c39077c445b64b1e56b"],["/tags/Vim/index.html","95c02d1ad479f6d611edfffeee7c9512"],["/tags/android/index.html","2978a35c655cea212afbc3237cdfb2e2"],["/tags/index.html","e13ef6591909d955c61ce928f9b6d70f"],["/tags/java/index.html","72fc07c57083c545aa3efa7c4cb98024"],["/tags/java/page/2/index.html","326ce0e12b88b260a92f19662d2d444d"],["/tags/kotlin/index.html","ff1345e681fe739211c54c0a7a640ca1"],["/tags/windows/index.html","1e868a6f4c59d2ffe546f69196948159"],["/tags/加密/index.html","50e2c7e6cff59fee38c45c0f45009a1e"],["/tags/博客/index.html","3edf7fe47b079aaaf416cd49203fc058"],["/tags/工具/index.html","3497dd37da8127b8c7f64dc95fa3c804"],["/tags/推荐系统/index.html","acc55e31c40ae3def23fd76d5c432a99"],["/tags/数据挖掘/index.html","319083c7d3976ada9bceab53c41c07e2"],["/tags/测评机/index.html","932d9d8672e6f942bdf2da0ede9b9e7e"],["/tags/测试/index.html","6442866cdbaca3c9b3e3fe00c1c7ae20"],["/tags/生活/index.html","0079bba0d9f5b737ccc248f2f356681b"],["/tags/算法/index.html","c00cfe7cf091b99d117cf185959d4c10"],["/tags/蓝桥杯/index.html","b9a9aa61d773758f7c7c69268baabe00"],["/tags/译文/index.html","466da54ed26af8b7fdabcf81dcd7244e"],["/update/index.html","61ef0e1b55d18d2c069b591f78b9f086"]];
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







