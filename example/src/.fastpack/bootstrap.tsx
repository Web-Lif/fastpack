import React, { Suspense } from "react";
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'

const Route_Index = React.lazy(() => import('../pages'));
const Route_User_Login = React.lazy(() => import('../pages/User/Login'));

const NotFound = React.lazy(() => import('../components/NotFound'))

function Bootstrap () {
    return (
        <Router>
            <Suspense fallback={<div />}>
                <Switch>
                    <Route path="/" exact>
                        <Route_Index />
                    </Route>
                    <Route path="/User/Login" exact>
                        <Route_User_Login />
                    </Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
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
