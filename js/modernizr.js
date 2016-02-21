/*! modernizr 3.1.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-csstransforms3d !*/
!function(e,n,t){function r(e,n){return typeof e===n}function s(){var e,n,t,s,o,i,a;for(var f in C){if(e=[],n=C[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(s=r(n.fn,"function")?n.fn():n.fn,o=0;o<e.length;o++)i=e[o],a=i.split("."),1===a.length?Modernizr[a[0]]=s:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=s),y.push((s?"":"no-")+a.join("-"))}}function o(e){var n=w.className,t=Modernizr._config.classPrefix||"";if(x&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),x?w.className.baseVal=n:w.className=n)}function i(e,n){return!!~(""+e).indexOf(n)}function a(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):x?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function f(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function l(e,n){return function(){return e.apply(n,arguments)}}function u(e,n,t){var s;for(var o in e)if(e[o]in n)return t===!1?e[o]:(s=n[e[o]],r(s,"function")?l(s,t||n):s);return!1}function p(){var e=n.body;return e||(e=a(x?"svg":"body"),e.fake=!0),e}function d(e,t,r,s){var o,i,f,l,u="modernizr",d=a("div"),c=p();if(parseInt(r,10))for(;r--;)f=a("div"),f.id=s?s[r]:u+(r+1),d.appendChild(f);return o=a("style"),o.type="text/css",o.id="s"+u,(c.fake?c:d).appendChild(o),c.appendChild(d),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(n.createTextNode(e)),d.id=u,c.fake&&(c.style.background="",c.style.overflow="hidden",l=w.style.overflow,w.style.overflow="hidden",w.appendChild(c)),i=t(d,e),c.fake?(c.parentNode.removeChild(c),w.style.overflow=l,w.offsetHeight):d.parentNode.removeChild(d),!!i}function c(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(n,r){var s=n.length;if("CSS"in e&&"supports"in e.CSS){for(;s--;)if(e.CSS.supports(c(n[s]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];s--;)o.push("("+c(n[s])+":"+r+")");return o=o.join(" or "),d("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function v(e,n,s,o){function l(){p&&(delete k.style,delete k.modElem)}if(o=r(o,"undefined")?!1:o,!r(s,"undefined")){var u=m(e,s);if(!r(u,"undefined"))return u}for(var p,d,c,v,h,g=["modernizr","tspan"];!k.style;)p=!0,k.modElem=a(g.shift()),k.style=k.modElem.style;for(c=e.length,d=0;c>d;d++)if(v=e[d],h=k.style[v],i(v,"-")&&(v=f(v)),k.style[v]!==t){if(o||r(s,"undefined"))return l(),"pfx"==n?v:!0;try{k.style[v]=s}catch(y){}if(k.style[v]!=h)return l(),"pfx"==n?v:!0}return l(),!1}function h(e,n,t,s,o){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+z.join(i+" ")+i).split(" ");return r(n,"string")||r(n,"undefined")?v(a,n,s,o):(a=(e+" "+E.join(i+" ")+i).split(" "),u(a,n,t))}function g(e,n,r){return h(e,t,t,n,r)}var y=[],C=[],S={_version:"3.1.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){C.push({name:e,fn:n,options:t})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=S,Modernizr=new Modernizr;var w=n.documentElement,x="svg"===w.nodeName.toLowerCase(),_="CSS"in e&&"supports"in e.CSS,b="supportsCSS"in e;Modernizr.addTest("supports",_||b);var P="Moz O ms Webkit",z=S._config.usePrefixes?P.split(" "):[];S._cssomPrefixes=z;var E=S._config.usePrefixes?P.toLowerCase().split(" "):[];S._domPrefixes=E;var N=S.testStyles=d,T={elem:a("modernizr")};Modernizr._q.push(function(){delete T.elem});var k={style:T.elem.style};Modernizr._q.unshift(function(){delete k.style}),S.testAllProps=h,S.testAllProps=g,Modernizr.addTest("csstransforms3d",function(){var e=!!g("perspective","1px",!0),n=Modernizr._config.usePrefixes;if(e&&(!n||"webkitPerspective"in w.style)){var t;Modernizr.supports?t="@supports (perspective: 1px)":(t="@media (transform-3d)",n&&(t+=",(-webkit-transform-3d)")),t+="{#modernizr{left:9px;position:absolute;height:5px;margin:0;padding:0;border:0}}",N(t,function(n){e=9===n.offsetLeft&&5===n.offsetHeight})}return e}),s(),o(y),delete S.addTest,delete S.addAsyncTest;for(var j=0;j<Modernizr._q.length;j++)Modernizr._q[j]();e.Modernizr=Modernizr}(window,document);