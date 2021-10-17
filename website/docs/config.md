---
sidebar_position: 2
title: config 配置
---

Fastpack 默认会读取当前项目中的 `.fastpack.ts` 文件

例如一般项目中的项目结构如下

```sh
├─public
│      1.txt
└─src
|   ├─components
|   │      Loading.tsx
|   │      NotFound.tsx
|   │
|   ├─layouts
|   │      index.tsx
|   │
|   └─pages
|       │  index.tsx
|       │
|       └─User
|           └─Login.tsx
|           └─Logout.tsx
|           └─test.tsx
└─.eslintrc.js
└─.fastpack.ts
└─.gitignore
└─.prettierrc.json
└─babel.config.js
└─jest.config.ts
└─package.json
└─tsconfig.json
```

> 在 `.fastpack.ts` 文件中就是所有的项目配置信息

## alias

- Type: `object`
- Default: `{}`

配置别名，对引用路径进行映射。

例如：

```js
export default {
 alias: {
     foo: '/temp/foo',
 }
};
```
然后 `import('foo')`，实际上是 `import('/tmp/foo')`。

## devServer

- Type: `object`
- Default: `{}`

配置开发服务器

包含以下的配置项

- port 端口号，默认 8000
- host 默认 0.0.0.0
- https 是否启用 https server，同时也会开启 HTTP/2
- writeToDisk 生成 assets 到文件系统

## devtool

- Type: string
- Default: cheap-module-source-map in dev, false in build

用户配置 sourcemap 类型。

常见的可选类型有：

- eval，最快的类型，但不支持低版本浏览器，如果编译慢，可以试试
- source-map，最慢最全的类型

更多类型见 https://webpack.js.org/configuration/devtool/

## define

- Type: `object`
- Default: `{}`

用于提供给代码中可用的变量。

例如：

```js
export default {
  define: {
    VERSION: '0.0.1-canary',
  },
};
```

> 然后你写 console.log(VERSION); 会被编译成 console.log('0.0.1-canary')。注意: `define` 对象的属性值会经过一次 `JSON.stringify` 转换

## copy

- Type: `Array<string | { from:string, to:string }>`
- Default: `{}`

设置要复制到输出目录的文件或文件夹。见 https://www.webpackjs.com/plugins/copy-webpack-plugin/


## router

- Type: `Router`
- Default: `{}`


配置当前项目的路由信息

- router.paths 设置路由信息，这些会被注册成为 `react-router-dom` 的路由信息
- router.notFound 如果没有找到对应的路由信息，则使用此配置项目的文件，这个文件导出的必须是一个 React 组件
- router.loading 默认情况下无加载的动画，如果指定这个信息，表示在加载的时候的时候会采用这个文件导出的组件来展示动画
- router.layout 布局信息，用户可以指定此属性来进行对不同的地址展现不同的布局


## rootRender

- Type: `string`
- Default: `''`

渲染的节点，默认情况下会自动创建一个 div 来进行节点的渲染， 如果指定这个值，就会寻找节点id 为这个值的节点来进行渲染


## publicPath

- Type: `string`
- Default: `'/'`

用于脚本和链接标签的 publicPath 见 https://github.com/jantimon/html-webpack-plugin


## meta

- Type: `{[name: string]: string}`
- Default: `{}`

配置额外的 meta 标签。数组中可以配置key:value形式的对象。

## title

- Type: `string`
- Default: `''`

配置网页标题


## favicon 

- Type: `string`
- Default: `''`

配置 favicon 地址


## share

- Type: `FastPackShare`
- Default: ``


声明此属性, 表示当前是一个联邦的模块， 会导出当前组件 `src/pages/` 下所有的组件进行导出。


> 注意 导出的属性不包含 `layout`


## plugins

- Type: `Array<FastpackPlugin>`
- Default: `[]`

扩展的插件信息
