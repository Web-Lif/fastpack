import { compile } from 'handlebars'
import { readFile, writeFile, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import { join, sep } from 'path'
import { FastPackConfig } from '../type'


export interface Router {
    /** 组件名称，内部使用 */
    name: string
    /** 访问的路径 */
    path: string
    /** 组件的文件信息, 内部使用 */
    component: string
}


// eslint-disable-next-line import/prefer-default-export
export async function createBootstrap (config: FastPackConfig) {
    const {
        router,
        rootRender,
        plugins = []
    } =  config
    const fastpackFolder = join(process.cwd(), 'src', '.fastpack')
    if (!existsSync(fastpackFolder)) {
        await mkdir(fastpackFolder)
    }

    const fileContent = await readFile(join(__dirname, '..', '..', 'template', 'bootstrap.tsx'), 'utf8')
    const template = compile(fileContent)

    const routers: Router[] = []

    router?.paths?.forEach(path => {
        if (path === '/') {
            routers.push({
                name: '_Index',
                component: '',
                path: '/'
            })
        } else {
            routers.push({
                name: path.split(sep).join('_'),
                path,
                component: path
            })
        }
    })

    let content = template({
        routers,
        rootRender,
        notFound: router.notFound,
        loading: router.loading
    })

    plugins.forEach(plugin => {
        const txt = plugin.onCreateFile?.(config, fileContent)
        if (txt) {
            content = txt
        }
    })

    const bootstrapPath = join(process.cwd(), 'src', '.fastpack', 'bootstrap.tsx')

    const targetContent = await readFile(bootstrapPath, 'utf8')

    // 如果内容相同， 则不用覆盖文件
    if (content !== targetContent) {
        await writeFile(bootstrapPath, content)
    }
}