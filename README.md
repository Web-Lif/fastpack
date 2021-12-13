<h1 align="center">fastpack 构建</h1>

<div align="center">
    基于 webpack 中的 react 前端框架, 原生支持 微前端技术架构, 努力解决大型项目中, 开发/部署, 以及模块管理和性能的问题.
</div>


## 特性

- 🎉 **可扩展** 基于 webpack 强大的扩展机制，可任意编辑插件进行扩展 webpack 的功能
- 📦 **开箱即用** 内置了路由、构建、部署、仅需一个依赖即可上手开发。并且还提供针对 React 的集成插件集，内涵丰富的功能，
- 🌴 **完备路由** 配置路由，严格路由的生成保证前端的首次渲染效率
- 🚄 **面向未来**，在满足需求的同时，我们也不会停止对新技术的探索

> fastpack 主要是为了构建 React 应用，但是用户可以可以通过 `@weblif/plugin-vue2-loader` 插件让其对能够对其他 `vue2` 或者可以通过自定义插件对其他的框架进行支持

## 插件

| 插件名称                    | 版本号                                                            | 描述
|------                      |----                                                              |-----------
|@weblif/plugin-babel-import | ![](https://img.shields.io/npm/v/@weblif/plugin-babel-import)    | 按需加载
|@weblif/plugin-less-loader  | ![](https://img.shields.io/npm/v/@weblif/plugin-less-loader)     | less 样式文件解析支持
|@weblif/plugin-vue2-loader  | ![](https://img.shields.io/npm/v/@weblif/plugin-vue2-loader)     | 添加对 vue2 的支持 

## 生态

| 名称                                                  | 描述
|-------                                               |-----------
|[ms-template](https://github.com/Web-Lif/ms-template) | 后端Admin管理模板


## 社区支持

- issues 在此提交 [https://github.com/Web-Lif/fastpack/issues](https://github.com/Web-Lif/fastpack/issues) 获取社区支持
- discussions 在此提交讨论/新的想法/创意 [https://github.com/Web-Lif/fastpack/discussions](https://github.com/Web-Lif/fastpack/discussions) 



## LICENSE

[MIT](./LICENSE)
