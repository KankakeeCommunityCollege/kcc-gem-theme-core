"use strict";(self.webpackChunkkcc_gem_theme_core=self.webpackChunkkcc_gem_theme_core||[]).push([[700],{284:function(e,t,n){function c(e,t){var n=new URL(window.location),c={page:document.title,accordion:e.innerText.trim()};n.search="",n.hash=t,window.history.pushState(c,"",n)}function a(e){e.target.matches(".accordion__button")&&!Boolean(JSON.parse(e.target.getAttribute("aria-expanded")))&&c(e.target,e.target.dataset.target)}function o(e){var t=e.target.hash;c(e.target,t)}function r(e,t,n){e.addEventListener(t,n)}n.r(t),n(6992),n(1539),n(8783),n(3948),n(285),n(1637),n(3210),n(4916),n(4765),t.default=function(){document.getElementById("accordion")&&r(document.getElementById("accordion"),"click",a),document.querySelector(".navTabs")&&r(document.querySelector(".navTabs"),"click",o)}}}]);