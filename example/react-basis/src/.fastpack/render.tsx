import { createRoot } from 'react-dom/client';

import Bootstrap, {routers as bootstrapRouters} from 'fastpack_micro/frame'
import { routers } from './router'

(window as any).g_routers = routers.concat(bootstrapRouters)

if (document.querySelector('#root')) {
    const root = createRoot(document.querySelector('#root'));
    root.render(
        <Bootstrap routers={bootstrapRouters} />
    )
} else {
    const rootDiv = document.createElement("div")
    rootDiv.setAttribute('id', 'root')
    rootDiv.style.width = '100%'
    rootDiv.style.height = '100%'
    document.body.appendChild(rootDiv)
    const root = createRoot(rootDiv)
    root.render(
        <Bootstrap routers={bootstrapRouters} />
    )
}
