export enum FastpackMode {
    DEV = 'dev',
    BUILD = 'build'
}

interface DevServer {
    [name: string]: string
}

export interface FastPackConfig {
    /**
     * 配置别名，对引用路径进行映射。
     * 
     * 例如：
     * 
     * ```
     * export default {
     *  alias: {
     *      foo: '/temp/foo',
     *  }
     * };
     * ```
     * 然后 `import('foo')`，实际上是 `import('/tmp/foo')`。
     * 
     *  - `@` 项目 src 目录
     *  - `react` 和 `react-dom` 使用项目中依赖的版本
     */
    alias?: Map<string, string>

    /**
     * 配置开发服务器。 see https://webpack.js.org/configuration/dev-server/
     */
    devServer?: DevServer

    /**
     * Choose a style of source mapping to enhance the debugging process. These values can affect build and rebuild speed dramatically.
     * see https://webpack.js.org/configuration/devtool/
     */
    devtool?: string | boolean

    /**
     * 用于提供给代码中可用的变量。
     */
    define?: Record<string, any>

    /**
     * 设置要复制到输出目录的文件或文件夹。 see https://www.webpackjs.com/plugins/copy-webpack-plugin/
     * 
     */
    copy: Array<string | { from:string, to:string }>
} 

