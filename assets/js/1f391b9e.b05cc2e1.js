"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[85],{4833:function(e,a,n){n.r(a),n.d(a,{default:function(){return d}});var t=n(7378),l=n(8944),i=n(4835),s=n(5318),c=n(6256),r=n(236),m=n(1385),o="mdxPageWrapper_G2mb";var d=function(e){var a=e.content,n=a.frontMatter,d=a.metadata,v=n.title,u=n.description,f=n.wrapperClassName,N=n.hide_table_of_contents,g=d.permalink;return t.createElement(i.Z,{title:v,description:u,permalink:g,wrapperClassName:null!=f?f:m.kM.wrapper.mdxPages,pageClassName:m.kM.page.mdxPage},t.createElement("main",{className:"container container--fluid margin-vert--lg"},t.createElement("div",{className:(0,l.Z)("row",o)},t.createElement("div",{className:(0,l.Z)("col",!N&&"col--8")},t.createElement(s.Zo,{components:c.Z},t.createElement(a,null))),!N&&a.toc&&t.createElement("div",{className:"col col--2"},t.createElement(r.Z,{toc:a.toc,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level})))))}},236:function(e,a,n){n.d(a,{Z:function(){return o}});var t=n(5773),l=n(808),i=n(7378),s=n(8944),c=n(3160),r="tableOfContents_thVJ",m=["className"];var o=function(e){var a=e.className,n=(0,l.Z)(e,m);return i.createElement("div",{className:(0,s.Z)(r,"thin-scrollbar",a)},i.createElement(c.Z,(0,t.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},3160:function(e,a,n){n.d(a,{Z:function(){return m}});var t=n(5773),l=n(808),i=n(7378),s=n(1385),c=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function r(e){var a=e.toc,n=e.className,t=e.linkClassName,l=e.isChild;return a.length?i.createElement("ul",{className:l?void 0:n},a.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=t?t:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(r,{isChild:!0,toc:e.children,className:n,linkClassName:t}))}))):null}function m(e){var a=e.toc,n=e.className,m=void 0===n?"table-of-contents table-of-contents__left-border":n,o=e.linkClassName,d=void 0===o?"table-of-contents__link":o,v=e.linkActiveClassName,u=void 0===v?void 0:v,f=e.minHeadingLevel,N=e.maxHeadingLevel,g=(0,l.Z)(e,c),k=(0,s.LU)(),C=null!=f?f:k.tableOfContents.minHeadingLevel,_=null!=N?N:k.tableOfContents.maxHeadingLevel,p=(0,s.DA)({toc:a,minHeadingLevel:C,maxHeadingLevel:_}),h=(0,i.useMemo)((function(){if(d&&u)return{linkClassName:d,linkActiveClassName:u,minHeadingLevel:C,maxHeadingLevel:_}}),[d,u,C,_]);return(0,s.Si)(h),i.createElement(r,(0,t.Z)({toc:p,className:m,linkClassName:d},g))}}}]);