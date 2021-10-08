import { join } from 'path'
import { createServer } from 'net'
import { register } from 'ts-node'
import { FastPackConfig } from '../type'

register()

function testDefault(obj: any) {
    return obj.default || obj;
}

// eslint-disable-next-line import/prefer-default-export
export function getFastPackConfig(path: string = join(process.cwd(), '.fastpack.ts')): FastPackConfig  {
    Object.keys(require.cache).forEach((key) => {
        delete require.cache[key];
    })
    const userConfig = testDefault(require(path)) // eslint-disable-line
    return userConfig
}


export async function portIsEffective(port: number) {
    return new Promise<void>((resolve, reject) => {
        const server = createServer().listen(port)
        server.on('listening', () => {
            server.close()
            resolve()
        })
        
        server.on('error', (err: any) => {
            reject(err)
        })
    })
}
