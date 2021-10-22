import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'

export default class FastpackPluginLessLoader {

    private options: any = {}

    constructor(options: any) {
        this.options = options
    }

    after(webpack: any) {
        webpack
            .module
            .rule('fastpack/lessModule')
            .test(/\.mless$/)
            .use('fastpack/cache-loader')
            .loader('cache-loader')
            .end()
            .use('fastpack/miniCssLoader')
            .loader(MiniCssExtractPlugin.loader)
            .end()
            // .use('fastpack/thread-loader')
            // .loader('thread-loader')
            // .end()
            // .use('fastpack/style-loader')
            // .loader('style-loader')
            // .end()
            .use('fastpack/css-loade')
            .loader('css-loader')
            .options({
                modules: true
            })
            .end()
            .use('fastpack/less-loader')
            .loader('less-loader')
            .options(this.options)
            .end()

        webpack
            .module
            .rule('fastpack/less')
            .test(/\.less$/)
            .use('fastpack/cache-loader')
            .loader('cache-loader')
            .end()

            .use('fastpack/miniCssLoader')
            .loader(MiniCssExtractPlugin.loader)
            .end()
            // .use('fastpack/style-loader')
            // .loader('style-loader')
            // .end()
            .use('fastpack/css-loade')
            .loader('css-loader')
            .end()
            .use('fastpack/less-loader')
            .loader('less-loader')
            .options(this.options)
            .end()
        
        webpack.plugin('fastpack/MiniCssExtractPlugin').use(MiniCssExtractPlugin)
        webpack.optimization.minimizer('fastpack/CssMinimizerPlugin').use(CssMinimizerPlugin)
        webpack.optimization.minimize(true)
    }
}