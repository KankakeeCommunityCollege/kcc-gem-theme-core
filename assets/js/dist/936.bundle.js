"use strict";(self.webpackChunkkcc_gem_theme_core=self.webpackChunkkcc_gem_theme_core||[]).push([[936],{7936:function(e,t,l){l.r(t);var o=".hero-slider__slider",n="Pause";function s(){$(o).slick({dots:!0,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:4e3,prevArrow:'<button type="button" data-role="none" class="prev slick-prev" aria-label="Previous" role="button" style="display: block;">Previous</button>',nextArrow:'<button type="button" data-role="none" class="next slick-next" aria-label="Next" role="button" style="display: block;">Next</button>'})}function a(e,t,l){return e.setAttribute(t,l)}function r(e,t,l){var s=l===n;$(o).slick(t),a(e,"aria-label",l),e.classList.toggle("hero-slider__button--play"),e.innerHTML=l,s&&$(o).slick("slickNext")}t.default=function(){var e;document.querySelector(o)&&(e=s,$(o).on("init",(function(e,t){var l,s,i;s=document.querySelector(o),a(i=document.createElement("button"),"role","button"),a(i,"type","button"),a(i,"aria-label","Pause"),a(i,"style","display: block;"),i.innerHTML="Pause",i.classList.add("hero-slider__button--toggle"),s.appendChild(i),(l=i).addEventListener("click",(function(e){"Pause"===l.innerHTML?r(l,"slickPause","Play"):r(l,"slickPlay",n)}))})),e())}}}]);