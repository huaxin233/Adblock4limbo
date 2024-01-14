/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2014-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock
*/

/* jshint esversion:11 */

'use strict';

// ruleset: chn-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssDeclarativeImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\"#firstSingle\",\"action\":[\"style\",\"padding: 0 !important;\"]}"],["{\"selector\":\"#myTestAd\",\"action\":[\"style\",\"height: 1px!important;\"]}"],["{\"selector\":\".adsbygoogle\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\"#ayx\",\"action\":[\"style\",\"position: absolute !important; left: -3000px !important;\"]}","{\"selector\":\"a[href*=\\\".yabo816.\\\"]\",\"action\":[\"style\",\"position: absolute !important; left: -3000px !important;\"]}","{\"selector\":\"div[style^=\\\"position: fixed;bottom:\\\"]\",\"action\":[\"style\",\"position: absolute !important; left: -3000px !important;\"]}"],["{\"selector\":\".q-body--prevent-scroll\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\"#ac-globalnav\",\"action\":[\"style\",\"top: 0 !important;\"]}","{\"selector\":\".ac-gn-blur\",\"action\":[\"style\",\"top: 0 !important;\"]}","{\"selector\":\"html #globalnav\",\"action\":[\"style\",\"top: 0 !important;\"]}","{\"selector\":\"html\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\"[data-href*=\\\"://sax\\\"]\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\".finance_header\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: visible!important;\"]}"],["{\"selector\":\"html\",\"action\":[\"style\",\"overflow: visible!important;\"]}"],["{\"selector\":\"#detect.ad-placement\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"background-image: none !important;\"]}"],["{\"selector\":\".top_bg\",\"action\":[\"style\",\"height: 60px !important;\"]}"],["{\"selector\":\"#content_left > div[style*=\\\"display:block !important;\\\"]:not(.result)\",\"action\":[\"style\",\"position: absolute!important; left: -4000px!important;\"]}","{\"selector\":\".ec_wise_ad\",\"action\":[\"style\",\"position: absolute !important; left: -3000px !important;\"]}"],["{\"selector\":\".special_conf_skin .wrap1\",\"action\":[\"style\",\"background: none !important;\"]}"],["{\"selector\":\".bili-video-card:has(.bili-video-card__info--ad) > .bili-video-card__skeleton\",\"action\":[\"style\",\"visibility: visible !important;\"]}","{\"selector\":\".bili-video-card:has(.bili-video-card__info--creative-ad) > .bili-video-card__skeleton\",\"action\":[\"style\",\"visibility: visible !important;\"]}"],["{\"selector\":\".sidebar > section#text-8[style*=\\\"bottom: 240px;\\\"]\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\"#ADback\",\"action\":[\"style\",\"background: none !important;\"]}"],["{\"selector\":\"body[style*=\\\"overflow\\\"]\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"padding-top: 0!important;\"]}"],["{\"selector\":\"[data-spotim-module=\\\"recirculation\\\"][data-spotim-showing-slots~=\\\"1-start-300x250\\\"] .spotim-recirculation div[data-spotim-row] > div[data-spotim-slot-size=\\\"300x250\\\"] ~ .sprcRftoX\",\"action\":[\"style\",\"margin-left: 0!important;\"]}","{\"selector\":\"body [data-spotim-module=\\\"recirculation\\\"][data-spotim-showing-slots~=\\\"1-start-300x250\\\"] .sprc2PlxR [data-spotim-row=\\\"1\\\"]::before\",\"action\":[\"style\",\"left: 0!important;\"]}"],["{\"selector\":\"html\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\"div[id^=\\\"gklobl\\\"]\",\"action\":[\"style\",\"height: 1px!important;\"]}"],["{\"selector\":\".wpcom_ad_wrap\",\"action\":[\"style\",\"position: absolute !important; left: -3000px !important;\"]}"],["{\"selector\":\".adsbygoogle\",\"action\":[\"style\",\"height: 1px !important;\"]}"],["{\"selector\":\".wrapper > div[data-content-source] > .modalOpenWidth[style*=\\\"top:\\\"]\",\"action\":[\"style\",\"top: 80px !important;\"]}"],["{\"selector\":\".app.padding > .header\",\"action\":[\"style\",\"top: 0 !important;\"]}","{\"selector\":\".app.padding\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\".t-b.sel > ul.nl > li:has(> a[href*=\\\"/lapin.\\\"])\",\"action\":[\"style\",\"visibility: hidden !important;\"]}"],["{\"selector\":\"#comment\",\"action\":[\"style\",\"margin-bottom: 0 !important;\"]}"],["{\"selector\":\"body[style]\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\"#adleft\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}","{\"selector\":\"#adright\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}","{\"selector\":\"a[onclick*=\\\"openurl\\\"][target=\\\"_blank\\\"] img[src^=\\\"/static/\\\"]\",\"action\":[\"style\",\"position: absolute!important; top: -9999px!important; left: -9999px!important; bottom: unset!important;\"]}","{\"selector\":\"body > .hidden-xs > div[id]:has(> img[src^=\\\"/static/\\\"][onclick*=\\\"open\\\"])\",\"action\":[\"style\",\"position: absolute!important; top: -9999px!important; left: -9999px!important; bottom: unset!important;\"]}","{\"selector\":\"img[src^=\\\"/pic/tu/\\\"]\",\"action\":[\"style\",\"visibility: hidden!important;\"]}"],["{\"selector\":\"#mainContent\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"#j-topBgBox + .crumbs-nav.top-op\",\"action\":[\"style\",\"margin-bottom: 10px !important;\"]}"],["{\"selector\":\"body #aswift_1:not(#style_important)\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"body.modal-open\",\"action\":[\"style\",\"padding-right: 0!important; overflow: visible!important;\"]}"],["{\"selector\":\"#SlashviewAdDetector\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".sptable_do_not_remove\",\"action\":[\"style\",\"display: block !important; visibility: hidden !important;\"]}"],["{\"selector\":\".main-content\",\"action\":[\"style\",\"background-image: none !important;\"]}"],["{\"selector\":\"#wrapfabtest\",\"action\":[\"style\",\"height: 1px!important;\"]}"],["{\"selector\":\".player-rm > a[target=\\\"_blank\\\"]\",\"action\":[\"style\",\"position: absolute !important; left: -3000px !important;\"]}","{\"selector\":\"a[href*=\\\".umtrack.com/\\\"]\",\"action\":[\"style\",\"position: absolute !important; left: -3000px !important;\"]}"],["{\"selector\":\"#player_div\",\"action\":[\"style\",\"display: block!important;\"]}"],["{\"selector\":\"iframe[width=\\\"728\\\"][height=\\\"90\\\"]\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\"a[href*=\\\"/entry/register/?i_code=\\\"]\",\"action\":[\"style\",\"position: absolute !important; left: -3000px !important;\"]}"],["{\"selector\":\"#acornerinner1122\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\".ad-area\",\"action\":[\"style\",\"position: absolute !important; left: -3000px !important;\"]}"],["{\"selector\":\".app-container[aria-expanded=\\\"false\\\"] section.with-ad\",\"action\":[\"style\",\"width: calc(100% - 20px) !important;\"]}","{\"selector\":\".c-ad-103\",\"action\":[\"style\",\"height: 0 !important;\"]}","{\"selector\":\".main_ad_head_wide\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}","{\"selector\":\".with-ad[data-layout=\\\"list\\\"] .main-header\",\"action\":[\"style\",\"width: 100% !important;\"]}","{\"selector\":\".with-ad[data-layout=\\\"list\\\"][data-section-type=\\\"new-video\\\"] .content-wrap:nth-child(-1n+2)\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\"div[class*=\\\"-ad-sidebar-\\\"]\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow-y: auto !important;\"]}"],["{\"selector\":\".download .content-area > div[class]\",\"action\":[\"style\",\"background-image: none !important;\"]}"],["{\"selector\":\"#m2\",\"action\":[\"style\",\"height: 5px!important;\"]}"],["{\"selector\":\"#video_player\",\"action\":[\"style\",\"display: block!important;\"]}","{\"selector\":\".playmar > .playl\",\"action\":[\"style\",\"visibility: hidden!important;\"]}","{\"selector\":\".playmar > .playr\",\"action\":[\"style\",\"visibility: hidden!important;\"]}"],["{\"selector\":\".bg-overlayer\",\"action\":[\"style\",\"pointer-events: unset !important;\"]}"],["{\"selector\":\".player-side > .block\",\"action\":[\"style\",\"visibility: hidden !important; min-height: 390px !important;\"]}"],["{\"selector\":\"#ypaad\",\"action\":[\"style\",\"height: 3px!important;\"]}"],["{\"selector\":\"img[width=\\\"960\\\"][height=\\\"90\\\"]\",\"action\":[\"style\",\"height: 0 !important;\"]}"],["{\"selector\":\".fb_fanpage_inpage > .other_news_box_2\",\"action\":[\"style\",\"padding: 0 0px!important; margin: 26px 0!important;\"]}"],["{\"selector\":\"#BH-bigbanner\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}","{\"selector\":\"#flyRightBox\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}","{\"selector\":\"img[onload=\\\"AntiAd.check(this)\\\"]\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\"#header > nav.floated-navbar\",\"action\":[\"style\",\"top: 0!important;\"]}"],["{\"selector\":\".whitecon > .related[data-desc=\\\"相關新聞\\\"] > li:nth-child(5)\",\"action\":[\"style\",\"margin-right: 0!important; margin-left: 20px!important;\"]}"],["{\"selector\":\"a[href*=\\\".11h5.\\\"] img\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\"body > article[class][style*=\\\"position: fixed;top: 0;z-index: 9999;display:block !important;\\\"]\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}"]];

