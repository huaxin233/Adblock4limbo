/*******************************************************************************

    uBlock Origin - a browser extension to block requests.
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

// ruleset: nld-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\"div[class*=\\\"admarktTitle\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"[id^=\\\"text-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"a[href]:has([width=\\\"300\\\"][height=\\\"250\\\"])\"}]]}"],["{\"selector\":\"div[class]:has(> .adsbygoogle)\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"a[href=\\\"/adverteren/\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".card-header\",\"tasks\":[[\"has-text\",\"/Advert|Spons/\"],[\"upward\",\"div.card\"]]}"],["{\"selector\":\".pub-imu\",\"tasks\":[[\"upward\",2]]}","{\"selector\":\".pub-text\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\"div[style*=\\\"width:970px\\\"]\",\"tasks\":[[\"has-text\",\"Reclame\"]]}","{\"selector\":\"div[style^=\\\"width:336px;height:290px\\\"]\",\"tasks\":[[\"has-text\",\"Reclame\"]]}"],["{\"selector\":\"div.gameinfo\",\"tasks\":[[\"has-text\",\"/sponsored links/i\"]]}"],["{\"selector\":\".ad--rectangle\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\"div[class^=\\\"grid-item\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"div\",\"tasks\":[[\"has-text\",\"/advert/i\"]]}]]}"],["{\"selector\":\".elementor-widget-container > a:not([href*=\\\"https://motorrijder.be\\\"]) > img\",\"tasks\":[[\"upward\",\".elementor-widget-image\"]]}"],["{\"selector\":\".tekstboldwit td\",\"tasks\":[[\"has-text\",\"/advert/i\"]]}","{\"selector\":\".tekstboldwit\",\"tasks\":[[\"has-text\",\"ADVERT\"]]}"],["{\"selector\":\".adv-link\",\"tasks\":[[\"upward\",\".sidebar\"]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has-text\",\"/Schijnwerpers|Partners/\"]]}"],["{\"selector\":\".palnw-widget\",\"tasks\":[[\"has-text\",\"Advert\"]]}"],["{\"selector\":\"[id^=\\\"media_image\\\"]\",\"tasks\":[[\"has-text\",\"/advert/i\"]]}"],["{\"selector\":\".sc-tbf0fc-2\",\"tasks\":[[\"has-text\",\"/Advert/i\"],[\"upward\",\"div[class]\"]]}"],["{\"selector\":\"[id^=\\\"text-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\".widget-title\",\"tasks\":[[\"has-text\",\"ADVERTEERDERS\"]]}]]}"],["{\"selector\":\"[id^=\\\"text-\\\"]\",\"tasks\":[[\"has-text\",\"sponsors\"]]}"],["{\"selector\":\".d-lg-block.d-none\",\"tasks\":[[\"has-text\",\"Advert\"],[\"spath\",\":not(:has(.jcarousel-skin-tango))\"]]}"],["{\"selector\":\"li\",\"tasks\":[[\"has-text\",\"/advert/i\"]]}"],["{\"selector\":\".wpb_wrapper > div[id^=\\\"techp\\\"]\",\"tasks\":[[\"upward\",\".g-cols.wpb_row\"]]}","{\"selector\":\".wpb_wrapper:has(> div[class^=\\\"g\\\"])\",\"tasks\":[[\"upward\",\"section[class$=\\\"wpb_row height_small\\\"]\"],[\"spath\",\":not(:nth-of-type(1))\"]]}"],["{\"selector\":\"[class*=\\\"rowcontainer\\\"]:has(div[class*=\\\"ad\\\"])\",\"tasks\":[[\"has-text\",\"/Gesponsorde inhoud/i\"]]}"],["{\"selector\":\".widget-container\",\"tasks\":[[\"has\",{\"selector\":\"[id^=\\\"text-\\\"]:has(script[src*=\\\"/ad\\\"])\"}]]}"],["{\"selector\":\".list-group-item\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Ad\"]]}]]}"],["{\"selector\":\"[id^=\\\"rossel-leaderboard\\\"]\",\"tasks\":[[\"upward\",\".tdc-row\"]]}"],["{\"selector\":\".elementor-widget-heading\",\"tasks\":[[\"has-text\",\"/Partners|Advert/\"],[\"spath\",\"+ section\"]]}","{\"selector\":\".elementor-widget-heading\",\"tasks\":[[\"has-text\",\"/Partners|Advert/\"]]}"],["{\"selector\":\"[id^=\\\"block\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"h1\",\"tasks\":[[\"has-text\",\"Advertentie\"]]}]]}"],["{\"selector\":\".bookingaff\",\"tasks\":[[\"upward\",\".card\"]]}"],["{\"selector\":\".widget:has(iframe[data-src*=\\\"banner\\\"])\",\"tasks\":[[\"upward\",\".footer-widget-zone\"]]}"],["{\"selector\":\".hide-for-small-only\",\"tasks\":[[\"has-text\",\"Sponsors\"]]}"],["{\"selector\":\".c-comparison-list__usp-label\",\"tasks\":[[\"has-text\",\"Adv\"],[\"upward\",\".c-comparison-list__item\"]]}"],["{\"selector\":\".elementor-section\",\"tasks\":[[\"has-text\",\"partners\"]]}"],["{\"selector\":\".text-center\",\"tasks\":[[\"has-text\",\"/Reclame/i\"]]}"],["{\"selector\":\".widgetbar > div.row > *\",\"tasks\":[[\"has-text\",\"Advert\"]]}"],["{\"selector\":\"[class^=\\\"zijbalk\\\"] > table > tbody\",\"tasks\":[[\"has-text\",\"Advertentie\"]]}"],["{\"selector\":\"#posts .thead\",\"tasks\":[[\"has-text\",\"Advert\"]]}"],["{\"selector\":\"#topstory > div\",\"tasks\":[[\"has-text\",\"Advertentie\"]]}"],["{\"selector\":\".adsbygoogle\",\"tasks\":[[\"upward\",\"[id^=\\\"custom_html\\\"]\"]]}"],["{\"selector\":\".mt15.container\",\"tasks\":[[\"has-text\",\"Advert\"]]}"],["{\"selector\":\"p\",\"tasks\":[[\"has-text\",\",\"],[\"not\",{\"selector\":\"\",\"tasks\":[[\"has-text\",\"/[a-z]|[0-9]/i\"]]}]]}"],["{\"selector\":\"div[class*=\\\"section-sidebar\\\"] figure\",\"tasks\":[[\"has-text\",\"/advert/i\"]]}"],["{\"selector\":\"[id^=\\\"custom_html\\\"]\",\"tasks\":[[\"has-text\",\"Sexafspraakjes\"]]}"],["{\"selector\":\".gdlr-sidebar\",\"tasks\":[[\"has-text\",\"sponsoren\"]]}"],["{\"selector\":\".banner\",\"tasks\":[[\"upward\",\".widget\"]]}"],["{\"selector\":\".slider.container\",\"tasks\":[[\"has\",{\"selector\":\".twelvecol\",\"tasks\":[[\"has-text\",\"partners\"]]}]]}"],["{\"selector\":\"article.overview-item\",\"tasks\":[[\"has-text\",\"Sponsored\"]]}","{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"Inject=!\"]]}"],["{\"selector\":\".hidden-xs.az-adverts h2\",\"tasks\":[[\"has-text\",\"/Advert/i\"]]}"],["{\"selector\":\"div[id^=\\\"ai_widget\\\"]\",\"tasks\":[[\"has-text\",\"/advert/i\"]]}"],["{\"selector\":\"div[class^=\\\"rectangle\\\"]\",\"tasks\":[[\"has-text\",\"/advert/i\"]]}"],["{\"selector\":\"[href^=\\\"https://t.adating.link/\\\"]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\"[id^=\\\"loaBlock\\\"]\",\"tasks\":[[\"has-text\",\"Advertentie\"]]}"],["{\"selector\":\"div[class*=\\\"slideshow-wrapper\\\"]\",\"tasks\":[[\"has-text\",\"/vriend|partners|hoofdsponsor/i\"]]}"],["{\"selector\":\"[id^=\\\"text-\\\"]\",\"tasks\":[[\"has-text\",\"adv\"]]}"],["{\"selector\":\"[id^=\\\"text\\\"][class$=\\\"sidebar-widget\\\"]\",\"tasks\":[[\"has-text\",\"/casino/i\"],[\"spath\",\":not(:has(div[class=\\\"widget-title\\\"]))\"]]}"],["{\"selector\":\".sidebarbox > .widgettitle\",\"tasks\":[[\"has-text\",\"Banner\"]]}"],["{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"advertentie\"]]}"],["{\"selector\":\"[href^=\\\"/banner-click.html\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"div[data-name=\\\"dynamic-content-injected\\\"]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\".theiaStickySidebar > .widget\",\"tasks\":[[\"has-text\",\"Advertentie\"]]}"],["{\"selector\":\".component__pubble-banner:has([advobject])\",\"tasks\":[[\"upward\",\".bg-gray-100\"]]}"],["{\"selector\":\".content-start > .w-full\",\"tasks\":[[\"has-text\",\"Externe\"]]}"],["{\"selector\":\"#rsidebar > ul > li > h2\",\"tasks\":[[\"has-text\",\"/ad/i\"]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has-text\",\"Links\"]]}"],["{\"selector\":\".tile-category\",\"tasks\":[[\"has-text\",\"/advert/i\"],[\"upward\",\".aw-tile\"]]}"],["{\"selector\":\"[id^=\\\"div-gpt-ad\\\"]\",\"tasks\":[[\"upward\",\".component__plugin\"]]}","{\"selector\":\"div.text-center[advobject]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\".Textads\",\"tasks\":[[\"upward\",\".ContentRightBlock\"]]}"],["{\"selector\":\".block\",\"tasks\":[[\"has-text\",\"Gesponsorde\"]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has\",{\"selector\":\".widget-title\",\"tasks\":[[\"has-text\",\"/Partners/i\"]]}]]}"],["{\"selector\":\"div[class*=\\\"elementor-widget-button\\\"]\",\"tasks\":[[\"has-text\",\"Advert\"]]}"],["{\"selector\":\"div[id^=\\\"ster-ad-bnnvara-\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has-text\",\"Sponsors\"]]}"],["{\"selector\":\"a[href] > img[src*=\\\"wp.com\\\"]\",\"tasks\":[[\"upward\",\".wp-block-image\"],[\"spath\",\":not(:has(a[href*=\\\"backme.org\\\"]))\"]]}","{\"selector\":\"p.has-small-font-size\",\"tasks\":[[\"has-text\",\"Advertentie\"]]}"],["{\"selector\":\"[id^=\\\"amzn-assoc-ad\\\"]\",\"tasks\":[[\"upward\",\"[id^=\\\"block\\\"]\"]]}"],["{\"selector\":\"p\",\"tasks\":[[\"has\",{\"selector\":\"a[href]:has(img[src*=\\\"creditexpo.nl/wp-content/uploads/\\\"][width=\\\"300\\\"])\"}]]}"],["{\"selector\":\"iframe[src^=\\\"https://bitvavo.com/assets/static/widget/trade.html\\\"]\",\"tasks\":[[\"upward\",\".td_block_wrap\"]]}"],["{\"selector\":\".article-view [href^=\\\"https://cvandaag.nl/ad/click\\\"]\",\"tasks\":[[\"upward\",\".d-none\"]]}","{\"selector\":\"[class^=\\\"news\\\"] [href^=\\\"https://cvandaag.nl/ad/click\\\"]\",\"tasks\":[[\"upward\",\"div\"]]}"],["{\"selector\":\"aside[class^=\\\"td_block\\\"]\",\"tasks\":[[\"has-text\",\"/partners/i\"]]}"],["{\"selector\":\".elementor-widget-container\",\"tasks\":[[\"has-text\",\"/powered by/i\"]]}"],["{\"selector\":\".nxs-default-p > p\",\"tasks\":[[\"has-text\",\"advert\"]]}"],["{\"selector\":\"#text-2\",\"tasks\":[[\"has-text\",\"Advertentie\"]]}"],["{\"selector\":\".elementor-element > .elementor-element-populated:has(.banner-container)\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has-text\",\"/podcast/i\"]]}]]}"],["{\"selector\":\".tile-advert\",\"tasks\":[[\"upward\",\".tile-wrapper\"]]}"],["{\"selector\":\".wrapper\",\"tasks\":[[\"has-text\",\"Youvia\"]]}"],["{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"DenD Partners\"],[\"upward\",\"section\"]]}","{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"DenD Promoties\"],[\"upward\",\"aside\"]]}"],["{\"selector\":\"[class*=\\\"elementor-element-\\\"]\",\"tasks\":[[\"has-text\",\"/onze sponsors/i\"]]}"],["{\"selector\":\"#news li\",\"tasks\":[[\"has-text\",\"Adv\"]]}"],["{\"selector\":\"td[align=\\\"CENTER\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"td[background*=\\\"pics\\\"]\",\"tasks\":[[\"has-text\",\"/sponsor/i\"]]}]]}"],["{\"selector\":\"[id^=\\\"custom_html\\\"]\",\"tasks\":[[\"has-text\",\"Afspreken\"]]}","{\"selector\":\"[id^=\\\"custom_html\\\"]\",\"tasks\":[[\"has-text\",\"Werelds Beste\"]]}"],["{\"selector\":\"footer > section:has(.logo_showcase)\",\"tasks\":[[\"has-text\",\"partners\"]]}"],["{\"selector\":\"[class^=\\\"av_textblock\\\"]\",\"tasks\":[[\"has-text\",\"/advert/i\"]]}","{\"selector\":\"aside section[class$=\\\"widget_text\\\"]\",\"tasks\":[[\"has-text\",\"wordt mede mogelijk gemaakt door\"]]}","{\"selector\":\"section[class^=\\\"avia_codeblock\\\"]\",\"tasks\":[[\"has-text\",\"wordt mede mogelijk gemaakt door\"]]}"],["{\"selector\":\"section\",\"tasks\":[[\"has\",{\"selector\":\".masonry-item:not(:has(a[href*=\\\"edelmetaal-info.nl\\\"]))\"}]]}"],["{\"selector\":\".has-items-center > .title-container\",\"tasks\":[[\"has-text\",\"/deals/i\"]]}"],["{\"selector\":\"li\",\"tasks\":[[\"has\",{\"selector\":\"div[class$=\\\"left\\\"]\",\"tasks\":[[\"has-text\",\"/gokkasten|online casino|casino|sportwedden/i\"],[\"spath\",\":not(:has(a[href^=\\\"https://feijenoordnieuws.nl/\\\"]))\"]]}]]}"],["{\"selector\":\"div.profiel\",\"tasks\":[[\"has-text\",\"Powered by\"]]}"],["{\"selector\":\".spotlight\",\"tasks\":[[\"has-text\",\"Partners\"]]}"],["{\"selector\":\".adunitContainer\",\"tasks\":[[\"upward\",\".items-center\"]]}"],["{\"selector\":\".Article__inner > .Article__title\",\"tasks\":[[\"has-text\",\"Advert\"]]}"],["{\"selector\":\"[href^=\\\"/nieuws/advert\\\"]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\".type-post\",\"tasks\":[[\"has-text\",\"advert\"]]}"],["{\"selector\":\"[id^=\\\"custom_html-\\\"]\",\"tasks\":[[\"has-text\",\"Favoriete Pornosterren\"]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has\",{\"selector\":\".widget-title\",\"tasks\":[[\"has-text\",\"Vrienden\"]]}]]}"],["{\"selector\":\".bannergroup\",\"tasks\":[[\"upward\",\".module\"]]}"],["{\"selector\":\"[id*=\\\"ros-300x600\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".widget[class^=\\\"td_block_template\\\"]\",\"tasks\":[[\"has-text\",\"Advert\"]]}"],["{\"selector\":\"#navleft > center\",\"tasks\":[[\"has-text\",\"advert\"]]}","{\"selector\":\"div#block-blue\",\"tasks\":[[\"has-text\",\"advert\"]]}"],["{\"selector\":\".rounded-md:has(p[class^=\\\"call-to-action\\\"])\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has-text\",\"/Akkoord en door naar/i\"]]}]]}"],["{\"selector\":\".network\",\"tasks\":[[\"has-text\",\"Gesponsorde links\"]]}","{\"selector\":\"section\",\"tasks\":[[\"has-text\",\"advertentie\"]]}"],["{\"selector\":\".tagwrapper\",\"tasks\":[[\"upward\",\".row__item\"]]}"],["{\"selector\":\".adswiper\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"#mvp-content-main .adsbygoogle\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has-text\",\"links\"]]}"],["{\"selector\":\".pane_results > div\",\"tasks\":[[\"has-text\",\"Ads\"]]}"],["{\"selector\":\"[id*=\\\"dfptaghomeadvertorial\\\"]\",\"tasks\":[[\"upward\",\".views-rows > .row > .col\"]]}"],["{\"selector\":\"[id^=\\\"tdi_\\\"].tdc-row\",\"tasks\":[[\"has-text\",\"Casino\"]]}"],["{\"selector\":\".details-rectangle\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".post\",\"tasks\":[[\"has-text\",\"Sponsor\"]]}"],["{\"selector\":\"div[id^=\\\"content\\\"]:not(:has(a[href^=\\\"index.php?\\\"]))\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has-text\",\"/\\\\b/i\"]]}]]}"],["{\"selector\":\".elementor-widget-container > a:not([href*=\\\"https://kicxstart.nl/\\\"]) > img\",\"tasks\":[[\"upward\",\".elementor-widget-image\"]]}"],["{\"selector\":\".node-advertorial\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"a[href*=\\\"/adverteren\\\"]\",\"tasks\":[[\"upward\",2]]}","{\"selector\":\"div[class*=\\\"Sidebar\\\"] > [class]\",\"tasks\":[[\"has-text\",\"/Webcamsex/i\"]]}"],["{\"selector\":\"[id^=\\\"text-\\\"]\",\"tasks\":[[\"has-text\",\"Advert\"]]}"],["{\"selector\":\".panel-grid\",\"tasks\":[[\"has-text\",\"Advertentie\"]]}"],["{\"selector\":\"div.row\",\"tasks\":[[\"has\",{\"selector\":\" > section > .cycler:has(img[src*=\\\"banner\\\"])\"}]]}"],["{\"selector\":\".cb-sidebar-widget\",\"tasks\":[[\"has-text\",\"Kijk ook eens op:\"]]}"],["{\"selector\":\".content > table\",\"tasks\":[[\"has\",{\"selector\":\":scope > tbody\",\"tasks\":[[\"has-text\",\"advert\"]]}]]}"],["{\"selector\":\"[class^=\\\"article-\\\"][class$=\\\"_article\\\"]\",\"tasks\":[[\"has\",{\"selector\":\".category-label_label\",\"tasks\":[[\"has-text\",\"Advertorial\"]]}]]}"],["{\"selector\":\".widgettitle\",\"tasks\":[[\"has-text\",\"/advert|banner/i\"],[\"upward\",\".widget\"]]}"],["{\"selector\":\".content > [id^=\\\"luchtvaartnieuws.nl_web_\\\"]\",\"tasks\":[[\"upward\",\".block\"]]}","{\"selector\":\"[id^=\\\"block-block-\\\"]\",\"tasks\":[[\"has-text\",\"/voordelige/i\"]]}","{\"selector\":\"[id^=\\\"luchtvaartnieuws.nl_mob_mobilerectangle\\\"]\",\"tasks\":[[\"upward\",\"div[style]\"]]}"],["{\"selector\":\"[id^=\\\"custom_html\\\"]\",\"tasks\":[[\"has-text\",\"/advert/i\"]]}"],["{\"selector\":\".grijze-balk\",\"tasks\":[[\"has-text\",\"Advert\"]]}"],["{\"selector\":\".widget-title\",\"tasks\":[[\"has-text\",\"Sponsors\"],[\"upward\",\".sb-widget\"]]}"],["{\"selector\":\".bannergroup\",\"tasks\":[[\"upward\",\"div[class^=\\\"t3-module\\\"]\"]]}"],["{\"selector\":\".sponsors-billboard\",\"tasks\":[[\"upward\",\".fullWidthWhite\"]]}"],["{\"selector\":\"div[style] [id*=\\\"728x90\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".rcol-titel\",\"tasks\":[[\"has-text\",\"Advert\"]]}"],["{\"selector\":\".latestnewsbx\",\"tasks\":[[\"has-text\",\"Advert\"]]}"],["{\"selector\":\".elementor-widget-container\",\"tasks\":[[\"has-text\",\"Advertentie\"],[\"upward\",2]]}","{\"selector\":\"a[href=\\\"/partner/profielpartner/\\\"]\",\"tasks\":[[\"upward\",\".elementor-widget-wrap\"]]}"],["{\"selector\":\"[id^=\\\"custom_html\\\"]\",\"tasks\":[[\"has-text\",\"/Webcamsex|Sex contact/\"]]}","{\"selector\":\"h3\",\"tasks\":[[\"has-text\",\"/Sexdating|Webcamsex/\"]]}"],["{\"selector\":\".card-header\",\"tasks\":[[\"has-text\",\"Advertentie\"]]}"],["{\"selector\":\".sidebar\",\"tasks\":[[\"has-text\",\"Advert\"]]}"],["{\"selector\":\".td_module_wrap\",\"tasks\":[[\"has\",{\"selector\":\".td-post-category\",\"tasks\":[[\"has-text\",\"Gesponsord\"]]}]]}"],["{\"selector\":\".js-banner-slider\",\"tasks\":[[\"upward\",2]]}","{\"selector\":\".text-left\",\"tasks\":[[\"has-text\",\"Advert\"]]}"],["{\"selector\":\".sidebar-block\",\"tasks\":[[\"has-text\",\"/Advert/i\"]]}"],["{\"selector\":\".home .koptitel\",\"tasks\":[[\"has-text\",\"Advert\"],[\"spath\",\"~ div\"]]}","{\"selector\":\".home .koptitel\",\"tasks\":[[\"has-text\",\"Advert\"],[\"spath\",\"~ hr\"]]}","{\"selector\":\".home .koptitel\",\"tasks\":[[\"has-text\",\"Advert\"]]}","{\"selector\":\".widgettitle\",\"tasks\":[[\"has-text\",\"Advert\"]]}","{\"selector\":\".widgettitle\",\"tasks\":[[\"has-text\",\"partners\"]]}"],["{\"selector\":\"ul > li:has(script[src*=\\\"ster\\\"])\",\"tasks\":[[\"has-text\",\"/advert/i\"]]}"],["{\"selector\":\"[id^=\\\"adid\\\"]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\".articlelist.block\",\"tasks\":[[\"has-text\",\"Folder \\\\(Adverteerders\\\\)\"],[\"spath\",\".list\"]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has-text\",\"Interessante links\"]]}"],["{\"selector\":\".widget_carousel_slider\",\"tasks\":[[\"has-text\",\"Partners\"]]}","{\"selector\":\"[id^=\\\"media_image\\\"]\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has-text\",\"Met dank aan\"]]}],[\"spath\",\":not(#media_image-24):not(#media_image-28)\"]]}"],["{\"selector\":\"[id^=\\\"div-gpt-ad\\\"]\",\"tasks\":[[\"upward\",\".taggrid__item\"]]}"],["{\"selector\":\"div.block\",\"tasks\":[[\"has-text\",\"Vacatures\"]]}"],["{\"selector\":\".rclm_row\",\"tasks\":[[\"has-text\",\"advert\"]]}","{\"selector\":\".widget_sp_image-image-link:not(a[href*=\\\"www.pen.nl\\\"])\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\"aside #rclm_block\",\"tasks\":[[\"has-text\",\"advert\"]]}"],["{\"selector\":\"#tekstpetitie > *\",\"tasks\":[[\"has-text\",\"advert\"],[\"spath\",\"+ div\"]]}","{\"selector\":\"#tekstpetitie > *\",\"tasks\":[[\"has-text\",\"advert\"]]}"],["{\"selector\":\".sidebaritem\",\"tasks\":[[\"has-text\",\"/partners|online casino/i\"]]}"],["{\"selector\":\"[id^=\\\"custom_html\\\"]\",\"tasks\":[[\"has-text\",\"Hier aanmelden\"]]}"],["{\"selector\":\".rs_sponsorbanners_widget\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"img[src^=\\\"/img/sponsors\\\"]\",\"tasks\":[[\"upward\",\".article-photo\"]]}"],["{\"selector\":\".meta-format\",\"tasks\":[[\"has-text\",\"Advert\"],[\"upward\",\".card\"]]}"],["{\"selector\":\"[id^=\\\"takeover\\\"]\",\"tasks\":[[\"has-text\",\"Advert\"]]}"],["{\"selector\":\"section.elementor-element\",\"tasks\":[[\"has\",{\"selector\":\"h3\",\"tasks\":[[\"has-text\",\"MOGELIJK GEMAAKT DOOR\"]]}]]}"],["{\"selector\":\".adsbygoogle\",\"tasks\":[[\"upward\",\".wpb_wrapper\"],[\"spath\",\":not(:has(aside))\"]]}"],["{\"selector\":\".list-sponsors\",\"tasks\":[[\"upward\",\".content\"]]}"],["{\"selector\":\".autoscalable-block-wrapper\",\"tasks\":[[\"has-text\",\"/van onze partners/i\"]]}"],["{\"selector\":\"div.category\",\"tasks\":[[\"has-text\",\"Advert\"]]}","{\"selector\":\"li\",\"tasks\":[[\"has-text\",\"reclame\"]]}"],["{\"selector\":\"[id^=\\\"pg-1407\\\"]\",\"tasks\":[[\"has-text\",\"Vrienden\"],[\"spath\",\":has([class^=\\\"sp-logo-carousel\\\"] .sp-lcp-logo-wrapper):has(img[src])\"]]}"],["{\"selector\":\"div[class^=\\\"vc_column\\\"]\",\"tasks\":[[\"has-text\",\"/reclame/i\"]]}"],["{\"selector\":\".partner-grid\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\".moreEscortM\",\"tasks\":[[\"has-text\",\"Sponsors\"]]}","{\"selector\":\"div.PREMEscorts\",\"tasks\":[[\"has-text\",\"Sponsors\"]]}","{\"selector\":\"div.vipEscortModel\",\"tasks\":[[\"has-text\",\"Sponsors\"]]}"],["{\"selector\":\"[id^=\\\"custom_html-\\\"]\",\"tasks\":[[\"has-text\",\"/Rijpe dames|Webcamsex/\"]]}"],["{\"selector\":\"[class]\",\"tasks\":[[\"has-text\",\"Gesponsorde\"],[\"upward\",\"aside\"]]}"],["{\"selector\":\".bcb-atts\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"table\",\"tasks\":[[\"has-text\",\"/advert/i\"]]}"],["{\"selector\":\".item\",\"tasks\":[[\"has\",{\"selector\":\"[class^=\\\"item_special\\\"]\",\"tasks\":[[\"has-text\",\"tradetracker.net\"]]}]]}"],["{\"selector\":\"td[class]:has(a[href*=\\\"robohost.nl/clients/aff.php\\\"])\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\".hpitem\",\"tasks\":[[\"has\",{\"selector\":\"h3\",\"tasks\":[[\"has-text\",\"Partner\"]]}]]}"],["{\"selector\":\"[id^=\\\"menu-item\\\"]\",\"tasks\":[[\"has-text\",\"/gokken|casino/i\"]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has-text\",\"/advertentie|aanraders/i\"]]}"],["{\"selector\":\"[id^=\\\"sky\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"AdvertSlot\"]]}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> div[style]\",\"tasks\":[[\"has-text\",\"/advert/i\"],[\"spath\",\":has(div[id])\"]]}]]}"],["{\"selector\":\"#right .desktopad[id*=\\\"TOURETAPPE_300\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has\",{\"selector\":\".advertisement-new:not(:has(a[href$=\\\"/adverteerdersinformatie/\\\"]))\"}]]}"],["{\"selector\":\".highlighted-advertisers\",\"tasks\":[[\"upward\",\".row\"]]}"],["{\"selector\":\"aside\",\"tasks\":[[\"has\",{\"selector\":\"[class]\",\"tasks\":[[\"has-text\",\"/advert/i\"]]}],[\"has\",{\"selector\":\"[href]:has([src*=\\\"media.prdn.nl\\\"])\"}]]}"],["{\"selector\":\".c-tag\",\"tasks\":[[\"has-text\",\"/advert/i\"],[\"upward\",\".c-articles-list__link\"]]}","{\"selector\":\"li[class*=\\\"highlights\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"div[class*=\\\"articles-list\\\"][class*=\\\"item--highlight\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"span[class]\",\"tasks\":[[\"has-text\",\"/advert/i\"]]}]]}]]}"],["{\"selector\":\"[id*=\\\"miw_widget\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"div[class]:has(a[href*=\\\"leverancier\\\"])\"}]]}"],["{\"selector\":\".blok\",\"tasks\":[[\"has\",{\"selector\":\"h3\",\"tasks\":[[\"has-text\",\"Partners\"]]}]]}"],["{\"selector\":\".contentbox\",\"tasks\":[[\"has-text\",\"Advertentie\"]]}","{\"selector\":\".smallbox\",\"tasks\":[[\"has-text\",\"Adds By Google\"]]}","{\"selector\":\".smallbox\",\"tasks\":[[\"has-text\",\"Advertentie\"]]}"],["{\"selector\":\"#right-sidebar > *\",\"tasks\":[[\"has\",{\"selector\":\".mb-3\",\"tasks\":[[\"has-text\",\"Advert\"]]}]]}","{\"selector\":\".mb-3\",\"tasks\":[[\"has-text\",\"Advert\"]]}"],["{\"selector\":\".d-md-block.d-none\",\"tasks\":[[\"has-text\",\"Met dank aan\"]]}"],["{\"selector\":\"p > a[href][rel$=\\\"sponsored\\\"]\",\"tasks\":[[\"upward\",\"aside > section\"]]}","{\"selector\":\"p.center2\",\"tasks\":[[\"has-text\",\"Advert\"]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has\",{\"selector\":\".wf_headline\",\"tasks\":[[\"has-text\",\"/Wielerdeals/i\"]]}]]}"],["{\"selector\":\".vcex-module\",\"tasks\":[[\"has-text\",\"advert\"]]}"],["{\"selector\":\"[id*=\\\"rectangle\\\"]\",\"tasks\":[[\"upward\",\".block\"]]}","{\"selector\":\"[id*=\\\"web_billboard\\\"]\",\"tasks\":[[\"upward\",\"article > .field\"]]}","{\"selector\":\"[id*=\\\"web_halfpage\\\"]\",\"tasks\":[[\"upward\",\".block\"]]}","{\"selector\":\"[id*=\\\"web_hpa\\\"]\",\"tasks\":[[\"upward\",\".block\"]]}","{\"selector\":\"[id*=\\\"web_partners\\\"]\",\"tasks\":[[\"upward\",\".block\"]]}"],["{\"selector\":\".adv-link\",\"tasks\":[[\"upward\",\".fl-row\"],[\"has-text\",\"/advert/i\"],[\"spath\",\":not(:has(article))\"]]}"],["{\"selector\":\".adv-link\",\"tasks\":[[\"upward\",\".wpb_wrapper\"]]}"],["{\"selector\":\".my-5\",\"tasks\":[[\"has-text\",\"/advert/i\"]]}"],["{\"selector\":\"[id^=\\\"custom_html-\\\"]\",\"tasks\":[[\"has-text\",\"/advert/i\"]]}"],["{\"selector\":\"[id^=\\\"custom_html-\\\"]\",\"tasks\":[[\"has-text\",\"Kennispartners\"],[\"spath\",\":has(a[href] > img)\"]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has-text\",\"/Gesponsoord/i\"]]}"],["{\"selector\":\"div[style] [id*=\\\"728x90\\\"]\",\"tasks\":[[\"upward\",3]]}"],["{\"selector\":\".advertisement\",\"tasks\":[[\"upward\",1]]}"]];

const hostnamesMap = new Map([["2dehands.be",0],["marktplaats.nl",0],["despirituelewereld.be",1],["feestdagen-be.be",2],["feestdagen-nl.nl",2],["geelfm.be",3],["geile-sexverhalen.be",4],["geile-sexverhalen.nl",4],["gocar.be",5],["kinderspelletjes.be",6],["kinderspelletjes.nl",6],["mariogames.be",7],["mnm.be",8],["motorrijder.be",9],["netonline.be",10],["nuus.be",11],["omejoop.be",12],["palnws.be",[13,14]],["maaslandradio.nl",14],["mariabode.nl",[14,128]],["poki.be",15],["radiozuidrand.be",16],["senseigaming.be",17],["sexdatemet-milfs.be",18],["stubru.be",19],["techpulse.be",20],["tijd.be",21],["voetbal4u.be",22],["wielerflits.be",23],["wielerflits.nl",[23,190]],["zita.be",24],["247spice.com",25],["bierdopje.com",26],["dolcevia.com",27],["erotischemassages.com",28],["farm-date.com",29],["gaslicht.com",30],["nauticlink.com",31],["nedporno.com",32],["onderwijsland.com",33],["risallah.com",34],["forum.scholieren.com",35],["starnieuws.com",36],["stopdebankiers.com",37],["vivatube.com",38],["frontline.digital",39],["cyclingmedia.eu",40],["seksfilms.eu",41],["fierljeppenwinsum.frl",42],["itnijs.frl",43],["redbot.frl",44],["hardware.info",45],["republikein.com.na",46],["historiek.net",47],["tweakers.net",48],["1001erotiekverhalen.nl",49],["aafm.nl",50],["aavisie.nl",50],["accountancyvanmorgen.nl",51],["fiscaalvanmorgen.nl",51],["salarisvanmorgen.nl",51],["adbroere.nl",52],["ajaxreport.nl",53],["psvreport.nl",53],["alblasserdamsnieuws.nl",54],["allesoveropeningstijden.nl",55],["alphens.nl",56],["androidplanet.nl",57],["iphoned.nl",57],["ans-online.nl",58],["arenalokaal.nl",[59,60]],["dehavenloods.nl",59],["hetkrantje-online.nl",59],["laardercourant.nl",59],["leiderdorpsweekblad.nl",59],["audiobookbay.nl",61],["autoblog.nl",62],["autoweek.nl",63],["barneveldsekrant.nl",64],["destadamersfoort.nl",64],["edestad.nl",64],["scherpenzeelsekrant.nl",64],["belegger.nl",65],["besteoverzicht.nl",66],["beveiligingnieuws.nl",67],["biflatie.nl",68],["bnnvara.nl",69],["bol-an.nl",70],["buttkicken.nl",71],["calorieenverbranden.nl",72],["creditexpo.nl",73],["cryptosjop.nl",74],["cvandaag.nl",75],["dartfreakz.nl",76],["dartsactueel.nl",77],["dekattensite.nl",78],["dekrantvantynaarlo.nl",79],["deliciousmagazine.nl",80],["deondernemer.nl",81],["detelefoongids.nl",82],["ditjesendatjes.nl",83],["domstadradio.nl",84],["dutchitchannel.nl",85],["dutchleader.nl",86],["dutchporntube.nl",87],["duurzaam-actueel.nl",88],["duurzaamnieuws.nl",89],["edelmetaal-info.nl",90],["fcutrecht.nl",91],["feijenoordnieuws.nl",92],["fhm500.nl",93],["fleet-mobility.nl",94],["gamer.nl",95],["id.nl",[95,105]],["wasmachines.nl",95],["glutenvrij.nl",96],["gooieneembode.nl",97],["gratisepub.nl",98],["gratispornofilm.nl",99],["groningerkrant.nl",100],["h2owaternetwerk.nl",101],["hardnieuws.nl",102],["hoekschnieuws.nl",103],["hollandskroonnieuws.nl",104],["wieringernieuws.nl",104],["iex.nl",106],["iexprofs.nl",107],["ijshockeynederland.nl",108],["indignatie.nl",109],["infinance.nl",110],["interglot.nl",111],["investmentofficer.nl",112],["itwm.nl",113],["jaap.nl",114],["janvissersweer.nl",115],["juf-milou.nl",116],["kicxstart.nl",117],["kidsweek.nl",118],["klapjes.nl",119],["kledingmaten.nl",120],["klokradio.nl",121],["knhs.nl",122],["kookboekennieuws.nl",123],["landenweb.nl",124],["linda.nl",125],["loemedia.nl",126],["luchtvaartnieuws.nl",127],["meerradio.nl",129],["messianieuws.nl",130],["midvliet.nl",131],["mijnserie.nl",132],["mijnwoordenboek.nl",133],["motocrossplanet.nl",134],["moviemeter.nl",135],["mr-online.nl",136],["tube.nederlandseporno.nl",137],["nederlandsexdate.nl",138],["nederlandsmedianieuws.nl",139],["nieuwsopbeeld.nl",140],["nieuwsuitnijmegen.nl",141],["noordernieuws.nl",142],["noordkopcentraal.nl",143],["npo3fm.nl",144],["nporadio4.nl",144],["nporadio1.nl",145],["nporadio2.nl",145],["nu.nl",146],["okemedia.nl",147],["omroepalmere.nl",148],["participaties.nl",149],["pcmweb.nl",150],["pen.nl",151],["petitie24.nl",152],["pokeren.nl",153],["pornomilf.nl",154],["racesport.nl",155],["racexpress.nl",156],["racingnews365.nl",157],["radio.nl",158],["radio182.nl",159],["rotterdam-nesselande.nl",160],["roulettefm.nl",161],["rtlnieuws.nl",162],["rtveen.nl",163],["rtvkrimpenerwaard.nl",164],["rtvpapendrecht.nl",165],["sc-heerenveen.nl",166],["sexguide.nl",167],["sexmetvrouwen.nl",168],["sexvoorgeldadvertenties.nl",169],["soccernews.nl",170],["forum.spaarinformatie.nl",171],["startlijstjes.nl",172],["startlinken.nl",173],["tcroomburg.nl",174],["thatsgaming.nl",175],["tippelpagina.nl",176],["top40.nl",177],["topgear.nl",178],["touretappe.nl",179],["transport-online.nl",180],["trucks.nl",181],["vastgoedjournaal.nl",182],["vi.nl",183],["vlootschouw.nl",184],["voetbalcentraal.nl",185],["waarzo.nl",186],["wanttoknow.nl",187],["webcam-binnenvaart.nl",188],["webstick.nl",189],["wkdarts.nl",191],["zakenreisnieuws.nl",192],["zeilwereld.nl",193],["nieuwsfiets.nu",194],["schie.nu",195],["dissident.one",196],["nljug.org",197],["omrekenen.org",198],["woorden.org",199],["gids.tv",200]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/