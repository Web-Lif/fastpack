import Config from 'webpack-chain'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import WebpackBar from 'webpackbar'
import { existsSync } from 'fs'
import { DefinePlugin } from 'webpack'
import { join } from 'path'

import { FastPackConfig } from '../type'

// eslint-disable-next-line import/prefer-default-export
export function presetEntry (config: Config, {
    alias = new Map<string, string>()
} : FastPackConfig) {
    const entry = join(process.cwd(), 'src', '.fastpack', 'bootstrap.tsx');
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
        .set('react', join(process.cwd(), 'node_modules', 'react'))
        .set('react-dom', join(process.cwd(), 'node_modules', 'react-dom'))
        .set('react-router-dom', join(process.cwd(), 'node_modules', 'react-router-dom'))
    
    alias.forEach((key, value) => {
        aliasConfig.set(key, value)
    })
    aliasConfig.end()
}

export function presetLoader(config: Config) {

    // 添加 typescript 的 loader
    config
        .module
        .rule('fastpack/typescript')
        .test(/\.tsx?$/)
        .use('fastpack/ts-loader')
        .loader('ts-loader')
        .end()
    
    // see https://www.webpackjs.com/loaders/worker-loader/
    config
        .module
        .rule('fastpack/worker')
        .test(/\.worker\.ts$/)
        .use('fastpack/worker-loader')
        .loader('worker-loader')
        .end()
}


export function presetPlugins(config: Config,  {
    define = {},
}: FastPackConfig) {
    
    // see https://www.webpackjs.com/plugins/define-plugin/
    config.plugin('fastpack/DefinePlugin').use(DefinePlugin, [define])

    const htmlWebpackPluginOptions: HtmlWebpackPlugin.Options = {
    }

    const document = join(process.cwd(), 'src', 'pages', 'document.ejs')
    if (existsSync(document)) {
        htmlWebpackPluginOptions.template = document
    }
    htmlWebpackPluginOptions.publicPath = '/'

    // see https://www.webpackjs.com/plugins/html-webpack-plugin/
    config.plugin('fastpack/HtmlWebpackPlugin').use(HtmlWebpackPlugin, [htmlWebpackPluginOptions])

    config.stats('errors-only')
    config.plugin('fastpack/WebpackBar').use(WebpackBar, [{
        name: 'fastpack'
    }])

}

export function presetDev(config: Config, {
    devtool = 'cheap-module-source-map'
}: FastPackConfig) {
    config.mode('development');
    config.devtool(devtool)
}

export function presetBuild(config: Config, {
    copy = []
}: FastPackConfig) {
    config.mode('production')
    
    // see https://www.webpackjs.com/plugins/copy-webpack-plugin/
    config.plugin('fastpack/CopyWebpackPlugin').use(CopyWebpackPlugin, [{
        patterns: [
            { from: 'public' },
            ...copy
        ]
    }])
}