/*! For license information please see 471.bundle.js.LICENSE.txt */
(self.webpackChunkkcc_gem_theme_core=self.webpackChunkkcc_gem_theme_core||[]).push([[471],{8471:function(e,t,a){e.exports=function(e,t,a){"use strict";const s=e=>e&&"object"==typeof e&&"default"in e?e:{default:e},n=s(e),i=s(t),r=s(a),d=[],o="active",l="fade",c="show",u=".active",f=":scope > li > .active";class h extends r.default{static get NAME(){return"tab"}show(){if(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&this._element.classList.contains(o))return;let e;const t=(e=>{const t=(e=>{let t=e.getAttribute("data-bs-target");if(!t||"#"===t){let a=e.getAttribute("href");if(!a||!a.includes("#")&&!a.startsWith("."))return null;a.includes("#")&&!a.startsWith("#")&&(a=`#${a.split("#")[1]}`),t=a&&"#"!==a?a.trim():null}return t})(e);return t?document.querySelector(t):null})(this._element),a=this._element.closest(".nav, .list-group");if(a){const t="UL"===a.nodeName||"OL"===a.nodeName?f:u;e=i.default.find(t,a),e=e[e.length-1]}const s=e?n.default.trigger(e,"hide.bs.tab",{relatedTarget:this._element}):null;if(n.default.trigger(this._element,"show.bs.tab",{relatedTarget:e}).defaultPrevented||null!==s&&s.defaultPrevented)return;this._activate(this._element,a);const r=()=>{n.default.trigger(e,"hidden.bs.tab",{relatedTarget:this._element}),n.default.trigger(this._element,"shown.bs.tab",{relatedTarget:e})};t?this._activate(t,t.parentNode,r):r()}_activate(e,t,a){const s=(!t||"UL"!==t.nodeName&&"OL"!==t.nodeName?i.default.children(t,u):i.default.find(f,t))[0],n=a&&s&&s.classList.contains(l),r=()=>this._transitionComplete(e,s,a);s&&n?(s.classList.remove(c),this._queueCallback(r,e,!0)):r()}_transitionComplete(e,t,a){if(t){t.classList.remove(o);const e=i.default.findOne(":scope > .dropdown-menu .active",t.parentNode);e&&e.classList.remove(o),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!1)}e.classList.add(o),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),(e=>{e.offsetHeight})(e),e.classList.contains(l)&&e.classList.add(c);let s=e.parentNode;if(s&&"LI"===s.nodeName&&(s=s.parentNode),s&&s.classList.contains("dropdown-menu")){const t=e.closest(".dropdown");t&&i.default.find(".dropdown-toggle",t).forEach((e=>e.classList.add(o))),e.setAttribute("aria-expanded",!0)}a&&a()}static jQueryInterface(e){return this.each((function(){const t=h.getOrCreateInstance(this);if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}return n.default.on(document,"click.bs.tab.data-api",'[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',(function(e){var t;["A","AREA"].includes(this.tagName)&&e.preventDefault(),!(t=this)||t.nodeType!==Node.ELEMENT_NODE||t.classList.contains("disabled")||(void 0!==t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled"))||h.getOrCreateInstance(this).show()})),b=h,g=()=>{const e=(()=>{const{jQuery:e}=window;return e&&!document.body.hasAttribute("data-bs-no-jquery")?e:null})();if(e){const t=b.NAME,a=e.fn[t];e.fn[t]=b.jQueryInterface,e.fn[t].Constructor=b,e.fn[t].noConflict=()=>(e.fn[t]=a,b.jQueryInterface)}},"loading"===document.readyState?(d.length||document.addEventListener("DOMContentLoaded",(()=>{d.forEach((e=>e()))})),d.push(g)):g(),h;var b,g}(a(9286),a(8737),a(5695))}}]);