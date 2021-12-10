import FastpackPluginBabelImport from '@weblif/plugin-babel-import'
import FastpackPluginLessLoader from '@weblif/plugin-less-loader'
import FastpackPluginVue2Loader from '@weblif/plugin-vue2-loader'

export default {
    title: 'test',
    router: {
        paths: [
            '/',
            '/User/Login',
            '/test.vue'
        ],
        // notFound: '/components/NotFound',
        // loading: '/components/Loading',
        // layout: '/layouts'
    },
    devServer: {
        port: 8085
    },
    devtool: 'eval-source-map',
    share: {
        name: 'test',
        frame: 'http://127.0.0.1:9080/fastpack.share.js'
    },
    plugins: [
        new FastpackPluginBabelImport([{"libraryName": "antd", "style": true }]),
        new FastpackPluginLessLoader({
            lessOptions: {
                javascriptEnabled: true,
            }
        }),
        new FastpackPluginVue2Loader()
    ],
    // links: [
    //     'test@http://127.0.0.1:8015/fastpack.share.js'
    // ]
}