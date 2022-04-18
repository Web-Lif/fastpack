import Config from 'webpack-chain'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import TerserPlugin from 'terser-webpack-plugin'
import WebpackBar from 'webpackbar'
import { existsSync, readdirSync } from 'fs'
import { DefinePlugin, ProvidePlugin, container } from 'webpack'
import { join } from 'path'

import { FastPackConfig, FastpackMode } from '../type'

const react = require.resolve('react')
const reactDOM = require.resolve('react-dom')
const reactDOMClient = require.resolve('react-dom/client')
const reactRouterDOM = require.resolve('react-router-dom')

const { ModuleFederationPlugin } = container

// eslint-disable-next-line import/prefer-default-export
export function presetEntry(config: Config, {
    alias = {},
    externals = {}
}: FastPackConfig) {
    const entry = join(process.cwd(), 'src', '.fastpack', 'index.ts');
    config.entry('fastpack').add(entry).end();
    config.output
        .filename('[name].bundle.js');

    config.resolve.extensions
        .add('.wasm')
        .add('.tsx')
        .add('.ts')
        .add('.mjs')
        .add('.cjs')
        .add('.js')
        .add('.json')
        .end();

    // see https://github.com/facebook/react/issues/2402
    // see https://github.com/facebook/react/issues/13991#issuecomment-435587809
    const aliasConfig = config.resolve.alias
        .set('react', react)
        .set('react-dom/client', reactDOMClient)
        .set('react-dom', reactDOM)
        .set('react-router-dom', reactRouterDOM)
        .set('@', join(process.cwd(), 'src', ''))

    config.externals(externals)

    Object.keys(alias).forEach((key: string) => {
        aliasConfig.set(key, alias[key])
    })

    aliasConfig.end()
}

export function presetLoader(config: Config) {

    // 添加 typescript 的 loader
    config
        .module
        .rule('fastpack/typescript')
        .test(/\.(t|j)sx?$/)
        .exclude
        .add(/node_modules/)
        .end()
        .use('fastpack/swc-loader-cache')
        .loader('cache-loader')
        .end()
        .use('fastpack/swc-loader')
        .loader('swc-loader')
        .options({
            jsc: {
                parser: {
                    syntax: "typescript"
                }
            }
        })
        .end()
      

    // see https://www.webpackjs.com/loaders/worker-loader/
    config
        .module
        .rule('fastpack/worker')
        .test(/\.worker\.ts$/)
        .exclude
        .add(/node_modules/)
        .end()
        .use('fastpack/worker-loader')
        .loader('worker-loader')
        .end()

    // see https://www.webpackjs.com/loaders/css-loader/
    config
        .module
        .rule('fastpack/css')
        .test(/\.css$/)
        .exclude
        .add(/\.vue\.css$/)
        .end()
        .use('fastpack/swc-loader-cache')
        .loader('cache-loader')
        .end()
        .use('fastpack/MiniCssExtractPlugin')
        .loader(MiniCssExtractPlugin.loader)
        .end()
        .use('fastpack/css-loade')
        .loader('css-loader')
        .end()
}


