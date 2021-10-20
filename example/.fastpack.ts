import FastpackPluginBabelImport from '@weblif/plugin-babel-import'


export default {
    title: 'test',
    router: {
        paths: [
            '/',
            '/User/Login',
            '/User/test'
        ],
        notFound: '/components/NotFound',
        loading: '/components/Loading',
        layout: '/layouts'
    },
    plugins: [new FastpackPluginBabelImport([{"libraryName": "antd", "style": 'css'}])],
    share: {
        name: 'testModule'
    },
    devServer: {
        port: 8085
    }
}