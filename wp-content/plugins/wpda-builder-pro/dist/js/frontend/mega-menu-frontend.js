!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=659)}({659:function(e,t,n){"use strict";n.r(t);n(660);setTimeout((function(){var e,t,n=parseInt(null!=(e=document.body.dataset.megaMenuSpacer)?e:35);function r(){var e=document.body.querySelectorAll(".wpda-mega-menu");e&&e.length&&e.forEach((function(e){"fullwidth"==e.dataset.menuType&&(e.style.width=document.body.getBoundingClientRect().width-2*n+"px",e.style.marginLeft=-1*e.parentElement.getBoundingClientRect().x+n+"px")}))}function o(){t||(t=setTimeout((function(){t=null,r()}),100))}r(),setTimeout(r,500),window.addEventListener("resize",o,!1),window.addEventListener("load",o,!1),document.addEventListener("DOMContentLoaded",o,!1),jQuery&&jQuery(window).on("elementor/frontend/init",o)}),0)},660:function(e,t,n){}});