export function presetPlugins(config: Config, {
    define = {},
    publicPath = '/',
    meta = {},
    title = 'fastpack',
    favicon,
    share,
    links,
    copy = []
}: FastPackConfig, status: FastpackMode) {

    // see https://www.webpackjs.com/plugins/define-plugin/
    config.plugin('fastpack/DefinePlugin').use(DefinePlugin, [define])

    const htmlWebpackPluginOptions: HtmlWebpackPlugin.Options = {
    }

    const document = join(process.cwd(), 'src', 'pages', 'document.ejs')
    if (existsSync(document)) {
        htmlWebpackPluginOptions.template = document
    }

    htmlWebpackPluginOptions.title = title

    if (status === FastpackMode.BUILD) {
        htmlWebpackPluginOptions.publicPath = publicPath 
    }
    if (status === FastpackMode.DEV){
        htmlWebpackPluginOptions.publicPath = '/'
    }
    htmlWebpackPluginOptions.meta = meta
    if (favicon) {
        htmlWebpackPluginOptions.favicon = favicon
    }

    // see https://www.webpackjs.com/plugins/html-webpack-plugin/
    config.plugin('fastpack/HtmlWebpackPlugin').use(HtmlWebpackPlugin, [htmlWebpackPluginOptions])

    config.plugin('fastpack/MiniCssExtractPlugin').use(MiniCssExtractPlugin, [{
        linkType: false,
        filename: '[name].[contenthash].css',
        chunkFilename: '[id].[contenthash].css'
    }])

    // see https://webpack.js.org/plugins/module-federation-plugin/
    if (share) {
        let remotes
        if (share.frame) {
            remotes = {
                'fastpack_micro': `fastpack_micro@${share.frame}`
            }
        }

        config.plugin('fastpack/ModuleFederationPlugin').use(ModuleFederationPlugin, [{
            name: `fastpack_link_${share.name}`,
            filename: 'fastpack.share.js',
            exposes: {
                './share': './src/.fastpack/router.tsx'
            },
            remotes,
            shared: {
                react: {
                    singleton: true
                },
                'react-dom': {
                    singleton: true
                }
            },
        }])
    } else if (process.env.MainFrame) {
        let remotes: any;
        if (links) {
            remotes = {}
            links.forEach(link => {
                const splits = link.split('@')
                if (splits.length === 2) {
                    remotes[`fastpack_link_${splits[0]}`] = `fastpack_link_${splits[0]}@${splits[1]}`
                }
            })
        }

        const exposes = {
            './frame': './src/.fastpack/frame.tsx'
        };

        config.plugin('fastpack/ModuleFederationPlugin').use(ModuleFederationPlugin, [{
            name: 'fastpack_micro',
            filename: 'fastpack.share.js',
            exposes,
            remotes,
            shared: {
                react: { singleton: true, eager: true, requiredVersion: '^18.0.0'},
                'react-dom': { singleton: true, eager: true, requiredVersion: '^18.0.0' }
            },
        }])
    }

    config.plugin('fastpack/WebpackBar').use(WebpackBar, [{
        name: 'fastpack'
    }])

    // 修复 webpack 5 中 `Buffer is not defined`
    config.plugin('fastpack/ProvidePlugin').use(ProvidePlugin, [{
        Buffer: ['buffer', 'Buffer'],
    }])

    const publicCopy = join(process.cwd(), 'public')

    const patterns = [...copy]
    if (existsSync(publicCopy) && readdirSync(publicCopy).length > 0) {
        patterns.push({ from: 'public' })
    }

    if (patterns.length > 0) {
        // see https://www.webpackjs.com/plugins/copy-webpack-plugin/
        config.plugin('fastpack/CopyWebpackPlugin').use(CopyWebpackPlugin, [{
            patterns
        }])
    }
}

export function presetDev(config: Config, {
    devtool = 'eval-cheap-module-source-map'
}: FastPackConfig) {
    config.mode('development')
    config.devtool(devtool as any)

    // see https://webpack.js.org/configuration/cache/
    config.cache({
        type: 'filesystem',
        hashAlgorithm: 'sha1',
    })

    // 设置环境变量关闭 ReactRefresh
    if (process.env.ReactRefresh !== 'false') {
        config.module
            .rule('fastpack/typescript')
            .use('fastpack/swc-loader')
            .loader('swc-loader')
            .tap((options: any) => (
                {
                    jsc: {
                        ...options.jsc,
                        transform: {
                            react: {
                                development: true,
                                refresh: true,
                            },
                        },
                    },
                }
            ))
        // see https://github.com/pmmmwh/react-refresh-webpack-plugin
        config.plugin('fastpack/ReactRefresh').use(ReactRefreshWebpackPlugin)
    }
    config.stats('errors-only')
}

// eslint-disable-next-line no-empty-pattern
export function presetBuild(config: Config, {
}: FastPackConfig) {
    config.mode('production')
    config.devtool(false)
    config.optimization.splitChunks({
        chunks: 'async',
        maxSize: 524288,
        minSize: 262144,
        minRemainingSize: 0,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        enforceSizeThreshold: 50000,
        cacheGroups: {
            defaultVendors: {
                test: /[\\/]node_modules[\\/]/,
                priority: -10,
                reuseExistingChunk: true,
            },
            default: {
                minChunks: 2,
                priority: -20,
                reuseExistingChunk: true,
            },
        },
    })
    config.optimization.usedExports(true)
    config.performance.maxAssetSize(2048000)
    config.performance.maxEntrypointSize(2048000)
    if (process.env.Analyzer) {
        config.plugin('fastpack/BundleAnalyzerPlugin').use(BundleAnalyzerPlugin)
    }
    config.optimization.minimizer('fastpack/TerserPlugin').use(TerserPlugin)
    config.optimization.minimize(true)
}