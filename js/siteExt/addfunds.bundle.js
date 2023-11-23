var SIH=function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=88)}({0:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e){e=decodeURI(e);var t=e.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/);return t&&{href:e,protocol:t[1],host:t[2],hostname:t[3],port:t[4],pathname:t[5],search:t[6],hash:t[7]}}function a(e){return new Promise(function(t){Object.keys(e).length>0?chrome.runtime.sendMessage(SIHID,{type:"GET_PRICE_FROM_STEAM",data:e},t):t()})}function c(){var e=o(window.location.href);if(e.pathname.indexOf("market/listings/")>-1){var t=e.pathname.split("/");return{appId:t[3],marketHashName:t[4],location:e}}return{}}function i(e){return(+e.toFixed(2)).toLocaleString("ru").replace(",",".")}Object.defineProperty(t,"__esModule",{value:!0}),t.getLocation=o,t.getPriceFromSteam=a,t.getPageParams=c,r.d(t,"localStorageJSON",function(){return u}),r.d(t,"App",function(){return s}),t.formatNumber=i,r.d(t,"CardsPrice",function(){return l}),r.d(t,"Currency",function(){return f});var u={set:function(e,t){try{t=t||"",localStorage.setItem(e,JSON.stringify(t))}catch(e){}},get:function(e){try{var t=localStorage.getItem(e)||null;return JSON.parse(t)}catch(e){return null}}},s={getManifest:function(){return new Promise(function(e){chrome.runtime.sendMessage(SIHID,{type:"GET_MANIFEST_APP",data:{}},e)}).then(function(e){return e.data})}},l=function(){function e(){n(this,e)}return e.sendCardData=function(e,t,r,n){try{var o=JSON.parse(JSON.stringify(e));if(!t||753!==t||5!==n)return!1;if(!g_steamID)return!1;if(0===o.length)return;o.length>5?o.length=5:o.length;for(var a=[],c=o.length-1;c>=0;c--){var i=o[c][0],u=0!==c?o[c][1]-o[c-1][1]:o[c][1];a.unshift({price:i,count:u})}chrome.runtime.sendMessage(SIHID,{type:"BACKGROUND_SET_CARD_STEAM_PRICE",data:{hash_name:r,prices:a,steamid:g_steamID}})}catch(e){}},e}(),f=function(){function e(){n(this,e)}return e.getPriceFromCurrency=function(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,o=e.getCurrency(+r),a=e.getCurrency(+n),c=ExchangeRates._rates[o.strCode],i=ExchangeRates._rates[a.strCode];return"USD"===a.strCode?"USD"!=o.strCode&&(t*=c)<.03&&(t=.03):a.strCode!=o.strCode&&(t=t/i*c)<.03&&(t=.03),{price:t,code:o.strCode,symbol:o.strSymbol,text:(o.bSymbolIsPrefix?""+o.strSymbol+o.strSymbolAndNumberSeparator:"")+(t?t.toFixed(2):0)+(o.bSymbolIsPrefix?"":""+o.strSymbolAndNumberSeparator+o.strSymbol),template:(o.bSymbolIsPrefix?""+o.strSymbol+o.strSymbolAndNumberSeparator:"")+"$price"+(o.bSymbolIsPrefix?"":""+o.strSymbolAndNumberSeparator+o.strSymbol),symbolPosition:o.bSymbolIsPrefix?"before":"after"}},e.getCurrency=function(e){var t=null;e=e||"undefined"!=typeof g_rgWalletInfo&&g_rgWalletInfo.wallet_currency||1;for(var r in g_rgCurrencyData)if(g_rgCurrencyData[r].eCurrencyCode===+e){t=g_rgCurrencyData[r];break}return t},e.getCurrencyCodeSteam=function(){return"undefined"!=typeof g_rgWalletInfo&&g_rgWalletInfo.wallet_currency||1},e}()},142:function(e,t){},64:function(e,t,r){"use strict";function n(){var e=$J("html").attr("lang");i.a.get().isClose||"ru"!==e||(o(),a())}function o(){var e=Math.floor(3*Math.random())+1,t=$J('\n    <div class="sih_lab_banner">\n        <div class="close_button"><div class="icon"></div></div>\n        <a href="http://23.105.226.164/Phx3RR?placement=refillpage" target="_blank">\n            <img class="banner'+e+'">\n        </a>\n    </div>\n  ');$J(".block.accountInfoBlock").append(t)}function a(){var e=$J(".sih_lab_banner");e.find(".close_button").click(function(){var t=i.a.get();t.isClose=!0,i.a.set(t),e.remove()})}Object.defineProperty(t,"__esModule",{value:!0}),t.load=n;var c=r(142),i=(r.n(c),r(87))},87:function(e,t,r){"use strict";r.d(t,"a",function(){return o});var n=r(0),o={_name:"SIH_LAB_BANNER",get:function(){return n.localStorageJSON.get(this._name)||{}},set:function(e){n.localStorageJSON.set(this._name,e)}}},88:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(64);r.d(t,"Banner",function(){return n})}});