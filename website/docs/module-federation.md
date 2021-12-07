---
sidebar_position: 4
title: 微前端
---

微前端中 `frame` 我们定义为主框架, `micro` 我们定义为微模块


> 一个项目中只能有一个 `frame`, 多个 `micro`

### 如何配置 frame(主框架)

frame 启动根据

```js {17}
import { getFastpackConfig } from '@weblif/fastpack'

export default getFastpackConfig({
    title: 'test',
    router: {
        paths: [
            '/',
            '/User/Login',
            '/welcome'
        ],
        notFound: '/components/NotFound',
        loading: '/components/Loading',
        layout: '/layouts'
    },
    publicPath: '/ms-template',
    links: [
        'test@http://127.0.0.1:8085/fastpack.share.js'
    ]
})
```

> links 表示连接到的微模块, [模块名称]@[模块地址], 在开发，或者测试环境下, 建议设置环境变量 `MainFrame=true`, 在生产环境的时候不建议使用
 `MainFrame` 的环境变量，表示吧 `frame` 共享给其他的微模块进行调试 

### 如何配置 micro(微模块)

例如配置如下

```js {14,15}
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
    share: {
        name: 'testModule',
        frame: 'http://127.0.0.1:9080/fastpack.share.js'
    },
    devServer: {
        port: 8085
    }
}
```

> 其中 `share.name` 表示当前微前端的模块名称，需要保证全局唯一, `share.frame` 表示加载的主框架地址, 这样在调试,开发,测试的时候可以访问完整的系统

