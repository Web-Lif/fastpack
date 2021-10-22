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
            <Suspense fallback={<RouterLoading />}>
                <Switch>
                    <Route
                        path="/"
                        exact
                        render={props => {
                            const layout = (
                                <Layout {...props}>
                                    <Route$Index />
                                </Layout>
                            )
                            return layout
                        }}
                    />
                    <Route
                        path="/User/Login"
                        exact
                        render={props => {
                            const layout = (
                                <Layout {...props}>
                                    <RouteUserLogin />
                                </Layout>
                            )
                            return layout
                        }}
                    />
                    <Route
                        path="/User/test"
                        exact
                        render={props => {
                            const layout = (
                                <Layout {...props}>
                                    <RouteUsertest />
                                </Layout>
                            )
                            return layout
                        }}
                    />
                    <Route
                        path="*"
                        render={props => {
                            const RouterNotFund = <NotFound />
                            const layout = (
                                <Layout {...props}>
                                    {RouterNotFund}
                                </Layout>
                            )
                            return layout
                        }}
                    />
                </Switch>
            </Suspense>
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
