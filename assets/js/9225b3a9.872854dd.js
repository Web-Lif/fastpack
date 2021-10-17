"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[446],{1226:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return k},default:function(){return d}});var l=n(5773),a=n(808),i=(n(7378),n(5318)),r=["components"],p={sidebar_position:2,title:"config \u914d\u7f6e"},o=void 0,u={unversionedId:"config",id:"config",isDocsHomePage:!1,title:"config \u914d\u7f6e",description:"Fastpack \u9ed8\u8ba4\u4f1a\u8bfb\u53d6\u5f53\u524d\u9879\u76ee\u4e2d\u7684 .fastpack.ts \u6587\u4ef6",source:"@site/docs/config.md",sourceDirName:".",slug:"/config",permalink:"/fastpack/docs/config",editUrl:"https://github.com/Web-Lif/edit/canary/website/docs/config.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"config \u914d\u7f6e"},sidebar:"tutorialSidebar",previous:{title:"\u4ecb\u7ecd",permalink:"/fastpack/docs/getting-started"}},k=[{value:"alias",id:"alias",children:[]},{value:"devServer",id:"devserver",children:[]},{value:"devtool",id:"devtool",children:[]},{value:"define",id:"define",children:[]},{value:"copy",id:"copy",children:[]},{value:"router",id:"router",children:[]},{value:"rootRender",id:"rootrender",children:[]},{value:"publicPath",id:"publicpath",children:[]},{value:"meta",id:"meta",children:[]},{value:"title",id:"title",children:[]},{value:"favicon",id:"favicon",children:[]},{value:"share",id:"share",children:[]},{value:"plugins",id:"plugins",children:[]}],s={toc:k};function d(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,l.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Fastpack \u9ed8\u8ba4\u4f1a\u8bfb\u53d6\u5f53\u524d\u9879\u76ee\u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},".fastpack.ts")," \u6587\u4ef6"),(0,i.kt)("p",null,"\u4f8b\u5982\u4e00\u822c\u9879\u76ee\u4e2d\u7684\u9879\u76ee\u7ed3\u6784\u5982\u4e0b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"\u251c\u2500public\n\u2502      1.txt\n\u2514\u2500src\n|   \u251c\u2500components\n|   \u2502      Loading.tsx\n|   \u2502      NotFound.tsx\n|   \u2502\n|   \u251c\u2500layouts\n|   \u2502      index.tsx\n|   \u2502\n|   \u2514\u2500pages\n|       \u2502  index.tsx\n|       \u2502\n|       \u2514\u2500User\n|           \u2514\u2500Login.tsx\n|           \u2514\u2500Logout.tsx\n|           \u2514\u2500test.tsx\n\u2514\u2500.eslintrc.js\n\u2514\u2500.fastpack.ts\n\u2514\u2500.gitignore\n\u2514\u2500.prettierrc.json\n\u2514\u2500babel.config.js\n\u2514\u2500jest.config.ts\n\u2514\u2500package.json\n\u2514\u2500tsconfig.json\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},".fastpack.ts")," \u6587\u4ef6\u4e2d\u5c31\u662f\u6240\u6709\u7684\u9879\u76ee\u914d\u7f6e\u4fe1\u606f")),(0,i.kt)("h2",{id:"alias"},"alias"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"object")),(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"))),(0,i.kt)("p",null,"\u914d\u7f6e\u522b\u540d\uff0c\u5bf9\u5f15\u7528\u8def\u5f84\u8fdb\u884c\u6620\u5c04\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n alias: {\n     foo: '/temp/foo',\n }\n};\n")),(0,i.kt)("p",null,"\u7136\u540e ",(0,i.kt)("inlineCode",{parentName:"p"},"import('foo')"),"\uff0c\u5b9e\u9645\u4e0a\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"import('/tmp/foo')"),"\u3002"),(0,i.kt)("h2",{id:"devserver"},"devServer"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"object")),(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"))),(0,i.kt)("p",null,"\u914d\u7f6e\u5f00\u53d1\u670d\u52a1\u5668"),(0,i.kt)("p",null,"\u5305\u542b\u4ee5\u4e0b\u7684\u914d\u7f6e\u9879"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"port \u7aef\u53e3\u53f7\uff0c\u9ed8\u8ba4 8000"),(0,i.kt)("li",{parentName:"ul"},"host \u9ed8\u8ba4 0.0.0.0"),(0,i.kt)("li",{parentName:"ul"},"https \u662f\u5426\u542f\u7528 https server\uff0c\u540c\u65f6\u4e5f\u4f1a\u5f00\u542f HTTP/2"),(0,i.kt)("li",{parentName:"ul"},"writeToDisk \u751f\u6210 assets \u5230\u6587\u4ef6\u7cfb\u7edf")),(0,i.kt)("h2",{id:"devtool"},"devtool"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type: string"),(0,i.kt)("li",{parentName:"ul"},"Default: cheap-module-source-map in dev, false in build")),(0,i.kt)("p",null,"\u7528\u6237\u914d\u7f6e sourcemap \u7c7b\u578b\u3002"),(0,i.kt)("p",null,"\u5e38\u89c1\u7684\u53ef\u9009\u7c7b\u578b\u6709\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"eval\uff0c\u6700\u5feb\u7684\u7c7b\u578b\uff0c\u4f46\u4e0d\u652f\u6301\u4f4e\u7248\u672c\u6d4f\u89c8\u5668\uff0c\u5982\u679c\u7f16\u8bd1\u6162\uff0c\u53ef\u4ee5\u8bd5\u8bd5"),(0,i.kt)("li",{parentName:"ul"},"source-map\uff0c\u6700\u6162\u6700\u5168\u7684\u7c7b\u578b")),(0,i.kt)("p",null,"\u66f4\u591a\u7c7b\u578b\u89c1 ",(0,i.kt)("a",{parentName:"p",href:"https://webpack.js.org/configuration/devtool/"},"https://webpack.js.org/configuration/devtool/")),(0,i.kt)("h2",{id:"define"},"define"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"object")),(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"))),(0,i.kt)("p",null,"\u7528\u4e8e\u63d0\u4f9b\u7ed9\u4ee3\u7801\u4e2d\u53ef\u7528\u7684\u53d8\u91cf\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  define: {\n    VERSION: '0.0.1-canary',\n  },\n};\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u7136\u540e\u4f60\u5199 console.log(VERSION); \u4f1a\u88ab\u7f16\u8bd1\u6210 console.log('0.0.1-canary')\u3002\u6ce8\u610f: ",(0,i.kt)("inlineCode",{parentName:"p"},"define")," \u5bf9\u8c61\u7684\u5c5e\u6027\u503c\u4f1a\u7ecf\u8fc7\u4e00\u6b21 ",(0,i.kt)("inlineCode",{parentName:"p"},"JSON.stringify")," \u8f6c\u6362")),(0,i.kt)("h2",{id:"copy"},"copy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"Array<string | { from:string, to:string }>")),(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"))),(0,i.kt)("p",null,"\u8bbe\u7f6e\u8981\u590d\u5236\u5230\u8f93\u51fa\u76ee\u5f55\u7684\u6587\u4ef6\u6216\u6587\u4ef6\u5939\u3002\u89c1 ",(0,i.kt)("a",{parentName:"p",href:"https://www.webpackjs.com/plugins/copy-webpack-plugin/"},"https://www.webpackjs.com/plugins/copy-webpack-plugin/")),(0,i.kt)("h2",{id:"router"},"router"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"Router")),(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"))),(0,i.kt)("p",null,"\u914d\u7f6e\u5f53\u524d\u9879\u76ee\u7684\u8def\u7531\u4fe1\u606f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"router.paths \u8bbe\u7f6e\u8def\u7531\u4fe1\u606f\uff0c\u8fd9\u4e9b\u4f1a\u88ab\u6ce8\u518c\u6210\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"react-router-dom")," \u7684\u8def\u7531\u4fe1\u606f"),(0,i.kt)("li",{parentName:"ul"},"router.notFound \u5982\u679c\u6ca1\u6709\u627e\u5230\u5bf9\u5e94\u7684\u8def\u7531\u4fe1\u606f\uff0c\u5219\u4f7f\u7528\u6b64\u914d\u7f6e\u9879\u76ee\u7684\u6587\u4ef6\uff0c\u8fd9\u4e2a\u6587\u4ef6\u5bfc\u51fa\u7684\u5fc5\u987b\u662f\u4e00\u4e2a React \u7ec4\u4ef6"),(0,i.kt)("li",{parentName:"ul"},"router.loading \u9ed8\u8ba4\u60c5\u51b5\u4e0b\u65e0\u52a0\u8f7d\u7684\u52a8\u753b\uff0c\u5982\u679c\u6307\u5b9a\u8fd9\u4e2a\u4fe1\u606f\uff0c\u8868\u793a\u5728\u52a0\u8f7d\u7684\u65f6\u5019\u7684\u65f6\u5019\u4f1a\u91c7\u7528\u8fd9\u4e2a\u6587\u4ef6\u5bfc\u51fa\u7684\u7ec4\u4ef6\u6765\u5c55\u793a\u52a8\u753b"),(0,i.kt)("li",{parentName:"ul"},"router.layout \u5e03\u5c40\u4fe1\u606f\uff0c\u7528\u6237\u53ef\u4ee5\u6307\u5b9a\u6b64\u5c5e\u6027\u6765\u8fdb\u884c\u5bf9\u4e0d\u540c\u7684\u5730\u5740\u5c55\u73b0\u4e0d\u540c\u7684\u5e03\u5c40")),(0,i.kt)("h2",{id:"rootrender"},"rootRender"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"string")),(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"''"))),(0,i.kt)("p",null,"\u6e32\u67d3\u7684\u8282\u70b9\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4f1a\u81ea\u52a8\u521b\u5efa\u4e00\u4e2a div \u6765\u8fdb\u884c\u8282\u70b9\u7684\u6e32\u67d3\uff0c \u5982\u679c\u6307\u5b9a\u8fd9\u4e2a\u503c\uff0c\u5c31\u4f1a\u5bfb\u627e\u8282\u70b9id \u4e3a\u8fd9\u4e2a\u503c\u7684\u8282\u70b9\u6765\u8fdb\u884c\u6e32\u67d3"),(0,i.kt)("h2",{id:"publicpath"},"publicPath"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"string")),(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'/'"))),(0,i.kt)("p",null,"\u7528\u4e8e\u811a\u672c\u548c\u94fe\u63a5\u6807\u7b7e\u7684 publicPath \u89c1 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jantimon/html-webpack-plugin"},"https://github.com/jantimon/html-webpack-plugin")),(0,i.kt)("h2",{id:"meta"},"meta"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"{[name: string]: string}")),(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"))),(0,i.kt)("p",null,"\u914d\u7f6e\u989d\u5916\u7684 meta \u6807\u7b7e\u3002\u6570\u7ec4\u4e2d\u53ef\u4ee5\u914d\u7f6ekey:value\u5f62\u5f0f\u7684\u5bf9\u8c61\u3002"),(0,i.kt)("h2",{id:"title"},"title"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"string")),(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"''"))),(0,i.kt)("p",null,"\u914d\u7f6e\u7f51\u9875\u6807\u9898"),(0,i.kt)("h2",{id:"favicon"},"favicon"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"string")),(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"''"))),(0,i.kt)("p",null,"\u914d\u7f6e favicon \u5730\u5740"),(0,i.kt)("h2",{id:"share"},"share"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"FastPackShare")),(0,i.kt)("li",{parentName:"ul"},"Default: ``")),(0,i.kt)("p",null,"\u58f0\u660e\u6b64\u5c5e\u6027, \u8868\u793a\u5f53\u524d\u662f\u4e00\u4e2a\u8054\u90a6\u7684\u6a21\u5757\uff0c \u4f1a\u5bfc\u51fa\u5f53\u524d\u7ec4\u4ef6 ",(0,i.kt)("inlineCode",{parentName:"p"},"src/pages/")," \u4e0b\u6240\u6709\u7684\u7ec4\u4ef6\u8fdb\u884c\u5bfc\u51fa\u3002"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f \u5bfc\u51fa\u7684\u5c5e\u6027\u4e0d\u5305\u542b ",(0,i.kt)("inlineCode",{parentName:"p"},"layout"))),(0,i.kt)("h2",{id:"plugins"},"plugins"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"Array<FastpackPlugin>")),(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"[]"))),(0,i.kt)("p",null,"\u6269\u5c55\u7684\u63d2\u4ef6\u4fe1\u606f"))}d.isMDXComponent=!0}}]);