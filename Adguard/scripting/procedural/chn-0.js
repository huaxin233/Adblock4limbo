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
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\"#main_content > .grid-boxes-in:has(> iframe[src^=\\\"//adserver.juicyads.com/\\\"])\",\"action\":[\"remove\",\"\"]}","{\"selector\":\"#main_content > .grid-boxes-in:has(> iframe[src^=\\\"https://syndication.exosrv.com/\\\"])\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".ebookRight > div.tb_cell.mb10\",\"tasks\":[[\"has\",{\"selector\":\"> div.listcell > div.lc_head > h2\",\"tasks\":[[\"has-text\",\"课本赞助商\"]]}]]}"],["{\"selector\":\"#PAGE_AD_1\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".imgNewText\",\"tasks\":[[\"has\",{\"selector\":\"> footer > .info > .source\",\"tasks\":[[\"has-text\",\"/广告/\"]]}]]}","{\"selector\":\"a\",\"tasks\":[[\"has\",{\"selector\":\"> div > p\",\"tasks\":[[\"has-text\",\"广告\"]]}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> h1\",\"tasks\":[[\"has-text\",\"推广\"]]}]]}"],["{\"selector\":\".riverSections-DS-EntryPoint1-1 > div[style^=\\\"display: grid;\\\"] > div[style^=\\\"grid-area:\\\"]:last-child > .card-DS-card1-1 > div[class^=\\\"nativeAd-DS-card\\\"]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\"li\",\"tasks\":[[\"has-text\",\"/贊助|推廣/\"]]}"],["{\"selector\":\".cube-list-recommend > div.cube-mod.cpc-card > div.cube-bd > div.cube-card > div.dh-cpcad-container\",\"tasks\":[[\"upward\",\"div.cube-mod.cpc-card\"]]}"],["{\"selector\":\".Gmaeinfobtn_tab > a.patchshow[style]\",\"tasks\":[[\"has\",{\"selector\":\"> span\",\"tasks\":[[\"has-text\",\"/^广告$/\"]]}]]}"],["{\"selector\":\".excerpt > li:has(.info .cat a[rel$=\\\"tag\\\"])\",\"tasks\":[[\"has-text\",\"产品推荐\"]]}"],["{\"selector\":\".index-list-item\",\"tasks\":[[\"has\",{\"selector\":\".tip-time\",\"tasks\":[[\"has-text\",\"广告\"]]}]]}"],["{\"selector\":\".tl_shadow\",\"tasks\":[[\"has\",{\"selector\":\"> .ti_item > .ti_infos > .label_text_tag\",\"tasks\":[[\"has-text\",\"广告\"]]}]]}"],["{\"selector\":\".bili-video-card > div[class]:only-child\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"matches-css\",{\"name\":\"content\",\"pseudo\":\"before\",\"value\":\"Adblock\"}]]}","{\"selector\":\".carousel-container > .carousel-transform > div[class^=\\\"carousel-slide\\\"] > div[class]:only-child\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"matches-css\",{\"name\":\"content\",\"pseudo\":\"before\",\"value\":\"Adblock\"}]]}","{\"selector\":\".container > div.floor-single-card:has(> div.skeleton)\",\"action\":[\"remove\",\"\"]}","{\"selector\":\".ex-card-common:has(.gg-icon)\",\"action\":[\"remove\",\"\"]}","{\"selector\":\".van-slide > .item:has(.bypb-icon)\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".container-fluid > .row > .item\",\"tasks\":[[\"has\",{\"selector\":\"> .card > .card-body > .lines > span.badge\",\"tasks\":[[\"has-text\",\"/^ad$/\"]]}]]}","{\"selector\":\".row\",\"tasks\":[[\"has\",{\"selector\":\".badge\",\"tasks\":[[\"has-text\",\"ad\"]]}]]}"],["{\"selector\":\".slide_doubleimg > .baiBox\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".readingList > ul > div\",\"tasks\":[[\"has\",{\"selector\":\"> li > span\",\"tasks\":[[\"has-text\",\"PR\"]]}]]}"],["{\"selector\":\".tabbable > div\",\"tasks\":[[\"has-text\",\"宝红\"]]}"],["{\"selector\":\"span\",\"tasks\":[[\"has\",{\"selector\":\"> p\",\"tasks\":[[\"has-text\",\"高速\"]]}]]}","{\"selector\":\"ul\",\"tasks\":[[\"has\",{\"selector\":\"> dd\",\"tasks\":[[\"has-text\",\"高速\"]]}]]}"],["{\"selector\":\".body > div.body-wrap\",\"tasks\":[[\"has\",{\"selector\":\"> div.mod-box > div.mod-title > h3\",\"tasks\":[[\"has-text\",\"友情链接\"]]}]]}"],["{\"selector\":\"#douyin-right-container > div[class] > div[class]\",\"tasks\":[[\"has\",{\"selector\":\"> ul[class] > li[class] > a[href][target=\\\"_blank\\\"] + div\",\"tasks\":[[\"has-text\",\"广告\"]]}]]}"],["{\"selector\":\".SharePanel\",\"tasks\":[[\"has\",{\"selector\":\"> .SharePanel-content > .SharePanel-contentTitle\",\"tasks\":[[\"has-text\",\"福利\"]]}]]}"],["{\"selector\":\"li.s-item\",\"tasks\":[[\"has\",{\"selector\":\"span[role=\\\"text\\\"] > span\",\"tasks\":[[\"has-text\",\"助\"]]}]]}"],["{\"selector\":\"#sidebar__inner > #links-row-1 > .box.folder\",\"tasks\":[[\"has\",{\"selector\":\"> h4\",\"tasks\":[[\"has-text\",\"AD\"]]}]]}"],["{\"selector\":\"li\",\"tasks\":[[\"has\",{\"selector\":\"> div > .content-other > .content-type\",\"tasks\":[[\"has-text\",\"广告\"]]}]]}"],["{\"selector\":\".cc5278_banner_ad\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"div[class^=\\\"titleImg-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"span[class^=\\\"source-\\\"]\",\"tasks\":[[\"has-text\",\"推广\"]]}]]}"],["{\"selector\":\"#rightPanel div[id^=\\\"page-\\\"] ~ div[class] > div > div[style^=\\\"display:\\\"] ins.adsbygoogle\",\"tasks\":[[\"upward\",\"div[style^=\\\"display:\\\"]\"]]}"],["{\"selector\":\".core-rail > div > div[id^=\\\"ember\\\"]\",\"tasks\":[[\"has\",{\"selector\":\".feed-shared-actor__description span\",\"tasks\":[[\"has-text\",\"/促銷內容|广告/\"]]}]]}","{\"selector\":\".core-rail > div > div[id^=\\\"ember\\\"]\",\"tasks\":[[\"has\",{\"selector\":\".feed-shared-actor__sub-description span\",\"tasks\":[[\"has-text\",\"/促銷內容|广告/\"]]}]]}"],["{\"selector\":\"div[data-widget-area=\\\"sidebar\\\"] > div[class=\\\"panel panel-primary\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div.panel-heading > h3\",\"tasks\":[[\"has-text\",\"广告\"]]}]]}"],["{\"selector\":\".forum_Post_index\",\"tasks\":[[\"has\",{\"selector\":\"nobr\",\"tasks\":[[\"has-text\",\"18\"]]}]]}"],["{\"selector\":\".newslist > li\",\"tasks\":[[\"has\",{\"selector\":\"> span\",\"tasks\":[[\"has-text\",\"广 告\"]]}]]}","{\"selector\":\"div[class^=\\\"news_info\\\"] > ul.newslist > li\",\"tasks\":[[\"has\",{\"selector\":\"> span\",\"tasks\":[[\"has-text\",\"广告\"]]}]]}","{\"selector\":\"li\",\"tasks\":[[\"has\",{\"selector\":\"> .titl + *\",\"tasks\":[[\"has-text\",\"/广*告/\"]]}]]}"],["{\"selector\":\".news_info > p\",\"tasks\":[[\"has\",{\"selector\":\"> strong\",\"tasks\":[[\"has-text\",\"双11红包活动推荐\"]]}]]}"],["{\"selector\":\"div[id^=\\\"aaaDiv\\\"]\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"div[class^=\\\" margin10_\\\"] > div[data-reactid] > a[class^=\\\"clearfix box_\\\"][data-on=\\\"click\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> .right > [class^=\\\"category_\\\"]\",\"tasks\":[[\"has-text\",\"Sponsored\"]]}]]}","{\"selector\":\"div[class^=\\\"leftSide_\\\"] > ._popIn_recommend + div[data-reactid]:last-child > h2\",\"tasks\":[[\"has-text\",\"NOWnews 推薦\"]]}"],["{\"selector\":\".swiper-wrapper > li.swiper-slide:has(> a[target=\\\"_blank\\\"]:not([href^=\\\"/\\\"]))\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"#toptb ~ #wp > *:not(div):not(style):not(ul):not(script) + div[class][id]:has(div[style=\\\"display:none\\\"])\",\"tasks\":[[\"has\",{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"window.slotbydup\"]]}]]}"],["{\"selector\":\".col-md-4 > div.row\",\"tasks\":[[\"has\",{\"selector\":\"> div.col > h5\",\"tasks\":[[\"has-text\",\"支持一下吧\"]]}]]}"],["{\"selector\":\".asset-content > p\",\"tasks\":[[\"has-text\",\"/二维|助教|0 元|报名费|原价/\"],[\"spath\",\" + p + p > img\"]]}","{\"selector\":\".asset-content > p\",\"tasks\":[[\"has-text\",\"/二维|助教|0 元|报名费|原价/\"],[\"spath\",\" + p > img\"]]}"],["{\"selector\":\".tpc_content\",\"tasks\":[[\"has\",{\"selector\":\"> b:nth-child(1n+40) > span > a[onmouseover=\\\"this.style.background='#DEF5CD';\\\"]\",\"tasks\":[[\"has-text\",\"91TV\"]]}],[\"spath\",\" > :nth-child(-1n+45)\"]]}","{\"selector\":\".tpc_content\",\"tasks\":[[\"has\",{\"selector\":\"> b:nth-child(1n+50) > span > a[onmouseover=\\\"this.style.background='#DEF5CD';\\\"]\",\"tasks\":[[\"has-text\",\"91TV\"]]}],[\"spath\",\" > :nth-child(-1n+55)\"]]}","{\"selector\":\"[class]\",\"tasks\":[[\"has\",{\"selector\":\"> a[onmouseover=\\\"this.style.background='#DEF5CD';\\\"]:nth-child(1n+150)\",\"tasks\":[[\"has-text\",\"/赌|娱|澳/\"]]}],[\"spath\",\" > :nth-child(-1n+155)\"]]}","{\"selector\":\"[class]\",\"tasks\":[[\"has\",{\"selector\":\"> a[onmouseover=\\\"this.style.background='#DEF5CD';\\\"]:nth-child(1n+160)\",\"tasks\":[[\"has-text\",\"/赌|娱|澳/\"]]}],[\"spath\",\" > :nth-child(-1n+170)\"]]}","{\"selector\":\"[class]\",\"tasks\":[[\"has\",{\"selector\":\"> a[onmouseover=\\\"this.style.background='#DEF5CD';\\\"]:nth-child(1n+180)\",\"tasks\":[[\"has-text\",\"/赌|娱|澳/\"]]}],[\"spath\",\" > :nth-child(-1n+188)\"]]}","{\"selector\":\"[class]\",\"tasks\":[[\"has\",{\"selector\":\"> a[onmouseover=\\\"this.style.background='#DEF5CD';\\\"]:nth-child(1n+190)\",\"tasks\":[[\"has-text\",\"/赌|娱|澳/\"]]}],[\"spath\",\" > :nth-child(-1n+195)\"]]}"],["{\"selector\":\".cell\",\"tasks\":[[\"has\",{\"selector\":\".txt\",\"tasks\":[[\"has-text\",\"广告\"]]}]]}","{\"selector\":\".imgcell\",\"tasks\":[[\"has\",{\"selector\":\".txt\",\"tasks\":[[\"has-text\",\"广告\"]]}]]}"],["{\"selector\":\"div[class^=\\\"right-feedback\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> .list-step-title\",\"tasks\":[[\"has-text\",\"网游\"]]}]]}"],["{\"selector\":\".list16 > ul > li\",\"tasks\":[[\"has-text\",\"广告\"]]}"],["{\"selector\":\"#wrapper > #mainbar > .area:not(#story):not(#comments)\",\"tasks\":[[\"has\",{\"selector\":\"> h3 > a[href]\",\"tasks\":[[\"has-text\",\"商品推薦\"]]}]]}"],["{\"selector\":\"#Rightbar > .box > .inner > .sidebar_units:not(:has(+ strong))\",\"tasks\":[[\"upward\",2]]}","{\"selector\":\"#Rightbar > .box > .inner:has(> a[href]:only-child) + .sidebar_compliance > a[href=\\\"/advertise\\\"]\",\"tasks\":[[\"upward\",2]]}","{\"selector\":\"#Rightbar > .box\",\"tasks\":[[\"has\",{\"selector\":\"> .inner > div > span\",\"tasks\":[[\"has-text\",\"Sponsored by\"]]}]]}","{\"selector\":\".box\",\"tasks\":[[\"has\",{\"selector\":\"> .inner > div > span[style]\",\"tasks\":[[\"has-text\",\"Sponsored\"]]}]]}"],["{\"selector\":\".card-wrap\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has\",{\"selector\":\"> .card-top > .s-fr\",\"tasks\":[[\"has-text\",\"广告\"]]}]]}","{\"selector\":\".card-wrap\",\"tasks\":[[\"has\",{\"selector\":\"> .card-film > .card-head > .title\",\"tasks\":[[\"has-text\",\"广告\"]]}]]}","{\"selector\":\".card-wrap\",\"tasks\":[[\"has\",{\"selector\":\"> .card-top > .s-fr\",\"tasks\":[[\"has-text\",\"广告\"]]}]]}","{\"selector\":\".vue-recycle-scroller__item-view\",\"tasks\":[[\"has\",{\"selector\":\".wbpro-ad-tag\",\"tasks\":[[\"has-text\",\"广告\"]]}]]}","{\"selector\":\".vue-recycle-scroller__item-view\",\"tasks\":[[\"has\",{\"selector\":\"div[class*=\\\"head-info_\\\"] > div\",\"tasks\":[[\"has-text\",\"热推\"]]}]]}","{\"selector\":\".vue-recycle-scroller__item-view\",\"tasks\":[[\"has\",{\"selector\":\"span[class^=\\\"wbpro-icon-search\\\"]\",\"tasks\":[[\"has-text\",\"/商|上新|好物/\"]]}]]}","{\"selector\":\".wbpro-side-panel\",\"tasks\":[[\"has\",{\"selector\":\"span[class^=\\\"wbpro-icon-search\\\"]\",\"tasks\":[[\"has-text\",\"商\"]]}]]}"],["{\"selector\":\"div[id^=\\\"postmessage_\\\"] > div[align=\\\"center\\\"][style^=\\\"font-size:11px;\\\"] > font\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}"],["{\"selector\":\".js-stream-content\",\"tasks\":[[\"has\",{\"selector\":\"div\",\"tasks\":[[\"has-text\",\"雅虎搜尋\"]]}]]}","{\"selector\":\".stream-item\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > div > span\",\"tasks\":[[\"has-text\",\"即日熱搜\"]]}]]}"],["{\"selector\":\".newswiper_big_swiper_container > div.swiper-container-horizontal > div.swiper-wrapper > div.swiper-slide:has(> a[data-href]:not([data-href^=\\\"https://v.youku.com/\\\"]):not([data-scm]))\",\"action\":[\"remove\",\"\"]}","{\"selector\":\".swiper-container-horizontal > div.swiper-wrapper > div.swiper-slide:has(a[href*=\\\"/tg.602.com/\\\"])\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".content-main > div > .container-fluid\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"广告\"]]}]]}"],["{\"selector\":\"#carousel-container > div[class^=\\\"D_\\\"] > div[class^=\\\"D_\\\"] > div[style^=\\\"width:\\\"]:has(a[aria-label^=\\\"licksang\\\"])\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"article > div.block-default\",\"tasks\":[[\"has\",{\"selector\":\"> div.content-wrapper p > span\",\"tasks\":[[\"has-text\",\"Cosmart\"]]}]]}"],["{\"selector\":\".pc-header-video > a[class^=\\\"top-ad-\\\"] + .youtube-container\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"#sidebar > ul\",\"tasks\":[[\"has\",{\"selector\":\"> h3\",\"tasks\":[[\"has-text\",\"广告\"]]}]]}","{\"selector\":\".commentlist > li.row\",\"tasks\":[[\"has\",{\"selector\":\"> div > font\",\"tasks\":[[\"has-text\",\"广告\"]]}]]}"],["{\"selector\":\".myui-panel-bg\",\"tasks\":[[\"has\",{\"selector\":\"strong\",\"tasks\":[[\"has-text\",\"广告\"]]}]]}"],["{\"selector\":\".widget_text > .inn-sidebar__widget\",\"tasks\":[[\"has\",{\"selector\":\"> .poi-panel__header > .poi-panel__header__title\",\"tasks\":[[\"has-text\",\"赞助商\"]]}]]}"],["{\"selector\":\".col-xs-6 > div[data-type][style]:has(> ins + script)\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".container-fluid > div.row\",\"tasks\":[[\"has\",{\"selector\":\"> div.item > div.card > div.card-body > div > span\",\"tasks\":[[\"has-text\",\"/^ad$/\"]]}]]}"],["{\"selector\":\".img-list > .img-item:has(> a[href*=\\\".ad_click\\\"])\",\"action\":[\"remove\",\"\"]}","{\"selector\":\"a.focus_title_inner[href*=\\\".ad_click\\\"]\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"#hellBoy > li[track-by=\\\"$index\\\"] > div[style] > .show-div\",\"tasks\":[[\"has\",{\"selector\":\"> .show-card > .update-play\",\"tasks\":[[\"has-text\",\"/^AD$/\"]]}]]}","{\"selector\":\".slider-group > .nut-swiper > .nut-swiper-inner > .nut-swiper-item\",\"tasks\":[[\"has\",{\"selector\":\"> .swiper-page > span\",\"tasks\":[[\"has-text\",\"/^AD/\"]]}]]}"],["{\"selector\":\"#sidebar > section.widget_text > div.textwidget > script[src^=\\\"//pagead2.googlesyndication.com/\\\"]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\"#root > div[class] > div[class]\",\"tasks\":[[\"matches-css\",{\"name\":\"z-index\",\"value\":\"^4$\"}],[\"has\",{\"selector\":\"> div[class]\",\"tasks\":[[\"matches-css\",{\"name\":\"height\",\"value\":\"^250px$\"}]]}]]}","{\"selector\":\"#root > div[class] > div[class]\",\"tasks\":[[\"matches-css\",{\"name\":\"z-index\",\"value\":\"^4$\"}],[\"spath\",\":has(> button path[d^=\\\"M16 4c6.627 0 12 5.373\\\"])\"]]}","{\"selector\":\"#root div[class]\",\"tasks\":[[\"matches-css\",{\"name\":\"padding-left\",\"value\":\"^70px$\"}],[\"spath\",\" > div[class]\"],[\"matches-css\",{\"name\":\"column-gap\",\"value\":\"^30px$\"}],[\"has\",{\"selector\":\"> div[class]\",\"tasks\":[[\"matches-css\",{\"name\":\"align-items\",\"value\":\"^center$\"}]]}]]}","{\"selector\":\"#root div[class]\",\"tasks\":[[\"matches-css\",{\"name\":\"position\",\"value\":\"^relative$\"}],[\"spath\",\" > div[class]\"],[\"matches-css\",{\"name\":\"justify-content\",\"value\":\"^center$\"}],[\"has\",{\"selector\":\"> div[class]\",\"tasks\":[[\"matches-css\",{\"name\":\"width\",\"value\":\"^300px$\"}]]}]]}","{\"selector\":\"#root div[class]\",\"tasks\":[[\"matches-css\",{\"name\":\"row-gap\",\"value\":\"^13px$\"}],[\"spath\",\" > div[class]\"],[\"matches-css\",{\"name\":\"row-gap\",\"value\":\"^6px$\"}],[\"has\",{\"selector\":\"> div[class]\",\"tasks\":[[\"matches-css\",{\"name\":\"width\",\"value\":\"^300px$\"}]]}]]}"],["{\"selector\":\"section[class*=\\\"widget_text\\\"] > .widget-wrap > .textwidget > div[class^=\\\"Zi_ad\\\"]\",\"tasks\":[[\"upward\",3]]}"],["{\"selector\":\"div[data-index] > article\",\"tasks\":[[\"has-text\",\"贊助活動\"]]}"],["{\"selector\":\"article > aside.left > .adsbygoogle\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"#sidebar > div.widget\",\"tasks\":[[\"has\",{\"selector\":\"> h4\",\"tasks\":[[\"has-text\",\"廣告\"]]}]]}"]];

const hostnamesMap = new Map([["getrelax.cc",0],["haoduoyun.cc",1],["bigpixel.cn",2],["lenovo.com.cn",3],["kostool.cn",4],["microsoftnews.msn.cn",5],["141jj.com",6],["hao.360.com",7],["3dmgame.com",8],["423down.com",9],["news.baidu.com",10],["tieba.baidu.com",11],["bdimg.com",11],["tieba.com",11],["bilibili.com",12],["cartoon18.com",13],["military.china.com",14],["ck101.com",15],["copyfuture.com",16],["ddooo.com",17],["dilidili3.com",18],["douyin.com",19],["douyu.com",20],["ebay.com",21],["fox-saying.com",22],["guilinlife.com",23],["hboav.com",24],["ifeng.com",25],["lihkg.com",26],["linkedin.com",27],["bbs.liyuans.com",28],["muchong.com",29],["mydrivers.com",30],["news.mydrivers.com",31],["nfmovies.com",32],["nownews.com",33],["olevod.com",34],["pcbeta.com",35],["rouman5.com",36],["ruanyifeng.com",37],["rvlev.com",38],["t66y.com",38],["image.so.com",39],["sogou.com",40],["news.sohu.com",41],["www.sohu.com",41],["oops.udn.com",42],["v2ex.com",43],["weibo.com",44],["wholehk.com",45],["yahoo.com",46],["youku.com",47],["yuanxue365.com",48],["carousell.com.hk",49],["elle.com.hk",50],["gameapps.hk",51],["jandan.net",52],["nfstar.net",53],["hmoe.one",54],["18comic.org",55],["18comic.vip",55],["18-comic.work",55],["pornbest.org",56],["nivod4.tv",57],["nivod5.tv",57],["nivod7.tv",57],["nivod8.tv",57],["nivod9.tv",57],["m.nivod4.tv",58],["m.nivod5.tv",58],["m.nivod7.tv",58],["m.nivod8.tv",58],["m.nivod9.tv",58],["ants.tw",59],["wealth.com.tw",60],["dacota.tw",61],["dcard.tw",62],["kukuo.tw",63],["sharonlife.tw",64]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
