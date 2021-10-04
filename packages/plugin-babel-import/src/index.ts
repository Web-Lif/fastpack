
interface Option {
    libraryName?: string
    style?: boolean | 'css' | Function
    [name: string]: any
}

export default class FastpackPluginBabelImport {

    private options: Array<Option> = []

    constructor(options: Array<Option>) {
        this.options = options
    }

    after(webpack: any) {
        const options = this.options || []
        const imports: Array<any> = []

        options.forEach(option => {
            imports.push(['import', option])
        })

        webpack.module
        .rule('fastpack/typescript')
        .use('fastpack/babel-loader')
          .loader('babel-loader')
          .tap((options: any) => {
            return {
                ...options,
                plugins: [
                    ...options.plugins,
                    ...imports
                ]
            }
        })
    }
}