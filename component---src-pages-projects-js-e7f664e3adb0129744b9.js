(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{209:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return r});var n=a(219);t.default=n.a;var r="1724610358"},210:function(e,t,a){"use strict";var n=a(211),r=a(0),o=a.n(r),c=a(212);t.a=function(e){var t=e.description,a=void 0===t?"":t,r=e.lang,i=void 0===r?"en":r,s=e.meta,l=void 0===s?[]:s,u=e.title,m=n.data.site,f=a||m.siteMetadata.description;return o.a.createElement(c.Helmet,{htmlAttributes:{lang:i},bodyAttributes:{class:"has-navbar-fixed-top"},title:u,titleTemplate:"%s | "+m.siteMetadata.title,meta:[{name:"description",content:f},{property:"og:title",content:u},{property:"og:description",content:f},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:m.siteMetadata.author},{name:"twitter:title",content:u},{name:"twitter:description",content:f}].concat(l),defer:!1})}},211:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Engineer Starter",description:"A starter for engineering blog and projects.",author:"@t73liu"}}}}},213:function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},215:function(e,t,a){var n=a(216),r=a(228),o=a(229),c="[object Null]",i="[object Undefined]",s=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?i:c:s&&s in Object(e)?r(e):o(e)}},216:function(e,t,a){var n=a(226).Symbol;e.exports=n},217:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(51),c=a(75);t.a=function(e){var t=e.fields.slug,a=e.frontmatter,n=a.title,i=a.description,s=a.source,l=a.demo;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-image"},r.a.createElement("figure",{className:"image is-4by3"},r.a.createElement("img",{src:"https://bulma.io/images/placeholders/1280x960.png",alt:"Project"}))),r.a.createElement("header",{className:"card-header no-box-shadow"},r.a.createElement("div",{className:"card-header-content"},r.a.createElement("p",{className:"title is-size-3"},r.a.createElement(o.a,{to:t},n)))),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"content"},i)),r.a.createElement("footer",{className:"card-footer"},s&&r.a.createElement("div",{className:"card-footer-item no-border"},r.a.createElement(c.a,{url:s},"Code")),l&&r.a.createElement("div",{className:"card-footer-item no-border"},r.a.createElement(c.a,{url:l},"Demo"))))}},219:function(e,t,a){"use strict";var n=a(220),r=a.n(n),o=a(0),c=a.n(o),i=a(51),s=a(210),l=a(217);t.a=function(e){var t=e.data,a=t.tags,n=t.projects,u=e.pageContext.tag;return c.a.createElement(o.Fragment,null,c.a.createElement(s.a,{title:u?"Projects | "+u:"Projects"}),c.a.createElement("section",{className:"hero is-primary is-bold"},c.a.createElement("div",{className:"hero-body"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"title"},"Projects")))),c.a.createElement("div",{className:"padded-container"},c.a.createElement("div",{className:"columns"},c.a.createElement("div",{className:"column is-three-quarters"},r()(n.nodes,2).map(function(e,t){return c.a.createElement("div",{key:t,className:"tile is-ancestor"},e.map(function(e){return c.a.createElement("div",{key:e.id,className:"tile is-parent is-6"},c.a.createElement("article",{className:"tile is-child"},c.a.createElement(l.a,e)))}))})),c.a.createElement("div",{className:"column"},c.a.createElement("article",{className:"tile is-child"},c.a.createElement("p",{className:"title"},"Tags"),c.a.createElement("div",{className:"tags are-medium"},a.group.map(function(e){var t=e.fieldValue,a=e.totalCount;return c.a.createElement("span",{key:t,className:t===u?"tag has-text-weight-bold":"tag"},c.a.createElement(i.a,{to:t===u?"/projects/":"/projects/tags/"+t+"/"},t," (",a,")"))})))))))}},220:function(e,t,a){var n=a(221),r=a(222),o=a(232),c=Math.ceil,i=Math.max;e.exports=function(e,t,a){t=(a?r(e,t,a):void 0===t)?1:i(o(t),0);var s=null==e?0:e.length;if(!s||t<1)return[];for(var l=0,u=0,m=Array(c(s/t));l<s;)m[u++]=n(e,l,l+=t);return m}},221:function(e,t){e.exports=function(e,t,a){var n=-1,r=e.length;t<0&&(t=-t>r?0:r+t),(a=a>r?r:a)<0&&(a+=r),r=t>a?0:a-t>>>0,t>>>=0;for(var o=Array(r);++n<r;)o[n]=e[n+t];return o}},222:function(e,t,a){var n=a(223),r=a(224),o=a(231),c=a(213);e.exports=function(e,t,a){if(!c(a))return!1;var i=typeof t;return!!("number"==i?r(a)&&o(t,a.length):"string"==i&&t in a)&&n(a[t],e)}},223:function(e,t){e.exports=function(e,t){return e===t||e!=e&&t!=t}},224:function(e,t,a){var n=a(225),r=a(230);e.exports=function(e){return null!=e&&r(e.length)&&!n(e)}},225:function(e,t,a){var n=a(215),r=a(213),o="[object AsyncFunction]",c="[object Function]",i="[object GeneratorFunction]",s="[object Proxy]";e.exports=function(e){if(!r(e))return!1;var t=n(e);return t==c||t==i||t==o||t==s}},226:function(e,t,a){var n=a(227),r="object"==typeof self&&self&&self.Object===Object&&self,o=n||r||Function("return this")();e.exports=o},227:function(e,t,a){(function(t){var a="object"==typeof t&&t&&t.Object===Object&&t;e.exports=a}).call(this,a(135))},228:function(e,t,a){a(52),a(94),a(14);var n=a(216),r=Object.prototype,o=r.hasOwnProperty,c=r.toString,i=n?n.toStringTag:void 0;e.exports=function(e){var t=o.call(e,i),a=e[i];try{e[i]=void 0;var n=!0}catch(s){}var r=c.call(e);return n&&(t?e[i]=a:delete e[i]),r}},229:function(e,t,a){a(52),a(94),a(14);var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},230:function(e,t){var a=9007199254740991;e.exports=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=a}},231:function(e,t){var a=9007199254740991,n=/^(?:0|[1-9]\d*)$/;e.exports=function(e,t){var r=typeof e;return!!(t=null==t?a:t)&&("number"==r||"symbol"!=r&&n.test(e))&&e>-1&&e%1==0&&e<t}},232:function(e,t,a){var n=a(233);e.exports=function(e){var t=n(e),a=t%1;return t==t?a?t-a:t:0}},233:function(e,t,a){var n=a(234),r=1/0,o=1.7976931348623157e308;e.exports=function(e){return e?(e=n(e))===r||e===-r?(e<0?-1:1)*o:e==e?e:0:0===e?e:0}},234:function(e,t,a){a(15);var n=a(213),r=a(235),o=NaN,c=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,l=/^0o[0-7]+$/i,u=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(r(e))return o;if(n(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=n(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(c,"");var a=s.test(e);return a||l.test(e)?u(e.slice(2),a?2:8):i.test(e)?o:+e}},235:function(e,t,a){var n=a(215),r=a(236),o="[object Symbol]";e.exports=function(e){return"symbol"==typeof e||r(e)&&n(e)==o}},236:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}}}]);
//# sourceMappingURL=component---src-pages-projects-js-e7f664e3adb0129744b9.js.map