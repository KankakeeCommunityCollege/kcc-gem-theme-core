!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t){e.exports=function(){var e=(new Date).getFullYear();document.getElementById("currentYear").innerHTML=e}},function(e,t){e.exports=function(){document.getElementById("searchIcon")&&document.addEventListener("click",function(e){var t=document.getElementById("searchImg"),n=document.getElementById("searchCollapse"),r=document.getElementById("mainNav"),o=document.getElementById("globalNav"),l=-1!=t.style.backgroundImage.indexOf("assets/img/search.svg"),a=n.getAttribute("aria-hidden");e.target.matches("#searchIcon")&&(e.preventDefault(),t.style.backgroundImage=l?'url("./assets/img/x.svg")':'url("./assets/img/search.svg")',n.classList.toggle("nav-global__search-collapse--visible"),"true"===a?n.setAttribute("aria-hidden","false"):n.setAttribute("aria-hidden","true"),r.classList.toggle("local-nav--search-toggle"),o.classList.toggle("nav-global--search-toggle"))},!1)}},function(e,t){e.exports=function(){[].forEach.call(document.querySelectorAll("img[data-src]"),function(e){e.setAttribute("src",e.getAttribute("data-src")),e.onload=function(){e.removeAttribute("data-src")}})}},function(e,t){e.exports=function(){document.querySelector(".hero-slider__slider")&&$(".hero-slider__slider").slick({dots:!0,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,prevArrow:'<img alt="Previous slide" class="a-left control-c prev slick-prev" src="assets/img/dbl-prev.svg">',nextArrow:'<img alt="Next slide" class="a-right control-c next slick-next" src="assets/img/dbl-next.svg">'})}},function(e,t){e.exports=function(){document.querySelectorAll("h3.hero-slider__slider--slide-heading")&&document.querySelectorAll("h3.hero-slider__slider--slide-heading").forEach(function(e){e.innerHTML=e.innerHTML.replace(/\*\*POWER\*\*/g,'<span class="typography__power-text">POWER</span>')})}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),l=n(1),a=n.n(l),s=n(2),c=n.n(s);var i=function e(t){if(3==t.nodeType&&(t.data=t.data.replace(/--/g,"—")),1==t.nodeType&&"SCRIPT"!=t.nodeName)for(var n=0;n<t.childNodes.length;n++)e(t.childNodes[n])},u=n(3),d=n.n(u),g=n(4),f=n.n(g);document.addEventListener("DOMContentLoaded",function(){d()(),f()(),i(document.body),o()(),a()(),c()()})}]);