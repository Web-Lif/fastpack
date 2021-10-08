import FastpackPluginBabelImport from '@weblif/plugin-babel-import'

export default {
    router: {
        paths: [
            '/',
            '/User/Login',
            '/User/test'
        ],
        notFound: '/components/NotFound',
        loading: '/components/Loading'
    },
    title: 'test',
    devServer: {
    },
    plugins: [new FastpackPluginBabelImport([{"libraryName": "antd", "style": 'css'}])]
}