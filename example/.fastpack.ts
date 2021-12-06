import FastpackPluginBabelImport from '@weblif/plugin-babel-import'
import FastpackPluginLessLoader from '@weblif/plugin-less-loader'

export default {
    title: 'test',
    router: {
        paths: [
            '/',
            '/User/Login',
        ],
        notFound: '/components/NotFound',
        loading: '/components/Loading',
        layout: '/layouts'
    },
    devServer: {
        port: 8085
    },
    share: {
        name: 'test',
        frame: 'http://127.0.0.1'
    },
    plugins: [
        new FastpackPluginBabelImport([{"libraryName": "antd", "style": true }]),
        new FastpackPluginLessLoader({
            lessOptions: {
                javascriptEnabled: true,
            }
        }),
    ],
}