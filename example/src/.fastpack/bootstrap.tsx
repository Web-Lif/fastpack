import React, { Suspense } from "react";
import ReactDOM from 'react-dom'

import Bootstrap from '@fastpack.micro.frame'

(window as any).g_routers.push({
    path: '/',
    component: React.lazy(() => import('../pages'))
})
(window as any).g_routers.push({
    path: '/User/Login',
    component: React.lazy(() => import('../pages/User/Login'))
})

const extRouters = [
    {
        path: '/',
        component: React.lazy(() => import('../pages'))
    },
    {
        path: '/User/Login',
        component: React.lazy(() => import('../pages/User/Login'))
    },
]

const root = document.createElement("div")
root.style.width = '100%'
root.style.height = '100%'
document.body.appendChild(root)
ReactDOM.render(
    <Bootstrap routers={extRouters} />
    ,
    root
)
