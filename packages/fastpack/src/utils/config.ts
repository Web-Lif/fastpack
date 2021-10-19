import { join } from 'path'
import { register } from 'ts-node'
import { FastPackConfig } from '../type'

register()

function testDefault(obj: any) {
    return obj.default || obj;
}

// eslint-disable-next-line import/prefer-default-export
export function getFastPackConfig(path: string = join(process.cwd(), '.fastpack.ts')): FastPackConfig  {
    delete require.cache[path]
    const userConfig = testDefault(require(path)) // eslint-disable-line
    return userConfig
}
