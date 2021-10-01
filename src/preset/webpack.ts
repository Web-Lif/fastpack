import Config from 'webpack-chain'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { existsSync } from 'fs'
import { DefinePlugin } from 'webpack'
import { join } from 'path'

import { FastPackConfig } from '../type'

// eslint-disable-next-line import/prefer-default-export
export function presetEntry (config: Config) {
    const entry = join(process.cwd(), 'src', 'app.tsx');
    config.entry('fastpack').add(entry).end();
    config.output
        .filename('[name].bundle.js');
    // see https://github.com/facebook/react/issues/2402
    // see https://github.com/facebook/react/issues/13991#issuecomment-435587809
    config.resolve.alias
        .set('react', join(process.cwd(), 'node_modules', 'react'))
        .set('react-dom', join(process.cwd(), 'node_modules', 'react-dom'))
        .end()
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
}


export function presetPlugins(config: Config,  {
    define = {},
}: FastPackConfig) {
    
    // see https://www.webpackjs.com/plugins/define-plugin/
    config.plugin('fastpack/DefinePlugin').use(DefinePlugin, [define])
}

export function presetDev(config: Config) {
    config.mode('development');

    const htmlWebpackPluginParam: HtmlWebpackPlugin.Options = {}

    const document = join(process.cwd(), 'src', 'pages', 'document.ejs')
    if (existsSync(document)) {
        htmlWebpackPluginParam.template = document
    }

    // see https://www.webpackjs.com/plugins/html-webpack-plugin/
    config.plugin('fastpack/HtmlWebpackPlugin').use(HtmlWebpackPlugin, [htmlWebpackPluginParam])
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