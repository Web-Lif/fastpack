import { compile } from 'handlebars'
import { readFile, writeFile, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import { join, sep } from 'path'
import { FastPackConfig } from '../type'

// eslint-disable-next-line import/prefer-default-export
export async function createBootstrap ({
    routers = [],
    rootRender
}: FastPackConfig) {
    const fastpackFolder = join(process.cwd(), 'src', '.fastpack')
    if (!existsSync(fastpackFolder)) {
        await mkdir(fastpackFolder)
    }

    const fileContent = await readFile(join(__dirname, '..', '..', 'template', 'bootstrap.tsx'), 'utf8')
    const template = compile(fileContent)
    const content = template({
        routers: routers.map((router) => ({
            name: router.component.split(sep).join('_'),
            component: router.component
        })),
        rootRender,
    })
    await writeFile(join(process.cwd(), 'src', '.fastpack', 'bootstrap.tsx'), content)
}