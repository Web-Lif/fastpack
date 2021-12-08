import React, { Suspense } from "react";
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'

let linktest;
try {
    linktest = require('fastpack_link_test/share')
}catch(e){
    console.error('micro: 加载 test@http://127.0.0.1:8015/fastpack.share.js 失败, 请检查是否可以正常访问')
}


const Route$Index = React.lazy(() => import('../pages'));
const RouteUserLogin = React.lazy(() => import('../pages/User/Login'));


export const routers = [
    {
        path: '/',
        component: React.lazy(() => import('../pages'))
    },
    {
        path: '/User/Login',
        component: React.lazy(() => import('../pages/User/Login'))
    },
] as any


const shareRouters = [] as any

if (linktest) {
    shareRouters.push(...linktest.routers)
}



interface BootstrapProps {
    routers?: {
        path: string
        component: any
    }[]
}

function Bootstrap ({
    routers = []
}: BootstrapProps) {
    return (
        <Router
            basename="/"
        >
            <Switch>
                <Route
                    path="/"
                    exact
                    sensitive
                    render={(props: any) => {
                        const router = (
                            <Suspense fallback={<div />}>
                                <Route$Index {...props} />
                            </Suspense>
                        )
                        return router
                    }}
                />
                <Route
                    path="/User/Login"
                    exact
                    sensitive
                    render={(props: any) => {
                        const router = (
                            <Suspense fallback={<div />}>
                                <RouteUserLogin {...props} />
                            </Suspense>
                        )
                        return router
                    }}
                />
                {routers.map(rt => (
                    <Route
                        path={rt.path}
                        exact
                        sensitive
                        key={rt.path}
                        render={(props: any) => {
                            const RouterComponent = rt.component
                            const comp = (
                                <Suspense fallback={<div />}>
                                    <RouterComponent {...props} />
                                </Suspense>
                            )
                            return comp
                        }}
                    />
                ))}
                <Route
                    path="*"
                    render={(props: any) => {
                        const RouterNotFund = <div />
                        return RouterNotFund
                    }}
                />
            </Switch>
        </Router>
    )
}

export default Bootstrap
export { shareRouters as bootstrapRouters} 

