

export default class FastpackPluginLessLoader {

    private options: any = {}

    constructor(options: any) {
        this.options = options
    }

    after(webpack: any) {
        webpack
            .module
            .rule('fastpack/less')
            .test(/\.less$/)
            .use('fastpack/style-loader')
            .loader('style-loader')
            .end()
            .use('fastpack/css-loade')
            .loader('css-loader')
            .end()
            .use('fastpack/less-loader')
            .loader('less-loader')
            .options(this.options)
            .end()
    }
}