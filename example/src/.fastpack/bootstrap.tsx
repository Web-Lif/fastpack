import React, { Suspense } from "react";
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'
import RouterLoading from '../components/Loading'

const Route_Index = React.lazy(() => import('../pages'));
const Route_User_Login = React.lazy(() => import('../pages/User/Login'));
const Route_User_test = React.lazy(() => import('../pages/User/test'));

const NotFound = React.lazy(() => import('../components/NotFound'))

const Layout = React.lazy(() => import('../layouts'))


const routerRender = (props) => {

}

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
                                    <Route_Index />
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
                                    <Route_User_Login />
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
                                    <Route_User_test />
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
document.body.appendChild(root)
ReactDOM.render(
    <Bootstrap />
    ,
    root
)
