import React from "react";
import ReactDOM from 'react-dom'

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

export {
    extRouters as routers,
}
