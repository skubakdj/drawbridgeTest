!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},o.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o(o.s=2368)}({2368:function(e,t){var o=!1;try{window.localStorage.setItem("test","test"),window.localStorage.removeItem("test");var r=document.createElement("div");r.style.display="flex","flex"!==r.style.display&&(o=!0),"true"!==window.localStorage.goodBrowser&&(o=!0),window.localStorage.removeItem("goodBrowser")}catch(e){o=!0}if(o){var n=document.getElementsByClassName("BadBrowser")[0];n.className+=" is-open",/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)&&(n.className+=" is-mobile")}}});