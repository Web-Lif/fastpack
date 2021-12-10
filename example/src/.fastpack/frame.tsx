import React, { Suspense } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'



const Route$Index = React.lazy(() => import(/* webpackPrefetch: true */'../pages'));
const RouteUserLogin = React.lazy(() => import(/* webpackPrefetch: true */'../pages/User/Login'));


export const routers = [
    {
        path: '/',
        component: Route$Index
    },
    {
        path: '/User/Login',
        component: RouteUserLogin
    },
] as any


const shareRouters = [] as any




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

