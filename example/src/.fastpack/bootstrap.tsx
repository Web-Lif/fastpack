import React, { Suspense } from "react";
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'

const _User_Login = React.lazy(() => import('../pages/User/Login'));

function Bootstrap () {
    
    return (
        <Router>
            <Suspense fallback={<div />}>
                <Switch>
                        <Route path="/User/Login">
                            <_User_Login />
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
