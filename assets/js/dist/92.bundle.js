"use strict";(self.webpackChunkkcc_gem_theme_core=self.webpackChunkkcc_gem_theme_core||[]).push([[92,26],{3092:function(e,t,n){n.r(t),n(1539),n(8674),n(7042),n(8309),n(1038),n(8783),n(2526),n(1817),n(2165),n(6992),n(3948);var r=n(8282);function o(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,i=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){i=!0,a=e},f:function(){try{s||null==n.return||n.return()}finally{if(i)throw a}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var a=["#gsc-i-id1","#gs_st50 .gsst_a",".gsc-search-button .gsc-search-button.gsc-search-button-v2"];function s(){document.querySelector("button.gsc-search-button-v2").classList.add("gsc-overrides__clear-x")}function i(){document.querySelector("button.gsc-search-button-v2").classList.remove("gsc-overrides__clear-x")}t.default=function(){document.getElementById("searchCollapse")&&new Promise((function(e,t){!function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://cse.google.com/cse.js?cx=006320264078644364913:sy48bet-lr8";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}(),e()})).then((function(){new Promise((function(e,t){var n=document.getElementById("searchCollapse");new MutationObserver((function(t,n){var r,c,s=o(t);try{for(s.s();!(r=s.n()).done;)if("childList"==r.value.type){document.querySelector(".gsst_a").setAttribute("id","xIcon");for(var i=a.length,u=0;u<i;u++)c=a[u],"tabindex","-1",document.querySelector(c).setAttribute("tabindex","-1");e()}}catch(e){s.e(e)}finally{s.f()}})).observe(n,{attributes:!0,childList:!0,subtree:!0})})).then((function(){var e;(e=!1,function(){e||(e=!0,"display: none;"===document.getElementById("xIcon").getAttribute("style")?i():s())})();var t=document.getElementById("xIcon");new MutationObserver((function(e,n){var r,c=o(e);try{for(c.s();!(r=c.n()).done;)"attributes"==r.value.type&&("display: none;"===t.getAttribute("style")?i():s())}catch(e){c.e(e)}finally{c.f()}})).observe(t,{attributes:!0,childList:!0,subtree:!0}),(0,r.default)()}))}))}},8282:function(e,t,n){n.r(t);var r=["#gsc-i-id1","#gs_st50 .gsst_a",".gsc-search-button .gsc-search-button.gsc-search-button-v2"],o="header-global__search-icon",c="header-global__close-icon";function a(e,t,n){document.querySelector(e).setAttribute(t,n)}function s(e,t,n){t?(e.classList.add(n+"--hidden"),e.setAttribute("aria-hidden","true"),e.setAttribute("tabindex","-1")):(e.classList.remove(n+"--hidden"),e.setAttribute("aria-hidden","false"),e.setAttribute("tabindex","0"))}function i(e){(e.target.closest("#openSearchButton")||e.target.closest("#closeSearchButton"))&&function(e){var t,n,i,u;e.target.closest("#openSearchButton")?t=!0:e.target.closest("#closeSearchButton")&&(t=!1),function(e){var t=document.getElementById("openSearchButton"),n=document.getElementById("closeSearchButton"),i=document.getElementById("gsc-i-id1"),u=r.length;if(e){s(t,!0,o),s(n,!1,c);for(var l=0;l<u;l++)a(r[l],"tabindex","0");i.focus()}else for(s(t,!1,o),s(n,!0,c),l=0;l<u;l++)a(r[l],"tabindex","-1")}(t),n=document.getElementById("searchCollapse"),i=document.getElementById("headerGlobalNavbar"),u=n.getAttribute("aria-hidden"),n.classList.toggle("header-global__search-collapse--visible"),"true"===u?n.setAttribute("aria-hidden","false"):n.setAttribute("aria-hidden","true"),i.classList.toggle("header-global__navbar--search-toggle")}(e)}t.default=function(){document.getElementById("openSearchButton")&&document.addEventListener("click",i)}}}]);