const hostnamesMap = new Map([["pansci.asia",0],["10co.biz",1],["10co.co",1],["10co.me",1],["10co.xyz",1],["itshokunin.cc",2],["alotof.software",2],["mp4er.cc",3],["mp4er.com",3],["theporn.cc",4],["69xx.one",4],["theav.xyz",4],["apple.com.cn",5],["sina.cn",6],["money.163.com",7],["h5.17k.com",[8,9]],["mobile01.com",8],["1keydata.com",10],["4399.com",11],["gameapps.hk",11],["51cto.com",12],["baidu.com",13],["tieba.baidu.com",14],["bilibili.com",15],["buzzorange.com",16],["csgoob.com",17],["dm5.com",18],["duodada.com",19],["m.lelekan.com",19],["chinese.engadget.com",20],["ezneering.com",21],["game735.com",22],["ghxi.com",23],["haoweichi.com",24],["ekamus.info",24],["huaban.com",25],["iqihang.com",26],["ithome.com",27],["jieav.com",28],["linovelib.com",29],["yodu.org",29],["nfmovies.com",30],["nxpaaq.com",31],["book.qidian.com",32],["rjno1.com",33],["slashlook.com",34],["slashview.com",35],["t66y.com",36],["udn.com",37],["v2rayssr.com",38],["waipian1.com",39],["waipian10.com",39],["waipian11.com",39],["waipian12.com",39],["waipian13.com",39],["waipian14.com",39],["waipian15.com",39],["waipian16.com",39],["waipian17.com",39],["waipian18.com",39],["waipian19.com",39],["waipian2.com",39],["waipian20.com",39],["waipian21.com",39],["waipian22.com",39],["waipian23.com",39],["waipian24.com",39],["waipian25.com",39],["waipian26.com",39],["waipian27.com",39],["waipian28.com",39],["waipian29.com",39],["waipian3.com",39],["waipian30.com",39],["waipian31.com",39],["waipian32.com",39],["waipian33.com",39],["waipian34.com",39],["waipian35.com",39],["waipian36.com",39],["waipian37.com",39],["waipian38.com",39],["waipian39.com",39],["waipian4.com",39],["waipian40.com",39],["waipian5.com",39],["waipian6.com",39],["waipian7.com",39],["waipian8.com",39],["waipian9.com",39],["weihemenye.com",40],["discuss.com.hk",41],["ulifestyle.com.hk",42],["applefans.today",42],["bde4.icu",43],["520cc.me",44],["manwa.me",45],["liaoningmovie.net",46],["sutin0831.pixnet.net",47],["renfei.net",48],["xbgame.net",49],["macapp.so",50],["58b.tv",51],["aiyifan.tv",52],["iyf.tv",[52,53]],["bingfeng.tw",54],["com.tw",55],["cna.com.tw",56],["gamer.com.tw",57],["kocpc.com.tw",58],["ltn.com.tw",59],["dilidili.wang",[60,61]]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map([["h5.dilidili.wang",[60]]]);

self.declarativeImports = self.declarativeImports || [];
self.declarativeImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
