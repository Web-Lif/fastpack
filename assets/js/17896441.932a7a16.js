"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[918],{3332:function(e,t,a){a.r(t),a.d(t,{default:function(){return ke}});var n=a(7294),r=a(1944),l=a(9688),s=n.createContext(null);function i(e){var t=e.children,a=function(e){return(0,n.useMemo)((function(){return{metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc}}),[e])}(e.content);return n.createElement(s.Provider,{value:a},t)}function o(){var e=(0,n.useContext)(s);if(null===e)throw new l.i6("DocProvider");return e}function c(){var e,t=o(),a=t.metadata,l=t.frontMatter,s=t.assets;return n.createElement(r.d,{title:a.title,description:a.description,keywords:l.keywords,image:null!=(e=s.image)?e:l.image})}var d=a(6010),m=a(7524),u=a(7462),v=a(5999),b=a(9960);function p(e){var t=e.permalink,a=e.title,r=e.subLabel,l=e.isNext;return n.createElement(b.Z,{className:(0,d.Z)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},r&&n.createElement("div",{className:"pagination-nav__sublabel"},r),n.createElement("div",{className:"pagination-nav__label"},a))}function h(e){var t=e.previous,a=e.next;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,v.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&n.createElement(p,(0,u.Z)({},t,{subLabel:n.createElement(v.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&n.createElement(p,(0,u.Z)({},a,{subLabel:n.createElement(v.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function E(){var e=o().metadata;return n.createElement(h,{previous:e.previous,next:e.next})}var g=a(2263),f=a(143),_=a(5281),N=a(373),Z=a(4477);var k={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(v.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(v.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function L(e){var t=k[e.versionMetadata.banner];return n.createElement(t,e)}function T(e){var t=e.versionLabel,a=e.to,r=e.onClick;return n.createElement(v.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(b.Z,{to:a,onClick:r},n.createElement(v.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function U(e){var t,a=e.className,r=e.versionMetadata,l=(0,g.Z)().siteConfig.title,s=(0,f.gA)({failfast:!0}).pluginId,i=(0,N.J)(s).savePreferredVersionName,o=(0,f.Jo)(s),c=o.latestDocSuggestion,m=o.latestVersionSuggestion,u=null!=c?c:(t=m).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,d.Z)(a,_.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(L,{siteTitle:l,versionMetadata:r})),n.createElement("div",{className:"margin-top--md"},n.createElement(T,{versionLabel:m.label,to:u.path,onClick:function(){return i(m.name)}})))}function w(e){var t=e.className,a=(0,Z.E)();return a.banner?n.createElement(U,{className:t,versionMetadata:a}):null}function C(e){var t=e.className,a=(0,Z.E)();return a.badge?n.createElement("span",{className:(0,d.Z)(t,_.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(v.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}function x(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(v.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function y(e){var t=e.lastUpdatedBy;return n.createElement(v.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function A(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return n.createElement("span",{className:_.k.common.lastUpdated},n.createElement(v.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(x,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:r?n.createElement(y,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var M=a(3366),B="iconEdit_Z9Sw",I=["className"];function V(e){var t=e.className,a=(0,M.Z)(e,I);return n.createElement("svg",(0,u.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,d.Z)(B,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function H(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:_.k.common.editThisPage},n.createElement(V,null),n.createElement(v.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var P="tag_zVej",D="tagRegular_sFm0",S="tagWithCount_h2kH";function F(e){var t=e.permalink,a=e.label,r=e.count;return n.createElement(b.Z,{href:t,className:(0,d.Z)(P,r?S:D)},a,r&&n.createElement("span",null,r))}var O="tags_jXut",z="tag_QGVx";function R(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(v.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,d.Z)(O,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:z},n.createElement(F,{label:t,permalink:a}))}))))}var j="lastUpdated_vwxv";function q(e){return n.createElement("div",{className:(0,d.Z)(_.k.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(R,e)))}function G(e){var t=e.editUrl,a=e.lastUpdatedAt,r=e.lastUpdatedBy,l=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,d.Z)(_.k.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(H,{editUrl:t})),n.createElement("div",{className:(0,d.Z)("col",j)},(a||r)&&n.createElement(A,{lastUpdatedAt:a,formattedLastUpdatedAt:l,lastUpdatedBy:r})))}function J(){var e=o().metadata,t=e.editUrl,a=e.lastUpdatedAt,r=e.formattedLastUpdatedAt,l=e.lastUpdatedBy,s=e.tags,i=s.length>0,c=!!(t||a||l);return i||c?n.createElement("footer",{className:(0,d.Z)(_.k.docs.docFooter,"docusaurus-mt-lg")},i&&n.createElement(q,{tags:s}),c&&n.createElement(G,{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:l,formattedLastUpdatedAt:r})):null}var Q=a(6043),W=a(3743),X="tocCollapsibleButton_TO0P",K="tocCollapsibleButtonExpanded_MG3E",Y=["collapsed"];function $(e){var t=e.collapsed,a=(0,M.Z)(e,Y);return n.createElement("button",(0,u.Z)({type:"button"},a,{className:(0,d.Z)("clean-btn",X,!t&&K,a.className)}),n.createElement(v.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}var ee="tocCollapsible_ETCw",te="tocCollapsibleContent_vkbj",ae="tocCollapsibleExpanded_sAul";function ne(e){var t=e.toc,a=e.className,r=e.minHeadingLevel,l=e.maxHeadingLevel,s=(0,Q.u)({initialState:!0}),i=s.collapsed,o=s.toggleCollapsed;return n.createElement("div",{className:(0,d.Z)(ee,!i&&ae,a)},n.createElement($,{collapsed:i,onClick:o}),n.createElement(Q.z,{lazy:!0,className:te,collapsed:i},n.createElement(W.Z,{toc:t,minHeadingLevel:r,maxHeadingLevel:l})))}var re="tocMobile_ITEo";function le(){var e=o(),t=e.toc,a=e.frontMatter;return n.createElement(ne,{toc:t,minHeadingLevel:a.toc_min_heading_level,maxHeadingLevel:a.toc_max_heading_level,className:(0,d.Z)(_.k.docs.docTocMobile,re)})}var se=a(9407);function ie(){var e=o(),t=e.toc,a=e.frontMatter;return n.createElement(se.Z,{toc:t,minHeadingLevel:a.toc_min_heading_level,maxHeadingLevel:a.toc_max_heading_level,className:_.k.docs.docTocDesktop})}var oe=a(2503),ce=a(210);function de(e){var t,a,r,l,s=e.children,i=(t=o(),a=t.metadata,r=t.frontMatter,l=t.contentTitle,r.hide_title||void 0!==l?null:a.title);return n.createElement("div",{className:(0,d.Z)(_.k.docs.docMarkdown,"markdown")},i&&n.createElement("header",null,n.createElement(oe.Z,{as:"h1"},i)),n.createElement(ce.Z,null,s))}var me=a(8425),ue=a(8596),ve=a(4996);function be(e){return n.createElement("svg",(0,u.Z)({viewBox:"0 0 24 24"},e),n.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}var pe={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function he(e){var t=e.children,a=e.href,r="breadcrumbs__link";return e.isLast?n.createElement("span",{className:r,itemProp:"name"},t):a?n.createElement(b.Z,{className:r,href:a,itemProp:"item"},n.createElement("span",{itemProp:"name"},t)):n.createElement("span",{className:r},t)}function Ee(e){var t=e.children,a=e.active,r=e.index,l=e.addMicrodata;return n.createElement("li",(0,u.Z)({},l&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,d.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,n.createElement("meta",{itemProp:"position",content:String(r+1)}))}function ge(){var e=(0,ve.Z)("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(b.Z,{"aria-label":(0,v.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,d.Z)("breadcrumbs__link",pe.breadcrumbsItemLink),href:e},n.createElement(be,{className:pe.breadcrumbHomeIcon})))}function fe(){var e=(0,me.s1)(),t=(0,ue.Ns)();return e?n.createElement("nav",{className:(0,d.Z)(_.k.docs.docBreadcrumbs,pe.breadcrumbsContainer),"aria-label":(0,v.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement(ge,null),e.map((function(t,a){var r=a===e.length-1;return n.createElement(Ee,{key:a,active:r,index:a,addMicrodata:!!t.href},n.createElement(he,{href:t.href,isLast:r},t.label))})))):null}var _e="docItemContainer_Djhp",Ne="docItemCol_VOVn";function Ze(e){var t,a,r,l,s,i,c=e.children,u=(t=o(),a=t.frontMatter,r=t.toc,l=(0,m.i)(),s=a.hide_table_of_contents,i=!s&&r.length>0,{hidden:s,mobile:i?n.createElement(le,null):void 0,desktop:!i||"desktop"!==l&&"ssr"!==l?void 0:n.createElement(ie,null)});return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,d.Z)("col",!u.hidden&&Ne)},n.createElement(w,null),n.createElement("div",{className:_e},n.createElement("article",null,n.createElement(fe,null),n.createElement(C,null),u.mobile,n.createElement(de,null,c),n.createElement(J,null)),n.createElement(E,null))),u.desktop&&n.createElement("div",{className:"col col--3"},u.desktop))}function ke(e){var t="docs-doc-id-"+e.content.metadata.unversionedId,a=e.content;return n.createElement(i,{content:e.content},n.createElement(r.FG,{className:t},n.createElement(c,null),n.createElement(Ze,null,n.createElement(a,null))))}},4477:function(e,t,a){a.d(t,{E:function(){return i},q:function(){return s}});var n=a(7294),r=a(9688),l=n.createContext(null);function s(e){var t=e.children,a=e.version;return n.createElement(l.Provider,{value:a},t)}function i(){var e=(0,n.useContext)(l);if(null===e)throw new r.i6("DocsVersionProvider");return e}}}]);