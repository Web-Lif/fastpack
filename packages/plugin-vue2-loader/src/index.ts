import { VueLoaderPlugin } from 'vue-loader'

export default class FastpackPluginVue2Loader {


    constructor() {
    }

    after(webpack: any) {
        webpack
            .module
            .rule('fastpack/vue2Module')
            .test(/\.vue$/)
            .use('fastpack/vue-loader')
            .loader('vue-loader')
            .end()
        
        webpack
            .module
            .rule('fastpack/vue2CSS')
            .test(/\.css$/)
            .use('fastpack/vue-style-loader')
            .loader('vue-style-loader')
            .end()
            .use('fastpack/css-loade')
            .loader('css-loader')
            .end()

        webpack.plugin('fastpack/VueLoaderPlugin').use(VueLoaderPlugin)
    }
}