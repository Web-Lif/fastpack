import Handlebars from 'handlebars'
import { readFile, writeFile, mkdir, rmdir } from 'fs/promises'
import { existsSync } from 'fs'
import { join } from 'path'
import { FastPackConfig, FastpackMode } from '../type'

export interface Router {
    /** 组件名称，内部使用 */
    name: string

    /** 访问的路径 */
    path: string
    /** 组件的文件信息, 内部使用 */
    component: string
}

interface HandlebarsTemplateParam {
    // 基础路径名
    basename?: string
    /** 主框架地址 */
    frame?: string
    /** 子模块地址 */
    links?: {name: string, link: string}[]
    /** 路由信息 */
    router: {
        // 路由信息
        paths: {
            react?: Router[]
            vue?: Router[]
        },
        // 路由类型
        type?: string
        // 主框架布局信息
        layout?: string
        // 未找到路由的页面
        notFound?: string
        // loading 状态
        loading?: string
    }
    /** root 渲染模式 */
    rootRender?: string
    /** 是否有启动文件 */
    isHaveStartupFile: boolean
}

export async function createHandlebarsFile (config: FastPackConfig, status: FastpackMode, templatePath: string, targetPath: string) {
    const {
        router,
        rootRender,
        plugins = []
    } =  config
    
    const fileContent = await readFile(join(__dirname, '..', '..', 'template', templatePath), 'utf8')
    
    const routers: Router[] = []
    const vueRouters:  Router[] = []

    router?.paths?.forEach(path => {
        let name = ''
        if (config.share?.name) {
            name = `/${config.share?.name}`
        }
        if (path === '/') {
            routers.push({
                name: '$Index',
                component: '',
                path: `${name}/`
            })
        } else {
            const pathSplit = path.split(':')
            const pathtemp = pathSplit.pop()!
            const data = {
                name: pathtemp.replace(/\//g, '').replace(/\./g, '$$'),
                path: `${name}${path}`,
                component: pathtemp
            }
            if (/\.vue$/.test(path)) {
                vueRouters.push(data)
            } else {
                routers.push(data)
            }
        }
    })

    
    let basename = '/';

    if (status === FastpackMode.BUILD) {
        basename = config.publicPath || '/'
    }

    const template = Handlebars.compile(fileContent)
    const history = config?.history || { type: 'browser'}
    let routerType = ''
    if (history.type === 'browser') {
        routerType = 'BrowserRouter'
    } else if (history.type === 'hash') {
        routerType = 'HashRouter'
    } else if (history.type === 'memory') {
        routerType = 'MemoryRouter'
    }

    const newRouters =routers.filter(rt =>  !router?.exclude?.(rt.path))

    let isHaveStartupFile = false
    if (['router.micro.tsx.handlebars', 'frame.tsx.handlebars'].includes(templatePath)) {
        isHaveStartupFile = existsSync(join(process.cwd(), 'src', 'startup.ts'))
    }

    const templateParam: HandlebarsTemplateParam = {
        basename,
        rootRender,
        router: {
            type: routerType,
            paths: {
                vue: vueRouters,
                react: newRouters.map(rt => ({
                    ...rt,
                    path: rt.path,
                    relativePath: rt.path.substring(1),
                    index: rt.path === '/'
                })),
            },
            notFound: router.notFound,
            loading: router.loading,
            layout: router.layout,
        },
        frame: config?.share?.frame,
        links: config?.links?.map(link => ({
            name: link.split('@')[0],
            link: link
        })),
        isHaveStartupFile
    }
    let content = template(
        templateParam
    //     {
    //     routers: newRouters.map(rt => ({
    //         ...rt,
    //         path: rt.path,
    //         relativePath: rt.path.substring(1),
    //         index: rt.path === '/'
    //     })),
    //     vues: vueRouters,
    //     rootRender,
    //     notFound: router.notFound,
    //     loading: router.loading,
    //     layout: router.layout,
    //     basename,
    //     startup: existsSync(join(process.cwd(), 'src', 'startup.ts')),
    //     frame: config?.share?.frame,
    //     links: 
    //     routerName,
    // }
    )

    plugins.forEach(plugin => {
        const txt = plugin.onCreateFile?.(config, fileContent)
        if (txt) {
            content = txt
        }
    })

    const bootstrapPath = join(process.cwd(), 'src', '.fastpack', targetPath)

    // 如果不存在文件，则创建对应的文件信息
    if (!existsSync(bootstrapPath)) {
        await writeFile(bootstrapPath, content)
        return
    }

    const targetContent = await readFile(bootstrapPath, 'utf8')

    // 如果内容相同， 则不用覆盖文件
    if (content !== targetContent) {
        await writeFile(bootstrapPath, content)
    }
}

export async function createBootstrap (config: FastPackConfig, status: FastpackMode) {
    const fastpackFolder = join(process.cwd(), 'src', '.fastpack')

    if (existsSync(fastpackFolder)) {
        await rmdir(fastpackFolder, {
            recursive: true
        })
    }
    await mkdir(fastpackFolder)

    const indexContent = await readFile(join(__dirname, '..', '..', 'template', 'index.ts'), 'utf8')
    await writeFile(join(process.cwd(), 'src', '.fastpack', 'index.ts'), indexContent)
    
    if (config.share?.frame) {
        await createHandlebarsFile(config, status, 'router.micro.tsx.handlebars', 'router.tsx')
    } else {
        await createHandlebarsFile(config, status, 'frame.tsx.handlebars', 'frame.tsx')
    }
    await createHandlebarsFile(config, status, 'render.tsx.handlebars', 'render.tsx')
  
}