(self.webpackChunkkcc_gem_theme_core=self.webpackChunkkcc_gem_theme_core||[]).push([[126],{5126:function(e,r,t){"use strict";t.r(r),t(4916),t(5306),t(4765);var a=document.getElementById("navGlobalBottom");r.default=function(){if("/"!==window.location.pathname)for(var e=a.querySelectorAll("li"),r=window.location.pathname.replace(/(^\/|\/$)/g,""),t=0,n=e.length;t<n;t++){var o=e[t].dataset.nav;if(-1!==r.search(o))return e[t].querySelector("a").classList.add("header-global__nav-bottom--underlined")}}},1530:function(e,r,t){"use strict";var a=t(8710).charAt;e.exports=function(e,r,t){return r+(t?a(e,r).length:1)}},647:function(e,r,t){var a=t(1702),n=t(7908),o=Math.floor,c=a("".charAt),i=a("".replace),u=a("".slice),l=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,v=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,r,t,a,f,s){var d=t+e.length,h=a.length,g=v;return void 0!==f&&(f=n(f),g=l),i(s,g,(function(n,i){var l;switch(c(i,0)){case"$":return"$";case"&":return e;case"`":return u(r,0,t);case"'":return u(r,d);case"<":l=f[u(i,1,-1)];break;default:var v=+i;if(0===v)return n;if(v>h){var s=o(v/10);return 0===s?n:s<=h?void 0===a[s-1]?c(i,1):a[s-1]+c(i,1):n}l=a[v-1]}return void 0===l?"":l}))}},5306:function(e,r,t){"use strict";var a=t(2104),n=t(6916),o=t(1702),c=t(7007),i=t(7293),u=t(9670),l=t(614),v=t(9303),f=t(7466),s=t(1340),d=t(4488),h=t(1530),g=t(8173),p=t(647),$=t(7651),m=t(5112)("replace"),b=Math.max,k=Math.min,x=o([].concat),_=o([].push),w=o("".indexOf),y=o("".slice),I="$0"==="a".replace(/./,"$0"),A=!!/./[m]&&""===/./[m]("a","$0");c("replace",(function(e,r,t){var o=A?"$":"$0";return[function(e,t){var a=d(this),o=null==e?void 0:g(e,m);return o?n(o,e,a,t):n(r,s(a),e,t)},function(e,n){var c=u(this),i=s(e);if("string"==typeof n&&-1===w(n,o)&&-1===w(n,"$<")){var d=t(r,c,i,n);if(d.done)return d.value}var g=l(n);g||(n=s(n));var m=c.global;if(m){var I=c.unicode;c.lastIndex=0}for(var A=[];;){var M=$(c,i);if(null===M)break;if(_(A,M),!m)break;""===s(M[0])&&(c.lastIndex=h(i,f(c.lastIndex),I))}for(var S,q="",B=0,C=0;C<A.length;C++){for(var E=s((M=A[C])[0]),G=b(k(v(M.index),i.length),0),L=[],O=1;O<M.length;O++)_(L,void 0===(S=M[O])?S:String(S));var j=M.groups;if(g){var z=x([E],L,G,i);void 0!==j&&_(z,j);var D=s(a(n,void 0,z))}else D=p(E,i,G,L,j,n);G>=B&&(q+=y(i,B,G)+D,B=G+E.length)}return q+y(i,B)}]}),!!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}))||!I||A)}}]);