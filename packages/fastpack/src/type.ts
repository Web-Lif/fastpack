import Config, { DevTool } from 'webpack-chain'

export enum FastpackMode {
    DEV = 'dev',
    BUILD = 'build'
}

interface Router {
    /** 路由信息 */
    paths: string[]

    /** 配置未找到路由信息的时候，会显示的页面 */
    notFound?: string

    /** 加载路由的动画信息 */
    loading?: string

    /** 路由的布局信息 */
    layout?: string
}

interface DevServer {
    [name: string]: string
}

export interface FastpackPlugin {
    /**
     *  创建文件的时候触发的事件
     */
    onCreateFile?: (config: FastPackConfig, source: string) => string

    /**
     * 在数据初始化之前
     */
    before?: (webpack: Config, fastpack: FastPackConfig) => void

    /**
     * 在数据初始之后
     */
    after?: (webpack: Config, fastpack: FastPackConfig) => void
}

interface FastPackShare {
    name: string
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
    alias?: { [name: string]: string }

    /**
     * 设置哪些模块可以不被打包，通过 <script> 或其他方式引入，通常需要和 scripts 或 headScripts 配置同时使用。
     * 
     * see https://webpack.js.org/configuration/externals/#string
     */
    externals?: { [name: string]: string }

    /**
     * 配置开发服务器。 see https://webpack.js.org/configuration/dev-server/
     */
    devServer?: DevServer

    /**
     * Choose a style of source mapping to enhance the debugging process. These values can affect build and rebuild speed dramatically.
     * see https://webpack.js.org/configuration/devtool/
     */
    devtool?: DevTool

    /**
     * 用于提供给代码中可用的变量。
     */
    define?: Record<string, any>

    /**
     * 设置要复制到输出目录的文件或文件夹。 see https://www.webpackjs.com/plugins/copy-webpack-plugin/
     */
    copy?: Array<string | { from:string, to:string }>

    /**
     * 路由信息, 路径为 `pages` 下的文件
     */
    router: Router

    /**
     * 渲染的节点，默认情况下会自动创建一个 div 来进行节点的渲染， 如果指定这个值，就会寻找节点id 为这个值的节点来进行渲染
     */
    rootRender?: string

    /**
     * 插件的扩展点
     */
    plugins?: Array<FastpackPlugin>

    /**
     * The publicPath used for script and link tags see https://github.com/jantimon/html-webpack-plugin
     */
    publicPath?: string

    /**
     * 配置额外的 meta 标签。数组中可以配置key:value形式的对象。
     */
    meta?: {[name: string]: string}

    /**
     * 配置网页标题
     */
    title?: string

    /**
     * 配置 favicon 地址 (href 属性)
     */
    favicon?: string

    /**
     * 将路由分享给其他用户
     */
    share?: FastPackShare
} 




