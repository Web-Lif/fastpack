import { join } from 'path'
import { getFastPackConfig } from '../config'

test("get fastpack config", () => {
    const json: any = getFastPackConfig(join(__dirname, '.fastpack.config.ts'))
    expect(json.name).toBe("123")
})