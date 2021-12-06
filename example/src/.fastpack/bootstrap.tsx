import React, { Suspense } from "react";
import ReactDOM from 'react-dom'

import Bootstrap, { routers } from 'fastpack_micro/frame'

const extRouters = [
    {
        path: '/test/',
        component: React.lazy(() => import('../pages'))
    },
    {
        path: '/test/User/Login',
        component: React.lazy(() => import('../pages/User/Login'))
    },
] as any

(window as any).g_routers = extRouters.concat(routers)

if (document.querySelector('#root')) {
    ReactDOM.render(
        <Bootstrap />
        ,
        root
    )
} else {
    const root = document.createElement("div")
    root.setAttribute('id', 'root')
    root.style.width = '100%'
    root.style.height = '100%'
    document.body.appendChild(root)
    ReactDOM.render(
        <Bootstrap />
        ,
        root
    )
}
