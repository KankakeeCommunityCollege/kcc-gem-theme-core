(self.webpackChunkkcc_gem_theme_core=self.webpackChunkkcc_gem_theme_core||[]).push([[504],{9504:function(e,r,a){"use strict";a.r(r),a(4916),a(4765),a(5306);var n=/---?/g,t=/---/;function c(e){return-1===e.search(t)?"—":e}r.default=function e(r){if(3==r.nodeType&&(r.data=r.data.replace(n,c)),1==r.nodeType&&"SCRIPT"!=r.nodeName)for(var a=0;a<r.childNodes.length;a++)e(r.childNodes[a])}},1530:function(e,r,a){"use strict";var n=a(8710).charAt;e.exports=function(e,r,a){return r+(a?n(e,r).length:1)}},647:function(e,r,a){var n=a(7908),t=Math.floor,c="".replace,i=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,u=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,r,a,l,o,s){var f=a+e.length,v=l.length,h=u;return void 0!==o&&(o=n(o),h=i),c.call(s,h,(function(n,c){var i;switch(c.charAt(0)){case"$":return"$";case"&":return e;case"`":return r.slice(0,a);case"'":return r.slice(f);case"<":i=o[c.slice(1,-1)];break;default:var u=+c;if(0===u)return n;if(u>v){var s=t(u/10);return 0===s?n:s<=v?void 0===l[s-1]?c.charAt(1):l[s-1]+c.charAt(1):n}i=l[u-1]}return void 0===i?"":i}))}},5306:function(e,r,a){"use strict";var n=a(7007),t=a(7293),c=a(9670),i=a(614),u=a(9303),l=a(7466),o=a(1340),s=a(4488),f=a(1530),v=a(8173),h=a(647),d=a(7651),p=a(5112)("replace"),g=Math.max,$=Math.min,x="$0"==="a".replace(/./,"$0"),k=!!/./[p]&&""===/./[p]("a","$0");n("replace",(function(e,r,a){var n=k?"$":"$0";return[function(e,a){var n=s(this),t=null==e?void 0:v(e,p);return t?t.call(e,n,a):r.call(o(n),e,a)},function(e,t){var s=c(this),v=o(e);if("string"==typeof t&&-1===t.indexOf(n)&&-1===t.indexOf("$<")){var p=a(r,s,v,t);if(p.done)return p.value}var x=i(t);x||(t=o(t));var k=s.global;if(k){var m=s.unicode;s.lastIndex=0}for(var b=[];;){var _=d(s,v);if(null===_)break;if(b.push(_),!k)break;""===o(_[0])&&(s.lastIndex=f(v,l(s.lastIndex),m))}for(var y,A="",I=0,w=0;w<b.length;w++){_=b[w];for(var C=o(_[0]),M=g($(u(_.index),v.length),0),N=[],T=1;T<_.length;T++)N.push(void 0===(y=_[T])?y:String(y));var O=_.groups;if(x){var S=[C].concat(N,M,v);void 0!==O&&S.push(O);var P=o(t.apply(void 0,S))}else P=h(C,v,M,N,O,t);M>=I&&(A+=v.slice(I,M)+P,I=M+C.length)}return A+v.slice(I)}]}),!!t((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}))||!x||k)}}]);