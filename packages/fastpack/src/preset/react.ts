import Handlebars from 'handlebars'
import { readFile, writeFile, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import { join } from 'path'
import { FastPackConfig, FastpackMode } from '../type'
import { getFastPackConfig } from '../utils/config'

export interface Router {
    /** 组件名称，内部使用 */
    name: string
    /** 访问的路径 */
    path: string
    /** 组件的文件信息, 内部使用 */
    component: string
}

Handlebars.registerHelper('eachRouters', (context, options) => {
    let ret = "";
    const { router } = getFastPackConfig()
    context.forEach((element: any) => {
        const { path } = element
        
        if (router?.exclude?.(path)) {
            return
        }
        ret += options.fn(element);
    })
    return ret;
})

export async function createBootstrap (config: FastPackConfig, status: FastpackMode) {
    const {
        router,
        rootRender,
        plugins = []
    } =  config
    const fastpackFolder = join(process.cwd(), 'src', '.fastpack')
    if (!existsSync(fastpackFolder)) {
        await mkdir(fastpackFolder)
    }

    const templatePath = config.share?.frame ? 'bootstrap.micro.tsx.handlebars' : 'bootstrap.tsx.handlebars'
    const fileContent = await readFile(join(__dirname, '..', '..', 'template', templatePath), 'utf8')
    const indexContent = await readFile(join(__dirname, '..', '..', 'template', 'index.ts'), 'utf8')
    await writeFile(join(process.cwd(), 'src', '.fastpack', 'index.ts'), indexContent)
    
    const template = Handlebars.compile(fileContent)
    const routers: Router[] = []

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
            routers.push({
                name: pathtemp.replace(/\//g, ''),
                path: `${name}${path}`,
                component: pathtemp
            })
        }
    })

    
    let basename = '/';

    if (status === FastpackMode.BUILD) {
        basename = config.publicPath || '/'
    }

    let content = template({
        routers,
        rootRender,
        notFound: router.notFound,
        loading: router.loading,
        layout: router.layout,
        basename,
        frame: config.share?.frame
    })

    plugins.forEach(plugin => {
        const txt = plugin.onCreateFile?.(config, fileContent)
        if (txt) {
            content = txt
        }
    })

    const bootstrapPath = join(process.cwd(), 'src', '.fastpack', 'bootstrap.tsx')

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