#!/usr/bin/env node

import Webpack from 'webpack'
import Config from 'webpack-chain'
import WebpackDevServer from 'webpack-dev-server'
import { register } from 'ts-node'

import {
    presetEntry,
    presetLoader,
    presetPlugins,
    presetDev,
    presetBuild
} from './preset/webpack'
import { getFastPackConfig, portIsEffective } from './utils/config'

import { FastpackMode } from './type'


register()

async function start() {
    if (process.argv.length === 3) {
        const status = process.argv[2];
    
        if (status === FastpackMode.DEV) {
    
            const config = new Config()
            const fastpackConfig = getFastPackConfig()
    
            presetEntry(config)
            presetLoader(config)
            presetPlugins(config, fastpackConfig)
            presetDev(config)
    
            const {
                devServer = {},
                ...restConfig
            } = config.toConfig()
            const compiler = Webpack(restConfig);
    
            // 默认可访问地址
            const defaultHost = '127.0.0.1'
            // 默认的端口号
            let defaultPort = 8000
    
            // 如果端口号被占用， 则重新生成端口号
            for(;;) {
                try {
                    // eslint-disable-next-line no-await-in-loop
                    await portIsEffective(defaultPort)
                    break;
                } catch (error) {
                    defaultPort += 1
                }
            }
    
            // 启动开发服务器
            const server = new WebpackDevServer({
                host: defaultHost,
                port: defaultPort,
                ...devServer
            }, compiler);
    
            server.start()
        } else if (status === FastpackMode.BUILD) {
            const config = new Config()
            const fastpackConfig = getFastPackConfig()
    
            presetEntry(config)
            presetLoader(config)
            presetPlugins(config, fastpackConfig)
            presetBuild(config, fastpackConfig)
    
            const compiler = Webpack(config.toConfig());
            // 编译文件
            compiler.run(() => {
            })
        }
    }
}

start()