import { Suspense, useRef, useLayoutEffect, lazy } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet
} from 'react-router-dom'



const Route$Index = lazy(() => import(/* webpackPrefetch: true */'../pages'));
const RouteUserLogin = lazy(() => import(/* webpackPrefetch: true */'../pages/User/Login'));

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
            <Routes>
                <Route
                    path="/"
                    element={(
                        <div >
                            <Outlet />
                        </div>
                    )}
                >
                    <Route
                        index
                        element={(
                            <Suspense fallback={<div />}>
                                <Route$Index />
                            </Suspense>
                        )}
                    />
                    <Route
                        path="User/Login"
                        element={(
                            <Suspense fallback={<div />}>
                                <RouteUserLogin />
                            </Suspense>
                        )}
                    />
                    {routers.map(rt => {
                        const RouterComponent = rt.component
                        return (
                            <Route
                                path={rt.path}
                                key={rt.path}
                                element={(
                                    <Suspense fallback={<div />}>
                                        <RouterComponent />
                                    </Suspense>
                                )}
                            />
                        )
                    })}
                </Route>
                <Route
                    path="*"
                    element={(
                        <Suspense fallback={<div />}>
                            <div />
                        </Suspense>
                    )}
                />
            </Routes>
        </Router>
    )
}

export default Bootstrap
export { shareRouters as bootstrapRouters} 

