(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{208:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return d});var r=a(0),i=a.n(r),n=a(215),s=a.n(n),l=a(210),o=a(213),c=a(214);t.default=function(e){var t=e.data,a=t.posts,n=t.projects,d=t.profileImage;return i.a.createElement(r.Fragment,null,i.a.createElement(l.a,{title:"Home"}),i.a.createElement("section",{className:"hero is-primary is-bold"},i.a.createElement("div",{className:"hero-body"},i.a.createElement("div",{className:"container"},i.a.createElement("h1",{className:"title"},"Welcome")))),i.a.createElement("div",{className:"padded-container"},i.a.createElement("div",{className:"columns"},i.a.createElement("div",{className:"column is-one-quarter"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-image"},i.a.createElement(s.a,{fluid:d.childImageSharp.fluid,alt:"Profile"})),i.a.createElement("div",{className:"card-content"},i.a.createElement("p",{className:"title is-4"},"John Smith"),i.a.createElement("p",{className:"subtitle is-6"},"@johnsmith"),i.a.createElement("div",{className:"content"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",i.a.createElement("ul",null,i.a.createElement("li",null,"JavaScript"),i.a.createElement("li",null,"React"),i.a.createElement("li",null,"GraphQL")))))),i.a.createElement("div",{className:"column"},i.a.createElement("div",null,i.a.createElement("div",{className:"title"},"Recent Posts"),a.nodes.map(function(e){return i.a.createElement("div",{key:e.id,className:"tile is-parent"},i.a.createElement("article",{className:"tile is-child"},i.a.createElement(o.a,e)))})),i.a.createElement("div",null,i.a.createElement("p",{className:"title"},"Recent Projects"),i.a.createElement("div",{className:"tile is-ancestor"},n.nodes.map(function(e){return i.a.createElement("div",{key:e.id,className:"tile is-4 is-parent"},i.a.createElement("article",{className:"tile is-child"},i.a.createElement(c.a,e)))})))))))};var d="2156249156"},210:function(e,t,a){"use strict";var r=a(211),i=a(0),n=a.n(i),s=a(212);t.a=function(e){var t=e.description,a=void 0===t?"":t,i=e.lang,l=void 0===i?"en":i,o=e.meta,c=void 0===o?[]:o,d=e.title,u=r.data.site,f=a||u.siteMetadata.description;return n.a.createElement(s.Helmet,{htmlAttributes:{lang:l},bodyAttributes:{class:"has-navbar-fixed-top"},title:d,titleTemplate:"%s | "+u.siteMetadata.title,meta:[{name:"description",content:f},{property:"og:title",content:d},{property:"og:description",content:f},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:u.siteMetadata.author},{name:"twitter:title",content:d},{name:"twitter:description",content:f}].concat(c),defer:!1})}},211:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Engineer Starter",description:"A starter for engineering blog and projects.",author:"@t73liu"}}}}},213:function(e,t,a){"use strict";var r=a(0),i=a.n(r),n=a(51);t.a=function(e){var t=e.fields.slug,a=e.frontmatter,r=a.title,s=a.date,l=e.excerpt,o=e.timeToRead;return i.a.createElement("div",{className:"card"},i.a.createElement("header",{className:"card-header no-box-shadow"},i.a.createElement("div",{className:"card-header-content"},i.a.createElement("p",{className:"title is-size-3"},i.a.createElement(n.a,{to:t},r)),i.a.createElement("p",{className:"subtitle is-size-6"},i.a.createElement("small",null,s," • ",o," min read")))),i.a.createElement("div",{className:"card-content"},i.a.createElement("div",{className:"content"},l)))}},214:function(e,t,a){"use strict";var r=a(0),i=a.n(r),n=a(51),s=a(77),l=a(215),o=a.n(l);t.a=function(e){var t=e.fields.slug,a=e.frontmatter,r=a.title,l=a.description,c=a.source,d=a.demo,u=a.image;return i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-image"},i.a.createElement(n.a,{to:t},i.a.createElement(o.a,{fluid:u.childImageSharp.fluid,alt:r}))),i.a.createElement("header",{className:"card-header no-box-shadow"},i.a.createElement("div",{className:"card-header-content"},i.a.createElement("p",{className:"title is-size-3"},i.a.createElement(n.a,{to:t},r)))),i.a.createElement("div",{className:"card-content"},i.a.createElement("div",{className:"content"},l)),i.a.createElement("footer",{className:"card-footer"},c&&i.a.createElement("div",{className:"card-footer-item no-border"},i.a.createElement(s.a,{url:c},"Code")),d&&i.a.createElement("div",{className:"card-footer-item no-border"},i.a.createElement(s.a,{url:d},"Demo"))))}},215:function(e,t,a){"use strict";a(30),a(31),a(14),a(96),a(138),a(219);var r=a(16);t.__esModule=!0,t.default=void 0;var i,n=r(a(71)),s=r(a(72)),l=r(a(135)),o=r(a(136)),c=r(a(0)),d=r(a(54)),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=y([].concat(t.fluid))),t.fixed&&(t.fixed=y([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},m=Object.create({}),p=function(e){var t=u(e),a=f(t);return m[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,E=h&&window.IntersectionObserver,v=new WeakMap;function b(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),c.default.createElement("source",{media:i,srcSet:a,sizes:n}))})}function y(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function S(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})})}function N(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})})}function w(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var L=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),v.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),v.set(e,t)),function(){a.unobserve(e),v.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?w(e,!0):"")+w(e)}).join("")+"<img "+c+s+l+a+r+t+n+i+o+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},R=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=c.default.createElement(z,(0,o.default)({src:t},i));return a.length>1?c.default.createElement("picture",null,r(a),n):n},z=c.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,m=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return c.default.createElement("img",(0,o.default)({sizes:a,srcSet:r,src:i},m,{onLoad:s,onError:d,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});z.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var O=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&p(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!g&&E&&!t.critical&&!a.seenBefore;var r=t.critical||h&&(g||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),m[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,l=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,m=e.placeholderClassName,p=e.fluid,g=e.fixed,h=e.backgroundColor,E=e.durationFadeIn,v=e.Tag,y=e.itemProp,w=e.loading,L=e.draggable,O=!1===this.state.fadeIn||this.state.imgLoaded,V=!0===this.state.fadeIn&&!this.state.imgCached,x=(0,o.default)({opacity:O?1:0,transition:V?"opacity "+E+"ms":"none"},l),P="boolean"==typeof h?"lightgray":h,T={transitionDelay:E+"ms"},j=(0,o.default)({opacity:this.state.imgLoaded?0:1},V&&T,l,f),k={title:t,alt:this.state.isVisible?"":a,style:j,className:m};if(p){var C=p,M=C[0];return c.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(M.srcSet)},c.default.createElement(v,{style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),P&&c.default.createElement(v,{title:t,style:(0,o.default)({backgroundColor:P,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},V&&T)}),M.base64&&c.default.createElement(R,{src:M.base64,spreadProps:k,imageVariants:C,generateSources:N}),M.tracedSVG&&c.default.createElement(R,{src:M.tracedSVG,spreadProps:k,imageVariants:C,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,b(C),c.default.createElement(z,{alt:a,title:t,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:w,draggable:L})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,o.default)({alt:a,title:t,loading:w},M,{imageVariants:C}))}}))}if(g){var q=g,W=q[0],G=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:W.width,height:W.height},n);return"inherit"===n.display&&delete G.display,c.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:G,ref:this.handleRef,key:"fixed-"+JSON.stringify(W.srcSet)},P&&c.default.createElement(v,{title:t,style:(0,o.default)({backgroundColor:P,width:W.width,opacity:this.state.imgLoaded?0:1,height:W.height},V&&T)}),W.base64&&c.default.createElement(R,{src:W.base64,spreadProps:k,imageVariants:q,generateSources:N}),W.tracedSVG&&c.default.createElement(R,{src:W.tracedSVG,spreadProps:k,imageVariants:q,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,b(q),c.default.createElement(z,{alt:a,title:t,width:W.width,height:W.height,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:w,draggable:L})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,o.default)({alt:a,title:t,loading:w},W,{imageVariants:q}))}}))}return null},t}(c.default.Component);O.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var V=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),x=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});O.propTypes={resolutions:V,sizes:x,fixed:d.default.oneOfType([V,d.default.arrayOf(V)]),fluid:d.default.oneOfType([x,d.default.arrayOf(x)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var P=O;t.default=P},219:function(e,t,a){"use strict";a(220)("fixed",function(e){return function(){return e(this,"tt","","")}})},220:function(e,t,a){var r=a(1),i=a(8),n=a(32),s=/"/g,l=function(e,t,a,r){var i=String(n(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),l+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),r(r.P+r.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}}}]);
//# sourceMappingURL=component---src-pages-index-js-b326aa7f880677b5195d.js.map