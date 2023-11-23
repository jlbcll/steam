var SIH=function(t){function e(i){if(r[i])return r[i].exports;var o=r[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};return e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,i){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=68)}({0:function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t){t=decodeURI(t);var e=t.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/);return e&&{href:t,protocol:e[1],host:e[2],hostname:e[3],port:e[4],pathname:e[5],search:e[6],hash:e[7]}}function s(t){return new Promise(function(e){Object.keys(t).length>0?chrome.runtime.sendMessage(SIHID,{type:"GET_PRICE_FROM_STEAM",data:t},e):e()})}function a(){var t=o(window.location.href);if(t.pathname.indexOf("market/listings/")>-1){var e=t.pathname.split("/");return{appId:e[3],marketHashName:e[4],location:t}}return{}}function n(t){return(+t.toFixed(2)).toLocaleString("ru").replace(",",".")}Object.defineProperty(e,"__esModule",{value:!0}),e.getLocation=o,e.getPriceFromSteam=s,e.getPageParams=a,r.d(e,"localStorageJSON",function(){return l}),r.d(e,"App",function(){return _}),e.formatNumber=n,r.d(e,"CardsPrice",function(){return c}),r.d(e,"Currency",function(){return d});var l={set:function(t,e){try{e=e||"",localStorage.setItem(t,JSON.stringify(e))}catch(t){}},get:function(t){try{var e=localStorage.getItem(t)||null;return JSON.parse(e)}catch(t){return null}}},_={getManifest:function(){return new Promise(function(t){chrome.runtime.sendMessage(SIHID,{type:"GET_MANIFEST_APP",data:{}},t)}).then(function(t){return t.data})}},c=function(){function t(){i(this,t)}return t.sendCardData=function(t,e,r,i){try{var o=JSON.parse(JSON.stringify(t));if(!e||753!==e||5!==i)return!1;if(!g_steamID)return!1;if(0===o.length)return;o.length>5?o.length=5:o.length;for(var s=[],a=o.length-1;a>=0;a--){var n=o[a][0],l=0!==a?o[a][1]-o[a-1][1]:o[a][1];s.unshift({price:n,count:l})}chrome.runtime.sendMessage(SIHID,{type:"BACKGROUND_SET_CARD_STEAM_PRICE",data:{hash_name:r,prices:s,steamid:g_steamID}})}catch(t){}},t}(),d=function(){function t(){i(this,t)}return t.getPriceFromCurrency=function(e,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,o=t.getCurrency(+r),s=t.getCurrency(+i),a=ExchangeRates._rates[o.strCode],n=ExchangeRates._rates[s.strCode];return"USD"===s.strCode?"USD"!=o.strCode&&(e*=a)<.03&&(e=.03):s.strCode!=o.strCode&&(e=e/n*a)<.03&&(e=.03),{price:e,code:o.strCode,symbol:o.strSymbol,text:(o.bSymbolIsPrefix?""+o.strSymbol+o.strSymbolAndNumberSeparator:"")+(e?e.toFixed(2):0)+(o.bSymbolIsPrefix?"":""+o.strSymbolAndNumberSeparator+o.strSymbol),template:(o.bSymbolIsPrefix?""+o.strSymbol+o.strSymbolAndNumberSeparator:"")+"$price"+(o.bSymbolIsPrefix?"":""+o.strSymbolAndNumberSeparator+o.strSymbol),symbolPosition:o.bSymbolIsPrefix?"before":"after"}},t.getCurrency=function(t){var e=null;t=t||"undefined"!=typeof g_rgWalletInfo&&g_rgWalletInfo.wallet_currency||1;for(var r in g_rgCurrencyData)if(g_rgCurrencyData[r].eCurrencyCode===+t){e=g_rgCurrencyData[r];break}return e},t.getCurrencyCodeSteam=function(){return"undefined"!=typeof g_rgWalletInfo&&g_rgWalletInfo.wallet_currency||1},t}()},41:function(module,__webpack_exports__,__webpack_require__){"use strict";function selectTabMarket(){$J("#myMarketTabs").find(".market_tab_well_tabs a").on("click",function(){g_sihSelectTabMarket=$J(this).attr("id"),"tabMyMarketHistory"===g_sihSelectTabMarket?$J("#BG_bottom").find(".my_market_history_filtration").show():($J("#BG_bottom").find(".my_market_history_filtration").hide(),$J("#BG_bottom").find(".animated").removeClass("animated"))})}function marketMyHistoryRequestBefore(t,e){spinnerFilterMarketHistory(!0);var r=getLocalStorage();e.parameters.count=r.isVisibleSlots?500:window.historypagesize}function marketMyHistoryRequestOnFailureBefore(){spinnerFilterMarketHistory(!1)}function marketMyHistoryRequestOnSuccessBefore(){if("tabMyMarketHistory"===(g_sihSelectTabMarket=$J("#myMarketTabs .market_tab_well_tabs a.market_tab_well_tab_active").attr("id"))){loadCheckboxHistoryFiltration(getLocalStorage()),$J("#BG_bottom").find(".my_market_history_filtration").show()}else $J("#BG_bottom").find(".my_market_history_filtration").hide(),$J("#BG_bottom").find(".animated").removeClass("animated")}function marketMyHistoryRequestOnSuccessAfter(t,e,r){if($J(".sih.my_market_history_filtration .switcher_history_filtration").hasClass("selected")){if(e.start||$J("#tabContentsMyMarketHistoryRows .market_listing_row.market_recent_listing_row").hide(),0===$J("#tabContentsMyMarketHistory").find(".market_listing_table_showmore").length){var i=$J("#tabContentsMyMarketHistory_ctn");i.hide();for(var o='<a class="sih_button sih_pre_shadow_button collapse_my_history" href="javascript:void(0);">'+SIHLang.collapseHistoryMarket+"</a>",s=[10,25,50,100],a=0;a<4;a++){var n=s[a];o+='<a class="sih_button sih_pre_shadow_button upload_my_history" data-number="'+n+'" href="javascript:void(0);">'+SIHLang.uploadHistoryMarket.replace("$1",n)+"</a>"}i.after('<div class="market_listing_table_showmore sih"><div class="upload_my_history_buttons">'+o+"</div></div>"),$J("#tabContentsMyMarketHistory").find(".upload_my_history").click($J.debounce(300,function(){viewFilterMarketHistory(!0,$J(this).data("number"),this),colorMarketHistory()})),$J("#tabContentsMyMarketHistory").find(".collapse_my_history").click($J.debounce(300,function(){$J("body, html").animate({scrollTop:240},400),g_sihSettingFiltration.totalCountView=10,clearTableHistory(this)}))}Object.keys(r.responseJSON.assets).length>0?g_sihSettingFiltration.start=r.responseJSON.start+r.responseJSON.pagesize:g_sihSettingFiltration.emptyAssets=!0,g_sihSettingFiltration.totalCount=r.responseJSON.total_count,0===$J(".market_listing_table_showmore.sih").find(".sih__total-count").length&&$J(".market_listing_table_showmore.sih").prepend('<div class="sih__total-count"><span>'+SIHLang.historyTotal+": "+g_sihSettingFiltration.totalCount+"</span></div>"),viewFilterMarketHistory(),spinnerFilterMarketHistory(!1)}else ImprovedMyMarketHistoryNav.init();colorMarketHistory()}function getLocalStorage(){var t=__WEBPACK_IMPORTED_MODULE_1__common__.a.get();return t||(t={isSlotPlacedHistoryTran:!1,isSlotRemovedHistoryTran:!1,isSlotPurchasedHistoryTran:!0,isSlotSoldHistoryTran:!0,isVisibleSlots:!1},__WEBPACK_IMPORTED_MODULE_1__common__.a.set(t)),t}function loadCheckboxHistoryFiltration(t){0===$J("#BG_bottom").find(".my_market_history_filtration").length&&($J("#myMarketTabs").after('\n                     <div class="sih my_market_history_filtration">\n                      <div class="switch_history_filtration">\n                          <a class="sih_button sih_pre_shadow_button switcher_history_filtration" href="javascript:void(0);">'+SIHLang.filtrationHistoryMarketName+'</a>\n                      </div>\n\n                        <div class="slots_history_tran">\n\n                           <div class="slot_history_tran">\n                              <label for="slot_placed_history_tran" class="sih_checkbox ui-checkboxradio-label ui-corner-all ui-button ui-widget ui-checkboxradio-checked ui-state-active">'+SIHLang.historySaleSlotPlaced+'</label>\n                              <input type="checkbox" data-id="isSlotPlacedHistoryTran" '+(t.isSlotPlacedHistoryTran?"checked":"")+' class="ui-checkboxradio ui-helper-hidden-accessible"id="slot_placed_history_tran">\n                          </div>\n\n                          <div class="slot_history_tran">\n                              <label for="slot_removed_history_tran" class="sih_checkbox ui-checkboxradio-label ui-corner-all ui-button ui-widget ui-checkboxradio-checked ui-state-active">'+SIHLang.historySaleSlotRemoved+'</label>\n                              <input type="checkbox" data-id="isSlotRemovedHistoryTran" class="ui-checkboxradio ui-helper-hidden-accessible" '+(t.isSlotRemovedHistoryTran?"checked":"")+' id="slot_removed_history_tran" >\n                          </div>\n\n                          <div class="slot_history_tran">\n                              <label for="slot_purchased_history_tran" class="sih_checkbox ui-checkboxradio-label ui-corner-all ui-button ui-widget ui-checkboxradio-checked ui-state-active">'+SIHLang.historySaleSlotPurchased+'</label>\n                              <input type="checkbox" data-id="isSlotPurchasedHistoryTran" class="ui-checkboxradio ui-helper-hidden-accessible" '+(t.isSlotPurchasedHistoryTran?"checked":"")+' id="slot_purchased_history_tran">\n                          </div>\n\n                          <div class="slot_history_tran">\n                              <label for="slot_sold_history_tran" class="sih_checkbox ui-checkboxradio-label ui-corner-all ui-button ui-widget ui-checkboxradio-checked ui-state-active">'+SIHLang.historySaleSlotSold+'</label>\n                              <input type="checkbox" data-id="isSlotSoldHistoryTran" '+(t.isSlotSoldHistoryTran?"checked":"")+' class="ui-checkboxradio ui-helper-hidden-accessible" id="slot_sold_history_tran">\n                          </div>\n\n                      </div>\n</div>\n\n'),t.isVisibleSlots&&$J(".sih.my_market_history_filtration .switcher_history_filtration").addClass("selected"),loadSlots(t),$J(".sih.my_market_history_filtration .switcher_history_filtration").click(function(){var e=$J(this);e.hasClass("selected")?(e.removeClass("selected"),t.isVisibleSlots=!1):(e.addClass("selected"),t.isVisibleSlots=!0),__WEBPACK_IMPORTED_MODULE_1__common__.a.set(t),loadSlots(t)}))}function loadSlots(t){$J("#new_tab_contents_my_market_history_table").remove();var e=$J(".my_market_history_filtration");if($J("#slot_removed_history_tran, #slot_placed_history_tran, #slot_purchased_history_tran, #slot_sold_history_tran").checkboxradio(),t.isVisibleSlots)$J("#BG_bottom").append('<div id="new_tab_contents_my_market_history_table" style="display: none"></div>'),g_sihSettingFiltration={},$J(".slots_history_tran").find(".disabled").remove(),e.find("input").change(function(){var r=$J(this);e.find("input:checked").length?(t[r.data("id")]=r.prop("checked"),__WEBPACK_IMPORTED_MODULE_1__common__.a.set(t),g_sihSettingFiltration={},LoadMarketHistory()):r.prop("checked",!0).checkboxradio("refresh")});else{var r=e.find(".slots_history_tran");$J(r).children().hasClass("disabled")||$J(r).append('<div class="disabled"></div>')}LoadMarketHistory(),changeEventFilterOnClickDisabledSlots()}function changeEventFilterOnClickDisabledSlots(){var t=$J(".my_market_history_filtration").find(".disabled");$J(t).click(function(){var t=$J(".switcher_history_filtration");$J(t).hasClass("animated")?($J(t).removeClass("animated"),setTimeout(function(){$J(t).addClass("animated")},100)):$J(t).addClass("animated")})}function performFilterMarketHistory(){var t=0,e=!1;return $J("#tabContentsMyMarketHistoryRows .market_listing_row.market_recent_listing_row").each(function(r,i){var o=!1;g_sihSettingFiltration.totalCountView<=t&&(o=!0);var s=getLocalStorage();if(s.isSlotRemovedHistoryTran&&$J(i).attr("id").indexOf("_event_2")>-1&&(o?e=!0:(t++,$J(i).addClass("new_history_row_market"))),s.isSlotPlacedHistoryTran&&$J(i).attr("id").indexOf("_event_1")>-1&&(o?e=!0:(t++,$J(i).addClass("new_history_row_market"))),s.isSlotPurchasedHistoryTran){$J(i).find(".market_listing_left_cell.market_listing_gainorloss").text().indexOf("+")>-1&&(o?e=!0:(t++,$J(i).addClass("new_history_row_market")))}if(s.isSlotSoldHistoryTran){$J(i).find(".market_listing_left_cell.market_listing_gainorloss").text().indexOf("-")>-1&&(o?e=!0:(t++,$J(i).addClass("new_history_row_market")))}if(o&&e)return!1}),e}function clearTableHistory(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(t){var e=$J(t).text();$J(t).addClass("animation-background"),$J(t).text(SIHLang.loading);var r=0,i=$J("#tabContentsMyMarketHistoryRows");$J(i).find(".market_listing_row.market_recent_listing_row").each(function(t,e){$J(e).attr("style").includes("block")&&(r++,r>10?$J(e).hide("slow"):$J(e).show("slow"))}),setTimeout(function(){$J(t).removeClass("animation-background"),$J(t).text(e)},500)}}function uploadMarketHistory(currentButton,defaultText){new Ajax.Request("https://steamcommunity.com/market/myhistory?count=500",{method:"get",parameters:{start:g_sihSettingFiltration.start},onSuccess:function onSuccess(transport){if($J(currentButton).removeClass("animation-background"),$J(currentButton).text(defaultText),transport.responseJSON){g_sihSettingFiltration.emptyAssets=!1;var response=transport.responseJSON,$newTable=$J("#new_tab_contents_my_market_history_table");$newTable.append(response.results_html),$newTable.find(".market_listing_row.market_recent_listing_row").hide(),$J("#tabContentsMyMarketHistoryRows").append($newTable.find(".market_listing_row.market_recent_listing_row")),$newTable.empty(),MergeWithAssetArray(response.assets),eval(response.hovers)}}})}function viewFilterMarketHistory(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;void 0===g_sihSettingFiltration.totalCountView?g_sihSettingFiltration.totalCountView=e:t&&!g_sihSettingFiltration.emptyAssets&&(g_sihSettingFiltration.totalCountView+=e);var i=(performFilterMarketHistory(),function(t){s.each(function(t,e){$J(e).removeClass("new_history_row_market").show()})}),o=$J("#tabContentsMyMarketHistoryRows .market_listing_row.market_recent_listing_row"),s=$J("#tabContentsMyMarketHistoryRows .market_listing_row.market_recent_listing_row.new_history_row_market");if(g_sihSettingFiltration.totalCountView>s.length)if(g_sihSettingFiltration.totalCount>o.length||g_sihSettingFiltration.emptyAssets){$J(r).addClass("animation-background");var a=$J(r).text();$J(r).text(SIHLang.loading),setTimeout(function(){uploadMarketHistory(r,a)},3e3)}else i();else i()}function spinnerFilterMarketHistory(t){t?($J("#upload_my_history").addClass("sih-disabled"),$J(".spinner_upload_my_history").css({display:"inline-block"})):($J(".spinner_upload_my_history").css({display:"none"}),$J("#upload_my_history").removeClass("sih-disabled"))}function colorMarketHistory(){$J("#tabContentsMyMarketHistoryRows .market_listing_row.market_recent_listing_row:visible").each(function(t,e){$J(e).find(".sih_market_listing_left_cell_color").length||($J(e).find(".market_listing_gainorloss").before('\n      <div class="market_listing_left_cell sih_market_listing_left_cell_color"></div>\n    '),$J(e).find(".sih_market_listing_left_cell_color").append($J(e).find(".market_listing_gainorloss")).append('<div class="color_background"></div>').append($J(e).find(".market_listing_item_img")));var r=$J(e).find(".market_listing_left_cell.market_listing_gainorloss").text();if(r.indexOf("+")>-1){var i=$J(e).find(".market_listing_price").text();i.includes("-")||$J(e).find(".market_listing_price").html("-"+i.trim())}if(r.indexOf("-")>-1){var o=$J(e).find(".market_listing_price").text();o.includes("+")||$J(e).find(".market_listing_price").html("+"+o.trim())}if(window.color_slot_removed_history_tran_show&&$J(e).attr("id").indexOf("_event_2")>-1&&$J(e).find(".sih_market_listing_left_cell_color").css({"background-color":window.color_slot_removed_history_tran}),window.color_slot_placed_history_tran_show&&$J(e).attr("id").indexOf("_event_1")>-1&&$J(e).find(".sih_market_listing_left_cell_color").css({"background-color":window.color_slot_placed_history_tran}),window.color_slot_purchased_history_tran_show){$J(e).find(".market_listing_left_cell.market_listing_gainorloss").text().indexOf("+")>-1&&$J(e).find(".sih_market_listing_left_cell_color").css({"background-color":window.color_slot_purchased_history_tran})}if(window.color_slot_sold_history_tran_show){$J(e).find(".market_listing_left_cell.market_listing_gainorloss").text().indexOf("-")>-1&&$J(e).find(".sih_market_listing_left_cell_color").css({"background-color":window.color_slot_sold_history_tran})}})}Object.defineProperty(__webpack_exports__,"__esModule",{value:!0}),__webpack_exports__.selectTabMarket=selectTabMarket,__webpack_exports__.marketMyHistoryRequestBefore=marketMyHistoryRequestBefore,__webpack_exports__.marketMyHistoryRequestOnFailureBefore=marketMyHistoryRequestOnFailureBefore,__webpack_exports__.marketMyHistoryRequestOnSuccessBefore=marketMyHistoryRequestOnSuccessBefore,__webpack_exports__.marketMyHistoryRequestOnSuccessAfter=marketMyHistoryRequestOnSuccessAfter;var __WEBPACK_IMPORTED_MODULE_0__main_scss__=__webpack_require__(92),__WEBPACK_IMPORTED_MODULE_0__main_scss___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__main_scss__),__WEBPACK_IMPORTED_MODULE_1__common__=__webpack_require__(67),g_sihSelectTabMarket="",g_sihSettingFiltration={}},67:function(t,e,r){"use strict";r.d(e,"a",function(){return o});var i=r(0),o={_name:"SIH_FILTER_MARKET_HISTORY",get:function(){return i.localStorageJSON.get(this._name)},set:function(t){i.localStorageJSON.set(this._name,t)}}},68:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r(41),o=r(0);r.d(e,"filterMarketHistory",function(){return i}),r.d(e,"global",function(){return o})},92:function(t,e){}});