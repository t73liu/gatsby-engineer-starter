(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{200:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return u});a(30),a(31),a(14),a(51),a(138);var n=a(252),r=a.n(n),i=a(337),s=a.n(i),c=a(338),l=a.n(c),o=a(67),m=a(0),d=a.n(m),p=a(203);t.default=function(e){var t=e.data,a=s()(r()(l()(t.allMarkdownRemark.edges,function(e){return e.node.frontmatter.tags})),function(e){return e.length});return d.a.createElement(m.Fragment,null,d.a.createElement(p.a,{title:"Blog"}),d.a.createElement("section",{className:"hero is-primary is-bold"},d.a.createElement("div",{className:"hero-body"},d.a.createElement("div",{className:"container"},d.a.createElement("h1",{className:"title"},"Blog")))),d.a.createElement("div",{className:"padded-container"},d.a.createElement("div",{className:"tile is-ancestor"},d.a.createElement("div",{className:"tile is-vertical is-8"},t.allMarkdownRemark.edges.map(function(e){var t=e.node;return d.a.createElement(o.a,{key:t.id,to:t.fields.slug},d.a.createElement("div",{className:"tile is-parent"},d.a.createElement("article",{className:"tile is-child notification"},d.a.createElement("p",{className:"title"},t.frontmatter.title),d.a.createElement("div",{className:"content"},t.excerpt))))})),d.a.createElement("div",{className:"tile is-vertical is-parent"},d.a.createElement("article",{className:"tile is-child"},d.a.createElement("p",{className:"title"},"Tags"),d.a.createElement("div",{className:"tags are-medium"},Object.keys(a).sort().map(function(e){return d.a.createElement("span",{key:e,className:"tag"},d.a.createElement(o.a,{to:"/blog/tags/"+e},e," (",a[e],")"))})))))))};var u="3236528021"},203:function(e,t,a){"use strict";var n=a(204),r=a(0),i=a.n(r),s=a(208);t.a=function(e){var t=e.description,a=void 0===t?"":t,r=e.lang,c=void 0===r?"en":r,l=e.meta,o=void 0===l?[]:l,m=e.title,d=n.data.site,p=a||d.siteMetadata.description;return i.a.createElement(s.Helmet,{htmlAttributes:{lang:c},bodyAttributes:{class:"has-navbar-fixed-top"},title:m,titleTemplate:"%s | "+d.siteMetadata.title,meta:[{name:"description",content:p},{property:"og:title",content:m},{property:"og:description",content:p},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:d.siteMetadata.author},{name:"twitter:title",content:m},{name:"twitter:description",content:p}].concat(o),defer:!1})}},204:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Engineer Starter",description:"A starter for engineering blog and projects.",author:"@t73liu"}}}}}}]);
//# sourceMappingURL=component---src-pages-blog-js-b5832dd3a319f6bd31a9.js.map