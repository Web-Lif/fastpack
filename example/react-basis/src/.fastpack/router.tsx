import { useLayoutEffect, useRef, lazy } from "react";

import '@/startup'


const extRouters = [
    {
        path: '/test/',
        component: lazy(() => import( /* webpackPrefetch: true */ '../pages'))
    },
    {
        path: '/test/User/Login',
        component: lazy(() => import( /* webpackPrefetch: true */ '../pages/User/Login'))
    },
] as any

const vueRouters = [
] as any

const routers = extRouters.concat(vueRouters)

export {
    routers,
}
