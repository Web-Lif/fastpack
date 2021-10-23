import React, { Suspense } from "react";
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'

import Layout from '../layouts'


import RouterLoading from '../components/Loading'

const Route$Index = React.lazy(() => import('../pages'));
const RouteUserLogin = React.lazy(() => import('../pages/User/Login'));
const RouteUsertest = React.lazy(() => import('../pages/User/test'));

const NotFound = React.lazy(() => import('../components/NotFound'))

function Bootstrap () {
    return (
        <Router>
            <Switch>
                <Route
                    path="/"
                    exact
                    sensitive
                    render={(props: any) => {
                        const layout = (
                            <Layout {...props}>
                                <Suspense fallback={<RouterLoading />}>
                                    <Route$Index {...props} />
                                </Suspense>
                            </Layout>
                        )
                        return layout
                    }}
                />
                <Route
                    path="/User/Login"
                    exact
                    sensitive
                    render={(props: any) => {
                        const layout = (
                            <Layout {...props}>
                                <Suspense fallback={<RouterLoading />}>
                                    <RouteUserLogin {...props} />
                                </Suspense>
                            </Layout>
                        )
                        return layout
                    }}
                />
                <Route
                    path="/User/test"
                    exact
                    sensitive
                    render={(props: any) => {
                        const layout = (
                            <Layout {...props}>
                                <Suspense fallback={<RouterLoading />}>
                                    <RouteUsertest {...props} />
                                </Suspense>
                            </Layout>
                        )
                        return layout
                    }}
                />
                <Route
                    path="*"
                    render={(props: any) => {
                        const RouterNotFund = <NotFound {...props}/>

                        const layout = (
                            <Layout {...props}>
                                <Suspense fallback={<div />}>
                                    {RouterNotFund}
                                </Suspense>
                            </Layout>
                        )
                        return layout
                    }}
                />
            </Switch>
        </Router>
    )
}

const root = document.createElement("div")
root.style.width = '100%'
root.style.height = '100%'
document.body.appendChild(root)
ReactDOM.render(
    <Bootstrap />
    ,
    root
)
