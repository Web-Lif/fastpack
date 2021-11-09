---
sidebar_position: 3
title: 环境变量
---

在项目中，会预设一些环境变量来作为启动的一些额外功能

设置环境变量的方式一般如下

```bash
# OS X, Linux
$ PORT=3000 fastpack dev

# Windows (cmd.exe)
$ set PORT=3000 && fastpack dev
```

如果要同时考虑兼容 OS X 和 Windows，可借助三方工具 [cross-env](https://github.com/kentcdodds/cross-env)，

## Analyzer

- Type: `boolean`
- Default: `false`

是否开启分析构建的包体积大小

## ReactRefresh

- Type: `boolean`
- Default: `true`

是否开启 ReactRefresh 快速刷新, 如有问题，可以使用此环境变量关闭 `ReactRefresh`

## SpeedMeasure

- Type: `'json'|'human'|'humanVerbose'`
- Default: `''`

用来开启 [speed-measure-webpack-plugin](https://github.com/stephencookdev/speed-measure-webpack-plugin#readme) 插件，来检查当期 webpack 构建速度的时间

- `json` 表示输入 JSON 格式的信息
- `human` 表示在控制台生成可读的信息
- `humanVerbose` 表示生成更加详细的可读信息

