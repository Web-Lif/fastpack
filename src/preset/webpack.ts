import Config from 'webpack-chain'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

import { DefinePlugin } from 'webpack'
import { join } from 'path'
import { FastPackConfig } from '../type'

// eslint-disable-next-line import/prefer-default-export
export function presetEntry (config: Config) {

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
        .include
        .add('src')
        .end()
        .use('fastpack/ts-loader')
        .loader('ts-loader')
        .end()
}


export function presetPlugins(config: Config,  {
    define = {},
    copy = []
}: FastPackConfig) {
    
    // see https://www.webpackjs.com/plugins/define-plugin/
    config.plugin('fastpack/DefinePlugin').use(DefinePlugin, [define])

    // see https://www.webpackjs.com/plugins/copy-webpack-plugin/
    config.plugin('fastpack/CopyWebpackPlugin').use(CopyWebpackPlugin, [{
        patterns: [
            { from: 'public' },
            ...copy
        ]
    }])

    // see https://www.webpackjs.com/plugins/html-webpack-plugin/
    config.plugin('fastpack/HtmlWebpackPlugin').use(HtmlWebpackPlugin, [{
        template: join(process.cwd(), 'src', 'pages', 'document.ejs')
    }])

}

export function presetDev(config: Config) {
    config.mode('development');
}

export function presetBuild(config: Config) {
    config.mode('production')
}