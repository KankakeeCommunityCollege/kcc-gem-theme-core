(self.webpackChunkkcc_gem_theme_core=self.webpackChunkkcc_gem_theme_core||[]).push([[504],{9504:function(e,n,r){"use strict";r.r(n),r(4916),r(4765),r(5306);var t=/---?/g,a=/---/;function c(e){return-1===e.search(a)?"—":e}n.default=function e(n){if(3==n.nodeType&&(n.data=n.data.replace(t,c)),1==n.nodeType&&"SCRIPT"!=n.nodeName)for(var r=0;r<n.childNodes.length;r++)e(n.childNodes[r])}},1530:function(e,n,r){"use strict";var t=r(8710).charAt;e.exports=function(e,n,r){return n+(r?t(e,n).length:1)}},7007:function(e,n,r){"use strict";r(4916);var t=r(1320),a=r(2261),c=r(7293),l=r(5112),i=r(8880),u=l("species"),o=RegExp.prototype;e.exports=function(e,n,r,s){var f=l(e),v=!c((function(){var n={};return n[f]=function(){return 7},7!=""[e](n)})),d=v&&!c((function(){var n=!1,r=/a/;return"split"===e&&((r={}).constructor={},r.constructor[u]=function(){return r},r.flags="",r[f]=/./[f]),r.exec=function(){return n=!0,null},r[f](""),!n}));if(!v||!d||r){var x=/./[f],p=n(f,""[e],(function(e,n,r,t,c){var l=n.exec;return l===a||l===o.exec?v&&!c?{done:!0,value:x.call(n,r,t)}:{done:!0,value:e.call(r,n,t)}:{done:!1}}));t(String.prototype,e,p[0]),t(o,f,p[1])}s&&i(o[f],"sham",!0)}},647:function(e,n,r){var t=r(7908),a=Math.floor,c="".replace,l=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,i=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,n,r,u,o,s){var f=r+e.length,v=u.length,d=i;return void 0!==o&&(o=t(o),d=l),c.call(s,d,(function(t,c){var l;switch(c.charAt(0)){case"$":return"$";case"&":return e;case"`":return n.slice(0,r);case"'":return n.slice(f);case"<":l=o[c.slice(1,-1)];break;default:var i=+c;if(0===i)return t;if(i>v){var s=a(i/10);return 0===s?t:s<=v?void 0===u[s-1]?c.charAt(1):u[s-1]+c.charAt(1):t}l=u[i-1]}return void 0===l?"":l}))}},7651:function(e,n,r){var t=r(9670),a=r(614),c=r(4326),l=r(2261);e.exports=function(e,n){var r=e.exec;if(a(r)){var i=r.call(e,n);return null!==i&&t(i),i}if("RegExp"===c(e))return l.call(e,n);throw TypeError("RegExp#exec called on incompatible receiver")}},2261:function(e,n,r){"use strict";var t,a,c=r(1340),l=r(7066),i=r(2999),u=r(2309),o=r(30),s=r(9909).get,f=r(9441),v=r(7168),d=RegExp.prototype.exec,x=u("native-string-replace",String.prototype.replace),p=d,g=(t=/a/,a=/b*/g,d.call(t,"a"),d.call(a,"a"),0!==t.lastIndex||0!==a.lastIndex),h=i.UNSUPPORTED_Y||i.BROKEN_CARET,I=void 0!==/()??/.exec("")[1];(g||I||h||f||v)&&(p=function(e){var n,r,t,a,i,u,f,v=this,E=s(v),R=c(e),b=E.raw;if(b)return b.lastIndex=v.lastIndex,n=p.call(b,R),v.lastIndex=b.lastIndex,n;var y=E.groups,$=h&&v.sticky,m=l.call(v),k=v.source,_=0,A=R;if($&&(-1===(m=m.replace("y","")).indexOf("g")&&(m+="g"),A=R.slice(v.lastIndex),v.lastIndex>0&&(!v.multiline||v.multiline&&"\n"!==R.charAt(v.lastIndex-1))&&(k="(?: "+k+")",A=" "+A,_++),r=new RegExp("^(?:"+k+")",m)),I&&(r=new RegExp("^"+k+"$(?!\\s)",m)),g&&(t=v.lastIndex),a=d.call($?r:v,A),$?a?(a.input=a.input.slice(_),a[0]=a[0].slice(_),a.index=v.lastIndex,v.lastIndex+=a[0].length):v.lastIndex=0:g&&a&&(v.lastIndex=v.global?a.index+a[0].length:t),I&&a&&a.length>1&&x.call(a[0],r,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(a[i]=void 0)})),a&&y)for(a.groups=u=o(null),i=0;i<y.length;i++)u[(f=y[i])[0]]=a[f[1]];return a}),e.exports=p},7066:function(e,n,r){"use strict";var t=r(9670);e.exports=function(){var e=t(this),n="";return e.global&&(n+="g"),e.ignoreCase&&(n+="i"),e.multiline&&(n+="m"),e.dotAll&&(n+="s"),e.unicode&&(n+="u"),e.sticky&&(n+="y"),n}},2999:function(e,n,r){var t=r(7293),a=r(7854).RegExp;n.UNSUPPORTED_Y=t((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),n.BROKEN_CARET=t((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},9441:function(e,n,r){var t=r(7293),a=r(7854).RegExp;e.exports=t((function(){var e=a(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))},7168:function(e,n,r){var t=r(7293),a=r(7854).RegExp;e.exports=t((function(){var e=a("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},1150:function(e){e.exports=Object.is||function(e,n){return e===n?0!==e||1/e==1/n:e!=e&&n!=n}},4916:function(e,n,r){"use strict";var t=r(2109),a=r(2261);t({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},5306:function(e,n,r){"use strict";var t=r(7007),a=r(7293),c=r(9670),l=r(614),i=r(9303),u=r(7466),o=r(1340),s=r(4488),f=r(1530),v=r(8173),d=r(647),x=r(7651),p=r(5112)("replace"),g=Math.max,h=Math.min,I="$0"==="a".replace(/./,"$0"),E=!!/./[p]&&""===/./[p]("a","$0");t("replace",(function(e,n,r){var t=E?"$":"$0";return[function(e,r){var t=s(this),a=null==e?void 0:v(e,p);return a?a.call(e,t,r):n.call(o(t),e,r)},function(e,a){var s=c(this),v=o(e);if("string"==typeof a&&-1===a.indexOf(t)&&-1===a.indexOf("$<")){var p=r(n,s,v,a);if(p.done)return p.value}var I=l(a);I||(a=o(a));var E=s.global;if(E){var R=s.unicode;s.lastIndex=0}for(var b=[];;){var y=x(s,v);if(null===y)break;if(b.push(y),!E)break;""===o(y[0])&&(s.lastIndex=f(v,u(s.lastIndex),R))}for(var $,m="",k=0,_=0;_<b.length;_++){y=b[_];for(var A=o(y[0]),w=g(h(i(y.index),v.length),0),O=[],T=1;T<y.length;T++)O.push(void 0===($=y[T])?$:String($));var N=y.groups;if(I){var C=[A].concat(O,w,v);void 0!==N&&C.push(N);var S=o(a.apply(void 0,C))}else S=d(A,v,w,O,N,a);w>=k&&(m+=v.slice(k,w)+S,k=w+A.length)}return m+v.slice(k)}]}),!!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}))||!I||E)},4765:function(e,n,r){"use strict";var t=r(7007),a=r(9670),c=r(4488),l=r(1150),i=r(1340),u=r(8173),o=r(7651);t("search",(function(e,n,r){return[function(n){var r=c(this),t=null==n?void 0:u(n,e);return t?t.call(n,r):new RegExp(n)[e](i(r))},function(e){var t=a(this),c=i(e),u=r(n,t,c);if(u.done)return u.value;var s=t.lastIndex;l(s,0)||(t.lastIndex=0);var f=o(t,c);return l(t.lastIndex,s)||(t.lastIndex=s),null===f?-1:f.index}]}))}}]);