import MiniCssExtractPlugin from 'mini-css-extract-plugin'
export default class FastpackPluginLessLoader {

    private options: any = {}

    constructor(options: any) {
        this.options = {
            ...(options || {}),
            lessOptions: {
                javascriptEnabled: true,
                ...(options.lessOptions || {})
            }
        }
    }

    after(webpack: any) {
        webpack
            .module
            .rule('fastpack/lessModule')
            .test(/\.module\.less$/)
            .use('fastpack/miniCssLoader')
            .loader(MiniCssExtractPlugin.loader)
            .end()
            .use('fastpack/css-loade')
            .loader(require.resolve('css-loader'))
            .options({
                modules: true
            })
            .end()
            .use('fastpack/less-loader')
            .loader(require.resolve('less-loader'))
            .options(this.options)
            .end()

        webpack
            .module
            .rule('fastpack/less')
            .test(/\.less$/)
            .exclude
            .add(/\.module\.less$/)
            .end()
            .use('fastpack/miniCssLoader')
            .loader(MiniCssExtractPlugin.loader)
            .end()
            .use('fastpack/css-loade')
            .loader(require.resolve('css-loader'))
            .end()
            .use('fastpack/less-loader')
            .loader(require.resolve('less-loader'))
            .options(this.options)
            .end()
    }
}