import Webpack from 'webpack'
import Config from 'webpack-chain'
import WebpackDevServer from 'webpack-dev-server'
import { watch, rmSync } from 'fs'
import { join } from 'path'
import SpeedMeasurePlugin from 'speed-measure-webpack-plugin'

import {
    presetEntry,
    presetLoader,
    presetPlugins,
    presetDev,
    presetBuild
} from './preset/webpack'
import { createBootstrap } from './preset/react'

import { getFastPackConfig } from './utils/config'
import { FastpackMode } from './type'


// 在启动之前执行的操作
async function onBeforeStart() {
    const fastpack = join(process.cwd())
    watch(fastpack, ( event, filename) => {
        if (event === 'change' && filename === '.fastpack.ts') {
            createBootstrap(getFastPackConfig())
        }
    })
    // 创建启动文件
    await createBootstrap(getFastPackConfig())
}


export default async function start() {
    if (process.argv.length === 3) {
        const fastpackConfig = getFastPackConfig()

        const status = process.argv[2];
        
        if (status === FastpackMode.DEV) {
            
            const config = new Config()
            
            fastpackConfig.plugins?.forEach(plugin => {
                plugin.before?.(config, fastpackConfig)
            })
            await onBeforeStart()

            presetEntry(config, fastpackConfig)
            presetLoader(config)
            presetPlugins(config, fastpackConfig)
            presetDev(config, fastpackConfig)
    
            fastpackConfig.plugins?.forEach(plugin => {
                plugin.after?.(config, fastpackConfig)
            })

            
            let webpackConfig = config.toConfig()
            if (
                process.env.SpeedMeasure && (
                    process.env.SpeedMeasure === 'json' || 
                    process.env.SpeedMeasure === 'human' || 
                    process.env.SpeedMeasure === 'humanVerbose'  
                )) {
                const smp = new SpeedMeasurePlugin({
                    outputFormat: process.env.SpeedMeasure
                });
                webpackConfig = smp.wrap(webpackConfig)
            }

            const compiler = Webpack(webpackConfig);
    
            // 默认可访问地址
            const defaultHost = '127.0.0.1'
            // 默认的端口号
            const defaultPort = 8000

            const {
                devServer = {}
            } = fastpackConfig
            // 启动开发服务器
            const server = new WebpackDevServer({
                host: defaultHost,
                port: defaultPort,
                historyApiFallback: true,
                ...devServer
            }, compiler);
    
            server.startCallback(() => {
            })
        } else if (status === FastpackMode.BUILD) {
            rmSync(join(process.cwd(), 'dist'), { recursive: true, force: true })

            const config = new Config()

            fastpackConfig.plugins?.forEach(plugin => {
                plugin.before?.(config, fastpackConfig)
            })
            
            await createBootstrap(getFastPackConfig())

            presetEntry(config, fastpackConfig)
            presetLoader(config)
            presetPlugins(config, fastpackConfig)
            presetBuild(config, fastpackConfig)
    
            fastpackConfig.plugins?.forEach(plugin => {
                plugin.after?.(config, fastpackConfig)
            })

            let webpackConfig = config.toConfig()
            if (
                process.env.SpeedMeasure && (
                    process.env.SpeedMeasure === 'json' || 
                    process.env.SpeedMeasure === 'human' || 
                    process.env.SpeedMeasure === 'humanVerbose'  
                )) {
                const smp = new SpeedMeasurePlugin({
                    outputFormat: process.env.SpeedMeasure
                });
                webpackConfig = smp.wrap(webpackConfig)
            }

            const compiler = Webpack(webpackConfig);
            // 编译文件
            compiler.run((error, result) => {
                if (result && (result.hasErrors || result.hasWarnings)) {
                    console.log(result.toString({
                        colors: true,
                        modules: false,
                        chunks : false
                    }))
                }
            })
        }
    }
}