---
sidebar_position: 4
title: 模块联邦
---

FastPack 的模块联邦在设置 `share` 属性就表示此模块是一个联邦模块.


例如配置如下

```js {17}
import FastpackPluginBabelImport from '@weblif/plugin-babel-import'

export default {
    title: 'test',
    router: {
        paths: [
            '/',
            '/User/Login',
            '/User/test'
        ],
        notFound: '/components/NotFound',
        loading: '/components/Loading',
        layout: '/layouts'
    },
    plugins: [new FastpackPluginBabelImport([{"libraryName": "antd", "style": 'css'}])],
    share: {
        name: 'testModule'
    },
    devServer: {
        port: 8085
    }
}
```

> 其中 `share.name` 表示联邦模块的名称


在联邦模块中， 我们有一下三个点

- url 子模块的地址，此地址需要支持跨域请求
- module 导出的模块信息
- scope 也就是当期模块的名称，唯一标识 也就是配置文件中的 `share.name` 属性

## 跨域请求

我们需要在 `.fastpack.ts` 中设置跨域名请求信息,  如果是在生产环境中，则不需要进行跨域的设置.


```js {5-7}
{
    devServer: {
        ...
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
    }
}
```

> 如果是在生产环境中则不需要跨域，跨域只要是用于开发中的热更新